var app = angular.module('loginApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'loginController',
			controllerAs: 'lC'
		})
		.when('/success', {
			templateUrl: 'partials/success.html',
			controller: 'successController',
			controllerAs: 'sC'
		})
		.otherwise({
			redirectTo: '/'
		})
})
