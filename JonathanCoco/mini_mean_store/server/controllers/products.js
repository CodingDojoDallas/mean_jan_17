var mongoose = require('mongoose');
var Product = mongoose.model('Product');


module.exports = {
  index:function(req, res) {

    Product.find({}, null, {sort: {created_at: -1}}, function(err, products) {
       if(err) {
         console.log('something went wrong in index');
       } else {
         res.json(products);
       }
      })
  },

  create:function(req, res) {
    // create a new User with the name and age corresponding to those from req.body
     var product = new Product({name: req.body.name, image: req.body.image_url, description:req.body.description, quantity:req.body.quantity });

     console.log("we are in create");
     // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
     product.save(function(err, newProduct) {

       console.log('in save');
       // if there is an error console.log that something went wrong!
       if(err) {

         console.log(err);
         res.status(500).json(err.errors);

       } else { // else console.log that we did well and then redirect to the root route

         console.log('ready to send back new product');
         console.log(newProduct);
         res.send(newProduct);
       }
      })

  }
}
