
function sum_between(x,y) {
	var sum = 0;
	for (var i = x; i < y+1; i++) {
	sum += i;
	}
console.log(sum);
}


function find_min(arr) {
	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	console.log(min)
}


function find_avg(arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	console.log(total/arr.length)
}
sum_between(500,900)
find_min([2,5,100,-2,6])
find_avg([2,5,100,-2,6])



function person(name, distance_traveled) {
	var newPerson = {
		name:name,
		distance_traveled:distance_traveled,
		say_name: function() {
			console.log(name)
		},
		say_something: function(something) {
			console.log(name+" says: "+something)
		},
		walk: function() {
			console.log(name+" is walking");
			distance_traveled+=3;
			console.log(distance_traveled);
		},
		run: function() {
			console.log(name+" is running");
			distance_traveled+=10;
			console.log(distance_traveled);
		},
		crawl: function() {
			console.log(name+" is crawling");
			distance_traveled+=1;
			console.log(distance_traveled);
		}
	}
	return newPerson;
}

var dan = person("Danyal", 5);
console.log(dan);
dan.say_name();
dan.say_something("I am awesome");
dan.walk("I am awesome");
dan.run("I am awesome");
dan.crawl("I am awesome");


