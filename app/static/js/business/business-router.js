'use strict';

angular.module('noviga')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/businesses', {
        templateUrl: 'static/views/business/businesses.html',
        controller: 'BusinessController',
        resolve:{
          resolvedBusiness: ['Business', function (Business) {
            return Business.query();
          }]
        }
      })
    }]);
