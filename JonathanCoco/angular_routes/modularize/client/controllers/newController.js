(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
    $scope.addUser = function(){
      userFactory.create($scope.user, function passedToUserFactoryUpdate(userFromFactory){
        $scope.user = userFromFactory;
        $location.url('/index');
      })

      console.log("we are  in add user");
      console.log($scope.user);
    }

  }]);

}) ();
