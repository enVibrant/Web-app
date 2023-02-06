const express = require("express");
const app = express();
//const MongoClient = require('mongodb').MongoClient;

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/eat", function (req, res) {
  res.send("🍕");
});

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.use(express.static("public"));
