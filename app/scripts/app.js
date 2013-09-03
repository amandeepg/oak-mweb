'use strict';

angular.module('OakMwebApp', ['ngRoute', 'ngResource', 'ngCookies'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'MainCtrl',
        resolve: {
          courses: function(Course) {
            return Course.query().$promise;
          }
        }
      })
      .when('/courses/:courseId', {
        templateUrl: 'views/course_details.html',
        controller: 'CourseDetailCtrl',
        resolve: {
          questions: function($q, $route, Course, Question) {

            function verifyCoursePassword(pwd) {

              var verifyRequest = Course.verify({
                courseCode: $route.current.params.courseId,
                coursePassword: pwd
              });

              return verifyRequest.$promise.then(function(result) {
                // TODO(amandeepg): not sure why we need a [0] here
                if (result[0] === '1') {
                  return null;
                } else {
                  throw new Error('Incorrect password');
                }
              });
            }

            function getQuestions() {
              return Question.query({
                courseCode: $route.current.params.courseId,
                coursePassword: coursePassword
              }).$promise;
            }

            var coursePassword = window.prompt('Course password?');

            return verifyCoursePassword(coursePassword).then(getQuestions);
          }
        }
      })
      .otherwise({
        redirectTo: '/courses'
      });
  });
