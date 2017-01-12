    // #1
    console.log("#1 *************************");
    var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
    for (var i = 0; i<x.length; i++) {
      console.log(i);
    }
    
    //#2
    console.log("#2 *************************");
    x.push(100);
    
    // #3
    console.log("#3 *************************");
    x.push(["hello", "world", "JavaScript is Fun"]);
    console.log(x);
    
    // #4
    console.log("4 *************************");
    var sum = 0;
    for (var i = 1; i <= 500; i++){
      sum += i;
    }
    console.log(sum);
    
    // #5
    console.log("#5 *************************");
    var arr = [1, 5, 90, 25, -3, 0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log(min);
    
    // #6
    console.log("#6 *************************");
    var arr = [1, 5, 90, 25, -3, 0];
    var sum = arr[0];
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum / arr.length);

    // #7
    console.log("#7 *************************");
    var newNinja = {
     name: 'Jessica',
     profession: 'coder',
     favorite_language: 'JavaScript',
     dojo: 'Dallas'
    }
    var pair = "";
    for (key in newNinja){
      if (newNinja.hasOwnProperty(key)) {
        pair = key + " : " + newNinja[key];
        console.log(pair);
      }
    }

