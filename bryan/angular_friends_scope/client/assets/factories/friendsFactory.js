app.factory('friendsFactory', ['$http', function($http) {
  var friends = [],
      friend  = {},
      current_user;

  function FriendsFactory(){
    this.create = function(newfriend, callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        if (returned_data.error){
          callback(returned_data);
        }
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(id, newfriend, callback){
      console.log("friendsFactory(id)", id);
      console.log("friendsFactory(newfriend)", newfriend);
      $http.put('/friends/'+id, newfriend).then(function(returned_data){
        callback(returned_data.data)
      })
    };

    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
     };

    this.delete = function(id, callback){
        $http.delete('/friends/'+id).then(function(){
          console.log('friend deleted');
          callback();
        })
    };

    this.show = function(id,  callback){
      $http.get('/friends/'+id).then(function(returned_data){
        friend = returned_data.data;
        callback(friend);
      })
    };

    this.getFriends = function(callback){
      callback(friends);
    };

    this.get_user = function(callback){
        callback(current_user);
    }

    this.set_user = function(new_user, callback){
      current_user = new_user;
      callback(current_user);
    }

  }

  return new FriendsFactory();

}]);
