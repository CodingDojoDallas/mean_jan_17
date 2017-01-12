var http = require('http');
//var fs = require('fs');

var static_contents = require('./static')();

server = http.createServer(function (request, response){
  static_contents.static_route(request, response);
});

server.listen(8000);

console.log("Running in localhost at port 8000");