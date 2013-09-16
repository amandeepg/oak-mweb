'use strict';

angular.module('OakMwebApp')
  .controller('CourseDetailsCtrl', function ($scope, questionsResponse) {

    var onQuestionsLoaded = function(response) {
      $scope.questions = response.questions;
    };

    onQuestionsLoaded(questionsResponse);
  });
