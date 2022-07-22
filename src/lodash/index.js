var throttle = function (fn, delay) {
  let pre = 0;
  return function () {
    var _this = this;
    var args = arguments;
    var now = new Date();
    if (now - pre > delay) {
      fn.apply(_this, args);
      pre = now;
    }
  }
}

export default throttle