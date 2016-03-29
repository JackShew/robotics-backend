console.log("starting");

import restify = require('restify');

var count = 0;
var name = "";
var timesVisited = "";
var body = '<html><body>hello</body></html>';

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/saveperson', (request, response, next) => {
    console.log(request.url, request.params);
    name = request.query.name;
    
    response.write('Remembering ' + name);
    response.end(); 
    next();
});

server.get('/html1', (request, response, next) =>
{

    response.writeHead(200, 
    {
        'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();                                                                     
});
server.get('/listpeople', (request, response, next) => {
    console.log(request.url, request.params);
    response.write('Hello ' + name + body);
    response.end(); 
    next();
});

   
server.listen(8080);

console.log('Server is listening on port 8080');