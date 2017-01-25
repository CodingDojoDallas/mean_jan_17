(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('userController', ['$scope', 'userFactory', '$location', '$cookies', '$routeParams', function($scope, userFactory, $location, $cookies, $routeParams) {


    var show = function(user_id){
               userFactory.show(user_id, function(returnedData){
                 $scope.user = returnedData;

                 console.log(returnedData);
                 
                 console.log("We are  in show");
                 console.log($scope.user);
                 });
            };



     $scope.user = {};
     $scope.user_id = $routeParams.user_id

     show($scope.user_id);


  }]);

}) ();
