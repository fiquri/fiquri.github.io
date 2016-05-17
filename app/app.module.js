// Ionic Starter App
'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('fiquri',['ui.router','ngAnimate']);
app.controller('projectController', function($scope, $http){
 $http.get('data/data.json')
  	.success(function (response) {
      $scope.items = response;
      console.log(response)
    });
    $http.get('data/user.json')
  	.success(function (response) {
      $scope.info = response[0];
      console.log(response[0])
    });

  	// detecting windows size
    $scope.detectmob= function () {
	   if(window.innerWidth <= 480) {
	     return true;
	   } else {
	     return false;
	   }
		}

});
