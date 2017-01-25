var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
	.when('/customize', {
		templateUrl: 'partials/customizeUsers.html'
		// controller: 'CustomizeUserController'
	})
	.when('/users', {
		templateUrl: 'partials/userList.html'
		// controller: 'UserListController'
	})
	.otherwise({
		redirectTo: '/'
	})
})

//Factory
app.factory('userFactory', function(){
	console.log("inside factory");
	var users =[];
	var factory ={};

	factory.getUsers = function(callback){
		console.log("inside factory getUsers");
		callback(users);
	}
	factory.createUser = function(newUser, callback){
		users.push(newUser);
		callback(users);
	}
	factory.deleteUser = function(user, callback){
		users.splice(users[users.indexOf(user)],1);
		console.log("In delete User");
		callback(users);
	}
	factory.showUser = function(user, callback){
		// not finished... if needed add code here
		console.log("in SHOW User");
		callback(users);
	}
	return factory;
})



//Controllers

app.controller('CustomizeUserController', ['$scope', 'userFactory', function($scope, userFactory){

	$scope.users = [];

	//set variable to pass into factory functions below to return updated user list
	var currentUserList = function(data){
			$scope.users = data;
		}

	//loads current user list on controller call/load
	userFactory.getUsers(currentUserList);
	$scope.createUser = function(){
		userFactory.createUser($scope.newUser, currentUserList);
		$scope.newUser={};
	}
	$scope.deleteUser = function(user){
		userFactory.deleteUser(user, currentUserList);
		// console.log($scope.users);
	}


}])


app.controller('UserListController', ['$scope', 'userFactory', function($scope, userFactory){

	$scope.users = [];

	//set variable to pass into factory functions below to return updated user list
	var currentUserList = function(data){
			$scope.users = data;
		}

	//loads current user list on controller call/load
	userFactory.getUsers(currentUserList);
}])
