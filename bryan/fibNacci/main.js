function fib() {
  var count = 0;
  function nacci() {
    count++;
    var num = count;
    var a = 1, b = 0, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    console.log(b);
    return b;
  }
  return nacci
}

var fibCounter = fib();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();