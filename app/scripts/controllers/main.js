'use strict';

angular.module('OakMwebApp')
  .controller('MainCtrl', function ($scope, Course, courses) {
    $scope.courses = courses;

    $scope.addCourse = function() {
      var courseCode = window.prompt('Course code?');
      var coursePassword = window.prompt('Course password?');
      Course.save({
        // Using hack of password in POST until server supports real auth.
        // TODO(amandeepg): fix above hack
        password: 'EngSci',
        courseCode: courseCode,
        coursePassword: coursePassword
      }, function() {
        $scope.courses = Course.query();
      });
    };
  });
