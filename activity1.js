var http = require("HTTP");

var PORT1 = 7000;
var PORT2 = 7500;

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
var server = http.createServer(handleRequest1);
var server = http.createServer(handleRequest2);

server.listen(PORT1, function () 
{
    console.log("Server listening on: http://localhost:" + PORT1);
});

server.listen(PORT2, function () 
{
    console.log("Server listening on: http://localhost:" + PORT2);
});