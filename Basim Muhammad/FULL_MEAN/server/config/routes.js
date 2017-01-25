var mongoose = require('mongoose');
var friend = require('../controllers/friends.js')

console.log('future routes')

module.exports=function (app){
	app.get('/friends', friend.index),
	app.post('/friends', friend.create),
	app.put('/friends/:id', friend.update),
	app.delete('/friends/:id', friend.destroy),
	app.get('/friends/:id',friend.show)

	}