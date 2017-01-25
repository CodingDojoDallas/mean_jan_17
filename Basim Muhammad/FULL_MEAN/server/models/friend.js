var mongoose = require('mongoose')

var FriendSchema = new mongoose.Schema({
	name:String
})

mongoose.model('Friend',FriendSchema)
var Friend = mongoose.model('Friend')