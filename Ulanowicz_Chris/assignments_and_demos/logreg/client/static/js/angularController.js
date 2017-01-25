logApp.controller('usersController', ['userFactory', function(userFactory){
	// console.log("users controller loaded");
	if(userFactory.loggedUser._id){
		console.log("user is logged in");
	}
	else{
		console.log("not logged in");
		$location.url('/');
	}
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
			// console.log(this.validationErrors);
		})
	}
	this.login = function(){
		console.log(self.logUser);
		userFactory.login(self.logUser, function(data){
			console.log("first callback, everything is good");
			console.log(data);
			userFactory.setLogin(data);
			// if(data.data.errors){
			// 	self.validationErrors = data.data.errors;
			// }
			// else{
			// 	console.log("data good");
			// }
		}, function(error){
			console.log("second callback");
			console.log(error);
			self.validationErrors = error.data.data.errors;
		})
	}
}])








