$(".header i").click(function() {
	console.log($(this))
	if($(this).hasClass("back")) {
		history.back();
	} else {
		$(".mask").hide();
		$(".mask .maskone").hide();
		$(this).addClass("back");
	}
})
hidePhone()
//    隐藏手机号中间四位
function hidePhone() {
	var text = $(".modiPhone").text();

	var arr = [];
	for(var i = 0; i < text.length; i++) {

		if(i >= 3 && i <= 7) {
			arr.push("*")
		} else {
			arr.push(text[i]);
		}
	}
	var str = arr.join("");
	$(".modiPhone").text(str)
}