angular.module('fiquri')
.controller('navController', function($scope, $stateParams, $http, $rootScope, $location){
  $http.get('data/user.json')
  	.success(function (response) {
      $scope.user = response[0];
      console.log(response[0]);
    });
    
});
// ,{  
   //    "postId":10,
   //    "banner":"project10.jpg",
   //    "title":"Picpac",
   //    "industry" : "Job Portal, StartUp",
   //    "dateCreated": "January 2016",
   //    "MockSite" : "",
   //    "site" : "",
   //    "status" : "pending",
   //    "technology" : "Html, css, jquery, angularjs",
   //    "changed" : false
   // },
   // {  
   //    "postId":11,
   //    "banner":"project11.jpg",
   //    "title":"Rifiu",
   //    "industry" : "Blog, StartUp",
   //    "dateCreated": "February 2016",
   //    "MockSite" : "",
   //    "site" : "",
   //    "status" : "pending",
   //    "technology" : "Html, css, jquery, angularjs",
   //    "changed" : false
   // }