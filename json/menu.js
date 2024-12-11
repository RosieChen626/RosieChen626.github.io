const hist = document.querySelector(".history");
const report = document.querySelector(".report");
const newbie  = document.querySelector(".newbie");
const logout = document.querySelector(".logout");
const back = document.querySelector(".back");

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

const phoneid = new URLSearchParams(window.location.search).get("phone");

hist.addEventListener('click', ()=>{
    window.location.href = `./mainpage.html?phone=${phoneid}`;
})

report.addEventListener('click', ()=>{
    window.location.href = `./report.html`;
})

// newbie.addEventListener('click', ()=>{
//     window.location.href = `./newbie.html?phone=${phoneid}`;
// })

logout.addEventListener('click', ()=>{
    window.location.href = `./index.html`;
})

back.addEventListener('click', ()=>{
    history.back()
})

// is_newbie
newbie.addEventListener('click', ()=>{

    const newbiepage = document.querySelector(".newbiepage");

    let check = setInterval(()=>{
      const newbie = JSON.parse(localStorage.getItem("newbie"));
      if(newbie){
        newbiedata = newbie.filter((da) => da.phone.startsWith(phoneid));
        clearInterval(check);
        console.log(newbiedata);
        if(newbiedata.length>0){
          window.location.href = `./newbie.html?phone=${phoneid}`

          return

        }else{
          newbiepage.innerHTML=`<i class='bx bxs-user-x'></i>`;

          return
        }
      }
    })
},500);
