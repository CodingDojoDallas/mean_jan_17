// #1
function sumIt(x,y) {
  var sum = 0;
  for (var i=x; i<=y; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumIt(10,200));

// #2
function minValue(arr) {
  var min = arr[0];
  for (var i=0; i<arr.length;i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(minValue([1,-21,0,1,2,-4]));

// #3
function arrAvg(arr) {
  var sum = 0;
  for (var i=0; i<arr.length;i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}
console.log(arrAvg([1,2,3,4,5,6,7,8]));



// #4
var sumIt = function(x,y) {
  var sum = 0;
  for (var i=x; i<=y; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumIt(10,200));

// #5
var minValue = function(arr) {
  var min = arr[0];
  for (var i=0; i<arr.length;i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log(minValue([1,-21,0,1,2,-4]));

// #6
var arrAvg = function(arr) {
  var sum = 0;
  for (var i=0; i<arr.length;i++) {
    sum += arr[i];
  }
  return sum/arr.length;
};
console.log(arrAvg([1,2,3,4,5,6,7,8]));


// #7
var object7 = {
  sumIt: function(x,y) {
    var sum = 0;
    for (var i=x; i<=y; i++) {
      sum += i;
    }
    return sum;
  }
};
console.log(object7.sumIt(1,5))

// #8
var object8 = {
  minValue: function(arr) {
    var min = arr[0];
    for (var i=0; i<arr.length;i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
};
console.log(object8.minValue([1,-21,0,1,2,-4]));

// #9
var object9 = {
  arrAvg: function(arr) {
    var sum = 0;
    for (var i=0; i<arr.length;i++) {
      sum += arr[i];
    }
    return sum/arr.length;
  }
};
console.log(object9.arrAvg([1,2,3,4,5,6,7,8]));

// #10
function person(name, distanceTraveled) {
  this.name = name;
  this.distanceTraveled =  distanceTraveled;
  this.say_name = function() {
    console.log(name);
    return this;
  };
  this.say_something  = function(str) {
    var saying = name + " " + str;
    console.log(saying);
    return this;
  };
  this.walk = function(str) {
    distanceTraveled += 3;
    var saying = name + " Walking [" + distanceTraveled + "]";
    console.log(saying);
    return this;
  };
  this.run = function(str) {
    distanceTraveled += 10;
    var saying = name + " Running [" + distanceTraveled + "]";
    console.log(saying);
    return this;
  };
  this.crawl = function(str) {
    distanceTraveled += 1;
    var saying = name + " Crawling [" + distanceTraveled + "]";
    console.log(saying);
    return this;
  };
}
var bryan = new person("Bryan Utley", 0);
bryan.say_name();
bryan.say_something("Is Hellacool!");
bryan.walk().walk().walk();
bryan.run().run().run();
bryan.crawl().crawl().crawl();




