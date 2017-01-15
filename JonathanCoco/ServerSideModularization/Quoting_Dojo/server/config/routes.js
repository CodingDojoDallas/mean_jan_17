var quotes = require('../controllers/quotes.js');

var mongoose = require('mongoose');
var Quote = mongoose.model('Quote')

module.exports = function(app){

  app.get('/', function(req, res) {
    res.render('index');
  })

  app.get('/quotes', function(req, res) {
    quotes.show(req, res);
  })

  app.post('/quotes', function(req, res) {
    quotes.create(req,res);
  })

}
