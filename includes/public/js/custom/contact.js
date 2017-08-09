/**
 * Created by mario on 08/ago/2017.
 */
jQuery(document).ready(function(){
    var form = jQuery('#form_contact').submit(function () {
        var data = jQuery(this).serialize();
        jQuery.ajax({
            url: BASE_ROOT + 'contact/sendMessage',
            type: "POST",
            cache: false,
            data: data,
            dataType: 'json',
            async: false,
            success: function (data) {
                form.trigger("reset");
                /*
                jQuery('#system-message-container').slideUp();
                jQuery('#system-message-container').text('Gracias por contactarnos');
                jQuery('#system-message-container').slideDown();
                */

                alert('Gracias por contactarnos');
            }
        });
        return false;
    });
});