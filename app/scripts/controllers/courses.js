'use strict';

angular.module('OakMwebApp')
  .controller('CoursesCtrl', function ($scope, Course, coursesResponse) {

    var onCoursesLoaded = function(response) {
      $scope.courses = response.courses;
    };

    var reloadCourses = function() {
      Course.get().$promise.then(onCoursesLoaded);
    };

    var addCourse = function() {
      var courseCode = window.prompt('Course code?');
      var coursePassword = window.prompt('Course password?');

      var params = {
        courseCode: courseCode,
        coursePassword: coursePassword
      };
      Course.save(params, reloadCourses);
    };

    onCoursesLoaded(coursesResponse);
    $scope.identity = angular.identity;
    $scope.addCourse = addCourse;

  });
