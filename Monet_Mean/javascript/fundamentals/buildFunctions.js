function runningLogger(){
	console.log("I am running!");
}

function multTen(number){
	number *= 10;
	return number;
}

function stringReturnOne() {
	return "This is my first string";
}
function stringReturnTwo() {
	return "This is my second string";
}

function caller(argument) {
	console.log("This is a " + typeof argument);
	if (typeof argument == "function") {
		console.log("It is called and runs the function giving... " + argument());
	}
	else{
		console.log("...it was not a function.")
	}
}

function myDoubleConsoleLog (argument1, argument2) {
	typeof argument1 === "function" ? console.log(argument1()): false;
	typeof argument2 === "function" ? console.log(argument2()): false;
}

function caller2 (argument) {
	console.log("starting");
	setTimeout(function(){if (typeof argument == "function") { argument()}}, 2000);
	console.log("ending?");
	return "interesting";
}



//Testing area
var test = "Hello"
// runningLogger();

// console.log(multTen(5));

// console.log(stringReturnOne());
// console.log(stringReturnTwo());

// caller(stringReturnTwo);
// caller(test);

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
// myDoubleConsoleLog(test, stringReturnTwo);
// myDoubleConsoleLog(stringReturnOne, test);

result = caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));
console.log(result);