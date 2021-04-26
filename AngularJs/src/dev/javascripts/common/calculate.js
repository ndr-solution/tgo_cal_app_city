// app.factory("connect_api",function(){
//     return{
//         getcoff: function(){
//             var result = "";
//             $.ajax({
//                 type: "get",
//                 async: true,
//                 timeout:3000,
//                 url: 'http://113.53.233.60/pmrapp-api/v1/city_cal/coeffs/current',
//                 success: function(data){
//                     result = data;
//                 },
//                 error: function(errMsg){
//                     console.log("errMsg"+errMsg);
//                 }
//             });
//             return result;
//         },
//     };

// });

app.factory("connect_api",function(){
    return{
        getcoff: function(){
            $.ajax({
                type: "get",
                async: true,
                timeout:3000,
                url: 'http://113.53.233.60/pmrapp-api/v1/city_cal/coeffs/current',
                //url: 'https://172.16.4.1:8080/ghg/v1/city_cal/coeffs/current',
                success: function(data){
                   result = data;
                   localStorage.setItem("coffStorage",JSON.stringify(result));
                },
                error: function(errMsg){
                    console.log("errMsg"+errMsg);
                    var coff_default_str = {"industry":[1.92,4.76,1940.60],"travel":[5.11,14.57,12742.01],"residence":[4.16,8.84,4689.63],"agriculture":[2.98,6.37,926.64]};
                    coffStorage_str = localStorage.getItem('coffStorage');
                    if(coffStorage_str == null){
                        localStorage.setItem("coffStorage", JSON.stringify(coff_default_str)); 
                        //coff = JSON.parse(coff_default_str);
                    }else{
                        //coff = JSON.parse(coffStorage_str);
                    }
                    
                }
            });
        },
    };

});

app.factory("formular",function(connect_api,$route){
    return{
        getcoff: function(){
            $route.reload();
            var coff_server = connect_api.getcoff();
            //var self = this;
            // var coff_default_str = '{"industry":[1.92,4.76,1940.6],"travel":[5.11,14.57,12742.01],"residence":[4.14,8.81,4663.2],"agriculture":[2.96,6.34,931.67]}';
            // coffStorage_str = localStorage.getItem('coffStorage');
            // if(coffStorage_str == null){
            //     localStorage.setItem("coffStorage", coff_default_str); 
            //     coff = JSON.parse(coff_default_str);
            // }else{
            //     coff = JSON.parse(coffStorage_str);
            // }        
            //var coff_server = connect_api.getcoff();
            // coffStorage_str = localStorage.getItem('coffStorage');
            // coff = JSON.parse(coffStorage_str);
            // console.log("delaGetData :",coffStorage_str);                 
            //coff_server = "";
            // if(coff_server !=""){
            //     coff = coff_server;
            //     localStorage.setItem("coffStorage",JSON.stringify(coff_server));
            // }
            //console.log("coff:",coff);
            //return coff;
        },
        calculate: function(citytype,data){   

            coffStorage_str = localStorage.getItem('coffStorage');
            coff = JSON.parse(coffStorage_str);
            console.log("start cal");
           var current_coff = coff[citytype];
            result = data.population * current_coff[0];
            temp = data.family * current_coff[1];
            if(temp > result){
                result = temp;
            }
            temp = data.areasize * current_coff[2];
            if(temp > result){
                result = temp;
            }
            return result;
        }
    };
});

app.factory("saveTostorage",function(){
    return{
        save: function(citytype,data){
            localStorage.setItem(citytype, JSON.stringify(data));
        }
    };
});

app.factory("checkEventType",function(){
    return{
        chkReal: function(gasreal,energy,burn,transport,garbage,water){
            var sumEvenType = ( energy + burn + transport + garbage + water);
            return sumEvenType;   
        }
        
    };
});

