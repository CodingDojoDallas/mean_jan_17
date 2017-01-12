function Vehicle(name, num_wheels, speed, num_passengers) {
	this.distance_travelled = 0;
	this.name = name;
	this.num_wheels = num_wheels;
	this.speed = speed;
	this.num_passengers = num_passengers;
	this.vin = generateVin();

	function generateVin(){
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var vin = "";
		for (var i=0; i<17; i++){
			vin += chars[Math.floor(Math.random() * 35)];
		}
		return vin;
	}
}

Vehicle.prototype.updateDistanceTravelled = function() {
		this.distance_travelled += this.speed;
}
Vehicle.prototype.makeNoise = function(noise) {
		var noise = noise || "beep beep!";
		console.log(noise);
}
Vehicle.prototype.move = function() {
		this.updateDistanceTravelled();
		this.makeNoise();
}
Vehicle.prototype.checkMiles = function() {
		console.log(this.distance_travelled);
}



var bike = new Vehicle("bike", 2, 25, 1);
bike.makeNoise("ring ring!");
console.log(bike.vin);

var sedan = new Vehicle("sedan", 4, 65, 8);
bike.makeNoise("Honk Honk!");

var bus = new Vehicle("bus", 4, 50, 10);
bus.addPassengers = function(passengers) {
	bus.num_passengers += passengers;
}

console.log(bus.num_passengers);
bus.checkMiles();
bus.addPassengers(20);
bus.move();
console.log(bus.num_passengers);
bus.checkMiles();



