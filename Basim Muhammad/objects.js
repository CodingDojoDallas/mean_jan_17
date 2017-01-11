// Create Objects 1 Assignment

// function CarConstructor (){
// 	var car ={};
// 	car.makeNoise=function (){
// 		console.log('Vroom')
// 	}
	
// 	return car
// }

// var bike = CarConstructor()
// bike.makeNoise=function(){
// 	console.log('ring ring')
// }

// bike.makeNoise()

// var sedan = CarConstructor()
// sedan.makeNoise=function(){
// 	console.log('honk honk')
// }

// sedan.makeNoise()

// var bus =CarConstructor()

// bus.passenger_count=0

// bus.PickUp=function(num){
// 	bus.passenger_count+=num
// }

// bus.PickUp(5);

// console.log(bus.passenger_count)

// Create Objects 2 Assignment

// function Vehicle (name,wheels,passengers,speed){
// 	var distance_travelled = 0
// 	var updateDistanceTravelled = function (distance){
// 		distance_travelled+=distance
// 	}
// 	this.speed=speed;
// 	this.name=name;
// 	this.wheels=wheels;
// 	this.passengers=passengers;
// 	this.makeNoise=function(){
// 		console.log('vroom');
// 	};
// 	this.move= updateDistanceTravelled()
// 	this.checkMiles = function (){
// 		console.log(distance_travelled)
// 	}
// }

// var bike= new Vehicle ('bike', 2, 1)

// bike.makeNoise=function () {
// 	console.log('ring ring!')
// }

// bike.makeNoise()

// var sedan = new Vehicle ('sedan',4,5)

// sedan.makeNoise=function(){
// 	console.log('honk honk')
// }

// sedan.makeNoise()

// var bus=new Vehicle ('bus', 8, 24);

// bus.pickUpPassengers=function(num){
// 	bus.passengers+=num;
// 	console.log(bus.passengers);
// }

// bus.pickUpPassengers(11);

// Create Objects 3 Assignment

function Vehicle (name,wheels,passengers,speed){
	this.distance_travelled = 0
	var updateDistanceTravelled = function (distance){
		this.distance_travelled+=distance
	}
	this.speed=speed;
	this.name=name;
	this.wheels=wheels;
	this.passengers=passengers;

	this.move= updateDistanceTravelled();return this
	
}

Vehicle.prototype.makeNoise=function(){
		console.log('vroom');
		return this;
	};

Vehicle.prototype.checkMiles=function (){
		console.log(distance_travelled);
		return this
	}



var bike= new Vehicle ('bike', 2, 1)

bike.makeNoise=function () {
	console.log('ring ring!')
}

bike.makeNoise()

var sedan = new Vehicle ('sedan',4,5)

sedan.makeNoise=function(){
	console.log('honk honk')
}

sedan.makeNoise()

var bus=new Vehicle ('bus', 8, 24);

bus.pickUpPassengers=function(num){
	bus.passengers+=num;
	console.log(bus.passengers);
}

