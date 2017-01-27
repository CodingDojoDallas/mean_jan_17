var mongoose = require('mongoose'),
		Schema   = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	comment: {
		type: 		String,
		required: [true, 'You must enter a Message'],
		trim: 		true
	},
	userName: {
		type: 		String
	},
  _userID: {
		type: Schema.Types.ObjectId, ref: 'User'
	},
  _messageID: {
		type: Schema.Types.ObjectId, ref: 'Message'
	}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
