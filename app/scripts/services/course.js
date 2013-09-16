'use strict';

angular.module('OakMwebApp')
  .factory('Course', function ($resource) {
    return $resource('api/courses');
  });

angular.module('OakMwebApp')
  .factory('Question', function ($resource, DeviceId) {
    return $resource('api/courses/:courseId/questions', null, {
      get: {
        method: 'GET',
        params: {
          deviceId: DeviceId.getId()
        }
      }
    });

  });
