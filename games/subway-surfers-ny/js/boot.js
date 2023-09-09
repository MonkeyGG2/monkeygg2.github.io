! function(t) {
  var a = {};

  function __webpack_require__(e) {
      if (a[e]) return a[e].exports;
      var n = a[e] = {
          i: e,
          l: !1,
          exports: {}
      };
      return t[e].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports
  }
  __webpack_require__.m = t, __webpack_require__.c = a, __webpack_require__.d = function(e, n, t) {
      __webpack_require__.o(e, n) || Object.defineProperty(e, n, {
          enumerable: !0,
          get: t
      })
  }, __webpack_require__.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, __webpack_require__.t = function(n, e) {
      if (1 & e && (n = __webpack_require__(n)), 8 & e) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (__webpack_require__.r(t), Object.defineProperty(t, "default", {
              enumerable: !0,
              value: n
          }), 2 & e && "string" != typeof n)
          for (var a in n) __webpack_require__.d(t, a, function(e) {
              return n[e]
          }.bind(null, a));
      return t
  }, __webpack_require__.n = function(e) {
      var n = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return __webpack_require__.d(n, "a", n), n
  }, __webpack_require__.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 486)
}({
  486: function(e, n, t) {
      function pathJoin() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return n.join("/")
      }

      function loadJson(e, n, t) {
          var a = new XMLHttpRequest;
          a.addEventListener("load", function() {
              var e = JSON.parse(this.responseText);
              n && n(e)
          }), a.open("GET", e + "?v=1gefx1jwdk0gj12hb"), a.send()
      }

      function loadScript(e, n) {
          try {
              var t = document.createElement("script");
              n && (t.onload = n), t.src = e + "?v=1gefx1jwdk0gj12hb", document.head.appendChild(t)
          } catch (e) {}
      }

      function loadFont(e, n) {
          var t = document.createElement("link");
          t.rel = "stylesheet", t.type = "text/css", t.href = e + "?v=1gefx1jwdk0gj12hb", t.media = "all", document.head.appendChild(t);
          var a = document.createElement("div");
          a.className = "fontcache", a.style = 'font-family: "' + n + '";', a.textContent = ".", document.body.appendChild(a)
      }

      function initApp(e) {
          var n, t, a;
          n = e.meta, t = pathJoin(n.path, n.splash), (a = document.querySelector("#og-game-holder")).style.backgroundColor = n.color, a.style.backgroundImage = 'url("' + t + '?v=1gefx1jwdk0gj12hb"")', loadFont("assets/font/lilita-one.css", "Lilita One"), loadFont("assets/font/titan-one.css", "Titan One"), window.sharedAppData.config.leaderboards && loadScript("js/leaderboard.js"), window.sharedAppData.config.vconsole && loadScript("https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.3.0/vconsole.min.js"), loadScript("js/inflate.min.js"), loadScript("js/vendor.js"), loadScript("js/main.js")
      }
      console.log = function() {
          return null
      }, console.warn = function() {
          return null
      }, window.GAME_CONFIG || (window.GAME_CONFIG = {
          fastplay: !1
      }), loadJson("assets/data/config.json", function(t) {
          var e, n, a, o = function() {
              var e = location.search.slice(location.search.indexOf("?") + 1).split("&"),
                  n = {};
              for (var t in e) {
                  var a = e[t].split("="),
                      o = a[0],
                      r = a[1];
                  void 0 !== r && ("true" !== r && "false" !== r || (r = "true" === r), n[o] = "string" == typeof r && r.match(/^[-.0-9]+$/) ? parseFloat(r) : r)
              }
              return n
          }();
          for (var r in t.pokiSdkDebug = !1, window.GAME_CONFIG) t[r] = window.GAME_CONFIG[r];
          for (var r in o) t[r] = o[r];
          window.sharedAppData = {
              config: t,
              bundle: {
                  meta: {
                      path: "./",
                      color: "#ffa4cd",
                      splash: "/assets/preload/splash_mip.png"
                  }
              }
          }, e = t.pokiSdkDebug, n = function(e) {
              if (void 0 === t.adBlocking && (t.adBlocking = e), t.bundlepath && t.env !== t.env_builtin) {
                  var n = pathJoin(t.bundlepath, t.env);
                  loadJson(pathJoin(n, "manifest.json"), function(e) {
                      e.meta.path = n, window.sharedAppData.bundle = e, initApp(window.sharedAppData.bundle)
                  })
              } else initApp(window.sharedAppData.bundle)
          }, (a = window.Tabouzigtsdk) ? (a.init().then(function() {
              a.gameLoadingStart(), n(!1)
          }).catch(function() {
              a.gameLoadingStart(), n(!0)
          }), a.setDebug(e)) : n(!0)
      })
  }
});