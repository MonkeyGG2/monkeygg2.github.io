!(function (h) {
    function webpackJsonpCallback(t) {
      for (var e, i, n = t[0], o = t[1], s = t[2], a = 0, r = []; a < n.length; a++) (i = n[a]), d[i] && r.push(d[i][0]), (d[i] = 0);
      for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (h[e] = o[e]);
      for (c && c(t); r.length; ) r.shift()();
      return l.push.apply(l, s || []), checkDeferredModules();
    }
  
    function checkDeferredModules() {
      for (var t, e = 0; e < l.length; e++) {
        for (var i = l[e], n = !0, o = 1; o < i.length; o++) {
          var s = i[o];
          0 !== d[s] && (n = !1);
        }
        n && (l.splice(e--, 1), (t = __webpack_require__((__webpack_require__.s = i[0]))));
      }
      return t;
    }
    var i = {},
      d = {
        1: 0,
      },
      l = [];
  
    function __webpack_require__(t) {
      if (i[t]) return i[t].exports;
      var e = (i[t] = {
        i: t,
        l: !1,
        exports: {},
      });
      return h[t].call(e.exports, e, e.exports, __webpack_require__), (e.l = !0), e.exports;
    }
    (__webpack_require__.m = h),
      (__webpack_require__.c = i),
      (__webpack_require__.d = function (t, e, i) {
        __webpack_require__.o(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: i,
          });
      }),
      (__webpack_require__.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
      }),
      (__webpack_require__.t = function (e, t) {
        if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (__webpack_require__.r(i),
          Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            __webpack_require__.d(
              i,
              n,
              function (t) {
                return e[t];
              }.bind(null, n)
            );
        return i;
      }),
      (__webpack_require__.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return __webpack_require__.d(e, "a", e), e;
      }),
      (__webpack_require__.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (__webpack_require__.p = "");
    var t = (this.webpackJsonp = this.webpackJsonp || []),
      e = t.push.bind(t);
    (t.push = webpackJsonpCallback), (t = t.slice());
    for (var n = 0; n < t.length; n++) webpackJsonpCallback(t[n]);
    var c = e;
    l.push([199, 2]), checkDeferredModules();
  })({
    127: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          easy: i(430),
          expert: i(439),
          normal: i(446),
          hard: i(455),
          main: i(462),
          special: i(468),
        });
    },
    129: function (t, e) {
      t.exports =
        "//precision highp float;\nvarying vec2 vUvs;\n\nuniform sampler2D diffuse;\nvarying vec3 vNormal;\nvarying float vLight;\nvarying vec3 vPosition;\nvarying vec3 vView;\n\nvoid main()\n{\n\t// vec3 p = vec3(vView * vPosition);\n\t// vec3 v = normalize(-p);\n\t// float vdn = 1.0 - max(dot(v, vNormal), 0.0); \n\n //    // gl_FragColor = texture2D(diffuse, vec2(vUvs.x, 1.-vUvs.y));//directionalLightWeighting;\n //    // gl_FragColor.rgb = mix(gl_FragColor.rgb*vLight, gl_FragColor.rgb, 0.7);\n\n //    if (vdn <= 1.0) {\n //    \tgl_FragColor.rgb = vec3(0, 0, 0);\n\t// } else {\n\t// \tgl_FragColor.rgb = vec3(1, 1, 1);\t\n\t// }\n \n vec3 nn = normalize(vNormal);\n  vec3 light_dir = normalize(vPosition);\n  vec3 eye_dir = normalize(-vPosition);\n  vec3 reflect_dir = normalize(reflect(light_dir, nn));\n\t\n  float spec = max(dot(reflect_dir, eye_dir), 0.0);\n\tfloat diffuse = max(dot(-light_dir, nn), 0.0);\n\n  float intensity = 0.6 * diffuse + 0.4 * spec;\n\n \tif (intensity > 0.9) {\n \t\tintensity = 1.1;\n \t}\n \telse if (intensity > 0.5) {\n \t\tintensity = 0.7;\n \t}\n \telse {\n \t\tintensity = 0.0;\n \t}\n\n \t// gl_FragColor = texture2D(diffuse, vec2(vUvs.x, 1.-vUvs.y));\n \t// vec3 col = mix(gl_FragColor.rgb*vLight, gl_FragColor.rgb, 0.7);\n \tgl_FragColor.rgb = vec3(1, 1, 1) * intensity;\n    \n}\n";
    },
    130: function (t, e) {
      t.exports =
        "\nattribute vec3 position;\nattribute vec3 normals;\nattribute vec4 bone_indices;\nattribute vec2 uvs;\n\nattribute vec4 weights;\n\nvarying vec2 vUvs;\nvarying vec3 vNormal;\nvarying float vLight;\nvarying vec3 vPosition;\nvarying vec3 vView;\n\nuniform mat4 view;\nuniform mat4 model;\nuniform mat3 normal;\nuniform mat4 projection;\n\nuniform mat4 bones[26];\n\nvoid main() {\n\n\tvUvs = uvs;\n\n\tvec4 outPosition = vec4(0.0);\n\tvec4 originalPosition = vec4(position, 1.);\n\n\tmat4 boneMatrix = mat4(0.0);\n\n\tboneMatrix += bones[int(bone_indices.x)] * weights.x;\n\tboneMatrix += bones[int(bone_indices.y)] * weights.y;\n\tboneMatrix += bones[int(bone_indices.z)] * weights.z;\n\tboneMatrix += bones[int(bone_indices.w)] * weights.w;\n\t// vNormal = normalize( normal * (vec4(boneMatrix * vec4(normals,0.0)).xyz) );\n\n\tvec3 transformedNormal = normalize( normal * (vec4(boneMatrix * vec4(normals,0.0)).xyz) );\n\tvNormal = transformedNormal;\n\tvPosition = position;\n\n\tvec3 p;\n\tvView = vec3(view * vec4(p, 0.0));\n\n\t// no light for now\n\t// vLight = max(dot(transformedNormal, vec3(0.0, 0.0,1.0)), 0.0);\n\tvLight = 1.0;\n\n    gl_Position = projection * view * model * boneMatrix * originalPosition;\n}\n";
    },
    132: function (t) {
      t.exports = {
        default: {
          image: {},
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {},
        },
        audio: {
          image: {},
          fonts: {},
          audio: {
            "audio/guard_catch": {
              mp3: "audio/guard_catch.mp3",
              ogg: "audio/guard_catch.ogg",
            },
            "audio/guard_proximity": {
              mp3: "audio/guard_proximity.mp3",
              ogg: "audio/guard_proximity.ogg",
            },
            "audio/guard_start": {
              mp3: "audio/guard_start.mp3",
              ogg: "audio/guard_start.ogg",
            },
            "audio/hero_death": {
              mp3: "audio/hero_death.mp3",
              ogg: "audio/hero_death.ogg",
            },
            "audio/hero_death_hitcam": {
              mp3: "audio/hero_death_hitcam.mp3",
              ogg: "audio/hero_death_hitcam.ogg",
            },
            "audio/hero_dodge": {
              mp3: "audio/hero_dodge.mp3",
              ogg: "audio/hero_dodge.ogg",
            },
            "audio/hero_foot_l": {
              mp3: "audio/hero_foot_l.mp3",
              ogg: "audio/hero_foot_l.ogg",
            },
            "audio/hero_foot_r": {
              mp3: "audio/hero_foot_r.mp3",
              ogg: "audio/hero_foot_r.ogg",
            },
            "audio/hero_hoverboard_crash": {
              mp3: "audio/hero_hoverboard_crash.mp3",
              ogg: "audio/hero_hoverboard_crash.ogg",
            },
            "audio/hero_jump": {
              mp3: "audio/hero_jump.mp3",
              ogg: "audio/hero_jump.ogg",
            },
            "audio/hero_revive": {
              mp3: "audio/hero_revive.mp3",
              ogg: "audio/hero_revive.ogg",
            },
            "audio/hero_roll": {
              mp3: "audio/hero_roll.mp3",
              ogg: "audio/hero_roll.ogg",
            },
            "audio/hero_sneakers_foot_l": {
              mp3: "audio/hero_sneakers_foot_l.mp3",
              ogg: "audio/hero_sneakers_foot_l.ogg",
            },
            "audio/hero_sneakers_foot_r": {
              mp3: "audio/hero_sneakers_foot_r.mp3",
              ogg: "audio/hero_sneakers_foot_r.ogg",
            },
            "audio/hero_sneakers_jump": {
              mp3: "audio/hero_sneakers_jump.mp3",
              ogg: "audio/hero_sneakers_jump.ogg",
            },
            "audio/hero_stumble": {
              mp3: "audio/hero_stumble.mp3",
              ogg: "audio/hero_stumble.ogg",
            },
            "audio/pickup_coin": {
              mp3: "audio/pickup_coin.mp3",
              ogg: "audio/pickup_coin.ogg",
            },
            "audio/pickup_powerup": {
              mp3: "audio/pickup_powerup.mp3",
              ogg: "audio/pickup_powerup.ogg",
            },
            "audio/special_jetpack": {
              mp3: "audio/special_jetpack.mp3",
              ogg: "audio/special_jetpack.ogg",
            },
            "audio/special_jetpack_start": {
              mp3: "audio/special_jetpack_start.mp3",
              ogg: "audio/special_jetpack_start.ogg",
            },
            "audio/special_magnet": {
              mp3: "audio/special_magnet.mp3",
              ogg: "audio/special_magnet.ogg",
            },
            "audio/theme": {
              mp3: "audio/theme.mp3",
              ogg: "audio/theme.ogg",
            },
            "audio/ui_button": {
              mp3: "audio/ui_button.mp3",
              ogg: "audio/ui_button.ogg",
            },
          },
          model: {},
          json: {},
          animate: {},
          misc: {},
        },
        data: {
          image: {},
          fonts: {},
          audio: {},
          model: {},
          json: {
            "data/config": {
              default: "data/config.json",
            },
            "data/strings_en": {
              default: "data/strings_en.json",
            },
            "data/strings_pt-br": {
              default: "data/strings_pt-br.json",
            },
          },
          animate: {},
          misc: {},
        },
        chunks_game: {
          image: {},
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {
            "data/chunks_game": {
              tags: {
                manifest: !0,
              },
              default: "data/chunks_game.json",
            },
          },
        },
        chunks_idle: {
          image: {},
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {
            "data/chunks_idle": {
              tags: {
                manifest: !0,
              },
              default: "data/chunks_idle.json",
            },
          },
        },
        font: {
          image: {},
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {
            "font/lilita-one": {
              default: "font/lilita-one.css",
            },
            "font/lilita-one-1": {
              default: "font/lilita-one.woff",
            },
            "font/lilita-one-2": {
              default: "font/lilita-one.woff2",
            },
            "font/titan-one": {
              default: "font/titan-one.css",
            },
            "font/titan-one-1": {
              default: "font/titan-one.woff",
            },
            "font/titan-one-2": {
              default: "font/titan-one.woff2",
            },
          },
        },
        game: {
          image: {
            "game/board_new_york_tex": {
              default: "game/board_new_york_tex.png",
              low: "game/board_new_york_tex_mip.png",
            },
            "game/effects_tex": {
              default: "game/effects_tex.png",
              low: "game/effects_tex_mip.png",
            },
            "game/enemies": {
              default: "game/enemies.png",
              low: "game/enemies_mip.png",
            },
            "game/halo": {
              default: "game/halo.png",
              low: "game/halo_mip.png",
            },
            "game/jetpackSmoke": {
              default: "game/jetpackSmoke.png",
              low: "game/jetpackSmoke_mip.png",
            },
            "game/ocean": {
              default: "game/ocean.png",
              low: "game/ocean_mip.png",
            },
            "game/shadow": {
              default: "game/shadow.png",
              low: "game/shadow_mip.png",
            },
            "game/spraySplash": {
              default: "game/spraySplash.png",
              low: "game/spraySplash_mip.png",
            },
          },
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {
            "game/board_new_york": {
              default: "game/board_new_york.fbx",
            },
            "game/board_new_york01": {
              default: "game/board_new_york01.fbx",
            },
            "game/environment": {
              default: "game/environment.fbx",
            },
            "game/model_avatar_catch": {
              default: "game/model_avatar_catch.fbx",
            },
            "game/model_avatar_movement": {
              default: "game/model_avatar_movement.fbx",
            },
            "game/model_avatar_powerup_jet_pack": {
              default: "game/model_avatar_powerup_jet_pack.fbx",
            },
            "game/model_avatar_powerup_pogostick": {
              default: "game/model_avatar_powerup_pogostick.fbx",
            },
            "game/model_avatar_start": {
              default: "game/model_avatar_start.fbx",
            },
            "game/model_dog_catch": {
              default: "game/model_dog_catch.fbx",
            },
            "game/model_dog_movement": {
              default: "game/model_dog_movement.fbx",
            },
            "game/model_guard_catch": {
              default: "game/model_guard_catch.fbx",
            },
            "game/model_guard_movement": {
              default: "game/model_guard_movement.fbx",
            },
            "game/props": {
              default: "game/props.fbx",
            },
            "game/trains": {
              default: "game/trains.fbx",
            },
          },
        },
        idle: {
          image: {
            "idle/environment_tex": {
              default: "idle/environment_tex.png",
              low: "idle/environment_tex_mip.png",
            },
            "idle/jake_tex": {
              default: "idle/jake_tex.png",
              low: "idle/jake_tex_mip.png",
            },
            "idle/props_tex": {
              default: "idle/props_tex.png",
              low: "idle/props_tex_mip.png",
            },
            "idle/train_start": {
              default: "idle/train_start.png",
              low: "idle/train_start_mip.png",
            },
            "idle/trains_tex": {
              default: "idle/trains_tex.png",
              low: "idle/trains_tex_mip.png",
            },
          },
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {
            "idle/environment_idle": {
              default: "idle/environment_idle.fbx",
            },
            "idle/model_avatar_idle_paint": {
              default: "idle/model_avatar_idle_paint.fbx",
            },
            "idle/props_start": {
              default: "idle/props_start.fbx",
            },
            "idle/trains_start": {
              default: "idle/trains_start.fbx",
            },
          },
        },
        placeholder: {
          image: {
            "placeholder/box_base": {
              default: "placeholder/box_base.png",
            },
            "placeholder/icon_00_brody": {
              default: "placeholder/icon_00_brody.png",
            },
            "placeholder/icon_01_tagbot": {
              default: "placeholder/icon_01_tagbot.png",
            },
            "placeholder/icon_02_tasha": {
              default: "placeholder/icon_02_tasha.png",
            },
            "placeholder/icon_03_ninja": {
              default: "placeholder/icon_03_ninja.png",
            },
            "placeholder/icon_04_lucy": {
              default: "placeholder/icon_04_lucy.png",
            },
            "placeholder/icon_05_king": {
              default: "placeholder/icon_05_king.png",
            },
            "placeholder/icon_06_frizzy": {
              default: "placeholder/icon_06_frizzy.png",
            },
            "placeholder/icon_07_yutani": {
              default: "placeholder/icon_07_yutani.png",
            },
            "placeholder/icon_08_spike": {
              default: "placeholder/icon_08_spike.png",
            },
            "placeholder/icon_09_fresh": {
              default: "placeholder/icon_09_fresh.png",
            },
            "placeholder/icon_10_jake": {
              default: "placeholder/icon_10_jake.png",
            },
            "placeholder/icon_11_tricky": {
              default: "placeholder/icon_11_tricky.png",
            },
            "placeholder/icon_friend": {
              default: "placeholder/icon_friend.png",
            },
            "placeholder/jake": {
              default: "placeholder/jake.png",
            },
          },
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {},
        },
        preload: {
          image: {
            "preload/splash": {
              tags: {
                quant: !0,
              },
              default: "preload/splash.png",
              low: "preload/splash_mip.png",
            },
          },
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {},
        },
        ui: {
          image: {
            "ui/ui": {
              tags: {
                fix: !0,
                tps: !0,
                manifest: !0,
              },
              default: "ui/ui.json",
            },
          },
          fonts: {},
          audio: {},
          model: {},
          json: {},
          animate: {},
          misc: {},
        },
      };
    },
    186: function (t, e) {
      t.exports =
        "\nattribute vec3 position;\nattribute vec3 normals;\nattribute vec2 uvs;\n\nuniform mat4 projection;\nuniform mat4 view;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec4 vScreenPosition;\n\n#ifdef INSTANCING\n\tattribute vec3 i_mat1;\n\tattribute vec3 i_mat2;\n\tattribute vec3 i_mat3;\n\tattribute vec3 i_mat4;\n    attribute vec3 i_norm1;\n\tattribute vec3 i_norm2;\n\tattribute vec3 i_norm3;\n#else\n    uniform mat4 model;\n    uniform mat3 normal;\n#endif\n\n#if defined( MAP ) || defined( EMISSIVE_MAP ) || defined( OCCLUSION_MAP )\n\tvarying vec2 vUv;\n    uniform vec4 uMapFrame;\n#endif\n\n#ifdef FOG\n  uniform float uFogDistance;\n  uniform float uFogDensity;\n  varying float vFogFactor;\n  uniform vec3 uFogColor;\n  varying vec3 vFogColor;\n#endif\n\n\n#ifdef BEND\n\nuniform vec2 uBend;\n\nvec4 bend(vec4 pos) {\n    float dx = uBend.x;\n    float dy = uBend.y;\n    float z_sqr = pos.w * pos.w;\n\tpos.x = pos.x + z_sqr * dx;\n\tpos.y = pos.y + z_sqr * dy;\n\treturn pos;\n}\n\n#endif\n\n#HOOK_VERTEX_START\n\nvoid main() {\n\t\n#if defined( MAP ) || defined( EMISSIVE_MAP )\n\tvUv = (uvs * uMapFrame.zw ) + uMapFrame.xy;\n#endif\n\n#ifdef INSTANCING\n    mat4 model = mat4(vec4(i_mat1, 0.), \n                      vec4(i_mat2, 0.), \n                      vec4(i_mat3, 0.), \n                      vec4(i_mat4, 1.));\n\n    mat3 normal = mat3(i_norm1, \n                       i_norm2, \n                       i_norm3);\n#endif\n\n    vec3 transformed = position;\n\n    vNormal = normalize( normal * normals);\n    \n    #HOOK_VERTEX_MAIN\n\n\tvec4 worldPosition =  model * vec4(transformed, 1.0);\n\tvec4 worldViewPosition =  projection * view * worldPosition;\n    // clamp z position?\n    // worldViewPosition.z = mod(worldViewPosition.z, 3000.0);\n    vPosition =  worldPosition.xyz;\n    vScreenPosition = worldViewPosition;\n      \n    \n#ifdef BEND\n    gl_Position = bend(worldViewPosition);\n#else\n    gl_Position = worldViewPosition;\n#endif    \n\n#ifdef FOG\n    float depth = worldViewPosition.z - uFogDistance;\n    vFogFactor = clamp(depth / uFogDistance, 0.0, 1.0);\n    vFogColor = uFogColor;\n#endif\n\n\t#HOOK_VERTEX_END\n\n}";
    },
    187: function (t, e) {
      t.exports =
        "uniform vec3 uGlobalAmbient;\nuniform float uOpacity;\nuniform vec3 uAmbiantLight;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec4 vScreenPosition;\n\n#ifdef COLOR\nuniform vec3 uColor;\n#endif\n\n#ifdef OCCLUSION_MAP\nuniform sampler2D uOcclusionMap;\n#endif\n\n#if defined( MAP ) || defined( EMISSIVE_MAP ) || defined( OCCLUSION_MAP )\nvarying vec2 vUv;\n#endif\n\n#ifdef MAP\nuniform sampler2D uMap;\n#endif\n\n#ifdef FOG\nvarying float vFogFactor;\nvarying vec3 vFogColor;\n#endif\n\n#HOOK_LIGHT_UNIFROMS\n\nvec3 gammaCorrectInput(vec3 color) {\n    return pow(color, vec3(2.2));\n}\n\nfloat gammaCorrectInput(float color) {\n    return pow(color, 2.2);\n}\n\nvec4 gammaCorrectInput(vec4 color) {\n    return vec4(pow(color.rgb, vec3(2.2)), color.a);\n}\n\nvec3 gammaCorrectOutput(vec3 color) {\n    color += vec3(0.0000001);\n    return pow(color, vec3(0.45));\n}\n\nvec4 texture2DSRGB(sampler2D tex, vec2 uv) {\n    vec4 rgba = texture2D(tex, uv);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\n\n#HOOK_FRAGMENT_START\n\nvoid main() {\n  vec4 finalColor = vec4(0.0, 0.0, 0.0, uOpacity);\n  vec4 diffuseColor = vec4(1.0, 1.0, 1.0, uOpacity);\n\n#ifdef COLOR\n    diffuseColor.rgb *= uColor;\n#endif\n\n#ifdef MAP\n    // diffuseColor *= texture2DSRGB(uMap, vUv);\n    diffuseColor *= texture2D(uMap, vUv);\n#endif\n\n    #HOOK_LIGHT;\n\n    finalColor.rgb = diffuseColor.rgb;\n    finalColor *= diffuseColor.a;\n    \n    #HOOK_FRAGMENT_MAIN\n\n    \n    gl_FragColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);\n    \n    #HOOK_FRAGMENT_END\n\n#ifdef FOG\n    // FORCING FOG COLOR TO PREVENT A BUG WHERE SOME RED FOG OBJECT WHERE SHOWING UP \n    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.388, 0.698, 1.0), vFogFactor);\n#endif\n\n    // gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);\n\n\n#ifdef RAILS\n    if (vPosition.y < 1.2) return;\n\n    float reflWidth = 1.5;\n    float railDist = 7.0;\n    float laneWidth = 20.0;\n    vec3 reflColor = vec3(1.0, 1.0, 1.0);\n    float reflFactor = abs(vScreenPosition.z - 100.0) * 0.02;\n    if (reflFactor < 0.0) reflFactor = 0.0;\n    if (reflFactor > 1.0) return;\n\n\n    // Middle lane\n    if (vPosition.x > -4.0 && vPosition.x < -2.5) {\n        gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n    } else if (vPosition.x > 2.5 && vPosition.x < 4.0) {\n        gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n    }\n\n    // Left lane\n    if (vPosition.x > -4.0 - laneWidth && vPosition.x < -2.5 - laneWidth) {\n        gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n    } else if (vPosition.x > 2.5 - laneWidth && vPosition.x < 4.0 - laneWidth) {\n        gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n    }\n\n    // Right lane\n    if (vPosition.x > -4.0 + laneWidth && vPosition.x < -2.5 + laneWidth) {\n        gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n    } else if (vPosition.x > 2.5 + laneWidth && vPosition.x < 4.0 + laneWidth) {\n        gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n    }\n#endif\n}\n";
    },
    188: function (t, e) {
      t.exports =
        "attribute vec3 position;\nattribute vec3 normals;\nattribute vec2 uvs;\n\nuniform mat4 projection;\nuniform mat4 view;\nuniform mat4 model;\nuniform mat3 normal;\n\n#if defined( MAP ) || defined( EMISSIVE_MAP ) || defined( OCCLUSION_MAP )\nvarying vec2 vUv;\nuniform vec4 uMapFrame;\n#endif\n\n\n#HOOK_VERTEX_START\n\nvoid main() {\n\t\n#if defined( MAP ) || defined( EMISSIVE_MAP )\n\t//vUv = uvs;\n\tvUv = (uvs * uMapFrame.zw ) + uMapFrame.xy;\n#endif\n    \n    #HOOK_VERTEX_MAIN\n\t\n    vec4 worldPosition =  model * vec4(position, 1.0);\n\tvec4 worldViewPosition =  projection * view * worldPosition;\n\tgl_Position = worldViewPosition;\n\t\n    #HOOK_VERTEX_END\n}";
    },
    189: function (t, e) {
      t.exports =
        "#ifdef COLOR\nuniform vec3 uColor;\n#endif\n\n#if defined( MAP ) || defined( EMISSIVE_MAP ) || defined( OCCLUSION_MAP )\nvarying vec2 vUv;\n#endif\n\n#ifdef MAP\nuniform sampler2D uMap;\n#endif\n\nvoid main() {\n    gl_FragColor = texture2D(uMap, vUv);\n    gl_FragColor.rgb *= uColor.rgb;\n}\n";
    },
    190: function (t, e) {
      t.exports =
        "\nattribute vec3 position;\nattribute vec3 normals;\nattribute vec2 uvs;\n\nuniform mat4 projection;\nuniform mat4 view;\n\n\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec4 vScreenPosition;\n\nuniform float uTime;\nvarying float vTime;\n\n\n#ifdef INSTANCING\n\tattribute vec3 i_mat1;\n\tattribute vec3 i_mat2;\n\tattribute vec3 i_mat3;\n\tattribute vec3 i_mat4;\n\n    attribute vec3 i_norm1;\n\tattribute vec3 i_norm2;\n\tattribute vec3 i_norm3;\n\n#else\n    uniform mat4 model;\n    uniform mat3 normal;\n#endif\n\n#if defined( MAP ) || defined( EMISSIVE_MAP ) || defined( OCCLUSION_MAP )\n\tvarying vec2 vUv;\n    uniform vec4 uMapFrame;\n#endif\n\n#define FOG\n\n#ifdef FOG\n  uniform float uFogDistance;\n  uniform float uFogDensity;\n  varying float vFogFactor;\n  uniform vec3 uFogColor;\n  varying vec3 vFogColor;\n#endif\n\n\n\n#HOOK_VERTEX_START\n\nuniform vec2 uBend;\nvec4 bend(vec4 pos) {\n    // hardcoding values just for testing\n    // float dx = -0.001;\n    // float dy = -0.0003;\n    float dx = uBend.x;\n    float dy = uBend.y;\n    float z_sqr = pos.w * pos.w;\n\tpos.x = pos.x + z_sqr * dx;\n\tpos.y = pos.y + z_sqr * dy;\n\treturn pos;\n}\n\nvec4 wave(vec4 pos, float t) {\n    pos.y += sin(pos.z*0.05) * cos(pos.x*0.05) * 5.0 + 5.0;\n\treturn pos;\n}\n\nvoid main() {\n    #if defined( MAP ) || defined( EMISSIVE_MAP )\n\t//vUv = uvs;\n\tvUv = (uvs * uMapFrame.zw ) + uMapFrame.xy;\n    \n\t#endif\n\n    #ifdef INSTANCING\n\n    mat4 model = mat4(vec4(i_mat1, 0.), \n                      vec4(i_mat2, 0.), \n                      vec4(i_mat3, 0.), \n                      vec4(i_mat4, 1.));\n\n    mat3 normal = mat3(i_norm1, \n                       i_norm2, \n                       i_norm3);\n\n    #endif\n\n    vec3 transformed = position;\n\n    vNormal = normalize( normal * normals);\n    \n    #HOOK_VERTEX_MAIN\n\n\tvec4 worldPosition =  model * vec4(transformed, 1.0);\n\tvec4 worldViewPosition =  projection * view * worldPosition;\n    vPosition =  worldPosition.xyz;\n    vTime = worldPosition.z * 0.1;\n      \n    // clamp z position?\n    // worldViewPosition.z = mod(worldViewPosition.z, 3000.0);\n\n    vScreenPosition = worldViewPosition;\n\n\t// gl_Position = worldViewPosition;\n    worldViewPosition = wave(worldViewPosition, uTime);\n    gl_Position = bend(worldViewPosition);\n\n\t#ifdef FOG\n        // float depth = worldViewPosition.z - uFogDistance;\n        // vFogFactor = exp(-depth * uFogDensity);\n        // vFogFactor = clamp(vFogFactor, 0.0, 1.0);\n        // vFogColor = uFogColor;\n        float depth = worldViewPosition.z - uFogDistance;\n        vFogFactor = clamp(depth / uFogDistance, 0.0, 1.0);\n        vFogColor = uFogColor;\n    #endif\n\n\t#HOOK_VERTEX_END\n\n}";
    },
    191: function (t, e) {
      t.exports =
        "\n\nuniform vec3 uGlobalAmbient;\n\nuniform float uOpacity;\n\nuniform vec3 uAmbiantLight;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec4 vScreenPosition;\n\n#ifdef COLOR\nuniform vec3 uColor;\n#endif\n\n#ifdef OCCLUSION_MAP\nuniform sampler2D uOcclusionMap;\n#endif\n\n#if defined( MAP ) || defined( EMISSIVE_MAP ) || defined( OCCLUSION_MAP )\nvarying vec2 vUv;\n#endif\n\n#ifdef MAP\nuniform sampler2D uMap;\n#endif\n\n// #define FOG\n\n#ifdef FOG\n  varying float vFogFactor;\n  varying vec3 vFogColor;\n#endif\n\nvarying float vTime;\n\n#HOOK_LIGHT_UNIFROMS\n\n/** \n    gamma stuff!\n*/\nvec3 gammaCorrectInput(vec3 color) {\n    return pow(color, vec3(2.2));\n}\n\nfloat gammaCorrectInput(float color) {\n    return pow(color, 2.2);\n}\n\nvec4 gammaCorrectInput(vec4 color) {\n    return vec4(pow(color.rgb, vec3(2.2)), color.a);\n}\n\nvec3 gammaCorrectOutput(vec3 color) {\n    color += vec3(0.0000001);\n    return pow(color, vec3(0.45));\n}\n\nvec4 texture2DSRGB(sampler2D tex, vec2 uv) {\n    vec4 rgba = texture2D(tex, uv);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\n\nfloat diffuse(vec3 N, vec3 L) {\n\treturn max(dot(N, L), 0.0);\n}\n\nvec3 diffuseLighting(vec3 N, vec3 L, vec3 C) {\n\treturn diffuse(N, L) * C;\n}\n\n/// speculer lights...\nuniform vec3 uSpecular;\n\n#ifdef SHININESS_FLOAT\n    uniform float uShininess;\n#endif\n\n#ifdef SHININESS_MAP\n    uniform sampler2D uShininessMap;\n#endif\n\n// we write the specular to here..\nfloat dShininess;\n\n// glosyness..\nvoid getShininess() {\n    dShininess = 1.0;\n    #ifdef SHININESS_FLOAT\n        dShininess *= uShininess;\n    #endif\n    #ifdef SHININESS_MAP\n       dShininess *= texture2D(uShininessMap, vUv).r;\n    #endif\n    \n    //IOS hack.. \n    dShininess += 0.0000001;\n}\n\n/// emissive lights...\n#ifdef EMISSIVE_FLOAT\n    uniform float uEmissive;\n#endif\n\n#ifdef EMISSIVE_COLOR\n    uniform vec3 uEmissiveColor;\n#endif\n\n#ifdef EMISSIVE_MAP\n    uniform sampler2D uEmissiveMap;\n#endif\n\n// we write the specular to here..\nvec3 dEmissive;\n\n// glosyness..\nvec3 getEmission() {\n    vec3 emission = vec3(1.);\n\n    #ifdef EMISSIVE_FLOAT\n        emission *= uEmissive;\n    #endif\n\n    #ifdef EMISSIVE_COLOR\n        emission *= uEmissiveColor;\n    #endif\n   \n    #ifdef EMISSIVE_MAP\n       emission *= texture2D(uEmissiveMap, vUv).rgb;\n    #endif\n  \n    return emission;\n}\n\nvec3 specularLighting(vec3 N, vec3 L, vec3 V) \n{\n    vec3 R = reflect(-L, N);      // Reflected light vector\n\n    float specular = pow(max(dot(R, -V), 0.0), dShininess + 0.0001);\n    \n    return specular * uSpecular;\n}\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n\n\n#HOOK_FRAGMENT_START\n\nvoid main() {\n  vec4 finalColor = vec4(0.0,0.0,0.0, uOpacity);\n  vec4 diffuseColor = vec4(1., 1., 1., uOpacity);\n\n\n  #ifdef COLOR\n    diffuseColor.rgb *= uColor;\n  #endif\n\n  #ifdef MAP\n    diffuseColor *= texture2DSRGB(uMap, vec2(vUv.x, vUv.y + sin(vScreenPosition.z* 0.0005) * 0.5));\n    \n  #endif\n\n  #ifdef OCCLUSION_MAP\n    diffuseColor *= texture2DSRGB(uOcclusionMap, vUv);\n  #endif\n\n    vec3 lighting = vec3(0.0);\n    vec3 specular = vec3(0.0);\n\n    lighting += uGlobalAmbient;\n\n    vec3 N = normalize(vNormal);\n    vec3 V = normalize(-vPosition);\n     \n    // some temp variables \n    vec3 L;\n    vec3 lightDirection;\n    float attenuation;\n    float dist;\n\n    getShininess();\n    // do lighting..\n    #HOOK_LIGHT;\n\n    finalColor.rgb = diffuseColor.rgb * lighting;// + uEmissive;\n\n   /// finalColor.rgb += specular;//mix(finalColor.rgb, specularLighting, )\n    finalColor *= diffuseColor.a;\n    \n    #HOOK_FRAGMENT_MAIN\n\n    \n    #ifdef EMISSIVE\n\n        finalColor.rgb += getEmission();\n\n    #endif\n\n    gl_FragColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);\n    \n    #HOOK_FRAGMENT_END\n\n    #ifdef FOG\n        // gl_FragColor.rgb = mix(vec3(0.388, 0.698, 1.0), gl_FragColor.rgb, vFogFactor);\n        // gl_FragColor.rgb = mix(gl_FragColor.rgb, vFogColor, vFogFactor);\n        // FORCING FOG COLOR TO PREVENT A BUG WHERE SOME RED FOG OBJECT WHERE SHOWING UP \n        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.388, 0.698, 1.0), vFogFactor);\n    #endif\n\n    gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);\n\n\n    #ifdef RAILS\n        if (vPosition.y < 1.2) return;\n\n        float reflWidth = 1.5;\n        float railDist = 7.0;\n        float laneWidth = 20.0;\n        vec3 reflColor = vec3(1.0, 1.0, 1.0);\n        float reflFactor = abs(vScreenPosition.z - 100.0) * 0.02;\n        if (reflFactor < 0.0) reflFactor = 0.0;\n        if (reflFactor > 1.0) return;\n\n\n        // Middle lane\n        if (vPosition.x > -4.0 && vPosition.x < -2.5) {\n            gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n        } else if (vPosition.x > 2.5 && vPosition.x < 4.0) {\n            gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n        }\n\n        // Left lane\n        if (vPosition.x > -4.0 - laneWidth && vPosition.x < -2.5 - laneWidth) {\n            gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n        } else if (vPosition.x > 2.5 - laneWidth && vPosition.x < 4.0 - laneWidth) {\n            gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n        }\n\n        // Right lane\n        if (vPosition.x > -4.0 + laneWidth && vPosition.x < -2.5 + laneWidth) {\n            gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n        } else if (vPosition.x > 2.5 + laneWidth && vPosition.x < 4.0 + laneWidth) {\n            gl_FragColor.rgb = mix(reflColor, gl_FragColor.rgb, reflFactor);\n        }\n    #endif\n}\n";
    },
    199: function (t, e, i) {
      i(200), (t.exports = i(487));
    },
    430: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          default_train_tops_2: i(431),
          "route_section_default_s-s": i(432),
          "default_b-s-b": i(433),
          "default_s-b-s-b": i(434),
          "default_s-s-s-s": i(435),
          default_tunnel_notrain: i(436),
          default_choice: i(437),
          default_train_tops_1: i(438),
        });
    },
    431: function (t) {
      t.exports = {
        name: "route_section_default_train_tops_2",
        start: [],
        mid: ["routeChunk_default_train_tops_2"],
        end: [],
      };
    },
    432: function (t) {
      t.exports = {
        name: "route_section_default_s-s",
        start: [],
        mid: ["routeChunk_default_s-s"],
        end: [],
      };
    },
    433: function (t) {
      t.exports = {
        name: "route_section_default_b-s-b",
        start: [],
        mid: ["routeChunk_default_b-s-b"],
        end: [],
      };
    },
    434: function (t) {
      t.exports = {
        name: "route_section_default_s-b-s-b",
        start: [],
        mid: ["routeChunk_default_s-b-s-b"],
        end: [],
      };
    },
    435: function (t) {
      t.exports = {
        name: "route_section_default_s-s-s-s",
        start: [],
        mid: ["routeChunk_default_s-s-s-s"],
        end: [],
      };
    },
    436: function (t) {
      t.exports = {
        name: "route_section_default_tunnel_notrain",
        start: [],
        mid: ["routeChunk_default_tunnel_notrain"],
        end: [],
      };
    },
    437: function (t) {
      t.exports = {
        name: "route_section_default_choice",
        start: [],
        mid: ["routeChunk_default_choice"],
        end: [],
      };
    },
    438: function (t) {
      t.exports = {
        name: "route_section_default_train_tops_1",
        start: [],
        mid: ["routeChunk_default_train_tops_1"],
        end: [],
      };
    },
    439: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          default_short_train_tops_moving_multiple: i(440),
          default_short_2_tracks: i(441),
          default_short_train_tops_moving: i(442),
          default_ramp_2: i(443),
          default_short_train_tops_moving_combined: i(444),
          default_short_1_track: i(445),
        });
    },
    440: function (t) {
      t.exports = {
        name: "route_section_default_short_train_tops_moving_multiple",
        start: [],
        mid: ["routeChunk_short_train_tops_moving_multiple"],
        end: [],
      };
    },
    441: function (t) {
      t.exports = {
        name: "route_section_default_short_2_tracks",
        start: ["routeChunk_short_2_tracks_start"],
        mid: ["routeChunk_short_2_tracks_mid_var_1", "routeChunk_short_2_tracks_mid_var_2"],
        end: ["routeChunk_short_2_tracks_end"],
      };
    },
    442: function (t) {
      t.exports = {
        name: "route_section_default_short_train_tops_moving",
        start: [],
        mid: ["routeChunk_short_train_tops_moving"],
        end: [],
      };
    },
    443: function (t) {
      t.exports = {
        name: "route_section_default_ramp_2",
        start: [],
        mid: ["routeChunk_ramp_2"],
        end: [],
      };
    },
    444: function (t) {
      t.exports = {
        name: "route_section_default_short_train_tops_moving_combined",
        start: [],
        mid: ["routeChunk_short_train_tops_moving_combined"],
        end: [],
      };
    },
    445: function (t) {
      t.exports = {
        name: "route_section_default_short_1_track",
        start: [],
        mid: ["routeChunk_short_1_track"],
        end: [],
      };
    },
    446: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          default_train_tops_moving: i(447),
          default_epic: i(448),
          default_train_tops_moving_multiple: i(449),
          default_2_tracks: i(450),
          default_ramp_1: i(451),
          default_tunnel: i(452),
          default_train_tops_moving_combined: i(453),
          default_1_track: i(454),
        });
    },
    447: function (t) {
      t.exports = {
        name: "route_section_default_train_tops_moving",
        start: [],
        mid: ["routeChunk_default_train_tops_moving"],
        end: [],
      };
    },
    448: function (t) {
      t.exports = {
        name: "route_section_default_epic",
        start: [],
        mid: ["routeChunk_default_epic"],
        end: [],
      };
    },
    449: function (t) {
      t.exports = {
        name: "route_section_default_train_tops_moving_multiple",
        start: [],
        mid: ["routeChunk_default_train_tops_moving_multiple"],
        end: [],
      };
    },
    450: function (t) {
      t.exports = {
        name: "route_section_default_2_tracks",
        start: ["routeChunk_default_2_tracks_start"],
        mid: ["routeChunk_default_2_tracks_mid_var_1", "routeChunk_default_2_tracks_mid_var_2"],
        end: ["routeChunk_default_2_tracks_end"],
      };
    },
    451: function (t) {
      t.exports = {
        name: "route_section_default_ramp_1",
        start: [],
        mid: ["routeChunk_default_ramp_1"],
        end: [],
      };
    },
    452: function (t) {
      t.exports = {
        name: "route_section_default_tunnel",
        start: [],
        mid: ["routeChunk_default_tunnel"],
        end: [],
      };
    },
    453: function (t) {
      t.exports = {
        name: "route_section_default_train_tops_moving_combined",
        start: [],
        mid: ["routeChunk_default_train_tops_moving_combined"],
        end: [],
      };
    },
    454: function (t) {
      t.exports = {
        name: "route_section_default_1_track",
        start: [],
        mid: ["routeChunk_short_1_track"],
        end: [],
        ignored_start: ["routeChunk_default_1_track_start"],
        ignored_mid: ["routeChunk_default_1_track_mid_var_1", "routeChunk_default_1_track_mid_var_2"],
        ignored_end: ["routeChunk_default_1_track_end"],
      };
    },
    455: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          default_4_units_3_tracks_choice: i(456),
          "default_4_units_3_tracks_s-b-s-b": i(457),
          "default_4_units_3_tracks_b-s-b": i(458),
          default_epic_various: i(459),
          "default_4_units_3_tracks_s-s": i(460),
          "default_4_units_3_tracks_s-s-s-s": i(461),
        });
    },
    456: function (t) {
      t.exports = {
        name: "route_section_default_4_units_3_tracks_choice",
        start: [],
        mid: ["routeChunk_4_units_3_tracks_choice"],
        end: [],
      };
    },
    457: function (t) {
      t.exports = {
        name: "route_section_default_4_units_3_tracks_s-b-s-b",
        start: [],
        mid: ["routeChunk_4_units_3_tracks_s-b-s-b"],
        end: [],
      };
    },
    458: function (t) {
      t.exports = {
        name: "route_section_default_4_units_3_tracks_b-s-b",
        start: [],
        mid: ["routeChunk_4_units_3_tracks_b-s-b"],
        end: [],
      };
    },
    459: function (t) {
      t.exports = {
        name: "route_section_default_epic_various",
        start: [],
        mid: ["routeChunk_epic_various"],
        end: [],
      };
    },
    460: function (t) {
      t.exports = {
        name: "route_section_default_4_units_3_tracks_s-s",
        start: [],
        mid: ["routeChunk_4_units_3_tracks_s-s"],
        end: [],
      };
    },
    461: function (t) {
      t.exports = {
        name: "route_section_default_4_units_3_tracks_s-s-s-s",
        start: [],
        mid: ["routeChunk_4_units_3_tracks_s-s-s-s"],
        end: [],
      };
    },
    462: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          default_start: i(463),
          default_fallback: i(464),
          default_start_short: i(465),
          default_jetpack_landing: i(466),
          default_no_gameplay: i(467),
        });
    },
    463: function (t) {
      t.exports = {
        name: "routeSection_default_start",
        start: [],
        mid: ["routeChunk_default_start1", "routeChunk_default_start2"],
        end: [],
      };
    },
    464: function (t) {
      t.exports = {
        name: "routeSection_default_fallback",
        start: [],
        mid: ["routeChunk_default_fallback"],
        end: [],
      };
    },
    465: function (t) {
      t.exports = {
        name: "routeSection_default_start_short",
        start: [],
        mid: ["routeChunk_default_fallback"],
        end: [],
      };
    },
    466: function (t) {
      t.exports = {
        name: "routeSection_default_jetpack_landing",
        start: [],
        mid: ["routeChunk_default_jetpack_landing"],
        end: [],
      };
    },
    467: function (t) {
      t.exports = {
        name: "routeSection_default_no_gameplay",
        start: [],
        mid: ["routeChunk_default_no_gameplay_1", "routeChunk_default_no_gameplay_2", "routeChunk_default_no_gameplay_epic"],
        end: [],
      };
    },
    468: function (t, e, i) {
      "use strict";
      i.r(e),
        (e["default"] = {
          tutorial: i(469),
          default_bonus_short: i(470),
          default_bonus_long: i(471),
          default_pogostick_start: i(472),
        });
    },
    469: function (t) {
      t.exports = {
        name: "routeSection_tutorial",
        start: [],
        mid: ["routeChunk_tutorial"],
        end: [],
      };
    },
    470: function (t) {
      t.exports = {
        name: "routeSection_default_bonus_short",
        start: [],
        mid: ["routeChunk_bonus_short"],
        end: [],
      };
    },
    471: function (t) {
      t.exports = {
        name: "routeSection_default_bonus_long",
        start: [],
        mid: ["routeChunk_bonus_long"],
        end: [],
      };
    },
    472: function (t) {
      t.exports = {
        name: "routeSection_default_pogostick_start",
        start: [],
        mid: ["routeChunk_default_pogostick_start"],
        end: [],
      };
    },
    475: function (t) {
      t.exports = {
        file: "model_avatar_idle_paint.fbx",
        texture: "jake_tex",
        fps: 24,
        clips: {
          idle: [1, 220],
        },
      };
    },
    476: function (t) {
      t.exports = {
        file: "model_avatar_powerup_jet_pack.fbx",
        texture: "jake_tex",
        fps: 25,
        clips: {
          Jetpack_forward: [1, 12],
          Jetpack_BarrelRoll_right: [20, 30],
          Jetpack_BarrelRoll_left: [40, 50],
          Jetpack_changeLane_left: [60, 70],
          Jetpack_changeLane_right: [80, 90],
          Jetpack_forward_2: [100, 123],
          Double_Headstart: [130, 172],
          Triple_Headstart: [202, 242],
        },
      };
    },
    477: function (t) {
      t.exports = {
        file: "model_avatar_movement.fbx",
        texture: "jake_tex",
        fps: 24,
        clips: {
          run: [-53, -6],
          dodgeLeft: [200, 212],
          dodgeRight: [230, 242],
          jump: [87, 103],
          hangtime: [106, 118],
          landing: [120, 124],
          roll: [151, 164],
          death_bounce: [400, 416],
          hold_magnet: [280, 281],
          h_run: [514, 538, 1],
          h_jump: [551, 553],
          h_hangtime: [556, 568],
          h_landing: [570, 578],
          h_roll: [581, 594],
          introRun: [-50, -21],
          stumbleCornerLeft: [311, 330],
          stumbleCornerRight: [291, 311],
          stumble: [335, 355],
          stumbleSideRight: [362, 372],
          stumbleSideLeft: [382, 392],
          death_upper: [420, 428],
          death_lower: [440, 452],
          death_movingTrain: [460, 495],
          h_left: [610, 623],
          h_right: [640, 653],
          superRun: [740, 760],
          h_Grind1: [670, 684],
          h_Grind2: [700, 720],
          h_skate_on: [770, 781],
          h_Grind1_land: [661, 670],
          h_Grind2_land: [691, 700],
          h_jump2_kickflip_flip: [800, 820],
          h_jump3_bs360grab: [830, 850],
          h_jump4_360_flip: [866, 889],
          h_Grind3: [923, 943],
          h_Grind3_land: [904, 923],
          run2: [960, 970],
          run3: [1e3, 1010],
          h_jump5_Impossible_flip: [1400, 1423],
          h_jump6_nollie: [1430, 1457],
          h_jump7_heelflip_flip: [1500, 1524],
          h_jump8_pop_shuvit_flip: [1560, 1583],
          h_jump9_fs360grab: [1600, 1628],
          h_jump10_heel360_flip: [1650, 1674],
          h_jump11_fs_salto: [1690, 1718],
          jump_salto: [1300, 1324],
          run4_long: [1070, 1180],
          jump2: [60, 78],
          hangtime2: [65, 78],
          landing2: [78, 84],
          jump3: [1720, 1738],
          hangtime3: [1725, 1738],
          landing3: [1739, 1744],
          stumble_low: [1200, 1215],
          IconJump: [63, 63.1],
          IconRoll: [154, 154.1],
          _run_06_old: [1, 11],
          DoubleJump_Jump: [1750, 1754],
          DoubleJump_Hangtime_01_star: [1756, 1778],
          DoubleJump_Hangtime_02_BackFlip: [1780, 1802],
          DoubleJump_Hangtime_03_360: [1805, 1831],
          run_HighScore_main: [1950, 1989],
          run_HighScore_hatadjust: [2005, 2044],
          run_HighScore_xianHat: [2060, 2099],
          run_HighScore_Yutani: [2110, 2149],
          run_HighScore_Ninja: [2160, 2199],
          run_HighScore_Tagbot: [2210, 2249],
          run_HighScore_VeniceMain: [2260, 2299],
          run_HighScore_HolidayMainandOutfit1: [2310, 2349],
          run_HighScore_MexicoOutfit1: [2360, 2399],
        },
      };
    },
    478: function (t) {
      t.exports = {
        file: "model_avatar_catch.fbx",
        texture: "jake_tex",
        fps: 25,
        offset: 0,
        clips: {
          Avatar_Catch_Shoulder: [300, 400],
          Avatar_Catch_Right_Pickup: [150, 248],
          Avatar_Catch_Left_Pickup: [2, 100],
        },
      };
    },
    479: function (t) {
      t.exports = {
        file: "model_avatar_powerup_pogostick.fbx",
        texture: "jake_tex",
        fps: 25,
        offset: 0,
        clips: {
          pogostick_SpinMove: [1, 50],
          pogostick_kicking: [60, 76],
          pogostick_Hangtime_kick: [82, 102],
          pogostick_ChangeLane_right: [120, 126],
          pogostick_ChangeLane_left: [132, 138],
          pogostick_Hangtime_flying: [150, 183],
          pogostick_Hangtime_front_flip1: [200, 233],
        },
      };
    },
    480: function (t) {
      t.exports = {
        file: "model_avatar_start.fbx",
        texture: "jake_tex",
        fps: 24,
        clips: {
          start_run: [7, 53],
        },
      };
    },
    481: function (t) {
      t.exports = {
        file: "model_guard_movement.fbx",
        texture: "enemies",
        fps: 25,
        offset: 51,
        clips: {
          Guard_run: [1, 13],
          Guard_grap_after: [24, 48],
          Guard_jump: [52, 75],
          Guard_hangtime: [59, 65],
          Guard_landing: [71, 77],
          Guard_dodgeRight: [80, 93],
          Guard_dodgeLeft: [100, 113],
          Guard_whistle: [125, 149],
          Guard_death_movingTrain: [173, 210],
          Guard_playIntro: [-50, -21],
          Guard_roll: [220, 228],
        },
      };
    },
    482: function (t) {
      t.exports = {
        file: "model_guard_catch.fbx",
        texture: "enemies",
        fps: 25,
        offset: 0,
        clips: {
          Guard_Catch_Shoulder: [300, 400],
          Guard_Catch_Right_Pickup: [150, 248],
          Guard_Catch_Left_Pickup: [2, 100],
        },
      };
    },
    483: function (t) {
      t.exports = {
        file: "model_dog_movement.fbx",
        texture: "enemies",
        fps: 25,
        offset: 50,
        clips: {
          Dog_run: [1, 14],
          "Dog_Fast Run": [20, 40],
          "Dog_Run offset": [-6, 6],
          Dog_jump: [52, 75],
          Dog_hangtime: [37, 46],
          Dog_landing: [46, 51],
          Dog_dodgeRight: [80, 93],
          Dog_dodgeLeft: [100, 113],
          Dog_whistle: [125, 149],
          Dog_death_movingTrain: [173, 210],
          Dog_playIntro: [-50, -21],
          Dog_Bite_After: [220, 228],
        },
      };
    },
    484: function (t) {
      t.exports = {
        file: "model_dog_catch.fbx",
        texture: "enemies",
        fps: 25,
        offset: 0,
        clips: {
          Dog_Catch_Shoulder: [300, 400],
          Dog_Catch_Right: [150, 248],
          Dog_Catch_Left: [2, 100],
        },
      };
    },
    487: function (t, e, i) {
      "use strict";
      i.r(e);
      var c = i(0),
        a = i(133),
        r = i(21),
        h = i(184),
        d = i(14),
        n = i(12),
        l = i.n(n),
        o = i(185),
        s = i.n(o),
        u = i(126),
        p = i.n(u),
        m = i(13),
        f = i.n(m),
        g = (function () {
          function Platform() {}
          return (
            (Platform.getUrlParams = function () {
              var t = location.search,
                e = {},
                i = t.slice(t.indexOf("?") + 1).split("&"),
                n = Array.isArray(i),
                o = 0;
              for (i = n ? i : i[Symbol.iterator](); ; ) {
                var s;
                if (n) {
                  if (o >= i.length) break;
                  s = i[o++];
                } else {
                  if ((o = i.next()).done) break;
                  s = o.value;
                }
                var a = s.split("="),
                  r = a[0],
                  h = a[1];
                void 0 !== h && (("true" !== h && "false" !== h) || (h = "true" === h), (e[r] = "string" == typeof h && h.match(/^[-.0-9]+$/) ? parseFloat(h) : h));
              }
              return e;
            }),
            (Platform.getUrlParam = function (t, e) {
              var i = this.getUrlParams();
              return void 0 !== i[t] ? i[t] : e;
            }),
            Platform
          );
        })(),
        B = new ((function () {
          function Config() {
            (this.fps = 60),
              (this.frameSkip = 0),
              (this.ticker = !1),
              (this.smoothDelta = !0),
              (this.deltaCap = 5),
              (this.frameByFrame = 0),
              (this.culling = !0),
              (this.fixedPhysicsSteps = 0),
              (this.vertp = ""),
              (this.fragp = ""),
              (this.maxViewportScale = 1.75),
              (this.debug = !1),
              (this.monitor = !1),
              (this.blocks = !1),
              (this.models = !0),
              (this.routeSection = ""),
              (this.timeScale = 1),
              (this.forceTube = !1),
              (this.optm = !1),
              (this.god = !1),
              (this.freejump = !1),
              (this.shortcuts = !1),
              (this.laneWidth = 20),
              (this.blockSize = 90),
              (this.visibleMaxDistance = 1e3),
              (this.visibleMinDistance = -500),
              (this.fog = !0),
              (this.bend = !0),
              (this.bendX = -65e-5),
              (this.bendY = -3e-4),
              (this.fillers = !0),
              (this.ground = !0),
              (this.speed = 0),
              (this.speedProgr = 0.25),
              (this.speedProgrInterval = 500),
              (this.maxSpeed = 5),
              (this.gravity = 0.055),
              (this.cameraFov = 68),
              (this.cameraPosX = 0),
              (this.cameraPosY = 33.8),
              (this.cameraPosZ = 33),
              (this.cameraModX = 0.75),
              (this.cameraRotX = -0.375),
              (this.cameraRotY = 0),
              (this.cameraRotZ = 0),
              (this.mobile = !1),
              (this.env = "191_new_york"),
              (this.volume = 0.5),
              (this.theme = !0),
              (this.fastplay = !1),
              (this.autoload = !1),
              (this.workers = 1),
              (this.section = "title"),
              (this.tutorial = !1),
              (this.intro = !0),
              (this.loadAll = !0),
              this.override(window.GAME_CONFIG),
              this.override(g.getUrlParams());
          }
          return (
            (Config.prototype.override = function (t) {
              if (t) for (var e in this) void 0 !== t[e] && ((this[e] = t[e]), "debug" === e && ((this.monitor = this.debug), (this.shortcuts = this.debug)));
            }),
            Config
          );
        })())(),
        y = i(3),
        v = i.n(y),
        _ = i(92),
        b = i.n(_),
        w = i(93),
        k = i.n(w),
        x = i(45),
        C = i.n(x),
        S = i(37),
        z = i.n(S),
        T = i(186),
        P = i.n(T),
        M = i(187),
        E = i.n(M);
      var O = (function (n) {
        var t, e;
  
        function PhongBendMaterial(t, e) {
          void 0 === t && (t = {}), void 0 === e && (e = {});
          var i = [e.fog ? "#define FOG" : "", e.rails ? "#define RAILS" : "", "#define BEND"];
          return (t.uniforms = PhongBendMaterial.unformGroup()), n.call(this, t, P.a, E.a, i, e.rails ? "phong-rails" : "phong") || this;
        }
        return (
          (e = n),
          ((t = PhongBendMaterial).prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e),
          (PhongBendMaterial.unformGroup = function () {
            return (
              this._uniformGroup ||
                (this._uniformGroup = new c.UniformGroup(
                  {
                    uTime: 0,
                    uBend: new Float32Array([0, 0]),
                    uFogDensity: 0.008,
                    uFogDistance: 450,
                    uFogColor: new Float32Array([0.388, 0.698, 1]),
                  },
                  !1
                )),
              this._uniformGroup.uniforms
            );
          }),
          PhongBendMaterial
        );
      })(z.a);
      var R = (function (i) {
        var t, e;
  
        function PhongBendRailsMaterial(t, e) {
          return (
            void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            Object.assign(e, {
              rails: !0,
            }),
            i.call(this, t, e) || this
          );
        }
        return (e = i), ((t = PhongBendRailsMaterial).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), PhongBendRailsMaterial;
      })(O);
      var I = (function (r) {
          var t, e;
  
          function RampGeometry(t, e, i) {
            var n;
            void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === i && (i = 1), (n = r.call(this) || this);
            var o = new Float32Array([
                -0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                -0.5,
                -0.5,
                -0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                -0.5,
                -0.5,
                -0.5,
                0.5,
                -0.5,
                -0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                0.5,
                -0.5,
                -0.5,
                -0.5,
                -0.5,
                0.5,
                -0.5,
                -0.5,
                0.5,
                -0.5,
                0.5,
                -0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                -0.5,
                -0.5,
                -0.5,
                -0.5,
                -0.5,
                0.5,
                -0.5,
                0.5,
                0.5,
                -0.5,
                0.5,
                -0.5,
              ]),
              s = new Float32Array([
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
                -1,
                0,
                0,
              ]),
              a = new Uint16Array([0, 0, 0, 0, 0, 0, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 19, 0, 0, 0, 20, 21, 23, 0, 0, 0]);
            return n.addAttribute("position", o, 3), n.addAttribute("normals", s, 3), n.addIndex(a), n;
          }
          return (e = r), ((t = RampGeometry).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), RampGeometry;
        })(c.Geometry),
        L = (function () {
          function Random() {}
          return (
            (Random.color = function () {
              return Math.floor(16777215 * Math.random());
            }),
            (Random.range = function (t, e, i) {
              void 0 === i && (i = !1);
              var n = t + (e - t) * Math.random();
              return i ? Math.floor(n) : n;
            }),
            (Random.pick = function () {
              for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
              return e[Math.floor(Math.random() * e.length)];
            }),
            (Random.item = function (t) {
              if (Array.isArray(t)) return t[Math.floor(Math.random() * t.length)];
              var e = Object.keys(t);
              return t[e[Math.floor(Math.random() * e.length)]];
            }),
            Random
          );
        })(),
        j = i(188),
        F = i.n(j),
        A = i(189),
        D = i.n(A);
      var G = (function (i) {
          var t, e;
  
          function ParticleMaterial(t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = {});
            return (t.uniforms = {}), i.call(this, t, F.a, D.a, [], "particle") || this;
          }
          return (e = i), ((t = ParticleMaterial).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), ParticleMaterial;
        })(z.a),
        N = O,
        X = null,
        Y = {
          "environment.fbx": "environment_tex",
          "environment_start.fbx": "environment_tex",
          "environment_idle.fbx": "environment_tex",
          "trains.fbx": "trains_tex",
          "trains_start.fbx": "trains_tex",
          "model_dog.fbx": "enemies",
          "model_guard.fbx": "enemies",
          "board_new_york.fbx": "board_new_york_tex",
          "avatar_jake.fbx": "jake_tex",
          "model_avatar-movement.fbx": "jake_tex",
          "props.fbx": "props_tex",
          "props_start.fbx": "props_tex",
        },
        H = (function () {
          function Model() {}
          return (
            (Model.box = function (t, e, i) {
              void 0 === e && (e = L.color()), void 0 === i && (i = 1);
              var n = new c.State();
              (n.blend = i < 1), (n.depthTest = !0);
              var o = new b.a(t.width, t.height, t.depth, 1, 1, 64),
                s = new N(
                  {
                    color: e,
                    opacity: i,
                  },
                  {
                    fog: B.fog,
                  }
                );
              return new v.a({
                geometry: o,
                material: s,
                state: n,
              });
            }),
            (Model.ramp = function (t, e, i) {
              void 0 === e && (e = L.color()), void 0 === i && (i = 1);
              var n = new c.State();
              (n.blend = i < 1), (n.depthTest = !0);
              var o = new I(1, 1, 1),
                s = new N(
                  {
                    color: e,
                    opacity: i,
                  },
                  {
                    fog: B.fog,
                  }
                );
              return new v.a({
                geometry: o,
                material: s,
                state: n,
              });
            }),
            (Model.plane = function (t, e, i, n, o) {
              void 0 === i && (i = 1);
              var s = new c.State();
              (s.blend = i < 1), (s.depthTest = !0), o && (s.blendMode = o);
              var a = this.getTexture(n);
              if (!a) throw new Error("Map not found for " + mapFile);
              var r = new k.a(t, e, 4, 4),
                h = new N(
                  {
                    map: a,
                    opacity: i,
                  },
                  {
                    fog: B.fog,
                  }
                );
              return new v.a({
                geometry: r,
                material: h,
                state: s,
              });
            }),
            (Model.particle = function (t, e, i, n, o) {
              void 0 === i && (i = 1);
              var s = new c.State();
              (s.blend = !0), (s.depthTest = !1), o && (s.blendMode = o);
              var a = this.getTexture(n);
              if (!a) throw new Error("Map not found for " + mapFile);
              var r = new k.a(t, e, 4, 4),
                h = new G({
                  map: a,
                  opacity: i,
                });
              return new v.a({
                geometry: r,
                material: h,
                state: s,
              });
            }),
            (Model.particleMesh = function (t, e, i, n) {
              void 0 === i && (i = 1), void 0 === n && (n = 0);
              var o = new c.State();
              (o.blend = !0), (o.depthTest = !1), (o.blendMode = n);
              var s = this.getTexture(e);
              if (!s) throw new Error("Map not found for " + mapFile);
              var a = new G({
                  map: s,
                  opacity: i,
                }),
                r = this.getEntity(t).view3d.geometry;
              return new v.a({
                geometry: r,
                material: a,
                state: o,
              });
            }),
            (Model.tint = function (t, e) {
              t.view3d && t.view3d.material && (t.view3d.material.color = e);
              for (var i = this.entityChildren(t), n = i.length; n--; ) {
                var o = i[n];
                this.tint(o, e);
              }
            }),
            (Model.normalizeName = function (t) {
              return t.replace("\0", " ");
            }),
            (Model.cloneEntity = function (t) {
              if (!t) throw new Error("Invalid entity to clone");
              var e = t.view3d.geometry,
                i = t.view3d.material,
                n = t.view3d.state;
              return new v.a({
                geometry: e,
                material: i,
                state: n,
              });
            }),
            (Model.entityChildren = function (t) {
              return (t.container && t.container.children ? t.container.children : []).slice(0);
            }),
            (Model.findFileName = function (t) {
              var e = t.split("/");
              for (var i in e) if (e[i].endsWith(".fbx")) return e[i];
              return "";
            }),
            (Model.findScene = function (t) {
              if (!t) throw new Error("Scene name is empty");
              if (c.sceneCache[t]) return c.sceneCache[t];
              for (var e in c.sceneCache) if (e.endsWith(t)) return c.sceneCache[e];
              return null;
            }),
            (Model.getScene = function (t) {
              var e = this.findScene(t);
              if (!e) throw new Error("Scene not found: " + t);
              return e;
            }),
            (Model.hasScene = function (t) {
              for (var e in c.sceneCache) if (e.match(t)) return !0;
              return !1;
            }),
            (Model.whichScene = function () {
              for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
              for (var n in e) if (this.findEntity(e[n])) return e[n];
              return null;
            }),
            (Model.forEach = function (t, e) {
              e(t);
              for (var i = this.entityChildren(t), n = i.length; n--; ) this.forEach(i[n], e);
            }),
            (Model.applyTexture = function (t, e, i) {
              if ((void 0 === i && (i = !0), t.view3d && t.view3d.material))
                if (i) {
                  var n = !!t.__path.match("track"),
                    o = this.getTexture(e),
                    s = new N(
                      {
                        map: o,
                      },
                      {
                        fog: B.fog,
                        rails: n,
                      }
                    );
                  t.view3d.material = s;
                } else t.view3d.material.map = this.getTexture(e);
              for (var a = this.entityChildren(t), r = a.length; r--; ) this.applyTexture(a[r], e, i);
            }),
            (Model.getTexture = function (t) {
              var e = c.utils.TextureCache[t];
              if (!e) {
                var i = c.utils.TextureCache;
                for (var n in i)
                  if (n.match(t)) {
                    e = i[n];
                    break;
                  }
              }
              if (!e) throw new Error("Texture not found for " + t);
              return "ocean" === t && (e.baseTexture.wrapMode = c.WRAP_MODES.REPEAT), e;
            }),
            (Model.entityMap = function (t, e, i, n) {
              void 0 === t && (t = null), void 0 === e && (e = {}), void 0 === i && (i = ""), void 0 === n && (n = 4), t && t.pixiTree && (t = t.pixiTree);
              var o = t ? this.entityChildren(t) : c.sceneCache,
                s = o === c.sceneCache;
              for (var a in ((n -= 1), o)) {
                var r = o[a].pixiTree || o[a];
                if (s) {
                  var h = a.match(/\?v=/) ? a.replace(/(\?v\=.+)/, "") : a;
                  (o[h] = o[a]), (a = h);
                }
                var d = this.normalizeName(t && r.__name ? r.__name : a),
                  l = i + "/" + d;
                (r.__path = l), (r.__file = this.findFileName(l)), (r.__name = d), (r.__scene = r.__file ? this.findScene(r.__file) : null), (e[l] = r), n && this.entityMap(r, e, l, n);
              }
              return e;
            }),
            (Model.cachedEntityMap = function () {
              return X || (X = this.refreshCache()), X;
            }),
            (Model.refreshCache = function () {
              X = this.entityMap(null, {}, "", 5);
            }),
            (Model.findEntity = function (t, e, i) {
              if ((void 0 === i && (i = 4), !t)) throw new Error("A path must be provided");
              var n = e ? this.entityMap(e, {}, "", i) : this.cachedEntityMap();
              if (n[t]) return n[t];
              for (var o in n) if (o.endsWith(t) && !o.match("_old")) return n[o];
              return null;
            }),
            (Model.getEntity = function (t, e) {
              if ((void 0 === e && (e = ""), !t)) throw new Error("A path must be provided");
              var i = this.findEntity(t);
              if (!i) throw new Error("Entity not found: " + t);
              if (e) this.applyTexture(i, e);
              else {
                var n = Y[i.__file];
                if (!n) throw new Error("Texture not found for entity: " + i.name + " file: " + i.__file);
                n && this.applyTexture(i, n);
              }
              return i;
            }),
            (Model.getEntityClone = function (t, e, i, n) {
              if ((void 0 === e && (e = ""), void 0 === i && (i = !0), void 0 === n && (n = null), !i)) {
                var o = n || C.a,
                  s = "string" == typeof t ? this.getEntity(t, e) : t,
                  a = s.view3d.geometry,
                  r = new o({
                    map: s.view3d.material.map,
                  }),
                  h = s.view3d.state;
                return new v.a({
                  geometry: a,
                  material: r,
                  state: h,
                });
              }
              var d = this.getEntity(t, e);
              if (!d) throw new Error("Entity not found by name: " + t);
              return B.culling || (d.view3d.state.culling = !1), this.cloneEntity(d);
            }),
            (Model.getEntityCloneBlend = function (t, e, i, n) {
              void 0 === e && (e = ""), void 0 === i && (i = 1), void 0 === n && (n = 0);
              var o = this.getEntity(t, e),
                s = o.view3d.geometry,
                a = o.view3d.material;
              a.opacity = i;
              var r = o.view3d.state;
              return (
                (r.blend = i < 1),
                (r.depthTest = !0),
                n && (r.blendMode = n),
                new v.a({
                  geometry: s,
                  material: a,
                  state: r,
                })
              );
            }),
            (Model.getEntityCloneColor = function (t, e, i) {
              void 0 === i && (i = !0);
              var n = i ? N : C.a,
                o = this.getEntity(t);
              if (!o) throw new Error("Entity not found: " + t);
              var s = o.view3d.geometry,
                a = new n(
                  {
                    color: e,
                  },
                  {
                    fog: B.fog,
                  }
                ),
                r = o.view3d.state;
              return new v.a({
                geometry: s,
                material: a,
                state: r,
              });
            }),
            (Model.getEntityCloneOpaque = function (t, e, i) {
              void 0 === e && (e = ""), void 0 === i && (i = !0);
              var n = i ? N : C.a,
                o = "string" == typeof t ? this.getEntity(t) : t;
              e || (e = Y[o.__file]);
              var s = this.getTexture(e);
              if (!o) throw new Error("Entity not found: " + t);
              var a = o.view3d.geometry,
                r = new n(
                  {
                    map: s,
                  },
                  {
                    fog: B.fog,
                  }
                ),
                h = o.view3d.state;
              return new v.a({
                geometry: a,
                material: r,
                state: h,
              });
            }),
            Model
          );
        })(),
        U = i(4),
        V = (function () {
          function Math2() {}
          return (
            (Math2.oldLerp = function (t, e, i, n, o) {
              return void 0 === n && (n = 0), void 0 === o && (o = 0), n && e - n <= t && t <= e + n ? e : t * (1 - i) + e * i;
            }),
            (Math2.lerp = function (t, e, i, n) {
              return void 0 === n && (n = 0), n && e - n <= t && t <= e + n ? e : t + (e - t) * (i < 0 ? 0 : 1 < i ? 1 : i);
            }),
            (Math2.lerpCap = function (t, e, i, n, o) {
              if ((void 0 === n && (n = 0), void 0 === o && (o = 0), n && e - n <= t && t <= e + n)) return e;
              var s = (i < 0 ? 0 : 1 < i ? 1 : i) * (e - t);
              return o && (s = this.clamp(s, -o, o)), t + s;
            }),
            (Math2.clamp = function (t, e, i) {
              return void 0 === e && (e = 0), void 0 === i && (i = 1), t < e ? e : i < t ? i : t;
            }),
            (Math2.sign = function (t, e) {
              return void 0 === e && (e = !1), e ? (t < 0 ? -1 : 0 < t ? 1 : 0) : t < 0 ? -1 : 1;
            }),
            (Math2.ease = function (t, e, i, n) {
              var o = -(t - e) * i;
              return n ? this.clamp(o, -n, n) : o;
            }),
            (Math2.lerpVec3 = function (t, e, i, n, o) {
              return void 0 === o && (o = 0), (t.x = this.lerp(e.x, i.x, n, o)), (t.y = this.lerp(e.y, i.y, n, o)), (t.z = this.lerp(e.z, i.z, n, o)), t;
            }),
            (Math2.smoothStep = function (t, e, i) {
              return (i = this.clamp((i - t) / (e - t), 0, 1)) * i * (3 - 2 * i);
            }),
            (Math2.smoothDamp = function (t, e, i, n, o, s) {
              var a = 2 / (n = Math.max(1e-4, n)),
                r = a * s,
                h = 1 / (1 + r + 0.479999989271164 * r * r + 0.234999999403954 * r * r * r),
                d = t - e,
                l = e,
                c = o * n,
                u = this.clamp(d, -c, c),
                p = (i + a * u) * s;
              i = (i - a * p) * h;
              var m = (e = t - u) + (u + p) * h;
              return 0 < l - t == l < m && (i = ((m = l) - l) / s), m;
            }),
            Math2
          );
        })();
  
      function _defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      (V.PI_HALF = 0.5 * Math.PI), (V.PI_QUARTER = 0.25 * Math.PI), (V.PI_DOUBLE = 2 * Math.PI), (V.DEG_TO_RAD = 0.0174533);
      var q = (function () {
        function Vector3(t, e, i) {
          void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), (this.vec = U.vec3.create()), (this.x = t), (this.y = e), (this.z = i);
        }
        var t,
          e,
          i,
          n = Vector3.prototype;
        return (
          (n.reset = function (t, e, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), (this.vec[0] = t), (this.vec[1] = e), (this.vec[2] = i);
          }),
          (n.copy = function (t) {
            (this.vec[0] = t.vec[0]), (this.vec[1] = t.vec[1]), (this.vec[2] = t.vec[2]);
          }),
          (n.clone = function () {
            return new Vector3(this.vec[0], this.vec[1], this.vec[2]);
          }),
          (n.distance = function (t) {
            return U.vec3.distance(this.vec, t.vec);
          }),
          (n.magnitude = function () {
            return U.vec3.length(this.vec);
          }),
          (n.add = function (t) {
            U.vec3.add(this.vec, this.vec, t.vec);
          }),
          (n.subtract = function (t) {
            U.vec3.add(this.vec, this.vec, t.vec);
          }),
          (n.lerp = function (t, e, i, n) {
            void 0 === i && (i = 0), void 0 === n && (n = 0), -1 !== e ? V.lerpVec3(this, this, t, e, i, n) : this.copy(t);
          }),
          (t = Vector3),
          (e = [
            {
              key: "x",
              get: function () {
                return this.vec[0];
              },
              set: function (t) {
                this.vec[0] = t;
              },
            },
            {
              key: "y",
              get: function () {
                return this.vec[1];
              },
              set: function (t) {
                this.vec[1] = t;
              },
            },
            {
              key: "z",
              get: function () {
                return this.vec[2];
              },
              set: function (t) {
                this.vec[2] = t;
              },
            },
          ]) && _defineProperties(t.prototype, e),
          i && _defineProperties(t, i),
          Vector3
        );
      })();
  
      function CameraSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function CameraSystem_createClass(t, e, i) {
        return e && CameraSystem_defineProperties(t.prototype, e), i && CameraSystem_defineProperties(t, i), t;
      }
  
      function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
  
      function CameraSystem_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      (q.UP = new q(0, 1, 0)), (q.RIGHT = new q(1, 0, 0)), (q.FORWARD = new q(0, 0, -1)), (q.DOWN = new q(0, -1, 0)), (q.LEFT = new q(-1, 0, 0)), (q.BACK = new q(0, 0, 1)), (q.ZERO = new q(0, 0, 0)), (q.ONE = new q(1, 1, 1));
      var W = (function (n) {
          function CameraSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).game = t.game),
              i.game.onIdle.add(_assertThisInitialized(i)),
              i.game.onRun.add(_assertThisInitialized(i)),
              i.game.onEnterTunnel.add(_assertThisInitialized(i)),
              i.game.onExitTunnel.add(_assertThisInitialized(i)),
              i
            );
          }
          CameraSystem_inheritsLoose(CameraSystem, n);
          var t = CameraSystem.prototype;
          return (
            (t.idle = function () {
              this.rig && this.rig.reset(), (this.running = !1), (this._shakePower = 0), (this.tunnel = !1);
            }),
            (t.run = function () {
              this.rig && this.rig.resetLevel("_tunnel"), (this.running = !0), (this.tunnel = !1);
            }),
            (t.enterTunnel = function () {
              this.tunnel = !0;
            }),
            (t.exitTunnel = function () {
              this.tunnel = !1;
            }),
            (t.setup = function () {
              this.rig ||
                ((this.rig = new Z(this.game.view3d.camera)),
                this.game.addChild(this.rig),
                (this.game.view3d.camera.x = 0),
                (this.game.view3d.camera.y = 0),
                (this.game.view3d.camera.z = 0),
                (this.game.view3d.camera.rx = 0),
                (this.game.view3d.camera.ry = 0),
                (this.game.view3d.camera.rz = 0),
                (this.game.view3d.camera.camera.near = 3),
                (this.game.view3d.camera.camera.far = 1e3));
            }),
            (t.update = function (t) {
              this.rig || this.setup(), this.running ? this.updateRunning(t) : this.updateIdle(t);
            }),
            (t.updateIdle = function (t) {
              this._controlled ||
                ((this.rig.idleX = -21.94232),
                (this.rig.idleY = -13.06444),
                (this.rig.idleZ = 11.95625),
                (this.rig.idleRotX = 16.37991 * V.DEG_TO_RAD),
                (this.rig.idleRotY = 59.09998 * V.DEG_TO_RAD),
                (this.rig.mainX = 0),
                (this.rig.mainY = B.cameraPosY),
                (this.rig.mainZ = B.cameraPosZ),
                (this.rig.mainRotX = B.cameraRotX),
                (this.rig.mainRotY = 0),
                (this.rig.fov = 71.99513));
            }),
            (t.updateRunning = function (t) {
              if ((this._animating && this.updateAnimation(t), !this._controlled)) {
                (this.rig.idleX = 0), (this.rig.idleY = 0), (this.rig.idleZ = 0), (this.rig.idleRotX = 0), (this.rig.idleRotY = 0);
                var e = this.game.stats.x * B.cameraModX;
                this.rig.mainX = V.lerp(this.rig.mainX, e, 0.3 * t);
                var i = this.game.hero.player.cameraY + B.cameraPosY;
                B.cameraRotX;
                (this.rig.mainY = V.lerp(this.rig.mainY, i, 0.3 * t)),
                  (this.rig.mainZ = this.game.stats.z + B.cameraPosZ),
                  (this.rig.mainRotX = V.lerp(this.rig.mainRotX, B.cameraRotX, 0.1 * t)),
                  (this.rig.mainRotY = 0),
                  (this.rig.fov = B.cameraFov);
              }
              this.updateTunnel(t), this.updateShake(t);
            }),
            (t.updateTunnel = function (t) {
              var e = this.tunnel,
                i = this.rig._tunnel;
              if (e || 0 !== i.rx || 0 !== this.rig.y) {
                var n = -4.621953 * V.DEG_TO_RAD,
                  o = e ? B.cameraPosY - 18.30177 : 0,
                  s = e ? B.cameraRotX - n : 0,
                  a = 0.25 * this.game.stats.speed + 0.5;
                (i.y = V.smoothDamp(i.y, -o, 0, 0.2, 1.2 * a, t)), (i.rx = V.smoothDamp(i.rx, -s, 0, 0.05, 0.1 * a, t));
              }
            }),
            (t.updateShake = function (t) {
              var e = this.rig;
              (this._shakePower || 0 !== e.x || 0 !== this.rig.y) &&
                ((e.y = L.range(-this._shakePower, this._shakePower)), (e.x = L.range(-this._shakePower, this._shakePower)), (this._shakePower -= 0.5 * t), this._shakePower < 0 && (this._shakePower = 0));
            }),
            (t.takeControl = function () {
              return (this._controlled = !0), this.rig;
            }),
            (t.releaseControl = function () {
              this._controlled = !1;
            }),
            (t.shake = function (t) {
              this._shakePower = t;
            }),
            (t.animate = function (t, e, i, n) {
              for (var o in ((this._controlled = !0), (this._animating = !0), this._animStart || (this._animStart = {}), this._animEnd || (this._animEnd = {}), (this._animCurve = i), (this._animTime = e), t))
                (this._animStart[o] = this.rig[o]), (this._animEnd[o] = t[o]);
            }),
            (t.updateAnimation = function (t) {}),
            (t.animateEnd = function () {
              (this._controlled = !1), (this._animating = !1);
            }),
            (t.rigProps = function (t) {
              return Object.assign(
                {
                  idleX: this.rig.idleX,
                  idleY: this.rig.idleY,
                  idleZ: this.rig.idleZ,
                  idleRotX: this.rig.idleRotX,
                  idleRotY: this.rig.idleRotY,
                  mainX: this.rig.mainX,
                  mainY: this.rig.mainY,
                  mainZ: this.rig.mainZ,
                  mainRotX: this.rig.mainRotX,
                  mainRotY: this.rig.mainRotY,
                },
                t
              );
            }),
            CameraSystem_createClass(CameraSystem, [
              {
                key: "profile",
                get: function () {
                  return (
                    this._profile || (this._profile = {}),
                    this.rig &&
                      ((this._profile.idleX = this.rig.idleX),
                      (this._profile.idleY = this.rig.idleY),
                      (this._profile.idleZ = this.rig.idleZ),
                      (this._profile.idleRotX = this.rig.idleRotX),
                      (this._profile.idleRotY = this.rig.idleRotY),
                      (this._profile.mainX = this.rig.mainX),
                      (this._profile.mainY = this.rig.mainY),
                      (this._profile.mainZ = this.rig.mainZ),
                      (this._profile.mainRotX = this.rig.mainRotX),
                      (this._profile.mainRotY = this.rig.mainRotY),
                      (this._profile.fov = this.game.view3d.camera.camera.fov),
                      (this._profile.near = this.game.view3d.camera.camera.near),
                      (this._profile.far = this.game.view3d.camera.camera.far)),
                    this._profile
                  );
                },
              },
            ]),
            CameraSystem
          );
        })(f.a),
        Z = (function (s) {
          function CameraRig(t) {
            var e;
            void 0 === t && (t = null), ((e = s.call(this) || this).camera = t), (e.levels = ["_idle", "_idleRotY", "_idleRotX", "_main", "_mainRotY", "_mainRotX", "_tunnel"]);
            var i = _assertThisInitialized(e);
            for (var n in e.levels) {
              var o = new v.a();
              (e[e.levels[n]] = o), i.addChild(o), (i = o), t && o.addChild(t);
            }
            return e;
          }
          CameraSystem_inheritsLoose(CameraRig, s);
          var t = CameraRig.prototype;
          return (
            (t.reset = function () {
              for (var t in this.levels) this.resetLevel(this.levels[t]);
            }),
            (t.resetLevel = function (t) {
              var e = this[t];
              (e.x = 0), (e.y = 0), (e.z = 0), (e.rx = 0), (e.ry = 0);
            }),
            (t.resetIdle = function () {
              this.resetLevel("_idle");
            }),
            CameraSystem_createClass(CameraRig, [
              {
                key: "fov",
                get: function () {
                  return this.camera.camera.fov;
                },
                set: function (t) {
                  this.camera.camera.fov = t;
                },
              },
              {
                key: "idleX",
                get: function () {
                  return this._idle.x;
                },
                set: function (t) {
                  this._idle.x = t;
                },
              },
              {
                key: "idleY",
                get: function () {
                  return this._idle.y;
                },
                set: function (t) {
                  this._idle.y = t;
                },
              },
              {
                key: "idleZ",
                get: function () {
                  return this._idle.z;
                },
                set: function (t) {
                  this._idle.z = t;
                },
              },
              {
                key: "idleRotX",
                get: function () {
                  return this._idleRotX.rx;
                },
                set: function (t) {
                  this._idleRotX.rx = t;
                },
              },
              {
                key: "idleRotY",
                get: function () {
                  return this._idleRotY.ry;
                },
                set: function (t) {
                  this._idleRotY.ry = t;
                },
              },
              {
                key: "mainX",
                get: function () {
                  return this._main.x;
                },
                set: function (t) {
                  this._main.x = t;
                },
              },
              {
                key: "mainY",
                get: function () {
                  return this._main.y;
                },
                set: function (t) {
                  this._main.y = t;
                },
              },
              {
                key: "mainZ",
                get: function () {
                  return this._main.z;
                },
                set: function (t) {
                  this._main.z = t;
                },
              },
              {
                key: "mainRotX",
                get: function () {
                  return this._mainRotX.rx;
                },
                set: function (t) {
                  this._mainRotX.rx = t;
                },
              },
              {
                key: "mainRotY",
                get: function () {
                  return this._mainRotY.ry;
                },
                set: function (t) {
                  this._mainRotY.ry = t;
                },
              },
            ]),
            CameraRig
          );
        })(v.a);
      var K = i(5),
        J = i.n(K);
  
      function Box_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Q = (function () {
          function Box(t, e, i) {
            void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === i && (i = 1), (this.size = new q(t, e, i)), (this.center = new q(0, 0, 0));
          }
          var t,
            e,
            i,
            n = Box.prototype;
          return (
            (n.copy = function (t) {
              this.size.copy(t.size), this.center.copy(t.center);
            }),
            (n.resize = function (t, e, i) {
              void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === i && (i = 1), (this.size.x = t), (this.size.y = e), (this.size.z = i);
            }),
            (n.reposition = function (t, e, i) {
              void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === i && (i = 1), (this.center.x = t), (this.center.y = e), (this.center.z = i);
            }),
            (n.hitTest = function (t, e) {
              void 0 === e && (e = null);
              var i = this.left <= t.right && this.right >= t.left,
                n = this.bottom <= t.top && this.top >= t.bottom,
                o = this.front <= t.back && this.back >= t.front;
              if (!(i && n && o)) return null;
              var s = e;
              s || (this._intersection || (this._intersection = new Box()), (s = this._intersection));
              var a = Math.max(this.left, t.left),
                r = Math.min(this.right, t.right),
                h = Math.max(this.bottom, t.bottom),
                d = Math.min(this.top, t.top),
                l = Math.max(this.front, t.front),
                c = Math.min(this.back, t.back);
              return (s.size.x = r - a), (s.size.y = d - h), (s.size.z = c - l), (s.center.x = a + 0.5 * s.size.x), (s.center.y = h + 0.5 * s.size.y), (s.center.z = c - 0.5 * s.size.z), s;
            }),
            (t = Box),
            (e = [
              {
                key: "x",
                get: function () {
                  return this.center.x;
                },
                set: function (t) {
                  this.center.x = t;
                },
              },
              {
                key: "y",
                get: function () {
                  return this.center.y;
                },
                set: function (t) {
                  this.center.y = t;
                },
              },
              {
                key: "z",
                get: function () {
                  return this.center.z;
                },
                set: function (t) {
                  this.center.z = t;
                },
              },
              {
                key: "left",
                get: function () {
                  return this.center.x - 0.5 * this.size.x;
                },
                set: function (t) {
                  this.center.x = t + 0.5 * this.size.x;
                },
              },
              {
                key: "right",
                get: function () {
                  return this.center.x + 0.5 * this.size.x;
                },
                set: function (t) {
                  this.center.x = t - 0.5 * this.size.x;
                },
              },
              {
                key: "top",
                get: function () {
                  return this.center.y + 0.5 * this.size.y;
                },
                set: function (t) {
                  this.center.y = t - 0.5 * this.size.y;
                },
              },
              {
                key: "bottom",
                get: function () {
                  return this.center.y - 0.5 * this.size.y;
                },
                set: function (t) {
                  this.center.y = t + 0.5 * this.size.y;
                },
              },
              {
                key: "front",
                get: function () {
                  return this.center.z - 0.5 * this.size.z;
                },
                set: function (t) {
                  this.center.z = t + 0.5 * this.size.z;
                },
              },
              {
                key: "back",
                get: function () {
                  return 0.5 * this.size.z + this.center.z;
                },
                set: function (t) {
                  this.center.z = t - 0.5 * this.size.z;
                },
              },
              {
                key: "width",
                get: function () {
                  return this.size.x;
                },
                set: function (t) {
                  this.size.x = t;
                },
              },
              {
                key: "height",
                get: function () {
                  return this.size.y;
                },
                set: function (t) {
                  this.size.y = t;
                },
              },
              {
                key: "depth",
                get: function () {
                  return this.size.z;
                },
                set: function (t) {
                  this.size.z = t;
                },
              },
            ]) && Box_defineProperties(t.prototype, e),
            i && Box_defineProperties(t, i),
            Box
          );
        })(),
        $ = (function () {
          function Collision() {
            (this.act = null), (this.pas = null), (this.hit = new Q()), (this.flags = Collision.NONE);
          }
          return (
            (Collision.prototype.reset = function () {
              (this.act = null), (this.pas = null), (this.flags = Collision.NONE);
            }),
            Collision
          );
        })();
      ($.NONE = 0), ($.LEFT = 4), ($.TOP = 8), ($.RIGHT = 16), ($.BOTTOM = 32), ($.FRONT = 64), ($.BACK = 128), ($.INSIDE = 256), ($.SLOPE = 512);
      var tt = i(8),
        et = i.n(tt);
  
      function Body_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var it = (function (n) {
        var t, e;
  
        function Body(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).trigger = e.trigger || !1),
            (i.ghost = e.ghost || !1),
            (i.deco = e.deco || !1),
            (i.movable = e.movable || !1),
            (i.box = new Q(1, 1, 1)),
            (i.origin = new Q(1, 1, 1)),
            (i.velocity = new q()),
            (i.sensor = e.sensor ? new Q(0.2, 100, 1) : null),
            (i.ground = 0),
            (i.groundBefore = 0),
            (i.groundChangeTolerance = 0),
            (i.colliding = []),
            (i.triggering = []),
            B.blocks && !e.noView && i.drawView(),
            (i.onCollisionEnter = new et.a("onCollisionEnter", 1)),
            (i.onCollisionExit = new et.a("onCollisionExit", 1)),
            (i.onTriggerEnter = new et.a("onTriggerEnter", 1)),
            (i.onTriggerExit = new et.a("onTriggerExit", 1)),
            (t.z = 9999),
            i
          );
        }
        (e = n), ((t = Body).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Body.prototype;
        return (
          (a.reset = function () {
            (this.ground = 0), (this.colliding = []), (this.triggering = []), this.origin.copy(this.box), this.velocity.reset(), this.resetGroundChangeTolerance();
          }),
          (a.drawView = function () {
            this.view ||
              (this.entity.ramp ? (this.view = H.ramp(this.box, this.data.boxColor, 0.75)) : (this.view = H.box(this.box, this.data.boxColor, 0.75)),
              this.entity.addChild(this.view),
              this.sensor && ((this.sensorView = H.box(this.sensor, this.data.boxColor, 0.5)), (this.sensorView.y = -50), this.entity.addChild(this.sensorView)));
          }),
          (a.render = function () {
            (this.entity.transform.position.x = this.box.center.x),
              (this.entity.transform.position.y = this.box.center.y),
              (this.entity.transform.position.z = this.box.center.z),
              this.view && ((this.view.scale.x = this.box.size.x), (this.view.scale.y = this.box.size.y), (this.view.scale.z = this.box.size.z)),
              !B.models && this.entity.model && (this.entity.model.active = !1);
          }),
          (a.matchEntityPosition = function () {
            (this.entity.x = this.box.center.x), (this.entity.y = this.box.center.y), (this.entity.z = this.box.center.z);
          }),
          (a.move = function (t) {
            (this.origin.center.x = this.box.center.x),
              (this.origin.center.y = this.box.center.y),
              (this.origin.center.z = this.box.center.z),
              (this.origin.size.x = this.box.size.x),
              (this.origin.size.y = this.box.size.y),
              (this.origin.size.z = this.box.size.z),
              (this.box.center.z += this.velocity.z * t),
              (this.box.center.x += this.velocity.x * t),
              (this.box.center.y += this.velocity.y * t),
              this.box.bottom <= this.ground && !this.ghost && ((this.box.bottom = this.ground), (this.velocity.y = 0)),
              this.sensor && ((this.sensor.x = this.box.x), (this.sensor.y = this.box.y - 50), (this.sensor.z = this.box.z)),
              this.groundChangeTolerance && ((this.groundChangeTolerance -= t), this.groundChangeTolerance < 0 && (this.groundChangeTolerance = 0));
          }),
          (a.onCollision = function (t) {
            t.flags & $.RIGHT && ((this.velocity.x = 0), (this.lane -= 1)),
              t.flags & $.LEFT && ((this.velocity.x = 0), (this.lane += 1)),
              t.flags & $.FRONT && (this.velocity.z = 0),
              t.flags & $.BOTTOM && (this.velocity.y = 0),
              t.flags & $.TOP && (this.velocity.y = 0);
          }),
          (a.triggerEnter = function (t, e) {
            this.onTriggerEnter.dispatch(t);
          }),
          (a.triggerExit = function (t, e) {
            this.onTriggerExit.dispatch(t);
          }),
          (a.collisionEnter = function (t, e) {
            (e.flags & $.LEFT || e.flags & $.RIGHT) && (this.velocity.x = 0),
              (e.flags & $.TOP || e.flags & $.BOTTOM) && (this.velocity.y = 0),
              (e.flags & $.FRONT || e.flags & $.BACK) && (this.velocity.z = 0),
              this.onCollisionEnter.dispatch(e);
          }),
          (a.collisionExit = function (t, e) {
            this.onCollisionExit.dispatch(e);
          }),
          (a.isColliding = function (t) {
            return 0 <= this.colliding.indexOf(t);
          }),
          (a.isTrigering = function (t) {
            return 0 <= this.colliding.indexOf(t);
          }),
          (a.resetGroundChangeTolerance = function () {
            this.groundChangeTolerance = 0;
          }),
          (i = Body),
          (o = [
            {
              key: "ascending",
              get: function () {
                return this.origin.y < this.box.y;
              },
            },
            {
              key: "descending",
              get: function () {
                return this.origin.y > this.box.y;
              },
            },
            {
              key: "hangtime",
              get: function () {
                var t = -0.2 < this.velocity.y && this.velocity.y < 0.2;
                return !this.landed && t;
              },
            },
            {
              key: "airborne",
              get: function () {
                return !this.landed;
              },
            },
            {
              key: "stable",
              get: function () {
                return this.origin.y === this.box.y;
              },
            },
            {
              key: "landed",
              get: function () {
                return this.bottom <= this.ground + 1 && !this.ghost;
              },
            },
            {
              key: "moving",
              get: function () {
                return 0 !== this.velocity.x || 0 !== this.velocity.y || 0 !== this.velocity.z;
              },
            },
            {
              key: "dodging",
              get: function () {
                var t = this.velocity.x;
                return t < -0.25 ? -1 : 0.25 < t ? 1 : 0;
              },
            },
            {
              key: "canJump",
              get: function () {
                return !!this.groundChangeTolerance || this.landed;
              },
            },
            {
              key: "x",
              get: function () {
                return this.box.center.x;
              },
              set: function (t) {
                this.box.center.x = t;
              },
            },
            {
              key: "y",
              get: function () {
                return this.box.center.y;
              },
              set: function (t) {
                this.box.center.y = t;
              },
            },
            {
              key: "z",
              get: function () {
                return this.box.center.z;
              },
              set: function (t) {
                this.box.center.z = t;
              },
            },
            {
              key: "left",
              get: function () {
                return this.box.left;
              },
              set: function (t) {
                this.box.left = t;
              },
            },
            {
              key: "right",
              get: function () {
                return this.box.right;
              },
              set: function (t) {
                this.box.right = t;
              },
            },
            {
              key: "top",
              get: function () {
                return this.box.top;
              },
              set: function (t) {
                this.box.top = t;
              },
            },
            {
              key: "bottom",
              get: function () {
                return this.box.bottom;
              },
              set: function (t) {
                this.box.bottom = t;
              },
            },
            {
              key: "front",
              get: function () {
                return this.box.front;
              },
              set: function (t) {
                this.box.front = t;
              },
            },
            {
              key: "back",
              get: function () {
                return this.box.back;
              },
              set: function (t) {
                this.box.back = t;
              },
            },
            {
              key: "width",
              get: function () {
                return this.box.size.x;
              },
              set: function (t) {
                this.box.size.x = t;
              },
            },
            {
              key: "height",
              get: function () {
                return this.box.size.y;
              },
              set: function (t) {
                this.box.size.y = t;
              },
            },
            {
              key: "depth",
              get: function () {
                return this.box.size.z;
              },
              set: function (t) {
                this.box.size.z = t;
              },
            },
            {
              key: "center",
              get: function () {
                return this.box.center;
              },
            },
            {
              key: "size",
              get: function () {
                return this.box.size;
              },
            },
            {
              key: "phx",
              get: function () {
                return this.box.center.x;
              },
              set: function (t) {
                var e = t - this.box.center.x;
                this.velocity.x = e;
              },
            },
            {
              key: "phy",
              get: function () {
                return this.center.y;
              },
              set: function (t) {
                var e = t - this.box.center.y;
                this.velocity.y = e;
              },
            },
            {
              key: "phz",
              get: function () {
                return this.center.z;
              },
              set: function (t) {
                var e = t - this.box.center.z;
                this.velocity.z = e;
              },
            },
          ]) && Body_defineProperties(i.prototype, o),
          s && Body_defineProperties(i, s),
          Body
        );
      })(J.a);
      var nt = {
          speed: 0,
        },
        ot = (function (n) {
          var t, e;
  
          function Movable(t, e) {
            var i;
            return void 0 === e && (e = {}), (e = Object.assign({}, nt, e)), ((i = n.call(this, t, e) || this).speed = e.speed), (i.lastDest = null), i;
          }
          (e = n), ((t = Movable).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = Movable.prototype;
          return (
            (i.reset = function () {
              (this.speed = 0), (this.entity.body.movable = !1), this.entity.body.velocity.reset();
            }),
            (i.update = function (t) {
              if (!this.entity.game.hero.player.dead && this.speed && this.entity.active) {
                null !== this.lastDest && ((this.entity.body.back = this.lastDest), (this.entity.body.origin.back = this.lastDest));
                var e = this.target - this.entity.game.stats.z,
                  i = this.origin + e * this.speed,
                  n = i - this.entity.body.back;
                (this.entity.body.velocity.z = n), (this.lastDest = i);
              }
            }),
            (i.run = function (t, e) {
              (this.speed = t), (this.origin = this.entity.body.back), (this.target = e), (this.lastDest = this.origin), (this.entity.body.movable = 0 < this.speed);
            }),
            Movable
          );
        })(J.a);
      var st = (function (n) {
        var t, e;
  
        function Collectible(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).entity.body.solid = !1), i;
        }
        (e = n), ((t = Collectible).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Collectible.prototype;
        return (
          (i.reset = function () {
            (this.entity.active = !0), (this.collected = !1);
          }),
          (i.collect = function (t) {
            this.collected ||
              ((this.collected = !0),
              (this.entity.active = !1),
              this.entity.body && ((this.entity.body.movable = 0), this.entity.body.velocity.reset()),
              this.entity.attractable && (this.entity.attractable.attracted = !1),
              this.entity.onCollect && this.entity.onCollect(t));
          }),
          Collectible
        );
      })(J.a);
      var at = (function (n) {
        var t, e;
  
        function Attractable(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).startPosition = new q()), (i.endPosition = new q()), i.reset(), i;
        }
        (e = n), ((t = Attractable).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Attractable.prototype;
        return (
          (i.reset = function () {
            (this.speedX = L.range(0.001, 0.005)), (this.speedY = L.range(0.001, 0.005)), (this.speedZ = L.range(0.001, 0.005)), (this.attracted = !1), (this.entity.body.movable = !1);
          }),
          (i.update = function (t) {
            if (this.entity.game && this.entity.active) {
              var e = this.entity.game.hero;
              if ((this.attracted && this.entity.game.state !== pn.RUNNING && ((this.attracted = !1), (this.entity.active = !1)), this.attracted && this.attractionUpdate(t), !this.attracted && this.entity.game.state === pn.RUNNING))
                if (e.magnet.isOn()) this.entity.body.center.distance(e.body.center) < 110 && this.attractionStart();
                else if (e.sneakers.isOn()) {
                  var i = Math.abs(this.entity.body.x - e.body.x),
                    n = e.body.y - this.entity.body.y,
                    o = Math.abs(e.body.z - this.entity.body.z);
                  e.body.airborne && i < 10 && 0 < n && n < 50 && o < 50 && this.attractionStart();
                }
            }
          }),
          (i.attractionStart = function () {
            (this.attracted = !0), this.entity.movable && this.entity.movable.reset();
            var t = this.entity.game.hero;
            (this.entity.body.movable = !0),
              (this.entity.body.ghost = !0),
              (this.startPosition.x = this.entity.body.x),
              (this.startPosition.y = this.entity.body.y),
              (this.startPosition.z = this.entity.body.z),
              (this.endPosition.x = t.body.x),
              (this.endPosition.y = t.body.y),
              (this.endPosition.z = t.body.z + t.body.velocity.z);
            var e = this.startPosition.distance(this.endPosition);
            (this.duration = 0.2 * e), this.duration < 4 && (this.duration = 4), (this.time = 0);
          }),
          (i.attractionUpdate = function (t) {
            var e = this.entity.game.hero,
              i = this.time / this.duration;
            (this.endPosition.x = e.body.x), (this.endPosition.y = e.body.y), (this.endPosition.z = e.body.z + 2 * e.body.velocity.z), V.lerpVec3(this.entity.body, this.startPosition, this.endPosition, i * i), (this.time += t);
          }),
          (i.updateAttraction2 = function (t) {
            var e = -hero.body.velocity.z,
              i = (hero.body.velocity.y, this.entity.body.x - hero.body.x),
              n = this.entity.body.y - hero.body.y,
              o = this.entity.body.z - hero.body.z;
            (this.entity.body.velocity.x = -i * this.speedX),
              (this.entity.body.velocity.y = -n * this.speedY),
              (this.entity.body.velocity.z = -o * this.speedZ),
              (this.speedX = V.clamp(this.speedX + 0.003 * e, 0, 2)),
              (this.speedY = V.clamp(this.speedY + 0.003 * e, 0, 2)),
              (this.speedZ = V.clamp(this.speedZ + 0.003, 0, 2)),
              this.entity.body.z >= hero.body.z - 1 &&
                ((this.entity.body.x = hero.body.x),
                (this.entity.body.y = hero.body.y),
                (this.entity.body.z = hero.body.z),
                (this.entity.body.velocity.x = 0),
                (this.entity.body.velocity.y = 0),
                (this.entity.body.velocity.z = 0),
                (this.attracted = !1),
                (this.entity.body.movable = !1),
                (this.entity.body.ghost = !1));
          }),
          Attractable
        );
      })(J.a);
      var rt = {
          rotationSpeed: 0.1,
        },
        ht = 1,
        dt = (function (n) {
          var t, e;
  
          function Floating(t, e) {
            var i;
            return void 0 === e && (e = {}), (e = Object.assign({}, rt, e)), ((i = n.call(this, t, e) || this).startingRot = null), (i.index = null), i;
          }
          (e = n), ((t = Floating).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = Floating.prototype;
          return (
            (i.reset = function () {
              (this.startingRot = null), (this.index = ht++);
            }),
            (i.update = function (t) {
              this.entity.model && (null === this.startingRot && ((this.startingRot = 0.4 * ht++), (this.entity.model.ry = this.startingRot)), (this.entity.model.ry -= t * this.data.rotationSpeed));
            }),
            Floating
          );
        })(J.a);
      var lt = (function (n) {
        var t, e;
  
        function Shine(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).view = H.plane(15, 15, 0.9, "halo_mip.png", 1)),
            (i.view.view3d.state.blend = !0),
            (i.view.view3d.state.depthTest = !0),
            (i.view.view3d.orderBias = 999),
            (i.view.z = -1.2),
            t.addChild(i.view),
            i
          );
        }
        return (
          (e = n),
          ((t = Shine).prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e),
          (Shine.prototype.update = function (t) {
            var e = this.entity.game.hero.body,
              i = this.entity.body.z - e.z,
              n = 1 - V.clamp(-i / 500);
            this.view.scale.set(1.1 * n);
          }),
          Shine
        );
      })(J.a);
      var ct = {
          type: "coin",
        },
        ut = (function (n) {
          var t, e;
  
          function Pop(t, e) {
            var i;
            return void 0 === e && (e = {}), (e = Object.assign({}, ct, e)), ((i = n.call(this, t, e) || this).view = H.getEntityCloneBlend("/star7", "effects_tex", 0.9, 3)), (i.view.rotation.y = Math.PI), (i.duration = 8), i.reset(), i;
          }
          (e = n), ((t = Pop).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = Pop.prototype;
          return (
            (i.reset = function () {
              this.view.parent && this.entity.removeChild(this.view), (this.view.active = !1), this.view.scale.set(0), (this.count = 0);
            }),
            (i.update = function (t) {
              if (this.count) {
                this.count -= t;
                var e = 0.5 + 0.75 * (1 - this.count / this.duration);
                this.view.scale.set(e), this.count <= 0 && this.reset();
              }
            }),
            (i.play = function () {
              (this.view.rotation.z = V.PI_DOUBLE * Math.random()), (this.count = this.duration), (this.view.active = !0), this.view.scale.set(0.5), this.entity.addChild(this.view);
            }),
            Pop
          );
        })(J.a);
      var pt = (function (e) {
        var t, i;
  
        function Coin() {
          var t;
          return (
            (t = e.call(this) || this).add(it, {
              ghost: !0,
              boxColor: 16776960,
            }),
            t.add(at),
            t.add(ot),
            t.add(st),
            t.add(dt, {
              rotationSpeed: 0.06,
            }),
            B.optm || t.add(lt),
            (t.body.width = 10),
            (t.body.height = 10),
            (t.body.depth = 10),
            (t.trigger = 0),
            (t.speed = 0),
            t
          );
        }
        (i = e), ((t = Coin).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i);
        var n = Coin.prototype;
        return (
          (n.createView = function () {
            this.model || ((this.model = H.getEntityCloneOpaque("/currency/currency_coin", "props_tex")), this.addChild(this.model));
          }),
          (n.reset = function (t) {
            this.movable.reset(), this.body.velocity.reset(), this.attractable.reset(), (this.body.movable = !1), (this.active = !0);
          }),
          (n.update = function (t) {
            this.body.movable && this.game && (heroBody.z <= this.trigger ? (this.body.velocity.z = this.speed) : (this.body.velocity.z = 0));
          }),
          (n.init = function () {
            this.createView(), this.movable.reset(), this.attractable.reset(), this.body.velocity.reset(), (this.body.movable = !1), (this.active = !0);
          }),
          (n.onCollect = function (t) {
            (this.game.stats.coins += 1),
              this.game.sfx.play("pickup_coin", {
                volume: 0.5,
              }),
              this.game.hero.pop.play();
          }),
          Coin
        );
      })(v.a);
  
      function Train_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      (pt.cache = function (t, e) {
        void 0 === e && (e = 50), t.pool.prepopulate(pt, amout);
      }),
        (pt.match = function (t) {
          return !!t.name.match(/Coin \(/) || !!t.name.match(/Coins \(/);
        }),
        (pt.factory = function (t, e, i) {
          if (e.name.match(/Line/)) {
            if (50 < e.components.Transform.position.y) return;
            for (var n = e.components.CoinCurve._curveOffset, o = e.components.CoinCurve._curveParent._cachedCurve.MaxCoords.z, s = o * n, a = o / 5, r = 0; r < 5; r++) {
              var h = pt.spawnCoin(t, e, i),
                d = r * a - s;
              (h.body.z -= d), (h.arc = !1);
            }
          } else e.name.match(/Jump Curve/) ? pt.spawnJumpCurve(t, e, i) : pt.spawnCoin(t, e, i);
        }),
        (pt.spawnCoin = function (t, e, i) {
          var n = t.game.pool.get(pt),
            o = e.components.Transform.position.x,
            s = e.components.Transform.position.y,
            a = e.components.Transform.position.z;
          return (
            (n.body.x = o),
            (n.body.bottom = s),
            (n.body.z = t.z - a),
            i.px && (n.body.x = i.px),
            i.offsetX && (n.body.x = i.offsetX),
            i.flip && (n.body.x *= -1),
            150 < n.body.bottom && (n.body.bottom = 29),
            n.init(e),
            i.py && (n.body.bottom = i.py),
            i.bottom && (n.body.bottom = i.bottom),
            (n.arc = !1),
            t.game.addChild(n),
            n
          );
        }),
        (pt.spawnLine = function (t, e, i, n, o) {
          void 0 === o && (o = 5);
          for (var s = 29 * o * 0.5 - 15, a = 0; a < o; a++) {
            var r = t.game.pool.get(pt);
            (r.body.z = n - 30 * a + s), (r.body.bottom = i), (r.body.x = e), r.init(), (r.arc = !1), t.game.addChild(r);
          }
        }),
        (pt.spawnCurve = function (t, e, i, n) {
          for (var o = 50 * t.game.stats.speed, s = Math.floor(o / 13), a = o / s, r = (a - 1) * s * 0.5 - 0.5 * a, h = Math.PI / (s - 1), d = 0; d < s; d++) {
            var l = t.game.pool.get(pt);
            (l.body.z = n - d * a + r), (l.body.bottom = i + 22 * Math.sin(h * d)), (l.body.x = e), l.init(), (l.arc = !0), t.game.addChild(l);
          }
        }),
        (pt.spawnJumpCurve = function (t, e, i) {
          for (var n = 50 * t.game.stats.speed, o = Math.floor(n / 14), s = e.components.CoinCurve ? e.components.CoinCurve._curveOffset : 0.5, a = n / o, r = Math.PI / o, h = n * s, d = 0; d < o; d++) {
            var l = pt.spawnCoin(t, e, i),
              c = d * a - h,
              u = 22 * Math.sin(r * d);
            (l.body.bottom += u), (l.body.z -= c), (l.arc = !0);
          }
        });
      var mt = (function (e) {
          function Train() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                boxColor: 16711680,
              }),
              t.add(ot, {
                speed: 0,
              }),
              (t.body.width = 18),
              (t.body.height = 29),
              (t.body.depth = 58),
              t
            );
          }
          Train_inheritsLoose(Train, e);
          var t = Train.prototype;
          return (
            (t.reset = function (t) {
              this.body.velocity.reset();
            }),
            (t.clean = function (t) {
              for (var e = this.wagons.length; e--; ) {
                var i = this.wagons[e];
                t.game.pool["return"](i), this.removeChild(i);
              }
            }),
            Train
          );
        })(v.a),
        ft = (function (e) {
          function TrainStandard() {
            var t;
            return ((t = e.call(this) || this).model = H.getEntityClone("train_standard")), (t.model.y = 0.5 * -t.body.height), (t.model.ry = Math.PI), t.addChild(t.model), t;
          }
          return Train_inheritsLoose(TrainStandard, e), TrainStandard;
        })(mt),
        gt = (function (e) {
          function TrainCargo() {
            var t;
            return ((t = e.call(this) || this).model = H.getEntityClone("train_cargo")), (t.model.y = 0.5 * -t.body.height), (t.model.ry = Math.PI), t.addChild(t.model), t;
          }
          return Train_inheritsLoose(TrainCargo, e), TrainCargo;
        })(mt),
        yt = (function (e) {
          function TrainSub() {
            var t;
            return ((t = e.call(this) || this).model = H.getEntityClone("train_sub")), (t.model.y = 0.5 * -t.body.height), (t.model.ry = Math.PI), t.addChild(t.model), t;
          }
          return Train_inheritsLoose(TrainSub, e), TrainSub;
        })(mt),
        vt = [ft, gt, yt];
  
      function Blocker_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      (mt.factory = function (t, e, i) {
        var n = null;
        n = e.name.match("sub") ? yt : e.name.match("cargo") ? gt : e.name.match("standard") ? ft : L.pick.apply(L, vt);
        for (var o = t.name.match("intro") ? "z" : "back", s = parseInt(e.name.match(/_(\d)_/)[1]), a = e.name.match(/coins/), r = 60 * s, h = s, d = 0, l = Number.NEGATIVE_INFINITY, c = 0, u = null; h--; ) {
          ((u = t.game.pool.get(n)).chunk = t), (c = ue.get(e, "components.MovingTrainPlaceholder._speed", 0));
          var p = e.components.Transform.position.x,
            m = e.components.Transform.position.z,
            f = 60 * h;
          (u.body.x = null !== i.offsetX ? i.offsetX : p), (u.body.bottom = 0);
          var g = t.z - m - f;
          (u.body[o] = g), d || (d = u.body[o] + 0.6 * r + 30), i.flip && (u.body.x *= -1), u.movable.run(c, d), t.game.addChild(u), u.body.back > l && (l = u.body.back);
        }
        if (a)
          for (var y = Math.ceil(1.1 * s), v = l - 50, _ = 0; _ < y; _++) {
            var b = pt.spawnCoin(t, e, i);
            (b.body.x = u.body.x), (b.body.bottom = 29), (b.body.z = v - 30 * _), b.movable.run(c, d);
          }
      }),
        (mt.cache = function (t, e) {
          void 0 === e && (e = 10), t.pool.prepopulate(ft, amout), t.pool.prepopulate(gt, amout), t.pool.prepopulate(yt, amout);
        });
      var _t = (function (e) {
          function Blocker() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                ghost: !0,
              }),
              (t.body.width = 16),
              (t.body.height = 26),
              (t.body.depth = 1),
              (t.model = null),
              t
            );
          }
          return (
            Blocker_inheritsLoose(Blocker, e),
            (Blocker.prototype.init = function (t, e) {
              (this.model.ry = Math.PI), (this.model.z = -5), this.addChild(this.model);
            }),
            Blocker
          );
        })(v.a),
        bt = (function (i) {
          function BlockerJump() {
            var t;
            return ((t = i.call(this) || this).model = H.getEntityCloneOpaque("/blocker_jump", "environment_tex")), t;
          }
          return (
            Blocker_inheritsLoose(BlockerJump, i),
            (BlockerJump.prototype.init = function (t, e) {
              i.prototype.init.call(this, t, e), (this.body.height = 26);
            }),
            BlockerJump
          );
        })(_t),
        wt = {
          jump: bt,
          roll: (function (i) {
            function BlockerRoll() {
              var t;
              return ((t = i.call(this) || this).model = H.getEntityCloneOpaque("/blocker_roll", "environment_tex")), t;
            }
            return (
              Blocker_inheritsLoose(BlockerRoll, i),
              (BlockerRoll.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e), (this.body.height = 19), (this.body.bottom = 10), (this.model.y = -this.body.height / 2 - this.body.bottom);
              }),
              BlockerRoll
            );
          })(_t),
          standard: (function (i) {
            function BlockerStandard() {
              var t;
              return ((t = i.call(this) || this).model = H.getEntityCloneOpaque("/blocker_standard", "environment_tex")), t;
            }
            return (
              Blocker_inheritsLoose(BlockerStandard, i),
              (BlockerStandard.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e), (this.body.height = 4), (this.body.bottom = 10), (this.model.y = -this.body.height / 2 - this.body.bottom);
              }),
              BlockerStandard
            );
          })(_t),
        };
  
      function Ramp_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      _t.factory = function (t, e, i) {
        var n = L.pick.apply(L, Object.keys(wt));
        e.name.match("jump") && (n = "jump"), e.name.match("roll") && (n = "roll");
        var o = wt[n],
          s = t.game.pool.get(o),
          a = e.components.Transform.position.x,
          r = e.components.Transform.position.z;
        (s.body.front = t.z - r),
          (s.body.x = a),
          i.offsetX && (s.body.x = i.offsetX),
          i.flip && (s.body.x *= -1),
          s.init(t, e),
          t.game.addChild(s),
          e.name.match("w_coins") && (o === bt ? pt.spawnCurve(t, s.body.x, 0, s.body.z) : pt.spawnLine(t, s.body.x, 0, s.body.z));
      };
      var kt = (function (e) {
          function Ramp() {
            var t;
            return (
              ((t = e.call(this) || this).ramp = !0),
              t.add(it),
              (t.body.width = 18),
              (t.body.height = 29),
              (t.body.depth = 70),
              (t.model = H.getEntityClone("/train_ramp")),
              (t.model.position.y = 0.5 * -t.body.height),
              (t.model.rotation.y = Math.PI),
              (t.model.z = -8),
              t.addChild(t.model),
              t
            );
          }
          return (
            Ramp_inheritsLoose(Ramp, e),
            (Ramp.prototype.init = function (t, e, i) {
              var n = e.components.Transform.position.x,
                o = e.components.Transform.position.z;
              (this.body.x = n), (this.body.bottom = 0), (this.body.z = t.z - o + 6), i.offsetX && (this.body.x = i.offsetX), i.flip && (this.body.x *= -1);
              var s = t.game.pool.get(xt);
              s.reset(), (s.body.width = 0.2), (s.body.height = this.body.height), (s.body.depth = 0.7 * this.body.depth), (s.body.x = this.body.left), (s.body.y = this.body.y), (s.body.z = this.body.z), t.game.addChild(s);
              var a = t.game.pool.get(xt);
              a.reset(), (a.body.width = 0.2), (a.body.height = this.body.height), (a.body.depth = 0.7 * this.body.depth), (a.body.x = this.body.right), (a.body.y = this.body.y), (a.body.z = this.body.z), t.game.addChild(a);
            }),
            Ramp
          );
        })(v.a),
        xt = (function (e) {
          function Side() {
            var t;
            return (t = e.call(this) || this).add(it), t;
          }
          return (
            Ramp_inheritsLoose(Side, e),
            (Side.prototype.reset = function () {
              (this.body.deco = !1), this.body.box.size.reset(), this.body.box.center.reset();
            }),
            Side
          );
        })(v.a);
      var Ct = (function (e) {
          var t, i;
  
          function LightSignal() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                ghost: !0,
                soft: !0,
              }),
              (t.body.width = 4),
              (t.body.height = 42),
              (t.body.depth = 4),
              (t.model = H.getEntityClone("/lightSignal")),
              (t.model.ry = Math.PI),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return (
            (i = e),
            ((t = LightSignal).prototype = Object.create(i.prototype)),
            ((t.prototype.constructor = t).__proto__ = i),
            (LightSignal.prototype.init = function (t, e, i) {
              (this.body.x = e.components.Transform.position.x), i.flip && (this.body.x *= -1), (this.body.bottom = 0), (this.body.z = t.z - e.components.Transform.position.z);
            }),
            LightSignal
          );
        })(v.a),
        St = (function () {
          function Curve() {}
          return (
            (Curve.calculateJumpVerticalSpeed = function (t, e) {
              if (t < 0) throw new Error("Jump height cannot be negative");
              return Math.sqrt(2 * t * e);
            }),
            (Curve.calculateJumpLength = function (t, e, i) {
              return (2 * t * this.calculateJumpVerticalSpeed(e)) / i;
            }),
            (Curve.linear = function (t) {
              return t;
            }),
            (Curve.expoIn = function (t) {
              return 0 === t ? t : Math.pow(2, 10 * (t - 1));
            }),
            (Curve.expoOut = function (t) {
              return 1 === t ? t : 1 - Math.pow(2, -10 * t);
            }),
            (Curve.expoInOut = function (t) {
              return 0 === t || 1 === t ? t : t < 0.5 ? 0.5 * Math.pow(2, 20 * t - 10) : -0.5 * Math.pow(2, 10 - 20 * t) + 1;
            }),
            (Curve.sineIn = function (t) {
              var e = Math.cos(t * Math.PI * 0.5);
              return Math.abs(e) < 1e-14 ? 1 : 1 - e;
            }),
            (Curve.sineOut = function (t) {
              return Math.sin((t * Math.PI) / 2);
            }),
            (Curve.sineInOut = function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (Curve.quadIn = function (t) {
              return t * t;
            }),
            (Curve.quadOut = function (t) {
              return -t * (t - 2);
            }),
            (Curve.quadInOut = function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
            }),
            (Curve.quartIn = function (t) {
              return Math.pow(t, 4);
            }),
            (Curve.quartOut = function (t) {
              return Math.pow(t - 1, 3) * (1 - t) + 1;
            }),
            (Curve.quartInOut = function (t) {
              return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
            }),
            (Curve.quintIn = function (t) {
              return t * t * t * t * t;
            }),
            (Curve.quintOut = function (t) {
              return --t * t * t * t * t + 1;
            }),
            (Curve.quintInOut = function (t) {
              return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
            }),
            (Curve.backInOut = function (t) {
              var e = 2.5949095;
              return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
            }),
            (Curve.backIn = function (t) {
              return t * t * (2.70158 * t - 1.70158);
            }),
            (Curve.backOut = function (t) {
              return --t * t * (2.70158 * t + 1.70158) + 1;
            }),
            (Curve.circInOut = function (t) {
              return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (Curve.circIn = function (t) {
              return 1 - Math.sqrt(1 - t * t);
            }),
            (Curve.circOut = function (t) {
              return Math.sqrt(1 - --t * t);
            }),
            (Curve.elasticOut = function (t) {
              return Math.sin((-13 * (t + 1) * Math.PI) / 2) * Math.pow(2, -10 * t) + 1;
            }),
            (Curve.elasticIn = function (t) {
              return Math.sin((13 * t * Math.PI) / 2) * Math.pow(2, 10 * (t - 1));
            }),
            (Curve.elasticInOut = function (t) {
              return t < 0.5 ? 0.5 * Math.sin(((13 * Math.PI) / 2) * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * Math.sin(((-13 * Math.PI) / 2) * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
            }),
            Curve
          );
        })();
      var zt = (function (n) {
        var t, e;
  
        function Halo(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).view = new v.a()),
            (i.halo = H.getEntityCloneBlend("/powBoost", "effects_tex", 0.95, 1)),
            i.view.addChild(i.halo),
            (i.view.z = -3),
            (i.view.ry = Math.PI),
            t.addChild(i.view),
            i.reset(),
            i
          );
        }
        (e = n), ((t = Halo).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Halo.prototype;
        return (
          (i.reset = function () {
            (this.scaleStart = 0), (this.scaleEnd = 1), (this.maxDistance = 500), (this.rotationSpeed = -0.03);
          }),
          (i.update = function (t) {
            this.updateHaloScale(), this.updateViewScale(), this.rotationSpeed && (this.halo.rotation.z += t * this.rotationSpeed);
          }),
          (i.updateHaloScale = function (t) {
            var e = this.entity.game.stats.z + 20 - this.entity.body.z,
              i = 1.5 + 0.5 * Math.sin(0.03 * e);
            this.halo.scale.set(i);
          }),
          (i.updateViewScale = function () {
            var t = this.entity.game.stats.z - 10 - this.entity.body.z,
              e = 1 - V.clamp(t / this.maxDistance),
              i = St.backOut(e),
              n = this.scaleStart + (this.scaleEnd - this.scaleStart) * i;
            this.view.scale.set(n);
          }),
          Halo
        );
      })(J.a);
  
      function Pickup_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var Tt = (function (e) {
          function Pickup() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                ghost: !0,
              }),
              t.add(st),
              t.add(dt, {
                rotationSpeed: -0.03,
              }),
              t.add(zt, {
                type: "rays",
              }),
              (t.body.width = 12),
              (t.body.height = 12),
              (t.body.depth = 12),
              t
            );
          }
          Pickup_inheritsLoose(Pickup, e);
          var t = Pickup.prototype;
          return (
            (t.init = function (t, e) {
              this.addChild(this.model);
            }),
            (t.onCollect = function (t) {
              !!this.game.hero[this.type] && this.game.hero[this.type].turnOn(),
                "key" === this.type && (this.game.stats.keys += 1),
                "jetpack" !== this.type && this.game.sfx.play("pickup_powerup"),
                this.game.hero.popPickup && this.game.hero.popPickup.play();
            }),
            Pickup
          );
        })(v.a),
        Pt = (function (e) {
          function PickupJetpack() {
            var t;
            return ((t = e.call(this) || this).type = "jetpack"), (t.model = H.getEntityCloneOpaque("/powerups_jetpack", "props_tex")), t.model.scale.set(1.5), t;
          }
          return Pickup_inheritsLoose(PickupJetpack, e), PickupJetpack;
        })(Tt),
        Mt = (function (e) {
          function PickupPogo() {
            var t;
            return ((t = e.call(this) || this).type = "pogo"), (t.model = H.getEntityCloneOpaque("/powerups_rocketPogo", "props_tex")), t.model.scale.set(1.75), t;
          }
          return Pickup_inheritsLoose(PickupPogo, e), PickupPogo;
        })(Tt),
        Et = (function (e) {
          function PickupMagnet() {
            var t;
            return ((t = e.call(this) || this).type = "magnet"), (t.model = H.getEntityCloneOpaque("/powerups_coinMagnet", "props_tex")), t.model.scale.set(1.5), t;
          }
          return Pickup_inheritsLoose(PickupMagnet, e), PickupMagnet;
        })(Tt),
        Ot = (function (e) {
          function PickupSneakers() {
            var t;
            return ((t = e.call(this) || this).type = "sneakers"), (t.model = H.getEntityCloneOpaque("/powerups_superSneakers", "props_tex")), t.model.scale.set(1.5), t;
          }
          return Pickup_inheritsLoose(PickupSneakers, e), PickupSneakers;
        })(Tt),
        Rt = (function (e) {
          function PickupMultiplier() {
            var t;
            return ((t = e.call(this) || this).type = "multiplier"), (t.model = H.getEntityCloneOpaque("/powerups_2xMultiplier", "props_tex")), t.model.scale.set(1.5), t;
          }
          return Pickup_inheritsLoose(PickupMultiplier, e), PickupMultiplier;
        })(Tt),
        It = (function (e) {
          function PickupLetter() {
            var t;
            return ((t = e.call(this) || this).type = "letter"), (t.model = H.getEntityCloneOpaque("/letters/A", "props_tex")), t.model.scale.set(1.5), t;
          }
          return Pickup_inheritsLoose(PickupLetter, e), PickupLetter;
        })(Tt),
        Lt = (function (n) {
          function PickupMysteryBox() {
            var t;
            ((t = n.call(this) || this).type = "mysteryBox"), (t.model = new v.a()), (t.base = H.getEntityCloneOpaque("/mysteryBox_base/mysteryBox_base_default", "props_tex")), t.model.addChild(t.base);
            var e = H.getEntity("/containers/mysteryBox_base/mysteryBox_lid"),
              i = H.findEntity("mysteryBox_lid_default", e);
            return (t.lid = H.getEntityCloneOpaque(i, "props_tex")), (t.lid.x = 0.8), (t.lid.z = -0.8), t.model.addChild(t.lid), t;
          }
          return Pickup_inheritsLoose(PickupMysteryBox, n), PickupMysteryBox;
        })(Tt),
        jt = (function (e) {
          function PickupKey() {
            var t;
            return ((t = e.call(this) || this).type = "key"), (t.model = H.getEntityCloneOpaque("/currency_key", "props_tex")), t.model.scale.set(1.5), t;
          }
          return Pickup_inheritsLoose(PickupKey, e), PickupKey;
        })(Tt),
        Ft = {
          jetpack: Pt,
          pogo: Mt,
          magnet: Et,
          sneakers: Ot,
          multiplier: Rt,
          letter: It,
          key: jt,
          mysteryBox: Lt,
        },
        At = [Rt, jt, Lt],
        Dt = [Rt, Pt, Et, Ot],
        Gt = {
          Jetpack: Pt,
          PogoStick: Mt,
          CoinMagnet: Et,
          SuperSneakers: Ot,
          CoinMultiplier: Rt,
        };
      (Tt.match = function (t) {
        return !!t.name.match(/PickupSpawn/);
      }),
        (Tt.factory = function (t, e, i) {
          if (!t.envTube) {
            var n = t.z - e.components.Transform.position.z,
              o = null,
              s = ue.get(e, "components.PickupSpawnPoint.__spawnPointMode", ""),
              a = ue.get(e, "components.PickupSpawnPoint.__forceSpawnPickupType", "");
            if ("WillForcePickupType" === s) o = Gt[a];
            else {
              if (!t.game.route.canSpawn("pickup", n)) return;
              var r = ue.get(e, "components.PickupSpawnPoint._spawnPointDifficulty", "Hard");
              if (
                L.range(0, 1) >=
                {
                  Hard: 0.1,
                  Medium: 0.5,
                  Easy: 0.8,
                }[r]
              )
                return;
              o = "Easy" === r ? L.item(At) : L.item(Dt);
            }
            if (o && o !== Lt && o !== jt && (o !== Pt || t.game.route.canSpawn("jetpack", n))) {
              var h = t.game.pool.get(o),
                d = e.components.Transform.position.x,
                l = e.components.Transform.position.y;
              (h.body.z = n),
                (h.body.x = null !== i.offsetX ? i.offsetX : d),
                (h.body.y = l),
                i.flip && (h.body.x *= -1),
                h.init(t, e),
                t.game.addChild(h),
                t.game.route.setSpawn("pickup", n - 2700),
                o === Pt && t.game.route.setSpawn("jetpack", n - 4e3);
            }
          }
        }),
        (Tt.spawn = function (t, e) {
          var i = e || Object.keys(Ft),
            n = L.pick.apply(L, i),
            o = Ft[n],
            s = t.pool.get(o);
          return s.init(), t.addChild(s), s;
        });
      var Bt = {},
        Nt = Bt;
      B.ground
        ? ((Bt.newTrack = function () {
            return H.getEntityClone("/track");
          }),
          (Bt.newTrackShadowStart = function () {
            return H.getEntityClone("/track_shadow_start");
          }),
          (Bt.newTrackShadowMid = function () {
            return H.getEntityClone("/track_shadow_mid");
          }),
          (Bt.newTrackShadowEnd = function () {
            return H.getEntityClone("/track_shadow_end");
          }),
          (Bt.newTrackShadowShortStart = function () {
            return H.getEntityClone("/track_shadow_short_start");
          }),
          (Bt.newTrackShadowShortEnd = function () {
            return H.getEntityClone("/track_shadow_short_end");
          }),
          (Bt.newGround = function () {
            return H.getEntityClone("/ground");
          }),
          (Bt.newGroundShadowStart = function () {
            return H.getEntityClone("/ground_shadow_start");
          }),
          (Bt.newGroundShadowMid = function () {
            return H.getEntityClone("/ground_shadow_mid");
          }),
          (Bt.newGroundShadowEnd = function () {
            return H.getEntityClone("/ground_shadow_mid");
          }),
          (Bt.newGroundShadowShortStart = function () {
            return H.getEntityClone("/ground_shadow_short_start");
          }),
          (Bt.newGroundShadowShortEnd = function () {
            return H.getEntityClone("/ground_shadow_short_end");
          }),
          (Bt.newGates = function () {
            return H.getEntityClone("track_gates");
          }),
          (Bt.newGatesShadow = function () {
            return H.getEntityClone("track_gates_shadows");
          }))
        : ((Bt.newTrack = function () {
            return new v.a();
          }),
          (Bt.newTrackShadowStart = function () {
            return new v.a();
          }),
          (Bt.newTrackShadowMid = function () {
            return new v.a();
          }),
          (Bt.newTrackShadowEnd = function () {
            return new v.a();
          }),
          (Bt.newTrackShadowShortStart = function () {
            return new v.a();
          }),
          (Bt.newTrackShadowShortEnd = function () {
            return new v.a();
          }),
          (Bt.newGround = function () {
            return new v.a();
          }),
          (Bt.newGroundShadowStart = function () {
            return new v.a();
          }),
          (Bt.newGroundShadowMid = function () {
            return new v.a();
          }),
          (Bt.newGroundShadowEnd = function () {
            return new v.a();
          }),
          (Bt.newGroundShadowShortStart = function () {
            return new v.a();
          }),
          (Bt.newGroundShadowShortEnd = function () {
            return new v.a();
          }),
          (Bt.newGates = function () {
            return new v.a();
          }),
          (Bt.newGatesShadow = function () {
            return new v.a();
          })),
        (Bt.spawn = function (t, e) {
          void 0 === e && (e = {}), e.z || (e.z = t.z), e.l || (e.l = Bt.newTrack), e.m || (e.m = e.l), e.r || (e.r = e.m);
          var i = t.game.pool.get(e.l);
          t.game.addChild(i), (i.x = -B.laneWidth), (i.y = 0), (i.z = e.z), (i.ry = Math.PI);
          var n = t.game.pool.get(e.m);
          t.game.addChild(n), (n.x = 0), (n.y = 0), (n.z = e.z), (n.ry = Math.PI);
          var o = t.game.pool.get(e.r);
          t.game.addChild(o), (o.x = B.laneWidth), (o.y = 0), (o.z = e.z), (o.ry = Math.PI);
        }),
        (Bt.spawnGates = function (t, e) {
          if ((void 0 === e && (e = {}), !t.name.match("tutorial"))) {
            e.z || (e.z = t.z);
            var i = t.game.pool.get(Bt.newGates);
            t.game.addChild(i), (i.x = 0), (i.y = 0), (i.z = e.z), (i.ry = Math.PI);
          }
        }),
        (Bt.mount = function (t) {
          if ("intro" === t.name) {
            for (var e = 0; e < 1; e++)
              if (!t.floors[e]) {
                var i = 2 * B.blockSize,
                  n = Bt.newTrack,
                  o = Bt.newTrack,
                  s = Bt.newTrack;
                Bt.spawn(t, {
                  z: i,
                  l: n,
                  m: o,
                  r: s,
                });
              }
          } else if (t.name.match("default_short_1_track")) {
            for (var a = t.blocks / 2, r = 0; r < a; r++)
              if (!t.floors[r]) {
                var h = 0 < r,
                  d = t.z - r * B.blockSize * 2,
                  l = h ? Bt.newGround : Bt.newTrack,
                  c = Bt.newTrack,
                  u = h ? Bt.newGround : Bt.newTrack;
                Bt.spawn(t, {
                  z: d,
                  l: l,
                  m: c,
                  r: u,
                }),
                  (t.floors[r] = !0);
              }
          } else if (t.name.match("default_1_track")) {
            for (var p = t.blocks / 2, m = 0; m < p; m++)
              if (!t.floors[m]) {
                var f = t.name.match("_mid"),
                  g = t.z - m * B.blockSize * 2,
                  y = f ? Bt.newGround : Bt.newTrack,
                  v = Bt.newTrack,
                  _ = f ? Bt.newGround : Bt.newTrack;
                Bt.spawn(t, {
                  z: g,
                  l: y,
                  m: v,
                  r: _,
                }),
                  (t.floors[m] = !0);
              }
          } else if (t.name.match("default_short_2_tracks")) {
            for (var b = t.blocks / 2, w = 0; w < b; w++)
              if (!t.floors[w]) {
                var k = t.name.match("_mid_") || t.name.match("_end"),
                  x = t.z - w * B.blockSize * 2,
                  C = Bt.newTrack,
                  S = k ? Bt.newGround : Bt.newTrack,
                  z = Bt.newTrack;
                Bt.spawn(t, {
                  z: x,
                  l: C,
                  m: S,
                  r: z,
                }),
                  (t.floors[w] = !0);
              }
          } else if (t.name.match("default_2_tracks")) {
            for (var T = t.blocks / 2, P = 0; P < T; P++)
              if (!t.floors[P]) {
                var M = !t.name.match("_end"),
                  E = t.z - P * B.blockSize * 2,
                  O = Bt.newTrack,
                  R = M ? Bt.newGround : Bt.newTrack,
                  I = Bt.newTrack;
                Bt.spawn(t, {
                  z: E,
                  l: O,
                  m: R,
                  r: I,
                }),
                  (t.floors[P] = !0);
              }
          } else if ("default_tutorial" === t.name);
          else if (!t.hasGround)
            for (var L = t.blocks / 2, j = 0; j < L; j++)
              if (!t.floors[j]) {
                var F = t.z - j * B.blockSize * 2,
                  A = Bt.newTrack,
                  D = Bt.newTrack,
                  G = Bt.newTrack;
                Bt.spawn(t, {
                  z: F,
                  l: A,
                  m: D,
                  r: G,
                }),
                  (t.floors[j] = !0);
              }
        });
      var Xt = {},
        Yt = Xt;
  
      function Gates_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      B.fillers
        ? ((Xt.newLow01Left = function () {
            return H.getEntityClone("/low_01_left");
          }),
          (Xt.newLow02Left = function () {
            return H.getEntityClone("/low_02_left");
          }),
          (Xt.newMed01Left = function () {
            return H.getEntityClone("/med_01_left");
          }),
          (Xt.newMed02Left = function () {
            return H.getEntityClone("/med_02_left");
          }),
          (Xt.newMed03Left = function () {
            return H.getEntityClone("/med_03_left");
          }),
          (Xt.newHigh01Left = function () {
            return H.getEntityClone("/high_01_left");
          }),
          (Xt.newHigh02Left = function () {
            return H.getEntityClone("/high_02_left");
          }),
          (Xt.newHigh03Left = function () {
            return H.getEntityClone("/high_03_left");
          }),
          (Xt.newLow01Right = function () {
            return H.getEntityClone("/low_01_right", "", !1, R);
          }),
          (Xt.newLow02Right = function () {
            return H.getEntityClone("/low_02_right", "", !1, R);
          }),
          (Xt.newMed01Right = function () {
            return H.getEntityClone("/med_01_right");
          }),
          (Xt.newMed02Right = function () {
            return H.getEntityClone("/med_02_right");
          }),
          (Xt.newMed03Right = function () {
            return H.getEntityClone("/med_03_right");
          }),
          (Xt.newHigh01Right = function () {
            return H.getEntityClone("/high_01_right");
          }),
          (Xt.newHigh02Right = function () {
            return H.getEntityClone("/high_02_right");
          }),
          (Xt.newHigh03Right = function () {
            return H.getEntityClone("/high_03_right");
          }))
        : ((Xt.newLow01Left = function () {
            return new v.a();
          }),
          (Xt.newLow02Left = function () {
            return new v.a();
          }),
          (Xt.newMed01Left = function () {
            return new v.a();
          }),
          (Xt.newMed02Left = function () {
            return new v.a();
          }),
          (Xt.newMed03Left = function () {
            return new v.a();
          }),
          (Xt.newHigh01Left = function () {
            return new v.a();
          }),
          (Xt.newHigh02Left = function () {
            return new v.a();
          }),
          (Xt.newHigh03Left = function () {
            return new v.a();
          }),
          (Xt.newLow01Right = function () {
            return new v.a();
          }),
          (Xt.newLow02Right = function () {
            return new v.a();
          }),
          (Xt.newMed01Right = function () {
            return new v.a();
          }),
          (Xt.newMed02Right = function () {
            return new v.a();
          }),
          (Xt.newMed03Right = function () {
            return new v.a();
          }),
          (Xt.newHigh01Right = function () {
            return new v.a();
          }),
          (Xt.newHigh02Right = function () {
            return new v.a();
          }),
          (Xt.newHigh03Right = function () {
            return new v.a();
          })),
        (Xt.spawn = function (t, e) {
          void 0 === e && (e = {}), e.z || (e.z = t.z), e.l || (e.l = Xt.newLow01Left), e.r || (e.r = Xt.newLow01Right);
          var i = t.game.pool.get(e.l);
          t.game.addChild(i), (i.x = 0), (i.y = 0), (i.z = e.z), (i.ry = Math.PI);
          var n = t.game.pool.get(e.r);
          t.game.addChild(n), (n.x = 0), (n.y = 0), (n.z = e.z), (n.ry = Math.PI);
        }),
        (Xt.mount = function (t) {
          if (t.name.match("default_short_1_track")) {
            for (var e = t.blocks / 2, i = 0; i < e; i++)
              if (!t.fillers[i]) {
                var n = t.z - i * B.blockSize * 2,
                  o = Xt.newMed02Left,
                  s = Xt.newMed02Right;
                Xt.spawn(t, {
                  z: n,
                  l: o,
                  r: s,
                });
              }
          } else if (t.name.match("default_short_2_tracks")) {
            for (var a = t.blocks / 2, r = 0; r < a; r++)
              if (!t.fillers[r]) {
                var h = t.z - r * B.blockSize * 2,
                  d = Xt.newLow02Left,
                  l = Xt.newHigh02Right;
                Xt.spawn(t, {
                  z: h,
                  l: d,
                  r: l,
                });
              }
          } else if (t.name.match("default_2_tracks")) {
            for (var c = t.blocks / 2, u = 0; u < c; u++)
              if (!t.fillers[u]) {
                var p = t.z - u * B.blockSize * 2,
                  m = Xt.newLow01Left,
                  f = Xt.newHigh01Right;
                Xt.spawn(t, {
                  z: p,
                  l: m,
                  r: f,
                });
              }
          } else
            for (var g = t.blocks / 2, y = L.item(["Low", "Med", "High"]), v = "Low" == y ? ["01", "02"] : ["01", "02", "03"], _ = 0; _ < g; _++)
              if (!t.fillers[_]) {
                var b = L.item(v),
                  w = Xt["new" + y + b + "Left"],
                  k = Xt["new" + y + b + "Right"],
                  x = t.z - _ * B.blockSize * 2;
                Xt.spawn(t, {
                  z: x,
                  l: w,
                  r: k,
                }),
                  "Low" === y && "1103_seoul" === B.env && (t.floors[_] = !0);
              }
        });
      var Ht = (function (e) {
        function Gates() {
          var t;
          return (
            (t = e.call(this) || this).add(it, {
              noView: !0,
              trigger: !0,
            }),
            (t.body.width = 80),
            (t.body.height = 50),
            (t.body.depth = 120),
            (t.lowCamera = !0),
            t
          );
        }
        return (
          Gates_inheritsLoose(Gates, e),
          (Gates.prototype.init = function (t, e) {
            (this.body.x = 0),
              (this.body.bottom = 0),
              (this.body.z = t.z - e.components.Transform.position.z - 2 * B.blockSize),
              this.model && ((this.model.ry = Math.PI), (this.model.y = 0.5 * -this.body.height), (this.model.z = 1.45 * this.body.depth), this.addChild(this.model));
            var i = t.game.pool.get(Ut);
            (i.body.width = this.body.width), (i.body.height = 16), (i.body.depth = 0.9 * this.body.depth), (i.body.x = 0), (i.body.bottom = 37), (i.body.z = this.body.z), t.game.addChild(i);
            var n = t.game.pool.get(Ut);
            (n.body.width = 20), (n.body.height = i.body.bottom), (n.body.depth = 0.9 * this.body.depth), (n.body.bottom = 0), (n.body.right = 1.5 * -B.laneWidth), (n.body.z = this.body.z), t.game.addChild(n);
            var o = t.game.pool.get(Ut);
            (o.body.width = 20), (o.body.height = i.body.bottom), (o.body.depth = 0.9 * this.body.depth), (o.body.bottom = 0), (o.body.x = 0), (o.body.z = this.body.z), t.game.addChild(o);
            var s = t.game.pool.get(Ut);
            (s.body.width = 20),
              (s.body.height = i.body.bottom),
              (s.body.depth = 0.9 * this.body.depth),
              (s.body.bottom = 0),
              (s.body.left = 1.5 * B.laneWidth),
              (s.body.z = this.body.z),
              t.game.addChild(s),
              (this.colL = n),
              (this.colR = s),
              (this.colM = o),
              (this.ceiling = i);
            var a = t.game.pool.get(Gates.newEnvironment);
            (a.ry = Math.PI),
              (a.z = t.z),
              t.game.addChild(a),
              t.setFillersByPosition(t.z, t.z - 4 * B.blockSize),
              Nt.spawnGates(t),
              4 < t.blocks &&
                (Nt.spawn(t, {
                  z: t.z - 4 * B.blockSize,
                }),
                Yt.spawn(t, {
                  z: t.z - 4 * B.blockSize,
                  l: Yt.newHigh01Left,
                  r: Yt.newHigh01Right,
                }));
          }),
          Gates
        );
      })(v.a);
      Ht.newEnvironment = function () {
        return H.getEntityClone("/gates_base");
      };
      var Ut = (function (e) {
          function GatePart() {
            var t;
            return (t = e.call(this) || this).add(it), t;
          }
          return Gates_inheritsLoose(GatePart, e), (GatePart.prototype.reset = function () {}), GatePart;
        })(v.a),
        Vt = (function (i) {
          function GatesSides() {
            var t;
            return ((t = i.call(this) || this).model = H.getEntityClone("/gates_sides")), (t.model.ry = Math.PI), (t.model.y = 0.5 * -t.body.height), (t.model.sx = 0.9), (t.model.x = -1), t;
          }
          return (
            Gates_inheritsLoose(GatesSides, i),
            (GatesSides.prototype.init = function (t, e) {
              i.prototype.init.call(this, t, e),
                (this.colM.body.width = 20),
                (this.colM.body.x = 0),
                (this.colL.body.width = 20),
                (this.colL.body.right = 1.5 * -B.laneWidth),
                (this.colR.body.width = 20),
                (this.colR.body.left = 1.5 * B.laneWidth);
            }),
            GatesSides
          );
        })(Ht),
        qt = {
          gates_mid_group_place: (function (i) {
            function GatesMid() {
              var t;
              return ((t = i.call(this) || this).model = H.getEntityClone("/gates_mid")), (t.model.ry = Math.PI), (t.model.y = 0.5 * -t.body.height), t.addChild(t.model), t;
            }
            return (
              Gates_inheritsLoose(GatesMid, i),
              (GatesMid.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e),
                  (this.colM.body.width = 0),
                  (this.colM.body.x = 999),
                  (this.colL.body.width = 60),
                  (this.colL.body.right = 0.5 * -B.laneWidth),
                  (this.colR.body.width = 60),
                  (this.colR.body.left = 0.5 * B.laneWidth);
              }),
              GatesMid
            );
          })(Ht),
          gates_left_group_place: (function (i) {
            function GatesLeft() {
              var t;
              return ((t = i.call(this) || this).model = H.getEntityClone("/gates_left")), (t.model.ry = Math.PI), (t.model.y = 0.5 * -t.body.height), t.addChild(t.model), t;
            }
            return (
              Gates_inheritsLoose(GatesLeft, i),
              (GatesLeft.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e),
                  (this.colM.body.width = 0),
                  (this.colM.body.x = 999),
                  (this.colL.body.width = 60),
                  (this.colL.body.right = 1.5 * -B.laneWidth),
                  (this.colR.body.width = 60),
                  (this.colR.body.left = 0.5 * -B.laneWidth);
              }),
              GatesLeft
            );
          })(Ht),
          gates_right_group_place: (function (i) {
            function GatesRight() {
              var t;
              return ((t = i.call(this) || this).model = H.getEntityClone("/gates_right")), (t.model.ry = Math.PI), (t.model.y = 0.5 * -t.body.height), t.addChild(t.model), t;
            }
            return (
              Gates_inheritsLoose(GatesRight, i),
              (GatesRight.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e),
                  (this.colM.body.width = 0),
                  (this.colM.body.x = 999),
                  (this.colL.body.width = 60),
                  (this.colL.body.right = 0.5 * B.laneWidth),
                  (this.colR.body.width = 60),
                  (this.colR.body.left = 1.5 * B.laneWidth);
              }),
              GatesRight
            );
          })(Ht),
          gates_sides_group_place: Vt,
        };
  
      function StationPlatform_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      Ht.factory = function (t, e) {
        var i = qt[e.name],
          n = t.game.pool.get(i);
        n.init(t, e), t.game.addChild(n);
      };
      var Wt = (function (e) {
          function StationPlatform() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 2),
              (t.body.depth = 2 * B.blockSize),
              (t.model = H.getEntityClone("station_platforms")),
              (t.model.ry = Math.PI),
              (t.model.z = B.blockSize),
              t.addChild(t.model),
              t
            );
          }
          return (
            StationPlatform_inheritsLoose(StationPlatform, e),
            (StationPlatform.prototype.init = function (t, e, i) {
              (this.body.back = i), (this.body.x = 0);
              var n = t.game.pool.get(Zt);
              n.reset(), (n.body.width = 20), (n.body.height = 9), (n.body.depth = this.body.depth), (n.body.x = -B.laneWidth), (n.body.bottom = 0), (n.body.z = this.body.z), t.game.addChild(n);
              var o = t.game.pool.get(Zt);
              o.reset(), (o.body.width = 20), (o.body.height = 9), (o.body.depth = this.body.depth), (o.body.x = B.laneWidth), (o.body.bottom = 0), (o.body.z = this.body.z), t.game.addChild(o);
            }),
            StationPlatform
          );
        })(v.a),
        Zt = (function (e) {
          function StationPart() {
            var t;
            return (t = e.call(this) || this).add(it), t;
          }
          return (
            StationPlatform_inheritsLoose(StationPart, e),
            (StationPart.prototype.reset = function () {
              this.body.box.size.reset(), this.body.box.center.reset();
            }),
            StationPart
          );
        })(v.a);
  
      function StationEnvironment_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      Wt.factory = function (t, e, i) {
        var n = e.components.Transform.position.z,
          o = t.game.pool.get(Wt);
        o.init(t, e, t.z - n), t.game.addChild(o);
        var s = t.game.pool.get(Wt);
        s.init(t, e, t.z - n - o.body.depth), t.game.addChild(s);
      };
      var Kt = (function (e) {
          function StationEnvironment() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !1,
              }),
              (t.body.width = 80),
              (t.body.height = 4),
              (t.body.depth = 4 * B.blockSize),
              t
            );
          }
          return (
            StationEnvironment_inheritsLoose(StationEnvironment, e),
            (StationEnvironment.prototype.init = function (t, e, i) {
              void 0 === i && (i = !0);
              var n = e.components.Environment,
                o = n ? n._blockCount : 4,
                s = e.components.Transform.position.z,
                a = t.z - s;
              t.name.match("short") || (a += 4 * B.blockSize), (this.body.depth = B.blockSize * o), (this.body.x = 0), (this.body.top = 86), (this.body.back = a);
              var r = t.game.pool.get(Jt);
              (r.body.z = a), t.game.addChild(r);
              for (var h = 0.5 * (o - 2), d = 0; d < h; d++) {
                var l = t.game.pool.get(Qt);
                (l.body.z = a - B.blockSize - l.body.depth * d), t.game.addChild(l);
              }
              var c = t.game.pool.get($t);
              if (((c.body.z = a - (o - 1) * B.blockSize), t.game.addChild(c), t.setFillersByPosition(this.body.back, this.body.front), i))
                for (var u = 0.5 * o, p = 0; p < u; p++) {
                  var m = t.game.pool.get(Wt);
                  m.init(t, e, a - m.body.depth * p), t.game.addChild(m);
                }
              for (var f = 0.5 * o, g = 0; g < f; g++) {
                var y = a - g * (2 * B.blockSize);
                0 === g
                  ? Nt.spawn(t, {
                      z: y,
                      l: Nt.newGroundShadowStart,
                      m: Nt.newTrackShadowStart,
                      r: Nt.newGroundShadowStart,
                    })
                  : g < f - 1
                  ? Nt.spawn(t, {
                      z: y,
                      l: Nt.newGroundShadowMid,
                      m: Nt.newTrackShadowMid,
                      r: Nt.newGroundShadowMid,
                    })
                  : Nt.spawn(t, {
                      z: y,
                      l: Nt.newGroundShadowEnd,
                      m: Nt.newTrackShadowEnd,
                      r: Nt.newGroundShadowEnd,
                    });
              }
              t.setFillersByPosition(this.body.back, this.body.front), t.setFloorsByPosition(this.body.back, this.body.front);
            }),
            StationEnvironment
          );
        })(v.a),
        Jt = (function (e) {
          function StationStart() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 0),
              (t.body.depth = B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("/station_start")),
              (t.model.ry = Math.PI),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return StationEnvironment_inheritsLoose(StationStart, e), StationStart;
        })(v.a),
        Qt = (function (e) {
          function StationMid() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 0),
              (t.body.depth = 2 * B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("/station_mid")),
              (t.model.ry = Math.PI),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return StationEnvironment_inheritsLoose(StationMid, e), StationMid;
        })(v.a),
        $t = (function (e) {
          function StationEnd() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 0),
              (t.body.depth = B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("/station_end")),
              (t.model.ry = Math.PI),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return StationEnvironment_inheritsLoose(StationEnd, e), StationEnd;
        })(v.a);
      Kt.match = function (t) {
        return !!t.components.Environment && 0 <= t.components.Environment._environmentKind._type.split(",").indexOf("Station");
      };
      var te = (function (e) {
        var t, i;
  
        function StartBag() {
          var t;
          return (
            (t = e.call(this) || this).add(it, {
              deco: !0,
            }),
            (t.body.width = 4),
            (t.body.height = 4),
            (t.body.depth = 4),
            (t.model = H.getEntityCloneOpaque("/startScreen_bag/startScreen_bag_base", "props_tex")),
            (t.model.ry = Math.PI),
            (t.model.y = -1.3),
            t.addChild(t.model),
            t
          );
        }
        return (
          (i = e),
          ((t = StartBag).prototype = Object.create(i.prototype)),
          ((t.prototype.constructor = t).__proto__ = i),
          (StartBag.prototype.init = function (t, e) {
            (this.body.x = e.components.Transform.position.x), (this.body.bottom = 0), (this.body.z = t.z - e.components.Transform.position.z);
          }),
          StartBag
        );
      })(v.a);
  
      function Obstacle_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var ee = (function (e) {
          function Obstacle() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                ghost: !0,
              }),
              (t.body.width = 18),
              (t.body.height = 14),
              (t.body.depth = 1),
              (t.model = null),
              t
            );
          }
          return (
            Obstacle_inheritsLoose(Obstacle, e),
            (Obstacle.prototype.init = function (t, e) {
              (this.model.ry = Math.PI), (this.model.z = -4), this.addChild(this.model);
            }),
            Obstacle
          );
        })(v.a),
        ie = [
          (function (i) {
            function ObstacleDumpster() {
              var t;
              return ((t = i.call(this) || this).body.soft = !1), (t.model = H.getEntityClone("dumpster")), t;
            }
            return (
              Obstacle_inheritsLoose(ObstacleDumpster, i),
              (ObstacleDumpster.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e), (this.body.height = 14), (this.model.y = 0.5 * -this.body.height);
              }),
              ObstacleDumpster
            );
          })(ee),
          (function (i) {
            function ObstacleBush() {
              var t;
              return ((t = i.call(this) || this).body.soft = !0), (t.model = H.getEntityClone("bush_1")), t;
            }
            return (
              Obstacle_inheritsLoose(ObstacleBush, i),
              (ObstacleBush.prototype.init = function (t, e) {
                i.prototype.init.call(this, t, e), (this.body.height = 12), (this.model.y = 0.5 * -this.body.height);
              }),
              ObstacleBush
            );
          })(ee),
        ];
      (ee.match = function (t) {
        return t.name.match(/obstacle_group/);
      }),
        (ee.factory = function (t, e, i) {
          var n = L.pick.apply(L, ie),
            o = t.game.pool.get(n),
            s = e.components.Transform.position.x,
            a = e.components.Transform.position.z;
          (o.body.z = t.z - a), (o.body.x = s), (o.body.bottom = 0), i.offsetX && (o.body.x = i.offsetX), i.flip && (o.body.x *= -1), o.init(t, e), t.game.addChild(o);
        });
      var ne = (function (e) {
        var t, i;
  
        function Pillar() {
          var t;
          return (t = e.call(this) || this).add(it), (t.body.width = 9), (t.body.height = 80), (t.body.depth = 9), (t.model = H.getEntityClone("pillar")), (t.model.ry = Math.PI), (t.model.y = 0.5 * -t.body.height), t.addChild(t.model), t;
        }
        return (
          (i = e),
          ((t = Pillar).prototype = Object.create(i.prototype)),
          ((t.prototype.constructor = t).__proto__ = i),
          (Pillar.prototype.init = function (t, e) {
            this.addChild(this.model);
          }),
          Pillar
        );
      })(v.a);
  
      function PillarsEnvironment_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      (ne.factory = function (t, e, i) {
        var n = t.game.pool.get(ne),
          o = e.components.Transform.position.x,
          s = e.components.Transform.position.z;
        (n.body.z = t.z - s), (n.body.x = o), (n.body.bottom = 0), i.offsetX && (n.body.x = i.offsetX), i.flip && (n.body.x *= -1), n.init(t, e), t.game.addChild(n);
      }),
        (ne.match = function (t) {
          return t.name.match(/pillar_group_place/);
        });
      var oe = (function (e) {
          function PillarsEnvironment() {
            var t;
            return (t = e.call(this) || this).add(it), (t.body.width = 80), (t.body.height = 20), (t.body.depth = B.blockSize), (t.body.top = 90), t;
          }
          return (
            PillarsEnvironment_inheritsLoose(PillarsEnvironment, e),
            (PillarsEnvironment.prototype.init = function (t, e) {
              var i = e.components.Transform.position.z,
                n = e.components.Environment._blockCount;
              (this.body.x = 0), (this.body.depth = B.blockSize * n), (this.body.back = t.z - i);
              var o = t.game.pool.get(se);
              (o.body.back = this.body.back),
                t.game.addChild(o),
                Nt.spawn(t, {
                  z: o.body.back,
                  l: Nt.newTrackShadowShortStart,
                  m: Nt.newGroundShadowShortStart,
                  r: Nt.newTrackShadowShortStart,
                });
              for (var s = 0; s < n - 2; s++) {
                var a = t.game.pool.get(ae);
                (a.body.back = o.body.back - B.blockSize * (s + 1)),
                  t.game.addChild(a),
                  Nt.spawn(t, {
                    z: a.body.back,
                    l: Nt.newTrackShadowMid,
                    m: Nt.newGroundShadowMid,
                    r: Nt.newTrackShadowMid,
                  });
              }
              var r = t.game.pool.get(re);
              (r.body.back = o.body.back - B.blockSize * (n - 1)),
                t.game.addChild(r),
                Nt.spawn(t, {
                  z: r.body.back,
                  l: Nt.newTrackShadowShortEnd,
                  m: Nt.newGroundShadowShortEnd,
                  r: Nt.newTrackShadowShortEnd,
                });
            }),
            PillarsEnvironment
          );
        })(v.a),
        se = (function (e) {
          function PillarsEnvironmentStart() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 1),
              (t.body.depth = B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("pillars_start")),
              (t.model.ry = Math.PI),
              (t.model.z = 0.5 * t.body.depth),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return PillarsEnvironment_inheritsLoose(PillarsEnvironmentStart, e), PillarsEnvironmentStart;
        })(v.a),
        ae = (function (e) {
          function PillarsEnvironmentMid() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 1),
              (t.body.depth = B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("pillars_mid")),
              (t.model.ry = Math.PI),
              (t.model.z = 0.5 * t.body.depth),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return PillarsEnvironment_inheritsLoose(PillarsEnvironmentMid, e), PillarsEnvironmentMid;
        })(v.a),
        re = (function (e) {
          function PillarsEnvironmentEnd() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 1),
              (t.body.depth = B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("pillars_end")),
              (t.model.ry = Math.PI),
              (t.model.z = 0.5 * t.body.depth),
              (t.model.y = 0.5 * -t.body.height),
              t.addChild(t.model),
              t
            );
          }
          return PillarsEnvironment_inheritsLoose(PillarsEnvironmentEnd, e), PillarsEnvironmentEnd;
        })(v.a);
  
      function TubeEnvironment_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      oe.match = function (t) {
        return !!t.components.Environment && 0 <= t.components.Environment._environmentKind._type.split(",").indexOf("Pillars");
      };
      var he = (function (e) {
          function TubeEnvironment() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !1,
              }),
              (t.body.width = 80),
              (t.body.height = 16),
              (t.body.depth = B.blockSize),
              (t.body.top = 88),
              t
            );
          }
          return (
            TubeEnvironment_inheritsLoose(TubeEnvironment, e),
            (TubeEnvironment.prototype.init = function (t, e) {
              var i = e.components.Transform.position.z;
              t.game.route.hasTube = !0;
              var n = t.blocks;
              e.components.Environment && (n = e.components.Environment._blockCount), (this.body.x = 0), (this.body.depth = B.blockSize * n), (this.body.back = t.z - i);
              for (var o = 0.5 * n, s = 0; s < o; s++) {
                var a = t.game.pool.get(de);
                (a.body.back = this.body.back - 2 * B.blockSize * s), t.game.addChild(a);
                var r = a.body.back;
                0 === s
                  ? Nt.spawn(t, {
                      z: r,
                      l: Nt.newTrackShadowStart,
                    })
                  : s < o - 1
                  ? Nt.spawn(t, {
                      z: r,
                      l: Nt.newTrackShadowMid,
                    })
                  : Nt.spawn(t, {
                      z: r,
                      l: Nt.newTrackShadowEnd,
                    });
              }
            }),
            TubeEnvironment
          );
        })(v.a),
        de = (function (e) {
          function TubeEnvironmentBlock() {
            var t;
            return (
              (t = e.call(this) || this).add(it, {
                deco: !0,
                noView: !0,
              }),
              (t.body.width = 80),
              (t.body.height = 0),
              (t.body.depth = 2 * B.blockSize),
              (t.body.bottom = 0),
              (t.model = H.getEntityClone("tube")),
              (t.model.ry = Math.PI),
              (t.model.z = 0.5 * t.body.depth),
              (t.model.y = 0.5 * -t.body.height),
              (t.model.view3d.state.culling = !1),
              t.addChild(t.model),
              "1103_seoul" === B.env &&
                ((t.model001 = H.getEntityClone("tube001")),
                (t.model001.ry = t.model.ry),
                (t.model001.z = t.model.z),
                (t.model001.y = t.model.y),
                (t.model001.view3d.state.blend = !0),
                (t.model001.view3d.material.opacity = 0.7),
                (t.model001.view3d.state.culling = !1),
                t.addChild(t.model001),
                (t.model002 = H.getEntityClone("tube002")),
                (t.model002.ry = t.model.ry),
                (t.model002.z = t.model.z),
                (t.model002.y = t.model.y),
                (t.model002.view3d.state.culling = !1),
                t.addChild(t.model002)),
              t
            );
          }
          return TubeEnvironment_inheritsLoose(TubeEnvironmentBlock, e), TubeEnvironmentBlock;
        })(v.a);
      (he.match = function (t) {
        return !!t.components.Environment && 0 <= t.components.Environment._environmentKind._type.split(",").indexOf("Tube");
      }),
        (he.factory = function (t, e, i) {
          t.game.route.setSpawnDistance("tube", 1e3);
          var n = t.game.pool.get(he);
          return n.init(t, e, i), t.game.addChild(n), n;
        });
      var le = (function (e) {
        var t, i;
  
        function Trigger() {
          var t;
          return ((t = e.call(this) || this).tutorialTrigger = !0), t.add(it), (t.body.width = 60), (t.body.height = 30), (t.body.depth = 1), (t.body.trigger = !0), (t.view = H.box(t.body.box)), t;
        }
        (i = e), ((t = Trigger).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i);
        var n = Trigger.prototype;
        return (
          (n.reset = function () {}),
          (n.init = function (t, e) {
            this.type = e.name.split("_").pop();
          }),
          Trigger
        );
      })(v.a);
      (le.match = function (t) {
        return t.name.match(/Trigger_/);
      }),
        (le.factory = function (t, e, i) {
          var n = t.game.pool.get(le),
            o = e.components.Transform.position.x,
            s = e.components.Transform.position.z;
          (n.body.z = t.z - s), (n.body.x = o), (n.body.bottom = 0), i.offsetX && (n.body.x = i.offsetX), i.flip && (n.body.x *= -1), n.init(t, e), t.game.addChild(n);
        });
      var ce = (function (e) {
        var t, i;
  
        function Checkpoint() {
          var t;
          return ((t = e.call(this) || this).checkpoint = !0), t.add(it), (t.body.width = 2), (t.body.height = 20), (t.body.depth = 2), (t.body.deco = !0), (t.view = H.box(t.body.box)), t;
        }
        (i = e), ((t = Checkpoint).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i);
        var n = Checkpoint.prototype;
        return (n.reset = function () {}), (n.init = function (t, e) {}), Checkpoint;
      })(v.a);
      (ce.match = function (t) {
        return t.name.match(/checkpoint_/);
      }),
        (ce.factory = function (t, e, i) {
          var n = t.game.pool.get(ce),
            o = e.components.Transform.position.x,
            s = e.components.Transform.position.z;
          return (n.body.z = t.z - s), (n.body.x = o), (n.body.bottom = 0), i.offsetX && (n.body.x = i.offsetX), i.flip && (n.body.x *= -1), n.init(t, e), t.game.addChild(n), n;
        });
      var ue = (function () {
        function Node() {}
        return (
          (Node.getEntityClass = function (t) {
            return t.name.match(/train_ramp/)
              ? kt
              : t.name.match(/trains_(\d)_/)
              ? mt
              : t.name.match(/train_sub_(\d)_/)
              ? mt
              : t.name.match(/lightSignal/)
              ? Ct
              : t.name.match(/blocker/)
              ? _t
              : pt.match(t)
              ? pt
              : Tt.match(t)
              ? Tt
              : t.name.match(/gates_(.*?)_group_place/)
              ? Ht
              : t.name.match(/bag_place/)
              ? te
              : ee.match(t)
              ? ee
              : ne.match(t)
              ? ne
              : Kt.match(t)
              ? Kt
              : oe.match(t)
              ? oe
              : he.match(t)
              ? he
              : le.match(t)
              ? le
              : ce.match(t)
              ? ce
              : null;
          }),
          (Node.comp = function (t, e) {
            return t.components[e];
          }),
          (Node.get = function (t, e, i) {
            if ((void 0 === i && (i = null), !t)) return i;
            "string" == typeof e && (e = e.split("."));
            var n = e.shift();
            return e.length ? this.get(t[n], e, i) : void 0 !== t[n] ? t[n] : i;
          }),
          (Node.environment = function (t) {
            if (t.components.Environment) return t;
            for (var e = t.children.length; e--; ) {
              var i = this.environment(t.children[e]);
              if (i) return i;
            }
            return null;
          }),
          (Node.environmentType = function (t) {
            return t.components.Environment ? t.components.Environment._environmentKind._type.split(",") : null;
          }),
          (Node.environmentKinds = function (t) {
            var e = t.components.RouteChunk._limitedAllowedEnvironmentKinds,
              i = Random.item(e)._type.split(",");
            this.environment = i || [];
          }),
          Node
        );
      })();
      var pe = (function (e) {
        var t, i;
  
        function Cube() {
          var t;
          return (t = e.call(this) || this).add(it), t;
        }
        return (
          (i = e),
          ((t = Cube).prototype = Object.create(i.prototype)),
          ((t.prototype.constructor = t).__proto__ = i),
          (Cube.prototype.reset = function () {
            (this.body.deco = !1), this.body.box.size.reset(), this.body.box.center.reset();
          }),
          Cube
        );
      })(v.a);
      var me = (function (e) {
          var t, i;
  
          function Logo() {
            var t;
            return ((t = e.call(this) || this).model = H.getEntityCloneBlend("/train_start", "train_start", 0.999)), (t.model.ry = Math.PI), t.addChild(t.model), t;
          }
          return (i = e), ((t = Logo).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i), Logo;
        })(v.a),
        fe = null,
        ge = (function () {
          function Chunk() {
            this.reset();
          }
          var t = Chunk.prototype;
          return (
            (t.reset = function () {
              (this.node = null), (this.section = "");
            }),
            (t.init = function (t, e, i, n) {
              (this.game = t),
                (this.node = i),
                (this.name = this.node.name),
                (this.entities = []),
                (this.blocks = ue.get(i, "components.RouteChunk._blockCount", 0)),
                (this.length = this.blocks * B.blockSize),
                (this.z = -e),
                (this.start = e),
                (this.middle = this.start + 0.5 * this.length),
                (this.end = this.start + this.length),
                (this.offset = 0),
                (this.index = n),
                (this.fillers = {}),
                (this.floors = {}),
                this.game.environment.setup(this),
                this.mount(this.node, this, {}),
                this.game.environment.mount(this),
                B.blocks && this.addChunkDebugMarks(),
                "intro" === this.name && this.mountIntro();
            }),
            (t.mountIntro = function () {
              fe || (fe = new me()), (fe.x = -20), (fe.y = 0), (fe.z = 30), this.game.addChild(fe), Nt.mount(this);
            }),
            (t.defineEnvironment = function () {
              if (((this.envNode = ue.environment(this.node)), (this.environment = this.envNode ? ue.environmentType(this.envNode) : null), !this.environment))
                if (this.node.name.match(/tunnel/)) this.environment = ["Gates", "All"];
                else if (this.node.name.match(/epic/)) this.environment = ["Epic", "All"];
                else if (this.node.components.RouteChunk) {
                  var t = this.node.components.RouteChunk._limitedAllowedEnvironmentKinds,
                    e = t.length ? L.item(t)._type.split(",") : ["Fillers", "All"];
                  this.environment = e || [];
                } else this.environment = [];
              (this.envTube = !1), (this.envStation = !1), (this.envEpic = !1), (this.envGates = !1), (this.envEmpty = !1);
              var i = this.lastTube;
              B.forceTube || (0 <= this.environment.indexOf("Tube") && this.z < i)
                ? ((this.envTube = !0), (this.lastTube = this.z))
                : 0 <= this.environment.indexOf("Station")
                ? (this.envStation = !0)
                : 0 <= this.environment.indexOf("Epic")
                ? (this.envEpic = !0)
                : 0 <= this.environment.indexOf("Gates")
                ? (this.envGates = !0)
                : 0 <= this.environment.indexOf("Empty") && (this.envEmpty = !0);
            }),
            (t.mount = function (t, e) {
              if ("intro" !== this.name || !t.name.match("lightSignal") || B.loadAll)
                if ((void 0 === (e = Object.assign({}, e || {})).flip && (e.flip = 0), void 0 === e.offsetX && (e.offsetX = null), ue.comp(t, "Randomizer"))) {
                  var i = L.pick.apply(L, t.children);
                  this.mount(i, e);
                } else {
                  if (ue.comp(t, "RandomizeOffset")) {
                    var n = t.components.RandomizeOffset.randomOffsets.left,
                      o = t.components.RandomizeOffset.randomOffsets.mid,
                      s = t.components.RandomizeOffset.randomOffsets.right,
                      a = [];
                    n && a.push(-20), o && a.push(0), s && a.push(20), a.length && (e.offsetX = L.pick.apply(L, a));
                  }
                  ue.comp(t, "Mirror") && (e.flip = L.pick(0, 1));
                  var r = ue.getEntityClass(t);
                  if (r) {
                    var h = null;
                    if (
                      (r.factory ? (h = r.factory(this, t, e)) : ((h = this.game.pool.get(r)).init(this, t, e), this.game.addChild(h)),
                      h && h.checkpoint && (this.checkpoints || (this.checkpoints = []), this.checkpoints.push(h)),
                      h && ue.comp(t, "Environment"))
                    ) {
                      for (var d = -h.body.back - this.start, l = -h.body.front - this.start, c = 2 * B.blockSize, u = Math.round(d / c), p = Math.round(l / c), m = u; m < p; m++) this.fillers[m] = !0;
                      for (var f = u; f < p; f++) this.floors[f] = !0;
                    }
                  }
                  if (t.children) for (var g = t.children.length; g--; ) this.mount(t.children[g], e);
                }
            }),
            (t.setFillersByPosition = function (t, e, i) {
              void 0 === i && (i = !0);
              for (var n = -t - this.start, o = -e - this.start, s = 2 * B.blockSize, a = Math.round(n / s), r = Math.round(o / s), h = a; h < r; h++) this.fillers[h] = !0;
            }),
            (t.setFloorsByPosition = function (t, e, i) {
              void 0 === i && (i = !0);
              for (var n = -t - this.start, o = -e - this.start, s = 2 * B.blockSize, a = Math.round(n / s), r = Math.round(o / s), h = a; h < r; h++) this.floors[h] = !0;
            }),
            (t.addChunkDebugMarks = function () {
              for (var t = this.blocks; t--; ) {
                var e = this.game.pool.get(pe);
                (e.body.deco = !0), (e.body.width = 80), (e.body.height = t ? 2 : 20), (e.body.depth = 0.1), (e.body.x = 0), (e.body.bottom = 0), (e.body.z = -this.start - t * B.blockSize), this.game.addChild(e);
              }
            }),
            (t.clean = function () {
              for (var t = this.entities.length; t--; ) this.game.removeChild(this.entities[t]);
              this.entities.length = 0;
            }),
            (t.triggerEnter = function () {
              for (var t = this.entities.length; t--; ) {
                var e = this.entities[t];
                e.triggerEnter && e.triggerEnter();
              }
            }),
            (t.triggerExit = function () {}),
            (t.getLastCheckpointByPosition = function (t) {
              if (!this.checkpoints) return null;
              for (var e = null, i = this.checkpoints.length; i--; ) {
                var n = this.checkpoints[i];
                n.body.z > t && (e = n);
              }
              return e || this.checkpoints[0];
            }),
            Chunk
          );
        })(),
        ye = i(127),
        ve = null,
        _e = null,
        be = null,
        we = (function () {
          function Data() {}
          return (
            (Data.init = function (t) {
              be = t;
            }),
            (Data.sectionMap = function () {
              if (_e) return _e;
              return (
                (_e = {}),
                (function extract(t) {
                  if (void 0 !== t.name) _e[t.name] = t;
                  else for (var e in t) extract(t[e]);
                })(ye),
                _e
              );
            }),
            (Data.section = function (t) {
              t = (t = t.replace("routeSection_", "")).replace("route_section_", "");
              var e = this.sectionMap(),
                i = e[t] || e["route_section_" + t] || e["routeSection_" + t];
              if (!i) throw "Section data not found: " + t;
              return i;
            }),
            (Data.sectionClone = function (t) {
              var e = this.sectionMap();
              if (!e[t]) throw "Section data not found: " + t;
              var i = e[t];
              return {
                name: i.name,
                start: i.start.slice(0),
                mid: i.start.slice(0),
                end: i.start.slice(0),
              };
            }),
            (Data.chunkMap = function (t) {
              console.log("chunkMap " + t);
              if (ve && !t) return ve;
              ve = {};
              var e = {};
              for (var i in be) i.match("chunks_") && (e[i] = be[i].data);
              return (
                (function extract(t, e) {
                  console.log(be);
                  if (!t || !e--) return;
                  if ("intro" === t.name) ve[t.name] = t;
                  else if (t.components && t.components.RouteChunk) {
                    var i = t.components.RouteChunk._reportedName || t.name;
                    ve[i] = t;
                  } else if (t.children) for (var n in t.children) extract(t.children[n], e);
                  else for (var o in t) extract(t[o], e);
                })(e, 5),
                ve
              );
            }),
            (Data.chunk = function (t) {
              t = (t = t.replace("routeChunk_", "")).replace("route_chunk_", "");
              var e = this.chunkMap(),
                i = e[t] || e["routeChunk_" + t] || e["route_chunk_" + t] || e["default_" + t];
              if (!i) throw "Chunk data not found: " + t;
              return (i.__name = t), i;
            }),
            (Data.refreshCache = function () {
              ve = this.chunkMap(!0);
            }),
            Data
          );
        })();
      var ke = (function (n) {
        var t, e;
  
        function LevelSystem(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).entities = []),
            (i.chunks = []),
            (i.currentChunk = null),
            (i.game = t.game),
            i.game.onReset.add(
              (function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
              })(i)
            ),
            (i.sequence = []),
            (i.queued = []),
            (i.onEnterChunk = new et.a("onEnterChunk", 1)),
            (i.onExitChunk = new et.a("onExitChunk", 1)),
            (i.onEnterTutorial = new et.a("onEnterTutorial")),
            (i.onExitTutorial = new et.a("onExitTutorial")),
            (i.countRemoveObsolete = 2),
            (i.countUpdate = 0),
            i
          );
        }
        (e = n), ((t = LevelSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = LevelSystem.prototype;
        return (
          (i.reset = function () {
            (this.chunks = []), (this.sequence = []), (this.queued = []), (this.nextPosition = 0);
            var t = this.entities.slice(0);
            (this.currentChunk = this.placeNextChunk("intro")), this.game.forceUpdate(), this.removeAllEntities(t);
          }),
          (i.entityAddedToGame = function (t) {
            !t._CLASS_ID || t.player || t.follower || 0 <= this.entities.indexOf(t) || this._addEntity(t);
          }),
          (i.entityRemovedFromGame = function (t) {
            !t._CLASS_ID || t.player || t.follower || t.particle || this.entities.indexOf(t) < 0 || this._removeEntity(t);
          }),
          (i._addEntity = function (t) {
            t.player || t.follower || this.entities.push(t);
          }),
          (i._removeEntity = function (t, e) {
            t.player || t.follower || t.particle || (void 0 === e && (e = this.entities.indexOf(t)), (t.z = 99999), t.body && (t.body.z = t.z), this.entities.splice(e, 1), this.game.removeChild(t), this.game.pool["return"](t));
          }),
          (i.postupdate = function () {
            this.game.state === pn.RUNNING && (0 < this.countRemoveObsolete-- || (this.removeObsoleteEntities(), (this.countRemoveObsolete = 5)));
          }),
          (i.preupdate = function () {
            if ((this.game.state === pn.RUNNING || this.queued.length) && !(0 < this.countUpdate--)) {
              this.countRemoveObsolete = 5;
              var t = this.chunks[this.game.stats.chunkIndex];
              t || this.game.crash("No chunk found at current index:", this.game.stats.chunkIndex),
                t !== this.currentChunk &&
                  (this.currentChunk && (this.isTutorial() && this.onExitTutorial.dispatch(), this.onExitChunk.dispatch(this.currentChunk.name)),
                  (this.currentChunk = t),
                  this.onEnterChunk.dispatch(this.currentChunk.name),
                  this.isTutorial() && this.onEnterTutorial.dispatch()),
                this.game.stats.setCurrentChunk(t),
                this.game.stats.distance > t.end && (this.game.stats.chunkIndex += 1),
                this.placeChunks();
            }
          }),
          (i.placeChunks = function () {
            console.log("placeChunks");
            if (this.queued && this.queued.length) {
              for (var t = this.queued.length; t--; ) this.placeNextChunk(this.queued[t]);
              this.queued.length = 0;
            }
            for (var e = 20, i = this.game.stats.distance + B.visibleMaxDistance; this.nextPosition < i; ) e-- || this.game.crash("Too many chunks placed at same time"), this.placeNextChunk(this.name);
          }),
          (i.nextInSequence = function () {
            this.sequence.length || (this.sequence = this.game.route.getSequence());
            var t = this.sequence.shift(),
              e = "string" == typeof t ? t : L.item(e);
            return we.chunk(e);
          }),
          (i.queueNextChunk = function (t) {
            var e = t ? we.chunk(t) : this.nextInSequence();
            this.queued.unshift(e.__name);
          }),
          (i.placeNextChunk = function (t) {
            var e = new ge(),
              i = t ? we.chunk(t) : this.nextInSequence();
            if (!i) throw new Error("Chunk not found");
            return e.init(this.game, this.nextPosition, i, this.chunks.length), this.chunks.push(e), (this.nextPosition += e.length), e;
          }),
          (i.removeObsoleteEntities = function () {
            if (!this.isTutorial())
              for (var t = this.entities.length; t--; ) {
                var e = this.entities[t],
                  i = e.body ? e.body.front : e.z,
                  n = this.game.stats.z - B.visibleMinDistance;
                (!e.active || n < i) && this._removeEntity(e, t);
              }
          }),
          (i.removeAllEntities = function (t) {
            t || (t = this.entities);
            for (var e = t.length; e--; ) this._removeEntity(t[e], e);
          }),
          (i.reshuffle = function (t) {
            void 0 === t && (t = !1),
              this.game.route.resetSpawns(),
              (this.currentChunk = null),
              this.game.physics.reset(),
              this.removeAllEntities(this.entities),
              (this.nextPosition = this.game.stats.distance - 10),
              (this.currentChunk = this.placeNextChunk("default_fallback")),
              (this.currentChunk = this.placeNextChunk("default_fallback")),
              t && this.game.update(1);
          }),
          (i.isTutorial = function () {
            return !(!this.currentChunk || "routeChunk_default_tutorial" !== this.currentChunk.name) && this.game.stats.distance < this.currentChunk.end - 300;
          }),
          (i.setSafeLanding = function (t) {
            for (; this.nextPosition <= t; ) this.placeNextChunk();
            var e = this.nextPosition;
            return this.placeNextChunk("jetpack_landing"), e;
          }),
          (i.removeChunksAhead = function (t) {
            for (var e = this.chunks.length; e--; ) {
              var i = this.chunks[e];
              i.start > t && (this.chunks.splice(e, 1), (this.nextPosition = i.start));
            }
          }),
          (i.removeEntitiesAhead = function (t) {
            for (var e = this.entities.length; e--; ) {
              var i = this.entities[e];
              t < -(i.body ? i.body.back : i.z) && this._removeEntity(i, e);
            }
          }),
          LevelSystem
        );
      })(f.a);
      var xe = (function (n) {
          var t, e;
  
          function PhysicsSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).collision = new $()),
              t.game.onReset.add(
                (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(i)
              ),
              i.reset(),
              i
            );
          }
          (e = n), ((t = PhysicsSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = PhysicsSystem.prototype;
          return (
            (i.reset = function () {
              (this.stats = {}), (this.entities = []), (this._hasReset = !0);
            }),
            (i.entityAddedToGame = function (t) {
              !t.body || t.body.deco || t.player || 0 <= this.entities.indexOf(t) || this.entities.push(t);
            }),
            (i.entityRemovedFromGame = function (t) {
              if (t.body && !t.body.deco && !t.player) {
                var e = this.entities.indexOf(t);
                e < 0 || this.entities.splice(e, 1);
              }
            }),
            (i.postupdate = function (t) {
              var e = this.game.hero;
              if (this.game.state === pn.RUNNING || e.player.dead) {
                void 0 === t && (t = this.game.delta), e.player.dead || ((e.body.groundBefore = e.body.ground), (e.body.ground = 0));
                var i = Math.ceil(t),
                  n = Math.ceil(Math.abs(e.body.velocity.z)),
                  o = B.fixedPhysicsSteps || V.clamp(i + n, 1, 40),
                  s = t / o;
                B.debug && ((this.stats.delta = t), (this.stats.steps = o), (this.stats.stepsDelta = s), (this.stats.bodies = this.entities.length), (this.stats.collidables = 0));
                for (var a = o; a-- && !this._hasReset; ) {
                  e.body.move(s);
                  for (var r = this.entities.length; r--; ) {
                    var h = this.entities[r];
                    if (h && h.active && h !== e) {
                      if ((h.body.movable && h.body.move(s), this._hasReset)) break;
                      if (!(h.body.back < e.body.z - 10 || h.body.front > e.body.z + 5)) {
                        if (this.game.state !== pn.RUNNING) break;
                        if (e.player.dead) break;
                        if ((B.debug && (this.stats.collidables += 1), e.body.sensor && !h.body.ghost && !h.body.trigger)) {
                          var d = e.body.sensor.hitTest(h.body.box);
                          d && this.resolveGroundSensorHit(e, h, d);
                        }
                        var l = e.body.box.hitTest(h.body.box);
                        if ((l && !h.body.trigger && this.resolveHit(e, h, l), h.body.trigger)) {
                          var c = e.body.colliding.indexOf(h.body);
                          !l && 0 <= c && (e.body.colliding.splice(c, 1), e.body.triggerExit(h.body)), l && c < 0 && (e.body.colliding.push(h.body), e.body.triggerEnter(h.body));
                        }
                      }
                    }
                  }
                }
                e.body.ground < e.body.groundBefore && (e.body.groundChangeTolerance = 8), (this._hasReset = !1);
              }
            }),
            (i.resolve = function (t) {
              if (!this.isHeroDead())
                for (var e = this.entities.length; e--; ) {
                  var i = this.entities[e];
                  if (i && i.active && !(i.body.back < t.body.z - 10 || i.body.front > t.body.z + 5)) {
                    if ((B.debug && (this.stats.collidables += 1), t.body.sensor && !i.body.ghost && !i.body.trigger)) {
                      var n = t.body.sensor.hitTest(i.body.box);
                      n && this.resolveGroundSensorHit(t, i, n);
                    }
                    var o = t.body.box.hitTest(i.body.box);
                    if ((o && !i.body.trigger && this.resolveHit(t, i, o), i.body.trigger)) {
                      var s = t.body.colliding.indexOf(i.body);
                      !o && 0 <= s && (t.body.colliding.splice(s, 1), t.body.triggerExit(i.body)), o && s < 0 && (t.body.colliding.push(i.body), t.body.triggerEnter(i.body));
                    }
                  }
                }
            }),
            (i.resolveHit = function (t, e, i) {
              if (!this.isHeroDead())
                if (e.collectible) e.collectible.collect();
                else if (!t.body.ghost) {
                  var n = t.body,
                    o = e.body;
                  if ((this.collision.reset(), (this.collision.act = n), (this.collision.pas = o), this.collision.hit.copy(i), e.ramp)) if (n.right >= o.left && n.left <= o.right) return;
                  var s = o.movable ? o.origin : o.box;
                  n.y > o.top && i.height <= 6 && -1 < n.velocity.y
                    ? ((n.bottom = o.top + 0.1), (this.collision.flags = this.collision.flags | $.BOTTOM), 2 < i.height && (this.collision.flags = this.collision.flags | $.SLOPE), n.origin.copy(n.box))
                    : n.origin.bottom > s.top
                    ? ((n.bottom = o.top + 0.1), (this.collision.flags = this.collision.flags | $.BOTTOM), n.origin.copy(n.box))
                    : n.origin.left >= s.right
                    ? ((n.box.left = o.box.right + 0.1), (this.collision.flags = this.collision.flags | $.LEFT), n.origin.copy(n.box))
                    : n.origin.right <= s.left
                    ? ((n.box.right = o.box.left - 0.1), (this.collision.flags = this.collision.flags | $.RIGHT), n.origin.copy(n.box))
                    : n.origin.front >= s.back
                    ? ((n.box.front = o.box.back + 0.1), (this.collision.flags = this.collision.flags | $.FRONT), n.origin.copy(n.box))
                    : n.origin.top < s.bottom && ((n.box.top = o.box.bottom - 0.1), (this.collision.flags = this.collision.flags | $.TOP), n.origin.copy(n.box)),
                    this.collision.flags && n.collisionEnter(o, this.collision);
                }
            }),
            (i.resolveGroundSensorHit = function (t, e, i) {
              if (!this.isHeroDead())
                if (t.body.ghost) t.body.ground = 0;
                else {
                  var n = t.body,
                    o = e.body,
                    s = n.ground;
                  if (e.ramp) {
                    var a = o.box.size.y,
                      r = o.box.size.z;
                    s = a * ((o.back - n.front) / r) + 0.11;
                  } else s = o.top + 0.11;
                  s >= n.ground && (n.ground = s);
                }
            }),
            (i.canUpdate = function () {
              return this.game.state === pn.RUNNING;
            }),
            (i.isHeroDead = function () {
              return this.game.hero.player.dead;
            }),
            PhysicsSystem
          );
        })(f.a),
        Ce = (function () {
          function Graph() {}
          return (
            (Graph.rect = function (t) {
              return t.image ? this.rectImg(t) : this.rectColor(t);
            }),
            (Graph.rectColor = function (t) {
              void 0 === t && (t = {});
              var e = Object.assign(
                  {
                    name: "rectColor",
                    w: 120,
                    h: 120,
                    x: 0,
                    y: 0,
                    round: 0,
                    alpha: 1,
                    color: 3246014,
                  },
                  t
                ),
                i = new c.Graphics();
              i.beginFill(e.color, e.alpha);
              var n = -e.w / 2 + e.x,
                o = -e.h / 2 + e.y;
              return e.round ? i.drawRoundedRect(n, o, e.w, e.h, e.round) : i.drawRect(n, o, e.w, e.h), i.endFill(), i;
            }),
            (Graph.rectImg = function (t) {
              void 0 === t && (t = {});
              var e = Object.assign(
                  {
                    name: "rectImg",
                    w: 120,
                    h: 120,
                    x: 0,
                    y: 0,
                    l: 15,
                    t: 15,
                    r: 25,
                    b: 25,
                    image: "box_border_grey.png",
                  },
                  t
                ),
                i = c.Texture.from(e.image),
                n = new c.NineSlicePlane(i, e.l, e.t, e.r, e.b);
              return (n.width = e.w), (n.height = e.h), (n.x = 0.5 * -e.w + e.x), (n.y = 0.5 * -e.h + e.y), n;
            }),
            (Graph.rectComp = function () {
              for (var t = new c.Container(), e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
              for (var o = 0, s = i; o < s.length; o++) {
                var a = s[o],
                  r = this.rect(a);
                (t[a.name] = r), t.addChild(r);
              }
              return t;
            }),
            (Graph.roundRectBorder = function (t) {
              void 0 === t && (t = {});
              var e = Object.assign(
                  {
                    w: 120,
                    h: 120,
                    round: 5,
                    color: 3246014,
                    alpha: 1,
                    borderWidth: 12,
                    borderColor: 16777215,
                  },
                  t
                ),
                i = Object.assign(
                  {
                    name: "fill",
                  },
                  e
                ),
                n = {
                  name: "border",
                  w: e.w + e.borderWidth,
                  h: e.h + e.borderWidth,
                  round: e.round + 0.5 * e.borderWidth,
                  color: e.borderColor,
                  alpha: e.alpha,
                };
              return this.rectComp(n, i);
            }),
            (Graph.rectShadow = function (t) {
              void 0 === t && (t = {});
              var e = Object.assign(
                  {
                    w: 120,
                    h: 120,
                    round: 0,
                    color: 3246014,
                    alpha: 1,
                    shadowDistance: 8,
                    shadowColor: 0,
                    shadowAngle: 0.25 * Math.PI,
                    shadowAlpha: 1,
                  },
                  t
                ),
                i = Object.assign({}, e, {
                  name: "fill",
                }),
                n = Object.assign({}, e, {
                  name: "shadow",
                  color: e.shadowColor,
                  alpha: e.shadowAlpha,
                  x: Math.sin(e.shadowAngle) * e.shadowDistance,
                  y: Math.cos(e.shadowAngle) * e.shadowDistance,
                });
              return this.rectComp(n, i);
            }),
            (Graph.rectBorder = function (t) {
              void 0 === t && (t = {});
              var e = Object.assign(
                  {
                    w: 120,
                    h: 120,
                    round: 5,
                    color: 3246014,
                    alpha: 1,
                    borderWidth: 8,
                    borderColor: 0,
                    borderAlpha: 1,
                  },
                  t
                ),
                i = Object.assign({}, e, {
                  name: "fill",
                }),
                n = Object.assign({}, e, {
                  name: "border",
                  w: e.w + 2 * e.borderWidth,
                  h: e.h + 2 * e.borderWidth,
                  color: e.borderColor,
                  alpha: e.borderAlpha,
                  round: e.round + 0.5 * e.borderWidth,
                });
              return this.rectComp(n, i);
            }),
            (Graph.clear = function (t) {
              if ((t.clear && t.clear(), t.children)) for (var e in t.children) this.clear(t.children[e]);
            }),
            (Graph.resize = function (t, e, i) {
              if ((t.width && ((t.width = e), (t.height = i)), t.children)) for (var n in t.children) this.resize(t.children[n]);
            }),
            Graph
          );
        })();
  
      function ItemTimer_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function ItemTimer_createClass(t, e, i) {
        return e && ItemTimer_defineProperties(t.prototype, e), i && ItemTimer_defineProperties(t, i), t;
      }
  
      function ItemTimer_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var Se = (function (n) {
          function ItemTimer(t, e) {
            var i;
            return (
              ((i = n.call(this) || this).id = e),
              (i.game = t),
              (i.iconBase = c.Sprite.from("base_item.png")),
              i.iconBase.anchor.set(0.5),
              i.addChild(i.iconBase),
              (i.icon = c.Sprite.from("icon_item_" + e + ".png")),
              i.icon.anchor.set(0.5),
              i.addChild(i.icon),
              (i.bar = new ze(200, 30, 16777215, 10867241)),
              i.addChild(i.bar),
              (i.bar.x = i.iconBase.width / 2 + i.bar.w / 2 + 6),
              (i.base = Ce.roundRectBorder({
                w: i.bar.w + 34,
                h: i.bar.h + 16,
                round: 5,
                color: 16777215,
                alpha: 1,
                borderWidth: 3,
                borderColor: 10066329,
              })),
              i.addChildAt(i.base, 0),
              (i.base.x = i.bar.x - 4),
              (i.visible = !1),
              i
            );
          }
          ItemTimer_inheritsLoose(ItemTimer, n);
          var t = ItemTimer.prototype;
          return (
            (t.show = function () {
              this.visible || (this.visible = !0);
            }),
            (t.hide = function () {
              this.visible && ((this.visible = !1), this.parent && this.parent.removeChild(this));
            }),
            ItemTimer_createClass(ItemTimer, [
              {
                key: "w",
                get: function () {
                  return this.iconBase.width;
                },
              },
              {
                key: "h",
                get: function () {
                  return this.iconBase.height;
                },
              },
              {
                key: "ratio",
                get: function () {
                  return this.bar.ratio;
                },
                set: function (t) {
                  this.bar.ratio = t;
                },
              },
            ]),
            ItemTimer
          );
        })(c.Container),
        ze = (function (r) {
          function ProgressBar(t, e, i, n) {
            var o;
            void 0 === i && (i = 0), void 0 === n && (n = 16142336);
            var s = ((o = r.call(this) || this).w = t),
              a = (o.h = e);
            return (
              (o.barBg = new c.Graphics()),
              o.barBg.beginFill(i, 0.75),
              o.barBg.drawRect(0, 0, s, a),
              o.barBg.position.set(-s / 2, -a / 2),
              o.addChild(o.barBg),
              (o.masked = new c.Container()),
              o.addChild(o.masked),
              (s -= 8),
              (a -= 8),
              (o.barFill = new Te(s, a)),
              (o.barFill.x = -s / 2),
              o.masked.addChild(o.barFill),
              (o.barRed = new Te(s, a, 16711680)),
              (o.barRed.x = -s / 2),
              o.masked.addChild(o.barRed),
              (o.barMask = new c.Graphics()),
              o.barMask.beginFill(255),
              o.barMask.drawRect(0, 0, s, a),
              o.barMask.position.set(-s / 2, -a / 2),
              o.addChild(o.barMask),
              (o.masked.mask = o.barMask),
              (o._ratio = 1),
              o.update(),
              o
            );
          }
          return (
            ItemTimer_inheritsLoose(ProgressBar, r),
            (ProgressBar.prototype.update = function () {
              (this.barMask.scale.x = this._ratio), (this.barRed.alpha = 1 - this._ratio);
            }),
            ItemTimer_createClass(ProgressBar, [
              {
                key: "ratio",
                get: function () {
                  return this._ratio;
                },
                set: function (t) {
                  (this._ratio = V.clamp(t)), this.update();
                },
              },
            ]),
            ProgressBar
          );
        })(c.Container),
        Te = (function (r) {
          function Bar(t, e, i) {
            var n;
            ((n = r.call(this) || this).w = t), (n.h = e);
            for (var o = Math.ceil(n.w / 11), s = 0; s < o; s++) {
              var a = c.Sprite.from("item_duration_bar.png");
              n.addChild(a), (a.x = 11 * s), (a.anchor.y = 0.5), (a.width = 8), (a.height = n.h), i && (a.tint = i);
            }
            return n;
          }
          return ItemTimer_inheritsLoose(Bar, r), Bar;
        })(c.Container);
  
      function HUDSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function HUDSystem_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
  
      function HUDSystem_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var Pe = (function (n) {
          function HudSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).view = new c.Container()),
              (i.game = t.game),
              i.game.onReset.add(HUDSystem_assertThisInitialized(i)),
              i.game.onRun.add(HUDSystem_assertThisInitialized(i)),
              i.game.onPause.add(HUDSystem_assertThisInitialized(i)),
              i.game.onResume.add(HUDSystem_assertThisInitialized(i)),
              i.game.onGameover.add(HUDSystem_assertThisInitialized(i)),
              i.game.onRevive.add(HUDSystem_assertThisInitialized(i)),
              (i.countUpdate = 1),
              i
            );
          }
          HUDSystem_inheritsLoose(HudSystem, n);
          var t = HudSystem.prototype;
          return (
            (t.build = function () {
              this._built ||
                ((this._built = !0),
                (this.distance = new Me("base_long.png")),
                this.view.addChild(this.distance),
                (this.coins = new Me("base_long.png", "icon_coin_large.png")),
                this.view.addChild(this.coins),
                (this.multiplier = new Ee(this.game)),
                this.view.addChild(this.multiplier),
                (this.countdown = new c.Text("0", {
                  fill: "white",
                  align: "center",
                  fontSize: 80,
                  fontFamily: "Titan One",
                  stroke: "black",
                  strokeThickness: 5,
                })),
                this.countdown.anchor.set(0.5),
                this.view.addChild(this.countdown),
                (this.countdown.visible = !1),
                (this.timers = new c.Container()),
                this.view.addChild(this.timers),
                this.resize());
            }),
            (t.update = function (t) {
              if (this.game.state === pn.RUNNING && this._built && !(0 < this.countUpdate--)) {
                this.countUpdate = 2;
                var e = this.game.stats;
                this.distance.getText() <= e.score && this.distance.setText(e.score, 6), this.coins.setText(e.coins), (this.multiplier.text = "x" + e.multiplier), this.multiplier.update(t);
              }
            }),
            (t.reset = function () {
              (this.view.visible = !1), this.message && (this.message.text = "");
            }),
            (t.run = function () {
              this.build(), this.distance.setText(this.game.stats.score, 6), (this.view.visible = !0), this.game.stage.addChild(this.view), this.message && (this.message.text = "");
            }),
            (t.pause = function () {
              this.clearCountdown();
            }),
            (t.resume = function () {
              this.clearCountdown(), (this.view.visible = !0);
            }),
            (t.gameover = function () {
              this.view.visible = !1;
            }),
            (t.revive = function () {
              this.view.visible = !0;
            }),
            (t.resize = function (t, e, i) {
              (this.sw = t || this.sw),
                (this.sh = e || this.sh),
                (this.sr = i || this.sr),
                (this.s = this.sh / (667 * this.sr)),
                (this.w = this.sw / this.s),
                (this.h = this.sh / this.s),
                this.view.scale.set(this.s),
                this._built &&
                  ((this.distance.x = this.w - 110),
                  (this.distance.y = 60),
                  (this.coins.x = this.w - 170),
                  (this.coins.y = 160),
                  (this.countdown.x = this.w / 2),
                  (this.countdown.y = this.h / 2),
                  (this.multiplier.x = this.distance.x - 170),
                  (this.multiplier.y = this.distance.y),
                  this.message && ((this.message.x = this.w / 2), (this.message.y = 120)),
                  this.stats && ((this.stats.x = 10), (this.stats.y = 200)),
                  this.timers && ((this.timers.x = 0), (this.timers.y = this.h)));
            }),
            (t.addMessage = function (t) {
              this.message && (0 <= this.msgs.indexOf(t) || (this.msgs.push(t), (this.message.text = this.msgs.join("\n"))));
            }),
            (t.clearMessage = function (t) {
              if (this.message)
                if (void 0 !== t) {
                  var e = this.msgs.indexOf(t);
                  e < 0 || (this.msgs.splice(e, 1), (this.message.text = this.msgs.join("\n")));
                } else this.msgs.length = 0;
            }),
            (t.runCountdown = function (t, i) {
              this.clearCountdown(),
                (this.view.visible = !0),
                this.view.addChild(this.countdown),
                (this.countdown.visible = !0),
                function _runStep(t) {
                  if (0 == t) return i(), void (this.countdown.visible = !1);
                  var e = "Starting in\n" + t;
                  (this.countdown.text = e), (this.countdown.visible = !0), (this._timeout = setTimeout(_runStep.bind(this), 900, t - 1));
                }.call(this, t);
            }),
            (t.clearCountdown = function () {
              this._timeout && clearTimeout(this._timeout), this.countdown && (this.countdown.visible = !1);
            }),
            (t.addItemTimer = function (t) {
              this.timers[t] || (this.timers[t] = new Se(this.game, t));
              var e = this.timers[t];
              return this.timers.addChild(e), e.show(), this.organizeTimers(), e;
            }),
            (t.removeItemTimer = function (t) {
              var e = this.timers[t];
              e && (e.hide(), this.organizeTimers());
            }),
            (t.updateItemTimer = function (t, e) {
              var i = this.timers[t];
              i && (i.ratio = e);
            }),
            (t.organizeTimers = function () {
              for (var t = this.timers.children.length; t--; ) {
                var e = this.timers.children[t];
                (e.x = e.w / 2 + 20), (e.y = -t * (e.h + 20) - e.h / 2 - 20);
              }
              (this.timers.x = 0), (this.timers.y = this.h);
            }),
            HudSystem
          );
        })(f.a),
        Me = (function (s) {
          function Label(t, e) {
            var i;
            ((i = s.call(this) || this).numChars = 6),
              (i.spacing = 30),
              (i._txt = -1),
              t && ((i.base = c.Sprite.from(t)), i.base.anchor.set(0, 0.5), (i.base.alpha = 0.5), i.addChild(i.base)),
              e && ((i.icon = c.Sprite.from(e)), i.icon.anchor.set(0.5), i.addChild(i.icon), (i.icon.x = i.numChars * i.spacing * 0.5 + 35), i.icon.scale.set(0.75)),
              (i.text = new c.Container()),
              i.addChild(i.text);
            for (var n = 0; n < i.numChars; n++) {
              var o = new c.Text("0", {
                fill: "white",
                align: "center",
                fontSize: 50,
                fontFamily: "Lilita One",
              });
              o.anchor.set(0.5), i.text.addChild(o);
            }
            return i;
          }
          HUDSystem_inheritsLoose(Label, s);
          var t = Label.prototype;
          return (
            (t.setText = function (t, e) {
              if (t !== this._txt) {
                for (var i = (this._txt = t) + "", n = e || i.length; i.length < this.numChars; ) {
                  i = (i.length < e ? "0" : " ") + i;
                }
                for (var o = this.numChars; o--; ) {
                  var s = this.text.children[o],
                    a = i[o];
                  o < i.length && (s.text = a), (s.visible = " " !== a), (s.x = o * this.spacing);
                }
                (this.text.x = -(this.numChars - 1) * this.spacing * 0.5), (this.base.x = this.numChars * this.spacing * 0.5 - n * this.spacing - 20);
              }
            }),
            (t.getText = function () {
              return this._txt;
            }),
            Label
          );
        })(c.Container),
        Ee = (function (s) {
          function MultiplierLabel(t) {
            var e;
            (e = s.call(this) || this).game = t;
            var i = c.Sprite.from("base_short.png");
            i.anchor.set(0.5), (i.alpha = 0.5), (e.base = i), e.addChild(i);
            var n = new c.Text("0", {
              align: "center",
              fill: 16702212,
              fontSize: 50,
              fontFamily: "Lilita One",
            });
            n.anchor.set(0.5), e.addChild(n), (e.label = n);
            var o = new c.Text("0", {
              align: "center",
              fill: 7829367,
              fontSize: 50,
              fontFamily: "Lilita One",
            });
            return o.anchor.set(0.5), e.addChild(o), (e.labelOverlay = o), e;
          }
          var t, e, i;
          return (
            HUDSystem_inheritsLoose(MultiplierLabel, s),
            (MultiplierLabel.prototype.update = function (t) {
              var e = this.game.hero.multiplier.isOn();
              this.labelOverlay.alpha = e ? 0.5 + 0.4 * Math.sin(0.1 * this.game.time) : 0;
            }),
            (t = MultiplierLabel),
            (e = [
              {
                key: "text",
                get: function () {
                  return this.label.text;
                },
                set: function (t) {
                  this.label.text !== t && ((this.label.text = t), (this.labelOverlay.text = t));
                },
              },
            ]) && HUDSystem_defineProperties(t.prototype, e),
            i && HUDSystem_defineProperties(t, i),
            MultiplierLabel
          );
        })(c.Container);
  
      function StatsSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Oe = {
          x: 0,
          y: 0,
          z: 0,
          distance: 0,
          distanceDelta: 0,
          score: 0,
          coins: 0,
          keys: 0,
          chunkIndex: 0,
          chunkName: "",
          chunkStart: 0,
          chunkEnd: 0,
          chunkLength: 0,
          block: 0,
          hoverboards: 1,
          revivals: 1,
          multiplier: 1,
          route: "",
          time: 0,
          delta: 0,
        },
        Re = (function (n) {
          var t, e;
  
          function StatsSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              (i = n.call(this, t, e) || this),
              t.game.onReset.add(
                (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(i)
              ),
              (i.game = t.game),
              (i.data = {}),
              i.reset(),
              i
            );
          }
          (e = n), ((t = StatsSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i,
            o,
            s,
            a = StatsSystem.prototype;
          return (
            (a.reset = function () {
              Object.assign(this.data, Oe), (this.data.revivals = this.game.app.config.revivals || B.revivals || 0);
            }),
            (a.preupdate = function () {
              (this.x = this.game.hero.transform.position.x), (this.y = this.game.hero.transform.position.y - 5.5), (this.z = this.game.hero.transform.position.z);
            }),
            (a.setCurrentChunk = function (t) {
              (this.data.chunkName = t.name), (this.data.chunkStart = t.start), (this.data.chunkEnd = t.end), (this.data.chunkLength = t.length);
            }),
            (a.toString = function () {
              var t = ["level", "route", "chunk"],
                e = "";
              for (var i in t) {
                var n = t[i];
                "z" !== n && "distance" !== n && "distanceDelta" !== n && (e += n + ": " + this[n] + "\n");
              }
              return e;
            }),
            (i = StatsSystem),
            (o = [
              {
                key: "multiplier",
                get: function () {
                  return this.data.multiplier;
                },
                set: function (t) {
                  this.data.multiplier = t;
                },
              },
              {
                key: "x",
                get: function () {
                  return this.data.x;
                },
                set: function (t) {
                  this.data.x = t;
                },
              },
              {
                key: "y",
                get: function () {
                  return this.data.y;
                },
                set: function (t) {
                  this.data.y = t;
                },
              },
              {
                key: "z",
                get: function () {
                  return this.data.z;
                },
                set: function (t) {
                  (this.data.z = t),
                    (this.data.distanceDelta = -t - this.data.distance),
                    (this.data.distance = -t),
                    (this.data.block = (this.data.distance / B.blockSize) | 0),
                    (this.data.score += this.data.distanceDelta * this.data.multiplier);
                },
              },
              {
                key: "distance",
                get: function () {
                  return this.data.distance;
                },
                set: function (t) {
                  (this.data.z = -t),
                    (this.data.distanceDelta = t - this.data.distance),
                    (this.data.distance = t),
                    (this.data.block = (this.data.distance / B.blockSize) | 0),
                    (this.data.score += this.data.distanceDelta * this.data.multiplier);
                },
              },
              {
                key: "distanceDelta",
                get: function () {
                  return this.data.distanceDelta;
                },
              },
              {
                key: "score",
                get: function () {
                  return Math.floor(0.1 * this.data.score);
                },
              },
              {
                key: "coins",
                get: function () {
                  return this.data.coins;
                },
                set: function (t) {
                  this.data.coins = t;
                },
              },
              {
                key: "keys",
                get: function () {
                  return this.data.keys;
                },
                set: function (t) {
                  this.data.keys = t;
                },
              },
              {
                key: "chunkIndex",
                get: function () {
                  return this.data.chunkIndex;
                },
                set: function (t) {
                  this.data.chunkIndex = t;
                },
              },
              {
                key: "hoverboards",
                get: function () {
                  return this.data.hoverboards;
                },
                set: function (t) {
                  this.data.hoverboards = t;
                },
              },
              {
                key: "speed",
                get: function () {
                  if (B.speed) return B.speed;
                  var t = this.data.time,
                    e = 240;
                  t < 180 && (e = 110 + 130 * (t / 180));
                  return e / 60;
                },
              },
              {
                key: "level",
                get: function () {
                  return Math.floor(this.data.time / 20);
                },
              },
              {
                key: "levelName",
                get: function () {
                  switch (this.level) {
                    case 0:
                      return "easy";
                    case 1:
                      return "normal";
                    case 2:
                      return "hard";
                    default:
                      return "expert";
                  }
                },
              },
              {
                key: "time",
                get: function () {
                  return this.data.time;
                },
                set: function (t) {
                  this.data.time = t;
                },
              },
              {
                key: "delta",
                get: function () {
                  return this.data.delta;
                },
                set: function (t) {
                  this.data.delta = t;
                },
              },
              {
                key: "route",
                set: function (t) {
                  this.data.route = t;
                },
                get: function () {
                  return this.data.route;
                },
              },
              {
                key: "chunk",
                get: function () {
                  return this.data.chunkName;
                },
              },
              {
                key: "revivals",
                get: function () {
                  return this.data.revivals;
                },
                set: function (t) {
                  this.data.revivals = t;
                },
              },
              {
                key: "profile",
                get: function () {
                  return this._profile || (this._profile = {}), Object.assign(this._profile, this.data), (this._profile.speed = this.speed), (this._profile.level = this.level), (this._profile.levelName = this.levelName), this._profile;
                },
              },
            ]) && StatsSystem_defineProperties(i.prototype, o),
            s && StatsSystem_defineProperties(i, s),
            StatsSystem
          );
        })(f.a);
  
      function PoolSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Ie = (function (n) {
          var t, e;
  
          function PoolSystem(t, e) {
            var i;
            return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).toRemove = []), i;
          }
          (e = n), ((t = PoolSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = PoolSystem.prototype;
          return (
            (i.prepopulate = function (t, e) {
              Le.getPool(t).prepopulate(e);
            }),
            (i.get = function (t, e) {
              var i = Le.get(t);
              return i.onEntityDestroyed.add(this), i._init.run(e || {}), i;
            }),
            (i.factory = function (t, e) {
              var i = Le.get(_class);
              return i.onEntityDestroyed.add(this), i._init.run(data || {}), i;
            }),
            (i.entityDestroyed = function (t) {
              var e = this;
              t.onEntityDestroyed.remove(this),
                setTimeout(function () {
                  e["return"](t);
                }, 200);
            }),
            (i["return"] = function (t) {
              t._reset.run(), t.resetSignals(), this.toRemove.push(t);
            }),
            (i.postupdate = function () {
              for (var t = 0; t < this.toRemove.length; t++) {
                var e = this.toRemove[t];
                Le["return"](e);
              }
              this.toRemove.length = 0;
            }),
            (i.empty = function () {
              this.postupdate();
            }),
            PoolSystem
          );
        })(f.a),
        Le = (function () {
          function Pool(t) {
            t instanceof Object
              ? (this._create = function () {
                  return new t();
                })
              : (this._create = function () {
                  return t();
                }),
              (this.classType = t),
              (this.pool = []),
              (this.totalCreated = 0),
              (this.debug = !1);
          }
          var t,
            e,
            i,
            n = Pool.prototype;
          return (
            (n.prepopulate = function (t) {
              for (var e = 0; e < t; e++) this.pool.push(this._create());
            }),
            (n.get = function () {
              var t = this.pool.pop();
              return t || (this.totalCreated++, this.debug, (t = this._create())), t;
            }),
            (n["return"] = function (t) {
              -1 === this.pool.indexOf(t) && this.pool.push(t), this.debug;
            }),
            (Pool.getPool = function (t) {
              var e = this.getClassId(t);
              return Pool.pools[e] || (Pool.pools[e] = new Pool(t)), Pool.pools[e];
            }),
            (Pool.get = function (t) {
              var e = this.getPool(t).get();
              return (e._CLASS_ID = this.getClassId(t)), e;
            }),
            (Pool["return"] = function (t) {
              Pool.pools[t._CLASS_ID]["return"](t);
            }),
            (Pool.getClassId = function (t) {
              return t._CLASS_ID || (t._CLASS_ID = Pool.idGenerator++), t._CLASS_ID;
            }),
            (t = Pool),
            (e = [
              {
                key: "total",
                get: function () {
                  return this.pool.length;
                },
              },
            ]) && PoolSystem_defineProperties(t.prototype, e),
            i && PoolSystem_defineProperties(t, i),
            Pool
          );
        })();
      (Le.pools = []), (Le.idGenerator = 1);
      var je = i(94);
  
      function ControllerSystem_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var Fe = (function (n) {
        var t, e;
  
        function ControllerSystem(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).keyboard = new je.a()),
            i.keyboard.onKeyPress("left", i.pressLeft.bind(ControllerSystem_assertThisInitialized(i))),
            i.keyboard.onKeyPress("up", i.pressUp.bind(ControllerSystem_assertThisInitialized(i))),
            i.keyboard.onKeyPress("right", i.pressRight.bind(ControllerSystem_assertThisInitialized(i))),
            i.keyboard.onKeyPress("down", i.pressDown.bind(ControllerSystem_assertThisInitialized(i))),
            i.keyboard.onKeyPress("space", i.pressAction.bind(ControllerSystem_assertThisInitialized(i))),
            (i.view = new c.Graphics()),
            (i.view.alpha = 0),
            i.view.beginFill(16763904),
            i.view.drawRect(0, 0, 4, 4),
            i.view.endFill(),
            i.view.addListener("pointerdown", i.onPointerDown, ControllerSystem_assertThisInitialized(i)),
            i.view.addListener("pointermove", i.onPointerMove, ControllerSystem_assertThisInitialized(i)),
            i.view.addListener("pointerup", i.onPointerUp, ControllerSystem_assertThisInitialized(i)),
            t.game.onReset.add(ControllerSystem_assertThisInitialized(i)),
            t.game.onRun.add(ControllerSystem_assertThisInitialized(i)),
            t.game.onPause.add(ControllerSystem_assertThisInitialized(i)),
            t.game.onResume.add(ControllerSystem_assertThisInitialized(i)),
            t.game.onGameover.add(ControllerSystem_assertThisInitialized(i)),
            t.game.onRevive.add(ControllerSystem_assertThisInitialized(i)),
            (i.vertical = 0),
            (i.horizontal = 0),
            (i.action = 0),
            (i.pressing = !1),
            (i.pressStartX = 0),
            (i.pressStartY = 0),
            (i.pressCount = 0),
            (i.onSwipeHorizontal = new et.a("onSwipeHorizontal", 1)),
            (i.onSwipeVertical = new et.a("onSwipeVertical", 1)),
            (i.onDoubleTap = new et.a("onDoubleTap")),
            i
          );
        }
        (e = n), ((t = ControllerSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = ControllerSystem.prototype;
        return (
          (i.onPointerDown = function (t) {
            var e = t.data.global;
            0 < this.pressCount && (this.action = 1), (this.pressCount = 50), (this.pressStartX = e.x), (this.pressStartY = e.y), (this.pressing = !0);
          }),
          (i.onPointerMove = function (t) {
            if (this.pressing) {
              var e = t.data.global,
                i = e.x - this.pressStartX;
              if (60 < Math.abs(i)) return (this.pressing = !1), (this.pressCount = 0), void (this.horizontal = V.sign(i));
              var n = e.y - this.pressStartY;
              return 60 < Math.abs(n) ? ((this.pressing = !1), (this.pressCount = 0), void (this.vertical = -V.sign(n))) : void 0;
            }
          }),
          (i.onPointerUp = function (t) {
            this.pressing = !1;
          }),
          (i.onPointerCancel = function (t) {
            this.pressing = !1;
          }),
          (i.pressUp = function () {
            this.vertical = 1;
          }),
          (i.pressDown = function () {
            this.vertical = -1;
          }),
          (i.pressLeft = function () {
            this.horizontal = -1;
          }),
          (i.pressRight = function () {
            this.horizontal = 1;
          }),
          (i.pressAction = function () {
            this.action = 1;
          }),
          (i.update = function () {
            0 < this.pressCount && (this.pressCount -= 1),
              this.game.state === pn.RUNNING &&
                (1 === this.vertical
                  ? this.onSwipeVertical.dispatch(this.vertical)
                  : -1 === this.vertical
                  ? this.onSwipeVertical.dispatch(this.vertical)
                  : this.horizontal
                  ? this.onSwipeHorizontal.dispatch(this.horizontal)
                  : this.action && this.onDoubleTap.dispatch(),
                (this.vertical = 0),
                (this.horizontal = 0),
                (this.action = 0));
          }),
          (i.reset = function () {
            this.hide();
          }),
          (i.show = function () {
            (this.view.visible = !0), (this.view.interactive = !0), this.view.visible && this.game.stage.addChild(this.view), this.keyboard.start();
          }),
          (i.hide = function () {
            (this.view.visible = !1), (this.view.interactive = !1), this.keyboard.stop();
          }),
          (i.run = function () {
            this.show();
          }),
          (i.revive = function () {
            this.show();
          }),
          (i.pause = function () {
            this.hide();
          }),
          (i.resume = function () {
            this.show();
          }),
          (i.gameover = function () {
            this.hide();
          }),
          (i.resize = function (t, e) {
            (this.view.x = 0), (this.view.y = 0), (this.view.width = t), (this.view.height = e);
          }),
          ControllerSystem
        );
      })(f.a);
  
      function FreeCamera_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var Ae = (function (n) {
          var t, e;
  
          function FreeCamera(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).axis = new q()),
              (i.keyboard = new je.a()),
              (i.keyboard._keyCodes[81] = {
                label: "q",
                state: 0,
                preventBubble: !0,
              }),
              (i.keyboard._keyCodes[69] = {
                label: "e",
                state: 0,
                preventBubble: !0,
              }),
              i.keyboard.onKeyPress("a", i.pressLeft.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyPress("d", i.pressRight.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyPress("w", i.pressFront.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyPress("s", i.pressBack.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyPress("q", i.pressUp.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyPress("e", i.pressDown.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyRelease("a", i.releaseLeft.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyRelease("d", i.releaseRight.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyRelease("w", i.releaseFront.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyRelease("s", i.releaseBack.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyRelease("q", i.releaseUp.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.onKeyRelease("e", i.releaseDown.bind(FreeCamera_assertThisInitialized(i))),
              i.keyboard.stop(),
              (i.onMouseMoveBind = i.onMouseMove.bind(FreeCamera_assertThisInitialized(i))),
              (i.useDelta = !0),
              i
            );
          }
          (e = n), ((t = FreeCamera).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = FreeCamera.prototype;
          return (
            (i.added = function () {
              (this._oldParent = this.entity.parent),
                this.entity.parent && this.entity.parent.removeChild(this.entity),
                (this._rig = this.entity.game.view3d.camera.camera),
                (this._rig.x = this.entity.game.camera.rig.mainX),
                (this._rig.y = this.entity.game.camera.rig.mainY),
                (this._rig.z = this.entity.game.camera.rig.mainZ),
                (this._rig.rx = this.entity.game.camera.rig.mainRotX),
                (this._rig.ry = this.entity.game.camera.rig.mainRotY),
                this.keyboard.start(),
                (this.mouseX = 0),
                (this.mouseY = 0),
                (this.lastMouseX = null),
                (this.lastMouseY = null),
                (this.deltaX = 0),
                (this.deltaY = 0),
                (this.speed = 0),
                this.axis.reset(),
                (this._updateProjection = this.entity.camera.updateProjection),
                (this.entity.camera.updateProjection = FreeCamera_updateProjection),
                window.addEventListener("mousemove", this.onMouseMoveBind);
            }),
            (i.removed = function () {
              this._oldParent && this._oldParent.addChild(this.entity), (this.entity.camera.updateProjection = this._updateProjection), this.keyboard.stop(), window.removeEventListener("mousemove", this.onMouseMoveBind), (this._rig = null);
            }),
            (i.onMouseMove = function (t) {
              (this.mouseX = t.clientX - window.innerWidth / 2), (this.mouseY = t.clientY - window.innerHeight / 2), null === this.lastMouseX && (this.lastMouseX = this.mouseX), null === this.lastMouseY && (this.lastMouseY = this.mouseY);
            }),
            (i.update = function () {
              if (this._rig) {
                null !== this.lastMouseX && ((this.deltaX = this.mouseX - this.lastMouseX), (this.deltaY = this.mouseY - this.lastMouseY), (this.lastMouseX = this.mouseX), (this.lastMouseY = this.mouseY)),
                  0 !== this.axis.z || 0 !== this.axis.x ? ((this.speed += 0.02), 5 < this.speed && (this.speed = 5)) : (this.speed = 0.5);
                this.useDelta ? ((this._rig.ry -= 0.01 * this.deltaX), (this._rig.rx -= 0.01 * this.deltaY)) : ((this._rig.ry = 0.01 * -this.mouseX), (this._rig.rx = 0.01 * -this.mouseY)),
                  (this._rig.z += Math.cos(this._rig.ry) * (this.axis.z * this.speed)),
                  (this._rig.x += Math.sin(this._rig.ry) * (this.axis.z * this.speed)),
                  (this._rig.z += Math.cos(this._rig.ry + V.PI_HALF) * (this.axis.x * this.speed)),
                  (this._rig.x += Math.sin(this._rig.ry + V.PI_HALF) * (this.axis.x * this.speed)),
                  (this._rig.y -= Math.sin(this._rig.rx) * (this.axis.z * this.speed)),
                  (this._rig.y += Math.sin(this._rig.rx + V.PI_HALF) * (this.axis.y * this.speed));
              }
            }),
            (i.pressFront = function () {
              this.axis.z = -1;
            }),
            (i.pressBack = function () {
              this.axis.z = 1;
            }),
            (i.pressLeft = function () {
              this.axis.x = -1;
            }),
            (i.pressRight = function () {
              this.axis.x = 1;
            }),
            (i.pressUp = function () {
              this.axis.y = 1;
            }),
            (i.pressDown = function () {
              this.axis.y = -1;
            }),
            (i.releaseFront = function () {
              -1 === this.axis.z && (this.axis.z = 0);
            }),
            (i.releaseBack = function () {
              1 === this.axis.z && (this.axis.z = 0);
            }),
            (i.releaseLeft = function () {
              -1 === this.axis.x && (this.axis.x = 0);
            }),
            (i.releaseRight = function () {
              1 === this.axis.x && (this.axis.x = 0);
            }),
            (i.releaseUp = function () {
              1 === this.axis.y && (this.axis.y = 0);
            }),
            (i.releaseDown = function () {
              -1 === this.axis.y && (this.axis.y = 0);
            }),
            FreeCamera
          );
        })(J.a),
        De = U.quat.create(),
        Ge = U.vec3.create();
  
      function FreeCamera_updateProjection(t, e) {
        void 0 === this.x && (this.x = 0),
          void 0 === this.y && (this.y = 0),
          void 0 === this.z && (this.z = 0),
          void 0 === this.rx && (this.rx = 0),
          void 0 === this.ry && (this.ry = 0),
          void 0 === this.rz && (this.rz = 0),
          U.quat.identity(De),
          U.quat.rotateZ(De, De, this.rz),
          U.quat.rotateY(De, De, this.ry),
          U.quat.rotateX(De, De, this.rx),
          (Ge[0] = this.x),
          (Ge[1] = this.y),
          (Ge[2] = this.z),
          U.mat4.fromRotationTranslation(this.view, De, Ge),
          U.mat4.perspective(this.projection, this.fov * (Math.PI / 180), t / e, this.near, this.far),
          U.mat4.invert(this.view, this.view),
          this.dirty++;
      }
  
      function DebugSystem_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var Be = (function (n) {
        var t, e;
  
        function DebugSystem(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).game = t.game),
            i.game.onReset.add(DebugSystem_assertThisInitialized(i)),
            (i.running = !1),
            window.addEventListener("keydown", i.onKeyDown.bind(DebugSystem_assertThisInitialized(i))),
            (i.view = new c.Container()),
            (i.title = new c.Text("DEBUG MODE", {
              fill: "red",
              align: "center",
              fontSize: 18,
              fontFamily: "Arial Black",
            })),
            i.view.addChild(i.title),
            i.title.anchor.set(0.5),
            (i.title.y = 12),
            (i.stats = new c.Text("", {
              fill: "white",
              fontSize: 18,
              fontFamily: "Arial",
              stroke: !0,
              strokeThickness: 4,
              lineJoin: "round",
            })),
            i.view.addChild(i.stats),
            (i.stats.x = 10),
            (i.stats.y = 200),
            (i.view.visible = B.debug),
            setInterval(function () {
              return i._update(0);
            }, 100),
            i
          );
        }
        (e = n), ((t = DebugSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = DebugSystem.prototype;
        return (
          (i.reset = function () {
            this.game.stage.addChild(this.view);
          }),
          (i._update = function (t) {
            if (this.game && !this.game.app.crashed) {
              var e = [
                DebugSystem_str("ENGINE", this.game.profile),
                DebugSystem_str("STATS", this.game.stats.profile),
                DebugSystem_str("CAMERA", this.game.camera.profile),
                DebugSystem_str("PHYSICS", this.game.physics.stats),
                DebugSystem_str("ROUTE", this.game.route.profile),
              ];
              (this.stats.text = e.join("\n")), (this.title.x = this.game.w / 2);
            }
          }),
          (i.onKeyDown = function (t) {
            "z" === t.key && this.toggle(),
              this.running ||
                ("t" === t.key && this.game.level.reshuffle(),
                "m" === t.key && this.game.hero.magnet.turnOn(),
                "j" === t.key && this.game.hero.jetpack.turnOn(),
                "q" === t.key && this.game.hero.pogo.turnOn(),
                "s" === t.key && this.game.hero.sneakers.turnOn(),
                "e" === t.key && this.game.hero.multiplier.turnOn());
          }),
          (i.toggle = function () {
            this.running ? this.finish() : this.begin();
          }),
          (i.begin = function () {
            this.running || ((this.running = !0), (this.game.timeScale = 0), this.game.view3d.camera.add(Ae));
          }),
          (i.finish = function () {
            this.running && ((this.running = !1), this.game.view3d.camera.remove(Ae), (this.game.timeScale = this.game.config.timeScale));
          }),
          (i.resize = function (t, e) {}),
          DebugSystem
        );
      })(f.a);
  
      function DebugSystem_str(t, e, i) {
        i || (i = Object.keys(e));
        var n = "";
        for (var o in i) {
          var s = i[o],
            a = e[s];
          "number" == typeof a && a % 1 != 0 && (a = a.toFixed(3)), (n += s + ": " + a + "\n");
        }
        return t.toUpperCase() + "\n" + n;
      }
      var Ne = (function (n) {
        var t, e;
  
        function FramebufferSystem(t) {
          var e;
          (e = n.call(this, t) || this).renderer = t;
          var i = c.utils.hex2rgb(9753343);
          return (e.r = i[0]), (e.g = i[1]), (e.b = i[2]), (e.a = 1), e;
        }
        return (
          (e = n),
          ((t = FramebufferSystem).prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e),
          (FramebufferSystem.prototype.prerender = function () {
            var t = this.renderer.gl;
            t.clearColor(this.r, this.g, this.b, this.a), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
          }),
          FramebufferSystem
        );
      })(c.System);
      var Xe = (function (n) {
        var t, e;
  
        function Smoke(t, e) {
          var i;
          return (
            void 0 === t && (t = 5),
            void 0 === e && (e = !0),
            ((i = n.call(this) || this).speed = t),
            (i.view = i.getView(e)),
            (i.view2 = i.getView(e)),
            (i.view2.y = -73),
            (i.view2.scale.x = 1),
            (i.view2.scale.y = 2),
            (i.view2.scale.z = 2),
            i
          );
        }
        (e = n), ((t = Smoke).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Smoke.prototype;
        return (
          (i.getView = function (t) {
            var e = H.getEntityClone("jetpackCloud", "jetpackSmoke", !1, G);
            return (
              (e.view3d.state.blend = !0),
              (e.view3d.state.culling = !1),
              (e.view3d.material.map.baseTexture.wrapMode = c.WRAP_MODES.REPEAT),
              this.addChild(e),
              (e.ry = 0.5 * -Math.PI),
              (e.rx = 0.5 * Math.PI),
              e.scale.set(0.25),
              (e.y = -12),
              (e.active = !1),
              (e.view3d.state.depthTest = t),
              e
            );
          }),
          (i.update = function (t) {
            this.view.active && ((this.view.view3d.material.map.orig.x -= t * this.speed), (this.view2.view3d.material.map.orig.x -= t * this.speed));
          }),
          (i.turnOn = function () {
            (this.view.active = !0), (this.view2.active = !0);
          }),
          (i.turnOff = function () {
            var t = this;
            (this.view.active = !1),
              (this.view2.active = !1),
              this.parent && this.parent.removeChild(this),
              setTimeout(function () {
                (t.view.active = !1), (t.view2.active = !1), t.parent && t.parent.removeChild(t);
              }, 100);
          }),
          Smoke
        );
      })(v.a);
  
      function Jetpack_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Ye = (function (n) {
        var t, e;
  
        function Jetpack(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).distance = 0), (i.distanceTotal = 1), (i.speed = 0), (i.ceiling = 100), (i.coinDistance = 30), i;
        }
        (e = n), ((t = Jetpack).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Jetpack.prototype;
        return (
          (a.show = function () {
            this.view || (this.view = H.getEntityCloneOpaque("/powerups_jetpack", "props_tex", !1)), (this.view.ry = Math.PI), (this.view.y = 1), (this.view.z = 0.5), this.view.scale.set(0.6);
            var t = this.entity.anim.scenes[2];
            H.findEntity("LowerSpine_jnt", t.pixiTree, 10).addChild(this.view),
              this.entity.game.sfx.play("special_jetpack_start"),
              this.entity.game.sfx.play("special_jetpack", {
                loop: !0,
              }),
              this.entity.game.hud.addItemTimer("jetpack"),
              this.jetpackSmokeOn();
          }),
          (a.hide = function () {
            this.entity.game.hud.removeItemTimer("jetpack"), this.jetpackSmokeOff(), this.entity.game.sfx.stop("special_jetpack"), this.view.parent && this.view.parent.removeChild(this.view);
          }),
          (a.update = function (t) {
            if (this.distance) {
              this.timer && (this.timer.ratio = this.ratio);
              var e = V.lerp(this.entity.body.velocity.z, this.speed, 0.1 * t);
              (this.entity.body.velocity.z = e), (this.distance -= this.entity.game.stats.distanceDelta), this.entity.game.hud.updateItemTimer("jetpack", this.ratio);
              var i = this.entity.game.stats.y + B.cameraPosY,
                n = this.entity.game.stats.z + B.cameraPosZ;
              if (((this.entity.game.hero.player.cameraY = i), this.takeOffTime < this.takeOffDuration)) {
                (this.takeOffTime += this.entity.game.deltaSecs), this.takeOffTime > this.takeOffDuration && (this.takeOffTime = this.takeOffDuration);
                var o = this.takeOffTime / this.takeOffDuration;
                St.quartInOut(o);
                (this.entity.body.y = V.lerp(this.takeOffStartY, this.takeOffEndY, o)), (this.rig.mainY = V.lerp(this.rigStartY, i, St.sineOut(o))), (this.rig.mainZ = V.lerp(this.rigStartZ, n, St.expoOut(o)));
              } else (this.rig.mainY = i), (this.rig.mainZ = n);
              (this.rig.mainX = this.entity.game.stats.x * B.cameraModX),
                (this.rig.mainRotX = B.cameraRotX + this.entity.game.hero.player.cameraRotX),
                (this.entity.player.cameraTargetY = this.entity.body.bottom),
                this.smokeLeft && this.smokeLeft.update(t),
                this.smokeRight && this.smokeRight.update(t),
                this.distance <= 0 && this.turnOff();
            }
          }),
          (a.turnOn = function () {
            this.entity.player.dizzyEnd(),
              this.entity.sneakers.turnOff(),
              this.entity.pogo.turnOff(),
              this.entity.hoverboard.pause(),
              this.entity.jump.lock(),
              this.entity.roll.lock(),
              this.entity.state.set("empty"),
              (this.entity.body.velocity.y = 0),
              (this.entity.body.ghost = !0),
              (this.speed = 2 * -this.entity.game.stats.speed - 1);
            var t = -this.entity.body.z,
              e = t + 1e3 + 200 * Math.abs(this.speed),
              i = this.entity.game.level.setSafeLanding(e);
            (this.distanceTotal = i - t),
              (this.distance = this.distanceTotal),
              (this.takeOffStartY = this.entity.body.y),
              (this.takeOffEndY = 100),
              (this.takeOffTime = 0),
              (this.takeOffDuration = 2),
              (this.rig = this.entity.game.camera.takeControl()),
              (this.rigStartY = this.rig.mainY),
              (this.rigStartZ = this.rig.mainZ),
              this.spawnCoins(this.entity.game, this.takeOffEndY, this.distance),
              this.show();
          }),
          (a.turnOff = function () {
            this.distance &&
              (this.hide(),
              (this.entity.body.ghost = !1),
              (this.entity.body.ceiling = 999),
              (this.entity.body.velocity.y = 0),
              this.entity.jump.unlock(),
              this.entity.roll.unlock(),
              this.entity.game.camera.releaseControl(),
              (this.distance = 0),
              this.entity.restoreSize(),
              this.entity.hoverboard.resume());
          }),
          (a.isOn = function () {
            return !!this.distance;
          }),
          (a.spawnCoins = function (t, e, i) {
            for (var n = 350 * t.stats.speed, o = i - n, s = o / this.coinDistance, a = o / s, r = 0, h = 0, d = 5, l = 0; l < s; l++) {
              var c = t.pool.get(pt);
              d ? (d -= 1) : ((r = r ? L.pick(0, r) : L.pick(-1, 0, 1)), (d = 5)), h < r ? (h += 0.5) : r < h && (h -= 0.5), (c.body.x = B.laneWidth * h), (c.body.y = e), (c.body.z = t.stats.z - a * l - n), c.init(), t.addChild(c);
            }
          }),
          (a.jetpackSmokeOn = function () {
            this.smokeLeft ||
              ((this.smokeLeft = new Xe(3, !0)),
              (this.smokeLeft.x = 0.9 + this.entity.model.x),
              (this.smokeLeft.y = 1.7),
              (this.smokeLeft.z = 0.5),
              (this.smokeLeft.scale.x = 0.5),
              (this.smokeLeft.scale.y = 2),
              (this.smokeLeft.rotation.x = -V.PI_HALF),
              (this.smokeRight = new Xe(3, !0)),
              (this.smokeRight.x = -0.9 + this.entity.model.x),
              (this.smokeRight.y = this.smokeLeft.y),
              (this.smokeRight.z = this.smokeLeft.z),
              (this.smokeRight.scale.x = -this.smokeLeft.scale.x),
              (this.smokeRight.scale.y = this.smokeLeft.scale.y),
              (this.smokeRight.rotation.x = this.smokeLeft.rotation.x)),
              this.entity.addChild(this.smokeLeft),
              this.entity.addChild(this.smokeRight),
              this.smokeLeft.turnOn(),
              this.smokeRight.turnOn();
          }),
          (a.jetpackSmokeOff = function () {
            this.smokeLeft && (this.smokeLeft.turnOff(), this.smokeRight.turnOff());
          }),
          (i = Jetpack),
          (o = [
            {
              key: "ratio",
              get: function () {
                return this.distance / this.distanceTotal;
              },
            },
          ]) && Jetpack_defineProperties(i.prototype, o),
          s && Jetpack_defineProperties(i, s),
          Jetpack
        );
      })(J.a);
      var He = (function (n) {
        var t, e;
  
        function Pogo(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, t, e) || this).count = 0),
            (i.onTurnOn = new et.a("onPogoTurnOn")),
            (i.onTurnOff = new et.a("onPogoTurnOff")),
            (i.onHangtime = new et.a("onPogoHangtime")),
            (i.settings = {
              jumpHeight: 150,
              jumpDistance: 300,
              characterChangeTrackLength: 60,
              finalJumpSpeed: 0,
              rows: 14,
              startRowPosition: 1,
              endRowPosition: 1,
              fadeInPosition: 0.1,
              hangtimePosition: 0.6,
              smoothCameraXDuration: 0.05,
            }),
            i
          );
        }
        (e = n), ((t = Pogo).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Pogo.prototype;
        return (
          (i.show = function () {
            this.view || (this.view = H.getEntityCloneOpaque("/powerups_rocketPogo", "props_tex", !1));
            var t = this.entity.anim.scenes[4];
            H.findEntity("attachPoint1", t.pixiTree, 10).addChild(this.view), this.pogoSmokeOn();
          }),
          (i.hide = function () {
            this.pogoSmokeOff(), this.view.parent && this.view.parent.removeChild(this.view);
          }),
          (i.turnOn = function () {
            this.show(),
              (this.hangtime = !1),
              this.entity.sneakers.turnOff(),
              this.entity.jetpack.turnOff(),
              this.entity.player.dizzyEnd(),
              this.entity.hoverboard.pause(),
              this.entity.roll.cancel(),
              this.onTurnOn.dispatch(),
              this.entity.jump.lock(),
              (this.camera = this.entity.game.camera.takeControl()),
              (this.entity.body.ghost = !0),
              this.entity.anim.play(["pogostick_kicking"], {
                loop: !1,
              }),
              (this.position = this.entity.body.center.clone()),
              (this.positionEnd = this.position.z - this.settings.jumpDistance),
              (this.count = 1),
              this.spawnCoins(this.entity.game, this.entity.game.hero.body),
              (this.cameraStartY = this.camera.mainY),
              this.entity.roll.onStart.add(this);
          }),
          (i.update = function (t) {
            if (this.count) {
              var e = this.entity.body.z,
                i = this.entity.game.stats.speed;
              if (e > this.positionEnd) {
                var n = e - i * t,
                  o = -(n - this.position.z) / this.settings.jumpDistance,
                  s = (this.jumpCurveEvaluate(o), this.settings.jumpHeight, this.position.y + 1 * this.jumpCurveEvaluate(o) * this.settings.jumpHeight);
                (s = V.lerp(this.position.y, s, o / this.settings.fadeInPosition)),
                  (this.entity.body.bottom = s),
                  o > this.settings.hangtimePosition &&
                    !this.hangtime &&
                    ((this.hangtime = !0),
                    this.onHangtime.dispatch(),
                    this.pogoSmokeOff(),
                    this.entity.anim.play(["pogostick_Hangtime_flying", "pogostick_Hangtime_kick", "pogostick_Hangtime_front_flip1"], {
                      loop: !1,
                    }));
                var a = 0.8 * St.sineIn(o),
                  r = this.entity.game.stats.x * B.cameraModX,
                  h = this.entity.game.stats.y + B.cameraPosY * a,
                  d = this.entity.game.stats.z + B.cameraPosZ,
                  l = St.expoOut(o);
                (this.entity.player.cameraY = h), (this.camera.mainX = r), (this.camera.mainY = V.lerp(this.cameraStartY, h, l)), (this.camera.mainZ = d);
                var c = this.camera.mainY - this.entity.game.stats.y,
                  u = this.camera.mainZ - this.entity.game.stats.z + 50;
                (this.camera.mainRotX = Math.atan2(u, c) - 0.5 * Math.PI), (this.entity.player.cameraTargetY = s), (this.entity.player.cameraY = s), (this.entity.body.velocity.y = 0);
              } else this.turnOff();
              this.smoke && this.smoke.update(t);
            }
          }),
          (i.turnOff = function () {
            this.count &&
              (this.entity.roll.onStart.remove(this), this.onTurnOff.dispatch(), (this.entity.body.ghost = !1), this.entity.jump.unlock(), this.entity.game.camera.releaseControl(), this.entity.hoverboard.resume(), (this.count = 0));
          }),
          (i.onRollStart = function () {
            this.entity.game.sfx.stop("special_jetpack"), this.turnOff();
          }),
          (i.jumpCurveEvaluate = function (t) {
            return St.quartOut(t);
          }),
          (i.cameraCurveEvaluate = function (t) {
            return St.expoOut(t);
          }),
          (i.cameraAimFollowCurveEvaluate = function (t) {
            return St.quadOut(t);
          }),
          (i.isOn = function () {
            return !!this.count;
          }),
          (i.spawnCoins = function (t, e) {
            for (var i = this.entity.body.y, n = i + this.settings.jumpHeight, o = this.entity.body.z, s = o - this.settings.jumpDistance, a = i, r = o, h = this.settings.rows + 1, d = 0; d <= h; d++)
              if (!(d < 1)) {
                var l = d / h,
                  c = this.jumpCurveEvaluate(l);
                (a = V.lerp(i, n, c)), (r = V.lerp(o, s, l)), d < h ? this.spawnCoinsRow(a, r) : this.spawnPowerup(a, r);
              }
          }),
          (i.spawnCoinsRow = function (t, e) {
            for (var i = 3; i--; ) {
              var n = this.entity.game.pool.get(pt);
              (n.body.x = (i - 1) * B.laneWidth), (n.body.bottom = t), (n.body.z = e), n.init(), this.entity.game.addChild(n);
            }
          }),
          (i.spawnPowerup = function (t, e) {
            var i = Tt.spawn(this.entity.game, ["sneakers", "jetpack", "magnet", "multiplier"]);
            (i.body.x = L.pick(-1, 0, 1) * B.laneWidth), (i.body.bottom = t), (i.body.z = e);
          }),
          (i.pogoSmokeOn = function () {
            this.smoke || ((this.smoke = new Xe(5)), (this.smoke.scale.x = 0.5), (this.smoke.scale.y = 1.1), (this.smoke.y = -3)),
              this.view.addChild(this.smoke),
              this.smoke.turnOn(),
              this.entity.game.sfx.play("special_jetpack", {
                loop: !0,
              });
          }),
          (i.pogoSmokeOff = function () {
            this.smoke && (this.smoke.turnOff(), this.entity.game.sfx.stop("special_jetpack"));
          }),
          Pogo
        );
      })(J.a);
  
      function Sneakers_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Ue = (function (n) {
        var t, e;
  
        function Sneakers(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            (i = n.call(this, t, e) || this),
            t.body.onCollisionEnter.add(
              (function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
              })(i)
            ),
            (i.mod = 0),
            i
          );
        }
        (e = n), ((t = Sneakers).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Sneakers.prototype;
        return (
          (a.show = function () {
            this.left ||
              ((this.left = H.getEntityCloneOpaque("/powerups_superSneakers", "props_tex", !1)),
              (this.left.rx = 0.5 * Math.PI),
              (this.left.ry = 0.5 * Math.PI),
              (this.left.y -= 0.5),
              (this.left.z += 0.5),
              this.left.scale.set(0.5),
              (this.right = H.getEntityCloneOpaque("/powerups_superSneakers", "props_tex", !1)),
              (this.right.rx = 0.5 * -Math.PI),
              (this.right.ry = 0.5 * Math.PI),
              (this.right.y += 0.5),
              (this.right.z -= 0.5),
              this.right.scale.set(0.5));
            var t = this.entity.anim.scenes[1],
              e = H.findEntity("L_Toes_jnt", t.pixiTree, 10),
              i = H.findEntity("R_Toes_jnt", t.pixiTree, 10);
            e.addChild(this.left), i.addChild(this.right), this.entity.game.hud.addItemTimer("sneakers");
          }),
          (a.hide = function () {
            this.left.parent && this.left.parent.removeChild(this.left), this.right.parent && this.right.parent.removeChild(this.right), this.entity.game.hud.removeItemTimer("sneakers");
          }),
          (a.update = function (t) {
            if (this.time && (!this._activated && this.entity.body.landed && this._activate(), this._activated)) {
              (this.time -= this.entity.game.deltaSecs), this.jumpUpdate(t), this.entity.game.hud.updateItemTimer("sneakers", this.ratio);
              var e = 0.5 * (this.entity.body.bottom - this.entity.player.cameraY);
              this.hitTop && (e *= 0.5),
                (this.mod = e),
                (this.rig.mainX = this.entity.game.stats.x * B.cameraModX),
                (this.rig.mainY = this.entity.game.hero.player.cameraY + B.cameraPosY + this.mod),
                (this.rig.mainZ = this.entity.game.stats.z + B.cameraPosZ),
                (this.rig.mainRotX = B.cameraRotX),
                (this.rig.mainRotY = 0);
              var i = this.entity.game.level.currentChunk,
                n = 80 < this.entity.body.y;
              if (!n && i && i.envTube) {
                70 < this.rig.mainY && (this.rig.mainY = 70);
              }
              if (!n && i && i.envPillars) {
                60 < this.rig.mainY && (this.rig.mainY = 60);
              }
              this.time <= 0 && (this.entity.body.landed && !this.ascending ? this.turnOff() : (this.time = 0.01));
            }
          }),
          (a.turnOn = function () {
            (this.mod = 0),
              this.entity.pogo.turnOff(),
              this.entity.jetpack.turnOff(),
              this.entity.hoverboard.cancel(),
              (this.hitTop = 0),
              (this.duration = 10),
              (this.time = this.duration),
              (this.gravity = B.gravity),
              this.show(),
              this.entity.game.controller.onSwipeVertical.add(this);
          }),
          (a.turnOff = function () {
            this.time &&
              (this.entity.jump.unlock(),
              (this.time = 0),
              (this.mod = 0),
              this.entity.game.controller.onSwipeVertical.remove(this),
              this.entity.game.camera.releaseControl(),
              this.hide(),
              this.entity.state.set("empty"),
              (this._activated = !1));
          }),
          (a._activate = function () {
            this.entity.jump.lock(), (this._activated = !0), this.entity.state.set("empty"), (this.rig = this.entity.game.camera.takeControl());
          }),
          (a.isOn = function () {
            return !!this.time;
          }),
          (a.onSwipeVertical = function (t) {
            1 == t && this.jump();
          }),
          (a.jump = function (t, e) {
            void 0 === t && (t = 40),
              void 0 === e && (e = !1),
              this.time &&
                ((!e && this.locked) ||
                  (!e && this.isJumping) ||
                  ((e || this.entity.body.canJump) &&
                    (this.entity.roll && this.entity.roll.cancel(),
                    this.entity.body.resetGroundChangeTolerance(),
                    (this.isJumping = !0),
                    (this.entity.body.y += 1),
                    (this.entity.body.velocity.y = 0),
                    (this.jumpHeight = 40),
                    (this.jumpLength = 150),
                    (this.startPosY = this.entity.body.y),
                    (this.startPosZ = this.entity.body.z),
                    (this.ascending = !0),
                    this.entity.game.sfx.play("hero_sneakers_jump"))));
          }),
          (a.jumpUpdate = function (t) {
            if (this.isJumping && this.ascending) {
              var e = (-(this.entity.body.z - this.startPosZ) / this.jumpLength) * 2,
                i = e <= 1 ? e : 1;
              1 <= i && (this.ascending = !1);
              var n = this.startPosY + this.jumpHeight * St.expoOut(i) - this.entity.body.y;
              (this.entity.body.velocity.y = t ? n / t : 0), (this.ascending && !this.hitTop) || (this.entity.body.velocity.y = 0);
            } else this.entity.body.velocity.y -= this.gravity * t;
            this.entity.body.bottom <= this.entity.body.ground + 0.01 && this.entity.body.velocity.y <= 0 && ((this.entity.body.bottom = this.entity.body.ground), this.isJumping && this.jumpEnd());
          }),
          (a.jumpEnd = function () {
            (this.hitTop = 0), (this.isJumping = !1), (this.ascending = !1), (this.entity.body.velocity.y = 0);
          }),
          (a.jumpCancel = function () {
            this.jumpEnd();
          }),
          (a.onCollisionEnter = function (t) {
            t.flags & $.TOP && ((this.entity.body.velocity.y = 0), (this.hitTop = t.hit.bottom - 10));
          }),
          (i = Sneakers),
          (o = [
            {
              key: "ratio",
              get: function () {
                return this.time / this.duration;
              },
            },
          ]) && Sneakers_defineProperties(i.prototype, o),
          s && Sneakers_defineProperties(i, s),
          Sneakers
        );
      })(J.a);
  
      function Magnet_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Ve = (function (n) {
        var t, e;
  
        function Magnet(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).count = 0), (i.duration = 10), i;
        }
        (e = n), ((t = Magnet).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Magnet.prototype;
        return (
          (a.createView = function () {
            this.view || ((this.view = H.getEntityCloneOpaque("/powerups_coinMagnet", "props_tex", !1)), this.view.scale.set(0.5), (this.view.x = -2), (this.view.rz = 0.5 * Math.PI));
          }),
          (a.update = function (t) {
            this.count && ((this.count -= this.entity.game.stats.delta), this.entity.game.hud.updateItemTimer("magnet", this.ratio), this.count <= 0 && this.turnOff());
          }),
          (a.turnOn = function () {
            this.createView(), this.entity.game.hud.addMessage("POWERUP: COIN MAGNET"), this.entity.game.hud.addItemTimer("magnet"), (this.count = this.duration);
            var t = this.entity.anim.scenes[1];
            H.findEntity("R_Hand_jnt", t.pixiTree, 10).addChild(this.view),
              (this.timer = this.entity.game.sfx.play("special_magnet", {
                loop: !0,
              }));
          }),
          (a.turnOff = function () {
            this.count &&
              (this.entity.game.hud.clearMessage("POWERUP: COIN MAGNET"),
              this.entity.game.hud.removeItemTimer("magnet"),
              (this.count = 0),
              this.view.parent && this.view.parent.removeChild(this.view),
              this.entity.game.sfx.stop("special_magnet"));
          }),
          (a.isOn = function () {
            return !!this.count;
          }),
          (i = Magnet),
          (o = [
            {
              key: "ratio",
              get: function () {
                return this.count / this.duration;
              },
            },
          ]) && Magnet_defineProperties(i.prototype, o),
          s && Magnet_defineProperties(i, s),
          Magnet
        );
      })(J.a);
  
      function Particles_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function Particles_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var qe = {
          EntityClass: null,
          container: null,
          rate: 5,
          spawns: 1,
          life: 30,
          color: null,
          x: 0,
          y: 0,
          z: 0,
          xMod: [0, 0],
          yMod: [0, 0],
          zMod: [0, 0],
          velocityX: 0,
          velocityY: 0,
          velocityZ: 0,
          velocityXMod: [0, 0],
          velocityYMod: [0, 0],
          velocityZMod: [0, 0],
          forceX: 0,
          forceY: 0,
          forceZ: 0,
          forceXMod: [0, 0],
          forceYMod: [0, 0],
          forceZMod: [0, 0],
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          scaleXMod: [0, 0],
          scaleYMod: [0, 0],
          scaleZMod: [0, 0],
          growX: 0,
          growY: 0,
          growZ: 0,
          growXMod: [0, 0],
          growYMod: [0, 0],
          growZMod: [0, 0],
        },
        We = (function (n) {
          function Particles(t, e) {
            var i;
            return void 0 === e && (e = {}), (e = Object.assign({}, qe, e)), (i = n.call(this, t, e) || this).setup(e), (i._time = 0), (i.rateCount = 0), (i.list = []), (i.idle = !0), (i.delta = 0), i;
          }
          Particles_inheritsLoose(Particles, n);
          var t,
            e,
            i,
            o = Particles.prototype;
          return (
            (o.setup = function (t) {
              (this.data = Object.assign({}, qe, t)), this.reset();
            }),
            (o.reset = function () {
              this.list = [];
            }),
            (o._update = function (t) {
              this.delta = t;
            }),
            (o.update = function (t) {
              if (!this.idle) {
                t || (t = this.delta), (this.delta = t);
                for (var e = this.list.length; e--; ) {
                  var i = this.list[e].particle;
                  i.updateParticle(t), i.data.life <= 0 && this.removeParticle(e);
                }
                (this.idle = !this.list.length && !this._time),
                  this._time <= 0 || ((this._time -= t), this._time < 0 && (this._time = 0), (this.rateCount -= t), this.rateCount <= 0 && (this.spawn(this.data.spawns), (this.rateCount = this.data.rate)));
              }
            }),
            (o.run = function (t) {
              void 0 === t && (t = 9999999), (this._time = t), (this.rateCount = 0), (this.idle = !1);
            }),
            (o.stop = function () {
              this._time = 0;
            }),
            (o.clear = function () {
              this.stop();
              for (var t = this.list.length; t--; ) this.removeParticle(t);
            }),
            (o.removeParticle = function (t) {
              var e = this.list[t];
              e && (this.list.splice(t, 1), e.parent && (e.parent.removeChild(e), this.entity.game.pool["return"](e)));
            }),
            (o.spawn = function (t, e) {
              void 0 === t && (t = 1), e || (e = this.data), (this.idle = !1);
              var i = e.EntityClass,
                n = this.entity.game.pool.get(i);
              n.particle || n.add(Ze), n.particle.spawn(e), (e.container || this.entity.game).addChild(n), this.list.push(n), (n.particle.active = !0), 1 < t && this.spawn(t - 1, e);
            }),
            (t = Particles),
            (e = [
              {
                key: "time",
                get: function () {
                  return this._time;
                },
                set: function (t) {
                  (this.idle = t <= 0), (this._time = t);
                },
              },
            ]) && Particles_defineProperties(t.prototype, e),
            i && Particles_defineProperties(t, i),
            Particles
          );
        })(J.a),
        Ze = (function (n) {
          function Particle(t, e) {
            var i;
            return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).data = Object.assign({}, qe)), i;
          }
          Particles_inheritsLoose(Particle, n);
          var t = Particle.prototype;
          return (
            (t.spawn = function (t) {
              Object.assign(this.data, qe, t),
                (this.entity.x = this.data.x + L.range(this.data.xMod[0], this.data.xMod[1])),
                (this.entity.y = this.data.y + L.range(this.data.yMod[0], this.data.yMod[1])),
                (this.entity.z = this.data.z + L.range(this.data.zMod[0], this.data.zMod[1])),
                (this.entity.scale.x = this.data.scaleX + L.range(this.data.scaleXMod[0], this.data.scaleXMod[1])),
                (this.entity.scale.y = this.data.scaleY + L.range(this.data.scaleYMod[0], this.data.scaleYMod[1])),
                (this.entity.scale.z = this.data.scaleZ + L.range(this.data.scaleZMod[0], this.data.scaleZMod[1])),
                (this.data.growX = this.data.growX + L.range(this.data.growXMod[0], this.data.growXMod[1])),
                (this.data.growY = this.data.growY + L.range(this.data.growYMod[0], this.data.growYMod[1])),
                (this.data.growZ = this.data.growZ + L.range(this.data.growZMod[0], this.data.growZMod[1])),
                (this.data.velocityX += L.range(this.data.velocityXMod[0], this.data.velocityXMod[1])),
                (this.data.velocityY += L.range(this.data.velocityYMod[0], this.data.velocityYMod[1])),
                (this.data.velocityZ += L.range(this.data.velocityZMod[0], this.data.velocityZMod[1])),
                (this.data.forceX += L.range(this.data.forceXMod[0], this.data.forceXMod[1])),
                (this.data.forceY += L.range(this.data.forceYMod[0], this.data.forceYMod[1])),
                (this.data.forceZ += L.range(this.data.forceZMod[0], this.data.forceZMod[1]));
            }),
            (t.updateParticle = function (t) {
              (this.data.life -= t),
                this.data.life < 0 && (this.data.life = 0),
                (this.entity.x += this.data.velocityX * t),
                (this.entity.y += this.data.velocityY * t),
                (this.entity.z += this.data.velocityZ * t),
                (this.data.velocityX += this.data.forceX * t),
                (this.data.velocityY += this.data.forceY * t),
                (this.data.velocityZ += this.data.forceZ * t),
                (this.entity.scale.x += this.data.growX * t),
                (this.entity.scale.y += this.data.growY * t),
                (this.entity.scale.z += this.data.growZ * t);
            }),
            Particle
          );
        })(J.a);
      var Ke = (function (i) {
        var t, e;
  
        function ParticleHoverCollision() {
          var t;
          ((t = i.call(this) || this).view = H.particle(16, 16, 1, "spraySplash")), t.addChild(t.view);
          var e = L.pick(16256769, 10287617, 12040194);
          return H.tint(t.view, e), t;
        }
        return (e = i), ((t = ParticleHoverCollision).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), ParticleHoverCollision;
      })(v.a);
      var Je = (function (e) {
        var t, i;
  
        function ParticleSpark() {
          var t;
          return (
            ((t = e.call(this) || this).view = H.getEntityCloneBlend("/grindSpark", "effects_tex", 0.8, 1)),
            (t.view.ry = 0.5 * Math.PI),
            (t.view.view3d.state.blend = !0),
            (t.view.view3d.state.depthTest = !0),
            (t.view.view3d.orderBias = 999),
            t.addChild(t.view),
            t.view.scale.set(0.3),
            H.tint(t.view, 16776960),
            t
          );
        }
        return (i = e), ((t = ParticleSpark).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i), ParticleSpark;
      })(v.a);
  
      function Hoverboard_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var Qe = (function (n) {
        var t, e;
  
        function Hoverboard(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).count = 0), (i.duration = 30), i;
        }
        (e = n), ((t = Hoverboard).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Hoverboard.prototype;
        return (
          (a.show = function () {
            this.view || (this.view = H.getEntityClone("board_newYork_base")), this.entity.game.hud.addItemTimer("hoverboard"), this.entity.anim.scenes[1].attachPoint1.addChild(this.view), this.entity.state.set("empty");
          }),
          (a.hide = function () {
            this.view.parent && this.view.parent.removeChild(this.view);
          }),
          (a.update = function (t) {
            this.count &&
              !this.paused &&
              ((this.view.y = 0.2), (this.view.x = 14), (this.view.z = -7), (this.count -= this.entity.game.stats.delta), this.entity.game.hud.updateItemTimer("hoverboard", this.ratio), this.count <= 0 && this.end());
          }),
          (a.updateGrinding = function () {
            this.entity.grindingSparks || this.createGrindingSparks(),
              (this.entity.grindingSparks.time = 10),
              (this.entity.grindingSparks.data.x = this.entity.x - 1),
              (this.entity.grindingSparks.data.y = this.entity.y - 4.5),
              (this.entity.grindingSparks.data.z = this.entity.z - 0.5);
          }),
          (a.enable = function () {
            this.entity.game.controller.onDoubleTap.add(this);
          }),
          (a.disable = function () {
            this.entity.game.controller.onDoubleTap.remove(this);
          }),
          (a.pause = function () {
            this.count && (this.paused = !0);
          }),
          (a.resume = function () {
            this.count &&
              this.paused &&
              ((this.paused = !1),
              this.entity.state.set("empty"),
              this.show(),
              this.entity.anim.play("h_jump3_bs360grab", {
                loop: !1,
              }));
          }),
          (a.isOn = function () {
            return !!this.count && !this.paused;
          }),
          (a.explode = function () {
            this.end(),
              this.entity.collisionSmoke ||
                this.entity.add(
                  We,
                  {
                    EntityClass: Ke,
                    container: this.entity.game,
                    rate: 1,
                    life: 60,
                    velocityXMod: [-1.5, 1.5],
                    velocityYMod: [1, 3],
                    velocityZMod: [-1, -2],
                    scaleXMod: [0.8, 1.5],
                    scaleYMod: [0.8, 1.5],
                    scaleZMod: [0.8, 1.5],
                    growXMod: [0.01, 0.03],
                    growYMod: [0.01, 0.03],
                    growZMod: [0.01, 0.03],
                  },
                  "collisionSmoke"
                ),
              (this.entity.collisionSmoke.data.x = this.entity.x),
              (this.entity.collisionSmoke.data.y = this.entity.y),
              (this.entity.collisionSmoke.data.z = this.entity.z),
              this.entity.collisionSmoke.spawn(10),
              this.entity.jump.perform(15, !0),
              this.entity.player.dizzyEnd();
          }),
          (a.onDoubleTap = function () {
            this.start();
          }),
          (a.start = function () {
            var t = this;
            this.entity.game.state === pn.RUNNING &&
              this.entity.game.stats.hoverboards &&
              (this.entity.pogo.isOn() ||
                this.entity.jetpack.isOn() ||
                this.locked ||
                (this.entity.anim.play("h_skate_on", {
                  loop: !1,
                  enforce: 0.3,
                  sudden: !0,
                }),
                setTimeout(function () {
                  t.entity.anim.play("h_landing", {
                    loop: !1,
                    enforce: 0.3,
                  }),
                    t.entity.anim.play("h_run", {
                      loop: !0,
                    });
                }, 500),
                this.show(),
                (this.count = this.duration),
                (this.paused = !1),
                (this.entity.game.stats.hoverboards -= 1),
                this.entity.player.dizzyEnd(),
                this.entity.state.set("empty"),
                this.entity.popPickup && this.entity.popPickup.play()));
          }),
          (a.cancel = function () {
            this.count && (this.end(), (this.entity.game.stats.hoverboards += 1));
          }),
          (a.end = function () {
            this.count && (this.hide(), this.entity.game.hud.removeItemTimer("hoverboard"), (this.count = 0), this.entity.state.set("empty"));
          }),
          (a.lock = function () {
            this.locked = !0;
          }),
          (a.unlock = function () {
            this.locked = !1;
          }),
          (a.createGrindingSparks = function () {
            this.entity.grindingSparks ||
              this.entity.add(
                We,
                {
                  EntityClass: Je,
                  container: this.entity.game,
                  rate: 0.5,
                  spawns: 1,
                  life: 20,
                  xMod: [-0.4, 0.4],
                  velocityXMod: [-0.2, 0.2],
                  velocityYMod: [0.03, 0.08],
                  velocityZMod: [-0.1, -0.2],
                  growXMod: [0.1, 0.3],
                  growZMod: [0.3, 0.6],
                },
                "grindingSparks"
              );
          }),
          (i = Hoverboard),
          (o = [
            {
              key: "ratio",
              get: function () {
                return this.count / this.duration;
              },
            },
            {
              key: "grinding",
              get: function () {
                return !!this.count && !this.paused && this.entity.body.landed && 29 < this.entity.body.ground && this.entity.body.ground < 29.2;
              },
            },
          ]) && Hoverboard_defineProperties(i.prototype, o),
          s && Hoverboard_defineProperties(i, s),
          Hoverboard
        );
      })(J.a);
  
      function Multiplier_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var $e = (function (n) {
          var t, e;
  
          function Multiplier(t, e) {
            var i;
            return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).count = 0), (i.duration = 10), i;
          }
          (e = n), ((t = Multiplier).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i,
            o,
            s,
            a = Multiplier.prototype;
          return (
            (a.update = function (t) {
              this.count && ((this.count -= this.entity.game.stats.delta), this.entity.game.hud.updateItemTimer("multiplier", this.ratio), this.count <= 0 && this.turnOff());
            }),
            (a.turnOn = function () {
              this.count ? (this.count = this.duration) : ((this.count = this.duration), this.entity.game.hud.addMessage("POWERUP: MULTIPLIER"), this.entity.game.hud.addItemTimer("multiplier"), (this.entity.game.stats.multiplier *= 2));
            }),
            (a.turnOff = function () {
              this.count && (this.entity.game.hud.clearMessage("POWERUP: MULTIPLIER"), this.entity.game.hud.removeItemTimer("multiplier"), (this.entity.game.stats.multiplier /= 2), (this.count = 0));
            }),
            (a.isOn = function () {
              return !!this.count;
            }),
            (i = Multiplier),
            (o = [
              {
                key: "ratio",
                get: function () {
                  return this.count / this.duration;
                },
              },
            ]) && Multiplier_defineProperties(i.prototype, o),
            s && Multiplier_defineProperties(i, s),
            Multiplier
          );
        })(J.a),
        ti = i(2);
  
      function Player_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var ei = (function (n) {
        var t, e;
  
        function Player(t, e) {
          var i;
          return (
            void 0 === e && (e = {}),
            (i = n.call(this, t, e) || this),
            t.lane.onBumpSideways.add(Player_assertThisInitialized(i)),
            t.body.onCollisionEnter.add(Player_assertThisInitialized(i)),
            t.body.onCollisionExit.add(Player_assertThisInitialized(i)),
            t.body.onTriggerEnter.add(Player_assertThisInitialized(i)),
            t.body.onTriggerExit.add(Player_assertThisInitialized(i)),
            i.reset(),
            i
          );
        }
        (e = n), ((t = Player).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Player.prototype;
        return (
          (i.reset = function (t, e, i) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === i && (i = null),
              this.entity.body.reset(),
              (this.entity.body.lane = 0),
              (this.entity.body.x = e),
              (this.entity.body.z = t),
              (this.entity.body.lane = i || 0),
              (this.entity.body.bottom = 0),
              (this.entity.body.movable = !0),
              (this.entity.body.glide = 0),
              (this.entity.body.laning = 0),
              (this.entity.body.ghost = !1),
              (this.entity.x = this.entity.body.x),
              (this.entity.y = this.entity.body.y),
              (this.entity.z = this.entity.body.z),
              this.entity.resetModel(),
              (this.dizzy = 0),
              (this.jumpLocked = !1),
              (this.rollLocked = !1),
              (this.hoverboardLocked = !1),
              (this.running = !1),
              (this.cameraY = 0),
              (this.cameraTargetY = 0),
              (this.cameraRotX = 0),
              (this.cameraLow = 0),
              (this.tunnel = !1),
              (this.dead = !1),
              (this.deathCause = ""),
              (this.catchMode = ""),
              (this.rewindStartPoint = new ti.P()),
              (this.rewindEndPoint = null);
          }),
          (i.run = function (t) {
            void 0 === t && (t = 200),
              this.entity.game.level.onEnterTutorial.contains(this) || (this.entity.game.level.onEnterTutorial.add(this), this.entity.game.level.onExitTutorial.add(this)),
              (this.entity.body.gravity = this.entity.game.config.gravity),
              (this.entity.body.velocity.z = -B.speed),
              (this.entity.body.height = 11),
              (this.entity.body.bottom = 0),
              (this.entity.body.movable = !0),
              (this.running = !0),
              (this.jumpForce = this.entity.game.config.jump),
              (this.dizzy = t),
              this.entity.shadow.turnOn(),
              this.entity.lane.turnOn(),
              this.entity.jump.turnOn(),
              this.entity.roll.turnOn(),
              this.entity.hoverboard.enable(),
              this.entity.hoverboard.isOn()
                ? this.entity.anim.play("h_run", {
                    loop: !0,
                    sudden: !0,
                  })
                : this.entity.anim.play("run2", {
                    loop: !0,
                    sudden: !0,
                  }),
              this.entity.game.sfx.stop("special_jetpack");
          }),
          (i.stop = function () {
            (this.running = !1), (this.entity.body.velocity.z = 0);
          }),
          (i.update = function (t) {
            if (
              (this.rewindEndPoint &&
                ((this.rewinding = !0),
                this.entity.body.velocity.reset(),
                (this.entity.body.ghost = !0),
                (this.entity.body.x = V.lerp(this.entity.body.x, 0, 0.1 * t)),
                (this.entity.body.bottom = V.lerp(this.entity.body.bottom, 0, 0.3 * t)),
                (this.entity.body.z += 4 * t),
                this.entity.body.z >= this.rewindEndPoint.z - 0.1 &&
                  (this.entity.lane.reset(), (this.entity.body.z = this.rewindEndPoint.z), (this.entity.body.velocity.z = 0), (this.entity.body.ghost = !1), (this.rewinding = !1), this.reset(this.rewindEndPoint.z), this.run())),
              this.running && !this.dead)
            ) {
              if (!this.entity.jetpack.isOn()) {
                var e = this.entity.game.stats.speed,
                  i = V.lerp(this.entity.body.velocity.z, -e, 0.1 * t);
                this.entity.body.velocity.z = i;
              }
              var n = this.entity.body.ground,
                o = this.entity.body.bottom;
              n >= this.cameraTargetY && this.entity.body.landed ? (this.cameraTargetY = n) : o < this.cameraTargetY && (this.cameraTargetY = o);
            } else this.entity.body.velocity.z = 0;
            (this.cameraY = V.lerp(this.cameraY, this.cameraTargetY, 0.2 * t)),
              this.cameraY > this.entity.body.bottom + 3 && (this.cameraY = this.entity.body.bottom + 3),
              this.dizzy && ((this.dizzy -= t), this.dizzy <= 0 && this.dizzyEnd()),
              this.bumpCount && ((this.bumpCount -= t), this.bumpCount <= 0 && (this.bumpCount = 0));
          }),
          (i.getMode = function () {
            return this.entity.hoverboard.isOn() ? "hoverboard" : this.entity.sneakers.isOn() ? "sneakers" : "normal";
          }),
          (i.dizzyStart = function () {
            (this.dizzy = 200), this.entity.dizzy.turnOn(), this.entity.game.sfx.play("hero_stumble");
          }),
          (i.dizzyEnd = function () {
            (this.dizzy = 0), this.entity.dizzy.turnOff();
          }),
          (i.lockHoverboard = function (t) {
            this.hoverboardLocked = t;
          }),
          (i.goBackToLastCheckPoint = function () {
            this.entity.anim.play("run3", {
              loop: !0,
            }),
              (this.rewindStartTime = this.entity.game.time),
              (this.rewindDuration = 600),
              this.rewindStartPoint.copy(this.entity.body.center);
            var t = this.entity.game.level.currentChunk.getLastCheckpointByPosition(this.entity.body.z);
            t && (this.rewindEndPoint = t.body.center);
          }),
          (i.stumble = function (t, e) {
            void 0 === t && (t = "lower"), void 0 === e && (e = !1), (this.bumpCount && e) || (this.entity.game.camera.shake(3), this.dizzy ? this.die(t) : (this.dizzyStart(), (this.bumpCount = 20)));
          }),
          (i.crash = function (t) {
            void 0 === t && (t = "train"), (this.cameraLow = 0), (this.tunnel = !1), this.entity.game.camera.shake(5), this.die(t);
          }),
          (i.die = function (t) {
            var e = this;
            if (this.entity.hoverboard.isOn())
              return (
                this.entity.game.level.reshuffle(),
                this.entity.hoverboard.explode(),
                void setTimeout(function () {
                  e.entity.game.exitTunnel(), e.entity.game.sfx.play("hero_hoverboard_crash");
                }, 1)
              );
            (this.entity.body.z += 5),
              (this.dead = !0),
              (this.deathCause = t),
              this.entity.game.sfx.play("hero_death"),
              this.entity.dizzy.turnOff(),
              this.entity.jetpack.turnOff(),
              this.entity.magnet.turnOff(),
              this.entity.pogo.turnOff(),
              this.entity.shadow.turnOff(),
              this.entity.lane.turnOff(),
              this.entity.jump.turnOff(),
              this.entity.roll.turnOff(),
              this.entity.sneakers.turnOff(),
              this.entity.hoverboard.disable(),
              this.entity.game.sfx.stop("special_jetpack"),
              this.entity.game.level.isTutorial()
                ? setTimeout(function () {
                    e.goBackToLastCheckPoint();
                  }, 700)
                : setTimeout(function () {
                    e.entity.game.gameover();
                  }, 200);
          }),
          (i.onBumpSideways = function (t) {
            this.stumble("lower");
          }),
          (i.onCollisionEnter = function (t) {
            B.god ||
              (t.flags & $.FRONT
                ? ((this.entity.body.velocity.z = 0),
                  this.entity.lane.changing || t.hit.height < 1
                    ? this.stumble("bounce", !0)
                    : t.pas.movable
                    ? this.crash("train")
                    : 6 < t.hit.height
                    ? this.crash("bounce")
                    : t.hit.y > this.entity.body.y
                    ? this.crash("upper")
                    : this.crash("lower"))
                : t.flags & $.LEFT || t.flags & $.RIGHT
                ? this.entity.lane.bump(-this.entity.lane.absStep)
                : t.flags & $.SLOPE && (this.stumble("bounce", !0), (this.entity.body.velocity.z *= 0.5)));
          }),
          (i.onCollisionExit = function (t) {}),
          (i.onTriggerEnter = function (t) {
            t.entity.lowCamera && !this.entity.jetpack.isOn() ? ((this.cameraLow = -15), (this.tunnel = !0), this.entity.game.enterTunnel()) : t.entity.tutorialTrigger && this.entity.game.tutorial.enterTrigger(t.entity.type);
          }),
          (i.onTriggerExit = function (t) {
            t.entity.lowCamera && ((this.cameraLow = 0), (this.tunnel = !1), this.entity.game.exitTunnel()), t.entity.tutorialTrigger && this.entity.game.tutorial.exitTrigger(t.entity.type);
          }),
          (i.onEnterTutorial = function () {}),
          (i.onExitTutorial = function () {}),
          Player
        );
      })(J.a);
      var ii = (function (i) {
          var t, e;
  
          function Shadow(t, e) {
            return void 0 === e && (e = {}), i.call(this, t, e) || this;
          }
          (e = i), ((t = Shadow).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var n = Shadow.prototype;
          return (
            (n.createView = function () {
              this.view || ((this.view = H.plane(8, 8, 0.8, "shadow_mip.png")), (this.view.rx = V.PI_HALF), (this.view.z = 1), this.entity.addChild(this.view));
            }),
            (n.update = function (t) {
              if (this.view && this.view.active) {
                var e = this.entity.body ? this.entity.body.ground : 0;
                this.view.y = -this.entity.y + e + 1;
              }
            }),
            (n.turnOn = function () {
              this.createView(), (this.view.active = !0);
            }),
            (n.turnOff = function () {
              this.view.active = !1;
            }),
            (n.isOn = function () {
              return this.view.active;
            }),
            Shadow
          );
        })(J.a),
        ni = i(18),
        oi = i(129),
        si = i.n(oi),
        ai = i(130),
        ri = i.n(ai);
      c.Shader;
      var hi = {
        character_idle: i(475),
        character_jetpack: i(476),
        character_movement: i(477),
        character_catch: i(478),
        character_pogo: i(479),
        character_start: i(480),
        guard_movement: i(481),
        guard_catch: i(482),
        dog_movement: i(483),
        dog_catch: i(484),
      };
  
      function Anim_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var di = (function (n) {
        var t, e;
  
        function Anim(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).scene = null), (i.fpsGame = 60), (i.currentAction = null), (i.scenes = {}), (i.clips = {}), (i.actions = {}), i;
        }
        (e = n), ((t = Anim).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Anim.prototype;
        return (
          (a.reset = function () {
            (this.currentAction = null), this.stop();
          }),
          (a.addAnim = function (t, e) {
            if (!this.scenes[t]) {
              var i = e.offset || 0,
                n = H.getScene(e.file);
              if (!n) throw new Error("Scene not found: " + e.file);
              H.applyTexture(n.pixiTree, e.texture, !1);
              var o = H.findEntity("Mess", n.pixiTree);
              for (var s in (o && o.parent && o.parent.removeChild(o),
              n.initMixer(),
              ((this.scenes[t] = n).attachPoint1 = H.findEntity("attachPoint1", n.pixiTree)),
              (n.attachPoint2 = H.findEntity("attachPoint2", n.pixiTree)),
              (n.attachPoint3 = H.findEntity("attachPoint3", n.pixiTree)),
              (n.pixiTree.active = !1),
              e.clips)) {
                var a = e.fps,
                  r = n.sceneGraph.animations[0],
                  h = e.clips[s],
                  d = h[0] + i,
                  l = h[1] + i,
                  c = ni.g(r, s, d, l, a);
                (c.__scene = n), (c.__name = s), (this.clips[s] = c);
              }
              this.updateActions();
            }
          }),
          (a.updateActions = function () {
            for (var t in this.clips)
              if (!this.actions[t]) {
                var e = this.clips[t],
                  i = e.__scene.mixer.clipAction(e);
                i.setLoop(ti.s), (i.clampWhenFinished = !0), (i.__scene = e.__scene), (i.__name = t), (this.actions[t] = i);
              }
          }),
          (a.play = function (t, e) {
            var i = this;
            if ((void 0 === e && (e = {}), Array.isArray(t) && (t = L.pick.apply(L, t)), !this.actions[t])) throw new Error("Animation not found: " + t);
            if ((void 0 === e.loop && (e.loop = !1), void 0 === e.sudden && (e.sudden = !1), void 0 === e.crossfade && (e.crossfade = 0.2), void 0 === e.enforce && (e.enforce = 0), this._enforce))
              this._queued = {
                name: t,
                opts: e,
              };
            else {
              e.enforce &&
                ((this._enforce = e.enforce),
                setTimeout(function () {
                  (i._enforce = 0), i._queued && (i.play(i._queued.name, i._queued.opts), (i._queued = null));
                }, 1e3 * this._enforce));
              var n = this.actions[t];
              if (n !== this.currentAction) {
                var o = n.__scene,
                  s = this.currentAction && this.currentAction.__scene === o;
                return (
                  o.mixer.stopAllAction(),
                  this.currentAction && (this.currentAction.stop(), this.currentAction.reset()),
                  n.stop(),
                  n.reset(),
                  n.setLoop(e.loop ? ti.s : ti.r),
                  this.currentAction && !e.sudden && s && n.crossFadeFrom(this.currentAction, e.crossfade, !0),
                  n.play(),
                  o.mixer.update(0.01),
                  o.syncToPixi(),
                  this.showScene(o),
                  (this.currentAction = n)
                );
              }
            }
          }),
          (a.showScene = function (e) {
            var i = this;
            (e.pixiTree.active = !0),
              (this.entity.model || this.entity).addChild(e.pixiTree),
              setTimeout(function () {
                for (var t in i.scenes) i.scenes[t].pixiTree.active = !1;
                e.pixiTree.active = !0;
              }, 20);
          }),
          (a.stop = function () {
            this.currentAction && (this.currentAction.stop(), this.currentAction.reset(), (this.currentAction = null));
          }),
          (a.update = function (t) {
            if (this.scenes && this.currentAction) {
              var e = this.currentAction.__scene;
              e.mixer.update(t / this.fpsGame), e.syncToPixi();
            }
          }),
          (a.sum = function (t) {
            this.extra = t;
            var e = this.actions[this.extra];
            e.setEffectiveWeight(0.75), e.setLoop(!0), e.play();
          }),
          (a.subtract = function (t) {
            this.actions[this.extra].stop(), (this.extra = null);
          }),
          (i = Anim),
          (o = [
            {
              key: "currentName",
              get: function () {
                return this.currentAction ? this.currentAction.__name : null;
              },
            },
          ]) && Anim_defineProperties(i.prototype, o),
          s && Anim_defineProperties(i, s),
          Anim
        );
      })(J.a);
  
      function State_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var li = function () {},
        ci = (function (n) {
          var t, e;
  
          function State(t, e) {
            var i;
            return (
              ((i = n.call(this, t, e) || this).states = {}),
              (i.currentStateId = "empty"),
              (i.transitionMap = {}),
              i.add("empty", {
                end: li,
                begin: li,
                update: li,
                render: li,
              }),
              (i.params = {}),
              i
            );
          }
          (e = n), ((t = State).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i,
            o,
            s,
            a = State.prototype;
          return (
            (a.addTransition = function (t, e, i) {
              return this.transitionMap[t] || (this.transitionMap[t] = {}), (this.transitionMap[t][e] = !0), i && (this.transitionMap[e][t] = !0), this;
            }),
            (a.add = function (t, e) {
              return (
                ((this.states[t] = e).id = t),
                (e.entity = this.entity),
                e.empty || (e.empty = li),
                e.begin || (e.begin = li),
                e.update || (e.update = li),
                e.render || (e.render = li),
                e.end || (e.end = li),
                this.transitionMap[t] || (this.transitionMap[t] = {}),
                this.addTransition("empty", t, !0),
                this
              );
            }),
            (a.set = function (t) {
              this.can(t) && (this.states[this.currentStateId].end(), (this.currentStateId = t), this.states[this.currentStateId].begin());
            }),
            (a.can = function (t) {
              if (this.currentStateId === t) return !1;
              var e = this.transitionMap.all[t],
                i = this.transitionMap[this.currentStateId].all,
                n = this.transitionMap[this.currentStateId][t];
              return e || i || n;
            }),
            (a.update = function (t) {
              if (this.entity.onStateUpdate) {
                this.entity.onStateUpdate();
                var e = this.params,
                  i = this.states;
                for (var n in i)
                  if ("empty" !== n) {
                    var o = i[n],
                      s = !0;
                    for (var a in e)
                      if (void 0 !== o[a] && o[a] !== e[a]) {
                        s = !1;
                        break;
                      }
                    if (s && this.currentStateId !== n) {
                      var r = this.transitionMap.all[n],
                        h = this.transitionMap[this.currentStateId].all,
                        d = this.transitionMap[this.currentStateId][n];
                      if (r || h || d) {
                        this.set(n);
                        break;
                      }
                    }
                  }
              }
              this.states[this.currentStateId].update(t);
            }),
            (a.render = function (t) {
              this.states[this.currentStateId].render(t);
            }),
            (i = State),
            (o = [
              {
                key: "id",
                get: function () {
                  return this.currentStateId;
                },
              },
            ]) && State_defineProperties(i.prototype, o),
            s && State_defineProperties(i, s),
            State
          );
        })(J.a);
      var ui = (function (i) {
        var t, e;
  
        function Dizzy(t, e) {
          return void 0 === e && (e = {}), i.call(this, t, e) || this;
        }
        (e = i), ((t = Dizzy).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = Dizzy.prototype;
        return (
          (n.createView = function () {
            this.view ||
              ((this.view = new v.a()),
              (this.view.y = 4),
              (this.view.x = 0.5),
              (this.trail1 = H.getEntityCloneBlend("effects/Dizzytrail", "effects_tex", 0.9, 1)),
              this.view.addChild(this.trail1),
              (this.trail2 = H.getEntityCloneBlend("effects/Dizzytrail", "effects_tex", 0.9, 1)),
              (this.trail2.ry = Math.PI),
              this.view.addChild(this.trail2),
              (this.star1 = H.getEntityCloneBlend("effects/Dizzystar", "effects_tex", 0.9, 1)),
              (this.star1.z = -1.5),
              this.view.addChild(this.star1),
              (this.star2 = H.getEntityCloneBlend("effects/Dizzystar", "effects_tex", 0.9, 1)),
              (this.star2.z = 1.5),
              this.view.addChild(this.star2),
              (this.view.active = !1),
              (this.view.rx = -0.5),
              this.view.scale.set(1.25));
          }),
          (n.reset = function () {
            this.view && (this.view.active = !1);
          }),
          (n.update = function (t) {
            this.view && this.view.active && (this.view.ry += 0.05 * t);
          }),
          (n.turnOn = function () {
            if ((this.createView(), !this.view.parent)) {
              var t = this.entity.anim.scenes[1];
              H.findEntity("Head_jnt", t.pixiTree, 10).addChild(this.view);
            }
            this.view.active = !0;
          }),
          (n.turnOff = function () {
            this.view && (this.view.parent && this.view.parent.removeChild(this.view), (this.view.active = !1));
          }),
          Dizzy
        );
      })(J.a);
      var pi = (function (n) {
        var t, e;
  
        function PopPickup(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).view = H.getEntityCloneBlend("/powBlue", "effects_tex", 0.95, 1)), (i.view.rotation.y = Math.PI), (i.duration = 13), i.reset(), i;
        }
        (e = n), ((t = PopPickup).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = PopPickup.prototype;
        return (
          (i.reset = function () {
            this.view.parent && this.entity.removeChild(this.view), (this.view.active = !1), this.view.scale.set(0), (this.count = 0);
          }),
          (i.update = function (t) {
            if (this.count) {
              this.count -= t;
              var e = 1 + 20 * (1 - this.count / this.duration);
              this.view.scale.set(e), this.count <= 0 && this.reset();
            }
          }),
          (i.play = function () {
            (this.view.rotation.z = V.PI_DOUBLE * Math.random()), (this.count = this.duration), (this.view.active = !0), this.view.scale.set(0.5), this.entity.addChild(this.view);
          }),
          PopPickup
        );
      })(J.a);
      var mi = (function (i) {
        var t, e;
  
        function ParticleRevive() {
          var t;
          ((t = i.call(this) || this).view = H.particle(16, 16, 1, "spraySplash")), t.addChild(t.view);
          var e = L.pick(1407438, 4308976, 2726108);
          return H.tint(t.view, e), t;
        }
        return (e = i), ((t = ParticleRevive).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), ParticleRevive;
      })(v.a);
      var fi = (function (n) {
          var t, e;
  
          function ReviveHalo(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).view = H.getEntityCloneBlend("powRevive", "effects_tex", 0.7, 3)),
              (i.view.view3d.state.depthTest = !1),
              (i.view.rotation.y = Math.PI),
              (i.view.rotation.x = -0.3),
              t.addChild(i.view),
              (i.scale = 2),
              i.view.scale.set(i.scale),
              (i.view.y = 2),
              (i.view.active = !1),
              (i.time = 0),
              (i.duration = 120),
              i
            );
          }
          (e = n), ((t = ReviveHalo).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = ReviveHalo.prototype;
          return (
            (i.update = function (t) {
              if (this.time) {
                (this.time -= t), (this.scale = 0.2 * Math.sin(0.1 * this.time) + 2), this.view.scale.set(this.scale);
                var e = 0.1 * this.duration,
                  i = 1 - (this.time - e) / (this.duration - e),
                  n = this.time / e,
                  o = this.time > e ? i : n;
                (this.view.view3d.material.opacity = 0.6 * o), (this.view.rotation.z += 0.01 * t), this.time < 0 && this.stop();
              }
            }),
            (i.play = function () {
              (this.view.active = !0), (this.time = this.duration);
            }),
            (i.stop = function () {
              (this.time = 0), (this.view.active = !1);
            }),
            ReviveHalo
          );
        })(J.a),
        gi = (function () {
          function Time() {
            (this.scale = 1), (this.current = 0), (this.delta = 0), (this._schedule = []);
          }
          var t = Time.prototype;
          return (
            (t.reset = function () {
              (this.scale = 1), (this.current = 0), (this.delta = 0), (this._schedule = []);
            }),
            (t.update = function (t) {
              (this.delta = t * this.scale), (this.current += this.delta);
              for (var e = this._schedule.length; e--; ) {
                var i = this._schedule[e];
                i.time >= this.current && (i.fn.call(i.context, i.params), this._schedule.splice(e, 1));
              }
            }),
            (t.schedule = function (t, e, i, n) {
              void 0 === i && (i = null), void 0 === n && (n = null);
              var o = {
                fn: t,
                time: this.current + e,
                context: i,
                params: n,
              };
              this._schedule.push(o);
            }),
            (Time.secs = function () {
              return new Date().getTime() / 1e3;
            }),
            Time
          );
        })();
  
      function Lane_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var yi = (function (i) {
        var t, e;
  
        function Lane(t) {
          var e;
          return ((e = i.call(this, t) || this).entity = t), (e.onBumpSideways = new et.a("onBumpSideways", 1)), e.reset(), e;
        }
        (e = i), ((t = Lane).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n,
          o,
          s,
          a = Lane.prototype;
        return (
          (a.reset = function () {
            (this.lane = 0), (this.last = 0), (this.absStep = 0), (this.changing = !1), (this.changeStartX = 0), (this.changeEndX = 0), (this.changeDuration = 0), (this.changeTime = 0), (this.queuedStep = 0), (this.queuedDuration = 0);
          }),
          (a.turnOn = function () {
            this._isOn || ((this._isOn = !0), this.entity.game.controller.onSwipeHorizontal.add(this));
          }),
          (a.turnOff = function () {
            this._isOn && ((this._isOn = !1), this.entity.game.controller.onSwipeHorizontal.remove(this));
          }),
          (a.onSwipeHorizontal = function (t) {
            this.change(t);
          }),
          (a.change = function (t) {
            if (!this.entity.jetpack.isOn() && !this.entity.pogo.isOn()) {
              if (1 === this.lane && 0 < t) return void (this.entity.body.x > B.laneWidth - 1 && this.onBumpSideways.dispatch(t));
              if (-1 === this.lane && t < 0) return void (this.entity.body.x < 1 - B.laneWidth && this.onBumpSideways.dispatch(t));
            }
            var e = 0.3 * (1 - this.entity.game.stats.speed / B.maxSpeed) + 0.1,
              i = Math.round(this.lane + t),
              n = Math.clamp(i, -1, 1),
              o = n * B.laneWidth,
              s = Math.abs(o - this.entity.body.x);
            if (s > B.laneWidth) return (this.queuedStep = t), void (this.queuedDuration = e);
            this.entity.state.set("empty"),
              (this.absStep = t < 0 ? -1 : 1),
              (this.last = this.lane),
              (this.lane = n),
              (this.queuedStep = 0),
              (this.queuedDuration = 0),
              (this.changing = !0),
              (this.changeStartX = this.entity.body.x),
              (this.changeEndX = o),
              (this.changeDuration = Math.max((e * s) / B.laneWidth, 0.1)),
              this.entity.jetpack.isOn() && (this.changeDuration *= 0.7),
              (this.changeTime = 0),
              (this._secs = gi.secs()),
              this.entity.game.sfx.play("hero_dodge");
          }),
          (a.update = function (t) {
            if (this.changing) {
              (this.changeTime += this.entity.game.deltaSecs), this.changeTime > this.changeDuration && (this.changeTime = this.changeDuration);
              var e = V.clamp(this.changeTime / this.changeDuration),
                i = V.lerp(this.changeStartX, this.changeEndX, e);
              this.entity.body.velocity.x = t ? (i - this.entity.body.x) / t : 0;
              var n = 0.05 * -(this.changeEndX - this.entity.body.x),
                o = this.entity.jetpack.isOn() || this.entity.pogo.isOn() || this.entity.hoverboard.isOn();
              (this.entity.ry = o ? 0 : n), this.changeTime >= this.changeDuration && this.changeEnd();
            }
          }),
          (a.changeEnd = function () {
            (this.entity.body.x = this.lane * B.laneWidth),
              (this.changing = !1),
              (this.entity.ry = 0),
              (this.entity.body.velocity.x = 0),
              this.queuedDuration && (this.change(this.queuedStep, this.queuedDuration), (this.queuedStep = 0), (this.queuedDuration = 0));
          }),
          (a.changeCancel = function () {
            (this.changing = !1), (this.queuedStep = 0), (this.queuedDuration = 0), (this.entity.ry = 0), (this.entity.body.velocity.x = 0);
          }),
          (a.bump = function (t) {
            this.changeCancel(), this.change(t, 0.1), this.onBumpSideways.dispatch(t), (this.entity.body.velocity.x = 0);
          }),
          (n = Lane),
          (o = [
            {
              key: "lanePos",
              get: function () {
                return this.entity.body.x / B.laneWidth;
              },
              set: function (t) {
                (t = Mathf.clamp(t, -1, 1)), (this.entity.body.x = B.laneWidth * t);
              },
            },
          ]) && Lane_defineProperties(n.prototype, o),
          s && Lane_defineProperties(n, s),
          Lane
        );
      })(J.a);
      var vi = (function (i) {
        var t, e;
  
        function Jump(t) {
          var e;
          return (e = i.call(this, t) || this).reset(), e;
        }
        (e = i), ((t = Jump).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = Jump.prototype;
        return (
          (n.reset = function () {
            (this.locked = !1), (this.isJumping = !1), (this.goingUpwards = !1), (this.gravity = B.gravity);
          }),
          (n.turnOn = function () {
            this._isOn || ((this._isOn = !0), this.entity.game.controller.onSwipeVertical.add(this));
          }),
          (n.turnOff = function () {
            this._isOn && ((this._isOn = !1), this.entity.game.controller.onSwipeVertical.remove(this));
          }),
          (n.onSwipeVertical = function (t) {
            1 == t && this.perform();
          }),
          (n.update = function (t) {
            if (!this.locked) {
              if (this.isJumping && this.goingUpwards) {
                (this.time += this.entity.game.deltaSecs), this.time > this.duration && (this.time = this.duration);
                var e = this.time / this.duration,
                  i = St.sineOut(e),
                  n = V.lerp(this.startY, this.endY, i);
                (this.entity.body.velocity.y = t ? (n - this.entity.body.y) / t : 0), 1 <= e && ((this.entity.body.velocity.y = 0), (this.goingUpwards = !1));
              } else this.entity.body.velocity.y -= this.gravity * t;
              this.entity.body.bottom <= this.entity.body.ground + 0.01 && this.entity.body.velocity.y <= 0 && ((this.entity.body.velocity.y = 0), (this.entity.body.bottom = this.entity.body.ground), this.isJumping && this.end());
            }
          }),
          (n.perform = function (t, e) {
            void 0 === t && (t = 20),
              void 0 === e && (e = !1),
              B.freejump && (e = !0),
              (!e && this.locked) ||
                (!e && this.isJumping) ||
                ((e || this.entity.body.canJump) &&
                  (this.entity.roll && this.entity.roll.cancel(),
                  this.entity.body.resetGroundChangeTolerance(),
                  (this.isJumping = !0),
                  (this.entity.body.velocity.y = 0),
                  (this.entity.body.y += 1),
                  (this.startY = this.entity.body.y),
                  (this.endY = this.startY + t - 1),
                  (this.time = 0),
                  (this.duration = 0.41),
                  (this.goingUpwards = !0),
                  this.entity.game.sfx.play("hero_jump")));
          }),
          (n.end = function () {
            (this.isJumping = !1), (this.goingUpwards = !1);
          }),
          (n.cancel = function () {
            this.end();
          }),
          (n.lock = function () {
            this.end(), (this.locked = !0);
          }),
          (n.unlock = function () {
            (this.locked = !1), (this.gravity = B.gravity);
          }),
          Jump
        );
      })(J.a);
      var _i = (function (i) {
        var t, e;
  
        function Roll(t) {
          var e;
          return ((e = i.call(this, t) || this).onStart = new et.a("onRollStart")), (e.onEnd = new et.a("onRollEnd")), e.reset(), e;
        }
        (e = i), ((t = Roll).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = Roll.prototype;
        return (
          (n.reset = function () {
            (this.locked = !1), (this.isRolling = !1), (this.gravity = B.gravity), (this.duration = 30), (this.time = 0), (this.rollingHeight = 5), (this.regularHeight = 11), (this.entity.body.height = this.regularHeight);
          }),
          (n.turnOn = function () {
            this._isOn || ((this._isOn = !0), this.entity.game.controller.onSwipeVertical.add(this));
          }),
          (n.turnOff = function () {
            this._isOn && ((this._isOn = !1), this.entity.game.controller.onSwipeVertical.remove(this));
          }),
          (n.onSwipeVertical = function (t) {
            -1 == t && this.perform();
          }),
          (n.update = function (t) {
            this.isRolling && ((this.time += t), this.time > this.duration && (this.time = this.duration), this.time === this.duration && this.end());
          }),
          (n.perform = function () {
            if (!this.locked && !this.isRolling) {
              this.onStart.dispatch(),
                this.entity.jump && this.entity.jump.cancel(),
                this.entity.sneakers.isOn() && this.entity.sneakers.jumpCancel(),
                (this.isRolling = !0),
                (this.time = 0),
                this.entity.body.landed || (this.entity.body.velocity.y = -2);
              var t = this.entity.body.bottom;
              (this.entity.body.height = this.rollingHeight), (this.entity.body.bottom = t), this.entity.game.sfx.play("hero_roll");
            }
          }),
          (n.end = function () {
            (this.isRolling = !1), (this.entity.body.height = this.regularHeight), this.entity.body.bottom < this.entity.body.ground && (this.entity.body.bottom = this.entity.body.ground), (this.time = 0), this.onEnd.dispatch();
          }),
          (n.cancel = function () {
            this.end();
          }),
          (n.lock = function () {
            this.end(), (this.locked = !0);
          }),
          (n.unlock = function () {
            this.locked = !1;
          }),
          (n.isOn = function () {
            return this._isOn;
          }),
          Roll
        );
      })(J.a);
      var bi = (function (n) {
        var t, e;
  
        function Notifier(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).ignore = ["transform", "container", "notifier"]), (i.entity = t), i;
        }
        (e = n), ((t = Notifier).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Notifier.prototype;
        return (
          (i.cacheComponents = function () {
            for (var t in ((this.comps = {}), this.entity))
              if (!(0 <= this.ignore.indexOf(t))) {
                var e = this.entity[t];
                e instanceof J.a && (this.comps[t] = e);
              }
          }),
          (i.notify = function (t) {
            this.comps || this.cacheComponents();
            for (var e = arguments.length, i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            for (var o in this.comps) {
              var s = this.comps[o];
              if (s) {
                var a = s[t];
                a && a.apply(s, i);
              }
            }
          }),
          Notifier
        );
      })(J.a);
      var wi = (function (i) {
        var t, e;
  
        function Character() {
          var t;
          (t = i.call(this) || this).add(it, {
            boxColor: 5570560,
            sensor: !0,
          }),
            (t.model = new v.a()),
            t.addChild(t.model),
            t.add(ci),
            t.add(Ye),
            t.add(di),
            t.add(He),
            t.add(Ue),
            t.add(Ve),
            t.add(Qe),
            t.add($e),
            t.add(ii),
            t.add(ui),
            t.add(yi),
            t.add(vi),
            t.add(_i),
            t.add(ei),
            t.add(bi),
            (t.body.width = 4),
            (t.body.height = 11),
            (t.body.depth = 4),
            t.anim.addAnim("0", hi.character_idle),
            t.updateModel(),
            (t.sprayCan = H.getEntityCloneOpaque("sprayCan", "props_tex", !1)),
            (t.sprayCan.x = 0.2),
            (t.sprayCan.z = -0.5),
            (t.sprayCan.y = -0.5),
            (t.sprayCan.rz = 0.5 * Math.PI),
            (t.sprayCan.ry = 0.15 * Math.PI);
          var e = t.anim.scenes[0];
          return H.findEntity("R_Hand_jnt", e.pixiTree, 10).addChild(t.sprayCan), t;
        }
        (e = i), ((t = Character).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = Character.prototype;
        return (
          (n.resetModel = function () {
            (this.model.ry = Math.PI), (this.model.rx = 0), (this.model.rz = 0), (this.model.x = -1), (this.model.y = 0.5 * -this.body.height + 1), (this.model.z = 0);
          }),
          (n.init = function () {
            this._initialized ||
              ((this._initialized = !0),
              this.add(ut),
              this.add(pi),
              (this.pop.view.y = 0),
              (this.pop.view.z = -3),
              this.anim.addAnim("1", hi.character_movement),
              this.anim.addAnim("2", hi.character_jetpack),
              this.anim.addAnim("3", hi.character_catch),
              this.anim.addAnim("4", hi.character_pogo),
              this.anim.addAnim("5", hi.character_start),
              (this.anim.debug = !0));
          }),
          (n.playIntro = function () {
            this.init(),
              this.lane.reset(),
              this.resetModel(),
              (this.z = 0),
              (this.x = -1),
              (this.body.z = 0),
              (this.body.x = 0),
              (this.body.bottom = 0),
              (this.y = this.body.bottom + 0.5 * this.body.height),
              this.anim.play("start_run", {
                sudden: !0,
                crossfade: 0,
              });
          }),
          (n.run = function () {
            (this.body.velocity.z = -this.game.stats.speed), this.player.run();
          }),
          (n.reset = function () {
            (this.model.x = 0),
              (this.z = 0),
              (this.x = 1),
              (this.body.z = 0),
              (this.body.x = 1),
              (this.body.bottom = 0),
              this.pogo.turnOff(),
              this.magnet.turnOff(),
              this.jetpack.turnOff(),
              this.sneakers.turnOff(),
              this.dizzy.turnOff(),
              this.multiplier.turnOff(),
              this.hoverboard.end(),
              this.notifier.notify("reset"),
              this.reviveHalo && this.reviveHalo.stop();
          }),
          (n.restoreSize = function () {
            (this.body.width = 4), (this.body.height = 11), (this.body.depth = 4), (this.model.position.y = 0.5 * -this.body.height + 1);
          }),
          (n.updateModel = function () {
            (this.model.position.y = 0.5 * -this.body.height + 1), (this.model.rotation.y = Math.PI);
          }),
          (n.onStateUpdate = function () {
            var t;
            this.statesReady ||
              (((t = this).state.params = {
                playing: !1,
                landed: !1,
                ascending: !1,
                descending: !1,
                dodging: !1,
                rolling: !1,
                hoverboard: !1,
                dizzy: !1,
                special: !1,
                pogo: !1,
                dead: !1,
                catch: !1,
              }),
              t.state.add("idle", new ki()),
              t.state.add("dead", new Ii()),
              t.state.add("catch", new Li()),
              t.state.add("running", new xi()),
              t.state.add("grinding", new Ci()),
              t.state.add("dodging", new Si()),
              t.state.add("ascending", new zi()),
              t.state.add("hangtime", new Ti()),
              t.state.add("descending", new Pi()),
              t.state.add("rolling", new Mi()),
              t.state.add("jetpack", new Ei()),
              t.state.add("jetpackDodging", new Oi()),
              t.state.add("pogo", new Ri()),
              t.state.addTransition("all", "idle"),
              t.state.addTransition("idle", "running"),
              t.state.addTransition("running", "dodging"),
              t.state.addTransition("running", "rolling"),
              t.state.addTransition("running", "airborne"),
              t.state.addTransition("running", "jetpack"),
              t.state.addTransition("running", "pogo"),
              t.state.addTransition("running", "grinding", !0),
              t.state.addTransition("dodging", "rolling"),
              t.state.addTransition("dodging", "running"),
              t.state.addTransition("dodging", "airborne"),
              t.state.addTransition("dodging", "jetpack"),
              t.state.addTransition("dodging", "pogo"),
              t.state.addTransition("airborne", "rolling"),
              t.state.addTransition("airborne", "running"),
              t.state.addTransition("airborne", "dodging"),
              t.state.addTransition("airborne", "jetpack"),
              t.state.addTransition("airborne", "pogo"),
              t.state.addTransition("ascending", "rolling", !0),
              t.state.addTransition("ascending", "running", !0),
              t.state.addTransition("ascending", "dodging", !0),
              t.state.addTransition("ascending", "jetpack", !0),
              t.state.addTransition("ascending", "pogo", !0),
              t.state.addTransition("hangtime", "ascending", !0),
              t.state.addTransition("hangtime", "rolling", !0),
              t.state.addTransition("hangtime", "running", !0),
              t.state.addTransition("hangtime", "dodging", !0),
              t.state.addTransition("hangtime", "jetpack", !0),
              t.state.addTransition("hangtime", "pogo", !0),
              t.state.addTransition("descending", "ascending", !0),
              t.state.addTransition("descending", "hangtime", !0),
              t.state.addTransition("descending", "rolling", !0),
              t.state.addTransition("descending", "running", !0),
              t.state.addTransition("descending", "dodging", !0),
              t.state.addTransition("descending", "jetpack", !0),
              t.state.addTransition("descending", "pogo", !0),
              t.state.addTransition("rolling", "running"),
              t.state.addTransition("rolling", "airborne"),
              t.state.addTransition("rolling", "dodging"),
              t.state.addTransition("rolling", "jetpack"),
              t.state.addTransition("rolling", "pogo"),
              t.state.addTransition("jetpack", "ascending"),
              t.state.addTransition("jetpack", "hangtime"),
              t.state.addTransition("jetpack", "descending"),
              t.state.addTransition("jetpack", "airborne"),
              t.state.addTransition("jetpack", "jetpackDodging"),
              t.state.addTransition("jetpackDodging", "jetpack"),
              t.state.addTransition("jetpackDodging", "airborne"),
              t.state.addTransition("jetpackDodging", "ascending"),
              t.state.addTransition("jetpackDodging", "hangtime"),
              t.state.addTransition("jetpackDodging", "descending"),
              t.state.addTransition("pogo", "airborne"),
              t.state.addTransition("pogo", "jetpack"),
              t.state.addTransition("pogo", "rolling"),
              t.state.addTransition("dead", "catch"),
              t.state.addTransition("catch", "all"),
              t.state.addTransition("all", "dead"),
              t.state.addTransition("dead", "idle"),
              t.state.addTransition("dead", "running"),
              t.state.addTransition("grinding", "dodging", !0),
              t.state.addTransition("grinding", "rolling", !0),
              t.state.addTransition("grinding", "airborne", !0),
              t.state.addTransition("grinding", "jetpack", !0),
              t.state.addTransition("grinding", "pogo", !0),
              t.state.addTransition("grinding", "ascending", !0),
              t.state.addTransition("grinding", "descending", !0)),
              (this.statesReady = !0);
            var e = this.state.params;
            (e.landed = this.body.landed),
              (e.ascending = !this.body.hangtime && this.body.ascending),
              (e.descending = !this.body.hangtime && this.body.descending),
              (e.rolling = this.roll.isRolling),
              (e.dead = !!this.player.deathCause),
              (e.hoverboard = this.hoverboard.isOn()),
              (e.dodging = this.lane.changing),
              (e.playing = !!this.game.state && !this.player.deathCause),
              (e.jetpack = this.jetpack.isOn()),
              (e.pogo = this.pogo.isOn()),
              (e.special = e.jetpack || e.pogo),
              (e["catch"] = !!this.player.catchMode),
              (e.grinding = this.hoverboard.grinding);
          }),
          (n.revive = function () {
            this.reviveSmoke ||
              this.add(
                We,
                {
                  EntityClass: mi,
                  container: this.game,
                  rate: 1,
                  life: 90,
                  xMod: [-10, 10],
                  yMod: [-2, 20],
                  velocityXMod: [-1, 1],
                  velocityYMod: [1, 3],
                  velocityZMod: [-1, -0.5],
                  scaleXMod: [0.8, 1.3],
                  scaleYMod: [0.8, 1.3],
                  scaleZMod: [0.8, 1.3],
                  growXMod: [0.01, 0.03],
                  growYMod: [0.01, 0.03],
                  growZMod: [0.01, 0.03],
                },
                "reviveSmoke"
              ),
              this.reviveHalo || this.add(fi),
              this.reviveHalo.play(),
              (this.reviveSmoke.data.x = this.x),
              (this.reviveSmoke.data.y = 0),
              (this.reviveSmoke.data.z = this.z),
              this.reviveSmoke.spawn(20),
              this.game.sfx.play("hero_revive");
          }),
          Character
        );
      })(v.a);
      var ki = (function () {
          function StateIdle() {
            (this.playing = !1), (this.dead = !1);
          }
          return (
            (StateIdle.prototype.begin = function () {
              this.entity.anim.play("idle", {
                loop: !0,
              });
            }),
            StateIdle
          );
        })(),
        xi = (function () {
          function StateRunning() {
            (this.playing = !0),
              (this.landed = !0),
              (this.rolling = !1),
              (this.dodging = !1),
              (this.grinding = !1),
              (this.anim = {
                normal: "run3",
                hoverboard: "h_run",
                sneakers: "superRun",
              }),
              (this.count = 0),
              (this.alt = !1),
              (this.soundSteps = !1);
          }
          var t = StateRunning.prototype;
          return (
            (t.begin = function () {
              this.count = 0;
              var t = this.entity.player.getMode(),
                e = this.anim[t];
              (this.soundSteps = "sneakers" === t),
                "hoverboard" === t &&
                  this.entity.anim.play("h_landing", {
                    loop: !1,
                    enforce: 0.3,
                  }),
                this.entity.anim.play(e, {
                  loop: !0,
                });
            }),
            (t.update = function (t) {
              if (this.soundSteps && ((this.count -= t), this.count <= 0)) {
                (this.count = 25), (this.alt = !this.alt);
                var e = this.alt ? "hero_sneakers_foot_l" : "hero_sneakers_foot_r";
                this.entity.game.sfx.play(e);
              }
            }),
            StateRunning
          );
        })(),
        Ci = (function () {
          function StateGrinding() {
            (this.playing = !0), (this.landed = !0), (this.rolling = !1), (this.dodging = !1), (this.grinding = !0), (this.ascending = !1), (this.descending = !1);
          }
          var t = StateGrinding.prototype;
          return (
            (t.begin = function () {
              var t = L.pick("1", "2", "3");
              (this.animName = "h_Grind" + t),
                this.entity.anim.play(this.animName + "_land", {
                  loop: !0,
                  enforce: 0.2,
                }),
                this.entity.anim.play(this.animName, {
                  loop: !0,
                });
            }),
            (t.update = function (t) {
              this.entity.anim.currentName === this.animName && this.entity.hoverboard.updateGrinding();
            }),
            StateGrinding
          );
        })(),
        Si = (function () {
          function StateDodging() {
            (this.playing = !0),
              (this.landed = !0),
              (this.rolling = !1),
              (this.dodging = !0),
              (this.anim = {
                normal: {
                  "-1": "dodgeLeft",
                  1: "dodgeRight",
                },
                hoverboard: {
                  "-1": "h_left",
                  1: "h_right",
                },
                sneakers: {
                  "-1": "dodgeLeft",
                  1: "dodgeRight",
                },
              });
          }
          return (
            (StateDodging.prototype.begin = function () {
              var t = this.entity.player.getMode(),
                e = this.anim[t][this.entity.lane.absStep];
              this.entity.anim.play(e);
            }),
            StateDodging
          );
        })(),
        zi = (function () {
          function StateAscending() {
            (this.playing = !0),
              (this.landed = !1),
              (this.special = !1),
              (this.rolling = !1),
              (this.ascending = !0),
              (this.descending = !1),
              (this.anim = {
                normal: ["jump", "jump2", "jump3", "jump_salto"],
                sneakers: ["jump", "jump2", "jump3", "jump_salto"],
                hoverboard: [
                  "h_jump2_kickflip_flip",
                  "h_jump3_bs360grab",
                  "h_jump4_360_flip",
                  "h_jump5_Impossible_flip",
                  "h_jump6_nollie",
                  "h_jump7_heelflip_flip",
                  "h_jump8_pop_shuvit_flip",
                  "h_jump9_fs360grab",
                  "h_jump10_heel360_flip",
                  "h_jump11_fs_salto",
                ],
              });
          }
          return (
            (StateAscending.prototype.begin = function () {
              var t = this.entity.player.getMode(),
                e = this.anim[t];
              e && this.entity.anim.play(e);
            }),
            StateAscending
          );
        })(),
        Ti = (function () {
          function StateHangtime() {
            (this.playing = !0),
              (this.landed = !1),
              (this.special = !1),
              (this.rolling = !1),
              (this.ascending = !1),
              (this.descending = !1),
              (this.anim = {
                normal: ["hangtime", "hangtime2", "hangtime3"],
                sneakers: ["hangtime", "hangtime2", "hangtime3"],
              });
          }
          return (
            (StateHangtime.prototype.begin = function () {
              var t = this.entity.player.getMode(),
                e = this.anim[t];
              e &&
                this.entity.anim.play(e, {
                  loop: !0,
                });
            }),
            StateHangtime
          );
        })(),
        Pi = (function () {
          function StateDescending() {
            (this.playing = !0),
              (this.landed = !1),
              (this.special = !1),
              (this.rolling = !1),
              (this.ascending = !1),
              (this.descending = !0),
              (this.anim = {
                normal: ["hangtime", "hangtime2", "hangtime3"],
                sneakers: ["hangtime", "hangtime2", "hangtime3"],
              });
          }
          return (
            (StateDescending.prototype.begin = function () {
              var t = this.entity.player.getMode(),
                e = this.anim[t];
              e &&
                this.entity.anim.play(e, {
                  loop: !0,
                });
            }),
            StateDescending
          );
        })(),
        Mi = (function () {
          function StateRolling() {
            (this.playing = !0),
              (this.rolling = !0),
              (this.anim = {
                normal: "roll",
                hoverboard: "h_roll",
                sneakers: "roll",
              });
          }
          return (
            (StateRolling.prototype.begin = function () {
              var t = this.entity.player.getMode(),
                e = this.anim[t];
              "hoverboard" === t &&
                this.entity.anim.play("h_jump2_kickflip_flip", {
                  sudden: !0,
                }),
                this.entity.anim.play(e, {
                  loop: !0,
                });
            }),
            StateRolling
          );
        })(),
        Ei = (function () {
          function StateJetpack() {
            (this.jetpack = !0), (this.dodging = !1);
          }
          return (
            (StateJetpack.prototype.begin = function () {
              this.entity.anim.play("Jetpack_forward", {
                loop: !0,
              });
            }),
            StateJetpack
          );
        })(),
        Oi = (function () {
          function StateJetpackDodging() {
            (this.jetpack = !0),
              (this.dodging = !0),
              (this.anim = {
                "-1": "Jetpack_changeLane_left",
                1: "Jetpack_changeLane_right",
              });
          }
          return (
            (StateJetpackDodging.prototype.begin = function () {
              var t = this.anim[this.entity.lane.absStep];
              this.entity.anim.play(t);
            }),
            StateJetpackDodging
          );
        })(),
        Ri = (function () {
          function StatePogo() {
            (this.pogo = !0), (this.anim = ["pogostick_Hangtime_flying"]);
          }
          return (StatePogo.prototype.begin = function () {}), StatePogo;
        })(),
        Ii = (function () {
          function StateDead() {
            (this.dead = !0),
              (this["catch"] = !1),
              (this.anim = {
                upper: "death_upper",
                lower: "death_lower",
                train: "death_movingTrain",
                bounce: "death_bounce",
                out: "death_bounce",
              });
          }
          return (
            (StateDead.prototype.begin = function () {
              var t = this.entity.player.deathCause,
                e = this.anim[t] || "death_bounce";
              this.entity.anim.play(e, {
                sudden: !0,
              });
            }),
            StateDead
          );
        })(),
        Li = (function () {
          function StateCatch() {
            (this.dead = !0), (this["catch"] = !0);
          }
          return (
            (StateCatch.prototype.begin = function () {
              "train" !== this.entity.player.deathCause &&
                this.entity.anim.play("Avatar_Catch_Shoulder", {
                  sudden: !0,
                });
            }),
            StateCatch
          );
        })();
  
      function Follower_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var ji = (function (n) {
        var t, e;
  
        function Follower(t, e) {
          var i;
          return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).offsetX = e.offsetX || 0), i.reset(), i;
        }
        (e = n), ((t = Follower).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          o,
          s,
          a = Follower.prototype;
        return (
          (a.reset = function () {
            this.entity.body &&
              ((this.entity.body.lane = 0),
              (this.entity.body.x = 0),
              (this.entity.body.z = 999),
              (this.entity.body.bottom = 0),
              (this.mode = Follower.DISABLED),
              (this.entity.active = !1),
              (this.near = !1),
              (this.enabled = !1),
              (this.lastGround = 0),
              (this.lastPos = 0));
          }),
          (a.update = function (t) {
            if (this.enabled) {
              t || (t = this.entity.game.delta);
              var e = this.entity.game.hero;
              e.player.running &&
                (this.mode === Follower.INTRO
                  ? this.changeMode(Follower.NEAR)
                  : this.entity.game.level.isTutorial()
                  ? this.changeMode(Follower.FAR)
                  : e.pogo.isOn() || e.jetpack.isOn()
                  ? this.changeMode(Follower.GO_AWAY)
                  : e.player.dead
                  ? "train" === e.player.deathCause
                    ? this.changeMode(Follower.GO_AWAY)
                    : this.changeMode(Follower.CATCH)
                  : e.player.dizzy
                  ? this.changeMode(Follower.NEAR)
                  : this.changeMode(Follower.FAR)),
                this.time <= this.duration && ((this.time += this.entity.game.deltaSecs), this.time > this.duration && (this.time = this.duration));
              var i = e.body.x + this.offsetX;
              (this.entity.body.x = V.lerp(this.entity.body.x, i, 0.5 * t)), e.body.landed && (this.lastGround = e.body.ground);
              var n = this.lastGround + 0.5 * (e.body.bottom - this.lastGround);
              (this.entity.body.bottom = V.lerp(this.entity.body.bottom, n, 0.5 * t)), this.entity.body.bottom > e.body.bottom && (this.entity.body.bottom = e.body.bottom);
              var o = this.curve ? this.curve(this.time / this.duration) : this.time / this.duration,
                s = V.lerp(this.distanceStart, this.distanceEnd, o);
              (this.distance = s), this.sound && this.sound.volume(1 - V.clamp(this.distance / 70, 0, 1));
            }
          }),
          (a.changeMode = function (t) {
            this.mode !== t &&
              (this.mode === Follower.FAR && t === Follower.NEAR ? this.entity.game.sfx.play("guard_proximity") : t === Follower.CATCH && this.entity.game.sfx.play("guard_catch"),
              (this.mode = t),
              (this.distanceStart = this.distance),
              (this.distanceEnd = this.mode.distance),
              (this.duration = this.mode.duration),
              (this.curve = this.mode.curve),
              (this.time = 0));
          }),
          (a.enable = function () {
            (this.enabled = !0), this.changeMode(Follower.NEAR);
          }),
          (a.disable = function () {
            (this.entity.active = !0), (this.entity.body.z = 9999), (this.enabled = !1);
          }),
          (a.playIntro = function () {
            (this.distance = 50), (this.time = this.duration = 0.01), this.enable(), this.changeMode(Follower.INTRO);
          }),
          (a.dismiss = function () {
            this.changeMode(Follower.DISABLED);
          }),
          (i = Follower),
          (o = [
            {
              key: "distance",
              set: function (t) {
                var e = this.entity.game.stats.z + t;
                this.entity.body.z = e;
              },
              get: function () {
                return this.entity.z - this.entity.game.stats.z;
              },
            },
          ]) && Follower_defineProperties(i.prototype, o),
          s && Follower_defineProperties(i, s),
          Follower
        );
      })(J.a);
      (ji.DISABLED = {
        distance: 9999,
        duration: 0.1,
        curve: null,
      }),
        (ji.FAR = {
          distance: 70,
          duration: 3,
          curve: St.sineIn,
        }),
        (ji.GO_AWAY = {
          distance: 100,
          duration: 1,
          curve: St.sineIn,
        }),
        (ji.NEAR = {
          distance: 10,
          duration: 0.6,
          curve: St.sineOut,
        }),
        (ji.CATCH = {
          distance: 0,
          duration: 0.3,
          curve: St.sineOut,
        }),
        (ji.INTRO = {
          distance: 10,
          duration: 1e-10,
          curve: St.expoOut,
        });
      var Fi = (function (e) {
        var t, i;
  
        function Cop() {
          var t;
          return (
            (t = e.call(this) || this).add(it, {
              deco: !0,
              ghost: !0,
            }),
            t.add(ji),
            t.add(ci),
            t.add(di),
            (t.body.height = 14),
            (t.body.width = 6),
            (t.body.depth = 6),
            (t.model = new v.a()),
            (t.model.y = 0.4 * -t.body.height),
            (t.model.ry = Math.PI),
            t.addChild(t.model),
            (t["catch"] = null),
            (t.catchCount = 0),
            t.scale.set(0.01),
            t
          );
        }
        (i = e), ((t = Cop).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i);
        var n = Cop.prototype;
        return (
          (n.init = function () {
            this._initialized || ((this._initialized = !0), this.anim.addAnim("movement", hi.guard_movement), this.anim.addAnim("catch", hi.guard_catch));
          }),
          (n.playIntro = function () {
            var t = this;
            this.init(),
              this.scale.set(0.01),
              (this.active = !0),
              (this.z = 999),
              (this.body.z = this.z),
              this.game.sfx.play("guard_start"),
              this.anim.play("Guard_run", {
                sudden: !0,
                loop: !1,
              }),
              this.anim.play("Guard_playIntro", {
                sudden: !0,
                crossfade: 0,
              }),
              this.follower.playIntro(),
              setTimeout(function () {
                t.scale.set(1);
              }, 100);
          }),
          (n.run = function () {
            this.init(),
              (this.active = !0),
              this.anim.play("Guard_run", {
                loop: !0,
              }),
              this.follower.enable();
          }),
          (n.reset = function () {
            this._initialized && (this.follower.reset(), (this.z = 999), (this.body.z = this.z), (this.catchCount = 0), (this["catch"] = null), (this.active = !1));
          }),
          (n.onStateUpdate = function () {
            var t;
            this.statesReady ||
              (((t = this).state.params = {
                playing: !1,
                landed: !1,
                dodging: !1,
                rolling: !1,
                catch: !1,
                hasDeathCause: !1,
              }),
              t.state.add("idle", new Ai()),
              t.state.add("running", new Di()),
              t.state.add("dodging", new Gi()),
              t.state.add("airborne", new Bi()),
              t.state.add("rolling", new Ni()),
              t.state.add("catch", new Xi()),
              t.state.addTransition("all", "idle"),
              t.state.addTransition("idle", "running"),
              t.state.addTransition("running", "dodging", !0),
              t.state.addTransition("running", "airborne", !0),
              t.state.addTransition("running", "rolling", !0),
              t.state.addTransition("airborne", "rolling", !0),
              t.state.addTransition("airborne", "dodging", !0),
              t.state.addTransition("all", "catch"),
              t.state.addTransition("catch", "idle"),
              t.state.addTransition("catch", "running")),
              (this.statesReady = !0),
              this.catchCount && ((this.catchCount -= 1), 0 === this.catchCount && (this["catch"] = !0));
            var e = this.state.params;
            (e.landed = this.game.hero.body.landed),
              (e.rolling = !!this.game.hero.player.rolling),
              (e.dodging = !!this.game.hero.body.dodging),
              (e.playing = !!this.game.state && !this.game.hero.player.deathCause),
              (e["catch"] = !!this["catch"]),
              (e.hasDeathCause = !!this.game.hero.player.deathCause);
          }),
          (n.catchHero = function () {
            this.catchCount = 10;
          }),
          Cop
        );
      })(v.a);
      var Ai = (function () {
          function StateIdle() {
            (this.playing = !1), (this["catch"] = !1);
          }
          var t = StateIdle.prototype;
          return (t.begin = function () {}), (t.end = function () {}), StateIdle;
        })(),
        Di = (function () {
          function StateRunning() {
            (this.playing = !0), (this.landed = !0), (this.rolling = !1), (this.dodging = !1);
          }
          var t = StateRunning.prototype;
          return (
            (t.begin = function () {
              this.entity.anim.play("Guard_run", {
                loop: !0,
              });
            }),
            (t.update = function () {
              !this._catchScene && this.entity.anim.scenes[1] && (this._catchScene = this.entity.anim.scenes[1].pixiTree), this._catchScene && (this._catchScene.active = !1);
            }),
            StateRunning
          );
        })(),
        Gi = (function () {
          function StateDodging() {
            (this.playing = !0),
              (this.landed = !0),
              (this.rolling = !1),
              (this.dodging = !0),
              (this.anim = {
                1: "Guard_dodgeLeft",
                "-1": "Guard_dodgeRight",
              });
          }
          return (
            (StateDodging.prototype.begin = function () {
              var t = this.anim[this.entity.game.hero.body.dodging];
              this.entity.anim.play(t, {
                sudden: !1,
              });
            }),
            StateDodging
          );
        })(),
        Bi = (function () {
          function StateAirborne() {
            (this.playing = !0), (this.landed = !1), (this.rolling = !1);
          }
          return (
            (StateAirborne.prototype.begin = function () {
              this.entity.anim.play("Guard_jump", {
                sudden: !0,
              });
            }),
            StateAirborne
          );
        })(),
        Ni = (function () {
          function StateRolling() {
            (this.playing = !0), (this.rolling = !0);
          }
          return (
            (StateRolling.prototype.begin = function () {
              this.entity.anim.play("Guard_roll", {
                loop: !0,
                sudden: !0,
              });
            }),
            StateRolling
          );
        })(),
        Xi = (function () {
          function StateCatch() {
            (this["catch"] = !0), (this.anims = ["Catch_Shoulder", "Catch_Left_Pickup", "Catch_Right_Pickup"]);
          }
          return (
            (StateCatch.prototype.begin = function () {
              if (!this.playing)
                if ("train" === this.entity.game.hero.player.deathCause) this.entity.follower.dismiss();
                else {
                  var t = this.entity.game.hero,
                    e = t.body.x,
                    i = t.body.lane * B.laneWidth,
                    n = L.item(this.anims);
                  (n = i - 4 < e && e < i + 4 ? "Catch_Shoulder" : -1 === t.player.bumpSide ? "Catch_Right_Pickup" : 1 === t.player.bumpSide ? "Catch_Left_Pickup" : "Catch_Shoulder"),
                    this.entity.anim.play("Guard_" + n, {
                      sudden: !0,
                    }),
                    this.entity.game.hero.anim.play("Avatar_" + n, {
                      sudden: !0,
                    });
                }
            }),
            StateCatch
          );
        })();
      var Yi = (function (d) {
          var t, e;
  
          function Skyline() {
            var t;
            (t = d.call(this) || this).rotation.y = Math.PI;
            var e = H.whichScene("sl_monument_4", "sl_monument_04"),
              i = H.getEntityCloneColor(e, 9490943, !1);
            t.addChild(i), (i.x = 100), (i.y = -50), (i.z = 0);
            var n = H.whichScene("sl_monument_2", "sl_monument_02"),
              o = H.getEntityCloneColor(n, 6533631, !1);
            t.addChild(o), (o.x = 0), (o.z = -30);
            var s = H.whichScene("sl_monument_3", "sl_monument_03"),
              a = H.getEntityCloneColor(s, 9490943, !1);
            t.addChild(a), (o.x = 0), (o.y = -200), (a.z = -60);
            var r = H.whichScene("sl_monument_1", "sl_monument_01"),
              h = H.getEntityCloneColor(r, 6533631, !1);
            return t.addChild(h), (o.x = 100), (h.z = -90), t;
          }
          return (e = d), ((t = Skyline).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), Skyline;
        })(v.a),
        Hi = {};
      (Hi["new"] = function () {
        return H.getEntityClone("tube");
      }),
        (Hi.new001 = function () {
          return H.getEntityClone("tube001");
        }),
        (Hi.new002 = function () {
          return H.getEntityClone("tube002");
        }),
        (Hi.spawn = function (t, e) {
          void 0 === e && (e = {}), e.z || (e.z = t.z);
          var i = t.game.pool.get(Hi["new"]);
          if (((i.x = 0), (i.y = 0), (i.z = e.z), (i.ry = Math.PI), t.game.addChild(i), "1103_seoul" === B.env)) {
            var n = t.game.pool.get(Hi.new001);
            (n.x = 0), (n.y = 0), (n.z = e.z), (n.ry = Math.PI), (n.view3d.state.blend = !0), (n.view3d.material.opacity = 0.5), t.game.addChild(n);
            var o = t.game.pool.get(Hi.new002);
            (o.x = 0), (o.y = 0), (o.z = e.z), (o.ry = Math.PI), t.game.addChild(o);
          }
        }),
        (Hi.mount = function (t) {
          for (var e = t.blocks / 2, i = 0; i < e; i++) {
            var n = t.z - i * B.blockSize * 2;
            Hi.spawn(t, {
              z: n,
            });
          }
        });
      var Ui = i(190),
        Vi = i.n(Ui),
        qi = i(191),
        Wi = i.n(qi);
      var Zi = (function (n) {
          var t, e;
  
          function SeaMaterial(t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = {});
            var i = [e.fog ? "#define FOG" : "", e.rails ? "#define RAILS" : ""];
            return (t.uniforms = O.unformGroup()), n.call(this, t, Vi.a, Wi.a, i, "sea") || this;
          }
          return (e = n), ((t = SeaMaterial).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), SeaMaterial;
        })(z.a),
        Ki = {},
        Ji = Ki;
      (Ki.newStart = function () {
        return H.getEntityClone("epic_start");
      }),
        (Ki.newStart001 = function () {
          return H.getEntityClone("epic_start001", "ocean", !1, Zi);
        }),
        (Ki.newStart002 = function () {
          return H.getEntityClone("epic_start002", "", !1, R);
        }),
        (Ki.newStart003 = function () {
          return H.getEntityClone("epic_start003", "", !1, R);
        }),
        (Ki.newMid = function () {
          return H.getEntityClone("epic_mid");
        }),
        (Ki.newMid001 = function () {
          return H.getEntityClone("epic_mid001", "", !1, R);
        }),
        (Ki.newMid002 = function () {
          return H.getEntityClone("epic_mid002", "ocean", !1, Zi);
        }),
        (Ki.newMid003 = function () {
          return H.getEntityClone("epic_mid003", "", !1, R);
        }),
        (Ki.newEnd = function () {
          return H.getEntityClone("epic_end");
        }),
        (Ki.newEnd001 = function () {
          return H.getEntityClone("epic_end001", "", !1, R);
        }),
        (Ki.newEnd002 = function () {
          return H.getEntityClone("epic_end002", "ocean", !1, Zi);
        }),
        (Ki.newEnd003 = function () {
          return H.getEntityClone("epic_end003", "", !1, R);
        }),
        (Ki.newStartAlt = function () {
          return H.getEntityClone("epic_1_start");
        }),
        (Ki.newStart001Alt = function () {
          return H.getEntityClone("epic_1_start001", "ocean", !1, Zi);
        }),
        (Ki.newStart002Alt = function () {
          return H.getEntityClone("epic_1_start002", "", !1, R);
        }),
        (Ki.newStart003Alt = function () {
          return H.getEntityClone("epic_1_start003", "", !1, R);
        }),
        (Ki.newMidAlt = function () {
          return H.getEntityClone("epic_1_mid");
        }),
        (Ki.newMid001Alt = function () {
          return H.getEntityClone("epic_1_mid001", "", !1, R);
        }),
        (Ki.newMid002Alt = function () {
          return H.getEntityClone("epic_1_mid002", "ocean", !1, Zi);
        }),
        (Ki.newMid003Alt = function () {
          return H.getEntityClone("epic_1_mid003", "", !1, R);
        }),
        (Ki.newEndAlt = function () {
          return H.getEntityClone("epic_1_end");
        }),
        (Ki.newEnd001Alt = function () {
          return H.getEntityClone("epic_1_end001", "", !1, R);
        }),
        (Ki.newEnd002Alt = function () {
          return H.getEntityClone("epic_1_end002", "ocean", !1, Zi);
        }),
        (Ki.newEnd003Alt = function () {
          return H.getEntityClone("epic_1_end003", "", !1, R);
        }),
        (Ki.spawn = function (t, e) {
          void 0 === e && (e = {}), e.z || (e.z = t.z), e.alt || (e.alt = !1), e.part || (e.part = "Start"), "1103_seoul" === B.env && (e.alt = !1);
          var i = "new" + e.part + (e.alt ? "Alt" : ""),
            n = "new" + e.part + "001" + (e.alt ? "Alt" : ""),
            o = "new" + e.part + "002" + (e.alt ? "Alt" : ""),
            s = "new" + e.part + "003" + (e.alt ? "Alt" : ""),
            a = t.game.pool.get(Ki[i]);
          if (((a.x = 0), (a.y = 0), (a.z = e.z), (a.ry = Math.PI), t.game.addChild(a), "1103_seoul" === B.env)) {
            var r = t.game.pool.get(Ki[n]);
            (r.x = 0), (r.y = 0), (r.z = e.z), (r.ry = Math.PI), t.game.addChild(r);
            var h = t.game.pool.get(Ki[o]);
            (h.x = 0), (h.y = 0), (h.z = e.z), (h.ry = Math.PI), t.game.addChild(h);
            var d = t.game.pool.get(Ki[s]);
            (d.x = 0), (d.y = 0), (d.z = e.z), (d.ry = Math.PI), t.game.addChild(d);
          }
        }),
        (Ki.mount = function (t) {
          for (var e = t.blocks, i = 12 < t.blocks, n = 0.25 * e, o = 0, s = 0; s < n; s++)
            0 === s
              ? Ki.spawn(t, {
                  z: t.z - o,
                  part: "Start",
                  alt: i,
                })
              : s < n - 1
              ? Ki.spawn(t, {
                  z: t.z - o,
                  part: "Mid",
                  alt: i,
                })
              : Ki.spawn(t, {
                  z: t.z - o,
                  part: "End",
                  alt: i,
                }),
              (o += 4 * B.blockSize);
        });
      var Qi = (function (n) {
          var t, e;
  
          function EnvironmentSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).models = []),
              (i.game = t.game),
              i.game.onRun.add(
                (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(i)
              ),
              i
            );
          }
          (e = n), ((t = EnvironmentSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = EnvironmentSystem.prototype;
          return (
            (i.run = function () {
              this.skyline || ((this.skyline = new Yi()), this.game.addChild(this.skyline));
            }),
            (i.update = function () {
              this.skyline && (this.skyline.z = this.game.stats.z - 0.95 * B.visibleMaxDistance);
            }),
            (i.setup = function (t) {
              var e = ue.environment(t.node),
                i = e ? ue.environmentType(e) : null;
              if (!i)
                if (t.node.name.match(/tunnel/)) i = ["Gates", "All"];
                else if (t.node.name.match(/epic/)) i = ["Epic", "All"];
                else if (t.node.components.RouteChunk) {
                  var n = t.node.components.RouteChunk._limitedAllowedEnvironmentKinds;
                  i = (n.length ? L.item(n)._type.split(",") : ["Fillers", "All"]) || [];
                } else i = [];
              (t.envTube = !1),
                (t.envStation = !1),
                (t.envEpic = !1),
                (t.envGates = !1),
                (t.envEmpty = !1),
                (t.envPillars = !1),
                B.forceTube || 0 <= i.indexOf("Tube")
                  ? (t.envTube = this.game.route.canSpawn("tube", t.z))
                  : 0 <= i.indexOf("Station")
                  ? (t.envStation = !0)
                  : 0 <= i.indexOf("Epic")
                  ? (t.envEpic = this.game.route.canSpawn("epic", t.z))
                  : 0 <= i.indexOf("Gates")
                  ? (t.envGates = !0)
                  : 0 <= i.indexOf("Pillars")
                  ? (t.envPillars = !0)
                  : 0 <= i.indexOf("Empty") && (t.envEmpty = !0);
            }),
            (i.mount = function (t) {
              t.envTube ? this.spawnTube(t) : t.envStation ? this.spawnStation(t) : t.envEpic ? this.spawnEpic(t) : t.envEmpty ? this.spawnRegular(t) : t.envGates ? this.spawnGates(t) : this.spawnRegular(t);
            }),
            (i.spawnEpic = function (t) {
              Ji.mount(t), this.game.route.setSpawn("epic", t.z - t.length - 1800);
            }),
            (i.spawnTube = function (t) {
              var e = t.node,
                i = t.game.pool.get(he);
              t.game.addChild(i), i.init(t, e), this.game.route.setSpawn("tube", t.z - t.length - 360);
            }),
            (i.spawnStation = function (t) {
              var e = ue.environment(t.node),
                i = (e.components.Transform.position.z, t.game.pool.get(Kt));
              i.init(t, e), t.game.addChild(i), Nt.mount(t), Yt.mount(t);
            }),
            (i.spawnGates = function (t) {}),
            (i.spawnRegular = function (t) {
              Yt.mount(t), Nt.mount(t);
            }),
            EnvironmentSystem
          );
        })(f.a),
        $i = i(127);
  
      function RouteSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var tn = (function (n) {
          var t, e;
  
          function RouteSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).game = t.game),
              i.game.onReset.add(
                (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(i)
              ),
              (i._spawns = {}),
              (i.builder = new en(i.game)),
              (i.firstPassed = !1),
              i
            );
          }
          (e = n), ((t = RouteSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i,
            o,
            s,
            a = RouteSystem.prototype;
          return (
            (a.reset = function () {
              this.builder.reset(),
                (this.firstPassed = !1),
                (this.game.stats.route = ""),
                (this._spawns = {
                  pickup: -900,
                  tube: -90,
                });
            }),
            (a.getSequence = function () {
              var t = Math.clamp(this.game.stats.level, 0, 3),
                e = [],
                i = [],
                n = [];
              if (B.routeSection) n.push(we.section("default_fallback")), n.push(we.section(B.routeSection));
              else {
                if (!this.firstPassed) {
                  var o = we.section(this.game.tutorial.enabled ? "tutorial" : "default_start");
                  n.push(o), (this.firstPassed = !0);
                }
                n.push(this.builder.getSectionByLevel(t));
              }
              for (var s = 0; s < n.length; s++) {
                var a = n[s];
                if (!(0 <= i.indexOf(a.name))) {
                  if ((i.push(a.name), a.start)) for (var r in a.start) e.push(a.start[r]);
                  if ((a.mid && e.push(L.item(a.mid)), a.end)) for (var h in a.end) e.push(a.end[h]);
                }
              }
              return e;
            }),
            (a.canSpawn = function (t, e) {
              return void 0 === this._spawns[t] || e <= this._spawns[t];
            }),
            (a.setSpawn = function (t, e) {
              this._spawns[t] = e;
            }),
            (a.resetSpawns = function () {
              (this.builder.picked = {}),
                (this._spawns = {
                  pickup: -900,
                  tube: -90,
                });
            }),
            (i = RouteSystem),
            (o = [
              {
                key: "profile",
                get: function () {
                  return this._profile || (this._profile = {}), this._profile;
                },
              },
            ]) && RouteSystem_defineProperties(i.prototype, o),
            s && RouteSystem_defineProperties(i, s),
            RouteSystem
          );
        })(f.a),
        en = (function () {
          function RouteBuilder(t) {
            (this.game = t),
              (this.minDistanceBetweenRepeats = 2700),
              (this.sectionsStart = {
                default_start: 10,
              }),
              (this.sectionsMid = {
                "default_b-s-b": 10,
                default_choice: 10,
                "default_s-b-s-b": 10,
                "default_s-s": 10,
                "default_s-s-s-s": 10,
                default_train_tops_1: 10,
                default_train_tops_2: 10,
                default_tunnel_notrain: 10,
                default_ramp_1: 10,
                default_epic: 20,
                default_1_track: 30,
                default_2_tracks: 10,
                default_train_tops_moving: 10,
                default_train_tops_moving_combined: 10,
                default_train_tops_moving_multiple: 10,
                default_tunnel: 30,
                default_epic_various: 20,
                "default_4_units_3_tracks_b-s-b": 10,
                default_4_units_3_tracks_choice: 10,
                "default_4_units_3_tracks_s-b-s-b": 10,
                "default_4_units_3_tracks_s-s": 10,
                "default_4_units_3_tracks_s-s-s-s": 10,
                default_short_1_track: 10,
                default_ramp_2: 10,
                default_short_2_tracks: 10,
                default_short_train_tops_moving_combined: 10,
                default_short_train_tops_moving_multiple: 10,
                default_short_train_tops_moving: 10,
                default_pogostick_start: 5,
                default_bonus_short: 10,
                default_bonus_long: 10,
              }),
              (this.levels = ["easy", "normal", "hard", "expert"]),
              this.reset();
          }
          var t = RouteBuilder.prototype;
          return (
            (t.reset = function () {
              (this.picked = {
                default_tunnel: 1,
                default_tunnel_notrain: 1,
              }),
                (this.level = 0),
                (this.availableSections = {}),
                this.addAvailableSections("easy");
            }),
            (t.getSectionByLevel = function (t) {
              if (t > this.level) {
                this.level = t;
                var e = this.levels[this.level];
                this.addAvailableSections(e), 2 == t && (this.addAvailableSection("default_bonus_short"), this.addAvailableSection("default_bonus_long"), this.addAvailableSection("default_pogostick_start"));
              }
              for (var i in this.picked) this.game.stats.distance > this.picked[i] && delete this.picked[i];
              var n = Object.assign({}, this.availableSections);
              for (var o in this.picked) delete n[o];
              var s = L.item(n);
              if (!s) throw new Error("No section available");
              return (
                s.__shortname.match("default_tunnel")
                  ? ((this.picked.default_tunnel = this.game.stats.distance + 0.75 * this.minDistanceBetweenRepeats), (this.picked.default_tunnel_notrain = this.game.stats.distance + 0.75 * this.minDistanceBetweenRepeats))
                  : (this.picked[s.__shortname] = this.game.stats.distance + this.minDistanceBetweenRepeats),
                s
              );
            }),
            (t.addAvailableSections = function (t) {
              var e = $i["default"][t]["default"];
              for (var i in e) this.addAvailableSection(e[i]);
            }),
            (t.addAvailableSection = function (t) {
              "string" == typeof t && (t = we.section(t));
              var e = t.name.replace("routeSection_", "").replace("route_section_", "");
              this.sectionsMid[e] && ((this.availableSections[e] = t).__shortname = e);
            }),
            RouteBuilder
          );
        })(),
        nn = i(7);
  
      function Label_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var on = {
          basic: {
            align: "center",
            fill: 16777215,
            fontSize: 50,
            fontFamily: "Titan One",
            lineJoin: "round",
            dropShadow: !1,
            dropShadowDistance: 3,
            anchor: 0.5,
            maxWidth: 0,
          },
          title: {
            align: "center",
            fill: 211825,
            fontSize: 70,
            fontFamily: "Titan One",
            dropShadow: !1,
            dropShadowDistance: 2,
            anchor: 0.5,
          },
          subtitle: {
            align: "center",
            fill: 211825,
            fontSize: 60,
            fontFamily: "Titan One",
            dropShadow: !1,
            dropShadowDistance: 2,
            anchor: 0.5,
          },
          small: {
            align: "center",
            fill: 211825,
            fontSize: 50,
            fontFamily: "Titan One",
          },
        },
        sn = (function (s) {
          var t, e;
  
          function Label(t, e, i) {
            var n;
            void 0 === e && (e = "basic"), void 0 === i && (i = {}), (n = s.call(this) || this);
            var o = "string" == typeof e ? on[e] : e;
            return (
              (e = Object.assign({}, on.basic, o, i)),
              (n._text = new c.Text(t, e)),
              n._text.anchor.set(e.anchor),
              n.addChild(n._text),
              void 0 !== e.anchorX && (n._text.anchor.x = e.anchorX),
              void 0 !== e.anchorY && (n._text.anchor.y = e.anchorY),
              e.x && (n.x = e.x),
              e.y && (n.y = e.y),
              e.maxWidth && (n.maxWidth = e.maxWidth),
              e.icon && ((n.icon = c.Sprite.from(e.icon)), n.icon.anchor.set(0.5), n.addChild(n.icon), (n.icon.x = 0), n.update()),
              n
            );
          }
          (e = s), ((t = Label).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i,
            n,
            o,
            a = Label.prototype;
          return (
            (a.update = function () {
              if ((this.maxWidth && this._text.width > this.maxWidth && ((this._text.scale.x = 1), (this._text.width = this.maxWidth), (this._text.scale.y = this._text.scale.x)), this.icon)) {
                (this._text.x = 0), (this.icon.x = this._text.x - 0.5 * this._text.width - 0.5 * this.icon.width - 5);
                var t = 0.5 * (this.width - this._text.width);
                (this.icon.x += t), (this._text.x += t);
              }
            }),
            (a.prompt = function () {
              if (!this._prompting) {
                this._prompting = !0;
                var t = window.prompt(this.description, this.text);
                t && (this.text = t), (this._prompting = !1), this.emit("change", this.text);
              }
            }),
            (i = Label),
            (n = [
              {
                key: "text",
                get: function () {
                  return this._text.text;
                },
                set: function (t) {
                  this._text.text !== t && ((this._text.text = t), this.update());
                },
              },
              {
                key: "editable",
                get: function () {
                  return !!this._editable;
                },
                set: function (t) {
                  (this._editable = t), (this.interactive = t), (this.buttonMode = t), void 0 === this.description && (this.description = "Set text"), this[this._editable ? "on" : "off"]("pointertap", this.prompt, this);
                },
              },
            ]) && Label_defineProperties(i.prototype, n),
            o && Label_defineProperties(i, o),
            Label
          );
        })(c.Container),
        an = i(131);
  
      function TutorialSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function TutorialSystem_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
  
      function TutorialSystem_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var rn = (function (n) {
          function TutorialSystem(t, e) {
            var i;
            return (
              void 0 === e && (e = {}),
              ((i = n.call(this, t, e) || this).view = new c.Container()),
              (i.game = t.game),
              i.game.onRun.add(TutorialSystem_assertThisInitialized(i)),
              i.game.onPause.add(TutorialSystem_assertThisInitialized(i)),
              i.game.onResume.add(TutorialSystem_assertThisInitialized(i)),
              i
            );
          }
          TutorialSystem_inheritsLoose(TutorialSystem, n);
          var t,
            e,
            i,
            o = TutorialSystem.prototype;
          return (
            (o.run = function () {
              this._enabled && this.show();
            }),
            (o.pause = function () {
              this._enabled && (this.view.visible = !1);
            }),
            (o.resume = function () {
              this._enabled && (this.view.visible = !0);
            }),
            (o.build = function () {
              this._built || ((this._built = !0), (this.arrow = new hn()), this.view.addChild(this.arrow), (this.msg = new dn(this.game.app)), this.view.addChild(this.msg), this.resize());
            }),
            (o.show = function () {
              this._enabled && (this.build(), this.game.stage.addChild(this.view), this.game.hero.hoverboard.lock());
            }),
            (o.hide = function () {
              this.game.stage.removeChild(this.view);
            }),
            (o.enterTrigger = function (t) {
              this._enabled && (this.game.stats.distanceDelta < 0 || (this.arrow.show(t), this.msg.show(t, this.arrow.visible), "hoverboard" === t && ((this.game.stats.hoverboards = 2), this.game.hero.hoverboard.unlock())));
            }),
            (o.exitTrigger = function (t) {}),
            (o.update = function (t) {
              this._enabled && (this.arrow && this.arrow.update(t), this.msg && this.msg.update(t));
            }),
            (o.resize = function (t, e, i) {
              (this.sw = t || this.sw),
                (this.sh = e || this.sh),
                (this.sr = i || this.sr),
                (this.s = this.sh / (667 * this.sr)),
                (this.w = this.sw / this.s),
                (this.h = this.sh / this.s),
                this.view.scale.set(this.s),
                (this.view.x = this.sw / 2),
                (this.view.y = this.sh / 2);
            }),
            (t = TutorialSystem),
            (e = [
              {
                key: "enabled",
                get: function () {
                  return this._enabled;
                },
                set: function (t) {
                  this._enabled = t;
                },
              },
            ]) && TutorialSystem_defineProperties(t.prototype, e),
            i && TutorialSystem_defineProperties(t, i),
            TutorialSystem
          );
        })(f.a),
        hn = (function (e) {
          function Arrow() {
            var t;
            return (
              ((t = e.call(this) || this).img = c.Sprite.from("tutorial_arrow.png")), t.img.anchor.set(0.5), t.img.scale.set(2), (t.img.alpha = 0.5), t.addChild(t.img), (t.visible = !1), (t.time = 0), (t.duration = 0), (t.animRange = 300), t
            );
          }
          TutorialSystem_inheritsLoose(Arrow, e);
          var t = Arrow.prototype;
          return (
            (t.show = function (t, e) {
              void 0 === e && (e = 40);
              var i = {
                up: 0,
                right: 1,
                down: 2,
                left: 3,
              };
              void 0 !== i[t] && ((this.visible = !0), (this.rotation = V.PI_HALF * i[t]), (this.time = 0), (this.duration = e), (this.img.y = this.animRange));
            }),
            (t.hide = function () {
              this.visible = !1;
            }),
            (t.update = function (t) {
              if (this.visible) {
                this.time += t;
                var e = this.time / this.duration;
                (this.img.y = this.animRange - 2 * this.animRange * e), 1 < e && this.hide();
              }
            }),
            Arrow
          );
        })(c.Container),
        dn = (function (i) {
          function Msg(t) {
            var e;
            return (
              ((e =
                i.call(this, "MSG", {
                  align: "center",
                  fill: 16777215,
                  fontSize: 50,
                  fontFamily: "Lilita One",
                  stroke: "black",
                  strokeThickness: 5,
                  anchor: 0.5,
                }) || this).app = t),
              (e.visible = !1),
              (e.time = 0),
              (e.duration = 60),
              e
            );
          }
          TutorialSystem_inheritsLoose(Msg, i);
          var t = Msg.prototype;
          return (
            (t.show = function (t, e) {
              var i = B.mobile ? "" : "_desktop",
                n = this.app.strings.get("tutorial_" + t + i);
              n || (n = this.app.strings.get("tutorial_" + t)),
                n &&
                  ((this.text = n),
                  (this.visible = !0),
                  (this.time = 0),
                  (this.duration = 20 + 2 * n.length),
                  (this.scale.y = 0),
                  an.a.to(this.scale, 0.01, {
                    y: 1,
                  }),
                  (this.y = e ? 300 : 0),
                  (this.showing = !0));
            }),
            (t.hide = function () {
              var t = this;
              (this.showing = !1),
                an.a.to(this.scale, 0.1, {
                  y: 0,
                  onComplete: function () {
                    t.visible = !1;
                  },
                });
            }),
            (t.update = function (t) {
              this.visible && this.showing && ((this.time += t), this.time > this.duration && this.hide());
            }),
            Msg
          );
        })(sn);
  
      function IntroSystem_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function IntroSystem_createClass(t, e, i) {
        return e && IntroSystem_defineProperties(t.prototype, e), i && IntroSystem_defineProperties(t, i), t;
      }
      var ln = (function (n) {
          var t, e;
  
          function IntroSystem(t, e) {
            var i;
            return void 0 === e && (e = {}), ((i = n.call(this, t, e) || this).game = t.game), (i.onIntroComplete = new et.a("onIntroComplete")), (i.time = 0), (i.duration = 60), (i.playing = !1), i;
          }
          (e = n), ((t = IntroSystem).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = IntroSystem.prototype;
          return (
            (i.update = function (t) {
              this.playing && (this.step1 && this.step1.update(t), this.step2 && this.step2.update(t), this.step3 && this.step3.update(t));
            }),
            (i.preupdate = function (t) {
              this.playing && (t || (t = this.game.delta), (this.time += t), this.time >= this.duration && (this.time = this.duration), this.time >= this.duration && this.complete());
            }),
            (i.play = function () {
              (this.playing = !0),
                this.game.camera.takeControl(),
                this.game.camera.updateIdle(0),
                (this.time = 0),
                (this.step1 = new un("step1", this.game.camera.rig, 0.4 * this.duration)),
                (this.step1.to.idleX = -16.49361),
                (this.step1.to.idleY = -8.666094),
                (this.step1.to.idleZ = 12.52404),
                (this.step1.to.idleRotX = 23.52661 * V.DEG_TO_RAD),
                (this.step1.to.idleRotY = 55.26425 * V.DEG_TO_RAD),
                (this.step1.to.mainX = 0),
                (this.step1.to.mainY = B.cameraPosY),
                (this.step1.to.mainZ = B.cameraPosZ),
                (this.step1.to.mainRotX = B.cameraRotX),
                (this.step1.to.mainRotY = 0),
                (this.step2 = new un("step2", this.game.camera.rig, 0.3 * this.duration)),
                (this.step2.to.idleX = -16.49361),
                (this.step2.to.idleY = -8.666094),
                (this.step2.to.idleZ = 12.52404),
                (this.step2.to.idleRotX = 23.30551 * V.DEG_TO_RAD),
                (this.step2.to.idleRotY = 55.47934 * V.DEG_TO_RAD),
                (this.step2.to.mainX = 0),
                (this.step2.to.mainY = B.cameraPosY),
                (this.step2.to.mainZ = B.cameraPosZ),
                (this.step2.to.mainRotX = B.cameraRotX),
                (this.step2.to.mainRotY = 0),
                (this.step3 = new un("step3", this.game.camera.rig, 0.3 * this.duration)),
                (this.step3.to.idleX = 0),
                (this.step3.to.idleY = 0),
                (this.step3.to.idleZ = 0),
                (this.step3.to.idleRotX = 0),
                (this.step3.to.idleRotY = 0),
                (this.step3.to.mainX = 0),
                (this.step3.to.mainY = B.cameraPosY),
                (this.step3.to.mainZ = B.cameraPosZ),
                (this.step3.to.mainRotX = B.cameraRotX),
                (this.step3.to.mainRotY = 0),
                (this.step3.to.fov = B.cameraFov),
                (this.step3.curve = St.quintIn),
                (this.step1.next = this.step2),
                (this.step2.next = this.step3),
                this.step1.play();
            }),
            (i.complete = function () {
              (this.playing = !1), this.game.camera.releaseControl(), this.onIntroComplete.dispatch(), this.game.runFromIntro();
            }),
            IntroSystem_createClass(IntroSystem, [
              {
                key: "ratio",
                get: function () {
                  return this.time / this.duration;
                },
              },
            ]),
            IntroSystem
          );
        })(f.a),
        cn = (function () {
          function CameraPos(t) {
            (this.idleX = 0), (this.idleY = 0), (this.idleZ = 0), (this.idleRotX = 0), (this.idleRotY = 0), (this.mainX = 0), (this.mainY = 0), (this.mainZ = 0), (this.mainRotX = 0), (this.mainRotY = 0), (this.fov = 60), t && this.copy(t);
          }
          return (
            (CameraPos.prototype.copy = function (t) {
              (this.idleX = t.idleX),
                (this.idleY = t.idleY),
                (this.idleZ = t.idleZ),
                (this.idleRotX = t.idleRotX),
                (this.idleRotY = t.idleRotY),
                (this.mainX = t.mainX),
                (this.mainY = t.mainY),
                (this.mainZ = t.mainZ),
                (this.mainRotX = t.mainRotX),
                (this.mainRotY = t.mainRotY),
                (this.fov = t.fov);
            }),
            CameraPos
          );
        })(),
        un = (function () {
          function CameraAnim(t, e, i) {
            void 0 === i && (i = 1), (this.name = t), (this.rig = e), (this.from = new cn(this.rig)), (this.to = new cn(this.rig)), (this.curve = St.sineInOut), (this.time = 0), (this.duration = i), (this.next = null);
          }
          var t = CameraAnim.prototype;
          return (
            (t.play = function () {
              (this.playing = !0), (this.time = 0), (this.from = new cn(this.rig));
            }),
            (t.update = function (t) {
              if (this.playing) {
                (this.time += t), this.time >= this.duration && (this.time = this.duration);
                var e = this.curve ? this.curve(this.ratio) : this.ratio;
                (this.rig.idleX = V.lerp(this.from.idleX, this.to.idleX, e)),
                  (this.rig.idleY = V.lerp(this.from.idleY, this.to.idleY, e)),
                  (this.rig.idleZ = V.lerp(this.from.idleZ, this.to.idleZ, e)),
                  (this.rig.idleRotX = V.lerp(this.from.idleRotX, this.to.idleRotX, e)),
                  (this.rig.idleRotY = V.lerp(this.from.idleRotY, this.to.idleRotY, e)),
                  (this.rig.mainX = V.lerp(this.from.mainX, this.to.mainX, e)),
                  (this.rig.mainY = V.lerp(this.from.mainY, this.to.mainY, e)),
                  (this.rig.mainZ = V.lerp(this.from.mainZ, this.to.mainZ, e)),
                  (this.rig.mainRotX = V.lerp(this.from.mainRotX, this.to.mainRotX, e)),
                  (this.rig.mainRotY = V.lerp(this.from.mainRotY, this.to.mainRotY, e)),
                  (this.rig.fov = V.lerp(this.from.fov, this.to.fov, e)),
                  this.time >= this.duration && this.complete();
              }
            }),
            (t.complete = function () {
              (this.playing = !1), (this.time = this.duration), this.next && this.next.play();
            }),
            IntroSystem_createClass(CameraAnim, [
              {
                key: "ratio",
                get: function () {
                  return this.time / this.duration;
                },
                set: function (t) {
                  this.time = this.duration * V.clamp(t);
                },
              },
            ]),
            CameraAnim
          );
        })();
  
      function Game_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      c.DisplayObject.prototype.depthOffset = 0;
      var pn = (function (a) {
        var t, e;
  
        function Game(t, e, i) {
          var n;
          void 0 === e && (e = null);
          var o = new c.Container(),
            s = {
              stage: o,
              camera: new p.a(),
              renderer: t.renderer,
            };
          return (
            ((n = a.call(this, s) || this).app = t),
            (n.w = 512),
            (n.h = 512),
            (n.s = 1),
            n.app.renderer.addSystem(Ne, "bg"),
            we.init(t.resourceManager.resources),
            H.refreshCache(),
            we.refreshCache(),
            (n.config = e || B),
            (n.stage = o),
            (n.bendX = 0),
            (n.bendY = 0),
            (n.aspectRatio = 1),
            (n.blurred = !1),
            (n.sfx = i),
            (n.onReset = new et.a("reset")),
            (n.onIdle = new et.a("idle")),
            (n.onRun = new et.a("run")),
            (n.onPause = new et.a("pause")),
            (n.onResume = new et.a("resume")),
            (n.onGameover = new et.a("gameover")),
            (n.onRevive = new et.a("revive")),
            (n.onEnterTunnel = new et.a("enterTunnel")),
            (n.onExitTunnel = new et.a("exitTunnel")),
            n.addSystem(W, {}),
            n.addSystem(Ie, {}),
            n.addSystem(xe, {}),
            n.addSystem(ke, {}),
            n.addSystem(Pe, {}),
            n.addSystem(Re, {}),
            n.addSystem(Fe, {}),
            n.addSystem(Qi, {}),
            n.addSystem(tn, {}),
            n.addSystem(rn, {}),
            n.addSystem(ln, {}),
            (e.debug || e.shortcuts) && n.addSystem(Be, {}),
            (n.view3d.ambientLight.intensity = 1),
            (n.hero = new wi()),
            n.addChild(n.hero),
            (n.cop = new Fi()),
            n.addChild(n.cop),
            n
          );
        }
        (e = a), ((t = Game).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i,
          n,
          o,
          s = Game.prototype;
        return (
          (s.onFocus = function () {
            (this.blurred = !1), this.sfx.unmute();
          }),
          (s.onBlur = function () {
            (this.blurred = !0), this.sfx.mute(), this.state === Game.RUNNING && this.pause();
          }),
          (s.reset = function () {
            this.hero &&
              ((this.time = 0),
              (this.timeScale = this.config.timeScale),
              (this.delta = 0),
              (this.secs = 0),
              (this.bendX = 0),
              (this.bendY = 0),
              this.hero.reset(),
              this.cop && this.cop.reset(),
              this.dog && this.dog.reset(),
              this.hud.clearMessage(),
              this.onReset.run(),
              this.forceUpdate());
          }),
          (s.updateAnimFrame = function (t) {
            if (!(B.frameSkip && (this._o || (this._o = 0), (this._o += 1), this._o % B.frameSkip))) {
              void 0 === this._lastTime && (this._lastTime = t);
              var e = t,
                i = e - this._lastTime;
              this._lastTime = e;
              var n = i / (1e3 / 60);
              this.update(n);
            }
          }),
          (s.updateTicker = function (t) {
            if (B.frameSkip) {
              if ((this._o || (this._o = 0), this._acc || (this._acc = 0), (this._acc += t), (this._o += 1), this._o % B.frameSkip)) return;
              (t = this._acc), (this._acc = 0);
            }
            this.update(t);
          }),
          (s.update = function (t, e) {
            if ((void 0 === e && (e = !0), !this.app.suspended && !this.app.crashed)) {
              if ((t > B.deltaCap && (t = B.deltaCap), 1 !== !this.timeScale && (t *= this.timeScale), B.smoothDelta ? (this.delta -= 0.2 * (this.delta - t)) : (this.delta = t), B.frameByFrame && this.state !== Game.RUNNING)) {
                if ((this._accDelta || (this._accDelta = 0), (this._accDelta += 1 / 60 / B.frameByFrame), this._accDelta < 1)) return;
                (this.delta = 1), (this._accDelta = 0);
              }
              if (((this.fps = (1 / this.delta) * B.fps), (this.targetDelta = 1), (this.targetDeltaSecs = 1 / B.fps), (this.deltaSecs = this.delta / B.fps), this.state !== Game.PAUSED)) {
                if (((this.time += this.delta), (this.secs += this.deltaSecs), this.state === Game.RUNNING ? ((this.stats.time += this.deltaSecs), (this.stats.delta = this.deltaSecs)) : (this.stats.delta = 0), this.config.bend)) {
                  (this.bendX = B.bendX * this.aspectRatio), (this.bendY = B.bendY);
                  var i = O.unformGroup();
                  (i.uBend[0] = this.bendX), (i.uBend[1] = this.bendY), (i.uTime = this.secs);
                }
                this._addEntities(),
                  this._removeEntities(),
                  this.onPreupdate.run(),
                  this._removeEntities(),
                  this.onUpdateEntities.run(this.delta),
                  this._removeEntities(),
                  this.onPostupdate.run(),
                  this.updateAndRender && e && this.render(this.delta, 1);
              }
            }
          }),
          (s.forceUpdate = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = !1), (this.delta = t), this.update(t, e);
          }),
          (s.idle = function () {
            this.state === Game.RUNNING && nn.a.SDK.gameplayStop(),
              (this.tutorial.enabled = this.app.user.tutorial || B.tutorial),
              this.reset(),
              (this.state = Game.IDLE),
              this.hero.player.reset(0, 1.2),
              this.cop && this.cop.reset(),
              this.onIdle.run(),
              B.loadAll && (this.level.queueNextChunk(), this.level.queueNextChunk(), this.level.queueNextChunk()),
              this.forceUpdate();
          }),
          (s.run = function () {
            this.state !== Game.RUNNING &&
              (H.refreshCache(),
              we.refreshCache(),
              this.hud.build(),
              this.hero.init(),
              (this.state = Game.RUNNING),
              this.reset(),
              this.onRun.run(),
              this.playTheme(),
              this.cop && this.cop.run(),
              this.hero.run(),
              nn.a.SDK.gameplayStart(),
              nn.a.sendCustomMessage("game", "roundStart", {}),
              this.sfx.volume(this.app.settings.sound ? this.config.volume : 0));
          }),
          (s.runWithIntro = function () {
            var t = this;
            B.loadAll || (H.refreshCache(), we.refreshCache(), this.level.queueNextChunk(), this.level.queueNextChunk(), this.level.queueNextChunk()),
              nn.a.SDK.gameplayStart(),
              nn.a.sendCustomMessage("game", "roundStart", {}),
              this.playTheme(),
              this.sfx.volume(this.app.settings.sound ? this.config.volume : 0);
            var e = this._firstIntroPassed ? 50 : 300;
            this.cop.scale.set(0.01),
              setTimeout(function () {
                t.hero.playIntro(), t.cop.playIntro(), t.intro.play(), t.forceUpdate(3);
              }, e),
              (this._firstIntroPassed = !0);
          }),
          (s.runFromIntro = function () {
            this.hud.build(), this.cop && this.cop.run(), this.hero.run(), this.camera.run(), this.onRun.run(), (this.state = Game.RUNNING);
          }),
          (s.pause = function () {
            this.state === Game.RUNNING && ((this.state = Game.PAUSED), this.onPause.run(), nn.a.SDK.gameplayStop());
          }),
          (s.resume = function (t) {
            void 0 === t && (t = 0), this.state === Game.PAUSED && (t ? this.hud.runCountdown(t, this.resume.bind(this)) : ((this.state = Game.RUNNING), this.onResume.run(), nn.a.SDK.gameplayStart()));
          }),
          (s.gameover = function () {  
            (this.state = Game.GAMEOVER), this.hero.player.stop(), this.cop && this.cop.catchHero(), this.hero && this.onGameover.run(), nn.a.SDK.gameplayStop(), nn.a.sendCustomMessage("game", "roundEnd", {});
          }),
          (s.revive = function (t) {
            var e = this;
            void 0 === t && (t = 0),
              this.state !== Game.RUNNING &&
                (this.hero.player.reset(this.hero.body.z, this.hero.body.x, this.hero.body.lane),
                (this.hero.active = !1),
                this.cop && this.cop.reset(),
                t
                  ? this.hud.runCountdown(t, this.revive.bind(this))
                  : ((this.state = Game.RUNNING),
                    (this.hero.active = !0),
                    this.hero.revive(),
                    this.onRevive.run(),
                    this.hero.player.run(0),
                    this.cop && this.cop.run(),
                    nn.a.SDK.gameplayStart(),
                    setTimeout(function () {
                      e.level.reshuffle();
                    }, 0)));
          }),
          (s.resize = function (t, e, i) {
            (this.aspectRatio = e / t), (this.w = t), (this.h = e), (this.s = i), this.hud && this.hud.resize(t, e, i), this.tutorial && this.tutorial.resize(t, e, i), this.controller && this.controller.resize(t, e);
          }),
          (s.playTheme = function () {
            !this.playingTheme &&
              B.theme &&
              ((this.playingTheme = !0),
              this.sfx.volume(this.config.volume),
              this.sfx.play("theme", {
                theme: !0,
              }),
              this.sfx.loadAll());
          }),
          (s.enterTunnel = function () {
            this.onEnterTunnel.run();
          }),
          (s.exitTunnel = function () {
            this.onExitTunnel.run();
          }),
          (i = Game),
          (n = [
            {
              key: "profile",
              get: function () {
                return {
                  fps: this.fps,
                  deltaStep: this.delta,
                  deltaSecs: this.deltaSecs,
                  objects: this.allEntities.length,
                  entities: this.level.entities.length,
                };
              },
            },
          ]) && Game_defineProperties(i.prototype, n),
          o && Game_defineProperties(i, o),
          Game
        );
      })(s.a);
      (pn.IDLE = 0), (pn.RUNNING = 1), (pn.PAUSED = 2), (pn.GAMEOVER = 3);
      var mn = i(47),
        fn = i(23);
      mn.a.addSound = function (t, e, i) {
        if (!this.disabled) {
          for (var n = "", o = 1, s = null, a = 0; a < e.length; a++) "/" === e[a] && (s = a);
          for (null !== s && (n = e.slice(s + 1, e.length)), e = n; this.exists(n); ) (n = e + "-" + o), o++;
          i = i || {};
          var r = new Howl({
            src: t,
            preload: this.preload,
            autoplay: i.autoplay || !1,
            loop: i.loop || !1,
            volume: i.volume,
          });
          i.autoplay && (this.preload || r.load(), r.play()), (r.realVolume = i.volume || 1), (this.sounds[n] = r);
        }
      };
      var gn = (function () {
        function SoundFX(t) {
          void 0 === t && (t = !1),
            (this._volume = 1),
            mn.a.disableVisibility(),
            (mn.a._visibilityActive = !1),
            (mn.a.mute = function () {}),
            (mn.a.unmute = function () {}),
            fn.Howler.volume(this._volume),
            (this.map = {}),
            (this.disabled = t);
        }
        var t = SoundFX.prototype;
        return (
          (t.setup = function (t, e) {
            for (var i in t) {
              var n = i.split("/").pop();
              this.map[n] = {
                key: i,
                path: e + "/" + i,
              };
            }
          }),
          (t.load = function (t) {
            if (!this.disabled) {
              var e = this.map[t];
              if (!e.added) {
                e.added = !0;
                var i = e.path,
                  n = [i + ".ogg?h=1gefxm5mjzi8pjlr", i + ".mp3?h=1gefxm5mjzi8pjlr"];
                mn.a.addSound(n, e.key, {});
              }
            }
          }),
          (t.loadAll = function () {
            if (!this.disabled) for (var t in this.map) this.load(t);
          }),
          (t.play = function (t, e) {
            var i = void 0 === e ? {} : e,
              n = i.volume,
              o = void 0 === n ? null : n,
              s = i.loop,
              a = void 0 === s ? null : s,
              r = i.theme,
              h = void 0 === r ? null : r;
            if (!this.disabled) {
              this.load(t);
              var d = mn.a.play(t);
              return (
                d &&
                  (null !== o && d.volume(o),
                  null !== a && d.loop(a),
                  null !== h &&
                    d.on("end", function () {
                      return d.play();
                    })),
                d
              );
            }
          }),
          (t.stop = function (t) {
            this.disabled || mn.a.stop(t);
          }),
          (t.volume = function (t) {
            if (!this.disabled) return void 0 !== t && ((this._volume = t), fn.Howler.volume(t)), this._volume;
          }),
          (t.mute = function () {
            fn.Howler.mute(!0), fn.Howler.volume(0);
          }),
          (t.unmute = function () {
            fn.Howler.mute(!1), fn.Howler.volume(this._volume);
          }),
          SoundFX
        );
      })();
  
      function Section_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      var yn = {
          w: 512,
          h: 512,
          single: !0,
        },
        vn = (function () {
          function Section(t, e) {
            void 0 === t && (t = ""),
              void 0 === e && (e = {}),
              (this.name = t),
              (this.owner = null),
              (this.subs = {}),
              (this.view = new c.Container()),
              (this.container = null),
              (this._opened = !1),
              (this._built = !1),
              (this.ticker = new c.Ticker()),
              this.ticker.stop(),
              (this.on = {
                build: new l.a(),
                resize: new l.a(),
                open: new l.a(),
                close: new l.a(),
                openSub: new l.a(),
              }),
              this.on.build.add(this.onBuild, this),
              this.on.resize.add(this.onResize, this),
              this.on.open.add(this.onOpen, this),
              this.on.close.add(this.onClose, this),
              this.setup(e);
          }
          var t,
            e,
            i,
            n = Section.prototype;
          return (
            (n.setup = function (t) {
              void 0 === t && (t = {}), (this.config = Object.assign({}, yn, t)), (this.w = this.config.w), (this.h = this.config.h), (this.s = 1);
            }),
            (n.addSub = function (t) {
              this.subs[t.name] || (((this.subs[t.name] = t).w = this.w), (t.h = this.h), (t.owner = this), (t.container = this.view));
            }),
            (n.build = function () {
              this._built || ((this._built = !0), this.on.build.dispatch());
            }),
            (n.open = function (t) {
              if (
                (this._opened ||
                  (this.config.single && this.closeOthers(), (this._opened = !0), this.owner && this.owner.open(), this._built || this.build(), this.resize(), this.container && this.container.addChild(this.view), this.on.open.dispatch()),
                t && t.length)
              ) {
                var e = Array.isArray(t) ? t : t.split("/"),
                  i = e.shift(),
                  n = this.subs[i];
                if (!n) throw new Error("Sub section not found: " + i + " path to open: " + t);
                this.on.openSub.dispatch(n.name), n.open(e);
              }
            }),
            (n.close = function () {
              for (var t in this.subs) this.subs[t].close();
              this._opened && this.on.close.dispatch(), this.view.parent && this.view.parent.removeChild(this.view), (this._opened = !1), this.ticker.stop();
            }),
            (n.closeOthers = function () {
              if (this.owner)
                for (var t in this.owner.subs) {
                  var e = this.owner.subs[t];
                  e !== this && e.close();
                }
            }),
            (n.closeSubs = function () {
              for (var t in this.subs) this.subs[t].close();
            }),
            (n.resize = function (t, e, i) {
              for (var n in ((this.sw = t || this.sw),
              (this.sh = e || this.sh),
              (this.sr = i || this.sr),
              (this.s = this.sh / (667 * this.sr)),
              (this.w = this.sw / this.s),
              (this.h = this.sh / this.s),
              this.owner || this.view.scale.set(this.s),
              this.on.resize.dispatch(),
              this.subs)) {
                var o = this.subs[n];
                (o.w = this.w), (o.h = this.h), (o.s = this.s), (o.sw = this.sw), (o.sh = this.sh), (o.sr = this.sr), o._opened && o.resize(this.sw, this.sh, this.sr);
              }
            }),
            (n.onBuild = function () {}),
            (n.onResize = function () {}),
            (n.onOpen = function () {}),
            (n.onClose = function () {}),
            (n.getMap = function (t) {
              for (var e in (void 0 === t && (t = {}), this.owner && (t[this.path] = this), this.subs)) this.subs[e].getMap(t);
              return t;
            }),
            (t = Section),
            (e = [
              {
                key: "path",
                get: function () {
                  return this.owner ? this.owner.path + "/" + this.name : this.name;
                },
              },
              {
                key: "root",
                get: function () {
                  return this.owner ? this.owner.root : this;
                },
              },
            ]) && Section_defineProperties(t.prototype, e),
            i && Section_defineProperties(t, i),
            Section
          );
        })();
      var _n = (function (i) {
        var t, e;
  
        function TitleScreen(t) {
          var e;
          return ((e = i.call(this) || this).app = t), e;
        }
        return (e = i), ((t = TitleScreen).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e), TitleScreen;
      })(c.Container);
  
      function Button_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function Button_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      var bn = {
          default: {
            w: 120,
            h: 120,
            round: 5,
            color: 3246014,
            border: 16777215,
          },
          small: {
            w: 80,
            h: 80,
            round: 5,
            color: 3246014,
            border: 16777215,
          },
        },
        wn = (function (s) {
          var t, e;
  
          function Button(t) {
            var e;
            void 0 === t && (t = {}), ((e = s.call(this) || this).name = t.name || "");
            var i = t,
              n = i.base,
              o = i.icon;
            return n && e.setBase(n), o && e.setIcon(o), e.on("pointertap", e.onPointerTap.bind(Button_assertThisInitialized(e)), Button_assertThisInitialized(e)), e;
          }
          (e = s), ((t = Button).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i,
            n,
            o,
            a = Button.prototype;
          return (
            (a.setBase = function (t) {
              if ((this.base && (Ce.clear(this.base), this.removeChild(this.base)), t)) {
                if ("string" != typeof t || bn[t])
                  if (t.children) this.base = t;
                  else {
                    var e = Object.assign({}, bn["default"], bn[t] || t);
                    this.base = Ce.roundRectBorder(e);
                  }
                else (this.base = c.Sprite.from(t)), this.base.anchor.set(0.5);
                this.addChildAt(this.base, 0);
              }
            }),
            (a.setIcon = function (t) {
              if ((this.icon && this.removeChild(this.icon), t)) {
                var e = t.x || 0,
                  i = t.y || 0,
                  n = "string" == typeof t ? t : t.image;
                (this.icon = c.Sprite.from(n)), this.icon.anchor.set(0.5), (this.icon.x = e), (this.icon.y = i), this.addChild(this.icon);
              }
            }),
            (a.setLabel = function (t, e) {
              this.label && this.removeChild(this.label), (this.label = new sn(t, e)), this.addChild(this.label);
            }),
            (a.onPointerTap = function (t) {
              t.data.originalEvent.preventDefault(), this._onTap && this._onTap();
            }),
            (a.onKeyDown = function (t) {
              this.interactive && this.visible && this._key && !t.repeat && this._onTap && t[this._keyField] === this._key && this._onTap();
            }),
            (a._update = function () {}),
            (i = Button),
            (n = [
              {
                key: "key",
                get: function () {
                  return this._key;
                },
                set: function (t) {
                  (this._key = t),
                    (this._keyField = "string" == typeof t ? "code" : "which"),
                    this._onKeyDownBind || (this._onKeyDownBind = this.onKeyDown.bind(this)),
                    document.removeEventListener("keyup", this._onKeyDownBind),
                    this._key && document.addEventListener("keyup", this._onKeyDownBind);
                },
              },
              {
                key: "onTap",
                set: function (t) {
                  (this._onTap = t), (this.enabled = !!t);
                },
                get: function () {
                  return this._onTap;
                },
              },
              {
                key: "enabled",
                set: function (t) {
                  this.interactive = t;
                  var e = (this.buttonMode = t) ? 1 : 0.5;
                  this.base && (this.base.alpha = e);
                },
                get: function () {
                  return this.interactive;
                },
              },
              {
                key: "selected",
                set: function (t) {
                  var e = (this._selected = t) ? 5592405 : 16777215;
                  this.base && (this.base.fill.tint = e);
                },
                get: function () {
                  return !!this._selected;
                },
              },
            ]) && Button_defineProperties(i.prototype, n),
            o && Button_defineProperties(i, o),
            Button
          );
        })(c.Container);
      var kn = (function (i) {
        var t, e;
  
        function GameScreen(t) {
          var e;
          return ((e = i.call(this) || this).app = t), e;
        }
        (e = i), ((t = GameScreen).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = GameScreen.prototype;
        return (
          (n.onShow = function () {
            this._firstRun || ((this._firstRun = !0), nn.a.sendCustomMessage("game", "play", {})),
              this.app.game.onRun.add(this),
              this.app.game.onPause.add(this),
              this.app.game.onResume.add(this),
              this.app.game.onGameover.add(this),
              this.app.game.onRevive.add(this),
              this.app.game.runWithIntro(),
              this.btnPause ||
                ((this.btnPause = new wn({
                  icon: "icon_pause.png",
                  base: "small",
                })),
                (this.btnPause.onTap = this.onBtnPausePress.bind(this)),
                this.btnPause.scale.set(0.5),
                (this.btnPause.x = 35),
                (this.btnPause.y = 35)),
              this.addChild(this.btnPause),
              (this.btnPause.visible = !0);
          }),
          (n.onHide = function () {
            this.app.game.onPause.remove(this), this.app.game.onResume.remove(this), this.app.game.onGameover.remove(this), this.app.game.onRevive.remove(this);
          }),
          (n.run = function () {
            this.updateView();
          }),
          (n.gameover = function () {
            var t = this;
            this.updateView(), (this.btnPause.visible = !1);
            var e = B.mobile ? "Mobile" : "",
              i = this.app.config["rewardedBreaks" + e],
              n = this.app.game.stats.revivals && !this.app.config.adBlocking;
            setTimeout(function () {
              i && n ? ((t.btnPause.visible = !1), (t.app.game.stats.revivals -= 1), t.app.sections.open("saveme")) : t.finishRun();
            }, 1500);
          }),
          (n.finishRun = function () {
            var e = this;
            if ((this.updateView(), (this.btnPause.visible = !1), this.app.user.load(), (this.app.user.tutorial = !1), !this.app.user.nameSet && this.app.config.leaderboards)) {
              var t = this.app.strings.get("nickname_prompt");
              this.app.prompt.open(t, this.app.user.name, function (t) {
                t && (e.app.user.name = t), (e.app.user.nameSet = !0), e.finishRunComplete();
              });
            } else this.finishRunComplete();
          }),
          (n.finishRunComplete = function () {
            var t = this,
              e = this.app.game.stats.score;
            (this.app.user.coins += this.app.game.stats.coins),
              e > this.app.user.score
                ? ((this.app.user.score = e),
                  nn.a.SDK.happyTime(1),
                  nn.a.hangout.saveHighscore(this.app.user.name, e).then(function () {
                    t.app.sections.open("gameover");
                  }))
                : this.app.sections.open("gameover"),
              this.app.user.save();
          }),
          (n.revive = function () {
            this.updateView();
          }),
          (n.pause = function () {
            this.updateView();
          }),
          (n.resume = function () {
            this.updateView();
          }),
          (n.resize = function (t, e) {}),
          (n.onBtnPausePress = function () {
            this.app.game.state === pn.PAUSED ? (this.app.game.resume(0), this.updateView(!1)) : (this.app.game.pause(), this.updateView());
          }),
          (n.onBtnPlayPress = function () {
            this.app.game.resume(3), this.updateView(!1);
          }),
          (n.onBtnRestartPress = function () {
            this.app.game.run(), this.updateView();
          }),
          (n.updateView = function (t) {
            void 0 === t && (t = this.app.game.state === pn.PAUSED), t ? this.app.sections.open("pause") : this.app.sections.close(), this.btnPause && (this.btnPause.visible = this.app.game.state !== pn.PAUSED);
          }),
          GameScreen
        );
      })(c.Container);
      var xn = (function (n) {
          var t, e;
  
          function LoadingScreen(t, e) {
            var i;
            return (
              void 0 === e && (e = 998272),
              ((i = n.call(this) || this).app = t),
              (i.w = 512),
              (i.h = 512),
              (i.color = "string" == typeof e ? c.utils.string2hex(e) : e),
              (i.view = new c.Container()),
              i.addChild(i.view),
              (i.firstLoadPassed = !1),
              i
            );
          }
          (e = n), ((t = LoadingScreen).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = LoadingScreen.prototype;
          return (
            (i.build = function () {
              this.bg ||
                ((this.bg = new c.Graphics()),
                this.bg.beginFill(this.color, 1),
                this.bg.drawRect(0, 0, 16, 16),
                this.bg.endFill(),
                this.addChildAt(this.bg, 0),
                (this.splash = c.Sprite.from("preload/splash")),
                this.splash.anchor.set(0.5),
                this.view.addChild(this.splash),
                this.buildBar(),
                this.resize(),
                this.updateView());
            }),
            (i.buildBar = function () {
              if (!this.bar) {
                (this.bar = new c.Container()), this.view.addChild(this.bar), (this.bar.y = 160);
                var t = 300,
                  e = 40,
                  i = new c.Graphics();
                i.beginFill(0, 0.75), i.drawRect(0, 0, t, e), i.position.set(-t / 2, -e / 2), this.bar.addChild(i), (this.bar.bg = i), (t -= 8), (e -= 8);
                var n = new c.Graphics();
                n.beginFill(16142336), n.drawRect(0, 0, t, e), n.position.set(-t / 2, -e / 2), (n.scale.x = 0.01), this.bar.addChild(n), (this.bar.fill = n);
                var o = "loading_" + this.app.config.lang,
                  s = (this.app.config[o] || "loading").toUpperCase() + "...",
                  a = new sn(s, {
                    fill: 16777215,
                    fontSize: 20,
                    dropShadow: !1,
                  });
                this.bar.addChild(a), (this.bar.label = a);
              }
            }),
            (i.updateProgress = function (t) {
              this.bar && (this.bar.fill.scale.x = t / 100);
            }),
            (i.resize = function (t, e) {
              (this.w = t || this.w), (this.h = e || this.h), (this.view.position.x = this.w / 2), (this.view.position.y = this.h / 2), this.bg && ((this.bg.width = this.w), (this.bg.height = this.h)), this.updateView();
            }),
            (i.onShow = function () {
              this.updateView(!this.app.bgLoading), this.reset(), (this._opened = !0);
            }),
            (i.onHidden = function () {}),
            (i.updateView = function (t) {
              void 0 !== t && (this.view.visible = t), this.bg && ((this.bg.visible = this.view.visible), (this.bg.alpha = this.firstLoadPassed ? 0.5 : 1)), this.splash && (this.splash.visible = !this.firstLoadPassed);
            }),
            (i.holdForFrame = function () {
              (this.view.visible = !0), this.bg && (this.bg.visible = !0), this.splash && (this.splash.visible = !0);
            }),
            (i.reset = function () {
              this.updateProgress(0);
            }),
            LoadingScreen
          );
        })(c.Container),
        Cn = i(68),
        Sn = (function () {
          function Event(t) {
            this.app = t;
          }
          var t = Event.prototype;
          return (
            (t.init = function () {
              var t = this.app.addSignal("onBlur"),
                e = this.app.addSignal("onFocus");
              Cn.a.onShow.add(function () {
                return e.dispatch();
              }),
                Cn.a.onHide.add(function () {
                  return t.dispatch();
                }),
                window.addEventListener("blur", function () {
                  return t.dispatch();
                }),
                window.addEventListener("focus", function () {
                  return e.dispatch();
                }),
                window.addEventListener("pagehide", function () {
                  return t.dispatch();
                }),
                window.addEventListener("pageshow", function () {
                  return e.dispatch();
                }),
                window.addEventListener("gesturestart", this._onEventPreventDefault.bind(this)),
                window.addEventListener("gesturechange", this._onEventPreventDefault.bind(this)),
                window.addEventListener("gestureend", this._onEventPreventDefault.bind(this)),
                window.addEventListener("touchmove", this._onEventPreventDefault.bind(this));
            }),
            (t._onEventPreventDefault = function (t) {
              t.preventDefault();
            }),
            Event
          );
        })(),
        zn = (function () {
          function Message(t) {
            this.app = t;
          }
          var t = Message.prototype;
          return (
            (t.init = function () {
              var e = this.app.addSignal("onMessage");
              window.addEventListener(
                "message",
                function (t) {
                  return e.dispatch(t);
                },
                !1
              );
            }),
            (t.postToParent = function (t, e) {
              var i = window.parent;
              if (i)
                try {
                  i.postMessage(
                    {
                      type: t,
                      content: {
                        event: e,
                      },
                    },
                    "*"
                  );
                } catch (t) {}
            }),
            (t.sendCustomMessage = function (t, e, i) {
              if (window.parent)
                try {
                  window.parent.postMessage(
                    {
                      type: "pokiMessageEvent",
                      content: {
                        event: "pokiTrackingCustom",
                        data: {
                          eventNoun: t,
                          eventVerb: e,
                          eventData: i,
                        },
                      },
                    },
                    "*"
                  );
                } catch (t) {}
            }),
            Message
          );
        })(),
        Tn = (function () {
          function Size(t) {
            (this.app = t), (this.w = 512), (this.h = 512), (this.sw = 512), (this.sh = 512), (this.scale = 1);
          }
          var t = Size.prototype;
          return (
            (t.init = function () {
              var t = this;
              (this._onResize = this.app.addSignal("onResize")),
                window.addEventListener("resize", function () {
                  return t.onChange();
                }),
                window.addEventListener("orientationchange", function () {
                  return t.onChange();
                }),
                this.update();
            }),
            (t.onChange = function () {
              var t = this;
              this.update();
              for (var e = 0; e < 5; e++)
                setTimeout(function () {
                  return t.update();
                }, 200 * e);
            }),
            (t.update = function () {
              window.scrollTo(0, 0),
                (this.w = window.innerWidth),
                (this.h = window.innerHeight),
                (this.scale = window.devicePixelRatio || 1),
                r.a.instance.isMobile && !window.devicePixelRatio && (this.scale = window.screen.deviceXDPI / window.screen.logicalXDPI),
                this.scale > B.maxViewportScale && (this.scale = B.maxViewportScale),
                (this.sw = this.w * this.scale),
                (this.sh = this.h * this.scale),
                this._onResize.dispatch(this);
            }),
            (t.requestFullScreen = function () {
              r.a.instance.android && (document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.webkitRequestFullScreen && document.body.webkitRequestFullScreen(), this.update());
            }),
            Size
          );
        })(),
        Pn = (function () {
          function Strings(t) {
            (this.app = t), (this.lang = "en"), (this.data = {});
          }
          var t = Strings.prototype;
          return (
            (t.onAppReady = function () {
              this.load(this.app.config.lang);
            }),
            (t.get = function (t) {
              return this.data[t];
            }),
            (t.upper = function (t) {
              return this.data[t].toUpperCase();
            }),
            (t.load = function (t) {
              t && (this.lang = t), (this.data = this.loadStrings(this.lang));
            }),
            (t.loadStrings = function (t) {
              var e = this.app.resourceManager.resources,
                i = e["data/strings_en"].data,
                n = e["data/strings_" + t].data;
              return Object.assign({}, i, n);
            }),
            Strings
          );
        })(),
        Mn = (function () {
          function Debug(t) {
            this.app = t;
          }
          var t = Debug.prototype;
          return (
            (t.init = function () {
              (this.div = document.createElement("div")),
                (this.div.style.backgroundColor = "rgba(255,255,255,0.5)"),
                (this.div.style.width = "100%"),
                (this.div.style.height = "100%"),
                (this.div.style.top = "50px"),
                (this.div.style.left = "0px"),
                (this.div.style.position = "absolute"),
                (this.div.style.zIndex = 999),
                window.addEventListener("keydown", this.onKeyDown.bind(this));
            }),
            (t.onAppReady = function () {}),
            (t.onResize = function (t, e) {}),
            (t.onKeyDown = function (t) {
              "Escape" === t.key && this.toggle();
            }),
            (t.show = function () {
              this.shown || ((this.shown = !0), document.body.appendChild(this.div), this.mountSections());
            }),
            (t.hide = function () {
              this.shown && ((this.shown = !1), document.body.removeChild(this.div));
            }),
            (t.toggle = function () {
              this.shown ? this.hide() : this.show();
            }),
            (t.mountSections = function () {
              var o = this;
              if (!this.divSections) {
                (this.divSections = document.createElement("div")), this.div.appendChild(this.divSections);
                var t = this.app.sections.getMap(),
                  s = Object.keys(t).sort(),
                  e = function (t) {
                    var e = s[t],
                      i = document.createElement("button"),
                      n = e.replace("root/", "");
                    (i.innerText = n),
                      o.divSections.appendChild(i),
                      o.divSections.appendChild(document.createElement("br")),
                      i.addEventListener("click", function () {
                        return o.app.sections.open(n);
                      });
                  };
                for (var i in s) e(i);
              }
            }),
            Debug
          );
        })();
      var En = (function (i) {
        var t, e;
  
        function SectionTitle(t) {
          var e;
          return ((e = i.call(this) || this).app = t), (e.name = "title"), e;
        }
        (e = i), ((t = SectionTitle).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = SectionTitle.prototype;
        return (
          (n.onBuild = function () {
            var t = this;
            i.prototype.onBuild.call(this),
              (this.labelMsg = new sn("")),
              (this.labelMsg.rotation = 0.15),
              this.view.addChild(this.labelMsg),
              (this.tapToPlayArea = new c.Graphics()),
              this.tapToPlayArea.beginFill(16711680),
              this.tapToPlayArea.drawRect(0, 0, 16, 16),
              this.tapToPlayArea.endFill(),
              (this.tapToPlayArea.alpha = 0),
              (this.tapToPlayArea.interactive = !0),
              this.tapToPlayArea.addListener("pointerdown", this.playGame.bind(this)),
              this.view.addChild(this.tapToPlayArea),
              (this.bottomMenu = new c.Container()),
              this.view.addChild(this.bottomMenu),
              (this.btnTopRun = new wn()),
              this.btnTopRun.setIcon({
                image: "front_icon_top_run.png",
                y: -10,
              }),
              this.btnTopRun.setBase({
                color: 5254027,
                w: 230,
              }),
              this.bottomMenu.addChild(this.btnTopRun),
              (this.btnTopRun.x = this.btnTopRun.width / 2),
              (this.btnTopRun.onTap = function () {
                return t.app.sections.open("toprun");
              }),
              (this.btnSettings = new wn()),
              this.btnSettings.setIcon("icon_settings.png"),
              this.btnSettings.setBase(
                Ce.rectComp(
                  {
                    w: 96,
                    h: 98,
                    image: "box_border_grey_small.png",
                    x: 1,
                    y: 1,
                  },
                  {
                    w: 80,
                    h: 80,
                    color: 3574206,
                    round: 6,
                  }
                )
              ),
              (this.btnSettings.onTap = function () {
                return t.app.sections.open("settings");
              }),
              this.view.addChild(this.btnSettings),
              (this.keyDownBind = this.onKeyDown.bind(this));
          }),
          (n.onResize = function () {
            i.prototype.onResize.call(this);
            var t = this.w,
              e = this.h;
            (this.labelMsg.x = 0.5 * t - 100),
              (this.labelMsg.y = e - 300),
              (this.tapToPlayArea.width = t),
              (this.tapToPlayArea.height = e),
              (this.bottomMenu.x = t / 2 - this.bottomMenu.width / 2),
              (this.bottomMenu.y = e - 90),
              (this.btnSettings.x = 60),
              (this.btnSettings.y = 60);
          }),
          (n.onOpen = function () {
            //alert("n.onOpen");
            dataLayer.push({
              event: "ga_event",
              ga_category: "Gamepage",
              ga_action: "Main Menu",
              ga_label: window.productTitle,
              ga_noninteraction: true,
            });
            i.prototype.onOpen.call(this),
              (this.count = 0),
              (this.tapToPlayArea.interactive = !0),
              window.addEventListener("keydown", this.keyDownBind),
              this.app.screenManager.gotoScreenByID("title"),
              this.ticker.add(this.update, this, 1),
              this.ticker.start();
            var t = B.mobile ? "tap_to_play" : "tap_to_play_desktop",
              e = this.app.strings.get(t);
            this.labelMsg.text = e;
          }),
          (n.onClose = function () {
            i.prototype.onClose.call(this), (this.tapToPlayArea.interactive = !1), window.removeEventListener("keydown", this.keyDownBind), this.ticker.remove(this.update, this);
          }),
          (n.onKeyDown = function (t) {
            t.repeat || 32 !== t.which || (this.app.game.state === pn.IDLE && this.playGame());
          }),
          (n.playGame = function () {
            console.info(window.productTitle);
            dataLayer.push({
              event: "ga_event",
              ga_category: "Gamepage",
              ga_action: "Start",
              ga_label: window.productTitle,
              ga_noninteraction: false,
            });
  
            this.app.game.state === pn.IDLE && (nn.a.sendCustomMessage("mainMenu", "pressPlay", {}), (this.tapToPlayArea.interactive = !1), this.app.nav.playGame());
          }),
          (n.update = function (t) {
            (this.labelMsg.rotation = 0.15 + 0.02 * Math.sin(this.count)), (this.count += 0.1 * t);
          }),
          SectionTitle
        );
      })(vn);
      var On = (function (e) {
        var t, i;
  
        function ScreenGlow() {
          var t;
          return (
            ((t = e.call(this) || this).w = 512),
            (t.h = 512),
            (t.bottom = c.Sprite.from("base_blurry.png")),
            t.addChild(t.bottom),
            (t.top = c.Sprite.from("base_blurry.png")),
            t.addChild(t.top),
            (t.top.scale.y = -1),
            (t.top.anchor.y = 1),
            (t.bg = new c.Graphics()),
            t.bg.beginFill(0, 0.5),
            t.bg.drawRect(0, 0, 16, 16),
            t.bg.endFill(),
            t.addChild(t.bg),
            t
          );
        }
        return (
          (i = e),
          ((t = ScreenGlow).prototype = Object.create(i.prototype)),
          ((t.prototype.constructor = t).__proto__ = i),
          (ScreenGlow.prototype.resize = function (t, e) {
            (this.w = t || this.w),
              (this.h = e || this.h),
              (this.bg.width = this.w),
              (this.bg.height = this.h),
              (this.bottom.width = this.w),
              (this.bottom.height = 230),
              (this.bottom.y = this.h - this.bottom.height),
              (this.top.width = this.w),
              (this.top.height = this.bottom.height);
          }),
          ScreenGlow
        );
      })(c.Container);
      var Rn = (function (e) {
        var t, i;
  
        function Clock() {
          var t;
          return (
            ((t = e.call(this) || this).base = c.Sprite.from("clock_base.png")),
            t.base.anchor.set(0.5),
            (t.base.x = -1),
            (t.base.y = -1),
            t.addChild(t.base),
            (t.fill = c.Sprite.from("clock_fill.png")),
            t.fill.anchor.set(0.5),
            t.addChild(t.fill),
            (t.onComplete = null),
            (t.ticker = new c.Ticker()),
            t.ticker.stop(),
            t
          );
        }
        (i = e), ((t = Clock).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i);
        var n = Clock.prototype;
        return (
          (n.run = function (t, e) {
            this.secs && this.stop(), (this.time = t), (this.secs = t), (this.onComplete = e), this.update(0), this.ticker.add(this.update, this, 1), this.ticker.start();
          }),
          (n.stop = function () {
            (this.secs = 0), this.ticker.remove(this.update, this), this.ticker.stop();
          }),
          (n.complete = function () {
            this.stop(), this.onComplete && this.onComplete();
          }),
          (n.update = function (t) {
            var e = t / 60;
            (this.secs -= e), this.updatePizza(), this.secs < 0 && this.complete();
          }),
          (n.updatePizza = function () {
            this.pizza || ((this.pizza = new c.Graphics()), this.addChild(this.pizza));
            var t = this.secs / this.time,
              e = V.PI_DOUBLE * t;
            this.pizza.clear(), this.pizza.beginFill(15658734), this.pizza.moveTo(0, 0), this.pizza.arc(0, 0, 43, 0, e, !0), (this.pizza.rotation = -V.PI_HALF), (this.pizza.scale.y = -1);
          }),
          Clock
        );
      })(c.Container);
      var In = (function (i) {
        var t, e;
  
        function SectionSaveMe(t) {
          var e;
          return ((e = i.call(this) || this).name = "saveme"), (e.app = t), e;
        }
        (e = i), ((t = SectionSaveMe).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = SectionSaveMe.prototype;
        return (
          (n.onBuild = function () {
            var t = this;
            (this.bg = new On(this.app.color)),
              this.view.addChild(this.bg),
              (this.bg.interactive = !0),
              this.bg.on("pointertap", function () {
                return t.exit();
              }),
              (this.content = new c.Container()),
              this.view.addChild(this.content);
            (this.base = Ce.rectComp(
              {
                w: 500,
                h: 250,
                color: 15658734,
                round: 16,
              },
              {
                w: 522,
                h: 274,
                image: "box_border_grey.png",
                x: 5,
                y: 6,
              }
            )),
              this.content.addChild(this.base),
              (this.base.interactive = !0),
              this.base.on("pointertap", function () {
                return t.exit();
              });
            (this.btnRevive = new wn({
              key: "Space",
            })),
              this.btnRevive.setBase(
                Ce.rectComp(
                  {
                    w: 316,
                    h: 120,
                    image: "box_border_grey.png",
                    x: 5,
                    y: 6,
                  },
                  {
                    w: 300,
                    h: 100,
                    image: "box_fill_green.png",
                    x: 2,
                    y: 2,
                    r: 20,
                    b: 20,
                  }
                )
              ),
              this.btnRevive.setIcon({
                image: "icon_tv.png",
                x: 60,
                y: -10,
              }),
              this.btnRevive.setLabel(this.app.strings.upper("free"), {
                fontSize: 40,
                fontFamily: "Lilita One",
                dropShadowDistance: 1,
                x: -50,
              }),
              (this.btnRevive.onTap = function () {
                return t.revive();
              }),
              this.content.addChild(this.btnRevive);
            this.btnRevive.y = 40;
            var e = this.app.strings.get("save_me");
            (this.title = new sn(e, {
              align: "center",
              fill: 19072,
              fontSize: 40,
              fontFamily: "Titan One",
              dropShadow: !1,
              dropShadowDistance: 1,
              anchor: 0.5,
            })),
              this.content.addChild(this.title),
              (this.title.y = -80),
              (this.clock = new Rn()),
              this.content.addChild(this.clock),
              (this.clock.x = -230),
              (this.clock.y = -105);
          }),
          (n.onOpen = function () {
            var t = this;
            i.prototype.onOpen.call(this),
              this.clock.run(6, function () {
                return t.exit();
              }),
              (this.btnRevive.key = "Space"),
              (this._allowExit = !1),
              setTimeout(function () {
                t._allowExit = !0;
              }, 500);
          }),
          (n.onClose = function () {
            i.prototype.onClose.call(this), this.clock.stop(), (this.btnRevive.key = null);
          }),
          (n.exit = function () {
            this._allowExit && this.app.gameScreen.finishRun();
          }),
          (n.onResize = function () {
            i.prototype.onResize.call(this), this.bg.resize(this.w, this.h), (this.content.x = this.w / 2), (this.content.y = this.h / 2);
          }),
          (n.revive = function () {
            var e = this;
            this.app.sections.close(),
              this.app.suspend(),
              B.debug
                ? (this.app.resume(), this.app.game.revive(1))
                : nn.a.SDK.rewardedBreak().then(function (t) {
                    e.app.resume(), t ? e.app.game.revive(5) : e.app.gameScreen.finishRun();
                  });
          }),
          SectionSaveMe
        );
      })(vn);
      var Ln = (function (e) {
        var t, i;
  
        function Scoreboard() {
          var t;
          return (
            ((t = e.call(this) || this).base = c.Sprite.from("scoreboard.png")),
            t.base.anchor.set(0.5),
            t.addChild(t.base),
            (t.title = new sn("", {
              align: "center",
              fill: 19072,
              fontSize: 60,
              fontFamily: "Titan One",
              dropShadow: !1,
              dropShadowDistance: 1,
            })),
            t.addChild(t.title),
            (t.title.x = -15),
            (t.title.y = -110),
            (t.title.rotation = -0.07),
            (t.score = new sn("", {
              align: "center",
              fill: 16777215,
              fontSize: 55,
              fontFamily: "Lilita One",
              dropShadow: !0,
              dropShadowDistance: 1,
            })),
            t.addChild(t.score),
            (t.score.y = -33),
            (t.coins = new sn("", {
              align: "center",
              fill: 16777215,
              fontSize: 45,
              fontFamily: "Lilita One",
              dropShadow: !0,
              dropShadowDistance: 1,
            })),
            t.addChild(t.coins),
            (t.coins.y = 35),
            (t.icon = c.Sprite.from("icon_coin.png")),
            t.icon.anchor.set(0.5),
            t.icon.scale.set(0.75),
            t.addChild(t.icon),
            (t.icon.x = t.coins.x - 100),
            (t.icon.y = t.coins.y),
            (t.starL = c.Sprite.from("icon_star.png")),
            t.starL.anchor.set(0.5),
            (t.starL.x = -120),
            t.title.addChild(t.starL),
            (t.starR = c.Sprite.from("icon_star.png")),
            t.starR.anchor.set(0.5),
            (t.starR.x = -t.starL.x),
            t.title.addChild(t.starR),
            t
          );
        }
        return (
          (i = e),
          ((t = Scoreboard).prototype = Object.create(i.prototype)),
          ((t.prototype.constructor = t).__proto__ = i),
          (Scoreboard.prototype.update = function (t) {
            void 0 === t && (t = {}),
              (t = Object.assign(
                {
                  title: "Score",
                  score: 0,
                  coins: 0,
                },
                t
              )),
              (this.title.text = t.title),
              (this.score.text = t.score),
              (this.coins.text = t.coins);
          }),
          Scoreboard
        );
      })(c.Container);
      var jn = (function (n) {
        var t, e;
  
        function Spinner(t) {
          var e;
          e = n.call(this) || this;
          var i = Object.assign(
            {},
            {
              radius: 32,
              color: 0,
            },
            t
          );
          return (
            (e.image = new c.Graphics()),
            e.image.lineStyle(i.radius, i.color),
            e.image.arc(0, 0, 2 * i.radius, 0, 0.5 * Math.PI, !0),
            e.addChild(e.image),
            e.image.scale.set(0.5),
            (e.image.alpha = 0.25),
            (e.visible = !1),
            (e.ticker = new c.Ticker()),
            e.ticker.stop(),
            e.ticker.add(
              e.update,
              (function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
              })(e),
              1
            ),
            e
          );
        }
        (e = n), ((t = Spinner).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = Spinner.prototype;
        return (
          (i.show = function () {
            (this.visible = !0), this.ticker.start();
          }),
          (i.hide = function () {
            (this.visible = !1), this.ticker.stop();
          }),
          (i.update = function (t) {
            void 0 === t && (t = 0), (this.image.rotation += 0.2 * t);
          }),
          Spinner
        );
      })(c.Container);
      var Fn = (function (n) {
        var t, e;
  
        function RemoteImage(t) {
          var e;
          e = n.call(this) || this;
          var i = Object.assign(
            {},
            {
              path: "",
              w: 0,
              h: 0,
              bg: null,
            }
          );
          return (
            "string" == typeof t ? (i.path = t) : Object.assign(i, t),
            null !== i.bg && ((e.bg = new c.Graphics()), e.bg.beginFill(i.bg), e.bg.drawRect(-i.w / 2, -i.h / 2, i.w, i.h), e.bg.endFill(), e.addChildAt(e.bg, 0)),
            (e.image = new c.Sprite()),
            i.w && (e.image.width = i.w),
            i.h && (e.image.height = i.h),
            e.addChild(e.image),
            (e.spinner = new jn()),
            e.addChild(e.spinner),
            e.spinner.show(),
            i.path && e.load(i.path),
            e
          );
        }
        (e = n), ((t = RemoteImage).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var i = RemoteImage.prototype;
        return (
          (i.load = function (t) {
            if (((this._path = t), (this.image.visible = !1), this.spinner && this.spinner.show(), c.utils.TextureCache[t])) this.onLoadComplete();
            else {
              var e = RemoteImage.cache[t];
              e || ((e = new c.Loader()).add(t, t), (RemoteImage.cache[t] = e)), e.onLoad.once(this.onLoadComplete, this), e.load();
            }
          }),
          (i.onLoadComplete = function () {
            (this.image.visible = !0), (this.image.texture = c.Texture.from(this._path)), this.image.anchor.set(0.5), this.spinner && this.spinner.hide();
          }),
          RemoteImage
        );
      })(c.Container);
      Fn.cache = {};
      var An = (function (i) {
        var t, e;
  
        function AvatarIcon(t) {
          var e;
          return (
            void 0 === t && (t = 64),
            ((e =
              i.call(this, {
                w: t,
                h: t,
                bg: 16777215,
                path: "",
              }) || this).w = t),
            (e.h = t),
            e.spinner.scale.set(0.4),
            e
          );
        }
        return (
          (e = i),
          ((t = AvatarIcon).prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e),
          (AvatarIcon.prototype.update = function (t) {
            void 0 === t && (t = {}),
              (t = Object.assign(
                {
                  image: "icon_friend",
                  color: 16777215,
                  border: 4,
                },
                t
              )),
              (this.bg.width = this.w),
              (this.bg.height = this.h),
              (this.image.width = this.w - 2 * t.border),
              (this.image.height = this.h - 2 * t.border),
              this.spinner.scale.set(0.4),
              this.load("assets/placeholder/" + t.image + ".png");
          }),
          AvatarIcon
        );
      })(Fn);
  
      function Ranking_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var Dn = (function (s) {
          function Ranking(t, e) {
            var i;
            void 0 === t && (t = 70), void 0 === e && (e = 10), ((i = s.call(this) || this).entries = []), (i.length = 11), (i.name = "");
            for (var n = (i.score = 0); n < i.length; n++) {
              var o = new Gn(t, e);
              i.entries.push(o), i.addChild(o);
            }
            return i.placeholder(), i;
          }
          Ranking_inheritsLoose(Ranking, s);
          var t = Ranking.prototype;
          return (
            (t.placeholder = function () {
              for (var t = [], e = 0; e < this.length; e++)
                t.push({
                  index: e + 1,
                  loading: !0,
                });
              this.updateEntries(t);
            }),
            (t.update = function (t, e) {
              var i = this;
              (this.name = t),
                (this.score = e),
                nn.a.hangout.getLeaderboard(this.length, t, e).then(function (t) {
                  return i.updateScores(t);
                });
            }),
            (t.updateScores = function (t) {
              t = t.sort(function (t, e) {
                return e.score - t.score;
              });
              for (var e = !1, i = 0; i < this.length; i++) {
                var n = t[i];
                n && (n.image || (n.image = "icon_friend"), (n.highlight = n.name === this.name && n.score === this.score), "ME" === n.name && (n.highlight = !0), n.highlight && (e = !0), (n.index = i + 1));
              }
              e ||
                (t[this.length - 1] = {
                  name: this.name,
                  score: this.score,
                  image: "icon_friend",
                  highlight: !0,
                  index: "",
                }),
                this.updateEntries(t);
            }),
            (t.updateEntries = function (t) {
              for (var e = this.title && this.title.text ? 80 : 0, i = 0; i < this.length; i++) {
                var n = this.entries[i],
                  o = t[i];
                (n.visible = !!o), o && (n.update(o), (n.y = i * n.h + e));
              }
            }),
            (t.setTitle = function (t) {
              this.title ||
                (this.title = new sn("", {
                  align: "center",
                  fill: 211825,
                  fontSize: 70,
                  fontFamily: "Titan One",
                  dropShadowDistance: 1,
                })),
                (this.title.visible = !!t),
                (this.title.text = t),
                this.addChild(this.title);
            }),
            Ranking
          );
        })(c.Container),
        Gn = (function (o) {
          function RankingEntry(t, e) {
            var i;
            void 0 === t && (t = 75), void 0 === e && (e = 10), ((i = o.call(this) || this).w = 640), (i.h = t), (i.clampChars = e);
            var n = {
              align: "center",
              fill: 666451,
              fontSize: t * Math.min(t / 100, 0.5),
              fontFamily: "Lilita One",
              dropShadow: !1,
              dropShadowDistance: 1,
              maxWidth: 300,
            };
            return (
              (i.index = new sn("", n)),
              i.addChild(i.index),
              (i.index._text.anchor.x = 1),
              (i.name = new sn("", n)),
              i.addChild(i.name),
              (i.name._text.anchor.x = 0),
              (i.score = new sn("", n)),
              i.addChild(i.score),
              (i.score._text.anchor.x = 1),
              (i.avatar = new An(0.85 * t)),
              i.addChild(i.avatar),
              i
            );
          }
          return (
            Ranking_inheritsLoose(RankingEntry, o),
            (RankingEntry.prototype.update = function (t) {
              void 0 === t && (t = {}),
                (t = Object.assign(
                  {
                    name: "",
                    score: 0,
                    index: 0,
                    avatar: "icon_friends",
                    highlight: !1,
                  },
                  t
                )),
                (this.name.text = t.name.substr(0, this.clampChars)),
                (this.score.text = t.score),
                (this.index.text = t.index),
                t.loading ||
                  this.avatar.update({
                    image: t.image,
                  }),
                this.bg && (this.removeChild(this.bg), Ce.clear(this.bg), this.bg.destroy());
              var e = t.index % 2 ? 13294308 : 11388888;
              t.highlight && (e = 16773461),
                (this.bg = Ce.rect({
                  w: this.w,
                  h: this.h,
                  round: 0,
                  color: e,
                })),
                this.addChildAt(this.bg, 0);
              var i = this.w / 2 - 70;
              (this.index.x = 0 - i), (this.avatar.x = 50 - i), (this.name.x = 100 - i), (this.score.x = 540 - i);
            }),
            RankingEntry
          );
        })(c.Container);
      var Bn = (function (i) {
        var t, e;
  
        function CoinsTag(t) {
          var e;
          void 0 === t && (t = 64),
            ((e = i.call(this) || this).base = Ce.rectShadow({
              w: 150,
              h: 35,
              color: 5394255,
              round: 10,
              shadowDistance: 2,
            })),
            e.addChild(e.base);
          return (
            (e.coins = new sn("9", {
              align: "center",
              fill: 16185078,
              fontSize: 30,
              fontFamily: "Lilita One",
              dropShadow: !0,
              dropShadowDistance: 1,
              icon: "icon_coin.png",
            })),
            e.addChild(e.coins),
            e
          );
        }
        return (
          (e = i),
          ((t = CoinsTag).prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e),
          (CoinsTag.prototype.update = function (t) {
            this.coins.text = t;
          }),
          CoinsTag
        );
      })(c.Container);
      var Nn = (function (i) {
        var t, e;
  
        function Menu(t) {
          var e;
          return ((e = i.call(this) || this).btnWidth = 150), (e.btnHeight = 100), (e.btns = []), (e.btn = {}), (e.w = 500), (e.h = 180), e;
        }
        (e = i), ((t = Menu).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = Menu.prototype;
        return (
          (n.addButton = function (t) {
            var e = t;
            if (!t.on) {
              var i = t.name,
                n = t.icon,
                o = t.color,
                s = t.label,
                a = t.onTap;
              ((e = new wn()).name = i),
                e.setIcon(n),
                e.setBase(
                  Ce.rectComp(
                    {
                      w: this.btnWidth + 16,
                      h: this.btnHeight + 20,
                      image: "box_border_grey.png",
                      x: 5,
                      y: 6,
                    },
                    {
                      w: this.btnWidth - 8,
                      h: this.btnHeight - 6,
                      color: o,
                      round: 12,
                    }
                  )
                ),
                e.setLabel(s, {
                  fontSize: 28,
                  y: this.btnHeight / 2 + 25,
                  fontFamily: "Lilita One",
                }),
                (e.onTap = a);
            }
            this.addChild(e), this.btns.push(e), (this.btn[e.name] = e), this.organise();
          }),
          (n.organise = function () {
            for (var t = this.btnWidth + 30, e = ((this.btns.length - 1) * t) / 2, i = 0; i < this.btns.length; i++) {
              var n = this.btns[i];
              (n.x = t * i - e), (n.y = -12);
            }
          }),
          (n.resize = function (t, e) {
            (this.w = t), this.organise();
          }),
          (n.select = function (t) {
            var e = this.btns,
              i = Array.isArray(e),
              n = 0;
            for (e = i ? e : e[Symbol.iterator](); ; ) {
              var o;
              if (i) {
                if (n >= e.length) break;
                o = e[n++];
              } else {
                if ((n = e.next()).done) break;
                o = n.value;
              }
              var s = o;
              s.selected = s.name === t;
            }
          }),
          Menu
        );
      })(c.Container);
  
      function SectionGameover_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var Xn = (function (i) {
        function SectionGameover(t) {
          var e;
          return ((e = i.call(this, t) || this).app = t), (e.name = "gameover"), e;
        }
        SectionGameover_inheritsLoose(SectionGameover, i);
        var t = SectionGameover.prototype;
        return (
          (t.onBuild = function () {
            var t = this;
            i.prototype.onBuild.call(this), (this.bg = new On()), this.view.addChild(this.bg);
            (this.base = Ce.rectComp(
              {
                w: 690,
                h: 1e3,
                color: 15658734,
                round: 16,
              },
              {
                w: 712,
                h: 1024,
                image: "box_border_grey.png",
                x: 5,
                y: 6,
              }
            )),
              this.view.addChild(this.base),
              (this.menu = new Nn(this.app)),
              this.view.addChild(this.menu),
              (this.content = new c.Container()),
              this.view.addChild(this.content),
              this.menu.addButton({
                name: "back",
                icon: "icon_white_house.png",
                label: this.app.strings.get("menu"),
                color: 3684408,
                onTap: function () {
                  return t.goToTitle();
                },
              });
            var e = new wn({
              name: "play",
            });
            e.setBase(
              Ce.rectComp(
                {
                  w: 346,
                  h: 120,
                  image: "box_border_grey.png",
                  x: 5,
                  y: 6,
                },
                {
                  w: 322,
                  h: 94,
                  color: 4298538,
                  round: 12,
                }
              )
            ),
              e.setLabel(this.app.strings.upper("play"), {
                fontFamily: "Lilita One",
              }),
              (e.onTap = function () {
                return t.playAgain();
              }),
              this.menu.addButton(e),
              (this.menu.btn.back.x = -270),
              this.menu.btn.boosts && (this.menu.btn.boosts.x = -90),
              (this.menu.btn.play.x = 180),
              (this.menu.btn.play.y = -12),
              (this.jake = new Fn("assets/placeholder/jake.png")),
              (this.jake.x = -180),
              (this.jake.y = 60),
              this.content.addChild(this.jake),
              (this.scoreboard = new Ln()),
              this.content.addChild(this.scoreboard),
              (this.scoreboard.x = 130),
              (this.scoreboard.y = 130),
              (this.ranking = new Dn(50, this.app.config.maxNicknameChars)),
              this.content.addChild(this.ranking),
              (this.ranking.y = 300),
              (this.coins = new Bn()),
              this.content.addChild(this.coins),
              (this.coins.x = this.scoreboard.x),
              (this.coins.y = -80);
          }),
          (t.createBox = function (t, e, i, n) {}),
          (t.onOpen = function () {
            i.prototype.onOpen.call(this),
              (this._actionTaken = !1),
              this.ranking.update(this.app.user.name, this.app.game.stats.score),
              this.coins.update(this.app.user.coins),
              this.scoreboard.update({
                score: this.app.game.stats.score,
                coins: this.app.game.stats.coins,
                title: this.app.strings.get("score"),
              }),
              (this.menu.btn.play.key = 32);
          }),
          (t.onClose = function () {
            i.prototype.onClose.call(this), (this.menu.btn.play.key = null);
          }),
          (t.goToTitle = function () {
            this._actionTaken || ((this._actionTaken = !0), this.app.nav.goToTitle());
          }),
          (t.playAgain = function () {
            dataLayer.push({
              event: "ga_event",
              ga_category: "Gamepage",
              ga_action: "Start",
              ga_label: window.productTitle,
              ga_noninteraction: false,
            });
  
            this._actionTaken || ((this._actionTaken = !0), this.app.nav.playAgain());
          }),
          (t.onResize = function () {
            i.prototype.onResize.call(this),
              this.bg.resize(this.w, this.h),
              (this.menu.x = this.w / 2),
              (this.menu.y = this.h - this.menu.h / 2),
              this.base && ((this.base.x = 0.5 * this.w), (this.base.y = 0.5 * (this.h - this.menu.h))),
              this.title && ((this.title.x = this.w / 2), (this.title.y = 150)),
              (this.content.x = this.w / 2),
              (this.content.y = 240);
          }),
          SectionGameover
        );
      })(vn);
      c.Container;
      var Yn = (function (i) {
        var t, e;
  
        function SectionTopRun(t) {
          var e;
          return ((e = i.call(this) || this).app = t), (e.name = "toprun"), e;
        }
        (e = i), ((t = SectionTopRun).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = SectionTopRun.prototype;
        return (
          (n.onBuild = function () {
            var t = this;
            i.prototype.onBuild.call(this), (this.bg = new On()), this.view.addChild(this.bg);
            (this.base = Ce.rectComp(
              {
                w: 690,
                h: 1e3,
                color: 15658734,
                round: 16,
              },
              {
                w: 712,
                h: 1024,
                image: "box_border_grey.png",
                x: 5,
                y: 6,
              }
            )),
              this.view.addChild(this.base),
              (this.menu = new Nn(this.app)),
              this.view.addChild(this.menu),
              this.menu.addButton({
                name: "back",
                icon: "icon_white_house.png",
                label: this.app.strings.get("menu"),
                color: 3684408,
                onTap: function () {
                  return t.app.nav.goToTitle();
                },
              }),
              (this.ranking = new Dn(70, this.app.config.maxNicknameChars)),
              this.base.addChild(this.ranking),
              (this.ranking.y = -310),
              (this.title = new sn(this.app.strings.get("highscores"), {
                align: "center",
                fill: 19072,
                fontSize: 70,
                fontFamily: "Titan One",
                dropShadow: !1,
                dropShadowDistance: 2,
                anchor: 0.5,
              })),
              this.base.addChild(this.title),
              (this.title.y = -420);
          }),
          (n.onOpen = function () {
            i.prototype.onOpen.call(this), this.ranking.update(this.app.user.name, this.app.user.score);
          }),
          (n.onResize = function () {
            i.prototype.onResize.call(this), this.bg.resize(this.w, this.h), (this.menu.x = this.w / 2), (this.menu.y = this.h - this.menu.h / 2), (this.base.x = 0.5 * this.w), (this.base.y = 0.5 * (this.h - this.menu.h));
          }),
          SectionTopRun
        );
      })(vn);
      var Hn = (function (i) {
        var t, e;
  
        function SectionPause(t) {
          var e;
          return ((e = i.call(this) || this).app = t), (e.name = "pause"), e;
        }
        (e = i), ((t = SectionPause).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        var n = SectionPause.prototype;
        return (
          (n.onBuild = function () {
            var t = this;
            i.prototype.onBuild.call(this),
              (this.bg = new On()),
              this.view.addChild(this.bg),
              (this.menu = new Nn(this.app)),
              this.view.addChild(this.menu),
              this.menu.addButton({
                name: "back",
                icon: "icon_white_house.png",
                label: this.app.strings.get("menu"),
                color: 3684408,
                onTap: function () {
                  t._actionTaken || ((t._actionTaken = !0), nn.a.sendCustomMessage("game", "roundCancel", {}), t.app.nav.goToTitle());
                },
              });
            var e = new wn({
              name: "resume",
            });
            e.setBase(
              Ce.rectComp(
                {
                  w: 346,
                  h: 120,
                  image: "box_border_grey.png",
                  x: 5,
                  y: 6,
                },
                {
                  w: 322,
                  h: 94,
                  color: 4298538,
                  round: 12,
                }
              )
            ),
              e.setLabel(this.app.strings.upper("resume"), {
                fontFamily: "Lilita One",
              }),
              (e.onTap = function () {
                t.app.sections.close(), t.app.game.resume(3);
              }),
              this.menu.addButton(e),
              (this.menu.btn.back.x = -270),
              (this.menu.btn.resume.x = 180),
              (this.menu.btn.resume.y = -12),
              (this.title = new sn(this.app.strings.upper("pause"), {
                align: "center",
                fill: 16777215,
                fontSize: 70,
                fontFamily: "Titan One",
                dropShadow: !0,
                dropShadowDistance: 2,
                anchor: 0.5,
              })),
              this.view.addChild(this.title);
          }),
          (n.onOpen = function () {
            i.prototype.onOpen.call(this), (this._actionTaken = !1);
          }),
          (n.onResize = function () {
            i.prototype.onResize.call(this),
              this.bg.resize(this.w, this.h),
              (this.menu.x = this.w / 2),
              (this.menu.y = this.h - this.menu.h / 2),
              this.base && ((this.base.x = 0.5 * this.w), (this.base.y = 0.5 * (this.h - this.menu.h))),
              this.title && ((this.title.x = this.w / 2), (this.title.y = 150)),
              (this.title.x = this.w / 2),
              (this.title.y = this.h / 2);
          }),
          SectionPause
        );
      })(vn);
  
      function SectionSettings_defineProperties(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
  
      function SectionSettings_assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
  
      function SectionSettings_inheritsLoose(t, e) {
        (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
      }
      var Un = (function (i) {
          function SectionSettings(t) {
            var e;
            return ((e = i.call(this) || this).name = "settings"), (e.app = t), e;
          }
          SectionSettings_inheritsLoose(SectionSettings, i);
          var t = SectionSettings.prototype;
          return (
            (t.onBuild = function () {
              var t = this;
              (this.bg = new On(this.app.color)), this.view.addChild(this.bg);
              (this.base = Ce.rectComp(
                {
                  w: 690,
                  h: 1e3,
                  color: 15658734,
                  round: 16,
                },
                {
                  w: 712,
                  h: 1024,
                  image: "box_border_grey.png",
                  x: 5,
                  y: 6,
                }
              )),
                this.view.addChild(this.base),
                (this.title = new sn(this.app.strings.get("settings"), {
                  align: "center",
                  fill: 19072,
                  fontSize: 70,
                  fontFamily: "Titan One",
                  dropShadow: !1,
                  dropShadowDistance: 2,
                  anchor: 0.5,
                })),
                this.base.addChild(this.title),
                (this.title.y = -420),
                (this.btnClose = new wn()),
                (this.btnClose.x = -325),
                (this.btnClose.y = -480),
                this.base.addChild(this.btnClose),
                this.btnClose.setBase("btn_close.png"),
                (this.btnClose.onTap = function () {
                  return t.app.sections.open("title");
                }),
                (this.version = new sn("v0.3.9", {
                  align: "right",
                  fill: 3836863,
                  fontSize: 18,
                  fontFamily: "Titan One",
                  anchor: 1,
                })),
                this.base.addChild(this.version),
                (this.version.alpha = 0.5),
                (this.version.x = 335),
                (this.version.y = 494),
                this.updateEntries();
            }),
            (t.onOpen = function () {
              i.prototype.onOpen.call(this);
            }),
            (t.onClose = function () {
              i.prototype.onClose.call(this);
            }),
            (t.onResize = function () {
              i.prototype.onResize.call(this), this.bg.resize(this.w, this.h), (this.base.x = 0.5 * this.w), (this.base.y = 0.5 * this.h);
            }),
            (t.buildEntries = function () {
              var e = this;
              if (!this._entriesBuilt) {
                this._entriesBuilt = !0;
                for (
                  var t = [
                      {
                        name: "nickname",
                        type: "input",
                        value: this.app.user.name,
                        icon: "icon_user.png",
                        title: this.app.strings.get("nickname"),
                        description: this.app.strings.get("nickname_prompt"),
                        onChange: function (t) {
                          (e.app.user.name = t), e.app.user.save();
                        },
                      },
                      {
                        name: "sound",
                        type: "toggle",
                        value: this.app.settings.sound,
                        icon: "icon_sound.png",
                        title: this.app.strings.get("sound"),
                        subtitleTrue: this.app.strings.get("on"),
                        subtitleFalse: this.app.strings.get("off"),
                        onChange: function (t) {
                          (e.app.settings.sound = t), e.app.settings.save(), e.app.sfx.volume(t ? B.volume : 0);
                        },
                      },
                      {
                        name: "info",
                        type: "link",
                        icon: "icon_info.png",
                        title: this.app.strings.get("privacy_policy"),
                        link: this.app.strings.get("privacy_policy_link"),
                      },
                    ],
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var n = t[i],
                    o = new Vn(this.app, n);
                  this.base.addChild(o), (o.y = i * o.h - 250), (this[o.name] = o);
                }
              }
            }),
            (t.updateEntries = function () {
              this.buildEntries(), (this.nickname.value = this.app.user.name), (this.sound.value = this.app.settings.sound);
            }),
            SectionSettings
          );
        })(vn),
        Vn = (function (o) {
          function Entry(t, e) {
            var i;
            void 0 === e && (e = {}), ((i = o.call(this) || this).app = t);
            var n = Object.assign(
              {},
              {
                name: "entry",
                type: "toggle",
                value: !0,
                icon: "icon_white_missions.png",
                title: "Title",
                subtitleTrue: "",
                subtitleFalse: "",
                description: "",
                onChange: function (t) {
                  return t;
                },
              },
              e
            );
            return (
              (i.w = 550),
              (i.h = 130),
              (i.opts = n),
              (i.name = n.name),
              (i.type = n.type),
              (i.bg = new c.Graphics()),
              i.bg.beginFill(16711680, 1),
              i.bg.drawRect(-i.w / 2, -i.h / 2, i.w, i.h),
              i.addChild(i.bg),
              (i.bg.alpha = 0),
              (i.bg.interactive = !0),
              i.bg.on("pointertap", i.onTap.bind(SectionSettings_assertThisInitialized(i)), SectionSettings_assertThisInitialized(i)),
              (i.btn = new wn()),
              i.btn.setIcon(n.icon),
              i.btn.setBase(
                Ce.rectComp(
                  {
                    w: 116,
                    h: 118,
                    image: "box_border_grey_small.png",
                    x: 1,
                    y: 1,
                  },
                  {
                    w: 100,
                    h: 100,
                    color: 3574206,
                    round: 6,
                  }
                )
              ),
              (i.btn.onTap = i.onTap.bind(SectionSettings_assertThisInitialized(i))),
              i.addChild(i.btn),
              (i.btn.x = -i.w / 2 + 60),
              (i.title = new sn(n.title, {
                align: "left",
                fill: 19072,
                fontSize: 40,
                fontFamily: "Titan One",
                anchor: 0,
              })),
              i.addChild(i.title),
              (i.title.x = i.btn.x + 80),
              (i.title.y = n.value ? -35 : -20),
              (i.subtitle = new sn(n.subtitleTrue, {
                align: "left",
                fill: 3836863,
                fontSize: 30,
                fontFamily: "Titan One",
                anchor: 0,
              })),
              i.addChild(i.subtitle),
              (i.subtitle.x = i.title.x),
              (i.subtitle.y = i.title.y + 40),
              (i.subtitle.description = n.description),
              i.subtitle.on("change", function (t) {
                return (i.value = t);
              }),
              (i.diagonal = c.Sprite.from("diagonal.png")),
              i.diagonal.anchor.set(0.5),
              i.btn.addChild(i.diagonal),
              (i.diagonal.visible = !1),
              (i.value = n.value),
              i
            );
          }
          SectionSettings_inheritsLoose(Entry, o);
          var t,
            e,
            i,
            n = Entry.prototype;
          return (
            (n.onTap = function () {
              var e = this;
              "toggle" === this.type && this.toggle(),
                "input" === this.type &&
                  this.app.prompt.open(this.subtitle.description, this.subtitle.text, function (t) {
                    t && ((e.subtitle.text = t), (e.value = t));
                  }),
                "link" === this.type && window.open(this.opts.link, "_blank");
            }),
            (n.toggle = function () {
              this.value = !this.value;
            }),
            (n.update = function () {
              var t = this._value;
              this.diagonal.visible = !t;
              var e = t ? this.opts.subtitleTrue : this.opts.subtitleFalse,
                i = "string" == typeof t ? t : e;
              (this.subtitle.text = i), (this.title.y = i ? -35 : -20), (this.subtitle.y = this.title.y + 40);
            }),
            (t = Entry),
            (e = [
              {
                key: "value",
                get: function () {
                  return this._value;
                },
                set: function (t) {
                  this._value !== t && ((this._value = t), this.opts.onChange(t), this.update());
                },
              },
            ]) && SectionSettings_defineProperties(t.prototype, e),
            i && SectionSettings_defineProperties(t, i),
            Entry
          );
        })(c.Container),
        qn = (function () {
          function Navigation(t) {
            (this.app = t), this.uiLoaded;
          }
          var t = Navigation.prototype;
          return (
            (t.onAppReady = function () {
              this._initialised ||
                ((this._initialised = !0),
                this.app.sections.addSub(new En(this.app)),
                this.app.sections.addSub(new In(this.app)),
                this.app.sections.addSub(new Xn(this.app)),
                this.app.sections.addSub(new Yn(this.app)),
                this.app.sections.addSub(new Hn(this.app)),
                this.app.sections.addSub(new Un(this.app)),
                this.app.resources.isLoaded("ui") && (this.app.size.update(), B.fastplay || this.app.sections.open(B.section)));
            }),
            (t.onLoadComplete = function (t) {
              B.fastplay || ("ui" === t && this.app._ready && (this.app.size.update(), this.app.sections.open(B.section)));
            }),
            (t.playGame = function () {
              var t = this;
              this.app.sections.close(),
                nn.a.hangout.initHighscoreSession().then(function () {
                  t.app.startGame();
                });
            }),
            (t.goToTitle = function () {
              var t = this;
              this.app.config.commercials
                ? (this.app.sections.close(),
                  this.app.suspend(),
                  nn.a.SDK.commercialBreak().then(function () {
                    return t._goToTitle();
                  }))
                : this._goToTitle();
            }),
            (t._goToTitle = function () {
              var t = this;
              this.app.game.state !== pn.IDLE && this.app.game.idle(),
                setTimeout(function () {
                  t.app.sections.close(), t.app.screenManager.gotoScreenByID("title"), t.app.sections.open("title");
                }, 30);
            }),
            (t.playAgain = function () {
              var t = this;
              this.app.sections.close(),
                this.app.config.commercials
                  ? (this.app.suspend(),
                    nn.a.SDK.commercialBreak().then(function () {
                      return t._playAgain();
                    }))
                  : this._playAgain();
            }),
            (t._playAgain = function () {
              var t = this;
              this.app.sections.close(),
                nn.a.hangout.initHighscoreSession().then(function () {
                  t.app.resume(), t.app.game.idle(), t.app.sfx.unmute(), t.app.game.runWithIntro();
                });
            }),
            Navigation
          );
        })(),
        Wn = i(192),
        Zn = (function () {
          function Store(t, e) {
            var i = this;
            (this.id = t), (this.cache = Object.assign({}, e)), (this.data = Object.assign({}, e)), (this.storage = new Wn.a(t)), (this.onChange = new l.a()), (this._changes = {});
            var n = function (e) {
              Object.defineProperty(i, e, {
                get: function () {
                  return i.get(e);
                },
                set: function (t) {
                  return i.set(e, t);
                },
              });
            };
            for (var o in this.data) n(o);
            this.load();
          }
          var t = Store.prototype;
          return (
            (t.get = function (t) {
              return this.data[t];
            }),
            (t.set = function (t, e) {
              (this.data[t] = e),
                this.cache[t] !== this.data[t] &&
                  ((this._lastChange = {
                    field: t,
                    from: this.cache[t],
                    to: this[t],
                  }),
                  (this._changes[t] = {
                    from: this.cache[t],
                    to: this[t],
                  }),
                  this.onChange.dispatch(t, this[t], this.cache[t]),
                  (this.cache[t] = this.data[t]));
            }),
            (t.update = function () {
              for (var t in this.cache) this.set(t, this.data[t]);
            }),
            (t.load = function () {
              var t = this.storage.getObject(this.id);
              t && (Object.assign(this.data, t), this.update());
            }),
            (t.save = function () {
              this.update(), this.storage.storeObject(this.id, this.data);
            }),
            (t.lastChange = function (t) {
              return this._changes[t] || null;
            }),
            Store
          );
        })();
  
      function asyncGeneratorStep(t, e, i, n, o, s, a) {
        try {
          var r = t[s](a),
            h = r.value;
        } catch (t) {
          return void i(t);
        }
        r.done ? e(h) : Promise.resolve(h).then(n, o);
      }
      var Kn = [
          {
            name: "preload",
            assets: ["preload"],
          },
          {
            name: "idle",
            assets: ["idle", "chunks_idle"],
          },
          {
            name: "ui",
            assets: ["ui"],
          },
          {
            name: "game",
            assets: ["game", "chunks_game"],
          },
        ],
        Jn = (function () {
          function Resources(t, e) {
            (this.app = t), (this.config = e || Kn), (this.level = -1), (this.levelLoading = -1);
          }
          var t = Resources.prototype;
          return (
            (t.init = function () {
              (this.app.resourceManager.version = "low"), (this.onLoadStart = this.app.addSignal("onLoadStart")), (this.onLoadComplete = this.app.addSignal("onLoadComplete"));
            }),
            (t.load = (function () {
              var s,
                e =
                  ((s = regeneratorRuntime.mark(function _callee(e) {
                    var i, n, o, s;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((i = this.getLevel(e)) <= this.levelLoading) return t.abrupt("return");
                              t.next = 3;
                              break;
                            case 3:
                              if (-1 == i) throw new Error("Invalid level ref: " + e);
                              t.next = 5;
                              break;
                            case 5:
                              for (this.levelLoading = i, this.onLoadStart.dispatch(this.config[i].name, i), n = [], o = 0; o <= i; o++) (s = this.config[o]), (n = n.concat(s.assets));
                              return (t.next = 11), this.app.screenManager._loadAssets(n);
                            case 11:
                              (this.level = i), (this.levelLoading = -1), this.onLoadComplete.dispatch(this.config[i].name, i);
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      _callee,
                      this
                    );
                  })),
                  function () {
                    var t = this,
                      o = arguments;
                    return new Promise(function (e, i) {
                      var n = s.apply(t, o);
  
                      function _next(t) {
                        asyncGeneratorStep(n, e, i, _next, _throw, "next", t);
                      }
  
                      function _throw(t) {
                        asyncGeneratorStep(n, e, i, _next, _throw, "throw", t);
                      }
                      _next(void 0);
                    });
                  });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (t.getLevel = function (t) {
              switch (typeof t) {
                case "number":
                  return t;
                case "string":
                  return this.levelByName(t);
                default:
                  return this.config.indexOf(t);
              }
            }),
            (t.levelByName = function (t) {
              return this.config
                .map(function (t) {
                  return t.name;
                })
                .indexOf(t);
            }),
            (t.groupByName = function (t) {
              var e = this.levelByName(t);
              return this.config[e];
            }),
            (t.isLoaded = function (t) {
              return this.getLevel(t) <= this.level;
            }),
            Resources
          );
        })(),
        Qn = i(198),
        $n = i(195),
        to = i(196),
        eo = i(132),
        io = ["Good", "Fabulous", "Grumpy", "Normal", "Zealous", "Brainy", "Awesome", "Cute", "Simple", "Pretty", "Super", "Hyper", "Mega", "Wonder", "Master", "Fast", "Quick", "Giant", "Mega"],
        no = ["Toaster", "Machine", "Runner", "Beast", "Genius", "Alien", "Zen", "Guy", "Player", "Llama", "Rider", "Bolt", "Monster", "Bird", "Cat"],
        oo = (function () {
          function NicknameGen() {}
          return (
            (NicknameGen.random = function () {
              return this.pick.apply(this, io) + this.pick.apply(this, no);
            }),
            (NicknameGen.pick = function () {
              for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
              return e[Math.floor(Math.random() * e.length)];
            }),
            NicknameGen
          );
        })(),
        so = (function () {
          function Prompt(t, e) {
            void 0 === e && (e = 10), (this.app = t), (this.w = 400), (this.h = 300), (this.maxChars = e), (this.useDefault = this.app.config.useDefaultPrompt);
          }
          var t = Prompt.prototype;
          return (
            (t.build = function () {
              var t = this;
              if (!this.element) {
                var e = document.createElement("div");
                (e.style.position = "absolute"),
                  (e.style.left = 0),
                  (e.style.top = 0),
                  (e.style.right = 0),
                  (e.style.bottom = 0),
                  (e.style.width = "100%"),
                  (e.style.height = "100%"),
                  (e.style.backgroundColor = "rgba(0, 0, 0, 0.5)"),
                  (e.style.zIndex = 99999);
                var i = document.createElement("div");
                (i.style.width = this.w + "px"),
                  (i.style.height = this.h + "px"),
                  (i.style.position = "absolute"),
                  (i.style.marginLeft = "50%"),
                  (i.style.left = -this.w / 2 + "px"),
                  (i.style.top = "20%"),
                  (i.style.backgroundImage = 'url("assets/placeholder/box_base.png")'),
                  (i.style.backgroundPosition = "center"),
                  (i.style.backgroundRepeat = "no-repeat"),
                  (i.style.backgroundSize = "contain"),
                  (i.style.fontFamily = "Lilita One"),
                  (i.style.textAlign = "center"),
                  (i.style.color = "#004a80"),
                  (i.style.display = "block"),
                  (i.style.overflow = "hidden"),
                  e.appendChild(i);
                var n = document.createElement("div");
                (n.style.fontSize = "2em"), (n.style.width = "100%"), (n.style.marginTop = "20%"), (n.style.textAlign = "center"), i.appendChild(n);
                var o = document.createElement("input");
                (o.style.fontSize = "1.5em"),
                  (o.type = "text"),
                  (o.maxLength = this.maxChars),
                  (o.style.width = "80%"),
                  (o.style.height = "30pt"),
                  (o.style.textAlign = "center"),
                  (o.style.fontFamily = "Lilita One"),
                  (o.style.color = "#3a8bbf"),
                  (o.style.margin = "5px"),
                  (o.style.backgroundColor = "#FFFFFF"),
                  (o.style.border = 0),
                  i.appendChild(o);
                var s = document.createElement("button");
                (s.innerText = this.app.strings.get("cancel")),
                  (s.onclick = function () {
                    return t.onCancel();
                  }),
                  (s.style.fontSize = "1em"),
                  (s.style.width = "120px"),
                  (s.style.height = "40px"),
                  (s.style.textAlign = "center"),
                  (s.style.fontFamily = "Lilita One"),
                  (s.style.color = "#FFFFFF"),
                  (s.style.margin = "10px"),
                  (s.style.backgroundColor = "#c93d48"),
                  (s.style.border = 0),
                  (s.style.cursor = "pointer"),
                  (s.style.borderRadius = "6px"),
                  i.appendChild(s);
                var a = document.createElement("button");
                (a.innerText = this.app.strings.get("ok")),
                  (a.onclick = function () {
                    return t.onOk();
                  }),
                  (a.style.fontSize = "1em"),
                  (a.style.width = "120px"),
                  (a.style.height = "40px"),
                  (a.style.textAlign = "center"),
                  (a.style.fontFamily = "Lilita One"),
                  (a.style.color = "#FFFFFF"),
                  (a.style.backgroundColor = "#3689be"),
                  (a.style.margin = "10px"),
                  (a.style.border = 0),
                  (a.style.cursor = "pointer"),
                  (a.style.borderRadius = "6px"),
                  i.appendChild(a),
                  (this.title = n),
                  (this.input = o),
                  (this.btnOk = a),
                  (this.btnCancel = s),
                  (this.element = e);
              }
            }),
            (t.open = function (t, e, i) {
              if (!this.opened) {
                if (((this.opened = !0), (this.callback = i), this.useDefault)) {
                  var n = window.prompt(t, e);
                  return this.callback && this.callback(n), void (this.opened = !1);
                }
                this._onKeyDownBind || (this._onKeyDownBind = this.onKeyUp.bind(this)),
                  document.addEventListener("keyup", this._onKeyDownBind),
                  this.app.suspend(),
                  this.build(),
                  (this.title.innerText = t),
                  (this.input.value = e),
                  document.body.appendChild(this.element),
                  this.select();
              }
            }),
            (t.close = function () {
              this.opened && ((this.opened = !1), document.removeEventListener("keyup", this._onKeyDownBind), this.input.blur(), document.body.removeChild(this.element), this.app.resume());
            }),
            (t.onKeyUp = function (t) {
              "Enter" != t.code || t.repeat || this.onOk();
            }),
            (t.onOk = function () {
              this.close(), this.callback && this.callback(this.input.value);
            }),
            (t.onCancel = function () {
              this.close(), this.callback && this.callback();
            }),
            (t.select = function () {
              this.input.focus(), this.input.select && this.input.select(), this.input.setSelectionRange && this.input.setSelectionRange(0, this.input.value.length);
            }),
            Prompt
          );
        })();
  
      function Application_asyncGeneratorStep(t, e, i, n, o, s, a) {
        try {
          var r = t[s](a),
            h = r.value;
        } catch (t) {
          return void i(t);
        }
        r.done ? e(h) : Promise.resolve(h).then(n, o);
      }
  
      function Application_asyncToGenerator(s) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (e, i) {
            var n = s.apply(t, o);
  
            function _next(t) {
              Application_asyncGeneratorStep(n, e, i, _next, _throw, "next", t);
            }
  
            function _throw(t) {
              Application_asyncGeneratorStep(n, e, i, _next, _throw, "throw", t);
            }
            _next(void 0);
          });
        };
      }
      var ao = "assets";
  
      function pathJoin() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return e.join("/");
      }
  
      function prepareManifest(t, e) {
        !(function (t, e) {
          for (var i in t)
            for (var n in t[i])
              for (var o in t[i][n])
                for (var s in t[i][n][o]) {
                  var a = t[i][n][o][s];
                  if ("string" == typeof a) {
                    var r = pathJoin(e, a);
                    t[i][n][o][s] = r;
                  }
                }
        })(t, ao);
        var i = e && e.config ? e.config.lang : "en",
          n = {
            default: ao + "/data/strings_en.json",
          },
          o = {
            default: ao + "/data/strings_" + i + ".json",
          };
        return (
          (t.idle.json["data/strings_en"] = n),
          (t.idle.json["data/strings_" + i] = o),
          e.bundle &&
            (!(function (t) {
              var e = t.meta.path;
              for (var i in t)
                if ("meta" !== i)
                  for (var n in t[i])
                    for (var o in t[i][n])
                      for (var s in t[i][n][o]) {
                        var a = pathJoin(e, t[i][n][o][s]).replace("assets/", "");
                        t[i][n][o][s] = a;
                      }
            })(e.bundle),
            (function merge(t, e) {
              for (var i in e) {
                var n = typeof t[i],
                  o = typeof e[i];
                "object" === n && "object" === o ? merge(t[i], e[i]) : (t[i] = "object" === o ? JSON.parse(JSON.stringify(e[i])) : e[i]);
              }
            })(t, e.bundle)),
          t
        );
      }
      B.vertp && (c.settings.PRECISION_VERTEX = B.vertp), B.fragp && (c.settings.PRECISION_VERTEX = B.fragp);
      var ro = (function (s) {
          var t, e;
  
          function Application(t) {
            var e;
            void 0 === t && (t = {}),
              B.override({
                env: t.config.env,
                mobile: r.a.instance.isMobile || r.a.instance.isTouch,
              }),
              B.override(t.config);
            var i,
              n = {
                manifest: prepareManifest(eo, t),
                orientationMode: a.a.orientationModes.BOTH,
                screenManagerOptions: {
                  defaultTransition: new h.a(),
                },
                middlewares: [((i = B.workers), i ? Object($n.a)(1 === i) : Qn.a)],
                version: B.monitor || B.debug,
                fps: B.monitor || B.debug,
                upload: !1,
                antialias: !1,
                transparent: !1,
                loadingScreenClass: xn,
              };
            ((e = s.call(this, n) || this).resourceManager.middlewaresPre = [to.a]), (e.config = Object.assign({}, t.config)), (e.bundle = Object.assign({}, t.bundle));
            var o = e.bundle.meta.color;
            return (
              (e.color = "string" == typeof o ? c.utils.string2hex(o) : o),
              (e.resourceManager.version = "low"),
              (e.resourceManager.getLoader = function () {
                var e = new c.Loader();
                return (
                  this.middlewaresPre.forEach(function (t) {
                    return e.pre(t());
                  }),
                  this.middlewares.forEach(function (t) {
                    return e.use(t());
                  }),
                  e
                );
              }),
              (e.crashed = !1),
              window.addEventListener("error", function (t) {
                e.crash(t.error.message);
              }),
              c.Ticker.shared.stop(),
              c.Ticker._system.stop(),
              d.a.instance.remove(
                e.update,
                (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(e)
              ),
              B.ticker ? e.runWithTicker() : (d.a.instance.stop(), e.runWithAnimFrame()),
              e
            );
          }
          (e = s), ((t = Application).prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
          var i = Application.prototype;
          return (
            (i.crash = function () {
              (this.crashed = !0), d.a.instance.stop();
              for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
              throw new Error("CRASH! " + e.join(" "));
            }),
            (i.getFbxLoader = function () {}),
            (i.init = function (t) {
              (this.container = t),
                this.addSignal("onAppReady", this.onReady),
                this.addSystem(
                  "settings",
                  new Zn("settings", {
                    sound: !0,
                  })
                ),
                this.addSystem(
                  "user",
                  new Zn("user", {
                    score: 0,
                    coins: 0,
                    keys: 0,
                    sprays: 0,
                    hoverboards: 0,
                    character: "jake",
                    outfit: "default",
                    board: "default",
                    name: "",
                    nameSet: !1,
                    tutorial: !0,
                  })
                ),
                this.user.name || ((this.user.name = oo.random()), this.user.save()),
                (this.sfx = new gn(0 === B.volume)),
                this.sfx.setup(eo.audio.audio, ao),
                this.sfx.volume(this.settings.sound ? B.volume : 0),
                this.addSystem("resources", new Jn(this)),
                this.addSystem("nav", new qn(this)),
                this.addSystem("event", new Sn(this)),
                this.addSystem("message", new zn(this)),
                this.addSystem("size", new Tn(this)),
                this.addSystem("strings", new Pn(this)),
                this.addSystem("prompt", new so(this, this.config.maxNicknameChars)),
                B.debug && this.addSystem("debug", new Mn(this)),
                nn.a.hangout.setDebug(this.config.pokiSdkDebug),
                nn.a.hangout.getLobbyId(),
                this.addScreen("loading", new xn(this, this.color)),
                this.preload();
            }),
            (i.show = function () {
              this.container.appendChild(this.view), (this.view.style.position = "absolute"), (this.view.style.top = 0), (this.view.style.left = 0), this.size.update();
            }),
            (i.preload = (function () {
              var t = Application_asyncToGenerator(
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return nn.a.sendCustomMessage("game", "loaderStart", {}), (t.next = 3), this.resources.load("preload");
                          case 3:
                            this.loadingScreen.build(), this.show(), this.load();
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    },
                    _callee,
                    this
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })()),
            (i.load = (function () {
              var t = Application_asyncToGenerator(
                regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (B.fastplay) return (this.shouldStartGame = !0), nn.a.sendCustomMessage("game", "loaderEnd", {}), nn.a.sendCustomMessage("mainMenu", "secondLoaderStart", {}), (t.next = 6), this.resources.load("game");
                            t.next = 11;
                            break;
                          case 6:
                            this.ready(), (this.gameLoaded = !0), nn.a.SDK.gameLoadingFinished(), (t.next = 24);
                            break;
                          case 11:
                            if (B.loadAll) return (t.next = 14), this.resources.load("game");
                            t.next = 16;
                            break;
                          case 14:
                            t.next = 18;
                            break;
                          case 16:
                            return (t.next = 18), this.resources.load("idle");
                          case 18:
                            return nn.a.sendCustomMessage("game", "loaderEnd", {}), (this.bgLoading = !0), (t.next = 22), this.resources.load("ui");
                          case 22:
                            (this.bgLoading = !1), B.autoload && this.loadGame();
                          case 24:
                          case "end":
                            return t.stop();
                        }
                    },
                    _callee2,
                    this
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })()),
            (i.loadGame = (function () {
              var t = Application_asyncToGenerator(
                regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (this.bgLoading) return t.abrupt("return");
                            t.next = 2;
                            break;
                          case 2:
                            return (this.bgLoading = !0), nn.a.sendCustomMessage("mainMenu", "secondLoaderStart", {}), (t.next = 6), this.resources.load("game");
                          case 6:
                            (this.bgLoading = !1), (this.gameLoaded = !0);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    _callee3,
                    this
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })()),
            (i.onLoadStart = function (t, e) {}),
            (i.onLoadComplete = function (t, e) {
              switch (t) {
                case "preload":
                  break;
                case "idle":
                  B.fastplay || this.ready();
                  break;
                case "ui":
                  B.fastplay || (nn.a.sendCustomMessage("mainMenu", "interactive", {}), nn.a.SDK.gameLoadingFinished());
                  break;
                case "game":
                  nn.a.sendCustomMessage("mainMenu", "secondLoaderEnd", {}), this.ready(), (this.gameLoaded = !0), this.shouldStartGame && this.startGame();
              }
              this.size.update();
            }),
            (i.ready = function () {
              var e = this;
              this._readyDispatched ||
                this._ready ||
                ((this._readyDispatched = !0),
                this.strings.onAppReady(),
                this.createGame(),
                (this.sections = new vn("root")),
                (this.sections.container = this.stage),
                this.addScreen("title", new _n(this)),
                this.addScreen("game", new kn(this)),
                setTimeout(function () {
                  e._ready = !0;
                  var t = B.fastplay ? "game" : "title";
                  e.screenManager.gotoScreenByID(t), e.onReady.dispatch(), (e.loadingScreen.firstLoadPassed = !0);
                }, 100));
            }),
            (i.createGame = function () {
              this.game || ((this.game = new pn(this, B, this.sfx)), this.game.idle(), this.stage.addChildAt(this.game.stage, 0));
            }),
            (i.startGame = function () {
              if ((this.sections && this.sections.close(), !this.gameLoaded)) return this.loadGame(), (this.shouldStartGame = !0), void (this.loadingScreen && this.loadingScreen.updateView(!0));
              this.loadingScreen.updateView(!1),
                this.sfx.play("hero_foot_l", {
                  volume: 0.01,
                }),
                this.sfx.volume(this.settings.sound ? B.volume : 0),
                this.screenManager.gotoScreenByID("game");
            }),
            (i.onFocus = function () {
              this.suspended || (this.game && this.game.onFocus());
            }),
            (i.onBlur = function () {
              this.suspended || (this.game && this.game.onBlur());
            }),
            (i.onMessage = function (t) {
              "startGame" === t.data && this.startGame();
            }),
            (i.onResize = function () {
              (this.view.style.width = this.size.w + "px"),
                (this.view.style.height = this.size.h + "px"),
                (this.view.style.left = "0px"),
                (this.view.style.top = "0px"),
                this.renderer.resize(this.size.sw, this.size.sh),
                this.screenManager.resize(this.size.w, this.size.h),
                (this.screenManager.container.scale.x = this.size.scale),
                (this.screenManager.container.scale.y = this.size.scale),
                this.sections && this.sections.resize(this.size.sw, this.size.sh, 2),
                this.game && this.game.resize(this.size.sw, this.size.sh, 2),
                this.blocker && this.blocker.visible && ((this.blocker.width = this.size.sw), (this.blocker.height = this.size.sh));
            }),
            (i.suspend = function () {
              this.suspended ||
                ((this.suspended = !0),
                this.sfx.mute(),
                this.blocker || ((this.blocker = new c.Graphics()), this.blocker.beginFill(this.color, 0.5), this.blocker.drawRect(0, 0, 16, 16), this.blocker.endFill()),
                (this.blocker.visible = !0),
                this.stage.addChild(this.blocker),
                (this.blocker.width = this.size.sw),
                (this.blocker.height = this.size.sh));
            }),
            (i.resume = function () {
              this.suspended && ((this.suspended = !1), this.view.focus(), this.sfx.unmute(), this.blocker && (this.blocker.visible = !1), this.blocker && this.blocker.parent && this.stage.addChild(this.blocker));
            }),
            (i.runWithTicker = function () {
              d.a.instance.add(this.updateTicker, this, 1);
            }),
            (i.runWithAnimFrame = function () {
              (this.updateAnimFrameBind = this.updateAnimFrame.bind(this)), requestAnimationFrame(this.updateAnimFrameBind);
            }),
            (i.updateTicker = function (t) {
              this.game && this.game.updateTicker(t), this.renderer.render(this.stage);
            }),
            (i.updateAnimFrame = function (t) {
              requestAnimationFrame(this.updateAnimFrameBind), this.game && this.game.updateAnimFrame(t), this.renderer.render(this.stage);
            }),
            (i.addScreen = function (t, e) {
              (this[t + "Screen"] = e), "loading" === t ? (this.screenManager.loadingScreen = e) : this.screenManager.addScreen(e, t);
            }),
            (i.addSystem = function (t, e) {
              if ((this.system || (this.system = {}), this.system[t])) throw new Error("App already have system: " + t);
              if (this[t]) throw new Error("App already have a member with the same name as the system: " + t);
              for (var i in ((this.system[t] = e), (this[t] = e), this.signal)) e[i] && this.signal[i].add(e[i], e);
              e.init && e.init(this);
            }),
            (i.addSignal = function (t, e) {
              if ((this.signal || (this.signal = {}), this.signal[t])) throw new Error("App already have signal: " + t);
              for (var i in (e || (e = new l.a()), (this.signal[t] = e), this.system)) {
                var n = this.system[i];
                n[t] && "function" == typeof this[t] && e.add(n[t], n);
              }
              return this[t] && "function" == typeof this[t] && e.add(this[t], this), e;
            }),
            Application
          );
        })(a.a),
        ho = i(197),
        lo = {
          gid: "ssurfers",
          gameDir: "",
          gameContainerId: "og-game-holder",
          isFullScreen: window.self === window.top,
          exitGameUrl: "",
          environment: "test",
          embedVars: {
            statsCounterName: "testCounterName",
            statsAppName: "TestAppName",
          },
        };
      !(function () {
        if ((window.VConsole && new window.VConsole(), new ho.a().supported)) {
          window.og || (window.og = lo),
            window.ASSET_URL || (window.ASSET_URL = ""),
            window.DEVICE_SCALE || (window.DEVICE_SCALE = window.devicePixelRatio || 1),
            window.console || (window.console = {}),
            window.console.log ||
              (window.console.log = function (t) {
                return t;
              });
          var t = document.getElementById(lo.gameContainerId);
          new ro(window.sharedAppData).init(t);
        }
      })();
    },
  });
  