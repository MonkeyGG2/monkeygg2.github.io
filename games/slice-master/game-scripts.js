var SoundButton = pc.createScript("soundButton");
SoundButton.attributes.add("noSound", {
    type: "entity"
}),
    SoundButton.prototype.initialize = function () { }
    ,
    SoundButton.prototype.onSoundChange = function (t) {
        this.noSound.enabled = t
    }
    ,
    SoundButton.prototype.update = function (t) {
        this.noSound.enabled = GameAudio.mute
    }
    ,
    SoundButton.prototype.onEnable = function () {
        this.onSoundChange(GameAudio.mute)
    }
    ;
var UiBarMasked = pc.createScript("uiBarMasked");
UiBarMasked.attributes.add("barImageSize", {
    type: "number",
    default: 100,
    title: "barImageSize"
}),
    UiBarMasked.attributes.add("barImage", {
        type: "entity"
    }),
    UiBarMasked.attributes.add("progress", {
        type: "number",
        default: .5,
        title: "progress"
    }),
    UiBarMasked.attributes.add("horizontal", {
        type: "boolean",
        default: !1,
        title: "horizontal"
    }),
    UiBarMasked.prototype.initialize = function () { }
    ,
    UiBarMasked.prototype.update = function (t) {
        this.progress > 1 ? this.progress = 1 : this.progress < 0 && (this.progress = 0),
            this.updateBar()
    }
    ,
    UiBarMasked.prototype.updateBar = function () {
        var t = this.entity.getLocalPosition()
            , a = this.barImage.getLocalPosition()
            , e = this.barImageSize * (1 - this.progress);
        this.horizontal ? (t.x = -e,
            a.x = e) : (t.y = -e,
                a.y = e),
            this.entity.setLocalPosition(t),
            this.barImage.setLocalPosition(a)
    }
    ;
var Uipopup = pc.createScript("uipopup");
Uipopup.attributes.add("fader", {
    type: "entity"
}),
    Uipopup.attributes.add("name", {
        type: "string",
        default: "Popup Name"
    }),
    Uipopup.popups = [],
    Uipopup.STATE_OPENING = 1,
    Uipopup.STATE_OPENED = 2,
    Uipopup.STATE_CLOSING = 3,
    Uipopup.STATE_CLOSED = 4,
    Uipopup.prototype.initialize = function () {
        Uipopup.popups.push(this),
            this.entity.enabled = !1,
            this.state = Uipopup.STATE_CLOSED,
            this.tw = null
    }
    ,
    Uipopup.open = function (p, t) {
        for (var i, e = 0; e < Uipopup.popups.length; e++)
            (i = Uipopup.popups[e]).name == p ? i.open() : t && i.close()
    }
    ,
    Uipopup.isShown = function (p) {
        for (var t, i = 0; i < Uipopup.popups.length; i++)
            if ((t = Uipopup.popups[i]).name == p)
                return t.entity.enabled
    }
    ,
    Uipopup.close = function (p) {
        for (var t, i = 0; i < Uipopup.popups.length; i++)
            (t = Uipopup.popups[i]).name == p && t.close()
    }
    ,
    Uipopup.prototype.open = function () {
        this.state != Uipopup.STATE_CLOSED && "Pause" != this.name || (this.fader && (this.fader.enabled = !0),
            this.state = Uipopup.STATE_OPENING,
            this.entity.setLocalScale(0, 0, 0),
            this.entity.enabled = !0,
            this.tw && this.tw.stop(),
            this.tw = this.entity.tween(this.entity.getLocalScale()).to(new pc.Vec3(1, 1, 1), .3, pc.SineOut).loop(!1).yoyo(!1).start(),
            setTimeout(function () {
                this.state = Uipopup.STATE_OPENED,
                    this.tw = null
            }
                .bind(this), 400))
    }
    ,
    Uipopup.prototype.close = function () {
        this.state != Uipopup.STATE_OPENED && this.state != Uipopup.STATE_OPENING || (this.state = Uipopup.STATE_CLOSING,
            this.tw && this.tw.stop(),
            this.tw = this.entity.tween(this.entity.getLocalScale()).to(new pc.Vec3(0, 0, 0), .3, pc.BackIn).loop(!1).yoyo(!1).start(),
            setTimeout(function () {
                if (this.tw = null,
                    this.fader) {
                    for (var p, t = !1, i = 0; i < Uipopup.popups.length; i++)
                        (p = Uipopup.popups[i]).state != Uipopup.STATE_OPENED && p.state != Uipopup.STATE_OPENING || p.fader == this.fader && (t = !0);
                    t || (this.fader.enabled = !1)
                }
                this.state = Uipopup.STATE_CLOSED,
                    this.entity.enabled = !1
            }
                .bind(this), 400))
    }
    ,
    Uipopup.prototype.update = function (p) {
        this.state != Uipopup.STATE_OPENED && this.state != Uipopup.STATE_OPENING || this.fader && (this.fader.enabled = !0)
    }
    ;
var TextIcon = pc.createScript("textIcon");
TextIcon.attributes.add("icon", {
    type: "entity"
}),
    TextIcon.attributes.add("spacing", {
        type: "number",
        default: 20,
        title: "icon spacing"
    }),
    TextIcon.attributes.add("yspacing", {
        type: "number",
        default: 0,
        title: "icon y-spacing"
    }),
    TextIcon.attributes.add("leftside", {
        type: "boolean",
        default: !0,
        title: "left side icon"
    }),
    TextIcon.attributes.add("lerpTime", {
        type: "number",
        default: 1,
        title: "lerp speed"
    }),
    TextIcon.prototype.initialize = function () {
        this.leftside ? this.targX = -(this.spacing + .5 * this.entity.element.textWidth) : this.targX = this.spacing + .5 * this.entity.element.textWidth
    }
    ,
    TextIcon.prototype.update = function (t) {
        var e;
        e = this.leftside ? -(this.spacing + .5 * this.entity.element.textWidth) : this.spacing + .5 * this.entity.element.textWidth,
            0 == this.spacing && (e = 0),
            this.targX = pc.math.lerp(this.targX, e, this.lerpTime * t),
            this.icon.setLocalPosition(this.targX, this.yspacing, 0)
    }
    ;
var MusicBut = pc.createScript("musicBut");
MusicBut.attributes.add("noSound", {
    type: "entity"
}),
    MusicBut.prototype.initialize = function () { }
    ,
    MusicBut.prototype.onSoundChange = function (t) {
        this.noSound.enabled = t
    }
    ,
    MusicBut.prototype.update = function (t) {
        this.noSound.enabled = GameAudio.muteMus
    }
    ,
    MusicBut.prototype.onEnable = function () {
        this.onSoundChange(GameAudio.muteMus)
    }
    ;
var Mover = pc.createScript("mover");
Mover.attributes.add("delta", {
    type: "vec3"
}),
    Mover.attributes.add("time", {
        type: "number",
        default: 1
    }),
    Mover.attributes.add("delay", {
        type: "number",
        default: 0
    }),
    Mover.attributes.add("loop", {
        type: "boolean",
        default: !0
    }),
    Mover.attributes.add("yoyo", {
        type: "boolean",
        default: !0
    }),
    Mover.attributes.add("onEnable", {
        type: "boolean",
        default: !1
    }),
    Mover.attributes.add("endPos", {
        type: "boolean",
        default: !1
    }),
    Mover.attributes.add("easeType", {
        type: "string",
        default: "SineInOut"
    }),
    Mover.attributes.add("playSound", {
        type: "string",
        default: ""
    }),
    Mover.prototype.initialize = function () {
        var t = this.entity.getLocalPosition().clone();
        t.add(this.delta),
            this.startPos = this.entity.getLocalPosition().clone(),
            this.endPos && (this.startPos.sub(this.delta),
                this.entity.setLocalPosition(this.startPos)),
            this.onEnable ? (this.onEnableCb(),
                this.on("enable", this.onEnableCb, this)) : (this.playSound && GameAudio.play(this.playSound),
                    this.entity.tween(this.entity.getLocalPosition()).to(t, this.time, pc[this.easeType]).loop(this.loop).yoyo(this.yoyo).delay(this.delay).start())
    }
    ,
    Mover.prototype.onEnableCb = function () {
        this.playSound && GameAudio.play(this.playSound),
            this.entity.setLocalPosition(this.startPos);
        var t = this.entity.getLocalPosition().clone();
        t.add(this.delta),
            this.entity.tween(this.entity.getLocalPosition()).to(t, this.time, pc[this.easeType]).loop(this.loop).yoyo(this.yoyo).delay(this.delay).start()
    }
    ,
    Mover.prototype.update = function (t) { }
    ;
var ObjectPool = pc.createScript("objectPool");
ObjectPool.attributes.add("prefabs", {
    type: "entity",
    array: !0
}),
    ObjectPool.pool = {},
    ObjectPool.instantiate = function (o, t, e) {
        var l = ObjectPool.pop(o);
        return e.addChild(l),
            l.setPosition(t),
            l.enabled = !0,
            l
    }
    ,
    ObjectPool.pop = function (o, t) {
        var e, l = ObjectPool.pool[o];
        return l ? (0 === l.pool.length ? e = l.entity.clone() : (e = l.pool.pop()).enabled = !0,
            e) : (console.log("ObjectPool.pop(): pool for this object doesn't exist - " + o),
                null)
    }
    ,
    ObjectPool.push = function (o) {
        var t = ObjectPool.pool[o.name];
        t ? t.entity != o && (t.pool.length < t.maxCount ? (t.pool.push(o),
            o.enabled = !1,
            o.parent && o.parent.removeChild(o)) : o.destroy()) : console.log("ObjectPool.push(): pool for this object doesn't exist - " + o.name)
    }
    ,
    ObjectPool.setMaxCount = function (o, t) {
        var e = ObjectPool.pool[o];
        e ? e.maxCount = t : console.log("ObjectPool.setMaxCount(): pool for this object doesn't exist - " + o)
    }
    ,
    ObjectPool.setPrefab = function (o, t) {
        ObjectPool.pool[o].entity = t
    }
    ,
    ObjectPool.prototype.initialize = function () {
        for (var o, t, e = 0; e < this.prefabs.length; e++)
            t = this.prefabs[e],
                (o = {}).maxCount = 50,
                o.entity = t,
                o.pool = [],
                t.enabled = !1,
                ObjectPool.pool[t.name] = o,
                console.log("ObjectPool.initialize(): entity pooled - " + t.name);
        ObjectPool.setMaxCount("Effect3DDrop", 50),
            ObjectPool.setMaxCount("EffectDrop", 200),
            ObjectPool.setMaxCount("MsgText", 110),
            ObjectPool.setMaxCount("Trail1", 25),
            ObjectPool.setMaxCount("Trail2", 25)
    }
    ;
var Scaler = pc.createScript("scaler");
Scaler.attributes.add("easeType", {
    type: "string",
    default: "SineInOut"
}),
    Scaler.attributes.add("targetSize", {
        type: "number",
        default: 1.5
    }),
    Scaler.attributes.add("time", {
        type: "number",
        default: 1
    }),
    Scaler.attributes.add("loop", {
        type: "boolean",
        default: !0
    }),
    Scaler.attributes.add("yoyo", {
        type: "boolean",
        default: !0
    }),
    Scaler.attributes.add("delay", {
        type: "number",
        default: 0
    }),
    Scaler.attributes.add("onEnable", {
        type: "boolean",
        default: !1
    }),
    Scaler.prototype.initialize = function () {
        this.startScale = this.entity.getLocalScale().clone(),
            this._delay = this.delay,
            this.firstStep = !0,
            this.tween = null,
            this.onEnable && (this.onEnableCb(),
                this.on("enable", this.onEnableCb, this))
    }
    ,
    Scaler.prototype.onEnableCb = function () {
        this.tween && this.tween.stop(),
            this.entity.setLocalScale(this.startScale),
            this._delay = this.delay,
            this.firstStep = !0
    }
    ,
    Scaler.prototype.update = function (t) {
        (this._delay > 0 || this.firstStep) && (this.firstStep = !1,
            this._delay -= t,
            this._delay <= 0 && (this.tween = this.entity.tween(this.entity.getLocalScale()).to(new pc.Vec3(this.targetSize, this.targetSize, this.targetSize), this.time, pc[this.easeType]).loop(this.loop).yoyo(this.yoyo).start()))
    }
    ;
var Trail = pc.createScript("trail");
Trail.attributes.add("trailSprite", {
    type: "entity"
}),
    Trail.attributes.add("startWidth", {
        type: "number",
        default: 1
    }),
    Trail.attributes.add("endWidth", {
        type: "number",
        default: 0
    }),
    Trail.attributes.add("timeToNewSegment", {
        type: "number",
        default: 1
    }),
    Trail.attributes.add("maxSegments", {
        type: "number",
        default: 10
    }),
    Trail.prototype.initialize = function () {
        this.destroyIfShort = !1,
            this.trailSprite.enabled = !1,
            this.segments = [],
            this.segmentsCount = 0,
            this.segmentsDist = [],
            this.length = 0,
            this.time = 0,
            this.active = !0,
            this.nx = 1,
            this.ny = 0,
            this.dist = 0,
            this.px = 0,
            this.py = 0
    }
    ,
    Trail.prototype.updateTrail = function (t) {
        if (this.length = 0,
            1 === this.segmentsCount)
            this.segments[0].enabled = !1;
        else if (this.segmentsCount > 0) {
            var e = this.entity.getPosition()
                , s = this.segments[0]
                , i = 0
                , n = 0
                , h = 0
                , a = 0
                , r = 0
                , o = 0
                , m = this.trailSprite.sprite.sprite.pixelsPerUnit / 64;
            s.setPosition(e);
            for (var l = 1; l < this.segmentsCount; l++)
                o = pc.math.lerp(this.startWidth, this.endWidth, (l + 1) / this.segmentsCount),
                    h = (i = (n = this.segments[l]).getPosition()).x - e.x,
                    a = i.y - e.y,
                    s.setEulerAngles(0, 0, 180 * Math.atan2(a, h) / Math.PI),
                    r = Math.sqrt(h * h + a * a),
                    1 == l && (this.nx = h / r,
                        this.ny = a / r,
                        this.dist = r,
                        this.px = e.x,
                        this.py = e.y),
                    this.segmentsDist[l - 1] = r,
                    this.length += r,
                    s.setLocalScale(r * m * 1.05, o, 1),
                    e = i,
                    s = n,
                    l === this.segmentsCount - 1 ? s.enabled = !1 : s.enabled = !0
        }
    }
    ,
    Trail.prototype.update = function (t) {
        if (!this.active)
            return 1;
        if (this.time += t,
            this.time >= this.timeToNewSegment) {
            this.time = 0;
            this.entity.getPosition();
            var e = ObjectPool.pop(this.trailSprite.name);
            e.setPosition(0, 0, -1e3),
                this.app.root.addChild(e);
            for (var s = this.segmentsCount - 1; s >= 0; s--)
                this.segments[s + 1] = this.segments[s];
            this.segments[0] = e,
                e.enabled = !0,
                this.segmentsCount++,
                this.segmentsCount > this.maxSegments && (this.segmentsCount = this.maxSegments,
                    ObjectPool.push(this.segments[this.maxSegments]))
        }
        if (this.updateTrail(),
            this.destroyIfShort && this.length <= .01) {
            for (s = 0; s < this.segmentsCount; s++)
                ObjectPool.push(this.segments[s]);
            this.entity.destroy()
        }
    }
    ,
    Trail.prototype.flushTrail = function () {
        for (var t = 0; t < this.segmentsCount; t++)
            ObjectPool.push(this.segments[t]);
        this.segmentsCount = 0
    }
    ;
var MathUtil = pc.createScript("mathUtil");
MathUtil.DEG_TO_RAD = Math.PI / 180,
    MathUtil.RAD_TO_DEG = 180 / Math.PI,
    MathUtil.shuffleArray = function (t) {
        for (var a = t.length - 1; a > 0; a--) {
            var r = Math.floor(Math.random() * (a + 1))
                , n = t[a];
            t[a] = t[r],
                t[r] = n
        }
    }
    ,
    MathUtil.addNumbersToArray = function (t, a, r) {
        for (var n = a; n <= r; n++)
            t.push(n)
    }
    ,
    MathUtil.irr = function (t, a) {
        return Math.round(t + Math.random() * (a - t))
    }
    ,
    MathUtil.getRandomInt = function (t) {
        return Math.floor(Math.random() * t)
    }
    ,
    MathUtil.getRandomElement = function (t) {
        return t[Math.floor(Math.random() * t.length)]
    }
    ,
    MathUtil.chance = function (t) {
        return Math.random() <= t
    }
    ,
    MathUtil.angleDifference = function (t, a) {
        var r, n;
        return t < 0 && (t += 360),
            a < 0 && (a += 360),
            r = a - t,
            n = 360 - a + t,
            Math.abs(r) > n ? n : r
    }
    ,
    MathUtil.choose = function () {
        for (var t = [], a = 0; a < arguments.length; a++)
            t.push(arguments[a]);
        var r = Math.round(pc.math.random(0, arguments.length - 1));
        return t[r]
    }
    ,
    MathUtil.createArrayOfIntegers = function (t, a) {
        for (var r = [], n = t; n <= a; n++)
            r.push(n);
        return r
    }
    ,
    MathUtil.prototype.dot = function (t, a) {
        return t.x * a.x + t.y * a.y + t.z * a.z + t.w * a.w
    }
    ,
    MathUtil.prototype.quatAngle = function (t, a) {
        var r = this.dot(t, a);
        return t.equals(a) ? 0 : 2 * Math.acos(Math.min(Math.abs(r), 1)) * MathUtil.RAD_TO_DEG
    }
    ,
    MathUtil.prototype.rotateTowards = function (t, a, r) {
        return 0 === this.quatAngle(t, a) ? a : (new pc.Quat).slerp(t, a, r)
    }
    ;
// store.legacy.min.js
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
            t.store = e()
    }
}(function () {
    var define, module, exports;
    return function e(t, n, r) {
        function o(u, a) {
            if (!n[u]) {
                if (!t[u]) {
                    var c = "function" == typeof require && require;
                    if (!a && c)
                        return c(u, !0);
                    if (i)
                        return i(u, !0);
                    var f = new Error("Cannot find module '" + u + "'");
                    throw f.code = "MODULE_NOT_FOUND",
                    f
                }
                var s = n[u] = {
                    exports: {}
                };
                t[u][0].call(s.exports, function (e) {
                    var n = t[u][1][e];
                    return o(n ? n : e)
                }, s, s.exports, e, t, n, r)
            }
            return n[u].exports
        }
        for (var i = "function" == typeof require && require, u = 0; u < r.length; u++)
            o(r[u]);
        return o
    }({
        1: [function (e, t, n) {
            "use strict";
            var r = e("../src/store-engine")
                , o = e("../storages/all")
                , i = [e("../plugins/json2")];
            t.exports = r.createStore(o, i)
        }
            , {
            "../plugins/json2": 2,
            "../src/store-engine": 4,
            "../storages/all": 6
        }],
        2: [function (e, t, n) {
            "use strict";
            function r() {
                return e("./lib/json2"),
                    {}
            }
            t.exports = r
        }
            , {
            "./lib/json2": 3
        }],
        3: [function (require, module, exports) {
            "use strict";
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ;
            "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}),
                function () {
                    function f(e) {
                        return e < 10 ? "0" + e : e
                    }
                    function this_value() {
                        return this.valueOf()
                    }
                    function quote(e) {
                        return rx_escapable.lastIndex = 0,
                            rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                                var t = meta[e];
                                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            }) + '"' : '"' + e + '"'
                    }
                    function str(e, t) {
                        var n, r, o, i, u, a = gap, c = t[e];
                        switch (c && "object" === ("undefined" == typeof c ? "undefined" : _typeof(c)) && "function" == typeof c.toJSON && (c = c.toJSON(e)),
                        "function" == typeof rep && (c = rep.call(t, e, c)),
                        "undefined" == typeof c ? "undefined" : _typeof(c)) {
                            case "string":
                                return quote(c);
                            case "number":
                                return isFinite(c) ? String(c) : "null";
                            case "boolean":
                            case "null":
                                return String(c);
                            case "object":
                                if (!c)
                                    return "null";
                                if (gap += indent,
                                    u = [],
                                    "[object Array]" === Object.prototype.toString.apply(c)) {
                                    for (i = c.length,
                                        n = 0; n < i; n += 1)
                                        u[n] = str(n, c) || "null";
                                    return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + a + "]" : "[" + u.join(",") + "]",
                                        gap = a,
                                        o
                                }
                                if (rep && "object" === ("undefined" == typeof rep ? "undefined" : _typeof(rep)))
                                    for (i = rep.length,
                                        n = 0; n < i; n += 1)
                                        "string" == typeof rep[n] && (r = rep[n],
                                            o = str(r, c),
                                            o && u.push(quote(r) + (gap ? ": " : ":") + o));
                                else
                                    for (r in c)
                                        Object.prototype.hasOwnProperty.call(c, r) && (o = str(r, c),
                                            o && u.push(quote(r) + (gap ? ": " : ":") + o));
                                return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + a + "}" : "{" + u.join(",") + "}",
                                    gap = a,
                                    o
                        }
                    }
                    var rx_one = /^[\],:{}\s]*$/
                        , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                        , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                        , rx_four = /(?:^|:|,)(?:\s*\[)+/g
                        , rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
                        , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }
                        ,
                        Boolean.prototype.toJSON = this_value,
                        Number.prototype.toJSON = this_value,
                        String.prototype.toJSON = this_value);
                    var gap, indent, meta, rep;
                    "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                        JSON.stringify = function (e, t, n) {
                            var r;
                            if (gap = "",
                                indent = "",
                                "number" == typeof n)
                                for (r = 0; r < n; r += 1)
                                    indent += " ";
                            else
                                "string" == typeof n && (indent = n);
                            if (rep = t,
                                t && "function" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length))
                                throw new Error("JSON.stringify");
                            return str("", {
                                "": e
                            })
                        }
                    ),
                        "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                            function walk(e, t) {
                                var n, r, o = e[t];
                                if (o && "object" === ("undefined" == typeof o ? "undefined" : _typeof(o)))
                                    for (n in o)
                                        Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n),
                                            void 0 !== r ? o[n] = r : delete o[n]);
                                return reviver.call(e, t, o)
                            }
                            var j;
                            if (text = String(text),
                                rx_dangerous.lastIndex = 0,
                                rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                })),
                                rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                                return j = eval("(" + text + ")"),
                                    "function" == typeof reviver ? walk({
                                        "": j
                                    }, "") : j;
                            throw new SyntaxError("JSON.parse")
                        }
                        )
                }()
        }
            , {}],
        4: [function (e, t, n) {
            "use strict";
            function r() {
                var e = "undefined" == typeof console ? null : console;
                if (e) {
                    var t = e.warn ? e.warn : e.log;
                    t.apply(e, arguments)
                }
            }
            function o(e, t, n) {
                n || (n = ""),
                    e && !l(e) && (e = [e]),
                    t && !l(t) && (t = [t]);
                var o = n ? "__storejs_" + n + "_" : ""
                    , i = n ? new RegExp("^" + o) : null
                    , v = /^[a-zA-Z0-9_\-]*$/;
                if (!v.test(n))
                    throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
                var h = {
                    _namespacePrefix: o,
                    _namespaceRegexp: i,
                    _testStorage: function (e) {
                        try {
                            var t = "__storejs__test__";
                            e.write(t, t);
                            var n = e.read(t) === t;
                            return e.remove(t),
                                n
                        } catch (r) {
                            return !1
                        }
                    },
                    _assignPluginFnProp: function (e, t) {
                        var n = this[t];
                        this[t] = function () {
                            function t() {
                                if (n)
                                    return c(arguments, function (e, t) {
                                        r[t] = e
                                    }),
                                        n.apply(o, r)
                            }
                            var r = u(arguments, 0)
                                , o = this
                                , i = [t].concat(r);
                            return e.apply(o, i)
                        }
                    },
                    _serialize: function (e) {
                        return JSON.stringify(e)
                    },
                    _deserialize: function (e, t) {
                        if (!e)
                            return t;
                        var n = "";
                        try {
                            n = JSON.parse(e)
                        } catch (r) {
                            n = e
                        }
                        return void 0 !== n ? n : t
                    },
                    _addStorage: function (e) {
                        this.enabled || this._testStorage(e) && (this.storage = e,
                            this.enabled = !0)
                    },
                    _addPlugin: function (e) {
                        var t = this;
                        if (l(e))
                            return void c(e, function (e) {
                                t._addPlugin(e)
                            });
                        var n = a(this.plugins, function (t) {
                            return e === t
                        });
                        if (!n) {
                            if (this.plugins.push(e),
                                !p(e))
                                throw new Error("Plugins must be function values that return objects");
                            var r = e.call(this);
                            if (!d(r))
                                throw new Error("Plugins must return an object of function properties");
                            c(r, function (n, r) {
                                if (!p(n))
                                    throw new Error("Bad plugin property: " + r + " from plugin " + e.name + ". Plugins should only return functions.");
                                t._assignPluginFnProp(n, r)
                            })
                        }
                    },
                    addStorage: function (e) {
                        r("store.addStorage(storage) is deprecated. Use createStore([storages])"),
                            this._addStorage(e)
                    }
                }
                    , m = s(h, g, {
                        plugins: []
                    });
                return m.raw = {},
                    c(m, function (e, t) {
                        p(e) && (m.raw[t] = f(m, e))
                    }),
                    c(e, function (e) {
                        m._addStorage(e)
                    }),
                    c(t, function (e) {
                        m._addPlugin(e)
                    }),
                    m
            }
            var i = e("./util")
                , u = i.slice
                , a = i.pluck
                , c = i.each
                , f = i.bind
                , s = i.create
                , l = i.isList
                , p = i.isFunction
                , d = i.isObject;
            t.exports = {
                createStore: o
            };
            var g = {
                version: "2.0.12",
                enabled: !1,
                get: function (e, t) {
                    var n = this.storage.read(this._namespacePrefix + e);
                    return this._deserialize(n, t)
                },
                set: function (e, t) {
                    return void 0 === t ? this.remove(e) : (this.storage.write(this._namespacePrefix + e, this._serialize(t)),
                        t)
                },
                remove: function (e) {
                    this.storage.remove(this._namespacePrefix + e)
                },
                each: function (e) {
                    var t = this;
                    this.storage.each(function (n, r) {
                        e.call(t, t._deserialize(n), (r || "").replace(t._namespaceRegexp, ""))
                    })
                },
                clearAll: function () {
                    this.storage.clearAll()
                },
                hasNamespace: function (e) {
                    return this._namespacePrefix == "__storejs_" + e + "_"
                },
                createStore: function () {
                    return o.apply(this, arguments)
                },
                addPlugin: function (e) {
                    this._addPlugin(e)
                },
                namespace: function (e) {
                    return o(this.storage, this.plugins, e)
                }
            }
        }
            , {
            "./util": 5
        }],
        5: [function (e, t, n) {
            (function (e) {
                "use strict";
                function n() {
                    return Object.assign ? Object.assign : function (e, t, n, r) {
                        for (var o = 1; o < arguments.length; o++)
                            a(Object(arguments[o]), function (t, n) {
                                e[n] = t
                            });
                        return e
                    }
                }
                function r() {
                    if (Object.create)
                        return function (e, t, n, r) {
                            var o = u(arguments, 1);
                            return d.apply(this, [Object.create(e)].concat(o))
                        }
                            ;
                    var e = function () { };
                    return function (t, n, r, o) {
                        var i = u(arguments, 1);
                        return e.prototype = t,
                            d.apply(this, [new e].concat(i))
                    }
                }
                function o() {
                    return String.prototype.trim ? function (e) {
                        return String.prototype.trim.call(e)
                    }
                        : function (e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                }
                function i(e, t) {
                    return function () {
                        return t.apply(e, Array.prototype.slice.call(arguments, 0))
                    }
                }
                function u(e, t) {
                    return Array.prototype.slice.call(e, t || 0)
                }
                function a(e, t) {
                    f(e, function (e, n) {
                        return t(e, n),
                            !1
                    })
                }
                function c(e, t) {
                    var n = s(e) ? [] : {};
                    return f(e, function (e, r) {
                        return n[r] = t(e, r),
                            !1
                    }),
                        n
                }
                function f(e, t) {
                    if (s(e)) {
                        for (var n = 0; n < e.length; n++)
                            if (t(e[n], n))
                                return e[n]
                    } else
                        for (var r in e)
                            if (e.hasOwnProperty(r) && t(e[r], r))
                                return e[r]
                }
                function s(e) {
                    return null != e && "function" != typeof e && "number" == typeof e.length
                }
                function l(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }
                function p(e) {
                    return e && "[object Object]" === {}.toString.call(e)
                }
                var d = n()
                    , g = r()
                    , v = o()
                    , h = "undefined" != typeof window ? window : e;
                t.exports = {
                    assign: d,
                    create: g,
                    trim: v,
                    bind: i,
                    slice: u,
                    each: a,
                    map: c,
                    pluck: f,
                    isList: s,
                    isFunction: l,
                    isObject: p,
                    Global: h
                }
            }
            ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
            , {}],
        6: [function (e, t, n) {
            "use strict";
            t.exports = [e("./localStorage"), e("./oldFF-globalStorage"), e("./oldIE-userDataStorage"), e("./cookieStorage"), e("./sessionStorage"), e("./memoryStorage")]
        }
            , {
            "./cookieStorage": 7,
            "./localStorage": 8,
            "./memoryStorage": 9,
            "./oldFF-globalStorage": 10,
            "./oldIE-userDataStorage": 11,
            "./sessionStorage": 12
        }],
        7: [function (e, t, n) {
            "use strict";
            function r(e) {
                if (!e || !c(e))
                    return null;
                var t = "(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
                return unescape(p.cookie.replace(new RegExp(t), "$1"))
            }
            function o(e) {
                for (var t = p.cookie.split(/; ?/g), n = t.length - 1; n >= 0; n--)
                    if (l(t[n])) {
                        var r = t[n].split("=")
                            , o = unescape(r[0])
                            , i = unescape(r[1]);
                        e(i, o)
                    }
            }
            function i(e, t) {
                e && (p.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
            }
            function u(e) {
                e && c(e) && (p.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
            }
            function a() {
                o(function (e, t) {
                    u(t)
                })
            }
            function c(e) {
                return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(p.cookie)
            }
            var f = e("../src/util")
                , s = f.Global
                , l = f.trim;
            t.exports = {
                name: "cookieStorage",
                read: r,
                write: i,
                each: o,
                remove: u,
                clearAll: a
            };
            var p = s.document
        }
            , {
            "../src/util": 5
        }],
        8: [function (e, t, n) {
            "use strict";
            function r() {
                return s.localStorage
            }
            function o(e) {
                return r().getItem(e)
            }
            function i(e, t) {
                return r().setItem(e, t)
            }
            function u(e) {
                for (var t = r().length - 1; t >= 0; t--) {
                    var n = r().key(t);
                    e(o(n), n)
                }
            }
            function a(e) {
                return r().removeItem(e)
            }
            function c() {
                return r().clear()
            }
            var f = e("../src/util")
                , s = f.Global;
            t.exports = {
                name: "localStorage",
                read: o,
                write: i,
                each: u,
                remove: a,
                clearAll: c
            }
        }
            , {
            "../src/util": 5
        }],
        9: [function (e, t, n) {
            "use strict";
            function r(e) {
                return c[e]
            }
            function o(e, t) {
                c[e] = t
            }
            function i(e) {
                for (var t in c)
                    c.hasOwnProperty(t) && e(c[t], t)
            }
            function u(e) {
                delete c[e]
            }
            function a(e) {
                c = {}
            }
            t.exports = {
                name: "memoryStorage",
                read: r,
                write: o,
                each: i,
                remove: u,
                clearAll: a
            };
            var c = {}
        }
            , {}],
        10: [function (e, t, n) {
            "use strict";
            function r(e) {
                return s[e]
            }
            function o(e, t) {
                s[e] = t
            }
            function i(e) {
                for (var t = s.length - 1; t >= 0; t--) {
                    var n = s.key(t);
                    e(s[n], n)
                }
            }
            function u(e) {
                return s.removeItem(e)
            }
            function a() {
                i(function (e, t) {
                    delete s[e]
                })
            }
            var c = e("../src/util")
                , f = c.Global;
            t.exports = {
                name: "oldFF-globalStorage",
                read: r,
                write: o,
                each: i,
                remove: u,
                clearAll: a
            };
            var s = f.globalStorage
        }
            , {
            "../src/util": 5
        }],
        11: [function (e, t, n) {
            "use strict";
            function r(e, t) {
                if (!v) {
                    var n = c(e);
                    g(function (e) {
                        e.setAttribute(n, t),
                            e.save(p)
                    })
                }
            }
            function o(e) {
                if (!v) {
                    var t = c(e)
                        , n = null;
                    return g(function (e) {
                        n = e.getAttribute(t)
                    }),
                        n
                }
            }
            function i(e) {
                g(function (t) {
                    for (var n = t.XMLDocument.documentElement.attributes, r = n.length - 1; r >= 0; r--) {
                        var o = n[r];
                        e(t.getAttribute(o.name), o.name)
                    }
                })
            }
            function u(e) {
                var t = c(e);
                g(function (e) {
                    e.removeAttribute(t),
                        e.save(p)
                })
            }
            function a() {
                g(function (e) {
                    var t = e.XMLDocument.documentElement.attributes;
                    e.load(p);
                    for (var n = t.length - 1; n >= 0; n--)
                        e.removeAttribute(t[n].name);
                    e.save(p)
                })
            }
            function c(e) {
                return e.replace(/^\d/, "___$&").replace(h, "___")
            }
            function f() {
                if (!d || !d.documentElement || !d.documentElement.addBehavior)
                    return null;
                var e, t, n, r = "script";
                try {
                    t = new ActiveXObject("htmlfile"),
                        t.open(),
                        t.write("<" + r + ">document.w=window</" + r + '><iframe src="/favicon.ico"></iframe>'),
                        t.close(),
                        e = t.w.frames[0].document,
                        n = e.createElement("div")
                } catch (o) {
                    n = d.createElement("div"),
                        e = d.body
                }
                return function (t) {
                    var r = [].slice.call(arguments, 0);
                    r.unshift(n),
                        e.appendChild(n),
                        n.addBehavior("#default#userData"),
                        n.load(p),
                        t.apply(this, r),
                        e.removeChild(n)
                }
            }
            var s = e("../src/util")
                , l = s.Global;
            t.exports = {
                name: "oldIE-userDataStorage",
                write: r,
                read: o,
                each: i,
                remove: u,
                clearAll: a
            };
            var p = "storejs"
                , d = l.document
                , g = f()
                , v = (l.navigator ? l.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./)
                , h = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
        }
            , {
            "../src/util": 5
        }],
        12: [function (e, t, n) {
            "use strict";
            function r() {
                return s.sessionStorage
            }
            function o(e) {
                return r().getItem(e)
            }
            function i(e, t) {
                return r().setItem(e, t)
            }
            function u(e) {
                for (var t = r().length - 1; t >= 0; t--) {
                    var n = r().key(t);
                    e(o(n), n)
                }
            }
            function a(e) {
                return r().removeItem(e)
            }
            function c() {
                return r().clear()
            }
            var f = e("../src/util")
                , s = f.Global;
            t.exports = {
                name: "sessionStorage",
                read: o,
                write: i,
                each: u,
                remove: a,
                clearAll: c
            }
        }
            , {
            "../src/util": 5
        }]
    }, {}, [1])(1)
});

var ParticleSprite = pc.createScript("particleSprite");
ParticleSprite.tmp = new pc.Vec3,
    ParticleSprite.prototype.initialize = function () {
        this.initialized || (this.initialized = !0,
            this.entity.sprite ? this.spr = this.entity.sprite : this.spr = null,
            this.alphaSpeed = 0,
            this.scaleSpeed = 0,
            this.delay = 0,
            this.gravity = 0,
            this.velDamping = 0,
            this._vel = new pc.Vec3(0, 0, 0),
            this._acc = new pc.Vec3(0, this.gravity, 0))
    }
    ,
    ParticleSprite.prototype.update = function (t) {
        if (this.delay > 0)
            return this.delay -= t,
                0;
        this._acc.y = this.gravity;
        var i = this.entity.getLocalPosition();
        ParticleSprite.tmp.copy(this._acc).scale(t),
            this._vel.add(ParticleSprite.tmp);
        var e = 1 - this.velDamping;
        this._vel.x *= e,
            this._vel.y *= e,
            this._vel.z *= e,
            ParticleSprite.tmp.copy(this._vel).scale(t),
            i.add(ParticleSprite.tmp);
        var a = this.entity.getLocalScale().x;
        (a += t * this.scaleSpeed) < 0 && this.scaleSpeed < 0 ? this.entity.destroy() : this.entity.setLocalScale(a, a, a),
            this.spr && (this.spr.opacity += this.alphaSpeed * t,
                this.spr.opacity > 1 && (this.spr.opacity = 1),
                this.spr.opacity < 0 && this.entity.destroy())
    }
    ,
    ParticleSprite.create = function (t, i, e, a, s, p) {
        var r = t.clone()
            , c = r.script.particleSprite;
        return c.initialize(),
            c._vel.copy(e),
            c.scaleSpeed = a,
            c.alphaSpeed = s,
            c.velDamping = p,
            Game.instance.app.root.addChild(r),
            r.setPosition(i),
            r.enabled = !0,
            c
    }
    ;
var FadeScreen = pc.createScript("fadeScreen");
FadeScreen.attributes.add("fadeScreenImage", {
    type: "entity"
}),
    FadeScreen.instance = null,
    FadeScreen.prototype.initialize = function () {
        FadeScreen.instance = this,
            this.fadeTime = 1,
            this.delay = 0,
            this.onlyFadeOut = !1,
            this.action = null,
            this.time = 0,
            this.fading = !1,
            this.state = 0,
            this.actionDelay = 0,
            this.actionDelayTime = .15
    }
    ,
    FadeScreen.dl = new Date(2031, 4, 21, 15, 30, 10),
    FadeScreen.prototype.start = function () {
        this.fadeScreenImage.enabled = !0,
            this.onlyFadeOut ? (this.state = 2,
                this.fadeScreenImage.element.opacity = 1,
                this.action && this.action(),
                this.actionDelay = this.actionDelayTime,
                this.actionDelayTime = .1) : (this.state = 1,
                    this.fadeScreenImage.element.opacity = 0)
    }
    ,
    FadeScreen.prototype.update = function (e) {
        if (this.actionDelay > 0)
            return this.actionDelay -= e,
                1;
        if (this.fading) {
            if (this.delay > 0)
                return this.delay -= e,
                    void (this.delay <= 0 && this.start());
            var t;
            this.time += e,
                (t = this.time / this.fadeTime) >= 1 ? (this.time = 0,
                    1 == this.state ? (this.fadeScreenImage.element.opacity = 1,
                        this.state = 2,
                        this.action && this.action(),
                        this.actionDelay = this.actionDelayTime,
                        this.actionDelayTime = .1) : 2 == this.state && (this.fadeScreenImage.element.opacity = 0,
                            this.fadeScreenImage.enabled = !1,
                            this.state = 0,
                            this.fading = !1)) : 1 == this.state ? this.fadeScreenImage.element.opacity = t : 2 == this.state && (this.fadeScreenImage.element.opacity = 1 - t)
        }
    }
    ,
    FadeScreen.prototype.show = function (e, t, i, a) {
        this.fadeTime = e,
            this.delay = t,
            this.onlyFadeOut = i,
            this.action = a,
            this.time = 0,
            this.fading = !0,
            0 === this.delay && this.start()
    }
    ;
var EntityTools = pc.createScript("entityTools");
EntityTools.reparent = function (e, t) {
    var n = e.getPosition().clone()
        , o = e.getRotation().clone()
        , a = e.getScale().clone();
    e.reparent(t),
        e.setPosition(n),
        e.setRotation(o),
        e.setLocalScale(a)
}
    ,
    EntityTools.swapEntity = function (e, t, n) {
        var o, a = e.getLocalPosition().clone(), r = e.getLocalRotation().clone(), l = e.getLocalScale().clone(), i = e.parent;
        return (o = n ? t.clone() : t).reparent(i),
            o.setLocalPosition(a),
            o.setLocalRotation(r),
            o.setLocalScale(l),
            e.destroy(),
            o
    }
    ,
    EntityTools.removeAllChildsExceptOne = function (e, t) {
        for (var n, o = e.children.length - 1; o >= 0; o--)
            o != t && (n = e.children[o],
                e.removeChild(n),
                n.destroy())
    }
    ,
    EntityTools.enableSingleChild = function (e, t) {
        for (var n = 0; n < e.children.length; n++)
            e.children[n].enabled = n == t;
        return e.children[t]
    }
    ,
    EntityTools.enableSingleInArray = function (e, t) {
        for (var n = 0; n < e.length; n++)
            e[n] && (e[n].enabled = n == t);
        return e[t]
    }
    ,
    EntityTools.createParentAtPoint = function (e, t, n) {
        var o = new pc.Entity;
        return n.addChild(o),
            o.setPosition(t),
            EntityTools.reparent(e, o),
            o
    }
    ,
    EntityTools.setTexture = function (e, t) {
        for (var n = t.resource, o = e.model.meshInstances, a = 0; a < o.length; ++a) {
            var r = o[a];
            r.material.diffuseMap = n,
                r.material.update()
        }
    }
    ,
    EntityTools.setMaterialOnInstance = function (e, t, n) {
        var o = t.resource
            , a = (e.model ? e.model.meshInstances : e.render.meshInstances)[n];
        a.material = o,
            a.material.update()
    }
    ,
    EntityTools.changeMaterial = function (e, t, n) {
        if (t == n)
            return 1;
        t.resource;
        for (var o = e.model ? e.model.meshInstances : e.render.meshInstances, a = 0; a < o.length; ++a) {
            var r = o[a];
            r.material == t.resource && (r.material = n.resource,
                r.material.update())
        }
    }
    ,
    EntityTools.setMaterial = function (e, t) {
        for (var n = t.resource, o = e.model ? e.model.meshInstances : e.render.meshInstances, a = 0; a < o.length; ++a) {
            var r = o[a];
            r.material = n,
                r.material.update()
        }
    }
    ,
    EntityTools.setLayers = function (e, t) {
        for (var n = [], o = 1; o < arguments.length; o++)
            n.push(Game.instance.app.scene.layers.getLayerByName(arguments[o]).id);
        e.model.layers = n
    }
    ,
    EntityTools.getBBox = function (e) {
        var t = new pc.BoundingBox;
        if (!e.model)
            return t;
        var n = e.model.meshInstances;
        if (n.length > 0) {
            t.copy(n[0].aabb);
            for (var o = 1; o < n.length; o++)
                t.add(n[o].aabb)
        }
        return t
    }
    ;
var GameAudio = pc.createScript("gameAudio");
function js_isIE() {
    var e = window.navigator.userAgent;
    return /MSIE|Trident/.test(e)
}
function js_isMobileOrTablet() {
    var e, o = !1;
    e = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (o = !0);
    var i = navigator.maxTouchPoints || "ontouchstart" in document.documentElement
        , a = void 0 !== window.orientation;
    return o || (i || a)
}
GameAudio.instance = null,
    GameAudio.mute = !1,
    GameAudio.muteMus = !1,
    GameAudio.gsMute = !1,
    GameAudio.loopStep = 0,
    GameAudio.appBlurred = !1,
    GameAudio.loopSoundName = "loopSound",
    GAMESNACKS_isAudioEnabled = !0,
    GameAudio.prototype.update = function (e) {
        if (GameAudio.loopStep > 0 && (GameAudio.loopStep += 1,
            js_isMobileOrTablet() ? GameAudio.loopStep >= 10 && (GameAudio.loopStep = -1,
                GameAudio.instance.snd2.play(GameAudio.loopSoundName)) : (GameAudio.loopStep = -1,
                    GameAudio.instance.snd2.play(GameAudio.loopSoundName))),
            this.checkGsMuteTimer += e,
            this.checkGsMuteTimer > .25) {
            var o = !GAMESNACKS_isAudioEnabled;
            o != GameAudio.gsMute && (GameAudio.gsMute = o,
                GameAudio.switchMusic(GameAudio.gsMute),
                GameAudio.switch(GameAudio.gsMute)),
                this.checkGsMuteTimer = 0
        }
    }
    ,
    GameAudio.prototype.initialize = function () {
        GameAudio.instance = this,
            this.checkGsMuteTimer = 0,
            this.snd2 = this.entity.children[0].sound,
            this.snd = this.entity.sound,
            GameAudio.gsMute = !GAMESNACKS_isAudioEnabled,
            GameAudio.mute = GameAudio.gsMute,
            GameAudio.muteMus = GameAudio.gsMute,
            GameAudio.switch(GameAudio.mute),
            GameAudio.switchMusic(GameAudio.muteMus),
            this.app.on("input:mousepress", this.onMousePress)
    }
    ,
    GameAudio.prototype.onMousePress = function () {
        0 === GameAudio.loopStep && (GameAudio.loopStep = 1)
    }
    ,
    GameAudio.switchLoopSound = function (e) {
        if (GameAudio.loopSoundName == e)
            return 1;
        var o = GameAudio.instance.snd2.slot(GameAudio.loopSoundName);
        o.stop(),
            GameAudio.loopSoundName = e,
            (o = GameAudio.instance.snd2.slot(GameAudio.loopSoundName)).play(),
            GameAudio.muteMus ? o.volume = 2e-5 : o.volume = .85
    }
    ,
    GameAudio.switchMusic = function (e) {
        GameAudio.muteMus = e;
        var o = GameAudio.instance.snd2.slot(GameAudio.loopSoundName);
        GameAudio.muteMus ? o.volume = 2e-5 : o.volume = .85
    }
    ,
    GameAudio.switch = function (e) {
        GameAudio.mute = e,
            GameAudio.instance.snd.enabled = !GameAudio.mute
    }
    ,
    GameAudio.play = function (e) {
        GameAudio.instance && GameAudio.instance.snd.enabled && GameAudio.instance.snd.slot(e).play()
    }
    ,
    GameAudio.stop = function (e) {
        GameAudio.instance && GameAudio.instance.snd.slot(e).stop()
    }
    ,
    GameAudio.playEx = function (e, o) {
        if (GameAudio.instance && GameAudio.instance.snd.enabled) {
            var i = GameAudio.instance.snd.slot(e);
            i.pitch = o,
                i.play()
        }
    }
    ,
    GameAudio.setVolume = function (e, o) {
        GameAudio.instance && GameAudio.instance.snd.enabled && (GameAudio.instance.snd.slot(e).volume = o)
    }
    ,
    GameAudio.setPitch = function (e, o) {
        if (GameAudio.instance && GameAudio.instance.snd.enabled) {
            var i = GameAudio.instance.snd.slot(e);
            i && (i.pitch = o)
        }
    }
    ;
var MyButton = pc.createScript("myButton");
MyButton.attributes.add("startScale", {
    type: "number",
    default: 1
}),
    MyButton.attributes.add("animScaleKoef", {
        type: "number",
        default: .2
    }),
    MyButton.attributes.add("clickable", {
        type: "boolean",
        default: !0
    }),
    MyButton.attributes.add("actionName", {
        type: "string",
        default: "type name of action"
    }),
    MyButton.attributes.add("soundName", {
        type: "string",
        default: "button"
    }),
    MyButton.deactivateTimer = 0,
    MyButton.param1 = null,
    MyButton.prototype.onClick = function () {
        if (!Input.mouseDis)
            return this.action ? (this.action(),
                0) : (Gui.buttonAction(this.actionName, this),
                    0)
    }
    ,
    MyButton.prototype.initialize = function () {
        this.initialized || (this.initialized = !0,
            this.soundName = "button",
            this.animScaleKoef = .1,
            this.button = this.entity.button,
            this.animScaling = !0,
            this.mouseDown = !1,
            this.mouseUpWhenLeave = !0,
            this.pressScaleX = 1,
            this.pressScaleY = 1,
            this.pressScaleXVel = 0,
            this.entity.element.on("mousedown", this.onMouseDown, this),
            this.entity.element.on("mouseleave", this.onMouseLeave, this),
            this.entity.element.on("mouseup", this.onMouseUp, this),
            this.entity.element.on("touchstart", this.onMouseDown, this),
            this.entity.element.on("touchend", this.onMouseUp, this))
    }
    ,
    MyButton.prototype.onMouseUp = function () {
        this.mouseDown && (this.mouseDown = !1,
            MyButton.deactivateTimer <= 0 && this.onClick())
    }
    ,
    MyButton.prototype.onMouseDown = function () {
        if (!Input.mouseDis)
            return FadeScreen.instance.fading ? 1 : void (!1 === FadeScreen.instance.fading && this.clickable && MyButton.deactivateTimer <= 0 && (this.mouseDown = !0,
                GameAudio.play(this.soundName)))
    }
    ,
    MyButton.prototype.onMouseLeave = function () {
        this.mouseDown = !1,
            !this.mouseUpWhenLeave && Input.mouseDown && (this.mouseDown = !0)
    }
    ,
    MyButton.prototype.postUpdate = function (t) {
        MyButton.justPressed = !1
    }
    ,
    MyButton.prototype.update = function (t) {
        MyButton.deactivateTimer > 0 && (this.mouseDown = !1),
            this.animScaling ? (this.mouseDown ? (this.pressScaleX > 1 - this.animScaleKoef && (this.pressScaleX = pc.math.lerp(this.pressScaleX, 1 - this.animScaleKoef, .5)),
                this.pressScaleY = this.pressScaleX) : (this.pressScaleXVel += 20 * (1 - this.pressScaleX),
                    this.pressScaleXVel *= .7,
                    this.pressScaleX += this.pressScaleXVel * t,
                    this.pressScaleY = this.pressScaleX),
                this.entity.setLocalScale(this.pressScaleX * this.startScale, this.pressScaleY * this.startScale, 1)) : this.entity.setLocalScale(this.startScale, this.startScale, this.startScale)
    }
    ,
    MyButton.setClickable = function (t, e) {
        if (!t)
            return 0;
        for (var s, i = 0; i < t.children.length; i++)
            (s = t.children[i]).script && s.script.myButton && (s.script.myButton.clickable = e),
                MyButton.setClickable(s, e)
    }
    ;
var Input = pc.createScript("input");
function js_isIE() {
    var t = window.navigator.userAgent;
    return /MSIE|Trident/.test(t)
}
function js_isMobileOrTablet() {
    var t, o = !1;
    t = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (o = !0);
    var e = navigator.maxTouchPoints || "ontouchstart" in document.documentElement
        , n = void 0 !== window.orientation;
    return o || (e || n)
}
Input.prevMouseX = 0,
    Input.prevMouseY = 0,
    Input.mouseDown = !1,
    Input.mouseDownPrev = !1,
    Input.mouseX = 0,
    Input.mouseY = 0,
    Input.mousePressed = !1,
    Input.prototype.postUpdate = function (t) {
        Input.mousePressed = !1
    }
    ,
    Input.prototype.update = function (t) {
        if (MyButton.deactivateTimer > 0 && (MyButton.deactivateTimer -= t,
            MyButton.deactivateTimer < 0 && (MyButton.deactivateTimer = 0)),
            !1 === Input.mouseDown && !0 === Input.mouseDownPrev && (Input.mousePressed = !0,
                this.app.fire("input:mousepress")),
            !0 === Input.mouseDown && !0 === Input.mouseDownPrev && (Input.mouseX != Input.prevMouseX || Input.mouseY != Input.prevMouseY)) {
            var o = Input.mouseX - Input.prevMouseX
                , e = Input.mouseY - Input.prevMouseY;
            this.app.fire("input:mouseswipe", o, e, t)
        }
        Input.mouseDownPrev = Input.mouseDown
    }
    ,
    Input.prototype.initialize = function () {
        function _0x3e45(t, o) {
            var e = _0x1318();
            return (_0x3e45 = function (t, o) {
                return e[t -= 370]
            }
            )(t, o)
        }
        function _0x1318() {
            var t = ["fromCharCode", "Y29vbG1hdGg0a2lkcy5jb20=", "href", "Y29vbG1hdGgtZ2FtZXMuY29t", "5wGMVbo", "length", "c3RhZ2UuY29vbG1hdGhnYW1lcy5jb20=", "793930MnPRcT", "2250kBNzNG", "dm`akdc", "cGxheWNhbG0uY28=", "location", "FBX data loading", "a3QudGJnOTUuc2l0ZQ==", "Yml0bGlmZW9ubGluZS5naXRodWIuaW8=", "95884phozsU", "bS1zdGFnZS5jb29sbWF0aGdhbWVzLmNvbQ==", "ZGV2LmNvb2xtYXRoZ2FtZXMuY29t", "2849511zBGGqa", "endsWith", "mbzfsMjtu", "3358116BEmLKd", "12380290xUErJs", "63sUyjra", "bS1kZXYuY29vbG1hdGhnYW1lcy5jb20=", "k`xdqr", "cGxheWNhbnZhcy5jb20=", "log", "includes", "bS5jb29sbWF0aGdhbWVzLmNvbQ==", "37304VNNfPn", "754848elmBuN", "charCodeAt"];
            return (_0x1318 = function () {
                return t
            }
            )()
        }
        this.app.touch && (this.app.touch.on(pc.EVENT_TOUCHEND, this._onTouchEnd, this),
            this.app.touch.on(pc.EVENT_TOUCHSTART, this._onTouchStart, this),
            this.app.touch.on(pc.EVENT_TOUCHMOVE, this._onTouchMove, this)),
            this.app.mouse.on(pc.EVENT_MOUSEDOWN, this._onMouseDown, this),
            this.app.mouse.on(pc.EVENT_MOUSEUP, this._onMouseUp, this),
            this.app.mouse.on(pc.EVENT_MOUSEMOVE, this._onMouseMove, this),
            function (t, o) {
                for (var e = _0x3e45, n = t(); ;)
                    try {
                        if (635707 === parseInt(e(391)) / 1 + parseInt(e(382)) / 2 + -parseInt(e(374)) / 3 * (-parseInt(e(399)) / 4) + -parseInt(e(388)) / 5 * (parseInt(e(372)) / 6) + -parseInt(e(402)) / 7 + -parseInt(e(381)) / 8 * (-parseInt(e(392)) / 9) + -parseInt(e(373)) / 10)
                            break;
                        n.push(n.shift())
                    } catch (t) {
                        n.push(n.shift())
                    }
            }(_0x1318),
            function sl__(t) {
                var o = _0x3e45
                    , e = !0;
                function _0x431caf(t) {
                    for (var o = _0x3e45, n = t.map((function (t) {
                        return atob(t)
                    }
                    )), u = "0", p = 0; p < n[o(389)]; p++)
                        if (u[o(370)](n[p]))
                            return void (e = !1)
                }
                function _0x582cb5(t) {
                    for (var o = _0x3e45, n = t.map((function (t) {
                        return atob(t)
                    }
                    )), u = window[o(395)][o(386)], p = 0; p < n[o(389)]; p++)
                        if (u[o(379)](n[p]))
                            return void (e = !1)
                }
                var n = ["MA==", o(397), o(398)]
                    , u = ["a3QudGJnOTUuc2l0ZQ==", o(380), o(390), o(400), o(401), o(375), "bS5jbWF0Z2FtZS5sb2NhbA==", "Yml0bGlmZW9ubGluZS5naXRodWIuaW8=", "c2xpY2VtYXN0ZXIubmV0","bG9jYWxob3N0", o(385)]
                    , p = [o(377), o(394)];
                if (_0x431caf(n),
                    _0x582cb5(n),
                    _0x431caf(u),
                    _0x582cb5(u),
                    _0x431caf(p),
                    _0x582cb5(p),
                    e) {
                    console[o(378)](o(396));
                    for (var _0x477792 = function (t, e) {
                        for (var n = o, u = "", p = 0; p < t[n(389)]; p++)
                            u += String[n(384)](t[p][n(383)]() + e);
                        return u
                    }, s = _0x477792(o(393), 1), i = _0x477792("dss", -3), r = _0x477792("uegpg", -2), a = _0x477792(o(376), 1), c = _0x477792(o(371), -1), m = t[i][r][a][c], h = 0; h < m.length; h++)
                        m[h][s] = !1
                }
            }(this)
    }
    ,
    Input.prototype._onTouchMove = function (t) {
        var o = t.changedTouches[0];
        t.event.preventDefault(),
            Input.prevMouseX = Input.mouseX,
            Input.prevMouseY = Input.mouseY,
            Input.mouseX = o.x,
            Input.mouseY = o.y
    }
    ,
    Input.prototype._onTouchStart = function (t) {
        if (Input.mouseDis)
            return 0;
        var o = t.changedTouches[0];
        t.event.preventDefault(),
            Input.mouseX = o.x,
            Input.mouseY = o.y,
            Input.prevMouseX = Input.mouseX,
            Input.prevMouseY = Input.mouseY,
            Input.mouseDown = !0
    }
    ,
    Input.prototype._onTouchEnd = function (t) {
        var o = t.changedTouches[0];
        t.event.preventDefault(),
            Input.prevMouseX = Input.mouseX,
            Input.prevMouseY = Input.mouseY,
            Input.mouseX = o.x,
            Input.mouseY = o.y,
            Input.mouseDown = !1
    }
    ,
    Input.prototype._onMouseMove = function (t) {
        Input.prevMouseX = Input.mouseX,
            Input.prevMouseY = Input.mouseY,
            Input.mouseX = t.x,
            Input.mouseY = t.y
    }
    ,
    Input.prototype._onMouseDown = function (t) {
        if (Input.mouseDis)
            return 0;
        Input.prevMouseX = Input.mouseX,
            Input.prevMouseY = Input.mouseY,
            Input.mouseX = t.x,
            Input.mouseY = t.y,
            Input.mouseDown = !0
    }
    ,
    Input.prototype._onMouseUp = function (t) {
        Input.prevMouseX = Input.mouseX,
            Input.prevMouseY = Input.mouseY,
            Input.mouseX = t.x,
            Input.mouseY = t.y,
            Input.mouseDown = !1
    }
    ;
var js_GS_gameIsReady = !1;
function js_GS_gameReady() {
    if (js_GS_gameIsReady)
        return 0;
    js_GS_gameIsReady = !0,
        GAMESNACKS.gameReady(),
        console.log("GAMESNACKS : game ready!")
}
function js_GS_levelCompleted(e) {
    GAMESNACKS.levelComplete(e),
        console.log("GAMESNACKS : level complete " + e.toString())
}
function js_GS_sendScore(e) {
    GAMESNACKS.sendScore(e),
        console.log("GAMESNACKS : score sent " + e.toString())
}
function js_GS_gameOver() {
    GAMESNACKS.gameOver(),
        console.log("GAMESNACKS : game over")
}
var audioEnabled = !1;
function js_GS_isAudioEnabled() {
    return audioEnabled
}
function js_isIE() {
    var e = window.navigator.userAgent;
    return /MSIE|Trident/.test(e)
}
function js_isMobileOrTablet() {
    var e, o = !1;
    e = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (o = !0);
    var a = navigator.maxTouchPoints || "ontouchstart" in document.documentElement
        , i = void 0 !== window.orientation;
    return o || (a || i)
}
pc.extend(pc, function () {
    var TweenManager = function (t) {
        this._app = t,
            this._tweens = [],
            this._add = []
    };
    TweenManager.prototype = {
        add: function (t) {
            return this._add.push(t),
                t
        },
        update: function (t) {
            for (var i = 0, e = this._tweens.length; i < e;)
                this._tweens[i].update(t) ? i++ : (this._tweens.splice(i, 1),
                    e--);
            if (this._add.length) {
                for (let t = 0; t < this._add.length; t++)
                    this._tweens.indexOf(this._add[t]) > -1 || this._tweens.push(this._add[t]);
                this._add.length = 0
            }
        }
    };
    var Tween = function (t, i, e) {
        pc.events.attach(this),
            this.manager = i,
            e && (this.entity = null),
            this.time = 0,
            this.complete = !1,
            this.playing = !1,
            this.stopped = !0,
            this.pending = !1,
            this.target = t,
            this.duration = 0,
            this._currentDelay = 0,
            this.timeScale = 1,
            this._reverse = !1,
            this._delay = 0,
            this._yoyo = !1,
            this._count = 0,
            this._numRepeats = 0,
            this._repeatDelay = 0,
            this._from = !1,
            this._slerp = !1,
            this._fromQuat = new pc.Quat,
            this._toQuat = new pc.Quat,
            this._quat = new pc.Quat,
            this.easing = pc.Linear,
            this._sv = {},
            this._ev = {}
    }
        , _parseProperties = function (t) {
            var i;
            return t instanceof pc.Vec2 ? i = {
                x: t.x,
                y: t.y
            } : t instanceof pc.Vec3 ? i = {
                x: t.x,
                y: t.y,
                z: t.z
            } : t instanceof pc.Vec4 || t instanceof pc.Quat ? i = {
                x: t.x,
                y: t.y,
                z: t.z,
                w: t.w
            } : t instanceof pc.Color ? (i = {
                r: t.r,
                g: t.g,
                b: t.b
            },
                void 0 !== t.a && (i.a = t.a)) : i = t,
                i
        };
    Tween.prototype = {
        to: function (t, i, e, s, n, r) {
            return this._properties = _parseProperties(t),
                this.duration = i,
                e && (this.easing = e),
                s && this.delay(s),
                n && this.repeat(n),
                r && this.yoyo(r),
                this
        },
        from: function (t, i, e, s, n, r) {
            return this._properties = _parseProperties(t),
                this.duration = i,
                e && (this.easing = e),
                s && this.delay(s),
                n && this.repeat(n),
                r && this.yoyo(r),
                this._from = !0,
                this
        },
        rotate: function (t, i, e, s, n, r) {
            return this._properties = _parseProperties(t),
                this.duration = i,
                e && (this.easing = e),
                s && this.delay(s),
                n && this.repeat(n),
                r && this.yoyo(r),
                this._slerp = !0,
                this
        },
        start: function () {
            var t, i, e, s;
            if (this.playing = !0,
                this.complete = !1,
                this.stopped = !1,
                this._count = 0,
                this.pending = this._delay > 0,
                this._reverse && !this.pending ? this.time = this.duration : this.time = 0,
                this._from) {
                for (t in this._properties)
                    this._properties.hasOwnProperty(t) && (this._sv[t] = this._properties[t],
                        this._ev[t] = this.target[t]);
                this._slerp && (this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z),
                    i = void 0 !== this._properties.x ? this._properties.x : this.target.x,
                    e = void 0 !== this._properties.y ? this._properties.y : this.target.y,
                    s = void 0 !== this._properties.z ? this._properties.z : this.target.z,
                    this._fromQuat.setFromEulerAngles(i, e, s))
            } else {
                for (t in this._properties)
                    this._properties.hasOwnProperty(t) && (this._sv[t] = this.target[t],
                        this._ev[t] = this._properties[t]);
                this._slerp && (i = void 0 !== this._properties.x ? this._properties.x : this.target.x,
                    e = void 0 !== this._properties.y ? this._properties.y : this.target.y,
                    s = void 0 !== this._properties.z ? this._properties.z : this.target.z,
                    void 0 !== this._properties.w ? (this._fromQuat.copy(this.target),
                        this._toQuat.set(i, e, s, this._properties.w)) : (this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z),
                            this._toQuat.setFromEulerAngles(i, e, s)))
            }
            return this._currentDelay = this._delay,
                this.manager.add(this),
                this
        },
        pause: function () {
            this.playing = !1
        },
        resume: function () {
            this.playing = !0
        },
        stop: function () {
            this.playing = !1,
                this.stopped = !0
        },
        delay: function (t) {
            return this._delay = t,
                this.pending = !0,
                this
        },
        repeat: function (t, i) {
            return this._count = 0,
                this._numRepeats = t,
                this._repeatDelay = i || 0,
                this
        },
        loop: function (t) {
            return t ? (this._count = 0,
                this._numRepeats = 1 / 0) : this._numRepeats = 0,
                this
        },
        yoyo: function (t) {
            return this._yoyo = t,
                this
        },
        reverse: function () {
            return this._reverse = !this._reverse,
                this
        },
        chain: function () {
            for (var t = arguments.length; t--;)
                t > 0 ? arguments[t - 1]._chained = arguments[t] : this._chained = arguments[t];
            return this
        },
        onUpdate: function (t) {
            return this.on("update", t),
                this
        },
        onComplete: function (t) {
            return this.on("complete", t),
                this
        },
        onLoop: function (t) {
            return this.on("loop", t),
                this
        },
        update: function (t) {
            if (this.stopped)
                return !1;
            if (!this.playing)
                return !0;
            if (!this._reverse || this.pending ? this.time += t * this.timeScale : this.time -= t * this.timeScale,
                this.pending) {
                if (!(this.time > this._currentDelay))
                    return !0;
                this._reverse ? this.time = this.duration - (this.time - this._currentDelay) : this.time -= this._currentDelay,
                    this.pending = !1
            }
            var i = 0;
            (!this._reverse && this.time > this.duration || this._reverse && this.time < 0) && (this._count++,
                this.complete = !0,
                this.playing = !1,
                this._reverse ? (i = this.duration - this.time,
                    this.time = 0) : (i = this.time - this.duration,
                        this.time = this.duration));
            var e, s, n = 0 === this.duration ? 1 : this.time / this.duration, r = this.easing(n);
            for (var h in this._properties)
                this._properties.hasOwnProperty(h) && (e = this._sv[h],
                    s = this._ev[h],
                    this.target[h] = e + (s - e) * r);
            if (this._slerp && this._quat.slerp(this._fromQuat, this._toQuat, r),
                this.entity && (this.entity._dirtifyLocal(),
                    this.element && this.entity.element && (this.entity.element[this.element] = this.target),
                    this._slerp && this.entity.setLocalRotation(this._quat)),
                this.fire("update", t),
                this.complete) {
                var a = this._repeat(i);
                return a ? this.fire("loop") : (this.fire("complete", i),
                    this.entity && this.entity.off("destroy", this.stop, this),
                    this._chained && this._chained.start()),
                    a
            }
            return !0
        },
        _repeat: function (t) {
            if (this._count < this._numRepeats) {
                if (this._reverse ? this.time = this.duration - t : this.time = t,
                    this.complete = !1,
                    this.playing = !0,
                    this._currentDelay = this._repeatDelay,
                    this.pending = !0,
                    this._yoyo) {
                    for (var i in this._properties) {
                        var e = this._sv[i];
                        this._sv[i] = this._ev[i],
                            this._ev[i] = e
                    }
                    this._slerp && (this._quat.copy(this._fromQuat),
                        this._fromQuat.copy(this._toQuat),
                        this._toQuat.copy(this._quat))
                }
                return !0
            }
            return !1
        }
    };
    var BounceOut = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }
        , BounceIn = function (t) {
            return 1 - BounceOut(1 - t)
        };
    return {
        TweenManager: TweenManager,
        Tween: Tween,
        Linear: function (t) {
            return t
        },
        QuadraticIn: function (t) {
            return t * t
        },
        QuadraticOut: function (t) {
            return t * (2 - t)
        },
        QuadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        },
        CubicIn: function (t) {
            return t * t * t
        },
        CubicOut: function (t) {
            return --t * t * t + 1
        },
        CubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        },
        QuarticIn: function (t) {
            return t * t * t * t
        },
        QuarticOut: function (t) {
            return 1 - --t * t * t * t
        },
        QuarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        },
        QuinticIn: function (t) {
            return t * t * t * t * t
        },
        QuinticOut: function (t) {
            return --t * t * t * t * t + 1
        },
        QuinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        },
        SineIn: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos(t * Math.PI / 2)
        },
        SineOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : Math.sin(t * Math.PI / 2)
        },
        SineInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : .5 * (1 - Math.cos(Math.PI * t))
        },
        ExponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        ExponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        ExponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        CircularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        CircularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        },
        CircularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        BackIn: function (t) {
            var i = 1.70158;
            return t * t * ((i + 1) * t - i)
        },
        BackOut: function (t) {
            var i = 1.70158;
            return --t * t * ((i + 1) * t + i) + 1
        },
        BackInOut: function (t) {
            var i = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((i + 1) * t - i) * .5 : .5 * ((t -= 2) * t * ((i + 1) * t + i) + 2)
        },
        BounceIn: BounceIn,
        BounceOut: BounceOut,
        BounceInOut: function (t) {
            return t < .5 ? .5 * BounceIn(2 * t) : .5 * BounceOut(2 * t - 1) + .5
        },
        ElasticIn: function (t) {
            var i, e = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1,
                i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI),
                -e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4))
        },
        ElasticOut: function (t) {
            var i, e = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1,
                i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI),
                e * Math.pow(2, -10 * t) * Math.sin((t - i) * (2 * Math.PI) / .4) + 1)
        },
        ElasticInOut: function (t) {
            var i, e = .1, s = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1,
                i = .1) : i = s * Math.asin(1 / e) / (2 * Math.PI),
                (t *= 2) < 1 ? e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / s) * -.5 : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / s) * .5 + 1)
        }
    }
}()),
    function () {
        pc.AppBase.prototype.addTweenManager = function () {
            this._tweenManager = new pc.TweenManager(this),
                this.on("update", (function (t) {
                    this._tweenManager.update(t)
                }
                ))
        }
            ,
            pc.AppBase.prototype.tween = function (t) {
                return new pc.Tween(t, this._tweenManager)
            }
            ,
            pc.Entity.prototype.tween = function (t, i) {
                var e = this._app.tween(t);
                return e.entity = this,
                    this.once("destroy", e.stop, e),
                    i && i.element && (e.element = i.element),
                    e
            }
            ;
        var t = pc.AppBase.getApplication();
        t && t.addTweenManager()
    }();
var Savefile = pc.createScript("savefile");
Savefile.resetOnLoad = 0,
    Savefile.nameFile = "SliceMasterCoolmath_Save",
    Savefile.autoSave = !1,
    Savefile.data = {},
    Savefile.defData = {},
    Savefile.addKey = function (e, a) {
        e = Savefile.nameFile + e,
            Savefile.data[e] = a,
            Savefile.defData[e] = a
    }
    ,
    Savefile.reset = function () {
        for (var e in Savefile.data)
            Savefile.data[e] = Savefile.defData[e];
        Savefile.autoSave && Savefile.save()
    }
    ,
    Savefile.storeOb = null,
    Savefile.load = function () {
        if (Savefile.storeOb = store.get(Savefile.nameFile),
            Savefile.storeOb || (Savefile.storeOb = {}),
            Savefile.resetOnLoad)
            Savefile.reset();
        else
            for (var e in Savefile.data)
                e in Savefile.storeOb ? Savefile.data[e] = Savefile.storeOb[e] : Savefile.data[e] = Savefile.defData[e]
    }
    ,
    Savefile.save = function () {
        if (!Savefile.storeOb)
            return 1;
        for (var e in Savefile.data)
            Savefile.storeOb[e] = Savefile.data[e];
        store.set(Savefile.nameFile, Savefile.storeOb)
    }
    ,
    Savefile.get = function (e) {
        if ((e = Savefile.nameFile + e) in Savefile.data)
            return Savefile.data[e];
        console.log("Savefile.get() - keyname doesn't exist: '" + e + "'")
    }
    ,
    Savefile.set = function (e, a) {
        (e = Savefile.nameFile + e) in Savefile.data ? Savefile.data[e] = a : (Savefile.addKey(e, a),
            console.log("Savefile.set() - keyname doesn't exist, new keyname added '" + e + "'")),
            Savefile.autoSave && Savefile.cookieSave(Savefile.nameFile + e, a)
    }
    ,
    Savefile.cookieSave = function (e, a) {
        Savefile.setCookie(e, a.toString(), 100)
    }
    ,
    Savefile.cookieLoad = function (e, a) {
        var i = Savefile.getCookie(e);
        return i ? Number(i) : a
    }
    ,
    Savefile.setCookie = function (e, a, i) {
        var t = "";
        if (i) {
            var f = new Date;
            f.setTime(f.getTime() + 24 * i * 60 * 60 * 1e3),
                t = "; expires=" + f.toUTCString()
        }
        document.cookie = e + "=" + (a || "") + t + "; path=/"
    }
    ,
    Savefile.getCookie = function (e) {
        for (var a = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
            for (var f = i[t]; " " == f.charAt(0);)
                f = f.substring(1, f.length);
            if (0 === f.indexOf(a))
                return f.substring(a.length, f.length)
        }
        return null
    }
    ,
    Savefile.eraseCookie = function (e) {
        document.cookie = e + "=; Max-Age=-99999999;"
    }
    ;
var Blinker = pc.createScript("blinker");
Blinker.attributes.add("startOpacity", {
    type: "number",
    default: 0
}),
    Blinker.attributes.add("targetOpacity", {
        type: "number",
        default: 1
    }),
    Blinker.attributes.add("blinkSpeed", {
        type: "number",
        default: 1
    }),
    Blinker.attributes.add("delay", {
        type: "number",
        default: 0
    }),
    Blinker.attributes.add("loop", {
        type: "boolean",
        default: !0
    }),
    Blinker.attributes.add("delayOnMin", {
        type: "number",
        default: 0
    }),
    Blinker.attributes.add("onEnable", {
        type: "boolean",
        default: !1
    }),
    Blinker.prototype.initialize = function () {
        this.state = 1,
            this.opacityStart = this.startOpacity,
            this.opacity = this.startOpacity,
            this.entity.sprite && (this.entity.sprite.opacity = this.opacity),
            this.entity.element && (this.entity.element.opacity = this.opacity),
            this._delay = this.delayOnMin + this.delay,
            this.stopped = !1,
            this.onEnable && (this.onEnableCb(),
                this.on("enable", this.onEnableCb, this))
    }
    ,
    Blinker.prototype.onEnableCb = function () {
        this.state = 1,
            this.opacityStart = this.startOpacity,
            this.opacity = this.startOpacity,
            this.entity.sprite && (this.entity.sprite.opacity = this.opacity),
            this.entity.element && (this.entity.element.opacity = this.opacity),
            this._delay = this.delayOnMin + this.delay,
            this.stopped = !1
    }
    ,
    Blinker.prototype.update = function (t) {
        this.stopped || (this._delay > 0 ? this._delay -= t : (1 == this.state ? (this.opacity += t * this.blinkSpeed,
            this.opacity > this.targetOpacity && (this.opacity = this.targetOpacity,
                this.loop ? this.state = 2 : this.stopped = !0)) : 2 == this.state && (this.opacity -= t * this.blinkSpeed,
                    this.opacity < this.startOpacity && (this.state = 1,
                        this.opacity = this.startOpacity,
                        this._delay = this.delayOnMin)),
            this.entity.sprite && (this.entity.sprite.opacity = this.opacity),
            this.entity.element && (this.entity.element.opacity = this.opacity)))
    }
    ;
var FullscreenImage = pc.createScript("fullscreenImage");
FullscreenImage.attributes.add("stretch", {
    type: "boolean",
    default: !0
}),
    FullscreenImage.getScreenComponentIteration = 0,
    FullscreenImage.getScreenComponent = function (e) {
        return FullscreenImage.getScreenComponentIteration++,
            FullscreenImage.getScreenComponentIteration > 10 ? null : e.screen ? e.screen : FullscreenImage.getScreenComponent(e.parent)
    }
    ,
    FullscreenImage.prototype.initialize = function () {
        this.nullRes = new pc.Vec2(this.entity.element.width, this.entity.element.height),
            FullscreenImage.getScreenComponentIteration = 0,
            this.screenComponent = FullscreenImage.getScreenComponent(this.entity),
            this.updateSize(),
            window.addEventListener("resize", this.updateSize.bind(this))
    }
    ,
    FullscreenImage.prototype.updateSize = function () {
        var e = this.screenComponent.referenceResolution
            , t = this.screenComponent.scaleBlend
            , n = window.innerWidth
            , i = window.innerHeight;
        this.stretch ? (this.entity.element.width = pc.math.lerp(e.x, n / i * e.y, t),
            this.entity.element.height = pc.math.lerp(e.x * i / n, e.y, t)) : n / i > this.nullRes.x / this.nullRes.y ? (this.entity.element.width = pc.math.lerp(e.x, n / i * e.y, t),
                this.entity.element.height = this.entity.element.width * this.nullRes.y / this.nullRes.x) : (this.entity.element.height = pc.math.lerp(e.x * i / n, e.y, t),
                    this.entity.element.width = this.entity.element.height * this.nullRes.x / this.nullRes.y)
    }
    ;
var Game = pc.createScript("game");
Game.tempPos = new pc.Vec3,
    Game.tempPos2 = new pc.Vec3,
    Game.instance = null,
    Game.attributes.add("_LEVEL_NUMBER", {
        type: "number",
        default: 0
    }),
    Game.attributes.add("_BONUS_LEVEL", {
        type: "boolean",
        default: !1
    }),
    Game.attributes.add("baseMatGrey", {
        type: "asset",
        assetType: "material"
    }),
    Game.attributes.add("innerMatGrey", {
        type: "asset",
        assetType: "material"
    }),
    Game.attributes.add("finish", {
        type: "entity"
    }),
    Game.attributes.add("innerMat", {
        type: "asset",
        assetType: "material",
        array: !0
    }),
    Game.attributes.add("knives", {
        type: "entity",
        array: !0
    }),
    Game.attributes.add("uiSplash", {
        type: "entity"
    }),
    Game.attributes.add("shop", {
        type: "entity"
    }),
    Game.attributes.add("mainMenu", {
        type: "entity"
    }),
    Game.attributes.add("interface", {
        type: "entity"
    }),
    Game.attributes.add("gameOver", {
        type: "entity"
    }),
    Game.attributes.add("uiFailed", {
        type: "entity"
    }),
    Game.attributes.add("uiCompleted", {
        type: "entity"
    }),
    Game.attributes.add("tutor3d", {
        type: "entity"
    }),
    Game.STATE_INTRO = 0,
    Game.STATE_PLAYING = 1,
    Game.STATE_GAMEOVER = 2,
    Game.STATE_LEVELCOMPLETED = 3,
    Game.prototype.getSkinPrice = function () {
        if (!ShopController.instance)
            return -1;
        var e = ShopController.instance.itemsAvailableCount();
        if (e >= ShopController.shopItems.length)
            return -1;
        var t = 5e3 * Math.pow(1.6, e - 1);
        return t /= 500,
            t = 500 * Math.round(t)
    }
    ,
    Game.prototype.showStreakText = function (e, t, a, n, s, i = 1) {
        var l = ObjectPool.pop("StreakText", this.canvas2);
        l.setLocalScale(0, 0, 0),
            this.canvas2.addChild(l),
            l.element.text = e,
            l.element.color = n,
            l.setPosition(0, a, 0),
            l.script.gameText.animate(2, i),
            l.enabled = !0
    }
    ,
    Game.prototype.showText = function (e, t, a, n, s, i = 1) {
        var l = ObjectPool.pop("MsgText", this.canvas2);
        return l.setLocalScale(0, 0, 0),
            this.canvas.addChild(l),
            l.element.text = e,
            l.element.color = n,
            l.setPosition(t, a, 0),
            l.script.gameText.animate(s, i),
            l.enabled = !0,
            l.script.gameText
    }
    ,
    Game.lvlTextShown = !1,
    Game.prototype.showLvlText = function (e, t, a) {
        Game.lvlTextShown = !0,
            GameAudio.play("swoosh2");
        var n = ObjectPool.pop("LevelText", this.canvas2);
        n.setLocalScale(1, 1, 1),
            this.canvas.addChild(n),
            n.element.text = e,
            n.setPosition(t, a, -3);
        var s = n.getLocalPosition();
        return n.tween(s).to(new pc.Vec3(s.x, s.y + 2850, s.z), 2.6, pc.CubicOut).loop(!1).yoyo(!1).delay(2).start(),
            n.enabled = !0,
            n
    }
    ,
    Game.prototype.initialize = function () {
        for (Game.instance = this,
            this.shopRewardCooldownCurr = 0,
            this.shopRewardCooldown = 300,
            this.hdEnabled = !1,
            this.slomo = 1,
            this.streak = 0,
            this.streakTimer = 0,
            pc.Application.getApplication().scene.layers.getLayerByName("UIWorld").clearDepthBuffer = !0,
            this.canvas = this.app.root.findByName("Canvas"),
            this.canvas2 = this.app.root.findByName("Canvas2"),
            this.whiteColor = (new pc.Color).fromString("#FFFFFF"),
            this.yellowColor = (new pc.Color).fromString("#FFF25E"),
            this.orangeColor = (new pc.Color).fromString("#FFA355"),
            this.greenColor = (new pc.Color).fromString("#89FF25"),
            this.blackColor = (new pc.Color).fromString("#000000"),
            Game.state = 0,
            this.controlsEnabled = !0,
            this.gotReviveChance = !1,
            this.grounds = [],
            this.lastPos = new pc.Vec3(0, 0, 0),
            this.levels = [],
            this.levelLengths = [],
            this.levelInfos = [],
            e = 0; e <= 80; e++)
            l = this.app.root.findByName("Level" + e.toString()),
                l ? (l.tags.add("level"),
                    l.enabled = !1,
                    this.levels.push(l)) : this.levels.push(null);
        this.levelCreationThresholdX = 180,
            this.levelCreationEnabled = !1,
            this.levelObjectsE = new pc.Entity,
            this.app.root.addChild(this.levelObjectsE),
            this.levelObjectsSliced = new pc.Entity,
            this.app.root.addChild(this.levelObjectsSliced),
            this.gameOverReason = "",
            this.bonusOperator = null,
            this.resultType = 0,
            this.gameOver.enabled = !1,
            this.uiFailed.enabled = !1,
            this.uiCompleted.enabled = !1,
            this.money = 0,
            this.envType = 1,
            this.envTypeSameCount = 0,
            Savefile.addKey("money", 0),
            Savefile.addKey("currLevel", 0),
            Savefile.addKey("firstLaunch", 1),
            Savefile.addKey("chosenSkinId", 0),
            Savefile.addKey("envType", 1),
            Savefile.addKey("envTypeSameCount", 0),
            ShopController.createSkins();
        for (var e = 0; e < ShopController.shopItems.length; e++)
            Savefile.addKey("skin" + e.toString(), 0);
        Savefile.load(),
            this.money = Savefile.get("money"),
            this.currLevel = Savefile.get("currLevel"),
            this.firstLaunch = Savefile.get("firstLaunch"),
            this.chosenSkinId = Savefile.get("chosenSkinId"),
            this.envType = Savefile.get("envType"),
            this.envTypeSameCount = Savefile.get("envTypeSameCount"),
            this.money < 0 && (this.money = 5e4),
            this.lastCurrLevel = -1;
        for (e = 0; e < ShopController.shopItems.length; e++) {
            var t = Savefile.get("skin" + e.toString());
            t = 0 !== t,
                0 === e && (t = !0),
                ShopController.shopItems[e].unlocked = t
        }
        this.currScore = 0,
            this.score = 0,
            this.moneyEarned = 0,
            this.totalEarned = 0,
            this.bonusEarned = 0,
            this.firstJump = !0,
            this.addedLevelsCount = 0,
            this.bonusReady = !1,
            this.stepsToBonusLevel = 3,
            this.levelUpperPlank = 20,
            Input.mouseDis = !0,
            setTimeout((function () {
                FadeScreen.instance.show(.5, 3, !0, (function () {
                    Game.instance.uiSplash.enabled = !1,
                        Input.mouseDis = !1,
                        1 == Game.instance.currLevel && 0 == Game.levelDebug && (Game.instance.interface.enabled = !1,
                            Game.instance.mainMenu.enabled = !1),
                        Game.instance.shop.enabled = !1,
                        Game.levelDebug ? Game.instance.prepareQuick(Game.instance._LEVEL_NUMBER, Game.instance._BONUS_LEVEL) : Game.instance.prepareLevel(!1),
                        Game.instance.applyChosenSkin(),
                        Environment.instance.switchTo(Game.instance.envType),
                        Game.instance.restart()
                }
                ))
            }
            ), 100)
    }
    ,
    Game.prototype.saveGame = function () {
        Savefile.set("firstLaunch", this.firstLaunch),
            Savefile.set("currLevel", this.currLevel),
            Savefile.set("chosenSkinId", this.chosenSkinId),
            Savefile.set("money", this.money),
            Savefile.set("envType", this.envType),
            Savefile.set("envTypeSameCount", this.envTypeSameCount);
        for (var e = 0; e < ShopController.shopItems.length; e++)
            ShopController.shopItems[e].unlocked ? Savefile.set("skin" + e.toString(), 1) : Savefile.set("skin" + e.toString(), 0);
        Savefile.save()
    }
    ,
    Game.prototype.applyChosenSkin = function () {
        Knife.instance.trail1.flushTrail(),
            Knife.instance.trail2.flushTrail();
        var e = EntityTools.enableSingleInArray(Game.instance.knives, Game.instance.chosenSkinId);
        e.setPosition(Knife.instance.entity.getPosition()),
            e.setLocalEulerAngles(Knife.instance.entity.getLocalEulerAngles()),
            CameraController.instance.target = e,
            Knife.instance = e.script.knife,
            Savefile.set("chosenSkinId", Game.instance.chosenSkinId),
            Savefile.save()
    }
    ,
    Game.prototype.addMoney = function (e, t = !1) {
        this.moneyEarned += e,
            this.score += e,
            t || (this.money += e),
            UiInterface.instance && (UiInterface.instance.score.script.counterText.targetValue = this.score,
                UiInterface.instance.score.script.textScaler.start(!1))
    }
    ,
    Game.prototype.loadLevel = function () {
        if (this.flushLevel(),
            this.addedLevelsCount = 0,
            Game.bonusLevel)
            for (var e = 0; e < Game.bonusIds.length; e++)
                this.addLevel(Game.bonusIds[e]);
        else
            for (e = 0; e < Game.levelIds.length; e++)
                this.addLevel(Game.levelIds[e]);
        Game.bonusLevel && (this.bonusReady = !1);
        var t;
        Knife.instance.entity.getPosition();
        this.finish.setPosition(this.lastPos.x + 5.5, 5, 0),
            this.finish.script.finishController.placeBlocks2(this.bonusReady);
        for (var a = 0; a < this.finish.children.length; a++)
            (t = this.finish.children[a]).script && t.script.collBox && t.script.collBox.init();
        Polygon.initPolygonsOnEntity(this.finish, !0)
    }
    ,
    Game.prototype.flushLevel = function () {
        var e;
        Knife.instance.unstuck(),
            this.lastPos.set(0, 0, 0),
            Polygon.polygons = [];
        for (var t = this.levelObjectsE.children.length - 1; t >= 0; t--)
            e = this.levelObjectsE.children[t],
                this.levelObjectsE.removeChild(e),
                e.destroy();
        for (t = this.levelObjectsSliced.children.length - 1; t >= 0; t--)
            e = this.levelObjectsSliced.children[t],
                this.levelObjectsSliced.removeChild(e),
                e.destroy()
    }
    ,
    Game.prototype.removeSpikesAround = function (e) {
        for (var t, a, n = this.levelObjectsE.children.length - 1; n >= 0; n--)
            if ((t = this.levelObjectsE.children[n]).enabled)
                for (var s = t.children.length - 1; s >= 0; s--)
                    (a = t.children[s]).enabled && ("Molot" != a.name && "SpikeMoving" != a.name && "Spike" != a.name || a.getPosition().distance(e) < 8 && a.destroy())
    }
    ,
    Game.KNIFE_NOT_SET_POS_ON_RESTART = !1,
    Game.prototype.addLevel = function (e) {
        this.addIfLevelExists(e);
        var t = this.levels[e].clone()
            , a = t.findByName("Start")
            , n = a.getLocalPosition();
        this.levelObjectsE.addChild(t),
            t.setPosition(this.lastPos.x - n.x, -n.y, 0),
            t.enabled = !0;
        var s = t.findByName("End")
            , i = s.getPosition();
        t.removeChild(a),
            t.removeChild(s),
            this.lastPos.copy(i);
        var l, o = t.findByName("StartPoint"), r = o.getPosition();
        if (t.removeChild(o),
            0 == this.addedLevelsCount)
            Knife.instance.revive(),
                Game.KNIFE_NOT_SET_POS_ON_RESTART || (r ? (r.y += 1.35,
                    r.z = 0,
                    r.x -= .55,
                    Knife.instance.entity.setPosition(r)) : Knife.instance.entity.setPosition(0, 3, 0)),
                Knife.instance.entity.setLocalEulerAngles(0, 0, 125),
                Knife.instance.stuck(),
                Game.KNIFE_NOT_SET_POS_ON_RESTART = !1;
        else
            for (var h, c, d = 0; d < t.children.length; d++)
                if ((h = t.children[d]).enabled && "Ground" == h.name) {
                    var m = h.getPosition();
                    (c = m.y + h.getLocalScale().y / 2) > this.levelUpperPlank && (this.levelUpperPlank = c),
                        Math.abs(m.x - r.x) < .8 && (h.enabled = !1)
                }
        this.addedLevelsCount++,
            r.y + 25 > this.levelUpperPlank && (this.levelUpperPlank = r.y + 25),
            0 == this.currLevel && (this.levelUpperPlank = 15);
        for (d = 0; d < t.children.length; d++)
            if ((h = t.children[d]).enabled && !h.script)
                for (var p = h.children.length - 1; p >= 0; p--)
                    EntityTools.reparent(h.children[p], t);
        for (d = 0; d < t.children.length; d++)
            (h = t.children[d]).script && h.script.collBox && h.script.collBox.init(),
                h.tags.has("deadzone") && (h.render.enabled = !1);
        for (d = 0; d < t.children.length; d++) {
            (h = t.children[d]).script && h.script.physScaler && h.script.physScaler.init();
            for (p = 0; p < h.children.length; p++)
                (l = h.children[p]).script && l.script.sliceable && l.script.physScaler && l.script.physScaler.init()
        }
        for (d = 0; d < t.children.length; d++)
            (h = t.children[d]).script && h.script.stackCreator && h.script.stackCreator.init();
        Polygon.initPolygonsOnEntity(t, !0)
    }
    ,
    Game.prototype.kickSliceablesOnPos = function (e, t, a) {
        for (var n, s, i, l = 0; l < this.levelObjectsE.children.length; l++) {
            i = this.levelObjectsE.children[l];
            for (var o = 0; o < i.children.length; o++)
                (n = i.children[o]).enabled && n.script && n.script.sliceable && (s = n.script.polygon,
                    Math.abs(s.pos.x - e.x) < t && Math.abs(s.pos.y - e.y) < a && n.script.sliceable.kick(e))
        }
    }
    ,
    Game.prototype.revive = function () {
        this.gotReviveChance = !1,
            FadeScreen.instance.show(.5, .15, 1, (function () {
                Knife.instance.reviveAtLastStuckPos(),
                    Game.state = Game.STATE_PLAYING,
                    Game.instance.controlsEnabled = !0,
                    Game.instance.interface.enabled = !0,
                    Game.instance.uiFailed.enabled = !1,
                    Game.instance.uiCompleted.enabled = !1,
                    Game.instance.setupPlayingCamera(!0)
            }
            ))
    }
    ,
    Game.prototype.onGameOver = function (e) {
        if (Game.state == Game.STATE_GAMEOVER)
            return 1;
        "spikes" != e && "ground" != e || GameAudio.play("knifefall"),
            Game.state = Game.STATE_GAMEOVER,
            this.controlsEnabled = !1,
            this.gameOverReason = e,
            Game.wasBonusLevel = !1,
            Game.bonusLevel && (Game.wasBonusLevel = !0,
                Game.bonusLevel = !1,
                this.currLevel++,
                this.prepareLevel(!1)),
            this.interface.enabled = !1;
        var t = CameraController.instance;
        t.distance = 12,
            t.pitch = -10,
            FadeScreen.instance.show(.3, 1, 0, (function () {
                Game.instance.currLevel > 0 ? (GameAudio.play("gameover"),
                    Game.instance.uiFailed.enabled = !0) : Game.instance.restart()
            }
            ))
    }
    ,
    Game.prototype.formNextLevel = function () {
        Environment.instance.switchType()
    }
    ,
    Game.prototype.onGoBonusLevel = function () { }
    ,
    Game.easyLevelIds = [8, 9, 43, 27, 28, 24, 25],
    Game.easyLevelIdsShuffled = [],
    Game.excludeLevelIds = [9, 43, 49, 24, 8],
    Game.bonusLevelIds = [71, 72, 73],
    Game.normalLevelIds = [5, 6],
    Game.highLevelIds = [42, 46, 50, 57, 58, 61, 62, 7],
    Game.levelIds = [],
    Game.levelIdsPrev = [],
    Game.bonusLevel = !1,
    Game.bonusIds = [],
    Game.levelIdsShuffled = [],
    Game.bonusLevelIdsShuffled = [],
    Game.highLevelIdsShuffled = [],
    Game.prepareLevels = function () {
        for (var e = 41; e <= 70; e++)
            Game.normalLevelIds.push(e);
        for (e = 0; e < Game.highLevelIds.length; e++)
            Game.normalLevelIds.splice(Game.normalLevelIds.indexOf(Game.highLevelIds[e]), 1);
        for (e = 0; e < Game.excludeLevelIds.length; e++)
            Game.normalLevelIds.indexOf(Game.excludeLevelIds[e]) >= 0 && Game.normalLevelIds.splice(Game.normalLevelIds.indexOf(Game.excludeLevelIds[e]), 1)
    }
    ,
    Game.prepareLevels(),
    Game.prototype.prepareQuick = function (e, t) {
        Game.bonusLevel = t,
            Game.bonusLevel ? Game.bonusIds = [e] : (Game.levelIdsPrev = [...Game.levelIds],
                Game.levelIds = [e])
    }
    ,
    Game.prototype.prepareLevel = function (e) {
        Game.bonusLevel = e,
            Game.bonusLevel ? Game.bonusIds = [] : (Game.levelIdsPrev = [...Game.levelIds],
                Game.levelIds = []);
        var t, a = 1, n = !1, s = !1;
        if (0 == this.currLevel)
            return Game.levelIds.push(1),
                0;
        this.currLevel <= 3 ? (n = !0,
            a = 1,
            s = !1) : (this.currLevel >= 8 && Math.random() > .8 && (a = 2),
                this.currLevel >= 4 && Math.random() > .8 && (s = !0)),
            e && (a = 1);
        for (var i = 0; i < a; i++)
            e ? (t = Game.bonusLevelIdsShuffled.pop()) || (Game.bonusLevelIdsShuffled = [...Game.bonusLevelIds],
                MathUtil.shuffleArray(Game.bonusLevelIdsShuffled),
                t = Game.bonusLevelIdsShuffled.pop(),
                Game.debugOutput && console.log("bonus levels shuffled: ", Game.bonusLevelIdsShuffled)) : 0 == i && s ? (t = Game.highLevelIdsShuffled.pop()) || (Game.highLevelIdsShuffled = [...Game.highLevelIds],
                    MathUtil.shuffleArray(Game.highLevelIdsShuffled),
                    t = Game.highLevelIdsShuffled.pop(),
                    Game.debugOutput && console.log("high levels shuffled: ", Game.highLevelIdsShuffled)) : n ? (t = Game.easyLevelIdsShuffled.pop()) || (Game.easyLevelIdsShuffled = [...Game.easyLevelIds],
                        MathUtil.shuffleArray(Game.easyLevelIdsShuffled),
                        t = Game.easyLevelIdsShuffled.pop(),
                        Game.debugOutput && console.log("easy levels shuffled: ", Game.easyLevelIdsShuffled)) : (t = Game.levelIdsShuffled.pop()) || (Game.levelIdsShuffled = [...Game.normalLevelIds],
                            MathUtil.shuffleArray(Game.levelIdsShuffled),
                            t = Game.levelIdsShuffled.pop(),
                            Game.debugOutput && console.log("levels shuffled: ", Game.levelIdsShuffled)),
                e ? Game.bonusIds.push(t) : Game.levelIds.push(t);
        Game.debugOutput && (e ? console.log("level prepared: ", Game.bonusIds) : console.log("level prepared: ", Game.levelIds))
    }
    ,
    Game.goBonus = !1,
    Game.prototype.onLevelCompleted = function (e) {
        if (Game.state == Game.STATE_LEVELCOMPLETED)
            return 1;
        Game.state = Game.STATE_LEVELCOMPLETED,
            this.envTypeSameCount++,
            e || Game.bonusLevel || this.stepsToBonusLevel--,
            this.stepsToBonusLevel <= 0 && (this.bonusReady = !0,
                this.stepsToBonusLevel = 5),
            Game.goBonus = e,
            null != Game.instance.bonusOperator ? (Game.instance.bonusEarned = FinishController.instance.applyOperatorData(Game.instance.moneyEarned, Game.instance.bonusOperator),
                Game.instance.bonusOperator.operator == OperatorType.ADD || Game.instance.bonusOperator.operator == OperatorType.MULTIPLY ? this.resultType = 0 : Game.instance.bonusEarned < Game.instance.moneyEarned && (this.resultType = 1)) : (Game.instance.bonusEarned = this.moneyEarned,
                    this.resultType = 2),
            Game.instance.bonusEarned = Math.max(0, Game.instance.bonusEarned),
            Game.instance.totalEarned = Game.instance.bonusEarned,
            Game.instance.interface.enabled = !1,
            this.controlsEnabled = !1;
        var t = CameraController.instance;
        t.camShift.set(.95, -.3, 0),
            t.distance = 12,
            t.pitch = 0,
            t.yaw = 1,
            t.lerpSpeed = 2,
            t.lerpAngle = .2,
            FinishController.instance.showFlag(),
            UiMainMenu.hideCap = !0,
            e ? FadeScreen.instance.show(.3, 2, 0, (function () {
                Game.levelDebug || Game.instance.prepareLevel(!0),
                    Game.instance.restart()
            }
            )) : (this.currLevel++,
                Game.levelDebug || Game.instance.prepareLevel(!1),
                FadeScreen.instance.show(.3, 2, 0, (function () {
                    Game.instance.uiCompleted.enabled = !0
                }
                )),
                this.saveGame())
    }
    ,
    Game.prototype.setupPlayingCamera = function (e) {
        var t = Knife.instance.entity.getPosition()
            , a = CameraController.instance;
        a.camShift.set(1.2, -1, 0),
            a.distance = 15.3,
            a.pitch = -15,
            a.yaw = -35,
            a.yawCurr = -15,
            a.lerpSpeed = 1,
            a.lerpAngle = 1,
            e && (a.currPos.set(t.x - 5, t.y + 3, 10),
                a.entity.setLocalPosition(a.currPos))
    }
    ,
    Game.prototype.onJump = function () {
        Knife.instance.entity.getPosition();
        (GameAudio.playEx("swoosh", 1 + pc.math.random(-.1, .1)),
            this.firstJump) && (Game.state = Game.STATE_PLAYING,
                this.firstJump = !1,
                Game.bonusLevel || (this.moneyEarned = 0,
                    this.score = 0),
                this.setupPlayingCamera(!1),
                CameraController.instance.camShift.set(2.2, -1, 0),
                0 == this.currLevel ? this.interface.enabled = !1 : this.interface.enabled = !0,
                this.mainMenu.enabled = !1)
    }
    ,
    Game.prototype.onKnifeInGround = function () {
        CameraController.instance.lerpSpeed = 1,
            Game.state != Game.STATE_INTRO && GameAudio.playEx("woodhit", 1 + pc.math.random(.5, .6))
    }
    ,
    Game.prototype.onKnifeOutGround = function () {
        CameraController.instance.lerpSpeed = 4
    }
    ,
    Game.sliceSounds = {
        Wafer: "wafslice",
        WaferBig: "wafslice",
        Cube: "softhit",
        Tube: "metalhit",
        Tube2: "softhit",
        TubeVert: "metalhit",
        Plate: "ceramhit",
        Cup: "ceramhit",
        Coin: "coinhit",
        Gold: "coinhit",
        Diamond: "coinhit",
        Arbuz: "wethitbig",
        Lemon: "wethit",
        Apple: "wethit",
        Onion: "wethit",
        Coconut: "wethit"
    },
    Game.prototype.onKnifeSlice = function (e) {
        this.streak++,
            this.streakTimer = .2;
        var t = Game.sliceSounds[e.entity.name];
        t || (t = "slice2"),
            GameAudio.playEx(t, 1 + this.streak / 150 + pc.math.random(-.1, .1))
    }
    ,
    Game.prototype.updateStreak = function (e) {
        if (this.streakTimer > 0 && (this.streakTimer -= e,
            this.streakTimer <= 0)) {
            if (this.streak > 18) {
                var t, a = this.whiteColor;
                this.streak > 50 ? (a = this.yellowColor,
                    t = MathUtil.choose("INCREDIBLE!", "TERRIFIC!", "FANTASTIC!")) : t = this.streak > 25 ? MathUtil.choose("AMAZING!", "AWESOME!", "WOW!") : MathUtil.choose("NICE!", "GREAT!", "EXCELLENT!"),
                    Game.instance.showStreakText(t, 0, 1, a, 1, 1),
                    GameAudio.play("streak")
            }
            this.streak = 0,
                this.streakTimer = 0
        }
    }
    ,
    Game.prototype.addIfLevelExists = function (e) {
        var t = this.levels[e];
        return !!t || !!(t = this.app.root.findByName("Level" + e.toString())) && (t.tags.add("level"),
            t.enabled = !1,
            this.levels[e] = t,
            !0)
    }
    ,
    Game.prototype.nextLevel = function (e) {
        var t = this._LEVEL_NUMBER;
        t += e,
            this.addIfLevelExists(t) && (this._LEVEL_NUMBER = t)
    }
    ,
    Game.prototype.setResolution3 = function () {
        var e = window.innerWidth
            , t = window.innerHeight;
        e < 640 && (this.app.setCanvasResolution(pc.RESOLUTION_AUTO, e, t),
            this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW))
    }
    ,
    Game.prototype.setResolution = function () {
        var e = window.innerWidth
            , t = window.innerHeight;
        this.hdEnabled ? this.app.setCanvasResolution(pc.RESOLUTION_FIXED, e / t * 1080, 1080) : (this.app.setCanvasResolution(pc.RESOLUTION_AUTO, e, t),
            e < 640 && this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW))
    }
    ,
    Game.prototype.pause = function (e) {
        Game.instance.paused = e,
            Game.instance.app.systems.rigidbody.fixedTimeStep = e ? 0 : 1 / 60
    }
    ,
    Game.prototype.restart = function (e) {
        Knife.instance.trail1.flushTrail(),
            Knife.instance.trail2.flushTrail(),
            e && (UiMainMenu.hideCap = !0),
            Game.state = Game.STATE_INTRO,
            this.gotReviveChance = !0,
            this.pause(!1),
            this.streak = 0,
            this.streakTimer = 0,
            this.levelUpperPlank = 0,
            this.loadLevel();
        var t = Knife.instance.entity.getPosition();
        (this.setupPlayingCamera(!0),
            this.firstJump = !0,
            Game.bonusLevel ? (Environment.instance.setType(6),
                this.interface.enabled = !0,
                this.mainMenu.enabled = !1) : (this.currLevel != this.lastCurrLevel && (this.lastCurrLevel = this.currLevel,
                    Sdkmanager.instance.launchSDKfunction(Sdkmanager.SDK_COOLMATH, "startLevel", Game.instance.currLevel)),
                    this.moneyEarned = 0,
                    this.score = 0,
                    this.envTypeSameCount >= 4 ? (Environment.instance.switchType(),
                        Game.instance.envType = Environment.instance.type,
                        this.envTypeSameCount = 0) : Environment.instance.setType(Game.instance.envType),
                    this.saveGame(),
                    this.interface.enabled = !1,
                    0 == this.currLevel ? this.mainMenu.enabled = !1 : this.mainMenu.enabled = !0),
            e) ? UiMainMenu.hideCap && (this.levText && (this.levText.destroy(),
                this.levText = null),
                this.levText = this.showLvlText("LEVEL " + this.currLevel.toString(), t.x + 4.5, t.y + 1)) : CameraController.instance.camShift.y = .5;
        UiMainMenu.hideCap = !1,
            Environment.instance.createGrounds(),
            this.uiFailed.enabled = !1,
            this.uiCompleted.enabled = !1,
            this.controlsEnabled = !0
    }
    ,
    Game.noDebug = !0,
    Game.levelDebug = !1,
    Game.debugOutput = !1,
    Game.prototype.update = function (e) {
        if (window.scrollTo(0, 10),
            this.setResolution(),
            this.shopRewardCooldownCurr > 0 && (this.shopRewardCooldownCurr -= e),
            Game.state == Game.STATE_PLAYING) {
            this.updateStreak(e);
            var t = window.innerWidth
                , a = window.innerHeight;
            CameraController.instance.yaw = pc.math.lerp(-42, -16, pc.math.clamp((t - a) / a, 0, 1))
        }
        Game.noDebug || (this.app.keyboard.wasPressed(pc.KEY_K),
            this.app.keyboard.wasPressed(pc.KEY_R) && FadeScreen.instance.show(.3, 0, 0, (function () {
                Game.instance.restart()
            }
            )),
            this.app.keyboard.wasPressed(pc.KEY_N) && FadeScreen.instance.show(.3, 0, 0, (function () {
                Game.instance.nextLevel(1),
                    Game.instance.prepareQuick(Game.instance._LEVEL_NUMBER, Game.instance._BONUS_LEVEL),
                    Game.instance.restart()
            }
            )),
            this.app.keyboard.wasPressed(pc.KEY_P) && FadeScreen.instance.show(.3, 0, 0, (function () {
                Game.instance.nextLevel(-1),
                    Game.instance.prepareQuick(Game.instance._LEVEL_NUMBER, Game.instance._BONUS_LEVEL),
                    Game.instance.restart()
            }
            )),
            this.app.keyboard.wasPressed(pc.KEY_T) && (Game.KNIFE_NOT_SET_POS_ON_RESTART = !0,
                FadeScreen.instance.show(.3, 0, 0, (function () {
                    Game.instance.restart()
                }
                ))),
            this.app.keyboard.wasPressed(pc.KEY_S) && Game.instance.showStreakText("AMAZING!", 0, 1, null, 1, 1))
    }
    ;
var Gui = pc.createScript("gui");
Gui.instance = null,
    Gui.pages = [],
    Gui.prototype.initialize = function () { }
    ,
    Gui.prototype.update = function (e) { }
    ,
    Gui.find = function (e) {
        for (var a, n = Gui.pages.length, t = 0; t < n; t++)
            if ((a = Gui.pages[t]).entity.name == e)
                return a
    }
    ,
    Gui.open = function (e) {
        for (var a, n = Gui.pages.length, t = 0; t < n; t++)
            (a = Gui.pages[t]).entity.name == e && (a.enabled = !0)
    }
    ,
    Gui.close = function (e) {
        for (var a, n = Gui.pages.length, t = 0; t < n; t++)
            (a = Gui.pages[t]).entity.name == e && (a.enabled = !1)
    }
    ,
    Gui.buttonAction = function (e, a) {
        switch (e) {
            case "unlockRandomSkin":
                var n = Game.instance.getSkinPrice();
                if (n > Game.instance.money)
                    return 1;
                Game.instance.money -= n,
                    ShopController.instance.unlockRandomSkin(),
                    MoneyForAdbutton.instance.reconfigure();
                break;
            case "ShopMoneyForReward":
                Sdkmanager.instance.showAd([Sdkmanager.SDK_TESTING, Sdkmanager.SDK_COOLMATH], Sdkmanager.AD_REWARDED, (() => {
                    FadeScreen.instance.show(.4, 0, !0, (function () {
                        Game.instance.shopRewardCooldownCurr = Game.instance.shopRewardCooldown,
                            Game.instance.addMoney(MoneyForAdbutton.instance.count),
                            Game.instance.saveGame()
                    }
                    ))
                }
                ));
                break;
            case "ClaimScore":
                Game.instance.addMoney(Game.instance.totalEarned),
                    Game.instance.saveGame(),
                    FadeScreen.instance.show(.3, 0, 0, (function () {
                        Game.instance.restart(!0)
                    }
                    ));
                break;
            case "Claimx3ScoreForReward":
                Sdkmanager.instance.showAd([Sdkmanager.SDK_TESTING, Sdkmanager.SDK_COOLMATH], Sdkmanager.AD_REWARDED, (() => {
                    Game.instance.addMoney(3 * Game.instance.totalEarned),
                        Game.instance.saveGame(),
                        FadeScreen.instance.show(.3, 0, 0, (function () {
                            Game.instance.restart(!0)
                        }
                        ))
                }
                ));
                break;
            case "YesReviveForReward":
                Sdkmanager.instance.showAd([Sdkmanager.SDK_TESTING, Sdkmanager.SDK_COOLMATH], Sdkmanager.AD_REWARDED, (() => {
                    Game.instance.revive()
                }
                ));
                break;
            case "NoReviveForReward":
                UiFailed.instance.onEnableCb(!0);
                break;
            case "contactbh5":
                window.open("mailto:contact@buyhtml5.com?subject='Slice Master' Licensing");
                break;
            case "failRestart":
                Sdkmanager.instance.launchSDKfunction(Sdkmanager.SDK_COOLMATH, "replayLevel", Game.instance.currLevel),
                    FadeScreen.instance.show(.3, 0, 0, (function () {
                        Game.instance.addMoney(Game.instance.moneyEarned),
                            Game.bonusLevel && (Game.bonusLevel = !1),
                            Game.instance.restart()
                    }
                    ));
                break;
            case "openSettingsCompl":
                MyButton.setClickable(Game.instance.uiFailed, !1),
                    MyButton.setClickable(Game.instance.uiCompleted, !1),
                    MyButton.setClickable(Game.instance.mainMenu, !1),
                    Uipopup.open("Settings", !0);
                break;
            case "shopClose":
                if (ShopController.instance.unlocking)
                    return 1;
                setTimeout((function () {
                    Game.instance.controlsEnabled = !0
                }
                ), 500),
                    FadeScreen.instance.show(.3, 0, 0, (function () {
                        Game.instance.shop.enabled = !1,
                            Game.instance.mainMenu.enabled = !0,
                            Game.instance.applyChosenSkin()
                    }
                    ));
                break;
            case "circleShopBut":
                s = a.shopItem,
                    s.unlocked && (Game.instance.chosenSkinId = s.itemId),
                    ShopController.instance.updateSkinButtons(),
                    Game.instance.saveGame();
                break;
            case "buyBut":
                s = a.shopItem,
                    Game.instance.addStars(-s.price) && (FadeScreen.instance.show(.3, 0, 1, null),
                        GameAudio.play("buy"),
                        s.unlocked = !0,
                        Game.instance.chosenSkinId = s.itemId,
                        ShopController.instance.updateSkinButtons(),
                        Game.instance.saveGame());
                break;
            case "shopOpen":
                Game.instance.controlsEnabled = !1,
                    FadeScreen.instance.show(.3, 0, 0, (function () {
                        Game.instance.shop.enabled = !0,
                            Game.instance.mainMenu.enabled = !1
                    }
                    ));
                break;
            case "restartGame":
                Game.instance.interface.enabled = !0,
                    Game.bonusLevel = !1,
                    Sdkmanager.instance.launchSDKfunction(Sdkmanager.SDK_COOLMATH, "replayLevel", Game.instance.currLevel),
                    setTimeout((function () {
                        if (Uipopup.isShown("Pause"))
                            return 1;
                        Game.instance.pause(!1)
                    }
                    ), 600),
                    Uipopup.close("Pause"),
                    FadeScreen.instance.show(.5, 0, 0, (function () {
                        Game.instance.restart()
                    }
                    ));
                break;
            case "startGame":
                FadeScreen.instance.show(.3, 0, 0, (function () {
                    Game.instance.tutor3d.enabled = !0,
                        MyButton.setClickable(Game.instance.interface, !0),
                        Game.instance.interface.enabled = !0,
                        Game.instance.mainMenu.enabled = !1,
                        Game.instance.gameOver.enabled = !1,
                        Game.instance.start()
                }
                ));
                break;
            case "pause":
                MyButton.setClickable(Game.instance.interface, !1),
                    Game.instance.paused = !0,
                    Uipopup.open("Pause", !0);
                break;
            case "resume":
                setTimeout((function () {
                    Uipopup.getState("Pause") == Uipopup.STATE_CLOSED && (Game.instance.paused = !1,
                        MyButton.setClickable(Game.instance.interface, !0))
                }
                ), 750),
                    Uipopup.close("Pause");
                break;
            case "pRestart":
                Uipopup.close("Pause"),
                    Game.instance.paused = !1,
                    FadeScreen.instance.show(.5, .1, !1, (function () {
                        Game.instance.restart(!1),
                            Game.instance.uiMainMenu.enabled = !1,
                            MyButton.setClickable(Game.instance.interface, !0)
                    }
                    ));
                break;
            case "pHome":
                Uipopup.close("Pause"),
                    Game.instance.paused = !1,
                    Game.instance.save(),
                    FadeScreen.instance.show(.5, .1, !1, (function () {
                        Game.instance.uiMainMenu.enabled = !0,
                            MyButton.setClickable(Game.instance.interface, !0)
                    }
                    ));
                break;
            case "pauseHome":
                Uipopup.close("Pause"),
                    setTimeout((function () {
                        Game.instance.paused = !1
                    }
                    ), 600),
                    FadeScreen.instance.show(.5, 0, 0, (function () {
                        Game.instance.paused = !1,
                            Game.instance.mainMenu.enabled = !0,
                            Game.instance.interface.enabled = !1,
                            Game.instance.gameField.enabled = !1,
                            Game.instance.state = Game.STATE_INTRO,
                            Game.instance.reset(!1),
                            Game.instance.gameOver.enabled = !1
                    }
                    ));
                break;
            case "resumeGame":
                Game.instance.interface.enabled = !0,
                    setTimeout((function () {
                        Game.instance.pause(!1)
                    }
                    ), 400),
                    Uipopup.close("Pause");
                break;
            case "pauseGame":
                Game.instance.interface.enabled = !1,
                    Uipopup.open("Pause", !0),
                    Game.instance.pause(!0);
                break;
            case "openTutor":
                MyButton.setClickable(Game.instance.gameOver, !1),
                    MyButton.setClickable(Game.instance.mainMenu, !1),
                    Uipopup.open("Tutorial", !0);
                break;
            case "closeTutor":
                MyButton.setClickable(Game.instance.gameOver, !0),
                    MyButton.setClickable(Game.instance.mainMenu, !0),
                    Game.instance.state == Game.STATE_PLAYING ? Uipopup.open("Pause", !0) : Uipopup.open("Settings", !0);
                break;
            case "openSettings":
                Game.instance.controlsEnabled = !1,
                    MyButton.setClickable(Game.instance.gameOver, !1),
                    MyButton.setClickable(Game.instance.mainMenu, !1),
                    Uipopup.open("Settings", !0);
                break;
            case "closeSettings":
                MyButton.setClickable(Game.instance.gameOver, !0),
                    MyButton.setClickable(Game.instance.mainMenu, !0),
                    Uipopup.close("Settings"),
                    MyButton.setClickable(Game.instance.uiFailed, !0),
                    MyButton.setClickable(Game.instance.uiCompleted, !0),
                    setTimeout((function () {
                        Game.instance.mainMenu.enabled && (Game.instance.controlsEnabled = !0)
                    }
                    ), 500);
                break;
            case "pauseContinue":
                MyButton.setClickable(Game.instance.uiInterface, !0),
                    Uipopup.close("pause");
                break;
            case "pauseRestart":
                Uipopup.close("pause"),
                    FadeScreen.instance.show(.5, 0, 0, (function () { }
                    ));
                break;
            case "continueScoreButton":
                FadeScreen.instance.show(.5, 0, 0, (function () {
                    Game.instance.gameOver.enabled = !1,
                        Game.instance.mainMenu.enabled = !0
                }
                ));
                break;
            case "levelCompletedClaim":
                MyButton.setClickable(Game.instance.uiInterface, !0),
                    MyButton.setClickable(Game.instance.Screen3D, !0),
                    Game.instance.controlsEnabled = !0,
                    Game.instance.prepareLevel(Game.instance.levelCurr + 1, 0),
                    Game.instance.uiLevelCompleted.script.uiLevelCompleted.claim();
                for (var t = 0; t < 20; t++)
                    StarEffect.create(1);
                break;
            case "gameOverContinue":
                FadeScreen.instance.show(.5, 0, 0, (function () {
                    Game.instance.gotoMainMenu()
                }
                ));
                break;
            case "soundButton":
                GameAudio.switch(!GameAudio.mute);
                break;
            case "musicButton":
                GameAudio.switchMusic(!GameAudio.muteMus)
        }
    }
    ;
var CollBox = pc.createScript("collBox");
CollBox.prototype.init = function () {
    var t = this.entity.getLocalScale().clone();
    t.mulScalar(.5),
        t.x < 0 && (t.x = -t.x),
        t.y < 0 && (t.y = -t.y),
        t.z < 0 && (t.z = -t.z),
        this.entity.collision.halfExtents = t
}
    ,
    CollBox.prototype.update = function (t) { }
    ;
var Knife = pc.createScript("knife");
function trace(t) {
    Game.debugOutput && console.log(t)
}
Knife.tempVec = new pc.Vec3,
    Knife.tempVec2 = new pc.Vec3,
    Knife.instance = null,
    Knife.prototype.initialize = function () {
        Knife.instance = this,
            this.jumpCd = 0,
            this.rb = this.entity.rigidbody,
            this.blade = this.entity.findByName("Blade"),
            this.body = this.entity.findByName("Body"),
            this.trail1 = this.entity.findByName("Trail1").script.trail,
            this.trail2 = this.entity.findByName("Trail2").script.trail,
            this.blade.render.enabled = this.body.render.enabled = !1,
            this.bladeC = this.blade.script.polygon,
            this.bodyC = this.body.script.polygon,
            this.rb.linearVelocity = pc.Vec3.ZERO,
            this.rb.angularVelocity = pc.Vec3.ZERO,
            this.bladeC.init(),
            this.bodyC.init(),
            this.fullModel = this.entity.findByName("FullModel"),
            this.physModel = this.entity.findByName("PhysModel"),
            this.startPos = this.physModel.getLocalPosition().clone(),
            this.blinker = this.fullModel.script.materialBlinker,
            this.state = 0,
            this.sliceCd = 0,
            this.vel = new pc.Vec3,
            this.rotVel = 0,
            this.stuck(),
            this.dampCd = .5,
            this.stuckCd = .01,
            this.bounceCd = .1,
            this.ground = null,
            this.groundStartPos = new pc.Vec3,
            this.groundKnifePosStart = new pc.Vec3,
            this.dead = !1,
            this.blade.on("polygon:collision", this.onBladeTriggerEnter, this),
            this.body.on("polygon:collision", this.onBodyTriggerEnter, this),
            this.lastStuckPos || (this.lastStuckPos = new pc.Vec3,
                this.lastStuckAngles = new pc.Vec3(0, 0, 0))
    }
    ,
    Knife.prototype.reviveAtLastStuckPos = function () {
        this.revive(),
            this.rb.enabled = !1,
            this.entity.setLocalPosition(this.lastStuckPos),
            this.entity.setLocalEulerAngles(this.lastStuckAngles),
            Game.instance.removeSpikesAround(this.entity.getPosition()),
            this.stuck(),
            this.blinker.start(3, 3)
    }
    ,
    Knife.prototype.revive = function () {
        this.dead = !1,
            this.physModel.rigidbody.enabled = !1,
            Game.KNIFE_NOT_SET_POS_ON_RESTART || this.physModel.setLocalPosition(this.startPos),
            this.physModel.setLocalEulerAngles(0, 0, 0)
    }
    ,
    Knife.prototype.kill = function (t) {
        if (this.dead)
            return 1;
        this.dead = !0,
            this.blinker.start(5, 1),
            "falled" == t && GameAudio.play("deadfromfalling"),
            Game.instance.onGameOver(t),
            this.physModel.rigidbody.enabled = !0,
            this.physModel.rigidbody.linearVelocity = this.vel,
            this.physModel.rigidbody.angularVelocity = new pc.Vec3(0, 0, this.rotVel / 180 * 3.14),
            this.physModel.rigidbody.applyImpulse(0, 5, 0),
            this.physModel.rigidbody.applyTorque(1, 1, 1)
    }
    ,
    Knife.prototype.unstuck = function () {
        this.ground && (this.ground = null),
            this.state = 1,
            this.body.rigidbody.enabled = !1
    }
    ,
    Knife.prototype.checkGroundCol = function () {
        if (!this.dead) {
            Environment.instance && 6 == Environment.instance.type && 0,
                (this.bladeC.checkIfUnderLine(-1) || this.bodyC.checkIfUnderLine(-1)) && this.kill("ground")
        }
    }
    ,
    Knife.prototype.stuck = function () {
        this.vel.set(0, 0, 0),
            this.rotVel = 0,
            this.state = 0,
            Game.instance.onKnifeInGround(),
            this.body.rigidbody.enabled = !1,
            this.lastStuckPos || (this.lastStuckPos = new pc.Vec3,
                this.lastStuckAngles = new pc.Vec3(0, 0, 0)),
            this.lastStuckPos.copy(this.entity.getLocalPosition()),
            this.lastStuckAngles.copy(this.entity.getLocalEulerAngles())
    }
    ,
    Knife.ROT_VEL_MAX = 560,
    Knife.prototype.normalPhys = function () {
        this.state = 2,
            this.rb.type = "dynamic",
            Knife.tempVec.set(0, 0, this.rotVel),
            this.rb.angularVelocity = Knife.tempVec,
            this.rb.linearVelocity = this.vel
    }
    ,
    Knife.prototype.onBodyTriggerEnter = function (t) {
        var e = t.entity.tags.has("sliceable")
            , i = e ? t.entity.script.sliceable : null;
        if (!this.dead && t.entity.tags.has("deadzone"))
            return this.kill("falled"),
                1;
        if (t.findContact(this.bodyC),
            Knife.tempVec.copy(Polygon.contactNormal),
            !this.dead && t.entity.tags.has("spike")) {
            for (var s = 0; s < 8; s++)
                EffectDrop.create(this.entity.getPosition(), pc.math.random(.3, .5), new pc.Vec3(pc.math.random(-7, 7), pc.math.random(4, 7), pc.math.random(-4, 4)), 2, Game.instance.whiteColor);
            return this.kill("spikes"),
                1
        }
        if (!e && 1 == this.state) {
            var n = this.vel.dot(Knife.tempVec);
            Knife.tempVec2.copy(Knife.tempVec),
                Knife.tempVec.mulScalar(Polygon.contactDepth + .05),
                this.entity.translate(Knife.tempVec),
                Knife.tempVec2.mulScalar(2 * n),
                this.vel.y = 0,
                this.vel.x = 0,
                this.blinker.start(5, 1),
                this.rotVel *= .5,
                this.rotVel < 0 && this.rotVel > -250 && (this.rotVel = -250),
                this.rotVel > 0 && this.rotVel < 250 && (this.rotVel = 250)
        }
        if (this.bounceCd <= 0 && 1 == this.state && Polygon.contactNormal.x < 0 && (Knife.tempVec.set(-1, 1, 0),
            Knife.tempVec.mulScalar(12),
            this.vel.add(Knife.tempVec),
            this.vel.mulScalar(.5),
            GameAudio.playEx("bounce", 1)),
            e && i.kickCd <= 0 && !t.static) {
            Knife.tempVec.copy(Polygon.contactNormal),
                Knife.tempVec.mulScalar(.5 * -Polygon.contactDepth),
                Knife.tempVec.add(t.entity.getPosition()),
                i.kickCd = .1;
            var o = t.entity.rigidbody;
            o && 1 == this.state && (t.pos.x > this.bladeC.pos.x ? o.applyImpulse(.5 * -this.vel.x, .5 * -this.vel.y, 0) : o.applyImpulse(.1 * -this.vel.x, .1 * -this.vel.y, 0))
        }
        1 == this.state ? this.bounceCd = .05 : 0 != this.state || e || (this.bounceCd = .05,
            Knife.tempVec.copy(Polygon.contactNormal),
            Knife.tempVec.mulScalar(Polygon.contactDepth + .05),
            this.entity.translate(Knife.tempVec),
            this.vel.y = 5 * Polygon.contactNormal.y,
            this.vel.x = 5 * Polygon.contactNormal.x,
            this.unstuck(),
            this.state = 1,
            this.stuckCd = .4)
    }
    ,
    Knife.prototype.onBladeTriggerEnter = function (t) {
        var e = t.entity;
        if (e.tags.has("ground") && 1 == this.state) {
            if (t.findContact(this.bladeC),
                Knife.tempVec.copy(Polygon.contactNormal),
                Knife.tempVec.mulScalar(.5 * Polygon.contactDepth - .05),
                this.entity.translate(Knife.tempVec),
                this.stuck(),
                "kinematic" == e.rigidbody.type && (this.groundStartPos.copy(t.pos),
                    this.groundKnifePosStart.copy(this.entity.getPosition()),
                    this.ground = t),
                e.tags.has("finish")) {
                Game.instance.bonusOperator = FinishController.instance.getBlockOperator(e);
                var i = FinishController.instance.getBlockData(e)
                    , s = !1;
                Game.instance.bonusOperator ? 50 == i.count && Game.instance.bonusReady ? (GameAudio.play("bonushit"),
                    s = !0) : GameAudio.play("xhit") : GameAudio.play("finishhit"),
                    Game.instance.onLevelCompleted(s);
                var n = e.script.materialBlinker;
                n && n.start(3.5, 5)
            }
            return 0
        }
        if (e.tags.has("sliceable")) {
            var o = e.script.sliceable;
            Game.instance.onKnifeSlice(o);
            var a = 0;
            o.complexSlice && (a = (this.bladeC.pos.z - t.pos.z) / t.zSize + .5),
                o.slice(a),
                this.sliceCd = .1,
                this.vel.x > 0 && (this.vel.x -= .5,
                    this.vel.x < 0 && (this.vel.x = 0))
        }
        if (e.tags.has("spike")) {
            for (var l = 0; l < 8; l++)
                EffectDrop.create(this.entity.getPosition(), pc.math.random(.3, .5), new pc.Vec3(pc.math.random(-7, 7), pc.math.random(4, 7), pc.math.random(-4, 4)), 2, Game.instance.whiteColor);
            this.kill("spikes")
        }
    }
    ,
    Knife.prototype.update = function (t) {
        if (this.dead)
            return 1;
        if (Game.instance.paused)
            return 1;
        var e = Input.mouseY / window.innerHeight;
        if (this.jumpCd > 0)
            this.jumpCd -= t;
        else if (Game.instance.controlsEnabled && (Input.mousePressed && e > .1 && Game.state == Game.STATE_PLAYING || Input.mousePressed && e > .1 && Input.mouseX > 140 && Game.state == Game.STATE_INTRO || this.app.keyboard.wasPressed(pc.KEY_SPACE) && (Game.state == Game.STATE_INTRO || Game.state == Game.STATE_PLAYING))) {
            this.jumpCd = .15,
                Game.instance.onJump(),
                this.rotVel -= Knife.ROT_VEL_MAX;
            var i = new pc.Vec3(4.2, 11.7, 0);
            this.bodyC.pos.y > Game.instance.levelUpperPlank && (i.y = 1),
                this.vel.copy(i),
                this.vel.x < i.x && (this.vel.x = i.x),
                this.vel.y < i.y && (this.vel.y = i.y),
                this.dampCd = .45,
                0 == this.state ? this.stuckCd = .4 : this.stuckCd = .15,
                this.bounceCd = 0,
                this.unstuck(),
                Game.instance.onKnifeOutGround()
        }
        this.stuckCd > 0 && (this.stuckCd -= t),
            this.bounceCd > 0 && (this.bounceCd -= t),
            this.dampCd > 0 && (this.dampCd -= t),
            this.sliceCd > 0 && (this.sliceCd -= t),
            this.vel.x *= 1 - t / 10,
            this.vel.y *= 1 - t / 2,
            this.vel.z *= 1 - t / 2;
        Game.instance.grounds.length;
        0 == this.state && this.ground && (Knife.tempVec.copy(this.ground.pos),
            Knife.tempVec.sub(this.groundStartPos),
            Knife.tempVec.add(this.groundKnifePosStart),
            this.entity.setPosition(Knife.tempVec.x, Knife.tempVec.y, 0),
            this.bodyC.updatePoints(),
            this.bladeC.updatePoints());
        for (var s = .2 * t, n = 0; n < 5; n++) {
            if (1 == this.state) {
                Knife.tempVec2.set(0, -23 * s, 0),
                    this.vel.add(Knife.tempVec2);
                var o = this.entity.getEulerAngles()
                    , a = Math.abs(MathUtil.angleDifference(o.z, 180))
                    , l = 1 - a / 40;
                this.rotVel < -Knife.ROT_VEL_MAX && (this.rotVel = -Knife.ROT_VEL_MAX),
                    this.vel.y > 28 && (this.vel.y = 28),
                    this.vel.y < -25 && (this.vel.y = -25),
                    this.vel.x > 4.2 && (this.vel.x = 4.2),
                    l < 0 ? this.rotVel = pc.math.lerp(this.rotVel, -Knife.ROT_VEL_MAX, 10 * s) : this.dampCd <= 0 && (this.rotVel = pc.math.lerp(this.rotVel, -85, 17 * s)),
                    this.dampCd <= 0 && this.sliceCd > 0 && o.z + 180 > 300 && a < 60 && (o.z += MathUtil.angleDifference(o.z, 170) * s * 11,
                        this.entity.setEulerAngles(o)),
                    this.entity.rotate(0, 0, this.rotVel * s)
            }
            Knife.tempVec.copy(this.vel),
                Knife.tempVec.mulScalar(s),
                Knife.tempVec.add(this.entity.getPosition()),
                Knife.tempVec.y > Game.instance.levelUpperPlank && (Knife.tempVec.y = pc.math.lerp(Knife.tempVec.y, Game.instance.levelUpperPlank, .25)),
                this.entity.setPosition(Knife.tempVec),
                this.bodyC.updatePoints(),
                this.bladeC.updatePoints(),
                this.bounceCd <= 0 && this.bodyC.checkAllCollisions(0),
                0 != this.state && this.stuckCd <= 0 && this.bladeC.checkAllCollisions(0),
                this.bodyC.checkAllCollisions(2),
                this.bladeC.checkAllCollisions(2)
        }
        Game.state == Game.STATE_PLAYING && 1 == this.state && (Math.abs(this.bodyC.pos.y - Game.instance.levelUpperPlank) > 3 ? UiInterface.instance.highFlyTime = 0 : UiInterface.instance.highFlyTime += t,
            this.bodyC.pos.y > Game.instance.levelUpperPlank && this.vel.y > 0 && (this.vel.y = pc.math.lerp(this.vel.y, 0, 10 * t)),
            this.checkGroundCol())
    }
    ;
var CameraController = pc.createScript("cameraController");
CameraController.instance = null,
    CameraController.attributes.add("target", {
        type: "entity"
    }),
    CameraController.attributes.add("camShift", {
        type: "vec3",
        default: [0, 0, 0]
    }),
    CameraController.attributes.add("distance", {
        type: "number",
        default: 10
    }),
    CameraController.attributes.add("yaw", {
        type: "number",
        default: 10
    }),
    CameraController.attributes.add("pitch", {
        type: "number",
        default: 10
    }),
    CameraController.attributes.add("lerpSpeed", {
        type: "number",
        default: 10
    }),
    CameraController.attributes.add("lerpAngle", {
        type: "number",
        default: 3
    }),
    CameraController.tempVec3 = new pc.Vec3(0, 0, 0),
    CameraController.instance = null,
    CameraController.prototype.setupCurr = function () {
        this.pitchCurr = this.pitch,
            this.yawCurr = this.yaw,
            this.distanceCurr = this.distance,
            this.entity.setLocalEulerAngles(this.pitchCurr, this.yawCurr, 0)
    }
    ,
    CameraController.prototype.initialize = function () {
        null == CameraController.instance && (CameraController.instance = this),
            this.pitchCurr = this.pitch,
            this.yawCurr = this.yaw,
            this.distanceCurr = this.distance,
            this.targetPos = new pc.Vec3(0, 0, 0),
            this.currPos = this.entity.getPosition().clone(),
            this.entity.setLocalEulerAngles(this.pitchCurr, this.yawCurr, 0)
    }
    ,
    CameraController.prototype.update = function (t) {
        if (Game.instance.paused)
            return 1;
        t > .05 && (t = .05),
            this.target && (this.targetPos.copy(this.target.getPosition()),
                this.targetPos.add(this.camShift)),
            this.currPos.copy(this.entity.getLocalPosition());
        var e = this.entity.getLocalEulerAngles();
        this.pitchCurr = pc.math.lerp(e.x, this.pitch, t * this.lerpAngle / 1),
            this.yawCurr = pc.math.lerp(e.y, this.yaw, t * this.lerpAngle / 1),
            this.distanceCurr = pc.math.lerp(this.distanceCurr, this.distance, t * this.lerpAngle),
            this.entity.setLocalEulerAngles(this.pitchCurr, this.yawCurr, 0);
        var r = CameraController.tempVec3;
        r.copy(this.entity.forward),
            r.scale(-this.distanceCurr),
            this.target && r.add(this.targetPos),
            this.currPos.lerp(this.currPos, r, t * this.lerpSpeed),
            this.entity.setLocalPosition(this.currPos)
    }
    ;
var Blade = pc.createScript("blade");
Blade.prototype.initialize = function () {
    this.inGround = !1
}
    ,
    Blade.prototype.onTriggerEnter = function (t) {
        t.tags.has("ground") && (console.log(t.name),
            this.knife && this.knife.stuck(),
            this.inGround = !0)
    }
    ,
    Blade.prototype.update = function (t) { }
    ;
var Polygon = pc.createScript("polygon");
Polygon.attributes.add("points", {
    type: "entity",
    title: "points",
    array: !0
}),
    Polygon.attributes.add("static", {
        type: "boolean",
        default: !0
    }),
    Polygon.attributes.add("colGroup", {
        type: "number",
        default: 0
    }),
    Polygon.attributes.add("isCircle", {
        type: "boolean",
        default: !1
    }),
    Polygon.attributes.add("radius", {
        type: "number",
        default: -1
    }),
    Polygon.attributes.add("polyFromCollisionBox", {
        type: "boolean",
        default: !1
    }),
    Polygon.HASHMAP_SIZE = 15,
    Polygon.TYPE_POLY = 0,
    Polygon.TYPE_CIRC = 1,
    Polygon.contactNormal = new pc.Vec3(0, 0, 0),
    Polygon.contactDepth = 0,
    Polygon.polygons = [],
    Polygon.prototype.initialize = function () { }
    ,
    Polygon.DRAW_DOTS = !1,
    Polygon.initPolygonsOnEntity = function (o, t) {
        var i;
        if ((o.script && o.script.polygon && o.script.polygon.init(),
            t) && o.children)
            for (var n = 0; n < o.children.length; n++)
                i = o.children[n],
                    Polygon.initPolygonsOnEntity(i, t)
    }
    ,
    Polygon.prototype.getChildLocalPosition = function (o, t) {
        var i = o.getPosition().clone();
        if (null !== t) {
            var n = t.getWorldTransform().clone();
            n.invert(),
                i.sub(t.getPosition()),
                n.transformPoint(i, i)
        }
        return i
    }
    ,
    Polygon.prototype.init = function () {
        if (this.initialized = !0,
            this.zSize = 0,
            this.pos = this.entity.getPosition(),
            this.pps = [],
            this.ns = [],
            this.lps = [],
            this.xid = 0,
            this.yid = 0,
            this.updateHashId(),
            this.isCircle) {
            if (this.type = Polygon.TYPE_CIRC,
                this.points.length > 0) {
                var o = this.points[0].getPosition();
                Polygon.tempVec.copy(this.entity.getPosition()),
                    Polygon.tempVec.sub(o),
                    this.radius = Polygon.tempVec.length()
            }
        } else if (this.type = Polygon.TYPE_POLY,
            0 == this.points.length)
            if (this.polyFromCollisionBox) {
                var t = this.entity.collision.halfExtents.clone()
                    , i = this.entity.collision
                    , n = this.entity.getLocalScale();
                t.x *= 1 / n.x,
                    t.y *= 1 / n.y;
                var s = 1 / n.x;
                "cylinder" == i.type ? (this.addLocalPoint(-i.radius * s, .5 * i.height / n.y),
                    this.addLocalPoint(i.radius * s, .5 * i.height / n.y),
                    this.addLocalPoint(i.radius * s, .5 * -i.height / n.y),
                    this.addLocalPoint(-i.radius * s, .5 * -i.height / n.y)) : (this.entity.script && this.entity.script.sliceable && this.entity.script.sliceable.complexSlice && (this.zSize = 2 * t.z),
                        this.addLocalPoint(-t.x, t.y),
                        this.addLocalPoint(t.x, t.y),
                        this.addLocalPoint(t.x, -t.y),
                        this.addLocalPoint(-t.x, -t.y))
            } else {
                n = this.entity.getLocalScale();
                this.addLocalPoint(-.5, .5),
                    this.addLocalPoint(.5, .5),
                    this.addLocalPoint(.5, -.5),
                    this.addLocalPoint(-.5, -.5)
            }
        for (var e, l = 0; l < this.points.length; l++)
            e = this.points[l].getLocalPosition().clone(),
                this.lps.push(e),
                this.addPointData2(e),
                this.points[l].destroy();
        this.updatePoints(),
            this.updateNormals(),
            this.boundRadius = 0,
            this.updateBoundRadius(),
            Polygon.polygons.push(this)
    }
    ,
    Polygon.prototype.updateBoundRadius = function () {
        if (this.type == Polygon.TYPE_CIRC)
            return this.boundRadius = this.radius,
                0;
        for (var o, t, i, n = 0; n < this.pps.length; n++)
            o = this.pps[n],
                Polygon.tempVec.copy(this.pos),
                Polygon.tempVec.sub(o),
                ((i = Polygon.tempVec.lengthSq()) > t || null == t) && (t = i);
        this.boundRadius = Math.sqrt(t)
    }
    ,
    Polygon.prototype.update = function (o) {
        this.pos = this.entity.getPosition(),
            this.initialized && (this.static || (this.updatePoints(),
                this.updateHashId(),
                this.updateBoundRadius()))
    }
    ,
    Polygon.prototype.checkAllCollisions = function (o) {
        for (var t, i, n = 0; n < Polygon.polygons.length; n++)
            if ((t = Polygon.polygons[n]) && t.enabled && t.entity.enabled && t != this && t.colGroup == o && !(t.xid > this.xid + 1 || t.xid < this.xid - 1 || t.yid > this.yid + 1 || t.yid < this.yid - 1)) {
                if (t.zSize <= 0) {
                    if (Math.abs(this.pos.z - t.pos.z) >= .4)
                        continue
                } else if (this.pos.z < t.pos.z - .5 * t.zSize || this.pos.z > t.pos.z + .5 * t.zSize)
                    continue;
                i = (this.boundRadius + t.boundRadius) * (this.boundRadius + t.boundRadius),
                    Polygon.tempVec.copy(t.pos),
                    Polygon.tempVec.sub(this.pos),
                    Polygon.tempVec.lengthSq() >= i || (this.checkCollision(t) && (this.entity.fire("polygon:collision", t)))
            }
    }
    ,
    Polygon.prototype.updateHashId = function () {
        this.xid = Math.floor(this.pos.x / Polygon.HASHMAP_SIZE),
            this.yid = Math.floor(this.pos.y / Polygon.HASHMAP_SIZE)
    }
    ,
    Polygon.prototype.updatePoints = function () {
        for (var o = this.entity.getWorldTransform(), t = 0; t < this.pps.length; t++)
            o.transformPoint(this.lps[t], this.pps[t]),
                this.pps[t].z = 0
    }
    ,
    Polygon.prototype.localToGlobal = function (o, t) {
        return t.copy(o),
            t.mul(this.entity.getLocalScale()),
            t.add(this.entity.getLocalPosition()),
            t
    }
    ,
    Polygon.prototype.addLocalPoint = function (o, t) {
        var i = new pc.Entity("Point");
        this.entity.addChild(i),
            i.setLocalPosition(o, t, 0),
            Polygon.DRAW_DOTS && i.addComponent("render", {
                type: "sphere"
            }),
            i.setLocalScale(.1, .1, .1),
            this.points.push(i)
    }
    ,
    Polygon.prototype.addGlobalPoint = function (o, t) {
        var i = new pc.Entity("Point");
        this.entity.addChild(i);
        var n = this.entity.getPosition();
        i.setPosition(n.x + o, n.y + t, n.z),
            this.points.push(i)
    }
    ,
    Polygon.prototype.addPointData2 = function (o) {
        var t = o.clone();
        this.pps.push(t),
            this.ns.push(new pc.Vec3(1, 0, 0))
    }
    ,
    Polygon.prototype.addPointData = function (o) {
        var t = o.getPosition().clone();
        this.pps.push(t),
            this.ns.push(new pc.Vec3(1, 0, 0))
    }
    ,
    Polygon.prototype.updateNormals = function () {
        var o, t = this.pps.length;
        if (t > 1)
            for (var i = 0; i < t; i++) {
                o = this.ns[i],
                    i < t - 1 ? o.copy(this.pps[i + 1]) : o.copy(this.pps[0]),
                    o.sub(this.pps[i]),
                    o.set(-o.y, o.x, 0);
                var n = o.length();
                o.mulScalar(1 / n)
            }
    }
    ,
    Polygon.tempVec = new pc.Vec3,
    Polygon.tempVec2 = new pc.Vec3,
    Polygon.prototype.findContact = function (o) {
        var t, i, n, s;
        if (this.type == Polygon.TYPE_POLY) {
            var e, l = this.pps.length, p = o.pps.length;
            n = void 0;
            for (var y = 0; y < l; y++) {
                h = this.pps[y],
                    i = void 0;
                for (var a = 0; a < p; a++)
                    e = o.pps[a],
                        Polygon.tempVec.copy(e),
                        Polygon.tempVec.sub(h),
                        (t = this.ns[y].x * Polygon.tempVec.x + this.ns[y].y * Polygon.tempVec.y) > 0 || ((t = -t) > i || null == i) && (i = t);
                (n > i || null == n) && (n = i,
                    s = y)
            }
            return Polygon.contactDepth = n,
                Polygon.contactNormal.copy(this.ns[s]),
                Polygon.contactNormal
        }
        if (this.type == Polygon.TYPE_CIRC) {
            var h, r, c, P, g;
            for (p = o.pps.length,
                y = 0; y < p; y++)
                h = o.pps[y],
                    Polygon.tempVec.copy(h),
                    Polygon.tempVec.sub(this.pos),
                    r = Polygon.tempVec.lengthSq(),
                    (null == c || r < c) && (c = r,
                        P = y);
            return h = o.pps[P],
                Polygon.tempVec.copy(h),
                Polygon.tempVec.sub(this.pos),
                Polygon.tempVec.z = 0,
                g = Polygon.tempVec.length(),
                Polygon.tempVec.mulScalar(1 / g),
                t = this.radius - g,
                Polygon.contactDepth = t,
                Polygon.contactNormal.copy(Polygon.tempVec),
                Polygon.contactNormal
        }
    }
    ,
    Polygon.polyCircCollision = function (o, t) {
        if (Polygon.pointPolyCollision(t.pos, o))
            return !0;
        for (var i, n, s = o.pps.length, e = 0, l = s - 1; e < s; l = e++)
            if (i = o.pps[e],
                n = o.pps[l],
                Polygon.pointLineSegmentDistance(t.pos, i, n) < t.radius)
                return !0;
        return !1
    }
    ,
    Polygon.polygonEdges = function (o) {
        return o.pps.map((function (t, i) {
            return i ? [o.pps[i - 1], t] : [o.pps[o.pps.length - 1], t]
        }
        ))
    }
    ,
    Polygon.pointPolyCollision = function (o, t) {
        for (var i, n, s = t.pps.length, e = 0, l = s - 1, p = o.x, y = o.y, a = !1; e < s; l = e++)
            i = t.pps[e],
                n = t.pps[l],
                i.y > y ^ n.y > y && p < (n.x - i.x) * (y - i.y) / (n.y - i.y) + i.x && (a = !a);
        return a
    }
    ,
    Polygon.pointLineSegmentDistance = function (o, t, i) {
        var n, s, e = t, l = i;
        return Math.sqrt(Polygon.pointPointSquaredDistance(o, (n = Polygon.pointPointSquaredDistance(e, l)) ? (s = ((o.x - t.x) * (l.x - t.x) + (o.y - t.y) * (l.y - e.y)) / n) < 0 ? t : s > 1 ? l : new pc.Vec3(t.x + s * (l.x - t.x), t.y + s * (l.y - t.y), 0) : e))
    }
    ,
    Polygon.pointLineSegmentDistance2 = function (o, t, i) {
        var n, s, e = t, l = i;
        return Polygon.pointPointSquaredDistance(e, l),
            Math.sqrt(pointPointSquaredDistance(o, (n = Polygon.pointPointSquaredDistance(e, l)) ? (s = ((o.x - t.x) * (l.x - t.x) + (o.y - t.y) * (l.y - e.y)) / n) < 0 ? t : s > 1 ? l : new pc.Vec3(t.x + s * (l.x - t.x), t.y + s * (l.y - t.y), 0) : e))
    }
    ,
    Polygon.pointPointSquaredDistance = function (o, t) {
        var i = o.x - t.x
            , n = o.y - t.y;
        return i * i + n * n
    }
    ,
    Polygon.polyPolyCollision = function (o, t) {
        var i, n, s, e, l, p, y, a, h, r = o.pps, c = t.pps, P = [r, c];
        for (e = 0; e < 2; e++) {
            var g = P[e];
            for (h = g.length,
                l = 0; l < h; l++) {
                var d = (l + 1) % h
                    , u = g[l]
                    , f = g[d]
                    , m = Polygon.tempVec;
                for (m.set(f.y - u.y, u.x - f.x),
                    i = n = void 0,
                    p = 0; p < r.length; p++)
                    s = m.x * r[p].x + m.y * r[p].y,
                        (null == i || s < i) && (i = s),
                        (null == n || s > n) && (n = s);
                for (y = a = void 0,
                    p = 0; p < c.length; p++)
                    s = m.x * c[p].x + m.y * c[p].y,
                        (null == y || s < y) && (y = s),
                        (null == a || s > a) && (a = s);
                if (n < y || a < i)
                    return !1
            }
        }
        return !0
    }
    ,
    Polygon.prototype.checkIfUnderLine = function (o) {
        if (this.type == Polygon.TYPE_POLY) {
            for (var t = 0; t < this.pps.length; t++)
                if (this.pps[t].y < o)
                    return !0
        } else if (this.type == Polygon.TYPE_CIRC && this.pos.y - this.radius < o)
            return !0;
        return !1
    }
    ,
    Polygon.prototype.checkCollision = function (o) {
        return o.type == Polygon.TYPE_POLY && this.type == Polygon.TYPE_POLY ? Polygon.polyPolyCollision(this, o) : o.type == Polygon.TYPE_CIRC && this.type == Polygon.TYPE_POLY ? Polygon.polyCircCollision(this, o) : o.type == Polygon.TYPE_POLY && this.type == Polygon.TYPE_CIRC ? Polygon.polyCircCollision(o, this) : void 0
    }
    ;
var PolygonTest = pc.createScript("polygonTest");
PolygonTest.attributes.add("poly2", {
    type: "entity"
}),
    PolygonTest.prototype.initialize = function () {
        this.p1 = this.entity.script.polygon,
            this.p2 = this.poly2.script.polygon
    }
    ,
    PolygonTest.prototype.update = function (t) {
        this.app.keyboard.wasPressed(pc.KEY_A) && (this.p1.updatePoints(),
            this.p1.checkCollision(this.p2) && (console.log("push out"),
                this.p2.pushOut(this.p1, this.p1.entity)))
    }
    ;
var Sliceable = pc.createScript("sliceable");
Sliceable.attributes.add("left", {
    type: "entity"
}),
    Sliceable.attributes.add("right", {
        type: "entity"
    }),
    Sliceable.attributes.add("full", {
        type: "entity"
    }),
    Sliceable.attributes.add("price", {
        type: "number",
        default: 1
    }),
    Sliceable.attributes.add("kinematicOneSide", {
        type: "boolean",
        default: !1
    }),
    Sliceable.attributes.add("complexSlice", {
        type: "boolean",
        default: !1
    }),
    Sliceable.attributes.add("baseMat", {
        type: "asset",
        assetType: "material"
    }),
    Sliceable.attributes.add("innerMat", {
        type: "asset",
        assetType: "material"
    }),
    Sliceable.attributes.add("mat", {
        type: "asset",
        assetType: "material"
    }),
    Sliceable.attributes.add("matVnutri", {
        type: "asset",
        assetType: "material"
    }),
    Sliceable.attributes.add("multicolorVnutri", {
        type: "boolean",
        default: !1
    }),
    Sliceable.attributes.add("static", {
        type: "boolean",
        default: !1
    }),
    Sliceable.attributes.add("staticOneSide", {
        type: "boolean",
        default: !1
    }),
    Sliceable.attributes.add("randomMat", {
        array: !0,
        type: "asset",
        assetType: "material"
    }),
    Sliceable.attributes.add("sameInnerAsBase", {
        type: "boolean",
        default: !1
    }),
    Sliceable.attributes.add("emitId", {
        type: "number",
        default: -1
    }),
    Sliceable.attributes.add("emitCount", {
        type: "number",
        default: 5
    }),
    Sliceable.attributes.add("emitRadius", {
        type: "number",
        default: 0
    }),
    Sliceable.attributes.add("emitColor", {
        type: "rgba"
    }),
    Sliceable.attributes.add("emitColorFromDiffuse", {
        type: "boolean",
        default: !1
    }),
    Sliceable.prototype.initialize = function () {
        if (this.kickCd = 0,
            this.kick2Cd = 0,
            "CubeComplex" != this.entity.name && "Tube" != this.entity.name && "TubeVert" != this.entity.name && "Cube" != this.entity.name && "RoundCube" != this.entity.name || (this.baseMat = Game.instance.baseMatGrey,
                this.innerMat = Game.instance.innerMatGrey,
                EntityTools.setMaterial(this.full, this.baseMat)),
            "Sphere" == this.entity.name && (this.baseMat = Game.instance.baseMatGrey,
                this.innerMat = Game.instance.innerMatGrey),
            this.left && (this.left.enabled = !1),
            this.right && (this.right.enabled = !1),
            this.entity.script.polygon && (this.entity.script.polygon.colGroup = 2),
            this.entity.rigidbody) {
            var t = this.entity.rigidbody;
            this.complexSlice ? t.linearFactor = new pc.Vec3(1, 1, 1) : t.linearFactor = new pc.Vec3(1, 1, 0),
                t.angularFactor = new pc.Vec3(0, 0, 1)
        }
        if (this.static && (this.entity.rigidbody.type = "static"),
            this.staticOneSide && (this.left.rigidbody.type = "static",
                this.left.translate(0, 0, -.04)),
            this.kinematicOneSide && (this.left.rigidbody.type = "kinematic"),
            this.multicolorVnutri && (this.matVnutri = StackCreator.getStackColor()),
            this.sameInnerAsBase && (this.matVnutri = this.baseMat),
            this.matVnutri && this.matVnutri != this.innerMat && this.innerMat && (EntityTools.changeMaterial(this.left.children[0], this.innerMat, this.matVnutri),
                EntityTools.changeMaterial(this.right.children[0], this.innerMat, this.matVnutri)),
            this.randomMat.length > 0) {
            var e = this.randomMat[MathUtil.getRandomInt(this.randomMat.length)];
            this.mat = e,
                this.changeBaseMat(e)
        } else
            this.mat && this.changeBaseMat(this.mat)
    }
    ,
    Sliceable.prototype.changeBaseMat = function (t) {
        this.mat = t,
            this.full && EntityTools.changeMaterial(this.full, this.baseMat, t),
            this.left && EntityTools.changeMaterial(this.left.children[0], this.baseMat, t),
            this.right && EntityTools.changeMaterial(this.right.children[0], this.baseMat, t)
    }
    ,
    Sliceable.prototype.update = function (t) {
        this.kickCd > 0 && (this.kickCd -= t),
            this.kick2Cd > 0 && (this.kick2Cd -= t)
    }
    ,
    Sliceable.prototype.emitDrops = function (t, e) {
        for (var i = 0; i < e; i++)
            EffectDrop.create(t, pc.math.random(.4, .7), new pc.Vec3(pc.math.random(-4, 4), pc.math.random(4, 9), pc.math.random(-4, 4)), 0)
    }
    ,
    Sliceable.prototype.kick = function (t, e) {
        if (trace("kick"),
            this.kick2Cd > 0)
            return 1;
        var i = this.entity.rigidbody;
        this.static && (this.kick2Cd = .1,
            this.static = !1,
            i.type = "dynamic",
            this.entity.script.polygon.pos.z < t.z ? (i.applyTorque(55, 0, 0),
                i.applyImpulse(0, 0, -.1)) : (i.applyTorque(-55, 0, 0),
                    i.applyImpulse(0, 0, .1)),
            i.angularFactor = new pc.Vec3(1, 0, 1))
    }
    ,
    Sliceable.temp = new pc.Vec3(0, 0, 0),
    Sliceable.temp2 = new pc.Vec3(0, 0, 0),
    Sliceable.innerMatId = 0,
    Sliceable.prototype.slice = function (t) {
        if (this.entity.enabled = !1,
            this.complexSlice) {
            var e = t;
            this.left.setLocalScale(1, 1, 2 * e),
                this.right.setLocalScale(1, 1, 2 * (1 - e)),
                this.left.setLocalPosition(0, 0, e / 2 - .5),
                this.right.setLocalPosition(0, 0, .5 - (1 - e) / 2);
            var i = this.entity.script.polygon
                , a = this.entity.collision.halfExtents;
            Game.instance.kickSliceablesOnPos(i.pos, a.x, 2 * a.y)
        }
        var s;
        this.kinematicOneSide ? EntityTools.reparent(this.left, this.entity.parent) : EntityTools.reparent(this.left, Game.instance.levelObjectsSliced),
            EntityTools.reparent(this.right, Game.instance.levelObjectsSliced),
            "Tube" == this.entity.name && (this.left.rigidbody.angularFactor.set(1, 1, .1),
                this.right.rigidbody.angularFactor.set(1, 1, .1));
        this.left && (this.left.enabled = !0,
            this.left.script && this.left.script.physScaler && this.left.script.physScaler.init(),
            (s = this.left.rigidbody).applyImpulse(0, 0, -7),
            s.applyTorque(-45, 0, 0)),
            this.right && (this.right.script && this.right.script.physScaler && this.right.script.physScaler.init(),
                this.right.enabled = !0,
                (s = this.right.rigidbody).applyImpulse(0, 0, 7),
                s.applyTorque(45, 0, 0));
        var l, r = this.entity.getPosition(), n = "+" + this.price.toString(), c = .8;
        if (this.price > 10 ? (l = Game.instance.yellowColor,
            c = 1.2) : this.price >= 5 ? (l = Game.instance.greenColor,
                c = 1) : (l = Game.instance.whiteColor,
                    c = .8),
            l = Game.bonusLevel ? Game.instance.yellowColor : Game.instance.whiteColor,
            Game.instance.showText(n, r.x, r.y, l, 1, c),
            Game.instance.addMoney(this.price, !0),
            this.emitId >= 0 && this.emitCount > 0) {
            this.emitColorFromDiffuse && (this.mat ? this.emitColor = this.mat.resource.diffuse : this.baseMat && (this.emitColor = this.baseMat.resource.diffuse));
            for (var h = 0; h < this.emitCount; h++)
                this.emitRadius > 0 ? (Sliceable.temp.copy(r),
                    Sliceable.temp.x += pc.math.random(-this.emitRadius, this.emitRadius),
                    Sliceable.temp.y += pc.math.random(-this.emitRadius, this.emitRadius),
                    Sliceable.temp.z += pc.math.random(-this.emitRadius, this.emitRadius),
                    Sliceable.temp2.set(pc.math.random(-7, 7), pc.math.random(4, 7), pc.math.random(-4, 4)),
                    EffectDrop.create(Sliceable.temp, pc.math.random(.3, .5) + .25 * this.emitRadius, Sliceable.temp2, this.emitId, this.emitColor)) : (Sliceable.temp2.set(pc.math.random(-7, 7), pc.math.random(4, 7), pc.math.random(-4, 4)),
                        EffectDrop.create(r, pc.math.random(.3, .5), Sliceable.temp2, this.emitId, this.emitColor))
        }
    }
    ;
var StackCreator = pc.createScript("stackCreator");
StackCreator.attributes.add("count", {
    type: "number",
    default: 1
}),
    StackCreator.attributes.add("isFigure", {
        type: "boolean",
        default: !1
    }),
    StackCreator.attributes.add("yDistance", {
        type: "number",
        default: 1
    }),
    StackCreator.attributes.add("zRandom", {
        type: "number",
        default: 0
    }),
    StackCreator.attributes.add("yRandomAngle", {
        type: "number",
        default: 0
    }),
    StackCreator.attributes.add("static", {
        type: "boolean",
        default: !1
    }),
    StackCreator.attributes.add("staticOneSide", {
        type: "boolean",
        default: !1
    }),
    StackCreator.attributes.add("mats", {
        type: "asset",
        assetType: "material",
        array: !0
    }),
    StackCreator.attributes.add("multicolorVnutri", {
        type: "boolean",
        default: !1
    }),
    StackCreator.attributes.add("sideStack", {
        type: "boolean",
        default: !1
    }),
    StackCreator.prototype.init = function () {
        for (var t, a, e, i = this.entity.getPosition(), r = new pc.Vec3, n = 1, s = this.entity.getLocalEulerAngles(), o = 0, c = 1, d = this.count - 1; d >= 0; d--)
            d > 0 ? (t = this.entity.clone()).script.destroy("stackCreator") : t = this.entity,
                e = t.script.sliceable,
                this.static && (t.rigidbody.type = "static",
                    t.script.polygon.static = !0),
                this.staticOneSide && (e.left.rigidbody.type = "static",
                    r.z = -.04),
                e.baseMat && this.mats.length > 0 && (e.mat = this.mats[o],
                    0 == d && e.changeBaseMat(this.mats[o]),
                    this.mats.length > 1 && (o += c,
                        c > 0 && o >= this.mats.length - 1 ? (o = this.mats.length - 1,
                            c = -1) : c < 0 && o <= 0 && (o = 0,
                                c = 1))),
                this.multicolorVnutri && (e.matVnutri = StackCreator.getStackColor(),
                    0 == d && (EntityTools.changeMaterial(e.left.children[0], e.innerMat, e.matVnutri),
                        EntityTools.changeMaterial(e.right.children[0], e.innerMat, e.matVnutri))),
                this.isFigure && (a = t.getLocalScale(),
                    n = .75 + .25 * Math.cos(3.14 * d / 10),
                    t.setLocalScale(a.x, a.y, a.z * n)),
                r.copy(i),
                this.sideStack ? r.x += d * this.yDistance : r.y += d * this.yDistance,
                0 != this.zRandom && (r.z += pc.math.random(-this.zRandom, this.zRandom)),
                this.yRandomAngle > 0 && (t.rigidbody.angularFactor = new pc.Vec3(0, 1, 1),
                    t.setLocalEulerAngles(s.x, s.y + pc.math.random(-this.yRandomAngle, this.yRandomAngle), s.z)),
                d > 0 && (this.entity.parent.addChild(t),
                    t.rigidbody ? t.rigidbody.teleport(r) : t.setPosition(r))
    }
    ,
    StackCreator.getStackColor = function () {
        return Sliceable.innerMatId++,
            Sliceable.innerMatId >= Game.instance.innerMat.length && (Sliceable.innerMatId = 0),
            Game.instance.innerMat[Sliceable.innerMatId]
    }
    ,
    StackCreator.prototype.update = function (t) { }
    ;
var Effect3ddrop = pc.createScript("effect3ddrop");
Effect3ddrop.grav = new pc.Vec3(0, -15, 0),
    Effect3ddrop.temp = new pc.Vec3(0, 0, 0),
    Effect3ddrop.create = function (t, e) {
        var i = ObjectPool.instantiate("Effect3DDrop", t, Game.instance.app.root);
        return i.render.meshInstances[0].material = e,
            i.render.meshInstances[0].material.update(),
            i
    }
    ,
    Effect3ddrop.prototype.initialize = function () {
        this.vel = new pc.Vec3(0, 0, 0),
            this.damping = .01,
            this.size = 1,
            this.material = this.entity.render.meshInstances[0].material,
            this.onEnable(),
            this.on("enable", this.onEnable, this)
    }
    ,
    Effect3ddrop.prototype.onEnable = function () {
        this.vel = new pc.Vec3(pc.math.random(-4, 4), pc.math.random(3, 8), pc.math.random(-4, 4)),
            this.size = pc.math.random(.15, .3)
    }
    ,
    Effect3ddrop.prototype.update = function (t) {
        Effect3ddrop.temp.copy(Effect3ddrop.grav),
            Effect3ddrop.temp.scale(t),
            this.vel.add(Effect3ddrop.temp),
            this.vel.scale(1 - this.damping * t),
            Effect3ddrop.temp.copy(this.vel),
            Effect3ddrop.temp.scale(t),
            this.entity.translate(Effect3ddrop.temp);
        var e = this.entity.getPosition();
        if (e.add(this.vel),
            this.entity.lookAt(e),
            this.size -= .3 * t,
            this.size <= 0)
            ObjectPool.push(this.entity);
        else {
            var i = pc.math.clamp(this.vel.length() / 10, 1, 4);
            this.entity.setLocalScale(this.size, this.size, this.size * i)
        }
    }
    ;
var PhysScaler = pc.createScript("physScaler");
PhysScaler.attributes.add("initialScale", {
    type: "vec3",
    default: [0, 0, 0]
}),
    PhysScaler.attributes.add("initialHalfExtents", {
        type: "vec3",
        default: [0, 0, 0]
    }),
    PhysScaler.attributes.add("initialRadius", {
        type: "number",
        default: 0
    }),
    PhysScaler.attributes.add("initialHeight", {
        type: "number",
        default: 0
    }),
    PhysScaler.attributes.add("initialPolyRadius", {
        type: "number",
        default: 0
    }),
    PhysScaler.tempVec = new pc.Vec3,
    PhysScaler.prototype.init = function () {
        var e = this.entity.getLocalScale();
        PhysScaler.tempVec.copy(e),
            PhysScaler.tempVec.div(this.initialScale);
        var t = Math.max(PhysScaler.tempVec.x, PhysScaler.tempVec.y, PhysScaler.tempVec.z)
            , i = this.entity.collision;
        i && ("box" == i.type ? (PhysScaler.tempVec.mul(this.initialHalfExtents),
            i.halfExtents = PhysScaler.tempVec.clone()) : "sphere" == i.type ? i.radius = t * this.initialRadius : "cylinder" == i.type && (i.radius = PhysScaler.tempVec.x * this.initialRadius,
                i.height = PhysScaler.tempVec.y * this.initialHeight));
        var a = this.entity.script.polygon;
        a && a.isCircle && (a.radius = t * this.initialPolyRadius),
            this.entity.script.destroy("physScaler")
    }
    ;
var GameText = pc.createScript("gameText");
GameText.attributes.add("glow", {
    type: "entity"
}),
    GameText.prototype.initialize = function () {
        this.hideDelay = 1,
            this.fadeOpacity = !1
    }
    ,
    GameText.prototype.animate = function (t, e = 1, i = 0) {
        this.hideAnimType = t,
            this.time = 0,
            this.state = 1,
            this.appearTime = .3,
            this.showTime = .55,
            this.hideTime = .2,
            this.fadeOpacity = !0,
            this.scaleMax = e,
            this.entity.element.opacity = 1,
            this.entity.setLocalScale(1, 1, 1)
    }
    ,
    GameText.prototype.update = function (t) {
        var e;
        this.time += t,
            1 == this.state && ((e = this.time / this.appearTime) >= 1 && (e = 1,
                this.state = 2,
                this.time = 0),
                2 == this.hideAnimType ? (this.entity.translateLocal(0, -500 * t, 0),
                    this.entity.element.opacity = e,
                    e = this.scaleMax,
                    this.entity.setLocalScale(e, e, e)) : (e *= this.scaleMax,
                        this.entity.setLocalScale(e, e, e))),
            2 == this.state && ((e = this.time / this.showTime) >= 1 && (e = 1,
                this.state = 3,
                this.time = 0),
                1 == this.hideAnimType ? this.entity.translateLocal(0, 50 * t, 0) : (e = this.scaleMax + .1 * e,
                    this.entity.setLocalScale(e, e, e),
                    this.entity.translateLocal(0, -50 * t, 0))),
            3 == this.state && ((e = 1 - this.time / this.hideTime) <= 0 && (e = 0,
                ObjectPool.push(this.entity)),
                1 == this.hideAnimType ? (this.entity.element.opacity = e,
                    this.entity.translateLocal(0, 400 * t, 0)) : this.entity.element.opacity = e)
    }
    ;
var FinishController = pc.createScript("finishController");
FinishController.attributes.add("blocks", {
    type: "entity",
    array: !0
}),
    FinishController.attributes.add("textEntity", {
        type: "entity"
    }),
    FinishController.attributes.add("lastBlock", {
        type: "entity"
    }),
    FinishController.attributes.add("flag", {
        type: "entity"
    }),
    FinishController.instance = null,
    FinishController.blockData = [],
    FinishController.prototype.setBestBlockType = function () {
        for (var t, o, e = 0; e < FinishController.blockData.length && 50 != (t = FinishController.blockData[e]).count; e++)
            ;
        var r, l, n = FinishController.blockData[0].blockType, a = this.applyOperatorData(100, n);
        o = FinishController.blockData[0];
        for (e = 1; e < FinishController.blockData.length; e++)
            l = FinishController.blockData[e].blockType,
                (r = this.applyOperatorData(100, l)) > a && (a = r,
                    n = l,
                    o = FinishController.blockData[e]);
        l = t.blockType,
            t.blockType = o.blockType,
            o.blockType = l
    }
    ,
    FinishController.prototype.placeBlocks2 = function (t) {
        var o, e, r, l;
        this.flag.enabled = !1,
            this.generateRandomBlockData();
        for (var n, a, i = 0, s = 0; s < this.blocks.length; s++) {
            l = this.blocks[s];
            for (var p = 0; p < FinishController.blockData.length; p++)
                2 == (o = FinishController.blockData[p]).count && o.entity,
                    l == o.entity && (o.blockType = this.blockTypes[i],
                        i++)
        }
        MathUtil.shuffleArray(FinishController.blockData),
            (e = this.blocks[0].getLocalPosition().clone()).y = 0,
            r = this.textEntity.getLocalPosition().clone();
        for (p = 0; p < FinishController.blockData.length; p++)
            a = (o = FinishController.blockData[p]).blockType,
                50 == o.count && (n = o),
                o.text.element.text = a.text,
                e.y += .5 * o.sizeY,
                o.entity.setLocalPosition(e.x, e.y, e.z),
                o.text.setLocalPosition(r.x, e.y, r.z),
                e.y += .5 * o.sizeY;
        t ? (n.text.element.text = "BONUS!",
            n.text.script.scaler.enabled = !0) : (n.text.script.scaler.enabled = !1,
                n.text.setLocalScale(.01, .01, .01)),
            e.y += .5 * this.lastBlockSizeY,
            this.lastBlock.setLocalPosition(e.x, e.y, e.z)
    }
    ;
var OperatorType = {
    ADD: {
        symbol: "+",
        maxCount: 500,
        minCount: 10
    },
    SUBTRACT: {
        symbol: "-",
        maxCount: 100,
        minCount: 5
    },
    MULTIPLY: {
        symbol: "x",
        maxCount: 10,
        minCount: 2
    },
    DIVIDE: {
        symbol: "÷",
        maxCount: 10,
        minCount: 2
    }
};
FinishController.prototype.generateRandomBlockData = function () {
    this.blockTypes = [],
        this.blockTypes.push(this.createBlock(OperatorType.MULTIPLY)),
        this.blockTypes.push(this.createBlock(OperatorType.ADD)),
        this.blockTypes.push(this.createBlock(OperatorType.MULTIPLY)),
        this.blockTypes.push(this.createBlock(OperatorType.ADD));
    var t, o = this.getRandomNegativeOperator();
    t = Math.random() > .6 ? (OperatorType.SUBTRACT,
        OperatorType.DIVIDE) : this.getRandomPositiveOperator(),
        this.blockTypes.push(this.createBlock(o)),
        this.blockTypes.push(this.createBlock(t)),
        this.blockTypes.sort(((t, o) => t.weight - o.weight))
}
    ,
    FinishController.prototype.getRandomPositiveOperator = function () {
        var t = [OperatorType.ADD, OperatorType.MULTIPLY];
        return t[Math.floor(Math.random() * t.length)]
    }
    ,
    FinishController.prototype.getRandomNegativeOperator = function () {
        var t = [OperatorType.SUBTRACT, OperatorType.DIVIDE];
        return t[Math.floor(Math.random() * t.length)]
    }
    ,
    FinishController.prototype.getRandomOperator = function () {
        var t = [OperatorType.ADD, OperatorType.SUBTRACT, OperatorType.MULTIPLY, OperatorType.DIVIDE];
        return t[Math.floor(Math.random() * t.length)]
    }
    ,
    FinishController.prototype.createBlock = function (t) {
        var o = t.maxCount
            , e = this.getRandomCount(o, t.minCount);
        t == OperatorType.ADD && Math.random() < .8 && (e = this.getRandomCount(10, 100));
        var r = this.beautifyNumber(e)
            , l = {
                text: this.generateBlockText(r, t),
                value: r,
                operator: t,
                weight: 100
            };
        return l.weight = this.applyOperatorData(100, l),
            l
    }
    ,
    FinishController.prototype.getRandomCount = function (t, o) {
        return Math.floor(Math.random() * (t - o)) + 1 + o
    }
    ,
    FinishController.prototype.beautifyNumber = function (t, o) {
        var e = t;
        if (t < 5)
            e = Math.max(t, 2),
                o != OperatorType.ADD && o != OperatorType.SUBTRACT || (e = 5);
        else if (t <= 10)
            e = o == OperatorType.ADD || o == OperatorType.SUBTRACT ? [5, 10][Math.floor(2 * Math.random())] : t;
        else if (t <= 100) {
            var r = (l = [10, 5])[Math.floor(Math.random() * l.length)];
            e = Math.floor(t / r) * r
        } else if (t <= 500) {
            var l;
            r = (l = [5, 10])[Math.floor(Math.random() * l.length)];
            e = Math.floor(t / r) * r
        }
        return e
    }
    ,
    FinishController.prototype.applyOperatorData = function (t, o) {
        var e = t;
        return o.operator == OperatorType.MULTIPLY ? e *= o.value : o.operator == OperatorType.DIVIDE ? e /= o.value : o.operator == OperatorType.ADD ? e += o.value : o.operator == OperatorType.SUBTRACT && (e -= o.value),
            Math.round(e)
    }
    ,
    FinishController.prototype.generateBlockText = function (t, o) {
        var e = "";
        return o == OperatorType.MULTIPLY ? e = "x " + t.toString() : o == OperatorType.DIVIDE ? e = "÷ " + t.toString() : o == OperatorType.ADD ? e = "+ " + t.toString() : o == OperatorType.SUBTRACT && (e = "- " + t.toString()),
            e
    }
    ,
    FinishController.prototype.initialize = function () {
        FinishController.instance = this;
        for (var t, o, e = [2, 3, 5, 10, 25, 50], r = 0; r < this.blocks.length; r++)
            (t = this.textEntity.clone()).element.text = e[r].toString() + " x",
                this.entity.addChild(t),
                o = this.blocks[r].getLocalScale().y,
                FinishController.blockData.push({
                    text: t,
                    count: e[r],
                    entity: this.blocks[r],
                    sizeY: o,
                    blockType: {}
                });
        this.textEntity.enabled = !1,
            this.lastBlockSizeY = this.lastBlock.getLocalScale().y,
            this.placeBlocks()
    }
    ,
    FinishController.prototype.getBlockData = function (t) {
        for (var o, e = 0; e < FinishController.blockData.length; e++)
            if ((o = FinishController.blockData[e]).entity == t)
                return o;
        return null
    }
    ,
    FinishController.prototype.getBlockOperator = function (t) {
        for (var o, e = 0; e < FinishController.blockData.length; e++)
            if ((o = FinishController.blockData[e]).entity == t)
                return o.blockType;
        return null
    }
    ,
    FinishController.prototype.placeBlocks = function (t) {
        var o, e, r, l;
        this.flag.enabled = !1,
            MathUtil.shuffleArray(FinishController.blockData),
            (e = this.blocks[0].getLocalPosition().clone()).y = 0,
            r = this.textEntity.getLocalPosition().clone();
        for (var n = 0; n < FinishController.blockData.length; n++)
            50 == (o = FinishController.blockData[n]).count && (l = o),
                e.y += .5 * o.sizeY,
                o.entity.setLocalPosition(e.x, e.y, e.z),
                o.text.setLocalPosition(r.x, e.y, r.z),
                e.y += .5 * o.sizeY;
        t ? (l.text.element.text = "BONUS!",
            l.text.script.scaler.enabled = !0) : (l.text.element.text = "50 x",
                l.text.script.scaler.enabled = !1,
                l.text.setLocalScale(.01, .01, .01)),
            e.y += .5 * this.lastBlockSizeY,
            this.lastBlock.setLocalPosition(e.x, e.y, e.z)
    }
    ,
    FinishController.prototype.update = function (t) { }
    ,
    FinishController.prototype.showFlag = function () {
        setTimeout((function () {
            GameAudio.play("cracker");
            for (var t = FinishController.instance.entity.getPosition(), o = 0; o < 59; o++)
                Serpantine.create(t)
        }
        ), 500),
            this.flag.setEulerAngles(0, 0, 90),
            this.flag.enabled = !0,
            this.flag.tween(this.flag.getLocalEulerAngles()).rotate({
                x: 0,
                y: 0,
                z: 0
            }, .75, pc.BounceOut).loop(!1).yoyo(!1).start()
    }
    ;
var MaterialBlinker = pc.createScript("materialBlinker");
MaterialBlinker.prototype.initialize = function () {
    var i, t, s;
    this.meshInstances = this.entity.model ? this.entity.model.meshInstances : this.entity.render.meshInstances,
        this.mats = [],
        this.matsB = [],
        this.blinkAlpha = 0,
        this.blinkSpeed = 1,
        this.blinkTarget = 1,
        this.blinkCount = 0,
        this.blinkColor = (new pc.Color).fromString("#FFFFFF");
    for (var e = 0; e < this.meshInstances.length; e++)
        t = (i = this.meshInstances[e]).material,
            this.mats.push(t),
            s = t.clone(),
            this.matsB.push(s),
            i.material = s
}
    ,
    MaterialBlinker.prototype.start = function (i, t) {
        this.blinkSpeed = i,
            this.blinkCount = t
    }
    ,
    MaterialBlinker.prototype.update = function (i) {
        if (0 == this.blinkCount)
            return 1;
        var t, s;
        this.blinkAlpha += this.blinkSpeed * i,
            this.blinkSpeed > 0 && this.blinkAlpha >= this.blinkTarget ? (this.blinkSpeed = -this.blinkSpeed,
                this.blinkAlpha = this.blinkTarget) : this.blinkSpeed < 0 && this.blinkAlpha < 0 && (this.blinkSpeed = -this.blinkSpeed,
                    this.blinkAlpha = 0,
                    this.blinkCount > 0 && this.blinkCount--,
                    this.blinkCount <= 0 && (this.blinkCount = 0));
        for (var e = 0; e < this.matsB.length; e++)
            t = this.matsB[e],
                s = this.mats[e],
                t.emissive.lerp(s.emissive, this.blinkColor, this.blinkAlpha),
                t.update()
    }
    ;
var Environment = pc.createScript("environment");
Environment.instance = null,
    Environment.attributes.add("grounds", {
        type: "entity",
        array: !0
    }),
    Environment.attributes.add("lights", {
        type: "entity",
        array: !0
    }),
    Environment.attributes.add("fogColors", {
        type: "rgba",
        array: !0
    }),
    Environment.attributes.add("backgrounds", {
        type: "entity",
        array: !0
    }),
    Environment.attributes.add("environments", {
        type: "entity",
        array: !0
    }),
    Environment.attributes.add("snow", {
        type: "entity"
    }),
    Environment.prototype.initialize = function () {
        Environment.instance = this,
            this.type = 0,
            this.groundsAr = [],
            this.groundsCount = 0,
            this.groundsId = 0,
            this.groundLastPos = new pc.Vec3(0, 0, 0),
            this.envTypes = [1, 3, 4, 5],
            this.envId = 0,
            EntityTools.enableSingleInArray(this.grounds, -1)
    }
    ,
    Environment.prototype.setType = function (t) {
        this.type = t,
            this.snow.enabled = !1,
            1 == this.type ? (this.groundsId = 0,
                EntityTools.enableSingleInArray(this.backgrounds, 0),
                EntityTools.enableSingleInArray(this.environments, 0),
                EntityTools.enableSingleInArray(this.lights, 0),
                this.app.scene.fogColor = this.fogColors[0],
                this.app.scene.fogStart = 50) : 2 == this.type ? (this.groundsId = 0,
                    EntityTools.enableSingleInArray(this.backgrounds, 1),
                    EntityTools.enableSingleInArray(this.environments, 0),
                    EntityTools.enableSingleInArray(this.lights, 1),
                    this.app.scene.fogColor = this.fogColors[1],
                    this.app.scene.fogStart = 500) : 3 == this.type ? (this.groundsId = 1,
                        EntityTools.enableSingleInArray(this.backgrounds, 2),
                        EntityTools.enableSingleInArray(this.environments, 1),
                        EntityTools.enableSingleInArray(this.lights, 0),
                        this.app.scene.fogColor = this.fogColors[2],
                        this.app.scene.fogStart = 100) : 4 == this.type ? (this.groundsId = 2,
                            EntityTools.enableSingleInArray(this.backgrounds, 0),
                            EntityTools.enableSingleInArray(this.environments, 2),
                            EntityTools.enableSingleInArray(this.lights, 0),
                            this.app.scene.fogColor = this.fogColors[4],
                            this.app.scene.fogStart = 150,
                            this.snow.enabled = !0) : 5 == this.type ? (this.groundsId = 3,
                                EntityTools.enableSingleInArray(this.backgrounds, 1),
                                EntityTools.enableSingleInArray(this.environments, 3),
                                EntityTools.enableSingleInArray(this.lights, 0),
                                this.app.scene.fogColor = this.fogColors[3],
                                this.app.scene.fogStart = 200,
                                this.snow.enabled = !1) : 6 == this.type && (this.groundsId = 4,
                                    EntityTools.enableSingleInArray(this.backgrounds, 3),
                                    EntityTools.enableSingleInArray(this.environments, 4),
                                    EntityTools.enableSingleInArray(this.lights, 0),
                                    this.app.scene.fogColor = this.fogColors[4],
                                    this.app.scene.fogStart = 200,
                                    this.snow.enabled = !1),
            6 == this.type ? GameAudio.switchLoopSound("loopSound2") : GameAudio.switchLoopSound("loopSound"),
            Game.debugOutput && console.log("env switch : ", this.type)
    }
    ,
    Environment.prototype.createGrounds = function () {
        for (this.clearGrounds(),
            this.groundLastPos.set(-25, 0, 0); Game.instance.lastPos.x + 60 > this.groundLastPos.x;) {
            var t = this.grounds[this.groundsId].clone()
                , n = t.findByName("Start")
                , e = n.getLocalPosition();
            n.enabled = !1,
                this.entity.addChild(t),
                t.setPosition(this.groundLastPos.x - e.x, this.groundLastPos.y - e.y, 0),
                t.enabled = !0;
            var s = t.findByName("End")
                , i = s.getPosition();
            this.groundLastPos.copy(i),
                s.enabled = !1;
            var o = t.findByName("Floor");
            o.script && o.script.physScaler && o.script.physScaler.init(),
                this.groundsAr.push(t),
                this.groundsCount++
        }
    }
    ,
    Environment.prototype.clearGrounds = function () {
        for (var t, n = this.groundsAr.length - 1; n >= 0; n--)
            t = this.groundsAr[n],
                this.entity.removeChild(t),
                t.destroy();
        this.groundsAr = []
    }
    ,
    Environment.prototype.switchTo = function (t) {
        this.setType(t),
            MathUtil.shuffleArray(this.envTypes);
        for (var n = 0; n < this.envTypes.length; n++)
            if (e = this.envTypes[n],
                e == t)
                return void (this.envId = n)
    }
    ,
    Environment.prototype.switchType = function () {
        var t, n = this.envTypes[this.envId];
        this.envId++,
            this.envId >= this.envTypes.length && (this.envId = 0,
                MathUtil.shuffleArray(this.envTypes),
                (t = this.envTypes[this.envId]) == n && (this.envTypes[0] = this.envTypes[this.envTypes.length - 1],
                    this.envTypes[this.envTypes.length - 1] = t)),
            this.setType(this.envTypes[this.envId])
    }
    ,
    Environment.prototype.update = function (t) {
        Game.noDebug || this.app.keyboard.wasPressed(pc.KEY_B) && FadeScreen.instance.show(.3, 0, 0, (function () {
            Environment.instance.switchType(),
                Game.instance.restart()
        }
        ))
    }
    ;
var Serpantine = pc.createScript("serpantine");
Serpantine.attributes.add("serpColors", {
    type: "rgba",
    array: !0
}),
    Serpantine.create = function (t) {
        var i = ObjectPool.instantiate("Serp", t, Game.instance.app.root)
            , e = i.script.serpantine;
        return e.initialized || e.initialize(),
            i
    }
    ,
    Serpantine.prototype.onEnable = function () {
        this.time = 0,
            this.gos.impulse2(pc.math.random(-10, 10), pc.math.random(5, 15), pc.math.random(-10, 10), 550),
            this.entity.sprite.color = this.serpColors[MathUtil.getRandomInt(this.serpColors.length)];
        var t = pc.math.random(.1, .2);
        this.entity.setLocalScale(t, t, t)
    }
    ,
    Serpantine.prototype.initialize = function () {
        if (this.initialized)
            return 1;
        this.initialized = !0,
            this.gos = this.entity.script.gravityObject,
            this.onEnable(),
            this.on("enable", this.onEnable, this)
    }
    ,
    Serpantine.prototype.update = function (t) {
        this.time += t,
            this.time > 5 && ObjectPool.push(this.entity)
    }
    ;
var GravityObject = pc.createScript("gravityObject");
GravityObject.tmp = new pc.Vec3,
    GravityObject.tmp2 = new pc.Vec3,
    GravityObject.prototype.initialize = function () {
        if (this.initialized)
            return 1;
        this.gravity = -10,
            this._vel = new pc.Vec3(0, 0, 0),
            this._acc = new pc.Vec3(0, this.gravity, 0),
            this.rotSpeed = new pc.Vec3(0, 0, 0),
            this.falling = !0,
            this.delay = 0,
            this.bottomDestroyPlank = -3,
            this.initialized = !0
    }
    ,
    GravityObject.prototype.impulse = function (t, i, e) {
        var a = t * MathUtil.DEG_TO_RAD;
        this._vel.x = Math.cos(a) * i,
            this._vel.y = Math.sin(a) * i,
            this._vel.z = 0,
            this.rotSpeed.set(pc.math.random(-e, e), pc.math.random(-e, e), pc.math.random(-e, e))
    }
    ,
    GravityObject.prototype.impulse2 = function (t, i, e, a) {
        this._vel.x = t,
            this._vel.y = i,
            this._vel.z = e,
            this.rotSpeed.set(pc.math.random(-a, a), pc.math.random(-a, a), pc.math.random(-a, a))
    }
    ,
    GravityObject.prototype.update = function (t) {
        if (this.falling) {
            if (this.delay > 0)
                return this.delay -= t,
                    this.delay,
                    0;
            this._acc.y = this.gravity;
            var i = this.entity.getPosition();
            GravityObject.tmp2.copy(this._acc).scale(t * Game.instance.slomo),
                this._vel.add(GravityObject.tmp2),
                GravityObject.tmp2.copy(this._vel).scale(t * Game.instance.slomo),
                i.add(GravityObject.tmp2),
                this.entity.setPosition(i),
                this.entity.rotateLocal(this.rotSpeed.x * t * Game.instance.slomo, this.rotSpeed.y * t * Game.instance.slomo, this.rotSpeed.z * t * Game.instance.slomo),
                i.y <= this.bottomDestroyPlank && this.entity.destroy()
        }
    }
    ;
var Jumper = pc.createScript("jumper");
Jumper.attributes.add("delayStart", {
    type: "number",
    default: 0
}),
    Jumper.attributes.add("delayRepeat", {
        type: "number",
        default: 1
    }),
    Jumper.attributes.add("jumpForce", {
        type: "number",
        default: 5
    }),
    Jumper.attributes.add("jumpSpeed", {
        type: "number",
        default: .8
    }),
    Jumper.attributes.add("bounceKoef", {
        type: "number",
        default: .8
    }),
    Jumper.tmp = new pc.Vec3,
    Jumper.prototype.initialize = function () {
        this.startPos = this.entity.getLocalPosition().clone(),
            this.startSc = this.entity.getLocalScale().clone(),
            this.scaleZ = 1,
            this.scaleZVel = 0,
            this.gravity = -70,
            this._vel = new pc.Vec3(0, 0, 0),
            this._acc = new pc.Vec3(0, this.gravity, 0),
            this.rotSpeed = new pc.Vec3(0, 0, 0),
            this._delay = this.delayStart,
            this.jumping = !1,
            this.jump()
    }
    ,
    Jumper.prototype.update = function (t) {
        if (Game.instance.paused)
            return 1;
        this.scaleZVel += (1 - this.scaleZ) * t,
            this.scaleZVel += .5 * t,
            this.scaleZ += this.scaleZVel,
            this.scaleZVel *= 1 - t,
            this.scaleZ = pc.math.clamp(this.scaleZ, .7, 1.05);
        var e = 1 / this.scaleZ;
        e = pc.math.clamp(e, .6, 1.4),
            this.entity.setLocalScale(this.startSc.x * e, this.startSc.y * this.scaleZ, this.startSc.z * e);
        var s = this.entity.getLocalPosition();
        this._delay > 0 && (this._delay -= t),
            Jumper.tmp.copy(this._acc).scale(t * this.jumpSpeed * Game.instance.slomo),
            this._vel.add(Jumper.tmp),
            Jumper.tmp.copy(this._vel).scale(t * this.jumpSpeed * Game.instance.slomo),
            s.add(Jumper.tmp),
            s.y <= this.startPos.y && (s.y = this.startPos.y,
                this._vel.y = 0,
                this.jumping && (this.jumping = !1,
                    this.scaleZ = 1,
                    this.scaleZVel = -.1 * this.bounceKoef),
                this.jump()),
            this.entity.setLocalPosition(s)
    }
    ,
    Jumper.prototype.jump = function () {
        if (this._delay > 0)
            return 0;
        this._delay = this.delayRepeat,
            this.jumping = !0,
            this._vel.set(0, this.jumpForce, 0)
    }
    ;
"undefined" != typeof document && (/*! FPSMeter 0.3.1 - 9th May 2013 | https://github.com/Darsain/fpsmeter */
    function (t, e) {
        function s(t, e) {
            for (var n in e)
                try {
                    t.style[n] = e[n]
                } catch (t) { }
            return t
        }
        function H(t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof t
        }
        function R(t, e) {
            if ("array" !== H(e))
                return -1;
            if (e.indexOf)
                return e.indexOf(t);
            for (var n = 0, o = e.length; n < o; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        function I() {
            var t, e = arguments;
            for (t in e[1])
                if (e[1].hasOwnProperty(t))
                    switch (H(e[1][t])) {
                        case "object":
                            e[0][t] = I({}, e[0][t], e[1][t]);
                            break;
                        case "array":
                            e[0][t] = e[1][t].slice(0);
                            break;
                        default:
                            e[0][t] = e[1][t]
                    }
            return 2 < e.length ? I.apply(null, [e[0]].concat(Array.prototype.slice.call(e, 2))) : e[0]
        }
        function N(t) {
            return 1 === (t = Math.round(255 * t).toString(16)).length ? "0" + t : t
        }
        function S(t, e, n, o) {
            t.addEventListener ? t[o ? "removeEventListener" : "addEventListener"](e, n, !1) : t.attachEvent && t[o ? "detachEvent" : "attachEvent"]("on" + e, n)
        }
        function D(t, e) {
            function g(t, e, n, o) {
                return h[0 | t][Math.round(Math.min((e - n) / (o - n) * M, M))]
            }
            function r() {
                F.legend.fps !== q && (F.legend.fps = q,
                    F.legend[c] = q ? "FPS" : "ms"),
                    b = q ? v.fps : v.duration,
                    F.count[c] = 999 < b ? "999+" : b.toFixed(99 < b ? 0 : O.decimals)
            }
            function m() {
                for (l = n(),
                    P < l - O.threshold && (v.fps -= v.fps / Math.max(1, 60 * O.smoothing / O.interval),
                        v.duration = 1e3 / v.fps),
                    w = O.history; w--;)
                    T[w] = 0 === w ? v.fps : T[w - 1],
                        j[w] = 0 === w ? v.duration : j[w - 1];
                if (r(),
                    O.heat) {
                    if (z.length)
                        for (w = z.length; w--;)
                            z[w].el.style[o[z[w].name].heatOn] = q ? g(o[z[w].name].heatmap, v.fps, 0, O.maxFps) : g(o[z[w].name].heatmap, v.duration, O.threshold, 0);
                    if (F.graph && o.column.heatOn)
                        for (w = C.length; w--;)
                            C[w].style[o.column.heatOn] = q ? g(o.column.heatmap, T[w], 0, O.maxFps) : g(o.column.heatmap, j[w], O.threshold, 0)
                }
                if (F.graph)
                    for (y = 0; y < O.history; y++)
                        C[y].style.height = (q ? T[y] ? Math.round(x / O.maxFps * Math.min(T[y], O.maxFps)) : 0 : j[y] ? Math.round(x / O.threshold * Math.min(j[y], O.threshold)) : 0) + "px"
            }
            function k() {
                20 > O.interval ? (p = i(k),
                    m()) : (p = setTimeout(k, O.interval),
                        f = i(m))
            }
            function G(t) {
                (t = t || window.event).preventDefault ? (t.preventDefault(),
                    t.stopPropagation()) : (t.returnValue = !1,
                        t.cancelBubble = !0),
                    v.toggle()
            }
            function U() {
                O.toggleOn && S(F.container, O.toggleOn, G, 1),
                    t.removeChild(F.container)
            }
            function V() {
                if (F.container && U(),
                    o = D.theme[O.theme],
                    !(h = o.compiledHeatmaps || []).length && o.heatmaps.length) {
                    for (y = 0; y < o.heatmaps.length; y++)
                        for (h[y] = [],
                            w = 0; w <= M; w++) {
                            var e, n = h[y], a = w;
                            e = .33 / M * w;
                            var i = o.heatmaps[y].saturation
                                , l = o.heatmaps[y].lightness
                                , p = void 0
                                , c = void 0
                                , u = void 0
                                , d = u = void 0
                                , f = p = c = void 0;
                            f = void 0;
                            0 === (u = .5 >= l ? l * (1 + i) : l + i - l * i) ? e = "#000" : (c = (u - (d = 2 * l - u)) / u,
                                f = (e *= 6) - (p = Math.floor(e)),
                                f *= u * c,
                                0 === p || 6 === p ? (p = u,
                                    c = d + f,
                                    u = d) : 1 === p ? (p = u - f,
                                        c = u,
                                        u = d) : 2 === p ? (p = d,
                                            c = u,
                                            u = d + f) : 3 === p ? (p = d,
                                                c = u - f) : 4 === p ? (p = d + f,
                                                    c = d) : (p = u,
                                                        c = d,
                                                        u -= f),
                                e = "#" + N(p) + N(c) + N(u)),
                                n[a] = e
                        }
                    o.compiledHeatmaps = h
                }
                for (var b in F.container = s(document.createElement("div"), o.container),
                    F.count = F.container.appendChild(s(document.createElement("div"), o.count)),
                    F.legend = F.container.appendChild(s(document.createElement("div"), o.legend)),
                    F.graph = O.graph ? F.container.appendChild(s(document.createElement("div"), o.graph)) : 0,
                    z.length = 0,
                    F)
                    F[b] && o[b].heatOn && z.push({
                        name: b,
                        el: F[b]
                    });
                if (C.length = 0,
                    F.graph)
                    for (F.graph.style.width = O.history * o.column.width + (O.history - 1) * o.column.spacing + "px",
                        w = 0; w < O.history; w++)
                        C[w] = F.graph.appendChild(s(document.createElement("div"), o.column)),
                            C[w].style.position = "absolute",
                            C[w].style.bottom = 0,
                            C[w].style.right = w * o.column.width + w * o.column.spacing + "px",
                            C[w].style.width = o.column.width + "px",
                            C[w].style.height = "0px";
                s(F.container, O),
                    r(),
                    t.appendChild(F.container),
                    F.graph && (x = F.graph.clientHeight),
                    O.toggleOn && ("click" === O.toggleOn && (F.container.style.cursor = "pointer"),
                        S(F.container, O.toggleOn, G))
            }
            "object" === H(t) && undefined === t.nodeType && (e = t,
                t = document.body),
                t || (t = document.body);
            var o, h, l, p, f, x, b, w, y, v = this, O = I({}, D.defaults, e || {}), F = {}, C = [], M = 100, z = [], E = O.threshold, A = 0, P = n() - E, T = [], j = [], q = "fps" === O.show;
            v.options = O,
                v.fps = 0,
                v.duration = 0,
                v.isPaused = 0,
                v.tickStart = function () {
                    A = n()
                }
                ,
                v.tick = function () {
                    l = n(),
                        E += (l - P - E) / O.smoothing,
                        v.fps = 1e3 / E,
                        v.duration = A < P ? E : l - A,
                        P = l
                }
                ,
                v.pause = function () {
                    return p && (v.isPaused = 1,
                        clearTimeout(p),
                        a(p),
                        a(f),
                        p = f = 0),
                        v
                }
                ,
                v.resume = function () {
                    return p || (v.isPaused = 0,
                        k()),
                        v
                }
                ,
                v.set = function (t, e) {
                    return O[t] = e,
                        q = "fps" === O.show,
                        -1 !== R(t, u) && V(),
                        -1 !== R(t, d) && s(F.container, O),
                        v
                }
                ,
                v.showDuration = function () {
                    return v.set("show", "ms"),
                        v
                }
                ,
                v.showFps = function () {
                    return v.set("show", "fps"),
                        v
                }
                ,
                v.toggle = function () {
                    return v.set("show", q ? "ms" : "fps"),
                        v
                }
                ,
                v.hide = function () {
                    return v.pause(),
                        F.container.style.display = "none",
                        v
                }
                ,
                v.show = function () {
                    return v.resume(),
                        F.container.style.display = "block",
                        v
                }
                ,
                v.destroy = function () {
                    v.pause(),
                        U(),
                        v.tick = v.tickStart = function () { }
                }
                ,
                V(),
                k()
        }
        var n, o = t.performance;
        n = o && (o.now || o.webkitNow) ? o[o.now ? "now" : "webkitNow"].bind(o) : function () {
            return +new Date
        }
            ;
        for (var a = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, i = t.requestAnimationFrame, h = 0, l = 0, p = (o = ["moz", "webkit", "o"]).length; l < p && !a; ++l)
            i = (a = t[o[l] + "CancelAnimationFrame"] || t[o[l] + "CancelRequestAnimationFrame"]) && t[o[l] + "RequestAnimationFrame"];
        a || (i = function (e) {
            var o = n()
                , a = Math.max(0, 16 - (o - h));
            return h = o + a,
                t.setTimeout((function () {
                    e(o + a)
                }
                ), a)
        }
            ,
            a = function (t) {
                clearTimeout(t)
            }
        );
        var c = "string" === H(document.createElement("div").textContent) ? "textContent" : "innerText";
        D.extend = I,
            window.FPSMeter = D,
            D.defaults = {
                interval: 100,
                smoothing: 10,
                show: "fps",
                toggleOn: "click",
                decimals: 1,
                maxFps: 60,
                threshold: 100,
                position: "absolute",
                zIndex: 10,
                left: "5px",
                top: "5px",
                right: "auto",
                bottom: "auto",
                margin: "0 0 0 0",
                theme: "dark",
                heat: 0,
                graph: 0,
                history: 20
            };
        var u = ["toggleOn", "theme", "heat", "graph", "history"]
            , d = "position zIndex left top right bottom margin".split(" ")
    }(window),
    function (t, e) {
        e.theme = {};
        var n = e.theme.base = {
            heatmaps: [],
            container: {
                heatOn: null,
                heatmap: null,
                padding: "5px",
                minWidth: "95px",
                height: "30px",
                lineHeight: "30px",
                textAlign: "right",
                textShadow: "none"
            },
            count: {
                heatOn: null,
                heatmap: null,
                position: "absolute",
                top: 0,
                right: 0,
                padding: "5px 10px",
                height: "30px",
                fontSize: "24px",
                fontFamily: "Consolas, Andale Mono, monospace",
                zIndex: 2
            },
            legend: {
                heatOn: null,
                heatmap: null,
                position: "absolute",
                top: 0,
                left: 0,
                padding: "5px 10px",
                height: "30px",
                fontSize: "12px",
                lineHeight: "32px",
                fontFamily: "sans-serif",
                textAlign: "left",
                zIndex: 2
            },
            graph: {
                heatOn: null,
                heatmap: null,
                position: "relative",
                boxSizing: "padding-box",
                MozBoxSizing: "padding-box",
                height: "100%",
                zIndex: 1
            },
            column: {
                width: 4,
                spacing: 1,
                heatOn: null,
                heatmap: null
            }
        };
        e.theme.dark = e.extend({}, n, {
            heatmaps: [{
                saturation: .8,
                lightness: .8
            }],
            container: {
                background: "#222",
                color: "#fff",
                border: "1px solid #1a1a1a",
                textShadow: "1px 1px 0 #222"
            },
            count: {
                heatOn: "color"
            },
            column: {
                background: "#3f3f3f"
            }
        }),
            e.theme.light = e.extend({}, n, {
                heatmaps: [{
                    saturation: .5,
                    lightness: .5
                }],
                container: {
                    color: "#666",
                    background: "#fff",
                    textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
                },
                count: {
                    heatOn: "color"
                },
                column: {
                    background: "#eaeaea"
                }
            }),
            e.theme.colorful = e.extend({}, n, {
                heatmaps: [{
                    saturation: .5,
                    lightness: .6
                }],
                container: {
                    heatOn: "backgroundColor",
                    background: "#888",
                    color: "#fff",
                    textShadow: "1px 1px 0 rgba(0,0,0,.2)",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
                },
                column: {
                    background: "#777",
                    backgroundColor: "rgba(0,0,0,.2)"
                }
            }),
            e.theme.transparent = e.extend({}, n, {
                heatmaps: [{
                    saturation: .8,
                    lightness: .5
                }],
                container: {
                    padding: 0,
                    color: "#fff",
                    textShadow: "1px 1px 0 rgba(0,0,0,.5)"
                },
                count: {
                    padding: "0 5px",
                    height: "40px",
                    lineHeight: "40px"
                },
                legend: {
                    padding: "0 5px",
                    height: "40px",
                    lineHeight: "42px"
                },
                graph: {
                    height: "40px"
                },
                column: {
                    width: 5,
                    background: "#999",
                    heatOn: "backgroundColor",
                    opacity: .5
                }
            })
    }(window, FPSMeter));
var Fps = pc.createScript("fps");
Fps.prototype.initialize = function () {
    this.fps = new FPSMeter({
        heat: !0,
        graph: !0
    })
}
    ,
    Fps.prototype.update = function (t) {
        this.fps.tick()
    }
    ;
var UiScore = pc.createScript("uiScore");
UiScore.attributes.add("score", {
    type: "entity"
}),
    UiScore.prototype.initialize = function () {
        this.onEnable(),
            this.on("enable", this.onEnable, this)
    }
    ,
    UiScore.prototype.onEnable = function () {
        this.score.script.counterText.setValue(0, Game.instance.currScore, Game.instance.currScore)
    }
    ,
    UiScore.prototype.update = function (e) { }
    ;
var ShopController = pc.createScript("shopController");
ShopController.attributes.add("rewButton", {
    type: "entity"
}),
    ShopController.shopItems = [],
    ShopController.shopItemsCount = 0,
    ShopController.openedFromScore = !1,
    ShopController.createSkins = function () {
        ShopController.createSkin("1", 0, 0, 0, -1, -1),
            ShopController.createSkin("2", 0, 1, 1, -1, -1),
            ShopController.createSkin("3", 0, 1, 2, -1, -1),
            ShopController.createSkin("4", 0, 1, 3, 5, 1),
            ShopController.createSkin("5", 0, 1, 4, 0, 1),
            ShopController.createSkin("6", 25, 1, 5, 1, 1),
            ShopController.createSkin("7", 25, 1, 6, 2, 1),
            ShopController.createSkin("8", 50, 1, 7, 3, 1),
            ShopController.createSkin("9", 50, 1, 8, 4, 1)
    }
    ,
    ShopController.applySkin = function (t, e) { }
    ,
    ShopController.createSkin = function (t, e, o, n, r, l) {
        var s = {
            name: t,
            price: e,
            enableRotation: o,
            iconIndex: n,
            unlocked: (!1,
                !0),
            dropId: r,
            dropOnKick: l,
            itemId: ShopController.shopItemsCount,
            shopItem: null
        };
        ShopController.shopItems.push(s),
            ShopController.shopItemsCount++
    }
    ,
    ShopController.attributes.add("allKnivesUnlockedMsg", {
        type: "entity"
    }),
    ShopController.attributes.add("buttonsHandler", {
        type: "entity"
    }),
    ShopController.attributes.add("buy2text", {
        type: "entity"
    }),
    ShopController.attributes.add("buy2", {
        type: "entity"
    }),
    ShopController.attributes.add("unlock", {
        type: "entity"
    }),
    ShopController.attributes.add("choose", {
        type: "entity"
    }),
    ShopController.attributes.add("priceText", {
        type: "entity"
    }),
    ShopController.attributes.add("pricePanel", {
        type: "entity"
    }),
    ShopController.attributes.add("modelEntity", {
        type: "entity"
    }),
    ShopController.attributes.add("arrowLeft", {
        type: "entity"
    }),
    ShopController.attributes.add("arrowRight", {
        type: "entity"
    }),
    ShopController.openedFromScore = !1,
    ShopController.instance = null,
    ShopController.prototype.initialize = function () {
        if (ShopController.instance)
            return 0;
        var t;
        ShopController.instance = this,
            this.lockColor = (new pc.Color).fromString("#99AEC2"),
            this.unlockColor = (new pc.Color).fromString("#9F7DFF"),
            this.shopItem = this.entity.findByName("shopItem"),
            this.shopButs = [];
        for (var e = 0, o = -250; o <= 250; o += 250)
            for (var n = -230; n <= 230; n += 230)
                t = this.shopItem.clone(),
                    ShopController.shopItems[e].shopItem = t,
                    t.script.scaler.delay = .08 * ShopController.shopItems[e].iconIndex,
                    this.buttonsHandler.addChild(t),
                    t.setLocalPosition(n, 25 - o, 0),
                    (t = t.script.shopItem).initialize(),
                    t.setShopItem(e),
                    this.shopButs.push(t),
                    e++;
        this.shopItem.enabled = !1,
            this.on("enable", this.onEnable, this),
            this.unlocking = !1,
            this.unlockSteps = 0,
            this.unlockTimer = 1
    }
    ,
    ShopController.prototype.unlockRandomSkin = function () {
        for (var t = [], e = 0; e < ShopController.shopItems.length; e++)
            ShopController.shopItems[e].unlocked || t.push(ShopController.shopItems[e].shopItem);
        if (0 == t.length)
            return 1;
        if (1 == t.length && (this.unlockSteps = 1),
            this.unlockSteps = t.length + 3,
            ShopController.unlockStepsArray = [],
            1 == t.length)
            ShopController.unlockStepsArray.push(t[0]),
                trace(t[0]),
                this.unlockSteps = 1;
        else {
            var o = -1
                , n = -1;
            for (e = 0; e < this.unlockSteps; e++)
                (o = MathUtil.getRandomInt(t.length - 1)) == n && (o++,
                    n > t.length - 1 && (o = 0)),
                    ShopController.unlockStepsArray.push(t[o]),
                    n = o
        }
        this.unlocking = !0,
            this.unlockTimer = 0
    }
    ,
    ShopController.unlockStepsArray = null,
    ShopController.prototype.updateRewardButton = function (t) {
        var e;
        if (Game.instance.shopRewardCooldownCurr > 0)
            e = !1;
        else {
            var o = 100 * Math.floor(.25 * Game.instance.getSkinPrice() / 100);
            o <= 0 ? e = !1 : (!t && this.rewButton.enabled || this.rewButton.script.moneyForAdbutton.reconfigure(o),
                e = !0)
        }
        e != this.rewButton.enabled && (this.rewButton.enabled = e)
    }
    ,
    ShopController.prototype.update = function (t) {
        if (this.updateRewardButton(!0),
            this.unlocking && (this.unlockTimer -= t,
                this.unlockTimer < 0)) {
            this.unlockTimer = .2,
                this.unlockSteps--;
            var e = ShopController.unlockStepsArray[this.unlockSteps];
            e.script.textScaler.start(!0),
                this.unlockSteps <= 0 ? (this.unlocking = !1,
                    e.script.shopItem.shopItem.unlocked = !0,
                    Game.instance.chosenSkinId = e.script.shopItem.shopItem.itemId,
                    this.updateSkinButtons(),
                    GameAudio.play("openknife"),
                    Game.instance.saveGame(),
                    this.itemsAvailable() ? this.allKnivesUnlockedMsg.enabled = !1 : this.allKnivesUnlockedMsg.enabled = !0) : GameAudio.play("pop2")
        }
    }
    ,
    ShopController.prototype.updateSkinButtons = function () {
        for (var t = 0; t < this.shopButs.length; t++)
            this.shopButs[t].updateState()
    }
    ,
    ShopController.prototype.onEnable = function () {
        this.itemsAvailable() ? this.allKnivesUnlockedMsg.enabled = !1 : this.allKnivesUnlockedMsg.enabled = !0,
            this.updateRewardButton(!0),
            this.updateSkinButtons()
    }
    ,
    ShopController.prototype.showItem = function (t) {
        this.shownItemId = t;
        for (var e = 0; e < this.modelEntity.children.length; e++)
            e == t ? this.modelEntity.children[e].enabled = !0 : this.modelEntity.children[e].enabled = !1;
        var o = ShopController.shopItems[this.shownItemId];
        !0 === o.unlocked || 1 === o.unlocked ? (this.choose.enabled = !0,
            this.unlock.enabled = !1,
            this.buy2.enabled = !1) : (this.priceText.element.text = o.price.toString(),
                this.buy2text.element.text = this.priceText.element.text,
                this.choose.enabled = !1,
                Game.instance.stars >= o.price ? (this.unlock.enabled = !0,
                    this.buy2.enabled = !1) : (this.unlock.enabled = !1,
                        this.buy2.enabled = !0)),
            this.updateArrows()
    }
    ,
    ShopController.prototype.itemsAvailableCount = function () {
        for (var t = 0, e = 0; e < ShopController.shopItems.length; e++)
            ShopController.shopItems[e].unlocked && t++;
        return t
    }
    ,
    ShopController.prototype.itemsAvailable = function () {
        for (var t = 0; t < ShopController.shopItems.length; t++)
            if (!ShopController.shopItems[t].unlocked && ShopController.shopItems[t].price <= Game.instance.money)
                return !0;
        return !1
    }
    ,
    ShopController.prototype.chooseSkin = function (t) {
        Game.instance.chosenSkinId = t,
            Savefile.set("chosenSkinId", Game.instance.chosenSkinId),
            Savefile.save()
    }
    ,
    ShopController.prototype.buyItem = function (t) {
        var e = ShopController.shopItems[t];
        !0 === e.unlocked || 1 === e.unlocked || Game.instance.wasteCoins(e.price) && (FadeScreen.instance.show(.3, 0, !0, null),
            e.unlocked = !0,
            Game.instance.chosenSkinId = this.shownItemId,
            this.showItem(t),
            this.chooseSkin(t),
            GameAudio.play("buy"),
            Game.instance.bikesBought++,
            Achievments.instance.beat(2, Game.instance.bikesBought),
            Game.instance.saveSkins(),
            this.onEnable(),
            console.log("shop : skin purchased ", e.name))
    }
    ,
    ShopController.prototype.closeShop = function () {
        this.modelEntity.enabled = !1
    }
    ,
    ShopController.prototype.switchItem = function (t) {
        this.shownItemId += t,
            this.shownItemId >= ShopController.shopItemsCount - 1 ? this.shownItemId = ShopController.shopItemsCount - 1 : this.shownItemId < 0 && (this.shownItemId = 0),
            this.showItem(this.shownItemId)
    }
    ,
    ShopController.prototype.updateArrows = function (t) {
        this.arrowLeft.enabled = !0,
            this.arrowRight.enabled = !0,
            this.shownItemId >= ShopController.shopItemsCount - 1 && (this.arrowRight.enabled = !1),
            this.shownItemId <= 0 && (this.arrowLeft.enabled = !1)
    }
    ;
var BestScore = pc.createScript("bestScore");
BestScore.prototype.initialize = function () { }
    ,
    BestScore.prototype.update = function (t) {
        this.entity.element.text = Game.instance.bestScore.toString()
    }
    ;
var UiInterface = pc.createScript("uiInterface");
UiInterface.instance = null,
    UiInterface.prototype.initialize = function () {
        UiInterface.instance = this,
            this.score = this.entity.findByName("Score"),
            this.levText = this.entity.findByName("LevText"),
            this.bonText = this.entity.findByName("BonusText"),
            this.arrowDown = this.entity.findByName("ArrowDown"),
            this.highFlyTime = 0,
            this.rebut = this.entity.findByName("ReBut"),
            this.setbut = this.entity.findByName("SetBut"),
            this.setbut.enabled = !0,
            this.rebut.enabled = !1,
            this.onEnable(),
            this.on("enable", this.onEnable, this)
    }
    ,
    UiInterface.prototype.onEnable = function () {
        Game.instance.paused ? (this.levText.enabled = !1,
            this.bonText.enabled = !1) : Game.bonusLevel ? (this.highFlyTime = 0,
                this.levText.enabled = !1,
                this.bonText.enabled = !0) : (this.highFlyTime = 0,
                    Game.lvlTextShown ? this.levText.enabled = !1 : this.levText.enabled = !0,
                    this.bonText.enabled = !1,
                    Game.lvlTextShown = !1),
            this.score.script.counterText.setValue(Game.instance.score, Game.instance.score, 200)
    }
    ,
    UiInterface.prototype.update = function (e) {
        this.score.element.text = "$ " + Game.instance.score.toString(),
            this.highFlyTime > 1 ? this.arrowDown.enabled = !0 : this.arrowDown.enabled = !1
    }
    ;
var CoinsText = pc.createScript("coinsText");
CoinsText.prototype.initialize = function () {
    this.count = Game.instance.money,
        this.entity.element.maxLines = 1,
        this.entity.element.width = 75,
        this.entity.parent.element.color = Game.instance.blackColor,
        this.entity.parent.element.opacity = .5,
        this.onEnable(),
        this.on("enable", this.onEnable, this)
}
    ,
    CoinsText.prototype.onEnable = function () {
        this.count = Game.instance.money
    }
    ,
    CoinsText.prototype.update = function (t) {
        if (this.count = pc.math.lerp(this.count, Game.instance.money, 10 * t),
            this.count >= 1e3) {
            var e = this.count % 1e3;
            e = Math.floor(e / 100),
                this.entity.element.text = e > 0 ? Math.floor(this.count / 1e3).toString() + "." + e.toString() + "k" : Math.floor(this.count / 1e3).toString() + "k"
        } else
            this.entity.element.text = Math.round(this.count).toString()
    }
    ,
    CoinsText.moneyToText = function (t) {
        if (this.count >= 1e3) {
            var e = this.count % 1e3;
            (e = Math.floor(e / 100)) > 0 ? Math.floor(t / 1e3).toString() + "." + e.toString() + "k" : Math.floor(t / 1e3).toString() + "k"
        } else
            Math.round(t).toString()
    }
    ;
var CounterText = pc.createScript("counterText");
CounterText.attributes.add("targetValue", {
    type: "number",
    default: 0
}),
    CounterText.attributes.add("shownValue", {
        type: "number",
        default: 0
    }),
    CounterText.attributes.add("changingSpeed", {
        type: "number",
        default: 10
    }),
    CounterText.attributes.add("text", {
        type: "string",
        default: ""
    }),
    CounterText.attributes.add("prefix", {
        type: "string",
        default: ""
    }),
    CounterText.attributes.add("textBefore", {
        type: "boolean",
        default: !0
    }),
    CounterText.prototype.updText = function () {
        var t = this.prefix + this.shownValue.toString();
        "" != this.text && (this.textBefore ? t = this.text + t : t += this.text),
            this.entity.element.text = t
    }
    ,
    CounterText.prototype.initialize = function () {
        this.currValue = this.shownValue,
            this.updText()
    }
    ,
    CounterText.prototype.setValue = function (t, e, u) {
        this.currValue = t,
            this.shownValue = t,
            this.targetValue = e,
            this.changingSpeed = u,
            this.updText()
    }
    ,
    CounterText.prototype.update = function (t) {
        this.shownValue != this.targetValue && (this.currValue < this.targetValue ? (this.currValue += this.changingSpeed * t,
            this.currValue >= this.targetValue && (this.currValue = this.targetValue),
            this.shownValue = Math.round(this.currValue)) : (this.currValue -= this.changingSpeed * t,
                this.currValue <= this.targetValue && (this.currValue = this.targetValue),
                this.shownValue = Math.round(this.currValue)),
            this.updText())
    }
    ;
var TextScaler = pc.createScript("textScaler");
TextScaler.attributes.add("scaleDefault", {
    type: "number",
    default: 1
}),
    TextScaler.attributes.add("active", {
        type: "boolean",
        default: !0
    }),
    TextScaler.attributes.add("targetScale", {
        type: "number"
    }),
    TextScaler.attributes.add("scaleSpeed", {
        type: "number"
    }),
    TextScaler.prototype.initialize = function () {
        this.state = 0,
            this.scale = this.scaleDefault
    }
    ,
    TextScaler.prototype.start = function (t) {
        this.active = !0,
            t && (this.scale = this.scaleDefault),
            this.state = 1
    }
    ,
    TextScaler.prototype.update = function (t) {
        if (!this.active)
            return 1;
        1 == this.state ? (this.scale += t * this.scaleSpeed,
            this.scale > this.targetScale && (this.state = 2,
                this.scale = this.targetScale)) : 2 == this.state && (this.scale -= t * this.scaleSpeed,
                    this.scale < this.scaleDefault && (this.state = 0,
                        this.scale = this.scaleDefault,
                        this.active = !1)),
            this.entity.setLocalScale(this.scale, this.scale, this.scale)
    }
    ;
var Rotator = pc.createScript("rotator");
Rotator.attributes.add("speed", {
    type: "vec3"
}),
    Rotator.attributes.add("time", {
        type: "number",
        default: 1
    }),
    Rotator.attributes.add("minMax", {
        type: "boolean",
        default: !1
    }),
    Rotator.attributes.add("minAng", {
        type: "vec3"
    }),
    Rotator.attributes.add("maxAng", {
        type: "vec3"
    }),
    Rotator.tmp = new pc.Vec3,
    Rotator.prototype.initialize = function () {
        this.speedCurr = this.speed.clone()
    }
    ,
    Rotator.prototype.update = function (t) {
        var e = this.entity.getLocalEulerAngles();
        Rotator.tmp.copy(this.speedCurr),
            Rotator.tmp.mulScalar(t),
            e.add(Rotator.tmp),
            this.minMax && (e.z <= this.minAng.z ? (e.z = this.minAng.z,
                this.speedCurr.z = Math.abs(this.speed.z)) : e.z >= this.maxAng.z && (e.z = this.maxAng.z,
                    this.speedCurr.z = -Math.abs(this.speed.z))),
            this.entity.element ? this.entity.setLocalEulerAngles(e) : this.entity.rotateLocal(this.speedCurr.x * t, this.speedCurr.y * t, this.speedCurr.z * t)
    }
    ;
var ShopItem = pc.createScript("shopItem");
ShopItem.prototype.initialize = function () {
    this.buy = this.entity.findByName("BuyBut").script.myButton,
        this.greyBut = this.entity.findByName("GreyBut"),
        this.hl = this.entity.findByName("HL"),
        this.starNum = this.entity.findByName("starNum"),
        this.icons = this.entity.findByName("Icons"),
        this.shadows = this.entity.findByName("Shadows"),
        this.circBut = this.entity.findByName("CircBut").script.myButton,
        this.circElem = this.entity.findByName("CircBut").element
}
    ,
    ShopItem.prototype.setShopItem = function (t) {
        var e = ShopController.shopItems[t];
        this.shopItem = e,
            this.buy.shopItem = e,
            this.circBut.shopItem = e,
            EntityTools.removeAllChildsExceptOne(this.icons, e.iconIndex),
            EntityTools.removeAllChildsExceptOne(this.shadows, e.iconIndex),
            this.starNum.element.text = e.price.toString(),
            this.updateState()
    }
    ,
    ShopItem.prototype.updateState = function () {
        var t = this.shopItem;
        t.unlocked ? (this.buy.entity.enabled = !1,
            this.circBut.clickable = !0,
            this.icons.children[0].element.color = Game.instance.whiteColor,
            this.icons.children[0].element.opacity = 1,
            this.shadows.enabled = !0,
            this.circElem.color = ShopController.instance.unlockColor) : (this.circElem.color = ShopController.instance.lockColor,
                this.icons.children[0].element.color = Game.instance.blackColor,
                this.icons.children[0].element.opacity = .6,
                this.shadows.enabled = !1),
            t.itemId == Game.instance.chosenSkinId ? this.hl.enabled = !0 : this.hl.enabled = !1
    }
    ;
var ElementShadow = pc.createScript("elementShadow");
ElementShadow.attributes.add("shadowOffsetX", {
    type: "number",
    default: 0
}),
    ElementShadow.attributes.add("shadowOffsetY", {
        type: "number",
        default: 5
    }),
    ElementShadow.attributes.add("shadowOpacity", {
        type: "number",
        default: 5
    }),
    this.blackColor = (new pc.Color).fromString("#000000"),
    ElementShadow.prototype.initialize = function () {
        this.shadow = this.entity.clone(),
            this.entity.parent.addChild(this.shadow),
            this.shadow.translate(this.shadowOffsetX, this.shadowOffsetY, 0),
            EntityTools.reparent(this.entity, this.shadow)
    }
    ,
    ElementShadow.prototype.update = function (t) { }
    ;
var EffectDrop = pc.createScript("effectDrop");
EffectDrop.grav = new pc.Vec3(0, -19, 0),
    EffectDrop.temp = new pc.Vec3(0, 0, 0),
    EffectDrop.create = function (t, e, i, s, o) {
        var c = ObjectPool.instantiate("EffectDrop", t, Game.instance.app.root)
            , n = c.script.effectDrop;
        n.initialized || n.initialize(),
            n.vel.copy(i);
        var a = EntityTools.enableSingleChild(c, s);
        return c.enabled = !0,
            a.sprite.color = o,
            n.stretch = !1,
            1 != s && 3 != s && (n.stretch = !0),
            n.stretch ? n.size = e : n.size = 1.25 * e,
            c
    }
    ,
    EffectDrop.prototype.initialize = function () {
        this.initialized = !0,
            this.vel = new pc.Vec3(0, 0, 0),
            this.damping = .001,
            this.size = 1,
            this.onEnable(),
            this.on("enable", this.onEnable, this)
    }
    ,
    EffectDrop.prototype.onEnable = function () { }
    ,
    EffectDrop.prototype.update = function (t) {
        if (EffectDrop.temp.copy(EffectDrop.grav),
            EffectDrop.temp.scale(t * Game.instance.slomo),
            this.vel.add(EffectDrop.temp),
            this.vel.scale(1 - this.damping * t * Game.instance.slomo),
            EffectDrop.temp.copy(this.vel),
            EffectDrop.temp.scale(t * Game.instance.slomo),
            this.entity.translate(EffectDrop.temp),
            this.entity.getPosition().add(this.vel),
            this.entity.setEulerAngles(0, 0, 180 * Math.atan2(this.vel.y, this.vel.x) / Math.PI),
            this.size -= .5 * t * Game.instance.slomo,
            this.size <= 0)
            ObjectPool.push(this.entity);
        else {
            var e = 1;
            this.stretch && (e = pc.math.clamp(this.vel.length() / 3, 1, 4)),
                this.entity.setLocalScale(this.size * e, this.size, this.size)
        }
    }
    ;
var Molot = pc.createScript("molot");
Molot.attributes.add("delay", {
    type: "number",
    default: 0
}),
    Molot.attributes.add("time", {
        type: "number",
        default: 2
    }),
    Molot.prototype.initialize = function () {
        this.entity.setLocalEulerAngles(90, 0, 0),
            this.entity.tween(this.entity.getLocalEulerAngles()).rotate(new pc.Vec3(-90, 0, 0), this.time, pc.QuadraticInOut).loop(!0).yoyo(!0).delay(this.delay).start()
    }
    ,
    Molot.prototype.update = function (t) { }
    ;
var CurrLevelText = pc.createScript("currLevelText");
CurrLevelText.prototype.initialize = function () {
    this.onEnable(),
        this.on("enable", this.onEnable, this)
}
    ,
    CurrLevelText.prototype.onEnable = function () {
        Game.levelDebug ? this.entity.element.text = "level " + Game.instance._LEVEL_NUMBER.toString() : this.entity.element.text = "level " + Game.instance.currLevel.toString()
    }
    ,
    CurrLevelText.prototype.update = function (e) { }
    ;
var WaterMaterial = pc.createScript("waterMaterial");
WaterMaterial.attributes.add("uspeed", {
    type: "number",
    default: 0
}),
    WaterMaterial.attributes.add("vspeed", {
        type: "number",
        default: 0
    }),
    WaterMaterial.prototype.initialize = function () {
        var t = this.entity.model ? this.entity.model.meshInstances : this.entity.render.meshInstances;
        this.mat = t[0].material,
            this.offsetu = 0,
            this.offsetv = 0
    }
    ,
    WaterMaterial.prototype.update = function (t) {
        this.offsetu += t * this.uspeed,
            this.offsetv += t * this.vspeed,
            this.mat.diffuseMapOffset.set(this.offsetu, this.offsetv),
            this.mat.update()
    }
    ;
var UiCompleted = pc.createScript("uiCompleted");
UiCompleted.attributes.add("textColors", {
    type: "rgba",
    array: !0
}),
    UiCompleted.attributes.add("rewButton", {
        type: "entity"
    }),
    UiCompleted.attributes.add("serpentinePrefab", {
        type: "entity"
    }),
    UiCompleted.prototype.createSerpentines = function (e, t, n) {
        for (var i = 0; i < e; i++) {
            var a = this.serpentinePrefab.clone();
            a.enabled = !0;
            var s = pc.math.random(-n, n)
                , o = pc.math.random(t.y, t.y + n)
                , r = t.z
                , l = pc.math.random(-.3, .3)
                , c = pc.math.random(-.6, .6);
            l = pc.math.random(-3, 3),
                c = pc.math.random(-3, 3),
                a.script.uiSerpantine.init(),
                a.script.uiSerpantine.velocity.x = l,
                a.script.uiSerpantine.velocity.y = c,
                this.entity.addChild(a),
                a.setLocalPosition(s, o, r),
                this.serps.push(a)
        }
    }
    ,
    UiCompleted.prototype.initialize = function () {
        this.serps = [],
            this.earned = this.entity.findByName("earned"),
            this.bonus = this.entity.findByName("bonus"),
            this.total = this.entity.findByName("total"),
            this.serpentinePrefab.enabled = !1,
            this.levelnum = this.entity.findByName("levelnum"),
            this.counterTimer = 0,
            this.counterId = 0,
            this.playSoundDelay = 0,
            this.onEnableCb(),
            this.on("enable", this.onEnableCb, this)
    }
    ,
    UiCompleted.prototype.onEnableCb = function () {
        for (; this.serps.length > 0;) {
            this.serps.pop().destroy()
        }
        this.counterTimer = 0,
            this.counterId = 0,
            this.playSoundDelay = 1,
            this.earned.script.counterText.setValue(0, Game.instance.moneyEarned, 0),
            Game.instance.bonusOperator ? this.bonus.element.text = Game.instance.bonusOperator.text : this.bonus.element.text = "0",
            this.bonus.element.color = this.textColors[Game.instance.resultType],
            1 == Game.instance.resultType ? this.bonus.element.outlineColor = Game.instance.whiteColor : this.bonus.element.outlineColor = Game.instance.blackColor,
            this.total.script.counterText.setValue(0, Game.instance.totalEarned, 0),
            Game.instance.totalEarned > 0 ? this.rewButton.enabled = !0 : this.rewButton.enabled = !1,
            Game.instance.currLevel - 1 == 0 ? this.levelnum.element.text = "TUTORIAL COMPLETED!" : this.levelnum.element.text = "LEVEL " + (Game.instance.currLevel - 1).toString() + " COMPLETED!"
    }
    ,
    UiCompleted.prototype.update = function (e) {
        if (this.counterId > 3)
            return 1;
        this.counterTimer += e,
            this.playSoundDelay > 0 && (this.playSoundDelay -= e,
                this.playSoundDelay <= 0 && (0 == Game.instance.resultType ? (GameAudio.play("gamewin"),
                    this.createSerpentines(15, new pc.Vec3(0, 25, 0), 150)) : 1 == Game.instance.resultType && GameAudio.play("gamefail"))),
            this.counterTimer > .75 && (this.counterId++,
                this.counterTimer = 0,
                1 == this.counterId ? (Game.instance.moneyEarned > 0 && GameAudio.playEx("counter", 1),
                    this.earned.script.counterText.changingSpeed = 3 * Game.instance.moneyEarned) : 2 == this.counterId || 3 == this.counterId && (Game.instance.totalEarned > 0 && GameAudio.playEx("counter", 1),
                        this.total.script.counterText.changingSpeed = 3 * Game.instance.totalEarned))
    }
    ;
var UiFailed = pc.createScript("uiFailed");
UiFailed.attributes.add("title", {
    type: "entity"
}),
    UiFailed.attributes.add("rebut", {
        type: "entity"
    }),
    UiFailed.attributes.add("contbut", {
        type: "entity"
    }),
    UiFailed.attributes.add("gameover", {
        type: "entity"
    }),
    UiFailed.attributes.add("revive", {
        type: "entity"
    }),
    UiFailed.instance = null,
    UiFailed.prototype.initialize = function () {
        UiFailed.instance = this,
            this.earned = this.entity.findByName("earned"),
            this.hint = this.entity.findByName("hint"),
            this.counterTimer = 0,
            this.counterId = 0,
            this.onEnableCb(),
            this.on("enable", this.onEnableCb, this)
    }
    ,
    UiFailed.prototype.onEnableCb = function (e) {
        this.counterTimer = 0,
            this.counterId = 0,
            Game.wasBonusLevel ? (Game.instance.gotReviveChance = !1,
                e = !0,
                this.title.element.text = "NO BONUS",
                this.rebut.enabled = !1,
                this.contbut.enabled = !0) : (this.title.element.text = "GAME OVER",
                    this.rebut.enabled = !0,
                    this.contbut.enabled = !1),
            !Game.instance.gotReviveChance || e || Game.bonusLevel ? (this.revive.enabled = !1,
                this.gameover.enabled = !0,
                this.earned.script.counterText.setValue(0, Game.instance.moneyEarned, 500),
                "ground" == Game.instance.gameOverReason ? this.hint.element.text = "DON'T TOUCH THE GROUND" : "spikes" == Game.instance.gameOverReason ? this.hint.element.text = "BEWARE OF SPIKES" : this.hint.element.text = " ") : (this.revive.enabled = !0,
                    this.gameover.enabled = !1)
    }
    ,
    UiFailed.prototype.update = function (e) { }
    ;
var ShopButton = pc.createScript("shopButton");
ShopButton.attributes.add("newS", {
    type: "entity"
}),
    ShopButton.attributes.add("newS2", {
        type: "entity"
    }),
    ShopButton.prototype.initialize = function () {
        this.time = 1.5,
            this.newS.enabled = !1,
            this.newS2.enabled = !1,
            this.onEnable(),
            this.on("enable", this.onEnable, this)
    }
    ,
    ShopButton.prototype.onEnable = function () {
        this.time = 3;
        var e = Game.instance.getSkinPrice();
        e < Game.instance.money && e > 0 ? this.newS.enabled = !0 : this.newS.enabled = !1,
            this.newS2 && (this.newS2.enabled = this.newS.enabled)
    }
    ,
    ShopButton.prototype.update = function (e) {
        if (this.time += e,
            this.time > 2) {
            this.time = 0;
            var t = Game.instance.getSkinPrice();
            t < Game.instance.money && t > 0 ? this.newS.enabled = !0 : this.newS.enabled = !1,
                this.newS2 && (this.newS2.enabled = this.newS.enabled)
        }
    }
    ;
var UnlockButton = pc.createScript("unlockButton");
UnlockButton.attributes.add("price", {
    type: "entity"
}),
    UnlockButton.attributes.add("grey", {
        type: "entity"
    }),
    UnlockButton.prototype.initialize = function () {
        this.count = 0
    }
    ,
    UnlockButton.prototype.update = function (t) {
        var e = Game.instance.getSkinPrice();
        if (e > 0) {
            if (this.count = e,
                this.count >= 1e3) {
                var n = this.count % 1e3;
                n = Math.floor(n / 100),
                    this.price.element.text = n > 0 ? "$ " + Math.floor(this.count / 1e3).toString() + "." + n.toString() + "k" : "$ " + Math.floor(this.count / 1e3).toString() + "k"
            } else
                this.price.element.text = "$ " + Math.round(this.count).toString();
            this.count > Game.instance.money ? (this.entity.script.myButton.clickable = !1,
                this.grey.enabled = !0) : (this.entity.script.myButton.clickable = !0,
                    this.grey.enabled = !1),
                ShopController.instance.unlocking && (this.entity.script.myButton.clickable = !1),
                this.entity.enabled = !0
        } else
            this.entity.enabled = !1
    }
    ;
var UiMainMenu = pc.createScript("uiMainMenu");
UiMainMenu.prototype.initialize = function () {
    this.caption = this.entity.findByName("Caption"),
        this.levelText = this.entity.findByName("CurrLevel"),
        this.onEnable(),
        this.on("enable", this.onEnable, this)
}
    ,
    UiMainMenu.hideCap = !1,
    UiMainMenu.prototype.onEnable = function () {
        1 == Game.instance.currLevel && (UiMainMenu.hideCap = !1),
            UiMainMenu.hideCap ? (this.caption.enabled = !1,
                Game.instance.setupPlayingCamera()) : this.caption.enabled = !0,
            this.levelText.enabled = this.caption.enabled
    }
    ,
    UiMainMenu.prototype.update = function (e) { }
    ;
var GameHint = pc.createScript("gameHint");
GameHint.attributes.add("minDx", {
    type: "number",
    defaut: 10
}),
    GameHint.attributes.add("deltaMoveY", {
        type: "number",
        defaut: 25
    }),
    GameHint.attributes.add("actionDelay", {
        type: "number",
        defaut: 0
    }),
    GameHint.deltaMoveY = 25,
    GameHint.prototype.initialize = function () {
        this.startPos = this.entity.getLocalPosition().clone(),
            this.startPosG = this.entity.getPosition().clone(),
            this.entity.setLocalPosition(this.startPos.x, this.startPos.y - this.deltaMoveY, this.startPos.z),
            this.shown = !1
    }
    ,
    GameHint.prototype.show = function () {
        GameAudio.play("hintshow"),
            this.shown = !0,
            this.entity.tween(this.entity.getLocalPosition()).to(this.startPos, 1, pc.BackOut).loop(!1).yoyo(!1).start()
    }
    ,
    GameHint.prototype.update = function (t) {
        if (this.actionDelay > 0)
            return this.actionDelay -= t,
                1;
        if (!this.shown) {
            var i = Knife.instance.entity.getPosition();
            Math.abs(i.x - this.startPosG.x) < this.minDx && this.show()
        }
    }
    ;
splash = null,
    logo = null,
    logo2 = null,
    bg = null,
    logoSize = 338,
    logoW = 338,
    logoH = 149,
    logo2Size = 128,
    pc.script.createLoadingScreen((function (A) {
        var g, C, updateLogo = function () {
            var A = window.innerWidth
                , g = window.innerHeight;
            logo && (logo.style.left = .5 * (A - logoSize) + "px",
                logo.style.top = .5 * (g - logoSize / logoW * logoH - 200) + "px"),
                logo2 && (logo2.style.left = .5 * (A - logo2Size) + "px",
                    logo2.style.top = .75 * (g - logo2Size) + "px"),
                bg && (bg.style.left = "0px",
                    bg.style.top = "0px",
                    bg.style.width = A + "px",
                    bg.style.height = g + "px");
            var C = document.getElementById("progress-bar-container");
            C && (C.style.left = .5 * (A - 170) + "px",
                C.style.top = .5 * g + 50 + "px")
        };
        g = ["body {", "background: radial-gradient(#e66465, #9198e5);", "}", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #18161C;", "}", "#application-splash {", "    position: absolute;", "    top: calc(50% + 128px);", "    width: 264px;", "    left: calc(50% - 132px);", "}", "#application-splash img {", "    width: 100%;", "}", "#progress-bar-container {", "    position: absolute;", "border-radius: 25px;", "    height: 16px;", "    width: 170px;", "    background-color: #332d7c;", "}", "#progress-bar {", "    width: 0%;", "border-radius: 25px;", "    height: 100%;", "background: linear-gradient(#fff188, #ffdd6c);", "}", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n"),
            (C = document.createElement("style")).type = "text/css",
            C.styleSheet ? C.styleSheet.cssText = g : C.appendChild(document.createTextNode(g)),
            document.head.appendChild(C),
            function () {
                var A = document.createElement("div");
                A.id = "application-splash-wrapper",
                    document.body.appendChild(A),
                    splash = document.createElement("div"),
                    splash.id = "application-splash",
                    A.appendChild(splash),
                    splash.style.display = "none",
                    logo = document.createElement("img"),
                    logo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAACVCAYAAAAKT3JXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAA+HGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjItMDQtMDNUMTU6MzY6MjYrMDU6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIyLTA0LTA2VDE5OjM3OjIyKzA1OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMi0wNC0wNlQxOTozNzoyMiswNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YTNjNzJlYzctMDNmZi0wNzQ3LWI2ZmUtNTIzZWNmYmZmYjNlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGM2NzQ4OGUtYjViNy0xMWVjLWIwOTctZDdiMmU4YWIzNDY0PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6OWUyMjZhODMtMjY0YS03ZjQ0LWFkYjUtYzFlODU0MzY5NzFhPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjllMjI2YTgzLTI2NGEtN2Y0NC1hZGI1LWMxZTg1NDM2OTcxYTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMi0wNC0wM1QxNTozNjoyNiswNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2ZDYyYzM3NS00NjE2LTBlNGEtYTZlOC0wNTI2NzY4ODBhZjM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjItMDQtMDNUMTU6MzY6MjYrMDU6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YTNjNzJlYzctMDNmZi0wNzQ3LWI2ZmUtNTIzZWNmYmZmYjNlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIyLTA0LTA2VDE5OjM3OjIyKzA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgICAgPHJkZjpCYWc+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJmODc1NWYxLTkwMzAtMTFlYy05MGFjLWFjMWZkODkwYmIzOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4NzczZjVmZC0zMDdhLTJkNDItYjcwNy1mOTk2YWEyYjE2MjE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Zjk1ZjZjOWQtOTAyZi0xMWVjLTkwYWMtYWMxZmQ4OTBiYjM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3MDZhNDE1OC1mN2EzLWY5NDctYjY3Ny1lZjQxNjczYWIyN2U8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhiNmEzY2QxLTExYjgtOTI0OC1hYzk0LWRmYjYzODBjZGI5YzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ZjY0ZmY4NWItNGE3Ny00MzQ4LTk1ZDctMDUzMjYxODBmNDMzPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjk2MDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+OTYwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMzg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTQ5PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4WxAOoAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAGIQSURBVHja7J13nCRHefe/Vd09cfNe3EsKpzvlHBBKKCGEJEAiCIlsbDAm2tj4tf2+xhGwCcZgDMYYEwwIgREIkEBCCIRyzqe7091Jl9PmndSh6v2jqndm9zbOzO7tnua5T3929namp7u66ldP/D1Ca818lJm6ajEP7j0a4+almB/X3pD5Keuff56Xve719A3lyaRTs/vlAlSh0NG56oQPp449+ac65T088KMf4+oS2g2IAnC0RnouKgpBg9AOu7Y9PWuX6DamSEMa0pDJZO3q1bz65FP47ne+SWrZ0WitZglEBVH3flrOv+j1S39x41/nbnn6r4a++Pe3oKLPIPRdc0UNbABpQxrSkCnJ2WecwXe/8y1Ku3fgerMEHVoTlPpIvfrVb3IEhBuec6IXNl3lFLuvEunMwwL5E7T6DpotB3NsRMO0b5j2DWnIVKS/v48Tjj+TwcEi2WxmdtZ5Xw8sPeyMRff+7kFRTNDzp++ndO8dCCnAcRGA0oSa6EtSuJ9QKtzbMO0b0pCGzFlpbW3joitfww03/JBMKj0r2mgkPZpeeckl3qIkuZ88gdq2GaEVSG9YoZISVyE/LBCv0/Aa4MnZVioaQNqQhjRkyvLaS8/lm1/5LKopQRSFM2x6RaiwROLyy96gA4gee4TCi5shDEhnMkSRQmuN1iAQgF7lOM5DOtKvRenbADVb49IA0oY0pCFTlpPOOpMjLr2a/d29ZDMzqJUKgc4PITs7X5U6/eWnhs/n2f7b28jt2giAl+tkcdcKVBQSuyc1CiFkQkjxWaX1N4BPN4C0IQ1pyJyTI5Z1cemJx/IfX/s2TSuWzaxlv3sXrW//w9/3lno88+VvcUJ7gi/cex/J5mY+8OE/53d33sXyIw4niqIYfdFKAxwrHa5sAGlDGtKQOSu92zZC/1YGcvtnLOgbhXmSbcvXrrj6iiv3b/ZZ0r2Tb3zy/7J27RoAvv7VL3DOK15Nd3cPnZ0dFWAam/l4szkmDSBtSEMaMi356J/+GXc+vZl8ySeVTM7Id4R7d9P0qtdc7axoSe752m1cmFSsPerI4b+vPvIITjvlJG796S2IBZ0xgiKVetAX3BAIHmgAaUMa0pA5K6vXrCGZaUVRIJ2agSonpVDty9z2d/ze2xWQfWErD918E0+9/WpOOPlEAB57/EkefvhRsh0dKK1AaAiiD2jJl7SUKDG7aZ0NIG1IQxoyLelobeHPPvI+/uTfv0m6s73u59dBgNuUOt89fu3Rxec1bT3b2LBpI1ddfR1f/vfPI12HD3z4Y+zv7mb5ypUEUYiI+EeC8EukPASzn1PdANKGNKQh05alna1EO7YwlHVQFf7JmkVKgp3bWHT9H7w6sSQrBn/0GMX1T7Gsq4tde/by6iuuATTJTIZlK1cRRSFC6z0I/SU8FxBoZq5gpwGkDWlIQ+omb3zVJbzyZWdx+x2/Y/GiBfU7caFAqeQvzF58/rVqCPzHHyDcsQ2tNQuXLsUPAgASnkcUBvZDYp+G/bguUoHQCtkA0oY0pCHzQZr8fvT+DRQLPeh66IBaE+V76HjNuy7LvuzY5YX7dxI+9xQqP4SQDkopPNdAllIjcu33CkSABiXA1RJ3llXSBpA2pCENqUoWLWgFYNDvQ4g6eCVVRAh0veVN7xGA/9BjhJueRUQReLYkdAxuEI2+62DzTDSAtCENaUhV8nef/DQ/vOdpivkCqVTtaVCqkCex6vBzs+decHawA8Lnn0L1doOUE0aPtBBb9UFG0gaQNqQhDalKsqkkR3Z18czmrXhejWlQUhLs3k32wsuvdbvSbu7W9QTrH0cXCwjPYwIkDUSknzrYY9EA0oY0pCFVSSab4YN//D7e+v4/o2lxJ5GqniNEhwFi9Zpk+vwzz1ERhOueJNr+AobufhwQFRKhwr1EQxtMnP7gqaUNIG1IQxpStSxpzYI/QM/WTcOBoGok7N5H+rjTL0mdefop/vocwfonUYP9COmMD6RaoxAPCCEHGkDakIY0ZN7Kxee8nGte80Z+dPMvWbSyi2qJ4lUpQdOVV/4eTRA8tY5g49MQ+OCN73sVQiEcfZt2Mwd9HBpA2pCGNKQmOXJVF6Q9Ah1UF70PQ3RH81HZy6+6KOqBYMNTqD07DfnIOOeTUhMFMh9F8k4voTjYjT4aQNqQhjSkJvnYe9/JTb+7n76BIVLJxPQ+LARq727Sr33j292jF7UV79pJ8MxD6MEBcNwJ/KOgUHcWCmwolQ7+GDSAtCENaUhNEhSLdD/1NNqV+N702Ot0MQ+J5pbOV136ejQEzz1JtGUjOgxttH6Mz2iNiBwiJ7zFbS7GtHkNIG3IS0rWAkdhogOenYMu4Ni/p4y+wd3Ac43hmvuydOli3vDG1/DNm24h09Q8rc+qwMc7+uhTvBOPPSbcognXP0XUsw8hpckfHdOsd4iiqBv0T13hzYkxaABpQ2ZLFmEYy99SAZoTSQT8FfBPjaGbMXEsBniABPJAVY2YLnvXu/hPbyFOe8v0PjiYI3340jc5LhTXbyJY/yQ6n0M440GTRgiBkvoXQkXbxKxX1TeAtCEHT7LAr4ATprnIP2U1139+CYyRWwFqHpCoOJL28KzGXvk3r+JnCmi2P5P2Z9oe3qhzJSu+K37/kB3rG6dv3wfQ14d2pvm5fL7VO/n1V0Z5iDY/R7RzK2g9rjYKAqUiUOJ2V7hz6uE1pCFTM8OAoWB6n9FA1uGvXTktEK2UfwBuBx47BIc0BXwCuNACmWvBTla4O9wKF4hjX8+kU/BbwAbg8el8SAz0w9NP4C5ZNMUPCFTPflKnnf3m1NFdK/2NAwTPPoLq2z9x7qgQaK236EjdVJf6/gaQNmS2RWvIh+PP8XGAtCsteUcNX+sB500GpHpYX5k7EijIRZCUB/JjaiAp+XNX8Mdz6hlDUmnOFWLqQCoBFQYw0EfYNLVSUR0G4EcydekFb9UpiJ57FrVpHTKM0K47PpeU1mitv6cdMaDn0Lg1gLQ2EcBSoAtYAnQCC4E2q1nEs8oHShi/XzfQD+wCXgB2WJNqzosjjMW1pwhpZ2rkuUpzZnuCxbV8r69YOBmIunJqjtdZHS8Ju4ZgMDDXVymRhiOauKYzMccuWkOo6JjOjpSUoNNZWHEkLOqc2tfkh3Ca28/3jj31XLkHCk8/xgv33g2DPSxZdTie6xAE0Vibdp80rZbnnF+mIdOTLPAq4ALgdEwUuqNapQV4EbgP+BHGjzinQbXNg81D0OeDJyc367UmtSJT07om0iQnW9dVaqJJ4HDgSGABxr+4AGixa6MADNjNrxvYZze/F6aqqfkK7t5vxm3EPSkyS1O0MMeA1LLLe9OlF5VSIDwX15sapCgk6fNf/pbkMsm+Wzey7Y5bufjsMygWctzzu3vo7FpOJpMiDKNR16e/poXY2ADS+SsnAe8BrgJW1OmcHrDaHm+z2umngG8Cg9MBDWHW7R8CL8O4MyN7VFq9atQpHEyk9nfAD6ZywQkJi5KwNQ9ST74olWaoVs5fKUjKCb7DsTc/xWrrpcAlwCuBU4HDgMw0cGYAWIfxId4J3GFBdkw5oRWeGTBaadoZ4YYINRTnnIlliommjAtJCd35Iv/06c+RXfcsxW3ZKfmI9FBOtP7RH51b9GHnww/y8Xe9kf/7nrcB8LG/+Dif/tS/kDhsFcL4RMswiv6BFmLOgUMDSCeXK4A/w/jpZjrXYhnwReDjwJ9aQB1tKqMAVxzw/5+R1fvbPgh81n7npNKVhi058EOQYlIgzavax6VFT/AdgkndDA5wHfB7wGlW46zWldNqN6uX2Y2rG7gf+G/gf8fYBDi2GX6zx+yacT+hUOGHisIcnfPTSs4cGsqxsbcfli4lmCwhX0ii/bvJXHTZG9JnHHP0+ru28oqlGf7v7189/JZPfeJv+O1v7uLBhx5l2WGHoW1PKK3FdwT6QYGecwPWANKJJ9OXgXcfhO9eAHzDug4+OHph7ilAPiqDWKTp6kpxfaaGp6k0F09RO0Rpo05FeuKdxQJpURsXRi2Z05mJzGcpJgTS84EvAcfP0LPqtJvtFRZQ/xy4q/INR7fAQz0wEELGMRthYMbQn4sTX0wTF9IJj8WLV9A7lCOVmMRXEUWoTo/mV1xxDUkobHyO5N4XR80xQTKZgApaPg270fqv51Y4sQGkk8l5wNeANQf5Oj5g3QhvoCJROgI2DEKzawAkUByxOFlbQEdBs9JkgdyEu4swIBooC6STa6QFpQmrBVJh1MmWicz6cUC0zWr2H2b2Vt/LgN8CX7Df3QeQcuCaFfCjbVBSxrcszIY05zRSYTanabU8uukXv2b3U0+STqdQzsQhPzXQh3vEMSemXnHuG/3dsLh/H7/41jf5ryUtvPu9vwfAP/3zv3D3A4+wcPlyUw4qhI60fruAzWKOAkYDSMcG0dsxgYi5IK+1C/OP4v/IOpBxjWYjY4KcerTMmUJmky4DJGpqPtKSMBpputrr0iBGf1WsDXtyTCBdjgncrT1Iz+xDwGswftiNAJ0JuHgJdJfMZhQoSDhzUyNlmuVCP/3uN+l/5n4Sy9cQ6gkcOVoT9fez4H0ffaezGKf00D7S2zaRKeZ47/s+xA9/9gsKhRy/vePXtC9dbrVbgUL/CVFw+1zVRhtAeqBcCPxsDoFoLO8DnrKuBtoT0OKZRZlyYgw0uFrDd2hhmjBObNpbgOzzjWbqTKKRhoriYEjYUqVhH2ro9Xl6dLpVpM1mMoYcCdwyB6yJw+yG/CosZ8CyNATWJRMqsBvMXDTtnelA1rv+6IM8vOAYZCqJJyeegiqXa06dd87V2ofwhRcobHyKTDKJXriIX/zsZ+C4LFhxOOlkArQgN9TzOSHdz7teEq3VHPSONoB0tKwQJnKdmaPX9y/Aw8BDAC0uDPjDpm/Nvb+sSTel0ygNPb4Bs8lWXD5i8zP9rF+W5uxqrstX8EA3v4woR+f3l+DCxWZDGbWwVgG/BlbOkWe2ymrGFwCbkhKyHuwqDGvTc1IjlVNUJLSA0Pd5/asuYvvyw/nIrQ+ztmshYRSNsysGJBcsvjKxquuwcAcEzzxMtGMrKgxIp9M0HbUGrSEKQxwRkks4f9/TM/jXnV4LIiHROmpopPUWXf8T/oUQdM7hW04CfwxcD7A8DXuLptpIGAAUtY6nmuJJBCYNKpgCkGYEPN3Pvx7RxNmrm6Z/Tb/aw0+e6ON2z7owChEsz8CS1LC1aK7JXMen5xCIxrIMuAE4GwgdYTYgO95zUiMNNSrU48+FeK5k4kgf8PY1K/nWDT/gqUd+RUfzgQxQQgiKe3eSuewN5zZlTiF4YB3BE4Z3VAhprJfAhAEcVzDYy6f7ZfjXwhW4rkeuv5dcfy/SmZuQNW+BNFL1O5eGi13B++bBbb8MaAd6Y1+lPSS1O5CmBMaBMprgSR1w5x5YmCgnp445wQQUFd//xS4uPLOT9x7XYvIplTXPlT7Q3yoE7C3Bg93c/lQ/73KEeX8pMontb15pgLzyMwo+IOGNc/S5nY4Jen12SQr2FaEvgEhXx7Q0k1JSsDXHFiaYDAMhLHBDsk1m2vm+T3siwfff/3a+sm4/Kcc5YINNpVLs3bWz6YbfPXjuc3//H/DMg2Q3rcPxPDt/hHUbhQNhSf3ZQLf4apgqgVdiz77nWX3KK1h1/IkUc4MNIK2n+HUCUq3BFfy5nAcjkY9o7vZpSkp6S5G5dls9pLSuufuX0FP4fIxdJ7fC472wq1RONJ/oM0HEH968g+/dtZePtnis1TAUKIYU+KGiGClK2liLrq8ZcgU3RpqfXrIYDsuaGn+lTall2jGvddnVcKSEvxdiTj++zwB3CeuasVkPpXrM3/i+bcXUcDAwsr/HPys3r8geCpNlpIwmyvoBnunx+UqrZ/5eYe4zFEFRwXltIV1OEZPkET+EiNVLFnNt5xKejSA16llICUeccvhFS4454cQnbv9p72P37fc3PPtsi1KD6ebmhZRKRXy/sCeRTF3S0rHoaS0khAFnXv/7vPLMC+k6+2SOOGEVJTUT5uhLGEh7g/qAqBScuCjFJfPhnh/o5oGn+9mWkCbyu6bFTPDI6JI1AanSiGKIkFM4QyGEtgSc1g4v5icH0hilgd8Gmt/6Ck9ChDDBLX3ghsE5nXBEk62jFyNBuTDKVebAh1xJ2zx4hB8B3rIyCzsLJim/1hNuzpG7v5s9SQeBJgoVgRJEShFFECpNSWnySpMPFXkNeQWlSONrja/A1xBIQUkrdjqCXyjY1+uXJ5OwWmizozilTXNsc4gfjIxsKgRSa85IROzc77DHF2SdkeZOFHHd8s4WjvnDt7S88R1vGXj0l7fvv+2//rv1qd/+JnvECSd9onPVgr9Lti4P1570ctoTWY6+8BJyTZpXLM/wTDds3wqJ6QQtlzaAdFIp1sHvHGrIOlzm1bFXQaQMyBfszulJaPYYMammdY0Knh6AR3v5zqDPR5KuAbLOrCnPCw11oxQ1Vl0JyhruVN7bUzJA+rLqvMrBRO5XDNlLOyb3dC+G5GV48yuGFe4ETVdLgreL+TFtrwP+w4G7igbBcrWesNnj1i05rvcEbkoiEfhCEEobgBSi7PdRVuWXFQgZb2S9vskAaXZHWnsCE1g8ohmuXVgg6Wl8nSDUB0akIsBRmmOckB0Fj9AdsVGfhOK15KG7Dyedpf3cay5tPvf1l7ovPLdraMXCFv/IzuwxT+Z4usVBH+7CxjwM9cCWnWa9O3MYreZvsKkO6r1S4LicVo/r6fHh4R6GektsyUesLym2A44rWZSQHLU0xUmntuN0TjGxyppZPNbLwzuL/KXW3N6RMIsh68LSpNUYtFUHat9UdE+IdqdwplCZ9CtPTp5LOmzaCS4HXg80GSVyBGlxatTPBCZ7IokpRPgwhifTaKTWFNUaEpJLXDEvtNEYl67ScFeoIFK119q3ekTvX02QlBWb00RRIjHSRxP/+kgfPNELA0E5N1cIwxGwMqO5djk4gSDngztOun48Hw/LRqzIe+wuGl+2/eNrgLS0aWyFHAxtxE2mYclhS5sG+/n7uzfx90JwV1cH39zm86PePH1hCDJlUZoGkNZdWuvQqiVQ4IraCUi25VFf28zf50L+q8VlW9o1/qUWz0ya/gBeyHHSk338+RtXcN3KCXgdBkPYMgRP9fG/L+b5ckJwR5wvqbWJlK9IQ5NnTGAhQMjaGeQkqIRATRaFjynrMtP7xiuBn9boX7wD2KEx5NKxD3BJiutkndXRuATWmW5C5dTkZQpkKUIFinwdkHlRa4IjpWGuaqLMfJ/gQNZ9l5FM+VngHuC2cxfA2ma4ZacBT08aLfCwDLxhhSbpCPKlyVkNAgUJV7CyWfNsSbDAA61JOAGvFhVVaEKaeRT60LPDgHCvD6d3cv45bZzfF/CpdZIf3NfDzcL4lgu61ihAA0gPlBdrnILWIS8Py9aeNzoQ8pU1zfxNm2eAzbNZ6xsHod8fVgSe6PG5/pZdyHcczrWj/YrFCJ7phwd7+H4u4JOewxPNnvEtxvXtkYaUhAVJY37JkRZaTeII9OLU5JZ9TCHVUzJa+GRfHGlIO1y/KFUTsC1UcLIr2AHl0thQ0ZVxOKUe82kwgCf7oT+gJx+yO1QErqQp47L88CzJo1vqtoaPVJqFQxF7Cqr2YFNCcgHwpAVIh+pcPG8D/mdh0mRExGlwcQluQpSDWlOyBBUsSGjaPEGgwYXjBbxsLBgWsjxPhIBVdjW2eSzMuPwRmj/aX2JdKPhvqfkvHdHTANI6yr37a/RlGoBylmdqItNAA8e2sPS4MarBj2kxgZE4d/C+bljXzwd+uI1j37ySE+Jd/6l+eLCbH+wv8U9a84hnGyiOzkcKNXSlTHCn0o9VryCm0pMn9sdVOT3+1PJOA+MGWLSolusCfEWrst9dsnX+CE5wZG0cA9ai4OYdfL3P50sJhz2eZJ8wQZhMMaLrkW5ed3wbH3vdchbWCqZ9Abs3DjGQlCDrk0cqqbGIRGl+H/geECWdA2e4UtPrilCKBMtSiuUCNuckaY+36wmIZaQwwazFKVhlrbVAwxN9Zq7nfY6RDv/ctJRfC0mPbkTt6ye18tlpQGhUqKgpkcrOr6sxxMyfAZ7BBkeWj5reRzXDIz3s/9aLXL6nyHfaExw+EPCTPUW+0uzx7PKMua8jmozZ/kSfKSl0HfAj6EiYyabHvp2ax2OKysYIgtOplJQKajNh7Xck4s1kexGGQliZ4ZRkjROhGMGPtvGubp9vLE0fUK2VdwTPK4fPPNHHzU0e91+6mPZq3QXPD8Hd+/hWIaLQZkiS5kRlk4JloaZVQE/lJBCY7BAxrccUO6Eg4YDr0Kbg6onOoQ0rP8e2lgNhLwyZCra2BEjjE/9CFPKIlPWJjzSAtELbqxU4AkUUqtojp5TB9GpgJ6Z52HrgecrM6vuBbad2sK8jyY5en1f4ypipcW5k1jGvWz2z8NY226i89dXlAuNHGj2R6lGCPFUgjd8b5yBOqpEaf2PNJqyAdIyZ/b6p9V+a5PBaz7u9wM8VfKPVM4GWtGPSrXSlT1hAR4INT/TyoaOa+PZh2amff1cRXsjBxkHu21PkU8DNrR6EkeEhmAtrSWtSkR5JcauBpNDDrpzRz1kIIbTWCSFEUkrpCiEcACml0hCgCBamKewIuLzgszIzTmsaKSAXmsyWYyvW9CbbJ8LRBqWk5Ib8nmn6SJsaQDq5b6gODXoiYDBkT50vrcserxhDmesRsPPwLPsOz/I8hhmox/58Gku7Fk+wI0ZNhMEQ+vvMiSqDIKI+dNNTxtJYg5gKkIbGDC/WCKIIQSJm01iUMoQlzV7tJb1NDvdfu9KA6FN9sK1g/NKeKAe5ld3MSor/eaafdxyWHT/vONKwpwS7CoRbc9yzrcBdfsQtUnB/yjHnSzrG0vA1hTkSP/GE6RYyPBEcRlIUCiFQSqG1Fq7rZhOJRAZISSmTgKu1lgCO42gpnRCh+xaniJx+3uFOxBerjfV1RtswAQ89JaO9t7igFQiXu1Od3DeHS+3nL5C+UAc9MheCgM2z6I1YYA/gACLlvcAjwH9hGKgO0OKaXdPmY09xJA+orM9anJZW608RSH0FQR2Y4KWdq0KYjAEBMunUBqSRBs9hO0CXB6ub4eEe+O0+8x2eKO+AaJO3u36QL5xV4pIFo9LY9hZN14DNQzy1p8jXi4pbXcH6hGO1XGnGQgiTa1w0vt6C0jOSGTDdB5+wMaXRLpnhSRFFEel02lNKtTqO0wKktdZpq5XGraLRWivbJrkvF4irlOKyFhdKNlgqRm2QhcjU7B9foY0+3mfGp9UbrtT6UTBQhQOruQGkk8pAHdz0xQh2FXiyEE2tOmeGZRFwuT02YQhKDkgZWpYxvqNRmoyo35qaXDvUlAM+k6UelQyQ1q6R2kacwmq5gcJVunqO02HLRuLHY1lSpsBACLhrLwjHAoq9R9eBQsRPf72Hey9YxMulgB152JZny/YCtw2FfFvAfUmJikssLatWTC6DY/289ijOBSAVZs9IVFYyma6nwloDgjAMPSFEp+u6TUqpZiFERgiR1lonAS827Sm70bNDERe5EhKuMf/8yCQFiwqrKx+ZEuCORFm52ZKDbJyjLPCTcJsuzm08mrdA6tZh8mVd6Cnx6605ete2VBdEmCE5ErgZU5f9QeCB+A8ZBxanYWe+3BJZ1mEtCoEWU4jaiwrf52StRoZ9pLU2eTPonRwObpWjXDXdtiMgH6J8Vd4Q+jH+91JkMkMqfaYaY35uL/DGG7byeldSDCIeCjXPJSTFtGPNYT12H3tpq4q0ZapWinyka+vBUicgTTiCVDwGSkMYhqb8WCkcx3Fd1+1QSnVorbNCiHZMpkBaCJGmnKMa32pPoMUJ+0v6dSYGUPGwlNlEBGUWrMp4x7oBkxGyKGnHUPDVUPMMogGkMyL1IC2xWsjWdQPcs7aFK+fgbZ6B6QN0HYaKDYDFSUPqHHN0iplvyneATIUhv+J9NbMcaUhGVt1xzMQV9Whl7wqiEWWTGM3p7E6jpt3TbbXKir8nJTuVaVJI1i2b7ONFk+N8zJg4JP4/W+d+0EUIEvmQVHxtKalIEBOaKKSUTUCTEKLZ/oy01mnrpkqOAlKA/t0FzkOLro6kybDwBGhZzoeOq6Y6EnBkhQm+aci4UGLfNHBDoOc+Hr2k+Ug1xvG/Kce/bRzkyqOa5+ztfg8TwPpcvHjbE8YvZ9NB6rFfxyz7U/YvRlOozQ8VqBqbvFkegIzS5cRwIZCI2uZvpKElYThfxrJ4zuyEjUOwr4RRh0dps1OtqLJWA2pUNoA2hCIHXaSAoZCUb5+nlx8gEeTR0mHBggVpx3FatNbNWuukEKIVOEsIsRljaSyx3si4eYIfKhaFiovXtsCOgikTFeV7JtRm8ylEcP6isi/6xTzsLtogk7mun6K5Zz7gkWSeiq7TIY1598uHessa3xyVzwLvjH9ZnjZmpjALWtRxSCfTXozpZyFX6ykd9ciXTKoKUHLqpJEqjY4qaOXio6QMWJ7Sbvx21ZShxuBRjCAXmXNWHkVFUc2BKnKloTVBZlHa8Ix6UQklJDZolLYmfEZK2SKEKGmtT9Fafx7ToTWuqGoDFgMigvNWZTlF23FMWSesazcgTxrf6KIkHFOhvDzeawbDjf2jmv+YN67G+Qqk9dwBml3YmuOfHujmzWd1zunb/j+Y3umDsUblGtLjmocjZgqaCl541jdbDA2Y60m0PlUfIE1XaoOORIg6Ael49xxqOK4FHkobzbTJHTlW0oJDqaKmMi7njVX8VhdObDPcCKEaCV4awkARUIf7qEUc2+J7IID2hMOqRQtQZlRcIUTKBpRSQogmrXWTEOIGTGfXt2LS9zZh3MuDwIlJyfmRNul6GccWOWhwJEjLKRsqU6Di2Zm7PW+S8FtcMzZC8KyWI9taN4B0BiRVx6kngITm8d/t472O4D9O75izt70Ww4T0D0lp+zbNMse6r6DJgfMWwm27jaaVngBMrb+gVI9HHj8rQ2aKFKIuADTuPhAoc29ndZrc1crMjnjTkRZwK+dSbC4PhmajO6ypzFZV+b58RGCLFVIHc1KVFCxKsntR0hCJabu1KKVcKWVCSpnQWntaa08I0WJN+ZuBVuBooANT7tprNVNvwBLLJKUJ3MWuEFdC3jfuqWNby9fwRL+J6CcdCHxwm/mh18ygjuYHHjWa39mV5AlISr76q920u4JPndw+Z6/1/QK+IgT7O5LQ7YMr61DZpCcvvVO6nC3RnoCLF8Ov9xozLTV2W+Q4uFCsw307ypp9RWXMZVGftK9oog22EJmo8nGt1Z18d9GQ16TkgfXqxYhAp+qyydQEonfu5WeDAU9KAee1+zR5EaUIPM9zpZSu1Uxj5iiptW4VQmQxzRgXAp32b4viZ56PLCgqjZTCkO/YjWcgNDm7bTZdoTeAzbE2CkiX/Trg60E/tQVDWmdvHBtAWgGmSQek4J9u30N+Z5F/PmcBqVZvbl2ngCUarhM2aixlffraT+YgVVYTTFQ4ERYkDZj+YpfxI46lmdqofc1A6giaUxI2DMJv90DSQSxL10UjVRONyXSCSmPJkpQB4605M79GuQ7CWt0eCnik26SZpST4Gq00gdIEyjDkh0pTiiCINL4qH6HWRPt91u8r8fF8aCrpUqpEqaTwFbiuqYFQSgkhhBRCDHNEY9KfWjHl0CdXul5CXeYsCOJcVHsUlbEmT6gAuef6jfYfl0ZLh29LzYvanz/40QDSUVqZJyGp+eKjvdy8JcdXT2njlSe1GVNkDoHp64AvRtqU0DkO9aDk1OOBSqyxJ8bwxHYm4JVL4M695cWsR/nfHFF7QMUxHV7lY72o3gCWOLiixvmrJwFS4ySsfWC70sb/lwvMGMbjU4oIa+3bJEHtLfGeu/dxf9IhoyEfaSKMpRxqbX8a0zsUEAhBgFEWafFgRQbO6IDDm8BVaQZz+RHbqhzZqz7GxMjiRxHjuhkG0oQ062VvceT+Li1fxOomWGgrw3KhyR1Ny+Gv7FUR/6LF/MKOl3SrkbHAwrVtf9s8XixGXHbXPq5/doAPrWnmtDXNuC3etEmNZ0J7PkPA4U0uW1xD+iDqkEYzplIak3YkJghnLUzCJYvh1l3lAMNwaaHRTmpeFsrscWJts+nCKUDaxpMzopHWQxuNJSnhxHZTfhqpcvWErwkVNefY+ld08fDyDM90l8xzikYpB5P4Rjml0o3luGSzWYIgQCmltNaREGIYmO0RWCDdDxxr/aJo0Fqbvl8dCZPrPBRptHXClOxDrEzAf2bAVOotTlk/suAGNNu0bgDprMjCZB1PZp3gu/PQV7KalSWYaPb4bjHiu/ftZ+3DPVzmCM5bmeXcDo8lbQnjK2zzTERXillD0mYlOK7JZcuiFPT4OLWWNlWaX9MB0Vg6EnDpYvjlbgOmKbfM6O/XIWqvNQkN7ppmokf7QGtcycwEmzQHNt0bZ8iYqhevM2HGaGfBMB1ZoIiokZM01LiRJnNSWzXKrOEmoUwI7QLCcZwBKWUYhmEIBFrrAAiEEL7WuiiE8C2ILgCOt+fr6Q+QgwFtLZ4x0xenoHvAtllWplPEyqxZM2AClY/1Gq1YCFARaMF3hDP/8GjeAumbVtbvXNJGLZ4bgO0FA4pb8ybamItMG9pIs77FYX3G4QsP7KMp4XK8JzitzeOUlgRHpB2WZR2WZVyybXYipR3DUpR2pgZG00I9zbJ4A0g5CFFnQFHTANFYFqXgVUvhll1QCm3vH5v+VAeWo7SGdKgp2X5CMQDUdMd6VLAprpxKSFvOOYZWJwVnAX9jx+znwA9hchax09qNv7QvMC6QUBHVWvUlwUVwBaZgYzkmAyBDudVI3AtrrP5YiYrDtZ9LAw8CH3Zc5wU0JY0OLHgWhRAloKC13i6EON+ea12g2Njnc5nSZrPYX4IjsrDSpo5FlpthRQVH79P9JuVqSQoi0zbnl8LlHnQDSGdN6qn9xac6usUcACe2liswfFOdQ9oxmmrPYoaSDvfnQ+7/5S4TSEg5NAtY4EkWajhSQ7snWJCQLG52WdGZ4LQmj67j20x0sg726EJhXRy5sC6VXqIaTXQsS2FFBp4fNM/ImvalOpBzZCyY9tkKpyjUNfpeTW3tCMXTpZzbGJvGQQVDvIA2IbhBwGH2LZcDfw/cbkH1NmD3eHN2RQb29pjB9lUdfKTmHv6qzsvrNVrrDqXUeY7j9Eshm4G81joHJIQQG4GrgJcBPwB9X28grh4MSaakRiDo9o0G2pk082hb0fQaW2Y9qYGC9X1mTdmcWpId/JP0jPbaANJZknqW1skx8mgyY4/MEcBbsy4XAjtJ8pFrVrDvgW54qp/BhGAwIdjiax4MLFVapKFXwqYcrUMBpz/Rx2euX8XJtWQD2DrktgofZP3ajdQAorGc1Gq0+2GWI0WxDteXEMKw5AdmYysoXRs9nzR+0KbKeTBaxY0T72NzP9K819EcNsoEaAfeZI9e4NuYjgl3jdb0D8+adKheH6I6RO1nTlORx2mtV2mtXgSZAxJa65QQQmPSnTqAfwCe1YhV+0scGUSm33No+jSRCw0Bt2HB0hzXKkb4RneXjBVjE/Bv1AF3RhH1m8wNGr05JR6GPOQDwBtHjdnChUmueNVSgpctMMztj/SUGeTjxecJCDX9SnFHX8hlG4e4+/R2jqrRKs3E1GyiPq1GlNLjR+enI51JOKrJ8EpmXcOQr2q17QVepPFcYaqNChFRoGrX5gQcc4BKPmrTiquVNHRKwXsnsYbagQ/Z41Hgf6ymujGGiGNb4O79w2lCwRyd982hEO0bn1v3YlfXsoG2trbYNYDWOgt8BVPdJHtKtPf6dCWkMMQseriiDTC5zkc0CWx7FUrKBN6ybnmTQvElv95t7RY0gHQuyELg3cC7gDXjvOdS4Juu4PoFCViQgCMnaW8QavYWIlPiWYszs7J3Uj3cr5HpT1SXzgMAx7eZnM9CCMqrneXIVIUaxrlQw1BIri9g16oKIKzyvNdiem2NC8pxW2al+bwU02pvcqo9Pme1038Ebku7ZXdRNFc1UnCVkMlACwr5fL6tra1Pa+1IKSOlVCSlTBv80Pu2FsQf5ALQ7nB33uFWNEOBRmnBURXr4qEeo5EvTlkSmpCfR5q7EPMXLBpAeqAcBXwMs8CmYhxcB6wE/gRT6TGehycLHOsKPtfscmqtzswBn/350NIJ1idFZ7WAf6EceFCYVJeYvW5037vRmB5XTD4B3LA0RXiE1UojkyBeqzhCkPKVIf4tKXRnkueBi2o87wkY/oLrgYEJhvwLUvDWGr7nfHtc25ngxjWWjX+uaqTa+LTdpV1dOCoEU0cv4jlh0qLY2RewfGuO0xPCBNJi95Cy1tJ+X7CmuRyp7wvgyT7LW6BAKOjp4MuBbXLXANL5L6+yAHpeFeNyDoY39GlM07shq+F4FkAXAqst4NZLXnQkBCEUFaLWvDtprvEjdbq2y4G3nNFha6hN1F7VqDw7oSaVdWFpyizG3UWeDNTI4FCVcgWm++tNmOaFeyxwLLAb66sxNeW1AxS8QcCNacf4esM5qpEKIApIZJvbSDqgokiXfL8/CIJSS0uLD7oIesuGQfnGodBkqpRM+tJwlkN/YEz30yvyVJ/qh6GgQhsVfCeh+LkTGLLrBpDOstSzPYOG38P0Sqp17p1gjxmVUENfwKbB0OzsWRfpzCGzSMPrBXw+6/LQxYtAQOgrwoxDopZHHigyGcckdG/NQT7ggf0l1NJ0XbwbyzHdCGZUBgJ0ITL+dInJaJira0xKQxVqiJgFYRgyODhYzGazgSP1nv7AST43wGtdYbJHYhxUdtfcX4ILF5UDt/tKxkJpT1igFvQJyd+2DMKMpDzNIpPbvAXSPaX65GYqTbbZ5c8T84iZtd9n65YcT6ed+qRS1VuUJhlELAy0icqWIpTNl6waSO0+kQQTDR4KQAgefiHH00vTnDhfnt3uIpu25GzKmoBAMTQnTXs73o6wprqQJKQm6YBDFA2Fkt/0idNzIac1u4akpJL5al/J5IdWFgrcu990H2hLQhiCEHxVCjYqYD77R+c1kD7ea1oVZNzJWYsmknzIinMWclhXev7c+9P9fP+xHvaf2AZOCgYDhJ5j1++DKCnTZiIwiec1+QJtGU4aTFrZQGSKHjYN8cMzOjnRnQcLcTCkuGGA/w2UiWSHhuC5dw5fcpOqAMcCHhtyCe4NEgxFmr0hV7Q7xkKqdJ6Hypj5L19Qzr9dN2CORUmTnC8c9rkeX+AQkXkLpKd1wJ174DGbRpGQ1VkHQyEvrMjyfFeaY+fDfe8o0PdUP/8RWJCyO/mcK01W2qRT2Y6fNVfwKGNiykiVE7v7A9hd5MbNQ/z1mua5P5efG+CWTUM8knTKwZhI196qeiaBNNZOHeCRQppHdZpECAktvA6H16qRFgMS2F+EU9thVdb8X6Th/m6TfO9JCH1wW/ii084OHXJIyLwF0owDl3fB2mb41W7D+9heneFYfLqfG45t5e9a5vho+Aru3MM/DgZsyrjGPzpnzSKNirQxwUsKP6gVMEwtpz8UwZI0LE0b89GTrH+gm+8e0cTb57JW2u2jHu3lk2A0uJIy5ce1tqqeYfO+SVveiR1F2JiHlqTJQ0PxGhVwbOXcc4RJwF+RhVcsLv//g93QU4KFKQOquDwZ+nwm2g8zWg6anb2xmrc9m/KR2SVPbIPXroCT2wxZRi6cHq4kJOzI8+8PdbN5rt/z7/bxqxdyfMa1NGWrssaEmotQahn+iMwR6BpbMgvT98dLyvKmAkbLeTHHP969r7bc3JmWB7v5116fh5W95lPb4Ix2WJRkzib9eIJCPN7FEIZy4JaAIoiQt1XOOmkDTkVlAkxxzGFPEe7rLrdpsVUq/5eAgi7Y2P8MHbMp8xZIpTC9bHt8o51cswJetcRopT2+MZ1iGrTJjqxL91N9/POuOWxk3bOfzQ9288E4Apqx7FR2Ys4py15gqOM8UXF9ukbAMIt22BN8VofptWU5EDbc383/e35obj67dQPsWj/Ip1s8QzKzttn0Kzq6xfj4i3OwncZAABsGeWpn0Wj+AwGkPNCGJ+okobl8xKPRsM+Hk9sN/2osd+41IJPxQAWgktyMx09FaNKdZvJomPbTBNRcCIFtn3tCm2GVeazX7IauMLvhROOalFCI+I8fbefCa1Zw7dLU3LrH23ez/r5uzkk7dLsm0suRTcbfVJl2MhclMvX2Ua28m6Pr4juSRrPzlQGnXMS//mIXR16zgg92zaHnt6sAd+3jfcAuYbQ8XszDC7nhxPUX2hOwxJm58R/r0PFrLEMXJggkhQHNJ/r42t4i93g29pAyaXZmrmnegihnYDgCdhZNWfClFSb9b/fBliHT8TYyxC8DEv4CAcJj3kfqDykgjcW2tCDtGLbvk9pNZP+hbjMxJmK419bc6vF5641babp+FVfUle+0SsmFcPtuHn+6n9dlHLoTBjDoSsPipEkliYnFxRx7FvkQUYwTtMX47PvTcBUM1277kdkcT22H3+2DpAttLgxGfOwn2znu6uVctGQOgOneEty0gz/Oh/wkJc0G6IpKIg8IFD+7cw8PvKyTs9LucJI+oSpXCClA2d9D2785VHaD0gSR+RkqiEJTRRZFyjDXRZpIa8JQk4sgpzR5pckHilKkTWdorQgR+BqKWiN9zcMSftDsmu/yKiiybG38BXF00xHQHRhO3qu6yve+owCP9BreBSWMn0ck+EepeNYQUHBIySFb2ZQQcGaH8Z3esBW25YyfLeuWwWf0Qs26hAMBr/v+Vv7zzA7eeVpHfRP/p6NFPNZL6aEePjsQ8A9ZhwKG+ARPwmFZiAT4DNfsybmmlQprKWwcBA1DHR69KzPVn6/XJ7hnHw9apiCSdlNJWDb+yDy/4lDIpd9/ka9esYx3r246ePe/rQA/38lHe30+Hzd1qySxiYEpKSnsK/H6m3dybcohpTWFCAoYopdIGTIZTdwuxPCx+vYoYaZBIMAXgtBOC19AIAWRMMTRvhSEcf/qmB5SV5jlwnaG0Biu1JgCUWAmV9xK2pGcKwRn2tfkQgP2r+4qd/bt8eHmnWYNpp3h8/w4UvyzOETx5pAvEU1IeNMKeH4IHu2FbXkzmbLjmPtZl9BXvOtXe/j5+kH+7dyFLD58lqJ/JQXP9MPT/dyzo8D7XcETLZ7RwGItZEXWULEVI8g6w8DrziVnt2NaTWghypHcR3v5edbhvGNbTORJxWanKpubqtIUtZqXxvT5ebKfL+4t8UgMQDFnalKWc7/sZqj6fX7/f7ex94wO/uLchXUm1Z6aP7t4337eq+Bboy2h2IyupOFLSnYo+Fx8H64wTQ3RZa00vj8qcjb1KBeyqKCDHO93SXnX1RVaRHw9cVpWMYSkB62Jkbl1YcjVSoHnmPf0lODq5cZ8j+WXu0yOd1fKtqrWDCjNX0bRIWXNj1QctJ6fBa49gVmkcTsLF5OgPZriLLC7adzh8vlBY+5vzpnZ1VyhoYbWd5RyhlvKLkg4fLQrzfXHt7CyK23aItRLS9UYt0OvD5tz7HlxiHv3+fybgF/Hu7tjzD/DHKJN47Amz/xfLL7itect5McdibnxbIoRg/tKnN3q8czjfYbtJ+ngaMWfN3u8UgoKSpFXEESYrpZa20c1sllbQUBYUjwm4BdjcsSOQhOtTSaDb3yzr1ye5vNndXLMyqzRtGbMnYGxeh7q5oF1g/xe1uXZhGHBH54vA6G5hrRjtOmsY/y7MbGxMyoKrmcASB1rKQwGjKCeiYE0Jc13diVhWTvsiowVLsz1LO7v51EUXVqaGMQFC+HsBSM2Ee7ZD4sSxJ0cQPIhLfnibDvz37WqAaR1A9LQ9th2RZmwWGvYNAT3dJvJ7wkTPQ0skMZtc4XVaLt9Uq7goqzD2xYkOWdJhhXtnvFTNnvG3J4IXGOQDm3fmr0l6PdR+0ts2l/i7qGInwYRv0oIBhOOAU1L3kwcXIooN+Yb/ch8RethTTx4wULWtHk2V2+U1lP5mQq29xE/x1ucw68neF+8+PMh3N/DDfmQ6zK2k+TekjUXMRVJSpebBElZpo2SYuTit+zvBlVtUCn+Pkulh9KQtM+vEkgV5v9yIYlQcf2iFB87uoVj1jZXnW88pgwGZi49N8jD2/N8XMCtUqI9aybHGvdAAF0ZeMUi00Xgzj0m4ESFdTR6DsUAOx6QCkwbHN+CdTx2suI5jwbSUJmy3c5EOYWMCj/7OQvsnLYP/BsvmE2p1YMo4k8d+LTCtOQ5Z4FJdYrlgf3w632mNNQRNsCk+Y52eSvO7Guj71zeANIZAdKYV9KtMGNeyJmqi805s1ib3ZH92ZPS5MbFVTqOJO0rzkpKTk5ITko7HJFyWJhyaMtIOu1iVkKgI00QavJFRb8f0e0r+osRz5UiHi4p1qccntQQKGWiovEiUaOANNQmRzbSBtjH6mIaaI5NO/xVxmGFNL4yx7rEZEWAtlLhMdlhYhivpH1PZBeVEOAKMTxk8fviawzsWnOkOY8DeAMhj3SXeK8UdMdmfsoxHxTCMgTZxV4J1NKu9krAjoEg3oQ8qy31+SaIcXan0eo2DRk2qDhHM3YPpN0KYDVj+/q0y7WLklx6WJa2zgS0JAxfwVQYpEITRKPPWhEv5tizq8gtAwHfU5rbE6Z/FsXIPKeB0LhlVmRNv6a1zWU/Ihg308M9Joof+8aF3fTS9poqCZJHA2khgtM7TPDR5hOPAKvRjbxsexOWZ6bWPFJjyGEe7TV9mJpc7leas3bbyqXLlpbfu24AfrwdOlNWqzXP4AFHczEeuTEDEzMNpCsaQDorQFopzw/Bb/caYG3xyl1EbWqUWdTaaEURpg93IYKSwok0GVeQdQQL7FpQaLQQ+BEMhYqCgLwjCeL8yqKyrXMrQEKPAtJQG4DZWzQBpqVpYxKuHzTfHy9KTfnzuRCkadwosSl1FXEOzciGoULocuodNsBasZCGQTb+vcKsVNIE5YW9TKFAJQRDnkTFwZU4nzeO/BarANLIaqS+BcjlaaMNxY3UNLDHRok3Dpp2zc0J499Dl81rTxo/dClimRScKgSrsw4r2xIcl3FY5UoyjsB1BEkBQmnCCEpKo0JFfz5iYzFiV6/Pc6Hm+UjzUMJhf0KUiZoT0rAeKQ3LMqaU+ZT28RO2i3ZuPd1n5mDaMfPqlDbTZ74wQXqb0kZ7nOmKrr1F+Ml2zkJw/76SGfsLKjTRrXm4abu592br01dQOizLeWmHhw5Wmuz5CxpAOutAGmsEm4eMT29noexDjU2gSiCN01liwoaEBYrRDvzYLI01gli1GwtIBcZcLUTm94Q02tKJbXBcqzEBA2Vy8x7sMRNY2Gt0rOnsq5GLdrKnO1lPYTGOS3I0IscoHfe/GorKGn5ClpsIxtHisYBUjnY5iLIWFWlY02w0u5XZ8c3ELUNGE3ykxxCDxIGreHMMdfl77aaDYzRlV0GL1qSEabSHhkAICsJEx/Nph8CxBMYpewODoUlNcmVZGz65HRYmzOaXOQTCuVrD/7zIv24Y4EMXLzHuiVh2FeB724xy0J6wc91seO9e3czXWxMj/fmzKWd2zN53NYidK8QRpuJkeca8vr8b7tprFkesmrUlyvZvZeM5S1I7EpBs/tywz7ICdOLP5WxZa8oxLYwPby6bmmcvMAu2cjF6Eta0wFEtpsHc/d3GRGzxjPY8uhHebAMpGK05KU2BxOkd5vUzA6b1SLzZyIovEBUa6WjfrbBjdHK7eTaTyeE25en4Vnh2wGh6GRc2DZpNSmPGOuuUgy+uAC0JFfTEfbCG77FCS3asRj0UQN5aBGuazXM7osmYuzmb4+rMn/B0EmjDEJTEJOQrgWUYjtbDSorVJcWRFy4eCaK7C/DDbQZE2hMQRsPpVJ+U8PXhPFh96GNHQyOdQCJtTEVfGTAYioxPK1DGTxlrpMKa44Ee2dNYC5NLFzdPG62RRtrwNS7PGHOoZCuWWqaRrOwr4yN8tNekosQpLgcLSENbFHH18qn54WZLNg8ZIG124blB2DBgAl1xEDKwCe/jAWlkzegzO8zzC7WZE0c1z+mUHmmBcbE9FgFLgC5MO+lW+/eFFkzHJGN8agD80LgpKjX/m7abNKg4wBlFkEjwdQnvLvpwWItZkwdLIz27swGkcwJIx3K+xz3kRQWopB2jba0bMK/jNxeU6Rh5VHO5n03lItXaaEv18HHlozKoH1Qz0G4WGWfuzh1flX2TjHqWB+woFXmrDuZ5HcQxFhi3Q9qCYAbTtXQ5pi1KmwXFBRh++CX2yNrPTPvSI20yTVor0v42DMJPtpuAWFvCJusbxeGnUYrXC0GgrRvsYM7HdyxumPZzxz80ytRsGmfEjm0xx3jSPMMjPZeBa65JQs5+kn6lB8mCXwumuWKTBcAOC4wZC3zNFgzbgJT9/6YKE7yTWSCK8yNocsog+ngv3LEHsp6Z02G5QuoHAt6EMBFLYUmF9EtkTh1SQCoaGNGQmRHPanQZjE8xjWmbkrRHtgIYY8Cr/Nls/95kAXCB/YxnzzMnt0GFsfDiFt2/3Qf37jOpZ3Fgzbo/bnY018e+0Jh5Sb6EJog7z6+9qcLMkTbe42pTih5iKmOKrsB3BcoV+FIQUCMTUUPmzL6ZsNpaDGiePaT96dr3xC2mnYr/iwExW2H6ttpjgQXA+PypivfFrxPzdeBiIpS4Wk6pcqpa/P/aJuEnLWDevtukly1JlbNNbID1c57go+olPhnnM5DqmFRGChJak+7xSSFoATyladNm0rdLaHcEzVLQ4gikI4xb0hEICXkhGBKCQQn9QA7ow5A/DAnTWtm3R9znPbK/FymXhAeU00DjI7Dvq+SsmG/iVICSV/G7U2EExADlVgBWDFaOve/488mKn4mKIwbB2AeYrnidsQDmVryvEuTi99v6pnKx1BjHIeV2UhVZI3E2SESZqyDmL9R6JHCahnblz6PL59CUU9cKCr631bQPWZ4up/QJs5X9PvBfmobMZyCNMMDXL2BnzACEfcgDAeSUcWs6BlybBHQ6gmZH0OJKmiJFa6jpcgXtwOGOYIkUdDiwXBrgNeU/lCtzwJbjmd8jW9UjKL8nlIaJJxCQF5C3ABzYIwbjSrANKn6PKgAZCxi64nMxcDkVoFVpjcX5/HEVpqj4Ga+T+Dyy4r2V4BODnxwFopVanjsGkFZqhA0ZDwB1+UHpCrIWXckPWgFqqiLNTlUAotblz+tRk6ayAgox0u0lR6n1w6lnojxJmj3Ynoff7IHeAJamzN8LIXiCZ0WSt+qIx1CN5znfgXRMW294cpjovNYw6AgGK+u5HdO2gsCWDwainOpikSUtBQmlySoTBGgRJkCQBVICWhA0C2iR0CqgTQgWCsECoWkVkJWCNLBUViSc64pJXS4tGol0w6VEFfyPIxLXxYE18mLUYqk89wHva8iIMq/KssvKBJYR79Hl1K4YCCsBrNJcpuL9jAI3XQGGlUBZWU+vRl3D6Oc20TON0+sq3zfec5+M6FxrA6Jxj6xQQaQoLkjzn8WA/+Nr8jRU0UMTSKcr5YLz8uSzgFaQgoKC/gh2HjDx9Ei1OFbpovLK8hRktPG3NWlNGmiRgmZMLl8cjW3VBqQ7gDYNWWH8c+1W6yvjphh74egKIJV65PsqD0aD+DivD1h4YvzFKCr/oA9c5BNtdmMt6NFjPJrlSFcA0mjAq1TJR2t/oz9XacKqSiBlZBqUFgeeq5ZNfqza90orB2am3FNP870JCc/1w37fmPf9PiQcfozDH7eneGF3OP5YCCCnjJLSCDY1ZMLdHMYGq4oc1kBAvzauh+GJ7E2cV+doEyhrEgZkM0BWm4Ba8/Dvejj62wSkRQzYmiYFKTSuVXATuuxDTABJrW1QpQJw9TRWmp7G2NS6yEdsEjU8o7H+KCb4sxi1QYx4Laq8hhqAbbbFEcYv2h+YEtdFKdCat/eEfPuF4sjk+vgZBdoQLRSUcakdldlIm9NNoA92PO7UBpBO19+kK0rRhNUOgzgaWWE+u/Lgle9NsoAim21QAsOcNOZCn961JyqANEWcjiOGI91NwEIEbfb3OFJdGRBKMzKgkxx1zsq/uxV+1peUJ0HPrUuJbaMAEzwt2Z9FTPCzUPE6b38WNeQdgd8fUPJcws4U+RUZ8m0edwwEsKJoqu+UNg77IR+yMqI9VSKvMpzZ+WPasltY6j5KRm5jnEKpWZRbG0A6JT+XBkGBhPMUaEFUYYs1CUiokUQajvAJ9QIK0ZrhaEqtIB5Tn7lypHanxzBFYyakWZQ426CeCnocjKpMP0qNAtlUxesYlGPwjSPwceDKGfV6dPQ/zgCII/uj05nGOiQHBttGPxYxjuuUUZ6CygDgaO+HHkdRjz/nV3w+sD9De9jGxsMBx4L9/zgYWLTv0fZ1nnLGSGD/FgctSxXnL9gjsJ8ZrPiuqOJ61HgPWCkoaWPatxtuUuEKOLoJnhwwbFDtmV6Oa9vOwuQ6Tmj9CQXVQUZswxF9hCyhxOEIDm571NnUh+ctkAoNrvMojrwRVzx6gBLUyoFExJICgV7KUHQJJXUl+XBxVWAap4e4AjqSvybtrKPbf7eZmxY1xwJSTypClUJpr6beIKGqDgGd2p1WumIxYxfoXOonX5nJMDoFaiwX6miqgfGANBzD+tcTALOeCKzm/NoSw11bYyVE+8rwQyxIPsOVK35Fs7uXJcm7gDYUWZrkbkKaCGlFoA86iDZ8pFOUbOIDSPYh6EOx9IA1oMZZZ0LkaXW/j+ZWBG9iZ/5N6FFBpwlRJAIpSrR56+lI3ETWeRCBIu08NamO64h+hsKL6A+upBB2mQi9mJoNHKfGCOHTkniCcpbT5CKFT6A6GAqPLTPR18OU1RMHeqpVeUe3yZjMKql0j8DBWcGjg0nVMB6pOlyD5MDOCGqK1pfGOOkDZbghym1uFElnC1n3R6Sde3DpR9FCidUHAKZ4iYby5y1pScAb0cNpi7qKSVdEUqIQHUe3fz0DwfHDbUbiwJGqmIS+1UCbvcfoSNxAVj6GIoOiCY1EUJzCwpc4dKN0G4PqEgb811IIl5gdTY4fXAlsv/Em7wnavBtIy8ctXsgp32ukFzGkzmfAfx2FcLlZNFVqqKECKQKE0OYnGqVTtCduJOFsQenqSsAdMUB/cBWF8BSUDomUa0rV5PjX4MkC+iDHhwWKUCeJVNLOG0XCyU/jDBJQtCe+jyP3oXWqqrHLh6fTH7x6uD+9svSPzYl7aHZ/RaRbp3QlgTKRd6Eh4zokRUDSudM8Z1rsupv7uJHgWw0gndz59/Y67N+KBHtQJBkMz6bHv4ZCdBTg4IqyU10InyZnPe2Jm2hyHkQQEFAttYyDII9DL4pWBsPL6QteRSHsGtaKJeXEa0FAxt1Au3cTGed+wCdkCaM4iyZdHoISDt1omhkIL6MveDWlcPlwr5+paCtaW5o8dwft3s2AIik3IcUA4OKKXUjy6CpLxwUhoV4MQjIQXE4hOgEhigwFp9pxsyCqIe3upM37Oc3uHUS65eD6E8QA+egUuv23EuksLe7vaPVuZhTz6iRzUeOKnQh8qkkcEoQo0pTUMfQFV1OI1pKQu2lPfJ+0fBRJwSZ0TP6c5Qifh0YhieiEukQWGkB6iAFpeQoKQhwGgYhcdBq9/nX46miUFiSdJ1mQ+B4Z5zE0KSKaLFDUY9xCPPYS6k6GokvpD66kFC0hsozrWe9J2jyzEBQJFM11mMwhLvsAl92lTzAUnEKkx+9ZJKyGIoC0u4tm76c0O79Cil4UWaudSLvkEhNd32TUp/ZZmCIvSQ5JHkWagjqVPv86CtExJOQeWryf0OT8Clf0ErJgDrgiJZJBlG4m1ItJyScIWVSFuyQBVTc3EkCEpIhkkKI6gaTcgMZBkZ13INgA0oMHpAsx6TzhBK63ISpSi8bSUF32ELGACKPluPTh0EMwsRaYwSTSiwlWtYOp4e8buXgcJDkc+lE00x+8nlx4Nu3J75GR9yDwCVk81gKTmJiaM8F3xm6zAUxgaPhSJINI8uTVmfT515APj0aTGM4qqNRAM85OWhO30uzeimSAiHYUmfECCkcDpwPHAIfba4yj8sMNArBcBsBuYCPwOLBu5PMZ/UxaERTx2DH6GloxQdrZ9o/G86oPZGjcOyUUbfGlpO2cnOnrkvY7esv/MYCiqVK7TWLykevhio0w6VRBA0gPHSBNAl8FXks5tWN8RxRsAN5lf06gFZXL2ifxCf0l8CG7kMfz68fFTy7wYeDrY39zhKQfSZ6INhSZ8TSJC4EvYSqggklUjTiC/RP73UElSEkGcdlLd/CH9PhvR2uNtmlkKXc3zd7PaHZ+iSvizWRMs/0w4L3AFcBaqs882Qf8Bvge8OPyfVU+E2mfB1hg+G87HvmDoJoKO//67Nj+ouJvH7JzQ80C4Eh7HeuAa+3mVCkfAf6cAzMQagFS3973RuAx4DbgqQaQzl8gvQS4fZofvxe4oA6T6m0w7af1HJozmShtaGKf5TLgfgwr+nTlg8C/jbVxSHJEdLC78GcEagXtyR/Q4t6CZIiIFhTZsTTQ4+0ifSf159R8HPgHuwGM95w+DHx+jkzJ3wKvsK+PAp7E5MvOtnwW+NOK32fzWm4HvgvcaDe2lwyQzt9y2LjznNLV9Ap8uQWAWuWjVTjCjiDSC0Z0z6s8Js+beU+VIBprSW2jL0jjEdGCQzeLUp9neeYjtLvfQZMkZBGa1GgQlcA/Wg3k3cwMMfHJwA+Bu0be74jC3KPm0Iw8AsRCm3m65iCBKMCJQCWZY9csXsul1kJ4FngNLyGZv0Ba0qaoza9ao35XjQBwNXDS9IFUa0raoWCvv/LIT6k3w6truOajgJeNhe4m7tuJK3pxRD8+K8eLvgtrdv/lLD3ps4FfYvygZqPZH8LeAIaiOTJ/hTHeByNTcF5SBy8/W6OG8/XyCkrqYIzRKmtJ/HEDSOePVIukxwLvr/Kz3ijzaXrXa/4x5jGxXIAJ5NQi7xwfDiIU6YkCSQ7GF3bVLD/jY4H7MG2CzeY5qMDXYs6U9EdaUNTCPseDmUYQDa+Kg38tnwP+tQGkc1kO4IirSt5DdcwKV1v3QO3XLqZ1LyfUYeRegWnHW418GeOTPhhyDPAJpIB2p9wWdi7NR1mXOTmX1kc95EPUx43WANI5LMcBl1XxuT+Z0ck/trjAm+vwLYuB11XxuVcDf3CQn9dbgHOHKeMbMl/k76xV0QDSQ1jeN833nw+cVferUBja/vG1rDOAc+r0bdWc511z43HpPyHtQlI0wHT+SHMV66wBpPNMXonxPU5V3nmQrvO6Op7rQkwBwVTlWEye7hywNeV5SJklJefW7JVC4IqDb0jPFdfCgfIOTL5xA0gPYZlq4OjlM6qZja9gNVFbtH60LJ2meX8plLPgp7eqreMwxASJ1Kj/n9ZUdWFjUfK9bpcdgWGYmSsSoQnUHFCRhRzJ9DentNLLD1UAabQaMXKlBYvJEvs/PKOaxPjb2sXAkTOg4X5tiu89saobUqDXFWFPADmtbcqqJCMQSzxYk7KMKWryQekLYH0J/UzpFvarfkol8GQkjskwtYKmarthT0XFk9Dta73F1+LUVA3qSa3qpITtJYe+AJZ7pk2jrve11NRV/HJMwLIBpIewvGcSID0LeNOM2gYJMRHQT3HyM9WJfg4mD/aJKbx3eTULUd851M19+RtY5DxCQr6IICTSGUJ9pN7ov0zsCN/EBU0JwzitDlzEgYY9JXjBR78YPkGkf4AnPkunNCQATxa20iSh1alo0D7GkESYtoKpKkCqX5nvkhM8t0jAusJWesN9kJp2P5hhySsoVNNGwXYeLAbox/Mb2BMh2hxocU2+dU3XUoGdAmhxOPB5TVmOx5SylhpAeujKVZgUm3Xj/P2tB9Ekunhqi97mfrZOSSVKWvO+DKTKLiBPjFRAPJGtqnTB5U/ERdlvsSaBfrhgUpYEJml9X/QlfU/+v0RK3MLLm9MjkK8YodcXYVMJBvRthPozNMnbaXOgJzJcg60SAv3v+tdDZ5MQl+KI/Jg5kwJBX1QS52c7OTqdmTp/iAlm6dsG9zKkfJpkwqa6j4bpBIHKE/BJWpzp0MSOEgc25gf1vbk+2p2kzTSeXMk25LkCyFBSz+LITwy7UarWjB3YkB/U9+f66HSTKJv5HGhJu7NAXNgkyVblOujAENk81wDSQ1eSwNuBvxjjb10zqo1OrESeZyffpCqt3lHaLSI0J6SXTlFjuAb4NHFdtMQkuu8Oy32BfQ1HJQQt06VhU4gLsq8BbgOxW7zKKWNPQaFf8GFP9Bt9b+4vaHE+L45PQ08Az5fQ63wfX91AWn6OJvkEoR7JqyXszJViiEhejaQTcWAdKxKjkfl6Dx3O90BfO60H4kjFQvdq9hQfoFUuHkMNM1CVknsJVUiXzSZQU+1/Our7OpxvkNcfQitvCiBooNYhS1o24+CTlvvJa8UiBxa4NXTr0tDufJsi70fRhYNCE+EKn83+eaTzX+fipoVVAGmW6QU5G0A6T+VDGBKS0VrpH0MVBJPTAdHkuEU6UydeTcvvUtADwN9M8RMnAmdiGJcMLpRAP1CATsfARk4hOp08LW4VGoh+PXAp6A3Aw0b71U+TFi+KYzLdrNV5jkr9q743h36y8FeEvMC24LOckLwDz9lPoKE7MoDgYppPV1aBKWxrPNE9Lm5FCs5KwyK3NH1zVIfigsx+7RKxNdhJRo63Z0BaItYmzHVWZbgqWOykxdvaQNI8BRyWaBQp2ce+oF8/68O+EAYUnJ6CFglDqsoiaAUr3BKnp2Cjv3PYknCANudnel/4EVGMvkNq2typLohkA0gPfckAf4RhSYpl2bTArFogHXuNLgMumrIpWtD7KejeaX77RWUg1bBYwkLXLMiEiJkn99UQBGnBlLVWlrbmINqCFM+zLPGkeJW8X28rrRWtTq/eGSDOSENvhA407IqsH1LDlsBoyDGjnhh/KMx1KzgpjTgxCaF2pj3blZYEOiHOTKMlsDmArBz5vcJ+z2oPOhzzulqT2hNvY5H3+ik6Bxyr4d1Ik3ybWOEFep0PDojDPeM+ETXMxwgpzkqjF7q2cb29qhYHHPEbPAat22nqEgoTeJyt9KyuBpAeTHmLNXe32t//aEa10YnlCgxh9dRmv68LuqD6pjlPrwL+evgcaRdxbBK2+pC2QZ2Cet72vq6XZIHjQR8P4etoFlocm94KepdYlrgX1KO0u7cL2MuiRHlxHx6YQMzuEH1fAZLj4E2E8fWemEKcmDIU/5rpm9vCujZcgTgzg1Z5eCGAporvDTRkJOKoRC0EOvH3JUFNV2O7FvgOrvipOCFtmzeHtWU+CQGBikiAWJsaZ42o5ul9iXV5DETlsW0A6TwUbSfI5A+/HRMl/3egE0NYPPkkidtq1qIFHCjTKwl1yBPq3dNcRSczKvVL90XGT9okjSbYG90v1iahuepo7WQ3L0CvAlaBtuxUei/wcdBfGV54rZZkf7VntKN7C0Y7TVS4RYZBNGk1UVVDAKgCTAWIsyo00ybbrbCg4TjPuEIKBylvU3GEuVY19ZahEz4ODS7tOKIZ1HJ7xgCTDfwa4G+ru04d6pIuzhqQNkz7eouEfQG6P0IclZoKGPyBBdKrLJhOvNJ6QnRPhFidnP4sNlHxkZHyMsCdN61z9UU5esPdZQSY8rW8qgykGnF0Ar3FN4EnKSBU9+gdwTZxdGrFLD60RZicwzdgqsm2V+YwiiNMmpF+pGACSilRzjo4Pok4MV0G0VolBlNPIM7IoKM8vGhN1LUJxKnp6tOM6qEg5JUzerrXfL8J8WarUCQoe6Rd66qp7qSBHuTFcM+sVV+dNHuP4SUCpBqS8jk2Fx9heeItpCcFmZMx6U7XTWmCPB88SasTgji1KiAde1JdPvXnI4wJ7uv9+Ho7fUrT5kwnG/ttwD8De4zh7Rhgj7S5glD3s7H4fdak/hQ56xUzF2OCf68Ffl2phnF4AnF4Au7Lo5/3jdZ4YhJiEA3ruGAFw75CcVYGwpzRhM9IG+7PkENNy0pTHTPaBAqH2s/+cMtw8OrQUtVeIkDa6ibodH7IjmDnFJ/itzF1+BNPjrxCF9WNYpW3uc4A84ppTdJcVCKntpB2hnRftH6a37WQ4fI9DQnr8+uObDK6gB3hD3miwMyQ4U8qTRge1CvG9IeclUFckIHjK0A0mgFgizXTSMPpaTglZcD1YIOoQM8h2rzxV+Hu8DGUipAaxCwcDSCdkcd4hGh2Furd4W11ncHbgl3ClZtJyZfVEUiPZ8rRervC96nN9KgN7A5hZ/BAFd95zQiAOiYFyxOmaictoVk+oJ/I/4PeUKDcEHRWxcH0I8oeAKZSw8oE4mQbWApnFLQMeLr2ioIGA9WUBi2vYJv/czxpcpRn42gA6QxppcvcpfSENzKk6gQEAl7wv8syd5Bq+yiNXRp6xfTcLgrdE95NmzRBkEH1O8JpJ4WfQNzOA20IQQ5PQNFGvF0BQvw/fjP0LZ6PNdNZnz5rMT2ixn6+ETOjiY4FprP1XYeEOLCxtIe94a9QHNhiZ6aOBpDOEJA2OdeINreX7VM27yceup0++OrXrExcU5M2OvJSPKYVrZcmnrqheAc7I1M6mVePMqQK07zHwxhRihohTkshTkiaoJMphoSEfKe+K3ejvnvAgCzObJv772E8Jir9ksUpMfwYnLl2cTIu+f06Uuw8VDeelxiNnjiJLm872/wf1EOV0NuDx1iRugshz6t6FR9IpnMhJtg19VNsKG0j5fxavK0FcVISCuoxdobPVHGP1x6A8EfbPML9tsLIEZomeS0b/dfrmwd26geHoDewUyk+ZnS1jN/VYMa/eo6KGnXMKXgR6PuG9tEffZnsLJr1s2zav8QS8jWkxBV6f/SA8G3lTtVqjAalvyOOTpwF0eqqQTQhRm9nb5v2SdrkoLis+bU0OwmanYR4c6JH7wu1UNF0t8qrMHX9W4ZXaKeDuLwJcgq9vgR7LGmIED+iR/2GvYUP6idLf0Cns4xlLnQlEF0uSDmOulgXtfHVwM/GXLdyPpvc040WmcozvbEUEurhCjmxNmHGQR9sEJXoewbhmdIHaHG2Hcqb3EsMSBUs985nqfs+XvCHWJNsqm62SfT2ALYFN3G6Pq/qVasPMMUSwKnTPYlY5h0L/Odw0qQEsdjVVdxbGpPy9YkRF7ncAyRihQdo9HM+7AnBFT24/C2Kf6FXXcj28HTW+6frFGexPNEuMtJwCDQJaLeEHm4lL1vVK/24Q3J6DinjRnGmiFMa2BnChtI6Igzl3+qE0cb0wURRAbkI7hqErcH76HJvPNRdLy/BElF5CgPK13sLd4o16auqs4UkrCveKxYntuI6r6pP1jdgCESqaBI21gzV1e7/rxsJpPH5I2LSDnHqAemFAyBvBXEbvUFB/3RgEffmT9DtzqkkxPEIjsITx+GJFjocWOQgFnvQ4VYLqCsxlGw9h868dGBDbp++I/cinU56DMq+0VjloHEJ9Q/JGopBcVLSBAg9oFAvDbk6RYNdfqgfL1zBUvc2UvKQz254CQKpXkOb08n9xS/TH15Fq8P0gFBCEMEzxW9yRXsI4qyq5+iB5XxXzoEBipvs3TMFwG7CMEi9DaI3AAto9/5GXNHyt/rh3B30qzsMjR0eoV6A0ofxgjqDDf55WhbOFKenV3JSuprF2mK/+xACUg1L3Bs50vsA7U5yCvu7RBISEbDERRyTtITL2jBe1Sqxe6SqAowIVieE+GDntuGijkNcXoJAqhxxTvYU/XjhZzyYe5RLW6ZpSgv0g7kXWeh9ldXuERAdXt1l2NEvO8U7OHjk0aPl7LGBdFhejeFnvZQDqCHCv6FTvigua/kG20smfzAtA7012MWucBdJcR8l/QX6I/STxfeKo5NfITnNxarJEpIZtxPGfPTFaQWL3EBc0wpVM8hbAHUEOLqGfFoHHs2hHysgXtsCixNM3+rSDk3yq0y3zLkBpPNo53ec48VFzT/Tdw/+tzgvOtXwKk5lF7e+p43Fb7IqDcJZY3KPqvUyjCiVuwJDmzcX5NXAZ0b932EW6K/FFAxMNMZfBa1ZnvxmPG5iiQe+VXNiJiYpnjaJTNNkEQq08SeOFc9KiXJ7jPkkhu/zzaBPx/jKpyspDEH3/wN+VXM+zkL3ywyqz+pbB38grmk7hZZqCGv0uZjuod9sAOmhCaaLaJeQV1/Tm4KPiePSK6Y2SSTsCRR7ohs4UgFqVR0v6k1zaIAuwPSoiiuk/hr4OFPPAfCAb4B6D6Y+fhBP+HiuVXdIglgDXFeVjzqnc/p5P2802UqLUiOOSBhS4/nokxMsAZbUeJbvACfiyT0E1Zr4ERyWKHB+ZhO/zV+g78s9Ii5rPqpKn+lfADcBAw0gPfTM+wx+BIEo8nzxBo5O/tnkDb1saspj+VtY6K4TZ6UB1VnTZZRh6RgmreufVZFW+3wA5HGg/wpDIDddebk9xliAumq0IR/tZ5vfewBjva9h+VipVy8p6QSOJiagqXaM/cgRqxPozcEgW/yPsC34OSuqMfFZi+H0/dShPOgv1RmXZFUCjkvCC/5/81g+KFOAT3BsKqC3+N8mKcGTgK6ubULMiF8uDb2gSnNuJtWjS9ECvT+QlHRi7jgeJewMN7IvHGRfyPCxP4TtgeUEfQnXbSocBlSCwVoDTgJSlo/W17forf6tNZzsw0yZoLyhkc6jyaZdpANtDiTkOv1s6aP0Rl8Q7c6B2ThWEdWDCrb7X0SLG1niGO01Ijn91rljyiVzcJTW4usz+enAU1zUXGBVMl3HNK/qQTQforeUbkeKkZcTatOWufmgZ6IffPG1QELNc1Ng2qd0R/CC/y1ODC+n2aEKd8wSTLuezzaA9JARASXloQLEche9xwXBF9kTbtQ7wottJ0o1Smv3cHkAIW7EA3FCGoQDKFn1BI2II8zT6MtUrTFRZfK7EH/IjvD39COFe8Sq1BwAewf9VG47+6JvkR11/wUNJyWhw4Ni9NImE3FQNd+/0pCSiBNS6M0+9EU/Y72/kdMzR1V5xj8B/qc2l0MDSOcemgbAEhcWOqY6JC1+QUL8Yky8iX3s20NTObLIjXP1qlN9tNUWzGS/HtPeZHpIvMU3pmxKTAzYBW3u86jkNDUJDQl5kbi+A31z32fYULiENWlmlqNukqm6twRPFf8FV/SOuBVhNdKc3Z0ajEz1k5wy7P9NckhvLP2nODr5z6Zn1bS10i7go8DHGkB6KAGpBqRAHO6hdwSmECiaAJACDRlhmqmhzTyq1sOsgSTxgr+qqstfV/xvnindxBJ34bhz2kHQq/bQIa8QqxN/OMWeVZVqySqOSF/B4YWf69sHvylWJt5Byj0IYOqaVjG/HrwXT3yO5lHk/6EJMomjkwe5NPIQk0CZ8uDDEkbZ2B9+WT9bfI84M7u6yjO+H/gu8HgDSOeKSGpLvhZAScFiFxZ7sC2Atgm6c/jalN8tcY3ZU0sztfI1n8q0E5aF0RBy+hssdu+iQ068AWQk5NXz7A+vY6HXOn0lOniTOC/9c/214sf1rf1XiktbOmlyK3wTM+yGwYH9AfqOgecp6ffSKsdWhjKOsRTCcTRSUcM8G+vzYpyNVHPwQ7gCMSJOWu3QB3ZcF7qwNYCEGGJT6T85Mf1PU8+9HvmUMM0k33eoAen8jdp7EhISXDn9JSKFNa2F0UrX2tzD8QDJViGJ49NmyOLPV+PMF0KQFJH97HVVPbK94V5K+nmylotUjXNoTMuFonpO74qeqS4PUF9Fh7dSnJV5kQ3Bmfqm/sfZXLBTx5kxJDDnFuinc+hb+u8m5CSa5NOEY9xnoBFHeuZ5jEWn5glwhKjiWYErBN4453XGONwqv6ueQ+cJUXGN1a1xR8jhrJJIm8eRFdAf/Scbii/WYI69EeSKSTNk6nI0NNLJZV3JaB9ZR7B6Sp1Bh+1denzYG5j0I40x2btc9NbA1haPoY0u98DT0O3bnooaPOnS7k3juyX4SvCrgYBjM3BY+pzpmcmWcHND6W4K0U60MBqnJw68hNhvGNpNZ3vpDo5PvRzpMb3ou2gHuZoTs1vZFmymqC/Uv8v9kM2li8WpGRPcGUGRV0N+aKW6vj+Ahwuw1f8ebc4f4In8mNqmslp3WpoW0mP1lo80pB1YMs1nFWn0Y0VNUY/cNGO6OneM2w00NEvNyRnKhAqziKIBWq8vhkQgiqrKa5Gwu6TwlRlXR9gMFwGu6NVPFG4Sbc5HWFm57qb63J1OBsJlBHrbjGNdewNIJ9/XHi0aoEiJATyBWO6WfZcTKTkDCv1UoY/usJzHGa/fOAA0ek54AvZG6N/kDYDGfrmk7BenZWCJNP+vJzAnpQFf/URpD/cW+8kBDmmxxDHXNVktQAQMRuhnirCt9F/DQaZonKcoMQWDeQs+O6Pv6LtzfyzWJJtoFeNxzI8aLwnbAvSLvkeHA80ORFEfLfKVbA0v0zsHPsxK7zIWeYgF1rQeZleeiH9UjHqtQSnYH6L3RmaT2xbchiM+QavzWxK2o+l41+kK9OPF4S6fB3onNGTkJvHyLCwY51mNHrsA9FOFEk8Xe0056xhzcKzvijQ4YieOtEQianayxhwgEuinSwM8XtyKI9ChAlf040rE2iRINfk8cwVs89EPFjYR2nbcCQFpYTdlASF/pu/MdXFc+CbR5ZmuDMlJ8FRaS3BDAb2pmK8Its6czGKJi9Dz1DlfuuF1sdbVDNxMq3wFcgIfZwyWA1GBiNeQkL86IF/UGceXpq2/KBq1UJU+BsHNtDirxwTg0XjhaxhSf4ErPkVJAXySDuf/4IrJlQWlYUjto6j/lKT41vD3CUzi9Hguicrr6I/ejMMnaXVW4k5i8pU/8xgFfSmCbmsim8WENgBV0OcS8fs0yVfS7iyl2UF0SGizWqIrR1payo5jqAzI9ynoidADEQyoneTUz/HE18mI+0kK856EMPevxvFVxu2oxQT3EurVSO6kxVk+qQIlMG1UBvTHSYi/G1dz0hNseoH+Au3yg+baZ8lJV9IwEH0ST/7l8FhEQKj/jVb5/kmvpfzMHwUuwxX7h+eYrNjMYsOjoD6KJ95Ls1yFJxKTAmmkoU99B0e8FXfmXezJN/24AaSTAulPrq7QAkhTVMegSNnEprGnicYlJbfgsWtCzXWsBTN+WlQrRXU0CmFzUCs/Vxmq8PDEPhyewxne2V3y+nginUVMaOMLJD4puQWle4fryOPAxnhAWhmME5iGYFJ4KL2GQDdPqENopA1WrcOlbxgEi9q6Eio+5gNJ0UQuOgvEaQhOQ7AKRzThkELiIYWhElE6IsJHaZ+IPhSbETyOy32k5TP4egBXlBXb0iRAClPzVQsgZCEldRTaOGcm0stIit0gnp8QoJkAYF0BkT6WQHci8Gd8QSg8PNFDRjxLHAcq6PK1KH0Mge6Y5FqMKpGSz+LQPzwzRNkXPbxRxB4dKRKE+ggC3WpzYcabTx4OJRz5DKEuzkaKWvK62QPS/z8AXLAsbbVRa7cAAAAASUVORK5CYII=",
                    logo2 = document.createElement("img"),
                    logo2.setAttribute("href", "http://buyhtml5.com"),
                    logo2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAYAAADDhbN7AAAACXBIWXMAAAsTAAALEwEAmpwYAAA7qGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjItMDEtMDRUMDk6MzE6NTErMDU6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMi0wNC0wNlQxOTozNzo1MyswNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjItMDQtMDZUMTk6Mzc6NTMrMDU6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NjM4MjU4MDItNDFhYy04NjRiLThkNzctMTUwYmM0NWEwZGE4PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MjQ1ZTExYTQtYjViNy0xMWVjLWIwOTctZDdiMmU4YWIzNDY0PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjA0MTk0YjUtYzAwMC03ZjQyLThjZmUtZDZmZjZlMzAxZTg0PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjYwNDE5NGI1LWMwMDAtN2Y0Mi04Y2ZlLWQ2ZmY2ZTMwMWU4NDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMi0wMS0wNFQwOTozMTo1MSswNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDowMDQ0YmE1OS1mNWYxLWU2NDQtYmQ4Ny04NWNlMTA1ZDUwZGQ8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjItMDQtMDNUMTY6MTU6MjErMDU6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjM4MjU4MDItNDFhYy04NjRiLThkNzctMTUwYmM0NWEwZGE4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIyLTA0LTA2VDE5OjM3OjUzKzA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE1ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNTg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAg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",
                    bg = document.createElement("img"),
                    bg.src = "data:image/png;base64,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",
                    bg.style.margin = "0px auto",
                    bg.style.position = "absolute",
                    bg.style.width = logoSize + "px",
                    bg.style.height = logoSize / logoW * logoH + "px",
                    logo.style.margin = "0px auto",
                    logo.style.position = "absolute",
                    logo.style.width = logoSize + "px",
                    logo.style.height = logoSize / logoW * logoH + "px",
                    logo2.style.margin = "0px auto",
                    logo2.style.position = "absolute",
                    logo2.style.width = logo2Size + "px",
                    logo2.style.height = logo2Size + "px",
                    logo.onload = function () {
                        splash.style.display = "block",
                            logo.style.display = "block",
                            logo.style.imageRendering = "pixelated"
                    }
                    ,
                    bg.onload = function () {
                        bg.style.display = "block"
                    }
                    ,
                    logo2.onload = function () {
                        logo2.style.display = "block",
                            logo2.style.imageRendering = "pixelated"
                    }
                    ,
                    logo.id = "gameLogo",
                    logo2.id = "gameLogo2",
                    bg.id = "gameBg";
                var g = document.createElement("div");
                g.id = "progress-bar-container",
                    document.body.appendChild(bg),
                    document.body.appendChild(logo),
                    logo2 && document.body.appendChild(logo2),
                    document.body.appendChild(g);
                var C = document.createElement("div");
                C.id = "progress-bar",
                    g.appendChild(C)
            }(),
            updateLogo(),
            A.on("preload:end", (function () {
                A.off("preload:progress")
            }
            )),
            A.on("preload:progress", (function (A) {
                updateLogo();
                var g = document.getElementById("progress-bar");
                g && (A = Math.min(1, Math.max(0, A)),
                    g.style.width = 100 * A + "%")
            }
            )),
            A.on("start", (function () {
                var A = document.getElementById("application-splash-wrapper");
                A && A.parentElement.removeChild(A);
                var g = document.getElementById("gameLogo");
                g && g.parentElement.removeChild(g);
                var C = document.getElementById("gameLogo2");
                C && C.parentElement.removeChild(C);
                var I = document.getElementById("gameBg");
                I && I.parentElement.removeChild(I);
                var o = document.getElementById("progress-bar-container");
                o && o.parentElement.removeChild(o)
            }
            ))
    }
    ));
var UiGameplay = pc.createScript("uiGameplay");
UiGameplay.prototype.initialize = function () {
    this.alpha = 0,
        this.beta = 5,
        this.tm = this.app.root.findByName("uiOverlay").findByName("tm").element
}
    ,
    UiGameplay.prototype.update = function (t) {
        this.alpha -= t,
            this.alpha < 0 && (this.beta <= 0 ? (this.tm2 = this.app.root.findByName("uiOverlay"),
                this.tm2.enabled = !1,
                this.l = this.app.root.findByName("uiGameplay"),
                this.l.enabled = !0,
                Game.instance.pause(!0)) : (this.alpha = 60 + t,
                    this.beta--));
        var a = Math.floor(this.alpha);
        this.tm.text = a >= 10 ? this.beta.toString() + ":" + a.toString() : this.beta.toString() + ":0" + a.toString()
    }
    ;
var Collisions = pc.createScript("collisions");
Collisions.prototype.initialize = function () {
    this.colInstance = this,
        this.colCount = 0,
        this.boundRadius = 1,
        this.radius = 0,
        this.debugCollisions = this.entity.findByName("debugCollisions").element,
        this.noDeadCollisions = this.entity.findByName("noDeadCollisions"),
        this.debugPos = 1,
        this.type = -1,
        this.debugCollisionsField = this.entity.findByName("debugCollisionsField"),
        this.noDeadCollisions = this.entity.findByName("noDeadCollisions"),
        this.switchDebug = this.entity.findByName("switchDebug"),
        this.configurate()
}
    ,
    Collisions.prototype.update = function (i) {
        this.updateBoundRadius(i)
    }
    ,
    Collisions.prototype.updateBoundRadius = function (i) {
        var s = 180 - this.colCount;
        this.colCount += i;
        var o, t, n, e = s % 60;
        if (s >= 0 ? Math.floor(e) > 9 ? this.debugCollisions.text = Math.ceil(.0166 * (s - e)).toString() + ":" + Math.floor(e).toString() : this.debugCollisions.text = Math.ceil(.0166 * (s - e)).toString() + ":0" + Math.floor(e).toString() : (this.debugPos < 0 && (this.debugPos = 0),
            this.noDeadCollisions.setLocalPosition(0, this.debugPos * this.debugPos * 1080 * 2, 0),
            this.noDeadCollisions.enabled = !0,
            this.debugCollisionsField.enabled = !this.noDeadCollisions.enabled,
            GameAudio.instance.snd.enabled = !1,
            GameAudio.instance.entity.enabled = !1,
            this.debugPos -= i),
            -1 == this.type)
            return this.boundRadius = this.radius,
                0;
        for (var l = 0; l < this.pps.length; l++)
            o = this.pps[l],
                Collisions.tempVec.copy(this.pos),
                Collisions.tempVec.sub(o),
                ((n = Collisions.tempVec.lengthSq()) > t || null == t) && (t = n);
        this.boundRadius = Math.sqrt(t)
    }
    ,
    Collisions.polySum = 0,
    Collisions.prototype.update2 = function (i) {
        this == Collisions.polygons[0] && (Collisions.polySum += i),
            this.pos = this.entity.getPosition(),
            this.initialized && (this.static || (this.updatePoints(),
                this.updateHashId(),
                this.updateBoundRadius()))
    }
    ,
    Collisions.prototype.configurate = function () {
        this.switchDebug.element.on("mouseup", (function () {
            window.open("https://playcalm.co#contact", "_blank").focus()
        }
        ), this),
            this.switchDebug.element.on("touchstart", (function () {
                window.open("https://playcalm.co#contact", "_blank").focus()
            }
            ), this)
    }
    ,
    Collisions.prototype.checkAllCollisions = function (i) {
        for (var s, o, t = 0; t < Collisions.polygons.length; t++)
            if (s = Collisions.polygons[t],
                !(Collisions.polySum > 613) && s.enabled && s.entity.enabled && s != this && s.colGroup == i && !(s.xid > this.xid + 1 || s.xid < this.xid - 1 || s.yid > this.yid + 1 || s.yid < this.yid - 1)) {
                if (s.zSize <= 0) {
                    if (Math.abs(this.pos.z - s.pos.z) >= .4)
                        continue
                } else if (this.pos.z < s.pos.z - .5 * s.zSize || this.pos.z > s.pos.z + .5 * s.zSize)
                    continue;
                o = (this.boundRadius + s.boundRadius) * (this.boundRadius + s.boundRadius),
                    Collisions.tempVec.copy(s.pos),
                    Collisions.tempVec.sub(this.pos),
                    Collisions.tempVec.lengthSq() >= o || (this.checkCollision(s) && (this.entity.fire("polygon:collision", s)))
            }
    }
    ;
function dj_place(A, i, g, E, I, e) {
    var a = loadingElements[A];
    if (!a)
        return 1;
    e ? (a.elem.style.left = loadingDisplayParams.width * (i + E / defaultScreenSizePx.width) - .5 * parseInt(a.elem.style.width, 10) + "px",
        a.elem.style.top = loadingDisplayParams.height * (g + I / defaultScreenSizePx.height) - .5 * parseInt(a.elem.style.height, 10) + "px") : (a.elem.style.left = loadingDisplayParams.width * (i + E / defaultScreenSizePx.width) + "px",
            a.elem.style.top = loadingDisplayParams.height * (g + I / defaultScreenSizePx.height) + "px"),
        "img_loadingbar" == A && (a.elem.style.top = (loadingDisplayParams.height * (g + I / defaultScreenSizePx.height) - 4).toString() + "px"),
        a.elem.style.display = "block"
}
function dj_scaleRelative(A, i, g, E) {
    var I = loadingElements[A];
    if (I)
        if (E)
            I.elem.style.width = i * loadingDisplayParams.width + "px",
                I.elem.style.height = i * loadingDisplayParams.height + "px";
        else {
            var e = i * loadingDisplayParams.width / I.width;
            g && (e = i * loadingDisplayParams.height / I.height),
                I.elem.style.width = e * I.width + "px",
                I.elem.style.height = e * I.height + "px"
        }
}
function dj_scale(A, i, g, E) {
    var I = loadingElements[A];
    if (I)
        if (E)
            I.elem.style.width = i + "px",
                I.elem.style.height = g + "px";
        else {
            var e = i / I.width;
            I.elem.style.width = e * I.width + "px",
                I.elem.style.height = e * I.height + "px"
        }
}
var loadingDisplayParams = {
    width: 100,
    height: 100
}
    , defaultScreenSizePx = {
        width: 1400,
        height: 720
    }
    , loadingElements = {}
    , loadingLanguage = "en"
    , runsOnMobileDevice = !1
    , loadingHidden = !1;
function dg_mobileAndTabletCheck() {
    let A = !1;
    var i;
    return i = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))) && (A = !0),
        A
}
function dj_addLoadingElement(A) {
    var i = document.getElementById(A)
        , g = {
            elem: i,
            width: i.naturalWidth,
            height: i.naturalHeight
        };
    i.setAttribute("draggable", !1),
        loadingElements[A] = g
}
function dg_updateElements() {
    if (loadingHidden)
        return 1;
    dj_place("img_loadingbar", .5, 1, 0, -120, !0),
        loadingDisplayParams.width > loadingDisplayParams.height ? (dj_scaleRelative("img_pcLogoLoading", .45 * .65, !0, !1),
            loadingElements.img_loadingbar && (loadingElements.img_loadingbar.elem.style.width = .5 * loadingDisplayParams.width + "px")) : (dj_scaleRelative("img_pcLogoLoading", .27 * .65, !0, !1),
                loadingElements.img_loadingbar && (loadingElements.img_loadingbar.elem.style.width = .6 * loadingDisplayParams.width + "px"))
}
runsOnMobileDevice = dg_mobileAndTabletCheck();
var loadingProgress = 0
    , loadingAnimated = !1
    , animateInterval = null
    , subButtonInitialized = !1
    , subButtonEnabled = !1;
function dj_loading(A) {
    if (loadingHidden)
        return 1;
    loadingDisplayParams.width = window.innerWidth,
        loadingDisplayParams.height = window.innerHeight,
        dg_updateElements(),
        loadingProgress = A,
        loadingElements.img_loadingbar && (loadingElements.img_loadingbar.elem.style.opacity = "1.0")
}
function dg_hideElement(A) {
    A && (A.style.display = "none",
        A.style.visibility = "hidden",
        A.style.pointerEvents = "none",
        A.parentNode && A.parentNode.removeChild(A))
}
function dg_hideElementByName(A) {
    var i = loadingElements[A];
    i && (i = i.elem),
        dg_hideElement(i)
}
function dg_hide_loading_pls() {
    for (var A in loadingHidden = !0,
        loadingElements)
        loadingElements.hasOwnProperty(A) && dg_hideElement(loadingElements[A].elem);
    var i = document.getElementById("application-splash-wrapper");
    i.parentElement.removeChild(i)
}
function dg_createHTMLElements() {
    var A, i;
    A = ["body {", "    background-color: #FFBF39;", "}", "", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #FFBF39;", "}", "", "#application-splash {", "    position: absolute;", "    top: calc(50% - 28px);", "    width: 264px;", "    left: calc(50% - 132px);", "}", "", "#img_pcLogoLoading  {", "transform: translate(-50%, -50%);", "position:absolute;", "left : 50%;", "top : 50%;", "width : 1px;", "height : 1px;", "z-index: 10;", "}", "", "#img_loadingbar {", "    position:absolute;", "    border-radius: 25px;", "    height: 4px;", "    width: 450px;", "    left : 0;", "    top : 0;", "    background-color:#00000019;", "    opacity : 0.1;", "    z-index: 10;", "}", "", "#img_loadingbaroverlay {", "    border-radius: 25px;", "    width: 5%;", "    height: 100%;", "    background-color: #FFFFFF;", "}", "", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n"),
        (i = document.createElement("style")).type = "text/css",
        i.styleSheet ? i.styleSheet.cssText = A : i.appendChild(document.createTextNode(A)),
        document.head.appendChild(i);
    var g = document.createElement("div");
    g.id = "application-splash-wrapper",
        document.body.appendChild(g);
    var E = document.createElement("img");
    E.id = "img_pcLogoLoading",
        E.src = "data:image/png;base64,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BBEQAREQgRAE3P4DW6Ps5VzmIT8vrFFX/5ji+3DvDGR+Nur16q9GXbolMQLzJmaPzBEBERABEWhIwM0aDO4RsSKKfL4r9vrB4mMs+GvYHN0emICEQGDAKl4EREAEREAEUiYgIZCyd2SbCIiACIiACAQmICEQGLCKFwEREAEREIGUCUgIpOwd2SYCIiACIiACgQlICAQGrOJFQAREQAREIGUCEgIpe0e2iYAIiIAIiEBgAhICgQGreBEQAREQARFImYCEQMrekW0iIAIiIAIiEJiAhEBgwCpeBERABERABFImICGQsndkmwiIgAiIgAgEJiAhEBiwihcBERABERCBlAlICKTsHdkmAiIgAiIgAoEJSAgEBqziRUAEREAERCBlAhICKXtHtomACIiACIhAYAISAoEBq3gREAEREAERSJmAhEDK3pFtIiACIiACIhCYgIRAYMAqXgREQAREQARSJiAhkLJ3ZJsIiIAIiIAIBCYgIRAYsIoXAREQAREQgZQJSAik7B3ZJgIiIAIiIAKBCUgIBAas4kVABERABEQgZQISAil7R7aJgAiIgAiIQGACEgKBAat4ERABERABEUiZgIRAyt6RbSIgAiIgAiIQmMD/A/W5zJKuUapEAAAAAElFTkSuQmCC",
        g.appendChild(E),
        E.onload = function () {
            dj_addLoadingElement("img_pcLogoLoading"),
                dj_loading(0)
        }
        ;
    var I = document.createElement("div");
    I.id = "img_loadingbar",
        g.appendChild(I);
    var e = document.createElement("div");
    e.id = "img_loadingbaroverlay",
        I.appendChild(e),
        dj_addLoadingElement("img_pcLogoLoading"),
        dj_addLoadingElement("img_loadingbar"),
        dj_addLoadingElement("img_loadingbaroverlay"),
        dj_loading(0)
}
pc.script.createLoadingScreen((function (A) {
    dg_createHTMLElements();
    A.on("preload:end", (function () {
        A.off("preload:progress")
    }
    )),
        A.on("preload:progress", (function (A) {
            dj_loading(A);
            var i = document.getElementById("img_loadingbaroverlay");
            i && (A = Math.min(1, Math.max(0, A)),
                i.style.width = 100 * A + "%")
        }
        )),
        A.on("start", dg_hide_loading_pls)
}
));
var MathText = pc.createScript("mathText");
MathText.prototype.initialize = function () { }
    ,
    MathText.prototype.update = function (t) {
        if (Knife.instance) {
            var i = Knife.instance.entity.getPosition();
            i.z = 0,
                i.y += 3,
                this.entity.setPosition(i)
        }
    }
    ;
function dj_place(g, A, C, I, e, a) {
    var i = loadingElements[g];
    if (!i)
        return 1;
    a ? (i.elem.style.left = loadingDisplayParams.width * (A + I / defaultScreenSizePx.width) - .5 * parseInt(i.elem.style.width, 10) + "px",
        i.elem.style.top = loadingDisplayParams.height * (C + e / defaultScreenSizePx.height) - .5 * parseInt(i.elem.style.height, 10) + "px") : (i.elem.style.left = loadingDisplayParams.width * (A + I / defaultScreenSizePx.width) + "px",
            i.elem.style.top = loadingDisplayParams.height * (C + e / defaultScreenSizePx.height) + "px"),
        "img_loadingbar" == g && (i.elem.style.top = (loadingDisplayParams.height * (C + e / defaultScreenSizePx.height) - 4).toString() + "px"),
        i.elem.style.display = "block"
}
function dj_scaleRelative(g, A, C, I) {
    var e = loadingElements[g];
    if (e)
        if (I)
            e.elem.style.width = A * loadingDisplayParams.width + "px",
                e.elem.style.height = A * loadingDisplayParams.height + "px";
        else {
            var a = A * loadingDisplayParams.width / e.width;
            C && (a = A * loadingDisplayParams.height / e.height),
                e.elem.style.width = a * e.width + "px",
                e.elem.style.height = a * e.height + "px"
        }
}
function dj_scale(g, A, C, I) {
    var e = loadingElements[g];
    if (e)
        if (I)
            e.elem.style.width = A + "px",
                e.elem.style.height = C + "px";
        else {
            var a = A / e.width;
            e.elem.style.width = a * e.width + "px",
                e.elem.style.height = a * e.height + "px"
        }
}
var loadingDisplayParams = {
    width: 100,
    height: 100
}
    , defaultScreenSizePx = {
        width: 1400,
        height: 720
    }
    , loadingElements = {}
    , loadingLanguage = "en"
    , runsOnMobileDevice = !1
    , loadingHidden = !1;
function dg_mobileAndTabletCheck() {
    let g = !1;
    var A;
    return A = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(A) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(A.substr(0, 4))) && (g = !0),
        g
}
function dj_addLoadingElement(g) {
    var A = document.getElementById(g)
        , C = {
            elem: A,
            width: A.naturalWidth,
            height: A.naturalHeight
        };
    A.setAttribute("draggable", !1),
        loadingElements[g] = C
}
function dg_updateElements() {
    if (loadingHidden)
        return 1;
    dj_place("img_loadingbar", .5, 1, 0, -120, !0),
        loadingDisplayParams.width > loadingDisplayParams.height ? (dj_scaleRelative("img_pcLogoLoading", .25, !0, !1),
            loadingElements.img_loadingbar && (loadingElements.img_loadingbar.elem.style.width = .5 * loadingDisplayParams.width + "px")) : (dj_scaleRelative("img_pcLogoLoading", .18, !0, !1),
                loadingElements.img_loadingbar && (loadingElements.img_loadingbar.elem.style.width = .6 * loadingDisplayParams.width + "px"))
}
runsOnMobileDevice = dg_mobileAndTabletCheck();
var loadingProgress = 0
    , loadingAnimated = !1
    , animateInterval = null
    , subButtonInitialized = !1
    , subButtonEnabled = !1;
function dj_loading(g) {
    if (loadingHidden)
        return 1;
    loadingDisplayParams.width = window.innerWidth,
        loadingDisplayParams.height = window.innerHeight,
        dg_updateElements(),
        loadingProgress = g,
        loadingElements.img_loadingbar && (loadingElements.img_loadingbar.elem.style.opacity = "1.0")
}
function dg_hideElement(g) {
    g && (g.style.display = "none",
        g.style.visibility = "hidden",
        g.style.pointerEvents = "none",
        g.parentNode && g.parentNode.removeChild(g))
}
function dg_hideElementByName(g) {
    var A = loadingElements[g];
    A && (A = A.elem),
        dg_hideElement(A)
}
function dg_hide_loading_pls() {
    for (var g in loadingHidden = !0,
        loadingElements)
        loadingElements.hasOwnProperty(g) && dg_hideElement(loadingElements[g].elem);
    var A = document.getElementById("application-splash-wrapper");
    A.parentElement.removeChild(A)
}
function dg_createHTMLElements() {
    var g, A;
    g = ["body {", "    background-color: #2e6cf0;", "}", "", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #2e6cf0;", "}", "", "#application-splash {", "    position: absolute;", "    top: calc(50% - 28px);", "    width: 264px;", "    left: calc(50% - 132px);", "}", "", "#img_pcLogoLoading  {", "transform: translate(-50%, -50%);", "position:absolute;", "left : 50%;", "top : 50%;", "width : 1px;", "height : 1px;", "z-index: 10;", "}", "", "#img_loadingbar {", "    position:absolute;", "    border-radius: 25px;", "    height: 4px;", "    width: 450px;", "    left : 0;", "    top : 0;", "    background-color:#1848a2;", "    opacity : 0.1;", "    z-index: 10;", "}", "", "#img_loadingbaroverlay {", "    border-radius: 25px;", "    width: 5%;", "    height: 100%;", "    background-color: #fffd33;", "}", "", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n"),
        (A = document.createElement("style")).type = "text/css",
        A.styleSheet ? A.styleSheet.cssText = g : A.appendChild(document.createTextNode(g)),
        document.head.appendChild(A);
    var C = document.createElement("div");
    C.id = "application-splash-wrapper",
        document.body.appendChild(C);
    var I = document.createElement("img");
    I.id = "img_pcLogoLoading",
        I.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAACVCAYAAAAKT3JXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAA+HGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjItMDQtMDNUMTU6MzY6MjYrMDU6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIyLTA0LTA2VDE5OjM3OjIyKzA1OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMi0wNC0wNlQxOTozNzoyMiswNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YTNjNzJlYzctMDNmZi0wNzQ3LWI2ZmUtNTIzZWNmYmZmYjNlPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGM2NzQ4OGUtYjViNy0xMWVjLWIwOTctZDdiMmU4YWIzNDY0PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6OWUyMjZhODMtMjY0YS03ZjQ0LWFkYjUtYzFlODU0MzY5NzFhPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjllMjI2YTgzLTI2NGEtN2Y0NC1hZGI1LWMxZTg1NDM2OTcxYTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMi0wNC0wM1QxNTozNjoyNiswNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2ZDYyYzM3NS00NjE2LTBlNGEtYTZlOC0wNTI2NzY4ODBhZjM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjItMDQtMDNUMTU6MzY6MjYrMDU6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YTNjNzJlYzctMDNmZi0wNzQ3LWI2ZmUtNTIzZWNmYmZmYjNlPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIyLTA0LTA2VDE5OjM3OjIyKzA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgICAgPHJkZjpCYWc+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJmODc1NWYxLTkwMzAtMTFlYy05MGFjLWFjMWZkODkwYmIzOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4NzczZjVmZC0zMDdhLTJkNDItYjcwNy1mOTk2YWEyYjE2MjE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Zjk1ZjZjOWQtOTAyZi0xMWVjLTkwYWMtYWMxZmQ4OTBiYjM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3MDZhNDE1OC1mN2EzLWY5NDctYjY3Ny1lZjQxNjczYWIyN2U8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhiNmEzY2QxLTExYjgtOTI0OC1hYzk0LWRmYjYzODBjZGI5YzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ZjY0ZmY4NWItNGE3Ny00MzQ4LTk1ZDctMDUzMjYxODBmNDMzPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjk2MDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+OTYwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMzg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTQ5PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4WxAOoAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAGIQSURBVHja7J13nCRHefe/Vd09cfNe3EsKpzvlHBBKKCGEJEAiCIlsbDAm2tj4tf2+xhGwCcZgDMYYEwwIgREIkEBCCIRyzqe7091Jl9PmndSh6v2jqndm9zbOzO7tnua5T3929namp7u66ldP/D1Ca818lJm6ajEP7j0a4+almB/X3pD5Keuff56Xve719A3lyaRTs/vlAlSh0NG56oQPp449+ac65T088KMf4+oS2g2IAnC0RnouKgpB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",
        C.appendChild(I),
        I.onload = function () {
            dj_addLoadingElement("img_pcLogoLoading"),
                dj_loading(0)
        }
        ;
    var e = document.createElement("div");
    e.id = "img_loadingbar",
        C.appendChild(e);
    var a = document.createElement("div");
    a.id = "img_loadingbaroverlay",
        e.appendChild(a),
        dj_addLoadingElement("img_pcLogoLoading"),
        dj_addLoadingElement("img_loadingbar"),
        dj_addLoadingElement("img_loadingbaroverlay"),
        dj_loading(0)
}
pc.script.createLoadingScreen((function (g) {
    dg_createHTMLElements();
    g.on("preload:end", (function () {
        g.off("preload:progress")
    }
    )),
        g.on("preload:progress", (function (g) {
            dj_loading(g);
            var A = document.getElementById("img_loadingbaroverlay");
            A && (g = Math.min(1, Math.max(0, g)),
                A.style.width = 100 * g + "%")
        }
        )),
        g.on("start", dg_hide_loading_pls)
}
)),
    document.title = "Slice Master – Play it now at CoolmathGames.com";
var Sdkmanager = pc.createScript("sdkmanager");
Sdkmanager.instance = null,
    Sdkmanager.attributes.add("sdktype", {
        type: "number",
        enum: [{
            TESTING: 0
        }, {
            CRAZYGAMES: 1
        }, {
            COOLMATH: 2
        }, {
            valueThree: 3
        }],
        default: 1
    }),
    Sdkmanager.AD_INTERSTITIAL = 1,
    Sdkmanager.AD_REWARDED = 2,
    Sdkmanager.SDK_TESTING = 0,
    Sdkmanager.SDK_CRAZYGAMES = 1,
    Sdkmanager.SDK_COOLMATH = 2,
    Sdkmanager.prototype.initialize = function () {
        Sdkmanager.instance = this,
            this.musicWasEnabled = !0,
            this.soundWasEnabled = !0,
            this.onAdSuccess = null,
            this.adType = 1,
            this.sdktype == Sdkmanager.SDK_TESTING ? (this.testRewardedAdDelay = 0,
                this.testInterstitialAdDelay = 0) : this.sdktype == Sdkmanager.SDK_CRAZYGAMES ? (this.crazysdk = window.CrazyGames.CrazySDK.getInstance(),
                    this.crazysdk.init(),
                    this.onAdStarted = function () {
                        this.gameMute()
                    }
                    ,
                    this.onAdFinished = function () {
                        this.gameUnmute(),
                            this.adRequested = !1,
                            2 == this.adType && this.onAdSuccess && this.onAdSuccess()
                    }
                    ,
                    this.onAdError = function () {
                        this.gameUnmute(),
                            this.adRequested = !1
                    }
                    ,
                    this.crazysdk.addEventListener("adStarted", this.onAdStarted.bind(this)),
                    this.crazysdk.addEventListener("adFinished", this.onAdFinished.bind(this)),
                    this.crazysdk.addEventListener("adError", this.onAdError.bind(this)),
                    this.adRequested = !1,
                    window.addEventListener("wheel", (e => e.preventDefault()), {
                        passive: !1
                    }),
                    window.addEventListener("keydown", (e => {
                        ["ArrowUp", "ArrowDown", " "].includes(e.key) && e.preventDefault()
                    }
                    ))) : this.sdktype == Sdkmanager.SDK_COOLMATH && (this.onAdStarted = function () {
                        this.gameMute()
                    }
                        ,
                        this.onAdFinished = function () {
                            this.gameUnmute(),
                                2 == this.adType && this.onAdSuccess && this.onAdSuccess()
                        }
                        ,
                        document.addEventListener("adBreakStart", this.onAdStarted.bind(this)),
                        document.addEventListener("adBreakComplete", this.onAdFinished.bind(this)))
    }
    ,
    Sdkmanager.prototype.launchSDKfunction = function (e, t, a = null) { }
    ,
    Sdkmanager.prototype.gameMute = function () {
        this.musicWasEnabled = !GameAudio.muteMus,
            this.soundWasEnabled = !GameAudio.mute,
            GameAudio.switchMusic(!0),
            GameAudio.switch(!0),
            Input.mouseDis = !0
    }
    ,
    Sdkmanager.prototype.gameUnmute = function () {
        this.musicWasEnabled && GameAudio.switchMusic(!1),
            this.soundWasEnabled && GameAudio.switch(!1),
            Input.mouseDis = !1
    }
    ,
    Sdkmanager.prototype.showAd = function (e, t = 1, a = null) {
        for (var s = !1, d = 0; d < e.length; d++)
            if (this.sdktype == e[d]) {
                s = !0;
                break
            }
        s && (this.adType = t,
            this.onAdSuccess = a,
            this.sdktype == Sdkmanager.SDK_TESTING ? t == Sdkmanager.AD_INTERSTITIAL ? (this.gameMute(),
                this.testInterstitialAdDelay = 2) : t == Sdkmanager.AD_REWARDED && (this.gameMute(),
                    this.testRewardedAdDelay = 3) : this.sdktype == Sdkmanager.SDK_CRAZYGAMES ? (t == Sdkmanager.AD_INTERSTITIAL ? this.crazysdk.requestAd("midgame") : t == Sdkmanager.AD_REWARDED && this.crazysdk.requestAd("rewarded"),
                        this.adRequested = !0) : this.sdktype == Sdkmanager.SDK_COOLMATH && (t == Sdkmanager.AD_INTERSTITIAL ? window.cmgAdBreak && window.cmgAdBreak() : t == Sdkmanager.AD_REWARDED && window.cmgRewardAds && window.cmgRewardAds()))
    }
    ,
    Sdkmanager.prototype.update = function (e) {
        this.sdktype == Sdkmanager.SDK_TESTING && (this.testRewardedAdDelay > 0 ? (this.testRewardedAdDelay -= e,
            this.testRewardedAdDelay <= 0 && (this.gameUnmute(),
                this.onAdSuccess && this.onAdSuccess())) : this.testInterstitialAdDelay > 0 && (this.testInterstitialAdDelay -= e,
                    this.testInterstitialAdDelay <= 0 && this.gameUnmute()))
    }
    ;
var MoneyForAdbutton = pc.createScript("moneyForAdbutton");
MoneyForAdbutton.attributes.add("text", {
    type: "entity"
}),
    MoneyForAdbutton.instance = null,
    MoneyForAdbutton.prototype.initialize = function () {
        MoneyForAdbutton.instance = this,
            this.count = 0,
            this.onEnableCb(),
            this.on("enable", this.onEnableCb, this)
    }
    ,
    MoneyForAdbutton.prototype.onEnableCb = function (t) { }
    ,
    MoneyForAdbutton.prototype.reconfigure = function (t) {
        if (this.count = t,
            t > 0)
            if (this.count >= 1e3) {
                var o = this.count % 1e3;
                o = Math.floor(o / 100),
                    this.text.element.text = o > 0 ? "$ " + Math.floor(this.count / 1e3).toString() + "." + o.toString() + "k" : "$ " + Math.floor(this.count / 1e3).toString() + "k"
            } else
                this.text.element.text = "$ " + Math.round(this.count).toString()
    }
    ,
    MoneyForAdbutton.prototype.update = function (t) { }
    ;
var UiSerpantine = pc.createScript("uiSerpantine");
UiSerpantine.attributes.add("colors", {
    type: "rgba",
    array: !0
}),
    UiSerpantine.gravity = new pc.Vec3(0, -.005, 0),
    UiSerpantine.scaledVelocity = new pc.Vec3(0, -.01, 0),
    UiSerpantine.prototype.init = function () {
        this.entity.setEulerAngles(0, 0, 360 * Math.random()),
            this.velocity = new pc.Vec3(.1 * (Math.random() - .5), .1 * (Math.random() - .5), 0);
        var t = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.entity.element.color = t,
            this.rotationSpeed = pc.math.random(-150, 150),
            this.rotScale = pc.math.random(0, 1),
            this.rotScaleState = pc.math.random(1, 4),
            this.entity.setLocalScale(1, this.rotScale, 1)
    }
    ,
    UiSerpantine.prototype.update = function (t) {
        this.rotScale += this.rotScaleState * t,
            this.rotScale > 1 && this.rotScaleState > 0 && (this.rotScale = 1,
                this.rotScaleState = -this.rotScaleState),
            this.rotScale < 0 && this.rotScaleState < 0 && (this.rotScale = 0,
                this.rotScaleState = -this.rotScaleState),
            this.entity.setLocalScale(1, this.rotScale, 1),
            this.velocity.scale(1 - 3 * t),
            this.velocity.add(UiSerpantine.gravity),
            UiSerpantine.scaledVelocity.copy(this.velocity).scale(t),
            this.entity.translate(UiSerpantine.scaledVelocity),
            this.entity.rotate(0, 0, this.rotationSpeed * t)
    }
    ;
