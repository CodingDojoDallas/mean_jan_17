app.controller('editController', ['$scope','friendsFactory', '$routeParams', "$location", function($scope, friendsFactory, $routeParams, $location) {

   $scope.update = function(){
     console.log($scope.friend.birthDate);
       friendsFactory.update($routeParams.id, $scope.friend, function(){
           console.log($scope.friend, ' has been updated!');
       });
       $scope.friendForm={};
       $location.url('/');
   }

   friendsFactory.show($routeParams.id, function(data){
       $scope.friend = data;
   })

   $scope.setdate = function(filter_date) {
 		console.log($scope.filter_date);
 		return $filter('date')(filter_date, 'yyyy-MM-dd');
 	}

}]);
