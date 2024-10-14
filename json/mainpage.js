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

function fetchData() {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=VJ1xr1nbKUOJzGYdnGwD-LMKzlcn8dQjuyIKcN0DHbQOHy7R5QA3hv47li0e5Z76UvMgBgPF2-sN1nztzkqfV8Nx6AtVQ1_Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNotpTzd4o6uBzzsHMQgjwSM5Ns1DvLXMJl7b7ekg_aWWPX_gHxgEg8K7al2S5VOErrRTM9WI93acx_QUvMlBLxKy7N2inEdedz9Jw9Md8uu&lib=MIxchE2r06uWDw2dwzgX5WQVl-wMnzYbk"
    )
      .then((response) => response.json())
      .then((data) => {disPlay(data)})
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Error in fetching data. Please try again.");
      });
  }
  
  function disPlay(data) {
      filteredData = data.filter((da) =>
          da.rider_phone_num.startsWith(phoneid)
      );
  
      test.innerHTML = '';
  
      filteredData.forEach((filterdata) => {
          const date = filterdata.date.slice(0,10);
          const is_garantee = filterdata.is_garantee;
          const is_service = filterdata.is_service_bonus;
          const is_online = filterdata.is_online_bonus;
          const message = document.createElement("div");
          message.innerHTML = `
              <div class="box-content">
                  <p id=${filterdata.date_key} onclick="getClickID(this.id)">${date}</p>
                  <div class="score">
                    <p class="first">${is_garantee}</p>
                    <p class="second">${is_service}</p>
                    <p class="third">${is_online}</p>
                  </div>
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
    fetchData();
  }

  function getClickID(clickID) {
    window.location.href = `./detail.html?phone=${phoneid}&date=${clickID}`
}