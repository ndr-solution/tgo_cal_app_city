
app.controller("questionCtrl",function($scope,$rootScope,$location,$window){

    
    function cityNamebyPoint(val){
        if(val<13){
            return "agriculture";
        }else if(val>=13 && val<=15){
            return "residence";
        }else if(val>=16 && val<=17){
            return "travel";
        }if(val>=18 && val<=21){
            return "industry";
        }else{
            return "Can't select a city";
        }
    }

    $scope.submit = function(){

        var question = {"q1":$scope.q1,"q2":$scope.q2,"q3":$scope.q4,"q4":[{'road':$scope.road,'rail':$scope.rail,'water':$scope.water,'air':$scope.air}],"q5":$scope.q5,"q6":$scope.q6,"q7":$scope.q7};
        localStorage.setItem("question",JSON.stringify(question));

        if($scope.q2 == '4'){$scope.q2 = 3;}
        if($scope.q1 == undefined){$scope.alert1 = "warning";}
        if($scope.q2 == undefined){$scope.alert2 = "warning";}
        if($scope.q3 == undefined){$scope.alert3 = "warning";}
        
        if($scope.road == false && $scope.water == false && $scope.rail == false && $scope.air == false){
            $scope.alert4 = "warning";
        }
        if($scope.q5 == undefined){$scope.alert5 = "warning";}
        if($scope.q6 == undefined){$scope.alert6 = "warning";}
        if($scope.q7 == undefined){$scope.alert7 = "warning";}

        if($scope.road == 'true' || $scope.water == 'true'){$scope.q4 = 1;}
        if($scope.rail == 'true'){$scope.q4 = 2;}
        if($scope.air == 'true'){$scope.q4 = 3;}


        if($scope.q1 == undefined || $scope.q2 == undefined || $scope.q3 == undefined || $scope.q4 == undefined || $scope.q5 == undefined || $scope.q6 == undefined || $scope.q7 == undefined){
        }else{

            sum = parseInt($scope.q1)+parseInt($scope.q2)+parseInt($scope.q3)+parseInt($scope.q4)+parseInt($scope.q5)+parseInt($scope.q6)+parseInt($scope.q7);
            $location.path('/form/'+cityNamebyPoint(sum));
        }
        
    };
    $window.scrollTo(0,0);
});