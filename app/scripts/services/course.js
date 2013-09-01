'use strict';

angular.module('OakMwebApp')
  // TODO(amandeepg): Change to CRUD when server supports it.
  .factory('Course', function ($resource) {
    // Using hack (:courseApiEndpoint), until server supports CRUD
    return $resource('api/:courseApiEndpoint', null, {
      query: {
        method: 'GET',
        params: {
          courseApiEndpoint: 'CourseList',
          password: 'EngSci'
        },
      },
      save: {
        method: 'POST',
        params: {
          courseApiEndpoint: 'AddCourse'
        },
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        transformRequest: function(data) {
          return jQuery.param(data);
        }
      },
    });

  });
