function runningLogger(){
	console.log('I am running, like Forest Gump')
}

function multiplyByTen(input){
	if(typeof(input) == 'number'){
		return input*10
	}
}
multiplyByTen(5)


function stringReturnOne(){
	return 'I drink and I know things'
}

function stringReturnTwo(){
	return 'Let me give you some advice, bastard. Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.'
}

function caller(input){
	if(typeof(input) == 'function'){
		input()
	}
}

function myDoubleConsoleLog(first, second){
	if(typeof(first) == 'function'){
		console.log(first())
	}

	if(typeof(second) == 'function'){
		console.log(second())
	}
}


function caller2(param){
	console.log('Starting')
	setTimeout(function(){
		if(typeof(param) == 'function'){
			param(stringReturnOne, stringReturnTwo)
		}
	}, 2000)
	console.log('Ending?')
	return "Interesting"
}

caller2(myDoubleConsoleLog)