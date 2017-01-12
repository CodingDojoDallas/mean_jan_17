function VehicleConstructor(name, num_wheels, speed, num_passengers) {
	var distance_travelled = 0;
	var self = this;

	var updateDistanceTravelled = function() {
		distance_travelled += self.speed;
	}


	this.name = name;
	this.num_wheels = num_wheels;
	this.speed = speed;
	this.num_passengers = num_passengers;

	this.makeNoise = function(noise) {
		var noise = noise || "beep beep!";
		console.log(noise);
	}
	this.move = function() {
		updateDistanceTravelled();
		this.makeNoise();
	}
	this.checkMiles = function() {
		console.log(distance_travelled);
	}


}

var bike = new VehicleConstructor("bike", 2, 25, 1);
bike.makeNoise("ring ring!");

var sedan = new VehicleConstructor("sedan", 4, 65, 8);
bike.makeNoise("Honk Honk!");

var bus = new VehicleConstructor("bus", 4, 50, 10);
bus.addPassengers = function(passengers) {
	bus.num_passengers += passengers;
}

console.log(bus.num_passengers);
bus.checkMiles();
bus.addPassengers(20);
bus.move();
console.log(bus.num_passengers);
bus.checkMiles();



