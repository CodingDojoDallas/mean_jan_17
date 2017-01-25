var firstApp=angular.module('firstApp',['ngRoute'])


firstApp.config(function($routeProvider){
	$routeProvider
			.when('/new',{
				templateUrl: '/partials/new.html'
			})
			.when('/show',{
				templateUrl:'/partials/show.html'
			})
			.when('/edit/:id', {
				templateUrl:'/partials/edit.html'
	})



})