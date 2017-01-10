function VehicleConstructor(name, num_wheels, num_passengers)
{
  var vehicle = {};

  vehicle.name = name;
  vehicle.num_wheels = num_wheels;
  vehicle.num_passenegers = num_passengers;

  vehicle.make_noise = function() { console.log ("******* Noise **********"); }
  vehicle.displayPassengerCount = function() { console.log(vehicle.num_passenegers); }

  return vehicle;
}

var Bike = VehicleConstructor("trek", 2, 1);

Bike.make_noise = function() { console.log ("ring, ring"); }
Bike.make_noise();

var Sedan = VehicleConstructor("bmw", 4, 4);

Sedan.make_noise = function() { console.log ("honk, honk!"); }
Sedan.make_noise();

var Bus = VehicleConstructor("greyhound", 4, 50);

console.log("*** bus time ****")
Bus.pick_up = function(num_passengers) { Bus.num_passenegers += num_passengers; }
Bus.pick_up(26)
Bus.displayPassengerCount();
