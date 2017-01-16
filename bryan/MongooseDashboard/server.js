var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var mongoose    = require('mongoose');

var app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

var DashboardSchema = new mongoose.Schema({
  name:         String,
  description:  String,
  kingdom:      String,
  order:        String,
  clade:        String,
  phylum:       String
}, {timestamps: true});

mongoose.model('Animals', DashboardSchema); // We are setting this Schema in our Models as 'User'

var Animal = mongoose.model('Animals');

app.get('/', function(req, res) {
  Animal.find({}, function(err, data) {
    if (err) {
      console.log(err);
      alert("An error occured!");
    } else {
      res.render('index', {animals: data});
    }
  });
});

app.get('/animals/edit/:id', function(req, res) {
  Animal.findOne({_id: req.params.id}, function(err, data) {
    if (err) {
      console.log(err);
      alert("An error occured!");
    } else {
      res.render('edit', {name: data.name, animal: data});
    }
  });
});  

app.get('/animals/new', function(req, res) {
  res.render("new");
});

app.get('/animals/:id', function(req, res) {
  Animal.findOne({_id: req.params.id}, function(err, data) {
    if (err) {
      console.log(err);
      alert("An error occured!");
    } else {
      res.render('view', {name: data.name, animal: data});
    }
  });
});  


app.post('/animals/update/:id', function(req, res) {
  Animal.update({_id: req.params.id}, req.body, function(err, data) {
    if (err) {
      console.log(err);
      alert("An error occured!");
    } else {
      console.log('successfully Updated an Animal in Database!');
      res.redirect('/');
    }
  });  
});

app.post('/animals/new', function(req, res) {
  console.log("POST DATA", req.body);
  var animal = new Animal({
    name:         req.body.name, 
    description:  req.body.description, 
    kingdom:      req.body.kingdom,
    order:        req.body.order,
    clade:        req.body.clade,
    phylum:       req.body.phylum
  });
  animal.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added an Animal to Database!');
      res.redirect('/');
    }
  });
});

app.post('/animals/destroy/:id', function(req,res) {
  Animal.remove({_id: req.params.id},function(err) {
    if(err) {
      console.log('Destroy: something went wrong');
    } else {
      console.log('successfully deleted an Animal from the Database!');
      res.redirect('/');
    }
  });
});


app.listen(8000, function() {
    console.log("listening on port 8000");
});