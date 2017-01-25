console.log('Message Factory');
angular.module('app').factory('messageFactory', ['$http', function($http) {
  // constructor for our factory
  var messages = {};
  var error = {};

  console.log(" before function message factory");

  function messageFactory()
  {
    console.log("in function message factory");

    var _this = this;

    this.create = function(newMessage, callback, callback_errors){
      console.log(newMessage);

      $http.post('/messages', newMessage).then(function(returned_data){

        if (typeof(callback) == 'function'){
          messages = returned_data.data
          callback(messages);
        }
      }, function(response){
          callback_errors(response);
      });
    };

    this.createComment = function(newComment, callback, callback_errors){

      $http.post('/comment', newComment).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log("we are in messagefactory.createComment");
          console.log(returned_data.data);
          comment = returned_data.data
          callback(comment);
        }
      }, function(response){
          alert("error on create");
          console.log(response);
          callback_errors(response);
      });
    };


    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/messages').then(function(returned_data){
        callback(returned_data.data);
      });
    }

  }

  return new messageFactory();

}]);
