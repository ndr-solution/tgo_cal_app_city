var app = angular.module('ghg_city', ['ngRoute','ngResource','ngSanitize','ngMessages']);

app.config(function($routeProvider,$locationProvider,$compileProvider){
  $compileProvider.debugInfoEnabled(false);
  $routeProvider
    .when("/",{
      templateUrl : "home.html",
      controller : 'homeInit'
    })
    .when("/question",{
      templateUrl : "question.html",
      controller : 'questionInit'
    })
    .when("/form/:citytype",{
      templateUrl : "form.html",
      controller : 'formInit'
    })
    .when("/result/:citytype",{
      templateUrl : "result.html",
      controller : 'resultInit'
    })
    .when("/recommend/:citytype",{
      templateUrl : "recommend.html",
      controller : 'recommendInit'
    })
    .when("/recommendindustry",{
      templateUrl : "recommend-industry.html",
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

});
app.controller('homeInit',function(connect_api){
  var coff_server = connect_api.getcoff();
});
app.controller('questionInit',function(){});
app.controller('formInit',function(){});
app.controller('resultInit',function(){});
app.controller('recommendInit',function(){});
