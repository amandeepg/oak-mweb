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
          questionsResponse: function($route, Question) {
            $route.current.params.coursePassword = window.prompt('Course password?');

            return Question.get().$promise
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
