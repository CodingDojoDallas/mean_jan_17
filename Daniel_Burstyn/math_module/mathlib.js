module.exports = function (){
  return {
   	add: function(num1, num2){
   		console.log("the sum is:", num1 + num2);
    },

    multiply: function(num1, num2) {
    	console.log("the product is:", num1 * num2); // add code here 
    },
    square: function(num) {
      console.log("the square is:", num * num);   // add code here 
    },
    random: function(num1, num2) {
      console.log("the random number is:", Math.floor((Math.random() * num2) + num1));   // add code here
    }
  }
};