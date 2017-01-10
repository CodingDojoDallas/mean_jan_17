function fib() {
  var sum = 0;

  function nacci() {

    sum = sum + (sum + 1)

    console.log(sum);
  }
  return nacci
}

console.log("we here")

var fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
