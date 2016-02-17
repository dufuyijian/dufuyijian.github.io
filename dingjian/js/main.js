//tab页
;(function($,window){
$.fn.tabT=function(options){
	var defaults={
		tabNavElement:'li',
		tabNavActiveClass:'active',
		tabCont:'.help-content',
		tabContELement:'div'
	};
	var defaultser=$.extend(defaults,options);
	return this.each(function(){
		var _this=$(this);
		var $li = _this.children(defaultser.tabNavElement);
		var $ul = _this.next(defaultser.tabContId).children(defaultser.tabContELement);
		
		$ul.css('display','none');		
		$ul.eq(0).css('display',"block");
		$li.click(function(e){
			e.preventDefault();
			var $this = $(this);
			var $t = $this.index();
			$li.siblings().removeClass(defaultser.tabNavActiveClass);
			$this.addClass(defaultser.tabNavActiveClass);
			$ul.css('display','none');
			$ul.eq($t).css('display','block');
			})
	   })
	}
})(jQuery,window)

;(function($, window) {
	
	//判断ie8 
	function isIeVsersion(version){
		var DEFAULT_VERSION = version;
		var ua = navigator.userAgent.toLowerCase();
		var isIE = ua.indexOf("msie")>-1;
		var safariVersion;
		if(isIE){
		    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
		    if(safariVersion <= DEFAULT_VERSION ){
		    	return true;
		    }else{
				return false;
		    }
		}	
	}
	
	//加载css样式或js文件
	function loadjscssfile(filename,filetype){
	    if(filetype == "js"){
	        var fileref = document.createElement('script');
	        fileref.setAttribute("type","text/javascript");
	        fileref.setAttribute("src",filename);
	    }else if(filetype == "css"){
	        var fileref = document.createElement('link');
	        fileref.setAttribute("rel","stylesheet");
	        fileref.setAttribute("type","text/css");
	        fileref.setAttribute("href",filename);
	    }
	   if(typeof fileref != "undefined"){
	        document.getElementsByTagName("head")[0].appendChild(fileref);
	    }   
	}
	
	//根据不同的高度加载不同的css样式
	function cssMediaLoad(){
		var wh=document.body.clientHeight;
		//loadjscssfile('css/h769.css','css')
		if(wh>768){
			loadjscssfile('css/krtStyle.css','css');
		}else{
			if(wh<=768 && wh>720){loadjscssfile('css/h768.css','css')};
			if(wh<=720 && wh>600){loadjscssfile('css/h720.css','css');};
			if(wh<=600){loadjscssfile('css/h600.css','css')};
		}
	}
	
	var isIe8=isIeVsersion("8.0");
	if(isIe8){
		$(window).on('load.ie8',function(){
			cssMediaLoad();
		});
			
	   $(window).on('resize.ie8',function(){
	        cssMediaLoad();
	   })
	}
	
	//导航菜单
	function navMenu() {
		this.navHover = function() {
			var $activeLi=$(".krt-nav>li.active");
			$('.krt-nav>li').unbind("hover").hover(function() {
				$(this).siblings('li').children('.dropdown-navMenu').hide();
				$(this).siblings('li').removeClass('active');
				$(this).addClass('active');
				var $dropMenuLi = $(this).find('.dropdown-navMenu').find('li');
				if ($dropMenuLi.length) {
					$dropMenuLi.parent('.dropdown-navMenu').show();
				}
			},function(){
				$(this).removeClass('active');
				$activeLi.addClass("active");
				var $dropMenuLi = $(this).find('.dropdown-navMenu').find('li');
				if ($dropMenuLi.length) {
					$dropMenuLi.parent('.dropdown-navMenu').hide();
				}
			});
		};
		this.toggleMenu = function() {
			var i = 0;

			$('.krt-navMenu-toggle').on('click', function() {
				if (i % 2 == 0) {
					$('.krt-navbar').css({
						top: '100%'
					});
				} else {
					$('.krt-navbar').css({
						top: '-1000%'
					});
				}

				$('.dropdown-navMenu').hide();
				i++;
			})
		}

	}
	var n = new navMenu();
	n.navHover();
	n.toggleMenu();
	
	//fullPage.js
	$('.krt-fullPage').fullpage({
		'scrollingSpeed': 500,
		'navigation': true,
		'controlArrowColor': 'transparent',
		'slidesNavigation': true,
		'loopHorizontal': true
	});
	//首页js
	$(".krt .us").on("click", function() {
		$.fn.fullpage.moveTo(4);
	});
	setInterval(function() {
		$.fn.fullpage.moveSlideRight();
	}, 5000)
	//帮助中心
	$(window).on('load.krt',function(){
		//帮助中心
		$(".help-title").tabT({
			tabNavElement:'li',
			tabNavActiveClass:'active',
			tabCont:'#tabC',
			tabContELement:'div'
		});
		$(".help-subMenu").tabT({
			tabNavElement:'li',
			tabNavActiveClass:'active',
			tabCont:'.help-content',
			tabContELement:'div'
		});
		$(".help-content").hover(function(){
			$.fn.fullpage.setMouseWheelScrolling(false) 
		},function(){
			$.fn.fullpage.setMouseWheelScrolling(true) 
		});
		//产品日志滚动条
		$(".logWrap-content").mCustomScrollbar({
			theme:"minimal"
		});
	})
					
	//产品日志
	$(window).on("resize.log", function() {
		var sh = $(window).height();
		var h = sh - 180 - 110;
		$(".krt .logWrap .swiper-container").height(h);
	})
	var mySwiper = new Swiper('.swiper-container', {
		paginationClickable: true,
		mode: 'vertical',
		grabCursor: true,
		onSlideChangeEnd: function(swiper) {
			if (swiper.activeIndex == 0) {
				$('.swiper-prev').addClass("swipert-btn-disabled");
			} else {
				$('.swiper-prev').removeClass("swipert-btn-disabled");
			}
			if (swiper.activeIndex == mySwiper.getLastSlide().index()) {
				$('.swiper-next').addClass("swipert-btn-disabled")
			} else {
				$('.swiper-next').removeClass("swipert-btn-disabled")
			};
		}
	});
	$('.swiper-prev').on('click', function(e) {
		mySwiper.swipePrev();
	});
	$('.swiper-next').on('click', function(e) {
		mySwiper.swipeNext();
	});
	
})(jQuery, window)










	

	

