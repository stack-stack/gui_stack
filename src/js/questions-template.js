;(function () {
  angular.module('gui-question-template', ['ngRoute'])
    .controller('QuestionCtrl', function ($scope, $http) {
      $scope.member= {
        username: "",
        profile_image: ""
      }
    })
    .config(function($routeProvider) {
      $routeProvider
        .when('https://stack-stack.herokuapp.com/members/', {
          templateUrl: 'questions-template.html',
          controller: 'QuestionCtrl';
        })
    })
    .otherwise(
      {
        template: '<div><strong>WRONG PAGE!</strong></div>'
      })
})();
