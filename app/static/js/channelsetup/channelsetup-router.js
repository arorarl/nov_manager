'use strict';

angular.module('noviga')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/channelsetups', {
        templateUrl: 'static/views/channelsetup/channelsetups.html',
        controller: 'ChannelsetupController',
        resolve:{
          resolvedChannelsetup: ['Channelsetup', function (Channelsetup) {
            return Channelsetup.query();
          }]
        }
      })
    }]);
