angular.module('classPulse.student', [])

.controller('StudentController', function($scope, $rootScope, $window) {
  $scope.quiz = {};

  $scope.submitResponse = function() {
    $rootScope.socket.emit('studentResponse', {
      username: $window.localStorage.getItem('com.classPulse.user'),
      answer: $scope.quiz.response
    });
  };

  $rootScope.socket.on('newQuiz', function(quiz) {
    console.log(quiz);
    $scope.$apply(function() {
      $scope.quiz = quiz;
    });
  });

});
