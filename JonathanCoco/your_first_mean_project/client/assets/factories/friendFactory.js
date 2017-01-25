console.log('Friend Factory');
angular.module('app').factory('friendFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendFactory(){
    var _this = this;

    this.create = function(newfriend, callback){

      newfriend.birthday_string = JSON.stringify(newfriend.birthday);

      console.log(newfriend);

      $http.post('/friends', newfriend).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log(returned_data);
          callback(returned_data.data);
        }
      });
    };

    this.update = function(id, friend, callback){ // what parameters do we need?
      //call this method if you want to update or set the friends variable
      friend.birthday_string = JSON.stringify(friend.birthday);

      console.log("in friendfactory - update");
      console.log(friend);

      $http.put('/friends/' + id, JSON.stringify(friend)).then(function(returned_data){
        friend = returned_data.data;
        callback(friend);
      });
    };

    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });

 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){// what parameters do we need?
      //call this method if you want to update or set the friends variable
      $http.delete('/friends/'+id).then(function(){
        callback();
      });
    };
    this.show = function(id, callback){// what parameters do we need?
      //call this method if you want to update or set the friends variable
      $http.get('/friends/'+id).then(function(returned_data){
        friend = returned_data.data;
        callback(friend);
      });
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(id, callback){
        //call this method if you want to update or set the friends variable
        $http.get('/friends/'+id).then(function(returned_data){
          friend = returned_data.data;
          callback(friend);
        });
    };
  }
  return new FriendFactory();
}]);
