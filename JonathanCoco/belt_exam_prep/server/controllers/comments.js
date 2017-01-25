var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Answer  = mongoose.model('Answer');

module.exports = {

  create:function(req, res) {

      console.log('we are in comment-create');

      Answer.findOne({_id: req.body.answer}, function(err,answer){

        var comment = new Comment({_user:req.body.user, _answer:req.body.answer, comment:req.body.comment});

        comment.save(function(err, newComment) {

         if(err) {

           console.log(err.errors);
           res.status(500).json(err.errors);

         } else {


           answer.comments.push(newComment);
           answer.save(function(errMessage, newAnswer){

                         if(errMessage) {
                              console.log('Error saving comment');
                         } else {

                           Comment.findOne({_id:newComment._id})
                                .populate('_user')
                                .exec (function(err, newComment) {
                                                                if(err) {
                                                                  console.log('something went wrong in index');
                                                                } else {
                                                                  res.send(newComment);
                                                                }
                                                             })
                         }
                     });
           }
        })

    })
  }
}
