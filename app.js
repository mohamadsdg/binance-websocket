const io = require("socket.io-client");

let socketTest = io.connect("http://127.0.0.1:3000/live-price");

socketTest.on("tickerUpdate", (data) => { console.log(data); });