module.exports = function(){
  return {
    add: function(num1, num2){
      console.log('These numbers added together are:', num1 + num2)
    },
    multiply: function(num1, num2){
      console.log('These numbers multiplied are', num1 * num2)
    },
    square: function(num){
      console.log("The square of", num, "is", num * num)
    },
    random: function(num1, num2){
      if(num1 > num2){
        console.log('First number must smaller than second number.')
      }else{
        console.log('Your random number is:', Math.floor(Math.random() * num2) + num1)
      }
    }
  }
}