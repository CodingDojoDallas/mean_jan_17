logApp.controller('usersController', ['userFactory', function(userFactory){
	// console.log("users controller loaded");
	var self = this;
	this.validationErrors;
	this.register = function(){
		// console.log(self.regUser);
		userFactory.register(self.regUser, function(data){
			// console.log("first callback in UC.register");
			// console.log(data);
		}, function(error){
			// console.log("2nd callback in UC.register");
			// console.log("GOTERRRRRRRROOOORR",error);
			self.validationErrors = error.data.errors
			console.log(this.validationErrors);
		})
	}
}])