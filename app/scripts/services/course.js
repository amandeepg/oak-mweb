'use strict';

angular.module('OakMwebApp')
  .factory('Course', function ($resource) {
    return $resource('api/courses');
  });

angular.module('OakMwebApp')
  .factory('Question', function ($resource, $route, DeviceId) {
    return $resource('api/courses/:courseId/questions?deviceId=:deviceId&coursePassword=:coursePassword', {
      deviceId: DeviceId.getId(),
      courseId: function() { return $route.current.params.courseId; },
      coursePassword: function() { return $route.current.params.coursePassword; },
    }, null);

  });
