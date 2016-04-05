var classPulse = angular.module( 'classPulse', [
  'classPulse.auth',
  'classPulse.services',
  'classPulse.student',
  'classPulse.teacher',
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
    .state('student', {
      url: '/student',
      templateUrl: 'app/student/student.html',
      controller: 'StudentController'
    })
    .state('student.quiz', {
      templateUrl: 'app/student/student.quiz.html',
      controller: 'StudentController'
    })
    .state('student.pending', {
      templateUrl: 'app/student/student.pending.html',
      controller: 'StudentController'
    })
    .state('teacher', {
      url: '/teacher',
      templateUrl: 'app/teacher/teacher.html',
      controller: 'TeacherController'
    })
    .state('teacher.responses', {
      templateUrl: 'app/teacher/teacher.responses.html',
      controller: 'TeacherController'
    })
    .state('teacher.quiz', {
      templateUrl: 'app/teacher/teacher.quiz.html',
      controller: 'TeacherController'
    })
    .state('teacher.pending', {
      templateUrl: 'app/teacher/teacher.pending.html',
      controller: 'TeacherController'
    });;

});
