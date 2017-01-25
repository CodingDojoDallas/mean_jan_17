var names = require('../controllers/names.js');

var mongoose = require('mongoose');
var Name = mongoose.model('Name')

module.exports = function(app){

  app.get('/', function(req, res) {
    names.all(req, res);
  })

  app.get('/new/:name', function(req, res) {
    names.create(req, res);
  })

  app.get('/remove/:name', function(req, res) {
    names.destroy(req, res);
  })

  app.get('/:name', function(req, res) {
    names.show(req,res);
  })

}
