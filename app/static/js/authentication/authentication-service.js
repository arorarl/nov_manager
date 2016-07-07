angular.module('noviga').factory('AuthService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    // create user variable
    var user = null;

    return ({
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      register: register,
      getStatus: getStatus,
    });


  function login(username, password) {

    // create a new instance of deferred
    var deferred = $q.defer();

    // send a post request to the server
    $http.post('/noviga/login', {username: username, password: password})
    // handle success
    .success(function (data, status) {
      if(status === 200 && data.result){
        user = true;
        deferred.resolve();
      } else {
        user = false;
        deferred.reject();
      }
    })
    // handle error
    .error(function (data) {
      user = false;
      deferred.reject();
    });

    // return promise object
    return deferred.promise;
  };

  function logout() {

    var deferred = $q.defer();

    $http.get('noviga/logout')
    .success(function(){
      user = false;
      deferred.resolve();
    })
    .error(function(){
      user = false;
      deferred.reject();
    })

    return deferred.promise;
  }

  function getStatus() {

     var deferred = $q.defer();

     $http.get('noviga/status')
     .success(function (data) {
        if (data.status == True) {
          user = true;
          deferred.resolve();
        } else {
          user = false;
          deferred.reject();
        }
     })
     .error(function (data) {
        user = false;
        deferred.reject();
     })

    return deferred.promise;
  }

  function register(username, password, email) {

     var deferred = $q.defer();

     $http.post('noviga/register', {username: username, password: password, email: email})
     .success(function (data, status) {
        if (status === 200 && data.result) {
          user = true;
          deferred.resolve();
        } else {
          user = false;
          deferred.reject();
        }
     })
     .error(function (data) {
        user = false;
        deferred.reject();
     })

    return deferred.promise;
  }

  function isLoggedIn() {

    if (user == true) {
      return true;
    } else {
      return false;
    }
  }

}]);