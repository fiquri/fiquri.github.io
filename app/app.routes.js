angular.module('fiquri').config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $defaultView = 'app/components/';
  $shared = 'app/shared/';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: $defaultView+'home/home.html',
      controller : "projectController"
    })
    
    
    
}])
.run(['$rootScope', '$state', '$stateParams',function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams  = $stateParams ;
}]);