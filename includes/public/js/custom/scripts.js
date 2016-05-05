

(function ($) {
    $(document).ready(function () {
        autosize($("textarea"))
    })
})(jQuery);

jQuery(function ($) {
    var e = $(window).width();
    $("#icemegamenu").find(".icesubMenu").each(function (a) {
        var b = $(this).offset();
        var c = b.left + $(this).width();
        if (c >= e) {
            $(this).addClass("ice_righttoleft")
        }
    });
    $(window).resize(function () {
        var d = $(window).width();
        $("#icemegamenu").find(".icesubMenu").removeClass("ice_righttoleft").each(function (a) {
            var b = $(this).offset();
            var c = b.left + $(this).width();
            if (c >= d) {
                $(this).addClass("ice_righttoleft")
            }
        })
    })
});