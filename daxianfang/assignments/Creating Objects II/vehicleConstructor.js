function VehicleConstructor(name, numOfWheels, numOfPassengers, speed) {
	var distance_travelled = 0;
	var updateDistanceTravelled = function(speed) {
		distance_travelled += speed;
	}

	this.name = name;
	this.numOfWheels = numOfWheels;
	this.numOfPassengers = numOfPassengers;
	this.speed = speed;

	this.makeNoise = function() {
		console.log("Some Noise.")
	}
	this.move = function() {
		updateDistanceTravelled(this.speed);
		this.makeNoise();
	}
	this.checkMiles = function() {
		console.log(distance_travelled);
	}
}

var bike = new VehicleConstructor("Bike", 2, 2);
bike.makeNoise = function() {
	console.log("Ring Ring!")
}

var sedan = new VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise = function() {
	console.log("Honk Honk!")
}

var bus = new VehicleConstructor("Bus", 4, 20);
bus.pickUp = function(numToPickUp) {
	this.numOfPassengers += numToPickUp;
	console.log(this.numOfPassengers);
}