var cr = {
    plugins_: {},
    behaviors: {}
};
"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) {
    return t.__proto__
}
: function(t) {
    return t.constructor.prototype
}
),
function() {
    function t(t, e) {
        this.x = t,
        this.y = e,
        cr.seal(this)
    }
    function e(t, e, i, s) {
        this.set(t, e, i, s),
        cr.seal(this)
    }
    function i() {
        this.tlx = 0,
        this.tly = 0,
        this.trx = 0,
        this.try_ = 0,
        this.brx = 0,
        this.bry = 0,
        this.blx = 0,
        this.bly = 0,
        cr.seal(this)
    }
    cr.logexport = function(t) {
        window.console && window.console.log && window.console.log(t)
    }
    ,
    cr.logerror = function(t) {
        window.console && window.console.error && window.console.error(t)
    }
    ,
    cr.seal = function(t) {
        return t
    }
    ,
    cr.freeze = function(t) {
        return t
    }
    ,
    cr.is_undefined = function(t) {
        return void 0 === t
    }
    ,
    cr.is_number = function(t) {
        return "number" == typeof t
    }
    ,
    cr.is_string = function(t) {
        return "string" == typeof t
    }
    ,
    cr.isPOT = function(t) {
        return 0 < t && 0 == (t - 1 & t)
    }
    ,
    cr.nextHighestPowerOfTwo = function(t) {
        --t;
        for (var e = 1; e < 32; e <<= 1)
            t |= t >> e;
        return t + 1
    }
    ,
    cr.abs = function(t) {
        return t < 0 ? -t : t
    }
    ,
    cr.max = function(t, e) {
        return e < t ? t : e
    }
    ,
    cr.min = function(t, e) {
        return t < e ? t : e
    }
    ,
    cr.PI = Math.PI,
    cr.round = function(t) {
        return t + .5 | 0
    }
    ,
    cr.floor = function(t) {
        return 0 <= t ? 0 | t : (0 | t) - 1
    }
    ,
    cr.ceil = function(t) {
        var e = 0 | t;
        return e === t ? e : 1 + e
    }
    ,
    t.prototype.offset = function(t, e) {
        return this.x += t,
        this.y += e,
        this
    }
    ,
    t.prototype.mul = function(t, e) {
        return this.x *= t,
        this.y *= e,
        this
    }
    ,
    cr.vector2 = t,
    cr.segments_intersect = function(t, e, i, s, n, r, o, a) {
        var h, c, l = t < i ? (p = t,
        i) : (p = i,
        t), u = n < o ? (h = n,
        o) : (h = o,
        n);
        if (l < h || u < p)
            return !1;
        if (p = r < a ? (c = r,
        a) : (c = a,
        r),
        (e < s ? (d = e,
        s) : (d = s,
        e)) < c || p < d)
            return !1;
        var p = n - t + o - i
          , d = r - e + a - s
          , t = i - t
          , e = s - e
          , n = o - n
          , a = a - r
          , r = cr.abs(e * n - a * t)
          , a = n * d - a * p;
        if (cr.abs(a) > r)
            return !1;
        p = t * d - e * p;
        return cr.abs(p) <= r
    }
    ,
    e.prototype.set = function(t, e, i, s) {
        this.left = t,
        this.top = e,
        this.right = i,
        this.bottom = s
    }
    ,
    e.prototype.copy = function(t) {
        this.left = t.left,
        this.top = t.top,
        this.right = t.right,
        this.bottom = t.bottom
    }
    ,
    e.prototype.width = function() {
        return this.right - this.left
    }
    ,
    e.prototype.height = function() {
        return this.bottom - this.top
    }
    ,
    e.prototype.offset = function(t, e) {
        return this.left += t,
        this.top += e,
        this.right += t,
        this.bottom += e,
        this
    }
    ,
    e.prototype.normalize = function() {
        var t = 0;
        this.left > this.right && (t = this.left,
        this.left = this.right,
        this.right = t),
        this.top > this.bottom && (t = this.top,
        this.top = this.bottom,
        this.bottom = t)
    }
    ,
    e.prototype.intersects_rect = function(t) {
        return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
    }
    ,
    e.prototype.intersects_rect_off = function(t, e, i) {
        return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
    }
    ,
    e.prototype.contains_pt = function(t, e) {
        return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
    }
    ,
    e.prototype.equals = function(t) {
        return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
    }
    ,
    cr.rect = e,
    i.prototype.set_from_rect = function(t) {
        this.tlx = t.left,
        this.tly = t.top,
        this.trx = t.right,
        this.try_ = t.top,
        this.brx = t.right,
        this.bry = t.bottom,
        this.blx = t.left,
        this.bly = t.bottom
    }
    ,
    i.prototype.set_from_rotated_rect = function(t, e) {
        var i, s, n, r, o, a, h;
        0 === e ? this.set_from_rect(t) : (a = Math.sin(e),
        h = Math.cos(e),
        i = t.left * a,
        s = t.top * a,
        n = t.right * a,
        r = t.bottom * a,
        o = t.left * h,
        e = t.top * h,
        a = t.right * h,
        h = t.bottom * h,
        this.tlx = o - s,
        this.tly = e + i,
        this.trx = a - s,
        this.try_ = e + n,
        this.brx = a - r,
        this.bry = h + n,
        this.blx = o - r,
        this.bly = h + i)
    }
    ,
    i.prototype.offset = function(t, e) {
        return this.tlx += t,
        this.tly += e,
        this.trx += t,
        this.try_ += e,
        this.brx += t,
        this.bry += e,
        this.blx += t,
        this.bly += e,
        this
    }
    ;
    var n = 0
      , r = 0;
    function s(t, e, i, s) {
        r = t < e ? i < s ? (n = t < i ? t : i,
        s < e ? e : s) : (n = t < s ? t : s,
        i < e ? e : i) : i < s ? (n = e < i ? e : i,
        s < t ? t : s) : (n = e < s ? e : s,
        i < t ? t : i)
    }
    i.prototype.bounding_box = function(t) {
        s(this.tlx, this.trx, this.brx, this.blx),
        t.left = n,
        t.right = r,
        s(this.tly, this.try_, this.bry, this.bly),
        t.top = n,
        t.bottom = r
    }
    ,
    i.prototype.contains_pt = function(t, e) {
        var i = this.tlx
          , s = this.tly
          , n = this.trx - i
          , r = this.try_ - s
          , o = this.brx - i
          , a = this.bry - s
          , h = t - i
          , c = e - s
          , l = n * n + r * r
          , u = n * o + r * a
          , p = n * h + r * c
          , d = o * o + a * a
          , f = o * h + a * c
          , y = 1 / (l * d - u * u)
          , t = (d * p - u * f) * y
          , e = (l * f - u * p) * y;
        if (0 <= t && 0 < e && t + e < 1)
            return !0;
        e = ((l = (n = this.blx - i) * n + (r = this.bly - s) * r) * f - (u = n * o + r * a) * (p = n * h + r * c)) * (y = 1 / (l * d - u * u));
        return 0 <= (t = (d * p - u * f) * y) && 0 < e && t + e < 1
    }
    ,
    i.prototype.at = function(t, e) {
        if (e)
            switch (t) {
            case 0:
                return this.tlx;
            case 1:
                return this.trx;
            case 2:
                return this.brx;
            case 3:
                return this.blx;
            case 4:
            default:
                return this.tlx
            }
        else
            switch (t) {
            case 0:
                return this.tly;
            case 1:
                return this.try_;
            case 2:
                return this.bry;
            case 3:
                return this.bly;
            case 4:
            default:
                return this.tly
            }
    }
    ,
    i.prototype.midX = function() {
        return (this.tlx + this.trx + this.brx + this.blx) / 4
    }
    ,
    i.prototype.midY = function() {
        return (this.tly + this.try_ + this.bry + this.bly) / 4
    }
    ,
    i.prototype.intersects_segment = function(t, e, i, s) {
        if (this.contains_pt(t, e) || this.contains_pt(i, s))
            return !0;
        for (var n, r, o, a, h = 0; h < 4; h++)
            if (n = this.at(h, !0),
            r = this.at(h, !1),
            o = this.at(h + 1, !0),
            a = this.at(h + 1, !1),
            cr.segments_intersect(t, e, i, s, n, r, o, a))
                return !0;
        return !1
    }
    ,
    i.prototype.intersects_quad = function(t) {
        var e, i, s, n, r, o, a, h, c, l, u = t.midX(), p = t.midY();
        if (this.contains_pt(u, p))
            return !0;
        if (u = this.midX(),
        p = this.midY(),
        t.contains_pt(u, p))
            return !0;
        for (c = 0; c < 4; c++)
            for (l = 0; l < 4; l++)
                if (e = this.at(c, !0),
                i = this.at(c, !1),
                s = this.at(c + 1, !0),
                n = this.at(c + 1, !1),
                r = t.at(l, !0),
                o = t.at(l, !1),
                a = t.at(l + 1, !0),
                h = t.at(l + 1, !1),
                cr.segments_intersect(e, i, s, n, r, o, a, h))
                    return !0;
        return !1
    }
    ,
    cr.quad = i,
    cr.RGB = function(t, e, i) {
        return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
    }
    ,
    cr.GetRValue = function(t) {
        return 255 & t
    }
    ,
    cr.GetGValue = function(t) {
        return (65280 & t) >> 8
    }
    ,
    cr.GetBValue = function(t) {
        return (16711680 & t) >> 16
    }
    ,
    cr.shallowCopy = function(t, e, i) {
        for (var s in e)
            e.hasOwnProperty(s) && (t[s] = e[s]);
        return t
    }
    ,
    cr.arrayRemove = function(t, e) {
        var i, s;
        if (!((e = cr.floor(e)) < 0 || e >= t.length)) {
            for (i = e,
            s = t.length - 1; i < s; i++)
                t[i] = t[i + 1];
            cr.truncateArray(t, s)
        }
    }
    ,
    cr.truncateArray = function(t, e) {
        t.length = e
    }
    ,
    cr.clearArray = function(t) {
        cr.truncateArray(t, 0)
    }
    ,
    cr.shallowAssignArray = function(t, e) {
        var i, s;
        for (cr.clearArray(t),
        i = 0,
        s = e.length; i < s; ++i)
            t[i] = e[i]
    }
    ,
    cr.appendArray = function(t, e) {
        t.push.apply(t, e)
    }
    ,
    cr.fastIndexOf = function(t, e) {
        for (var i = 0, s = t.length; i < s; ++i)
            if (t[i] === e)
                return i;
        return -1
    }
    ,
    cr.arrayFindRemove = function(t, e) {
        e = cr.fastIndexOf(t, e);
        -1 !== e && cr.arrayRemove(t, e)
    }
    ,
    cr.clamp = function(t, e, i) {
        return t < e ? e : i < t ? i : t
    }
    ,
    cr.to_radians = function(t) {
        return t / (180 / cr.PI)
    }
    ,
    cr.to_degrees = function(t) {
        return t * (180 / cr.PI)
    }
    ,
    cr.clamp_angle_degrees = function(t) {
        return (t %= 360) < 0 && (t += 360),
        t
    }
    ,
    cr.clamp_angle = function(t) {
        return (t %= 2 * cr.PI) < 0 && (t += 2 * cr.PI),
        t
    }
    ,
    cr.to_clamped_degrees = function(t) {
        return cr.clamp_angle_degrees(cr.to_degrees(t))
    }
    ,
    cr.to_clamped_radians = function(t) {
        return cr.clamp_angle(cr.to_radians(t))
    }
    ,
    cr.angleTo = function(t, e, i, s) {
        t = i - t,
        e = s - e;
        return Math.atan2(e, t)
    }
    ,
    cr.angleDiff = function(t, e) {
        if (t === e)
            return 0;
        var i = Math.sin(t)
          , t = Math.cos(t)
          , e = i * Math.sin(e) + t * Math.cos(e);
        return 1 <= e ? 0 : e <= -1 ? cr.PI : Math.acos(e)
    }
    ,
    cr.angleRotate = function(t, e, i) {
        var s = Math.sin(t)
          , n = Math.cos(t)
          , r = Math.sin(e)
          , o = Math.cos(e);
        return Math.acos(s * r + n * o) > i ? 0 < n * r - s * o ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
    }
    ,
    cr.angleClockwise = function(t, e) {
        var i = Math.sin(t);
        return Math.cos(t) * Math.sin(e) - i * Math.cos(e) <= 0
    }
    ,
    cr.rotatePtAround = function(t, e, i, s, n, r) {
        if (0 === i)
            return r ? t : e;
        var o = Math.sin(i)
          , a = Math.cos(i)
          , i = (t -= s) * o;
        return t = t * a - (e -= n) * o,
        e = e * a + i,
        t += s,
        e += n,
        r ? t : e
    }
    ,
    cr.distanceTo = function(t, e, i, s) {
        t = i - t,
        e = s - e;
        return Math.sqrt(t * t + e * e)
    }
    ,
    cr.xor = function(t, e) {
        return !t != !e
    }
    ,
    cr.lerp = function(t, e, i) {
        return t + (e - t) * i
    }
    ,
    cr.unlerp = function(t, e, i) {
        return t === e ? 0 : (i - t) / (e - t)
    }
    ,
    cr.anglelerp = function(t, e, i) {
        var s = cr.angleDiff(t, e);
        return cr.angleClockwise(e, t) ? t + s * i : t - s * i
    }
    ,
    cr.qarp = function(t, e, i, s) {
        return cr.lerp(cr.lerp(t, e, s), cr.lerp(e, i, s), s)
    }
    ,
    cr.cubic = function(t, e, i, s, n) {
        return cr.lerp(cr.qarp(t, e, i, n), cr.qarp(e, i, s, n), n)
    }
    ,
    cr.cosp = function(t, e, i) {
        return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
    }
    ,
    cr.hasAnyOwnProperty = function(t) {
        for (var e in t)
            if (t.hasOwnProperty(e))
                return !0;
        return !1
    }
    ,
    cr.wipe = function(t) {
        for (var e in t)
            t.hasOwnProperty(e) && delete t[e]
    }
    ;
    var o = +new Date
      , a = !(cr.performance_now = function() {
        if (void 0 !== window.performance) {
            var t = window.performance;
            if (void 0 !== t.now)
                return t.now();
            if (void 0 !== t.webkitNow)
                return t.webkitNow();
            if (void 0 !== t.mozNow)
                return t.mozNow();
            if (void 0 !== t.msNow)
                return t.msNow()
        }
        return Date.now() - o
    }
    )
      , h = !1
      , c = !1;
    "undefined" != typeof window && (a = !(/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent),
    h = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
    c = window.c2ejecta);
    var l = !a && !c && !h && "undefined" != typeof Set && void 0 !== Set.prototype.forEach;
    function u() {
        this.s = null,
        this.items = null,
        this.item_count = 0,
        l && (this.s = new Set),
        this.values_cache = [],
        this.cache_valid = !0,
        cr.seal(this)
    }
    u.prototype.contains = function(t) {
        return !this.isEmpty() && (l ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
    }
    ,
    u.prototype.add = function(t) {
        var e, i;
        l ? this.s.has(t) || (this.s.add(t),
        this.cache_valid = !1) : (e = t.toString(),
        (i = this.items) ? i.hasOwnProperty(e) || (i[e] = t,
        this.item_count++,
        this.cache_valid = !1) : (this.items = {},
        this.items[e] = t,
        this.item_count = 1,
        this.cache_valid = !1))
    }
    ,
    u.prototype.remove = function(t) {
        var e;
        this.isEmpty() || (l ? this.s.has(t) && (this.s.delete(t),
        this.cache_valid = !1) : this.items && (e = t.toString(),
        (t = this.items).hasOwnProperty(e) && (delete t[e],
        this.item_count--,
        this.cache_valid = !1)))
    }
    ,
    u.prototype.clear = function() {
        this.isEmpty() || (l ? this.s.clear() : (this.items = null,
        this.item_count = 0),
        cr.clearArray(this.values_cache),
        this.cache_valid = !0)
    }
    ,
    u.prototype.isEmpty = function() {
        return 0 === this.count()
    }
    ,
    u.prototype.count = function() {
        return l ? this.s.size : this.item_count
    }
    ;
    var p = null
      , d = 0;
    function f(t) {
        p[d++] = t
    }
    u.prototype.update_cache = function() {
        if (!this.cache_valid) {
            if (l)
                cr.clearArray(this.values_cache),
                p = this.values_cache,
                d = 0,
                this.s.forEach(f),
                p = null,
                d = 0;
            else {
                var t = this.values_cache;
                cr.clearArray(t);
                var e, i = 0, s = this.items;
                if (s)
                    for (e in s)
                        s.hasOwnProperty(e) && (t[i++] = s[e])
            }
            this.cache_valid = !0
        }
    }
    ,
    u.prototype.valuesRef = function() {
        return this.update_cache(),
        this.values_cache
    }
    ,
    cr.ObjectSet = u;
    var y = new cr.ObjectSet;
    function g() {
        this.c = 0,
        this.y = 0,
        this.t = 0,
        this.sum = 0,
        cr.seal(this)
    }
    function m(t) {
        this.pts_cache = [],
        this.bboxLeft = 0,
        this.bboxTop = 0,
        this.bboxRight = 0,
        this.bboxBottom = 0,
        this.convexpolys = null,
        this.set_pts(t),
        cr.seal(this)
    }
    function _(t, e) {
        this.cellwidth = t,
        this.cellheight = e,
        this.cells = {}
    }
    function v(t, e) {
        this.cellwidth = t,
        this.cellheight = e,
        this.cells = {}
    }
    cr.removeArrayDuplicates = function(t) {
        for (var e = 0, i = t.length; e < i; ++e)
            y.add(t[e]);
        cr.shallowAssignArray(t, y.valuesRef()),
        y.clear()
    }
    ,
    cr.arrayRemoveAllFromObjectSet = function(t, e) {
        l ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
    }
    ,
    cr.arrayRemoveAll_set = function(t, e) {
        for (var i, s = 0, n = 0, r = t.length; s < r; ++s)
            i = t[s],
            e.has(i) || (t[n++] = i);
        cr.truncateArray(t, n)
    }
    ,
    cr.arrayRemoveAll_arr = function(t, e) {
        for (var i, s = 0, n = 0, r = t.length; s < r; ++s)
            i = t[s],
            -1 === cr.fastIndexOf(e, i) && (t[n++] = i);
        cr.truncateArray(t, n)
    }
    ,
    g.prototype.add = function(t) {
        this.y = t - this.c,
        this.t = this.sum + this.y,
        this.c = this.t - this.sum - this.y,
        this.sum = this.t
    }
    ,
    g.prototype.reset = function() {
        this.c = 0,
        this.y = 0,
        this.t = 0,
        this.sum = 0
    }
    ,
    cr.KahanAdder = g,
    cr.regexp_escape = function(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }
    ,
    m.prototype.set_pts = function(t) {
        this.pts_array = t,
        this.pts_count = t.length / 2,
        this.pts_cache.length = t.length,
        this.cache_width = -1,
        this.cache_height = -1,
        this.cache_angle = 0
    }
    ,
    m.prototype.is_empty = function() {
        return !this.pts_array.length
    }
    ,
    m.prototype.update_bbox = function() {
        for (var t, e, i = this.pts_cache, s = i[0], n = s, r = i[1], o = r, a = 1, h = this.pts_count; a < h; ++a)
            (t = i[e = 2 * a]) < s && (s = t),
            n < t && (n = t),
            (e = i[1 + e]) < r && (r = e),
            o < e && (o = e);
        this.bboxLeft = s,
        this.bboxRight = n,
        this.bboxTop = r,
        this.bboxBottom = o
    }
    ,
    m.prototype.set_from_rect = function(t, e, i) {
        this.pts_cache.length = 8,
        this.pts_count = 4;
        var s = this.pts_cache;
        s[0] = t.left - e,
        s[1] = t.top - i,
        s[2] = t.right - e,
        s[3] = t.top - i,
        s[4] = t.right - e,
        s[5] = t.bottom - i,
        s[6] = t.left - e,
        s[7] = t.bottom - i,
        this.cache_width = t.right - t.left,
        this.cache_height = t.bottom - t.top,
        this.update_bbox()
    }
    ,
    m.prototype.set_from_quad = function(t, e, i, s, n) {
        this.pts_cache.length = 8,
        this.pts_count = 4;
        var r = this.pts_cache;
        r[0] = t.tlx - e,
        r[1] = t.tly - i,
        r[2] = t.trx - e,
        r[3] = t.try_ - i,
        r[4] = t.brx - e,
        r[5] = t.bry - i,
        r[6] = t.blx - e,
        r[7] = t.bly - i,
        this.cache_width = s,
        this.cache_height = n,
        this.update_bbox()
    }
    ,
    m.prototype.set_from_poly = function(t) {
        this.pts_count = t.pts_count,
        cr.shallowAssignArray(this.pts_cache, t.pts_cache),
        this.bboxLeft = t.bboxLeft,
        this.bboxTop,
        t.bboxTop,
        this.bboxRight = t.bboxRight,
        this.bboxBottom = t.bboxBottom
    }
    ,
    m.prototype.cache_poly = function(t, e, i) {
        if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
            var s, n, r, o, a, h;
            this.cache_width = t,
            this.cache_height = e,
            this.cache_angle = i;
            var c = 0
              , l = 1
              , u = this.pts_array
              , p = this.pts_cache;
            for (0 !== i && (c = Math.sin(i),
            l = Math.cos(i)),
            s = 0,
            o = this.pts_count; s < o; s++)
                r = 1 + (n = 2 * s),
                a = u[n] * t,
                h = u[r] * e,
                p[n] = a * l - h * c,
                p[r] = h * l + a * c;
            this.update_bbox()
        }
    }
    ,
    m.prototype.contains_pt = function(t, e) {
        var i = this.pts_cache;
        if (t === i[0] && e === i[1])
            return !0;
        for (var s, n, r, o, a = this.pts_count, h = this.bboxLeft - 110, c = this.bboxTop - 101, l = this.bboxRight + 131, u = this.bboxBottom + 120, p = 0, d = 0, f = 0; f < a; f++)
            o = (f + 1) % a * 2,
            s = i[r = 2 * f],
            n = i[1 + r],
            r = i[o],
            o = i[1 + o],
            cr.segments_intersect(h, c, t, e, s, n, r, o) && p++,
            cr.segments_intersect(l, u, t, e, s, n, r, o) && d++;
        return p % 2 == 1 || d % 2 == 1
    }
    ,
    m.prototype.intersects_poly = function(t, e, i) {
        var s, n, r, o, a, h, c, l, u, p, d, f, y, g, m = t.pts_cache, _ = this.pts_cache;
        if (this.contains_pt(m[0] + e, m[1] + i))
            return !0;
        if (t.contains_pt(_[0] - e, _[1] - i))
            return !0;
        for (s = 0,
        o = this.pts_count; s < o; s++)
            for (r = (s + 1) % o * 2,
            c = _[n = 2 * s],
            l = _[1 + n],
            u = _[r],
            p = _[1 + r],
            a = 0,
            h = t.pts_count; a < h; a++)
                if (g = (a + 1) % h * 2,
                d = m[y = 2 * a] + e,
                f = m[1 + y] + i,
                y = m[g] + e,
                g = m[1 + g] + i,
                cr.segments_intersect(c, l, u, p, d, f, y, g))
                    return !0;
        return !1
    }
    ,
    m.prototype.intersects_segment = function(t, e, i, s, n, r) {
        var o, a, h, c, l, u, p = this.pts_cache;
        if (this.contains_pt(i - t, s - e))
            return !0;
        for (o = 0,
        a = this.pts_count; o < a; o++)
            if (u = (o + 1) % a * 2,
            h = p[l = 2 * o] + t,
            c = p[1 + l] + e,
            l = p[u] + t,
            u = p[1 + u] + e,
            cr.segments_intersect(i, s, n, r, h, c, l, u))
                return !0;
        return !1
    }
    ,
    m.prototype.mirror = function(t) {
        for (var e, i = 0, s = this.pts_count; i < s; ++i)
            e = 2 * i,
            this.pts_cache[e] = 2 * t - this.pts_cache[e]
    }
    ,
    m.prototype.flip = function(t) {
        for (var e, i = 0, s = this.pts_count; i < s; ++i)
            e = 2 * i + 1,
            this.pts_cache[e] = 2 * t - this.pts_cache[e]
    }
    ,
    m.prototype.diag = function() {
        for (var t, e, i, s = 0, n = this.pts_count; s < n; ++s)
            e = 1 + (t = 2 * s),
            i = this.pts_cache[t],
            this.pts_cache[t] = this.pts_cache[e],
            this.pts_cache[e] = i
    }
    ,
    cr.CollisionPoly = m,
    _.prototype.totalCellCount = 0,
    _.prototype.getCell = function(t, e, i) {
        var s, n = this.cells[t];
        return n ? (s = n[e]) || (i ? (s = w(this, t, e),
        this.cells[t][e] = s) : null) : i ? (s = w(this, t, e),
        this.cells[t] = {},
        this.cells[t][e] = s) : null
    }
    ,
    _.prototype.XToCell = function(t) {
        return cr.floor(t / this.cellwidth)
    }
    ,
    _.prototype.YToCell = function(t) {
        return cr.floor(t / this.cellheight)
    }
    ,
    _.prototype.update = function(t, e, i) {
        var s, n, r, o, a;
        if (e)
            for (s = e.left,
            n = e.right; s <= n; ++s)
                for (r = e.top,
                o = e.bottom; r <= o; ++r)
                    i && i.contains_pt(s, r) || (a = this.getCell(s, r, !1)) && (a.remove(t),
                    a.isEmpty() && (a = a,
                    _.prototype.totalCellCount--,
                    a.objects.clear(),
                    b.length < 1e3 && b.push(a),
                    this.cells[s][r] = null));
        if (i)
            for (s = i.left,
            n = i.right; s <= n; ++s)
                for (r = i.top,
                o = i.bottom; r <= o; ++r)
                    e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
    }
    ,
    _.prototype.queryRange = function(t, e) {
        for (var i, s, n = this.XToCell(t.left), r = this.YToCell(t.top), o = this.XToCell(t.right), a = this.YToCell(t.bottom); n <= o; ++n)
            for (i = r; i <= a; ++i)
                (s = this.getCell(n, i, !1)) && s.dump(e)
    }
    ,
    cr.SparseGrid = _,
    v.prototype.totalCellCount = 0,
    v.prototype.getCell = function(t, e, i) {
        var s, n = this.cells[t];
        return n ? (s = n[e]) || (i ? (s = T(this, t, e),
        this.cells[t][e] = s) : null) : i ? (s = T(this, t, e),
        this.cells[t] = {},
        this.cells[t][e] = s) : null
    }
    ,
    v.prototype.XToCell = function(t) {
        return cr.floor(t / this.cellwidth)
    }
    ,
    v.prototype.YToCell = function(t) {
        return cr.floor(t / this.cellheight)
    }
    ,
    v.prototype.update = function(t, e, i) {
        var s, n, r, o, a;
        if (e)
            for (s = e.left,
            n = e.right; s <= n; ++s)
                for (r = e.top,
                o = e.bottom; r <= o; ++r)
                    i && i.contains_pt(s, r) || (a = this.getCell(s, r, !1)) && (a.remove(t),
                    a.isEmpty() && (a = a,
                    v.prototype.totalCellCount--,
                    a.reset(),
                    S.length < 1e3 && S.push(a),
                    this.cells[s][r] = null));
        if (i)
            for (s = i.left,
            n = i.right; s <= n; ++s)
                for (r = i.top,
                o = i.bottom; r <= o; ++r)
                    e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
    }
    ,
    v.prototype.queryRange = function(t, e, i, s, n) {
        for (var r, o, a = this.XToCell(t), h = this.YToCell(e), c = this.XToCell(i), l = this.YToCell(s); a <= c; ++a)
            for (r = h; r <= l; ++r)
                (o = this.getCell(a, r, !1)) && o.dump(n)
    }
    ,
    v.prototype.markRangeChanged = function(t) {
        for (var e, i, s = t.left, n = t.top, r = t.right, o = t.bottom; s <= r; ++s)
            for (e = n; e <= o; ++e)
                (i = this.getCell(s, e, !1)) && (i.is_sorted = !1)
    }
    ,
    cr.RenderGrid = v;
    var b = [];
    function w(t, e, i) {
        var s;
        return _.prototype.totalCellCount++,
        b.length ? ((s = b.pop()).grid = t,
        s.x = e,
        s.y = i,
        s) : new cr.GridCell(t,e,i)
    }
    function x(t, e, i) {
        this.grid = t,
        this.x = e,
        this.y = i,
        this.objects = new cr.ObjectSet
    }
    x.prototype.isEmpty = function() {
        return this.objects.isEmpty()
    }
    ,
    x.prototype.insert = function(t) {
        this.objects.add(t)
    }
    ,
    x.prototype.remove = function(t) {
        this.objects.remove(t)
    }
    ,
    x.prototype.dump = function(t) {
        cr.appendArray(t, this.objects.valuesRef())
    }
    ,
    cr.GridCell = x;
    var S = [];
    function T(t, e, i) {
        var s;
        return v.prototype.totalCellCount++,
        S.length ? ((s = S.pop()).grid = t,
        s.x = e,
        s.y = i,
        s) : new cr.RenderCell(t,e,i)
    }
    function A(t, e, i) {
        this.grid = t,
        this.x = e,
        this.y = i,
        this.objects = [],
        this.is_sorted = !0,
        this.pending_removal = new cr.ObjectSet,
        this.any_pending_removal = !1
    }
    function C(t, e) {
        return t.zindex - e.zindex
    }
    A.prototype.isEmpty = function() {
        return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(),
        !0)
    }
    ,
    A.prototype.insert = function(t) {
        if (this.pending_removal.contains(t))
            return this.pending_removal.remove(t),
            void (this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
        this.objects.length ? (this.objects[this.objects.length - 1].get_zindex() > t.get_zindex() && (this.is_sorted = !1),
        this.objects.push(t)) : (this.objects.push(t),
        this.is_sorted = !0)
    }
    ,
    A.prototype.remove = function(t) {
        this.pending_removal.add(t),
        this.any_pending_removal = !0,
        30 <= this.pending_removal.count() && this.flush_pending()
    }
    ,
    A.prototype.flush_pending = function() {
        this.any_pending_removal && (this.pending_removal.count() !== this.objects.length ? (cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal),
        this.pending_removal.clear(),
        this.any_pending_removal = !1) : this.reset())
    }
    ,
    A.prototype.ensure_sorted = function() {
        this.is_sorted || (this.objects.sort(C),
        this.is_sorted = !0)
    }
    ,
    A.prototype.reset = function() {
        cr.clearArray(this.objects),
        this.is_sorted = !0,
        this.pending_removal.clear(),
        this.any_pending_removal = !1
    }
    ,
    A.prototype.dump = function(t) {
        this.flush_pending(),
        this.ensure_sorted(),
        this.objects.length && t.push(this.objects)
    }
    ,
    cr.RenderCell = A;
    var k = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
    cr.effectToCompositeOp = function(t) {
        return t <= 0 || 11 <= t ? "source-over" : k[t - 1]
    }
    ,
    cr.setGLBlend = function(t, e, i) {
        if (i)
            switch (t.srcBlend = i.ONE,
            t.destBlend = i.ONE_MINUS_SRC_ALPHA,
            e) {
            case 1:
                t.srcBlend = i.ONE,
                t.destBlend = i.ONE;
                break;
            case 2:
                break;
            case 3:
                t.srcBlend = i.ONE,
                t.destBlend = i.ZERO;
                break;
            case 4:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA,
                t.destBlend = i.ONE;
                break;
            case 5:
                t.srcBlend = i.DST_ALPHA,
                t.destBlend = i.ZERO;
                break;
            case 6:
                t.srcBlend = i.ZERO,
                t.destBlend = i.SRC_ALPHA;
                break;
            case 7:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA,
                t.destBlend = i.ZERO;
                break;
            case 8:
                t.srcBlend = i.ZERO,
                t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                t.srcBlend = i.DST_ALPHA,
                t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                t.srcBlend = i.ONE_MINUS_DST_ALPHA,
                t.destBlend = i.SRC_ALPHA
            }
    }
    ,
    cr.round6dp = function(t) {
        return Math.round(1e6 * t) / 1e6
    }
    ,
    cr.equals_nocase = function(t, e) {
        return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
    }
    ,
    cr.isCanvasInputEvent = function(t) {
        t = t.target;
        return !t || (t === document || t === window || (!(!document || !document.body || t !== document.body) || !!cr.equals_nocase(t.tagName, "canvas")))
    }
}();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array
  , glMatrixArrayType = MatrixArray
  , vec3 = {}
  , mat3 = {}
  , mat4 = {}
  , quat4 = {};
vec3.create = function(t) {
    var e = new MatrixArray(3);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2]),
    e
}
,
vec3.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e
}
,
vec3.add = function(t, e, i) {
    return i && t !== i ? (i[0] = t[0] + e[0],
    i[1] = t[1] + e[1],
    i[2] = t[2] + e[2],
    i) : (t[0] += e[0],
    t[1] += e[1],
    t[2] += e[2],
    t)
}
,
vec3.subtract = function(t, e, i) {
    return i && t !== i ? (i[0] = t[0] - e[0],
    i[1] = t[1] - e[1],
    i[2] = t[2] - e[2],
    i) : (t[0] -= e[0],
    t[1] -= e[1],
    t[2] -= e[2],
    t)
}
,
vec3.negate = function(t, e) {
    return (e = e || t)[0] = -t[0],
    e[1] = -t[1],
    e[2] = -t[2],
    e
}
,
vec3.scale = function(t, e, i) {
    return i && t !== i ? (i[0] = t[0] * e,
    i[1] = t[1] * e,
    i[2] = t[2] * e,
    i) : (t[0] *= e,
    t[1] *= e,
    t[2] *= e,
    t)
}
,
vec3.normalize = function(t, e) {
    e = e || t;
    var i = t[0]
      , s = t[1]
      , n = t[2]
      , t = Math.sqrt(i * i + s * s + n * n);
    return t ? 1 === t ? (e[0] = i,
    e[1] = s,
    e[2] = n) : (t = 1 / t,
    e[0] = i * t,
    e[1] = s * t,
    e[2] = n * t) : (e[0] = 0,
    e[1] = 0,
    e[2] = 0),
    e
}
,
vec3.cross = function(t, e, i) {
    i = i || t;
    var s = t[0]
      , n = t[1]
      , t = t[2]
      , r = e[0]
      , o = e[1]
      , e = e[2];
    return i[0] = n * e - t * o,
    i[1] = t * r - s * e,
    i[2] = s * o - n * r,
    i
}
,
vec3.length = function(t) {
    var e = t[0]
      , i = t[1]
      , t = t[2];
    return Math.sqrt(e * e + i * i + t * t)
}
,
vec3.dot = function(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}
,
vec3.direction = function(t, e, i) {
    i = i || t;
    var s = t[0] - e[0]
      , n = t[1] - e[1]
      , t = t[2] - e[2];
    return (e = Math.sqrt(s * s + n * n + t * t)) ? (e = 1 / e,
    i[0] = s * e,
    i[1] = n * e,
    i[2] = t * e) : (i[0] = 0,
    i[1] = 0,
    i[2] = 0),
    i
}
,
vec3.lerp = function(t, e, i, s) {
    return (s = s || t)[0] = t[0] + i * (e[0] - t[0]),
    s[1] = t[1] + i * (e[1] - t[1]),
    s[2] = t[2] + i * (e[2] - t[2]),
    s
}
,
vec3.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
}
,
mat3.create = function(t) {
    var e = new MatrixArray(9);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8]),
    e
}
,
mat3.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e
}
,
mat3.identity = function(t) {
    return t[0] = 1,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 1,
    t[5] = 0,
    t[6] = 0,
    t[7] = 0,
    t[8] = 1,
    t
}
,
mat3.transpose = function(t, e) {
    if (e && t !== e)
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        e;
    var i = t[1]
      , s = t[2]
      , e = t[5];
    return t[1] = t[3],
    t[2] = t[6],
    t[3] = i,
    t[5] = t[7],
    t[6] = s,
    t[7] = e,
    t
}
,
mat3.toMat4 = function(t, e) {
    return (e = e || mat4.create())[15] = 1,
    e[14] = 0,
    e[13] = 0,
    e[12] = 0,
    e[11] = 0,
    e[10] = t[8],
    e[9] = t[7],
    e[8] = t[6],
    e[7] = 0,
    e[6] = t[5],
    e[5] = t[4],
    e[4] = t[3],
    e[3] = 0,
    e[2] = t[2],
    e[1] = t[1],
    e[0] = t[0],
    e
}
,
mat3.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
}
,
mat4.create = function(t) {
    var e = new MatrixArray(16);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15]),
    e
}
,
mat4.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = t[12],
    e[13] = t[13],
    e[14] = t[14],
    e[15] = t[15],
    e
}
,
mat4.identity = function(t) {
    return t[0] = 1,
    t[1] = 0,
    t[2] = 0,
    t[3] = 0,
    t[4] = 0,
    t[5] = 1,
    t[6] = 0,
    t[7] = 0,
    t[8] = 0,
    t[9] = 0,
    t[10] = 1,
    t[11] = 0,
    t[12] = 0,
    t[13] = 0,
    t[14] = 0,
    t[15] = 1,
    t
}
,
mat4.transpose = function(t, e) {
    if (e && t !== e)
        return e[0] = t[0],
        e[1] = t[4],
        e[2] = t[8],
        e[3] = t[12],
        e[4] = t[1],
        e[5] = t[5],
        e[6] = t[9],
        e[7] = t[13],
        e[8] = t[2],
        e[9] = t[6],
        e[10] = t[10],
        e[11] = t[14],
        e[12] = t[3],
        e[13] = t[7],
        e[14] = t[11],
        e[15] = t[15],
        e;
    var i = t[1]
      , s = t[2]
      , n = t[3]
      , r = t[6]
      , o = t[7]
      , e = t[11];
    return t[1] = t[4],
    t[2] = t[8],
    t[3] = t[12],
    t[4] = i,
    t[6] = t[9],
    t[7] = t[13],
    t[8] = s,
    t[9] = r,
    t[11] = t[14],
    t[12] = n,
    t[13] = o,
    t[14] = e,
    t
}
,
mat4.determinant = function(t) {
    var e = t[0]
      , i = t[1]
      , s = t[2]
      , n = t[3]
      , r = t[4]
      , o = t[5]
      , a = t[6]
      , h = t[7]
      , c = t[8]
      , l = t[9]
      , u = t[10]
      , p = t[11]
      , d = t[12]
      , f = t[13]
      , y = t[14];
    return d * l * a * n - c * f * a * n - d * o * u * n + r * f * u * n + c * o * y * n - r * l * y * n - d * l * s * h + c * f * s * h + d * i * u * h - e * f * u * h - c * i * y * h + e * l * y * h + d * o * s * p - r * f * s * p - d * i * a * p + e * f * a * p + r * i * y * p - e * o * y * p - c * o * s * (t = t[15]) + r * l * s * t + c * i * a * t - e * l * a * t - r * i * u * t + e * o * u * t
}
,
mat4.inverse = function(t, e) {
    e = e || t;
    var i = t[0]
      , s = t[1]
      , n = t[2]
      , r = t[3]
      , o = t[4]
      , a = t[5]
      , h = t[6]
      , c = t[7]
      , l = t[8]
      , u = t[9]
      , p = t[10]
      , d = t[11]
      , f = t[12]
      , y = t[13]
      , g = t[14]
      , m = t[15]
      , _ = i * a - s * o
      , v = i * h - n * o
      , b = i * c - r * o
      , w = s * h - n * a
      , x = s * c - r * a
      , S = n * c - r * h
      , T = l * y - u * f
      , A = l * g - p * f
      , C = l * m - d * f
      , k = u * g - p * y
      , O = u * m - d * y
      , I = p * m - d * g
      , t = 1 / (_ * I - v * O + b * k + w * C - x * A + S * T);
    return e[0] = (a * I - h * O + c * k) * t,
    e[1] = (-s * I + n * O - r * k) * t,
    e[2] = (y * S - g * x + m * w) * t,
    e[3] = (-u * S + p * x - d * w) * t,
    e[4] = (-o * I + h * C - c * A) * t,
    e[5] = (i * I - n * C + r * A) * t,
    e[6] = (-f * S + g * b - m * v) * t,
    e[7] = (l * S - p * b + d * v) * t,
    e[8] = (o * O - a * C + c * T) * t,
    e[9] = (-i * O + s * C - r * T) * t,
    e[10] = (f * x - y * b + m * _) * t,
    e[11] = (-l * x + u * b - d * _) * t,
    e[12] = (-o * k + a * A - h * T) * t,
    e[13] = (i * k - s * A + n * T) * t,
    e[14] = (-f * w + y * v - g * _) * t,
    e[15] = (l * w - u * v + p * _) * t,
    e
}
,
mat4.toRotationMat = function(t, e) {
    return (e = e || mat4.create())[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e[4] = t[4],
    e[5] = t[5],
    e[6] = t[6],
    e[7] = t[7],
    e[8] = t[8],
    e[9] = t[9],
    e[10] = t[10],
    e[11] = t[11],
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
,
mat4.toMat3 = function(t, e) {
    return (e = e || mat3.create())[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[4],
    e[4] = t[5],
    e[5] = t[6],
    e[6] = t[8],
    e[7] = t[9],
    e[8] = t[10],
    e
}
,
mat4.toInverseMat3 = function(t, e) {
    var i = t[0]
      , s = t[1]
      , n = t[2]
      , r = t[4]
      , o = t[5]
      , a = t[6]
      , h = t[8]
      , c = t[9]
      , l = t[10]
      , u = l * o - a * c
      , p = -l * r + a * h
      , d = c * r - o * h
      , t = i * u + s * p + n * d;
    return t ? (t = 1 / t,
    (e = e || mat3.create())[0] = u * t,
    e[1] = (-l * s + n * c) * t,
    e[2] = (a * s - n * o) * t,
    e[3] = p * t,
    e[4] = (l * i - n * h) * t,
    e[5] = (-a * i + n * r) * t,
    e[6] = d * t,
    e[7] = (-c * i + s * h) * t,
    e[8] = (o * i - s * r) * t,
    e) : null
}
,
mat4.multiply = function(t, e, i) {
    i = i || t;
    var s = t[0]
      , n = t[1]
      , r = t[2]
      , o = t[3]
      , a = t[4]
      , h = t[5]
      , c = t[6]
      , l = t[7]
      , u = t[8]
      , p = t[9]
      , d = t[10]
      , f = t[11]
      , y = t[12]
      , g = t[13]
      , m = t[14]
      , t = t[15]
      , _ = e[0]
      , v = e[1]
      , b = e[2]
      , w = e[3]
      , x = e[4]
      , S = e[5]
      , T = e[6]
      , A = e[7]
      , C = e[8]
      , k = e[9]
      , O = e[10]
      , I = e[11]
      , P = e[12]
      , E = e[13]
      , B = e[14]
      , e = e[15];
    return i[0] = _ * s + v * a + b * u + w * y,
    i[1] = _ * n + v * h + b * p + w * g,
    i[2] = _ * r + v * c + b * d + w * m,
    i[3] = _ * o + v * l + b * f + w * t,
    i[4] = x * s + S * a + T * u + A * y,
    i[5] = x * n + S * h + T * p + A * g,
    i[6] = x * r + S * c + T * d + A * m,
    i[7] = x * o + S * l + T * f + A * t,
    i[8] = C * s + k * a + O * u + I * y,
    i[9] = C * n + k * h + O * p + I * g,
    i[10] = C * r + k * c + O * d + I * m,
    i[11] = C * o + k * l + O * f + I * t,
    i[12] = P * s + E * a + B * u + e * y,
    i[13] = P * n + E * h + B * p + e * g,
    i[14] = P * r + E * c + B * d + e * m,
    i[15] = P * o + E * l + B * f + e * t,
    i
}
,
mat4.multiplyVec3 = function(t, e, i) {
    i = i || e;
    var s = e[0]
      , n = e[1]
      , e = e[2];
    return i[0] = t[0] * s + t[4] * n + t[8] * e + t[12],
    i[1] = t[1] * s + t[5] * n + t[9] * e + t[13],
    i[2] = t[2] * s + t[6] * n + t[10] * e + t[14],
    i
}
,
mat4.multiplyVec4 = function(t, e, i) {
    i = i || e;
    var s = e[0]
      , n = e[1]
      , r = e[2]
      , e = e[3];
    return i[0] = t[0] * s + t[4] * n + t[8] * r + t[12] * e,
    i[1] = t[1] * s + t[5] * n + t[9] * r + t[13] * e,
    i[2] = t[2] * s + t[6] * n + t[10] * r + t[14] * e,
    i[3] = t[3] * s + t[7] * n + t[11] * r + t[15] * e,
    i
}
,
mat4.translate = function(t, e, i) {
    var s, n, r, o, a, h, c, l, u, p, d, f, y = e[0], g = e[1], e = e[2];
    return i && t !== i ? (s = t[0],
    n = t[1],
    r = t[2],
    o = t[3],
    a = t[4],
    h = t[5],
    c = t[6],
    l = t[7],
    u = t[8],
    p = t[9],
    d = t[10],
    f = t[11],
    i[0] = s,
    i[1] = n,
    i[2] = r,
    i[3] = o,
    i[4] = a,
    i[5] = h,
    i[6] = c,
    i[7] = l,
    i[8] = u,
    i[9] = p,
    i[10] = d,
    i[11] = f,
    i[12] = s * y + a * g + u * e + t[12],
    i[13] = n * y + h * g + p * e + t[13],
    i[14] = r * y + c * g + d * e + t[14],
    i[15] = o * y + l * g + f * e + t[15],
    i) : (t[12] = t[0] * y + t[4] * g + t[8] * e + t[12],
    t[13] = t[1] * y + t[5] * g + t[9] * e + t[13],
    t[14] = t[2] * y + t[6] * g + t[10] * e + t[14],
    t[15] = t[3] * y + t[7] * g + t[11] * e + t[15],
    t)
}
,
mat4.scale = function(t, e, i) {
    var s = e[0]
      , n = e[1]
      , e = e[2];
    return i && t !== i ? (i[0] = t[0] * s,
    i[1] = t[1] * s,
    i[2] = t[2] * s,
    i[3] = t[3] * s,
    i[4] = t[4] * n,
    i[5] = t[5] * n,
    i[6] = t[6] * n,
    i[7] = t[7] * n,
    i[8] = t[8] * e,
    i[9] = t[9] * e,
    i[10] = t[10] * e,
    i[11] = t[11] * e,
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15],
    i) : (t[0] *= s,
    t[1] *= s,
    t[2] *= s,
    t[3] *= s,
    t[4] *= n,
    t[5] *= n,
    t[6] *= n,
    t[7] *= n,
    t[8] *= e,
    t[9] *= e,
    t[10] *= e,
    t[11] *= e,
    t)
}
,
mat4.rotate = function(t, e, i, s) {
    var n, r, o, a, h, c, l, u, p, d, f, y, g, m, _, v, b, w, x, S, T = i[0], A = i[1], i = i[2], C = Math.sqrt(T * T + A * A + i * i);
    return C ? (1 !== C && (T *= C = 1 / C,
    A *= C,
    i *= C),
    n = Math.sin(e),
    o = 1 - (r = Math.cos(e)),
    e = t[0],
    C = t[1],
    a = t[2],
    h = t[3],
    c = t[4],
    l = t[5],
    u = t[6],
    p = t[7],
    d = t[8],
    f = t[9],
    y = t[10],
    g = t[11],
    m = T * T * o + r,
    _ = A * T * o + i * n,
    v = i * T * o - A * n,
    b = T * A * o - i * n,
    w = A * A * o + r,
    x = i * A * o + T * n,
    S = T * i * o + A * n,
    T = A * i * o - T * n,
    A = i * i * o + r,
    s ? t !== s && (s[12] = t[12],
    s[13] = t[13],
    s[14] = t[14],
    s[15] = t[15]) : s = t,
    s[0] = e * m + c * _ + d * v,
    s[1] = C * m + l * _ + f * v,
    s[2] = a * m + u * _ + y * v,
    s[3] = h * m + p * _ + g * v,
    s[4] = e * b + c * w + d * x,
    s[5] = C * b + l * w + f * x,
    s[6] = a * b + u * w + y * x,
    s[7] = h * b + p * w + g * x,
    s[8] = e * S + c * T + d * A,
    s[9] = C * S + l * T + f * A,
    s[10] = a * S + u * T + y * A,
    s[11] = h * S + p * T + g * A,
    s) : null
}
,
mat4.rotateX = function(t, e, i) {
    var s = Math.sin(e)
      , e = Math.cos(e)
      , n = t[4]
      , r = t[5]
      , o = t[6]
      , a = t[7]
      , h = t[8]
      , c = t[9]
      , l = t[10]
      , u = t[11];
    return i ? t !== i && (i[0] = t[0],
    i[1] = t[1],
    i[2] = t[2],
    i[3] = t[3],
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15]) : i = t,
    i[4] = n * e + h * s,
    i[5] = r * e + c * s,
    i[6] = o * e + l * s,
    i[7] = a * e + u * s,
    i[8] = n * -s + h * e,
    i[9] = r * -s + c * e,
    i[10] = o * -s + l * e,
    i[11] = a * -s + u * e,
    i
}
,
mat4.rotateY = function(t, e, i) {
    var s = Math.sin(e)
      , e = Math.cos(e)
      , n = t[0]
      , r = t[1]
      , o = t[2]
      , a = t[3]
      , h = t[8]
      , c = t[9]
      , l = t[10]
      , u = t[11];
    return i ? t !== i && (i[4] = t[4],
    i[5] = t[5],
    i[6] = t[6],
    i[7] = t[7],
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15]) : i = t,
    i[0] = n * e + h * -s,
    i[1] = r * e + c * -s,
    i[2] = o * e + l * -s,
    i[3] = a * e + u * -s,
    i[8] = n * s + h * e,
    i[9] = r * s + c * e,
    i[10] = o * s + l * e,
    i[11] = a * s + u * e,
    i
}
,
mat4.rotateZ = function(t, e, i) {
    var s = Math.sin(e)
      , e = Math.cos(e)
      , n = t[0]
      , r = t[1]
      , o = t[2]
      , a = t[3]
      , h = t[4]
      , c = t[5]
      , l = t[6]
      , u = t[7];
    return i ? t !== i && (i[8] = t[8],
    i[9] = t[9],
    i[10] = t[10],
    i[11] = t[11],
    i[12] = t[12],
    i[13] = t[13],
    i[14] = t[14],
    i[15] = t[15]) : i = t,
    i[0] = n * e + h * s,
    i[1] = r * e + c * s,
    i[2] = o * e + l * s,
    i[3] = a * e + u * s,
    i[4] = n * -s + h * e,
    i[5] = r * -s + c * e,
    i[6] = o * -s + l * e,
    i[7] = a * -s + u * e,
    i
}
,
mat4.frustum = function(t, e, i, s, n, r, o) {
    var a = e - t
      , h = s - i
      , c = r - n;
    return (o = o || mat4.create())[0] = 2 * n / a,
    o[1] = 0,
    o[2] = 0,
    o[3] = 0,
    o[4] = 0,
    o[5] = 2 * n / h,
    o[6] = 0,
    o[7] = 0,
    o[8] = (e + t) / a,
    o[9] = (s + i) / h,
    o[10] = -(r + n) / c,
    o[11] = -1,
    o[12] = 0,
    o[13] = 0,
    o[14] = -r * n * 2 / c,
    o[15] = 0,
    o
}
,
mat4.perspective = function(t, e, i, s, n) {
    return e *= t = i * Math.tan(t * Math.PI / 360),
    mat4.frustum(-e, e, -t, t, i, s, n)
}
,
mat4.ortho = function(t, e, i, s, n, r, o) {
    var a = e - t
      , h = s - i
      , c = r - n;
    return (o = o || mat4.create())[0] = 2 / a,
    o[1] = 0,
    o[2] = 0,
    o[3] = 0,
    o[4] = 0,
    o[5] = 2 / h,
    o[6] = 0,
    o[7] = 0,
    o[8] = 0,
    o[9] = 0,
    o[10] = -2 / c,
    o[11] = 0,
    o[12] = -(t + e) / a,
    o[13] = -(s + i) / h,
    o[14] = -(r + n) / c,
    o[15] = 1,
    o
}
,
mat4.lookAt = function(t, e, i, s) {
    s = s || mat4.create();
    var n, r, o, a, h, c = t[0], l = t[1], t = t[2], u = i[0], p = i[1], d = i[2];
    return i = e[1],
    o = e[2],
    c === e[0] && l === i && t === o ? mat4.identity(s) : (i = c - e[0],
    o = l - e[1],
    a = t - e[2],
    e = p * (a *= h = 1 / Math.sqrt(i * i + o * o + a * a)) - d * (o *= h),
    d = d * (i *= h) - u * a,
    u = u * o - p * i,
    (h = Math.sqrt(e * e + d * d + u * u)) ? (e *= h = 1 / h,
    d *= h,
    u *= h) : u = d = e = 0,
    p = o * u - a * d,
    n = a * e - i * u,
    r = i * d - o * e,
    (h = Math.sqrt(p * p + n * n + r * r)) ? (p *= h = 1 / h,
    n *= h,
    r *= h) : r = n = p = 0,
    s[0] = e,
    s[1] = p,
    s[2] = i,
    s[3] = 0,
    s[4] = d,
    s[5] = n,
    s[6] = o,
    s[7] = 0,
    s[8] = u,
    s[9] = r,
    s[10] = a,
    s[11] = 0,
    s[12] = -(e * c + d * l + u * t),
    s[13] = -(p * c + n * l + r * t),
    s[14] = -(i * c + o * l + a * t),
    s[15] = 1,
    s)
}
,
mat4.fromRotationTranslation = function(t, e, i) {
    i = i || mat4.create();
    var s = t[0]
      , n = t[1]
      , r = t[2]
      , o = t[3]
      , a = s + s
      , h = n + n
      , c = r + r
      , t = s * a
      , l = s * h;
    s *= c;
    var u = n * h;
    return n *= c,
    r *= c,
    a *= o,
    h *= o,
    o *= c,
    i[0] = 1 - (u + r),
    i[1] = l + o,
    i[2] = s - h,
    i[3] = 0,
    i[4] = l - o,
    i[5] = 1 - (t + r),
    i[6] = n + a,
    i[7] = 0,
    i[8] = s + h,
    i[9] = n - a,
    i[10] = 1 - (t + u),
    i[11] = 0,
    i[12] = e[0],
    i[13] = e[1],
    i[14] = e[2],
    i[15] = 1,
    i
}
,
mat4.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
}
,
quat4.create = function(t) {
    var e = new MatrixArray(4);
    return t && (e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3]),
    e
}
,
quat4.set = function(t, e) {
    return e[0] = t[0],
    e[1] = t[1],
    e[2] = t[2],
    e[3] = t[3],
    e
}
,
quat4.calculateW = function(t, e) {
    var i = t[0]
      , s = t[1]
      , n = t[2];
    return e && t !== e ? (e[0] = i,
    e[1] = s,
    e[2] = n,
    e[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)),
    e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)),
    t)
}
,
quat4.inverse = function(t, e) {
    return e && t !== e ? (e[0] = -t[0],
    e[1] = -t[1],
    e[2] = -t[2],
    e[3] = t[3],
    e) : (t[0] *= -1,
    t[1] *= -1,
    t[2] *= -1,
    t)
}
,
quat4.length = function(t) {
    var e = t[0]
      , i = t[1]
      , s = t[2]
      , t = t[3];
    return Math.sqrt(e * e + i * i + s * s + t * t)
}
,
quat4.normalize = function(t, e) {
    e = e || t;
    var i = t[0]
      , s = t[1]
      , n = t[2]
      , r = t[3]
      , t = Math.sqrt(i * i + s * s + n * n + r * r);
    return 0 === t ? (e[0] = 0,
    e[1] = 0,
    e[2] = 0,
    e[3] = 0) : (t = 1 / t,
    e[0] = i * t,
    e[1] = s * t,
    e[2] = n * t,
    e[3] = r * t),
    e
}
,
quat4.multiply = function(t, e, i) {
    i = i || t;
    var s = t[0]
      , n = t[1]
      , r = t[2]
      , t = t[3]
      , o = e[0]
      , a = e[1]
      , h = e[2]
      , e = e[3];
    return i[0] = s * e + t * o + n * h - r * a,
    i[1] = n * e + t * a + r * o - s * h,
    i[2] = r * e + t * h + s * a - n * o,
    i[3] = t * e - s * o - n * a - r * h,
    i
}
,
quat4.multiplyVec3 = function(t, e, i) {
    i = i || e;
    var s = e[0]
      , n = e[1]
      , r = e[2]
      , e = t[0]
      , o = t[1]
      , a = t[2]
      , h = (t = t[3]) * s + o * r - a * n
      , c = t * n + a * s - e * r
      , l = t * r + e * n - o * s
      , s = -e * s - o * n - a * r;
    return i[0] = h * t + s * -e + c * -a - l * -o,
    i[1] = c * t + s * -o + l * -e - h * -a,
    i[2] = l * t + s * -a + h * -o - c * -e,
    i
}
,
quat4.toMat3 = function(t, e) {
    e = e || mat3.create();
    var i = t[0]
      , s = t[1]
      , n = t[2]
      , r = t[3]
      , o = i + i
      , a = s + s
      , h = n + n
      , c = i * o
      , l = i * a;
    i *= h;
    t = s * a;
    return s *= h,
    n *= h,
    o *= r,
    a *= r,
    r *= h,
    e[0] = 1 - (t + n),
    e[1] = l + r,
    e[2] = i - a,
    e[3] = l - r,
    e[4] = 1 - (c + n),
    e[5] = s + o,
    e[6] = i + a,
    e[7] = s - o,
    e[8] = 1 - (c + t),
    e
}
,
quat4.toMat4 = function(t, e) {
    e = e || mat4.create();
    var i = t[0]
      , s = t[1]
      , n = t[2]
      , r = t[3]
      , o = i + i
      , a = s + s
      , h = n + n
      , c = i * o
      , l = i * a;
    i *= h;
    t = s * a;
    return s *= h,
    n *= h,
    o *= r,
    a *= r,
    r *= h,
    e[0] = 1 - (t + n),
    e[1] = l + r,
    e[2] = i - a,
    e[3] = 0,
    e[4] = l - r,
    e[5] = 1 - (c + n),
    e[6] = s + o,
    e[7] = 0,
    e[8] = i + a,
    e[9] = s - o,
    e[10] = 1 - (c + t),
    e[11] = 0,
    e[12] = 0,
    e[13] = 0,
    e[14] = 0,
    e[15] = 1,
    e
}
,
quat4.slerp = function(t, e, i, s) {
    s = s || t;
    var n, r, o = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    return 1 <= Math.abs(o) ? (s !== t && (s[0] = t[0],
    s[1] = t[1],
    s[2] = t[2],
    s[3] = t[3]),
    s) : (n = Math.acos(o),
    r = Math.sqrt(1 - o * o),
    Math.abs(r) < .001 ? (s[0] = .5 * t[0] + .5 * e[0],
    s[1] = .5 * t[1] + .5 * e[1],
    s[2] = .5 * t[2] + .5 * e[2],
    s[3] = .5 * t[3] + .5 * e[3]) : (o = Math.sin((1 - i) * n) / r,
    i = Math.sin(i * n) / r,
    s[0] = t[0] * o + e[0] * i,
    s[1] = t[1] * o + e[1] * i,
    s[2] = t[2] * o + e[2] * i,
    s[3] = t[3] * o + e[3] * i),
    s)
}
,
quat4.str = function(t) {
    return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
}
,
function() {
    var i = mat4.create();
    function t(t, e, i) {
        this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent),
        this.width = 0,
        this.height = 0,
        this.enableFrontToBack = !!i,
        this.isEarlyZPass = !1,
        this.isBatchInEarlyZPass = !1,
        this.currentZ = 0,
        this.zNear = 1,
        this.zFar = 1e3,
        this.zIncrement = (this.zFar - this.zNear) / 32768,
        this.zA = this.zFar / (this.zFar - this.zNear),
        this.zB = this.zFar * this.zNear / (this.zNear - this.zFar),
        this.kzA = 65536 * this.zA,
        this.kzB = 65536 * this.zB,
        this.cam = vec3.create([0, 0, 100]),
        this.look = vec3.create([0, 0, 0]),
        this.up = vec3.create([0, 1, 0]),
        this.worldScale = vec3.create([1, 1, 1]),
        this.enable_mipmaps = !0,
        this.matP = mat4.create(),
        this.matMV = mat4.create(),
        this.lastMV = mat4.create(),
        this.currentMV = mat4.create(),
        this.gl = t,
        this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1,
        this.initState()
    }
    function u(t, e, i) {
        this.gl = t,
        this.shaderProgram = e,
        this.name = i,
        this.locAPos = t.getAttribLocation(e, "aPos"),
        this.locATex = t.getAttribLocation(e, "aTex"),
        this.locMatP = t.getUniformLocation(e, "matP"),
        this.locMatMV = t.getUniformLocation(e, "matMV"),
        this.locOpacity = t.getUniformLocation(e, "opacity"),
        this.locColorFill = t.getUniformLocation(e, "colorFill"),
        this.locSamplerFront = t.getUniformLocation(e, "samplerFront"),
        this.locSamplerBack = t.getUniformLocation(e, "samplerBack"),
        this.locDestStart = t.getUniformLocation(e, "destStart"),
        this.locDestEnd = t.getUniformLocation(e, "destEnd"),
        this.locSeconds = t.getUniformLocation(e, "seconds"),
        this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"),
        this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"),
        this.locLayerScale = t.getUniformLocation(e, "layerScale"),
        this.locLayerAngle = t.getUniformLocation(e, "layerAngle"),
        this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"),
        this.locScrollPos = t.getUniformLocation(e, "scrollPos"),
        this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos),
        this.lpPixelWidth = -999,
        this.lpPixelHeight = -999,
        this.lpOpacity = 1,
        this.lpDestStartX = 0,
        this.lpDestStartY = 0,
        this.lpDestEndX = 1,
        this.lpDestEndY = 1,
        this.lpLayerScale = 1,
        this.lpLayerAngle = 0,
        this.lpViewOriginX = 0,
        this.lpViewOriginY = 0,
        this.lpScrollPosX = 0,
        this.lpScrollPosY = 0,
        this.lpSeconds = 0,
        this.lastCustomParams = [],
        this.lpMatMV = mat4.create(),
        this.locOpacity && t.uniform1f(this.locOpacity, 1),
        this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1),
        this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0),
        this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1),
        this.locDestStart && t.uniform2f(this.locDestStart, 0, 0),
        this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1),
        this.locLayerScale && t.uniform1f(this.locLayerScale, 1),
        this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0),
        this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0),
        this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0),
        this.locSeconds && t.uniform1f(this.locSeconds, 0),
        this.hasCurrentMatMV = !1
    }
    function e(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    }
    function s(t, e) {
        this.type = t,
        this.glwrap = e,
        this.gl = e.gl,
        this.opacityParam = 0,
        this.startIndex = 0,
        this.indexCount = 0,
        this.texParam = null,
        this.mat4param = null,
        this.shaderParams = [],
        cr.seal(this)
    }
    t.prototype.initState = function() {
        var t = this.gl;
        for (this.lastOpacity = 1,
        this.lastTexture0 = null,
        this.lastTexture1 = null,
        this.currentOpacity = 1,
        t.clearColor(0, 0, 0, 0),
        t.clear(t.COLOR_BUFFER_BIT),
        t.enable(t.BLEND),
        t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA),
        t.disable(t.CULL_FACE),
        t.disable(t.STENCIL_TEST),
        t.disable(t.DITHER),
        this.enableFrontToBack ? (t.enable(t.DEPTH_TEST),
        t.depthFunc(t.LEQUAL)) : t.disable(t.DEPTH_TEST),
        this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE),
        this.lastSrcBlend = t.ONE,
        this.lastDestBlend = t.ONE_MINUS_SRC_ALPHA,
        this.vertexData = new Float32Array(8e3 * (this.enableFrontToBack ? 3 : 2)),
        this.texcoordData = new Float32Array(16e3),
        this.pointData = new Float32Array(32e3),
        this.pointBuffer = t.createBuffer(),
        t.bindBuffer(t.ARRAY_BUFFER, this.pointBuffer),
        t.bufferData(t.ARRAY_BUFFER, this.pointData.byteLength, t.DYNAMIC_DRAW),
        this.vertexBuffers = new Array(4),
        this.texcoordBuffers = new Array(4),
        n = 0; n < 4; n++)
            this.vertexBuffers[n] = t.createBuffer(),
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffers[n]),
            t.bufferData(t.ARRAY_BUFFER, this.vertexData.byteLength, t.DYNAMIC_DRAW),
            this.texcoordBuffers[n] = t.createBuffer(),
            t.bindBuffer(t.ARRAY_BUFFER, this.texcoordBuffers[n]),
            t.bufferData(t.ARRAY_BUFFER, this.texcoordData.byteLength, t.DYNAMIC_DRAW);
        this.curBuffer = 0,
        this.indexBuffer = t.createBuffer(),
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        for (var e, i, s = new Uint16Array(12e3), n = 0, r = 0; n < 12e3; )
            s[n++] = r,
            s[n++] = r + 1,
            s[n++] = r + 2,
            s[n++] = r,
            s[n++] = r + 2,
            s[n++] = r + 3,
            r += 4;
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, s, t.STATIC_DRAW),
        this.vertexPtr = 0,
        this.texPtr = 0,
        this.pointPtr = 0,
        this.shaderPrograms = [],
        e = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"),
        i = (this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"] : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"]).join("\n");
        var o = this.createShaderProgram({
            src: e
        }, i, "<default>");
        this.shaderPrograms.push(o),
        e = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
        var a = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
        o = this.createShaderProgram({
            src: e
        }, a, "<point>"),
        this.shaderPrograms.push(o),
        e = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
        o = this.createShaderProgram({
            src: e
        }, i, "<earlyz>");
        this.shaderPrograms.push(o),
        e = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
        var h, o = this.createShaderProgram({
            src: e
        }, i, "<fill>");
        for (h in this.shaderPrograms.push(o),
        cr.shaders)
            cr.shaders.hasOwnProperty(h) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[h], i, h));
        t.activeTexture(t.TEXTURE0),
        t.bindTexture(t.TEXTURE_2D, null),
        this.batch = [],
        this.batchPtr = 0,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1,
        this.lastProgram = -1,
        this.currentProgram = -1,
        this.currentShader = null,
        this.fbo = t.createFramebuffer(),
        this.renderToTex = null,
        this.depthBuffer = null,
        this.attachedDepthBuffer = !1,
        this.enableFrontToBack && (this.depthBuffer = t.createRenderbuffer()),
        this.tmpVec3 = vec3.create([0, 0, 0]);
        o = t.getParameter(t.ALIASED_POINT_SIZE_RANGE);
        this.minPointSize = o[0],
        this.maxPointSize = o[1],
        2048 < this.maxPointSize && (this.maxPointSize = 2048),
        this.switchProgram(0),
        cr.seal(this)
    }
    ,
    u.prototype.updateMatMV = function(t) {
        e(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV),
        this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
    }
    ,
    t.prototype.createShaderProgram = function(t, e, i) {
        var s = this.gl
          , n = s.createShader(s.FRAGMENT_SHADER);
        if (s.shaderSource(n, t.src),
        s.compileShader(n),
        !s.getShaderParameter(n, s.COMPILE_STATUS)) {
            var r = s.getShaderInfoLog(n);
            throw s.deleteShader(n),
            new Error("error compiling fragment shader: " + r)
        }
        var o = s.createShader(s.VERTEX_SHADER);
        if (s.shaderSource(o, e),
        s.compileShader(o),
        !s.getShaderParameter(o, s.COMPILE_STATUS)) {
            r = s.getShaderInfoLog(o);
            throw s.deleteShader(n),
            s.deleteShader(o),
            new Error("error compiling vertex shader: " + r)
        }
        var a = s.createProgram();
        if (s.attachShader(a, n),
        s.attachShader(a, o),
        s.linkProgram(a),
        !s.getProgramParameter(a, s.LINK_STATUS)) {
            r = s.getProgramInfoLog(a);
            throw s.deleteShader(n),
            s.deleteShader(o),
            s.deleteProgram(a),
            new Error("error linking shader program: " + r)
        }
        s.useProgram(a),
        s.deleteShader(n),
        s.deleteShader(o);
        var h, c, l = new u(s,a,i);
        for (l.extendBoxHorizontal = t.extendBoxHorizontal || 0,
        l.extendBoxVertical = t.extendBoxVertical || 0,
        l.crossSampling = !!t.crossSampling,
        l.preservesOpaqueness = !!t.preservesOpaqueness,
        l.animated = !!t.animated,
        l.parameters = t.parameters || [],
        h = 0,
        c = l.parameters.length; h < c; h++)
            l.parameters[h][1] = s.getUniformLocation(a, l.parameters[h][0]),
            l.lastCustomParams.push(0),
            s.uniform1f(l.parameters[h][1], 0);
        return cr.seal(l),
        l
    }
    ,
    t.prototype.getShaderIndex = function(t) {
        for (var e = 0, i = this.shaderPrograms.length; e < i; e++)
            if (this.shaderPrograms[e].name === t)
                return e;
        return -1
    }
    ,
    t.prototype.project = function(t, e, i) {
        var s = this.matMV
          , n = this.matP
          , r = [0, 0, 0, 0, 0, 0, 0, 0];
        r[0] = s[0] * t + s[4] * e + s[12],
        r[1] = s[1] * t + s[5] * e + s[13],
        r[2] = s[2] * t + s[6] * e + s[14],
        r[3] = s[3] * t + s[7] * e + s[15],
        r[4] = n[0] * r[0] + n[4] * r[1] + n[8] * r[2] + n[12] * r[3],
        r[5] = n[1] * r[0] + n[5] * r[1] + n[9] * r[2] + n[13] * r[3],
        r[6] = n[2] * r[0] + n[6] * r[1] + n[10] * r[2] + n[14] * r[3],
        r[7] = -r[2],
        0 !== r[7] && (r[7] = 1 / r[7],
        r[4] *= r[7],
        r[5] *= r[7],
        r[6] *= r[7],
        i[0] = (.5 * r[4] + .5) * this.width,
        i[1] = (.5 * r[5] + .5) * this.height)
    }
    ,
    t.prototype.setSize = function(t, e, i) {
        if (this.width !== t || this.height !== e || i) {
            this.endBatch();
            var s, n, r, o = this.gl;
            for (this.width = t,
            this.height = e,
            o.viewport(0, 0, t, e),
            mat4.lookAt(this.cam, this.look, this.up, this.matMV),
            this.enableFrontToBack ? (mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP),
            this.worldScale[0] = 1,
            this.worldScale[1] = 1) : (mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP),
            t = [0, 0],
            e = [0, 0],
            this.project(0, 0, t),
            this.project(1, 1, e),
            this.worldScale[0] = 1 / (e[0] - t[0]),
            this.worldScale[1] = -1 / (e[1] - t[1])),
            s = 0,
            n = this.shaderPrograms.length; s < n; s++)
                (r = this.shaderPrograms[s]).hasCurrentMatMV = !1,
                r.locMatP && (o.useProgram(r.shaderProgram),
                o.uniformMatrix4fv(r.locMatP, !1, this.matP));
            o.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram),
            o.bindTexture(o.TEXTURE_2D, null),
            o.activeTexture(o.TEXTURE1),
            o.bindTexture(o.TEXTURE_2D, null),
            o.activeTexture(o.TEXTURE0),
            this.lastTexture0 = null,
            this.lastTexture1 = null,
            this.depthBuffer && (o.bindFramebuffer(o.FRAMEBUFFER, this.fbo),
            o.bindRenderbuffer(o.RENDERBUFFER, this.depthBuffer),
            o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_COMPONENT16, this.width, this.height),
            this.attachedDepthBuffer || (o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_ATTACHMENT, o.RENDERBUFFER, this.depthBuffer),
            this.attachedDepthBuffer = !0),
            o.bindRenderbuffer(o.RENDERBUFFER, null),
            o.bindFramebuffer(o.FRAMEBUFFER, null),
            this.renderToTex = null)
        }
    }
    ,
    t.prototype.resetModelView = function() {
        mat4.lookAt(this.cam, this.look, this.up, this.matMV),
        mat4.scale(this.matMV, this.worldScale)
    }
    ,
    t.prototype.translate = function(t, e) {
        0 === t && 0 === e || (this.tmpVec3[0] = t,
        this.tmpVec3[1] = e,
        this.tmpVec3[2] = 0,
        mat4.translate(this.matMV, this.tmpVec3))
    }
    ,
    t.prototype.scale = function(t, e) {
        1 === t && 1 === e || (this.tmpVec3[0] = t,
        this.tmpVec3[1] = e,
        this.tmpVec3[2] = 1,
        mat4.scale(this.matMV, this.tmpVec3))
    }
    ,
    t.prototype.rotateZ = function(t) {
        0 !== t && mat4.rotateZ(this.matMV, t)
    }
    ,
    t.prototype.updateModelView = function() {
        var t;
        e(this.lastMV, this.matMV) || ((t = this.pushBatch()).type = 5,
        t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV),
        mat4.set(this.matMV, this.lastMV),
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1)
    }
    ,
    t.prototype.setEarlyZIndex = function(t) {
        this.enableFrontToBack && (32760 < t && (t = 32760),
        this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
    }
    ,
    s.prototype.doSetEarlyZPass = function() {
        var t = this.gl
          , e = this.glwrap;
        0 !== this.startIndex ? (t.depthMask(!0),
        t.colorMask(!1, !1, !1, !1),
        t.disable(t.BLEND),
        t.bindFramebuffer(t.FRAMEBUFFER, e.fbo),
        t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0),
        t.clear(t.DEPTH_BUFFER_BIT),
        t.bindFramebuffer(t.FRAMEBUFFER, null),
        e.isBatchInEarlyZPass = !0) : (t.depthMask(!1),
        t.colorMask(!0, !0, !0, !0),
        t.enable(t.BLEND),
        e.isBatchInEarlyZPass = !1)
    }
    ,
    s.prototype.doSetTexture = function() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
    }
    ,
    s.prototype.doSetTexture1 = function() {
        var t = this.gl;
        t.activeTexture(t.TEXTURE1),
        t.bindTexture(t.TEXTURE_2D, this.texParam),
        t.activeTexture(t.TEXTURE0)
    }
    ,
    s.prototype.doSetOpacity = function() {
        var t = this.opacityParam
          , e = this.glwrap;
        e.currentOpacity = t;
        e = e.currentShader;
        e.locOpacity && e.lpOpacity !== t && (e.lpOpacity = t,
        this.gl.uniform1f(e.locOpacity, t))
    }
    ,
    s.prototype.doQuad = function() {
        this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
    }
    ,
    s.prototype.doSetBlend = function() {
        this.gl.blendFunc(this.startIndex, this.indexCount)
    }
    ,
    s.prototype.doUpdateModelView = function() {
        for (var t, e = this.glwrap.shaderPrograms, i = this.glwrap.currentProgram, s = 0, n = e.length; s < n; s++)
            t = e[s],
            s === i && t.locMatMV ? (t.updateMatMV(this.mat4param),
            t.hasCurrentMatMV = !0) : t.hasCurrentMatMV = !1;
        mat4.set(this.mat4param, this.glwrap.currentMV)
    }
    ,
    s.prototype.doRenderToTexture = function() {
        var t = this.gl
          , e = this.glwrap;
        this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1),
        t.bindTexture(t.TEXTURE_2D, null),
        e.lastTexture1 = null,
        t.activeTexture(t.TEXTURE0)),
        t.bindFramebuffer(t.FRAMEBUFFER, e.fbo),
        e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0),
        t.bindFramebuffer(t.FRAMEBUFFER, null))
    }
    ,
    s.prototype.doClear = function() {
        var t = this.gl
          , e = this.startIndex;
        0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]),
        t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST),
        t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]),
        t.clearColor(0, 0, 0, 0),
        t.clear(t.COLOR_BUFFER_BIT),
        t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
    }
    ,
    s.prototype.doSetDepthTestEnabled = function() {
        var t = this.gl;
        0 !== this.startIndex ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
    }
    ,
    s.prototype.doPoints = function() {
        var t = this.gl
          , e = this.glwrap;
        e.enableFrontToBack && t.disable(t.DEPTH_TEST);
        var i = e.shaderPrograms[1];
        t.useProgram(i.shaderProgram),
        !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV),
        i.hasCurrentMatMV = !0),
        t.enableVertexAttribArray(i.locAPos),
        t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer),
        t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0),
        t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount),
        i = e.currentShader,
        t.useProgram(i.shaderProgram),
        0 <= i.locAPos && (t.enableVertexAttribArray(i.locAPos),
        t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)),
        0 <= i.locATex && (t.enableVertexAttribArray(i.locATex),
        t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)),
        e.enableFrontToBack && t.enable(t.DEPTH_TEST)
    }
    ,
    s.prototype.doSetProgram = function() {
        var t = this.gl
          , e = this.glwrap
          , i = e.shaderPrograms[this.startIndex];
        e.currentProgram = this.startIndex,
        e.currentShader = i,
        t.useProgram(i.shaderProgram),
        !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV),
        i.hasCurrentMatMV = !0),
        i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity,
        t.uniform1f(i.locOpacity, e.currentOpacity)),
        0 <= i.locAPos && (t.enableVertexAttribArray(i.locAPos),
        t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)),
        0 <= i.locATex && (t.enableVertexAttribArray(i.locATex),
        t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]),
        t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
    }
    ,
    s.prototype.doSetColor = function() {
        var t = this.glwrap.currentShader
          , e = this.mat4param;
        this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
    }
    ,
    s.prototype.doSetProgramParameters = function() {
        var t, e, i = this.glwrap.currentShader, s = this.gl, n = this.mat4param;
        i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (s.activeTexture(s.TEXTURE1),
        s.bindTexture(s.TEXTURE_2D, this.texParam),
        this.glwrap.lastTexture1 = this.texParam,
        s.activeTexture(s.TEXTURE0));
        var r, o = n[0];
        if (i.locPixelWidth && o !== i.lpPixelWidth && (i.lpPixelWidth = o,
        s.uniform1f(i.locPixelWidth, o)),
        o = n[1],
        i.locPixelHeight && o !== i.lpPixelHeight && (i.lpPixelHeight = o,
        s.uniform1f(i.locPixelHeight, o)),
        o = n[2],
        r = n[3],
        !i.locDestStart || o === i.lpDestStartX && r === i.lpDestStartY || (i.lpDestStartX = o,
        i.lpDestStartY = r,
        s.uniform2f(i.locDestStart, o, r)),
        o = n[4],
        r = n[5],
        !i.locDestEnd || o === i.lpDestEndX && r === i.lpDestEndY || (i.lpDestEndX = o,
        i.lpDestEndY = r,
        s.uniform2f(i.locDestEnd, o, r)),
        o = n[6],
        i.locLayerScale && o !== i.lpLayerScale && (i.lpLayerScale = o,
        s.uniform1f(i.locLayerScale, o)),
        o = n[7],
        i.locLayerAngle && o !== i.lpLayerAngle && (i.lpLayerAngle = o,
        s.uniform1f(i.locLayerAngle, o)),
        o = n[8],
        r = n[9],
        !i.locViewOrigin || o === i.lpViewOriginX && r === i.lpViewOriginY || (i.lpViewOriginX = o,
        i.lpViewOriginY = r,
        s.uniform2f(i.locViewOrigin, o, r)),
        o = n[10],
        r = n[11],
        !i.locScrollPos || o === i.lpScrollPosX && r === i.lpScrollPosY || (i.lpScrollPosX = o,
        i.lpScrollPosY = r,
        s.uniform2f(i.locScrollPos, o, r)),
        o = n[12],
        i.locSeconds && o !== i.lpSeconds && (i.lpSeconds = o,
        s.uniform1f(i.locSeconds, o)),
        i.parameters.length)
            for (t = 0,
            e = i.parameters.length; t < e; t++)
                (o = this.shaderParams[t]) !== i.lastCustomParams[t] && (i.lastCustomParams[t] = o,
                s.uniform1f(i.parameters[t][1], o))
    }
    ,
    t.prototype.pushBatch = function() {
        return this.batchPtr === this.batch.length && this.batch.push(new s(0,this)),
        this.batch[this.batchPtr++]
    }
    ,
    t.prototype.endBatch = function() {
        if (0 !== this.batchPtr && !this.gl.isContextLost()) {
            var t, e, i, s, n = this.gl;
            for (0 < this.pointPtr && (n.bindBuffer(n.ARRAY_BUFFER, this.pointBuffer),
            n.bufferSubData(n.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)),
            t && 0 <= t.locAPos && "<point>" === t.name && n.vertexAttribPointer(t.locAPos, 4, n.FLOAT, !1, 0, 0)),
            0 < this.vertexPtr && (t = this.currentShader,
            n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]),
            n.bufferSubData(n.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)),
            t && 0 <= t.locAPos && "<point>" !== t.name && n.vertexAttribPointer(t.locAPos, this.enableFrontToBack ? 3 : 2, n.FLOAT, !1, 0, 0),
            n.bindBuffer(n.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]),
            n.bufferSubData(n.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)),
            t && 0 <= t.locATex && "<point>" !== t.name && n.vertexAttribPointer(t.locATex, 2, n.FLOAT, !1, 0, 0)),
            e = 0,
            i = this.batchPtr; e < i; e++)
                switch ((s = this.batch[e]).type) {
                case 1:
                    s.doQuad();
                    break;
                case 2:
                    s.doSetTexture();
                    break;
                case 3:
                    s.doSetOpacity();
                    break;
                case 4:
                    s.doSetBlend();
                    break;
                case 5:
                    s.doUpdateModelView();
                    break;
                case 6:
                    s.doRenderToTexture();
                    break;
                case 7:
                    s.doClear();
                    break;
                case 8:
                    s.doPoints();
                    break;
                case 9:
                    s.doSetProgram();
                    break;
                case 10:
                    s.doSetProgramParameters();
                    break;
                case 11:
                    s.doSetTexture1();
                    break;
                case 12:
                    s.doSetColor();
                    break;
                case 13:
                    s.doSetDepthTestEnabled();
                    break;
                case 14:
                    s.doSetEarlyZPass()
                }
            this.batchPtr = 0,
            this.vertexPtr = 0,
            this.texPtr = 0,
            this.pointPtr = 0,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1,
            this.isBatchInEarlyZPass = !1,
            this.curBuffer++,
            4 <= this.curBuffer && (this.curBuffer = 0)
        }
    }
    ,
    t.prototype.setOpacity = function(t) {
        var e;
        t !== this.lastOpacity && (this.isEarlyZPass || ((e = this.pushBatch()).type = 3,
        e.opacityParam = t,
        this.lastOpacity = t,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1))
    }
    ,
    t.prototype.setTexture = function(t) {
        var e;
        t !== this.lastTexture0 && ((e = this.pushBatch()).type = 2,
        e.texParam = t,
        this.lastTexture0 = t,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1)
    }
    ,
    t.prototype.setBlend = function(t, e) {
        var i;
        t === this.lastSrcBlend && e === this.lastDestBlend || this.isEarlyZPass || ((i = this.pushBatch()).type = 4,
        i.startIndex = t,
        i.indexCount = e,
        this.lastSrcBlend = t,
        this.lastDestBlend = e,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1)
    }
    ,
    t.prototype.isPremultipliedAlphaBlend = function() {
        return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
    }
    ,
    t.prototype.setAlphaBlend = function() {
        this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }
    ,
    t.prototype.setNoPremultiplyAlphaBlend = function() {
        this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
    }
    ,
    t.prototype.quad = function(t, e, i, s, n, r, o, a) {
        15992 <= this.vertexPtr && this.endBatch();
        var h, c = this.vertexPtr, l = this.texPtr, u = this.vertexData, p = this.texcoordData, d = this.currentZ;
        this.hasQuadBatchTop ? this.batch[this.batchPtr - 1].indexCount += 6 : ((h = this.pushBatch()).type = 1,
        h.startIndex = this.enableFrontToBack ? c : c / 2 * 3,
        h.indexCount = 6,
        this.hasQuadBatchTop = !0,
        this.hasPointBatchTop = !1),
        this.enableFrontToBack ? (u[c++] = t,
        u[c++] = e,
        u[c++] = d,
        u[c++] = i,
        u[c++] = s,
        u[c++] = d,
        u[c++] = n,
        u[c++] = r,
        u[c++] = d,
        u[c++] = o,
        u[c++] = a,
        u[c++] = d) : (u[c++] = t,
        u[c++] = e,
        u[c++] = i,
        u[c++] = s,
        u[c++] = n,
        u[c++] = r,
        u[c++] = o,
        u[c++] = a),
        p[l++] = 0,
        p[l++] = 0,
        p[l++] = 1,
        p[l++] = 0,
        p[l++] = 1,
        p[l++] = 1,
        p[l++] = 0,
        p[l++] = 1,
        this.vertexPtr = c,
        this.texPtr = l
    }
    ,
    t.prototype.quadTex = function(t, e, i, s, n, r, o, a, h) {
        15992 <= this.vertexPtr && this.endBatch();
        var c = this.vertexPtr
          , l = this.texPtr
          , u = this.vertexData
          , p = this.texcoordData
          , d = this.currentZ;
        this.hasQuadBatchTop ? this.batch[this.batchPtr - 1].indexCount += 6 : ((g = this.pushBatch()).type = 1,
        g.startIndex = this.enableFrontToBack ? c : c / 2 * 3,
        g.indexCount = 6,
        this.hasQuadBatchTop = !0,
        this.hasPointBatchTop = !1);
        var f = h.left
          , y = h.top
          , g = h.right
          , h = h.bottom;
        this.enableFrontToBack ? (u[c++] = t,
        u[c++] = e,
        u[c++] = d,
        u[c++] = i,
        u[c++] = s,
        u[c++] = d,
        u[c++] = n,
        u[c++] = r,
        u[c++] = d,
        u[c++] = o,
        u[c++] = a,
        u[c++] = d) : (u[c++] = t,
        u[c++] = e,
        u[c++] = i,
        u[c++] = s,
        u[c++] = n,
        u[c++] = r,
        u[c++] = o,
        u[c++] = a),
        p[l++] = f,
        p[l++] = y,
        p[l++] = g,
        p[l++] = y,
        p[l++] = g,
        p[l++] = h,
        p[l++] = f,
        p[l++] = h,
        this.vertexPtr = c,
        this.texPtr = l
    }
    ,
    t.prototype.quadTexUV = function(t, e, i, s, n, r, o, a, h, c, l, u, p, d, f, y) {
        15992 <= this.vertexPtr && this.endBatch();
        var g, m = this.vertexPtr, _ = this.texPtr, v = this.vertexData, b = this.texcoordData, w = this.currentZ;
        this.hasQuadBatchTop ? this.batch[this.batchPtr - 1].indexCount += 6 : ((g = this.pushBatch()).type = 1,
        g.startIndex = this.enableFrontToBack ? m : m / 2 * 3,
        g.indexCount = 6,
        this.hasQuadBatchTop = !0,
        this.hasPointBatchTop = !1),
        this.enableFrontToBack ? (v[m++] = t,
        v[m++] = e,
        v[m++] = w,
        v[m++] = i,
        v[m++] = s,
        v[m++] = w,
        v[m++] = n,
        v[m++] = r,
        v[m++] = w,
        v[m++] = o,
        v[m++] = a,
        v[m++] = w) : (v[m++] = t,
        v[m++] = e,
        v[m++] = i,
        v[m++] = s,
        v[m++] = n,
        v[m++] = r,
        v[m++] = o,
        v[m++] = a),
        b[_++] = h,
        b[_++] = c,
        b[_++] = l,
        b[_++] = u,
        b[_++] = p,
        b[_++] = d,
        b[_++] = f,
        b[_++] = y,
        this.vertexPtr = m,
        this.texPtr = _
    }
    ,
    t.prototype.convexPoly = function(t) {
        for (var e, i, s, n, r, o, a = t.length / 2 - 2, h = a - 1, c = t[0], l = t[1], u = 0; u < a; u += 2)
            e = t[2 + (o = 2 * u)],
            i = t[3 + o],
            s = t[4 + o],
            n = t[5 + o],
            u === h ? this.quad(c, l, e, i, s, n, s, n) : (r = t[6 + o],
            o = t[7 + o],
            this.quad(c, l, e, i, s, n, r, o))
    }
    ,
    t.prototype.point = function(t, e, i, s) {
        7996 <= this.pointPtr && this.endBatch();
        var n, r = this.pointPtr, o = this.pointData;
        this.hasPointBatchTop ? this.batch[this.batchPtr - 1].indexCount++ : ((n = this.pushBatch()).type = 8,
        n.startIndex = r,
        n.indexCount = 1,
        this.hasPointBatchTop = !0,
        this.hasQuadBatchTop = !1),
        o[r++] = t,
        o[r++] = e,
        o[r++] = i,
        o[r++] = s,
        this.pointPtr = r
    }
    ,
    t.prototype.switchProgram = function(t) {
        if (this.lastProgram !== t) {
            var e = this.shaderPrograms[t];
            if (!e) {
                if (0 === this.lastProgram)
                    return;
                t = 0,
                e = this.shaderPrograms[0]
            }
            e = this.pushBatch();
            e.type = 9,
            e.startIndex = t,
            this.lastProgram = t,
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    t.prototype.programUsesDest = function(t) {
        t = this.shaderPrograms[t];
        return !(!t.locDestStart && !t.locDestEnd)
    }
    ,
    t.prototype.programUsesCrossSampling = function(t) {
        t = this.shaderPrograms[t];
        return !!(t.locDestStart || t.locDestEnd || t.crossSampling)
    }
    ,
    t.prototype.programPreservesOpaqueness = function(t) {
        return this.shaderPrograms[t].preservesOpaqueness
    }
    ,
    t.prototype.programExtendsBox = function(t) {
        t = this.shaderPrograms[t];
        return 0 !== t.extendBoxHorizontal || 0 !== t.extendBoxVertical
    }
    ,
    t.prototype.getProgramBoxExtendHorizontal = function(t) {
        return this.shaderPrograms[t].extendBoxHorizontal
    }
    ,
    t.prototype.getProgramBoxExtendVertical = function(t) {
        return this.shaderPrograms[t].extendBoxVertical
    }
    ,
    t.prototype.getProgramParameterType = function(t, e) {
        return this.shaderPrograms[t].parameters[e][2]
    }
    ,
    t.prototype.programIsAnimated = function(t) {
        return this.shaderPrograms[t].animated
    }
    ,
    t.prototype.setProgramParameters = function(t, e, i, s, n, r, o, a, h, c, l, u, p, d, f) {
        var y, g, m, _, v, b = this.shaderPrograms[this.lastProgram];
        if (b.hasAnyOptionalUniforms || f.length) {
            if ((m = this.pushBatch()).type = 10,
            m.mat4param ? mat4.set(this.matMV, m.mat4param) : m.mat4param = mat4.create(),
            (_ = m.mat4param)[0] = e,
            _[1] = i,
            _[2] = s,
            _[3] = n,
            _[4] = r,
            _[5] = o,
            _[6] = a,
            _[7] = h,
            _[8] = c,
            _[9] = l,
            _[10] = u,
            _[11] = p,
            _[12] = d,
            b.locSamplerBack ? m.texParam = t : m.texParam = null,
            f.length)
                for ((v = m.shaderParams).length = f.length,
                y = 0,
                g = f.length; y < g; y++)
                    v[y] = f[y];
            this.hasQuadBatchTop = !1,
            this.hasPointBatchTop = !1
        }
    }
    ,
    t.prototype.clear = function(t, e, i, s) {
        var n = this.pushBatch();
        n.type = 7,
        n.startIndex = 0,
        n.mat4param || (n.mat4param = mat4.create()),
        n.mat4param[0] = t,
        n.mat4param[1] = e,
        n.mat4param[2] = i,
        n.mat4param[3] = s,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1
    }
    ,
    t.prototype.clearRect = function(t, e, i, s) {
        var n;
        i < 0 || s < 0 || ((n = this.pushBatch()).type = 7,
        n.startIndex = 1,
        n.mat4param || (n.mat4param = mat4.create()),
        n.mat4param[0] = t,
        n.mat4param[1] = e,
        n.mat4param[2] = i,
        n.mat4param[3] = s,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1)
    }
    ,
    t.prototype.clearDepth = function() {
        var t = this.pushBatch();
        t.type = 7,
        t.startIndex = 2,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1
    }
    ,
    t.prototype.setEarlyZPass = function(t) {
        var e;
        this.enableFrontToBack && (t = !!t,
        this.isEarlyZPass !== t && ((e = this.pushBatch()).type = 14,
        e.startIndex = t ? 1 : 0,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1,
        this.isEarlyZPass = t,
        this.renderToTex = null,
        this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)))
    }
    ,
    t.prototype.setDepthTestEnabled = function(t) {
        var e;
        this.enableFrontToBack && ((e = this.pushBatch()).type = 13,
        e.startIndex = t ? 1 : 0,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1)
    }
    ,
    t.prototype.fullscreenQuad = function() {
        mat4.set(this.lastMV, i),
        this.resetModelView(),
        this.updateModelView();
        var t = this.width / 2
          , e = this.height / 2;
        this.quad(-t, e, t, e, t, -e, -t, -e),
        mat4.set(i, this.matMV),
        this.updateModelView()
    }
    ,
    t.prototype.setColorFillMode = function(t, e, i, s) {
        this.switchProgram(3);
        var n = this.pushBatch();
        n.type = 12,
        n.mat4param || (n.mat4param = mat4.create()),
        n.mat4param[0] = t,
        n.mat4param[1] = e,
        n.mat4param[2] = i,
        n.mat4param[3] = s,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1
    }
    ,
    t.prototype.setTextureFillMode = function() {
        this.switchProgram(0)
    }
    ,
    t.prototype.restoreEarlyZMode = function() {
        this.switchProgram(2)
    }
    ,
    t.prototype.present = function() {
        this.endBatch(),
        this.gl.flush()
    }
    ;
    var f = []
      , y = {};
    t.prototype.contextLost = function() {
        cr.clearArray(f),
        y = {}
    }
    ,
    t.prototype.loadTexture = function(t, e, i, s, n, r) {
        e = !!e,
        i = !!i;
        var o = t.src + "," + e + "," + i + (e ? "," + n : "")
          , a = null;
        if (void 0 !== t.src && y.hasOwnProperty(o))
            return (a = y[o]).c2refcount++,
            a;
        this.endBatch();
        var h = this.gl
          , c = cr.isPOT(t.width) && cr.isPOT(t.height)
          , a = h.createTexture();
        h.bindTexture(h.TEXTURE_2D, a),
        h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var l, u = h.RGBA, p = h.RGBA, d = h.UNSIGNED_BYTE;
        if (s && !this.isIE)
            switch (s) {
            case 1:
                u = h.RGB,
                p = h.RGB;
                break;
            case 2:
                d = h.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                d = h.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                u = h.RGB,
                p = h.RGB,
                d = h.UNSIGNED_SHORT_5_6_5
            }
        return 1 === this.version && !c && e ? ((l = document.createElement("canvas")).width = cr.nextHighestPowerOfTwo(t.width),
        l.height = cr.nextHighestPowerOfTwo(t.height),
        void 0 !== (s = l.getContext("2d")).imageSmoothingEnabled ? s.imageSmoothingEnabled = i : (s.webkitImageSmoothingEnabled = i,
        s.mozImageSmoothingEnabled = i,
        s.msImageSmoothingEnabled = i),
        s.drawImage(t, 0, 0, t.width, t.height, 0, 0, l.width, l.height),
        h.texImage2D(h.TEXTURE_2D, 0, u, p, d, l)) : h.texImage2D(h.TEXTURE_2D, 0, u, p, d, t),
        e ? "repeat-x" === n ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT),
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)) : ("repeat-y" === n ? h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE) : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT),
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE),
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)),
        i ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR),
        (c || 2 <= this.version) && this.enable_mipmaps && !r ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_LINEAR),
        h.generateMipmap(h.TEXTURE_2D)) : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST),
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST)),
        h.bindTexture(h.TEXTURE_2D, null),
        this.lastTexture0 = null,
        a.c2width = t.width,
        a.c2height = t.height,
        a.c2refcount = 1,
        a.c2texkey = o,
        f.push(a),
        y[o] = a
    }
    ,
    t.prototype.createEmptyTexture = function(t, e, i, s, n) {
        this.endBatch();
        var r = this.gl;
        this.isIE && (s = !1);
        var o = r.createTexture();
        return r.bindTexture(r.TEXTURE_2D, o),
        r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t, e, 0, r.RGBA, s ? r.UNSIGNED_SHORT_4_4_4_4 : r.UNSIGNED_BYTE, null),
        n ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.REPEAT),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.REPEAT)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE)),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, i ? r.LINEAR : r.NEAREST),
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, i ? r.LINEAR : r.NEAREST),
        r.bindTexture(r.TEXTURE_2D, null),
        this.lastTexture0 = null,
        o.c2width = t,
        o.c2height = e,
        f.push(o),
        o
    }
    ,
    t.prototype.videoToTexture = function(t, e, i) {
        this.endBatch();
        var s = this.gl;
        this.isIE && (i = !1),
        s.bindTexture(s.TEXTURE_2D, e),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        try {
            s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, i ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, t)
        } catch (t) {
            console && console.error && console.error("Error updating WebGL texture: ", t)
        }
        s.bindTexture(s.TEXTURE_2D, null),
        this.lastTexture0 = null
    }
    ,
    t.prototype.deleteTexture = function(t) {
        t && (void 0 !== t.c2refcount && 1 < t.c2refcount ? t.c2refcount-- : (this.endBatch(),
        t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null),
        this.lastTexture0 = null),
        t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1),
        this.gl.bindTexture(this.gl.TEXTURE_2D, null),
        this.gl.activeTexture(this.gl.TEXTURE0),
        this.lastTexture1 = null),
        cr.arrayFindRemove(f, t),
        void 0 !== t.c2texkey && delete y[t.c2texkey],
        this.gl.deleteTexture(t)))
    }
    ,
    t.prototype.estimateVRAM = function() {
        for (var t, e = this.width * this.height * 4 * 2, i = 0, s = f.length; i < s; i++)
            e += (t = f[i]).c2width * t.c2height * 4;
        return e
    }
    ,
    t.prototype.textureCount = function() {
        return f.length
    }
    ,
    t.prototype.setRenderingToTexture = function(t) {
        var e;
        t !== this.renderToTex && ((e = this.pushBatch()).type = 6,
        e.texParam = t,
        this.renderToTex = t,
        this.hasQuadBatchTop = !1,
        this.hasPointBatchTop = !1)
    }
    ,
    cr.GLWrap = t
}(),
function() {
    var u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    function i(t) {
        var e;
        t && (t.getContext || t.dc) && (t.c2runtime || ((e = t.c2runtime = this).isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk),
        this.isCordova = this.isCrosswalk || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova,
        this.isPhoneGap = this.isCordova,
        this.isDirectCanvas = !!t.dc,
        this.isAppMobi = void 0 !== window.AppMobi || this.isDirectCanvas,
        this.isCocoonJs = !!window.c2cocoonjs,
        this.isEjecta = !!window.c2ejecta,
        this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
            e.setSuspended(!0)
        }),
        CocoonJS.App.onActivated.addEventListener(function() {
            e.setSuspended(!1)
        })),
        this.isEjecta && (document.addEventListener("pagehide", function() {
            e.setSuspended(!0)
        }),
        document.addEventListener("pageshow", function() {
            e.setSuspended(!1)
        }),
        document.addEventListener("resize", function() {
            e.setSize(window.innerWidth, window.innerHeight)
        })),
        this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta,
        this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent),
        this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge,
        this.isTizen = /tizen/i.test(navigator.userAgent),
        this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge,
        this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge,
        this.isiPad = /ipad/i.test(navigator.userAgent),
        this.isiOS = this.isiPhone || this.isiPad || this.isEjecta,
        this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent),
        this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge,
        this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent),
        this.isFirefox = /firefox/i.test(navigator.userAgent),
        this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge,
        this.isWindows = /windows/i.test(navigator.userAgent),
        this.isNWjs = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent),
        this.isNodeWebkit = this.isNWjs,
        this.isArcade = void 0 !== window.is_scirra_arcade,
        this.isWindows8App = !(void 0 === window.c2isWindows8 || !window.c2isWindows8),
        this.isWindows8Capable = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable),
        this.isWindowsPhone8 = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8),
        this.isWindowsPhone81 = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81),
        this.isWindows10 = !!window.cr_windows10,
        this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10,
        this.isBlackberry10 = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10),
        this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree,
        this.devicePixelRatio = 1,
        this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta,
        this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)),
        this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit),
        "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0),
        this.isDebug = "undefined" != typeof cr_is_preview && -1 < window.location.search.indexOf("debug"),
        this.canvas = t,
        this.canvasdiv = document.getElementById("c2canvasdiv"),
        this.gl = null,
        this.glwrap = null,
        this.glUnmaskedRenderer = "(unavailable)",
        this.enableFrontToBack = !1,
        this.earlyz_index = 0,
        this.ctx = null,
        this.firstInFullscreen = !1,
        this.oldWidth = 0,
        this.oldHeight = 0,
        this.canvas.oncontextmenu = function(t) {
            return t.preventDefault && t.preventDefault(),
            !1
        }
        ,
        this.canvas.onselectstart = function(t) {
            return t.preventDefault && t.preventDefault(),
            !1
        }
        ,
        this.canvas.ontouchstart = function(t) {
            return t.preventDefault && t.preventDefault(),
            !1
        }
        ,
        this.isDirectCanvas && (window.c2runtime = this),
        this.isNWjs && (window.ondragover = function(t) {
            return t.preventDefault(),
            !1
        }
        ,
        window.ondrop = function(t) {
            return t.preventDefault(),
            !1
        }
        ,
        window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()),
        this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"),
        this.width = t.width,
        this.height = t.height,
        this.draw_width = this.width,
        this.draw_height = this.height,
        this.cssWidth = this.width,
        this.cssHeight = this.height,
        this.lastWindowWidth = window.innerWidth,
        this.lastWindowHeight = window.innerHeight,
        this.forceCanvasAlpha = !1,
        this.redraw = !0,
        this.isSuspended = !1,
        Date.now || (Date.now = function() {
            return +new Date
        }
        ),
        this.plugins = [],
        this.types = {},
        this.types_by_index = [],
        this.behaviors = [],
        this.layouts = {},
        this.layouts_by_index = [],
        this.eventsheets = {},
        this.eventsheets_by_index = [],
        this.wait_for_textures = [],
        this.triggers_to_postinit = [],
        this.all_global_vars = [],
        this.all_local_vars = [],
        this.solidBehavior = null,
        this.jumpthruBehavior = null,
        this.shadowcasterBehavior = null,
        this.deathRow = {},
        this.hasPendingInstances = !1,
        this.isInClearDeathRow = !1,
        this.isInOnDestroy = 0,
        this.isRunningEvents = !1,
        this.isEndingLayout = !1,
        this.createRow = [],
        this.isLoadingState = !1,
        this.saveToSlot = "",
        this.loadFromSlot = "",
        this.loadFromJson = null,
        this.lastSaveJson = "",
        this.signalledContinuousPreview = !1,
        this.suspendDrawing = !1,
        this.fireOnCreateAfterLoad = [],
        this.dt = 0,
        this.dt1 = 0,
        this.minimumFramerate = 30,
        this.logictime = 0,
        this.cpuutilisation = 0,
        this.timescale = 1,
        this.kahanTime = new cr.KahanAdder,
        this.wallTime = new cr.KahanAdder,
        this.last_tick_time = 0,
        this.fps = 0,
        this.last_fps_time = 0,
        this.tickcount = 0,
        this.tickcount_nosave = 0,
        this.execcount = 0,
        this.framecount = 0,
        this.objectcount = 0,
        this.changelayout = null,
        this.destroycallbacks = [],
        this.event_stack = [],
        this.event_stack_index = -1,
        this.localvar_stack = [[]],
        this.localvar_stack_index = 0,
        this.trigger_depth = 0,
        this.pushEventStack(null),
        this.loop_stack = [],
        this.loop_stack_index = -1,
        this.next_uid = 0,
        this.next_puid = 0,
        this.layout_first_tick = !0,
        this.family_count = 0,
        this.suspend_events = [],
        this.raf_id = -1,
        this.timeout_id = -1,
        this.isloading = !0,
        this.loadingprogress = 0,
        this.isNodeFullscreen = !1,
        this.stackLocalCount = 0,
        this.audioInstance = null,
        this.had_a_click = !1,
        this.isInUserInputEvent = !1,
        this.objects_to_pretick = new cr.ObjectSet,
        this.objects_to_tick = new cr.ObjectSet,
        this.objects_to_tick2 = new cr.ObjectSet,
        this.registered_collisions = [],
        this.temp_poly = new cr.CollisionPoly([]),
        this.temp_poly2 = new cr.CollisionPoly([]),
        this.allGroups = [],
        this.groups_by_name = {},
        this.cndsBySid = {},
        this.actsBySid = {},
        this.varsBySid = {},
        this.blocksBySid = {},
        this.running_layout = null,
        this.layer_canvas = null,
        this.layer_ctx = null,
        this.layer_tex = null,
        this.layout_tex = null,
        this.layout_canvas = null,
        this.layout_ctx = null,
        this.is_WebGL_context_lost = !1,
        this.uses_background_blending = !1,
        this.fx_tex = [null, null],
        this.fullscreen_scaling = 0,
        this.files_subfolder = "",
        this.objectsByUid = {},
        this.loaderlogos = null,
        this.snapshotCanvas = null,
        this.snapshotData = "",
        this.objectRefTable = [],
        this.requestProjectData()))
    }
    i.prototype.requestProjectData = function() {
        var e = this;
        if (this.isWKWebView)
            this.fetchLocalFileViaCordovaAsText("data.js?v=1", function(t) {
                e.loadProject(JSON.parse(t))
            }, function(t) {
                alert("Error fetching data.js")
            });
        else {
            var i = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
              , s = "data.js?v=1";
            (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (s = "data.json?v=1"),
            i.open("GET", s, !0);
            var n = !1;
            if (!this.isDomFree && "response"in i && "responseType"in i)
                try {
                    i.responseType = "json",
                    n = "json" === i.responseType
                } catch (t) {
                    n = !1
                }
            if (!n && "responseType"in i)
                try {
                    i.responseType = "text"
                } catch (t) {}
            if ("overrideMimeType"in i)
                try {
                    i.overrideMimeType("application/json; charset=utf-8")
                } catch (t) {}
            this.isWindowsPhone8 ? i.onreadystatechange = function() {
                4 === i.readyState && e.loadProject(JSON.parse(i.responseText))
            }
            : (i.onload = function() {
                var t;
                n ? e.loadProject(i.response) : e.isEjecta ? (t = (t = i.responseText).substr(t.indexOf("{")),
                e.loadProject(JSON.parse(t))) : e.loadProject(JSON.parse(i.responseText))
            }
            ,
            i.onerror = function(t) {
                cr.logerror("Error requesting " + s + ":"),
                cr.logerror(t)
            }
            ),
            i.send()
        }
    }
    ,
    i.prototype.initRendererAndLoader = function() {
        var t, e, i, s, n, r, o, a, h, c, l, u = this;
        this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser,
        0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1),
        this.devicePixelRatio = this.isRetina && (window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio) || 1,
        this.ClearDeathRow(),
        0 < this.fullscreen_mode && this.setSize(window.innerWidth, window.innerHeight, !0),
        this.canvas.addEventListener("webglcontextlost", function(t) {
            t.preventDefault(),
            u.onContextLost(),
            cr.logexport("[Construct 2] WebGL context lost"),
            window.cr_setSuspended(!0)
        }, !1),
        this.canvas.addEventListener("webglcontextrestored", function(t) {
            u.glwrap.initState(),
            u.glwrap.setSize(u.glwrap.width, u.glwrap.height, !0),
            u.layer_tex = null,
            u.layout_tex = null,
            u.fx_tex[0] = null,
            u.fx_tex[1] = null,
            u.onContextRestored(),
            u.redraw = !0,
            cr.logexport("[Construct 2] WebGL context restored"),
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (l = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            },
            this.isAndroid || (this.gl = this.canvas.getContext("webgl2", l)),
            this.gl || (this.gl = this.canvas.getContext("webgl", l) || this.canvas.getContext("experimental-webgl", l)))
        } catch (t) {}
        if (this.gl) {
            this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2");
            var p, d = this.gl.getExtension("WEBGL_debug_renderer_info");
            for (d && (p = this.gl.getParameter(d.UNMASKED_VENDOR_WEBGL),
            d = this.gl.getParameter(d.UNMASKED_RENDERER_WEBGL),
            this.glUnmaskedRenderer = d + " [" + p + "]"),
            this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"),
            this.isDomFree || (this.overlay_canvas = document.createElement("canvas"),
            jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode),
            this.overlay_canvas.oncontextmenu = function(t) {
                return !1
            }
            ,
            this.overlay_canvas.onselectstart = function(t) {
                return !1
            }
            ,
            this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio),
            this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio),
            jQuery(this.overlay_canvas).css({
                width: this.cssWidth + "px",
                height: this.cssHeight + "px"
            }),
            this.positionOverlayCanvas(),
            this.overlay_ctx = this.overlay_canvas.getContext("2d")),
            this.glwrap = new cr.GLWrap(this.gl,this.isMobile,this.enableFrontToBack),
            this.glwrap.setSize(this.canvas.width, this.canvas.height),
            this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality,
            this.ctx = null,
            t = 0,
            e = this.types_by_index.length; t < e; t++)
                for (i = 0,
                s = (o = this.types_by_index[t]).effect_types.length; i < s; i++)
                    (a = o.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id),
                    a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex),
                    this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
            for (t = 0,
            e = this.layouts_by_index.length; t < e; t++) {
                for (i = 0,
                s = (h = this.layouts_by_index[t]).effect_types.length; i < s; i++)
                    (a = h.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(a.id),
                    a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex);
                for (h.updateActiveEffects(),
                i = 0,
                s = h.layers.length; i < s; i++) {
                    for (n = 0,
                    r = (c = h.layers[i]).effect_types.length; n < r; n++)
                        (a = c.effect_types[n]).shaderindex = this.glwrap.getShaderIndex(a.id),
                        a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex),
                        this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                    c.updateActiveEffects()
                }
            }
        } else {
            if (0 < this.fullscreen_mode && this.isDirectCanvas) {
                this.canvas = null,
                document.oncontextmenu = function(t) {
                    return !1
                }
                ,
                document.onselectstart = function(t) {
                    return !1
                }
                ,
                this.ctx = AppMobi.canvas.getContext("2d");
                try {
                    this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp",
                    this.ctx.globalScale = 1,
                    this.ctx.HTML5CompatibilityMode = !0,
                    this.ctx.imageSmoothingEnabled = this.linearSampling
                } catch (t) {}
                0 !== this.width && 0 !== this.height && (this.ctx.width = this.width,
                this.ctx.height = this.height)
            }
            this.ctx || (l = this.isCocoonJs ? {
                antialias: !!this.linearSampling,
                alpha: !0
            } : {
                alpha: !0
            },
            this.ctx = this.canvas.getContext("2d", l),
            this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)),
            this.overlay_canvas = null,
            this.overlay_ctx = null
        }
        this.tickFunc = function(t) {
            u.tick(!1, t)
        }
        ,
        window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0),
        document.addEventListener("touchstart", function() {
            window.focus()
        }, !0)),
        "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"),
        -1 < window.location.search.indexOf("continuous") && (cr.logexport("Reloading for continuous preview"),
        this.loadFromSlot = "__c2_continuouspreview",
        this.suspendDrawing = !0),
        this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
            u.setSuspended(!1)
        }),
        jQuery(window).blur(function() {
            var t = window.parent;
            t && t.document.hasFocus() || u.setSuspended(!0)
        }))),
        window.addEventListener("blur", function() {
            u.onWindowBlur()
        }),
        this.isDomFree || (p = function(t) {
            if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur)
                try {
                    document.activeElement.blur()
                } catch (t) {}
        }
        ,
        "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", p) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", p) : document.addEventListener("touchstart", p),
        document.addEventListener("mousedown", p)),
        0 === this.fullscreen_mode && this.isRetina && 1 < this.devicePixelRatio && this.setSize(this.original_width, this.original_height, !0),
        this.tryLockOrientation(),
        this.getready(),
        this.go(),
        this.extra = {},
        cr.seal(this)
    }
    ,
    i.prototype.setSize = function(t, e, i) {
        var s, n, r, o, a = 0, h = 0, c = 0, l = 0, u = 0;
        this.lastWindowWidth === t && this.lastWindowHeight === e && !i || (this.lastWindowWidth = t,
        this.lastWindowHeight = e,
        s = this.fullscreen_mode,
        ((o = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova) || 0 !== this.fullscreen_mode || i) && (o && (s = this.fullscreen_scaling),
        i = this.devicePixelRatio,
        4 <= s ? (n = this.original_width / this.original_height) < (r = t / e) ? (c = e * n,
        5 === s ? (1 < (u = c * i / this.original_width) ? u = Math.floor(u) : u < 1 && (u = 1 / Math.ceil(1 / u)),
        a = (t - (c = this.original_width * u / i)) / 2,
        h = (e - (l = this.original_height * u / i)) / 2,
        t = c,
        e = l) : (a = (t - c) / 2,
        t = c)) : (l = t / n,
        e = (5 === s ? (1 < (u = l * i / this.original_height) ? u = Math.floor(u) : u < 1 && (u = 1 / Math.ceil(1 / u)),
        a = (t - (c = this.original_width * u / i)) / 2,
        h = (e - (l = this.original_height * u / i)) / 2,
        t = c) : h = (e - l) / 2,
        l)) : o && 0 === s && (a = Math.floor((t - this.original_width) / 2),
        h = Math.floor((e - this.original_height) / 2),
        t = this.original_width,
        e = this.original_height),
        s < 2 && (this.aspect_scale = i),
        this.cssWidth = Math.round(t),
        this.cssHeight = Math.round(e),
        this.width = Math.round(t * i),
        this.height = Math.round(e * i),
        this.redraw = !0,
        this.wantFullscreenScalingQuality || this.width < this.original_width && this.height < this.original_height || 1 === s ? (this.draw_width = this.width,
        this.draw_height = this.height,
        this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width,
        this.draw_height = this.original_height,
        this.fullscreenScalingQuality = !1,
        2 === s ? (n = this.original_width / this.original_height,
        (r = this.lastWindowWidth / this.lastWindowHeight) < n ? this.draw_width = this.draw_height * r : n < r && (this.draw_height = this.draw_width / r)) : 3 === s && ((n = this.original_width / this.original_height) < (r = this.lastWindowWidth / this.lastWindowHeight) ? this.draw_width = this.draw_height * r : r < n && (this.draw_height = this.draw_width / r))),
        this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
            width: Math.round(t) + "px",
            height: Math.round(e) + "px",
            "margin-left": Math.floor(a) + "px",
            "margin-top": Math.floor(h) + "px"
        }),
        "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
            width: Math.round(t) + "px",
            height: Math.round(e) + "px"
        })),
        this.canvas && (this.canvas.width = Math.round(t * i),
        this.canvas.height = Math.round(e * i),
        this.isEjecta ? (this.canvas.style.left = Math.floor(a) + "px",
        this.canvas.style.top = Math.floor(h) + "px",
        this.canvas.style.width = Math.round(t) + "px",
        this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px",
        this.canvas.style.height = Math.round(e) + "px")),
        this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * i),
        this.overlay_canvas.height = Math.round(e * i),
        this.overlay_canvas.style.width = this.cssWidth + "px",
        this.overlay_canvas.style.height = this.cssHeight + "px"),
        this.glwrap && this.glwrap.setSize(Math.round(t * i), Math.round(e * i)),
        this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t),
        this.ctx.height = Math.round(e)),
        this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling),
        this.tryLockOrientation(),
        this.isiPhone && !this.isCordova && window.scrollTo(0, 0)))
    }
    ,
    i.prototype.tryLockOrientation = function() {
        if (this.autoLockOrientation && 0 !== this.orientations) {
            var t = "portrait";
            2 === this.orientations && (t = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
            } catch (t) {
                console && console.warn && console.warn("Failed to lock orientation: ", t)
            }
        }
    }
    ,
    i.prototype.onContextLost = function() {
        var t, e, i;
        for (this.glwrap.contextLost(),
        this.is_WebGL_context_lost = !0,
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            (i = this.types_by_index[t]).onLostWebGLContext && i.onLostWebGLContext()
    }
    ,
    i.prototype.onContextRestored = function() {
        var t, e, i;
        for (this.is_WebGL_context_lost = !1,
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            (i = this.types_by_index[t]).onRestoreWebGLContext && i.onRestoreWebGLContext()
    }
    ,
    i.prototype.positionOverlayCanvas = function() {
        var t;
        this.isDomFree || ((t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova ? jQuery(this.canvas).offset() : jQuery(this.canvas).position()).position = "absolute",
        jQuery(this.overlay_canvas).css(t))
    }
    ;
    var s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    i.prototype.setSuspended = function(t) {
        var e, i;
        if (t && !this.isSuspended)
            for (cr.logexport("[Construct 2] Suspending"),
            this.isSuspended = !0,
            -1 !== this.raf_id && s && s(this.raf_id),
            -1 !== this.timeout_id && clearTimeout(this.timeout_id),
            e = 0,
            i = this.suspend_events.length; e < i; e++)
                this.suspend_events[e](!0);
        else if (!t && this.isSuspended) {
            for (cr.logexport("[Construct 2] Resuming"),
            this.isSuspended = !1,
            this.last_tick_time = cr.performance_now(),
            this.last_fps_time = cr.performance_now(),
            this.framecount = 0,
            e = this.logictime = 0,
            i = this.suspend_events.length; e < i; e++)
                this.suspend_events[e](!1);
            this.tick(!1)
        }
    }
    ,
    i.prototype.addSuspendCallback = function(t) {
        this.suspend_events.push(t)
    }
    ,
    i.prototype.GetObjectReference = function(t) {
        return this.objectRefTable[t]
    }
    ;
    var f = !(i.prototype.loadProject = function(t) {
        t && t.project || cr.logerror("Project model unavailable");
        var e, i, s, n, r, o, a, h, c, l, u, p, d, f, y, g, m, _, v, b, w = t.project;
        for (this.name = w[0],
        this.first_layout = w[1],
        this.fullscreen_mode = w[12],
        this.fullscreen_mode_set = w[12],
        this.original_width = w[10],
        this.original_height = w[11],
        this.parallax_x_origin = this.original_width / 2,
        this.parallax_y_origin = this.original_height / 2,
        this.isDomFree && !this.isEjecta && (4 <= w[12] || 0 === w[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"),
        this.fullscreen_mode = 3,
        this.fullscreen_mode_set = 3),
        this.uses_loader_layout = w[18],
        this.loaderstyle = w[19],
        0 === this.loaderstyle ? ((u = new Image).crossOrigin = "anonymous",
        this.setImageSrc(u, "loading-logo.png"),
        this.loaderlogos = {
            logo: u
        }) : 4 === this.loaderstyle && ((e = new Image).src = "",
        (i = new Image).src = "",
        (s = new Image).src = "",
        (n = new Image).src = "",
        (r = new Image).src = "",
        (o = new Image).src = "",
        (a = new Image).src = "",
        (h = new Image).src = "",
        (c = new Image).src = "",
        (l = new Image).src = "",
        (t = new Image).src = "",
        (u = new Image).src = "",
        this.loaderlogos = {
            logo: [e, i, s, n],
            powered: [r, o, a, h],
            website: [c, l, t, u]
        }),
        this.next_uid = w[21],
        this.objectRefTable = cr.getObjectRefTable(),
        this.system = new cr.system_object(this),
        p = 0,
        d = w[2].length; p < d; p++)
            f = w[2][p],
            _ = this.GetObjectReference(f[0]),
            cr.add_common_aces(f, _.prototype),
            (v = new _(this)).singleglobal = f[1],
            v.is_world = f[2],
            v.is_rotatable = f[5],
            v.must_predraw = f[9],
            v.onCreate && v.onCreate(),
            cr.seal(v),
            this.plugins.push(v);
        for (this.objectRefTable = cr.getObjectRefTable(),
        p = 0,
        d = w[3].length; p < d; p++) {
            for (f = w[3][p],
            b = this.GetObjectReference(f[1]),
            v = null,
            B = 0,
            R = this.plugins.length; B < R; B++)
                if (this.plugins[B]instanceof b) {
                    v = this.plugins[B];
                    break
                }
            var x, S = new v.Type(v);
            for (S.name = f[0],
            S.is_family = f[2],
            S.instvar_sids = f[3].slice(0),
            S.vars_count = f[3].length,
            S.behs_count = f[4],
            S.fx_count = f[5],
            S.sid = f[11],
            S.is_family ? (S.members = [],
            S.family_index = this.family_count++,
            S.families = null) : (S.members = null,
            S.family_index = -1,
            S.families = []),
            S.family_var_map = null,
            S.family_beh_map = null,
            S.family_fx_map = null,
            S.is_contained = !1,
            S.container = null,
            f[6] ? (S.texture_file = f[6][0],
            S.texture_filesize = f[6][1],
            S.texture_pixelformat = f[6][2]) : (S.texture_file = null,
            S.texture_filesize = 0,
            S.texture_pixelformat = 0),
            f[7] ? S.animations = f[7] : S.animations = null,
            S.index = p,
            S.instances = [],
            S.deadCache = [],
            S.solstack = [new cr.selection(S)],
            S.cur_sol = 0,
            S.default_instance = null,
            S.default_layerindex = 0,
            S.stale_iids = !0,
            S.updateIIDs = cr.type_updateIIDs,
            S.getFirstPicked = cr.type_getFirstPicked,
            S.getPairedInstance = cr.type_getPairedInstance,
            S.getCurrentSol = cr.type_getCurrentSol,
            S.pushCleanSol = cr.type_pushCleanSol,
            S.pushCopySol = cr.type_pushCopySol,
            S.popSol = cr.type_popSol,
            S.getBehaviorByName = cr.type_getBehaviorByName,
            S.getBehaviorIndexByName = cr.type_getBehaviorIndexByName,
            S.getEffectIndexByName = cr.type_getEffectIndexByName,
            S.applySolToContainer = cr.type_applySolToContainer,
            S.getInstanceByIID = cr.type_getInstanceByIID,
            S.collision_grid = new cr.SparseGrid(this.original_width,this.original_height),
            S.any_cell_changed = !0,
            S.any_instance_parallaxed = !1,
            S.extra = {},
            S.toString = cr.type_toString,
            S.behaviors = [],
            B = 0,
            R = f[8].length; B < R; B++) {
                y = f[8][B];
                for (var T = this.GetObjectReference(y[1]), A = null, C = 0, k = this.behaviors.length; C < k; C++)
                    if (this.behaviors[C]instanceof T) {
                        A = this.behaviors[C];
                        break
                    }
                A || ((A = new T(this)).my_types = [],
                A.my_instances = new cr.ObjectSet,
                A.onCreate && A.onCreate(),
                cr.seal(A),
                this.behaviors.push(A),
                cr.behaviors.solid && A instanceof cr.behaviors.solid && (this.solidBehavior = A),
                cr.behaviors.jumpthru && A instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = A),
                cr.behaviors.shadowcaster && A instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = A)),
                -1 === A.my_types.indexOf(S) && A.my_types.push(S);
                var O = new A.Type(A,S);
                O.name = y[0],
                O.sid = y[2],
                O.onCreate(),
                cr.seal(O),
                S.behaviors.push(O)
            }
            for (S.global = f[9],
            S.isOnLoaderLayout = f[10],
            S.effect_types = [],
            B = 0,
            R = f[12].length; B < R; B++)
                S.effect_types.push({
                    id: f[12][B][0],
                    name: f[12][B][1],
                    shaderindex: -1,
                    preservesOpaqueness: !1,
                    active: !0,
                    index: B
                });
            S.tile_poly_data = f[13],
            this.uses_loader_layout && !S.is_family && !S.isOnLoaderLayout && v.is_world || (S.onCreate(),
            cr.seal(S)),
            S.name && (this.types[S.name] = S),
            this.types_by_index.push(S),
            v.singleglobal && ((x = new v.Instance(S)).uid = this.next_uid++,
            x.puid = this.next_puid++,
            x.iid = 0,
            x.get_iid = cr.inst_get_iid,
            x.toString = cr.inst_toString,
            x.properties = f[14],
            x.onCreate(),
            cr.seal(x),
            S.instances.push(x),
            this.objectsByUid[x.uid.toString()] = x)
        }
        for (p = 0,
        d = w[4].length; p < d; p++)
            for (var I, P = w[4][p], E = this.types_by_index[P[0]], B = 1, R = P.length; B < R; B++)
                (I = this.types_by_index[P[B]]).families.push(E),
                E.members.push(I);
        for (p = 0,
        d = w[28].length; p < d; p++) {
            var L = w[28][p]
              , M = [];
            for (B = 0,
            R = L.length; B < R; B++)
                M.push(this.types_by_index[L[B]]);
            for (B = 0,
            R = M.length; B < R; B++)
                M[B].is_contained = !0,
                M[B].container = M
        }
        if (0 < this.family_count)
            for (p = 0,
            d = this.types_by_index.length; p < d; p++)
                if (!(g = this.types_by_index[p]).is_family && g.families.length) {
                    g.family_var_map = new Array(this.family_count),
                    g.family_beh_map = new Array(this.family_count),
                    g.family_fx_map = new Array(this.family_count);
                    var j = []
                      , N = 0
                      , F = 0
                      , D = 0;
                    for (B = 0,
                    R = g.families.length; B < R; B++)
                        for (m = g.families[B],
                        g.family_var_map[m.family_index] = N,
                        N += m.vars_count,
                        g.family_beh_map[m.family_index] = F,
                        F += m.behs_count,
                        g.family_fx_map[m.family_index] = D,
                        D += m.fx_count,
                        C = 0,
                        k = m.effect_types.length; C < k; C++)
                            j.push(cr.shallowCopy({}, m.effect_types[C]));
                    for (g.effect_types = j.concat(g.effect_types),
                    B = 0,
                    R = g.effect_types.length; B < R; B++)
                        g.effect_types[B].index = B
                }
        for (p = 0,
        d = w[5].length; p < d; p++) {
            f = w[5][p];
            var V = new cr.layout(this,f);
            cr.seal(V),
            this.layouts[V.name] = V,
            this.layouts_by_index.push(V)
        }
        for (p = 0,
        d = w[6].length; p < d; p++) {
            f = w[6][p];
            var W = new cr.eventsheet(this,f);
            cr.seal(W),
            this.eventsheets[W.name] = W,
            this.eventsheets_by_index.push(W)
        }
        for (p = 0,
        d = this.eventsheets_by_index.length; p < d; p++)
            this.eventsheets_by_index[p].postInit();
        for (p = 0,
        d = this.eventsheets_by_index.length; p < d; p++)
            this.eventsheets_by_index[p].updateDeepIncludes();
        for (p = 0,
        d = this.triggers_to_postinit.length; p < d; p++)
            this.triggers_to_postinit[p].postInit();
        cr.clearArray(this.triggers_to_postinit),
        this.audio_to_preload = w[7],
        this.files_subfolder = w[8],
        this.pixel_rounding = w[9],
        this.aspect_scale = 1,
        this.enableWebGL = w[13],
        this.linearSampling = w[14],
        this.clearBackground = w[15],
        this.versionstr = w[16],
        this.useHighDpi = w[17],
        this.orientations = w[20],
        this.autoLockOrientation = 0 < this.orientations,
        this.pauseOnBlur = w[22],
        this.wantFullscreenScalingQuality = w[23],
        this.fullscreenScalingQuality = this.wantFullscreenScalingQuality,
        this.downscalingQuality = w[24],
        this.preloadSounds = w[25],
        this.projectName = w[26],
        this.enableFrontToBack = w[27] && !this.isIE,
        this.start_time = Date.now(),
        cr.clearArray(this.objectRefTable),
        this.initRendererAndLoader()
    }
    )
      , n = 0
      , r = [];
    i.prototype.queueImageLoad = function(t, e) {
        function i() {
            n--,
            s.maybeLoadNextImages()
        }
        var s = this;
        t.addEventListener("load", i),
        t.addEventListener("error", i),
        r.push([t, e]),
        this.maybeLoadNextImages()
    }
    ,
    i.prototype.maybeLoadNextImages = function() {
        for (var t; r.length && n < 100; )
            n++,
            t = r.shift(),
            this.setImageSrc(t[0], t[1])
    }
    ,
    i.prototype.waitForImageLoad = function(e, i) {
        e.cocoonLazyLoad = !0,
        e.onerror = function(t) {
            e.c2error = !0,
            f = !0,
            console && console.error && console.error("Error loading image '" + e.src + "': ", t)
        }
        ,
        this.isEjecta ? e.src = i : e.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(i, function(t) {
            e.src = t
        }, function(t) {
            e.c2error = !0,
            f = !0,
            console && console.error && console.error("Error extracting image '" + i + "' from expansion file: ", t)
        }) : (e.crossOrigin = "anonymous",
        this.queueImageLoad(e, i))),
        this.wait_for_textures.push(e)
    }
    ;
    var h = 0
      , c = !(i.prototype.findWaitingTexture = function(t) {
        for (var e = 0, i = this.wait_for_textures.length; e < i; e++)
            if (this.wait_for_textures[e].cr_src === t)
                return this.wait_for_textures[e];
        return null
    }
    );
    i.prototype.getready = function() {
        this.audioInstance && (h = this.audioInstance.setPreloadList(this.audio_to_preload))
    }
    ;
    var y = !(i.prototype.areAllTexturesAndSoundsLoaded = function() {
        for (var t, e, i = h, s = 0, n = !0, r = 0, o = this.wait_for_textures.length; r < o; r++) {
            var a = (e = this.wait_for_textures[r]).cr_filesize;
            (!a || a <= 0) && (a = 5e4),
            i += a,
            e.src && (e.complete || e.loaded) && !e.c2error ? s += a : n = !1
        }
        return n && this.preloadSounds && this.audioInstance && (c || (this.audioInstance.startPreloads(),
        c = !0),
        s += t = this.audioInstance.getPreloadedSize(),
        t < h && (n = !1)),
        this.progress = 0 == i ? 1 : s / i,
        n
    }
    );
    i.prototype.go = function() {
        if (this.ctx || this.glwrap) {
            var t = this.ctx || this.overlay_ctx;
            this.overlay_canvas && this.positionOverlayCanvas();
            var e = window.innerWidth
              , i = window.innerHeight;
            this.lastWindowWidth === e && this.lastWindowHeight === i || this.setSize(e, i),
            this.progress = 0,
            this.last_progress = -1;
            var s = this;
            if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || y))
                this.go_loading_finished();
            else {
                var n = Date.now() - this.start_time;
                if (t) {
                    var r = this.width
                      , o = this.height
                      , a = this.devicePixelRatio;
                    if (this.loaderstyle < 3 && (this.isCocoonJs || 500 <= n && this.last_progress != this.progress)) {
                        t.clearRect(0, 0, r, o);
                        var h = r / 2
                          , c = o / 2
                          , l = 0 === this.loaderstyle && this.loaderlogos.logo.complete
                          , e = 40 * a
                          , i = 0
                          , n = 80 * a;
                        l && (e = (n = (r = this.loaderlogos.logo).width * a) / 2,
                        i = (o = r.height * a) / 2,
                        t.drawImage(r, cr.floor(h - e), cr.floor(c - i), n, o)),
                        this.loaderstyle <= 1 ? (c += i + (l ? 12 * a : 0),
                        h -= e,
                        h = cr.floor(h) + .5,
                        c = cr.floor(c) + .5,
                        t.fillStyle = f ? "red" : "DodgerBlue",
                        t.fillRect(h, c, Math.floor(n * this.progress), 6 * a),
                        t.strokeStyle = "black",
                        t.strokeRect(h, c, n, 6 * a),
                        t.strokeStyle = "white",
                        t.strokeRect(h - +a, c - +a, n + 2 * a, 8 * a)) : 2 === this.loaderstyle && (t.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial",
                        t.fillStyle = f ? "#f00" : "#999",
                        t.textBaseLine = "middle",
                        n = Math.round(100 * this.progress) + "%",
                        a = (a = t.measureText ? t.measureText(n) : null) ? a.width : 0,
                        t.fillText(n, h - a / 2, c)),
                        this.last_progress = this.progress
                    } else if (4 === this.loaderstyle)
                        return this.draw_c2_splash_loader(t),
                        void (u ? u(function() {
                            s.go()
                        }) : setTimeout(function() {
                            s.go()
                        }, 16))
                }
                setTimeout(function() {
                    s.go()
                }, this.isCocoonJs ? 10 : 100)
            }
        }
    }
    ;
    var g = -1
      , m = "undefined" == typeof cr_is_preview ? 200 : 0
      , _ = !0
      , v = !1
      , b = 0
      , w = 0
      , x = "undefined" == typeof cr_is_preview ? 3e3 : 0
      , S = null
      , T = null
      , A = 0;
    function C(t, e) {
        return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
    }
    i.prototype.draw_c2_splash_loader = function(t) {
        if (!y) {
            for (var e = Math.ceil(this.width), i = Math.ceil(this.height), s = (this.devicePixelRatio,
            this.loaderlogos.logo), n = this.loaderlogos.powered, r = this.loaderlogos.website, o = 0; o < 4; ++o)
                if (!s[o].complete || !n[o].complete || !r[o].complete)
                    return;
            0 === A && (g = Date.now());
            var a, h, c, l, u = Date.now(), p = !1, d = t;
            _ || v ? (t.clearRect(0, 0, e, i),
            c = e,
            l = i,
            S && S.width === c && S.height === l || ((S = document.createElement("canvas")).width = c,
            S.height = l,
            T = S.getContext("2d")),
            d = T,
            p = !0,
            _ && 1 === A && (g = Date.now())) : t.globalAlpha = 1,
            d.fillStyle = "#333333",
            d.fillRect(0, 0, e, i),
            256 < this.cssHeight ? (h = .25 * (a = cr.clamp(.22 * i, 105, .6 * e)),
            d.drawImage(C(n, a), .5 * e - a / 2, .2 * i - h / 2, a, h),
            h = a = Math.min(.395 * i, .95 * e),
            d.drawImage(C(s, a), .5 * e - a / 2, .485 * i - h / 2, a, h),
            h = .25 * (a = cr.clamp(.22 * i, 105, .6 * e)),
            d.drawImage(C(r, a), .5 * e - a / 2, .868 * i - h / 2, a, h),
            d.fillStyle = "#3C3C3C",
            a = e,
            h = Math.max(.005 * i, 2),
            d.fillRect(0, .8 * i - h / 2, a, h),
            d.fillStyle = f ? "red" : "#E0FF65",
            a = e * this.progress,
            d.fillRect(.5 * e - a / 2, .8 * i - h / 2, a, h)) : (h = a = .55 * i,
            d.drawImage(C(s, a), .5 * e - a / 2, .45 * i - h / 2, a, h),
            d.fillStyle = "#3C3C3C",
            a = e,
            h = Math.max(.005 * i, 2),
            d.fillRect(0, .85 * i - h / 2, a, h),
            d.fillStyle = f ? "red" : "#E0FF65",
            a = e * this.progress,
            d.fillRect(.5 * e - a / 2, .85 * i - h / 2, a, h)),
            p && (_ ? t.globalAlpha = 0 === A ? 0 : Math.min((u - g) / 300, 1) : v && (t.globalAlpha = Math.max(1 - (u - w) / 300, 0)),
            t.drawImage(S, 0, 0, e, i)),
            _ && 300 <= u - g && 2 <= A && (_ = !1,
            b = u),
            !_ && x <= u - b && !v && 1 <= this.progress && (v = !0,
            w = u),
            (v && 300 + m <= u - w || "undefined" != typeof cr_is_preview && 1 <= this.progress && Date.now() - g < 500) && (v = _ = !(y = !0),
            T = S = null,
            this.loaderlogos = null),
            ++A
        }
    }
    ,
    i.prototype.go_loading_finished = function() {
        var t, e, i, s, n;
        if (this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas),
        this.overlay_ctx = null,
        this.overlay_canvas = null),
        this.start_time = Date.now(),
        this.last_fps_time = cr.performance_now(),
        this.uses_loader_layout)
            for (t = 0,
            e = this.types_by_index.length; t < e; t++)
                (i = this.types_by_index[t]).is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(),
                cr.seal(i));
        else
            this.isloading = !1;
        for (t = 0,
        e = this.layouts_by_index.length; t < e; t++)
            this.layouts_by_index[t].createGlobalNonWorlds();
        for (2 <= this.fullscreen_mode && (s = this.original_width / this.original_height,
        n = this.width / this.height,
        2 !== this.fullscreen_mode && s < n || 2 === this.fullscreen_mode && n < s ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width),
        (this.first_layout ? this.layouts[this.first_layout] : this.layouts_by_index[0]).startRunning(),
        this.uses_loader_layout || (this.loadingprogress = 1,
        this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null),
        window.C2_RegisterSW && window.C2_RegisterSW()),
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(),
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            (i = this.types_by_index[t]).onAppBegin && i.onAppBegin();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1),
        this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
    }
    ,
    i.prototype.tick = function(t, e, i) {
        var s, n, r;
        this.running_layout && (s = r = cr.performance_now(),
        !i && this.isSuspended && !t || (t || (u ? this.raf_id = u(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16)),
        n = e || r,
        i = this.fullscreen_mode,
        ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova) || this.isNodeFullscreen) && 0 < this.fullscreen_scaling && (i = this.fullscreen_scaling),
        0 < i && (r = window.innerWidth,
        i = window.innerHeight,
        this.lastWindowWidth === r && this.lastWindowHeight === i || this.setSize(r, i)),
        this.isDomFree || (e ? this.firstInFullscreen || (this.firstInFullscreen = !0) : this.firstInFullscreen ? (this.firstInFullscreen = !1,
        0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width,
        this.oldHeight = this.height)),
        this.isloading && (e = this.areAllTexturesAndSoundsLoaded(),
        this.loadingprogress = this.progress,
        e && (this.isloading = !1,
        this.progress = 1,
        this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null),
        window.C2_RegisterSW && window.C2_RegisterSW())),
        this.logic(n),
        !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || t || (this.redraw = !1,
        this.glwrap ? this.drawGL() : this.draw(),
        this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]),
        window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData),
        this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)),
        this.snapshotCanvas = null)),
        this.hit_breakpoint || (this.tickcount++,
        this.tickcount_nosave++,
        this.execcount++,
        this.framecount++),
        this.logictime += cr.performance_now() - s))
    }
    ,
    i.prototype.logic = function(t) {
        var e, i, s, n;
        1e3 <= t - this.last_fps_time && (this.last_fps_time += 1e3,
        1e3 <= t - this.last_fps_time && (this.last_fps_time = t),
        this.fps = this.framecount,
        this.framecount = 0,
        this.cpuutilisation = this.logictime,
        this.logictime = 0);
        var r = 0;
        0 !== this.last_tick_time && ((o = t - this.last_tick_time) < 0 && (o = 0),
        r = o / 1e3,
        this.dt1 = r,
        .5 < this.dt1 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)),
        this.last_tick_time = t,
        this.dt = this.dt1 * this.timescale,
        this.kahanTime.add(this.dt),
        this.wallTime.add(r);
        var o, a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
        2 <= this.fullscreen_mode || a && 0 < this.fullscreen_scaling ? (o = this.original_width / this.original_height,
        t = this.width / this.height,
        r = this.fullscreen_mode,
        a && 0 < this.fullscreen_scaling && (r = this.fullscreen_scaling),
        this.aspect_scale = 2 !== r && o < t || 2 === r && t < o ? this.height / this.original_height : this.width / this.original_width,
        this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX),
        this.running_layout.scrollToY(this.running_layout.scrollY))) : this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1,
        this.ClearDeathRow(),
        this.isInOnDestroy++,
        this.system.runWaits(),
        this.isInOnDestroy--,
        this.ClearDeathRow(),
        this.isInOnDestroy++;
        for (var h = this.objects_to_pretick.valuesRef(), c = 0, l = h.length; c < l; c++)
            h[c].pretick();
        for (c = 0,
        l = this.types_by_index.length; c < l; c++)
            if (!(s = this.types_by_index[c]).is_family && (s.behaviors.length || s.families.length))
                for (e = 0,
                i = s.instances.length; e < i; e++)
                    for (p = 0,
                    d = (u = s.instances[e]).behavior_insts.length; p < d; p++)
                        u.behavior_insts[p].tick();
        for (c = 0,
        l = this.types_by_index.length; c < l; c++)
            if (!(s = this.types_by_index[c]).is_family && (s.behaviors.length || s.families.length))
                for (e = 0,
                i = s.instances.length; e < i; e++)
                    for (p = 0,
                    d = (u = s.instances[e]).behavior_insts.length; p < d; p++)
                        (n = u.behavior_insts[p]).posttick && n.posttick();
        for (c = 0,
        l = (h = this.objects_to_tick.valuesRef()).length; c < l; c++)
            h[c].tick();
        for (this.isInOnDestroy--,
        this.handleSaveLoad(),
        c = 0; this.changelayout && c++ < 10; )
            this.doChangeLayout(this.changelayout);
        for (c = 0,
        l = this.eventsheets_by_index.length; c < l; c++)
            this.eventsheets_by_index[c].hasRun = !1;
        for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(),
        cr.clearArray(this.registered_collisions),
        this.layout_first_tick = !1,
        this.isInOnDestroy++,
        c = 0,
        l = this.types_by_index.length; c < l; c++)
            if (!(s = this.types_by_index[c]).is_family && (s.behaviors.length || s.families.length))
                for (e = 0,
                i = s.instances.length; e < i; e++)
                    for (var u, p = 0, d = (u = s.instances[e]).behavior_insts.length; p < d; p++)
                        (n = u.behavior_insts[p]).tick2 && n.tick2();
        for (c = 0,
        l = (h = this.objects_to_tick2.valuesRef()).length; c < l; c++)
            h[c].tick2();
        this.isInOnDestroy--
    }
    ,
    i.prototype.onWindowBlur = function() {
        for (var t, e, i, s, n, r, o, a = 0, h = this.types_by_index.length; a < h; a++)
            if (!(n = this.types_by_index[a]).is_family)
                for (t = 0,
                e = n.instances.length; t < e; t++)
                    if ((r = n.instances[t]).onWindowBlur && r.onWindowBlur(),
                    r.behavior_insts)
                        for (i = 0,
                        s = r.behavior_insts.length; i < s; i++)
                            (o = r.behavior_insts[i]).onWindowBlur && o.onWindowBlur()
    }
    ,
    i.prototype.doChangeLayout = function(t) {
        var e, i, s, n = this.running_layout;
        if (this.running_layout.stopRunning(),
        this.glwrap)
            for (e = 0,
            i = this.types_by_index.length; e < i; e++)
                (s = this.types_by_index[e]).is_family || !s.unloadTextures || s.global && 0 !== s.instances.length || -1 !== t.initial_types.indexOf(s) || s.unloadTextures();
        n == t && cr.clearArray(this.system.waits),
        cr.clearArray(this.registered_collisions),
        this.runLayoutChangeMethods(!0),
        t.startRunning(),
        this.runLayoutChangeMethods(!1),
        this.redraw = !0,
        this.layout_first_tick = !0,
        this.ClearDeathRow()
    }
    ,
    i.prototype.runLayoutChangeMethods = function(t) {
        for (var e, i, s, n, r, o, a, h, c = 0, l = this.behaviors.length; c < l; c++)
            e = this.behaviors[c],
            t ? e.onBeforeLayoutChange && e.onBeforeLayoutChange() : e.onLayoutChange && e.onLayoutChange();
        for (c = 0,
        l = this.types_by_index.length; c < l; c++)
            if ((i = this.types_by_index[c]).global || i.plugin.singleglobal)
                for (s = 0,
                n = i.instances.length; s < n; s++)
                    if (r = i.instances[s],
                    t ? r.onBeforeLayoutChange && r.onBeforeLayoutChange() : r.onLayoutChange && r.onLayoutChange(),
                    r.behavior_insts)
                        for (o = 0,
                        a = r.behavior_insts.length; o < a; o++)
                            h = r.behavior_insts[o],
                            t ? h.onBeforeLayoutChange && h.onBeforeLayoutChange() : h.onLayoutChange && h.onLayoutChange()
    }
    ,
    i.prototype.pretickMe = function(t) {
        this.objects_to_pretick.add(t)
    }
    ,
    i.prototype.unpretickMe = function(t) {
        this.objects_to_pretick.remove(t)
    }
    ,
    i.prototype.tickMe = function(t) {
        this.objects_to_tick.add(t)
    }
    ,
    i.prototype.untickMe = function(t) {
        this.objects_to_tick.remove(t)
    }
    ,
    i.prototype.tick2Me = function(t) {
        this.objects_to_tick2.add(t)
    }
    ,
    i.prototype.untick2Me = function(t) {
        this.objects_to_tick2.remove(t)
    }
    ,
    i.prototype.getDt = function(t) {
        return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
    }
    ,
    i.prototype.draw = function() {
        this.running_layout.draw(this.ctx),
        this.isDirectCanvas && this.ctx.present()
    }
    ,
    i.prototype.drawGL = function() {
        this.enableFrontToBack && (this.earlyz_index = 1,
        this.running_layout.drawGL_earlyZPass(this.glwrap)),
        this.running_layout.drawGL(this.glwrap),
        this.glwrap.present()
    }
    ,
    i.prototype.addDestroyCallback = function(t) {
        t && this.destroycallbacks.push(t)
    }
    ,
    i.prototype.removeDestroyCallback = function(t) {
        cr.arrayFindRemove(this.destroycallbacks, t)
    }
    ,
    i.prototype.getObjectByUID = function(t) {
        t = t.toString();
        return this.objectsByUid.hasOwnProperty(t) ? this.objectsByUid[t] : null
    }
    ;
    var d = [];
    i.prototype.DestroyInstance = function(t) {
        var e, i, s = t.type.name, n = null;
        if (this.deathRow.hasOwnProperty(s)) {
            if ((n = this.deathRow[s]).contains(t))
                return
        } else
            n = d.length ? d.pop() : new cr.ObjectSet,
            this.deathRow[s] = n;
        if (n.add(t),
        this.hasPendingInstances = !0,
        t.is_contained)
            for (e = 0,
            i = t.siblings.length; e < i; e++)
                this.DestroyInstance(t.siblings[e]);
        this.isInClearDeathRow && n.values_cache.push(t),
        this.isEndingLayout || (this.isInOnDestroy++,
        this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t),
        this.isInOnDestroy--)
    }
    ,
    i.prototype.ClearDeathRow = function() {
        if (this.hasPendingInstances) {
            var t, e, i, s, n, r;
            for (this.isInClearDeathRow = !0,
            i = 0,
            n = this.createRow.length; i < n; ++i)
                for ((e = (t = this.createRow[i]).type).instances.push(t),
                s = 0,
                r = e.families.length; s < r; ++s)
                    e.families[s].instances.push(t),
                    e.families[s].stale_iids = !0;
            cr.clearArray(this.createRow),
            this.IterateDeathRow(),
            cr.wipe(this.deathRow),
            this.isInClearDeathRow = !1,
            this.hasPendingInstances = !1
        }
    }
    ,
    i.prototype.IterateDeathRow = function() {
        for (var t in this.deathRow)
            this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
    }
    ,
    i.prototype.ClearDeathRowForType = function(t) {
        var e, i, s, n, r, o, a, h, c = t.valuesRef(), l = c[0].type;
        for (cr.arrayRemoveAllFromObjectSet(l.instances, t),
        l.stale_iids = !0,
        0 === l.instances.length && (l.any_instance_parallaxed = !1),
        e = 0,
        i = l.families.length; e < i; ++e)
            o = l.families[e],
            cr.arrayRemoveAllFromObjectSet(o.instances, t),
            o.stale_iids = !0;
        for (e = 0,
        i = this.system.waits.length; e < i; ++e)
            if ((r = this.system.waits[e]).sols.hasOwnProperty(l.index) && cr.arrayRemoveAllFromObjectSet(r.sols[l.index].insts, t),
            !l.is_family)
                for (s = 0,
                n = l.families.length; s < n; ++s)
                    o = l.families[s],
                    r.sols.hasOwnProperty(o.index) && cr.arrayRemoveAllFromObjectSet(r.sols[o.index].insts, t);
        var u, p = c[0].layer;
        if (p) {
            if (p.useRenderCells)
                for (e = 0,
                i = (a = p.instances).length; e < i; ++e)
                    h = a[e],
                    t.contains(h) && (h.update_bbox(),
                    p.render_grid.update(h, h.rendercells, null),
                    h.rendercells.set(0, 0, -1, -1));
            cr.arrayRemoveAllFromObjectSet(p.instances, t),
            p.setZIndicesStaleFrom(0)
        }
        for (e = 0; e < c.length; ++e)
            this.ClearDeathRowForSingleInstance(c[e], l);
        (u = t).clear(),
        d.push(u),
        this.redraw = !0
    }
    ,
    i.prototype.ClearDeathRowForSingleInstance = function(t, e) {
        for (var i, s = 0, n = this.destroycallbacks.length; s < n; ++s)
            this.destroycallbacks[s](t);
        t.collcells && e.collision_grid.update(t, t.collcells, null);
        var r = t.layer;
        if (r && r.removeFromInstanceList(t, !0),
        t.behavior_insts)
            for (s = 0,
            n = t.behavior_insts.length; s < n; ++s)
                (i = t.behavior_insts[s]).onDestroy && i.onDestroy(),
                i.behavior.my_instances.remove(t);
        this.objects_to_pretick.remove(t),
        this.objects_to_tick.remove(t),
        this.objects_to_tick2.remove(t),
        t.onDestroy && t.onDestroy(),
        this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()],
        this.objectcount--,
        e.deadCache.length < 100 && e.deadCache.push(t)
    }
    ,
    i.prototype.createInstance = function(t, e, i, s) {
        if (t.is_family) {
            var n = cr.floor(Math.random() * t.members.length);
            return this.createInstance(t.members[n], e, i, s)
        }
        return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, s, !1) : null
    }
    ;
    var k = [];
    i.prototype.createInstanceFromInit = function(t, e, i, s, n, r) {
        var o, a, h, c, l;
        if (!t)
            return null;
        var u = this.types_by_index[t[1]]
          , p = u.plugin.is_world;
        if (this.isloading && p && !u.isOnLoaderLayout)
            return null;
        if (p && !this.glwrap && 11 === t[0][11])
            return null;
        var d, f = e;
        for (p || (e = null),
        u.deadCache.length ? ((d = u.deadCache.pop()).recycled = !0,
        u.plugin.Instance.call(d, u)) : (d = new u.plugin.Instance(u)).recycled = !1,
        !i || r || this.objectsByUid.hasOwnProperty(t[2].toString()) ? d.uid = this.next_uid++ : d.uid = t[2],
        (this.objectsByUid[d.uid.toString()] = d).puid = this.next_puid++,
        d.iid = u.instances.length,
        o = 0,
        a = this.createRow.length; o < a; ++o)
            this.createRow[o].type === u && d.iid++;
        d.get_iid = cr.inst_get_iid,
        d.toString = cr.inst_toString;
        var y, g, m = t[3];
        if (d.recycled)
            cr.wipe(d.extra);
        else {
            if (d.extra = {},
            "undefined" != typeof cr_is_preview)
                for (d.instance_var_names = [],
                d.instance_var_names.length = m.length,
                o = 0,
                a = m.length; o < a; o++)
                    d.instance_var_names[o] = m[o][1];
            d.instance_vars = [],
            d.instance_vars.length = m.length
        }
        for (o = 0,
        a = m.length; o < a; o++)
            d.instance_vars[o] = m[o][0];
        if (p) {
            var _ = t[0];
            if (d.x = cr.is_undefined(s) ? _[0] : s,
            d.y = cr.is_undefined(n) ? _[1] : n,
            d.z = _[2],
            d.width = _[3],
            d.height = _[4],
            d.depth = _[5],
            d.angle = _[6],
            d.opacity = _[7],
            d.hotspotX = _[8],
            d.hotspotY = _[9],
            d.blend_mode = _[10],
            l = _[11],
            !this.glwrap && u.effect_types.length && (d.blend_mode = l),
            d.compositeOp = cr.effectToCompositeOp(d.blend_mode),
            this.gl && cr.setGLBlend(d, d.blend_mode, this.gl),
            d.recycled) {
                for (o = 0,
                a = _[12].length; o < a; o++)
                    for (h = 0,
                    c = _[12][o].length; h < c; h++)
                        d.effect_params[o][h] = _[12][o][h];
                d.bbox.set(0, 0, 0, 0),
                d.collcells.set(0, 0, -1, -1),
                d.rendercells.set(0, 0, -1, -1),
                d.bquad.set_from_rect(d.bbox),
                cr.clearArray(d.bbox_changed_callbacks)
            } else {
                for (d.effect_params = _[12].slice(0),
                o = 0,
                a = d.effect_params.length; o < a; o++)
                    d.effect_params[o] = _[12][o].slice(0);
                d.active_effect_types = [],
                d.active_effect_flags = [],
                d.active_effect_flags.length = u.effect_types.length,
                d.bbox = new cr.rect(0,0,0,0),
                d.collcells = new cr.rect(0,0,-1,-1),
                d.rendercells = new cr.rect(0,0,-1,-1),
                d.bquad = new cr.quad,
                d.bbox_changed_callbacks = [],
                d.set_bbox_changed = cr.set_bbox_changed,
                d.add_bbox_changed_callback = cr.add_bbox_changed_callback,
                d.contains_pt = cr.inst_contains_pt,
                d.update_bbox = cr.update_bbox,
                d.update_render_cell = cr.update_render_cell,
                d.update_collision_cell = cr.update_collision_cell,
                d.get_zindex = cr.inst_get_zindex
            }
            for (d.tilemap_exists = !1,
            d.tilemap_width = 0,
            d.tilemap_height = 0,
            d.tilemap_data = null,
            14 === _.length && (d.tilemap_exists = !0,
            d.tilemap_width = _[13][0],
            d.tilemap_height = _[13][1],
            d.tilemap_data = _[13][2]),
            o = 0,
            a = u.effect_types.length; o < a; o++)
                d.active_effect_flags[o] = !0;
            d.shaders_preserve_opaqueness = !0,
            d.updateActiveEffects = cr.inst_updateActiveEffects,
            d.updateActiveEffects(),
            d.uses_shaders = !!d.active_effect_types.length,
            d.bbox_changed = !0,
            d.cell_changed = !0,
            u.any_cell_changed = !0,
            d.visible = !0,
            d.my_timescale = -1,
            d.layer = e,
            d.zindex = e.instances.length,
            void (d.earlyz_index = 0) === d.collision_poly && (d.collision_poly = null),
            d.collisionsEnabled = !0,
            this.redraw = !0
        }
        for (cr.clearArray(k),
        o = 0,
        a = u.families.length; o < a; o++)
            k.push.apply(k, u.families[o].behaviors);
        if (k.push.apply(k, u.behaviors),
        d.recycled)
            for (o = 0,
            a = k.length; o < a; o++) {
                var v = k[o];
                for ((g = d.behavior_insts[o]).recycled = !0,
                v.behavior.Instance.call(g, v, d),
                h = 0,
                c = (y = t[4][o]).length; h < c; h++)
                    g.properties[h] = y[h];
                g.onCreate(),
                v.behavior.my_instances.add(d)
            }
        else
            for (d.behavior_insts = [],
            o = 0,
            a = k.length; o < a; o++)
                (g = new (v = k[o]).behavior.Instance(v,d)).recycled = !1,
                g.properties = t[4][o].slice(0),
                g.onCreate(),
                cr.seal(g),
                d.behavior_insts.push(g),
                v.behavior.my_instances.add(d);
        if (y = t[5],
        d.recycled)
            for (o = 0,
            a = y.length; o < a; o++)
                d.properties[o] = y[o];
        else
            d.properties = y.slice(0);
        if (this.createRow.push(d),
        this.hasPendingInstances = !0,
        e && (e.appendToInstanceList(d, !0),
        1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)),
        this.objectcount++,
        u.is_contained) {
            if (d.is_contained = !0,
            d.recycled ? cr.clearArray(d.siblings) : d.siblings = [],
            !i && !r) {
                for (o = 0,
                a = u.container.length; o < a; o++)
                    if (u.container[o] !== u) {
                        if (!u.container[o].default_instance)
                            return null;
                        d.siblings.push(this.createInstanceFromInit(u.container[o].default_instance, f, !1, p ? d.x : s, p ? d.y : n, !0))
                    }
                for (o = 0,
                a = d.siblings.length; o < a; o++)
                    for (d.siblings[o].siblings.push(d),
                    h = 0; h < a; h++)
                        o !== h && d.siblings[o].siblings.push(d.siblings[h])
            }
        } else
            d.is_contained = !1,
            d.siblings = null;
        for (d.onCreate(),
        d.recycled || cr.seal(d),
        o = 0,
        a = d.behavior_insts.length; o < a; o++)
            d.behavior_insts[o].postCreate && d.behavior_insts[o].postCreate();
        return d
    }
    ,
    i.prototype.getLayerByName = function(t) {
        for (var e = 0, i = this.running_layout.layers.length; e < i; e++) {
            var s = this.running_layout.layers[e];
            if (cr.equals_nocase(s.name, t))
                return s
        }
        return null
    }
    ,
    i.prototype.getLayerByNumber = function(t) {
        return (t = cr.floor(t)) < 0 && (t = 0),
        t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1),
        this.running_layout.layers[t]
    }
    ,
    i.prototype.getLayer = function(t) {
        return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
    }
    ,
    i.prototype.clearSol = function(t) {
        for (var e = 0, i = t.length; e < i; e++)
            t[e].getCurrentSol().select_all = !0
    }
    ,
    i.prototype.pushCleanSol = function(t) {
        for (var e = 0, i = t.length; e < i; e++)
            t[e].pushCleanSol()
    }
    ,
    i.prototype.pushCopySol = function(t) {
        for (var e = 0, i = t.length; e < i; e++)
            t[e].pushCopySol()
    }
    ,
    i.prototype.popSol = function(t) {
        for (var e = 0, i = t.length; e < i; e++)
            t[e].popSol()
    }
    ,
    i.prototype.updateAllCells = function(t) {
        if (t.any_cell_changed) {
            for (var e = t.instances, i = 0, s = e.length; i < s; ++i)
                e[i].update_collision_cell();
            var n = this.createRow;
            for (i = 0,
            s = n.length; i < s; ++i)
                n[i].type === t && n[i].update_collision_cell();
            t.any_cell_changed = !1
        }
    }
    ,
    i.prototype.getCollisionCandidates = function(t, e, i, s) {
        var n, r, o, a = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
        if (e.is_family)
            for (n = 0,
            r = e.members.length; n < r; ++n)
                o = e.members[n],
                a || o.any_instance_parallaxed ? cr.appendArray(s, o.instances) : (this.updateAllCells(o),
                o.collision_grid.queryRange(i, s));
        else
            a || e.any_instance_parallaxed ? cr.appendArray(s, e.instances) : (this.updateAllCells(e),
            e.collision_grid.queryRange(i, s))
    }
    ,
    i.prototype.getTypesCollisionCandidates = function(t, e, i, s) {
        for (var n = 0, r = e.length; n < r; ++n)
            this.getCollisionCandidates(t, e[n], i, s)
    }
    ,
    i.prototype.getSolidCollisionCandidates = function(t, e, i) {
        var s = this.getSolidBehavior();
        if (!s)
            return null;
        this.getTypesCollisionCandidates(t, s.my_types, e, i)
    }
    ,
    i.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
        var s = this.getJumpthruBehavior();
        if (!s)
            return null;
        this.getTypesCollisionCandidates(t, s.my_types, e, i)
    }
    ,
    i.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, s) {
        var n, r, o, a, h, c, l, u = t.getCurrentSol(), p = this.getCurrentEventStack().current_event.orblock;
        if (u.select_all)
            for (s || (u.select_all = !1,
            cr.clearArray(u.instances)),
            n = 0,
            a = t.instances.length; n < a; n++)
                if ((o = t.instances[n]).update_bbox(),
                h = o.layer.canvasToLayer(e, i, !0),
                c = o.layer.canvasToLayer(e, i, !1),
                o.contains_pt(h, c)) {
                    if (s)
                        return !1;
                    u.instances.push(o)
                } else
                    p && u.else_instances.push(o);
        else {
            for (n = r = 0,
            a = (l = p ? u.else_instances : u.instances).length; n < a; n++)
                if ((o = l[n]).update_bbox(),
                h = o.layer.canvasToLayer(e, i, !0),
                c = o.layer.canvasToLayer(e, i, !1),
                o.contains_pt(h, c)) {
                    if (s)
                        return !1;
                    p ? u.instances.push(o) : (u.instances[r] = u.instances[n],
                    r++)
                }
            s || (l.length = r)
        }
        return t.applySolToContainer(),
        !!s || u.hasObjects()
    }
    ,
    i.prototype.testOverlap = function(t, e) {
        if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled))
            return !1;
        t.update_bbox(),
        e.update_bbox();
        var i, s, n, r, o, a, h, c, l, u, p = t.layer, d = e.layer;
        if (p === d || p.parallaxX === d.parallaxX && d.parallaxY == d.parallaxY && p.scale === d.scale && p.angle === d.angle && p.zoomRate === d.zoomRate)
            return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(),
            c = e.collision_poly && !e.collision_poly.is_empty(),
            !h && !c || (l = h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle),
            t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height),
            this.temp_poly),
            u = c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle),
            e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height),
            this.temp_poly),
            l.intersects_poly(u, e.x - t.x, e.y - t.y))))));
        for (h = t.collision_poly && !t.collision_poly.is_empty(),
        c = e.collision_poly && !e.collision_poly.is_empty(),
        h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle),
        this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height),
        l = this.temp_poly,
        c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle),
        this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height),
        u = this.temp_poly2,
        i = 0,
        s = l.pts_count; i < s; i++)
            r = (n = 2 * i) + 1,
            o = l.pts_cache[n],
            a = l.pts_cache[r],
            l.pts_cache[n] = p.layerToCanvas(o + t.x, a + t.y, !0),
            l.pts_cache[r] = p.layerToCanvas(o + t.x, a + t.y, !1);
        for (l.update_bbox(),
        i = 0,
        s = u.pts_count; i < s; i++)
            r = (n = 2 * i) + 1,
            o = u.pts_cache[n],
            a = u.pts_cache[r],
            u.pts_cache[n] = d.layerToCanvas(o + e.x, a + e.y, !0),
            u.pts_cache[r] = d.layerToCanvas(o + e.x, a + e.y, !1);
        return u.update_bbox(),
        l.intersects_poly(u, 0, 0)
    }
    ;
    var p = new cr.quad
      , O = new cr.rect(0,0,0,0)
      , I = [];
    i.prototype.testTilemapOverlap = function(t, e) {
        var i, s, n = e.bbox, r = t.x, o = t.y;
        t.getCollisionRectCandidates(n, I);
        for (var a = I, h = e.collision_poly && !e.collision_poly.is_empty(), c = 0, l = a.length; c < l; ++c)
            if (i = a[c],
            s = i.rc,
            n.intersects_rect_off(s, r, o) && (p.set_from_rect(s),
            p.offset(r, o),
            p.intersects_quad(e.bquad)))
                if (h) {
                    if (e.collision_poly.cache_poly(e.width, e.height, e.angle),
                    i.poly) {
                        if (i.poly.intersects_poly(e.collision_poly, e.x - (r + s.left), e.y - (o + s.top)))
                            return cr.clearArray(I),
                            !0
                    } else if (this.temp_poly.set_from_quad(p, 0, 0, s.right - s.left, s.bottom - s.top),
                    this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y))
                        return cr.clearArray(I),
                        !0
                } else {
                    if (!i.poly)
                        return cr.clearArray(I),
                        !0;
                    if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height),
                    i.poly.intersects_poly(this.temp_poly, -(r + s.left), -(o + s.top)))
                        return cr.clearArray(I),
                        !0
                }
        return cr.clearArray(I),
        !1
    }
    ,
    i.prototype.testRectOverlap = function(t, e) {
        if (!e || !e.collisionsEnabled)
            return !1;
        e.update_bbox();
        e.layer;
        if (!e.bbox.intersects_rect(t))
            return !1;
        if (e.tilemap_exists) {
            e.getCollisionRectCandidates(t, I);
            for (var i, s, n = I, r = e.x, o = e.y, a = 0, h = n.length; a < h; ++a)
                if (s = (i = n[a]).rc,
                t.intersects_rect_off(s, r, o)) {
                    if (!i.poly)
                        return cr.clearArray(I),
                        !0;
                    if (this.temp_poly.set_from_rect(t, 0, 0),
                    i.poly.intersects_poly(this.temp_poly, -(r + s.left), -(o + s.top)))
                        return cr.clearArray(I),
                        !0
                }
            return cr.clearArray(I),
            !1
        }
        return p.set_from_rect(t),
        !!e.bquad.intersects_quad(p) && (!(e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle),
        p.offset(-t.left, -t.top),
        this.temp_poly.set_from_quad(p, 0, 0, 1, 1),
        e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
    }
    ,
    i.prototype.testSegmentOverlap = function(t, e, i, s, n) {
        if (!n || !n.collisionsEnabled)
            return !1;
        n.update_bbox();
        n.layer;
        if (O.set(cr.min(t, i), cr.min(e, s), cr.max(t, i), cr.max(e, s)),
        !n.bbox.intersects_rect(O))
            return !1;
        if (n.tilemap_exists) {
            n.getCollisionRectCandidates(O, I);
            for (var r, o, a = I, h = n.x, c = n.y, l = 0, u = a.length; l < u; ++l)
                if (r = a[l],
                o = r.rc,
                O.intersects_rect_off(o, h, c) && (p.set_from_rect(o),
                p.offset(h, c),
                p.intersects_segment(t, e, i, s))) {
                    if (!r.poly)
                        return cr.clearArray(I),
                        !0;
                    if (r.poly.intersects_segment(h + o.left, c + o.top, t, e, i, s))
                        return cr.clearArray(I),
                        !0
                }
            return cr.clearArray(I),
            !1
        }
        return !!n.bquad.intersects_segment(t, e, i, s) && (!(n.collision_poly && !n.collision_poly.is_empty()) || (n.collision_poly.cache_poly(n.width, n.height, n.angle),
        n.collision_poly.intersects_segment(n.x, n.y, t, e, i, s)))
    }
    ,
    i.prototype.typeHasBehavior = function(t, e) {
        if (!e)
            return !1;
        for (var i, s, n, r = 0, o = t.behaviors.length; r < o; r++)
            if (t.behaviors[r].behavior instanceof e)
                return !0;
        if (!t.is_family)
            for (r = 0,
            o = t.families.length; r < o; r++)
                for (i = 0,
                s = (n = t.families[r]).behaviors.length; i < s; i++)
                    if (n.behaviors[i].behavior instanceof e)
                        return !0;
        return !1
    }
    ,
    i.prototype.typeHasNoSaveBehavior = function(t) {
        return this.typeHasBehavior(t, cr.behaviors.NoSave)
    }
    ,
    i.prototype.typeHasPersistBehavior = function(t) {
        return this.typeHasBehavior(t, cr.behaviors.Persist)
    }
    ,
    i.prototype.getSolidBehavior = function() {
        return this.solidBehavior
    }
    ,
    i.prototype.getJumpthruBehavior = function() {
        return this.jumpthruBehavior
    }
    ;
    var o = [];
    i.prototype.testOverlapSolid = function(t) {
        var e, i, s;
        for (t.update_bbox(),
        this.getSolidCollisionCandidates(t.layer, t.bbox, o),
        e = 0,
        i = o.length; e < i; ++e)
            if (s = o[e],
            s.extra.solidEnabled && this.testOverlap(t, s))
                return cr.clearArray(o),
                s;
        return cr.clearArray(o),
        null
    }
    ,
    i.prototype.testRectOverlapSolid = function(t) {
        var e, i, s;
        for (this.getSolidCollisionCandidates(null, t, o),
        e = 0,
        i = o.length; e < i; ++e)
            if (s = o[e],
            s.extra.solidEnabled && this.testRectOverlap(t, s))
                return cr.clearArray(o),
                s;
        return cr.clearArray(o),
        null
    }
    ;
    var a = [];
    i.prototype.testOverlapJumpThru = function(t, e) {
        var i, s, n, r = null;
        for (e && (r = a,
        cr.clearArray(r)),
        t.update_bbox(),
        this.getJumpthruCollisionCandidates(t.layer, t.bbox, o),
        i = 0,
        s = o.length; i < s; ++i)
            if (n = o[i],
            n.extra.jumpthruEnabled && this.testOverlap(t, n)) {
                if (!e)
                    return cr.clearArray(o),
                    n;
                r.push(n)
            }
        return cr.clearArray(o),
        r
    }
    ,
    i.prototype.pushOutSolid = function(t, e, i, s, n, r) {
        for (var o = s || 50, a = t.x, h = t.y, c = null, l = null, u = 0; u < o; u++)
            if (t.x = a + e * u,
            t.y = h + i * u,
            t.set_bbox_changed(),
            !this.testOverlap(t, c) && (c = this.testOverlapSolid(t),
            c && (l = c),
            !c && (n && (c = r ? this.testOverlap(t, r) ? r : null : this.testOverlapJumpThru(t)) && (l = c),
            !c)))
                return l && this.pushInFractional(t, e, i, l, 16),
                !0;
        return t.x = a,
        t.y = h,
        t.set_bbox_changed(),
        !1
    }
    ,
    i.prototype.pushOutSolidAxis = function(t, e, i, s) {
        s = s || 50;
        for (var n, r, o = t.x, a = t.y, h = null, c = null, l = 0; l < s; ++l)
            for (n = 0; n < 2; ++n)
                if (r = 2 * n - 1,
                t.x = o + e * l * r,
                t.y = a + i * l * r,
                t.set_bbox_changed(),
                !this.testOverlap(t, h)) {
                    if (!(h = this.testOverlapSolid(t)))
                        return c && this.pushInFractional(t, e * r, i * r, c, 16),
                        !0;
                    c = h
                }
        return t.x = o,
        t.y = a,
        t.set_bbox_changed(),
        !1
    }
    ,
    i.prototype.pushOut = function(t, e, i, s, n) {
        for (var r = s || 50, o = t.x, a = t.y, h = 0; h < r; h++)
            if (t.x = o + e * h,
            t.y = a + i * h,
            t.set_bbox_changed(),
            !this.testOverlap(t, n))
                return !0;
        return t.x = o,
        t.y = a,
        t.set_bbox_changed(),
        !1
    }
    ,
    i.prototype.pushInFractional = function(t, e, i, s, n) {
        for (var r, o = 2, a = !1, h = !1, c = t.x, l = t.y; o <= n; )
            r = 1 / o,
            o *= 2,
            t.x += e * r * (a ? 1 : -1),
            t.y += i * r * (a ? 1 : -1),
            t.set_bbox_changed(),
            this.testOverlap(t, s) ? h = a = !0 : (h = a = !1,
            c = t.x,
            l = t.y);
        h && (t.x = c,
        t.y = l,
        t.set_bbox_changed())
    }
    ,
    i.prototype.pushOutSolidNearest = function(t, e) {
        var i = cr.is_undefined(e) ? 100 : e
          , s = 0
          , n = t.x
          , r = t.y
          , o = 0
          , a = 0
          , h = 0
          , c = this.testOverlapSolid(t);
        if (!c)
            return !0;
        for (; s <= i; ) {
            switch (o) {
            case 0:
                a = 0,
                h = -1,
                s++;
                break;
            case 1:
                h = -(a = 1);
                break;
            case 2:
                a = 1,
                h = 0;
                break;
            case 3:
                h = a = 1;
                break;
            case 4:
                a = 0,
                h = 1;
                break;
            case 5:
                a = -1,
                h = 1;
                break;
            case 6:
                a = -1,
                h = 0;
                break;
            case 7:
                h = a = -1
            }
            if (o = (o + 1) % 8,
            t.x = cr.floor(n + a * s),
            t.y = cr.floor(r + h * s),
            t.set_bbox_changed(),
            !this.testOverlap(t, c) && !(c = this.testOverlapSolid(t)))
                return !0
        }
        return t.x = n,
        t.y = r,
        t.set_bbox_changed(),
        !1
    }
    ,
    i.prototype.registerCollision = function(t, e) {
        t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
    }
    ,
    i.prototype.addRegisteredCollisionCandidates = function(t, e, i) {
        for (var s, n, r = 0, o = this.registered_collisions.length; r < o; ++r) {
            if ((s = this.registered_collisions[r])[0] === t)
                n = s[1];
            else {
                if (s[1] !== t)
                    continue;
                n = s[0]
            }
            if (e.is_family) {
                if (-1 === e.members.indexOf(e))
                    continue
            } else if (n.type !== e)
                continue;
            -1 === i.indexOf(n) && i.push(n)
        }
    }
    ,
    i.prototype.checkRegisteredCollision = function(t, e) {
        for (var i, s = 0, n = this.registered_collisions.length; s < n; s++)
            if ((i = this.registered_collisions[s])[0] === t && i[1] === e || i[0] === e && i[1] === t)
                return !0;
        return !1
    }
    ,
    i.prototype.calculateSolidBounceAngle = function(t, e, i, s) {
        var n = t.x
          , r = t.y
          , o = cr.max(10, cr.distanceTo(e, i, n, r))
          , a = cr.angleTo(e, i, n, r)
          , h = s || this.testOverlapSolid(t);
        if (!h)
            return cr.clamp_angle(a + cr.PI);
        for (var c, l, u, p = h, d = cr.to_radians(5), f = 1; f < 36; f++)
            if (c = a - f * d,
            t.x = e + Math.cos(c) * o,
            t.y = i + Math.sin(c) * o,
            t.set_bbox_changed(),
            !this.testOverlap(t, p) && !(p = s ? null : this.testOverlapSolid(t))) {
                l = c;
                break
            }
        36 === f && (l = cr.clamp_angle(a + cr.PI));
        p = h;
        for (f = 1; f < 36; f++)
            if (c = a + f * d,
            t.x = e + Math.cos(c) * o,
            t.y = i + Math.sin(c) * o,
            t.set_bbox_changed(),
            !this.testOverlap(t, p) && !(p = s ? null : this.testOverlapSolid(t))) {
                u = c;
                break
            }
        if (36 === f && (u = cr.clamp_angle(a + cr.PI)),
        t.x = n,
        t.y = r,
        t.set_bbox_changed(),
        u === l)
            return u;
        var y = cr.angleDiff(u, l) / 2
          , g = cr.angleClockwise(u, l) ? cr.clamp_angle(l + y + cr.PI) : cr.clamp_angle(u + y)
          , h = Math.cos(a)
          , n = Math.sin(a)
          , r = Math.cos(g)
          , y = Math.sin(g)
          , g = h * r + n * y
          , r = h - 2 * g * r
          , y = n - 2 * g * y;
        return cr.angleTo(0, 0, r, y)
    }
    ;
    var P = -1;
    function l() {
        try {
            return window.indexedDB
        } catch (t) {
            return
        }
    }
    function E(t) {
        t.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }
    function B() {
        cr.logexport("Reloading for continuous preview"),
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }
    function R(t) {
        var e, i = {};
        for (e in t)
            t.hasOwnProperty(e) && (t[e]instanceof cr.ObjectSet || t[e] && void 0 !== t[e].c2userdata || "spriteCreatedDestroyCallback" !== e && (i[e] = t[e]));
        return i
    }
    i.prototype.trigger = function(t, e, i) {
        if (!this.running_layout)
            return !1;
        var s = this.running_layout.event_sheet;
        if (!s)
            return !1;
        var n, r = !1;
        P++;
        for (var o = s.deep_includes, a = 0, h = o.length; a < h; ++a)
            n = this.triggerOnSheet(t, e, o[a], i),
            r = r || n;
        return n = this.triggerOnSheet(t, e, s, i),
        P--,
        r = r || n
    }
    ,
    i.prototype.triggerOnSheet = function(t, e, i, s) {
        var n, r, o, a, h = !1;
        if (e)
            for (o = this.triggerOnSheetForTypeName(t, e, e.type.name, i, s),
            h = h || o,
            n = 0,
            r = (a = e.type.families).length; n < r; ++n)
                o = this.triggerOnSheetForTypeName(t, e, a[n].name, i, s),
                h = h || o;
        else
            o = this.triggerOnSheetForTypeName(t, e, "system", i, s),
            h = h || o;
        return h
    }
    ,
    i.prototype.triggerOnSheetForTypeName = function(t, e, i, s, n) {
        var r, o, a, h = !1, c = void 0 !== n, l = (c ? s.fasttriggers : s.triggers)[i];
        if (!l)
            return h;
        for (var u, p = null, d = 0, f = l.length; d < f; ++d)
            if (l[d].method == t) {
                p = l[d].evs;
                break
            }
        if (!p)
            return h;
        if (!(u = c ? p[n] : p))
            return null;
        for (d = 0,
        f = u.length; d < f; d++)
            o = u[d][0],
            a = u[d][1],
            r = this.executeSingleTrigger(e, i, o, a),
            h = h || r;
        return h
    }
    ,
    i.prototype.executeSingleTrigger = function(t, e, i, s) {
        var n, r, o = !1;
        this.trigger_depth++;
        var a = this.getCurrentEventStack().current_event;
        a && this.pushCleanSol(a.solModifiersIncludingParents);
        var h = 1 < this.trigger_depth;
        this.pushCleanSol(i.solModifiersIncludingParents),
        h && this.pushLocalVarStack();
        var c, l = this.pushEventStack(i);
        l.current_event = i,
        t && ((c = this.types[e].getCurrentSol()).select_all = !1,
        cr.clearArray(c.instances),
        c.instances[0] = t,
        this.types[e].applySolToContainer());
        var u = !0;
        if (i.parent) {
            for (var p = l.temp_parents_arr, d = i.parent; d; )
                p.push(d),
                d = d.parent;
            for (p.reverse(),
            n = 0,
            r = p.length; n < r; n++)
                if (!p[n].run_pretrigger()) {
                    u = !1;
                    break
                }
        }
        return u && (this.execcount++,
        i.orblock ? i.run_orblocktrigger(s) : i.run(),
        o = o || l.last_event_true),
        this.popEventStack(),
        h && this.popLocalVarStack(),
        this.popSol(i.solModifiersIncludingParents),
        a && this.popSol(a.solModifiersIncludingParents),
        this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === P && !this.isRunningEvents && this.ClearDeathRow(),
        this.trigger_depth--,
        o
    }
    ,
    i.prototype.getCurrentCondition = function() {
        var t = this.getCurrentEventStack();
        return t.current_event.conditions[t.cndindex]
    }
    ,
    i.prototype.getCurrentConditionObjectType = function() {
        return this.getCurrentCondition().type
    }
    ,
    i.prototype.isCurrentConditionFirst = function() {
        return 0 === this.getCurrentEventStack().cndindex
    }
    ,
    i.prototype.getCurrentAction = function() {
        var t = this.getCurrentEventStack();
        return t.current_event.actions[t.actindex]
    }
    ,
    i.prototype.pushLocalVarStack = function() {
        this.localvar_stack_index++,
        this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
    }
    ,
    i.prototype.popLocalVarStack = function() {
        this.localvar_stack_index--
    }
    ,
    i.prototype.getCurrentLocalVarStack = function() {
        return this.localvar_stack[this.localvar_stack_index]
    }
    ,
    i.prototype.pushEventStack = function(t) {
        this.event_stack_index++,
        this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
        var e = this.getCurrentEventStack();
        return e.reset(t),
        e
    }
    ,
    i.prototype.popEventStack = function() {
        this.event_stack_index--
    }
    ,
    i.prototype.getCurrentEventStack = function() {
        return this.event_stack[this.event_stack_index]
    }
    ,
    i.prototype.pushLoopStack = function(t) {
        this.loop_stack_index++,
        this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
            name: t,
            index: 0,
            stopped: !1
        }));
        var e = this.getCurrentLoop();
        return e.name = t,
        e.index = 0,
        e.stopped = !1,
        e
    }
    ,
    i.prototype.popLoopStack = function() {
        this.loop_stack_index--
    }
    ,
    i.prototype.getCurrentLoop = function() {
        return this.loop_stack[this.loop_stack_index]
    }
    ,
    i.prototype.getEventVariableByName = function(t, e) {
        for (var i, s, n, r, o, a; e; ) {
            for (i = 0,
            s = e.subevents.length; i < s; i++)
                if ((a = e.subevents[i])instanceof cr.eventvariable && cr.equals_nocase(t, a.name))
                    return a;
            e = e.parent
        }
        for (i = 0,
        s = this.eventsheets_by_index.length; i < s; i++)
            for (n = 0,
            r = (o = this.eventsheets_by_index[i]).events.length; n < r; n++)
                if ((a = o.events[n])instanceof cr.eventvariable && cr.equals_nocase(t, a.name))
                    return a;
        return null
    }
    ,
    i.prototype.getLayoutBySid = function(t) {
        for (var e = 0, i = this.layouts_by_index.length; e < i; e++)
            if (this.layouts_by_index[e].sid === t)
                return this.layouts_by_index[e];
        return null
    }
    ,
    i.prototype.getObjectTypeBySid = function(t) {
        for (var e = 0, i = this.types_by_index.length; e < i; e++)
            if (this.types_by_index[e].sid === t)
                return this.types_by_index[e];
        return null
    }
    ,
    i.prototype.getGroupBySid = function(t) {
        for (var e = 0, i = this.allGroups.length; e < i; e++)
            if (this.allGroups[e].sid === t)
                return this.allGroups[e];
        return null
    }
    ,
    i.prototype.doCanvasSnapshot = function(t, e) {
        this.snapshotCanvas = [t, e],
        this.redraw = !0
    }
    ,
    i.prototype.signalContinuousPreview = function() {
        this.signalledContinuousPreview = !0
    }
    ,
    i.prototype.handleSaveLoad = function() {
        var i = this
          , t = this.saveToSlot
          , s = this.lastSaveJson
          , e = this.loadFromSlot
          , n = !1;
        if (this.signalledContinuousPreview && (n = !0,
        t = "__c2_continuouspreview",
        this.signalledContinuousPreview = !1),
        t.length) {
            if (this.ClearDeathRow(),
            s = this.saveToJSONString(),
            l() && !this.isCocoonJs)
                !function(e, i, s, n) {
                    try {
                        var t = indexedDB.open("_C2SaveStates");
                        t.onupgradeneeded = E,
                        t.onerror = n,
                        t.onsuccess = function(t) {
                            t = t.target.result;
                            t.onerror = n,
                            t.transaction(["saves"], "readwrite").objectStore("saves").put({
                                slot: e,
                                data: i
                            }).onsuccess = s
                        }
                    } catch (t) {
                        n(t)
                    }
                }(t, s, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + s.length + " bytes)"),
                    i.lastSaveJson = s,
                    i.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null),
                    i.lastSaveJson = "",
                    n && B()
                }, function(e) {
                    try {
                        localStorage.setItem("__c2save_" + t, s),
                        cr.logexport("Saved state to WebStorage (" + s.length + " bytes)"),
                        i.lastSaveJson = s,
                        i.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null),
                        i.lastSaveJson = "",
                        n && B()
                    } catch (t) {
                        cr.logexport("Failed to save game state: " + e + "; " + t),
                        i.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                });
            else
                try {
                    localStorage.setItem("__c2save_" + t, s),
                    cr.logexport("Saved state to WebStorage (" + s.length + " bytes)"),
                    i.lastSaveJson = s,
                    this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null),
                    i.lastSaveJson = "",
                    n && B()
                } catch (t) {
                    cr.logexport("Error saving to WebStorage: " + t),
                    i.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
            this.saveToSlot = "",
            this.loadFromSlot = "",
            this.loadFromJson = null
        }
        if (e.length) {
            if (l() && !this.isCocoonJs)
                !function(i, s, n) {
                    try {
                        var t = indexedDB.open("_C2SaveStates");
                        t.onupgradeneeded = E,
                        t.onerror = n,
                        t.onsuccess = function(t) {
                            t = t.target.result;
                            t.onerror = n;
                            var e = t.transaction(["saves"]).objectStore("saves").get(i);
                            e.onsuccess = function(t) {
                                e.result ? s(e.result.data) : s(null)
                            }
                        }
                    } catch (t) {
                        n(t)
                    }
                }(e, function(t) {
                    t ? (i.loadFromJson = t,
                    cr.logexport("Loaded state from IndexedDB storage (" + i.loadFromJson.length + " bytes)")) : (i.loadFromJson = localStorage.getItem("__c2save_" + e) || "",
                    cr.logexport("Loaded state from WebStorage (" + i.loadFromJson.length + " bytes)")),
                    i.suspendDrawing = !1,
                    i.loadFromJson || (i.loadFromJson = null,
                    i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }, function(t) {
                    i.loadFromJson = localStorage.getItem("__c2save_" + e) || "",
                    cr.logexport("Loaded state from WebStorage (" + i.loadFromJson.length + " bytes)"),
                    i.suspendDrawing = !1,
                    i.loadFromJson || (i.loadFromJson = null,
                    i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                });
            else {
                try {
                    this.loadFromJson = localStorage.getItem("__c2save_" + e) || "",
                    cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                } catch (t) {
                    this.loadFromJson = null
                }
                this.suspendDrawing = !1,
                i.loadFromJson || (i.loadFromJson = null,
                i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
            }
            this.loadFromSlot = "",
            this.saveToSlot = ""
        }
        null !== this.loadFromJson && (this.ClearDeathRow(),
        this.loadFromJSONString(this.loadFromJson) ? (this.lastSaveJson = this.loadFromJson,
        this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null),
        this.lastSaveJson = "") : i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null),
        this.loadFromJson = null)
    }
    ,
    i.prototype.saveToJSONString = function() {
        for (var t, e, i, s, n, r, o, a, h, c, l = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.kahanTime.sum,
                walltime: this.wallTime.sum,
                timescale: this.timescale,
                tickcount: this.tickcount,
                execcount: this.execcount,
                next_uid: this.next_uid,
                running_layout: this.running_layout.sid,
                start_time_offset: Date.now() - this.start_time
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        }, u = 0, p = this.types_by_index.length; u < p; u++)
            if (!(i = this.types_by_index[u]).is_family && !this.typeHasNoSaveBehavior(i)) {
                for (n = {
                    instances: []
                },
                cr.hasAnyOwnProperty(i.extra) && (n.ex = R(i.extra)),
                t = 0,
                e = i.instances.length; t < e; t++)
                    n.instances.push(this.saveInstanceToJSON(i.instances[t]));
                l.types[i.sid.toString()] = n
            }
        for (u = 0,
        p = this.layouts_by_index.length; u < p; u++)
            s = this.layouts_by_index[u],
            l.layouts[s.sid.toString()] = s.saveToJSON();
        var d = l.events.groups;
        for (u = 0,
        p = this.allGroups.length; u < p; u++)
            d[(r = this.allGroups[u]).sid.toString()] = this.groups_by_name[r.group_name].group_active;
        var f = l.events.cnds;
        for (c in this.cndsBySid)
            this.cndsBySid.hasOwnProperty(c) && (o = this.cndsBySid[c],
            cr.hasAnyOwnProperty(o.extra) && (f[c] = {
                ex: R(o.extra)
            }));
        var y = l.events.acts;
        for (c in this.actsBySid)
            this.actsBySid.hasOwnProperty(c) && (a = this.actsBySid[c],
            cr.hasAnyOwnProperty(a.extra) && (y[c] = {
                ex: R(a.extra)
            }));
        var g = l.events.vars;
        for (c in this.varsBySid)
            this.varsBySid.hasOwnProperty(c) && ((h = this.varsBySid[c]).is_constant || h.parent && !h.is_static || (g[c] = h.data));
        return l.system = this.system.saveToJSON(),
        JSON.stringify(l)
    }
    ,
    i.prototype.refreshUidMap = function() {
        var t, e, i, s, n, r;
        for (this.objectsByUid = {},
        t = 0,
        e = this.types_by_index.length; t < e; t++)
            if (!(i = this.types_by_index[t]).is_family)
                for (s = 0,
                n = i.instances.length; s < n; s++)
                    r = i.instances[s],
                    this.objectsByUid[r.uid.toString()] = r
    }
    ,
    i.prototype.loadFromJSONString = function(t) {
        var e;
        try {
            e = JSON.parse(t)
        } catch (t) {
            return !1
        }
        if (!e.c2save)
            return !1;
        if (1 < e.version)
            return !1;
        this.isLoadingState = !0;
        var i = e.rt;
        this.kahanTime.reset(),
        this.kahanTime.sum = i.time,
        this.wallTime.reset(),
        this.wallTime.sum = i.walltime || 0,
        this.timescale = i.timescale,
        this.tickcount = i.tickcount,
        this.execcount = i.execcount,
        this.start_time = Date.now() - i.start_time_offset;
        var s, n, r, o, a, h, c, l, u, p, d, f, y, g, m, _, v, b = i.running_layout;
        if (b !== this.running_layout.sid) {
            b = this.getLayoutBySid(b);
            if (!b)
                return;
            this.doChangeLayout(b)
        }
        var w = e.types;
        for (c in w)
            if (w.hasOwnProperty(c) && (l = this.getObjectTypeBySid(parseInt(c, 10))) && !l.is_family && !this.typeHasNoSaveBehavior(l)) {
                for (w[c].ex ? l.extra = w[c].ex : cr.wipe(l.extra),
                u = l.instances,
                p = w[c].instances,
                s = 0,
                n = cr.min(u.length, p.length); s < n; s++)
                    this.loadInstanceFromJSON(u[s], p[s]);
                for (s = p.length,
                n = u.length; s < n; s++)
                    this.DestroyInstance(u[s]);
                for (s = u.length,
                n = p.length; s < n; s++)
                    g = null,
                    l.plugin.is_world && !(g = this.running_layout.getLayerBySid(p[s].w.l)) || (d = this.createInstanceFromInit(l.default_instance, g, !1, 0, 0, !0),
                    this.loadInstanceFromJSON(d, p[s]));
                l.stale_iids = !0
            }
        this.ClearDeathRow(),
        this.refreshUidMap();
        var x = e.layouts;
        for (c in x)
            x.hasOwnProperty(c) && (y = this.getLayoutBySid(parseInt(c, 10))) && y.loadFromJSON(x[c]);
        var S = e.events.groups;
        for (c in S)
            S.hasOwnProperty(c) && (m = this.getGroupBySid(parseInt(c, 10))) && this.groups_by_name[m.group_name] && this.groups_by_name[m.group_name].setGroupActive(S[c]);
        var T = e.events.cnds;
        for (c in this.cndsBySid)
            this.cndsBySid.hasOwnProperty(c) && (T.hasOwnProperty(c) ? this.cndsBySid[c].extra = T[c].ex : this.cndsBySid[c].extra = {});
        var A = e.events.acts;
        for (c in this.actsBySid)
            this.actsBySid.hasOwnProperty(c) && (A.hasOwnProperty(c) ? this.actsBySid[c].extra = A[c].ex : this.actsBySid[c].extra = {});
        var C = e.events.vars;
        for (c in C)
            C.hasOwnProperty(c) && this.varsBySid.hasOwnProperty(c) && (this.varsBySid[c].data = C[c]);
        for (this.next_uid = i.next_uid,
        this.isLoadingState = !1,
        s = 0,
        n = this.fireOnCreateAfterLoad.length; s < n; ++s)
            d = this.fireOnCreateAfterLoad[s],
            this.trigger(Object.getPrototypeOf(d.type.plugin).cnds.OnCreated, d);
        for (cr.clearArray(this.fireOnCreateAfterLoad),
        this.system.loadFromJSON(e.system),
        s = 0,
        n = this.types_by_index.length; s < n; s++)
            if (!(l = this.types_by_index[s]).is_family && !this.typeHasNoSaveBehavior(l))
                for (r = 0,
                o = l.instances.length; r < o; r++) {
                    if (d = l.instances[r],
                    l.is_contained)
                        for (_ = d.get_iid(),
                        cr.clearArray(d.siblings),
                        a = 0,
                        h = l.container.length; a < h; a++)
                            l !== (v = l.container[a]) && d.siblings.push(v.instances[_]);
                    if (d.afterLoad && d.afterLoad(),
                    d.behavior_insts)
                        for (a = 0,
                        h = d.behavior_insts.length; a < h; a++)
                            (f = d.behavior_insts[a]).afterLoad && f.afterLoad()
                }
        return this.redraw = !0
    }
    ,
    i.prototype.saveInstanceToJSON = function(t, e) {
        var i, s, n, r, o, a = t.type, h = a.plugin, c = {};
        if (e ? c.c2 = !0 : c.uid = t.uid,
        cr.hasAnyOwnProperty(t.extra) && (c.ex = R(t.extra)),
        t.instance_vars && t.instance_vars.length)
            for (c.ivs = {},
            i = 0,
            s = t.instance_vars.length; i < s; i++)
                c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
        if (h.is_world) {
            if (n = {
                x: t.x,
                y: t.y,
                w: t.width,
                h: t.height,
                l: t.layer.sid,
                zi: t.get_zindex()
            },
            0 !== t.angle && (n.a = t.angle),
            1 !== t.opacity && (n.o = t.opacity),
            .5 !== t.hotspotX && (n.hX = t.hotspotX),
            .5 !== t.hotspotY && (n.hY = t.hotspotY),
            0 !== t.blend_mode && (n.bm = t.blend_mode),
            t.visible || (n.v = t.visible),
            t.collisionsEnabled || (n.ce = t.collisionsEnabled),
            -1 !== t.my_timescale && (n.mts = t.my_timescale),
            a.effect_types.length)
                for (n.fx = [],
                i = 0,
                s = a.effect_types.length; i < s; i++)
                    o = a.effect_types[i],
                    n.fx.push({
                        name: o.name,
                        active: t.active_effect_flags[o.index],
                        params: t.effect_params[o.index]
                    });
            c.w = n
        }
        if (t.behavior_insts && t.behavior_insts.length)
            for (c.behs = {},
            i = 0,
            s = t.behavior_insts.length; i < s; i++)
                (r = t.behavior_insts[i]).saveToJSON && (c.behs[r.type.sid.toString()] = r.saveToJSON());
        return t.saveToJSON && (c.data = t.saveToJSON()),
        c
    }
    ,
    i.prototype.getInstanceVarIndexBySid = function(t, e) {
        for (var i = 0, s = t.instvar_sids.length; i < s; i++)
            if (t.instvar_sids[i] === e)
                return i;
        return -1
    }
    ,
    i.prototype.getBehaviorIndexBySid = function(t, e) {
        for (var i = 0, s = t.behavior_insts.length; i < s; i++)
            if (t.behavior_insts[i].type.sid === e)
                return i;
        return -1
    }
    ,
    i.prototype.loadInstanceFromJSON = function(t, e, i) {
        var s, n, r, o, a, h, c, l, u, p, d = t.type, f = d.plugin;
        if (i) {
            if (!e.c2)
                return
        } else
            t.uid = e.uid;
        if (e.ex ? t.extra = e.ex : cr.wipe(t.extra),
        a = e.ivs)
            for (s in a)
                a.hasOwnProperty(s) && ((o = this.getInstanceVarIndexBySid(d, parseInt(s, 10))) < 0 || o >= t.instance_vars.length || (null === (p = a[s]) && (p = NaN),
                t.instance_vars[o] = p));
        if (f.is_world) {
            if (h = e.w,
            t.layer.sid !== h.l && (f = t.layer,
            t.layer = this.running_layout.getLayerBySid(h.l),
            t.layer ? (f.removeFromInstanceList(t, !0),
            t.layer.appendToInstanceList(t, !0),
            t.set_bbox_changed(),
            t.layer.setZIndicesStaleFrom(0)) : (t.layer = f,
            i || this.DestroyInstance(t))),
            t.x = h.x,
            t.y = h.y,
            t.width = h.w,
            t.height = h.h,
            t.zindex = h.zi,
            t.angle = h.hasOwnProperty("a") ? h.a : 0,
            t.opacity = h.hasOwnProperty("o") ? h.o : 1,
            t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5,
            t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5,
            t.visible = !h.hasOwnProperty("v") || h.v,
            t.collisionsEnabled = !h.hasOwnProperty("ce") || h.ce,
            t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1,
            t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0,
            t.compositeOp = cr.effectToCompositeOp(t.blend_mode),
            this.gl && cr.setGLBlend(t, t.blend_mode, this.gl),
            t.set_bbox_changed(),
            h.hasOwnProperty("fx"))
                for (n = 0,
                r = h.fx.length; n < r; n++)
                    (c = d.getEffectIndexByName(h.fx[n].name)) < 0 || (t.active_effect_flags[c] = h.fx[n].active,
                    t.effect_params[c] = h.fx[n].params);
            t.updateActiveEffects()
        }
        if (l = e.behs)
            for (s in l)
                l.hasOwnProperty(s) && ((u = this.getBehaviorIndexBySid(t, parseInt(s, 10))) < 0 || t.behavior_insts[u].loadFromJSON(l[s]));
        e.data && t.loadFromJSON(e.data)
    }
    ,
    i.prototype.fetchLocalFileViaCordova = function(t, e, i) {
        t = cordova.file.applicationDirectory + "www/" + t;
        window.resolveLocalFileSystemURL(t, function(t) {
            t.file(e, i)
        }, i)
    }
    ,
    i.prototype.fetchLocalFileViaCordovaAsText = function(t, i, s) {
        this.fetchLocalFileViaCordova(t, function(t) {
            var e = new FileReader;
            e.onload = function(t) {
                i(t.target.result)
            }
            ,
            e.onerror = s,
            e.readAsText(t)
        }, s)
    }
    ;
    var L = []
      , M = 0;
    i.prototype.maybeStartNextArrayBufferRead = function() {
        var t;
        L.length && (8 <= M || (M++,
        t = L.shift(),
        this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)))
    }
    ,
    i.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
        var s = this;
        L.push({
            filename: t,
            successCallback: function(t) {
                M--,
                s.maybeStartNextArrayBufferRead(),
                e(t)
            },
            errorCallback: function(t) {
                M--,
                s.maybeStartNextArrayBufferRead(),
                i(t)
            }
        }),
        this.maybeStartNextArrayBufferRead()
    }
    ,
    i.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, i, e) {
        this.fetchLocalFileViaCordova(t, function(t) {
            var e = new FileReader;
            e.onload = function(t) {
                i(t.target.result)
            }
            ,
            e.readAsArrayBuffer(t)
        }, e)
    }
    ,
    i.prototype.fetchLocalFileViaCordovaAsURL = function(t, e, i) {
        var s = ""
          , n = t.toLowerCase()
          , r = n.substr(n.length - 4)
          , n = n.substr(n.length - 5);
        ".mp4" === r ? s = "video/mp4" : ".webm" === n ? s = "video/webm" : ".m4a" === r ? s = "audio/mp4" : ".mp3" === r && (s = "audio/mpeg"),
        this.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
            t = new Blob([t],{
                type: s
            }),
            t = URL.createObjectURL(t);
            e(t)
        }, i)
    }
    ,
    i.prototype.isAbsoluteUrl = function(t) {
        return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
    }
    ,
    i.prototype.setImageSrc = function(e, t) {
        this.isWKWebView && !this.isAbsoluteUrl(t) ? this.fetchLocalFileViaCordovaAsURL(t, function(t) {
            e.src = t
        }, function(t) {
            alert("Failed to load image: " + t)
        }) : e.src = t
    }
    ,
    i.prototype.setCtxImageSmoothingEnabled = function(t, e) {
        void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e,
        t.mozImageSmoothingEnabled = e,
        t.msImageSmoothingEnabled = e)
    }
    ,
    cr.runtime = i,
    cr.createRuntime = function(t) {
        return new i(document.getElementById(t))
    }
    ,
    cr.createDCRuntime = function(t, e) {
        return new i({
            dc: !0,
            width: t,
            height: e
        })
    }
    ,
    window.cr_createRuntime = cr.createRuntime,
    window.cr_createDCRuntime = cr.createDCRuntime,
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var t = document.createElement("screencanvas") || document.createElement("canvas");
        t.screencanvas = !0,
        document.body.appendChild(t);
        t = new i(t);
        return window.c2runtime = t,
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        }),
        window.c2runtime.setSize(window.innerWidth, window.innerHeight),
        t
    }
    ,
    window.createEjectaRuntime = function() {
        var t = new i(document.getElementById("canvas"));
        return window.c2runtime = t,
        window.c2runtime.setSize(window.innerWidth, window.innerHeight),
        t
    }
}(),
window.cr_getC2Runtime = function() {
    var t = document.getElementById("c2canvas");
    return t ? t.c2runtime : window.c2runtime || null
}
,
window.cr_getSnapshot = function(t, e) {
    var i = window.cr_getC2Runtime();
    i && i.doCanvasSnapshot(t, e)
}
,
window.cr_sizeCanvas = function(t, e) {
    var i;
    0 === t || 0 === e || (i = window.cr_getC2Runtime()) && i.setSize(t, e)
}
,
window.cr_setSuspended = function(t) {
    var e = window.cr_getC2Runtime();
    e && e.setSuspended(t)
}
,
function() {
    function t(t, e) {
        this.runtime = t,
        this.event_sheet = null,
        this.scrollX = this.runtime.original_width / 2,
        this.scrollY = this.runtime.original_height / 2,
        this.scale = 1,
        this.angle = 0,
        this.first_visit = !0,
        this.name = e[0],
        this.originalWidth = e[1],
        this.originalHeight = e[2],
        this.width = e[1],
        this.height = e[2],
        this.unbounded_scrolling = e[3],
        this.sheetname = e[4],
        this.sid = e[5];
        var i, s, n = e[6];
        for (this.layers = [],
        this.initial_types = [],
        i = 0,
        s = n.length; i < s; i++) {
            var r = new cr.layer(this,n[i]);
            r.number = i,
            cr.seal(r),
            this.layers.push(r)
        }
        var o = e[7];
        for (this.initial_nonworld = [],
        i = 0,
        s = o.length; i < s; i++) {
            var a = o[i]
              , h = this.runtime.types_by_index[a[1]];
            h.default_instance || (h.default_instance = a),
            this.initial_nonworld.push(a),
            -1 === this.initial_types.indexOf(h) && this.initial_types.push(h)
        }
        for (this.effect_types = [],
        this.active_effect_types = [],
        this.shaders_preserve_opaqueness = !0,
        this.effect_params = [],
        i = 0,
        s = e[8].length; i < s; i++)
            this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }),
            this.effect_params.push(e[8][i][2].slice(0));
        this.updateActiveEffects(),
        this.rcTex = new cr.rect(0,0,1,1),
        this.rcTex2 = new cr.rect(0,0,1,1),
        this.persist_data = {}
    }
    t.prototype.saveObjectToPersist = function(t) {
        var e = t.type.sid.toString();
        this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []),
        this.persist_data[e].push(this.runtime.saveInstanceToJSON(t))
    }
    ,
    t.prototype.hasOpaqueBottomLayer = function() {
        var t = this.layers[0];
        return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
    }
    ,
    t.prototype.updateActiveEffects = function() {
        var t, e, i;
        for (cr.clearArray(this.active_effect_types),
        this.shaders_preserve_opaqueness = !0,
        t = 0,
        e = this.effect_types.length; t < e; t++)
            (i = this.effect_types[t]).active && (this.active_effect_types.push(i),
            i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
    }
    ,
    t.prototype.getEffectByName = function(t) {
        for (var e, i = 0, s = this.effect_types.length; i < s; i++)
            if ((e = this.effect_types[i]).name === t)
                return e;
        return null
    }
    ;
    var g = [];
    function m(t, e) {
        return t.zindex - e.zindex
    }
    var _ = !0;
    t.prototype.startRunning = function() {
        var t, e, i, s, n, r, o, a, h, c, l, u, p, d, f;
        for (this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname],
        this.event_sheet.updateDeepIncludes()),
        (this.runtime.running_layout = this).width = this.originalWidth,
        this.height = this.originalHeight,
        this.scrollX = this.runtime.original_width / 2,
        this.scrollY = this.runtime.original_height / 2,
        t = 0,
        i = this.runtime.types_by_index.length; t < i; t++)
            if (!(n = this.runtime.types_by_index[t]).is_family)
                for (e = 0,
                s = (r = n.instances).length; e < s; e++)
                    (d = r[e]).layer && ((p = d.layer.number) >= this.layers.length && (p = this.layers.length - 1),
                    d.layer = this.layers[p],
                    -1 === d.layer.instances.indexOf(d) && d.layer.instances.push(d),
                    d.layer.zindices_stale = !0);
        if (!_)
            for (t = 0,
            i = this.layers.length; t < i; ++t)
                this.layers[t].instances.sort(m);
        for (cr.clearArray(g),
        this.boundScrolling(),
        t = 0,
        i = this.layers.length; t < i; t++)
            (f = this.layers[t]).createInitialInstances(),
            f.updateViewport(null);
        var y = !1;
        if (!this.first_visit) {
            for (l in this.persist_data)
                if (this.persist_data.hasOwnProperty(l) && (n = this.runtime.getObjectTypeBySid(parseInt(l, 10))) && !n.is_family && this.runtime.typeHasPersistBehavior(n)) {
                    for (t = 0,
                    i = (u = this.persist_data[l]).length; t < i; t++)
                        f = null,
                        n.plugin.is_world && !(f = this.getLayerBySid(u[t].w.l)) || (d = this.runtime.createInstanceFromInit(n.default_instance, f, !1, 0, 0, !0),
                        this.runtime.loadInstanceFromJSON(d, u[t]),
                        y = !0,
                        g.push(d));
                    cr.clearArray(u)
                }
            for (t = 0,
            i = this.layers.length; t < i; t++)
                this.layers[t].instances.sort(m),
                this.layers[t].zindices_stale = !0
        }
        for (y && (this.runtime.ClearDeathRow(),
        this.runtime.refreshUidMap()),
        t = 0; t < g.length; t++)
            if ((d = g[t]).type.is_contained)
                for (a = d.get_iid(),
                e = 0,
                s = d.type.container.length; e < s; e++)
                    h = d.type.container[e],
                    d.type !== h && (h.instances.length > a ? d.siblings.push(h.instances[a]) : h.default_instance && (c = this.runtime.createInstanceFromInit(h.default_instance, d.layer, !0, d.x, d.y, !0),
                    this.runtime.ClearDeathRow(),
                    h.updateIIDs(),
                    d.siblings.push(c),
                    g.push(c)));
        for (t = 0,
        i = this.initial_nonworld.length; t < i; t++)
            o = this.initial_nonworld[t],
            (n = this.runtime.types_by_index[o[1]]).is_contained || (d = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0));
        if (this.runtime.changelayout = null,
        this.runtime.ClearDeathRow(),
        this.runtime.ctx && !this.runtime.isDomFree)
            for (t = 0,
            i = this.runtime.types_by_index.length; t < i; t++)
                !(h = this.runtime.types_by_index[t]).is_family && h.instances.length && h.preloadCanvas2D && h.preloadCanvas2D(this.runtime.ctx);
        if (this.runtime.isLoadingState)
            cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, g);
        else
            for (t = 0,
            i = g.length; t < i; t++)
                d = g[t],
                this.runtime.trigger(Object.getPrototypeOf(d.type.plugin).cnds.OnCreated, d);
        cr.clearArray(g),
        this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null),
        this.first_visit = !1
    }
    ,
    t.prototype.createGlobalNonWorlds = function() {
        for (var t, e, i = 0, s = 0, n = this.initial_nonworld.length; i < n; i++)
            t = this.initial_nonworld[i],
            (e = this.runtime.types_by_index[t[1]]).global ? e.is_contained || this.runtime.createInstanceFromInit(t, null, !0) : (this.initial_nonworld[s] = t,
            s++);
        cr.truncateArray(this.initial_nonworld, s)
    }
    ,
    t.prototype.stopRunning = function() {
        var t, e, i, s, n, r, o;
        if (this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null),
        this.runtime.isEndingLayout = !0,
        cr.clearArray(this.runtime.system.waits),
        !this.first_visit)
            for (t = 0,
            e = this.layers.length; t < e; t++)
                for (this.layers[t].updateZIndices(),
                i = 0,
                s = (n = this.layers[t].instances).length; i < s; i++)
                    (r = n[i]).type.global || this.runtime.typeHasPersistBehavior(r.type) && this.saveObjectToPersist(r);
        for (t = 0,
        e = this.layers.length; t < e; t++) {
            for (i = 0,
            s = (n = this.layers[t].instances).length; i < s; i++)
                (r = n[i]).type.global || this.runtime.DestroyInstance(r);
            this.runtime.ClearDeathRow(),
            cr.clearArray(n),
            this.layers[t].zindices_stale = !0
        }
        for (t = 0,
        e = this.runtime.types_by_index.length; t < e; t++)
            if (!((o = this.runtime.types_by_index[t]).global || o.plugin.is_world || o.plugin.singleglobal || o.is_family)) {
                for (i = 0,
                s = o.instances.length; i < s; i++)
                    this.runtime.DestroyInstance(o.instances[i]);
                this.runtime.ClearDeathRow()
            }
        _ = !1,
        this.runtime.isEndingLayout = !1
    }
    ;
    var a = new cr.rect(0,0,0,0);
    function e(t, e) {
        this.layout = t,
        this.runtime = t.runtime,
        this.instances = [],
        this.scale = 1,
        this.angle = 0,
        this.disableAngle = !1,
        this.tmprect = new cr.rect(0,0,0,0),
        this.tmpquad = new cr.quad,
        this.viewLeft = 0,
        this.viewRight = 0,
        this.viewTop = 0,
        this.viewBottom = 0,
        this.zindices_stale = !1,
        this.zindices_stale_from = -1,
        this.clear_earlyz_index = 0,
        this.name = e[0],
        this.index = e[1],
        this.sid = e[2],
        this.visible = e[3],
        this.background_color = e[4],
        this.transparent = e[5],
        this.parallaxX = e[6],
        this.parallaxY = e[7],
        this.opacity = e[8],
        this.forceOwnTexture = e[9],
        this.useRenderCells = e[10],
        this.zoomRate = e[11],
        this.blend_mode = e[12],
        this.effect_fallback = e[13],
        this.compositeOp = "source-over",
        this.srcBlend = 0,
        this.destBlend = 0,
        this.render_grid = null,
        this.last_render_list = h(),
        this.render_list_stale = !0,
        this.last_render_cells = new cr.rect(0,0,-1,-1),
        this.cur_render_cells = new cr.rect(0,0,-1,-1),
        this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width,this.runtime.original_height)),
        this.render_offscreen = !1;
        var i, s, n = e[14];
        for (this.startup_initial_instances = [],
        this.initial_instances = [],
        this.created_globals = [],
        i = 0,
        s = n.length; i < s; i++) {
            var r = n[i]
              , o = this.runtime.types_by_index[r[1]];
            o.default_instance || (o.default_instance = r,
            o.default_layerindex = this.index),
            this.initial_instances.push(r),
            -1 === this.layout.initial_types.indexOf(o) && this.layout.initial_types.push(o)
        }
        for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances),
        this.effect_types = [],
        this.active_effect_types = [],
        this.shaders_preserve_opaqueness = !0,
        this.effect_params = [],
        i = 0,
        s = e[15].length; i < s; i++)
            this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }),
            this.effect_params.push(e[15][i][2].slice(0));
        this.updateActiveEffects(),
        this.rcTex = new cr.rect(0,0,1,1),
        this.rcTex2 = new cr.rect(0,0,1,1)
    }
    t.prototype.recreateInitialObjects = function(t, e, i, s, n) {
        var r, o;
        for (a.set(e, i, s, n),
        r = 0,
        o = this.layers.length; r < o; r++)
            this.layers[r].recreateInitialObjects(t, a)
    }
    ,
    t.prototype.draw = function(t) {
        var e, i, s, n, r = t, o = !1, a = !this.runtime.fullscreenScalingQuality;
        for (a && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"),
        (e = this.runtime.layout_canvas).width = this.runtime.draw_width,
        e.height = this.runtime.draw_height,
        this.runtime.layout_ctx = e.getContext("2d"),
        o = !0),
        e = this.runtime.layout_canvas,
        r = this.runtime.layout_ctx,
        e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width,
        o = !0),
        e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height,
        o = !0),
        o && this.runtime.setCtxImageSmoothingEnabled(r, this.runtime.linearSampling)),
        r.globalAlpha = 1,
        r.globalCompositeOperation = "source-over",
        this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && r.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height),
        i = 0,
        s = this.layers.length; i < s; i++)
            (n = this.layers[i]).visible && 0 < n.opacity && 11 !== n.blend_mode && (n.instances.length || !n.transparent) ? n.draw(r) : n.updateViewport(null);
        a && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
    }
    ,
    t.prototype.drawGL_earlyZPass = function(t) {
        var e, i;
        for (t.setEarlyZPass(!0),
        this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex),
        this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layout_tex),
        this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height),
        e = this.layers.length - 1; 0 <= e; --e)
            (i = this.layers[e]).visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
        t.setEarlyZPass(!1)
    }
    ,
    t.prototype.drawGL = function(t) {
        var e, i, s, n, r = 0 < this.active_effect_types.length || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
        for (r ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex),
        this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layout_tex),
        this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null),
        t.deleteTexture(this.runtime.layout_tex),
        this.runtime.layout_tex = null),
        this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0),
        e = 0,
        i = this.layers.length; e < i; e++)
            (s = this.layers[e]).visible && 0 < s.opacity && (s.instances.length || !s.transparent) ? s.drawGL(t) : s.updateViewport(null);
        r && (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality ? (1 === this.active_effect_types.length ? (n = this.active_effect_types[0].index,
        t.switchProgram(this.active_effect_types[0].shaderindex),
        t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[n]),
        t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)) : t.switchProgram(0),
        this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height),
        t.setRenderingToTexture(null),
        t.setDepthTestEnabled(!1),
        t.setOpacity(1),
        t.setTexture(this.runtime.layout_tex),
        t.setAlphaBlend(),
        t.resetModelView(),
        t.updateModelView(),
        r = this.runtime.width / 2,
        n = this.runtime.height / 2,
        t.quad(-r, n, r, n, r, -n, -r, -n),
        t.setTexture(null),
        t.setDepthTestEnabled(!0)) : this.renderEffectChain(t, null, null, null))
    }
    ,
    t.prototype.getRenderTarget = function() {
        return 0 < this.active_effect_types.length || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
    }
    ,
    t.prototype.getMinLayerScale = function() {
        for (var t, e = this.layers[0].getScale(), i = 1, s = this.layers.length; i < s; i++)
            0 === (t = this.layers[i]).parallaxX && 0 === t.parallaxY || t.getScale() < e && (e = t.getScale());
        return e
    }
    ,
    t.prototype.scrollToX = function(t) {
        var e;
        this.unbounded_scrolling || (e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2,
        t > this.width - e && (t = this.width - e),
        t < e && (t = e)),
        this.scrollX !== t && (this.scrollX = t,
        this.runtime.redraw = !0)
    }
    ,
    t.prototype.scrollToY = function(t) {
        var e;
        this.unbounded_scrolling || (e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2,
        t > this.height - e && (t = this.height - e),
        t < e && (t = e)),
        this.scrollY !== t && (this.scrollY = t,
        this.runtime.redraw = !0)
    }
    ,
    t.prototype.boundScrolling = function() {
        this.scrollToX(this.scrollX),
        this.scrollToY(this.scrollY)
    }
    ,
    t.prototype.renderEffectChain = function(t, e, i, s) {
        var n = (i || e || this).active_effect_types
          , r = 1
          , o = 0
          , a = 0
          , h = 0
          , c = this.runtime.draw_width
          , l = this.runtime.draw_height;
        i ? (r = i.layer.getScale(),
        o = i.layer.getAngle(),
        a = i.layer.viewLeft,
        h = i.layer.viewTop,
        c = i.layer.viewRight,
        l = i.layer.viewBottom) : e && (r = e.getScale(),
        o = e.getAngle(),
        a = e.viewLeft,
        h = e.viewTop,
        c = e.viewRight,
        l = e.viewBottom);
        var u, p, d = this.runtime.fx_tex, f = 0, y = 1, g = this.runtime.draw_width, m = this.runtime.draw_height, _ = g / 2, v = m / 2, b = (e || this).rcTex, w = (e || this).rcTex2, x = 0, S = 0, T = 0, A = 0, C = g, k = g, O = m, I = m, P = 0, E = 0, B = i ? i.layer.getAngle() : 0;
        if (i) {
            for (G = 0,
            U = n.length; G < U; G++)
                P += t.getProgramBoxExtendHorizontal(n[G].shaderindex),
                E += t.getProgramBoxExtendVertical(n[G].shaderindex);
            var R, L, M, j = i.bbox;
            x = e.layerToCanvas(j.left, j.top, !0, !0),
            T = e.layerToCanvas(j.left, j.top, !1, !0),
            C = e.layerToCanvas(j.right, j.bottom, !0, !0),
            O = e.layerToCanvas(j.right, j.bottom, !1, !0),
            0 !== B && (R = e.layerToCanvas(j.right, j.top, !0, !0),
            L = e.layerToCanvas(j.right, j.top, !1, !0),
            B = e.layerToCanvas(j.left, j.bottom, !0, !0),
            j = e.layerToCanvas(j.left, j.bottom, !1, !0),
            M = Math.min(x, C, R, B),
            C = Math.max(x, C, R, B),
            x = M,
            M = Math.min(T, O, L, j),
            O = Math.max(T, O, L, j),
            T = M),
            x -= P,
            T -= E,
            C += P,
            O += E,
            w.left = x / g,
            w.top = 1 - T / m,
            w.right = C / g,
            w.bottom = 1 - O / m,
            S = x = cr.floor(x),
            A = T = cr.floor(T),
            k = C = cr.ceil(C),
            I = O = cr.ceil(O),
            x < 0 && (x = 0),
            T < 0 && (T = 0),
            g < C && (C = g),
            m < O && (O = m),
            (S -= P) < 0 && (S = 0),
            (A -= E) < 0 && (A = 0),
            g < (k += P) && (k = g),
            m < (I += E) && (I = m),
            b.left = x / g,
            b.top = 1 - T / m,
            b.right = C / g,
            b.bottom = 1 - O / m
        } else
            b.left = w.left = 0,
            b.top = w.top = 0,
            b.right = w.right = 1,
            b.bottom = w.bottom = 1;
        var N = i && (t.programUsesDest(n[0].shaderindex) || 0 !== P || 0 !== E || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
        t.setAlphaBlend(),
        N && (d[f] || (d[f] = t.createEmptyTexture(g, m, this.runtime.linearSampling)),
        d[f].c2width === g && d[f].c2height === m || (t.deleteTexture(d[f]),
        d[f] = t.createEmptyTexture(g, m, this.runtime.linearSampling)),
        t.switchProgram(0),
        t.setRenderingToTexture(d[f]),
        u = m - A - (p = I - A),
        t.clearRect(S, u, k - S, p),
        i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex),
        t.setOpacity(e.opacity),
        t.resetModelView(),
        t.translate(-_, -v),
        t.updateModelView(),
        t.quadTex(x, O, C, O, C, T, x, T, b)),
        w.left = w.top = 0,
        w.right = w.bottom = 1,
        i && (M = b.top,
        b.top = b.bottom,
        b.bottom = M),
        f = 1,
        y = 0),
        t.setOpacity(1);
        for (var F, D, V, W = n.length - 1, z = t.programUsesCrossSampling(n[W].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality, G = 0, U = n.length; G < U; G++)
            d[f] || (d[f] = t.createEmptyTexture(g, m, this.runtime.linearSampling)),
            d[f].c2width === g && d[f].c2height === m || (t.deleteTexture(d[f]),
            d[f] = t.createEmptyTexture(g, m, this.runtime.linearSampling)),
            t.switchProgram(n[G].shaderindex),
            F = n[G].index,
            t.programIsAnimated(n[G].shaderindex) && (this.runtime.redraw = !0),
            0 != G || N ? (t.setProgramParameters(s, 1 / g, 1 / m, w.left, w.top, w.right, w.bottom, r, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, (i || e || this).effect_params[F]),
            t.setTexture(null),
            G !== W || z ? (t.setRenderingToTexture(d[f]),
            u = m - A - (p = I - A),
            t.clearRect(S, u, k - S, p)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend),
            t.setRenderingToTexture(s)),
            t.setTexture(d[y]),
            t.resetModelView(),
            t.translate(-_, -v),
            t.updateModelView(),
            t.quadTex(x, O, C, O, C, T, x, T, b),
            G !== W || z || t.setTexture(null)) : (t.setRenderingToTexture(d[f]),
            u = m - A - (p = I - A),
            t.clearRect(S, u, k - S, p),
            i ? (V = i.curFrame && i.curFrame.texture_img ? (D = 1 / (V = i.curFrame.texture_img).width,
            1 / V.height) : (D = 1 / i.width,
            1 / i.height),
            t.setProgramParameters(s, D, V, w.left, w.top, w.right, w.bottom, r, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[F]),
            i.drawGL(t)) : (t.setProgramParameters(s, 1 / g, 1 / m, 0, 0, 1, 1, r, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, (e || this).effect_params[F]),
            t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex),
            t.resetModelView(),
            t.translate(-_, -v),
            t.updateModelView(),
            t.quadTex(x, O, C, O, C, T, x, T, b)),
            w.left = w.top = 0,
            w.right = w.bottom = 1,
            i && !z && (M = O,
            O = T,
            T = M)),
            y = 0 === (f = 0 === f ? 1 : 0) ? 1 : 0;
        z && (t.switchProgram(0),
        i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height),
        _ = this.runtime.width / 2,
        v = this.runtime.height / 2,
        T = x = 0,
        C = this.runtime.width,
        O = this.runtime.height),
        t.setRenderingToTexture(s),
        t.setTexture(d[y]),
        t.resetModelView(),
        t.translate(-_, -v),
        t.updateModelView(),
        i && 1 === n.length && !N ? t.quadTex(x, T, C, T, C, O, x, O, b) : t.quadTex(x, O, C, O, C, T, x, T, b),
        t.setTexture(null))
    }
    ,
    t.prototype.getLayerBySid = function(t) {
        for (var e = 0, i = this.layers.length; e < i; e++)
            if (this.layers[e].sid === t)
                return this.layers[e];
        return null
    }
    ,
    t.prototype.saveToJSON = function() {
        for (var t, e, i = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.angle,
            w: this.width,
            h: this.height,
            fv: this.first_visit,
            persist: this.persist_data,
            fx: [],
            layers: {}
        }, s = 0, n = this.effect_types.length; s < n; s++)
            e = this.effect_types[s],
            i.fx.push({
                name: e.name,
                active: e.active,
                params: this.effect_params[e.index]
            });
        for (s = 0,
        n = this.layers.length; s < n; s++)
            t = this.layers[s],
            i.layers[t.sid.toString()] = t.saveToJSON();
        return i
    }
    ,
    t.prototype.loadFromJSON = function(t) {
        var e, i, s;
        this.scrollX = t.sx,
        this.scrollY = t.sy,
        this.scale = t.s,
        this.angle = t.a,
        this.width = t.w,
        this.height = t.h,
        this.persist_data = t.persist,
        void 0 !== t.fv && (this.first_visit = t.fv);
        for (var n = t.fx, r = 0, o = n.length; r < o; r++)
            (e = this.getEffectByName(n[r].name)) && (e.active = n[r].active,
            this.effect_params[e.index] = n[r].params);
        this.updateActiveEffects();
        var a = t.layers;
        for (i in a)
            a.hasOwnProperty(i) && (s = this.getLayerBySid(parseInt(i, 10))) && s.loadFromJSON(a[i])
    }
    ,
    cr.layout = t,
    e.prototype.updateActiveEffects = function() {
        var t, e, i;
        for (cr.clearArray(this.active_effect_types),
        this.shaders_preserve_opaqueness = !0,
        t = 0,
        e = this.effect_types.length; t < e; t++)
            (i = this.effect_types[t]).active && (this.active_effect_types.push(i),
            i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
    }
    ,
    e.prototype.getEffectByName = function(t) {
        for (var e, i = 0, s = this.effect_types.length; i < s; i++)
            if ((e = this.effect_types[i]).name === t)
                return e;
        return null
    }
    ,
    e.prototype.createInitialInstances = function() {
        for (var t, e, i, s = 0, n = 0, r = this.initial_instances.length; s < r; s++) {
            if (t = this.initial_instances[s],
            e = this.runtime.types_by_index[t[1]],
            i = !0,
            !this.runtime.typeHasPersistBehavior(e) || this.layout.first_visit) {
                if (!(t = this.runtime.createInstanceFromInit(t, this, !0)))
                    continue;
                g.push(t),
                t.type.global && (i = !1,
                this.created_globals.push(t.uid))
            }
            i && (this.initial_instances[n] = this.initial_instances[s],
            n++)
        }
        this.initial_instances.length = n,
        this.runtime.ClearDeathRow(),
        !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback),
        this.compositeOp = cr.effectToCompositeOp(this.blend_mode),
        this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl),
        this.render_list_stale = !0
    }
    ,
    e.prototype.recreateInitialObjects = function(t, e) {
        for (var i, s, n, r, o, a, h, c = this.runtime.types_by_index, l = t.is_family, u = t.members, p = 0, d = this.initial_instances.length; p < d; ++p)
            if (s = (n = (i = this.initial_instances[p])[0])[0],
            n = n[1],
            e.contains_pt(s, n)) {
                if ((n = c[i[1]]) !== t) {
                    if (!l)
                        continue;
                    if (u.indexOf(n) < 0)
                        continue
                }
                if (r = this.runtime.createInstanceFromInit(i, this, !1),
                this.runtime.isInOnDestroy++,
                this.runtime.trigger(Object.getPrototypeOf(n.plugin).cnds.OnCreated, r),
                r.is_contained)
                    for (o = 0,
                    a = r.siblings.length; o < a; o++)
                        h = r.siblings[p],
                        this.runtime.trigger(Object.getPrototypeOf(h.type.plugin).cnds.OnCreated, h);
                this.runtime.isInOnDestroy--
            }
    }
    ,
    e.prototype.removeFromInstanceList = function(t, e) {
        var i = cr.fastIndexOf(this.instances, t);
        i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(),
        this.render_grid.update(t, t.rendercells, null),
        t.rendercells.set(0, 0, -1, -1)),
        i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i),
        this.setZIndicesStaleFrom(i)),
        this.render_list_stale = !0)
    }
    ,
    e.prototype.appendToInstanceList = function(t, e) {
        t.zindex = this.instances.length,
        this.instances.push(t),
        e && this.useRenderCells && t.rendercells && t.set_bbox_changed(),
        this.render_list_stale = !0
    }
    ,
    e.prototype.prependToInstanceList = function(t, e) {
        this.instances.unshift(t),
        this.setZIndicesStaleFrom(0),
        e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
    }
    ,
    e.prototype.moveInstanceAdjacent = function(t, e, i) {
        var s = t.get_zindex()
          , e = e.get_zindex();
        cr.arrayRemove(this.instances, s),
        s < e && e--,
        i && e++,
        e === this.instances.length ? this.instances.push(t) : this.instances.splice(e, 0, t),
        this.setZIndicesStaleFrom(s < e ? s : e)
    }
    ,
    e.prototype.setZIndicesStaleFrom = function(t) {
        (-1 === this.zindices_stale_from || t < this.zindices_stale_from) && (this.zindices_stale_from = t),
        this.zindices_stale = !0,
        this.render_list_stale = !0
    }
    ,
    e.prototype.updateZIndices = function() {
        if (this.zindices_stale) {
            var t, e, i;
            if (-1 === this.zindices_stale_from && (this.zindices_stale_from = 0),
            this.useRenderCells)
                for (t = this.zindices_stale_from,
                e = this.instances.length; t < e; ++t)
                    (i = this.instances[t]).zindex = t,
                    this.render_grid.markRangeChanged(i.rendercells);
            else
                for (t = this.zindices_stale_from,
                e = this.instances.length; t < e; ++t)
                    this.instances[t].zindex = t;
            this.zindices_stale = !1,
            this.zindices_stale_from = -1
        }
    }
    ,
    e.prototype.getScale = function(t) {
        return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
    }
    ,
    e.prototype.getNormalScale = function() {
        return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
    }
    ,
    e.prototype.getAngle = function() {
        return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
    }
    ;
    var i = [];
    function h() {
        return i.length ? i.pop() : []
    }
    function u(t) {
        cr.clearArray(t),
        i.push(t)
    }
    var c = [];
    function s(t, e) {
        for (var i, s, n, r = 0, o = t.length; r < o - 1; r += 2)
            (function(t, e, i) {
                var s, n, r = 0, o = 0, a = 0, h = t.length, c = e.length;
                for (i.length = h + c; r < h && o < c; ++a)
                    s = t[r],
                    n = e[o],
                    s.zindex < n.zindex ? (i[a] = s,
                    ++r) : (i[a] = n,
                    ++o);
                for (; r < h; ++r,
                ++a)
                    i[a] = t[r];
                for (; o < c; ++o,
                ++a)
                    i[a] = e[o]
            }
            )(i = t[r], s = t[r + 1], n = h()),
            e || (u(i),
            u(s)),
            c.push(n);
        o % 2 == 1 && (e ? (i = h(),
        cr.shallowAssignArray(i, t[o - 1]),
        c.push(i)) : c.push(t[o - 1])),
        cr.shallowAssignArray(t, c),
        cr.clearArray(c)
    }
    var n = [];
    e.prototype.getRenderCellInstancesToDraw = function() {
        if (this.updateZIndices(),
        this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, n),
        !n.length)
            return h();
        if (1 === n.length) {
            var t = h();
            return cr.shallowAssignArray(t, n[0]),
            cr.clearArray(n),
            t
        }
        t = function(t) {
            for (var e = !0; 1 < t.length; )
                s(t, e),
                e = !1;
            return t[0]
        }(n);
        return cr.clearArray(n),
        t
    }
    ,
    e.prototype.draw = function(t) {
        this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
        var e = this.runtime.canvas
          , i = t
          , s = !1;
        this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"),
        (e = this.runtime.layer_canvas).width = this.runtime.draw_width,
        e.height = this.runtime.draw_height,
        this.runtime.layer_ctx = e.getContext("2d"),
        s = !0),
        e = this.runtime.layer_canvas,
        i = this.runtime.layer_ctx,
        e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width,
        s = !0),
        e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height,
        s = !0),
        s && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling),
        this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)),
        i.globalAlpha = 1,
        i.globalCompositeOperation = "source-over",
        this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")",
        i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)),
        i.save(),
        this.disableAngle = !0;
        var n = this.canvasToLayer(0, 0, !0, !0)
          , r = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (n = Math.round(n),
        r = Math.round(r)),
        this.rotateViewport(n, r, i);
        var o, s = this.getScale();
        i.scale(s, s),
        i.translate(-n, -r),
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft),
        this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop),
        this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight),
        this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom),
        this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (u(this.last_render_list),
        o = this.getRenderCellInstancesToDraw(),
        this.render_list_stale = !1,
        this.last_render_cells.copy(this.cur_render_cells)) : o = this.last_render_list) : o = this.instances;
        for (var a, h = null, c = 0, l = o.length; c < l; ++c)
            (a = o[c]) !== h && (this.drawInstance(a, i),
            h = a);
        this.useRenderCells && (this.last_render_list = o),
        i.restore(),
        this.render_offscreen && (t.globalCompositeOperation = this.compositeOp,
        t.globalAlpha = this.opacity,
        t.drawImage(e, 0, 0))
    }
    ,
    e.prototype.drawInstance = function(t, e) {
        var i;
        t.visible && 0 !== t.width && 0 !== t.height && (t.update_bbox(),
        (i = t.bbox).right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp,
        t.draw(e)))
    }
    ,
    e.prototype.updateViewport = function(t) {
        this.disableAngle = !0;
        var e = this.canvasToLayer(0, 0, !0, !0)
          , i = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (e = Math.round(e),
        i = Math.round(i)),
        this.rotateViewport(e, i, t)
    }
    ,
    e.prototype.rotateViewport = function(t, e, i) {
        var s = this.getScale();
        this.viewLeft = t,
        this.viewTop = e,
        this.viewRight = t + this.runtime.draw_width * (1 / s),
        this.viewBottom = e + this.runtime.draw_height * (1 / s),
        this.viewLeft > this.viewRight && (n = this.viewLeft,
        this.viewLeft = this.viewRight,
        this.viewRight = n),
        this.viewTop > this.viewBottom && (n = this.viewTop,
        this.viewTop = this.viewBottom,
        this.viewBottom = n);
        var n = this.getAngle();
        0 !== n && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2),
        i.rotate(-n),
        i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)),
        this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom),
        this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        this.tmpquad.set_from_rotated_rect(this.tmprect, n),
        this.tmpquad.bounding_box(this.tmprect),
        this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2),
        this.viewLeft = this.tmprect.left,
        this.viewTop = this.tmprect.top,
        this.viewRight = this.tmprect.right,
        this.viewBottom = this.tmprect.bottom)
    }
    ,
    e.prototype.drawGL_earlyZPass = function(t) {
        this.runtime.draw_width,
        this.runtime.draw_height;
        this.render_offscreen = this.forceOwnTexture,
        this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex),
        this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layer_tex)),
        this.disableAngle = !0;
        var e = this.canvasToLayer(0, 0, !0, !0)
          , i = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (e = Math.round(e),
        i = Math.round(i)),
        this.rotateViewport(e, i, null);
        var s, i = this.getScale();
        t.resetModelView(),
        t.scale(i, i),
        t.rotateZ(-this.getAngle()),
        t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        t.updateModelView(),
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft),
        this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop),
        this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight),
        this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom),
        this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (u(this.last_render_list),
        s = this.getRenderCellInstancesToDraw(),
        this.render_list_stale = !1,
        this.last_render_cells.copy(this.cur_render_cells)) : s = this.last_render_list) : s = this.instances;
        for (var n, r = null, o = s.length - 1; 0 <= o; --o)
            (n = s[o]) !== r && (this.drawInstanceGL_earlyZPass(s[o], t),
            r = n);
        this.useRenderCells && (this.last_render_list = s),
        this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++,
        t.setEarlyZIndex(this.clear_earlyz_index),
        t.setColorFillMode(1, 1, 1, 1),
        t.fullscreenQuad(),
        t.restoreEarlyZMode())
    }
    ,
    e.prototype.drawGL = function(t) {
        this.runtime.draw_width,
        this.runtime.draw_height;
        var e = 0
          , i = 0;
        this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 < this.active_effect_types.length || 0 !== this.blend_mode,
        this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex),
        this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)),
        t.setRenderingToTexture(this.runtime.layer_tex),
        this.transparent && t.clear(0, 0, 0, 0)),
        this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index),
        t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1),
        t.fullscreenQuad(),
        t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)),
        this.disableAngle = !0;
        var s = this.canvasToLayer(0, 0, !0, !0)
          , n = this.canvasToLayer(0, 0, !1, !0);
        this.disableAngle = !1,
        this.runtime.pixel_rounding && (s = Math.round(s),
        n = Math.round(n)),
        this.rotateViewport(s, n, null);
        var r, n = this.getScale();
        t.resetModelView(),
        t.scale(n, n),
        t.rotateZ(-this.getAngle()),
        t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        t.updateModelView(),
        this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft),
        this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop),
        this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight),
        this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom),
        this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (u(this.last_render_list),
        r = this.getRenderCellInstancesToDraw(),
        this.render_list_stale = !1,
        this.last_render_cells.copy(this.cur_render_cells)) : r = this.last_render_list) : r = this.instances;
        for (var o, a = null, h = 0, c = r.length; h < c; ++h)
            (o = r[h]) !== a && (this.drawInstanceGL(r[h], t),
            a = o);
        this.useRenderCells && (this.last_render_list = r),
        this.render_offscreen && (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0,
        i = this.active_effect_types.length ? this.active_effect_types[0].index : 0,
        0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity ? (1 === this.active_effect_types.length ? (t.switchProgram(e),
        t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, n, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]),
        t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0),
        t.setRenderingToTexture(this.layout.getRenderTarget()),
        t.setOpacity(this.opacity),
        t.setTexture(this.runtime.layer_tex),
        t.setBlend(this.srcBlend, this.destBlend),
        t.resetModelView(),
        t.updateModelView(),
        i = this.runtime.draw_width / 2,
        e = this.runtime.draw_height / 2,
        t.quad(-i, e, i, e, i, -e, -i, -e),
        t.setTexture(null)) : this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget()))
    }
    ,
    e.prototype.drawInstanceGL = function(t, e) {
        var i;
        t.visible && 0 !== t.width && 0 !== t.height && (t.update_bbox(),
        (i = t.bbox).right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index),
        t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0),
        e.setBlend(t.srcBlend, t.destBlend),
        t.drawGL(e))))
    }
    ,
    e.prototype.drawInstanceGL_earlyZPass = function(t, e) {
        var i;
        t.visible && 0 !== t.width && 0 !== t.height && (t.update_bbox(),
        (i = t.bbox).right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++,
        0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index),
        t.drawGL_earlyZPass(e))))
    }
    ,
    e.prototype.drawInstanceWithShadersGL = function(t, e) {
        var i, s, n, r, o, a, h, c, l, u = t.active_effect_types[0].shaderindex, p = t.active_effect_types[0].index, d = this.getScale();
        1 !== t.active_effect_types.length || e.programUsesCrossSampling(u) || e.programExtendsBox(u) || (t.angle || t.layer.getAngle()) && e.programUsesDest(u) || 1 !== t.opacity || t.type.plugin.must_predraw ? (this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()),
        e.resetModelView(),
        e.scale(d, d),
        e.rotateZ(-this.getAngle()),
        e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2),
        e.updateModelView()) : (e.switchProgram(u),
        e.setBlend(t.srcBlend, t.destBlend),
        e.programIsAnimated(u) && (this.runtime.redraw = !0),
        h = a = o = r = 0,
        e.programUsesDest(u) && (n = t.bbox,
        i = this.layerToCanvas(n.left, n.top, !0, !0),
        s = this.layerToCanvas(n.left, n.top, !1, !0),
        u = this.layerToCanvas(n.right, n.bottom, !0, !0),
        n = this.layerToCanvas(n.right, n.bottom, !1, !0),
        r = i / windowWidth,
        o = 1 - s / windowHeight,
        a = u / windowWidth,
        h = 1 - n / windowHeight),
        l = t.curFrame && t.curFrame.texture_img ? (c = 1 / (l = t.curFrame.texture_img).width,
        1 / l.height) : (c = 1 / t.width,
        1 / t.height),
        e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), c, l, r, o, a, h, d, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[p]),
        t.drawGL(e))
    }
    ,
    e.prototype.canvasToLayer = function(t, e, i, s) {
        var n = this.runtime.devicePixelRatio;
        this.runtime.isRetina && (t *= n,
        e *= n);
        var r = this.runtime.parallax_x_origin
          , o = this.runtime.parallax_y_origin
          , a = (this.layout.scrollX - r) * this.parallaxX + r
          , h = (this.layout.scrollY - o) * this.parallaxY + o
          , n = a
          , r = h
          , o = 1 / this.getScale(!s);
        s ? (n -= this.runtime.draw_width * o / 2,
        r -= this.runtime.draw_height * o / 2) : (n -= this.runtime.width * o / 2,
        r -= this.runtime.height * o / 2),
        n += t * o,
        r += e * o;
        t = this.getAngle();
        return 0 !== t && (r -= h,
        t = (n -= a) * (e = Math.cos(t)) - r * (o = Math.sin(t)),
        r = r * e + n * o,
        n = t,
        n += a,
        r += h),
        i ? n : r
    }
    ,
    e.prototype.layerToCanvas = function(t, e, i, s) {
        var n = this.runtime.parallax_x_origin
          , r = this.runtime.parallax_y_origin
          , o = (this.layout.scrollX - n) * this.parallaxX + n
          , a = (this.layout.scrollY - r) * this.parallaxY + r
          , h = o
          , c = a
          , l = this.getAngle();
        0 !== l && (e -= a,
        l = (t -= o) * (n = Math.cos(-l)) - e * (r = Math.sin(-l)),
        e = e * n + t * r,
        t = l,
        t += o,
        e += a);
        a = 1 / this.getScale(!s);
        s ? (h -= this.runtime.draw_width * a / 2,
        c -= this.runtime.draw_height * a / 2) : (h -= this.runtime.width * a / 2,
        c -= this.runtime.height * a / 2),
        h = (t - h) / a,
        c = (e - c) / a;
        a = this.runtime.devicePixelRatio;
        return this.runtime.isRetina && !s && (h /= a,
        c /= a),
        i ? h : c
    }
    ,
    e.prototype.rotatePt = function(t, e, i) {
        if (0 === this.getAngle())
            return i ? t : e;
        var s = this.layerToCanvas(t, e, !0)
          , t = this.layerToCanvas(t, e, !1);
        this.disableAngle = !0;
        e = this.canvasToLayer(s, t, !0),
        t = this.canvasToLayer(s, t, !0);
        return this.disableAngle = !1,
        i ? e : t
    }
    ,
    e.prototype.saveToJSON = function() {
        for (var t, e = {
            s: this.scale,
            a: this.angle,
            vl: this.viewLeft,
            vt: this.viewTop,
            vr: this.viewRight,
            vb: this.viewBottom,
            v: this.visible,
            bc: this.background_color,
            t: this.transparent,
            px: this.parallaxX,
            py: this.parallaxY,
            o: this.opacity,
            zr: this.zoomRate,
            fx: [],
            cg: this.created_globals,
            instances: []
        }, i = 0, s = this.effect_types.length; i < s; i++)
            t = this.effect_types[i],
            e.fx.push({
                name: t.name,
                active: t.active,
                params: this.effect_params[t.index]
            });
        return e
    }
    ,
    e.prototype.loadFromJSON = function(t) {
        var e, i;
        this.scale = t.s,
        this.angle = t.a,
        this.viewLeft = t.vl,
        this.viewTop = t.vt,
        this.viewRight = t.vr,
        this.viewBottom = t.vb,
        this.visible = t.v,
        this.background_color = t.bc,
        this.transparent = t.t,
        this.parallaxX = t.px,
        this.parallaxY = t.py,
        this.opacity = t.o,
        this.zoomRate = t.zr,
        this.created_globals = t.cg || [],
        cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
        for (var s = new cr.ObjectSet, n = 0, r = this.created_globals.length; n < r; ++n)
            s.add(this.created_globals[n]);
        for (e = n = 0,
        r = this.initial_instances.length; n < r; ++n)
            s.contains(this.initial_instances[n][2]) || (this.initial_instances[e] = this.initial_instances[n],
            ++e);
        cr.truncateArray(this.initial_instances, e);
        var o = t.fx;
        for (n = 0,
        r = o.length; n < r; n++)
            (i = this.getEffectByName(o[n].name)) && (i.active = o[n].active,
            this.effect_params[i.index] = o[n].params);
        this.updateActiveEffects(),
        this.instances.sort(m),
        this.zindices_stale = !0
    }
    ,
    cr.layer = e
}(),
function() {
    var o = [];
    function a(t, e) {
        return t.index - e.index
    }
    function n(t) {
        var e, i, s, n, r;
        for (2 === t.length ? t[0].index > t[1].index && (n = t[0],
        t[0] = t[1],
        t[1] = n) : 2 < t.length && t.sort(a),
        t.length >= o.length && (o.length = t.length + 1),
        o[t.length] || (o[t.length] = []),
        e = 0,
        i = (r = o[t.length]).length; e < i; e++)
            if (function(t, e) {
                var i, s = t.length;
                switch (s) {
                case 0:
                    return 1;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; i < s; i++)
                        if (t[i] !== e[i])
                            return;
                    return 1
                }
            }(t, s = r[e]))
                return s;
        return r.push(t),
        t
    }
    function t(t, e) {
        this.runtime = t,
        this.triggers = {},
        this.fasttriggers = {},
        this.hasRun = !1,
        this.includes = new cr.ObjectSet,
        this.deep_includes = [],
        this.already_included_sheets = [],
        this.name = e[0];
        var i, s, n = e[1];
        for (this.events = [],
        i = 0,
        s = n.length; i < s; i++)
            this.init_event(n[i], null, this.events)
    }
    function e(t) {
        this.type = t,
        this.instances = [],
        this.else_instances = [],
        this.select_all = !0
    }
    function i(t, e, i) {
        this.sheet = t,
        this.parent = e,
        this.runtime = t.runtime,
        this.solModifiers = [],
        this.solModifiersIncludingParents = [],
        this.solWriterAfterCnds = !1,
        this.group = !1,
        this.initially_activated = !1,
        this.toplevelevent = !1,
        this.toplevelgroup = !1,
        this.has_else_block = !1,
        this.conditions = [],
        this.actions = [],
        this.subevents = [],
        this.group_name = "",
        this.group = !1,
        this.initially_activated = !1,
        this.group_active = !1,
        this.contained_includes = null,
        i[1] && (this.group_name = i[1][1].toLowerCase(),
        this.group = !0,
        this.initially_activated = !!i[1][0],
        this.contained_includes = [],
        this.group_active = this.initially_activated,
        this.runtime.allGroups.push(this),
        this.runtime.groups_by_name[this.group_name] = this),
        this.orblock = i[2],
        this.sid = i[4],
        this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
        var s = i[5];
        for (h = 0,
        c = s.length; h < c; h++) {
            var n = new cr.condition(this,s[h]);
            n.index = h,
            cr.seal(n),
            this.conditions.push(n),
            this.addSolModifier(n.type)
        }
        var r = i[6];
        for (h = 0,
        c = r.length; h < c; h++) {
            var o = new cr.action(this,r[h]);
            o.index = h,
            cr.seal(o),
            this.actions.push(o)
        }
        if (8 === i.length)
            for (var a = i[7], h = 0, c = a.length; h < c; h++)
                this.sheet.init_event(a[h], this, this.subevents);
        this.is_else_block = !1,
        this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
    }
    function s(t, e) {
        var i, s, n;
        if (t && (-1 === e.indexOf(t) && e.push(t),
        t.is_contained))
            for (i = 0,
            s = t.container.length; i < s; i++)
                t !== (n = t.container[i]) && -1 === e.indexOf(n) && e.push(n)
    }
    function r(t, e) {
        if (this.block = t,
        this.sheet = t.sheet,
        this.runtime = t.runtime,
        this.parameters = [],
        this.results = [],
        this.extra = {},
        this.index = -1,
        this.anyParamVariesPerInstance = !1,
        this.func = this.runtime.GetObjectReference(e[1]),
        this.trigger = 0 < e[3],
        this.fasttrigger = 2 === e[3],
        this.looping = e[4],
        this.inverted = e[5],
        this.isstatic = e[6],
        this.sid = e[7],
        this.runtime.cndsBySid[this.sid.toString()] = this,
        -1 === e[0] ? (this.type = null,
        this.run = this.run_system,
        this.behaviortype = null,
        this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]],
        this.isstatic ? this.run = this.run_static : this.run = this.run_object,
        e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]),
        this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null,
        this.beh_index = -1),
        this.block.parent && this.block.parent.setSolWriterAfterCnds()),
        this.fasttrigger && (this.run = this.run_true),
        10 === e.length) {
            for (var i = e[9], s = 0, n = i.length; s < n; s++) {
                var r = new cr.parameter(this,i[s]);
                cr.seal(r),
                this.parameters.push(r)
            }
            this.results.length = i.length
        }
    }
    function h(t, e) {
        if (this.block = t,
        this.sheet = t.sheet,
        this.runtime = t.runtime,
        this.parameters = [],
        this.results = [],
        this.extra = {},
        this.index = -1,
        this.anyParamVariesPerInstance = !1,
        this.func = this.runtime.GetObjectReference(e[1]),
        -1 === e[0] ? (this.type = null,
        this.run = this.run_system,
        this.behaviortype = null,
        this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]],
        this.run = this.run_object,
        e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]),
        this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null,
        this.beh_index = -1)),
        this.sid = e[3],
        this.runtime.actsBySid[this.sid.toString()] = this,
        6 === e.length) {
            for (var i = e[5], s = 0, n = i.length; s < n; s++) {
                var r = new cr.parameter(this,i[s]);
                cr.seal(r),
                this.parameters.push(r)
            }
            this.results.length = i.length
        }
    }
    t.prototype.toString = function() {
        return this.name
    }
    ,
    t.prototype.init_event = function(t, e, i) {
        switch (t[0]) {
        case 0:
            var s, n, r = new cr.eventblock(this,e,t);
            if (cr.seal(r),
            r.orblock)
                for (i.push(r),
                s = 0,
                n = r.conditions.length; s < n; s++)
                    r.conditions[s].trigger && this.init_trigger(r, s);
            else
                r.is_trigger() ? this.init_trigger(r, 0) : i.push(r);
            break;
        case 1:
            var o = new cr.eventvariable(this,e,t);
            cr.seal(o),
            i.push(o);
            break;
        case 2:
            o = new cr.eventinclude(this,e,t);
            cr.seal(o),
            i.push(o)
        }
    }
    ,
    t.prototype.postInit = function() {
        for (var t = 0, e = this.events.length; t < e; t++)
            this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
    }
    ,
    t.prototype.updateDeepIncludes = function() {
        cr.clearArray(this.deep_includes),
        cr.clearArray(this.already_included_sheets),
        this.addDeepIncludes(this),
        cr.clearArray(this.already_included_sheets)
    }
    ,
    t.prototype.addDeepIncludes = function(t) {
        for (var e, i, s = t.deep_includes, n = t.already_included_sheets, r = this.includes.valuesRef(), o = 0, a = r.length; o < a; ++o)
            i = (e = r[o]).include_sheet,
            !e.isActive() || t === i || -1 < n.indexOf(i) || (n.push(i),
            i.addDeepIncludes(t),
            s.push(i))
    }
    ,
    t.prototype.run = function(t) {
        var e, i;
        for (this.runtime.resuming_breakpoint || (this.hasRun = !0,
        t || (this.runtime.isRunningEvents = !0)),
        e = 0,
        i = this.events.length; e < i; e++) {
            var s = this.events[e];
            s.run(),
            this.runtime.clearSol(s.solModifiers),
            this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }
        t || (this.runtime.isRunningEvents = !1)
    }
    ,
    t.prototype.init_trigger = function(t, e) {
        t.orblock || this.runtime.triggers_to_postinit.push(t);
        var i = t.conditions[e]
          , s = i.type ? i.type.name : "system"
          , n = i.fasttrigger
          , r = n ? this.fasttriggers : this.triggers;
        r[s] || (r[s] = []);
        var o = r[s]
          , a = i.func;
        if (n) {
            if (i.parameters.length) {
                var h = i.parameters[0];
                if (1 === h.type && 2 === h.expression.type) {
                    var c, l, u, p = h.expression.value.toLowerCase();
                    for (l = 0,
                    u = o.length; l < u; l++)
                        if (o[l].method == a)
                            return void ((c = o[l].evs)[p] ? c[p].push([t, e]) : c[p] = [[t, e]]);
                    (c = {})[p] = [[t, e]],
                    o.push({
                        method: a,
                        evs: c
                    })
                }
            }
        } else {
            for (l = 0,
            u = o.length; l < u; l++)
                if (o[l].method == a)
                    return void o[l].evs.push([t, e]);
            h = a,
            cr.plugins_.Sprite && h === cr.plugins_.Sprite.prototype.cnds.OnFrameChanged ? o.unshift({
                method: a,
                evs: [[t, e]]
            }) : o.push({
                method: a,
                evs: [[t, e]]
            })
        }
    }
    ,
    cr.eventsheet = t,
    e.prototype.hasObjects = function() {
        return (this.select_all ? this.type : this).instances.length
    }
    ,
    e.prototype.getObjects = function() {
        return (this.select_all ? this.type : this).instances
    }
    ,
    e.prototype.pick_one = function(t) {
        var e;
        t && (t.runtime.getCurrentEventStack().current_event.orblock ? (this.select_all && (cr.clearArray(this.instances),
        cr.shallowAssignArray(this.else_instances, t.type.instances),
        this.select_all = !1),
        -1 !== (e = this.else_instances.indexOf(t)) && (this.instances.push(this.else_instances[e]),
        this.else_instances.splice(e, 1))) : (this.select_all = !1,
        cr.clearArray(this.instances),
        this.instances[0] = t))
    }
    ,
    cr.selection = e,
    window._c2hh_ = "F16CEE99727F43335EF55B535BAAB46BD73A2816",
    i.prototype.postInit = function(t) {
        var e, i, s = this.parent;
        if (this.group)
            for (this.toplevelgroup = !0; s; ) {
                if (!s.group) {
                    this.toplevelgroup = !1;
                    break
                }
                s = s.parent
            }
        for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup),
        this.has_else_block = !!t,
        this.solModifiersIncludingParents = this.solModifiers.slice(0),
        s = this.parent; s; ) {
            for (e = 0,
            i = s.solModifiers.length; e < i; e++)
                this.addParentSolModifier(s.solModifiers[e]);
            s = s.parent
        }
        for (this.solModifiers = n(this.solModifiers),
        this.solModifiersIncludingParents = n(this.solModifiersIncludingParents),
        e = 0,
        i = this.conditions.length; e < i; e++)
            this.conditions[e].postInit();
        for (e = 0,
        i = this.actions.length; e < i; e++)
            this.actions[e].postInit();
        for (e = 0,
        i = this.subevents.length; e < i; e++)
            this.subevents[e].postInit(e < i - 1 && this.subevents[e + 1].is_else_block)
    }
    ,
    i.prototype.setGroupActive = function(t) {
        if (this.group_active !== !!t) {
            var e, i;
            for (this.group_active = !!t,
            e = 0,
            i = this.contained_includes.length; e < i; ++e)
                this.contained_includes[e].updateActive();
            0 < i && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
        }
    }
    ,
    i.prototype.addSolModifier = function(t) {
        s(t, this.solModifiers)
    }
    ,
    i.prototype.addParentSolModifier = function(t) {
        s(t, this.solModifiersIncludingParents)
    }
    ,
    i.prototype.setSolWriterAfterCnds = function() {
        this.solWriterAfterCnds = !0,
        this.parent && this.parent.setSolWriterAfterCnds()
    }
    ,
    i.prototype.is_trigger = function() {
        return !!this.conditions.length && this.conditions[0].trigger
    }
    ,
    i.prototype.run = function() {
        var t, e, i = !1, s = this.runtime, n = this.runtime.getCurrentEventStack(), r = (n.current_event = this).conditions;
        if (this.is_else_block || (n.else_branch_ran = !1),
        this.orblock) {
            for (0 === r.length && (i = !0),
            n.cndindex = 0,
            t = r.length; n.cndindex < t; n.cndindex++)
                (e = r[n.cndindex]).trigger || e.run() && (i = !0);
            (n.last_event_true = i) && this.run_actions_and_subevents()
        } else {
            for (n.cndindex = 0,
            t = r.length; n.cndindex < t; n.cndindex++)
                if (!r[n.cndindex].run())
                    return n.last_event_true = !1,
                    void (this.toplevelevent && s.hasPendingInstances && s.ClearDeathRow());
            n.last_event_true = !0,
            this.run_actions_and_subevents()
        }
        this.end_run(n)
    }
    ,
    i.prototype.end_run = function(t) {
        t.last_event_true && this.has_else_block && (t.else_branch_ran = !0),
        this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
    }
    ,
    i.prototype.run_orblocktrigger = function(t) {
        (this.runtime.getCurrentEventStack().current_event = this).conditions[t].run() && (this.run_actions_and_subevents(),
        this.runtime.getCurrentEventStack().last_event_true = !0)
    }
    ,
    i.prototype.run_actions_and_subevents = function() {
        var t, e = this.runtime.getCurrentEventStack();
        for (e.actindex = 0,
        t = this.actions.length; e.actindex < t; e.actindex++)
            if (this.actions[e.actindex].run())
                return;
        this.run_subevents()
    }
    ,
    i.prototype.resume_actions_and_subevents = function() {
        for (var t = this.runtime.getCurrentEventStack(), e = this.actions.length; t.actindex < e; t.actindex++)
            if (this.actions[t.actindex].run())
                return;
        this.run_subevents()
    }
    ,
    i.prototype.run_subevents = function() {
        if (this.subevents.length) {
            var t, e, i, s, n = this.subevents.length - 1;
            if (this.runtime.pushEventStack(this),
            this.solWriterAfterCnds)
                for (t = 0,
                e = this.subevents.length; t < e; t++)
                    i = this.subevents[t],
                    (s = !this.toplevelgroup || !this.group && t < n) && this.runtime.pushCopySol(i.solModifiers),
                    i.run(),
                    s ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
            else
                for (t = 0,
                e = this.subevents.length; t < e; t++)
                    this.subevents[t].run();
            this.runtime.popEventStack()
        }
    }
    ,
    i.prototype.run_pretrigger = function() {
        var t = this.runtime.getCurrentEventStack();
        t.current_event = this;
        var e, i = !1;
        for (t.cndindex = 0,
        e = this.conditions.length; t.cndindex < e; t.cndindex++)
            if (this.conditions[t.cndindex].run())
                i = !0;
            else if (!this.orblock)
                return !1;
        return !this.orblock || i
    }
    ,
    i.prototype.retrigger = function() {
        this.runtime.execcount++;
        var t, e = this.runtime.getCurrentEventStack().cndindex, i = this.runtime.pushEventStack(this);
        if (!this.orblock)
            for (i.cndindex = e + 1,
            t = this.conditions.length; i.cndindex < t; i.cndindex++)
                if (!this.conditions[i.cndindex].run())
                    return this.runtime.popEventStack(),
                    !1;
        return this.run_actions_and_subevents(),
        this.runtime.popEventStack(),
        !0
    }
    ,
    i.prototype.isFirstConditionOfType = function(t) {
        var e = t.index;
        if (0 === e)
            return !0;
        for (--e; 0 <= e; --e)
            if (this.conditions[e].type === t.type)
                return !1;
        return !0
    }
    ,
    cr.eventblock = i,
    r.prototype.postInit = function() {
        for (var t, e = 0, i = this.parameters.length; e < i; e++)
            (t = this.parameters[e]).postInit(),
            t.variesPerInstance && (this.anyParamVariesPerInstance = !0)
    }
    ,
    r.prototype.run_true = function() {
        return !0
    }
    ,
    r.prototype.run_system = function() {
        for (var t = 0, e = this.parameters.length; t < e; t++)
            this.results[t] = this.parameters[t].get();
        return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
    }
    ,
    r.prototype.run_static = function() {
        for (var t = 0, e = this.parameters.length; t < e; t++)
            this.results[t] = this.parameters[t].get();
        var i = this.func.apply(this.behaviortype || this.type, this.results);
        return this.type.applySolToContainer(),
        i
    }
    ,
    r.prototype.run_object = function() {
        var t, e, i, s, n, r, o, a, h, c = this.type, l = c.getCurrentSol(), u = this.block.orblock && !this.trigger, p = 0, d = c.is_contained, f = c.is_family, y = c.family_index, g = this.beh_index, m = -1 < g, _ = this.anyParamVariesPerInstance, v = this.parameters, b = this.results, w = this.inverted, x = this.func;
        if (_)
            for (t = 0,
            i = v.length; t < i; ++t)
                (s = v[t]).variesPerInstance || (b[t] = s.get(0));
        else
            for (t = 0,
            i = v.length; t < i; ++t)
                b[t] = v[t].get(0);
        if (l.select_all) {
            for (cr.clearArray(l.instances),
            cr.clearArray(l.else_instances),
            C = 0,
            k = (S = c.instances).length; C < k; ++C) {
                if (r = S[C],
                _)
                    for (t = 0,
                    i = v.length; t < i; ++t)
                        (s = v[t]).variesPerInstance && (b[t] = s.get(C));
                n = m ? (p = 0,
                f && (p = r.type.family_beh_map[y]),
                x.apply(r.behavior_insts[g + p], b)) : x.apply(r, b),
                cr.xor(n, w) ? l.instances.push(r) : u && l.else_instances.push(r)
            }
            return c.finish && c.finish(!0),
            l.select_all = !1,
            c.applySolToContainer(),
            l.hasObjects()
        }
        e = 0;
        for (var S, T = u && !this.block.isFirstConditionOfType(this), A = !1, C = 0, k = (S = T ? l.else_instances : l.instances).length; C < k; ++C) {
            if (r = S[C],
            _)
                for (t = 0,
                i = v.length; t < i; ++t)
                    (s = v[t]).variesPerInstance && (b[t] = s.get(C));
            if (n = m ? (p = 0,
            f && (p = r.type.family_beh_map[y]),
            x.apply(r.behavior_insts[g + p], b)) : x.apply(r, b),
            cr.xor(n, w))
                if (A = !0,
                T) {
                    if (l.instances.push(r),
                    d)
                        for (t = 0,
                        i = r.siblings.length; t < i; t++)
                            (o = r.siblings[t]).type.getCurrentSol().instances.push(o)
                } else {
                    if (S[e] = r,
                    d)
                        for (t = 0,
                        i = r.siblings.length; t < i; t++)
                            (o = r.siblings[t]).type.getCurrentSol().instances[e] = o;
                    e++
                }
            else if (T) {
                if (S[e] = r,
                d)
                    for (t = 0,
                    i = r.siblings.length; t < i; t++)
                        (o = r.siblings[t]).type.getCurrentSol().else_instances[e] = o;
                e++
            } else if (u && (l.else_instances.push(r),
            d))
                for (t = 0,
                i = r.siblings.length; t < i; t++)
                    (o = r.siblings[t]).type.getCurrentSol().else_instances.push(o)
        }
        if (cr.truncateArray(S, e),
        d)
            for (C = 0,
            k = (h = c.container).length; C < k; C++)
                a = h[C].getCurrentSol(),
                T ? cr.truncateArray(a.else_instances, e) : cr.truncateArray(a.instances, e);
        var O = A;
        if (T && !A)
            for (C = 0,
            k = l.instances.length; C < k; C++) {
                if (r = l.instances[C],
                _)
                    for (t = 0,
                    i = v.length; t < i; t++)
                        (s = v[t]).variesPerInstance && (b[t] = s.get(C));
                if (n = m ? x.apply(r.behavior_insts[g], b) : x.apply(r, b),
                cr.xor(n, w)) {
                    A = !0;
                    break
                }
            }
        return c.finish && c.finish(O || u),
        u ? A : l.hasObjects()
    }
    ,
    cr.condition = r,
    h.prototype.postInit = function() {
        for (var t, e = 0, i = this.parameters.length; e < i; e++)
            (t = this.parameters[e]).postInit(),
            t.variesPerInstance && (this.anyParamVariesPerInstance = !0)
    }
    ,
    h.prototype.run_system = function() {
        for (var t = this.runtime, e = this.parameters, i = this.results, s = 0, n = e.length; s < n; ++s)
            i[s] = e[s].get();
        return this.func.apply(t.system, i)
    }
    ,
    h.prototype.run_object = function() {
        var t, e, i, s, n, r, o, a = this.type, h = this.beh_index, c = a.family_index, l = this.anyParamVariesPerInstance, u = this.parameters, p = this.results, d = this.func, f = a.getCurrentSol().getObjects(), y = a.is_family, g = -1 < h;
        if (l)
            for (e = 0,
            s = u.length; e < s; ++e)
                (n = u[e]).variesPerInstance || (p[e] = n.get(0));
        else
            for (e = 0,
            s = u.length; e < s; ++e)
                p[e] = u[e].get(0);
        for (t = 0,
        i = f.length; t < i; ++t) {
            if (r = f[t],
            l)
                for (e = 0,
                s = u.length; e < s; ++e)
                    (n = u[e]).variesPerInstance && (p[e] = n.get(t));
            g ? (o = 0,
            y && (o = r.type.family_beh_map[c]),
            d.apply(r.behavior_insts[h + o], p)) : d.apply(r, p)
        }
        return !1
    }
    ,
    cr.action = h;
    var c = []
      , l = -1;
    function u() {
        return l++,
        c.length === l && c.push(new cr.expvalue),
        c[l]
    }
    function p() {
        l--
    }
    function d(t, e) {
        var i, s, n;
        switch (this.owner = t,
        this.block = t.block,
        this.sheet = t.sheet,
        this.runtime = t.runtime,
        this.type = e[0],
        this.expression = null,
        this.solindex = 0,
        this.get = null,
        this.combosel = 0,
        this.layout = null,
        this.key = 0,
        this.object = null,
        this.index = 0,
        this.varname = null,
        this.eventvar = null,
        this.fileinfo = null,
        this.subparams = null,
        this.variadicret = null,
        this.subparams = null,
        this.variadicret = null,
        this.variesPerInstance = !1,
        e[0]) {
        case 0:
        case 7:
            this.expression = new cr.expNode(this,e[1]),
            this.solindex = 0,
            this.get = this.get_exp;
            break;
        case 1:
            this.expression = new cr.expNode(this,e[1]),
            this.solindex = 0,
            this.get = this.get_exp_str;
            break;
        case 5:
            this.expression = new cr.expNode(this,e[1]),
            this.solindex = 0,
            this.get = this.get_layer;
            break;
        case 3:
        case 8:
            this.combosel = e[1],
            this.get = this.get_combosel;
            break;
        case 6:
            this.layout = this.runtime.layouts[e[1]],
            this.get = this.get_layout;
            break;
        case 9:
            this.key = e[1],
            this.get = this.get_key;
            break;
        case 4:
            this.object = this.runtime.types_by_index[e[1]],
            this.get = this.get_object,
            this.block.addSolModifier(this.object),
            this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
            break;
        case 10:
            this.index = e[1],
            t.type && t.type.is_family ? (this.get = this.get_familyvar,
            this.variesPerInstance = !0) : this.get = this.get_instvar;
            break;
        case 11:
            this.varname = e[1],
            this.eventvar = null,
            this.get = this.get_eventvar;
            break;
        case 2:
        case 12:
            this.fileinfo = e[1],
            this.get = this.get_audiofile;
            break;
        case 13:
            for (this.get = this.get_variadic,
            this.subparams = [],
            this.variadicret = [],
            i = 1,
            s = e.length; i < s; i++)
                n = new cr.parameter(this.owner,e[i]),
                cr.seal(n),
                this.subparams.push(n),
                this.variadicret.push(0)
        }
    }
    function f(t, e, i) {
        this.sheet = t,
        this.parent = e,
        this.runtime = t.runtime,
        this.solModifiers = [],
        this.name = i[1],
        this.vartype = i[2],
        this.initial = i[3],
        this.is_static = !!i[4],
        this.is_constant = !!i[5],
        this.sid = i[6],
        (this.runtime.varsBySid[this.sid.toString()] = this).data = this.initial,
        this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++,
        this.runtime.all_local_vars.push(this)) : (this.localIndex = -1,
        this.runtime.all_global_vars.push(this))
    }
    function y(t, e, i) {
        this.sheet = t,
        this.parent = e,
        this.runtime = t.runtime,
        this.solModifiers = [],
        this.include_sheet = null,
        this.include_sheet_name = i[1],
        this.active = !0
    }
    function g() {
        this.temp_parents_arr = [],
        this.reset(null),
        cr.seal(this)
    }
    d.prototype.postInit = function() {
        var t, e;
        if (11 === this.type)
            this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
        else if (13 === this.type)
            for (t = 0,
            e = this.subparams.length; t < e; t++)
                this.subparams[t].postInit();
        this.expression && this.expression.postInit()
    }
    ,
    d.prototype.maybeVaryForType = function(t) {
        this.variesPerInstance || t && (t.plugin.singleglobal || (this.variesPerInstance = !0))
    }
    ,
    d.prototype.setVaries = function() {
        this.variesPerInstance = !0
    }
    ,
    d.prototype.get_exp = function(t) {
        this.solindex = t || 0;
        t = u();
        return this.expression.get(t),
        p(),
        t.data
    }
    ,
    d.prototype.get_exp_str = function(t) {
        this.solindex = t || 0;
        t = u();
        return this.expression.get(t),
        p(),
        cr.is_string(t.data) ? t.data : ""
    }
    ,
    d.prototype.get_object = function() {
        return this.object
    }
    ,
    d.prototype.get_combosel = function() {
        return this.combosel
    }
    ,
    d.prototype.get_layer = function(t) {
        this.solindex = t || 0;
        t = u();
        return this.expression.get(t),
        p(),
        t.is_number() ? this.runtime.getLayerByNumber(t.data) : this.runtime.getLayerByName(t.data)
    }
    ,
    d.prototype.get_layout = function() {
        return this.layout
    }
    ,
    d.prototype.get_key = function() {
        return this.key
    }
    ,
    d.prototype.get_instvar = function() {
        return this.index
    }
    ,
    d.prototype.get_familyvar = function(t) {
        var e = t || 0
          , i = this.owner.type
          , s = null
          , n = i.getCurrentSol()
          , t = n.getObjects();
        if (t.length)
            s = t[e % t.length].type;
        else if (n.else_instances.length)
            s = n.else_instances[e % n.else_instances.length].type;
        else {
            if (!i.instances.length)
                return 0;
            s = i.instances[e % i.instances.length].type
        }
        return this.index + s.family_var_map[i.family_index]
    }
    ,
    d.prototype.get_eventvar = function() {
        return this.eventvar
    }
    ,
    d.prototype.get_audiofile = function() {
        return this.fileinfo
    }
    ,
    d.prototype.get_variadic = function() {
        for (var t = 0, e = this.subparams.length; t < e; t++)
            this.variadicret[t] = this.subparams[t].get();
        return this.variadicret
    }
    ,
    cr.parameter = d,
    f.prototype.postInit = function() {
        this.solModifiers = n(this.solModifiers)
    }
    ,
    f.prototype.setValue = function(t) {
        var e = this.runtime.getCurrentLocalVarStack();
        this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1),
        e[this.localIndex] = t) : this.data = t
    }
    ,
    f.prototype.getValue = function() {
        var t = this.runtime.getCurrentLocalVarStack();
        return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length || void 0 === t[this.localIndex] ? this.initial : t[this.localIndex]
    }
    ,
    f.prototype.run = function() {
        !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
    }
    ,
    cr.eventvariable = f,
    y.prototype.toString = function() {
        return "include:" + this.include_sheet.toString()
    }
    ,
    y.prototype.postInit = function() {
        this.include_sheet = this.runtime.eventsheets[this.include_sheet_name],
        this.sheet.includes.add(this),
        this.solModifiers = n(this.solModifiers);
        for (var t = this.parent; t; )
            t.group && t.contained_includes.push(this),
            t = t.parent;
        this.updateActive()
    }
    ,
    y.prototype.run = function() {
        this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index),
        this.include_sheet.hasRun || this.include_sheet.run(!0),
        this.parent && this.runtime.popSol(this.runtime.types_by_index)
    }
    ,
    y.prototype.updateActive = function() {
        for (var t = this.parent; t; ) {
            if (t.group && !t.group_active)
                return void (this.active = !1);
            t = t.parent
        }
        this.active = !0
    }
    ,
    y.prototype.isActive = function() {
        return this.active
    }
    ,
    cr.eventinclude = y,
    g.prototype.reset = function(t) {
        this.current_event = t,
        this.cndindex = 0,
        this.actindex = 0,
        cr.clearArray(this.temp_parents_arr),
        this.last_event_true = !1,
        this.else_branch_ran = !1,
        this.any_true_state = !1
    }
    ,
    g.prototype.isModifierAfterCnds = function() {
        return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
    }
    ,
    cr.eventStackFrame = g
}(),
function() {
    function t(t, e) {
        this.owner = t,
        this.runtime = t.runtime,
        this.type = e[0],
        this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
        var i = null;
        switch (this.value = null,
        this.first = null,
        this.second = null,
        this.third = null,
        this.func = null,
        this.results = null,
        this.parameters = null,
        this.object_type = null,
        this.beh_index = -1,
        this.instance_expr = null,
        this.varindex = -1,
        this.behavior_type = null,
        this.varname = null,
        this.eventvar = null,
        this.return_string = !1,
        this.type) {
        case 0:
        case 1:
        case 2:
            this.value = e[1];
            break;
        case 3:
            this.first = new cr.expNode(t,e[1]);
            break;
        case 18:
            this.first = new cr.expNode(t,e[1]),
            this.second = new cr.expNode(t,e[2]),
            this.third = new cr.expNode(t,e[3]);
            break;
        case 19:
            this.func = this.runtime.GetObjectReference(e[1]),
            this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(),
            this.results = [],
            this.parameters = [],
            3 === e.length ? (i = e[2],
            this.results.length = i.length + 1) : this.results.length = 1;
            break;
        case 20:
            this.object_type = this.runtime.types_by_index[e[1]],
            this.beh_index = -1,
            this.func = this.runtime.GetObjectReference(e[2]),
            this.return_string = e[3],
            cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(),
            e[4] ? this.instance_expr = new cr.expNode(t,e[4]) : this.instance_expr = null,
            this.results = [],
            this.parameters = [],
            6 === e.length ? (i = e[5],
            this.results.length = i.length + 1) : this.results.length = 1;
            break;
        case 21:
            this.object_type = this.runtime.types_by_index[e[1]],
            this.return_string = e[2],
            e[3] ? this.instance_expr = new cr.expNode(t,e[3]) : this.instance_expr = null,
            this.varindex = e[4];
            break;
        case 22:
            this.object_type = this.runtime.types_by_index[e[1]],
            this.behavior_type = this.object_type.getBehaviorByName(e[2]),
            this.beh_index = this.object_type.getBehaviorIndexByName(e[2]),
            this.func = this.runtime.GetObjectReference(e[3]),
            this.return_string = e[4],
            e[5] ? this.instance_expr = new cr.expNode(t,e[5]) : this.instance_expr = null,
            this.results = [],
            this.parameters = [],
            7 === e.length ? (i = e[6],
            this.results.length = i.length + 1) : this.results.length = 1;
            break;
        case 23:
            this.varname = e[1],
            this.eventvar = null
        }
        if (this.owner.maybeVaryForType(this.object_type),
        4 <= this.type && this.type <= 17 && (this.first = new cr.expNode(t,e[1]),
        this.second = new cr.expNode(t,e[2])),
        i)
            for (var s = 0, n = i.length; s < n; s++)
                this.parameters.push(new cr.expNode(t,i[s]));
        cr.seal(this)
    }
    t.prototype.postInit = function() {
        if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)),
        this.first && this.first.postInit(),
        this.second && this.second.postInit(),
        this.third && this.third.postInit(),
        this.instance_expr && this.instance_expr.postInit(),
        this.parameters)
            for (var t = 0, e = this.parameters.length; t < e; t++)
                this.parameters[t].postInit()
    }
    ;
    var e = []
      , i = -1;
    function l() {
        return ++i,
        e.length === i && e.push(new cr.expvalue),
        e[i]
    }
    function u() {
        --i
    }
    function p(t, e, i) {
        for (var s = 0, n = t.length; s < n; ++s)
            t[s].get(i),
            e[s + 1] = i.data
    }
    function s(t, e) {
        this.type = t || cr.exptype.Integer,
        this.data = e || 0,
        this.object_class = null,
        this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)),
        cr.seal(this)
    }
    t.prototype.eval_system_exp = function(t) {
        var e = this.parameters
          , i = this.results;
        i[0] = t,
        p(e, i, l()),
        u(),
        this.func.apply(this.runtime.system, i)
    }
    ,
    t.prototype.eval_object_exp = function(t) {
        var e = this.object_type
          , i = this.results
          , s = this.parameters
          , n = this.instance_expr
          , r = this.func
          , o = this.owner.solindex
          , a = e.getCurrentSol()
          , h = a.getObjects();
        if (!h.length) {
            if (!a.else_instances.length)
                return void (this.return_string ? t.set_string("") : t.set_int(0));
            h = a.else_instances
        }
        (i[0] = t).object_class = e;
        t = l();
        p(s, i, t),
        n && (n.get(t),
        t.is_number() && (o = t.data,
        h = e.instances)),
        u();
        e = h.length;
        (e <= o || o <= -e) && (o %= e),
        o < 0 && (o += e);
        r.apply(h[o], i)
    }
    ,
    t.prototype.eval_behavior_exp = function(t) {
        var e = this.object_type
          , i = this.results
          , s = this.parameters
          , n = this.instance_expr
          , r = this.beh_index
          , o = this.func
          , a = this.owner.solindex
          , h = e.getCurrentSol()
          , c = h.getObjects();
        if (!c.length) {
            if (!h.else_instances.length)
                return void (this.return_string ? t.set_string("") : t.set_int(0));
            c = h.else_instances
        }
        (i[0] = t).object_class = e;
        t = l();
        p(s, i, t),
        n && (n.get(t),
        t.is_number() && (a = t.data,
        c = e.instances)),
        u();
        t = c.length;
        (t <= a || a <= -t) && (a %= t),
        a < 0 && (a += t);
        c = c[a],
        a = 0;
        e.is_family && (a = c.type.family_beh_map[e.family_index]);
        o.apply(c.behavior_insts[r + a], i)
    }
    ,
    t.prototype.eval_instvar_exp = function(t) {
        var e, i = this.instance_expr, s = this.object_type, n = this.varindex, r = this.owner.solindex, o = s.getCurrentSol(), a = o.getObjects();
        if (!a.length) {
            if (!o.else_instances.length)
                return void (this.return_string ? t.set_string("") : t.set_int(0));
            a = o.else_instances
        }
        if (i) {
            o = l();
            if (i.get(o),
            o.is_number()) {
                r = o.data;
                var h = s.instances;
                0 !== h.length && (r %= h.length) < 0 && (r += h.length);
                var c = (e = s.getInstanceByIID(r)).instance_vars[n];
                return cr.is_string(c) ? t.set_string(c) : t.set_float(c),
                void u()
            }
            u()
        }
        h = a.length;
        (h <= r || r <= -h) && (r %= h),
        r < 0 && (r += h),
        e = a[r];
        r = 0;
        s.is_family && (r = e.type.family_var_map[s.family_index]);
        c = e.instance_vars[n + r];
        cr.is_string(c) ? t.set_string(c) : t.set_float(c)
    }
    ,
    t.prototype.eval_int = function(t) {
        t.type = cr.exptype.Integer,
        t.data = this.value
    }
    ,
    t.prototype.eval_float = function(t) {
        t.type = cr.exptype.Float,
        t.data = this.value
    }
    ,
    t.prototype.eval_string = function(t) {
        t.type = cr.exptype.String,
        t.data = this.value
    }
    ,
    t.prototype.eval_unaryminus = function(t) {
        this.first.get(t),
        t.is_number() && (t.data = -t.data)
    }
    ,
    t.prototype.eval_add = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data += e.data,
        e.is_float() && t.make_float()),
        u()
    }
    ,
    t.prototype.eval_subtract = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data -= e.data,
        e.is_float() && t.make_float()),
        u()
    }
    ,
    t.prototype.eval_multiply = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data *= e.data,
        e.is_float() && t.make_float()),
        u()
    }
    ,
    t.prototype.eval_divide = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data /= e.data,
        t.make_float()),
        u()
    }
    ,
    t.prototype.eval_mod = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data %= e.data,
        e.is_float() && t.make_float()),
        u()
    }
    ,
    t.prototype.eval_power = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data = Math.pow(t.data, e.data),
        e.is_float() && t.make_float()),
        u()
    }
    ,
    t.prototype.eval_and = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        e.is_string() || t.is_string() ? this.eval_and_stringconcat(t, e) : this.eval_and_logical(t, e),
        u()
    }
    ,
    t.prototype.eval_and_stringconcat = function(t, e) {
        t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
    }
    ,
    t.prototype.eval_and_stringconcat_str_str = function(t, e) {
        t.data += e.data
    }
    ,
    t.prototype.eval_and_stringconcat_num = function(t, e) {
        t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
    }
    ,
    t.prototype.eval_and_logical = function(t, e) {
        t.set_int(t.data && e.data ? 1 : 0)
    }
    ,
    t.prototype.eval_or = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.is_number() && e.is_number() && (t.data || e.data ? t.set_int(1) : t.set_int(0)),
        u()
    }
    ,
    t.prototype.eval_conditional = function(t) {
        this.first.get(t),
        (t.data ? this.second : this.third).get(t)
    }
    ,
    t.prototype.eval_equal = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.set_int(t.data === e.data ? 1 : 0),
        u()
    }
    ,
    t.prototype.eval_notequal = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.set_int(t.data !== e.data ? 1 : 0),
        u()
    }
    ,
    t.prototype.eval_less = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.set_int(t.data < e.data ? 1 : 0),
        u()
    }
    ,
    t.prototype.eval_lessequal = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.set_int(t.data <= e.data ? 1 : 0),
        u()
    }
    ,
    t.prototype.eval_greater = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.set_int(t.data > e.data ? 1 : 0),
        u()
    }
    ,
    t.prototype.eval_greaterequal = function(t) {
        this.first.get(t);
        var e = l();
        this.second.get(e),
        t.set_int(t.data >= e.data ? 1 : 0),
        u()
    }
    ,
    t.prototype.eval_eventvar_exp = function(t) {
        var e = this.eventvar.getValue();
        cr.is_number(e) ? t.set_float(e) : t.set_string(e)
    }
    ,
    cr.expNode = t,
    s.prototype.is_int = function() {
        return this.type === cr.exptype.Integer
    }
    ,
    s.prototype.is_float = function() {
        return this.type === cr.exptype.Float
    }
    ,
    s.prototype.is_number = function() {
        return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
    }
    ,
    s.prototype.is_string = function() {
        return this.type === cr.exptype.String
    }
    ,
    s.prototype.make_int = function() {
        this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)),
        this.type = cr.exptype.Integer)
    }
    ,
    s.prototype.make_float = function() {
        this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)),
        this.type = cr.exptype.Float)
    }
    ,
    s.prototype.make_string = function() {
        this.is_string() || (this.data = this.data.toString(),
        this.type = cr.exptype.String)
    }
    ,
    s.prototype.set_int = function(t) {
        this.type = cr.exptype.Integer,
        this.data = Math.floor(t)
    }
    ,
    s.prototype.set_float = function(t) {
        this.type = cr.exptype.Float,
        this.data = t
    }
    ,
    s.prototype.set_string = function(t) {
        this.type = cr.exptype.String,
        this.data = t
    }
    ,
    s.prototype.set_any = function(t) {
        cr.is_number(t) ? (this.type = cr.exptype.Float,
        this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String,
        this.data = t.toString()) : (this.type = cr.exptype.Integer,
        this.data = 0)
    }
    ,
    cr.expvalue = s,
    cr.exptype = {
        Integer: 0,
        Float: 1,
        String: 2
    }
}(),
cr.system_object = function(t) {
    this.runtime = t,
    this.waits = []
}
,
cr.system_object.prototype.saveToJSON = function() {
    for (var t, e, i, s, n, r, o, a = {
        waits: []
    }, h = a.waits, c = 0, l = this.waits.length; c < l; c++) {
        for (o = {
            t: (s = this.waits[c]).time,
            st: s.signaltag,
            s: s.signalled,
            ev: s.ev.sid,
            sm: [],
            sols: {}
        },
        s.ev.actions[s.actindex] && (o.act = s.ev.actions[s.actindex].sid),
        t = 0,
        e = s.solModifiers.length; t < e; t++)
            o.sm.push(s.solModifiers[t].sid);
        for (i in s.sols)
            if (s.sols.hasOwnProperty(i)) {
                for (n = this.runtime.types_by_index[parseInt(i, 10)],
                r = {
                    sa: s.sols[i].sa,
                    insts: []
                },
                t = 0,
                e = s.sols[i].insts.length; t < e; t++)
                    r.insts.push(s.sols[i].insts[t].uid);
                o.sols[n.sid.toString()] = r
            }
        h.push(o)
    }
    return a
}
,
cr.system_object.prototype.loadFromJSON = function(t) {
    var e, i, s, n, r, o, a, h, c, l, u, p, d, f = t.waits;
    for (cr.clearArray(this.waits),
    e = 0,
    i = f.length; e < i; e++)
        if (o = f[e],
        h = this.runtime.blocksBySid[o.ev.toString()]) {
            for (c = -1,
            s = 0,
            n = h.actions.length; s < n; s++)
                if (h.actions[s].sid === o.act) {
                    c = s;
                    break
                }
            if (-1 !== c) {
                for ((a = {
                    sols: {},
                    solModifiers: [],
                    deleteme: !1
                }).time = o.t,
                a.signaltag = o.st || "",
                a.signalled = !!o.s,
                a.ev = h,
                a.actindex = c,
                s = 0,
                n = o.sm.length; s < n; s++)
                    (l = this.runtime.getObjectTypeBySid(o.sm[s])) && a.solModifiers.push(l);
                for (r in o.sols)
                    if (o.sols.hasOwnProperty(r) && (l = this.runtime.getObjectTypeBySid(parseInt(r, 10)))) {
                        for (p = {
                            sa: (u = o.sols[r]).sa,
                            insts: []
                        },
                        s = 0,
                        n = u.insts.length; s < n; s++)
                            (d = this.runtime.getObjectByUID(u.insts[s])) && p.insts.push(d);
                        a.sols[l.index.toString()] = p
                    }
                this.waits.push(a)
            }
        }
}
,
function() {
    var t = cr.system_object.prototype;
    function e() {}
    e.prototype.EveryTick = function() {
        return !0
    }
    ,
    e.prototype.OnLayoutStart = function() {
        return !0
    }
    ,
    e.prototype.OnLayoutEnd = function() {
        return !0
    }
    ,
    e.prototype.Compare = function(t, e, i) {
        return cr.do_cmp(t, e, i)
    }
    ,
    e.prototype.CompareTime = function(t, e) {
        var i = this.runtime.kahanTime.sum;
        if (0 !== t)
            return cr.do_cmp(i, t, e);
        t = this.runtime.getCurrentCondition();
        return !t.extra.CompareTime_executed && e <= i && (t.extra.CompareTime_executed = !0)
    }
    ,
    e.prototype.LayerVisible = function(t) {
        return !!t && t.visible
    }
    ,
    e.prototype.LayerEmpty = function(t) {
        return !!t && !t.instances.length
    }
    ,
    e.prototype.LayerCmpOpacity = function(t, e, i) {
        return !!t && cr.do_cmp(100 * t.opacity, e, i)
    }
    ,
    e.prototype.Repeat = function(t) {
        var e, i = this.runtime.getCurrentEventStack(), s = i.current_event, i = i.isModifierAfterCnds(), n = this.runtime.pushLoopStack();
        if (i)
            for (e = 0; e < t && !n.stopped; e++)
                this.runtime.pushCopySol(s.solModifiers),
                n.index = e,
                s.retrigger(),
                this.runtime.popSol(s.solModifiers);
        else
            for (e = 0; e < t && !n.stopped; e++)
                n.index = e,
                s.retrigger();
        return this.runtime.popLoopStack(),
        !1
    }
    ,
    e.prototype.While = function(t) {
        var e, i = this.runtime.getCurrentEventStack(), s = i.current_event, i = i.isModifierAfterCnds(), n = this.runtime.pushLoopStack();
        if (i)
            for (e = 0; !n.stopped; e++)
                this.runtime.pushCopySol(s.solModifiers),
                n.index = e,
                s.retrigger() || (n.stopped = !0),
                this.runtime.popSol(s.solModifiers);
        else
            for (e = 0; !n.stopped; e++)
                n.index = e,
                s.retrigger() || (n.stopped = !0);
        return this.runtime.popLoopStack(),
        !1
    }
    ,
    e.prototype.For = function(t, e, i) {
        var s, n = this.runtime.getCurrentEventStack(), r = n.current_event, n = n.isModifierAfterCnds(), o = this.runtime.pushLoopStack(t);
        if (i < e)
            if (n)
                for (s = e; i <= s && !o.stopped; --s)
                    this.runtime.pushCopySol(r.solModifiers),
                    o.index = s,
                    r.retrigger(),
                    this.runtime.popSol(r.solModifiers);
            else
                for (s = e; i <= s && !o.stopped; --s)
                    o.index = s,
                    r.retrigger();
        else if (n)
            for (s = e; s <= i && !o.stopped; ++s)
                this.runtime.pushCopySol(r.solModifiers),
                o.index = s,
                r.retrigger(),
                this.runtime.popSol(r.solModifiers);
        else
            for (s = e; s <= i && !o.stopped; ++s)
                o.index = s,
                r.retrigger();
        return this.runtime.popLoopStack(),
        !1
    }
    ;
    var m = []
      , _ = -1;
    function v(t, e) {
        t = t.extra.c2_feo_val,
        e = e.extra.c2_feo_val;
        return cr.is_number(t) && cr.is_number(e) ? t - e : (t = "" + t) < (e = "" + e) ? -1 : e < t ? 1 : 0
    }
    e.prototype.ForEach = function(t) {
        var e = t.getCurrentSol();
        _++,
        m.length === _ && m.push([]);
        var i = m[_];
        cr.shallowAssignArray(i, e.getObjects());
        var s, n, r, o, a, h, c, l = this.runtime.getCurrentEventStack(), u = l.current_event, l = l.isModifierAfterCnds(), p = this.runtime.pushLoopStack(), d = t.is_contained;
        if (l)
            for (s = 0,
            n = i.length; s < n && !p.stopped; s++) {
                if (this.runtime.pushCopySol(u.solModifiers),
                a = i[s],
                (e = t.getCurrentSol()).select_all = !1,
                cr.clearArray(e.instances),
                e.instances[0] = a,
                d)
                    for (r = 0,
                    o = a.siblings.length; r < o; r++)
                        (c = (h = a.siblings[r]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(c.instances),
                        c.instances[0] = h;
                p.index = s,
                u.retrigger(),
                this.runtime.popSol(u.solModifiers)
            }
        else
            for (e.select_all = !1,
            cr.clearArray(e.instances),
            s = 0,
            n = i.length; s < n && !p.stopped; s++) {
                if (a = i[s],
                e.instances[0] = a,
                d)
                    for (r = 0,
                    o = a.siblings.length; r < o; r++)
                        (c = (h = a.siblings[r]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(c.instances),
                        c.instances[0] = h;
                p.index = s,
                u.retrigger()
            }
        return cr.clearArray(i),
        this.runtime.popLoopStack(),
        _--,
        !1
    }
    ,
    e.prototype.ForEachOrdered = function(t, e, i) {
        var s = t.getCurrentSol();
        _++,
        m.length === _ && m.push([]);
        var n = m[_];
        cr.shallowAssignArray(n, s.getObjects());
        for (var r, o, a, h, c, l = this.runtime.getCurrentEventStack(), u = l.current_event, p = this.runtime.getCurrentCondition(), l = l.isModifierAfterCnds(), d = this.runtime.pushLoopStack(), f = 0, y = n.length; f < y; f++)
            n[f].extra.c2_feo_val = p.parameters[1].get(f);
        n.sort(v),
        1 === i && n.reverse();
        var g = t.is_contained;
        if (l)
            for (f = 0,
            y = n.length; f < y && !d.stopped; f++) {
                if (this.runtime.pushCopySol(u.solModifiers),
                a = n[f],
                (s = t.getCurrentSol()).select_all = !1,
                cr.clearArray(s.instances),
                s.instances[0] = a,
                g)
                    for (r = 0,
                    o = a.siblings.length; r < o; r++)
                        (c = (h = a.siblings[r]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(c.instances),
                        c.instances[0] = h;
                d.index = f,
                u.retrigger(),
                this.runtime.popSol(u.solModifiers)
            }
        else
            for (s.select_all = !1,
            cr.clearArray(s.instances),
            f = 0,
            y = n.length; f < y && !d.stopped; f++) {
                if (a = n[f],
                s.instances[0] = a,
                g)
                    for (r = 0,
                    o = a.siblings.length; r < o; r++)
                        (c = (h = a.siblings[r]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(c.instances),
                        c.instances[0] = h;
                d.index = f,
                u.retrigger()
            }
        return cr.clearArray(n),
        this.runtime.popLoopStack(),
        _--,
        !1
    }
    ,
    e.prototype.PickByComparison = function(t, e, i, s) {
        var n;
        if (t) {
            _++,
            m.length === _ && m.push([]);
            var r = m[_]
              , o = t.getCurrentSol();
            cr.shallowAssignArray(r, o.getObjects()),
            o.select_all && cr.clearArray(o.else_instances);
            for (var a = this.runtime.getCurrentCondition(), h = 0, c = 0, l = r.length; h < l; h++)
                n = r[h],
                r[c] = n,
                e = a.parameters[1].get(h),
                s = a.parameters[3].get(h),
                cr.do_cmp(e, i, s) ? c++ : o.else_instances.push(n);
            return cr.truncateArray(r, c),
            o.select_all = !1,
            cr.shallowAssignArray(o.instances, r),
            cr.clearArray(r),
            _--,
            t.applySolToContainer(),
            !!o.instances.length
        }
    }
    ,
    e.prototype.PickByEvaluate = function(t, e) {
        var i;
        if (t) {
            _++,
            m.length === _ && m.push([]);
            var s = m[_]
              , n = t.getCurrentSol();
            cr.shallowAssignArray(s, n.getObjects()),
            n.select_all && cr.clearArray(n.else_instances);
            for (var r = this.runtime.getCurrentCondition(), o = 0, a = 0, h = s.length; o < h; o++)
                i = s[o],
                s[a] = i,
                r.parameters[1].get(o) ? a++ : n.else_instances.push(i);
            return cr.truncateArray(s, a),
            n.select_all = !1,
            cr.shallowAssignArray(n.instances, s),
            cr.clearArray(s),
            _--,
            t.applySolToContainer(),
            !!n.instances.length
        }
    }
    ,
    e.prototype.TriggerOnce = function() {
        var t = this.runtime.getCurrentCondition().extra;
        void 0 === t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
        var e = t.TriggerOnce_lastTick
          , i = this.runtime.tickcount;
        return t.TriggerOnce_lastTick = i,
        this.runtime.layout_first_tick || e !== i - 1
    }
    ,
    e.prototype.Every = function(t) {
        var e = this.runtime.getCurrentCondition()
          , i = e.extra.Every_lastTime || 0
          , s = this.runtime.kahanTime.sum;
        void 0 === e.extra.Every_seconds && (e.extra.Every_seconds = t);
        var n = e.extra.Every_seconds;
        return i + n <= s ? (e.extra.Every_lastTime = i + n,
        s >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = s),
        e.extra.Every_seconds = t,
        !0) : (s < i - .1 && (e.extra.Every_lastTime = s),
        !1)
    }
    ,
    e.prototype.PickNth = function(t, e) {
        if (!t)
            return !1;
        var i = t.getCurrentSol()
          , s = i.getObjects();
        if ((e = cr.floor(e)) < 0 || e >= s.length)
            return !1;
        e = s[e];
        return i.pick_one(e),
        t.applySolToContainer(),
        !0
    }
    ,
    e.prototype.PickRandom = function(t) {
        if (!t)
            return !1;
        var e = t.getCurrentSol()
          , i = e.getObjects()
          , s = cr.floor(Math.random() * i.length);
        if (s >= i.length)
            return !1;
        s = i[s];
        return e.pick_one(s),
        t.applySolToContainer(),
        !0
    }
    ,
    e.prototype.CompareVar = function(t, e, i) {
        return cr.do_cmp(t.getValue(), e, i)
    }
    ,
    e.prototype.IsGroupActive = function(t) {
        t = this.runtime.groups_by_name[t.toLowerCase()];
        return t && t.group_active
    }
    ,
    e.prototype.IsPreview = function() {
        return "undefined" != typeof cr_is_preview
    }
    ,
    e.prototype.PickAll = function(t) {
        return !!t && (!!t.instances.length && (t.getCurrentSol().select_all = !0,
        t.applySolToContainer(),
        !0))
    }
    ,
    e.prototype.IsMobile = function() {
        return this.runtime.isMobile
    }
    ,
    e.prototype.CompareBetween = function(t, e, i) {
        return e <= t && t <= i
    }
    ,
    e.prototype.Else = function() {
        var t = this.runtime.getCurrentEventStack();
        return !t.else_branch_ran && !t.last_event_true
    }
    ,
    e.prototype.OnLoadFinished = function() {
        return !0
    }
    ,
    e.prototype.OnCanvasSnapshot = function() {
        return !0
    }
    ,
    e.prototype.EffectsSupported = function() {
        return !!this.runtime.glwrap
    }
    ,
    e.prototype.OnSaveComplete = function() {
        return !0
    }
    ,
    e.prototype.OnSaveFailed = function() {
        return !0
    }
    ,
    e.prototype.OnLoadComplete = function() {
        return !0
    }
    ,
    e.prototype.OnLoadFailed = function() {
        return !0
    }
    ,
    e.prototype.ObjectUIDExists = function(t) {
        return !!this.runtime.getObjectByUID(t)
    }
    ,
    e.prototype.IsOnPlatform = function(t) {
        var e = this.runtime;
        switch (t) {
        case 0:
            return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
        case 1:
            return e.isiOS;
        case 2:
            return e.isAndroid;
        case 3:
            return e.isWindows8App;
        case 4:
            return e.isWindowsPhone8;
        case 5:
            return e.isBlackberry10;
        case 6:
            return e.isTizen;
        case 7:
            return e.isCocoonJs;
        case 8:
            return e.isCordova;
        case 9:
            return e.isArcade;
        case 10:
            return e.isNodeWebkit;
        case 11:
            return e.isCrosswalk;
        case 12:
            return e.isAmazonWebApp;
        case 13:
            return e.isWindows10;
        default:
            return !1
        }
    }
    ;
    var i = null
      , s = ""
      , n = "";
    function r(t, e) {
        return i && t === s && e === n || (i = new RegExp(t,e),
        s = t,
        n = e),
        i.lastIndex = 0,
        i
    }
    e.prototype.RegexTest = function(t, e, i) {
        return r(e, i).test(t)
    }
    ;
    var l = [];
    function o() {}
    e.prototype.PickOverlappingPoint = function(t, e, i) {
        if (!t)
            return !1;
        var s, n, r, o = t.getCurrentSol(), a = o.getObjects(), h = this.runtime.getCurrentEventStack().current_event.orblock, c = this.runtime.getCurrentCondition();
        for (o.select_all ? (cr.shallowAssignArray(l, a),
        cr.clearArray(o.else_instances),
        o.select_all = !1,
        cr.clearArray(o.instances)) : h ? (cr.shallowAssignArray(l, o.else_instances),
        cr.clearArray(o.else_instances)) : (cr.shallowAssignArray(l, a),
        cr.clearArray(o.instances)),
        s = 0,
        n = l.length; s < n; ++s)
            (r = l[s]).update_bbox(),
            (cr.xor(r.contains_pt(e, i), c.inverted) ? o.instances : o.else_instances).push(r);
        return t.applySolToContainer(),
        cr.xor(!!o.instances.length, c.inverted)
    }
    ,
    e.prototype.IsNaN = function(t) {
        return !!isNaN(t)
    }
    ,
    e.prototype.AngleWithin = function(t, e, i) {
        return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
    }
    ,
    e.prototype.IsClockwiseFrom = function(t, e) {
        return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
    }
    ,
    e.prototype.IsBetweenAngles = function(t, e, i) {
        t = cr.to_clamped_radians(t),
        e = cr.to_clamped_radians(e),
        i = cr.to_clamped_radians(i);
        return !cr.angleClockwise(i, e) ? !(!cr.angleClockwise(t, e) && cr.angleClockwise(t, i)) : cr.angleClockwise(t, e) && !cr.angleClockwise(t, i)
    }
    ,
    e.prototype.IsValueType = function(t, e) {
        return "number" == typeof t ? 0 === e : 1 === e
    }
    ,
    t.cnds = new e,
    o.prototype.GoToLayout = function(t) {
        this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
    }
    ,
    o.prototype.NextPrevLayout = function(t) {
        var e;
        this.runtime.isloading || this.runtime.changelayout || (e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout),
        t && 0 === e || !t && e === this.runtime.layouts_by_index.length - 1 || (t = this.runtime.layouts_by_index[e + (t ? -1 : 1)],
        this.runtime.changelayout = t))
    }
    ,
    o.prototype.CreateObject = function(t, e, i, s) {
        if (e && t) {
            var n, r, o, a = this.runtime.createInstance(t, e, i, s);
            if (a) {
                if (this.runtime.isInOnDestroy++,
                this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, a),
                a.is_contained)
                    for (n = 0,
                    r = a.siblings.length; n < r; n++)
                        o = a.siblings[n],
                        this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                this.runtime.isInOnDestroy--;
                var h = t.getCurrentSol();
                if (h.select_all = !1,
                cr.clearArray(h.instances),
                (h.instances[0] = a).is_contained)
                    for (n = 0,
                    r = a.siblings.length; n < r; n++)
                        (h = (o = a.siblings[n]).type.getCurrentSol()).select_all = !1,
                        cr.clearArray(h.instances),
                        h.instances[0] = o
            }
        }
    }
    ,
    o.prototype.SetLayerVisible = function(t, e) {
        t && t.visible !== e && (t.visible = e,
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.SetLayerOpacity = function(t, e) {
        t && (e = cr.clamp(e / 100, 0, 1),
        t.opacity !== e && (t.opacity = e,
        this.runtime.redraw = !0))
    }
    ,
    o.prototype.SetLayerScaleRate = function(t, e) {
        t && t.zoomRate !== e && (t.zoomRate = e,
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.SetLayerForceOwnTexture = function(t, e) {
        t && (e = !!e,
        t.forceOwnTexture !== e && (t.forceOwnTexture = e,
        this.runtime.redraw = !0))
    }
    ,
    o.prototype.SetLayoutScale = function(t) {
        this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t,
        this.runtime.running_layout.boundScrolling(),
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.ScrollX = function(t) {
        this.runtime.running_layout.scrollToX(t)
    }
    ,
    o.prototype.ScrollY = function(t) {
        this.runtime.running_layout.scrollToY(t)
    }
    ,
    o.prototype.Scroll = function(t, e) {
        this.runtime.running_layout.scrollToX(t),
        this.runtime.running_layout.scrollToY(e)
    }
    ,
    o.prototype.ScrollToObject = function(t) {
        t = t.getFirstPicked();
        t && (this.runtime.running_layout.scrollToX(t.x),
        this.runtime.running_layout.scrollToY(t.y))
    }
    ,
    o.prototype.SetVar = function(t, e) {
        0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
    }
    ,
    o.prototype.AddVar = function(t, e) {
        0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
    }
    ,
    o.prototype.SubVar = function(t, e) {
        0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
    }
    ,
    o.prototype.SetGroupActive = function(t, e) {
        var i = this.runtime.groups_by_name[t.toLowerCase()];
        if (i)
            switch (e) {
            case 0:
                i.setGroupActive(!1);
                break;
            case 1:
                i.setGroupActive(!0);
                break;
            case 2:
                i.setGroupActive(!i.group_active)
            }
    }
    ,
    o.prototype.SetTimescale = function(t) {
        t < 0 && (t = 0),
        this.runtime.timescale = t
    }
    ,
    o.prototype.SetObjectTimescale = function(t, e) {
        var i = e;
        if (i < 0 && (i = 0),
        t)
            for (var s = t.getCurrentSol().getObjects(), n = 0, r = s.length; n < r; n++)
                s[n].my_timescale = i
    }
    ,
    o.prototype.RestoreObjectTimescale = function(t) {
        if (!t)
            return !1;
        for (var e = t.getCurrentSol().getObjects(), i = 0, s = e.length; i < s; i++)
            e[i].my_timescale = -1
    }
    ;
    var c = [];
    function a() {
        var t = c.length ? c.pop() : {
            sols: {},
            solModifiers: []
        };
        return t.deleteme = !1,
        t
    }
    var u = [];
    function h() {
        var t = u.length ? u.pop() : {
            insts: []
        };
        return t.sa = !1,
        t
    }
    function f(t, e) {
        var i = t[0] - e[0];
        return 0 != i ? i : t[1] - e[1]
    }
    function y(t, e) {
        return t[1] - e[1]
    }
    function p() {}
    o.prototype.Wait = function(t) {
        if (!(t < 0)) {
            var e, i, s, n, r = this.runtime.getCurrentEventStack(), o = a();
            for (o.time = this.runtime.kahanTime.sum + t,
            o.signaltag = "",
            o.signalled = !1,
            o.ev = r.current_event,
            o.actindex = r.actindex + 1,
            e = 0,
            i = this.runtime.types_by_index.length; e < i; e++)
                (s = (n = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === r.current_event.solModifiers.indexOf(n) || (o.solModifiers.push(n),
                (n = h()).sa = s.select_all,
                cr.shallowAssignArray(n.insts, s.instances),
                o.sols[e.toString()] = n);
            return this.waits.push(o),
            !0
        }
    }
    ,
    o.prototype.WaitForSignal = function(t) {
        var e, i, s, n, r = this.runtime.getCurrentEventStack(), o = a();
        for (o.time = -1,
        o.signaltag = t.toLowerCase(),
        o.signalled = !1,
        o.ev = r.current_event,
        o.actindex = r.actindex + 1,
        e = 0,
        i = this.runtime.types_by_index.length; e < i; e++)
            (s = (n = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === r.current_event.solModifiers.indexOf(n) || (o.solModifiers.push(n),
            (n = h()).sa = s.select_all,
            cr.shallowAssignArray(n.insts, s.instances),
            o.sols[e.toString()] = n);
        return this.waits.push(o),
        !0
    }
    ,
    o.prototype.Signal = function(t) {
        for (var e, i = t.toLowerCase(), s = 0, n = this.waits.length; s < n; ++s)
            -1 === (e = this.waits[s]).time && e.signaltag === i && (e.signalled = !0)
    }
    ,
    o.prototype.SetLayerScale = function(t, e) {
        t && t.scale !== e && (t.scale = e,
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.ResetGlobals = function() {
        for (var t, e = 0, i = this.runtime.all_global_vars.length; e < i; e++)
            (t = this.runtime.all_global_vars[e]).data = t.initial
    }
    ,
    o.prototype.SetLayoutAngle = function(t) {
        t = cr.to_radians(t),
        t = cr.clamp_angle(t),
        this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t,
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.SetLayerAngle = function(t, e) {
        t && (e = cr.to_radians(e),
        e = cr.clamp_angle(e),
        t.angle !== e && (t.angle = e,
        this.runtime.redraw = !0))
    }
    ,
    o.prototype.SetLayerParallax = function(t, e, i) {
        if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
            if (t.parallaxX = e / 100,
            t.parallaxY = i / 100,
            1 !== t.parallaxX || 1 !== t.parallaxY)
                for (var s = t.instances, n = 0, r = s.length; n < r; ++n)
                    s[n].type.any_instance_parallaxed = !0;
            this.runtime.redraw = !0
        }
    }
    ,
    o.prototype.SetLayerBackground = function(t, e) {
        var i, s;
        t && (i = cr.GetRValue(e),
        s = cr.GetGValue(e),
        e = cr.GetBValue(e),
        t.background_color[0] === i && t.background_color[1] === s && t.background_color[2] === e || (t.background_color[0] = i,
        t.background_color[1] = s,
        t.background_color[2] = e,
        this.runtime.redraw = !0))
    }
    ,
    o.prototype.SetLayerTransparent = function(t, e) {
        t && !!e != !!t.transparent && (t.transparent = !!e,
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.SetLayerBlendMode = function(t, e) {
        t && t.blend_mode !== e && (t.blend_mode = e,
        t.compositeOp = cr.effectToCompositeOp(t.blend_mode),
        this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl),
        this.runtime.redraw = !0)
    }
    ,
    o.prototype.StopLoop = function() {
        this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
    }
    ,
    o.prototype.GoToLayoutByName = function(t) {
        if (!this.runtime.isloading && !this.runtime.changelayout)
            for (var e in this.runtime.layouts)
                if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t))
                    return void (this.runtime.changelayout = this.runtime.layouts[e])
    }
    ,
    o.prototype.RestartLayout = function(t) {
        var e, i, s;
        if (!this.runtime.isloading && (!this.runtime.changelayout && this.runtime.running_layout))
            for (this.runtime.changelayout = this.runtime.running_layout,
            e = 0,
            i = this.runtime.allGroups.length; e < i; e++)
                (s = this.runtime.allGroups[e]).setGroupActive(s.initially_activated)
    }
    ,
    o.prototype.SnapshotCanvas = function(t, e) {
        this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
    }
    ,
    o.prototype.SetCanvasSize = function(t, e) {
        var i;
        t <= 0 || e <= 0 || (i = this.runtime.fullscreen_mode,
        (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen) && 0 < this.runtime.fullscreen_scaling && (i = this.runtime.fullscreen_scaling),
        0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t,
        this.runtime.original_height = e,
        this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0)))
    }
    ,
    o.prototype.SetLayoutEffectEnabled = function(t, e) {
        this.runtime.running_layout && this.runtime.glwrap && ((e = this.runtime.running_layout.getEffectByName(e)) && (t = 1 === t,
        e.active != t && (e.active = t,
        this.runtime.running_layout.updateActiveEffects(),
        this.runtime.redraw = !0)))
    }
    ,
    o.prototype.SetLayerEffectEnabled = function(t, e, i) {
        t && this.runtime.glwrap && ((i = t.getEffectByName(i)) && (e = 1 === e,
        i.active != e && (i.active = e,
        t.updateActiveEffects(),
        this.runtime.redraw = !0)))
    }
    ,
    o.prototype.SetLayoutEffectParam = function(t, e, i) {
        var s;
        this.runtime.running_layout && this.runtime.glwrap && ((s = this.runtime.running_layout.getEffectByName(t)) && (t = this.runtime.running_layout.effect_params[s.index],
        (e = Math.floor(e)) < 0 || e >= t.length || (1 === this.runtime.glwrap.getProgramParameterType(s.shaderindex, e) && (i /= 100),
        t[e] !== i && (t[e] = i,
        s.active && (this.runtime.redraw = !0)))))
    }
    ,
    o.prototype.SetLayerEffectParam = function(t, e, i, s) {
        t && this.runtime.glwrap && ((e = t.getEffectByName(e)) && (t = t.effect_params[e.index],
        (i = Math.floor(i)) < 0 || i >= t.length || (1 === this.runtime.glwrap.getProgramParameterType(e.shaderindex, i) && (s /= 100),
        t[i] !== s && (t[i] = s,
        e.active && (this.runtime.redraw = !0)))))
    }
    ,
    o.prototype.SaveState = function(t) {
        this.runtime.saveToSlot = t
    }
    ,
    o.prototype.LoadState = function(t) {
        this.runtime.loadFromSlot = t
    }
    ,
    o.prototype.LoadStateJSON = function(t) {
        this.runtime.loadFromJson = t
    }
    ,
    o.prototype.SetHalfFramerateMode = function(t) {
        this.runtime.halfFramerateMode = 0 !== t
    }
    ,
    o.prototype.SetFullscreenQuality = function(t) {
        (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t,
        this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
    }
    ,
    o.prototype.ResetPersisted = function() {
        for (var t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t)
            this.runtime.layouts_by_index[t].persist_data = {},
            this.runtime.layouts_by_index[t].first_visit = !0
    }
    ,
    o.prototype.RecreateInitialObjects = function(t, e, i, s, n) {
        t && this.runtime.running_layout.recreateInitialObjects(t, e, i, s, n)
    }
    ,
    o.prototype.SetPixelRounding = function(t) {
        this.runtime.pixel_rounding = 0 !== t,
        this.runtime.redraw = !0
    }
    ,
    o.prototype.SetMinimumFramerate = function(t) {
        t < 1 && (t = 1),
        120 < t && (t = 120),
        this.runtime.minimumFramerate = t
    }
    ,
    o.prototype.SortZOrderByInstVar = function(t, e) {
        if (t) {
            for (var i, s, n, r, o = t.getCurrentSol().getObjects(), a = [], h = [], c = this.runtime.running_layout, l = t.is_family, u = t.family_index, p = 0, d = o.length; p < d; ++p)
                (i = o[p]).layer && (s = l ? i.instance_vars[e + i.type.family_var_map[u]] : i.instance_vars[e],
                a.push([i.layer.index, i.get_zindex()]),
                h.push([i, s]));
            if (a.length)
                for (a.sort(f),
                h.sort(y),
                p = 0,
                d = a.length; p < d; ++p)
                    i = h[p][0],
                    n = c.layers[a[p][0]],
                    r = a[p][1],
                    n.instances[r] !== i && ((n.instances[r] = i).layer = n).setZIndicesStaleFrom(r)
        }
    }
    ,
    t.acts = new o,
    p.prototype.int = function(t, e) {
        cr.is_string(e) ? (t.set_int(parseInt(e, 10)),
        isNaN(t.data) && (t.data = 0)) : t.set_int(e)
    }
    ,
    p.prototype.float = function(t, e) {
        cr.is_string(e) ? (t.set_float(parseFloat(e)),
        isNaN(t.data) && (t.data = 0)) : t.set_float(e)
    }
    ,
    p.prototype.str = function(t, e) {
        cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
    }
    ,
    p.prototype.len = function(t, e) {
        t.set_int(e.length || 0)
    }
    ,
    p.prototype.random = function(t, e, i) {
        void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
    }
    ,
    p.prototype.sqrt = function(t, e) {
        t.set_float(Math.sqrt(e))
    }
    ,
    p.prototype.abs = function(t, e) {
        t.set_float(Math.abs(e))
    }
    ,
    p.prototype.round = function(t, e) {
        t.set_int(Math.round(e))
    }
    ,
    p.prototype.floor = function(t, e) {
        t.set_int(Math.floor(e))
    }
    ,
    p.prototype.ceil = function(t, e) {
        t.set_int(Math.ceil(e))
    }
    ,
    p.prototype.sin = function(t, e) {
        t.set_float(Math.sin(cr.to_radians(e)))
    }
    ,
    p.prototype.cos = function(t, e) {
        t.set_float(Math.cos(cr.to_radians(e)))
    }
    ,
    p.prototype.tan = function(t, e) {
        t.set_float(Math.tan(cr.to_radians(e)))
    }
    ,
    p.prototype.asin = function(t, e) {
        t.set_float(cr.to_degrees(Math.asin(e)))
    }
    ,
    p.prototype.acos = function(t, e) {
        t.set_float(cr.to_degrees(Math.acos(e)))
    }
    ,
    p.prototype.atan = function(t, e) {
        t.set_float(cr.to_degrees(Math.atan(e)))
    }
    ,
    p.prototype.exp = function(t, e) {
        t.set_float(Math.exp(e))
    }
    ,
    p.prototype.ln = function(t, e) {
        t.set_float(Math.log(e))
    }
    ,
    p.prototype.log10 = function(t, e) {
        t.set_float(Math.log(e) / Math.LN10)
    }
    ,
    p.prototype.max = function(t) {
        var e, i, s, n = arguments[1];
        for ("number" != typeof n && (n = 0),
        e = 2,
        i = arguments.length; e < i; e++)
            "number" == typeof (s = arguments[e]) && n < s && (n = s);
        t.set_float(n)
    }
    ,
    p.prototype.min = function(t) {
        var e, i, s, n = arguments[1];
        for ("number" != typeof n && (n = 0),
        e = 2,
        i = arguments.length; e < i; e++)
            "number" == typeof (s = arguments[e]) && s < n && (n = s);
        t.set_float(n)
    }
    ,
    p.prototype.dt = function(t) {
        t.set_float(this.runtime.dt)
    }
    ,
    p.prototype.timescale = function(t) {
        t.set_float(this.runtime.timescale)
    }
    ,
    p.prototype.wallclocktime = function(t) {
        t.set_float((Date.now() - this.runtime.start_time) / 1e3)
    }
    ,
    p.prototype.time = function(t) {
        t.set_float(this.runtime.kahanTime.sum)
    }
    ,
    p.prototype.tickcount = function(t) {
        t.set_int(this.runtime.tickcount)
    }
    ,
    p.prototype.objectcount = function(t) {
        t.set_int(this.runtime.objectcount)
    }
    ,
    p.prototype.fps = function(t) {
        t.set_int(this.runtime.fps)
    }
    ,
    p.prototype.loopindex = function(t, e) {
        var i, s;
        if (this.runtime.loop_stack.length)
            if (e) {
                for (s = this.runtime.loop_stack_index; 0 <= s; --s)
                    if ((i = this.runtime.loop_stack[s]).name === e)
                        return void t.set_int(i.index);
                t.set_int(0)
            } else
                i = this.runtime.getCurrentLoop(),
                t.set_int(i ? i.index : -1);
        else
            t.set_int(0)
    }
    ,
    p.prototype.distance = function(t, e, i, s, n) {
        t.set_float(cr.distanceTo(e, i, s, n))
    }
    ,
    p.prototype.angle = function(t, e, i, s, n) {
        t.set_float(cr.to_degrees(cr.angleTo(e, i, s, n)))
    }
    ,
    p.prototype.scrollx = function(t) {
        t.set_float(this.runtime.running_layout.scrollX)
    }
    ,
    p.prototype.scrolly = function(t) {
        t.set_float(this.runtime.running_layout.scrollY)
    }
    ,
    p.prototype.newline = function(t) {
        t.set_string("\n")
    }
    ,
    p.prototype.lerp = function(t, e, i, s) {
        t.set_float(cr.lerp(e, i, s))
    }
    ,
    p.prototype.qarp = function(t, e, i, s, n) {
        t.set_float(cr.qarp(e, i, s, n))
    }
    ,
    p.prototype.cubic = function(t, e, i, s, n, r) {
        t.set_float(cr.cubic(e, i, s, n, r))
    }
    ,
    p.prototype.cosp = function(t, e, i, s) {
        t.set_float(cr.cosp(e, i, s))
    }
    ,
    p.prototype.windowwidth = function(t) {
        t.set_int(this.runtime.width)
    }
    ,
    p.prototype.windowheight = function(t) {
        t.set_int(this.runtime.height)
    }
    ,
    p.prototype.uppercase = function(t, e) {
        t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
    }
    ,
    p.prototype.lowercase = function(t, e) {
        t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
    }
    ,
    p.prototype.clamp = function(t, e, i, s) {
        e < i ? t.set_float(i) : s < e ? t.set_float(s) : t.set_float(e)
    }
    ,
    p.prototype.layerscale = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_float(e.scale) : t.set_float(0)
    }
    ,
    p.prototype.layeropacity = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_float(100 * e.opacity) : t.set_float(0)
    }
    ,
    p.prototype.layerscalerate = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_float(e.zoomRate) : t.set_float(0)
    }
    ,
    p.prototype.layerparallaxx = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_float(100 * e.parallaxX) : t.set_float(0)
    }
    ,
    p.prototype.layerparallaxy = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_float(100 * e.parallaxY) : t.set_float(0)
    }
    ,
    p.prototype.layerindex = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_int(e.index) : t.set_int(-1)
    }
    ,
    p.prototype.layoutscale = function(t) {
        this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
    }
    ,
    p.prototype.layoutangle = function(t) {
        t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
    }
    ,
    p.prototype.layerangle = function(t, e) {
        e = this.runtime.getLayer(e);
        e ? t.set_float(cr.to_degrees(e.angle)) : t.set_float(0)
    }
    ,
    p.prototype.layoutwidth = function(t) {
        t.set_int(this.runtime.running_layout.width)
    }
    ,
    p.prototype.layoutheight = function(t) {
        t.set_int(this.runtime.running_layout.height)
    }
    ,
    p.prototype.find = function(t, e, i) {
        cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i),"i"))) : t.set_int(-1)
    }
    ,
    p.prototype.findcase = function(t, e, i) {
        cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i),""))) : t.set_int(-1)
    }
    ,
    p.prototype.left = function(t, e, i) {
        t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
    }
    ,
    p.prototype.right = function(t, e, i) {
        t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
    }
    ,
    p.prototype.mid = function(t, e, i, s) {
        t.set_string(cr.is_string(e) ? e.substr(i, s) : "")
    }
    ,
    p.prototype.tokenat = function(t, e, i, s) {
        cr.is_string(e) && cr.is_string(s) ? (s = e.split(s),
        (i = cr.floor(i)) < 0 || i >= s.length ? t.set_string("") : t.set_string(s[i])) : t.set_string("")
    }
    ,
    p.prototype.tokencount = function(t, e, i) {
        cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
    }
    ,
    p.prototype.replace = function(t, e, i, s) {
        cr.is_string(e) && cr.is_string(i) && cr.is_string(s) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i),"gi"), s)) : t.set_string(cr.is_string(e) ? e : "")
    }
    ,
    p.prototype.trim = function(t, e) {
        t.set_string(cr.is_string(e) ? e.trim() : "")
    }
    ,
    p.prototype.pi = function(t) {
        t.set_float(cr.PI)
    }
    ,
    p.prototype.layoutname = function(t) {
        this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
    }
    ,
    p.prototype.renderer = function(t) {
        t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
    }
    ,
    p.prototype.rendererdetail = function(t) {
        t.set_string(this.runtime.glUnmaskedRenderer)
    }
    ,
    p.prototype.anglediff = function(t, e, i) {
        t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
    }
    ,
    p.prototype.choose = function(t) {
        var e = cr.floor(Math.random() * (arguments.length - 1));
        t.set_any(arguments[e + 1])
    }
    ,
    p.prototype.rgb = function(t, e, i, s) {
        t.set_int(cr.RGB(e, i, s))
    }
    ,
    p.prototype.projectversion = function(t) {
        t.set_string(this.runtime.versionstr)
    }
    ,
    p.prototype.projectname = function(t) {
        t.set_string(this.runtime.projectName)
    }
    ,
    p.prototype.anglelerp = function(t, e, i, s) {
        e = cr.to_radians(e),
        i = cr.to_radians(i);
        var n = cr.angleDiff(e, i);
        cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + n * s)) : t.set_float(cr.to_clamped_degrees(e - n * s))
    }
    ,
    p.prototype.anglerotate = function(t, e, i, s) {
        e = cr.to_radians(e),
        i = cr.to_radians(i),
        s = cr.to_radians(s),
        t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, s)))
    }
    ,
    p.prototype.zeropad = function(t, e, i) {
        var s = e < 0 ? "-" : "";
        e < 0 && (e = -e);
        for (var n = i - e.toString().length, r = 0; r < n; r++)
            s += "0";
        t.set_string(s + e.toString())
    }
    ,
    p.prototype.cpuutilisation = function(t) {
        t.set_float(this.runtime.cpuutilisation / 1e3)
    }
    ,
    p.prototype.viewportleft = function(t, e) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.viewLeft : 0)
    }
    ,
    p.prototype.viewporttop = function(t, e) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.viewTop : 0)
    }
    ,
    p.prototype.viewportright = function(t, e) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.viewRight : 0)
    }
    ,
    p.prototype.viewportbottom = function(t, e) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.viewBottom : 0)
    }
    ,
    p.prototype.loadingprogress = function(t) {
        t.set_float(this.runtime.loadingprogress)
    }
    ,
    p.prototype.unlerp = function(t, e, i, s) {
        t.set_float(cr.unlerp(e, i, s))
    }
    ,
    p.prototype.canvassnapshot = function(t) {
        t.set_string(this.runtime.snapshotData)
    }
    ,
    p.prototype.urlencode = function(t, e) {
        t.set_string(encodeURIComponent(e))
    }
    ,
    p.prototype.urldecode = function(t, e) {
        t.set_string(decodeURIComponent(e))
    }
    ,
    p.prototype.canvastolayerx = function(t, e, i, s) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.canvasToLayer(i, s, !0) : 0)
    }
    ,
    p.prototype.canvastolayery = function(t, e, i, s) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.canvasToLayer(i, s, !1) : 0)
    }
    ,
    p.prototype.layertocanvasx = function(t, e, i, s) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.layerToCanvas(i, s, !0) : 0)
    }
    ,
    p.prototype.layertocanvasy = function(t, e, i, s) {
        e = this.runtime.getLayer(e);
        t.set_float(e ? e.layerToCanvas(i, s, !1) : 0)
    }
    ,
    p.prototype.savestatejson = function(t) {
        t.set_string(this.runtime.lastSaveJson)
    }
    ,
    p.prototype.imagememoryusage = function(t) {
        this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
    }
    ,
    p.prototype.regexsearch = function(t, e, i, s) {
        s = r(i, s);
        t.set_int(e ? e.search(s) : -1)
    }
    ,
    p.prototype.regexreplace = function(t, e, i, s, n) {
        s = r(i, s);
        t.set_string(e ? e.replace(s, n) : "")
    }
    ;
    var d = []
      , g = ""
      , b = ""
      , w = "";
    function x(t, e, i) {
        var s;
        t === g && e === b && i === w || (s = r(e, i),
        d = t.match(s),
        g = t,
        b = e,
        w = i)
    }
    p.prototype.regexmatchcount = function(t, e, i, s) {
        r(i, s);
        x(e.toString(), i, s),
        t.set_int(d ? d.length : 0)
    }
    ,
    p.prototype.regexmatchat = function(t, e, i, s, n) {
        n = Math.floor(n);
        r(i, s);
        x(e.toString(), i, s),
        !d || n < 0 || n >= d.length ? t.set_string("") : t.set_string(d[n])
    }
    ,
    p.prototype.infinity = function(t) {
        t.set_float(1 / 0)
    }
    ,
    p.prototype.setbit = function(t, e, i, s) {
        e |= 0,
        i |= 0,
        s = 0 !== s ? 1 : 0,
        t.set_int(e & ~(1 << i) | s << i)
    }
    ,
    p.prototype.togglebit = function(t, e, i) {
        e |= 0,
        i |= 0,
        t.set_int(e ^ 1 << i)
    }
    ,
    p.prototype.getbit = function(t, e, i) {
        e |= 0,
        i |= 0,
        t.set_int(e & 1 << i ? 1 : 0)
    }
    ,
    p.prototype.originalwindowwidth = function(t) {
        t.set_int(this.runtime.original_width)
    }
    ,
    p.prototype.originalwindowheight = function(t) {
        t.set_int(this.runtime.original_height)
    }
    ,
    t.exps = new p,
    t.runWaits = function() {
        for (var t, e, i, s, n, r, o = this.runtime.getCurrentEventStack(), a = 0, h = this.waits.length; a < h; a++) {
            if (-1 === (e = this.waits[a]).time) {
                if (!e.signalled)
                    continue
            } else if (e.time > this.runtime.kahanTime.sum)
                continue;
            for (i in o.current_event = e.ev,
            o.actindex = e.actindex,
            o.cndindex = 0,
            e.sols)
                e.sols.hasOwnProperty(i) && (s = this.runtime.types_by_index[parseInt(i, 10)].getCurrentSol(),
                n = e.sols[i],
                s.select_all = n.sa,
                cr.shallowAssignArray(s.instances, n.insts),
                n = n,
                cr.clearArray(n.insts),
                u.push(n));
            e.ev.resume_actions_and_subevents(),
            this.runtime.clearSol(e.solModifiers),
            e.deleteme = !0
        }
        for (t = a = 0,
        h = this.waits.length; a < h; a++)
            e = this.waits[a],
            (this.waits[t] = e).deleteme ? (r = e,
            cr.wipe(r.sols),
            cr.clearArray(r.solModifiers),
            c.push(r)) : t++;
        cr.truncateArray(this.waits, t)
    }
}(),
function() {
    cr.add_common_aces = function(t, e) {
        var i = t[1]
          , s = t[3]
          , n = t[4]
          , r = t[5]
          , o = t[6]
          , a = t[7]
          , h = t[8];
        e.cnds || (e.cnds = {}),
        e.acts || (e.acts = {}),
        e.exps || (e.exps = {});
        var c = e.cnds
          , t = e.acts
          , e = e.exps;
        s && (c.CompareX = function(t, e) {
            return cr.do_cmp(this.x, t, e)
        }
        ,
        c.CompareY = function(t, e) {
            return cr.do_cmp(this.y, t, e)
        }
        ,
        c.IsOnScreen = function() {
            var t = this.layer;
            this.update_bbox();
            var e = this.bbox;
            return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
        }
        ,
        c.IsOutsideLayout = function() {
            this.update_bbox();
            var t = this.bbox
              , e = this.runtime.running_layout;
            return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
        }
        ,
        c.PickDistance = function(t, e, i) {
            var s = this.getCurrentSol()
              , n = s.getObjects();
            if (!n.length)
                return !1;
            for (var r, o = n[0], a = o, h = cr.distanceTo(o.x, o.y, e, i), c = 1, l = n.length; c < l; c++)
                o = n[c],
                r = cr.distanceTo(o.x, o.y, e, i),
                (0 === t && r < h || 1 === t && h < r) && (h = r,
                a = o);
            return s.pick_one(a),
            !0
        }
        ,
        t.SetX = function(t) {
            this.x !== t && (this.x = t,
            this.set_bbox_changed())
        }
        ,
        t.SetY = function(t) {
            this.y !== t && (this.y = t,
            this.set_bbox_changed())
        }
        ,
        t.SetPos = function(t, e) {
            this.x === t && this.y === e || (this.x = t,
            this.y = e,
            this.set_bbox_changed())
        }
        ,
        t.SetPosToObject = function(t, e) {
            var i, t = t.getPairedInstance(this);
            t && (t = t.getImagePoint ? (i = t.getImagePoint(e, !0),
            t.getImagePoint(e, !1)) : (i = t.x,
            t.y),
            this.x === i && this.y === t || (this.x = i,
            this.y = t,
            this.set_bbox_changed()))
        }
        ,
        t.MoveForward = function(t) {
            0 !== t && (this.x += Math.cos(this.angle) * t,
            this.y += Math.sin(this.angle) * t,
            this.set_bbox_changed())
        }
        ,
        t.MoveAtAngle = function(t, e) {
            0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e,
            this.y += Math.sin(cr.to_radians(t)) * e,
            this.set_bbox_changed())
        }
        ,
        e.X = function(t) {
            t.set_float(this.x)
        }
        ,
        e.Y = function(t) {
            t.set_float(this.y)
        }
        ,
        e.dt = function(t) {
            t.set_float(this.runtime.getDt(this))
        }
        ),
        n && (c.CompareWidth = function(t, e) {
            return cr.do_cmp(this.width, t, e)
        }
        ,
        c.CompareHeight = function(t, e) {
            return cr.do_cmp(this.height, t, e)
        }
        ,
        t.SetWidth = function(t) {
            this.width !== t && (this.width = t,
            this.set_bbox_changed())
        }
        ,
        t.SetHeight = function(t) {
            this.height !== t && (this.height = t,
            this.set_bbox_changed())
        }
        ,
        t.SetSize = function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.set_bbox_changed())
        }
        ,
        e.Width = function(t) {
            t.set_float(this.width)
        }
        ,
        e.Height = function(t) {
            t.set_float(this.height)
        }
        ,
        e.BBoxLeft = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.left)
        }
        ,
        e.BBoxTop = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.top)
        }
        ,
        e.BBoxRight = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.right)
        }
        ,
        e.BBoxBottom = function(t) {
            this.update_bbox(),
            t.set_float(this.bbox.bottom)
        }
        ),
        r && (c.AngleWithin = function(t, e) {
            return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
        }
        ,
        c.IsClockwiseFrom = function(t) {
            return cr.angleClockwise(this.angle, cr.to_radians(t))
        }
        ,
        c.IsBetweenAngles = function(t, e) {
            var i = cr.to_clamped_radians(t)
              , t = cr.to_clamped_radians(e)
              , e = cr.clamp_angle(this.angle);
            return !cr.angleClockwise(t, i) ? !(!cr.angleClockwise(e, i) && cr.angleClockwise(e, t)) : cr.angleClockwise(e, i) && !cr.angleClockwise(e, t)
        }
        ,
        t.SetAngle = function(t) {
            t = cr.to_radians(cr.clamp_angle_degrees(t));
            isNaN(t) || this.angle !== t && (this.angle = t,
            this.set_bbox_changed())
        }
        ,
        t.RotateClockwise = function(t) {
            0 === t || isNaN(t) || (this.angle += cr.to_radians(t),
            this.angle = cr.clamp_angle(this.angle),
            this.set_bbox_changed())
        }
        ,
        t.RotateCounterclockwise = function(t) {
            0 === t || isNaN(t) || (this.angle -= cr.to_radians(t),
            this.angle = cr.clamp_angle(this.angle),
            this.set_bbox_changed())
        }
        ,
        t.RotateTowardAngle = function(t, e) {
            t = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
            isNaN(t) || this.angle !== t && (this.angle = t,
            this.set_bbox_changed())
        }
        ,
        t.RotateTowardPosition = function(t, e, i) {
            e -= this.x,
            i -= this.y,
            e = Math.atan2(i, e),
            t = cr.angleRotate(this.angle, e, cr.to_radians(t));
            isNaN(t) || this.angle !== t && (this.angle = t,
            this.set_bbox_changed())
        }
        ,
        t.SetTowardPosition = function(t, e) {
            t -= this.x,
            e -= this.y,
            t = Math.atan2(e, t);
            isNaN(t) || this.angle !== t && (this.angle = t,
            this.set_bbox_changed())
        }
        ,
        e.Angle = function(t) {
            t.set_float(cr.to_clamped_degrees(this.angle))
        }
        ),
        i || (c.CompareInstanceVar = function(t, e, i) {
            return cr.do_cmp(this.instance_vars[t], e, i)
        }
        ,
        c.IsBoolInstanceVarSet = function(t) {
            return this.instance_vars[t]
        }
        ,
        c.PickInstVarHiLow = function(t, e) {
            var i = this.getCurrentSol()
              , s = i.getObjects();
            if (!s.length)
                return !1;
            for (var n, r = s[0], o = r, a = r.instance_vars[e], h = 1, c = s.length; h < c; h++)
                n = (r = s[h]).instance_vars[e],
                (0 === t && n < a || 1 === t && a < n) && (a = n,
                o = r);
            return i.pick_one(o),
            !0
        }
        ,
        c.PickByUID = function(t) {
            var e, i, s, n, r, o, a;
            if (this.runtime.getCurrentCondition().inverted) {
                if ((a = this.getCurrentSol()).select_all) {
                    for (a.select_all = !1,
                    cr.clearArray(a.instances),
                    cr.clearArray(a.else_instances),
                    e = 0,
                    i = (o = this.instances).length; e < i; e++)
                        ((n = o[e]).uid === t ? a.else_instances : a.instances).push(n);
                    return this.applySolToContainer(),
                    !!a.instances.length
                }
                for (s = e = 0,
                i = a.instances.length; e < i; e++)
                    n = a.instances[e],
                    (a.instances[s] = n).uid === t ? a.else_instances.push(n) : s++;
                return cr.truncateArray(a.instances, s),
                this.applySolToContainer(),
                !!a.instances.length
            }
            if (!(n = this.runtime.getObjectByUID(t)))
                return !1;
            if (!(a = this.getCurrentSol()).select_all && -1 === a.instances.indexOf(n))
                return !1;
            if (this.is_family) {
                for (e = 0,
                i = (r = n.type.families).length; e < i; e++)
                    if (r[e] === this)
                        return a.pick_one(n),
                        this.applySolToContainer(),
                        !0
            } else if (n.type === this)
                return a.pick_one(n),
                this.applySolToContainer(),
                !0;
            return !1
        }
        ,
        c.OnCreated = function() {
            return !0
        }
        ,
        c.OnDestroyed = function() {
            return !0
        }
        ,
        t.SetInstanceVar = function(t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
        }
        ,
        t.AddInstanceVar = function(t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
        }
        ,
        t.SubInstanceVar = function(t, e) {
            var i = this.instance_vars;
            cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
        }
        ,
        t.SetBoolInstanceVar = function(t, e) {
            this.instance_vars[t] = e ? 1 : 0
        }
        ,
        t.ToggleBoolInstanceVar = function(t) {
            this.instance_vars[t] = 1 - this.instance_vars[t]
        }
        ,
        t.Destroy = function() {
            this.runtime.DestroyInstance(this)
        }
        ,
        t.LoadFromJsonString || (t.LoadFromJsonString = function(t) {
            var e, i, s, n;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return
            }
            if (this.runtime.loadInstanceFromJSON(this, e, !0),
            this.afterLoad && this.afterLoad(),
            this.behavior_insts)
                for (i = 0,
                s = this.behavior_insts.length; i < s; ++i)
                    (n = this.behavior_insts[i]).afterLoad && n.afterLoad()
        }
        ),
        e.Count = function(t) {
            for (var e, i = t.object_class.instances.length, s = 0, n = this.runtime.createRow.length; s < n; s++)
                e = this.runtime.createRow[s],
                t.object_class.is_family ? 0 <= e.type.families.indexOf(t.object_class) && i++ : e.type === t.object_class && i++;
            t.set_int(i)
        }
        ,
        e.PickedCount = function(t) {
            t.set_int(t.object_class.getCurrentSol().getObjects().length)
        }
        ,
        e.UID = function(t) {
            t.set_int(this.uid)
        }
        ,
        e.IID = function(t) {
            t.set_int(this.get_iid())
        }
        ,
        e.AsJSON || (e.AsJSON = function(t) {
            t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
        }
        )),
        o && (c.IsVisible = function() {
            return this.visible
        }
        ,
        t.SetVisible = function(t) {
            !t != !this.visible && (this.visible = !!t,
            this.runtime.redraw = !0)
        }
        ,
        c.CompareOpacity = function(t, e) {
            return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
        }
        ,
        t.SetOpacity = function(t) {
            t /= 100;
            t < 0 ? t = 0 : 1 < t && (t = 1),
            t !== this.opacity && (this.opacity = t,
            this.runtime.redraw = !0)
        }
        ,
        e.Opacity = function(t) {
            t.set_float(cr.round6dp(100 * this.opacity))
        }
        ),
        a && (c.IsOnLayer = function(t) {
            return !!t && this.layer === t
        }
        ,
        c.PickTopBottom = function(t) {
            var e = this.getCurrentSol()
              , i = e.getObjects();
            if (!i.length)
                return !1;
            for (var s = i[0], n = s, r = 1, o = i.length; r < o; r++)
                s = i[r],
                0 === t ? (s.layer.index > n.layer.index || s.layer.index === n.layer.index && s.get_zindex() > n.get_zindex()) && (n = s) : (s.layer.index < n.layer.index || s.layer.index === n.layer.index && s.get_zindex() < n.get_zindex()) && (n = s);
            return e.pick_one(n),
            !0
        }
        ,
        t.MoveToTop = function() {
            var t = this.layer
              , e = t.instances;
            e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1),
            t.appendToInstanceList(this, !1),
            this.runtime.redraw = !0)
        }
        ,
        t.MoveToBottom = function() {
            var t = this.layer
              , e = t.instances;
            e.length && e[0] === this || (t.removeFromInstanceList(this, !1),
            t.prependToInstanceList(this, !1),
            this.runtime.redraw = !0)
        }
        ,
        t.MoveToLayer = function(t) {
            t && t != this.layer && (this.layer.removeFromInstanceList(this, !0),
            (this.layer = t).appendToInstanceList(this, !0),
            this.runtime.redraw = !0)
        }
        ,
        t.ZMoveToObject = function(t, e) {
            t = 0 === t;
            !e || (e = e.getFirstPicked(this)) && e.uid !== this.uid && (this.layer.index !== e.layer.index && (this.layer.removeFromInstanceList(this, !0),
            this.layer = e.layer,
            e.layer.appendToInstanceList(this, !0)),
            this.layer.moveInstanceAdjacent(this, e, t),
            this.runtime.redraw = !0)
        }
        ,
        e.LayerNumber = function(t) {
            t.set_int(this.layer.number)
        }
        ,
        e.LayerName = function(t) {
            t.set_string(this.layer.name)
        }
        ,
        e.ZIndex = function(t) {
            t.set_int(this.get_zindex())
        }
        ),
        h && (t.SetEffectEnabled = function(t, e) {
            this.runtime.glwrap && ((e = this.type.getEffectIndexByName(e)) < 0 || (t = 1 === t,
            this.active_effect_flags[e] !== t && (this.active_effect_flags[e] = t,
            this.updateActiveEffects(),
            this.runtime.redraw = !0)))
        }
        ,
        t.SetEffectParam = function(t, e, i) {
            var s;
            this.runtime.glwrap && ((s = this.type.getEffectIndexByName(t)) < 0 || (t = this.type.effect_types[s],
            s = this.effect_params[s],
            (e = Math.floor(e)) < 0 || e >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(t.shaderindex, e) && (i /= 100),
            s[e] !== i && (s[e] = i,
            t.active && (this.runtime.redraw = !0)))))
        }
        )
    }
    ,
    cr.set_bbox_changed = function() {
        this.bbox_changed = !0,
        this.cell_changed = !0,
        this.type.any_cell_changed = !0,
        this.runtime.redraw = !0;
        for (var t = this.bbox_changed_callbacks, e = 0, i = t.length; e < i; ++e)
            t[e](this);
        this.layer.useRenderCells && this.update_bbox()
    }
    ,
    cr.add_bbox_changed_callback = function(t) {
        t && this.bbox_changed_callbacks.push(t)
    }
    ,
    cr.update_bbox = function() {
        var t, e;
        this.bbox_changed && (t = this.bbox,
        e = this.bquad,
        t.set(this.x, this.y, this.x + this.width, this.y + this.height),
        t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height),
        this.angle ? (t.offset(-this.x, -this.y),
        e.set_from_rotated_rect(t, this.angle),
        e.offset(this.x, this.y),
        e.bounding_box(t)) : e.set_from_rect(t),
        t.normalize(),
        this.bbox_changed = !1,
        this.update_render_cell())
    }
    ;
    var i = new cr.rect(0,0,0,0);
    cr.update_render_cell = function() {
        var t, e;
        this.layer.useRenderCells && (t = this.layer.render_grid,
        e = this.bbox,
        i.set(t.XToCell(e.left), t.YToCell(e.top), t.XToCell(e.right), t.YToCell(e.bottom)),
        this.rendercells.equals(i) || (this.rendercells.right < this.rendercells.left ? t.update(this, null, i) : t.update(this, this.rendercells, i),
        this.rendercells.copy(i),
        this.layer.render_list_stale = !0))
    }
    ,
    cr.update_collision_cell = function() {
        var t, e;
        this.cell_changed && this.collisionsEnabled && (this.update_bbox(),
        t = this.type.collision_grid,
        e = this.bbox,
        i.set(t.XToCell(e.left), t.YToCell(e.top), t.XToCell(e.right), t.YToCell(e.bottom)),
        this.collcells.equals(i) || (this.collcells.right < this.collcells.left ? t.update(this, null, i) : t.update(this, this.collcells, i),
        this.collcells.copy(i),
        this.cell_changed = !1))
    }
    ,
    cr.inst_contains_pt = function(t, e) {
        return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (this.tilemap_exists ? this.testPointOverlapTile(t, e) : !(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle),
        this.collision_poly.contains_pt(t - this.x, e - this.y))))
    }
    ,
    cr.inst_get_iid = function() {
        return this.type.updateIIDs(),
        this.iid
    }
    ,
    cr.inst_get_zindex = function() {
        return this.layer.updateZIndices(),
        this.zindex
    }
    ,
    cr.inst_updateActiveEffects = function() {
        var t;
        cr.clearArray(this.active_effect_types);
        for (var e = !0, i = 0, s = this.active_effect_flags.length; i < s; i++)
            this.active_effect_flags[i] && (t = this.type.effect_types[i],
            this.active_effect_types.push(t),
            t.preservesOpaqueness || (e = !1));
        this.uses_shaders = !!this.active_effect_types.length,
        this.shaders_preserve_opaqueness = e
    }
    ,
    cr.inst_toString = function() {
        return "Inst" + this.puid
    }
    ,
    cr.type_getFirstPicked = function(t) {
        if (t && t.is_contained && t.type != this)
            for (var e, i = 0, s = t.siblings.length; i < s; i++)
                if ((e = t.siblings[i]).type == this)
                    return e;
        var n = this.getCurrentSol().getObjects();
        return n.length ? n[0] : null
    }
    ,
    cr.type_getPairedInstance = function(t) {
        var e = this.getCurrentSol().getObjects();
        return e.length ? e[t.get_iid() % e.length] : null
    }
    ,
    cr.type_updateIIDs = function() {
        if (this.stale_iids && !this.is_family) {
            for (var t = 0, e = this.instances.length; t < e; t++)
                this.instances[t].iid = t;
            var i = t
              , s = this.runtime.createRow;
            for (t = 0,
            e = s.length; t < e; ++t)
                s[t].type === this && (s[t].iid = i++);
            this.stale_iids = !1
        }
    }
    ,
    cr.type_getInstanceByIID = function(t) {
        if (t < this.instances.length)
            return this.instances[t];
        t -= this.instances.length;
        for (var e = this.runtime.createRow, i = 0, s = e.length; i < s; ++i)
            if (e[i].type === this) {
                if (0 === t)
                    return e[i];
                --t
            }
        return null
    }
    ,
    cr.type_getCurrentSol = function() {
        return this.solstack[this.cur_sol]
    }
    ,
    cr.type_pushCleanSol = function() {
        this.cur_sol++,
        this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0,
        cr.clearArray(this.solstack[this.cur_sol].else_instances))
    }
    ,
    cr.type_pushCopySol = function() {
        this.cur_sol++,
        this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
        var t = this.solstack[this.cur_sol]
          , e = this.solstack[this.cur_sol - 1];
        e.select_all ? t.select_all = !0 : (t.select_all = !1,
        cr.shallowAssignArray(t.instances, e.instances)),
        cr.clearArray(t.else_instances)
    }
    ,
    cr.type_popSol = function() {
        this.cur_sol--
    }
    ,
    cr.type_getBehaviorByName = function(t) {
        var e, i, s, n, r, o = 0;
        if (!this.is_family)
            for (e = 0,
            i = this.families.length; e < i; e++)
                for (s = 0,
                n = (r = this.families[e]).behaviors.length; s < n; s++) {
                    if (t === r.behaviors[s].name)
                        return this.extra.lastBehIndex = o,
                        r.behaviors[s];
                    o++
                }
        for (e = 0,
        i = this.behaviors.length; e < i; e++) {
            if (t === this.behaviors[e].name)
                return this.extra.lastBehIndex = o,
                this.behaviors[e];
            o++
        }
        return null
    }
    ,
    cr.type_getBehaviorIndexByName = function(t) {
        return this.getBehaviorByName(t) ? this.extra.lastBehIndex : -1
    }
    ,
    cr.type_getEffectIndexByName = function(t) {
        for (var e = 0, i = this.effect_types.length; e < i; e++)
            if (this.effect_types[e].name === t)
                return e;
        return -1
    }
    ,
    cr.type_applySolToContainer = function() {
        if (this.is_contained && !this.is_family) {
            var t, e, i, s, n;
            this.updateIIDs();
            for (var r = (s = this.getCurrentSol()).select_all, o = this.runtime.getCurrentEventStack(), a = o && o.current_event && o.current_event.orblock, h = 0, c = this.container.length; h < c; h++)
                if (i = this.container[h],
                i !== this && (i.updateIIDs(),
                !((n = i.getCurrentSol()).select_all = r))) {
                    for (cr.clearArray(n.instances),
                    t = 0,
                    e = s.instances.length; t < e; ++t)
                        n.instances[t] = i.getInstanceByIID(s.instances[t].iid);
                    if (a)
                        for (cr.clearArray(n.else_instances),
                        t = 0,
                        e = s.else_instances.length; t < e; ++t)
                            n.else_instances[t] = i.getInstanceByIID(s.else_instances[t].iid)
                }
        }
    }
    ,
    cr.type_toString = function() {
        return "Type" + this.sid
    }
    ,
    cr.do_cmp = function(t, e, i) {
        if (void 0 === t || void 0 === i)
            return !1;
        switch (e) {
        case 0:
            return t === i;
        case 1:
            return t !== i;
        case 2:
            return t < i;
        case 3:
            return t <= i;
        case 4:
            return i < t;
        case 5:
            return i <= t;
        default:
            return !1
        }
    }
}(),
cr.shaders = {},
cr.shaders.brightness = {
    src: ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "uniform lowp float brightness;", "void main(void)", "{", "lowp vec4 front = texture2D(samplerFront, vTex);", "lowp float a = front.a;", "if (a != 0.0)", "front.rgb /= front.a;", "front.rgb += (brightness - 1.0);", "front.rgb *= a;", "gl_FragColor = front;", "}"].join("\n"),
    extendBoxHorizontal: 0,
    extendBoxVertical: 0,
    crossSampling: !1,
    preservesOpaqueness: !0,
    animated: !1,
    parameters: [["brightness", 0, 1]]
},
cr.shaders.outline = {
    src: ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "precision highp float;", "uniform highp float pixelWidth;", "uniform highp float pixelHeight;", "uniform highp float red;", "uniform highp float green;", "uniform highp float blue;", "uniform highp float width;", "uniform highp float justoutline;", "void main(void)", "{", "vec4 front = texture2D(samplerFront, vTex);", "float dx = pixelWidth*width;", "float dy = pixelHeight*width;", "float diag = 0.7071;", "float a0 = texture2D(samplerFront, vTex + vec2(-dx*diag, dy*diag)).a;", "float a1 = texture2D(samplerFront, vTex + vec2(dx*diag, -dy*diag)).a;", "float a2 = texture2D(samplerFront, vTex + vec2(-dx*diag, -dy*diag)).a;", "float a3 = texture2D(samplerFront, vTex + vec2(dx*diag, dy*diag)).a;", "float a4 = texture2D(samplerFront, vTex + vec2(-dx, 0.0)).a;", "float a5 = texture2D(samplerFront, vTex + vec2(dx, 0.0)).a;", "float a6 = texture2D(samplerFront, vTex + vec2(0.0, dy)).a;", "float a7 = texture2D(samplerFront, vTex + vec2(0.0, -dy)).a;", "float ina=max(max(max(max(max(max(max(a0,a1),a2),a3),a4),a5),a6),a7)-front.a;", "if(justoutline!=1.0)", "{", "float outa = ina + front.a*(1.0-ina);", "vec3 outrgb = (vec3(red/255.0, green/255.0, blue/255.0)*ina + front.rgb*front.a*(1.0-ina));", "gl_FragColor = vec4(outrgb, outa);", "}", "else if(ina>0.0)", "{", "gl_FragColor = vec4(vec3(red/255.0, green/255.0, blue/255.0)*ina, ina);", "}", "}"].join("\n"),
    extendBoxHorizontal: 0,
    extendBoxVertical: 0,
    crossSampling: !1,
    preservesOpaqueness: !1,
    animated: !1,
    parameters: [["red", 0, 0], ["green", 0, 0], ["blue", 0, 0], ["width", 0, 0], ["justoutline", 0, 0]]
},
cr.shaders.tint = {
    src: ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "uniform lowp float red;", "uniform lowp float green;", "uniform lowp float blue;", "void main(void)", "{", "lowp vec4 front = texture2D(samplerFront, vTex);", "gl_FragColor = front * vec4(red, green, blue, 1.0);", "}"].join("\n"),
    extendBoxHorizontal: 0,
    extendBoxVertical: 0,
    crossSampling: !1,
    preservesOpaqueness: !0,
    animated: !1,
    parameters: [["red", 0, 1], ["green", 0, 1], ["blue", 0, 1]]
},
cr.plugins_.Arr = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Arr.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype
      , s = [];
    function a() {
        return s.length ? s.pop() : []
    }
    function r(t) {
        for (var e = 0, i = t.length; e < i; e++)
            Array.isArray(t[e]) && r(t[e]);
        cr.clearArray(t),
        s.push(t)
    }
    function i() {}
    function n() {}
    function o(t, e) {
        if (cr.is_number(t) && cr.is_number(e))
            return t - e;
        t = "" + t,
        e = "" + e;
        return t < e ? -1 : e < t ? 1 : 0
    }
    function h() {}
    Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ),
    e.onCreate = function() {
        this.cx = this.properties[0],
        this.cy = this.properties[1],
        this.cz = this.properties[2],
        this.recycled || (this.arr = a());
        var t, e, i, s = this.arr;
        for (s.length = this.cx,
        t = 0; t < this.cx; t++)
            for (s[t] || (s[t] = a()),
            s[t].length = this.cy,
            e = 0; e < this.cy; e++)
                for (s[t][e] || (s[t][e] = a()),
                s[t][e].length = this.cz,
                i = 0; i < this.cz; i++)
                    s[t][e][i] = 0;
        this.forX = [],
        this.forY = [],
        this.forZ = [],
        this.forDepth = -1
    }
    ,
    e.onDestroy = function() {
        for (var t = 0; t < this.cx; t++)
            r(this.arr[t]);
        cr.clearArray(this.arr)
    }
    ,
    e.at = function(t, e, i) {
        return t = Math.floor(t),
        e = Math.floor(e),
        i = Math.floor(i),
        isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 ? 0 : this.arr[t][e][i]
    }
    ,
    e.set = function(t, e, i, s) {
        t = Math.floor(t),
        e = Math.floor(e),
        i = Math.floor(i),
        isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 || (this.arr[t][e][i] = s)
    }
    ,
    e.getAsJSON = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.cx, this.cy, this.cz],
            data: this.arr
        })
    }
    ,
    e.saveToJSON = function() {
        return {
            size: [this.cx, this.cy, this.cz],
            data: this.arr
        }
    }
    ,
    e.loadFromJSON = function(t) {
        var e = t.size;
        this.cx = e[0],
        this.cy = e[1],
        this.cz = e[2],
        this.arr = t.data
    }
    ,
    e.setSize = function(t, e, i) {
        if (t < 0 && (t = 0),
        e < 0 && (e = 0),
        i < 0 && (i = 0),
        this.cx !== t || this.cy !== e || this.cz !== i) {
            var s, n, r;
            this.cx = t,
            this.cy = e,
            this.cz = i;
            var o = this.arr;
            for (o.length = t,
            s = 0; s < this.cx; s++)
                for (cr.is_undefined(o[s]) && (o[s] = a()),
                o[s].length = e,
                n = 0; n < this.cy; n++)
                    for (cr.is_undefined(o[s][n]) && (o[s][n] = a()),
                    o[s][n].length = i,
                    r = 0; r < this.cz; r++)
                        cr.is_undefined(o[s][n][r]) && (o[s][n][r] = 0)
        }
    }
    ,
    e.getForX = function() {
        return 0 <= this.forDepth && this.forDepth < this.forX.length ? this.forX[this.forDepth] : 0
    }
    ,
    e.getForY = function() {
        return 0 <= this.forDepth && this.forDepth < this.forY.length ? this.forY[this.forDepth] : 0
    }
    ,
    e.getForZ = function() {
        return 0 <= this.forDepth && this.forDepth < this.forZ.length ? this.forZ[this.forDepth] : 0
    }
    ,
    i.prototype.CompareX = function(t, e, i) {
        return cr.do_cmp(this.at(t, 0, 0), e, i)
    }
    ,
    i.prototype.CompareXY = function(t, e, i, s) {
        return cr.do_cmp(this.at(t, e, 0), i, s)
    }
    ,
    i.prototype.CompareXYZ = function(t, e, i, s, n) {
        return cr.do_cmp(this.at(t, e, i), s, n)
    }
    ,
    e.doForEachTrigger = function(t) {
        this.runtime.pushCopySol(t.solModifiers),
        t.retrigger(),
        this.runtime.popSol(t.solModifiers)
    }
    ,
    i.prototype.ArrForEach = function(t) {
        var e = this.runtime.getCurrentEventStack().current_event;
        this.forDepth++;
        var i = this.forDepth;
        switch (i === this.forX.length ? (this.forX.push(0),
        this.forY.push(0),
        this.forZ.push(0)) : (this.forX[i] = 0,
        this.forY[i] = 0,
        this.forZ[i] = 0),
        t) {
        case 0:
            for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++)
                    for (this.forZ[i] = 0; this.forZ[i] < this.cz; this.forZ[i]++)
                        this.doForEachTrigger(e);
            break;
        case 1:
            for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++)
                    this.doForEachTrigger(e);
            break;
        case 2:
            for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                this.doForEachTrigger(e)
        }
        return this.forDepth--,
        !1
    }
    ,
    i.prototype.CompareCurrent = function(t, e) {
        return cr.do_cmp(this.at(this.getForX(), this.getForY(), this.getForZ()), t, e)
    }
    ,
    i.prototype.Contains = function(t) {
        for (var e, i, s = 0; s < this.cx; s++)
            for (e = 0; e < this.cy; e++)
                for (i = 0; i < this.cz; i++)
                    if (this.arr[s][e][i] === t)
                        return !0;
        return !1
    }
    ,
    i.prototype.IsEmpty = function() {
        return 0 === this.cx || 0 === this.cy || 0 === this.cz
    }
    ,
    i.prototype.CompareSize = function(t, e, i) {
        var s = 0;
        switch (t) {
        case 0:
            s = this.cx;
            break;
        case 1:
            s = this.cy;
            break;
        case 2:
            s = this.cz
        }
        return cr.do_cmp(s, e, i)
    }
    ,
    t.cnds = new i,
    n.prototype.Clear = function() {
        for (var t, e, i = 0; i < this.cx; i++)
            for (t = 0; t < this.cy; t++)
                for (e = 0; e < this.cz; e++)
                    this.arr[i][t][e] = 0
    }
    ,
    n.prototype.SetSize = function(t, e, i) {
        this.setSize(t, e, i)
    }
    ,
    n.prototype.SetX = function(t, e) {
        this.set(t, 0, 0, e)
    }
    ,
    n.prototype.SetXY = function(t, e, i) {
        this.set(t, e, 0, i)
    }
    ,
    n.prototype.SetXYZ = function(t, e, i, s) {
        this.set(t, e, i, s)
    }
    ,
    n.prototype.Push = function(t, e, i) {
        var s = 0
          , n = 0
          , r = 0
          , o = this.arr;
        switch (i) {
        case 0:
            for (0 === t ? (s = o.length,
            o.push(a())) : (s = 0,
            o.unshift(a())),
            o[s].length = this.cy; n < this.cy; n++)
                for (o[s][n] = a(),
                o[s][n].length = this.cz,
                r = 0; r < this.cz; r++)
                    o[s][n][r] = e;
            this.cx++;
            break;
        case 1:
            for (; s < this.cx; s++)
                for (0 === t ? (n = o[s].length,
                o[s].push(a())) : (n = 0,
                o[s].unshift(a())),
                o[s][n].length = this.cz,
                r = 0; r < this.cz; r++)
                    o[s][n][r] = e;
            this.cy++;
            break;
        case 2:
            for (; s < this.cx; s++)
                for (n = 0; n < this.cy; n++)
                    0 === t ? o[s][n].push(e) : o[s][n].unshift(e);
            this.cz++
        }
    }
    ,
    n.prototype.Pop = function(t, e) {
        var i = 0
          , s = 0
          , n = this.arr;
        switch (e) {
        case 0:
            if (0 === this.cx)
                break;
            r(0 === t ? n.pop() : n.shift()),
            this.cx--;
            break;
        case 1:
            if (0 === this.cy)
                break;
            for (; i < this.cx; i++)
                r(0 === t ? n[i].pop() : n[i].shift());
            this.cy--;
            break;
        case 2:
            if (0 === this.cz)
                break;
            for (; i < this.cx; i++)
                for (s = 0; s < this.cy; s++)
                    0 === t ? n[i][s].pop() : n[i][s].shift();
            this.cz--
        }
    }
    ,
    n.prototype.Reverse = function(t) {
        var e = 0
          , i = 0
          , s = this.arr;
        if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz)
            switch (t) {
            case 0:
                s.reverse();
                break;
            case 1:
                for (; e < this.cx; e++)
                    s[e].reverse();
                break;
            case 2:
                for (; e < this.cx; e++)
                    for (i = 0; i < this.cy; i++)
                        s[e][i].reverse()
            }
    }
    ,
    n.prototype.Sort = function(t) {
        var e = 0
          , i = 0
          , s = this.arr;
        if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz)
            switch (t) {
            case 0:
                s.sort(function(t, e) {
                    return o(t[0][0], e[0][0])
                });
                break;
            case 1:
                for (; e < this.cx; e++)
                    s[e].sort(function(t, e) {
                        return o(t[0], e[0])
                    });
                break;
            case 2:
                for (; e < this.cx; e++)
                    for (i = 0; i < this.cy; i++)
                        s[e][i].sort(o)
            }
    }
    ,
    n.prototype.Delete = function(t, e) {
        var i = 0
          , s = 0;
        t = Math.floor(t);
        var n = this.arr;
        if (!(t < 0))
            switch (e) {
            case 0:
                if (t >= this.cx)
                    break;
                r(n[t]),
                n.splice(t, 1),
                this.cx--;
                break;
            case 1:
                if (t >= this.cy)
                    break;
                for (; i < this.cx; i++)
                    r(n[i][t]),
                    n[i].splice(t, 1);
                this.cy--;
                break;
            case 2:
                if (t >= this.cz)
                    break;
                for (; i < this.cx; i++)
                    for (s = 0; s < this.cy; s++)
                        n[i][s].splice(t, 1);
                this.cz--
            }
    }
    ,
    n.prototype.Insert = function(t, e, i) {
        var s = 0
          , n = 0
          , r = 0;
        e = Math.floor(e);
        var o = this.arr;
        if (!(e < 0))
            switch (i) {
            case 0:
                if (e > this.cx)
                    return;
                for (s = e,
                o.splice(s, 0, a()),
                o[s].length = this.cy; n < this.cy; n++)
                    for (o[s][n] = a(),
                    o[s][n].length = this.cz,
                    r = 0; r < this.cz; r++)
                        o[s][n][r] = t;
                this.cx++;
                break;
            case 1:
                if (e > this.cy)
                    return;
                for (; s < this.cx; s++)
                    for (n = e,
                    o[s].splice(n, 0, a()),
                    o[s][n].length = this.cz,
                    r = 0; r < this.cz; r++)
                        o[s][n][r] = t;
                this.cy++;
                break;
            case 2:
                if (e > this.cz)
                    return;
                for (; s < this.cx; s++)
                    for (n = 0; n < this.cy; n++)
                        o[s][n].splice(e, 0, t);
                this.cz++
            }
    }
    ,
    n.prototype.JSONLoad = function(t) {
        var e, i;
        try {
            e = JSON.parse(t)
        } catch (t) {
            return
        }
        e.c2array && (i = e.size,
        this.cx = i[0],
        this.cy = i[1],
        this.cz = i[2],
        this.arr = e.data)
    }
    ,
    n.prototype.JSONDownload = function(t) {
        var e, i = document.createElement("a");
        void 0 === i.download ? (e = "data:text/html," + encodeURIComponent("<p><a download='" + t + "' href=\"data:application/json," + encodeURIComponent(this.getAsJSON()) + '">Download link</a></p>'),
        window.open(e)) : (e = document.getElementsByTagName("body")[0],
        i.textContent = t,
        i.href = "data:application/json," + encodeURIComponent(this.getAsJSON()),
        i.download = t,
        e.appendChild(i),
        (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
        i.dispatchEvent(t),
        e.removeChild(i))
    }
    ,
    t.acts = new n,
    h.prototype.At = function(t, e, i, s) {
        i = i || 0,
        s = s || 0;
        t.set_any(this.at(e, i, s))
    }
    ,
    h.prototype.Width = function(t) {
        t.set_int(this.cx)
    }
    ,
    h.prototype.Height = function(t) {
        t.set_int(this.cy)
    }
    ,
    h.prototype.Depth = function(t) {
        t.set_int(this.cz)
    }
    ,
    h.prototype.CurX = function(t) {
        t.set_int(this.getForX())
    }
    ,
    h.prototype.CurY = function(t) {
        t.set_int(this.getForY())
    }
    ,
    h.prototype.CurZ = function(t) {
        t.set_int(this.getForZ())
    }
    ,
    h.prototype.CurValue = function(t) {
        t.set_any(this.at(this.getForX(), this.getForY(), this.getForZ()))
    }
    ,
    h.prototype.Front = function(t) {
        t.set_any(this.at(0, 0, 0))
    }
    ,
    h.prototype.Back = function(t) {
        t.set_any(this.at(this.cx - 1, 0, 0))
    }
    ,
    h.prototype.IndexOf = function(t, e) {
        for (var i = 0; i < this.cx; i++)
            if (this.arr[i][0][0] === e)
                return void t.set_int(i);
        t.set_int(-1)
    }
    ,
    h.prototype.LastIndexOf = function(t, e) {
        for (var i = this.cx - 1; 0 <= i; i--)
            if (this.arr[i][0][0] === e)
                return void t.set_int(i);
        t.set_int(-1)
    }
    ,
    h.prototype.AsJSON = function(t) {
        t.set_string(this.getAsJSON())
    }
    ,
    t.exps = new h
}(),
cr.plugins_.Audio = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Audio.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ;
    var c = null
      , n = null
      , r = ""
      , o = ""
      , a = 0
      , h = 1
      , l = 2
      , u = 3
      , p = a
      , d = null
      , f = []
      , x = []
      , y = null
      , g = !1
      , m = 0
      , S = !1
      , T = 1
      , _ = 0
      , v = 0
      , b = !1
      , s = 1
      , w = 1
      , A = 10
      , C = 1e4
      , k = 1
      , O = null
      , I = ""
      , P = !1
      , E = []
      , B = !1
      , R = !1;
    function L(t) {
        -1 === E.indexOf(t) && E.push(t)
    }
    function M(e) {
        var t, i = e.instanceObject;
        try {
            t = i.play()
        } catch (t) {
            return void L(e)
        }
        t ? t.catch(function(t) {
            L(e)
        }) : P && !c.isInUserInputEvent && L(e)
    }
    function e() {
        var t, e, i, s, n, r;
        R || b || !d || ("suspended" === d.state && d.resume && d.resume(),
        d.createBuffer && (n = d.createBuffer(1, 220, 22050),
        (r = d.createBufferSource()).buffer = n,
        r.connect(d.destination),
        G(r)),
        "running" === d.state && (R = !0));
        var o = E.slice(0);
        if (cr.clearArray(E),
        !S)
            for (t = 0,
            e = o.length; t < e; ++t)
                (i = o[t]).stopped || i.is_paused || (s = i.instanceObject.play()) && s.catch(function(t) {
                    L(i)
                })
    }
    function j(t) {
        t = F(t);
        return isFinite(t) || (t = 0),
        t < 0 && (t = 0),
        1 < t && (t = 1),
        t
    }
    function N(t) {
        return t < 0 && (t = 0),
        1 < t && (t = 1),
        t = t,
        Math.log(t) / Math.log(10) * 20
    }
    function F(t) {
        return Math.pow(10, t / 20)
    }
    document.addEventListener("pointerup", e, !0),
    document.addEventListener("touchend", e, !0),
    document.addEventListener("click", e, !0),
    document.addEventListener("keydown", e, !0),
    document.addEventListener("gamepadconnected", e, !0);
    var D = {};
    function V(t) {
        return t = t.toLowerCase(),
        D.hasOwnProperty(t) && D[t].length ? D[t][0].getInputNode() : d.destination
    }
    function W() {
        return d.createGain ? d.createGain() : d.createGainNode()
    }
    function z(t) {
        return d.createDelay ? d.createDelay(t) : d.createDelayNode(t)
    }
    function G(t, e) {
        t.start ? t.start(e || 0) : t.noteOn(e || 0)
    }
    function U(t, e, i, s) {
        t.start ? t.start(s || 0, e) : t.noteGrainOn(s || 0, e, i - e)
    }
    function i(t) {
        try {
            t.stop ? t.stop(0) : t.noteOff(0)
        } catch (t) {}
    }
    function q(t, e, i, s) {
        if (t)
            if (t.cancelScheduledValues(0),
            0 !== s) {
                var n = d.currentTime;
                switch (s += n,
                i) {
                case 0:
                    t.setValueAtTime(e, s);
                    break;
                case 1:
                    t.setValueAtTime(t.value, n),
                    t.linearRampToValueAtTime(e, s);
                    break;
                case 2:
                    t.setValueAtTime(t.value, n),
                    t.exponentialRampToValueAtTime(e, s)
                }
            } else
                t.value = e
    }
    var X = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
    function H(t, e, i, s, n, r) {
        this.type = "filter",
        this.params = [t, e, i, s, n, r],
        this.inputNode = W(),
        this.wetNode = W(),
        this.wetNode.gain.value = r,
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - r,
        this.filterNode = d.createBiquadFilter(),
        "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = X[t],
        this.filterNode.frequency.value = e,
        this.filterNode.detune && (this.filterNode.detune.value = i),
        this.filterNode.Q.value = s,
        this.filterNode.gain.value = n,
        this.inputNode.connect(this.filterNode),
        this.inputNode.connect(this.dryNode),
        this.filterNode.connect(this.wetNode)
    }
    function Y(t, e, i) {
        this.type = "delay",
        this.params = [t, e, i],
        this.inputNode = W(),
        this.wetNode = W(),
        this.wetNode.gain.value = i,
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - i,
        this.mainNode = W(),
        this.delayNode = z(t),
        this.delayNode.delayTime.value = t,
        this.delayGainNode = W(),
        this.delayGainNode.gain.value = e,
        this.inputNode.connect(this.mainNode),
        this.inputNode.connect(this.dryNode),
        this.mainNode.connect(this.wetNode),
        this.mainNode.connect(this.delayNode),
        this.delayNode.connect(this.delayGainNode),
        this.delayGainNode.connect(this.mainNode)
    }
    function J(t, e, i, s) {
        this.type = "convolve",
        this.params = [e, i, s],
        this.inputNode = W(),
        this.wetNode = W(),
        this.wetNode.gain.value = i,
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - i,
        this.convolveNode = d.createConvolver(),
        t && (this.convolveNode.normalize = e,
        this.convolveNode.buffer = t),
        this.inputNode.connect(this.convolveNode),
        this.inputNode.connect(this.dryNode),
        this.convolveNode.connect(this.wetNode)
    }
    function K(t, e, i, s, n) {
        this.type = "flanger",
        this.params = [t, e, i, s, n],
        this.inputNode = W(),
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - n / 2,
        this.wetNode = W(),
        this.wetNode.gain.value = n / 2,
        this.feedbackNode = W(),
        this.feedbackNode.gain.value = s,
        this.delayNode = z(t + e),
        this.delayNode.delayTime.value = t,
        this.oscNode = d.createOscillator(),
        this.oscNode.frequency.value = i,
        this.oscGainNode = W(),
        this.oscGainNode.gain.value = e,
        this.inputNode.connect(this.delayNode),
        this.inputNode.connect(this.dryNode),
        this.delayNode.connect(this.wetNode),
        this.delayNode.connect(this.feedbackNode),
        this.feedbackNode.connect(this.delayNode),
        this.oscNode.connect(this.oscGainNode),
        this.oscGainNode.connect(this.delayNode.delayTime),
        G(this.oscNode)
    }
    function Q(t, e, i, s, n, r) {
        this.type = "phaser",
        this.params = [t, e, i, s, n, r],
        this.inputNode = W(),
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - r / 2,
        this.wetNode = W(),
        this.wetNode.gain.value = r / 2,
        this.filterNode = d.createBiquadFilter(),
        "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass",
        this.filterNode.frequency.value = t,
        this.filterNode.detune && (this.filterNode.detune.value = e),
        this.filterNode.Q.value = i,
        this.oscNode = d.createOscillator(),
        this.oscNode.frequency.value = n,
        this.oscGainNode = W(),
        this.oscGainNode.gain.value = s,
        this.inputNode.connect(this.filterNode),
        this.inputNode.connect(this.dryNode),
        this.filterNode.connect(this.wetNode),
        this.oscNode.connect(this.oscGainNode),
        this.oscGainNode.connect(this.filterNode.frequency),
        G(this.oscNode)
    }
    function Z(t) {
        this.type = "gain",
        this.params = [t],
        this.node = W(),
        this.node.gain.value = t
    }
    function $(t, e) {
        this.type = "tremolo",
        this.params = [t, e],
        this.node = W(),
        this.node.gain.value = 1 - e / 2,
        this.oscNode = d.createOscillator(),
        this.oscNode.frequency.value = t,
        this.oscGainNode = W(),
        this.oscGainNode.gain.value = e / 2,
        this.oscNode.connect(this.oscGainNode),
        this.oscGainNode.connect(this.node.gain),
        G(this.oscNode)
    }
    function tt(t, e) {
        this.type = "ringmod",
        this.params = [t, e],
        this.inputNode = W(),
        this.wetNode = W(),
        this.wetNode.gain.value = e,
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - e,
        this.ringNode = W(),
        this.ringNode.gain.value = 0,
        this.oscNode = d.createOscillator(),
        this.oscNode.frequency.value = t,
        this.oscNode.connect(this.ringNode.gain),
        G(this.oscNode),
        this.inputNode.connect(this.ringNode),
        this.inputNode.connect(this.dryNode),
        this.ringNode.connect(this.wetNode)
    }
    function et(t, e, i, s, n) {
        this.type = "distortion",
        this.params = [t, e, i, s, n],
        this.inputNode = W(),
        this.preGain = W(),
        this.postGain = W(),
        this.setDrive(i, F(s)),
        this.wetNode = W(),
        this.wetNode.gain.value = n,
        this.dryNode = W(),
        this.dryNode.gain.value = 1 - n,
        this.waveShaper = d.createWaveShaper(),
        this.curve = new Float32Array(65536),
        this.generateColortouchCurve(t, e),
        this.waveShaper.curve = this.curve,
        this.inputNode.connect(this.preGain),
        this.inputNode.connect(this.dryNode),
        this.preGain.connect(this.waveShaper),
        this.waveShaper.connect(this.postGain),
        this.postGain.connect(this.wetNode)
    }
    function it(t, e, i, s, n) {
        this.type = "compressor",
        this.params = [t, e, i, s, n],
        this.node = d.createDynamicsCompressor();
        try {
            this.node.threshold.value = t,
            this.node.knee.value = e,
            this.node.ratio.value = i,
            this.node.attack.value = s,
            this.node.release.value = n
        } catch (t) {}
    }
    function st(t, e) {
        this.type = "analyser",
        this.params = [t, e],
        this.node = d.createAnalyser(),
        this.node.fftSize = t,
        this.node.smoothingTimeConstant = e,
        this.freqBins = new Float32Array(this.node.frequencyBinCount),
        this.signal = new Uint8Array(t),
        this.peak = 0,
        this.rms = 0
    }
    function nt() {
        this.obj = null,
        this.loadUid = 0
    }
    function rt(t, e) {
        this.src = t,
        this.myapi = p,
        this.is_music = e,
        this.added_end_listener = !1;
        var i, s = this;
        switch (this.outNode = null,
        this.mediaSourceNode = null,
        this.panWhenReady = [],
        this.seekWhenReady = 0,
        this.pauseWhenReady = !1,
        this.supportWebAudioAPI = !1,
        this.failedToLoad = !1,
        this.wasEverReady = !1,
        p === h && e && !B && (this.myapi = a,
        this.outNode = W()),
        this.bufferObject = null,
        this.audioData = null,
        this.myapi) {
        case a:
            this.bufferObject = new Audio,
            this.bufferObject.crossOrigin = "anonymous",
            this.bufferObject.addEventListener("canplaythrough", function() {
                s.wasEverReady = !0
            }),
            p === h && d.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0,
            this.bufferObject.addEventListener("canplay", function() {
                !s.mediaSourceNode && s.bufferObject && (s.mediaSourceNode = d.createMediaElementSource(s.bufferObject),
                s.mediaSourceNode.connect(s.outNode))
            })),
            this.bufferObject.autoplay = !1,
            this.bufferObject.preload = "auto",
            this.bufferObject.src = t;
            break;
        case h:
            c.isWKWebView ? c.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                s.audioData = t,
                s.decodeAudioBuffer()
            }, function(t) {
                s.failedToLoad = !0
            }) : ((i = new XMLHttpRequest).open("GET", t, !0),
            i.responseType = "arraybuffer",
            i.onload = function() {
                s.audioData = i.response,
                s.decodeAudioBuffer()
            }
            ,
            i.onerror = function() {
                s.failedToLoad = !0
            }
            ,
            i.send());
            break;
        case l:
        case u:
            this.bufferObject = !0
        }
    }
    function ot(t, e) {
        var i = this;
        this.tag = e,
        this.fresh = !0,
        this.stopped = !0,
        this.src = t.src,
        this.buffer = t,
        this.myapi = p,
        this.is_music = t.is_music,
        this.playbackRate = 1,
        this.hasPlaybackEnded = !0,
        this.resume_me = !1,
        this.is_paused = !1,
        this.resume_position = 0,
        this.looping = !1,
        this.is_muted = !1,
        this.is_silent = !1,
        this.volume = 1,
        this.onended_handler = function(t) {
            i.is_paused || i.resume_me || (this || t.target) === i.active_buffer && (i.hasPlaybackEnded = !0,
            i.stopped = !0,
            r = i.tag,
            c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n))
        }
        ,
        this.active_buffer = null,
        this.isTimescaled = 1 === m && !this.is_music || 2 === m,
        this.mutevol = 1,
        this.startTime = (this.isTimescaled ? c.kahanTime : c.wallTime).sum,
        this.gainNode = null,
        this.pannerNode = null,
        this.pannerEnabled = !1,
        this.objectTracker = null,
        this.panX = 0,
        this.panY = 0,
        this.panAngle = 0,
        this.panConeInner = 0,
        this.panConeOuter = 0,
        this.panConeOuterGain = 0,
        this.instanceObject = null;
        var s = !1;
        switch (this.myapi !== h || this.buffer.myapi !== a || this.buffer.supportWebAudioAPI || (this.myapi = a),
        this.myapi) {
        case a:
            this.is_music ? (this.instanceObject = t.bufferObject,
            s = !t.added_end_listener,
            t.added_end_listener = !0) : (this.instanceObject = new Audio,
            this.instanceObject.crossOrigin = "anonymous",
            this.instanceObject.autoplay = !1,
            this.instanceObject.src = t.bufferObject.src,
            s = !0),
            s && this.instanceObject.addEventListener("ended", function() {
                r = i.tag,
                i.stopped = !0,
                c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n)
            });
            break;
        case h:
            this.gainNode = W(),
            this.gainNode.connect(V(e)),
            this.buffer.myapi === h ? t.bufferObject && (this.instanceObject = d.createBufferSource(),
            this.instanceObject.buffer = t.bufferObject,
            this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject,
            this.buffer.outNode.connect(this.gainNode),
            this.buffer.added_end_listener || (this.buffer.added_end_listener = !0,
            this.buffer.bufferObject.addEventListener("ended", function() {
                r = i.tag,
                i.stopped = !0,
                c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n)
            })));
            break;
        case l:
            this.instanceObject = new window.Media(o + this.src,null,null,function(t) {
                t === window.Media.MEDIA_STOPPED && (i.hasPlaybackEnded = !0,
                i.stopped = !0,
                r = i.tag,
                c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n))
            }
            );
            break;
        case u:
            this.instanceObject = !0
        }
    }
    H.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    H.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.filterNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    H.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    H.prototype.setParam = function(t, e, i, s) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            1 < e && (e = 1),
            this.params[5] = e,
            q(this.wetNode.gain, e, i, s),
            q(this.dryNode.gain, 1 - e, i, s);
            break;
        case 1:
            this.params[1] = e,
            q(this.filterNode.frequency, e, i, s);
            break;
        case 2:
            this.params[2] = e,
            q(this.filterNode.detune, e, i, s);
            break;
        case 3:
            this.params[3] = e,
            q(this.filterNode.Q, e, i, s);
            break;
        case 4:
            this.params[4] = e,
            q(this.filterNode.gain, e, i, s)
        }
    }
    ,
    Y.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    Y.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.mainNode.disconnect(),
        this.delayNode.disconnect(),
        this.delayGainNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    Y.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    Y.prototype.setParam = function(t, e, i, s) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            1 < e && (e = 1),
            this.params[2] = e,
            q(this.wetNode.gain, e, i, s),
            q(this.dryNode.gain, 1 - e, i, s);
            break;
        case 4:
            this.params[1] = j(e),
            q(this.delayGainNode.gain, j(e), i, s);
            break;
        case 5:
            this.params[0] = e,
            q(this.delayNode.delayTime, e, i, s)
        }
    }
    ,
    J.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    J.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.convolveNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    J.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    J.prototype.setParam = function(t, e, i, s) {
        0 === t && ((e /= 100) < 0 && (e = 0),
        1 < e && (e = 1),
        this.params[1] = e,
        q(this.wetNode.gain, e, i, s),
        q(this.dryNode.gain, 1 - e, i, s))
    }
    ,
    K.prototype.connectTo = function(t) {
        this.dryNode.disconnect(),
        this.dryNode.connect(t),
        this.wetNode.disconnect(),
        this.wetNode.connect(t)
    }
    ,
    K.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.delayNode.disconnect(),
        this.oscNode.disconnect(),
        this.oscGainNode.disconnect(),
        this.dryNode.disconnect(),
        this.wetNode.disconnect(),
        this.feedbackNode.disconnect()
    }
    ,
    K.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    K.prototype.setParam = function(t, e, i, s) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            1 < e && (e = 1),
            this.params[4] = e,
            q(this.wetNode.gain, e / 2, i, s),
            q(this.dryNode.gain, 1 - e / 2, i, s);
            break;
        case 6:
            this.params[1] = e / 1e3,
            q(this.oscGainNode.gain, e / 1e3, i, s);
            break;
        case 7:
            this.params[2] = e,
            q(this.oscNode.frequency, e, i, s);
            break;
        case 8:
            this.params[3] = e / 100,
            q(this.feedbackNode.gain, e / 100, i, s)
        }
    }
    ,
    Q.prototype.connectTo = function(t) {
        this.dryNode.disconnect(),
        this.dryNode.connect(t),
        this.wetNode.disconnect(),
        this.wetNode.connect(t)
    }
    ,
    Q.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.filterNode.disconnect(),
        this.oscNode.disconnect(),
        this.oscGainNode.disconnect(),
        this.dryNode.disconnect(),
        this.wetNode.disconnect()
    }
    ,
    Q.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    Q.prototype.setParam = function(t, e, i, s) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            1 < e && (e = 1),
            this.params[5] = e,
            q(this.wetNode.gain, e / 2, i, s),
            q(this.dryNode.gain, 1 - e / 2, i, s);
            break;
        case 1:
            this.params[0] = e,
            q(this.filterNode.frequency, e, i, s);
            break;
        case 2:
            this.params[1] = e,
            q(this.filterNode.detune, e, i, s);
            break;
        case 3:
            this.params[2] = e,
            q(this.filterNode.Q, e, i, s);
            break;
        case 6:
            this.params[3] = e,
            q(this.oscGainNode.gain, e, i, s);
            break;
        case 7:
            this.params[4] = e,
            q(this.oscNode.frequency, e, i, s)
        }
    }
    ,
    Z.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    Z.prototype.remove = function() {
        this.node.disconnect()
    }
    ,
    Z.prototype.getInputNode = function() {
        return this.node
    }
    ,
    Z.prototype.setParam = function(t, e, i, s) {
        4 === t && (this.params[0] = j(e),
        q(this.node.gain, j(e), i, s))
    }
    ,
    $.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    $.prototype.remove = function() {
        this.oscNode.disconnect(),
        this.oscGainNode.disconnect(),
        this.node.disconnect()
    }
    ,
    $.prototype.getInputNode = function() {
        return this.node
    }
    ,
    $.prototype.setParam = function(t, e, i, s) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            1 < e && (e = 1),
            this.params[1] = e,
            q(this.node.gain.value, 1 - e / 2, i, s),
            q(this.oscGainNode.gain.value, e / 2, i, s);
            break;
        case 7:
            this.params[0] = e,
            q(this.oscNode.frequency, e, i, s)
        }
    }
    ,
    tt.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    tt.prototype.remove = function() {
        this.oscNode.disconnect(),
        this.ringNode.disconnect(),
        this.inputNode.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    tt.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    tt.prototype.setParam = function(t, e, i, s) {
        switch (t) {
        case 0:
            (e /= 100) < 0 && (e = 0),
            1 < e && (e = 1),
            this.params[1] = e,
            q(this.wetNode.gain, e, i, s),
            q(this.dryNode.gain, 1 - e, i, s);
            break;
        case 7:
            this.params[0] = e,
            q(this.oscNode.frequency, e, i, s)
        }
    }
    ,
    et.prototype.setDrive = function(t, e) {
        t < .01 && (t = .01),
        this.preGain.gain.value = t,
        this.postGain.gain.value = Math.pow(1 / t, .6) * e
    }
    ,
    et.prototype.shape = function(t, e, i) {
        var s, n = 1.05 * i * e - e, i = t < 0 ? -1 : 1, t = t < 0 ? -t : t, s = t < e ? t : e + n * (s = t - e,
        n = 1 / n,
        1 - Math.exp(-n * s));
        return s *= i
    }
    ,
    et.prototype.generateColortouchCurve = function(t, e) {
        for (var i, s = F(t), n = F(e), r = 0; r < 32768; ++r)
            i = r / 32768,
            i = this.shape(i, s, n),
            this.curve[32768 + r] = i,
            this.curve[32768 - r - 1] = -i
    }
    ,
    et.prototype.connectTo = function(t) {
        this.wetNode.disconnect(),
        this.wetNode.connect(t),
        this.dryNode.disconnect(),
        this.dryNode.connect(t)
    }
    ,
    et.prototype.remove = function() {
        this.inputNode.disconnect(),
        this.preGain.disconnect(),
        this.waveShaper.disconnect(),
        this.postGain.disconnect(),
        this.wetNode.disconnect(),
        this.dryNode.disconnect()
    }
    ,
    et.prototype.getInputNode = function() {
        return this.inputNode
    }
    ,
    et.prototype.setParam = function(t, e, i, s) {
        0 === t && ((e /= 100) < 0 && (e = 0),
        1 < e && (e = 1),
        this.params[4] = e,
        q(this.wetNode.gain, e, i, s),
        q(this.dryNode.gain, 1 - e, i, s))
    }
    ,
    it.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    it.prototype.remove = function() {
        this.node.disconnect()
    }
    ,
    it.prototype.getInputNode = function() {
        return this.node
    }
    ,
    it.prototype.setParam = function(t, e, i, s) {}
    ,
    st.prototype.tick = function() {
        this.node.getFloatFrequencyData(this.freqBins),
        this.node.getByteTimeDomainData(this.signal);
        for (var t = this.node.fftSize, e = 0, i = this.peak = 0, s = 0; e < t; e++)
            (s = (this.signal[e] - 128) / 128) < 0 && (s = -s),
            this.peak < s && (this.peak = s),
            i += s * s;
        this.peak = N(this.peak),
        this.rms = N(Math.sqrt(i / t))
    }
    ,
    st.prototype.connectTo = function(t) {
        this.node.disconnect(),
        this.node.connect(t)
    }
    ,
    st.prototype.remove = function() {
        this.node.disconnect()
    }
    ,
    st.prototype.getInputNode = function() {
        return this.node
    }
    ,
    st.prototype.setParam = function(t, e, i, s) {}
    ,
    nt.prototype.setObject = function(t) {
        this.obj = t
    }
    ,
    nt.prototype.hasObject = function() {
        return !!this.obj
    }
    ,
    nt.prototype.tick = function(t) {}
    ,
    rt.prototype.release = function() {
        for (var t, e = 0, i = 0, s = x.length; e < s; ++e)
            t = x[e],
            (x[i] = t).buffer === this ? t.stop() : ++i;
        x.length = i,
        this.mediaSourceNode && (this.mediaSourceNode.disconnect(),
        this.mediaSourceNode = null),
        this.outNode && (this.outNode.disconnect(),
        this.outNode = null),
        this.bufferObject = null,
        this.audioData = null
    }
    ,
    rt.prototype.decodeAudioBuffer = function() {
        var h, t;
        !this.bufferObject && this.audioData && (h = this,
        d.decodeAudioData ? d.decodeAudioData(this.audioData, function(t) {
            var e, i, s, n;
            if (h.bufferObject = t,
            h.audioData = null,
            cr.is_undefined(h.playTagWhenReady) || S)
                cr.is_undefined(h.convolveWhenReady) || ((n = h.convolveWhenReady.convolveNode).normalize = h.normalizeWhenReady,
                n.buffer = t);
            else if (h.panWhenReady.length) {
                for (e = 0,
                i = h.panWhenReady.length; e < i; e++) {
                    var r, o, a = h.panWhenReady[e];
                    (s = new ot(h,a.thistag)).setPannerEnabled(!0),
                    void 0 !== a.objUid && (a.obj = c.getObjectByUID(a.objUid),
                    !a.obj) || (a.obj ? (r = cr.rotatePtAround(a.obj.x, a.obj.y, -a.obj.layer.getAngle(), _, v, !0),
                    o = cr.rotatePtAround(a.obj.x, a.obj.y, -a.obj.layer.getAngle(), _, v, !1),
                    s.setPan(r, o, cr.to_degrees(a.obj.angle - a.obj.layer.getAngle()), a.ia, a.oa, a.og),
                    s.setObject(a.obj)) : s.setPan(a.x, a.y, a.a, a.ia, a.oa, a.og),
                    s.play(h.loopWhenReady, h.volumeWhenReady, h.seekWhenReady),
                    h.pauseWhenReady && s.pause(),
                    x.push(s))
                }
                cr.clearArray(h.panWhenReady)
            } else
                (s = new ot(h,h.playTagWhenReady || "")).play(h.loopWhenReady, h.volumeWhenReady, h.seekWhenReady),
                h.pauseWhenReady && s.pause(),
                x.push(s)
        }, function(t) {
            h.failedToLoad = !0
        }) : (this.bufferObject = d.createBuffer(this.audioData, !1),
        this.audioData = null,
        cr.is_undefined(this.playTagWhenReady) || S ? cr.is_undefined(this.convolveWhenReady) || ((t = this.convolveWhenReady.convolveNode).normalize = this.normalizeWhenReady,
        t.buffer = this.bufferObject) : ((t = new ot(this,this.playTagWhenReady)).play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady),
        this.pauseWhenReady && t.pause(),
        x.push(t))))
    }
    ,
    rt.prototype.isLoaded = function() {
        switch (this.myapi) {
        case a:
            var t = 4 <= this.bufferObject.readyState;
            return t && (this.wasEverReady = !0),
            t || this.wasEverReady;
        case h:
            return !!this.audioData || !!this.bufferObject;
        case l:
        case u:
            return !0
        }
        return !1
    }
    ,
    rt.prototype.isLoadedAndDecoded = function() {
        switch (this.myapi) {
        case a:
            return this.isLoaded();
        case h:
            return !!this.bufferObject;
        case l:
        case u:
            return !0
        }
        return !1
    }
    ,
    rt.prototype.hasFailedToLoad = function() {
        switch (this.myapi) {
        case a:
            return !!this.bufferObject.error;
        case h:
            return this.failedToLoad
        }
        return !1
    }
    ,
    ot.prototype.hasEnded = function() {
        switch (this.myapi) {
        case a:
            return this.instanceObject.ended;
        case h:
            return this.buffer.myapi === h ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
        case l:
            return this.hasPlaybackEnded
        }
        return !0
    }
    ,
    ot.prototype.canBeRecycled = function() {
        return !(!this.fresh && !this.stopped) || this.hasEnded()
    }
    ,
    ot.prototype.setPannerEnabled = function(t) {
        p === h && (!this.pannerEnabled && t ? this.gainNode && (this.pannerNode || (this.pannerNode = d.createPanner(),
        "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = s : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][s],
        "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = w : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][w],
        this.pannerNode.refDistance = A,
        this.pannerNode.maxDistance = C,
        this.pannerNode.rolloffFactor = k),
        this.gainNode.disconnect(),
        this.gainNode.connect(this.pannerNode),
        this.pannerNode.connect(V(this.tag)),
        this.pannerEnabled = !0) : this.pannerEnabled && !t && this.gainNode && (this.pannerNode.disconnect(),
        this.gainNode.disconnect(),
        this.gainNode.connect(V(this.tag)),
        this.pannerEnabled = !1))
    }
    ,
    ot.prototype.setPan = function(t, e, i, s, n, r) {
        this.pannerEnabled && p === h && (this.pannerNode.setPosition(t, e, 0),
        this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0),
        this.pannerNode.coneInnerAngle = s,
        this.pannerNode.coneOuterAngle = n,
        this.pannerNode.coneOuterGain = r,
        this.panX = t,
        this.panY = e,
        this.panAngle = i,
        this.panConeInner = s,
        this.panConeOuter = n,
        this.panConeOuterGain = r)
    }
    ,
    ot.prototype.setObject = function(t) {
        this.pannerEnabled && p === h && (this.objectTracker || (this.objectTracker = new nt),
        this.objectTracker.setObject(t))
    }
    ,
    ot.prototype.tick = function(t) {
        var e, i;
        this.pannerEnabled && p === h && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying() && (this.objectTracker.tick(t),
        e = this.objectTracker.obj,
        i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), _, v, !0),
        t = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), _, v, !1),
        this.pannerNode.setPosition(i, t, 0),
        void (t = 0) !== this.objectTracker.obj.angle && (t = e.angle - e.layer.getAngle(),
        this.pannerNode.setOrientation(Math.cos(t), Math.sin(t), 0)))
    }
    ,
    ot.prototype.play = function(t, e, i, s) {
        var n = this.instanceObject;
        this.looping = t,
        this.volume = e;
        var r = i || 0;
        switch (s = s || 0,
        this.myapi) {
        case a:
            if (1 !== n.playbackRate && (n.playbackRate = 1),
            n.volume !== e * T && (n.volume = e * T),
            n.loop !== t && (n.loop = t),
            n.muted && (n.muted = !1),
            n.currentTime !== r)
                try {
                    n.currentTime = r
                } catch (t) {}
            M(this);
            break;
        case h:
            if (this.muted = !1,
            this.mutevol = 1,
            this.buffer.myapi === h)
                this.gainNode.gain.value = e * T,
                this.fresh || (this.instanceObject = d.createBufferSource(),
                this.instanceObject.buffer = this.buffer.bufferObject,
                this.instanceObject.connect(this.gainNode)),
                this.instanceObject.onended = this.onended_handler,
                this.active_buffer = this.instanceObject,
                this.instanceObject.loop = t,
                this.hasPlaybackEnded = !1,
                0 === r ? G(this.instanceObject, s) : U(this.instanceObject, r, this.getDuration(), s);
            else {
                if (1 !== n.playbackRate && (n.playbackRate = 1),
                n.loop !== t && (n.loop = t),
                n.volume = e * T,
                n.currentTime !== r)
                    try {
                        n.currentTime = r
                    } catch (t) {}
                M(this)
            }
            break;
        case l:
            (!this.fresh && this.stopped || 0 !== r) && n.seekTo(r),
            n.play(),
            this.hasPlaybackEnded = !1;
            break;
        case u:
            (c.isDirectCanvas ? AppMobi.context : AppMobi.player).playSound(this.src, t)
        }
        this.playbackRate = 1,
        this.startTime = (this.isTimescaled ? c.kahanTime : c.wallTime).sum - r,
        this.fresh = !1,
        this.stopped = !1,
        this.is_paused = !1
    }
    ,
    ot.prototype.stop = function() {
        switch (this.myapi) {
        case a:
            this.instanceObject.paused || this.instanceObject.pause();
            break;
        case h:
            this.buffer.myapi === h ? i(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
            break;
        case l:
            this.instanceObject.stop();
            break;
        case u:
            c.isDirectCanvas && AppMobi.context.stopSound(this.src)
        }
        this.stopped = !0,
        this.is_paused = !1
    }
    ,
    ot.prototype.pause = function() {
        if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
            switch (this.myapi) {
            case a:
                this.instanceObject.paused || this.instanceObject.pause();
                break;
            case h:
                this.buffer.myapi === h ? (this.resume_position = this.getPlaybackTime(!0),
                this.looping && (this.resume_position = this.resume_position % this.getDuration()),
                this.is_paused = !0,
                i(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                break;
            case l:
                this.instanceObject.pause();
                break;
            case u:
                c.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.is_paused = !0
        }
    }
    ,
    ot.prototype.resume = function() {
        if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
            switch (this.myapi) {
            case a:
                M(this);
                break;
            case h:
                this.buffer.myapi === h ? (this.instanceObject = d.createBufferSource(),
                this.instanceObject.buffer = this.buffer.bufferObject,
                this.instanceObject.connect(this.gainNode),
                this.instanceObject.onended = this.onended_handler,
                this.active_buffer = this.instanceObject,
                this.instanceObject.loop = this.looping,
                this.gainNode.gain.value = T * this.volume * this.mutevol,
                this.updatePlaybackRate(),
                this.startTime = (this.isTimescaled ? c.kahanTime : c.wallTime).sum - this.resume_position / (this.playbackRate || .001),
                U(this.instanceObject, this.resume_position, this.getDuration())) : M(this);
                break;
            case l:
                this.instanceObject.play();
                break;
            case u:
                c.isDirectCanvas && AppMobi.context.resumeSound(this.src)
            }
            this.is_paused = !1
        }
    }
    ,
    ot.prototype.seek = function(t) {
        if (!(this.fresh || this.stopped || this.hasEnded()))
            switch (this.myapi) {
            case a:
                try {
                    this.instanceObject.currentTime = t
                } catch (t) {}
                break;
            case h:
                if (this.buffer.myapi === h)
                    this.is_paused ? this.resume_position = t : (this.pause(),
                    this.resume_position = t,
                    this.resume());
                else
                    try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                break;
            case l:
                break;
            case u:
                c.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
    }
    ,
    ot.prototype.reconnect = function(t) {
        this.myapi === h && (this.pannerEnabled ? (this.pannerNode.disconnect(),
        this.pannerNode.connect(t)) : (this.gainNode.disconnect(),
        this.gainNode.connect(t)))
    }
    ,
    ot.prototype.getDuration = function(t) {
        var e = 0;
        switch (this.myapi) {
        case a:
            void 0 !== this.instanceObject.duration && (e = this.instanceObject.duration);
            break;
        case h:
            e = this.buffer.bufferObject.duration;
            break;
        case l:
            e = this.instanceObject.getDuration();
            break;
        case u:
            c.isDirectCanvas && (e = AppMobi.context.getDurationSound(this.src))
        }
        return t && (e /= this.playbackRate || .001),
        e
    }
    ,
    ot.prototype.getPlaybackTime = function(t) {
        var e = this.getDuration()
          , i = 0;
        switch (this.myapi) {
        case a:
            void 0 !== this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
            break;
        case h:
            if (this.buffer.myapi === h) {
                if (this.is_paused)
                    return this.resume_position;
                i = (this.isTimescaled ? c.kahanTime : c.wallTime).sum - this.startTime
            } else
                void 0 !== this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
            break;
        case l:
            break;
        case u:
            c.isDirectCanvas && (i = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        return t && (i *= this.playbackRate),
        !this.looping && e < i && (i = e),
        i
    }
    ,
    ot.prototype.isPlaying = function() {
        return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
    }
    ,
    ot.prototype.shouldSave = function() {
        return !this.fresh && !this.stopped && !this.hasEnded()
    }
    ,
    ot.prototype.setVolume = function(t) {
        this.volume = t,
        this.updateVolume()
    }
    ,
    ot.prototype.updateVolume = function() {
        var t = this.volume * T;
        switch (isFinite(t) || (t = 0),
        this.myapi) {
        case a:
            void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
            break;
        case h:
            this.buffer.myapi === h ? this.gainNode.gain.value = t * this.mutevol : void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t)
        }
    }
    ,
    ot.prototype.getVolume = function() {
        return this.volume
    }
    ,
    ot.prototype.doSetMuted = function(t) {
        switch (this.myapi) {
        case a:
            this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
            break;
        case h:
            this.buffer.myapi === h ? (this.mutevol = t ? 0 : 1,
            this.gainNode.gain.value = T * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t)
        }
    }
    ,
    ot.prototype.setMuted = function(t) {
        this.is_muted = !!t,
        this.doSetMuted(this.is_muted || this.is_silent)
    }
    ,
    ot.prototype.setSilent = function(t) {
        this.is_silent = !!t,
        this.doSetMuted(this.is_muted || this.is_silent)
    }
    ,
    ot.prototype.setLooping = function(t) {
        switch (this.looping = t,
        this.myapi) {
        case a:
        case h:
            this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
            break;
        case l:
            break;
        case u:
            c.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
        }
    }
    ,
    ot.prototype.setPlaybackRate = function(t) {
        this.playbackRate = t,
        this.updatePlaybackRate()
    }
    ,
    ot.prototype.updatePlaybackRate = function() {
        var t = this.playbackRate;
        switch (this.isTimescaled && (t *= c.timescale),
        this.myapi) {
        case a:
            this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
            break;
        case h:
            this.buffer.myapi === h ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t)
        }
    }
    ,
    ot.prototype.setSuspended = function(t) {
        switch (this.myapi) {
        case a:
            t ? this.isPlaying() ? (this.resume_me = !0,
            this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(),
            this.resume_me = !1);
            break;
        case h:
            t ? this.isPlaying() ? (this.resume_me = !0,
            this.buffer.myapi === h ? (this.resume_position = this.getPlaybackTime(!0),
            this.looping && (this.resume_position = this.resume_position % this.getDuration()),
            i(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === h ? (this.instanceObject = d.createBufferSource(),
            this.instanceObject.buffer = this.buffer.bufferObject,
            this.instanceObject.connect(this.gainNode),
            this.instanceObject.onended = this.onended_handler,
            this.active_buffer = this.instanceObject,
            this.instanceObject.loop = this.looping,
            this.gainNode.gain.value = T * this.volume * this.mutevol,
            this.updatePlaybackRate(),
            this.startTime = (this.isTimescaled ? c.kahanTime : c.wallTime).sum - this.resume_position / (this.playbackRate || .001),
            U(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(),
            this.resume_me = !1);
            break;
        case l:
            t ? this.isPlaying() ? (this.instanceObject.pause(),
            this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1,
            this.instanceObject.play())
        }
    }
    ,
    t.Instance = function(t) {
        if (this.type = t,
        this.runtime = t.runtime,
        c = this.runtime,
        (n = this).listenerTracker = null,
        this.listenerZ = -600,
        this.runtime.isWKWebView && (B = !0),
        !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || B || (P = !0),
        d = null,
        "undefined" != typeof AudioContext ? (p = h,
        d = new AudioContext) : "undefined" != typeof webkitAudioContext && (p = h,
        d = new webkitAudioContext),
        this.runtime.isiOS && d && (d.close && d.close(),
        "undefined" != typeof AudioContext ? d = new AudioContext : "undefined" != typeof webkitAudioContext && (d = new webkitAudioContext)),
        p !== h && (this.runtime.isCordova && void 0 !== window.Media ? p = l : this.runtime.isAppMobi && (p = u)),
        p === l && (-1 < (t = (o = location.href).lastIndexOf("/")) && (o = o.substr(0, t + 1)),
        o = o.replace("file://", "")),
        this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio)
            alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."),
            this.runtime.DestroyInstance(this);
        else {
            if (this.runtime.isDirectCanvas)
                g = this.runtime.isAndroid;
            else
                try {
                    g = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"') && !this.runtime.isWindows10
                } catch (t) {
                    g = !1
                }
            p,
            this.runtime.tickMe(this)
        }
    }
    ;
    var at = t.Instance.prototype;
    at.onCreate = function() {
        this.runtime.audioInstance = this,
        m = this.properties[0],
        this.saveload = this.properties[1],
        this.playinbackground = 0 !== this.properties[2],
        this.nextPlayTime = 0,
        s = this.properties[3],
        w = this.properties[4],
        this.listenerZ = -this.properties[5],
        A = this.properties[6],
        C = this.properties[7],
        k = this.properties[8],
        this.listenerTracker = new nt;
        var t = this.runtime.draw_width || this.runtime.width
          , e = this.runtime.draw_height || this.runtime.height;
        p === h && (d.listener.setPosition(t / 2, e / 2, this.listenerZ),
        d.listener.setOrientation(0, 0, 1, 0, -1, 0),
        window.c2OnAudioMicStream = function(t, e) {
            O && O.disconnect(),
            I = e.toLowerCase(),
            (O = d.createMediaStreamSource(t)).connect(V(I))
        }
        ),
        this.runtime.addSuspendCallback(function(t) {
            n.onSuspend(t)
        });
        var i = this;
        this.runtime.addDestroyCallback(function(t) {
            i.onInstanceDestroyed(t)
        })
    }
    ,
    at.onInstanceDestroyed = function(t) {
        for (var e, i = 0, s = x.length; i < s; i++)
            (e = x[i]).objectTracker && e.objectTracker.obj === t && (e.objectTracker.obj = null,
            e.pannerEnabled && e.isPlaying() && e.looping && e.stop());
        this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
    }
    ,
    at.saveToJSON = function() {
        for (var t, e, i, s, n = {
            silent: S,
            masterVolume: T,
            listenerZ: this.listenerZ,
            listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
            playing: [],
            effects: {}
        }, r = n.playing, o = 0, a = x.length; o < a; o++)
            (t = x[o]).shouldSave() && 3 !== this.saveload && (t.is_music && 1 === this.saveload || !t.is_music && 2 === this.saveload || (s = t.getPlaybackTime(),
            t.looping && (s %= t.getDuration()),
            e = {
                tag: t.tag,
                buffersrc: t.buffer.src,
                is_music: t.is_music,
                playbackTime: s,
                volume: t.volume,
                looping: t.looping,
                muted: t.is_muted,
                playbackRate: t.playbackRate,
                paused: t.is_paused,
                resume_position: t.resume_position
            },
            t.pannerEnabled && (e.pan = {},
            s = e.pan,
            t.objectTracker && t.objectTracker.hasObject() ? s.objUid = t.objectTracker.obj.uid : (s.x = t.panX,
            s.y = t.panY,
            s.a = t.panAngle),
            s.ia = t.panConeInner,
            s.oa = t.panConeOuter,
            s.og = t.panConeOuterGain),
            r.push(e)));
        var h, c = n.effects;
        for (i in D)
            if (D.hasOwnProperty(i)) {
                for (h = [],
                o = 0,
                a = D[i].length; o < a; o++)
                    h.push({
                        type: D[i][o].type,
                        params: D[i][o].params
                    });
                c[i] = h
            }
        return n
    }
    ;
    var ht = [];
    at.loadFromJSON = function(t) {
        var e = t.silent;
        T = t.masterVolume,
        this.listenerZ = t.listenerZ,
        this.listenerTracker.setObject(null);
        var i = t.listenerUid;
        -1 !== i && (this.listenerTracker.loadUid = i,
        ht.push(this.listenerTracker));
        var s, n, r, o, a, h, c, l, u, p, d, f, y, g, m, _, v, b, w = t.playing;
        if (3 !== this.saveload)
            for (s = 0,
            n = x.length; s < n; s++)
                (d = x[s]).is_music && 1 === this.saveload || !d.is_music && 2 === this.saveload || d.stop();
        for (f in D)
            if (D.hasOwnProperty(f))
                for (s = 0,
                n = D[f].length; s < n; s++)
                    D[f][s].remove();
        for (f in cr.wipe(D),
        t.effects)
            if (t.effects.hasOwnProperty(f))
                for (s = 0,
                n = (m = t.effects[f]).length; s < n; s++)
                    switch (_ = m[s].type,
                    v = m[s].params,
                    _) {
                    case "filter":
                        ft(f, new H(v[0],v[1],v[2],v[3],v[4],v[5]));
                        break;
                    case "delay":
                        ft(f, new Y(v[0],v[1],v[2]));
                        break;
                    case "convolve":
                        o = v[2],
                        (p = this.getAudioBuffer(o, !1)).bufferObject ? b = new J(p.bufferObject,v[0],v[1],o) : (b = new J(null,v[0],v[1],o),
                        p.normalizeWhenReady = v[0],
                        p.convolveWhenReady = b),
                        ft(f, b);
                        break;
                    case "flanger":
                        ft(f, new K(v[0],v[1],v[2],v[3],v[4]));
                        break;
                    case "phaser":
                        ft(f, new Q(v[0],v[1],v[2],v[3],v[4],v[5]));
                        break;
                    case "gain":
                        ft(f, new Z(v[0]));
                        break;
                    case "tremolo":
                        ft(f, new $(v[0],v[1]));
                        break;
                    case "ringmod":
                        ft(f, new tt(v[0],v[1]));
                        break;
                    case "distortion":
                        ft(f, new et(v[0],v[1],v[2],v[3],v[4]));
                        break;
                    case "compressor":
                        ft(f, new it(v[0],v[1],v[2],v[3],v[4]));
                        break;
                    case "analyser":
                        ft(f, new st(v[0],v[1]))
                    }
        for (s = 0,
        n = w.length; s < n; s++)
            3 !== this.saveload && (o = (r = w[s]).buffersrc,
            a = r.is_music,
            h = r.tag,
            c = r.playbackTime,
            l = r.looping,
            u = r.volume,
            g = (y = r.pan) && y.hasOwnProperty("objUid") ? y.objUid : -1,
            a && 1 === this.saveload || !a && 2 === this.saveload || ((d = this.getAudioInstance(o, h, a, l, u)) ? (d.resume_position = r.resume_position,
            d.setPannerEnabled(!!y),
            d.play(l, u, c),
            d.updatePlaybackRate(),
            d.updateVolume(),
            d.doSetMuted(d.is_muted || d.is_silent),
            r.paused && d.pause(),
            r.muted && d.setMuted(!0),
            d.doSetMuted(d.is_muted || d.is_silent),
            y && (-1 !== g ? (d.objectTracker = d.objectTracker || new nt,
            d.objectTracker.loadUid = g,
            ht.push(d.objectTracker)) : d.setPan(y.x, y.y, y.a, y.ia, y.oa, y.og))) : ((p = this.getAudioBuffer(o, a)).seekWhenReady = c,
            p.pauseWhenReady = r.paused,
            y && (-1 !== g ? p.panWhenReady.push({
                objUid: g,
                ia: y.ia,
                oa: y.oa,
                og: y.og,
                thistag: h
            }) : p.panWhenReady.push({
                x: y.x,
                y: y.y,
                a: y.a,
                ia: y.ia,
                oa: y.oa,
                og: y.og,
                thistag: h
            })))));
        if (e && !S) {
            for (s = 0,
            n = x.length; s < n; s++)
                x[s].setSilent(!0);
            S = !0
        } else if (!e && S) {
            for (s = 0,
            n = x.length; s < n; s++)
                x[s].setSilent(!1);
            S = !1
        }
    }
    ,
    at.afterLoad = function() {
        for (var t, e, i = 0, s = ht.length; i < s; i++)
            t = ht[i],
            e = this.runtime.getObjectByUID(t.loadUid),
            t.setObject(e),
            t.loadUid = -1,
            e && (_ = e.x,
            v = e.y);
        cr.clearArray(ht)
    }
    ,
    at.onSuspend = function(t) {
        if (!this.playinbackground) {
            var e, i;
            for (!t && d && d.resume && (d.resume(),
            b = !1),
            e = 0,
            i = x.length; e < i; e++)
                x[e].setSuspended(t);
            t && d && d.suspend && (d.suspend(),
            b = !0)
        }
    }
    ,
    at.tick = function() {
        for (var t, e, i, s, n = this.runtime.dt, r = 0, o = x.length; r < o; r++)
            (t = x[r]).tick(n),
            0 !== m && t.updatePlaybackRate();
        for (e in D)
            if (D.hasOwnProperty(e))
                for (r = 0,
                o = (i = D[e]).length; r < o; r++)
                    (s = i[r]).tick && s.tick();
        p === h && this.listenerTracker.hasObject() && (this.listenerTracker.tick(n),
        _ = this.listenerTracker.obj.x,
        v = this.listenerTracker.obj.y,
        d.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
    }
    ;
    var ct = [];
    at.setPreloadList = function(t) {
        for (var e, i, s, n = 0, r = 0, o = t.length; r < o; ++r)
            e = (s = t[r])[0],
            i = 2 * s[1],
            ((s = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && g || !s && !g) && (ct.push({
                filename: e,
                size: i,
                obj: null
            }),
            n += i);
        return n
    }
    ,
    at.startPreloads = function() {
        for (var t, e, i = 0, s = ct.length; i < s; ++i)
            t = ct[i],
            e = this.runtime.files_subfolder + t.filename,
            t.obj = this.getAudioBuffer(e, !1)
    }
    ,
    at.getPreloadedSize = function() {
        for (var t, e = 0, i = 0, s = ct.length; i < s; ++i)
            (t = ct[i]).obj.isLoadedAndDecoded() || t.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? e += t.size : t.obj.isLoaded() && (e += Math.floor(t.size / 2));
        return e
    }
    ,
    at.releaseAllMusicBuffers = function() {
        for (var t, e = 0, i = 0, s = f.length; e < s; ++e)
            t = f[e],
            (f[i] = t).is_music ? t.release() : ++i;
        f.length = i
    }
    ,
    at.getAudioBuffer = function(t, e, i) {
        for (var s, n = null, r = 0, o = f.length; r < o; r++)
            if ((s = f[r]).src === t) {
                n = s;
                break
            }
        return n || i || (B && e && this.releaseAllMusicBuffers(),
        n = new rt(t,e),
        f.push(n)),
        n
    }
    ,
    at.getAudioInstance = function(t, e, i, s, n) {
        for (var r, o = 0, a = x.length; o < a; o++)
            if ((r = x[o]).src === t && (r.canBeRecycled() || i))
                return r.tag = e,
                r;
        var h = this.getAudioBuffer(t, i);
        return h.bufferObject ? (r = new ot(h,e),
        x.push(r),
        r) : ("<preload>" !== e && (h.playTagWhenReady = e,
        h.loopWhenReady = s,
        h.volumeWhenReady = n),
        null)
    }
    ;
    var lt = [];
    function ut(t, e) {
        t = t.isPlaying() ? 1 : 0,
        e = e.isPlaying() ? 1 : 0;
        return t == e ? 0 : t < e ? 1 : -1
    }
    function pt(t, e) {
        if (cr.clearArray(lt),
        !t.length)
            return y && !y.hasEnded() && (cr.clearArray(lt),
            void (lt[0] = y));
        for (var i, s = 0, n = x.length; s < n; s++)
            i = x[s],
            cr.equals_nocase(t, i.tag) && lt.push(i);
        e && lt.sort(ut)
    }
    function dt(t) {
        var e, i, s, n, r = d.destination;
        if (D.hasOwnProperty(t) && (s = D[t]).length)
            for (r = s[0].getInputNode(),
            e = 0,
            i = s.length; e < i; e++)
                n = s[e],
                e + 1 === i ? n.connectTo(d.destination) : n.connectTo(s[e + 1].getInputNode());
        for (pt(t),
        e = 0,
        i = lt.length; e < i; e++)
            lt[e].reconnect(r);
        O && I === t && (O.disconnect(),
        O.connect(r))
    }
    function ft(t, e) {
        D.hasOwnProperty(t) ? D[t].push(e) : D[t] = [e],
        dt(t)
    }
    function yt() {}
    function gt() {}
    function mt() {}
    function _t(t, e) {
        var i = null;
        return D.hasOwnProperty(t) && (i = D[t]),
        i && 0 <= e && e < i.length && i[e].freqBins ? i[e] : null
    }
    yt.prototype.OnEnded = function(t) {
        return cr.equals_nocase(r, t)
    }
    ,
    yt.prototype.PreloadsComplete = function() {
        for (var t = 0, e = f.length; t < e; t++)
            if (!f[t].isLoadedAndDecoded() && !f[t].hasFailedToLoad())
                return !1;
        return !0
    }
    ,
    yt.prototype.AdvancedAudioSupported = function() {
        return p === h
    }
    ,
    yt.prototype.IsSilent = function() {
        return S
    }
    ,
    yt.prototype.IsAnyPlaying = function() {
        for (var t = 0, e = x.length; t < e; t++)
            if (x[t].isPlaying())
                return !0;
        return !1
    }
    ,
    yt.prototype.IsTagPlaying = function(t) {
        var e, i;
        for (pt(t),
        e = 0,
        i = lt.length; e < i; e++)
            if (lt[e].isPlaying())
                return !0;
        return !1
    }
    ,
    t.cnds = new yt,
    gt.prototype.Play = function(t, e, i, s) {
        var n;
        S || (n = j(i),
        i = t[1],
        t = this.runtime.files_subfolder + t[0] + (g ? ".ogg" : ".m4a"),
        (y = this.getAudioInstance(t, s, i, 0 !== e, n)) && (y.setPannerEnabled(!1),
        y.play(0 !== e, n, 0, this.nextPlayTime),
        this.nextPlayTime = 0))
    }
    ,
    gt.prototype.PlayAtPosition = function(t, e, i, s, n, r, o, a, h, c) {
        var l;
        S || (l = j(i),
        i = t[1],
        t = this.runtime.files_subfolder + t[0] + (g ? ".ogg" : ".m4a"),
        (y = this.getAudioInstance(t, c, i, 0 !== e, l)) ? (y.setPannerEnabled(!0),
        y.setPan(s, n, r, o, a, j(h)),
        y.play(0 !== e, l, 0, this.nextPlayTime),
        this.nextPlayTime = 0) : this.getAudioBuffer(t, i).panWhenReady.push({
            x: s,
            y: n,
            a: r,
            ia: o,
            oa: a,
            og: j(h),
            thistag: c
        }))
    }
    ,
    gt.prototype.PlayAtObject = function(t, e, i, s, n, r, o, a) {
        var h, c, l;
        S || !s || (h = s.getFirstPicked()) && (c = j(i),
        l = t[1],
        s = this.runtime.files_subfolder + t[0] + (g ? ".ogg" : ".m4a"),
        (y = this.getAudioInstance(s, a, l, 0 !== e, c)) ? (y.setPannerEnabled(!0),
        i = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), _, v, !0),
        t = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), _, v, !1),
        y.setPan(i, t, cr.to_degrees(h.angle - h.layer.getAngle()), n, r, j(o)),
        y.setObject(h),
        y.play(0 !== e, c, 0, this.nextPlayTime),
        this.nextPlayTime = 0) : this.getAudioBuffer(s, l).panWhenReady.push({
            obj: h,
            ia: n,
            oa: r,
            og: j(o),
            thistag: a
        }))
    }
    ,
    gt.prototype.PlayByName = function(t, e, i, s, n) {
        S || (s = j(s),
        t = 1 === t,
        e = this.runtime.files_subfolder + e.toLowerCase() + (g ? ".ogg" : ".m4a"),
        (y = this.getAudioInstance(e, n, t, 0 !== i, s)) && (y.setPannerEnabled(!1),
        y.play(0 !== i, s, 0, this.nextPlayTime),
        this.nextPlayTime = 0))
    }
    ,
    gt.prototype.PlayAtPositionByName = function(t, e, i, s, n, r, o, a, h, c, l) {
        S || (s = j(s),
        t = 1 === t,
        e = this.runtime.files_subfolder + e.toLowerCase() + (g ? ".ogg" : ".m4a"),
        (y = this.getAudioInstance(e, l, t, 0 !== i, s)) ? (y.setPannerEnabled(!0),
        y.setPan(n, r, o, a, h, j(c)),
        y.play(0 !== i, s, 0, this.nextPlayTime),
        this.nextPlayTime = 0) : this.getAudioBuffer(e, t).panWhenReady.push({
            x: n,
            y: r,
            a: o,
            ia: a,
            oa: h,
            og: j(c),
            thistag: l
        }))
    }
    ,
    gt.prototype.PlayAtObjectByName = function(t, e, i, s, n, r, o, a, h) {
        var c, l;
        S || !n || (c = n.getFirstPicked()) && (l = j(s),
        n = 1 === t,
        s = this.runtime.files_subfolder + e.toLowerCase() + (g ? ".ogg" : ".m4a"),
        (y = this.getAudioInstance(s, h, n, 0 !== i, l)) ? (y.setPannerEnabled(!0),
        t = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), _, v, !0),
        e = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), _, v, !1),
        y.setPan(t, e, cr.to_degrees(c.angle - c.layer.getAngle()), r, o, j(a)),
        y.setObject(c),
        y.play(0 !== i, l, 0, this.nextPlayTime),
        this.nextPlayTime = 0) : this.getAudioBuffer(s, n).panWhenReady.push({
            obj: c,
            ia: r,
            oa: o,
            og: j(a),
            thistag: h
        }))
    }
    ,
    gt.prototype.SetLooping = function(t, e) {
        var i, s;
        for (pt(t),
        i = 0,
        s = lt.length; i < s; i++)
            lt[i].setLooping(0 === e)
    }
    ,
    gt.prototype.SetMuted = function(t, e) {
        var i, s;
        for (pt(t),
        i = 0,
        s = lt.length; i < s; i++)
            lt[i].setMuted(0 === e)
    }
    ,
    gt.prototype.SetVolume = function(t, e) {
        pt(t);
        for (var i = j(e), s = 0, n = lt.length; s < n; s++)
            lt[s].setVolume(i)
    }
    ,
    gt.prototype.Preload = function(t) {
        var e;
        S || (e = t[1],
        t = this.runtime.files_subfolder + t[0] + (g ? ".ogg" : ".m4a"),
        p !== u ? p !== l && this.getAudioInstance(t, "<preload>", e, !1) : (this.runtime.isDirectCanvas ? AppMobi.context : AppMobi.player).loadSound(t))
    }
    ,
    gt.prototype.PreloadByName = function(t, e) {
        S || (t = 1 === t,
        e = this.runtime.files_subfolder + e.toLowerCase() + (g ? ".ogg" : ".m4a"),
        p !== u ? p !== l && this.getAudioInstance(e, "<preload>", t, !1) : (this.runtime.isDirectCanvas ? AppMobi.context : AppMobi.player).loadSound(e))
    }
    ,
    gt.prototype.SetPlaybackRate = function(t, e) {
        var i, s;
        for (pt(t),
        e < 0 && (e = 0),
        i = 0,
        s = lt.length; i < s; i++)
            lt[i].setPlaybackRate(e)
    }
    ,
    gt.prototype.Stop = function(t) {
        var e, i;
        for (pt(t),
        e = 0,
        i = lt.length; e < i; e++)
            lt[e].stop()
    }
    ,
    gt.prototype.StopAll = function() {
        for (var t = 0, e = x.length; t < e; t++)
            x[t].stop()
    }
    ,
    gt.prototype.SetPaused = function(t, e) {
        var i, s;
        for (pt(t),
        i = 0,
        s = lt.length; i < s; i++)
            0 === e ? lt[i].pause() : lt[i].resume()
    }
    ,
    gt.prototype.Seek = function(t, e) {
        var i, s;
        for (pt(t),
        i = 0,
        s = lt.length; i < s; i++)
            lt[i].seek(e)
    }
    ,
    gt.prototype.SetSilent = function(t) {
        var e, i;
        if (2 === t && (t = S ? 1 : 0),
        0 !== t || S) {
            if (1 === t && S) {
                for (e = 0,
                i = x.length; e < i; e++)
                    x[e].setSilent(!1);
                S = !1
            }
        } else {
            for (e = 0,
            i = x.length; e < i; e++)
                x[e].setSilent(!0);
            S = !0
        }
    }
    ,
    gt.prototype.SetMasterVolume = function(t) {
        var e, i;
        for (T = j(t),
        e = 0,
        i = x.length; e < i; e++)
            x[e].updateVolume()
    }
    ,
    gt.prototype.AddFilterEffect = function(t, e, i, s, n, r, o) {
        p !== h || e < 0 || X.length <= e || !d.createBiquadFilter || ((o /= 100) < 0 && (o = 0),
        1 < o && (o = 1),
        ft(t = t.toLowerCase(), new H(e,i,s,n,r,o)))
    }
    ,
    gt.prototype.AddDelayEffect = function(t, e, i, s) {
        p === h && ((s /= 100) < 0 && (s = 0),
        1 < s && (s = 1),
        ft(t = t.toLowerCase(), new Y(e,j(i),s)))
    }
    ,
    gt.prototype.AddFlangerEffect = function(t, e, i, s, n, r) {
        p === h && d.createOscillator && ((r /= 100) < 0 && (r = 0),
        1 < r && (r = 1),
        ft(t = t.toLowerCase(), new K(e / 1e3,i / 1e3,s,n / 100,r)))
    }
    ,
    gt.prototype.AddPhaserEffect = function(t, e, i, s, n, r, o) {
        p === h && d.createOscillator && ((o /= 100) < 0 && (o = 0),
        1 < o && (o = 1),
        ft(t = t.toLowerCase(), new Q(e,i,s,n,r,o)))
    }
    ,
    gt.prototype.AddConvolutionEffect = function(t, e, i, s) {
        var n, r;
        p === h && d.createConvolver && (n = 0 === i,
        i = this.runtime.files_subfolder + e[0] + (g ? ".ogg" : ".m4a"),
        e = this.getAudioBuffer(i, !1),
        t = t.toLowerCase(),
        (s /= 100) < 0 && (s = 0),
        1 < s && (s = 1),
        e.bufferObject ? r = new J(e.bufferObject,n,s,i) : (r = new J(null,n,s,i),
        e.normalizeWhenReady = n,
        e.convolveWhenReady = r),
        ft(t, r))
    }
    ,
    gt.prototype.AddGainEffect = function(t, e) {
        p === h && ft(t = t.toLowerCase(), new Z(j(e)))
    }
    ,
    gt.prototype.AddMuteEffect = function(t) {
        p === h && ft(t = t.toLowerCase(), new Z(0))
    }
    ,
    gt.prototype.AddTremoloEffect = function(t, e, i) {
        p === h && d.createOscillator && ((i /= 100) < 0 && (i = 0),
        1 < i && (i = 1),
        ft(t = t.toLowerCase(), new $(e,i)))
    }
    ,
    gt.prototype.AddRingModEffect = function(t, e, i) {
        p === h && d.createOscillator && ((i /= 100) < 0 && (i = 0),
        1 < i && (i = 1),
        ft(t = t.toLowerCase(), new tt(e,i)))
    }
    ,
    gt.prototype.AddDistortionEffect = function(t, e, i, s, n, r) {
        p === h && d.createWaveShaper && ((r /= 100) < 0 && (r = 0),
        1 < r && (r = 1),
        ft(t = t.toLowerCase(), new et(e,i,s,n,r)))
    }
    ,
    gt.prototype.AddCompressorEffect = function(t, e, i, s, n, r) {
        p === h && d.createDynamicsCompressor && ft(t = t.toLowerCase(), new it(e,i,s,n / 1e3,r / 1e3))
    }
    ,
    gt.prototype.AddAnalyserEffect = function(t, e, i) {
        p === h && ft(t = t.toLowerCase(), new st(e,i))
    }
    ,
    gt.prototype.RemoveEffects = function(t) {
        var e, i, s;
        if (p === h && (t = t.toLowerCase(),
        D.hasOwnProperty(t) && (s = D[t]).length)) {
            for (e = 0,
            i = s.length; e < i; e++)
                s[e].remove();
            cr.clearArray(s),
            dt(t)
        }
    }
    ,
    gt.prototype.SetEffectParameter = function(t, e, i, s, n, r) {
        p === h && (t = t.toLowerCase(),
        e = Math.floor(e),
        D.hasOwnProperty(t) && (t = D[t],
        e < 0 || e >= t.length || t[e].setParam(i, s, n, r)))
    }
    ,
    gt.prototype.SetListenerObject = function(t) {
        !t || p !== h || (t = t.getFirstPicked()) && (this.listenerTracker.setObject(t),
        _ = t.x,
        v = t.y)
    }
    ,
    gt.prototype.SetListenerZ = function(t) {
        this.listenerZ = t
    }
    ,
    gt.prototype.ScheduleNextPlay = function(t) {
        d && (this.nextPlayTime = t)
    }
    ,
    gt.prototype.UnloadAudio = function(t) {
        var e = t[1]
          , t = this.runtime.files_subfolder + t[0] + (g ? ".ogg" : ".m4a")
          , e = this.getAudioBuffer(t, e, !0);
        e && (e.release(),
        cr.arrayFindRemove(f, e))
    }
    ,
    gt.prototype.UnloadAudioByName = function(t, e) {
        t = 1 === t,
        e = this.runtime.files_subfolder + e.toLowerCase() + (g ? ".ogg" : ".m4a"),
        t = this.getAudioBuffer(e, t, !0);
        t && (t.release(),
        cr.arrayFindRemove(f, t))
    }
    ,
    gt.prototype.UnloadAll = function() {
        for (var t = 0, e = f.length; t < e; ++t)
            f[t].release();
        cr.clearArray(f)
    }
    ,
    t.acts = new gt,
    mt.prototype.Duration = function(t, e) {
        pt(e, !0),
        lt.length ? t.set_float(lt[0].getDuration()) : t.set_float(0)
    }
    ,
    mt.prototype.PlaybackTime = function(t, e) {
        pt(e, !0),
        lt.length ? t.set_float(lt[0].getPlaybackTime(!0)) : t.set_float(0)
    }
    ,
    mt.prototype.Volume = function(t, e) {
        pt(e, !0),
        lt.length ? (e = lt[0].getVolume(),
        t.set_float(N(e))) : t.set_float(0)
    }
    ,
    mt.prototype.MasterVolume = function(t) {
        t.set_float(N(T))
    }
    ,
    mt.prototype.EffectCount = function(t, e) {
        e = e.toLowerCase();
        var i = null;
        D.hasOwnProperty(e) && (i = D[e]),
        t.set_int(i ? i.length : 0)
    }
    ,
    mt.prototype.AnalyserFreqBinCount = function(t, e, i) {
        i = _t(e = e.toLowerCase(), i = Math.floor(i));
        t.set_int(i ? i.node.frequencyBinCount : 0)
    }
    ,
    mt.prototype.AnalyserFreqBinAt = function(t, e, i, s) {
        e = e.toLowerCase(),
        i = Math.floor(i),
        s = Math.floor(s);
        i = _t(e, i);
        !i || s < 0 || s >= i.node.frequencyBinCount ? t.set_float(0) : t.set_float(i.freqBins[s])
    }
    ,
    mt.prototype.AnalyserPeakLevel = function(t, e, i) {
        i = _t(e = e.toLowerCase(), i = Math.floor(i));
        i ? t.set_float(i.peak) : t.set_float(0)
    }
    ,
    mt.prototype.AnalyserRMSLevel = function(t, e, i) {
        i = _t(e = e.toLowerCase(), i = Math.floor(i));
        i ? t.set_float(i.rms) : t.set_float(0)
    }
    ,
    mt.prototype.SampleRate = function(t) {
        t.set_int(d ? d.sampleRate : 0)
    }
    ,
    mt.prototype.CurrentTime = function(t) {
        t.set_float(d ? d.currentTime : cr.performance_now())
    }
    ,
    t.exps = new mt
}(),
cr.plugins_.Browser = function(t) {
    this.runtime = t
}
,
function() {
    var pluginProto = cr.plugins_.Browser.prototype;
    pluginProto.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var typeProto = pluginProto.Type.prototype;
    typeProto.onCreate = function() {}
    ;
    var offlineScriptReady = !1
      , browserPluginReady = !1;
    document.addEventListener("DOMContentLoaded", function() {
        var t;
        window.C2_RegisterSW && navigator.serviceWorker && ((t = document.createElement("script")).onload = function() {
            offlineScriptReady = !0,
            checkReady()
        }
        ,
        t.src = "offlineClient.js",
        document.head.appendChild(t))
    });
    var browserInstance = null;
    function checkReady() {
        offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(t) {
            browserInstance.onSWMessage(t)
        })
    }
    typeProto.onAppBegin = function() {
        browserPluginReady = !0,
        checkReady()
    }
    ,
    pluginProto.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var instanceProto = pluginProto.Instance.prototype;
    instanceProto.onCreate = function() {
        var e = this;
        window.addEventListener("resize", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, e)
        }),
        browserInstance = this,
        void 0 !== navigator.onLine && (window.addEventListener("online", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, e)
        }),
        window.addEventListener("offline", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, e)
        })),
        this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, e)
        }),
        document.addEventListener("backbutton", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e)
        }),
        document.addEventListener("menubutton", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, e)
        }),
        document.addEventListener("searchbutton", function() {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, e)
        }),
        document.addEventListener("tizenhwkey", function(t) {
            switch (t.keyName) {
            case "back":
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e) || window.tizen && window.tizen.application.getCurrentApplication().exit();
                break;
            case "menu":
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, e) || t.preventDefault()
            }
        })),
        this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(t) {
            e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e) && (t.handled = !0)
        }) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(t) {
            return !!e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e)
        }
        ),
        this.runtime.addSuspendCallback(function(t) {
            t ? e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, e) : e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, e)
        }),
        this.is_arcade = void 0 !== window.is_scirra_arcade
    }
    ,
    instanceProto.onSWMessage = function(t) {
        t = t.data.type;
        "downloading-update" === t ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === t || "update-pending" === t ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === t && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
    }
    ;
    var batteryManager = null
      , loadedBatteryManager = !1;
    function maybeLoadBatteryManager() {
        var t;
        loadedBatteryManager || navigator.getBattery && (t = navigator.getBattery(),
        loadedBatteryManager = !0,
        t && t.then(function(t) {
            batteryManager = t
        }))
    }
    function Cnds() {}
    function Acts() {}
    Cnds.prototype.CookiesEnabled = function() {
        return !!navigator && navigator.cookieEnabled
    }
    ,
    Cnds.prototype.IsOnline = function() {
        return !!navigator && navigator.onLine
    }
    ,
    Cnds.prototype.HasJava = function() {
        return !!navigator && navigator.javaEnabled()
    }
    ,
    Cnds.prototype.OnOnline = function() {
        return !0
    }
    ,
    Cnds.prototype.OnOffline = function() {
        return !0
    }
    ,
    Cnds.prototype.IsDownloadingUpdate = function() {
        return !1
    }
    ,
    Cnds.prototype.OnUpdateReady = function() {
        return !0
    }
    ,
    Cnds.prototype.PageVisible = function() {
        return !this.runtime.isSuspended
    }
    ,
    Cnds.prototype.OnPageVisible = function() {
        return !0
    }
    ,
    Cnds.prototype.OnPageHidden = function() {
        return !0
    }
    ,
    Cnds.prototype.OnResize = function() {
        return !0
    }
    ,
    Cnds.prototype.IsFullscreen = function() {
        return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
    }
    ,
    Cnds.prototype.OnBackButton = function() {
        return !0
    }
    ,
    Cnds.prototype.OnMenuButton = function() {
        return !0
    }
    ,
    Cnds.prototype.OnSearchButton = function() {
        return !0
    }
    ,
    Cnds.prototype.IsMetered = function() {
        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return !!t && !!t.metered
    }
    ,
    Cnds.prototype.IsCharging = function() {
        var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        return t ? !!t.charging : (maybeLoadBatteryManager(),
        !batteryManager || !!batteryManager.charging)
    }
    ,
    Cnds.prototype.IsPortraitLandscape = function(t) {
        return (window.innerWidth <= window.innerHeight ? 0 : 1) === t
    }
    ,
    Cnds.prototype.SupportsFullscreen = function() {
        if (this.runtime.isNodeWebkit)
            return !0;
        var t = this.runtime.canvasdiv || this.runtime.canvas;
        return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
    }
    ,
    Cnds.prototype.OnUpdateFound = function() {
        return !0
    }
    ,
    Cnds.prototype.OnUpdateReady = function() {
        return !0
    }
    ,
    Cnds.prototype.OnOfflineReady = function() {
        return !0
    }
    ,
    pluginProto.cnds = new Cnds,
    Acts.prototype.Alert = function(t) {
        this.runtime.isDomFree || alert(t.toString())
    }
    ,
    Acts.prototype.Close = function() {
        this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
    }
    ,
    Acts.prototype.Focus = function() {
        this.runtime.isNodeWebkit ? window.nwgui.Window.get().focus() : this.is_arcade || this.runtime.isDomFree || window.focus()
    }
    ,
    Acts.prototype.Blur = function() {
        this.runtime.isNodeWebkit ? window.nwgui.Window.get().blur() : this.is_arcade || this.runtime.isDomFree || window.blur()
    }
    ,
    Acts.prototype.GoBack = function() {
        navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
    }
    ,
    Acts.prototype.GoForward = function() {
        this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
    }
    ,
    Acts.prototype.GoHome = function() {
        this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
    }
    ,
    Acts.prototype.GoToURL = function(t, e) {
        this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
            openExternal: !0
        }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
    }
    ,
    Acts.prototype.GoToURLWindow = function(t, e) {
        this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
            openExternal: !0
        }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || window.open(t, e)
    }
    ,
    Acts.prototype.Reload = function() {
        this.is_arcade || this.runtime.isDomFree || window.location.reload()
    }
    ;
    var firstRequestFullscreen = !0
      , crruntime = null;
    function onFullscreenError(t) {
        console && console.warn && console.warn("Fullscreen request failed: ", t),
        crruntime.setSize(window.innerWidth, window.innerHeight)
    }
    Acts.prototype.RequestFullScreen = function(t) {
        this.runtime.isDomFree ? cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored") : (2 <= t && (t += 1),
        6 === t && (t = 2),
        this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(),
        this.runtime.isNodeFullscreen = !0,
        this.runtime.fullscreen_scaling = 2 <= t ? t : 0) : document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement || (this.runtime.fullscreen_scaling = 2 <= t ? t : 0,
        t = document.documentElement,
        firstRequestFullscreen && (firstRequestFullscreen = !1,
        crruntime = this.runtime,
        t.addEventListener("mozfullscreenerror", onFullscreenError),
        t.addEventListener("webkitfullscreenerror", onFullscreenError),
        t.addEventListener("MSFullscreenError", onFullscreenError),
        t.addEventListener("fullscreenerror", onFullscreenError)),
        t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitRequestFullScreen && ("undefined" != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : t.webkitRequestFullScreen())))
    }
    ,
    Acts.prototype.CancelFullScreen = function() {
        this.runtime.isDomFree ? cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(),
        this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    }
    ,
    Acts.prototype.Vibrate = function(t) {
        try {
            for (var e = t.split(","), i = 0, s = e.length; i < s; i++)
                e[i] = parseInt(e[i], 10);
            navigator.vibrate ? navigator.vibrate(e) : navigator.mozVibrate ? navigator.mozVibrate(e) : navigator.webkitVibrate ? navigator.webkitVibrate(e) : navigator.msVibrate && navigator.msVibrate(e)
        } catch (t) {}
    }
    ,
    Acts.prototype.InvokeDownload = function(t, e) {
        var i, s = document.createElement("a");
        void 0 === s.download ? window.open(t) : (i = document.getElementsByTagName("body")[0],
        s.textContent = e,
        s.href = t,
        s.download = e,
        i.appendChild(s),
        e = new MouseEvent("click"),
        s.dispatchEvent(e),
        i.removeChild(s))
    }
    ,
    Acts.prototype.InvokeDownloadString = function(t, e, i) {
        var s = "data:" + e + "," + encodeURIComponent(t)
          , e = document.createElement("a");
        void 0 === e.download ? window.open(s) : (t = document.getElementsByTagName("body")[0],
        e.textContent = i,
        e.href = s,
        e.download = i,
        t.appendChild(e),
        i = new MouseEvent("click"),
        e.dispatchEvent(i),
        t.removeChild(e))
    }
    ,
    Acts.prototype.ConsoleLog = function(t, e) {
        "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()),
        1 === t && console.warn && console.warn(e.toString()),
        2 === t && console.error && console.error(e.toString()))
    }
    ,
    Acts.prototype.ConsoleGroup = function(t) {
        console && console.group && console.group(t)
    }
    ,
    Acts.prototype.ConsoleGroupEnd = function() {
        console && console.groupEnd && console.groupEnd()
    }
    ,
    Acts.prototype.ExecJs = function(js_) {
        try {
            eval && eval(js_)
        } catch (e) {
            console && console.error && console.error("Error executing Javascript: ", e)
        }
    }
    ;
    var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
    function Exps() {}
    Acts.prototype.LockOrientation = function(t) {
        (t = Math.floor(t)) < 0 || t >= orientations.length || (this.runtime.autoLockOrientation = !1,
        t = orientations[t],
        screen.orientation && screen.orientation.lock ? screen.orientation.lock(t) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t))
    }
    ,
    Acts.prototype.UnlockOrientation = function() {
        this.runtime.autoLockOrientation = !1,
        screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
    }
    ,
    pluginProto.acts = new Acts,
    Exps.prototype.URL = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
    }
    ,
    Exps.prototype.Protocol = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
    }
    ,
    Exps.prototype.Domain = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
    }
    ,
    Exps.prototype.PathName = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
    }
    ,
    Exps.prototype.Hash = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
    }
    ,
    Exps.prototype.Referrer = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : document.referrer)
    }
    ,
    Exps.prototype.Title = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : document.title)
    }
    ,
    Exps.prototype.Name = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
    }
    ,
    Exps.prototype.Version = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
    }
    ,
    Exps.prototype.Language = function(t) {
        navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
    }
    ,
    Exps.prototype.Platform = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
    }
    ,
    Exps.prototype.Product = function(t) {
        navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
    }
    ,
    Exps.prototype.Vendor = function(t) {
        navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
    }
    ,
    Exps.prototype.UserAgent = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
    }
    ,
    Exps.prototype.QueryString = function(t) {
        t.set_string(this.runtime.isDomFree ? "" : window.location.search)
    }
    ,
    Exps.prototype.QueryParam = function(t, e) {
        !this.runtime.isDomFree && (e = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search)) ? t.set_string(decodeURIComponent(e[1].replace(/\+/g, " "))) : t.set_string("")
    }
    ,
    Exps.prototype.Bandwidth = function(t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        e ? void 0 !== e.bandwidth ? t.set_float(e.bandwidth) : void 0 !== e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
    }
    ,
    Exps.prototype.ConnectionType = function(t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
    }
    ,
    Exps.prototype.BatteryLevel = function(t) {
        var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        e ? t.set_float(e.level) : (maybeLoadBatteryManager(),
        batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
    }
    ,
    Exps.prototype.BatteryTimeLeft = function(t) {
        var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
        e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(),
        batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
    }
    ,
    Exps.prototype.ExecJS = function(ret, js_) {
        if (eval) {
            var result = 0;
            try {
                result = eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
            "number" == typeof result || "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
        } else
            ret.set_any(0)
    }
    ,
    Exps.prototype.ScreenWidth = function(t) {
        t.set_int(screen.width)
    }
    ,
    Exps.prototype.ScreenHeight = function(t) {
        t.set_int(screen.height)
    }
    ,
    Exps.prototype.DevicePixelRatio = function(t) {
        t.set_float(this.runtime.devicePixelRatio)
    }
    ,
    Exps.prototype.WindowInnerWidth = function(t) {
        t.set_int(window.innerWidth)
    }
    ,
    Exps.prototype.WindowInnerHeight = function(t) {
        t.set_int(window.innerHeight)
    }
    ,
    Exps.prototype.WindowOuterWidth = function(t) {
        t.set_int(window.outerWidth)
    }
    ,
    Exps.prototype.WindowOuterHeight = function(t) {
        t.set_int(window.outerHeight)
    }
    ,
    pluginProto.exps = new Exps
}(),
cr.plugins_.Function = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Function.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype
      , i = []
      , s = -1;
    function n() {
        this.name = "",
        this.retVal = 0,
        this.params = []
    }
    function a() {
        return ++s === i.length && i.push(new n),
        i[s]
    }
    function r() {
        return s < 0 ? null : i[s]
    }
    function h() {
        s--
    }
    function o() {}
    function c() {}
    function l() {}
    e.onCreate = function() {
        0;
        var o = this;
        window.c2_callFunction = function(t, e) {
            var i, s, n, r = a();
            if (r.name = t.toLowerCase(),
            r.retVal = 0,
            e)
                for (r.params.length = e.length,
                i = 0,
                s = e.length; i < s; ++i)
                    n = e[i],
                    r.params[i] = "number" == typeof n || "string" == typeof n ? n : "boolean" == typeof n && n ? 1 : 0;
            else
                cr.clearArray(r.params);
            return o.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, o, r.name),
            h(),
            r.retVal
        }
    }
    ,
    o.prototype.OnFunction = function(t) {
        var e = r();
        return !!e && cr.equals_nocase(t, e.name)
    }
    ,
    o.prototype.CompareParam = function(t, e, i) {
        var s = r();
        return !!s && (!((t = cr.floor(t)) < 0 || t >= s.params.length) && cr.do_cmp(s.params[t], e, i))
    }
    ,
    t.cnds = new o,
    c.prototype.CallFunction = function(t, e) {
        var i = a();
        i.name = t.toLowerCase(),
        i.retVal = 0,
        cr.shallowAssignArray(i.params, e);
        this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, i.name);
        h()
    }
    ,
    c.prototype.SetReturnValue = function(t) {
        var e = r();
        e && (e.retVal = t)
    }
    ,
    c.prototype.CallExpression = function(t) {}
    ,
    t.acts = new c,
    l.prototype.ReturnValue = function(t) {
        var e = function() {
            if (!i.length)
                return null;
            var t = s + 1;
            return t >= i.length && (t = i.length - 1),
            i[t]
        }();
        e ? t.set_any(e.retVal) : t.set_int(0)
    }
    ,
    l.prototype.ParamCount = function(t) {
        var e = r();
        e ? t.set_int(e.params.length) : t.set_int(0)
    }
    ,
    l.prototype.Param = function(t, e) {
        e = cr.floor(e);
        var i = r();
        i && 0 <= e && e < i.params.length ? t.set_any(i.params[e]) : t.set_int(0)
    }
    ,
    l.prototype.Call = function(t, e) {
        var i, s, n = a();
        for (n.name = e.toLowerCase(),
        n.retVal = 0,
        cr.clearArray(n.params),
        i = 2,
        s = arguments.length; i < s; i++)
            n.params.push(arguments[i]);
        this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, n.name);
        h(),
        t.set_any(n.retVal)
    }
    ,
    t.exps = new l
}(),
cr.plugins_.Keyboard = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Keyboard.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.keyMap = new Array(256),
        this.usedKeys = new Array(256),
        this.triggerKey = 0
    }
    ;
    var e = t.Instance.prototype;
    e.onCreate = function() {
        var e = this;
        this.runtime.isDomFree || (jQuery(document).keydown(function(t) {
            e.onKeyDown(t)
        }),
        jQuery(document).keyup(function(t) {
            e.onKeyUp(t)
        }))
    }
    ;
    var n = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    function i() {}
    function s() {}
    e.onKeyDown = function(t) {
        var e, i, s = !1;
        window != window.top && -1 < n.indexOf(t.which) && (t.preventDefault(),
        s = !0,
        t.stopPropagation()),
        this.keyMap[t.which] ? this.usedKeys[t.which] && !s && t.preventDefault() : (this.keyMap[t.which] = !0,
        this.triggerKey = t.which,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKey, this),
        e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKey, this),
        i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCode, this),
        this.runtime.isInUserInputEvent = !1,
        (e || i) && (this.usedKeys[t.which] = !0,
        s || t.preventDefault()))
    }
    ,
    e.onKeyUp = function(t) {
        this.keyMap[t.which] = !1,
        this.triggerKey = t.which,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
        var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this)
          , i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
        this.runtime.isInUserInputEvent = !1,
        (e || i || this.usedKeys[t.which]) && (this.usedKeys[t.which] = !0,
        t.preventDefault())
    }
    ,
    e.onWindowBlur = function() {
        for (var t, e, i = 0; i < 256; ++i)
            this.keyMap[i] && (this.keyMap[i] = !1,
            this.triggerKey = i,
            this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this),
            t = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
            e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this),
            (t || e) && (this.usedKeys[i] = !0))
    }
    ,
    e.saveToJSON = function() {
        return {
            triggerKey: this.triggerKey
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.triggerKey = t.triggerKey
    }
    ,
    i.prototype.IsKeyDown = function(t) {
        return this.keyMap[t]
    }
    ,
    i.prototype.OnKey = function(t) {
        return t === this.triggerKey
    }
    ,
    i.prototype.OnAnyKey = function(t) {
        return !0
    }
    ,
    i.prototype.OnAnyKeyReleased = function(t) {
        return !0
    }
    ,
    i.prototype.OnKeyReleased = function(t) {
        return t === this.triggerKey
    }
    ,
    i.prototype.IsKeyCodeDown = function(t) {
        return !((t = Math.floor(t)) < 0 || t >= this.keyMap.length) && this.keyMap[t]
    }
    ,
    i.prototype.OnKeyCode = function(t) {
        return t === this.triggerKey
    }
    ,
    i.prototype.OnKeyCodeReleased = function(t) {
        return t === this.triggerKey
    }
    ,
    t.cnds = new i,
    t.acts = new function() {}
    ,
    s.prototype.LastKeyCode = function(t) {
        t.set_int(this.triggerKey)
    }
    ,
    s.prototype.StringFromKeyCode = function(t, e) {
        t.set_string(function(t) {
            switch (t = Math.floor(t)) {
            case 8:
                return "backspace";
            case 9:
                return "tab";
            case 13:
                return "enter";
            case 16:
                return "shift";
            case 17:
                return "control";
            case 18:
                return "alt";
            case 19:
                return "pause";
            case 20:
                return "capslock";
            case 27:
                return "esc";
            case 33:
                return "pageup";
            case 34:
                return "pagedown";
            case 35:
                return "end";
            case 36:
                return "home";
            case 37:
                return "â†";
            case 38:
                return "â†‘";
            case 39:
                return "â†’";
            case 40:
                return "â†“";
            case 45:
                return "insert";
            case 46:
                return "del";
            case 91:
                return "left window key";
            case 92:
                return "right window key";
            case 93:
                return "select";
            case 96:
                return "numpad 0";
            case 97:
                return "numpad 1";
            case 98:
                return "numpad 2";
            case 99:
                return "numpad 3";
            case 100:
                return "numpad 4";
            case 101:
                return "numpad 5";
            case 102:
                return "numpad 6";
            case 103:
                return "numpad 7";
            case 104:
                return "numpad 8";
            case 105:
                return "numpad 9";
            case 106:
                return "numpad *";
            case 107:
                return "numpad +";
            case 109:
                return "numpad -";
            case 110:
                return "numpad .";
            case 111:
                return "numpad /";
            case 112:
                return "F1";
            case 113:
                return "F2";
            case 114:
                return "F3";
            case 115:
                return "F4";
            case 116:
                return "F5";
            case 117:
                return "F6";
            case 118:
                return "F7";
            case 119:
                return "F8";
            case 120:
                return "F9";
            case 121:
                return "F10";
            case 122:
                return "F11";
            case 123:
                return "F12";
            case 144:
                return "numlock";
            case 145:
                return "scroll lock";
            case 186:
                return ";";
            case 187:
                return "=";
            case 188:
                return ",";
            case 189:
                return "-";
            case 190:
                return ".";
            case 191:
                return "/";
            case 192:
                return "'";
            case 219:
                return "[";
            case 220:
                return "\\";
            case 221:
                return "]";
            case 222:
                return "#";
            case 223:
                return "`";
            default:
                return String.fromCharCode(t)
            }
        }(e))
    }
    ,
    t.exps = new s
}();
var localForageInitFailed = !1;
try {
    !function() {
        var t, a, h, c, l;
        c = {},
        l = {},
        h = a = function(o) {
            if (h._eak_seen = c,
            l[o])
                return l[o];
            if (l[o] = {},
            !c[o])
                throw new Error("Could not find module " + o);
            for (var t, e = c[o], i = e.deps, e = e.callback, s = [], n = 0, r = i.length; n < r; n++)
                "exports" === i[n] ? s.push(t = {}) : s.push(a(function(t) {
                    if ("." !== t.charAt(0))
                        return t;
                    for (var e = t.split("/"), i = o.split("/").slice(0, -1), s = 0, n = e.length; s < n; s++) {
                        var r = e[s];
                        ".." === r ? i.pop() : "." !== r && i.push(r)
                    }
                    return i.join("/")
                }(i[n])));
            e = e.apply(this, s);
            return l[o] = t || e
        }
        ,
        (t = function(t, e, i) {
            c[t] = {
                deps: e,
                callback: i
            }
        }
        )("promise/all", ["./utils", "exports"], function(t, e) {
            "use strict";
            var i = t.isArray
              , h = t.isFunction;
            e.all = function(a) {
                if (!i(a))
                    throw new TypeError("You must pass an array to all.");
                return new this(function(i, t) {
                    function s(t, e) {
                        n[t] = e,
                        0 == --r && i(n)
                    }
                    var e, n = [], r = a.length;
                    0 === r && i([]);
                    for (var o = 0; o < a.length; o++)
                        (e = a[o]) && h(e.then) ? e.then(function(e) {
                            return function(t) {
                                s(e, t)
                            }
                        }(o), t) : s(o, e)
                }
                )
            }
        }),
        t("promise/asap", ["exports"], function(t) {
            "use strict";
            function e() {
                for (var t = 0; t < h.length; t++) {
                    var e = h[t];
                    (0,
                    e[0])(e[1])
                }
                h = []
            }
            var i, s, n, r = "undefined" != typeof window ? window : {}, o = r.MutationObserver || r.WebKitMutationObserver, a = "undefined" != typeof global ? global : void 0 === this ? window : this, h = [], c = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? function() {
                process.nextTick(e)
            }
            : o ? (i = 0,
            s = new o(e),
            n = document.createTextNode(""),
            s.observe(n, {
                characterData: !0
            }),
            function() {
                n.data = i = ++i % 2
            }
            ) : function() {
                a.setTimeout(e, 1)
            }
            ;
            t.asap = function(t, e) {
                1 === h.push([t, e]) && c()
            }
        }),
        t("promise/config", ["exports"], function(t) {
            "use strict";
            var i = {
                instrument: !1
            };
            t.config = i,
            t.configure = function(t, e) {
                return 2 !== arguments.length ? i[t] : void (i[t] = e)
            }
        }),
        t("promise/polyfill", ["./promise", "./utils", "exports"], function(t, e, i) {
            "use strict";
            var s = t.Promise
              , n = e.isFunction;
            i.polyfill = function() {
                var e, t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise"in t && "resolve"in t.Promise && "reject"in t.Promise && "all"in t.Promise && "race"in t.Promise && (new t.Promise(function(t) {
                    e = t
                }
                ),
                n(e)) || (t.Promise = s)
            }
        }),
        t("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(t, e, i, s, n, r, o, a) {
            "use strict";
            function h(t) {
                if (!v(t))
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof h))
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._subscribers = [],
                function(t, e) {
                    function i(t) {
                        f(e, t)
                    }
                    try {
                        t(function(t) {
                            p(e, t)
                        }, i)
                    } catch (t) {
                        i(t)
                    }
                }(t, this)
            }
            function c(t, e, i, s) {
                var n, r, o, a, h = v(i);
                if (h)
                    try {
                        n = i(s),
                        o = !0
                    } catch (t) {
                        a = !0,
                        r = t
                    }
                else
                    n = s,
                    o = !0;
                u(e, n) || (h && o ? p(e, n) : a ? f(e, r) : t === x ? p(e, n) : t === S && f(e, n))
            }
            function l(t, e) {
                for (var i = t._subscribers, s = t._detail, n = 0; n < i.length; n += 3)
                    c(e, i[n], i[n + e], s);
                t._subscribers = null
            }
            function u(e, i) {
                var s, t = null;
                try {
                    if (e === i)
                        throw new TypeError("A promises callback cannot return that same promise.");
                    if (_(i) && (t = i.then,
                    v(t)))
                        return t.call(i, function(t) {
                            return !!s || (s = !0,
                            void (i !== t ? p : d)(e, t))
                        }, function(t) {
                            return !!s || (s = !0,
                            void f(e, t))
                        }),
                        1
                } catch (t) {
                    return s || f(e, t),
                    1
                }
            }
            function p(t, e) {
                t !== e && u(t, e) || d(t, e)
            }
            function d(t, e) {
                t._state === b && (t._state = w,
                t._detail = e,
                m.async(y, t))
            }
            function f(t, e) {
                t._state === b && (t._state = w,
                t._detail = e,
                m.async(g, t))
            }
            function y(t) {
                l(t, t._state = x)
            }
            function g(t) {
                l(t, t._state = S)
            }
            var m = t.config
              , _ = (t.configure,
            e.objectOrFunction)
              , v = e.isFunction
              , i = (e.now,
            i.all)
              , s = s.race
              , n = n.resolve
              , r = r.reject
              , o = o.asap;
            m.async = o;
            var b = void 0
              , w = 0
              , x = 1
              , S = 2;
            h.prototype = {
                constructor: h,
                _state: void 0,
                _detail: void 0,
                _subscribers: void 0,
                then: function(t, e) {
                    var i, s, n, r, o = this, a = new this.constructor(function() {}
                    );
                    return this._state ? (i = arguments,
                    m.async(function() {
                        c(o._state, a, i[o._state - 1], o._detail)
                    })) : (s = a,
                    n = t,
                    r = e,
                    t = (e = (t = this)._subscribers).length,
                    e[t] = s,
                    e[t + x] = n,
                    e[t + S] = r),
                    a
                },
                catch: function(t) {
                    return this.then(null, t)
                }
            },
            h.all = i,
            h.race = s,
            h.resolve = n,
            h.reject = r,
            a.Promise = h
        }),
        t("promise/race", ["./utils", "exports"], function(t, e) {
            "use strict";
            var i = t.isArray;
            e.race = function(n) {
                if (!i(n))
                    throw new TypeError("You must pass an array to race.");
                return new this(function(t, e) {
                    for (var i, s = 0; s < n.length; s++)
                        (i = n[s]) && "function" == typeof i.then ? i.then(t, e) : t(i)
                }
                )
            }
        }),
        t("promise/reject", ["exports"], function(t) {
            "use strict";
            t.reject = function(i) {
                return new this(function(t, e) {
                    e(i)
                }
                )
            }
        }),
        t("promise/resolve", ["exports"], function(t) {
            "use strict";
            t.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === this ? e : new this(function(t) {
                    t(e)
                }
                )
            }
        }),
        t("promise/utils", ["exports"], function(t) {
            "use strict";
            function e(t) {
                return "function" == typeof t
            }
            var i = Date.now || function() {
                return (new Date).getTime()
            }
            ;
            t.objectOrFunction = function(t) {
                return e(t) || "object" == typeof t && null !== t
            }
            ,
            t.isFunction = e,
            t.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ,
            t.now = i
        }),
        a("promise/polyfill").polyfill()
    }(),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.localforage = e() : t.localforage = e()
    }(this, function() {
        return n = {},
        i.m = s = [function(t, e, r) {
            "use strict";
            e.__esModule = !0;
            var i, s, c, n, o, l, a, u, h, i = (i = "undefined" != typeof window ? window : self,
            c = {},
            o = [(n = {
                INDEXEDDB: "asyncStorage",
                LOCALSTORAGE: "localStorageWrapper",
                WEBSQL: "webSQLStorage"
            }).INDEXEDDB, n.WEBSQL, n.LOCALSTORAGE],
            l = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
            a = {
                description: "",
                driver: o.slice(),
                name: "localforage",
                size: 4980736,
                storeName: "keyvaluepairs",
                version: 1
            },
            s = i,
            (i = {})[n.INDEXEDDB] = !!function() {
                try {
                    var t = s.indexedDB || s.webkitIndexedDB || s.mozIndexedDB || s.OIndexedDB || s.msIndexedDB;
                    return (!(void 0 !== s.openDatabase && s.navigator && s.navigator.userAgent && /Safari/.test(s.navigator.userAgent)) || /Chrome/.test(s.navigator.userAgent)) && (t && "function" == typeof t.open && void 0 !== s.IDBKeyRange)
                } catch (t) {
                    return
                }
            }(),
            i[n.WEBSQL] = !!function() {
                try {
                    return s.openDatabase
                } catch (t) {
                    return
                }
            }(),
            i[n.LOCALSTORAGE] = !!function() {
                try {
                    return s.localStorage && "setItem"in s.localStorage && s.localStorage.setItem
                } catch (t) {
                    return
                }
            }(),
            u = i,
            h = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ,
            new (f.prototype.config = function(t) {
                if ("object" != typeof t)
                    return "string" == typeof t ? this._config[t] : this._config;
                if (this._ready)
                    return new Error("Can't call config() after localforage has been used.");
                for (var e in t)
                    "storeName" === e && (t[e] = t[e].replace(/\W/g, "_")),
                    this._config[e] = t[e];
                return "driver"in t && t.driver && this.setDriver(this._config.driver),
                !0
            }
            ,
            f.prototype.defineDriver = function(h, t, e) {
                var i = new Promise(function(e, i) {
                    try {
                        var s = h._driver
                          , t = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver")
                          , n = new Error("Custom driver name already in use: " + h._driver);
                        if (!h._driver)
                            return void i(t);
                        if (d(h._driver))
                            return void i(n);
                        for (var r = l.concat("_initStorage"), o = 0; o < r.length; o++) {
                            var a = r[o];
                            if (!a || !h[a] || "function" != typeof h[a])
                                return void i(t)
                        }
                        n = Promise.resolve(!0);
                        "_support"in h && (n = h._support && "function" == typeof h._support ? h._support() : Promise.resolve(!!h._support)),
                        n.then(function(t) {
                            u[s] = t,
                            c[s] = h,
                            e()
                        }, i)
                    } catch (t) {
                        i(t)
                    }
                }
                );
                return i.then(t, e),
                i
            }
            ,
            f.prototype.driver = function() {
                return this._driver || null
            }
            ,
            f.prototype.getDriver = function(t, e, i) {
                var s = this
                  , n = function() {
                    if (d(t))
                        switch (t) {
                        case s.INDEXEDDB:
                            return new Promise(function(t, e) {
                                t(r(1))
                            }
                            );
                        case s.LOCALSTORAGE:
                            return new Promise(function(t, e) {
                                t(r(2))
                            }
                            );
                        case s.WEBSQL:
                            return new Promise(function(t, e) {
                                t(r(4))
                            }
                            )
                        }
                    else if (c[t])
                        return Promise.resolve(c[t]);
                    return Promise.reject(new Error("Driver not found."))
                }();
                return n.then(e, i),
                n
            }
            ,
            f.prototype.getSerializer = function(e) {
                var t = new Promise(function(t, e) {
                    t(r(3))
                }
                );
                return e && "function" == typeof e && t.then(function(t) {
                    e(t)
                }),
                t
            }
            ,
            f.prototype.ready = function(t) {
                var e = this
                  , i = e._driverSet.then(function() {
                    return null === e._ready && (e._ready = e._initDriver()),
                    e._ready
                });
                return i.then(t, t),
                i
            }
            ,
            f.prototype.setDriver = function(t, e, i) {
                function r() {
                    o._config.driver = o.driver()
                }
                function s(n) {
                    return function() {
                        var s = 0;
                        return function t() {
                            for (; s < n.length; ) {
                                var e = n[s];
                                return s++,
                                o._dbInfo = null,
                                o._ready = null,
                                o.getDriver(e).then(function(t) {
                                    return o._extend(t),
                                    r(),
                                    o._ready = o._initStorage(o._config),
                                    o._ready
                                }).catch(t)
                            }
                            r();
                            var i = new Error("No available storage method found.");
                            return o._driverSet = Promise.reject(i),
                            o._driverSet
                        }()
                    }
                }
                var o = this;
                h(t) || (t = [t]);
                var n = this._getSupportedDrivers(t)
                  , t = null !== this._driverSet ? this._driverSet.catch(function() {
                    return Promise.resolve()
                }) : Promise.resolve();
                return this._driverSet = t.then(function() {
                    var t = n[0];
                    return o._dbInfo = null,
                    o._ready = null,
                    o.getDriver(t).then(function(t) {
                        o._driver = t._driver,
                        r(),
                        o._wrapLibraryMethodsWithReady(),
                        o._initDriver = s(n)
                    })
                }).catch(function() {
                    r();
                    var t = new Error("No available storage method found.");
                    return o._driverSet = Promise.reject(t),
                    o._driverSet
                }),
                this._driverSet.then(e, i),
                this._driverSet
            }
            ,
            f.prototype.supports = function(t) {
                return !!u[t]
            }
            ,
            f.prototype._extend = function(t) {
                p(this, t)
            }
            ,
            f.prototype._getSupportedDrivers = function(t) {
                for (var e = [], i = 0, s = t.length; i < s; i++) {
                    var n = t[i];
                    this.supports(n) && e.push(n)
                }
                return e
            }
            ,
            f.prototype._wrapLibraryMethodsWithReady = function() {
                for (var t = 0; t < l.length; t++)
                    !function(e, i) {
                        e[i] = function() {
                            var t = arguments;
                            return e.ready().then(function() {
                                return e[i].apply(e, t)
                            })
                        }
                    }(this, l[t])
            }
            ,
            f.prototype.createInstance = function(t) {
                return new f(t)
            }
            ,
            f));
            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    if (i)
                        for (var s in i)
                            i.hasOwnProperty(s) && (h(i[s]) ? t[s] = i[s].slice() : t[s] = i[s])
                }
                return t
            }
            function d(t) {
                for (var e in n)
                    if (n.hasOwnProperty(e) && n[e] === t)
                        return 1
            }
            function f(t) {
                (function(t) {
                    if (!(t instanceof f))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this),
                this.INDEXEDDB = n.INDEXEDDB,
                this.LOCALSTORAGE = n.LOCALSTORAGE,
                this.WEBSQL = n.WEBSQL,
                this._defaultConfig = p({}, a),
                this._config = p({}, this._defaultConfig, t),
                this._driverSet = null,
                this._initDriver = null,
                this._ready = !1,
                this._dbInfo = null,
                this._wrapLibraryMethodsWithReady(),
                this.setDriver(this._config.driver)
            }
            e.default = i,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0;
            var i = function(l) {
                function r(e, i) {
                    e = e || [],
                    i = i || {};
                    try {
                        return new Blob(e,i)
                    } catch (t) {
                        if ("TypeError" !== t.name)
                            throw t;
                        for (var s = new (l.BlobBuilder || l.MSBlobBuilder || l.MozBlobBuilder || l.WebKitBlobBuilder), n = 0; n < e.length; n += 1)
                            s.append(e[n]);
                        return s.getBlob(i.type)
                    }
                }
                function h(n) {
                    return new Promise(function(i, e) {
                        var t = r([""], {
                            type: "image/png"
                        })
                          , s = n.transaction([m], "readwrite");
                        s.objectStore(m).put(t, "key"),
                        s.oncomplete = function() {
                            var t = n.transaction([m], "readwrite").objectStore(m).get("key");
                            t.onerror = e,
                            t.onsuccess = function(t) {
                                var s, t = t.target.result, e = URL.createObjectURL(t);
                                s = e,
                                new Promise(function(t, e) {
                                    var i = new XMLHttpRequest;
                                    i.open("GET", s),
                                    i.withCredentials = !0,
                                    i.responseType = "arraybuffer",
                                    i.onreadystatechange = function() {
                                        return 4 === i.readyState ? 200 === i.status ? t({
                                            response: i.response,
                                            type: i.getResponseHeader("Content-Type")
                                        }) : void e({
                                            status: i.status,
                                            response: i.response
                                        }) : void 0
                                    }
                                    ,
                                    i.send()
                                }
                                ).then(function(t) {
                                    i(!(!t || "image/png" !== t.type))
                                }, function() {
                                    i(!1)
                                }).then(function() {
                                    URL.revokeObjectURL(e)
                                })
                            }
                        }
                        ,
                        s.onerror = s.onabort = e
                    }
                    ).catch(function() {
                        return !1
                    })
                }
                function a(t) {
                    return r([function(t) {
                        for (var e = t.length, i = new ArrayBuffer(e), s = new Uint8Array(i), n = 0; n < e; n++)
                            s[n] = t.charCodeAt(n);
                        return i
                    }(atob(t.data))], {
                        type: t.type
                    })
                }
                function c(t) {
                    return t && t.__local_forage_encoded_blob
                }
                function u(t) {
                    var e = this
                      , i = e._initReady().then(function() {
                        var t = g[e._dbInfo.name];
                        return t && t.dbReady ? t.dbReady : void 0
                    });
                    return i.then(t, t),
                    i
                }
                function p(r, o) {
                    return new Promise(function(e, t) {
                        if (r.db) {
                            if (!o)
                                return e(r.db);
                            s = g[(s = r).name],
                            (i = {}).promise = new Promise(function(t) {
                                i.resolve = t
                            }
                            ),
                            s.deferredOperations.push(i),
                            s.dbReady ? s.dbReady = s.dbReady.then(function() {
                                return i.promise
                            }) : s.dbReady = i.promise,
                            r.db.close()
                        }
                        var i, s = [r.name];
                        o && s.push(r.version);
                        var n = f.open.apply(f, s);
                        o && (n.onupgradeneeded = function(e) {
                            var t = n.result;
                            try {
                                t.createObjectStore(r.storeName),
                                e.oldVersion <= 1 && t.createObjectStore(m)
                            } catch (t) {
                                if ("ConstraintError" !== t.name)
                                    throw t;
                                l.console.warn('The database "' + r.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + r.storeName + '" already exists.')
                            }
                        }
                        ),
                        n.onerror = function() {
                            t(n.error)
                        }
                        ,
                        n.onsuccess = function() {
                            var t;
                            e(n.result),
                            (t = g[(t = r).name].deferredOperations.pop()) && t.resolve()
                        }
                    }
                    )
                }
                function d(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }
                var f = f || l.indexedDB || l.webkitIndexedDB || l.mozIndexedDB || l.OIndexedDB || l.msIndexedDB;
                if (f) {
                    var y, g, m = "local-forage-detect-blob-support";
                    return {
                        _driver: "asyncStorage",
                        _initStorage: function(t) {
                            function e() {
                                return Promise.resolve()
                            }
                            var s = this
                              , n = {
                                db: null
                            };
                            if (t)
                                for (var i in t)
                                    n[i] = t[i];
                            var r = (g = g || {})[n.name];
                            r || (r = {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            },
                            g[n.name] = r),
                            r.forages.push(s),
                            s._initReady || (s._initReady = s.ready,
                            s.ready = u);
                            for (var o = [], a = 0; a < r.forages.length; a++) {
                                var h = r.forages[a];
                                h !== s && o.push(h._initReady().catch(e))
                            }
                            var c = r.forages.slice(0);
                            return Promise.all(o).then(function() {
                                return n.db = r.db,
                                p(n, !1)
                            }).then(function(t) {
                                return n.db = t,
                                function(t, e) {
                                    if (!t.db)
                                        return !0;
                                    var i = !t.db.objectStoreNames.contains(t.storeName)
                                      , s = t.version < t.db.version
                                      , n = t.version > t.db.version;
                                    if (s && (t.version !== e && l.console.warn('The database "' + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + "."),
                                    t.version = t.db.version),
                                    n || i)
                                        return !i || (i = t.db.version + 1) > t.version && (t.version = i),
                                        !0;
                                    return !1
                                }(n, s._defaultConfig.version) ? p(n, !0) : t
                            }).then(function(t) {
                                n.db = r.db = t,
                                s._dbInfo = n;
                                for (var e = 0; e < c.length; e++) {
                                    var i = c[e];
                                    i !== s && (i._dbInfo.db = n.db,
                                    i._dbInfo.version = n.version)
                                }
                            })
                        },
                        iterate: function(r, t) {
                            var o = this
                              , e = new Promise(function(n, e) {
                                o.ready().then(function() {
                                    var t = o._dbInfo
                                      , i = t.db.transaction(t.storeName, "readonly").objectStore(t.storeName).openCursor()
                                      , s = 1;
                                    i.onsuccess = function() {
                                        var t, e = i.result;
                                        e ? (c(t = e.value) && (t = a(t)),
                                        void 0 !== (t = r(t, e.key, s++)) ? n(t) : e.continue()) : n()
                                    }
                                    ,
                                    i.onerror = function() {
                                        e(i.error)
                                    }
                                }).catch(e)
                            }
                            );
                            return d(e, t),
                            e
                        },
                        getItem: function(n, t) {
                            var r = this;
                            "string" != typeof n && (l.console.warn(n + " used as a key, but it is not a string."),
                            n = String(n));
                            var e = new Promise(function(i, s) {
                                r.ready().then(function() {
                                    var t = r._dbInfo
                                      , e = t.db.transaction(t.storeName, "readonly").objectStore(t.storeName).get(n);
                                    e.onsuccess = function() {
                                        var t = e.result;
                                        void 0 === t && (t = null),
                                        c(t) && (t = a(t)),
                                        i(t)
                                    }
                                    ,
                                    e.onerror = function() {
                                        s(e.error)
                                    }
                                }).catch(s)
                            }
                            );
                            return d(e, t),
                            e
                        },
                        setItem: function(a, e, t) {
                            var i = this;
                            "string" != typeof a && (l.console.warn(a + " used as a key, but it is not a string."),
                            a = String(a));
                            var s = new Promise(function(n, r) {
                                var o;
                                i.ready().then(function() {
                                    return o = i._dbInfo,
                                    e instanceof Blob ? (t = o.db,
                                    ("boolean" == typeof y ? Promise.resolve(y) : h(t).then(function(t) {
                                        return y = t
                                    })).then(function(t) {
                                        return t ? e : (s = e,
                                        new Promise(function(e, t) {
                                            var i = new FileReader;
                                            i.onerror = t,
                                            i.onloadend = function(t) {
                                                t = btoa(t.target.result || "");
                                                e({
                                                    __local_forage_encoded_blob: !0,
                                                    data: t,
                                                    type: s.type
                                                })
                                            }
                                            ,
                                            i.readAsBinaryString(s)
                                        }
                                        ));
                                        var s
                                    })) : e;
                                    var t
                                }).then(function(t) {
                                    var e = o.db.transaction(o.storeName, "readwrite")
                                      , i = e.objectStore(o.storeName);
                                    null === t && (t = void 0),
                                    e.oncomplete = function() {
                                        void 0 === t && (t = null),
                                        n(t)
                                    }
                                    ,
                                    e.onabort = e.onerror = function() {
                                        var t = s.error || s.transaction.error;
                                        r(t)
                                    }
                                    ;
                                    var s = i.put(t, a)
                                }).catch(r)
                            }
                            );
                            return d(s, t),
                            s
                        },
                        removeItem: function(r, t) {
                            var o = this;
                            "string" != typeof r && (l.console.warn(r + " used as a key, but it is not a string."),
                            r = String(r));
                            var e = new Promise(function(s, n) {
                                o.ready().then(function() {
                                    var t = o._dbInfo
                                      , e = t.db.transaction(t.storeName, "readwrite")
                                      , i = e.objectStore(t.storeName).delete(r);
                                    e.oncomplete = function() {
                                        s()
                                    }
                                    ,
                                    e.onerror = function() {
                                        n(i.error)
                                    }
                                    ,
                                    e.onabort = function() {
                                        var t = i.error || i.transaction.error;
                                        n(t)
                                    }
                                }).catch(n)
                            }
                            );
                            return d(e, t),
                            e
                        },
                        clear: function(t) {
                            var r = this
                              , e = new Promise(function(s, n) {
                                r.ready().then(function() {
                                    var t = r._dbInfo
                                      , e = t.db.transaction(t.storeName, "readwrite")
                                      , i = e.objectStore(t.storeName).clear();
                                    e.oncomplete = function() {
                                        s()
                                    }
                                    ,
                                    e.onabort = e.onerror = function() {
                                        var t = i.error || i.transaction.error;
                                        n(t)
                                    }
                                }).catch(n)
                            }
                            );
                            return d(e, t),
                            e
                        },
                        length: function(t) {
                            var n = this
                              , e = new Promise(function(i, s) {
                                n.ready().then(function() {
                                    var t = n._dbInfo
                                      , e = t.db.transaction(t.storeName, "readonly").objectStore(t.storeName).count();
                                    e.onsuccess = function() {
                                        i(e.result)
                                    }
                                    ,
                                    e.onerror = function() {
                                        s(e.error)
                                    }
                                }).catch(s)
                            }
                            );
                            return d(e, t),
                            e
                        },
                        key: function(r, t) {
                            var o = this
                              , e = new Promise(function(s, n) {
                                return r < 0 ? void s(null) : void o.ready().then(function() {
                                    var t = o._dbInfo
                                      , t = t.db.transaction(t.storeName, "readonly").objectStore(t.storeName)
                                      , e = !1
                                      , i = t.openCursor();
                                    i.onsuccess = function() {
                                        var t = i.result;
                                        return t ? void (0 === r || e ? s(t.key) : (e = !0,
                                        t.advance(r))) : void s(null)
                                    }
                                    ,
                                    i.onerror = function() {
                                        n(i.error)
                                    }
                                }).catch(n)
                            }
                            );
                            return d(e, t),
                            e
                        },
                        keys: function(t) {
                            var r = this
                              , e = new Promise(function(s, n) {
                                r.ready().then(function() {
                                    var t = r._dbInfo
                                      , e = t.db.transaction(t.storeName, "readonly").objectStore(t.storeName).openCursor()
                                      , i = [];
                                    e.onsuccess = function() {
                                        var t = e.result;
                                        return t ? (i.push(t.key),
                                        void t.continue()) : void s(i)
                                    }
                                    ,
                                    e.onerror = function() {
                                        n(e.error)
                                    }
                                }).catch(n)
                            }
                            );
                            return d(e, t),
                            e
                        }
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = i,
            t.exports = e.default
        }
        , function(t, e, s) {
            "use strict";
            e.__esModule = !0;
            var i = function(n) {
                function r(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }
                var l = null;
                try {
                    if (!(n.localStorage && "setItem"in n.localStorage))
                        return;
                    l = n.localStorage
                } catch (t) {
                    return
                }
                return {
                    _driver: "localStorageWrapper",
                    _initStorage: function(t) {
                        var e = {};
                        if (t)
                            for (var i in t)
                                e[i] = t[i];
                        return e.keyPrefix = e.name + "/",
                        e.storeName !== this._defaultConfig.storeName && (e.keyPrefix += e.storeName + "/"),
                        this._dbInfo = e,
                        new Promise(function(t, e) {
                            t(s(3))
                        }
                        ).then(function(t) {
                            return e.serializer = t,
                            Promise.resolve()
                        })
                    },
                    iterate: function(h, t) {
                        var c = this
                          , e = c.ready().then(function() {
                            for (var t = c._dbInfo, e = t.keyPrefix, i = e.length, s = l.length, n = 1, r = 0; r < s; r++) {
                                var o = l.key(r);
                                if (0 === o.indexOf(e)) {
                                    var a = (a = l.getItem(o)) && t.serializer.deserialize(a);
                                    if (void 0 !== (a = h(a, o.substring(i), n++)))
                                        return a
                                }
                            }
                        });
                        return r(e, t),
                        e
                    },
                    getItem: function(i, t) {
                        var s = this;
                        "string" != typeof i && (n.console.warn(i + " used as a key, but it is not a string."),
                        i = String(i));
                        var e = s.ready().then(function() {
                            var t = s._dbInfo
                              , e = l.getItem(t.keyPrefix + i);
                            return e = e && t.serializer.deserialize(e)
                        });
                        return r(e, t),
                        e
                    },
                    setItem: function(o, t, e) {
                        var a = this;
                        "string" != typeof o && (n.console.warn(o + " used as a key, but it is not a string."),
                        o = String(o));
                        var i = a.ready().then(function() {
                            void 0 === t && (t = null);
                            var r = t;
                            return new Promise(function(i, s) {
                                var n = a._dbInfo;
                                n.serializer.serialize(t, function(t, e) {
                                    if (e)
                                        s(e);
                                    else
                                        try {
                                            l.setItem(n.keyPrefix + o, t),
                                            i(r)
                                        } catch (t) {
                                            "QuotaExceededError" !== t.name && "NS_ERROR_DOM_QUOTA_REACHED" !== t.name || s(t),
                                            s(t)
                                        }
                                })
                            }
                            )
                        });
                        return r(i, e),
                        i
                    },
                    removeItem: function(e, t) {
                        var i = this;
                        "string" != typeof e && (n.console.warn(e + " used as a key, but it is not a string."),
                        e = String(e));
                        var s = i.ready().then(function() {
                            var t = i._dbInfo;
                            l.removeItem(t.keyPrefix + e)
                        });
                        return r(s, t),
                        s
                    },
                    clear: function(t) {
                        var s = this
                          , e = s.ready().then(function() {
                            for (var t = s._dbInfo.keyPrefix, e = l.length - 1; 0 <= e; e--) {
                                var i = l.key(e);
                                0 === i.indexOf(t) && l.removeItem(i)
                            }
                        });
                        return r(e, t),
                        e
                    },
                    length: function(t) {
                        var e = this.keys().then(function(t) {
                            return t.length
                        });
                        return r(e, t),
                        e
                    },
                    key: function(i, t) {
                        var s = this
                          , e = s.ready().then(function() {
                            var e, t = s._dbInfo;
                            try {
                                e = l.key(i)
                            } catch (t) {
                                e = null
                            }
                            return e = e && e.substring(t.keyPrefix.length)
                        });
                        return r(e, t),
                        e
                    },
                    keys: function(t) {
                        var n = this
                          , e = n.ready().then(function() {
                            for (var t = n._dbInfo, e = l.length, i = [], s = 0; s < e; s++)
                                0 === l.key(s).indexOf(t.keyPrefix) && i.push(l.key(s).substring(t.keyPrefix.length));
                            return i
                        });
                        return r(e, t),
                        e
                    }
                }
            }("undefined" != typeof window ? window : self);
            e.default = i,
            t.exports = e.default
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0;
            var r, l, o, a, h, c, i = (r = "undefined" != typeof window ? window : self,
            l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = /^~~local_forage_type~([^~]+)~/,
            c = (h = (a = "__lfsc__:").length) + "arbf".length,
            {
                serialize: function(e, i) {
                    var t = "";
                    if (e && (t = e.toString()),
                    e && ("[object ArrayBuffer]" === e.toString() || e.buffer && "[object ArrayBuffer]" === e.buffer.toString())) {
                        var s, n = a;
                        e instanceof ArrayBuffer ? (s = e,
                        n += "arbf") : (s = e.buffer,
                        "[object Int8Array]" === t ? n += "si08" : "[object Uint8Array]" === t ? n += "ui08" : "[object Uint8ClampedArray]" === t ? n += "uic8" : "[object Int16Array]" === t ? n += "si16" : "[object Uint16Array]" === t ? n += "ur16" : "[object Int32Array]" === t ? n += "si32" : "[object Uint32Array]" === t ? n += "ui32" : "[object Float32Array]" === t ? n += "fl32" : "[object Float64Array]" === t ? n += "fl64" : i(new Error("Failed to get type for BinaryArray"))),
                        i(n + p(s))
                    } else if ("[object Blob]" === t) {
                        t = new FileReader;
                        t.onload = function() {
                            var t = "~~local_forage_type~" + e.type + "~" + p(this.result);
                            i(a + "blob" + t)
                        }
                        ,
                        t.readAsArrayBuffer(e)
                    } else
                        try {
                            i(JSON.stringify(e))
                        } catch (t) {
                            console.error("Couldn't convert value into a JSON string: ", e),
                            i(null, t)
                        }
                },
                deserialize: function(t) {
                    if (t.substring(0, h) !== a)
                        return JSON.parse(t);
                    var e, i = t.substring(c), s = t.substring(h, c);
                    "blob" === s && o.test(i) && (e = (t = i.match(o))[1],
                    i = i.substring(t[0].length));
                    var n = u(i);
                    switch (s) {
                    case "arbf":
                        return n;
                    case "blob":
                        return function(e, i) {
                            e = e || [],
                            i = i || {};
                            try {
                                return new Blob(e,i)
                            } catch (t) {
                                if ("TypeError" !== t.name)
                                    throw t;
                                for (var s = new (r.BlobBuilder || r.MSBlobBuilder || r.MozBlobBuilder || r.WebKitBlobBuilder), n = 0; n < e.length; n += 1)
                                    s.append(e[n]);
                                return s.getBlob(i.type)
                            }
                        }([n], {
                            type: e
                        });
                    case "si08":
                        return new Int8Array(n);
                    case "ui08":
                        return new Uint8Array(n);
                    case "uic8":
                        return new Uint8ClampedArray(n);
                    case "si16":
                        return new Int16Array(n);
                    case "ur16":
                        return new Uint16Array(n);
                    case "si32":
                        return new Int32Array(n);
                    case "ui32":
                        return new Uint32Array(n);
                    case "fl32":
                        return new Float32Array(n);
                    case "fl64":
                        return new Float64Array(n);
                    default:
                        throw new Error("Unkown type: " + s)
                    }
                },
                stringToBuffer: u,
                bufferToString: p
            });
            function u(t) {
                var e, i, s, n, r = .75 * t.length, o = t.length, a = 0;
                "=" === t[t.length - 1] && (r--,
                "=" === t[t.length - 2] && r--);
                for (var r = new ArrayBuffer(r), h = new Uint8Array(r), c = 0; c < o; c += 4)
                    e = l.indexOf(t[c]),
                    i = l.indexOf(t[c + 1]),
                    s = l.indexOf(t[c + 2]),
                    n = l.indexOf(t[c + 3]),
                    h[a++] = e << 2 | i >> 4,
                    h[a++] = (15 & i) << 4 | s >> 2,
                    h[a++] = (3 & s) << 6 | 63 & n;
                return r
            }
            function p(t) {
                for (var e = new Uint8Array(t), i = "", s = 0; s < e.length; s += 3)
                    i += l[e[s] >> 2],
                    i += l[(3 & e[s]) << 4 | e[s + 1] >> 4],
                    i += l[(15 & e[s + 1]) << 2 | e[s + 2] >> 6],
                    i += l[63 & e[s + 2]];
                return e.length % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : e.length % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
                i
            }
            e.default = i,
            t.exports = e.default
        }
        , function(t, e, o) {
            "use strict";
            e.__esModule = !0;
            var i = function(s) {
                function h(t, e) {
                    e && t.then(function(t) {
                        e(null, t)
                    }, function(t) {
                        e(t)
                    })
                }
                var r = s.openDatabase;
                if (r)
                    return {
                        _driver: "webSQLStorage",
                        _initStorage: function(t) {
                            var s = this
                              , n = {
                                db: null
                            };
                            if (t)
                                for (var e in t)
                                    n[e] = "string" != typeof t[e] ? t[e].toString() : t[e];
                            var i = new Promise(function(e, i) {
                                try {
                                    n.db = r(n.name, String(n.version), n.description, n.size)
                                } catch (t) {
                                    return i(t)
                                }
                                n.db.transaction(function(t) {
                                    t.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                        s._dbInfo = n,
                                        e()
                                    }, function(t, e) {
                                        i(e)
                                    })
                                })
                            }
                            );
                            return new Promise(function(t, e) {
                                t(o(3))
                            }
                            ).then(function(t) {
                                return n.serializer = t,
                                i
                            })
                        },
                        iterate: function(c, t) {
                            var e = this
                              , i = new Promise(function(h, i) {
                                e.ready().then(function() {
                                    var a = e._dbInfo;
                                    a.db.transaction(function(t) {
                                        t.executeSql("SELECT * FROM " + a.storeName, [], function(t, e) {
                                            for (var i = e.rows, s = i.length, n = 0; n < s; n++) {
                                                var r = i.item(n)
                                                  , o = (o = r.value) && a.serializer.deserialize(o);
                                                if (void 0 !== (o = c(o, r.key, n + 1)))
                                                    return void h(o)
                                            }
                                            h()
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                }).catch(i)
                            }
                            );
                            return h(i, t),
                            i
                        },
                        getItem: function(e, t) {
                            var r = this;
                            "string" != typeof e && (s.console.warn(e + " used as a key, but it is not a string."),
                            e = String(e));
                            var i = new Promise(function(s, n) {
                                r.ready().then(function() {
                                    var i = r._dbInfo;
                                    i.db.transaction(function(t) {
                                        t.executeSql("SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function(t, e) {
                                            e = (e = e.rows.length ? e.rows.item(0).value : null) && i.serializer.deserialize(e);
                                            s(e)
                                        }, function(t, e) {
                                            n(e)
                                        })
                                    })
                                }).catch(n)
                            }
                            );
                            return h(i, t),
                            i
                        },
                        setItem: function(o, t, e) {
                            var a = this;
                            "string" != typeof o && (s.console.warn(o + " used as a key, but it is not a string."),
                            o = String(o));
                            var i = new Promise(function(n, r) {
                                a.ready().then(function() {
                                    void 0 === t && (t = null);
                                    var i = t
                                      , s = a._dbInfo;
                                    s.serializer.serialize(t, function(e, t) {
                                        t ? r(t) : s.db.transaction(function(t) {
                                            t.executeSql("INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [o, e], function() {
                                                n(i)
                                            }, function(t, e) {
                                                r(e)
                                            })
                                        }, function(t) {
                                            t.code === t.QUOTA_ERR && r(t)
                                        })
                                    })
                                }).catch(r)
                            }
                            );
                            return h(i, e),
                            i
                        },
                        removeItem: function(n, t) {
                            var r = this;
                            "string" != typeof n && (s.console.warn(n + " used as a key, but it is not a string."),
                            n = String(n));
                            var e = new Promise(function(i, s) {
                                r.ready().then(function() {
                                    var e = r._dbInfo;
                                    e.db.transaction(function(t) {
                                        t.executeSql("DELETE FROM " + e.storeName + " WHERE key = ?", [n], function() {
                                            i()
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    })
                                }).catch(s)
                            }
                            );
                            return h(e, t),
                            e
                        },
                        clear: function(t) {
                            var n = this
                              , e = new Promise(function(i, s) {
                                n.ready().then(function() {
                                    var e = n._dbInfo;
                                    e.db.transaction(function(t) {
                                        t.executeSql("DELETE FROM " + e.storeName, [], function() {
                                            i()
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    })
                                }).catch(s)
                            }
                            );
                            return h(e, t),
                            e
                        },
                        length: function(t) {
                            var n = this
                              , e = new Promise(function(i, s) {
                                n.ready().then(function() {
                                    var e = n._dbInfo;
                                    e.db.transaction(function(t) {
                                        t.executeSql("SELECT COUNT(key) as c FROM " + e.storeName, [], function(t, e) {
                                            e = e.rows.item(0).c;
                                            i(e)
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    })
                                }).catch(s)
                            }
                            );
                            return h(e, t),
                            e
                        },
                        key: function(n, t) {
                            var r = this
                              , e = new Promise(function(i, s) {
                                r.ready().then(function() {
                                    var e = r._dbInfo;
                                    e.db.transaction(function(t) {
                                        t.executeSql("SELECT key FROM " + e.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t, e) {
                                            e = e.rows.length ? e.rows.item(0).key : null;
                                            i(e)
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    })
                                }).catch(s)
                            }
                            );
                            return h(e, t),
                            e
                        },
                        keys: function(t) {
                            var s = this
                              , e = new Promise(function(n, i) {
                                s.ready().then(function() {
                                    var e = s._dbInfo;
                                    e.db.transaction(function(t) {
                                        t.executeSql("SELECT key FROM " + e.storeName, [], function(t, e) {
                                            for (var i = [], s = 0; s < e.rows.length; s++)
                                                i.push(e.rows.item(s).key);
                                            n(i)
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                }).catch(i)
                            }
                            );
                            return h(e, t),
                            e
                        }
                    }
            }("undefined" != typeof window ? window : self);
            e.default = i,
            t.exports = e.default
        }
        ],
        i.c = n,
        i.p = "",
        i(0);
        function i(t) {
            if (n[t])
                return n[t].exports;
            var e = n[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return s[t].call(e.exports, e, e.exports, i),
            e.loaded = !0,
            e.exports
        }
        var s, n
    })
} catch (e) {
    localForageInitFailed = !0
}
cr.plugins_.LocalStorage = function(t) {
    this.runtime = t
}
,
function() {
    var n = ""
      , r = ""
      , o = []
      , a = "";
    function h(t) {
        return t ? "string" == typeof t ? t : "string" == typeof t.message ? t.message : "string" == typeof t.name ? t.name : "string" == typeof t.data ? t.data : "unknown error" : "unknown error"
    }
    function c(t, e) {
        a = e,
        t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t)
    }
    var l = ""
      , t = void 0 !== window.is_scirra_arcade;
    function u(t) {
        return !l || t.substr(0, l.length) === l
    }
    t && (l = "sa" + window.scirra_arcade_id + "_");
    var e = cr.plugins_.LocalStorage.prototype;
    e.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    e.Type.prototype.onCreate = function() {}
    ,
    e.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var i = e.Instance.prototype;
    function s() {}
    function p() {}
    function d() {}
    i.onCreate = function() {
        this.pendingSets = 0,
        this.pendingGets = 0
    }
    ,
    i.onDestroy = function() {}
    ,
    i.saveToJSON = function() {
        return {}
    }
    ,
    i.loadFromJSON = function(t) {}
    ,
    s.prototype.OnItemSet = function(t) {
        return n === t
    }
    ,
    s.prototype.OnAnyItemSet = function() {
        return !0
    }
    ,
    s.prototype.OnItemGet = function(t) {
        return n === t
    }
    ,
    s.prototype.OnAnyItemGet = function() {
        return !0
    }
    ,
    s.prototype.OnItemRemoved = function(t) {
        return n === t
    }
    ,
    s.prototype.OnAnyItemRemoved = function() {
        return !0
    }
    ,
    s.prototype.OnCleared = function() {
        return !0
    }
    ,
    s.prototype.OnAllKeyNamesLoaded = function() {
        return !0
    }
    ,
    s.prototype.OnError = function() {
        return !0
    }
    ,
    s.prototype.OnItemExists = function(t) {
        return n === t
    }
    ,
    s.prototype.OnItemMissing = function(t) {
        return n === t
    }
    ,
    s.prototype.CompareKey = function(t, e) {
        return cr.do_cmp(n, t, e)
    }
    ,
    s.prototype.CompareValue = function(t, e) {
        return cr.do_cmp(r, t, e)
    }
    ,
    s.prototype.IsProcessingSets = function() {
        return 0 < this.pendingSets
    }
    ,
    s.prototype.IsProcessingGets = function() {
        return 0 < this.pendingGets
    }
    ,
    s.prototype.OnAllSetsComplete = function() {
        return !0
    }
    ,
    s.prototype.OnAllGetsComplete = function() {
        return !0
    }
    ,
    e.cnds = new s,
    p.prototype.SetItem = function(i, t) {
        var e, s;
        localForageInitFailed ? c(this, "storage failed to initialise - may be disabled in browser settings") : (e = l + i,
        this.pendingSets++,
        s = this,
        localforage.setItem(e, t, function(t, e) {
            s.pendingSets--,
            t ? (a = h(t),
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, s)) : (n = i,
            r = e,
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemSet, s),
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemSet, s),
            r = n = ""),
            0 === s.pendingSets && s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllSetsComplete, s)
        }))
    }
    ,
    p.prototype.GetItem = function(i) {
        var t, s;
        localForageInitFailed ? c(this, "storage failed to initialise - may be disabled in browser settings") : (t = l + i,
        this.pendingGets++,
        s = this,
        localforage.getItem(t, function(t, e) {
            s.pendingGets--,
            t ? (a = h(t),
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, s)) : (n = i,
            null == (r = e) && (r = ""),
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, s),
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, s),
            r = n = ""),
            0 === s.pendingGets && s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllGetsComplete, s)
        }))
    }
    ,
    p.prototype.CheckItemExists = function(i) {
        var t, s;
        localForageInitFailed ? c(this, "storage failed to initialise - may be disabled in browser settings") : (t = l + i,
        s = this,
        localforage.getItem(t, function(t, e) {
            t ? (a = h(t),
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, s)) : (n = i,
            null === e ? (r = "",
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, s)) : (r = e,
            s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, s)),
            r = n = "")
        }))
    }
    ,
    p.prototype.RemoveItem = function(e) {
        var t, i;
        localForageInitFailed ? c(this, "storage failed to initialise - may be disabled in browser settings") : (t = l + e,
        i = this,
        localforage.removeItem(t, function(t) {
            t ? (a = h(t),
            i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, i)) : (n = e,
            r = "",
            i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemRemoved, i),
            i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemRemoved, i),
            n = "")
        }))
    }
    ,
    p.prototype.ClearStorage = function() {
        var e;
        localForageInitFailed ? c(this, "storage failed to initialise - may be disabled in browser settings") : t || (e = this,
        localforage.clear(function(t) {
            t ? (a = h(t),
            e.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, e)) : (r = n = "",
            cr.clearArray(o),
            e.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnCleared, e))
        }))
    }
    ,
    p.prototype.GetAllKeyNames = function() {
        var r;
        localForageInitFailed ? c(this, "storage failed to initialise - may be disabled in browser settings") : (r = this,
        localforage.keys(function(t, e) {
            var i, s, n;
            if (t)
                a = h(t),
                r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, r);
            else {
                for (cr.clearArray(o),
                i = 0,
                s = e.length; i < s; ++i)
                    u(n = e[i]) && o.push((n = n,
                    l ? u(n) ? n.substr(l.length) : void 0 : n));
                r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllKeyNamesLoaded, r)
            }
        }))
    }
    ,
    e.acts = new p,
    d.prototype.ItemValue = function(t) {
        t.set_any(r)
    }
    ,
    d.prototype.Key = function(t) {
        t.set_string(n)
    }
    ,
    d.prototype.KeyCount = function(t) {
        t.set_int(o.length)
    }
    ,
    d.prototype.KeyAt = function(t, e) {
        (e = Math.floor(e)) < 0 || e >= o.length ? t.set_string("") : t.set_string(o[e])
    }
    ,
    d.prototype.ErrorMessage = function(t) {
        t.set_string(a)
    }
    ,
    e.exps = new d
}(),
cr.plugins_.Mouse = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Mouse.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.buttonMap = new Array(4),
        this.mouseXcanvas = 0,
        this.mouseYcanvas = 0,
        this.triggerButton = 0,
        this.triggerType = 0,
        this.triggerDir = 0,
        this.handled = !1
    }
    ;
    var e = t.Instance.prototype;
    e.onCreate = function() {
        var t, e = this;
        this.runtime.isDomFree || (jQuery(document).mousemove(function(t) {
            e.onMouseMove(t)
        }),
        jQuery(document).mousedown(function(t) {
            e.onMouseDown(t)
        }),
        jQuery(document).mouseup(function(t) {
            e.onMouseUp(t)
        }),
        jQuery(document).dblclick(function(t) {
            e.onDoubleClick(t)
        }),
        t = function(t) {
            e.onWheel(t)
        }
        ,
        document.addEventListener("mousewheel", t, !1),
        document.addEventListener("DOMMouseScroll", t, !1))
    }
    ;
    var i = {
        left: 0,
        top: 0
    };
    function s() {}
    function n() {}
    e.onMouseMove = function(t) {
        var e = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
        this.mouseXcanvas = t.pageX - e.left,
        this.mouseYcanvas = t.pageY - e.top
    }
    ,
    e.mouseInGame = function() {
        return 0 < this.runtime.fullscreen_mode || 0 <= this.mouseXcanvas && 0 <= this.mouseYcanvas && this.mouseXcanvas < this.runtime.width && this.mouseYcanvas < this.runtime.height
    }
    ,
    e.onMouseDown = function(t) {
        this.mouseInGame() && (this.buttonMap[t.which] = !0,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnAnyClick, this),
        this.triggerButton = t.which - 1,
        this.triggerType = 0,
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnClick, this),
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnObjectClicked, this),
        this.runtime.isInUserInputEvent = !1)
    }
    ,
    e.onMouseUp = function(t) {
        this.buttonMap[t.which] && (this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(),
        this.runtime.had_a_click = !0,
        this.buttonMap[t.which] = !1,
        this.runtime.isInUserInputEvent = !0,
        this.triggerButton = t.which - 1,
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnRelease, this),
        this.runtime.isInUserInputEvent = !1)
    }
    ,
    e.onDoubleClick = function(t) {
        this.mouseInGame() && (t.preventDefault(),
        this.runtime.isInUserInputEvent = !0,
        this.triggerButton = t.which - 1,
        this.triggerType = 1,
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnClick, this),
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnObjectClicked, this),
        this.runtime.isInUserInputEvent = !1)
    }
    ,
    e.onWheel = function(t) {
        var e = t.wheelDelta || (t.detail ? -t.detail : 0);
        this.triggerDir = e < 0 ? 0 : 1,
        this.handled = !1,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnWheel, this),
        this.runtime.isInUserInputEvent = !1,
        this.handled && cr.isCanvasInputEvent(t) && t.preventDefault()
    }
    ,
    e.onWindowBlur = function() {
        for (var t = 0, e = this.buttonMap.length; t < e; ++t)
            this.buttonMap[t] && (this.buttonMap[t] = !1,
            this.triggerButton = t - 1,
            this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnRelease, this))
    }
    ,
    s.prototype.OnClick = function(t, e) {
        return t === this.triggerButton && e === this.triggerType
    }
    ,
    s.prototype.OnAnyClick = function() {
        return !0
    }
    ,
    s.prototype.IsButtonDown = function(t) {
        return this.buttonMap[t + 1]
    }
    ,
    s.prototype.OnRelease = function(t) {
        return t === this.triggerButton
    }
    ,
    s.prototype.IsOverObject = function(t) {
        var e = this.runtime.getCurrentCondition()
          , i = this.mouseXcanvas
          , s = this.mouseYcanvas;
        return cr.xor(this.runtime.testAndSelectCanvasPointOverlap(t, i, s, e.inverted), e.inverted)
    }
    ,
    s.prototype.OnObjectClicked = function(t, e, i) {
        return t === this.triggerButton && e === this.triggerType && this.runtime.testAndSelectCanvasPointOverlap(i, this.mouseXcanvas, this.mouseYcanvas, !1)
    }
    ,
    s.prototype.OnWheel = function(t) {
        return this.handled = !0,
        t === this.triggerDir
    }
    ,
    t.cnds = new s;
    var r = null;
    function o() {}
    n.prototype.SetCursor = function(t) {
        this.runtime.isDomFree || r !== (t = ["auto", "pointer", "text", "crosshair", "move", "help", "wait", "none"][t]) && (r = t,
        document.body.style.cursor = t)
    }
    ,
    n.prototype.SetCursorSprite = function(t) {
        this.runtime.isDomFree || this.runtime.isMobile || !t || (t = t.getFirstPicked()) && t.curFrame && (t = t.curFrame,
        r !== t && (t = "url(" + (r = t).getDataUri() + ") " + Math.round(t.hotspotX * t.width) + " " + Math.round(t.hotspotY * t.height) + ", auto",
        document.body.style.cursor = "",
        document.body.style.cursor = t))
    }
    ,
    t.acts = new n,
    o.prototype.X = function(t, e) {
        var i, s, n, r, o;
        cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale,
        n = i.zoomRate,
        r = i.parallaxX,
        o = i.angle,
        i.scale = 1,
        i.zoomRate = 1,
        i.parallaxX = 1,
        i.angle = 0,
        t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !0)),
        i.scale = s,
        i.zoomRate = n,
        i.parallaxX = r,
        i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !0)) : t.set_float(0)
    }
    ,
    o.prototype.Y = function(t, e) {
        var i, s, n, r, o;
        cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale,
        n = i.zoomRate,
        r = i.parallaxY,
        o = i.angle,
        i.scale = 1,
        i.zoomRate = 1,
        i.parallaxY = 1,
        i.angle = 0,
        t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !1)),
        i.scale = s,
        i.zoomRate = n,
        i.parallaxY = r,
        i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !1)) : t.set_float(0)
    }
    ,
    o.prototype.AbsoluteX = function(t) {
        t.set_float(this.mouseXcanvas)
    }
    ,
    o.prototype.AbsoluteY = function(t) {
        t.set_float(this.mouseYcanvas)
    }
    ,
    t.exps = new o
}(),
cr.plugins_.Particles = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Particles.prototype;
    function e(t) {
        this.owner = t,
        this.active = !1,
        this.x = 0,
        this.y = 0,
        this.speed = 0,
        this.angle = 0,
        this.opacity = 1,
        this.grow = 0,
        this.size = 0,
        this.gs = 0,
        this.age = 0,
        cr.seal(this)
    }
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    (i = t.Type.prototype).onCreate = function() {
        this.is_family || (this.texture_img = new Image,
        this.texture_img.crossOrigin = "anonymous",
        this.texture_img.cr_filesize = this.texture_filesize,
        this.webGL_texture = null,
        this.runtime.waitForImageLoad(this.texture_img, this.texture_file))
    }
    ,
    i.onLostWebGLContext = function() {
        this.is_family || (this.webGL_texture = null)
    }
    ,
    i.onRestoreWebGLContext = function() {
        !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
    }
    ,
    i.loadTextures = function() {
        this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
    }
    ,
    i.unloadTextures = function() {
        this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture),
        this.webGL_texture = null)
    }
    ,
    i.preloadCanvas2D = function(t) {
        t.drawImage(this.texture_img, 0, 0)
    }
    ,
    e.prototype.init = function() {
        var t = this.owner;
        this.x = t.x - t.xrandom / 2 + Math.random() * t.xrandom,
        this.y = t.y - t.yrandom / 2 + Math.random() * t.yrandom,
        this.speed = t.initspeed - t.speedrandom / 2 + Math.random() * t.speedrandom,
        this.angle = t.angle - t.spraycone / 2 + Math.random() * t.spraycone,
        this.opacity = t.initopacity,
        this.size = t.initsize - t.sizerandom / 2 + Math.random() * t.sizerandom,
        this.grow = t.growrate - t.growrandom / 2 + Math.random() * t.growrandom,
        this.gs = 0,
        this.age = 0
    }
    ,
    e.prototype.tick = function(t) {
        var e = this.owner;
        this.x += Math.cos(this.angle) * this.speed * t,
        this.y += Math.sin(this.angle) * this.speed * t,
        this.y += this.gs * t,
        this.speed += e.acc * t,
        this.size += this.grow * t,
        this.gs += e.g * t,
        this.age += t,
        this.size < 1 ? this.active = !1 : (0 !== e.lifeanglerandom && (this.angle += Math.random() * e.lifeanglerandom * t - e.lifeanglerandom * t / 2),
        0 !== e.lifespeedrandom && (this.speed += Math.random() * e.lifespeedrandom * t - e.lifespeedrandom * t / 2),
        0 !== e.lifeopacityrandom && (this.opacity += Math.random() * e.lifeopacityrandom * t - e.lifeopacityrandom * t / 2,
        this.opacity < 0 ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)),
        e.destroymode <= 1 && this.age >= e.timeout && (this.active = !1),
        2 === e.destroymode && this.speed <= 0 && (this.active = !1))
    }
    ,
    e.prototype.draw = function(t) {
        var e, i = this.owner.opacity * this.opacity;
        0 !== i && (0 === this.owner.destroymode && (i *= 1 - this.age / this.owner.timeout),
        t.globalAlpha = i,
        e = this.x - this.size / 2,
        i = this.y - this.size / 2,
        this.owner.runtime.pixel_rounding && (e = e + .5 | 0,
        i = i + .5 | 0),
        t.drawImage(this.owner.type.texture_img, e, i, this.size, this.size))
    }
    ,
    e.prototype.drawGL = function(t) {
        var e = this.owner.opacity * this.opacity;
        0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout);
        var i = this.size
          , s = i * this.owner.particlescale
          , n = this.x - i / 2
          , r = this.y - i / 2;
        this.owner.runtime.pixel_rounding && (n = n + .5 | 0,
        r = r + .5 | 0),
        s < 1 || 0 === e || (s < t.minPointSize || s > t.maxPointSize ? (t.setOpacity(e),
        t.quad(n, r, n + i, r, n + i, r + i, n, r + i)) : t.point(this.x, this.y, s, e))
    }
    ,
    e.prototype.left = function() {
        return this.x - this.size / 2
    }
    ,
    e.prototype.right = function() {
        return this.x + this.size / 2
    }
    ,
    e.prototype.top = function() {
        return this.y - this.size / 2
    }
    ,
    e.prototype.bottom = function() {
        return this.y + this.size / 2
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ;
    var i = t.Instance.prototype
      , o = [];
    function s() {}
    function n() {}
    function r() {}
    i.onCreate = function() {
        var t = this.properties;
        if (this.rate = t[0],
        this.spraycone = cr.to_radians(t[1]),
        this.spraytype = t[2],
        this.spraying = !0,
        this.initspeed = t[3],
        this.initsize = t[4],
        this.initopacity = t[5] / 100,
        this.growrate = t[6],
        this.xrandom = t[7],
        this.yrandom = t[8],
        this.speedrandom = t[9],
        this.sizerandom = t[10],
        this.growrandom = t[11],
        this.acc = t[12],
        this.g = t[13],
        this.lifeanglerandom = t[14],
        this.lifespeedrandom = t[15],
        this.lifeopacityrandom = t[16],
        this.destroymode = t[17],
        this.timeout = t[18],
        this.particleCreateCounter = 0,
        this.particlescale = 1,
        this.particleBoxLeft = this.x,
        this.particleBoxTop = this.y,
        this.particleBoxRight = this.x,
        this.particleBoxBottom = this.y,
        this.add_bbox_changed_callback(function(t) {
            t.bbox.set(t.particleBoxLeft, t.particleBoxTop, t.particleBoxRight, t.particleBoxBottom),
            t.bquad.set_from_rect(t.bbox),
            t.bbox_changed = !1,
            t.update_collision_cell(),
            t.update_render_cell()
        }),
        this.recycled || (this.particles = []),
        this.runtime.tickMe(this),
        this.type.loadTextures(),
        1 === this.spraytype)
            for (var e = 0; e < this.rate; e++)
                this.allocateParticle().opacity = 0;
        this.first_tick = !0
    }
    ,
    i.saveToJSON = function() {
        for (var t, e = {
            r: this.rate,
            sc: this.spraycone,
            st: this.spraytype,
            s: this.spraying,
            isp: this.initspeed,
            isz: this.initsize,
            io: this.initopacity,
            gr: this.growrate,
            xr: this.xrandom,
            yr: this.yrandom,
            spr: this.speedrandom,
            szr: this.sizerandom,
            grnd: this.growrandom,
            acc: this.acc,
            g: this.g,
            lar: this.lifeanglerandom,
            lsr: this.lifespeedrandom,
            lor: this.lifeopacityrandom,
            dm: this.destroymode,
            to: this.timeout,
            pcc: this.particleCreateCounter,
            ft: this.first_tick,
            p: []
        }, i = e.p, s = 0, n = this.particles.length; s < n; s++)
            t = this.particles[s],
            i.push([t.x, t.y, t.speed, t.angle, t.opacity, t.grow, t.size, t.gs, t.age]);
        return e
    }
    ,
    i.loadFromJSON = function(t) {
        var e, i;
        this.rate = t.r,
        this.spraycone = t.sc,
        this.spraytype = t.st,
        this.spraying = t.s,
        this.initspeed = t.isp,
        this.initsize = t.isz,
        this.initopacity = t.io,
        this.growrate = t.gr,
        this.xrandom = t.xr,
        this.yrandom = t.yr,
        this.speedrandom = t.spr,
        this.sizerandom = t.szr,
        this.growrandom = t.grnd,
        this.acc = t.acc,
        this.g = t.g,
        this.lifeanglerandom = t.lar,
        this.lifespeedrandom = t.lsr,
        this.lifeopacityrandom = t.lor,
        this.destroymode = t.dm,
        this.timeout = t.to,
        this.particleCreateCounter = t.pcc,
        this.first_tick = t.ft,
        o.push.apply(o, this.particles),
        cr.clearArray(this.particles);
        for (var s = t.p, n = 0, r = s.length; n < r; n++)
            e = this.allocateParticle(),
            i = s[n],
            e.x = i[0],
            e.y = i[1],
            e.speed = i[2],
            e.angle = i[3],
            e.opacity = i[4],
            e.grow = i[5],
            e.size = i[6],
            e.gs = i[7],
            e.age = i[8]
    }
    ,
    i.onDestroy = function() {
        o.push.apply(o, this.particles),
        cr.clearArray(this.particles)
    }
    ,
    i.allocateParticle = function() {
        var t;
        return o.length ? (t = o.pop()).owner = this : t = new e(this),
        this.particles.push(t),
        t.active = !0,
        t
    }
    ,
    i.tick = function() {
        var t, e, i, s, n, r = this.runtime.getDt(this);
        if (0 === this.spraytype && this.spraying)
            for (this.particleCreateCounter += r * this.rate,
            s = cr.floor(this.particleCreateCounter),
            this.particleCreateCounter -= s,
            t = 0; t < s; t++)
                (i = this.allocateParticle()).init();
        for (this.particleBoxLeft = this.x,
        this.particleBoxTop = this.y,
        this.particleBoxRight = this.x,
        this.particleBoxBottom = this.y,
        n = t = 0,
        e = this.particles.length; t < e; t++)
            i = this.particles[t],
            this.particles[n] = i,
            this.runtime.redraw = !0,
            1 === this.spraytype && this.first_tick && i.init(),
            i.tick(r),
            i.active ? (i.left() < this.particleBoxLeft && (this.particleBoxLeft = i.left()),
            i.right() > this.particleBoxRight && (this.particleBoxRight = i.right()),
            i.top() < this.particleBoxTop && (this.particleBoxTop = i.top()),
            i.bottom() > this.particleBoxBottom && (this.particleBoxBottom = i.bottom()),
            n++) : o.push(i);
        cr.truncateArray(this.particles, n),
        this.set_bbox_changed(),
        this.first_tick = !1,
        1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
    }
    ,
    i.draw = function(t) {
        for (var e, i = this.layer, s = 0, n = this.particles.length; s < n; s++)
            (e = this.particles[s]).right() >= i.viewLeft && e.bottom() >= i.viewTop && e.left() <= i.viewRight && e.top() <= i.viewBottom && e.draw(t)
    }
    ,
    i.drawGL = function(t) {
        this.particlescale = this.layer.getScale(),
        t.setTexture(this.type.webGL_texture);
        for (var e, i = this.layer, s = 0, n = this.particles.length; s < n; s++)
            (e = this.particles[s]).right() >= i.viewLeft && e.bottom() >= i.viewTop && e.left() <= i.viewRight && e.top() <= i.viewBottom && e.drawGL(t)
    }
    ,
    s.prototype.IsSpraying = function() {
        return this.spraying
    }
    ,
    t.cnds = new s,
    n.prototype.SetSpraying = function(t) {
        this.spraying = 0 !== t
    }
    ,
    n.prototype.SetEffect = function(t) {
        this.blend_mode = t,
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    n.prototype.SetRate = function(t) {
        var e, i;
        if (this.rate = t,
        1 === this.spraytype && this.first_tick)
            if (t < this.particles.length)
                for (e = this.particles.length - t,
                i = 0; i < e; i++)
                    o.push(this.particles.pop());
            else if (t > this.particles.length)
                for (e = t - this.particles.length,
                i = 0; i < e; i++)
                    this.allocateParticle().opacity = 0
    }
    ,
    n.prototype.SetSprayCone = function(t) {
        this.spraycone = cr.to_radians(t)
    }
    ,
    n.prototype.SetInitSpeed = function(t) {
        this.initspeed = t
    }
    ,
    n.prototype.SetInitSize = function(t) {
        this.initsize = t
    }
    ,
    n.prototype.SetInitOpacity = function(t) {
        this.initopacity = t / 100
    }
    ,
    n.prototype.SetGrowRate = function(t) {
        this.growrate = t
    }
    ,
    n.prototype.SetXRandomiser = function(t) {
        this.xrandom = t
    }
    ,
    n.prototype.SetYRandomiser = function(t) {
        this.yrandom = t
    }
    ,
    n.prototype.SetSpeedRandomiser = function(t) {
        this.speedrandom = t
    }
    ,
    n.prototype.SetSizeRandomiser = function(t) {
        this.sizerandom = t
    }
    ,
    n.prototype.SetGrowRateRandomiser = function(t) {
        this.growrandom = t
    }
    ,
    n.prototype.SetParticleAcc = function(t) {
        this.acc = t
    }
    ,
    n.prototype.SetGravity = function(t) {
        this.g = t
    }
    ,
    n.prototype.SetAngleRandomiser = function(t) {
        this.lifeanglerandom = t
    }
    ,
    n.prototype.SetLifeSpeedRandomiser = function(t) {
        this.lifespeedrandom = t
    }
    ,
    n.prototype.SetOpacityRandomiser = function(t) {
        this.lifeopacityrandom = t
    }
    ,
    n.prototype.SetTimeout = function(t) {
        this.timeout = t
    }
    ,
    t.acts = new n,
    r.prototype.ParticleCount = function(t) {
        t.set_int(this.particles.length)
    }
    ,
    r.prototype.Rate = function(t) {
        t.set_float(this.rate)
    }
    ,
    r.prototype.SprayCone = function(t) {
        t.set_float(cr.to_degrees(this.spraycone))
    }
    ,
    r.prototype.InitSpeed = function(t) {
        t.set_float(this.initspeed)
    }
    ,
    r.prototype.InitSize = function(t) {
        t.set_float(this.initsize)
    }
    ,
    r.prototype.InitOpacity = function(t) {
        t.set_float(100 * this.initopacity)
    }
    ,
    r.prototype.InitGrowRate = function(t) {
        t.set_float(this.growrate)
    }
    ,
    r.prototype.XRandom = function(t) {
        t.set_float(this.xrandom)
    }
    ,
    r.prototype.YRandom = function(t) {
        t.set_float(this.yrandom)
    }
    ,
    r.prototype.InitSpeedRandom = function(t) {
        t.set_float(this.speedrandom)
    }
    ,
    r.prototype.InitSizeRandom = function(t) {
        t.set_float(this.sizerandom)
    }
    ,
    r.prototype.InitGrowRandom = function(t) {
        t.set_float(this.growrandom)
    }
    ,
    r.prototype.ParticleAcceleration = function(t) {
        t.set_float(this.acc)
    }
    ,
    r.prototype.Gravity = function(t) {
        t.set_float(this.g)
    }
    ,
    r.prototype.ParticleAngleRandom = function(t) {
        t.set_float(this.lifeanglerandom)
    }
    ,
    r.prototype.ParticleSpeedRandom = function(t) {
        t.set_float(this.lifespeedrandom)
    }
    ,
    r.prototype.ParticleOpacityRandom = function(t) {
        t.set_float(this.lifeopacityrandom)
    }
    ,
    r.prototype.Timeout = function(t) {
        t.set_float(this.timeout)
    }
    ,
    t.exps = new r
}(),
cr.plugins_.Sprite = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Sprite.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Type.prototype;
    function c() {
        var t, e;
        return 0 === this.datauri.length && ((t = document.createElement("canvas")).width = this.width,
        t.height = this.height,
        e = t.getContext("2d"),
        this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height),
        this.datauri = t.toDataURL("image/png")),
        this.datauri
    }
    e.onCreate = function() {
        var t, e, i, s, n, r, o, a, h;
        if (!this.is_family)
            for (this.all_frames = [],
            this.has_loaded_textures = !1,
            t = 0,
            e = this.animations.length; t < e; t++) {
                for (n = this.animations[t],
                (o = {}).name = n[0],
                o.speed = n[1],
                o.loop = n[2],
                o.repeatcount = n[3],
                o.repeatto = n[4],
                o.pingpong = n[5],
                o.sid = n[6],
                o.frames = [],
                i = 0,
                s = n[7].length; i < s; i++)
                    r = n[7][i],
                    (a = {}).texture_file = r[0],
                    a.texture_filesize = r[1],
                    a.offx = r[2],
                    a.offy = r[3],
                    a.width = r[4],
                    a.height = r[5],
                    a.duration = r[6],
                    a.hotspotX = r[7],
                    a.hotspotY = r[8],
                    a.image_points = r[9],
                    a.poly_pts = r[10],
                    a.pixelformat = r[11],
                    a.spritesheeted = 0 !== a.width,
                    a.datauri = "",
                    a.getDataUri = c,
                    h = {
                        left: 0,
                        top: 0,
                        right: 1,
                        bottom: 1
                    },
                    a.sheetTex = h,
                    a.webGL_texture = null,
                    (h = this.runtime.findWaitingTexture(r[0])) ? a.texture_img = h : (a.texture_img = new Image,
                    a.texture_img.cr_src = r[0],
                    a.texture_img.cr_filesize = r[1],
                    a.texture_img.c2webGL_texture = null,
                    this.runtime.waitForImageLoad(a.texture_img, r[0])),
                    cr.seal(a),
                    o.frames.push(a),
                    this.all_frames.push(a);
                cr.seal(o),
                this.animations[t] = o
            }
    }
    ,
    e.updateAllCurrentTexture = function() {
        for (var t, e = 0, i = this.instances.length; e < i; e++)
            (t = this.instances[e]).curWebGLTexture = t.curFrame.webGL_texture
    }
    ,
    e.onLostWebGLContext = function() {
        if (!this.is_family) {
            for (var t, e = 0, i = this.all_frames.length; e < i; ++e)
                (t = this.all_frames[e]).texture_img.c2webGL_texture = null,
                t.webGL_texture = null;
            this.has_loaded_textures = !1,
            this.updateAllCurrentTexture()
        }
    }
    ,
    e.onRestoreWebGLContext = function() {
        if (!this.is_family && this.instances.length) {
            for (var t, e = 0, i = this.all_frames.length; e < i; ++e)
                (t = this.all_frames[e]).webGL_texture = this.runtime.glwrap.loadTexture(t.texture_img, !1, this.runtime.linearSampling, t.pixelformat);
            this.updateAllCurrentTexture()
        }
    }
    ,
    e.loadTextures = function() {
        if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
            for (var t, e = 0, i = this.all_frames.length; e < i; ++e)
                (t = this.all_frames[e]).webGL_texture = this.runtime.glwrap.loadTexture(t.texture_img, !1, this.runtime.linearSampling, t.pixelformat);
            this.has_loaded_textures = !0
        }
    }
    ,
    e.unloadTextures = function() {
        if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
            for (var t, e = 0, i = this.all_frames.length; e < i; ++e)
                t = this.all_frames[e],
                this.runtime.glwrap.deleteTexture(t.webGL_texture),
                t.webGL_texture = null;
            this.has_loaded_textures = !1
        }
    }
    ;
    var n = [];
    e.preloadCanvas2D = function(t) {
        var e, i, s;
        for (cr.clearArray(n),
        e = 0,
        i = this.all_frames.length; e < i; ++e)
            s = this.all_frames[e].texture_img,
            -1 === n.indexOf(s) && (t.drawImage(s, 0, 0),
            n.push(s))
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime;
        t = this.type.animations[0].frames[0].poly_pts;
        this.recycled ? this.collision_poly.set_pts(t) : this.collision_poly = new cr.CollisionPoly(t)
    }
    ;
    var i = t.Instance.prototype;
    function s() {}
    i.onCreate = function() {
        this.visible = 0 === this.properties[0],
        this.isTicking = !1,
        this.inAnimTrigger = !1,
        this.collisionsEnabled = 0 !== this.properties[3],
        this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0],
        this.cur_frame = this.properties[2],
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
        var t, e, i, s, n, r, o, a, h = this.cur_animation.frames[this.cur_frame];
        for (this.collision_poly.set_pts(h.poly_pts),
        this.hotspotX = h.hotspotX,
        this.hotspotY = h.hotspotY,
        this.cur_anim_speed = this.cur_animation.speed,
        this.cur_anim_repeatto = this.cur_animation.repeatto,
        1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this),
        this.isTicking = !0),
        this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder,
        this.frameStart = this.getNowTime(),
        this.animPlaying = !0,
        this.animRepeats = 0,
        this.animForwards = !0,
        this.animTriggerName = "",
        this.changeAnimName = "",
        this.changeAnimFrom = 0,
        this.changeAnimFrame = -1,
        this.type.loadTextures(),
        t = 0,
        e = this.type.animations.length; t < e; t++)
            for (i = 0,
            s = (n = this.type.animations[t]).frames.length; i < s; i++)
                0 === (r = n.frames[i]).width && (r.width = r.texture_img.width,
                r.height = r.texture_img.height),
                r.spritesheeted && (a = r.texture_img,
                (o = r.sheetTex).left = r.offx / a.width,
                o.top = r.offy / a.height,
                o.right = (r.offx + r.width) / a.width,
                o.bottom = (r.offy + r.height) / a.height,
                0 === r.offx && 0 === r.offy && r.width === a.width && r.height === a.height && (r.spritesheeted = !1));
        this.curFrame = this.cur_animation.frames[this.cur_frame],
        this.curWebGLTexture = this.curFrame.webGL_texture
    }
    ,
    i.saveToJSON = function() {
        var t = {
            a: this.cur_animation.sid,
            f: this.cur_frame,
            cas: this.cur_anim_speed,
            fs: this.frameStart,
            ar: this.animRepeats,
            at: this.animTimer.sum,
            rt: this.cur_anim_repeatto
        };
        return this.animPlaying || (t.ap = this.animPlaying),
        this.animForwards || (t.af = this.animForwards),
        t
    }
    ,
    i.loadFromJSON = function(t) {
        var e = this.getAnimationBySid(t.a);
        e && (this.cur_animation = e),
        this.cur_frame = t.f,
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1),
        this.cur_anim_speed = t.cas,
        this.frameStart = t.fs,
        this.animRepeats = t.ar,
        this.animTimer.reset(),
        this.animTimer.sum = t.at,
        this.animPlaying = !t.hasOwnProperty("ap") || t.ap,
        this.animForwards = !t.hasOwnProperty("af") || t.af,
        t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto,
        this.curFrame = this.cur_animation.frames[this.cur_frame],
        this.curWebGLTexture = this.curFrame.webGL_texture,
        this.collision_poly.set_pts(this.curFrame.poly_pts),
        this.hotspotX = this.curFrame.hotspotX,
        this.hotspotY = this.curFrame.hotspotY
    }
    ,
    i.animationFinish = function(t) {
        this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1,
        this.animPlaying = !1,
        this.animTriggerName = this.cur_animation.name,
        this.inAnimTrigger = !0,
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this),
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this),
        this.inAnimTrigger = !1,
        this.animRepeats = 0
    }
    ,
    i.getNowTime = function() {
        return this.animTimer.sum
    }
    ,
    i.tick = function() {
        this.animTimer.add(this.runtime.getDt(this)),
        this.changeAnimName.length && this.doChangeAnim(),
        0 <= this.changeAnimFrame && this.doChangeAnimFrame();
        var t = this.getNowTime()
          , e = this.cur_animation
          , i = e.frames[this.cur_frame]
          , s = i.duration / this.cur_anim_speed;
        this.animPlaying && t >= this.frameStart + s && (this.animForwards ? this.cur_frame++ : this.cur_frame--,
        this.frameStart += s,
        this.cur_frame >= e.frames.length && (e.pingpong ? (this.animForwards = !1,
        this.cur_frame = e.frames.length - 2) : e.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++,
        this.animRepeats >= e.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)),
        this.cur_frame < 0 && (e.pingpong ? (this.cur_frame = 1,
        this.animForwards = !0,
        e.loop || (this.animRepeats++,
        this.animRepeats >= e.repeatcount && this.animationFinish(!0))) : e.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++,
        this.animRepeats >= e.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)),
        this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= e.frames.length && (this.cur_frame = e.frames.length - 1),
        t > this.frameStart + e.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = t),
        e = e.frames[this.cur_frame],
        this.OnFrameChanged(i, e),
        this.runtime.redraw = !0)
    }
    ,
    i.getAnimationByName = function(t) {
        for (var e, i = 0, s = this.type.animations.length; i < s; i++)
            if (e = this.type.animations[i],
            cr.equals_nocase(e.name, t))
                return e;
        return null
    }
    ,
    i.getAnimationBySid = function(t) {
        for (var e, i = 0, s = this.type.animations.length; i < s; i++)
            if ((e = this.type.animations[i]).sid === t)
                return e;
        return null
    }
    ,
    i.doChangeAnim = function() {
        var t = this.cur_animation.frames[this.cur_frame]
          , e = this.getAnimationByName(this.changeAnimName);
        this.changeAnimName = "",
        e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e,
        this.cur_anim_speed = e.speed,
        this.cur_anim_repeatto = e.repeatto,
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1),
        1 === this.changeAnimFrom && (this.cur_frame = 0),
        this.animPlaying = !0,
        this.frameStart = this.getNowTime(),
        this.animForwards = !0,
        this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]),
        this.runtime.redraw = !0))
    }
    ,
    i.doChangeAnimFrame = function() {
        var t = this.cur_animation.frames[this.cur_frame]
          , e = this.cur_frame;
        this.cur_frame = cr.floor(this.changeAnimFrame),
        this.cur_frame < 0 && (this.cur_frame = 0),
        this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1),
        e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]),
        this.frameStart = this.getNowTime(),
        this.runtime.redraw = !0),
        this.changeAnimFrame = -1
    }
    ,
    i.OnFrameChanged = function(t, e) {
        var i, s, n, r = t.width, o = t.height, a = e.width, h = e.height;
        for (r != a && (this.width *= a / r),
        o != h && (this.height *= h / o),
        this.hotspotX = e.hotspotX,
        this.hotspotY = e.hotspotY,
        this.collision_poly.set_pts(e.poly_pts),
        this.set_bbox_changed(),
        this.curFrame = e,
        this.curWebGLTexture = e.webGL_texture,
        i = 0,
        s = this.behavior_insts.length; i < s; i++)
            (n = this.behavior_insts[i]).onSpriteFrameChanged && n.onSpriteFrameChanged(t, e);
        this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
    }
    ,
    i.draw = function(t) {
        t.globalAlpha = this.opacity;
        var e, i, s = this.curFrame, n = s.spritesheeted, r = s.texture_img, o = this.x, a = this.y, h = this.width, c = this.height;
        0 === this.angle && 0 <= h && 0 <= c ? (o -= this.hotspotX * h,
        a -= this.hotspotY * c,
        this.runtime.pixel_rounding && (o = Math.round(o),
        a = Math.round(a)),
        n ? t.drawImage(r, s.offx, s.offy, s.width, s.height, o, a, h, c) : t.drawImage(r, o, a, h, c)) : (this.runtime.pixel_rounding && (o = Math.round(o),
        a = Math.round(a)),
        t.save(),
        e = 0 < h ? 1 : -1,
        i = 0 < c ? 1 : -1,
        t.translate(o, a),
        1 == e && 1 == i || t.scale(e, i),
        t.rotate(this.angle * e * i),
        e = 0 - this.hotspotX * cr.abs(h),
        i = 0 - this.hotspotY * cr.abs(c),
        n ? t.drawImage(r, s.offx, s.offy, s.width, s.height, e, i, cr.abs(h), cr.abs(c)) : t.drawImage(r, e, i, cr.abs(h), cr.abs(c)),
        t.restore())
    }
    ,
    i.drawGL_earlyZPass = function(t) {
        this.drawGL(t)
    }
    ,
    i.drawGL = function(t) {
        t.setTexture(this.curWebGLTexture),
        t.setOpacity(this.opacity);
        var e, i, s = this.curFrame, n = this.bquad;
        this.runtime.pixel_rounding ? (e = Math.round(this.x) - this.x,
        i = Math.round(this.y) - this.y,
        s.spritesheeted ? t.quadTex(n.tlx + e, n.tly + i, n.trx + e, n.try_ + i, n.brx + e, n.bry + i, n.blx + e, n.bly + i, s.sheetTex) : t.quad(n.tlx + e, n.tly + i, n.trx + e, n.try_ + i, n.brx + e, n.bry + i, n.blx + e, n.bly + i)) : s.spritesheeted ? t.quadTex(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly, s.sheetTex) : t.quad(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly)
    }
    ,
    i.getImagePointIndexByName = function(t) {
        for (var e = this.curFrame, i = 0, s = e.image_points.length; i < s; i++)
            if (cr.equals_nocase(t, e.image_points[i][0]))
                return i;
        return -1
    }
    ,
    i.getImagePoint = function(t, e) {
        var i = this.curFrame
          , s = i.image_points
          , n = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1;
        if ((n = cr.floor(n)) < 0 || n >= s.length)
            return e ? this.x : this.y;
        var r = (s[n][1] - i.hotspotX) * this.width
          , t = ((t = s[n][2]) - i.hotspotY) * this.height
          , s = Math.cos(this.angle)
          , n = Math.sin(this.angle)
          , i = r * s - t * n;
        return t = t * s + r * n,
        r = i,
        r += this.x,
        t += this.y,
        e ? r : t
    }
    ;
    var o = [];
    function v(t) {
        t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        o.push(t)
    }
    function b(t, e) {
        return t < e ? t + "," + e : e + "," + t
    }
    function w(t, e, i, s) {
        var n = e.uid
          , r = i.uid
          , e = b(n, r);
        t.hasOwnProperty(e) ? t[e][2] = s : ((i = o.length ? o.pop() : [0, 0, 0])[0] = n,
        i[1] = r,
        i[2] = s,
        t[e] = i)
    }
    var x = -2
      , S = [];
    s.prototype.OnCollision = function(t) {
        if (!t)
            return !1;
        var e = this.runtime
          , i = e.getCurrentCondition()
          , s = i.type
          , n = null;
        i.extra.collmemory ? n = i.extra.collmemory : (n = {},
        i.extra.collmemory = n),
        i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0,
        e.addDestroyCallback(function(n) {
            !function(t) {
                var e, i, s = n.uid;
                for (e in t)
                    t.hasOwnProperty(e) && ((i = t[e])[0] !== s && i[1] !== s || (v(t[e]),
                    delete t[e]))
            }(i.extra.collmemory)
        }));
        for (var r, o, a, h, c, l, u, p = s.getCurrentSol(), d = t.getCurrentSol(), f = p.getObjects(), y = this.runtime.tickcount, g = y - 1, m = e.getCurrentEventStack().current_event, _ = (m.orblock,
        0); _ < f.length; _++) {
            for (o = f[_],
            d.select_all ? (o.update_bbox(),
            this.runtime.getCollisionCandidates(o.layer, t, o.bbox, S),
            r = S,
            this.runtime.addRegisteredCollisionCandidates(o, t, r)) : r = d.getObjects(),
            a = 0; a < r.length; a++)
                c = r[a],
                e.testOverlap(o, c) || e.checkRegisteredCollision(o, c) ? (l = n,
                u = c,
                u = b(o.uid, u.uid),
                u = !(l.hasOwnProperty(u) ? (x = l[u][2],
                !0) : !(x = -2)) || x < g,
                w(n, o, c, y),
                u && (e.pushCopySol(m.solModifiers),
                u = s.getCurrentSol(),
                h = t.getCurrentSol(),
                u.select_all = !1,
                h.select_all = !1,
                s === t ? (u.instances.length = 2,
                u.instances[0] = o,
                u.instances[1] = c,
                s.applySolToContainer()) : (u.instances.length = 1,
                h.instances.length = 1,
                u.instances[0] = o,
                h.instances[0] = c,
                s.applySolToContainer(),
                t.applySolToContainer()),
                m.retrigger(),
                e.popSol(m.solModifiers))) : (h = n,
                c = c,
                c = b(o.uid, c.uid),
                h.hasOwnProperty(c) && (v(h[c]),
                delete h[c]));
            cr.clearArray(S)
        }
        return !1
    }
    ;
    var y = null
      , g = new cr.ObjectSet
      , m = !1
      , _ = []
      , T = new cr.rect(0,0,0,0);
    function r(t, e, i) {
        if (!t)
            return !1;
        var s, n, r, o, a, h = 0 !== e || 0 !== i, c = !1, l = this.runtime.getCurrentCondition(), u = l.type, p = l.inverted, d = t.getCurrentSol(), l = this.runtime.getCurrentEventStack().current_event.orblock, f = d.select_all ? (this.update_bbox(),
        T.copy(this.bbox),
        T.offset(e, i),
        this.runtime.getCollisionCandidates(this.layer, t, T, _),
        _) : !l || this.runtime.isCurrentConditionFirst() && !d.else_instances.length && d.instances.length ? d.instances : d.else_instances;
        for (m = u !== (y = t) && !p,
        h && (s = this.x,
        n = this.y,
        this.x += e,
        this.y += i,
        this.set_bbox_changed()),
        r = 0,
        o = f.length; r < o; r++)
            if (a = f[r],
            this.runtime.testOverlap(this, a)) {
                if (c = !0,
                p)
                    break;
                u !== t && g.add(a)
            }
        return h && (this.x = s,
        this.y = n,
        this.set_bbox_changed()),
        cr.clearArray(_),
        c
    }
    function a() {}
    function h() {}
    e.finish = function(t) {
        if (m) {
            if (t) {
                var e, t = this.runtime.getCurrentEventStack().current_event.orblock, i = y.getCurrentSol(), s = g.valuesRef();
                if (i.select_all) {
                    for (i.select_all = !1,
                    cr.clearArray(i.instances),
                    r = 0,
                    o = s.length; r < o; ++r)
                        i.instances[r] = s[r];
                    if (t)
                        for (cr.clearArray(i.else_instances),
                        r = 0,
                        o = y.instances.length; r < o; ++r)
                            e = y.instances[r],
                            g.contains(e) || i.else_instances.push(e)
                } else if (t)
                    for (var n = i.instances.length, r = 0, o = s.length; r < o; ++r)
                        i.instances[n + r] = s[r],
                        cr.arrayFindRemove(i.else_instances, s[r]);
                else
                    cr.shallowAssignArray(i.instances, s);
                y.applySolToContainer()
            }
            g.clear(),
            m = !1
        }
    }
    ,
    s.prototype.IsOverlapping = function(t) {
        return r.call(this, t, 0, 0)
    }
    ,
    s.prototype.IsOverlappingOffset = function(t, e, i) {
        return r.call(this, t, e, i)
    }
    ,
    s.prototype.IsAnimPlaying = function(t) {
        return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
    }
    ,
    s.prototype.CompareFrame = function(t, e) {
        return cr.do_cmp(this.cur_frame, t, e)
    }
    ,
    s.prototype.CompareAnimSpeed = function(t, e) {
        var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
        return cr.do_cmp(i, t, e)
    }
    ,
    s.prototype.OnAnimFinished = function(t) {
        return cr.equals_nocase(this.animTriggerName, t)
    }
    ,
    s.prototype.OnAnyAnimFinished = function() {
        return !0
    }
    ,
    s.prototype.OnFrameChanged = function() {
        return !0
    }
    ,
    s.prototype.IsMirrored = function() {
        return this.width < 0
    }
    ,
    s.prototype.IsFlipped = function() {
        return this.height < 0
    }
    ,
    s.prototype.OnURLLoaded = function() {
        return !0
    }
    ,
    s.prototype.IsCollisionEnabled = function() {
        return this.collisionsEnabled
    }
    ,
    t.cnds = new s,
    a.prototype.Spawn = function(t, e, i) {
        if (t && e) {
            var s, n, r, o = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
            if (o) {
                if (void 0 !== o.angle && (o.angle = this.angle,
                o.set_bbox_changed()),
                this.runtime.isInOnDestroy++,
                this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, o),
                o.is_contained)
                    for (s = 0,
                    n = o.siblings.length; s < n; s++)
                        r = o.siblings[s],
                        this.runtime.trigger(Object.getPrototypeOf(r.type.plugin).cnds.OnCreated, r);
                this.runtime.isInOnDestroy--;
                var a, i = this.runtime.getCurrentAction(), h = !1;
                if ((cr.is_undefined(i.extra.Spawn_LastExec) || i.extra.Spawn_LastExec < this.runtime.execcount) && (h = !0,
                i.extra.Spawn_LastExec = this.runtime.execcount),
                t != this.type && ((a = t.getCurrentSol()).select_all = !1,
                h ? (cr.clearArray(a.instances),
                a.instances[0] = o) : a.instances.push(o),
                o.is_contained))
                    for (s = 0,
                    n = o.siblings.length; s < n; s++)
                        (a = (r = o.siblings[s]).type.getCurrentSol()).select_all = !1,
                        h ? (cr.clearArray(a.instances),
                        a.instances[0] = r) : a.instances.push(r)
            }
        }
    }
    ,
    a.prototype.SetEffect = function(t) {
        this.blend_mode = t,
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    a.prototype.StopAnim = function() {
        this.animPlaying = !1
    }
    ,
    a.prototype.StartAnim = function(t) {
        this.animPlaying = !0,
        this.frameStart = this.getNowTime(),
        1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0,
        this.inAnimTrigger || this.doChangeAnimFrame()),
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0)
    }
    ,
    a.prototype.SetAnim = function(t, e) {
        this.changeAnimName = t,
        this.changeAnimFrom = e,
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0),
        this.inAnimTrigger || this.doChangeAnim()
    }
    ,
    a.prototype.SetAnimFrame = function(t) {
        this.changeAnimFrame = t,
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0),
        this.inAnimTrigger || this.doChangeAnimFrame()
    }
    ,
    a.prototype.SetAnimSpeed = function(t) {
        this.cur_anim_speed = cr.abs(t),
        this.animForwards = 0 <= t,
        this.isTicking || (this.runtime.tickMe(this),
        this.isTicking = !0)
    }
    ,
    a.prototype.SetAnimRepeatToFrame = function(t) {
        (t = Math.floor(t)) < 0 && (t = 0),
        t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1),
        this.cur_anim_repeatto = t
    }
    ,
    a.prototype.SetMirrored = function(t) {
        t = cr.abs(this.width) * (0 === t ? -1 : 1);
        this.width !== t && (this.width = t,
        this.set_bbox_changed())
    }
    ,
    a.prototype.SetFlipped = function(t) {
        t = cr.abs(this.height) * (0 === t ? -1 : 1);
        this.height !== t && (this.height = t,
        this.set_bbox_changed())
    }
    ,
    a.prototype.SetScale = function(t) {
        var e = this.curFrame
          , i = this.width < 0 ? -1 : 1
          , s = this.height < 0 ? -1 : 1
          , i = e.width * t * i
          , s = e.height * t * s;
        this.width === i && this.height === s || (this.width = i,
        this.height = s,
        this.set_bbox_changed())
    }
    ,
    a.prototype.LoadURL = function(t, e, i) {
        var s = new Image
          , n = this
          , r = this.curFrame;
        s.onload = function() {
            if (r.texture_img.src === s.src)
                return n.runtime.glwrap && n.curFrame === r && (n.curWebGLTexture = r.webGL_texture),
                0 === e && (n.width = s.width,
                n.height = s.height,
                n.set_bbox_changed()),
                n.runtime.redraw = !0,
                void n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n);
            r.texture_img = s,
            r.offx = 0,
            r.offy = 0,
            r.width = s.width,
            r.height = s.height,
            r.spritesheeted = !1,
            r.datauri = "",
            r.pixelformat = 0,
            n.runtime.glwrap && (r.webGL_texture && n.runtime.glwrap.deleteTexture(r.webGL_texture),
            r.webGL_texture = n.runtime.glwrap.loadTexture(s, !1, n.runtime.linearSampling),
            n.curFrame === r && (n.curWebGLTexture = r.webGL_texture),
            n.type.updateAllCurrentTexture()),
            0 === e && (n.width = s.width,
            n.height = s.height,
            n.set_bbox_changed()),
            n.runtime.redraw = !0,
            n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n)
        }
        ,
        "data:" !== t.substr(0, 5) && 0 === i && (s.crossOrigin = "anonymous"),
        this.runtime.setImageSrc(s, t)
    }
    ,
    a.prototype.SetCollisions = function(t) {
        this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t,
        this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null),
        this.collcells.set(0, 0, -1, -1)))
    }
    ,
    t.acts = new a,
    h.prototype.AnimationFrame = function(t) {
        t.set_int(this.cur_frame)
    }
    ,
    h.prototype.AnimationFrameCount = function(t) {
        t.set_int(this.cur_animation.frames.length)
    }
    ,
    h.prototype.AnimationName = function(t) {
        t.set_string(this.cur_animation.name)
    }
    ,
    h.prototype.AnimationSpeed = function(t) {
        t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
    }
    ,
    h.prototype.ImagePointX = function(t, e) {
        t.set_float(this.getImagePoint(e, !0))
    }
    ,
    h.prototype.ImagePointY = function(t, e) {
        t.set_float(this.getImagePoint(e, !1))
    }
    ,
    h.prototype.ImagePointCount = function(t) {
        t.set_int(this.curFrame.image_points.length)
    }
    ,
    h.prototype.ImageWidth = function(t) {
        t.set_float(this.curFrame.width)
    }
    ,
    h.prototype.ImageHeight = function(t) {
        t.set_float(this.curFrame.height)
    }
    ,
    t.exps = new h
}();
var jText = "";
cr.plugins_.SpriteFontPlus = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.SpriteFontPlus.prototype;
    t.onCreate = function() {}
    ,
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Type.prototype;
    function p(t) {
        return t.replace(/\s\s*$/, "")
    }
    e.onCreate = function() {
        this.is_family || (this.texture_img = new Image,
        this.texture_img.crossOrigin = "anonymous",
        this.texture_img.idtkLoadDisposed = !0,
        this.texture_img.src = this.texture_file,
        this.runtime.wait_for_textures.push(this.texture_img),
        this.webGL_texture = null)
    }
    ,
    e.onLostWebGLContext = function() {
        this.is_family || (this.webGL_texture = null)
    }
    ,
    e.onRestoreWebGLContext = function() {
        var t, e;
        if (!this.is_family && this.instances.length)
            for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat)),
            t = 0,
            e = this.instances.length; t < e; t++)
                this.instances[t].webGL_texture = this.webGL_texture
    }
    ,
    e.unloadTextures = function() {
        this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture),
        this.webGL_texture = null)
    }
    ,
    e.preloadCanvas2D = function(t) {
        t.drawImage(this.texture_img, 0, 0)
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ,
    (e = t.Instance.prototype).onDestroy = function() {
        var t;
        h(this.lines),
        t = this.clipList,
        s(b, t, !1),
        t = this.clipUV,
        s(w, t, !1),
        cr.wipe(this.characterWidthList)
    }
    ,
    e.onCreate = function() {
        this.texture_img = this.type.texture_img,
        this.characterWidth = this.properties[0],
        this.characterHeight = this.properties[1],
        this.characterSet = this.properties[2],
        this.text = this.properties[3],
        this.characterScale = this.properties[4],
        this.visible = 0 === this.properties[5],
        this.halign = this.properties[6] / 2,
        this.valign = this.properties[7] / 2,
        this.wrapbyword = 0 === this.properties[9],
        this.characterSpacing = this.properties[10],
        this.lineHeight = this.properties[11],
        this.textWidth = 0,
        this.textHeight = 0,
        this.charWidthJSON = this.properties[12],
        this.spaceWidth = this.properties[13],
        console.log(this.charWidthJSON),
        jText = this.charWidthJSON,
        this.recycled ? (this.lines.length = 0,
        cr.wipe(this.clipList),
        cr.wipe(this.clipUV),
        cr.wipe(this.characterWidthList)) : (this.lines = [],
        this.clipList = {},
        this.clipUV = {},
        this.characterWidthList = {});
        try {
            if (this.charWidthJSON)
                if (-1 !== this.charWidthJSON.indexOf('""c2array""'))
                    for (var t = (r = jQuery.parseJSON(this.charWidthJSON.replace(/""/g, '"'))).size[1], e = 0; e < t; e++)
                        for (var i = r.data[1][e][0], s = r.data[0][e][0], n = 0; n < i.length; n++)
                            this.characterWidthList[i.charAt(n)] = s;
                else
                    for (var r, t = (r = jQuery.parseJSON(this.charWidthJSON)).length, e = 0; e < t; e++)
                        for (i = r[e][1],
                        s = r[e][0],
                        n = 0; n < i.length; n++)
                            this.characterWidthList[i.charAt(n)] = s;
            -1 !== this.spaceWidth && (this.characterWidthList[" "] = this.spaceWidth)
        } catch (t) {
            window.console && window.console.log && window.console.log("SpriteFont+ Failure: " + t)
        }
        this.text_changed = !0,
        this.lastwrapwidth = this.width,
        this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)),
        this.webGL_texture = this.type.webGL_texture),
        this.SplitSheet()
    }
    ,
    e.saveToJSON = function() {
        var t, e = {
            t: this.text,
            csc: this.characterScale,
            csp: this.characterSpacing,
            lh: this.lineHeight,
            tw: this.textWidth,
            th: this.textHeight,
            lrt: this.last_render_tick,
            cw: {}
        };
        for (t in this.characterWidthList)
            e.cw[t] = this.characterWidthList[t];
        return e
    }
    ,
    e.loadFromJSON = function(t) {
        for (var e in this.text = t.t,
        this.characterScale = t.csc,
        this.characterSpacing = t.csp,
        this.lineHeight = t.lh,
        this.textWidth = t.tw,
        this.textHeight = t.th,
        this.last_render_tick = t.lrt,
        t.cw)
            this.characterWidthList[e] = t.cw[e];
        this.text_changed = !0,
        this.lastwrapwidth = this.width
    }
    ;
    var i = 1e3;
    function v(t, e) {
        return t.length ? t.pop() : new e
    }
    function d(t, e) {
        t.length < i && t.push(e)
    }
    function s(t, e, i) {
        if (i) {
            for (var s = 0, n = e.length; s < n; s++)
                d(t, e[s]);
            e.length = 0
        } else
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (d(t, e[r]),
                delete e[r])
    }
    function f(t, e, i) {
        var s = t.lines;
        i = p(i),
        e >= s.length && s.push(a()),
        (e = s[e]).text = i,
        e.width = t.measureWidth(i),
        t.textWidth = cr.max(t.textWidth, e.width)
    }
    var y = [];
    function a() {
        return v(y, Object)
    }
    function h(t) {
        s(y, t, !0)
    }
    var b = []
      , w = [];
    e.SplitSheet = function() {
        for (var t, e, i, s, n, r, o = this.texture_img, a = o.width, o = o.height, h = this.characterWidth, c = this.characterHeight, l = h / a, u = c / o, p = this.characterSet, d = Math.floor(a / h), f = Math.floor(o / c), y = 0; y < p.length && !(d * f <= y); y++) {
            var g = y % d
              , m = Math.floor(y / d)
              , _ = p.charAt(y);
            this.runtime.glwrap ? (t = this.clipUV,
            i = g * l,
            s = m * u,
            n = (1 + g) * l,
            r = (m + 1) * u,
            void 0 === t[e = _] && (t[e] = v(w, cr.rect)),
            t[e].left = i,
            t[e].top = s,
            t[e].right = n,
            t[e].bottom = r) : (t = this.clipList,
            e = g * h,
            r = m * c,
            g = h,
            m = c,
            void 0 === t[_ = _] && (t[_] = v(b, Object)),
            t[_].x = e,
            t[_].y = r,
            t[_].w = g,
            t[_].h = m)
        }
    }
    ;
    var g = [];
    t.TokeniseWords = function(t) {
        for (var e, i = "", s = g.length = 0; s < t.length; )
            if ("\n" === (e = t.charAt(s)))
                i.length && (g.push(i),
                i = ""),
                g.push("\n"),
                ++s;
            else if (" " === e || "\t" === e || "-" === e) {
                for (; i += t.charAt(s),
                s++,
                s < t.length && (" " === t.charAt(s) || "\t" === t.charAt(s)); )
                    ;
                g.push(i),
                i = ""
            } else
                s < t.length && (i += e,
                s++);
        i.length && g.push(i)
    }
    ,
    t.WordWrap = function(t) {
        var e = t.text
          , i = t.lines;
        if (e && e.length) {
            var s = t.width;
            if (s <= 2)
                h(i);
            else {
                var n = t.characterWidth
                  , r = t.characterScale
                  , o = t.characterSpacing;
                if (e.length * (n * r + o) - o <= s && -1 === e.indexOf("\n")) {
                    o = t.measureWidth(e);
                    if (o <= s)
                        return h(i),
                        i.push(a()),
                        i[0].text = e,
                        i[0].width = o,
                        t.textWidth = o,
                        void (t.textHeight = t.characterHeight * r + t.lineHeight)
                }
                t.wrapbyword;
                this.WrapText(t),
                t.textHeight = i.length * (t.characterHeight * r + t.lineHeight)
            }
        } else
            h(i)
    }
    ,
    t.WrapText = function(t) {
        for (var e, i, s = t.wrapbyword, n = t.text, r = t.lines, o = t.width, a = s ? (this.TokeniseWords(n),
        g) : n, h = "", c = 0, l = !1, u = 0; u < a.length; u++)
            "\n" !== a[u] ? (l = !1,
            e = h,
            h += a[u],
            o < t.measureWidth(p(h)) && ("" === e ? (f(t, c, h),
            l = !(h = "")) : (f(t, c, e),
            h = a[u]),
            c++,
            s || " " !== h || (h = ""))) : (!0 === l ? l = !1 : (f(t, c, h),
            c++),
            h = "");
        for (p(h).length && (f(t, c, h),
        c++),
        u = c; u < r.length; u++)
            i = r[u],
            d(y, i);
        r.length = c
    }
    ,
    e.measureWidth = function(t) {
        for (var e = this.characterSpacing, i = t.length, s = 0, n = 0; n < i; n++)
            s += this.getCharacterWidth(t.charAt(n)) * this.characterScale + e;
        return s -= 0 < s ? e : 0
    }
    ,
    e.getCharacterWidth = function(t) {
        var e = this.characterWidthList;
        return void 0 !== e[t] ? e[t] : this.characterWidth
    }
    ,
    e.rebuildText = function() {
        !this.text_changed && this.width === this.lastwrapwidth || (this.textWidth = 0,
        this.textHeight = 0,
        this.type.plugin.WordWrap(this),
        this.text_changed = !1,
        this.lastwrapwidth = this.width)
    }
    ,
    e.draw = function(t, e) {
        var i = this.texture_img;
        if ("" !== this.text && null != i && (this.rebuildText(),
        !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
            t.globalAlpha = this.opacity;
            var s = this.x
              , i = this.y;
            this.runtime.pixel_rounding && (s = s + .5 | 0,
            i = i + .5 | 0),
            t.save(),
            t.translate(s, i),
            t.rotate(this.angle);
            for (var n = this.halign, s = this.valign, r = this.characterScale, o = this.characterHeight * r, a = this.lineHeight, h = this.characterSpacing, c = this.lines, i = this.textHeight, s = s * cr.max(0, this.height - i), l = -(this.hotspotX * this.width), i = -(this.hotspotY * this.height), u = i += s, p = 0; p < c.length; p++) {
                var d = c[p].text
                  , f = c[p].width
                  , y = l + n * cr.max(0, this.width - f);
                u += a;
                for (var g = 0; g < d.length; g++) {
                    var m = d.charAt(g)
                      , _ = this.clipList[m];
                    if (y + this.getCharacterWidth(m) * r > this.width + 1e-5)
                        break;
                    void 0 !== _ && t.drawImage(this.texture_img, _.x, _.y, _.w, _.h, Math.round(y), Math.round(u), _.w * r, _.h * r),
                    y += this.getCharacterWidth(m) * r + h
                }
                if ((u += o) + o + a > this.height)
                    break
            }
            t.restore()
        }
    }
    ;
    var I = new cr.quad;
    function n() {}
    function r() {}
    function o() {}
    e.drawGL = function(t) {
        if (t.setTexture(this.webGL_texture),
        t.setOpacity(this.opacity),
        "" !== this.text && (this.rebuildText(),
        !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
            this.update_bbox();
            var e = this.bquad
              , i = 0
              , s = 0;
            this.runtime.pixel_rounding && (i = (this.x + .5 | 0) - this.x,
            s = (this.y + .5 | 0) - this.y);
            var n, r, o = this.angle, a = this.halign, h = this.valign, c = this.characterScale, l = this.characterHeight * c, u = this.lineHeight, p = this.characterSpacing, d = this.lines, f = this.textHeight;
            0 !== o && (n = Math.cos(o),
            r = Math.sin(o));
            for (var f = h * cr.max(0, this.height - f), y = e.tlx + i, g = e.tly + s, m = f, _ = 0; _ < d.length; _++) {
                var v = d[_].text
                  , b = d[_].width
                  , w = a * cr.max(0, this.width - b);
                m += u;
                for (var x = 0; x < v.length; x++) {
                    var S = v.charAt(x)
                      , T = this.clipUV[S];
                    if (w + this.getCharacterWidth(S) * c > this.width + 1e-5)
                        break;
                    void 0 !== T && (O = this.characterWidth * c,
                    A = this.characterHeight * c,
                    I.tlx = w,
                    I.tly = m,
                    I.trx = w + O,
                    I.try_ = m,
                    I.blx = w,
                    I.bly = m + A,
                    I.brx = w + O,
                    I.bry = m + A,
                    0 !== o && (C = n,
                    k = r,
                    O = void 0,
                    O = (A = I).tlx * C - A.tly * k,
                    A.tly = A.tly * C + A.tlx * k,
                    A.tlx = O,
                    O = A.trx * C - A.try_ * k,
                    A.try_ = A.try_ * C + A.trx * k,
                    A.trx = O,
                    O = A.blx * C - A.bly * k,
                    A.bly = A.bly * C + A.blx * k,
                    A.blx = O,
                    O = A.brx * C - A.bry * k,
                    A.bry = A.bry * C + A.brx * k,
                    A.brx = O),
                    I.offset(y, g),
                    t.quadTex(I.tlx, I.tly, I.trx, I.try_, I.brx, I.bry, I.blx, I.bly, T)),
                    w += this.getCharacterWidth(S) * c + p
                }
                if ((m += l) + l + u > this.height)
                    break
            }
        }
        var A, C, k, O
    }
    ,
    n.prototype.CompareText = function(t, e) {
        return e ? this.text == t : cr.equals_nocase(this.text, t)
    }
    ,
    t.cnds = new n,
    r.prototype.SetText = function(t) {
        cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
        t = t.toString();
        this.text !== t && (this.text = t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    r.prototype.AppendText = function(t) {
        cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
        t = t.toString();
        t && (this.text += t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    r.prototype.SetScale = function(t) {
        t !== this.characterScale && (this.characterScale = t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    r.prototype.SetCharacterSpacing = function(t) {
        t !== this.CharacterSpacing && (this.characterSpacing = t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    r.prototype.SetLineHeight = function(t) {
        t !== this.lineHeight && (this.lineHeight = t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    e.SetCharWidth = function(t, e) {
        e = parseInt(e, 10);
        this.characterWidthList[t] !== e && (this.characterWidthList[t] = e,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    r.prototype.SetCharacterWidth = function(t, e) {
        if ("" !== t)
            for (var i = 0; i < t.length; i++)
                this.SetCharWidth(t.charAt(i), e)
    }
    ,
    r.prototype.SetEffect = function(t) {
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    t.acts = new r,
    o.prototype.CharacterWidth = function(t, e) {
        t.set_int(this.getCharacterWidth(e))
    }
    ,
    o.prototype.CharacterHeight = function(t) {
        t.set_int(this.characterHeight)
    }
    ,
    o.prototype.CharacterScale = function(t) {
        t.set_float(this.characterScale)
    }
    ,
    o.prototype.CharacterSpacing = function(t) {
        t.set_int(this.characterSpacing)
    }
    ,
    o.prototype.LineHeight = function(t) {
        t.set_int(this.lineHeight)
    }
    ,
    o.prototype.Text = function(t) {
        t.set_string(this.text)
    }
    ,
    o.prototype.TextWidth = function(t) {
        this.rebuildText(),
        t.set_float(this.textWidth)
    }
    ,
    o.prototype.TextHeight = function(t) {
        this.rebuildText(),
        t.set_float(this.textHeight)
    }
    ,
    t.exps = new o
}(),
cr.plugins_.Text = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Text.prototype;
    t.onCreate = function() {
        t.acts.SetWidth = function(t) {
            this.width !== t && (this.width = t,
            this.text_changed = !0,
            this.set_bbox_changed())
        }
    }
    ,
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    (e = t.Type.prototype).onCreate = function() {}
    ,
    e.onLostWebGLContext = function() {
        if (!this.is_family)
            for (var t, e = 0, i = this.instances.length; e < i; e++)
                (t = this.instances[e]).mycanvas = null,
                t.myctx = null,
                t.mytex = null
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.recycled ? cr.clearArray(this.lines) : this.lines = [],
        this.text_changed = !0
    }
    ;
    var e = t.Instance.prototype
      , o = {};
    e.onCreate = function() {
        this.text = this.properties[0],
        this.visible = 0 === this.properties[1],
        this.font = this.properties[2],
        this.color = this.properties[3],
        this.halign = this.properties[4],
        this.valign = this.properties[5],
        this.wrapbyword = 0 === this.properties[7],
        this.lastwidth = this.width,
        this.lastwrapwidth = this.width,
        this.lastheight = this.height,
        this.line_height_offset = this.properties[8],
        this.facename = "",
        this.fontstyle = "",
        this.ptSize = 0,
        this.textWidth = 0,
        this.textHeight = 0,
        this.parseFont(),
        this.mycanvas = null,
        this.myctx = null,
        this.mytex = null,
        this.need_text_redraw = !1,
        this.last_render_tick = this.runtime.tickcount,
        this.recycled ? this.rcTex.set(0, 0, 1, 1) : this.rcTex = new cr.rect(0,0,1,1),
        this.runtime.glwrap && this.runtime.tickMe(this)
    }
    ,
    e.parseFont = function() {
        for (var t = this.font.split(" "), e = 0; e < t.length; e++)
            if ("pt" === t[e].substr(t[e].length - 2, 2)) {
                for (this.ptSize = parseInt(t[e].substr(0, t[e].length - 2)),
                this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4,
                0 < e && (this.fontstyle = t[e - 1]),
                this.facename = t[e + 1],
                e += 2; e < t.length; e++)
                    this.facename += " " + t[e];
                break
            }
    }
    ,
    e.saveToJSON = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.halign,
            va: this.valign,
            wr: this.wrapbyword,
            lho: this.line_height_offset,
            fn: this.facename,
            fs: this.fontstyle,
            ps: this.ptSize,
            pxh: this.pxHeight,
            tw: this.textWidth,
            th: this.textHeight,
            lrt: this.last_render_tick
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.text = t.t,
        this.font = t.f,
        this.color = t.c,
        this.halign = t.ha,
        this.valign = t.va,
        this.wrapbyword = t.wr,
        this.line_height_offset = t.lho,
        this.facename = t.fn,
        this.fontstyle = t.fs,
        this.ptSize = t.ps,
        this.pxHeight = t.pxh,
        this.textWidth = t.tw,
        this.textHeight = t.th,
        this.last_render_tick = t.lrt,
        this.text_changed = !0,
        this.lastwidth = this.width,
        this.lastwrapwidth = this.width,
        this.lastheight = this.height
    }
    ,
    e.tick = function() {
        var t, e;
        this.runtime.glwrap && this.mytex && 300 <= this.runtime.tickcount - this.last_render_tick && (t = this.layer,
        this.update_bbox(),
        ((e = this.bbox).right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom) && (this.runtime.glwrap.deleteTexture(this.mytex),
        this.mytex = null,
        this.myctx = null,
        this.mycanvas = null))
    }
    ,
    e.onDestroy = function() {
        this.myctx = null,
        this.mycanvas = null,
        this.runtime.glwrap && this.mytex && this.runtime.glwrap.deleteTexture(this.mytex),
        this.mytex = null
    }
    ,
    e.updateFont = function() {
        this.font = this.fontstyle + " " + this.ptSize.toString() + "pt " + this.facename,
        this.text_changed = !0,
        this.runtime.redraw = !0
    }
    ,
    e.draw = function(t, e) {
        t.font = this.font,
        t.textBaseline = "top",
        t.fillStyle = this.color,
        t.globalAlpha = e ? 1 : this.opacity;
        var i;
        e && (i = Math.abs(this.layer.getScale()),
        t.save(),
        t.scale(i, i)),
        !this.text_changed && this.width === this.lastwrapwidth || (this.type.plugin.WordWrap(this.text, this.lines, t, this.width, this.wrapbyword),
        this.text_changed = !1,
        this.lastwrapwidth = this.width),
        this.update_bbox();
        var s = e ? 0 : this.bquad.tlx
          , n = e ? 0 : this.bquad.tly;
        this.runtime.pixel_rounding && (s = s + .5 | 0,
        n = n + .5 | 0),
        0 === this.angle || e || (t.save(),
        t.translate(s, n),
        t.rotate(this.angle),
        n = s = 0);
        var r, o, a = n + this.height, h = this.pxHeight;
        for (h += this.line_height_offset,
        1 === this.valign ? n += Math.max(this.height / 2 - this.lines.length * h / 2, 0) : 2 === this.valign && (n += Math.max(this.height - this.lines.length * h - 2, 0)),
        o = 0; o < this.lines.length && (r = s,
        1 === this.halign ? r = s + (this.width - this.lines[o].width) / 2 : 2 === this.halign && (r = s + (this.width - this.lines[o].width)),
        t.fillText(this.lines[o].text, r, n),
        !(a - h <= (n += h))); o++)
            ;
        0 === this.angle && !e || t.restore(),
        this.last_render_tick = this.runtime.tickcount
    }
    ,
    e.drawGL = function(t) {
        var e, i, s, n, r, o, a, h, c, l, u, p, d, f, y, g, m;
        this.width < 1 || this.height < 1 || (p = this.text_changed || this.need_text_redraw,
        this.need_text_redraw = !1,
        e = this.layer.getScale(),
        i = this.layer.getAngle(),
        s = this.rcTex,
        n = e * this.width,
        r = e * this.height,
        o = Math.ceil(n),
        a = Math.ceil(r),
        d = Math.abs(o),
        f = Math.abs(a),
        y = this.runtime.draw_width / 2,
        g = this.runtime.draw_height / 2,
        this.myctx || (this.mycanvas = document.createElement("canvas"),
        this.mycanvas.width = d,
        this.mycanvas.height = f,
        this.lastwidth = d,
        this.lastheight = f,
        p = !0,
        this.myctx = this.mycanvas.getContext("2d")),
        d === this.lastwidth && f === this.lastheight || (this.mycanvas.width = d,
        this.mycanvas.height = f,
        this.mytex && (t.deleteTexture(this.mytex),
        this.mytex = null),
        p = !0),
        p && (this.myctx.clearRect(0, 0, d, f),
        this.draw(this.myctx, !0),
        this.mytex || (this.mytex = t.createEmptyTexture(d, f, this.runtime.linearSampling, this.runtime.isMobile)),
        t.videoToTexture(this.mycanvas, this.mytex, this.runtime.isMobile)),
        this.lastwidth = d,
        this.lastheight = f,
        t.setTexture(this.mytex),
        t.setOpacity(this.opacity),
        t.resetModelView(),
        t.translate(-y, -g),
        t.updateModelView(),
        m = this.bquad,
        h = this.layer.layerToCanvas(m.tlx, m.tly, !0, !0),
        c = this.layer.layerToCanvas(m.tlx, m.tly, !1, !0),
        l = this.layer.layerToCanvas(m.trx, m.try_, !0, !0),
        u = this.layer.layerToCanvas(m.trx, m.try_, !1, !0),
        p = this.layer.layerToCanvas(m.brx, m.bry, !0, !0),
        d = this.layer.layerToCanvas(m.brx, m.bry, !1, !0),
        f = this.layer.layerToCanvas(m.blx, m.bly, !0, !0),
        y = this.layer.layerToCanvas(m.blx, m.bly, !1, !0),
        (this.runtime.pixel_rounding || 0 === this.angle && 0 === i) && (h += g = (h + .5 | 0) - h,
        c += m = (c + .5 | 0) - c,
        l += g,
        u += m,
        p += g,
        d += m,
        f += g,
        y += m),
        0 === this.angle && 0 === i ? (p = l = h + o,
        f = h,
        y = d = (u = c) + a,
        s.right = 1,
        s.bottom = 1) : (s.right = n / o,
        s.bottom = r / a),
        t.quadTex(h, c, l, u, p, d, f, y, s),
        t.resetModelView(),
        t.scale(e, e),
        t.rotateZ(-this.layer.getAngle()),
        t.translate((this.layer.viewLeft + this.layer.viewRight) / -2, (this.layer.viewTop + this.layer.viewBottom) / -2),
        t.updateModelView(),
        this.last_render_tick = this.runtime.tickcount)
    }
    ;
    var u = [];
    t.TokeniseWords = function(t) {
        cr.clearArray(u);
        for (var e, i = "", s = 0; s < t.length; )
            if ("\n" === (e = t.charAt(s)))
                i.length && (u.push(i),
                i = ""),
                u.push("\n"),
                ++s;
            else if (" " === e || "\t" === e || "-" === e) {
                for (; i += t.charAt(s),
                s++,
                s < t.length && (" " === t.charAt(s) || "\t" === t.charAt(s)); )
                    ;
                u.push(i),
                i = ""
            } else
                s < t.length && (i += e,
                s++);
        i.length && u.push(i)
    }
    ;
    var i = [];
    function p() {
        return i.length ? i.pop() : {}
    }
    function d(t) {
        i.push(t)
    }
    function a(t) {
        for (var e = 0, i = t.length; e < i; e++)
            d(t[e]);
        cr.clearArray(t)
    }
    function f(t) {
        return t.length && " " === t.charAt(t.length - 1) ? t.substring(0, t.length - 1) : t
    }
    function s() {}
    function n() {}
    function r() {}
    t.WordWrap = function(t, e, i, s, n) {
        if (t && t.length)
            if (s <= 2)
                a(e);
            else {
                if (t.length <= 100 && -1 === t.indexOf("\n")) {
                    var r = i.measureText(t).width;
                    if (r <= s)
                        return a(e),
                        e.push(p()),
                        e[0].text = t,
                        void (e[0].width = r)
                }
                this.WrapText(t, e, i, s, n)
            }
        else
            a(e)
    }
    ,
    t.WrapText = function(t, e, i, s, n) {
        for (var r, o, a = n ? (this.TokeniseWords(t),
        u) : t, h = "", c = 0, l = 0; l < a.length; l++)
            "\n" !== a[l] ? (r = h,
            h += a[l],
            s <= i.measureText(h).width && (c >= e.length && e.push(p()),
            r = f(r),
            (o = e[c]).text = r,
            o.width = i.measureText(r).width,
            c++,
            h = a[l],
            n || " " !== h || (h = ""))) : (c >= e.length && e.push(p()),
            h = f(h),
            (o = e[c]).text = h,
            o.width = i.measureText(h).width,
            c++,
            h = "");
        for (h.length && (c >= e.length && e.push(p()),
        h = f(h),
        (o = e[c]).text = h,
        o.width = i.measureText(h).width,
        c++),
        l = c; l < e.length; l++)
            d(e[l]);
        e.length = c
    }
    ,
    s.prototype.CompareText = function(t, e) {
        return e ? this.text == t : cr.equals_nocase(this.text, t)
    }
    ,
    t.cnds = new s,
    n.prototype.SetText = function(t) {
        cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
        t = t.toString();
        this.text !== t && (this.text = t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    n.prototype.AppendText = function(t) {
        cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
        t = t.toString();
        t && (this.text += t,
        this.text_changed = !0,
        this.runtime.redraw = !0)
    }
    ,
    n.prototype.SetFontFace = function(t, e) {
        var i = "";
        switch (e) {
        case 1:
            i = "bold";
            break;
        case 2:
            i = "italic";
            break;
        case 3:
            i = "bold italic"
        }
        t === this.facename && i === this.fontstyle || (this.facename = t,
        this.fontstyle = i,
        this.updateFont())
    }
    ,
    n.prototype.SetFontSize = function(t) {
        this.ptSize !== t && (this.ptSize = t,
        this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4,
        this.updateFont())
    }
    ,
    n.prototype.SetFontColor = function(t) {
        t = "rgb(" + cr.GetRValue(t).toString() + "," + cr.GetGValue(t).toString() + "," + cr.GetBValue(t).toString() + ")";
        t !== this.color && (this.color = t,
        this.need_text_redraw = !0,
        this.runtime.redraw = !0)
    }
    ,
    n.prototype.SetWebFont = function(t, e) {
        if (this.runtime.isDomFree)
            cr.logexport("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored");
        else {
            function i() {
                s.runtime.redraw = !0,
                s.text_changed = !0
            }
            var s = this;
            if (o.hasOwnProperty(e)) {
                var n = "'" + t + "'";
                if (this.facename !== n) {
                    this.facename = n,
                    this.updateFont();
                    for (var r = 1; r < 10; r++)
                        setTimeout(i, 100 * r),
                        setTimeout(i, 1e3 * r)
                }
            } else {
                n = document.createElement("link");
                n.href = e,
                n.rel = "stylesheet",
                n.type = "text/css",
                n.onload = i,
                document.getElementsByTagName("head")[0].appendChild(n),
                o[e] = !0,
                this.facename = "'" + t + "'",
                this.updateFont();
                for (r = 1; r < 10; r++)
                    setTimeout(i, 100 * r),
                    setTimeout(i, 1e3 * r)
            }
        }
    }
    ,
    n.prototype.SetEffect = function(t) {
        this.blend_mode = t,
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    t.acts = new n,
    r.prototype.Text = function(t) {
        t.set_string(this.text)
    }
    ,
    r.prototype.FaceName = function(t) {
        t.set_string(this.facename)
    }
    ,
    r.prototype.FaceSize = function(t) {
        t.set_int(this.ptSize)
    }
    ,
    r.prototype.TextWidth = function(t) {
        for (var e, i = 0, s = 0, n = this.lines.length; s < n; s++)
            i < (e = this.lines[s].width) && (i = e);
        t.set_int(i)
    }
    ,
    r.prototype.TextHeight = function(t) {
        t.set_int(this.lines.length * (this.pxHeight + this.line_height_offset) - this.line_height_offset)
    }
    ,
    t.exps = new r
}(),
cr.plugins_.TiledBg = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.TiledBg.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ;
    var e = t.Type.prototype;
    function i() {}
    function s() {}
    function n() {}
    e.onCreate = function() {
        this.is_family || (this.texture_img = new Image,
        this.texture_img.crossOrigin = "anonymous",
        this.texture_img.cr_filesize = this.texture_filesize,
        this.runtime.waitForImageLoad(this.texture_img, this.texture_file),
        this.pattern = null,
        this.webGL_texture = null)
    }
    ,
    e.onLostWebGLContext = function() {
        this.is_family || (this.webGL_texture = null)
    }
    ,
    e.onRestoreWebGLContext = function() {
        var t, e;
        if (!this.is_family && this.instances.length)
            for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)),
            t = 0,
            e = this.instances.length; t < e; t++)
                this.instances[t].webGL_texture = this.webGL_texture
    }
    ,
    e.loadTextures = function() {
        this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
    }
    ,
    e.unloadTextures = function() {
        this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture),
        this.webGL_texture = null)
    }
    ,
    e.preloadCanvas2D = function(t) {
        t.drawImage(this.texture_img, 0, 0)
    }
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime
    }
    ,
    (e = t.Instance.prototype).onCreate = function() {
        this.visible = 0 === this.properties[0],
        this.rcTex = new cr.rect(0,0,0,0),
        this.has_own_texture = !1,
        this.texture_img = this.type.texture_img,
        this.runtime.glwrap ? (this.type.loadTextures(),
        this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")),
        this.pattern = this.type.pattern)
    }
    ,
    e.afterLoad = function() {
        this.has_own_texture = !1,
        this.texture_img = this.type.texture_img
    }
    ,
    e.onDestroy = function() {
        this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture),
        this.webGL_texture = null)
    }
    ,
    e.draw = function(t) {
        t.globalAlpha = this.opacity,
        t.save(),
        t.fillStyle = this.pattern;
        var e = this.x
          , i = this.y;
        this.runtime.pixel_rounding && (e = Math.round(e),
        i = Math.round(i));
        var s = -(this.hotspotX * this.width)
          , n = -(this.hotspotY * this.height)
          , r = s % this.texture_img.width
          , o = n % this.texture_img.height;
        r < 0 && (r += this.texture_img.width),
        o < 0 && (o += this.texture_img.height),
        t.translate(e, i),
        t.rotate(this.angle),
        t.translate(r, o),
        t.fillRect(s - r, n - o, this.width, this.height),
        t.restore()
    }
    ,
    e.drawGL_earlyZPass = function(t) {
        this.drawGL(t)
    }
    ,
    e.drawGL = function(t) {
        t.setTexture(this.webGL_texture),
        t.setOpacity(this.opacity);
        var e = this.rcTex;
        e.right = this.width / this.texture_img.width,
        e.bottom = this.height / this.texture_img.height;
        var i, s, n = this.bquad;
        this.runtime.pixel_rounding ? (i = Math.round(this.x) - this.x,
        s = Math.round(this.y) - this.y,
        t.quadTex(n.tlx + i, n.tly + s, n.trx + i, n.try_ + s, n.brx + i, n.bry + s, n.blx + i, n.bly + s, e)) : t.quadTex(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly, e)
    }
    ,
    i.prototype.OnURLLoaded = function() {
        return !0
    }
    ,
    t.cnds = new i,
    s.prototype.SetEffect = function(t) {
        this.blend_mode = t,
        this.compositeOp = cr.effectToCompositeOp(t),
        cr.setGLBlend(this, t, this.runtime.gl),
        this.runtime.redraw = !0
    }
    ,
    s.prototype.LoadURL = function(t, e) {
        var i = new Image
          , s = this;
        i.onload = function() {
            s.texture_img = i,
            s.runtime.glwrap ? (s.has_own_texture && s.webGL_texture && s.runtime.glwrap.deleteTexture(s.webGL_texture),
            s.webGL_texture = s.runtime.glwrap.loadTexture(i, !0, s.runtime.linearSampling)) : s.pattern = s.runtime.ctx.createPattern(i, "repeat"),
            s.has_own_texture = !0,
            s.runtime.redraw = !0,
            s.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, s)
        }
        ,
        "data:" !== t.substr(0, 5) && 0 === e && (i.crossOrigin = "anonymous"),
        this.runtime.setImageSrc(i, t)
    }
    ,
    t.acts = new s,
    n.prototype.ImageWidth = function(t) {
        t.set_float(this.texture_img.width)
    }
    ,
    n.prototype.ImageHeight = function(t) {
        t.set_float(this.texture_img.height)
    }
    ,
    t.exps = new n
}(),
cr.plugins_.Touch = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.Touch.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        this.touches = [],
        this.mouseDown = !1
    }
    ;
    var e = t.Instance.prototype
      , l = {
        left: 0,
        top: 0
    };
    e.findTouch = function(t) {
        for (var e = 0, i = this.touches.length; e < i; e++)
            if (this.touches[e].id === t)
                return e;
        return -1
    }
    ;
    var i = 0
      , s = 0
      , n = 0;
    function a(t) {
        i = t.x,
        s = t.y,
        n = t.z
    }
    var r = [];
    function h(t, e, i, s) {
        var n = r.length ? r.pop() : new c;
        return n.init(t, e, i, s),
        n
    }
    function o(t) {
        r.length < 100 && r.push(t)
    }
    function c() {
        this.starttime = 0,
        this.time = 0,
        this.lasttime = 0,
        this.startx = 0,
        this.starty = 0,
        this.x = 0,
        this.y = 0,
        this.lastx = 0,
        this.lasty = 0,
        this.id = 0,
        this.startindex = 0,
        this.triggeredHold = !1,
        this.tooFarForHold = !1
    }
    c.prototype.init = function(t, e, i, s) {
        var n = cr.performance_now();
        this.time = n,
        this.lasttime = n,
        this.starttime = n,
        this.startx = t,
        this.starty = e,
        this.x = t,
        this.y = e,
        this.lastx = t,
        this.lasty = e,
        this.width = 0,
        this.height = 0,
        this.pressure = 0,
        this.id = i,
        this.startindex = s,
        this.triggeredHold = !1,
        this.tooFarForHold = !1
    }
    ,
    c.prototype.update = function(t, e, i, s, n, r) {
        this.lasttime = this.time,
        this.time = t,
        this.lastx = this.x,
        this.lasty = this.y,
        this.x = e,
        this.y = i,
        this.width = s,
        this.height = n,
        this.pressure = r,
        !this.tooFarForHold && 15 <= cr.distanceTo(this.startx, this.starty, this.x, this.y) && (this.tooFarForHold = !0)
    }
    ,
    c.prototype.maybeTriggerHold = function(t, e) {
        this.triggeredHold || 500 <= cr.performance_now() - this.starttime && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (this.triggeredHold = !0,
        t.trigger_index = this.startindex,
        t.trigger_id = this.id,
        t.getTouchIndex = e,
        t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t),
        t.curTouchX = this.x,
        t.curTouchY = this.y,
        t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t),
        t.getTouchIndex = 0)
    }
    ;
    var u = -1e3
      , p = -1e3
      , d = -1e4;
    function f(t) {
        return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || t.originalEvent && t.originalEvent.sourceCapabilities && t.originalEvent.sourceCapabilities.firesTouchEvents
    }
    function y() {}
    c.prototype.maybeTriggerTap = function(t, e) {
        var i;
        this.triggeredHold || (i = cr.performance_now()) - this.starttime <= 333 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (t.trigger_index = this.startindex,
        t.trigger_id = this.id,
        t.getTouchIndex = e,
        d = i - d <= 666 && cr.distanceTo(u, p, this.x, this.y) < 25 ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t),
        t.curTouchX = this.x,
        t.curTouchY = this.y,
        t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t),
        p = u = -1e3,
        -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t),
        t.curTouchX = this.x,
        t.curTouchY = this.y,
        t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t),
        u = this.x,
        p = this.y,
        i),
        t.getTouchIndex = 0)
    }
    ,
    e.onCreate = function() {
        this.isWindows8 = !(void 0 === window.c2isWindows8 || !window.c2isWindows8),
        this.orient_alpha = 0,
        this.orient_beta = 0,
        this.orient_gamma = 0,
        this.acc_g_x = 0,
        this.acc_g_y = 0,
        this.acc_g_z = 0,
        this.acc_x = 0,
        this.acc_y = 0,
        this.acc_z = 0,
        this.curTouchX = 0,
        this.curTouchY = 0,
        this.trigger_index = 0,
        this.trigger_id = 0,
        this.getTouchIndex = 0,
        this.useMouseInput = 0 !== this.properties[0];
        var t = 0 < this.runtime.fullscreen_mode ? document : this.runtime.canvas
          , e = document;
        this.runtime.isDirectCanvas ? e = t = window.Canvas : this.runtime.isCocoonJs && (e = t = window);
        var i, s, n, r, o = this;
        "undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", function(t) {
            o.onPointerStart(t)
        }, !1),
        t.addEventListener("pointermove", function(t) {
            o.onPointerMove(t)
        }, !1),
        e.addEventListener("pointerup", function(t) {
            o.onPointerEnd(t, !1)
        }, !1),
        e.addEventListener("pointercancel", function(t) {
            o.onPointerEnd(t, !0)
        }, !1),
        this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
            t.preventDefault()
        }, !1),
        document.addEventListener("MSGestureHold", function(t) {
            t.preventDefault()
        }, !1),
        this.runtime.canvas.addEventListener("gesturehold", function(t) {
            t.preventDefault()
        }, !1),
        document.addEventListener("gesturehold", function(t) {
            t.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (t.addEventListener("MSPointerDown", function(t) {
            o.onPointerStart(t)
        }, !1),
        t.addEventListener("MSPointerMove", function(t) {
            o.onPointerMove(t)
        }, !1),
        e.addEventListener("MSPointerUp", function(t) {
            o.onPointerEnd(t, !1)
        }, !1),
        e.addEventListener("MSPointerCancel", function(t) {
            o.onPointerEnd(t, !0)
        }, !1),
        this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
            t.preventDefault()
        }, !1),
        document.addEventListener("MSGestureHold", function(t) {
            t.preventDefault()
        }, !1))) : (t.addEventListener("touchstart", function(t) {
            o.onTouchStart(t)
        }, !1),
        t.addEventListener("touchmove", function(t) {
            o.onTouchMove(t)
        }, !1),
        e.addEventListener("touchend", function(t) {
            o.onTouchEnd(t, !1)
        }, !1),
        e.addEventListener("touchcancel", function(t) {
            o.onTouchEnd(t, !0)
        }, !1)),
        this.isWindows8 ? (i = function(t) {
            t = t.reading;
            o.acc_x = t.accelerationX,
            o.acc_y = t.accelerationY,
            o.acc_z = t.accelerationZ
        }
        ,
        s = function(t) {
            t = t.reading;
            o.orient_alpha = t.yawDegrees,
            o.orient_beta = t.pitchDegrees,
            o.orient_gamma = t.rollDegrees
        }
        ,
        (n = Windows.Devices.Sensors.Accelerometer.getDefault()) && (n.reportInterval = Math.max(n.minimumReportInterval, 16),
        n.addEventListener("readingchanged", i)),
        (r = Windows.Devices.Sensors.Inclinometer.getDefault()) && (r.reportInterval = Math.max(r.minimumReportInterval, 16),
        r.addEventListener("readingchanged", s)),
        document.addEventListener("visibilitychange", function(t) {
            document.hidden || document.msHidden ? (n && n.removeEventListener("readingchanged", i),
            r && r.removeEventListener("readingchanged", s)) : (n && n.addEventListener("readingchanged", i),
            r && r.addEventListener("readingchanged", s))
        }, !1)) : (window.addEventListener("deviceorientation", function(t) {
            o.orient_alpha = t.alpha || 0,
            o.orient_beta = t.beta || 0,
            o.orient_gamma = t.gamma || 0
        }, !1),
        window.addEventListener("devicemotion", function(t) {
            t.accelerationIncludingGravity && (o.acc_g_x = t.accelerationIncludingGravity.x || 0,
            o.acc_g_y = t.accelerationIncludingGravity.y || 0,
            o.acc_g_z = t.accelerationIncludingGravity.z || 0),
            t.acceleration && (o.acc_x = t.acceleration.x || 0,
            o.acc_y = t.acceleration.y || 0,
            o.acc_z = t.acceleration.z || 0)
        }, !1)),
        this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(t) {
            o.onMouseMove(t)
        }),
        jQuery(document).mousedown(function(t) {
            o.onMouseDown(t)
        }),
        jQuery(document).mouseup(function(t) {
            o.onMouseUp(t)
        })),
        !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(a, null, {
            frequency: 40
        }),
        this.runtime.tick2Me(this)
    }
    ,
    e.onPointerMove = function(t) {
        var e, i, s;
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && t.preventDefault(),
        s = this.findTouch(t.pointerId),
        e = cr.performance_now(),
        0 <= s && (i = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset(),
        e - (s = this.touches[s]).time < 2 || s.update(e, t.pageX - i.left, t.pageY - i.top, t.width || 0, t.height || 0, t.pressure || 0)))
    }
    ,
    e.onPointerStart = function(t) {
        var e, i;
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        i = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset(),
        e = t.pageX - i.left,
        i = t.pageY - i.top,
        cr.performance_now(),
        this.trigger_index = this.touches.length,
        this.trigger_id = t.pointerId,
        this.touches.push(h(e, i, t.pointerId, this.trigger_index)),
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this),
        this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this),
        this.curTouchX = e,
        this.curTouchY = i,
        this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this),
        this.runtime.isInUserInputEvent = !1)
    }
    ,
    e.onPointerEnd = function(t, e) {
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        t = this.findTouch(t.pointerId),
        this.trigger_index = 0 <= t ? this.touches[t].startindex : -1,
        this.trigger_id = 0 <= t ? this.touches[t].id : -1,
        this.runtime.isInUserInputEvent = !0,
        this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this),
        this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this),
        0 <= t && (e || this.touches[t].maybeTriggerTap(this, t),
        o(this.touches[t]),
        this.touches.splice(t, 1)),
        this.runtime.isInUserInputEvent = !1)
    }
    ,
    e.onTouchMove = function(t) {
        t.preventDefault && t.preventDefault();
        for (var e, i = cr.performance_now(), s = 0, n = t.changedTouches.length; s < n; s++) {
            e = t.changedTouches[s];
            var r, o, a, h, c = this.findTouch(e.identifier);
            0 <= c && (r = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset(),
            i - (o = this.touches[c]).time < 2 || (a = 2 * (e.radiusX || e.webkitRadiusX || e.mozRadiusX || e.msRadiusX || 0),
            h = 2 * (e.radiusY || e.webkitRadiusY || e.mozRadiusY || e.msRadiusY || 0),
            c = e.force || e.webkitForce || e.mozForce || e.msForce || 0,
            o.update(i, e.pageX - r.left, e.pageY - r.top, a, h, c)))
        }
    }
    ,
    e.onTouchStart = function(t) {
        t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
        var e, i, s = this.runtime.isDomFree ? l : jQuery(this.runtime.canvas).offset();
        cr.performance_now();
        for (this.runtime.isInUserInputEvent = !0,
        e = 0,
        i = t.changedTouches.length; e < i; e++) {
            var n, r, o = t.changedTouches[e];
            -1 === this.findTouch(o.identifier) && (n = o.pageX - s.left,
            r = o.pageY - s.top,
            this.trigger_index = this.touches.length,
            this.trigger_id = o.identifier,
            this.touches.push(h(n, r, o.identifier, this.trigger_index)),
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this),
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this),
            this.curTouchX = n,
            this.curTouchY = r,
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this))
        }
        this.runtime.isInUserInputEvent = !1
    }
    ,
    e.onTouchEnd = function(t, e) {
        var i, s, n;
        for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(),
        this.runtime.isInUserInputEvent = !0,
        i = 0,
        s = t.changedTouches.length; i < s; i++)
            n = t.changedTouches[i],
            0 <= (n = this.findTouch(n.identifier)) && (this.trigger_index = this.touches[n].startindex,
            this.trigger_id = this.touches[n].id,
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this),
            this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this),
            e || this.touches[n].maybeTriggerTap(this, n),
            o(this.touches[n]),
            this.touches.splice(n, 1));
        this.runtime.isInUserInputEvent = !1
    }
    ,
    e.getAlpha = function() {
        return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== n ? 90 * n : this.orient_alpha
    }
    ,
    e.getBeta = function() {
        return this.runtime.isCordova && 0 === this.orient_beta && 0 !== s ? 90 * s : this.orient_beta
    }
    ,
    e.getGamma = function() {
        return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== i ? 90 * i : this.orient_gamma
    }
    ,
    e.onMouseDown = function(t) {
        f(t) || (t = {
            changedTouches: [{
                pageX: t.pageX,
                pageY: t.pageY,
                identifier: 0
            }]
        },
        this.onTouchStart(t),
        this.mouseDown = !0)
    }
    ,
    e.onMouseMove = function(t) {
        this.mouseDown && (f(t) || (t = {
            changedTouches: [{
                pageX: t.pageX,
                pageY: t.pageY,
                identifier: 0
            }]
        },
        this.onTouchMove(t)))
    }
    ,
    e.onMouseUp = function(t) {
        t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(),
        this.runtime.had_a_click = !0,
        f(t) || (t = {
            changedTouches: [{
                pageX: t.pageX,
                pageY: t.pageY,
                identifier: 0
            }]
        },
        this.onTouchEnd(t),
        this.mouseDown = !1)
    }
    ,
    e.tick2 = function() {
        for (var t, e = cr.performance_now(), i = 0, s = this.touches.length; i < s; ++i)
            (t = this.touches[i]).time <= e - 50 && (t.lasttime = e),
            t.maybeTriggerHold(this, i)
    }
    ,
    y.prototype.OnTouchStart = function() {
        return !0
    }
    ,
    y.prototype.OnTouchEnd = function() {
        return !0
    }
    ,
    y.prototype.IsInTouch = function() {
        return this.touches.length
    }
    ,
    y.prototype.OnTouchObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ;
    var g = [];
    function m() {}
    y.prototype.IsTouchingObject = function(t) {
        if (!t)
            return !1;
        for (var e, i, s = t.getCurrentSol(), n = s.getObjects(), r = 0, o = n.length; r < o; r++) {
            var a = n[r];
            for (a.update_bbox(),
            e = 0,
            i = this.touches.length; e < i; e++) {
                var h = this.touches[e]
                  , c = a.layer.canvasToLayer(h.x, h.y, !0)
                  , h = a.layer.canvasToLayer(h.x, h.y, !1);
                if (a.contains_pt(c, h)) {
                    g.push(a);
                    break
                }
            }
        }
        return !!g.length && (s.select_all = !1,
        cr.shallowAssignArray(s.instances, g),
        t.applySolToContainer(),
        cr.clearArray(g),
        !0)
    }
    ,
    y.prototype.CompareTouchSpeed = function(t, e, i) {
        if ((t = Math.floor(t)) < 0 || t >= this.touches.length)
            return !1;
        var s = this.touches[t]
          , t = cr.distanceTo(s.x, s.y, s.lastx, s.lasty)
          , s = (s.time - s.lasttime) / 1e3
          , s = 0 < s ? t / s : 0;
        return cr.do_cmp(s, e, i)
    }
    ,
    y.prototype.OrientationSupported = function() {
        return void 0 !== window.DeviceOrientationEvent
    }
    ,
    y.prototype.MotionSupported = function() {
        return void 0 !== window.DeviceMotionEvent
    }
    ,
    y.prototype.CompareOrientation = function(t, e, i) {
        var s = 0
          , s = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma();
        return cr.do_cmp(s, e, i)
    }
    ,
    y.prototype.CompareAcceleration = function(t, e, i) {
        var s = 0;
        return 0 === t ? s = this.acc_g_x : 1 === t ? s = this.acc_g_y : 2 === t ? s = this.acc_g_z : 3 === t ? s = this.acc_x : 4 === t ? s = this.acc_y : 5 === t && (s = this.acc_z),
        cr.do_cmp(s, e, i)
    }
    ,
    y.prototype.OnNthTouchStart = function(t) {
        return (t = Math.floor(t)) === this.trigger_index
    }
    ,
    y.prototype.OnNthTouchEnd = function(t) {
        return (t = Math.floor(t)) === this.trigger_index
    }
    ,
    y.prototype.HasNthTouch = function(t) {
        return t = Math.floor(t),
        this.touches.length >= t + 1
    }
    ,
    y.prototype.OnHoldGesture = function() {
        return !0
    }
    ,
    y.prototype.OnTapGesture = function() {
        return !0
    }
    ,
    y.prototype.OnDoubleTapGesture = function() {
        return !0
    }
    ,
    y.prototype.OnHoldGestureObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ,
    y.prototype.OnTapGestureObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ,
    y.prototype.OnDoubleTapGestureObject = function(t) {
        return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
    }
    ,
    t.cnds = new y,
    m.prototype.TouchCount = function(t) {
        t.set_int(this.touches.length)
    }
    ,
    m.prototype.X = function(t, e) {
        var i, s, n, r, o, a = this.getTouchIndex;
        a < 0 || a >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale,
        n = i.zoomRate,
        r = i.parallaxX,
        o = i.angle,
        i.scale = 1,
        i.zoomRate = 1,
        i.parallaxX = 1,
        i.angle = 0,
        t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !0)),
        i.scale = s,
        i.zoomRate = n,
        i.parallaxX = r,
        i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !0)) : t.set_float(0)
    }
    ,
    m.prototype.XAt = function(t, e, i) {
        var s, n, r, o, a;
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (n = (s = this.runtime.getLayerByNumber(0)).scale,
        r = s.zoomRate,
        o = s.parallaxX,
        a = s.angle,
        s.scale = 1,
        s.zoomRate = 1,
        s.parallaxX = 1,
        s.angle = 0,
        t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)),
        s.scale = n,
        s.zoomRate = r,
        s.parallaxX = o,
        s.angle = a) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0)
    }
    ,
    m.prototype.XForID = function(t, e, i) {
        var s, n, r, o, a = this.findTouch(e);
        a < 0 ? t.set_float(0) : (s = this.touches[a],
        cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale,
        o = n.zoomRate,
        e = n.parallaxX,
        a = n.angle,
        n.scale = 1,
        n.zoomRate = 1,
        n.parallaxX = 1,
        n.angle = 0,
        t.set_float(n.canvasToLayer(s.x, s.y, !0)),
        n.scale = r,
        n.zoomRate = o,
        n.parallaxX = e,
        n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(s.x, s.y, !0)) : t.set_float(0))
    }
    ,
    m.prototype.Y = function(t, e) {
        var i, s, n, r, o, a = this.getTouchIndex;
        a < 0 || a >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale,
        n = i.zoomRate,
        r = i.parallaxY,
        o = i.angle,
        i.scale = 1,
        i.zoomRate = 1,
        i.parallaxY = 1,
        i.angle = 0,
        t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !1)),
        i.scale = s,
        i.zoomRate = n,
        i.parallaxY = r,
        i.angle = o) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[a].x, this.touches[a].y, !1)) : t.set_float(0)
    }
    ,
    m.prototype.YAt = function(t, e, i) {
        var s, n, r, o, a;
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (n = (s = this.runtime.getLayerByNumber(0)).scale,
        r = s.zoomRate,
        o = s.parallaxY,
        a = s.angle,
        s.scale = 1,
        s.zoomRate = 1,
        s.parallaxY = 1,
        s.angle = 0,
        t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)),
        s.scale = n,
        s.zoomRate = r,
        s.parallaxY = o,
        s.angle = a) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0)
    }
    ,
    m.prototype.YForID = function(t, e, i) {
        var s, n, r, o, a = this.findTouch(e);
        a < 0 ? t.set_float(0) : (s = this.touches[a],
        cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale,
        o = n.zoomRate,
        e = n.parallaxY,
        a = n.angle,
        n.scale = 1,
        n.zoomRate = 1,
        n.parallaxY = 1,
        n.angle = 0,
        t.set_float(n.canvasToLayer(s.x, s.y, !1)),
        n.scale = r,
        n.zoomRate = o,
        n.parallaxY = e,
        n.angle = a) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(s.x, s.y, !1)) : t.set_float(0))
    }
    ,
    m.prototype.AbsoluteX = function(t) {
        this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
    }
    ,
    m.prototype.AbsoluteXAt = function(t, e) {
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].x)
    }
    ,
    m.prototype.AbsoluteXForID = function(t, e) {
        e = this.findTouch(e);
        e < 0 ? t.set_float(0) : (e = this.touches[e],
        t.set_float(e.x))
    }
    ,
    m.prototype.AbsoluteY = function(t) {
        this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
    }
    ,
    m.prototype.AbsoluteYAt = function(t, e) {
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].y)
    }
    ,
    m.prototype.AbsoluteYForID = function(t, e) {
        e = this.findTouch(e);
        e < 0 ? t.set_float(0) : (e = this.touches[e],
        t.set_float(e.y))
    }
    ,
    m.prototype.SpeedAt = function(t, e) {
        var i;
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : (i = this.touches[e],
        e = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
        (i = (i.time - i.lasttime) / 1e3) <= 0 ? t.set_float(0) : t.set_float(e / i))
    }
    ,
    m.prototype.SpeedForID = function(t, e) {
        var i = this.findTouch(e);
        i < 0 ? t.set_float(0) : (e = this.touches[i],
        i = cr.distanceTo(e.x, e.y, e.lastx, e.lasty),
        (e = (e.time - e.lasttime) / 1e3) <= 0 ? t.set_float(0) : t.set_float(i / e))
    }
    ,
    m.prototype.AngleAt = function(t, e) {
        (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : (e = this.touches[e],
        t.set_float(cr.to_degrees(cr.angleTo(e.lastx, e.lasty, e.x, e.y))))
    }
    ,
    m.prototype.AngleForID = function(t, e) {
        e = this.findTouch(e);
        e < 0 ? t.set_float(0) : (e = this.touches[e],
        t.set_float(cr.to_degrees(cr.angleTo(e.lastx, e.lasty, e.x, e.y))))
    }
    ,
    m.prototype.Alpha = function(t) {
        t.set_float(this.getAlpha())
    }
    ,
    m.prototype.Beta = function(t) {
        t.set_float(this.getBeta())
    }
    ,
    m.prototype.Gamma = function(t) {
        t.set_float(this.getGamma())
    }
    ,
    m.prototype.AccelerationXWithG = function(t) {
        t.set_float(this.acc_g_x)
    }
    ,
    m.prototype.AccelerationYWithG = function(t) {
        t.set_float(this.acc_g_y)
    }
    ,
    m.prototype.AccelerationZWithG = function(t) {
        t.set_float(this.acc_g_z)
    }
    ,
    m.prototype.AccelerationX = function(t) {
        t.set_float(this.acc_x)
    }
    ,
    m.prototype.AccelerationY = function(t) {
        t.set_float(this.acc_y)
    }
    ,
    m.prototype.AccelerationZ = function(t) {
        t.set_float(this.acc_z)
    }
    ,
    m.prototype.TouchIndex = function(t) {
        t.set_int(this.trigger_index)
    }
    ,
    m.prototype.TouchID = function(t) {
        t.set_float(this.trigger_id)
    }
    ,
    m.prototype.WidthForID = function(t, e) {
        e = this.findTouch(e);
        e < 0 ? t.set_float(0) : (e = this.touches[e],
        t.set_float(e.width))
    }
    ,
    m.prototype.HeightForID = function(t, e) {
        e = this.findTouch(e);
        e < 0 ? t.set_float(0) : (e = this.touches[e],
        t.set_float(e.height))
    }
    ,
    m.prototype.PressureForID = function(t, e) {
        e = this.findTouch(e);
        e < 0 ? t.set_float(0) : (e = this.touches[e],
        t.set_float(e.pressure))
    }
    ,
    t.exps = new m
}(),
cr.plugins_.vooxe = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.plugins_.vooxe.prototype;
    t.Type = function(t) {
        this.plugin = t,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t) {
        this.type = t,
        this.runtime = t.runtime,
        window.vooxe = {},
        window.GD_OPTIONS = {}
    }
    ;
    var e = t.Instance.prototype
      , i = !1;
    function s() {}
    function n() {}
    e.onCreate = function() {
        var s;
        window.vooxe || window.GD_OPTIONS ? (i = !0,
        this.vooxe = window.vooxe,
        (s = this).vooxe.onInit = function() {
            cr.logexport("Gamedistribution.com SDK: onInit"),
            s.isShowingBannerAd = !1,
            s.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onInit, s)
        }
        ,
        this.vooxe.onError = function() {
            cr.logexport("Gamedistribution.com SDK: onError"),
            s.isShowingBannerAd = !0,
            s.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onError, s)
        }
        ,
        this.vooxe.onResumeGame = function() {
            cr.logexport("Gamedistribution.com SDK: onResume"),
            s.isShowingBannerAd = !1,
            s.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onResumeGame, s)
        }
        ,
        this.vooxe.onPauseGame = function() {
            cr.logexport("Gamedistribution.com SDK: onPauseGame"),
            s.isShowingBannerAd = !0,
            s.runtime.trigger(cr.plugins_.vooxe.prototype.cnds.onPauseGame, s)
        }
        ,
        this.vooxe.InitAds = function() {
            var t, e, i;
            window.GD_OPTIONS = {
                gameId: s.properties[0],
                userId: s.properties[1],
                advertisementSettings: {
                    autoplay: !1
                },
                onEvent: function(t) {
                    switch (t.name) {
                    case "SDK_GAME_START":
                        s.vooxe.onResumeGame();
                        break;
                    case "SDK_GAME_PAUSE":
                        s.vooxe.onPauseGame();
                        break;
                    case "SDK_READY":
                        s.vooxe.onInit();
                        break;
                    case "SDK_ERROR":
                        s.vooxe.onError()
                    }
                }
            },
            t = document,
            e = "gamedistribution-jssdk",
            i = t.getElementsByTagName("script")[0],
            t.getElementById(e) || ((t = t.createElement("script")).id = e,
            t.src = "main.min.js",
            i.parentNode.insertBefore(t, i))
        }
        ) : cr.logexport("[Construct 2] Gamedistribution.com SDK is required to show advertisements within Cordova; other platforms are not supported.")
    }
    ,
    s.prototype.IsShowingBanner = function() {
        return this.isShowingBannerAd
    }
    ,
    s.prototype.onInit = function() {
        return !0
    }
    ,
    s.prototype.onError = function(t) {
        return !0
    }
    ,
    s.prototype.onResumeGame = function(t) {
        return !0
    }
    ,
    s.prototype.onPauseGame = function(t) {
        return !0
    }
    ,
    t.cnds = new s,
    n.prototype.ShowBanner = function() {
        if (i) {
            if (void 0 === window.gdsdk.showBanner)
                return cr.logexport("Gamedistribution.com SDK is not loaded or an ad blocker is present."),
                void this.vooxe.onResumeGame();
            window.gdsdk.showBanner(),
            cr.logexport("ShowBanner"),
            this.isShowingBannerAd = !0
        }
    }
    ,
    n.prototype.PlayLog = function() {
        if (i)
            return void 0 === window.gdsdk.play ? (cr.logexport("Gamedistribution.com SDK is not loaded."),
            void this.vooxe.onResumeGame()) : void window.gdsdk.play()
    }
    ,
    n.prototype.CustomLog = function() {
        if (i)
            return void 0 === window.gdsdk.customLog ? (cr.logexport("Gamedistribution.com SDK is not loaded."),
            void this.vooxe.onResumeGame()) : void window.gdsdk.customLog()
    }
    ,
    n.prototype.InitAds = function() {
        i && this.vooxe.InitAds()
    }
    ,
    t.acts = new n,
    t.exps = new function() {}
}(),
cr.behaviors.Fade = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Fade.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    function s() {}
    function n() {}
    e.onCreate = function() {
        this.activeAtStart = 1 === this.properties[0],
        this.setMaxOpacity = !1,
        this.fadeInTime = this.properties[1],
        this.waitTime = this.properties[2],
        this.fadeOutTime = this.properties[3],
        this.destroy = this.properties[4],
        this.stage = this.activeAtStart ? 0 : 3,
        this.recycled ? this.stageTime.reset() : this.stageTime = new cr.KahanAdder,
        this.maxOpacity = this.inst.opacity || 1,
        this.activeAtStart && (0 === this.fadeInTime ? (this.stage = 1,
        0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0,
        this.runtime.redraw = !0))
    }
    ,
    e.saveToJSON = function() {
        return {
            fit: this.fadeInTime,
            wt: this.waitTime,
            fot: this.fadeOutTime,
            s: this.stage,
            st: this.stageTime.sum,
            mo: this.maxOpacity
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.fadeInTime = t.fit,
        this.waitTime = t.wt,
        this.fadeOutTime = t.fot,
        this.stage = t.s,
        this.stageTime.reset(),
        this.stageTime.sum = t.st,
        this.maxOpacity = t.mo
    }
    ,
    e.tick = function() {
        this.stageTime.add(this.runtime.getDt(this.inst)),
        0 === this.stage && (this.inst.opacity = this.stageTime.sum / this.fadeInTime * this.maxOpacity,
        this.runtime.redraw = !0,
        this.inst.opacity >= this.maxOpacity && (this.inst.opacity = this.maxOpacity,
        this.stage = 1,
        this.stageTime.reset(),
        this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeInEnd, this.inst))),
        1 === this.stage && this.stageTime.sum >= this.waitTime && (this.stage = 2,
        this.stageTime.reset(),
        this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnWaitEnd, this.inst)),
        2 === this.stage && 0 !== this.fadeOutTime && (this.inst.opacity = this.maxOpacity - this.stageTime.sum / this.fadeOutTime * this.maxOpacity,
        this.runtime.redraw = !0,
        this.inst.opacity < 0 && (this.inst.opacity = 0,
        this.stage = 3,
        this.stageTime.reset(),
        this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, this.inst),
        1 === this.destroy && this.runtime.DestroyInstance(this.inst)))
    }
    ,
    e.doStart = function() {
        this.stage = 0,
        this.stageTime.reset(),
        0 === this.fadeInTime ? (this.stage = 1,
        0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0,
        this.runtime.redraw = !0)
    }
    ,
    i.prototype.OnFadeOutEnd = function() {
        return !0
    }
    ,
    i.prototype.OnFadeInEnd = function() {
        return !0
    }
    ,
    i.prototype.OnWaitEnd = function() {
        return !0
    }
    ,
    t.cnds = new i,
    s.prototype.StartFade = function() {
        this.activeAtStart || this.setMaxOpacity || (this.maxOpacity = this.inst.opacity || 1,
        this.setMaxOpacity = !0),
        3 === this.stage && this.doStart()
    }
    ,
    s.prototype.RestartFade = function() {
        this.doStart()
    }
    ,
    s.prototype.SetFadeInTime = function(t) {
        t < 0 && (t = 0),
        this.fadeInTime = t
    }
    ,
    s.prototype.SetWaitTime = function(t) {
        t < 0 && (t = 0),
        this.waitTime = t
    }
    ,
    s.prototype.SetFadeOutTime = function(t) {
        t < 0 && (t = 0),
        this.fadeOutTime = t
    }
    ,
    t.acts = new s,
    n.prototype.FadeInTime = function(t) {
        t.set_float(this.fadeInTime)
    }
    ,
    n.prototype.WaitTime = function(t) {
        t.set_float(this.waitTime)
    }
    ,
    n.prototype.FadeOutTime = function(t) {
        t.set_float(this.fadeOutTime)
    }
    ,
    t.exps = new n
}(),
cr.behaviors.Flash = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Flash.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    function s() {}
    e.onCreate = function() {
        this.ontime = 0,
        this.offtime = 0,
        this.stage = 0,
        this.stagetimeleft = 0,
        this.timeleft = 0
    }
    ,
    e.saveToJSON = function() {
        return {
            ontime: this.ontime,
            offtime: this.offtime,
            stage: this.stage,
            stagetimeleft: this.stagetimeleft,
            timeleft: this.timeleft
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.ontime = t.ontime,
        this.offtime = t.offtime,
        this.stage = t.stage,
        this.stagetimeleft = t.stagetimeleft,
        this.timeleft = t.timeleft,
        null === this.timeleft && (this.timeleft = 1 / 0)
    }
    ,
    e.tick = function() {
        if (!(this.timeleft <= 0)) {
            var t = this.runtime.getDt(this.inst);
            if (this.timeleft -= t,
            this.timeleft <= 0)
                return this.timeleft = 0,
                this.inst.visible = !0,
                this.runtime.redraw = !0,
                void this.runtime.trigger(cr.behaviors.Flash.prototype.cnds.OnFlashEnded, this.inst);
            this.stagetimeleft -= t,
            this.stagetimeleft <= 0 && (0 === this.stage ? (this.inst.visible = !1,
            this.stage = 1,
            this.stagetimeleft += this.offtime) : (this.inst.visible = !0,
            this.stage = 0,
            this.stagetimeleft += this.ontime),
            this.runtime.redraw = !0)
        }
    }
    ,
    i.prototype.IsFlashing = function() {
        return 0 < this.timeleft
    }
    ,
    i.prototype.OnFlashEnded = function() {
        return !0
    }
    ,
    t.cnds = new i,
    s.prototype.Flash = function(t, e, i) {
        this.ontime = t,
        this.offtime = e,
        this.stage = 1,
        this.stagetimeleft = e,
        this.timeleft = i,
        this.inst.visible = !1,
        this.runtime.redraw = !0
    }
    ,
    s.prototype.StopFlashing = function() {
        this.timeleft = 0,
        this.inst.visible = !0,
        this.runtime.redraw = !0
    }
    ,
    t.acts = new s,
    t.exps = new function() {}
}(),
cr.behaviors.Pin = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Pin.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    function s() {}
    function n() {}
    e.onCreate = function() {
        this.pinObject = null,
        this.pinObjectUid = -1,
        this.pinAngle = 0,
        this.pinDist = 0,
        this.myStartAngle = 0,
        this.theirStartAngle = 0,
        this.lastKnownAngle = 0,
        this.mode = 0,
        this.targetDist = -1,
        this.pinObjectX = -1,
        this.pinObjectY = -1,
        this.pinObjectAngle = 0,
        this.pinObjectValue_0 = 0;
        var e = this;
        this.recycled || (this.myDestroyCallback = function(t) {
            e.onInstanceDestroyed(t)
        }
        ),
        this.runtime.addDestroyCallback(this.myDestroyCallback)
    }
    ,
    e.saveToJSON = function() {
        return {
            uid: this.pinObject ? this.pinObject.uid : -1,
            pa: this.pinAngle,
            pd: this.pinDist,
            msa: this.myStartAngle,
            tsa: this.theirStartAngle,
            lka: this.lastKnownAngle,
            m: this.mode
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.pinObjectUid = t.uid,
        this.pinAngle = t.pa,
        this.pinDist = t.pd,
        this.myStartAngle = t.msa,
        this.theirStartAngle = t.tsa,
        this.lastKnownAngle = t.lka,
        this.mode = t.m
    }
    ,
    e.afterLoad = function() {
        -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid),
        this.pinObjectUid = -1
    }
    ,
    e.onInstanceDestroyed = function(t) {
        this.pinObject == t && (this.pinObject = null)
    }
    ,
    e.onDestroy = function() {
        this.pinObject = null,
        this.runtime.removeDestroyCallback(this.myDestroyCallback)
    }
    ,
    e.tick = function() {}
    ,
    e.tick2 = function() {
        var t, e, i, s;
        this.pinObject && (this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle))),
        i = this.inst.x,
        s = this.inst.y,
        3 !== this.mode && 4 !== this.mode || ((t = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y)) > this.pinDist || 4 === this.mode && t < this.pinDist) && (e = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y),
        i = this.pinObject.x + Math.cos(e) * this.pinDist,
        s = this.pinObject.y + Math.sin(e) * this.pinDist),
        0 !== this.mode && 1 !== this.mode && 2 !== this.mode || (i = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist,
        s = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist),
        5 === this.mode && (this.targetDist = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y)),
        6 === this.mode && (this.pinObjectX = this.pinObject.x,
        this.pinObjectY = this.pinObject.y,
        this.pinObjectAngle = this.pinObject.angle,
        this.pinObjectValue_0 = this.inst.instance_vars[this.inst.instance_var_names.indexOf("pinObjectValue_0")]),
        e = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle)),
        this.lastKnownAngle = e,
        0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === i && this.inst.y === s || (this.inst.x = i,
        this.inst.y = s,
        this.inst.set_bbox_changed()),
        0 !== this.mode && 2 !== this.mode || this.inst.angle !== e && (this.inst.angle = e,
        this.inst.set_bbox_changed()),
        3 === this.mode && (e = cr.angleTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y),
        this.lastKnownAngle = e,
        this.inst.angle !== e && (this.inst.angle = e,
        this.inst.set_bbox_changed())))
    }
    ,
    i.prototype.IsPinned = function() {
        return !!this.pinObject
    }
    ,
    i.prototype.CompareTargetDistance = function(t, e) {
        return cr.do_cmp(this.targetDist, t, e)
    }
    ,
    i.prototype.ComparePositionX = function(t, e) {
        return cr.do_cmp(this.pinObjectX, t, e)
    }
    ,
    i.prototype.ComparePositionY = function(t, e) {
        return cr.do_cmp(this.pinObjectY, t, e)
    }
    ,
    t.cnds = new i,
    s.prototype.Pin = function(t, e) {
        !t || (t = t.getFirstPicked(this.inst)) && (this.pinObject = t,
        this.pinAngle = cr.angleTo(t.x, t.y, this.inst.x, this.inst.y) - t.angle,
        this.pinDist = cr.distanceTo(t.x, t.y, this.inst.x, this.inst.y),
        this.pinObjectX = this.pinObject.x,
        this.pinObjectY = this.pinObject.y,
        this.pinObjectAngle = this.pinObject.angle,
        this.myStartAngle = this.inst.angle,
        this.lastKnownAngle = this.inst.angle,
        this.theirStartAngle = t.angle,
        this.mode = e)
    }
    ,
    s.prototype.Unpin = function() {
        this.pinObject = null
    }
    ,
    s.prototype.UpdatePinDistance = function(t) {
        this.pinDist = t
    }
    ,
    t.acts = new s,
    n.prototype.PinnedUID = function(t) {
        t.set_int(this.pinObject ? this.pinObject.uid : -1)
    }
    ,
    n.prototype.PinnedDistance = function(t) {
        t.set_int(this.pinDist)
    }
    ,
    n.prototype.TargetDistance = function(t) {
        t.set_float(this.targetDist)
    }
    ,
    n.prototype.pinObjectX = function(t) {
        t.set_float(this.pinObjectX)
    }
    ,
    n.prototype.pinObjectY = function(t) {
        t.set_float(this.pinObjectY)
    }
    ,
    n.prototype.pinObjectAngle = function(t) {
        t.set_float(this.pinObjectAngle)
    }
    ,
    n.prototype.pinObjectValue_0 = function(t) {
        t.set_float(this.pinObjectValue_0)
    }
    ,
    t.exps = new n
}(),
cr.behaviors.Rex_Spline = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Rex_Spline.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    e.onCreate = function() {
        this.enabled = 1 === this.properties[0],
        this.speed = this.properties[1],
        this.setAngle = 0 !== this.properties[2],
        this.isLooping = 1 === this.properties[3],
        this.tension = this.properties[4],
        this.recycled || (this.points = [],
        this.curSeg = {
            ptr: -1,
            t: 1,
            p0: null,
            p1: null,
            p2: null,
            p3: null,
            dist: 0,
            preX: 0,
            preY: 0
        }),
        this.traveledDist = 0,
        this.movingAngle = 0,
        this.is_moving = !1,
        this.is_my_call = !1
    }
    ,
    e.onDestroy = function() {
        this.curSeg.p0 = null,
        this.curSeg.p1 = null,
        this.curSeg.p2 = null,
        this.curSeg.p3 = null,
        this.points.length = 0
    }
    ,
    e.tick = function() {
        this.enabled && this.is_moving && this.move()
    }
    ,
    e.move = function(t) {
        if (null == t && (t = this.runtime.getDt(this.inst)),
        0 !== t && 0 != this.speed) {
            for (var e, i, s, n, r, o, a, h, c, l, t = this.speed * t, u = t * t, p = t / 20, d = null, f = this.inst.x, y = this.inst.y; null != (i = this.getSeg()); )
                if (0 !== i.dist) {
                    if (d !== i.dist && .5 < (e = p / (d = i.dist)) && (e = .5),
                    i.t += e,
                    n = 1 <= i.t ? (i.t = 1,
                    s = i.p2[0],
                    i.p2[1]) : (s = m(i, 0, this.tension),
                    m(i, 1, this.tension)),
                    u <= (o = g(f, y, s, n))) {
                        Math.abs(c - u) < Math.abs(o - u) && (s = a,
                        n = h,
                        o = c,
                        i.t = l),
                        r = Math.sqrt(o),
                        this.traveledDist += r,
                        this.inst.x = s,
                        this.inst.y = n;
                        break
                    }
                    a = s,
                    h = n,
                    c = o,
                    l = 1 === i.t ? 0 : i.t
                }
            f === this.inst.x && y === this.inst.y ? this.movingAngle = this.inst.angle : this.movingAngle = cr.angleTo(f, y, this.inst.x, this.inst.y),
            this.setAngle && (this.inst.angle = this.movingAngle),
            0 !== this.speed && (this.inst.set_bbox_changed(),
            null == i ? this.onReachLastPoint() : (i.preX = s,
            i.preY = n))
        }
    }
    ;
    var l, u, p, g = function(t, e, i, s) {
        t = i - t,
        e = s - e;
        return t * t + e * e
    };
    e.start = function() {
        this.curSeg.ptr = -1,
        this.curSeg.t = 1,
        this.traveledDist = 0,
        this.is_moving = !0,
        null === this.getSeg() && this.onReachLastPoint()
    }
    ,
    e.onReachLastPoint = function() {
        this.is_moving && (this.is_moving = !1,
        this.is_my_call = !0,
        this.runtime.trigger(cr.behaviors.Rex_Spline.prototype.cnds.OnHitTarget, this.inst),
        this.is_my_call = !1)
    }
    ,
    e.hitPoint = function() {
        this.is_my_call = !0,
        this.runtime.trigger(cr.behaviors.Rex_Spline.prototype.cnds.OnHitAnyPoint, this.inst),
        this.is_my_call = !1
    }
    ,
    e.wrapIndex = function(t) {
        var e;
        return !this.isLooping || (t %= e = this.points.length) < 0 && (t = e + t),
        t
    }
    ,
    e.getSeg = function() {
        if (1 === this.curSeg.t) {
            this.curSeg.ptr = this.wrapIndex(this.curSeg.ptr + 1);
            var t = this.curSeg.ptr
              , e = this.wrapIndex(t + 1);
            if (e >= this.points.length)
                return null;
            var i = this.wrapIndex(t - 1)
              , s = this.wrapIndex(e + 1);
            this.curSeg.p0 = this.points[i],
            this.curSeg.p1 = this.points[t],
            this.curSeg.p2 = this.points[e],
            this.curSeg.p3 = this.points[s],
            this.curSeg.dist = cr.distanceTo(this.curSeg.p1[0], this.curSeg.p1[1], this.curSeg.p2[0], this.curSeg.p2[1]),
            this.curSeg.t = 0,
            this.curSeg.preX = this.curSeg.p1[0],
            this.curSeg.preY = this.curSeg.p1[1],
            this.hitPoint()
        }
        return this.curSeg
    }
    ;
    var m = function(t, e, i) {
        var s, n, r, o = t.p1[e], a = t.p2[e], h = t.t, c = t.p0 ? t.p0[e] : o + (o - a), e = t.p3 ? t.p3[e] : a + (a - o);
        return h === l ? (s = l,
        n = u,
        r = p) : (l = s = h,
        u = n = s * s,
        p = r = n * s),
        (-i * s + 2 * i * n - i * r) * c + (1 + (i - 3) * n + (2 - i) * r) * o + (+i * s + (3 - 2 * i) * n + (i - 2) * r) * a + (-i * n + i * r) * e
    };
    function i() {}
    function s() {}
    function n() {}
    e.saveToJSON = function() {
        var t = {
            ptr: this.curSeg.ptr,
            t: this.curSeg.t,
            d: this.curSeg.dist,
            pX: this.curSeg.preX,
            pY: this.curSeg.preY
        };
        return {
            en: this.enabled,
            spd: this.speed,
            lop: this.isLooping,
            ts: this.tension,
            ps: this.points,
            ptr: this.curSeg.ptr,
            seg: t,
            td: this.traveledDist,
            ma: this.movingAngle,
            mov: this.is_moving
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.enabled = t.en,
        this.speed = t.spd,
        this.isLooping = t.lop,
        this.tension = t.ts,
        this.points = t.ps,
        this.curSeg = t.seg,
        this.curSeg.ptr = t.seg.ptr,
        this.curSeg.t = t.seg.t,
        this.curSeg.dist = t.seg.d,
        this.curSeg.preX = t.seg.pX,
        this.curSeg.preY = t.seg.pY,
        this.curSeg.p0 = this.points[this.wrapIndex(this.curSeg.ptr - 1)],
        this.curSeg.p1 = this.points[this.wrapIndex(this.curSeg.ptr)],
        this.curSeg.p2 = this.points[this.wrapIndex(this.curSeg.ptr + 1)],
        this.curSeg.p3 = this.points[this.wrapIndex(this.curSeg.ptr + 2)],
        this.traveledDist = t.td,
        this.movingAngle = t.ma,
        this.is_moving = t.mov
    }
    ,
    t.cnds = new i,
    i.prototype.OnHitTarget = function() {
        return this.is_my_call
    }
    ,
    i.prototype.OnHitAnyPoint = function() {
        return this.is_my_call
    }
    ,
    i.prototype.IsMoving = function() {
        return this.enabled && this.is_moving
    }
    ,
    t.acts = new s,
    s.prototype.SetEnabled = function(t) {
        this.enabled = 1 === t
    }
    ,
    s.prototype.SetAngleEnabled = function(t) {
        this.setAngle = 1 === t
    }
    ,
    s.prototype.AddPoint = function(t, e) {
        this.points.push([t, e])
    }
    ,
    s.prototype.ResetPoint = function(t, e, i) {
        if (this.is_moving) {
            var s = this.curSeg.ptr
              , n = this.curSeg.ptr + 1;
            if (s === t || n === t)
                return
        }
        t < 0 ? this.points.unshift([e, i]) : t < this.points.length ? ((t = this.points[t])[0] = e,
        t[1] = i) : this.points.push([e, i])
    }
    ,
    s.prototype.CleanAll = function() {
        this.points.length = 0,
        this.is_moving = !1
    }
    ,
    s.prototype.Start = function() {
        this.start()
    }
    ,
    s.prototype.Stop = function() {
        this.is_moving = !1
    }
    ,
    s.prototype.SetSpeed = function(t) {
        this.speed = t
    }
    ,
    s.prototype.SetLooping = function(t) {
        this.isLooping = 1 === t
    }
    ,
    s.prototype.SetTension = function(t) {
        this.tension = t
    }
    ,
    t.exps = new n,
    n.prototype.Speed = function(t) {
        t.set_float(this.speed)
    }
    ,
    n.prototype.Tension = function(t) {
        t.set_float(this.tension)
    }
    ,
    n.prototype.AngleOfMotion = function(t) {
        t.set_float(cr.to_clamped_degrees(this.movingAngle))
    }
    ,
    n.prototype.Point = function(t, e, i) {
        var s = this.points;
        null != e && (s = s[e]),
        null != s && null != i && (0 === i || "x" === i || "X" === i ? s = s[0] : 1 !== i && "y" !== i && "Y" !== i || (s = s[1])),
        t.set_any(function(t, e) {
            t = !0 === t ? 1 : !1 === t ? 0 : null == t ? null != e ? e : 0 : "object" == typeof t ? JSON.stringify(t) : t;
            return t
        }(s))
    }
    ,
    n.prototype.CurSegP0 = function(t, e) {
        var i = this.curSeg.ptr;
        null != e && (null != (i = this.points[i]) ? 0 === e || "x" === e || "X" === e ? i = i[0] : 1 !== e && "y" !== e && "Y" !== e || (i = i[1]) : i = 0),
        t.set_int(i)
    }
    ,
    n.prototype.CurSegP1 = function(t, e) {
        var i = this.wrapIndex(this.curSeg.ptr + 1);
        null != e && (null != (i = this.points[i]) ? 0 === e || "x" === e || "X" === e ? i = i[0] : 1 !== e && "y" !== e && "Y" !== e || (i = i[1]) : i = 0),
        t.set_int(i)
    }
    ,
    n.prototype.PointsCount = function(t) {
        t.set_int(this.points.length)
    }
    ,
    n.prototype.TraveledDistance = function(t) {
        t.set_float(this.traveledDist)
    }
}(),
cr.behaviors.Rotate = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Rotate.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    function s() {}
    e.onCreate = function() {
        this.speed = cr.to_radians(this.properties[0]),
        this.acc = cr.to_radians(this.properties[1])
    }
    ,
    e.saveToJSON = function() {
        return {
            speed: this.speed,
            acc: this.acc
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.speed = t.speed,
        this.acc = t.acc
    }
    ,
    e.tick = function() {
        var t = this.runtime.getDt(this.inst);
        0 !== t && (0 !== this.acc && (this.speed += this.acc * t),
        0 !== this.speed && (this.inst.angle = cr.clamp_angle(this.inst.angle + this.speed * t),
        this.inst.set_bbox_changed()))
    }
    ,
    t.cnds = new function() {}
    ,
    i.prototype.SetSpeed = function(t) {
        this.speed = cr.to_radians(t)
    }
    ,
    i.prototype.SetAcceleration = function(t) {
        this.acc = cr.to_radians(t)
    }
    ,
    t.acts = new i,
    s.prototype.Speed = function(t) {
        t.set_float(cr.to_degrees(this.speed))
    }
    ,
    s.prototype.Acceleration = function(t) {
        t.set_float(cr.to_degrees(this.acc))
    }
    ,
    t.exps = new s
}(),
cr.behaviors.Sin = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.Sin.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime,
        this.i = 0
    }
    ;
    var e = t.Instance.prototype
      , i = 2 * Math.PI
      , s = Math.PI / 2
      , n = 3 * Math.PI / 2;
    function r() {}
    function o() {}
    function a() {}
    e.onCreate = function() {
        this.active = 1 === this.properties[0],
        this.movement = this.properties[1],
        this.wave = this.properties[2],
        this.period = this.properties[3],
        this.period += Math.random() * this.properties[4],
        0 === this.period ? this.i = 0 : (this.i = this.properties[5] / this.period * i,
        this.i += Math.random() * this.properties[6] / this.period * i),
        this.mag = this.properties[7],
        this.mag += Math.random() * this.properties[8],
        this.initialValue = 0,
        this.initialValue2 = 0,
        this.ratio = 0,
        5 === this.movement && (this.mag = cr.to_radians(this.mag)),
        this.init()
    }
    ,
    e.saveToJSON = function() {
        return {
            i: this.i,
            a: this.active,
            mv: this.movement,
            w: this.wave,
            p: this.period,
            mag: this.mag,
            iv: this.initialValue,
            iv2: this.initialValue2,
            r: this.ratio,
            lkv: this.lastKnownValue,
            lkv2: this.lastKnownValue2
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.i = t.i,
        this.active = t.a,
        this.movement = t.mv,
        this.wave = t.w,
        this.period = t.p,
        this.mag = t.mag,
        this.initialValue = t.iv,
        this.initialValue2 = t.iv2 || 0,
        this.ratio = t.r,
        this.lastKnownValue = t.lkv,
        this.lastKnownValue2 = t.lkv2 || 0
    }
    ,
    e.init = function() {
        switch (this.movement) {
        case 0:
            this.initialValue = this.inst.x;
            break;
        case 1:
            this.initialValue = this.inst.y;
            break;
        case 2:
            this.initialValue = this.inst.width,
            this.ratio = this.inst.height / this.inst.width;
            break;
        case 3:
            this.initialValue = this.inst.width;
            break;
        case 4:
            this.initialValue = this.inst.height;
            break;
        case 5:
            this.initialValue = this.inst.angle;
            break;
        case 6:
            this.initialValue = this.inst.opacity;
            break;
        case 7:
            this.initialValue = 0;
            break;
        case 8:
            this.initialValue = this.inst.x,
            this.initialValue2 = this.inst.y
        }
        this.lastKnownValue = this.initialValue,
        this.lastKnownValue2 = this.initialValue2
    }
    ,
    e.waveFunc = function(t) {
        switch (t %= i,
        this.wave) {
        case 0:
            return Math.sin(t);
        case 1:
            return t <= s ? t / s : t <= n ? 1 - 2 * (t - s) / Math.PI : (t - n) / s - 1;
        case 2:
            return 2 * t / i - 1;
        case 3:
            return -2 * t / i + 1;
        case 4:
            return t < Math.PI ? -1 : 1
        }
        return 0
    }
    ,
    e.tick = function() {
        var t = this.runtime.getDt(this.inst);
        this.active && 0 !== t && (0 === this.period ? this.i = 0 : (this.i += t / this.period * i,
        this.i = this.i % i),
        this.updateFromPhase())
    }
    ,
    e.updateFromPhase = function() {
        switch (this.movement) {
        case 0:
            this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue),
            this.inst.x = this.initialValue + this.waveFunc(this.i) * this.mag,
            this.lastKnownValue = this.inst.x;
            break;
        case 1:
            this.inst.y !== this.lastKnownValue && (this.initialValue += this.inst.y - this.lastKnownValue),
            this.inst.y = this.initialValue + this.waveFunc(this.i) * this.mag,
            this.lastKnownValue = this.inst.y;
            break;
        case 2:
            this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag,
            this.inst.height = this.inst.width * this.ratio;
            break;
        case 3:
            this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag;
            break;
        case 4:
            this.inst.height = this.initialValue + this.waveFunc(this.i) * this.mag;
            break;
        case 5:
            this.inst.angle !== this.lastKnownValue && (this.initialValue = cr.clamp_angle(this.initialValue + (this.inst.angle - this.lastKnownValue))),
            this.inst.angle = cr.clamp_angle(this.initialValue + this.waveFunc(this.i) * this.mag),
            this.lastKnownValue = this.inst.angle;
            break;
        case 6:
            this.inst.opacity = this.initialValue + this.waveFunc(this.i) * this.mag / 100,
            this.inst.opacity < 0 ? this.inst.opacity = 0 : 1 < this.inst.opacity && (this.inst.opacity = 1);
            break;
        case 8:
            this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue),
            this.inst.y !== this.lastKnownValue2 && (this.initialValue2 += this.inst.y - this.lastKnownValue2),
            this.inst.x = this.initialValue + Math.cos(this.inst.angle) * this.waveFunc(this.i) * this.mag,
            this.inst.y = this.initialValue2 + Math.sin(this.inst.angle) * this.waveFunc(this.i) * this.mag,
            this.lastKnownValue = this.inst.x,
            this.lastKnownValue2 = this.inst.y
        }
        this.inst.set_bbox_changed()
    }
    ,
    e.onSpriteFrameChanged = function(t, e) {
        switch (this.movement) {
        case 2:
            this.initialValue *= e.width / t.width,
            this.ratio = e.height / e.width;
            break;
        case 3:
            this.initialValue *= e.width / t.width;
            break;
        case 4:
            this.initialValue *= e.height / t.height
        }
    }
    ,
    r.prototype.IsActive = function() {
        return this.active
    }
    ,
    r.prototype.CompareMovement = function(t) {
        return this.movement === t
    }
    ,
    r.prototype.ComparePeriod = function(t, e) {
        return cr.do_cmp(this.period, t, e)
    }
    ,
    r.prototype.CompareMagnitude = function(t, e) {
        return 5 === this.movement ? cr.do_cmp(this.mag, t, cr.to_radians(e)) : cr.do_cmp(this.mag, t, e)
    }
    ,
    r.prototype.CompareWave = function(t) {
        return this.wave === t
    }
    ,
    t.cnds = new r,
    o.prototype.SetActive = function(t) {
        this.active = 1 === t
    }
    ,
    o.prototype.SetPeriod = function(t) {
        this.period = t
    }
    ,
    o.prototype.SetMagnitude = function(t) {
        this.mag = t,
        5 === this.movement && (this.mag = cr.to_radians(this.mag))
    }
    ,
    o.prototype.SetMovement = function(t) {
        5 === this.movement && 5 !== t && (this.mag = cr.to_degrees(this.mag)),
        this.movement = t,
        this.init()
    }
    ,
    o.prototype.SetWave = function(t) {
        this.wave = t
    }
    ,
    o.prototype.SetPhase = function(t) {
        this.i = t * i % i,
        this.updateFromPhase()
    }
    ,
    o.prototype.UpdateInitialState = function() {
        this.init()
    }
    ,
    t.acts = new o,
    a.prototype.CyclePosition = function(t) {
        t.set_float(this.i / i)
    }
    ,
    a.prototype.Period = function(t) {
        t.set_float(this.period)
    }
    ,
    a.prototype.Magnitude = function(t) {
        5 === this.movement ? t.set_float(cr.to_degrees(this.mag)) : t.set_float(this.mag)
    }
    ,
    a.prototype.Value = function(t) {
        t.set_float(this.waveFunc(this.i) * this.mag)
    }
    ,
    t.exps = new a
}();
var easeOutBounceArray = []
  , easeInElasticArray = []
  , easeOutElasticArray = []
  , easeInOutElasticArray = []
  , easeInCircle = []
  , easeOutCircle = []
  , easeInOutCircle = []
  , easeInBack = []
  , easeOutBack = []
  , easeInOutBack = []
  , litetween_precision = 1e4
  , updateLimit = 0;
function easeOutBouncefunc(t) {
    return result = (t /= 1) < 1 / 2.75 ? 7.5625 * t * t * 1 + 0 : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
    result
}
function integerize(t, e) {
    return Math.round(t / e * litetween_precision)
}
function easeFunc(t, e, i, s, n, r, o) {
    var a, h, c, l, u = 0;
    switch (t) {
    case 0:
        u = s * e / n + i;
        break;
    case 1:
        u = s * (e /= n) * e + i;
        break;
    case 2:
        u = -s * (e /= n) * (e - 2) + i;
        break;
    case 3:
        u = (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i;
        break;
    case 4:
        u = s * (e /= n) * e * e + i;
        break;
    case 5:
        u = s * ((e = e / n - 1) * e * e + 1) + i;
        break;
    case 6:
        u = (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i;
        break;
    case 7:
        u = s * (e /= n) * e * e * e + i;
        break;
    case 8:
        u = -s * ((e = e / n - 1) * e * e * e - 1) + i;
        break;
    case 9:
        u = (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i;
        break;
    case 10:
        u = s * (e /= n) * e * e * e * e + i;
        break;
    case 11:
        u = s * ((e = e / n - 1) * e * e * e * e + 1) + i;
        break;
    case 12:
        u = (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i;
        break;
    case 13:
        u = o.optimized ? easeInCircle[integerize(e, n)] : -(Math.sqrt(1 - e * e) - 1);
        break;
    case 14:
        u = o.optimized ? easeOutCircle[integerize(e, n)] : Math.sqrt(1 - (e - 1) * (e - 1));
        break;
    case 15:
        u = o.optimized ? easeInOutCircle[integerize(e, n)] : (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
        break;
    case 16:
        u = o.optimized ? easeInBack[integerize(e, n)] : s * (e /= n) * e * (((c = o.s) + 1) * e - c) + i;
        break;
    case 17:
        u = o.optimized ? easeOutBack[integerize(e, n)] : s * ((e = e / n - 1) * e * (((c = o.s) + 1) * e + c) + 1) + i;
        break;
    case 18:
        u = o.optimized ? easeInOutBack[integerize(e, n)] : (c = o.s,
        (e /= n / 2) < 1 ? s / 2 * (e * e * ((1 + (c *= 1.525)) * e - c)) + i : s / 2 * ((e -= 2) * e * ((1 + (c *= 1.525)) * e + c) + 2) + i);
        break;
    case 19:
        u = o.optimized ? easeInElasticArray[integerize(e, n)] : (a = o.a,
        (c = 0) == e && (u = i),
        1 == (e /= n) && (u = i + s),
        0 == (h = o.p) && (h = .3 * n),
        c = 0 == a || a < Math.abs(s) ? (a = s,
        h / 4) : h / (2 * Math.PI) * Math.asin(s / a),
        -(a * Math.pow(2, 10 * --e) * Math.sin((e * n - c) * (2 * Math.PI) / h)) + i);
        break;
    case 20:
        u = o.optimized ? easeOutElasticArray[integerize(e, n)] : (a = o.a,
        (c = 0) == e && (u = i),
        1 == (e /= n) && (u = i + s),
        0 == (h = o.p) && (h = .3 * n),
        c = 0 == a || a < Math.abs(s) ? (a = s,
        h / 4) : h / (2 * Math.PI) * Math.asin(s / a),
        a * Math.pow(2, -10 * e) * Math.sin((e * n - c) * (2 * Math.PI) / h) + s + i);
        break;
    case 21:
        u = o.optimized ? easeInOutElasticArray[integerize(e, n)] : (a = o.a,
        (c = 0) == e && (u = i),
        2 == (e /= n / 2) && (u = i + s),
        0 == (h = o.p) && (h = n * (.3 * 1.5)),
        c = 0 == a || a < Math.abs(s) ? (a = s,
        h / 4) : h / (2 * Math.PI) * Math.asin(s / a),
        e < 1 ? a * Math.pow(2, 10 * --e) * Math.sin((e * n - c) * (2 * Math.PI) / h) * -.5 + i : a * Math.pow(2, -10 * --e) * Math.sin((e * n - c) * (2 * Math.PI) / h) * .5 + s + i);
        break;
    case 22:
        u = o.optimized ? s - easeOutBounceArray[integerize(n - e, n)] + i : s - easeOutBouncefunc(n - e / n) + i;
        break;
    case 23:
        u = o.optimized ? easeOutBounceArray[integerize(e, n)] : easeOutBouncefunc(e / n);
        break;
    case 24:
        u = o.optimized ? e < n / 2 ? .5 * (s - easeOutBounceArray[integerize(n - 2 * e, n)] + i) + i : .5 * easeOutBounceArray[integerize(2 * e - n, n)] + .5 * s + i : e < n / 2 ? .5 * (s - easeOutBouncefunc(n - 2 * e) + i) + i : .5 * easeOutBouncefunc((2 * e - n) / n) + .5 * s + i;
        break;
    case 25:
        u = (l = e / n / 2) * l * (3 - 2 * l) * 2;
        break;
    case 26:
        u = (l = (e / n + 1) / 2) * l * (3 - 2 * l) * 2 - 1;
        break;
    case 27:
        u = (l = e / n) * l * (3 - 2 * l)
    }
    return r ? s - i - u : u
}
!function() {
    for (var t = 0, e = 0, i = 0, s = 0, n = 0, r = 0; r <= litetween_precision; r++) {
        s = r / litetween_precision,
        t = (s /= 1) < 1 / 2.75 ? 7.5625 * s * s * 1 + 0 : s < 2 / 2.75 ? 7.5625 * (s -= 1.5 / 2.75) * s + .75 : s < 2.5 / 2.75 ? 7.5625 * (s -= 2.25 / 2.75) * s + .9375 : 7.5625 * (s -= 2.625 / 2.75) * s + .984375;
        easeOutBounceArray[r] = t,
        (i = e = 0) == (s = r / litetween_precision) && (t = 0),
        1 == (s /= 1) && (t = 1),
        0 == i && (i = .3),
        n = 0 == e || e < Math.abs(1) ? (e = 1,
        i / 4) : i / (2 * Math.PI) * Math.asin(1 / e),
        t = 0 - e * Math.pow(2, 10 * --s) * Math.sin((+s - n) * (2 * Math.PI) / i),
        easeInElasticArray[r] = t,
        (i = e = 0) == (s = r / litetween_precision) && (t = 0),
        1 == (s /= 1) && (t = 1),
        0 == i && (i = .3),
        n = 0 == e || e < Math.abs(1) ? (e = 1,
        i / 4) : i / (2 * Math.PI) * Math.asin(1 / e),
        t = e * Math.pow(2, -10 * s) * Math.sin((+s - n) * (2 * Math.PI) / i) + 1,
        easeOutElasticArray[r] = t,
        (i = e = 0) == (s = r / litetween_precision) && (t = 0),
        2 == (s /= .5) && (t = 1),
        0 == i && (i = .3 * 1.5 * 1),
        n = 0 == e || e < Math.abs(1) ? (e = 1,
        i / 4) : i / (2 * Math.PI) * Math.asin(1 / e),
        t = s < 1 ? e * Math.pow(2, 10 * --s) * Math.sin((+s - n) * (2 * Math.PI) / i) * -.5 + 0 : e * Math.pow(2, -10 * --s) * Math.sin((+s - n) * (2 * Math.PI) / i) * .5 + 1,
        easeInOutElasticArray[r] = t,
        s = r / litetween_precision,
        easeInCircle[r] = -(Math.sqrt(1 - s * s) - 1),
        s = r / litetween_precision,
        easeOutCircle[r] = Math.sqrt(1 - (s - 1) * (s - 1)),
        s = r / litetween_precision,
        t = (s /= .5) < 1 ? -.5 * (Math.sqrt(1 - s * s) - 1) + 0 : .5 * (Math.sqrt(1 - (s -= 2) * s) + 1) + 0,
        easeInOutCircle[r] = t,
        s = r / litetween_precision,
        (n = 0) == n && (n = 1.70158),
        t = (s /= 1) * s * ((n + 1) * s - n) + 0,
        easeInBack[r] = t,
        (n = 0) == n && (n = 1.70158),
        t = (s = +(s = r / litetween_precision) - 1) * s * ((n + 1) * s + n) + 1,
        easeOutBack[r] = t,
        s = r / litetween_precision,
        (n = 0) == n && (n = 1.70158),
        t = (s /= .5) < 1 ? s * s * ((1 + (n *= 1.525)) * s - n) * .5 + 0 : .5 * ((s -= 2) * s * ((1 + (n *= 1.525)) * s + n) + 2) + 0,
        easeInOutBack[r] = t
    }
}();
var TweenObject = function(t, e, i, s, n, r, o) {
    this.name = t,
    this.value = 0,
    this.setInitial(s),
    this.setTarget(n),
    this.easefunc = i,
    this.tweened = e,
    this.duration = r,
    this.progress = 0,
    this.state = 0,
    this.onStart = !1,
    this.onEnd = !1,
    this.onReverseStart = !1,
    this.onReverseEnd = !1,
    this.lastKnownValue = 0,
    this.lastKnownValue2 = 0,
    this.enforce = o,
    this.pingpong = 1,
    this.flipEase = !1,
    this.easingparam = [],
    this.lastState = 1;
    for (var a = 0; a < 28; a++)
        this.easingparam[a] = {},
        this.easingparam[a].a = 0,
        this.easingparam[a].p = 0,
        this.easingparam[a].t = 0,
        this.easingparam[a].s = 0,
        this.easingparam[a].optimized = !0
};
function trim(t) {
    return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
function isReversed(t) {
    var e = t[0]
      , i = t[1]
      , t = t[2]
      , e = cp.v.sub(i, e)
      , i = cp.v.sub(t, i);
    return cp.v.cross(e, i) < 0
}
function pointsInTriangle(t, e) {
    for (var i, s = 0; s < t.length; ++s)
        if (i = t[s],
        -1 == e.indexOf(i) && pointInTriangle(i, e))
            return !0;
    return !1
}
function pointInTriangle(t, e) {
    var i = t
      , s = e[0]
      , n = e[1]
      , r = e[2]
      , t = cp.v.sub(r, s)
      , e = cp.v.sub(n, s)
      , r = cp.v.sub(i, s)
      , n = cp.v.dot(t, t)
      , i = cp.v.dot(t, e)
      , s = cp.v.dot(t, r)
      , t = cp.v.dot(e, e)
      , e = cp.v.dot(e, r)
      , r = 1 / (n * t - i * i)
      , t = (t * s - i * e) * r
      , r = (n * e - i * s) * r;
    return 0 <= t && 0 <= r && t + r < 1
}
function triangulate(t) {
    for (var e, i = t.slice(0), s = [], n = 0; 3 <= i.length; )
        isReversed(e = [i[n], i[(n + 1) % i.length], i[(n + 2) % i.length]]) || pointsInTriangle(i, e) ? n++ : (i.splice((n + 1) % i.length, 1),
        s.push(e)),
        n %= i.length;
    return s
}
function add_tri_2_poly(t, e) {
    for (var i, s, n = 0, r = 0; r < 3; r++)
        -1 == t.indexOf(e[r]) ? (i = e[r],
        s = e[(r + 1) % 3]) : n++;
    if (2 != n)
        return !1;
    r = t.indexOf(s);
    var o = t.length;
    return !isReversed([t[(r - 2 + o) % o], t[(r - 1 + o) % o], i]) && !isReversed([i, t[r], t[(r + 1) % o]]) && (t.splice(r, 0, i),
    !0)
}
function triangles2convex(t) {
    for (var e = t, i = []; 0 < e.length; ) {
        var s = e[0];
        e.shift();
        for (var n = 0; n < e.length; n++)
            add_tri_2_poly(s, e[n]) && (e.splice(n, 1),
            n = -1);
        i.push(s)
    }
    return i
}
TweenObject.prototype = {},
TweenObject.prototype.flipTarget = function() {
    var t = this.initialparam1
      , e = this.initialparam2;
    this.initialparam1 = this.targetparam1,
    this.initialparam2 = this.targetparam2,
    this.targetparam1 = t,
    this.targetparam2 = e,
    this.lastKnownValue = 0,
    this.lastKnownValue2 = 0
}
,
TweenObject.prototype.setInitial = function(t) {
    this.initialparam1 = parseFloat(t.split(",")[0]),
    this.initialparam2 = parseFloat(t.split(",")[1]),
    this.lastKnownValue = 0,
    this.lastKnownValue2 = 0
}
,
TweenObject.prototype.setTarget = function(t) {
    this.targetparam1 = parseFloat(t.split(",")[0]),
    this.targetparam2 = parseFloat(t.split(",")[1]),
    isNaN(this.targetparam2) && (this.targetparam2 = this.targetparam1)
}
,
TweenObject.prototype.OnTick = function(t) {
    return 0 === this.state ? -1 : (1 === this.state && (this.progress += t),
    2 === this.state && (this.progress -= t),
    3 === this.state && (this.state = 0),
    4 !== this.state && 6 !== this.state || (this.progress += t * this.pingpong),
    5 === this.state && (this.progress += t * this.pingpong),
    this.progress < 0 ? (this.progress = 0,
    4 === this.state ? this.pingpong = 1 : 6 === this.state ? (this.pingpong = 1,
    this.flipEase = !1) : this.state = 0,
    this.onReverseEnd = !0,
    0) : this.progress > this.duration ? (this.progress = this.duration,
    4 === this.state ? this.pingpong = -1 : 6 === this.state ? (this.pingpong = -1,
    this.flipEase = !0) : 5 === this.state ? this.progress = 0 : this.state = 0,
    this.onEnd = !0,
    1) : this.flipEase ? easeFunc(this.easefunc, this.duration - this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]) : easeFunc(this.easefunc, this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]))
}
,
cr.behaviors.lunarray_LiteTween = function(t) {
    this.runtime = t
}
,
function() {
    var t = cr.behaviors.lunarray_LiteTween.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime,
        this.i = 0
    }
    ;
    var e = t.Instance.prototype;
    e.onCreate = function() {
        this.playmode = this.properties[0],
        this.active = 1 == this.playmode || 2 == this.playmode || 3 == this.playmode || 4 == this.playmode,
        this.tweened = this.properties[1],
        this.easing = this.properties[2],
        this.target = this.properties[3],
        this.targetmode = this.properties[4],
        this.useCurrent = !1,
        1 === this.targetmode && (this.target = "relative(" + this.target + ")"),
        this.duration = this.properties[5],
        this.enforce = 1 === this.properties[6],
        this.value = 0,
        this.tween_list = {},
        this.addToTweenList("default", this.tweened, this.easing, "current", this.target, this.duration, this.enforce),
        1 === this.properties[0] && this.startTween(0),
        2 === this.properties[0] && this.startTween(2),
        3 === this.properties[0] && this.startTween(3),
        4 === this.properties[0] && this.startTween(4)
    }
    ,
    e.parseCurrent = function(t, e) {
        void 0 === e && (e = "current");
        var i = trim(e);
        e = trim(e);
        var s = this.value;
        if ("current" === e)
            switch (t) {
            case 0:
                i = this.inst.x + "," + this.inst.y;
                break;
            case 1:
            case 2:
            case 3:
                i = this.inst.width + "," + this.inst.height;
                break;
            case 4:
                i = cr.to_degrees(this.inst.angle) + "," + cr.to_degrees(this.inst.angle);
                break;
            case 5:
                i = 100 * this.inst.opacity + "," + 100 * this.inst.opacity;
                break;
            case 6:
                i = s + "," + s;
                break;
            case 7:
            case 8:
                i = this.inst.x + "," + this.inst.y;
                break;
            case 9:
                i = void 0 !== this.inst.curFrame ? this.inst.width / this.inst.curFrame.width + "," + this.inst.height / this.inst.curFrame.height : "1,1"
            }
        if ("relative" === e.substring(0, 8)) {
            var n, r, e = e.match(/\((.*?)\)/);
            switch (e && (n = parseFloat(e[1].split(",")[0]),
            r = parseFloat(e[1].split(",")[1])),
            isNaN(n) && (n = 0),
            isNaN(r) && (r = 0),
            t) {
            case 0:
                i = this.inst.x + n + "," + (this.inst.y + r);
                break;
            case 1:
            case 2:
            case 3:
                i = this.inst.width + n + "," + (this.inst.height + r);
                break;
            case 4:
                i = cr.to_degrees(this.inst.angle) + n + "," + (cr.to_degrees(this.inst.angle) + r);
                break;
            case 5:
                i = 100 * this.inst.opacity + n + "," + (100 * this.inst.opacity + r);
                break;
            case 6:
                i = s + n + "," + s + n;
                break;
            case 7:
                i = this.inst.x + n + "," + this.inst.y;
                break;
            case 8:
                i = this.inst.x + "," + (this.inst.y + n);
                break;
            case 9:
                i = n + "," + r
            }
        }
        return i
    }
    ,
    e.addToTweenList = function(t, e, i, s, n, r, o) {
        s = this.parseCurrent(e, s),
        n = this.parseCurrent(e, n),
        void 0 !== this.tween_list[t] && delete this.tween_list[t],
        this.tween_list[t] = new TweenObject(t,e,i,s,n,r,o),
        this.tween_list[t].dt = 0
    }
    ,
    e.saveToJSON = function() {
        JSON.stringify(this.tween_list.default);
        return {
            playmode: this.playmode,
            active: this.active,
            tweened: this.tweened,
            easing: this.easing,
            target: this.target,
            targetmode: this.targetmode,
            useCurrent: this.useCurrent,
            duration: this.duration,
            enforce: this.enforce,
            value: this.value,
            tweenlist: JSON.stringify(this.tween_list.default)
        }
    }
    ,
    TweenObject.Load = function(t, e, i, s, n, r, o, a) {
        var h, c = new TweenObject(e,i,s,n,r,o,a);
        for (h in t)
            c[h] = t[h];
        return c
    }
    ,
    e.loadFromJSON = function(t) {
        var e = JSON.parse(t.tweenlist)
          , e = TweenObject.Load(e, e.name, e.tweened, e.easefunc, e.initialparam1 + "," + e.initialparam2, e.targetparam1 + "," + e.targetparam2, e.duration, e.enforce);
        this.tween_list.default = e,
        this.playmode = t.playmode,
        this.active = t.active,
        this.movement = t.tweened,
        this.easing = t.easing,
        this.target = t.target,
        this.targetmode = t.targetmode,
        this.useCurrent = t.useCurrent,
        this.duration = t.duration,
        this.enforce = t.enforce,
        this.value = t.value
    }
    ,
    e.setProgressTo = function(t) {
        for (var e in 1 < t && (t = 1),
        t < 0 && (t = 0),
        this.tween_list) {
            var i = this.tween_list[e];
            i.lastKnownValue = 0,
            i.lastKnownValue2 = 0,
            i.state = 3,
            i.progress = t * i.duration;
            var s = i.OnTick(0);
            this.updateTween(i, s)
        }
    }
    ,
    e.startTween = function(t) {
        for (var e in this.tween_list) {
            var i, s, n = this.tween_list[e];
            this.useCurrent && (i = this.parseCurrent(n.tweened, "current"),
            s = this.parseCurrent(n.tweened, this.target),
            n.setInitial(i),
            n.setTarget(s)),
            0 === t && (n.progress = 1e-6,
            n.lastKnownValue = 0,
            n.lastKnownValue2 = 0,
            n.onStart = !0,
            n.state = 1),
            1 === t && (n.state = n.lastState),
            2 !== t && 4 !== t || (n.progress = 1e-6,
            n.lastKnownValue = 0,
            n.lastKnownValue2 = 0,
            n.onStart = !0,
            2 == t && (n.state = 4),
            4 == t && (n.state = 6)),
            3 === t && (n.progress = 1e-6,
            n.lastKnownValue = 0,
            n.lastKnownValue2 = 0,
            n.onStart = !0,
            n.state = 5)
        }
    }
    ,
    e.stopTween = function(t) {
        for (var e in this.tween_list) {
            var i = this.tween_list[e];
            3 != i.state && 0 != i.state && (i.lastState = i.state),
            1 === t && (i.progress = 0),
            2 === t && (i.progress = i.duration),
            i.state = 3;
            var s = i.OnTick(0);
            this.updateTween(i, s)
        }
    }
    ,
    e.reverseTween = function(t) {
        for (var e in this.tween_list) {
            var i = this.tween_list[e];
            1 === t && (i.progress = i.duration,
            i.lastKnownValue = 0,
            i.lastKnownValue2 = 0,
            i.onReverseStart = !0),
            i.state = 2
        }
    }
    ,
    e.updateTween = function(t, e) {
        var i, s;
        0 === t.tweened ? t.enforce ? (this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
        this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue,
        this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2,
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e,
        t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e) : 1 === t.tweened ? t.enforce ? (this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
        this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue,
        this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2,
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e,
        t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e) : 2 === t.tweened ? t.enforce ? this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue,
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e) : 3 === t.tweened ? t.enforce ? this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2,
        t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e) : 4 === t.tweened ? t.enforce ? (s = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
        this.inst.angle = cr.clamp_angle(cr.to_radians(s))) : (s = (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue,
        this.inst.angle = cr.clamp_angle(this.inst.angle + cr.to_radians(s)),
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e) : 5 === t.tweened ? t.enforce ? this.inst.opacity = (t.initialparam1 + (t.targetparam1 - t.initialparam1) * e) / 100 : (this.inst.opacity += ((t.targetparam1 - t.initialparam1) * e - t.lastKnownValue) / 100,
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e) : 6 === t.tweened ? t.enforce ? this.value = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.value += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue,
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e) : 7 === t.tweened ? t.enforce ? this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue,
        t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e) : 8 === t.tweened ? t.enforce ? this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2,
        t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e) : 9 === t.tweened && (i = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
        s = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e,
        this.inst.width < 0 && (i = t.initialparam1 + (t.targetparam1 + t.initialparam1) * -e),
        this.inst.height < 0 && (s = t.initialparam2 + (t.targetparam2 + t.initialparam2) * -e),
        t.enforce ? (this.inst.width = this.inst.curFrame.width * i,
        this.inst.height = this.inst.curFrame.height * s) : (this.inst.width < 0 ? (this.inst.width = i * (this.inst.width / (-1 + t.lastKnownValue)),
        t.lastKnownValue = i + 1) : (this.inst.width = i * (this.inst.width / (1 + t.lastKnownValue)),
        t.lastKnownValue = i - 1),
        this.inst.height < 0 ? (this.inst.height = s * (this.inst.height / (-1 + t.lastKnownValue2)),
        t.lastKnownValue2 = s + 1) : (this.inst.height = s * (this.inst.height / (1 + t.lastKnownValue2)),
        t.lastKnownValue2 = s - 1))),
        this.inst.set_bbox_changed()
    }
    ,
    e.tick = function() {
        var t = this.runtime.getDt(this.inst)
          , e = this.tween_list.default;
        0 !== e.state && (e.onStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, this.inst),
        e.onStart = !1),
        e.onReverseStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseStart, this.inst),
        e.onReverseStart = !1),
        this.active = 1 == e.state || 2 == e.state || 4 == e.state || 5 == e.state || 6 == e.state,
        t = e.OnTick(t),
        this.updateTween(e, t),
        e.onEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, this.inst),
        e.onEnd = !1),
        e.onReverseEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, this.inst),
        e.onReverseEnd = !1))
    }
    ,
    t.cnds = {},
    (e = t.cnds).IsActive = function() {
        return 0 !== this.tween_list.default.state
    }
    ,
    e.IsReversing = function() {
        return 2 == this.tween_list.default.state
    }
    ,
    e.CompareProgress = function(t, e) {
        var i = this.tween_list.default;
        return cr.do_cmp(i.progress / i.duration, t, e)
    }
    ,
    e.OnThreshold = function(t, e) {
        var i = this.tween_list.default;
        this.threshold = cr.do_cmp(i.progress / i.duration, t, e);
        e = this.oldthreshold != this.threshold && this.threshold;
        return e && (this.oldthreshold = this.threshold),
        e
    }
    ,
    e.OnStart = function() {
        return void 0 !== this.tween_list.default && this.tween_list.default.onStart
    }
    ,
    e.OnReverseStart = function() {
        return void 0 !== this.tween_list.default && this.tween_list.default.onReverseStart
    }
    ,
    e.OnEnd = function() {
        return void 0 !== this.tween_list.default && this.tween_list.default.onEnd
    }
    ,
    e.OnReverseEnd = function() {
        return void 0 !== this.tween_list.default && this.tween_list.default.onReverseEnd
    }
    ,
    t.acts = {},
    (e = t.acts).Start = function(t, e) {
        this.threshold = !1,
        this.oldthreshold = !1,
        this.useCurrent = 1 == e,
        this.startTween(t)
    }
    ,
    e.Stop = function(t) {
        this.stopTween(t)
    }
    ,
    e.Reverse = function(t) {
        this.threshold = !1,
        this.oldthreshold = !1,
        this.reverseTween(t)
    }
    ,
    e.ProgressTo = function(t) {
        this.setProgressTo(t)
    }
    ,
    e.SetDuration = function(t) {
        isNaN(t) || t < 0 || void 0 !== this.tween_list.default && (this.tween_list.default.duration = t)
    }
    ,
    e.SetEnforce = function(t) {
        void 0 !== this.tween_list.default && (this.tween_list.default.enforce = 1 === t)
    }
    ,
    e.SetInitial = function(t) {
        void 0 !== this.tween_list.default && (t = this.parseCurrent(this.tween_list.default.tweened, t),
        this.tween_list.default.setInitial(t))
    }
    ,
    e.SetTarget = function(t, e, i) {
        if (void 0 !== this.tween_list.default && !isNaN(i)) {
            var s = this.tween_list.default
              , n = i + ""
              , r = ""
              , o = "";
            if (1 === (this.targetmode = e)) {
                switch (this.target = "relative(" + n + ")",
                t) {
                case 0:
                    r = this.inst.x + i,
                    o = s.targetparam2;
                    break;
                case 1:
                    r = s.targetparam1,
                    o = this.inst.y + i;
                    break;
                case 2:
                    o = r = "" + cr.to_degrees(this.inst.angle + cr.to_radians(i));
                    break;
                case 3:
                    o = r = "" + 100 * this.inst.opacity + i;
                    break;
                case 4:
                    r = this.inst.width + i,
                    o = s.targetparam2;
                    break;
                case 5:
                    r = s.targetparam1,
                    o = this.inst.height + i;
                    break;
                case 6:
                    o = r = i
                }
                n = r + "," + o
            } else {
                switch (t) {
                case 0:
                    r = i,
                    o = s.targetparam2;
                    break;
                case 1:
                    r = s.targetparam1,
                    o = i;
                    break;
                case 2:
                case 3:
                    o = r = i;
                    break;
                case 4:
                    r = i,
                    o = s.targetparam2;
                    break;
                case 5:
                    r = s.targetparam1,
                    o = i;
                    break;
                case 6:
                    o = r = i
                }
                n = r + "," + o,
                this.target = n
            }
            t = this.parseCurrent(this.tween_list.default.tweened, "current"),
            n = this.parseCurrent(this.tween_list.default.tweened, n);
            s.setInitial(t),
            s.setTarget(n)
        }
    }
    ,
    e.SetTweenedProperty = function(t) {
        void 0 !== this.tween_list.default && (this.tween_list.default.tweened = t)
    }
    ,
    e.SetEasing = function(t) {
        void 0 !== this.tween_list.default && (this.tween_list.default.easefunc = t)
    }
    ,
    e.SetEasingParam = function(t, e, i, s, n) {
        void 0 !== this.tween_list.default && (this.tween_list.default.easingparam[t].optimized = !1,
        this.tween_list.default.easingparam[t].a = e,
        this.tween_list.default.easingparam[t].p = i,
        this.tween_list.default.easingparam[t].t = s,
        this.tween_list.default.easingparam[t].s = n)
    }
    ,
    e.ResetEasingParam = function() {
        void 0 !== this.tween_list.default && (this.tween_list.default.optimized = !0)
    }
    ,
    e.SetValue = function(t) {
        var e = this.tween_list.default;
        this.value = t,
        6 === e.tweened && e.setInitial(this.parseCurrent(e.tweened, "current"))
    }
    ,
    e.SetParameter = function(t, e, i, s, n) {
        var r;
        void 0 === this.tween_list.default ? this.addToTweenList("default", t, e, initial, i, s, n, 0) : ((r = this.tween_list.default).tweened = t,
        r.easefunc = e,
        r.setInitial(this.parseCurrent(t, "current")),
        r.setTarget(this.parseCurrent(t, i)),
        r.duration = s,
        r.enforce = 1 === n)
    }
    ,
    t.exps = {},
    (t = t.exps).State = function(t) {
        var e = "N/A";
        switch (this.tween_list.default.state) {
        case 0:
            e = "paused";
            break;
        case 1:
            e = "playing";
            break;
        case 2:
            e = "reversing";
            break;
        case 3:
            e = "seeking"
        }
        t.set_string(e)
    }
    ,
    t.Progress = function(t) {
        var e = this.tween_list.default.progress / this.tween_list.default.duration;
        t.set_float(e)
    }
    ,
    t.Duration = function(t) {
        t.set_float(this.tween_list.default.duration)
    }
    ,
    t.Target = function(t) {
        var e = this.tween_list.default
          , i = "N/A";
        switch (e.tweened) {
        case 0:
            i = e.targetparam1;
            break;
        case 1:
            i = e.targetparam2;
            break;
        case 2:
        case 3:
        case 4:
            i = e.targetparam1;
            break;
        case 5:
            i = e.targetparam2;
            break;
        case 6:
            i = e.targetparam1
        }
        t.set_float(i)
    }
    ,
    t.Value = function(t) {
        var e = this.value;
        t.set_float(e)
    }
    ,
    t.Tween = function(t, e, i, s, n) {
        s = 1 < s ? 1 : s,
        s = easeFunc(n, s < 0 ? 0 : s, 0, 1, 1, !1, !1);
        t.set_float(e + s * (i - e))
    }
}(),
function() {
    var n;
    function y(t, e) {
        if (!t)
            throw new Error("Assertion failed: " + e)
    }
    function g(t, e) {
        !t && console && console.warn && (console.warn("ASSERTION FAILED: " + e),
        console.trace && console.trace())
    }
    function f(t, e) {
        return t < e ? t + " " + e : e + " " + t
    }
    function o(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e)
                return t[i] = t[t.length - 1],
                t.length--,
                0
    }
    Object.create = Object.create || function(t) {
        function e() {}
        return e.prototype = t,
        new e
    }
    ,
    "undefined" == typeof exports ? (n = {},
    "object" == typeof window && (window.cp = n)) : n = exports;
    var T, A = "object" == typeof window && -1 < window.navigator.userAgent.indexOf("Firefox") ? (T = Math.min,
    Math.max) : (T = function(t, e) {
        return t < e ? t : e
    }
    ,
    function(t, e) {
        return e < t ? t : e
    }
    );
    function d(t, e, i) {
        var s = t[2 * e];
        t[2 * e] = t[2 * i],
        t[2 * i] = s,
        s = t[2 * e + 1],
        t[2 * e + 1] = t[2 * i + 1],
        t[2 * i + 1] = s
    }
    function l(t, e, i, s, n, r) {
        if (0 === i)
            return 0;
        for (var o = 0, a = e, h = k(n, s), c = r * S(h), l = e, u = e + i - 1; l <= u; ) {
            var p = new v(t[2 * l],t[2 * l + 1])
              , p = P(h, k(p, s));
            c < p ? (o < p && (o = p,
            a = l),
            l++) : (d(t, l, u),
            u--)
        }
        return a != e && d(t, e, a),
        l - e
    }
    n.momentForCircle = function(t, e, i, s) {
        return t * (.5 * (e * e + i * i) + B(s))
    }
    ,
    n.areaForCircle = function(t, e) {
        return Math.PI * Math.abs(t * t - e * e)
    }
    ,
    n.momentForSegment = function(t, e, i) {
        var s = I(C(e, i), .5);
        return t * (F(i, e) / 12 + B(s))
    }
    ,
    n.areaForSegment = function(t, e, i) {
        return i * (Math.PI * i + 2 * N(t, e))
    }
    ,
    n.momentForPoly = function(t, e, i) {
        for (var s = 0, n = 0, r = e.length, o = 0; o < r; o += 2) {
            var a = e[o] + i.x
              , h = e[o + 1] + i.y
              , c = e[(o + 2) % r] + i.x
              , l = e[(o + 3) % r] + i.y
              , u = E(c, l, a, h);
            s += u * (x(a, h, a, h) + x(a, h, c, l) + x(c, l, c, l)),
            n += u
        }
        return t * s / (6 * n)
    }
    ,
    n.areaForPoly = function(t) {
        for (var e = 0, i = 0, s = t.length; i < s; i += 2)
            e += P(new v(t[i],t[i + 1]), new v(t[(i + 2) % s],t[(i + 3) % s]));
        return -e / 2
    }
    ,
    n.centroidForPoly = function(t) {
        for (var e = 0, i = new v(0,0), s = 0, n = t.length; s < n; s += 2) {
            var r = new v(t[s],t[s + 1])
              , o = new v(t[(s + 2) % n],t[(s + 3) % n])
              , a = P(r, o);
            e += a,
            i = C(i, I(C(r, o), a))
        }
        return I(i, 1 / (3 * e))
    }
    ,
    n.recenterPoly = function(t) {
        for (var e = n.centroidForPoly(t), i = 0; i < t.length; i += 2)
            t[i] -= e.x,
            t[i + 1] -= e.y
    }
    ,
    n.momentForBox = function(t, e, i) {
        return t * (e * e + i * i) / 12
    }
    ,
    n.momentForBox2 = function(t, e) {
        var i = e.r - e.l
          , s = e.t - e.b
          , e = I([e.l + e.r, e.b + e.t], .5);
        return n.momentForBox(t, i, s) + t * B(e)
    }
    ;
    var a = n.loopIndexes = function(t) {
        for (var e, i, s = 0, n = 0, r = e = t[0], o = i = t[1], a = t.length >> 1, h = 1; h < a; h++) {
            var c = t[2 * h]
              , l = t[2 * h + 1];
            c < r || c == r && l < o ? (r = c,
            o = l,
            s = h) : (e < c || c == e && i < l) && (e = c,
            i = l,
            n = h)
        }
        return [s, n]
    }
      , u = function(t, e, i, s, n, r, o, a) {
        if (s < 0)
            return 0;
        if (0 == s)
            return e[2 * a] = r.x,
            e[2 * a + 1] = r.y,
            1;
        var h = l(e, i, s, n, r, t)
          , c = new v(e[2 * i],e[2 * i + 1])
          , n = u(t, e, i + 1, h - 1, n, c, r, a)
          , c = a + n++;
        e[2 * c] = r.x,
        e[2 * c + 1] = r.y;
        c = l(e, i + h, s - h, r, o, t),
        s = new v(e[2 * (i + h)],e[2 * (i + h) + 1]);
        return n + u(t, e, i + h + 1, c - 1, r, s, o, a + n)
    };
    function m(t, e, i) {
        return T(A(t, e), i)
    }
    n.convexHull = function(t, e, i) {
        if (e)
            for (var s = 0; s < t.length; s++)
                e[s] = t[s];
        else
            e = t;
        var n = a(t)
          , r = n[0]
          , o = n[1];
        if (r == o)
            return e.length = 2,
            e;
        d(e, 0, r),
        d(e, 1, 0 == o ? r : o);
        n = new v(e[0],e[1]),
        r = new v(e[2],e[3]),
        o = t.length >> 1,
        n = u(i, e, 2, o - 2, n, r, n, 1) + 1;
        return e.length = 2 * n,
        g(H(e), "Internal error: cpConvexHull() and cpPolyValidate() did not agree.Please report this error with as much info as you can."),
        e
    }
    ;
    var _ = function(t) {
        return A(0, T(t, 1))
    }
      , v = n.Vect = function(t, e) {
        this.x = t,
        this.y = e
    }
    ;
    n.v = function(t, e) {
        return new v(t,e)
    }
    ;
    var b = n.vzero = new v(0,0)
      , w = n.v.dot = function(t, e) {
        return t.x * e.x + t.y * e.y
    }
      , x = function(t, e, i, s) {
        return t * i + e * s
    }
      , S = n.v.len = function(t) {
        return Math.sqrt(w(t, t))
    }
      , r = n.v.len2 = function(t, e) {
        return Math.sqrt(t * t + e * e)
    }
      , C = (n.v.eql = function(t, e) {
        return t.x === e.x && t.y === e.y
    }
    ,
    n.v.add = function(t, e) {
        return new v(t.x + e.x,t.y + e.y)
    }
    );
    v.prototype.add = function(t) {
        return this.x += t.x,
        this.y += t.y,
        this
    }
    ;
    var k = n.v.sub = function(t, e) {
        return new v(t.x - e.x,t.y - e.y)
    }
    ;
    v.prototype.sub = function(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this
    }
    ;
    var O = n.v.neg = function(t) {
        return new v(-t.x,-t.y)
    }
    ;
    v.prototype.neg = function() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    ;
    var I = n.v.mult = function(t, e) {
        return new v(t.x * e,t.y * e)
    }
    ;
    v.prototype.mult = function(t) {
        return this.x *= t,
        this.y *= t,
        this
    }
    ;
    var P = n.v.cross = function(t, e) {
        return t.x * e.y - t.y * e.x
    }
      , E = function(t, e, i, s) {
        return t * s - e * i
    }
      , c = n.v.perp = function(t) {
        return new v(-t.y,t.x)
    }
      , i = (n.v.pvrperp = function(t) {
        return new v(t.y,-t.x)
    }
    ,
    n.v.project = function(t, e) {
        return I(e, w(t, e) / B(e))
    }
    );
    v.prototype.project = function(t) {
        return this.mult(w(this, t) / B(t)),
        this
    }
    ;
    var h = n.v.rotate = function(t, e) {
        return new v(t.x * e.x - t.y * e.y,t.x * e.y + t.y * e.x)
    }
    ;
    v.prototype.rotate = function(t) {
        return this.x = this.x * t.x - this.y * t.y,
        this.y = this.x * t.y + this.y * t.x,
        this
    }
    ;
    var e = n.v.unrotate = function(t, e) {
        return new v(t.x * e.x + t.y * e.y,t.y * e.x - t.x * e.y)
    }
      , B = n.v.lengthsq = function(t) {
        return w(t, t)
    }
      , R = n.v.lengthsq2 = function(t, e) {
        return t * t + e * e
    }
      , p = n.v.lerp = function(t, e, i) {
        return C(I(t, 1 - i), I(e, i))
    }
      , L = n.v.normalize = function(t) {
        return I(t, 1 / S(t))
    }
      , M = n.v.normalize_safe = function(t) {
        return 0 === t.x && 0 === t.y ? b : L(t)
    }
      , j = n.v.clamp = function(t, e) {
        return w(t, t) > e * e ? I(L(t), e) : t
    }
      , N = (n.v.lerpconst = function(t, e, i) {
        return C(t, j(k(e, t), i))
    }
    ,
    n.v.dist = function(t, e) {
        return S(k(t, e))
    }
    )
      , F = n.v.distsq = function(t, e) {
        return B(k(t, e))
    }
      , D = (n.v.near = function(t, e, i) {
        return F(t, e) < i * i
    }
    ,
    n.v.slerp = function(t, e, i) {
        var s = Math.acos(w(t, e));
        if (s) {
            var n = 1 / Math.sin(s);
            return C(I(t, Math.sin((1 - i) * s) * n), I(e, Math.sin(i * s) * n))
        }
        return t
    }
    )
      , V = (n.v.slerpconst = function(t, e, i) {
        var s = Math.acos(w(t, e));
        return D(t, e, T(i, s) / s)
    }
    ,
    n.v.forangle = function(t) {
        return new v(Math.cos(t),Math.sin(t))
    }
    ,
    n.v.toangle = function(t) {
        return Math.atan2(t.y, t.x)
    }
    ,
    n.v.str = function(t) {
        return "(" + t.x.toFixed(3) + ", " + t.y.toFixed(3) + ")"
    }
    ,
    n.BB = function(t, e, i, s) {
        this.l = t,
        this.b = e,
        this.r = i,
        this.t = s,
        0
    }
    );
    function W(t, e) {
        return new V(t.x - e,t.y - e,t.x + e,t.y + e)
    }
    n.bb = function(t, e, i, s) {
        return new V(t,e,i,s)
    }
    ;
    var s = 0;
    n.NO_GROUP = 0,
    n.ALL_LAYERS = -1,
    n.resetShapeIdCounter = function() {
        s = 0
    }
    ;
    var z = n.Shape = function(t) {
        this.body = t,
        this.bb_l = this.bb_b = this.bb_r = this.bb_t = 0,
        this.hashid = s++,
        this.sensor = !1,
        this.e = 0,
        this.u = 0,
        this.surface_v = b,
        this.collision_type = 0,
        this.group = 0,
        this.layers = -1,
        this.space = null,
        this.isAdded = !1,
        this.collisionCode = this.collisionCode
    }
    ;
    z.prototype.setElasticity = function(t) {
        this.e = t
    }
    ,
    z.prototype.setFriction = function(t) {
        this.body.activate(),
        this.u = t
    }
    ,
    z.prototype.setLayers = function(t) {
        this.body.activate(),
        this.layers = t
    }
    ,
    z.prototype.setSensor = function(t) {
        this.body.activate(),
        this.sensor = t
    }
    ,
    z.prototype.setCollisionType = function(t) {
        this.body.activate(),
        this.collision_type = t
    }
    ,
    z.prototype.getBody = function() {
        return this.body
    }
    ,
    z.prototype.active = function() {
        return this.body && -1 !== this.body.shapeList.indexOf(this)
    }
    ,
    z.prototype.setBody = function(t) {
        y(!this.active(), "You cannot change the body on an active shape. You must remove the shape from the space before changing the body."),
        this.body = t
    }
    ,
    z.prototype.cacheBB = function() {
        return this.update(this.body.p, this.body.rot)
    }
    ,
    z.prototype.update = function(t, e) {
        y(!isNaN(e.x), "Rotation is NaN"),
        y(!isNaN(t.x), "Position is NaN"),
        this.cacheData(t, e)
    }
    ,
    z.prototype.pointQuery = function(t) {
        t = this.nearestPointQuery(t);
        if (t.d < 0)
            return t
    }
    ,
    z.prototype.getBB = function() {
        return new V(this.bb_l,this.bb_b,this.bb_r,this.bb_t)
    }
    ;
    var G = n.NearestPointQueryInfo = function(t, e, i) {
        this.shape = t,
        this.p = e,
        this.d = i
    }
      , U = n.SegmentQueryInfo = function(t, e, i) {
        this.shape = t,
        this.t = e,
        this.n = i
    }
    ;
    U.prototype.hitPoint = function(t, e) {
        return p(t, e, this.t)
    }
    ,
    U.prototype.hitDist = function(t, e) {
        return N(t, e) * this.t
    }
    ;
    var t = n.CircleShape = function(t, e, i) {
        this.c = this.tc = i,
        this.r = e,
        this.type = "circle",
        z.call(this, t)
    }
    ;
    function q(t, e, i, s, n, r) {
        s = k(s, e),
        n = k(n, e);
        var o = w(s, s) - 2 * w(s, n) + w(n, n)
          , e = -2 * w(s, s) + 2 * w(s, n);
        if (0 <= (i = e * e - 4 * o * (w(s, s) - i * i))) {
            o = (-e - Math.sqrt(i)) / (2 * o);
            if (0 <= o && o <= 1)
                return new U(t,o,L(p(s, n, o)))
        }
    }
    t.prototype = Object.create(z.prototype),
    t.prototype.cacheData = function(t, e) {
        e = this.tc = h(this.c, e).add(t),
        t = this.r;
        this.bb_l = e.x - t,
        this.bb_b = e.y - t,
        this.bb_r = e.x + t,
        this.bb_t = e.y + t
    }
    ,
    t.prototype.nearestPointQuery = function(t) {
        var e = t.x - this.tc.x
          , i = t.y - this.tc.y
          , s = r(e, i)
          , t = this.r
          , i = new v(this.tc.x + e * t / s,this.tc.y + i * t / s);
        return new G(this,i,s - t)
    }
    ,
    t.prototype.segmentQuery = function(t, e) {
        return q(this, this.tc, this.r, t, e)
    }
    ;
    var X = n.SegmentShape = function(t, e, i, s) {
        this.a = e,
        this.b = i,
        this.n = c(L(k(i, e))),
        this.ta = this.tb = this.tn = null,
        this.r = s,
        this.a_tangent = b,
        this.b_tangent = b,
        this.type = "segment",
        z.call(this, t)
    }
    ;
    X.prototype = Object.create(z.prototype),
    X.prototype.cacheData = function(t, e) {
        var i, s, n;
        this.ta = C(t, h(this.a, e)),
        this.tb = C(t, h(this.b, e)),
        this.tn = h(this.n, e),
        s = this.ta.x < this.tb.x ? (i = this.ta.x,
        this.tb.x) : (i = this.tb.x,
        this.ta.x),
        t = this.ta.y < this.tb.y ? (n = this.ta.y,
        this.tb.y) : (n = this.tb.y,
        this.ta.y);
        e = this.r;
        this.bb_l = i - e,
        this.bb_b = n - e,
        this.bb_r = s + e,
        this.bb_t = t + e
    }
    ,
    X.prototype.nearestPointQuery = function(t) {
        var e = function(t, e, i) {
            e = k(e, i),
            t = _(w(e, k(t, i)) / B(e));
            return C(i, I(e, t))
        }(t, this.ta, this.tb)
          , i = t.x - e.x
          , s = t.y - e.y
          , n = r(i, s)
          , t = this.r
          , e = n ? C(e, I(new v(i,s), t / n)) : e;
        return new G(this,e,n - t)
    }
    ,
    X.prototype.segmentQuery = function(t, e) {
        var i = this.tn
          , s = w(k(this.ta, t), i)
          , n = this.r
          , r = 0 < s ? O(i) : i
          , o = k(I(r, n), t)
          , a = C(this.ta, o)
          , h = C(this.tb, o)
          , o = k(e, t);
        if (P(o, a) * P(o, h) <= 0) {
            h = s + (0 < s ? -n : n),
            s = -h,
            h = w(o, i) - h;
            if (s * h < 0)
                return new U(this,s / (s - h),r)
        } else if (0 !== n) {
            n = q(this, this.ta, this.r, t, e),
            e = q(this, this.tb, this.r, t, e);
            return !n || e && e.t < n.t ? e : n
        }
    }
    ,
    X.prototype.setNeighbors = function(t, e) {
        this.a_tangent = k(t, this.a),
        this.b_tangent = k(e, this.b)
    }
    ,
    X.prototype.setEndpoints = function(t, e) {
        this.a = t,
        this.b = e,
        this.n = c(L(k(e, t)))
    }
    ;
    var H = cr.polyValidate = function(t) {
        for (var e = t.length, i = 0; i < e; i += 2) {
            var s = t[i]
              , n = t[i + 1]
              , r = t[(i + 2) % e]
              , o = t[(i + 3) % e]
              , a = t[(i + 4) % e]
              , h = t[(i + 5) % e];
            if (0 < E(r - s, o - n, a - r, h - o))
                return !1
        }
        return !0
    }
      , Y = n.PolyShape = function(t, e, i) {
        this.setVerts(e, i),
        this.type = "poly",
        z.call(this, t)
    }
    ;
    function J(t, e) {
        this.n = t,
        this.d = e
    }
    Y.prototype = Object.create(z.prototype),
    J.prototype.compare = function(t) {
        return w(this.n, t) - this.d
    }
    ,
    Y.prototype.setVerts = function(t, e) {
        y(4 <= t.length, "Polygons require some verts"),
        y("number" == typeof t[0], "Polygon verticies should be specified in a flattened list (eg [x1,y1,x2,y2,x3,y3,...])"),
        y(H(t), "Polygon is concave or has a reversed winding. Consider using cpConvexHull()");
        var i = t.length
          , s = i >> 1;
        this.verts = new Array(i),
        this.tVerts = new Array(i),
        this.planes = new Array(s),
        this.tPlanes = new Array(s);
        for (var n = 0; n < i; n += 2) {
            var r = t[n] + e.x
              , o = t[n + 1] + e.y
              , a = t[(n + 2) % i] + e.x
              , h = t[(n + 3) % i] + e.y
              , h = L(c(new v(a - r,h - o)));
            this.verts[n] = r,
            this.verts[n + 1] = o,
            this.planes[n >> 1] = new J(h,x(h.x, h.y, r, o)),
            this.tPlanes[n >> 1] = new J(new v(0,0),0)
        }
    }
    ,
    n.BoxShape = function(t, e, i) {
        e /= 2,
        i /= 2;
        return K(t, new V(-e,-i,e,i))
    }
    ;
    var K = n.BoxShape2 = function(t, e) {
        e = [e.l, e.b, e.l, e.t, e.r, e.t, e.r, e.b];
        return new Y(t,e,b)
    }
    ;
    Y.prototype.transformVerts = function(t, e) {
        for (var i = this.verts, s = this.tVerts, n = 1 / 0, r = -1 / 0, o = 1 / 0, a = -1 / 0, h = 0; h < i.length; h += 2) {
            var c = i[h]
              , l = i[h + 1]
              , u = t.x + c * e.x - l * e.y
              , l = t.y + c * e.y + l * e.x;
            s[h] = u,
            s[h + 1] = l,
            n = T(n, u),
            r = A(r, u),
            o = T(o, l),
            a = A(a, l)
        }
        this.bb_l = n,
        this.bb_b = o,
        this.bb_r = r,
        this.bb_t = a
    }
    ,
    Y.prototype.transformAxes = function(t, e) {
        for (var i = this.planes, s = this.tPlanes, n = 0; n < i.length; n++) {
            var r = h(i[n].n, e);
            s[n].n = r,
            s[n].d = w(t, r) + i[n].d
        }
    }
    ,
    Y.prototype.cacheData = function(t, e) {
        this.transformAxes(t, e),
        this.transformVerts(t, e)
    }
    ,
    Y.prototype.nearestPointQuery = function(t) {
        for (var e = this.tPlanes, i = this.tVerts, s = i[i.length - 2], n = i[i.length - 1], r = 1 / 0, o = b, a = !1, h = 0; h < e.length; h++) {
            0 < e[h].compare(t) && (a = !0);
            var c = i[2 * h]
              , l = i[2 * h + 1]
              , u = function(t, e, i, s, n, r) {
                i -= n,
                s -= r,
                e = _(x(i, s, t - n, e - r) / R(i, s));
                return new v(n + i * e,r + s * e)
            }(t.x, t.y, s, n, c, l)
              , p = N(t, u);
            p < r && (r = p,
            o = u),
            s = c,
            n = l
        }
        return new G(this,o,a ? r : -r)
    }
    ,
    Y.prototype.segmentQuery = function(t, e) {
        for (var i = this.tPlanes, s = this.tVerts, n = i.length, r = 2 * n, o = 0; o < n; o++) {
            var a = i[o].n
              , h = w(t, a);
            if (!(i[o].d > h)) {
                var c = w(e, a)
                  , l = (i[o].d - h) / (c - h);
                if (!(l < 0 || 1 < l)) {
                    var u = p(t, e, l)
                      , c = -P(a, u)
                      , h = -E(a.x, a.y, s[2 * o], s[2 * o + 1])
                      , u = -E(a.x, a.y, s[(2 * o + 2) % r], s[(2 * o + 3) % r]);
                    if (h <= c && c <= u)
                        return new U(this,l,a)
                }
            }
        }
    }
    ,
    Y.prototype.valueOnAxis = function(t, e) {
        for (var i = this.tVerts, s = x(t.x, t.y, i[0], i[1]), n = 2; n < i.length; n += 2)
            s = T(s, x(t.x, t.y, i[n], i[n + 1]));
        return s - e
    }
    ,
    Y.prototype.containsVert = function(t, e) {
        for (var i = this.tPlanes, s = 0; s < i.length; s++) {
            var n = i[s].n;
            if (0 < x(n.x, n.y, t, e) - i[s].d)
                return !1
        }
        return !0
    }
    ,
    Y.prototype.containsVertPartial = function(t, e, i) {
        for (var s = this.tPlanes, n = 0; n < s.length; n++) {
            var r = s[n].n;
            if (!(w(r, i) < 0))
                if (0 < x(r.x, r.y, t, e) - s[n].d)
                    return !1
        }
        return !0
    }
    ,
    Y.prototype.getNumVerts = function() {
        return this.verts.length / 2
    }
    ,
    Y.prototype.getVert = function(t) {
        return new v(this.verts[2 * t],this.verts[2 * t + 1])
    }
    ;
    var Q, Z = n.Body = function(t, e) {
        this.p = new v(0,0),
        this.vx = this.vy = 0,
        this.f = new v(0,0),
        this.w = 0,
        this.t = 0,
        this.v_limit = 1 / 0,
        this.w_limit = 1 / 0,
        this.v_biasx = this.v_biasy = 0,
        this.w_bias = 0,
        this.space = null,
        this.isAdded = !1,
        this.shapeList = [],
        this.arbiterList = null,
        this.constraintList = null,
        this.nodeRoot = null,
        this.nodeNext = null,
        this.nodeIdleTime = 0,
        this.setMass(t),
        this.setMoment(e),
        this.rot = new v(0,0),
        this.setAngle(0)
    }
    ;
    "undefined" != typeof DEBUG && DEBUG ? (Q = function(t, e) {
        var i, s;
        s = e,
        y((i = t).x == i.x && i.y == i.y, s),
        t = t,
        e = e,
        y(Math.abs(t.x) !== 1 / 0 && Math.abs(t.y) !== 1 / 0, e)
    }
    ,
    Z.prototype.sanityCheck = function() {
        y(this.m == this.m && this.m_inv == this.m_inv, "Body's mass is invalid."),
        y(this.i == this.i && this.i_inv == this.i_inv, "Body's moment is invalid."),
        Q(this.p, "Body's position is invalid."),
        Q(this.f, "Body's force is invalid."),
        y(this.vx == this.vx && Math.abs(this.vx) !== 1 / 0, "Body's velocity is invalid."),
        y(this.vy == this.vy && Math.abs(this.vy) !== 1 / 0, "Body's velocity is invalid."),
        y(this.a == this.a && Math.abs(this.a) !== 1 / 0, "Body's angle is invalid."),
        y(this.w == this.w && Math.abs(this.w) !== 1 / 0, "Body's angular velocity is invalid."),
        y(this.t == this.t && Math.abs(this.t) !== 1 / 0, "Body's torque is invalid."),
        Q(this.rot, "Body's rotation vector is invalid."),
        y(this.v_limit == this.v_limit, "Body's velocity limit is invalid."),
        y(this.w_limit == this.w_limit, "Body's angular velocity limit is invalid.")
    }
    ) : Z.prototype.sanityCheck = function() {}
    ,
    Z.prototype.getPos = function() {
        return this.p
    }
    ,
    Z.prototype.getAngle = function() {
        return n.v.toangle(this.rot)
    }
    ,
    Z.prototype.getVel = function() {
        return new v(this.vx,this.vy)
    }
    ,
    Z.prototype.getAngVel = function() {
        return this.w
    }
    ,
    Z.prototype.isSleeping = function() {
        return null !== this.nodeRoot
    }
    ,
    Z.prototype.isStatic = function() {
        return this.nodeIdleTime === 1 / 0
    }
    ,
    Z.prototype.isRogue = function() {
        return null === this.space
    }
    ,
    Z.prototype.setMass = function(t) {
        y(0 < t, "Mass must be positive and non-zero."),
        this.activate(),
        this.m = t,
        this.m_inv = 1 / t
    }
    ,
    Z.prototype.setMoment = function(t) {
        y(0 < t, "Moment of Inertia must be positive and non-zero."),
        this.activate(),
        this.i = t,
        this.i_inv = 1 / t
    }
    ,
    Z.prototype.addShape = function(t) {
        this.shapeList.push(t)
    }
    ,
    Z.prototype.removeShape = function(t) {
        o(this.shapeList, t)
    }
    ;
    var $ = function(t, e, i) {
        return t === i ? t.next(e) : (t.a === e ? t.next_a = $(t.next_a, e, i) : t.next_b = $(t.next_b, e, i),
        t)
    };
    Z.prototype.removeConstraint = function(t) {
        this.constraintList = $(this.constraintList, this, t)
    }
    ,
    Z.prototype.setPos = function(t) {
        this.activate(),
        this.sanityCheck(),
        t === b && (t = n.v(0, 0)),
        this.p = t
    }
    ,
    Z.prototype.setVel = function(t) {
        this.activate(),
        this.vx = t.x,
        this.vy = t.y
    }
    ,
    Z.prototype.setAngVel = function(t) {
        this.activate(),
        this.w = t
    }
    ,
    Z.prototype.setAngleInternal = function(t) {
        y(!isNaN(t), "Internal Error: Attempting to set body's angle to NaN"),
        this.a = t,
        this.rot.x = Math.cos(t),
        this.rot.y = Math.sin(t)
    }
    ,
    Z.prototype.setAngle = function(t) {
        this.activate(),
        this.sanityCheck(),
        this.setAngleInternal(t)
    }
    ,
    Z.prototype.velocity_func = function(t, e, i) {
        var s = this.vx * e + (t.x + this.f.x * this.m_inv) * i
          , n = this.vy * e + (t.y + this.f.y * this.m_inv) * i
          , r = this.v_limit
          , t = s * s + n * n
          , t = r * r < t ? r / Math.sqrt(t) : 1;
        this.vx = s * t,
        this.vy = n * t;
        t = this.w_limit;
        this.w = m(this.w * e + this.t * this.i_inv * i, -t, t),
        this.sanityCheck()
    }
    ,
    Z.prototype.position_func = function(t) {
        this.p.x += (this.vx + this.v_biasx) * t,
        this.p.y += (this.vy + this.v_biasy) * t,
        this.setAngleInternal(this.a + (this.w + this.w_bias) * t),
        this.v_biasx = this.v_biasy = 0,
        this.w_bias = 0,
        this.sanityCheck()
    }
    ,
    Z.prototype.resetForces = function() {
        this.activate(),
        this.f = new v(0,0),
        this.t = 0
    }
    ,
    Z.prototype.applyForce = function(t, e) {
        this.activate(),
        this.f = C(this.f, t),
        this.t += P(e, t)
    }
    ,
    Z.prototype.applyImpulse = function(t, e) {
        this.activate(),
        qt(this, t.x, t.y, e)
    }
    ,
    Z.prototype.getVelAtPoint = function(t) {
        return C(new v(this.vx,this.vy), I(c(t), this.w))
    }
    ,
    Z.prototype.getVelAtWorldPoint = function(t) {
        return this.getVelAtPoint(k(t, this.p))
    }
    ,
    Z.prototype.getVelAtLocalPoint = function(t) {
        return this.getVelAtPoint(h(t, this.rot))
    }
    ,
    Z.prototype.eachShape = function(t) {
        for (var e = 0, i = this.shapeList.length; e < i; e++)
            t(this.shapeList[e])
    }
    ,
    Z.prototype.eachConstraint = function(t) {
        for (var e = this.constraintList; e; ) {
            var i = e.next(this);
            t(e),
            e = i
        }
    }
    ,
    Z.prototype.eachArbiter = function(t) {
        for (var e = this.arbiterList; e; ) {
            var i = e.next(this);
            e.swappedColl = this === e.body_b,
            t.call(this, e),
            e = i
        }
    }
    ,
    Z.prototype.local2World = function(t) {
        return C(this.p, h(t, this.rot))
    }
    ,
    Z.prototype.world2Local = function(t) {
        return e(k(t, this.p), this.rot)
    }
    ,
    Z.prototype.kineticEnergy = function() {
        var t = this.vx * this.vx + this.vy * this.vy
          , e = this.w * this.w;
        return (t ? t * this.m : 0) + (e ? e * this.i : 0)
    }
    ;
    var tt = n.SpatialIndex = function(t) {
        if (this.staticIndex = t) {
            if (t.dynamicIndex)
                throw new Error("This static index is already associated with a dynamic index.");
            t.dynamicIndex = this
        }
    }
    ;
    tt.prototype.collideStatic = function(t, e) {
        var i;
        0 < t.count && (i = t.query,
        this.each(function(t) {
            i(t, new V(t.bb_l,t.bb_b,t.bb_r,t.bb_t), e)
        }))
    }
    ;
    var et = n.BBTree = function(t) {
        tt.call(this, t),
        this.velocityFunc = null,
        this.leaves = {},
        this.count = 0,
        this.root = null,
        this.pooledNodes = null,
        this.pooledPairs = null,
        this.stamp = 0
    }
    ;
    function it(t, e, i) {
        this.obj = null,
        this.bb_l = T(e.bb_l, i.bb_l),
        this.bb_b = T(e.bb_b, i.bb_b),
        this.bb_r = A(e.bb_r, i.bb_r),
        this.bb_t = A(e.bb_t, i.bb_t),
        this.parent = null,
        this.setA(e),
        this.setB(i)
    }
    function st(t, e) {
        this.obj = e,
        t.getBB(e, this),
        this.parent = null,
        this.stamp = 1,
        this.pairs = null
    }
    function nt(t, e, i, s) {
        this.prevA = null,
        this.leafA = t,
        this.nextA = e,
        this.prevB = null,
        this.leafB = i,
        this.nextB = s
    }
    function rt(t, e, i) {
        i && (i.leafA === e ? i.prevA = t : i.prevB = t),
        t ? t.leafA === e ? t.nextA = i : t.nextB = i : e.pairs = i
    }
    function ot(t, e, i) {
        var s = t.pairs
          , n = e.pairs
          , i = i.makePair(t, s, e, n);
        t.pairs = e.pairs = i,
        s && (s.leafA === t ? s.prevA = i : s.prevB = i),
        n && (n.leafA === e ? n.prevA = i : n.prevB = i)
    }
    function at(t, e) {
        return (A(t.bb_r, e.bb_r) - T(t.bb_l, e.bb_l)) * (A(t.bb_t, e.bb_t) - T(t.bb_b, e.bb_b))
    }
    function ht(t, e) {
        return Math.abs(t.bb_l + t.bb_r - e.bb_l - e.bb_r) + Math.abs(t.bb_b + t.bb_t - e.bb_b - e.bb_t)
    }
    et.prototype = Object.create(tt.prototype),
    et.prototype.makeNode = function(t, e) {
        var i = this.pooledNodes;
        return i ? (this.pooledNodes = i.parent,
        i.constructor(this, t, e),
        i) : new it(0,t,e)
    }
    ,
    et.prototype.getBB = function(t, e) {
        var i, s, n = this.velocityFunc;
        n ? (i = .1 * (t.bb_r - t.bb_l),
        s = .1 * (t.bb_t - t.bb_b),
        n = I(n(t), .1),
        e.bb_l = t.bb_l + T(-i, n.x),
        e.bb_b = t.bb_b + T(-s, n.y),
        e.bb_r = t.bb_r + A(i, n.x),
        e.bb_t = t.bb_t + A(s, n.y)) : (e.bb_l = t.bb_l,
        e.bb_b = t.bb_b,
        e.bb_r = t.bb_r,
        e.bb_t = t.bb_t)
    }
    ,
    et.prototype.getStamp = function() {
        var t = this.dynamicIndex;
        return (t && t.stamp ? t : this).stamp
    }
    ,
    et.prototype.incrementStamp = function() {
        this.dynamicIndex && this.dynamicIndex.stamp ? this.dynamicIndex.stamp++ : this.stamp++
    }
    ,
    et.prototype.makePair = function(t, e, i, s) {
        var n = this.pooledPairs;
        return n ? (this.pooledPairs = n.prevA,
        n.prevA = null,
        n.leafA = t,
        n.nextA = e,
        n.prevB = null,
        n.leafB = i,
        n.nextB = s,
        n) : new nt(t,e,i,s)
    }
    ,
    nt.prototype.recycle = function(t) {
        this.prevA = t.pooledPairs,
        t.pooledPairs = this
    }
    ,
    st.prototype.clearPairs = function(t) {
        var e, i = this.pairs;
        for (this.pairs = null; i; )
            i.leafA === this ? (e = i.nextA,
            rt(i.prevB, i.leafB, i.nextB)) : (e = i.nextB,
            rt(i.prevA, i.leafA, i.nextA)),
            i.recycle(t),
            i = e
    }
    ,
    it.prototype.recycle = function(t) {
        this.parent = t.pooledNodes,
        t.pooledNodes = this
    }
    ,
    st.prototype.recycle = function(t) {}
    ,
    it.prototype.setA = function(t) {
        (this.A = t).parent = this
    }
    ,
    it.prototype.setB = function(t) {
        (this.B = t).parent = this
    }
    ,
    it.prototype.isLeaf = !(st.prototype.isLeaf = !0),
    it.prototype.otherChild = function(t) {
        return this.A == t ? this.B : this.A
    }
    ,
    it.prototype.replaceChild = function(t, e, i) {
        g(t == this.A || t == this.B, "Node is not a child of parent."),
        this.A == t ? (this.A.recycle(i),
        this.setA(e)) : (this.B.recycle(i),
        this.setB(e));
        for (var s = this; s; s = s.parent) {
            var n = s.A
              , r = s.B;
            s.bb_l = T(n.bb_l, r.bb_l),
            s.bb_b = T(n.bb_b, r.bb_b),
            s.bb_r = A(n.bb_r, r.bb_r),
            s.bb_t = A(n.bb_t, r.bb_t)
        }
    }
    ,
    it.prototype.bbArea = st.prototype.bbArea = function() {
        return (this.bb_r - this.bb_l) * (this.bb_t - this.bb_b)
    }
    ;
    var ct = function(t, e, i) {
        if (null == t)
            return e;
        if (t.isLeaf)
            return i.makeNode(e, t);
        var s = t.B.bbArea() + at(t.A, e)
          , n = t.A.bbArea() + at(t.B, e);
        return s === n && (s = ht(t.A, e),
        n = ht(t.B, e)),
        n < s ? t.setB(ct(t.B, e, i)) : t.setA(ct(t.A, e, i)),
        t.bb_l = T(t.bb_l, e.bb_l),
        t.bb_b = T(t.bb_b, e.bb_b),
        t.bb_r = A(t.bb_r, e.bb_r),
        t.bb_t = A(t.bb_t, e.bb_t),
        t
    };
    function lt(t, e, i) {
        var s = 1 / (i.x - e.x)
          , n = (t.bb_l - e.x) * s
          , r = (t.bb_r - e.x) * s
          , s = T(n, r)
          , n = A(n, r)
          , r = 1 / (i.y - e.y)
          , i = (t.bb_b - e.y) * r
          , e = (t.bb_t - e.y) * r
          , r = T(i, e)
          , e = A(i, e);
        if (r <= n && s <= e) {
            r = A(s, r);
            if (0 <= T(n, e) && r <= 1)
                return A(r, 0)
        }
        return 1 / 0
    }
    it.prototype.intersectsBB = st.prototype.intersectsBB = function(t) {
        return this.bb_l <= t.r && t.l <= this.bb_r && this.bb_b <= t.t && t.b <= this.bb_t
    }
    ;
    var ut = function(t, e, i) {
        t.intersectsBB(e) && (t.isLeaf ? i(t.obj) : (ut(t.A, e, i),
        ut(t.B, e, i)))
    }
      , pt = function(t, e, i, s, n) {
        if (t.isLeaf)
            return n(t.obj);
        var r = lt(t.A, e, i)
          , o = lt(t.B, e, i);
        return r < o ? (r < s && (s = T(s, pt(t.A, e, i, s, n))),
        o < s && (s = T(s, pt(t.B, e, i, s, n)))) : (o < s && (s = T(s, pt(t.B, e, i, s, n))),
        r < s && (s = T(s, pt(t.A, e, i, s, n)))),
        s
    };
    function dt(t, e, i) {
        if (e == t)
            return null;
        var s = e.parent;
        return s != t ? (s.parent.replaceChild(s, s.otherChild(e), i),
        t) : ((e = t.otherChild(e)).parent = t.parent,
        t.recycle(i),
        e)
    }
    function ft(t, e) {
        return t.bb_l <= e.bb_r && e.bb_l <= t.bb_r && t.bb_b <= e.bb_t && e.bb_b <= t.bb_t
    }
    function yt(t, e) {}
    function gt(t, e, i, s, n) {
        return (A(t.bb_r, s) - T(t.bb_l, e)) * (A(t.bb_t, n) - T(t.bb_b, i))
    }
    et.prototype.subtreeRecycle = function(t) {
        t.isLeaf && (this.subtreeRecycle(t.A),
        this.subtreeRecycle(t.B),
        t.recycle(this))
    }
    ,
    st.prototype.markLeafQuery = function(t, e, i, s) {
        ft(t, this) && (e ? ot(t, this, i) : (this.stamp < t.stamp && ot(this, t, i),
        s && s(t.obj, this.obj)))
    }
    ,
    it.prototype.markLeafQuery = function(t, e, i, s) {
        ft(t, this) && (this.A.markLeafQuery(t, e, i, s),
        this.B.markLeafQuery(t, e, i, s))
    }
    ,
    st.prototype.markSubtree = function(t, e, i) {
        if (this.stamp == t.getStamp()) {
            e && e.markLeafQuery(this, !1, t, i);
            for (var s = this; s.parent; s = s.parent)
                s == s.parent.A ? s.parent.B.markLeafQuery(this, !0, t, i) : s.parent.A.markLeafQuery(this, !1, t, i)
        } else
            for (var n = this.pairs; n; )
                n = this === n.leafB ? (i && i(n.leafA.obj, this.obj),
                n.nextB) : n.nextA
    }
    ,
    it.prototype.markSubtree = function(t, e, i) {
        this.A.markSubtree(t, e, i),
        this.B.markSubtree(t, e, i)
    }
    ,
    st.prototype.containsObj = function(t) {
        return this.bb_l <= t.bb_l && this.bb_r >= t.bb_r && this.bb_b <= t.bb_b && this.bb_t >= t.bb_t
    }
    ,
    st.prototype.update = function(t) {
        var e = t.root
          , i = this.obj;
        return !this.containsObj(i) && (t.getBB(this.obj, this),
        e = dt(e, this, t),
        t.root = ct(e, this, t),
        this.clearPairs(t),
        this.stamp = t.getStamp(),
        !0)
    }
    ,
    st.prototype.addPairs = function(t) {
        var e, i = t.dynamicIndex;
        i ? (e = i.root) && e.markLeafQuery(this, !0, i, null) : (i = t.staticIndex.root,
        this.markSubtree(t, i, null))
    }
    ,
    et.prototype.insert = function(t, e) {
        t = new st(this,t);
        this.leaves[e] = t,
        this.root = ct(this.root, t, this),
        this.count++,
        t.stamp = this.getStamp(),
        t.addPairs(this),
        this.incrementStamp()
    }
    ,
    et.prototype.remove = function(t, e) {
        var i = this.leaves[e];
        delete this.leaves[e],
        this.root = dt(this.root, i, this),
        this.count--,
        i.clearPairs(this),
        i.recycle(this)
    }
    ,
    et.prototype.contains = function(t, e) {
        return null != this.leaves[e]
    }
    ,
    et.prototype.reindexQuery = function(t) {
        if (this.root) {
            var e, i = this.leaves;
            for (e in i)
                i[e].update(this);
            var s = this.staticIndex
              , n = s && s.root;
            this.root.markSubtree(this, n, t),
            s && !n && this.collideStatic(this, s, t),
            this.incrementStamp()
        }
    }
    ,
    et.prototype.reindex = function() {
        this.reindexQuery(yt)
    }
    ,
    et.prototype.reindexObject = function(t, e) {
        e = this.leaves[e];
        e && (e.update(this) && e.addPairs(this),
        this.incrementStamp())
    }
    ,
    et.prototype.pointQuery = function(t, e) {
        this.query(new V(t.x,t.y,t.x,t.y), e)
    }
    ,
    et.prototype.segmentQuery = function(t, e, i, s) {
        this.root && pt(this.root, t, e, i, s)
    }
    ,
    et.prototype.query = function(t, e) {
        this && this.root && this instanceof n.BBTree && ut(this.root, t, e)
    }
    ,
    et.prototype.count = function() {
        return this.count
    }
    ,
    et.prototype.each = function(t) {
        for (var e in this.leaves)
            t(this.leaves[e].obj)
    }
    ;
    var mt = function(t, e, i, s) {
        if (1 == s)
            return e[i];
        if (2 == s)
            return t.makeNode(e[i], e[i + 1]);
        for (var n = (S = e[i]).bb_l, r = S.bb_b, o = S.bb_r, a = S.bb_t, h = i + s, c = i + 1; c < h; c++)
            S = e[c],
            n = T(n, S.bb_l),
            r = T(r, S.bb_b),
            o = A(o, S.bb_r),
            a = A(a, S.bb_t);
        var l = a - r < o - n
          , u = new Array(2 * s);
        if (l)
            for (c = i; c < h; c++)
                u[2 * c + 0] = e[c].bb_l,
                u[2 * c + 1] = e[c].bb_r;
        else
            for (c = i; c < h; c++)
                u[2 * c + 0] = e[c].bb_b,
                u[2 * c + 1] = e[c].bb_t;
        u.sort(function(t, e) {
            return t - e
        });
        var p = .5 * (u[s - 1] + u[s])
          , d = n
          , f = r
          , y = o
          , g = a
          , m = n
          , _ = r
          , v = o
          , b = a;
        l ? y = m = p : g = _ = p;
        for (var w = h, x = i; x < w; ) {
            var S = e[x];
            gt(S, m, _, v, b) < gt(S, d, f, y, g) ? (w--,
            e[x] = e[w],
            e[w] = S) : x++
        }
        if (w != s)
            return NodeNew(t, mt(t, e, i, w - i), mt(t, e, w, h - w));
        for (S = null,
        c = i; c < h; c++)
            S = ct(S, e[c], t);
        return S
    };
    et.prototype.optimize = function() {
        var t, e = new Array(this.count), i = 0;
        for (t in this.leaves)
            e[i++] = this.nodes[t];
        tree.subtreeRecycle(root),
        this.root = mt(tree, e, e.length)
    }
    ;
    var _t = function(t, e) {
        !t.isLeaf && e <= 10 && (_t(t.A, e + 1),
        _t(t.B, e + 1));
        for (var i = "", s = 0; s < e; s++)
            i += " ";
        console.log(i + t.bb_b + " " + t.bb_t)
    };
    et.prototype.log = function() {
        this.root && _t(this.root, 0)
    }
    ;
    var vt = n.CollisionHandler = function() {
        this.a = this.b = 0
    }
    ;
    function bt(t, e) {
        this.e = 0,
        this.u = 0,
        this.surface_vr = b,
        this.a = t,
        this.body_a = t.body,
        this.b = e,
        this.body_b = e.body,
        this.thread_a_next = this.thread_a_prev = null,
        this.thread_b_next = this.thread_b_prev = null,
        this.contacts = null,
        this.stamp = 0,
        this.handler = null,
        this.swappedColl = !1,
        this.state = "first coll"
    }
    function wt(t, e, i) {
        this.point = t,
        this.normal = e,
        this.dist = i
    }
    function xt(t, e, i, s) {
        i ? i.body_a === e ? i.thread_a_next = s : i.thread_b_next = s : e.arbiterList = s,
        s && (s.body_a === e ? s.thread_a_prev = i : s.thread_b_prev = i)
    }
    function St(t, e, i, s) {
        this.p = t,
        this.n = e,
        this.dist = i,
        this.r1 = this.r2 = b,
        this.nMass = this.tMass = this.bounce = this.bias = 0,
        this.jnAcc = this.jtAcc = this.jBias = 0,
        this.hash = s,
        0
    }
    function Tt(t, e, i, s) {
        var n = i + s
          , s = k(e, t)
          , e = B(s);
        if (!(n * n <= e)) {
            e = Math.sqrt(e);
            return new St(C(t, I(s, .5 + (i - .5 * n) / (e || 1 / 0))),e ? I(s, 1 / e) : new v(1,0),e - n,0)
        }
    }
    function At(t, e) {
        var i = 0
          , s = t.valueOnAxis(e[0].n, e[0].d);
        if (0 < s)
            return -1;
        for (var n = 1; n < e.length; n++) {
            var r = t.valueOnAxis(e[n].n, e[n].d);
            if (0 < r)
                return -1;
            s < r && (s = r,
            i = n)
        }
        return Pt = s,
        i
    }
    function Ct(t, e, i, s) {
        for (var n = [], r = t.tVerts, o = 0; o < r.length; o += 2) {
            var a = r[o]
              , h = r[o + 1];
            e.containsVert(a, h) && n.push(new St(new v(a,h),i,s,f(t.hashid, o >> 1)))
        }
        for (var c = e.tVerts, o = 0; o < c.length; o += 2) {
            a = c[o],
            h = c[o + 1];
            t.containsVert(a, h) && n.push(new St(new v(a,h),i,s,f(e.hashid, o >> 1)))
        }
        return n.length ? n : function(t, e, i, s) {
            for (var n = [], r = t.tVerts, o = 0; o < r.length; o += 2) {
                var a = r[o]
                  , h = r[o + 1];
                e.containsVertPartial(a, h, O(i)) && n.push(new St(new v(a,h),i,s,f(t.hashid, o)))
            }
            for (var c = e.tVerts, o = 0; o < c.length; o += 2) {
                a = c[o],
                h = c[o + 1];
                t.containsVertPartial(a, h, i) && n.push(new St(new v(a,h),i,s,f(e.hashid, o)))
            }
            return n
        }(t, e, i, s)
    }
    function kt(t, e, i) {
        var s = w(e, t.ta) - t.r
          , t = w(e, t.tb) - t.r;
        return T(s, t) - i
    }
    function Ot(t, e, i, s, n) {
        for (var r = P(e.tn, e.ta), o = P(e.tn, e.tb), a = I(e.tn, n), h = i.tVerts, c = 0; c < h.length; c += 2) {
            var l, u = h[c], p = h[c + 1];
            x(u, p, a.x, a.y) < w(e.tn, e.ta) * n + e.r && ((l = E(e.tn.x, e.tn.y, u, p)) <= r && o <= l && t.push(new St(new v(u,p),a,s,f(i.hashid, c))))
        }
    }
    vt.prototype.begin = function(t, e) {
        return !0
    }
    ,
    vt.prototype.preSolve = function(t, e) {
        return !0
    }
    ,
    vt.prototype.postSolve = function(t, e) {}
    ,
    vt.prototype.separate = function(t, e) {}
    ,
    bt.prototype.getShapes = function() {
        return this.swappedColl ? [this.b, this.a] : [this.a, this.b]
    }
    ,
    bt.prototype.totalImpulse = function() {
        for (var t = this.contacts, e = new v(0,0), i = 0, s = t.length; i < s; i++) {
            var n = t[i];
            e.add(I(n.n, n.jnAcc))
        }
        return this.swappedColl ? e : e.neg()
    }
    ,
    bt.prototype.totalImpulseWithFriction = function() {
        for (var t = this.contacts, e = new v(0,0), i = 0, s = t.length; i < s; i++) {
            var n = t[i];
            e.add(new v(n.jnAcc,n.jtAcc).rotate(n.n))
        }
        return this.swappedColl ? e : e.neg()
    }
    ,
    bt.prototype.totalKE = function() {
        for (var t = (1 - this.e) / (1 + this.e), e = 0, i = this.contacts, s = 0, n = i.length; s < n; s++) {
            var r = i[s]
              , o = r.jnAcc
              , a = r.jtAcc;
            e += t * o * o / r.nMass + a * a / r.tMass
        }
        return e
    }
    ,
    bt.prototype.ignore = function() {
        this.state = "ignore"
    }
    ,
    bt.prototype.getA = function() {
        return this.swappedColl ? this.b : this.a
    }
    ,
    bt.prototype.getB = function() {
        return this.swappedColl ? this.a : this.b
    }
    ,
    bt.prototype.isFirstContact = function() {
        return "first coll" === this.state
    }
    ,
    bt.prototype.getContactPointSet = function() {
        for (var t = new Array(this.contacts.length), e = 0; e < t.length; e++)
            t[e] = new wt(this.contacts[e].p,this.contacts[e].n,this.contacts[e].dist);
        return t
    }
    ,
    bt.prototype.getNormal = function(t) {
        t = this.contacts[t].n;
        return this.swappedColl ? O(t) : t
    }
    ,
    bt.prototype.getPoint = function(t) {
        return this.contacts[t].p
    }
    ,
    bt.prototype.getDepth = function(t) {
        return this.contacts[t].dist
    }
    ,
    bt.prototype.unthread = function() {
        xt(0, this.body_a, this.thread_a_prev, this.thread_a_next),
        xt(0, this.body_b, this.thread_b_prev, this.thread_b_next),
        this.thread_a_prev = this.thread_a_next = null,
        this.thread_b_prev = this.thread_b_next = null
    }
    ,
    bt.prototype.update = function(t, e, i, s) {
        if (this.contacts)
            for (var n = 0; n < this.contacts.length; n++)
                for (var r = this.contacts[n], o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.hash === r.hash && (a.jnAcc = r.jnAcc,
                    a.jtAcc = r.jtAcc)
                }
        this.contacts = t,
        this.handler = e,
        this.swappedColl = i.collision_type !== e.a,
        this.e = i.e * s.e,
        this.u = i.u * s.u,
        this.surface_vr = k(i.surface_v, s.surface_v),
        this.a = i,
        this.body_a = i.body,
        this.b = s,
        this.body_b = s.body,
        "cached" == this.state && (this.state = "first coll")
    }
    ,
    bt.prototype.preStep = function(t, e, i) {
        for (var s = this.body_a, n = this.body_b, r = 0; r < this.contacts.length; r++) {
            var o = this.contacts[r];
            o.r1 = k(o.p, s.p),
            o.r2 = k(o.p, n.p),
            o.nMass = 1 / Yt(s, n, o.r1, o.r2, o.n),
            o.tMass = 1 / Yt(s, n, o.r1, o.r2, c(o.n)),
            o.bias = -i * T(0, o.dist + e) / t,
            o.jBias = 0,
            o.bounce = Ut(s, n, o.r1, o.r2, o.n) * this.e
        }
    }
    ,
    bt.prototype.applyCachedImpulse = function(t) {
        if (!this.isFirstContact())
            for (var e = this.body_a, i = this.body_b, s = 0; s < this.contacts.length; s++) {
                var n = this.contacts[s]
                  , r = n.n.x
                  , o = n.n.y
                  , a = r * n.jnAcc - o * n.jtAcc
                  , o = r * n.jtAcc + o * n.jnAcc;
                Xt(e, i, n.r1, n.r2, a * t, o * t)
            }
    }
    ,
    bt.prototype.applyImpulse = function() {
        0;
        for (var t = this.body_a, e = this.body_b, i = this.surface_vr, s = this.u, n = 0; n < this.contacts.length; n++) {
            0;
            var r = this.contacts[n]
              , o = r.nMass
              , a = r.n
              , h = r.r1
              , c = r.r2
              , l = e.vx - c.y * e.w - (t.vx - h.y * t.w)
              , u = e.vy + c.x * e.w - (t.vy + h.x * t.w)
              , p = a.x * (e.v_biasx - c.y * e.w_bias - t.v_biasx + h.y * t.w_bias) + a.y * (c.x * e.w_bias + e.v_biasy - h.x * t.w_bias - t.v_biasy)
              , d = x(l, u, a.x, a.y)
              , l = x(l + i.x, u + i.y, -a.y, a.x)
              , u = (r.bias - p) * o
              , p = r.jBias;
            r.jBias = A(p + u, 0);
            u = -(r.bounce + d) * o,
            d = r.jnAcc;
            r.jnAcc = A(d + u, 0);
            o = s * r.jnAcc,
            u = -l * r.tMass,
            l = r.jtAcc;
            r.jtAcc = m(l + u, -o, o);
            o = a.x * (r.jBias - p),
            p = a.y * (r.jBias - p);
            Ht(t, -o, -p, h),
            Ht(e, o, p, c);
            d = r.jnAcc - d,
            l = r.jtAcc - l;
            Xt(t, e, h, c, a.x * d - a.y * l, a.x * l + a.y * d)
        }
    }
    ,
    bt.prototype.callSeparate = function(t) {
        t.lookupHandler(this.a.collision_type, this.b.collision_type).separate(this, t)
    }
    ,
    bt.prototype.next = function(t) {
        return this.body_a == t ? this.thread_a_next : this.thread_b_next
    }
    ;
    var It = []
      , Pt = 0;
    t.prototype.collisionCode = 0,
    X.prototype.collisionCode = 1,
    Y.prototype.collisionCode = 2,
    t.prototype.collisionTable = [function(t, e) {
        e = Tt(t.tc, e.tc, t.r, e.r);
        return e ? [e] : It
    }
    , function(t, e) {
        var i = e.ta
          , s = e.tb
          , n = t.tc
          , r = k(s, i)
          , s = _(w(r, k(n, i)) / B(r))
          , r = C(i, I(r, s))
          , r = Tt(n, r, t.r, e.r);
        if (r) {
            t = r.n;
            return 0 === s && w(t, e.a_tangent) < 0 || 1 === s && w(t, e.b_tangent) < 0 ? It : [r]
        }
        return It
    }
    , function(t, e) {
        for (var i = e.tPlanes, s = 0, n = w(i[0].n, t.tc) - i[0].d - t.r, r = 0; r < i.length; r++) {
            var o = w(i[r].n, t.tc) - i[r].d - t.r;
            if (0 < o)
                return It;
            n < o && (n = o,
            s = r)
        }
        var a, h = i[s].n, c = e.tVerts, l = c.length, u = s << 1, p = c[u], d = c[1 + u], f = c[(2 + u) % l], e = c[(3 + u) % l], c = E(h.x, h.y, p, d), u = E(h.x, h.y, f, e), l = P(h, t.tc);
        return l < u ? (a = Tt(t.tc, new v(f,e), t.r, 0)) ? [a] : It : l < c ? [new St(k(t.tc, I(h, t.r + n / 2)),O(h),n,0)] : (a = Tt(t.tc, new v(p,d), t.r, 0)) ? [a] : It
    }
    ],
    X.prototype.collisionTable = [null, function(t, e) {
        return It
    }
    , function(t, e) {
        var i = []
          , s = e.tPlanes
          , n = s.length
          , r = w(t.tn, t.ta)
          , o = e.valueOnAxis(t.tn, r) - t.r
          , a = e.valueOnAxis(O(t.tn), -r) - t.r;
        if (0 < a || 0 < o)
            return It;
        var h = 0
          , c = kt(t, s[0].n, s[0].d);
        if (0 < c)
            return It;
        for (var l = 0; l < n; l++) {
            var u = kt(t, s[l].n, s[l].d);
            if (0 < u)
                return It;
            c < u && (c = u,
            h = l)
        }
        var p = O(s[h].n)
          , d = C(t.ta, I(p, t.r))
          , r = C(t.tb, I(p, t.r));
        if (e.containsVert(d.x, d.y) && i.push(new St(d,p,c,f(t.hashid, 0))),
        e.containsVert(r.x, r.y) && i.push(new St(r,p,c,f(t.hashid, 1))),
        (c <= o || c <= a) && (a < o ? Ot(i, t, e, o, 1) : Ot(i, t, e, a, -1)),
        0 === i.length) {
            p = 2 * h,
            o = e.tVerts,
            a = new v(o[p],o[1 + p]);
            if (e = Tt(t.ta, a, t.r, 0))
                return [e];
            if (e = Tt(t.tb, a, t.r, 0))
                return [e];
            a = 2 * n,
            a = new v(o[(2 + p) % a],o[(3 + p) % a]);
            if (e = Tt(t.ta, a, t.r, 0))
                return [e];
            if (e = Tt(t.tb, a, t.r, 0))
                return [e]
        }
        return i
    }
    ],
    Y.prototype.collisionTable = [null, null, function(t, e) {
        var i = At(e, t.tPlanes);
        if (-1 == i)
            return It;
        var s = Pt
          , n = At(t, e.tPlanes);
        if (-1 == n)
            return It;
        var r = Pt;
        return r < s ? Ct(t, e, t.tPlanes[i].n, s) : Ct(t, e, O(e.tPlanes[n].n), r)
    }
    ];
    var Et = n.collideShapes = function(t, e) {
        return y(t.collisionCode <= e.collisionCode, "Collided shapes must be sorted by type"),
        t.collisionTable[e.collisionCode](t, e)
    }
      , Bt = new vt;
    function Rt(t) {
        y(!t.locked, "This addition/removal cannot be done safely during a call to cpSpaceStep()  or during a query. Put these calls into a post-step callback.")
    }
    function Lt(t) {
        return t ? t.nodeRoot : null
    }
    (X = n.Space = function() {
        this.stamp = 0,
        this.curr_dt = 0,
        this.bodies = [],
        this.rousedBodies = [],
        this.sleepingComponents = [],
        this.staticShapes = new et(null),
        this.activeShapes = new et(this.staticShapes),
        this.arbiters = [],
        this.contactBuffersHead = null,
        this.cachedArbiters = {},
        this.constraints = [],
        this.locked = 0,
        this.collisionHandlers = {},
        this.defaultHandler = Bt,
        this.postStepCallbacks = [],
        this.delayedAddRemove = [],
        this.iterations = 10,
        this.gravity = b,
        this.damping = 1,
        this.idleSpeedThreshold = 0,
        this.sleepTimeThreshold = 1 / 0,
        this.collisionSlop = .1,
        this.collisionBias = Math.pow(.9, 60),
        this.collisionPersistence = 3,
        this.enableContactGraph = !1,
        this.staticBody = new Z(1 / 0,1 / 0),
        this.staticBody.nodeIdleTime = 1 / 0,
        this.collideShapes = this.makeCollideShapes()
    }
    ).prototype.getCurrentTimeStep = function() {
        return this.curr_dt
    }
    ,
    X.prototype.setIterations = function(t) {
        this.iterations = t
    }
    ,
    X.prototype.isLocked = function() {
        return this.locked
    }
    ,
    X.prototype.addCollisionHandler = function(t, e, i, s, n, r) {
        Rt(this),
        this.removeCollisionHandler(t, e);
        var o = new vt;
        o.a = t,
        o.b = e,
        i && (o.begin = i),
        s && (o.preSolve = s),
        n && (o.postSolve = n),
        r && (o.separate = r),
        this.collisionHandlers[f(t, e)] = o
    }
    ,
    X.prototype.removeCollisionHandler = function(t, e) {
        Rt(this),
        delete this.collisionHandlers[f(t, e)]
    }
    ,
    X.prototype.setDefaultCollisionHandler = function(t, e, i, s) {
        Rt(this);
        var n = new vt;
        t && (n.begin = t),
        e && (n.preSolve = e),
        i && (n.postSolve = i),
        s && (n.separate = s),
        this.defaultHandler = n
    }
    ,
    X.prototype.lookupHandler = function(t, e) {
        return this.collisionHandlers[f(t, e)] || this.defaultHandler
    }
    ,
    X.prototype.addShape = function(t) {
        var e = t.body;
        return e.isStatic() ? this.addStaticShape(t) : (this.locked ? t.isAdded || (t.isAdded = !0,
        this.delayedAddRemove.push(this.addShape),
        this.delayedAddRemove.push(t)) : (t.isAdded = !0,
        y(!t.space, "This shape is already added to a space and cannot be added to another."),
        Rt(this),
        e.activate(),
        e.addShape(t),
        t.update(e.p, e.rot),
        this.activeShapes.insert(t, t.hashid),
        t.space = this),
        t)
    }
    ,
    X.prototype.addStaticShape = function(t) {
        if (this.locked)
            return t.isAdded || (t.isAdded = !0,
            this.delayedAddRemove.push(this.addStaticShape),
            this.delayedAddRemove.push(t)),
            t;
        t.isAdded = !0,
        y(!t.space, "This shape is already added to a space and cannot be added to another."),
        Rt(this);
        var e = t.body;
        return e.addShape(t),
        t.update(e.p, e.rot),
        this.staticShapes.insert(t, t.hashid),
        t.space = this,
        t
    }
    ,
    X.prototype.addBody = function(t) {
        return y(!t.isStatic(), "Static bodies cannot be added to a space as they are not meant to be simulated."),
        this.locked ? t.isAdded || (t.isAdded = !0,
        this.delayedAddRemove.push(this.addBody),
        this.delayedAddRemove.push(t)) : (t.isAdded = !0,
        y(!t.space, "This body is already added to a space and cannot be added to another."),
        Rt(this),
        this.bodies.push(t),
        t.space = this),
        t
    }
    ,
    X.prototype.addConstraint = function(t) {
        if (this.locked)
            return t.isAdded || (t.isAdded = !0,
            this.delayedAddRemove.push(this.addConstraint),
            this.delayedAddRemove.push(t)),
            t;
        t.isAdded = !0,
        y(!t.space, "This shape is already added to a space and cannot be added to another."),
        Rt(this);
        var e = t.a
          , i = t.b;
        return e.activate(),
        i.activate(),
        this.constraints.push(t),
        t.next_a = e.constraintList,
        (e.constraintList = t).next_b = i.constraintList,
        (i.constraintList = t).space = this,
        t
    }
    ,
    X.prototype.filterArbiters = function(t, e) {
        for (var i in this.cachedArbiters) {
            var s = this.cachedArbiters[i];
            (t !== s.body_a || e !== s.a && null !== e) && (t !== s.body_b || e !== s.b && null !== e) || (e && "cached" !== s.state && s.callSeparate(this),
            s.unthread(),
            o(this.arbiters, s),
            delete this.cachedArbiters[i])
        }
    }
    ,
    X.prototype.removeShape = function(t) {
        var e = t.body;
        e.isStatic() ? this.removeStaticShape(t) : this.locked ? t.isAdded && (t.isAdded = !1,
        this.delayedAddRemove.push(this.removeShape),
        this.delayedAddRemove.push(t)) : (t.isAdded = !1,
        y(this.containsShape(t), "Cannot remove a shape that was not added to the space. (Removed twice maybe?)"),
        Rt(this),
        e.activate(),
        e.removeShape(t),
        this.filterArbiters(e, t),
        this.activeShapes.remove(t, t.hashid),
        t.space = null)
    }
    ,
    X.prototype.removeStaticShape = function(t) {
        var e;
        this.locked ? t.isAdded && (t.isAdded = !1,
        this.delayedAddRemove.push(this.removeStaticShape),
        this.delayedAddRemove.push(t)) : (t.isAdded = !1,
        y(this.containsShape(t), "Cannot remove a static or sleeping shape that was not added to the space. (Removed twice maybe?)"),
        Rt(this),
        (e = t.body).isStatic() && e.activateStatic(t),
        e.removeShape(t),
        this.filterArbiters(e, t),
        this.staticShapes.remove(t, t.hashid),
        t.space = null)
    }
    ,
    X.prototype.removeBody = function(t) {
        this.locked ? t.isAdded && (t.isAdded = !1,
        this.delayedAddRemove.push(this.removeBody),
        this.delayedAddRemove.push(t)) : (t.isAdded = !1,
        y(this.containsBody(t), "Cannot remove a body that was not added to the space. (Removed twice maybe?)"),
        Rt(this),
        t.activate(),
        o(this.bodies, t),
        t.space = null)
    }
    ,
    X.prototype.removeConstraint = function(t) {
        this.locked ? t.isAdded && (t.isAdded = !1,
        this.delayedAddRemove.push(this.removeConstraint),
        this.delayedAddRemove.push(t)) : (t.isAdded = !1,
        y(this.containsConstraint(t), "Cannot remove a constraint that was not added to the space. (Removed twice maybe?)"),
        Rt(this),
        t.a.activate(),
        t.b.activate(),
        o(this.constraints, t),
        t.a.removeConstraint(t),
        t.b.removeConstraint(t),
        t.space = null)
    }
    ,
    X.prototype.containsShape = function(t) {
        return t.space === this
    }
    ,
    X.prototype.containsBody = function(t) {
        return t.space == this
    }
    ,
    X.prototype.containsConstraint = function(t) {
        return t.space == this
    }
    ,
    X.prototype.uncacheArbiter = function(t) {
        delete this.cachedArbiters[f(t.a.hashid, t.b.hashid)],
        o(this.arbiters, t)
    }
    ,
    X.prototype.eachBody = function(t, e) {
        this.lock();
        for (var i = this.bodies, s = 0; s < i.length; s++)
            t.call(e, i[s]);
        for (var n = this.sleepingComponents, s = 0; s < n.length; s++)
            for (var r = n[s]; r; ) {
                var o = r.nodeNext;
                t.call(e, r),
                r = o
            }
        this.unlock(!0)
    }
    ,
    X.prototype.eachShape = function(t) {
        this.lock(),
        this.activeShapes.each(t),
        this.staticShapes.each(t),
        this.unlock(!0)
    }
    ,
    X.prototype.eachConstraint = function(t) {
        this.lock();
        for (var e = this.constraints, i = 0; i < e.length; i++)
            t(e[i]);
        this.unlock(!0)
    }
    ,
    X.prototype.reindexStatic = function() {
        y(!this.locked, "You cannot manually reindex objects while the space is locked. Wait until the current query or step is complete."),
        this.staticShapes.each(function(t) {
            var e = t.body;
            t.update(e.p, e.rot)
        }),
        this.staticShapes.reindex()
    }
    ,
    X.prototype.reindexShape = function(t) {
        y(!this.locked, "You cannot manually reindex objects while the space is locked. Wait until the current query or step is complete.");
        var e = t.body;
        t.update(e.p, e.rot),
        this.activeShapes.reindexObject(t, t.hashid),
        this.staticShapes.reindexObject(t, t.hashid)
    }
    ,
    X.prototype.reindexShapesForBody = function(t) {
        for (var e = t.shapeList; e; e = e.next)
            this.reindexShape(e)
    }
    ,
    X.prototype.useSpatialHash = function(t, e) {
        throw new Error("Spatial Hash not implemented.")
    }
    ,
    X.prototype.activateBody = function(t) {
        if (y(!t.isRogue(), "Internal error: Attempting to activate a rogue body."),
        this.locked)
            -1 === this.rousedBodies.indexOf(t) && this.rousedBodies.push(t);
        else {
            this.bodies.push(t);
            for (var e = 0; e < t.shapeList.length; e++) {
                var i = t.shapeList[e];
                this.staticShapes.remove(i, i.hashid),
                this.activeShapes.insert(i, i.hashid)
            }
            for (var s, n, r = t.arbiterList; r; r = r.next(t))
                t !== (o = r.body_a) && !o.isStatic() || (s = r.a,
                n = r.b,
                (this.cachedArbiters[f(s.hashid, n.hashid)] = r).stamp = this.stamp,
                r.handler = this.lookupHandler(s.collision_type, n.collision_type),
                this.arbiters.push(r));
            for (var o, a = t.constraintList; a; a = a.nodeNext)
                t !== (o = a.a) && !o.isStatic() || this.constraints.push(a)
        }
    }
    ,
    X.prototype.deactivateBody = function(t) {
        y(!t.isRogue(), "Internal error: Attempting to deactivate a rogue body."),
        o(this.bodies, t);
        for (var e = 0; e < t.shapeList.length; e++) {
            var i = t.shapeList[e];
            this.activeShapes.remove(i, i.hashid),
            this.staticShapes.insert(i, i.hashid)
        }
        for (var s = t.arbiterList; s; s = s.next(t))
            t !== (n = s.body_a) && !n.isStatic() || this.uncacheArbiter(s);
        for (var n, r = t.constraintList; r; r = r.nodeNext)
            t !== (n = r.a) && !n.isStatic() || o(this.constraints, r)
    }
    ,
    Z.prototype.activate = function() {
        this.isRogue() || (this.nodeIdleTime = 0,
        function(t) {
            if (t && t.isSleeping(t)) {
                y(!t.isRogue(), "Internal Error: componentActivate() called on a rogue body.");
                for (var e = t.space, i = t; i; ) {
                    var s = i.nodeNext;
                    i.nodeIdleTime = 0,
                    i.nodeRoot = null,
                    i.nodeNext = null,
                    e.activateBody(i),
                    i = s
                }
                o(e.sleepingComponents, t)
            }
        }(Lt(this)))
    }
    ,
    Z.prototype.activateStatic = function(t) {
        y(this.isStatic(), "Body.activateStatic() called on a non-static body.");
        for (var e = this.arbiterList; e; e = e.next(this))
            t && t != e.a && t != e.b || (e.body_a == this ? e.body_b : e.body_a).activate()
    }
    ,
    Z.prototype.pushArbiter = function(t) {
        g(null === (t.body_a === this ? t.thread_a_next : t.thread_b_next), "Internal Error: Dangling contact graph pointers detected. (A)"),
        g(null === (t.body_a === this ? t.thread_a_prev : t.thread_b_prev), "Internal Error: Dangling contact graph pointers detected. (B)");
        var e = this.arbiterList;
        g(null === e || null === (e.body_a === this ? e.thread_a_prev : e.thread_b_prev), "Internal Error: Dangling contact graph pointers detected. (C)"),
        t.body_a === this ? t.thread_a_next = e : t.thread_b_next = e,
        e && (e.body_a === this ? e.thread_a_prev = t : e.thread_b_prev = t),
        this.arbiterList = t
    }
    ;
    var Mt, jt = function(t, e) {
        if (!e.isRogue()) {
            var i = Lt(e);
            if (null == i) {
                r = t,
                (o = e).nodeRoot = r,
                o !== r && (o.nodeNext = r.nodeNext,
                r.nodeNext = o);
                for (var s = e.arbiterList; s; s = s.next(e))
                    jt(t, e == s.body_a ? s.body_b : s.body_a);
                for (var n = e.constraintList; n; n = n.next(e))
                    jt(t, e == n.a ? n.b : n.a)
            } else
                g(i === t, "Internal Error: Inconsistency detected in the contact graph.")
        }
        var r, o
    };
    function Nt(t, e) {
        var i, s, n, r, o, a = Mt;
        t.bb_l <= e.bb_r && e.bb_l <= t.bb_r && t.bb_b <= e.bb_t && e.bb_b <= t.bb_t && t.body !== e.body && (!t.group || t.group !== e.group) && t.layers & e.layers && (i = a.lookupHandler(t.collision_type, e.collision_type),
        (s = t.sensor || e.sensor) && i === Bt || (t.collisionCode > e.collisionCode && (o = t,
        t = e,
        e = o),
        0 !== (n = Et(t, e)).length && (r = f(t.hashid, e.hashid),
        (o = (o = a.cachedArbiters[r]) || (a.cachedArbiters[r] = new bt(t,e))).update(n, i, t, e),
        "first coll" != o.state || i.begin(o, a) || o.ignore(),
        "ignore" !== o.state && i.preSolve(o, a) && !s ? a.arbiters.push(o) : (o.contacts = null,
        "ignore" !== o.state && (o.state = "normal")),
        o.stamp = a.stamp)))
    }
    function Ft(t) {
        var e = t.body;
        t.update(e.p, e.rot)
    }
    function Dt(t, e, i, s) {
        var n = t.vx + -i.y * t.w
          , i = t.vy + i.x * t.w
          , t = e.vx + -s.y * e.w
          , e = e.vy + s.x * e.w;
        return new v(t - n,e - i)
    }
    function Vt(t, e, i) {
        return i = P(e, i),
        t.m_inv + t.i_inv * i * i
    }
    function Wt(t, e, i, s, n, r) {
        var o = u = t.m_inv + e.m_inv
          , a = 0
          , h = 0
          , c = u
          , l = t.i_inv
          , u = i.x * i.x * l
          , t = i.y * i.y * l
          , l = -i.x * i.y * l;
        o += t,
        a += l,
        h += l,
        c += u,
        l = e.i_inv,
        u = s.x * s.x * l,
        e = s.y * s.y * l,
        l = -s.x * s.y * l,
        l = (o += e) * (c += u) - (a += l) * (h += l),
        g(0 != l, "Unsolvable constraint."),
        l = 1 / l,
        n.x = c * l,
        n.y = -a * l,
        r.x = -h * l,
        r.y = o * l
    }
    function zt(t, e, i) {
        return new v(w(t, e),w(t, i))
    }
    function Gt(t, e) {
        return 1 - Math.pow(t, e)
    }
    X.prototype.processComponents = function(t) {
        for (var e = this.sleepTimeThreshold !== 1 / 0, i = this.bodies, s = 0; s < i.length; s++) {
            var n = i[s];
            g(null === n.nodeNext, "Internal Error: Dangling next pointer detected in contact graph."),
            g(null === n.nodeRoot, "Internal Error: Dangling root pointer detected in contact graph.")
        }
        if (e)
            for (var r, o = this.idleSpeedThreshold, a = o ? o * o : B(this.gravity) * t * t, s = 0; s < i.length; s++)
                (n = i[s]).m !== 1 / 0 ? (r = a ? n.m * a : 0,
                n.nodeIdleTime = n.kineticEnergy() > r ? 0 : n.nodeIdleTime + t) : n.nodeIdleTime = 1 / 0;
        for (var h = this.arbiters, s = 0, c = h.length; s < c; s++) {
            var l = h[s]
              , u = l.body_a
              , p = l.body_b;
            e && ((p.isRogue() && !p.isStatic() || u.isSleeping()) && u.activate(),
            (u.isRogue() && !u.isStatic() || p.isSleeping()) && p.activate()),
            u.pushArbiter(l),
            p.pushArbiter(l)
        }
        if (e) {
            for (var d = this.constraints, s = 0; s < d.length; s++) {
                var f = d[s]
                  , u = f.a;
                (p = f.b).isRogue() && !p.isStatic() && u.activate(),
                u.isRogue() && !u.isStatic() && p.activate()
            }
            for (s = 0; s < i.length; ) {
                n = i[s];
                if (null !== Lt(n) || (jt(n, n),
                function(t, e) {
                    for (var i = t; i; i = i.nodeNext)
                        if (i.nodeIdleTime < e)
                            return !0;
                    return !1
                }(n, this.sleepTimeThreshold)))
                    s++,
                    n.nodeRoot = null,
                    n.nodeNext = null;
                else {
                    this.sleepingComponents.push(n);
                    for (var y = n; y; y = y.nodeNext)
                        this.deactivateBody(y)
                }
            }
        }
    }
    ,
    Z.prototype.sleep = function() {
        this.sleepWithGroup(null)
    }
    ,
    Z.prototype.sleepWithGroup = function(t) {
        y(!this.isStatic() && !this.isRogue(), "Rogue and static bodies cannot be put to sleep.");
        var e = this.space;
        if (y(e, "Cannot put a rogue body to sleep."),
        y(!e.locked, "Bodies cannot be put to sleep during a query or a call to cpSpaceStep(). Put these calls into a post-step callback."),
        y(null === t || t.isSleeping(), "Cannot use a non-sleeping body as a group identifier."),
        this.isSleeping())
            y(Lt(this) === Lt(t), "The body is already sleeping and it's group cannot be reassigned.");
        else {
            for (var i = 0; i < this.shapeList.length; i++)
                this.shapeList[i].update(this.p, this.rot);
            e.deactivateBody(this),
            t ? (t = Lt(t),
            this.nodeRoot = t,
            this.nodeNext = t.nodeNext,
            this.nodeIdleTime = 0,
            t.nodeNext = this) : ((this.nodeRoot = this).nodeNext = null,
            this.nodeIdleTime = 0,
            e.sleepingComponents.push(this)),
            o(e.bodies, this)
        }
    }
    ,
    X.prototype.activateShapesTouchingShape = function(t) {
        this.sleepTimeThreshold !== 1 / 0 && this.shapeQuery(t, function(t, e) {
            t.body.activate()
        })
    }
    ,
    X.prototype.pointQuery = function(e, i, s, n) {
        function t(t) {
            (!t.group || s !== t.group) && i & t.layers && t.pointQuery(e) && n(t)
        }
        var r = new V(e.x,e.y,e.x,e.y);
        this.lock(),
        this.activeShapes.query(r, t),
        this.staticShapes.query(r, t),
        this.unlock(!0)
    }
    ,
    X.prototype.pointQueryFirst = function(t, e, i) {
        var s = null;
        return this.pointQuery(t, e, i, function(t) {
            t.sensor || (s = t)
        }),
        s
    }
    ,
    X.prototype.nearestPointQuery = function(i, s, n, r, o) {
        function t(t) {
            var e;
            t.group && r === t.group || !(n & t.layers) || (e = t.nearestPointQuery(i)).d < s && o(t, e.d, e.p)
        }
        var e = W(i, s);
        this.lock(),
        this.activeShapes.query(e, t),
        this.staticShapes.query(e, t),
        this.unlock(!0)
    }
    ,
    X.prototype.nearestPointQueryNearest = function(e, i, s, n) {
        function t(t) {
            t.group && n === t.group || !(s & t.layers) || t.sensor || (t = t.nearestPointQuery(e)).d < i && (!r || t.d < r.d) && (r = t)
        }
        var r, o = W(e, i);
        return this.activeShapes.query(o, t),
        this.staticShapes.query(o, t),
        r
    }
    ,
    X.prototype.segmentQuery = function(i, s, n, r, o) {
        function t(t) {
            var e;
            return (!t.group || r !== t.group) && n & t.layers && (e = t.segmentQuery(i, s)) && o(t, e.t, e.n),
            1
        }
        this.lock(),
        this.staticShapes.segmentQuery(i, s, 1, t),
        this.activeShapes.segmentQuery(i, s, 1, t),
        this.unlock(!0)
    }
    ,
    X.prototype.segmentQueryFirst = function(i, s, n, r) {
        function t(t) {
            var e;
            return (!t.group || r !== t.group) && n & t.layers && !t.sensor && (e = t.segmentQuery(i, s)) && (null === o || e.t < o.t) && (o = e),
            o ? o.t : 1
        }
        var o = null;
        return this.staticShapes.segmentQuery(i, s, 1, t),
        this.activeShapes.segmentQuery(i, s, o ? o.t : 1, t),
        o
    }
    ,
    X.prototype.bbQuery = function(o, a, h, c) {
        function t(t) {
            var e, i, s, n, r;
            (!t.group || h !== t.group) && a & t.layers && (e = o,
            i = t.bb_l,
            s = t.bb_b,
            n = t.bb_r,
            r = t.bb_t,
            e.l <= n && i <= e.r && e.b <= r && s <= e.t) && c(t)
        }
        this.lock(),
        this.activeShapes.query(o, t),
        this.staticShapes.query(o, t),
        this.unlock(!0)
    }
    ,
    X.prototype.shapeQuery = function(r, o) {
        var t = r.body;
        t && r.update(t.p, t.rot);
        var e = new V(r.bb_l,r.bb_b,r.bb_r,r.bb_t)
          , a = !1
          , t = function(t) {
            var e, i = r;
            if ((!i.group || i.group !== t.group) && i.layers & t.layers && i !== t) {
                if (i.collisionCode <= t.collisionCode)
                    e = Et(i, t);
                else {
                    e = Et(t, i);
                    for (var s = 0; s < e.length; s++)
                        e[s].n = O(e[s].n)
                }
                if (e.length && (a = !(i.sensor || t.sensor),
                o)) {
                    for (var n = new Array(e.length), s = 0; s < e.length; s++)
                        n[s] = new wt(e[s].p,e[s].n,e[s].dist);
                    o(t, n)
                }
            }
        };
        return this.lock(),
        this.activeShapes.query(e, t),
        this.staticShapes.query(e, t),
        this.unlock(!0),
        a
    }
    ,
    X.prototype.addPostStepCallback = function(t) {
        g(this.locked, "Adding a post-step callback when the space is not locked is unnecessary. Post-step callbacks will not called until the end of the next call to cpSpaceStep() or the next query."),
        this.postStepCallbacks.push(t)
    }
    ,
    X.prototype.runPostStepCallbacks = function() {
        for (var t = 0; t < this.postStepCallbacks.length; t++)
            this.postStepCallbacks[t]();
        this.postStepCallbacks.length = 0
    }
    ,
    X.prototype.lock = function() {
        this.locked++
    }
    ,
    X.prototype.unlock = function(t) {
        if (this.locked--,
        y(0 <= this.locked, "Internal Error: Space lock underflow."),
        0 === this.locked && t) {
            for (var e = this.rousedBodies, i = 0; i < e.length; i++)
                this.activateBody(e[i]);
            e.length = 0,
            this.runPostStepCallbacks()
        }
    }
    ,
    X.prototype.makeCollideShapes = function() {
        return Mt = this,
        Nt
    }
    ,
    X.prototype.arbiterSetFilter = function(t) {
        var e = this.stamp - t.stamp
          , i = t.body_a
          , s = t.body_b;
        return !(!i.isStatic() && !i.isSleeping() || !s.isStatic() && !s.isSleeping()) || (1 <= e && "cached" != t.state && (t.callSeparate(this),
        t.state = "cached"),
        !(e >= this.collisionPersistence) || (t.contacts = null,
        !1))
    }
    ,
    X.prototype.step = function(t) {
        if (0 !== t) {
            y(0 === b.x && 0 === b.y, "vzero is invalid"),
            this.stamp++;
            var e, i, s = this.curr_dt;
            this.curr_dt = t;
            var n = this.bodies
              , r = this.constraints
              , o = this.arbiters;
            for (l = 0; l < o.length; l++) {
                var a = o[l];
                a.state = "normal",
                a.body_a.isSleeping() || a.body_b.isSleeping() || a.unthread()
            }
            for (o.length = 0,
            this.lock(),
            l = 0; l < n.length; l++)
                n[l].position_func(t);
            for (i in this.activeShapes.each(Ft),
            this.activeShapes.reindexQuery(this.collideShapes),
            this.unlock(!1),
            this.processComponents(t),
            this.lock(),
            this.cachedArbiters)
                this.arbiterSetFilter(this.cachedArbiters[i]) || delete this.cachedArbiters[i];
            for (var h = this.collisionSlop, c = 1 - Math.pow(this.collisionBias, t), l = 0; l < o.length; l++)
                o[l].preStep(t, h, c);
            for (l = 0; l < r.length; l++) {
                var u = r[l];
                u.preSolve(this),
                u.preStep(t)
            }
            var p = Math.pow(this.damping, t)
              , d = this.gravity;
            for (l = 0; l < n.length; l++)
                n[l].velocity_func(d, p, t);
            var f = 0 === s ? 0 : t / s;
            for (l = 0; l < o.length; l++)
                o[l].applyCachedImpulse(f);
            for (l = 0; l < r.length; l++)
                r[l].applyCachedImpulse(f);
            for (l = 0; l < this.iterations; l++) {
                for (e = 0; e < o.length; e++)
                    o[e].applyImpulse();
                for (e = 0; e < r.length; e++)
                    r[e].applyImpulse()
            }
            for (l = 0; l < r.length; l++)
                r[l].postSolve(this);
            for (l = 0; l < o.length; l++)
                o[l].handler.postSolve(o[l], this);
            this.unlock(!0)
        }
    }
    ;
    var Ut = function(t, e, i, s, n) {
        var r = t.vx + -i.y * t.w
          , i = t.vy + i.x * t.w
          , t = e.vx + -s.y * e.w
          , e = e.vy + s.x * e.w;
        return x(t - r, e - i, n.x, n.y)
    }
      , qt = function(t, e, i, s) {
        t.vx += e * t.m_inv,
        t.vy += i * t.m_inv,
        t.w += t.i_inv * (s.x * i - s.y * e)
    }
      , Xt = function(t, e, i, s, n, r) {
        qt(t, -n, -r, i),
        qt(e, n, r, s)
    }
      , Ht = function(t, e, i, s) {
        t.v_biasx += e * t.m_inv,
        t.v_biasy += i * t.m_inv,
        t.w_bias += t.i_inv * E(s.x, s.y, e, i)
    }
      , Yt = function(t, e, i, s, n) {
        n = Vt(t, i, n) + Vt(e, s, n);
        return g(0 !== n, "Unsolvable collision or constraint."),
        n
    }
      , Jt = n.Constraint = function(t, e) {
        this.a = t,
        this.b = e,
        this.space = null,
        this.isAdded = !1,
        this.next_a = null,
        this.next_b = null,
        this.maxForce = 1 / 0,
        this.errorBias = Math.pow(.9, 60),
        this.maxBias = 1 / 0
    }
    ;
    function Kt(t, e) {
        return (t.restLength - e) * t.stiffness
    }
    function Qt(t, e) {
        return (e - t.restAngle) * t.stiffness
    }
    Jt.prototype.activateBodies = function() {
        this.a && this.a.activate(),
        this.b && this.b.activate()
    }
    ,
    Jt.prototype.preStep = function(t) {}
    ,
    Jt.prototype.applyCachedImpulse = function(t) {}
    ,
    Jt.prototype.applyImpulse = function() {}
    ,
    Jt.prototype.getImpulse = function() {
        return 0
    }
    ,
    Jt.prototype.preSolve = function(t) {}
    ,
    Jt.prototype.postSolve = function(t) {}
    ,
    Jt.prototype.next = function(t) {
        return this.a === t ? this.next_a : this.next_b
    }
    ,
    (X = n.PinJoint = function(t, e, i, s) {
        Jt.call(this, t, e),
        this.anchr1 = i,
        this.anchr2 = s;
        i = t ? C(t.p, h(i, t.rot)) : i,
        s = e ? C(e.p, h(s, e.rot)) : s;
        this.dist = S(k(s, i)),
        g(0 < this.dist, "You created a 0 length pin joint. A pivot joint will be much more stable."),
        this.r1 = this.r2 = null,
        this.n = null,
        this.nMass = 0,
        this.jnAcc = this.jnMax = 0,
        this.bias = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i, s = this.a, n = this.b;
        s.isRogue() && n.isRogue() || (this.r1 = h(this.anchr1, s.rot),
        this.r2 = h(this.anchr2, n.rot),
        e = k(C(n.p, this.r2), C(s.p, this.r1)),
        i = S(e),
        this.n = I(e, 1 / (i || 1 / 0)),
        this.nMass = 1 / Yt(s, n, this.r1, this.r2, this.n),
        n = this.maxBias,
        this.bias = m(-Gt(this.errorBias, t) * (i - this.dist) / t, -n, n),
        this.jnMax = this.maxForce * t)
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        t = I(this.n, this.jnAcc * t);
        Xt(this.a, this.b, this.r1, this.r2, t.x, t.y)
    }
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = this.n
          , s = Ut(t, e, this.r1, this.r2, i)
          , n = (this.bias - s) * this.nMass
          , s = this.jnAcc;
        this.jnAcc = m(s + n, -this.jnMax, this.jnMax),
        n = this.jnAcc - s,
        Xt(t, e, this.r1, this.r2, i.x * n, i.y * n)
    }
    ,
    X.prototype.getImpulse = function() {
        return Math.abs(this.jnAcc)
    }
    ,
    (X = n.SlideJoint = function(t, e, i, s, n, r) {
        Jt.call(this, t, e),
        this.anchr1 = i,
        this.anchr2 = s,
        this.min = n,
        this.max = r,
        this.r1 = this.r2 = this.n = null,
        this.nMass = 0,
        this.jnAcc = this.jnMax = 0,
        this.bias = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i, s, n = this.a, r = this.b;
        n.isRogue() && r.isRogue() || (this.r1 = h(this.anchr1, n.rot),
        this.r2 = h(this.anchr2, r.rot),
        e = k(C(r.p, this.r2), C(n.p, this.r1)),
        s = 0,
        (i = S(e)) > this.max ? (s = i - this.max,
        this.n = M(e)) : i < this.min ? (s = this.min - i,
        this.n = O(M(e))) : (this.n = b,
        this.jnAcc = 0),
        this.nMass = 1 / Yt(n, r, this.r1, this.r2, this.n),
        r = this.maxBias,
        this.bias = m(-Gt(this.errorBias, t) * s / t, -r, r),
        this.jnMax = this.maxForce * t)
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        t = this.jnAcc * t;
        Xt(this.a, this.b, this.r1, this.r2, this.n.x * t, this.n.y * t)
    }
    ,
    X.prototype.applyImpulse = function() {
        var t, e, i, s, n;
        0 === this.n.x && 0 === this.n.y || (t = this.a,
        e = this.b,
        i = this.n,
        s = this.r1,
        n = this.r2,
        s = Dt(t, e, s, n),
        n = w(s, i),
        s = (this.bias - n) * this.nMass,
        n = this.jnAcc,
        this.jnAcc = m(n + s, -this.jnMax, 0),
        s = this.jnAcc - n,
        Xt(t, e, this.r1, this.r2, i.x * s, i.y * s))
    }
    ,
    X.prototype.getImpulse = function() {
        return Math.abs(this.jnAcc)
    }
    ,
    (X = n.PivotJoint = function(t, e, i, s) {
        var n;
        Jt.call(this, t, e),
        void 0 === s && (n = i,
        i = t ? t.world2Local(n) : n,
        s = e ? e.world2Local(n) : n),
        this.anchr1 = i,
        this.anchr2 = s,
        this.r1 = this.r2 = b,
        this.k1 = new v(0,0),
        this.k2 = new v(0,0),
        this.jAcc = b,
        this.jMaxLen = 0,
        this.bias = b
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e = this.a
          , i = this.b;
        e.isRogue() && i.isRogue() || (this.r1 = h(this.anchr1, e.rot),
        this.r2 = h(this.anchr2, i.rot),
        Wt(e, i, this.r1, this.r2, this.k1, this.k2),
        this.jMaxLen = this.maxForce * t,
        e = k(C(i.p, this.r2), C(e.p, this.r1)),
        this.bias = j(I(e, -Gt(this.errorBias, t) / t), this.maxBias))
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        Xt(this.a, this.b, this.r1, this.r2, this.jAcc.x * t, this.jAcc.y * t)
    }
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = this.r1
          , s = this.r2
          , i = Dt(t, e, i, s)
          , s = zt(k(this.bias, i), this.k1, this.k2)
          , i = this.jAcc;
        this.jAcc = j(C(this.jAcc, s), this.jMaxLen),
        Xt(t, e, this.r1, this.r2, this.jAcc.x - i.x, this.jAcc.y - i.y)
    }
    ,
    X.prototype.getImpulse = function() {
        return S(this.jAcc)
    }
    ,
    (X = n.GrooveJoint = function(t, e, i, s, n) {
        Jt.call(this, t, e),
        this.grv_a = i,
        this.grv_b = s,
        this.grv_n = c(L(k(s, i))),
        this.anchr2 = n,
        this.grv_tn = null,
        this.clamp = 0,
        this.r1 = this.r2 = null,
        this.k1 = new v(0,0),
        this.k2 = new v(0,0),
        this.jAcc = b,
        this.jMaxLen = 0,
        this.bias = null
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i, s, n, r, o = this.a, a = this.b;
        o.isRogue() && a.isRogue() || (e = o.local2World(this.grv_a),
        i = o.local2World(this.grv_b),
        s = h(this.grv_n, o.rot),
        n = w(e, s),
        this.grv_tn = s,
        this.r2 = h(this.anchr2, a.rot),
        (r = P(C(a.p, this.r2), s)) <= P(e, s) ? (this.clamp = 1,
        this.r1 = k(e, o.p)) : r >= P(i, s) ? (this.clamp = -1,
        this.r1 = k(i, o.p)) : (this.clamp = 0,
        this.r1 = k(C(I(c(s), -r), I(s, n)), o.p)),
        Wt(o, a, this.r1, this.r2, this.k1, this.k2),
        this.jMaxLen = this.maxForce * t,
        o = k(C(a.p, this.r2), C(o.p, this.r1)),
        this.bias = j(I(o, -Gt(this.errorBias, t) / t), this.maxBias))
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        Xt(this.a, this.b, this.r1, this.r2, this.jAcc.x * t, this.jAcc.y * t)
    }
    ,
    X.prototype.grooveConstrain = function(t) {
        var e = this.grv_tn
          , e = 0 < this.clamp * P(t, e) ? t : i(t, e);
        return j(e, this.jMaxLen)
    }
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = this.r1
          , s = this.r2
          , i = Dt(t, e, i, s)
          , s = zt(k(this.bias, i), this.k1, this.k2)
          , i = this.jAcc;
        this.jAcc = this.grooveConstrain(C(i, s)),
        Xt(t, e, this.r1, this.r2, this.jAcc.x - i.x, this.jAcc.y - i.y)
    }
    ,
    X.prototype.getImpulse = function() {
        return S(this.jAcc)
    }
    ,
    X.prototype.setGrooveA = function(t) {
        this.grv_a = t,
        this.grv_n = c(L(k(this.grv_b, t))),
        this.activateBodies()
    }
    ,
    X.prototype.setGrooveB = function(t) {
        this.grv_b = t,
        this.grv_n = c(L(k(t, this.grv_a))),
        this.activateBodies()
    }
    ,
    (X = n.DampedSpring = function(t, e, i, s, n, r, o) {
        Jt.call(this, t, e),
        this.anchr1 = i,
        this.anchr2 = s,
        this.restLength = n,
        this.stiffness = r,
        this.damping = o,
        this.springForceFunc = Kt,
        this.target_vrn = this.v_coef = 0,
        this.r1 = this.r2 = null,
        this.nMass = 0,
        this.n = null
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i, s = this.a, n = this.b;
        s.isRogue() && n.isRogue() || (this.r1 = h(this.anchr1, s.rot),
        this.r2 = h(this.anchr2, n.rot),
        e = k(C(n.p, this.r2), C(s.p, this.r1)),
        i = S(e),
        this.n = I(e, 1 / (i || 1 / 0)),
        e = Yt(s, n, this.r1, this.r2, this.n),
        g(0 !== e, "Unsolvable this."),
        this.nMass = 1 / e,
        this.target_vrn = 0,
        this.v_coef = 1 - Math.exp(-this.damping * t * e),
        i = this.springForceFunc(this, i),
        Xt(s, n, this.r1, this.r2, this.n.x * i * t, this.n.y * i * t))
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {}
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = this.n
          , s = this.r1
          , n = this.r2
          , n = Ut(t, e, s, n, i)
          , i = (this.target_vrn - n) * this.v_coef;
        this.target_vrn = n + i,
        i *= this.nMass,
        Xt(t, e, this.r1, this.r2, this.n.x * i, this.n.y * i)
    }
    ,
    X.prototype.getImpulse = function() {
        return 0
    }
    ,
    (X = n.DampedRotarySpring = function(t, e, i, s, n) {
        Jt.call(this, t, e),
        this.restAngle = i,
        this.stiffness = s,
        this.damping = n,
        this.springTorqueFunc = Qt,
        this.target_wrn = 0,
        this.w_coef = 0,
        this.iSum = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i = this.a, s = this.b;
        i.isRogue() && s.isRogue() || (e = i.i_inv + s.i_inv,
        g(0 !== e, "Unsolvable spring."),
        this.iSum = 1 / e,
        this.w_coef = 1 - Math.exp(-this.damping * t * e),
        this.target_wrn = 0,
        t = this.springTorqueFunc(this, i.a - s.a) * t,
        i.w -= t * i.i_inv,
        s.w += t * s.i_inv)
    }
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = t.w - e.w
          , s = (this.target_wrn - i) * this.w_coef;
        this.target_wrn = i + s;
        s *= this.iSum;
        t.w += s * t.i_inv,
        e.w -= s * e.i_inv
    }
    ,
    (X = n.RotaryLimitJoint = function(t, e, i, s) {
        Jt.call(this, t, e),
        this.min = i,
        this.max = s,
        this.jAcc = 0,
        this.iSum = this.bias = this.jMax = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i, s = this.a, n = this.b;
        s.isRogue() && n.isRogue() || (i = 0,
        (e = n.a - s.a) > this.max ? i = this.max - e : e < this.min && (i = this.min - e),
        this.iSum = 1 / (1 / s.i + 1 / n.i),
        n = this.maxBias,
        this.bias = m(-Gt(this.errorBias, t) * i / t, -n, n),
        this.jMax = this.maxForce * t,
        this.bias || (this.jAcc = 0))
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        var e = this.a
          , i = this.b
          , t = this.jAcc * t;
        e.w -= t * e.i_inv,
        i.w += t * i.i_inv
    }
    ,
    X.prototype.applyImpulse = function() {
        var t, e, i, s;
        this.bias && (t = this.a,
        s = (e = this.b).w - t.w,
        i = -(this.bias + s) * this.iSum,
        s = this.jAcc,
        this.bias < 0 ? this.jAcc = m(s + i, 0, this.jMax) : this.jAcc = m(s + i, -this.jMax, 0),
        i = this.jAcc - s,
        t.w -= i * t.i_inv,
        e.w += i * e.i_inv)
    }
    ,
    X.prototype.getImpulse = function() {
        return Math.abs(joint.jAcc)
    }
    ,
    (X = n.RatchetJoint = function(t, e, i, s) {
        Jt.call(this, t, e),
        this.angle = 0,
        this.phase = i,
        this.ratchet = s,
        this.angle = (e ? e.a : 0) - (t ? t.a : 0),
        this.iSum = this.bias = this.jAcc = this.jMax = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i, s, n, r, o = this.a, a = this.b;
        o.isRogue() && a.isRogue() || (n = this.angle,
        e = this.phase,
        i = this.ratchet,
        (r = 0) < (n = n - (s = a.a - o.a)) * i ? r = n : this.angle = Math.floor((s - e) / i) * i + e,
        this.iSum = 1 / (o.i_inv + a.i_inv),
        a = this.maxBias,
        this.bias = m(-Gt(this.errorBias, t) * r / t, -a, a),
        this.jMax = this.maxForce * t,
        this.bias || (this.jAcc = 0))
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        var e = this.a
          , i = this.b
          , t = this.jAcc * t;
        e.w -= t * e.i_inv,
        i.w += t * i.i_inv
    }
    ,
    X.prototype.applyImpulse = function() {
        var t, e, i, s, n;
        this.bias && (t = this.a,
        n = (e = this.b).w - t.w,
        i = this.ratchet,
        s = -(this.bias + n) * this.iSum,
        n = this.jAcc,
        this.jAcc = m((n + s) * i, 0, this.jMax * Math.abs(i)) / i,
        s = this.jAcc - n,
        t.w -= s * t.i_inv,
        e.w += s * e.i_inv)
    }
    ,
    X.prototype.getImpulse = function(t) {
        return Math.abs(t.jAcc)
    }
    ,
    (X = n.GearJoint = function(t, e, i, s) {
        Jt.call(this, t, e),
        this.phase = i,
        this.ratio = s,
        this.ratio_inv = 1 / s,
        this.jAcc = 0,
        this.iSum = this.bias = this.jMax = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        var e, i = this.a, s = this.b;
        i.isRogue() && s.isRogue() || (this.iSum = 1 / (i.i_inv * this.ratio_inv + this.ratio * s.i_inv),
        e = this.maxBias,
        this.bias = m(-Gt(this.errorBias, t) * (s.a * this.ratio - i.a - this.phase) / t, -e, e),
        this.jMax = this.maxForce * t)
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        var e = this.a
          , i = this.b
          , t = this.jAcc * t;
        e.w -= t * e.i_inv * this.ratio_inv,
        i.w += t * i.i_inv
    }
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = e.w * this.ratio - t.w
          , s = (this.bias - i) * this.iSum
          , i = this.jAcc;
        this.jAcc = m(i + s, -this.jMax, this.jMax),
        s = this.jAcc - i,
        t.w -= s * t.i_inv * this.ratio_inv,
        e.w += s * e.i_inv
    }
    ,
    X.prototype.getImpulse = function() {
        return Math.abs(this.jAcc)
    }
    ,
    X.prototype.setRatio = function(t) {
        this.ratio = t,
        this.ratio_inv = 1 / t,
        this.activateBodies()
    }
    ,
    (X = n.SimpleMotor = function(t, e, i) {
        Jt.call(this, t, e),
        this.rate = i,
        this.jAcc = 0,
        this.iSum = this.jMax = 0
    }
    ).prototype = Object.create(Jt.prototype),
    X.prototype.preStep = function(t) {
        this.iSum = 1 / (this.a.i_inv + this.b.i_inv),
        this.jMax = this.maxForce * t
    }
    ,
    X.prototype.applyCachedImpulse = function(t) {
        var e = this.a
          , i = this.b
          , t = this.jAcc * t;
        e.w -= t * e.i_inv,
        i.w += t * i.i_inv
    }
    ,
    X.prototype.applyImpulse = function() {
        var t = this.a
          , e = this.b
          , i = -(e.w - t.w + this.rate) * this.iSum
          , s = this.jAcc;
        this.jAcc = m(s + i, -this.jMax, this.jMax),
        i = this.jAcc - s,
        t.w -= i * t.i_inv,
        e.w += i * e.i_inv
    }
    ,
    X.prototype.getImpulse = function() {
        return Math.abs(this.jAcc)
    }
}(),
cr.behaviors.rojoChipmunkBeta = function(n) {
    this.runtime = n;
    var t = this.space = new cp.Space;
    t.addCollisionHandler(0, 0, null, function(t, e) {
        var i, s;
        return t.isFirstContact() && (i = t.getA().body.c2obj,
        s = t.getB().body.c2obj,
        i.Arbiter = t,
        i.swapped = !1,
        s.Arbiter = t,
        s.swapped = !0,
        n.trigger(cr.behaviors.rojoChipmunkBeta.prototype.cnds.onPreCollide, i.inst),
        n.trigger(cr.behaviors.rojoChipmunkBeta.prototype.cnds.onPreCollide, s.inst),
        i.Arbiter = null,
        s.Arbiter = null),
        "ignore" !== t.state
    }, function(t, e) {
        var i, s;
        return t.isFirstContact() && (i = t.getA().body.c2obj,
        s = t.getB().body.c2obj,
        i.Arbiter = t,
        i.swapped = !1,
        s.Arbiter = t,
        s.swapped = !0,
        n.trigger(cr.behaviors.rojoChipmunkBeta.prototype.cnds.onPostCollide, i.inst),
        n.trigger(cr.behaviors.rojoChipmunkBeta.prototype.cnds.onPostCollide, s.inst),
        i.Arbiter = null,
        s.Arbiter = null),
        !0
    }, null),
    t.gravity = cp.v(0, 100),
    t.fixed_step = 1 / 30,
    t.stepping_mode = 0,
    t.sleepTimeThreshold = 1
}
,
function() {
    var t = cr.behaviors.rojoChipmunkBeta.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {
        this.behavior.lastUpdateTick = -1,
        this.behavior.rogues = []
    }
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime,
        this.space = this.behavior.space
    }
    ;
    var e = t.Instance.prototype;
    function n(t) {
        this.runtime.trigger(cr.behaviors.rojoChipmunkBeta.prototype.cnds.onPreStep, t.c2obj.inst)
    }
    function h(t) {
        return "string" == typeof t ? (t = parseInt(t.slice(), 16),
        isNaN(t) && (t = -1)) : t |= 0,
        t
    }
    function i() {}
    function s() {}
    function r() {}
    e.updateTileMap = function() {
        if (0 !== this.col_shape && 2 !== this.col_shape && 4 !== this.col_shape) {
            var t, e, i, s, n, r, o = this.inst, a = [];
            for (o.update_bbox(),
            o.getAllCollisionRects(a),
            t = 0,
            e = a.length; t < e; ++t)
                if (l = (i = a[t]).rc,
                i.poly && 3 === this.col_shape) {
                    i.poly.cp_convexpolys || (r = -2147483648 == (r = 3758096384 & i.id) || 1073741824 == r || 536870912 == r || -2147483648 & r && 1073741824 & r && 536870912 & r,
                    i.poly.cp_convexpolys = this.getConvexPolygons(i.poly, r)),
                    s = cp.v(l.left, l.top);
                    for (var h = i.poly.cp_convexpolys, c = 0; c < h.length; ++c)
                        this.shapes.push(new cp.PolyShape(this.body,h[c],s))
                } else {
                    s = cp.v(0, 0);
                    var l = [l.left, l.top, l.left, l.bottom, l.right, l.bottom, l.right, l.top];
                    this.shapes.push(new cp.PolyShape(this.body,l,s))
                }
            for (t = 0,
            e = this.shapes.length; t < e; ++t)
                (n = this.shapes[t]).group = this.col_group,
                n.layers = this.col_layers,
                n.setElasticity(this.elasticity),
                n.setFriction(this.friction),
                this.enabled && this.space.addShape(n)
        }
    }
    ,
    e.getConvexPolygons = function(t, e) {
        var i = t.pts_cache
          , s = t.pts_count
          , n = [];
        for (n.length = s,
        a = 0; a < s; a++)
            n[a] = cp.v(i[2 * a], i[2 * a + 1]);
        e && n.reverse();
        for (var r = triangles2convex(triangulate(n)), o = [], a = 0; a < r.length; ++a) {
            var h = r[a].reverse()
              , c = [];
            c.length = 2 * h.length;
            for (var l = 0; l < h.length; ++l)
                c[2 * l] = h[l].x,
                c[2 * l + 1] = h[l].y;
            o.push(c)
        }
        return o
    }
    ,
    e.updateShape = function() {
        var t = this.shapes;
        if (this.enabled)
            for (var e = 0, i = t.length; e < i; e++)
                this.space.removeShape(t[e]);
        if (t.length = 0,
        this.updateCOM(this.body),
        this.inst.tilemap_exists)
            return this.total_poly_area = 0,
            this.updateTileMap(),
            this.no_rotation = !0,
            void this.body.setMoment(1 / 0);
        var s = this.col_shape;
        3 != s || this.inst.collision_poly && !this.inst.collision_poly.is_empty() || (s = 1);
        var n, r = Math.abs(this.inst.width), o = Math.abs(this.inst.height);
        switch (s) {
        case 0:
            this.inertia = 1;
            break;
        case 1:
            this.inertia = cp.momentForBox(this.mass, r, o),
            t.push(new cp.BoxShape(this.body,r,o));
            break;
        case 2:
            this.inertia = cp.momentForCircle(this.mass, r / 2, 0, cp.v(0, 0)),
            t.push(new cp.CircleShape(this.body,o / 2,cp.v(0, 0)));
            break;
        case 3:
            this.inst.collision_poly.cache_poly(this.inst.width, this.inst.height, 0);
            var a = this.inst.width < 0 != this.inst.height < 0
              , h = this.getConvexPolygons(this.inst.collision_poly, a);
            for (cp.centroidForPoly(this.inst.collision_poly),
            e = this.total_poly_area = 0; e < h.length; ++e)
                (n = new cp.PolyShape(this.body,h[e],this.offset)).area = cp.areaForPoly(h[e]),
                this.total_poly_area += n.area,
                t.push(n);
            var c, l = 0;
            for (e = 0; e < t.length; ++e)
                c = t[e].area / this.total_poly_area,
                l += cp.momentForPoly(c * this.mass, h[e], this.offset);
            this.inertia = l;
            break;
        case 4:
            var u = 0;
            this.edgeRadius < 0 && (u = -this.edgeRadius);
            a = cp.v(-r / 2 + u, 0),
            u = cp.v(r / 2 - u, 0);
            this.inertia = cp.momentForSegment(this.mass, a, u),
            t.push(new cp.SegmentShape(this.body,a,u,Math.abs(this.edgeRadius)))
        }
        for (this.inertia <= 0 && (this.inertia = 1),
        this.immovable || this.no_rotation ? this.body.setMoment(1 / 0) : this.body.setMoment(this.inertia),
        this.body.isRogue() || this.body.activate(),
        e = 0; e < t.length; ++e)
            (n = t[e]).group = this.col_group,
            n.layers = this.col_layers,
            n.setElasticity(this.elasticity),
            n.setFriction(this.friction),
            this.enabled && this.space.addShape(n)
    }
    ,
    e.onCreate = function() {
        var t;
        this.immovable = 1 == this.properties[0],
        this.col_shape = this.properties[1],
        this.col_group = this.properties[2],
        this.col_layers = parseInt(this.properties[3], 16),
        this.mass = this.properties[4],
        this.inertia = 1,
        this.elasticity = this.properties[5],
        this.friction = this.properties[6],
        this.enabled = 0 == this.properties[7],
        this.edgeRadius = this.properties[8],
        this.no_rotation = 1 == this.properties[9],
        this.invalidateShape = !0,
        this.updateStatic = !1,
        this.offset = cp.v(0, 0),
        this.last_x = 0,
        this.last_y = 0,
        this.last_angle = 0,
        this.last_hotspotX = 0,
        this.last_hotspotY = 0,
        this.last_width = 0,
        this.last_height = 0,
        this.last_anim = null,
        this.last_anim_frame = -1,
        this.queryInfo = null,
        this.Arbiter = null,
        this.swapped = !1,
        this.total_poly_area = 0,
        this.immovable ? (t = this.body = new cp.Body(1 / 0,1 / 0),
        this.enabled && this.behavior.rogues.push(t),
        t.nodeIdleTime = 1 / 0) : (t = this.body = new cp.Body(this.mass,1),
        this.enabled && this.space.addBody(t)),
        t.wasForceApplied = !1,
        (t.c2obj = this).inst.chipmunkbetabody = t,
        this.shapes = []
    }
    ,
    e.postCreate = function() {
        this.changeShapeCheck(this.body)
    }
    ,
    e.onDestroy = function() {
        if (this.enabled)
            for (var t = 0; t < this.shapes.length; t++)
                this.space.removeShape(this.shapes[t]);
        this.shapes.length = 0;
        var e = this;
        this.body.eachConstraint(function(t) {
            e.space.removeConstraint(t)
        }),
        this.body.isRogue() ? cr.arrayFindRemove(this.behavior.rogues, this.body) : this.space.removeBody(this.body)
    }
    ,
    e.saveToJSON = function() {
        return {}
    }
    ,
    e.loadFromJSON = function(t) {}
    ,
    e.recalcOffset = function(t) {
        var e = t.c2obj
          , t = e.inst;
        t.update_bbox(),
        t.tilemap_exists ? e.offset = cp.v(0, 0) : e.offset = cp.v((t.hotspotX - .5) * t.width, (t.hotspotY - .5) * t.height)
    }
    ,
    e.updateCOM = function(t) {
        var e = t.c2obj
          , i = e.inst
          , s = !1;
        i.update_bbox(),
        e.last_width === i.width && e.last_height === i.height || (s = !0,
        e.invalidateShape = !0,
        e.last_width = i.width,
        e.last_height = i.height),
        !s && e.last_x === i.x && e.last_y === i.y && e.last_angle === i.angle && e.last_hotspotX === i.hotspotX && e.last_hotspotY === i.hotspotY || (i.tilemap_exists ? t.setPos(cp.v(i.x, i.y)) : (e.offset = cp.v((i.hotspotX - .5) * i.width, (i.hotspotY - .5) * i.height),
        t.setAngle(i.angle),
        t.setPos(cp.v.sub(cp.v(i.x, i.y), cp.v.rotate(e.offset, t.rot)))),
        t.isStatic() && (e.updateStatic = !0,
        t.activateStatic()),
        e.last_x = i.x,
        e.last_y = i.y,
        e.last_angle = i.angle,
        e.last_hotspotX = i.hotspotX,
        e.last_hotspotY = i.hotspotY)
    }
    ,
    e.updateC2 = function(t) {
        var e, i = t.c2obj, s = i.inst;
        t.wasForceApplied && (t.resetForces(),
        t.wasForceApplied = !1),
        t.isRogue() || (i.updateCOM(t),
        e = cp.v.add(t.getPos(), cp.v.rotate(i.offset, t.rot)),
        i.last_x = s.x = e.x,
        i.last_y = s.y = e.y,
        i.last_angle = s.angle = t.getAngle(),
        s.set_bbox_changed())
    }
    ,
    e.changeShapeCheck = function(t) {
        var e = t.c2obj;
        if (e.enabled && ((e.invalidateShape || e.inst.tilemap_exists && e.inst.physics_changed || e.last_width !== e.inst.width || 4 !== e.col_shape && e.last_height !== e.inst.height || 3 === e.col_shape && (e.last_anim !== e.inst.cur_animation || e.last_anim_frame !== e.inst.cur_frame)) && (e.updateShape(),
        e.inst.tilemap_exists && (e.inst.physics_changed = !1),
        e.last_width = e.inst.width,
        e.last_height = e.inst.height,
        e.last_anim = e.inst.cur_animation,
        e.last_anim_frame = e.inst.cur_frame,
        e.invalidateShape = !1,
        e.updateStatic = !1),
        e.updateStatic)) {
            for (var i = 0, s = e.shapes.length; i < s; i++)
                e.space.reindexShape(e.shapes[i]);
            e.updateStatic = !1
        }
    }
    ,
    e.tick = function() {
        var t = this.runtime.timescale;
        if (this.runtime.tickcount > this.behavior.lastUpdateTick && 0 < t) {
            this.space.eachBody(n, this),
            this.behavior.rogues.forEach(this.updateCOM),
            this.space.eachBody(this.updateCOM),
            this.behavior.rogues.forEach(this.changeShapeCheck),
            this.space.bodies.forEach(this.changeShapeCheck),
            this.space.stepping_mode ? this.space.step(this.runtime.getDt(this.inst)) : this.space.step(this.space.fixed_step * t);
            for (var e = this.space.delayedAddRemove, i = 0, s = e.length / 2; i < s; i++)
                e[2 * i].call(this.space, e[2 * i + 1]);
            e.length = 0,
            this.space.eachBody(this.updateC2),
            this.behavior.rogues.forEach(this.updateC2),
            this.behavior.lastUpdateTick = this.runtime.tickcount
        }
    }
    ,
    e.getJointHelper = function(e) {
        var i = null
          , s = 0;
        return "string" == typeof e ? this.body.eachConstraint(function(t) {
            t.tag === e && (i = t)
        }) : this.body.eachConstraint(function(t) {
            e == s && (i = t),
            s++
        }),
        i
    }
    ,
    i.prototype.isSleeping = function() {
        return this.body.isSleeping()
    }
    ,
    i.prototype.isDisabled = function() {
        return !this.enabled
    }
    ,
    i.prototype.isImmovable = function() {
        return this.immovable
    }
    ,
    i.prototype.isUnrotatable = function() {
        return this.no_rotation
    }
    ,
    i.prototype.compareCollisionShape = function(t) {
        return this.col_shape == t
    }
    ,
    i.prototype.compareSteppingMode = function(t) {
        return this.behavior.space.stepping_mode == t
    }
    ,
    i.prototype.queryPoint = function(t, e) {
        for (var i, s, n = 0; n < this.shapes.length; n++)
            s = this.shapes[n].nearestPointQuery(cp.v(t, e)),
            (!i || s.d < i.d) && (i = s);
        return !!i && (this.queryInfo = i,
        !0)
    }
    ,
    i.prototype.nearestQueryPoint = function(t, e, i, s, n) {
        var r = this.runtime.getCurrentCondition().type
          , o = new cp.NearestPointQueryInfo(null,0,0);
        if (this.behavior.space.nearestPointQuery(cp.v(t, e), i, h(n), s, function(t, e, i) {
            var s = t.body.c2obj.inst;
            (s.type == r || r.is_family && -1 != r.members.indexOf(s.type)) && (!o.shape || e < o.d) && (o.shape = t,
            o.d = e,
            o.p = i)
        }),
        !o.shape)
            return !1;
        n = o.shape.body.c2obj;
        n.queryInfo = o;
        s = n.inst,
        n = r.getCurrentSol();
        return n.select_all = !0,
        n.pick_one(s),
        r.applySolToContainer(),
        !0
    }
    ,
    i.prototype.querySegment = function(t, e, i, s) {
        for (var n, r, o = cp.v(t, e), a = cp.v(i, s), h = 0; h < this.shapes.length; h++)
            (r = this.shapes[h].segmentQuery(o, a)) && (!n || r.t < n.t) && (n = r);
        return !!n && (this.queryInfo = n,
        this.queryInfo.p1 = o,
        this.queryInfo.p2 = a,
        !0)
    }
    ,
    i.prototype.nearestQuerySegment = function(t, e, i, s, n, r) {
        var o = this.runtime.getCurrentCondition().type
          , e = cp.v(t, e)
          , s = cp.v(i, s)
          , a = new cp.SegmentQueryInfo(null,0,0);
        if (this.behavior.space.segmentQuery(e, s, h(r), n, function(t, e, i) {
            var s = t.body.c2obj.inst;
            (s.type == o || o.is_family && -1 != o.members.indexOf(s.type)) && (!a.shape || e < a.t) && (a.shape = t,
            a.t = e,
            a.n = i)
        }),
        !a.shape)
            return !1;
        n = a.shape.body.c2obj;
        (n.queryInfo = a).p1 = e,
        a.p2 = s;
        s = n.inst,
        n = o.getCurrentSol();
        return n.select_all = !0,
        n.pick_one(s),
        o.applySolToContainer(),
        !0
    }
    ,
    i.prototype.onPreStep = function() {
        return !0
    }
    ,
    i.prototype.onPostCollide = function() {
        return this.updateC2(this.body),
        !0
    }
    ,
    i.prototype.onPreCollide = function() {
        return this.updateC2(this.body),
        !0
    }
    ,
    i.prototype.forEachCollisionPair = function() {
        var s = this.runtime.getCurrentEventStack().current_event;
        return this.body.eachArbiter(function(t) {
            var e = this.c2obj;
            e.Arbiter = t,
            e.swapped = !1;
            var i = t.swappedColl;
            t.swappedColl = !1,
            e.swapped = e.inst.uid == t.getB().body.c2obj.inst.uid,
            t.swappedColl = i,
            e.runtime.pushCopySol(s.solModifiers),
            s.retrigger(),
            e.runtime.popSol(s.solModifiers),
            e.Arbiter = null
        }),
        !1
    }
    ,
    t.cnds = new i,
    e.getVector = function(t, e, i, s) {
        switch (t) {
        case 0:
            o = cp.v(e, i);
            break;
        case 1:
            e = cr.to_radians(e),
            o = cp.v(i * Math.cos(e), i * Math.sin(e));
            break;
        case 2:
            o = s.world2Local(cp.v(e, i));
            break;
        case 3:
            if (!s.c2obj) {
                o = cp.v(0, 0);
                break
            }
            var n = s.c2obj.inst;
            n.update_bbox();
            var r = e
              , o = n.getImagePoint && -1 !== r ? (e = n.getImagePoint(r, !0),
            i = n.getImagePoint(r, !1),
            s.world2Local(cp.v(e, i))) : cp.v(0, 0)
        }
        return o
    }
    ,
    s.prototype.setVelocity = function(t, e, i) {
        this.body.setVel(this.getVector(t, e, i))
    }
    ,
    s.prototype.setAngularVelocity = function(t) {
        this.body.setAngVel(cr.to_radians(t))
    }
    ,
    s.prototype.applyForceAt = function(t, e, i, s, n, r) {
        this.body.applyForce(this.getVector(t, e, i), this.getVector(s, n, r)),
        this.body.wasForceApplied = !0
    }
    ,
    s.prototype.applyImpulseAt = function(t, e, i, s, n, r) {
        this.body.applyImpulse(this.getVector(t, e, i), this.getVector(s, n, r)),
        this.body.wasForceApplied = !0
    }
    ,
    s.prototype.setTorque = function(t) {
        this.body.activate(),
        this.body.t = cr.to_radians(t),
        this.body.wasForceApplied = !0
    }
    ,
    s.prototype.setMaxSpeed = function(t) {
        this.body.v_limit = t
    }
    ,
    s.prototype.setMaxAngularSpeed = function(t) {
        this.body.w_limit = cr.to_radians(t)
    }
    ,
    s.prototype.setImmovable = function(t) {
        var e, i;
        if (0 == t && this.immovable) {
            if (this.immovable = !1,
            this.enabled) {
                for (this.body.activateStatic(),
                e = 0,
                i = this.shapes.length; e < i; e++)
                    this.space.removeShape(this.shapes[e]);
                for (cr.arrayFindRemove(this.behavior.rogues, this.body),
                this.body.setMass(this.mass),
                this.no_rotation || this.body.setMoment(this.inertia),
                this.body.nodeIdleTime = 0,
                this.space.addBody(this.body),
                e = 0,
                i = this.shapes.length; e < i; e++)
                    this.space.addShape(this.shapes[e])
            }
        } else if (1 == t && !this.immovable && (this.immovable = !0,
        this.enabled)) {
            for (e = 0,
            i = this.shapes.length; e < i; e++)
                this.space.removeShape(this.shapes[e]);
            for (this.space.removeBody(this.body),
            this.body.setMass(1 / 0),
            this.body.setMoment(1 / 0),
            this.body.nodeIdleTime = 1 / 0,
            this.behavior.rogues.push(this.body),
            this.body.vx = 0,
            this.body.vy = 0,
            e = this.body.w = 0,
            i = this.shapes.length; e < i; e++)
                this.space.addShape(this.shapes[e])
        }
    }
    ,
    s.prototype.setNoRotation = function(t) {
        this.inst.tilemap_exists || (0 == t && this.no_rotation ? (this.no_rotation = !1,
        this.immovable || this.body.setMoment(this.inertia)) : 1 != t || this.no_rotation || (this.no_rotation = !0,
        this.body.w = 0,
        this.body.setMoment(1 / 0)))
    }
    ,
    s.prototype.setCollisionShape = function(t, e) {
        this.col_shape == t && 4 == t && this.edgeRadius == e || (this.col_shape = t,
        this.edgeRadius = e,
        this.invalidateShape = !0)
    }
    ,
    s.prototype.setCollisionGroup = function(t) {
        this.body.activate(),
        this.col_group = t;
        for (var e = 0; e < this.shapes.length; e++)
            this.shapes[e].group = t
    }
    ,
    s.prototype.setCollisionLayers = function(t) {
        this.body.activate(),
        t = h(t),
        this.col_layers = t;
        for (var e = 0; e < this.shapes.length; e++)
            this.shapes[e].layers = t
    }
    ,
    s.prototype.setMass = function(t) {
        if (this.mass = t,
        this.inst.tilemap_exists)
            this.immovable || this.body.setMass(this.mass);
        else {
            var e = this.shapes[0];
            switch (this.col_shape) {
            case 0:
                this.inertia = 1;
                break;
            case 1:
                this.inertia = cp.momentForPoly(this.mass, e.verts, cp.v(0, 0));
                break;
            case 2:
                this.inertia = cp.momentForCircle(this.mass, e.r, 0, cp.v(0, 0));
                break;
            case 3:
                for (var i, s = 0, n = 0; n < this.shapes.length; ++n)
                    i = shapes[n].area / this.total_poly_area,
                    s += cp.momentForPoly(i * this.mass, polys[n], this.offset);
                this.inertia = s;
                break;
            case 4:
                this.inertia = cp.momentForSegment(this.mass, e.a, e.b)
            }
            this.inertia <= 0 && (this.inertia = 1),
            this.immovable || (this.body.setMass(this.mass),
            this.no_rotation || this.body.setMoment(this.inertia))
        }
    }
    ,
    s.prototype.setFriction = function(t) {
        this.friction = t;
        for (var e = 0; e < this.shapes.length; e++)
            this.shapes[e].setFriction(t)
    }
    ,
    s.prototype.setElasticity = function(t) {
        this.elasticity = t;
        for (var e = 0; e < this.shapes.length; e++)
            this.shapes[e].setElasticity(t)
    }
    ,
    s.prototype.disablePhysics = function(t) {
        if (!t && this.enabled) {
            this.enabled = !1,
            this.immovable ? cr.arrayFindRemove(this.behavior.rogues, this.body) : this.space.removeBody(this.body);
            for (var e = 0; e < this.shapes.length; e++)
                this.space.removeShape(this.shapes[e])
        } else if (t && !this.enabled) {
            this.enabled = !0,
            this.immovable ? this.behavior.rogues.push(this.body) : this.space.addBody(this.body);
            for (e = 0; e < this.shapes.length; e++)
                this.space.addShape(this.shapes[e])
        }
    }
    ,
    s.prototype.setGravity = function(t, e, i) {
        this.space.gravity = this.getVector(t, e, i)
    }
    ,
    s.prototype.setIterations = function(t) {
        this.space.iterations = t
    }
    ,
    s.prototype.setDamping = function(t) {
        this.space.damping = t
    }
    ,
    s.prototype.setSteppingMode = function(t) {
        this.space.stepping_mode = t
    }
    ,
    s.prototype.setFixedTimestep = function(t) {
        this.space.fixed_step = t
    }
    ,
    s.prototype.setSleepTimeThreshold = function(t) {
        this.space.sleepTimeThreshold = t
    }
    ,
    s.prototype.setIdleSpeedThreshold = function(t) {
        this.space.idleSpeedThreshold = t
    }
    ,
    e.getBody2 = function(t, e) {
        var i;
        if (this.updateCOM(t),
        -1 == e)
            i = this.space.staticBody;
        else {
            e = this.runtime.getObjectByUID(e);
            if (!e)
                return null;
            i = e.chipmunkbetabody,
            this.updateCOM(i)
        }
        return i && t != i ? i : null
    }
    ,
    s.prototype.addPinJoint = function(t, e, i, s, n, r, o, a) {
        s = this.getBody2(this.body, s);
        s && (i = this.getVector(t, e, i, this.body),
        o = this.getVector(n, r, o, s),
        (o = this.space.addConstraint(new cp.PinJoint(this.body,s,i,o))).typeName = "pin",
        o.tag = a)
    }
    ,
    s.prototype.addPivotJoint = function(t, e, i, s, n, r, o, a) {
        s = this.getBody2(this.body, s);
        s && (i = this.getVector(t, e, i, this.body),
        o = this.getVector(n, r, o, s),
        (o = this.space.addConstraint(new cp.PivotJoint(this.body,s,i,o))).typeName = "pivot",
        o.tag = a)
    }
    ,
    s.prototype.addPivotJointAtXY = function(t, e, i, s) {
        t = this.getBody2(this.body, t);
        t && ((i = this.space.addConstraint(new cp.PivotJoint(this.body,t,cp.v(e, i)))).typeName = "pivot",
        i.tag = s)
    }
    ,
    s.prototype.addGrooveJoint = function(t, e, i, s, n, r, o, a, h, c, l) {
        o = this.getBody2(this.body, o);
        o && (i = this.getVector(t, e, i, this.body),
        r = this.getVector(s, n, r, this.body),
        c = this.getVector(a, h, c, o),
        (c = this.space.addConstraint(new cp.GrooveJoint(this.body,o,i,r,c))).typeName = "groove",
        c.tag = l)
    }
    ,
    s.prototype.addSlideJoint = function(t, e, i, s, n, r, o, a, h, c) {
        s = this.getBody2(this.body, s);
        s && (i = this.getVector(t, e, i, this.body),
        o = this.getVector(n, r, o, s),
        (h = this.space.addConstraint(new cp.SlideJoint(this.body,s,i,o,a,h))).typeName = "slide",
        h.tag = c)
    }
    ,
    s.prototype.addDampedSpring = function(t, e, i, s, n, r, o, a, h, c, l) {
        s = this.getBody2(this.body, s);
        s && (i = this.getVector(t, e, i, this.body),
        o = this.getVector(n, r, o, s),
        (c = this.space.addConstraint(new cp.DampedSpring(this.body,s,i,o,a,h,c))).typeName = "spring",
        c.tag = l)
    }
    ,
    s.prototype.addDampedRotarySpring = function(t, e, i, s, n) {
        t = this.getBody2(this.body, t);
        t && ((s = this.space.addConstraint(new cp.DampedRotarySpring(this.body,t,cr.to_radians(e),i,s))).typeName = "rotarySpring",
        s.tag = n)
    }
    ,
    s.prototype.addRatchetJoint = function(t, e, i, s) {
        t = this.getBody2(this.body, t);
        t && ((i = this.space.addConstraint(new cp.RatchetJoint(this.body,t,cr.to_radians(e),cr.to_radians(i)))).typeName = "ratchet",
        i.tag = s)
    }
    ,
    s.prototype.addGearJoint = function(t, e, i, s) {
        t = this.getBody2(this.body, t);
        t && ((i = this.space.addConstraint(new cp.GearJoint(this.body,t,cr.to_radians(e),i))).typeName = "gear",
        i.tag = s)
    }
    ,
    s.prototype.addRotaryLimitJoint = function(t, e, i, s) {
        t = this.getBody2(this.body, t);
        t && ((i = this.space.addConstraint(new cp.RotaryLimitJoint(this.body,t,cr.to_radians(e),cr.to_radians(i)))).typeName = "rotaryLimit",
        i.tag = s)
    }
    ,
    s.prototype.addSimpleMotor = function(t, e, i) {
        t = this.getBody2(this.body, t);
        t && ((e = this.space.addConstraint(new cp.SimpleMotor(this.body,t,cr.to_radians(e)))).typeName = "motor",
        e.tag = i)
    }
    ,
    s.prototype.destroyConnectedJoints = function() {
        var e = this;
        this.body.eachConstraint(function(t) {
            e.space.removeConstraint(t)
        })
    }
    ,
    s.prototype.destroyJointAtTag = function(t) {
        t = this.getJointHelper(t);
        t && this.space.removeConstraint(t)
    }
    ,
    s.prototype.setMaxJointForceAtTag = function(t, e) {
        e = this.getJointHelper(e);
        e && (e.maxForce = t)
    }
    ,
    s.prototype.setJointProperty = function(t, e, i) {
        var s = this.getJointHelper(i);
        if (s)
            switch (t) {
            case 0:
                "pin" === s.typeName && (s.dist = e);
                break;
            case 1:
                "slide" === s.typeName && (s.min = e);
                break;
            case 2:
                "slide" === s.typeName && (s.max = e);
                break;
            case 3:
                "spring" === s.typeName ? s.restLength = e : "rotarySpring" === s.typeName && (s.restAngle = cr.to_radians(e));
                break;
            case 4:
                "spring" !== s.typeName && "rotarySpring" !== s.typeName || (s.stiffness = e);
                break;
            case 5:
                "spring" !== s.typeName && "rotarySpring" !== s.typeName || (s.damping = e);
                break;
            case 6:
                "rotaryLimit" === s.typeName && (s.min = cr.to_radians(e));
                break;
            case 7:
                "rotaryLimit" === s.typeName && (s.max = cr.to_radians(e));
                break;
            case 8:
                "ratchet" === s.typeName && (s.angle = cr.to_radians(e));
                break;
            case 9:
                "ratchet" === s.typeName && (s.phase = cr.to_radians(e));
                break;
            case 10:
                "ratchet" === s.typeName && (s.ratchet = cr.to_radians(e));
                break;
            case 11:
                "gear" === s.typeName && (s.phase = cr.to_radians(e));
                break;
            case 12:
                "gear" === s.typeName && (s.ratio = e);
                break;
            case 13:
                "motor" === s.typeName && (s.rate = cr.to_radians(e))
            }
    }
    ,
    s.prototype.sleepWake = function(t) {
        this.body.isRogue() || (t ? this.body.activate() : this.body.nodeIdleTime = 1 / 0)
    }
    ,
    s.prototype.ignoreCollision = function() {
        this.Arbiter && this.Arbiter.ignore()
    }
    ,
    t.acts = new s,
    r.prototype.velocityX = function(t) {
        t.set_float(this.body.vx)
    }
    ,
    r.prototype.velocityY = function(t) {
        t.set_float(this.body.vy)
    }
    ,
    r.prototype.speed = function(t) {
        var e = this.body.vx
          , i = this.body.vy;
        t.set_float(Math.sqrt(e * e + i * i))
    }
    ,
    r.prototype.angleOfMotion = function(t) {
        t.set_float(cr.to_degrees(Math.atan2(this.body.vy, this.body.vx)))
    }
    ,
    r.prototype.angVel = function(t) {
        t.set_float(cr.to_degrees(this.body.getAngVel()))
    }
    ,
    r.prototype.torque = function(t) {
        t.set_float(cr.to_degrees(this.body.t))
    }
    ,
    r.prototype.forceX = function(t) {
        t.set_float(this.body.f.x)
    }
    ,
    r.prototype.forceY = function(t) {
        t.set_float(this.body.f.y)
    }
    ,
    r.prototype.maxSpeed = function(t) {
        t.set_float(this.body.v_limit)
    }
    ,
    r.prototype.maxAngSpeed = function(t) {
        t.set_float(cr.to_degrees(this.body.w_limit))
    }
    ,
    r.prototype.group = function(t) {
        t.set_int(this.col_group)
    }
    ,
    r.prototype.layers = function(t) {
        t.set_int(this.col_layers)
    }
    ,
    r.prototype.mass = function(t) {
        this.immovable ? t.set_float(1 / 0) : t.set_float(this.body.m)
    }
    ,
    r.prototype.inertia = function(t) {
        this.immovable || this.no_rotation ? t.set_float(1 / 0) : t.set_float(this.body.i)
    }
    ,
    r.prototype.elasticity = function(t) {
        t.set_float(this.elasticity)
    }
    ,
    r.prototype.friction = function(t) {
        t.set_float(this.friction)
    }
    ,
    r.prototype.segmentRadius = function(t) {
        t.set_float(this.edgeRadius)
    }
    ,
    r.prototype.area = function(t) {
        if (this.inst.tilemap_exists || 3 === this.col_shape) {
            if (!this.total_poly_area)
                for (var e = 0; e < this.shapes.length; ++e)
                    this.total_poly_area += cp.areaForPoly(this.shapes[e].verts);
            t.set_float(this.total_poly_area)
        } else {
            var i;
            if (0 != this.shapes.length) {
                var s = this.shapes[0];
                switch (this.col_shape) {
                case 0:
                    i = 0;
                    break;
                case 1:
                    i = cp.areaForPoly(s.verts);
                    break;
                case 3:
                    i = this.total_poly_area;
                    break;
                case 2:
                    i = cp.areaForCircle(s.r, 0);
                    break;
                case 4:
                    i = cp.areaForSegment(s.a, s.b, s.r)
                }
                t.set_float(i)
            } else
                t.set_float(0)
        }
    }
    ,
    r.prototype.CoMx = function(t) {
        t.set_float(this.body.getPos().x)
    }
    ,
    r.prototype.CoMy = function(t) {
        t.set_float(this.body.getPos().y)
    }
    ,
    r.prototype.SpaceIterations = function(t) {
        t.set_int(this.space.iterations)
    }
    ,
    r.prototype.SpaceDamping = function(t) {
        t.set_float(this.space.damping)
    }
    ,
    r.prototype.SpaceTimestep = function(t) {
        this.space.stepping_mode ? t.set_float(this.runtime.getDt(this.inst)) : t.set_float(this.space.fixed_step)
    }
    ,
    r.prototype.sleepTimeThreshold = function(t) {
        t.set_float(this.space.sleepTimeThreshold)
    }
    ,
    r.prototype.idleSpeedThreshold = function(t) {
        t.set_float(this.space.idleSpeedThreshold)
    }
    ,
    r.prototype.gravityX = function(t) {
        t.set_float(this.space.gravity.x)
    }
    ,
    r.prototype.gravityY = function(t) {
        t.set_float(this.space.gravity.y)
    }
    ,
    r.prototype.queryX = function(t) {
        var e, i;
        this.queryInfo ? (this.queryInfo.p || (e = this.queryInfo.p1,
        i = this.queryInfo.p2,
        this.queryInfo.p = this.queryInfo.hitPoint(e, i)),
        t.set_float(this.queryInfo.p.x)) : t.set_float(0)
    }
    ,
    r.prototype.queryY = function(t) {
        var e, i;
        this.queryInfo ? (this.queryInfo.p || (e = this.queryInfo.p1,
        i = this.queryInfo.p2,
        this.queryInfo.p = this.queryInfo.hitPoint(e, i)),
        t.set_float(this.queryInfo.p.y)) : t.set_float(0)
    }
    ,
    r.prototype.queryDist = function(t) {
        var e, i;
        this.queryInfo ? (this.queryInfo.d || (e = this.queryInfo.p1,
        i = this.queryInfo.p2,
        this.queryInfo.d = this.queryInfo.hitDist(e, i)),
        t.set_float(this.queryInfo.d)) : t.set_float(0)
    }
    ,
    r.prototype.queryT = function(t) {
        this.queryInfo && this.queryInfo.t ? t.set_float(this.queryInfo.t) : t.set_float(0)
    }
    ,
    r.prototype.queryNormX = function(t) {
        this.queryInfo && this.queryInfo.n ? t.set_float(this.queryInfo.n.x) : t.set_float(0)
    }
    ,
    r.prototype.queryNormY = function(t) {
        this.queryInfo && this.queryInfo.n ? t.set_float(this.queryInfo.n.y) : t.set_float(0)
    }
    ,
    r.prototype.jointCount = function(t) {
        var e = 0;
        this.body.eachConstraint(function(t) {
            ++e
        }),
        t.set_int(e)
    }
    ,
    r.prototype.jointMaxForce = function(t, e) {
        e = this.getJointHelper(e);
        e ? t.set_float(e.maxForce) : t.set_float(0)
    }
    ,
    r.prototype.jointImpulse = function(t, e) {
        e = this.getJointHelper(e);
        e ? t.set_float(e.getImpulse()) : t.set_float(0)
    }
    ,
    r.prototype.jointOtherUID = function(t, e) {
        e = this.getJointHelper(e);
        e ? null == (e = e.a === this.body ? e.b : e.a).c2obj ? t.set_int(-1) : t.set_int(e.c2obj.inst.uid) : t.set_int(-2)
    }
    ,
    r.prototype.jointType = function(t, e) {
        e = this.getJointHelper(e);
        e ? t.set_string(e.typeName) : t.set_string("")
    }
    ,
    r.prototype.jointAnchorX = function(t, e) {
        e = this.getJointHelper(e);
        e && e.anchr2 ? this.body === e.a && "groove" != e.typeName ? (this.updateCOM(e.a),
        t.set_float(e.a.local2World(e.anchr1).x)) : (e.b.c2obj && this.updateCOM(e.b),
        t.set_float(e.b.local2World(e.anchr2).x)) : t.set_float(0)
    }
    ,
    r.prototype.jointAnchorY = function(t, e) {
        e = this.getJointHelper(e);
        e && e.anchr2 ? this.body === e.a && "groove" != e.typeName ? (this.updateCOM(e.a),
        t.set_float(e.a.local2World(e.anchr1).y)) : (e.b.c2obj && this.updateCOM(e.b),
        t.set_float(e.b.local2World(e.anchr2).y)) : t.set_float(0)
    }
    ,
    r.prototype.jointOtherAnchorX = function(t, e) {
        e = this.getJointHelper(e);
        e && e.anchr2 ? this.body === e.b && "groove" != e.typeName ? (this.updateCOM(e.a),
        t.set_float(e.a.local2World(e.anchr1).x)) : (e.b.c2obj && this.updateCOM(e.b),
        t.set_float(e.b.local2World(e.anchr2).x)) : t.set_float(0)
    }
    ,
    r.prototype.jointOtherAnchorY = function(t, e) {
        e = this.getJointHelper(e);
        e && e.anchr2 ? this.body === e.b && "groove" != e.typeName ? (this.updateCOM(e.a),
        t.set_float(e.a.local2World(e.anchr1).y)) : (e.b.c2obj && this.updateCOM(e.b),
        t.set_float(e.b.local2World(e.anchr2).y)) : t.set_float(0)
    }
    ,
    r.prototype.joint_PinDist = function(t, e) {
        e = this.getJointHelper(e);
        e && "pin" == e.typeName ? t.set_float(e.dist) : t.set_float(0)
    }
    ,
    r.prototype.joint_SlideMin = function(t, e) {
        e = this.getJointHelper(e);
        e && "slide" == e.typeName ? t.set_float(e.min) : t.set_float(0)
    }
    ,
    r.prototype.joint_SlideMax = function(t, e) {
        e = this.getJointHelper(e);
        e && "slide" == e.typeName ? t.set_float(e.max) : t.set_float(0)
    }
    ,
    r.prototype.joint_SpringRest = function(t, e) {
        e = this.getJointHelper(e);
        e ? "spring" == e.typeName ? t.set_float(e.restLength) : "rotarySpring" == e.typeName && t.set_float(cr.to_degrees(e.restAngle)) : t.set_float(0)
    }
    ,
    r.prototype.joint_SpringStiff = function(t, e) {
        e = this.getJointHelper(e);
        !e || "spring" != e.typeName && "rotarySpring" != e.typeName ? t.set_float(0) : t.set_float(e.stiffness)
    }
    ,
    r.prototype.joint_SpringDamp = function(t, e) {
        e = this.getJointHelper(e);
        !e || "spring" != e.typeName && "rotarySpring" != e.typeName ? t.set_float(0) : t.set_float(e.damping)
    }
    ,
    r.prototype.joint_RotaryLimitMin = function(t, e) {
        e = this.getJointHelper(e);
        e && "rotaryLimit" == e.typeName ? t.set_float(cr.to_degrees(e.min)) : t.set_float(0)
    }
    ,
    r.prototype.joint_RotaryLimitMax = function(t, e) {
        e = this.getJointHelper(e);
        e && "rotaryLimit" == e.typeName ? t.set_float(cr.to_degrees(e.max)) : t.set_float(0)
    }
    ,
    r.prototype.joint_RatchetAngle = function(t, e) {
        e = this.getJointHelper(e);
        e && "ratchet" == e.typeName ? t.set_float(cr.to_degrees(e.angle)) : t.set_float(0)
    }
    ,
    r.prototype.joint_RatchetPhase = function(t, e) {
        e = this.getJointHelper(e);
        e && "ratchet" == e.typeName ? t.set_float(cr.to_degrees(e.phase)) : t.set_float(0)
    }
    ,
    r.prototype.joint_RatchetRatchet = function(t, e) {
        e = this.getJointHelper(e);
        e && "ratchet" == e.typeName ? t.set_float(cr.to_degrees(e.ratchet)) : t.set_float(0)
    }
    ,
    r.prototype.joint_GearPhase = function(t, e) {
        e = this.getJointHelper(e);
        e && "gear" == e.typeName ? t.set_float(cr.to_degrees(e.phase)) : t.set_float(0)
    }
    ,
    r.prototype.joint_GearRatio = function(t, e) {
        e = this.getJointHelper(e);
        e && "gear" == e.typeName ? t.set_float(e.ratio) : t.set_float(0)
    }
    ,
    r.prototype.joint_MotorRate = function(t, e) {
        e = this.getJointHelper(e);
        e && "motor" == e.typeName ? t.set_float(cr.to_degrees(e.rate)) : t.set_float(0)
    }
    ,
    r.prototype.CollisionImpactX = function(t) {
        var e;
        this.Arbiter ? (e = this.Arbiter.swappedColl,
        this.Arbiter.swappedColl = this.swapped,
        t.set_float(this.Arbiter.totalImpulseWithFriction().x),
        this.Arbiter.swappedColl = e) : t.set_float(0)
    }
    ,
    r.prototype.CollisionImpactY = function(t) {
        var e;
        this.Arbiter ? (e = this.Arbiter.swappedColl,
        this.Arbiter.swappedColl = this.swapped,
        t.set_float(this.Arbiter.totalImpulseWithFriction().y),
        this.Arbiter.swappedColl = e) : t.set_float(0)
    }
    ,
    r.prototype.CollisionKE = function(t) {
        this.Arbiter ? t.set_float(this.Arbiter.totalKE()) : t.set_float(0)
    }
    ,
    r.prototype.CollisionOtherObj = function(t) {
        var e;
        this.Arbiter ? (e = this.Arbiter.swappedColl,
        this.Arbiter.swappedColl = this.swapped,
        t.set_float(this.Arbiter.getB().body.c2obj.inst.uid),
        this.Arbiter.swappedColl = e) : t.set_float(-1)
    }
    ,
    r.prototype.ContactCount = function(t) {
        this.Arbiter ? t.set_float(this.Arbiter.contacts.length) : t.set_float(0)
    }
    ,
    r.prototype.ContactPointX = function(t, e) {
        this.Arbiter && 0 <= e && e < this.Arbiter.contacts.length ? t.set_float(this.Arbiter.getPoint(e).x) : t.set_float(0)
    }
    ,
    r.prototype.ContactPointY = function(t, e) {
        this.Arbiter && 0 <= e && e < this.Arbiter.contacts.length ? t.set_float(this.Arbiter.getPoint(e).y) : t.set_float(0)
    }
    ,
    r.prototype.ContactNormX = function(t, e) {
        var i;
        this.Arbiter && 0 <= e && e < this.Arbiter.contacts.length ? (i = this.Arbiter.swappedColl,
        this.Arbiter.swappedColl = this.swapped,
        t.set_float(this.Arbiter.getNormal(e).x),
        this.Arbiter.swappedColl = i) : t.set_float(0)
    }
    ,
    r.prototype.ContactNormY = function(t, e) {
        var i;
        this.Arbiter && 0 <= e && e < this.Arbiter.contacts.length ? (i = this.Arbiter.swappedColl,
        this.Arbiter.swappedColl = this.swapped,
        t.set_float(this.Arbiter.getNormal(e).y),
        this.Arbiter.swappedColl = i) : t.set_float(0)
    }
    ,
    r.prototype.ContactDepth = function(t, e) {
        this.Arbiter && 0 <= e && e < this.Arbiter.contacts.length ? t.set_float(this.Arbiter.getDepth(e)) : t.set_float(0)
    }
    ,
    r.prototype.world2LocalX = function(t, e, i) {
        t.set_float(this.body.world2Local(cp.v(e, i)).x)
    }
    ,
    r.prototype.world2LocalY = function(t, e, i) {
        t.set_float(this.body.world2Local(cp.v(e, i)).y)
    }
    ,
    r.prototype.local2WorldX = function(t, e, i) {
        t.set_float(this.body.local2World(cp.v(e, i)).x)
    }
    ,
    r.prototype.local2WorldY = function(t, e, i) {
        t.set_float(this.body.local2World(cp.v(e, i)).y)
    }
    ,
    t.exps = new r
}(),
cr.behaviors.scrollto = function(t) {
    this.runtime = t,
    this.shakeMag = 0,
    this.shakeStart = 0,
    this.shakeEnd = 0,
    this.shakeMode = 0
}
,
function() {
    var t = cr.behaviors.scrollto.prototype;
    t.Type = function(t, e) {
        this.behavior = t,
        this.objtype = e,
        this.runtime = t.runtime
    }
    ,
    t.Type.prototype.onCreate = function() {}
    ,
    t.Instance = function(t, e) {
        this.type = t,
        this.behavior = t.behavior,
        this.inst = e,
        this.runtime = t.runtime
    }
    ;
    var e = t.Instance.prototype;
    function i() {}
    e.onCreate = function() {
        this.enabled = 0 !== this.properties[0]
    }
    ,
    e.saveToJSON = function() {
        return {
            smg: this.behavior.shakeMag,
            ss: this.behavior.shakeStart,
            se: this.behavior.shakeEnd,
            smd: this.behavior.shakeMode
        }
    }
    ,
    e.loadFromJSON = function(t) {
        this.behavior.shakeMag = t.smg,
        this.behavior.shakeStart = t.ss,
        this.behavior.shakeEnd = t.se,
        this.behavior.shakeMode = t.smd
    }
    ,
    e.tick = function() {}
    ,
    e.tick2 = function() {
        if (this.enabled) {
            for (var t, e = this.behavior.my_instances.valuesRef(), i = 0, s = 0, n = 0, r = 0, o = e.length; r < o; r++)
                (t = function(t) {
                    for (var e, i = 0, s = t.behavior_insts.length; i < s; ++i)
                        if ((e = t.behavior_insts[i]).behavior instanceof cr.behaviors.scrollto)
                            return e;
                    return null
                }(e[r])) && t.enabled && (i += e[r].x,
                s += e[r].y,
                ++n);
            var a, h = this.inst.layer.layout, c = this.runtime.kahanTime.sum, l = 0, u = 0;
            c >= this.behavior.shakeStart && c < this.behavior.shakeEnd && (a = this.behavior.shakeMag * Math.min(this.runtime.timescale, 1),
            0 === this.behavior.shakeMode && (a *= 1 - (c - this.behavior.shakeStart) / (this.behavior.shakeEnd - this.behavior.shakeStart)),
            c = Math.random() * Math.PI * 2,
            a = Math.random() * a,
            l = Math.cos(c) * a,
            u = Math.sin(c) * a),
            h.scrollToX(i / n + l),
            h.scrollToY(s / n + u)
        }
    }
    ,
    i.prototype.Shake = function(t, e, i) {
        this.behavior.shakeMag = t,
        this.behavior.shakeStart = this.runtime.kahanTime.sum,
        this.behavior.shakeEnd = this.behavior.shakeStart + e,
        this.behavior.shakeMode = i
    }
    ,
    i.prototype.SetEnabled = function(t) {
        this.enabled = 0 !== t
    }
    ,
    t.acts = new i
}(),
cr.getObjectRefTable = function() {
    return [cr.plugins_.Arr, cr.plugins_.Audio, cr.plugins_.Browser, cr.plugins_.Function, cr.plugins_.Keyboard, cr.plugins_.vooxe, cr.plugins_.Particles, cr.plugins_.LocalStorage, cr.plugins_.Mouse, cr.plugins_.Sprite, cr.plugins_.SpriteFontPlus, cr.plugins_.Text, cr.plugins_.Touch, cr.plugins_.TiledBg, cr.behaviors.Pin, cr.behaviors.Rotate, cr.behaviors.Sin, cr.behaviors.Flash, cr.behaviors.scrollto, cr.behaviors.rojoChipmunkBeta, cr.behaviors.Fade, cr.behaviors.Rex_Spline, cr.behaviors.lunarray_LiteTween, cr.system_object.prototype.cnds.IsGroupActive, cr.system_object.prototype.cnds.OnLayoutStart, cr.plugins_.Sprite.prototype.acts.Destroy, cr.plugins_.Function.prototype.acts.CallFunction, cr.system_object.prototype.cnds.CompareVar, cr.plugins_.vooxe.prototype.acts.InitAds, cr.system_object.prototype.acts.SetVar, cr.plugins_.Function.prototype.cnds.OnFunction, cr.plugins_.LocalStorage.prototype.acts.GetItem, cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, cr.system_object.prototype.cnds.Compare, cr.plugins_.LocalStorage.prototype.exps.Key, cr.plugins_.LocalStorage.prototype.exps.ItemValue, cr.system_object.prototype.exps.int, cr.system_object.prototype.cnds.Else, cr.plugins_.Function.prototype.exps.Param, cr.system_object.prototype.cnds.Repeat, cr.plugins_.Arr.prototype.acts.SetX, cr.system_object.prototype.exps.loopindex, cr.system_object.prototype.exps.tokenat, cr.plugins_.Arr.prototype.exps.At, cr.plugins_.LocalStorage.prototype.acts.SetItem, cr.plugins_.Text.prototype.acts.SetText, cr.system_object.prototype.exps.clamp, cr.system_object.prototype.exps.infinity, cr.system_object.prototype.exps.layoutname, cr.system_object.prototype.exps.viewportright, cr.system_object.prototype.exps.viewportleft, cr.system_object.prototype.exps.viewportbottom, cr.system_object.prototype.exps.viewporttop, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Arr.prototype.acts.SetSize, cr.plugins_.Arr.prototype.acts.Push, cr.system_object.prototype.cnds.For, cr.system_object.prototype.exps.random, cr.plugins_.Arr.prototype.exps.Width, cr.plugins_.Arr.prototype.acts.Delete, cr.system_object.prototype.acts.AddVar, cr.system_object.prototype.acts.CreateObject, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Sprite.prototype.exps.ImagePointX, cr.plugins_.Sprite.prototype.exps.ImagePointY, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.system_object.prototype.exps.choose, cr.plugins_.Browser.prototype.acts.ConsoleLog, cr.plugins_.Sprite.prototype.exps.UID, cr.plugins_.Function.prototype.cnds.CompareParam, cr.plugins_.Sprite.prototype.acts.SetScale, cr.plugins_.Sprite.prototype.exps.Width, cr.plugins_.Sprite.prototype.exps.Height, cr.behaviors.Sin.prototype.acts.UpdateInitialState, cr.behaviors.Pin.prototype.acts.Pin, cr.plugins_.Sprite.prototype.cnds.PickByUID, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, cr.behaviors.rojoChipmunkBeta.prototype.cnds.isDisabled, cr.behaviors.rojoChipmunkBeta.prototype.acts.disablePhysics, cr.plugins_.Sprite.prototype.acts.Spawn, cr.plugins_.Sprite.prototype.acts.SetAngle, cr.plugins_.Sprite.prototype.exps.Angle, cr.plugins_.Sprite.prototype.acts.SetY, cr.plugins_.Sprite.prototype.exps.Y, cr.system_object.prototype.exps.dt, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.plugins_.Sprite.prototype.exps.Opacity, cr.plugins_.Sprite.prototype.cnds.CompareOpacity, cr.plugins_.Sprite.prototype.acts.MoveToLayer, cr.plugins_.Sprite.prototype.acts.MoveToBottom, cr.plugins_.Sprite.prototype.exps.X, cr.system_object.prototype.exps.scrollx, cr.system_object.prototype.exps.scrolly, cr.system_object.prototype.exps.distance, cr.system_object.prototype.exps.angle, cr.plugins_.Sprite.prototype.acts.StopAnim, cr.behaviors.Rex_Spline.prototype.acts.CleanAll, cr.behaviors.Rex_Spline.prototype.acts.AddPoint, cr.system_object.prototype.exps.cos, cr.system_object.prototype.exps.sin, cr.behaviors.Rex_Spline.prototype.acts.Start, cr.behaviors.Fade.prototype.acts.StartFade, cr.behaviors.Rex_Spline.prototype.cnds.OnHitTarget, cr.system_object.prototype.cnds.ForEach, cr.plugins_.Sprite.prototype.acts.MoveAtAngle, cr.plugins_.Sprite.prototype.cnds.IsOverlappingOffset, cr.system_object.prototype.acts.Scroll, cr.system_object.prototype.exps.layoutheight, cr.plugins_.Browser.prototype.acts.ExecJs, cr.system_object.prototype.acts.Wait, cr.plugins_.Text.prototype.acts.Destroy, cr.plugins_.TiledBg.prototype.acts.Destroy, cr.plugins_.TiledBg.prototype.acts.SetInstanceVar, cr.plugins_.TiledBg.prototype.acts.SetSize, cr.plugins_.TiledBg.prototype.acts.SetAngle, cr.plugins_.Text.prototype.acts.SetInstanceVar, cr.plugins_.TiledBg.prototype.cnds.CompareInstanceVar, cr.plugins_.Text.prototype.cnds.CompareInstanceVar, cr.plugins_.Sprite.prototype.acts.SetSize, cr.plugins_.Text.prototype.acts.SetFontSize, cr.system_object.prototype.cnds.Every, cr.system_object.prototype.acts.SubVar, cr.system_object.prototype.acts.SetLayerEffectParam, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.Audio.prototype.acts.SetPaused, cr.plugins_.Audio.prototype.acts.PlayByName, cr.plugins_.Particles.prototype.acts.Destroy, cr.behaviors.lunarray_LiteTween.prototype.acts.SetTarget, cr.behaviors.lunarray_LiteTween.prototype.acts.Start, cr.behaviors.lunarray_LiteTween.prototype.acts.Reverse, cr.plugins_.Sprite.prototype.acts.AddInstanceVar, cr.system_object.prototype.exps.lerp, cr.plugins_.Sprite.prototype.cnds.CompareWidth, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, cr.system_object.prototype.acts.SetLayerOpacity, cr.system_object.prototype.exps.layeropacity, cr.system_object.prototype.acts.SetLayerScale, cr.system_object.prototype.cnds.LayerCmpOpacity, cr.system_object.prototype.acts.SetLayerVisible, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.plugins_.Mouse.prototype.cnds.IsOverObject, cr.plugins_.Mouse.prototype.acts.SetCursor, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.plugins_.Touch.prototype.cnds.OnTouchEnd, cr.system_object.prototype.exps.ceil, cr.plugins_.Text.prototype.acts.SetFontColor, cr.system_object.prototype.exps.rgb, cr.plugins_.Text.prototype.acts.SetEffectParam, cr.plugins_.Sprite.prototype.acts.SetMirrored, cr.plugins_.TiledBg.prototype.exps.Count, cr.behaviors.Sin.prototype.acts.SetActive, cr.plugins_.TiledBg.prototype.acts.SetBoolInstanceVar, cr.plugins_.TiledBg.prototype.acts.SetEffectParam, cr.plugins_.Sprite.prototype.acts.SetX, cr.plugins_.TiledBg.prototype.cnds.PickByUID, cr.behaviors.Pin.prototype.acts.Unpin, cr.behaviors.rojoChipmunkBeta.prototype.acts.setVelocity, cr.plugins_.TiledBg.prototype.cnds.IsBoolInstanceVarSet, cr.plugins_.TiledBg.prototype.acts.SubInstanceVar, cr.plugins_.TiledBg.prototype.acts.SetWidth, cr.system_object.prototype.cnds.TriggerOnce, cr.behaviors.Flash.prototype.acts.Flash, cr.plugins_.TiledBg.prototype.exps.UID, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.plugins_.Arr.prototype.cnds.CompareX, cr.plugins_.Text.prototype.exps.UID, cr.plugins_.Text.prototype.cnds.PickByUID, cr.behaviors.rojoChipmunkBeta.prototype.acts.setFixedTimestep, cr.behaviors.rojoChipmunkBeta.prototype.acts.setGravity, cr.plugins_.Arr.prototype.acts.SetXY, cr.behaviors.rojoChipmunkBeta.prototype.acts.setCollisionShape, cr.behaviors.rojoChipmunkBeta.prototype.acts.addGrooveJoint, cr.behaviors.rojoChipmunkBeta.prototype.acts.addDampedSpring, cr.plugins_.Sprite.prototype.acts.SetHeight, cr.behaviors.rojoChipmunkBeta.prototype.acts.applyForceAt, cr.system_object.prototype.cnds.IsMobile, cr.plugins_.Keyboard.prototype.cnds.IsKeyDown, cr.system_object.prototype.exps.abs, cr.behaviors.rojoChipmunkBeta.prototype.exps.speed, cr.plugins_.Sprite.prototype.cnds.PickDistance, cr.plugins_.Sprite.prototype.cnds.IsOverlapping, cr.plugins_.Sprite.prototype.cnds.IsBetweenAngles, cr.behaviors.rojoChipmunkBeta.prototype.exps.velocityY, cr.behaviors.rojoChipmunkBeta.prototype.exps.velocityX, cr.plugins_.Sprite.prototype.cnds.IsVisible, cr.plugins_.Sprite.prototype.cnds.CompareX, cr.plugins_.Sprite.prototype.cnds.IsOnScreen, cr.plugins_.Sprite.prototype.cnds.OnCollision, cr.behaviors.rojoChipmunkBeta.prototype.cnds.onPostCollide, cr.behaviors.rojoChipmunkBeta.prototype.exps.CollisionOtherObj, cr.behaviors.rojoChipmunkBeta.prototype.acts.setImmovable, cr.behaviors.rojoChipmunkBeta.prototype.acts.applyImpulseAt, cr.system_object.prototype.exps.max, cr.behaviors.rojoChipmunkBeta.prototype.exps.CollisionKE, cr.behaviors.rojoChipmunkBeta.prototype.exps.ContactPointX, cr.behaviors.rojoChipmunkBeta.prototype.exps.ContactCount, cr.behaviors.rojoChipmunkBeta.prototype.exps.ContactPointY, cr.system_object.prototype.cnds.EveryTick, cr.plugins_.Sprite.prototype.acts.SubInstanceVar, cr.plugins_.Particles.prototype.acts.SetAngle, cr.plugins_.Touch.prototype.cnds.OnTouchStart, cr.plugins_.Text.prototype.exps.X, cr.plugins_.Text.prototype.exps.Y, cr.plugins_.Text.prototype.acts.MoveToBottom, cr.system_object.prototype.exps.loadingprogress, cr.system_object.prototype.acts.GoToLayout, cr.plugins_.vooxe.prototype.cnds.onInit, cr.plugins_.vooxe.prototype.acts.ShowBanner, cr.plugins_.vooxe.prototype.cnds.onError, cr.plugins_.vooxe.prototype.cnds.onResumeGame, cr.system_object.prototype.acts.SetTimescale, cr.plugins_.Audio.prototype.acts.SetSilent, cr.system_object.prototype.exps.uppercase, cr.plugins_.Arr.prototype.cnds.CompareXY, cr.system_object.prototype.cnds.IsPreview, cr.plugins_.Sprite.prototype.acts.LoadURL, cr.plugins_.Sprite.prototype.cnds.OnURLLoaded]
}
;
