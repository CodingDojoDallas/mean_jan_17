var mongoose = require('mongoose');
var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');
var Friend = mongoose.model('User');
//************RESTful routes for users************

module.exports = function(app){

  app.get('/users', function(req, res) {
    users.index(req, res);
  });

  app.get('/users/:id', function(req, res) {
    users.show(req, res);
  });

  app.post('/users', function(req, res) {
    users.create(req, res);
  });

  app.post('/users/login', function(req, res) {
    users.login(req, res);
  });

  app.put('/users/:id', function(req, res) {
    users.update(req, res);
  });

  app.delete('/users/:id', function(req, res) {
    users.delete(req, res);
  });

  app.get('/messages', function(req, res) {
    messages.index(req, res);
  });

  app.post('/messages', function(req, res) {
    messages.create(req, res);
  });

  app.post('/comment', function(req, res) {
    messages.createComment(req, res);
  });


/*  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete); */


}
