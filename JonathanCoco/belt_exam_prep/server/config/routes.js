var mongoose = require('mongoose');

var category = require('./../controllers/category.js');
var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
var answers = require('./../controllers/answers.js');
var comments = require('./../controllers/comments.js');

//************RESTful routes for users************

module.exports = function(app){

  app.get('/topic', function(req, res) {
    topics.index(req, res);
  });

  app.get('/topic/:id', function(req, res) {
    topics.show(req, res);
  });

  app.post('/topics', function(req, res) {
    topics.create(req, res);
  });

  app.post('/answer', function(req, res) {
    answers.create(req, res);
  });

  app.post('/answer/:id/vote', function(req, res) {
    answers.vote(req, res);
  });


  app.post('/comment', function(req, res) {
    comments.create(req, res);
  });

  app.get('/category', function(req, res) {
    category.index(req, res);
  });

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


}
