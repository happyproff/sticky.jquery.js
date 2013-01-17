/**
 * Sticky 0.1.2 - jQuery plugin for sticking HTML element on a fixed position on a screen
 * (c) 2013 Stanislav Gamayunov - happyproff.com
 * license: www.opensource.org/licenses/mit-license.php
 */
(function ($) {

    $.fn.sticky = function (marginTop) {

        return this.each(function () {

            if (marginTop == null) marginTop = 0;

            var $this = $(this);
            var $window = $(window);

            var offset = $this.offset();
            var startOffset = offset.top;
            var startPosition = $this.css('position');

            $window.on('scroll', function() {

                if ($window.scrollTop() > (startOffset - marginTop*1)) {
                    $this.css('position', 'fixed').css('margin-top', '-' + (startOffset*1 - marginTop*1) + 'px');
                } else {
                    $this.css('position', startPosition).css('margin-top', '0');
                }

            });

        });

    };

})(window.jQuery);
