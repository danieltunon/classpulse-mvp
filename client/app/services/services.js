angular.module('classPulse.services', [])

.factory('Auth', function($http) {
  function signin() {
    return io.connect(window.location.origin);
  }

  function authorizeUser(user) {
    return $http({
      method: 'POST',
      url: '/api/users/verify',
      data: user
    })
    .then(function(res) {
      return res.data;
    });
  }

  return {
    signin: signin,
    authorizeUser: authorizeUser
  };
});
