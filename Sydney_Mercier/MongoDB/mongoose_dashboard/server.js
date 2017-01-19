var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var OwlSchema = new mongoose.Schema({
  name: String,
  species: String,
  owner: String
})
mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl');


// Routes
app.get('/', function(req, res) {
    Owl.find({}, function(err, data) {
      if(err){
        console.log('something went wrong');
      } else {
        res.render("index", {owls: data});
      }
    });
});

// Create new owl
app.post('/', function(req, res) {
    console.log("POST DATA", req.body);
    var owl = new Owl({
      name: req.body.name, 
      species: req.body.species,
      owner: req.body.owner
    });
    owl.save(function(err) {
      if(err) {
          console.log('something went wrong');
      } else {
          console.log('successfully added an owl!');
          res.redirect('/');
      }
    });
});

app.get('/new', function(req, res) {
    res.render("new");
});

// Show owl
app.get('/:id', function(req, res) {
    var id = req.params.id;
    Owl.find({_id: id}, function(err, data) {
      if(err){
        console.log('something went wrong');
      } else {
        res.render("owl", {owl: data[0]});
      }
    });
});

app.get('/:id/edit', function(req, res) {
    var id = req.params.id;
    Owl.find({_id: id}, function(err, data) {
      if(err){
        console.log('something went wrong');
      } else {
        res.render("edit", {owl: data[0]});
      }
    });
});

// Update owl
app.post('/:id', function(req, res) {
    var id = req.params.id;
    Owl.update({_id: id}, req.body, function(err, data){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully updated owl!');
        res.redirect('/');
      }
    });
});

// Delete owl from database
app.post('/:id/destroy', function(req, res) {
    var id = req.params.id;
    Owl.remove({_id: id}, function(err, data) {
      if(err) {
        console.log('something went wrong');
      } else {
        res.redirect('/');
      }
    });
});




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})