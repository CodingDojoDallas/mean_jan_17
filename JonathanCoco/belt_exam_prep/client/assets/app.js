(function() {

angular.module('app', ['ngRoute', 'httpPostFix', 'ngCookies', 'app.filters']);

angular.module('app').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


/* configuration for angular route */
angular.module('app').config(function($routeProvider) {

  console.log('Route Provider');

  $routeProvider
    .when('/', {
      templateUrl: '/partials/dashboard.html',
      controller: 'topicController'
    })
    .when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'loginController'
    })
    .when('/topic/:topic_id', {
      templateUrl: '/partials/topic.html',
      controller: 'topicController'
    })
    .when('/user/:user_id', {
      templateUrl: '/partials/user.html',
      controller: 'userController'
    })
    .otherwise({
      redirectTo: '/'
    });
});



angular.module("app.filters", []).filter("datespan", function() {

  return function(date) {

    console.log("the date input is");
    console.log(date);
    return moment(date).fromNow();
  };
});

}) ();
