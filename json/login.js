const btn = document.querySelector(".CA");

btn.addEventListener('click', ()=>{
    const searchTerm = document.getElementById('phoneNum').value;
    console.log(searchTerm);
    window.location.href = `./mainpage.html?phone=${searchTerm}`
});

// function getClickID(clickID) {
//     window.location.href = `./mainpage.html?phone=${searchTerm}`
// }




