function twoNumbers (num1,num2) {
	var sum = 0;
	var min = num1;
	for (var i = num1; i <= num2; i++) {
		sum += i;
	}
	console.log("Sum of numbers is: " + sum);
}

function minOfArray (theArray) {
	var min = theArray[0];
	for (var i = 1; i < theArray.length; i++) {
		if (min > theArray[i]) {
			min = theArray[i];
		}
	}
	return min;
}


function avgOfArray (theArray) {
	var sum = theArray[0];
	for (var i = 1; i < theArray.length; i++) {
		sum += theArray[i];
	}
	return sum/theArray.length;
}

// Anonymous Functions

var funcTwoNum = function twoNumbers (num1,num2) {
	var sum = 0;
	var min = num1;
	for (var i = num1; i <= num2; i++) {
		sum += i;
	}
	console.log("Sum of numbers is: " + sum);
}

var funcMinArray = function minOfArray (theArray) {
	var min = theArray[0];
	for (var i = 1; i < theArray.length; i++) {
		if (min > theArray[i]) {
			min = theArray[i];
		}
	}
	return min;
}


var funcAvgArray = function avgOfArray (theArray) {
	var sum = theArray[0];
	for (var i = 1; i < theArray.length; i++) {
		sum += theArray[i];
	}
	return sum/theArray.length;
}
// Methods

var myMath = {
	theTwoNumbers: function (num1,num2) {
		var sum = 0;
		var min = num1;
		for (var i = num1; i <= num2; i++) {
			sum += i;
		}
		console.log("Sum of numbers is: " + sum);
	},
	theMinArr: function (theArray) {
		var min = theArray[0];
		for (var i = 1; i < theArray.length; i++) {
			if (min > theArray[i]) {
				min = theArray[i];
			}
		}
		return min;
	},
	theAvgArr: function (theArray) {
		var sum = theArray[0];
		for (var i = 1; i < theArray.length; i++) {
			sum += theArray[i];
		}
		return sum/theArray.length;
	}
}

// Person

var person = {
	name: "Monet",
	distance_traveled: 0,
	say_name: function(){console.log(this.name)},
	say_something: function(parameter){console.log(person.name+" says "+ parameter);},
	walk: function(){console.log(person.name+" is walking"); this.distance_traveled+=3;},
	run: function(){console.log(person.name+" is running"); this.distance_traveled+=10;},
	crawl: function(){console.log(person.name+" is crawling"); this.distance_traveled+=1;}
}



//Test area
var testArray = [1,2,3,-2,0,5,10];

twoNumbers(2,4);
console.log(minOfArray(testArray));
console.log(avgOfArray(testArray));

//Test Anonymous Functions
var testArrayAnon = [1,-1,0,5,10];

funcTwoNum(5,7);
console.log(funcMinArray(testArrayAnon));
console.log(funcAvgArray(testArrayAnon));

//Test Methods

myMath.theTwoNumbers(0,2);
console.log(myMath.theMinArr(testArrayAnon));
console.log(myMath.theAvgArr(testArrayAnon));

//Test person
console.log("Testing the person Method....")
console.log(person.name);
console.log("Their distances is " +person.distance_traveled);
person.say_name();
person.say_something("Howdy");
person.walk();
console.log(person.distance_traveled);
person.run();
console.log(person.distance_traveled);
person.crawl();
console.log(person.distance_traveled);