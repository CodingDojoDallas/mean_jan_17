var routeApp = angular.module('myApp', ['ngRoute'])

routeApp.config(function($routeProvider){
	console.log("in routes")
	$routeProvider
		.when('/list', { templateUrl: 'views/partials/list.html'})
		.when('/create', { templateUrl: 'views/partials/create.html'})
		.when('/else', {templateUrl: 'views/partials/else.html'})
		// .otherwise('/')
})