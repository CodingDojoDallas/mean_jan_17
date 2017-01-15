var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {

   all:function(req, res) {
     Animal.find({}, function(err, animals) {
       if(err) {
         console.log('something went wrong');
       } else {
         console.log(" we found users");
         res.render('index', {animals:animals});
       }
      })
    },

    show:function(req, res) {
      console.log('we in show: ' + req.params.id)

      Animal.find({_id:req.params.id}, function(err, animals) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log(" we found animals and are in show...");
          res.render('show', {animal:animals[0]});
        }
      })
    },

    edit:function(req, res) {
      console.log('we in show: ' + req.params.id)

      Animal.find({_id:req.params.id}, function(err, animals) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log(" we found animals and are in show...");
          res.render('edit', {animal:animals[0]});
        }
      })
    },

    new:function(req, res) {
      res.render('new');
    },

    create: function(req, res) {
        console.log("POST DATA", req.body);
        var animal = new Animal({animal: req.body.animal, herd_Size: req.body.herd_size});

        animal.save(function(err) {
          if(err) {
           console.log(err.message);
           console.log('something went wrong in the save function');
          } else { // else console.log that we did well and then redirect to the root route
           console.log('successfully added a user!');
           res.redirect('/');
          }
        })
    },

    update:function(req, res) {
      console.log("POST DATA", req.body);

      Animal.find({_id:req.params.id}, function(err, animals) {
        if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route

          animals[0].animal = req.body.animal
          animals[0].herd_Size = req.body.herd_size;

          animals[0].save(function(err) {
            if(err) {
              console.log('something went wrong');
            } else {
              console.log('successfully updated the record!');
              res.redirect('/');
            }
           })
        }
      })
    },

    destroy:function(req, res) {
      console.log("POST DATA", req.body);

      Animal.remove({_id:req.params.id}, function(err) {
        if(err) {
          console.log('something went wrong');
        } else {
            res.redirect('/');
        }
      })
    }
}
