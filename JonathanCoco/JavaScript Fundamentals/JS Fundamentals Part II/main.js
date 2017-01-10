function sum(x, y)
{
  var sum = 0;

  for (var i=x; i<=y; i++)
  {
    sum = sum + i;
  }

  console.log(sum);
}



// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

function findMin(array)
{
  var min = 0;

  for (var i=0; i<array.length; i++)
  {
      if (array[i] < min)
      {
          min = array[i];
      }
  }

  console.log(min);

}


function findAvg(array)
{
  var sum = 0

  for (var i =0; i<array.length; i++)
  {
      sum = sum + array[i];
  }

  if (array.length > 0)
  {
      console.log(sum/array.length)
  }
  else
  {
      console.log(0);
  }
}


var sumFunction = function(x, y)
{
  var sum = 0;

  for (var i=x; i<=y; i++)
  {
    sum = sum + i;
  }

  console.log(sum);
}



// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

var minFunction = function(array)
{
  var min = 0;

  for (var i=0; i<array.length; i++)
  {
      if (array[i] < min)
      {
          min = array[i];
      }
  }

  console.log(min);

}


var avgFunction = function(array)
{
  var sum = 0

  for (var i =0; i<array.length; i++)
  {
      sum = sum + array[i];
  }

  if (array.length > 0)
  {
      console.log(sum/array.length)
  }
  else
  {
      console.log(0);
  }
}

var MathDojo = {};

MathDojo = {
  name: 'Jonathan Coco',
  dojo_average : function(array)
            {
              var sum = 0

              for (var i =0; i<array.length; i++)
              {
                  sum = sum + array[i];
              }

              if (array.length > 0)
              {
                  console.log(sum/array.length)
              }
              else
              {
                  console.log(0);
              }
            }
}



console.log('calling functions')
sum(100, 200);
findMin([100, 200, -3, 500]);
findAvg([100, 200, -3, 500]);

console.log('calling anonymous function');
sumFunction(100,200);
minFunction([100, 200, -3, 500]);
avgFunction([100, 200, -3, 500])

console.log('playing with object');

console.log(MathDojo.name);
MathDojo.dojo_average([100, 200, -3, 500]);




console.log('person object');


var person = {};

person = {
  name: 'Jonathan Coco',
  distance_traveled: 0,
  say_name:  function() { console.log(this.name) },
  say_something: function(param) { console.log(this.name + " says " + param)},
  walk: function() { console.log(this.name + " is walking");
                     this.distance_traveled += 3; },
  run: function() { console.log(this.name + " is running");
                    this.distance_traveled += 10},
  crawl: function() { console.log(this.name + " is crawling");
                      this.distance_traveled += 1},
  total_travel: function() { console.log("total travel:" + this.distance_traveled)}
}

person.say_name();
person.say_something("you are awesome");
person.walk();
person.run();
person.crawl();
person.total_travel();
