var $tab = $('#J_Tab');

$tab.tab({
	nav: '.tab-nav-item',
	panel: '.tab-panel-item',
	activeClass: 'tab-active'
});

$tab.find('.tab-nav-item').on('open.ydui.tab', function(e) {
	console.log('索引：%s - [%s]正在打开', e.index, $(this).text());
});

$tab.find('.tab-nav-item').on('opened.ydui.tab', function(e) {
	console.log('索引：%s - [%s]已经打开了', e.index, $(this).text());
});

$(".sou").click(function() {
	$(".sousuoMask").slideDown(400)
})
$(".Mask_content").focus();
$(".sousuoMask").click(function() {
	$(".sousuoMask").slideUp(400);
})
// 搜索
$(".aclose").click(function() {
	$(".sousuoMask").slideUp(400);
})