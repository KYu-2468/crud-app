const express = require("express");
const app = express();
const path = require("path");

module.exports = app;

// example api route
app.get("/api/test", (req, res, next) => {
  console.log(req.url);
  res.send("Hello");
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("*", (req, res, next) => {
  res.send("Hit" + req.url);
});

// app.listen(8080, () => {
//   console.log("listening to port 8080");
// });
