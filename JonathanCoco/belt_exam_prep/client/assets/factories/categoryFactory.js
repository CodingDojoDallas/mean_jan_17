
angular.module('app').factory('categoryFactory', ['$http', function($http) {
  // constructor for our factory
  var category = {};
  var error = {};

  function categoryFactory()
  {

    var _this = this;

      this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/category').then(function(returned_data){

        callback(returned_data.data);
      });
    }


  }

  return new categoryFactory();

}]);
