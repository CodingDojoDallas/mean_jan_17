var app = angular.module('app', []);
console.log(app);

app.controller('foodController', function($scope){
	$scope.food =[];
	$scope.addFood= function(){
		$scope.food.push($scope.newFood);
		$scope.newFood ={};
	}

})
