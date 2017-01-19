var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get('/', function(req,res){
	res.render("index");
})

var server = app.listen(8000, function(){
	console.log("Port 8000 open");
})

var io = require("socket.io").listen(server);

var messages = ["<p>Chatroom started</p>"];

io.sockets.on("connection", function(socket){
	console.log("new connection on socket id: " + socket.id);
	var user;
	socket.on("got_new_user", function(data){
		// console.log(data);
		user = data;
		user.id = socket.id;
		socket.emit("added_user", {messages: messages});
		var joined = "<p>" + user.name + " has joined</p>";
		messages.push(joined);
		socket.broadcast.emit("update_chat", {message: joined});
	})
	socket.on("new_message", function(data){
		console.log(data);
		messages.push(data.message);
		io.emit("update_chat", {message: data.message});
	})
	socket.on("disconnect", function(){
		console.log(user.name + " disconnected from socket id " + user.id);
	})
})









