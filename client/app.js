var classPulse = angular.module( 'classPulse', [
  'classPulse.auth',
  'classPulse.services',
  'classPulse.student',
  'classPulse.teacher',
  'ngRoute',
  'ui.router'
])

.config(function($routeProvider) {
  $routeProvider
    .when('landing', {
      url: '/landing',
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController'
    })
    .when('/signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/student', {
      url: '/student',
      templateUrl: 'app/student/student.html',
      controller: 'StudentController'
    })
    .when('/teacher', {
      url: '/teacher',
      templateUrl: 'app/teacher/teacher.html',
      controller: 'TeacherController'
    })
    .otherwise({
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController'
    });

});
