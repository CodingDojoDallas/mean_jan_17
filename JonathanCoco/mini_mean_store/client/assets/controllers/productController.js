(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('productController', ['$scope', 'productFactory', '$location', '$cookies',  function($scope, productFactory, $location, $cookies) {

    var index = function(){
                         productFactory.index(function(returnedData){
                           $scope.products = returnedData;
                           });
             };

     var validate = function() {
       var bValid = true;

       $scope.newProduct.client_name_validation = "";
       $scope.newProduct.client_image_url_validation = "";
       $scope.newProduct.client_description_validation = "";
       $scope.newProduct.client_quantity_validation = "";

       if ($scope.newProduct.name.length == 0)
       {
         $scope.newProduct.client_name_validation = "You must specify a product name";
         bValid = false;
       }

       if ($scope.newProduct.image_url.length == 0)
       {
         $scope.newProduct.client_image_url_validation = "You must specify a product image location";
         bValid = false;
       }

       if ($scope.newProduct.description.length == 0)
       {
         $scope.newProduct.client_description_validation = "You must specify a product description";
         bValid = false;
       }


       console.log("quanitty = " + $scope.newProduct.quantity);

       if (($scope.newProduct.quantity == "") || ($scope.newProduct.quantity == null))
       {
         $scope.newProduct.client_quantity_validation = "You must specify a product quantity";
         bValid = false;
       }

       return bValid;
     }

     $scope.products = [];
     $scope.newProduct = {name:'', image_url:'', description:'', quantity:0}

     $scope.createProduct = function(){

          if (validate())
          {

             productFactory.create($scope.newProduct,
                                  function callback(result) {
                                         $scope.products.push(result);
                                         $scope.newProduct = {name:'', image_url:'', description:'', quantity:0};
                                  },
                                  function callback_error(errors){
                                     console.log('we in callback_error');
                                     console.log(errors);
                                     $scope.newProduct.errors = errors.data
                                  })
          }
        };

      $scope.resetProduct = function(){

            $scope.newProduct = {};
         };


      $scope.product_start = 0;

      $scope.productDashboardMore = function(){

        $scope.product_start = $scope.product_start + $scope.product_dashboard_limit;

        console.log("product start = " + $scope.product_start);
        console.log("product limit = " + $scope.product_dashboard_limit);

        if ($scope.product_start >= $scope.products.length)
        {
          $scope.product_start = 0
        }

      }

      $scope.productListingMore = function(){

        $scope.product_start = $scope.product_start + $scope.product_listing_limit;

        console.log("product start = " + $scope.product_start);
        console.log("product limit = " + $scope.product_listing_limit);

        if ($scope.product_start >= $scope.products.length)
        {
          $scope.product_start = 0
        }

      }




       index();

  }]);

}) ();
