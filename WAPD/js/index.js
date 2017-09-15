// 计算时间
var starttime = new Date();
// 结束时间   月份要减去一 111  
starttime.setFullYear(2017, 5, 19);
// 小时
starttime.setHours(23);
// 分钟
starttime.setMinutes(59);
//  秒
starttime.setSeconds(59);
// 毫秒
starttime.setMilliseconds(999);
//  结束时间到1970的毫秒数
var endtime = starttime.getTime();

function getrtime() {
    var nowtime = new Date();
    var nms = endtime - nowtime.getTime();
    // 折算还剩多少天
    var dd = Math.floor(nms / (1000 * 60 * 60 * 24));
    //  折算小时
    var nh = Math.floor(nms / (1000 * 60 * 60)) % 24;
    //  多少分钟
    var nm = Math.floor(nms / (1000 * 60)) % 60;
    //  折算多少秒
    var ns = Math.floor(nms / 1000) % 60;
    //   如果时间结束
    if (nms < 0) {
        //  隐藏倒计时 或者全部归零

        $(".timer").hide();
    } else {
        //  如果没有结束  正常显示
        //   
        $(".days").text(dd);
        $(".hours").text(nh);
        $(".minths").text(nm);
        $(".seconds").text(ns);

    }
}
//   调用方法

var timer_rt = window.setInterval("getrtime()", 100);

//带参数初始化
$('.slider10').glide({
    animationTime: 500, //动画过度效果，只有当浏览器支持CSS3的时候生效

    arrows: true, //是否显示左右导航器
    arrowsWrapperClass: "arrowsWrapper", //滑块箭头导航器外部DIV类名
    arrowMainClass: "slider-arrow", //滑块箭头公共类名
    arrowRightClass: "slider-arrow--right", //滑块右箭头类名
    arrowLeftClass: "slider-arrow--left", //滑块左箭头类名
    arrowRightText: ">", //定义左右导航器文字或者符号也可以是类
    arrowLeftText: "<",

    nav: true, //主导航器也就是本例中显示的小方块
    navCenter: true, //主导航器位置是否居中
    navClass: "w-nav", //主导航器外部div类名
    navItemClass: "slider-nav__item", //本例中小方块的样式
    navCurrentItemClass: "slider-nav__item--current" //被选中后的样式
});

//  品牌輪播圖
var glide = $('#twoSlider').glide({

    //					autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值

    animationTime: 500, //动画过度效果，只有当浏览器支持CSS3的时候生效

    arrows: true, //是否显示左右导航器
    arrowsWrapperClass: "arrowsWrapper", //滑块箭头导航器外部DIV类名
    arrowMainClass: "slider-arrow", //滑块箭头公共类名
    arrowRightClass: "slider-arrow--right", //滑块右箭头类名
    arrowLeftClass: "slider-arrow--left", //滑块左箭头类名
    arrowRightText: ">", //定义左右导航器文字或者符号也可以是类
    arrowLeftText: "<",

    nav: true, //主导航器也就是本例中显示的小方块
    navCenter: true, //主导航器位置是否居中
    navClass: "w-nav", //主导航器外部div类名
    navItemClass: "slider-nav__item", //本例中小方块的样式
    navCurrentItemClass: "slider-nav__item--current" //被选中后的样式
});
//  第二個輪播
var glide = $('#oneSlider').glide({

    //					autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值

    animationTime: 500, //动画过度效果，只有当浏览器支持CSS3的时候生效

    arrows: true, //是否显示左右导航器
    arrowsWrapperClass: "arrowsWrapper", //滑块箭头导航器外部DIV类名
    arrowMainClass: "slider-arrow", //滑块箭头公共类名
    arrowRightClass: "slider-arrow--right", //滑块右箭头类名
    arrowLeftClass: "slider-arrow--left", //滑块左箭头类名
    arrowRightText: ">", //定义左右导航器文字或者符号也可以是类
    arrowLeftText: "<",

    nav: false, //主导航器也就是本例中显示的小方块
    navCenter: true, //主导航器位置是否居中
    navClass: "w-nav", //主导航器外部div类名
    navItemClass: "slider-nav__item", //本例中小方块的样式
    navCurrentItemClass: "slider-nav__item--current" //被选中后的样式
});






$(document).ready(function() {
    if (window.screen.width > 640) {
//      alert("视图加载完毕" + window.screen.width)
        $(".slider10 .arrowsWrapper a").css("right", "90px");
    }
})