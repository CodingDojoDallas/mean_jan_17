var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];

for (var i = 0; i < x.length; i++) {
	console.log(x[i]);
}

x.push(100);

x.push(["hello", "world", "JavaScript is fun"])
console.log(x);

console.log("--------------------")

var sum = 0;
for (var number = 1; number < 501; number++) {
	sum = sum + number;
}
console.log(sum);

console.log("--------------------")

var arr = [1, 5, 90, 25, -3, 0];

var min = arr[0];
for (var j = 1; j < arr.length; j++) {
	if (min > arr[j]) {
		min = arr[j];
	}
}
console.log(min);

console.log("--------------------")

var arr = [1, 5, 90, 25, -3, 0];

var sum = arr[0];
for (var j = 1; j < arr.length; j++) {
	sum += arr[j];
}
var avg = sum / arr.length;
console.log(avg);

console.log("--------------------")

var new_ninja = {
	name: 'Dax',
	profession: 'coder',
	favorite_language: 'JavaScript',
	dojo: 'Dallas'
}

for (var attribute in new_ninja) {
	console.log(attribute + ": " + new_ninja[attribute]);
}