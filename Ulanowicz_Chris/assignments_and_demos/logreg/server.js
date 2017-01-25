var express = require("express");
var bodyParser = require("body-parser");
var bcrypt  = require("bcrypt");
var mongoose = require("./server/config/mongoose.js");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./server/config/routes.js')(app);

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/bower_components"));

app.listen(8000, function(){
	console.log("runnin on 8000");
})