var app = angular.module('app',[]);


app.factory('productFactory', function(){
	console.log("inside factory");
	var products = [
	{name: "Cider", price: 2.99}
	]
	var factory ={};

	factory.getProducts = function(callback){
		console.log("factory gets product")
		callback(products);
	}
	factory.addProduct = function(newProduct, callback){
		products.push(newProduct);
		callback(products);
	}
	factory.deleteProduct = function(product, callback){
		products.splice(products.indexOf(product),1);
		callback(products);
	}


	return factory;
});


app.controller('productController',[ '$scope', 'productFactory', function($scope, productFactory){
	console.log("inside controller")
	$scope.products=[];

	var currentProductList = function(data){
			$scope.products = data;
		}

	// Initial list loaded from factory on page load
	productFactory.getProducts(
	currentProductList)

	$scope.addProduct= function(){
		productFactory.addProduct(angular.copy($scope.newProduct),
		currentProductList)
		$scope.newProduct ={};
	}
	$scope.deleteProduct= function(product){
		productFactory.deleteProduct(product,
		currentProductList)
	}




	// $scope.addProduct= function(){
	// 	$scope.products.push($scope.newProduct);
	// 	// console.log(newProduct);
	// 	$scope.newProduct = {};
	// }
	// $scope.deleteProduct = function(product){
	// 	$scope.products.splice($scope.products.indexOf(product),1);
	// }

}])