console.log("**********original problem  #1**********")
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

console.log("****** original problem #2 *******")

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);


console.log("******* original problem #3 **********")
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
