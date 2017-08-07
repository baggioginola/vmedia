/**
 * Created by mario on 06/ago/2017.
 */
jQuery(document).ready(function() {
    var url = window.location.href;
    var menu = jQuery('#icemegamenu');

    menu.find('a').each(function () {
        jQuery(this).removeClass('icemega_active');
    });

    var url_array = url.split('/');

    var lastElement = url_array[url_array.length - 1];

    switch (lastElement) {
        case 'impacto':
        case 'estrategia':
            jQuery('#menu_nosotros').addClass('icemega_active');
            return false;
            break;
        case 'produccion-audiovisual':
        case 'fotografia':
        case 'web-multimedia':
        case 'redes-sociales':
        case 'branding-publicidad':
        case 'comunicacion-corporativa':
            jQuery('#menu_servicios').addClass('icemega_active');
            return false;
            break;
    }

    menu.find('a').each(function() {
        var href = jQuery(this).attr('href');
        if(url === href){
            jQuery(this).addClass('icemega_active');
            console.log(href);
        }
    });
});

function setActive(object)
{
    var menu = jQuery('#icemegamenu');

    menu.find('a').each(function () {
        jQuery(this).removeClass('icemega_active');
    });

    jQuery(object).addClass('icemega_active');
}