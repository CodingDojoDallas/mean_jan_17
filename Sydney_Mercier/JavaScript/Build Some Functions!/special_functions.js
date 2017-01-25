function runningLogger(){
	console.log('I am running!');
}

function multiplyByTen(arg){
	arg = arg * 10;
	return arg;
}

multiplyByTen(5);

function stringReturnOne(){
	return "Build some functions!";
}

function stringReturnTwo(){
	return "This is good practice.";
}


function caller(called){
	if (typeof(called) == "function"){
		called();
	}
}

caller(multiplyByTen(7));

function myDoubleConsoleLog(func1, func2){
	if (typeof(func1) == "function" && typeof(func2) == "function"){
		console.log(func1());
		console.log(func2());
	}
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(func){
	console.log("starting");
	var x = setTimeout(function(){ if (typeof(func)=="function") { func(); }}, 2000);
	console.log("ending?");
	return "interesting";
}

caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo));