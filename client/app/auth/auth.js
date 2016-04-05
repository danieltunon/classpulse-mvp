angular.module('classPulse.auth', [])

.controller('AuthController', function($scope, $rootScope, $window, $state, Auth) {
  $scope.user = {};

  $scope.signin = function signin() {
    $rootScope.socket = Auth.signin();
    $rootScope.socket.on('connect', function() {
      $window.localStorage.setItem('com.classPulse.user', $scope.user.username);
      Auth.authorizeUser($scope.user)
        .then(function(accountType) {
          console.log(accountType);
          if ( accountType === 'teacher' ) {
            $window.localStorage.setItem('com.classPulse.quizzes', JSON.stringify([]));
            $state.go('teacher')
            .then(function() {
              console.log('emit as teacher')
              $rootScope.socket.emit('newQuiz', {question: 'test q', answers: ['first', 'second', 'third']});
            });
          } else {
            $state.go('student.pending')
          }
        });
    });
  };

});
