/**
 * Created by mario.cuevas on 5/4/2016.
 */
/*
jQuery(document).ready(function () {
    //jQuery(document).on("scroll", onScroll);

    jQuery('a[href^="#"]').on('click', function (e) {

        console.log('click');
        e.preventDefault();
        jQuery(document).off("scroll");

        jQuery('a').each(function () {
            jQuery(this).removeClass('active');
        });
        jQuery(this).addClass('active');

        var target = this.hash;
        jQuerytarget = jQuery(target);
        jQuery('html, body').stop().animate({
            'scrollTop': jQuerytarget.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            //jQuery(document).on("scroll", onScroll);
        });
    });
});
/*
function onScroll(event){
    var scrollPosition = jQuery(document).scrollTop();
    jQuery('nav a').each(function () {
        var currentLink = jQuery(this);
        console.log(currentLink);
        var refElement = jQuery(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            jQuery('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}*/
