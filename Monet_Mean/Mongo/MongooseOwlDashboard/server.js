
var express = require("express"),
	path= require('path'),
	bp =require('body-parser'),
	mongoose = require('mongoose');
var app = express();

app.use(bp.urlencoded({ extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var connection = mongoose.connect('mongodb://localhost/animals');

var OwlSchema = new mongoose.Schema({

	color: String,
	size: String,
	age: String,
	cuteness: Number
})

mongoose.model('CuteOwl', OwlSchema);

var Owl = mongoose.model('CuteOwl');

var listOwls = Owl.find({}, function(err,results){
	console.log("errors: ", err);
})

// Routes for Owls CRUD

app.get('/', function(request, response){
		Owl.find({}, function(err,results){
		if (err){console.log(err);}
		response.render("index", {owls: results});
		})
	})
app.get('/owls/new', function(request, response){
	response.render("new");
})
app.get('/owls/edit/:id', function(request, response){
	Owl.findOne({_id: request.params.id}, function(err, result){
		if (err) {
			console.log(err);
		}
		response.render("edit", {owl: result})
	})

})

app.get('/owls/:id', function(request, response){
	Owl.find({_id: request.params.id}, function(err, result){
		if (err) {
			console.log(err);
		}
		console.log(result);
		response.render("show", {owl: result[0]})
	})

})
app.post('/owls', function(request, response){
	Owl.create(request.body, function(err,result){
		response.redirect("/");
	})
})
app.post('/owls/:id', function(request, response){
	Owl.update({_id: request.params.id}, request.body, function(err,result){
		console.log("inPost Edit")
		console.log(result);
		response.redirect("/");
	})
})
app.post('/owls/destroy/:id', function(request, response){
	Owl.remove({_id: request.params.id}, function(err,result){
		if (err) {
			console.log("error in delete")
		};
		console.log("Made into Delete")
		response.redirect("/");
	})

})

app.listen(8000, function(){
	console.log("port 8000 is working");
})

