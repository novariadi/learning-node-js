const express = require("express");

// inisialisasi express to app
const app = express();
// import module api route
const apiRouter = require("./api-routes");
// import mongose
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

// setup mongoose connection variable
mongoose.connect("mongodb://localhost/dataSiswa");
const db = mongoose.connection;

//setup default url
app.get("/", (req, res) => {
  res.send(
    "hallo, selamat data di data center siswa menggunakan node js dan mongodb"
  );
});

//setup url api to apirouter
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("data siswa berjalan di port 3000");
});
