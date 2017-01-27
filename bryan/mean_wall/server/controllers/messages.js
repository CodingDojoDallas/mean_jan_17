var mongoose = require('mongoose'),
	  message  = mongoose.model('Message'),
		comment  = mongoose.model('Comment');

function MessagesController() {

	this.createComment = function(req, res) {
		console.log("server.controllers.createComment:")

		message.findOne({_id: req.body.messageID}, function(err, msg){
			var newComment = new comment({
					comment:  	req.body.comment,
					userName:		req.body.userName,
					_messageID: req.body.messageID,
					_userID:  	req.body.userID
			});

			newComment.save(function(err, objComment){
				if (err) {
					 res.status(500).json(err.errors);
				}	else {
					msg.comments.push(objComment._id);
					msg.save(function(err, newMessage){
					 	if(err) {
							console.log('Error saving comment');
						} else {
							console.log(objComment);
							res.send(objComment);
						}
					});
			 }
		 });
		})
	}

	this.create = function(req, res) {
		console.log("server.controllers.messages:", req.body)
		var newMessage = new message({
				message:  req.body.message,
				userName: req.body.userName,
				_userID:  req.body.userID
		});
		newMessage.save(function(err, msgID) {
			if (err) {
				res.json({error: "Error occured saving message"});
			} else {
				res.json(msgID);
			}
		})
	}

	this.index = function(req, res) {
		message.find({}).populate('comments').exec(function(err, messages) {
				 if (err){
						res.status(666);
						res.json(err.errors);
				 } else {
					 res.json(messages);
				 }
			})
	}

}

module.exports = new MessagesController();
