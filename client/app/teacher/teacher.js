angular.module('classPulse.teacher', [])

.controller('TeacherController', function($scope, $rootScope, $window) {
  $scope.quiz = {
    question: '',
    answers: []
  };
  $scope.correctAnswer;
  $scope.newAnswer = '';
  $scope.responses = {};

  $scope.test = function() {
    console.log('emit as teacher');
    $rootScope.socket.emit('quiz', {question: 'test q', answers: ['first', 'second', 'third']});
  };

  $scope.addAnswer = function() {
    $scope.quiz.answers.push($scope.newAnswer);
    $scope.newAnswer = '';
  };

  $scope.markCorrect = function(answer) {
    console.log('marked');
    $scope.correctAnswer = answer;
    console.log($scope.correctAnswer);
  };

  $rootScope.socket.on('newStudentResponse', function(response) {
    console.log(response);
    $scope.$apply(function() {
      $scope.responses[response.username] = response.answer;
    });
  });

});
