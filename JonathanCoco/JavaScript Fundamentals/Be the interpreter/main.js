console.log("problem #1 ******************")


var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

console.log(first_variable);
var first_variable = "Yipee I was first!";
console.log(first_variable);


console.log("problem #2 *******************")
var food = "Chicken";
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

console.log("problem #3 *****************")

var new_word;
function lastFunc() {
  new_word = "old";
}

new_word = "NEW!"
console.log(new_word);
