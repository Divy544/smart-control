const firebaseConfig = {
  apiKey: "AIzaSyBBzNwnOe9xv7UMkjHxjwQrYvZheIKrTJI",
  authDomain: "smartcontrolsystem-e361d.firebaseapp.com",
  databaseURL: "https://smartcontrolsystem-e361d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartcontrolsystem-e361d",
  storageBucket: "smartcontrolsystem-e361d.appspot.com",
  messagingSenderId: "253714063806",
  appId: "1:253714063806:web:9a205b9b3af5acb7ab99ef"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function turnOn(device) {
  db.ref("devices/" + device + "/status").set("ON");
}

function turnOff(device) {
  db.ref("devices/" + device + "/status").set("OFF");
}

function setTimer(device) {
  const day = document.getElementById("day").value;
  const on = document.getElementById("onTime").value;
  const off = document.getElementById("offTime").value;

  db.ref("devices/" + device + "/timer").set({
    day: day,
    on: on,
    off: off
  });
  alert("Timer Set for " + device);
}
