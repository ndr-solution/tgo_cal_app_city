app.factory('ratings', function () {
  return {
    get: function (rate) {
      var grade;
      if (rate >= 0.00 && rate <= 0.70 || rate == "A+") {
        grade = { "grade": "A+", "color": "#567B37", "indicator": 0.70, "title": "ดีเลิศ" };
      } else if (rate >= 0.71 && rate <= 0.90 || rate == "A") {
        grade = { "grade": "A", "color": "#9ACB48", "indicator": 0.90, "title": "ดีมาก" };
      } else if (rate >= 0.91 && rate <= 0.99 || rate == "B") {
        grade = { "grade": "B", "color": "#EEC15B", "indicator": 0.99, "title": "ดี" };
      } else if (rate >= 1.00 && rate <= 1.20 || rate == "C") {
        grade = { "grade": "C", "color": "#EB9A60", "indicator": 1.20, "title": "พอใช้" };
      } else if (rate >= 1.21 && rate <= 1.60 || rate == "D") {
        grade = { "grade": "D", "color": "#E48873", "indicator": 1.60, "title": "ควรปรับปรุง" };
      } else if (rate >= 1.61 && rate <= 1.99 || rate == "E") {
        grade = { "grade": "E", "color": "#CC5F50", "indicator": 1.90, "title": "ควรปรับปรุงอย่างยิ่ง" };
      } else if (rate >= 2.00 || rate == "F") {
        grade = { "grade": "F", "color": "#A5463E", "indicator": 2.00, "title": "ควรปรับปรุงอย่างเร่งด่วน" };
      } else {
        grade = { "grade": "F", "color": "#A5463E", "indicator": 2.00, "title": "ควรปรับปรุงอย่างเร่งด่วน" };
      }
      return grade;
    }
  };
});
app.factory("calcIndex", function ($filter) {
  return {
    result: function (gasRael, gasRef) {
      result = (gasRael / gasRef);
      return Math.round(result * 100) / 100;
    }
  };

});
app.factory('potentialGHG', function ($filter) {
  return {
    result: function (gasRael, cityIndex, targetIndex) {
      precent = ((cityIndex - targetIndex) / cityIndex) * 100;
      lowGHG = (gasRael * (precent / 100));
      precent = Math.round(precent * 100) / 100;
      lowGHG = Math.round(lowGHG * 100) / 100;
      return { "precent": precent, "lowGHG": lowGHG };
    }
  };
});

app.factory('equalOfTrees', function ($filter) {
  return {
    result: function (lowGHG) {
      ofTrees = lowGHG / 0.0095;
      ofTrees = Math.ceil(ofTrees);
      return ofTrees;
    }
  };
});

app.factory('proportionGHG', function () {
  return {
    getbyRef: function (gasRef, citytype) {
      var prt_default = {
        "industry": [30.04, 3.63, 38.22, 27.25, 0.86],
        "travel": [26.73, 3.67, 34.98, 33.58, 1.04],
        "residence": [25.18, 4.33, 37.74, 31.57, 1.18],
        "agriculture": [26.67, 4.51, 39.86, 27.90, 1.06]
      };

      var prt = prt_default[citytype];
      var energy = gasRef * prt[0] / 100;
      var burn = gasRef * prt[1] / 100;
      var transport = gasRef * prt[2] / 100;
      var garbage = gasRef * prt[3] / 100;
      var water = gasRef * prt[4] / 100;

      var result = {
        "gasRef": [{ "gasRef": gasRef, "precent": 100 }],
        "energy": [{ "energy": energy, "precent": prt[0] }],
        "burn": [{ "burn": burn, "precent": prt[1] }],
        "transport": [{ "transport": transport, "precent": prt[2] }],
        "garbage": [{ "garbage": garbage, "precent": prt[3] }],
        "water": [{ "water": water, "precent": prt[4] }]
      };
      return result;
    },
    getbyReal: function (gasReal, energy, burn, transport, garbage, water) {
      if (energy == undefined || energy == 0 || energy == null) {
        energyPrecent = 0;
      } else {
        energyPrecent = energy * 100 / gasReal;
      }
      if (burn == undefined || burn == 0 || burn == null) {
        burnPrecent = 0;
      } else {
        burnPrecent = burn * 100 / gasReal;
      }
      if (transport == undefined || transport == 0 || transport == null) {
        transportPrecent = 0;
      } else {
        transportPrecent = transport * 100 / gasReal;
      }
      if (garbage == undefined || garbage == 0 || garbage == null) {
        garbagePrecent = 0;
      } else {
        garbagePrecent = garbage * 100 / gasReal;
      }
      if (water == undefined || water == 0 || water == null) {
        waterPrecent = 0;
      } else {
        waterPrecent = water * 100 / gasReal;
      }
      var result = {
        "gasReal": [{ "gasReal": gasReal, "precent": 100 }],
        "energy": [{ "energy": energy, "precent": energyPrecent }],
        "burn": [{ "burn": burn, "precent": burnPrecent }],
        "transport": [{ "transport": transport, "precent": transportPrecent }],
        "garbage": [{ "garbage": garbage, "precent": garbagePrecent }],
        "water": [{ "water": water, "precent": waterPrecent }]
      };
      return result;
    }
  };
});

