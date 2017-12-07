$(function() {
	function setCurrentSlide(ele, index) {
		$("#swiper1 .swiper-slide").removeClass("selected");
		ele.addClass("selected");
		swiper1.initialSlide = index;

	}

	var swiper1 = new Swiper('#swiper1', {
		//					设置slider容器能够同时显示的slides数量(carousel模式)。
		//					可以设置为number或者 'auto'则自动根据slides的宽度来设定数量。
		//					loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。

		initialSlide: 0, // 后面的这个参数2  代表的是选择第几个栏目  在其他页面渲染的时候可以用到

		slidesPerView: 5.5,
		paginationClickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
		spaceBetween: 10, //slide之间的距离（单位px）。
		freeMode: true, //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
		loop: false, //是否可循环
		touchRatio: 0.5,
		onTab: function(swiper) {
			var n = swiper1.clickedIndex;
		}
	});
	swiper1.slides.each(function(index, val) {
		var ele = $(this);
		ele.on("click", function() {
			setCurrentSlide(ele, index);
			//						swiper2.slideTo(index, 500, false);
			//mySwiper.initialSlide=index;
		});
		var n = swiper1.activeIndex;
		setCurrentSlide($("#swiper1 .swiper-slide").eq(n), n);
		swiper1.slideTo(n, 500, false);
	});
	var swiperSmail = new Swiper('#comm_swiper1', {
		direction: 'horizontal',
		loop: true,
		autoplay: 5000,
		touchRatio: 0.5,
	})

});
//   倒计时
function countDown() {
	var day = document.getElementById('day');
	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');
	// 日 时 分 秒的dom对象
	countDownTime.init('2020/8/23 20:00:00', day, hours, minutes, seconds);
	countDownTime.start();
}
countDown();

//   上下
$(window).scroll(function() {
	var before = $(window).scrollTop();
	$(window).scroll(function() {
		var after = $(window).scrollTop();
		if(before < after) {
//			console.log('上');
			$('footer').hide();
			$(".header").hide()
			$("#swiper1").css({
				top: "0"
			})
			before = after;
		};
		if(before > after) {
//			console.log('下');
			$('footer').show();
			before = after;
			$(".header").show()
			$("#swiper1").css({
				top: "40px"
			})
		};
	});
});

$(".img_top").click(function() {

	$("body").animate({
		scrollTop: 10
	}, 300)
	$("body").animate({
		scrollTop: 4
	}, 400)
})