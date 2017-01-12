function VehicleConstructor (name, wheels, passengers, speed) {
  var self = this;
  
  var distance_travelled = 0;
  
  var updateDistanceTravelled = function() {
    distance_travelled += speed;
  };
  
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  
  this.move = function() {
    updateDistanceTravelled();
    makeNoise();
    return this;
  };
  
  this.makeNoise = function() {
    console.log("Honk Honk!");
    return this;
  };
  
  this.checkMiles = function() {
    console.log(distance_travelled);
    return this;
  };

}

