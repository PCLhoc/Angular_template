
(function() {
  'use strict';

angular.module('starter.routes', [])

.config(Config);

function Config(localStorageServiceProvider, $routeProvider){

      //LocalStorage Config
      localStorageServiceProvider
        .setPrefix('starter');
      //App Routes
        $routeProvider            
            .when('/', 
            {
              templateUrl : 'templates/main.html',
              controller  : 'mainController',
              controllerAs: 'main'
            })
            .otherwise({redirectTo:'/'});
        }
})();