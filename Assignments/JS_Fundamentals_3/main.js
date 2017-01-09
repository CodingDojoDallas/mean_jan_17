var person = {
	name : "Colby",
	distance_travelled : 0,
	say_name : function(){ 
		console.log(person.name + ' says \'My name is ' + person.name + "'")
		return person
	},
	say_something : function(input){console.log(person.name + " says '" + input + "'"); return person},
	walk : function(){
		person.distance_travelled += 3
		console.log(person.name + " is walking, like a boss")
		return person
	},
	run : function(){
		person.distance_travelled += 10
		console.log(person.name + ' is running, he run so far away.')
		return person
	},
	crawl : function(){
		person.distance_travelled += 1
		console.log(person.name + ' is crawling like a baby gecko')
	}
}

function ninjaConstructor(name, cohort){
	var ninja = {}
	var belts = ['Yellow Belt', 'Red Belt', 'Black Belt', 'Double-Black Belt', 'Triple-Black Belt']
	ninja.name = name
	ninja.cohort = cohort
	ninja.level = 0
	ninja.levelUp = function(){
		if(ninja.belt < 4){
			ninja.belt += 1
		}
		return ninja
	}
	ninja.belt = belts[ninja.level]
	return ninja
}

ninjaConstructor('Colby', 'April 26th, 1992')


