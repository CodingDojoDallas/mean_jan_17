var mongoose = require('mongoose'),
		Schema   = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
	message: {
		type: 		String,
		required: [true, 'You must enter a Message'],
		trim: 		true,
	},
	userName: {
		type: 		String,
		trim: 		true,
	},
	_userID: {
    type: Schema.Types.ObjectId, ref: 'User'
	},
	comments: [{
		type: Schema.Types.ObjectId, ref: 'Comment'
	}]
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
