app.controller("cfoPartials",function($scope,$rootScope,$location,$window){
    var url_path = $location.url().split("/");
    switch (url_path[1]) {
        case "cfo-game":
                $scope.headerTitle = "ประเภทแหล่ง<br/>ปล่อยก๊าซเรือนกระจก";
            break;
        case "cfo-form-gov":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
            break;
        case "cfo-form":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
            break;
        case "cfo-result":
                $scope.headerTitle = "สรุป";
            break;
        case "cfo-recommend":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
            break;
        case "cfo-recom-type":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
            break;
        default:
            break;
    }

});