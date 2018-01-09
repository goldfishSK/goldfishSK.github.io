! function(win, $) {
	setTimeout(function() {
		$(".head_input").focus();
	}, 1000)

	var dialog = win.YDUI.dialog;
	/* 普通确认框 */
	$('.remove_all').on('click', function() {
		dialog.confirm('', '确定清空历史记录吗！', function() {

			$("#hist_con li").remove();
			$(".histoy").hide();

		});
	});

	$("#hist_con").on("click", "li", function() {
		alert("11")
	})

}(window, jQuery);