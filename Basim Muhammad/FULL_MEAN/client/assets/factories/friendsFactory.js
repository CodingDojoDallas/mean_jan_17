console.log('friendsFactory')
firstApp.factory('friendsFactory',['$http', function($http){
  

  var factory = {}
  var friends = []
  var friend ={}

  factory.index = function(callback){
    $http.get('/friends').then(function(returned_data){
      if(!returned_data){
        console.log('nothing returned')
      }
      console.log('Returned Data is')
      console.log(returned_data)
      friends=returned_data.data
      callback(friends)
      console.log('After pushing new data into factory.friends. Friends is')
      console.log(friends)
    })
  }

  factory.create = function(friend){
    console.log('Create in factory gets', friend)
    $http.post('/friends', friend).then(function(returned_data){
      
      console.log('create returns',returned_data)


    })
  }

  factory.delete=function(friend){
    $http({method:'DELETE', url:'/friends/'+friend._id}).then(function(returned_data){
      console.log(returned_data)
    })
  }

  factory.show=function(id,callback){
    console.log('inside show factory method')
    $http.get('/friends/'+id).then(function(returned_data ){
      console.log('Show returned data is' , returned_data.data)
      callback(returned_data.data)
    })
  }

  factory.update=function(id,friend){
    console.log('FACTORY UPDATE METHOD RUNNING',friend);
    console.log('ID IN FACTORY UPDATE METHOD IS', id)
    var data=friend
    $http({method:'PUT', url:'/friends/'+id,data:data}).then(function(returned_data){
        console.log(returned_data)
    })
  }

  console.log('factory friends are')
  console.log(friends)

  return factory
}])