app.factory("sendToserver",function(){
    return{
        sendData: function(citytype,setData){

            var d = new Date();
            var month = "0"+(d.getMonth()+1);
            var date = d.getFullYear()+"-"+month+"-"+d.getDate();
            var time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
            var cal_create = date+" "+time;

            var dataArray = [];
            var data = {"type": citytype, "cal_at": cal_create,"data": setData};
            dataArray.push(data);

            var resultStorageCal = JSON.parse(localStorage.getItem("stored"));        
            //console.log(resultStorageCal);/*Set data Cal Save to array maximun 5 cal*/

            /*check data offline sent to server*/
            if(resultStorageCal != null){
                console.log("มีดาต้าค้างอยู่");
                  $.ajax({
                        type: "POST",
                        url: "http://113.53.233.60/pmrapp-api/v1/city_cal/logs",
                        data: JSON.stringify(resultStorageCal),
                        contentType: "application/json",
                        dataType: "json",
                      success: function(resultStorageCal){
                          localStorage.removeItem('stored');
                          localStorage.removeItem("question");
                          console.log("resend success", resultStorageCal);
                          send_data(dataArray);
                          
                        },
                      error: function(errMsg) {
                          console.log("resend error", errMsg);
                        }
                  });
              }else{
                console.log("ไม่มีดาต้าค้าง");
                send_data(dataArray);
              }

              function send_data(dataArray) {
                    $.ajax({
                    type: "POST",
                    url: "http://113.53.233.60/pmrapp-api/v1/city_cal/logs",
                            data: JSON.stringify(dataArray),
                            contentType: "application/json",
                            dataType: "json",
                            success: function(dataArray){
                            console.log("success", dataArray);
                            },
                        error: function(errMsg) {
                            console.log("error", errMsg);
                            /*Set data Cal Save to array maximun 5 cal*/
                            var retrievedObject = localStorage.getItem("stored");
                            var stored = JSON.parse(retrievedObject); 
                            if(stored === "" ||stored === undefined || stored === null){
                                var strCal = [];
                                strCal.push(data);
                                localStorage.setItem("stored", JSON.stringify(strCal));
                                localStorage.removeItem("question");
                                //console.log("เก็บข้อมูล1");
                            }else{
                                //console.log(stored.length);
                                if(stored.length == 5){
                                stored.shift();
                                stored.push(data);
                                }else{
                                stored.push(data);
                                }
                                //console.log("เก็บข้อมูล2");
                                localStorage.setItem("stored", JSON.stringify(stored));
                                localStorage.removeItem("question");
                            }/*Set data Cal Save to array maximun 5 cal*/
                            }
                    });
                }/*function Send Data Online and Save data in office*/
        },
    };

});

