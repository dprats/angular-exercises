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
    
	$scope.name = nameService.name;
	$log.log(nameService.name);
	$log.log(nameService.nameLength());

	//manuallly add a watch on ng-model=name because the digest looks at $scope, not nameService service
	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	})


    
}]);

myApp.controller('secondController', ['$scope', '$log','$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

	$scope.$watch('name', function(){
		nameService.name = $scope.name;
	})
    
}]);
