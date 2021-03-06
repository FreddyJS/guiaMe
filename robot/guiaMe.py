import time
import threading
from typing import List

import api
import picar
import board
import config
import adafruit_tcs34725

import bluetooth.scanner as scanner
from wheels import Front_Wheels, Back_Wheels
from sensors.LineFollower import LineFollower
from sensors.UltrasonicSensor import UltrasonicSensor


# Global variables
max_off_track_count = config.LINE_FOLLOWER_MAX_OFF_TRACK_COUNT
forward_speed = config.PICAR_MED_SPEED
current_hall = "pasillo0"
backward_speed = 70
off_track_count = 0
turning_angle = 90
obstacle = False
delay = 0.0005
route = None

# Bluetooth demo variables
DEVICE_NAME = "HuaweiAP"
bluetooth = False
rssi_reference = 0
contador = 0
estado = 1


# Ultrasonic sensor
def on_obstacle(blocked):
    global obstacle
    obstacle = blocked


ultrasonicSensor = UltrasonicSensor(config.ULTRASONIC_SENSOR_CHANNEL, on_obstacle, config.ULTRASONIC_SENSOR_MIN_DISTANCE)
ultrasonicSensor.start()

# Color sensor
i2c = board.I2C()
colorSensor = adafruit_tcs34725.TCS34725(i2c)
colorSensor.integration_time = config.COLOR_SENSOR_INTEGRATION_TIME
colorSensor.gain = config.COLOR_SENSOR_GAIN

# Line follower
lf = LineFollower()
lf.references = config.LINE_FOLLOWER_REFERENCES

# PiCar Wheels
picar.setup()
fw = Front_Wheels()
bw = Back_Wheels()
fw.ready()
bw.ready()


def processMessage(message: object):
    global route, bluetooth
    print("Received message: " + str(message))

    if "type" not in message:
        return

    if message["type"] == "start":
        route = message["route"]
    elif message["type"] == "bluetooth":
        bluetooth = not bluetooth


def processSample(message: str):
    global rssi_reference, forward_speed, contador, estado
    sample = int(message.split(":")[0])

    if rssi_reference == 0:
        rssi_reference = -55
        # rssi_reference = sample
        print("rssi_reference: " + str(rssi_reference))
    else:
        print("rssi_sample: {}, contador: {}".format(sample, contador))
        diff = sample - rssi_reference

        if (diff > 0):
            diff = 1

        diff = abs(diff)
        if diff >= 0 and diff < 4:
            if estado != 1:
                contador = 0
            elif contador == 10:
                forward_speed = config.PICAR_MED_SPEED
                print("Seteando speed %i" % forward_speed)
            estado = 1
            contador += 1
        elif diff >= 4 and diff < 8:
            if estado != 2:
                contador = 0
            elif contador == 10:
                forward_speed = int(config.PICAR_MED_SPEED/2)
                print("Seteando speed %i" % forward_speed)
            estado = 2
            contador += 1
        elif diff >= 8:
            if estado != 3:
                contador = 0
            elif contador == 20:
                forward_speed = 0
                print("PArando vehiculo %i " % forward_speed)
            estado = 3
            contador += 1


def is_red() -> bool:
    r, g, b, c = colorSensor.color_raw
    return r > g + 4 and r > b + 4
    # color_temp = colorSensor.color_temperature
    # return False if color_temp == None else color_temp < config.COLOR_SENSOR_RED_VALUE


def is_blue() -> bool:
    color_temp = colorSensor.color_temperature
    return False if color_temp == None else color_temp < config.COLOR_SENSOR_BLUE_VALUE and color_temp > config.COLOR_SENSOR_RED_VALUE


def follow_line_bluetooth():
    global turning_angle, forward_speed
    bw.speed = forward_speed
    off_track_count = 0

    a_step = config.PICAR_A_STEP
    b_step = config.PICAR_B_STEP
    c_step = config.PICAR_C_STEP
    d_step = config.PICAR_D_STEP
    bw.forward()

    while bluetooth:
        check_obstacle()

        bw.speed = forward_speed
        bw.forward()

        lf_status = lf.read_digital()

        # Angle calculate
        if lf_status == [0, 0, 1, 0, 0]:
            step = 0
        elif lf_status == [0, 1, 1, 0, 0] or lf_status == [0, 0, 1, 1, 0]:
            step = a_step
        elif lf_status == [0, 1, 0, 0, 0] or lf_status == [0, 0, 0, 1, 0]:
            step = b_step
        elif lf_status == [1, 1, 0, 0, 0] or lf_status == [0, 0, 0, 1, 1]:
            step = c_step
        elif lf_status == [1, 0, 0, 0, 0] or lf_status == [0, 0, 0, 0, 1]:
            step = d_step

        # Direction calculate
        if lf_status == [0, 0, 1, 0, 0]:
            off_track_count = 0
            fw.turn(90)
        # turn right
        elif lf_status in ([0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 0, 0, 0, 0]):
            off_track_count = 0
            turning_angle = int(90 - step)
        # turn left
        elif lf_status in ([0, 0, 1, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 1, 1], [0, 0, 0, 0, 1]):
            off_track_count = 0
            turning_angle = int(90 + step)
        elif lf_status == [0, 0, 0, 0, 0]:
            off_track_count += 1
            if off_track_count > max_off_track_count:
                print("off_track_count:", off_track_count)
                print("last_status:", lf_status)
                raise KeyboardInterrupt
        else:
            off_track_count = 0

        fw.turn(turning_angle)
        time.sleep(delay)


