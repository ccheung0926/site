angular.module('wall', [
  'wall.profile',
  'wall.compose',
  'wall.auth'
  ])

.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainController'
    })
    .when('/signin', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('signup', {
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    })
    .when('/compose', {
      templateUrl: 'compose/compose.html',
      controller: 'CanvasController'
    })
    .when('/:name', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.controller('MainController', function(){

})