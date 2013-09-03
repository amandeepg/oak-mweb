'use strict';

angular.module('OakMwebApp')
  .controller('CourseDetailCtrl', function ($scope, questions) {
    $scope.questions = jQuery.merge(questions.questions, questions.topVotedQuestion);
  });
