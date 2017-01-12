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

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);

    // If you don't know where this code is supposed to go reread the above info
  socket.on("posting_form", function (data){
      console.log('Someone clicked a button!  Name: ' + data.language);

      socket.emit('updated_message', {name: data.name,
                                      language: data.language,
                                      location: data.location,
                                      comment: data.comment});
      socket.emit('random_number', {number:15} );
  })
  //all the socket code goes in here!
})
