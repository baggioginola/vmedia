/**
 * Created by mario on 28/jul/2017.
 */
jQuery(document).ready(function () {
    var header = jQuery('#header');

    console.log(header);
    var div = header.siblings();
    console.log(div);
    div.empty();

    var parallax_image = jQuery('.parallax_image');

    parallax_image.css('opacity','0.6');

    var video = jQuery('#player');

    video.css('opacity','0.6');
});