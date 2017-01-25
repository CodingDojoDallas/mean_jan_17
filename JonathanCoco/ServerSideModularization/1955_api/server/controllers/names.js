var mongoose = require('mongoose');
var Name = mongoose.model('Name');

module.exports = {
  all:function(req, res) {
     Name.find({}, function(err, names) {
       if(err) {
         console.log('something went wrong in all');
       } else {
         //res.json({names:names});
         res.json(names);
       }
      })
    },

  show:function(req, res) {

    Name.find({name:req.params.name}, function(err, names) {
      if(err) {
        console.log("something went wrong in show");
      } else {
        res.json(names[0]);
      }
    })
  },


  create: function(req, res) {
      var name = new Name({name: req.params.name});

      name.save(function(err) {
        if(err) {
         console.log('something went wrong in the create');
        } else { // else console.log that we did well and then redirect to the root route
          res.redirect('/');
        }
      })
  },

  destroy:function(req, res) {

    Name.remove({name:req.params.name}, function(err) {
      if(err) {
        console.log('something went wrong in destroy');
      } else {
          res.redirect('/');
      }
    })
  }
}
