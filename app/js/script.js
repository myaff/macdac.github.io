$(document).ready(function(){
	
	// zoom-coefficient
	var k = $(window).height()/1000;
	var totalSize, idealSize = $('.layout').width();
	if($(window).height() !== 1000){
		totalSize = 0;
		$('.screen').each(function(){
			$(this).append('<span class="hide width">'+$(this).width()+'</span>');
			$(this).width($(this).children('.width').text()*k);
			totalSize = totalSize + $(this).width();
		});
		$('.background-circle').each(function(){
			$(this).append('<span class="hide width">'+$(this).width()+'</span><span class="hide height">'+$(this).height()+'</span>');
			$(this).width($(this).children('.width').text()*k);
			$(this).height($(this).children('.height').text()*k);
		});
	}
	$('.layout').width(totalSize);
	$('body').append('<span class="hide height">'+$('body').height()+'</span>');
	$('html,body').height($('body > .height').text()*k);
	$(window).resize(function(){
		k = $(window).height()/1000;
		totalSize = 0;
		$('.screen').each(function(){
			$(this).width($(this).children('.width').text()*k);
			totalSize = totalSize + $(this).width();
		});
		$('.background-circle').each(function(){
			$(this).width($(this).children('.width').text()*k);
			$(this).height($(this).children('.height').text()*k);
		});
		$('.layout').width(totalSize);
		$('body,html').height($('body > .height').text()*k);
		if(Modernizr.csstransforms && (Scrollissimo !== 'undefined')){
			animationNew(k, totalSize, idealSize);
		}
	});
	
	if(Modernizr.csstransforms && (Scrollissimo !== 'undefined')){
		// timelines
		screensTimeline = new TimelineMax({paused: true});
		textTimeline = new TimelineMax({paused: true});
		dotsTimeline = new TimelineMax({paused: true});
		imgsTimeline = new TimelineMax({paused: true});
		animationNew(k, totalSize, idealSize);
		Scrollissimo.add(screensTimeline,0,60);
		Scrollissimo.add(textTimeline,0,25);
		Scrollissimo.add(dotsTimeline,0,25);
		Scrollissimo.add(imgsTimeline,0,25);
		$(window).scroll(function(){
			Scrollissimo.knock();
		});
	} else {
		var c = 0;
		$(document).on('mousewheel DOMMouseScroll', function (e) {
			var evt = window.event || e;
			evt = evt.originalEvent ? evt.originalEvent : evt;
			var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
			delta = -1*delta/120;
			c = c + delta;
			if(c >= 0){
				if(c > 16){
					c = 16;
				} else {
					setTimeout(function(){animationOld(c,k,totalSize)},500);
				}
			} else {
				c = 0;
			}
		});
	}
});
var animationNew = function(k, totalSize,idealSize){
	// screens timeline
	totalSize = totalSize - $(window).width();
	k = totalSize/idealSize;
	screensTimeline.to($('.screens'),totalSize,{x: -1*totalSize}, 'Linear');
	// text timeline
	textTimeline.to($('.screen-2-text'),300*k,{y:0});
	textTimeline.to($('.screen-3-text'),800*k,{y: 0});
	textTimeline.to($('.screen-4-text'),500*k,{y: 0});
	textTimeline.to($('.screen-6-text'),1200*k,{y: 1000});
	textTimeline.to($('.screen-6-text'),800*k,{y: 0});
	textTimeline.to($('.screen-9-text'),2000*k,{y: -500});
	textTimeline.to($('.screen-9-text'),500*k,{y: 0});
	textTimeline.to($('.screen-10-palka'),400*k,{rotation: 30});
	textTimeline.to($('.screen-10-palka'),1000*k,{rotation: 0});
	textTimeline.to($('.screen-11-text'),100*k,{y: 0});
	textTimeline.to($('.screen-13-text'),2000*k,{y: 1500});
	textTimeline.to($('.screen-13-text'),1100*k,{y: 0});
	textTimeline.to($('.screen-14-text-1'),500*k,{y: -500});
	textTimeline.to($('.screen-14-text-1'),1000*k,{y: 0});
	textTimeline.to($('.screen-14-text-2'),1200*k,{y: 0});
	textTimeline.to($('.screen-14-text-3'),1400*k,{opacity: 1});
	// dots timeline
	dotsTimeline.to($('.screen-3-dot-1'),700*k,{opacity: 0});
	dotsTimeline.to($('.screen-3-dot-1'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-3-dot-2'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-3-dot-3'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-3-dot-4'),200*k,{opacity: 1});
	dotsTimeline.to($('.screen-7-dot-1'),3000*k,{opacity: 0});
	dotsTimeline.to($('.screen-7-dot-1'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-7-dot-2'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-7-dot-3'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-7-dot-4'),100*k,{opacity: 1});
	dotsTimeline.to($('.screen-10-guy-1'),1900*k,{y: -110*k});
	dotsTimeline.to($('.screen-10-guy-1'),1000*k,{y: 0});
	dotsTimeline.to($('.screen-14-dots-box'),5300*k,{width: 0});
	dotsTimeline.to($('.screen-14-dots-box'),1450*k,{width: 1105*k});
	// imgs timeline
	imgsTimeline.to($('.screen-3-img-1'),700*k,{opacity: 0});
	imgsTimeline.to($('.screen-3-img-1'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-3-img-2'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-3-img-3'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-3-img-4'),200*k,{opacity: 1});
	imgsTimeline.to($('.screen-6-img'),2200*k,{y: 1000});
	imgsTimeline.to($('.screen-6-img'),300*k,{y: 0});
	imgsTimeline.to($('.screen-7-img-1'),500*k,{opacity: 0});
	imgsTimeline.to($('.screen-7-img-1'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-7-img-2'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-7-img-3'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-7-img-4'),100*k,{opacity: 1});
	imgsTimeline.to($('.screen-10-guy-2'),1900*k,{y: 110*k});
	imgsTimeline.to($('.screen-10-guy-2'),1000*k,{y: 0});
	imgsTimeline.to($('.screen-12-img-1'),1500*k,{opacity: 0});
	imgsTimeline.to($('.screen-12-img-1'),200*k,{opacity: 1});
	imgsTimeline.to($('.screen-12-img-2'),200*k,{opacity: 1});
	imgsTimeline.to($('.screen-12-img-3'),200*k,{opacity: 1});
	imgsTimeline.to($('.screen-13-img'),1600*k,{y: 0});
	imgsTimeline.to($('.screen-14-rocket'),1400*k,{x: -1240*k, y: 360*k, rotation: -76, opacity: 0});
	imgsTimeline.to($('.screen-14-rocket'),10*k,{opacity: 1});
	/*imgsTimeline.to($('.screen-14-rocket'),200*k,{x: -1220*k, y: 250*k, rotation: -60});
	imgsTimeline.to($('.screen-14-rocket'),200*k,{x: -972*k, y: 30*k, rotation: -43});
	imgsTimeline.to($('.screen-14-rocket'),200*k,{x: -700*k, y: -60*k, rotation: -24});
	imgsTimeline.to($('.screen-14-rocket'),200*k,{x: -570*k, y: -80*k, rotation: -14});
	imgsTimeline.to($('.screen-14-rocket'),200*k,{x: -280*k, y: -60*k, rotation: -4});*/
	imgsTimeline.to($('.screen-14-rocket'),250*k,{x: -1220*k, y: 200*k, rotation: -60});
	imgsTimeline.to($('.screen-14-rocket'),250*k,{x: -972*k, y: -20*k, rotation: -43});
	imgsTimeline.to($('.screen-14-rocket'),250*k,{x: -700*k, y: -110*k, rotation: -24});
	imgsTimeline.to($('.screen-14-rocket'),250*k,{x: -570*k, y: -130*k, rotation: -14});
	imgsTimeline.to($('.screen-14-rocket'),250*k,{x: -280*k, y: -110*k, rotation: -4});
	imgsTimeline.to($('.screen-14-rocket'),300*k,{x: 0, y: 0, rotation: 0});
}
var animationOld = function(c,k,totalSize){
	if(c == 0){
		$('.screens').stop().animate({'left': 0},500);
	} else if(c == 1){
		$('.screens').stop().animate({'left': -750*k},500);
		$('.screen-2-text').stop().animate({'top':100},1000);
	} else if (c == 2){
		$('.screens').stop().animate({'left': -1500*k},500);
		$('.screen-3-img-1,.screen-3-dot-1').stop().delay(500).fadeIn(500);
		$('.screen-3-img-2,.screen-3-dot-2').stop().delay(1000).fadeIn(500);
		$('.screen-3-img-3,.screen-3-dot-3').stop().delay(1500).fadeIn(500);
		$('.screen-3-img-4,.screen-3-dot-4').stop().delay(2000).fadeIn(500);
	} else if(c == 3){
		$('.screens').stop().animate({'left': -2500*k},500);
		$('.screen-3-text').stop().delay(500).animate({'bottom':-50},500);
	} else if(c == 4){
		$('.screens').stop().animate({'left': -3700*k},500);
		$('.screen-4-text').stop().animate({'top':0},1000);
	} else if(c == 5){
		$('.screens').stop().animate({'left': -4700*k},500);
	} else if(c == 6){
		$('.screens').stop().animate({'left': -5800*k},500);
	} else if(c == 7){
		$('.screens').stop().animate({'left': -6900*k},500);
		$('.screen-6-img').stop().delay(700).animate({'bottom':30+'%'},700);
		$('.screen-6-text').stop().delay(500).animate({'bottom':9+'%'},500);
	} else if(c == 8){
		$('.screens').stop().animate({'left': -8500*k},500);
		$('.screen-7-img-1,.screen-7-dot-1').stop().delay(500).fadeIn(500);
		$('.screen-7-img-2,.screen-7-dot-2').stop().delay(1000).fadeIn(500);
		$('.screen-7-img-3,.screen-7-dot-3').stop().delay(1500).fadeIn(500);
		$('.screen-7-img-4,.screen-7-dot-4').stop().delay(2000).fadeIn(500);
	} else if(c == 9){
		$('.screens').stop().animate({'left': -9500*k},500);
	} else if(c == 10){
		$('.screens').stop().animate({'left': -10900*k},500);
		$('.screen-9-text').stop().animate({'top':0},1000);
	} else if(c == 11){
		$('.screens').stop().animate({'left': -12800*k},500);
		$('.screen-11-text').stop().animate({'top':24.5+'%'},1000);
	} else if(c == 12){
		$('.screens').stop().animate({'left': -14700*k},500);
		$('.screen-12-img-1').stop().delay(500).fadeIn(500);
		$('.screen-12-img-2').stop().delay(1000).fadeIn(500);
		$('.screen-12-img-3').stop().delay(1500).fadeIn(500);
	} else if(c == 13){
		$('.screens').stop().animate({'left': -16100*k},500);
		$('.screen-13-img').stop().delay(700).animate({'bottom':38.6+'%'},700);
		$('.screen-13-text').stop().delay(500).animate({'bottom':3.3+'%'},500);
	} else if(c == 14){
		$('.screens').stop().animate({'left': -17600*k},500);
		$('.screen-14-text-1').stop().delay(500).animate({'top':10+'%'},500);
		$('.screen-14-text-2').stop().delay(700).animate({'bottom':39+'%'},500);
	} else if(c == 15){
		$('.screens').stop().animate({'left': -18800*k},500);
		$('.screen-14-text-3').stop().animate({'top':25+'%'},500);
	} else if(c == 16){
		$('.screens').stop().animate({'left': -1*(totalSize - $(window).width())},500);
	} else {
		return false;
	}
}