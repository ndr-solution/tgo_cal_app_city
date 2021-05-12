app.controller("cfoRecommend",function($scope,$rootScope,$location,$window){

    var energy = JSON.parse(localStorage.getItem('eng_cst'));
    var fuel = JSON.parse(localStorage.getItem('fuel_cst'));
    var tree = JSON.parse(localStorage.getItem('tree_cst'));
    var garbage1 =  JSON.parse(localStorage.getItem('garbageT1_cst'));
    var garbage3 = JSON.parse(localStorage.getItem('garbageT3_cst'));
    var garbage = (garbage1.total + garbage3.total);

    console.log("energy:",energy.total);
    console.log("garbage:",garbage);
    console.log("fuel:",fuel.total);
    console.log("tree:",tree.total);

    var objArray = [
        { "x": "energy", "y": energy.total },
        { "x": "garbage", "y": garbage },
        { "x": "fuel", "y": fuel.total },
        { "x": "tree", "y": tree.total },
    ];
    $scope.max_value = objArray.reduce((prev, current) => (prev.y > current.y) ? prev : current);



});