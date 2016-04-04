var classPulse = angular.module( 'classPulse', [
  'classPulse.auth',
  'classPulse.services',
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .otherwise({
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController'
    });
})

.run(function($location) {
  $location.url('/landing')
})
