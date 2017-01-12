var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/****** setup routes *************/
app.get('/', function(req, res) {
 res.render("index");
})


// this selects our port and listens
// note that we're now storing our app.listen within
// a variable called server. this is important!!
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
var io = require('socket.io').listen(server);
var connectionCount = 0;
var messages = [];

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);

    // If you don't know where this code is supposed to go reread the above info
  socket.on("new_message", function (data){
      console.log('new_message');
      console.log(data.message);
      console.log('user...')
      console.log(data.user)

     var message = {user:data.user,
                    message: data.message}

      messages.push(message);

      io.emit('update_message', {user: message.user,
                                 message: message.message});
      //socket.emit('random_number', {number:15} );
  });

  socket.on("new_user", function(data){


      for (var i=0; i<messages.length; i++)
      {
        socket.emit('update_message', {user: messages[i].user,
                                       message: messages[i].message});
      }
  });
  //all the socket code goes in here!
})
