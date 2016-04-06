angular.module('classPulse.teacher', [])

.controller('TeacherController', function($scope, $rootScope, $window) {
  $scope.creatingQuiz = false;
  $scope.quizSubmitted = false;
  $scope.open = false;
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

  $scope.showCreate = function() {
    $scope.creatingQuiz = true;
  };

  $scope.addAnswer = function() {
    $scope.quiz.answers.push($scope.newAnswer);
    $scope.newAnswer = '';
  };

  $scope.markCorrect = function(answer) {
    $scope.correctAnswer = ''+answer;
    // $('');
  };

  $scope.removeAnswer = function(answer) {
    $scope.quiz.answers.splice(answer, 1);
  };

  $scope.submitQuiz = function() {
    $rootScope.socket.emit('quiz', $scope.quiz);
    $scope.quizSubmitted = true;
    $scope.creatingQuiz = false;
    $scope.open = true;
  };

  $scope.closeQuiz = function() {
    $rootScope.socket.emit('closed');
    $scope.open = false;
  };

  $scope.reopenQuiz = function() {
    $rootScope.socket.emit('reopen');
    $scope.open = true;
  };

  $scope.resetQuiz = function() {
    $rootScope.socket.emit('resetQ');
    $scope.responses = {};
    $scope.quiz = {
      question: '',
      answers: []
    };
    $scope.creatingQuiz = false;
    $scope.quizSubmitted = false;
    $scope.open = false;
    $scope.digest();
  };

  $rootScope.socket.on('newStudentResponse', function(response) {
    $scope.$apply(function() {
      var answer = $scope.quiz.answers[Number(response.answer)];
      $scope.responses[response.username] = answer;
    });
  });

});
