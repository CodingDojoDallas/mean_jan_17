// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageboard');


var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
 message: { type: String, required: true },
 name: { type: String, required: true, minlength: 4 },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

var commentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Message'},
 comment: { type: String, required: true },
 name: { type: String, required: true, minlength: 4 }
}, {timestamps: true });


mongoose.model('Message', messageSchema);
mongoose.model('Comment', commentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


// Routes
// Root Request
app.get('/', function(req, res) {

  Message.find({})
    .populate('comments')
    .exec(function(err, messages) {
          if(err) {
            res.render('index', {messages:[], errors:messages.errors});
          } else { // else console.log that we did well and then redirect to the root route
            // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
            console.log(" we found users");
            res.render('index', {messages:messages});
          }
        }
    )
})






app.post('/message', function(req, res) {
  console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.

    // create a new User with the name and age corresponding to those from req.body
 var message = new Message({message: req.body.message, name: req.body.message_user_name });
 // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
 message.save(function(err) {
   // if there is an error console.log that something went wrong!
   if(err) {
     console.log(err.message);
     console.log('something went wrong in the message save function');

     Message.find({})
       .populate('comments')
       .exec(function(err, messages) {
          res.render('index', {errors:message.errors, messages:messages});
       })




   } else { // else console.log that we did well and then redirect to the root route
     console.log('successfully added a message');
     res.redirect('/');
   }
  })
})



app.post('/message/:id', function(req, res) {

  Message.findOne({_id: req.params.id}, function(err, message){
        // data from form on the front end
        var comment = new Comment({comment: req.body.comment, name: req.body.comment_user_name });
        //  set the reference like this:
        comment._message = message._id;
        // now save both to the DB
        comment.save(function(err){
                if (err)
                {
                  Message.find({})
                    .populate('comments')
                    .exec(function(err, messages) {
                       res.render('index', {commentErrors:comment.errors, messages:messages});
                    })

                }
                else {
                  message.comments.push(comment);
                  message.save(function(errMessage){
                       if(errMessage) {
                            console.log('Error saving comment');
                       } else {
                            res.redirect('/');
                       }
                   });
               }
         });
    });
})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
