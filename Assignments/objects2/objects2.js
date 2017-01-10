function VehicleConstructor(name, wheels, passengers, speed){
	var distance_travelled = 0
	var updateDistanceTravelled = function(){
		distance_travelled += speed
	}
	this.name = name
	this.wheels = wheels
	this.passengers = passengers
	this.speed = speed

	this.makeNoise = function(){console.log('bing boing')}
	this.move = function(){
		updateDistanceTravelled()
		this.makeNoise()
	}
	this.checkMiles = function(){console.log(distance_travelled)}
}

var Bike = new VehicleConstructor('Dusty', 2, 1, 20)
Bike.makeNoise = function(){console.log('Ring a ding, ding')}

Bike.makeNoise()

var Sedan = new VehicleConstructor('Delorean', 4, 5, 88)
Sedan.makeNoise = function(){console.log('Honky Tonk')}

Sedan.makeNoise()

var Bus = new VehicleConstructor('Magic Bus', 4, 20, 65)

Bus.passenger_count = 0
Bus.pickUpPassengers = function(){Bus.passenger_count += 1; return this}

Bus.pickUpPassengers().pickUpPassengers()
console.log(Bus.passenger_count)

Bike.move()
Bike.move()
Bike.checkMiles()