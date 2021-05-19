app.controller("cfoGame", function ($scope, $rootScope, $location, $window) {

    // ['Name Images',['score','score','score','score']]
    $scope.imgArray = [
        ['cfo_scope1.PNG', [1]],
        ['cfo_scope2.PNG', [1]],
        ['cfo_scope3.PNG', [1]],
        ['cfo_scope4.PNG', [1]],
        ['cfo_scope5.PNG', [1]],
        ['cfo_scope6.PNG', [1]],
        ['cfo_scope7.PNG', [1]],
        ['cfo_scope8.PNG', [1]],
        ['cfo_scope9.PNG', [1]],
        ['cfo_scope10.PNG', [1]],
        ['cfo_scope11.PNG', [2]],
        ['cfo_scope12.PNG', [2]],
        ['cfo_scope13.PNG', [3]],
        ['cfo_scope14.PNG', [3]],
        ['cfo_scope15.PNG', [3]],
    ];

    $scope.numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    rundomImages();
    function rundomImages(imp_no) {
        var numberArray = $scope.numberArray;
        var randomNumber;
        randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
        if (imp_no) {
            $scope.imgNumber = imp_no;
            for (var j = 0; j < numberArray.length; j++) {
                if (numberArray[j] === imp_no) {
                    numberArray.splice(j, 1);
                }
            }
        } else {
            $scope.imgNumber = randomNumber;
            for (var i = 0; i < numberArray.length; i++) {
                if (numberArray[i] === randomNumber) {
                    numberArray.splice(i, 1);
                }
            }
        }
        
    }

    $scope.counter = 0;
    $scope.answer = [];
    $scope.totalScore = 0;
    $scope.btnDisplay = false;
    $scope.answerQuestion = function (quest, answer) {

        var questImg = $scope.imgArray[quest][0];
        var answerInQuest = $scope.imgArray[quest][1][0];
        var answerNum = $scope.imgNumber;

        $scope.counter += 1;
        if ($scope.counter <= 5) {

            if (answer == answerInQuest) {
                $scope.totalScore += 1;
                $scope.answer.push({ "img_name": questImg, "score": 1, "answer": 'ประเภทที่' + answerInQuest, "imp_no": answerNum });
            } else {
                $scope.totalScore += 0;
                $scope.answer.push({ "img_name": questImg, "score": 0, "answer": 'ประเภทที่' + answerInQuest, "imp_no": answerNum });
            }
        }

        if ($scope.counter == 5) {
            $scope.btnDisplay = true;
            $('#cfoTotalScoreModal').modal('show');
        }

        rundomImages();
        var gameAnswer = $scope.answer;
        localStorage.setItem('gameAnswer', JSON.stringify(gameAnswer));
    };

    $scope.prevAns = function () {
        var impNo = $scope.answer[$scope.answer.length-1].imp_no;
        $scope.numberArray.push(impNo);
        $scope.numberArray.push( $scope.imgNumber);
        rundomImages(impNo); 
         $scope.answer.splice(-1, 1);
         $scope.counter -=1; 

    };

    $scope.infoGameModal = function (type) {
        $scope.infoType = type;
        if (type == 1) {
            $scope.infoContent = "การปล่อยก๊าซเรือนกระจก<br/>ทางตรงขององค์กร";
        } else if (type == 2) {
            $scope.infoContent = "การปล่อยก๊าซเรือนกระจก<br/>ทางอ้อมจากการใช้พลังงานไฟฟ้า";
        } else {
            $scope.infoContent = "การปล่อยก๊าซเรือนกระจก<br/>ทางอ้อมอื่นๆ นอกเหนือจาก<br/>ที่ระบุในประเภทที่ 1 และประเภทที่ 2";
        }
        $('#cfoGameModal').modal('show');
    };



    $scope.answerInfoDisplay = false;
    $scope.answerInfo = function (answer) {
        $scope.answerInfoDisplay = answer;
    };

    $scope.reloadRoute = function () {
        location.reload();
    };


});