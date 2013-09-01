'use strict';

angular.module('OakMwebApp', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          courses: function(Course) {
            return Course.query().$promise;
          }
        },
      })
      .otherwise({
        redirectTo: '/'
      });
  });
