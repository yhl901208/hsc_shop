$(function () {

    var mySwiper = new Swiper('.banner', {
        autoplayDisableOnInteraction: true,
        pagination: '.swiper-pagination',
        paginationClickable: false,
        onSlideChangeEnd: function (mySwiper) {
            //if(mySwiper.activeIndex) {
        },
    });

    var showMe = function () {

        circleProgress({
            id: 'circle-progress-custom-1',
            progress: 70, // default: 100
            duration: 1000, // default: 1000
            color: '#00ffff', // default: 'rgb(52, 145, 204)'
            bgColor: 'rgba(255, 255, 255 , 0.6)', // default: 'rgb(230, 230, 230)'
            textColor: 'white', // default: 'black'
            progressWidth: 0.20, // default: 0.25 (r)
            fontScale: 0.3, // default: 0.4 (r)
            toFixed: 1  // default: 0
        });
        circleProgress({
            id: 'circle-progress-custom-2',
            progress: 60, // default: 100
            duration: 1000, // default: 1000
            color: '#00ffff', // default: 'rgb(52, 145, 204)'
            bgColor: 'rgba(255, 255, 255 , 0.6)', // default: 'rgb(230, 230, 230)'
            textColor: 'white', // default: 'black'
            progressWidth: 0.20, // default: 0.25 (r)
            fontScale: 0.3, // default: 0.4 (r)
            toFixed: 1  // default: 0
        });

    };
    
    showMe();//初始化图表
    initUpload();//初始化上传插件
    
    function initUpload(){
        var uploadObj = new upload({
          class: '.swiper-slide-active .file_id',
          //上传文件接收地址
          uploadUrl: "/Public/upload",
          //选择文件后，发送文件前自定义事件
          //file为上传的文件信息，可在此处做文件检测、初始化进度条等动作
          beforeSend: function (file) {

          },
          preview: function (url) {
             //alert("ff");
             $(".swiper-slide-active img").css('display','block');
             $(".swiper-slide-active img").attr("src",url);
             
          },
          //文件上传完成后回调函数
          //res为文件上传信息
          success: function (res) {
              var url = JSON.parse(res.xhr.responseText).url;
              var num = $("#uploader li").length;
              if (response.status == 200) {
                  $(".swiper-slide-active img").css('display','block');
                  $(".swiper-slide-active img").attr("src",url);

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
      $('.file_id').change(function () {
          uploadObj.add(this.files[0]);
      });
        
    }

      

});
