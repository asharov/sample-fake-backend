var jsonServer = require('json-server');
var data = require('./data');

var server = jsonServer.create();
var router = jsonServer.router(data());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

var port = process.env.PORT || 3000;
server.listen(port);
