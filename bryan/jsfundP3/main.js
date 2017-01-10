function personConstructor(name) {
  this.name = name;
  var distanceTraveled = 0;
  
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
var bryan = new personConstructor("Bryan Utley");
bryan.say_name();
bryan.say_something("Is Hellacool!");
bryan.walk().walk().walk();
bryan.run().run().run();
bryan.crawl().crawl().crawl();

function ninjaConstructor(name, cohort) {
  this.name = name;
  this.cohort = cohort;
  var belt_level = "Yellow-Belt";
  
  this.say_name = function() {
    var saying = name + " of cohort " + cohort + " is a " + belt_level;
    console.log(saying);
    return this;
  };
  
  this.levelUp  = function(str) {
    if (belt_level == "Yellow-Belt") {
      belt_level = "Red-Belt";
    } else if (belt_level == "Red-Belt") {
      belt_level = "Black-Belt";
    }
    var saying = name + " leveled up to a " + belt_level;
    console.log(saying);
    return this;
  };
}

var bryan = new ninjaConstructor("Bryan Utley", "MEAN STACK");
bryan.say_name();
bryan.levelUp().say_name().levelUp().say_name();
