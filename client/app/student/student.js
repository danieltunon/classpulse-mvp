angular.module('classPulse.student', [])

.controller('StudentController', function($scope, $rootScope, $window, $state) {
  $scope.quiz = {now: 'before event'};
  $scope.test = 'i am the right one'

  $scope.submitResponse = function() {
    $rootScope.socket.emit('studentResponse', {
      username: $window.localStorage.getItem('com.classPulse.user'),
      answer: $scope.quiz.response
    });
  };

  $rootScope.socket.on('newQuiz', function(quiz) {
    console.log('student heard newquiz, here is scope')
    console.dir( $scope );
    $scope.quiz = quiz;
    $state.go('student.quiz')
    .then(function(){
        console.log('student after transition, here is scope')
        $scope.$digest();
        console.dir( $scope );
    });
  });

});
