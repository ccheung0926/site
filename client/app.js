angular.module('wall', ['pw.canvas-painter'])

.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainController'
    })
    .when('/compose', {
      templateUrl: 'compose.html',
      controller: 'CanvasController'
    })
    .when('/:name', {
      templateUrl: 'profile.html',
      controller: 'ProfileController'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.controller('MainController', function(){

})

.controller('CanvasController', function($scope){
  
})

.controller('ProfileController', function(){

})