var mongoose = require('mongoose'),
	User = mongoose.model('User');

function UsersController(){

	this.register = function(req, res){
		if (req.body.password != req.body.passwordconfirm){
			res.json({errors: {password: {message: 'Passwords must match!'}}});
		} else {
			var newUser = new User({
					email: 			req.body.email,
					first_name: req.body.first_name,
					last_name: 	req.body.last_name,
					password: 	req.body.password,
					birthday: 	req.body.birthday
			});

			newUser.save(function(err, user){
				if(err){
					console.log(err);
					if (11000 === err.code || 11001 === err.code) {
						res.json({errors: {email: {message: 'Email address is in use.  Please use a different email address.'}}});
					} else {
						res.json(err);
					}
				} else {
					returnedUser = {
						first_name: user.first_name,
						last_name: 	user.last_name,
						email: 			user.email,
						birthday: 	user.birthday
					}
					res.json(returnedUser);
				}
			})
		}
	}

	this.login = function(req, res){
		User.find({email: req.body.email}, function(err, user){
			if (err){
				console.log(err);
				res.json(err);
			} else if (user[0]) {
				user = user[0];
				user.comparePassword(req.body.password, user.password, function(ret){
					if(ret){
						returnedUser = {
							first_name: user.first_name,
							last_name: 	user.last_name,
							email: 			user.email,
							birthday: 	user.birthday
						}
						res.json(returnedUser);
					} else {
							res.json({errors: {UserSchema: {message: 'Wrong password entered.'}}});
					}
				})
			} else {
					res.json({errors: {UserSchema: {message: 'That user does not to exist.'}}})
			}
		})
	}
}

module.exports = new UsersController;
