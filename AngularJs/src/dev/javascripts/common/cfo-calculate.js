app.factory("cfo_connect_api",function(){
    return{
        getcoff: function(){
            $.ajax({
                type: "get",
                async: true,
                timeout:3000,
                url: 'http://113.53.233.60/pmrapp-api/v1/cfo_cal/coeffs/current',
                success: function(data){
                   result = data;
                   localStorage.setItem("cfo_coff",JSON.stringify(result));
                },
                error: function(errMsg){
                    // console.log("errMsg"+errMsg);
                    // var coff_default_str = {"industry":[1.92,4.76,1940.60],"travel":[5.11,14.57,12742.01],"residence":[4.16,8.84,4689.63],"agriculture":[2.98,6.37,926.64]};
                    var cfo_coff_defaul ={
                        "fuel_cst": {
                            "ef_dsl_mch": 2.7076,
                            "ef_gsl_mch": 2.1892,
                            "ef_dsl_car": 2.7403,
                            "ef_gsl_car": 2.2373,
                            "ef_lpg_car": 3.1988,
                            "ef_ngv_car": 2.254
                        },
                        "lpg_cst": {
                            "ef_lpg_size4": 3.1133,
                            "ef_lpg_size7": 3.1133,
                            "ef_lpg_size11": 3.1133,
                            "ef_lpg_size13": 3.1133,
                            "ef_lpg_size15": 3.1133,
                            "ef_lpg_size48": 3.1133
                        },
                        "egs_air_ftz_cst": {
                            "ef_egs_age": 1,
                            "ef_r134a": 1300,
                            "ef_r32": 677,
                            "ef_r410a": 2087.5,
                            "ef_r22": 1760,
                            "ef_ogn_ftz": 0.1097,
                            "ef_fml_ftz46": 3.3036,
                            "ef_fml_ftz15": 1.5083,
                            "ef_fml_ftz13": 1.347,
                            "ef_fml_ftz16": 1.5922,
                            "ef_ftz16": 1.6089,
                            "ef_ftz8": 1.1355,
                            "ef_inctc_g28": 14.1
                        },
                        "st_tanks_cst": {
                            "ef_STanks": 0.0033
                        },
                        "eng_cst": {
                            "ef_eng_pay": 0.4999,
                            "ef_eng_free": 0.4999
                        },
                        "water_cst": {
                            "ef_pwa": 0.2843,
                            "ef_mwa": 0.7948,
                            "ef_alum": 0.5311,
                            "ef_chlorine": 1.0548,
                            "ef_lime": 0.7759
                        },
                        "paper_cst": {
                            "ef_paper80": 2.0859,
                            "ef_paper70": 2.0859
                        },
                        "wst_cst": {
                            "ef_art_pond": 0,
                            "ef_bpd": 0.0033,
                            "bod_res_pub": 110,
                            "gwp_res_pub": 28
                        },
                        "garbageT1_cst": {
                            "ef_dmp_t1": 1.0388,
                            "ef_landfill_t1": 0.7933,
                            "ef_brn_bk_sp_t1": 0.2745,
                            "ef_brn_bk_city_t1": 0.2823,
                            "ef_brn_bk_district_t1": 0.2795
                        },
                        "garbageT3_cst": {
                            "ef_dmp_t3": 1.0388,
                            "ef_landfill_t3": 0.7933,
                            "ef_brn_bk_sp_t3": 0.2745,
                            "ef_brn_bk_city_t3": 0.2823,
                            "ef_brn_bk_district_t3": 0.2795
                        }
                    };
                    var cfo_coff = localStorage.getItem('cfo_coff');
                    if(cfo_coff == null){
                        localStorage.setItem("cfo_coff", JSON.stringify(cfo_coff_defaul)); 
                        //coff = JSON.parse(coff_default_str);
                    }else{
                        //coff = JSON.parse(coffStorage_str);
                    }
                }
            });
        },
    };

});


