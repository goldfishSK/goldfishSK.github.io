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

var $getCode = $('#J_GetCode');

/* 定义参数 */
$getCode.sendCode({
	disClass: 'btn-disabled',
	secs: 60,
	run: false,
	runStr: '{%s}秒后重新获取',
	resetStr: '重新获取验证码'
});

$getCode.on('click', function() {
	/* ajax 成功发送验证码后调用【start】 */

	YDUI.dialog.loading.open('发送中');

	setTimeout(function() {

		YDUI.dialog.loading.close();

		$getCode.sendCode('start');
		YDUI.dialog.toast('已发送', 'success', 1500);

	}, 1500);
	$(".btn-danger").attr("disabled", false);
});
//   修改验证确认
$(".btn-danger").on("click", function() {
	alert("1")
})