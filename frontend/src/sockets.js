const RobotSocket = new WebSocket('ws://guiame.ddns.net:8000/ws/robot/R01/');
RobotSocket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("RobotSocket Received: ", data);
};

const UISocket = new WebSocket('ws://guiame.ddns.net:8000/ws/ui/R01/');
UISocket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("UISocket Received: ", data);
};

const dashboardSocket = () => {
  return new WebSocket('ws://guiame.ddns.net:8000/ws/dashboard/');
}

const createUISocket = (name) => {
  return new WebSocket('ws://guiame.ddns.net:8000/ws/ui/' + name + '/');
}

export { UISocket, RobotSocket, dashboardSocket, createUISocket };