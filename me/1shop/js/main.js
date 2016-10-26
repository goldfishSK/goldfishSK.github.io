$(document).ready(function(){
// alert(1);

//轮播图

//跳转小图标
var p = $('.promo_pic li');
var l = '<li></li>';

for(var n=0; n<p.length; n++){
		$('.jump_icon').append(l); 
		}
//初始化
var num=1;
var c = ['#46e0fc','#0488d3','#ecd7ac','#4a4ae6','#0068fd','#d30009','#5137b6','#f86c17']; //背景色 有没有什么好办法可以实现？？？
function fnTab(i){
$('.promo_show ul li').eq(i).fadeIn(0).siblings().fadeOut(0);
$('.jump_icon li').eq(i).addClass('cur_jump_icon').siblings().removeClass('cur_jump_icon');
$('.banner_slider').css('background',c[i]);
}


//鼠标滑过效果
$('.jump_icon li').mouseover(function(){
	var n = $(this).index();
	fnTab(n);
	num = n;
})


//定时器效果
var timer = null;
function auto(){
	num++;
	if(num>7)num=0;
	fnTab(num);
};
auto();

timer = setInterval(auto,3000);

//左右箭头
$('.show_prev').click(function(){
	clearInterval(timer);
	num--;
	if(num<0)num=7;
	fnTab(num);
})
$('.show_next').click(function(){
	clearInterval(timer);
	num++;
	if(num>7)num=0;
	fnTab(num);
})
// $('.promo_show').hover(function(){
// 	clearInterval(timer);
// 	$('.promo_show').children('a').show(0);
// },function(){
// 	timer = setInterval(auto,3000);
// 	$('.promo_show').children('a').hide(0);
// })


//小图片轮播图

	var timerS = null;
	var n=0;
	timerS = setInterval(function(){
		$('.b_con ul').animate({marginLeft:'-330px'},1000,function(){
			$(this).css('margin-left','0px').find('li:first').appendTo(this);
		});

		// $('.b_con ol li').eq(n).css({
		// 	'height':'5px'
		// }).siblings().css({
		// 	'height':'4px'
		// });

		// $('.b_con ol li s').eq(n).animate({width:'30px'},1000);
		// $('.b_con ol li s').eq(n-1).animate({width:'0'},0);
		// n++;
		// if(n>2)n=0;
	},3000);



//1号专享 切换

		var t=0;
		function Tab(){
			$('.hd_tabs a').eq(t).addClass('cur').siblings().removeClass('cur');
			$('.tabs_content li').eq(t).show().siblings().hide();	
		}
		Tab();

		$('.hd_tabs a').mouseover(function(){
			t = $(this).index();
			Tab();
		});

//鼠标滑过 充值中心上移
		$('.tab_link').mouseover(function(){
			$('.tabs').animate({top:'200px',},500,function(){
				t = $(this).index();
				Tab();
			}).fadeIn(500);		
		});



		$('.close_btn').click(function(){
			$('.tabs').animate({
				top:'400px',
			},500).fadeOut(0);
		});


//话费充值点击事件
$('.select_result').click(function(){
	$('.select_detail').toggle();
})

$('.select_detail a').click(function(){
	var v = $(this).attr('data');
	var p = $(this).attr('normalprice');
	$('#moneyNum').attr('value',v);   
	$('#priceNum').text(p);
	$('.select_detail').hide();
})

//小广告图片鼠标滑过效果
		$('.up').hover(function(){
			$(this).find('img').animate({
				paddingLeft:'10px'
			},50)
		},function(){
			$(this).find('img').animate({
				paddingLeft:'0'
			},50)
		});
		$('.down').hover(function(){
			$(this).find('img').animate({
				paddingLeft:'10px'
			},50)
		},function(){
			$(this).find('img').animate({
				paddingLeft:'0'
			},50)
		});

//闪购 tab

	$('.sg_tab a').mouseover(function(){
		$(this).addClass('cur').siblings().removeClass('cur');

		var t = 92 + 70 * $(this).index() + 'px';
		$('.tab_arrow').animate({ 
			left:t,
		},200);

		$('.commod_floor_content .pic').eq($(this).index()).show().siblings().hide();
	})

//商品 店铺切换
	$('.hd_head_tab a').click(function(){
		var x = $('.hd_head_tab a').eq(0).text();
		var y = $('.hd_head_tab a').eq(1).text();
		$(this).text(x).siblings().text(y);

	})


})