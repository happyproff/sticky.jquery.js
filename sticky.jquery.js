/**
 * Sticky
 * The jQuery plugin allows the HTML-element to be on the screen even after scrolling
 * http://plugins.jquery.com/sticky/
 *
 * @version 0.1.9
 * @license MIT
 * @author Stanislav Gamaynov happyproff.ru
 */
(function ($) {
    "use strict";

    $.fn.sticky = function (marginTop) {

        return this.each(function () {

            if (marginTop == null) marginTop = 0;

            var $this = $(this);
            var $window = $(window);

            var offset = $this.offset();
            var startOffset = offset.top;
            var startPosition = $this.css('position');
            var startWidth = $this.width();

            $window.on('scroll', function () {

                if ($window.scrollTop() > (startOffset - parseInt(marginTop))) {
                    $this.css('position', 'fixed').css('margin-top', '-' + (parseInt(startOffset) - parseInt(marginTop)) + 'px').css('width', startWidth + 'px');
                } else {
                    $this.css('position', startPosition).css('margin-top', '0');
                }

            });

        });

    };

})(window.jQuery);
