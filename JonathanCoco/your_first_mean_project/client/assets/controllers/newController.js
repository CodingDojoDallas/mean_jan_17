(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('newController', ['$scope','friendFactory', '$location', function($scope, friendFactory, $location) {
    $scope.addFriend = function(){


      friendFactory.create($scope.friend, function passedToFriendFactoryUpdate(result){

        console.log("result");
        console.log(result);

        $location.url('/');
      })
    }

  }]);

}) ();
