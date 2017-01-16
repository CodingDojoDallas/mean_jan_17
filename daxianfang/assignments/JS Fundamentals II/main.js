// Functions //

function sumValues(x, y) {
	var sum = 0;
	for (var number = x; number < y + 1; number++) {
		sum = sum + number;
	}
	console.log(sum);
}

function minValue(arr) {
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	return min;
}

function avgValue(arr) {
	var sum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		sum += arr[i];
	}
	var avg = sum / arr.length;
	return avg;
}

// Rewrite as anonymous functions //

var sumValues = function(x, y) {
	var sum = 0;
	for (var number = x; number < y + 1; number++) {
		sum = sum + number;
	}
	console.log(sum);
}

var minValue = function(arr) {
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	return min;
}

var avgValue = function(arr) {
	var sum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		sum += arr[i];
	}
	var avg = sum / arr.length;
	return avg;
}

// Methods of an object //

var object = {
	sum: function(x, y) {
		var sum = 0;
		for (var number = x; number < y + 1; number++) {
			sum = sum + number;
		}
		console.log(sum);
	},
	min: function(arr) {
		var min = arr[0];
		for (var i = 1; i < arr.length; i++) {
			if (min > arr[i]) {
				min = arr[i];
			}
		}
		return min;
	},
	avg: function(arr) {
		var sum = arr[0];
		for (var i = 1; i < arr.length; i++) {
			sum += arr[i];
		}
		var avg = sum / arr.length;
		return avg;
	}
}

// Person object //

var person = {
	name: "Dax",
	distance_traveled: 0,
	say_name: function() {
		console.log("The name is " + this.name);
	},
	say_something: function(str) {
		console.log(this.name + " says " + str);
	},
	walk: function() {
		console.log(this.name + " is walking.");
		this.distance_traveled += 3;
	},
	run: function() {
		console.log(this.name + " is running.");
		this.distance_traveled += 10;
	},
	crawl: function() {
		console.log(this.name + " is crawling.");
		this.distance_traveled += 1;
	},
}