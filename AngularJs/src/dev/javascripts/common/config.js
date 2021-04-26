app.factory("convertText",function(){
    return{
        th: function(val){
            var textTh;
            switch (val) {
                case "industry":
                textTh = "เมืองอุตสาหกรรม";
                    break;
                case "travel":
                textTh = "เมืองท่องเที่ยว";
                    break;
                case "residence":
                textTh = "เมืองที่อยู่อาศัย";
                    break;
                case "agriculture":
                textTh = "เมืองเกษตรกรรม";
                    break;
                default:
                    break;
            }
        return textTh;
        }
    };

});