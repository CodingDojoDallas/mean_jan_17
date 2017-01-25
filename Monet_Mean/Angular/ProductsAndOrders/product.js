var app = angular.module('app',[]);


app.factory('productFactory', function(){
	console.log("inside factory");
	var products = [
	{name: "Cider", price: 2.99, Qty: 50}
	]
	var factory ={};

	factory.getProducts = function(callback){
		console.log("factory gets product")
		callback(products);
	}
	factory.addProduct = function(newProduct, callback){
		newProduct["Qty"] = 50;
		products.push(newProduct);
		console.log(products)
		callback(products);
	}
	factory.deleteProduct = function(product, callback){
		products.splice(products.indexOf(product),1);
		callback(products);
	}
	factory.buyProduct = function (product, callback){
		console.log(products[(products.indexOf(product))]);
		products[(products.indexOf(product))].Qty -= 1;
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
}])

app.controller('orderController',[ '$scope', 'productFactory', function($scope, productFactory){
	console.log("inside Order controller")
	$scope.orders=[];

	var currentProductList = function(data){
			$scope.orders = data;
		}

	// Initial list loaded from factory on page load
	productFactory.getProducts(
	currentProductList)

	$scope.buyOrder= function(product){
		productFactory.buyProduct(product,
		currentProductList)
	}

}])