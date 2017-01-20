var app = angular.module('app', ['ngRoute'])

console.log("???")

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'static/partials/customize.html'
    })
    .when('/users',{
      templateUrl: 'static/partials/users.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
