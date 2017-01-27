
angular.module('app').factory('topicFactory', ['$http', function($http) {
  // constructor for our factory
  var topic = {};
  var error = {};


  function topicFactory()
  {

    var _this = this;

    this.create = function(newTopic, callback, callback_errors){


      $http.post('/topics', newTopic).then(function(returned_data){

        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }, function(response){
          callback_errors(response);
      });
    };

    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/topic').then(function(returned_data){

        callback(returned_data.data);
      });
    }

    this.show= function(topic_id, callback){

      //call this method if you want to update or set the friends variable
      $http.get('/topic/' + topic_id).then(function(returned_data){
        console.log("we are in factory.show");
        console.log(returned_data);
        callback(returned_data.data);
      });
    }

    this.create = function(newTopic, callback, callback_errors){


      $http.post('/topics', newTopic).then(function(returned_data){

        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }, function(response){
          callback_errors(response);
      });
    };

    this.voteAnswer = function(answer, bLike, callback, callback_errors){

      console.log("we are  in answer");
      console.log(answer);

      $http.post('/answer/'+answer+'/vote', {like:bLike}).then(function(returned_data){

        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }, function(response){
          callback_errors(response);
      });
    };


    this.createAnswer = function(newAnswer, callback, callback_errors){

      console.log("we are in createAnswer");
      console.log(newAnswer);

      $http.post('/answer', newAnswer).then(function(returned_data){

        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }, function(response){
          callback_errors(response);
      });
    };

    this.createComment = function(newComment, callback, callback_errors){

      console.log("we are in createComment");
      console.log(newComment);

      $http.post('/comment', newComment).then(function(returned_data){

        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      }, function(response){
          callback_errors(response);
      });
    };





  }

  return new topicFactory();

}]);
