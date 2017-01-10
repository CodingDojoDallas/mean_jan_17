function VehicleConstructor(name, num_wheels, num_passengers, speed)
{
  this.vin = ""
  this.distance_travelled = 0;
  this.name = name;
  this.num_wheels = num_wheels;
  this.num_passenegers = num_passengers;
  this.speed = speed
}

VehicleConstructor.prototype.updateDistanceTravelled = function() { this.distance_travelled += this.speed }
VehicleConstructor.prototype.make_noise = function() { console.log ("******* Noise **********"); }
VehicleConstructor.prototype.displayPassengerCount = function() { console.log(this.num_passenegers); }
VehicleConstructor.prototype.move = function() { this.updateDistanceTravelled();
                                                 this.make_noise();}
VehicleConstructor.prototype.checkMiles = function() { console.log(this.distance_travelled);}
VehicleConstructor.prototype.setVin = function() { this.vin = Math.floor(Math.random()*10000000000000000).toString()}
VehicleConstructor.prototype.displayVin = function() { console.log(this.vin); }


var Bike = new VehicleConstructor("trek", 2, 1, 25);

Bike.make_noise = function() { console.log ("ring, ring"); }
Bike.setVin();
Bike.displayVin();
Bike.move()
Bike.move()
Bike.move()
Bike.move()
Bike.move()
Bike.checkMiles();

var Sedan = new VehicleConstructor("bmw", 4, 4, 100);

Sedan.make_noise = function() { console.log ("honk, honk!"); }
Sedan.make_noise();
Sedan.move()
Sedan.move()
Sedan.checkMiles();


var Bus = new VehicleConstructor("greyhound", 4, 50, 75);

console.log("*** bus time ****")
Bus.pick_up = function(num_passengers) { this.num_passenegers += num_passengers; }
Bus.pick_up(26)
Bus.displayPassengerCount();
