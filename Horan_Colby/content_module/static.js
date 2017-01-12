
var http = require('http')
var fs = require('fs')
module.exports = function (request, response){
  
  console.log('Request', request.url)
  if(request.url === '/'){
    fs.readFile('./views/index.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'})
      response.write(contents) 
      response.end()
    })
  } else if(fs.existsSync('./views' + request.url + '.html')){
    fs.readFile('./views' + request.url + '.html', function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'})
      response.write(contents)
      response.end()
    })
  } else if(fs.existsSync('./stylesheet' + request.url)){
    fs.readFile('./stylesheet' + request.url, function (errors, contents){
      response.writeHead(200)
      response.write(contents)
      response.end()
    })
  } else if(fs.existsSync('./images' + request.url)){
    fs.readfile('./images' + request.url, function(errors, contents){
      response.writeHead(200)
      response.write(contents)
      response.end()  
    })  
  } else {
      response.end('File not found!!!')
  }
}