def follow_line() -> List[int]:
    """ 
        Detects the line and turns the wheels to keep the line in the center. 
        Returns a boolean indicating if the line is being followed and a list with the status of the line follower.
        Automatically stops the robot in case of an obstacle and restarts it when the obstacle is gone.
    """
    global forward_speed, off_track_count, obstacle, turning_angle, max_off_track_count

    a_step = config.PICAR_A_STEP
    b_step = config.PICAR_B_STEP
    c_step = config.PICAR_C_STEP
    d_step = config.PICAR_D_STEP

    # Obstacle detection
    check_obstacle()  # It returns only if there is no obstacle

    lf_status = lf.read_digital()

    # Angle calculate
    if lf_status == [0, 0, 1, 0, 0]:
        step = 0
    elif lf_status == [0, 1, 1, 0, 0] or lf_status == [0, 0, 1, 1, 0]:
        step = a_step
    elif lf_status == [0, 1, 0, 0, 0] or lf_status == [0, 0, 0, 1, 0]:
        step = b_step
    elif lf_status == [1, 1, 0, 0, 0] or lf_status == [0, 0, 0, 1, 1]:
        step = c_step
    elif lf_status == [1, 0, 0, 0, 0] or lf_status == [0, 0, 0, 0, 1]:
        step = d_step

    # Direction calculate
    angle = 89 if turning_angle >= 90 else 91
    if lf_status == [0, 0, 1, 0, 0]:
        off_track_count = 0
        fw.turn(angle)
    # turn right
    elif lf_status in ([0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 0, 0, 0, 0]):
        off_track_count = 0
        turning_angle = int(90 - step)
    # turn left
    elif lf_status in ([0, 0, 1, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 1, 1], [0, 0, 0, 0, 1]):
        off_track_count = 0
        turning_angle = int(90 + step)
    elif lf_status == [0, 0, 0, 0, 0]:
        off_track_count += 1
        if off_track_count > max_off_track_count:
            print("off_track_count:", off_track_count)
            print("last_status:", lf_status)
            raise KeyboardInterrupt
    else:
        off_track_count = 0

    fw.turn(turning_angle)
    return lf_status


def check_obstacle():
    # Measuring distance
    if obstacle:
        bw.stop()
        api.obstacle_on_hall(current_hall)

        print("Obstacle detected, current hall: " + current_hall)
        while obstacle:
            time.sleep(0.1)

    bw.speed = forward_speed
    bw.forward()


def wait_for_crosspath():
    while True:
        lf_status = follow_line()
        if lf_status == [1, 1, 1, 1, 1]:
            break


def wait_end_of_crosspath():
    while True:
        lf_status = follow_line()
        if lf_status != [1, 1, 1, 1, 1]:
            break


def wait_tile_status(status):
    while True:
        check_obstacle()
        lt_status = lf.read_digital()
        if lt_status == status:
            break


def turn_left():
    fw.turn(90 - 45)
    wait_tile_status(status=[0, 0, 0, 0, 1])
    wait_tile_status(status=[1, 0, 0, 0, 0])


def turn_right():
    fw.turn(90 + 45)
    wait_tile_status(status=[1, 0, 0, 0, 0])
    wait_tile_status(status=[0, 0, 0, 0, 1])


