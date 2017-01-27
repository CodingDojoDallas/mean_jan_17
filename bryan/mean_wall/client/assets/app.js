var app = angular.module('loginApp', ['ngRoute','ngCookies']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/wall.html',
			controller: 'wallController',
			controllerAs: 'wC'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'loginController',
			controllerAs: 'lC'
		})
		.otherwise({
			redirectTo: '/'
		})
})
