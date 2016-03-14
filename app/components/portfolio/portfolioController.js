angular.module('fiquri')
.controller('portfolioController', function($scope, $stateParams,$http, $rootScope){
  var id= $rootScope.$stateParams.id-1;
 $http.get('data/data.json')
  	.success(function (response) {
      $scope.portDatas = response[id];
      $scope.portDatasAll = response;
      $rootScope.headTitle = response[id].title;
    });
});