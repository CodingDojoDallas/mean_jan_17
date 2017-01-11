function VehicleConstructor(name, num_wheels, num_passengers, speed){
	var chars = "0123456789ABCDEFGHIJKLMNOQRSTUVWXYZ"

	this.distance_travelled = 0;
	this.name=name;
	this.num_wheels=num_wheels;
	this.num_passengers=num_passengers;
	this.speed=speed;
	this.vin = createVin();

// Creating a Vin

	function createVin(){
		var vin = "";
		for (var i = 0; i < 15; i++) {
			vin += chars[Math.floor(Math.random()*35)];
		}
		return vin;
	}
}


// Prototype functions

VehicleConstructor.prototype.checkMiles= function(){
		console.log(this.distance_travelled);
		return this;
	}
VehicleConstructor.prototype.updateDistanceTravelled = function(){
		this.distance_travelled += this.speed;
		return this;
	}
VehicleConstructor.prototype.move= function(hr){
		this.updateDistanceTravelled();
		this.makeNoise();
		return this;
	}
VehicleConstructor.prototype.makeNoise= function(){
		console.log("Make Noise!");
		return this;
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

console.log("Vin Number Test........");
console.log(Bus.vin);
console.log(Bike.vin);


console.log(Bus.num_passengers);
console.log(Bus.speed);
console.log("********");
Sedan.move();
console.log(Sedan.checkMiles());

console.log(Sedan.vin);

// Testing list

console.log("Asking for multiple things at once....")
console.log(Bus.checkMiles().makeNoise().move().checkMiles().makeNoise());


