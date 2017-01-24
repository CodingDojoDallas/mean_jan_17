
angular.module('app').factory('orderFactory', ['$http', function($http) {
  // constructor for our factory
  var order = {};
  var error = {};

  console.log("we are in order factory");

  function orderFactory()
  {
    console.log("in function order factory");

    var _this = this;

    this.create = function(newOrder, callback, callback_errors){

      console.log(newOrder);

      $http.post('/orders', newOrder).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log(returned_data);
          order = returned_data.data;
          callback(order);
        }
      }, function(response){
          alert("error on create");
          console.log(response);
          callback_errors(response);
      });
    };

    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/orders').then(function(returned_data){
        console.log("we are  in orders.index");
        console.log(returned_data.data);
        
        callback(returned_data.data);
      });
    }


  }

  return new orderFactory();

}]);
