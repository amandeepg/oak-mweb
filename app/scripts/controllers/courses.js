'use strict';

angular.module('OakMwebApp')
  .controller('CoursesCtrl', function ($scope, Course, coursesResponse) {

    function onCoursesLoaded(response) {
      $scope.courses = response.courses;
    }

    function reloadCourses() {
      Course.get().$promise.then(onCoursesLoaded);
    }

    function addCourse() {
      var courseCode = window.prompt('Course code?');
      var coursePassword = window.prompt('Course password?');

      var params = {
        courseCode: courseCode,
        coursePassword: coursePassword
      };
      Course.save(params, reloadCourses);
    }

    onCoursesLoaded(coursesResponse);
    $scope.identity = angular.identity;
    $scope.addCourse = addCourse;

  });