def follow_route(route: List[str] = ["derecha._CRUCE_1", "izquierda._CRUCE_2", "derecha._CRUCE_3", "izquierda._CRUCE_4", "0._HABITACION_5"], returning: bool = False) -> str:
    global forward_speed, current_hall
    room_count = 0
    in_red = False
    action = None

    bw.speed = forward_speed
    bw.forward()

    if "vuelta" in route[0] and "False" in route[0]:
        route.pop(0)
    elif "vuelta" in route[0] and "True" in route[0]:
        route[0] = route[0].split(".True")[0]

    while True:
        lf_status = follow_line()

        # Room Detection
        red = is_red()
        if red and not in_red:
            if "HABITACION" in route[0]:
                action = route.pop(0)
                room_count += 1
                in_red = True

                print("Room detected, action: " + action)

                if "recto" not in action and "HABITACION" in action:
                    print("Reached the destination")
                    bw.stop()
                    return action
                else:
                    if returning:
                        current_hall = "pasillo{}{}".format(route[0][-1], action[-1])
                    else:
                        current_hall = "pasillo{}{}".format(action[-1], route[0][-1])

                    print("Detected room, current_hall: " + current_hall)
                    threading.Thread(target=api.update_current_hall, args=(current_hall,)).start()

        elif not red and in_red:
            print("Detected room exit")
            in_red = False

        # Crosspath Detection
        if lf_status == [1, 1, 1, 1, 1]:
            action = route.pop(0)

            forward_speed = config.PICAR_CROSSPATH_SPEED
            bw.speed = forward_speed
            bw.forward()

            print("The robot has reached a crosspath")
            wait_end_of_crosspath()
            print("The robot has passed the crosspath")

            if action.startswith("recto"):
                # We have to pass two crosspaths
                print("Esperando a pasar el segundo cruce...")
                wait_for_crosspath()
                wait_end_of_crosspath()
                print("El robot ha pasado el segundo cruce, continuando recto")

            elif action.startswith("izquierda"):
                print("Esperando al segundo cruce para girar a la izquierda")
                wait_for_crosspath()
                wait_end_of_crosspath()

                print("El robot ha pasado el segundo cruce, girando a la izquierda")
                turn_left()
                print("El robot ha pasado el segundo cruce. Esperando al tercer cruce...")

                wait_for_crosspath()
                wait_end_of_crosspath()
                print("El robot ha pasado el tercer cruce, continuando recto (fin de giro izquierda)")

            elif action.startswith("derecha"):
                print("Girando a la derecha")
                turn_right()
                print("Saliendo del cruce")

            elif action.startswith("vuelta"):
                print("Pasillo con salida. Girando a la izquierda dos veces...")
                wait_for_crosspath()
                wait_end_of_crosspath()

                turn_left()
                wait_for_crosspath()
                wait_end_of_crosspath()

                print("El robot ha pasado el segundo cruce, girando a la izquierda")
                turn_left()

                wait_for_crosspath()
                wait_end_of_crosspath()
                print("El robot ha pasado el tercer cruce, continuando recto")

            else:
                print("Unexpected action for crosspath: " + action)
                raise KeyboardInterrupt

            forward_speed = config.PICAR_MED_SPEED

            if returning:
                current_hall = "pasillo{}{}".format(route[0][-1], action[-1])
            else:
                current_hall = "pasillo{}{}".format(action[-1], route[0][-1])

            print("Continuando recto, nuevo pasillo: " + current_hall)
            threading.Thread(target=api.update_current_hall, args=(current_hall,)).start()
            api.ui_next_direction()


if __name__ == '__main__':
    api.start_ws(processMessage)
    try:
        while True:
            while route is None and bluetooth is False:
                time.sleep(0.25)

            if bluetooth is True:
                print("Starting Bluetooth demo")
                scanner.start(DEVICE_NAME, processSample)
                while rssi_reference == 0:
                    time.sleep(0.25)

                follow_line_bluetooth()
                scanner.stop()
                print("Bluetooth demo finished")
                bw.stop()
                fw.turn(90)
            else:
                # Going to the destiny room
                print("Starting route to room: " + route["dest_room"])
                current_hall = "pasillo01"
                route["route"].pop(0)
                api.active(True, route)
                api.update_current_hall(current_hall)

                last_action = follow_route(route=route["route"])
                api.active(False, route)
                api.ui_finished_route()
                time.sleep(5)

                # Going to the start room
                print("Starting route to room: " + route["origin_room"])
                node = route["return_route"][1].split(".")[1][-1]
                # print("Last: " + last_action + " Node: " + node)
                current_hall = "pasillo{}{}".format(node, last_action[-1])
                api.active(True, route)
                api.update_current_hall(current_hall)

                bw.speed = config.PICAR_MED_SPEED
                follow_route(route=route["return_route"], returning=True)
                print("Finished return route")
                api.active(False, route)
                api.ui_finished_route()

                route = None
    except KeyboardInterrupt:
        bw.stop()
        fw.turn(90)
        api.close_ws()
        ultrasonicSensor.kill()
