const menu = document.querySelector('.bx-menu');
const bar = document.querySelector('.bar');

menu.addEventListener('click',()=>{
    bar.classList.toggle('active');
})

const logout =document.querySelector('.item2');
const userbar = document.querySelector('.bxs-down-arrow');

userbar.addEventListener('click',()=>{
    logout.classList.toggle('active');
})

const phoneid = new URLSearchParams(window.location.search).get("phone");
const test = document.querySelector('.test');

// function fetchData() {
//     fetch(
//       "https://script.google.com/macros/s/AKfycbz1MfB3vVV3hiXH7D-pwdA5AiHw8rFHBghmHW5LyG0_t6wpQXIawpE7-hCJfkmGug5c3A/exec"
//     )
//       .then((response) => response.json())
//       .then((data) => {disPlay(data)})
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         alert("Error in fetching data. Please try again.");
//       });
//   }
  
  function disPlay() {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    filteredData = data.filter((da) =>
        da.rider_phone_num.startsWith(phoneid)
    );
  
      test.innerHTML = '';
  
      filteredData.forEach((filterdata) => {
          const date = filterdata.date_utc.slice(5,10);
          const is_garantee = filterdata.is_garantee;
          const is_service = filterdata.is_service_bonus;
          const is_online = filterdata.is_online_bonus;
          const message = document.createElement("div");
          message.innerHTML = `
              <div class="box-content" id=${filterdata.id} onclick="getClickID(this.id,filteredData)">
                  <p>${date}</p>
                  <div class="score">
                    <p class="first">${is_garantee}</p>
                    <p class="second">${is_service}</p>
                    <p class="third">${is_online}</p>
                  </div>
              </div>
              <div class="detail detail_${filterdata.id}">
                <div id="content_${filterdata.id}"></div>
              </div>
          `;
          test.appendChild(message);
          const username = document.querySelector('.username');
          const user = filterdata.user_name;
          console.log(user);
          username.textContent=user;
      });
  }

  window.onload = function () {
    disPlay();
  }

  function getClickID(this_id, filteredData) {

    const result = filteredData.filter((dt) => dt.id === parseInt(this_id));
    const clickData = result[0];
    console.log(result);

    const idNum = this_id;
    const content = document.getElementById(`content_${idNum}`);
    const date = clickData.date_utc.slice(5,10);

    //SP2_1資訊
    const sp2_1 = clickData.sp2_1;
    const sp2_1_serve_type = clickData.sp2_1_serve_type;
    const sp2_1_remain_delivering_qty = clickData.sp2_1_remain_delivering_qty;
    const sp2_1_delivered_cnt = clickData.sp2_1_delivered_cnt;
    const is_sp2_1_cleaned_solid = clickData.is_sp2_1_cleaned_solid;
    const is_sp2_1_garantee_bonus = clickData.is_sp2_1_garantee_bonus;
    const is_sp2_1_cleaned = clickData.is_sp2_1_cleaned;
    const is_sp2_1_service_bonus = clickData.is_sp2_1_service_bonus;
    const sp2_1_clened_ttl_cnt = clickData.sp2_1_clened_ttl_cnt;

    //SP2_2資訊
    const sp2_2 = clickData.sp2_2;
    const sp2_2_serve_type = clickData.sp2_2_serve_type;
    const sp2_2_remain_delivering_qty = clickData.sp2_2_remain_delivering_qty;
    const sp2_2_delivered_cnt = clickData.sp2_2_delivered_cnt;
    const is_sp2_2_cleaned_solid = clickData.is_sp2_2_cleaned_solid;
    const is_sp2_2_garantee_bonus = clickData.is_sp2_2_garantee_bonus;
    const is_sp2_2_cleaned = clickData.is_sp2_2_cleaned;
    const is_sp2_2_service_bonus = clickData.is_sp2_2_service_bonus;
    const sp2_2_clened_ttl_cnt = clickData.sp2_2_clened_ttl_cnt;

    //SP2_3資訊
    const sp2_3 = clickData.sp2_3;
    const sp2_3_serve_type = clickData.sp2_3_serve_type;
    const sp2_3_remain_delivering_qty = clickData.sp2_3_remain_delivering_qty;
    const sp2_3_delivered_cnt = clickData.sp2_3_delivered_cnt;
    const is_sp2_3_cleaned_solid = clickData.is_sp2_3_cleaned_solid;
    const is_sp2_3_garantee_bonus = clickData.is_sp2_3_garantee_bonus;
    const is_sp2_3_cleaned = clickData.is_sp2_3_cleaned;
    const is_sp2_3_service_bonus = clickData.is_sp2_3_service_bonus;
    const sp2_3_clened_ttl_cnt = clickData.sp2_3_clened_ttl_cnt;

    //出勤資訊

    const checkin = clickData.checkin.slice(11,19);
    const working_hours = clickData.working_hours; 
    const on_time = clickData.on_time;
    const cleaned_or_hours_hit_standard = clickData.cleaned_or_hours_hit_standard;
    // const absent_cnt= clickData.absent_cnt;
    const attendance_record = clickData.attendance_record;
    const workdays = clickData.workdays;

    //任務品質

    const smart_inbound = clickData.smart_inbound;
    const appsheet = clickData.appsheet;
    const extra_support = clickData.extra_support;
    
    //delivered_distinguish
    const is_garantee_subtotal = clickData.is_garantee_subtotal;
    const delivered_in_assign_sp2 = clickData.delivered_in_assign_sp2;
    const garantee_bonus = clickData.garantee_bonus;
    const support_cnt = clickData.support_cnt;
    const service_bonus_cnt = clickData.service_bonus_cnt;
    const actual_delivered = clickData.actual_delivered;

    //上線獎勵

    const online_bonus_subtotal = clickData.online_bonus_subtotal;
    const accu_delivered = clickData.accu_delivered;
    const accu_workdays = clickData.accu_workdays;
    const accu_workdays_in_weekend = clickData.accu_workdays_in_weekend;
    const seq_usage_day = parseFloat(clickData.seq_usage_day*100).toFixed(2) + "%";
    const seq_usage_w = parseFloat(clickData.seq_usage_w*100).toFixed(2)  + "%";

    content.innerHTML=`
    <div>
      <ul class="accordion">
      <div id="capture-section1_${idNum}">
        <li><input class="contentuse" type="radio" name="accordion" id="first_${idNum}" checked>
        <label for="first_${idNum}">保底獎勵(${date})</label>
        <div class="content">
        <i class='bx bx-download' class="download_btn" onclick="gatCapture(${idNum},1)"></i>
        <table><tr><th colspan="7" class="first_th">當日總配達顆數 [A+B+C]</th></tr>
        <tr><td colspan="7">${is_garantee_subtotal}</td></tr>
        <tr><td></td></tr>
        <tr><th colspan="2">[A]指定門市配送顆數</th><th colspan="3">[B]保底額外獎勵顆數</th><th colspan="2">[C]支援配送件數</th></tr>
        <tr><td colspan="2">${delivered_in_assign_sp2}</td><td colspan="3">${garantee_bonus}</td><td colspan="2">${support_cnt}</td></tr>
        <tr><td></td></tr><tr><th colspan="7">配送明細</th></tr>
        <tr><td class="second_title">門市</td><td class="second_title">服務性質</td><td class="second_title">應配貨量(異常)</td><td class="second_title">門市總配送件數</td><td class="second_title">個人配送件數</td><td class="second_title">是否獨立清空</td><td class="second_title">保底任務</td></tr>
        <tr><td>${sp2_1}</td><td>${sp2_1_serve_type}</td><td>${sp2_1_remain_delivering_qty}</td><td>${sp2_1_clened_ttl_cnt}</td><td>${sp2_1_delivered_cnt}</td><td>${is_sp2_1_cleaned_solid}</td><td>${is_sp2_1_garantee_bonus}</td></tr>
        <tr><td>${sp2_2}</td><td>${sp2_2_serve_type}</td><td>${sp2_2_remain_delivering_qty}</td><td>${sp2_2_clened_ttl_cnt}</td><td>${sp2_2_delivered_cnt}</td><td>${is_sp2_2_cleaned_solid}</td><td>${is_sp2_2_garantee_bonus}</td></tr>
        <tr><td>${sp2_3}</td><td>${sp2_3_serve_type}</td><td>${sp2_3_remain_delivering_qty}</td><td>${sp2_3_clened_ttl_cnt}</td><td>${sp2_3_delivered_cnt}</td><td>${is_sp2_3_cleaned_solid}</td><td>${is_sp2_3_garantee_bonus}</td></tr>
        <tr><td></td></tr><tr><th colspan="7">配送品質(日累計)</th></tr><tr><td colspan="3" class="second_title">智能門市SOP執行率</td><td colspan="4" class="second_title">當日是否配合支援</td></tr>
        <tr><td colspan="3">${smart_inbound}</td><td colspan="4">${extra_support}</td></tr>
        <tr><td colspan="3" class="second_title">上線時間</td><td colspan="4" class="second_title">累積上線時數</td></tr>
        <tr><td colspan="3">${checkin}</td><td colspan="4">${working_hours}</td></tr>
        <tr><td colspan="3" class="second_title">於建議時間前上線</td><td colspan="4" class="second_title">符合配送時數</td></tr>
        <tr><td colspan="3">${on_time}</td><td colspan="4">${cleaned_or_hours_hit_standard}</td></tr>
        <tr><td></td></tr><tr><th colspan="7">配送品質(周累計)</th></tr><tr><td colspan="3" class="second_title">當周配送品質累計不佳次數</td><td colspan="4" class="second_title">當周規劃上線天數</td></tr>
        <tr><td colspan="3" class="last_td">${attendance_record}</td><td colspan="4" class="last_td">${workdays}</td></tr></table></div></li>
      </div>
      <div id="preview-container1_${idNum}" class="preview">
        <img id="screenshot-preview1_${idNum}"/>
      </div>
      <div id="capture-section2_${idNum}">
        <li><input class="contentuse" type="radio" name="accordion" id="second_${idNum}"><label for="second_${idNum}">服務品質獎勵(${date})</label>
        <div class="content">
        <i class='bx bx-download' class="download_btn" onclick="gatCapture(${idNum},2)"></i>
        <table><tr><th colspan="7" class="first_th">服務獎勵結算</th></tr>
        <tr><td colspan="7">${service_bonus_cnt}</td></tr><tr><td></td></tr>
        <tr><th colspan="3">實際配送顆數</th><th colspan="4">保底加給(不提供服務獎勵)</th></tr>
        <tr><td colspan="3">${actual_delivered}</td><td colspan="4">${garantee_bonus}</td></tr>
        <tr><td></td></tr><tr><th colspan="7">配送明細</th></tr><tr><td class="second_title">門市</td><td class="second_title">服務性質</td><td class="second_title">應配貨量(異常)</td><td class="second_title">門市總配送件數</td><td class="second_title">個人配送件數</td><td class="second_title">是否清空</td><td class="second_title">服務獎勵</td></tr>
        <tr><td>${sp2_1}</td><td>${sp2_1_serve_type}</td><td>${sp2_1_remain_delivering_qty}</td><td>${sp2_1_clened_ttl_cnt}</td><td>${sp2_1_delivered_cnt}</td><td>${is_sp2_1_cleaned}</td><td>${is_sp2_1_service_bonus}</td></tr><tr><td>${sp2_2}</td><td>${sp2_2_serve_type}</td><td>${sp2_2_remain_delivering_qty}</td><td>${sp2_2_clened_ttl_cnt}</td><td>${sp2_2_delivered_cnt}</td><td>${is_sp2_2_cleaned}</td><td>${is_sp2_2_service_bonus}</td></tr>
        <tr><td>${sp2_3}</td><td>${sp2_3_serve_type}</td><td>${sp2_3_remain_delivering_qty}</td><td>${sp2_3_clened_ttl_cnt}</td><td>${sp2_3_delivered_cnt}</td><td>${is_sp2_3_cleaned}</td><td>${is_sp2_3_service_bonus}</td></tr><tr><td></td></tr>
        <tr><th colspan="7">配送品質</th></tr><tr><td colspan="2" class="second_title">智能門市SOP執行率</td><td colspan="3" class="second_title">APPSHEET滯留包裹</td><td colspan="2" class="second_title">調度支援意願</td></tr><tr><td colspan="2">${smart_inbound}</td><td colspan="3">${appsheet}</td><td colspan="2">${extra_support}</td><tr><td colspan="7" class="second_title">累計時數</td></tr><tr><td colspan="7" class="last_td">${working_hours}</td></tr>
        </table></div></li>
      </div>
      <div id="preview-container2_${idNum}" class="preview">
        <img id="screenshot-preview2_${idNum}"/>
      </div>
      <div id="capture-section3_${idNum}">
        <li><input class="contentuse" type="radio" name="accordion" id="third_${idNum}"><label for="third_${idNum}">上線獎勵(${date})</label>
        <div class="content">
        <i class='bx bx-download' class="download_btn" onclick="gatCapture(${idNum},3)"></i>
        <table><tr><th colspan="6" class="first_th">上線獎勵結算</th></tr>
        <tr><td colspan="6">${online_bonus_subtotal}</td></tr><tr><td></td></tr><tr><th colspan="2">當周累計配送顆數</th><th colspan="2">當周累計上線天數</th><th colspan="2">假日累計上線天數</th></tr><tr><td colspan="2">${accu_delivered}</td><td colspan="2">${accu_workdays}</td><td colspan="2">${accu_workdays_in_weekend}</td></tr><tr><td></td></tr><tr><th colspan="6">任務執行品質</th></tr>
        <tr><td colspan="3" class="second_title">當日推薦排序使用率</td><td colspan="3" class="second_title">當周推薦排序使用率</td></tr><tr><td colspan="3" class="last_td">${seq_usage_day}</td><td colspan="3" class="last_td">${seq_usage_w}</td></tr></table></div></li></ul>
      </div>
      <div id="preview-container3_${idNum}" class="preview">
        <img id="screenshot-preview3_${idNum}"/>
      </div>
    </div>
    `
  }

  function gatCapture(id,Num){
      // Select the section to be captured
      const captureSection = document.getElementById(`capture-section${Num}_${id}`);
    
      // Use dom-to-image to convert the section into an image
      domtoimage.toPng(captureSection)
        .then(function (dataUrl) {
          // Display the screenshot preview
          const previewContainer = document.getElementById(`preview-container${Num}_${id}`);
          const previewImage = document.getElementById(`screenshot-preview${Num}_${id}`);
          // previewContainer.classList.remove('hidden');
    
          // Set the src attribute to the data URL of the captured image
          previewImage.src = dataUrl;
    
          // Enable the download functionality
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'screenshot.png';
          link.click();
        })
        .catch(function (error) {
          console.error('Error capturing the image: ', error);
    });
  }

