app.controller("cfoPartials",function($scope,$rootScope,$location,$window){
    var url_path = $location.url().split("/");
    // console.log("url_path:",url_path[1]);
    switch (url_path[1]) {
        case "cfo-game":
                $scope.headerTitle = "ประเภทแหล่ง<br/>ปล่อยก๊าซเรื่องกระจก";
            break;
        case "cfo-form-gov":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
            break;
        case "cfo-form":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
            break;
        default:
            break;
    }

});