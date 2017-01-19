var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


module.exports = {
  index:function(req, res) {

     Friend.find({}, function(err, friends) {
       if(err) {
         console.log('something went wrong in index');
       } else {
         res.json(friends);
       }
      })
    },

  show:function(req, res) {

    Friend.findOne({_id:req.params.id}, function(err, friend) {
      if(err) {
        console.log("something went wrong in show");
      } else {
        res.json(friend);
      }
    })
  },


  create: function(req, res) {

      var dateStr = JSON.parse(req.body.birthday_string);
      var date = new Date(dateStr);

      var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthday: date});

      friend.save(function(err, result) {
        if(err) {
         console.log('something went wrong in the create');
        } else { // else console.log that we did well and then redirect to the root route


          res.send(result);
        }
      })

  },

  update: function(req, res) {

      console.log("we are in update");
      console.log(req.method);
      console.log(req.headers);
      console.log(req.params);
      console.log(req.body);
      console.log(req.msg);


      Friend.findById(req.params.id, function(err, friend) {

        console.log("in the findbyid");

        if (!friend)
        {
          console.log("something went wrong in update");
        }
        else {

          console.log("in the else");
          friend.first_name = req.body.first_name;
          friend.last_name = req.body.last_name;

          var dateStr = JSON.parse(req.body.birthday_string);
          var date = new Date(dateStr);

          friend.birthday = date;


          console.log("before save in the update");

          friend.save(function(err) {
          if (err)
            console.log('error')
          else
            res.json(friend);
          });
        }
      })
  },

  delete:function(req, res) {
    Friend.remove({_id:req.params.id}, function(err, result) {
      if(err) {
        console.log('something went wrong in destroy');
      } else {
          res.send(result);
      }
    })
  }
}
