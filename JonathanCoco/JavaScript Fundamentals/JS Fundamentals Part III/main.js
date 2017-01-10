function personConstructor (inputName)
{
  var person = {
    name: inputName,
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

  return person
}

var student = personConstructor('Jonathan Coco');

student.say_name();
student.say_something("you are awesome");
student.walk();
student.run();
student.crawl();
student.total_travel();


function ninjaConstructor (inputName, inputCohort, inputBeltLevel)
{
  var ninja = {
    name: inputName,
    cohort: inputCohort,
    beltLevel: inputBeltLevel,

    level_up:  function() { console.log(this.beltLevel);

                            if (this.beltLevel == "yellow")
                            {
                              this.beltLevel = "red";
                            }
                            else if (this.beltLevel == "red")
                            {
                                this.beltLevel = "black";
                            }

                            console.log(this.beltLevel);
                          }
  }

  return ninja
}

ninja1 = ninjaConstructor("Jonathan", "cobrakai", "yellow");
ninja1.level_up();
