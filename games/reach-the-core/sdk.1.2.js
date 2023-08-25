/// <IceStone>
'use strict';

function H() {
  function a(c) {
    var d = this.constructor;
    return this.then(function(k) {
      return d.resolve(c()).then(function() {
        return k
      })
    }, function(k) {
      return d.resolve(c()).then(function() {
        return d.reject(k)
      })
    })
  }

  function p() {}

  function l(e) {
    if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this.da = 0;
    this.ke = !1;
    this.Ta = void 0;
    this.ub = [];
    c(e, this)
  }

  function h(c, d) {
    for (; 3 === c.da;) c = c.Ta;
    0 !== c.da ? (c.ke = !0,
      l.fa(function() {
        var k = 1 === c.da ? d.lh : d.mh;
        if (null !== k) {
          try {
            var q = k(c.Ta)
          } catch (u) {
            return void g(d.bd, u)
          }
          f(d.bd, q)
        } else(1 === c.da ? f : g)(d.bd, c.Ta)
      })) : c.ub.push(d)
  }

  function f(a, d) {
    try {
      if (d === a) throw new TypeError("A promise cannot be resolved with itself.");
      if (d && ("object" == typeof d || "function" == typeof d)) {
        var k = d.then;
        if (d instanceof l) return a.da = 3, a.Ta = d, void e(a);
        if ("function" == typeof k) return void c(function(q, d) {
          return function() {
            q.apply(d, arguments)
          }
        }(k, d), a)
      }
      a.da = 1;
      a.Ta = d;
      e(a)
    } catch (q) {
      g(a, q)
    }
  }

  function g(c, d) {
    c.da = 2;
    c.Ta = d;
    e(c)
  }

  function e(c) {
    2 === c.da && 0 === c.ub.length && l.fa(function() {
      c.ke || l.ya(c.Ta)
    });
    for (var d = 0, k = c.ub.length; k > d; d++) h(c, c.ub[d]);
    c.ub = null
  }

  function c(c, d) {
    var k = !1;
    try {
      c(function(q) {
        k || (k = !0, f(d, q))
      }, function(q) {
        k || (k = !0, g(d, q))
      })
    } catch (q) {
      k || (k = !0, g(d, q))
    }
  }
  var m = setTimeout;
  l.prototype["catch"] = function(c) {
    return this.then(null, c)
  };
  l.prototype.then = function(c, d) {
    var k = new this.constructor(p);
    return h(this, new function(q, d, c) {
      this.lh = "function" == typeof q ? q : null;
      this.mh =
        "function" == typeof d ? d : null;
      this.bd = c
    }(c, d, k)), k
  };
  l.prototype["finally"] = a;
  l.kb = function(c) {
    return new l(function(d, k) {
      function q(c, a) {
        try {
          if (a && ("object" == typeof a || "function" == typeof a)) {
            var m = a.then;
            if ("function" == typeof m) return void m.call(a, function(d) {
              q(c, d)
            }, k)
          }
          u[c] = a;
          0 == --e && d(u)
        } catch (A) {
          k(A)
        }
      }
      if (!c || "undefined" == typeof c.length) throw new TypeError("Promise.all accepts an array");
      var u = Array.prototype.slice.call(c);
      if (0 === u.length) return d([]);
      for (var e = u.length, a = 0; u.length > a; a++) q(a, u[a])
    })
  };
  l.resolve = function(c) {
    return c && "object" == typeof c && c.constructor === l ? c : new l(function(d) {
      d(c)
    })
  };
  l.reject = function(c) {
    return new l(function(d, k) {
      k(c)
    })
  };
  l.nb = function(c) {
    return new l(function(d, k) {
      for (var q = 0, u = c.length; u > q; q++) c[q].then(d, k)
    })
  };
  l.fa = "function" == typeof setImmediate && function(c) {
    setImmediate(c)
  } || function(c) {
    m(c, 0)
  };
  l.ya = function(c) {
    void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", c)
  };
  var n = function() {
    if ("undefined" != typeof self) return self;
    if ("undefined" !=
      typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw Error("unable to locate global object");
  }();
  "Promise" in n ? n.Promise.prototype["finally"] || (n.Promise.prototype["finally"] = a) : n.Promise = l
}
"object" == typeof exports && "undefined" != typeof module ? H() : "function" == typeof define && define.rj ? define(H) : H();
!0;
window.__IceStone = {};
window.__IceStoneInited && (window.__IceStone.cloneObj = {});
var __extends = this && this.__extends || function() {
  function a(p, l) {
    a = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(a, f) {
      a.__proto__ = f
    } || function(a, f) {
      for (var g in f) f.hasOwnProperty(g) && (a[g] = f[g])
    };
    return a(p, l)
  }
  return function(p, l) {
    function h() {
      this.constructor = p
    }
    a(p, l);
    p.prototype = null === l ? Object.create(l) : (h.prototype = l.prototype, new h)
  }
}();
(function(a) {
  (function(a) {
    (function(a) {
      a.vf = function() {
        function a() {}
        a.rf = 0;
        a.ci = 1;
        a.vj = 2;
        a.sj = 3;
        a.pj = 4;
        a.Dj = 5;
        a.Jj = 6;
        a.Fj = 7;
        a.Bj = 8;
        return a
      }();
      a.Xa = function() {
        function a() {}
        a.Lj = 0;
        a.Oj = 1;
        a.nc = 2;
        a.Sj = 3;
        a.Qj = 4;
        a.zd = 5;
        a.sf = 6;
        return a
      }();
      a.A = function() {
        function a() {}
        a.Ld = 0;
        a.Kd = 1;
        a.pc = 2;
        a.rc = 3;
        a.Qd = 4;
        a.qc = 5;
        a.Od = 6;
        a.Md = 7;
        a.Nd = 8;
        a.Pd = 100;
        return a
      }();
      a.uf = function() {
        return function() {}
      }();
      a.Kf = function() {
        return function() {}
      }()
    })(a.Da || (a.Da = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone ||
  (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      var h = function() {
        function a() {}
        a.Ad = 0;
        a.Xj = 1;
        a.tf = 2;
        a.ak = 3;
        a.ck = 4;
        return a
      }();
      a.Bd = h;
      a.Lf = function() {
        return function() {
          this.name = "";
          this.state = h.Ad;
          this.bc = !1;
          this.Ua = this.Ga = null
        }
      }()
    })(a.Da || (a.Da = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      a.Ha = function() {
        function a() {}
        a.wj = function(f, g) {
          void 0 === g && (g = !0);
          f = a.f(f);
          return void 0 != f && f instanceof Uint8Array ? g ? new Uint8Array(f.buffer.slice(0)) : f : null
        };
        a.text = function(f) {
          f = a.f(f);
          return void 0 == f || "string" != typeof f ? null : f
        };
        a.json = function(f) {
          f = a.f(f);
          return void 0 == f ? {} : "string" != typeof f ? {} : JSON.parse(f)
        };
        a.Uc = function(f) {
          f = a.f(f);
          if (void 0 == f || "string" != typeof f) return null;
          var g = document.createElement("div");
          g.innerHTML = f;
          return g
        };
        a.Cb = function(f) {
          f =
            a.f(f);
          return void 0 == f || "string" != typeof f ? null : (new DOMParser).parseFromString(f, "image/svg+xml").documentElement
        };
        a.f = function(f) {
          if (void 0 == a.xe) return null;
          f = (f || "").replace(/\\/g, "/").replace("./", "");
          return a.xe[f]
        };
        a.xe = {
          "ad/close.svg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="182" height="182" viewBox="0 0 182 182"><metadata><?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?><x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        "><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about=""/></rdf:RDF></x:xmpmeta><?xpacket end="w"?></metadata><image id="\u0421\u043b\u043e\u0439_1" data-name="\u0421\u043b\u043e\u0439 1" x="2" y="2" width="178" height="178" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACyCAQAAABMg13jAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiChIOHhztJtkGAAAZOklEQVR42uWdeXwV1dnHvwlLBbHYWlyqIu5LQQWVixuyigREwk6CIjsCQujytr5tP+3b9m37tlYCosiOIKCyCkJYQhJE1Otra9/6drFvF7e6byiCBpK8f5y5c8+cc+6dOXPn3pvAjz9Cnpl7lm8mkzlnzvM7BQ2k1m89300TXwpoAHiQ408OgWbUBSNwlfO10LKC8SyiQPr+OJLT4xLW0MKOQEDILuLFTGSJ+NTxhdnp7ShWMoLHaGlDIBBkp7BxLKYQGM8SmtlU0vTl9HQkj9AMKGYDXwpOIABkBbH4/9LjCbPTyxGsFr0GBvIErYIS8IXsFHIni90KAMay/HjB7PRwOGs8BPqxldbBCPhAdgoYm7hBSLqdh48HzC7itRqB3uygTRACBeke4WLiyx0s0yoQWsvtQR9nmqYcfMNYS3PjCfsZwIFUBII/wo1JiRhGJ+5Sx+bV7IsYrmc3J/sR8IM8hhUpEQOMPHYxOz0aypqUiAGuYQ+npCeQHnKJirhQ3OtljUz8nI8tzBLiFnK8gK+op3ZhD+3SEUgDOVbCShXxGL7Nl9UTh7PWdgzU2OX0ZAhrxLAjoQJG8j3OVE+/ghpOT00gJeTYKBVxAaV043TKaKuePIy1dmOgxi2nF8WJXiUJjKQ7JzGLs9WPXEYNX09FIAXk2ChnbCNVMIZrAcyYh/LosYLZ6cHgRI+SBEbQHYA2zOIc9WMXs5f2ZgJGyLEROuJSBzHAaSbMxTx+LGB2Wj8oMT+RJDCCm9zvWjOT89SPXsBeOpgIGCDHRihjGwoo5TrPOacxWzy5yLqN9U0ds4t4nYp4uIQYoBUzuED9eAf2iqCXgAY5NtwfMcCplOmYb2VjU8bstHqgCXEP7ewTmMFFarA9e7lYJaCM+GLD1afCAkq4PkWj3qOcj9RgBYOphaY3CnQRb1ARD6Nnis/Usog/qcG36S2CcSfguZJjw2wQQztm81U12J/NNtOAjUVOa4t0xENTIoaWTKGjGjydGq6QAxJkE+JRaRADfC0V5hOkhjcBuYg3eRHDUHql/WQLJnuJArRjD12S37qQY4axzShu9G3eKcwWo0pZt7A5+Gxr/uW0sr+OeJgPYoDmTKCzjmUPXRPfOPfk2BDzg3cwfcgcPlCDuyjmEDT+e7OD+JbEbS6pIIiF6lnBC2rwAAPi+8GBnBligA8p5301WMltjR9zasRD6GNRTj2r3D90rg5SFN8HhRDrzSr116SjFWL4KrP5mhrsE/zdQb7ktKwfmzJDDIXcof/9asOOWG8ohPgeBokrLqmX2GHZ3K8wW0xFyerFtsaM2UXs/KFOqtgSMUABvfU50dbcFWtZCBDfw2AV8xZ2WlbyFWZzqhrsQQUnSh1qRHJadDObdMR9Q5T3NuUcVYPrGR2vdZ4u4rsTf6aSesIa88mU6Zi7UxHsTVhu5SJ2noOSGhwK8VuU84kaXMfo+BHPiC9mrPBmy8oOUM47anAfRRyExvMn0EHcl83qW4jb6BeivLco51M1uI7R8TrwDEbiuyjmsPe8zey2rK4tZWL+WtaNVHCS1Lk8y2lFn6gQv8kcHfFjCcTKsDq+k2I+9567KRrMN1AhXqnkH7PTgt48oSIeFArxG5SLX1NZaymlLvGNMgtnxlxpWe2XKeMMNXg9FWISOr+Yndp7sUVHfEuI8t5gno54dWKphJA21RnfQTFfeGMbo8F8HTvyjdmpuWfiCT6pgaEQv85cHfEqxsqIjZP28R0Ui8nKpDZSZVn9ScwWL71kdWNXPjE7tfbgSR1xUYjyXmcen6nBhxmnLvgxvn6Ku3PCSa23xtyGMh1zVyr9F4NkR06NNyUGSEkNiA7xciboa6pSvEiNV+hXczjMZ6nBq6kUSxdyi9mprTvbdcQDQpT3GnN1xMuYaFq2lnJJQHw7Q1TMG0JgnqljvopKMQmdO8xRI36VuerYDZYwkXrQRwNpFrfEtzHUi7mBDVRbNqeNaZVCl9xidmq5ke1iiJ9UUSjErzBPHVDAEianyqZJv0zrSYarmNdTY9mkE5mpY+5Mpd8KsqiUDvHAEOX9k/t1xItSI/ZfcLhFx7wuBOZZYt2HrM5UitnR7GJ2Sr+B7WIGJalbQiH+B/N1xA8xNV1OmP/S2S2M1DHvtWxaa9OamyupTL9QL3OlQzwoRHl/NyF+kGnp0+7SQnY+tFnH/Lg15lbMFMtrZF3htx4yMzmlXs92MXOSVL+QiB9Qh8Mwnxl+mY0+V7KLebSO+SnLJrbibs5Vg52oFrOj0WN2SrzOhPi2EOX9jfk64nnM9E8e9b1dOB/eqGN+jH2WzWzFDH0F2Teo5jQJSkRyEVeoa31vDo34CzVYTlmQ/NwAKWYu5hKOyPEGHg2BebqO+TKq063uDSOnpGvZriLuy+AQ5f2N+eqgAe5jdrAU6EDJkk4hG0yYn7ZsbitmcL4avJRqMZ8UDWYXcYW6+LQvxSHK+6sJ8b18y0MnjQqCJrCnSlJJv5DLrM95gL+rwZfpyVvBGp1eTktj7FQR92FIiPJeZoGO+Nf8m39brRPYneLWU+J9W9jAGp6xbPYJpmWnF1Odeq16cEWN+C8mxL8KgjipwJDdItdR4p0tbWC1NeYvpcJ8pgQqhJxPXqMj7h0K8Z95SEf8S74r8QggC8jRYm5pWt17EdViPikcZudTV7NbRdyLoSHK+5MJ8c+5R2IRSFaQ3aIfjwbzNLFeWtaF1IiJDnvMLuJKHfEw69LgTyz0/p0H+BnflzgElCVkCfMYHfOzlmW15C4uUYPnU5MqwSWdnLOviuoq/iMP6Yh/wg8lBoFlDdmt4lHvy8KwmKdyqRo8jxox0REcs4u4Us2x6MlQYTVjpf9lob4a6Ef8SOq/hUJAdqtZyx1ezPWs5jnLsoyYz6XGnEdklnNWl0Sec1I9GRYK8SId8Q/5idR3K4WC7Fa1Rn0vW88j+gJSH7VgKpepwQ7UiIkOf8wSYiUjt0coxC+ZEH+fn0n9tlRIyG51q7lTxbwqBOYpOuZzqBEj8PSYnaOd2a3mVfRgeAjEf2Cxjvgefi712VqhIbtVPpJ4BZ5QPat43rKsFkzlG2qwPdV+mFMjvikU4t+zxIT4l1J/QygDyG61qxivYl5pjbm5KY+oPTViosOM2YleyW41baU7I0IgfpFlOuLvZoo4Q8hu1SsTr8ITqmcl/21ZVnMm00kNnk0NF4IJczrEI6NC/B1+JfUzpDKE7Fa/Qsf8sJ6q4qPmTOJyNXgW1WJo6MXsfHcFu9U8ihtDIf4dS70dAPgW90p9DK2MIUuYJ4lVBwkZM4J81JyJXKkGz6RaTaV1/ne5CfGoEIh/yzJv46GB2dwn9S8DRQDZbcbyxOKOhOpZofh9+qs54/WsuK9TLYaGAq6LuFJNU7k+FOIXWK4jLqNc6ltGCjyf7CfXaHKJt5eFjHPnVYOqjmW8qAbfphd/lr7vSJWOuCQU4hU64pnMh0wRW88n+8lpzjIm4fm51bOc31mW1cx0NZ9OtfQwbUB8XSjEz5sQz4gCcVKRXcngXs0TWKxezePlVONAqmeZ/sN510kRLTAhLg2BOM4qHfE0HoIoECeu5Eghu5gnsVDFbMg/9lE9y/UWvOd8jQTxczySRcRZuF0IOU1bzBT1pmG4y/qokHFcrQbbOf88ujYU4mdNiKdGh1juScRyMd/lxVwXCvOdyVT7lLqWMSEQP2NCPJlFUh8iU+SQ3SYu1DEvD4H5joRjaAp1C3UV72c1yo2ynokskdofobIAWcI83duToyzn99YNvJ1uKY92Y0yILjzNGhVxHRNZJrU9UmUFstvUBYnFeAkdZRn/Y93EMSkwx0Ih3sdaHfEElkvtjlhZguw290HuVjEvDYX5Wi3aldtDNP8pHtURj+Nhqc2RK2uQ3SY/kFj3mNBRlvIH62aOUWzTunJHKMSP6YjHskpqbxaURchus+czS8W8xBpzAaXScrBrQiGuMSG+ndVSW7OirEJ2m35/YolpQkdZwkuWZRVQwg0AXMPYEA2vZp2OeAxrpXZmSc1+nObgWxFUMIBtAHE+pp/8rFXP7zlbd8dIqwI68imncmcIxFVs0BGX8hhkD3EiVTTiYbVZzmC7jDneeHMm66+cfNRAQwjEe9igho5SwjrI5lWcpWG1WU43ypmt9nMRf7QsqyBEkyt1xEcYnW3ESeUEsoT5m974URZaY7bVbjaqoVpGs15qV5aVI8hud+Yk1qcndJSFuqVohNrJJjVUyyhxaefKrCdnkN0u3ce3vfFsYt7BE2qolhGCe+78kHII2e3Wb/iON34kS5h3sEUN1TJMcM+l5VROIbtdu1ekAySVDcwVJsRD2Cq1I0fKMWS3e7/me974ERZ63pNmqu2CpqxaBouH9lwbp+UcstvF/8om5id5Ug19wWAqpPpzqDxAljD/uzdeGxHmrWxXQ5/nD3GeILtd/YUJ818yLHuLoCnrMIOFw2t+HBbzBFnC/ANvvJaHeDmDcp/Q/XIPUyxsR/NlYpk3yG6X/5MV3ngtC0Jj3mQycZ2aX8R5hZy627Us4MMQ5b2QxvIyn1aseYWcegV9f33PhwDqoq/TCFBX9pVHyK736wj1SDjvV7FOw7Ac7IeZZLlGobxBjtr7NdEdw1LFC9gTRWp8eOUJctTer3KHxumbq1zEnmy4wwRvUx6U2vv11gwRg9hcRXvfckliHWg+MOcBsmtMavB+7R9JDc2ZrCesXZZd5650yjlkF/H2aLxfzWrOZD2ZuFMiTyrXmHMMOWpj0tRqwRTdgeAKduXD8TankHOHGERq/IVqsEs+bLJzCDlq71d/tWS6bsJzde4x5wxy1N6vwdSSabpBWteEW1yuMOcIctTer8F1AtN0u7/r2JbLzZJyAjlK79d/8g/LT7Riuu54e0Pi70IuMOcAcpTer68wnwd4xfJTrZip+zd3z91GdlmHHKX36yvcz2EOc38IzHfr3vq9crXJaJYhR+n9+qprc36Y+3nV8tMnMlM4+8nqm9jsMLuYswo5Su/XVz1m/YeZZ425DbP0XXz65WI78yxCjtL79VVtP4RwmA1bfxWxPtuYswbZNSat0I1JM0cMAvNrliWdxCwx5ynr1sQ2vNnCnCXIUXq/vmZEDOEwt2WWvr5/CKtpJrU7YmUFcmrv117WiF9PiRjgEPN43bLEkynTt8wdxprsYc4C5HTer7bGpK8zT9/+x6NwmGfpu8aPYGW2MEcOOUrvV+M+YZo+C4H5q5Tp78NLWJodzNnxuzAYk/ayNiY1Il7gfL3LGz6RWfpgw0fvcx8fq8HlTAi2GUAQZcVUJJ33q61r5humrdgWMN353wNRYH6POTrmJel2cbJTFrKfovR+fcN0FQvXAfFvujD/SOoz5vGGZYvbUabe02AiD4rGRnfTiAyyi7gyc+9X4+auXv+MBqax0HvCwRCYT2WWOhiFqcwNYaGRRhFBloxJFcT2xqT/MiF2nWAeTPwaN3CX8FlJ6iDz+Jdly09nljr/CncL272oruVIILuIK3XvV1tj0n+Z9s91PY0EYBfzVBZ7TzzIXN60bP0ZlOmYy/iN1LMMFQFkyZhUQWzv/fqmCfFSL2Lpfw1MYan35IOUW2P+OjPVd2LwTeE2GwXmjCFH6f36pmkvc9fOz/vX3sU8yYTZNvX+LGaKqWVZ3+WnUg8zUIaQo/R+fcuMeGKqByoJ8zLvkYPMscZ8tgnzD/ix1MvQyghyasQ3WBuTGhEvN1/FCaXDbH81n8MMHfOPRLpFZpgzgCzZ62rGpKNDIP5UDS5PtUVxUs6ReiYJo6akPg2B+Vymc4Ia/KlIhcsEc2jITqWdTPa6tsakbzNXR+z6MacfeaXDPJe3LXt1HtPF1LKsX4ik+/CYQ0J2KuyYWCmZlL3369uU84kaXGHey9wk54w6JqkpPp9Qbo35fBPmeymTem2tUJCdyr4RhferEfHK4Iils+qYyErvkTCYL+QuHfN9zJR6bqkQkLOO2N3tIfgUjYt5vI7Z/qZxMVNo4Q0VUC6mpMJgtobsVHIZVepbHHvv13eYqyN29y2xmwWTMD/iPXKAubxj2ctLmeLdQBMKeICJEgELWUKOFnE5B9SguwOP/USji/lOHXO5NebLmKxjXsR4iUJgWUF2Cr+UKvWVbzdKLX9e75oQu3tJhZvLlTCv8R45QDnvWpbWkYkmzGMlEgFlQSYdYltjUiNid1e08NPlLuY7osB8OePF+6ikmrGUUolGIAVm4xR6CVXq+hB779d3KdffSLj7+2X2RkLC/Kj3yMchMF/JeLVvzXiYkRKRAApIxynwYhNiW+9XI2J3p8rMX/q4mMcI/8KkPqbcNcUPqs6M0zGvFu+Eg2IOxMdFXK0uJrO3133PjLgkKsRSKXWU8rj3yMfMscZ8lW6+2ow1YgFJMMwBCDkFXUSVitje+9X46nJdtIilkuoSVpFJhcHcVb8htmCtWFwdBLMvIxdxtevv6cje+9V4FWcBsVRaXcIuMqkwN41u+mRBS9aJxEN/zD6UnAIupEpFfLU14vcp5yM16O7oHr0fhXQ1r/ce+Yhy3rcs7ToT5o0iS9kPc1pOLuJqdf301db2urlGLJV6NBrM1+uvIb7ERm6WSKWQP6kLqFIRX2WN+APKdS+WDZSIraGz56rilHyEEtV49kPK+cCytO764oZWbBJbJaXD7MfqgsTG80l10R9qfPQBc3TEG7OPWCrdiHmONeae+kbjrdnKTZAOc3pa55sQj48G8WhqJQhZlFNDLSWqx28YzIbFv63ZJnzgU2FOwyt2no64szXiD003is25QyzVUsto1efX2Dof9dFTik5ku9g8wow5JbHYedRwtjfWmQnWiA3XymZG5hKxVFMto9jsPWL8PfNRPz2L9iS2i/2TTJhTMIudS7WO2P4qNiDeknvEUm21jFTNaMNgNqTct2WnMPPSMRupxc6lRk3h7KzPSPnIiHgrw/OBWKqxluFRYB6gG/m0Zbcw81IxGyDHOlCtIr6ScZaIPzI9Ij3JsHwhlmqtZbhqSvuB6SneR4Poq4ZOZpfYrNiLWYMc60CNmu99JePV6WsffcQc/WF/G0PziViquZahKub3Q2AuprcaOoVdYodzGbOy0j52DjV08H7uCiZYIjZOwmynON+IhZzut2STanrUjtnq+nVfradKDb1HT7HlRNwJeK7k2DlUq4gvjwZxRWNBLF3NxarNsnGO0EdD6aGG2rHHa38kQY61p5pzvedfrr/n8lEKxIMbC2KpFbUUq1bL9pgLGM6NavA0qrgo+a0L2YS4UwjEhmnEHY3nKk5IwqzYLRunY9OqgFHKNnbAGVQl7Y8cyLGzqVZdZDoxKQRi7S3aDor5QupYI5HTmi8SHuFJvRsCc6m+KeOZVMccooVgRtzRGrHxffBOivlc6lQjkou5WHW2Nr5LT6sCSvUNc8+iOtYBoBBiZ1GtWk511Jd2+KipIZZa9TmDM8dcyO26e3N7qmLtoTB2BjtUxIXcFgKxtkZnF8Ui97xxIpZa9jnF7PIeeccac72+/Bee4XUojL/FTbygnm6XrWxcbdYEEEutO2zCPNcCcz1LdSf+LYyNNziDkdiX2Up37/FWTNf91IwyLk/dzWCR3t+4EQs5w5PWbFZHyqdTpidTGtTASnfo4aqKovgX4I74Yq1Zr/rqtmSqbimqyYh4D4OaDmKQMD9BH++RYJgfp0YNxekddzKXnUe4+CEGq69nalngu1nssYHYbekhbmOP94hxBbWiLTril+ifTA53ByPxWkaK/ZuTOsIi9XbtkTEro7rpIZZae4hB6mSEMaNFUqW+fczf6CvPNknD6ngdY1Uydazg6RSFG/OLqhnYFBFLLT7ErVR7jxhzsxw9re9c+QZ9vM8BngmieEN8ukh2TaqetVQaCjdmyu1tuoilVh9iIHu9R4xZhsALPKpu1PwefYSXWpKBNp8cv4d7vJEGNopt7CQZcz73UtSUEUstP0SRjnmOhvklVoosuKQO0E88yckMDG9G4r/kbvXHs42NUsh4FT/V9BFLrT9EEU95j6hX819ZKpY/JXWIgbyoMzC+44vPT+QfJVXJWuenZszD33dsIJZ6YMAsJ9i/wkIxtZhULUPEHzCVQYrXz/EVjFLLeJoV1JkdJfYlHliaPmKpF59RxD7vkYRVxJs8qLrV1VGaare0NEZPsf6sVw3+O/GRbkHzNP3FD/jYQCzkDE/asF2dkz+LEhapk6ENTBBpxzKDQG5ase5s9R3uHJOIQcJcIRZhJVWARm025TqDYG5aT9HXZ0HCfoqOTcRujw5SxH7vEQ3xf5gQJ+W3JOh5eqTJmt1PkXhKP/YQS736lP4qZo/KhfVIagb+665eonsKo+JnKBLD+mMTsdSzTynimRSnLOebfgzSQnY++H90N2xaehwglnr3Cf2NmNcnvGXSyedKdqp4jZv4g+fAsxSJGe1jG7HUw08o4lnl0E5KgyQV+d4unI+/Q0+ed4PP0f94QSz18gD9eU4K72dIsKUOAdbCOkV8SB9n2jTOLccTYqmnB7jFfQHyIgOCjnEDus46z4ytWMep9D3eEHsYtGUXXXmZG8UqnnQUrK193WV6rY5PxBKDtuxmiBj4pqcQwj9ZXgx6PCKWGLQNdqElIP8/FPfUvHzAvBMAAAAASUVORK5CYII="/></svg>',
          "ad/config/default.json": "{}",
          "ad/loader.svg": '<svg version="1.1"  \tclass="svg-loader"  \txmlns="http://www.w3.org/2000/svg"  \txmlns:xlink="http://www.w3.org/1999/xlink"  \tx="0px" \ty="0px"  \tviewBox="0 0 80 80"  \txml:space="preserve"><path  id="IceLoaderSVG"\tfill="#ffffff"  \td="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1 \tc0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1 \tc1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1 \tl0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5 \tc3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1 \tc0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9 \tc0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9 \tc0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2 \tc-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9 \tc-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1 \tc-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7 \tc-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1 \tc-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z" \t><animateTransform id="animateTransformLoader"\tattributeType="xml"\tattributeName="transform"\ttype="rotate"\tfrom="0 40 40"\tto="360 40 40"\tdur="0.6s"\trepeatCount="indefinite" \t/></path></svg>',
          "config.json": '{"version":"1.2"}',
          "leaderboard/s3eFBInstantPanel.html": '<div id="s3eFBIGLeaderboardInviteFriends"style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0.7) 100%); font-family: &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; cursor: default; overflow: hidden; user-select: none; box-sizing: border-box; padding: 3%;"><div style="width: 100%; height: 85%;"><div id="cross-promo"style="border-radius: 18px; box-shadow: rgba(0, 0, 0, 0.498039) 0px 2px 8px 2px; margin-bottom: 10px; overflow: hidden; margin-left: auto; margin-right: auto; text-align: center; height: 81px; background-color: rgb(255, 255, 255);"></div><div style="height: 100%; background-color: rgb(255, 255, 255); border-radius: 18px; box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px 2px; margin-bottom: 10px; overflow: hidden;"><div style="color: rgb(102, 102, 102); margin: 12px 12px; text-align: center; font-size: 20px;"><a id="s3eFBIGLeaderboardTab"style="float: left; width: calc(50% - 8px); position: relative; border: 1px solid rgb(64, 128, 250); padding: 8px 0px 8px 0px; display: inline-block; text-align: center; cursor: pointer; white-space: nowrap; border-radius: 18px 0px 0px 18px; background-color: rgb(64, 128, 250); color: rgb(255, 255, 255);">Leaderboard</a><a id="s3eFBIGInviteFriendsTab"style="width: calc(50% - 8px); float: right; position: relative; border: 1px solid rgb(64, 128, 250); padding: 8px 0px 8px 0px; display: inline-block; text-align: center; cursor: pointer; white-space: nowrap; border-radius: 0px 18px 18px 0px; color:#3b5998;">Play Together</a></div><a id="s3eFBIGInviteMoreFriends"style="width: 100%; margin-top: 10px; margin-bottom: 12px; height: 18px; color: rgb(64, 128, 250); text-align: center; cursor: pointer; display: inline-block; font-size: 18px; line-height: 18px;">Invite More Friends</a><div id="s3eFBIGLeaderboard"style="width: calc(100% + 100px);height: calc(100% - 115px);overflow-y: scroll;"></div><div id="s3eFBIGInviteFriends"style="width: calc(100% + 100px);height: calc(100% - 115px);overflow-y: scroll;"></div></div></div><div style="width: 100%; height: 15%; box-sizing: border-box; padding: 3% 0px 0px 0px;"><div id="s3eFBIGPlay"style="width: 100%; height: 100%; border-radius: 14px; box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px 2px; background-color: rgb(64, 128, 250); color: rgb(255, 255, 255); text-align: center; cursor: pointer; font-size: 28px; font-weight: 400; user-select: none;"><div style="height: 48%;"></div><div id="s3eFBIGLeaderboardButtonText"style="width: 100%;height: 4%;line-height: 0px;">Play now</div><div style="height: 48%;"></div></div></div></div>',
          "logo/block.html": '\ufeff<!DOCTYPE HTML>\n<html>\n\t<head>\n        <title>Block Game Page</title>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1, user-scalable=0"/>\n\t\t<style>\n            html,body{\n                padding:0;\n                margin:0;\n            }\n            #play{\n                float:left;\n            }\n            #button{\n                margin:0 auto;\n                text-align:center;\n                color:#414141;\n                font-weight:bold;\n                font-family:sans-serif;\n            }\n            #contact{\n                position:fixed;\n                bottom:0;\n                text-align:center;\n                color:#000;\n                font-family:sans-serif;\n            }\n            #contact_link{\n                text-decoration:none;\n            }\n\t\t\t#screen{\n                height:100%;\n                width:100%;\n                position:absolute;\n            }\n\t\t</style>\t\n\t</head>\n\t<body>\n            <div style="pointer-events: auto; z-index: 0; position: absolute;">\n        \t\t<div id="screen">\n                    <div id="button">\n                        The game is unavailable on this website.<br/>\n                        Please, click the button below to enjoy it free online.<br/>\n                        <a href="#" target="_blank" id="play">\n                            <img src="" id="play_img" />\n                        </a>\n                    </div>\n                    <div id="contact">\n                        Dear site owner,<br />\n                        To host the game on your site please use this link<br />\n                        <a href="#" target="_blank" id="contact_link"></a>\n                    </div>\n                </div>\n            </div>\n        \n\t</body>\n</html>',
          "logo/preloader.svg": '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 300 100" style="enable-background:new 0 0 300 100;" xml:space="preserve">\n<style type="text/css">\t\n\t.st9{enable-background:new    ;}\t\n</style>\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path fill="none" d="M72.5,25.6l-29.9-8.9l0,0l30.2,8.9C72.6,25.6,72.6,25.6,72.5,25.6z"/>\n\t\t\t<polygon fill="none" points="76.4,40.4 76.5,31 76.5,31 \t\t\t"/>\n\t\t\t<polygon fill="none" points="75.3,65.7 75.3,65.7 72.3,64.7 \t\t\t"/>\n\t\t\t<path fill="none" d="M48.1,56.4v24.4l0,0V56.4L48.1,56.4z"/>\n\t\t\t<path fill="none" d="M39.1,16.8l-23.9,9.3c-0.1,0-0.1,0.1-0.2,0.1l24.7-9.6C39.6,16.7,39.3,16.8,39.1,16.8z"/>\n\t\t\t<polygon fill="none" points="75.2,27.4 75.2,27.4 61.8,33 \t\t\t"/>\n\t\t\t<polygon fill="none" points="40.9,36.3 40.9,36.3 44.9,37.6 \t\t\t"/>\n\t\t\t<path fill="#B7E5FA" d="M40.9,16.5c-0.4,0-0.7,0.1-1,0.2l-24.8,9.6c-0.9,0.4-1.7,0.9-2.2,1.7l27.9,8.3L40.9,16.5z"/>\n\t\t\t<path fill="#77D2F7" d="M40.9,36.3L40.9,36.3l4,1.3l3.3,1.1L61.8,33l13.4-5.6c-0.6-0.7-1.5-1.4-2.5-1.7l-30.2-9\n\t\t\t\tc-0.6-0.2-1.2-0.3-1.8-0.2L40.9,36.3L40.9,36.3z"/>\n\t\t\t<path fill="#66CDF6" d="M40.8,36.3L40.8,36.3L40.8,36.3L40.8,36.3L40.8,36.3l-27.9-8.4c-0.7,1-1.2,2.1-1.2,3.4L12,64\n\t\t\t\tc0,1.2,0.5,2.4,1.1,3.3l27.7-13.6L40.8,36.3z"/>\n\t\t\t<path fill="#29A0DB" d="M48.2,56.3L48.2,56.3L48.2,56.3l-0.1,24.5c0.7-0.1,1.6-0.3,2.2-0.6l23.1-12.5c0.8-0.5,1.5-1.1,2-1.8l-3-1.1\n\t\t\t\tL48.2,56.3z"/>\n\t\t\t<path fill="#9DDCF9" d="M40.7,53.8v-0.2L13.1,67.3c0.6,0.8,1.5,1.5,2.5,1.8l30.2,11.3c0.7,0.3,1.6,0.4,2.4,0.4V56.4L40.7,53.8z"/>\n\t\t\t<path fill="#2C87C8" d="M75.2,27.4L61.8,33l-13.6,5.7h0.1l-0.2,17.5l24.1,8.5l3,1.1c0.6-0.8,0.9-1.9,0.9-3l0.3-22.5l0.1-9.5\n\t\t\t\tC76.5,29.6,76,28.4,75.2,27.4z"/>\n\t\t\t<polygon fill="#49B2E5" points="40.9,36.3 40.8,36.3 40.7,53.6 40.7,53.8 48.1,56.4 48.1,56.4 48.2,56.4 48.2,56.3 48.4,38.7 \n\t\t\t\t48.2,38.7 44.9,37.6 \t\t\t"/>\n\t\t</g>\n\t\t<path fill="#E7F6FC" d="M13.2,28c0,0,32.2,11.2,35.6,10.8c10.3-1.5,25.9-11.2,25.9-11.2s-20.2,5.8-34.4,5.8\n\t\t\tC32.3,33.4,13.2,28,13.2,28z"/>\n\t</g>\n\t<g class="st9">\n\t\t<path fill="#4DC5F2" d="M90.6,67.1c-0.6-0.3-0.8-0.7-0.8-1.4V29.4c0-1.3,1.1-1.8,3.4-1.8h1.9c1.2,0,2,0.2,2.6,0.5s0.8,0.8,0.8,1.4\n\t\t\tv36.3c0,1.2-1.1,1.8-3.4,1.8h-1.9C92.1,67.6,91.2,67.5,90.6,67.1z"/>\n\t\t<path fill="#4DC5F2" d="M106.4,64.2c-2.3-2.5-3.5-6.3-3.5-11.3c0-5.2,1.2-9,3.5-11.6c2.4-2.6,6.1-3.9,11.1-3.9\n\t\t\tc1.4,0,2.9,0.2,4.3,0.5s2.7,0.7,3.6,1.4c1,0.6,1.5,1.3,1.5,2.1c0,0.4-0.2,0.8-0.6,1.6s-0.8,1.4-1.3,1.9c-0.5,0.6-0.9,0.8-1.2,0.8\n\t\t\tc-0.2,0-0.5-0.2-1-0.5c-0.8-0.4-1.6-0.6-2.3-0.9c-0.7-0.2-1.6-0.4-2.7-0.4c-2.2,0-3.9,0.7-4.9,2.1c-1,1.4-1.6,3.6-1.6,6.5\n\t\t\ts0.5,5.2,1.5,6.5c1,1.4,2.5,2.1,4.6,2.1c1.2,0,2.2-0.1,3-0.4c0.8-0.3,1.7-0.6,2.5-0.9c0.2-0.1,0.4-0.2,0.6-0.2\n\t\t\tc0.2-0.1,0.4-0.1,0.5-0.1c0.4,0,0.8,0.3,1.3,0.8c0.5,0.6,0.8,1.2,1.2,1.8c0.4,0.7,0.5,1.3,0.5,1.7c0,1-0.6,1.8-1.9,2.4\n\t\t\tc-1.3,0.6-2.7,1-4.2,1.3c-1.6,0.3-2.9,0.4-3.8,0.4C112.3,67.9,108.7,66.6,106.4,64.2z"/>\n\t\t<path fill="#4DC5F2" d="M132.3,63.9c-2.5-2.7-3.7-6.4-3.7-11.2c0-5.3,1.2-9.2,3.7-11.7s5.8-3.8,10.1-3.8c2.9,0,5.2,0.6,7,1.9\n\t\t\tc1.8,1.3,3.1,3,4,5.3c0.8,2.2,1.3,4.7,1.3,7.5c0,0.3-0.2,0.7-0.6,1.3c-0.4,0.6-0.8,1-1.3,1.5s-0.8,0.6-1.1,0.6h-14.5\n\t\t\tc0.2,2.2,0.8,3.7,1.9,4.6c1.1,0.9,2.6,1.4,4.6,1.4c1.1,0,2-0.1,2.9-0.4c0.8-0.3,1.8-0.6,2.8-1c0.6-0.3,1-0.5,1.2-0.5\n\t\t\tc0.4,0,0.8,0.3,1.3,0.8s0.8,1.2,1.2,1.8c0.4,0.7,0.5,1.3,0.5,1.7c0,0.8-0.6,1.7-1.8,2.2c-1.2,0.6-2.6,1.1-4.1,1.4\n\t\t\tc-1.6,0.3-3,0.5-4.2,0.5C138.5,67.9,134.8,66.6,132.3,63.9z M146.5,49.7c0-1.8-0.4-3.1-1-4.2c-0.6-1-1.7-1.6-3-1.6\n\t\t\tc-2.8,0-4.5,1.9-5.1,5.8H146.5z"/>\n\t\t<path fill="#4DC5F2" d="M162.6,67.1c-2-0.6-3.6-1.2-4.7-2c-1.1-0.8-1.6-1.6-1.6-2.2c0-0.6,0.2-1.2,0.6-2c0.5-0.8,0.9-1.5,1.5-2.1\n\t\t\tc0.6-0.6,1-0.9,1.5-0.9c0.3,0,0.7,0.2,1.5,0.6c1.1,0.6,2.2,1.1,3.3,1.5c1,0.4,2.2,0.6,3.6,0.6c1.5,0,2.8-0.3,3.8-0.9\n\t\t\tc1-0.6,1.6-1.6,1.6-3c0-0.8-0.3-1.6-0.8-2.2c-0.6-0.6-1.2-1.1-2-1.6c-0.8-0.5-1.9-0.9-3.4-1.5l-2.5-1.1c-1.6-0.7-2.9-1.6-4-2.5\n\t\t\tc-1.1-0.9-2-2.1-2.7-3.5c-0.7-1.5-1-3.2-1-5.4c0-2.6,0.6-4.8,1.9-6.5c1.3-1.7,3-3,5-3.8c2-0.8,4.2-1.2,6.5-1.2\n\t\t\tc1.9,0,3.7,0.2,5.2,0.6c1.6,0.4,2.8,0.9,3.7,1.5c0.9,0.6,1.3,1.2,1.3,1.8c0,0.6-0.2,1.2-0.5,1.9c-0.4,0.8-0.7,1.5-1.2,2.1\n\t\t\tc-0.5,0.6-0.9,0.9-1.4,0.9c-0.2,0-0.6-0.1-1-0.3c-0.8-0.3-1.6-0.6-2.4-0.7c-0.8-0.2-1.8-0.3-3-0.3c-1.9,0-3.3,0.3-4.1,0.9\n\t\t\tc-0.7,0.6-1.1,1.4-1.1,2.2c0,1,0.3,1.8,0.7,2.5c0.5,0.6,1.2,1.2,1.9,1.7c0.8,0.5,1.9,0.9,3.3,1.5c2.1,0.9,3.9,1.8,5.3,2.6\n\t\t\tc1.4,0.8,2.6,2,3.5,3.5c1,1.6,1.5,3.5,1.5,5.9c0,3-0.6,5.3-1.8,7.2c-1.2,1.8-2.8,3.2-4.7,4.1c-1.9,0.8-4,1.3-6.3,1.3\n\t\t\tC167.1,67.9,164.7,67.7,162.6,67.1z"/>\n\t\t<path fill="#4DC5F2" d="M188.3,65.6c-1.4-1.6-2.1-3.9-2.1-6.9V44.4h-0.9c-0.6,0-1-0.2-1.3-0.6c-0.3-0.5-0.4-1.2-0.4-2.2v-0.9\n\t\t\tc0-1,0.1-1.8,0.4-2.2s0.7-0.6,1.3-0.6h0.9l0.7-5.4c0.2-1.2,1.2-1.8,3-1.8h1.8c1,0,1.7,0.2,2.1,0.5s0.6,0.7,0.6,1.4v5.4h2.8\n\t\t\tc0.6,0,1,0.2,1.3,0.6c0.3,0.5,0.4,1.2,0.4,2.2v0.9c0,1-0.1,1.8-0.4,2.2c-0.3,0.5-0.7,0.6-1.3,0.6h-2.8v14.3c0,0.8,0.2,1.5,0.5,1.8\n\t\t\tc0.3,0.4,0.8,0.6,1.6,0.6c0.2,0,0.5,0,0.8-0.1c0.4-0.1,0.6-0.1,0.6-0.1c0.4,0,0.6,0.3,0.9,0.8c0.3,0.6,0.5,1.2,0.6,1.8\n\t\t\tc0.2,0.6,0.3,1.1,0.3,1.4c0,1.8-1.8,2.8-5.4,2.8C191.7,67.9,189.7,67.2,188.3,65.6z"/>\n\t\t<path fill="#4DC5F2" d="M205.3,64c-2.4-2.7-3.5-6.5-3.5-11.4s1.2-8.8,3.5-11.3c2.4-2.6,5.8-4,10.2-4c4.4,0,7.9,1.3,10.2,3.9\n\t\t\tc2.3,2.6,3.5,6.4,3.5,11.3c0,5-1.2,8.8-3.5,11.4s-5.7,4-10.2,4C211,67.8,207.7,66.6,205.3,64z M219.6,59.1\n\t\t\tc0.8-1.5,1.3-3.6,1.3-6.5c0-2.9-0.5-5.1-1.3-6.5c-0.8-1.5-2.1-2.2-4-2.2c-3.5,0-5.3,2.9-5.3,8.7c0,2.9,0.5,5.1,1.3,6.5\n\t\t\tc0.8,1.5,2.2,2.2,4,2.2C217.4,61.2,218.7,60.6,219.6,59.1z"/>\n\t\t<path fill="#4DC5F2" d="M233.5,65.7v-18c0-2.8-0.2-5-0.6-6.8c-0.1-0.6-0.2-1-0.2-1.2c0-0.5,0.4-0.7,1.2-1c0.8-0.3,1.7-0.5,2.7-0.6\n\t\t\tc1-0.1,1.8-0.2,2.4-0.2c0.6,0,1.1,0.3,1.4,0.7s0.5,1.2,0.7,2.1l0.2,0.8c0.9-1.2,2.1-2.2,3.6-3c1.5-0.8,3.1-1.3,4.8-1.3\n\t\t\tc2.9,0,5,0.7,6.4,2.2c1.4,1.5,2,3.8,2,6.9v19.3c0,1.2-1.1,1.8-3.4,1.8h-1.5c-2.2,0-3.4-0.6-3.4-1.8v-18c0-1.1-0.3-2-0.8-2.6\n\t\t\tc-0.6-0.6-1.4-0.9-2.7-0.9c-1,0-1.9,0.4-2.7,1c-0.7,0.6-1.4,1.5-1.8,2.3v18.3c0,1.2-1.1,1.8-3.4,1.8H237\n\t\t\tC234.7,67.6,233.5,66.9,233.5,65.7z"/>\n\t\t<path fill="#4DC5F2" d="M265.9,63.9c-2.5-2.7-3.7-6.4-3.7-11.2c0-5.3,1.2-9.2,3.7-11.7c2.5-2.5,5.8-3.8,10.1-3.8\n\t\t\tc2.9,0,5.2,0.6,7,1.9c1.8,1.3,3.1,3,4,5.3c0.8,2.2,1.3,4.7,1.3,7.5c0,0.3-0.2,0.7-0.6,1.3c-0.4,0.6-0.8,1-1.3,1.5\n\t\t\ts-0.8,0.6-1.1,0.6h-14.5c0.2,2.2,0.8,3.7,1.9,4.6c1.1,0.9,2.6,1.4,4.6,1.4c1.1,0,2-0.1,2.9-0.4c0.8-0.3,1.8-0.6,2.8-1\n\t\t\tc0.6-0.3,1-0.5,1.2-0.5c0.4,0,0.8,0.3,1.3,0.8s0.8,1.2,1.2,1.8c0.4,0.7,0.5,1.3,0.5,1.7c0,0.8-0.6,1.7-1.8,2.2\n\t\t\tc-1.2,0.6-2.6,1.1-4.1,1.4c-1.6,0.3-3,0.5-4.2,0.5C272.1,67.9,268.4,66.6,265.9,63.9z M280.1,49.7c0-1.8-0.4-3.1-1-4.2\n\t\t\tc-0.6-1-1.7-1.6-3-1.6c-2.8,0-4.5,1.9-5.1,5.8H280.1z"/>\n\t</g>\n</g>\n</svg>\n',
          "logo/progressbar.svg": '<svg id="svg" xmlns="http://www.w3.org/2000/svg"  \txmlns:xlink="http://www.w3.org/1999/xlink"  width=\'100%\' height="100%" viewBox="0 0 200 200" version="1.1" >\n  <text id="progressText" x="98" y="117"     font-weight="bold" font-size="50px" font-family="sans-serif" text-anchor="middle" margin="2em auto" fill="#FF9F1E">1</text>\n  <circle id="bar"  transition="stroke-dashoffset 1s linear" stroke-width="17.5" stroke="#FF9F1E" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"><animateTransform\tattributeType="xml"\tattributeName="transform"\ttype="rotate"\tfrom="0 100 100"\tto="360 100 100"\tdur="1.2s"\trepeatCount="indefinite" \t/></circle>\n</svg>',
          "ui/s3eStoreButtonsPanel.html": '<div id="btn_panel" style="background-color:#ffffff;margin:0 auto;pointer-events: auto;"><a href="#" target="_blunk" id="ios" style="float:left;"><img src="" id="ios_img" /></a><div id="image"  style="float:left;"><img src="" id="game_img" /></div><a href="#" target="_blunk" id="google"  style="float:left;"><img src="" id="google_img" /></a><div id="game_name" style="font-family:Tahome,sans-serif;color:#7b7b7b;float:left;width:100%;font-weight: bold;"></div><div id="drop_btn" style="text-align:center;"></div></div>',
          "ui/storeButton.svg": '<?xml version="1.0" encoding="utf-8"?>\x3c!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 65" style="enable-background:new 0 0 150 65;" xml:space="preserve"><style type="text/css">.stStoreB2{fill:#9CA4AA;} \t.stSotreB3{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-miterlimit:10;}</style><g><image style="overflow:visible;opacity:0.28;" width="135" height="53" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAA1CAYAAABr5fh0AAAACXBIWXMAAAsSAAALEgHS3X78AAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9FJREFUeNrsnYty2jAQRWVhEpy0 pOnr/z+wbVqSQsLDqjRzd7IREgjSNjLcnbljg40ykz3srgRajKHRMta80Wtp/9fcv3RwU3BOqx8M dwgwTcF1ucdGzxGMYQHiFBB99HzS2gIwbEYNo8dgooYDECllo0izAwyBYASIRCPIJiIIQakvjQgY G2ittFGQuJLIocEI1y+ULnHUkBCOuuHQUCy9nnAUrVWqcbvg0KlEwJh4XSlNAMlYRRCCUScgEjFW gOLRa64kto5SUDZySCoZA4R3Xu+9ptC1VwdAWtYf1dcZa4Cx8PrtNYNvbaJY3eQih56FjBA1OsBx 6/UJxymem6j0wtlLnbMTSSchYjwAjAl8plOOqNGAtZl6Q8MRYPjo9QW6RSTpcA/hqBuOJaLGvdcd fO5UDSKycd2Rg0PqjSuA8MHrs9dXHKe4RjiGAcdcpROngJnj2KIuafallbgYvQYMkloCHDcRHJb+ qM76CI4LBYZOMRdR7diUpJUWRWcXFaU30LWasTBy1Bs5VvCTQWH6AH/qScUomljsXedoMeglCOui KW1HOAYBh9QYK+U3vRzRpsDQcDSJ1KJXRseQXhAbR3DQ6gNE0n3Kb20iamgOXFxzxFNagWRkXq6K alnCUf1C2CjjR2u2P0jN1hwmU6Badd5kRKvPmsSbPfZp1ne2YHCTIIs2TFAO8qU9gkLDaDHI6HGw 32zhgLTziCRHRw7amRnhoBEOGuGgEQ4a4aARDhrhoBEOGuGgEQ4a4aDRiuHQu68d/00naS7h66Mj hysZkFYlBEf5zR5BF6E4nUix05dtAXF6i35vXu6tZASpP2K4yJexT4uat7jEoHFfh3hvJXfY1w3H JiHtxz7xJt/aDunM87eONRTS5GMF6b2V8tre8GuDtUaNTcJv4su4gcsWIG1m4F5BIX0dZG9l0Bgw hHu4qal+OHRPjgX8+aQgKersE0cN6esQttCFXdphf+Ul7g0Dc69svRbvlf0F/93Dnwv4N44e2ZpD R40lCJOGH3eAocE17rIfRuTQu+y/w48z+PXRPLd+2ipQ2x0pRQYNpHUKjBXIY3+O4cCh+3N88/qJ x/MEHEVpRQad4T6pMQJx7OwzHDjizj4BkB84X8DPRWnFJIgT52/wR2aGPcGGstiV6wk2U3WHwOH2 pRVdyOhOLz0eLwy7CQ4JkH3dBB9xTSLH3tmKUcRpYCSSsA/pMMCIF8J29SFNrpayg/Hpw3F0B+Nd zmTv89OrP1LKfr7CX004r9nLQb+awN9bOb80kzp/FRx/+7W0twOERnu9/RFgAG7gv52n03heAAAA AElFTkSuQmCC" transform="matrix(1 0 0 1 8.375 5.75)"></image><g id="store_btn_arrow"><g><path class="stStoreB2" d="M128.6,43.8H22.9c-2.7,0-4.9-2.2-4.9-4.9V13.6c0-2.7,2.2-4.9,4.9-4.9h105.8c2.7,0,4.9,2.2,4.9,4.9v25.3\tC133.5,41.6,131.3,43.8,128.6,43.8z"/><g><line class="stSotreB3" x1="62.1" y1="32.5" x2="77" y2="17.8"/><line class="stSotreB3" x1="90" y1="32.5" x2="75.2" y2="17.8"/></g></g></g></g></svg>'
        };
        return a
      }()
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      var h = function() {
        function a() {}
        a.be = "windows";
        a.Jd = "macos";
        a.yf = "ios";
        a.td = "android";
        a.Fd = "linux";
        a.$d = "unknown";
        return a
      }();
      a.wa = h;
      h.WINDOWS = h.be;
      h.MACOS = h.Jd;
      h.IOS = h.yf;
      h.ANDROID = h.td;
      h.LINUX = h.Fd;
      h.UNKNOWN = h.$d
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      function h(a) {
        for (var g = a.length, e = 0; e < g; ++e) {
          var c = a[e];
          if (void 0 == c) a[e] = String(c);
          else if ("object" === typeof c) try {
            a[e] = JSON.stringify(c)
          } catch (m) {}
        }
        return a
      }
      l.Id = function() {
        function f() {}
        f.Zg = function() {
          window.console && window.console.log && (!window.IceStone || a == window.IceStone || f.Wa) && console.log("%c\u2655 IceStone SDK " + a.Sg() + " \u2655", "color: white; font-size: x-large; background-color: gray; padding: 20px")
        };
        f.Yh = function() {
          for (var g = 0; g < arguments.length; g++);
          f.Dc && window.console && window.console.log && (!window.IceStone || a == window.IceStone || f.Wa) && console.log("%c" + h(Array.prototype.slice.call(arguments)).join(" "), "color: gray; font-style: italic; padding: 5px")
        };
        f.error = function(g) {
          if (window.console && window.console.log && (!window.IceStone || a == window.IceStone || f.Wa)) {
            var e = g;
            "object" === typeof g && (e = g.stack || g.message);
            console.log("%c" + e, "color: red; font-size: x-medium; background-color: pink; padding: 5px")
          }
        };
        f.yj = function(g) {
          if (f.kc && window.console && window.console.log &&
            (!window.IceStone || a == window.IceStone || f.Wa)) {
            var e = g;
            "object" === typeof g && (e = g.stack || g.message);
            console.log("%c" + e, "color: blue; font-size: x-medium; background-color: lightblue; padding: 5px")
          }
        };
        f.Dc = !1;
        f.kc = !1;
        f.Wa = !1;
        f.uk = "This function is deprecated and will be removed in the next version of sdk.";
        return f
      }()
    })(p.g || (p.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      var h = function() {
        function a() {}
        a.eh = function() {
          Array.prototype.filter || (Array.prototype.filter = function(a, e) {
            if ("function" !== typeof a || !this) throw new TypeError;
            var c = this.length >>> 0,
              m = Array(c),
              g = 0,
              f = -1;
            if (void 0 === e)
              for (; ++f !== c;) f in this && a(this[f], f, this) && (m[g++] = this[f]);
            else
              for (; ++f !== c;) f in this && a.call(e, this[f], f, this) && (m[g++] = this[f]);
            m.length = g;
            return m
          })
        };
        a.ih = function() {
          Array.prototype.map || (Array.prototype.map = function(a) {
            var e, c;
            if (null == this) throw new TypeError("this is null or not defined");
            var m = Object(this),
              f = m.length >>> 0;
            if ("function" !== typeof a) throw new TypeError(a + " is not a function");
            1 < arguments.length && (e = arguments[1]);
            var g = Array(f);
            for (c = 0; c < f;) {
              if (c in m) {
                var d = m[c];
                d = a.call(e, d, c, m);
                g[c] = d
              }
              c++
            }
            return g
          })
        };
        a.eh();
        a.ih();
        a.Rj = !0;
        return a
      }();
      a.Si = h
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      a.Bc = function() {
        return function(a) {
          this.url = a
        }
      }();
      a.bg = function() {
        return function(a, f) {
          this.name = a;
          this.value = f
        }
      }()
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      a.Lb = function() {
        function a() {}
        a.Jf = "POST";
        a.mc = "GET";
        a.ti = "PUT";
        a.Pi = "DELETE";
        a.lj = "HEAD";
        a.ji = "OPTIONS";
        return a
      }()
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      a.Mb = function() {
        function a() {}
        a.ph = function(a, g) {
          for (var e = 0, c = a.byteLength, m = 0; m < c; m++) a[m] ^= g.charCodeAt(e), e++, e >= g.length && (e = 0)
        };
        a.Te = function(a) {
          for (var g = Array(128), e = String.fromCodePoint || String.fromCharCode, c = [], m, f = a.length, h = c.length = 0; h < f;) m = a[h++], 127 >= m || (223 >= m ? m = (m & 31) << 6 | a[h++] & 63 : 239 >= m ? m = (m & 15) << 12 | (a[h++] & 63) << 6 | a[h++] & 63 : String.fromCodePoint ? m = (m & 7) << 18 | (a[h++] & 63) << 12 | (a[h++] & 63) << 6 | a[h++] & 63 : (m = 63, h += 3)), c.push(g[m] || (g[m] = e(m)));
          return c.join("")
        };
        a.qk = function(a) {
          for (var g = [], e = 0; e < a.length; e++) {
            var c = a.charCodeAt(e);
            128 > c ? g.push(c) : 2048 > c ? g.push(192 | c >> 6, 128 | c & 63) : 55296 > c || 57344 <= c ? g.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63) : (e++, c = 65536 + ((c & 1023) << 10 | a.charCodeAt(e) & 1023), g.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63))
          }
          return new Uint8Array(g)
        };
        a.Ce = function(f) {
          f = new Uint8Array(f);
          a.ph(f, f.length.toString());
          f.reverse ? f = f.reverse() : (f = Array.prototype.slice.call(f), f = f.reverse(), f = new Uint8Array(f));
          a.Te(f)
        };
        a.ld = function(f) {
          return f ? (f ^
            16 * Math.random() >> f / 4).toString(16) : "10000000100040008000100000000000".replace(/[018]/g, a.ld)
        };
        a.Kg = function(a) {
          a && (a.onload = null, a.onerror = null, a.parentElement && a.parentElement.removeChild(a))
        };
        a.Tc = function(a) {
          a && a.Jg()
        };
        return a
      }()
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      a.ab = function() {
        function a() {}
        a.initializeAsync = function() {
          return (new Promise(function(f, g) {
            a.Ee = !0;
            g()
          })).catch(function(a) {
            throw a;
          })
        };
        a.c = null;
        a.Ee = !1;
        return a
      }()
    })(a.g || (a.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.ab,
        f = function() {
          function a() {}
          a.za = "pause";
          a.Gb = "resume";
          a.ib = "mute";
          a.qb = "unmute";
          a.Rd = "quit";
          a.Ud = "signed.in";
          a.Vd = "signed.out";
          a.Wd = "store.ready";
          return a
        }();
      l.Eb = f;
      f.PAUSE = f.za;
      f.RESUME = f.Gb;
      f.MUTE = f.ib;
      f.UNMUTE = f.qb;
      f.QUIT = f.Rd;
      f.SIGNED_IN = f.Ud;
      f.SIGNED_OUT = f.Vd;
      f.STORE_READY = f.Wd;
      l.W = function() {
        function a() {}
        a.$a = "progress";
        a.Hd = "loading.started";
        a.COMPLETE = "complete";
        a.Db = "error";
        a.kf = "error.404";
        a.lc = "error.security";
        a.wc = "sdk.inited";
        a.bb =
          "sdk.game.started";
        a.Sd = "sdk.game.blocked";
        a.mf = "game.state.changed";
        a.ij = "panel.update.leaderboard";
        a.fj = "panel.update.friends";
        a.ff = "panel.close";
        a.xf = "panel.invite.friends";
        a.fk = "panel.invite.friend";
        a.dg = "window.resize";
        a.kj = "update.login";
        a.If = "open.url";
        a.yd = "hide.preloader";
        a.Td = "show.preloader";
        a.ae = "ui.update.theme";
        a.Kb = "ui.update.loader";
        a.ud = "ui.animate.ended";
        return a
      }();
      var g = function() {
        function a() {
          this.Sa = []
        }
        a.prototype.s = function(a, c) {
          (this.Sa[a] = this.Sa[a] || []).push(c)
        };
        a.prototype.vh =
          function() {
            this.Sa = []
          };
        a.prototype.dd = function() {
          if (h.c) {
            var a = function(a) {
                if (!c.Sa.hasOwnProperty(a) || a != f.ib && a != f.za && a != f.Rd && a != f.Gb && a != f.Ud && a != f.Vd && a != f.Wd && a != f.qb) return "continue";
                var d = c.Sa[a];
                if (!d) return "continue";
                d.forEach(function(q) {
                  h.c.on(a, q)
                })
              },
              c = this,
              e;
            for (e in this.Sa) a(e)
          }
        };
        a.prototype.h = function(a) {
          for (var c = [], e = 1; e < arguments.length; e++) c[e - 1] = arguments[e];
          (e = this.Sa[a]) && e.forEach(function(a) {
            try {
              a.apply(null, c)
            } catch (k) {}
          })
        };
        return a
      }();
      l.lf = g;
      var e = function() {
        function a() {}
        a.dd = function() {
          a.yc.dd()
        };
        a.s = function(c, e) {
          if (h.c) h.c.on(c, e);
          else a.yc.s(c, e)
        };
        a.h = function(c) {
          for (var e = [], m = 1; m < arguments.length; m++) e[m - 1] = arguments[m];
          a.yc.h(c, e)
        };
        a.yc = new g;
        return a
      }();
      l.aa = e
    })(p.m || (p.m = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.m.aa,
        f = a.a.m.W,
        g = function() {
          function a() {}
          a.Cf = 0;
          a.jf = 1;
          a.hf = 2;
          a.wd = 3;
          return a
        }();
      l.gi = g;
      var e = function() {
        function a() {
          this.ka = this.B = null;
          this.Sb = !1;
          this.L = 0;
          this.S = 10;
          this.N = 1E3;
          this.o = 0;
          this.ig = g.wd;
          this.Gc = !1
        }
        a.J = function() {
          a.Z || (a.Z = new a);
          return a.Z
        };
        a.Rg = function() {
          return a.J().B
        };
        a.Pg = function() {
          return a.J().ka
        };
        a.prototype.Qc = function(a, c) {
          this.B = a.clone();
          this.B.x /= this.Aa();
          this.B.y /= this.Aa();
          this.B.width /= this.Aa();
          this.B.height /= this.Aa();
          this.ka = c;
          this.Sb = !0
        };
        a.prototype.nd = function(a) {
          this.B = a.clone();
          this.B.x /= this.Aa();
          this.B.y /= this.Aa();
          this.B.width /= this.Aa();
          this.B.height /= this.Aa();
          a = this.yb();
          this.Gc && h.h(f.Kb, a, this.B)
        };
        a.prototype.Va = function() {
          this.Gc = !0;
          this.o = 0;
          this.L = setInterval(this.gb.bind(this), this.S)
        };
        a.prototype.gb = function() {
          this.o += this.S;
          var a = this.yb();
          h.h(f.Kb, a, this.B);
          this.ka && "function" == typeof this.ka && this.ka(a);
          this.o >= this.N && (this.Gc = !1, this.o = this.N, clearInterval(this.L), h.h(f.Kb, a, this.B), this.ka &&
            "function" == typeof this.ka && this.ka(a, !0), h.h(f.ud))
        };
        a.prototype.yb = function() {
          switch (this.ig) {
            case g.Cf:
              var a = this.o / this.N;
              break;
            case g.jf:
              a = this.Vc(this.o, 0, 1, this.N);
              break;
            case g.hf:
              a = this.Lg(this.o, this.N);
              break;
            case g.wd:
              a = this.xb(this.o, 0, 1, this.N);
              break;
            default:
              a = this.o / this.N
          }
          return a
        };
        a.prototype.Vc = function(a, c, e, d) {
          a /= d;
          return -e * a * (a - 2) + c
        };
        a.prototype.Lg = function(a, c) {
          a /= c;
          return a * a
        };
        a.prototype.xb = function(a, c, e, d) {
          return 1 > (a /= d / 2) ? e / 2 * a * a + c : -e / 2 * (--a * (a - 2) - 1) + c
        };
        a.prototype.Aa = function() {
          return +window.devicePixelRatio ||
            Math.sqrt(window.screen.deviceXDPI * window.screen.b) / 96 || 1
        };
        return a
      }();
      l.vd = e
    })(p.D || (p.D = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.ab,
        f = a.a.m.W,
        g = a.a.m.aa,
        e = a.a.D.vd,
        c = function() {
          function a() {}
          a.Fb = "moregames";
          a.Df = "logo";
          a.Ed = "leaderboards";
          return a
        }();
      l.zc = c;
      var m = function() {
        function a() {}
        a.ha = "dark";
        a.Ma = "light";
        return a
      }();
      l.Yd = m;
      var n = function() {
        function a(a, q, d) {
          void 0 === a && (a = m.ha);
          void 0 === q && (q = .5);
          void 0 === d && (d = "default");
          this.wb = a;
          this.vg = q;
          this.oa = d;
          if ("default" == this.oa || "" == this.oa || null == this.oa) this.wb == m.ha ? this.oa = "#ffffff" : this.wb == m.Ma && (this.oa = "#000000")
        }
        a.prototype.Eh = function() {
          if ("default" == this.oa || "" == this.oa || null == this.oa) this.wb == m.ha ? this.oa = "#ffffff" : this.wb == m.Ma && (this.oa = "#000000")
        };
        return a
      }();
      l.Zi = n;
      var t = function() {
        function a() {}
        a.Je = function(a) {
          void 0 === a && (a = c.Fb);
          if (h.c) h.c.ui.openElement(a);
          else switch (a) {
            case c.Ed:
              null != p.$ && p.$.Oe()
          }
        };
        a.Fe = function(a) {
          void 0 === a && (a = c.Fb);
          return h.c ? h.c.ui.isElementAvailable(a) : !1
        };
        a.Ge = function(a) {
          void 0 === a && (a = c.Fb);
          return h.c ? h.c.ui.isElementInteractive(a) : !1
        };
        a.Hh = function(d, q, c) {
          void 0 ===
            d && (d = m.ha);
          void 0 === q && (q = .5);
          void 0 === c && (c = "default");
          h.c ? h.c.ui.setTheme(d, q, c) : (a.kb.wb = d, a.kb.vg = q, a.kb.Eh(), g.h(f.ae, d, q, c))
        };
        a.Tg = function() {
          return h.c ? h.c.ui.getStyle() : a.kb
        };
        a.Qc = function(a, q) {
          h.c ? h.c.ui.animateTo(a, q) : e.J().Qc(a, q)
        };
        a.nd = function(a) {
          h.c ? h.c.ui.updateAnimationRect(a) : e.J().nd(a)
        };
        a.kb = new n;
        return a
      }();
      l.Zd = t;
      t.openElement = t.Je;
      t.isElementAvailable = t.Fe;
      t.isElementInteractive = t.Ge;
      t.setTheme = t.Hh;
      t.getStyle = t.Tg;
      t.animateTo = t.Qc;
      t.updateAnimationRect = t.nd;
      c.MORE_GAMES = c.Fb;
      c.LOGO = c.Df;
      c.LEADERBOARDS = c.Ed;
      m.DARK = m.ha;
      m.LIGHT = m.Ma
    })(p.D || (p.D = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.m.aa,
        f = a.a.m.W,
        g = function() {
          function a() {}
          a.Hb = function() {
            return 0 < window.devicePixelRatio ? window.devicePixelRatio : 1
          };
          a.Tj = function() {
            if (!a.H) return {
              width: -1,
              height: -1
            };
            var c = a.H.clientWidth,
              e = a.H.clientHeight;
            c *= a.Hb();
            e *= a.Hb();
            return {
              width: c,
              height: e
            }
          };
          a.bk = function() {
            var c = window.screen.width,
              e = window.screen.height,
              g = window.outerWidth,
              f = window.outerHeight,
              d = c / e,
              k = g / f;
            1 < d && 1 < k || 1 > d && 1 > k || (d = c, c = e, e = d);
            g > c && (c = g);
            f > e && (e = f);
            /Mobile|mini|Fennec|Samsung|Android|iP(ad|od|hone)/.test(navigator.appVersion) &&
              (c *= a.Hb(), e *= a.Hb());
            return {
              width: c,
              height: e
            }
          };
          a.zb = function() {
            return a.H
          };
          a.cc = function() {
            void 0 != a.H && a.H.contains(a.M) && a.H.removeChild(a.M)
          };
          a.gd = function(c) {
            void 0 != c && a.H != c && (void 0 != a.H && a.H.contains(a.M) && a.H.removeChild(a.M), (a.H = c).appendChild(a.M), window.onresize = function() {
              return h.h(f.dg)
            })
          };
          a.ec = function() {
            void 0 == a.H && a.gd(document.body)
          };
          a.Fa = function(c) {
            a.Pc(c, a.nb())
          };
          a.Pc = function(c, e) {
            void 0 === e && (e = -1);
            if (void 0 != (c = a.va(c)) && a.T(c) !== e) {
              a.contains(c) && a.removeChild(c);
              e = Math.min(Math.max(e,
                0), a.nb());
              var g = a.lb(e);
              void 0 != g && g != c && a.de(e, 1);
              a.M.appendChild(c);
              c.style.zIndex = e;
              c.style.position = "absolute"
            }
          };
          a.removeChild = function(c) {
            if (void 0 == (c = a.va(c)) || !a.contains(c)) return c;
            var e = a.T(c);
            return -1 !== e ? a.bi(e) : c
          };
          a.bi = function(c) {
            var e = a.lb(c);
            if (!a.contains(e)) return e;
            a.M.removeChild(e);
            a.de(c + 1, -1);
            return e
          };
          a.gk = function(c, e) {
            a.removeChild(c);
            a.Pc(c, e)
          };
          a.ef = function(c, e) {
            if (void 0 != c && void 0 != e && -1 !== c && -1 !== e) {
              c = Math.min(Math.max(c, 0), a.nb());
              e = Math.min(Math.max(e, 0), a.nb());
              var g = a.lb(c),
                f = a.lb(e);
              void 0 != g && void 0 != f && g !== f && (g.style.zIndex = e.toString(), f.style.zIndex = c.toString())
            }
          };
          a.mk = function(c, e) {
            a.ef(a.T(c), a.T(e))
          };
          a.T = function(c) {
            return void 0 != a.va(c) && a.contains(c) ? parseInt(c.style.zIndex, 10) : -1
          };
          a.contains = function(c) {
            c = a.va(c);
            return void 0 == c ? !1 : a.M.contains(c)
          };
          a.lb = function(c) {
            if (void 0 == c) return null;
            for (var e, g = a.M.children, f = g.length, d = 0; d < f; ++d)
              if ((e = a.va(g[d])) && a.T(e) === c) return e;
            return null
          };
          a.Kj = function(c) {
            if (void 0 == c) return null;
            c = document.getElementById(c);
            return a.contains(c) ? c : null
          };
          a.nb = function() {
            return a.M.childElementCount
          };
          a.de = function(c, e) {
            for (var g = [], f, d = a.M.children, k = d.length, q = 0; q < k; ++q)(f = a.va(d[q])) && (a.T(f) < c || g.push(f));
            g.sort(function(q, d) {
              q = a.T(q);
              d = a.T(d);
              return q > d ? 1 : q < d ? -1 : 0
            }).forEach(function(q) {
              return q.style.zIndex = (a.T(q) + e).toString()
            })
          };
          a.va = function(a) {
            if (void 0 == a) return null;
            switch (typeof a) {
              case "string":
                return document.getElementById(a);
              case "object":
                if ("nodeType" in a) return a
            }
            return null
          };
          a.M = function() {
            var a = document.createElement("div");
            a.style.width = "100%";
            a.style.height = "100%";
            a.style.zIndex = "1024";
            a.style.margin = "0px";
            a.style.left = a.style.top = "0px";
            a.style.position = "absolute";
            a.style.pointerEvents = "none";
            a.id = "sdk_root_div";
            return a
          }();
          return a
        }();
      l.Na = g
    })(p.display || (p.display = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.m.W,
        f = function(a) {
          function e() {
            return null !== a && a.apply(this, arguments) || this
          }
          __extends(e, a);
          e.prototype.load = function(a) {
            this.pe = a;
            var c = a.headers || [],
              e = c.some(function(a) {
                return !!a.name && "content-type" == a.name
              });
            a.contentType && !e && c.push(new l.bg("Content-Type", a.contentType));
            e = a.url;
            if (a.data)
              if ("string" === typeof a.data) var g = a.data;
              else if (a.data instanceof ArrayBuffer) g = new DataView(a.data);
            else if (a.data instanceof Uint8Array) g = new DataView(a.data.buffer);
            else try {
              g = JSON.stringify(a.data)
            } catch (k) {}
            try {
              this.hg();
              this.pg(a.method || l.Lb.mc, e, a.sync);
              for (a = 0; a < c.length; ++a) {
                var d = c[a];
                this.mg(d.name, d.value)
              }
              this.ng(g)
            } catch (k) {
              this.h(h.Db, k.message)
            }
          };
          e.prototype.Jg = function() {
            this.vh();
            this.P = this.pe = this.data = null
          };
          e.prototype.close = function() {
            try {
              this.P.onreadystatechange = void 0, this.P.onprogress = void 0, this.P.abort()
            } catch (c) {}
          };
          e.prototype.hg = function() {
            this.P = new XMLHttpRequest
          };
          e.prototype.pg = function(a, e, g) {
            this.P.open(a, e, !g)
          };
          e.prototype.mg =
            function(a, e) {
              this.P.setRequestHeader(a, e)
            };
          e.prototype.ng = function(a) {
            var c = "arraybuffer",
              e = this.pe.contentType;
            e && 0 === e.indexOf("text") && (c = "text");
            this.P.responseType = c;
            this.P.onreadystatechange = this.sg.bind(this);
            this.P.onprogress = this.tg.bind(this);
            this.P.send(a)
          };
          e.prototype.tg = function(a) {
            this.h(h.$a, a.loaded, a.total)
          };
          e.prototype.sg = function() {
            var a = this.P.readyState,
              e = this.P.status;
            4 === a && (this.data = "arraybuffer" === this.P.responseType ? this.P.response : this.P.responseText);
            4 === a && 200 === e ? (this.h(h.$a,
              this.data.byteLength, this.data.byteLength), this.h(h.COMPLETE)) : (4 !== a || 403 !== e && 404 !== e || this.h(h.kf), 4 !== a || 400 !== e && 403 !== e && 404 !== e ? 4 === a && 0 === e && this.h(h.lc) : this.h(h.Db))
          };
          return e
        }(a.a.m.lf);
      l.Ac = f
    })(p.g || (p.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      function h(a) {
        if ("string" !== typeof a) return null;
        if (0 === a.indexOf("file:")) return "localhost";
        a = a.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        return null != a && 2 < a.length && "string" === typeof a[2] && 0 < a[2].length ? a[2] : null
      }
      var f = a.a.m.aa,
        g = a.a.m.W,
        e = a.a.g.Mb,
        c = a.a.g.Ac,
        m = a.a.g.Bc,
        n = a.a.g.Lb,
        t = 0;
      l.Storage = function() {
        function a() {}
        a.hk = function() {
          return null
        };
        a.Di = function() {
          return null
        };
        a.xk = function() {
          return null
        };
        a.Ti = function() {
          var a = window.location.href;
          if ("string" !==
            typeof a) a = null;
          else if (0 === a.indexOf("file:")) a = "localhost";
          else {
            var d = a = h(a);
            if (null != a) {
              var c = a.split(".").reverse();
              null != c && 1 < c.length && (d = c[1] + "." + c[0], -1 != a.toLowerCase().indexOf(".co.uk") && 2 < c.length && (d = c[2] + "." + d))
            }
            a = d
          }
          return a
        };
        a.hb = function() {
          return h(window.location.href)
        };
        a.ob = function() {
          return document.referrer ? h(document.referrer) : h(window.location.href)
        };
        a.mi = function() {
          return k.oh
        };
        a.I = function() {
          return k.zg
        };
        a.gf = function() {
          return k.platform
        };
        a.Dd = function() {
          return k.language
        };
        a.cj = function() {
          return k.font
        };
        a.$e = function() {
          return a.Za
        };
        a.Ae = function() {
          return a.te
        };
        a.Dh = function(d) {
          a.te = d
        };
        a.Ni = function() {
          return "default"
        };
        a.Ej = function() {
          return a.ee
        };
        a.Ah = function(d) {
          a.ee = d
        };
        a.Mg = function() {
          return a.f("cache.ad.config") || l.Ha.text("ad/config/" + p.$.name + ".json") || l.Ha.text("ad/config/default.json")
        };
        a.dk = function(d) {
          a.i("cache.ad.config", d)
        };
        a.Vg = function() {
          return a.K
        };
        a.Jh = function() {
          void 0 == a.K && (a.K = "default")
        };
        a.dh = function() {
          var d = a.f("user.uid", "");
          "" == d && (d = e.ld(null),
            d += (new Date).getTime(), a.i("user.uid", d));
          return d
        };
        a.Mj = function() {
          return a.od
        };
        a.Fh = function() {
          a.od = !0
        };
        a.Og = function() {
          return a.se
        };
        a.Ch = function(d) {
          a.se = d
        };
        a.Ng = function() {
          return a.re
        };
        a.Bh = function(d) {
          a.re = d
        };
        a.Gj = function() {
          return a.ve
        };
        a.dc = function(d) {
          a.ve = d
        };
        a.Wg = function() {
          return a.f("user.name", "Guest")
        };
        a.ik = function(d) {
          a.i("user.name", d)
        };
        a.Xg = function() {
          return a.f("user.photo")
        };
        a.kk = function(d) {
          a.i("user.photo", d)
        };
        a.Ug = function() {
          return a.f("user.data", "")
        };
        a.Ih = function(d) {
          a.i("user.data",
            d)
        };
        a.wf = function() {
          a.C("stats.install.date")
        };
        a.Cd = function() {
          return t + a.pb()
        };
        a.Be = function() {
          return a.C("stats.install.level", -1)
        };
        a.fc = function(d) {
          a.i("stats.install.level", d)
        };
        a.$b = function() {
          return a.ce("stats.install.level_auto_increment", !1)
        };
        a.Le = function() {
          a.i("stats.install.level_auto_increment", !0)
        };
        a.Pj = function() {
          return a.C("stats.install.score", -1)
        };
        a.Me = function(d) {
          a.i("stats.install.score", d)
        };
        a.Ff = function() {
          return a.C("stats.numLaunches")
        };
        a.Yi = function() {
          return a.C("stats.session.date")
        };
        a.bh = function() {
          return a.C("stats.session.loadDate")
        };
        a.pb = function() {
          var d = a.bh();
          return 0 < d ? Date.now() - d : 0
        };
        a.Wc = function(d) {
          return a.C(d, 0)
        };
        a.fd = function(d, c) {
          a.i(d, c)
        };
        a.initializeAsync = function(c) {
          return new Promise(function(q, k) {
            a.Za = c;
            a.fa = new d(c);
            a.fa.Sc().then(function() {
              a.xc();
              q()
            }).catch(k)
          })
        };
        a.xg = function() {
          return new Promise(function(d, q) {
            a.Za ? a.K ? p.$.Yg().then(function(q) {
                if (-1 == document.location.search.indexOf("user_id") || "object" === typeof window.cordova || p.$.name != p.jd.gj && p.$.name !=
                  p.jd.Ue && p.$.name != p.jd.xi) a.qa(q), a.ya(), d();
                else {
                  var k = new c;
                  k.s(g.COMPLETE, function() {
                    try {
                      var c = new Uint8Array(k.data),
                        u = e.Te(c),
                        g = JSON.parse(u);
                      "ok" == g.result && g.hasOwnProperty("user_data") ? a.w = g.user_data : a.qa(q)
                    } catch (D) {
                      a.qa(q)
                    }
                    a.ya();
                    e.Tc(k);
                    d()
                  });
                  k.s(g.Db, function() {
                    a.qa(q);
                    a.ya();
                    d()
                  });
                  k.s(g.lc, function() {
                    a.qa(q);
                    a.ya();
                    d()
                  });
                  var u = new m(""),
                    f = a.De(document.location.search).user_id;
                  u.data = "user_id=" + f;
                  u.method = n.Jf;
                  u.contentType = "application/x-www-form-urlencoded";
                  k.load(u)
                }
              }).catch(q) :
              q("USER_ID not configured") : q("APP_ID not configured")
          })
        };
        a.De = function(a) {
          var d = {};
          if (1 >= a.length) return d;
          a = a.slice(1);
          for (var c, q, k = a.split("&"), e = 0; e < k.length; e++) c = k[e], q = c.indexOf("="), -1 != q && (a = decodeURI(c.substr(0, q)), c = decodeURI(c.substr(q + 1)), d[a] = c);
          return d
        };
        a.qa = function(d) {
          try {
            var c = "string" === typeof d && 0 < d.length ? d : a.fa.getItem(a.K);
            "string" === typeof c && 0 < c.length && (a.w = JSON.parse(c))
          } catch (L) {}
          a.w = a.w || {}
        };
        a.ya = function() {
          0 === a.C("stats.install.date") && a.i("stats.install.date", Date.now());
          0 === a.C("stats.install.playTime") && a.i("stats.install.playTime", 0);
          a.i("stats.session.date", Date.now());
          var d = a.C("stats.numLaunches");
          0 < d ? d++ : d = 1;
          a.i("stats.numLaunches", d);
          t = a.C("stats.install.playTime", 0)
        };
        a.xc = function() {
          window.onblur = function() {
            a.ra()
          };
          window.onbeforeunload = function() {
            a.xa()
          };
          f.s(g.wc, function() {
            a.i("stats.session.loadDate", Date.now());
            a.xa()
          });
          f.s(g.bb, function() {})
        };
        a.i = function(d, c, q) {
          void 0 === q && (q = !0);
          a.Ja(d, !0) && (a.Ka(d, c), q && a.ra())
        };
        a.f = function(d, c) {
          return a.Ja(d) ? a.pa(d) ||
            c : c
        };
        a.C = function(d, c) {
          d = parseInt(a.f(d), 10);
          return isNaN(d) ? c || 0 : d
        };
        a.kh = function(d, c) {
          return +(a.f(d) || c)
        };
        a.ce = function(d, c) {
          return !(!a.f(d) && !c)
        };
        a.Ja = function(d, c) {
          void 0 === c && (c = !1);
          if (void 0 == d || "string" !== typeof d) return !1;
          try {
            for (var q = d.split("."), k = ""; 0 < q.length;) {
              "" != k && (k += ".");
              k += q.shift();
              var e = a.pa(k);
              void 0 == e && (e = e[q.shift()])
            }
            return !0
          } catch (K) {
            if (c) {
              q = d.split(".");
              for (k = ""; 1 < q.length;) "" != k && (k += "."), k += q.shift(), e = a.pa(k), void 0 == e && a.Ka(k, {});
              return !0
            }
          }
          return !1
        };
        a.pa = function(d) {
          d =
            d.split(".");
          var c = a.w;
          if (void 0 == c) return c;
          for (; 0 < d.length;) {
            var q = "" + d.shift();
            c = c[q]
          }
          return c
        };
        a.Ka = function(d, c) {
          d = d.split(".");
          for (var q, k = a.w; 1 < d.length;) q = "" + d.shift(), k = k[q];
          k[d.shift()] = c
        };
        a.ra = function() {
          a.Za && a.K && (0 < a.sa ? a.ga = !0 : (a.ga = !1, a.sa = setTimeout(function() {
            a.sa = 0;
            a.ga && a.ra()
          }, 3E3), a.xa()))
        };
        a.xa = function() {
          if (a.Za && a.K) {
            a.i("stats.install.playTime", a.Cd(), !1);
            try {
              var d = JSON.stringify(a.w);
              a.fa.setItem(a.K, d);
              p.$.Kh()
            } catch (J) {}
          }
        };
        a.ai = function() {
          try {
            return JSON.stringify(a.w)
          } catch (u) {
            return "{}"
          }
        };
        a.te = "";
        a.w = {};
        a.ga = !1;
        a.sa = 0;
        a.ee = "";
        a.ve = "logo";
        a.od = !1;
        a.se = "";
        a.re = "";
        return a
      }();
      var d = function() {
          function a(a) {
            this.V = {};
            this.G = "users";
            this.Qa = "IceStoneSDK";
            this.Jc = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.b;
            this.Oc = 0 <= (navigator.userAgent || "").indexOf("Edge");
            this.Ra = "object" !== typeof this.Jc;
            this.Qa += "/" + p.$.name + "/" + a
          }
          a.prototype.Sc = function() {
            var a = this;
            return new Promise(function(d) {
              a.Ra && d();
              a.Pa(function(c) {
                a.eg(c, function(c) {
                  (c || []).forEach(function(d) {
                    return a.V[d.key] =
                      d.value
                  });
                  d()
                })
              }, function() {
                a.Ra = !0;
                d()
              })
            })
          };
          a.prototype.getItem = function(a) {
            return null == a ? null : this.V[a + ""]
          };
          a.prototype.setItem = function(a, d) {
            var c = this;
            if (null == a) throw "indexedDB Storage Error: at least one argument required";
            a += "";
            d += "";
            this.V[a] !== d && (this.V[a] = d, this.Ra || this.Pa(function(q) {
              c.Oc ? q.transaction([c.G], "readwrite").objectStore(c.G).clear(a).onsuccess = function() {
                Object.keys(c.V).forEach(function(a) {
                  q.transaction([c.G], "readwrite").objectStore(c.G).put({
                    key: a,
                    value: c.V[a]
                  })
                })
              } : q.transaction([c.G],
                "readwrite").objectStore(c.G).put({
                key: a,
                value: d
              })
            }))
          };
          a.prototype.Pa = function(a, d) {
            var c = this;
            try {
              var q, k = indexedDB.open(this.Qa, 1);
              k.onsuccess = function() {
                q ? q = !1 : a(k.result)
              };
              k.onerror = function() {
                d && d()
              };
              k.onupgradeneeded = function(k) {
                q = !0;
                k.currentTarget.result.createObjectStore(c.G, {
                  keyPath: "key"
                });
                c.Pa(a, d)
              }
            } catch (K) {
              d && d()
            }
          };
          a.prototype.eg = function(a, d) {
            var c = [];
            a.transaction([this.G], "readonly").objectStore(this.G).openCursor().onsuccess = function(a) {
              (a = a.target.result) ? (c.push(a.value), a.continue()) :
              d(c)
            }
          };
          return a
        }(),
        k = function() {
          var a = navigator.appVersion,
            d = navigator.userAgent,
            c = navigator.appName,
            k = "" + parseFloat(navigator.appVersion),
            e, g, f; - 1 != (g = d.indexOf("Opera")) ? (c = "Opera", k = d.substring(g + 6), -1 != (g = d.indexOf("Version")) && (k = d.substring(g + 8))) : -1 != (g = d.indexOf(" OPR")) ? (c = "Opera", k = d.substring(g + 5)) : -1 != (g = d.indexOf("MSIE")) ? (c = "Microsoft Internet Explorer", k = d.substring(g + 5)) : -1 != (g = d.indexOf("Edge")) ? (c = "Microsoft Edge", k = d.substring(g + 5)) : -1 != (g = d.indexOf("Chrome")) ? (c = "Chrome", k = d.substring(g +
            7)) : -1 != (g = d.indexOf("Safari")) ? (c = "Safari", k = d.substring(g + 7), -1 != (g = d.indexOf("Version")) && (k = d.substring(g + 8))) : -1 != (g = d.indexOf("Firefox")) ? (c = "Firefox", k = d.substring(g + 8)) : -1 != d.indexOf("Trident/") ? (c = "Microsoft Internet Explorer", k = d.substring(d.indexOf("rv:") + 3)) : (e = d.lastIndexOf(" ") + 1) < (g = d.lastIndexOf("/")) && (c = d.substring(e, g), k = d.substring(g + 1), c.toLowerCase() == c.toUpperCase() && (c = navigator.appName)); - 1 != (f = k.indexOf(";")) && (k = k.substring(0, f)); - 1 != (f = k.indexOf(" ")) && (k = k.substring(0,
            f)); - 1 != (f = k.indexOf(")")) && (k = k.substring(0, f));
          isNaN(parseInt(k, 10)) && (k = "" + parseFloat(navigator.appVersion));
          e = /Mobile|mini|Fennec|Samsung|Android|iP(ad|od|hone)/.test(a);
          g = navigator.cookieEnabled;
          "undefined" == typeof navigator.cookieEnabled && (document.cookie = "testcookie", g = -1 != document.cookie.indexOf("testcookie"));
          f = "-";
          var m = [{
              v: "Windows 10",
              r: /(Windows 10.0|Windows NT 10.0)/
            }, {
              v: "Windows 8.1",
              r: /(Windows 8.1|Windows NT 6.3)/
            }, {
              v: "Windows 8",
              r: /(Windows 8|Windows NT 6.2)/
            }, {
              v: "Windows 7",
              r: /(Windows 7|Windows NT 6.1)/
            },
            {
              v: "Windows Vista",
              r: /Windows NT 6.0/
            }, {
              v: "Windows Server 2003",
              r: /Windows NT 5.2/
            }, {
              v: "Windows XP",
              r: /(Windows NT 5.1|Windows XP)/
            }, {
              v: "Windows 2000",
              r: /(Windows NT 5.0|Windows 2000)/
            }, {
              v: "Windows ME",
              r: /(Win 9x 4.90|Windows ME)/
            }, {
              v: "Windows 98",
              r: /(Windows 98|Win98)/
            }, {
              v: "Windows 95",
              r: /(Windows 95|Win95|Windows_95)/
            }, {
              v: "Windows NT 4.0",
              r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
              v: "Windows CE",
              r: /Windows CE/
            }, {
              v: "Windows 3.11",
              r: /Win16/
            }, {
              v: "Android",
              r: /Android/
            }, {
              v: "Open BSD",
              r: /OpenBSD/
            },
            {
              v: "Sun OS",
              r: /SunOS/
            }, {
              v: "Linux",
              r: /(Linux|X11)/
            }, {
              v: "iOS",
              r: /(iPhone|iPad|iPod)/
            }, {
              v: "Mac OS X",
              r: /Mac OS X/
            }, {
              v: "Mac OS",
              r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
              v: "QNX",
              r: /QNX/
            }, {
              v: "UNIX",
              r: /UNIX/
            }, {
              v: "BeOS",
              r: /BeOS/
            }, {
              v: "OS/2",
              r: /OS\/2/
            }, {
              v: "Search Bot",
              r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
          ];
          for (n in m) {
            var h = m[n];
            if (h.r.test(d)) {
              f = h.v;
              break
            }
          }
          var n = "-";
          /Windows/.test(f) && (n = /Windows (.*)/.exec(f)[1], f = "Windows");
          switch (f) {
            case "Mac OS X":
              n = /Mac OS X (10[\._\d]+)/.exec(d)[1];
              break;
            case "Android":
              n = /Android ([\._\d]+)/.exec(d)[1];
              break;
            case "iOS":
              for (a = /OS (\d+)_(\d+)_?(\d+)?/.exec(a) || []; 4 > a.length;) a.push("0");
              n = a[1] + "." + a[2] + "." + parseInt(a[3], 10)
          }
          d = l.wa.$d;
          switch (f) {
            case "Windows":
              a = 10 <= parseFloat(n) ? "Segoe UI" : "Times New Roman";
              d = l.wa.be;
              break;
            case "iOS":
            case "Mac OS":
            case "Mac OS X":
              a = "-apple-system";
              d = l.wa.Jd;
              break;
            case "Android":
              a = "Roboto";
              d = l.wa.td;
              break;
            case "Linux":
              d = l.wa.Fd;
            default:
              a = "_sans"
          }
          m = navigator.languages;
          return {
            oh: f,
            ek: n,
            platform: d,
            zg: c,
            uj: k,
            xj: g,
            Zj: e,
            language: void 0 != m && Array.isArray(m) && 0 < m.length ? m[0] : navigator.language || navigator.b || "en-US",
            font: a
          }
        }()
    })(p.g || (p.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Storage,
        f = a.a.display.Na,
        g = a.a.g.Ha,
        e = a.a.m.aa,
        c = a.a.m.W,
        m = a.a.D.Yd;
      l.fi = function() {
        function a() {}
        a.Qi = 0;
        a.Ui = 1;
        a.wi = 2;
        a.zi = 3;
        a.Gi = 4;
        a.Ki = 5;
        a.Ei = 6;
        a.Ci = 7;
        a.Mi = 8;
        a.Oi = 9;
        return a
      }();
      var n = function() {
        function a() {}
        a.Jb = 0;
        a.Ib = 1;
        a.vc = 2;
        a.uc = 3;
        a.Of = 4;
        a.Pf = 5;
        return a
      }();
      l.jc = n;
      var t = function() {
        function a() {
          this.Ve = 0;
          this.sd = 5;
          this.ca = this.rb = null;
          this.Ub = !1;
          this.Wb = -1;
          this.da = this.Ve;
          this.Nc = !1;
          a.La()
        }
        a.La = function() {
          if (!a.i) {
            a.i = document.createElement("div");
            a.i.style.width = a.i.style.height = "100%";
            a.i.style.position = "absolute";
            a.i.style.zIndex = "256";
            a.i.style.top = "0px";
            a.i.style.left = "0px";
            a.i.style.visibility = "hidden";
            a.i.style.pointerEvents = "auto";
            a.i.style.overflowX = "hidden";
            a.i.style.overflowY = "hidden";
            f.Fa(a.i);
            a.f = document.createElement("div");
            a.f.style.width = a.f.style.height = "100%";
            switch (a.K) {
              case m.ha:
                a.f.style.backgroundColor = "black";
                break;
              case m.Ma:
                a.f.style.backgroundColor = "white"
            }
            a.f.style.position = "absolute";
            a.f.style.opacity = a.H + "";
            a.f.style.filter =
              "alpha(opacity=" + 100 * parseFloat(a.f.style.opacity) + ")";
            a.f.style.visibility = "hidden";
            a.i.appendChild(a.f);
            a.b = g.Cb("ad/loader.svg");
            if (a.b) {
              a.b.pauseAnimations();
              var c = document.createElement("div"),
                d = document.createElement("div");
              d.style.display = "table-cell";
              d.style.verticalAlign = "middle";
              d.style.textAlign = "center";
              c.style.display = "table";
              c.style.position = "absolute";
              c.style.height = "100%";
              c.style.width = "100%";
              d.style.background = "transparent";
              c.appendChild(d);
              a.i.appendChild(c);
              a.b.style.width = "20%";
              a.b.style.height = "20%";
              a.b.style.visibility = "hidden";
              d.appendChild(a.b);
              c = a.b.childNodes.length;
              for (d = 0; d < c; d++)
                if ("path" === a.b.childNodes[d].localName && "IceLoaderSVG" == a.b.childNodes[d].id) {
                  if ("default" == a.u || "" == a.u || null == a.u) switch (a.K) {
                    case m.ha:
                      a.b.childNodes[d].setAttribute("fill", "#ffffff");
                      break;
                    case m.Ma:
                      a.b.childNodes[d].setAttribute("fill", "#000000")
                  } else a.b.childNodes[d].setAttribute("fill", a.u);
                  break
                }
            }
          }
          a.C || (a.C = document.createElement("video"), a.C.style.position = "absolute", a.C.style.height =
            "100%", a.C.style.width = "100%", a.C.addEventListener("selectstart", a.preventDefault), a.Ia() ? a.C.style.visibility = "hidden" : a.i.appendChild(a.C));
          a.w || (a.w = document.createElement("div"), a.w.style.position = "absolute", a.w.style.height = "100%", a.w.style.width = "100%", a.w.addEventListener("selectstart", a.preventDefault), a.i.appendChild(a.w))
        };
        a.preventDefault = function(a) {
          a && "function" === typeof a.preventDefault && a.preventDefault()
        };
        a.prototype.oc = function() {
          this.rb = null;
          this.Ub = !1;
          this.Bf()
        };
        a.prototype.ia =
          function(a, c) {
            h.pb();
            this.Nc = !0;
            this.rb = c;
            this.Ub = !0
          };
        a.kd = function(c) {
          var d = this;
          if ((a.T != n.uc && a.T != n.vc || c != n.Jb) && a.T != c) switch (a.T = c, c) {
            case n.Jb:
              a.i && (a.i.style.visibility = "visible");
              if (!a.ga) break;
              a.f && (a.f.style.filter = "alpha(opacity=0)", a.f.style.opacity = "0", a.f.style.visibility = "visible");
              a.M = 0;
              a.b && (a.b.style.filter = "alpha(opacity=0)", a.b.style.opacity = "0", a.b.style.visibility = "visible", a.b.unpauseAnimations(), "Microsoft Internet Explorer" != h.I() && "Microsoft Edge" != h.I() || setTimeout(function() {
                a.M =
                  360;
                a.b.style.transform = "rotate(0deg)";
                a.b.style.transition = "0.6s linear";
                a.b.style.transform = "rotate(" + a.M + "deg)";
                a.b.addEventListener("transitionend", d.Bb)
              }, 500));
              a.Ja();
              break;
            case n.Ib:
              a.Z();
              break;
            case n.Of:
              a.Ka()
          }
        };
        a.prototype.Sh = function(c) {
          if ((this.Wb != n.uc && this.Wb != n.vc || c != n.Jb) && this.Wb != c) switch (this.Wb = c, c) {
            case n.vc:
              a.b && (a.b.style.visibility = "hidden");
              break;
            case n.Pf:
              a.b && (a.b.style.visibility = "visible");
              break;
            case n.uc:
              (c = document.getElementById("s3eHTML5AdsCloseButton")) && a.w.removeChild(c)
          }
        };
        a.Ja = function() {
          if (a.f && a.b) {
            a.Za();
            var c = a.H / 20;
            a.pa = setInterval(function() {
              a.f.style.opacity = "" + (parseFloat(a.f.style.opacity) + c);
              a.f.style.filter = "alpha(opacity= " + 100 * parseFloat(a.f.style.opacity) + ")";
              if (parseFloat(a.f.style.opacity) >= a.H) {
                a.f.style.opacity = "" + a.H;
                a.f.style.filter = "alpha(opacity= " + 100 * parseFloat(a.f.style.opacity) + ")";
                clearInterval(a.pa);
                var d = parseFloat("1") / 20;
                a.ra = setInterval(function() {
                  a.b.style.opacity = "" + (parseFloat(a.b.style.opacity) + d);
                  a.b.style.filter = "alpha(opacity= " +
                    100 * parseFloat(a.b.style.opacity) + ")";
                  1 <= parseFloat(a.b.style.opacity) && (a.b.style.opacity = "1", a.b.style.filter = "alpha(opacity= " + 100 * parseFloat(a.b.style.opacity) + ")", clearInterval(a.ra))
                }, a.va / 20)
              }
            }, a.sa / 20)
          }
        };
        a.Za = function() {
          a.f.style.opacity = "0";
          a.f.style.filter = "alpha(opacity= " + 100 * parseFloat(a.f.style.opacity) + ")";
          clearInterval(a.qa)
        };
        a.Ya = function() {
          a.f.style.opacity = "" + a.H;
          a.f.style.filter = "alpha(opacity= " + 100 * parseFloat(a.f.style.opacity) + ")";
          clearInterval(a.pa);
          a.b.style.opacity = "1";
          a.b.style.filter =
            "alpha(opacity= " + 100 * parseFloat(a.b.style.opacity) + ")";
          clearInterval(a.ra)
        };
        a.Ka = function() {
          if (a.f) {
            a.Ya();
            var c = parseFloat(a.f.style.opacity) / 20;
            a.qa = setInterval(function() {
              a.f.style.opacity = "" + (parseFloat(a.f.style.opacity) - c);
              a.f.style.filter = "alpha(opacity= " + 100 * parseFloat(a.f.style.opacity) + ")";
              0 >= parseFloat(a.f.style.opacity) && (a.f.style.opacity = "0", a.f.style.filter = "alpha(opacity= " + 100 * parseFloat(a.f.style.opacity) + ")", clearInterval(a.qa), a.Z())
            }, a.xa / 20)
          } else a.Z()
        };
        a.Z = function() {
          a.i &&
            (a.i.style.visibility = "hidden");
          a.f && (a.f.style.filter = "alpha(opacity=0)", a.f.style.opacity = "0", a.f.style.visibility = "hidden");
          a.b && (a.b.style.filter = "alpha(opacity=0)", a.b.style.opacity = "0", a.b.style.visibility = "hidden", a.b.pauseAnimations(), "Microsoft Internet Explorer" == h.I() || "Microsoft Edge" == h.I()) && (a.M = 0, a.b.style.transition = "", a.b.style.transform = "rotate(0deg)", a.b.removeEventListener("transitionend", a.Bb, !1))
        };
        a.Bb = function() {
          a.b.style.transform = "rotate(" + (a.M += 360) + "deg)"
        };
        a.prototype.Bf =
          function() {
            this.Nc && (this.Sh(n.Ib), this.cf(l.bf.rd))
          };
        a.prototype.cf = function(a) {
          this.Nc = !1;
          null != this.rb && (this.Ub = !1, this.da = this.sd, this.rb(a), this.Ub || (this.rb = null));
          this.da = this.sd
        };
        a.prototype.Sf = function(a) {
          this.ca = a
        };
        a.prototype.ea = function(a, c, d) {
          a.hasOwnProperty(c) && null != a[c] && "" != a[c] && (d = a[c]);
          return d
        };
        a.Ia = function() {
          return "object" === typeof window.cordova
        };
        a.ga = !1;
        a.sa = 300;
        a.va = 300;
        a.xa = 300;
        a.K = m.ha;
        a.H = .5;
        a.u = "default";
        a.T = -1;
        a.jb = 0;
        a.lb = function() {
          e.s(c.bb, function() {
            a.ga = !0
          });
          e.s(c.ae,
            function(c) {
              a.K = c[0];
              a.H = c[1];
              a.u = c[2];
              if (a.f) switch (a.K) {
                case m.ha:
                  a.f.style.backgroundColor = "black";
                  break;
                case m.Ma:
                  a.f.style.backgroundColor = "white"
              }
              if (a.b) {
                c = a.b.childNodes.length;
                for (var d = 0; d < c; d++)
                  if ("path" === a.b.childNodes[d].localName && "IceLoaderSVG" == a.b.childNodes[d].id) {
                    if ("default" == a.u || "" == a.u || null == a.u) switch (a.K) {
                      case m.ha:
                        a.b.childNodes[d].setAttribute("fill", "#ffffff");
                        break;
                      case m.Ma:
                        a.b.childNodes[d].setAttribute("fill", "#000000")
                    } else a.b.childNodes[d].setAttribute("fill", a.u);
                    break
                  }
              }
            });
          return !0
        }();
        return a
      }();
      l.ic = t
    })(p.Da || (p.Da = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(a) {
    (function(a) {
      a.Ii = function() {
        return function(a, g) {
          this.id = a;
          this.name = g
        }
      }();
      var h = function() {
        function a(a, e, c) {
          this.uh = a;
          this.yh = e;
          this.player = c
        }
        a.prototype.clone = function() {
          return new a(this.uh, this.yh, this.player)
        };
        return a
      }();
      a.Hi = h;
      h = function() {
        function a() {
          this.gh = []
        }
        a.prototype.ac = function(a, e) {
          void 0 === e && (e = -1);
          var c = this.gh.filter(function(c) {
            return c.Qh == a
          });
          return c.length ? c[0].ac(e) : []
        };
        return a
      }();
      a.Ef = h;
      (function() {
        function a(a, e) {
          this.fh = e;
          this.Qh = a
        }
        a.prototype.ac =
          function(a) {
            void 0 === a && (a = -1);
            var e = this.fh.concat();
            0 < a && (e.length = a);
            return e.map(function(a) {
              return a.clone()
            })
          };
        return a
      })()
    })(a.Ie || (a.Ie = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Ha,
        f = a.a.display.Na,
        g = function() {
          function a() {
            this.name = "IceStoneStoreButtons";
            this.O = !1;
            this.X = !0;
            this.le = /Mobile|mini|Fennec|Samsung|Android|iP(ad|od|hone)/.test(navigator.appVersion);
            this.Sb = !1;
            this.L = 0;
            this.S = 10;
            this.jg = this.N = 250;
            this.o = 0;
            this.ja = 1;
            this.qe = null
          }
          a.J = function() {
            a.Z || (a.Z = new a);
            return a.Z
          };
          a.ed = function(a) {
            this.Ba = a
          };
          a.prototype.Rc = function() {
            var a = this,
              e = document.createElement("div");
            e.style.width = e.style.height = "100%";
            e.style.position =
              "absolute";
            e.style.zIndex = "0";
            e.style.top = "0px";
            e.style.left = "0px";
            e.style.visibility = "hidden";
            e.id = "s3eStoreButtonsParentNode";
            f.Fa(e);
            var g = h.Uc("ui/s3eStoreButtonsPanel.html");
            g.style.position = "absolute";
            g.style.height = "100%";
            g.style.width = "100%";
            e.addEventListener("selectstart", function(a) {
              a && "function" === typeof a.preventDefault && a.preventDefault()
            });
            e.appendChild(g);
            this.Oa = document.getElementById("s3eStoreButtonsParentNode");
            if (this.Ca = document.getElementById("btn_panel"))
              if (this.Nb = h.Cb("ui/storeButton.svg"),
                this.ta = document.getElementById("drop_btn"), this.ta.appendChild(this.Nb), this.Ca) {
                if (self.asc && self.asc.panel && "function" === typeof self.asc.panel.ASCPanel && self.asc.panel.ASCPanel.instance) self.asc.panel.ASCPanel.instance.on("open", function() {
                  a.Zc()
                });
                this.O = !0
              } else this.O = !1;
            else this.O = !1
          };
          a.prototype.ad = function() {
            this.Va()
          };
          a.prototype.show = function() {
            this.X && (this.qe && this.qe(), this.Va())
          };
          a.prototype.Zc = function() {
            this.X || this.Va()
          };
          a.prototype.enable = function() {
            this.O && (this.ta.onmousedown =
              this.ad.bind(this))
          };
          a.prototype.disable = function() {
            this.O && (this.Zc(), this.ta.onmousedown = null)
          };
          a.log = function(a) {
            "function" === typeof this.Ba && this.Ba("[IceStoneStoreButtons] : " + a)
          };
          a.prototype.Va = function() {
            this.o = 0;
            if (this.O) {
              this.ta.onmousedown = null;
              var a = document.getElementById("store_btn_arrow");
              if (a) {
                var e = window.innerHeight,
                  g = window.innerWidth;
                window.innerHeight < window.innerWidth && this.le && (e = window.innerWidth, g = window.innerHeight);
                this.ja = g / e <= this.rg / this.qg ? g / this.rg : e / this.qg;
                this.X ?
                  a.setAttribute("transform", "") : a.setAttribute("transform", "rotate(-90) translate(-52) rotate(-90) translate(-152)");
                clearInterval(this.L);
                this.L = this.X ? setInterval(this.Se.bind(this), this.S) : setInterval(this.gb.bind(this), this.S)
              }
            }
          };
          a.prototype.Se = function() {
            this.o += this.S;
            var a = this.yb(this.jg);
            this.Nb.style.marginTop = this.X ? Math.round(this.ja * this.sb + this.ja * (this.sb + 10) * (1 - a)) + "px" : Math.round(this.ja * this.sb + this.ja * (this.sb + 10) * a) + "px";
            this.o >= this.N && (this.X ? (this.o = 0, clearInterval(this.L), this.Nb.style.marginTop =
              Math.round(this.ja * this.sb) + "px", this.L = setInterval(this.gb.bind(this), this.S)) : (this.o = this.N, clearInterval(this.L), this.ta.onmousedown = this.ad.bind(this), this.Nb.style.marginTop = Math.round(this.ja * (2 * this.sb + 10)) + "px", this.X = !this.X))
          };
          a.prototype.gb = function() {
            this.o += this.S;
            var a = this.yb(this.N),
              e = document.getElementById("btn_panel");
            e.style.marginTop = this.X ? -Math.round(this.ja * this.ne * (1 - a)) + "px" : -Math.round(this.ja * this.ne * a) + "px";
            this.o >= this.N && (this.X ? (this.o = this.N, clearInterval(this.L),
              this.ta.onmousedown = this.ad.bind(this), e.style.marginTop = "", this.X = !this.X) : (this.o = 0, clearInterval(this.L), e.style.marginTop = -Math.round(this.ja * this.ne) + "px", this.L = setInterval(this.Se.bind(this), this.S)))
          };
          a.prototype.yb = function(a) {
            return this.xb(this.o, 0, 1, a)
          };
          a.prototype.xb = function(a, e, g, f) {
            return 1 > (a /= f / 2) ? g / 2 * a * a + e : -g / 2 * (--a * (a - 2) - 1) + e
          };
          return a
        }();
      l.Af = g
    })(p.D || (p.D = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      (function(h) {
        (function(f) {
          var g = a.a.g.Ac,
            e = a.a.g.Bc,
            c = a.a.g.Lb,
            h = a.a.m.W,
            l = a.a.g.Mb,
            p = a.a.display.Na,
            d = function() {
              function a() {
                this.name = "gamedistribution";
                this.kg = "data:image/png;base64,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";
                this.lg = " data:image/png;base64,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";
                this.Pb = this.me = this.O = !1;
                this.L = 0;
                this.S = 100
              }
              a.J = function() {
                a.Z || (a.Z = new a);
                return a.Z
              };
              a.ed = function(a) {
                this.Ba = a
              };
              a.prototype.Gh = function(a) {
                this.je = a
              };
              a.prototype.Zb = function(a) {
                this.je && this.je(a)
              };
              a.prototype.Rc = function() {
                var d = this;
                if (a.Ph()) this.O = !1;
                else {
                  var k = new g;
                  k.s(h.COMPLETE, function() {}
                    l.Tc(k)
                  });
                  var f = new e("GDConfig.json");
                  f.method = c.mc;
                  f.contentType = "text";
                  k.load(f)
                }
                p.ec();
                var m = document.createElement("div");
                m.style.width = m.style.height = "100%";
                m.style.backgroundColor = "black";
                m.style.display = "flex";
                m.style.justifyContent = "center";
                m.style.alignItems = "center";
                m.style.position = "absolute";
                m.style.pointerEvents = "auto";
                m.style.visibility =
                  "hidden";
                p.Pc(m, 0);
                var n = document.createElement("img");
                n.style.width = "50vw";
                n.id = "portraitImgDiv";
                n.src = this.lg;
                n.style.position = "absolute";
                n.style.visibility = "hidden";
                m.appendChild(n);
                var t = document.createElement("img");
                t.style.width = "50vw";
                t.id = "landscapeImgDiv";
                t.src = this.kg;
                t.style.position = "absolute";
                t.style.visibility = "hidden";
                m.appendChild(t);
                null != window.flash && "object" === typeof window.flash && window.flash.display && window.flash.display.Stage && window.flash.display.Stage.current && (f = window.flash.display.Stage.current,
                  f.addEventListener("orientationChange", function() {
                    m.style.visibility = "hidden";
                    t.style.visibility = "hidden";
                    n.style.visibility = "hidden"
                  }), f.addEventListener("orientationMismatch", function(a) {
                    "portrait" === a.afterOrientation ? (m.style.visibility = "visible", t.style.visibility = "visible", n.style.visibility = "hidden") : (m.style.visibility = "visible", t.style.visibility = "hidden", n.style.visibility = "visible")
                  }), f.orientationMismatch && ("portrait" === f.orientation ? (m.style.visibility = "visible", t.style.visibility = "visible",
                    n.style.visibility = "hidden") : (m.style.visibility = "visible", t.style.visibility = "hidden", n.style.visibility = "visible")));
                this.L = setInterval(function() {
                  var a = document.getElementById("gdsdk__advertisement");
                  a && (a.style.pointerEvents = "auto", p.Fa(a), clearInterval(d.L))
                }, this.S)
              };
              a.prototype.og = function(a) {
                switch (a.name) {
                  case "SDK_READY":
                    this.Pb = !0;
                    window.gdsdk.showAd(window.gdsdk.AdType.Interstitial);
                    break;
                  case "SDK_GAME_START":
                    this.Pb ? (this.Pb = !1, this.O = this.me = !0, this.Zb("api_inited")) : this.Zb("endgame_resume");
                    this.Zb("gds_resume");
                    break;
                  case "SDK_GAME_PAUSE":
                    this.Zb("gds_pause")
                }
              };
              a.prototype.postHighScore = function() {};
              a.prototype.hh = function() {
                this.me && window.gdsdk.showAd(window.gdsdk.AdType.Interstitial)
              };
              a.Ph = function() {
                return "undefined" !== typeof window.gdsdk
              };
              a.log = function(c) {
                "function" === typeof this.Ba && this.Ba(a.J().name + ": " + c)
              };
              return a
            }();
          f.pf = d
        })(h.ze || (h.ze = {}))
      })(l.vb || (l.vb = {}))
    })(p.j || (p.j = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      (function(h) {
        var f = a.a.g.Id,
          g = a.a.g.Storage,
          e = a.a.j.vb.ze.pf,
          c = a.a.m.Eb,
          m = a.a.m.aa,
          n = function() {
            function a() {
              this.name = l.tc.xd;
              this.eb = !1
            }
            a.prototype.getLocale = function() {
              return null
            };
            a.prototype.initializeAsync = function() {
              var a = this;
              return (new Promise(function(c, d) {
                a.eb = null != e.J();
                a.Kc = c;
                g.Jh();
                a.eb ? (e.ed(f.Yh), e.J().Gh(a.ka.bind(a)), e.J().Rc()) : d()
              })).catch(function(a) {
                throw a;
              })
            };
            a.prototype.startGameAsync = function() {
              return (new Promise(function(a) {
                a()
              })).catch(function(a) {
                throw a;
              })
            };
            a.prototype.setLoadingProgress = function() {};
            a.prototype.start = function() {};
            a.prototype.hd = function() {
              return (new Promise(function(a) {
                a()
              })).catch(function(a) {
                throw a;
              })
            };
            a.prototype.Yb = function() {
              var a = this;
              return (new Promise(function(c) {
                a.Hc = c;
                e.J().hh()
              })).catch(function(a) {
                throw a;
              })
            };
            a.prototype.Yg = function() {
              return (new Promise(function(a) {
                a()
              })).catch(function(a) {
                throw a;
              })
            };
            a.prototype.Kh = function() {
              (new Promise(function(a) {
                a()
              })).catch(function(a) {
                throw a;
              })
            };
            a.prototype.ka = function(a) {
              switch (a) {
                case "api_inited":
                  this.eb &&
                    this.Kc && "function" === typeof this.Kc && this.Kc();
                  break;
                case "gds_resume":
                  this.eb && (m.h(c.Gb), m.h(c.qb));
                  break;
                case "gds_pause":
                  this.eb && (m.h(c.za), m.h(c.ib));
                  break;
                case "endgame_resume":
                  this.eb && this.Hc && "function" === typeof this.Hc && this.Hc()
              }
            };
            a.prototype.Oe = function() {
              (new Promise(function(a) {
                a()
              })).catch(function(a) {
                throw a;
              })
            };
            return a
          }();
        h.Mf = n
      })(l.vb || (l.vb = {}))
    })(p.j || (p.j = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.j.vb.Mf,
        f = function() {
          function a() {}
          a.xd = "gamedistribution";
          return a
        }();
      l.tc = f;
      f.GAMEDISTRIBUTION = f.xd;
      f = function() {
        function a() {}
        a.j = new h;
        return a
      }();
      l.sc = f
    })(p.j || (p.j = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Storage,
        f = a.a.m.W,
        g = a.a.m.aa,
        e = a.a.m.Eb,
        c = a.a.D.Af,
        m = function() {
          function a() {}
          a.ej = "adsense";
          a.$i = "fbinstant";
          a.pk = "lifestreet";
          a.sk = "lifestreet_html5";
          a.yi = "applixir";
          a.Fi = "cpmstar";
          a.Ji = "cpmstar_ima";
          a.Xi = "facebookaudiencenetwork";
          a.lk = "iwin";
          a.Bi = "arkadium";
          a.Ue = "Absolutist";
          a.dj = "unityads";
          a.li = "admob";
          a.ii = "adcolony";
          a.jk = "supersonic";
          a.ei = "ok";
          a.nj = "hyprmx";
          a.Vi = "exoclick";
          a.pi = "adsterra";
          a.Qf = "streamrail";
          a.vi = "aol";
          a.vk = "mintegral";
          a.hj = "harrenmedia";
          a.jj = "harrenmediabanner";
          a.aj = "smartadserver";
          a.oj = "yandexgames";
          a.oi = "pubnx";
          a.mj = "velismedia";
          a.ri = "pulsepoint";
          a.tk = "marsmedia";
          a.wk = "netlink";
          a.Wi = "selectmedia";
          a.ni = "Adsolut";
          a.si = "aniview";
          a.Li = "crazygames";
          return a
        }();
      l.ki = m;
      var n = function() {
        function a() {}
        a.Xe = 0;
        a.rd = 1;
        a.hc = 2;
        a.qd = 3;
        a.pd = 4;
        a.Ze = 5;
        a.We = 6;
        a.Ye = 7;
        return a
      }();
      l.bf = n;
      var p = function() {
        function a() {}
        a.Ag = function(a) {
          if (!a || 0 == a.length) return l.A.Pd;
          switch (a) {
            case "banner_top":
              return l.A.Ld;
            case "banner_bottom":
              return l.A.Kd;
            case "interstitial":
              return l.A.pc;
            case "rewarded":
              return l.A.rc;
            case "video":
              return l.A.Qd;
            case "more_apps":
              return l.A.qc;
            case "task_install":
              return l.A.Od;
            case "logo_url":
              return l.A.Md;
            case "store_buttons":
              return l.A.Nd;
            default:
              return l.A.Pd
          }
        };
        a.tj = function(a) {
          switch (a) {
            case l.A.Ld:
              return "banner_top";
            case l.A.Kd:
              return "banner_bottom";
            case l.A.pc:
              return "interstitial";
            case l.A.rc:
              return "rewarded";
            case l.A.Qd:
              return "video";
            case l.A.qc:
              return "more_apps";
            case l.A.Od:
              return "task_install";
            case l.A.Md:
              return "logo_url";
            case l.A.Nd:
              return "store_buttons";
            default:
              return "unknown"
          }
        };
        return a
      }();
      l.Ri = p;
      window.IceStone.isMuted;
      window.IceStone.isMuted || (window.IceStone.isMuted = !1);
      var d = function() {
        function a() {
          this.oe = this.Lc = 0;
          this.tb = null;
          this.le = /Mobile|mini|Fennec|Samsung|Android|iP(ad|od|hone)/.test(navigator.appVersion);
          this.U = null;
          this.Y = [];
          this.ba = 0;
          this.Vb = -1;
          this.Rb = 0;
          this.Ob = "";
          this.cb = 8;
          this.Mc = this.Tb = this.Qb = 0;
          this.Fc = !1;
          this.he = this.ge = 0;
          this.initializeAsync = this.initializeAsync.bind(this);
          this.fb = [];
          this.ca = [];
          this.Bg()
        }
        a.prototype.initializeAsync =
          function() {
            var a = this;
            return (new Promise(function(c) {
              "object" === typeof window.cordova && "object" === typeof window.CustomConfigParameters ? window.CustomConfigParameters.get(function(d) {
                d.platform && (a.Ob = d.platform);
                d.projectbundle && h.Dh(d.projectbundle);
                a.$c(c)
              }, function() {
                a.$c(c)
              }, ["platform", "projectbundle"]) : a.$c(c)
            })).catch(function(a) {
              throw a;
            })
          };
        a.prototype.$c = function(a) {
          var c = this;
          this.gg().then(function() {
            c.fe(a)
          }).catch(function() {
            c.fe(a)
          })
        };
        a.prototype.gg = function() {
          var a = h.$e();
          "" != this.Ob &&
            ("huawei" == this.Ob ? (a = a.split("."), 1 < a.length && "part" == a[0] && a.shift(), a.push("huawei"), a = "com.absolutist." + a.join("."), a = h.Ae()) : (a = a.split("."), 1 < a.length && "part" == a[0] && a.shift(), a.push("partners"), a = "com.absolutist." + a.join("."), a = h.Ae()));
          return (new Promise(function(a, c) {
            c("advertisement disabled")
          })).catch(function(a) {
            throw a;
          })
        };
        a.prototype.fe = function(c) {
          var d = window.JSON.parse(h.Mg());
          a.Zh || (d = {});
          if (d.hasOwnProperty("type")) {
            var e = d.type;
            h.Ah(e)
          }
          if (d.hasOwnProperty("blockListGameUrl")) h.Fh(),
            h.Ch(d.blockListGameUrl), h.Bh(d.contactIce), g.h(f.Sd);
          else {
            this.fb = [];
            if (e = d.providers)
              for (var q = e.length, k = 0; k < q; k++) {
                var m = e[k];
                if (m.hasOwnProperty("name") && 1 == m.active) {
                  var n = new l.Lf;
                  n.name = m.name;
                  n.state = l.Bd.Ad;
                  n.bc = !1;
                  n.Ga = m;
                  this.fb.push(n)
                }
              }
            this.ca = [];
            try {
              var t = d.placements;
              if (t) {
                var y = t.length;
                for (k = 0; k < y; k++) {
                  var r = t[k];
                  if (r.hasOwnProperty("name")) {
                    var D = r.channels;
                    if (D) {
                      var w = new l.Kf;
                      w.name = r.name;
                      w.type = p.Ag(this.ea(r, "type", "interstitial"));
                      w.Oh = this.ea(r, "startSession", 0);
                      w.Mh = this.ea(r,
                        "startGameplayTime", 0);
                      w.Nh = this.ea(r, "startGameplayTimeInSession", 0);
                      w.Ne = this.ea(r, "showInterval", 0);
                      w.startTime = this.ea(r, "startTime", "");
                      w.endTime = this.ea(r, "endTime", "");
                      w.Pe = this.ea(r, "showNumsPerDay", -1);
                      w.state = l.Xa.nc;
                      w.rk = 0;
                      d = [];
                      var M = D.length;
                      for (e = 0; e < M; e++) {
                        var B = D[e];
                        if (B.hasOwnProperty("name")) {
                          var z = new l.uf;
                          z.id = this.Lc;
                          this.Lc += 1;
                          z.name = B.name;
                          z.Xb = parseInt(this.ea(B, "prob", 0) + "");
                          z.Vj = this.ea(B, "start_show_delay", 0);
                          z.Ga = B;
                          z.Ga.gamePlacementChannelID = z.id;
                          z.Ga.gamePlacementName =
                            w.name;
                          z.Ga.gamePlacementType = w.type;
                          z.state = l.vf.rf;
                          d.push(z)
                        }
                      }
                      w.l = d;
                      this.ca.push(w)
                    }
                  }
                }
              }
            } catch (F) {
              "Microsoft Internet Explorer" == h.I() && window.console.log(F)
            }
            this.initAd();
            c && c()
          }
        };
        a.prototype.initAd = function() {
          this.oe = h.Ff();
          h.wf();
          var a;
          this.Wh();
          var c = this.fb.length;
          for (a = 0; a < c; a++);
          this.oc()
        };
        a.prototype.Nf = function(a) {
          var c, d, e = [],
            q = this.ca.length;
          for (c = 0; c < q; c++) {
            var g = this.ca[c].l,
              k = g.length;
            for (d = 0; d < k; d++) g[d].name == a.name && 0 < g[d].Xb && e.push(g[d].Ga)
          }
          a.state = l.Bd.tf;
          a.Ua.Sf(e);
          a.Ua.oc()
        };
        a.prototype.Wh = function() {
          var a, c, d = this.ca.length;
          for (a = 0; a < d; a++) {
            var e = this.ca[a],
              g = e.l.length;
            for (c = 0; c < g; c++)
              if (0 < e.l[c].Xb) {
                var k = this.Yc(e.l[c].name);
                k && !k.bc && (k.bc = !0)
              }
          }
        };
        a.prototype.Yc = function(a) {
          var c = this.fb.filter(function(c) {
            return c.name == a
          });
          return c.length ? c[0] : null
        };
        a.prototype.Xc = function(a) {
          var c = this.ca.filter(function(c) {
            return c.name == a
          });
          return c.length ? c[0] : null
        };
        a.prototype.oc = function() {
          var a;
          for (a = 0; a < this.fb.length; a++) {
            var c = this.fb[a];
            c.bc && c.Ua && this.Nf(c)
          }
        };
        a.prototype.Cg =
          function() {
            var a = this.Xc("midroll");
            return this.ue(a)
          };
        a.prototype.Vf = function(a) {
          void 0 === a && (a = null);
          this.U = a;
          c.J().disable();
          g.h(e.ib);
          window.IceStone.isMuted = !0;
          h.dc("preroll");
          this.ia("preroll", this.Ab.bind(this))
        };
        a.prototype.Uf = function(a) {
          void 0 === a && (a = null);
          this.U = a;
          c.J().disable();
          g.h(e.ib);
          window.IceStone.isMuted = !0;
          h.dc("midroll");
          "" == this.Ob ? this.ia("midroll", this.Ab.bind(this)) : this.ia("interstitial", this.Ab.bind(this))
        };
        a.prototype.Xd = function(a) {
          void 0 === a && (a = null);
          this.U = a;
          this.ia("store_buttons",
            this.cd.bind(this))
        };
        a.prototype.Tf = function() {
          this.ia("abs_interstitial", this.rh.bind(this))
        };
        a.prototype.Xf = function(a) {
          void 0 === a && (a = null);
          this.He() ? this.Xd(a) : (this.U = a, this.ia("store_buttons_preroll", this.cd.bind(this)))
        };
        a.prototype.Wf = function() {
          var a;
          void 0 === a && (a = null);
          this.He() ? this.Xd(a) : (this.U = a, this.ia("store_buttons_midroll", this.cd.bind(this)))
        };
        a.prototype.He = function() {
          return this.Xc("store_buttons") ? !0 : !1
        };
        a.prototype.rh = function() {
          null != this.U && this.U();
          h.dc("game");
          g.h(f.Td);
          g.h(e.qb);
          window.IceStone.isMuted = !1;
          l.ic.kd(l.jc.Ib);
          this.U = null;
          c.J().enable()
        };
        a.prototype.cd = function() {
          null != this.U && this.U()
        };
        a.prototype.Bg = function() {
          var a = this;
          this.Fc = !1;
          var c = document.createElement("div");
          c.innerHTML = "&nbsp;";
          c.className = "adsbox";
          document.body && (document.body.appendChild(c), setTimeout(function() {
            if (0 === c.offsetHeight || null == c || "none" == c.style.display || "hidden" == c.style.display || "hidden" == c.style.visibility) a.Fc = !0;
            document.body.removeChild(c)
          }, 200))
        };
        a.prototype.Ab = function(a) {
          switch (a) {
            case n.hc:
            case n.We:
            case n.Ye:
              if ((this.tb &&
                  "" == m.Qf || -1 == this.cb && this.$g() || 0 <= this.cb && this.ah()) && 1 < this.Y.length) {
                var d = !1;
                this.ba >= this.Y.length && (this.ba = 0, this.Vb = -1, d = !0);
                this.ba == this.Vb && (this.ba += 1);
                this.ba >= this.Y.length && (this.ba = 0, this.Vb = -1, d = !0);
                d && this.Mc++;
                if ((!d && -1 == this.cb || 0 <= this.cb) && 100 > this.Tb && 3 > this.Mc) {
                  a = this.Y[this.ba];
                  this.ba += 1;
                  d = this.Yc(a.name);
                  if (!d || !d.Ua) {
                    this.Ab(n.hc);
                    return
                  }
                  this.tb = d.Ua;
                  this.md();
                  this.Re();
                  this.Tb += 1;
                  this.tb.ia(a.Ga, this.Ab.bind(this));
                  g.h(f.yd);
                  return
                }
              }
          }
          this.Mc = this.Tb = 0;
          a != n.Xe && a !=
            n.rd && a != n.Ze && a != n.pd ? this.Tf() : (null != this.U && this.U(), h.dc("game"), g.h(f.Td), g.h(e.qb), window.IceStone.isMuted = !1, l.ic.kd(l.jc.Ib), this.U = null, c.J().enable())
        };
        a.prototype.ah = function() {
          this.Qb || this.Qe();
          return Math.floor(Date.now() / 1E3) - this.Qb > this.cb ? !1 : !0
        };
        a.prototype.$g = function() {
          this.Rb || this.md();
          return 2 < Math.floor(Date.now() / 1E3) - this.Rb ? !1 : !0
        };
        a.prototype.Re = function() {
          this.ge || Date.now || (Date.now = function() {
            return (new Date).getTime()
          });
          this.ge = Math.floor(Date.now() / 1E3)
        };
        a.prototype.Th =
          function() {
            this.he || Date.now || (Date.now = function() {
              return (new Date).getTime()
            });
            this.he = Math.floor(Date.now() / 1E3)
          };
        a.prototype.md = function() {
          this.Rb || Date.now || (Date.now = function() {
            return (new Date).getTime()
          });
          this.Rb = Math.floor(Date.now() / 1E3)
        };
        a.prototype.Qe = function() {
          this.Qb || Date.now || (Date.now = function() {
            return (new Date).getTime()
          });
          this.Qb = Math.floor(Date.now() / 1E3)
        };
        a.prototype.qh = function(a, c) {
          var d, e, g = a.l.length;
          for (d = 0; d < g; d++)
            if (0 < a.l[d].R && -1 == this.Y.indexOf(a.l[d])) {
              var k = !1,
                f = a.l[d].R,
                q = this.Y.length;
              for (e = 0; e < q; e++)
                if (this.Y[e].R < f) {
                  this.Y.splice(e, 0, a.l[d]);
                  k = !0;
                  break
                } k || this.Y.push(a.l[d])
            } this.ba = 0;
          this.Vb = this.Y.indexOf(c)
        };
        a.prototype.Uh = function(a) {
          var c = 0,
            d = !1,
            e, g = a.l.length;
          if (this.Fc)
            for (e = 0; e < g; e++) "Absolutist" != a.l[e].name && (a.l[e].Xb = 0);
          for (e = 0; e < g; e++) a.l[e].R = a.l[e].Xb, 0 < a.l[e].R && (c += a.l[e].R, d = !0);
          if (d) {
            d = 100 / c;
            var k = g = c = 0,
              f = a.l.length;
            for (e = 0; e < f; e++) 0 < a.l[e].R && (a.l[e].R = d * a.l[e].R, c += a.l[e].R, a.l[e].R > k && (k = a.l[e].R, g = e));
            a.l[g].R += 100 - c
          }
        };
        a.prototype.zh = function(a) {
          var c =
            100 * Math.random(),
            d = 0,
            e, g = a.l.length;
          for (e = 0; e < g; e++) {
            if (c >= d && c < d + a.l[e].R) return a.l[e];
            d += a.l[e].R
          }
          return null
        };
        a.prototype.ia = function(a, c) {
          void 0 === c && (c = null);
          this.Vh();
          if (a = this.Xc(a))
            if (a.state != l.Xa.zd) null != c && c(n.pd);
            else {
              this.Uh(a);
              var d = this.zh(a);
              if (d) {
                var e = this.Yc(d.name);
                if (e && e.Ua) {
                  this.Y = [];
                  this.Y.push(d);
                  this.qh(a, d);
                  var k = a.name;
                  this.Re();
                  this.Th();
                  this.md();
                  0 <= this.cb && this.Qe();
                  this.tb = e.Ua;
                  a.type != l.A.pc && a.type != l.A.rc && a.type != l.A.qc || l.ic.kd(l.jc.Jb);
                  this.tb.ia(d.Ga, c);
                  g.h(f.yd);
                  this.xh(k);
                  a.state = l.Xa.nc
                } else null != c && c(n.hc)
              } else null != c && c(n.qd)
            }
          else null != c && c(n.qd)
        };
        a.prototype.xh = function(a) {
          var c = "ad_" + a + "_lastShowTime",
            d = "ad_" + a + "_lastShowDay",
            e = "ad_" + a + "_showNumsPerDay",
            g = (new Date).getTime();
          g = Math.round(g / 864E5);
          a = this.Ke(a);
          a++;
          var k = Math.round(h.pb() / 1E3);
          h.fd(d, g);
          h.fd(e, a);
          h.fd(c, k)
        };
        a.prototype.Ke = function(a) {
          var c = "ad_" + a + "_showNumsPerDay",
            d = (new Date).getTime();
          d = Math.round(d / 864E5);
          return h.Wc("ad_" + a + "_lastShowDay") != d ? 0 : h.Wc(c)
        };
        a.prototype.Vh =
          function() {
            var a, c = this.ca.length;
            for (a = 0; a < c; a++) {
              var d = this.ca[a];
              d.state == l.Xa.nc && this.ue(d) && (d.state = l.Xa.zd)
            }
          };
        a.prototype.ue = function(a) {
          return this.oe < a.Oh ? (a.state = l.Xa.sf, !1) : this.Eg(a) && this.Fg(a) && this.Gg(a) && this.Ig(a) && this.Dg(a) && this.Hg(a) ? !0 : !1
        };
        a.prototype.Eg = function(a) {
          return Math.round(h.Cd() / 1E3) >= a.Mh ? !0 : !1
        };
        a.prototype.Fg = function(a) {
          return Math.round(h.pb() / 1E3) >= a.Nh ? !0 : !1
        };
        a.prototype.Gg = function(a) {
          if (0 == a.Ne) return !0;
          var c = h.Wc("ad_" + a.name + "_lastShowTime");
          if (0 == c) return !0;
          c = Math.round(h.pb() / 1E3) - c;
          return 0 > c || c >= a.Ne ? !0 : !1
        };
        a.prototype.Ig = function(a) {
          return 0 == a.startTime.length || (new Date).getTime() >= (new Date(a.startTime)).getTime() ? !0 : !1
        };
        a.prototype.Dg = function(a) {
          return 0 == a.endTime.length || (new Date).getTime() <= (new Date(a.endTime)).getTime() ? !0 : !1
        };
        a.prototype.Hg = function(a) {
          return -1 == a.Pe || this.Ke(a.name) < a.Pe ? !0 : !1
        };
        a.prototype.ea = function(a, c, d) {
          a.hasOwnProperty(c) && (d = a[c]);
          return d
        };
        a.Zh = !0;
        return a
      }();
      l.df = d
    })(p.Da || (p.Da = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj ||
  window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.D.Zd,
        f = function() {
          function a() {}
          a.Hf = "0";
          a.hi = "1";
          a.Gf = "2";
          return a
        }();
      l.bj = f;
      l.$f = function() {
        function a() {}
        a.nh = function() {
          a.Rh = document.location.href;
          var e = a.Rh.split("?");
          2 == e.length && (e = e[1], a.Ce(e), a.Xh(a.Ia.ui))
        };
        a.Xh = function(a) {
          switch (a) {
            case f.Hf:
              h.Fe() && h.Ge() && h.Je();
              break;
            case f.Gf:
              null != p.$ && p.$.Oe()
          }
        };
        a.Ce = function(e) {
          var c = e.split("&");
          a.Ia = {};
          for (var g = 0; g < c.length; g++) {
            var f = c[g];
            var h = f.indexOf("="); - 1 != h && (e = decodeURI(f.substr(0,
              h)), f = decodeURI(f.substr(h + 1)), h = a.Ia[e], void 0 != h ? (h instanceof Array || (a.Ia[e] = h = [h]), h.push(f)) : a.Ia[e] = f)
          }
        };
        a.Ia = {};
        return a
      }()
    })(p.g || (p.g = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      function h(a) {
        q = a;
        f.h(e.mf)
      }
      var f = a.a.m.aa,
        g = a.a.m.Eb,
        e = a.a.m.W,
        c = a.a.g.Storage,
        m = a.a.j.sc,
        n = a.a.g.ab,
        t = a.a.g.$f,
        d = a.a.display.Na,
        k = function() {
          function a() {}
          a.Gd = "load";
          a.IDLE = "idle";
          a.mb = "play";
          a.za = "pause";
          return a
        }();
      l.Yf = k;
      k.LOAD = k.Gd;
      k.IDLE = k.IDLE;
      k.PLAY = k.mb;
      k.PAUSE = k.za;
      l.yg = function() {
        var a = null;
        return (new Promise(function(c, d) {
          a = c;
          p.Ea ? p.Ea.Vf(function() {
            c()
          }) : d()
        })).catch(function(c) {
          if (a) a();
          else throw c;
        })
      };
      l.wg = function() {
        var a = d.zb();
        void 0 != a &&
          ("hidden" == a.style.visibility, "visible" == a.style.visibility);
        p.Ea && p.Ea.Xf(function() {
          t.nh()
        })
      };
      var q = "not_initialized";
      (function() {
        f.s(e.wc, function() {
          h(k.Gd)
        });
        f.s(e.bb, function() {
          h(k.IDLE)
        });
        f.s(g.za, function() {
          h(k.za)
        });
        f.s(g.Gb, function() {
          h(k.mb)
        })
      })();
      var u = function() {
        function a() {}
        a.start = function() {
          n.c ? n.c.game.start() : m.j && (m.j.start(), h(k.mb))
        };
        a.hd = function() {
          return (new Promise(function(a, c) {
            n.c ? n.c.game.startAsync().then(function() {
              a()
            }).catch(function() {
              c()
            }) : m.j ? m.j.hd().then(function() {
              h(k.mb);
              a()
            }).catch(c) : c()
          })).catch(function(a) {
            throw a;
          })
        };
        Object.defineProperty(a, "pauseIsExpected", {
          get: function() {
            return n.c ? n.c.game.pauseIsExpected : p.Ea && p.Ea.Cg() ? !0 : !1
          },
          enumerable: !0,
          configurable: !0
        });
        a.Yb = function(a, d, e) {
          void 0 === d && (d = 0);
          void 0 === e && (e = -1);
          return (new Promise(function(g, f) {
            n.c ? n.c.game.endAsync(a, d, e).then(function() {
              g()
            }).catch(function() {
              f()
            }) : m.j ? (0 <= d && c.Me(d), 0 <= e ? c.$b() || c.fc(e) : c.Le(), c.$b() && c.fc(c.Be() + 1), m.j.Yb(a).then(function() {
              h(k.IDLE);
              p.Ea.Uf(function() {
                p.Ea.Wf();
                g()
              })
            }).catch(f)) : f()
          })).catch(function(a) {
            throw a;
          })
        };
        a.ug = function(a, d) {
          void 0 === a && (a = 0);
          void 0 === d && (d = -1);
          n.c ? n.c.game.abandon(a, d) : m.j && (0 <= a && c.Me(a), 0 <= d ? c.$b() || c.fc(d) : c.Le(), c.$b() && c.fc(c.Be() + 1), m.j.Yb("abandon"), h(k.IDLE))
        };
        a.pause = function() {
          n.c ? n.c.game.pause() : h(k.za)
        };
        a.resume = function() {
          n.c ? n.c.game.resume() : h(k.mb)
        };
        a.getState = function() {
          return n.c ? n.c.game.getState() : q
        };
        return a
      }();
      l.nf = u;
      u.start = u.start;
      u.endAsync = u.Yb;
      u.pause = u.pause;
      u.resume = u.resume;
      u.getState = u.getState;
      u.abandon = u.ug;
      u.startAsync = u.hd
    })(p.game || (p.game = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Storage,
        f = a.a.g.ab,
        g = function() {
          function a() {}
          a.getID = function() {
            return f.c ? f.c.user.getID() : h.Vg()
          };
          a.getName = function() {
            return f.c ? f.c.user.getName() : h.Wg()
          };
          a.Qg = function() {
            return f.c ? f.c.user.getPhoto() : h.Xg()
          };
          a.getData = function() {
            return f.c ? f.c.user.getData() : h.Ug()
          };
          a.setData = function(a) {
            f.c ? f.c.user.setData(a) : h.Ih(a)
          };
          return a
        }();
      l.cg = g;
      g.getID = g.getID;
      g.getName = g.getName;
      g.getPhoto = g.Qg;
      g.getData = g.getData;
      g.setData = g.setData
    })(p.gc || (p.gc = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Mb;
      l.Zf = function() {
        function a() {}
        a.dh = function() {
          var e = a.f("user.uid", "");
          "" == e && (e = h.ld(null), e += (new Date).getTime(), a.i("user.uid", e));
          return e
        };
        a.initializeAsync = function() {
          return new Promise(function(e, c) {
            a.K = "default";
            a.fa = new f("IceStone.Common");
            a.fa.Sc().then(function() {
              a.xc();
              a.qa("");
              a.ya();
              e()
            }).catch(c)
          })
        };
        a.De = function(a) {
          var c = {};
          if (1 >= a.length) return c;
          a = a.slice(1);
          for (var e, f, g = a.split("&"), d = 0; d < g.length; d++) e = g[d], f = e.indexOf("="),
            -1 != f && (a = decodeURI(e.substr(0, f)), e = decodeURI(e.substr(f + 1)), c[a] = e);
          return c
        };
        a.qa = function(e) {
          try {
            var c = "string" === typeof e && 0 < e.length ? e : a.fa.getItem(a.K);
            "string" === typeof c && 0 < c.length && (a.w = JSON.parse(c))
          } catch (m) {}
          a.w = a.w || {}
        };
        a.ya = function() {
          var e = a.C("stats.numLaunches");
          0 < e ? e++ : e = 1;
          a.i("stats.numLaunches", e)
        };
        a.xc = function() {
          window.onblur = function() {
            a.ra()
          };
          window.onbeforeunload = function() {
            a.xa()
          }
        };
        a.i = function(e, c, f) {
          void 0 === f && (f = !0);
          a.Ja(e, !0) && (a.Ka(e, c), f && a.ra())
        };
        a.f = function(e,
          c) {
          return a.Ja(e) ? a.pa(e) || c : c
        };
        a.C = function(e, c) {
          e = parseInt(a.f(e), 10);
          return isNaN(e) ? c || 0 : e
        };
        a.kh = function(e, c) {
          return +(a.f(e) || c)
        };
        a.ce = function(e, c) {
          return !(!a.f(e) && !c)
        };
        a.Ja = function(e, c) {
          void 0 === c && (c = !1);
          if (void 0 == e || "string" !== typeof e) return !1;
          try {
            for (var f = e.split("."), g = ""; 0 < f.length;) {
              "" != g && (g += ".");
              g += f.shift();
              var h = a.pa(g);
              void 0 == h && (h = h[f.shift()])
            }
            return !0
          } catch (d) {
            if (c) {
              f = e.split(".");
              for (g = ""; 1 < f.length;) "" != g && (g += "."), g += f.shift(), h = a.pa(g), void 0 == h && a.Ka(g, {});
              return !0
            }
          }
          return !1
        };
        a.pa = function(e) {
          e = e.split(".");
          var c = a.w;
          if (void 0 == c) return c;
          for (; 0 < e.length;) {
            var f = "" + e.shift();
            c = c[f]
          }
          return c
        };
        a.Ka = function(e, c) {
          e = e.split(".");
          for (var f, g = a.w; 1 < e.length;) f = "" + e.shift(), g = g[f];
          g[e.shift()] = c
        };
        a.ra = function() {
          a.K && (0 < a.sa ? a.ga = !0 : (a.ga = !1, a.sa = setTimeout(function() {
            a.sa = 0;
            a.ga && a.ra()
          }, 3E3), a.xa()))
        };
        a.xa = function() {
          if (a.K) try {
            var e = JSON.stringify(a.w);
            a.fa.setItem(a.K, e)
          } catch (c) {}
        };
        a.ai = function() {
          try {
            return JSON.stringify(a.w)
          } catch (e) {
            return "{}"
          }
        };
        a.w = {};
        a.ga = !1;
        a.sa =
          0;
        return a
      }();
      var f = function() {
        function a(a) {
          this.V = {};
          this.G = "users";
          this.Qa = "IceStoneSDK";
          this.Jc = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.b;
          this.Oc = 0 <= (navigator.userAgent || "").indexOf("Edge");
          this.Ra = "object" !== typeof this.Jc;
          this.Qa += "/" + p.$.name + "/" + a
        }
        a.prototype.Sc = function() {
          var a = this;
          return new Promise(function(c) {
            a.Ra && c();
            a.Pa(function(e) {
              a.fg(e, function(e) {
                (e || []).forEach(function(c) {
                  return a.V[c.key] = c.value
                });
                c()
              })
            }, function() {
              a.Ra = !0;
              c()
            })
          })
        };
        a.prototype.getItem = function(a) {
          return null == a ? null : this.V[a + ""]
        };
        a.prototype.setItem = function(a, c) {
          var e = this;
          if (null == a) throw "indexedDB StorageCommon Error: at least one argument required";
          a += "";
          c += "";
          this.V[a] !== c && (this.V[a] = c, this.Ra || this.Pa(function(f) {
            e.Oc ? f.transaction([e.G], "readwrite").objectStore(e.G).clear(a).onsuccess = function() {
              Object.keys(e.V).forEach(function(a) {
                f.transaction([e.G], "readwrite").objectStore(e.G).put({
                  key: a,
                  value: e.V[a]
                })
              })
            } : f.transaction([e.G], "readwrite").objectStore(e.G).put({
              key: a,
              value: c
            })
          }))
        };
        a.prototype.Pa = function(a, c) {
          var e = this;
          try {
            var f, g = indexedDB.open(this.Qa, 1);
            g.onsuccess = function() {
              f ? f = !1 : a(g.result)
            };
            g.onerror = function() {
              c && c()
            };
            g.onupgradeneeded = function(d) {
              f = !0;
              d.currentTarget.result.createObjectStore(e.G, {
                keyPath: "key"
              });
              e.Pa(a, c)
            }
          } catch (d) {
            c && c()
          }
        };
        a.prototype.fg = function(a, c) {
          var e = [];
          a.transaction([this.G], "readonly").objectStore(this.G).openCursor().onsuccess = function(a) {
            (a = a.target.result) ? (e.push(a.value), a.continue()) : c(e)
          }
        };
        return a
      }()
    })(p.g || (p.g = {}))
  })(a.a ||
    (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Ha,
        f = a.a.display.Na,
        g = a.a.m.aa,
        e = a.a.m.W,
        c = a.a.g.Storage,
        m = a.a.g.ab,
        p = a.a.g.Zf,
        t = function() {
          function d() {}
          d.af = function() {
            var a = document.getElementById("button"),
              d = c.Ng(),
              e = document.getElementById("contact_link"),
              f = document.getElementById("play"),
              g = c.Og(),
              h = document.getElementById("play_img"),
              l = document.getElementById("contact"),
              m = 642 / 4500,
              p = .266625,
              n = window.innerHeight * m,
              r = window.innerWidth * p,
              t = window.innerHeight / .5625 < window.innerWidth ? "hor" : "vert";
            e.innerHTML = d;
            e.setAttribute("href", d);
            h.setAttribute("src", "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0RjM2QzlERUQ0RjExRUE5MUJCODVCMzdBNDFFNjQ5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0RjM2QzlDRUQ0RjExRUE5MUJCODVCMzdBNDFFNjQ5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjREMjQ4NURBRUQxMDExRUE4RDE0QURGN0RERTczNzBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjREMjQ4NURCRUQxMDExRUE4RDE0QURGN0RERTczNzBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAUQgAAHQwAACo1AAA5lv/b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");
            f.setAttribute("href", g);
            n = 642 / 2133 * r;
            h.style.width = r + "px";
            h.style.height = n + "px";
            a.style.width = 2 * r + 3 * r / 4 + "px";
            l.style.width = 2 * r + 3 * r / 4 + "px";
            a.style.fontSize = .051 * window.innerHeight + "px";
            l.style.fontSize = .045 * window.innerHeight + "px";
            h.style.marginTop = n / 1.5 + "px";
            h.style.marginLeft = (2 * r + 3 * r / 4) / 2 - r / 2 + "px";
            a.style.marginTop = window.innerHeight / 3 + "px";
            l.style.marginLeft = (window.innerWidth - l.offsetWidth) / 2 + "px";
            "vert" == t ? (a.style.fontSize = .029 * window.innerWidth + "px", l.style.fontSize = .025 * window.innerWidth +
              "px") : (r = window.innerHeight / .5625 * p, n = 642 / 2133 * r, h.style.width = r + "px", h.style.height = n + "px", a.style.width = 2 * r + 3 * r / 4 + "px", a.style.fontSize = .051 * window.innerHeight + "px", l.style.fontSize = .045 * window.innerHeight + "px", h.style.marginTop = n / 1.5 + "px", h.style.marginLeft = (2 * r + 3 * r / 4) / 2 - r / 2 + "px");
            a.style.marginLeft = (window.innerWidth - a.offsetWidth) / 2 + "px";
            window.addEventListener("resize", function() {
              m = 642 / 4500;
              p = .266625;
              n = window.innerHeight * m;
              r = window.innerWidth * p;
              n = 642 / 2133 * r;
              h.style.width = r + "px";
              h.style.height =
                n + "px";
              a.style.width = 2 * r + 3 * r / 4 + "px";
              a.style.fontSize = .051 * window.innerHeight + "px";
              l.style.fontSize = .045 * window.innerHeight + "px";
              l.style.width = 2 * r + 3 * r / 4 + "px";
              h.style.marginTop = n / 1.5 + "px";
              h.style.marginLeft = (2 * r + 3 * r / 4) / 2 - r / 2 + "px";
              t = window.innerHeight / .5625 < window.innerWidth ? "hor" : "vert";
              a.style.marginTop = window.innerHeight / 3 + "px";
              l.style.marginLeft = (window.innerWidth - l.offsetWidth) / 2 + "px";
              "vert" == t ? (a.style.fontSize = .029 * window.innerWidth + "px", l.style.fontSize = .025 * window.innerWidth + "px") : (r = window.innerHeight /
                .5625 * p, n = 642 / 2133 * r, h.style.width = r + "px", h.style.height = n + "px", a.style.width = 2 * r + 3 * r / 4 + "px", a.style.fontSize = .051 * window.innerHeight + "px", l.style.fontSize = .045 * window.innerHeight + "px", h.style.marginTop = n / 1.5 + "px", h.style.marginLeft = (2 * r + 3 * r / 4) / 2 - r / 2 + "px");
              a.style.marginLeft = (window.innerWidth - a.offsetWidth) / 2 + "px"
            })
          };
          d.Vc = function(a, c, d, e) {
            a /= e;
            return -d * a * (a - 2) + c
          };
          d.setLoadingProgress = function() {};
          d.jh = function() {
            if (window.IceStone && a != window.IceStone) {
              var e = document.getElementById("sdk_loader_div");
              e ? (e = e.cloneNode(!0), e.id = "sdk_loader_div_new", f.Fa(d.b = e)) : (e = document.getElementById("Layer_1")) && e.parentElement && "svg" == e.parentElement.tagName.toLowerCase() && e.parentElement.parentElement && (e = e.parentElement.parentElement, e = e.cloneNode(!0), e.id = "sdk_loader_div_new", f.Fa(d.b = e));
              return !0
            }
            e = document.createElement("div");
            e.style.width = e.style.height = "100%";
            e.style.backgroundColor = "white";
            e.id = "sdk_loader_div";
            var g = h.Cb("logo/preloader.svg");
            g.style.width = g.style.height = "50%";
            g.style.top = "25%";
            g.style.left = "25%";
            g.style.position = "absolute";
            e.appendChild(d.qj = g);
            g = h.Cb("ad/loader.svg");
            for (var l = g.childNodes.length, m = 0; m < l; m++)
              if ("path" === g.childNodes[m].localName && "IceLoaderSVG" == g.childNodes[m].id) {
                g.childNodes[m].setAttribute("fill", "#4DC5F2");
                break
              } g.style.position = "absolute";
            g.style.bottom = "16.5%";
            g.style.left = "42.5%";
            g.style.width = "15%";
            g.style.height = "15%";
            e.appendChild(d.u = g);
            var n = h.Cb("logo/progressbar.svg");
            n.style.position = "absolute";
            n.style.bottom = "17.7%";
            n.style.left = "43.8%";
            n.style.width = "12.5%";
            n.style.height = "12.5%";
            l = n.childNodes.length;
            for (m = 0; m < l; m++) {
              if ("bar" === n.childNodes[m].id) {
                n.childNodes[m].setAttribute("stroke", "#4DC5F2");
                var p = n.childNodes[m],
                  t = p.getAttribute("r");
                p.setAttribute("stroke-dashoffset", (100 - d.ye) / 100 * 2 * Math.PI * t)
              }
              "progressText" === n.childNodes[m].id && n.childNodes[m].setAttribute("fill", "#4DC5F2")
            }
            n.style.visibility = "hidden";
            e.appendChild(d.Ya = n);
            f.Fa(d.b = e);
            if ("Microsoft Internet Explorer" == c.I() || "Microsoft Edge" == c.I() || "Firefox" == c.I()) !g ||
              "Microsoft Edge" != c.I() && "Firefox" != c.I() || (e = g.querySelector("#animateTransformLoader")) && e.parentElement.removeChild(e), setTimeout(function() {
                d.La = 360;
                d.u.style.transform = "rotate(0deg)";
                d.u.style.transition = "0.6s linear";
                d.u.style.transform = "rotate(" + d.La + "deg)";
                d.u.addEventListener("transitionend", d.Bb)
              }, 500);
            return !0
          };
          d.di = function() {};
          d.Bb = function() {
            d.u.style.transform = "rotate(" + (d.La += 360) + "deg)"
          };
          d.Yj = function() {
            d.Ya.style.transform = "rotate(" + (d.we += 360) + "deg)"
          };
          d.$h = function(a) {
            d.u && (d.u.style.opacity =
              "" + a, d.u.style.filter = "alpha(opacity= " + 100 * parseFloat(d.u.style.opacity) + ")")
          };
          d.xb = function(a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a + c : -d / 2 * (--a * (a - 2) - 1) + c
          };
          d.Va = function() {
            d.o = 0;
            d.Ec = !0;
            d.L = setInterval(this.gb.bind(this), this.S)
          };
          d.gb = function() {
            if (d.Ec) {
              d.o += d.S;
              var a = d.xb(d.o, 0, 1, d.N);
              1 <= a && (d.Ec = !1, clearInterval(d.L));
              d.Cc && (a = 1 - a);
              d.$h(a)
            }
          };
          d.ye = 10;
          d.wh = 90;
          d.La = 0;
          d.we = 0;
          d.sh = !1;
          d.jb = !1;
          d.th = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          d.Cj = function() {
            if (-1 != c.ob().indexOf("facebook") ||
              -1 != c.hb().indexOf("facebook") || window.location && window.location.href && -1 != window.location.href.indexOf("facebook") || -1 != c.ob().indexOf("odnoklassniki") || -1 != c.hb().indexOf("odnoklassniki") || window.location && window.location.href && -1 != window.location.href.indexOf("odnoklassniki") || -1 != c.ob().indexOf("mailru") || -1 != c.hb().indexOf("mailru") || window.location && window.location.href && -1 != window.location.href.indexOf("mailru") || -1 != c.ob().indexOf("wizq") || -1 != c.hb().indexOf("wizq") || window.location && window.location.href &&
              -1 != window.location.href.indexOf("wizq") || -1 != c.ob().indexOf("vkontakte") || -1 != c.hb().indexOf("vkontakte") || window.location && window.location.href && -1 != window.location.href.indexOf("vkontakte")) return !1;
            "Microsoft Internet Explorer" == c.I() && window.addEventListener("load", function() {
              d.jb || (d.jb = !0, window.IceStone && a == window.IceStone && (f.ec(), m.c && (m.c.setRoot(f.zb()), f.cc())))
            });
            window.requestAnimationFrame(function() {
              window.IceStone && a == window.IceStone && (document.body ? (f.ec(), m.c && (m.c.setRoot(f.zb()),
                f.cc())) : window.addEventListener("load", function() {
                d.jb || (d.jb = !0, window.IceStone && a == window.IceStone && (f.ec(), m.c && (m.c.setRoot(f.zb()), f.cc())))
              }));
              p.initializeAsync().then(function() {}).catch(function() {})
            });
            g.s(e.bb, function() {
              f.removeChild(d.b);
              d.sh = !0;
              d.u && (d.u.pauseAnimations(), "Microsoft Internet Explorer" == c.I() || "Microsoft Edge" == c.I()) && (d.La = 0, d.u.style.transition = "", d.u.style.transform = "rotate(0deg)", d.u.removeEventListener("transitionend", d.Bb, !1))
            });
            g.s(e.Sd, function() {
              var a = h.Uc("logo/block.html");
              a.style.pointerEvents = "auto";
              f.Fa(a);
              f.removeChild(d.b);
              d.af()
            });
            g.s(e.Kb, function(a) {
              var c = a[0];
              a = a[1];
              d.b && d.b.parentElement && ("hidden" == d.b.parentElement.style.visibility && (d.b.parentElement.style.visibility = "visible"), 0 == d.Cc && (d.Cc = !0, d.Va(), /iPad|iPhone|iPod/.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream || d.th) && (d.b.parentElement.style.visibility = "hidden", "object" === typeof window.cordova && setTimeout(function() {
                  d.b.parentElement.style.visibility = "visible"
                }, 0)),
                a = d.b.parentElement.clientHeight / d.b.parentElement.clientWidth <= a.width / a.height ? d.b.parentElement.clientWidth / a.width : d.b.parentElement.clientHeight / a.height, a = 1 - (1 - 1 / a) * c, d.b.style.width = parseInt("" + d.b.parentElement.clientWidth * a) + "px", d.b.style.height = parseInt("" + d.b.parentElement.clientHeight * a) + "px", d.b.style.left = parseInt("" + (d.b.parentElement.clientWidth - d.b.clientWidth) / 2, 10) + "px", d.b.style.top = parseInt("" + (d.b.parentElement.clientHeight - d.b.clientHeight) / 2, 10) + "px")
            });
            g.s(e.$a, function(a) {
              var c =
                a[0];
              a = a[1];
              if (void 0 != c && void 0 != a) {
                var e = c / a * 100 | 0,
                  f = document.getElementById("progressText");
                if (f) {
                  var g = d.Vc(e, 1, 99, 100) | 0;
                  95 <= e && (g = 100);
                  f.textContent = g + "";
                  c = c / a * d.wh + d.ye;
                  (a = document.getElementById("bar")) && !isNaN(c) && (e = a.getAttribute("r"), e = 2 * Math.PI * e, 0 > c && (c = 0), 100 < c && (c = 100), a.setAttribute("stroke-dashoffset", (100 - c) / 100 * e))
                }
              }
            });
            g.s(e.Hd, function() {
              d.Ya.style.visibility = "visible";
              d.u.style.visibility = "hidden"
            });
            g.s(e.COMPLETE, function() {
              "hidden" != d.Ya.style.visibility && (d.Ya.style.visibility =
                "hidden", d.u.style.visibility = "visible")
            });
            return d.jh()
          }();
          d.S = 10;
          d.N = 1E3;
          d.o = 0;
          d.L = 0;
          d.Cc = !1;
          d.Ec = !0;
          return d
        }();
      l.zf = t
    })(p.D || (p.D = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
(function(a) {
  function p(c, d, e) {
    if (v.c) return v.c.setDevelop(!0 === c, !0 === d, !0), a;
    C.Dc = !0 === c;
    C.kc = !0 === d;
    C.Wa = !0 === e;
    return a
  }

  function l(c) {
    if (N && !E) a.newRoot = c;
    else {
      if (v.c) return v.c.setRoot(c), a;
      F.gd(c);
      return a
    }
  }

  function h() {
    return v.c ? v.c.isStandalone() : "object" === typeof window.cordova
  }

  function f(c, d, f) {
    return (new Promise(function(g, h) {
      function k(e) {
        if ("object" === typeof window.cordova || "Microsoft Internet Explorer" == A.I()) {
          var f = document.createElement("script");
          f.src = e;
          f.onload = function() {
            var a =
              c.indexOf(e); - 1 < a && (c.splice(a, 1), 0 === c.length && g(), R.Kg(f))
          };
          f.onerror = h;
          document.body.appendChild(f)
        } else {
          var l = new M;
          l.s(r.COMPLETE, function() {
            y.h(r.$a, 100, 100);
            a.isPrerollShowed ? a.evalArray.push(l.data) : window.eval(l.data);
            R.Tc(l);
            var d = c.indexOf(e); - 1 < d && (c.splice(d, 1), 0 === c.length && (y.h(r.COMPLETE), g()))
          });
          l.s(r.Db, function() {
            return setTimeout(k, 1E3, e)
          });
          l.s(r.lc, h);
          l.s(r.$a, function(a, f) {
            if (0 >= f) {
              var g = c.indexOf(e); - 1 < g && (g = d[g], 0 < g && (f = g))
            }
            0 < f ? y.h(r.$a, a, f) : y.h(r.COMPLETE)
          });
          var m = new B(e);
          m.method = z.mc;
          m.contentType = "text/javascript";
          l.load(m);
          y.h(r.Hd)
        }
      }
      void 0 === c ? h() : ("string" === typeof c && (c = [c]), Array.isArray(d) || (d = [d]), !Array.isArray(c) || c.some(function(a) {
        return void 0 === a || "string" !== typeof a || 0 === a.length
      }) ? h() : 0 === c.length ? g() : (f && "" != f && (a.isPrerollShowed = !0, e(f).then(function() {
        O ? (E = !0, a.newRoot && a.setRoot(a.newRoot), E = !1, O()) : E = !0
      }).catch(function() {
        P ? P() : E = !0
      }), N = !0), (c = c.concat()).forEach(k)))
    })).catch(function(a) {
      throw a;
    })
  }

  function g(c, d, e) {
    Q ? e() : (S = a.a.Uj = new K, x.j.initializeAsync =
      x.j.initializeAsync.bind(x.j), x.j.startGameAsync = x.j.startGameAsync.bind(x.j), Q = a.a.Ea = new U, A.initializeAsync(c).then(x.j.initializeAsync).then(A.xg).then(Q.initializeAsync).then(function() {
        window.IceStone.isPrerollShowed = !0;
        D().then(function() {
          window.IceStone.isPrerollShowed = !1;
          var a = window.IceStone.evalArray.length,
            c;
          for (c = 0; c < a; c++) window.eval(window.IceStone.evalArray[c]);
          window.IceStone.evalArray.length = 0;
          y.h(r.wc);
          d()
        }).catch(function() {
          e()
        })
      }).catch(function() {
        e()
      }))
  }

  function e(c) {
    return (new Promise(function(d,
      e) {
      N ? E ? d() : (O = d, P = e) : window.IceStone && a == window.IceStone && !C.Wa ? v.Ee ? e() : v.initializeAsync(k()).then(function() {
        v.c ? (v.c.setDevelop(C.Dc, C.kc, !0), v.c.setRoot(F.zb()), G.J().Sb && v.c.ui.animateTo(G.Rg(), G.Pg()), F.cc(), y.dd(), v.c.initializeAsync(c).then(function() {
          d()
        }).catch(function() {
          e()
        })) : g(c, d, e)
      }).catch(function() {
        v.c = null;
        g(c, d, e)
      }) : g(c, d, e)
    })).catch(function(a) {
      throw a;
    })
  }

  function c(a) {
    v.c ? v.c.setLoadingProgress(a) : x.j && (x.j.setLoadingProgress(a), V.setLoadingProgress(a))
  }

  function m() {
    return (new Promise(function(a,
      c) {
      v.c ? v.c.startGameAsync().then(function() {
        a()
      }).catch(function() {
        c()
      }) : x.j ? x.j.startGameAsync().then(function() {
        G.J().Sb ? (G.J().Va(), y.s(r.ud, function() {
          y.h(r.bb);
          w();
          a()
        })) : (y.h(r.bb), w(), a())
      }).catch(c) : c()
    })).catch(function(a) {
      throw a;
    })
  }

  function n() {
    return v.c ? v.c.getLocale() : x.j ? x.j.getLocale() || A.Dd() : A.Dd()
  }

  function t() {
    return v.c ? v.c.getServiceProvider() : x.j ? x.j.name : null
  }

  function d() {
    return A.gf()
  }

  function k() {
    return W.version || "1.2"
  }

  function q() {}

  function u(a) {
    return v.c ? v.c.getLeaderboard(a) :
      S.ac("top", a)
  }

  function J() {
    return v.c ? v.c.disableLeaderboard() : !1
  }

  function L() {
    v.c && v.c.moreGames()
  }
  var x = a.a.j.sc,
    U = a.a.Da.df,
    K = a.a.Ie.Ef,
    A = a.a.g.Storage,
    y = a.a.m.aa,
    r = a.a.m.W,
    D = a.a.game.yg,
    w = a.a.game.wg,
    M = a.a.g.Ac,
    B = a.a.g.Bc,
    z = a.a.g.Lb,
    F = a.a.display.Na,
    C = a.a.g.Id,
    X = a.a.g.Ha,
    V = a.a.D.zf,
    v = a.a.g.ab,
    G = a.a.D.vd,
    R = a.a.g.Mb;
  a.Event = a.a.m.Eb;
  a.Event = a.Event;
  a.qf = a.a.game.Yf;
  a.GameState = a.qf;
  a.Rf = a.a.j.tc;
  a.ServiceProvider = a.Rf;
  a.wa = a.a.g.wa;
  a.DevicePlatform = a.wa;
  a.ag = a.a.D.Yd;
  a.Theme = a.ag;
  a.zc = a.a.D.zc;
  a.UIElements = a.zc;
  a.nk = p;
  a.setDevelop = p;
  a.gd = l;
  a.setRoot = l;
  a.Nj = h;
  a.isStandalone = h;
  a.Aj = f;
  a.downloadAsync = f;
  a.initializeAsync = e;
  a.initializeAsync = e;
  a.setLoadingProgress = c;
  a.setLoadingProgress = c;
  a.startGameAsync = m;
  a.startGameAsync = m;
  a.getLocale = n;
  a.getLocale = n;
  a.Ij = t;
  a.getServiceProvider = t;
  a.Hj = d;
  a.getDevicePlatform = d;
  a.Sg = k;
  a.getSDKVersion = k;
  a.Wj = q;
  a.logEvent = q;
  a.s = y.s;
  a.on = a.s;
  a.ac = u;
  a.getLeaderboard = u;
  a.zj = J;
  a.disableLeaderboard = J;
  a.$j = L;
  a.moreGames = L;
  a.gc = a.a.gc.cg;
  a.user = a.gc;
  a.game = a.a.game.nf;
  a.game = a.game;
  a.D = a.a.D.Zd;
  a.ui = a.D;
  var Q, S, W = X.json("config.json"),
    N = !1,
    E = !1;
  a.isPrerollShowed = !1;
  var O = null,
    P = null;
  a.evalArray;
  a.evalArray || (a.evalArray = []);
  a.newRoot;
  a.newRoot || (a.newRoot = null);
  a.disableOrientationChange = !0;
  C.Zg()
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
var I = window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}),
  T = I.a || (I.a = {}),
  Y = I.a.j.tc;
T.$ = I.a.j.sc.j;
T.jd = Y;
(function(a) {
  (function(p) {
    (function(l) {
      var h = a.a.g.Storage,
        f = a.a.g.Ha,
        g = a.a.display.Na,
        e = a.a.m.W,
        c = a.a.m.aa,
        m = function() {
          function a() {
            this.name = "IceStonePanel";
            this.O = !1;
            this.Ic = []
          }
          a.ed = function(a) {
            this.Ba = a
          };
          a.prototype.Rc = function() {
            var a, d = this;
            void 0 === a && (a = 0);
            var k = document.createElement("div");
            k.style.width = k.style.height = "100%";
            k.style.position = "absolute";
            k.style.zIndex = "0";
            k.style.top = "0px";
            k.style.left = "0px";
            k.style.visibility = "hidden";
            k.style.pointerEvents = "auto";
            k.id = "s3eFBIGLeaderbordParentNode";
            g.Fa(k);
            var l = f.Uc("leaderboard/s3eFBInstantPanel.html");
            l.style.position = "absolute";
            l.style.height = "100%";
            l.style.width = "100%";
            k.addEventListener("selectstart", function(a) {
              a && "function" === typeof a.preventDefault && a.preventDefault()
            });
            k.appendChild(l);
            this.Oa = document.getElementById("s3eFBIGLeaderbordParentNode");
            if (this.Ca = document.getElementById("s3eFBIGLeaderboardInviteFriends")) {
              this.ma = document.getElementById("s3eFBIGLeaderboard");
              this.la = document.getElementById("s3eFBIGInviteFriends");
              this.na =
                document.getElementById("s3eFBIGLeaderboardTab");
              this.ua = document.getElementById("s3eFBIGInviteFriendsTab");
              if (this.F = document.getElementById("cross-promo"))
                if (this.F.style.display = "none", this.F.style.marginTop = "4%", this.F.parentElement)
                  for (this.F.parentElement.style.height = "78%", k = k = 0; k < this.F.parentElement.children.length; k++)
                    if (l = this.F.parentElement.children[k], "cross-promo" != l.id) {
                      l.style.height = "85%";
                      break
                    } this.ta = document.getElementById("s3eFBIGPlay");
              this.ie = document.getElementById("s3eFBIGLeaderboardButtonText");
              if (k = document.getElementById("s3eFBIGInviteMoreFriends")) 0 == a ? k.onclick = function() {
                c.h(e.xf)
              } : 1 == a && (k.style.visibility = "hidden");
              if ("Microsoft Internet Explorer" == h.I() || "Microsoft Edge" == h.I() || "Safari" == h.I()) this.ma.onmousewheel = function(a) {
                a = window.event || a;
                d.ma.scrollTop -= 40 * Math.max(-1, Math.min(1, a.wheelDelta || -a.detail))
              }, this.la.onmousewheel = function(a) {
                a = window.event || a;
                d.la.scrollTop -= 40 * Math.max(-1, Math.min(1, a.wheelDelta || -a.detail))
              };
              "Firefox" == h.I() && (this.ma.onwheel = function(a) {
                a =
                  window.event || a;
                d.ma.scrollTop += 40 * Math.max(-1, Math.min(1, a.deltaY || -a.detail))
              }, this.la.onwheel = function(a) {
                a = window.event || a;
                d.la.scrollTop += 40 * Math.max(-1, Math.min(1, a.deltaY || -a.detail))
              });
              this.na && this.ua && this.ma && this.la ? (0 == a && (this.na.onclick = function() {
                  d.na.style.backgroundColor = "rgb(64, 128, 250)";
                  d.na.style.color = "rgb(255, 255, 255)";
                  d.ua.style.backgroundColor = "rgb(255, 255, 255)";
                  d.ua.style.color = "#3b5998";
                  d.ma.style.display = "block";
                  d.la.style.display = "none"
                }, this.ua.onclick = function() {
                  d.ua.style.backgroundColor =
                    "rgb(64, 128, 250)";
                  d.ua.style.color = "rgb(255, 255, 255)";
                  d.na.style.backgroundColor = "rgb(255, 255, 255)";
                  d.na.style.color = "#3b5998";
                  d.ma.style.display = "none";
                  d.la.style.display = "block"
                }), 1 == a && (this.na.style.borderRadius = "18px", this.na.style.width = "100%", this.ua.style.display = "none"), this.na.style.backgroundColor = "rgb(64, 128, 250)", this.na.style.color = "rgb(255, 255, 255)", this.ua.style.backgroundColor = "rgb(255, 255, 255)", this.ua.style.color = "#3b5998", this.ma.style.display = "block", this.la.style.display =
                "none", this.O = !0) : this.O = !1
            } else this.O = !1
          };
          a.prototype.show = function() {
            this.ta && (this.ta.onclick = function() {
              c.h(e.ff, "play")
            });
            this.ie && (this.ie.innerText = "Play now");
            this.Lh();
            this.O && (this.Ca && (this.Ca.style.display = "block"), this.Oa && (this.Oa.style.visibility = "visible", this.Oa.style.zIndex = "255"))
          };
          a.prototype.Zc = function() {
            this.F && (this.F.style.display = "none");
            this.O && (this.Ca && (this.Ca.style.display = "none"), this.Oa && (this.Oa.style.visibility = "hidden", this.Oa.style.zIndex = "0"))
          };
          a.prototype.Lh =
            function() {
              var a = this;
              if (this.F && 4 <= this.Ic.length) {
                this.F.innerHTML = "";
                var d = function(a) {
                    return (new Promise(function(c, d) {
                      var e = new XMLHttpRequest;
                      e.open("GET", a);
                      e.responseType = "blob";
                      e.onload = function() {
                        200 === e.status ? c(e.response) : d(Error("Image didn't load successfully; error code:" + e.statusText))
                      };
                      e.onerror = function() {
                        d(Error("There was a network error."))
                      };
                      e.send()
                    })).catch(function(a) {
                      throw a;
                    })
                  },
                  f = function(f, g) {
                    var h = new Image;
                    h.crossOrigin = "";
                    d(f).then(function(d) {
                      d = window.URL.createObjectURL(d);
                      h.src = d;
                      h.style.width = "71px";
                      h.style.padding = "5px";
                      h.style.borderRadius = "50%";
                      h.onclick = function() {
                        c.h(e.If, g)
                      };
                      a.F.appendChild(h)
                    }, function() {})
                  };
                this.F.style.display = "block";
                for (var g = [], h = 0; h < this.Ic.length; h++) g.push(this.Ic[h]);
                for (h = 0; 4 > h; h++) {
                  var l = parseInt(Math.random() * g.length + "", 10),
                    m = g[l];
                  f(m.image, m.link);
                  g.splice(l, 1)
                }
              } else if (this.F && (this.F.style.marginTop = "", this.F.parentElement))
                for (this.F.parentElement.style.height = "85%", f = f = 0; f < this.F.parentElement.children.length; f++)
                  if (g = this.F.parentElement.children[f],
                    "cross-promo" != g.id) {
                    g.style.height = "100%";
                    break
                  }
            };
          a.log = function(a) {
            "function" === typeof this.Ba && this.Ba("[IceStonePanel] : " + a)
          };
          return a
        }();
      l.Ai = m
    })(p.D || (p.D = {}))
  })(a.a || (a.a = {}))
})(window.__IceStone.cloneObj || window.IceStone || (window.IceStone = {}));
window.__IceStoneInited || (window.__IceStoneInited = !0, window.__IceStone = {}, window.__IceStone.cloneObj = {});

/// </IceStone>