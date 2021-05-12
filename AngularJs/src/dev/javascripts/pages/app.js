var app = angular.module('ghg_city', ['ngRoute','ngResource','ngSanitize','ngMessages','ngAnimate']);

app.config(function($routeProvider,$locationProvider,$compileProvider){
  $compileProvider.debugInfoEnabled(false);
  $routeProvider
    .when("/",{
      templateUrl : "cfo-home.html",
      controller : 'cfoHomeInit'
    })
    .when("/cfo-game",{
      templateUrl : "cfo-game.html",
      controller : 'cfoGameInit'
    })
    .when("/cfo-form-gov",{
      templateUrl : "cfo-form-gov.html",
      controller : 'cfoFormGovInit'
    })
    .when("/cfo-form/:citytype",{
      templateUrl : "cfo-form.html",
      controller : 'cfoFormInit'
    })
    .when("/cfo-result",{
      templateUrl : "cfo-result.html",
      controller : 'cfoResultInit'
    })
    .when("/cfo-recommend",{
      templateUrl : "cfo-recommend.html",
      // controller : 'cfoRecommendInit'
    })
    .when("/cfo-recom-type/:type",{
      templateUrl : "cfo-recom-type.html",
      // controller : 'cfoRecommenTypedInit'
    })

    // App city
    .when("/home",{
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
app.controller('homeInit',function(connect_api){ var coff_server = connect_api.getcoff(); });
app.controller('questionInit',function(){});
app.controller('formInit',function(){});
app.controller('resultInit',function(){});
app.controller('recommendInit',function(){});

app.controller('cfoHomeInit',function(){});
app.controller('cfoGameInit',function(){});
app.controller('cfoFormGovInit',function(){});
app.controller('cfoFormInit',function(){});
app.controller('cfoResultInit',function(){});

