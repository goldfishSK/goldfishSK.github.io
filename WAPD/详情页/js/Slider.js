/**
 * $.yxMobileSlider
 * @charset utf-8
 * @extends jquery.1.9.1
 * @fileOverview ����һ�������ֲ����������PC�˺��ƶ��ˣ��������뱣��������лл��
 * @author ������
 * @version 1.0
 * @date 2013-11-12
 * @example
 * $(".container").yxMobileSlider();
 */
(function($){
    $.fn.yxMobileSlider = function(settings){
        var defaultSettings = {
            width: 640, //�������
            height: 320, //�����߶�
            during: 5000, //���ʱ��
            speed:30 //�����ٶ�
        }
        settings = $.extend(true, {}, defaultSettings, settings);
        return this.each(function(){
            var _this = $(this), s = settings;
            var startX = 0, startY = 0; //������ʼʱ���ƺ������� 
            var temPos; //����Ԫ�ص�ǰλ��
            var iCurr = 0; //��ǰ������Ļ��
            var timer = null; //��ʱ��
            var oMover = $("ul", _this); //����Ԫ��
            var oLi = $("li", oMover); //������Ԫ
            var num = oLi.length; //������Ļ��
            var oPosition = {}; //����λ��
            var moveWidth = s.width; //�������
            //��ʼ��������ʽ
            _this.width(s.width).height(s.height).css({
                position: 'relative',
                overflow: 'hidden',
				margin:'0 auto'
            }); //�趨������߼���ʽ
            oMover.css({
                position: 'absolute',
                left: 0
            });
            oLi.css({
                float: 'left',
                display: 'inline'
            });
            $("img", oLi).css({
                width: '100%',
                height: '100%'
            });
            //��ʼ��������������ť
            _this.append('<div class="focus"><div></div></div>');
            var oFocusContainer = $(".focus");
            for (var i = 0; i < num; i++) {
                $("div", oFocusContainer).append("<span></span>");
            }
            var oFocus = $("span", oFocusContainer);
            oFocusContainer.css({
                minHeight: $(this).find('span').height() * 2,
                position: 'absolute',
                bottom: 0,
                background: 'rgba(0,0,0,0.5)'
            })
            $("span", oFocusContainer).css({
                display: 'block',
                float: 'left',
                cursor: 'pointer'
            })
            $("div", oFocusContainer).width(oFocus.outerWidth(true) * num).css({
                position: 'absolute',
                right: 10,
                top: '50%',
                marginTop: -$(this).find('span').width() / 2
            });
            oFocus.first().addClass("current");
            //ҳ����ػ����ı�
            $(window).bind('resize load', function(){
                if (isMobile()) {
                    mobileSettings();
                    bindTochuEvent();
                }
                oLi.width(_this.width()).height(_this.height());//�趨������Ԫ���
                oMover.width(num * oLi.width());
                oFocusContainer.width(_this.width()).height(_this.height() * 0.15).css({
                    zIndex: 2
                });//�趨�������������ʽ
                _this.fadeIn(300);
            });
            //ҳ��������BANNER�Զ�����
            autoMove();
            //PC���½����л�
            if (!isMobile()) {
                oFocus.hover(function(){
                    iCurr = $(this).index() - 1;
                    stopMove();
                    doMove();
                }, function(){
                    autoMove();
                })
            }
            //�Զ��˶�
            function autoMove(){
                timer = setInterval(doMove, s.during);
            }
            //ֹͣ�Զ��˶�
            function stopMove(){
                clearInterval(timer);
            }
            //�˶�Ч��
            function doMove(){
                iCurr = iCurr >= num - 1 ? 0 : iCurr + 1;
                doAnimate(-moveWidth * iCurr);
                oFocus.eq(iCurr).addClass("current").siblings().removeClass("current");
            }
            //�󶨴����¼�
            function bindTochuEvent(){
                oMover.get(0).addEventListener('touchstart', touchStartFunc, false);
                oMover.get(0).addEventListener('touchmove', touchMoveFunc, false);
                oMover.get(0).addEventListener('touchend', touchEndFunc, false);
            }
            //��ȡ����λ��
            function touchPos(e){
                var touches = e.changedTouches, l = touches.length, touch, tagX, tagY;
                for (var i = 0; i < l; i++) {
                    touch = touches[i];
                    tagX = touch.clientX;
                    tagY = touch.clientY;
                }
                oPosition.x = tagX;
                oPosition.y = tagY;
                return oPosition;
            }
            //������ʼ
            function touchStartFunc(e){
                clearInterval(timer);
                touchPos(e);
                startX = oPosition.x;
                startY = oPosition.y;
                temPos = oMover.position().left;
            }
            //�����ƶ� 
            function touchMoveFunc(e){
                touchPos(e);
                var moveX = oPosition.x - startX;
                var moveY = oPosition.y - startY;
                if (Math.abs(moveY) < Math.abs(moveX)) {
                    e.preventDefault();
                    oMover.css({
                        left: temPos + moveX
                    });
                }
            }
            //��������
            function touchEndFunc(e){
                touchPos(e);
                var moveX = oPosition.x - startX;
                var moveY = oPosition.y - startY;
                if (Math.abs(moveY) < Math.abs(moveX)) {
                    if (moveX > 0) {
                        iCurr--;
                        if (iCurr >= 0) {
                            var moveX = iCurr * moveWidth;
                            doAnimate(-moveX, autoMove);
                        }
                        else {
                            doAnimate(0, autoMove);
                            iCurr = 0;
                        }
                    }
                    else {
                        iCurr++;
                        if (iCurr < num && iCurr >= 0) {
                            var moveX = iCurr * moveWidth;
                            doAnimate(-moveX, autoMove);
                        }
                        else {
                            iCurr = num - 1;
                            doAnimate(-(num - 1) * moveWidth, autoMove);
                        }
                    }
                    oFocus.eq(iCurr).addClass("current").siblings().removeClass("current");
                }
            }
            //�ƶ��豸������Ļ��������������
            function mobileSettings(){
                moveWidth = $(window).width();
                var iScale = $(window).width() / s.width;
                _this.height(s.height * iScale).width($(window).width());
                oMover.css({
                    left: -iCurr * moveWidth
                });
            }
            //����Ч��
            function doAnimate(iTarget, fn){
                oMover.stop().animate({
                    left: iTarget
                }, _this.speed , function(){
                    if (fn) 
                        fn();
                });
            }
            //�ж��Ƿ����ƶ��豸
            function isMobile(){
                if (navigator.userAgent.match(/Android/i) || navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
    }
})(jQuery);