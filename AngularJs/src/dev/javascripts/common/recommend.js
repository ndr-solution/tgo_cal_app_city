app.factory("showrecommend",function(){
    return{
        getResultInput: function(){
            var recomTable = [
                [1,'การติดตั้ง Solar cell <font color="red"><b>[ กำลังผลิตติดตั้ง (เมกะวัตต์)]</b></font>',934.91,'การติดตั้งแผง Solar cell ขนาด 1 MWp สามารถลดการปล่อยก๊าซเรือนกระจกได้ 934.91 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'energy'],
                [2,'การติดตั้งกังหันลม <font color="red"><b>[ ขนาดของกังหัน (เมกะวัตต์)]</b></font>',896.59,'การติดตั้งกังหันลมขนาด 1 MW สามารถลดการปล่อยก๊าซเรือนกระจกได้ 896.59 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'energy'],
                [3,'การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่างในอาคาร <font color="red"><b>[ จำนวนหลอด (หลอด)]</b></font>',0.04758,'การเปลี่ยนหลอดฟลูออเรสเซนส์ 46 W เป็นหลอด LED 18 W ที่ชั่วโมงการใช้งาน 3,000 ชม.ต่อปี สามารถลดการปล่อยก๊าซเรือนกระจกได้ 0.04758 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'energy'],
                [4,'การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง ถนน สาธารณะ <font color="red"><b>[ จำนวนหลอด (หลอด)]</b></font>',0.323,'การเปลี่ยนหลอดฟลูออเรสเซนส์ 400 W เป็นหลอด LED 210 W ที่ชั่วโมงการใช้งาน 3,000 ชม.ต่อปี สามารถลดการปล่อยก๊าซเรือนกระจกได้ 0.323 tCO<small>2</<small>eq',["industry","travel","residence","agriculture"],'energy'],
                [5,'การซ่อมแซมจุดรั่วไหลของไอน้ำ <font color="red"><b>[ จำนวนจุดรั่วไหล (จุด)]</b></font>',0.2189 ,'การซ่อมแซมจุดรั่วไหลของไอน้ำขนาดเส้นผ่านศูนย์กลาง 1 มม. สำหรับหม้อไอน้ำชั่วโมงการใช้งาน 3,000 ชม.ต่อปี สามารถลดการปล่อยก๊าซเรือนกระจกได้ 0.21891 tCO<small>2</<small>eq ต่อปี',["industry","travel"],'energy'],
                [6,'การติดตั้งโคมไฟสะท้อนแสงเพื่อลดจำนวนหลอดไฟที่ใช้งาน <font color="red"><b>[ จำนวนโคมไฟ (โคม)]</b></font>',0.054,'การติดตั้งโคมไฟสะท้อนแสงสามารถช่วยลดจำนวนหลอดไฟที่ติดตั้ง จาก 2 หลอด/โคม เป็น 1 หลอด/โคน คิดเป็นปริมาณการปล่อยก๊าซเรือนกระจก 0.054 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'energy'],
                [7,'การติดตั้งเครื่องปรับอากาศประสิทธิภาพสูงเพื่อแทนที่เครื่องปรับอากาศเดิม <font color="red"><b>[ พื้นที่ปรับอากาศ (ตร.ม.)]</b></font>',0.01596,'การติดตั้งเปลี่ยนเครื่องปรับอากาศประสิทธิภาพสูงขนาด 12,000 BTU แทนที่เครื่องเดิม สามารถลดการปล่อยก๊าซเรือนกระจกได้ 0.25537 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'energy'],
                [8,'ปรับอุณหภูมิภายในห้องปรับอากาศให้สูงขึ้น 2˚C <font color="red"><b>[ พื้นที่ปรับอากาศ (ตร.ม.)]</b></font>',0.017,'การปรับอุณหภูมิสูงขึ้น 2˚C ที่เครื่องปรับอากาศขนาด 12,000 BTU ชั่วโมงการใช้งาน 2,400 ชม.ต่อปี สามารถลดการปล่อยก๊าซเรือนกระจกได้ 0.267 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'energy'],
                [9,'การหุ้มฉนวนกันความร้อนที่ฮีตเตอร์แบบรัดท่อในเครื่องฉีดพลาสติก <font color="red"><b>[ พื้นที่ของฮีตเตอร์ (ตร.ม.)]</b></font>',2.07,'การหุ้มฉนวนขนาด 1 ตารางเมตรของฮีตเตอร์ ที่มีชั่วโมงการใช้งาน 6,000 ชม.ต่อปี สามารถลดการปล่อยก๊าซเรือนกระจกได้ 2.07 tCO<small>2</<small>eq ต่อปี',["industry"],'energy'],
                [10,'การคัดแยกขยะเพื่อการรีไซเคิล <font color="red"><b>[ ปริมาณขยะ (กก.)]</b></font>',0.0013,'การคัดแยกขยะเพื่อการรีไซเคิล 1 กิโลกรัม ประกอบด้วย กระดาษ พลาสติก อลูมิเนียม เหล็ก และแก้ว สามารถลดการปล่อยก๊าซเรือนกระจกได้ 0.001324 tCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'waste'],
                [11,'การผลิตก๊าซชีวภาพจากขยะอินทรีย์ <font color="red"><b>[ ปริมาณเศษอาหาร (กก.)]</b></font>',0.0191,'เศษอาหาร 1 กิโลกรัมในถังหมักขนาด 1 ลิตร สามารถผลิตก๊าซชีวภาพได้ 100 ลิตร และลดการปล่อยก๊าซเรือนกระจกได้ 0.0191 tCO<small>2</<small>eq ต่อปี', ["industry","travel","residence","agriculture"],'waste'],
                [12,'การผลิตปุ๋ยหมักจากขยะอินทรีย์ <font color="red"><b>[ ปริมาณขยะอินทรีย์ (กก.)]</b></font>',0.0033,'การผลิตปุ๋ยหมักจากขยะอินทรีย์ 1 กิโลกรัม ประกอบด้วย เศษอาหาร, กิ่งไม้และใบไม้ สามารถ ลดการปล่อยก๊าซเรือนกระจกได้ 0.0033 tCO<small>2</<small>eq ต่อปี', ["industry","travel","residence","agriculture"],'waste'],
                [13,'การกักเก็บคาร์บอนของต้นไม้ <font color="red"><b>[ จำนวนต้นไม้ (ต้น)]</b></font>',0.0095,'การปลูกต้นไม้ 1 ต้น สามารถกักเก็บก๊าซเรือนกระจกได้ 9.5 kgCO<small>2</<small>eq ต่อปี',["industry","travel","residence","agriculture"],'forest'],
            ];
            return recomTable;
        },
        getResultShow: function(){
            var recomShow =[
                [1,"ติดตั้งปล่องสำหรับระบายความร้อนทิ้งจากเครื่องอัดอากาศออกสู่ภายนอกบริเวณติดตั้งเพื่อลดอุณหภูมิอากาศขาเข้าเครื่องอัดอากาศ",["industry"],"http://113.53.233.60/city-procedure/GHG1.xlsx","ติดตั้งปล่องระบายความร้อนเพื่อลดอุณหภูมิอากาศขาเข้าของเครื่องอัดอากาศ จะทำให้อากาศมีความดันสูงขึ้นและการใช้พลังงานลดลง"],
                [2,"ปรับลดแรงดันลมอัดขาออกจากเครื่องอัดอากาศ",["industry"],"http://113.53.233.60/city-procedure/GHG2.xlsx","ปรับลดแรงดันลมอัดขาออกจากเครื่องอัดอากาศ จะทำให้ใช้กำลังในการขับลมออกน้อยลง ทำให้การใช้พลังงานลดลง"],
                [3,"บำรุงรักษาชิ้นส่วนต่างๆ ในระบบอัดอากาศ",["industry"],"http://113.53.233.60/city-procedure/GHG3.xlsx","บำรุงรักษาชิ้นส่วนต่างๆ เช่น ทำความสะอาดชุดกรองอากาศ ทำความสะอาดตัวกรองน้ำมัน ทำความสะอาดอุปกรณ์ระบายความร้อนหลังการอัด และทำความสะอาดชุดกรองลมอัด"],
                [4,"ซ่อมแซมจุดรั่วไหลของลมอัดในระบบท่อส่งและจุดเชื่อมต่อ",["industry"],"http://113.53.233.60/city-procedure/GHG4.xlsx","ซ่อมแซมจุดรั่วไหลของเครื่องอัดอากาศแบบโรตารี่สกรู เพื่อลดค่าความดันสูญเสีย"],
                [5,"หุ้มฉนวนกันความร้อนที่ผนังท่อตู้อบที่มีฮีตเตอร์เป็นแหล่งกำเนิดความร้อน",["industry"],"http://113.53.233.60/city-procedure/GHG5.xlsx","หุ้มฉนวนตู้อบที่ใช้ฮีตเตอร์เป็นแหล่งผลิตพลังงานความร้อนด้วยฉนวนใยแก้ว เพื่อลดการสูญเสียความร้อน ทำให้การใช้พลังงานลดลง"],
                [6,"หุ้มฉนวนกันความร้อนที่ผนังอุปกรณ์ที่ใช้ไอน้ำ",["industry","travel"],"http://113.53.233.60/city-procedure/GHG6.xlsx","หุ้มฉนวนใยแก้วที่ผนังอุปกรณ์ไอน้ำที่ใช้ฟอสซิลเป็นเชื้อเพลิง เพื่อลดการสูญเสียความร้อนทำให้การใช้พลังงานในการผลิตความร้อนลดลง"],
                [7,"หุ้มฉนวนกันความร้อนที่ท่อส่งไอน้ำ",["industry","travel"],"http://113.53.233.60/city-procedure/GHG7.xlsx","หุ้มฉนวนกันความร้อนสำหรับท่อของโรงงานที่ใช้ฟอสซิลเป็นเชื้อเพลิง เพื่อลดการสูญเสียความร้อน ทำให้การใช้พลังงานในการผลิตความร้อนลดลง"],
                [8,"นำความร้อนจากคอนเดนเสทกลับมาใช้ประโยชน์โดยเติมลงในถังน้ำป้อน",["industry","travel"],"http://113.53.233.60/city-procedure/GHG8.xlsx","นำความร้อนจากคอนเดนเสทกลับมาใช้กับถังน้ำป้อนก่อนเข้าหม้อไอน้ำ เพื่อลดการใช้เชื้อเพลิงในการทำน้ำร้อนในโรงงานที่ใช้ฟอสซิลเป็นเชื้อเพลิง"],
                [9,"นำความร้อนทิ้งจากไอเสียกลับมาใช้ประโยชน์โดยนำไปถ่ายเทความร้อนให้แก่อากาศ",["industry"],"http://113.53.233.60/city-procedure/GHG9.xlsx","นำความร้อนทิ้งของระบบเตาอบด้วยลมร้อนกลับมาใช้ประโยชน์โดยผ่านเครื่องแลกเปลี่ยนความร้อนให้แก่อากาศ ก่อนนำเข้าสู่ระบบเตาอบด้วยลมร้อนอีกครั้ง"],
                [10,"ติดตั้งอินเวอเตอร์เพื่อควบคุมความเร็วรอบของปั๊ม",["industry"],"http://113.53.233.60/city-procedure/GHG10.xlsx","ติดตั้งอินเวอเตอร์ที่ปั๊มน้ำ เพื่อควบคุมความเร็วรอบของปั๊มให้เหมาะสมต่อภาระโหลดที่ใช้ ทำให้การใช้พลังงานไฟฟ้าลดลง"],
                [11,"นำความร้อนทิ้งจากไอเสียกลับมาใช้ประโยชน์โดยนำไปถ่ายเทความร้อนให้แก่น้ำมันเตา",["industry","travel"],"http://113.53.233.60/city-procedure/GHG11.xlsx","นำความร้อนทิ้งจากระบบผลิตไอน้ำที่ใช้น้ำมันเตาเป็นเชื้อเพลิงกลับมาใช้ประโยชน์ โดยให้ความร้อนแก่น้ำมันเตาผ่านเครื่องแลกเปลี่ยนความร้อน เพื่อลดการทำงานของฮีตเตอร์อุ่นน้ำมันเตา ทำให้การใช้พลังงานไฟฟ้าลดลง"],
                [12,"การบริหารจัดการโหลดเครื่องอัดอากาศให้เหมาะสมกับความต้องการลมอัด",["industry"],"http://113.53.233.60/city-procedure/GHG12.xlsx","บริหารจัดการโหลดของเครื่องอัดอากาศในระบบการทำงานทั้งแบบมีโหลดและไม่มีโหลดให้เหมาะสม ทำให้การใช้พลังงานไฟฟ้าลดลง"],
                [13,"หุ้ม/ปรับปรุงฉนวนที่ท่อส่งน้ำเย็น",["industry","travel"],"http://113.53.233.60/city-procedure/GHG13.xlsx","หุ้มหรือปรับปรุงท่อส่งน้ำเย็นของระบบผลิตน้ำเย็น ทำให้ลดการสูญเสียอุณหภูมิ และการใช้พลังงานไฟฟ้าลดลง"],
                [14,"ลดอุณหภูมิน้ำขาออกจากระบบผลิตน้ำเย็น",["industry","travel"],"http://113.53.233.60/city-procedure/GHG14.xlsx","เพิ่มอุณหภูมิน้ำเย็นขาออกจากระบบ โดยต้องไม่ส่งผลกระทบกับการผลิต ทำให้การใช้พลังงานไฟฟ้าลดลง"],
                [15,"ควบคุมการระบายน้ำออกจากหม้อไอน้ำ (Blow down) ที่เกินความจำเป็น",["industry","travel"],"http://113.53.233.60/city-procedure/GHG15.xlsx","ควบคุมการระบายน้ำออกจากหม้อไอน้ำที่ใช้ฟอสซิลเป็นเชื้อเพลิงให้เหมาะสม โดยควบคุมค่าปริมาณสารละลายในน้ำที่อยู่ในหม้อไอน้ำให้มีค่าไม่เกิน 3,000 ppm"],
                [16,"เปลี่ยนกับดักไอน้ำ (steam trap) ใหม่แทนที่กับดักไอน้ำเดิมที่รั่วไหล",["industry","travel"],"http://113.53.233.60/city-procedure/GHG16.xlsx","เปลี่ยนกับดักไอน้ำใหม่แทนที่กับดักไอน้ำเดิมที่รั่วไหล เพื่อป้องกันการรั่วไหลของไอน้ำ ทำให้การใช้เชื้อเพลิงลดลง"],
                [17,"ติดตั้งเครื่องทำน้ำเย็นประสิทธิภาพสูง",["industry","travel"],"http://113.53.233.60/city-procedure/GHG17.xlsx","ติดตั้งเครื่องทำน้ำเย็นประสิทธิภาพสูงแทนที่เครื่องเดิม ทำให้การใช้พลังงานไฟฟ้าลดลง"],
                [18,"ติดตั้งปั๊มความร้อน (Heat pump) เพื่อผลิตน้ำร้อน",["industry","travel"],"http://113.53.233.60/city-procedure/GHG18.xlsx","ติดตั้งปั๊มความร้อนแทนที่ระบบผลิตน้ำร้อนด้วยการเผาไหม้เชื้อเพลิงหรือไฟฟ้า"],
                [19,"นำความร้อนทิ้งจากไอเสียกลับมาใช้ประโยชน์โดยนำไปถ่ายเทความร้อนให้แก่น้ำ",["industry","travel"],"http://113.53.233.60/city-procedure/GHG19.xlsx","นำความร้อนทิ้งของระบบผลิตไอน้ำที่ใช้ฟอสซิลเป็นเชื้อเพลิงกลับมาใช้ประโยชน์โดยให้ความร้อนแก่น้ำ ผ่านเครื่องแลกเปลี่ยนความร้อนเพื่อช่วยเพิ่มอุณหภูมิของน้ำป้อนให้สูง ทำให้การใช้เชื้อเพลิงลดลง"]
            ];
            return recomShow;
        }
    };
});

app.controller("recomCtrl",function($scope,showrecommend,$routeParams,$window,convertText,equalOfTrees,saveTostorage,genPdf){
    citytype = $routeParams.citytype;
    $scope.citytype_th = convertText.th(citytype);
    $scope.citytype = citytype;
    var result_citytype = JSON.parse(localStorage.getItem(citytype));
    var result = JSON.parse(localStorage.getItem("result"));

    $scope.index = result.res_cityIndex;
    $scope.gasReal = result_citytype.gasreal; 
    $scope.gasRef = result_citytype.gasrefer;
    $scope.ratings = result.res_ratings;

    $scope.tapping = "energy";
    $scope.selectTapping = function(citytype,tapping){
        $scope.citytype = citytype;
        $scope.tapping = tapping;     
    };

    $scope.inputRecom = showrecommend.getResultInput();
    $scope.listRecom = function(citytype,tapping){
        var result = [];
        $scope.inputRecom.forEach(row => {
            if(row[4].indexOf(citytype) != -1){
                if(row[5] == tapping){
                    result.push(row);
                }
            }
        
        });
        return result;
    };

    $scope.selected = [];
    $scope.exist = function(item){
        return $scope.selected.indexOf(item) > -1;
    };

    $scope.toggleSelection = function(item){
        var idx = $scope.selected.indexOf(item);
        if(idx > -1){
            $scope.selected.splice(idx, 1);               
        }else{
            if(item.length < 7){
                item.push(0);
            }else{
                item[6] = 0;
            }
            $scope.selected.push(item);
        }
        $scope.totalTco2 = sumtco2($scope.selected);
        $scope.ofTrees = equalOfTrees.result($scope.totalTco2);
    };

    $scope.checkAll = function(citytype,tapping){
        if($scope.selectAll == false){
            angular.forEach($scope.inputRecom,function(item){
                idx = $scope.selected.indexOf(item);
                if(idx >= 0){
                    return true;
                }else{
                    item.push(0);
                    $scope.selected.push(item);
                }
            });
            $scope.totalTco2 = sumtco2($scope.selected);
            $scope.ofTrees = equalOfTrees.result($scope.totalTco2);
        }else{
            $scope.selected = [];
            $scope.totalTco2 = 0;
            $scope.ofTrees = equalOfTrees.result($scope.totalTco2);
        }
    };

    $scope.recomCal = function (id,val){
        $scope.selected.forEach(row => {
            if(row[0] == id){
                row[row.length-1] = val;
                 sum = row[6] * row[2];
            }
        });
        $scope.totalTco2 = sumtco2($scope.selected);
        $scope.ofTrees = equalOfTrees.result($scope.totalTco2);
    };

    function sumtco2(arr_input){
        var result = 0;
        arr_input.forEach(row => {
            result += row[6] * row[2];
        });
        return result;
    }   

    $scope.sumCheckTree = function(val){
         val = parseFloat(val);
        if(isNaN(val) == true || val == 0){
            return "0";
        }
        if(val < 250){
            console.log("น้อยกว่าหรือเท่ากับ 250");
            return "250";
        }
        if(val > 250 && val < 500){
            console.log("น้อยกว่าหรือเท่ากับ 500");
            return "500";
        }
        if(val > 500 && val < 750){
            console.log("น้อยกว่าหรือเท่ากับ 750");
            return "750";
        }
        if(val > 750 && val < 1000){
            console.log("น้อยกว่าหรือเท่ากับ 1000");
            return "750";
        }
        if(val == 1000){
            console.log("มากกว่า 1000");
            return "750";
        }
        if(val > 1000){
            console.log("มากกว่า 1000");
            return "1000up";
        }
    };

    $scope.showsRecom = showrecommend.getResultShow();
    $scope.ShowlistRecom = function(citytype){
        var result = [];
        $scope.showsRecom.forEach(row => {
            if(row[2].indexOf(citytype) != -1){
                    result.push(row);
            }
        });
        return result;
    };



    $scope.submit = function(){
        function padx(c){return (c < 10) ? '0'+c.toString() : c.toString();}
        var d = new Date();
        var month = padx(d.getMonth()+1);
        var date = d.getFullYear()+month+padx(d.getDate());
        var time = padx(d.getHours())+padx(d.getMinutes())+padx(d.getSeconds());
    
        if($scope.selected.length != 0){
            dataResultRecom = $scope.selected;
            saveTostorage.save('resultRecom',dataResultRecom);
        }else{
            dataResultRecom = $scope.selected;
            saveTostorage.save('resultRecom',dataResultRecom);
        }

        PDFhtml = genPdf.getPage("recommend",citytype);
        console.log(PDFhtml);
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