// import mongoose
const mongoose = require('mongoose');

// db connection
const connectDB = async () => {
    try {
        // url to databas
        const con = await mongoose.connect("mongodb://localhost/StudyCase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // log connection
        console.log('MongoDB Connected: ' + con.connection.host);
    } catch (err){
        console.log(err)
        // shutdown server
        process.exit(1)
    }
}

module.exports = connectDB;