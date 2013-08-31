'use strict';

angular.module('OakMwebApp')
  .factory('Course', function ($resource) {

    return $resource('api/CourseList', null, {
      query: { method:'GET', params:{ password: 'EngSci' } }
    });

  });
