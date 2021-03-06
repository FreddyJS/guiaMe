import time
import RPi.GPIO as GPIO
from threading import Thread


class UltrasonicSensor(Thread):
    timeout = 0.025

    def __init__(self, channel, on_obstacle, min_distance):
        super().__init__()
        self.channel = channel
        self.min_distance = min_distance
        self.on_blocked = on_obstacle
        self.blocked = False
        self._running = False
        GPIO.setmode(GPIO.BCM)

    def run(self):
        self._running = True
        while self._running:
            distance = self.distance()
            if distance >= 0 and distance <= self.min_distance:
                self.blocked = True
            elif distance > self.min_distance:
                self.blocked = False

            self.on_blocked(self.blocked)
            time.sleep(0.05)

    def kill(self):
        self._running = False
        self.join()

    def distance(self):
        try:
            # GPIO.cleanup()
            pulse_end = 0
            pulse_start = 0
            GPIO.setup(self.channel, GPIO.OUT)
            GPIO.output(self.channel, False)
            time.sleep(0.01)
            GPIO.output(self.channel, True)
            time.sleep(0.00001)
            GPIO.output(self.channel, False)
            GPIO.setup(self.channel, GPIO.IN)
            timeout_start = time.time()
            while GPIO.input(self.channel) == 0:
                pulse_start = time.time()
                if pulse_start - timeout_start > self.timeout:
                    return -1
            while GPIO.input(self.channel) == 1:
                pulse_end = time.time()
                if pulse_start - timeout_start > self.timeout:
                    return -1
            if pulse_start != 0 and pulse_end != 0:
                pulse_duration = pulse_end - pulse_start
                distance = pulse_duration * 100 * 343.0 / 2
                distance = int(distance)
                #print('start = %s'%pulse_start,)
                #print('end = %s'%pulse_end)
                if distance >= 0:
                    return distance
                else:
                    return -1
            else:
                #print('start = %s'%pulse_start,)
                #print('end = %s'%pulse_end)
                return -1
        except Exception as e:
            print("Other exception has occurred" + e)

    def get_distance(self, mount=2):
        valid = mount
        sum = 0
        for _ in range(mount):
            a = self.distance()
            if(str(a) == "None"):
                valid -= 1
            else:
                sum += a

        if valid == 0:
            return -1

        return int(sum/valid)

    def less_than(self, alarm_gate):
        try:
            dis = self.get_distance()
            status = 0
            if dis > 0 and dis <= alarm_gate:
                status = 1
            elif dis > alarm_gate:
                status = 0
            else:
                status = -1
        #print('distance =',dis)
        #print('status =',status)
        except:
            print("Error en distance")
        finally:
            GPIO.cleanup()
            return status


def test():
    UA = UltrasonicSensor(17)
    threshold = 10
    while True:
        distance = UA.get_distance()
        status = UA.less_than(threshold)
        if distance != -1:
            print('distance', distance, 'cm')
            time.sleep(0.2)
        else:
            print(False)
        if status == 1:
            print("Less than %d" % threshold)
        elif status == 0:
            print("Over %d" % threshold)
        else:
            print("Read distance error.")


if __name__ == '__main__':
    test()
