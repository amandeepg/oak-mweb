'use strict';

angular.module('OakMwebApp')
  .factory('DeviceId', function($cookies) {
    return {
      getId: function() {
        if ($cookies.deviceId) {
          return $cookies.deviceId;
        } else {
          var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            /* jshint bitwise: false */
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            /* jshint bitwise: true */
            return v.toString(16);
          });
          $cookies.deviceId = id;
          return id;
        }

      }
    };
  });
