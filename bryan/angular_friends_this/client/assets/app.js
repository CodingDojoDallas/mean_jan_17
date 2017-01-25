var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/all.html',
            controller: 'newController',
            controllerAs: 'nc'
        })
        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'newController',
            controllerAs: 'nc'
        })
        .when('/update/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editController',
            controllerAs: 'ec'
        })
        .when('/show/:id', {
            templateUrl: 'partials/show.html',
            controller: 'editController',
            controllerAs: 'ec'
        })
        .otherwise('/')
});
