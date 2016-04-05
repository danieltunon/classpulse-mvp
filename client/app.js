var classPulse = angular.module( 'classPulse', [
  'classPulse.auth',
  'classPulse.services',
  'classPulse.student',
  'ngRoute',
  'ui.router'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/student', {
      templateUrl: 'app/student/student.html',
      controller: 'StudentController'
    })
    .otherwise({
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController'
    });
    
})

.run(function($location) {
  $location.url('/landing');
});
