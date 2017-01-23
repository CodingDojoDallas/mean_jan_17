var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
var mongooseErrorHandler = require('mongoose-error-handler');



module.exports = {
  index:function(req, res) {

    Message.find({})
      .populate('comments')
      .exec(function(err, messages) {
         if (err){
            res.status(500).json(err.errors);
         }
         else {
           res.json(messages);
         }
      })
  },


  create: function(req, res) {

    // create a new User with the name and age corresponding to those from req.body
     var message = new Message({message: req.body.message, name: req.body.message_user_name });

     console.log(req.body);

     // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
     message.save(function(err, newMessage) {
       // if there is an error console.log that something went wrong!
       if(err) {

         res.status(500).json(err.errors);

       } else { // else console.log that we did well and then redirect to the root route
         res.send(newMessage);
       }
      })
  },

  createComment: function(req, res) {

    console.log(req.body);

    Message.findOne({_id: req.body.message_id}, function(err, message){
        // data from form on the front end
        var comment = new Comment({comment: req.body.comment, name: req.body.comment_user_name });
        //  set the reference like this:
        comment._message = req.body.message_id;

        console.log("made it to find eon");
        console.log(comment);
        // now save both to the DB
        comment.save(function(err){
                if (err)
                {
                  Message.find({})
                    .populate('comments')
                    .exec(function(err, messages) {
                       res.status(500).json(err.errors);
                    })

                }
                else {
                  message.comments.push(comment);
                  message.save(function(errMessage, newMessage){
                       if(errMessage) {
                            console.log('Error saving comment');
                       } else {
                            res.send(comment);
                       }
                   });
               }
         });
    });
  }
}
