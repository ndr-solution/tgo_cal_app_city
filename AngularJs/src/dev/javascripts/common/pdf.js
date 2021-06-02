app.factory("dataPDF",function(convertText,$filter,equalOfTrees,showrecommend){
    return{
        getInputUser: function(page,citytype){
            var Inputdata = JSON.parse(localStorage.getItem(citytype));
            var AnalysisResults = JSON.parse(localStorage.getItem("result"));
            var cityType_Name = convertText.th(Inputdata.citytype);
            if(Inputdata.cityname == undefined ){
                cityname = "";
            }else{
                cityname = Inputdata.cityname;
            }
            var elementsTag = `
                <div class="row">
                    <div class="col-6">
                        <center>
                            <img class="logo" src="www/img/header-${ citytype }.svg">
                        </center>
                    </div>
                    <div class="col-6 header-left">
                        <h1><small class="smH1">ประเภทของเมือง:</small> ${ cityType_Name } </h1>
                        <h2><small class="smH1">ชื่อเมือง:</small> ${ cityname }</h2>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <div  class="header-detail">
                            <h3>รายละเอียดการกรอกข้อมูล</h3>
                            <p>
                                <strong>ปริมาณการปล่อยก๊าซเรือนกระจกของเมือง:</strong> <span class="p-data">${ $filter('number')(Inputdata.gasreal,2) } tCO<sub>2</sub>eq</span>
                            </p>
                            <p>
                                <strong>จำนวนประชากรของเมือง:</strong> <span class="p-data">${ $filter('number')(Inputdata.population,2) }</span> คน
                            </p>
                            <p>
                                <strong>จำนวนครัวเรือน:</strong> <span class="p-data">${ $filter('number')(Inputdata.family,2) }</span> ครัวเรือน
                            </p>
                            <p>
                                <strong>ขนาดพื้นที่:</strong> <span class="p-data">${ $filter('number')(Inputdata.areasize,2) }</span> ตารางกิโลเมตร
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="line1"></div>
                <div class="row mt-5">
                    <div class="col-12 result-sector1">
                        <h1>ผลการวิเคราะห์การปล่อยก๊าซเรือนกระจก</h1>
                        <div class="row">
                            <div class="col-6 text-center">
                                <h2 class="mt-5">ตัวชี้วัดของเมือง ${ $filter('number')(AnalysisResults.res_cityIndex,2) }</h2>
                            </div>
                            <div class="col-6 text-center" style="background: ${AnalysisResults.res_ratings.color}; border-radius: 15px;">
                                <div class="grade" style="color: #ffffff;">${AnalysisResults.res_ratings.grade}</div>
                            </div>
                            <div class="col-12 mt-5">
                                <div class="frame-img">
                                    <img src="www/img/${ AnalysisResults.res_ratings.grade }.png" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            return elementsTag;
        },
        getAnalysisResults: function(page,citytype){
            var Inputdata = JSON.parse(localStorage.getItem(citytype));
            var AnalysisResults = JSON.parse(localStorage.getItem("result"));

            if (Inputdata.gasreal > Inputdata.gasrefer) {
                gasreal_precent = '100%';
                gasrefer_width = (Inputdata.gasrefer * 100) / Inputdata.gasreal;
                gasrefer_precent = gasrefer_width + '%';
              } else if (Inputdata.gasrefer > Inputdata.gasreal) {
                console.log("อ้างอิงมากกว่า");
                gasrefer_precent = '100%';
                gasreal_width = (Inputdata.gasreal * 100) / Inputdata.gasrefer;
                gasreal_precent = gasreal_width + '%';
              } else if (Inputdata.gasreal == Inputdata.gasrefer) {
                gasrefer_precent = "100%";
                gasreal_precent = "100%";
              }

            if(AnalysisResults.res_eventype.energy[0].energy == 0){
                energystyle = "display: none;";
            }else{ energystyle = "display: block;";}
            if(AnalysisResults.res_eventype.burn[0].burn == 0){
                burnstyle = "display: none;";
            }else{ burnstyle = "display: block;"; }
            if(AnalysisResults.res_eventype.transport[0].transport == 0){
                transportstyle = "display: none;";
            }else{ transportstyle = "display: block;"; }
            if(AnalysisResults.res_eventype.garbage[0].garbage == 0){
                garbagestyle = "display: none;";
            }else{ garbagestyle = "display: block;"; }
            if(AnalysisResults.res_eventype.water[0].water == 0){
                waterstyle = "display: none;";
            }else{ waterstyle = "display: block;"; }

            elementsTag = `
                <div class="row mt-5 result-sector2">
                    <div class="col-12"><h1>การปล่อยก๊าซเรือนกระจก</h1></div>
                    <div class="col-12">
                        <p>ค่าจริง: ${ $filter('number')(Inputdata.gasreal,2) } tCO<sub>2</sub>eq</p>
                        <div class="progress">
                            <div class="progress-bar bg-gastReal" role="progressbar" style="width: ${gasreal_precent}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-12 mt-5">
                        <p>ค่าอ้างอิง: ${ $filter('number')(Inputdata.gasrefer,2) } tCO<sub>2</sub>eq</p>
                        <div class="progress">
                            <div class="progress-bar bg-gastRefer" role="progressbar" style="width: ${gasrefer_precent}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5 result-sector2">
                    <div class="col-12"><h1>ค่าอ้างอิงการปล่อยก๊าซเรือนกระจกแบ่งตามกิจกรรม</h1></div>
                    <div class="bg-progress">
                        <div class="row">
                            <div class="col-12">
                                <p>ค่าการปล่อยก๊าซเรือนกระจกแบ่งตามกิจกรรมพลังงานไฟฟ้า</p>
                                <div class="progress bg-progress-inside" style="${energystyle}">
                                    <div class="progress-bar progress-bar-striped bg-energyReal" role="progressbar" style="width: ${AnalysisResults.res_eventype.energy[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าจริง ${$filter('number')(AnalysisResults.res_eventype.energy[0].energy,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="progress bg-progress-inside">
                                    <div class="progress-bar bg-energyRefer" role="progressbar" style="width: ${AnalysisResults.res_proportion.energy[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าอ้างอิง ${$filter('number')(AnalysisResults.res_proportion.energy[0].energy,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="line2"></div>
                            </div>
                            <div class="col-12 mt-5">
                                <p>ค่าการปล่อยก๊าซเรือนกระจกแบ่งตามกิจกรรมเชื้อเพลิงแบบเผาไหม้อยู่กับที่</p>
                                <div class="progress bg-progress-inside" style="${burnstyle}">
                                    <div class="progress-bar progress-bar-striped bg-burnReal" role="progressbar" style="width: ${AnalysisResults.res_eventype.burn[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าจริง ${$filter('number')(AnalysisResults.res_eventype.burn[0].burn,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>                        
                                <div class="progress bg-progress-inside">
                                    <div class="progress-bar bg-burnRefer" role="progressbar" style="width: ${AnalysisResults.res_proportion.burn[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าอ้างอิง ${$filter('number')(AnalysisResults.res_proportion.burn[0].burn,2)} tCO<susmall>2eq</small> ต่อปี</span></div>
                                </div>
                                <div class="line2"></div>
                            </div>
                            <div class="col-12 mt-5">
                                <p>ค่าการปล่อยก๊าซเรือนกระจกแบ่งตามกิจกรรมการขนส่ง</p>
                                <div class="progress bg-progress-inside" style="${transportstyle}">
                                    <div class="progress-bar progress-bar-striped bg-transportReal" role="progressbar" style="width: ${AnalysisResults.res_eventype.transport[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าจริง ${$filter('number')(AnalysisResults.res_eventype.transport[0].transport,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="progress bg-progress-inside">
                                    <div class="progress-bar bg-transporRefert" role="progressbar" style="width: ${AnalysisResults.res_proportion.transport[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าอ้างอิง ${$filter('number')(AnalysisResults.res_proportion.transport[0].transport,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="line2"></div>
                            </div>
                            <div class="col-12 mt-5">
                                <p>ค่าการปล่อยก๊าซเรือนกระจกแบ่งตามกิจกรรมการจัดการขยะ</p>
                                <div class="progress bg-progress-inside" style="${garbagestyle}">
                                    <div class="progress-bar progress-bar-striped bg-garbageReal" role="progressbar" style="width: ${AnalysisResults.res_eventype.garbage[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าจริง ${$filter('number')(AnalysisResults.res_eventype.garbage[0].garbage,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="progress bg-progress-inside">
                                    <div class="progress-bar bg-garbageRefer" role="progressbar" style="width: ${AnalysisResults.res_proportion.garbage[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าอ้างอิง ${$filter('number')(AnalysisResults.res_proportion.garbage[0].garbage,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="line2"></div>
                            </div>
                            <div class="col-12 mt-5">
                                <p>ค่าการปล่อยก๊าซเรือนกระจกแบ่งตามกิจกรรมการจัดการน้ำ</p>
                                <div class="progress bg-progress-inside" style="${waterstyle}">
                                    <div class="progress-bar progress-bar-striped bg-waterReal" role="progressbar" style="width: ${AnalysisResults.res_eventype.water[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าจริง ${$filter('number')(AnalysisResults.res_eventype.water[0].water,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="progress bg-progress-inside">
                                    <div class="progress-bar bg-waterRefer" role="progressbar" style="width: ${AnalysisResults.res_proportion.water[0].precent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>ค่าอ้างอิง ${$filter('number')(AnalysisResults.res_proportion.water[0].water,2)} tCO<small>2</small>eq ต่อปี</span></div>
                                </div>
                                <div class="line2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            return elementsTag;
        },
        getRecomment: function(page,citytype){
            var elementsTag = "";
            var Results = JSON.parse(localStorage.getItem("result"));
            var Inputdata = JSON.parse(localStorage.getItem(citytype));
            elementsTag += `
                <div class="row recom">
                    <div class="col-12"><h1>${convertText.th(citytype)}</h1></div>
                    <div class="col-6 text-center">
                        <div class="grade"> ${ Results.res_ratings.grade } </div>
                    </div>
                    <div class="col-6">
                        <h2>ค่าจริง ${  $filter('number')(Inputdata.gasreal,2) } tCO<sub>2</sub>eq ต่อปี</h2>
                        <h2>ค่าอ้างอิง ${  $filter('number')(Inputdata.gasrefer,2) } tCO<sub>2</sub>eq ต่อปี</h2>
                    </div>
                </div>
            `;
            if(page == "result"){
                elementsTag += "";
            }
            if(page == "recommend"){
                resultRecom = JSON.parse(localStorage.getItem("resultRecom"));
                if(resultRecom.length != 0){
                    recomInput = function(){
                        var text = "";
                        var sumtotal = 0;
                        var n = 0;
                        resultRecom.forEach(element => {
                            reduceCo = element[2] * element[6];
                            text +=  "<tr><td>"+ (n+=1) +"</td><td>"+element[1]+"</td><td>"+ reduceCo +" tCO<sub>2</sub>eq ต่อปี</td></tr>";
                            sumtotal += reduceCo;
                        });
                        textarr = {"text":text,"sumtotal":sumtotal};
                        return textarr;
                    };
                    elementsTag += `
                        <div class="row">
                            <div class="col-12"><h1 class="title">มาตรการลดการปล่อยก๊าซเรือนกระจก</h1></div>
                            <div class="col-12">
                                <table class="table tb-pdf">
                                    <thead>
                                        <tr>
                                            <th>ลำดับ</th>
                                            <th>รายละเอียดมาตรการ</th>
                                            <th>ปริมาณที่ลดได้(tCO<sub>2</sub> ต่อปี)<th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${ recomInput().text }
                                    <tbody>
                                </table>
                            </div>
                            <div class="col-12">
                                <center class="total-reduce">
                                    ศักยภาพในการลดการปล่อยก๊าซเรือนกระจก ${ $filter('number')(recomInput().sumtotal,2) } tCO<sub>2</sub>eq ต่อปี ( เทียบเท่าปลูกต้นไม้  ${ $filter('number')(equalOfTrees.result(recomInput().sumtotal),2) } ต้น )
                                </center>
                            </div>
                        </div>`;
                }else{
                    elementsTag += "";
                }

            }
                showsRecom = showrecommend.getResultShow();
                showlistRecom = function(citytype){
                    var text = "";
                    var n = 0;
                    showsRecom.forEach(row => {
                        if(row[2].indexOf(citytype) != -1){
                            text +=  "<tr><td>"+ (n+=1) +"</td><td>"+row[1]+"</td></tr>";
                            INDEX = 1;
                        }else{
                            INDEX = -1;
                        }
                    });
                    results = { "text":text,"INDEX": INDEX};
                    return results;
                };
                    if(showlistRecom(citytype).INDEX == 1){
                        elementsTag +=`
                            <div class="row mt-5">
                                <div class="col-12"><h1 class="title">มาตรการแนะนำเพิ่มเติม</h1></div>
                                <div class="col-12">
                                    <table class="table tb-pdf">
                                        <thead>
                                            <tr>
                                                <th>ลำดับ</th>
                                                <th>รายละเอียดมาตรการ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${ showlistRecom(citytype).text }
                                        <tbody>
                                    </table>
                                </div>
                            </div>
                        `;
                    }

            return elementsTag;
        },
        getRecomHeader: function(page,citytype){
            var elementsTag = "";
            var Results = JSON.parse(localStorage.getItem("result"));
            var Inputdata = JSON.parse(localStorage.getItem(citytype));
            console.log(Inputdata);
            elementsTag += `
                <div class="row recom">
                    <div class="col-12"><h1>${convertText.th(citytype)}</h1></div>
                    <div class="col-6 text-center">
                        <div class="grade"> ${ Results.res_ratings.grade } </div>
                    </div>
                    <div class="col-6">
                        <h2>ค่าจริง ${  $filter('number')(Inputdata.gasreal,2) } tCO<sub>2</sub>eq ต่อปี</h2>
                        <h2>ค่าอ้างอิง ${  $filter('number')(Inputdata.gasrefer,2) } tCO<sub>2</sub>eq ต่อปี</h2>
                    </div>
                </div>
            `;
            return elementsTag;
        },
        getPageResult: function(citytype){
            var elementsTag = "";
            var Results = JSON.parse(localStorage.getItem("result"));
            var Inputdata = JSON.parse(localStorage.getItem(citytype));
            showsRecom = showrecommend.getResultShow();
            showlistRecom = function(citytype){
                var text = "";
                var n = 0;
                showsRecom.forEach(row => {
                    if(row[2].indexOf(citytype) != -1){
                        text +=  "<tr><td>"+ (n+=1) +"</td><td>"+row[1]+"</td></tr>";
                        INDEX = 1;
                    }else{
                        INDEX = -1;
                    }
                });
                results = { "text":text,"INDEX": INDEX};
                return results;
            };
            if(showlistRecom(citytype).INDEX == 1){
                elementsTag +=`
                    <div class="row mt-5">
                        <div class="col-12"><h1 class="title">มาตรการแนะนำเพิ่มเติม</h1></div>
                        <div class="col-12">
                            <table class="table tb-pdf">
                                <thead>
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>รายละเอียดมาตรการ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${ showlistRecom(citytype).text }
                                <tbody>
                            </table>
                        </div>
                    </div>
                `;
            }
            return elementsTag;
        },
        getPageRecom: function(citytype){
            var elementsTag = "";
            var Results = JSON.parse(localStorage.getItem("result"));
            var Inputdata = JSON.parse(localStorage.getItem(citytype));
            resultRecom = JSON.parse(localStorage.getItem("resultRecom"));
            if(resultRecom.length != 0){
                recomInput = function(){
                    var text = "";
                    var sumtotal = 0;
                    var n = 0;
                    resultRecom.forEach(element => {
                        reduceCo = element[2] * element[6];
                        text +=  "<tr><td>"+ (n+=1) +"</td><td>"+element[1]+"</td><td>"+ $filter('number')(reduceCo,2) +" tCO<sub>2</sub>eq ต่อปี</td></tr>";
                        sumtotal += reduceCo;
                    });
                    textarr = {"text":text,"sumtotal":sumtotal};
                    return textarr;
                };
                elementsTag += `
                    <div class="row">
                        <div class="col-12"><h1 class="title">มาตรการลดการปล่อยก๊าซเรือนกระจก</h1></div>
                        <div class="col-12">
                            <table class="table tb-pdf">
                                <thead>
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>รายละเอียดมาตรการ</th>
                                        <th>ปริมาณที่ลดได้(tCO<sub>2</sub> ต่อปี)<th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${ recomInput().text }
                                <tbody>
                            </table>
                        </div>
                        <div class="col-12">
                            <center class="total-reduce">
                                ศักยภาพในการลดการปล่อยก๊าซเรือนกระจก ${ $filter('number')(recomInput().sumtotal,2) } tCO<sub>2</sub>eq ต่อปี ( เทียบเท่าปลูกต้นไม้  ${ $filter('number')(equalOfTrees.result(recomInput().sumtotal),2) } ต้น )
                            </center>
                        </div>
                    </div>`;
                return elementsTag;    
            }
        },
    };
});

