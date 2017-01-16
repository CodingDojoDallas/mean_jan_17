(function() {

/* configuration for angular route */
angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'eC'
    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
    })
    .otherwise({
      redirectTo: '/'
    });
});

}) ();
