const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Hai, selamat anda berhasil membuat server dengan node js");
});

server.listen(3000);
console.log("server running at port 3000")