var ShopCar = {
    init: function () {
        this.initEvent();
        this.getCount();
        this.allSelect();
        this.addPrice();
        this.minusPrice();
        this.oneSelect();
        this.delecte();
        this.pay();
    },
    initEvent: function () {

    },
    //全选/反选
    allSelect: function () {
        var self = this;
        $(".q-checkbox").click(function () {
            var $t = $(this);
            if ($t.hasClass('selected')) {
                $t.removeClass('selected');
                $(".cal-list .checkbox").removeClass('selected');
                self.getCount();
            } else {
                $t.addClass('selected');
                $(".cal-list .checkbox").addClass('selected');
                self.getCount();
            }
        });
    },
    //统计总的数量和价格
    getCount: function () {
        var conts = 0;
        var num = 0;
        $(".cal-list .selected").each(function () {
            for (var i = 0; i < $(this).length; i++) {
                conts += parseFloat($(this).attr('value'));
                num += parseInt($(this).parent().find('.pri-num').val());
            };
        });
        $("#all_number").val(num);
        $(".mum-conts").text('共'+num+'件');
                    conts=conts.toFixed(2);
        $(".price-num").text(conts);
    },
    //加一
    addPrice: function () {
        var self = this;
        $(".num-wrap .add").click(function () {
            //单价
            var oneprice = parseFloat($(this).parent().parent().find('.checkbox').attr('one-price'));
            var pricenum = parseInt($(this).parent().find('.pri-num').val());

            $(this).parent().find('.pri-num').val(pricenum + 1);
            $(this).parent().parent().find('.checkbox').attr('value', oneprice*(pricenum + 1));
            self.getCount();
        });
    },
    //减一
    minusPrice: function () {
        var self = this;
        $(".num-wrap .minus").click(function () {
            //单价
            var oneprice = parseFloat($(this).parent().parent().find('.checkbox').attr('one-price'));
            var pricenum = parseInt($(this).parent().find('.pri-num').val());
            //验证库存
            var key=$(this).parent().parent().find('.checkbox').attr('cartkey');


            if (pricenum > 1) {
                $(this).parent().find('.pri-num').val(pricenum - 1);
                $(this).parent().parent().find('.checkbox').attr('value', oneprice*(pricenum - 1));
            };
            self.getCount();
        });
    },
    //单选
    oneSelect: function () {
        var self = this;
        $(".cal-list .checkbox").click(function () {
            var $t = $(this);
            if ($t.hasClass('selected')) {
                $t.removeClass('selected');
                if($('.cal-list .selected').length == 0){
                     $(".q-checkbox").removeClass('selected');
                }
                self.getCount();
            } else {
                $t.addClass('selected');
                self.getCount();
            }
        });
    },
    //删除购物车商品
    delecte: function () {
        var self = this;
        $(".car-wrap .delete").click(function () {
            var $ele = $(".cal-list .selected");
            if ($ele.length === 0) {
               alert('请选择删除商品!');
            } else {
                layer.open({
                    content: '你是想确认呢，还是想取消呢？',
                    btn: ['确认', '取消'],
                    shadeClose: false,
                    yes: function(){
                        layer.open({content: '删除成功！', time: 1,style: 'background:rgba(0,0,0,0.9);color:#fff'});
                        $(".cal-list .selected").parent().remove();
                        self.getCount();
                        if($(".cal-list li").length == 0) {
                                $('#empty_cart').show();
                                $('#usercart').hide();
                        }
                    }, no: function(){
                      
                    }
                });
            }
        });
    },
    //结算
    pay: function () {
          //跳转链接
        $(".btnC-pay").click(function(){
            var all_num = $("#all_number").val();
            location.href="order_down.html";
        });
    }
};
