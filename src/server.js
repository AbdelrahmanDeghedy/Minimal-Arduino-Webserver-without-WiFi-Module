const { SerialPort } = require("serialport");
const express = require("express");

// Serial Communication
// const serialPort = new SerialPort({
//   path: "/dev/ttyACM1",
//   baudRate: 9600,
// });

// const writeToPort = (prompt) => {
//   serialPort.write(`${prompt}\n`, (err) => {
//     if (err) {
//       return console.log("Error on write: ", err.message);
//     }
//     console.log("message written");
//   });
// };

// Creating an express server
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.listen(3000);
console.log("working on 3000");

// Request handlers
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function (req, res) {
  const data = req.body;

  console.log("post request", data);
  // writeToPort(`1:${data}`);

  res.status(201).send("ok");
});
