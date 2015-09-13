/*!
 * civil.js - Vertical Rhythm Plugin for jQuery
 * https://github.com/CivilApp/civil.css
 *
 * Built on jQuery Boilerplate
 * http://jqueryboilerplate.com/
 *
 * Copyright 2015 Ian Lai and other contributors
 * Released under the MIT license
 * http://ian.mit-license.org/
 */

/*eslint-env browser */
/*global jQuery:false */
/*eslint-disable no-underscore-dangle */

(function ($) {
    "use strict";

    var pluginName = "civil",
        defaults = {
            baseline: 30,
            extra: false
        };

    function Plugin (element, options) {
        this.element = $(element);

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._init();
    }

    Plugin.prototype = {
        _init: function () {
            var $this = this;
            $this.fixRhythm($this.element);

            $(window).resize($this._debounce(function () {
                $this.fixRhythm($this.element);
            }, 1000));
        },
        _debounce: function (func, wait, immediate) {
            // Source: http://davidwalsh.name/javascript-debounce-function
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },
        fixRhythm: function ($obj) {
            var $difference = this.settings.baseline - ($obj.outerHeight() % this.settings.baseline);
            if (this.settings.extra > 0) {
                $difference += this.settings.extra;
            }
            if ($difference > 0) {
                $obj.css("marginBottom", $difference + "px");
            }
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
})(jQuery);