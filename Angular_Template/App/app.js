(function() {
    'use strict';

	var app = angular.module('starter', [
			'ngRoute',
	        'LocalStorageModule',
	        'ui.bootstrap',
			'starter.controllers', 
			'starter.services', 
			'starter.routes',
			'starter.directives'
		])
	.filter('reverse', function() {
  		return function(items) {
    		return items.slice().reverse();
  		};
	});

})();