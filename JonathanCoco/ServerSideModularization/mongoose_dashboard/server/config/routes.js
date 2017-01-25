var animals = require('../controllers/animals.js');

var mongoose = require('mongoose');
var Animal = mongoose.model('Animal')

module.exports = function(app){

  app.get('/', function(req, res) {
    animals.all(req, res);
  })

  app.get('/animals/new', function(req, res) {
    animals.new(req, res);
  })

  app.get('/animals/:id', function(req, res) {
    animals.show(req, res);
  })

  app.get('/animals/edit/:id', function(req, res) {
    animals.edit(req, res);
  })

  // Add User Request
  app.post('/animals', function(req, res) {
    animals.create(req, res);
  })

  // Update Animal
  app.post('/animals/:id', function(req, res) {
    animals.update(req, res);
  })

  // Destroy Animal
  app.post('/animals/destroy/:id', function(req, res) {
    animals.destroy(req, res);
  })

}
