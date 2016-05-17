angular.module('fiquri')
.controller('itemController', function($scope, $stateParams, $http, $rootScope, $location){
  $http.get('data/data.json')
  	.success(function (response) {
      $scope.items = response;
      console.log(response);
    });
   $http.get('data/data.json')
  	.success(function (response) {
      $scope.info = response;
      console.log(response);
    });
    
});