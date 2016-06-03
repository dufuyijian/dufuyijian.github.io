$(function(){
//js自动计算font-size
var docEl = document.documentElement;
var clientWidth = docEl.clientWidth;
if(clientWidth > 640) clientWidth = 640; 
 docEl.style.fontSize = clientWidth / 6.4 + 'px';
  (function (doc, win) {
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        if(clientWidth > 640) clientWidth = 640;
        if (!clientWidth) return;
        docEl.style.fontSize = clientWidth / 6.4 + 'px';
      };
     if (!doc.addEventListener) return;
     win.addEventListener(resizeEvt, recalc, false);
     doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);

	//item选择查询
    $('.buttonGroup button').each(function(i){
    	$('.buttonGroup button').eq(i).click(function(){
    		var iName=$(this).text();
    		$(this).addClass('active').siblings().removeClass('active');
    		$('.itemList img').hide();
    		$('.itemList img').each(function(j){
    			if($('.itemList img').eq(j).attr('title')==iName){
                  $('.itemList img').eq(j).fadeIn();
    		}
    		})
    	})
    })
    $('.all').click(function(){
    	$('.itemList img').fadeIn();
    })
    
  
  
	
})
