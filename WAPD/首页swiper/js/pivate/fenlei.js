mui.init();
mui('.mui-bar-transparent').transparent({
	top: 0,
	offset: 180,
	duration: 10,
	scrollby: document.querySelector('.mui-scroll-wrapper')
})
//  热卖 特价
mui(".compre_ul").on('tap', '.compre_li', function() {

	$(".compre_li").css("color", "#000");
	$(this).css("color", "#f23432");
	console.log($(this).index());
	if($(this).index() == "4") {
		window.location.assign('YDUIshaixuan.html')
	}
})
//   back

mui(".mui-input-row").on('tap', '.mui-icon-arrowleft', function() {

	history.back();
})
//   列表展示形式切换
mui(".compre_ul").on('tap', '.left_li', function() {

	if($("#J_ListContent").hasClass("list-theme1")) {
		$("#J_ListContent").removeClass("list-theme1").addClass("list-theme2");
	} else {
		$("#J_ListContent").removeClass("list-theme2").addClass("list-theme1");
	}

});

$("#search-input").focus(function() {
	console.log("跳转去搜索界面")
	//				window.location.assign("sousuo.html")
})

//   透明导航
function getTop() {
	var color = $("header").css("background-color")
	$(".compre_ul").css({

		"background-color": color
	})
}
//    筛选加载
//			var html = ret.list + '将数据拼接成html';
//                  $('#J_ListContent').append(html);

$(".svclpp_span1").click(function() {

	var ul = $(this).parents(".svc_li").find(".svcsl_ul");
	console.log(ul);

	for(var i = 0; i < 5; i++) {
		var li = document.createElement("li");

		li.className = "svclus_li";
		var li_a = document.createElement("a");
		li_a.innerText = "添加的";
		li_a.href = "";
		li.append(li_a);
		$(ul).append(li);
	}
	$(this).css("transform", "rotate(180deg)")

})
//   取消 确定
$(".foot_btn").click(function() {
	$(".screen_view").hide();
})
$(".svcn_span").click(function() {
	$(".screen_view").hide();
})
//  回首页
$(".mask-content").click(function() {
	$(".mask").hide();
})
//
$("#right").click(function() {
	$(".mask").show();
	$("header").css("background", "#F7F7F7");
	$(".compre_ul").css("background", "#F7F7F7")
})