app.factory('messageFactory', ['$http', function($http){
	var messages = [],
			message  = {};

	function MessageFactory(){

		this.postComment = function(newComment, callback) {
			return $http.post('/comment', newComment).then(function(ret){
				callback();
			})
		}

		this.postMessage = function(newMessage, callback) {
			return $http.post('/message', newMessage).then(function(ret){
				callback();
			})
		}

		this.index = function(callback) {
			$http.get('/message').then(function(retData) {
				callback(retData.data);
			});
		}


		// this.register = function(newUser){
		// 	return $http.post('/register', newUser).then(function(ret){
		// 		if(ret.errors){
		// 			return ret;
		// 		} else {
		// 			user = ret.data;
		// 			return user;
		// 		}
		// 	})
		// }


}
	return new MessageFactory();
}])
