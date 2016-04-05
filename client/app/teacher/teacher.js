angular.module('classPulse.teacher', [])

.controller('TeacherController', function($scope, $rootScope, $window) {
  $scope.responses = [];

  $rootScope.socket.on('studentResponse', function(response) {
    console.log(response);
    $scope.$apply(function() {
      $scope.responses.push(response);
    });
  });

});
