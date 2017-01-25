var express = require("express");
var path = require('path')
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_dashboard');


 // We are retrieving this Schema from our Models, named 'User'
require('./server/config/mongoose.js');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './client/views'));// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// this is the line that tells our server to use the "/static" folder for static content
// console.log(__dirname)
app.use(express.static(__dirname + "/static"));

var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// tell the express app to listen on port 8000



app.listen(8000, function() {
  console.log("listening on port 8000");
})
