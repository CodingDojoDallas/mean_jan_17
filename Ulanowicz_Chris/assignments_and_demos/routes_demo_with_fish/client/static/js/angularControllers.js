
routeApp.controller('fishController', ['fishFactory', function(fishFactory){
	// console.log("controller loaded up");
	var self = this;
	// console.log(this)
	this.fishies = [];
	fishFactory.index(function(data){
		// console.log(this);
		self.fishies = data;
		var otherfish = {name:"whale", type:"I'm not actually a fish"};
		self.fishies.push(otherfish);
	});

	this.createFish = function(){
		console.log("in create fish controller")
		console.log(this.newFish);
		
		fishFactory.create(this.newFish,allFish);
		
	}
}])

routeApp.controller('elseController', ['fishFactory', function(fishFactory){
	var self = this;
	// this.otherfish = [];
	this.thing = "testing this out";
	console.log("loaded else controller");
	this.elseFish = [];
	fishFactory.index(function(data){
		self.elseFish = data;
	})
}])
