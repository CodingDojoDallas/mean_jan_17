function VehicleConstructor(name, wheels, passengers){
	var vehicle = {}
	vehicle.name = name
	vehicle.wheels = wheels
	vehicle.passengers = passengers

	vehicle.makeNoise = function(){console.log('bing boing')}
	return vehicle
}

var Bike = VehicleConstructor('Dusty', 2, 1)
Bike.makeNoise = function(){console.log('Ring a ding, ding')}

Bike.makeNoise()

var Sedan = VehicleConstructor('Bertha', 4, 5)
Sedan.makeNoise = function(){console.log('Honky Tonk')}

Sedan.makeNoise()

var Bus = VehicleConstructor('Magic Bus', 4, 20)

Bus.passenger_count = 0
Bus.pickUp = function(){Bus.passenger_count += 1; return this}

Bus.pickUp().pickUp()
console.log(Bus.passenger_count)