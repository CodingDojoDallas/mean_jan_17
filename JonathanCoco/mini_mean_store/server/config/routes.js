var mongoose = require('mongoose');
var products = require('./../controllers/products.js');
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');

//************RESTful routes for users************

module.exports = function(app){

  app.get('/products', function(req, res) {
    products.index(req, res);
  });

  app.post('/products', function(req, res) {

    console.log('we are in product create route');
    products.create(req, res);
  });

  app.get('/customers', function(req, res) {
    customers.index(req, res);
  });

  app.post('/customers', function(req, res) {
    customers.create(req, res);
  });

  app.delete('/customers/:id', function(req, res) {
    customers.delete(req, res);
  });

  app.get('/orders', function(req, res) {
    orders.index(req, res);
  });

  app.post('/orders', function(req, res) {

    console.log('we are in product create route');
    orders.create(req, res);
  });



/*  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete); */


}
