/**
 * Created by mario.cuevas on 5/4/2016.
 */
(function ($) {
    $(document).ready(function () {
        var o = $("#back-top");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                o.fadeIn()
            } else {
                o.fadeOut()
            }
        });
        var $scrollEl = ($.browser.mozilla || $.browser.msie) ? $("html") : $("body");
        o.find("a").click(function () {
            $scrollEl.animate({scrollTop: 0}, 400);
            return false
        })
    })
})(jQuery);