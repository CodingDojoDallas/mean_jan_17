app.controller('successController', function(userFactory, $location){
	var self = this;

	self.checkUser = function() {
		userFactory.checkUser(function(user){
			console.log('userFactory.checkUser: ', user);
			if (user.email){
				self.user = user;
			} else {
				$location.url('/');
			}
		})
	}
	self.checkUser();

		self.logout = function(){
			userFactory.logout(function(){
				$location.url('/');
			})
		}

})

// Bryanutley2000@yahoo.com
// Bryan6932
