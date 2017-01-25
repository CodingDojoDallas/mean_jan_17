var app = angular.module('loginApp', ['ngRoute','ngCookies']);

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

// //app.run(["$cookies", "$location", "loginController", function($cookies, $location, loginController) {
//  app.run(["$cookies", "$location", function($cookies, $location) {
// 	if ($cookies.get('userID')) {
// 		console.log("Cookie Found");
// 		console.log("Checking ID");
// 		//loginController.authenticate($cookies.get('userID'));
// 		$location.url('/success');
// 	} else {
// 		console.log("No Cookie Found");
//
// 		$location.url('/');
// 	}
//}])
