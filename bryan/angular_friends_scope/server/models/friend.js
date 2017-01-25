var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
    firstName:  String,
    lastName:   String,
    birthDate:  Date,
}, {timestamps: true});

var Friend = mongoose.model('Friends', FriendsSchema)
