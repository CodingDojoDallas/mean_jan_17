var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');

module.exports = {

  create:function(req, res) {

      Topic.findOne({_id: req.body.topic}, function(err,topic){

        var answer = new Answer({_user:req.body.user, answer:req.body.answer, _topic:req.body.topic});

        answer.save(function(err, newAnswer) {

         if(err) {

           res.status(500).json(err.errors);

         } else {

           newAnswer.populate('_user');

           topic.answers.push(newAnswer);
           topic.save(function(errMessage, newTopic){
                         if(errMessage) {
                              console.log('Error saving comment');
                         } else {



                           Answer.findOne({_id:newAnswer._id})
                                .populate('_user')
                                .exec (function(err, newAnswer) {
                                                                if(err) {
                                                                  console.log('something went wrong in index');
                                                                } else {
                                                                  res.send(newAnswer);
                                                                }
                                                             })


                         }
                     });
           }
        })

    })
  },

  vote:function(req, res) {

      console.log("in vote");

      console.log(req.params);
      console.log(req.body);

      Answer.findOne({_id: req.params.id}, function(err,answer){

        if (err){
          console.log('something went wrong');
        }
        else {

            if (req.body.like == "true")
            {
              answer.likes = answer.likes  + 1
            }
            else {
              answer.dislikes = answer.dislikes + 1;
            }

            answer.save(function(error){
              if (error)
              {
                console.log('error')
              }
              else {
                res.json(answer);
              }
            })
        }
    })
  }
}
