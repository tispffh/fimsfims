
$(function(){
	
	$('.header-bot .tp-search-sw').click(function(){
		if ($(window).width() <= 1024 ){
			if ($(this).hasClass('on')){
				$(".ht-search").slideUp(200);
				$(this).removeClass('on');
			}else{
				$(".ht-search").slideDown(200);
				$(this).addClass('on');
			}
		}
	});

	$('.ht-dp1 > li > a').bind('focus mouseover',function(){
		if ($(window).width() > 1024 ){
			if ($(this).parents("li").hasClass('ac')){
				$(".ht-dp1 > li").removeClass('ac');
				$(this).parents('li').addClass('ac');
			}else{
				$(".ht-dp1 > li").removeClass('ac');
				$(".ht-dp2").hide();
				$(this).parents('li').addClass('ac');
				$(this).next(".ht-dp2").slideDown(200);
			}
		}
	});

	$('.htl-style').mouseleave(function(){
		if ($(window).width() > 1024 ){
			$(".ht-dp2").slideUp(200);
			$(".ht-dp1 > li").removeClass('ac');
		}
	});
	$(".ht-dp1 a").focusout(function(){
		if ($(window).width() > 1024){
			setTimeout(function(){
				if($('.ht-dp1 a:focus').length < 1){
					$(".ht-dp2").slideUp(200);
					$(".ht-dp1 > li").removeClass('ac');
				}
			},100);
		}
	});

	//탑 - 유관기관 링크
	$('.ht-dp1 > li > a').click(function(){
		if ($(window).width() <= 1024){
			if ($(this).parents("li").hasClass('on')){
				$(".ht-dp1 > li").removeClass('on');
				$(this).parents('li').removeClass('on');
				$(this).next(".ht-dp2").slideUp(200);
			}else{
				$(".ht-dp1 > li").removeClass('on');
				$(".ht-dp2").hide();
				$(this).parents('li').addClass('on');
				$(this).next(".ht-dp2").slideDown(200);
			}
			$('.tpl-mo-swb a').text($(this).text());
			$('.tpl-mo-swb a').removeAttr('class');
			$('.tpl-mo-swb a').addClass($(this).parents('li').attr('class'));
		}
	});

	$('.tpl-mo-swb a').click(function(){
		if ($(this).parents('.tpl-mo-swb').hasClass('on')){
			$('.ht-dp1').slideUp(200);
			$('.tpl-mo-swb').removeClass('on');
			$(".ht-dp1 > li").removeClass('on');
			$(".ht-dp2").slideUp(200);
		}else{
			$('.ht-dp1').slideDown(200);
			$('.tpl-mo-swb').addClass('on');
		}
	});

	//PC 탑메뉴 서브메뉴&백그라운드 높이 조절
	$('#header').each(function(){

		var highestBox = 0;
		$('.jqheigt', this).each(function(){
		if($(this).height() > highestBox)
			highestBox = $(this).height();
		});
		$('.jqheigt',this).height(highestBox);
	});

	//PC 탑메뉴
	var $gnbDepth1 = $('.menu > li');
	var $gnbDepth2 = $('.menu > li > div');
	var $gnbbg = $('.bg-gnb');
	var $gnbDepth2Last = $('.menu > li > div a:last');

	$('.menu > li').removeClass('on');

	$gnbDepth1.mouseenter( function(){
		$(this).addClass('on');
		$gnbDepth2.show();
		$gnbbg.show();
	});

	$gnbDepth1.mouseleave( function(){
		$(this).removeClass('on');
		$gnbDepth2.hide();
		$gnbbg.hide();
	});

	$gnbbg.mouseenter( function(){
		$(this).show();
		$gnbDepth2.show();
	});

	$gnbbg.mouseleave( function(){
		$(this).hide();
		$gnbDepth2.hide();
		$gnbDepth1.removeClass('on');
	});


	//탑메뉴 Tab 접근
	$gnbDepth1.focusin( function(){
		$(this).addClass('on');
		$gnbDepth2.show();
		$gnbbg.show();
	});

	$gnbDepth1.focusout( function(){
		$(this).removeClass('on');
	});

	$gnbDepth2Last.focusout( function(){
		$gnbDepth1.removeClass('on');
		$gnbDepth2.hide();
		$gnbbg.hide();
	});

	//모바일 메뉴
	function mmenuClose() {
		$('body').removeClass('menu-open');
		$('.nav-button').removeClass('menu-open');
		$('.mobile-menu').removeClass('menu-open');
	}
	function mmenuOpen() {
		$('body').addClass('menu-open');
		$('.nav-button').addClass('menu-open');
		$('.mobile-menu').addClass('menu-open');
	}

	$('.nav-button').addClass('nav-button-close');
	$('.closebtn').click( function(){
		mmenuClose();
		return false;
	});
	$('.nav-button').click( function(){
		mmenuOpen();
		return false;
	});
	$('.wrap .black-wrap').click( function() {
		mmenuClose();
	});


	var $menuClickDepth1 = $('.mobile-menu .depth1 > .panel > .panel-heading');
	var $menuClickDepth2 = $('.mobile-menu .depth2 > .panel > .panel-heading');
	var $menuClickDepth3 = $('.mobile-menu .depth3 > .panel > .panel-heading');

	$menuClickDepth1.click( function () {
		if ( $(this).hasClass('on') === false ){
			$menuClickDepth1.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$menuClickDepth1.removeClass('on');
		}
	});
	$menuClickDepth2.click( function () {
		if ( $(this).hasClass('on') === false ){
			$menuClickDepth2.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$menuClickDepth2.removeClass('on');
		}
	});
	$menuClickDepth3.click( function () {
		if ( $(this).hasClass('on') === false ){
			$menuClickDepth3.removeClass('on');
			$(this).addClass('on');
		} else if ( $(this).hasClass('on') === true ){
			$menuClickDepth3.removeClass('on');
		}
	});

	$(window).resize( function() {
	var winWidth = $(window).width();

		if ( winWidth >= 992){
			mmenuClose();
		}
	});
	// 모바일 메뉴 끝!







});

