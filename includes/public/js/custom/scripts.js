

(function (jQuery) {
    jQuery(document).ready(function () {
        autosize(jQuery("textarea"))
    })
})(jQuery);

jQuery(function (jQuery) {
    var e = jQuery(window).width();
    jQuery("#icemegamenu").find(".icesubMenu").each(function (a) {
        var b = jQuery(this).offset();
        var c = b.left + jQuery(this).width();
        if (c >= e) {
            jQuery(this).addClass("ice_righttoleft")
        }
    });
    jQuery(window).resize(function () {
        var d = jQuery(window).width();
        jQuery("#icemegamenu").find(".icesubMenu").removeClass("ice_righttoleft").each(function (a) {
            var b = jQuery(this).offset();
            var c = b.left + jQuery(this).width();
            if (c >= d) {
                jQuery(this).addClass("ice_righttoleft")
            }
        })
    })
});

jQuery(function (jQuery) {
    jQuery("#camera-slideshow_201").camera({
        alignment: "topCenter",
        autoAdvance: 1,
        mobileAutoAdvance: 1,
        barDirection: "leftToRight",
        barPosition: "bottom",
        cols: 6,
        easing: "swing",
        mobileEasing: "swing",
        fx: "simpleFade",
        mobileFx: "simpleFade",
        gridDifference: 250,
        height: "56,8780487804878%",
        imagePath: "/joomla_58088/templates/theme3241/images/",
        hover: 0,
        loader: "none",
        loaderColor: "#eeeeee",
        loaderBgColor: "#222222",
        loaderOpacity: .8,
        loaderPadding: 2,
        loaderStroke: 7,
        minHeight: "420px",
        navigation: 0,
        navigationHover: 0,
        mobileNavHover: 0,
        opacityOnGrid: 0,
        overlayer: 0,
        pagination: 1,
        playPause: 0,
        pauseOnClick: 0,
        pieDiameter: 38,
        piePosition: "rightTop",
        portrait: 0,
        rows: 4,
        slicedCols: 6,
        slicedRows: 4,
        thumbnails: 0,
        time: 3000,
        transPeriod: 500
    })
});

/*
jQuery(document).ready(function () {
    jQuery(document).on("scroll", onScroll);

    //smoothscroll
    jQuery('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(document).off("scroll");

        jQuery('a').each(function () {
            jQuery(this).removeClass('active');
        })
        jQuery(this).addClass('active');

        var target = this.hash,
            menu = target;
        jQuerytarget = jQuery(target);
        jQuery('html, body').stop().animate({
            'scrollTop': jQuerytarget.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            jQuery(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    console.log(scrollPos);
    jQuery('.icemegamenu a').each(function () {
        var currLink = jQuery(this);
        console.log("current link: " + currLink);
        var refElement = jQuery(currLink.attr("href"));
        console.log("ref Element: " + refElement);
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            jQuery('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
    */