var $tab = $('#J_Tab');

$tab.tab({
	nav: '.tab-nav-item',
	panel: '.tab-panel-item',
	activeClass: 'tab-active'
});

$tab.find('.tab-nav-item').on('open.ydui.tab', function(e) {
	//				console.log('索引：%s - [%s]正在打开', e.index, $(this).text());
});

$tab.find('.tab-nav-item').on('opened.ydui.tab', function(e) {
	//				console.log('索引：%s - [%s]已经打开了', e.index, $(this).text());
});
console.log(quertion)

function close() {
	$("#YDUI_CONFRIM").css({
		"display": "none"
	})
	$(".m-confirm").css({
		"top": ""
	})
}

function getHeight() {
	$("body #yaoshuode").height();
	if($("body #yaoshuode").height() >= screen.availHeight) {
		$(".m-confirm").css({
			"top": "50px"
		})
	}
}
$(".default").click(function() {
	close()
})
$(".primary").click(function() {
	close()
})
$("#YDUI_CONFRIM").click(function() {
	close()
})

$(".cell-item").on("click", function() {

	function getDate(arr1, arr2) {
		var index = arr2.index();
		var da = quertion[arr1];
		var daa = da[0];
		var arr = [];
		for(var i in daa) {
			arr.push(daa[i])
		}
		//					console.log(arr[index])
		return(arr[index]);
	}

	if($($(this).find(".cell-left")).hasClass("changjian")) {
		$(".confirm-title").text($(this).text().trim())

		$("#YDUI_CONFRIM").css({
			"display": "flex"
		});
		$("#yaoshuode").html(getDate("changjian", $(this)))
		getHeight()
	}
	if($($(this).find(".cell-left")).hasClass("dingdanlei")) {
		$(".confirm-title").text($(this).text().trim())
		$("#YDUI_CONFRIM").css({
			"display": "flex"
		});
		$("#yaoshuode").html(getDate("dingdanlei", $(this)))
		getHeight()
	}
	if($($(this).find(".cell-left")).hasClass("peisonglei")) {
		$(".confirm-title").text($(this).text().trim())
		$("#YDUI_CONFRIM").css({
			"display": "flex"
		});
		$("#yaoshuode").html(getDate("peisonglei", $(this)))
		getHeight()
	}
	if($($(this).find(".cell-left")).hasClass("shouhoulei")) {
		$(".confirm-title").text($(this).text().trim())
		$("#YDUI_CONFRIM").css({
			"display": "flex"
		});
		$("#yaoshuode").html(getDate("shouhoulei", $(this)))
		getHeight()
	}
	if($($(this).find(".cell-left")).hasClass("caiwulei")) {
		$(".confirm-title").text($(this).text().trim())
		$("#YDUI_CONFRIM").css({
			"display": "flex"
		});
		$("#yaoshuode").html(getDate("caiwulei", $(this)))
		getHeight()

	}
	if($($(this).find(".cell-left")).hasClass("zhanghulei")) {

		$(".confirm-title").text($(this).text().trim())
		$("#YDUI_CONFRIM").css({
			"display": "flex"
		});
		$("#yaoshuode").html(getDate("zhanghulei", $(this)))
		getHeight()

	}

})



function getHeight(){
	
	if($("#YDUI_CONFRIM .m-confirm").height()){
		
	}
}
