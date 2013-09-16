'use strict';

angular.module('OakMwebApp', ['ngRoute', 'ngResource', 'ngCookies'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl',
        resolve: {
          coursesResponse: function(Course) {
            return Course.get().$promise;
          }
        }
      })
      .when('/courses/:courseId', {
        templateUrl: 'views/course_details.html',
        controller: 'CourseDetailsCtrl',
        resolve: {
          questionsResponse: function($q, $route, Question) {

            function getQuestions(coursePassword) {
              return Question.get({
                courseId: $route.current.params.courseId,
                coursePassword: coursePassword
              }).$promise;
            }

            var coursePassword = window.prompt('Course password?');

            return getQuestions(coursePassword)
              .catch(function(error) {
                if (error.hasOwnProperty('status') && error.status === 401) {
                  window.alert('Incorrect password!');
                  throw new Error('Incorrect password');
                }
              });
          }
        }
      })
      .otherwise({
        redirectTo: '/courses'
      });
  });
