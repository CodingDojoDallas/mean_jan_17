(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('topicController', ['$scope', 'topicFactory', 'categoryFactory', '$location', '$cookies', '$routeParams', function($scope, topicFactory, categoryFactory, $location, $cookies, $routeParams) {

    var index = function(){
                topicFactory.index(function(returnedData){
                  $scope.topics = returnedData;
                  });
                categoryFactory.index(function(returnedData){
                  $scope.categories = returnedData;
                  });
             };
    var show = function(topic_id){
               topicFactory.show(topic_id, function(returnedData){
                 $scope.topic = returnedData;
                 console.log("We are  in show");
                 console.log($scope.topic);
                 });
            };
            
     var validateComment = function() {
       return true;
     }

     var validateAnswer = function(){
       return true;
     }

     var validateTopic = function() {
       var bValid = true;


       if ($scope.newTopic != null)
       {
         $scope.newTopic.client_topic_validation = "";
         $scope.newTopic.client_description_validation = "";
         $scope.newTopic.client_category_validation = "";

         console.log($scope.newTopic.description);
         console.log($scope.newTopic.topic);
         console.log($scope.newTopic.category);

         if ($scope.newTopic.topic == "" || $scope.newTopic.topic == null)
         {
           $scope.newTopic.client_topic_validation = "You must specify a topic";
           bValid = false;
         }
         if ($scope.newTopic.description == "" || $scope.newTopic.description == null)
         {
           $scope.newTopic.client_description_validation = "You must specify a description";
           bValid = false;
         }
         if ($scope.newTopic.category == "" || $scope.newTopic.category == null)
         {
           $scope.newTopic.client_category_validation = "You must specify a category";
           bValid = false;
         }
      }
      else {
        bValid = false;
        $scope.newTopic = {};

        $scope.newTopic.client_topic_validation = "You must specify a topic";
        $scope.newTopic.client_description_validation = "You must specify a description";
        $scope.newTopic.client_category_validation = "You must specify a category";
      }

       return bValid;
     }

     $scope.categories  = [];
     $scope.topics = [];
     $scope.topic = {};
     $scope.topic_id = $routeParams.topic_id;

     $scope.newComment = {};

     $scope.create = function(){

          if (validateTopic()){
            $scope.newTopic.user = $cookies.get('user_id');

             topicFactory.create($scope.newTopic,
                                function callback(result) {
                                       $scope.topics.push(result);
                                       $scope.newTopic = {category:'', topic:'', description:''}
                                },
                                function callback_error(errors){
                                   $scope.newTopic.errors = errors.data;
                                })
          }
        };

      $scope.resetTopic = function(){

            $scope.newTopic = {category:'', topic:'', description:''}
         };

      $scope.showTopic = function(topic_id){

        $location.url("/topic/"+ topic_id);
      }

      $scope.showUser = function(user_id){

        $location.url("/user/"+ user_id);
      }


      $scope.createAnswer = function(){

           if (validateAnswer()){
             $scope.newAnswer.user = $cookies.get('user_id');
             $scope.newAnswer.topic = $scope.topic_id;


              topicFactory.createAnswer($scope.newAnswer,
                                 function callback(result) {
                                        $scope.topic.answers.push(result);
                                        $scope.newAnswer = {answer:'', topic:'', user:''}
                                 },
                                 function callback_error(errors){
                                    $scope.newTopic.errors = errors.data;
                                 })
           }
         };

       $scope.createComment = function(answer, comment){

            if (validateComment()){

              $scope.newComment.user = $cookies.get('user_id');
              $scope.newComment.topic = $scope.topic_id;
              $scope.newComment.answer = answer._id;
              $scope.newComment.comment = comment;

              console.log(comment);

              console.log("validate we  are  in create  comment");
              console.log($scope.newComment);


               topicFactory.createComment($scope.newComment,
                                  function callback(result) {
                                         answer.comments.push(result);
                                         $scope.newComment = {}
                                  },
                                  function callback_error(errors){
                                     $scope.newComment.errors = errors.data;
                                  })
            }
          };

      $scope.voteAnswer = function(answer, bLike){

        console.log("vote answer controller");
        console.log(answer);

        topicFactory.voteAnswer(answer._id, bLike,
                           function callback(result) {
                                  answer.likes = result.likes;
                                  answer.dislikes  = result.dislikes;
                           },
                           function callback_error(errors){
                              console.log(errors.data);
                           })
      }

     $scope.user_id = $cookies.get('user_id');

     if ($scope.topic_id == null)
     {
       index();
     }
     else {
       show($scope.topic_id);
     }

  }]);

}) ();
