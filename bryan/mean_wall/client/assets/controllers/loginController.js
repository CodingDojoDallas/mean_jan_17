app.controller('loginController', function(userFactory, $location, $cookies){

	var self = this;
	this.newUser = {};
	this.loginAttempt = {};
	this.loginErrors = [];
	this.registerErrors = [];
	this.user_id 	 = '';
	this.user_name = '';

	function saveCookies(data) {
		this.user_id 	  = data.id;
		this.user_name  = data.first_name + " " + data.last_name;
		var today 	= new Date();
		var expired = new Date(today);
		expired.setDate(today.getDate() + 1);
		$cookies.put('userID',   this.user_id, 	 {expires : expired });
		$cookies.put('userName', this.user_name, {expires : expired });
	}

	this.register = function(){
		self.registerErrors = [];
		userFactory.register(self.newUser).then(function(data){
			if(data.email){
				//console.log('registered passed:', data)
				data.id = data.user_id;
				saveCookies(data)
				$location.url('/wall');
			} else {
				var errors = data.errors;
				for (key in errors){
					self.registerErrors[key] = errors[key].message
				}
			}
		})
	}

	this.login = function(){
		this.loginErrors = [];
		userFactory.login(angular.copy(self.loginAttempt)).then(function(data){
				console.log('loginController.login (data):', data)
				if (data.email){
					saveCookies(data)
					$location.url('/wall');
				} else {
					self.loginErrors.push(data.errors.Register.message);
				}
			})
	}

})
