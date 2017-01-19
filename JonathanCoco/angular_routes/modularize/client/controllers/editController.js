(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */

  /* EDIT CONTROLLER: this controller uses 'this', and the controlValue seems to not update (a bug for you to fix! possibly one new line of code ~ 14 characters, and one modification of something that already exists)*/
  angular.module('app').controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
    /* Public Properties */
    this.controlValue = "Current Name:";
    /* Public Methods */
    this.getUser = function() {
      userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
        $scope.user = user;
      })
    }

    this.updateUser = function(){
      userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
        $scope.user = userFromFactory;
        // what is this?
        this.controlValue = "Updated Name: "
      });
    }
    /* on load time */
    this.getUser();
    console.log(this);
  }]);

}) ();
