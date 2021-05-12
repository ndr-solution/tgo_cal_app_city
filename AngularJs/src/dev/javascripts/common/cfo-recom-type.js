app.controller("cfoRecomType",function($scope,$rootScope,$location,$window,$routeParams){
    
    var type = $routeParams.type;
    console.log("type:",type );
    $scope.disP = type;
    

});