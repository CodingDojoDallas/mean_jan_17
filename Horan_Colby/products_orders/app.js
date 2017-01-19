var app = angular.module('app', [])

app.controller('productsController', ['$scope', 'productsFactory', function($scope, productsFactory){
  console.log('Hi')
  $scope.products = []
  $scope.createProduct = function(){
    if(!$scope.newProduct || $scope.newProduct.name == '' || typeof $scope.newProduct.price != "number"){
      $scope.error = "Invalid Input"
    }else{
      productsFactory.addProducts($scope.newProduct, function(data){
        $scope.products = data
        $scope.newProduct.quantity = 10
        console.log($scope.newProduct.quantity)
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

app.controller('ordersController', ['$scope', 'productsFactory',  function($scope, productsFactory){
  var products = []
  var factory = {}
  productsFactory.indexProducts(function(data){
    $scope.products = data
  })
  $scope.buyProduct = function(index){
    if($scope.products[index].quantity <= 0){
      $scope.error = "Product is out of stock."
    }else{
      productsFactory.buy(index, function(data){
        $scope.products = data
      })
    }
  }
}])

app.factory('productsFactory', function(){
  var products = []
  var factory = {}
  factory.indexProducts = function(callback){
    console.log(products.quantity)
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
  factory.buy = function(data, callback){
    products[data].quantity -= 1
  }
  return factory
})