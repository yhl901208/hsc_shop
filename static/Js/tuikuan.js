$(function () {
    
      var uploadObj = new upload({
          id: 'file_id',
          //上传文件接收地址
          uploadUrl: "/Public/upload",
          //选择文件后，发送文件前自定义事件
          //file为上传的文件信息，可在此处做文件检测、初始化进度条等动作
          beforeSend: function (file) {

          },
          preview: function (url) {
              console.log(url);
             // var str = '<li class="lsli"><img src="' + url + '"/><input type="hidden" name="files[]" value=' + url + '><span class="icon-del"></span></li>';
             // $('#uploader ul').append(str);
          },
          //文件上传完成后回调函数
          //res为文件上传信息
          success: function (res) {
              var url = JSON.parse(res.xhr.responseText).url;
              var num = $("#uploader li").length;
              if (response.status == 200) {
                  //判断上传数量
                  if (num < 4) {
                      var str = '<li class="lsli"><img src="' + url + '"/><input type="hidden" name="files[]" value=' + url + '><span class="icon-del"></span></li>'
                      $('#uploader ul').append(str);
                  } else {
                      layer.open({
                          content: '最多只能上传4张',
                          btn: ['OK']
                      });
                      return false;
                  }

              } else {
                  layer.open({
                      content: '上传图片失败',
                      btn: ['OK']
                  });
              }


          },
          //返回上传过程中包括上传进度的相关信息
          //详细请看res,可在此加入进度条相关代码
          uploading: function (res) {

          },
          error: function (res) {
            layer.open({
                content: '上传图片失败',
                btn: ['OK']
            });

          }

      });

      //默认绑定了change事件直接触发
      //uploadObj.start();

      //默认没有绑定change事件
      $('#file_id').change(function () {
          uploadObj.add(this.files[0]);
      });
      
      
        //删除图片
     $('#uploader').on('click', '.icon-del', function () {
         var self = this;
         layer.open({
             content: '你是想确定删除呢',
             btn: ['确认', '取消'],
             shadeClose: true,
             yes: function () {
                 layer.open({content: '删除成功', time: 1});
                 $(self).parent().remove();
             }, no: function () {
                 return false;
             }
         });
     });
     //提交操作
     $(".btn-add").click(function () {
         submit();
     });
      
    //提交
    function submit() {
        var money = $('input[name="money"]').val();
        var shuoming = $("#shuoming").val();
        var select_val = $.trim($("#select_liyou option:selected").text());
        var urls_len = $("#uploader li").length;
        var str = '';
        $("#uploader input").each(function (e) {
            str += $(this).val() + ',';
        });
        if(select_val == '请选择退货理由'){
            layer.open({
                content: '请选择退货理由!',
                btn: ['OK']
            });
            return false;
        }
        if (!money) {
            layer.open({
                content: '请输入退款金额!',
                btn: ['OK']
            });
            return false;
        } 
        
        
        if (!shuoming) {
            layer.open({
                content: '请输入退货说明!',
                btn: ['OK']
            });
            return false;
        } 
        if (urls_len == 0) {
            layer.open({
                content: '最少上传一张图片!',
                btn: ['OK']
            });
            return false;

        } 
        
        //console.log(str);
        var data = {
            'name': name,
            'tel': tel,
            'email':email,
            'game':game,
            'jianjie':jianjie,
            'pic': str,
            'onepic': onepic
        };
        console.log(data);
        $.post('', data, function (result) {
            if (result['status'] == 2) {
                layer.open({
                    time: 2,
                    content: result.msg,
                });
                      
            } else {
                layer.open({
                    title: '提示',
                    content: '退款成功',
                    btn: ['确认'],
                    yes: function(index){
                       
                    }, no: function(index){
                      
                    }  
                });
            }
        });
    }
      
});