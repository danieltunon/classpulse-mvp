angular.module('classPulse.services', [])

.factory('Auth', function() {
  function signin() {
    return io.connect(window.location.origin);
  }

  return {
    signin: signin
  };
});
