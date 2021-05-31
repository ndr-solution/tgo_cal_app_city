app.controller("cfoPartials",function($scope,$rootScope,$location,$window){
    var url_path = $location.url().split("/");
    switch (url_path[1]) {
        case "cfo-game":
                $scope.headerTitle = "ประเภทแหล่ง<br/>ปล่อยก๊าซเรือนกระจก";
                $scope.classIcon = "nav-icon-home";
                $scope.headerclassTitle = "nav-tite";
            break;
        case "cfo-form-gov":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
                $scope.classIcon = "nav-icon-home-form";
                $scope.headerclassTitle = "nav-tite-result";
            break;
        case "cfo-form":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
                $scope.classIcon = "nav-icon-home-form";
                $scope.headerclassTitle = "nav-tite-result";
            break;
        case "cfo-result":
                $scope.headerTitle = "สรุป";
                $scope.classIcon = "nav-icon-home-form";
                $scope.headerclassTitle = "nav-tite-result";
            break;
        case "cfo-recommend":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
                $scope.classIcon = "nav-icon-home-form";
                $scope.headerclassTitle = "nav-tite-result";
            break;
        case "cfo-recom-type":
                $scope.headerTitle = "ระดับองค์กร (CFO)";
                $scope.classIcon = "nav-icon-home-form";
                $scope.headerclassTitle = "nav-tite-result";
            break;
        default:
            $scope.classIcon = "nav-icon-home";
            $scope.headerclassTitle = "nav-tite";
            break;
    }

});