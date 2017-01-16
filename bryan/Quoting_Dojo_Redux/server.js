var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var mongoose    = require('mongoose');
var moment      = require('moment');

var app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotes');
mongoose.Promise = global.Promise;

var QuotesSchema = new mongoose.Schema({
  name:   String,
  quote:  String
}, {timestamps: true});

mongoose.model('Quotes', QuotesSchema); // We are setting this Schema in our Models as 'User'

var Quote = mongoose.model('Quotes');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/quotes', function(req, res) {
  Quote.find({}, null, {sort: {'createdAt': -1}}, function(err, data) {
    if (err) {
      console.log(err);
      alert("An error occured!");
    } else {
      for (var i=0; i<data.length; i++) {
        var fDate = new Date(data[i].createdAt);
        data[i].createdAt = "at " + moment(fDate).format("h:mma MMMM Do, YYYY");
      }
      res.render('quotes', { quotes: data});
    }
  }).lean();
});  

app.post('/quotes', function(req, res) {
  var errors = [];
  if (req.body.name.length < 3) { 
    errors.push("Your name must be at least 3 characters long."); 
  }
  if (req.body.quote.length < 5) { 
    errors.push("Your Quote must be at least 5 characters long."); 
  }
  if (errors.length > 0) {
    console.log(errors);
    res.render('index', {errors: errors, info: req.body});
  } else {
    var quote = new Quote({
      name:   req.body.name, 
      quote:  req.body.quote, 
    });
    quote.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a Quote to Database!');
        res.redirect('/');
      }
    });
  }
});


app.listen(8000, function() {
    console.log("listening on port 8000");
});