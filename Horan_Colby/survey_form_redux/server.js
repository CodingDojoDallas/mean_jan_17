var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname + '/static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('index')
})

var server = app.listen(5000, function(){
  console.log('PORT 5000')
})

server

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
  console.log('Sockets rule')
  socket.on('posting_form', function(data){
    console.log(data)
    var lucky_number = Math.floor((Math.random() * 1000) + 1)
    var message = '<p>' + 'You emitted the following information to the server ' + data.name + ' ' + data.location + ' '  + data.language + ' '  + data.comment + '</p>' + '<p>Your lucky number emitted by the server is ' + lucky_number
    io.emit('display_info', message)
  })

})