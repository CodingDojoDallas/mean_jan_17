(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('indexController', ['$scope', 'userFactory', '$location', '$cookies',  function($scope, userFactory, $location, $cookies) {

    var index = function(){
                         userFactory.index(function(returnedData){
                           $scope.users = returnedData;
                           });
             };

     $scope.sortType = 'last_name';
     $scope.sortReverse = false;
     $scope.user_name = ''

       /* Scope Methods */
     $scope.show = function(user_id) {
         $location.url('/show/' + user_id);
       }

     $scope.edit = function(user_id) {
         $location.url('/edit/' + user_id);
       }

     $scope.delete = function(user_id){
          userFactory.delete(user_id, function(){
          $location.url('/index');
       });
     }

     $scope.logout = function(){
        $cookies.put('user_name', '');
        $cookies.put('user_id', '');

        $location.url('login');
     }

     console.log('looking for cookies...');
     console.log($cookies.get('user_id'));

     if ($cookies.get('user_id') != null)
     {
       $scope.user_name = $cookies.get('user_name');
       index();
     }
     else {
        $location.url('/login');
     }
  }]);

}) ();
