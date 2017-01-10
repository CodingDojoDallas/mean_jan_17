var _ = {
   map: function(arr, callback) {
     var returnArray = []
     for (var i=0; i<arr.length; i++)
     {
       returnArray.push(callback(arr[i]));
     }

     return returnArray;
   },

   reduce: function(arr, callback) {
     var sum = 0
     for (var i=0; i<arr.length; i++)
     {
       sum = callback(sum, arr[i]);
     }

     return sum;
   },

   find: function(arr, callback) {
     var returnArray = []
     for (var i=0; i<arr.length; i++)
     {
       if (callback(arr[i]))
       {
         return arr[i];
       }
     }
   },

   filter: function(arr, callback) {

     var returnArray = []
     for (var i=0; i<arr.length; i++)
     {
       if (callback(arr[i]))
       {
         returnArray.push(arr[i])
       }
     }
     return returnArray;

   },

   reject: function(arr, callback) {

     var returnArray = [];

     for (var i=0; i<arr.length; i++)
     {
       if (!callback(arr[i]))
       {
         returnArray.push(arr[i]);
       }
     }

     return returnArray;
   }
 }

console.log("** filter test **");
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

console.log("** find test **");
var first_even = _.find([1, 3, 5, 6], function(num){ return num % 2 == 0; });
console.log(first_even); // if things are working right, this will return [2,4,6].

console.log("** map test **");
var map_test = _.map([1, 3, 5, 6], function(num){ return num * 10; });
console.log(map_test); // if things are working right, this will return [2,4,6].


console.log("** rejects test **");
var not_even = _.reject([1, 3, 5, 6], function(num){ return num % 2 == 0; });
console.log(not_even); // if things are working right, this will return [2,4,6].


console.log("** reduce test **");
var reduce = _.reduce([1, 3, 5, 6], function(sum, num){ return sum+num; });
console.log(reduce); // if things are working right, this will return [2,4,6].
