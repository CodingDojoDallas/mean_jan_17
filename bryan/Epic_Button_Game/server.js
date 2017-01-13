var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);
var counter = 0;

io.sockets.on('connection', function (socket) {
  console.log(socket.id);

  socket.on("button_clicked", function (data){
    counter++;
    io.emit('server_response', { counter: counter });
  });
  
  socket.on("reset_clicked", function (data){
    counter = 0;
    io.emit('server_response', { counter: counter });
  });
  
});







