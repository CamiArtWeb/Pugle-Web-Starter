/* eslint no-unused-vars: 0*/
/* global vh */
let navButt = document.getElementById("mainNav-toggle");
let nav = document.getElementById("mainNav");

let isHome = document.getElementById("home") ? 1 : 0; 
navButt.onclick = navClick;
function navClick(){
  nav.classList.toggle('visible');
  navScroll();
}
function navScroll(){
  if (nav.classList.contains('visible') 
    || window.scrollY - vh*isHome > -50){
    navButt.style.background = "rgba(0,0,0,.5)";
    nav.childNodes[0].style.opacity = .8;
  }
  else if(window.scrollY - vh*isHome <  50)  {
    navButt.style.background = "none";
    nav.childNodes[0].style.opacity = 0;
  }
}

