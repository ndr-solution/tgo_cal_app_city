app.factory("cfoPDF",function($filter){
        var gov = JSON.parse(localStorage.getItem('formGov'));
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
        var ghg_tree = tree;
        var ghg_tree_total = (tree.tree.ghg_t_co + tree.mgr_frs.ghg_t_co ) + (tree.palm.ghg_t_co + tree.vine.ghg_t_co ); 
        var ghgTotal = (fuel.total + LPG.total) + (egs_air_ftz.total + septicTanks.total) + (energy.total + water.total) + (paper.total + waste.total) + (garbage1.total + garbage3.total) + tree.total;

        var ghgType1 = (fuel.total + LPG.total) + (egs_air_ftz.total + septicTanks.total) + (garbage1.total) + (waste.total);
        var ghgType2 = (energy.total);
        var ghgType3 = (water.total + paper.total) + (garbage1.total);

    return {
        cardEnergy: function(){
            var tagEnergy = `
            <div class="card-info">
                <p>ลดการใช้ไฟฟ้า/ใช้พลังงานหมุนเวียน</p>
                        <div class="row">
                            <div class="col-12">
                                <ul>
                                    <li> ลดการใช้ไฟฟ้า
                                        <ul>
                                            <li>ถอดปลั๊กเครื่องใช้ไฟฟ้าเมื่อไม่ใช้งาน</li>
                                            <li>ติดตั้งระบบเปิด-ปิดไฟแบบอัตโนมัติ</li>
                                        </ul>
                                    </li>
                                    <li> เปลี่ยนหลอดไฟ
                                        <ul>
                                            <li>จากฟลูออเรสเซนต์ 36 วัตต์ เป็น LED 18 วัตต์ เปิดใช้งาน 12 ชั่วโมง/วัน ลดก๊าซฯ 0.05 ตัน/หลอด/ปี</li>
                                            <li>จากหลอดไฟสาธารณะ 150 วัตต์ เป็นไฟส่องสว่างพลังงานแสงอาทิตย์ เปิดใช้งาน 12 ชั่วโมง/วัน ลดก๊าซฯ 0.32 ตัน/หลอด/ปี</li>
                                        </ul>
                                    </li>
                                    <li> เครื่องปรับอากาศ
                                        <ul>
                                            <li>กำหนดเวลา เปิด-ปิด เครื่องปรับอากาศ/ไฟฟ้าแสงสว่าง</li>
                                            <li>ล้างเครื่องปรับอากาศเป็นประจำ</li>
                                            <li>เปลี่ยนเครื่องปรับอากาศ 12,000 BTU เป็นแบบอินเวอร์เตอร์ เปิดใช้งาน 6 ชั่วโมง/วัน ลดก๊าซฯ 0.57 ตัน/ตันความเย็น/ปี</li>
                                        </ul>
                                    </li>
                                    <li>  ใช้พลังงานหมุนเวียน
                                        <ul>
                                            <li>ติดตั้ง Solar PV Rooftop ลดก๊าซฯ 0.8 ตัน/กิโลวัตต์ติดตั้ง/ปี</li>
                                            <li>ล้างเครื่องปรับอากาศเป็นประจำ</li>
                                        </ul>
                                    </li>
                                </ul>
                            หมายเหตุ : ตันก๊าซเรือนกระจก หรือ tCO2eq หมายถึง ตันคาร์บอนไดออกไซด์เทียบเท่า
                        </div>
                    </div>
                </div>
            `;            
            return tagEnergy;
        },
        cardFuel: function(){
            var tagFuel = `
                <div class="card-info">
                    <p>ลดการใช้น้ำมันเชื้อเพลิง</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <table>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li> ทางเดียวกันไปด้วยกัน</li>
                                                <li> ใช้รถจักรยานแทนรถจักรยานยนต์ 125 cc. ลดก๊าซฯ 0.06 กก./กิโลเมตร</li>
                                                <li> ใช้รถจักรยานแทนรถยนต์ 1,600 cc. ลดก๊าซฯ 0.15 กก./กิโลเมตร</li>
                                                <li> เปลี่ยนรถจักรยานยนต์ 150 cc. เป็น รถจักรยานยนต์ไฟฟ้า ลดก๊าซฯ 0.05 กก./กิโลเมตร</li>
                                                <li> ปลี่ยนรถยนต์ 1,600 cc. ใช้แก๊สโซฮอล์ E10 เป็น รถยนต์ไฟฟ้า ลดก๊าซฯ 0.11 กก./กิโลเมตร</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                                หมายเหตุ : กก. ก๊าซเรือนกระจก หรือ kgCO2eq หมายถึง กิโลกรัมคาร์บอนไดออกไซด์เทียบเท่า
                            </div>
                        </div>
                    </div>
                </div>
            `;
            return tagFuel;
        },
        cardBin: function(){
            var tagBin = `
                <div class="card-info">
                    <p>การจัดการขยะมูลฝอย</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                            <ul>
                                <li> ลดการเกิดขยะ ลดการใช้ นำมาใช้ซ้ำ</li>
                                <li> คัดแยกขยะเพื่อรีไซเคิล
                                    <ul>
                                        <li>กระดาษ 1 ตัน ลดก๊าซฯ 0.49 ตัน</li>
                                        <li>พลาสติก 1 ตัน ลดก๊าซฯ 0.87 ตัน</li>
                                        <li>อลูมิเนียม 1 ตัน ลดก๊าซฯ 3.38 ตัน</li>
                                        <li>เหล็ก 1 ตัน ลดก๊าซฯ 1.14 ตัน</li>
                                        <li>แก้ว 1 ตัน ลดก๊าซฯ 0.74 ตัน</li>
                                    </ul>
                                </li>
                                <li> นำไปผลิตปุ๋ย/สารปรับปรุงดิน 1 ตัน ลดก๊าซฯ 0.53 ตัน/ตันขยะอินทรีย์</li>
                                <li> นำไปผลิตก๊าซชีวภาพ ลดก๊าซฯ 0.64 ตัน/ตันขยะอินทรีย์</li>
                                <li> นำไปผลิตเชื้อเพลิงขยะ (RDF) ลดก๊าซฯ 0.48 ตัน/ตันขยะมูลฝอย</li>
                                </ul>
                                หมายเหตุ : ตันก๊าซเรือนกระจก หรือ tCO2eq หมายถึง ตันคาร์บอนไดออกไซด์เทียบเท่า
                            </div>
                        </div>
                    </div>
                </div>
            `;
            return tagBin;
        },
        cardTree: function(){
            var tagTree = `
            <div class="card-info">
                <p>เพิ่มพื้นที่สีเขียวเพื่อดูดกลับก๊าซเรือนกระจก</p>
                <div class="container">
                    <div class="row">
                        <div class="col-3">ปลูกต้นไม้ 1 ต้น</div>
                        <div class="col-2">ลดก๊าซฯ ( กก./ปี )</div>
                    </div>
                    <div class="row">
                        <div class="col-3">สัก</div>
                        <div class="col-2">13.6</div>
                    </div>
                    <div class="row">
                        <div class="col-3">ยูคาลิปตัส</div>
                        <div class="col-2">11.8</div>
                    </div>
                    <div class="row">
                        <div class="col-3">โกงกาง</div>
                        <div class="col-2">3.9</div>
                    </div>
                    <div class="row">
                        <div class="col-3">ยางพารา</div>
                        <div class="col-2">47.4</div>
                    </div>
                    <div class="row">
                        <div class="col-3">พรรณไม้รอบรั้วกินได้</div>
                        <div class="col-2">14.7</div>
                    </div>
                    <div class="row">
                        <div class="col-3">พรรณไม้ริมถนน</div>
                        <div class="col-2">24.2</div>
                    </div>
                </div>
            </div>
            `;

            return tagTree;
        },
        getPage: function(){
            
            var htmlTag = `
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>รายงานผลการวิเคราะห์</title>
                    <link rel="stylesheet" href="file:///android_asset/www/css/bootstrap.css">
                    <link rel="stylesheet" href="file:///android_asset/www/css/cfo_pdf_android.css">
                    <script type="text/javascript" src="file:///android_asset/www/js/loader.js"></script>
                    <script>
                        google.charts.load('current', {packages: ['corechart', 'bar']});
                        google.charts.setOnLoadCallback(drawAxisTickColors);
                        function drawAxisTickColors() {
                            var data = google.visualization.arrayToDataTable([
                                ['Element', 'Density', { role: 'style' }],
                                ['ประเภทที่1', ${ ghgType1 }, 'color: #b87333'],            // RGB value
                                ['ประเภทที่2', ${ ghgType2 }, 'color: #b87333'],            // English color name
                                ['ประเภทที่3', ${ ghgType3 }, 'color: #b87333' ], // CSS-style declaration
                                ['อื่นๆ', ${ ghg_tree_total }, 'color: #b87333' ], // CSS-style declaration
                              ]);
                              
                              var options = {
                                title: "",
                                width: 600,
                                height: 400,
                                bar: {groupWidth: "50%"},
                                legend: { position: "none" },
                                vAxis: {
                                  title: 'tCO2eq/ปี',
                                }
                              };
                        
                              var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                              chart.draw(data, options);
                            }
                    </script>
                </head>
                <boby>
                    <div class="page-header" style="text-align: center">
                        รายงานแสดงผลปริมาณการปล่อยก๊าซเรือนกระจกขององค์กรปกครองส่วนท้องถิ่น<br/>
                        ผ่านช่องทาง Mobile Application ของ อบก. “Low Carbon City”<br/>
                        องค์การบริหารจัดการก๊าซเรือนกระจก (องค์การมหาชน)<br/>
                    </div>
                    <div class="page-footer">
                        Low Carbon City
                    </div>
                    <div class="page-header-space"></div>
                    <div class="container mt-2">
                        <div class="page">
                            <h5>ข้อมูลองค์กรปกครองส่วนท้องถิ่น (${ gov.city }, จังหวัด ${ gov.province })</h5>
                            <div class="row mt-2">
                                <div class="col-12">
                                    <p>1. ปริมาณการปล่อยก๊าซเรือนกระจก <strong>${ $filter('number')(ghgTotal,2) }</strong> tCO<sub>2</sub>e/ปี</p>
                                    <div class="card-info">
                                        <p> <strong>ขอบเขต 1 : ${ $filter('number')(ghgType1,2) } tCO<sub>2</sub>e/ปี </strong> <br/>
                                            <small>*การปล่อยก๊าซเรือนกระจกทางตรงขององค์กร ได้แก่ การเผาไหม้อยู่กับที่ การเผาไหม้ที่มีการเคลื่อนที่ และการรั่วไหลและอื่นๆ</small>
                                        </p>
                                        <p> <strong>ขอบเขต 2 : ${ $filter('number')(ghgType2,2) } tCO<sub>2</sub>e/ปี </strong> <br/>
                                            <small>*การปล่อยก๊าซเรือนกระจกทางอ้อมจากการใช้พลังงาน ได้แก่ การใช้ไฟฟ้า</small>
                                        </p>
                                        <p> <strong>ขอบเขต 3 : ${ $filter('number')(ghgType3,2) } tCO<sub>2</sub>e/ปี </strong> <br/>
                                            <small>*การปล่อยก๊าซเรือนกระจกทางอ้อมอื่นๆ ได้แก่ การใช้น้ำประปา การใช้กระดาษสำนักงาน</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12">
                                    <p>2. กราฟแสดงปริมาณการปล่อยคาร์บอน</p>
                                    <div class="text-center"><div id="chart_div"></div></div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12">
                                    <p>3. ปริมาณการดูดกลับของต้นไม้แต่ละประเภท</p>
                                    <div class="card-info">
                                        <p>ทั่วไป: ${ $filter('number')(ghg_tree.tree.ghg_t_co,2) }  tCO<sub>2</sub>e/ปี </strong></p>
                                        <p>ป่าชายเลน:  ${ $filter('number')(ghg_tree.mgr_frs.ghg_t_co,2) }  tCO<sub>2</sub>e/ปี </strong></p>
                                        <p>ปาล์ม: ${ $filter('number')(ghg_tree.palm.ghg_t_co,2) }  tCO<sub>2</sub>e/ปี </strong></p>
                                        <p>เถาวัลย์: ${ $filter('number')(ghg_tree.vine.ghg_t_co,2) }  tCO<sub>2</sub>e/ปี </strong></p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12">
                                    <p>4. มาตรการ/แนวทางการลดก๊าซเรือนกระจก</p>
                                    ${ this.cardEnergy() }                                    
                                </div>
                            </div>

                        </div>
                        <div class="page">
                           <br/><br/><br/><br/><br/>
                           <div class="row">
                                <div class="col-12">
                                    ${ this.cardFuel() }                                    
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12">
                                    ${ this.cardBin() }                                    
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-12">
                                    ${ this.cardTree() }                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page-footer-space"></div>
                </body>
            </html>`;
            return htmlTag;
        }
    };

});