"use strict";
console.log("starting");
var restify = require('restify');
var count = 0;
var name = "";
var server = restify.createServer();
server.use(restify.queryParser());
server.get('/saveperson', function (request, response, next) {
    console.log(request.url, request.params);
    name = request.query.name;
    response.write('Remembering ' + name);
    response.end();
    next();
});
server.get('/listpeople', function (request, response, next) {
    console.log(request.url, request.params);
    response.write('Hello ' + name);
    response.end();
    next();
});
server.listen(8080);
console.log('Server is listening on port 8080');
//# sourceMappingURL=server.js.map