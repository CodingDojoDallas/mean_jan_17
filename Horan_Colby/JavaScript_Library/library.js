var _ = {
  map: function(arr, func) {
    for (var i = 0;i<arr.length;i++){
      arr[i] = func(arr[i])
    }
    return arr
  },
  reduce: function(arr, func, memo) { 
    for (var i = 0;i <arr.length;i++){
      if(!memo){
        memo = arr[i]
      }else{
        memo = func(memo, arr[i])
      }
    }
    return memo
  },
  find: function(arr, func) {   
    var newArr = []
    for (var i = 0;i < arr.length;i++){
      if (func(arr[i])){
        newArr.push(arr[i])
      }
    }
    return newArr
  },
  filter: function(arr, func) { 
    var newArr = []
    for (var i = 0;i < arr.length;i++){
      if(func(arr[i])){
        newArr.push(arr[i])
      }
    }
    return newArr
  },
  reject: function(arr, func) { 
    var newArr = []
    for (var i = 0;i < arr.length;i++){
      if(!func(arr[i])){
        newArr.push(arr[i])
      }
    }
    return newArr
  }
}

var evens = _.filter([1, 2, 3, 4, 5, 6, 54, 22, 23], function(num){ return num % 2 == 0; })
console.log(evens)

// var squares = _.map([1, 2, 3, 4, 5, 50, 32, 1.4], function(num){return num * num})
// console.log(squares)

// var multiply = _.reduce([2, 3, 5, 3, 7, 10], function(memo, num){return memo * num}, 0)
// console.log(multiply)

// var even = _.find([1, 2, 3, 4, 5, 6, 8, 11, 22], function(num){ return num % 2 == 0; })
// console.log(even)

// var odds = _.reject([1, 2, 3, 4, 5, 6, 11, 20, 230, 205, 603], function(num){ return num % 2 == 0; });
// console.log(odds)