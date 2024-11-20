const day_cnt = document.querySelector(".day");


function dayCal(){
    const data = JSON.parse(localStorage.getItem("newbie") || "[]");
    let start_value = 0;
    let end_value = 23;
    let day = setInterval(()=>{
        start_value++;
        day_cnt.textContent=`${start_value}`;
        if(start_value === end_value){
            clearInterval(day);
        }
    }, 35)
}

//fetch api
// function fetchData() {
//     fetch(
//       "https://script.google.com/macros/s/AKfycbzE51_kiyo1cKCFGtZQcvbvobK6aG5fkZuZ0ab-Wa0EfnsCtJL4fpTGeMm1X7tBj24X/exec"
//     )
//       .then((response) => response.json())
//       .then((data) => {disPlay(data),dayCal(data);})
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         alert("Error in fetching data. Please try again.");
//       });
// }

window.onload = function () {
    disPlay();
}

const phoneid = new URLSearchParams(window.location.search).get("phone");
const datenote2 = document.querySelector(".datenote2");
const progress1 = document.querySelector(".progress1");
const progress2 = document.querySelector(".progress2");
const progress3 = document.querySelector(".progress3");
const sminbound = document.querySelector(".si");
const workhour = document.querySelector(".wh");
const sequencing = document.querySelector(".sq");

function disPlay() {
      const data = JSON.parse(localStorage.getItem("newbie") || "[]");
      filteredData = data.filter((da) =>
          da.phone.startsWith(phoneid)
      );

      filteredData.forEach((filterdata) => {
        if(new Date(filterdata.phase1_deadline)>=new Date() && parseInt(filterdata.online_cnt_1)<40){
            datenote2.innerHTML = `*第一階段任務: 需於${new Date(filterdata.start_datetime).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }).slice(0,10)}~${new Date(filterdata.phase1_deadline).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }).slice(0,10)}累計上線達40天`;
            progress1.classList.add('achieve');
            let start_value = 0;
            let end_value = parseInt(filterdata.online_cnt_1);
            let day = setInterval(()=>{
                start_value++;
                day_cnt.textContent=`${start_value}`;
                if(start_value === end_value){
                    clearInterval(day);
                }
            }, 35)
        }else if(new Date(filterdata.phase1_deadline)<new Date() && parseInt(filterdata.online_cnt_1)>=40 && parseInt(filterdata.online_cnt_2)<100){
            datenote2.innerHTML =`*已完成第一階段任務，第二階段任務: 需於${new Date(filterdata.start_datetime).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }).slice(0,10)}~${new Date(filterdata.phase2_deadline).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }).slice(0,10)}累計上線達100天`;
            progress1.classList.add('achieve');
            progress2.classList.add('achieve');
            let start_value = 0;
            let end_value = parseInt(filterdata.online_cnt_2);
            let day = setInterval(()=>{
                start_value++;
                day_cnt.textContent=`${start_value}`;
                if(start_value === end_value){
                    clearInterval(day);
                }
            }, 35)
        }else if(new Date(filterdata.phase1_deadline)<new Date() && parseInt(filterdata.online_cnt_1)<40){
            datenote2.innerHTML = `*未於${new Date(filterdata.start_datetime).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }).slice(0,10)}~${new Date(filterdata.phase1_deadline).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }).slice(0,10)}完成第一階任務`;
            progress1.classList.add('achieve');
            let start_value = 0;
            let end_value = parseInt(filterdata.online_cnt_1);
            let day = setInterval(()=>{
                start_value++;
                day_cnt.textContent=`${start_value}`;
                if(start_value === end_value){
                    clearInterval(day);
                }
            }, 35)
        }else if(new Date(filterdata.phase1_deadline)<new Date() && parseInt(filterdata.online_cnt_1)>=40 && parseInt(filterdata.online_cnt_2)>=100){
            datenote2.innerHTML = `*恭喜您達成新手獎勵任務! 獎金發放請洽營運人員`;
            progress1.classList.add('achieve');
            progress2.classList.add('achieve');
            progress3.classList.add('achieve');
            let start_value = 0;
            let end_value = parseInt(filterdata.online_cnt_2);
            let day = setInterval(()=>{
                start_value++;
                day_cnt.textContent=`${start_value}`;
                if(start_value === end_value){
                    clearInterval(day);
                }
            }, 35)
        }
        sminbound.innerHTML=`${parseFloat(filterdata.sop_follow_rate*100).toFixed(2) + "%"}`;
        workhour.innerHTML=`${filterdata.avg_working_hours.toFixed(2)}`;
        sequencing.innerHTML=`${parseFloat(filterdata.seq_usage_rate*100).toFixed(2) + "%"}`;

      }
    )
}




