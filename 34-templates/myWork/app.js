var myApp = angular.module('myApp', ['ngRoute']);

//possible because of ngRoute
myApp.config(function($routeProvider){

	//what we should do if we see something in the hash
	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

});

//singleton object that will contain properties, functions, or methods
myApp.service('nameService', function(){

	var self = this;
	this.name = "John Doe";
	this.nameLength = function(){
		return self.name.length;

	};

});

myApp.controller('mainController', ['$scope','$log', 'nameService', function($scope, $log, nameService) {
    
	

    
}]);

myApp.controller('secondController', ['$scope', '$log','$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
  
    
}]);

myApp.directive("searchResult", function(){

	//this object is the directive
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchresult.html',
		replace: true
	}

});
