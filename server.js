console.log("starting");

var http = require ('http');

var server = http.createServer(function(inMessage, outMessage) {
    console.log(inMessage.url);
    outMessage.write('Hello World!');
    outMessage.end();
});

server.listen(8080);

console.log('Server is listening on port 8080');