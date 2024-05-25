const express = require("express");
const app = express();
const apiRouter = require('./api-routes');


app.get("/", (req, res) => {
  res.send(
    "hello, selamat anda telah berhasil membuat webserver dengan express"
  );
});

app.use('/api', apiRouter)


app.listen(3000, () => {
  console.log("server berjalan di port 3000");
});
