var http = require("HTTP");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response)
{
    response.end("You're good enough, smart enough, and gosh darnit, people like you...and the site:" + request.url);
}

var server = http.createServer(handleRequest1);

server.listen(PORT1, function () 
{
    console.log("Server listening on: http://localhost:" + PORT1);
});

function handleRequest2(request, response)
{
    response.end("No one likes your taste in music, or this site: " + request.url);
}

var server = http.createServer(handleRequest2);

server.listen(PORT2, function () 
{
    console.log("Server listening on: http://localhost:" + PORT2);
});