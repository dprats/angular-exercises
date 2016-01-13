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

myApp.controller('mainController', ['$scope', function($scope, $log) {
    
	$scope.name = "Main";
    
}]);

myApp.controller('secondController', ['$scope', '$log','$routeParams', function($scope, $log, $routeParams) {
    
	$scope.name = $routeParams.num || 1;
    
}]);
