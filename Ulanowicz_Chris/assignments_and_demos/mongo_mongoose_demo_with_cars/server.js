var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/car_demo');

app.use(bodyParser.urlencoded({extended:true}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


var CarSchema = new mongoose.Schema({
	year: {type: Number},
	make: {type: String, required: true},
	model: String,
	created_at: {type: Date, default: Date.now}
})


mongoose.model('Car', CarSchema);
var Car = mongoose.model('Car');
// var TestSchema = new mongoose.Schema({
// 	name: String
// })
// mongoose.model('Pass', TestSchema);
// var Goose = mongoose.model('Pass');
// var bird = new Goose({
// 	name:"donald"
// })
// bird.save();
app.get('/', function(req,res){
	Car.find({}, function(error, data){
		if(error){
			console.log(error);
		}
		else{
			// console.log(data);
			res.render("index", {cars: data});
		}
	})
})
app.post('/cars', function(req,res){
	// console.log(req.body);
	var auto = new Car({
		year: req.body.year,
		make: req.body.make,
		model: req.body.model
	});
	// console.log(auto);
	auto.save(function(error){
		if(error){
			console.log(error);
		}
	});
	res.redirect('/');
})

app.post('/cars/remove', function(req,res){
	console.log(req.body);
	var carToDelete = Car.findOne({_id: req.body._id});
	console.log(carToDelete.make);
	carToDelete.remove(function(error){
		if(error){
			console.log(error);
		}
	});
	res.redirect('/');
})

app.listen(8000, function(){
	console.log("running on 8000");
})






