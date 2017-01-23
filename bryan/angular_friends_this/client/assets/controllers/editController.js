app.controller('editController', ['friendsFactory', '$routeParams', "$location", function(friendsFactory, $routeParams, $location) {

  var self = this;

   self.update = function(){
       friendsFactory.update($routeParams.id, self.friend, function(){
       });
       self.friendForm={};
       $location.url('/');
   }

   friendsFactory.show($routeParams.id, function(data){
       self.friend = data;
   })

   self.setdate = function(filter_date) {
 		console.log(self.filter_date);
 		return $filter('date')(filter_date, 'yyyy-MM-dd');
 	}

}]);
