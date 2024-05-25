const express = require('express');
const app = express();
const apiRouter = require('./api-routers')

app.use('/', apiRouter)

app.listen(3000, () => {
    console.log('server tugas 1 berjalan di router 3000');
})
