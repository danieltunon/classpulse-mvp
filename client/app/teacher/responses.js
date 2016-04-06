angular.module('classPulse.responses', [])

.controller('ResponsesController', function($scope, $rootScope) {
  $scope.correctAnswer = $scope.$parent.correctAnswer;
  $scope.answers = $scope.$parent.quiz.answers;
  $scope.responses = [];

  $rootScope.socket.on('newStudentResponse', function(response) {
    $scope.$apply(function() {
      console.log('works');
      $scope.responses.push(response);
    });
  });


});