//190619 office_info.js 중복 - 삭제처리
// $(document).ready(function(){
//
// 	$(".mvsl_sld").bxSlider({
// 		mode: "fade",
// 		auto: true,
// 		// pause: 113000, 20190610 속도수정
// 		pause: 4000,
// 		autoControls: true,
// 	});
//
// 	$(".mc-sld").bxSlider({
// 		mode: "horizontal",
// 		auto: true,
// 		pause: 3000,
// 		autoControls: true,
// 	});
//
// 	$(".oslk_ls").bxSlider({
// 		auto: true,
// 		autoReload: true,
// 		infiniteLoop : true,
// 		hideControlOnEnd: false,
// 		pause: 3000,
// 		pager: false,
// 		controls: true,
// 		autoControls: true,
// 		minSlides: 2,
// 		maxSlides: 5,
// 		moveSlides: 1,
// 		slideWidth: 205,
// 		slideMargin: 10
// 	});
//
//
// });

$(window).on("load resize", function(){
	if(window.innerWidth > 1024){
		$('.htl-style > ul').removeAttr('style');
		$('.tpl-mo-swb').removeClass('on');
		//$(".ht-dp1 > li").removeClass('on');
		//$(".ht-dp2").hide();
	}
});

$(window).on('load resize', function () {
	if ($(window).width() > 1024 ){
		$('body').css("overflow" , "visible");
		$(".menu").removeAttr('style');
		$(".header-bot .allmenu-open").removeClass('on');
	}
});

// 전체메뉴
 $(document).ready(function(){

	$(window).resize(function(){
		$('.allmenu-wrap .depth2').hide();
		$('.allmenu-wrap').hide();
		$('.allmenu-wrap .tit_bt').removeClass('on');
		$('.allmenu-wrap .tit_bt').find('span').text('열기');
		$('#header').each(function(){

			var highestBox = 0;
			$('.jqheigt', this).each(function(){
			if($(this).height() > highestBox)
				highestBox = $(this).height();
			});
			$('.jqheigt',this).height(highestBox);
		});
	});
});
