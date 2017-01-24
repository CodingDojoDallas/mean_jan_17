var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');



module.exports = {
  index:function(req, res) {

    Customer.find({}, null, {sort: {created_at: -1}}, function(err, customers) {
       if(err) {
         console.log('something went wrong in index');
       } else {
         res.json(customers);
       }
      })
  },


  create:function(req, res) {
    // create a new User with the name and age corresponding to those from req.body
     var customer = new Customer({name: req.body.name});

     // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
     customer.save(function(err, newCustomer) {

       // if there is an error console.log that something went wrong!
       if(err) {

         console.log(err);
         res.status(500).json(err.errors);

       } else { // else console.log that we did well and then redirect to the root route

         res.send(newCustomer);
       }
      })


  },

  delete:function(req, res) {

    console.log(req.params);

    Customer.remove({_id:req.params.id}, function(err, result) {
      if(err) {
        console.log('something went wrong in destroy');
        console.log(err);
      } else {
          res.send(result);
      }
    })
  }

}
