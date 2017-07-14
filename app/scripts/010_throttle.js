/* eslint no-unused-vars: 0*/
var throttle = function (func, limit) {
  var inThrottle, lastFunc, lastRan;
  return function() {
    var context = this,
      args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } 
    else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}