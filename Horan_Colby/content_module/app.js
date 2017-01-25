
var http = require('http')
var fs = require('fs')
var static_contents = require('./static.js')

var server = http.createServer(function (request, response){
  static_contents(request, response)
})
server.listen(8000)
console.log("Running in localhost at port 8000")