app.controller("resultCtrl", function ($scope, $rootScope, $routeParams,$window,ratings, calcIndex, $location, potentialGHG, equalOfTrees, convertText, proportionGHG, saveTostorage, genPdf) {
  citytype = $routeParams.citytype;
  $scope.imgcitytype = citytype;
  $scope.citytype = convertText.th(citytype);
  var dataStroage = JSON.parse(localStorage.getItem(citytype));
  $scope.dataStroage = dataStroage;


  $scope.cityIndex = calcIndex.result(dataStroage.gasreal, dataStroage.gasrefer);
  $scope.ratings = ratings.get($scope.cityIndex);

  $scope.proportion = proportionGHG.getbyRef(dataStroage.gasrefer, dataStroage.citytype);
  $scope.eventype = proportionGHG.getbyReal(dataStroage.gasreal, dataStroage.energy, dataStroage.burn, dataStroage.transport, dataStroage.garbage, dataStroage.water);
  data = {
    "res_citytype": citytype,
    "res_cityIndex": $scope.cityIndex,
    "res_ratings": $scope.ratings,
    "res_proportion": $scope.proportion,
    "res_eventype": $scope.eventype,
  };
  saveTostorage.save("result", data);
  $scope.lowGHG = potentialGHG.result(dataStroage.gasreal, $scope.cityIndex, ratings.get('A+').indicator);
  $scope.ofTrees = equalOfTrees.result($scope.lowGHG.lowGHG);

  if (dataStroage.gasreal > dataStroage.gasrefer) {
    $scope.gasreal_precent = '100%';
    gasrefer_width = (dataStroage.gasrefer * 100) / dataStroage.gasreal;
    $scope.gasrefer_precent = gasrefer_width + '%';
  } else if (dataStroage.gasrefer > dataStroage.gasreal) {
    console.log("อ้างอิงมากกว่า");
    $scope.gasrefer_precent = '100%';
    gasreal_width = (dataStroage.gasreal * 100) / dataStroage.gasrefer;
    $scope.gasreal_precent = gasreal_width + '%';
  } else if (dataStroage.gasreal == dataStroage.gasrefer) {
    $scope.gasrefer_precent = "100%";
    $scope.gasreal_precent = "100%";
  }
  $('#gasRefer').animate({ width: $scope.gasrefer_precent }, 1000);
  $('#gasReal').animate({ width: $scope.gasreal_precent }, 1000);



  $scope.createPDF = function(){
    function padx(c){return (c < 10) ? '0'+c.toString() : c.toString();}
    var d = new Date();
    var month = padx(d.getMonth()+1);
    var date = d.getFullYear()+month+padx(d.getDate());
    var time = padx(d.getHours())+padx(d.getMinutes())+padx(d.getSeconds());


    PDFhtml = genPdf.getPage("result",citytype);
    document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
          let options = {
                    documentSize: 'A4',
                    type: 'share',
                    fileName: citytype+"-"+date+"-"+time
                  };
        pdf.fromData(PDFhtml, options).then(cordova.plugins.email.open()).catch((err)=>console.err(err));
      }
  };
  $window.scrollTo(0,0);
});