$(".hn_s").click(function() {
	history.back();
})

var oli = $(".tab_li");
var _text = $(".text_con");

_text.focus(function() {
	_text.text("");
	_text.css("color", "#333")
}).blur(function() {
	if(_text.text() !== "") {

	}
})
$(document).ready(function() {
	_text.text("亲爱的用户:                                       您在使用本商城的过程中发现或发生一些不愉快的事情，在这里向我们商城官方留言沟通。我们会及时处理您这些信息。祝您生活愉快。")
	_text.css("color", "#A0A0A0");
})
oli.click(function() {
	i = $(this).index();
	console.log(i)

	oli.css({
		"color": "#333",
		"border": "1px solid #c6c6c6"
	})
	$(this).css({
		"color": "red",
		"border": "1px solid red"
	});
	//   '                                       '
	if(i == 0) {
		_text.css("color", "#A0A0A0");
		_text.text("亲爱的用户:                                       您在使用已购买的产品时出现什么不满意的地方，暂时联系不到客服的时候请留言给我们，我们会及时帮您处理该产品的问题。祝您生活愉快")
	}
	if(i == 1) {
		_text.css("color", "#A0A0A0");
		_text.text("亲爱的用户:                                       您在通过本商城购买产品发生的售后问题如该店客服处理令您不够满意的话。可以通过此途径向我们官方留言，我们会及时帮您处理售后问题。祝您生活愉快。")
	}
	if(i == 2) {
		_text.css("color", "#A0A0A0");
		_text.text("亲爱的用户:                                       您想要咨询一些非常见问题的话，可以通过此渠道向官方留言。我们会及时联系您并处理您的问题。祝您生活愉快。")
	}
	if(i == 3) {
		_text.css("color", "#A0A0A0");
		_text.text("亲爱的用户:                                       您发生的问题官方客服如果都无法解决的话，可以通过此渠道直接联系本商城的“纪检部“，我们会及时联系您并给您一个满意的答复。祝您生活愉快。")
	}
	if(i == 4) {
		_text.css("color", "#A0A0A0");
		_text.text("亲爱的用户:                                       您真的各种操作都用的很不爽，请通过此渠道联系我们并将您的问题书写在此栏。我们会及时发现并处理您的不爽。祝您生活愉快。")
	}
	if(i == 5) {
		_text.css("color", "#A0A0A0");
		_text.text("亲爱的用户:                                       您还有一些其他建议。请通过此渠道联系我们，我们会及时处理并考虑您的意见。如果意见真的还不错的话，可能还有一些其他您意想不到的奖励哦！祝您生活愉快。")
	}

});