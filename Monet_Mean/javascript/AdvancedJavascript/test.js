// // Callback Ex: 1

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';

// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );

// console.log("Printing ninja value.");
// console.log(ninja, "NOW");




// //Callback Ex: 2
// var a = 2;
// var b = function() { console.log("something"); };

// function doSomething(x) {
//   console.log(typeof(x));
// }

// doSomething(a);
// doSomething(b);

// Callback Ex: 3

function doSomething(possibleCallback) {
  if (typeof(possibleCallback) === 'function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}
doSomething(function myCallback(){ console.log('yes, I am a callback!') });
doSomething('string');