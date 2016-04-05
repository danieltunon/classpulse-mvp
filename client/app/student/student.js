angular.module('classPulse.student', [])

.controller('StudentController', function($scope, $rootScope) {
  $scope.quiz = {};

  $rootScope.socket.on('servertest', function(quiz) {
    console.log(quiz);
    $scope.$apply(function() {
      $scope.quiz = quiz;
    });
  });

  $rootScope.socket.emit('clienttest');

});
