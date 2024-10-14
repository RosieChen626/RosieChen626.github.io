const phoneid = new URLSearchParams(window.location.search).get("phone");
const dateid = new URLSearchParams(window.location.search).get("date");
const detail = document.querySelector('.show-detail');

window.onload = function () {
    fetchData();
  }

function fetchData() {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=VJ1xr1nbKUOJzGYdnGwD-LMKzlcn8dQjuyIKcN0DHbQOHy7R5QA3hv47li0e5Z76UvMgBgPF2-sN1nztzkqfV8Nx6AtVQ1_Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNotpTzd4o6uBzzsHMQgjwSM5Ns1DvLXMJl7b7ekg_aWWPX_gHxgEg8K7al2S5VOErrRTM9WI93acx_QUvMlBLxKy7N2inEdedz9Jw9Md8uu&lib=MIxchE2r06uWDw2dwzgX5WQVl-wMnzYbk"
    )
      .then((response) => response.json())
      .then((data) => {showData(data)})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
}
  
function showData(data) {
    filteredData = data.filter((da) =>
        da.date_key.startsWith(dateid) && da.rider_phone_num.startsWith(phoneid)
    );

    detail.innerHTML = '';

    filteredData.forEach((filterdata) => {
        const sp2_name = filterdata.sp2;
        const message = document.createElement("div");
        message.innerHTML = `
            <div>
              <ul class="accordion">
              <li><input class="contentuse" type="radio" name="accordion" id="first" checked>
              <label for="first">保底獎勵</label>
              <div class="content">
              <table><tr><th colspan="6" class="first_th">當日總配達顆數 (A+B+C)</th></tr>
              <tr><td colspan="6">'+garantee_bonus_intotal+'</td></tr>
              <tr><td></td></tr>
              <tr><th colspan="2">[1]指定門市配送顆數</th><th colspan="2">[B]保底額外獎勵顆數</th><th colspan="2">[C]支援配送件數</th></tr>
              <tr><td colspan="2">'+deliverd_in_assign_sp2+'</td><td colspan="2">'+garantee_bonus+'</td><td colspan="2">'+support_qty+'</td></tr>
              <tr><td></td></tr><tr><th colspan="6">配送明細</th></tr>
              <tr><td class="second_title">門市</td><td class="second_title">服務性質</td><td class="second_title">應配達貨量</td><td class="second_title">配送件數</td><td class="second_title">是否獨立清空</td><td class="second_title">保底任務</td></tr>
              <tr><td>'+sp2_1+'</td><td>'+type_1+'</td><td>'+remain_delivering_1+'</td><td>'+delivered_1+'</td><td>'+is_cleared_by_assign_1+'</td><td>'+is_garantee_bonus_1+'</td></tr>
              <tr><td>'+sp2_2+'</td><td>'+type_2+'</td><td>'+remain_delivering_2+'</td><td>'+delivered_2+'</td><td>'+is_cleared_by_assign_2+'</td><td>'+is_garantee_bonus_2+'</td></tr>
              <tr><td>'+sp2_3+'</td><td>'+type_3+'</td><td>'+remain_delivering_3+'</td><td>'+delivered_3+'</td><td>'+is_cleared_by_assign_3+'</td><td>'+is_garantee_bonus_3+'</td></tr>
              <tr><td>'+sp2_4+'</td><td>'+type_4+'</td><td>'+remain_delivering_4+'</td><td>'+delivered_4+'</td><td>'+is_cleared_by_assign_4+'</td><td>'+is_garantee_bonus_4+'</td></tr>
              <tr><td></td></tr><tr><th colspan="6">任務執行品質</th></tr><tr><td colspan="3" class="second_title">智能門市SOP執行率</td><td colspan="3" class="second_title">當日是否配合支援</td></tr>
              <tr><td colspan="3">'+smart_inbound_followrate+'</td><td colspan="3">'+unwillingness_for_extra_support+'</td></tr>
              <tr><td></td></tr><tr><th colspan="6">配送品質</th></tr><tr><td colspan="2" class="second_title">上線時間</td><td colspan="4" class="second_title">累積上線時數</td></tr>
              <tr><td colspan="2">'+first_timestampe+'</td><td colspan="4">'+working_hour+'</td></tr>
              <tr><td colspan="2" class="second_title">於建議時間前上線</td><td colspan="2" class="second_title">清空指定門市或時數達標</td><td colspan="2" class="second_title">上線所有指定門市上線配送</td></tr>
              <tr><td colspan="2">'+on_time+'</td><td colspan="2">'+all_clean+'</td><td colspan="2">'+attend_as_plan+'</td></tr>
              <tr><td></td></tr><tr><th colspan="6">配送品質(周累計)</th></tr><tr><td colspan="3" class="second_title">當周配送品質累計不佳次數</td><td colspan="3" class="second_title">當周規劃上線天數是否達標</td></tr>
              <tr><td colspan="3" class="last_td">'+arrendance_quality_w+'</td><td colspan="3" class="last_td">'+workday_in_w+'</td></tr></table></div></li>
              <li><input class="contentuse" type="radio" name="accordion" id="second"><label for="second">服務品質獎勵</label>
              <div class="content"><table><tr><th colspan="6" class="first_th">服務獎勵結算</th></tr>
              <tr><td colspan="6">'+service_bonus_intotal+'</td></tr><tr><td></td></tr>
              <tr><th colspan="3">實際配送顆數</th><th colspan="3">保底加給(不提供服務獎勵)</th></tr>
              <tr><td colspan="3">'+actual_delivered+'</td><td colspan="3">'+garantee_bonus+'</td></tr>
              <tr><td></td></tr><tr><th colspan="6">配送明細</th></tr><tr><td class="second_title">門市</td><td class="second_title">服務性質</td><td class="second_title">應配達貨量</td><td class="second_title">配送件數</td><td class="second_title">是否清空</td><td class="second_title">服務獎勵</td></tr>
              <tr><td>'+sp2_1+'</td><td>'+type_1+'</td><td>'+remain_delivering_1+'</td><td>'+delivered_1+'</td><td>'+is_clear_1+'</td><td>'+is_service_bonus_1+'</td></tr><tr><td>'+sp2_2+'</td><td>'+type_2+'</td><td>'+remain_delivering_2+'</td><td>'+delivered_2+'</td><td>'+is_clear_2+'</td><td>'+is_service_bonus_2+'</td></tr>
              <tr><td>'+sp2_3+'</td><td>'+type_3+'</td><td>'+remain_delivering_3+'</td><td>'+delivered_3+'</td><td>'+is_clear_3+'</td><td>'+is_service_bonus_3+'</td></tr><tr><td>'+sp2_4+'</td><td>'+type_4+'</td><td>'+remain_delivering_4+'</td><td>'+delivered_4+'</td><td>'+is_clear_4+'</td><td>'+is_service_bonus_4+'</td></tr><tr><td></td></tr>
              <tr><th colspan="6">任務執行品質</th></tr><tr><td colspan="2" class="second_title">智能門市SOP執行率</td><td colspan="2" class="second_title">APPSHEET滯留包裹</td><td colspan="2" class="second_title">調度支援意願</td></tr><tr><td colspan="2">'+smart_inbound_followrate+'</td><td colspan="2">'+is_appsheet_cleaned+'</td><td colspan="2">'+unwillingness_for_extra_support+'</td></tr>
              <tr><td></td></tr>
              <tr><th colspan="6">配送品質</th></tr><tr><td colspan="2" class="second_title">上線時間</td><td colspan="4" class="second_title">累計上線時間</td></tr><tr><td colspan="2">'+first_timestampe+'</td><td colspan="4">'+working_hour+'</td></tr><tr><td colspan="2" class="second_title">於建議時間前上線</td><td colspan="2" class="second_title">清空指定門市或時數達標</td><td colspan="2" class="second_title">上線所有指定門市</td></tr><tr><td colspan="2" class="last_td">'+on_time+'</td><td colspan="2" class="last_td">'+all_clean+'</td><td colspan="2" class="last_td">'+attend_as_plan+'</td></tr></table></div></li><li><input class="contentuse" type="radio" name="accordion" id="third"><label for="third">上線獎勵</label><div class="content"><table><tr><th colspan="6" class="first_th">上線獎勵結算</th></tr><tr><td colspan="6">'+online_bonus_summary+'</td></tr><tr><td></td></tr><tr><th colspan="2">當周累計配送天數</th><th colspan="2">當周累計上線天數</th><th colspan="2">假日累計上線天數</th></tr><tr><td colspan="2">'+accu_delivered+'</td><td colspan="2">'+accu_online_week+'</td><td colspan="2">'+accu_online_weekend+'</td></tr><tr><td></td></tr><tr><th colspan="6">任務執行品質</th></tr><tr><td colspan="3" class="second_title">當日推薦排序使用率</td><td colspan="3" class="second_title">當周推薦排序使用率</td></tr><tr><td colspan="3" class="last_td">'+seq_usagerate_day+'</td><td colspan="3" class="last_td">'+seq_usagerate_week+'</td></tr></table></div></li></ul>
            </div>
        `;
        detail.appendChild(message);
    });
}




