(function() {

angular.module('app', ['ngRoute', 'httpPostFix']);

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
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
    })
    .when('/show/:id', {
      templateUrl: '/partials/show.html',
      controller: 'editController',
    })
    .otherwise({
      redirectTo: '/'
    });
});

}) ();
