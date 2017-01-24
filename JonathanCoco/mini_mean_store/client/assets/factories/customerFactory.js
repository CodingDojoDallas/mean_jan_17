
angular.module('app').factory('customerFactory', ['$http', function($http) {
  // constructor for our factory
  var customer = {};
  var error = {};


  function customerFactory()
  {
    console.log("in function customer factory");

    var _this = this;

    this.create = function(newCustomer, callback, callback_errors){

      $http.post('/customers', newCustomer).then(function(returned_data){

        if (typeof(callback) == 'function'){
          console.log(returned_data);
          customer = returned_data.data;
          callback(customer);
        }
      }, function(response){
          alert("error on create");
          console.log(response);
          callback_errors(response);
      });
    };

    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/customers').then(function(returned_data){
        callback(returned_data.data);
      });
    }


    this.delete = function(id, callback){

      console.log(id);

      $http.delete('/customers/'+id).then(function(){
        callback();
      });
    }

  }

  return new customerFactory();

}]);
