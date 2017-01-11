function personConstructor(name) {
	this.name = name;
	this.distance_traveled = 0;
	this.say_name = function() {
		console.log("The name is " + this.name);
	};
	this.say_something = function(str) {
		console.log(this.name + " says " + str);
	};
	this.walk = function() {
		console.log(this.name + " is walking.");
		this.distance_traveled += 3;
	};
	this.run = function() {
		console.log(this.name + " is running.");
		this.distance_traveled += 10;
	};
	this.crawl = function() {
		console.log(this.name + " is crawling.");
		this.distance_traveled += 1;
	};
}