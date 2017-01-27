console.log('User Factory');
angular.module('app').factory('userFactory', ['$http', function($http) {
  // constructor for our factory
  var user = {};
  var error = {};

  console.log(" before function user factory");

  function userFactory()
  {
    console.log("in function user factory");

    var _this = this;

    this.register = function(newuser, callback, callback_errors){
      console.log(newuser);

      $http.post('/users', newuser).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log(returned_data);
          user = returned_data.data;
          callback(user);
        }
      }, function(response){
          console.log(response);
          callback_errors(response);
      });
    };

    this.login = function(login_credentials, callback, callback_errors){

      console.log(login_credentials);

      $http.post('/users/login', login_credentials).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log(returned_data);
          user = returned_data.data;
          callback(user);
        }
      }, function(response){
          console.log(response);
          callback_errors(response);
      });
    };

    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/users').then(function(returned_data){
        callback(returned_data.data);
      });
    }

    this.show= function(user_id, callback){

      //call this method if you want to update or set the friends variable
      $http.get('/users/' + user_id).then(function(returned_data){
        console.log("we are returning from show in factory")
        console.log(returned_data);
        callback(returned_data.data);
      });
    }

  }

  return new userFactory();

}]);
