(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('editController', ['$scope', 'friendFactory', '$location', '$routeParams', function($scope, friendFactory, $location, $routeParams) {

    var getFriend = function(){
                         friendFactory.getFriend($routeParams.id, function(returnedData){
                           console.log("we are in getfriend callback - " + $routeParams.id);

                           var date = new Date(returnedData.birthday);
                           returnedData.birthday = date;

                           $scope.friend = returnedData;
                           console.log($scope.friend);
                         });
             };

    $scope.updateFriend = function(){
      friendFactory.update($routeParams.id, $scope.friend, function(returnedData){

        var date = new Date(returnedData.birthday);
        returnedData.birthday = date;

        console.log("we are in callback in update friend");
        $scope.friend = returnedData;
        console.log("scope is assigned returned data");
      });
    };

    $scope.home = function(){
      $location.url('/');
    }


    getFriend();


  }]);

}) ();
