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
mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
 quote: String,
 name: String,
 date_submitted: Date
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'


// Routes
// Root Request
app.get('/', function(req, res) {
  res.render('index');
})

app.get('/quotes', function(req, res) {

  Quote.find({}, null, {sort: {'date_submitted':-1}}, function(err, quotes) {
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      console.log(" we found users");
      res.render('quotes', {quotes:quotes});
    }


  })
})

// Add User Request
app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.

    // create a new User with the name and age corresponding to those from req.body
 var quote = new Quote({quote: req.body.quote, name: req.body.name, date_submitted:Date() });
 // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
 quote.save(function(err) {
   // if there is an error console.log that something went wrong!
   if(err) {
     console.log(err.message);
     console.log('something went wrong in the quote save function');
   } else { // else console.log that we did well and then redirect to the root route
     console.log('successfully added a user!');
     res.redirect('/quotes');
   }
  })
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
