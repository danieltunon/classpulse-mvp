angular.module('classPulse.auth', [])

.controller('AuthController', function($scope, $window, $location, $state, Auth) {
  $scope.user = {};

  $scope.signin = function signin() {
    // Auth.signin($scope.user)
    // .then(function(res) {
      // console.log(res);
      $window.localStorage.setItem('com.classPulse', $scope.user.username);
      $state.go('student.quiz');
    // })
    // .catch(function(err) {
    //   console.log(err);
    // });

  };

});
