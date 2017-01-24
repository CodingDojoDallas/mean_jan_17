var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');



module.exports = {
  index:function(req, res) {

    Order.find({}, null, {sort: {created_at: -1}})
         .populate('_customer')
         .populate('_product')
         .exec (function(err, orders) {
                                         if(err) {
                                           console.log('something went wrong in index');
                                         } else {
                                           res.json(orders);
                                         }
                                      })
  },


  create:function(req, res) {
    console.log("check out the parameters");
    console.log(req.body);

     if (  ((req.body.product == "") || (req.body.product == null))  ||
           ((req.body.customer  == "") || (req.body.customer == null)) )
     {
       res.status(500).json({product:{message:'You must specify a product'}, customer:{message:'You must specify a customer'}});
     }
     else {

       Product.findOne({_id:req.body.product}, function(err, product){

         if (product.quantity - req.body.quantity >= 0)
         {
           product.quantity = product.quantity - req.body.quantity;
           product.save(function(err, updatedProduct){
           });

           var order = new Order({_customer:req.body.customer, _product:req.body.product, quantity:req.body.quantity});

           // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
           order.save(function(err, newOrder) {
             // if there is an error console.log that something went wrong!
             if(err) {
               res.status(500).json(err.errors);

             } else {

               // need to reretrieve the record so we can capture the customer and product associatedd
               Order.findOne({_id:newOrder._id})
                    .populate('_customer')
                    .populate('_product')
                    .exec (function(err, order) {
                                                    if(err) {
                                                      console.log('something went wrong in index');
                                                    } else {
                                                      res.send(order);
                                                    }
                                                 })
             }
            })
        }
        else {
          res.status(500).json({product_quantity:{message:'Order is too large, not enough inventory'}});
        }
      })
    }

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
