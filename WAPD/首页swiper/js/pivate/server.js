$(".clear  button").click(function() {
	$("#YDUI_CONFRIM").show()
})

function Back() {
	history.back()
}

$(".default").click(function() {
	$("#YDUI_CONFRIM").hide()
})

$(".primary").click(function() {
	$(".con_ul li").remove();
	$("#YDUI_CONFRIM").hide()
})