var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
	console.log('client request URL: ', request.url);

	var splitURL = request.url.split('/');
	console.log('splitURL: ', splitURL);

	if(request.url === '/') {
		fs.readFile('./views/index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars') {
		fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new') {
		fs.readFile('./views/new.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cats') {
		fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
  	else if(request.url === '/stylesheets/style.css'){
		fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-type': 'text/css'});
			response.write(contents);
			response.end();
		})
  	}
	else if(splitURL[1] == "images") {
		serveImage(splitURL[2], response);
	}
	else {
		serve404(response);
	}


});


function serveCSS(response) {
    fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
		response.writeHead(200, {'Content-Type': 'text/css'});
		response.write(contents);
		response.end();
    });
}

function serveImage(image, response) {
	fs.readFile(`./images/${image}`, function (errors, contents){
		if (errors) {
			return serve404(response);
		}
		response.writeHead(200, {'Content-Type': 'image/jpg'});
		response.write(contents);
		response.end();
	});
}

function serve404(response) {
	response.writeHead(404);
	response.end('The URL requested is not available.');
}

server.listen(7077);
console.log("Running in localhost at port 7077");