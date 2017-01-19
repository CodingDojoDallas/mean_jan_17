var app = angular.module('app', [])

app.controller('productsController', ['$scope', 'productsFactory', function($scope, productsFactory){
  console.log('Hi')
  $scope.products = []
  $scope.createProduct = function(){
    console.log(typeof $scope.newProduct.price)
    console.log($scope.newProduct.price)
    if(!$scope.newProduct || $scope.newProduct.name == '' || typeof $scope.newProduct.price != "number"){
      $scope.error = "Invalid Input"
    }else{
      productsFactory.addProducts($scope.newProduct, function(data){
        $scope.products = data
        $scope.newProduct = {}
      })
    }
  }
  productsFactory.indexProducts(function(data){
    $scope.products = data
  })
  $scope.deleteProduct = function(index){
    productsFactory.destroy(index, function(data){
      $scope.products = data
    })
  }

}])

app.factory('productsFactory', function(){
  var products = []
  var factory = {}
  factory.indexProducts = function(callback){
    callback(products)
  }
  factory.addProducts = function(data, callback){
    products.push(data)
    callback(products)
  }
  factory.destroy = function(data, callback){
    products.splice(data, 1)
    callback(products)
  }
  return factory
})