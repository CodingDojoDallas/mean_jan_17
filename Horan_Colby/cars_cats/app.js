var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url)
    if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents) 
            response.end()
        })
    }
    else if (request.url === "/cars") {
         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'})
             response.write(contents) 
             response.end()
         })
    }
    else if (request.url === '/images/car1.jpg'){
        fs.readFile('./images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'})
            response.write(contents)
            response.end()
        })
    }
    else if (request.url === '/images/car2.jpg'){
        fs.readFile('./images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'})
            response.write(contents)
            response.end()
        })
    }
    else if (request.url === '/images/car3.jpg'){
        fs.readFile('./images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'})
            response.write(contents)
            response.end()
        })
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'})
             response.write(contents) 
             response.end()
         })
    }
    else if (request.url === '/images/cat1.jpg'){
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'})
            response.write(contents)
            response.end()
        })
    }
    else if (request.url === '/images/cat2.jpg'){
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'})
            response.write(contents)
            response.end()
        })
    }
    else if (request.url === '/images/cat3.jpg'){
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'})
            response.write(contents)
            response.end()
        })
    }
    else if (request.url === "/cars/new") {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'})
             response.write(contents) 
             response.end()
         })
    }
    else {
        response.end('File not found!!!')
    }
})

server.listen(3791)
console.log("Running in localhost at port 3791")