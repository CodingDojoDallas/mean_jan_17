
angular.module('app').factory('productFactory', ['$http', function($http) {
  // constructor for our factory
  var product = {};
  var error = {};

  function productFactory()
  {
    console.log("in function product factory");

    var _this = this;

    this.create = function(newProduct, callback, callback_errors){

      console.log(newProduct);

      $http.post('/products', newProduct).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log(returned_data);
          product = returned_data.data;
          callback(product);
        }
      }, function(response){
          alert("error on create");
          console.log(response);
          callback_errors(response);
      });
    };

    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/products').then(function(returned_data){
        callback(returned_data.data);
      });
    }

  
  }

  return new productFactory();

}]);
