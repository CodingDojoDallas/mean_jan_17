app.controller('successController', function(userFactory, $location, $cookies){
	var self = this;

	self.checkUser = function() {
		userFactory.checkUser(function(user){
			if (user.email){
				self.user = user;
			} else {
				$location.url('/');
			}
		})
	}
	self.checkUser();

	// self.logout = function(){
	// 	userFactory.logout(function(){
	// 		$cookies.remove('userID');
	// 		$location.url('/');
	// 	})
	// }

})

// Bryanutley2000@yahoo.com
// Bryan6932
