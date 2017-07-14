/* global vh */
/* eslint no-unused-vars: 0 */

var cover = document.getElementById("cover");
function fixCoverHeight(){
  cover.style.height = vh + "px";
  cover.childNodes[0].style.height = vh + "px";
}