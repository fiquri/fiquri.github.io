angular.module('fiquri').config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $defaultView = 'app/components/';
  $shared = 'app/shared/';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: $defaultView+'home/home.html'
    })
    .state('portfolio',{
      url: "/p:id",
      reloadOnSearch: false,
      templateUrl: $defaultView+'portfolio/portfolio.html'
    })
    
    
    
}])
.run(['$rootScope', '$state',function ($rootScope, $state) {
    $rootScope.$state = $state;
}]);