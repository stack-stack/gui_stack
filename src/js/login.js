// // js for the index page
// ;(function(){
//
//   angular.module('gui', [ ])
//   .controller("login-Controller", function($scope, $http){
//     $scope.formvalues= {
//       name: "",
//       password: "",
//     }
//     $scope.submit= function(){
//       $http.post("https://stack-stack.herokuapp.com/members/", $scope.formvalues)
//       .then(function (response){
//         console.log("can you hear me? please god hear me",response);
//       });
//     };
//   })
//     .run(function($http, $rootScope){
//       $http.get('https://stack-stack.herokuapp.com/questions/show/1.json')
//       // $http.get('../questions.json')
//         .then(function (response){
//           console.log(arguments);
//           $rootScope.questions = response.data;
//           });
//         });
// })(); //END IIFE

// ;(function(){
//   angular.module('gui', [ ])
//
//
//   main.directive('login', function(){
//     return {
//       templateUrl: 'login-page.html'
//     };
//
//     login.controller("LoginController", function(){
//
//     })
//   })
// })(); //END IIFE
