(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('headerController', ['$scope', '$location', '$cookies',  function($scope,  $location, $cookies) {


        $scope.customer = function(){
              $location.url('/customers');
          };


        $scope.products = function(){
              $location.url('/products');
          };

        $scope.orders = function(){
              $location.url('/orders');
          };

        $scope.dashboard = function(){
              $location.url('/');
          };


  }]);

}) ();
