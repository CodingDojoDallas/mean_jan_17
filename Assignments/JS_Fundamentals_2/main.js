

sumRange = function(x, y){
	sum = 0
	if(x > y){
		console.log('First input must be less than second input')
	}
	else{
			for (var i = x;i <= y;i ++){
				sum += i
			}
		console.log(sum)
	}
}

findMin = function(){
	arr = [1, 5, 90, 25, -3, 0]
	min = arr[0]
	for (i = 0;i < arr.length - 1;i++){
		if (arr[i] < min){
			min = arr[i]
		}
	}
	console.log(min)
}

findMax = function(){
	arr = [1, 5, 90, 25, -3, 0]
	max = arr[0]
	for (i = 0;i < arr.length - 1;i++){
		if (arr[i] > max){
			max = arr[i]
		}
	}
	console.log(max)
}

sumRange(4, 10)

math = {
	sumRange : function(x, y){
		sum = 0
		if(x > y){
			console.log('First input must be less than second input')
		}
		else{
				for (var i = x;i <= y;i ++){
					sum += i
				}
			console.log(sum)
		}
	},
	findMax : function(){
		arr = [1, 5, 90, 25, -3, 0]
		max = arr[0]
		for (i = 0;i < arr.length - 1;i++){
			if (arr[i] > max){
				max = arr[i]
			}
		}
		console.log(max)
	},
	findMin : function(){
		arr = [1, 5, 90, 25, -3, 0]
		min = arr[0]
		for (i = 0;i < arr.length - 1;i++){
			if (arr[i] < min){
				min = arr[i]
			}
		}
		console.log(min)
	}
}

math.sumRange(4, 100)

person = {
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
person.say_name()
person.say_something('Hey boo boo')
person.walk().run().crawl()

var x
var y
var sum
var arr
var min
var max
var sumRange
var findMin
var findMax
var math
var person