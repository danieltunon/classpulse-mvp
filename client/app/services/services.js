angular.module('classPulse.services', [])

.factory('Auth', function($http) {
  function signin(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function(res) {
      return res;
    })
    .catch(console.log.bind(console));
  }

  return {
    signin: signin
  };
});
