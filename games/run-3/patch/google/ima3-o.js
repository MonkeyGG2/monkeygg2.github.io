// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var l, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , da = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, ea = da(this), fa = function(a, b) {
        if (b)
            a: {
                var c = ea;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ca(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    };
    fa("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    });
    fa("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    });
    var ha = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
      , p = function(a) {
        return a.raw = a
    }
      , q = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
      , ia = function(a) {
        if (!(a instanceof Array)) {
            a = q(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
      , ka = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    ka(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    fa("Object.assign", function(a) {
        return a || ma
    });
    var na = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , oa = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a())
                return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = na(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), pa;
    if ("function" == typeof Object.setPrototypeOf)
        pa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                a: !0
            }
              , ta = {};
            try {
                ta.__proto__ = sa;
                ra = ta.a;
                break a
            } catch (a) {}
            ra = !1
        }
        pa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ua = pa
      , t = function(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (ua)
            ua(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.za = b.prototype
    }
      , va = function() {
        this.A = !1;
        this.o = null;
        this.h = void 0;
        this.g = 1;
        this.H = this.j = 0;
        this.l = null
    }
      , wa = function(a) {
        if (a.A)
            throw new TypeError("Generator is already running");
        a.A = !0
    };
    va.prototype.B = function(a) {
        this.h = a
    }
    ;
    var xa = function(a, b) {
        a.l = {
            Kd: b,
            tf: !0
        };
        a.g = a.j || a.H
    };
    va.prototype.return = function(a) {
        this.l = {
            return: a
        };
        this.g = this.H
    }
    ;
    var ya = function(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
      , za = function(a) {
        a.g = 0;
        a.j = 0
    }
      , Aa = function(a) {
        a.j = 0;
        var b = a.l.Kd;
        a.l = null;
        return b
    }
      , Ba = function(a) {
        this.g = new va;
        this.h = a
    }
      , Fa = function(a, b) {
        wa(a.g);
        var c = a.g.o;
        if (c)
            return Da(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return Ea(a)
    }
      , Da = function(a, b, c, d) {
        try {
            var e = b.call(a.g.o, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.g.A = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.g.o = null,
            xa(a.g, g),
            Ea(a)
        }
        a.g.o = null;
        d.call(a.g, f);
        return Ea(a)
    }
      , Ea = function(a) {
        for (; a.g.g; )
            try {
                var b = a.h(a.g);
                if (b)
                    return a.g.A = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.h = void 0,
                xa(a.g, c)
            }
        a.g.A = !1;
        if (a.g.l) {
            b = a.g.l;
            a.g.l = null;
            if (b.tf)
                throw b.Kd;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , Ga = function(a) {
        this.next = function(b) {
            wa(a.g);
            a.g.o ? b = Da(a, a.g.o.next, b, a.g.B) : (a.g.B(b),
            b = Ea(a));
            return b
        }
        ;
        this.throw = function(b) {
            wa(a.g);
            a.g.o ? b = Da(a, a.g.o["throw"], b, a.g.B) : (xa(a.g, b),
            b = Ea(a));
            return b
        }
        ;
        this.return = function(b) {
            return Fa(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
      , Ha = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
      , Ia = function(a) {
        return Ha(new Ga(new Ba(a)))
    }
      , Ja = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    fa("Reflect", function(a) {
        return a ? a : {}
    });
    fa("Reflect.construct", function() {
        return oa
    });
    fa("Reflect.setPrototypeOf", function(a) {
        return a ? a : ua ? function(b, c) {
            try {
                return ua(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    fa("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.j(function() {
                    h.l()
                })
            }
            this.g.push(g)
        }
        ;
        var d = ea.setTimeout;
        b.prototype.j = function(g) {
            d(g, 0)
        }
        ;
        b.prototype.l = function() {
            for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.o = function(g) {
            this.j(function() {
                throw g;
            })
        }
        ;
        var e = function(g) {
            this.g = 0;
            this.j = void 0;
            this.h = [];
            this.B = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(m) {
                return function(n) {
                    k || (k = !0,
                    m.call(h, n))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.G),
                reject: g(this.l)
            }
        }
        ;
        e.prototype.G = function(g) {
            if (g === this)
                this.l(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e)
                this.J(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.F(g) : this.A(g)
            }
        }
        ;
        e.prototype.F = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.l(k);
                return
            }
            "function" == typeof h ? this.L(h, g) : this.A(g)
        }
        ;
        e.prototype.l = function(g) {
            this.H(2, g)
        }
        ;
        e.prototype.A = function(g) {
            this.H(1, g)
        }
        ;
        e.prototype.H = function(g, h) {
            if (0 != this.g)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.j = h;
            2 === this.g && this.I();
            this.K()
        }
        ;
        e.prototype.I = function() {
            var g = this;
            d(function() {
                if (g.D()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        }
        ;
        e.prototype.D = function() {
            if (this.B)
                return !1;
            var g = ea.CustomEvent
              , h = ea.Event
              , k = ea.dispatchEvent;
            if ("undefined" === typeof k)
                return !0;
            "function" === typeof g ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = ea.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.j;
            return k(g)
        }
        ;
        e.prototype.K = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g)
                    f.h(this.h[g]);
                this.h = null
            }
        }
        ;
        var f = new b;
        e.prototype.J = function(g) {
            var h = this.o();
            g.Zb(h.resolve, h.reject)
        }
        ;
        e.prototype.L = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (m) {
                k.reject(m)
            }
        }
        ;
        e.prototype.then = function(g, h) {
            function k(v, y) {
                return "function" == typeof v ? function(B) {
                    try {
                        m(v(B))
                    } catch (A) {
                        n(A)
                    }
                }
                : y
            }
            var m, n, r = new e(function(v, y) {
                m = v;
                n = y
            }
            );
            this.Zb(k(g, m), k(h, n));
            return r
        }
        ;
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        e.prototype.Zb = function(g, h) {
            function k() {
                switch (m.g) {
                case 1:
                    g(m.j);
                    break;
                case 2:
                    h(m.j);
                    break;
                default:
                    throw Error("Unexpected state: " + m.g);
                }
            }
            var m = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.B = !0
        }
        ;
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            }
            )
        }
        ;
        e.race = function(g) {
            return new e(function(h, k) {
                for (var m = q(g), n = m.next(); !n.done; n = m.next())
                    c(n.value).Zb(h, k)
            }
            )
        }
        ;
        e.all = function(g) {
            var h = q(g)
              , k = h.next();
            return k.done ? c([]) : new e(function(m, n) {
                function r(B) {
                    return function(A) {
                        v[B] = A;
                        y--;
                        0 == y && m(v)
                    }
                }
                var v = []
                  , y = 0;
                do
                    v.push(void 0),
                    y++,
                    c(k.value).Zb(r(v.length - 1), n),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    });
    fa("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    fa("WeakMap", function(a) {
        function b() {}
        function c(k) {
            var m = typeof k;
            return "object" === m && null !== k || "function" === m
        }
        function d(k) {
            if (!ka(k, f)) {
                var m = new b;
                ca(k, f, {
                    value: m
                })
            }
        }
        function e(k) {
            var m = Object[k];
            m && (Object[k] = function(n) {
                if (n instanceof b)
                    return n;
                Object.isExtensible(n) && d(n);
                return m(n)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , m = Object.seal({})
                  , n = new a([[k, 2], [m, 3]]);
                if (2 != n.get(k) || 3 != n.get(m))
                    return !1;
                n.delete(k);
                n.set(m, 4);
                return !n.has(k) && 4 == n.get(m)
            } catch (r) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0
          , h = function(k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = q(k);
                for (var m; !(m = k.next()).done; )
                    m = m.value,
                    this.set(m[0], m[1])
            }
        };
        h.prototype.set = function(k, m) {
            if (!c(k))
                throw Error("Invalid WeakMap key");
            d(k);
            if (!ka(k, f))
                throw Error("WeakMap key fail: " + k);
            k[f][this.g] = m;
            return this
        }
        ;
        h.prototype.get = function(k) {
            return c(k) && ka(k, f) ? k[f][this.g] : void 0
        }
        ;
        h.prototype.has = function(k) {
            return c(k) && ka(k, f) && ka(k[f], this.g)
        }
        ;
        h.prototype.delete = function(k) {
            return c(k) && ka(k, f) && ka(k[f], this.g) ? delete k[f][this.g] : !1
        }
        ;
        return h
    });
    fa("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(q([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var m = k.entries()
                  , n = m.next();
                if (n.done || n.value[0] != h || "s" != n.value[1])
                    return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(h) {
            this.h = {};
            this.g = f();
            this.size = 0;
            if (h) {
                h = q(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.h[m.id] = []);
            m.na ? m.na.value = k : (m.na = {
                next: this.g,
                Na: this.g.Na,
                head: this.g,
                key: h,
                value: k
            },
            m.list.push(m.na),
            this.g.Na.next = m.na,
            this.g.Na = m.na,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.na && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this.h[h.id],
            h.na.Na.next = h.na.next,
            h.na.next.Na = h.na.Na,
            h.na.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Na = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).na
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).na) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var m = this.entries(), n; !(n = m.next()).done; )
                n = n.value,
                h.call(k, n[1], n[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
            var m = k && typeof k;
            "object" == m || "function" == m ? b.has(k) ? m = b.get(k) : (m = "" + ++g,
            b.set(k, m)) : m = "p_" + k;
            var n = h.h[m];
            if (n && ka(h.h, m))
                for (h = 0; h < n.length; h++) {
                    var r = n[h];
                    if (k !== k && r.key !== r.key || k === r.key)
                        return {
                            id: m,
                            list: n,
                            index: h,
                            na: r
                        }
                }
            return {
                id: m,
                list: n,
                index: -1,
                na: void 0
            }
        }
          , e = function(h, k) {
            var m = h.g;
            return ha(function() {
                if (m) {
                    for (; m.head != h.g; )
                        m = m.Na;
                    for (; m.next != m.head; )
                        return m = m.next,
                        {
                            done: !1,
                            value: k(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.Na = h.next = h.head = h
        }
          , g = 0;
        return c
    });
    fa("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    fa("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    var Ka = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    fa("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ka(this, b, "includes").indexOf(b, c || 0)
        }
    });
    fa("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var La = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    fa("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return La(this, function(b, c) {
                return [b, c]
            })
        }
    });
    fa("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return La(this, function(b) {
                return b
            })
        }
    });
    fa("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    });
    fa("Array.prototype.values", function(a) {
        return a ? a : function() {
            return La(this, function(b, c) {
                return c
            })
        }
    });
    fa("Object.setPrototypeOf", function(a) {
        return a || ua
    });
    fa("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                ka(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    fa("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ka(this, b, "startsWith");
            b += "";
            var e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    });
    fa("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ka(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    });
    fa("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    fa("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ka(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    fa("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535
              , e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    fa("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                ka(b, d) && c.push(b[d]);
            return c
        }
    });
    var Ma = Ma || {}
      , u = this || self
      , w = function(a, b, c) {
        a = a.split(".");
        c = c || u;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
      , Na = function(a, b) {
        a = a.split(".");
        b = b || u;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
      , Oa = function(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }
      , Pa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
      , Sa = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Qa) && a[Qa] || (a[Qa] = ++Ra)
    }
      , Ta = function(a) {
        null !== a && "removeAttribute"in a && a.removeAttribute(Qa);
        try {
            delete a[Qa]
        } catch (b) {}
    }
      , Qa = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Ra = 0
      , Ua = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , Va = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , Wa = function(a, b, c) {
        Wa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ua : Va;
        return Wa.apply(null, arguments)
    }
      , Xa = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , Ya = function() {
        return Date.now()
    }
      , $a = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.za = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ih = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
      , ab = function(a) {
        return a
    };
    function bb(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, bb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    $a(bb, Error);
    bb.prototype.name = "CustomError";
    var cb;
    var db, eb = "undefined" !== typeof TextEncoder;
    function fb(a) {
        u.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var gb = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
      , ib = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
      , jb = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , kb = function(a, b) {
        return -1 != a.indexOf(b)
    }
      , lb = function(a, b) {
        return kb(a.toLowerCase(), b.toLowerCase())
    }
      , ob = function(a, b) {
        var c = 0;
        a = jb(String(a)).split(".");
        b = jb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)
                    break;
                c = nb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || nb(0 == f[2].length, 0 == g[2].length) || nb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }
      , nb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var pb, qb = Na("CLOSURE_FLAGS"), rb = qb && qb[610401301];
    pb = null != rb ? rb : !1;
    function sb() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var tb, ub = u.navigator;
    tb = ub ? ub.userAgentData || null : null;
    function vb(a) {
        return pb ? tb ? tb.brands.some(function(b) {
            return (b = b.brand) && kb(b, a)
        }) : !1 : !1
    }
    function x(a) {
        return kb(sb(), a)
    }
    ;function wb() {
        return pb ? !!tb && 0 < tb.brands.length : !1
    }
    function xb() {
        return wb() ? !1 : x("Opera")
    }
    function yb() {
        return wb() ? !1 : x("Trident") || x("MSIE")
    }
    function zb() {
        return x("Firefox") || x("FxiOS")
    }
    function Ab() {
        return x("Safari") && !(Bb() || (wb() ? 0 : x("Coast")) || xb() || (wb() ? 0 : x("Edge")) || (wb() ? vb("Microsoft Edge") : x("Edg/")) || (wb() ? vb("Opera") : x("OPR")) || zb() || x("Silk") || x("Android"))
    }
    function Bb() {
        return wb() ? vb("Chromium") : (x("Chrome") || x("CriOS")) && !(wb() ? 0 : x("Edge")) || x("Silk")
    }
    ;function Cb() {
        return pb ? !!tb && !!tb.platform : !1
    }
    function Db() {
        return Cb() ? "Android" === tb.platform : x("Android")
    }
    function Eb() {
        return x("iPhone") && !x("iPod") && !x("iPad")
    }
    function Fb() {
        return Cb() ? "macOS" === tb.platform : x("Macintosh")
    }
    ;var Gb = function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Hb = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    };
    function Ib(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    var Jb = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
      , Kb = function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , Lb = function(a, b, c) {
        var d = c;
        Hb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
      , Mb = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    };
    function Nb(a, b) {
        b = Ob(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Ob(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function Pb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a))
                return d;
        return -1
    }
    function Qb(a, b) {
        return 0 <= Gb(a, b)
    }
    function Rb(a, b) {
        b = Gb(a, b);
        var c;
        (c = 0 <= b) && Sb(a, b);
        return c
    }
    function Sb(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }
    function Tb(a, b) {
        var c = 0;
        Ib(a, function(d, e) {
            b.call(void 0, d, e, a) && Sb(a, e) && c++
        })
    }
    function Ub(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Vb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Wb(a) {
        for (var b = 0, c = 0, d = {}; c < a.length; ) {
            var e = a[c++]
              , f = Pa(e) ? "o" + Sa(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
            a[b++] = e)
        }
        a.length = b
    }
    function Xb(a, b) {
        a.sort(b || Yb)
    }
    function Yb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function Zb(a) {
        for (var b = [], c = 0; c < a; c++)
            b[c] = "";
        return b
    }
    ;var $b = function(a) {
        $b[" "](a);
        return a
    };
    $b[" "] = function() {}
    ;
    var bc = function(a, b) {
        try {
            return $b(a[b]),
            !0
        } catch (c) {}
        return !1
    }
      , dc = function(a) {
        var b = cc;
        return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
    };
    var ec = xb(), fc = yb(), gc = x("Edge"), hc = x("Gecko") && !(lb(sb(), "WebKit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"), ic = lb(sb(), "WebKit") && !x("Edge"), jc = Fb(), kc = Db(), lc = Eb(), mc = x("iPad"), nc = x("iPod"), oc = Eb() || x("iPad") || x("iPod"), pc = function() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }, qc;
    a: {
        var rc = ""
          , sc = function() {
            var a = sb();
            if (hc)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (gc)
                return /Edge\/([\d\.]+)/.exec(a);
            if (fc)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (ic)
                return /WebKit\/(\S+)/.exec(a);
            if (ec)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        sc && (rc = sc ? sc[1] : "");
        if (fc) {
            var tc = pc();
            if (null != tc && tc > parseFloat(rc)) {
                qc = String(tc);
                break a
            }
        }
        qc = rc
    }
    var uc = qc, cc = {}, vc = function() {
        return dc(function() {
            return 0 <= ob(uc, 8)
        })
    }, wc;
    if (u.document && fc) {
        var xc = pc();
        wc = xc ? xc : parseInt(uc, 10) || void 0
    } else
        wc = void 0;
    var yc = wc;
    var zc = zb()
      , Ac = x("Android") && !(Bb() || zb() || xb() || x("Silk"))
      , Bc = Bb();
    Ab();
    var Cc = {}
      , Dc = null
      , Fc = function(a, b) {
        void 0 === b && (b = 0);
        Ec();
        b = Cc[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , m = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = "" + m + g + h + k
        }
        m = 0;
        k = d;
        switch (a.length - e) {
        case 2:
            m = a[e + 1],
            k = b[(m & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | m >> 4] + k + d
        }
        return c.join("")
    }
      , Hc = function(a) {
        var b = [];
        Gc(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Gc = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , n = Dc[m];
                if (null != n)
                    return n;
                if (!ib(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return k
        }
        Ec();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
      , Ec = function() {
        if (!Dc) {
            Dc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Cc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Dc[f] && (Dc[f] = e)
                }
            }
        }
    };
    var Ic = "undefined" !== typeof Uint8Array, Jc = !fc && "function" === typeof btoa, Kc, Lc = {};
    var Mc = 0
      , Nc = 0;
    function Oc(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = q(Pc(c, a)),
        b = c.next().value,
        a = c.next().value,
        c = b);
        Mc = c >>> 0;
        Nc = a >>> 0
    }
    var Qc = "function" === typeof BigInt;
    function Rc(a) {
        if (16 > a.length)
            Oc(Number(a));
        else if (Qc)
            a = BigInt(a),
            Mc = Number(a & BigInt(4294967295)) >>> 0,
            Nc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Nc = Mc = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
            e += 6)
                d = Number(a.slice(d, e)),
                Nc *= 1E6,
                Mc = 1E6 * Mc + d,
                4294967296 <= Mc && (Nc += Mc / 4294967296 | 0,
                Mc %= 4294967296);
            b && (b = q(Pc(Mc, Nc)),
            a = b.next().value,
            b = b.next().value,
            Mc = a,
            Nc = b)
        }
    }
    function Pc(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;var Sc = function(a, b) {
        this.h = a >>> 0;
        this.g = b >>> 0
    }, Uc = function(a) {
        if (!a)
            return Tc || (Tc = new Sc(0,0));
        if (!/^\d+$/.test(a))
            return null;
        Rc(a);
        return new Sc(Mc,Nc)
    }, Tc, Vc = function(a, b) {
        this.h = a >>> 0;
        this.g = b >>> 0
    }, Xc = function(a) {
        if (!a)
            return Wc || (Wc = new Vc(0,0));
        if (!/^-?\d+$/.test(a))
            return null;
        Rc(a);
        return new Vc(Mc,Nc)
    }, Wc;
    var Yc = function() {
        this.g = []
    };
    Yc.prototype.length = function() {
        return this.g.length
    }
    ;
    Yc.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    var Zc = function(a, b, c) {
        for (; 0 < c || 127 < b; )
            a.g.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.g.push(b)
    }
      , $c = function(a, b) {
        for (; 127 < b; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
      , ad = function(a, b) {
        if (0 <= b)
            $c(a, b);
        else {
            for (var c = 0; 9 > c; c++)
                a.g.push(b & 127 | 128),
                b >>= 7;
            a.g.push(1)
        }
    }
      , bd = function(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };
    var cd = function() {
        this.j = [];
        this.h = 0;
        this.g = new Yc
    }
      , dd = function(a, b) {
        0 !== b.length && (a.j.push(b),
        a.h += b.length)
    }
      , fd = function(a, b) {
        ed(a, b, 2);
        b = a.g.end();
        dd(a, b);
        b.push(a.h);
        return b
    }
      , gd = function(a, b) {
        var c = b.pop();
        for (c = a.h + a.g.length() - c; 127 < c; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.h++;
        b.push(c);
        a.h++
    }
      , ed = function(a, b, c) {
        $c(a.g, 8 * b + c)
    };
    var hd = function(a) {
        this.g = a
    };
    var id = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
    function jd(a, b) {
        id ? a[id] |= b : void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
    function kd(a) {
        var b = z(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)),
        ld(a, b | 1))
    }
    function od(a, b) {
        id ? a[id] && (a[id] &= ~b) : void 0 !== a.g && (a.g &= ~b)
    }
    function z(a) {
        var b;
        id ? b = a[id] : b = a.g;
        return b | 0
    }
    function ld(a, b) {
        id ? a[id] = b : void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }
    function pd(a, b) {
        Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
        ld(a, b);
        return a
    }
    function qd(a) {
        jd(a, 1);
        return a
    }
    function rd(a) {
        jd(a, 16);
        return a
    }
    function sd(a, b) {
        ld(b, (a | 0) & -51)
    }
    function td(a, b) {
        ld(b, (a | 18) & -41)
    }
    ;var ud = {};
    function vd(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var wd, xd = Object.freeze(ld([], 23));
    function yd(a) {
        if (a & 2)
            throw Error();
    }
    ;function zd(a) {
        return null == a ? a : !!a
    }
    function Ad(a) {
        if (null == a)
            return a;
        switch (typeof a) {
        case "string":
            return +a;
        case "number":
            return a
        }
    }
    function Bd(a) {
        if (null == a)
            return a;
        switch (typeof a) {
        case "string":
            return +a;
        case "number":
            return a
        }
    }
    function Cd(a) {
        return a
    }
    function Dd(a) {
        return null == a ? a : a
    }
    function Ed(a) {
        return a
    }
    function Fd(a) {
        return a
    }
    function Gd(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Wc === ud)
            return a;
        if (d) {
            var e = d = z(a);
            0 === e && (e |= c & 16);
            e |= c & 2;
            e !== d && ld(a, e);
            return new b(a)
        }
    }
    ;var C = function(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.g ? a.g[b] : void 0 : c && a.g && (c = a.g[b],
        null != c) ? c : a.ba[b + a.h]
    }
      , Id = function(a, b, c, d) {
        yd(z(a.ba));
        return Hd(a, b, c, d)
    }
      , Hd = function(a, b, c, d) {
        a.l && (a.l = void 0);
        if (b >= a.j || d)
            return d = a.j + a.h,
            (a.g || (a.g = a.ba[d] = {}))[b] = c,
            a;
        a.ba[b + a.h] = c;
        (c = a.g) && b in c && delete c[b];
        return a
    };
    function Jd(a, b, c) {
        a = C(a, b);
        Array.isArray(a) || (a = xd);
        b = z(a);
        b & 1 || qd(a);
        c ? b & 2 || jd(a, 18) : b & 16 && !(b & 2) && od(a, 16);
        return a
    }
    var Kd = function(a, b) {
        var c = C(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && Hd(a, b, d);
        return d
    };
    function Ld(a, b, c) {
        var d = !!(z(a.ba) & 2)
          , e = Jd(a, b, d)
          , f = z(e);
        if (!(f & 4)) {
            Object.isFrozen(e) && (e = qd(e.slice()),
            Hd(a, b, e));
            for (var g = 0, h = 0; g < e.length; g++) {
                var k = c(e[g]);
                null != k && (e[h++] = k)
            }
            h < g && (e.length = h);
            f |= 5;
            d && (f |= 18);
            ld(e, f);
            f & 2 && Object.freeze(e)
        }
        !d && (f & 2 || Object.isFrozen(e)) && (e = Array.prototype.slice.call(e),
        jd(e, 5),
        Hd(a, b, e));
        return e
    }
    function Md(a, b, c, d) {
        if (null == c)
            return Id(a, b);
        var e = z(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c))
                c = Array.prototype.slice.call(c);
            for (var f = 0; f < c.length; f++)
                c[f] = d(c[f]);
            ld(c, e | 5)
        }
        return Id(a, b, c)
    }
    function Nd(a, b, c, d) {
        yd(z(a.ba));
        c !== d ? Hd(a, b, c) : Hd(a, b, void 0, !1);
        return a
    }
    var Od = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != C(a, e) && (0 !== c && Hd(a, c, void 0, !1),
            c = e)
        }
        return c
    }
      , Pd = function(a, b, c, d) {
        var e = C(a, c, d);
        b = Gd(e, b, z(a.ba));
        b !== e && null != b && Hd(a, c, b, d);
        return b
    }
      , Rd = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Pd(a, b, c, d);
        if (null == b)
            return b;
        if (!(z(a.ba) & 2)) {
            var e = Qd(b);
            e !== b && (b = e,
            Hd(a, c, b, d))
        }
        return b
    };
    function Sd(a, b, c, d, e) {
        var f = !!(e & 2)
          , g = Jd(a, c, f);
        if (g === xd || !(z(g) & 4)) {
            var h = g;
            g = !!(e & 2);
            var k = !!(z(h) & 2);
            f = h;
            !g && k && (h = Array.prototype.slice.call(h));
            var m = e | (k ? 2 : 0);
            e = k || void 0;
            for (var n = k = 0; k < h.length; k++) {
                var r = Gd(h[k], b, m);
                void 0 !== r && (e = e || !!(2 & z(r.ba)),
                h[n++] = r)
            }
            n < k && (h.length = n);
            b = h;
            h = z(b);
            m = h | 5;
            e = e ? m & -9 : m | 8;
            h != e && (b = pd(b, e));
            h = b;
            f !== h && Hd(a, c, h);
            (g && 2 !== d || 1 === d) && Object.freeze(h);
            return h
        }
        if (3 === d)
            return g;
        f || (f = Object.isFrozen(g),
        1 === d ? f || Object.freeze(g) : (d = z(g),
        b = d & -19,
        f && (g = Array.prototype.slice.call(g),
        d = 0,
        Hd(a, c, g)),
        d !== b && ld(g, b)));
        return g
    }
    var Td = function(a, b, c) {
        var d = z(a.ba)
          , e = !!(d & 2);
        a = Sd(a, b, c, e ? 1 : 2, d);
        if (!(e || z(a) & 8)) {
            for (e = 0; e < a.length; e++)
                b = a[e],
                c = Qd(b),
                b !== c && (a[e] = c);
            jd(a, 8)
        }
        return a
    }
      , Ud = function(a, b, c) {
        yd(z(a.ba));
        null == c && (c = void 0);
        return Hd(a, b, c)
    }
      , Vd = function(a, b, c) {
        yd(z(a.ba));
        if (null != c) {
            for (var d = !!c.length, e = 0; e < c.length; e++) {
                var f = c[e];
                d = d && !(z(f.ba) & 2)
            }
            e = z(c);
            f = e | 1;
            f = (d ? f | 8 : f & -9) | 4;
            f != e && (c = pd(c, f))
        }
        null == c && (c = void 0);
        return Hd(a, b, c)
    }
      , Wd = function(a, b, c) {
        return Id(a, b, null == c ? c : !!c)
    };
    function Yd(a, b) {
        return null == a ? b : a
    }
    var Zd = function(a, b) {
        return Yd(zd(C(a, b)), !1)
    }
      , $d = function(a, b) {
        return Yd(Ad(C(a, b)), 0)
    }
      , ae = function(a, b) {
        return Yd(Dd(C(a, b)), 0)
    }
      , be = function(a, b, c) {
        c = Od(a, c) === b;
        return ae(a, c ? b : -1)
    };
    var ce;
    function de(a, b) {
        ce = b;
        a = new a(b);
        ce = void 0;
        return a
    }
    ;function ee(a, b) {
        return fe(b)
    }
    function fe(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a && !Array.isArray(a) && Ic && null != a && a instanceof Uint8Array) {
                if (Jc) {
                    for (var b = "", c = 0, d = a.length - 10240; c < d; )
                        b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    a = btoa(b)
                } else
                    a = Fc(a);
                return a
            }
        }
        return a
    }
    ;function ge(a, b) {
        for (var c = Array.prototype.slice.call(a.ba), d = a.g, e = c.length + (d ? -1 : 0), f = 0; f < e; f++)
            c[f] = b(c[f]);
        if (d) {
            e = c[f] = {};
            for (var g in d)
                e[g] = b(d[g])
        }
        b = de(a.constructor, rd(c));
        a.o && (b.o = a.o.slice());
        return b
    }
    function he(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a))
                a = e && 0 == a.length && z(a) & 1 ? void 0 : f && z(a) & 2 ? a : ie(a, b, c, void 0 !== d, e, f);
            else if (vd(a)) {
                var g = {}, h;
                for (h in a)
                    g[h] = he(a[h], b, c, d, e, f);
                a = g
            } else
                a = b(a, d);
            return a
        }
    }
    function ie(a, b, c, d, e, f) {
        var g = d || c ? z(a) : 0;
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++)
            a[h] = he(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }
    function je(a) {
        return a.Wc === ud ? a.toJSON() : fe(a)
    }
    ;function ke(a, b, c) {
        c = void 0 === c ? td : c;
        if (null != a) {
            if (Ic && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = z(a);
                if (d & 2)
                    return a;
                if (b && !(d & 32) && (d & 16 || 0 === d))
                    return ld(a, d | 18),
                    a;
                a = ie(a, ke, d & 4 ? td : c, !0, !1, !0);
                b = z(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.Wc === ud && (z(a.ba) & 2 || (a = le(a, !0),
            jd(a.ba, 18)));
            return a
        }
    }
    function le(a, b) {
        var c = z(a.ba)
          , d = b || c & 2 ? td : sd
          , e = !!(c & 16);
        return ge(a, function(f) {
            return ke(f, e, d)
        })
    }
    function Qd(a) {
        if (!(z(a.ba) & 2))
            return a;
        var b = le(a, !1);
        b.l = a;
        return b
    }
    ;var D = function(a, b, c) {
        null == a && (a = ce);
        ce = void 0;
        if (null == a)
            a = c ? [c] : [],
            ld(a, 48);
        else {
            if (!Array.isArray(a))
                throw Error();
            if (c && c !== a[0])
                throw Error();
            jd(a, 32)
        }
        this.h = c ? 0 : -1;
        this.ba = a;
        a: {
            c = this.ba.length;
            a = c - 1;
            if (c && (c = this.ba[a],
            vd(c))) {
                this.g = c;
                this.j = a - this.h;
                break a
            }
            b ? (this.j = Math.max(b, a + 1 - this.h),
            this.g = void 0) : this.j = Number.MAX_VALUE
        }
    };
    D.prototype.toJSON = function() {
        if (wd)
            var a = me(this, this.ba, !1);
        else
            a = ie(this.ba, je, void 0, void 0, !1, !1),
            a = me(this, a, !0);
        return a
    }
    ;
    var ne = function(a) {
        wd = !0;
        try {
            return JSON.stringify(a.toJSON(), ee)
        } finally {
            wd = !1
        }
    };
    D.prototype.Wc = ud;
    D.prototype.toString = function() {
        return me(this, this.ba, !1).toString()
    }
    ;
    function me(a, b, c) {
        var d = a ? a.constructor.wa : void 0
          , e = a.j;
        if (d) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var f;
                if (b.length && vd(f = b[b.length - 1]))
                    for (var g = 0; g < d.length; g++)
                        if (d[g] >= e) {
                            Object.assign(b[b.length - 1] = {}, f);
                            break
                        }
            }
            e = b;
            c = !c;
            f = a.j;
            var h;
            for (g = 0; g < d.length; g++) {
                var k = d[g];
                if (k < f) {
                    k += a.h;
                    var m = e[k];
                    null == m ? e[k] = c ? xd : qd([]) : c && m !== xd && kd(m)
                } else
                    h || (m = void 0,
                    e.length && vd(m = e[e.length - 1]) ? h = m : e.push(h = {})),
                    m = h[k],
                    null == h[k] ? h[k] = c ? xd : qd([]) : c && m !== xd && kd(m)
            }
        }
        return b
    }
    ;function oe(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(),
        a[b] = c);
        return Array.isArray(c) && (pe in c || qe in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    }
    var re = Symbol();
    function se(a) {
        var b = a[re];
        if (!b) {
            var c = te(a);
            b = function(d, e) {
                return ue(d, e, c)
            }
            ;
            a[re] = b
        }
        return b
    }
    var qe = Symbol();
    function ve(a) {
        return a.g
    }
    function we(a, b) {
        var c = se(b)
          , d = te(b).g
          , e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d, c)
        }
    }
    function te(a) {
        var b = a[qe];
        if (b)
            return b;
        a: {
            b = a[qe] = {};
            var c = ve
              , d = we;
            b.g = a[0];
            var e = 1;
            if (a.length > e && "number" !== typeof a[e]) {
                var f = a[e++];
                if (Array.isArray(f)) {
                    b.j = f[0];
                    b.h = f[1];
                    break a
                }
                b.h = f
            }
            for (; e < a.length; ) {
                f = a[e++];
                for (var g = e + 1; g < a.length && "number" !== typeof a[g]; )
                    g++;
                var h = a[e++];
                g -= e;
                switch (g) {
                case 0:
                    b[f] = c(h);
                    break;
                case 1:
                    (g = oe(a, e)) ? (e++,
                    b[f] = d(h, g)) : b[f] = c(h, a[e++]);
                    break;
                case 2:
                    g = b;
                    var k = e++;
                    k = oe(a, k);
                    g[f] = d(h, k, a[e++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + g);
                }
            }
        }
        pe in a && qe in a && (a.length = 0);
        return b
    }
    var pe = Symbol();
    function xe(a, b) {
        var c = a[b];
        if (c)
            return c;
        if (c = a.h)
            if (c = c[b]) {
                var d = c.Jh
                  , e = c.Qh.g;
                if (d) {
                    var f = se(d)
                      , g = te(d).g;
                    c = function(h, k, m) {
                        return e(h, k, m, g, f)
                    }
                } else
                    c = e;
                return a[b] = c
            }
    }
    function ue(a, b, c) {
        for (var d = a.ba, e = a.h, f = d.length, g = 0 === e ? 1 : 0; g < f; g++) {
            var h = d[g];
            if (null != h)
                if (g === f - 1 && vd(h))
                    for (var k in h) {
                        var m = +k;
                        if (!Number.isNaN(m) && null != h[k]) {
                            var n = xe(c, m);
                            n && n(b, a, m)
                        }
                    }
                else
                    h = g - e,
                    (m = xe(c, h)) && m(b, a, h)
        }
        if (a = a.o)
            for (dd(b, b.g.end()),
            c = 0; c < a.length; c++)
                dd(b, a[c].g(Lc) || Kc || (Kc = new Uint8Array(0)))
    }
    function ye(a) {
        return new hd(a)
    }
    function ze(a, b, c) {
        b = C(b, c);
        null != b && ("string" === typeof b && Xc(b),
        null != b && (ed(a, c, 0),
        "number" === typeof b ? (a = a.g,
        Oc(b),
        Zc(a, Mc, Nc)) : (c = Xc(b),
        Zc(a.g, c.h, c.g))))
    }
    function Ae(a, b, c) {
        b = Ad(C(b, c));
        null != b && null != b && (ed(a, c, 0),
        ad(a.g, b))
    }
    var Be = ye(function(a, b, c) {
        b = Kd(b, c);
        if (null != b) {
            ed(a, c, 1);
            a = a.g;
            var d = +b;
            if (0 === d)
                Nc = 0 < 1 / d ? 0 : 2147483648,
                Mc = 0;
            else if (isNaN(d))
                Nc = 2147483647,
                Mc = 4294967295;
            else if (d = (c = 0 > d ? -2147483648 : 0) ? -d : d,
            1.7976931348623157E308 < d)
                Nc = (c | 2146435072) >>> 0,
                Mc = 0;
            else if (2.2250738585072014E-308 > d)
                b = d / Math.pow(2, -1074),
                Nc = (c | b / 4294967296) >>> 0,
                Mc = b >>> 0;
            else {
                var e = d;
                b = 0;
                if (2 <= e)
                    for (; 2 <= e && 1023 > b; )
                        b++,
                        e /= 2;
                else
                    for (; 1 > e && -1022 < b; )
                        e *= 2,
                        b--;
                d *= Math.pow(2, -b);
                Nc = (c | b + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                Mc = 4503599627370496 * d >>> 0
            }
            bd(a, Mc);
            bd(a, Nc)
        }
    })
      , Ce = ye(function(a, b, c) {
        b = Kd(b, c);
        if (null != b) {
            ed(a, c, 5);
            a = a.g;
            var d = +b;
            0 === d ? 0 < 1 / d ? Mc = Nc = 0 : (Nc = 0,
            Mc = 2147483648) : isNaN(d) ? (Nc = 0,
            Mc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d,
            3.4028234663852886E38 < d ? (Nc = 0,
            Mc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)),
            Nc = 0,
            Mc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2),
            d *= Math.pow(2, -b),
            d = Math.round(8388608 * d),
            16777216 <= d && ++b,
            Nc = 0,
            Mc = (c | b + 127 << 23 | d & 8388607) >>> 0));
            bd(a, Mc)
        }
    })
      , De = ye(ze)
      , Ee = ye(ze)
      , Fe = ye(function(a, b, c) {
        b = C(b, c);
        null != b && ("string" === typeof b && Uc(b),
        null != b && (ed(a, c, 0),
        "number" === typeof b ? (a = a.g,
        Oc(b),
        Zc(a, Mc, Nc)) : (c = Uc(b),
        Zc(a.g, c.h, c.g))))
    })
      , Ge = ye(Ae)
      , He = ye(Ae)
      , Ie = ye(function(a, b, c) {
        b = zd(C(b, c));
        null != b && (ed(a, c, 0),
        a.g.g.push(b ? 1 : 0))
    })
      , Je = ye(function(a, b, c) {
        b = C(b, c);
        if (null != b) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            if (eb) {
                if (d && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))
                    throw Error("Found an unpaired surrogate");
                b = (db || (db = new TextEncoder)).encode(b)
            } else {
                for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
                    var h = b.charCodeAt(g);
                    if (128 > h)
                        f[e++] = h;
                    else {
                        if (2048 > h)
                            f[e++] = h >> 6 | 192;
                        else {
                            if (55296 <= h && 57343 >= h) {
                                if (56319 >= h && g < b.length) {
                                    var k = b.charCodeAt(++g);
                                    if (56320 <= k && 57343 >= k) {
                                        h = 1024 * (h - 55296) + k - 56320 + 65536;
                                        f[e++] = h >> 18 | 240;
                                        f[e++] = h >> 12 & 63 | 128;
                                        f[e++] = h >> 6 & 63 | 128;
                                        f[e++] = h & 63 | 128;
                                        continue
                                    } else
                                        g--
                                }
                                if (d)
                                    throw Error("Found an unpaired surrogate");
                                h = 65533
                            }
                            f[e++] = h >> 12 | 224;
                            f[e++] = h >> 6 & 63 | 128
                        }
                        f[e++] = h & 63 | 128
                    }
                }
                b = e === f.length ? f : f.subarray(0, e)
            }
            ed(a, c, 2);
            $c(a.g, b.length);
            dd(a, a.g.end());
            dd(a, b)
        }
    })
      , Ke = ye(function(a, b, c, d, e) {
        b = Pd(b, d, c);
        null != b && (c = fd(a, c),
        e(b, a),
        gd(a, c))
    })
      , Le = ye(function(a, b, c, d, e) {
        b = Sd(b, d, c, 1, z(b.ba));
        if (null != b)
            for (d = 0; d < b.length; d++) {
                var f = fd(a, c);
                e(b[d], a);
                gd(a, f)
            }
    })
      , Me = ye(function(a, b, c) {
        b = Dd(C(b, c));
        null != b && (b = parseInt(b, 10),
        ed(a, c, 0),
        ad(a.g, b))
    });
    function Ne(a) {
        return function() {
            var b = new cd;
            ue(this, b, te(a));
            dd(b, b.g.end());
            for (var c = new Uint8Array(b.h), d = b.j, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.j = [c];
            return c
        }
    }
    function Oe(a) {
        return function(b) {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b = de(a, rd(b))
            }
            return b
        }
    }
    ;var Re = function(a, b) {
        this.g = a === Pe && b || "";
        this.h = Qe
    };
    Re.prototype.xb = !0;
    Re.prototype.fb = function() {
        return this.g
    }
    ;
    var Se = function(a) {
        return a instanceof Re && a.constructor === Re && a.h === Qe ? a.g : "type_error:Const"
    }
      , Qe = {}
      , Pe = {};
    var Te = function() {}
      , Ue = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
      , Ve = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
      , We = function(a) {
        var b = 0
          , c = !1
          , d = []
          , e = function() {
            b = 0;
            c && (c = !1,
            f())
        }
          , f = function() {
            b = u.setTimeout(e, 1E3);
            var g = d;
            d = [];
            a.apply(void 0, g)
        };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var Xe = Ue(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function Ye(a) {
        return a ? a.passive && Xe() ? a : a.capture || !1 : !1
    }
    var Ze = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ye(d)),
        !0) : !1
    }
      , $e = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Ye())
    };
    function af(a) {
        a && "function" == typeof a.V && a.V()
    }
    ;var E = function() {
        this.K = this.K;
        this.H = this.H
    };
    E.prototype.K = !1;
    E.prototype.va = function() {
        return this.K
    }
    ;
    E.prototype.V = function() {
        this.K || (this.K = !0,
        this.M())
    }
    ;
    var cf = function(a, b) {
        bf(a, Xa(af, b))
    }
      , bf = function(a, b) {
        a.K ? b() : (a.H || (a.H = []),
        a.H.push(b))
    };
    E.prototype.M = function() {
        if (this.H)
            for (; this.H.length; )
                this.H.shift()()
    }
    ;
    var df = function() {
        var a;
        this.g = a = void 0 === a ? {} : a
    };
    df.prototype.reset = function() {
        this.g = {}
    }
    ;
    var ef = fc || ic;
    function ff(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function gf(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function hf(a) {
        var b = jf, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function kf(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function lf(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function mf(a, b) {
        var c = Oa(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a)
                return;
            a = a[d[c]]
        }
        return a
    }
    function nf(a, b) {
        return null !== a && b in a
    }
    function of(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function pf(a) {
        var b = qf, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
    function rf(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function sf(a) {
        for (var b in a)
            delete a[b]
    }
    function tf(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var uf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function vf(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < uf.length; f++)
                c = uf[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var wf, xf = function() {
        if (void 0 === wf) {
            var a = null
              , b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ab,
                        createScript: ab,
                        createScriptURL: ab
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                wf = a
            } else
                wf = a
        }
        return wf
    };
    var yf = function(a) {
        this.g = a
    };
    yf.prototype.toString = function() {
        return this.g + ""
    }
    ;
    yf.prototype.xb = !0;
    yf.prototype.fb = function() {
        return this.g.toString()
    }
    ;
    var zf = function(a) {
        return a instanceof yf && a.constructor === yf ? a.g : "type_error:TrustedResourceUrl"
    }
      , Af = {}
      , Bf = function(a) {
        var b = xf();
        a = b ? b.createScriptURL(a) : a;
        return new yf(a,Af)
    };
    var Cf = function(a) {
        this.g = a
    };
    Cf.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    Cf.prototype.xb = !0;
    Cf.prototype.fb = function() {
        return this.g.toString()
    }
    ;
    var Df = function(a) {
        return a instanceof Cf && a.constructor === Cf ? a.g : "type_error:SafeUrl"
    }, Ef;
    try {
        new URL("s://g"),
        Ef = !0
    } catch (a) {
        Ef = !1
    }
    var Ff = Ef
      , Gf = {}
      , Hf = function(a) {
        return new Cf(a,Gf)
    }
      , If = Hf("about:invalid#zClosurez");
    var Jf = {}
      , Kf = function(a) {
        this.g = a;
        this.xb = !0
    };
    Kf.prototype.fb = function() {
        return this.g
    }
    ;
    Kf.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var Lf = new Kf("",Jf);
    var Mf = {}
      , Nf = function(a) {
        this.g = a;
        this.xb = !0
    };
    Nf.prototype.fb = function() {
        return this.g.toString()
    }
    ;
    Nf.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var Of = function(a) {
        return a instanceof Nf && a.constructor === Nf ? a.g : "type_error:SafeHtml"
    }
      , Pf = function(a) {
        var b = xf();
        a = b ? b.createHTML(a) : a;
        return new Nf(a,Mf)
    };
    var Qf = /^[\w+/_-]+[=]{0,2}$/
      , Rf = function(a, b) {
        b = (b || u).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Qf.test(a) ? a : "" : ""
    };
    var Sf = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    Sf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    Sf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    Sf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    Sf.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    var F = function(a, b) {
        this.width = a;
        this.height = b
    };
    l = F.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    l.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    var Tf = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
      , Uf = function(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }
      , Vf = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
      , Wf = function(a) {
        return null == a ? "" : String(a)
    }
      , Xf = 2147483648 * Math.random() | 0
      , Yf = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , Zf = function() {
        return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
    }
      , $f = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
      , ag = function(a) {
        isFinite(a) && (a = String(a));
        return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    var dg = function(a) {
        return a ? new bg(cg(a)) : cb || (cb = new bg)
    }
      , eg = function(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }
      , gg = function(a, b) {
        ff(b, function(c, d) {
            c && "object" == typeof c && c.xb && (c = c.fb());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : fg.hasOwnProperty(d) ? a.setAttribute(fg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
      , fg = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , ig = function(a) {
        a = a.document;
        a = hg(a) ? a.documentElement : a.body;
        return new F(a.clientWidth,a.clientHeight)
    }
      , jg = function(a) {
        var b = a.scrollingElement ? a.scrollingElement : !ic && hg(a) ? a.documentElement : a.body || a.documentElement;
        a = a.parentWindow || a.defaultView;
        return fc && a.pageYOffset != b.scrollTop ? new Sf(b.scrollLeft,b.scrollTop) : new Sf(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
      , G = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
      , mg = function(a, b, c) {
        var d = arguments
          , e = document
          , f = d[1]
          , g = kg(e, String(d[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : gg(g, f));
        2 < d.length && lg(e, g, d, 2);
        return g
    }
      , lg = function(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Oa(f) || Pa(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Pa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Hb(g ? Vb(f) : f, e)
            }
        }
    }
      , kg = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
      , hg = function(a) {
        return "CSS1Compat" == a.compatMode
    }
      , ng = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
      , og = function(a) {
        var b;
        if (ef && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return Pa(b) && 1 == b.nodeType ? b : null
    }
      , pg = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , cg = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , qg = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? G(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
      , rg = function(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
      , bg = function(a) {
        this.g = a || u.document || document
    };
    bg.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    bg.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    bg.prototype.append = function(a, b) {
        lg(cg(a), a, arguments, 1)
    }
    ;
    bg.prototype.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    var tg = function() {
        return pb && tb ? tb.mobile : !sg() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
    }
      , sg = function() {
        return pb && tb ? !tb.mobile && (x("iPad") || x("Android") || x("Silk")) : x("iPad") || x("Android") && !x("Mobile") || x("Silk")
    };
    var ug = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , vg = function(a) {
        var b = a.match(ug);
        a = b[1];
        var c = b[3];
        b = b[4];
        var d = "";
        a && (d += a + ":");
        c && (d = d + "//" + c,
        b && (d += ":" + b));
        return d
    }
      , wg = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Tf(e) : "")
            }
        }
    }
      , xg = /#|$/
      , yg = function(a, b) {
        var c = a.search(xg);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return Tf(a.slice(d, -1 !== e ? e : 0))
    };
    var zg = function(a) {
        var b = []
          , c = []
          , d = {}
          , e = function(f, g) {
            var h = g + "  ";
            try {
                if (void 0 === f)
                    b.push("undefined");
                else if (null === f)
                    b.push("NULL");
                else if ("string" === typeof f)
                    b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                else if ("function" === typeof f)
                    b.push(String(f).replace(/\n/g, "\n" + g));
                else if (Pa(f)) {
                    f[Qa] || c.push(f);
                    var k = Sa(f);
                    if (d[k])
                        b.push("*** reference loop detected (id=" + k + ") ***");
                    else {
                        d[k] = !0;
                        b.push("{");
                        for (var m in f)
                            "function" !== typeof f[m] && (b.push("\n"),
                            b.push(h),
                            b.push(m + " = "),
                            e(f[m], h));
                        b.push("\n" + g + "}");
                        delete d[k]
                    }
                } else
                    b.push(f)
            } catch (n) {
                b.push("*** " + n + " ***")
            }
        };
        e(a, "");
        for (a = 0; a < c.length; a++)
            Ta(c[a]);
        return b.join("")
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Ag;
    try {
        new URL("s://g"),
        Ag = !0
    } catch (a) {
        Ag = !1
    }
    var Bg = Ag;
    function Cg(a, b) {
        if (1 === a.nodeType) {
            var c = a.tagName;
            if ("SCRIPT" === c || "STYLE" === c)
                throw Error("");
        }
        a.innerHTML = Of(b)
    }
    ;function Dg(a, b) {
        a.src = zf(b);
        var c, d;
        (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    }
    ;function Eg(a, b) {
        a.write(Of(b))
    }
    ;var Fg = function(a) {
        this.vf = a
    };
    function Gg(a) {
        return new Fg(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var Hg = [Gg("data"), Gg("http"), Gg("https"), Gg("mailto"), Gg("ftp"), new Fg(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    var Ig = function(a) {
        try {
            return !!a && null != a.location.href && bc(a, "foo")
        } catch (b) {
            return !1
        }
    }
      , Kg = function(a) {
        var b = void 0 === b ? !1 : b;
        var c = void 0 === c ? u : c;
        for (var d = 0; c && 40 > d++ && (!b && !Ig(c) || !a(c)); )
            c = Jg(c)
    }
      , Lg = function() {
        var a = window;
        Kg(function(b) {
            a = b;
            return !1
        });
        return a
    }
      , Jg = function(a) {
        try {
            var b = a.parent;
            if (b && b != a)
                return b
        } catch (c) {}
        return null
    }
      , Mg = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , Ng = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    function Og(a) {
        var b, c;
        return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : ""
    }
    var Pg = function() {
        var a = u;
        try {
            for (var b = null; b != a; b = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
                }
        } catch (c) {}
        return !0
    }
      , Qg = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , Rg = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (Qg(a, b))
                return a;
            if (!(a = Jg(a)))
                break
        }
        return null
    }
      , Sg = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
      , Tg = function(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            Ig(a) && (b = a);
        return b
    };
    var H = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    H.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    H.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    var Ug = function(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    };
    H.prototype.expand = function(a, b, c, d) {
        Pa(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    H.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    H.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    H.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var Vg = function(a, b, c) {
        b instanceof Sf ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (a.left += b,
        a.right += b,
        "number" === typeof c && (a.top += c,
        a.bottom += c));
        return a
    };
    H.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var Wg = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , Xg = function(a) {
        return new H(a.top,a.left + a.width,a.top + a.height,a.left)
    };
    l = Wg.prototype;
    l.getSize = function() {
        return new F(this.width,this.height)
    }
    ;
    l.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    l.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    l.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    l.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    function Yg(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }
    ;var Zg = function() {
        this.S = {}
    }
      , $g = function() {
        var a = Yg(window);
        if (a) {
            if (a) {
                var b = a.pageViewId;
                a = a.clientId;
                "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6))
            } else
                b = null;
            return +b
        }
        b = Tg(window);
        (a = b.google_global_correlator) || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return a
    }
      , bh = function(a, b) {
        var c = ah[7] || "google_ps_7";
        a = a.S;
        var d = a[c];
        return void 0 === d ? (a[c] = b(),
        a[c]) : d
    }
      , ch = function(a) {
        var b = $g();
        return bh(a, function() {
            return b
        })
    }
      , eh = function() {
        if (dh)
            var a = dh;
        else {
            a = ((a = void 0 === a ? Yg() : a) ? Ig(a.master) ? a.master : null : null) || window;
            var b = a.google_persistent_state_async;
            a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? dh = b : a.google_persistent_state_async = dh = new Zg
        }
        return ch(a)
    }
      , dh = null
      , fh = {}
      , ah = (fh[8] = "google_prev_ad_formats_by_region",
    fh[9] = "google_prev_ad_slotnames_by_region",
    fh);
    var hh = function(a, b, c, d, e) {
        gh(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    };
    function gh(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Sg("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && Rb(a.google_image_requests, f);
                $e(f, "load", g);
                $e(f, "error", g)
            };
            Ze(f, "load", g);
            Ze(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var jh = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Mg(a, function(e, f) {
            if (e || 0 === e)
                d += "&" + f + "=" + encodeURIComponent("" + e)
        });
        ih(d, c)
    }
      , ih = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        },
        d && (b.mode = "cors",
        "setAttributionReporting"in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : hh(c, a, void 0, b, d)
    };
    var kh = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
      , lh = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    function I(a) {
        var b = Ja.apply(1, arguments);
        if (0 === b.length)
            return Bf(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return Bf(c)
    }
    function mh(a, b) {
        var c = zf(a).toString();
        if (/#/.test(c))
            throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
                d = "&")
            }
        });
        return Bf(c)
    }
    ;var nh = p(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , oh = function() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? I(nh) : c;
        this.h = a;
        this.j = !1;
        this.g = null;
        this.o = !1;
        this.B = Math.random();
        this.l = b;
        this.A = this.La;
        this.H = c
    };
    l = oh.prototype;
    l.jd = function(a) {
        this.h = a
    }
    ;
    l.Bc = function(a) {
        this.g = a
    }
    ;
    l.kd = function(a) {
        this.j = a
    }
    ;
    l.ld = function(a) {
        this.o = a
    }
    ;
    l.La = function(a, b, c, d, e) {
        c = void 0 === c ? this.l : c;
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.B : Math.random()) > c)
            return this.j;
        lh(b) || (b = new kh(b,{
            context: a,
            id: e
        }));
        if (d || this.g)
            b.meta = {},
            this.g && this.g(b.meta),
            d && d(b.meta);
        u.google_js_errors = u.google_js_errors || [];
        u.google_js_errors.push(b);
        u.error_rep_loaded || (b = u.document,
        a = Sg("SCRIPT", b),
        Dg(a, this.H),
        (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b),
        u.error_rep_loaded = !0);
        return this.j
    }
    ;
    l.kb = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.A(a, d, this.l, c, this.h))
                throw d;
        }
    }
    ;
    l.fd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ja.apply(0, arguments);
            return e.kb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    var ph = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
      , qh = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    var rh = null;
    function sh() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ya()
    }
    function th() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    function uh(a, b) {
        b = void 0 === b ? u : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    }
    function vh() {
        var a = void 0 === a ? u : a;
        var b = Math.min(uh("domLoading", a) || Infinity, uh("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(uh("responseEnd", a), uh("navigationStart", a)) : b
    }
    ;var wh = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var xh = u.performance
      , yh = !!(xh && xh.mark && xh.measure && xh.clearMarks)
      , zh = Ue(function() {
        var a;
        if (a = yh) {
            var b;
            if (null === rh) {
                rh = "";
                try {
                    a = "";
                    try {
                        a = u.top.location.hash
                    } catch (c) {
                        a = u.location.hash
                    }
                    a && (rh = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = rh;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    })
      , Ah = function(a, b) {
        this.B = [];
        this.g = b || u;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.B = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.j = zh() || (null != c ? c : Math.random() < a)
    };
    Ah.prototype.H = function() {
        this.j = !1;
        this.B != this.g.google_js_reporting_queue && (zh() && Hb(this.B, Bh),
        this.B.length = 0)
    }
    ;
    Ah.prototype.K = function(a) {
        !this.j || 2048 < this.B.length || this.B.push(a)
    }
    ;
    var Bh = function(a) {
        a && xh && zh() && (xh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        xh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Ah.prototype.start = function(a, b) {
        if (!this.j)
            return null;
        a = new wh(a,b,th() || sh());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        xh && zh() && xh.mark(b);
        return a
    }
    ;
    Ah.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (th() || sh()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            xh && zh() && xh.mark(b);
            this.K(a)
        }
    }
    ;
    var Ch = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var Dh = function(a, b, c) {
        Mg(b, function(d, e) {
            var f = c && c[e];
            !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)),
            c && (c[e] = !0))
        });
        return a
    }
      , Kh = function(a, b, c, d, e, f, g, h) {
        f = void 0 === f ? Infinity : f;
        g = void 0 === g ? !1 : g;
        Ah.call(this, a, h);
        var k = this;
        this.D = 0;
        this.L = f;
        this.Z = b;
        this.J = c;
        this.Y = d;
        this.ga = e;
        a = this.g.navigator;
        this.X = !("csi.gstatic.com" !== this.J || !a || !a.sendBeacon);
        this.l = {};
        this.I = {};
        this.g.performance && this.g.performance.now || Eh(this, "dat", 1);
        a && a.deviceMemory && Eh(this, "dmc", a.deviceMemory);
        this.g === this.g.top && Eh(this, "top", 1);
        this.U = !g;
        this.O = function() {
            k.g.setTimeout(function() {
                return Fh(k)
            }, 1100)
        }
        ;
        this.ca = [];
        this.T = function() {
            Eh(k, "uet", 2);
            for (var n = q(k.ca), r = n.next(); !r.done; r = n.next()) {
                r = r.value;
                try {
                    r()
                } catch (y) {}
            }
            n = k.g;
            var v = void 0 === v ? {} : v;
            "function" === typeof window.CustomEvent ? r = new CustomEvent("rum_blp",v) : (r = document.createEvent("CustomEvent"),
            r.initCustomEvent("rum_blp", !!v.bubbles, !!v.cancelable, v.detail));
            n.dispatchEvent(r);
            Fh(k);
            null != k.l.uet && (k.o -= 3 + k.l.uet.length + 2,
            delete k.l.uet)
        }
        ;
        this.ka = We(function() {
            Fh(k)
        });
        this.ta = function() {
            var n = k.g.document;
            (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && k.ka()
        }
        ;
        this.F = this.g.setTimeout(function() {
            return Fh(k)
        }, 5E3);
        this.A = {};
        this.o = b.length + c.length + d.length + e.length + 3;
        this.h = 0;
        Hb(this.B, function(n) {
            return Gh(k, n)
        });
        this.G = [];
        b = Ch(this.g);
        var m = function(n) {
            var r = n[0];
            n = n[1];
            var v = r.length + n.length + 2;
            8E3 < k.o + k.h + v && Fh(k);
            k.G.push([r, n]);
            k.h += v;
            Hh(k);
            return 0
        };
        Hb(b, function(n) {
            return m(n)
        });
        b.length = 0;
        b.push = m;
        Ih(this);
        Jh(this)
    };
    t(Kh, Ah);
    var Jh = function(a) {
        "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
            return Fh(a)
        }, 0) : Ze(a.g, "load", a.O);
        var b = qh(a.g.document);
        "undefined" !== typeof b && Ze(a.g, b, a.ta);
        Ze(a.g, "pagehide", a.T)
    }
      , Eh = function(a, b, c) {
        c = String(c);
        a.o = null != a.l[b] ? a.o + (c.length - a.l[b].length) : a.o + (b.length + c.length + 2);
        a.l[b] = c
    }
      , Nh = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        var f = Lh(a, b, c, d, e);
        8E3 < a.o + a.h + f && (Fh(a),
        f = b.length + c.length + 2);
        Mh(a, b, c, d, e);
        a.h += f;
        Hh(a)
    }
      , Lh = function(a, b, c, d, e) {
        return null == a.A[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.A[b].length
    }
      , Mh = function(a, b, c, d, e) {
        a.A[b] = d && null != a.A[b] ? a.A[b] + ("" + (void 0 === e ? "" : e) + c) : c
    }
      , Hh = function(a) {
        6E3 <= a.o + a.h && Fh(a)
    }
      , Fh = function(a) {
        if (a.j && a.U) {
            try {
                if (a.h) {
                    var b = a.A;
                    a.D++;
                    var c = Oh(a, b);
                    b = !1;
                    try {
                        b = !!(a.X && a.g.navigator && a.g.navigator.sendBeacon(c, null))
                    } catch (d) {
                        a.X = !1
                    }
                    b || hh(a.g, c);
                    Ih(a);
                    a.D === a.L && a.H()
                }
            } catch (d) {
                (new oh).La(358, d)
            }
            a.A = {};
            a.h = 0;
            a.B.length = 0;
            a.g.clearTimeout(a.F);
            a.F = 0
        }
    }
      , Oh = function(a, b) {
        var c = a.Z + "//" + a.J + a.Y + a.ga
          , d = {};
        c = Dh(c, a.l, d);
        c = Dh(c, b, d);
        b = a.g;
        b.google_timing_params && (c = Dh(c, b.google_timing_params, d),
        b.google_timing_params = void 0);
        Hb(a.G, function(e) {
            var f = q(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = Dh(c, (g[e] = f,
            g))
        });
        a.G.length = 0;
        return c
    }
      , Ih = function(a) {
        Eh(a, "puid", (a.D + 1).toString(36) + "~" + Ya().toString(36))
    }
      , Gh = function(a, b) {
        var c = "met." + b.type
          , d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value
          , e = Math.round(b.duration);
        b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
        Nh(a, c, b, !0, "~")
    };
    Kh.prototype.K = function(a) {
        this.j && this.D < this.L && (Ah.prototype.K.call(this, a),
        Gh(this, a))
    }
    ;
    Kh.prototype.H = function() {
        Ah.prototype.H.call(this);
        this.g.clearTimeout(this.F);
        this.h = this.F = 0;
        this.A = {};
        sf(this.I);
        sf(this.l);
        $e(this.g, "load", this.O);
        $e(this.g, "pagehide", this.T)
    }
    ;
    var J = function(a) {
        var b = "gb";
        if (a.gb && a.hasOwnProperty(b))
            return a.gb;
        b = new a;
        return a.gb = b
    };
    var K = function() {
        this.g = new Kh(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);
        var a = eh();
        null != a && Eh(this.g, "c", a);
        a = parseInt(this.g.l.c, 10) / 2;
        null != a && Eh(this.g, "slotId", a)
    }
      , L = function(a, b, c) {
        if (null != c) {
            a = a.g;
            var d = b + "=" + c;
            a.I[d] || (Nh(a, b, c, !1),
            1E3 > d.length && (a.I[d] = !0))
        }
    }
      , Ph = function(a, b) {
        for (var c in b)
            b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
        a = a.g;
        c = !1;
        var d = 0, e;
        for (e in b)
            null != a.A[e] && (c = !0),
            d += Lh(a, e, b[e], !1);
        (8E3 < a.o + a.h + d || c) && Fh(a);
        for (var f in b)
            Mh(a, f, b[f], !1);
        a.h += d;
        Hh(a)
    }
      , Qh = function(a) {
        var b = K.g().g;
        b.j && b.K(new wh(a,4,sh() - 0,0))
    };
    K.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; void 0 != d && d != document.documentElement; ) {
            var g = void 0
              , h = void 0;
            if ((null == (g = d) ? 0 : g.getAttribute("data-ck-navigates")) || (null == (h = d) ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = null != (g = null == (f = d) ? void 0 : f.getAttribute("data-ck-navigates")) ? g : !1;
                h = g = void 0;
                f = null != (h = null == (g = d) ? void 0 : g.getAttribute("data-ck-tag")) ? h : "notag";
                break
            }
            g = void 0;
            d = null != (g = d.parentElement) ? g : void 0
        }
        d = this.g;
        d.j && d.K(new wh(a + "_" + b + "x" + c + "|" + e + "|" + f,4,sh(),0))
    }
    ;
    K.g = function() {
        return J(K)
    }
    ;
    var Rh = function(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
      , Sh = function(a) {
        try {
            return u.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (Rh(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , Uh = function() {
        this.g = Th
    }
      , Vh = function(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Vh(a, a.g ? a.g.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        Wh(d, c),
                        c.push(":"),
                        Vh(a, a.g ? a.g.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Wh(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , Xh = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\u000b"
    }
      , Yh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
      , Wh = function(a, b) {
        b.push('"', a.replace(Yh, function(c) {
            var d = Xh[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1),
            Xh[c] = d);
            return d
        }), '"')
    };
    var Zh = function() {
        this.j = null;
        this.g = "missing-id";
        this.h = !1
    }
      , ai = function(a) {
        var b = null;
        try {
            b = document.getElementsByClassName("lima-exp-data")
        } catch (c) {
            return $h("missing-element", a.g),
            null
        }
        if (1 < b.length)
            return $h("multiple-elements", a.g),
            null;
        b = b[0];
        return b ? b.innerHTML : ($h("missing-element", a.g),
        null)
    }
      , ci = function() {
        var a = bi
          , b = ai(a);
        if (null !== b)
            if (Rh(b)) {
                var c = JSON.parse(b);
                b = c.experimentIds;
                var d = c.binaryIdentifier;
                c = c.adEventId;
                var e = "string" === typeof d;
                if ("string" == typeof c) {
                    var f = K.g();
                    null != c && Eh(f.g, "qqid", c)
                }
                e && (a.g = d);
                "string" !== typeof b ? $h("missing-flags", a.g) : (e || $h("missing-binary-id", a.g),
                a.j = b)
            } else
                $h("invalid-json", a.g)
    };
    Zh.prototype.reset = function() {
        this.j = null;
        this.g = "missing-id"
    }
    ;
    var ei = function(a, b, c, d, e) {
        this.id = a;
        this.C = b;
        this.o = c;
        this.g = !1;
        this.j = d;
        this.h = e;
        this.o && di(this)
    }
      , fi = function(a) {
        return a.g || a.o
    }
      , di = function(a) {
        if (a.j && a.h) {
            var b = a.j;
            b && Object.assign(a.h.g, b)
        }
    }
      , gi = function() {
        this.g = []
    }
      , hi = function() {
        this.g = new Map;
        this.h = !1;
        this.l = new gi;
        this.A = new ei(0,0,!1);
        this.j = [this.l];
        this.o = new df
    }
      , M = function(a) {
        var b = ii;
        if (b.h || b.g.has(a.id) || null == a.C && null == a.control || 0 == a.Te)
            return b.A;
        var c = b.l;
        if (null != a.control)
            for (var d = q(b.j), e = d.next(); !e.done; e = d.next()) {
                if (e = e.value,
                e.g.includes(a.control)) {
                    c = e;
                    break
                }
            }
        else
            null != a.W && (c = a.W);
        d = 0;
        null != a.control ? d = a.control.C : null != a.C && (d = a.C);
        a = new ei(a.id,d,!!a.Oh,a.flags,b.o);
        c.g.push(a);
        b.j.includes(c) || b.j.push(c);
        b.g.set(a.id, a);
        return a
    }
      , ji = function() {
        var a = ii;
        return [].concat(ia(a.g.keys())).filter(function(b) {
            return fi(this.g.get(b))
        }, a)
    }
      , ki = function(a) {
        var b = ii;
        b.h || (a.g(b.j, b.g),
        b.h = !0)
    };
    hi.prototype.reset = function() {
        for (var a = q(this.g), b = a.next(); !b.done; b = a.next())
            b = q(b.value),
            b.next(),
            b.next().value.g = !1;
        this.h = !1;
        this.o.reset()
    }
    ;
    var ii = new hi
      , mi = function() {
        return li.g.filter(function(a) {
            return fi(a)
        }).map(function(a) {
            return a.id
        })
    };
    var ni = function() {};
    ni.prototype.g = function(a) {
        a = q(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0
              , d = Math.floor(1E3 * Math.random());
            b = q(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value,
                c += e.C,
                d < c) {
                    e.g = !0;
                    di(e);
                    break
                }
        }
    }
    ;
    var oi = function(a) {
        D.call(this, a)
    };
    t(oi, D);
    oi.wa = [2, 8];
    var pi = [3, 4, 5];
    var qi = function(a) {
        D.call(this, a)
    };
    t(qi, D);
    qi.wa = [4];
    var ri = function(a) {
        D.call(this, a)
    };
    t(ri, D);
    ri.wa = [5];
    var si = [1, 2, 3, 6, 7];
    var ti = function(a) {
        D.call(this, a)
    };
    t(ti, D);
    ti.prototype.getId = function() {
        return $d(this, 1)
    }
    ;
    ti.wa = [2];
    var ui = function(a) {
        D.call(this, a)
    };
    t(ui, D);
    ui.wa = [2];
    var vi = function(a) {
        D.call(this, a)
    };
    t(vi, D);
    vi.wa = [2];
    var wi = function(a) {
        D.call(this, a)
    };
    t(wi, D);
    wi.wa = [1, 4, 2, 3];
    function xi(a, b) {
        switch (b) {
        case 1:
            return be(a, 1, si);
        case 2:
            return be(a, 2, si);
        case 3:
            return be(a, 3, si);
        case 6:
            return be(a, 6, si);
        default:
            return null
        }
    }
    function yi(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return Zd(a, 1);
        case 7:
            return Yd(C(a, 3), "");
        case 2:
            var c = void 0 === c ? 0 : c;
            return Yd(Kd(a, 2), c);
        case 3:
            return Yd(C(a, 3), "");
        case 6:
            return Ld(a, 4, Fd);
        default:
            return null
        }
    }
    ;var zi = {}
      , Ai = (zi[47] = zc,
    zi);
    function Bi() {
        var a = Ci
          , b = Td(new wi(Di), vi, 2);
        1 == b.length && 16 == ae(b[0], 1) && Td(b[0], ui, 2).forEach(function(c) {
            var d = Yd(Bd(C(c, 1)), 0)
              , e = Rd(c, oi, 3)
              , f = a[ae(c, 4)];
            Td(c, ti, 2).forEach(function(g) {
                var h = d || $d(g, 4)
                  , k = g.getId()
                  , m = e || Rd(g, oi, 3);
                m = m ? be(m, 3, pi) : null;
                m = Ai[m];
                g = Ei(Td(g, ri, 2));
                M({
                    id: k,
                    C: h,
                    W: f,
                    Te: m,
                    flags: g
                })
            })
        })
    }
    function Ei(a) {
        if (a.length) {
            var b = {};
            a.forEach(function(c) {
                var d = Od(c, si)
                  , e = Rd(c, qi, 4);
                e && (c = xi(c, d),
                d = yi(e, d),
                b[c] = d)
            });
            return b
        }
    }
    ;var Fi = function(a) {
        this.h = a
    };
    Fi.prototype.g = function(a, b) {
        a = q(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value))
                c.g = !0,
                di(c)
    }
    ;
    var Gi = function(a, b) {
        this.h = a;
        this.j = b
    };
    t(Gi, Fi);
    Gi.prototype.g = function(a, b) {
        Fi.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = q(this.h), e = d.next(); !e.done; e = d.next())
            e = e.value,
            b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        L(K.g(), "sei", b);
        L(K.g(), "nsei", a);
        L(K.g(), "bi", this.j)
    }
    ;
    var Hi = function() {
        Zh.apply(this, arguments)
    };
    t(Hi, Zh);
    var $h = function(a, b) {
        var c = K.g();
        L(c, "eee", a);
        L(c, "bi", b)
    };
    Hi.g = function() {
        return J(Hi)
    }
    ;
    function Ii() {
        return Ji.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    }
    ;var li = new gi
      , Ki = new gi
      , Li = new gi
      , Mi = new gi
      , Ni = new gi
      , Oi = new gi
      , Pi = new gi
      , Qi = new gi
      , Ri = new gi
      , Si = new gi
      , Ti = new gi
      , Ui = new gi
      , Vi = new gi
      , Wi = new gi
      , Xi = new gi
      , Yi = new gi;
    M({
        id: 45786216,
        C: 10
    });
    M({
        id: 318475490,
        C: 0
    });
    M({
        id: 324123032,
        C: 0
    });
    M({
        id: 418572103,
        C: 0
    });
    M({
        id: 420706097,
        C: 10
    });
    M({
        id: 420706098,
        C: 10
    });
    M({
        id: 21062100,
        C: 0
    });
    M({
        id: 420706105,
        C: 0
    });
    M({
        id: 420706106,
        C: 0
    });
    M({
        id: 21064018,
        C: 0
    });
    M({
        id: 21064020,
        C: 0
    });
    M({
        id: 21064022,
        C: 0
    });
    M({
        id: 21064024,
        C: 0
    });
    M({
        id: 21064075,
        C: 0
    });
    M({
        id: 21064201,
        C: 0
    });
    M({
        id: 420706142,
        C: 0
    });
    M({
        id: 21064347,
        C: 0
    });
    M({
        id: 44745813,
        C: 0
    });
    M({
        id: 44746068,
        C: 0
    });
    M({
        id: 21064565,
        C: 0
    });
    M({
        id: 21064567,
        C: 0
    });
    M({
        id: 418572006,
        C: 10
    });
    M({
        id: 44768716,
        C: 10,
        W: Vi
    });
    var Zi = M({
        id: 44768717,
        C: 10,
        W: Vi
    })
      , $i = M({
        id: 44787137,
        C: 10,
        W: Vi
    })
      , aj = M({
        id: 44744588,
        C: 10
    })
      , bj = M({
        id: 44747319,
        C: 10
    });
    M({
        id: 44740339,
        C: 10
    });
    var cj = M({
        id: 44740340,
        C: 10
    });
    M({
        id: 44749839,
        C: 0
    });
    var dj = M({
        id: 44749840,
        C: 0
    });
    M({
        id: 44749841,
        C: 0
    });
    var ej = M({
        id: 44749842,
        C: 0
    });
    M({
        id: 44749843,
        C: 1
    });
    var fj = M({
        id: 44749844,
        C: 1
    });
    M({
        id: 44749845,
        C: 1
    });
    var gj = M({
        id: 44749846,
        C: 1
    });
    M({
        id: 44714743,
        C: 0
    });
    M({
        id: 44719216,
        C: 0
    });
    M({
        id: 44730895,
        C: 10
    });
    M({
        id: 44730896,
        C: 10
    });
    M({
        id: 44736292,
        C: 10
    });
    M({
        id: 44736293,
        C: 10
    });
    M({
        id: 44772138,
        C: 0,
        W: Ni
    });
    M({
        id: 44772139,
        W: Ni,
        C: 1E3
    });
    M({
        id: 31061774,
        C: 10
    });
    var hj = M({
        id: 31061775,
        C: 10
    });
    M({
        id: 44715336,
        C: 10
    });
    M({
        id: 44729309,
        C: 10
    });
    M({
        id: 75259410,
        C: 0
    });
    M({
        id: 75259412,
        C: 0
    });
    M({
        id: 75259413,
        C: 0
    });
    M({
        id: 44773378,
        C: 50,
        W: Li
    });
    var ij = M({
        id: 44773379,
        C: 50,
        W: Li
    });
    M({
        id: 44724516,
        C: 0
    });
    M({
        id: 44726389,
        C: 10
    });
    M({
        id: 44752711,
        C: 50
    });
    M({
        id: 44752052,
        C: 50
    });
    M({
        id: 44752657,
        C: 50
    });
    M({
        id: 44781407,
        W: Mi,
        C: 0
    });
    M({
        id: 44781408,
        W: Mi,
        C: 0
    });
    M({
        id: 44781409,
        W: Mi,
        C: 1E3
    });
    M({
        id: 44777647,
        W: Oi,
        C: 0
    });
    M({
        id: 44777648,
        W: Oi,
        C: 0
    });
    M({
        id: 44777649,
        W: Oi,
        C: 1E3
    });
    M({
        id: 44781752,
        W: Qi,
        C: 10
    });
    M({
        id: 44781753,
        W: Qi,
        C: 990
    });
    M({
        id: 44782990,
        W: Ri,
        C: 10
    });
    M({
        id: 44782991,
        W: Ri,
        C: 990
    });
    M({
        id: 44727953,
        C: 0
    });
    M({
        id: 44729911,
        C: 0
    });
    M({
        id: 44782089,
        W: Pi,
        C: 10
    });
    M({
        id: 44782090,
        W: Pi,
        C: 10
    });
    M({
        id: 44730425,
        C: 0
    });
    M({
        id: 44730426,
        C: 0
    });
    M({
        id: 44733246,
        C: 10
    });
    M({
        id: 44750823,
        C: 10,
        W: Ti
    });
    M({
        id: 44750824,
        C: 10,
        W: Ti
    });
    M({
        id: 44750822,
        C: 10,
        W: Ti
    });
    M({
        id: 44737473,
        C: 0,
        W: Ki
    });
    M({
        id: 44771450,
        C: 0,
        W: Ki
    });
    M({
        id: 44751889,
        C: 10
    });
    M({
        id: 44751890,
        C: 10
    });
    M({
        id: 44752995,
        C: 10
    });
    M({
        id: 44752996,
        C: 10
    });
    M({
        id: 44762627,
        C: 0
    });
    M({
        id: 44762628,
        C: 0
    });
    M({
        id: 44788274,
        C: 0,
        W: Ui
    });
    M({
        id: 44788275,
        C: 1E3,
        W: Ui
    });
    M({
        id: 44752538,
        C: 0
    });
    M({
        id: 44754608,
        C: 10
    });
    M({
        id: 44754609,
        C: 10
    });
    M({
        id: 44770822,
        C: 10
    });
    M({
        id: 44770823,
        C: 10
    });
    M({
        id: 44770824,
        C: 10
    });
    M({
        id: 44770825,
        C: 10
    });
    M({
        id: 75259414,
        C: 0
    });
    M({
        id: 44731964,
        C: 50,
        W: li
    });
    M({
        id: 44731965,
        C: 50,
        W: li
    });
    M({
        id: 44765701,
        C: 1E3,
        W: Wi
    });
    M({
        id: 44767584,
        C: 0
    });
    var jj, kj = (null == (jj = window.document.featurePolicy) ? 0 : jj.allowedFeatures().includes("attribution-reporting")) ? 300 : 0;
    M({
        id: 44776494,
        C: kj,
        W: Xi
    });
    M({
        id: 44776495,
        C: kj,
        W: Xi
    });
    var lj, mj = (null == (lj = window.document.featurePolicy) || lj.allowedFeatures().includes("attribution-reporting"),
    0);
    M({
        id: 44769484,
        C: mj,
        W: Yi
    });
    M({
        id: 44769485,
        C: mj,
        W: Yi
    });
    M({
        id: 44776384,
        C: 0
    });
    M({
        id: 44773331,
        C: 10
    });
    M({
        id: 44773332,
        C: 10
    });
    M({
        id: 44775192,
        C: 10
    });
    M({
        id: 44775193,
        C: 10
    });
    M({
        id: 44783566,
        C: 1
    });
    M({
        id: 45390960,
        C: 1
    });
    M({
        id: 44783518,
        C: 0
    });
    M({
        id: 44783849,
        C: 0
    });
    M({
        id: 44787954,
        C: 0
    });
    M({
        id: 44789282,
        C: 0
    });
    M({
        id: 44792636,
        C: 0
    });
    M({
        id: 75259415,
        C: 0
    });
    var nj = M({
        id: 75259416,
        C: 0
    });
    M({
        id: 44785452,
        C: 10
    });
    M({
        id: 44785453,
        C: 10
    });
    M({
        id: 45401791,
        C: 0
    });
    var oj = {}
      , Ci = (oj[32] = li,
    oj[35] = Si,
    oj);
    Ci = void 0 === Ci ? {} : Ci;
    if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}"))
        try {
            var Di = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
            Di instanceof Array && Bi()
        } catch (a) {
            L(K.g(), "espe", a.message)
        }
    if ("undefined" === typeof window.v8_flag_map) {
        var bi = Hi.g();
        bi.h || (ci(),
        bi.h = !0);
        var Ji = bi.j, pj;
        bi.h || (ci(),
        bi.h = !0);
        pj = bi.g;
        if (null != Ji) {
            var qj = new Gi(Ii(),pj);
            ki(qj)
        }
    }
    ;ii.reset();
    ki(new ni);
    var rj = function(a) {
        var b = {};
        Hb(a, function(c) {
            var d = c.g
              , e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
        });
        Tb(a, function(c) {
            return null === b[c.g]
        })
    };
    var sj = {
        NONE: 0,
        qg: 1
    }
      , tj = {
        og: 0,
        kh: 1,
        jh: 2,
        lh: 3
    }
      , uj = {
        ie: "a",
        pg: "d",
        Ne: "v"
    };
    var vj = function() {
        this.aa = 0;
        this.g = !1;
        this.h = -1;
        this.ib = !1;
        this.ra = 0
    };
    vj.prototype.isVisible = function() {
        return this.ib ? .3 <= this.aa : .5 <= this.aa
    }
    ;
    var wj = {
        ng: 0,
        tg: 1
    }
      , xj = {
        668123728: 0,
        668123729: 1
    }
      , yj = {
        44731964: 0,
        44731965: 1
    }
      , zj = {
        NONE: 0,
        Rg: 1,
        yg: 2
    }
      , Aj = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    var Bj = function() {
        this.g = null;
        this.o = !1;
        this.j = null
    }
      , Cj = function(a) {
        a.o = !0;
        return a
    }
      , Dj = function(a, b) {
        a.j && Hb(b, function(c) {
            c = a.j[c];
            void 0 !== c && a.h(c)
        })
    }
      , Ej = function(a) {
        Bj.call(this);
        this.l = a
    };
    t(Ej, Bj);
    Ej.prototype.h = function(a) {
        null === this.g && of(this.l, a) && (this.g = a)
    }
    ;
    var Fj = function() {
        Bj.call(this)
    };
    t(Fj, Bj);
    Fj.prototype.h = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    }
    ;
    var Gj = function() {
        Bj.call(this)
    };
    t(Gj, Bj);
    Gj.prototype.h = function(a) {
        null === this.g && "string" === typeof a && (this.g = a)
    }
    ;
    var Hj = function() {
        this.g = {};
        this.j = !0;
        this.h = {}
    };
    Hj.prototype.reset = function() {
        this.g = {};
        this.j = !0;
        this.h = {}
    }
    ;
    var Ij = function(a, b, c) {
        a.g[b] || (a.g[b] = new Ej(c));
        return a.g[b]
    }
      , Jj = function(a) {
        a.g.queryid || (a.g.queryid = new Gj)
    }
      , Kj = function(a, b, c) {
        (a = a.g[b]) && a.h(c)
    }
      , Lj = function(a, b) {
        if (nf(a.h, b))
            return a.h[b];
        if (a = a.g[b])
            return a.g
    }
      , Mj = function(a) {
        var b = {}
          , c = gf(a.g, function(d) {
            return d.o
        });
        ff(c, function(d, e) {
            d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }
      , Nj = function(a) {
        a = Mj(a);
        var b = [];
        ff(a, function(c, d) {
            d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join(""))
        });
        return b
    }
      , Oj = function() {
        var a = N().R
          , b = mi();
        a.j && Hb(kf(a.g), function(c) {
            return Dj(c, b)
        })
    };
    var Pj = function(a) {
        Ij(a, "od", sj);
        Cj(Ij(a, "opac", wj));
        Cj(Ij(a, "sbeos", wj));
        Cj(Ij(a, "prf", wj));
        Cj(Ij(a, "mwt", wj));
        Ij(a, "iogeo", wj)
    };
    var Qj = document
      , O = window;
    var Rj = !fc && !Ab();
    var Sj = function() {
        this.g = this.Ya = null
    };
    var Tj = function() {};
    Tj.prototype.g = function() {
        return 0
    }
    ;
    Tj.prototype.j = function() {
        return 0
    }
    ;
    Tj.prototype.o = function() {
        return 0
    }
    ;
    Tj.prototype.h = function() {
        return 0
    }
    ;
    var Vj = function() {
        if (!Uj())
            throw Error();
    };
    t(Vj, Tj);
    var Uj = function() {
        return !(!O || !O.performance)
    };
    Vj.prototype.g = function() {
        return Uj() && O.performance.now ? O.performance.now() : Tj.prototype.g.call(this)
    }
    ;
    Vj.prototype.j = function() {
        return Uj() && O.performance.memory ? O.performance.memory.totalJSHeapSize || 0 : Tj.prototype.j.call(this)
    }
    ;
    Vj.prototype.o = function() {
        return Uj() && O.performance.memory ? O.performance.memory.usedJSHeapSize || 0 : Tj.prototype.o.call(this)
    }
    ;
    Vj.prototype.h = function() {
        return Uj() && O.performance.memory ? O.performance.memory.jsHeapSizeLimit || 0 : Tj.prototype.h.call(this)
    }
    ;
    var Wj = function() {};
    Wj.prototype.isVisible = function() {
        return 1 === ph(Qj)
    }
    ;
    var Xj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)")
      , bk = function(a) {
        a = a || Yj();
        for (var b = new Zj(u.location.href,!1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
            var f = a[e];
            !c && Xj.test(f.url) && (c = f);
            if (f.url && !f.Sc) {
                b = f;
                break
            }
        }
        e = null;
        f = a.length && a[d].url;
        0 != b.depth && f && (e = a[d]);
        return new ak(b,e,c)
    }
      , Yj = function() {
        var a = u
          , b = []
          , c = null;
        do {
            var d = a;
            if (Ig(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new Zj(e || ""));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.Sc = !0);
        return b
    }
      , ak = function(a, b, c) {
        this.g = a;
        this.h = b;
        this.j = c
    }
      , Zj = function(a, b) {
        this.url = a;
        this.Sc = !!b;
        this.depth = null
    };
    var ck = function() {
        this.j = "&";
        this.h = {};
        this.o = 0;
        this.g = []
    }
      , dk = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
      , fk = function(a, b, c, d, e) {
        var f = [];
        Mg(a, function(g, h) {
            (g = ek(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
      , ek = function(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(ek(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(fk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
      , gk = function(a, b, c) {
        a.g.push(b);
        a.h[b] = c
    }
      , hk = function(a, b, c, d) {
        a.g.push(b);
        a.h[b] = dk(c, d)
    }
      , jk = function(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = ik(a) - c.length;
        if (0 > d)
            return "";
        a.g.sort(function(n, r) {
            return n - r
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = fk(h[k], a.j, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.j;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
      , ik = function(a) {
        var b = 1, c;
        for (c in a.h)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };
    var kk = function(a, b) {
        this.g = a;
        this.depth = b
    }
      , mk = function() {
        var a = Yj()
          , b = Math.max(a.length - 1, 0)
          , c = bk(a);
        a = c.g;
        var d = c.h
          , e = c.j
          , f = [];
        c = function(h, k) {
            return null == h ? k : h
        }
        ;
        e && f.push(new kk([e.url, e.Sc ? 2 : 0],c(e.depth, 1)));
        d && d != e && f.push(new kk([d.url, 2],0));
        a.url && a != e && f.push(new kk([a.url, 0],c(a.depth, b)));
        var g = Kb(f, function(h, k) {
            return f.slice(0, f.length - k)
        });
        !a.url || (e || d) && a != e || (d = Og(a.url)) && g.push([new kk([d, 1],c(a.depth, b))]);
        g.push([]);
        return Kb(g, function(h) {
            return lk(b, h)
        })
    };
    function lk(a, b) {
        var c = Lb(b, function(e, f) {
            return Math.max(e, f.depth)
        }, -1)
          , d = Zb(c + 2);
        d[0] = a;
        Hb(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    function nk() {
        var a = void 0 === a ? mk() : a;
        return a.map(function(b) {
            return ek(b)
        })
    }
    ;var ok = function() {
        this.h = new Wj;
        this.g = Uj() ? new Vj : new Tj
    }
      , qk = function() {
        pk();
        var a = O.document;
        return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof O.setInterval && "function" === typeof O.clearInterval && "function" === typeof O.setTimeout && "function" === typeof O.clearTimeout)
    };
    ok.prototype.setTimeout = function(a, b) {
        return O.setTimeout(a, b)
    }
    ;
    ok.prototype.clearTimeout = function(a) {
        O.clearTimeout(a)
    }
    ;
    var rk = function() {
        pk();
        return nk()
    };
    var sk = function() {}
      , pk = function() {
        var a = J(sk);
        if (!a.g) {
            if (!O)
                throw Error("Context has not been set and window is undefined.");
            a.g = J(ok)
        }
        return a.g
    };
    var tk = function(a) {
        D.call(this, a)
    };
    t(tk, D);
    tk.prototype.A = Ne([tk, 1, Be, 2, Ee, 3, Ee, 4, Ee, 5, He]);
    var uk = function(a) {
        this.j = a;
        this.g = -1;
        this.h = this.o = 0
    }
      , vk = function(a, b) {
        return function() {
            var c = Ja.apply(0, arguments);
            if (-1 < a.g)
                return b.apply(null, ia(c));
            try {
                return a.g = a.j.g.g(),
                b.apply(null, ia(c))
            } finally {
                a.o += a.j.g.g() - a.g,
                a.g = -1,
                a.h += 1
            }
        }
    };
    var wk = function(a, b) {
        this.h = a;
        this.j = b;
        this.g = new uk(a)
    };
    var xk = function() {
        this.g = {}
    }
      , zk = function() {
        var a = N().flags
          , b = yk;
        a = a.g[b.key];
        if ("proto" === b.valueType) {
            try {
                var c = JSON.parse(a);
                if (Array.isArray(c))
                    return c
            } catch (d) {}
            return b.defaultValue
        }
        return typeof a === typeof b.defaultValue ? a : b.defaultValue
    };
    var Ak = {
        fh: 1,
        Ch: 2,
        Wg: 3
    };
    var Bk = function() {
        this.j = void 0;
        this.h = this.A = 0;
        this.l = -1;
        this.R = new Hj;
        Cj(Ij(this.R, "mv", zj)).j = void 0 === Aj ? null : Aj;
        Ij(this.R, "omid", wj);
        Cj(Ij(this.R, "epoh", wj));
        Cj(Ij(this.R, "epph", wj));
        Cj(Ij(this.R, "umt", wj)).j = void 0 === xj ? null : xj;
        Cj(Ij(this.R, "phel", wj));
        Cj(Ij(this.R, "phell", wj));
        Cj(Ij(this.R, "oseid", Ak));
        var a = this.R;
        a.g.sloi || (a.g.sloi = new Fj);
        Cj(a.g.sloi);
        Ij(this.R, "mm", uj);
        Cj(Ij(this.R, "ovms", tj));
        Cj(Ij(this.R, "xdi", wj));
        Cj(Ij(this.R, "amp", wj));
        Cj(Ij(this.R, "prf", wj));
        Cj(Ij(this.R, "gtx", wj));
        Cj(Ij(this.R, "mvp_lv", wj));
        Cj(Ij(this.R, "ssmol", wj)).j = void 0 === yj ? null : yj;
        Cj(Ij(this.R, "fmd", wj));
        this.g = new wk(pk(),this.R);
        this.o = !1;
        this.flags = new xk
    };
    Bk.prototype.ed = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.R;
            if (b.j) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("=")
                      , e = decodeURIComponent(d[0]);
                    1 < d.length ? (d = decodeURIComponent(d[1]),
                    d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.h(d)
                }
            }
        }
    }
    ;
    var N = function() {
        return J(Bk)
    };
    var Ck = function(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || a.g))
            try {
                if (c instanceof ck)
                    var f = c;
                else
                    f = new ck,
                    Mg(c, function(h, k) {
                        var m = f
                          , n = m.o++;
                        gk(m, n, dk(k, h))
                    });
                var g = jk(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && (pk(),
                hh(O, g))
            } catch (h) {}
    };
    var Fk = function() {
        var a = Dk;
        this.A = Ek;
        this.l = "jserror";
        this.j = !0;
        this.h = null;
        this.B = this.La;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = Fk.prototype;
    l.Bc = function(a) {
        this.h = a
    }
    ;
    l.jd = function(a) {
        this.l = a
    }
    ;
    l.kd = function(a) {
        this.j = a
    }
    ;
    l.ld = function(a) {
        this.o = a
    }
    ;
    l.kb = function(a, b, c) {
        var d = this;
        return vk(N().g.g, function() {
            try {
                if (d.g && d.g.j) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else
                    f = b()
            } catch (h) {
                var g = d.j;
                try {
                    Bh(e),
                    g = d.B(a, new Gk(Hk(h)), void 0, c)
                } catch (k) {
                    d.La(217, k)
                }
                if (!g)
                    throw h;
            }
            return f
        })()
    }
    ;
    l.fd = function(a, b, c, d) {
        var e = this;
        return vk(N().g.g, function() {
            var f = Ja.apply(0, arguments);
            return e.kb(a, function() {
                return b.apply(c, f)
            }, d)
        })
    }
    ;
    l.La = function(a, b, c, d, e) {
        e = e || this.l;
        try {
            var f = new ck;
            hk(f, 1, "context", a);
            lh(b) || (b = new Gk(Hk(b)));
            b.msg && hk(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h)
                try {
                    this.h(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            gk(f, 3, [g]);
            var h = bk();
            h.h && hk(f, 4, "top", h.h.url || "");
            gk(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? vg(h.g.url) : ""
            }]);
            Ck(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                Ck(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Hk(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (m) {}
        }
        return this.j
    }
    ;
    var Hk = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d; )
                    d = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }
      , Gk = function(a) {
        kh.call(this, Error(a), {
            message: a
        })
    };
    t(Gk, kh);
    var Ek, Ik, Dk = new Ah(1,window), Jk = function() {
        O && "undefined" != typeof O.google_measure_js_timing && (O.google_measure_js_timing || Dk.H())
    };
    Ek = new function() {
        var a = "https:";
        O && O.location && "http:" === O.location.protocol && (a = "http:");
        this.h = a;
        this.g = .01;
        this.j = Math.random()
    }
    ;
    Ik = new Fk;
    O && O.document && ("complete" == O.document.readyState ? Jk() : Dk.j && Ze(O, "load", function() {
        Jk()
    }));
    var Kk = function(a) {
        Ik.Bc(function(b) {
            Hb(a, function(c) {
                c(b)
            })
        })
    }
      , Lk = function(a, b) {
        return Ik.kb(a, b)
    }
      , Mk = function(a, b, c, d) {
        return Ik.fd(a, b, c, d)
    }
      , Nk = function(a, b, c, d) {
        Ik.La(a, b, c, d)
    };
    var Ok = Date.now(), Pk = -1, Qk = -1, Rk, Sk = -1, Tk = !1, Uk = function() {
        return Date.now() - Ok
    }, Vk = function() {
        var a = N().j
          , b = 0 <= Qk ? Uk() - Qk : -1
          , c = Tk ? Uk() - Pk : -1
          , d = 0 <= Sk ? Uk() - Sk : -1;
        if (947190542 == a)
            return 100;
        if (79463069 == a)
            return 200;
        a = [2E3, 4E3];
        var e = [250, 500, 1E3];
        Nk(637, Error(), .001);
        var f = b;
        -1 != c && c < b && (f = c);
        for (b = 0; b < a.length; ++b)
            if (f < a[b]) {
                var g = e[b];
                break
            }
        void 0 === g && (g = e[a.length]);
        return -1 != d && 1500 < d && 4E3 > d ? 500 : g
    };
    var Wk = function(a, b, c) {
        var d = new H(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.j = b;
        this.g = d;
        this.h = c
    };
    var Xk = function(a, b, c, d, e, f, g) {
        this.j = a;
        this.h = b;
        this.l = c;
        this.g = d;
        this.o = e;
        this.B = f;
        this.A = g
    };
    Xk.prototype.getTimestamp = function() {
        return this.B
    }
    ;
    var Yk = {
        currentTime: 1,
        duration: 2,
        isVpaid: 4,
        volume: 8,
        isYouTube: 16,
        isPlaying: 32
    }
      , qf = {
        zd: "start",
        FIRST_QUARTILE: "firstquartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdquartile",
        COMPLETE: "complete",
        te: "error",
        ze: "metric",
        yd: "pause",
        Ie: "resume",
        SKIPPED: "skip",
        VIEWABLE_IMPRESSION: "viewable_impression",
        Ae: "mute",
        Me: "unmute",
        FULLSCREEN: "fullscreen",
        ue: "exitfullscreen",
        oe: "bufferstart",
        ne: "bufferfinish",
        rd: "fully_viewable_audible_half_duration_impression",
        xd: "measurable_impression",
        he: "abandon",
        qd: "engagedview",
        IMPRESSION: "impression",
        qe: "creativeview",
        LOADED: "loaded",
        hh: "progress",
        hg: "close",
        ig: "collapse",
        Be: "overlay_resize",
        Ce: "overlay_unmeasurable_impression",
        De: "overlay_unviewable_impression",
        Fe: "overlay_viewable_immediate_impression",
        Ee: "overlay_viewable_end_of_session_impression",
        re: "custom_metric_viewable",
        ah: "verification_debug",
        je: "audio_audible",
        me: "audio_measurable",
        ke: "audio_impression"
    }
      , Zk = "start firstquartile midpoint thirdquartile resume loaded".split(" ")
      , $k = ["start", "firstquartile", "midpoint", "thirdquartile"]
      , al = ["abandon"]
      , bl = {
        xh: -1,
        zd: 0,
        FIRST_QUARTILE: 1,
        MIDPOINT: 2,
        THIRD_QUARTILE: 3,
        COMPLETE: 4,
        ze: 5,
        yd: 6,
        Ie: 7,
        SKIPPED: 8,
        VIEWABLE_IMPRESSION: 9,
        Ae: 10,
        Me: 11,
        FULLSCREEN: 12,
        ue: 13,
        rd: 14,
        xd: 15,
        he: 16,
        qd: 17,
        IMPRESSION: 18,
        qe: 19,
        LOADED: 20,
        re: 21,
        oe: 22,
        ne: 23,
        ke: 27,
        me: 28,
        je: 29
    };
    var jf = {
        ag: "addEventListener",
        zg: "getMaxSize",
        Ag: "getScreenSize",
        Bg: "getState",
        Cg: "getVersion",
        ih: "removeEventListener",
        Sg: "isViewable"
    }
      , cl = function(a) {
        var b = a !== a.top
          , c = a.top === Tg(a)
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        hf(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            xa: f,
            dc: e,
            Nf: d
        }
    };
    var dl = function() {
        var a = window.document;
        return a && "function" === typeof a.elementFromPoint
    };
    function el(a, b, c) {
        try {
            a && (b = b.top);
            var d = b;
            a && null !== d && d != d.top && (d = d.top);
            try {
                var e = (void 0 === c ? 0 : c) ? (new F(d.innerWidth,d.innerHeight)).round() : ig(d || window).round()
            } catch (n) {
                e = new F(-12245933,-12245933)
            }
            a = e;
            var f = a.height
              , g = a.width;
            if (-12245933 === g)
                return new H(g,g,g,g);
            var h = jg(dg(b.document).g)
              , k = h.x
              , m = h.y;
            return new H(m,k + g,m + f,k)
        } catch (n) {
            return new H(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var gl = function(a, b) {
        if ("string" === typeof b)
            (b = fl(a, b)) && (a.style[b] = void 0);
        else
            for (var c in b) {
                var d = a
                  , e = b[c]
                  , f = fl(d, c);
                f && (d.style[f] = e)
            }
    }
      , hl = {}
      , fl = function(a, b) {
        var c = hl[b];
        if (!c) {
            var d = Yf(b);
            c = d;
            void 0 === a.style[d] && (d = (ic ? "Webkit" : hc ? "Moz" : fc ? "ms" : null) + $f(d),
            void 0 !== a.style[d] && (c = d));
            hl[b] = c
        }
        return c
    }
      , il = function(a, b) {
        var c = a.style[Yf(b)];
        return "undefined" !== typeof c ? c : a.style[fl(a, b)] || ""
    }
      , jl = function(a, b) {
        var c = cg(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
      , kl = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
      , ll = function(a) {
        var b = cg(a)
          , c = new Sf(0,0);
        var d = b ? cg(b) : document;
        d = !fc || 9 <= Number(yc) || hg(dg(d).g) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = kl(a);
        b = jg(dg(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
      , ml = function(a, b) {
        var c = new Sf(0,0)
          , d = G(cg(a));
        if (!bc(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = ll(a);
            else
                e = kl(a),
                e = new Sf(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
      , nl = function() {
        var a = "100%";
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }
      , pl = function(a) {
        var b = ol;
        if ("none" != (jl(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display))
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
      , ol = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = ic && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = kl(a),
        new F(a.right - a.left,a.bottom - a.top)) : new F(b,c)
    }
      , tl = function(a) {
        var b = cg(a)
          , c = fc && a.currentStyle;
        if (c && hg(dg(b).g) && "auto" != c.width && "auto" != c.height && !c.boxSizing)
            return b = ql(a, c.width, "width", "pixelWidth"),
            a = ql(a, c.height, "height", "pixelHeight"),
            new F(b,a);
        c = new F(a.offsetWidth,a.offsetHeight);
        if (fc) {
            b = rl(a, "paddingLeft");
            var d = rl(a, "paddingRight")
              , e = rl(a, "paddingTop")
              , f = rl(a, "paddingBottom");
            b = new H(e,d,f,b)
        } else
            b = jl(a, "paddingLeft"),
            d = jl(a, "paddingRight"),
            e = jl(a, "paddingTop"),
            f = jl(a, "paddingBottom"),
            b = new H(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(b));
        !fc || 9 <= Number(yc) ? (d = jl(a, "borderLeftWidth"),
        e = jl(a, "borderRightWidth"),
        f = jl(a, "borderTopWidth"),
        a = jl(a, "borderBottomWidth"),
        a = new H(parseFloat(f),parseFloat(e),parseFloat(a),parseFloat(d))) : (d = sl(a, "borderLeft"),
        e = sl(a, "borderRight"),
        f = sl(a, "borderTop"),
        a = sl(a, "borderBottom"),
        a = new H(f,e,a,d));
        return new F(c.width - a.left - b.left - b.right - a.right,c.height - a.top - b.top - b.bottom - a.bottom)
    }
      , ql = function(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c]
          , f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    }
      , rl = function(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? ql(a, b, "left", "pixelLeft") : 0
    }
      , ul = {
        thin: 2,
        medium: 4,
        thick: 6
    }
      , sl = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in ul ? ul[b] : ql(a, b, "left", "pixelLeft")
    };
    var vl = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };
    function wl(a, b, c, d) {
        if (!a)
            return {
                value: d,
                done: !1
            };
        d = b(d, a);
        var e = c(d, a);
        return !e && bc(a, "parentElement") ? wl(og(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var xl = function(a, b, c, d) {
        if (!a)
            return d;
        d = wl(a, b, c, d);
        if (!d.done)
            try {
                var e = cg(a)
                  , f = e && G(e);
                return xl(f && f.frameElement, b, c, d.value)
            } catch (g) {}
        return d.value
    };
    function yl(a) {
        var b = !fc || vc();
        return xl(a, function(c, d) {
            c = bc(d, "style") && d.style && il(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var zl = function(a) {
        return xl(a, function(b, c) {
            return !(!bc(c, "style") || !c.style || "none" !== il(c, "display"))
        }, function(b) {
            return b
        }, !1) ? !0 : yl(a)
    }
      , Al = function(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    }
      , Bl = function(a) {
        var b = a.top || 0
          , c = a.left || 0;
        return new H(b,c + (a.width || 0),b + (a.height || 0),c)
    }
      , Cl = function(a) {
        return null != a && 0 <= a && 1 >= a
    };
    function Dl() {
        var a = sb();
        return a ? Mb("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return lb(a, b)
        }) || lb(a, "OMI/") && !lb(a, "XiaoMi/") ? !0 : lb(a, "Presto") && lb(a, "Linux") && !lb(a, "X11") && !lb(a, "Android") && !lb(a, "Mobi") : !1
    }
    function El() {
        var a = sb();
        return lb(a, "AppleTV") || lb(a, "Apple TV") || lb(a, "CFNetwork") || lb(a, "tvOS")
    }
    function Fl() {
        var a;
        (a = lb(sb(), "CrKey") || lb(sb(), "PlayStation") || lb(sb(), "Roku") || Dl() || lb(sb(), "Xbox") || El()) || (a = sb(),
        a = lb(a, "sdk_google_atv_x86") || lb(a, "Android TV"));
        return a
    }
    ;var Hl = function() {
        this.j = !Ig(O.top);
        this.B = sg() || tg();
        var a = Yj();
        a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(ug)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.g = new H(0,0,0,0);
        this.l = new F(0,0);
        this.o = new F(0,0);
        this.H = new H(0,0,0,0);
        this.A = 0;
        this.K = !1;
        this.h = !(!O || !cl(O).xa);
        Gl(this)
    }
      , Il = function(a, b) {
        b && b.screen && (a.l = new F(b.screen.width,b.screen.height))
    }
      , Jl = function(a, b) {
        var c = a.g ? new F(a.g.getWidth(),a.g.getHeight()) : new F(0,0);
        b = void 0 === b ? O : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0
          , e = 0;
        try {
            var f = b.document
              , g = f.body
              , h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight)
                d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var k = h.scrollHeight
                  , m = h.scrollWidth
                  , n = h.offsetHeight
                  , r = h.offsetWidth;
                h.clientHeight != n && (k = g.scrollHeight,
                m = g.scrollWidth,
                n = g.offsetHeight,
                r = g.offsetWidth);
                k > c.height ? k > n ? (d = k,
                e = m) : (d = n,
                e = r) : k < n ? (d = k,
                e = m) : (d = n,
                e = r)
            }
            var v = new F(e,d)
        } catch (y) {
            v = new F(-12245933,-12245933)
        }
        a.o = v
    }
      , Gl = function(a) {
        O && O.document && (a.H = el(!1, O, a.B),
        a.g = el(!0, O, a.B),
        Jl(a, O),
        Il(a, O))
    }
      , Ll = function() {
        var a = Kl();
        if (0 < a.A || a.K)
            return !0;
        a = pk().h.isVisible();
        var b = 0 === ph(Qj);
        return a || b
    }
      , Kl = function() {
        return J(Hl)
    };
    var Ml = function(a) {
        this.j = a;
        this.h = 0;
        this.g = null
    };
    Ml.prototype.cancel = function() {
        pk().clearTimeout(this.g);
        this.g = null
    }
    ;
    var Nl = function(a) {
        var b = pk()
          , c = N().g.g;
        a.g = b.setTimeout(vk(c, Mk(143, function() {
            a.h++;
            a.j.sample()
        })), Vk())
    };
    var Ol = function(a, b, c) {
        this.o = a;
        this.ka = void 0 === c ? "na" : c;
        this.A = [];
        this.j = !1;
        this.l = new Wk(-1,!0,this);
        this.g = this;
        this.D = b;
        this.I = this.F = !1;
        this.X = "uk";
        this.O = !1;
        this.H = !0
    };
    Ol.prototype.G = function() {
        return !1
    }
    ;
    Ol.prototype.initialize = function() {
        return this.j = !0
    }
    ;
    Ol.prototype.ub = function() {
        return this.g.X
    }
    ;
    Ol.prototype.Jb = function() {
        return this.g.I
    }
    ;
    var Ql = function(a, b, c) {
        if (!a.I || (void 0 === c ? 0 : c))
            a.I = !0,
            a.X = b,
            a.D = 0,
            a.g != a || Pl(a)
    };
    Ol.prototype.getName = function() {
        return this.g.ka
    }
    ;
    Ol.prototype.Va = function() {
        return this.g.Y()
    }
    ;
    Ol.prototype.Y = function() {
        return {}
    }
    ;
    Ol.prototype.Ia = function() {
        return this.g.D
    }
    ;
    var Rl = function(a, b) {
        Qb(a.A, b) || (a.A.push(b),
        b.wb(a.g),
        b.Wa(a.l),
        b.Fa() && (a.F = !0))
    };
    Ol.prototype.T = function() {
        var a = Kl();
        a.g = el(!0, this.o, a.B)
    }
    ;
    Ol.prototype.U = function() {
        Il(Kl(), this.o)
    }
    ;
    Ol.prototype.Z = function() {
        return this.l.g
    }
    ;
    var Sl = function(a) {
        a = a.g;
        a.U();
        a.T();
        var b = Kl();
        b.H = el(!1, a.o, b.B);
        Jl(Kl(), a.o);
        a.l.g = a.Z()
    };
    Ol.prototype.sample = function() {}
    ;
    Ol.prototype.isActive = function() {
        return this.g.H
    }
    ;
    var Tl = function(a) {
        a.F = a.A.length ? Mb(a.A, function(b) {
            return b.Fa()
        }) : !1
    }
      , Ul = function(a) {
        var b = Vb(a.A);
        Hb(b, function(c) {
            c.Wa(a.l)
        })
    }
      , Pl = function(a) {
        var b = Vb(a.A);
        Hb(b, function(c) {
            c.wb(a.g)
        });
        a.g != a || Ul(a)
    };
    l = Ol.prototype;
    l.wb = function(a) {
        var b = this.g;
        this.g = a.Ia() >= this.D ? a : this;
        b !== this.g ? (this.H = this.g.H,
        Pl(this)) : this.H !== this.g.H && (this.H = this.g.H,
        Pl(this))
    }
    ;
    l.Wa = function(a) {
        if (a.h === this.g) {
            var b = this.l
              , c = this.F;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.j == a.j)
                b = b.g,
                c = a.g,
                c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.l = a;
            !c && Ul(this)
        }
    }
    ;
    l.Fa = function() {
        return this.F
    }
    ;
    l.V = function() {
        this.O = !0
    }
    ;
    l.va = function() {
        return this.O
    }
    ;
    var Vl = function(a, b, c, d) {
        this.j = a;
        this.g = new H(0,0,0,0);
        this.l = new H(0,0,0,0);
        this.h = b;
        this.R = c;
        this.G = d;
        this.F = !1;
        this.timestamp = -1;
        this.H = new Xk(b.l,this.g,new H(0,0,0,0),0,0,Uk(),0)
    };
    l = Vl.prototype;
    l.Gc = function() {
        return !0
    }
    ;
    l.Sb = function() {}
    ;
    l.V = function() {
        if (!this.va()) {
            var a = this.h;
            Rb(a.A, this);
            a.F && this.Fa() && Tl(a);
            this.Sb();
            this.F = !0
        }
    }
    ;
    l.va = function() {
        return this.F
    }
    ;
    l.Va = function() {
        return this.h.Va()
    }
    ;
    l.Ia = function() {
        return this.h.Ia()
    }
    ;
    l.ub = function() {
        return this.h.ub()
    }
    ;
    l.Jb = function() {
        return this.h.Jb()
    }
    ;
    l.wb = function() {}
    ;
    l.Wa = function() {
        this.Ua()
    }
    ;
    l.Fa = function() {
        return this.G
    }
    ;
    var Wl = function(a) {
        this.l = !1;
        this.g = a;
        this.o = function() {}
    };
    l = Wl.prototype;
    l.Ia = function() {
        return this.g.Ia()
    }
    ;
    l.ub = function() {
        return this.g.ub()
    }
    ;
    l.Jb = function() {
        return this.g.Jb()
    }
    ;
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Tb(a, b, c),
        Rl(this.g, d));
        return d
    }
    ;
    l.td = function() {
        return this.Db()
    }
    ;
    l.Db = function() {
        return !1
    }
    ;
    l.init = function(a) {
        return this.g.initialize() ? (Rl(this.g, this),
        this.o = a,
        !0) : !1
    }
    ;
    l.wb = function(a) {
        0 == a.Ia() && this.o(a.ub(), this)
    }
    ;
    l.Wa = function() {}
    ;
    l.Fa = function() {
        return !1
    }
    ;
    l.V = function() {
        this.l = !0
    }
    ;
    l.va = function() {
        return this.l
    }
    ;
    l.Va = function() {
        return {}
    }
    ;
    var Xl = function(a, b, c) {
        this.j = void 0 === c ? 0 : c;
        this.h = a;
        this.g = null == b ? "" : b
    }
      , Yl = function(a) {
        switch (Math.trunc(a.j)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
      , Zl = function(a, b) {
        return a.j < b.j ? !0 : a.j > b.j ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };
    var $l = function() {
        this.j = 0;
        this.g = [];
        this.h = !1
    };
    $l.prototype.add = function(a, b, c) {
        ++this.j;
        a = new Xl(a,b,c);
        this.g.push(new Xl(a.h,a.g,a.j + this.j / 4096));
        this.h = !0;
        return this
    }
    ;
    var am = function(a, b) {
        Hb(b.g, function(c) {
            a.add(c.h, c.g, Yl(c))
        })
    }
      , bm = function(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        Mg(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        });
        return a
    }
      , dm = function(a) {
        var b = cm;
        a.h && (Xb(a.g, function(c, d) {
            return Zl(d, c) ? 1 : Zl(c, d) ? -1 : 0
        }),
        a.h = !1);
        return Lb(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };
    var cm = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Qb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var em = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new $l;
        void 0 !== a && am(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    em.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = dm(this.g);
        0 < b.length && (a += "?" + b);
        return a
    }
    ;
    var fm = function(a) {
        var b = []
          , c = [];
        ff(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d)
                switch (Array.isArray(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
      , gm = function(a) {
        a = a.toString();
        a = a.substring(0, 4E3);
        pk();
        hh(O, a)
    };
    var hm = function() {
        this.g = 0
    };
    var im = function(a, b, c) {
        Hb(a.j, function(d) {
            var e = a.g;
            if (!d.g && (d.j(b, c),
            d.o())) {
                d.g = !0;
                var f = d.h()
                  , g = new $l;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.l);
                d = J(hm);
                g.add("i", d.g++);
                g.add("adk", e);
                bm(g, f);
                e = new em(g);
                gm(e)
            }
        })
    };
    var jm = function() {
        this.h = this.j = this.o = this.g = 0
    }
      , km = function(a, b, c, d) {
        b && (a.g += c,
        a.h += c,
        a.o += c,
        a.j = Math.max(a.j, a.o));
        if (void 0 === d ? !b : d)
            a.o = 0
    };
    var lm = [1, .75, .5, .3, 0]
      , mm = function(a) {
        this.h = a = void 0 === a ? lm : a;
        this.g = Kb(this.h, function() {
            return new jm
        })
    }
      , om = function(a, b) {
        return nm(a, function(c) {
            return c.g
        }, void 0 === b ? !0 : b)
    }
      , qm = function(a, b) {
        return pm(a, b, function(c) {
            return c.g
        })
    }
      , rm = function(a, b) {
        return nm(a, function(c) {
            return c.j
        }, void 0 === b ? !0 : b)
    }
      , sm = function(a, b) {
        return pm(a, b, function(c) {
            return c.j
        })
    }
      , tm = function(a, b) {
        return pm(a, b, function(c) {
            return c.h
        })
    }
      , um = function(a) {
        Hb(a.g, function(b) {
            b.h = 0
        })
    }
      , vm = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.h.length; f++) {
            var h = a.h[f]
              , k = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            km(a.g[f], g && k, e, !g || h)
        }
    }
      , nm = function(a, b, c) {
        a = Kb(a.g, function(d) {
            return b(d)
        });
        return c ? a : wm(a)
    }
      , pm = function(a, b, c) {
        var d = Pb(a.h, function(e) {
            return b <= e
        });
        return -1 == d ? 0 : c(a.g[d])
    }
      , wm = function(a) {
        return Kb(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };
    var xm = function() {
        this.h = new mm;
        this.U = new jm;
        this.G = this.B = -1;
        this.Z = 1E3;
        this.ca = new mm([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
        this.L = this.I = -1
    }
      , ym = function(a, b) {
        return rm(a.h, void 0 === b ? !0 : b)
    };
    xm.prototype.K = function(a, b, c, d) {
        this.B = -1 != this.B ? Math.min(this.B, b.aa) : b.aa;
        this.G = Math.max(this.G, b.aa);
        this.I = -1 != this.I ? Math.min(this.I, b.ra) : b.ra;
        this.L = Math.max(this.L, b.ra);
        vm(this.ca, b.ra, c.ra, b.g, a, d);
        vm(this.h, b.aa, c.aa, b.g, a, d);
        c = d || c.ib != b.ib ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        km(this.U, c, a, b)
    }
    ;
    xm.prototype.Ka = function() {
        return this.U.j >= this.Z
    }
    ;
    if (Qj && Qj.URL) {
        var zm = Qj.URL, Am;
        if (Am = !!zm) {
            var Bm;
            a: {
                if (zm) {
                    var Cm = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var Dm = Cm.exec(decodeURIComponent(zm));
                        if (Dm) {
                            Bm = Dm[1] && 1 < Dm[1].length ? Dm[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                Bm = ""
            }
            Am = 0 < Bm.length
        }
        Ik.kd(!Am)
    }
    var Em = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = Mk(d, c);
        Ze(a, b, c, {
            capture: e
        })
    };
    var Fm = new H(0,0,0,0);
    function Gm(a, b) {
        b = Hm(b);
        return 0 === b ? 0 : Hm(a) / b
    }
    function Hm(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function Im(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; null !== a && 100 > c++; ) {
            if (a === b)
                return !0;
            try {
                if (a = og(a) || a) {
                    var d = cg(a)
                      , e = d && G(d)
                      , f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function Jm(a, b, c) {
        if (!a || !b)
            return !1;
        b = Vg(Ug(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        Ig(window.top) && window.top && window.top.document && (window = window.top);
        if (!dl())
            return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = cg(c)) && b.defaultView && b.defaultView.frameElement) && Im(b, a);
        var d = a === c;
        a = !d && a && rg(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Km(a, b, c, d) {
        return Kl().j ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? Lk(208, function() {
            return Jm(a, b, c)
        }) : !1
    }
    ;var Lm = new H(0,0,0,0)
      , Nm = function(a, b, c) {
        E.call(this);
        this.position = Ug(Lm);
        this.tc = this.hc();
        this.Uc = -2;
        this.Rf = Date.now();
        this.ee = -1;
        this.lc = b;
        this.kc = null;
        this.Hb = !1;
        this.yc = null;
        this.opacity = -1;
        this.Hf = c;
        this.Sf = !1;
        this.Vc = function() {}
        ;
        this.fe = function() {}
        ;
        this.sa = new Sj;
        this.sa.Ya = a;
        this.sa.g = a;
        this.Ja = !1;
        this.ab = {
            Yc: null,
            Xc: null
        };
        this.be = !0;
        this.Qb = null;
        this.yb = this.uf = !1;
        N().A++;
        this.pa = this.Pc();
        this.de = -1;
        this.da = null;
        this.Qd = this.sf = !1;
        this.R = new Hj;
        Pj(this.R);
        Mm(this);
        1 == this.Hf ? Kj(this.R, "od", 1) : Kj(this.R, "od", 0)
    };
    t(Nm, E);
    Nm.prototype.M = function() {
        this.sa.g && (this.ab.Yc && ($e(this.sa.g, "mouseover", this.ab.Yc),
        this.ab.Yc = null),
        this.ab.Xc && ($e(this.sa.g, "mouseout", this.ab.Xc),
        this.ab.Xc = null));
        this.Qb && this.Qb.V();
        this.da && this.da.V();
        delete this.tc;
        delete this.Vc;
        delete this.fe;
        delete this.sa.Ya;
        delete this.sa.g;
        delete this.ab;
        delete this.Qb;
        delete this.da;
        delete this.R;
        E.prototype.M.call(this)
    }
    ;
    Nm.prototype.bb = function() {
        return this.da ? this.da.g : this.position
    }
    ;
    Nm.prototype.ed = function(a) {
        N().ed(a)
    }
    ;
    var Mm = function(a) {
        a = a.sa.Ya;
        var b;
        if (b = a && a.getAttribute)
            b = /-[a-z]/.test("googleAvInapp") ? !1 : Rj && a.dataset ? "googleAvInapp"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Zf()) : !!a.getAttribute("data-" + Zf());
        b && (Kl().h = !0)
    };
    Nm.prototype.Fa = function() {
        return !1
    }
    ;
    Nm.prototype.hc = function() {
        return new xm
    }
    ;
    Nm.prototype.oa = function() {
        return this.tc
    }
    ;
    var Om = function(a, b) {
        b != a.yb && (a.yb = b,
        a = Kl(),
        b ? a.A++ : 0 < a.A && a.A--)
    }
      , Pm = function(a, b) {
        if (a.da) {
            if (b.getName() === a.da.getName())
                return;
            a.da.V();
            a.da = null
        }
        b = b.create(a.sa.g, a.R, a.Fa());
        if (b = null != b && b.Gc() ? b : null)
            a.da = b
    }
      , Qm = function(a, b, c) {
        if (!a.kc || -1 == a.lc || -1 === b.getTimestamp() || -1 === a.kc.getTimestamp())
            return 0;
        a = b.getTimestamp() - a.kc.getTimestamp();
        return a > c ? 0 : a
    };
    Nm.prototype.Nd = function(a) {
        return Qm(this, a, 1E4)
    }
    ;
    var Rm = function(a, b, c) {
        if (a.da) {
            a.da.Ua();
            var d = a.da.H
              , e = d.j
              , f = e.g;
            if (null != d.l) {
                var g = d.h;
                a.yc = new Sf(g.left - f.left,g.top - f.top)
            }
            f = a.Cc() ? Math.max(d.g, d.o) : d.g;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            e = a.Nd(d);
            a.kc = d;
            a.nd(f, b, c, !1, g, e, d.A)
        }
    }
      , Sm = function(a) {
        if (a.Hb && a.Qb) {
            var b = 1 == Lj(a.R, "od")
              , c = Kl().g
              , d = a.Qb
              , e = a.da ? a.da.getName() : "ns"
              , f = new F(c.getWidth(),c.getHeight());
            c = a.Cc();
            a = {
                Pf: e,
                yc: a.yc,
                Zf: f,
                Cc: c,
                aa: a.pa.aa,
                Vf: b
            };
            if (b = d.h) {
                b.Ua();
                e = b.H;
                f = e.j.g;
                var g = null
                  , h = null;
                null != e.l && f && (g = e.h,
                g = new Sf(g.left - f.left,g.top - f.top),
                h = new F(f.right - f.left,f.bottom - f.top));
                e = c ? Math.max(e.g, e.o) : e.g;
                c = {
                    Pf: b.getName(),
                    yc: g,
                    Zf: h,
                    Cc: c,
                    Vf: !1,
                    aa: e
                }
            } else
                c = null;
            c && im(d, a, c)
        }
    };
    l = Nm.prototype;
    l.nd = function(a, b, c, d, e, f, g) {
        this.Ja || (this.Hb && (a = this.Ic(a, c, e, g),
        d = d && this.pa.aa >= (this.ib() ? .3 : .5),
        this.od(f, a, d),
        this.lc = b,
        0 < a.aa && -1 === this.de && (this.de = b),
        -1 == this.ee && this.Ka() && (this.ee = b),
        -2 == this.Uc && (this.Uc = Hm(this.bb()) ? a.aa : -1),
        this.pa = a),
        this.Vc(this))
    }
    ;
    l.od = function(a, b, c) {
        this.oa().K(a, b, this.pa, c)
    }
    ;
    l.Pc = function() {
        return new vj
    }
    ;
    l.Ic = function(a, b, c, d) {
        c = this.Pc();
        c.g = b;
        b = pk().h;
        b = 0 === ph(Qj) ? -1 : b.isVisible() ? 0 : 1;
        c.h = b;
        c.aa = this.Kc(a);
        c.ib = this.ib();
        c.ra = d;
        return c
    }
    ;
    l.Kc = function(a) {
        return 0 === this.opacity && 1 === Lj(this.R, "opac") ? 0 : a
    }
    ;
    l.ib = function() {
        return !1
    }
    ;
    l.Cc = function() {
        return this.sf || this.uf
    }
    ;
    l.ua = function() {
        return 0
    }
    ;
    l.Ka = function() {
        return this.tc.Ka()
    }
    ;
    l.Pd = function() {
        var a = this.Hb;
        a = (this.Qd || this.va()) && !a;
        var b = 2 !== N().h || this.Sf;
        return this.Ja || b && a ? 2 : this.Ka() ? 4 : 3
    }
    ;
    l.ec = function() {
        return 0
    }
    ;
    var Tm = function(a, b, c) {
        b && (a.Vc = b);
        c && (a.fe = c)
    };
    var Um = function() {};
    Um.prototype.next = function() {
        return Vm
    }
    ;
    var Vm = {
        done: !0,
        value: void 0
    };
    Um.prototype.rb = function() {
        return this
    }
    ;
    var Wm = function() {
        this.o = this.g = this.j = this.h = this.l = 0
    }
      , Xm = function(a) {
        var b = {};
        b = (b.ptlt = Ya() - a.l,
        b);
        var c = a.h;
        c && (b.pnk = c);
        (c = a.j) && (b.pnc = c);
        (c = a.o) && (b.pnmm = c);
        (a = a.g) && (b.pns = a);
        return b
    };
    var Ym = function() {
        vj.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.paused = !1;
        this.mediaTime = -1
    };
    t(Ym, vj);
    var Zm = function(a) {
        return Cl(a.volume) && 0 < a.volume
    };
    var an = function(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? function() {
            return !0
        }
        : d;
        return function(e) {
            var f = e[a];
            if (Array.isArray(f) && d(e))
                return $m(f, b, c)
        }
    }
      , bn = function(a, b) {
        return function(c) {
            return b(c) ? c[a] : void 0
        }
    }
      , cn = function(a) {
        return function(b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e"))
                    return !0;
            return !1
        }
    }
      , $m = function(a, b, c) {
        return void 0 === c || c ? Jb(a, function(d, e) {
            return Qb(b, e)
        }) : Kb(b, function(d, e, f) {
            return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                return g + h
            }, 0)
        })
    };
    var dn = cn([void 0, 1, 2, 3, 4, 8, 16])
      , en = cn([void 0, 4, 8, 16])
      , fn = {
        sv: "sv",
        v: "v",
        cb: "cb",
        e: "e",
        nas: "nas",
        msg: "msg",
        "if": "if",
        sdk: "sdk",
        p: "p",
        p0: bn("p0", en),
        p1: bn("p1", en),
        p2: bn("p2", en),
        p3: bn("p3", en),
        cp: "cp",
        tos: "tos",
        mtos: "mtos",
        amtos: "amtos",
        mtos1: an("mtos1", [0, 2, 4], !1, en),
        mtos2: an("mtos2", [0, 2, 4], !1, en),
        mtos3: an("mtos3", [0, 2, 4], !1, en),
        mcvt: "mcvt",
        ps: "ps",
        scs: "scs",
        bs: "bs",
        vht: "vht",
        mut: "mut",
        a: "a",
        a0: bn("a0", en),
        a1: bn("a1", en),
        a2: bn("a2", en),
        a3: bn("a3", en),
        ft: "ft",
        dft: "dft",
        at: "at",
        dat: "dat",
        as: "as",
        vpt: "vpt",
        gmm: "gmm",
        std: "std",
        efpf: "efpf",
        swf: "swf",
        nio: "nio",
        px: "px",
        nnut: "nnut",
        vmer: "vmer",
        vmmk: "vmmk",
        vmiec: "vmiec",
        nmt: "nmt",
        tcm: "tcm",
        bt: "bt",
        pst: "pst",
        vpaid: "vpaid",
        dur: "dur",
        vmtime: "vmtime",
        dtos: "dtos",
        dtoss: "dtoss",
        dvs: "dvs",
        dfvs: "dfvs",
        dvpt: "dvpt",
        fmf: "fmf",
        vds: "vds",
        is: "is",
        i0: "i0",
        i1: "i1",
        i2: "i2",
        i3: "i3",
        ic: "ic",
        cs: "cs",
        c: "c",
        c0: bn("c0", en),
        c1: bn("c1", en),
        c2: bn("c2", en),
        c3: bn("c3", en),
        mc: "mc",
        nc: "nc",
        mv: "mv",
        nv: "nv",
        qmt: bn("qmtos", dn),
        qnc: bn("qnc", dn),
        qmv: bn("qmv", dn),
        qnv: bn("qnv", dn),
        raf: "raf",
        rafc: "rafc",
        lte: "lte",
        ces: "ces",
        tth: "tth",
        femt: "femt",
        femvt: "femvt",
        emc: "emc",
        emuc: "emuc",
        emb: "emb",
        avms: "avms",
        nvat: "nvat",
        qi: "qi",
        psm: "psm",
        psv: "psv",
        psfv: "psfv",
        psa: "psa",
        pnk: "pnk",
        pnc: "pnc",
        pnmm: "pnmm",
        pns: "pns",
        ptlt: "ptlt",
        pngs: "pings",
        veid: "veid",
        ssb: "ssb",
        ss0: bn("ss0", en),
        ss1: bn("ss1", en),
        ss2: bn("ss2", en),
        ss3: bn("ss3", en),
        dc_rfl: "urlsigs",
        obd: "obd",
        omidp: "omidp",
        omidr: "omidr",
        omidv: "omidv",
        omida: "omida",
        omids: "omids",
        omidpv: "omidpv",
        omidam: "omidam",
        omidct: "omidct",
        omidia: "omidia",
        omiddc: "omiddc",
        omidlat: "omidlat",
        omiddit: "omiddit",
        nopd: "nopd"
    }
      , gn = Object.assign({}, fn, {
        avid: function(a) {
            return function() {
                return a
            }
        }("audio"),
        avas: "avas",
        vs: "vs"
    })
      , hn = {
        atos: "atos",
        avt: an("atos", [2]),
        davs: "davs",
        dafvs: "dafvs",
        dav: "dav",
        ss: function(a, b) {
            return function(c) {
                return void 0 === c[a] && void 0 !== b ? b : c[a]
            }
        }("ss", 0),
        t: "t"
    };
    var jn = function() {
        this.h = this.g = ""
    };
    var kn = function() {}
      , ln = function(a, b) {
        var c = {};
        if (void 0 !== a)
            if (null != b)
                for (var d in b) {
                    var e = b[d];
                    d in Object.prototype || null != e && (c[d] = "function" === typeof e ? e(a) : a[e])
                }
            else
                vf(c, a);
        return dm(bm(new $l, c))
    };
    var mn = function() {
        var a = {};
        this.h = (a.vs = [1, 0],
        a.vw = [0, 1],
        a.am = [2, 2],
        a.a = [4, 4],
        a.f = [8, 8],
        a.bm = [16, 16],
        a.b = [32, 32],
        a.avw = [0, 64],
        a.avs = [64, 0],
        a.pv = [256, 256],
        a.gdr = [0, 512],
        a.p = [0, 1024],
        a.r = [0, 2048],
        a.m = [0, 4096],
        a.um = [0, 8192],
        a.ef = [0, 16384],
        a.s = [0, 32768],
        a.pmx = [0, 16777216],
        a.mut = [33554432, 33554432],
        a.umutb = [67108864, 67108864],
        a.tvoff = [134217728, 134217728],
        a);
        this.g = {};
        for (var b in this.h)
            0 < this.h[b][1] && (this.g[b] = 0);
        this.j = 0
    };
    mn.prototype.reportEvent = function(a) {
        var b = this.h[a]
          , c = b[1];
        this.j += b[0];
        0 < c && 0 == this.g[a] && (this.g[a] = 1)
    }
    ;
    var nn = function(a) {
        var b = lf(a.h), c = 0, d;
        for (d in a.g)
            Qb(b, d) && 1 == a.g[d] && (c += a.h[d][1],
            a.g[d] = 2);
        return c
    }
      , on = function(a) {
        var b = 0, c;
        for (c in a.g) {
            var d = a.g[c];
            if (1 == d || 2 == d)
                b += a.h[c][1]
        }
        return b
    };
    var pn = function() {
        this.h = this.g = 0
    }
      , qn = function(a, b, c) {
        32 <= b || (a.h & 1 << b && !c ? a.g &= ~(1 << b) : a.h & 1 << b || !c || (a.g |= 1 << b),
        a.h |= 1 << b)
    };
    var rn = function() {
        xm.call(this);
        this.j = new jm;
        this.T = this.D = this.J = 0;
        this.H = -1;
        this.ga = new jm;
        this.l = new jm;
        this.g = new mm;
        this.A = this.o = -1;
        this.F = new jm;
        this.Z = 2E3;
        this.O = new pn;
        this.Y = new pn;
        this.X = new pn
    };
    t(rn, xm);
    var sn = function(a, b, c) {
        var d = a.T;
        Tk || c || -1 == a.H || (d += b - a.H);
        return d
    };
    rn.prototype.K = function(a, b, c, d) {
        if (!b.paused) {
            xm.prototype.K.call(this, a, b, c, d);
            var e = Zm(b) && Zm(c)
              , f = .5 <= (d ? Math.min(b.aa, c.aa) : c.aa);
            Cl(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume,
            this.A = Math.max(this.A, b.volume));
            f && (this.J += a,
            this.D += e ? a : 0);
            vm(this.g, b.aa, c.aa, b.g, a, d, e);
            km(this.j, !0, a);
            km(this.l, e, a);
            km(this.F, c.fullscreen, a);
            km(this.ga, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            qn(this.O, a, b.isVisible());
            qn(this.Y, a, 1 <= b.aa);
            qn(this.X, a, Zm(b))
        }
    }
    ;
    var tn = function() {
        this.j = !1
    };
    tn.prototype.h = function(a) {
        this.j || (this.g(a) ? (a = this.K.report(this.o, a),
        this.l |= a,
        a = 0 == a) : a = !1,
        this.j = a)
    }
    ;
    var un = function(a, b) {
        this.j = !1;
        this.o = a;
        this.K = b;
        this.l = 0
    };
    t(un, tn);
    un.prototype.g = function() {
        return !0
    }
    ;
    un.prototype.A = function() {
        return !1
    }
    ;
    un.prototype.getId = function() {
        var a = this
          , b = pf(function(c) {
            return c == a.o
        });
        return bl[b].toString()
    }
    ;
    un.prototype.toString = function() {
        var a = "";
        this.A() && (a += "c");
        this.j && (a += "s");
        0 < this.l && (a += ":" + this.l);
        return this.getId() + a
    }
    ;
    var vn = function(a, b) {
        un.call(this, a, b);
        this.B = []
    };
    t(vn, un);
    vn.prototype.h = function(a, b) {
        b = void 0 === b ? null : b;
        null != b && this.B.push(b);
        un.prototype.h.call(this, a)
    }
    ;
    var wn = function() {};
    var xn = function() {};
    t(xn, wn);
    xn.prototype.h = function() {
        return null
    }
    ;
    xn.prototype.j = function() {
        return []
    }
    ;
    var yn = function(a, b, c, d) {
        Vl.call(this, a, b, c, d)
    };
    t(yn, Vl);
    l = yn.prototype;
    l.Jc = function() {
        if (this.j) {
            var a = this.j
              , b = this.h.g.o;
            try {
                try {
                    var c = Al(a.getBoundingClientRect())
                } catch (m) {
                    c = new H(0,0,0,0)
                }
                var d = c.right - c.left
                  , e = c.bottom - c.top
                  , f = ml(a, b)
                  , g = f.x
                  , h = f.y;
                var k = new H(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (m) {
                k = Ug(Fm)
            }
            this.g = k
        }
    }
    ;
    l.Dd = function() {
        this.l = this.h.l.g
    }
    ;
    l.Rd = function(a) {
        return Km(a, this.l, this.j, 1 == Lj(this.R, "od"))
    }
    ;
    l.Ed = function() {
        this.timestamp = Uk()
    }
    ;
    l.Ua = function() {
        this.Ed();
        this.Jc();
        if (this.j && "number" === typeof this.j.videoWidth && "number" === typeof this.j.videoHeight) {
            var a = this.j;
            var b = new F(a.videoWidth,a.videoHeight);
            a = this.g;
            var c = a.getWidth()
              , d = a.getHeight()
              , e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b,
            a = Ug(a),
            e > c / d ? (c /= e,
            d = (d - c) / 2,
            0 < d && (d = a.top + d,
            a.top = Math.round(d),
            a.bottom = Math.round(d + c))) : (d *= e,
            c = Math.round((c - d) / 2),
            0 < c && (c = a.left + c,
            a.left = Math.round(c),
            a.right = Math.round(c + d))));
            this.g = a
        }
        this.Dd();
        a = this.g;
        c = this.l;
        a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new H(Math.max(a.top, c.top),Math.min(a.right, c.right),Math.min(a.bottom, c.bottom),Math.max(a.left, c.left)) : new H(0,0,0,0);
        c = a.top >= a.bottom || a.left >= a.right ? new H(0,0,0,0) : a;
        a = this.h.l;
        b = e = d = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.Rd(c) ? c = new H(0,0,0,0) : (d = Kl().l,
        b = new H(0,d.height,d.width,0),
        d = Gm(c, this.g),
        e = Gm(c, Kl().g),
        b = Gm(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new H(0,0,0,0) : Vg(c, -this.g.left, -this.g.top);
        Ll() || (e = d = 0);
        this.H = new Xk(a,this.g,c,d,e,this.timestamp,b)
    }
    ;
    l.getName = function() {
        return this.h.getName()
    }
    ;
    var zn = new H(0,0,0,0)
      , An = function(a, b, c) {
        Vl.call(this, null, a, b, c);
        this.B = a.isActive();
        this.A = 0
    };
    t(An, yn);
    l = An.prototype;
    l.Gc = function() {
        this.o();
        return !0
    }
    ;
    l.Wa = function() {
        yn.prototype.Ua.call(this)
    }
    ;
    l.Ed = function() {}
    ;
    l.Jc = function() {}
    ;
    l.Ua = function() {
        this.o();
        yn.prototype.Ua.call(this)
    }
    ;
    l.wb = function(a) {
        a = a.isActive();
        a !== this.B && (a ? this.o() : (Kl().g = new H(0,0,0,0),
        this.g = new H(0,0,0,0),
        this.l = new H(0,0,0,0),
        this.timestamp = -1));
        this.B = a
    }
    ;
    function Bn(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var Cn = {}
      , Dn = (Cn.firstquartile = 0,
    Cn.midpoint = 1,
    Cn.thirdquartile = 2,
    Cn.complete = 3,
    Cn)
      , En = function(a, b, c, d, e, f) {
        f = void 0 === f ? new xn : f;
        Nm.call(this, b, c, d);
        this.dd = e;
        this.Nc = 0;
        this.ia = {};
        this.fa = new mn;
        this.ge = {};
        this.ma = "";
        this.playerId = null;
        this.Ba = !1;
        this.g = [];
        this.Ma = f.h();
        this.A = f.j();
        this.l = null;
        this.j = -1;
        this.U = this.F = void 0;
        this.I = this.G = 0;
        this.O = -1;
        this.ca = this.Z = !1;
        this.L = this.D = this.h = this.Bb = this.ta = 0;
        new mm;
        this.T = this.X = 0;
        this.Y = -1;
        this.la = 0;
        this.B = Te;
        this.J = [this.hc()];
        this.Ra = 2;
        this.ob = {};
        this.ob.pause = "p";
        this.ob.resume = "r";
        this.ob.skip = "s";
        this.ob.mute = "m";
        this.ob.unmute = "um";
        this.ob.exitfullscreen = "ef";
        this.o = null;
        this.ga = this.ka = !1
    };
    t(En, Nm);
    En.prototype.Fa = function() {
        return !0
    }
    ;
    var Fn = function(a) {
        a.Qd = !0;
        0 != a.la && (a.la = 3)
    }
      , Gn = function(a) {
        return void 0 === a ? a : Number(a) ? vl(a, 3) : 0
    };
    l = En.prototype;
    l.Nd = function(a) {
        return Qm(this, a, Math.max(1E4, this.j / 3))
    }
    ;
    l.nd = function(a, b, c, d, e, f, g) {
        var h = this
          , k = this.B(this) || {};
        vf(k, e);
        this.j = k.duration || this.j;
        this.F = k.isVpaid || this.F;
        this.U = k.isYouTube || this.U;
        pk();
        this.ga = !1;
        e = Hn(this, b);
        1 === In(this) && (f = e);
        Nm.prototype.nd.call(this, a, b, c, d, k, f, g);
        this.Ma && this.Ma.j && Hb(this.A, function(m) {
            m.h(h)
        })
    }
    ;
    l.od = function(a, b, c) {
        Nm.prototype.od.call(this, a, b, c);
        Jn(this).K(a, b, this.pa, c);
        this.ca = Zm(this.pa) && Zm(b);
        -1 == this.O && this.Z && (this.O = this.oa().j.g);
        this.fa.j = 0;
        a = this.Ka();
        b.isVisible() && this.fa.reportEvent("vs");
        a && this.fa.reportEvent("vw");
        Cl(b.volume) && this.fa.reportEvent("am");
        Zm(b) ? this.fa.reportEvent("a") : this.fa.reportEvent("mut");
        this.yb && this.fa.reportEvent("f");
        -1 != b.h && (this.fa.reportEvent("bm"),
        1 == b.h && (this.fa.reportEvent("b"),
        Zm(b) && this.fa.reportEvent("umutb")));
        Zm(b) && b.isVisible() && this.fa.reportEvent("avs");
        this.ca && a && this.fa.reportEvent("avw");
        0 < b.aa && this.fa.reportEvent("pv");
        Kn(this, this.oa().j.g, !0) && this.fa.reportEvent("gdr");
        2E3 <= sm(this.oa().h, 1) && this.fa.reportEvent("pmx");
        this.ga && this.fa.reportEvent("tvoff")
    }
    ;
    l.hc = function() {
        return new rn
    }
    ;
    l.oa = function() {
        return this.tc
    }
    ;
    var Jn = function(a, b) {
        return a.J[null != b && b < a.J.length ? b : a.J.length - 1]
    };
    En.prototype.Pc = function() {
        return new Ym
    }
    ;
    En.prototype.Ic = function(a, b, c, d) {
        a = Nm.prototype.Ic.call(this, a, b, c, void 0 === d ? -1 : d);
        a.fullscreen = this.yb;
        a.paused = 2 == this.la;
        a.volume = c.volume;
        Cl(a.volume) || (this.ta++,
        b = this.pa,
        Cl(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
        return a
    }
    ;
    var In = function(a) {
        var b = !!Lj(N().R, "umt");
        return a.F || !b && !a.U ? 0 : 1
    }
      , Hn = function(a, b) {
        2 == a.la ? b = 0 : -1 == a.lc ? b = 0 : (b -= a.lc,
        b = b > Math.max(1E4, a.j / 3) ? 0 : b);
        var c = a.B(a) || {};
        c = void 0 !== c.currentTime ? c.currentTime : a.G;
        var d = c - a.G
          , e = 0;
        0 <= d ? (a.I += b,
        a.T += Math.max(b - d, 0),
        e = Math.min(d, a.I)) : a.X += Math.abs(d);
        0 != d && (a.I = 0);
        -1 == a.Y && 0 < d && (a.Y = 0 <= Sk ? Uk() - Sk : -1);
        a.G = c;
        return e
    };
    En.prototype.Kc = function(a) {
        return Kl(),
        this.yb ? 1 : Nm.prototype.Kc.call(this, a)
    }
    ;
    En.prototype.ua = function() {
        return 1
    }
    ;
    En.prototype.getDuration = function() {
        return this.j
    }
    ;
    var Ln = function(a, b) {
        Mb(a.A, function(c) {
            return c.o == b.o
        }) || a.A.push(b)
    }
      , Mn = function(a) {
        var b = qm(a.oa().g, 1);
        return Kn(a, b)
    }
      , Kn = function(a, b, c) {
        return 15E3 <= b ? !0 : a.Z ? (void 0 === c ? 0 : c) ? !0 : 0 < a.j ? b >= a.j / 2 : 0 < a.O ? b >= a.O : !1 : !1
    }
      , Nn = function(a) {
        var b = {}
          , c = Kl();
        b.insideIframe = c.j;
        b.unmeasurable = a.Ja;
        b.position = a.bb();
        b.exposure = a.pa.aa;
        b.documentSize = c.o;
        b.viewportSize = new F(c.g.getWidth(),c.g.getHeight());
        null != a.o && (b.presenceData = a.o);
        b.screenShare = a.pa.ra;
        return b
    }
      , On = function(a) {
        var b = vl(a.pa.aa, 2)
          , c = a.fa.j
          , d = a.pa
          , e = Jn(a)
          , f = Gn(e.o)
          , g = Gn(e.A)
          , h = Gn(d.volume)
          , k = vl(e.B, 2)
          , m = vl(e.G, 2)
          , n = vl(d.aa, 2)
          , r = vl(e.I, 2)
          , v = vl(e.L, 2);
        d = vl(d.ra, 2);
        a = Ug(a.bb());
        a.round();
        e = ym(e, !1);
        return {
            Yf: b,
            Kb: c,
            uc: f,
            qc: g,
            Eb: h,
            vc: k,
            rc: m,
            aa: n,
            wc: r,
            sc: v,
            ra: d,
            position: a,
            xc: e
        }
    }
      , Qn = function(a, b) {
        Pn(a.g, b, function() {
            return {
                Yf: 0,
                Kb: void 0,
                uc: -1,
                qc: -1,
                Eb: -1,
                vc: -1,
                rc: -1,
                aa: -1,
                wc: -1,
                sc: -1,
                ra: -1,
                position: void 0,
                xc: []
            }
        });
        a.g[b] = On(a)
    }
      , Pn = function(a, b, c) {
        for (var d = a.length; d < b + 1; )
            a.push(c()),
            d++
    }
      , Un = function(a, b, c) {
        var d = a.ge[b];
        if (null != d)
            return d;
        d = Sn(a, b);
        var e = pf(function(f) {
            return f == b
        });
        a = Tn(a, d, d, c, Dn[qf[e]]);
        "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
        return a
    }
      , Vn = function(a, b, c) {
        var d = [b];
        if (a != b || c != b)
            d.unshift(a),
            d.push(c);
        return d
    }
      , Tn = function(a, b, c, d, e) {
        if (a.Ja)
            return {
                "if": 0,
                vs: 0
            };
        var f = Ug(a.bb());
        f.round();
        var g = Kl()
          , h = N()
          , k = a.oa()
          , m = a.da ? a.da.getName() : "ns"
          , n = {};
        n["if"] = g.j ? 1 : void 0;
        n.sdk = a.l ? a.l : void 0;
        n.t = a.Rf;
        n.p = [f.top, f.left, f.bottom, f.right];
        n.tos = om(k.h, !1);
        n.mtos = ym(k);
        n.mcvt = k.U.j;
        n.ps = void 0;
        n.vht = sn(k, Uk(), 2 == a.la);
        n.mut = k.ga.j;
        n.a = Gn(a.pa.volume);
        n.mv = Gn(k.A);
        n.fs = a.yb ? 1 : 0;
        n.ft = k.F.g;
        n.at = k.l.g;
        n.as = 0 < k.o ? 1 : 0;
        n.atos = om(k.g);
        n.ssb = om(k.ca, !1);
        n.amtos = rm(k.g, !1);
        n.uac = a.ta;
        n.vpt = k.j.g;
        "nio" == m && (n.nio = 1,
        n.avms = "nio");
        n.gmm = "4";
        n.gdr = Kn(a, k.j.g, !0) ? 1 : 0;
        n.efpf = a.Ra;
        if ("gsv" == m || "nis" == m)
            f = a.da,
            0 < f.A && (n.nnut = f.A);
        n.tcm = In(a);
        n.nmt = a.X;
        n.bt = a.T;
        n.pst = a.Y;
        n.vpaid = a.F;
        n.dur = a.j;
        n.vmtime = a.G;
        n.is = a.fa.j;
        1 <= a.g.length && (n.i0 = a.g[0].Kb,
        n.a0 = [a.g[0].Eb],
        n.c0 = [a.g[0].aa],
        n.ss0 = [a.g[0].ra],
        f = a.g[0].position,
        n.p0 = f ? Bn(f) : void 0);
        2 <= a.g.length && (n.i1 = a.g[1].Kb,
        n.a1 = Vn(a.g[1].uc, a.g[1].Eb, a.g[1].qc),
        n.c1 = Vn(a.g[1].vc, a.g[1].aa, a.g[1].rc),
        n.ss1 = Vn(a.g[1].wc, a.g[1].ra, a.g[1].sc),
        f = a.g[1].position,
        n.p1 = f ? Bn(f) : void 0,
        n.mtos1 = a.g[1].xc);
        3 <= a.g.length && (n.i2 = a.g[2].Kb,
        n.a2 = Vn(a.g[2].uc, a.g[2].Eb, a.g[2].qc),
        n.c2 = Vn(a.g[2].vc, a.g[2].aa, a.g[2].rc),
        n.ss2 = Vn(a.g[2].wc, a.g[2].ra, a.g[2].sc),
        f = a.g[2].position,
        n.p2 = f ? Bn(f) : void 0,
        n.mtos2 = a.g[2].xc);
        4 <= a.g.length && (n.i3 = a.g[3].Kb,
        n.a3 = Vn(a.g[3].uc, a.g[3].Eb, a.g[3].qc),
        n.c3 = Vn(a.g[3].vc, a.g[3].aa, a.g[3].rc),
        n.ss3 = Vn(a.g[3].wc, a.g[3].ra, a.g[3].sc),
        f = a.g[3].position,
        n.p3 = f ? Bn(f) : void 0,
        n.mtos3 = a.g[3].xc);
        n.cs = on(a.fa);
        b && (n.ic = nn(a.fa),
        n.dvpt = k.j.h,
        n.dvs = tm(k.h, .5),
        n.dfvs = tm(k.h, 1),
        n.davs = tm(k.g, .5),
        n.dafvs = tm(k.g, 1),
        c && (k.j.h = 0,
        um(k.h),
        um(k.g)),
        a.Ka() && (n.dtos = k.J,
        n.dav = k.D,
        n.dtoss = a.Nc + 1,
        c && (k.J = 0,
        k.D = 0,
        a.Nc++)),
        n.dat = k.l.h,
        n.dft = k.F.h,
        c && (k.l.h = 0,
        k.F.h = 0));
        n.ps = [g.o.width, g.o.height];
        n.bs = [g.g.getWidth(), g.g.getHeight()];
        n.scs = [g.l.width, g.l.height];
        n.dom = g.domain;
        a.Bb && (n.vds = a.Bb);
        if (0 < a.A.length || a.Ma)
            b = Vb(a.A),
            a.Ma && b.push(a.Ma),
            n.pings = Kb(b, function(r) {
                return r.toString()
            });
        b = Kb(Jb(a.A, function(r) {
            return r.A()
        }), function(r) {
            return r.getId()
        });
        Wb(b);
        n.ces = b;
        a.h && (n.vmer = a.h);
        a.D && (n.vmmk = a.D);
        a.L && (n.vmiec = a.L);
        n.avms = a.da ? a.da.getName() : "ns";
        a.da && vf(n, a.da.Va());
        d ? (n.c = vl(a.pa.aa, 2),
        n.ss = vl(a.pa.ra, 2)) : n.tth = Uk() - Rk;
        n.mc = vl(k.G, 2);
        n.nc = vl(k.B, 2);
        n.mv = Gn(k.A);
        n.nv = Gn(k.o);
        n.lte = vl(a.Uc, 2);
        d = Jn(a, e);
        ym(k);
        n.qmtos = ym(d);
        n.qnc = vl(d.B, 2);
        n.qmv = Gn(d.A);
        n.qnv = Gn(d.o);
        n.qas = 0 < d.o ? 1 : 0;
        n.qi = a.ma;
        n.avms || (n.avms = "geo");
        n.psm = k.O.h;
        n.psv = k.O.g;
        n.psfv = k.Y.g;
        n.psa = k.X.g;
        h = Nj(h.R);
        h.length && (n.veid = h);
        a.o && vf(n, Xm(a.o));
        n.avas = a.ec();
        n.vs = a.Pd();
        return n
    }
      , Sn = function(a, b) {
        if (Qb(al, b))
            return !0;
        var c = a.ia[b];
        return void 0 !== c ? (a.ia[b] = !0,
        !c) : !1
    };
    En.prototype.Pd = function() {
        return this.Ja ? 2 : Mn(this) ? 5 : this.Ka() ? 4 : 3
    }
    ;
    En.prototype.ec = function() {
        return this.ka ? 2E3 <= this.oa().l.j ? 4 : 3 : 2
    }
    ;
    var Wn = Ya()
      , Zn = function() {
        this.g = {};
        var a = G();
        Xn(this, a, document);
        var b = Yn();
        try {
            if ("1" == b) {
                for (var c = a.parent; c != a.top; c = c.parent)
                    Xn(this, c, c.document);
                Xn(this, a.top, a.top.document)
            }
        } catch (d) {}
    }
      , Yn = function() {
        var a = document.documentElement;
        try {
            if (!Ig(G().top))
                return "2";
            var b = []
              , c = G(a.ownerDocument);
            for (a = c; a != c.top; a = a.parent)
                if (a.frameElement)
                    b.push(a.frameElement);
                else
                    break;
            return b && 0 != b.length ? "1" : "0"
        } catch (d) {
            return "2"
        }
    }
      , Xn = function(a, b, c) {
        Em(c, "mousedown", function() {
            return $n(a)
        }, 301);
        Em(b, "scroll", function() {
            return ao(a)
        }, 302);
        Em(c, "touchmove", function() {
            return bo(a)
        }, 303);
        Em(c, "mousemove", function() {
            return co(a)
        }, 304);
        Em(c, "keydown", function() {
            return eo(a)
        }, 305)
    }
      , $n = function(a) {
        ff(a.g, function(b) {
            1E5 < b.j || ++b.j
        })
    }
      , ao = function(a) {
        ff(a.g, function(b) {
            1E5 < b.g || ++b.g
        })
    }
      , bo = function(a) {
        ff(a.g, function(b) {
            1E5 < b.g || ++b.g
        })
    }
      , eo = function(a) {
        ff(a.g, function(b) {
            1E5 < b.h || ++b.h
        })
    }
      , co = function(a) {
        ff(a.g, function(b) {
            1E5 < b.o || ++b.o
        })
    };
    var fo = function() {
        this.g = [];
        this.h = []
    }
      , go = function(a, b) {
        return Nb(a.g, function(c) {
            return c.ma == b
        })
    }
      , ho = function(a, b) {
        return b ? Nb(a.g, function(c) {
            return c.sa.Ya == b
        }) : null
    }
      , io = function(a, b) {
        return Nb(a.h, function(c) {
            return 2 == c.ua() && c.ma == b
        })
    }
      , ko = function() {
        var a = jo;
        return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : Ub(a.h, a.g)
    };
    fo.prototype.reset = function() {
        this.g = [];
        this.h = []
    }
    ;
    var lo = function(a, b) {
        a = 1 == b.ua() ? a.g : a.h;
        var c = Ob(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1),
        b.da && b.da.Sb(),
        b.V(),
        !0) : !1
    }
      , mo = function(a) {
        var b = jo;
        if (lo(b, a)) {
            switch (a.ua()) {
            case 0:
                var c = function() {
                    return null
                };
            case 2:
                c = function() {
                    return io(b, a.ma)
                }
                ;
                break;
            case 1:
                c = function() {
                    return go(b, a.ma)
                }
            }
            for (var d = c(); d; d = c())
                lo(b, d)
        }
    }
      , no = function(a) {
        var b = jo;
        a = Jb(a, function(c) {
            return !ho(b, c.sa.Ya)
        });
        b.g.push.apply(b.g, ia(a))
    }
      , oo = function(a) {
        var b = [];
        Hb(a, function(c) {
            Mb(jo.g, function(d) {
                return d.sa.Ya === c.sa.Ya && d.ma === c.ma
            }) || (jo.g.push(c),
            b.push(c))
        })
    }
      , jo = J(fo);
    var po = function() {
        this.g = this.h = null
    }
      , qo = function(a, b) {
        if (null == a.h)
            return !1;
        var c = function(d, e) {
            b(d, e)
        };
        a.g = Nb(a.h, function(d) {
            return null != d && d.td()
        });
        a.g && (a.g.init(c) ? Sl(a.g.g) : b(a.g.g.ub(), a.g));
        return null != a.g
    };
    var so = function(a) {
        a = ro(a);
        Wl.call(this, a.length ? a[a.length - 1] : new Ol(O,0));
        this.j = a;
        this.h = null
    };
    t(so, Wl);
    l = so.prototype;
    l.getName = function() {
        return (this.h ? this.h : this.g).getName()
    }
    ;
    l.Va = function() {
        return (this.h ? this.h : this.g).Va()
    }
    ;
    l.Ia = function() {
        return (this.h ? this.h : this.g).Ia()
    }
    ;
    l.init = function(a) {
        var b = !1;
        Hb(this.j, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a,
        Rl(this.g, this));
        return b
    }
    ;
    l.V = function() {
        Hb(this.j, function(a) {
            a.V()
        });
        Wl.prototype.V.call(this)
    }
    ;
    l.td = function() {
        return Mb(this.j, function(a) {
            return a.G()
        })
    }
    ;
    l.Db = function() {
        return Mb(this.j, function(a) {
            return a.G()
        })
    }
    ;
    l.Tb = function(a, b, c) {
        return new yn(a,this.g,b,c)
    }
    ;
    l.Wa = function(a) {
        this.h = a.h
    }
    ;
    var ro = function(a) {
        if (!a.length)
            return [];
        a = Jb(a, function(c) {
            return null != c && c.G()
        });
        for (var b = 1; b < a.length; b++)
            Rl(a[b - 1], a[b]);
        return a
    };
    var to = {
        threshold: [0, .3, .5, .75, 1]
    }
      , uo = function(a, b, c, d) {
        Vl.call(this, a, b, c, d);
        this.D = this.K = this.A = this.B = this.o = null
    };
    t(uo, yn);
    uo.prototype.Gc = function() {
        var a = this;
        this.D || (this.D = Uk());
        if (Lk(298, function() {
            return vo(a)
        }))
            return !0;
        Ql(this.h, "msf");
        return !1
    }
    ;
    uo.prototype.Sb = function() {
        if (this.o && this.j)
            try {
                this.o.unobserve(this.j),
                this.B ? (this.B.unobserve(this.j),
                this.B = null) : this.A && (this.A.disconnect(),
                this.A = null)
            } catch (a) {}
    }
    ;
    var wo = function(a) {
        return a.o && a.o.takeRecords ? a.o.takeRecords() : []
    }
      , vo = function(a) {
        if (!a.j)
            return !1;
        var b = a.j
          , c = a.h.g.o
          , d = N().g.g;
        a.o = new c.IntersectionObserver(vk(d, function(e) {
            return xo(a, e)
        }),to);
        d = vk(d, function() {
            a.o.unobserve(b);
            a.o.observe(b);
            xo(a, wo(a))
        });
        c.ResizeObserver ? (a.B = new c.ResizeObserver(d),
        a.B.observe(b)) : c.MutationObserver && (a.A = new u.MutationObserver(d),
        a.A.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.o.observe(b);
        xo(a, wo(a));
        return !0
    }
      , xo = function(a, b) {
        try {
            if (b.length) {
                a.K || (a.K = Uk());
                var c = yo(b)
                  , d = ml(a.j, a.h.g.o)
                  , e = d.x
                  , f = d.y;
                a.g = new H(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = Al(c.intersectionRect);
                a.l = Vg(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.Sb(),
            Nk(299, h)
        }
    }
      , yo = function(a) {
        return Lb(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    };
    l = uo.prototype;
    l.Ua = function() {
        var a = wo(this);
        0 < a.length && xo(this, a);
        yn.prototype.Ua.call(this)
    }
    ;
    l.Jc = function() {}
    ;
    l.Rd = function() {
        return !1
    }
    ;
    l.Dd = function() {}
    ;
    l.Va = function() {
        var a = {};
        return Object.assign(this.h.Va(), (a.niot_obs = this.D,
        a.niot_cbk = this.K,
        a))
    }
    ;
    l.getName = function() {
        return "nio"
    }
    ;
    var zo = function(a) {
        a = void 0 === a ? O : a;
        Wl.call(this, new Ol(a,2))
    };
    t(zo, Wl);
    zo.prototype.getName = function() {
        return "nio"
    }
    ;
    zo.prototype.Db = function() {
        return !Kl().h && null != this.g.g.o.IntersectionObserver
    }
    ;
    zo.prototype.Tb = function(a, b, c) {
        return new uo(a,this.g,b,c)
    }
    ;
    var Bo = function() {
        var a = Ao();
        Ol.call(this, O.top, a, "geo")
    };
    t(Bo, Ol);
    Bo.prototype.Z = function() {
        return Kl().g
    }
    ;
    Bo.prototype.G = function() {
        var a = Ao();
        this.D !== a && (this.g != this && a > this.g.D && (this.g = this,
        Pl(this)),
        this.D = a);
        return 2 == a
    }
    ;
    var Ao = function() {
        N();
        var a = Kl();
        return a.j || a.h ? 0 : 2
    };
    var Co = function() {};
    var Do = function() {
        this.done = !1;
        this.g = {
            Oe: 0,
            Bd: 0,
            Sh: 0,
            Jd: 0,
            Rc: -1,
            Ve: 0,
            Ue: 0,
            We: 0,
            Of: 0
        };
        this.l = null;
        this.A = !1;
        this.j = null;
        this.B = 0;
        this.h = new Ml(this)
    }
      , Go = function() {
        var a = Eo;
        a.A || (a.A = !0,
        Fo(a, function() {
            return a.o.apply(a, ia(Ja.apply(0, arguments)))
        }),
        a.o())
    };
    Do.prototype.sample = function() {
        Ho(this, ko(), !1)
    }
    ;
    var Io = function() {
        J(Co);
        var a = J(po);
        null != a.g && a.g.g ? Sl(a.g.g) : Gl(Kl())
    }
      , Ho = function(a, b, c) {
        if (!a.done && (a.h.cancel(),
        0 != b.length)) {
            a.j = null;
            try {
                Io();
                var d = Uk();
                N().l = d;
                if (null != J(po).g)
                    for (var e = 0; e < b.length; e++)
                        Rm(b[e], d, c);
                for (d = 0; d < b.length; d++)
                    Sm(b[d]);
                ++a.g.Jd
            } finally {
                c ? Hb(b, function(f) {
                    f.pa.aa = 0
                }) : Nl(a.h)
            }
        }
    }
      , Fo = function(a, b) {
        if (!a.l) {
            b = Mk(142, b);
            pk();
            var c = qh(Qj);
            c && Ze(Qj, c, b, {
                capture: !1
            }) && (a.l = b)
        }
    };
    Do.prototype.o = function() {
        var a = Ll()
          , b = Uk();
        a ? (Tk || (Pk = b,
        Hb(jo.g, function(c) {
            var d = c.oa();
            d.T = sn(d, b, 1 != c.la)
        })),
        Tk = !0) : (this.B = Jo(this, b),
        Tk = !1,
        Rk = b,
        Hb(jo.g, function(c) {
            c.Hb && (c.oa().H = b)
        }));
        Ho(this, ko(), !a)
    }
    ;
    var Ko = function() {
        var a = J(po);
        if (null != a.g) {
            var b = a.g;
            Hb(ko(), function(c) {
                return Pm(c, b)
            })
        }
    }
      , Jo = function(a, b) {
        a = a.B;
        Tk && (a += b - Pk);
        return a
    }
      , Lo = function(a) {
        a = void 0 === a ? function() {
            return {}
        }
        : a;
        Ik.jd("av-js");
        Ek.g = .01;
        Kk([function(b) {
            var c = N()
              , d = {};
            d = (d.bin = c.h,
            d.type = "error",
            d);
            c = Mj(c.R);
            if (!Eo.j) {
                var e = Eo
                  , f = O.document
                  , g = 0 <= Qk ? Uk() - Qk : -1
                  , h = Uk();
                -1 == e.g.Rc && (g = h);
                var k = Kl()
                  , m = N()
                  , n = Mj(m.R)
                  , r = ko();
                try {
                    if (0 < r.length) {
                        var v = k.g;
                        v && (n.bs = [v.getWidth(), v.getHeight()]);
                        var y = k.o;
                        y && (n.ps = [y.width, y.height]);
                        O.screen && (n.scs = [O.screen.width, O.screen.height])
                    } else
                        n.url = encodeURIComponent(O.location.href.substring(0, 512)),
                        f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                    n.tt = g;
                    n.pt = Qk;
                    n.bin = m.h;
                    void 0 !== O.google_osd_load_pub_page_exp && (n.olpp = O.google_osd_load_pub_page_exp);
                    n.deb = [1, e.g.Oe, e.g.Bd, e.g.Jd, e.g.Rc, 0, e.h.h, e.g.Ve, e.g.Ue, e.g.We, e.g.Of, -1].join(";");
                    n.tvt = Jo(e, h);
                    k.h && (n.inapp = 1);
                    if (null !== O && O != O.top) {
                        0 < r.length && (n.iframe_loc = encodeURIComponent(O.location.href.substring(0, 512)));
                        var B = k.H;
                        n.is = [B.getWidth(), B.getHeight()]
                    }
                } catch (Za) {
                    n.error = 1
                }
                Eo.j = n
            }
            y = Eo.j;
            v = {};
            for (var A in y)
                v[A] = y[A];
            A = N().g;
            if (1 == Lj(A.j, "prf")) {
                y = new tk;
                B = A.g;
                e = 0;
                -1 < B.g && (e = B.j.g.g() - B.g);
                B = B.o + e;
                if (null != B && "number" !== typeof B)
                    throw Error("Value of float/double field must be a number|null|undefined, found " + typeof B + ": " + B);
                y = Nd(y, 1, B, 0);
                B = A.g;
                y = Nd(y, 5, -1 < B.g ? B.h + 1 : B.h, 0);
                y = Nd(y, 2, A.h.g.o(), 0);
                y = Nd(y, 3, A.h.g.j(), 0);
                A = Nd(y, 4, A.h.g.h(), 0);
                y = {};
                A = (y.pf = Fc(A.A()),
                y)
            } else
                A = {};
            vf(v, A);
            vf(b, d, c, v, a())
        }
        ])
    }
      , Eo = J(Do);
    var Mo = null
      , No = ""
      , Oo = !1
      , Po = function() {
        var a = Mo || O;
        if (!a)
            return "";
        var b = [];
        if (!a.location || !a.location.href)
            return "";
        b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
        a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
        return b.join("&")
    };
    function Qo() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/), b;
        if (2 == (null == (b = a) ? void 0 : b.length))
            return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : null
    }
    var Ro = function() {
        return "ima_html5_sdk".includes("ima_html5_sdk") ? {
            Ca: "ima",
            Da: null
        } : "ima_html5_sdk".includes("ima_native_sdk") ? {
            Ca: "nima",
            Da: null
        } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
            Ca: "an",
            Da: null
        } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
            Ca: "cast",
            Da: Qo()
        } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
            Ca: "yw",
            Da: Qo()
        } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
            Ca: "out",
            Da: Qo()
        } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
            Ca: "r",
            Da: Qo()
        } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
            Ca: "n",
            Da: Qo()
        } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
            Ca: "int",
            Da: Qo()
        } : {
            Ca: "j",
            Da: null
        }
    }
      , So = Ro().Ca
      , To = Ro().Da;
    var Vo = function(a, b) {
        var c = {
            sv: "954"
        };
        null !== To && (c.v = To);
        c.cb = So;
        c.nas = jo.g.length;
        c.msg = a;
        void 0 !== b && (a = Uo(b)) && (c.e = bl[a]);
        return c
    }
      , Wo = function(a) {
        return 0 == a.lastIndexOf("custom_metric_viewable", 0)
    }
      , Uo = function(a) {
        var b = Wo(a) ? "custom_metric_viewable" : a.toLowerCase();
        return pf(function(c) {
            return c == b
        })
    };
    var Xo = {
        ug: "visible",
        dg: "audible",
        rh: "time",
        th: "timetype"
    }
      , Yo = {
        visible: function(a) {
            return /^(100|[0-9]{1,2})$/.test(a)
        },
        audible: function(a) {
            return "0" == a || "1" == a
        },
        timetype: function(a) {
            return "mtos" == a || "tos" == a
        },
        time: function(a) {
            return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
        }
    }
      , Zo = function() {
        this.g = void 0;
        this.h = !1;
        this.j = 0;
        this.o = -1;
        this.l = "tos"
    }
      , $o = function(a) {
        try {
            var b = a.split(",");
            return b.length > lf(Xo).length ? null : Lb(b, function(c, d) {
                d = d.toLowerCase().split("=");
                if (2 != d.length || void 0 === Yo[d[0]] || !Yo[d[0]](d[1]))
                    throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c
            }, {})
        } catch (c) {
            return null
        }
    }
      , ap = function(a, b) {
        if (void 0 == a.g)
            return 0;
        switch (a.l) {
        case "mtos":
            return a.h ? sm(b.g, a.g) : sm(b.h, a.g);
        case "tos":
            return a.h ? qm(b.g, a.g) : qm(b.h, a.g)
        }
        return 0
    };
    var bp = function(a, b, c, d) {
        un.call(this, b, d);
        this.B = a;
        this.H = c
    };
    t(bp, un);
    bp.prototype.getId = function() {
        return this.B
    }
    ;
    bp.prototype.A = function() {
        return !0
    }
    ;
    bp.prototype.g = function(a) {
        var b = a.oa()
          , c = a.getDuration();
        return Mb(this.H, function(d) {
            if (void 0 != d.g)
                var e = ap(d, b);
            else
                b: {
                    switch (d.l) {
                    case "mtos":
                        e = d.h ? b.l.j : b.j.g;
                        break b;
                    case "tos":
                        e = d.h ? b.l.g : b.j.g;
                        break b
                    }
                    e = 0
                }
            0 == e ? d = !1 : (d = -1 != d.j ? d.j : void 0 !== c && 0 < c ? d.o * c : -1,
            d = -1 != d && e >= d);
            return d
        })
    }
    ;
    var cp = function() {};
    t(cp, kn);
    cp.prototype.g = function(a) {
        var b = new jn;
        b.g = ln(a, fn);
        b.h = ln(a, hn);
        return b
    }
    ;
    var dp = function(a) {
        un.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    t(dp, un);
    dp.prototype.g = function(a) {
        return Mn(a)
    }
    ;
    var ep = function(a) {
        this.g = a
    };
    t(ep, wn);
    var fp = function(a, b) {
        un.call(this, a, b)
    };
    t(fp, un);
    fp.prototype.g = function(a) {
        return a.oa().Ka()
    }
    ;
    var gp = function(a) {
        vn.call(this, "measurable_impression", a)
    };
    t(gp, vn);
    gp.prototype.g = function(a) {
        var b = Qb(this.B, Lj(N().R, "ovms"));
        return !a.Ja && (0 != a.la || b)
    }
    ;
    var hp = function() {
        ep.apply(this, arguments)
    };
    t(hp, ep);
    hp.prototype.h = function() {
        return new gp(this.g)
    }
    ;
    hp.prototype.j = function() {
        return [new fp("viewable_impression",this.g), new dp(this.g)]
    }
    ;
    var ip = function(a, b, c) {
        An.call(this, a, b, c)
    };
    t(ip, An);
    ip.prototype.o = function() {
        var a = Na("ima.admob.getViewability")
          , b = Lj(this.R, "queryid");
        "function" === typeof a && b && a(b)
    }
    ;
    ip.prototype.getName = function() {
        return "gsv"
    }
    ;
    var jp = function(a) {
        a = void 0 === a ? O : a;
        Wl.call(this, new Ol(a,2))
    };
    t(jp, Wl);
    jp.prototype.getName = function() {
        return "gsv"
    }
    ;
    jp.prototype.Db = function() {
        var a = Kl();
        N();
        return a.h && !1
    }
    ;
    jp.prototype.Tb = function(a, b, c) {
        return new ip(this.g,b,c)
    }
    ;
    var kp = function(a, b, c) {
        An.call(this, a, b, c)
    };
    t(kp, An);
    kp.prototype.o = function() {
        var a = this
          , b = Na("ima.bridge.getNativeViewability")
          , c = Lj(this.R, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            rf(d) && a.A++;
            var e = d.opt_nativeViewVisibleBounds || {}
              , f = d.opt_nativeViewHidden;
            a.g = Bl(d.opt_nativeViewBounds || {});
            var g = a.h.l;
            g.g = f ? Ug(zn) : Bl(e);
            a.timestamp = d.opt_nativeTime || -1;
            Kl().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    }
    ;
    kp.prototype.getName = function() {
        return "nis"
    }
    ;
    var lp = function(a) {
        a = void 0 === a ? O : a;
        Wl.call(this, new Ol(a,2))
    };
    t(lp, Wl);
    lp.prototype.getName = function() {
        return "nis"
    }
    ;
    lp.prototype.Db = function() {
        var a = Kl();
        N();
        return a.h && !1
    }
    ;
    lp.prototype.Tb = function(a, b, c) {
        return new kp(this.g,b,c)
    }
    ;
    var mp = function() {
        Ol.call(this, O, 2, "mraid");
        this.ca = 0;
        this.J = this.L = !1;
        this.K = null;
        this.h = cl(this.o);
        this.l.g = new H(0,0,0,0);
        this.ga = !1
    };
    t(mp, Ol);
    mp.prototype.G = function() {
        return null != this.h.xa
    }
    ;
    mp.prototype.Y = function() {
        var a = {};
        this.ca && (a.mraid = this.ca);
        this.L && (a.mlc = 1);
        a.mtop = this.h.Nf;
        this.K && (a.mse = this.K);
        this.ga && (a.msc = 1);
        a.mcp = this.h.dc;
        return a
    }
    ;
    mp.prototype.B = function(a) {
        var b = Ja.apply(1, arguments);
        try {
            return this.h.xa[a].apply(this.h.xa, b)
        } catch (c) {
            Nk(538, c, .01, function(d) {
                d.method = a
            })
        }
    }
    ;
    var np = function(a, b, c) {
        a.B("addEventListener", b, c)
    };
    mp.prototype.initialize = function() {
        var a = this;
        if (this.j)
            return !this.Jb();
        this.j = !0;
        if (2 === this.h.dc)
            return this.K = "ng",
            Ql(this, "w"),
            !1;
        if (1 === this.h.dc)
            return this.K = "mm",
            Ql(this, "w"),
            !1;
        Kl().K = !0;
        this.o.document.readyState && "complete" == this.o.document.readyState ? op(this) : Em(this.o, "load", function() {
            pk().setTimeout(Mk(292, function() {
                return op(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    var op = function(a) {
        N().o = !!a.B("isViewable");
        np(a, "viewableChange", pp);
        "loading" === a.B("getState") ? np(a, "ready", qp) : rp(a)
    }
      , rp = function(a) {
        "string" === typeof a.h.xa.AFMA_LIDAR ? (a.L = !0,
        sp(a)) : (a.h.dc = 3,
        a.K = "nc",
        Ql(a, "w"))
    }
      , sp = function(a) {
        a.J = !1;
        var b = 1 == Lj(N().R, "rmmt")
          , c = !!a.B("isViewable");
        (b ? !c : 1) && pk().setTimeout(Mk(524, function() {
            a.J || (tp(a),
            Nk(540, Error()),
            a.K = "mt",
            Ql(a, "w"))
        }), 500);
        up(a);
        np(a, a.h.xa.AFMA_LIDAR, vp)
    }
      , up = function(a) {
        var b = 1 == Lj(N().R, "sneio")
          , c = void 0 !== a.h.xa.AFMA_LIDAR_EXP_1
          , d = void 0 !== a.h.xa.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.h.xa.AFMA_LIDAR_EXP_2 = !0);
        c && (a.h.xa.AFMA_LIDAR_EXP_1 = !b)
    }
      , tp = function(a) {
        a.B("removeEventListener", a.h.xa.AFMA_LIDAR, vp);
        a.L = !1
    };
    mp.prototype.T = function() {
        var a = Kl()
          , b = wp(this, "getMaxSize");
        a.g = new H(0,b.width,b.height,0)
    }
    ;
    mp.prototype.U = function() {
        Kl().l = wp(this, "getScreenSize")
    }
    ;
    var wp = function(a, b) {
        if ("loading" === a.B("getState"))
            return new F(-1,-1);
        b = a.B(b);
        if (!b)
            return new F(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new F(-1,-1) : new F(a,b)
    };
    mp.prototype.V = function() {
        tp(this);
        Ol.prototype.V.call(this)
    }
    ;
    var qp = function() {
        try {
            var a = J(mp);
            a.B("removeEventListener", "ready", qp);
            rp(a)
        } catch (b) {
            Nk(541, b)
        }
    }
      , vp = function(a, b) {
        try {
            var c = J(mp);
            c.J = !0;
            var d = a ? new H(a.y,a.x + a.width,a.y + a.height,a.x) : new H(0,0,0,0);
            var e = Uk()
              , f = Ll();
            var g = new Wk(e,f,c);
            g.g = d;
            g.volume = b;
            c.Wa(g)
        } catch (h) {
            Nk(542, h)
        }
    }
      , pp = function(a) {
        var b = N()
          , c = J(mp);
        a && !b.o && (b.o = !0,
        c.ga = !0,
        c.K && Ql(c, "w", !0))
    };
    var yk = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }
    ("45378663");
    var yp = function() {
        this.o = this.j = !1;
        this.g = this.h = null;
        var a = {};
        this.L = (a.start = this.nf,
        a.firstquartile = this.hf,
        a.midpoint = this.kf,
        a.thirdquartile = this.qf,
        a.complete = this.df,
        a.error = this.ff,
        a.pause = this.cd,
        a.resume = this.ae,
        a.skip = this.mf,
        a.viewable_impression = this.Ea,
        a.mute = this.Ab,
        a.unmute = this.Ab,
        a.fullscreen = this.jf,
        a.exitfullscreen = this.gf,
        a.fully_viewable_audible_half_duration_impression = this.Ea,
        a.measurable_impression = this.Ea,
        a.abandon = this.cd,
        a.engagedview = this.Ea,
        a.impression = this.Ea,
        a.creativeview = this.Ea,
        a.progress = this.Ab,
        a.custom_metric_viewable = this.Ea,
        a.bufferstart = this.cd,
        a.bufferfinish = this.ae,
        a.audio_measurable = this.Ea,
        a.audio_audible = this.Ea,
        a);
        a = {};
        this.T = (a.overlay_resize = this.lf,
        a.abandon = this.Qc,
        a.close = this.Qc,
        a.collapse = this.Qc,
        a.overlay_unmeasurable_impression = function(b) {
            return Un(b, "overlay_unmeasurable_impression", Ll())
        }
        ,
        a.overlay_viewable_immediate_impression = function(b) {
            return Un(b, "overlay_viewable_immediate_impression", Ll())
        }
        ,
        a.overlay_unviewable_impression = function(b) {
            return Un(b, "overlay_unviewable_impression", Ll())
        }
        ,
        a.overlay_viewable_end_of_session_impression = function(b) {
            return Un(b, "overlay_viewable_end_of_session_impression", Ll())
        }
        ,
        a);
        N().h = 3;
        xp(this)
    };
    yp.prototype.A = function(a) {
        Om(a, !1);
        mo(a)
    }
    ;
    yp.prototype.K = function() {}
    ;
    var zp = function(a, b, c, d) {
        a = a.B(null, d, !0, b);
        a.l = c;
        no([a]);
        return a
    };
    yp.prototype.B = function(a, b, c, d) {
        var e = this;
        a = new En(O,a,c ? b : -1,7,this.Lc(),this.Id());
        a.ma = d;
        Jj(a.R);
        Kj(a.R, "queryid", a.ma);
        a.ed("");
        Tm(a, function() {
            return e.J.apply(e, ia(Ja.apply(0, arguments)))
        }, function() {
            return e.O.apply(e, ia(Ja.apply(0, arguments)))
        });
        (d = J(po).g) && Pm(a, d);
        a.sa.Ya && J(Co);
        return a
    }
    ;
    var Ap = function(a, b, c) {
        rj(b);
        var d = a.g;
        Hb(b, function(e) {
            var f = Kb(e.j, function(g) {
                var h = $o(g);
                if (null == h)
                    g = null;
                else if (g = new Zo,
                null != h.visible && (g.g = h.visible / 100),
                null != h.audible && (g.h = 1 == h.audible),
                null != h.time) {
                    var k = "mtos" == h.timetype ? "mtos" : "tos"
                      , m = gb(h.time, "%") ? "%" : "ms";
                    h = parseInt(h.time, 10);
                    "%" == m && (h /= 100);
                    "ms" == m ? (g.j = h,
                    g.o = -1) : (g.j = -1,
                    g.o = h);
                    g.l = void 0 === k ? "tos" : k
                }
                return g
            });
            Mb(f, function(g) {
                return null == g
            }) || Ln(c, new bp(e.id,e.g,f,d))
        })
    }
      , Bp = function() {
        var a = []
          , b = N();
        a.push(J(Bo));
        Lj(b.R, "mvp_lv") && a.push(J(mp));
        b = [new jp, new lp];
        b.push(new so(a));
        b.push(new zo(O));
        return b
    }
      , Dp = function(a) {
        if (!a.j) {
            a.j = !0;
            try {
                var b = Uk()
                  , c = N()
                  , d = Kl();
                Qk = b;
                c.j = 79463069;
                "o" !== a.h && (Mo = Tg(O));
                if (qk()) {
                    Eo.g.Bd = 0;
                    Eo.g.Rc = Uk() - b;
                    var e = Bp()
                      , f = J(po);
                    f.h = e;
                    qo(f, function() {
                        Cp()
                    }) ? Eo.done || (Ko(),
                    Rl(f.g.g, a),
                    Go()) : d.j ? Cp() : Go()
                } else
                    Oo = !0
            } catch (g) {
                throw jo.reset(),
                g;
            }
        }
    }
      , Ep = function(a) {
        Eo.h.cancel();
        No = a;
        Eo.done = !0
    }
      , Fp = function(a) {
        if (a.h)
            return a.h;
        var b = J(po).g;
        if (b)
            switch (b.getName()) {
            case "nis":
                a.h = "n";
                break;
            case "gsv":
                a.h = "m"
            }
        a.h || (a.h = "h");
        return a.h
    }
      , Gp = function(a, b, c) {
        if (null == a.g)
            return b.Bb |= 4,
            !1;
        a = a.g.report(c, b);
        b.Bb |= a;
        return 0 == a
    };
    yp.prototype.wb = function(a) {
        switch (a.Ia()) {
        case 0:
            if (a = J(po).g)
                a = a.g,
                Rb(a.A, this),
                a.F && this.Fa() && Tl(a);
            Cp();
            break;
        case 2:
            Go()
        }
    }
    ;
    yp.prototype.Wa = function() {}
    ;
    yp.prototype.Fa = function() {
        return !1
    }
    ;
    var Cp = function() {
        var a = [new zo(O)]
          , b = J(po);
        b.h = a;
        qo(b, function() {
            Ep("i")
        }) ? Eo.done || (Ko(),
        Go()) : Ep("i")
    };
    yp.prototype.O = function(a, b) {
        a.Ja = !0;
        switch (a.ua()) {
        case 1:
            Hp(a, b);
            break;
        case 2:
            this.gd(a)
        }
        this.hd(a)
    }
    ;
    var Hp = function(a, b) {
        if (!a.Ba) {
            var c = Un(a, "start", Ll());
            c = a.dd.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "954";
            null !== To && (d.v = To);
            wg(c, function(e, f) {
                return d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f)
            });
            b = Po();
            wg(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + dm(bm(new $l, d));
            gm(b);
            a.Ba = !0
        }
    };
    l = yp.prototype;
    l.nf = function(a) {
        var b = a.B(a);
        b && (b = b.volume,
        a.ka = Cl(b) && 0 < b);
        Qn(a, 0);
        return Un(a, "start", Ll())
    }
    ;
    l.Ab = function(a, b, c) {
        Ho(Eo, [a], !Ll());
        return this.Ea(a, b, c)
    }
    ;
    l.Ea = function(a, b, c) {
        return Un(a, c, Ll())
    }
    ;
    l.hf = function(a) {
        return Ip(a, "firstquartile", 1)
    }
    ;
    l.kf = function(a) {
        a.Z = !0;
        return Ip(a, "midpoint", 2)
    }
    ;
    l.qf = function(a) {
        return Ip(a, "thirdquartile", 3)
    }
    ;
    l.df = function(a) {
        var b = Ip(a, "complete", 4);
        Fn(a);
        return b
    }
    ;
    l.ff = function(a) {
        a.la = 3;
        return Un(a, "error", Ll())
    }
    ;
    var Ip = function(a, b, c) {
        Ho(Eo, [a], !Ll());
        Qn(a, c);
        4 != c && Pn(a.J, c, a.hc);
        return Un(a, b, Ll())
    };
    l = yp.prototype;
    l.ae = function(a, b, c) {
        b = Ll();
        2 != a.la || b || (a.oa().H = Uk());
        Ho(Eo, [a], !b);
        2 == a.la && (a.la = 1);
        return Un(a, c, b)
    }
    ;
    l.mf = function(a, b) {
        b = this.Ab(a, b || {}, "skip");
        Fn(a);
        return b
    }
    ;
    l.jf = function(a, b) {
        Om(a, !0);
        return this.Ab(a, b || {}, "fullscreen")
    }
    ;
    l.gf = function(a, b) {
        Om(a, !1);
        return this.Ab(a, b || {}, "exitfullscreen")
    }
    ;
    l.cd = function(a, b, c) {
        b = a.oa();
        b.T = sn(b, Uk(), 1 != a.la);
        Ho(Eo, [a], !Ll());
        1 == a.la && (a.la = 2);
        return Un(a, c, Ll())
    }
    ;
    l.lf = function(a) {
        Ho(Eo, [a], !Ll());
        return a.h()
    }
    ;
    l.Qc = function(a) {
        Ho(Eo, [a], !Ll());
        this.Yd(a);
        Fn(a);
        return a.h()
    }
    ;
    var xp = function(a) {
        Lo(function() {
            var b = Jp();
            null != a.h && (b.sdk = a.h);
            var c = J(po);
            null != c.g && (b.avms = c.g.getName());
            return b
        })
    }
      , Kp = function(a, b, c, d) {
        var e = ho(jo, c);
        null !== e && e.ma !== b && (a.A(e),
        e = null);
        e || (b = a.B(c, Uk(), !1, b),
        0 == jo.h.length && (N().j = 79463069),
        oo([b]),
        e = b,
        e.l = Fp(a),
        d && (e.playerId = d));
        return e
    };
    yp.prototype.J = function() {}
    ;
    var Mp = function(a, b) {
        b.D = 0;
        for (var c in Yk)
            null == a[c] && (b.D |= Yk[c]);
        Lp(a, "currentTime");
        Lp(a, "duration")
    };
    l = yp.prototype;
    l.gd = function() {}
    ;
    l.Yd = function() {}
    ;
    l.ud = function() {}
    ;
    l.hd = function() {}
    ;
    l.Mc = function() {}
    ;
    l.Id = function() {
        this.g || (this.g = this.Mc());
        return null == this.g || this.o ? new xn : new hp(this.g)
    }
    ;
    l.Lc = function() {
        return new cp
    }
    ;
    var Lp = function(a, b) {
        var c = a[b];
        void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
    }
      , Jp = function() {
        var a = Kl()
          , b = {}
          , c = {}
          , d = {};
        return Object.assign({}, (b.sv = "954",
        b), null !== To && (c.v = To,
        c), (d["if"] = a.j ? "1" : "0",
        d.nas = String(jo.g.length),
        d))
    };
    var Np = function(a) {
        un.call(this, "audio_audible", a)
    };
    t(Np, un);
    Np.prototype.g = function(a) {
        return 4 == a.ec()
    }
    ;
    var Op = function(a) {
        vn.call(this, "audio_measurable", a)
    };
    t(Op, vn);
    Op.prototype.g = function(a) {
        a = a.ec();
        return 3 == a || 4 == a
    }
    ;
    var Pp = function() {
        ep.apply(this, arguments)
    };
    t(Pp, ep);
    Pp.prototype.h = function() {
        return new Op(this.g)
    }
    ;
    Pp.prototype.j = function() {
        return [new Np(this.g)]
    }
    ;
    var Qp = function() {};
    t(Qp, kn);
    Qp.prototype.g = function(a) {
        a && (28 === a.e && (a = Object.assign({}, a, {
            avas: 3
        })),
        4 === a.vs || 5 === a.vs) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new jn;
        b.g = ln(a, gn);
        b.h = ln(a, hn);
        return b
    }
    ;
    var Rp = function(a) {
        this.h = a
    };
    Rp.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            var e = {};
            d = Object.assign({}, null !== To && (d.v = To,
            d), (e.sv = "954",
            e.cb = So,
            e.e = Sp(a),
            e));
            e = Un(b, a, Ll());
            vf(d, e);
            b.ge[a] = e;
            d = 2 == b.ua() ? fm(d).join("&") : b.dd.g(d).g;
            try {
                return c(b.ma, d, a),
                0
            } catch (f) {
                return 2
            }
        } else
            return 1
    }
    ;
    var Sp = function(a) {
        var b = Wo(a) ? "custom_metric_viewable" : a;
        a = pf(function(c) {
            return c == b
        });
        return bl[a]
    };
    Rp.prototype.g = function() {
        return Na(this.h)
    }
    ;
    var Tp = function(a, b) {
        this.h = a;
        this.j = b
    };
    t(Tp, Rp);
    Tp.prototype.g = function(a) {
        if (!a.playerId)
            return Rp.prototype.g.call(this, a);
        if (this.j[a.playerId])
            return function() {}
            ;
        Nk(393, Error());
        return null
    }
    ;
    var Up = function() {
        yp.call(this);
        this.F = void 0;
        this.G = null;
        this.D = !1;
        this.l = {};
        this.I = 0;
        this.H = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    t(Up, yp);
    Up.prototype.K = function(a, b) {
        var c = this
          , d = J(po);
        if (null != d.g)
            switch (d.g.getName()) {
            case "nis":
                var e = Vp(this, a, b);
                break;
            case "gsv":
                e = Wp(this, a, b);
                break;
            case "exc":
                e = Xp(this, a)
            }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Kp(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.ua() && (e.B == Te && (e.B = function(f) {
            return c.ud(f)
        }
        ),
        Yp(this, e, b));
        return e
    }
    ;
    var Yp = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.g && Array.isArray(c) && Ap(a, c, b)
    };
    Up.prototype.ud = function(a) {
        a.h = 0;
        a.L = 0;
        if ("h" == a.l || "n" == a.l) {
            var b;
            N();
            if (a.playerId && Zp(this)) {
                var c = this.l[a.playerId];
                c ? b = function(e) {
                    return $p(c, e)
                }
                : null !== c && Nk(379, Error())
            } else
                b = Na("ima.common.getVideoMetadata");
            if ("function" === typeof b)
                try {
                    var d = b(a.ma)
                } catch (e) {
                    a.h |= 4
                }
            else
                a.h |= 2
        } else if ("b" == a.l)
            if (b = Na("ytads.bulleit.getVideoMetadata"),
            "function" === typeof b)
                try {
                    d = b(a.ma)
                } catch (e) {
                    a.h |= 4
                }
            else
                a.h |= 2;
        else if ("ml" == a.l)
            if (b = Na("ima.common.getVideoMetadata"),
            "function" === typeof b)
                try {
                    d = b(a.ma)
                } catch (e) {
                    a.h |= 4
                }
            else
                a.h |= 2;
        else
            a.h |= 1;
        a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : rf(d) ? a.h |= 32 : null != d.errorCode && (a.L = d.errorCode,
        a.h |= 64));
        null == d && (d = {});
        Mp(d, a);
        Cl(d.volume) && Cl(this.F) && (d.volume *= this.F);
        return d
    }
    ;
    var Wp = function(a, b, c) {
        var d = go(jo, b);
        d || (d = c.opt_nativeTime || -1,
        d = zp(a, b, Fp(a), d),
        c.opt_osdId && (d.playerId = c.opt_osdId));
        return d
    }
      , Vp = function(a, b, c) {
        var d = go(jo, b);
        d || (d = zp(a, b, "n", c.opt_nativeTime || -1));
        return d
    }
      , Xp = function(a, b) {
        var c = go(jo, b);
        c || (c = zp(a, b, "h", -1));
        return c
    };
    Up.prototype.Mc = function() {
        if (Zp(this))
            return new Tp("ima.common.triggerExternalActivityEvent",this.l);
        var a = aq(this);
        return null != a ? new Rp(a) : null
    }
    ;
    var aq = function(a) {
        N();
        switch (Fp(a)) {
        case "b":
            return "ytads.bulleit.triggerExternalActivityEvent";
        case "n":
            return "ima.bridge.triggerExternalActivityEvent";
        case "h":
        case "m":
        case "ml":
            return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Up.prototype.gd = function(a) {
        !a.g && a.Ja && Gp(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    }
    ;
    Up.prototype.Yd = function(a) {
        a.be && (a.Ka() ? Gp(this, a, "overlay_viewable_end_of_session_impression") : Gp(this, a, "overlay_unviewable_impression"),
        a.be = !1)
    }
    ;
    var bq = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        vf(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.K(b, c);
        c = f ? f.dd : a.Lc();
        if (e.opt_bounds)
            return c.g(Vo("ol", d));
        if (void 0 !== d)
            if (void 0 !== Uo(d))
                if (Oo)
                    a = Vo("ue", d);
                else if (Dp(a),
                "i" == No)
                    a = Vo("i", d),
                    a["if"] = 0;
                else if (b = a.K(b, e)) {
                    b: {
                        "i" == No && (b.Ja = !0,
                        a.hd(b));
                        f = e.opt_fullscreen;
                        void 0 !== f && Om(b, !!f);
                        var g;
                        if (f = !Kl().h && !Fl())
                            pk(),
                            f = 0 === ph(Qj);
                        if (g = f) {
                            switch (b.ua()) {
                            case 1:
                                Hp(b, "pv");
                                break;
                            case 2:
                                a.gd(b)
                            }
                            Ep("pv")
                        }
                        f = d.toLowerCase();
                        if (g = !g)
                            c: {
                                if (Lj(N().R, "ssmol") && (g = a.o,
                                "loaded" === f))
                                    break c;
                                g = Qb(Zk, f)
                            }
                        if (g && 0 == b.la) {
                            "i" != No && (Eo.done = !1);
                            g = void 0 !== e ? e.opt_nativeTime : void 0;
                            Sk = g = "number" === typeof g ? g : Uk();
                            b.Hb = !0;
                            var h = Ll();
                            b.la = 1;
                            b.ia = {};
                            b.ia.start = !1;
                            b.ia.firstquartile = !1;
                            b.ia.midpoint = !1;
                            b.ia.thirdquartile = !1;
                            b.ia.complete = !1;
                            b.ia.resume = !1;
                            b.ia.pause = !1;
                            b.ia.skip = !1;
                            b.ia.mute = !1;
                            b.ia.unmute = !1;
                            b.ia.viewable_impression = !1;
                            b.ia.measurable_impression = !1;
                            b.ia.fully_viewable_audible_half_duration_impression = !1;
                            b.ia.fullscreen = !1;
                            b.ia.exitfullscreen = !1;
                            b.Nc = 0;
                            h || (b.oa().H = g);
                            Ho(Eo, [b], !h)
                        }
                        (g = b.ob[f]) && b.fa.reportEvent(g);
                        Lj(N().R, "fmd") || Qb($k, f) && b.Ma && b.Ma.h(b, null);
                        switch (b.ua()) {
                        case 1:
                            var k = Wo(f) ? a.L.custom_metric_viewable : a.L[f];
                            break;
                        case 2:
                            k = a.T[f]
                        }
                        if (k && (d = k.call(a, b, e, d),
                        Lj(N().R, "fmd") && Qb($k, f) && b.Ma && b.Ma.h(b, null),
                        void 0 !== d)) {
                            e = Vo(void 0, f);
                            vf(e, d);
                            d = e;
                            break b
                        }
                        d = void 0
                    }
                    3 == b.la && a.A(b);
                    a = d
                } else
                    a = Vo("nf", d);
            else
                a = void 0;
        else
            Oo ? a = Vo("ue") : f ? (a = Vo(),
            vf(a, Tn(f, !0, !1, !1))) : a = Vo("nf");
        return "string" === typeof a ? c.g() : c.g(a)
    };
    Up.prototype.J = function(a) {
        this.o && 1 == a.ua() && cq(this, a)
    }
    ;
    Up.prototype.hd = function(a) {
        this.o && 1 == a.ua() && cq(this, a)
    }
    ;
    var cq = function(a, b) {
        var c;
        if (b.playerId && Zp(a)) {
            var d = a.l[b.playerId];
            d ? c = function(f, g) {
                dq(d, f, g)
            }
            : null !== d && Nk(379, Error())
        } else
            c = Na("ima.common.triggerViewabilityMeasurementUpdate");
        if ("function" === typeof c) {
            var e = Nn(b);
            e.nativeVolume = a.F;
            c(b.ma, e)
        }
    }
      , eq = function(a, b, c) {
        a.l[b] = c
    }
      , Zp = function(a) {
        return (N(),
        "h" != Fp(a) && "m" != Fp(a)) ? !1 : 0 != a.I
    };
    Up.prototype.B = function(a, b, c, d) {
        if (zk()) {
            var e = Lj(N().R, "mm")
              , f = {};
            (e = (f[uj.ie] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO",
            f[uj.Ne] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO",
            f)[e]) && e && (this.H = e);
            "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.H && Nk(1044, Error())
        }
        a = yp.prototype.B.call(this, a, b, c, d);
        this.D && (b = this.G,
        null == a.o && (a.o = new Wm),
        b.g[a.ma] = a.o,
        a.o.l = Wn);
        return a
    }
    ;
    Up.prototype.A = function(a) {
        a && 1 == a.ua() && this.D && delete this.G.g[a.ma];
        return yp.prototype.A.call(this, a)
    }
    ;
    Up.prototype.Id = function() {
        this.g || (this.g = this.Mc());
        return null == this.g || this.o ? new xn : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.H ? new Pp(this.g) : new hp(this.g)
    }
    ;
    Up.prototype.Lc = function() {
        return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.H ? new Qp : new cp
    }
    ;
    var fq = function(a) {
        var b = {};
        return b.viewability = a.g,
        b.googleViewability = a.h,
        b
    }
      , gq = function(a, b, c) {
        c = void 0 === c ? {} : c;
        a = bq(J(Up), b, c, a);
        return fq(a)
    }
      , hq = Mk(193, gq, void 0, Jp);
    w("Goog_AdSense_Lidar_sendVastEvent", hq);
    var iq = Mk(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = bq(J(Up), a, b);
        return fq(a)
    });
    w("Goog_AdSense_Lidar_getViewability", iq);
    var jq = Mk(195, function() {
        return rk()
    });
    w("Goog_AdSense_Lidar_getUrlSignalsArray", jq);
    var kq = Mk(196, function() {
        return JSON.stringify(rk())
    });
    w("Goog_AdSense_Lidar_getUrlSignalsList", kq);
    u.console && "function" === typeof u.console.log && Wa(u.console.log, u.console);
    var lq = function(a) {
        for (var b = [], c = a = G(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement)
                b.push(c.frameElement);
            else
                break;
        return b
    };
    var mq = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.h = !1
    };
    mq.prototype.stopPropagation = function() {
        this.h = !0
    }
    ;
    mq.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var nq = function() {
        if (!u.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            var c = function() {};
            u.addEventListener("test", c, b);
            u.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var oq = function(a, b) {
        mq.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    $a(oq, mq);
    var pq = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    oq.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? hc && (bc(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : pq[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && oq.za.preventDefault.call(this)
    }
    ;
    oq.prototype.stopPropagation = function() {
        oq.za.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    }
    ;
    oq.prototype.preventDefault = function() {
        oq.za.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var qq = "closure_listenable_" + (1E6 * Math.random() | 0)
      , rq = function(a) {
        return !(!a || !a[qq])
    };
    var sq = 0;
    var tq = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.jc = e;
        this.key = ++sq;
        this.Ob = this.Yb = !1
    }
      , uq = function(a) {
        a.Ob = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.jc = null
    };
    var vq = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    vq.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.h++);
        var g = wq(a, b, d, e);
        -1 < g ? (b = a[g],
        c || (b.Yb = !1)) : (b = new tq(b,this.src,f,!!d,e),
        b.Yb = c,
        a.push(b));
        return b
    }
    ;
    vq.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g))
            return !1;
        var e = this.g[a];
        b = wq(e, b, c, d);
        return -1 < b ? (uq(e[b]),
        Sb(e, b),
        0 == e.length && (delete this.g[a],
        this.h--),
        !0) : !1
    }
    ;
    var xq = function(a, b) {
        var c = b.type;
        c in a.g && Rb(a.g[c], b) && (uq(b),
        0 == a.g[c].length && (delete a.g[c],
        a.h--))
    };
    vq.prototype.Ib = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = wq(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    var wq = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ob && f.listener == b && f.capture == !!c && f.jc == d)
                return e
        }
        return -1
    };
    var yq = "closure_lm_" + (1E6 * Math.random() | 0)
      , zq = {}
      , Aq = 0
      , Cq = function(a, b, c, d, e) {
        if (d && d.once)
            return Bq(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Cq(a, b[f], c, d, e);
            return null
        }
        c = Dq(c);
        return rq(a) ? a.N(b, c, Pa(d) ? !!d.capture : !!d, e) : Eq(a, b, c, !1, d, e)
    }
      , Eq = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = Pa(e) ? !!e.capture : !!e
          , h = Fq(a);
        h || (a[yq] = h = new vq(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy)
            return c;
        d = Gq();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            nq || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(Hq(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Aq++;
        return c
    }
      , Gq = function() {
        var a = Iq
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
      , Bq = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Bq(a, b[f], c, d, e);
            return null
        }
        c = Dq(c);
        return rq(a) ? a.Lb(b, c, Pa(d) ? !!d.capture : !!d, e) : Eq(a, b, c, !0, d, e)
    }
      , Jq = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Jq(a, b[f], c, d, e);
        else
            d = Pa(d) ? !!d.capture : !!d,
            c = Dq(c),
            rq(a) ? a.nb(b, c, d, e) : a && (a = Fq(a)) && (b = a.Ib(b, c, d, e)) && Kq(b)
    }
      , Kq = function(a) {
        if ("number" !== typeof a && a && !a.Ob) {
            var b = a.src;
            if (rq(b))
                xq(b.o, a);
            else {
                var c = a.type
                  , d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Hq(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Aq--;
                (c = Fq(b)) ? (xq(c, a),
                0 == c.h && (c.src = null,
                b[yq] = null)) : uq(a)
            }
        }
    }
      , Hq = function(a) {
        return a in zq ? zq[a] : zq[a] = "on" + a
    }
      , Iq = function(a, b) {
        if (a.Ob)
            a = !0;
        else {
            b = new oq(b,this);
            var c = a.listener
              , d = a.jc || a.src;
            a.Yb && Kq(a);
            a = c.call(d, b)
        }
        return a
    }
      , Fq = function(a) {
        a = a[yq];
        return a instanceof vq ? a : null
    }
      , Lq = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , Dq = function(a) {
        if ("function" === typeof a)
            return a;
        a[Lq] || (a[Lq] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Lq]
    };
    var P = function() {
        E.call(this);
        this.o = new vq(this);
        this.Wb = this;
        this.ga = null
    };
    $a(P, E);
    P.prototype[qq] = !0;
    l = P.prototype;
    l.addEventListener = function(a, b, c, d) {
        Cq(this, a, b, c, d)
    }
    ;
    l.removeEventListener = function(a, b, c, d) {
        Jq(this, a, b, c, d)
    }
    ;
    l.dispatchEvent = function(a) {
        var b, c = this.ga;
        if (c)
            for (b = []; c; c = c.ga)
                b.push(c);
        c = this.Wb;
        var d = a.type || a;
        if ("string" === typeof a)
            a = new mq(a,c);
        else if (a instanceof mq)
            a.target = a.target || c;
        else {
            var e = a;
            a = new mq(d,c);
            vf(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = Mq(g, d, !0, a) && e
            }
        a.h || (g = a.currentTarget = c,
        e = Mq(g, d, !0, a) && e,
        a.h || (e = Mq(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.h && f < b.length; f++)
                g = a.currentTarget = b[f],
                e = Mq(g, d, !1, a) && e;
        return e
    }
    ;
    l.M = function() {
        P.za.M.call(this);
        if (this.o) {
            var a = this.o, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++)
                    ++b,
                    uq(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.ga = null
    }
    ;
    l.N = function(a, b, c, d) {
        return this.o.add(String(a), b, !1, c, d)
    }
    ;
    l.Lb = function(a, b, c, d) {
        return this.o.add(String(a), b, !0, c, d)
    }
    ;
    l.nb = function(a, b, c, d) {
        this.o.remove(String(a), b, c, d)
    }
    ;
    var Mq = function(a, b, c, d) {
        b = a.o.g[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Ob && g.capture == c) {
                var h = g.listener
                  , k = g.jc || g.src;
                g.Yb && xq(a.o, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    P.prototype.Ib = function(a, b, c, d) {
        return this.o.Ib(String(a), b, c, d)
    }
    ;
    var Nq = function(a, b) {
        this.j = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    Nq.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else
            a = this.j();
        return a
    }
    ;
    var Oq = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++,
        b.next = a.g,
        a.g = b)
    };
    var Pq, Qq = function() {
        var a = u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function() {
            var e = kg(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random()
              , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Wa(function(k) {
                if (("*" == h || k.origin == h) && k.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !yb()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Gd;
                    c.Gd = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    Gd: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            u.setTimeout(e, 0)
        }
    };
    var Rq = function() {
        this.h = this.g = null
    };
    Rq.prototype.add = function(a, b) {
        var c = Sq.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    }
    ;
    Rq.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g,
        this.g = this.g.next,
        this.g || (this.h = null),
        a.next = null);
        return a
    }
    ;
    var Sq = new Nq(function() {
        return new Tq
    }
    ,function(a) {
        return a.reset()
    }
    )
      , Tq = function() {
        this.next = this.g = this.h = null
    };
    Tq.prototype.set = function(a, b) {
        this.h = a;
        this.g = b;
        this.next = null
    }
    ;
    Tq.prototype.reset = function() {
        this.next = this.g = this.h = null
    }
    ;
    var Uq, Vq = !1, Wq = new Rq, Yq = function(a, b) {
        Uq || Xq();
        Vq || (Uq(),
        Vq = !0);
        Wq.add(a, b)
    }, Xq = function() {
        if (u.Promise && u.Promise.resolve) {
            var a = u.Promise.resolve(void 0);
            Uq = function() {
                a.then(Zq)
            }
        } else
            Uq = function() {
                var b = Zq;
                "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && (wb() || !x("Edge")) && u.Window.prototype.setImmediate == u.setImmediate ? (Pq || (Pq = Qq()),
                Pq(b)) : u.setImmediate(b)
            }
    }, Zq = function() {
        for (var a; a = Wq.remove(); ) {
            try {
                a.h.call(a.g)
            } catch (b) {
                fb(b)
            }
            Oq(Sq, a)
        }
        Vq = !1
    };
    var $q = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var br = function(a) {
        this.g = 0;
        this.B = void 0;
        this.o = this.h = this.j = null;
        this.l = this.A = !1;
        if (a != Te)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    ar(b, 2, c)
                }, function(c) {
                    ar(b, 3, c)
                })
            } catch (c) {
                ar(this, 3, c)
            }
    }
      , cr = function() {
        this.next = this.context = this.h = this.j = this.g = null;
        this.o = !1
    };
    cr.prototype.reset = function() {
        this.context = this.h = this.j = this.g = null;
        this.o = !1
    }
    ;
    var dr = new Nq(function() {
        return new cr
    }
    ,function(a) {
        a.reset()
    }
    )
      , er = function(a, b, c) {
        var d = dr.get();
        d.j = a;
        d.h = b;
        d.context = c;
        return d
    };
    br.prototype.then = function(a, b, c) {
        return fr(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    br.prototype.$goog_Thenable = !0;
    br.prototype.K = function(a, b) {
        return fr(this, null, a, b)
    }
    ;
    br.prototype.catch = br.prototype.K;
    br.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new gr(a);
            Yq(function() {
                hr(this, b)
            }, this)
        }
    }
    ;
    var hr = function(a, b) {
        if (0 == a.g)
            if (a.j) {
                var c = a.j;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++,
                    g.g == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.g && 1 == d ? hr(c, b) : (f ? (d = f,
                    d.next == c.o && (c.o = d),
                    d.next = d.next.next) : ir(c),
                    jr(c, e, 3, b)))
                }
                a.j = null
            } else
                ar(a, 3, b)
    }
      , lr = function(a, b) {
        a.h || 2 != a.g && 3 != a.g || kr(a);
        a.o ? a.o.next = b : a.h = b;
        a.o = b
    }
      , fr = function(a, b, c, d) {
        var e = er(null, null, null);
        e.g = new br(function(f, g) {
            e.j = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (m) {
                    g(m)
                }
            }
            : f;
            e.h = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof gr ? g(h) : f(k)
                } catch (m) {
                    g(m)
                }
            }
            : g
        }
        );
        e.g.j = a;
        lr(a, e);
        return e.g
    };
    br.prototype.D = function(a) {
        this.g = 0;
        ar(this, 2, a)
    }
    ;
    br.prototype.F = function(a) {
        this.g = 0;
        ar(this, 3, a)
    }
    ;
    var ar = function(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c
                  , e = a.D
                  , f = a.F;
                if (d instanceof br) {
                    lr(d, er(e || Te, f || null, a));
                    var g = !0
                } else if ($q(d))
                    d.then(e, f, a),
                    g = !0;
                else {
                    if (Pa(d))
                        try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                mr(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
            g || (a.B = c,
            a.g = b,
            a.j = null,
            kr(a),
            3 != b || c instanceof gr || nr(a, c))
        }
    }
      , mr = function(a, b, c, d, e) {
        var f = !1
          , g = function(k) {
            f || (f = !0,
            c.call(e, k))
        }
          , h = function(k) {
            f || (f = !0,
            d.call(e, k))
        };
        try {
            b.call(a, g, h)
        } catch (k) {
            h(k)
        }
    }
      , kr = function(a) {
        a.A || (a.A = !0,
        Yq(a.H, a))
    }
      , ir = function(a) {
        var b = null;
        a.h && (b = a.h,
        a.h = b.next,
        b.next = null);
        a.h || (a.o = null);
        return b
    };
    br.prototype.H = function() {
        for (var a; a = ir(this); )
            jr(this, a, this.g, this.B);
        this.A = !1
    }
    ;
    var jr = function(a, b, c, d) {
        if (3 == c && b.h && !b.o)
            for (; a && a.l; a = a.j)
                a.l = !1;
        if (b.g)
            b.g.j = null,
            or(b, c, d);
        else
            try {
                b.o ? b.j.call(b.context) : or(b, c, d)
            } catch (e) {
                pr.call(null, e)
            }
        Oq(dr, b)
    }
      , or = function(a, b, c) {
        2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c)
    }
      , nr = function(a, b) {
        a.l = !0;
        Yq(function() {
            a.l && pr.call(null, b)
        })
    }
      , pr = fb
      , gr = function(a) {
        bb.call(this, a)
    };
    $a(gr, bb);
    gr.prototype.name = "cancel";
    var qr = function(a, b) {
        P.call(this);
        this.h = a || 1;
        this.g = b || u;
        this.j = Wa(this.Qf, this);
        this.l = Ya()
    };
    $a(qr, P);
    l = qr.prototype;
    l.pb = !1;
    l.Ga = null;
    l.Qf = function() {
        if (this.pb) {
            var a = Ya() - this.l;
            0 < a && a < .8 * this.h ? this.Ga = this.g.setTimeout(this.j, this.h - a) : (this.Ga && (this.g.clearTimeout(this.Ga),
            this.Ga = null),
            this.dispatchEvent("tick"),
            this.pb && (this.stop(),
            this.start()))
        }
    }
    ;
    l.start = function() {
        this.pb = !0;
        this.Ga || (this.Ga = this.g.setTimeout(this.j, this.h),
        this.l = Ya())
    }
    ;
    l.stop = function() {
        this.pb = !1;
        this.Ga && (this.g.clearTimeout(this.Ga),
        this.Ga = null)
    }
    ;
    l.M = function() {
        qr.za.M.call(this);
        this.stop();
        delete this.g
    }
    ;
    var rr = function(a, b, c) {
        if ("function" === typeof a)
            c && (a = Wa(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = Wa(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0)
    };
    var sr = function() {
        return Math.round(Date.now() / 1E3)
    };
    var tr = function() {
        this.g = {};
        return this
    };
    tr.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    }
    ;
    tr.prototype.set = function(a, b) {
        this.g[a] = b
    }
    ;
    var ur = function(a, b) {
        a.g.eb = tf(a.g, "eb", 0) | b
    };
    tr.prototype.get = function(a) {
        return tf(this.g, a, null)
    }
    ;
    var vr = null
      , wr = function() {
        this.g = {};
        this.h = 0
    }
      , xr = function() {
        vr || (vr = new wr);
        return vr
    }
      , yr = function(a, b) {
        a.g[b.getName()] = b
    }
      , zr = function(a, b) {
        this.o = a;
        this.j = !0;
        this.g = b
    };
    zr.prototype.getName = function() {
        return this.o
    }
    ;
    zr.prototype.h = function() {
        return String(this.g)
    }
    ;
    var Ar = function(a, b) {
        zr.call(this, String(a), b);
        this.l = a;
        this.g = !!b
    };
    t(Ar, zr);
    Ar.prototype.h = function() {
        return this.g ? "1" : "0"
    }
    ;
    var Br = function(a, b) {
        zr.call(this, a, b)
    };
    t(Br, zr);
    Br.prototype.h = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    }
    ;
    var Cr = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0])
              , c = Number(a[1]);
            return new Br("",new Wg(c,b,Number(a[3]) - c,Number(a[2]) - b))
        }
        return new Br("",new Wg(0,0,0,0))
    };
    var Dr = function(a) {
        var b = new Wg(-Number.MAX_VALUE / 2,-Number.MAX_VALUE / 2,Number.MAX_VALUE,Number.MAX_VALUE)
          , c = new Wg(0,0,0,0);
        if (!a || 0 == a.length)
            return c;
        for (var d = 0; d < a.length; d++) {
            a: {
                var e = b;
                var f = a[d]
                  , g = Math.max(e.left, f.left)
                  , h = Math.min(e.left + e.width, f.left + f.width);
                if (g <= h) {
                    var k = Math.max(e.top, f.top);
                    f = Math.min(e.top + e.height, f.top + f.height);
                    if (k <= f) {
                        e.left = g;
                        e.top = k;
                        e.width = h - g;
                        e.height = f - k;
                        e = !0;
                        break a
                    }
                }
                e = !1
            }
            if (!e)
                return c
        }
        return b
    }
      , Er = function(a, b) {
        var c = a.getBoundingClientRect();
        a = ml(a, b);
        return new Wg(Math.round(a.x),Math.round(a.y),Math.round(c.right - c.left),Math.round(c.bottom - c.top))
    }
      , Fr = function(a, b, c) {
        if (b && c) {
            a: {
                var d = Math.max(b.left, c.left);
                var e = Math.min(b.left + b.width, c.left + c.width);
                if (d <= e) {
                    var f = Math.max(b.top, c.top)
                      , g = Math.min(b.top + b.height, c.top + c.height);
                    if (f <= g) {
                        d = new Wg(d,f,e - d,g - f);
                        break a
                    }
                }
                d = null
            }
            e = d ? d.height * d.width : 0;
            f = d ? b.height * b.width : 0;
            d = d && f ? Math.round(e / f * 100) : 0;
            yr(a, new zr("vp",d));
            d && 0 < d ? (e = Xg(b),
            f = Xg(c),
            e = e.top >= f.top && e.top < f.bottom) : e = !1;
            yr(a, new Ar(512,e));
            d && 0 < d ? (e = Xg(b),
            f = Xg(c),
            e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
            yr(a, new Ar(1024,e));
            d && 0 < d ? (e = Xg(b),
            f = Xg(c),
            e = e.left >= f.left && e.left < f.right) : e = !1;
            yr(a, new Ar(2048,e));
            d && 0 < d ? (b = Xg(b),
            c = Xg(c),
            c = b.right <= c.right && b.right > c.left) : c = !1;
            yr(a, new Ar(4096,c))
        }
    };
    var Gr = function(a, b) {
        var c = 0;
        mf(G(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = xr();
            a.g = {};
            var e = new Ar(32,!0);
            e.j = !1;
            yr(a, e);
            e = G().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            yr(a, new Ar(64,"hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = G().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (n) {
                    g = !1
                }
                if (g) {
                    var h = lq(d);
                    var k = h && 0 != h.length ? "1" : "0"
                } else
                    k = "2"
            } catch (n) {
                k = "2"
            }
            yr(a, new Ar(256,"2" == k));
            yr(a, new Ar(128,"1" == k));
            h = g = G().top;
            "2" == k && (h = G());
            f = Er(d, h);
            yr(a, new Br("er",f));
            try {
                var m = h.document && !h.document.body ? null : ig(h || window)
            } catch (n) {
                m = null
            }
            m ? (h = jg(dg(h.document).g),
            yr(a, new Ar(16384,!!h)),
            m = h ? new Wg(h.x,h.y,m.width,m.height) : null) : m = null;
            yr(a, new Br("vi",m));
            if (m && "1" == k) {
                k = lq(d);
                d = [];
                for (h = 0; h < k.length; h++)
                    (e = Er(k[h], g)) && d.push(e);
                d.push(m);
                m = Dr(d)
            }
            Fr(a, f, m);
            a.h && yr(a, new zr("ts",sr() - a.h));
            a.h = sr()
        } else
            a = xr(),
            a.g = {},
            a.h = sr(),
            yr(a, new Ar(32,!1));
        this.j = a;
        this.g = new tr;
        this.g.set("ve", 4);
        c && ur(this.g, 1);
        mf(G(), "ima", "video", "client", "crossdomainTag") && ur(this.g, 4);
        mf(G(), "ima", "video", "client", "sdkTag") && ur(this.g, 8);
        mf(G(), "ima", "video", "client", "jsTag") && ur(this.g, 2);
        b && tf(b, "fullscreen", !1) && ur(this.g, 16);
        this.h = b = null;
        if (c && (c = mf(G(), "ima", "video", "client"),
        c.getEData)) {
            this.h = c.getEData();
            if (c = mf(G(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c())
                    this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    c = this.j,
                    b = a.er,
                    a = a.vi,
                    b && a && (b = Cr(b).g,
                    a = Cr(a).g,
                    k = null,
                    tf(c.g, "er", null) && (k = tf(c.g, "er", null).g,
                    k.top += b.top,
                    k.left += b.left,
                    yr(c, new Br("er",k))),
                    tf(c.g, "vi", null) && (m = tf(c.g, "vi", null).g,
                    m.top += b.top,
                    m.left += b.left,
                    d = [],
                    d.push(m),
                    d.push(b),
                    d.push(a),
                    b = Dr(d),
                    Fr(c, k, b),
                    yr(c, new Br("vi",a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", sr() - (null != a ? a : null != b ? b : sr()))
    };
    var Hr = new qr(200)
      , Ir = function(a, b) {
        try {
            var c = new Gr(a,b);
            a = [];
            var d = Number(c.g.get("eb"));
            c.g.remove("eb");
            var e, f = c.g;
            b = [];
            for (var g in f.g)
                b.push(g + f.g[g]);
            (e = b.join("_")) && a.push(e);
            if (c.h) {
                var h = c.h.serialize();
                h && a.push(h)
            }
            var k, m = c.j;
            e = d;
            f = [];
            e || (e = 0);
            for (var n in m.g) {
                var r = m.g[n];
                if (r instanceof Ar)
                    r.g && (e |= r.l);
                else {
                    var v = m.g[n]
                      , y = v.j ? v.h() : "";
                    y && f.push(n + y)
                }
            }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.g.set("eb", d);
            return a.join("_")
        } catch (B) {
            return "tle;" + Uf(B.name, 12) + ";" + Uf(B.message, 40)
        }
    }
      , Jr = function(a, b) {
        Cq(Hr, "tick", function() {
            var c = Ir(b);
            a(c)
        });
        Hr.start();
        Hr.dispatchEvent("tick")
    };
    var Kr = function(a) {
        D.call(this, a)
    };
    t(Kr, D);
    var Lr = function(a) {
        var b = new Kr;
        return Id(b, 1, a)
    }
      , Mr = [Kr, 1, Me];
    var Nr = function(a) {
        D.call(this, a)
    };
    t(Nr, D);
    var Or = function(a) {
        var b = new Nr;
        return Id(b, 1, a)
    };
    Nr.prototype.getError = function() {
        return Rd(this, Kr, 10)
    }
    ;
    Nr.prototype.Oa = function(a) {
        return Ud(this, 10, a)
    }
    ;
    var Pr = Oe(Nr)
      , Qr = [Nr, 1, Je, 2, Je, 3, De, 7, De, 8, Ce, 4, Ge, 5, Ge, 6, Ge, 9, Ie, 11, Ie, 10, Ke, Mr];
    var Rr = function(a) {
        D.call(this, a)
    };
    t(Rr, D);
    var Sr = [Rr, 4, Me, 5, Je];
    var Tr = function(a) {
        D.call(this, a)
    };
    t(Tr, D);
    var Ur = [Tr, 1, Fe, 2, Fe, 3, Fe];
    var Vr = function(a) {
        D.call(this, a)
    };
    t(Vr, D);
    Vr.prototype.getError = function() {
        return Rd(this, Rr, 7)
    }
    ;
    Vr.prototype.Oa = function(a) {
        return Ud(this, 7, a)
    }
    ;
    var Wr = [Vr, 5, Je, 4, Je, 2, Ke, Ur, 3, Ke, Ur, 6, Ie, 7, Ke, Sr, 8, De];
    var Xr = function(a) {
        D.call(this, a)
    };
    t(Xr, D);
    Xr.wa = [1, 2];
    Xr.prototype.A = Ne([Xr, 1, Le, Wr, 2, Le, Qr]);
    var Yr = function(a) {
        D.call(this, a)
    };
    t(Yr, D);
    Yr.prototype.getVersion = function() {
        return Dd(C(this, 5))
    }
    ;
    var Zr = Oe(Yr);
    var $r = function() {
        this.g = Math.random()
    }
      , bs = function() {
        var a = as
          , b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
      , cs = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01))
            try {
                if (c instanceof ck)
                    var f = c;
                else
                    f = new ck,
                    Mg(c, function(h, k) {
                        var m = f
                          , n = m.o++;
                        gk(m, n, dk(k, h))
                    });
                var g = jk(f, "https:", "/pagead/gen_204?id=" + b + "&");
                g && hh(u, g)
            } catch (h) {}
    };
    var es = function() {
        var a = ds;
        this.A = as;
        this.l = "jserror";
        this.j = !0;
        this.h = null;
        this.B = this.La;
        this.g = void 0 === a ? null : a;
        this.o = !1
    };
    l = es.prototype;
    l.Bc = function(a) {
        this.h = a
    }
    ;
    l.jd = function(a) {
        this.l = a
    }
    ;
    l.kd = function(a) {
        this.j = a
    }
    ;
    l.ld = function(a) {
        this.o = a
    }
    ;
    l.kb = function(a, b, c) {
        try {
            if (this.g && this.g.j) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else
                e = b()
        } catch (h) {
            b = this.j;
            try {
                Bh(d),
                b = this.B(a, new kh(h,{
                    message: fs(h)
                }), void 0, c)
            } catch (k) {
                this.La(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else
                throw h;
        }
        return e
    }
    ;
    l.fd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ja.apply(0, arguments);
            return e.kb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    l.La = function(a, b, c, d, e) {
        e = e || this.l;
        try {
            var f = new ck;
            hk(f, 1, "context", a);
            lh(b) || (b = new kh(b,{
                message: fs(b)
            }));
            b.msg && hk(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h)
                try {
                    this.h(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            gk(f, 3, [g]);
            var h = bk();
            h.h && hk(f, 4, "top", h.h.url || "");
            gk(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? vg(h.g.url) : ""
            }]);
            cs(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                cs(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: fs(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (m) {}
        }
        return this.j
    }
    ;
    var fs = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d; )
                    d = a,
                    a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var gs = function() {};
    var as, hs, ds = new Ah(1,window);
    (function(a) {
        as = null != a ? a : new $r;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        bs();
        hs = new es;
        hs.Bc(function() {});
        hs.ld(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || ds.H() : ds.j && Ze(window, "load", function() {
            window.google_measure_js_timing || ds.H()
        })
    }
    )();
    var is = function(a) {
        D.call(this, a)
    };
    t(is, D);
    is.wa = [3];
    var js = function(a) {
        D.call(this, a)
    };
    t(js, D);
    var ks = function(a, b) {
        return Md(a, 1, b, Cd)
    }
      , ls = function(a, b) {
        return Md(a, 2, b, Cd)
    }
      , ms = function(a, b) {
        return Md(a, 3, b, Ed)
    }
      , ns = function(a, b) {
        Md(a, 4, b, Ed)
    };
    js.wa = [1, 2, 3, 4];
    var os = function(a) {
        D.call(this, a)
    };
    t(os, D);
    var ps = function(a) {
        D.call(this, a)
    };
    t(ps, D);
    ps.prototype.getVersion = function() {
        return $d(this, 1)
    }
    ;
    var qs = function(a, b) {
        return Nd(a, 1, b, 0)
    }
      , rs = function(a, b) {
        return Ud(a, 2, b)
    }
      , ts = function(a, b) {
        return Ud(a, 3, b)
    }
      , us = function(a, b) {
        return Nd(a, 4, b, 0)
    }
      , vs = function(a, b) {
        return Nd(a, 5, b, 0)
    }
      , ws = function(a, b) {
        return Nd(a, 6, b, 0)
    }
      , xs = function(a, b) {
        return Nd(a, 7, b, "")
    }
      , ys = function(a, b) {
        return Nd(a, 8, b, 0)
    }
      , zs = function(a, b) {
        return Nd(a, 9, b, 0)
    }
      , As = function(a, b) {
        return Nd(a, 10, null == b ? b : !!b, !1)
    }
      , Bs = function(a, b) {
        return Nd(a, 11, null == b ? b : !!b, !1)
    }
      , Cs = function(a, b) {
        return Md(a, 12, b, Cd)
    }
      , Ds = function(a, b) {
        return Md(a, 13, b, Cd)
    }
      , Es = function(a, b) {
        return Md(a, 14, b, Cd)
    }
      , Fs = function(a, b) {
        return Nd(a, 15, null == b ? b : !!b, !1)
    }
      , Gs = function(a, b) {
        return Nd(a, 16, b, "")
    }
      , Hs = function(a, b) {
        return Md(a, 17, b, Ed)
    }
      , Is = function(a, b) {
        return Md(a, 18, b, Ed)
    }
      , Js = function(a, b) {
        return Vd(a, 19, b)
    };
    ps.wa = [12, 13, 14, 17, 18, 19];
    var Ks = function(a) {
        D.call(this, a)
    };
    t(Ks, D);
    var Ls = "a".charCodeAt()
      , Ms = kf({
        Ng: 0,
        Mg: 1,
        Jg: 2,
        Eg: 3,
        Kg: 4,
        Fg: 5,
        Lg: 6,
        Hg: 7,
        Ig: 8,
        Dg: 9,
        Gg: 10
    })
      , Ns = kf({
        Pg: 0,
        Qg: 1,
        Og: 2
    });
    var Os = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.h = a;
        this.g = 0
    }
      , Qs = function(a) {
        a = Ps(a, 36);
        var b = new os;
        b = Nd(b, 1, Math.floor(a / 10), 0);
        return Nd(b, 2, a % 10 * 1E8, 0)
    }
      , Rs = function(a) {
        return String.fromCharCode(Ls + Ps(a, 6)) + String.fromCharCode(Ls + Ps(a, 6))
    }
      , Us = function(a) {
        var b = Ps(a, 16);
        return !0 === !!Ps(a, 1) ? (a = Ss(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : Ts(a, b)
    }
      , Vs = function(a) {
        for (var b = [], c = Ps(a, 12); c--; ) {
            var d = Ps(a, 6)
              , e = Ps(a, 2)
              , f = Ss(a)
              , g = b
              , h = g.push
              , k = new is;
            d = Nd(k, 1, d, 0);
            e = Nd(d, 2, e, 0);
            f = Md(e, 3, f, Ed);
            h.call(g, f)
        }
        return b
    }
      , Ss = function(a) {
        for (var b = Ps(a, 12), c = []; b--; ) {
            var d = !0 === !!Ps(a, 1)
              , e = Ps(a, 16);
            if (d)
                for (d = Ps(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , Ts = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (Ps(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , Ps = function(a, b) {
        if (a.g + b > a.h.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    Os.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var Ws = function(a) {
        try {
            var b = Hc(a).map(function(f) {
                return f.toString(2).padStart(8, "0")
            }).join("")
              , c = new Os(b);
            if (3 !== Ps(c, 3))
                return null;
            var d = ls(ks(new js, Ts(c, 24, Ms)), Ts(c, 24, Ms))
              , e = Ps(c, 6);
            0 !== e && ns(ms(d, Ts(c, e)), Ts(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var Xs = function(a) {
        try {
            var b = Hc(a).map(function(d) {
                return d.toString(2).padStart(8, "0")
            }).join("")
              , c = new Os(b);
            return Js(Is(Hs(Gs(Fs(Es(Ds(Cs(Bs(As(zs(ys(xs(ws(vs(us(ts(rs(qs(new ps, Ps(c, 6)), Qs(c)), Qs(c)), Ps(c, 12)), Ps(c, 12)), Ps(c, 6)), Rs(c)), Ps(c, 12)), Ps(c, 6)), !!Ps(c, 1)), !!Ps(c, 1)), Ts(c, 12, Ns)), Ts(c, 24, Ms)), Ts(c, 24, Ms)), !!Ps(c, 1)), Rs(c)), Us(c)), Us(c)), Vs(c))
        } catch (d) {
            return null
        }
    };
    var Zs = function(a) {
        if (!a)
            return null;
        var b = a.split(".");
        if (4 < b.length)
            return null;
        a = Xs(b[0]);
        if (!a)
            return null;
        var c = new Ks;
        a = Ud(c, 1, a);
        b.shift();
        b = q(b);
        for (c = b.next(); !c.done; c = b.next())
            switch (c = c.value,
            Ys(c)) {
            case 1:
            case 2:
                break;
            case 3:
                c = Ws(c);
                if (!c)
                    return null;
                Ud(a, 2, c);
                break;
            default:
                return null
            }
        return a
    }
      , Ys = function(a) {
        try {
            var b = Hc(a).map(function(c) {
                return c.toString(2).padStart(8, "0")
            }).join("");
            return Ps(new Os(b), 3)
        } catch (c) {
            return -1
        }
    };
    var $s = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = q(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = q(a),
            d = a.next(); !d.done; d = a.next())
                c[d.value] = !0;
        delete c[0];
        return c
    };
    var at = function(a) {
        this.g = a;
        this.defaultValue = !1
    }
      , bt = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var ct = new at(471855283)
      , dt = new at(465118388)
      , et = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    }
    (494575051)
      , ft = new bt(489560439)
      , gt = new bt(505762507);
    var ht = /^((market|itms|intent|itms-appss):\/\/)/i;
    var it = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var jt = function(a) {
        var b = a.Ta
          , c = a.height
          , d = a.width
          , e = void 0 === a.ya ? !1 : a.ya;
        this.Za = a.Za;
        this.Ta = b;
        this.height = c;
        this.width = d;
        this.ya = e
    };
    jt.prototype.getHeight = function() {
        return this.height
    }
    ;
    jt.prototype.getWidth = function() {
        return this.width
    }
    ;
    var kt = function(a) {
        var b = a.Xf
          , c = a.Qe
          , d = a.Wf
          , e = a.Pe;
        jt.call(this, {
            Za: a.Za,
            Ta: a.Ta,
            height: a.height,
            width: a.width,
            ya: void 0 === a.ya ? !1 : a.ya
        });
        this.o = b;
        this.h = c;
        this.j = d;
        this.g = e
    };
    t(kt, jt);
    var lt = function(a) {
        var b = a.wf;
        jt.call(this, {
            Za: a.Za,
            Ta: a.Ta,
            height: a.height,
            width: a.width,
            ya: void 0 === a.ya ? !1 : a.ya
        });
        this.g = b
    };
    t(lt, jt);
    lt.prototype.getMediaUrl = function() {
        return this.g
    }
    ;
    function mt(a) {
        return new (Function.prototype.bind.apply(a, [null].concat(ia(Ja.apply(1, arguments)))))
    }
    ;var Q = function(a, b) {
        this.h = this.A = this.o = "";
        this.H = null;
        this.K = this.g = "";
        this.l = !1;
        var c;
        a instanceof Q ? (this.l = void 0 !== b ? b : a.l,
        nt(this, a.o),
        this.A = a.A,
        this.h = a.h,
        ot(this, a.H),
        this.g = a.g,
        pt(this, qt(a.j)),
        this.K = a.D()) : a && (c = String(a).match(ug)) ? (this.l = !!b,
        nt(this, c[1] || "", !0),
        this.A = rt(c[2] || ""),
        this.h = rt(c[3] || "", !0),
        ot(this, c[4]),
        this.g = rt(c[5] || "", !0),
        pt(this, c[6] || "", !0),
        this.K = rt(c[7] || "")) : (this.l = !!b,
        this.j = new tt(null,this.l))
    };
    Q.prototype.toString = function() {
        var a = []
          , b = this.o;
        b && a.push(ut(b, vt, !0), ":");
        var c = this.h;
        if (c || "file" == b)
            a.push("//"),
            (b = this.A) && a.push(ut(b, vt, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.H,
            null != c && a.push(":", String(c));
        if (c = this.g)
            this.h && "/" != c.charAt(0) && a.push("/"),
            a.push(ut(c, "/" == c.charAt(0) ? wt : xt, !0));
        (c = this.j.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", ut(c, yt));
        return a.join("")
    }
    ;
    Q.prototype.resolve = function(a) {
        var b = this.F()
          , c = !!a.o;
        c ? nt(b, a.o) : c = !!a.A;
        c ? b.A = a.A : c = !!a.h;
        c ? b.h = a.h : c = null != a.H;
        var d = a.g;
        if (c)
            ot(b, a.H);
        else if (c = !!a.g) {
            if ("/" != d.charAt(0))
                if (this.h && !this.g)
                    d = "/" + d;
                else {
                    var e = b.g.lastIndexOf("/");
                    -1 != e && (d = b.g.slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (kb(e, "./") || kb(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.g = d : c = "" !== a.j.toString();
        c ? pt(b, qt(a.j)) : c = !!a.K;
        c && (b.K = a.D());
        return b
    }
    ;
    Q.prototype.F = function() {
        return new Q(this)
    }
    ;
    var nt = function(a, b, c) {
        a.o = c ? rt(b, !0) : b;
        a.o && (a.o = a.o.replace(/:$/, ""))
    }
      , ot = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.H = b
        } else
            a.H = null
    }
      , pt = function(a, b, c) {
        b instanceof tt ? (a.j = b,
        zt(a.j, a.l)) : (c || (b = ut(b, At)),
        a.j = new tt(b,a.l))
    }
      , Bt = function(a, b, c) {
        a.j.set(b, c);
        return a
    };
    Q.prototype.D = function() {
        return this.K
    }
    ;
    var Ct = function(a) {
        return a instanceof Q ? a.F() : new Q(a,void 0)
    }
      , rt = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , ut = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Dt),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , Dt = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , vt = /[#\/\?@]/g
      , xt = /[#\?:]/g
      , wt = /[#\?]/g
      , At = /[#\?@]/g
      , yt = /#/g
      , tt = function(a, b) {
        this.h = this.g = null;
        this.j = a || null;
        this.o = !!b
    }
      , Et = function(a) {
        a.g || (a.g = new Map,
        a.h = 0,
        a.j && wg(a.j, function(b, c) {
            a.add(Tf(b), c)
        }))
    };
    tt.prototype.add = function(a, b) {
        Et(this);
        this.j = null;
        a = Ft(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    }
    ;
    tt.prototype.remove = function(a) {
        Et(this);
        a = Ft(this, a);
        return this.g.has(a) ? (this.j = null,
        this.h -= this.g.get(a).length,
        this.g.delete(a)) : !1
    }
    ;
    tt.prototype.clear = function() {
        this.g = this.j = null;
        this.h = 0
    }
    ;
    tt.prototype.isEmpty = function() {
        Et(this);
        return 0 == this.h
    }
    ;
    var Gt = function(a, b) {
        Et(a);
        b = Ft(a, b);
        return a.g.has(b)
    };
    l = tt.prototype;
    l.forEach = function(a, b) {
        Et(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    l.fc = function() {
        Et(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    l.vb = function(a) {
        Et(this);
        var b = [];
        if ("string" === typeof a)
            Gt(this, a) && (b = b.concat(this.g.get(Ft(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    l.set = function(a, b) {
        Et(this);
        this.j = null;
        a = Ft(this, a);
        Gt(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    }
    ;
    l.get = function(a, b) {
        if (!a)
            return b;
        a = this.vb(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    l.toString = function() {
        if (this.j)
            return this.j;
        if (!this.g)
            return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.vb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.j = a.join("&")
    }
    ;
    var qt = function(a) {
        var b = new tt;
        b.j = a.j;
        a.g && (b.g = new Map(a.g),
        b.h = a.h);
        return b
    }
      , Ft = function(a, b) {
        b = String(b);
        a.o && (b = b.toLowerCase());
        return b
    }
      , zt = function(a, b) {
        b && !a.o && (Et(a),
        a.j = null,
        a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            this.remove(e),
            0 < c.length && (this.j = null,
            this.g.set(Ft(this, e), Vb(c)),
            this.h += c.length))
        }, a));
        a.o = b
    };
    var Ht, It, Jt, Kt = function() {
        return u.navigator ? u.navigator.userAgent : ""
    }, Lt = kb(Kt(), "(iPad") || kb(Kt(), "(Macintosh") || kb(Kt(), "(iPod") || kb(Kt(), "(iPhone");
    var Mt = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" ")
      , Nt = ["c.googlesyndication.com"];
    function Ot(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        null == a || !a.startsWith("http") || (null == a ? 0 : a.startsWith("https")) ? c = !1 : Pt(a, Nt) ? c = !1 : b.includes("https") && Pt(a, Mt) && (c = !0);
        return c ? (a = new Q(a),
        L(K.g(), "htp", "1"),
        nt(a, "https"),
        a.toString()) : a
    }
    function Qt(a) {
        if (!a)
            return !1;
        try {
            var b = "string" === typeof a ? new Q(a) : a;
            return "gcache" == b.o && !!b.j.get("url")
        } catch (c) {
            return !1
        }
    }
    function Rt(a) {
        try {
            var b = "string" === typeof a ? new Q(a) : a;
            if (Qt(b)) {
                var c = b.j.get("url");
                return "undefined" === typeof c ? null : c
            }
        } catch (d) {}
        return null
    }
    function Pt(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)","i")).test(a)
    }
    ;var St = -1;
    function Tt(a, b) {
        b = null != b ? b : "";
        fc && (b = "");
        if (!ib(Wf(a))) {
            var c = a instanceof Cf || !ht.test(a) ? a : Hf(a);
            if (c instanceof Cf)
                var d = c;
            else {
                d = void 0 === d ? Hg : d;
                a: {
                    d = void 0 === d ? Hg : d;
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof Fg && e.vf(a)) {
                            a = Hf(a);
                            break a
                        }
                    }
                    a = void 0
                }
                d = a || If
            }
            a = window;
            if (d instanceof Cf)
                var f = Df(d);
            else {
                b: if (Bg) {
                    try {
                        f = new URL(d)
                    } catch (g) {
                        f = "https:";
                        break b
                    }
                    f = f.protocol
                } else
                    c: {
                        f = document.createElement("a");
                        try {
                            f.href = d
                        } catch (g) {
                            f = void 0;
                            break c
                        }
                        f = f.protocol;
                        f = ":" === f || "" === f ? "https:" : f
                    }
                f = "javascript:" !== f ? d : void 0
            }
            void 0 !== f && a.open(f, "_blank", b)
        }
    }
    ;var Ut = /OS (\S+) like/
      , Vt = /Android ([\d\.]+)/;
    function Wt(a, b) {
        a = (a = a.exec(sb())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= ob(a, b)
    }
    var Xt = function() {
        return jc && "ontouchstart"in document.documentElement
    }
      , Yt = function(a) {
        return oc && Wt(Ut, a)
    }
      , Zt = function(a) {
        return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1
    };
    var $t = function(a) {
        P.call(this);
        this.g = a;
        this.l = this.A = !1;
        this.B = this.D = 0;
        this.h = new qr(1E3);
        cf(this, this.h);
        Cq(this.h, "tick", this.F, !1, this);
        Cq(this.g, "pause", this.j, !1, this);
        Cq(this.g, "playing", this.j, !1, this);
        Cq(this.g, "ended", this.j, !1, this);
        Cq(this.g, "timeupdate", this.j, !1, this)
    };
    t($t, P);
    var au = function(a) {
        var b;
        return null != (b = a.g.currentTime) ? b : a.g.getCurrentTime()
    };
    $t.prototype.j = function(a) {
        switch (a.type) {
        case "playing":
            bu(this);
            break;
        case "pause":
        case "ended":
            this.h.pb && this.h.stop();
            break;
        case "timeupdate":
            !this.A && 0 < au(this) && (this.A = !0,
            bu(this))
        }
    }
    ;
    var bu = function(a) {
        !a.h.pb && a.A && (a.D = 1E3 * au(a),
        a.B = Date.now(),
        a.l = !1,
        a.h.start())
    };
    $t.prototype.F = function() {
        var a = Date.now()
          , b = a - this.B
          , c = 1E3 * au(this);
        c - this.D < .5 * b ? this.l || (this.l = !0,
        this.dispatchEvent("playbackStalled")) : this.l = !1;
        this.D = c;
        this.B = a
    }
    ;
    var cu = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" ")
      , du = /\bocr\b/;
    function eu(a) {
        if (ib(Wf(a)) || fc && 2048 < a.length)
            return !1;
        try {
            if ((new Q(a)).D().match(du))
                return !0
        } catch (b) {}
        return null != cu.find(function(b) {
            return null != a.match(b)
        })
    }
    ;var fu = new Map
      , gu = function() {
        this.h = this.g = null
    };
    function hu(a, b, c, d) {
        var e = pl(a);
        b.width <= e.width && b.height <= e.height ? (iu(d),
        c(e)) : (e = setTimeout(function() {
            return hu(a, b, c, d)
        }, 200),
        d.h = e)
    }
    function ju(a, b) {
        b = void 0 === b ? new F(1,1) : b;
        var c = new gu
          , d = new Promise(function(e) {
            var f = pl(a);
            if (b.width <= f.width && b.height <= f.height)
                return e(f);
            "ResizeObserver"in window ? (f = new ResizeObserver(function(g) {
                window.requestAnimationFrame(function() {
                    for (var h = new F(0,0), k = q(g), m = k.next(); !m.done; m = k.next())
                        if (m = m.value,
                        m.contentBoxSize ? (m = Array.isArray(m.contentBoxSize) ? m.contentBoxSize[0] : m.contentBoxSize,
                        h.width = Math.floor(m.inlineSize),
                        h.height = Math.floor(m.blockSize)) : (h.width = Math.floor(m.contentRect.width),
                        h.height = Math.floor(m.contentRect.height)),
                        b.width <= h.width && b.height <= h.height)
                            return iu(c),
                            e(h)
                })
            }
            ),
            c.g = f,
            f.observe(a)) : hu(a, b, e, c)
        }
        );
        fu.set(d, c);
        return d
    }
    function iu(a) {
        a.h && window.clearTimeout(a.h);
        a.g && (a.g.disconnect(),
        a.g = null)
    }
    ;function ku(a, b) {
        return ib(b) ? !1 : (new RegExp(a)).test(b)
    }
    function lu(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            2 == d.length && (c = jb(d[0]),
            d = jb(d[1]),
            0 < c.length && (b[c] = d))
        });
        return b
    }
    function mu(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a)
            return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a))
            return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    }
    ;var nu = function() {
        this.g = Date.now()
    };
    nu.prototype.reset = function() {
        this.g = Date.now()
    }
    ;
    var ou = function(a) {
        a = a.g + 5E3 - Date.now();
        return 0 < a ? a : 0
    };
    var pu = function(a, b) {
        this.url = a;
        this.g = void 0 === b ? null : b
    };
    var qu = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.errorCode = a
    };
    t(qu, Error);
    var ru = function() {
        if (!fc)
            return !1;
        try {
            return new ActiveXObject("MSXML2.DOMDocument"),
            !0
        } catch (a) {
            return !1
        }
    }
      , tu = fc && ru();
    var uu = function(a) {
        E.call(this);
        this.o = a;
        this.h = {}
    };
    $a(uu, E);
    var vu = [];
    uu.prototype.N = function(a, b, c, d) {
        return wu(this, a, b, c, d)
    }
    ;
    var wu = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (vu[0] = c.toString()),
        c = vu);
        for (var g = 0; g < c.length; g++) {
            var h = Cq(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h)
                break;
            a.h[h.key] = h
        }
        return a
    };
    uu.prototype.Lb = function(a, b, c, d) {
        return xu(this, a, b, c, d)
    }
    ;
    var xu = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++)
                xu(a, b, c[g], d, e, f);
        else {
            b = Bq(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b)
                return a;
            a.h[b.key] = b
        }
        return a
    };
    uu.prototype.nb = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.nb(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = Pa(d) ? !!d.capture : !!d,
            e = e || this.o || this,
            c = Dq(c),
            d = !!d,
            b = rq(a) ? a.Ib(b, c, d, e) : a ? (a = Fq(a)) ? a.Ib(b, c, d, e) : null : null,
            b && (Kq(b),
            delete this.h[b.key])
    }
    ;
    var yu = function(a) {
        ff(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && Kq(b)
        }, a);
        a.h = {}
    };
    uu.prototype.M = function() {
        uu.za.M.call(this);
        yu(this)
    }
    ;
    uu.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var zu = function() {};
    zu.prototype.g = null;
    var Bu = function(a) {
        var b;
        (b = a.g) || (b = {},
        Au(a) && (b[0] = !0,
        b[1] = !0),
        b = a.g = b);
        return b
    };
    var Cu, Du = function() {};
    $a(Du, zu);
    var Eu = function(a) {
        return (a = Au(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
      , Au = function(a) {
        if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.h = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.h
    };
    Cu = new Du;
    var Fu = function(a) {
        P.call(this);
        this.headers = new Map;
        this.G = a || null;
        this.h = !1;
        this.F = this.g = null;
        this.L = "";
        this.l = 0;
        this.j = this.J = this.A = this.I = !1;
        this.D = 0;
        this.B = null;
        this.Z = "";
        this.T = this.U = !1;
        this.O = null
    };
    $a(Fu, P);
    var Gu = /^https?$/i
      , Hu = ["POST", "PUT"];
    Fu.prototype.X = function(a) {
        this.O = a
    }
    ;
    var Lu = function(a, b, c, d) {
        if (a.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.L + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.L = b;
        a.l = 0;
        a.I = !1;
        a.h = !0;
        a.g = a.G ? Eu(a.G) : Eu(Cu);
        a.F = a.G ? Bu(a.G) : Bu(Cu);
        a.g.onreadystatechange = Wa(a.Y, a);
        try {
            a.J = !0,
            a.g.open(c, String(b), !0),
            a.J = !1
        } catch (g) {
            Iu(a);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        var e = Array.from(d.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        })
          , f = u.FormData && b instanceof u.FormData;
        !Qb(Hu, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = q(d);
        for (d = c.next(); !d.done; d = c.next())
            e = q(d.value),
            d = e.next().value,
            e = e.next().value,
            a.g.setRequestHeader(d, e);
        a.Z && (a.g.responseType = a.Z);
        "withCredentials"in a.g && a.g.withCredentials !== a.U && (a.g.withCredentials = a.U);
        if ("setTrustToken"in a.g && a.O)
            try {
                a.g.setTrustToken(a.O)
            } catch (g) {}
        try {
            Ju(a),
            0 < a.D && (a.T = Ku(a.g),
            a.T ? (a.g.timeout = a.D,
            a.g.ontimeout = Wa(a.ca, a)) : a.B = rr(a.ca, a.D, a)),
            a.A = !0,
            a.g.send(b),
            a.A = !1
        } catch (g) {
            Iu(a)
        }
    }
      , Ku = function(a) {
        return fc && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    Fu.prototype.ca = function() {
        "undefined" != typeof Ma && this.g && (this.l = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    var Iu = function(a) {
        a.h = !1;
        a.g && (a.j = !0,
        a.g.abort(),
        a.j = !1);
        a.l = 5;
        Mu(a);
        Nu(a)
    }
      , Mu = function(a) {
        a.I || (a.I = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    Fu.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1,
        this.j = !0,
        this.g.abort(),
        this.j = !1,
        this.l = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Nu(this))
    }
    ;
    Fu.prototype.M = function() {
        this.g && (this.h && (this.h = !1,
        this.j = !0,
        this.g.abort(),
        this.j = !1),
        Nu(this, !0));
        Fu.za.M.call(this)
    }
    ;
    Fu.prototype.Y = function() {
        this.va() || (this.J || this.A || this.j ? Ou(this) : this.ka())
    }
    ;
    Fu.prototype.ka = function() {
        Ou(this)
    }
    ;
    var Ou = function(a) {
        if (a.h && "undefined" != typeof Ma && (!a.F[1] || 4 != Pu(a) || 2 != Qu(a)))
            if (a.A && 4 == Pu(a))
                rr(a.Y, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == Pu(a)) {
                a.h = !1;
                try {
                    var b = Qu(a);
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.L).match(ug)[1] || null;
                            !f && u.self && u.self.location && (f = u.self.location.protocol.slice(0, -1));
                            e = !Gu.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.l = 6,
                    Mu(a))
                } finally {
                    Nu(a)
                }
            }
    }
      , Nu = function(a, b) {
        if (a.g) {
            Ju(a);
            var c = a.g
              , d = a.F[0] ? function() {}
            : null;
            a.g = null;
            a.F = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , Ju = function(a) {
        a.g && a.T && (a.g.ontimeout = null);
        a.B && (u.clearTimeout(a.B),
        a.B = null)
    };
    Fu.prototype.isActive = function() {
        return !!this.g
    }
    ;
    var Pu = function(a) {
        return a.g ? a.g.readyState : 0
    }
      , Qu = function(a) {
        try {
            return 2 < Pu(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }
      , Ru = function(a) {
        if (a.g) {
            a: {
                a = a.g.responseText;
                if (u.JSON)
                    try {
                        var b = u.JSON.parse(a);
                        break a
                    } catch (c) {}
                b = Sh(a)
            }
            return b
        }
    };
    var Su = function() {};
    Su.prototype.get = function(a) {
        return Tu({
            url: a.url,
            timeout: a.timeout,
            withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
            method: "GET",
            headers: void 0 === a.headers ? {} : a.headers,
            Sa: void 0 === a.Sa ? void 0 : a.Sa
        })
    }
    ;
    var Tu = function(a) {
        var b = a.url
          , c = a.timeout
          , d = a.withCredentials
          , e = a.method
          , f = void 0 === a.content ? void 0 : a.content
          , g = void 0 === a.Sa ? void 0 : a.Sa
          , h = void 0 === a.headers ? {} : a.headers;
        return Uu({
            url: b,
            timeout: c,
            withCredentials: d,
            method: e,
            content: f,
            Sa: g,
            headers: h
        }).then(function(k) {
            return Promise.resolve(k)
        }, function(k) {
            return k instanceof Error && 6 == k.message && d ? Uu({
                url: b,
                timeout: c,
                withCredentials: !d,
                method: e,
                content: f,
                Sa: g,
                headers: h
            }) : Promise.reject(k)
        })
    }
      , Uu = function(a) {
        var b = a.url
          , c = a.timeout
          , d = a.withCredentials
          , e = a.method
          , f = void 0 === a.content ? void 0 : a.content
          , g = void 0 === a.Sa ? void 0 : a.Sa;
        a = void 0 === a.headers ? {} : a.headers;
        var h = new Fu;
        h.U = d;
        h.D = Math.max(0, ou(c));
        h.X && g && h.X(g);
        for (var k in a)
            h.headers.set(k, a[k]);
        var m = new uu;
        return new Promise(function(n, r) {
            m.Lb(h, "success", function() {
                a: {
                    if (El())
                        try {
                            Ru(h);
                            var v = "application/json";
                            break a
                        } catch (A) {
                            v = "application/xml";
                            break a
                        }
                    h.g && 4 == Pu(h) ? (v = h.g.getResponseHeader("Content-Type"),
                    v = null === v ? void 0 : v) : v = void 0;
                    v = v || ""
                }
                if (-1 != v.indexOf("application/json"))
                    n(Ru(h) || {});
                else {
                    try {
                        var y = h.g ? h.g.responseXML : null
                    } catch (A) {
                        y = null
                    }
                    if (null == y) {
                        try {
                            var B = h.g ? h.g.responseText : ""
                        } catch (A) {
                            B = ""
                        }
                        y = B;
                        if ("undefined" != typeof DOMParser)
                            B = new DOMParser,
                            y = Pf(y),
                            y = B.parseFromString(Of(y), "application/xml");
                        else if (tu) {
                            B = new ActiveXObject("MSXML2.DOMDocument");
                            B.resolveExternals = !1;
                            B.validateOnParse = !1;
                            try {
                                B.setProperty("ProhibitDTD", !0),
                                B.setProperty("MaxXMLSize", 2048),
                                B.setProperty("MaxElementDepth", 256)
                            } catch (A) {}
                            B.loadXML(y);
                            y = B
                        } else
                            throw Error("Your browser does not support loading xml documents");
                    }
                    n(y)
                }
                m.V();
                h.V()
            });
            m.Lb(h, ["error", "timeout"], function() {
                r(new qu(h.l,Qu(h)));
                m.V();
                h.V()
            });
            Lu(h, Ot(b), e, f)
        }
        )
    };
    w("google.javascript.ads.imalib.common.UrlLoader", Su);
    var Vu = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
    function Wu() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"))
    }
    ;var $u = function(a, b, c, d, e) {
        c = void 0 === c ? !1 : c;
        e = void 0 === e ? null : e;
        try {
            if (b = (void 0 === d ? 0 : d) ? Ot(b, "https") : Ot(b),
            c = c || eu(b),
            a.h)
                Xu(a, b, c, e);
            else {
                var f = Wu() ? e : null;
                El() ? Yu(b) : Zu(a, b, c, f)
            }
        } catch (g) {}
    }
      , av = function(a, b) {
        var c = {
            keepalive: !0,
            method: "get",
            redirect: "follow"
        };
        a && (c.referrerPolicy = "no-referrer");
        b ? "setAttributionReporting"in XMLHttpRequest.prototype ? c.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
        } : c.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        } : c.mode = "no-cors";
        return c
    }
      , Xu = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        L(K.g(), "faa", "1");
        var e = Wu();
        fetch(b, av(c, "" === d && e)).then(function() {
            L(K.g(), "fas", "1")
        }).catch(function() {
            L(K.g(), "faf", "1");
            a.h = !1;
            var f = d;
            f = Wu() ? f : null;
            El() ? Yu(b) : Zu(a, b, c, f)
        });
        e && d && fetch(d, av(c, !0))
    }
      , Zu = function(a, b, c, d) {
        var e = new Image
          , f = (a.j++).toString();
        a.g.set(f, e);
        e.onload = e.onerror = function() {
            a.g.delete(f)
        }
        ;
        c && (e.referrerPolicy = "no-referrer");
        null != d && (e.attributionSrc = d);
        e.src = b
    }
      , Yu = function(a) {
        (new Su).get({
            url: a,
            timeout: new nu
        })
    };
    var bv = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        eg: "beginFullscreen",
        fg: "canPlay",
        gg: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        rg: "end",
        sg: "endFullscreen",
        te: "error",
        wg: "focusSkipButton",
        ye: "loadStart",
        LOADED: "loaded",
        Tg: "mediaLoadTimeout",
        Ug: "mediaPlaybackTimeout",
        yd: "pause",
        bh: "play",
        eh: "playing",
        mh: "seeked",
        nh: "seeking",
        oh: "skip",
        Je: "skipShown",
        ph: "stalled",
        zd: "start",
        uh: "timeUpdate",
        sh: "timedMetadata",
        Dh: "volumeChange",
        Eh: "waiting",
        Fh: "windowFocusChanged",
        xg: "fullyLoaded"
    };
    var cv = function() {
        P.apply(this, arguments)
    };
    t(cv, P);
    cv.prototype.F = function() {
        return !1
    }
    ;
    cv.prototype.I = function() {
        return -1
    }
    ;
    cv.prototype.J = function() {}
    ;
    var R = {}
      , dv = (R[18] = -1,
    R[22] = -1,
    R[43] = 350,
    R[44] = 350,
    R[45] = 350,
    R[59] = -1,
    R[133] = 350,
    R[134] = 350,
    R[135] = 350,
    R[136] = 350,
    R[139] = 50,
    R[140] = 50,
    R[141] = 50,
    R[160] = 350,
    R[242] = 150,
    R[243] = 150,
    R[244] = 150,
    R[245] = 150,
    R[247] = 150,
    R[249] = 50,
    R[250] = 50,
    R[251] = 50,
    R[278] = 150,
    R[342] = -1,
    R[343] = -1,
    R[344] = -1,
    R[345] = -1,
    R[346] = -1,
    R[347] = -1,
    R[396] = -1,
    R[398] = -1,
    R)
      , S = {}
      , ev = (S[18] = !1,
    S[22] = !1,
    S[43] = !0,
    S[44] = !0,
    S[45] = !0,
    S[59] = !1,
    S[133] = !0,
    S[134] = !0,
    S[135] = !0,
    S[136] = !0,
    S[139] = !0,
    S[140] = !0,
    S[141] = !0,
    S[160] = !0,
    S[242] = !0,
    S[243] = !0,
    S[244] = !0,
    S[245] = !0,
    S[247] = !0,
    S[249] = !0,
    S[250] = !0,
    S[251] = !0,
    S[278] = !0,
    S[342] = !1,
    S[343] = !1,
    S[344] = !1,
    S[345] = !1,
    S[346] = !1,
    S[347] = !1,
    S[396] = !0,
    S[398] = !0,
    S)
      , T = {}
      , fv = (T[18] = "video/mp4",
    T[22] = "video/mp4",
    T[43] = "video/webm",
    T[44] = "video/webm",
    T[45] = "video/webm",
    T[59] = "video/mp4",
    T[133] = "video/mp4",
    T[134] = "video/mp4",
    T[135] = "video/mp4",
    T[136] = "video/mp4",
    T[139] = "audio/mp4",
    T[140] = "audio/mp4",
    T[141] = "audio/mp4",
    T[160] = "video/mp4",
    T[242] = "video/webm",
    T[243] = "video/webm",
    T[244] = "video/webm",
    T[245] = "video/webm",
    T[247] = "video/webm",
    T[249] = "audio/webm",
    T[250] = "audio/webm",
    T[251] = "audio/webm",
    T[278] = "video/webm",
    T[342] = "video/mp4",
    T[343] = "video/mp4",
    T[344] = "video/mp4",
    T[345] = "video/mp4",
    T[346] = "video/mp4",
    T[347] = "video/mp4",
    T[396] = "video/mp4",
    T[398] = "video/mp4",
    T)
      , U = {}
      , gv = (U[18] = "avc1.42001E, mp4a.40.2",
    U[22] = "avc1.64001F, mp4a.40.2",
    U[43] = "vp8, vorbis",
    U[44] = "vp8, vorbis",
    U[45] = "vp8, vorbis",
    U[59] = "avc1.4D001F, mp4a.40.2",
    U[133] = "avc1.4D401E",
    U[134] = "avc1.4D401E",
    U[135] = "avc1.4D401E",
    U[136] = "avc1.4D401E",
    U[139] = "mp4a.40.2",
    U[140] = "mp4a.40.2",
    U[141] = "mp4a.40.2",
    U[160] = "avc1.4D401E",
    U[242] = "vp9",
    U[243] = "vp9",
    U[244] = "vp9",
    U[245] = "vp9",
    U[247] = "vp9",
    U[249] = "opus",
    U[250] = "opus",
    U[251] = "opus",
    U[278] = "vp9",
    U[342] = "avc1.42E01E, mp4a.40.2",
    U[343] = "avc1.42E01E, mp4a.40.2",
    U[344] = "avc1.42E01E, mp4a.40.2",
    U[345] = "avc1.42E01E, mp4a.40.2",
    U[346] = "avc1.42E01E, mp4a.40.2",
    U[347] = "avc1.4D001F, mp4a.40.2",
    U[396] = "av01.0.05M.08",
    U[398] = "av01.0.05M.08",
    U);
    var iv = function(a) {
        this.uri = a;
        this.g = hv(a)
    }
      , hv = function(a) {
        return new Map(a.g.split("/").reduce(function(b, c, d, e) {
            d % 2 && b.set(e[d - 1], c);
            return b
        }, new Map))
    };
    iv.prototype.getId = function() {
        return jv(this, "id")
    }
    ;
    var jv = function(a, b) {
        var c = a.uri.j.get(b);
        return c ? c : (a = a.g.get(b)) ? a : null
    };
    var kv = RegExp("/itag/(\\d+)/");
    function lv(a) {
        var b = Number(yg(a, "itag"));
        return b ? b : (a = a.match(kv)) && 2 === a.length ? Number(a[1]) : null
    }
    function mv(a) {
        var b = fv[a];
        a = gv[a];
        b ? (b = Wf(b).toLowerCase(),
        b = a ? b + '; codecs="' + Wf(a) + '"' : b) : b = "";
        return b
    }
    function nv(a, b) {
        if ("function" === typeof CustomEvent)
            return new CustomEvent(a,{
                detail: b
            });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    }
    ;var ov = ["doubleclick.net"];
    function pv() {
        if (Eb() || x("iPad") || x("iPod"))
            return !1;
        if (Db()) {
            if (void 0 === Jt) {
                a: {
                    if (void 0 === Ht) {
                        if (Lt) {
                            var a = kb(Kt(), "Safari");
                            var b = (new Q(window.location.href)).j.vb("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                                    var c = b.lastIndexOf("v");
                                    if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || "0.0.0" !== b) {
                                a = Ht = !0;
                                break a
                            }
                        }
                        Ht = !1
                    }
                    a = Ht
                }
                a || (void 0 === It && (It = kb(Kt(), "afma-sdk-a") ? !0 : !1),
                a = It);
                Jt = a
            }
            return Jt ? !0 : sg() ? !1 : qv()
        }
        a = Fb() || (Cb() ? "Linux" === tb.platform : x("Linux")) || (Cb() ? "Windows" === tb.platform : x("Windows")) || (Cb() ? "Chrome OS" === tb.platform : x("CrOS"));
        return (fi(cj) || fi(aj) || fi(bj)) && a && Bb() ? qv() : !1
    }
    function qv() {
        var a = !1
          , b = (new Q(window.location.href)).h;
        ov.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    }
    ;var rv, vv = function(a, b, c) {
        if ("number" === typeof a)
            var d = {
                name: tv(a)
            };
        else
            d = a,
            a = uv(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        bb.call(this, b)
    };
    $a(vv, bb);
    vv.prototype.getName = function() {
        return this.g.name || ""
    }
    ;
    var wv = {
        Le: 1,
        Yg: 2,
        NOT_FOUND_ERR: 3,
        pe: 4,
        se: 5,
        Zg: 6,
        Ke: 7,
        ABORT_ERR: 8,
        He: 9,
        wh: 10,
        TIMEOUT_ERR: 11,
        Ge: 12,
        INVALID_ACCESS_ERR: 13,
        INVALID_STATE_ERR: 14
    }
      , xv = (u.g || u.h || wv).Le
      , yv = (u.g || u.h || wv).NOT_FOUND_ERR
      , zv = (u.g || u.h || wv).pe
      , Av = (u.g || u.h || wv).se
      , Bv = (u.g || u.h || wv).Ke
      , Cv = (u.g || u.h || wv).ABORT_ERR
      , Dv = (u.g || u.h || wv).He
      , Ev = (u.g || u.h || wv).TIMEOUT_ERR
      , Fv = (u.g || u.h || wv).Ge
      , Gv = (u.DOMException || wv).INVALID_ACCESS_ERR
      , Hv = (u.DOMException || wv).INVALID_STATE_ERR
      , uv = function(a) {
        switch (a) {
        case "UnknownError":
            return xv;
        case "NotFoundError":
            return yv;
        case "ConstraintError":
            return zv;
        case "DataError":
            return Av;
        case "TransactionInactiveError":
            return Bv;
        case "AbortError":
            return Cv;
        case "ReadOnlyError":
            return Dv;
        case "TimeoutError":
            return Ev;
        case "QuotaExceededError":
            return Fv;
        case "InvalidAccessError":
            return Gv;
        case "InvalidStateError":
            return Hv;
        default:
            return xv
        }
    }
      , tv = function(a) {
        switch (a) {
        case xv:
            return "UnknownError";
        case yv:
            return "NotFoundError";
        case zv:
            return "ConstraintError";
        case Av:
            return "DataError";
        case Bv:
            return "TransactionInactiveError";
        case Cv:
            return "AbortError";
        case Dv:
            return "ReadOnlyError";
        case Ev:
            return "TimeoutError";
        case Fv:
            return "QuotaExceededError";
        case Gv:
            return "InvalidAccessError";
        case Hv:
            return "InvalidStateError";
        default:
            return "UnknownError"
        }
    }
      , Iv = function(a, b) {
        return "error"in a ? new vv(a.error,b) : new vv({
            name: "UnknownError"
        },b)
    }
      , Jv = function(a, b) {
        return "name"in a ? new vv(a,b + ": " + a.message) : new vv({
            name: "UnknownError"
        },b)
    };
    var Kv = function(a) {
        this.g = a
    }
      , Lv = u.IDBKeyRange || u.webkitIDBKeyRange;
    function Mv() {}
    ;/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
    var Nv = function(a, b) {
        this.l = [];
        this.G = a;
        this.F = b || null;
        this.o = this.j = !1;
        this.h = void 0;
        this.K = this.I = this.B = !1;
        this.A = 0;
        this.g = null;
        this.H = 0
    };
    $a(Nv, Mv);
    Nv.prototype.cancel = function(a) {
        if (this.j)
            this.h instanceof Nv && this.h.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.H--,
                0 >= b.H && b.cancel())
            }
            this.G ? this.G.call(this.F, this) : this.K = !0;
            this.j || Ov(this, new Pv(this))
        }
    }
    ;
    Nv.prototype.D = function(a, b) {
        this.B = !1;
        Rv(this, a, b)
    }
    ;
    var Rv = function(a, b, c) {
        a.j = !0;
        a.h = c;
        a.o = !b;
        Sv(a)
    }
      , Uv = function(a) {
        if (a.j) {
            if (!a.K)
                throw new Tv(a);
            a.K = !1
        }
    };
    Nv.prototype.callback = function(a) {
        Uv(this);
        Rv(this, !0, a)
    }
    ;
    var Ov = function(a, b) {
        Uv(a);
        Rv(a, !1, b)
    };
    Nv.prototype.Hc = function(a) {
        return Vv(this, a, null)
    }
    ;
    var Vv = function(a, b, c, d) {
        a.l.push([b, c, d]);
        a.j && Sv(a);
        return a
    };
    Nv.prototype.then = function(a, b, c) {
        var d, e, f = new br(function(g, h) {
            e = g;
            d = h
        }
        );
        Vv(this, e, function(g) {
            g instanceof Pv ? f.cancel() : d(g);
            return Wv
        }, this);
        return f.then(a, b, c)
    }
    ;
    Nv.prototype.$goog_Thenable = !0;
    var Xv = function(a) {
        return Mb(a.l, function(b) {
            return "function" === typeof b[1]
        })
    }
      , Wv = {}
      , Sv = function(a) {
        if (a.A && a.j && Xv(a)) {
            var b = a.A
              , c = Yv[b];
            c && (u.clearTimeout(c.g),
            delete Yv[b]);
            a.A = 0
        }
        a.g && (a.g.H--,
        delete a.g);
        b = a.h;
        for (var d = c = !1; a.l.length && !a.B; ) {
            var e = a.l.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.o ? g : f)
                try {
                    var h = f.call(e || a.F, b);
                    h === Wv && (h = void 0);
                    void 0 !== h && (a.o = a.o && (h == b || h instanceof Error),
                    a.h = b = h);
                    if ($q(b) || "function" === typeof u.Promise && b instanceof u.Promise)
                        d = !0,
                        a.B = !0
                } catch (k) {
                    b = k,
                    a.o = !0,
                    Xv(a) || (c = !0)
                }
        }
        a.h = b;
        d && (h = Wa(a.D, a, !0),
        d = Wa(a.D, a, !1),
        b instanceof Nv ? (Vv(b, h, d),
        b.I = !0) : b.then(h, d));
        c && (b = new Zv(b),
        Yv[b.g] = b,
        a.A = b.g)
    }
      , Tv = function() {
        bb.call(this)
    };
    $a(Tv, bb);
    Tv.prototype.message = "Deferred has already fired";
    Tv.prototype.name = "AlreadyCalledError";
    var Pv = function() {
        bb.call(this)
    };
    $a(Pv, bb);
    Pv.prototype.message = "Deferred was canceled";
    Pv.prototype.name = "CanceledError";
    var Zv = function(a) {
        this.g = u.setTimeout(Wa(this.j, this), 0);
        this.h = a
    };
    Zv.prototype.j = function() {
        delete Yv[this.g];
        throw this.h;
    }
    ;
    var Yv = {};
    var $v = function() {
        P.call(this)
    };
    $a($v, P);
    $v.prototype.g = null;
    $v.prototype.next = function(a) {
        if (a)
            this.g["continue"](a);
        else
            this.g["continue"]()
    }
    ;
    $v.prototype.remove = function() {
        var a = new Nv;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return Ov(a, Jv(c, "deleting via cursor")),
            a
        }
        b.onsuccess = function() {
            a.callback()
        }
        ;
        b.onerror = function(c) {
            Ov(a, Iv(c.target, "deleting via cursor"))
        }
        ;
        return a
    }
    ;
    var aw = function(a, b) {
        var c = new $v;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.V(),
            Jv(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        }
        ;
        d.onerror = function() {
            c.dispatchEvent("e")
        }
        ;
        return c
    };
    var bw = function(a) {
        this.g = a
    };
    bw.prototype.getName = function() {
        return this.g.name
    }
    ;
    var cw = function(a, b, c) {
        var d = new Nv;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + zg(c),
            Ov(d, Jv(f, b)),
            d
        }
        e.onsuccess = function(f) {
            d.callback(f.target.result)
        }
        ;
        e.onerror = function(f) {
            b += " with key " + zg(c);
            Ov(d, Iv(f.target, b))
        }
        ;
        return d
    };
    bw.prototype.get = function(a) {
        return cw(this, "getting from index " + this.getName(), a)
    }
    ;
    var dw = function(a, b) {
        return aw(a.g, b)
    };
    var ew = function(a) {
        this.g = a
    };
    ew.prototype.getName = function() {
        return this.g.name
    }
    ;
    var fw = function(a, b, c, d, e) {
        var f = new Nv;
        try {
            var g = e ? a.g[b](d, e) : a.g[b](d)
        } catch (h) {
            return c += zg(d),
            e && (c += ", with key " + zg(e)),
            Ov(f, Jv(h, c)),
            f
        }
        g.onsuccess = function(h) {
            f.callback(h.target.result)
        }
        ;
        g.onerror = function(h) {
            c += zg(d);
            e && (c += ", with key " + zg(e));
            Ov(f, Iv(h.target, c))
        }
        ;
        return f
    }
      , gw = function(a, b) {
        return fw(a, "put", "putting into " + a.getName() + " with value", b)
    };
    ew.prototype.add = function(a, b) {
        return fw(this, "add", "adding into " + this.getName() + " with value ", a, b)
    }
    ;
    ew.prototype.remove = function(a) {
        var b = new Nv;
        try {
            var c = this.g["delete"](a instanceof Kv ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + zg(a),
            Ov(b, Jv(e, c)),
            b
        }
        c.onsuccess = function() {
            b.callback()
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + zg(a);
            Ov(b, Iv(e.target, f))
        }
        ;
        return b
    }
    ;
    ew.prototype.get = function(a) {
        var b = new Nv;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + zg(a),
            Ov(b, Jv(e, c)),
            b
        }
        c.onsuccess = function(e) {
            b.callback(e.target.result)
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + zg(a);
            Ov(b, Iv(e.target, f))
        }
        ;
        return b
    }
    ;
    ew.prototype.clear = function() {
        var a = "clearing store " + this.getName()
          , b = new Nv;
        try {
            var c = this.g.clear()
        } catch (d) {
            return Ov(b, Jv(d, a)),
            b
        }
        c.onsuccess = function() {
            b.callback()
        }
        ;
        c.onerror = function(d) {
            Ov(b, Iv(d.target, a))
        }
        ;
        return b
    }
    ;
    var hw = function(a) {
        try {
            return new bw(a.g.index("timestamp"))
        } catch (b) {
            throw Jv(b, "getting index timestamp");
        }
    };
    var iw = function(a, b) {
        P.call(this);
        this.g = a;
        this.j = b;
        this.h = new uu(this);
        this.h.N(this.g, "complete", Wa(this.dispatchEvent, this, "complete"));
        this.h.N(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.N(this.g, "error", this.ve)
    };
    $a(iw, P);
    l = iw.prototype;
    l.ve = function(a) {
        a.target instanceof vv ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: Iv(a.target, "in transaction")
        })
    }
    ;
    l.objectStore = function(a) {
        try {
            return new ew(this.g.objectStore(a))
        } catch (b) {
            throw Jv(b, "getting object store " + a);
        }
    }
    ;
    l.commit = function(a) {
        if (this.g.commit || !a)
            try {
                this.g.commit()
            } catch (b) {
                throw Jv(b, "cannot commit the transaction");
            }
    }
    ;
    l.wait = function() {
        var a = new Nv;
        Bq(this, "complete", Wa(a.callback, a));
        var b = Bq(this, "abort", function() {
            Kq(c);
            Ov(a, new vv(Cv,"waiting for transaction to complete"))
        });
        var c = Bq(this, "error", function(e) {
            Kq(b);
            Ov(a, e.target)
        });
        var d = this.j;
        return a.Hc(function() {
            return d
        })
    }
    ;
    l.abort = function() {
        this.g.abort()
    }
    ;
    l.M = function() {
        iw.za.M.call(this);
        this.h.V()
    }
    ;
    var jw = function(a) {
        P.call(this);
        this.g = a;
        this.h = new uu(this);
        this.h.N(this.g, "abort", Wa(this.dispatchEvent, this, "abort"));
        this.h.N(this.g, "error", this.we);
        this.h.N(this.g, "versionchange", this.Xe);
        this.h.N(this.g, "close", Wa(this.dispatchEvent, this, "close"))
    };
    $a(jw, P);
    l = jw.prototype;
    l.Zc = !0;
    l.we = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    }
    ;
    l.Xe = function(a) {
        this.dispatchEvent(new kw(a.oldVersion,a.newVersion))
    }
    ;
    l.close = function() {
        this.Zc && (this.g.close(),
        this.Zc = !1)
    }
    ;
    l.getName = function() {
        return this.g.name
    }
    ;
    l.getVersion = function() {
        return Number(this.g.version)
    }
    ;
    var lw = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new iw(c,a)
        } catch (d) {
            throw Jv(d, "creating transaction");
        }
    };
    jw.prototype.M = function() {
        jw.za.M.call(this);
        this.h.V()
    }
    ;
    var kw = function(a, b) {
        mq.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    $a(kw, mq);
    var mw = function(a) {
        var b = new Nv;
        void 0 == rv && (rv = u.indexedDB || u.mozIndexedDB || u.webkitIndexedDB || u.moz_indexedDB);
        var c = rv.open("VideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new jw(d.target.result);
            b.callback(d)
        }
        ;
        c.onerror = function(d) {
            Ov(b, Iv(d.target, "opening database VideoChunkPersistentStorage"))
        }
        ;
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new jw(d.target.result);
                a(new kw(d.oldVersion,d.newVersion), e, new iw(d.target.transaction,e))
            }
        }
        ;
        c.onblocked = function() {}
        ;
        return b
    };
    var nw = function() {
        P.call(this);
        this.g = null
    };
    t(nw, P);
    nw.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(mw(this.h)).then(function(b) {
            return a.g = b
        }, function(b) {
            L(K.g(), "codf", b.message)
        })
    }
    ;
    var ow = function(a) {
        return null !== a.g && a.g.Zc
    };
    nw.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            pw(a, b)
        }
        )).then(function() {
            return qw()
        }).then(function() {
            a.g.close()
        })
    }
    ;
    var qw = function() {
        return "storage"in navigator && "estimate"in navigator.storage ? navigator.storage.estimate().then(function(a) {
            L(K.g(), "csue", String(a.usage))
        }) : Promise.resolve(void 0)
    }
      , vw = function(a, b) {
        return (b = rw(b)) ? tw(a, uw(b), b.lmt) : Promise.resolve(null)
    }
      , xw = function(a, b, c, d) {
        if (c = rw(c)) {
            var e = c.startIndex;
            ww(a, {
                cacheId: uw(c),
                startIndex: e,
                endIndex: e + b.byteLength - 1,
                lmt: c.lmt,
                timestamp: new Date(Date.now()),
                isLastVideoChunk: d,
                itag: c.itag,
                video: b
            })
        } else
            Promise.resolve(void 0)
    };
    nw.prototype.h = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk"))
            try {
                b.g.deleteObjectStore("MediaSourceVideoChunk")
            } catch (d) {
                throw Jv(d, "deleting object store MediaSourceVideoChunk");
            }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new ew(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw Jv(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw Jv(d, "creating new index timestamp with key path timestamp");
        }
    }
    ;
    var pw = function(a, b) {
        var c = new Date(Date.now());
        c.setDate(c.getDate() - 30);
        c = new Kv(Lv.upperBound(c, void 0));
        var d = dw(hw(lw(a.g).objectStore("MediaSourceVideoChunk")), c)
          , e = d.N("n", function() {
            d.remove();
            d.next()
        });
        Bq(d, "c", function() {
            Kq(e);
            b()
        })
    }
      , rw = function(a) {
        var b = new iv(a);
        a = b.getId();
        var c = jv(b, "itag")
          , d = jv(b, "source")
          , e = jv(b, "lmt");
        (b = b.uri.j.get("range")) ? (b = b.split("-")[0],
        b = !b || isNaN(Number(b)) ? null : Number(b)) : b = null;
        var f = [];
        a ? c ? d ? e ? null === b && f.push("startIndex") : f.push("lmt") : f.push("source") : f.push("itag") : f.push("videoId");
        return 0 < f.length ? (L(K.g(), "civp", f.join("-")),
        null) : {
            videoId: a,
            itag: c,
            source: d,
            lmt: e,
            startIndex: b + 0
        }
    }
      , uw = function(a) {
        for (var b = [a.Wh, a.source, a.Uh].join(), c = 0, d = 0; d < b.length; d++)
            c = Math.imul(31, c) + b.charCodeAt(d) | 0;
        return c.toString() + "," + a.itag
    }
      , tw = function(a, b, c) {
        var d = lw(a.g).objectStore("MediaSourceVideoChunk");
        return Promise.resolve(d.get(b)).then(function(e) {
            if (!e)
                return L(K.g(), "cenf", "1"),
                null;
            if (e.lmt !== c)
                return L(K.g(), "cdl", "1"),
                d.remove(b).then(null, function(f) {
                    L(K.g(), "crdlvf", f.message)
                }),
                null;
            L(K.g(), "cefml", "1");
            return {
                itag: e.itag,
                endIndex: e.endIndex,
                isLastVideoChunk: e.isLastVideoChunk,
                video: e.video
            }
        }, function(e) {
            L(K.g(), "cgvf", e.message);
            return null
        })
    }
      , ww = function(a, b) {
        a = lw(a.g).objectStore("MediaSourceVideoChunk");
        Promise.resolve(gw(a, b)).then(function() {
            L(K.g(), "cavs", "1")
        }, function(c) {
            L(K.g(), "cavf", c.message)
        })
    };
    var yw = function(a) {
        cv.call(this);
        var b = this;
        this.D = new Q(a);
        this.G = this.g = this.j = this.h = 0;
        this.l = (this.B = pv()) ? mt(nw) : null;
        bf(this, function() {
            af(b.l)
        });
        this.L = this.B ? this.l.initialize() : null;
        this.A = null
    };
    t(yw, cv);
    yw.prototype.I = function() {
        return this.h
    }
    ;
    yw.prototype.F = function() {
        return 3 === this.g
    }
    ;
    yw.prototype.J = function(a) {
        1 === this.g ? (this.h += a,
        this.g = 2) : 0 === this.g && (this.h += a,
        this.g = 1,
        zw(this))
    }
    ;
    var zw = function(a) {
        Ia(function(b) {
            if (1 == b.g)
                return 2 === a.g && (a.g = 1),
                ya(b, Aw(a), 4);
            var c = 3 < a.G;
            if (c && null !== a.A) {
                var d = nv("media_source_error", {
                    code: 0 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.A + '" with ' + a.h + " bytes requested and " + a.j + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.j < a.h && 3 !== a.g && !c ? b.g = 1 : (3 !== a.g && (a.g = 0),
            b.g = 0)
        })
    }
      , Aw = function(a) {
        var b;
        return Ia(function(c) {
            switch (c.g) {
            case 1:
                b = a.j + "-" + (a.h - 1);
                Bt(a.D, "range", b);
                if (!a.B) {
                    c.g = 2;
                    break
                }
                return ya(c, a.L, 3);
            case 3:
                return c.return(Bw(a));
            case 2:
                return c.j = 4,
                ya(c, Cw(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                a.G++,
                c.g = 0
            }
        })
    }
      , Bw = function(a) {
        var b;
        return Ia(function(c) {
            switch (c.g) {
            case 1:
                return ya(c, vw(a.l, a.D), 2);
            case 2:
                if (b = c.h) {
                    b.isLastVideoChunk && (a.g = 3);
                    Dw(a, b.video, 0);
                    c.g = 0;
                    break
                }
                c.j = 4;
                return ya(c, Cw(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                a.G++,
                c.g = 0
            }
        })
    }
      , Cw = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest
              , e = 0
              , f = a.h - a.j;
            d.addEventListener("load", function() {
                Qh("lvlcl");
                if (400 <= d.status)
                    return L(K.g(), "lvlxes", d.status.toString()),
                    a.A = d.status,
                    c();
                var g = d.response;
                g.byteLength < f && (a.g = 3);
                var h = Dw(a, g, e);
                e += h;
                a.B && 0 < g.byteLength && xw(a.l, g, a.D, g.byteLength < f);
                b()
            });
            d.addEventListener("timeout", function() {
                Qh("lvlct");
                a.A = d.status;
                c()
            });
            d.addEventListener("error", function() {
                Qh("lvlce");
                a.A = d.status;
                c()
            });
            d.addEventListener("progress", function() {
                if (400 <= d.status)
                    a.A = d.status;
                else {
                    var g = Dw(a, d.response, e);
                    e += g
                }
            });
            d.responseType = "arraybuffer";
            d.open("get", a.D.toString());
            d.send(null)
        }
        )
    }
      , Dw = function(a, b, c) {
        if (null === b)
            return 0;
        b = b.slice(c);
        a.j += b.byteLength;
        a.dispatchEvent({
            type: "progress",
            Hd: b
        });
        return b.byteLength
    };
    yw.prototype.M = function() {
        this.B && ow(this.l) && this.l.close();
        cv.prototype.M.call(this)
    }
    ;
    var Ew = function(a) {
        cv.call(this);
        var b = this;
        this.D = new Q(a);
        this.G = this.g = this.j = this.h = 0;
        this.l = (this.A = pv()) ? mt(nw) : null;
        bf(this, function() {
            af(b.l)
        });
        this.L = this.A ? this.l.initialize() : null;
        this.B = null
    };
    t(Ew, cv);
    Ew.prototype.I = function() {
        return this.h
    }
    ;
    Ew.prototype.F = function() {
        return 3 === this.g
    }
    ;
    Ew.prototype.J = function(a) {
        1 === this.g ? (this.h += a,
        this.g = 2) : 0 === this.g && (this.h += a,
        this.g = 1,
        Fw(this))
    }
    ;
    var Fw = function(a) {
        Ia(function(b) {
            if (1 == b.g)
                return 2 === a.g && (a.g = 1),
                ya(b, Gw(a), 4);
            var c = 3 < a.G;
            if (c) {
                null === a.B && (a.B = 400);
                var d = nv("media_source_error", {
                    code: 0 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.B + '" with ' + a.h + " bytes requested and " + a.j + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.j < a.h && 3 !== a.g && !c ? b.g = 1 : (3 !== a.g && (a.g = 0),
            b.g = 0)
        })
    }
      , Gw = function(a) {
        var b;
        return Ia(function(c) {
            switch (c.g) {
            case 1:
                b = a.j + "-" + (a.h - 1);
                Bt(a.D, "range", b);
                if (!a.A) {
                    c.g = 2;
                    break
                }
                return ya(c, a.L, 3);
            case 3:
                return c.return(Hw(a));
            case 2:
                return c.j = 4,
                ya(c, Iw(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                a.G++,
                c.g = 0
            }
        })
    }
      , Hw = function(a) {
        var b;
        return Ia(function(c) {
            switch (c.g) {
            case 1:
                return ya(c, vw(a.l, a.D), 2);
            case 2:
                if (b = c.h) {
                    b.isLastVideoChunk && (a.g = 3);
                    Jw(a, b.video);
                    c.g = 0;
                    break
                }
                c.j = 4;
                return ya(c, Iw(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                a.G++,
                c.g = 0
            }
        })
    }
      , Iw = function(a) {
        var b, c, d, e, f, g;
        return Ia(function(h) {
            if (1 == h.g)
                return b = 0,
                c = a.h - a.j,
                ya(h, fetch(a.D.toString()), 2);
            d = h.h;
            if (400 <= d.status)
                return L(K.g(), "lvlfes", d.status.toString()),
                a.B = d.status,
                h.return(Promise.reject());
            e = d.body.getReader();
            if (!e)
                return Qh("lvlmr"),
                a.B = d.status,
                h.return(Promise.reject());
            f = [];
            g = function() {
                var k, m, n, r;
                return Ia(function(v) {
                    if (1 == v.g)
                        return ya(v, e.read(), 2);
                    k = v.h;
                    m = k.done;
                    n = k.value;
                    if (m)
                        return r = b < c,
                        Kw(a, f, r),
                        v.return();
                    f.push(n);
                    b += n.length;
                    Jw(a, n.buffer);
                    return ya(v, g(), 0)
                })
            }
            ;
            return ya(h, g(), 0)
        })
    }
      , Kw = function(a, b, c) {
        c && (a.g = 3,
        Jw(a, new ArrayBuffer(0)));
        var d = new Uint8Array(b.reduce(function(g, h) {
            return g + h.length
        }, 0))
          , e = 0;
        b = q(b);
        for (var f = b.next(); !f.done; f = b.next())
            f = f.value,
            d.set(f, e),
            e += f.length;
        a.A && 0 < d.buffer.byteLength && xw(a.l, d.buffer, a.D, c)
    }
      , Jw = function(a, b) {
        null !== b && (b = b.slice(0),
        a.j += b.byteLength,
        a.dispatchEvent({
            type: "progress",
            Hd: b
        }))
    };
    Ew.prototype.M = function() {
        this.A && ow(this.l) && this.l.close();
        cv.prototype.M.call(this)
    }
    ;
    var Lw = function() {};
    function Mw() {
        return !!window.MediaSource
    }
    function Nw(a) {
        return [43, 44, 45].includes(a) && zc ? !1 : ev[a] ? (a = mv(a),
        !!a && Mw() && MediaSource.isTypeSupported(a)) : !1
    }
    ;var Ow = function() {};
    Ow.prototype.g = function(a, b, c) {
        return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
    }
    ;
    var Pw = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var Sw = function(a) {
        P.call(this);
        var b = this;
        this.h = a;
        this.A = this.h.map(function(c) {
            return mt(fi(nj) ? Ew : yw, c.url)
        });
        this.ha = mt(MediaSource);
        this.g = [];
        this.j = window.URL.createObjectURL(this.ha);
        this.G = 0;
        this.F = !1;
        this.D = function() {
            return Qw(b)
        }
        ;
        this.ha.addEventListener("sourceopen", this.D);
        this.I = Rw(this);
        this.B = 0;
        this.l = []
    };
    t(Sw, P);
    var Rw = function(a) {
        for (var b = [], c = 0; c < a.h.length; ++c)
            b.push(new Ow);
        return b
    }
      , Qw = function(a) {
        Qh("msms_oso");
        for (var b = {}, c = 0; c < a.h.length; b = {
            Qa: b.Qa,
            Cb: b.Cb
        },
        ++c) {
            var d = a.h[c];
            L(K.g(), "msms_mime" + c, d.mimeType);
            L(K.g(), "msms_cs" + c, d.g.toString());
            b.Qa = a.ha.addSourceBuffer(d.mimeType);
            b.Cb = a.A[c];
            fi(nj) && b.Qa.addEventListener("updateend", function(e) {
                return function() {
                    if (0 < a.l.length && !e.Qa.updating) {
                        var f = a.l.shift();
                        e.Qa.appendBuffer(f)
                    }
                }
            }(b));
            b.Cb.N("progress", function(e) {
                return function(f) {
                    var g = e.Qa
                      , h = e.Cb;
                    f = f.Hd;
                    0 !== f.byteLength && (fi(nj) ? g.updating ? a.l.push(f) : g.appendBuffer(f) : g.appendBuffer(f));
                    h.F() && (a.G++,
                    a.G === a.g.length && Tw(a))
                }
            }(b));
            b.Cb.N("media_source_error", function(e) {
                a.dispatchEvent(e)
            });
            b.Qa ? a.g.push(b.Qa) : Qh("msms_sbf" + c)
        }
        L(K.g(), "msms_ns", a.g.length.toString());
        a.F = !0;
        Uw(a)
    }
      , Tw = function(a) {
        Promise.all(a.g.map(function(b) {
            return new Promise(function(c) {
                b.updating ? b.addEventListener("updateend", function() {
                    c()
                }) : c()
            }
            )
        })).then(function() {
            return a.ha.endOfStream()
        })
    }
      , Uw = function(a) {
        if (a.F)
            for (var b = 0; b < a.h.length; ++b) {
                var c = a.A[b]
                  , d = a.g[b];
                d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
                d = a.I[b].g(a.B, d, c.I());
                0 !== d && c.J(d)
            }
    };
    Sw.prototype.M = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = q(this.A), b = a.next(); !b.done; b = a.next())
            b.value.V();
        this.ha.removeEventListener("sourceopen", this.D);
        P.prototype.M.call(this)
    }
    ;
    var Vw = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel")
      , Ww = RegExp("outstream.min.js")
      , Xw = RegExp("outstream.min.css")
      , Yw = RegExp("fonts.gstatic.com")
      , Zw = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback")
      , $w = RegExp("custom.elements.min.js");
    function ax(a, b) {
        var c = 0
          , d = 0
          , e = 0
          , f = 0
          , g = 0
          , h = 0
          , k = 0
          , m = !1
          , n = !1;
        if ("function" === typeof Na("performance.getEntriesByType", u) && "transferSize"in u.PerformanceResourceTiming.prototype) {
            var r = u.performance.getEntriesByType("resource");
            r = q(r);
            for (var v = r.next(); !v.done; v = r.next())
                v = v.value,
                Vw.test(v.name) || (f += 1,
                v.transferSize ? (c += v.transferSize,
                v.encodedBodySize && v.transferSize < v.encodedBodySize && (h += 1,
                e += v.encodedBodySize,
                Ww.test(v.name) && (m = !0),
                Xw.test(v.name) && (n = !0)),
                Zw.test(v.name) && (d += v.transferSize)) : 0 === v.transferSize && 0 === v.encodedBodySize ? $w.test(v.name) ? c += 6686 : Yw.test(v.name) || (k += 1,
                Ph(K.g(), {
                    event_name: "unmeasurable_asset",
                    resource_name: v.name,
                    encoded_body_size: v.encodedBodySize,
                    transfer_size: v.transferSize
                })) : (g += 1,
                e += v.encodedBodySize,
                Ww.test(v.name) && (m = !0),
                Xw.test(v.name) && (n = !0)));
            r = 0;
            if (a.duration) {
                for (v = 0; v < a.buffered.length; v++)
                    r += a.buffered.end(v) - a.buffered.start(v);
                r = Math.min(r, a.duration)
            }
            Ph(K.g(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: m,
                css_cached: n,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: r.toFixed(2)
            })
        } else
            L(K.g(), "error", "reporting_timing_not_supported")
    }
    ;function bx(a) {
        var b = K.g()
          , c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime,
        L(b, "vqdf", String(c.droppedVideoFrames)),
        L(b, "vqtf", String(c.totalVideoFrames)),
        L(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : L(b, "vqu", "1")
    }
    ;var cx = function(a) {
        this.g = a
    };
    cx.prototype.toString = function() {
        return this.g
    }
    ;
    var dx = new cx("video_mute")
      , ex = new cx("video_caption_visibility");
    var fx = function(a) {
        E.call(this);
        this.A = 1;
        this.j = [];
        this.o = 0;
        this.g = [];
        this.h = {};
        this.D = !!a
    };
    $a(fx, E);
    var gx = function(a, b, c) {
        var d = ex.toString()
          , e = a.h[d];
        e || (e = a.h[d] = []);
        var f = a.A;
        a.g[f] = d;
        a.g[f + 1] = b;
        a.g[f + 2] = c;
        a.A = f + 3;
        e.push(f)
    }
      , hx = function(a, b, c) {
        var d = a.h[ex.toString()];
        if (d) {
            var e = a.g;
            (d = d.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && a.l(d)
        }
    };
    fx.prototype.l = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            0 != this.o ? (this.j.push(a),
            this.g[a + 1] = function() {}
            ) : (c && Rb(c, a),
            delete this.g[a],
            delete this.g[a + 1],
            delete this.g[a + 2])
        }
        return !!b
    }
    ;
    fx.prototype.B = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.D)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    ix(this.g[g + 1], this.g[g + 2], d)
                }
            else {
                this.o++;
                try {
                    for (e = 0,
                    f = c.length; e < f && !this.va(); e++)
                        g = c[e],
                        this.g[g + 1].apply(this.g[g + 2], d)
                } finally {
                    if (this.o--,
                    0 < this.j.length && 0 == this.o)
                        for (; c = this.j.pop(); )
                            this.l(c)
                }
            }
        }
    }
    ;
    var ix = function(a, b, c) {
        Yq(function() {
            a.apply(b, c)
        })
    };
    fx.prototype.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.l, this),
            delete this.h[a])
        } else
            this.g.length = 0,
            this.h = {}
    }
    ;
    fx.prototype.M = function() {
        fx.za.M.call(this);
        this.clear();
        this.j.length = 0
    }
    ;
    var jx = function(a) {
        E.call(this);
        this.g = new fx(a);
        cf(this, this.g)
    };
    $a(jx, E);
    jx.prototype.clear = function(a) {
        this.g.clear(void 0 !== a ? a.toString() : void 0)
    }
    ;
    var kx = function(a) {
        a = void 0 === a ? null : a;
        E.call(this);
        this.g = new uu(this);
        cf(this, this.g);
        this.lb = a
    };
    t(kx, E);
    var lx = function(a, b, c) {
        a.lb && (gx(a.lb.g, b, c),
        bf(a, function() {
            hx(a.lb.g, b, c)
        }))
    };
    var mx = function(a, b) {
        kx.call(this, b);
        lx(this, function(c) {
            a.g.mode = c ? "showing" : "hidden"
        }, this)
    };
    t(mx, kx);
    var nx = function() {
        P.call(this);
        this.h = new uu(this);
        cf(this, this.h)
    };
    t(nx, P);
    var px = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        nx.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = mg("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        ox(this);
        this.g.mode = c ? "showing" : "hidden"
    };
    t(px, nx);
    var ox = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    function qx(a, b) {
        if ("undefined" !== typeof ReportingObserver) {
            var c = function(e) {
                e = q(e);
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    a(f) && b(f)
            }
              , d = new ReportingObserver(c,{
                buffered: !0
            });
            u.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }
    function rx(a) {
        a = void 0 === a ? null : a;
        qx(function(b) {
            return b.body && "HeavyAdIntervention" === b.body.id
        }, function(b) {
            var c = b.body.message
              , d = K.g();
            L(d, "ham", c);
            c.includes("CPU") ? L(d, "hacpu", "true") : c.includes("network") && L(d, "habytes", "true");
            a && a(b)
        })
    }
    ;var sx = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" ")
      , tx = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" ")
      , ux = {
        childList: !0
    }
      , vx = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}
    .toString())
      , wx = HTMLElement;
    vx && (wx = function() {
        var a = Object.getPrototypeOf(this).constructor;
        return u.Reflect.construct(HTMLElement, [], a)
    }
    ,
    Object.setPrototypeOf(wx, HTMLElement),
    Object.setPrototypeOf(wx.prototype, HTMLElement.prototype));
    var xx = function(a) {
        if (null !== a) {
            a = q(a);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value,
                b.nodeName === "TRACK".toString())
                    return b
        }
        return null
    }
      , yx = function(a, b) {
        this.code = a;
        this.message = void 0 === b ? "" : b
    }
      , zx = function(a) {
        yx.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
    };
    t(zx, yx);
    var Dx = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = wx.call(this) || this;
        L(K.g(), "ulv", "1");
        c.Tf = b;
        c.ha = null;
        c.Wd = null;
        c.Cd = null;
        c.P = mg("VIDEO");
        Ax(c);
        c.lb = a || new jx;
        Bx(c);
        c.bc = null;
        Cx(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.P);
        rx(function() {
            L(K.g(), "has", c.src || c.tb);
            L(K.g(), "hat", String(c.P.currentTime))
        });
        c.Ac = !1;
        c.Zd = !1;
        c.Mb = null;
        c.Pa = null;
        c.Uf = !1;
        c.ce = !1;
        c.Nh = null;
        return c
    };
    t(Dx, wx);
    Dx.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
        case "src":
            Ex(this, c);
            break;
        case "demuxedaudiosrc":
        case "demuxedvideosrc":
            Fx(this);
            break;
        case "muted":
            this.P[a] = "" === c ? !0 : !!c;
            Gx(this, a, c);
            break;
        default:
            Gx(this, a, c)
        }
    }
    ;
    var Gx = function(a, b, c) {
        c !== a.P.getAttribute(b) && (null === c ? a.P.removeAttribute(b) : a.P.setAttribute(b, c))
    }
      , Hx = function(a) {
        a.ha && (a.P.removeEventListener("timeupdate", a.Mb),
        a.ha.V(),
        a.ha = null)
    }
      , Ix = function(a, b) {
        a.Cd = b;
        a.P.dispatchEvent(new Event("error"))
    }
      , Ax = function(a) {
        Jx(a);
        Kx(a);
        a.P.addEventListener("loadedmetadata", function() {
            a.Pa = ju(a);
            a.Pa.then(function(b) {
                var c = a.P.videoWidth
                  , d = a.P.videoHeight
                  , e = b.width
                  , f = b.height;
                0 < c && 0 < d && 0 < e && 0 < f && (b = b.width / b.height,
                c /= d,
                .97 <= Math.min(c, b) / Math.max(c, b) ? gl(a.P, {
                    "object-fit": "cover"
                }) : gl(a.P, {
                    "object-fit": "contain"
                }))
            })
        });
        a.P.addEventListener("play", function() {
            a.Zd || (ax(a.P, "first_play"),
            a.Zd = !0)
        });
        a.P.addEventListener("pause", function() {
            a.Ac || (ax(a.P, "first_pause"),
            bx(a.P),
            a.Ac = !0)
        });
        Cq(u, "pagehide", function() {
            a.Ac || (ax(a.P, "first_pause"),
            bx(a.P),
            a.Ac = !0)
        });
        a.P.addEventListener("stalled", function() {
            L(K.g(), "ves", "1")
        });
        (new $t(a.P)).N("playbackStalled", function() {
            return L(K.g(), "pbs", "1")
        });
        a.P.addEventListener("media_source_error", function(b) {
            Hx(a);
            b = b.detail;
            Ix(a, new yx(b.code,b.message))
        });
        Lx(a)
    }
      , Cx = function(a) {
        var b = xx(a.childNodes);
        b && Mx(a, b);
        null === a.bc && Nx(a)
    }
      , Nx = function(a) {
        if (u.MutationObserver) {
            var b = new MutationObserver(function(c) {
                c = q(c);
                for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value,
                    "childList" === d.type && (d = xx(d.addedNodes))) {
                        Mx(a, d);
                        b.disconnect();
                        break
                    }
            }
            );
            b.observe(a, ux)
        }
    }
      , Bx = function(a) {
        a.P.addEventListener("volumechange", function() {
            a.lb.g.B(dx.toString(), a.P.muted);
            a.Tf || a.lb.g.B(ex.toString(), a.P.muted)
        })
    }
      , Mx = function(a, b) {
        if (null === a.bc && b.hasAttribute("src")) {
            var c = b.getAttribute("src");
            a.bc = new px(a.P,c,b.hasAttribute("default"));
            new mx(a.bc,a.lb);
            c.includes("kind=asr") && L(K.g(), "act", "1")
        }
    }
      , Ex = function(a, b) {
        if (b !== a.Wd) {
            a.Wd = b;
            a.Uf && b && Qt(b) && (b = Rt(b));
            var c = b ? lv(b) : null
              , d = !!c && Nw(c);
            L(K.g(), "umsem", d ? "1" : "0");
            d ? (b = mt(Pw, b, mv(c), 1E3 * dv[c], null),
            a.ha = mt(Sw, [b]),
            a.ha.N("media_source_error", function(e) {
                e = nv("media_source_error", e.detail);
                a.P.dispatchEvent(e)
            }),
            a.Mb = function() {
                var e = a.ha;
                e.B = 1E3 * a.P.currentTime;
                Uw(e)
            }
            ,
            a.P.addEventListener("timeupdate", a.Mb),
            Gx(a, "src", a.ha.j)) : (Hx(a),
            Gx(a, "src", b));
            a.ce || a.P.load()
        }
    }
      , Fx = function(a) {
        a.src && Ix(a, new yx(MediaError.MEDIA_ERR_ABORTED,"Setting demuxed src after src is already set."));
        if (!a.Gb && !a.tb && a.ha)
            Hx(a),
            Gx(a, "src", null),
            a.P.load();
        else if (a.Gb && a.tb) {
            var b = lv(a.Gb)
              , c = lv(a.tb);
            if (c && Nw(c))
                if (b && Nw(b)) {
                    var d = !!c && Nw(c) && !!b && Nw(b);
                    L(K.g(), "umsed", d ? "1" : "0");
                    c = mt(Pw, a.tb, mv(c), -1, null);
                    b = mt(Pw, a.Gb, mv(b), -1, null);
                    a.ha = mt(Sw, [c, b]);
                    a.ha.N("media_source_error", function(e) {
                        e = nv("media_source_error", e.detail);
                        a.P.dispatchEvent(e)
                    });
                    a.Mb = function() {
                        var e = a.ha;
                        e.B = 1E3 * a.P.currentTime;
                        Uw(e)
                    }
                    ;
                    a.P.addEventListener("timeupdate", a.Mb);
                    Gx(a, "src", a.ha.j);
                    a.ce || a.P.load()
                } else
                    Ix(a, new zx('Audio itag "' + b + '" not supported.'));
            else
                Ix(a, new zx('Video itag "' + c + '" not supported.'))
        }
    }
      , Jx = function(a) {
        for (var b = {}, c = q(tx), d = c.next(); !d.done; b = {
            Aa: b.Aa,
            Fc: b.Fc
        },
        d = c.next())
            b.Aa = d.value,
            b.Aa in a.P && ("function" === typeof a.P[b.Aa] ? (b.Fc = a.P[b.Aa].bind(a.P),
            Object.defineProperty(a, b.Aa, {
                set: function(e) {
                    return function(f) {
                        a.P[e.Aa] = f
                    }
                }(b),
                get: function(e) {
                    return function() {
                        return e.Fc
                    }
                }(b)
            })) : Object.defineProperty(a, b.Aa, {
                set: function(e) {
                    return function(f) {
                        a.P[e.Aa] = f
                    }
                }(b),
                get: function(e) {
                    return function() {
                        return a.P[e.Aa]
                    }
                }(b)
            }))
    }
      , Kx = function(a) {
        Object.defineProperty(a, "error", {
            set: function() {},
            get: function() {
                return a.P.error ? a.P.error : a.Cd
            }
        })
    }
      , Lx = function(a) {
        a.P.style.width = nl();
        a.P.style.height = nl()
    };
    Dx.prototype.disconnectedCallback = function() {
        if (this.Pa) {
            var a = fu.get(this.Pa);
            iu(a)
        }
        wx.prototype.disconnectedCallback && wx.prototype.disconnectedCallback.call(this)
    }
    ;
    ea.Object.defineProperties(Dx.prototype, {
        Gb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        tb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    ea.Object.defineProperties(Dx, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return sx
            }
        }
    });
    u.customElements && (u.customElements.get("lima-video") || u.customElements.define("lima-video", Dx));
    function Ox() {
        var a = mt(nw);
        a.initialize().then(function(b) {
            b && (b = nv("initialized"),
            a.dispatchEvent(b))
        });
        return a
    }
    var Qx = function(a, b, c, d, e) {
        E.call(this);
        this.G = a;
        this.h = c;
        this.o = e;
        this.Y = this.T = this.Wb = this.D = this.j = this.qb = 0;
        this.B = [];
        this.J = !1;
        this.Z = this.ga = this.ca = null;
        this.ta = !1;
        this.sb = this.I = this.A = this.Ba = this.Ra = null;
        this.jb = !1;
        this.L = new Q(b.url);
        this.F = b.g;
        this.ka = d;
        (this.O = b.h) || this.L.j.remove("alr");
        L(K.g(), "sl_dv" + this.o, (null !== this.O).toString());
        this.U = !this.O;
        this.g = new XMLHttpRequest;
        this.X = .1;
        if (this.l = pv())
            this.A = Ox(),
            cf(this, this.A);
        Px(this)
    };
    t(Qx, E);
    var Rx = function(a, b) {
        b = nv("media_source_error", b);
        a.G.dispatchEvent(b)
    }
      , Sx = function(a, b) {
        Rx(a, {
            code: 1 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: b
        })
    }
      , Px = function(a) {
        a.ca = function() {
            Tx(a);
            if (a.U) {
                var b = a.g.responseText;
                a.J = !b || b.length < a.F;
                a.T = 0;
                Qh("sl_cc" + a.o + "_" + a.j);
                a.D++;
                Ux(a)
            }
        }
        ;
        a.ga = function() {
            Tx(a)
        }
        ;
        a.Z = function() {
            Qh("sl_ec" + a.o + "_" + a.j);
            Sx(a, "Failed to load chunk " + a.j + " for stream " + a.o)
        }
        ;
        a.g.addEventListener("load", a.ca);
        a.g.addEventListener("progress", a.ga);
        a.g.addEventListener("error", a.Z);
        a.h.addEventListener("updateend", function() {
            a.h.buffered.length && (a.Wb = a.h.buffered.end(0),
            a.l ? a.jb && !a.h.updating && a.j === a.D && (Qh("sl_lc" + a.o),
            a.ka()) : a.J && !a.h.updating && a.j === a.D && (Qh("sl_lc" + a.o),
            a.ka()));
            !a.ta && 1 < a.G.buffered.length && (L(K.g(), "dbr", "1"),
            a.ta = !0)
        });
        a.h.addEventListener("update", function() {
            a.B.length && !a.h.updating && a.h.appendBuffer(a.B.shift())
        });
        a.h.addEventListener("error", function() {
            Qh("msb_err" + a.o);
            Rx(a, {
                code: MediaError.MEDIA_ERR_DECODE,
                message: "Error on SourceBuffer " + a.o
            })
        });
        a.l ? (ow(a.A) ? Vx(a) : a.Ra = Cq(a.A, "initialized", function() {
            Vx(a)
        }),
        a.Ba = Cq(a.A, "get_video_succeeded", function() {
            Ux(a)
        })) : Vx(a)
    }
      , Xx = function(a) {
        Qh("sl_rc" + a.o + "_" + a.j);
        var b = Wx(a);
        a.g.open("get", b);
        a.g.overrideMimeType("text/plain; charset=x-user-defined");
        a.g.send(null);
        a.l && (a.I = null,
        a.sb = b)
    }
      , Tx = function(a) {
        if (400 <= a.g.status)
            Sx(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.j + " for stream " + a.o);
        else {
            if (!a.U) {
                var b = a.g.getResponseHeader("content-type");
                if (b && 0 <= b.indexOf("text/plain")) {
                    a.g.readyState === XMLHttpRequest.DONE && (a.L = new Q(a.g.response),
                    a.j = 0,
                    a.D = 0,
                    a.qb++,
                    Vx(a));
                    return
                }
                a.U = !0;
                Qh("sl_redc" + a.o);
                L(K.g(), "sl_tr" + a.o, a.qb.toString())
            }
            a.L.j.remove("alr");
            if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE)
                b = Yx(a, a.T),
                a.T = a.g.response.length,
                a.Y += b.byteLength,
                Zx(a, b);
            if (a.l && a.g.readyState === XMLHttpRequest.DONE && (b = Yx(a, 0),
            0 < b.byteLength)) {
                var c = a.g.responseText;
                a.jb = !c || c.length < a.F;
                xw(a.A, b, new Q(a.sb), a.jb)
            }
        }
    }
      , Zx = function(a, b) {
        0 < b.byteLength && (a.h.updating || a.B.length ? a.B.push(b) : a.h.appendBuffer(b))
    }
      , Yx = function(a, b) {
        a = a.g.response;
        for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
            c[d] = a.charCodeAt(d + b) & 255;
        return c.buffer
    }
      , Ux = function(a) {
        var b = St;
        -1 !== b && b < a.Y + a.F ? (a.G.pause(),
        St = -1,
        b = !1) : (b = a.D === a.j && !a.h.updating && !a.B.length,
        b = a.l ? !a.jb && b && a.G.currentTime >= a.X : !a.J && b && a.G.currentTime >= a.X);
        b && (a.X = a.Wb + .1,
        Vx(a))
    }
      , Wx = function(a) {
        var b = a.l && a.I ? a.I + 1 : a.j * a.F;
        return Bt(a.L, "range", b + "-" + (b + a.F - 1)).toString()
    }
      , Vx = function(a) {
        if (a.l) {
            var b = new Q(Wx(a));
            vw(a.A, b).then(function(c) {
                c ? (a.I = Number(c.Mh),
                a.jb = c.jb,
                Zx(a, c.video),
                c = nv("get_video_succeeded"),
                a.A.dispatchEvent(c),
                a.D++) : Xx(a);
                a.j++
            })
        } else
            Xx(a),
            a.j++
    };
    Qx.prototype.M = function() {
        this.l && ow(this.A) && this.A.close();
        this.g.removeEventListener("load", this.ca);
        this.g.removeEventListener("progress", this.ga);
        this.g.removeEventListener("error", this.Z);
        Kq(this.Ra);
        Kq(this.Ba);
        E.prototype.M.call(this)
    }
    ;
    var ay = function(a, b) {
        E.call(this);
        var c = this;
        this.l = a;
        this.F = b;
        this.g = new MediaSource;
        this.B = [];
        this.j = [];
        this.h = this.o = null;
        this.A = !1;
        this.D = function() {
            $x(c)
        }
        ;
        this.g.addEventListener("sourceopen", this.D)
    };
    t(ay, E);
    var by = function(a) {
        a.o && a.l.removeEventListener("timeupdate", a.o)
    }
      , $x = function(a) {
        Qh("msmsw_oso");
        a.o = function() {
            if (!a.A)
                for (var e = q(a.j), f = e.next(); !f.done; f = e.next())
                    Ux(f.value)
        }
        ;
        a.l.addEventListener("timeupdate", a.o);
        for (var b = 0; b < a.F.length; b++) {
            var c = a.F[b];
            L(K.g(), "msmsw_mime" + b, c.mimeType);
            L(K.g(), "msmsw_cs" + b, c.g.toString());
            var d = a.g.addSourceBuffer(c.mimeType);
            d ? (a.B.push(d),
            c = mt(Qx, a.l, c, d, function() {
                a: if (!a.A) {
                    for (var e = q(a.j), f = e.next(); !f.done; f = e.next())
                        if (f = f.value,
                        f.l ? !f.jb || f.h.updating || f.B.length : !f.J || f.h.updating || f.B.length)
                            break a;
                    a.g.endOfStream();
                    a.A = !0;
                    by(a)
                }
            }, b),
            a.j.push(c)) : Qh("msmsw_sbf" + b)
        }
        L(K.g(), "msmsw_ns", a.B.length.toString())
    };
    ay.prototype.M = function() {
        this.h && window.URL.revokeObjectURL(this.h);
        for (var a = q(this.j), b = a.next(); !b.done; b = a.next())
            b.value.V();
        by(this);
        this.g.removeEventListener("sourceopen", this.D);
        E.prototype.M.call(this)
    }
    ;
    var cy = function() {
        throw Error("Do not instantiate directly");
    };
    cy.prototype.g = null;
    cy.prototype.getContent = function() {
        return this.content
    }
    ;
    cy.prototype.toString = function() {
        return this.content
    }
    ;
    var dy = function() {
        cy.call(this)
    };
    $a(dy, cy);
    var ey = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(dy);
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var fy = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , gy = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
            8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0),
            c = b & 15,
            b >>= 4,
            a[d] = fy[19 == d ? c & 3 | 8 : c]);
        return a.join("")
    };
    var iy = function(a) {
        Q.call(this, a);
        this.B = new Map;
        a = this.g;
        var b = a.indexOf(";")
          , c = null;
        0 <= b ? (this.g = a.substring(0, b),
        c = a.substring(b + 1)) : this.g = a;
        hy(this, c)
    };
    t(iy, Q);
    iy.prototype.toString = function() {
        return jy(this, Q.prototype.toString.call(this))
    }
    ;
    iy.prototype.D = function() {
        return ""
    }
    ;
    var hy = function(a, b) {
        ib(Wf(b)) || b.split(";").forEach(function(c) {
            var d = c.indexOf("=");
            if (!(0 >= d)) {
                var e = Tf(c.substring(0, d));
                c = Tf(c.substring(d + 1));
                d = a.B.get(e);
                null != d ? d.includes(c) || d.push(c) : d = [Wf(c)];
                a.B.set(e, d)
            }
        }, a)
    }
      , ky = function(a) {
        if (ib(Wf("ord")))
            return null;
        a = a.B.get("ord");
        return null != a ? a : null
    }
      , ly = function(a, b) {
        ib(Wf("ord")) || (b = b.map(Wf),
        a.B.set("ord", b))
    }
      , jy = function(a, b) {
        b = [Wf(b)];
        b.push.apply(b, ia(my(a)));
        return b.join(";")
    }
      , my = function(a) {
        var b = ky(a);
        null == b ? b = [Wf(Date.now())] : ib(Wf("ord")) || a.B.delete("ord");
        var c = [];
        a.B.forEach(function(d, e) {
            d.forEach(function(f) {
                c.push(e + "=" + f)
            })
        });
        c.push("ord=" + b[0]);
        ly(a, b);
        return c
    };
    iy.prototype.F = function() {
        return new iy(this.toString())
    }
    ;
    var V = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        qh: 2002
    };
    V[-1] = "DEPRECATED_ERROR_CODE";
    V[100] = "VAST_MALFORMED_RESPONSE";
    V[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    V[102] = "VAST_UNSUPPORTED_VERSION";
    V[200] = "VAST_TRAFFICKING_ERROR";
    V[201] = "VAST_UNEXPECTED_LINEARITY";
    V[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    V[300] = "VAST_WRAPPER_ERROR";
    V[301] = "VAST_LOAD_TIMEOUT";
    V[302] = "VAST_TOO_MANY_REDIRECTS";
    V[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    V[400] = "VIDEO_PLAY_ERROR";
    V[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    V[403] = "VAST_LINEAR_ASSET_MISMATCH";
    V[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    V[500] = "OVERLAY_AD_PLAYING_FAILED";
    V[501] = "NONLINEAR_DIMENSIONS_ERROR";
    V[502] = "OVERLAY_AD_LOADING_FAILED";
    V[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    V[602] = "COMPANION_REQUIRED_ERROR";
    V[603] = "COMPANION_AD_LOADING_FAILED";
    V[900] = "UNKNOWN_ERROR";
    V[901] = "VPAID_ERROR";
    V[1005] = "FAILED_TO_REQUEST_ADS";
    V[1007] = "VAST_ASSET_NOT_FOUND";
    V[1009] = "VAST_EMPTY_RESPONSE";
    V[1010] = "UNKNOWN_AD_RESPONSE";
    V[1011] = "UNSUPPORTED_LOCALE";
    V[1012] = "ADS_REQUEST_NETWORK_ERROR";
    V[1013] = "INVALID_AD_TAG";
    V[1020] = "STREAM_INITIALIZATION_FAILED";
    V[1021] = "ASSET_FALLBACK_FAILED";
    V[1101] = "INVALID_ARGUMENTS";
    V[1204] = "NATIVE_MESSAGE_ERROR";
    V[1205] = "AUTOPLAY_DISALLOWED";
    V[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    V[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var ny = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    t(ny, Error);
    l = ny.prototype;
    l.getAd = function() {
        return this.ad
    }
    ;
    l.getInnerError = function() {
        return this.g
    }
    ;
    l.getMessage = function() {
        return this.errorMessage
    }
    ;
    l.getErrorCode = function() {
        return this.errorCode
    }
    ;
    l.getVastErrorCode = function() {
        return 1E3 > this.errorCode ? this.errorCode : 900
    }
    ;
    l.getType = function() {
        return this.type
    }
    ;
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    function oy(a) {
        var b = {};
        a = (b["x-afma-token-requester-type"] = a,
        b);
        return (new Su).get({
            url: "https://pubads.g.doubleclick.net/adsid/integrator.json",
            withCredentials: !0,
            timeout: new nu,
            headers: a
        }).then(function(c) {
            return new py(c.newToken || "")
        }).catch(function() {
            return Promise.resolve(qy)
        })
    }
    var ry = function() {
        P.call(this);
        this.g = null;
        this.l = new uu(this);
        cf(this, this.l);
        this.h = new qr(72E5);
        this.j = Promise.resolve(qy)
    };
    t(ry, P);
    var sy = function(a) {
        var b = "requester_type_8";
        b = void 0 === b ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.j = oy(b).then(c);
        a.h = new qr(72E5);
        a.l.N(a.h, "tick", function() {
            a.j = oy(b).then(c)
        });
        a.h.start();
        bf(a, function() {
            a.h.stop()
        })
    };
    ry.prototype.getId = function() {
        var a = this, b;
        return Ia(function(c) {
            if (1 == c.g) {
                if (null != a.g && a.g !== qy) {
                    c.g = 2;
                    return
                }
                b = a;
                return ya(c, a.j, 3)
            }
            2 != c.g && (b.g = c.h);
            return c.return(a.g)
        })
    }
    ;
    var py = function(a) {
        this.id = a
    }
      , qy = new py("");
    var ty = function(a) {
        P.call(this);
        this.l = [];
        this.h = !1;
        this.j = a || "goog_" + Xf++
    };
    t(ty, P);
    ty.prototype.connect = function() {
        for (this.h = !0; 0 !== this.l.length; ) {
            var a = this.l.shift();
            a && this.sendMessage(a.name, a.type, a.data)
        }
    }
    ;
    var uy = function(a, b, c, d) {
        a.h ? a.sendMessage(b, c, d) : a.l.push({
            name: b,
            type: c,
            data: d
        })
    };
    ty.prototype.sendMessage = function() {}
    ;
    var vy = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        mq.call(this, a);
        this.messageType = b;
        this.qa = c;
        this.Ub = d;
        this.origin = e
    };
    t(vy, mq);
    vy.prototype.toString = function() {
        return ""
    }
    ;
    var wy = {
        IMAGE: "Image",
        FLASH: "Flash",
        ALL: "All"
    }
      , yy = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    }
      , zy = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch",
        SELECT_FLUID: "SelectFluid"
    }
      , Ay = function() {
        this.allowCustom = !0;
        this.creativeType = this.resourceType = "All";
        this.sizeCriteria = "SelectExactMatch";
        this.nearMatchPercent = 90;
        this.adSlotIds = []
    };
    w("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", wy);
    w("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", yy);
    w("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", zy);
    var Cy = function(a, b) {
        b = void 0 === b ? new Ay : b;
        this.g = a;
        this.settings = b ? b : new Ay;
        this.resourceType = By(yy, this.settings.resourceType) ? this.settings.resourceType : "All";
        this.creativeType = By(wy, this.settings.creativeType) ? this.settings.creativeType : "All";
        this.sizeCriteria = By(zy, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
        this.adSlotIds = null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
        this.nearMatchPercent = "number" === typeof this.settings.nearMatchPercent && 0 < this.settings.nearMatchPercent && 100 >= this.settings.nearMatchPercent ? this.settings.nearMatchPercent : 90
    }
      , Fy = function(a, b) {
        var c = [];
        b.forEach(function(d) {
            a.settings.allowCustom && (!ib(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && Dy(a, d) ? c.push(d) : (d = Ey(a, d),
            null != d && !ib(d.getContent()) && c.push(d)))
        });
        return c
    };
    Cy.prototype.Od = function() {
        return this.resourceType
    }
    ;
    var Dy = function(a, b) {
        var c;
        if (c = "Flash" !== b.getContentType()) {
            if (c = "All" === a.resourceType || a.resourceType === b.Od())
                c = b.getContentType(),
                c = null == c ? !0 : "All" === a.creativeType || a.creativeType === c;
            c && (c = b.getAdSlotId(),
            c = 0 === a.adSlotIds.length ? !0 : null != c ? a.adSlotIds.includes(c) : !1)
        }
        if (c)
            if (c = b.getSize(),
            (b = !!b.data.fluidSize) || a.g.Ld)
                a = b && a.g.Ld;
            else if ((b = "IgnoreSize" === a.sizeCriteria) || (b = a.g.size,
            b = b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1),
            b)
                a = !0;
            else {
                if (b = "SelectNearMatch" === a.sizeCriteria)
                    b = c.width,
                    c = c.height,
                    b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            }
        else
            a = !1;
        return a
    }
      , Ey = function(a, b) {
        b = Gy(b);
        return null == b ? null : b.find(function(c) {
            return Dy(a, c)
        }) || null
    }
      , By = function(a, b) {
        return null != b && of(a, b)
    };
    var Hy = function(a) {
        var b = {};
        b = (b.IABUSPrivacy_String = "uspString",
        b.IABTCF_gdprApplies = "gdprApplies",
        b.IABTCF_TCString = "tcString",
        b.IABTCF_AddtlConsent = "addtlConsent",
        b);
        for (var c in b)
            null != a[c] && (a[b[c]] = a[c],
            delete a[c]);
        this.Sd = !!a.isGdprLoader;
        c = a.uspString;
        this.uspString = "string" === typeof c ? c : "";
        c = a.gdprApplies;
        this.h = "boolean" === typeof c ? c ? "1" : "0" : "number" !== typeof c || 1 !== c && 0 !== c ? "string" !== typeof c || "1" !== c && "0" !== c ? "" : "1" === c ? "1" : "0" : 1 === c ? "1" : "0";
        c = a.tcString;
        this.g = "string" === typeof c ? c : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g))
    };
    var Iy = function(a) {
        this.g = a
    }
      , Jy = function(a, b) {
        return nf(a.g, b) && (a = a.g[b],
        "boolean" === typeof a) ? a : !1
    }
      , Ky = function(a) {
        if (nf(a.g, "forceExperimentIds")) {
            a = a.g.forceExperimentIds;
            var b = []
              , c = 0;
            Array.isArray(a) && a.forEach(function(d) {
                "number" === typeof d && (b[c++] = d)
            });
            return b
        }
        return null
    };
    var W = function() {
        this.G = "always";
        this.T = 4;
        this.K = null;
        this.l = 1;
        this.g = 0;
        this.j = !0;
        this.locale = "en";
        this.o = null;
        this.h = !1;
        this.X = this.U = "";
        this.B = null;
        this.F = this.H = -1;
        this.Y = this.O = this.A = "";
        this.J = !1;
        this.I = !0;
        this.D = gy();
        this.L = {};
        try {
            this.Z = mk()[0]
        } catch (a) {}
    }
      , Ly = function(a) {
        a = Wf(a);
        ib(a) || (a = a.substring(0, 20));
        return a
    };
    l = W.prototype;
    l.setCompanionBackfill = function(a) {
        this.G = a
    }
    ;
    l.getCompanionBackfill = function() {
        return this.G
    }
    ;
    l.setNumRedirects = function(a) {
        this.T = a
    }
    ;
    l.getNumRedirects = function() {
        return this.T
    }
    ;
    l.setPpid = function(a) {
        this.K = a
    }
    ;
    l.getPpid = function() {
        return this.K
    }
    ;
    l.setVpaidAllowed = function(a) {
        "boolean" === typeof a && (this.l = a ? 1 : 0)
    }
    ;
    l.setVpaidMode = function(a) {
        this.l = a
    }
    ;
    l.cf = function() {
        return this.l
    }
    ;
    l.setAutoPlayAdBreaks = function(a) {
        this.j = a
    }
    ;
    l.rf = function() {
        return this.j
    }
    ;
    l.Kf = function(a) {
        this.h = a
    }
    ;
    l.bf = function() {
        return this.h
    }
    ;
    l.setLocale = function(a) {
        if (a = mu(a))
            this.locale = a
    }
    ;
    l.getLocale = function() {
        return this.locale
    }
    ;
    l.setPlayerType = function(a) {
        this.U = Ly(a)
    }
    ;
    l.getPlayerType = function() {
        return this.U
    }
    ;
    l.setPlayerVersion = function(a) {
        this.X = Ly(a)
    }
    ;
    l.getPlayerVersion = function() {
        return this.X
    }
    ;
    var My = function(a) {
        if (null == a.B) {
            var b = {}
              , c = (new Q(G().location.href)).j;
            if (Gt(c, "tcnfp"))
                try {
                    b = JSON.parse(c.get("tcnfp"))
                } catch (d) {}
            a.B = new Iy(b)
        }
        return a.B
    };
    l = W.prototype;
    l.Lf = function(a) {
        this.H = a
    }
    ;
    l.Mf = function(a) {
        this.F = a
    }
    ;
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.J = a
    }
    ;
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.J
    }
    ;
    l.isCookiesEnabled = function() {
        return this.I
    }
    ;
    l.setCookiesEnabled = function(a) {
        null != a && (this.I = a)
    }
    ;
    l.setSessionId = function(a) {
        this.D = a
    }
    ;
    l.Jf = function() {}
    ;
    l.af = function() {
        return !0
    }
    ;
    l.setFeatureFlags = function(a) {
        this.L = a
    }
    ;
    l.getFeatureFlags = function() {
        return this.L
    }
    ;
    W.prototype.getFeatureFlags = W.prototype.getFeatureFlags;
    W.prototype.setFeatureFlags = W.prototype.setFeatureFlags;
    W.prototype.getDisableFlashAds = W.prototype.af;
    W.prototype.setDisableFlashAds = W.prototype.Jf;
    W.prototype.setSessionId = W.prototype.setSessionId;
    W.prototype.setCookiesEnabled = W.prototype.setCookiesEnabled;
    W.prototype.isCookiesEnabled = W.prototype.isCookiesEnabled;
    W.prototype.getDisableCustomPlaybackForIOS10Plus = W.prototype.getDisableCustomPlaybackForIOS10Plus;
    W.prototype.setDisableCustomPlaybackForIOS10Plus = W.prototype.setDisableCustomPlaybackForIOS10Plus;
    W.prototype.setStreamCorrelator = W.prototype.Mf;
    W.prototype.setPageCorrelator = W.prototype.Lf;
    W.prototype.getPlayerVersion = W.prototype.getPlayerVersion;
    W.prototype.setPlayerVersion = W.prototype.setPlayerVersion;
    W.prototype.getPlayerType = W.prototype.getPlayerType;
    W.prototype.setPlayerType = W.prototype.setPlayerType;
    W.prototype.getLocale = W.prototype.getLocale;
    W.prototype.setLocale = W.prototype.setLocale;
    W.prototype.getIsVpaidAdapter = W.prototype.bf;
    W.prototype.setIsVpaidAdapter = W.prototype.Kf;
    W.prototype.isAutoPlayAdBreaks = W.prototype.rf;
    W.prototype.setAutoPlayAdBreaks = W.prototype.setAutoPlayAdBreaks;
    W.prototype.getVpaidMode = W.prototype.cf;
    W.prototype.setVpaidMode = W.prototype.setVpaidMode;
    W.prototype.setVpaidAllowed = W.prototype.setVpaidAllowed;
    W.prototype.getPpid = W.prototype.getPpid;
    W.prototype.setPpid = W.prototype.setPpid;
    W.prototype.getNumRedirects = W.prototype.getNumRedirects;
    W.prototype.setNumRedirects = W.prototype.setNumRedirects;
    W.prototype.getCompanionBackfill = W.prototype.getCompanionBackfill;
    W.prototype.setCompanionBackfill = W.prototype.setCompanionBackfill;
    var Ny = new W;
    var Oy = function(a) {
        D.call(this, a)
    };
    t(Oy, D);
    var Py = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Qy = function(a, b) {
        b = void 0 === b ? {} : b;
        E.call(this);
        this.h = a;
        this.g = null;
        this.A = {};
        this.B = 0;
        var c;
        this.o = null != (c = b.Ec) ? c : 500;
        var d;
        this.l = null != (d = b.Kh) ? d : !1;
        this.j = null
    };
    t(Qy, E);
    Qy.prototype.M = function() {
        this.A = {};
        this.j && ($e(this.h, "message", this.j),
        delete this.j);
        delete this.A;
        delete this.h;
        delete this.g;
        E.prototype.M.call(this)
    }
    ;
    var Sy = function(a) {
        return "function" === typeof a.h.__tcfapi || null != Ry(a)
    }
      , Vy = function(a, b) {
        var c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.l
        }
          , d = Ve(function() {
            return b(c)
        })
          , e = 0;
        -1 !== a.o && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.o));
        Ty(a, "addEventListener", function(f) {
            f && (c = f,
            c.internalErrorState = Py(c),
            c.internalBlockOnErrors = a.l,
            Uy(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
            Ty(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    };
    Qy.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.l
        }
          , d = Ve(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Py(c),
            c.internalBlockOnErrors = b.l,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Ty(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Qy.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ty(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Ty = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.h.__tcfapi)
            a = a.h.__tcfapi,
            a(b, 2, c, d);
        else if (Ry(a)) {
            Wy(a);
            var e = ++a.B;
            a.A[e] = c;
            a.g && (c = {},
            a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            },
            c), "*"))
        } else
            c({}, !1)
    }
      , Ry = function(a) {
        if (a.g)
            return a.g;
        a.g = Rg(a.h, "__tcfapiLocator");
        return a.g
    }
      , Wy = function(a) {
        a.j || (a.j = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.A[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Ze(a.h, "message", a.j))
    }
      , Uy = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Py(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (jh({
            e: String(a.internalErrorState)
        }, "tcfe"),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    function Xy(a) {
        var b = {};
        (new Q(a)).j.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    var Yy = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? {} : b;
        var c = {};
        a = q(Object.entries(a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = q(d.value);
            d = e.next().value;
            e = e.next().value;
            null != e && (c[d] = String(e))
        }
        this.g = c;
        this.h = new Hy(b)
    }
      , Zy = function(a, b) {
        var c = new Q(a);
        var d = c.g;
        (c = gb(c.h, "googleads.g.doubleclick.net") && ku("/pagead/(live/)?ads", d)) || (d = new iy(a),
        c = d.h,
        d = jy(d, d.g),
        c = !gb(c, ".g.doubleclick.net") && gb(c, "doubleclick.net") && ku("/(ad|pfad)[x|i|j]?/", d));
        c || (c = new Q(a),
        d = c.g,
        c = gb(c.h, "doubleclick.net") && ku("/gampad/(live/)?ads", d));
        (c = c || "bid.g.doubleclick.net" == (new Q(a)).h) || (c = new Q(a),
        d = c.g,
        c = "ad.doubleclick.net" === c.h && ku("/dv3/adv", d));
        c || (c = new Q(a),
        d = c.g,
        "pubads.g.doubleclick.net" === c.h && (ku("/ssai/", d) || ku("/ondemand/", d)));
        return new Yy(Xy(a),b)
    }
      , $y = function(a, b) {
        if (a.g.hasOwnProperty(b))
            return a.g[b]
    }
      , az = function(a) {
        var b = $y(a, "ltd");
        if (!(b = "1" === b || "true" === b)) {
            b = $y(a, "gdpr");
            var c = a.h.h;
            b = ("1" === c || "0" === c ? c : void 0 !== b ? b : "").toLowerCase();
            if ("true" === b || "1" === b)
                if (b = a.h.g,
                a = $y(a, "gdpr_consent"),
                a = b && "tcunavailable" !== b ? b : "tcunavailable" === b ? a || b : a || "",
                "tcunavailable" === a)
                    var d = !1;
                else {
                    if ((b = Zs(a)) && a) {
                        var e = Rd(b, ps, 1);
                        b = Rd(b, js, 2) || new js;
                        c = $d(e, 9);
                        var f = $d(e, 4)
                          , g = $d(e, 5)
                          , h = Zd(e, 10)
                          , k = Zd(e, 11)
                          , m = Yd(C(e, 16), "")
                          , n = Zd(e, 15)
                          , r = {
                            consents: $s(Ld(e, 13, Dd), Ms),
                            legitimateInterests: $s(Ld(e, 14, Dd), Ms)
                        }
                          , v = {
                            consents: $s(Ld(e, 17, Ad)),
                            legitimateInterests: $s(Ld(e, 18, Ad))
                        }
                          , y = $s(Ld(e, 12, Dd), Ns)
                          , B = Td(e, is, 19);
                        e = {};
                        B = q(B);
                        for (var A = B.next(); !A.done; A = B.next()) {
                            A = A.value;
                            var Za = ae(A, 1);
                            e[Za] = e[Za] || {};
                            for (var qa = q(Ld(A, 3, Ad)), la = qa.next(); !la.done; la = qa.next())
                                e[Za][la.value] = ae(A, 2)
                        }
                        a = {
                            tcString: a,
                            tcfPolicyVersion: c,
                            gdprApplies: !0,
                            cmpId: f,
                            cmpVersion: g,
                            isServiceSpecific: h,
                            useNonStandardStacks: k,
                            publisherCC: m,
                            purposeOneTreatment: n,
                            purpose: r,
                            vendor: v,
                            specialFeatureOptins: y,
                            publisher: {
                                restrictions: e,
                                consents: $s(Ld(b, 1, Dd), Ms),
                                legitimateInterests: $s(Ld(b, 2, Dd), Ms),
                                customPurposes: {
                                    consents: $s(Ld(b, 3, Ad)),
                                    legitimateInterests: $s(Ld(b, 4, Ad))
                                }
                            }
                        }
                    } else
                        a = null;
                    if (a) {
                        var Ca = void 0 === Ca ? !1 : Ca;
                        if (Uy(a))
                            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !Ca || "string" !== typeof a.tcString || !a.tcString.length)
                                d = !0;
                            else {
                                d = void 0 === d ? "755" : d;
                                c: {
                                    if (a.publisher && a.publisher.restrictions && (Ca = a.publisher.restrictions["1"],
                                    void 0 !== Ca)) {
                                        Ca = Ca[void 0 === d ? "755" : d];
                                        break c
                                    }
                                    Ca = void 0
                                }
                                0 === Ca ? d = !1 : a.purpose && a.vendor ? (Ca = a.vendor.consents,
                                (d = !(!Ca || !Ca[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? d = !0 : d && (d = a.purpose.consents,
                                d = !(!d || !d["1"]))) : d = !0
                            }
                        else
                            d = !1
                    } else
                        d = !1
                }
            else
                d = !0;
            b = !d
        }
        return b
    }
      , bz = function(a) {
        var b = new Oy;
        a = !az(a);
        Wd(b, 5, a);
        return b
    };
    var cz = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    cz.prototype.getErrorCode = function() {
        return this.errorCode
    }
    ;
    cz.prototype.getMessage = function() {
        return this.message
    }
    ;
    var dz = new cz("Failed to initialize ad playback element before starting ad playback.",400)
      , ez = new cz("The provided {0} information: {1} is invalid.",1101);
    function fz(a, b) {
        var c = void 0 === b ? null : b;
        var d = Ja.apply(2, arguments);
        if (!(c instanceof ny)) {
            var e = a.getErrorCode()
              , f = a.getMessage();
            if (0 < d.length)
                for (var g = 0; g < d.length; g++)
                    f = f.replace(new RegExp("\\{" + g + "\\}","ig"), d[g]);
            d = new ny("adPlayError",f,e);
            d.g = c;
            c = d
        }
        return c
    }
    ;var gz = function() {};
    gz.g = function() {
        throw Error("Must be overridden");
    }
    ;
    var hz = function() {
        this.g = 0
    };
    t(hz, gz);
    hz.gb = void 0;
    hz.g = function() {
        return hz.gb ? hz.gb : hz.gb = new hz
    }
    ;
    function iz(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = hz.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        if (2 === e.g) {
            e = {};
            var f = Object
              , g = f.assign;
            e.c = String(a);
            a = String;
            var h = window;
            if ("number" !== typeof h.goog_pvsid)
                try {
                    var k = Object
                      , m = k.defineProperty
                      , n = void 0;
                    n = void 0 === n ? Math.random : n;
                    var r = Math.floor(n() * Math.pow(2, 52));
                    m.call(k, h, "goog_pvsid", {
                        value: r,
                        configurable: !1
                    })
                } catch (v) {}
            e.pc = a(Number(h.goog_pvsid) || -1);
            e.em = c;
            e.lid = b;
            J(gs);
            jh(g.call(f, {}, (e.eids = "",
            e), d), "esp")
        }
    }
    ;var jz = function() {
        this.cache = {}
    }
      , lz = function() {
        kz || (kz = new jz);
        return kz
    }
      , mz = function(a) {
        var b = C(a, 3);
        if (!b)
            return 3;
        if (void 0 === C(a, 2))
            return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    jz.prototype.get = function(a, b) {
        if (this.cache[a])
            return {
                zb: this.cache[a],
                success: !0
            };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            iz(6, a, null == (d = g) ? void 0 : d.message);
            return {
                zb: null,
                success: !1
            }
        }
        if (!c)
            return {
                zb: null,
                success: !0
            };
        try {
            var e = Pr(c);
            this.cache[a] = e;
            return {
                zb: e,
                success: !0
            }
        } catch (g) {
            var f;
            iz(5, a, null == (f = g) ? void 0 : f.message);
            return {
                zb: null,
                success: !1
            }
        }
    }
    ;
    jz.prototype.set = function(a, b) {
        var c = C(a, 1)
          , d = "_GESPSK-" + c;
        Id(a, 3, Date.now());
        try {
            b.setItem(d, ne(a))
        } catch (f) {
            var e;
            iz(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    }
    ;
    jz.prototype.remove = function(a, b) {
        a = C(a, 1);
        try {
            b.removeItem("_GESPSK-" + a),
            delete this.cache[a]
        } catch (d) {
            var c;
            iz(8, a, null == (c = d) ? void 0 : c.message)
        }
    }
    ;
    var kz = null;
    var nz = function() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function() {
            var b = et.g
              , c = et.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
    };
    function oz(a) {
        return J(nz).h(a.g, a.defaultValue)
    }
    ;var pz = function(a) {
        E.call(this);
        this.l = a;
        this.g = [];
        this.h = [];
        this.j = [];
        this.o = []
    };
    t(pz, E);
    var qz = function(a, b) {
        a.h.push({
            Xb: !1,
            Ha: b
        });
        oz(ct) && b.Hc(a.l)
    };
    pz.prototype.M = function() {
        this.g.length = 0;
        this.j.length = 0;
        if (oz(ct))
            for (var a = q(this.h), b = a.next(); !b.done; b = a.next())
                b.value.Ha.ac.length = 0;
        this.h.length = 0;
        this.o.length = 0;
        E.prototype.M.call(this)
    }
    ;
    var rz = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        }
        )
    };
    var sz = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, sz.prototype);
        this.name = "InputError"
    };
    t(sz, Error);
    var tz = function() {
        this.Xa = !1
    }
      , uz = function() {
        tz.apply(this, arguments);
        this.ac = [];
        this.zc = new rz
    };
    t(uz, tz);
    var wz = function(a, b) {
        a.Xa || (a.Xa = !0,
        a.Nb = b,
        a.zc.resolve(b),
        oz(ct) && vz(a))
    }
      , vz = function(a) {
        for (var b = q(a.ac), c = b.next(); !c.done; c = b.next())
            c = c.value,
            c(a.Nb);
        a.ac.length = 0
    };
    uz.prototype.Hc = function(a) {
        oz(ct) && this.ac.push(a)
    }
    ;
    ea.Object.defineProperties(uz.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.zc.promise
            }
        },
        Pb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Xa
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.bd
            }
        }
    });
    var xz = function() {
        uz.apply(this, arguments)
    };
    t(xz, uz);
    var yz = function(a, b) {
        wz(a, b)
    }
      , zz = function(a, b) {
        b.then(function(c) {
            wz(a, c)
        })
    };
    xz.prototype.Oa = function(a) {
        this.Xa || (this.Xa = !0,
        this.Nb = null,
        this.bd = a,
        this.zc.reject(a),
        oz(ct) && vz(this))
    }
    ;
    var Az = function(a) {
        this.Xa = !1;
        this.g = a
    };
    t(Az, tz);
    Az.prototype.Pb = function() {
        return this.g.Xa
    }
    ;
    ea.Object.defineProperties(Az.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.bd
            }
        }
    });
    var Bz = function(a) {
        Az.call(this, a);
        this.g = a
    };
    t(Bz, Az);
    ea.Object.defineProperties(Bz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.Nb
            }
        }
    });
    var Cz = function(a) {
        Az.call(this, a);
        this.g = a
    };
    t(Cz, Az);
    ea.Object.defineProperties(Cz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.g.Nb) ? a : null
            }
        }
    });
    var Dz = function() {
        uz.apply(this, arguments)
    };
    t(Dz, uz);
    Dz.prototype.notify = function() {
        wz(this, null)
    }
    ;
    function Ez(a, b, c) {
        var d, e, f, g, h;
        return Ia(function(k) {
            if (1 == k.g)
                return d = c ? a.filter(function(m) {
                    return !m.Xb
                }) : a,
                ya(k, Promise.all(d.map(function(m) {
                    return m.Ha.promise
                })), 2);
            if (a.length === d.length)
                return k.return();
            e = a.filter(function(m) {
                return m.Xb
            });
            if (oz(dt)) {
                f = q(b);
                for (g = f.next(); !g.done; g = f.next())
                    h = g.value,
                    h.g();
                return ya(k, Promise.all(e.map(function(m) {
                    return m.Ha.promise
                })), 0)
            }
            return ya(k, Promise.race([Promise.all(e.map(function(m) {
                return m.Ha.promise
            })), new Promise(function(m) {
                return void setTimeout(m, c)
            }
            )]), 0)
        })
    }
    var Gz = function(a, b) {
        E.call(this);
        var c = this;
        this.id = a;
        this.Ec = b;
        this.F = this.D = this.B = this.o = !1;
        this.g = new pz(function() {
            Fz(c)
        }
        );
        cf(this, this.g)
    };
    t(Gz, E);
    Gz.prototype.start = function() {
        var a = this, b;
        return Ia(function(c) {
            switch (c.g) {
            case 1:
                if (a.o)
                    return c.return();
                a.o = !0;
                c.j = 2;
                return ya(c, Ez(a.g.h, a.g.o, a.Ec), 4);
            case 4:
                if (a.va()) {
                    c.g = 5;
                    break
                }
                for (var d = 0, e = q(a.g.j), f = e.next(); !f.done; f = e.next()) {
                    if (null == f.value.g.Nb)
                        throw Error("missing input: " + a.id + "/" + d);
                    ++d
                }
                return ya(c, a.h(), 5);
            case 5:
                za(c);
                break;
            case 2:
                b = Aa(c);
                if (a.va())
                    return c.return();
                !(b instanceof sz) && b instanceof Error && (a.l(a.id, b),
                a.g.g.length && Hz(a, new sz(b.message)));
                c.g = 0
            }
        })
    }
    ;
    var Fz = function(a) {
        if (!a.o && a.B)
            try {
                var b = a.g.h, c = a.Ec ? b.filter(function(k) {
                    return !k.Xb
                }) : b, d = b.filter(function(k) {
                    return k.Xb
                }), e, f = null == (e = b.find(function(k) {
                    return void 0 !== k.Ha.error
                })) ? void 0 : e.Ha.error;
                if (f)
                    throw a.o = !0,
                    f;
                if (!c.some(function(k) {
                    return !k.Ha.Pb
                })) {
                    if (d.length)
                        if (oz(dt)) {
                            for (var g = q(a.g.o), h = g.next(); !h.done; h = g.next())
                                h.value.g();
                            if (d.some(function(k) {
                                return !k.Ha.Pb
                            }))
                                return
                        } else if (a.D || (a.D = !0,
                        setTimeout(function() {
                            a.F = !0;
                            Fz(a)
                        }, a.Ec)),
                        d.some(function(k) {
                            return !k.Ha.Pb
                        }) && !a.F)
                            return;
                    a.o = !0;
                    a.h()
                }
            } catch (k) {
                !(a.va() || k instanceof sz) && k instanceof Error && (a.l(a.id, k),
                a.g.g.length && Hz(a, new sz(k.message)))
            }
    }
      , Iz = function(a) {
        var b = new xz;
        a.g.g.push(b);
        return b
    }
      , Jz = function(a) {
        var b = new Dz;
        a.g.g.push(b);
        return b
    }
      , Kz = function(a, b) {
        qz(a.g, b);
        b = new Bz(b);
        a.g.j.push(b);
        return b
    }
      , Lz = function(a, b) {
        qz(a.g, b);
        return new Cz(b)
    }
      , Hz = function(a, b) {
        a = q(a.g.g);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value,
            !c.Pb) {
                var d = b;
                c.Xa = !0;
                c.bd = d;
                c.zc.reject(d);
                oz(ct) && vz(c)
            }
    };
    var Mz = function(a, b) {
        Gz.call(this, a);
        this.id = a;
        this.l = b
    };
    t(Mz, Gz);
    function Nz() {
        var a = window;
        var b = void 0 === b ? function() {}
        : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                $e(a, "load", d)
            };
            Ze(a, "load", d)
        }
        )
    }
    ;function Oz(a) {
        var b = new Xr;
        if (a) {
            var c = []
              , d = RegExp("^_GESPSK-(.+)$");
            try {
                for (var e = 0; e < a.length; e++) {
                    var f = (d.exec(a.key(e)) || [])[1];
                    f && c.push(f)
                }
            } catch (k) {}
            c = q(c);
            for (d = c.next(); !d.done; d = c.next())
                if (d = d.value,
                f = lz().get(d, a).zb)
                    if (e = mz(f),
                    2 !== e && 3 !== e) {
                        Wd(f, 9, !1);
                        e = C(f, 2);
                        var g = Nr
                          , h = z(b.ba);
                        yd(h);
                        h = Sd(b, g, 2, 2, h);
                        f = null != f ? f : new g;
                        h.push(f);
                        z(f.ba) & 2 && od(h, 8);
                        f = {};
                        iz(19, d, null, (f.hs = e ? "1" : "0",
                        f))
                    }
        }
        if (!Td(b, Nr, 2).length)
            return null;
        iz(50, "");
        return Fc(b.A(), 3)
    }
    ;var Pz = {};
    var Qz = function(a, b, c, d) {
        Mz.call(this, 1041, d);
        this.storage = b;
        this.A = Kz(this, a);
        c && (this.j = Lz(this, c))
    };
    t(Qz, Mz);
    Qz.prototype.h = function() {
        var a = this.A.value, b, c, d = null != (c = this.storage) ? c : null == (b = this.j) ? void 0 : b.value;
        d && lz().set(a, d) && null != C(a, 2) && iz(27, C(a, 1))
    }
    ;
    var Rz = function(a, b) {
        Mz.call(this, 1094, b);
        this.j = Jz(this);
        this.A = Kz(this, a)
    };
    t(Rz, Mz);
    Rz.prototype.h = function() {
        var a = this.A.value;
        if (a) {
            if (void 0 !== a)
                for (var b = q(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value,
                    c.startsWith("_GESPSK"))
                        try {
                            a.removeItem(c)
                        } catch (d) {}
            kz = new jz;
            this.j.notify()
        }
    }
    ;
    var Sz = function(a, b) {
        Mz.call(this, 1048, b);
        this.j = Iz(this);
        this.A = Iz(this);
        this.G = Kz(this, a)
    };
    t(Sz, Mz);
    Sz.prototype.h = function() {
        var a = this.G.value
          , b = function(c) {
            var d = {};
            iz(c, C(a, 1), null, (d.tic = String(Math.round((Date.now() - C(a, 3)) / 6E4)),
            d))
        };
        switch (mz(a)) {
        case 0:
            b(24);
            break;
        case 1:
            b(25);
            wz(this.A, a);
            break;
        case 2:
            b(26);
            wz(this.j, a);
            break;
        case 3:
            iz(9, C(a, 1));
            wz(this.j, a);
            break;
        case 4:
            b(23),
            wz(this.j, a)
        }
    }
    ;
    var Tz = function(a, b, c) {
        Mz.call(this, 1027, c);
        this.cc = a;
        this.storage = b;
        this.j = Iz(this);
        this.A = Iz(this)
    };
    t(Tz, Mz);
    Tz.prototype.h = function() {
        var a = lz().get(this.cc, this.storage).zb;
        if (!a) {
            a = Or(this.cc);
            a = Id(a, 3, Date.now());
            var b = a.Oa(Lr(100));
            wz(this.A, b)
        }
        wz(this.j, a)
    }
    ;
    var Uz = function(a, b, c) {
        Mz.call(this, 1046, c);
        Jz(this);
        this.j = Iz(this);
        this.A = Kz(this, b);
        qz(this.g, a)
    };
    t(Uz, Mz);
    Uz.prototype.h = function() {
        wz(this.j, this.A.value)
    }
    ;
    var Vz = function(a, b, c) {
        Mz.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = Iz(this);
        this.A = Iz(this);
        this.G = Iz(this);
        this.I = Kz(this, b)
    };
    t(Vz, Mz);
    Vz.prototype.h = function() {
        var a = this
          , b = this.I.value
          , c = C(b, 1);
        iz(18, c);
        try {
            var d = sh();
            this.collectorFunction().then(function(e) {
                iz(29, c, null, {
                    delta: String(sh() - d)
                });
                var f = Id(b, 2, e);
                wz(a.j, f);
                wz(a.G, null != e ? e : null)
            }).catch(function(e) {
                iz(28, c, Wz(e));
                e = b.Oa(Lr(106));
                wz(a.A, e)
            })
        } catch (e) {
            iz(1, c, Wz(e)),
            yz(this.A, b.Oa(Lr(107)))
        }
    }
    ;
    function Wz(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    }
    ;var Xz = function(a, b) {
        Mz.call(this, 1028, b);
        this.j = Iz(this);
        this.A = Kz(this, a)
    };
    t(Xz, Mz);
    Xz.prototype.h = function() {
        var a = this.A.value
          , b = C(a, 1);
        null != C(a, 3) || iz(35, b);
        wz(this.j, a)
    }
    ;
    var Yz = function(a, b, c, d, e) {
        Mz.call(this, 1050, e);
        this.I = c;
        this.G = d;
        this.j = Iz(this);
        this.A = Kz(this, a);
        this.J = Lz(this, b)
    };
    t(Yz, Mz);
    Yz.prototype.h = function() {
        var a = this.A.value
          , b = C(a, 1)
          , c = this.J.value;
        if (null == c)
            iz(41, b),
            a.Oa(Lr(111)),
            wz(this.j, a);
        else if ("string" !== typeof c)
            iz(21, b),
            a = a.Oa(Lr(113)),
            wz(this.j, a);
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.G : this.I)) {
                var d = {};
                iz(12, b, null, (d.sl = String(c.length),
                d));
                b = a.Oa(Lr(108));
                Id(b, 2, void 0, !1)
            } else
                c.length || iz(20, b),
                Id(a, 10, void 0, !1);
            wz(this.j, a)
        }
    }
    ;
    var Zz = function(a) {
        Mz.call(this, 1046, a);
        this.j = Jz(this)
    };
    t(Zz, Mz);
    Zz.prototype.h = function() {
        var a = this;
        Nz().then(function() {
            return a.j.notify()
        })
    }
    ;
    var $z = function() {
        E.apply(this, arguments);
        this.o = [];
        this.A = [];
        this.l = {};
        this.g = [];
        this.h = new rz;
        this.j = {}
    };
    t($z, E);
    var aA = function(a, b) {
        cf(a, b);
        a.o.push(b)
    }
      , bA = function(a, b) {
        b = q(b);
        for (var c = b.next(); !c.done; c = b.next())
            aA(a, c.value)
    }
      , cA = function(a) {
        var b, c, d, e, f, g, h, k, m, n, r, v;
        Ia(function(y) {
            switch (y.g) {
            case 1:
                if (!a.g.length) {
                    y.g = 2;
                    break
                }
                return ya(y, Promise.all(a.g.map(function(B) {
                    return B.h.promise
                })), 2);
            case 2:
                b = q(a.o);
                for (c = b.next(); !c.done; c = b.next())
                    d = c.value,
                    oz(ct) ? (d.B = !0,
                    Fz(d)) : d.start();
                e = q(a.A);
                for (f = e.next(); !f.done; f = e.next())
                    g = f.value,
                    cA(g);
                if (!a.j) {
                    y.g = 4;
                    break
                }
                h = Object.keys(a.j);
                if (!h.length) {
                    y.g = 4;
                    break
                }
                return ya(y, Promise.all(Object.values(a.j).map(function(B) {
                    return B.promise
                })), 6);
            case 6:
                for (k = y.h,
                m = 0,
                n = q(h),
                r = n.next(); !r.done; r = n.next())
                    v = r.value,
                    a.l[v] = k[m++];
            case 4:
                return a.h.resolve(a.l),
                y.return(a.h.promise)
            }
        })
    };
    $z.prototype.M = function() {
        E.prototype.M.call(this);
        this.o.length = 0;
        this.A.length = 0;
        this.g.length = 0
    }
    ;
    function dA(a, b, c, d, e) {
        var f, g, h, k, m, n, r, v, y, B, A, Za, qa;
        return Ia(function(la) {
            return 1 == la.g ? (f = new $z,
            g = new Tz(a,c,e),
            aA(f, g),
            aA(f, new Qz(g.A,void 0,d,e)),
            h = new Xz(g.j,e),
            aA(f, h),
            k = new Sz(h.j,e),
            aA(f, k),
            m = new Vz(b,k.j,e),
            aA(f, m),
            aA(f, new Qz(m.A,void 0,d,e)),
            n = new Yz(m.j,m.G,300,1E3,e),
            aA(f, n),
            aA(f, new Qz(n.j,void 0,d,e)),
            r = new Zz(e),
            aA(f, r),
            v = new Uz(r.j,k.A,e),
            aA(f, v),
            y = new Vz(b,v.j,e),
            aA(f, y),
            B = new Qz(y.j,void 0,d,e),
            aA(f, B),
            cA(f),
            qa = a,
            ya(la, n.j.promise, 2)) : la.return({
                id: qa,
                collectorGeneratedData: null != (Za = null == (A = la.h) ? void 0 : C(A, 2)) ? Za : null
            })
        })
    }
    ;var eA = function(a, b, c, d) {
        Mz.call(this, 1059, d);
        this.I = b;
        this.G = c;
        this.j = Iz(this);
        this.J = Kz(this, a);
        this.A = Lz(this, c)
    };
    t(eA, Mz);
    eA.prototype.h = function() {
        var a = this.A.value;
        if (a) {
            var b = this.J.value, c = b.id, d = b.collectorFunction, e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            iz(42, b, null, (c.ea = String(Number(this.I)),
            c));
            zz(this.j, dA(b, d, a, this.G, this.l))
        }
    }
    ;
    var fA = function(a, b) {
        Mz.call(this, 1057, b);
        this.j = a;
        this.A = Iz(this);
        this.G = Iz(this)
    };
    t(fA, Mz);
    fA.prototype.h = function() {
        if (this.j)
            if ("object" !== typeof this.j)
                iz(46, "UNKNOWN_COLLECTOR_ID"),
                gA(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id
                  , b = this.j.networkCode;
                a && b && (delete this.j.id,
                iz(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {},
                iz(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a),
                b)),
                gA(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (iz(14, a),
                gA(this, a, 105)) : J(nz).g(gt.g, gt.defaultValue).includes(a) ? (iz(22, a),
                gA(this, a, 104)) : wz(this.G, this.j)
            }
        else
            iz(39, "UNKNOWN_COLLECTOR_ID"),
            gA(this, "UNKNOWN_COLLECTOR_ID", 110)
    }
    ;
    var gA = function(a, b, c) {
        b = Or(b).Oa(Lr(c));
        wz(a.A, b)
    };
    var hA = function(a, b, c, d) {
        var e = document;
        e = void 0 === e ? document : e;
        d = void 0 === d ? Pz : d;
        this.g = b;
        this.H = c;
        this.j = e;
        this.B = d;
        this.A = [];
        this.l = [];
        this.o = [];
        this.h = 0;
        a = q(a);
        for (b = a.next(); !b.done; b = a.next())
            this.push(b.value)
    };
    hA.prototype.push = function(a) {
        var b = this
          , c = function(f, g) {
            return void iA(b, f, g)
        };
        a = new fA(a,c);
        var d = new Qz(a.A,void 0,this.g,c);
        c = new eA(a.G,this.H,this.g,c,this.B);
        var e = new $z;
        bA(e, [a, d, c]);
        cA(e);
        a = c.j.promise;
        this.A.push(a);
        d = q(this.l);
        for (c = d.next(); !c.done; c = d.next())
            a.then(c.value)
    }
    ;
    hA.prototype.addOnSignalResolveCallback = function(a) {
        this.l.push(a);
        for (var b = q(this.A), c = b.next(); !c.done; c = b.next())
            c.value.then(a)
    }
    ;
    hA.prototype.addErrorHandler = function(a) {
        this.o.push(a)
    }
    ;
    hA.prototype.clearAllCache = function() {
        var a = this
          , b = this.j.currentScript instanceof HTMLScriptElement ? this.j.currentScript.src : "";
        if (1 === this.h) {
            var c = {};
            iz(49, "", null, (c.url = b,
            c))
        } else if (c = String(Ng(null != b ? b : "")),
        J(nz).g(ft.g, ft.defaultValue).includes(c))
            c = {},
            iz(48, "", null, (c.url = b,
            c));
        else {
            var d = new $z;
            c = new Rz(this.g,function(e, f) {
                return void iA(a, e, f)
            }
            );
            aA(d, c);
            cA(d);
            this.h = 1;
            setTimeout(function() {
                a.h = 0
            }, 1E3 * J(nz).j());
            d = {};
            iz(43, "", null, (d.url = b,
            d));
            return c.j.promise
        }
    }
    ;
    var iA = function(a, b, c) {
        a = q(a.o);
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value,
            d(b, c)
    }
      , jA = function(a) {
        this.push = function(b) {
            a.push(b)
        }
        ;
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        }
        ;
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
        ;
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    function kA(a, b, c, d) {
        if (void 0 === a[b] || a[b]instanceof Array)
            return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }
    function lA(a, b, c, d, e, f) {
        var g, h = new hA(null != (g = a[b]) ? g : [],c,"secureSignalProviders" === b,d);
        a[b] = new jA(h);
        f && h.addOnSignalResolveCallback(f);
        h.addErrorHandler(e)
    }
    function mA(a, b, c, d) {
        var e = void 0 === e ? Pz : e;
        var f = new xz;
        wz(f, b);
        b = e;
        b = void 0 === b ? Pz : b;
        e = Lg();
        var g = window;
        g = Ig(g.top) ? g.top : null;
        e !== g ? iz(16, "") : kA(a, "encryptedSignalProviders", c, d) && kA(a, "secureSignalProviders", c, d) || (iz(38, ""),
        lA(a, "encryptedSignalProviders", f, b, c, d),
        lA(a, "secureSignalProviders", f, b, c, d))
    }
    function nA(a, b, c, d) {
        var e = new Map;
        b = b.map(function(f) {
            var g = f.cc;
            return new Promise(function(h) {
                e.set(g, h)
            }
            )
        });
        mA(a, c, d, function(f) {
            var g = f.collectorGeneratedData;
            f = f.id;
            var h;
            return void (null == (h = e.get(f)) ? void 0 : h({
                collectorGeneratedData: g,
                id: f
            }))
        });
        return b
    }
    ;function oA() {
        var a;
        return null != (a = u.googletag) ? a : u.googletag = {
            cmd: []
        }
    }
    ;function pA(a) {
        if (!a || az(a))
            return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }
    function qA(a, b) {
        (a = pA(a)) && mA(oA(), a, function() {}, b)
    }
    function rA(a, b) {
        return (b = pA(b)) && 0 !== a.length ? nA(oA(), a, b, function() {}) : null
    }
    ;var X = {}
      , sA = (X.creativeView = "creativeview",
    X.start = "start",
    X.midpoint = "midpoint",
    X.firstQuartile = "firstquartile",
    X.thirdQuartile = "thirdquartile",
    X.complete = "complete",
    X.mute = "mute",
    X.unmute = "unmute",
    X.pause = "pause",
    X.rewind = "rewind",
    X.resume = "resume",
    X.fullscreen = "fullscreen",
    X.exitFullscreen = "exitfullscreen",
    X.expand = "expand",
    X.collapse = "collapse",
    X.close = "close",
    X.acceptInvitation = "acceptinvitation",
    X.adCanPlay = "adCanPlay",
    X.adStarted = "adStarted",
    X.abandon = "abandon",
    X.acceptInvitationLinear = "acceptinvitationlinear",
    X.engagedView = "engagedview",
    X.instreamAdComplete = "instreamAdComplete",
    X.skipShown = "skipshown",
    X.skippableStateChanged = "skippableStateChanged",
    X.skip = "skip",
    X.progress = "progress",
    X.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP",
    X.annotation_start = "annotation_start",
    X.annotation_click = "annotation_click",
    X.annotation_close = "annotation_close",
    X.cta_annotation_shown = "cta_annotation_shown",
    X.cta_annotation_clicked = "cta_annotation_clicked",
    X.cta_annotation_closed = "cta_annotation_closed",
    X.replay = "replay",
    X.stop = "stop",
    X.autoplayDisallowed = "autoplayDisallowed",
    X.error = "error",
    X.mediaLoadTimeout = "mediaLoadTimeout",
    X.linearChanged = "linearChanged",
    X.click = "click",
    X.contentPauseRequested = "contentPauseRequested",
    X.contentResumeRequested = "contentResumeRequested",
    X.discardAdBreak = "discardAdBreak",
    X.updateAdsRenderingSettings = "updateAdsRenderingSettings",
    X.durationChange = "durationChange",
    X.expandedChanged = "expandedChanged",
    X.autoClose = "autoClose",
    X.userClose = "userClose",
    X.userRecall = "userRecall",
    X.prefetched = "prefetched",
    X.loaded = "loaded",
    X.init = "init",
    X.allAdsCompleted = "allAdsCompleted",
    X.adMetadata = "adMetadata",
    X.adBreakReady = "adBreakReady",
    X.adBreakFetchError = "adBreakFetchError",
    X.log = "log",
    X.volumeChange = "volumeChange",
    X.companionBackfill = "companionBackfill",
    X.companionInitialized = "companionInitialized",
    X.companionImpression = "companionImpression",
    X.companionClick = "companionClick",
    X.impression = "impression",
    X.interaction = "interaction",
    X.adProgress = "adProgress",
    X.adBuffering = "adBuffering",
    X.trackingUrlPinged = "trackingUrlPinged",
    X.measurable_impression = "measurable_impression",
    X.custom_metric_viewable = "custom_metric_viewable",
    X.viewable_impression = "viewable_impression",
    X.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression",
    X.audio_audible = "audio_audible",
    X.audio_measurable = "audio_measurable",
    X.overlay_resize = "overlay_resize",
    X.overlay_unmeasurable_impression = "overlay_unmeasurable_impression",
    X.overlay_unviewable_impression = "overlay_unviewable_impression",
    X.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression",
    X.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression",
    X.externalActivityEvent = "externalActivityEvent",
    X.adEvent = "adEvent",
    X.configure = "configure",
    X.remainingTime = "remainingTime",
    X.destroy = "destroy",
    X.resize = "resize",
    X.volume = "volume",
    X.authorIconClicked = "videoAuthorIconClicked",
    X.authorNameClicked = "videoAuthorClicked",
    X.videoClicked = "videoClicked",
    X.videoIconClicked = "videoIconClicked",
    X.learnMoreClicked = "videoLearnMoreClicked",
    X.muteClicked = "videoMuteClicked",
    X.titleClicked = "videoTitleClicked",
    X.videoSkipClicked = "SKIPPED",
    X.unmuteClicked = "videoUnmuteClicked",
    X.vpaidEvent = "vpaidEvent",
    X.show_ad = "show_ad",
    X.video_card_endcap_collapse = "video_card_endcap_collapse",
    X.video_card_endcap_dismiss = "video_card_endcap_dismiss",
    X.video_card_endcap_impression = "video_card_endcap_impression",
    X.mediaUrlPinged = "mediaUrlPinged",
    X.breakStart = "breakstart",
    X.breakEnd = "breakend",
    X.omidReady = "omidReady",
    X.omidUnavailable = "omidUnavailable",
    X.omidAdSessionCompleted = "omidAdSessionCompleted",
    X.omidAdSessionAbandoned = "omidAdSessionAbandoned",
    X.verificationNotExecuted = "verificationNotExecuted",
    X.loadStart = "loadStart",
    X.seeked = "seeked",
    X.seeking = "seeking",
    X);
    var tA = function(a) {
        D.call(this, a)
    };
    t(tA, D);
    tA.prototype.getVersion = function() {
        return Yd(C(this, 2), "")
    }
    ;
    var uA = function(a) {
        D.call(this, a)
    };
    t(uA, D);
    var vA = function(a, b) {
        return Id(a, 2, b)
    }
      , wA = function(a, b) {
        return Id(a, 3, b)
    }
      , xA = function(a, b) {
        return Id(a, 4, b)
    }
      , yA = function(a, b) {
        return Id(a, 5, b)
    }
      , zA = function(a, b) {
        return Id(a, 9, b)
    }
      , AA = function(a, b) {
        return Vd(a, 10, b)
    }
      , BA = function(a, b) {
        return Wd(a, 11, b)
    }
      , CA = function(a, b) {
        return Id(a, 1, b)
    }
      , DA = function(a, b) {
        return Wd(a, 7, b)
    };
    uA.wa = [10, 6];
    var EA = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function FA(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function GA(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function HA() {
        var a = window;
        if (!GA(a))
            return null;
        var b = FA(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(EA).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function IA(a) {
        var b;
        return BA(AA(yA(vA(CA(xA(DA(zA(wA(new uA, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new tA;
            d = Id(d, 1, c.brand);
            return Id(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }
    function JA() {
        var a, b;
        return null != (b = null == (a = HA()) ? void 0 : a.then(function(c) {
            return IA(c)
        })) ? b : null
    }
    ;var LA = function() {
        new Yy;
        gy();
        this.deviceId = "";
        this.g = this.referrer = null;
        KA(this)
    }
      , MA = function() {
        LA.g();
        var a = "h.3.578.0";
        Ny.h && (a += "/vpaid_adapter");
        return a
    }
      , KA = function(a) {
        var b = JA();
        b && b.then(function(c) {
            if (null == c)
                c = null;
            else {
                c = ne(c);
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    255 < g && (d[e++] = g & 255,
                    g >>= 8);
                    d[e++] = g
                }
                c = Fc(d, 3)
            }
            a.g = c
        })
    };
    LA.g = function() {
        return J(LA)
    }
    ;
    var OA = function(a) {
        a = void 0 === a ? !1 : a;
        var b = My(Ny);
        if (b && Jy(b, "forceCustomPlayback") || Ny.h)
            return !0;
        if ((mc || Xt()) && a)
            return !1;
        a = a && (mc || Xt() || Yt(10)) && Ny.getDisableCustomPlaybackForIOS10Plus();
        return (lc || nc) && !a || kc && (!kc || !Wt(Vt, 4)) || NA() ? !0 : !1
    }
      , PA = function(a) {
        return null === a ? !1 : Ny.h ? !0 : oc || mc || Xt() ? Zt(a) ? mc || Xt() || Yt(10) && Ny.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : kc && (!kc || !Wt(Vt, 4)) || NA() ? !0 : !1
    }
      , QA = function() {
        var a = My(Ny);
        return a && Jy(a, "disableOnScreenDetection") ? !1 : !El()
    }
      , NA = function() {
        return 1 === RA() || 2 === RA()
    }
      , RA = function() {
        return (LA.g(),
        LA.g(),
        "tvos" === (LA.g(),
        null)) ? 1 : Fl() ? 2 : 0
    };
    var SA = function(a, b) {
        return 0 == a.indexOf(b) ? a.substr(b.length) : null
    };
    function TA() {
        var a = G()
          , b = document;
        return new Q(a.parent === a ? a.location.href : b.referrer)
    }
    function UA(a, b) {
        Bt(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (0 >= c)
                return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c; )
                d = b.slice(0, f--),
                e = encodeURIComponent(d);
            Bt(a, "url", d)
        } catch (g) {}
        return a.toString()
    }
    ;var VA = new function() {
        this.g = new Map;
        this.j = 0;
        this.h = null != window.fetch
    }
    ;
    function WA(a) {
        var b = void 0 === b ? VA : b;
        var c = void 0 === c ? null : c;
        a = new pu(a,c ? c : c);
        var d = void 0 === d ? !1 : d;
        var e = void 0 === e ? !1 : e;
        null != a.g || e ? $u(b, a.url, d, e, a.g) : $u(b, a.url, d)
    }
    ;var XA = function() {
        this.h = .01 > Math.random();
        this.g = Math.floor(4503599627370496 * Math.random())
    };
    XA.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == u.G_testRunner && (this.h || (void 0 === c ? 0 : c))) {
            b.lid = a;
            b.sdkv = MA();
            a = ji().sort().join(",");
            ib(Wf(a)) || (b.e = a);
            b = YA(this, b);
            var d = new Q("http://pagead2.googlesyndication.com/pagead/gen_204");
            ff(b, function(e, f) {
                Bt(d, f, null == e ? "" : "boolean" === typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = TA();
            nt(d, b.o);
            b = d.toString();
            a = d.j.get("url");
            null != a && yb() && 2083 < b.length && (b = UA(d, a));
            WA(b)
        }
    }
    ;
    var YA = function(a, b) {
        b.id = "ima_html5";
        var c = TA();
        b.c = a.g;
        b.domain = c.h;
        return b
    };
    XA.g = function() {
        return J(XA)
    }
    ;
    function Th(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }
    function ZA(a, b) {
        return b && 0 == b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/),
        new RegExp(a[1],a[2] || "")) : b
    }
    var $A = function(a, b) {
        ty.call(this, b);
        this.A = a;
        this.g = null;
        this.B = new uu(this);
        this.B.N(G(), "message", this.D)
    };
    t($A, ty);
    var aB = function(a) {
        if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0))
            return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, ZA)
        } catch (b) {
            return null
        }
    };
    $A.prototype.sendMessage = function(a, b, c) {
        if (null != this.g && null != this.g.postMessage) {
            var d = this.g
              , e = d.postMessage
              , f = {};
            f.name = a;
            f.type = b;
            null != c && (f.data = c);
            f.sid = this.j;
            f.channel = this.A;
            a = [];
            Vh(new Uh, f, a);
            e.call(d, "ima://" + a.join(""), "*")
        }
        null != this.g && null == this.g.postMessage && XA.g().report(11)
    }
    ;
    $A.prototype.M = function() {
        af(this.B);
        this.g = null;
        ty.prototype.M.call(this)
    }
    ;
    $A.prototype.D = function(a) {
        a = a.g;
        var b = aB(a.data);
        if (bB(this, b)) {
            if (null == this.g)
                this.g = a.source,
                this.h || this.connect();
            else if (this.g != a.source)
                return;
            bB(this, b) && this.dispatchEvent(new vy(b.name,b.type,b.data || {},b.sid,a.origin))
        }
    }
    ;
    var bB = function(a, b) {
        if (null == b)
            return !1;
        var c = b.channel;
        if (null == c || c != a.A)
            return !1;
        b = b.sid;
        return null == b || "*" != a.j && b != a.j ? !1 : !0
    };
    var cB = function() {
        P.call(this);
        this.F = !1;
        this.g = null;
        this.A = this.D = this.J = !1;
        this.h = 0;
        this.l = [];
        this.B = !1;
        this.O = this.L = Infinity;
        this.j = 0;
        this.G = {};
        this.I = new uu(this);
        cf(this, this.I)
    };
    t(cB, P);
    var eB = function(a, b) {
        null == b || a.F || (a.g = b,
        dB(a),
        a.F = !0)
    }
      , gB = function(a) {
        null != a.g && a.F && (fB(a),
        a.F = !1,
        a.D = !1,
        a.A = !1,
        a.h = 0,
        a.l = [],
        a.B = !1)
    }
      , dB = function(a) {
        fB(a);
        !(a.g instanceof P) && "ontouchstart"in document.documentElement && oc ? (a.G = {
            touchstart: function(b) {
                a.D = !0;
                a.h = b.touches.length;
                a.j && (window.clearTimeout(a.j),
                a.j = 0,
                a.J = !0);
                a.B = hB(a, b.touches) || 1 !== b.touches.length;
                a.B ? (a.L = Infinity,
                a.O = Infinity) : (a.L = b.touches[0].clientX,
                a.O = b.touches[0].clientY);
                b = b.touches;
                a.l = [];
                for (var c = 0; c < b.length; c++)
                    a.l.push(b[c].identifier)
            },
            touchmove: function(b) {
                a.h = b.touches.length;
                if (!Yt(8) || Math.pow(b.changedTouches[0].clientX - a.L, 2) + Math.pow(b.changedTouches[0].clientY - a.O, 2) > Math.pow(5, 2))
                    a.A = !0
            },
            touchend: function(b) {
                return void iB(a, b)
            }
        },
        ff(a.G, function(b, c) {
            a.g.addEventListener(c, b, !1)
        })) : a.I.N(a.g, "click", a.T)
    }
      , fB = function(a) {
        a.I.nb(a.g, "click", a.T);
        ff(a.G, function(b, c) {
            this.g.removeEventListener(c, b, !1)
        }, a);
        a.G = {}
    }
      , iB = function(a, b) {
        !a.D || 1 !== a.h || a.A || a.J || a.B || !hB(a, b.changedTouches) || (a.j = window.setTimeout(function() {
            return void jB(a)
        }, 300));
        a.h = b.touches.length;
        0 === a.h && (a.D = !1,
        a.A = !1,
        a.l = []);
        a.J = !1
    };
    cB.prototype.T = function() {
        jB(this)
    }
    ;
    var hB = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a.l.includes(b[c].identifier))
                return !0;
        return !1
    }
      , jB = function(a) {
        a.j = 0;
        a.dispatchEvent(new mq("click"))
    };
    cB.prototype.M = function() {
        gB(this);
        P.prototype.M.call(this)
    }
    ;
    var kB = function(a, b, c) {
        this.h = c;
        0 === b.length && (b = [[]]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length; ) {
                var h = d[f++];
                if (128 > h)
                    e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                } else if (239 < h && 365 > h) {
                    k = d[f++];
                    var m = d[f++]
                      , n = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (m & 63) << 6 | n & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else
                    k = d[f++],
                    m = d[f++],
                    e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | m & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    kB.prototype.match = function(a) {
        var b = this;
        return a ? this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.578.0" === c[1] || 2 <= c.length && "3.578.0" === c[2] ? !0 : !1
        }) : !1
    }
    ;
    var lB = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47]
      , mB = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47]
      , nB = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47]
      , oB = [[105, 109, 97, 51, 92, 46, 106, 115], [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115], [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]]
      , pB = [[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]]
      , qB = [[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115], [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]]
      , rB = new kB(lB,oB,!1);
    new kB(lB,pB,!0);
    var sB = new kB(mB,oB,!1);
    new kB(mB,pB,!0);
    var tB = new kB([104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47],oB,!1)
      , uB = new kB([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47],[],!1);
    new kB(lB,[[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]],!0);
    var vB = new kB(lB,qB,!1)
      , wB = new kB(lB,qB,!1);
    new kB(nB,[[112, 97, 108, 46, 106, 115]],!1);
    new kB(nB,[[99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]],!1);
    function xB(a, b) {
        for (var c = {}, d = 0; d < b.length; c = {
            Rb: c.Rb
        },
        d++)
            if (c.Rb = b[d],
            a.some(function(e) {
                return function(f) {
                    return f.match(e.Rb.src)
                }
            }(c)))
                return c.Rb;
        return null
    }
    ;var yB = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var zB = Bf(Se(new Re(Pe,"https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js")))
      , AB = Bf(Se(new Re(Pe,"https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js")))
      , BB = Bf(Se(new Re(Pe,"https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js")));
    var EB = function(a, b) {
        CB ? a.srcdoc = b : (a = a.contentWindow) && DB(a.document, b)
    }
      , CB = ic && "srcdoc"in kg(document, "IFRAME")
      , DB = function(a, b) {
        a.open("text/html", "replace");
        Eg(a, Pf(b));
        a.close()
    };
    function FB(a) {
        return (a = qg(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }
    function GB(a, b) {
        var c = mg("IFRAME", {
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = zB;
        fi(Zi) ? a = AB : fi($i) && (a = BB);
        a = "<script src=" + a.fb() + ">\x3c/script>";
        b && (a += "\n      <script>\n        window.addEventListener('message', function(e) {\n          if (e.data.type === 'innerBridgeIframeLoaded') {\n            window.frameElement.parentElement\n              .querySelector('#" + b + "').contentWindow\n              .postMessage({type: 'omidIframeLoaded'}, '*');\n          }\n        });\n      \x3c/script>\n    ");
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                FB(c) ? d(c) : e()
            })
        }
        );
        EB(c, a);
        return b
    }
    ;var HB = function(a, b) {
        P.call(this);
        this.h = b;
        this.g = FB(a)
    };
    t(HB, P);
    var JB = function(a) {
        try {
            a.g && a.g.registerSessionObserver(function(b) {
                "sessionStart" === b.type ? IB(a, a.h) : "sessionFinish" === b.type && JB(a)
            })
        } catch (b) {
            a.dispatchEvent(new Event("error"))
        }
    }
      , IB = function(a, b) {
        b instanceof Dx && (b = b.P);
        try {
            a.g && a.g.setVideoElement(b)
        } catch (c) {
            a.dispatchEvent(new Event("error"))
        }
    };
    var KB = function(a) {
        this.data = a
    };
    l = KB.prototype;
    l.getTotalAds = function() {
        return this.data.totalAds
    }
    ;
    l.getMaxDuration = function() {
        return this.data.maxDuration
    }
    ;
    l.getAdPosition = function() {
        return this.data.adPosition
    }
    ;
    l.getPodIndex = function() {
        return this.data.podIndex
    }
    ;
    l.getTimeOffset = function() {
        return this.data.timeOffset
    }
    ;
    l.getIsBumper = function() {
        return this.data.isBumper
    }
    ;
    KB.prototype.getIsBumper = KB.prototype.getIsBumper;
    KB.prototype.getTimeOffset = KB.prototype.getTimeOffset;
    KB.prototype.getPodIndex = KB.prototype.getPodIndex;
    KB.prototype.getAdPosition = KB.prototype.getAdPosition;
    KB.prototype.getMaxDuration = KB.prototype.getMaxDuration;
    KB.prototype.getTotalAds = KB.prototype.getTotalAds;
    var LB = function(a) {
        this.data = a
    };
    l = LB.prototype;
    l.getContent = function() {
        return this.data.content
    }
    ;
    l.getContentType = function() {
        return this.data.contentType
    }
    ;
    l.getWidth = function() {
        return this.getSize().width
    }
    ;
    l.getHeight = function() {
        return this.getSize().height
    }
    ;
    l.getAdSlotId = function() {
        return this.data.adSlotId
    }
    ;
    l.getSize = function() {
        return this.data.size
    }
    ;
    l.Od = function() {
        return this.data.resourceType
    }
    ;
    var Gy = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new LB(b)
        }) : []
    };
    LB.prototype.getAdSlotId = LB.prototype.getAdSlotId;
    LB.prototype.getHeight = LB.prototype.getHeight;
    LB.prototype.getWidth = LB.prototype.getWidth;
    LB.prototype.getContentType = LB.prototype.getContentType;
    LB.prototype.getContent = LB.prototype.getContent;
    var MB = function(a, b) {
        this.h = a;
        this.g = b
    };
    MB.prototype.getAdIdValue = function() {
        return this.h
    }
    ;
    MB.prototype.getAdIdRegistry = function() {
        return this.g
    }
    ;
    MB.prototype.getAdIdRegistry = MB.prototype.getAdIdRegistry;
    MB.prototype.getAdIdValue = MB.prototype.getAdIdValue;
    var Y = function(a) {
        this.data = a
    };
    Y.prototype.getAdId = function() {
        return this.data.adId
    }
    ;
    Y.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    }
    ;
    Y.prototype.getCreativeId = function() {
        return this.data.creativeId
    }
    ;
    var NB = function(a) {
        return a.data.adQueryId
    };
    l = Y.prototype;
    l.getAdSystem = function() {
        return this.data.adSystem
    }
    ;
    l.getAdvertiserName = function() {
        return this.data.advertiserName
    }
    ;
    l.getApiFramework = function() {
        return this.data.apiFramework
    }
    ;
    l.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    }
    ;
    l.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    }
    ;
    l.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    }
    ;
    l.isLinear = function() {
        return this.data.linear
    }
    ;
    l.isSkippable = function() {
        return this.data.skippable
    }
    ;
    l.getContentType = function() {
        return this.data.contentType
    }
    ;
    l.getDescription = function() {
        return this.data.description
    }
    ;
    l.getTitle = function() {
        return this.data.title
    }
    ;
    l.getDuration = function() {
        return this.data.duration
    }
    ;
    l.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    }
    ;
    l.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    }
    ;
    l.getWidth = function() {
        return this.data.width
    }
    ;
    l.getHeight = function() {
        return this.data.height
    }
    ;
    l.getUiElements = function() {
        return this.data.uiElements
    }
    ;
    l.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    }
    ;
    l.getAdPodInfo = function() {
        return new KB(this.data.adPodInfo)
    }
    ;
    l.getCompanionAds = function(a, b, c) {
        if (!this.data.companions)
            return [];
        var d = this.data.companions.map(function(e) {
            return new LB(e)
        });
        return Fy(new Cy({
            size: new F(a,b),
            Ld: c ? "SelectFluid" === c.sizeCriteria : !1
        },c), d)
    }
    ;
    l.getTraffickingParameters = function() {
        return lu(Wf(this.data.traffickingParameters))
    }
    ;
    l.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    }
    ;
    l.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    }
    ;
    l.getMediaUrl = function() {
        return this.data.mediaUrl
    }
    ;
    l.getSurveyUrl = function() {
        return this.data.surveyUrl
    }
    ;
    l.getDealId = function() {
        return this.data.dealId
    }
    ;
    l.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new MB(a.adIdValue,a.adIdRegistry)
        })
    }
    ;
    l.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    }
    ;
    l.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    }
    ;
    l.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    }
    ;
    l.Td = function() {
        return this.data.disableUi
    }
    ;
    Y.prototype.isUiDisabled = Y.prototype.Td;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.getTitle;
    Y.prototype.getDescription = Y.prototype.getDescription;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var OB = function(a) {
        this.g = a
    };
    OB.prototype.getCuePoints = function() {
        return this.g
    }
    ;
    OB.prototype.getCuePoints = OB.prototype.getCuePoints;
    var PB = function() {
        this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
        this.autoAlign = this.useVideoAdUi = !0;
        this.bitrate = -1;
        this.enablePreloading = !1;
        this.loadVideoTimeout = 8E3;
        this.mimeTypes = null;
        this.playAdsAfterTime = -1;
        this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.uiElements = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = !1
    }
      , QB = function(a, b) {
        var c = {};
        Object.assign(c, a);
        b && (c.disableClickThrough = !0);
        return c
    };
    PB.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            null != b && (this.autoAlign = b);
            b = ag(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && 0 !== b.length && (this.mimeTypes = b);
            b = ag(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = ag(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
        }
    }
    ;
    w("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var RB = null
      , SB = function() {
        P.call(this);
        this.g = null;
        this.h = new Map;
        this.l = new Map;
        this.j = this.D = !1;
        this.A = null;
        this.B = new uu(this);
        cf(this, this.B)
    };
    t(SB, P);
    var TB = function() {
        null == RB && (RB = new SB);
        return RB
    }
      , dq = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && uy(a.g, "activityMonitor", "viewabilityMeasurement", d)
    };
    SB.prototype.destroy = function() {
        this.B.nb(this.g, "activityMonitor", this.F);
        this.j = !1;
        this.h.clear()
    }
    ;
    SB.prototype.M = function() {
        this.destroy();
        P.prototype.M.call(this)
    }
    ;
    SB.prototype.init = function(a) {
        if (!this.j) {
            if (this.g = a || null)
                this.B.N(this.g, "activityMonitor", this.F),
                UB(this);
            if (!(u.ima && u.ima.video && u.ima.video.client && u.ima.video.client.tagged)) {
                w("ima.video.client.sdkTag", !0);
                var b = u.document;
                a = kg(document, "SCRIPT");
                var c = Bf(Se(new Re(Pe,"https://s0.2mdn.net/instream/video/client.js")));
                Dg(a, c);
                a.async = !0;
                a.type = "text/javascript";
                a.src= "patch/js/null.js?";
                console.log("--fx--a--", a);
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            Oj();
            J(Up).I = Ny.g;
            this.D = !0;
            J(Up).o = !0;
            this.A = null;
            a = J(Up);
            b = "h" == Fp(a) || "b" == Fp(a);
            c = !(N(),
            !1);
            b && c && (a.D = !0,
            a.G = new Zn);
            this.j = !0
        }
    }
    ;
    var WB = function(a) {
        if (null == a)
            return !1;
        if ((lc || nc) && null !== a.webkitDisplayingFullscreen)
            return a.webkitDisplayingFullscreen;
        a = VB(a);
        var b = window.screen.availHeight || window.screen.height;
        return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
    }
      , VB = function(a) {
        var b = {
            left: a.offsetLeft,
            top: a.offsetTop,
            width: a.offsetWidth,
            height: a.offsetHeight
        };
        try {
            "function" === typeof a.getBoundingClientRect && pg(cg(a), a) && (b = a.getBoundingClientRect())
        } catch (c) {}
        return b
    }
      , XB = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        if (a.j) {
            d && null == e.opt_osdId && (e.opt_osdId = d);
            if (a.A)
                return a.A(b, c, e);
            if (a = d ? a.l.get(d) : Ny.o)
                null == e.opt_fullscreen && (e.opt_fullscreen = WB(a)),
                null == e.opt_adElement && (e.opt_adElement = a);
            return hs.kb(469, Xa(gq, b, c, e)) || {}
        }
        return {}
    }
      , YB = function(a) {
        var b;
        0 !== Ny.g ? b = J(Up).o : b = a.D;
        return b
    }
      , ZB = function(a, b) {
        var c = String(Math.floor(1E9 * Math.random()));
        a.l.set(c, b);
        if (fi(hj))
            try {
                Jr(function(d) {
                    if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        uy(a.g, "activityMonitor", "engagementData", e)
                    }
                }, function() {
                    return b
                })
            } catch (d) {}
        0 !== Ny.g && eq(J(Up), c, a);
        return c
    }
      , $B = function(a, b, c) {
        if (c)
            a.h.get(c) === b && a.h.delete(c);
        else {
            var d = [];
            a.h.forEach(function(e, f) {
                e === b && d.push(f)
            });
            d.forEach(a.h.delete, a.h)
        }
    }
      , $p = function(a, b) {
        a = a.h.get(b);
        return "function" === typeof a ? a() : {}
    }
      , UB = function(a) {
        if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
            var b = {};
            b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
            var c;
            null == (c = a.g) || uy(c, "activityMonitor", "pageSignals", b)
        }
    };
    SB.prototype.F = function(a) {
        var b = a.qa
          , c = b.queryId
          , d = {}
          , e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
        case "getPageSignals":
            UB(this);
            break;
        case "reportVastEvent":
            e = b.vastEvent;
            a = b.osdId;
            var f = {};
            f.opt_fullscreen = b.isFullscreen;
            b.isOverlay && (f.opt_bounds = b.overlayBounds);
            d.viewabilityData = XB(this, e, c, a, f);
            var g;
            null == (g = this.g) || uy(g, "activityMonitor", "viewability", d);
            break;
        case "fetchAdTagUrl":
            c = {},
            c.eventId = b.eventId,
            a = b.osdId,
            nf(b, "isFullscreen") && (e = b.isFullscreen),
            nf(b, "loggingId") && (b = b.loggingId,
            c.loggingId = b,
            XA.g().report(43, {
                step: "beforeLookup",
                logid: b,
                time: Date.now()
            })),
            c.engagementString = aC(this, a, e),
            this.g && uy(this.g, "activityMonitor", "engagement", c)
        }
    }
    ;
    var aC = function(a, b, c) {
        var d, e = b ? null != (d = a.l.get(b)) ? d : null : Ny.o;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = Ir(function() {
                return e
            }, a)
        } catch (f) {
            c = f,
            c = "sdktle;" + Uf(c.name, 12) + ";" + Uf(c.message, 40)
        }
        return c
    };
    w("ima.common.getVideoMetadata", function(a) {
        return $p(TB(), a)
    });
    w("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        dq(TB(), a, b)
    });
    var bC = function(a) {
        this.g = a;
        this.j = "";
        this.h = -1;
        this.o = !1
    }
      , dC = function(a, b) {
        if (0 <= a.h) {
            var c = null == b ? function() {}
            : b
              , d = function() {
                cC(a, c);
                a.g.removeEventListener("loadedmetadata", d, !1)
            };
            a.g.addEventListener("loadedmetadata", d, !1);
            a.g.src = a.j;
            a.g.load()
        } else
            null != b && b()
    }
      , cC = function(a, b) {
        var c = 0 < a.g.seekable.length;
        a.o ? c ? (a.g.currentTime = a.h,
        eC(a),
        b()) : setTimeout(function() {
            return void cC(a, b)
        }, 100) : (eC(a),
        b())
    }
      , eC = function(a) {
        a.h = -1;
        a.j = "";
        a.o = !1
    };
    var fC = new F(5,5)
      , gC = function(a) {
        P.call(this);
        this.g = a;
        this.Z = null;
        this.A = new bC(a);
        this.h = new uu(this);
        cf(this, this.h);
        this.l = 0;
        this.I = this.D = this.L = this.Y = this.G = !1;
        this.J = this.j = null;
        this.T = new F(this.g.offsetWidth,this.g.offsetHeight);
        this.Pa = null;
        this.U = WB(this.g);
        this.X = !1
    };
    t(gC, P);
    l = gC.prototype;
    l.wd = function() {
        var a = this.A;
        a.j = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    }
    ;
    l.Vb = function(a) {
        dC(this.A, a)
    }
    ;
    l.load = function(a, b) {
        var c = K.g().g;
        c.U = !0;
        Fh(c);
        Qh("hvd_lc");
        hC(this);
        this.L = !1;
        if (b)
            if (Qh("hvd_ad"),
            b instanceof lt) {
                if (Qh("hvd_mad"),
                c = b.getMediaUrl()) {
                    Qh("hvd_admu");
                    Qh("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof kt) {
                Qh("hvd_dad");
                c = b.o;
                var d = b.h
                  , e = b.j
                  , f = b.g
                  , g = b.Za
                  , h = b.Ta;
                if (c && d && e && f && g && h && (Qh("hvd_addu"),
                b.ya)) {
                    Qh("hvd_admse");
                    b = e + '; codecs="' + g + '"';
                    f = f + '; codecs="' + h + '"';
                    if (Mw() && Mw() && MediaSource.isTypeSupported(b) && Mw() && MediaSource.isTypeSupported(f)) {
                        Qh("hvd_ymse");
                        Qh("hvd_mse");
                        a = !1;
                        try {
                            -1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                        } catch (k) {}
                        u.customElements ? a ? a = !0 : (fi(ij) && XA.g().report(153, {
                            limvid: "vd"
                        }),
                        a = fi(ij) || fi(cj) || fi(gj) || fi(fj) || fi(dj) || fi(ej) || fi(aj) || fi(bj) ? !0 : !1) : a = !1;
                        if (a && this.g instanceof Dx)
                            a = this.g,
                            a.tb = c,
                            a.Gb = d;
                        else {
                            this.Z = new ay(this.g,[new Pw(c,b,35E4,new Lw), new Pw(d,f,82E3,new Lw)]);
                            cf(this, this.Z);
                            c = this.g;
                            d = this.Z;
                            if (!d.h) {
                                a = d.g;
                                if ("undefined" !== typeof MediaSource && a instanceof MediaSource)
                                    a = Hf(URL.createObjectURL(a));
                                else {
                                    b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
                                    if (2 !== (null == b ? void 0 : b.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1])))
                                        throw Error("");
                                    a = Hf(URL.createObjectURL(a))
                                }
                                d.h = a.toString()
                            }
                            d = d.h;
                            c.src = d
                        }
                        this.g.load();
                        return
                    }
                    Qh("hvd_nmse")
                }
            } else
                Qh("hvd_uad");
        a ? (Qh("hvd_src"),
        this.g.src = a) : Qh("hvd_vn");
        this.g.load()
    }
    ;
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = 0 == a ? !0 : !1
    }
    ;
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    }
    ;
    var iC = function(a) {
        a.X = !1;
        a.L || yb() ? (a.I = !1,
        a.j = a.g.play(),
        null != a.j && (a.J = null,
        a.j.then(function() {
            a.j = null;
            a.Vd(a.J);
            a.J = null
        }).catch(function(b) {
            a.j = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.ca()
        }))) : a.I = !0
    };
    gC.prototype.pause = function() {
        null == this.j && (this.X = !0,
        this.g.pause())
    }
    ;
    gC.prototype.getCurrentTime = function() {
        return this.g.currentTime
    }
    ;
    gC.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    }
    ;
    gC.prototype.M = function() {
        if (this.Pa) {
            var a = fu.get(this.Pa);
            iu(a)
        }
        jC(this);
        P.prototype.M.call(this)
    }
    ;
    var jC = function(a) {
        null != a.B && (gB(a.B),
        a.B = null);
        null != a.O && a.O.V();
        yu(a.h);
        hC(a)
    }
      , hC = function(a) {
        a.Y = !1;
        a.D = !1;
        a.G = !1;
        a.I = !1;
        a.l = 0;
        a.j = null;
        a.J = null;
        af(a.F)
    };
    gC.prototype.qb = function(a) {
        this.dispatchEvent(a.type)
    }
    ;
    var lC = function(a) {
        if (!a.D) {
            a.D = !0;
            a.dispatchEvent("start");
            try {
                if (fi(ij) && u.customElements) {
                    var b = u.customElements.get("lima-video");
                    a.g instanceof b ? XA.g().report(153, {
                        limvid: "limastart"
                    }) : XA.g().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (c) {
                XA.g().report(153, {
                    limvid: "startfail"
                })
            }
            b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
            b = void 0 === b ? !1 : b;
            (mc || Xt() || Yt(10)) && (b || (LA.g(),
            1)) || (LA.g(),
            lb(sb(), "Xbox")) || (lc || nc ? 0 : (!kc || kc && Wt(Vt, 4)) && (El() ? (LA.g(),
            !1) : !NA())) || !kc || kc && Wt(Vt, 3) || (lc || nc) && !Yt(4) || kC(a)
        }
    };
    l = gC.prototype;
    l.yf = function() {
        this.L = !0;
        this.I && iC(this);
        this.I = !1;
        mC(this)
    }
    ;
    l.zf = function() {
        this.Y || (this.Y = !0,
        this.dispatchEvent("loaded"))
    }
    ;
    l.Vd = function(a) {
        null != this.j ? this.J = a : (this.dispatchEvent("play"),
        oc || mc || Xt() || Ac || lC(this))
    }
    ;
    l.Cf = function(a) {
        if (!this.D && (oc || mc || Xt() || Ac)) {
            if (0 >= this.getCurrentTime())
                return;
            if (Ac && this.g.ended && 1 == this.getDuration()) {
                this.ca(a);
                return
            }
            lC(this)
        }
        if (oc || lb(sb(), "Nintendo WiiU")) {
            if (1.5 < this.getCurrentTime() - this.l) {
                this.G = !0;
                this.g.currentTime = this.l;
                return
            }
            this.G = !1;
            this.getCurrentTime() > this.l && (this.l = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    }
    ;
    l.Df = function() {
        this.dispatchEvent("volumeChange")
    }
    ;
    l.Bf = function() {
        if (this.D && oc && !this.X && (2 > nC(this) || this.G)) {
            this.F = new qr(250);
            this.h.N(this.F, "tick", this.ta);
            this.F.start();
            var a = !0
        } else
            a = !1;
        a || this.j || this.dispatchEvent("pause")
    }
    ;
    l.xf = function() {
        var a = !0;
        if (oc || lb(sb(), "Nintendo WiiU"))
            a = this.l >= this.g.duration - 1.5;
        !this.G && a && this.dispatchEvent("end")
    }
    ;
    var kC = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    gC.prototype.ka = function() {
        this.dispatchEvent("endFullscreen")
    }
    ;
    gC.prototype.ca = function() {
        this.dispatchEvent("error")
    }
    ;
    gC.prototype.Ba = function() {
        this.dispatchEvent("click")
    }
    ;
    var mC = function(a) {
        a.g instanceof HTMLElement && (a.Pa = ju(a.g, fC),
        a.Pa.then(function(b) {
            a.va() || L(K.g(), "ps", b.width + "x" + b.height)
        }))
    };
    gC.prototype.Ra = function() {
        var a = new F(this.g.offsetWidth,this.g.offsetHeight)
          , b = WB(this.g);
        if (a.width != this.T.width || a.height != this.T.height)
            !this.U && b ? kC(this) : this.U && !b && this.ka(),
            this.T = a,
            this.U = b
    }
    ;
    gC.prototype.ta = function() {
        if (!this.g.ended && this.g.paused && (oc || Bc ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime
              , b = nC(this);
            0 < b && (2 <= b || 2 > a) && (af(this.F),
            iC(this))
        } else
            af(this.F)
    }
    ;
    var nC = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b; ) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    gC.prototype.sb = function() {
        XA.g().report(139);
        kC(this)
    }
    ;
    var pC = function(a, b, c, d) {
        E.call(this);
        this.A = a;
        this.l = b;
        this.j = c;
        this.B = d;
        this.o = !1;
        a = new uu(this);
        cf(this, a);
        this.g = this.h = null;
        oC(this)
    };
    t(pC, E);
    var rC = function(a) {
        a.o = !0;
        qC(a)
    }
      , oC = function(a) {
        GB(a.A, a.B).then(function(b) {
            return void sC(a, b)
        }).catch(function() {
            return void tC(a)
        })
    }
      , qC = function(a) {
        a.h && a.o && qg(a.h).postMessage({
            type: "innerBridgeIframeLoaded"
        }, "*")
    }
      , sC = function(a, b) {
        a.h = b;
        a.g = new HB(b,a.j);
        a.g.N("error", function() {
            return void tC(a)
        });
        JB(a.g);
        qC(a)
    }
      , tC = function(a) {
        uy(a.l, "omid", "iframeFailed");
        a.V()
    };
    pC.prototype.M = function() {
        this.h && (ng(this.h),
        this.h = null);
        E.prototype.M.call(this)
    }
    ;
    var uC = function(a, b, c, d) {
        E.call(this);
        this.o = a;
        this.j = b;
        this.g = c;
        this.B = d;
        this.h = new uu(this);
        cf(this, this.h);
        this.h.N(this.o, d, this.A)
    };
    t(uC, E);
    var wC = function(a, b) {
        var c = b.qa;
        switch (b.messageType) {
        case "showVideo":
            a = a.j;
            null != a.h && vC(a.h.g, !0);
            break;
        case "hide":
            a = a.j;
            null != a.h && vC(a.h.g, !1);
            break;
        case "resizeAndPositionVideo":
            b = c.resizeAndPositionVideo;
            a = a.j.g;
            b = new Wg(b.x,b.y,b.width,b.height);
            a.g.style.left = String(b.left) + "px";
            a.g.style.top = String(b.top) + "px";
            a.g.style.width = String(b.width) + "px";
            a.g.style.height = String(b.height) + "px";
            break;
        case "restoreSizeAndPositionVideo":
            a = a.j.g,
            a.g.style.width = "100%",
            a.g.style.height = "100%",
            a.g.style.left = "0",
            a.g.style.right = "0"
        }
    };
    uC.prototype.A = function(a) {
        var b = a.qa;
        switch (a.messageType) {
        case "activate":
            a = this.j;
            var c = this.g;
            a.g != c && a.h && a.A && a.o && (c.setVolume(a.g.getVolume()),
            c = a.g,
            a.g = a.o,
            a.o = c,
            c = a.h,
            a.h = a.A,
            a.A = c,
            vC(a.A.g, !1),
            null != (c = a.K.D) && (a = a.g.A.g,
            c.j = a,
            c.g && (c = c.g,
            c.h = a,
            IB(c, a))));
            break;
        case "startTracking":
            a = this.g;
            c = this.l;
            this.h.N(a, kf(bv), c);
            this.h.N(a, yB, c);
            a = this.g;
            jC(a);
            a.h.N(a.g, yB, a.qb);
            a.h.N(a.g, "ended", a.xf);
            a.h.N(a.g, "webkitbeginfullscreen", a.sb);
            a.h.N(a.g, "webkitendfullscreen", a.ka);
            a.h.N(a.g, "loadedmetadata", a.yf);
            a.h.N(a.g, "pause", a.Bf);
            a.h.N(a.g, "playing", a.Vd);
            a.h.N(a.g, "timeupdate", a.Cf);
            a.h.N(a.g, "volumechange", a.Df);
            a.h.N(a.g, "error", a.ca);
            a.h.N(a.g, Ac || oc && !Yt(8) ? "loadeddata" : "canplay", a.zf);
            a.B = new cB;
            a.h.N(a.B, "click", a.Ba);
            eB(a.B, a.g);
            a.O = new qr(1E3);
            a.h.N(a.O, "tick", a.Ra);
            a.O.start();
            break;
        case "stopTracking":
            a = this.g;
            c = this.l;
            this.h.nb(a, kf(bv), c);
            this.h.nb(a, yB, c);
            jC(this.g);
            break;
        case "exitFullscreen":
            a = this.g;
            (lc || nc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
            break;
        case "play":
            iC(this.g);
            break;
        case "pause":
            this.g.pause();
            break;
        case "load":
            a = this.g;
            c = b.videoUrl;
            var d = b.muxedMediaUrl
              , e = b.muxedMimeType
              , f = b.muxedAudioCodec
              , g = b.muxedVideoCodec
              , h = b.demuxedAudioUrl
              , k = b.demuxedVideoUrl
              , m = b.demuxedAudioMimeType
              , n = b.demuxedVideoMimeType
              , r = b.demuxedAudioCodec
              , v = b.demuxedVideoCodec;
            b = b.mseCompatible;
            var y = null;
            k && h && b && n && m && v && r && (y = new kt({
                Xf: k,
                Qe: h,
                Xh: null,
                Hh: null,
                Wf: n,
                Pe: m,
                Za: v,
                Ta: r,
                height: null,
                width: null,
                ya: b,
                Vh: null,
                Gh: null
            }));
            h = null;
            d && e && g && f && (h = new lt({
                wf: d,
                Ph: null,
                mimeType: e,
                Za: g,
                Ta: f,
                height: null,
                width: null,
                ya: b,
                Lh: null
            }));
            y ? a.load(c, y) : h ? a.load(c, h) : a.load(c, null);
            break;
        case "unload":
            a = this.g;
            hC(a);
            a.L = !1;
            "removeAttribute"in a.g ? a.g.removeAttribute("src") : a.g.src = "";
            a.g.load();
            break;
        case "setCurrentTime":
            this.g.g.currentTime = b.currentTime;
            break;
        case "setVolume":
            this.g.setVolume(b.volume)
        }
    }
    ;
    uC.prototype.l = function(a) {
        var b = {};
        switch (a.type) {
        case "autoplayDisallowed":
            a = "autoplayDisallowed";
            break;
        case "beginFullscreen":
            a = "fullscreen";
            break;
        case "endFullscreen":
            a = "exitFullscreen";
            break;
        case "click":
            a = "click";
            break;
        case "end":
            a = "end";
            break;
        case "error":
            a = "error";
            break;
        case "loaded":
            a = "loaded";
            break;
        case "mediaLoadTimeout":
            a = "mediaLoadTimeout";
            break;
        case "pause":
            a = "pause";
            b.ended = this.g.g.ended;
            break;
        case "play":
            a = "play";
            break;
        case "skip":
            a = "skip";
            break;
        case "start":
            a = "start";
            b.volume = this.g.getVolume();
            break;
        case "timeUpdate":
            a = "timeupdate";
            b.currentTime = this.g.getCurrentTime();
            b.duration = this.g.getDuration();
            break;
        case "volumeChange":
            a = "volumeChange";
            b.volume = this.g.getVolume();
            break;
        case "loadedmetadata":
            a = a.type;
            b.duration = this.g.getDuration();
            break;
        case "abort":
        case "canplay":
        case "canplaythrough":
        case "durationchange":
        case "emptied":
        case "loadstart":
        case "loadeddata":
        case "progress":
        case "ratechange":
        case "seeked":
        case "seeking":
        case "stalled":
        case "suspend":
        case "waiting":
            a = a.type;
            break;
        default:
            return
        }
        uy(this.o, this.B, a, b)
    }
    ;
    var xC = function(a, b) {
        E.call(this);
        this.h = b;
        this.j = new uC(a,b,this.h.g,"videoDisplay1");
        cf(this, this.j);
        this.g = null;
        var c = this.h.o;
        null != c && (this.g = new uC(a,b,c,"videoDisplay2"),
        cf(this, this.g))
    };
    t(xC, E);
    var yC = function(a, b, c, d) {
        var e = Sg("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("role", "region");
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    };
    function zC(a) {
        return Pf(null === a ? "null" : void 0 === a ? "undefined" : a)
    }
    ;function AC() {
        var a, b, c = G();
        c = void 0 === c ? window : c;
        c = (null != (b = void 0 === c ? null : c) ? b : window).googletag;
        b = (null == c ? 0 : c.apiReady) ? c : void 0;
        return null == b ? void 0 : null == (a = b.companionAds) ? void 0 : a.call(b)
    }
    function BC(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = q(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value,
            "string" !== typeof d) {
                var e = {};
                c.push((e.adWidth = d.getWidth(),
                e.adHeight = d.getHeight(),
                e))
            } else
                "fluid" === d && (d = {},
                c.push((d.fluidSize = !0,
                d)));
        return b.adSizes = c,
        b
    }
    function CC(a) {
        var b = AC();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(v) {
                return [v.getSlotId().getId(), v]
            }));
            a = q(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value
                  , f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = eg(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth
                          , k = e.adHeight;
                        e.fluidSize && (k = tl(d),
                        h = k.width,
                        k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering)
                            try {
                                var m = "google_companion_" + f.getSlotId().getId()
                                  , n = yC(d, m, h, k)
                                  , r = n.contentWindow ? n.contentWindow.document : n.contentDocument;
                                hc && r.open("text/html", "replace");
                                Eg(r, zC(g));
                                r.close()
                            } catch (v) {}
                        else
                            Cg(d, zC(g)),
                            d.style.width = h + "px",
                            d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    }
    ;var DC = function(a, b, c, d, e, f) {
        vy.call(this, a, b, c, d, e);
        this.g = f
    };
    t(DC, vy);
    var EC = function(a, b) {
        P.call(this);
        this.l = a;
        this.j = b;
        this.g = {};
        this.h = new uu(this);
        cf(this, this.h);
        this.h.N(G(), "message", this.A)
    };
    t(EC, P);
    var FC = function(a, b) {
        var c = b.g;
        a.g.hasOwnProperty(c) && uy(a.g[c], b.type, b.messageType, b.qa)
    }
      , GC = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new $A(b,c),
        a.h.N(c, a.l, function(e) {
            this.dispatchEvent(new DC(e.type,e.messageType,e.qa,e.Ub,e.origin,b))
        }),
        c.g = d,
        c.connect(),
        a.g[b] = c)
    };
    EC.prototype.M = function() {
        for (var a in this.g)
            af(this.g[a]);
        P.prototype.M.call(this)
    }
    ;
    EC.prototype.A = function(a) {
        a = a.g;
        var b = aB(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.j && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                GC(this, c, d, a.source);
                this.dispatchEvent(new DC(b.name,b.type,b.data || {},d,a.origin,c))
            }
        }
    }
    ;
    function HC() {
        return !!Na("googletag.cmd", G())
    }
    function IC() {
        var a = Na("googletag.console", G());
        return null != a ? a : null
    }
    var JC = function() {
        uu.call(this);
        this.j = new EC("gpt",!0);
        cf(this, this.j);
        this.N(this.j, "gpt", this.A);
        this.g = null;
        HC() || G().top === G() || (this.g = new EC("gpt",!1),
        cf(this, this.g),
        this.N(this.g, "gpt", this.l))
    };
    t(JC, uu);
    JC.prototype.A = function(a) {
        var b = a.origin
          , c = "//imasdk.googleapis.com".match(ug);
        b = b.match(ug);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g)
                GC(this.g, a.g, a.Ub, G().parent),
                null != this.g && FC(this.g, a);
            else if (c = a.qa,
            null != c && void 0 !== c.scope) {
                b = c.scope;
                c = c.args;
                var d;
                if ("proxy" == b) {
                    var e = a.messageType;
                    "isGptPresent" == e ? d = HC() : "isConsolePresent" == e && (d = null != IC())
                } else if (HC())
                    if ("pubads" == b || "companionAds" == b) {
                        d = a.messageType;
                        var f = G().googletag;
                        if (null != f && null != f[b] && (b = f[b](),
                        null != b && (d = b[d],
                        null != d)))
                            try {
                                e = d.apply(b, c)
                            } catch (g) {}
                        d = e
                    } else if ("console" == b) {
                        if (e = IC(),
                        null != e && (b = e[a.messageType],
                        null != b))
                            try {
                                b.apply(e, c)
                            } catch (g) {}
                    } else
                        null === b && (e = a.messageType,
                        "googleGetCompanionAdSlots" == e ? (e = AC()) ? (e = e.getSlots().map(BC),
                        d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" == e && CC(c[0]),
                        d = null));
                void 0 !== d && (a.qa.returnValue = d,
                FC(this.j, a))
            }
    }
    ;
    JC.prototype.l = function(a) {
        FC(this.j, a)
    }
    ;
    var KC = function(a, b) {
        if (a.g) {
            var c = a.g;
            af(c.g[b]);
            delete c.g[b]
        }
        a.j && (a = a.j,
        af(a.g[b]),
        delete a.g[b])
    };
    var MC = function(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , d = c.shift();
        if ("undefined" == typeof d)
            throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, m, n, r) {
            if ("%" == m)
                return "%";
            var v = c.shift();
            if ("undefined" == typeof v)
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = v;
            return LC[m].apply(null, arguments)
        })
    }
      , LC = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Vf(" ", Number(c) - a.length) : Vf(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c))
                return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + Vf(" ", a) : f + Vf(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, h) {
            return LC.f(parseInt(a, 10), b, c, d, 0, f, g, h)
        }
    };
    LC.i = LC.d;
    LC.u = LC.d;
    function NC() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return void 0 !== b && "function" == typeof b.allowedFeatures && "object" == typeof b.allowedFeatures() && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var PC = function(a, b) {
        P.call(this);
        this.j = new uu(this);
        cf(this, this.j);
        this.J = this.I = null;
        this.G = !1;
        this.B = "goog_" + Xf++;
        this.A = new Map;
        var c = this.B
          , d = (Pg() ? "https:" : "http:") + MC("//imasdk.googleapis.com/js/core/bridge3.578.0_%s.html", Ny.getLocale());
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (k) {}
                    e = e.parent
                } while (e != e.top)
            } catch (k) {}
            f = !1
        }
        f && (d += "?f=" + c);
        f = window.document;
        if (Vu.length && f.head) {
            e = q(Vu);
            for (var g = e.next(); !g.done; g = e.next())
                if ((g = g.value) && f.head) {
                    var h = Sg("META");
                    f.head.appendChild(h);
                    h.httpEquiv = "origin-trial";
                    h.content = g
                }
        }
        f = NC();
        c = mg("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: f,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
        });
        this.j.Lb(c, "load", this.Y);
      console.log("--fx--c--", c);
        a.appendChild(c);
        this.g = c;
        this.l = OC(this);
        this.F = b;
        this.h = null;
        this.L = new xC(this.l,this.F);
        cf(this, this.L);
        this.F.g && this.j.N(this.l, "displayContainer", this.T);
        this.j.N(this.l, "mouse", this.U);
        this.j.N(this.l, "touch", this.X);
        c = G();
        d = Na("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new JC,
        w("google.ima.gptProxyInstance", d, c),
        c = d);
        this.O = c;
        NA() || (this.D = new pC(a,this.l,b.g.A.g,this.B),
        cf(this, this.D))
    };
    t(PC, P);
    var OC = function(a, b) {
        b = void 0 === b ? "*" : b;
        var c = a.A.get(b);
        null == c && (c = new $A(a.B,b),
        a.G && (c.g = qg(a.g),
        c.connect()),
        a.A.set(b, c));
        return c
    };
    PC.prototype.M = function() {
        null !== this.h && (this.h.V(),
        this.h = null);
        this.A.forEach(function(a) {
            af(a)
        });
        this.A.clear();
        KC(this.O, this.B);
        ng(this.g);
        P.prototype.M.call(this)
    }
    ;
    PC.prototype.U = function(a) {
        var b = a.qa
          , c = ll(this.g)
          , d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    }
    ;
    var QC = function(a, b) {
        var c = ll(a.g)
          , d = !!("TouchEvent"in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    PC.prototype.X = function(a) {
        var b = a.qa
          , c = ll(this.g);
        if ("TouchEvent"in window && 0 < TouchEvent.length)
            b = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: b.detail,
                ctrlKey: b.ctrlKey,
                altKey: b.altKey,
                shiftKey: b.shiftKey,
                metaKey: b.metaKey,
                touches: QC(this, b.touches),
                targetTouches: QC(this, b.targetTouches),
                changedTouches: QC(this, b.changedTouches)
            },
            a = new TouchEvent(a.messageType,b),
            this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, QC(this, b.touches), QC(this, b.targetTouches), QC(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    }
    ;
    PC.prototype.T = function(a) {
        switch (a.messageType) {
        case "showVideo":
            null == this.h ? (this.h = new cB,
            this.j.N(this.h, "click", this.Z)) : gB(this.h);
            eB(this.h, RC(this.F));
            break;
        case "hide":
            null !== this.h && (this.h.V(),
            this.h = null)
        }
        var b = this.L;
        wC(b.j, a);
        b.g && wC(b.g, a)
    }
    ;
    PC.prototype.Z = function() {
        uy(this.l, "displayContainer", "videoClick")
    }
    ;
    PC.prototype.Y = function() {
        var a = this;
        this.I = vh();
        this.J = sh();
        this.A.forEach(function(c) {
            c.g = qg(a.g);
            c.connect()
        });
        var b;
        null == (b = this.D) || rC(b);
        this.G = !0
    }
    ;
    var SC = function(a, b) {
        this.g = a[u.Symbol.iterator]();
        this.h = b
    };
    SC.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    SC.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.h.call(void 0, a.value),
            done: a.done
        }
    }
    ;
    var TC = function(a, b) {
        return new SC(a,b)
    };
    var XC = function(a) {
        if (a instanceof UC || a instanceof VC || a instanceof WC)
            return a;
        if ("function" == typeof a.next)
            return new UC(function() {
                return a
            }
            );
        if ("function" == typeof a[Symbol.iterator])
            return new UC(function() {
                return a[Symbol.iterator]()
            }
            );
        if ("function" == typeof a.rb)
            return new UC(function() {
                return a.rb()
            }
            );
        throw Error("Not an iterator or iterable.");
    }
      , UC = function(a) {
        this.g = a
    };
    UC.prototype.rb = function() {
        return new VC(this.g())
    }
    ;
    UC.prototype[Symbol.iterator] = function() {
        return new WC(this.g())
    }
    ;
    UC.prototype.h = function() {
        return new WC(this.g())
    }
    ;
    var VC = function(a) {
        this.g = a
    };
    t(VC, Um);
    VC.prototype.next = function() {
        return this.g.next()
    }
    ;
    VC.prototype[Symbol.iterator] = function() {
        return new WC(this.g)
    }
    ;
    VC.prototype.h = function() {
        return new WC(this.g)
    }
    ;
    var WC = function(a) {
        UC.call(this, function() {
            return a
        });
        this.j = a
    };
    t(WC, UC);
    WC.prototype.next = function() {
        return this.j.next()
    }
    ;
    var YC = function(a, b) {
        this.h = {};
        this.g = [];
        this.j = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof YC)
                for (c = a.fc(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    };
    l = YC.prototype;
    l.vb = function() {
        ZC(this);
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.h[this.g[b]]);
        return a
    }
    ;
    l.fc = function() {
        ZC(this);
        return this.g.concat()
    }
    ;
    l.has = function(a) {
        return $C(this.h, a)
    }
    ;
    l.isEmpty = function() {
        return 0 == this.size
    }
    ;
    l.clear = function() {
        this.h = {};
        this.j = this.size = this.g.length = 0
    }
    ;
    l.remove = function(a) {
        $C(this.h, a) ? (delete this.h[a],
        --this.size,
        this.j++,
        this.g.length > 2 * this.size && ZC(this),
        a = !0) : a = !1;
        return a
    }
    ;
    var ZC = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                $C(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length; )
                d = a.g[b],
                $C(e, d) || (a.g[c++] = d,
                e[d] = 1),
                b++;
            a.g.length = c
        }
    };
    l = YC.prototype;
    l.get = function(a, b) {
        return $C(this.h, a) ? this.h[a] : b
    }
    ;
    l.set = function(a, b) {
        $C(this.h, a) || (this.size += 1,
        this.g.push(a),
        this.j++);
        this.h[a] = b
    }
    ;
    l.forEach = function(a, b) {
        for (var c = this.fc(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    l.keys = function() {
        return XC(this.rb(!0)).h()
    }
    ;
    l.values = function() {
        return XC(this.rb(!1)).h()
    }
    ;
    l.entries = function() {
        var a = this;
        return TC(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    l.rb = function(a) {
        ZC(this);
        var b = 0
          , c = this.j
          , d = this
          , e = new Um;
        e.next = function() {
            if (c != d.j)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return Vm;
            var f = d.g[b++];
            return {
                value: a ? f : d.h[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    var $C = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var bD = function() {
        P.call(this);
        this.buffered = new aD;
        this.seekable = new aD;
        this.h = new uu(this);
        cf(this, this.h);
        this.src = this.j = "";
        this.tagName = "VIDEO";
        this.l = !1;
        this.g = null;
        var a = My(Ny);
        if (a) {
            a: {
                if (nf(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration,
                "number" === typeof a))
                    break a;
                a = NaN
            }
            this.duration = a
        }
    };
    t(bD, P);
    var cD = function() {
        var a = ["video/mp4"]
          , b = ["video/ogg"]
          , c = new bD;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        }
        ;
        c.width = 0;
        c.height = 0;
        c.offsetWidth = 0;
        c.offsetHeight = 0;
        return c
    };
    l = bD.prototype;
    l.pause = function() {
        this.paused || (null.stop(),
        this.paused = !0,
        this.dispatchEvent("timeupdate"),
        this.dispatchEvent("pause"))
    }
    ;
    l.load = function() {
        this.readyState = 0;
        this.paused = !0;
        this.seeking = !1;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
        this.setProperty("duration", a);
        a = this.seekable;
        a.g.push(new dD(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new dD(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.defaultPlaybackRate
    }
    ;
    l.setProperty = function(a, b) {
        switch (a) {
        case "currentTime":
            a = Number(b);
            this.seeking = !0;
            this.dispatchEvent("seeking");
            this.seeking = !1;
            this.currentTime = a;
            this.dispatchEvent("seeked");
            a = Ya() - this.Tc;
            b = this.currentTime + a / 1E3;
            this.Tc += a;
            2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
            this.dispatchEvent("timeupdate");
            this.currentTime == this.duration && (this.ended = this.paused = !0,
            null.stop(),
            this.dispatchEvent("ended"));
            break;
        case "duration":
            this.duration = Number(b);
            this.dispatchEvent("durationchange");
            break;
        case "volume":
            this.volume = Number(b);
            this.dispatchEvent("volumechange");
            break;
        default:
            throw "Property setter not implemented";
        }
    }
    ;
    l.setAttribute = function(a, b) {
        null != a && eD.set(a, b)
    }
    ;
    l.getAttribute = function(a) {
        return eD.get(a)
    }
    ;
    l.xe = function(a) {
        var b = null
          , c = null;
        switch (a.type) {
        case "loadeddata":
            b = "Loaded";
            break;
        case "playing":
            b = "Playing";
            c = "#00f";
            break;
        case "pause":
            b = "Paused";
            break;
        case "ended":
            b = "Ended",
            c = "#000"
        }
        b && this.Dc && (this.Dc.innerText = b);
        c && this.Fb && (this.Fb.style.backgroundColor = c)
    }
    ;
    var eD = new YC
      , dD = function(a) {
        this.startTime = 0;
        this.endTime = a
    }
      , aD = function() {
        this.length = 0;
        this.g = []
    };
    aD.prototype.start = function(a) {
        return this.g[a].startTime
    }
    ;
    aD.prototype.end = function(a) {
        return this.g[a].endTime
    }
    ;
    l = bD.prototype;
    l.readyState = 0;
    l.seeking = !1;
    l.currentTime = 0;
    l.initialTime = void 0;
    l.duration = NaN;
    l.paused = !0;
    l.ended = !1;
    l.volume = 1;
    l.muted = !1;
    Object.defineProperty(bD.prototype, "src", {
        get: function() {
            return bD.prototype.j
        },
        set: function(a) {
            var b = bD.prototype;
            b.l && null != b.g ? (b.g.reject(),
            b.g = null) : b.j = a
        }
    });
    l = bD.prototype;
    l.currentSrc = "";
    l.defaultPlaybackRate = 1;
    l.playbackRate = 0;
    l.Tc = 0;
    l.Fb = null;
    l.Dc = null;
    var hD = function(a, b) {
        E.call(this);
        this.o = a;
        this.j = this.g = null;
        this.h = fD(this);
        gD(this, b);
        rx(function() {
            L(K.g(), "haob", "1")
        })
    };
    t(hD, E);
    hD.prototype.initialize = function() {
        this.h && this.h.load()
    }
    ;
    hD.prototype.M = function() {
        ng(this.g);
        E.prototype.M.call(this)
    }
    ;
    var gD = function(a, b) {
        a.g = mg("DIV", {
            style: "display:none;"
        });
        a.o.appendChild(a.g);
        a.g.appendChild(a.h);
        b && (a.j = mg("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        }),
        a.g.appendChild(a.j))
    }
      , fD = function(a) {
        var b = My(Ny);
        if (Jy(b, "useVideoElementFake"))
            a = cD(),
            b = mg("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }),
            Object.assign(b, a),
            a.Fb = mg("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }),
            a.Dc = mg("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }),
            a.Fb.appendChild(a.Dc),
            b.appendChild(a.Fb),
            a.h.N(a, ["loadeddata", "playing", "pause", "ended"], a.xe),
            a = b;
        else {
            b = !1;
            try {
                -1 != window.location.search.indexOf("goog_limavideo=true") && (b = !0)
            } catch (c) {}
            if (iD(a, b)) {
                b && console.log("force lima video in wrapper");
                a = null;
                try {
                    a = new Dx
                } catch (c) {
                    a = mg("lima-video"),
                    fi(ij) && XA.g().report(153, {
                        limvid: "firefail"
                    })
                }
                a.style.backgroundColor = "#000";
                a.style.height = "100%";
                a.style.width = "100%";
                a.style.position = "absolute";
                a.style.left = "0";
                a.style.top = "0"
            } else
                a = mg("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: ey("Advertisement").toString()
                })
        }
        a.setAttribute("webkit-playsinline", !0);
        a.setAttribute("playsinline", !0);
        return a
    }
      , iD = function(a, b) {
        if (!u.customElements)
            return !1;
        if (b)
            return !0;
        if (zb() && cg(a.o) !== document)
            return !1;
        fi(ij) && XA.g().report(153, {
            limvid: "vw"
        });
        return fi(cj) || fi(ij) || fi(aj) || fi(bj) ? !0 : !1
    }
      , vC = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var lD = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (null == a || !pg(cg(d), d))
            throw fz(ez, null, "containerElement", "element");
        this.l = b;
        this.Z = PA(this.l || null);
        this.Y = Zt(this.l || null);
        this.X = String(Math.floor(1E9 * Math.random()));
        this.L = !1;
        this.G = a;
        this.U = null != b;
        Ny.g = 2;
        this.D = jD(b ? b : null);
        d = mg("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.B = d;
        this.h = null;
        kD(this) && b ? a = new gC(b) : (this.h = new hD(this.B,!0),
        a = new gC(this.h.h));
        this.g = a;
        this.o = this.A = null;
        if (a = this.h && Ny.j)
            a = !(kD(this) || lc || nc || Fl() || kc && (!kc || !Wt(Vt, 4)));
        a && (this.A = new hD(this.B,!0),
        this.o = new gC(this.A.h));
        this.H = c || null;
        this.T = null != this.H;
        kD(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.B,
        Ny.o = c) : c = b : c = this.B;
        this.F = c;
        this.K = new PC(this.B,this);
        this.O = new F(0,0);
        this.I = "";
        b && (b = Ct(b.src || b.currentSrc),
        200 > b.toString().length ? this.I = b.toString() : 200 > b.h.length && (this.I = b.h));
        this.J = new Map;
        this.J.set("videoDisplay1", this.g);
        this.o && this.J.set("videoDisplay2", this.o)
    };
    lD.prototype.initialize = function() {
        this.L = !0;
        null != this.h && this.h.initialize();
        null != this.A && this.A.initialize()
    }
    ;
    lD.prototype.j = function() {
        return this.L
    }
    ;
    lD.prototype.destroy = function() {
        var a = this;
        this.l = null;
        af(this.h);
        af(this.A);
        af(this.K);
        this.g.Vb(function() {
            return af(a.g)
        });
        null != this.o && this.o.Vb(function() {
            return af(a.o)
        });
        ng(this.B)
    }
    ;
    var RC = function(a) {
        return a.T && a.H ? a.H : null != a.h ? a.h.j : null
    }
      , kD = function(a) {
        return OA(a.D) && a.U
    };
    lD.prototype.getSize = function() {
        return this.O
    }
    ;
    var jD = function(a) {
        return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1
    };
    lD.prototype.destroy = lD.prototype.destroy;
    lD.prototype.initialize = lD.prototype.initialize;
    var mD = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    }
      , nD = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.data = a
    };
    t(nD, Error);
    l = nD.prototype;
    l.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new nD(a) : null != a ? Error(a) : null
    }
    ;
    l.getMessage = function() {
        return this.data.errorMessage
    }
    ;
    l.getErrorCode = function() {
        return this.data.errorCode
    }
    ;
    l.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return 1E3 > a ? a : 900
    }
    ;
    l.getType = function() {
        return this.data.type
    }
    ;
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    nD.prototype.getType = nD.prototype.getType;
    nD.prototype.getVastErrorCode = nD.prototype.getVastErrorCode;
    nD.prototype.getErrorCode = nD.prototype.getErrorCode;
    nD.prototype.getMessage = nD.prototype.getMessage;
    nD.prototype.getInnerError = nD.prototype.getInnerError;
    w("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", mD);
    var oD = {
        AD_ERROR: "adError"
    }
      , pD = function(a, b) {
        b = void 0 === b ? null : b;
        mq.call(this, "adError");
        this.error = a;
        this.g = b
    };
    t(pD, mq);
    pD.prototype.getError = function() {
        return this.error
    }
    ;
    pD.prototype.getUserRequestContext = function() {
        return this.g
    }
    ;
    pD.prototype.getUserRequestContext = pD.prototype.getUserRequestContext;
    pD.prototype.getError = pD.prototype.getError;
    w("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", oD);
    var qD = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        mq.call(this, a);
        this.o = b;
        this.j = c
    };
    t(qD, mq);
    qD.prototype.getAd = function() {
        return this.o
    }
    ;
    qD.prototype.getAdData = function() {
        return this.j
    }
    ;
    qD.prototype.getAdData = qD.prototype.getAdData;
    qD.prototype.getAd = qD.prototype.getAd;
    var rD = {
        AD_CAN_PLAY: "adCanPlay",
        cg: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        qd: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        xd: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        rd: "fully_viewable_audible_half_duration_impression",
        Be: "overlay_resize",
        Ce: "overlay_unmeasurable_impression",
        De: "overlay_unviewable_impression",
        Fe: "overlay_viewable_immediate_impression",
        Ee: "overlay_viewable_end_of_session_impression",
        vg: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        yh: "userRecall",
        gh: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        Je: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        bg: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        jg: "companionBackfill",
        vh: "trackingUrlPinged",
        zh: "video_card_endcap_collapse",
        Ah: "video_card_endcap_dismiss",
        Bh: "video_card_endcap_impression",
        mg: "companionInitialized",
        lg: "companionImpression",
        kg: "companionClick",
        Vg: "mediaUrlPinged",
        ye: "loadStart",
        Xg: "navigationRequested"
    };
    w("module$contents$ima$AdEvent_AdEvent.Type", rD);
    var sD = function(a, b) {
        b = void 0 === b ? null : b;
        qD.call(this, "adMetadata", a);
        this.g = b
    };
    t(sD, qD);
    sD.prototype.Ye = function() {
        return this.g
    }
    ;
    sD.prototype.getAdCuePoints = sD.prototype.Ye;
    var tD = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var uD = function(a, b) {
        P.call(this);
        this.j = a;
        this.A = b;
        this.h = this.j.currentTime;
        this.g = new qr(250);
        cf(this, this.g);
        this.l = new uu(this);
        cf(this, this.l);
        wu(this.l, this.g, "tick", this.B, !1, this)
    };
    t(uD, P);
    uD.prototype.bb = function() {
        return this.h
    }
    ;
    uD.prototype.start = function() {
        vD(this);
        this.g.start()
    }
    ;
    uD.prototype.stop = function() {
        this.g.stop()
    }
    ;
    uD.prototype.B = function() {
        var a = this.j.currentTime;
        a !== this.bb() && (this.h = a,
        vD(this))
    }
    ;
    var vD = function(a) {
        var b = {};
        b.currentTime = a.bb();
        uy(a.A, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var wD = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , xD = function(a) {
        a = jb(a);
        if ("" == a)
            return null;
        var b = String(a.slice(0, 4)).toLowerCase();
        if (0 == ("url(" < b ? -1 : "url(" == b ? 0 : 1))
            return null;
        if (0 < a.indexOf("(")) {
            if (/"|'/.test(a))
                return null;
            b = /([\-\w]+)\(/g;
            for (var c; c = b.exec(a); )
                if (!(c[1].toLowerCase()in wD))
                    return null
        }
        return a
    };
    function yD(a, b) {
        a = u[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }
    function zD(a) {
        var b = u.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    yD("Element", "attributes") || yD("Node", "attributes");
    yD("Element", "innerHTML") || yD("HTMLElement", "innerHTML");
    yD("Node", "nodeName");
    yD("Node", "nodeType");
    yD("Node", "parentNode");
    yD("Node", "childNodes");
    yD("HTMLElement", "style") || yD("Element", "style");
    yD("HTMLStyleElement", "sheet");
    var AD = zD("getPropertyValue")
      , BD = zD("setProperty");
    yD("Element", "namespaceURI") || yD("Node", "namespaceURI");
    function CD(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if (fc && 10 > document.documentMode) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c])
            throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }
    ;var DD = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    }
      , FD = function(a) {
        if (!a)
            return Lf;
        var b = document.createElement("div").style;
        ED(a).forEach(function(c) {
            var d = ic && c in DD ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = CD(AD, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "",
            c = xD(c),
            null != c && CD(BD, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
        });
        return new Kf(b.cssText || "",Jf)
    }
      , ED = function(a) {
        Oa(a) ? a = Vb(a) : (a = lf(a),
        Rb(a, "cssText"));
        return a
    };
    var GD = function(a, b, c) {
        P.call(this);
        this.h = a;
        this.g = null;
        this.G = "";
        this.I = Lf;
        this.J = 0;
        this.B = this.j = null;
        this.l = b;
        this.A = null;
        this.D = "";
        this.F = c
    };
    t(GD, P);
    GD.prototype.init = function(a) {
        this.D = a;
        a = "about:blank";
        fc && (a = "");
        this.j = mg("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent"
        });
        gl(this.j, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.h.G;
        a.appendChild(this.j);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        null == this.A && (this.A = new uu(this));
        this.A.N(a, "message", this.L);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.D + '");\x3c/script></body>');
        if (Bc || zc || gc) {
            var b = this.j.contentWindow;
            b && DB(b.document, a)
        } else
            EB(this.j, a)
    }
    ;
    GD.prototype.L = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (A) {
                return
            }
            var d = c.session;
            if (null != d && this.D == d)
                switch (c.type) {
                case "friendlyReady":
                    var e = HD(this);
                    if (null != e) {
                        this.g = e;
                        this.G = e.currentSrc;
                        var f = e.style.cssText;
                        if (fc && 10 > document.documentMode)
                            var g = Lf;
                        else {
                            var h = document;
                            "function" === typeof HTMLTemplateElement && (h = kg(document, "TEMPLATE").content.ownerDocument);
                            var k = h.implementation.createHTMLDocument("").createElement("DIV");
                            k.style.cssText = f;
                            g = FD(k.style)
                        }
                        this.I = g;
                        this.J = e.currentTime
                    } else {
                        h = this.h.G;
                        e = "border: 0; margin: 0; padding: 0; position: absolute; ";
                        var m = this.h.getSize();
                        e += "width:" + m.width + "px; ";
                        e += "height:" + m.height + "px;";
                        this.g = mg("VIDEO", {
                            style: e,
                            autoplay: !0
                        });
                        h.appendChild(this.g)
                    }
                    var n = this.h.G;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var r = pl(this.g);
                    e += "width:" + r.width + "px; ";
                    e += "height:" + r.height + "px;";
                    this.B = mg("DIV", {
                        style: e
                    });
                    n.appendChild(this.B);
                    try {
                        this.j.contentWindow.loader.initFriendly(this.g, this.B)
                    } catch (A) {
                        ID(this)
                    }
                    uy(this.l, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !tg() && !sg() && gl(this.g, {
                        visibility: "visible"
                    });
                    uy(this.l, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    JD(this);
                    uy(this.l, "vpaid", "", b);
                    break;
                case "startAd":
                    n = {};
                    if (this.g) {
                        var v = this.g.paused
                          , y = 0 < this.g.currentTime;
                        n.apl = y && !v ? "1" : "0";
                        n.ip = v ? "1" : "0";
                        n.iavp = y ? "1" : "0"
                    } else
                        n.apl = "n";
                    XA.g().report(99, n);
                    uy(this.l, "vpaid", "", b);
                    if (null != HD(this)) {
                        var B = this.h;
                        null != B.h && vC(B.h.g, !0)
                    }
                    break;
                default:
                    uy(this.l, "vpaid", "", b)
                }
        } catch (A) {
            ID(this)
        }
    }
    ;
    var ID = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.D;
        a = JSON.stringify(b);
        window.postMessage(a, "*")
    }
      , HD = function(a) {
        return ("videoDisplayUnknown" == a.F ? a.h.g : a.h.J.get(a.F)).A.g
    }
      , JD = function(a) {
        a.g && !tg() && !sg() && gl(a.g, {
            visibility: "hidden"
        })
    };
    GD.prototype.M = function() {
        E.prototype.M.call(this);
        af(this.A);
        this.A = null;
        ng(this.B);
        this.B = null;
        ng(this.j);
        this.j = null;
        var a = HD(this);
        if (null != a) {
            var b = this.I;
            a.style.cssText = b instanceof Kf && b.constructor === Kf ? b.g : "type_error:SafeStyle";
            tg() || sg() ? (a.src = this.G,
            a.currentTime = this.J) : (a.removeAttribute("src"),
            a = this.h,
            null != a.h && vC(a.h.g, !1))
        } else
            ng(this.g),
            this.g = null
    }
    ;
    var KD = function(a, b) {
        E.call(this);
        this.h = a;
        this.j = b;
        this.g = new Map
    };
    t(KD, E);
    var LD = function(a, b) {
        try {
            var c = b.qa
              , d = c.session;
            switch (c.vpaidEventType) {
            case "createFriendlyIframe":
                b = "videoDisplayUnknown";
                c.videoDisplayName && (b = c.videoDisplayName);
                var e = c.session
                  , f = new GD(a.h,a.j,b);
                a.g.set(e, f);
                f.init(e);
                break;
            case "vpaidNonLinear":
                var g = a.g.get(d);
                g && JD(g);
                break;
            case "destroyFriendlyIframe":
                var h = a.g.get(d);
                h && (h.V(),
                a.g.delete(d))
            }
        } catch (k) {
            XA.g().report(125, {
                msg: k.message
            })
        }
    };
    KD.prototype.M = function() {
        this.g.forEach(function(a) {
            return a.V()
        })
    }
    ;
    var MD = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    l = MD.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Rh;
            d = c.If || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ud
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = jb(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Ud: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    l.fc = function() {
        return ND(this).keys
    }
    ;
    l.vb = function() {
        return ND(this).values
    }
    ;
    l.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    l.clear = function() {
        for (var a = ND(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    var ND = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = jb(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    function OD(a) {
        return "null" !== a.origin
    }
    function PD(a, b, c) {
        b = Zd(b, 5) && OD(c) ? c.document.cookie : null;
        return null === b ? null : (new MD({
            cookie: b
        })).get(a) || ""
    }
    ;var QD = function() {
        this.g = window;
        this.h = 0
    }
      , RD = function(a, b, c, d) {
        if (d) {
            var e = {
                Ud: Math.max(C(c, 2) - Date.now() / 1E3, 0),
                path: C(c, 3),
                domain: C(c, 4),
                If: !1
            };
            a = a.g;
            Zd(d, 5) && OD(a) && (new MD(a.document)).set(b, C(c, 1), e)
        }
    }
      , SD = function(a, b, c) {
        if (c && PD(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d)
                d = ["localhost"];
            else if (d = d.split("."),
            2 > d.length)
                d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f)
                    e.push(d.slice(f).join("."));
                d = e
            }
            d = q(d);
            for (e = d.next(); !e.done; e = d.next())
                f = a.g,
                Zd(c, 5) && OD(f) && (new MD(f.document)).remove(b, "/", e.value)
        }
    };
    var TD = function() {
        this.g = [];
        this.h = []
    };
    TD.prototype.isEmpty = function() {
        return 0 === this.g.length && 0 === this.h.length
    }
    ;
    TD.prototype.clear = function() {
        this.g = [];
        this.h = []
    }
    ;
    TD.prototype.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;
            0 > c && (c = Math.max(0, b.length + c));
            if ("string" === typeof b)
                c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else {
                for (; 0 <= c; c--)
                    if (c in b && b[c] === a)
                        break b;
                c = -1
            }
        }
        0 <= c ? (Sb(b, c),
        b = !0) : b = !1;
        return b || Rb(this.h, a)
    }
    ;
    TD.prototype.vb = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b)
            a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b)
            a.push(this.h[b]);
        return a
    }
    ;
    var Z = function(a, b, c, d, e, f, g, h) {
        P.call(this);
        var k = this;
        this.G = a;
        this.g = b;
        this.J = c;
        this.qb = e;
        this.l = new PB;
        this.D = g;
        this.Ra = h;
        this.L = !1;
        this.T = 1;
        this.sb = d;
        this.ca = -1;
        this.j = this.h = null;
        this.A = new uD({
            currentTime: 0
        },this.D);
        this.F = new TD;
        this.ka = this.X = !1;
        this.Y = new Map;
        this.Z = this.ta = !1;
        this.Ba = new KD(b,g);
        cf(this, this.Ba);
        this.I = f && null != this.g.H;
        this.O = function() {
            var m = k.g.g
              , n = m.getCurrentTime();
            m = m.getDuration();
            return {
                currentTime: n,
                duration: m,
                isPlaying: !0,
                volume: k.T
            }
        }
        ;
        this.U = new uu(this);
        this.U.N(this.D, "adsManager", this.Re)
    };
    t(Z, P);
    Z.prototype.Re = function(a) {
        var b = this
          , c = a.messageType
          , d = a.qa;
        switch (c) {
        case "error":
            UD(this);
            VD(this, d);
            break;
        case "contentPauseRequested":
            XA.g().report(130);
            WD(this);
            this.A.stop();
            XD(this, c, d);
            break;
        case "contentResumeRequested":
            YD(this, function() {
                return XD(b, c, d)
            });
            break;
        case "remainingTime":
            this.ca = d.remainingTime;
            break;
        case "skip":
            XD(this, c, d);
            break;
        case "log":
            XD(this, c, d, d.logData);
            break;
        case "companionBackfill":
            a = Na("window.google_show_companion_ad");
            null != a && a();
            break;
        case "skipShown":
            this.L = !0;
            XD(this, c, d);
            break;
        case "interaction":
            XD(this, c, d, d.interactionData);
            break;
        case "vpaidEvent":
            LD(this.Ba, a);
            break;
        case "skippableStateChanged":
            a = d.adData;
            null != a.skippable && (this.L = a.skippable);
            XD(this, c, d);
            break;
        case "volumeChange":
            a = d.adData;
            null != a && "number" === typeof a.volume && (this.T = a.volume);
            XD(this, c, d);
            break;
        case "firstQuartile":
            XD(this, sA.firstQuartile, d);
            XD(this, c, d);
            break;
        case "thirdQuartile":
            XD(this, sA.thirdQuartile, d);
            XD(this, c, d);
            break;
        case "updateGfpCookie":
            ZD(this, d);
            break;
        default:
            XD(this, c, d)
        }
    }
    ;
    var XD = function(a, b, c, d) {
        if (null == c.companions) {
            var e = a.Y.get(c.adId);
            c.companions = null != e ? e : []
        }
        var f = c.adData;
        if (e = null == f ? null : new Y(f))
            a.h = e;
        switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
            b = new qD(b,null,c);
            break;
        case "adMetadata":
            b = null;
            null != c.adCuePoints && (b = new OB(c.adCuePoints));
            b = new sD(e,b);
            break;
        case "allAdsCompleted":
            a.h = null;
            a.ta = !0;
            b = new qD(b,e);
            break;
        case "contentPauseRequested":
            a.Z = !1;
            b = new qD(b,e);
            break;
        case "contentResumeRequested":
            a.h = null;
            a.Z = !0;
            b = new qD(b,e);
            break;
        case "loaded":
            a.ca = e.getDuration();
            a.L = !1;
            QA() && (d = a.G,
            c = a.qb,
            d.h.set(NB(e), a.O),
            YB(d) && XB(d, "loaded", NB(e), c));
            b = new qD(b,e,f);
            break;
        case "start":
            a.Y.set(c.adId, c.companions);
            null != RC(a.g) && (null == a.j ? (a.j = new cB,
            a.U.N(a.j, "click", a.Af)) : gB(a.j),
            eB(a.j, RC(a.g)));
            b = new qD(b,e);
            break;
        case "complete":
            null != a.j && gB(a.j);
            QA() && $B(a.G, a.O, NB(e));
            a.h = null;
            a.Y.delete(c.adId);
            b = new qD(b,e);
            break;
        case "log":
            c = null;
            null != d && null != d.type ? (f = d.type,
            f = "adLoadError" == f || "adPlayError" == f) : f = !1;
            f && (c = {
                adError: new nD(d)
            });
            b = new qD(b,e,c);
            break;
        case "interaction":
            b = new qD(b,e,d);
            break;
        case "adProgress":
            b = new qD(b,e,new tD(c));
            break;
        default:
            b = new qD(b,e)
        }
        a.dispatchEvent(b);
        a.ta && a.Z && a.destroy()
    }
      , VD = function(a, b) {
        var c = new pD(new nD(b));
        a.X ? (a.dispatchEvent(c),
        QA() && a.h && $B(a.G, a.O, NB(a.h)),
        a.h = null) : a.F.h.push(c);
        a = {
            error: b.errorCode,
            vis: ph(document)
        };
        XA.g().report(7, a)
    }
      , $D = function(a, b, c) {
        uy(a.D, "adsManager", b, c)
    }
      , YD = function(a, b) {
        XA.g().report(131);
        UD(a, b);
        a.va() || a.A.start()
    }
      , WD = function(a) {
        var b = a.g.g;
        kD(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != b.wd && b.wd()
    }
      , UD = function(a, b) {
        var c = a.g.g;
        kD(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Vb ? c.Vb(b) : b && b()
    };
    l = Z.prototype;
    l.configureAdsManager = function(a, b) {
        this.B = a;
        null != a.currentTime && (this.A = new uD(a,this.D),
        this.A.start());
        null != b && (this.l = aE(b))
    }
    ;
    l.init = function(a, b, c, d) {
        if (this.F.isEmpty()) {
            var e = this.g
              , f = null;
            e.l && null == d && (f = {
                vd: "setnull"
            });
            e.l && e.l === d && (f = {
                vd: "match"
            });
            if (e.l && e.l !== d) {
                f = PA(d || null);
                var g = Zt(d || null);
                f = {
                    vd: "diff",
                    oc: e.Z,
                    nc: f,
                    oi: e.Y,
                    ni: g
                }
            }
            !e.l && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.X,
            XA.g().report(93, f));
            null != d && (e.D = jD(d),
            OA(e.D) && (e.U = !0,
            af(e.h),
            af(e.A),
            af(e.o),
            e.h = null,
            e.A = null,
            e.o = null,
            af(e.g),
            e.g = new gC(d),
            "function" !== typeof d.getBoundingClientRect ? (e.F = e.B,
            Ny.o = e.F) : e.F = d,
            null != (d = e.K.D) && (e = e.g.A.g,
            d.j = e,
            d.g && (d = d.g,
            d.h = e,
            IB(d, e)))));
            this.X = !0;
            this.resize(a, b, c);
            e = QB(this.l, this.I);
            $D(this, "init", {
                adsRenderingSettings: e,
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.F.isEmpty(); )
                b = a = this.F,
                0 === b.g.length && (b.g = b.h,
                b.g.reverse(),
                b.h = []),
                a = a.g.pop(),
                this.dispatchEvent(a);
            this.V()
        }
    }
    ;
    l.isCustomPlaybackUsed = function() {
        return kD(this.g)
    }
    ;
    l.isCustomClickTrackingUsed = function() {
        return this.I
    }
    ;
    l.getRemainingTime = function() {
        return this.ca
    }
    ;
    l.getAdSkippableState = function() {
        return this.L
    }
    ;
    l.discardAdBreak = function() {
        $D(this, "discardAdBreak")
    }
    ;
    l.updateAdsRenderingSettings = function(a) {
        if (null != a) {
            a = aE(a);
            var b = this.l.bitrate
              , c = a.bitrate;
            XA.g().report(96, {
                init: this.X ? "1" : "0",
                start: this.ka ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.l = a;
            a = QB(this.l, this.I);
            $D(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: a
            })
        }
    }
    ;
    l.skip = function() {
        $D(this, "skip")
    }
    ;
    l.start = function() {
        if (this.J) {
            (lc || nc) && XA.g().report(50, {
                customPlayback: kD(this.g)
            });
            this.g.j() || XA.g().report(26, {
                adtagurl: this.J,
                customPlayback: kD(this.g)
            });
            zl(this.g.B) && XA.g().report(30, {
                adtagurl: this.J,
                customPlayback: kD(this.g)
            });
            var a = this.g.H, b = this.g.B, c;
            if (c = a && b && !zl(a))
                a = VB(a),
                b = VB(b),
                c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            XA.g().report(31, {
                adtagurl: this.J,
                customPlayback: kD(this.g),
                covers: b
            })
        }
        if (!this.g.j() && !kD(this.g))
            throw fz(dz);
        b = this.g;
        b.T = this.I && null != b.H;
        this.g.K.g.style.opacity = 1;
        null != this.B && 1 == this.getVolume() && ("boolean" === typeof this.B.muted && this.B.muted ? this.setVolume(0) : "number" === typeof this.B.volume && (b = this.B.volume,
        0 <= b && 1 >= b && this.setVolume(this.B.volume)));
        this.ka = !0;
        $D(this, "start")
    }
    ;
    l.Af = function() {
        if (!this.l.disableClickThrough && null != this.h) {
            var a = this.h.data.clickThroughUrl;
            null != a && Tt(a, this.h.data.attributionParams)
        }
    }
    ;
    l.resize = function(a, b, c) {
        var d = this.g
          , e = d.B;
        null != e && (-1 == a ? (e.style.right = "0",
        e.style.left = "0") : e.style.width = a + "px",
        -1 == b ? (e.style.bottom = "0",
        e.style.top = "0") : e.style.height = b + "px");
        e = d.K;
        e.g.width = -1 == a ? "100%" : a;
        e.g.height = -1 == b ? "100%" : b;
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.O = new F(a,b);
        $D(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    }
    ;
    l.stop = function() {
        $D(this, "stop")
    }
    ;
    l.expand = function() {
        $D(this, "expand")
    }
    ;
    l.collapse = function() {
        $D(this, "collapse")
    }
    ;
    l.getVolume = function() {
        return this.T
    }
    ;
    l.setVolume = function(a) {
        this.T = a;
        this.g.g.setVolume(a);
        $D(this, "volume", {
            volume: a
        })
    }
    ;
    l.pause = function() {
        $D(this, "pause")
    }
    ;
    l.resume = function() {
        $D(this, "resume")
    }
    ;
    l.destroy = function() {
        this.V()
    }
    ;
    l.getCuePoints = function() {
        return this.sb
    }
    ;
    l.Ze = function() {
        return this.h
    }
    ;
    l.M = function() {
        $D(this, "destroy");
        null != this.j && this.j.V();
        this.U.V();
        this.F.clear();
        this.A && (this.A.stop(),
        this.A.V());
        QA() && $B(this.G, this.O);
        P.prototype.M.call(this)
    }
    ;
    l.Se = function() {
        XA.g().report(124, {
            api: "clicked"
        });
        var a = this.h && this.h.data.clickThroughUrl;
        a && this.h.Td() && Tt(a, this.h.data.attributionParams);
        $D(this, "click")
    }
    ;
    l.focus = function() {
        uy(this.D, "userInteraction", "focusUiElement")
    }
    ;
    var ZD = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new Yr;
        d = Id(d, 1, c ? "0" : "1");
        d = Id(d, 2, 2147483647);
        d = Id(d, 3, "/");
        d = Id(d, 4, window.location.hostname);
        var e = new QD, f, g;
        a = null != (g = null == (f = a.Ra) ? void 0 : bz(f)) ? g : null;
        RD(e, "__gpi_opt_out", d, a);
        if (!c || b)
            SD(e, "__gads", a),
            SD(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.Se;
    Z.prototype.getCurrentAd = Z.prototype.Ze;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;
    function aE(a) {
        if (a instanceof PB)
            return a;
        var b = new PB;
        b.append(a);
        return b
    }
    ;var bE = function(a, b) {
        mq.call(this, "adsManagerLoaded");
        this.g = a;
        this.j = b
    };
    t(bE, mq);
    bE.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    }
    ;
    bE.prototype.getUserRequestContext = function() {
        return this.j
    }
    ;
    bE.prototype.getUserRequestContext = bE.prototype.getUserRequestContext;
    bE.prototype.getAdsManager = bE.prototype.getAdsManager;
    var cE = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    };
    w("module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type", cE);
    var dE = function() {
        this.j = this.h = "unknown";
        this.g = "0";
        this.adsResponse = null;
        this.adTagUrl = "";
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.forceNonLinearFullSlot = !1;
        this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
        this.omidAccessModeRules = {};
        this.pageUrl = null;
        this.vastLoadTimeout = 5E3
    };
    dE.prototype.setAdWillAutoPlay = function(a) {
        this.h = a ? "auto" : "click"
    }
    ;
    dE.prototype.setAdWillPlayMuted = function(a) {
        this.j = a ? "muted" : "unmuted"
    }
    ;
    dE.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    }
    ;
    dE.prototype.setContinuousPlayback = dE.prototype.setContinuousPlayback;
    dE.prototype.setAdWillPlayMuted = dE.prototype.setAdWillPlayMuted;
    dE.prototype.setAdWillAutoPlay = dE.prototype.setAdWillAutoPlay;
    var eE = p(["https://adservice.google.com/adsid/integrator.", ""])
      , fE = p(["https://adservice.google.ad/adsid/integrator.", ""])
      , gE = p(["https://adservice.google.ae/adsid/integrator.", ""])
      , hE = p(["https://adservice.google.com.af/adsid/integrator.", ""])
      , iE = p(["https://adservice.google.com.ag/adsid/integrator.", ""])
      , jE = p(["https://adservice.google.al/adsid/integrator.", ""])
      , kE = p(["https://adservice.google.co.ao/adsid/integrator.", ""])
      , lE = p(["https://adservice.google.com.ar/adsid/integrator.", ""])
      , mE = p(["https://adservice.google.as/adsid/integrator.", ""])
      , nE = p(["https://adservice.google.at/adsid/integrator.", ""])
      , oE = p(["https://adservice.google.com.au/adsid/integrator.", ""])
      , pE = p(["https://adservice.google.az/adsid/integrator.", ""])
      , qE = p(["https://adservice.google.com.bd/adsid/integrator.", ""])
      , rE = p(["https://adservice.google.be/adsid/integrator.", ""])
      , sE = p(["https://adservice.google.bf/adsid/integrator.", ""])
      , tE = p(["https://adservice.google.bg/adsid/integrator.", ""])
      , uE = p(["https://adservice.google.com.bh/adsid/integrator.", ""])
      , vE = p(["https://adservice.google.bi/adsid/integrator.", ""])
      , wE = p(["https://adservice.google.bj/adsid/integrator.", ""])
      , xE = p(["https://adservice.google.com.bn/adsid/integrator.", ""])
      , yE = p(["https://adservice.google.com.bo/adsid/integrator.", ""])
      , zE = p(["https://adservice.google.com.br/adsid/integrator.", ""])
      , AE = p(["https://adservice.google.bs/adsid/integrator.", ""])
      , BE = p(["https://adservice.google.bt/adsid/integrator.", ""])
      , CE = p(["https://adservice.google.co.bw/adsid/integrator.", ""])
      , DE = p(["https://adservice.google.com.bz/adsid/integrator.", ""])
      , EE = p(["https://adservice.google.ca/adsid/integrator.", ""])
      , FE = p(["https://adservice.google.cd/adsid/integrator.", ""])
      , GE = p(["https://adservice.google.cf/adsid/integrator.", ""])
      , HE = p(["https://adservice.google.cg/adsid/integrator.", ""])
      , IE = p(["https://adservice.google.ch/adsid/integrator.", ""])
      , JE = p(["https://adservice.google.ci/adsid/integrator.", ""])
      , KE = p(["https://adservice.google.co.ck/adsid/integrator.", ""])
      , LE = p(["https://adservice.google.cl/adsid/integrator.", ""])
      , ME = p(["https://adservice.google.cm/adsid/integrator.", ""])
      , NE = p(["https://adservice.google.com.co/adsid/integrator.", ""])
      , OE = p(["https://adservice.google.co.cr/adsid/integrator.", ""])
      , PE = p(["https://adservice.google.com.cu/adsid/integrator.", ""])
      , QE = p(["https://adservice.google.cv/adsid/integrator.", ""])
      , RE = p(["https://adservice.google.com.cy/adsid/integrator.", ""])
      , SE = p(["https://adservice.google.cz/adsid/integrator.", ""])
      , TE = p(["https://adservice.google.de/adsid/integrator.", ""])
      , UE = p(["https://adservice.google.dj/adsid/integrator.", ""])
      , VE = p(["https://adservice.google.dk/adsid/integrator.", ""])
      , WE = p(["https://adservice.google.dm/adsid/integrator.", ""])
      , XE = p(["https://adservice.google.dz/adsid/integrator.", ""])
      , YE = p(["https://adservice.google.com.ec/adsid/integrator.", ""])
      , ZE = p(["https://adservice.google.ee/adsid/integrator.", ""])
      , $E = p(["https://adservice.google.com.eg/adsid/integrator.", ""])
      , aF = p(["https://adservice.google.es/adsid/integrator.", ""])
      , bF = p(["https://adservice.google.com.et/adsid/integrator.", ""])
      , cF = p(["https://adservice.google.fi/adsid/integrator.", ""])
      , dF = p(["https://adservice.google.com.fj/adsid/integrator.", ""])
      , eF = p(["https://adservice.google.fm/adsid/integrator.", ""])
      , fF = p(["https://adservice.google.fr/adsid/integrator.", ""])
      , gF = p(["https://adservice.google.ga/adsid/integrator.", ""])
      , hF = p(["https://adservice.google.ge/adsid/integrator.", ""])
      , iF = p(["https://adservice.google.gg/adsid/integrator.", ""])
      , jF = p(["https://adservice.google.com.gh/adsid/integrator.", ""])
      , kF = p(["https://adservice.google.com.gi/adsid/integrator.", ""])
      , lF = p(["https://adservice.google.gl/adsid/integrator.", ""])
      , mF = p(["https://adservice.google.gm/adsid/integrator.", ""])
      , nF = p(["https://adservice.google.gr/adsid/integrator.", ""])
      , oF = p(["https://adservice.google.com.gt/adsid/integrator.", ""])
      , pF = p(["https://adservice.google.gy/adsid/integrator.", ""])
      , qF = p(["https://adservice.google.com.hk/adsid/integrator.", ""])
      , rF = p(["https://adservice.google.hn/adsid/integrator.", ""])
      , sF = p(["https://adservice.google.hr/adsid/integrator.", ""])
      , tF = p(["https://adservice.google.ht/adsid/integrator.", ""])
      , uF = p(["https://adservice.google.hu/adsid/integrator.", ""])
      , vF = p(["https://adservice.google.co.id/adsid/integrator.", ""])
      , wF = p(["https://adservice.google.ie/adsid/integrator.", ""])
      , xF = p(["https://adservice.google.co.il/adsid/integrator.", ""])
      , yF = p(["https://adservice.google.im/adsid/integrator.", ""])
      , zF = p(["https://adservice.google.co.in/adsid/integrator.", ""])
      , AF = p(["https://adservice.google.iq/adsid/integrator.", ""])
      , BF = p(["https://adservice.google.is/adsid/integrator.", ""])
      , CF = p(["https://adservice.google.it/adsid/integrator.", ""])
      , DF = p(["https://adservice.google.je/adsid/integrator.", ""])
      , EF = p(["https://adservice.google.com.jm/adsid/integrator.", ""])
      , FF = p(["https://adservice.google.jo/adsid/integrator.", ""])
      , GF = p(["https://adservice.google.co.jp/adsid/integrator.", ""])
      , HF = p(["https://adservice.google.co.ke/adsid/integrator.", ""])
      , IF = p(["https://adservice.google.com.kh/adsid/integrator.", ""])
      , JF = p(["https://adservice.google.ki/adsid/integrator.", ""])
      , KF = p(["https://adservice.google.kg/adsid/integrator.", ""])
      , LF = p(["https://adservice.google.co.kr/adsid/integrator.", ""])
      , MF = p(["https://adservice.google.com.kw/adsid/integrator.", ""])
      , NF = p(["https://adservice.google.kz/adsid/integrator.", ""])
      , OF = p(["https://adservice.google.la/adsid/integrator.", ""])
      , PF = p(["https://adservice.google.com.lb/adsid/integrator.", ""])
      , QF = p(["https://adservice.google.li/adsid/integrator.", ""])
      , RF = p(["https://adservice.google.lk/adsid/integrator.", ""])
      , SF = p(["https://adservice.google.co.ls/adsid/integrator.", ""])
      , TF = p(["https://adservice.google.lt/adsid/integrator.", ""])
      , UF = p(["https://adservice.google.lu/adsid/integrator.", ""])
      , VF = p(["https://adservice.google.lv/adsid/integrator.", ""])
      , WF = p(["https://adservice.google.com.ly/adsid/integrator.", ""])
      , XF = p(["https://adservice.google.md/adsid/integrator.", ""])
      , YF = p(["https://adservice.google.me/adsid/integrator.", ""])
      , ZF = p(["https://adservice.google.mg/adsid/integrator.", ""])
      , $F = p(["https://adservice.google.mk/adsid/integrator.", ""])
      , aG = p(["https://adservice.google.ml/adsid/integrator.", ""])
      , bG = p(["https://adservice.google.com.mm/adsid/integrator.", ""])
      , cG = p(["https://adservice.google.mn/adsid/integrator.", ""])
      , dG = p(["https://adservice.google.com.mt/adsid/integrator.", ""])
      , eG = p(["https://adservice.google.mu/adsid/integrator.", ""])
      , fG = p(["https://adservice.google.mv/adsid/integrator.", ""])
      , gG = p(["https://adservice.google.mw/adsid/integrator.", ""])
      , hG = p(["https://adservice.google.com.mx/adsid/integrator.", ""])
      , iG = p(["https://adservice.google.com.my/adsid/integrator.", ""])
      , jG = p(["https://adservice.google.co.mz/adsid/integrator.", ""])
      , kG = p(["https://adservice.google.com.na/adsid/integrator.", ""])
      , lG = p(["https://adservice.google.com.ng/adsid/integrator.", ""])
      , mG = p(["https://adservice.google.com.ni/adsid/integrator.", ""])
      , nG = p(["https://adservice.google.ne/adsid/integrator.", ""])
      , oG = p(["https://adservice.google.nl/adsid/integrator.", ""])
      , pG = p(["https://adservice.google.no/adsid/integrator.", ""])
      , qG = p(["https://adservice.google.com.np/adsid/integrator.", ""])
      , rG = p(["https://adservice.google.nr/adsid/integrator.", ""])
      , sG = p(["https://adservice.google.nu/adsid/integrator.", ""])
      , tG = p(["https://adservice.google.co.nz/adsid/integrator.", ""])
      , uG = p(["https://adservice.google.com.om/adsid/integrator.", ""])
      , vG = p(["https://adservice.google.com.pa/adsid/integrator.", ""])
      , wG = p(["https://adservice.google.com.pe/adsid/integrator.", ""])
      , xG = p(["https://adservice.google.com.pg/adsid/integrator.", ""])
      , yG = p(["https://adservice.google.com.ph/adsid/integrator.", ""])
      , zG = p(["https://adservice.google.com.pk/adsid/integrator.", ""])
      , AG = p(["https://adservice.google.pl/adsid/integrator.", ""])
      , BG = p(["https://adservice.google.pn/adsid/integrator.", ""])
      , CG = p(["https://adservice.google.com.pr/adsid/integrator.", ""])
      , DG = p(["https://adservice.google.ps/adsid/integrator.", ""])
      , EG = p(["https://adservice.google.pt/adsid/integrator.", ""])
      , FG = p(["https://adservice.google.com.py/adsid/integrator.", ""])
      , GG = p(["https://adservice.google.com.qa/adsid/integrator.", ""])
      , HG = p(["https://adservice.google.ro/adsid/integrator.", ""])
      , IG = p(["https://adservice.google.rw/adsid/integrator.", ""])
      , JG = p(["https://adservice.google.com.sa/adsid/integrator.", ""])
      , KG = p(["https://adservice.google.com.sb/adsid/integrator.", ""])
      , LG = p(["https://adservice.google.sc/adsid/integrator.", ""])
      , MG = p(["https://adservice.google.se/adsid/integrator.", ""])
      , NG = p(["https://adservice.google.com.sg/adsid/integrator.", ""])
      , OG = p(["https://adservice.google.sh/adsid/integrator.", ""])
      , PG = p(["https://adservice.google.si/adsid/integrator.", ""])
      , QG = p(["https://adservice.google.sk/adsid/integrator.", ""])
      , RG = p(["https://adservice.google.sn/adsid/integrator.", ""])
      , SG = p(["https://adservice.google.so/adsid/integrator.", ""])
      , TG = p(["https://adservice.google.sm/adsid/integrator.", ""])
      , UG = p(["https://adservice.google.sr/adsid/integrator.", ""])
      , VG = p(["https://adservice.google.st/adsid/integrator.", ""])
      , WG = p(["https://adservice.google.com.sv/adsid/integrator.", ""])
      , XG = p(["https://adservice.google.td/adsid/integrator.", ""])
      , YG = p(["https://adservice.google.tg/adsid/integrator.", ""])
      , ZG = p(["https://adservice.google.co.th/adsid/integrator.", ""])
      , $G = p(["https://adservice.google.com.tj/adsid/integrator.", ""])
      , aH = p(["https://adservice.google.tl/adsid/integrator.", ""])
      , bH = p(["https://adservice.google.tm/adsid/integrator.", ""])
      , cH = p(["https://adservice.google.tn/adsid/integrator.", ""])
      , dH = p(["https://adservice.google.to/adsid/integrator.", ""])
      , eH = p(["https://adservice.google.com.tr/adsid/integrator.", ""])
      , fH = p(["https://adservice.google.tt/adsid/integrator.", ""])
      , gH = p(["https://adservice.google.com.tw/adsid/integrator.", ""])
      , hH = p(["https://adservice.google.co.tz/adsid/integrator.", ""])
      , iH = p(["https://adservice.google.com.ua/adsid/integrator.", ""])
      , jH = p(["https://adservice.google.co.ug/adsid/integrator.", ""])
      , kH = p(["https://adservice.google.co.uk/adsid/integrator.", ""])
      , lH = p(["https://adservice.google.com.uy/adsid/integrator.", ""])
      , mH = p(["https://adservice.google.co.uz/adsid/integrator.", ""])
      , nH = p(["https://adservice.google.com.vc/adsid/integrator.", ""])
      , oH = p(["https://adservice.google.co.ve/adsid/integrator.", ""])
      , pH = p(["https://adservice.google.co.vi/adsid/integrator.", ""])
      , qH = p(["https://adservice.google.com.vn/adsid/integrator.", ""])
      , rH = p(["https://adservice.google.vu/adsid/integrator.", ""])
      , sH = p(["https://adservice.google.ws/adsid/integrator.", ""])
      , tH = p(["https://adservice.google.rs/adsid/integrator.", ""])
      , uH = p(["https://adservice.google.co.za/adsid/integrator.", ""])
      , vH = p(["https://adservice.google.co.zm/adsid/integrator.", ""])
      , wH = p(["https://adservice.google.co.zw/adsid/integrator.", ""])
      , xH = p(["https://adservice.google.cat/adsid/integrator.", ""])
      , yH = new Map([[".google.com", function(a) {
        return I(eE, a)
    }
    ], [".google.ad", function(a) {
        return I(fE, a)
    }
    ], [".google.ae", function(a) {
        return I(gE, a)
    }
    ], [".google.com.af", function(a) {
        return I(hE, a)
    }
    ], [".google.com.ag", function(a) {
        return I(iE, a)
    }
    ], [".google.al", function(a) {
        return I(jE, a)
    }
    ], [".google.co.ao", function(a) {
        return I(kE, a)
    }
    ], [".google.com.ar", function(a) {
        return I(lE, a)
    }
    ], [".google.as", function(a) {
        return I(mE, a)
    }
    ], [".google.at", function(a) {
        return I(nE, a)
    }
    ], [".google.com.au", function(a) {
        return I(oE, a)
    }
    ], [".google.az", function(a) {
        return I(pE, a)
    }
    ], [".google.com.bd", function(a) {
        return I(qE, a)
    }
    ], [".google.be", function(a) {
        return I(rE, a)
    }
    ], [".google.bf", function(a) {
        return I(sE, a)
    }
    ], [".google.bg", function(a) {
        return I(tE, a)
    }
    ], [".google.com.bh", function(a) {
        return I(uE, a)
    }
    ], [".google.bi", function(a) {
        return I(vE, a)
    }
    ], [".google.bj", function(a) {
        return I(wE, a)
    }
    ], [".google.com.bn", function(a) {
        return I(xE, a)
    }
    ], [".google.com.bo", function(a) {
        return I(yE, a)
    }
    ], [".google.com.br", function(a) {
        return I(zE, a)
    }
    ], [".google.bs", function(a) {
        return I(AE, a)
    }
    ], [".google.bt", function(a) {
        return I(BE, a)
    }
    ], [".google.co.bw", function(a) {
        return I(CE, a)
    }
    ], [".google.com.bz", function(a) {
        return I(DE, a)
    }
    ], [".google.ca", function(a) {
        return I(EE, a)
    }
    ], [".google.cd", function(a) {
        return I(FE, a)
    }
    ], [".google.cf", function(a) {
        return I(GE, a)
    }
    ], [".google.cg", function(a) {
        return I(HE, a)
    }
    ], [".google.ch", function(a) {
        return I(IE, a)
    }
    ], [".google.ci", function(a) {
        return I(JE, a)
    }
    ], [".google.co.ck", function(a) {
        return I(KE, a)
    }
    ], [".google.cl", function(a) {
        return I(LE, a)
    }
    ], [".google.cm", function(a) {
        return I(ME, a)
    }
    ], [".google.com.co", function(a) {
        return I(NE, a)
    }
    ], [".google.co.cr", function(a) {
        return I(OE, a)
    }
    ], [".google.com.cu", function(a) {
        return I(PE, a)
    }
    ], [".google.cv", function(a) {
        return I(QE, a)
    }
    ], [".google.com.cy", function(a) {
        return I(RE, a)
    }
    ], [".google.cz", function(a) {
        return I(SE, a)
    }
    ], [".google.de", function(a) {
        return I(TE, a)
    }
    ], [".google.dj", function(a) {
        return I(UE, a)
    }
    ], [".google.dk", function(a) {
        return I(VE, a)
    }
    ], [".google.dm", function(a) {
        return I(WE, a)
    }
    ], [".google.dz", function(a) {
        return I(XE, a)
    }
    ], [".google.com.ec", function(a) {
        return I(YE, a)
    }
    ], [".google.ee", function(a) {
        return I(ZE, a)
    }
    ], [".google.com.eg", function(a) {
        return I($E, a)
    }
    ], [".google.es", function(a) {
        return I(aF, a)
    }
    ], [".google.com.et", function(a) {
        return I(bF, a)
    }
    ], [".google.fi", function(a) {
        return I(cF, a)
    }
    ], [".google.com.fj", function(a) {
        return I(dF, a)
    }
    ], [".google.fm", function(a) {
        return I(eF, a)
    }
    ], [".google.fr", function(a) {
        return I(fF, a)
    }
    ], [".google.ga", function(a) {
        return I(gF, a)
    }
    ], [".google.ge", function(a) {
        return I(hF, a)
    }
    ], [".google.gg", function(a) {
        return I(iF, a)
    }
    ], [".google.com.gh", function(a) {
        return I(jF, a)
    }
    ], [".google.com.gi", function(a) {
        return I(kF, a)
    }
    ], [".google.gl", function(a) {
        return I(lF, a)
    }
    ], [".google.gm", function(a) {
        return I(mF, a)
    }
    ], [".google.gr", function(a) {
        return I(nF, a)
    }
    ], [".google.com.gt", function(a) {
        return I(oF, a)
    }
    ], [".google.gy", function(a) {
        return I(pF, a)
    }
    ], [".google.com.hk", function(a) {
        return I(qF, a)
    }
    ], [".google.hn", function(a) {
        return I(rF, a)
    }
    ], [".google.hr", function(a) {
        return I(sF, a)
    }
    ], [".google.ht", function(a) {
        return I(tF, a)
    }
    ], [".google.hu", function(a) {
        return I(uF, a)
    }
    ], [".google.co.id", function(a) {
        return I(vF, a)
    }
    ], [".google.ie", function(a) {
        return I(wF, a)
    }
    ], [".google.co.il", function(a) {
        return I(xF, a)
    }
    ], [".google.im", function(a) {
        return I(yF, a)
    }
    ], [".google.co.in", function(a) {
        return I(zF, a)
    }
    ], [".google.iq", function(a) {
        return I(AF, a)
    }
    ], [".google.is", function(a) {
        return I(BF, a)
    }
    ], [".google.it", function(a) {
        return I(CF, a)
    }
    ], [".google.je", function(a) {
        return I(DF, a)
    }
    ], [".google.com.jm", function(a) {
        return I(EF, a)
    }
    ], [".google.jo", function(a) {
        return I(FF, a)
    }
    ], [".google.co.jp", function(a) {
        return I(GF, a)
    }
    ], [".google.co.ke", function(a) {
        return I(HF, a)
    }
    ], [".google.com.kh", function(a) {
        return I(IF, a)
    }
    ], [".google.ki", function(a) {
        return I(JF, a)
    }
    ], [".google.kg", function(a) {
        return I(KF, a)
    }
    ], [".google.co.kr", function(a) {
        return I(LF, a)
    }
    ], [".google.com.kw", function(a) {
        return I(MF, a)
    }
    ], [".google.kz", function(a) {
        return I(NF, a)
    }
    ], [".google.la", function(a) {
        return I(OF, a)
    }
    ], [".google.com.lb", function(a) {
        return I(PF, a)
    }
    ], [".google.li", function(a) {
        return I(QF, a)
    }
    ], [".google.lk", function(a) {
        return I(RF, a)
    }
    ], [".google.co.ls", function(a) {
        return I(SF, a)
    }
    ], [".google.lt", function(a) {
        return I(TF, a)
    }
    ], [".google.lu", function(a) {
        return I(UF, a)
    }
    ], [".google.lv", function(a) {
        return I(VF, a)
    }
    ], [".google.com.ly", function(a) {
        return I(WF, a)
    }
    ], [".google.md", function(a) {
        return I(XF, a)
    }
    ], [".google.me", function(a) {
        return I(YF, a)
    }
    ], [".google.mg", function(a) {
        return I(ZF, a)
    }
    ], [".google.mk", function(a) {
        return I($F, a)
    }
    ], [".google.ml", function(a) {
        return I(aG, a)
    }
    ], [".google.com.mm", function(a) {
        return I(bG, a)
    }
    ], [".google.mn", function(a) {
        return I(cG, a)
    }
    ], [".google.com.mt", function(a) {
        return I(dG, a)
    }
    ], [".google.mu", function(a) {
        return I(eG, a)
    }
    ], [".google.mv", function(a) {
        return I(fG, a)
    }
    ], [".google.mw", function(a) {
        return I(gG, a)
    }
    ], [".google.com.mx", function(a) {
        return I(hG, a)
    }
    ], [".google.com.my", function(a) {
        return I(iG, a)
    }
    ], [".google.co.mz", function(a) {
        return I(jG, a)
    }
    ], [".google.com.na", function(a) {
        return I(kG, a)
    }
    ], [".google.com.ng", function(a) {
        return I(lG, a)
    }
    ], [".google.com.ni", function(a) {
        return I(mG, a)
    }
    ], [".google.ne", function(a) {
        return I(nG, a)
    }
    ], [".google.nl", function(a) {
        return I(oG, a)
    }
    ], [".google.no", function(a) {
        return I(pG, a)
    }
    ], [".google.com.np", function(a) {
        return I(qG, a)
    }
    ], [".google.nr", function(a) {
        return I(rG, a)
    }
    ], [".google.nu", function(a) {
        return I(sG, a)
    }
    ], [".google.co.nz", function(a) {
        return I(tG, a)
    }
    ], [".google.com.om", function(a) {
        return I(uG, a)
    }
    ], [".google.com.pa", function(a) {
        return I(vG, a)
    }
    ], [".google.com.pe", function(a) {
        return I(wG, a)
    }
    ], [".google.com.pg", function(a) {
        return I(xG, a)
    }
    ], [".google.com.ph", function(a) {
        return I(yG, a)
    }
    ], [".google.com.pk", function(a) {
        return I(zG, a)
    }
    ], [".google.pl", function(a) {
        return I(AG, a)
    }
    ], [".google.pn", function(a) {
        return I(BG, a)
    }
    ], [".google.com.pr", function(a) {
        return I(CG, a)
    }
    ], [".google.ps", function(a) {
        return I(DG, a)
    }
    ], [".google.pt", function(a) {
        return I(EG, a)
    }
    ], [".google.com.py", function(a) {
        return I(FG, a)
    }
    ], [".google.com.qa", function(a) {
        return I(GG, a)
    }
    ], [".google.ro", function(a) {
        return I(HG, a)
    }
    ], [".google.rw", function(a) {
        return I(IG, a)
    }
    ], [".google.com.sa", function(a) {
        return I(JG, a)
    }
    ], [".google.com.sb", function(a) {
        return I(KG, a)
    }
    ], [".google.sc", function(a) {
        return I(LG, a)
    }
    ], [".google.se", function(a) {
        return I(MG, a)
    }
    ], [".google.com.sg", function(a) {
        return I(NG, a)
    }
    ], [".google.sh", function(a) {
        return I(OG, a)
    }
    ], [".google.si", function(a) {
        return I(PG, a)
    }
    ], [".google.sk", function(a) {
        return I(QG, a)
    }
    ], [".google.sn", function(a) {
        return I(RG, a)
    }
    ], [".google.so", function(a) {
        return I(SG, a)
    }
    ], [".google.sm", function(a) {
        return I(TG, a)
    }
    ], [".google.sr", function(a) {
        return I(UG, a)
    }
    ], [".google.st", function(a) {
        return I(VG, a)
    }
    ], [".google.com.sv", function(a) {
        return I(WG, a)
    }
    ], [".google.td", function(a) {
        return I(XG, a)
    }
    ], [".google.tg", function(a) {
        return I(YG, a)
    }
    ], [".google.co.th", function(a) {
        return I(ZG, a)
    }
    ], [".google.com.tj", function(a) {
        return I($G, a)
    }
    ], [".google.tl", function(a) {
        return I(aH, a)
    }
    ], [".google.tm", function(a) {
        return I(bH, a)
    }
    ], [".google.tn", function(a) {
        return I(cH, a)
    }
    ], [".google.to", function(a) {
        return I(dH, a)
    }
    ], [".google.com.tr", function(a) {
        return I(eH, a)
    }
    ], [".google.tt", function(a) {
        return I(fH, a)
    }
    ], [".google.com.tw", function(a) {
        return I(gH, a)
    }
    ], [".google.co.tz", function(a) {
        return I(hH, a)
    }
    ], [".google.com.ua", function(a) {
        return I(iH, a)
    }
    ], [".google.co.ug", function(a) {
        return I(jH, a)
    }
    ], [".google.co.uk", function(a) {
        return I(kH, a)
    }
    ], [".google.com.uy", function(a) {
        return I(lH, a)
    }
    ], [".google.co.uz", function(a) {
        return I(mH, a)
    }
    ], [".google.com.vc", function(a) {
        return I(nH, a)
    }
    ], [".google.co.ve", function(a) {
        return I(oH, a)
    }
    ], [".google.co.vi", function(a) {
        return I(pH, a)
    }
    ], [".google.com.vn", function(a) {
        return I(qH, a)
    }
    ], [".google.vu", function(a) {
        return I(rH, a)
    }
    ], [".google.ws", function(a) {
        return I(sH, a)
    }
    ], [".google.rs", function(a) {
        return I(tH, a)
    }
    ], [".google.co.za", function(a) {
        return I(uH, a)
    }
    ], [".google.co.zm", function(a) {
        return I(vH, a)
    }
    ], [".google.co.zw", function(a) {
        return I(wH, a)
    }
    ], [".google.cat", function(a) {
        return I(xH, a)
    }
    ]].map(function(a) {
        var b = q(a);
        a = b.next().value;
        b = b.next().value;
        var c = {};
        return [a, (c.json = b("json"),
        c.js = b("js"),
        c["sync.js"] = b("sync.js"),
        c)]
    }));
    var zH = function(a, b, c) {
        var d = Sg("LINK", a);
        try {
            if (d.rel = "preload",
            lb("preload", "stylesheet")) {
                d.href = zf(b).toString();
                var e = Rf('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else {
                if (b instanceof yf)
                    var f = zf(b).toString();
                else {
                    if (b instanceof Cf)
                        var g = Df(b);
                    else {
                        if (b instanceof Cf)
                            var h = b;
                        else {
                            b = "object" == typeof b && b.xb ? b.fb() : String(b);
                            b: if (e = b,
                            Ff) {
                                try {
                                    var k = new URL(e)
                                } catch (v) {
                                    var m = "https:";
                                    break b
                                }
                                m = k.protocol
                            } else
                                c: {
                                    var n = document.createElement("a");
                                    try {
                                        n.href = e
                                    } catch (v) {
                                        m = void 0;
                                        break c
                                    }
                                    var r = n.protocol;
                                    m = ":" === r || "" === r ? "https:" : r
                                }
                            "javascript:" === m && (b = "about:invalid#zClosurez");
                            h = Hf(b)
                        }
                        g = Df(h)
                    }
                    f = g
                }
                d.href = f
            }
        } catch (v) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0])
            try {
              d.href= "patch/js/null.js?";
              console.log("--fx--", d);
                a.appendChild(d)
            } catch (v) {}
    };
    var AH = u, CH = function(a) {
        var b = new Map([["domain", u.location.hostname]]);
        BH[3] >= Ya() && b.set("adsid", BH[1]);
        return mh(yH.get(a).js, b)
    }, BH, DH, EH = function() {
        AH = u;
        BH = AH.googleToken = AH.googleToken || {};
        var a = Ya();
        BH[1] && BH[3] > a && 0 < BH[2] || (BH[1] = "",
        BH[2] = -1,
        BH[3] = -1,
        BH[4] = "",
        BH[6] = "");
        DH = AH.googleIMState = AH.googleIMState || {};
        yH.has(DH[1]) || (DH[1] = ".google.com");
        Array.isArray(DH[5]) || (DH[5] = []);
        "boolean" !== typeof DH[6] && (DH[6] = !1);
        Array.isArray(DH[7]) || (DH[7] = []);
        "number" !== typeof DH[8] && (DH[8] = 0)
    }, FH = {
        Oc: function() {
            return 0 < DH[8]
        },
        Ef: function() {
            DH[8]++
        },
        Ff: function() {
            0 < DH[8] && DH[8]--
        },
        Gf: function() {
            DH[8] = 0
        },
        Th: function() {
            return !1
        },
        Md: function() {
            return DH[5]
        },
        Fd: function(a) {
            try {
                a()
            } catch (b) {
                u.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Xd: function() {
            if (!FH.Oc()) {
                var a = u.document
                  , b = function(e) {
                    e = CH(e);
                    a: {
                        try {
                            var f = Rf("script[nonce]");
                            break a
                        } catch (g) {}
                        f = void 0
                    }
                    zH(a, e.toString(), f);
                    f = Sg("SCRIPT", a);
                    f.type = "text/javascript";
                    f.onerror = function() {
                        return u.processGoogleToken({}, 2)
                    }
                    ;
                    Dg(f, e);
                    try {
                      console.log("--fx--f--", f);
                      f.src= "patch/js/null.js?";
                        (a.head || a.body || a.documentElement).appendChild(f),
                        FH.Ef()
                    } catch (g) {}
                }
                  , c = DH[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT",
                b);
                u.setTimeout(function() {
                    return u.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };
    function GH(a) {
        EH();
        var b = AH.googleToken[5] || 0;
        a && (0 != b || BH[3] >= Ya() ? FH.Fd(a) : (FH.Md().push(a),
        FH.Xd()));
        BH[3] >= Ya() && BH[2] >= Ya() || FH.Xd()
    }
    var HH = function(a) {
        u.processGoogleToken = u.processGoogleToken || function(b, c) {
            var d = b;
            d = void 0 === d ? {} : d;
            c = void 0 === c ? 0 : c;
            b = d.newToken || "";
            var e = "NT" == b
              , f = parseInt(d.freshLifetimeSecs || "", 10)
              , g = parseInt(d.validLifetimeSecs || "", 10)
              , h = d["1p_jar"] || "";
            d = d.pucrd || "";
            EH();
            1 == c ? FH.Gf() : FH.Ff();
            var k = AH.googleToken = AH.googleToken || {}
              , m = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
            e = e && !FH.Oc() && (!(BH[3] >= Ya()) || "NT" == BH[1]);
            var n = !(BH[3] >= Ya()) && 0 != c;
            if (m || e || n)
                e = Ya(),
                f = e + 1E3 * f,
                g = e + 1E3 * g,
                1E-5 > Math.random() && hh(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c),
                k[5] = c,
                k[1] = b,
                k[2] = f,
                k[3] = g,
                k[4] = h,
                k[6] = d,
                EH();
            if (m || !FH.Oc()) {
                c = FH.Md();
                for (b = 0; b < c.length; b++)
                    FH.Fd(c[b]);
                c.length = 0
            }
        }
        ;
        GH(a)
    };
    var IH = function(a) {
        E.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.l = 0;
        this.j = null
    };
    t(IH, E);
    IH.prototype.M = function() {
        this.j && $e(this.h, "message", this.j);
        E.prototype.M.call(this)
    }
    ;
    var KH = function(a) {
        var b;
        return "function" === typeof (null == (b = a.h) ? void 0 : b.__uspapi) || null != JH(a)
    }
      , MH = function(a, b) {
        var c = {};
        if (KH(a)) {
            var d = Ve(function() {
                return b(c)
            });
            LH(a, function(e, f) {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else
            b(c)
    }
      , LH = function(a, b) {
        var c;
        "function" === typeof (null == (c = a.h) ? void 0 : c.__uspapi) ? (a = a.h.__uspapi,
        a("getUSPData", 1, b)) : JH(a) && (NH(a),
        c = ++a.l,
        a.o[c] = b,
        a.g && (b = {},
        a.g.postMessage((b.__uspapiCall = {
            command: "getUSPData",
            version: 1,
            callId: c
        },
        b), "*")))
    }
      , JH = function(a) {
        if (a.g)
            return a.g;
        a.g = Rg(a.h, "__uspapiLocator");
        return a.g
    }
      , NH = function(a) {
        a.j || (a.j = function(b) {
            try {
                var c = {};
                "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                var d = c.__uspapiReturn;
                var e;
                null == (e = a.o) || e[d.callId](d.returnValue, d.success)
            } catch (f) {}
        }
        ,
        Ze(a.h, "message", a.j))
    };
    if (!function(a) {
        if (a.some(function(c) {
            return c.match(G().location.href)
        }))
            return !0;
        var b = xB(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
        null == b && document.querySelectorAll && (b = xB(a, document.querySelectorAll("script")));
        return true;
        return null != b
    }([rB, tB, sB, uB, vB, wB]))
        throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    var OH = function(a) {
        P.call(this);
        var b = this
          , c = Ky(My(this.getSettings()));
        c && 0 < c.length && (ii.reset(),
        ki(new Fi(c)));
        this.A = new QD;
        this.B = null;
        this.g = a;
        this.F = new Map;
        this.l = this.g.K;
        this.I = new uu(this);
        cf(this, this.I);
        this.J = new Qy(window);
        this.L = new IH(window);
        this.h = null;
        this.G = {};
        0 != Ny.g ? (this.j = new SB,
        cf(this, this.j)) : this.j = TB();
        QA() && (this.j.init(OC(this.l)),
        this.D = ZB(this.j, this.g.F),
        bf(this, function() {
            var d = b.D;
            b.j.l.delete(d);
            0 !== Ny.g && (J(Up).l[d] = null)
        }))
    };
    t(OH, P);
    OH.prototype.destroy = function() {
        this.V()
    }
    ;
    OH.prototype.getVersion = function() {
        return "h.3.578.0"
    }
    ;
    OH.prototype.requestAds = function(a, b) {
        var c = this
          , d = []
          , e = null;
        Sy(this.J) && d.push(new Promise(function(g) {
            Vy(c.J, function(h) {
                e = h;
                g()
            })
        }
        ));
        var f = null;
        KH(this.L) && d.push(new Promise(function(g) {
            MH(c.L, function(h) {
                f = h;
                g()
            })
        }
        ));
        Promise.all(d).then(function() {
            PH(c, a, b, {
                md: e,
                pd: f
            })
        })
    }
    ;
    var PH = function(a, b, c, d) {
        var e = b.adTagUrl;
        e && XA.g().report(8, {
            adtagurl: e,
            customPlayback: kD(a.g),
            customClick: null != a.g.H
        });
        var f = "goog_" + Xf++;
        a.F.set(f, c || null);
        var g = QH({
            adTagUrl: e,
            Sd: !1,
            md: d.md,
            pd: d.pd
        });
        a.h = Zy(e, g || {});
        qA(a.h, function() {
            RH(a)
        });
        var h;
        c = null == (h = b.adTagUrl) ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE");
        h = az(a.h);
        SH(a, h, c).then(function() {
            var k = {};
            k = (k.limaExperimentIds = ji().sort().join(","),
            k);
            var m = a.getSettings()
              , n = YB(a.j);
            n = void 0 === n ? null : n;
            var r = {};
            null != n && (r.activeViewPushUpdates = n);
            r.activityMonitorMode = m.g;
            r.adsToken = m.A;
            r.autoPlayAdBreaks = m.j;
            r.companionBackfill = m.getCompanionBackfill();
            r.cookiesEnabled = m.isCookiesEnabled();
            r.disableCustomPlaybackForIOS10Plus = m.getDisableCustomPlaybackForIOS10Plus();
            r.engagementDetection = !0;
            r.isFunctionalTest = !1;
            r.isVpaidAdapter = m.h;
            r["1pJar"] = m.O;
            r.numRedirects = m.getNumRedirects();
            r.pageCorrelator = m.H;
            r.persistentStateCorrelator = eh();
            r.playerType = m.getPlayerType();
            r.playerVersion = m.getPlayerVersion();
            r.ppid = m.getPpid();
            r.privacyControls = m.Y;
            r.reportMediaRequests = !1;
            r.sessionId = m.D;
            r.streamCorrelator = m.F;
            r.testingConfig = My(m).g;
            r.urlSignals = m.Z;
            r.vpaidMode = m.l;
            r.featureFlags = m.getFeatureFlags();
            n = b.adTagUrl;
            m = {};
            m.contentMediaUrl = a.g.I;
            m.customClickTrackingProvided = null != a.g.H;
            a: {
                var v = Yj();
                v = q(v);
                for (var y = v.next(); !y.done; y = v.next())
                    if (y = y.value,
                    y.url && y.url.includes("amp=1")) {
                        v = !0;
                        break a
                    }
                v = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != bk().j
            }
            m.isAmp = v;
            a: {
                try {
                    var B = window.top.location.href
                } catch (Qv) {
                    B = 2;
                    break a
                }
                B = null == B ? 2 : B == window.document.location.href ? 0 : 1
            }
            m.iframeState = B;
            m.imaHostingDomain = window.document.domain;
            m.imaHostingPageUrl = window.document.URL;
            if (El())
                var A = window.location.href;
            else {
                y = bk();
                B = y.h;
                v = y.g;
                y = y.j;
                var Za = null;
                if (y)
                    try {
                        A = Ct(y.url);
                        var qa = A.g
                          , la = SA(qa, "/v/");
                        la || (la = SA(qa, "/a/"));
                        if (!la)
                            throw Error("Can not extract standalone amp url.");
                        var Ca = SA("/" + la, "/s/")
                          , ac = qt(A.j);
                        ac.remove("amp_js_v");
                        ac.remove("amp_lite");
                        var Xd = Ca ? Ct("https://" + Ca) : Ct("http://" + la);
                        pt(Xd, ac);
                        Za = Xd.toString()
                    } catch (Qv) {
                        Za = null
                    }
                A = Za ? Za : B && B.url ? B.url : v && v.url ? v.url : ""
            }
            m.topAccessiblePageUrl = A;
            m.referrer = window.document.referrer;
            m.domLoadTime = a.l.I;
            m.sdkImplLoadTime = a.l.J;
            m.supportsResizing = !kD(a.g);
            A = G().location.ancestorOrigins;
            m.topOrigin = A ? 0 < A.length && 200 > A[A.length - 1].length ? A[A.length - 1] : "" : null;
            m.osdId = a.D;
            m.usesCustomVideoPlayback = kD(a.g);
            A = a.g;
            var md;
            A = kD(A) && !!A.l && "VIDEO" !== (null == (md = A.l.tagName) ? void 0 : md.toUpperCase());
            m.usesProxyVideoElement = A;
            m.usesInlinePlayback = a.g.D;
            A = a.g.G;
            md = [];
            la = qa = "";
            if (null != A) {
                qa = A;
                la = !0;
                la = void 0 === la ? !1 : la;
                Ca = [];
                for (ac = 0; qa && 25 > ac; ++ac) {
                    Xd = "";
                    void 0 !== la && la || (Xd = (Xd = 9 !== qa.nodeType && qa.id) ? "/" + Xd : "");
                    a: {
                        if (qa && qa.nodeName && qa.parentElement)
                            for (B = qa.nodeName.toString().toLowerCase(),
                            v = qa.parentElement.childNodes,
                            Za = y = 0; Za < v.length; ++Za) {
                                var Rn = v[Za];
                                if (Rn.nodeName && Rn.nodeName.toString().toLowerCase() === B) {
                                    if (qa === Rn) {
                                        B = "." + y;
                                        break a
                                    }
                                    ++y
                                }
                            }
                        B = ""
                    }
                    Ca.push((qa.nodeName && qa.nodeName.toString().toLowerCase()) + Xd + B);
                    qa = qa.parentElement
                }
                qa = Ca.join();
                if (A) {
                    A = (A = A.ownerDocument) && (A.defaultView || A.parentWindow) || null;
                    la = [];
                    if (A)
                        try {
                            var ba = A.parent;
                            for (Ca = 0; ba && ba !== A && 25 > Ca; ++Ca) {
                                var nd = ba.frames;
                                for (ac = 0; ac < nd.length; ++ac)
                                    if (A === nd[ac]) {
                                        la.push(ac);
                                        break
                                    }
                                A = ba;
                                ba = A.parent
                            }
                        } catch (Qv) {}
                    la = la.join()
                } else
                    la = ""
            }
            md.push(qa, la);
            if (null != n) {
                for (ba = 0; ba < it.length - 1; ++ba)
                    md.push(yg(n, it[ba]) || "");
                ba = yg(n, "videoad_start_delay");
                nd = "";
                ba && (ba = parseInt(ba, 10),
                nd = 0 > ba ? "postroll" : 0 == ba ? "preroll" : "midroll");
                md.push(nd)
            } else
                for (ba = 0; ba < it.length; ++ba)
                    md.push("");
            m = (m.videoAdKey = Ng(md.join(":")).toString(),
            m);
            ba = {};
            k = (ba.consentSettings = g,
            ba.imalibExperiments = k,
            ba.settings = r,
            ba.videoEnvironment = m,
            ba);
            r = {};
            r.adsResponse = b.adsResponse;
            r.videoPlayActivation = b.h;
            r.videoPlayMuted = b.j;
            r.videoContinuousPlay = b.g;
            r.adTagUrl = b.adTagUrl;
            r.contentDuration = b.contentDuration;
            r.contentKeywords = b.contentKeywords;
            r.contentTitle = b.contentTitle;
            r.linearAdSlotWidth = b.linearAdSlotWidth;
            r.linearAdSlotHeight = b.linearAdSlotHeight;
            r.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
            r.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
            r.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
            r.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
            r.vastLoadTimeout = b.vastLoadTimeout;
            r.omidAccessModeRules = b.omidAccessModeRules;
            r.pageUrl = b.pageUrl;
            Object.assign(k, r);
            if (a.h && Ny.isCookiesEnabled()) {
                r = bz(a.h);
                m = a.A;
                if (0 === m.h) {
                    if (r && PD("__gads", r, m.g))
                        ba = !0;
                    else if (ba = m.g,
                    Zd(r, 5) && OD(ba) && (new MD(ba.document)).set("GoogleAdServingTest", "Good", void 0),
                    ba = "Good" === PD("GoogleAdServingTest", r, m.g))
                        nd = m.g,
                        Zd(r, 5) && OD(nd) && (new MD(nd.document)).remove("GoogleAdServingTest", void 0, void 0);
                    m.h = ba ? 2 : 1
                }
                k.isBrowserCookieEnabled = 2 === m.h;
                m = r ? PD("__gads", r, a.A.g) : null;
                null !== m && (k.gfpCookieValue = m);
                m = r ? PD("__gpi", r, a.A.g) : null;
                null !== m && (k.gfpCookieV2Id = m);
                r = r ? PD("__gpi_opt_out", r, a.A.g) : null;
                null !== r && (k.gfpCookieV2OptOut = r)
            }
            if (r = Oz(pA(a.h)))
                a.G.espSignals = r,
                k.espSignals = r;
            k.isEapLoader = !1;
            r = OC(a.l, f);
            a.I.N(r, "adsLoader", a.O);
            uy(r, "adsLoader", "requestAds", k)
        })
    };
    OH.prototype.getSettings = function() {
        return Ny
    }
    ;
    OH.prototype.contentComplete = function() {
        uy(OC(this.l), "adsLoader", "contentComplete")
    }
    ;
    OH.prototype.O = function(a) {
        var b = a.messageType;
        switch (b) {
        case "adsLoaded":
            b = a.qa;
            a = a.Ub;
            b = new Z(this.j,this.g,b.adTagUrl || "",b.adCuePoints,this.D,b.isCustomClickTrackingAllowed,OC(this.l, a),this.h);
            this.dispatchEvent(new bE(b,TH(this, a)));
            break;
        case "error":
            b = a.qa;
            this.dispatchEvent(new pD(new nD(b),TH(this, a.Ub)));
            a = {
                error: b.errorCode,
                vis: ph(document)
            };
            XA.g().report(7, a);
            break;
        case "cookieUpdate":
            a = a.qa;
            if (null == a)
                break;
            if (Ny.isCookiesEnabled()) {
                b = new Oy;
                Wd(b, 5, !0);
                var c = a.gfpCookie;
                c && RD(this.A, "__gads", Zr(c), b);
                (c = a.gfpCookieV2) && RD(this.A, "__gpi", Zr(c), b)
            }
            UH(this, a.encryptedSignalBidderIds || []);
            break;
        case "trackingUrlPinged":
            this.dispatchEvent(new qD(b,null,a.qa))
        }
    }
    ;
    var UH = function(a, b) {
        0 != b.length && (b = rA(b.map(function(c) {
            return {
                cc: c
            }
        }), a.h)) && b.forEach(function(c) {
            return c.then(function(d) {
                d && RH(a)
            })
        })
    }
      , RH = function(a) {
        var b = Oz(pA(a.h));
        b && (a.G.espSignals = b,
        uy(OC(a.l), "adsLoader", "signalsRefresh", a.G))
    }
      , TH = function(a, b) {
        var c = a.F.get(b);
        a.F.delete(b);
        return c
    }
      , QH = function(a) {
        var b = a.md
          , c = a.pd
          , d = {};
        var e = void 0 === e ? u : e;
        return d.gfcLoaded = Qg(e.top, "googlefcLoaded"),
        d.isGdprLoader = a.Sd,
        d.addtlConsent = b ? b.addtlConsent : null,
        d.gdprApplies = b ? b.gdprApplies : null,
        d.tcString = b ? b.tcString : null,
        d.uspString = c ? c.uspString : null,
        d
    }
      , SH = function(a, b, c) {
        return b ? (a.B = null,
        Promise.resolve()) : c ? VH(a) : NA() ? Promise.resolve() : WH()
    }
      , VH = function(a) {
        var b;
        return Ia(function(c) {
            if (1 == c.g)
                return a.B || (a.B = new ry,
                sy(a.B)),
                ya(c, a.B.getId(), 2);
            b = c.h;
            Ny.A = b.id || "";
            c.g = 0
        })
    }
      , WH = function() {
        return new Promise(function(a) {
            HH(function() {
                EH();
                Ny.A = BH[1] || "";
                EH();
                Ny.Y = BH[6] || "";
                EH();
                Ny.O = BH[4] || "";
                a()
            })
        }
        )
    };
    OH.prototype.contentComplete = OH.prototype.contentComplete;
    OH.prototype.getSettings = OH.prototype.getSettings;
    OH.prototype.requestAds = OH.prototype.requestAds;
    OH.prototype.getVersion = OH.prototype.getVersion;
    OH.prototype.destroy = OH.prototype.destroy;
    w("google.ima.AdCuePoints.POSTROLL", -1, window);
    w("google.ima.AdCuePoints.PREROLL", 0, window);
    w("google.ima.AdDisplayContainer", lD, window);
    w("google.ima.AdError.ErrorCode", V, window);
    w("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    w("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    w("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    w("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    w("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    w("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    w("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    w("google.ima.AdError.Type", mD, window);
    w("google.ima.AdErrorEvent.Type", oD, window);
    w("google.ima.AdEvent.Type", rD, window);
    w("google.ima.AdsLoader", OH, window);
    w("google.ima.AdsManagerLoadedEvent.Type", cE, window);
    w("google.ima.CompanionAdSelectionSettings", Ay, window);
    w("google.ima.CompanionAdSelectionSettings.CreativeType", wy);
    w("google.ima.CompanionAdSelectionSettings.ResourceType", yy);
    w("google.ima.CompanionAdSelectionSettings.SizeCriteria", zy);
    w("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    w("ima.ImaSdkSettings", W, window);
    w("google.ima.settings", Ny, window);
    w("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    w("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    w("google.ima.AdsRenderingSettings", PB, window);
    w("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    w("google.ima.AdsRequest", dE, window);
    w("google.ima.VERSION", "3.578.0");
    w("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    });
    w("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    w("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    w("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
}
)();
