var quotes = require('../controllers/quotes.js');

module.exports = function(app) {
  
  console.log("Routes")
  
  app.get('/', function(req, res) {
    quotes.index(req, res);
  });

  app.get('/animals/edit/:id', function(req, res) {
    quotes.edit(req, res);
  });  

  app.get('/animals/new', function(req, res) {
    quotes.new(req, res);
  });

  app.get('/animals/:id', function(req, res) {
    quotes.show(req, res);
  });  

  
  app.post('/animals/update/:id', function(req, res) {
    quotes.update(req, res);
  });

  app.post('/animals/new', function(req, res) {
    quotes.create(req, res);
  });

  app.post('/animals/destroy/:id', function(req,res) {
    quotes.destroy(req, res);
  });
  
};