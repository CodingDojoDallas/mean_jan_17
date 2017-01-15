var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_dashboard');


var MongooseSchema = new mongoose.Schema({
 name: String,
 type:String,
 age: Number
})
mongoose.model('Animal', MongooseSchema); // We are setting this Schema in our Models as 'User'
var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'


app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// this is the line that tells our server to use the "/static" folder for static content
// console.log(__dirname)
app.use(express.static(__dirname + "/static"));


app.get('/', function(req, res) {
  Animal.find({}, function(err, data) {
  	if (err){
  		console.log('Collection not found')
  	}
  	else{
  		console.log('Animal model found');
  		
  		res.render('index.ejs', {animals:data});
  	}
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous 
    // Make sure you handle the case when there is an error, as well as the case when there is no error
  })
})

app.get('/mongooses/new', function(req,res){
    res.render('create.ejs')
  
})

app.get('/mongooses/:id', function(req,res){
  Animal.find({_id:req.params.id}, function(err,data){
    if (err){console.log(err)}
    else{
        console.log(data);
        res.render('show.ejs',{animal:data})
      }
  })
})

app.get('/mongooses/edit/:id', function (req,res){
  Animal.find({_id:req.params.id}, function(err,data){
    if (err){console.log(err)}
    else{
        console.log(data);
        res.render('edit.ejs',{animal:data[0]})
      }
  })
})


app.post('/mongooses', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var animal = new Animal({name: req.body.name, type: req.body.type ,age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  animal.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    }
    else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.post('/:id',function (req,res){
  Animal.update({_id:req.params.id}, {name:req.body.name,type:req.body.type,age:req.body.age}, function(err,result){
    if(err){console.log(err)}
    res.redirect('/')
 // This code will run when the DB has attempted to update the matching record.
  })

})

app.get('/mongooses/destroy/:id', function(req,res){
  Animal.remove({_id:req.params.id}, function(err){
    if (err){console.log(err)}
    res.redirect('/')
  })
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})
