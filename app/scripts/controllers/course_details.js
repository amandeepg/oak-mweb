'use strict';

angular.module('OakMwebApp')
  .controller('CourseDetailsCtrl', function ($scope, questions) {
    $scope.questions = jQuery.merge(questions.questions, questions.topVotedQuestion);
  });
