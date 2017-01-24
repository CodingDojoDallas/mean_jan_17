(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('orderController', ['$scope', 'productFactory', 'customerFactory', 'orderFactory', '$location', '$cookies',  function($scope, productFactory, customerFactory, orderFactory, $location, $cookies) {

    var index = function(){
                customerFactory.index(function(returnedData){
                  $scope.customers = returnedData;
                  });
                productFactory.index(function(returnedData){
                  $scope.products = returnedData;
                  });
                orderFactory.index(function(returnedData){
                  $scope.orders = returnedData;
                  });
             };

     var validate = function() {
       var bValid = true;

       $scope.newOrder.client_product_validation = "";
       $scope.newOrder.client_customer_validation = "";
       $scope.newOrder.client_quantity_validation = "";

       if (($scope.newOrder.product == "") || ($scope.newOrder.product == null))
       {
         $scope.newOrder.client_product_validation = "You must specify a product";
         bValid = false;
       }

       if (($scope.newOrder.customer == "") || ($scope.newOrder.customer == null))
       {
         $scope.newOrder.client_customer_validation = "You must specify a client";
         bValid = false;
       }


       if (($scope.newOrder.quantity == "") || ($scope.newOrder.quantity == null))
       {
         $scope.newOrder.client_quantity_validation = "You must specify an order quantity";
         bValid = false;
       }

       return bValid;
     }

     $scope.products = [];
     $scope.customers  = [];
     $scope.orders = [];

     $scope.newOrder = {product:'', customer:'', quantity:0}

     $scope.createOrder = function(){

          if (validate()){

             orderFactory.create($scope.newOrder,
                                function callback(result) {
                                       $scope.orders.push(result);
                                       $scope.newOrder = {product:'', customer:'', quantity:0}
                                },
                                function callback_error(errors){
                                   console.log('we in callback_error');
                                   console.log(errors);
                                   $scope.newOrder.errors = errors.data;
                                   console.log($scope.newOrder.errors);
                                })
          }
        };

      $scope.resetOrders = function(){

            $scope.newProduct = {};
         };



      $scope.show_all = false;
      $scope.show_less = true;
      $scope.order_start = 0;
      $scope.order_init  = 2;
      $scope.order_limit = 2;

      $scope.showAllOrders = function(){

        if (!$scope.show_all)
        {
          $scope.show_all = true;
          $scope.show_less = false;

          $scope.order_limit = $scope.orders.length;
        }
        else {
          $scope.show_all = false;
          $scope.show_less = true;

          $scope.order_limit = $scope.order_init;
        }
      }

     index();

  }]);

}) ();
