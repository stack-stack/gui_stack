;(function(){

 angular.module('gui', [ ])
   .run(function($http, $rootScope){

     $http.get('/api/stack.json')
       .then(function (response){
        //  $rootScope.login = response.data.login;
         $rootScope.login = response.data;
       })
   })

   .run(function($http, $rootScope){
     $http.get('/api/stack.json')
       .then(function (response){
        //  $rootScope.login = response.data.login;
         $rootScope.body = response.data;
       })
     })
   })(); //END IIFE
