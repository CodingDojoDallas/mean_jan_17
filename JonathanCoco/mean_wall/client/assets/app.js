(function() {

angular.module('app', ['ngRoute', 'httpPostFix', 'ngCookies']);

angular.module('app').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


/* configuration for angular route */
angular.module('app').config(function($routeProvider) {

  console.log('Route Provider');

  $routeProvider
    .when('/', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    })
    .when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'loginController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

}) ();
