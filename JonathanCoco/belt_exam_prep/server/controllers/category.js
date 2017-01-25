var mongoose = require('mongoose');
var Category = mongoose.model('Category');


module.exports = {


  index:function(req, res) {

    Category.find({}, null, {sort: {created_at: -1}})
           .exec (function(err, categories) {
                                         if(err) {
                                           console.log('something went wrong in index');
                                         } else {
                                           res.json(categories);
                                         }
                                      })
  }

}
