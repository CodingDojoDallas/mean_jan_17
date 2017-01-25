var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
   show:function(req, res) {

     Quote.find({}, null, {sort: {'date_submitted':-1}}, function(err, quotes) {
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        console.log(" we found users");
        res.render('quotes', {quotes:quotes});
      }


      })
    },

    create:function(req, res) {
        console.log("POST DATA", req.body);

       var quote = new Quote({quote: req.body.quote, name: req.body.name, date_submitted:Date() });
       // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
       quote.save(function(err) {
         // if there is an error console.log that something went wrong!
         if(err) {
           console.log(err.message);
           console.log('something went wrong in the quote save function');
         } else { // else console.log that we did well and then redirect to the root route
           console.log('successfully added a user!');
           res.redirect('/quotes');
         }
        })
    }
}
