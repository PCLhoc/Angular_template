

angular.module('starter.services', [])

.factory('API', function($http) {
  
  var test = "Hola Mundo !";

  return{
    
    tester: function(){
        return test;
    }

  };

});
