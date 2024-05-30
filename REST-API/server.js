// import express 
const express = require('express');
// import morgan
const morgan = require('morgan')
// import bodyParser
const bodyParser = express;
// import connection to mongoDB
const connectDB = require('./database/connection')
// connection start 
connectDB();
// inisiasi app
const app = express();
// setuup port
const port = 3000

// log requst
app.use(morgan('tiny'));

// setup bodyParser
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)
app.use(bodyParser.json());

// load router
app.use('/', require('./routes/router'));

// running server
app.listen(port, () => {
    console.log("server is running on port :"+ port)
})