angular.module('classPulse.teacher', [])

.controller('TeacherController', function($scope, $rootScope, $window) {
  $scope.responses = [];

  $scope.test = function() {
    console.log('emit as teacher');
    $rootScope.socket.emit('newQuiz', {question: 'test q', answers: ['first', 'second', 'third']});
  };

  $rootScope.socket.on('studentResponse', function(response) {
    console.log(response);
    $scope.$apply(function() {
      $scope.responses.push(response);
    });
  });

});
