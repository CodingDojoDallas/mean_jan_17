function VehicleConstructor(name, num_wheels, num_passengers, speed)
{
  var distance_travelled = 0;

  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passenegers = num_passengers;
  this.speed = speed

  this.make_noise = function() { console.log ("******* Noise **********"); }
  this.displayPassengerCount = function() { console.log(this.num_passenegers); }
  this.move = function() { updateDistanceTravelled();
                           this.make_noise();}

  this.checkMiles = function() { console.log(distance_travelled);}

  var updateDistanceTravelled = function() { distance_travelled += speed }
}

var Bike = new VehicleConstructor("trek", 2, 1, 25);

Bike.make_noise = function() { console.log ("ring, ring"); }
Bike.move()
Bike.move()
Bike.move()
Bike.move()
Bike.move()
Bike.checkMiles();

var Sedan = new VehicleConstructor("bmw", 4, 4, 100);

Sedan.make_noise = function() { console.log ("honk, honk!"); }
Sedan.make_noise();

var Bus = new VehicleConstructor("greyhound", 4, 50, 75);

console.log("*** bus time ****")
Bus.pick_up = function(num_passengers) { this.num_passenegers += num_passengers; }
Bus.pick_up(26)
Bus.displayPassengerCount();
