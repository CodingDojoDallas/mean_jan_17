function VehicleConstructor(name, wheels, passengers, speed) {
  var self = this;
  this.distance_travelled = 0;
  this.updateDistanceTravelled = function() {
    self.distance_travelled += speed;
  };
  this.vin = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(var i=0; i < 16; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
}

VehicleConstructor.prototype.showVIN = function() {
  console.log(this.vin());
  return this;
};

VehicleConstructor.prototype.move = function() {
  this.updateDistanceTravelled();
  this.makeNoise();
  return this;
};

VehicleConstructor.prototype.makeNoise = function() {
  console.log("Honk Honk!");
  return this;
};

VehicleConstructor.prototype.checkMiles = function() {
  console.log(this.distance_travelled);
  return this;
};

var bus = new VehicleConstructor("Bus",4,48,45);
bus.makeNoise().move().checkMiles().showVIN();


