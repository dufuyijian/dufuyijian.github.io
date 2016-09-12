$(function(){
//js自动计算font-size
var docEl = document.documentElement;
var clientWidth = docEl.clientWidth;
var clientHeight = docEl.clientHeight;
if(clientWidth > 750) clientWidth = 750; 
 docEl.style.fontSize = clientWidth / 7.5 + 'px';
  (function (doc, win) {
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        if(clientWidth > 750) clientWidth = 750;
        if (!clientWidth) return;
        docEl.style.fontSize = clientWidth / 7.5 + 'px';
      };
     if (!doc.addEventListener) return;
     win.addEventListener(resizeEvt, recalc, false);
     doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
	
})
