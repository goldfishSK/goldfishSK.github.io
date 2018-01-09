var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	// 如果需要分页器
	pagination: '.swiper-pagination',

})
var mySwiper = new Swiper('.swiper-container1', {
	direction: 'horizontal',
	loop: true,
	// 如果需要分页器
	pagination: '.swiper-pagination1',

});
$(".back").click(function() {
	history.back();
});

$(".haed_li").click(function(){
	
	$(".haed_li a").removeClass("chioce");
	$(this).find('a').addClass("chioce")
	
})






$("#pingjiaye").height(window.innerHeight);



//   数量减
$(".min_input").click(function() {
	var t = $(this).parents(".gs_input").find(".text_input");
	t.val(parseInt(t.val()) - 1);
	if(t.val() <= 1) {
		t.val(1)
	};
});
//  数量加
$(".add_input").click(function() {
	var t = $(this).parents(".gs_input").find(".text_input");
	t.val(parseInt(t.val()) + 1);
	if(t.val() <= 1) {
		t.val(1)
	};
});
$(".goods_size").click(function() {
	$(".mask").slideDown(300);
})
$(".jion").click(function() {
	$(".mask").slideDown(300);

});
$(".mask_title").click(function() {
	$(".mask").slideUp(300);
})
$(".chahao").click(function() {
	$(".mask").slideUp(300);
})
$(".ul_size li").click(function() {
	$(".ul_size li").removeClass();
	$(this).addClass("clickeds");
})
$(".ul_color li").click(function() {
	$(".ul_color li").removeClass();
	$(this).addClass("clickeds");
});

var _fllow = 0;
$(".follow").click(function() {
	_fllow += 1;
	if(_fllow % 2 == 0) {
		$($(".follow").find('img')).attr("src", "../img/check.png");
	} else {
		$($(".follow").find('img')).attr("src", "../img/checked.png");
	}
});

$(".jiarugouwuche").click(function() {
	$(".mask").slideUp(300);

	$("#add_goods").text($(".text_input").val());
	$("#add_goods").show(100);
	$(".success").show();
	setTimeout(function() {
		$(".success").fadeOut(300);
		$("#add_goods").fadeOut(2000);
	}, 1500)

});
$($(".goods_de_ul li")[1]).click(function() {
	$(".goods_con").hide();
	$(".parameter").show();
	$(".goods_de_ul li").removeClass("goods_de_ul_li");
	$(this).addClass("goods_de_ul_li");
})