app.controller("calCtrl",function($scope,$rootScope,$routeParams,formular,$location,saveTostorage,checkEventType,sendToserver,$filter,$timeout){

    var cityStorage = JSON.parse(localStorage.getItem($routeParams.citytype));
    var emailStorage = JSON.parse(localStorage.getItem("email"));

    if(emailStorage === undefined || emailStorage  === "" || emailStorage  === null){
        $scope.email = "";
    }else{
        $scope.email = emailStorage.email;
    }

    if(cityStorage === undefined || cityStorage  === "" || cityStorage  === null){
        $scope.disabled = "disabled btn-disabled";
        $scope.collapse = "disabled";
    }else{
        $scope.form_citytype = cityStorage.citytype;
        $scope.namecity = cityStorage.cityname;
        $scope.year = cityStorage.year;
        //$scope.gasreal = parseInt(cityStorage.gasreal.toFixed( 2 ));
        $scope.gasreal = cityStorage.gasreal;
        $scope.gasrealDisplay = cityStorage.gasreal;
        $scope.energy = cityStorage.energy;
        $scope.burn = cityStorage.burn;
        $scope.transport = cityStorage.transport;
        $scope.garbage = cityStorage.garbage;
        $scope.water = cityStorage.water;
        $scope.population = cityStorage.population;
        $scope.family = cityStorage.family;
        $scope.areasize = cityStorage.areasize;
        $scope.gasrealDisplay = $scope.gasreal;
        $scope.disabled = "";
        $scope.collapse = "";
        $scope.limitEventType =  checkEventType.chkReal($scope.gasreal,$scope.energy,$scope.burn,$scope.transport,$scope.garbage,$scope.water);
        $scope.eventTypenumber = $filter('number')($scope.limitEventType,2);
    }
 
    $scope.onchange = function(){
        // set value to 0 if data is undefine or null
        console.log($scope.gasreal);
        cal_energy = $scope.energy || 0;
        cal_burn = $scope.burn || 0;
        cal_transport = $scope.transport || 0;
        cal_garbage = $scope.garbage || 0;
        cal_water = $scope.water || 0;
        cal_population = $scope.population || 0;
        cal_family = $scope.family || 0;
        cal_areasize = $scope.areasize || 0;
        $scope.gasrealDisplay = $scope.gasreal;

        if($scope.gasreal == undefined || $scope.gasreal == null){
            $scope.disabled = "disabled";
            $scope.collapse = "disabled";
            //$(".collapse").collapse('hide');
            if($scope.population != undefined || $scope.family != undefined || $scope.areasize != undefined){
                $scope.disabled = "";
                $scope.collapse = "";
                data = {"population":cal_population,"family":cal_family,"areasize":cal_areasize};
                //coff = formular.getcoff();
                $scope.gasrefer = formular.calculate($scope.form_citytype,coff,data);
                $scope.gasrealDisplay = $scope.gasrefer;    
                $scope.limitEventType = checkEventType.chkReal($scope.gasrefer,cal_energy,cal_burn,cal_transport,cal_garbage,cal_water);
                if( $scope.gasrealDisplay < $scope.limitEventType ){
                     $scope.disabled = "btn-disabled";
                     $scope.eventTypenumber = "ไม่สามารถคำนวณได้ เนื่องจากค่าจริงน้อยกว่าผลรวมของ 5 กิจกรรม";
                 }else{ 
                     $scope.disabled = "";
                     $scope.eventTypenumber = $filter('number')($scope.limitEventType,2);
                }    
            }
        }else{
            $scope.disabled = "";
            $scope.collapse = "";
            $scope.alertRefer = 1;
            $scope.gasrealDisplay = $scope.gasreal;
            $scope.limitEventType = checkEventType.chkReal($scope.gasreal,cal_energy,cal_burn,cal_transport,cal_garbage,cal_water);
            if( $scope.gasrealDisplay < $scope.limitEventType ){ 
                $scope.disabled = "btn-disabled"; 
                $scope.eventTypenumber = "ไม่สามารถคำนวณได้ เนื่องจากค่าจริงน้อยกว่าผลรวมของ 5 กิจกรรม";
            }else{ 
                $scope.disabled = "";
                $scope.eventTypenumber = $filter('number')($scope.limitEventType,2);
            }
        }
    };
    

    $scope.checkMail = 0;
    $scope.onchangemail = function(email){
        if(email){
            $scope.checkMail = 0;
        }else{
            $scope.checkMail = 1;
        }
    };
    

    $scope.submit = function(checkform){
        console.log(checkform);
        if(checkform == true){
            console.log("ไม่ได้กรอก Email");
            $scope.checkMail = 1;
            $('html, body').animate({
                scrollTop: $(".tilte").offset().top
            });   

        }else{
            //display: inline-block;
            
            console.log("กรอกข้อมูลมา");
            citytype = $scope.form_citytype;
            cityname = $scope.namecity;
            year = $scope.year;
            email = $scope.email;

            gasreal = $scope.gasreal || 0;  
            energy = $scope.energy || 0;
            burn = $scope.burn || 0;
            transport = $scope.transport || 0;
            garbage = $scope.garbage || 0;
            water = $scope.water || 0;

            population = $scope.population || 0;
            family = $scope.family || 0;
            areasize = $scope.areasize || 0;

            if(population == 0 && family == 0 && areasize == 0 ){
                console.log("มีค่าเป็น 0 ทั้งหมด");
                $scope.alertRefer = 0;
            }else{
                data_cal =  {
                    "population":population,
                    "family":family,
                    "areasize":areasize
                };

                coff = formular.getcoff();
                //$("#bg-loading").css( "display", "inline-block" );
                $timeout(function(){$("#bg-loading").show();},100);
                $timeout(function(){
                    result = formular.calculate(citytype,data_cal);
                    if(gasreal == 0){ gasreal = result; }
                    data = {
                        "citytype":citytype,
                        "cityname":cityname,
                        "year":year,
                        "gasreal":gasreal,
                        "energy":energy, 
                        "burn":burn,             
                        "transport":transport,      
                        "garbage":garbage,
                        "water":water,
                        "population":population,
                        "family":family,
                        "areasize":areasize,
                        "gasrefer":result
                    };
                    dataEmail = { "email":email };
                    saveTostorage.save("email",dataEmail);
                    saveTostorage.save(citytype,data);
    
                    question = JSON.parse(localStorage.getItem("question"));
                    inputData = JSON.parse(localStorage.getItem(citytype));
                    coefficient = JSON.parse(localStorage.getItem("coffStorage"));
                                
                    if(question == null){
                        setQuestion = "";
                    }else{
                        setQuestion = question;
                    }

                    setData = {"question":question,"emailStorage":emailStorage,"inputData":inputData,"coefficient":coefficient[citytype]};
                    sendToserver.sendData(citytype,setData);
                    $location.path('/result/'+citytype);
                },1000);
                

            }
        }
    };
});