'use strict';

var isIosWechatClient = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && navigator.userAgent.match(/MicroMessenger/i);
var setTile = function (title) {
  document.title = title;
  // 对于IOS微信
  // http://blog.csdn.net/xuexiiphone/article/details/51966342
  if (!!isIosWechatClient === true) {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.addEventListener("load", function () { return document.body.removeChild(iframe); });
    iframe.src = "/favicon.ico";
    document.body.appendChild(iframe);
  }
};
var index = {
  install: function install (Vue, router, options) {
    if ( options === void 0 ) options = {};

    var filter = options.filter;
    var defTitle = options.defTitle || "";
    router.afterEach(function (route) {
      var title = route.meta && route.meta.title;
      (title && filter) && (title = filter(title));
      setTile(title || defTitle);
    });
    var Doc = function Doc () {};

    var prototypeAccessors = { title: {} };

    prototypeAccessors.title.get = function () {
      return document.title;
    };
    prototypeAccessors.title.set = function (value) {
      (value && filter) && (value = filter(value));
      setTile(value || defTitle);
    };

    Object.defineProperties( Doc.prototype, prototypeAccessors );
    Vue.doc = Vue.prototype.$doc = new Doc();
  }
};

module.exports = index;
