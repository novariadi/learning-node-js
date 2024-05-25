const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write("Hai, selamat anda berhasil membuat server dengan <b>node js</b>");
    res.end();
});

server.listen(3000);
console.log("server running at port 3000")