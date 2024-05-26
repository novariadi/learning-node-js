const express = require('express');
const app = express();
const apiRouter = require('./api-routers')

app.get("/", (req, res) => {
  res.send("Selamat Datang Di Data Center Siswa Indonesia");
});

app.use('/DataSiswa', apiRouter)

app.listen(3000, () => {
    console.log('server tugas 1 berjalan di router 3000');
})
