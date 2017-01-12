//simulated really slow DB call.
function getStuffFromDatabase(callback){
  var data;
  var myTimer = setInterval(function(){
    if (typeof(callback) == 'function'){
      //it just got back from the DB!
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
  return data;
}
//simulated request (failing);
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(); // this should return my data right??
  console.log(data);
}
function catchFly(){
  console.log('I just caught a fly!');
}


requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.
