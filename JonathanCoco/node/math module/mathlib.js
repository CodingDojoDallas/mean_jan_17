module.exports = function (){
  return {
    add: function(num1, num2) {
      console.log(num1 + num2);
         // add code here
    },
    multiply: function(num1, num2) {
         console.log(num1 *  num2);
    },
    square: function(num) {
         console.log(num*num);
    },
    random: function(num1, num2) {
      var min = Math.ceil(num1);
      var max = Math.floor(num2);

      var random = Math.floor(Math.random() * (max - min + 1)) + min
      console.log(random);
    }
  }
};
