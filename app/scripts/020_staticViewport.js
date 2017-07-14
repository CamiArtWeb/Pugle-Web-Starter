// staticViewportH.js
// Gets initial viewport and changes styles accordingly (in static px)
// And checks again on windows resize / orientation change

/* eslint no-unused-vars: 0 */

var vh = document.documentElement.clientHeight;
var vw = document.documentElement.clientWidth;
function setVP() {
  vh = document.documentElement.clientHeight;
  vw = document.documentElement.clientWidth;
}
