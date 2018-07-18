var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data)
    {
        res.writeHead(200, {"content-Type": "text/html"});
        res.end(data);
    });
}

server.listen(PORT, function () 
{
    console.log("Server listening on: http://localhost:" + PORT);
});