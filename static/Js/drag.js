(function (window, document, $) {
    var drop = {
        //初始化
        init: function () {
            var self = this;
            self.bindTouchEvent();
            
            // $(".custom-wrap").css('left',wd-shebeiW);
        },
        bindTouchEvent: function () {
            var self = this;
            var startX, startY;
            var divleft, divtop;
            var isMove = false; //是否发生左右滑动


            $(".custom-wrap").each(function () {
 
                this.addEventListener("touchstart", function (e) {
                    divleft = $(".swiper-slide-active .custom-wrap").position().left;
                    divtop = $(".swiper-slide-active .custom-wrap").position().top;
                    var touch = e.targetTouches[0];
                    startX = touch.pageX;
                    startY = touch.pageY;
                    startT = new Date().getTime(); //记录手指按下的开始时间
                    isMove = true;

                }, false);
                this.addEventListener("touchmove", function (e) {
                    e.stopPropagation(); //阻止事件冒泡
                    var touch = e.targetTouches[0];
                    var deltaX = touch.pageX - startX + divleft;
                    var deltaY = touch.pageY - startY + divtop;
                    console.log(deltaX);
                    if (isMove) {//判断是下滑动
                        e.preventDefault();
                        if (deltaX <= 0) { //判读是否到左边界
                            deltaX = 0;
                        } 
                        if (deltaX >= ($(window).width() - $(".swiper-slide-active .custom-wrap").width())) {//判读是否到又边界
                            deltaX = $(window).width() -  $(".swiper-slide-active .custom-wrap").width() + "px";
                        } 
                        if (deltaY <= 0) { //判读是否到上边界
                            deltaY = 0;
                        } 
                        if (deltaY >= ($(".shebei-wrap").height() - $(".swiper-slide-active .custom-wrap").height())) {//判读是否到下边界
                            deltaY = $(".shebei-wrap").height() - $(".swiper-slide-active .custom-wrap").height() + "px";
                        }
                        $(".swiper-slide-active .custom-wrap").css({'top':deltaY,'left':deltaX});
                    
                    }
                }, false);
                this.addEventListener("touchend", function () {
                    if (isMove) {//判断是否滑动
                        isMove = false;
                    }

                }, false);

            });

        }


    };
    drop.init();
})(window, document, jQuery);

