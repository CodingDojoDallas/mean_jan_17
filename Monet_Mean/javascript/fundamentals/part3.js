function personCreator(name){
	var person = {
		name: name,
		distance_traveled: 0,
		say_name: function(){console.log(this.name)},
		say_something: function(parameter){console.log(person.name+" says "+ parameter);},
		walk: function(){console.log(person.name+" is walking"); this.distance_traveled+=3;},
		run: function(){console.log(person.name+" is running"); this.distance_traveled+=10;},
		crawl: function(){console.log(person.name+" is crawling"); this.distance_traveled+=1;}
	}
	return person;
}

function ninjaConstructor(name, cohort){
	var ninja = {
		name: name,
		cohort: cohort,
		belt_level: "yellow-belt",
		levelUp: function(){
			if (this.belt_level==="yellow-belt") {
				this.belt_level="red-belt";
			} 
			else{
				this.belt_level="black-belt";
			}
		}
	}
	return ninja;
}

//Test person
console.log("Testing the person Method....")
var person1 = personCreator("Jay");
console.log(person1.name);
console.log("Their distances is " +person1.distance_traveled);
person1.say_name();
person1.say_something("Howdy");
person1.walk();
console.log(person1.distance_traveled);
person1.run();
console.log(person1.distance_traveled);
person1.crawl();
console.log(person1.distance_traveled);


//Test ninja

var ninja1 = ninjaConstructor("Midnight","Black Hawk");
console.log(ninja1.name);
console.log(ninja1.cohort);
console.log(ninja1.belt_level);
ninja1.levelUp();
console.log(ninja1.belt_level);
ninja1.levelUp();
console.log(ninja1.belt_level);

