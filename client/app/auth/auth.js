angular.module('classPulse.auth', [])

.controller('AuthController', function($scope, $rootScope, $window, $location, $state, Auth) {
  $scope.user = {};

  $scope.signin = function signin() {
    $rootScope.socket = Auth.signin();
    $rootScope.socket.on('connect', function() {
      $window.localStorage.setItem('com.classPulse', $scope.user.username);
      $rootScope.socket.emit('clienttest');
      console.log('connected');
      $state.go('student.quiz');
    });
  };

});
