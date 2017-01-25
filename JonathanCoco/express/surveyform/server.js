var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/****** setup routes *************/
app.get('/', function(req, res) {
 res.render("index");
})

// post route for adding a user
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route:
 res.render("result", {result: req.body});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
