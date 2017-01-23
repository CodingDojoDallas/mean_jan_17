var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/all.html',
            controller: 'newController',
        })
        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'newController'
        })
        .when('/update/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editController'
        })
        .when('/show/:id', {
            templateUrl: 'partials/show.html',
            controller: 'editController'
        })
        .otherwise('/')
});
