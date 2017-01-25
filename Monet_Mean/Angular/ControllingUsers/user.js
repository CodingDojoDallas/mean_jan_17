var app = angular.module('app',[]);

app.controller('userController', function($scope){
	$scope.users=[];
	$scope.addUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser ={};
	}
	$scope.deleteUser = function(user){
		$scope.users.splice($scope.users.indexOf(user),1);
	}
	$scope.orderByThis = function(x){
		$scope.theOrderBy = x;
	}
})