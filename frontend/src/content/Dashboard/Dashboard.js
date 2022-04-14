import React from 'react';
import Konva from 'konva';
import stage from './stage.json';
import { Stage, Layer, Rect, Text } from 'react-konva';
import {UISocket } from '../../sockets';
import Crono from '../Crono/Crono';

let halls=[];

const Dashboard = () => {
  const stageRef = React.useRef(null);
  const rectRef = React.useRef(null);
  const [hall, setHall]=React.useState(0);
  var hallsId=[];
  var cont_inic=true;
  var cont_parar=false;
  var time=[];
  var time2=[];
  for (let i = 0; i < halls.length; i++) {
    hallsId[i]="hall"+halls[i];
  }

  UISocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("UISocket Received: ", data);
    if(data.hall!==undefined){
      rectRef.current.opacity(1);
      setHall(data.hall);
      halls.push(data.hall);
    }
    if (data.active!==undefined && data.active && cont_inic){
      document.getElementById("restart").click();
      document.getElementById("start").click();
      cont_inic=!cont_inic;
      cont_parar=!cont_parar;

    }
    else if(data.active!==undefined && !data.active && cont_parar) {
      document.getElementById("stop").click();
      var a=document.getElementById("timer").textContent;
      time = a.split(":");
      time2 = time[2].split(".")
      cont_parar=!cont_parar;
      cont_inic=!cont_inic;

      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ robot_id: 'R01', destiny : data.route.dest_room, minutes: time[1], seconds: time2[0], miliseconds: time2[1] })
    };

      try {
        fetch(
            'http://localhost:8000/api/stats/', requestOptions)
            .then(response => {
                response.json()
            })
    }
    catch (error) {
        console.error(error);
    }

    }
  };

  



  React.useEffect(() => {
    console.log(rectRef);
    if (rectRef.current !== null) {
      var period = 300;
  
      const anim = new Konva.Animation(frame => {
        if (rectRef.current !== null) {
          rectRef.current.opacity((Math.sin(frame.time / period) + 1) / 2);
        }
          
      }, rectRef.current.getLayer());
  
      anim.start();
      return () => {
        anim.stop();        
      }; 
    }
  }, []);
  
  return (
    <>
    <Crono id="crono"></Crono>
    <Stage width={stage.stageWidth} height={stage.stageHeight} ref={stageRef}>
      {stage.layers.map((layer, index) => {
        const hallId = "hall" + hall;
        return (
          <Layer key={index}>
            {layer.elements.map((element, index) => {
              if (element.type === "Rect") {
                let inPath = false;
                inPath = hallsId.find((el) => element.attrs.id === el) ? true : false;
                inPath = inPath ? true : element.attrs.id === hallId;
                if (element.attrs.id === "hall0")
                  inPath = false; //Si es el HALL inicial lo dejamos en cian
                if (hallId === "hall0" && halls.length !== 0) {
                  halls.splice(0, halls.length);
                  hallsId.splice(0, hallsId.length); //Al volver al HALL (id="hall0") vaciamos array de halls -> "reiniciamos"
                }
                return <Rect key={index} {...element.attrs} fill={inPath === true ? "green" : element.attrs.fill} ref={element.attrs.id === hallId ? rectRef : null} />;
              } else if (element.type === "Text") {
                return <Text key={index} {...element.attrs} />;
              }

              return null;
            })}
          </Layer>
        );
      }
      )}
    </Stage></>
  );
};

export default Dashboard;