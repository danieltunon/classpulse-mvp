var classPulse = angular.module( 'classPulse', [
  'classPulse.auth',
  'classPulse.services',
  'classPulse.student',
  'ngRoute',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/landing');
  $stateProvider
    .state('landing', {
      url: '/landing',
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .state('student.quiz', {
      templateUrl: 'app/student/student.quiz.html',
      controller: 'StudentController'
    })
    .state('student', {
      url: '/student',
      templateUrl: 'app/student/student.html',
      controller: 'StudentController'
    });

});