app.factory("setTemplatePDF",function(dataPDF){
    return{
        pageResult: function(page,citytype){
            var checkPage;
            selectPage = function(page,citytype){
                if(page == "result"){
                    checkPage =`
                        <div class="pageA4">
                            <div class="header-pdf">
                                <img src="www/img/header-pdf.png" width="1124">
                            </div>
                            <div class="container-fluid mt-5">
                                ${ dataPDF.getRecomHeader(page,citytype) }
                                ${ dataPDF.getPageResult(citytype) }
                                <div class="row">
                                    <div class="col-12">
                                        สามารถดูมาตรการลดการปล่อยก๊าซเรือนกระจกเพิ่มเติม ได้จาก http://ghgreduction.tgo.or.th/less.html
                                    </div>
                                </div>
                            </div>
                            <div class="footer-pdf">
                                <img src="www/img/footer-pdf.png" width="480">
                            </div>
                        </div>`;
                }   
                if(page == "recommend"){
                        resultRecom = JSON.parse(localStorage.getItem("resultRecom"));
                        if(resultRecom.length == 0){
                            checkPage =`
                                <div class="pageA4">
                                    <div class="header-pdf">
                                        <img src="www/img/header-pdf.png" width="1124">
                                    </div>
                                    <div class="container-fluid mt-5">
                                        ${ dataPDF.getRecomHeader(page,citytype) }
                                        ${ dataPDF.getPageResult(citytype) }
                                    </div>
                                    <div class="footer-pdf">
                                        <img src="www/img/footer-pdf.png" width="480">
                                    </div>
                                </div>`;
                        }else{

                            checkPage =`
                                <div class="pageA4">
                                    <div class="header-pdf">
                                        <img src="www/img/header-pdf.png" width="1124">                                                                                                                                                                                                                                                                      
                                    </div>
                                    <div class="container-fluid mt-5">
                                        ${ dataPDF.getRecomHeader(page,citytype) }
                                        ${ dataPDF.getPageRecom(citytype) }
                                    </div>
                                    <div class="footer-pdf">
                                        <img src="www/img/footer-pdf.png" width="480">
                                    </div>
                                </div>    
                                <div class="pageA4">
                                    <div class="header-pdf">
                                        <img src="www/img/header-pdf.png" width="1124">
                                    </div>
                                    <div class="container-fluid mt-5">
                                        ${ dataPDF.getPageResult(citytype) }
                                        <div class="row">
                                            <div class="col-12">
                                                สามารถดูมาตรการลดการปล่อยก๊าซเรือนกระจกเพิ่มเติม ได้จาก http://ghgreduction.tgo.or.th/less.html
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer-pdf">
                                        <img src="www/img/footer-pdf.png" width="480">
                                    </div>
                                </div>`;
                        }
                }
                return checkPage;
            };

            var htmlTag = `
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>รายงานผลการวิเคราะห์</title>
                    <link rel="stylesheet" href="www/css/bootstrap.css">
                    <link rel="stylesheet" href="www/css/pdf_ios.css">
                </head>
                <boby>
                
                    <div class="pageA4">
                        <div class="header-pdf">
                            <img src="www/img/header-pdf.png" width="1124">
                        </div>
                        <div class="container-fluid mt-5">
                            ${ dataPDF.getInputUser(page,citytype) }
                        </div>
                        <div class="footer-pdf">
                            <img src="www/img/footer-pdf.png" width="480">
                        </div>
                    </div>
                    <div class="pageA4">
                        <div class="header-pdf">
                            <img src="www/img/header-pdf.png" width="1124">
                        </div>
                        <div class="container-fluid mt-5">
                            ${ dataPDF.getAnalysisResults(page,citytype) }
                        </div>
                        <div class="footer-pdf">
                            <img src="www/img/footer-pdf.png" width="480">
                        </div>
                    </div>
                    ${ selectPage(page,citytype) }
                </body>
            </html>
            `;
            return htmlTag;
        },

    };
});

app.factory("genPdf",function(setTemplatePDF){
    return{
        getPage: function(page,citytype){
            var result;
            result = setTemplatePDF.pageResult(page,citytype);
            return result;
        },

    };
});