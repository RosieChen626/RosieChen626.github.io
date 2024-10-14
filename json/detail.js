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
      .then((data) => {showPlay(data)})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
}
  
function showPlay(data) {
    filteredData = data.filter((da) =>
        da.date_key.startsWith(dateid) && da.rider_phone_num.startsWith(phoneid)
    );

    detail.innerHTML = '';

    filteredData.forEach((filterdata) => {
        const sp2_name = filterdata.sp2;
        const message = document.createElement("div");
        message.innerHTML = `
            <div>
                <p id=${filterdata.date_key} onclick="getClickID(this.id)">${sp2_name}</p>
            </div>
        `;
        detail.appendChild(message);
    });
}




