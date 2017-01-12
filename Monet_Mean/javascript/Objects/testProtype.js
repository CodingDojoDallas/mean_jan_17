function Car(name){
	this.name=name;
	this.distance=0;
}

var mustang = new Car("Mustang");

console.log(mustang.name);

Car.prototype.run = function(){
	console.log("Running!");
	return this;
}

var dodge = new Car("Dodge");
console.log(dodge.name);

dodge.run();
mustang.run();



