var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(){
	console.log("users controller loaded up");
	return {
		create: function(req,res){
			console.log(req.body);
			var newUser = new User(req.body);
			newUser.save(function(err, data){
				if(err){
					console.log("*****GOT ERROR*****")
					console.log(err);
					res.status(422);
					res.json(err);
				}
				else{
					console.log(data);
					res.json(data);
				}
			})
		}
	}
}();