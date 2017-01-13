// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var AnimalSchema = new mongoose.Schema({
 animal: String,
 herd_Size: Number
})
mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'


// Routes
// Root Request
app.get('/', function(req, res) {

  Animal.find({}, function(err, animals) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      console.log(" we found users");
      res.render('index', {animals:animals});
    }


  })
})




app.get('/animals/new', function(req, res) {

  res.render('new');

})

app.get('/animals/:id', function(req, res) {


  console.log('we in show: ' + req.params.id)

  Animal.find({_id:req.params.id}, function(err, animals) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      console.log(" we found animals and are in show...");
      res.render('show', {animal:animals[0]});
    }
  })
})




app.get('/animals/edit/:id', function(req, res) {


  console.log('we in show: ' + req.params.id)

  Animal.find({_id:req.params.id}, function(err, animals) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      console.log(" we found animals and are in show...");
      res.render('edit', {animal:animals[0]});
    }
  })
})


// Add User Request
app.post('/animals', function(req, res) {
  console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.

    // create a new User with the name and age corresponding to those from req.body
 var animal = new Animal({animal: req.body.animal, herd_Size: req.body.herd_size});
 // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
 animal.save(function(err) {
   // if there is an error console.log that something went wrong!
   if(err) {
     console.log(err.message);
     console.log('something went wrong in the save function');
   } else { // else console.log that we did well and then redirect to the root route
     console.log('successfully added a user!');
     res.redirect('/');
   }
  })
})



// Update Animal
app.post('/animals/:id', function(req, res) {
  console.log("POST DATA", req.body);

  Animal.find({_id:req.params.id}, function(err, animals) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route

      animals[0].animal = req.body.animal
      animals[0].herd_Size = req.body.herd_size;

      animals[0].save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully updated the record!');
          res.redirect('/');
        }
       })
    }
  })
})


// Destroy Animal
app.post('/animals/destroy/:id', function(req, res) {
  console.log("POST DATA", req.body);

  Animal.remove({_id:req.params.id}, function(err) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
        res.redirect('/');
    }
  })
})




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
