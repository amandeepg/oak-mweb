'use strict';

angular.module('OakMwebApp')
  .controller('MainCtrl', function ($scope, Course) {
    $scope.courses = Course.query();

    $scope.addCourse = function(){
      window.alert('blah');
    };
  });
