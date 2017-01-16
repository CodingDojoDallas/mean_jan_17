var express     = require("express");
var bodyParser  = require("body-parser");
var path        = require("path");
var mongoose    = require("mongoose");
var moment      = require('moment');
var validate    = require('mongoose-validator');

var app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageboard');
mongoose.Promise = global.Promise;

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: 4,
    message: 'Name must be at least 4 characters'
  })
];

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 name:      {type: String ,validate: nameValidator},
 post:      String,
 comments:  [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

PostSchema.path('name').required(true, 'You must enter a name, at least 3 characters long.');
PostSchema.path('post').required(true, 'You must enter Post text, at least 10 characters log.');

var CommentSchema = new mongoose.Schema({
  name:       {type: String, validate: nameValidator},
  comment:    String,
  _post:      {type: Schema.Types.ObjectId, ref: 'Post'},
  created_at: {type: Date, default: new Date}
});

CommentSchema.path('name').required(true, 'You must enter a name, at least 3 characters long.');
CommentSchema.path('comment').required(true, 'You must enter Comment text, at least 10 characters log.');

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post    = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req,res){
  Post.find({}).populate('comments').exec(function(err, posts){
    res.render('index', {posts: posts});
  });
});

app.post('/create', function(req,res){
  var post = new Post({name: req.body.name, post: req.body.post});
  post.save(function(err){
     if(err) {
       var errors = post.errors;
       Post.find({}).populate('comments').exec(function(err, posts){
          res.render('index', {errfor: 'Post error, Requirements are:', errors: errors, posts: posts});
        });
    } else { 
      res.redirect('/');
    }
  });
});

app.post('/comment/:id', function(req,res){
  Post.findOne({_id: req.params.id}, function(err, post){
    var comment = new Comment({
      name:     req.body.name, 
      comment:  req.body.comment
    });

    comment._post = post._id;
    post.comments.push(comment);

    comment.save(function(err){
      post.save(function(err){
        if(err) { 
          Post.find({}).populate('comments').exec(function(err, posts){
            res.render('index', {errfor: 'Comment error, Requirements are:', errors: comment.errors, posts: posts});
          });
        } else { 
          res.redirect('/'); 
        }
      });
    });
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});