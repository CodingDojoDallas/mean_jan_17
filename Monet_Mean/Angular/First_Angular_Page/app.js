var app = angular.module('app', []);
console.log(app);

app.controller('divController', ['$scope', function($scope){
	$scope.myName = 'Monet Harkin';
	$scope.myFavoriteLanguage = 'JavaScript';
	$scope.myFavoriteJSLibrary = 'Angular';

}])