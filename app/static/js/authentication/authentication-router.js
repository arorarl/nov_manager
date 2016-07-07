
angular.module('noviga')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'static/views/authentication/login.html',
        controller: 'loginController'
      })
      .when('/logout', {
        controller: 'logoutController'
      })
      .when('/register', {
        templateUrl: 'static/views/authentication/register.html',
        controller: 'registerController'
      })
      .when('/loggedOut', {
        template: "<h1> You are logged out in Angular but not in Flask </h1>",
    })
    }]);