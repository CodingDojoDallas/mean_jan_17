console.log('friends controller');
var mongoose = require('mongoose');
var Friends = mongoose.model('Friends');

function FriendsController() {

  this.index = function(req, res) {
		Friends.find({}, function(err, results) {
			if (err) {
				console.log('There was an error:', err);
			} else {
				res.json(results);
			}
		})
	};

  this.create = function(req, res) {
		var friend = new Friends({
			firstName: req.body.firstName,
			lastName:  req.body.lastName,
			birthDate: req.body.birthDate
		});
		friend.save(function(err) {
			if (err) {
				console.log(err);
				res.json({error: 'error message',	err: err});
			} else {
				res.json({placeholder: 'success'});
			}
		})
	};

	this.update = function(req, res) {
		Friends.findOne({
			_id: req.params.id
		}, function(err, friend) {
			if (err) {
				console.log(err);
			} else {
				friend.firstName = req.body.firstName;
				friend.lastName = req.body.lastName;
				friend.birthDate = req.body.birthDate;
				friend.save(function(err, updatedFriend) {
					if (err) {
            console.log(err);
					} else {
						res.json(updatedFriend);
					}
				})
			}
		})
	};

  this.delete = function(req, res) {
		Friends.remove({_id: req.params.id}, function(err) {
			if (err) {
				console.log(err);
			} else {
				res.json({message: "Friend deleted!"});
			}
		})
	};

	this.show = function(req, res) {
    Friends.findOne({_id: req.params.id}, function(err, result) {
			if (err) {
				console.log(err);
			} else {
				res.json(result);
			}
		})
	};

}

module.exports = new FriendsController();
