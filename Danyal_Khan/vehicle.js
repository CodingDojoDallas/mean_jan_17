function VehicleConstructor(name, type) {
	var vehicle = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  vehicle.name = name;
  vehicle.type = type;

  vehicle.makeNoise = function() {
    console.log("VROOOOOOOOM!!!");
  }

  return vehicle;
}

var Bike = VehicleConstructor("Mongoose", "bike");
Bike.makeNoise()


Bike.makeNoise = function () {
	console.log("ring ring");
}
Bike.makeNoise()


var Sedan = VehicleConstructor("Lexus", "sedan");
Sedan.makeNoise = function () {
	console.log("Honk Honk!");
}
Sedan.makeNoise()


var Bus = VehicleConstructor("Lexus", "sedan");
Bus.passengers = 0;
Bus.pickup = function(passengers) {
	Bus.passengers += passengers
	return Bus
}
Bus.pickup(5);
console.log(Bus)