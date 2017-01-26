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
      controller: 'dashboardController'
    })
    .when('/customers', {
      templateUrl: '/partials/customer.html',
      controller: 'customerController'
    })
    .when('/products', {
      templateUrl: '/partials/product.html',
      controller: 'productController'
    })
    .when('/orders', {
      templateUrl: '/partials/order.html',
      controller: 'orderController'
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
