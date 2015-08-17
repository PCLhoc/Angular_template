
(function() {
    'use strict';

angular.module('starter.controllers', [])

.controller('mainController', function($scope, API){
	
	$scope.test = API.tester();


	
});

})();