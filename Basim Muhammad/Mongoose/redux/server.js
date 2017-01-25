var express=require('express');
var bodyParser=require('body-parser');
var app =express();
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/redux');

var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
})

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({extended:true}));

app.set('views',__dirname + '/views');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/', function (req,res){
	res.render('index.ejs')
})

app.get('/quotes', function(req,res){
	Quote.find({},function (err,data){
		if (err){console.log(err)}
		res.render('quotes.ejs',{quotes:data})
	})
})

app.post('/quotes', function(req,res){
	var quote = new Quote({name:req.body.name,quote:req.body.quote})
	quote.save(function(err){
		if (err){console.log(err)}
		Quote.find({}, function(err,data){
			if (err){console.log(err)}
			else{
				console.log(data);
				res.render('quotes.ejs',{quotes:data})
			}
		})
		
	})
})

app.listen(8000,function(){
	console.log('Listening at port 8000');
})