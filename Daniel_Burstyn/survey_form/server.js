var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var user;
app.post('/submit', function(req, res) {
 user = req.body;
 
 res.redirect("/result");
  
})
app.get('/result', function(req, res) {
 res.render("result", {user:user});
})


app.get('/style.css', function(req, res) {
 res.render("style.css");
})



app.listen(8000, function() {
 console.log("listening on port 8000");
});