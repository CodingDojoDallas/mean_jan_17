function VehicleConstructor(name, num_wheels, num_passengers, speed){

	var self = this;
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	}

	this.name=name;
	this.num_wheels=num_wheels;
	this.num_passengers=num_passengers;
	this.speed=speed;
	this.makeNoise= function(){
		console.log("Make Noise!");
	}
	this.move= function(hr){
		updateDistanceTravelled();
		self.makeNoise();
	}
	this.checkMiles= function(){
		console.log(distance_travelled);
	}
}




// Test Object1

var Bike = new VehicleConstructor("bike", 2, 1, 5);
Bike.makeNoise = function(){
		console.log("ring ring!");
	}
console.log(Bike.makeNoise());

var Sedan = new VehicleConstructor("sedan", 4, 4, 70);

Sedan.makeNoise = function(){
		console.log("Honk Honk!");
	}

console.log(Sedan.makeNoise());

var Bus = new VehicleConstructor("bus", 4, 40, 40);
Bus.pickup = function(passengers){
	Bus.num_passengers+= passengers;
}
console.log(Bus.num_passengers);
Bus.pickup(2);

console.log(Bus.num_passengers);
console.log(Bus.speed);
console.log("********");
Sedan.move();
console.log(Sedan.checkMiles());

