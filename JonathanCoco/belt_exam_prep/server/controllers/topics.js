var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = {
  index:function(req, res) {

    Topic.find({}, null, {sort: {created_at: -1}})
         .populate('_user')
         .populate('_category')
         .exec (function(err, topics) {
                                         if(err) {
                                           console.log('something went wrong in index');
                                         } else {
                                           res.json(topics);
                                         }
                                      })
  },

  show:function(req, res) {

       Topic.findById(req.params.id)
              .populate('_user')
              .populate('_category')
              .populate({path: 'answers', model: 'Answer', populate: {path:'_user', model:'User'}})
              .populate({path: 'answers', model: 'Answer', populate: {path:'comments', model: 'Comment', populate: {path:'_user', model:'User'}}})
         .exec (function(err, topics) {
                                         if(err) {
                                           console.log('something went wrong in index');
                                         } else {
                                               res.json(topics);
                                         }
                                      })
  },


  create:function(req, res) {

      var topic = new Topic({_category:req.body.category,  topic:req.body.topic, _user:req.body.user, description:req.body.description});


      // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
      topic.save(function(err, newTopic) {
       // if there is an error console.log that something went wrong!
       if(err) {

         console.log(err.errors);
         res.status(500).json(err.errors);

       } else {

         // need to reretrieve the record so we can capture the customer and product associatedd
         Topic.findOne({_id:newTopic._id})
              .populate('_category')
              .populate('_user')
              .exec (function(err, topic) {
                                              if(err) {
                                                console.log('something went wrong in index');
                                              } else {
                                                res.send(topic);
                                              }
                                           })
       }
      })
  }

}
