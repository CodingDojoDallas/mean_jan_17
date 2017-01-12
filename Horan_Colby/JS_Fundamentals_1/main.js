x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0;i < x.length - 1;i++){
	console.log(x[i])
}
x.push(100)
x.push(["hello", "world", "Javascript is Fun"])

sum = 0
for (var count = 1;count <= 500;count ++){
	sum += count
}
console.log(sum)

arr = [1, 5, 90, 25, -3, 0]

min = arr[0]
for (i = 0;i < arr.length - 1;i++){
	if (arr[i] < min){
		min = arr[i]
	}
}
console.log(min)

max = arr[0]
for (i = 0;i < arr.length - 1;i++){
	if (arr[i] > max){
		max = arr[i]
	}
}
console.log(max)

newNinja = {
	name: 'Tyrion Lannister',
	profession: 'halfman/coder',
	favorite_language: 'JavaScript',
	dojo: 'King\'s Landing'
}

for (var value in newNinja){
	console.log(newNinja[value])
}

var x
var sum
var arr
var min
var max
var newNinja