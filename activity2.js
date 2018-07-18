var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function () 
{
    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/":
            return displayRoot(path, req, res);
        case "/portfolio":
            return displayPortfolio(path, req, res);
        default:
            return display404(path, req, res);
    }
}

function displayRoot(url, req, res)
{
    var myHTML = "";

    res.writehead(200, {"content-Type": "text/html"});

    res.end(myHTML);
}

function displayPortfolio(url, req, res)
{
    var myHTML = "";

    res.writeHead(200, {"content-Type": "text/html"});

    res.end(myHTML);
}

function display404(url, req, res)
{
    var myHTML = "";

    res.writeHead(400, {"content-Type": "text/html"});

    res.end(myHTML);
}


var goodPhrases = ["Whatever you are, be a good one.", "If you dream it, you can do it.", "If you dream it, you can do it.", "If not us, who? If not now, when?"];
var badPhrases = ["You can’t do it.", "You're not good enough", "You’ll fail.", "You're not up to the mark.", "You are useless.", "It’s impossible."];

function randomNumber(arrayName)
{
    var element = Math.floor(Math.random() * arrayName.length);
    return element;
}

function handleRequest1(request, response)
{
    response.end(goodphrases[randomNumber(goodPhrases)] + "and the site:" + request.url);
}

function handleRequest2(request, response)
{
    response.end(badphrases[randomNumber(badPhrases)] + " this site: " + request.url);
}

var server = http.createServer(handleRequest2);


server.listen(PORT2, function () 
{
    console.log("Server listening on: http://localhost:" + PORT2);
});