app.controller("cfoForm",function($scope,$rootScope,$location,$window){
  // get coff from local storage
  var coff = JSON.parse(localStorage.getItem('cfo_coff'));
  // console.log("coff:",coff);
  // ปริมาณการใช้น้ำมันเชื้อเพลิง
  var fuel = JSON.parse(localStorage.getItem('fuel_cst'));
  if(fuel){
    $scope.dsl_mch = fuel.dsl_mch.dsl_mch;
    $scope.dsl_v = fuel.dsl_mch.volume;
    $scope.gsl_mch = fuel.gsl_mch.gsl_mch;
    $scope.gsl_v = fuel.gsl_mch.volume;
    $scope.dsl_car = fuel.dsl_car.dsl_car;
    $scope.dslc_v = fuel.dsl_car.volume;
    $scope.gsl_car = fuel.gsl_car.gsl_car;
    $scope.gslc_v = fuel.gsl_car.volume;
    $scope.lpg_car = fuel.lpg_car.lpg_car;
    $scope.lpg_v = fuel.lpg_car.volume;
    $scope.ngv_car  = fuel.ngv_car.ngv_car;
    $scope.ngv_v = fuel.ngv_car.volume;
  }
  $scope.ef_dsl_mch = coff.fuel_cst.ef_dsl_mch;
  $scope.ef_gsl_mch = coff.fuel_cst.ef_gsl_mch;
  $scope.ef_dsl_car = coff.fuel_cst.ef_dsl_car;
  $scope.ef_gsl_car = coff.fuel_cst.ef_gsl_car;
  $scope.ef_lpg_car = coff.fuel_cst.ef_lpg_car;
  $scope.ef_ngv_car = coff.fuel_cst.ef_ngv_car;

  // $scope.ef_dsl_mch = 2.7076;
  // $scope.ef_gsl_mch = 2.1892;
  // $scope.ef_dsl_car = 2.7403;
  // $scope.ef_gsl_car = 2.2373;
  // $scope.ef_lpg_car = 3.1988;
  // $scope.ef_ngv_car = 2.2540;

  // ปริมาณการใช้ LPG (ก๊าซหุงต้ม : ปรุงอาหาร) 
  var LPG = JSON.parse(localStorage.getItem('lpg_cst'));
  if(LPG){
    $scope.lpg_size4 = LPG.lpg_size4.lpg_size4;
    $scope.lpg_size7 = LPG.lpg_size7.lpg_size7;
    $scope.lpg_size11 = LPG.lpg_size11.lpg_size11;
    $scope.lpg_size13 = LPG.lpg_size13.lpg_size13;
    $scope.lpg_size15 = LPG.lpg_size15.lpg_size15;
    $scope.lpg_size48 = LPG.lpg_size48.lpg_size48;
  }
  
  $scope.ef_lpg_size4 = coff.lpg_cst.ef_lpg_size4;
  $scope.ef_lpg_size7 = coff.lpg_cst.ef_lpg_size7;
  $scope.ef_lpg_size11 = coff.lpg_cst.ef_lpg_size11;
  $scope.ef_lpg_size13 = coff.lpg_cst.ef_lpg_size13;
  $scope.ef_lpg_size15 = coff.lpg_cst.ef_lpg_size15;
  $scope.ef_lpg_size48 = coff.lpg_cst.ef_lpg_size48;
  // $scope.ef_lpg_size4 = 3.1133;
  // $scope.ef_lpg_size7 = 3.1133;
  // $scope.ef_lpg_size11 = 3.1133;
  // $scope.ef_lpg_size13 = 3.1133;
  // $scope.ef_lpg_size15 = 3.1133;
  // $scope.ef_lpg_size48 = 3.1133;

  // ปริมาณที่เติมสารดับเพลิง, ปริมาณที่เติมสารทำความเย็น ในเครื่องปรับอากาศ  
  var egs_air_ftz = JSON.parse(localStorage.getItem('egs_air_ftz_cst'));
  if(egs_air_ftz){
    $scope.egs_age = egs_air_ftz.egs_age.egs_age;
    $scope.r134a = egs_air_ftz.r134a.r134a;
    $scope.r32 = egs_air_ftz.r32.r32;
    $scope.r410a = egs_air_ftz.r410a.r410a;
    $scope.r22 = egs_air_ftz.r22.r22;
    $scope.ogn_ftz = egs_air_ftz.ogn_ftz.ogn_ftz;
    $scope.fml_ftz46 = egs_air_ftz.fml_ftz46.fml_ftz46;
    $scope.fml_ftz15 = egs_air_ftz.fml_ftz15.fml_ftz15;
    $scope.fml_ftz13 = egs_air_ftz.fml_ftz13.fml_ftz13;
    $scope.fml_ftz16 = egs_air_ftz.fml_ftz16.fml_ftz16;
    $scope.ftz16 = egs_air_ftz.ftz16.ftz16;
    $scope.ftz8 = egs_air_ftz.ftz8.ftz8;
    $scope.inctc_g28 = egs_air_ftz.inctc_g28.inctc_g28;
  }
  $scope.ef_egs_age = coff.egs_air_ftz_cst.ef_egs_age;
  $scope.ef_r134a = coff.egs_air_ftz_cst.ef_r134a;
  $scope.ef_r32 = coff.egs_air_ftz_cst.ef_r32;
  $scope.ef_r410a = coff.egs_air_ftz_cst.ef_r410a;
  $scope.ef_r22 = coff.egs_air_ftz_cst.ef_r22;
  $scope.ef_ogn_ftz = coff.egs_air_ftz_cst.ef_ogn_ftz;
  $scope.ef_fml_ftz46 = coff.egs_air_ftz_cst.ef_fml_ftz46;
  $scope.ef_fml_ftz15 = coff.egs_air_ftz_cst.ef_fml_ftz15;
  $scope.ef_fml_ftz13 = coff.egs_air_ftz_cst.ef_fml_ftz13;
  $scope.ef_fml_ftz16 = coff.egs_air_ftz_cst.ef_fml_ftz16;
  $scope.ef_ftz16 = coff.egs_air_ftz_cst.ef_ftz16;
  $scope.ef_ftz8 = coff.egs_air_ftz_cst.ef_ftz8;
  $scope.ef_inctc_g28 = coff.egs_air_ftz_cst.ef_inctc_g28;
  // $scope.ef_egs_age = 1;
  // $scope.ef_r134a = 1300;
  // $scope.ef_r32 = 677;
  // $scope.ef_r410a = 2087.5;
  // $scope.ef_r22 = 1760;
  // $scope.ef_ogn_ftz = 0.1097;
  // $scope.ef_fml_ftz46 = 3.3036;
  // $scope.ef_fml_ftz15 = 1.5083;
  // $scope.ef_fml_ftz13 = 1.347;
  // $scope.ef_fml_ftz16 = 1.5922;
  // $scope.ef_ftz16 = 1.6089;
  // $scope.ef_ftz8 = 1.1355;
  // $scope.ef_inctc_g28 = 14.1;


  // ส้วม, septic tanks 
  var septicTanks = JSON.parse(localStorage.getItem('st_tanks_cst'));
  if(septicTanks){
    $scope.num_psn = septicTanks.septic_tanks.num_psn;
    $scope.wk_day = septicTanks.septic_tanks.wk_day;
    $scope.num_school = septicTanks.septic_tanks.num_school;
    $scope.day_school = septicTanks.septic_tanks.day_school;  
  }
  $scope.ef_STanks = coff.st_tanks_cst.ef_STanks;
  // $scope.ef_STanks = 0.0033;

  // ปริมาณการใช้พลังงานไฟฟ้า
  var energy = JSON.parse(localStorage.getItem('eng_cst'));
  if(energy){
    $scope.eng_pay = energy.eng_pay.eng_pay;
    $scope.eng_free = energy.eng_free.eng_free;  
  }
  $scope.ef_eng_pay = coff.eng_cst.ef_eng_pay;
  $scope.ef_eng_free = coff.eng_cst.ef_eng_free;
  // $scope.ef_eng_pay = 0.4999;
  // $scope.ef_eng_free = 0.4999;

  // ปริมาณการใช้น้ำประปา & ปริมาณการใช้สารเคมี ในการผลิตน้ำประปา
  var water = JSON.parse(localStorage.getItem('water_cst'));
  if(water){
    $scope.pwa  = water.pwa.pwa;
    $scope.mwa  = water.mwa.mwa;
    $scope.alum  = water.alum.alum;
    $scope.chlorine  = water.chlorine.chlorine;
    $scope.lime = water.lime.lime;
  }
  $scope.ef_pwa = coff.water_cst.ef_pwa;
  $scope.ef_mwa = coff.water_cst.ef_mwa;
  $scope.ef_alum = coff.water_cst.ef_alum;
  $scope.ef_chlorine = coff.water_cst.ef_chlorine;
  $scope.ef_lime = coff.water_cst.ef_lime;
  // $scope.ef_pwa = 0.2843;
  // $scope.ef_mwa = 0.7948;
  // $scope.ef_alum = 0.5311;
  // $scope.ef_chlorine = 1.0548;
  // $scope.ef_lime = 0.7759;

  // ปริมาณการใช้วัสดุสำนักงานและวัสดุสิ้นเปลือง
  var paper = JSON.parse(localStorage.getItem('paper_cst'));
  if(paper){
    $scope.paper80 = paper.paper80.paper80; 
    $scope.paper70 = paper.paper70.paper70;   
  
  }
  $scope.ef_paper80 = coff.paper_cst.ef_paper80;
  $scope.ef_paper70 =  coff.paper_cst.ef_paper70;
  // $scope.ef_paper80 = 2.0859;
  // $scope.ef_paper70 = 2.0859;

  // คำนวณปล่อยGHG_เฉพาะน้ำเสีย  
  var waste = JSON.parse(localStorage.getItem('wst_cst'));
  if(waste){
    $scope.art_pond = waste.art_pond.art_pond;
    $scope.art_bod = waste.art_pond.art_bod;
    $scope.bpd = waste.bpd.bpd;
    $scope.bpd_bod = waste.bpd.bpd_bod;
    $scope.res_pub = waste.res_pub.res_pub; 
  }
  $scope.ef_art_pond = coff.wst_cst;
  $scope.ef_bpd = coff.wst_cst.ef_bpd;
  $scope.bod_res_pub =  coff.wst_cst.bod_res_pub;
  $scope.gwp_res_pub = coff.wst_cst.gwp_res_pub;
  // $scope.ef_art_pond = 0;
  // $scope.ef_bpd = 0.0033;  
  // $scope.bod_res_pub = 110; //set
  // $scope.gwp_res_pub = 28; //set

  // ประเภทที่ 1 ปริมาณขยะ (ดำเนินการเอง)
  var garbage1 =  JSON.parse(localStorage.getItem('garbageT1_cst'));
  if(garbage1){
    $scope.dmp_t1 = garbage1.dmp_t1.dmp_t1;
    $scope.landfill_t1 = garbage1.landfill_t1.landfill_t1;
    $scope.brn_bk_t1 =  garbage1.brn_bk_t1.brn_bk_t1;
  }
  $scope.ef_dmp_t1 = coff.garbageT1_cst.ef_dmp_t1;
  $scope.ef_landfill_t1 = coff.garbageT1_cst.landfill_t1;
  // $scope.ef_dmp_t1 = 1.0388;
  // $scope.ef_landfill_t1 = 0.7933;

  // ประเภทที่ 3 ปริมาณขยะ
  var garbage3 = JSON.parse(localStorage.getItem('garbageT3_cst'));
  if(garbage3){
    $scope.dmp_t3 = garbage3.dmp_t3.dmp_t3;
    $scope.landfill_t3 = garbage3.landfill_t3.landfill_t3;
    $scope.brn_bk_t3 =  garbage3.brn_bk_t3.brn_bk_t3;
  }
  $scope.ef_dmp_t3 = coff.garbageT3_cst.ef_dmp_t3;
  $scope.ef_landfill_t3 = coff.garbageT3_cst.landfill_t3;
  // $scope.ef_dmp_t3 = 1.0388;
  // $scope.ef_landfill_t3 = 0.7933;


  // คำนวณการดูดกลับ ก๊าซเรือนกระจก
  var tree = JSON.parse(localStorage.getItem('tree_cst'));
  if(tree){
    $scope.tree = tree.tree.tree; 
    $scope.tree_h = tree.tree.h; 
    $scope.tree_ccfr = tree.tree.ccfr; 
    $scope.mgr_frs = tree.mgr_frs.mgr_frs; 
    $scope.mgr_frs_h = tree.mgr_frs.h; 
    $scope.mgr_frs_ccfr = tree.mgr_frs.ccfr; 
    $scope.palm = tree.palm.palm; 
    $scope.palm_h = tree.palm.h; 
    $scope.palm_ccfr = tree.palm.ccfr; 
    $scope.vine = tree.vine.vine; 
    $scope.vine_h = tree.vine.h; 
    $scope.vine_ccfr = tree.vine.ccfr; 
  }

  function formEmpty(){
    // ปริมาณการใช้น้ำมันเชื้อเพลิง
    if($scope.dsl_mch == undefined){ $scope.dsl_mch = 0; }
    if($scope.dsl_v == undefined){ $scope.dsl_v = 0; }
    if($scope.gsl_mch == undefined){ $scope.gsl_mch = 0; }
    if($scope.gsl_v == undefined){ $scope.gsl_v = 0; }
    if($scope.dsl_car == undefined){ $scope.dsl_car = 0; }
    if($scope.dslc_v == undefined){ $scope.dslc_v = 0; }
    if($scope.gsl_car == undefined){ $scope.gsl_car = 0; }
    if($scope.gslc_v == undefined){ $scope.gslc_v = 0; }
    if($scope.lpg_car == undefined){ $scope.lpg_car = 0; }
    if($scope.lpg_v == undefined){ $scope.lpg_v = 0; }
    if($scope.ngv_car == undefined){ $scope.ngv_car = 0; }
    if($scope.ngv_v == undefined){ $scope.ngv_v = 0; }
    // ปริมาณการใช้ LPG (ก๊าซหุงต้ม : ปรุงอาหาร) 
    if($scope.lpg_size4 == undefined){ $scope.lpg_size4 = 0; }
    if($scope.lpg_size7 == undefined){ $scope.lpg_size7 = 0; }
    if($scope.lpg_size11 == undefined){ $scope.lpg_size11 = 0; }
    if($scope.lpg_size13 == undefined){ $scope.lpg_size13 = 0; }
    if($scope.lpg_size15 == undefined){ $scope.lpg_size15 = 0; }
    if($scope.lpg_size48 == undefined){ $scope.lpg_size48 = 0; }
    // ปริมาณที่เติมสารดับเพลิง, ปริมาณที่เติมสารทำความเย็น ในเครื่องปรับอากาศ 
    if($scope.egs_age == undefined){ $scope.egs_age = 0;}
    if($scope.r134a == undefined){ $scope.r134a = 0;}
    if($scope.r32 == undefined){ $scope.r32 = 0;}
    if($scope.r410a == undefined){ $scope.r410a = 0;}
    if($scope.r22 == undefined){ $scope.r22 = 0;}
    if($scope.ogn_ftz  == undefined){ $scope.ogn_ftz = 0; }
    if($scope.fml_ftz46  == undefined){ $scope.fml_ftz46 = 0; }
    if($scope.fml_ftz15  == undefined){ $scope.fml_ftz15 = 0; }
    if($scope.fml_ftz13  == undefined){ $scope.fml_ftz13 = 0; }
    if($scope.fml_ftz16  == undefined){ $scope.fml_ftz16 = 0; }
    if($scope.ftz16  == undefined){ $scope.ftz16 = 0; }
    if($scope.ftz8  == undefined){ $scope.ftz8 = 0; }
    if($scope.inctc_g28  == undefined){ $scope.inctc_g28 = 0; }
    // ส้วม, septic tanks 
    if($scope.num_psn == undefined){ $scope.num_psn = 0; }
    if($scope.wk_day == undefined){ $scope.wk_day = 0; }
    if($scope.num_school == undefined){ $scope.num_school = 0; }
    if($scope.day_school == undefined){ $scope.day_school = 0; }
    // คำนวณปล่อยGHG_เฉพาะน้ำเสีย
    if($scope.art_pond == undefined){ $scope.art_pond = 0; }
    if($scope.art_bod == undefined){ $scope.art_bod = 0; }
    if($scope.bpd == undefined){ $scope.bpd = 0; }
    if($scope.bpd_bod == undefined){ $scope.bpd_bod = 0; }
    if($scope.res_pub == undefined){ $scope.res_pub = 0; }
    // ประเภทที่ 1 ปริมาณขยะ (ดำเนินการเอง)
    if($scope.dmp_t1 == undefined){ $scope.dmp_t1 = 0;}
    if($scope.landfill_t1 == undefined){ $scope.landfill_t1 = 0;}
    if($scope.brn_bk_t1 == undefined){ $scope.brn_bk_t1 = 0;}
    // ประเภทที่ 3 ปริมาณขยะ 
    if($scope.dmp_t3 == undefined){ $scope.dmp_t3 = 0;}
    if($scope.landfill_t3 == undefined){ $scope.landfill_t3 = 0;}
    if($scope.brn_bk_t3 == undefined){ $scope.brn_bk_t3 = 0;}
    // ปริมาณการใช้พลังงานไฟฟ้า
    if($scope.eng_pay == undefined){ $scope.eng_pay = 0; }
    if($scope.eng_free == undefined){ $scope.eng_free = 0; }
    // ปริมาณการใช้น้ำประปา & ปริมาณการใช้สารเคมี ในการผลิตน้ำประปา
    if($scope.pwa  == undefined){ $scope.pwa = 0; }
    if($scope.mwa  == undefined){ $scope.mwa = 0; }
    if($scope.alum  == undefined){ $scope.alum = 0; }
    if($scope.chlorine  == undefined){ $scope.chlorine = 0; }
    if($scope.lime == undefined){ $scope.lime = 0; }
    // ปริมาณการใช้วัสดุสำนักงานและวัสดุสิ้นเปลือง
    if($scope.paper80 == undefined){ $scope.paper80 = 0;}
    if($scope.paper70 == undefined){ $scope.paper70 = 0;}
    // คำนวณการดูดกลับ ก๊าซเรือนกระจก
    if($scope.tree  == undefined){ $scope.tree = 0;}
    if($scope.tree_h  == undefined){ $scope.tree_h = 0;}
    if($scope.tree_ccfr  == undefined){ $scope.tree_ccfr = 0;}
    if($scope.mgr_frs  == undefined){ $scope.mgr_frs = 0;}
    if($scope.mgr_frs_h  == undefined){ $scope.mgr_frs_h = 0;}
    if($scope.mgr_frs_ccfr  == undefined){ $scope.mgr_frs_ccfr = 0;}
    if($scope.palm  == undefined){ $scope.palm = 0;}
    if($scope.palm_h  == undefined){ $scope.palm_h = 0;}
    if($scope.palm_ccfr  == undefined){ $scope.palm_ccfr = 0;}
    if($scope.vine  == undefined){ $scope.vine = 0;}
    if($scope.vine_h  == undefined){ $scope.vine_h = 0;}
    if($scope.vine_ccfr  == undefined){ $scope.vine_ccfr = 0;}
  }

 
  // special = ปกครองพิเศษ, state = นคร
  // city = เมือง
  // district = ตำบล
  var gov = JSON.parse(localStorage.getItem('formGov'));
  var cityType = gov.cityType;

  $scope.submit = function(){
    formEmpty();
    formGHG(); //GHG
    formWastewater(); //GHG Wastewater
    formgarbage(); //GHG Garbage
    formTree(); //GHG Tree
    $window.location.href = '#/cfo-result';

  };

  function formGHG(){
    var fuel_cst = {
      dsl_mch:{ dsl_mch:$scope.dsl_mch, volume:$scope.dsl_v, sum:($scope.dsl_mch * $scope.dsl_v),EF:$scope.ef_dsl_mch, ghg_kg_co:(($scope.dsl_mch * $scope.dsl_v)*$scope.ef_dsl_mch),ghg_t_co:parseFloat(((($scope.dsl_mch * $scope.dsl_v)*$scope.ef_dsl_mch)/1000).toFixed(2))},
      gsl_mch:{ gsl_mch:$scope.gsl_mch, volume:$scope.gsl_v, sum:($scope.gsl_mch * $scope.gsl_v),EF:$scope.ef_gsl_mch, ghg_kg_co:(($scope.gsl_mch * $scope.gsl_v)*$scope.ef_gsl_mch),ghg_t_co:parseFloat(((($scope.gsl_mch * $scope.gsl_v)*$scope.ef_gsl_mch)/1000).toFixed(2))},
      dsl_car:{ dsl_car:$scope.dsl_car, volume:$scope.dslc_v, sum:($scope.dsl_car * $scope.dslc_v),EF:$scope.ef_dsl_car, ghg_kg_co:(($scope.dsl_car * $scope.dslc_v)*$scope.ef_dsl_car),ghg_t_co:parseFloat(((($scope.dsl_car * $scope.dslc_v)*$scope.ef_dsl_car)/1000).toFixed(2))},
      gsl_car:{ gsl_car:$scope.gsl_car, volume:$scope.gslc_v, sum:($scope.gsl_car * $scope.gslc_v),EF:$scope.ef_gsl_car, ghg_kg_co:(($scope.gsl_car * $scope.gslc_v)*$scope.ef_gsl_car),ghg_t_co:parseFloat(((($scope.gsl_car * $scope.gslc_v)*$scope.ef_gsl_car)/1000).toFixed(2))},
      lpg_car:{ lpg_car:$scope.lpg_car, volume:$scope.lpg_v, sum:($scope.lpg_car * $scope.lpg_v),EF:$scope.ef_lpg_car, ghg_kg_co:(($scope.lpg_car * $scope.lpg_v)*$scope.ef_lpg_car),ghg_t_co:parseFloat(((($scope.lpg_car * $scope.lpg_v)*$scope.ef_lpg_car)/1000).toFixed(2))},
      ngv_car:{ ngv_car:$scope.ngv_car, volume:$scope.ngv_v, sum:($scope.ngv_car * $scope.ngv_v),EF:$scope.ef_ngv_car, ghg_kg_co:(($scope.ngv_car * $scope.ngv_v)*$scope.ef_ngv_car),ghg_t_co:parseFloat(((($scope.ngv_car * $scope.ngv_v)*$scope.ef_ngv_car)/1000).toFixed(2))},
    };
    fuel_cst.total = (fuel_cst.dsl_mch.ghg_t_co) + (fuel_cst.gsl_mch.ghg_t_co) + (fuel_cst.dsl_car.ghg_t_co) + (fuel_cst.gsl_car.ghg_t_co) + (fuel_cst.lpg_car.ghg_t_co) + (fuel_cst.ngv_car.ghg_t_co); 
    localStorage.setItem('fuel_cst', JSON.stringify(fuel_cst));
    // console.log("fuel_cst:",fuel_cst);
    var lpg_cst ={
      lpg_size4:{ lpg_size4:$scope.lpg_size4, sum:(4 * $scope.lpg_size4),EF:$scope.ef_lpg_size4, ghg_kg_co:((4 * $scope.lpg_size4)*$scope.ef_lpg_size4),ghg_t_co:parseFloat((((4 * $scope.lpg_size4)*$scope.ef_lpg_size4)/1000).toFixed(2))},
      lpg_size7:{ lpg_size7:$scope.lpg_size7, sum:(7 * $scope.lpg_size7),EF:$scope.ef_lpg_size7, ghg_kg_co:((7 * $scope.lpg_size7)*$scope.ef_lpg_size7),ghg_t_co:parseFloat((((7 * $scope.lpg_size7)*$scope.ef_lpg_size7)/1000).toFixed(2))},
      lpg_size11:{ lpg_size11:$scope.lpg_size11, sum:(11.5 * $scope.lpg_size11),EF:$scope.ef_lpg_size11, ghg_kg_co:((11.5 * $scope.lpg_size11)*$scope.ef_lpg_size11),ghg_t_co:parseFloat((((11.5 * $scope.lpg_size11)*$scope.ef_lpg_size11)/1000).toFixed(2))},
      lpg_size13:{ lpg_size13:$scope.lpg_size13, sum:(13.5 * $scope.lpg_size13),EF:$scope.ef_lpg_size13, ghg_kg_co:((13.5 * $scope.lpg_size13)*$scope.ef_lpg_size13),ghg_t_co:parseFloat((((13.5 * $scope.lpg_size13)*$scope.ef_lpg_size13)/1000).toFixed(2))},
      lpg_size15:{ lpg_size15:$scope.lpg_size15, sum:(15 * $scope.lpg_size15),EF:$scope.ef_lpg_size15, ghg_kg_co:((15 * $scope.lpg_size15)*$scope.ef_lpg_size15),ghg_t_co:parseFloat((((15 * $scope.lpg_size15)*$scope.ef_lpg_size15)/1000).toFixed(2))},
      lpg_size48:{ lpg_size48:$scope.lpg_size48, sum:(48 * $scope.lpg_size48),EF:$scope.ef_lpg_size48, ghg_kg_co:((48 * $scope.lpg_size48)*$scope.ef_lpg_size48),ghg_t_co:parseFloat((((48 * $scope.lpg_size48)*$scope.ef_lpg_size48)/1000).toFixed(2))},
    };
    lpg_cst.total = (lpg_cst.lpg_size4.ghg_t_co) + (lpg_cst.lpg_size7.ghg_t_co) + (lpg_cst.lpg_size11.ghg_t_co) + (lpg_cst.lpg_size13.ghg_t_co) + (lpg_cst.lpg_size15.ghg_t_co) + (lpg_cst.lpg_size48.ghg_t_co);
    localStorage.setItem('lpg_cst', JSON.stringify(lpg_cst));
    // console.log("lpg_cst:",lpg_cst);
    var egs_air_ftz_cst = {
      egs_age:{ egs_age:$scope.egs_age,EF:$scope.ef_egs_age, ghg_kg_co:($scope.egs_age *$scope.ef_egs_age),ghg_t_co:parseFloat((($scope.egs_age *$scope.ef_egs_age)/1000).toFixed(2))},
      r134a:{ r134a:$scope.r134a,EF:$scope.ef_r134a, ghg_kg_co:($scope.r134a *$scope.ef_r134a),ghg_t_co:parseFloat((($scope.r134a *$scope.ef_r134a)/1000).toFixed(2))},
      r32:{ r32:$scope.r32,EF:$scope.ef_r32, ghg_kg_co:($scope.r32 *$scope.ef_r32),ghg_t_co:parseFloat((($scope.r32 *$scope.ef_r32)/1000).toFixed(2))},
      r410a:{ r410a:$scope.r410a,EF:$scope.ef_r410a, ghg_kg_co:($scope.r410a *$scope.ef_r410a),ghg_t_co:parseFloat((($scope.r410a *$scope.ef_r410a)/1000).toFixed(2))},
      r22:{ r22:$scope.r22,EF:$scope.ef_r22, ghg_kg_co:($scope.r22 *$scope.ef_r22),ghg_t_co:parseFloat((($scope.r22 *$scope.ef_r22)/1000).toFixed(2))},
      ogn_ftz:{ ogn_ftz:$scope.ogn_ftz,EF:$scope.ef_ogn_ftz, ghg_kg_co:($scope.ogn_ftz *$scope.ef_ogn_ftz),ghg_t_co:parseFloat((($scope.ogn_ftz *$scope.ef_ogn_ftz)/1000).toFixed(2))},
      fml_ftz46:{ fml_ftz46:$scope.fml_ftz46,EF:$scope.ef_fml_ftz46, ghg_kg_co:($scope.fml_ftz46 *$scope.ef_fml_ftz46),ghg_t_co:parseFloat((($scope.fml_ftz46 *$scope.ef_fml_ftz46)/1000).toFixed(2))},
      fml_ftz15:{ fml_ftz15:$scope.fml_ftz15,EF:$scope.ef_fml_ftz15, ghg_kg_co:($scope.fml_ftz15 *$scope.ef_fml_ftz15),ghg_t_co:parseFloat((($scope.fml_ftz15 *$scope.ef_fml_ftz15)/1000).toFixed(2))},
      fml_ftz13:{ fml_ftz13:$scope.fml_ftz13,EF:$scope.ef_fml_ftz13, ghg_kg_co:($scope.fml_ftz13 *$scope.ef_fml_ftz13),ghg_t_co:parseFloat((($scope.fml_ftz13 *$scope.ef_fml_ftz13)/1000).toFixed(2))},
      fml_ftz16:{ fml_ftz16:$scope.fml_ftz16,EF:$scope.ef_fml_ftz16, ghg_kg_co:($scope.fml_ftz16 *$scope.ef_fml_ftz16),ghg_t_co:parseFloat((($scope.fml_ftz16 *$scope.ef_fml_ftz16)/1000).toFixed(2))},
      ftz16:{ ftz16:$scope.ftz16,EF:$scope.ef_ftz16, ghg_kg_co:($scope.ftz16 *$scope.ef_ftz16),ghg_t_co:parseFloat((($scope.ftz16 *$scope.ef_ftz16)/1000).toFixed(2))},
      ftz8:{ ftz8:$scope.ftz8,EF:$scope.ef_ftz16, ghg_kg_co:($scope.ftz8 *$scope.ef_ftz8),ghg_t_co:parseFloat((($scope.ftz8 *$scope.ef_ftz8)/1000).toFixed(2))},
      inctc_g28:{ inctc_g28:$scope.inctc_g28,EF:$scope.ef_inctc_g28, ghg_kg_co:($scope.inctc_g28 *$scope.ef_inctc_g28ef_inctc_g28),ghg_t_co:parseFloat((($scope.inctc_g28 *$scope.ef_inctc_g28)/1000).toFixed(2))},
    };
    egs_air_ftz_cst.total = (egs_air_ftz_cst.egs_age.ghg_t_co + egs_air_ftz_cst.r134a.ghg_t_co) + (egs_air_ftz_cst.r32.ghg_t_co + egs_air_ftz_cst.r410a.ghg_t_co) + (egs_air_ftz_cst.r22.ghg_t_co + egs_air_ftz_cst.ogn_ftz.ghg_t_co) + (egs_air_ftz_cst.fml_ftz46.ghg_t_co + egs_air_ftz_cst.fml_ftz15.ghg_t_co) + (egs_air_ftz_cst.fml_ftz13.ghg_t_co + egs_air_ftz_cst.fml_ftz16.ghg_t_co) + (egs_air_ftz_cst.ftz16.ghg_t_co + egs_air_ftz_cst.ftz8.ghg_t_co)+(egs_air_ftz_cst.inctc_g28.ghg_t_co);
    localStorage.setItem('egs_air_ftz_cst', JSON.stringify(egs_air_ftz_cst));
    // console.log("egs_air_ftz_cst:",egs_air_ftz_cst);
    var st_tanks_cst  = {
      septic_tanks:{ 
        num_psn:$scope.num_psn,
        wk_day:$scope.wk_day,EF:$scope.ef_STanks, 
        ghg_kg_co:($scope.num_psn*$scope.wk_day)*$scope.ef_STanks,
        ghg_t_co:parseFloat((($scope.num_psn*$scope.wk_day)*$scope.ef_STanks/1000).toFixed(2)),
        num_school:$scope.num_school,
        day_school:$scope.day_school
      },
    };
    st_tanks_cst.total = st_tanks_cst.septic_tanks.ghg_t_co;
    localStorage.setItem('st_tanks_cst', JSON.stringify(st_tanks_cst));
    // console.log("st_tanks_cst:",st_tanks_cst);
    var eng_cst = {
      eng_pay:{ eng_pay:$scope.eng_pay, EF:$scope.ef_eng_pay, ghg_kg_co:($scope.eng_pay * $scope.ef_eng_pay), ghg_t_co:parseFloat((($scope.eng_pay * $scope.ef_eng_pay)/1000).toFixed(2))},
      eng_free:{ eng_free:$scope.eng_free, EF:$scope.ef_eng_free, ghg_kg_co:($scope.eng_free * $scope.ef_eng_free), ghg_t_co:parseFloat((($scope.eng_free * $scope.ef_eng_free)/1000).toFixed(2))},
    };
    eng_cst.total = (eng_cst.eng_pay.ghg_t_co + eng_cst.eng_free.ghg_t_co);
    localStorage.setItem('eng_cst', JSON.stringify(eng_cst));
    // console.log("eng_cst:",eng_cst);
    var water_cst = {
      pwa:{ pwa:$scope.pwa, EF:$scope.ef_pwa, ghg_kg_co:($scope.pwa * $scope.ef_pwa), ghg_t_co:parseFloat((($scope.pwa * $scope.ef_pwa)/1000).toFixed(2))},
      mwa:{ mwa:$scope.mwa, EF:$scope.ef_mwa, ghg_kg_co:($scope.mwa * $scope.ef_mwa), ghg_t_co:parseFloat((($scope.mwa * $scope.ef_mwa)/1000).toFixed(2))},
      alum:{ alum:$scope.alum, EF:$scope.ef_alum, ghg_kg_co:($scope.alum * $scope.ef_alum), ghg_t_co:parseFloat((($scope.alum * $scope.ef_alum)/1000).toFixed(2))},
      chlorine:{ chlorine:$scope.chlorine, EF:$scope.ef_chlorine, ghg_kg_co:($scope.chlorine * $scope.ef_chlorine), ghg_t_co:parseFloat((($scope.chlorine * $scope.ef_chlorine)/1000).toFixed(2))},
      lime:{ lime:$scope.lime, EF:$scope.ef_lime, ghg_kg_co:($scope.lime * $scope.ef_lime), ghg_t_co:parseFloat((($scope.lime * $scope.ef_lime)/1000).toFixed(2))},
    };
    water_cst.total = (water_cst.pwa.ghg_t_co + water_cst.mwa.ghg_t_co) + (water_cst.alum.ghg_t_co + water_cst.chlorine.ghg_t_co) + water_cst.lime.ghg_t_co;
    localStorage.setItem('water_cst', JSON.stringify(water_cst));
    // console.log("water_cst:",water_cst);
    var paper_cst = {
      paper80:{ paper80:$scope.paper80, EF:$scope.ef_paper80, kg:($scope.paper80*2.4948), ghg_kg_co:(($scope.paper80*2.4948) * $scope.ef_paper80), ghg_t_co:parseFloat(((($scope.paper80*2.4948) * $scope.ef_paper80)/1000).toFixed(2))},
      paper70:{ paper70:$scope.paper70, EF:$scope.ef_paper70, kg:($scope.paper70*2.183), ghg_kg_co:(($scope.paper70*2.183) * $scope.ef_paper70), ghg_t_co:parseFloat(((($scope.paper70*2.183) * $scope.ef_paper70)/1000).toFixed(2))},
    };
    paper_cst.total = (paper_cst.paper80.ghg_t_co + paper_cst.paper70.ghg_t_co);
    localStorage.setItem('paper_cst', JSON.stringify(paper_cst));
    // console.log("paper_cst:",paper_cst);
  }
   
  function formWastewater (){
    var methane = (0.025*(((($scope.res_pub*0.8)*$scope.bod_res_pub)/1000)-0));
    var wst_cst  = {
        art_pond:{ art_pond:$scope.art_pond,art_bod:$scope.art_bod,EF:$scope.ef_art_pond, ghg_kg_co:($scope.art_pond*$scope.art_bod)*$scope.ef_art_pond,ghg_t_co:parseFloat((($scope.art_pond*$scope.art_bod)*$scope.ef_art_pond/1000).toFixed(2))},
        bpd:{ bpd:$scope.bpd,bpd_bod:$scope.bpd_bod,EF:$scope.ef_bpd, ghg_kg_co:($scope.bpd*$scope.bpd_bod)*$scope.ef_bpd,ghg_t_co:parseFloat((($scope.bpd*$scope.bpd_bod)*$scope.ef_bpd/1000).toFixed(2))},
        res_pub:{
          res_pub:$scope.res_pub,
          waste:($scope.res_pub*0.8),
          bod_res_pub:$scope.bod_res_pub,
          s:0,
          methane:methane,
          gwp_res_pub:$scope.gwp_res_pub,
          ghg_kg_co:methane * $scope.gwp_res_pub,
          ghg_t_co:parseFloat(( methane *$scope.gwp_res_pub/1000).toFixed(2))
        }
    };
    wst_cst.total = (wst_cst.art_pond.ghg_t_co + wst_cst.bpd.ghg_t_co) + wst_cst.res_pub.ghg_t_co;
    localStorage.setItem('wst_cst', JSON.stringify(wst_cst));
    // console.log("wst_cst:",wst_cst);
  }

  function formgarbage(){
    if(cityType == "city"){
      $scope.ef_brn_bk_t1 = coff.garbageT1_cst.ef_brn_bk_city_t1;
      $scope.ef_brn_bk_t3 = coff.garbageT3_cst.ef_brn_bk_city_t3;
      // $scope.ef_brn_bk_t1 = 0.2823;
      // $scope.ef_brn_bk_t3 = 0.2823;
    }else if(cityType == "district"){
      $scope.ef_brn_bk_t1 = coff.garbageT1_cst.ef_brn_bk_district_t1;
      $scope.ef_brn_bk_t3 = coff.garbageT3_cst.ef_brn_bk_district_t3;
      // $scope.ef_brn_bk_t1 = 0.2795;
      // $scope.ef_brn_bk_t3 = 0.2795;
    }else{
      $scope.ef_brn_bk_t1 = coff.garbageT1_cst.ef_brn_bk_sp_t1;
      $scope.ef_brn_bk_t3 = coff.garbageT3_cst.ef_brn_bk_sp_t3;
      // $scope.ef_brn_bk_t1 = 0.2745;
      // $scope.ef_brn_bk_t3 = 0.2745;
    }

    var garbageT1_cst = {
      dmp_t1:{
        dmp_t1:$scope.dmp_t1,
        EF:$scope.ef_dmp_t1,
        ghg_kg_co:($scope.dmp_t1 * $scope.ef_dmp_t1),
        ghg_t_co:parseFloat((($scope.dmp_t1 * $scope.ef_dmp_t1)/1000).toFixed(2))
      },
      landfill_t1:{ landfill_t1:$scope.landfill_t1, EF:$scope.ef_landfill_t1, ghg_kg_co:($scope.landfill_t1 * $scope.ef_landfill_t1), ghg_t_co:parseFloat((($scope.landfill_t1 * $scope.ef_landfill_t1)/1000).toFixed(2))},
      brn_bk_t1:{ brn_bk_t1:$scope.brn_bk_t1, EF:$scope.ef_brn_bk_t1, ghg_kg_co:($scope.brn_bk_t1 * $scope.ef_brn_bk_t1), ghg_t_co:parseFloat((($scope.brn_bk_t1 * $scope.ef_brn_bk_t1)/1000).toFixed(2))},
    };
    garbageT1_cst.total = (garbageT1_cst.dmp_t1.ghg_t_co + garbageT1_cst.landfill_t1.ghg_t_co) + garbageT1_cst.brn_bk_t1.ghg_t_co;
    localStorage.setItem('garbageT1_cst', JSON.stringify(garbageT1_cst));
    // console.log("garbageT1_cst:",garbageT1_cst);

    var garbageT3_cst = {
      dmp_t3:{ dmp_t3:$scope.dmp_t3, EF:$scope.ef_dmp_t3, ghg_kg_co:($scope.dmp_t3 * $scope.ef_dmp_t3), ghg_t_co:parseFloat((($scope.dmp_t3 * $scope.ef_dmp_t3)/1000).toFixed(2))},
      landfill_t3:{ landfill_t3:$scope.landfill_t3, EF:$scope.landfill_t3, ghg_kg_co:($scope.landfill_t3 * $scope.ef_landfill_t3), ghg_t_co:parseFloat((($scope.landfill_t3 * $scope.ef_landfill_t3)/1000).toFixed(2))},
      brn_bk_t3:{ brn_bk_t3:$scope.brn_bk_t3, EF:$scope.ef_brn_bk_t3, ghg_kg_co:($scope.brn_bk_t3 * $scope.ef_brn_bk_t3), ghg_t_co:parseFloat((($scope.brn_bk_t3 * $scope.ef_brn_bk_t3)/1000).toFixed(2))},
    };
    garbageT3_cst.total = (garbageT3_cst.dmp_t3.ghg_t_co + garbageT3_cst.landfill_t3.ghg_t_co) + garbageT3_cst.brn_bk_t3.ghg_t_co;
    localStorage.setItem('garbageT3_cst', JSON.stringify(garbageT3_cst));
    // console.log("garbageT3_cst:",garbageT3_cst);
  }

  function formTree(){
    var tree_dmt = ($scope.tree_ccfr/3.14);
    var tree_bio_trk = 0.0396*Math.pow((Math.pow(tree_dmt, 2)*$scope.tree_h), 0.933);
    var tree_bio_st = 0.00349*Math.pow((Math.pow(tree_dmt, 2)*$scope.tree_h), 1.03);
    var tree_bio_lf = Math.pow((28/(tree_bio_trk+tree_bio_st+0.025)),-1);
    var tree_bio_on = (tree_bio_trk + tree_bio_st + tree_bio_lf);
    var tree_bio_under = (tree_bio_on * 0.27);
    var tree_bio_all = (tree_bio_on + tree_bio_under);
    var tree_cab = (tree_bio_all * 0.47);
    var tree_ghg_kg_co = (tree_cab * (44/12)) * $scope.tree;
    var tree_ghg_t_co = parseFloat((tree_ghg_kg_co / 1000).toFixed(2));

    var mgr_frs_dmt = ($scope.mgr_frs_ccfr/3.14);
    var mgr_frs_bio_trk = 0.05466*Math.pow((Math.pow(mgr_frs_dmt, 2)*$scope.mgr_frs_h), 0.945);
    var mgr_frs_bio_st = 0.01579*Math.pow((Math.pow(mgr_frs_dmt, 2)*$scope.mgr_frs_h), 0.9124);
    var mgr_frs_bio_lf = 0.0678*Math.pow((Math.pow(mgr_frs_dmt, 2)*$scope.mgr_frs_h), 0.5806);
    var mgr_frs_bio_on = (mgr_frs_bio_trk + mgr_frs_bio_st + mgr_frs_bio_lf);
    var mgr_frs_bio_under = (mgr_frs_bio_on * 0.48);
    var mgr_frs_bio_all = (mgr_frs_bio_on + mgr_frs_bio_under);
    var mgr_frs_cab = (mgr_frs_bio_all * 0.47);
    var mgr_frs_ghg_kg_co = (mgr_frs_cab * (44/12)) * $scope.mgr_frs;
    var mgr_frs_ghg_t_co = parseFloat((mgr_frs_ghg_kg_co / 1000).toFixed(2));

   
    var palm_dmt = ($scope.palm_ccfr/3.14);
    var palm_bio_trk = 0;
    var palm_bio_st = 0;
    var palm_bio_lf = 0;
    var palm_bio_on = 6.666+12.826*(Math.pow($scope.palm_h, 0.5) * Math.log($scope.palm_h));
    var palm_bio_under = (palm_bio_on * 0.41);
    var palm_bio_all = (palm_bio_on + palm_bio_under);
    var palm_cab = (palm_bio_all * 0.413);
    var palm_ghg_kg_co = (palm_cab * (44/12)) * $scope.palm;
    var palm_ghg_t_co = parseFloat((palm_ghg_kg_co / 1000).toFixed(2));

    var vine_dmt = ($scope.vine_ccfr/3.14);
    var vine_bio_trk = 0;
    var vine_bio_st = 0;
    var vine_bio_lf = 0;
    var vine_bio_on = 0.8622*(Math.pow(vine_dmt, 2.021));
    var vine_bio_under = (vine_bio_on * 0.27);
    var vine_bio_all = (vine_bio_on + vine_bio_under);
    var vine_cab = (vine_bio_all * 0.47);
    var vine_ghg_kg_co = (vine_cab * (44/12)) * $scope.palm;
    var vine_ghg_t_co = parseFloat((vine_ghg_kg_co / 1000).toFixed(2));

    var tree_cst = {
      tree:{ tree: $scope.tree, h: $scope.tree_h, ccfr: $scope.tree_ccfr, diameter: tree_dmt, bio_trk: tree_bio_trk, bio_st: tree_bio_st,
        bio_lf: tree_bio_lf, bio_on: tree_bio_on, bio_under: tree_bio_under, bio_all: tree_bio_all, cab: tree_cab, ghg_kg_co: tree_ghg_kg_co, ghg_t_co: tree_ghg_t_co
      },
      mgr_frs:{
        mgr_frs: $scope.mgr_frs,
        h: $scope.mgr_frs_h,
        ccfr: $scope.mgr_frs_ccfr,
        diameter: mgr_frs_dmt,
        bio_trk: mgr_frs_bio_trk,
        bio_st: mgr_frs_bio_st,
        bio_lf: mgr_frs_bio_lf,
        bio_on: mgr_frs_bio_on,
        bio_under: mgr_frs_bio_under,
        bio_all: mgr_frs_bio_all,
        cab: mgr_frs_cab,
        ghg_kg_co: mgr_frs_ghg_kg_co,
        ghg_t_co: mgr_frs_ghg_t_co
      },
      palm:{
        palm: $scope.palm,
        h: $scope.palm_h,
        ccfr: $scope.palm_ccfr,
        diameter: palm_dmt,
        bio_trk: palm_bio_trk,
        bio_st: palm_bio_st,
        bio_lf: palm_bio_lf,
        bio_on: palm_bio_on,
        bio_under: palm_bio_under,
        bio_all: palm_bio_all,
        cab: palm_cab,
        ghg_kg_co: palm_ghg_kg_co,
        ghg_t_co: palm_ghg_t_co
      },
      vine:{
        vine: $scope.vine,
        h: $scope.vine_h,
        ccfr: $scope.vine_ccfr,
        diameter: vine_dmt,
        bio_trk: vine_bio_trk,
        bio_st: vine_bio_st,
        bio_lf: vine_bio_lf,
        bio_on: vine_bio_on,
        bio_under: vine_bio_under,
        bio_all: vine_bio_all,
        cab: vine_cab,
        ghg_kg_co: vine_ghg_kg_co,
        ghg_t_co: vine_ghg_t_co
      }

    };
    tree_cst.total = (tree_cst.tree.ghg_t_co + tree_cst.mgr_frs.ghg_t_co) + (tree_cst.palm.ghg_t_co + tree_cst.vine.ghg_t_co );
    localStorage.setItem('tree_cst', JSON.stringify(tree_cst));
  }


  // Form steps //
  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); 
  $scope.nextPrev = function(n)  {
      var x = document.getElementsByClassName("tab");
      x[currentTab].style.display = "none";
      currentTab = currentTab + n;
      if (currentTab >= x.length) {
      }
      showTab(currentTab);
  };
    
  $scope.btnNext = true;
  $scope.btnPrev = false;
  $scope.btnCal = false;
  function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      $scope.btnNext = true;
      $scope.btnPrev = false;
      $scope.btnCal = false;
      // document.getElementById("prevBtn").style.display = "none";
    } else {
      $scope.btnCal = false;
      $scope.btnPrev = true;
      // document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      $scope.btnCal = true;
      $scope.btnNext = false;
      // document.getElementById("nextBtn").innerHTML = "คำนวน";
    } else {
      $scope.btnNext = true;
      // document.getElementById("nextBtn").innerHTML = "ถัดไป";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
  }

  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" step-active ", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " step-active ";
  }

});