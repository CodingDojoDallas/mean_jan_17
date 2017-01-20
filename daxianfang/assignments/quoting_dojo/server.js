var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String
});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/quotes', function(req, res) {
	var quote = new Quote({name: req.body.name, quote: req.body.quote});
	quote.save(function(err) {
		if (err) {
			console.log('something went wrong');
		} else {
			res.redirect('/quotes');
		}
	});
});

app.get('/quotes', function(req, res) {
	Quote.find({}, function(err, quotes) {
		res.render('main', {quotes: quotes});
	});
});

app.listen(8000, function() {
	console.log('listening on port 8000');
});