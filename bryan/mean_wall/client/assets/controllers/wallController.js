app.controller('wallController', function(messageFactory, $location, $cookies){
	var self 	 		 = this;
	self.messages  = [];
	self.$location = $location;
	self.user_id 	 = '';
	self.user_name = '';

	self.postComment = function(message, newComment) {
		var nComment = {
			comment:   newComment,
			userName:  self.user_name,
			userID:	   self.user_id,
			messageID: message._id
		};
		console.log("nComment", nComment)
		messageFactory.postComment(nComment, function(callback) {
			self.index();
			self.nComment = "";
		})
	}

	self.postMessage = function(){
		var nMessage = {
			message:  self.newMessage,
			userName: self.user_name,
			userID:	  self.user_id
		};
		messageFactory.postMessage(nMessage, function(callback) {
			self.index();
			self.newMessage = "";
		})
	}

	self.index = function() {
		messageFactory.index(function(messages) {
			self.messages = messages;
		});
	};


// User access controll section below *******************************************
self.logout = function(){
	$cookies.remove('userID');
	$cookies.remove('userName');
	self.user_id 	 = '';
	self.user_name = '';
	$location.url('/login');
}
if ($cookies.get('userID') != null && $cookies.get('userID') != '' &&
		$cookies.get('userName') != null && $cookies.get('userName') != '' ) {
			self.user_id 	 = $cookies.get('userID');
			self.user_name = $cookies.get('userName');
			self.index();
} else {
	// No cookies - go home.
	$location.url('/login');
}
// *********************************************************************************

})


// Bryanutley2000@yahoo.com
// Bryan6932


	// self.checkUser = function() {
	// 	userFactory.checkUser(function(user){
	// 		if (user.email){
	// 			self.user = user;
	// 		} else {
	// 			$location.url('/');
	// 		}
	// 	})
	// }
	// self.checkUser();
