angular.module('classPulse.student', [])

.controller('StudentController', function($scope, $rootScope, $window, $state) {
  $scope.quiz = {now: 'before event'};
  $scope.test = 'i am the right one'
  $scope.activeQuiz = false;
  $scope.closedQuiz = false;

  $scope.submitResponse = function() {
    $rootScope.socket.emit('studentResponse', {
      username: $window.localStorage.getItem('com.classPulse.user'),
      answer: $scope.quiz.response
    });
  };

  $rootScope.socket.on('newQuiz', function(quiz) {
    $scope.quiz = quiz;
    $scope.activeQuiz = true;
    $scope.closedQuiz = false;
    $scope.$digest();
  });

  $rootScope.socket.on('closed', function() {
    $scope.closedQuiz = true;
    $scope.$digest();
  });

  $rootScope.socket.on('reopen', function() {
    $scope.closedQuiz = false;
    $scope.$digest();
  });

  $rootScope.socket.on('resetQ', function() {
    $scope.activeQuiz = false;
    $scope.$digest();
  });

});
