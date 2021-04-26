app.controller('formCtrl',function($scope,$routeParams,$window,convertText){
    $scope.citytype = convertText.th($routeParams.citytype);
    $scope.form_citytype = $routeParams.citytype;
    
    $scope.clearfrom = function(form){
        var r = confirm("ต้องการลบข้อมูล!!");
        if (r == true) {
          localStorage.removeItem(form);
          location.reload();
        } else {
        }
      };
      $window.scrollTo(0,0);
});