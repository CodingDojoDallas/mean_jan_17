logApp.factory('userFactory', function($http){
	console.log("user factory loaded up");
	var factory = {};

	factory.register = function(user, callback, errorCallback){
		console.log(user);
		$http.post('/users', user).then(callback, errorCallback);
	}






	return factory;
})