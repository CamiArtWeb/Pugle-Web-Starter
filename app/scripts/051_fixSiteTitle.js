/* global vw */
/* eslint no-unused-vars: 0*/

var sitetitle = document.getElementById("sitetitle");
var sitetitle_margin = 0;

function fixSiteTitleMargin(){
  if(window.scrollY > 0)  sitetitle.style.marginLeft = sitetitle_margin+"px";
  else if(vw>600)         sitetitle.style.marginLeft = "3rem";
  else                    sitetitle.style.marginLeft = "1rem";
}
function getSiteTitleMargin(){
  sitetitle_margin = document.getElementById("xmargin").offsetLeft || 0;
}