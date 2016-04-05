angular.module('classPulse.teacher', [])

.controller('TeacherController', function($scope, $rootScope, $window) {
  $scope.responses = {};

  $scope.test = function() {
    console.log('emit as teacher');
    $rootScope.socket.emit('quiz', {question: 'test q', answers: ['first', 'second', 'third']});
  };

  $rootScope.socket.on('newStudentResponse', function(response) {
    console.log(response);
    $scope.$apply(function() {
      $scope.responses[response.username] = response.answer;
    });
  });

});
