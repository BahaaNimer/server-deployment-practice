'use strict';

const express = require("express");
const stamper = require("../middlewares/stamper");
const notFoundHandler = require("../handlers/404");
const errorHandler = require("../handlers/500");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json({
    id: 1,
    name: "bahaa nimer",
    age: 25,
    email: "example@gmail.com",
  });
});

app.get("/test", stamper, (req, res) => {
  res.json({
    id: 2,
    name: "test",
    age: 'test',
    email: 'test@gmail.com',
    time: req.timeStamp,
  });
});

app.get('/bad', (req, res) => {
  res.status(500).send('error');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
};

module.exports = {
  app: app,
  start: start,
};