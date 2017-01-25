(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('loginController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies) {

    $scope.register_user  = {password:'', first_name:'', last_name:'', email:'', phone:''};
    $scope.login_user = {email:'', password:''};

    var validate = function() {
        var bMatch = true;
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        console.log("first name length");
        console.log($scope.register_user.first_name.length)

        $scope.register_user.client_password_mismatch = "";
        $scope.register_user.client_first_name_validation = "";
        $scope.register_user.client_last_name_validation = "";
        $scope.register_user.client_phone_validation = "";
        $scope.register_user.client_phone_validation = "";
        $scope.register_user.client_email_validation = "";

        if ($scope.register_user.password != $scope.register_user.confirm_password)
        {
          $scope.register_user.client_password_mismatch = "Passwords do not match";
          bMatch = false;
        }

        if ($scope.register_user.first_name.length == 0)
        {
          $scope.register_user.client_first_name_validation = "First Name must contain characters";
          bMatch = false;
        }

        if ($scope.register_user.last_name.length == 0)
        {
          $scope.register_user.client_last_name_validation = "Last Name must contain characters";
          bMatch = false;
        }

        if ($scope.register_user.phone.length == 0 )
        {
          $scope.register_user.client_phone_validation = "Please enter a valid phone number";
          bMatch = false;
        }
        else if ($scope.register_user.phone.match(/\d/g).length!=10)
        {
          $scope.register_user.client_phone_validation = "Please enter a valid phone number";
          bMatch = false;
        }

        if ($scope.register_user.email == '' || !re.test($scope.register_user.email))
        {
            $scope.register_user.client_email_validation = "Please enter  a valid email address";
            bMatch = false;
        }

        return bMatch;
    }



     $scope.login = function(){

          $scope.login_user.errors = {};

          userFactory.login($scope.login_user,
            function callback(result) {
              console.log("we succesfully logged in");

              var today = new Date();
              var expiresValue = new Date();

              expiresValue.setMinutes(today.getMinutes() + 60);

              $cookies.put('user_id', JSON.stringify(result._id), {'expires':expiresValue});
              $cookies.put('user_name', result.email, {'expires':expiresValue});

              console.log($cookies.getAll());

              $location.url('/');
            },
            function callback_error(errors){
              console.log("we have errors");
              $scope.login_user.errors = errors.data;

              console.log($scope.login_user.errors);
              console.log("email error");
          })
     };

     $scope.register = function(){

        $scope.register_user.errors = {};

        if (validate())
        {

          userFactory.register($scope.register_user,
                               function callback(result) {
                                      var today = new Date();
                                      var expiresValue = new Date();
                                      expiresValue.setMinutes(today.getMinutes() + 1);

                                      console.log('setting cookies');
                                      console.log('result = ');
                                      console.log(result);
                                      $cookies.put('user_id', JSON.stringify(result._id), {'expires':expiresValue});
                                      $cookies.put('user_name', result.email, {'expires':expiresValue});

                                      console.log($cookies.getAll());

                                      console.log("we succesfully register");
                                      $location.url('/');
                                      console.log("we called $location");
                               },
                               function callback_error(errors){
                                  console.log('we in callback_error');
                                  console.log(errors);

                                  $scope.register_user.errors = errors.data;
                                  console.log($scope.register_user.errors)
                               })
          }
          else {
              console.log("validation failed");
          }
     };

     $scope.reset = function(){

        $scope.register_user.email = "";
        $scope.register_user.first_name = "";
        $scope.register_user.last_name = "";
        $scope.register_user.password = "";
        $scope.register_user.confirm_password = "";
        $scope.register_user.phone = "";

        $scope.register_user.client_password_mismatch = "";
        $scope.register_user.client_first_name_validation = "";
        $scope.register_user.client_last_name_validation = "";
        $scope.register_user.client_phone_validation = "";
        $scope.register_user.client_phone_validation = "";
        $scope.register_user.client_email_validation = "";

        $scope.register_user.errors = {};
     }

  }]);

}) ();
