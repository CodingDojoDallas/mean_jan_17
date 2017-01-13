var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request,response){
	console.log("client request URL:", request.url);

	if(request.url ==='/'){
		fs.readFile('index.html', "utf8", function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if (request.url === "/ninjas") {
		// if (request.url ==="/new"){
			fs.readFile('ninjas.html', 'utf8', function(errors, contents){
				response.writeHead(200, {"Content-Type": 'text/html'});
				response.write(contents);
				response.end();
			})
		// }
	}
	else if (request.url === "/dojos/new") {
		// if (request.url ==="/new"){
			fs.readFile('dojos.html', 'utf8', function(errors, contents){
				response.writeHead(200, {"Content-Type": 'text/html'});
				response.write(contents);
				response.end();
			})
		// }
	}
	else{
		response.end("File not found!!!");
	}
})

server.listen(6789);

console.log("Running in localhost as port 6789");