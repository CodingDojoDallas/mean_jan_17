firstApp.controller('newController',['friendsFactory','$location', '$routeParams',function(friendsFactory,$location, $routeParams){
	var self=this
	var friends=[]

	var show_friend={}
	
	console.log	('Show friend when cont runs is',show_friend)
	console.log('Location is',$location)

	var index=function(){
		console.log('newController index function running')
		friendsFactory.index(function(factoryFriends){
			self.friends=factoryFriends
			console.log('Inside callback',factoryFriends)
		})

	}

	 this.create=function(){
		console.log('Friend is', self.newFriend)
		friendsFactory.create(self.newFriend)
		console.log('controller create function ran')
		index()
		
	}

	this.delete=function(friend){
		friendsFactory.delete(friend)
		index();
	}

	this.show=function(){
		
		friendsFactory.show($routeParams.id,function(friend){
			console.log('FRIEND PASSED IN FACTORY CALLABCK IS', friend)
			self.friend=friend
			console.log('SHOW FRIEND AFTER CONTROLLER RUNS IS', self.show_friend)
		})


		// for (var i =0; i<self.friends.length;i++){
		// 		if (self.friends[i]._id===friend._id){
		// 			console.log('Self friend id is',self.friends[i]._id)
		// 			console.log('Friend id is',friend._id)
		// 			show_friend=self.friends[i]
					// $location.url('/show')
		// 		}
				
		// }
		// console.log('show friend equals',show_friend)
				// console.log($location.$$url, 'is location')
				
		// 		// $window.location.assign('#!/show')

	}

	this.update=function(editFriend){
		console.log('CONTROLLER UPDATE METHOD RAN')
		console.log($routeParams.id)
		console.log('Editfriend is',editFriend)
		friendsFactory.update($routeParams.id,editFriend)
		index()
	}

	index();

}])