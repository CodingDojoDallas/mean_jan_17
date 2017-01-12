// Problem 1

// This will be undefined because it is called before it is assigned
console.log(first_variable);

var first_variable 
first_variable = "Yipee I was first!";
//this function is never called so it will not run
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
//this is the only console that will print as ---> "Yipee I was first!"
console.log(first_variable);



// Problem 2

// food is declared and assigned "Chicken"
var food;
food = "Chicken";

//When function is called below 2 console.log(prints) within here happen
function eat() {
	//food is changed to "half-chicken" within the function and prints
  food = "half-chicken";
  console.log(food);
  // food changed to gone within the function and prints
  var food = "gone";
  console.log(food);
}
eat();
//prints as "Chicken"
console.log(food);

//Problem 3

//Only "New!" will print...

var new_word;
new_word = "NEW!";

//function never called
function lastFunc() {
  new_word = "old";
}
console.log(new_word);