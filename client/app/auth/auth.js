angular.module('classPulse.auth', [])

.controller('AuthController', function($scope, $rootScope, $window, $location, Auth) {
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
            $location.url('/teacher');
          } else {
            $location.url('/student')
          }
        });
    });
  };

});
