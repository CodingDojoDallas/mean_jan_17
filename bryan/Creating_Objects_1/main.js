function VehicleConstructor (name, wheels, passengers) {
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  
  this.makeNoise = function() {
    console.log("BeepBeep!");
    return this;
  };

}

var bike = new VehicleConstructor("Bike",2,1);
bike.makeNoise();
bike.makeNoise = function() {
  console.log("ring ring!");
};
bike.makeNoise();

var sedan = new VehicleConstructor("Sedan",4,5);
sedan.makeNoise = function() {
  console.log("Honk Honk!");
};
sedan.makeNoise();

var bus = new VehicleConstructor("Bus",4,48);
bus.addPassengers = function(people) {
  this.passengers += people;
  console.log("We now have " + this.passengers + " on this bus.");
  return this;
};
bus.addPassengers(10);

