app.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
                }
            });
    };
});

app.controller("cfoFormGov",function($scope,$rootScope,$location,$window){

    $scope.province_names = [
        'กรุงเทพฯ',
        'กระบี่',
        'กาญจนบุรี',
        'กาฬสินธุ์',
        'กำแพงเพชร',
        'ขอนแก่น',
        'จันทบุรี',
        'ฉะเชิงเทรา',
        'ชลบุรี',
        'ชัยนาท',
        'ชัยภูมิ',
        'ชุมพร',
        'เชียงใหม่',
        'เชียงราย',
        'ตรัง',
        'ตราด',
        'ตาก',
        'นครนายก',
        'นครปฐม',
        'นครพนม',
        'นครราชสีมา',
        'นครศรีธรรมราช',
        'นครสวรรค์',
        'นนทบุรี',
        'นราธิวาส',
        'น่าน',
        'บึงกาฬ',
        'บุรีรัมย์',
        'ปทุมธานี',
        'ประจวบคีรีขันธ์',
        'ปราจีนบุรี',
        'ปัตตานี',
        'พระนครศรีอยุธยา',
        'พะเยา',
        'พังงา',
        'พัทลุง',
        'พิจิตร',
        'พิษณุโลก',
        'เพชรบุรี',
        'เพชรบูรณ์',
        'แพร่',
        'ภูเก็ต',
        'มหาสารคาม',
        'มุกดาหาร',
        'แม่ฮ่องสอน',
        'ยโสธร',
        'ยะลา',
        'ร้อยเอ็ด',
        'ระนอง',
        'ระยอง',
        'ราชบุรี',
        'ลพบุรี',
        'ลำปาง',
        'ลำพูน',
        'เลย',
        'ศรีสะเกษ',
        'สกลนคร',
        'สงขลา',
        'สตูล',
        'สมุทรปราการ',
        'สมุทรสงคราม',
        'สมุทรสาคร',
        'สระแก้ว',
        'สระบุรี',
        'สิงห์บุรี',
        'สุโขทัย',
        'สุพรรณบุรี',
        'สุราษฎร์ธานี',
        'สุรินทร์',
        'หนองคาย',
        'หนองบัวลำภู',
        'อ่างทอง',
        'อำนาจเจริญ',
        'อุดรธานี',
        'อุตรดิตถ์',
        'อุทัยธานี',
        'อุบลราชธานี',
    ];
    // special = ปกครองพิเศษ
    // state = นคร
    // city = เมือง
    // district = ตำบล
    $scope.formGov = function(gov){
        switch (gov) {
            case "special":
                    $scope.titleGov = "องค์กรปกครองส่วนท้องถิ่น รูปแบบพิเศษ";
                    $scope.titleForm = "เมือง";
                break;
            case "state":
                    $scope.titleGov = "เทศบาลนคร";
                    $scope.titleForm = "เทศบาลนคร";

                break;
            case "city":
                    $scope.titleGov = "เทศบาลเมือง";
                    $scope.titleForm = "เทศบาลเมือง";
                break;
            case "district":
                    $scope.titleGov = "เทศบาลตำบล";
                    $scope.titleForm = "เทศบาลตำบล";
                break;
            default:
                break;
        }
        $scope.cityType = gov;
        $('#cfoFormGovModal').modal('show');
    };

    $scope.submitGov = function(){
        var cityType = $scope.cityType;
        var ObjFormGov = { 'province': $scope.province, 'city': $scope.city, 'cityType': $scope.cityType };
        localStorage.setItem('formGov', JSON.stringify(ObjFormGov));
        $window.location.href = '#/cfo-form/'+cityType;
    };

    
});