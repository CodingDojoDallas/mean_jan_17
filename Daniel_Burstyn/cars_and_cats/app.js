// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === "/cars.html") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cats.html") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }    
    else if (request.url === "/cars/new.html") {
         fs.readFile('views/new_car.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/images/cars/2015.7.16-Floyd.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars/2015.7.16-Floyd.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }
    else if(request.url === '/images/cats/Amazing_Tattooed_Sphynx_Cats_14.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats/Amazing_Tattooed_Sphynx_Cats_14.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }                   
    // request didn't match anything:
    else {
        response.end('URL requested is not available!!!');
    }
});

server.listen(7077);
console.log("Running on 7077");