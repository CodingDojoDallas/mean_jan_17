// #1  ----------------------------------------------
function runningLogger(){
  console.log("I am running!");
}
runningLogger();

// #2  ----------------------------------------------
function multiplyByTen(num) {
  return num * 10;
}
console.log(multiplyByTen(5));

// #3  ----------------------------------------------
function stringReturnOne(){
  console.log("A call to stringReturnOne");
  return "This is String 1!"
}
function stringReturnTwo(){
  console.log("A call to stringReturnTwo");
  return "This is String 2!"  
}
console.log(stringReturnOne());
console.log(stringReturnTwo());

// #4  ----------------------------------------------
function caller(arg1) {
  if (typeof arg1 === "function") {
    arg1();
  }
}
caller(stringReturnOne);

// #5  ----------------------------------------------
console.log("*****************************");
function myDoubleConsoleLog(arg1, arg2) {
  if (typeof arg1 === "function") {
    console.log(arg1());
  }
  if (typeof arg2 === "function") {
    console.log(arg2());
  }
}
myDoubleConsoleLog(stringReturnOne,stringReturnTwo);

// #6  ----------------------------------------------
console.log("[#6]****************************");
function caller2(arg1) {
  console.log("starting");
  setTimeout(function(){
    if (typeof arg1 === "function") {
      arg1();
      console.log("ending");
    }      
  }, 2000);
  return "interesting";
}
caller2(myDoubleConsoleLog.bind(null,stringReturnOne,stringReturnTwo));


