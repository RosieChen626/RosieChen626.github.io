const btn = document.querySelector(".CA");

btn.addEventListener('click', ()=>{
    const loading = document.querySelector(".loading");
    loading.classList.add('transfrom');
    const searchTerm = document.getElementById('phoneNum').value;
    let run = setInterval(()=>{
      setTimeout(()=>{
        const data = localStorage.getItem("data");
        if(data){
          clearInterval(run);
          window.location.href = `./mainpage.html?phone=${searchTerm}`;
          return
        }
      },500)
    })
});

function fetchData() {
    fetch(
      "https://script.google.com/macros/s/AKfycbz1MfB3vVV3hiXH7D-pwdA5AiHw8rFHBghmHW5LyG0_t6wpQXIawpE7-hCJfkmGug5c3A/exec"
    )
      .then((response) => response.json())
      // .then((data) => localStorage.setItem('data',JSON.stringify(data)))
      .then((data) => {alert("success");})
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error in fetching data. Please try again.");
      });
  }

  window.onload = function () {
    localStorage.removeItem('data');
    fetchData();
  }



