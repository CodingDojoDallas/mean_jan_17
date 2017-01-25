(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('indexController', ['$scope', 'friendFactory', '$location', function($scope, friendFactory, $location) {

    var index = function(){
                         friendFactory.index(function(returnedData){
                           $scope.friends = returnedData;
                           });
             };
             
     $scope.sortType = 'last_name';
     $scope.sortReverse = false;

       /* Scope Methods */
     $scope.show = function(friend_id) {
         $location.url('/show/' + friend_id);
       }

     $scope.edit = function(friend_id) {
         $location.url('/edit/' + friend_id);
       }

     $scope.delete = function(friend_id){
          friendFactory.delete(friend_id, function(){
          $location.url('/index');
       });
     }
    index();
  }]);

}) ();
