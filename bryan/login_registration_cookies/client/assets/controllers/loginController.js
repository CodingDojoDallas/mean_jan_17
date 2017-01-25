app.controller('loginController', function(userFactory, $location, $cookies){

	var self = this;
	this.newUser = {};
	this.loginAttempt = {};
	this.loginErrors = [];
	this.registerErrors = [];
	this.user_id = '';
	this.user_name = '';

	function saveCookies(data) {
		// Create cookie, expires in 1 day.
		console.log("Save Cookies");
		console.log(data);
		self.user_id 	  = data.user_id;
		self.user_name  = data.first_name + data.last_name;
		var today 	= new Date();
		var expired = new Date(today);
		expired.setDate(today.getDate() + 1);
		console.log("Save Cookies:",self.user_id," - ",data.user_id);
		$cookies.put('userID',   self.user_id, 	{expires : expired });
		$cookies.put('userName', self.user_name, {expires : expired });
		console.log('saved cookies:',$cookies.getAll());
	}

	function removeCookies() {
		$cookies.remove('userID');
		$cookies.remove('userName');
		self.user_id 	 = '';
		self.user_name = '';
		console.log("Removed Cookies in loginController")
	}

	this.register = function(){
		self.registerErrors = [];
		userFactory.register(self.newUser)
			.then(function(data){
				if(data.email){
					console.log('registered passed:', data)
					saveCookies(data)
					$location.url('/success');
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
		userFactory.login(angular.copy(self.loginAttempt))
			.then(function(data){
				if (data.email){
					saveCookies(data)
					$location.url('/success');
				} else {
					console.log(data);
					self.loginErrors.push(data.errors.UserSchema.message);
				}
				console.log(self.loginErrors)
			})
		console.log(self.loginErrors)
	}

	self.logout = function(){
			removeCookies();
			$location.url('/');
	}

	console.log("loginController: before root - Cookies Found", $cookies.getAll());

	if ($cookies.get('userID') != null && $cookies.get('userID') != '' ) {
		console.log("loginController: root - Cookies Found", $cookies.getAll());
		self.user_id 	 = $cookies.get('userID');
		self.user_name = $cookies.get('userName');
		$location.url('/success');
	} else {
		console.log("loginController: root - NOOOO Cookies Found");
		$location.url('/');
	}


})
