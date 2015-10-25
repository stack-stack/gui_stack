// js for the index page
;(function(){

  angular.module('gui', [ ])
  .controller("login-Controller", function($scope, $http){
    $scope.formvalues= {
      name: "",
      password: "",
    }

    $scope.submit= function(){
    //  $http.post("https://stack-stack.herokuapp.com/members/", $scope.formvalues)
      $http.post('api/stack.json')
      .then(function (response){
        console.log(response);
      });
    };
  })
  console.log("yoyo")
    // .run(function($http, $rootScope){
    // //  $http.get('https://stack-stack.herokuapp.com/questions/show/1.json')
    //   $http.get('api/stack.json')
    //     .then(function (response){
    //       //console.log(arguments);
    //       $rootScope.questions = response.data;
    //       });
    //     });
})();
