var mongoose = require('mongoose');
var friends = require('./../controllers/friends.js');
var Friend = mongoose.model('Friend');
//************RESTful routes for users************

module.exports = function(app){

  app.get('/friends', function(req, res) {
    friends.index(req, res);
  });

  app.get('/friends/:id', function(req, res) {
    friends.show(req, res);
  });

  app.post('/friends', function(req, res) {
    friends.create(req, res);
  });

  app.put('/friends/:id', function(req, res) {
    console.log("we are in patch");
    friends.update(req, res);
  });

  app.delete('/friends/:id', function(req, res) {
    friends.delete(req, res);
  });

/*  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete); */


}
