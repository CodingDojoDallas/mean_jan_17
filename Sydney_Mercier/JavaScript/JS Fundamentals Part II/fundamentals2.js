// functions with variable inputs
function sums(x, y){
	var sum = 0;
	for (var i=x; i<=y; i++){
		sum += i;
	}
	console.log(sum);
}

function minimum(arr){
	var min = arr[0];
	for (var i=1; i<arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

function average(arr){
	var sum = 0;
	for (var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum/arr.length;
}


// anonymous functions assigned to variables
var x = function(a, b) {
	var sum = 0;
	for (var i=a; i<=b; i++){
		sum += i;
	}
	console.log(sum);
};

var y = function(arr) {
	var min = arr[0];
	for (var i=1; i<arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
};

var z = function(arr) {
	var sum = 0;
	for (var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum/arr.length;
};


// methods of an object
var object = {};
object = {
	sum: function(a, b) {
		var sum = 0;
		for (var i=a; i<=b; i++){
			sum += i;
		}
		console.log(sum);
	},
	minimum: function(arr) {
		var min = arr[0];
		for (var i=1; i<arr.length; i++){
			if (arr[i] < min){
				min = arr[i];
			}
		}
		return min;
	},
	average: function(arr) {
		var sum = 0;
		for (var i=0; i<arr.length; i++){
			sum += arr[i];
		}
		return sum/arr.length;
	}
}


// person object
var person = {};
person = {
	name: "Sydney",
	distance_traveled: 0,
	say_name: function(){ 
		console.log(this.name); 
	},
	say_something: function(para){ 
		console.log(this.name + " says '" + para + "'"); 
	},
	walk: function(){ 
		this.distance_traveled += 3; 
		console.log(this.name + " is walking " + this.distance_traveled); 
	},
	run: function(){ 
		this.distance_traveled += 10; 
		console.log(this.name + " is running " + this.distance_traveled); },
	crawl: function(){ 
		this.distance_traveled += 10; 
		console.log(this.name + " is crawling " + this.distance_traveled); }
}

person.walk();
person.run();
person.crawl();



