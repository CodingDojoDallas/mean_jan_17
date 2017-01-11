// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
function runningLogger()
{
  console.log('I am running!');
}

function multiplyByTen(value)
{
  return value * 10;
}

function stringReturnOne()
{
  return "jonathan";
}

function stringReturnTwo()
{
  return "coco";
}

function caller(param)
{

  if (typeof param === "function")
  {
    param();
  }
}

function myDoubleConsoleLog(param1, param2)
{
  console.log("in double console log");

  if (typeof param1 === "function")
  {
    console.log(param1());
  }

  if (typeof param2 === "function")
  {
    console.log(param2());
  }
}

function caller2(param1)
{
  console.log('starting caller2');

  if (typeof param1 === "function")
  {
    console.log("we in the function section")
  //  setTimeout(function() { param1(stringReturnOne, stringReturnOne) }, 3000);
    setTimeout(param1, 3000);
  }

  console.log("ending caller2")

  return "interesting"

}

runningLogger()


console.log(multiplyByTen(50));

console.log(stringReturnOne());
console.log(stringReturnTwo());


caller(runningLogger());


myDoubleConsoleLog(stringReturnOne, stringReturnOne);

caller2(myDoubleConsoleLog.bind(null, stringReturnOne, stringReturnOne));
