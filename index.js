const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/list_students", (req, res) => {
  fs.readFile(__dirname + "/" + "student.json", (err, data) => {
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`app listening at https://localhost:${port}`);
});
