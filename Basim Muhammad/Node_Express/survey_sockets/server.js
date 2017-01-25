// require express and path
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// create the express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000


var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  console.log("Working");
  console.log(socket.id);

  socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  Data Received: ' + data.Name);

    socket.emit('server_response', {name:data.Name,location:data.Location,language:data.Language,comment:data.Comment});
    console.log(data.Name)

	})

  // If you don't know where this code is supposed to go reread the above info 

  //all the socket code goes in here!
})
