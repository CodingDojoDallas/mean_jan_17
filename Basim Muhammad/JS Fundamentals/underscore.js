var _ = {
  map: function(arr, func) {
    for (var i = 0; i<arr.length; i++){
      arr[i]=func(arr[i]);
    }
     return arr;
  },
  reduce: function(arr,func,memo) { 
     if (!memo){
      memo=0
     }
     for (var i =0; i<arr.length; i++){
      memo=func(arr[i],memo) 

     }
     return memo
  },
  find: function(arr,func) {   
     for (var i =0;i<arr.length; i++){
      if (func(arr[i])){
        return true
      }
     }
  },
  filter: function(arr,func) { 
     var new_array=[]
     for (var i =0;i<arr.length; i++){
      if (func(arr[i])){
        new_array.push(arr[i])
      }
    }
    return new_array;
  },
  reject: function(arr,func) { 
    var new_array=[]
    for (var i = 0; i<arr.length;i++){
      if (!(func(arr[i]))){
        new_array.push(arr[i]);
      }
    }
    return new_array
  }
}
// you just created a library with 5 methods!

console.log(_.map([1,2,3],function(num){return num*2}))
console.log(_.find([1,2,3], function(num){if (num%2===0){return true}}))
console.log(_.filter([1,2,3,4,6,8], function(num){if (num%2===0){return true}}))
console.log(_.reject([1,2,3,4,6,8,11], function(num){if (num%2===0){return true}}))
console.log(_.reduce([1,2,3],function(num,memo){return memo+=num}))