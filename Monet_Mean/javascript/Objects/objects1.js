function VehicleConstructor(name, num_wheels, num_passengers){
	this.name= name;
	this.num_wheels=num_wheels;
	this.num_passengers=num_passengers;
	this.makeNoise= function(){
		console.log("Make Noise!");
	}
	return this;
}

// Test Object1

var Bike = VehicleConstructor("bike", 2, 1);
Bike.makeNoise = function(){
		console.log("ring ring!");
	}
console.log(Bike.makeNoise());

var Sedan =VehicleConstructor("sedan", 4, 4);

Sedan.makeNoise = function(){
		console.log("Honk Honk!");
	}

console.log(Sedan.makeNoise());

var Bus = VehicleConstructor("bus", 4, 40);
Bus.pickup = function(passengers){
	Bus.num_passengers+= passengers;
}
console.log(Bus.num_passengers);
Bus.pickup(2);

console.log(Bus.num_passengers);

