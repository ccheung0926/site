angular.module('wall', [])

.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainController'
    })
    .when('/compose', {
      templateUrl: 'compose.html',
      controller: 'ComposeController'
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

.controller('ComposeController', function(){

})

.controller('ProfileController', function(){

})