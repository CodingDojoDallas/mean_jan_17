var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

console.log("Loading modules");

module.exports = {
  
  //app.get('/', function(req, res) {
  index: function(req, res) {
    console.log("index");
    Animal.find({}, function(err, data) {
      if (err) {
        console.log(err);
        alert("An error occured!");
      } else {
        res.render('index', {animals: data});
      }
    });
  },

  //app.get('/animals/edit/:id', function(req, res) {
  edit: function(req, res) {
    Animal.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        alert("An error occured!");
      } else {
        res.render('edit', {name: data.name, animal: data});
      }
    });
  },

  //app.get('/animals/new', function(req, res) {
  new: function(req, res) {
    res.render("new");
  },
  
  //app.get('/animals/:id', function(req, res) {
  show: function(req, res) {
    Animal.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        alert("An error occured!");
      } else {
        res.render('view', {name: data.name, animal: data});
      }
    });
  },  



  //app.post('/animals/update/:id', function(req, res) {
  update: function(req, res) {
    Animal.update({_id: req.params.id}, req.body, function(err, data) {
      if (err) {
        console.log(err);
        alert("An error occured!");
      } else {
        console.log('successfully Updated an Animal in Database!');
        res.redirect('/');
      }
    });  
  },

  //app.post('/animals/new', function(req, res) {
  create:  function(req, res) {
    console.log("POST DATA", req.body);
    var animal = new Animal({
      name:         req.body.name, 
      description:  req.body.description, 
      kingdom:      req.body.kingdom,
      order:        req.body.order,
      clade:        req.body.clade,
      phylum:       req.body.phylum
    });
    animal.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added an Animal to Database!');
        res.redirect('/');
      }
    });
  },

  //app.post('/animals/destroy/:id', function(req,res) {
  destroy: function(req,res) {
    Animal.remove({_id: req.params.id},function(err) {
      if(err) {
        console.log('Destroy: something went wrong');
      } else {
        console.log('successfully deleted an Animal from the Database!');
        res.redirect('/');
      }
    });
  },

};