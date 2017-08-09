(function ($) {
    var RDYoutubeBG = function (element, options) {
        this.options = options;
        this.settings = {'contentClass': 'rd-video_cnt', 'wrapClass': 'rd-video', 'overlayClass': 'rd-overlay'}
        this.$wrap = $(element);
        this.player;
    };
    RDYoutubeBG.prototype = {
        init: function () {
            var video = this;
            video.createDOM();
            video.addStyles();
            video.addApi();
        }, createDOM: function () {
            var video = this;
            video.$wrap.wrap($('<div/>', {'class': video.settings.wrapClass})).parent().append($('<div/>', {'class': video.settings.contentClass})).append($('<div/>', {'class': video.settings.overlayClass}));
            $('.' + video.settings.contentClass).prepend(video.$wrap.html());
            video.$wrap.empty();
        }, addStyles: function () {
            var video = this;
            video.$wrap.parent().css({'position': 'relative', 'overflow': 'hidden', 'z-index': video.options.zIndex});
            video.$wrap.css({'position': 'absolute', 'z-index': -2});
            video.$wrap.parent().find('.' + video.settings.overlayClass).css({
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'width': '100%',
                'height': '100%',
                'z-index': -1
            })
        }, createPlayer: function () {
            var video = this;
            video.player = new YT.Player(video.$wrap.attr('id'), {
                height: '1080',
                width: '1920',
                videoId: video.options.videoId,
                playerVars: {controls: 0, showinfo: 0, modestbranding: 1, wmode: 'transparent', iv_load_policy: 3},
                events: {
                    'onReady': function (e) {
                        video.onPlayerReady(e, video);
                    }
                }
            });
        }, addApi: function () {
            var video = this;
            if (!video.options.mobile && video.isMobile()) {
                console.log('mobile');
                video.$wrap.parent().find('.' + video.settings.overlayClass).css({
                    'background-image': 'url(' + video.options.imageUrl + ')',
                    'background-size': 'cover'
                });
            } else {
                video.createVimeo()
            }
        }, onPlayerReady: function (video) {
            video.player.setVolume(0);
            video.resize();
        }, resize: function () {
            var video = this;
            var $el = $('#' + video.$wrap.attr('id'));

            $el.removeAttr('height').removeAttr('width');
            $(window).resize(function () {
                var width = $el.parent().width(), pWidth, height = $('.' + video.settings.wrapClass).height(), pHeight
                if (width / video.options.ratio < height) {
                    pWidth = Math.ceil(height * video.options.ratio);
                    $el.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0});
                } else {
                    pHeight = Math.ceil(width / video.options.ratio);
                    $el.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2});
                }
            }).resize();

            var div = document.getElementById('player');

            console.log(div);
            var iFrame = div.getElementsByTagName("iframe")[0];

            iFrame.setAttribute('width', $el.width());
            iFrame.setAttribute('height', $el.height());

        }, isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }, createVimeo: function () {
            var video = this;

            video.player = new Vimeo.Player(video.$wrap.attr('id'), {
                height: '1080',
                width: '1920',
                id: 227856242,
                autoplay: true,
                title: false,
                loop: true
            });

            video.player.ready().then(function(){
                video.onPlayerReady(video);
            });
        }
    };
    $.fn.rdyoutubebg = function (option) {
        var element = this.each(function () {
            var options = $.extend({}, $.fn.rdyoutubebg.defaults, option);
            new RDYoutubeBG(this, options).init();
        });
        return element;
    };
    $.fn.rdyoutubebg.defaults = {
        ratio: 16 / 9,
        videoId: '',
        mute: true,
        start: 0,
        zIndex: 5,
        mobile: false,
        imageUrl: ''
    };
    window.RDYoutubeBG_autoinit = function (selector) {
        $(selector).each(function () {
            var options = $.extend({}, $.fn.rdyoutubebg.defaults, {
                ratio: $(this).data('ratio'),
                videoId: $(this).data('video-id'),
                mute: $(this).data('mute'),
                start: $(this).data('start'),
                zIndex: $(this).data('z-index'),
                mobile: $(this).data('mobile'),
                imageUrl: $(this).data('image-url')
            });
            if (options.videoId) {
                new RDYoutubeBG(this, options).init();
            } else {
                console.error('RD Youtube BG: data-videoId is not defined');
            }
        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {
        RDYoutubeBG_autoinit('.rd-youtube-bg');
    })
})(jQuery);