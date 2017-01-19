function VehicleConstructor(name, num_wheels, num_passengers) {
	var vehicle = {};

	vehicle.name = name;
	vehicle.num_wheels = num_wheels;
	vehicle.num_passengers = num_passengers;

	vehicle.makeNoise = function(noise) {
		var noise = noise;
		console.log(noise);
	}
	return vehicle;
}

var bike = VehicleConstructor("bike", 2, 1);
bike.makeNoise("ring ring!");

var sedan = VehicleConstructor("sedan", 4, 8);
bike.makeNoise("Honk Honk!");

var bus = VehicleConstructor("bus", 4, 10);
bus.addPassengers = function(passengers) {
	bus.num_passengers += passengers;
}

console.log(bus.num_passengers);
bus.addPassengers(20);
console.log(bus.num_passengers);