//prefetch api for newbie program page
function fetchDataForNewbieProgram() {
  localStorage.removeItem('newbie');
  fetch(
    "https://script.google.com/macros/s/AKfycbzE51_kiyo1cKCFGtZQcvbvobK6aG5fkZuZ0ab-Wa0EfnsCtJL4fpTGeMm1X7tBj24X/exec"
  )
    .then((response) => response.json())
    .then((data) => localStorage.setItem('newbie',JSON.stringify(data)))
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Error in fetching data. Please try again.");
    });
}

fetchDataForNewbieProgram();

const newbie = document.querySelector(".newbiepage");
const loader = document.querySelector(".loader");
const switchpage = document.querySelector('.item2');
const unavailable = document.querySelector(".unavailable");

newbie.addEventListener('click', ()=>{

    loader.style.visibility='visible';
    let check = setInterval(()=>{
      const newbie = JSON.parse(localStorage.getItem("newbie"));
      if(newbie){
        newbiedata = newbie.filter((da) => da.phone.startsWith(phoneid));
        clearInterval(check);
        console.log(newbiedata);
        if(newbiedata.length>0){
          loader.style.visibility='hidden';
          window.location.href = `./newbie.html?phone=${phoneid}`

          return

        }else{
          loader.style.visibility='hidden';
          // unavailable.style.visibility='visible';
          unavailable.classList.add('popup');
          setTimeout(()=>{
            // unavailable.style.visibility='hidden';
            unavailable.classList.remove('popup');
          },5000)

          return
        }
      }
    })
},500);

const instruc = document.querySelector(".ins")
const instruction = document.querySelector(".unavailable2");

instruc.addEventListener('click', ()=>{
  instruction.style.visibility='visible';
  instruction.classList.add('popup2');
  setTimeout(()=>{
    instruction.classList.remove('popup2');
    instruction.style.visibility='hidden';
  },5000)
})

