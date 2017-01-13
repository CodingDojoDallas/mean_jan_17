var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', function(req, res){
  console.log('**')
  res.render('index')
})

app.post('/user', function(req, res){
  console.log('Post Data \n\n', req.body)
  res.render('results', {user:req.body})
})

app.listen(5000, function(){
  console.log('PORT: 5000')
})