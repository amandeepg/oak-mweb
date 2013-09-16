'use strict';

angular.module('OakMwebApp')
  .controller('CourseDetailsCtrl', function ($scope, Question, questionsResponse) {

    var onQuestionsLoaded = function(response) {
      $scope.questions = response.questions;
    };

    var reloadQuestions = function() {
      Question.get().$promise.then(onQuestionsLoaded);
    };

    $scope.addQuestion = function() {
      var questionText = window.prompt('Question text?');
      var params = {
        question: questionText
      };
      Question.save(params, reloadQuestions);
    };

    onQuestionsLoaded(questionsResponse);
  });
