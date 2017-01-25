(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('dashboardController', ['$scope',  '$location', '$cookies',  function($scope,  $location, $cookies) {

    var index = function(){
                        // messageFactory.index(function(returnedData){
                        //   $scope.messages = returnedData;
                        //   });
             };

    index();
    
  }]);

}) ();
