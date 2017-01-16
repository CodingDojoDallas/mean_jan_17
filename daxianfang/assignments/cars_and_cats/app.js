var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
	console.log('client request URL: ', request.url);
	if (request.url === '/cars') {
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/cats') {
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/cars/new') {
		fs.readFile('./views/new.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/bmw_m4.jpg') {
		fs.readFile('./images/bmw_m4.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/bmw_m5.jpg') {
		fs.readFile('./images/bmw_m5.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/bmw_m6.jpg') {
		fs.readFile('./images/bmw_m6.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/kitten1.jpg') {
		fs.readFile('./images/kitten1.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/kitten2.jpg') {
		fs.readFile('./images/kitten2.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === '/images/kitten3.jpg') {
		fs.readFile('./images/kitten3.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
});

server.listen(6789);
console.log("Running in localhost at port 6789");