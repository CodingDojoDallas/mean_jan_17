app.factory('usersFactory', function(){
  var users = []
  var factory = {}
  factory.showUsers = function(callback){
    callback(users)
  }
  factory.createUser = function(data, callback){
    users.push(data)
    callback(users)
  }
  factory.destroy = function(index, callback){
    users.splice(index, 1)
    callback(users)
  }
  return factory
}) 