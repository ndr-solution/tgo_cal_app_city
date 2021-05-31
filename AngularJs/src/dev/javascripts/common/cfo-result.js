app.controller("cfoResult",function($scope,$rootScope,$location,$window,cfoPDF){
    
    
    $scope.gov = JSON.parse(localStorage.getItem('formGov'));
    // console.log("$scope.gov:",$scope.gov);
    nameCityType($scope.gov.cityType); 
    // special = ปกครองพิเศษ, state = นคร, city = เมือง, district = ตำบล
    function nameCityType(type){
        if(type == "special"){
            $scope.cityType = "เมือง";
        }
        if(type == "state"){
            $scope.cityType = "เทศบาลนคร";
        }
        if(type == "city"){
            $scope.cityType = "เทศบาลเมือง";
        }
        if(type == "district"){
            $scope.cityType = "เทศบาลตำบล";
        }
    }

    var fuel = JSON.parse(localStorage.getItem('fuel_cst'));
    var LPG = JSON.parse(localStorage.getItem('lpg_cst'));
    var egs_air_ftz = JSON.parse(localStorage.getItem('egs_air_ftz_cst'));
    var septicTanks = JSON.parse(localStorage.getItem('st_tanks_cst'));
    var energy = JSON.parse(localStorage.getItem('eng_cst'));
    var water = JSON.parse(localStorage.getItem('water_cst'));
    var paper = JSON.parse(localStorage.getItem('paper_cst'));
    var waste = JSON.parse(localStorage.getItem('wst_cst'));
    var garbage1 =  JSON.parse(localStorage.getItem('garbageT1_cst'));
    var garbage3 = JSON.parse(localStorage.getItem('garbageT3_cst'));
    var tree = JSON.parse(localStorage.getItem('tree_cst'));
    $scope.ghg_tree = tree;
    $scope.ghg_tree_total = (tree.tree.ghg_t_co + tree.mgr_frs.ghg_t_co ) + (tree.palm.ghg_t_co + tree.vine.ghg_t_co ); 
    $scope.ghgTotal = (fuel.total + LPG.total) + (egs_air_ftz.total + septicTanks.total) + (energy.total + water.total) + (paper.total + waste.total) + (garbage1.total + garbage3.total) + tree.total;

    console.log("tree:",tree.total);
    console.log("$scope.ghg_tree_total:",$scope.ghg_tree_total);

    var ghgType1 = (fuel.total + LPG.total) + (egs_air_ftz.total + septicTanks.total) + (garbage1.total) + (waste.total);
    var ghgType2 = (energy.total);
    var ghgType3 = (water.total + paper.total) + (garbage1.total);
    
    // Create the chart
    Highcharts.chart('dcontainer', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                useHTML: true,
                enabled: true,
                text: '<b>tCO<sub>2</sub>eq/ปี</b>'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                // borderWidth: 0,
                pointWidth: 40,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} tCO <sub>2<sub> eq/ปี</b><br/>'
        },
        credits: {
            enabled: false
       },
        series: [
            {
                name: "",
                colorByPoint: true,
                data: [
                    {
                        name: "ประเภทที่ 1",
                        y: ghgType1,
                    },
                    {
                        name: "ประเภทที่ 2",
                        y: ghgType2,
                    },
                    {
                        name: "ประเภทที่ 3",
                        y: ghgType3,
                    },
                    {
                        name: "อื่นๆ",
                        y: tree.total,
                    },
                ]
            }
        ],
    });


    $scope.createPDF = function(){  
        PDFhtml = cfoPDF.getPage();
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