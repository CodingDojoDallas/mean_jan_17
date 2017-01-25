routeApp.factory('fishFactory', [function(){
	// console.log("factory loaded up")
	var fish = [
		{name:"Angelfish", type:"freshwater"},
		{name:"Piranha", type:"freshwater"}
	]
	var factory = {};
	factory.index = function(callback){
		// console.log("in factory index");
		console.log('index before' + fish)
		callback(angular.copy(fish));
		console.log('index after' + fish)
	}
	factory.create = function(data, callback){
		// console.log(data);
		fish.push(data);
		callback();
	}
	return factory;
}])