/* eslint no-unused-vars: 0,
          no-undef: 0 */

if (window.addEventListener){
  document.addEventListener('DOMContentLoaded', onDOMload, false);
  window.addEventListener('resize', throttle(onresize, 100), false);
  window.addEventListener('scroll', throttle(onscroll, 100), false);
  window.addEventListener('orientationchange', throttle(onorientationchange, 100), false);
}

function onresize(e){
  onscroll(e);
}
function onscroll(e){
  navScroll(e);
  fixSiteTitleMargin(e);
}
function onorientationchange(e){
  setVP(e);
  fixCoverHeight(e);
  getSiteTitleMargin(e);
}

function onDOMload(e){
  onresize(e);
  onorientationchange(e);
}