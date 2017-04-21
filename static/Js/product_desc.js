var Product_Desc = {
    
    init: function() {
        this.initEvent();
        this.actionSheet();
        this.selectguige();
        this.selectNumber();
        this.messClose();
    },
    initEvent:function(){
        $(".desc-show-1 img").lazyload({
            effect: 'fadeIn',
        });
    },
    //打开滑动层
    actionSheetShow:function(){
         $(".actionSheet_wrap").css('display','block');
            setTimeout(function(){
            $(".specPopup").addClass('weui_actionsheet_toggle');
         },100);
         $(".weui_fade_toggle").css('display','block');
    },
    //关闭滑动层
    actionSheetHide:function(){
        
        $(".specPopup").removeClass('weui_actionsheet_toggle');
        setTimeout(function(){
             $(".weui_fade_toggle").css('display','none');
             $(".actionSheet_wrap").css('display','none');         
        },400);
        
    },
    
    actionSheet:function(){
        var self = this;
        
        $(".select-droduct-type").click(function(){
            self.actionSheetShow(); //显示弹出层
        });
        $("#mask").click(function(){
            self.actionSheetHide(); //关闭弹出层
        });
        $(".icon-remove").click(function(){
            self.actionSheetHide(); //关闭弹出层
        });
    },
    //    选择规格
    selectguige:function(){
        $(".detail .group").click(function(){
             $(this).addClass("select").siblings().removeClass('select');
        });
        
    },
    //选择商品数量
    selectNumber:function(){
        //添加数量
        $(".detail .add").click(function(){
            var num = $(this).parent().find('.num').text();
            var numJ = parseInt(num)+1;
            $(this).parent().find('.num').text(numJ);
                
        });
        $(".detail .minus").click(function(){
            var num = $(this).parent().find('.num').text();
            var numM = parseInt(num)-1;
            if(numM !== 0){
                $(this).parent().find('.num').text(numM);
            }
        });
    },
    messClose:function(){
        $(".mess-wrap .right-close").click(function(){
            $(this).parent().remove();
        });
    }
    
};
    
