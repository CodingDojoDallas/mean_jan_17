var mongoose = require('mongoose');
var User = mongoose.model('User');
var mongooseErrorHandler = require('mongoose-error-handler');

var bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
  index:function(req, res) {

     User.find({}, function(err, users) {
       if(err) {
         console.log('something went wrong in index');
       } else {
         res.json(users);
       }
      })
    },

  show:function(req, res) {

    User.findOne({_id:req.params.id}, function(err, user) {
      if(err) {
        console.log("something went wrong in show");
      } else {
        res.json(user);
      }
    })
  },


  create: function(req, res) {
      var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, phone:req.body.phone, password:req.body.password });

      User.findOne({email:req.body.email}, function(err, existingUser) {

        if(existingUser == null) {

          user.password = bcrypt.hashSync(req.body.password, saltRounds);

          user.save(function(err, user) {
            if (err) {
              // An Example of error handling
              res.status(500).json(err.errors);

            } else { // else console.log that we did well and then redirect to the root route

              res.send(user);
            }
          })
        } else {
          res.status(500).json({email:{message:'Duplicate Email - Please enter a unique email address'}});
        }
       })
  },

  login: function(req, res) {

      var email = req.body.email;
      var password = req.body.password;

      User.findOne({email:email}, function(err, existingUser) {

        if(existingUser) {

          if (!bcrypt.compareSync(password, existingUser.password))
          {
            res.status(500).json({password:'Invalid Password!'});
          }
          else {
            res.send(existingUser);
          }
        } else {
          res.status(500).json({email:'Email does not exist. Please enter a valid email.'});
        }
       })
  },


  update: function(req, res) {

      User.findById(req.params.id, function(err, user) {

        if (!user)
        {
          console.log("something went wrong in update");
        }
        else {
          user.first_name = req.body.first_name;
          user.last_name = req.body.last_name;
          user.phone = req.body.phone;

          user.save(function(err) {
          if (err)
            console.log('error')
          else
            res.json(user);
          });
        }
      })
  },

  delete:function(req, res) {
    User.remove({_id:req.params.id}, function(err, result) {
      if(err) {
        console.log('something went wrong in destroy');
      } else {
          res.send(result);
      }
    })
  }
}
