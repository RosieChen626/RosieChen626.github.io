const btn = document.querySelector(".CA");

btn.addEventListener('click', ()=>{
    const loader = document.querySelector(".loader");
    btn.innerHTML=`<span class="loader"></span>`;
    const searchTerm = document.getElementById('phoneNum').value;
    filteredresult = res_data.filter((da) => da.rider_phone_num.startsWith(searchTerm));
    console.log(filteredresult);
    localStorage.setItem('data',JSON.stringify(filteredresult))
    const data = localStorage.getItem("data");
    if(data){
      window.location.href = `./mainpage.html?phone=${searchTerm}`;
      return
    }
});

function fetchData() {
    fetch(
        "https://script.google.com/macros/s/AKfycbz1MfB3vVV3hiXH7D-pwdA5AiHw8rFHBghmHW5LyG0_t6wpQXIawpE7-hCJfkmGug5c3A/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        const res_data = data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error in fetching data. Please try again.");
      });
  }

  window.onload = function () {
    localStorage.removeItem('newbie');
    localStorage.removeItem('data');
    fetchData();
  }

// function filterData(data){
//   let run = setInterval(()=>{
//     const searchtype = document.getElementById('searchtype').value;
//     const searchTerm = document.getElementById('phoneNum').value;
//     if(searchTerm.length===10){
//       clearInterval(run);
//       filteredresult = data.filter((da) =>
//         da.rider_phone_num.startsWith(searchTerm));
//       console.log(filteredresult);
//       localStorage.setItem('data',JSON.stringify(filteredresult))
//     }
//     console.log(searchtype);
//   })
// }

// const close = document.querySelector(".bxs-message-square-x");
// const warning = document.querySelector(".warn");
// close.addEventListener('click',()=>{
//   warning.style.zIndex = "-5";
// })


