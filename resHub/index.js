// import express
const express = require("express");
// inisialisasi express to app
const app = express();
// import module api route
const apiRouter = require("./api-routes");
// import mongoose
const mongoose = require("mongoose");
// import body-parser
const bodyParser = require("express");

// setup bodyParser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

// setup mongose connection variable
mongoose.connect("mongodb://localhost/resHub");
const db = mongoose.connection;

// setup default url
app.get("/", (req, res) => {
  res.send(
    "hello, selamat anda telah berhasil membuat webserver dengan express"
  );
});

// setup url api to apirouter
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("server berjalan di port 3000");
});
