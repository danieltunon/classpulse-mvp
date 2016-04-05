angular.module('classPulse.student', [])

.controller('StudentController', function($scope) {
  $scope.quiz = {
    question: 'Is this a real question?',
    answers: [
      'no',
      'yes',
      'i don\'t understand the question',
      'because I\'m an idiot'
    ],
    response: 'poo'
  };


});
