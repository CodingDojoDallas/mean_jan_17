app.controller('loginController', function(userFactory, $location){

	var self = this;
	this.newUser = {};
	this.loginAttempt = {};
	this.loginErrors = [];
	this.registerErrors = [];

	this.register = function(){
		self.registerErrors = [];
		userFactory.register(self.newUser)
			.then(function(data){
				if(data.email){
					$location.url('/success');
				} else {
					console.log(data);
					var errors = data.errors;
					for (key in errors){
						self.registerErrors[key] = errors[key].message
					}
				}
			})
	}

	this.login = function(){
		this.loginErrors = [];
		userFactory.login(angular.copy(self.loginAttempt))
			.then(function(data){
				if (data.email){
					$location.url('/success');
				} else {
					console.log(data);
					self.loginErrors.push(data.errors.UserSchema.message);
				}
				console.log(self.loginErrors)
			})
		console.log(self.loginErrors)
	}

})
