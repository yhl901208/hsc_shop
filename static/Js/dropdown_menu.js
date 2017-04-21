$(function () {

    $(".fenxiao").click(function () {
        if ($(this).hasClass("curr")) {

            $(this).parent().find(".down").slideDown();
            $(this).removeClass("curr");
            $(this).find('.icon-right').addClass('icon-down');
        } else {

            $(this).addClass("curr");
            $(this).parent().find(".down").slideUp();
            $(this).find('.icon-right').removeClass('icon-down')
        }
    });
});
