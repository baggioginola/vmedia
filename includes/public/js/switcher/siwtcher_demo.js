;(function($){
    $.fn.style_switcher = function(path, cookie_path){
        $('#style_switcher .color_scheme').click(function(){
            href = $(this).attr('data-scheme');
            if($('link#color_scheme').length){
                $('link#color_scheme').attr({href: path+href+'.css'});
            }
            else{
                $('body').append('<link id="color_scheme" rel="stylesheet" href="'+path+href+'.css">');
            }
            $('#style_switcher li').removeClass('active');
            $(this).closest('li').addClass('active');
            createCookie('color_scheme', href, 0, cookie_path);
            var request = {
                'option' : 'com_ajax',
                'module' : 'tm_style_switcher',
                'format' : 'raw',
                'method':'clearcache'
            };
            $.ajax({
                type   : 'POST',
                data   : request
            })
        })
    }
})(jQuery);