(function (e) {
    "use strict";
    var s = { dist: 200, fadeInDelay: 400, fadeOutDelay: 400, scrollSpeed: 400, easingType: "linear", css: { top: null, bottom: "30px", left: null, right: "30px" } };
    e.fn.gototop = function (t) {
        var i = e.extend(!0, {}, s, t),
            n = !1,
            o = i.dist > 0,
            l = !1;
        if (o)
            try {
                var a = Object.defineProperty({}, "passive", {
                    get: function () {
                        l = !0;
                    },
                });
                window.addEventListener("test", null, a);
            } catch (e) { }
        return this.each(function () {
            var s = e(this);
            e(this).css("position", "fixed"), o && e(this).css("display", "none");
            for (var t in i.css) null !== t && void 0 !== t && e(this).css(t, i.css[t]);
            e(this).click(function (s) {
                return void 0 !== e.scrollTo ? e.scrollTo(0, i.scrollSpeed, { easing: i.easingType }) : e("html, body").animate({ scrollTop: e(this).scrollTop() }, i.scrollSpeed), !1;
            }),
                o &&
                window.addEventListener(
                    "scroll",
                    function () {
                        var t = e(this).scrollTop();
                        !n && t > i.dist ? (s.fadeIn(i.fadeInDelay), (n = !0)) : n && t <= i.dist && (s.fadeOut(i.fadeOutDelay), (n = !1));
                    },
                    !!l && { passive: !0 }
                );
        });
    };
})(jQuery);
