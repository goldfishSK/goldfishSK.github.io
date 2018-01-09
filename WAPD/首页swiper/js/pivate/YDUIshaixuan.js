! function(win, $) {
	var dialog = win.YDUI.dialog;
	$("#goodsType .grids-item").click(function() {
		$($("#goodsType").find(".grids-span")).removeClass("chionce")
		$($(this).find(".grids-span")).addClass("chionce")
	})
	$("#chioceMoney .grids-item").click(function() {
		$($("#chioceMoney").find(".grids-span")).removeClass("chionce")
		$($(this).find(".grids-span")).addClass("chionce")
		if($(this).index() == 0) {
			$($("#chioceMoneyShow input")[0]).val("0")
			$($("#chioceMoneyShow input")[1]).val("200")
		}
		if($(this).index() == 1) {
			$($("#chioceMoneyShow input")[0]).val("200")
			$($("#chioceMoneyShow input")[1]).val("1000")
		}
		if($(this).index() == 2) {
			$($("#chioceMoneyShow input")[0]).val("1000")
			$($("#chioceMoneyShow input")[1]).val("99999")
		}
	})
	$("#BrandAll .grids-item").click(function() {
		var _this = $(this)
		getLength(_this)
	})
	//               品牌的选择
	function getLength(_this) {
		if($("#BrandAll").find(".chionce").length > 5) {
			dialog.loading.open('最多选择6个品牌');
			setTimeout(function() {
				dialog.loading.close(); /* 移除loading */
			}, 2000);
			$("#BrandAll .grids-item").attr("disabled", "disabled")
		} else {
			$(_this.find(".grids-span")).addClass("chionce")
			var html = "";
			for(var i = 0; i <= $("#BrandAll").find(".chionce").length; i++) {
				html += "<span class='add_two'>" + $($("#BrandAll .grids-item").find(".chionce")[i]).text() + "</span>"
			}
			$(".add_to").remove();
			$($("#addAll").find(".add_two")).remove()
			$("#addAll").append(html)
		}
	}
	$("#category .grids-item").click(function() {
		$($("#category .grids-item").find(".chionce")).removeClass("chionce")
		$($(this).find(".grids-span")).addClass("chionce");
	})
	$("#back").click(function() {
		history.back()
	})
}(window, jQuery);