function personConstructor(name){
	var person = {};
	person = {
		name: name,
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
	return person;
}

function ninjaConstructor(name){
	var ninja = {};
	ninja = {
		name: name,
		cohort: "Coding Dojo",
		belt_level: "yellow-belt",
		level_up: function(){
			if (ninja.belt_level == "yellow-belt"){
				ninja.belt_level = "red-belt";
			} else {
				ninja.belt_level = "black-belt";
			}
		}
	}
	return ninja;
}

var x = ninjaConstructor("Mugen");
var y = ninjaConstructor("Jin");
x.level_up();
y.level_up();
y.level_up();
console.log(x.name, x.belt_level)
console.log(y.name, y.belt_level)