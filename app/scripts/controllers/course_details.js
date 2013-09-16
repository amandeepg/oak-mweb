'use strict';

angular.module('OakMwebApp')
  .controller('CourseDetailsCtrl', function ($scope, questionsResponse) {

    function onQuestionsLoaded(response) {
      $scope.questions = response.questions;
    }

    onQuestionsLoaded(questionsResponse);
  });
