var express = require("express");
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongod://localhost/animals');

var OwlSchema = new mongoose.schema({
	color: String,
	size: String,
	age: String,
	cuteness: Number
})

mongoose.model('CuteOwl', OwlSchema);

var owls = mongoose.model('CuteOwl');


app.get('/', function(request, response){
	response.send("<h1> Working</h1>");
})

app.get('/owls/new', function(request, response){
	response.send("<h2> Display a form</h2>");
})
app.get('/owls/:id', function(request, response){
	response.send("<h2> Info on one owl</h2>")
})
app.post('/owls', function(request, response){
	response.redirect("owls/:id");
})
app.get('/owls/edit/:id', function(request, response){
	response.send("<h2> Display a form to edit</h2>")
})
app.post('/owls/:id', function(request, response){
	response.redirect("owls/:id");
})
app.post('/owls/destroy/:id', function(request, response){
	response.redirect("/");
})

app.listen(8000, function(){
	console.log("port 8000 is working");
})

