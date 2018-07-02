const dynamo = document.querySelector('.js');
const child = document.querySelector('.explore');
const text = "Divine Blue certification is a leading kolkata-based consultants.";
let i=0;
function heading() {
    if(i < text.length){
        dynamo.textContent = dynamo.textContent +  text.charAt(i);
        if(i == (text.length-1)){
            child.style.opacity = '1';
            child.style.transform = 'translateY(0%)';
        }
        i++;
        setTimeout(heading, 100);
    }
}
setTimeout(heading, 2800);

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

//explore button
const banner = document.querySelector('.banner');
child.addEventListener('click', function(){
    let len = banner.offsetHeight;
    window.scrollTo(0, len);
})
