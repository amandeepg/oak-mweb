'use strict';

// TODO(amandeepg): Change to CRUD when server supports it.

angular.module('OakMwebApp')
  .factory('Course', function ($resource) {

    // Using hack of password in POST until server supports real auth.
    // TODO(amandeepg): fix above hack
    function addPassword(data) {
      return jQuery.extend({}, data, { password: 'EngSci' });
    }

    // Using hack (:courseApiEndpoint), until server supports CRUD
    return $resource('api/:courseApiEndpoint', null, {
      query: {
        method: 'GET',
        params: {
          courseApiEndpoint: 'CourseList',
          password: 'EngSci'
        }
      },
      save: {
        method: 'POST',
        params: {
          courseApiEndpoint: 'AddCourse'
        },
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        transformRequest: function(data) {
          return jQuery.param(addPassword(data));
        }
      },
      verify: {
        method: 'GET',
        params: {
          courseApiEndpoint: 'VerifyCoursePassword',
          password: 'EngSci'
        },
        isArray: false
      }
    });

  });

angular.module('OakMwebApp')
  .factory('Question', function ($resource, DeviceId) {

    // Using hack (:questionApiEndpoint), until server supports CRUD
    return $resource('api/:questionApiEndpoint', null, {
      query: {
        method: 'GET',
        params: {
          questionApiEndpoint: 'QuestionList',
          password: 'EngSci',
          deviceId: DeviceId.getId()
        }
      }
    });

  });
