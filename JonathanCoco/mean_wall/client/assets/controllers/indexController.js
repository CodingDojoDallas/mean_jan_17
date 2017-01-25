(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('indexController', ['$scope', 'messageFactory', '$location', '$cookies',  function($scope, messageFactory, $location, $cookies) {

    var index = function(){
                         messageFactory.index(function(returnedData){
                           $scope.messages = returnedData;
                           });
             };

     $scope.user_name = ''
     $scope.messages = [];

     $scope.logout = function(){
        $cookies.put('user_name', '');
        $cookies.put('user_id', '');

        $location.url('login');
     }

     $scope.create = function(){

           $scope.newMessage.message_user_name = $scope.user_name;

           messageFactory.create($scope.newMessage,
                                function callback(result) {
                                       $scope.messages.push(result);
                                },
                                function callback_error(errors){
                                   console.log('we in callback_error');
                                   console.log(errors);
                                })

        };

      $scope.createComment = function(message, comment){

            var newComment = {comment:comment, comment_user_name:$scope.user_name, message_id : message._id};

            messageFactory.createComment(newComment,
                                 function callback(result) {
                                        message.comments.push(result);
                                 },
                                 function callback_error(errors){
                                    console.log('we in callback_error');
                                    console.log(errors);
                                 })

         };




     console.log("we are checking to see if cookies are  set");
     console.log("user id = " + $cookies.get('user_id'));

     if ($cookies.get('user_id') != null && $cookies.get('user_id') != '' )
     {
       $scope.user_name = $cookies.get('user_name');
       index();
     }
     else {
        $location.url('/login');
     }
  }]);

}) ();
