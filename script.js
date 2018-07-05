//navigation
const navmenu = document.querySelector('.nav');
const navbtn = document.querySelector('.navbtn');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

navmenu.style.left = "-70vw";

function menu() {
    if(navmenu.style.left == "-70vw"){
        navmenu.style.left = "0vw";
        body.style.overflowY = "hidden";
        overlay.style.display = "block";
    } else {
        navmenu.style.left = "-70vw";
        body.style.overflowY = "scroll";
        overlay.style.display = "none";
    }
}
navbtn.addEventListener('click', menu);
overlay.addEventListener('click', menu);