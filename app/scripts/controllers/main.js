'use strict';

angular.module('OakMwebApp')
  .controller('MainCtrl', function ($scope, Course, courses) {
    $scope.courses = courses;

    $scope.addCourse = function() {
      var courseCode = window.prompt('Course code?');
      var coursePassword = window.prompt('Course password?');
      Course.save({
        courseCode: courseCode,
        coursePassword: coursePassword
      }, function() {
        $scope.courses = Course.query();
      });
    };
  });
