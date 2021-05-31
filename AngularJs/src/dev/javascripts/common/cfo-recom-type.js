app.controller("cfoRecomType",function($scope,$rootScope,$location,$window,$routeParams,cfoPDF){
    
    var type = $routeParams.type;
    $scope.disP = type;
    
    $scope.createPDF = function(){  
        PDFhtml = cfoPDF.getPage();
        console.log("PDFhtml:",PDFhtml);
        document.addEventListener("deviceready", onDeviceReady, false);
          function onDeviceReady() {
              let options = {
                        documentSize: 'A4',
                        type: 'share',
                        fileName: "cfo-test"
                      };
            pdf.fromData(PDFhtml, options).then(cordova.plugins.email.open()).catch((err)=>console.err(err));
        }
    };
});