const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app I WANT TO BE YOURS be with me forr the whole liffeeee");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith hamzsa");
});

app.listen(5000, () => {
  console.log("listening");
});
