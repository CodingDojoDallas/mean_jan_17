var my_module = require('./mathlib.js')();     //notice the extra invocation parentheses!
console.log(my_module);
my_module.add(2,3);
my_module.multiply(3,5);
my_module.square(5,6);
my_module.random(1,35);