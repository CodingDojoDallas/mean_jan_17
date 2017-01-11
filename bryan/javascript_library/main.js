var _ = {
  map: function(arr, func) {
    var newArray = [];
    for (var i=0; i < arr.length; i++) {
      newArray.push( func(arr[i]) );
    }
    return newArray;
  },
  reduce: function(arr, func, memo) { 
    for (var i=0; i < arr.length; i++) {
      if (!memo) {
        memo = arr[0];
      } else {
        memo = func(memo, arr[i]);
      }
    }
    return memo;
  },
  find: function(arr, func) {   
    for (var i=0; i < arr.length; i++) {
      if ( func(arr[i]) ) {
        return arr[i];
      }
    }
  },
  filter: function(arr, func) { 
    var newArray = [];
      for (var i=0; i < arr.length; i++) {
        if ( func(arr[i]) ) {
          newArray.push( arr[i] );
        }
      }
    return newArray;    
  },
  reject: function(arr, func) { 
    var newArray = [];
    for (var i=0; i < arr.length; i++) {
        if ( !func(arr[i]) ) {
          newArray.push( arr[i] );
        }
      }
    return newArray; 
  }
 
 }

var doubled = _.map([1, 2, 3], function(num){ return num * 2; });
console.log("doubled: ",doubled);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("sum: ",sum);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num%2 == 0; });
console.log("even: ",even);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("evens: ",evens);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("odds: ",odds);
