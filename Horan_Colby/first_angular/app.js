var app = angular.module('app', [])

  app.controller('divController', ['$scope', function($scope) {
      $scope.myName = 'Colby'
      $scope.myFavoriteLanguage = 'JavaScript';
      $scope.myFavoriteJSLibrary = 'Angular';
  }]);