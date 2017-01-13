module.exports = function(){
	return {
		add: function(num1, num2){
			return num1+num2;
		},
		multiply: function(num1, num2){
			return num1*num2;
		},
		square: function(num){
			return num*num;
		},
		random: function(num1, num2){
			var length = (num2-num1)+1;
			var num = num1+(Math.floor(Math.random()*length));
			return num;
		},

	}
}