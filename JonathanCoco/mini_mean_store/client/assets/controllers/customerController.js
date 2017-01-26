(function() {

/*
    Our controllers: Modularize these into a folder called:
    'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
  */
  angular.module('app').controller('customerController', ['$scope', 'customerFactory', '$location', '$cookies',  function($scope, customerFactory, $location, $cookies) {

    var index = function(){
                         customerFactory.index(function(returnedData){
                           $scope.customers = returnedData;
                           });
             };


    var validate = function() {
      var bValid = true;

      $scope.newCustomer.client_name_validation = "";

      if ($scope.newCustomer.name.length == 0)
      {
        $scope.newCustomer.client_name_validation = "You must specify a customer name";
        bValid = false;
      }

      return bValid;
    }

     $scope.newCustomer = {name:''};
     $scope.customers = [];
     $scope.show_all = false;
     $scope.show_less = true;
     $scope.customer_start = 0;
     $scope.customer_init  = 2;
     $scope.customer_limit = 2;


     $scope.create = function(){

         if (validate())
         {

           customerFactory.create($scope.newCustomer,
                                function callback(result) {
                                       $scope.customers.push(result);
                                       $scope.newCustomer = $scope.newCustomer = {name:''};;
                                },
                                function callback_error(errors){
                                   console.log('we in callback_error');
                                   console.log(errors);
                                   $scope.newCustomer.errors = errors.data;
                                })
          }
          else {
            console.log("create customer validation failed");
          }
        };

      $scope.remove = function(customer){

          console.log("we a re in customerController.remove");
          console.log(customer);

          customerFactory.delete(customer._id, function(){

            posCustomer = -1;

            for (var i=0; i<$scope.customers.length; i++)
            {
              if ($scope.customers[i] == customer)
              {
                posCustomer  = i;
              }
            }

            if (posCustomer >= 0)
            {
              $scope.customers.splice(posCustomer);
            }
       });
     }




     $scope.showAllCustomers = function(){

       if (!$scope.show_all)
       {
         $scope.show_all = true;
         $scope.show_less = false;

         $scope.customer_limit = $scope.customers.length;
       }
       else {
         $scope.show_all = false;
         $scope.show_less = true;

         $scope.customer_limit = $scope.customer_init;
       }
     }


        console.log("we are in customerController");

       index();

  }]);

}) ();
