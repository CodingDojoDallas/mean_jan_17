app.controller('CustomController', ['$scope', 'usersFactory', function($scope, usersFactory){
  var self = this
  $scope.users = []
  console.log('consolelog1')

  $scope.createUser = function(){

    if(!$scope.newUser || $scope.newUser.first_name == '' || $scope.newUser.last_name == ''){
      $scope.error = "Please enter correct information"
    }else{
      usersFactory.createUser($scope.newUser, function(data){
        $scope.users = data
        $scope.newUser = {}
      })
    }
  }
  $scope.destroyUser = function(index){
    usersFactory.destroy(index, function(data){
      $scope.users = data
    })
  }
}])

app.controller('UsersController', ['$scope', 'usersFactory', function($scope, usersFactory){
  $scope.users = []
  usersFactory.showUsers(function(data){
    $scope.users = data
  })
}]) 