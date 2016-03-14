angular.module('fiquri')
.controller('itemController', function($scope, $stateParams, $http, $rootScope, $location){
  $http.get('data/data.json')
  	.success(function (response) {
      $scope.datas = response;
      console.log(response);
    });
    
});