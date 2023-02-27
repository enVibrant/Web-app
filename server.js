const { text } = require("body-parser");
const express = require("express");
const app = express();
//const MongoClient = require('mongodb').MongoClient;

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/pizza", function (req, res) {
  res.send("🍕");
});

app.get("/pizza/:eat", (req, res) => {
  const count = req.params.eat;
  let i = 0,
    text = "";
  while (i < count) {
    text += "🍕";
    i++;
  }
  res.send(text);
});

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.use(express.static("public"));
