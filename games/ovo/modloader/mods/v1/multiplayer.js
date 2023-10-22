(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
    else if (typeof define === "function" && define.amd) define([], factory);
    else if (typeof exports === "object") exports["CBFjs"] = factory();
    else root["CBFjs"] = factory();
})(window, function () {
    return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
                /******/
            }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
                /******/
            });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
            /******/
        }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter,
        });
                /******/
            }
            /******/
        };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
        });
                /******/
            }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
            /******/
        };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
                mode & 4 &&
                typeof value === "object" &&
                value &&
                value.__esModule
            )
                return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
                    enumerable: true,
                    value: value,
                });
      /******/ if (mode & 2 && typeof value != "string")
                for (var key in value)
                    __webpack_require__.d(
                        ns,
                        key,
                        function (key) {
                            return value[key];
                        }.bind(null, key)
                    );
      /******/ return ns;
            /******/
        };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
                module && module.__esModule
                    ? /******/ function getDefault() {
                        return module["default"];
                    }
                    : /******/ function getModuleExports() {
                        return module;
                    };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
            /******/
        };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(
            (__webpack_require__.s = "./src/cbfjs.js")
        );
        /******/
    })(
    /************************************************************************/
    /******/ {
      /***/ "./node_modules/webpack/buildin/amd-define.js":
        /*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
                    module.exports = function () {
                        throw new Error("define cannot be used indirect");
                    };

                    /***/
                },

      /***/ "./node_modules/webpack/buildin/amd-options.js":
        /*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
        /*! no static exports found */
        /***/ function (module, exports) {
          /* WEBPACK VAR INJECTION */ (function (__webpack_amd_options__) {
                        /* globals __webpack_amd_options__ */
                        module.exports = __webpack_amd_options__;

                        /* WEBPACK VAR INJECTION */
                    }.call(this, {}));

                    /***/
                },

      /***/ "./node_modules/webpack/buildin/module.js":
        /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
        /*! no static exports found */
        /***/ function (module, exports) {
                    module.exports = function (module) {
                        if (!module.webpackPolyfill) {
                            module.deprecate = function () { };

                            module.paths = []; // module.parent = undefined by default

                            if (!module.children) module.children = [];
                            Object.defineProperty(module, "loaded", {
                                enumerable: true,
                                get: function () {
                                    return module.l;
                                },
                            });
                            Object.defineProperty(module, "id", {
                                enumerable: true,
                                get: function () {
                                    return module.i;
                                },
                            });
                            module.webpackPolyfill = 1;
                        }

                        return module;
                    };

                    /***/
                },

      /***/ "./src/cbfjs.js":
        /*!**********************!*\
  !*** ./src/cbfjs.js ***!
  \**********************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (module) {
                        function _typeof(obj) {
                            if (
                                typeof Symbol === "function" &&
                                typeof Symbol.iterator === "symbol"
                            ) {
                                _typeof = function _typeof(obj) {
                                    return typeof obj;
                                };
                            } else {
                                _typeof = function _typeof(obj) {
                                    return obj &&
                                        typeof Symbol === "function" &&
                                        obj.constructor === Symbol &&
                                        obj !== Symbol.prototype
                                        ? "symbol"
                                        : typeof obj;
                                };
                            }
                            return _typeof(obj);
                        }

                        /*
                CBFjs is library for cross-browser fingerprinting
                It generates fingerprint based on device and hardware level features.
                Library was inspired by Song Li's https://github.com/Song-Li/dynamic_fingerprinting dynamic fingerprinting tool
             */
                        (function (scope) {
                            "use strict";
                            /* Helpers */
                            // murmurhash3 non crypto hash library for hash generation
                            // core estimator to estimate number of cores of CPU

                            var murmurHash3 = __webpack_require__(
                /*! ./vendors/murmurhash3/murmurHash3.js */ "./src/vendors/murmurhash3/murmurHash3.js"
                            ); // font detector

                            var Detector = __webpack_require__(
                /*! ./vendors/font-detect/fontdetect.js */ "./src/vendors/font-detect/fontdetect.js"
                            ); // User agent parser

                            var UAParser = __webpack_require__(
                /*! ./vendors/ua-parser/UAParser.js */ "./src/vendors/ua-parser/UAParser.js"
                            );

                            var CBFjs = function CBFjs() { };

                            CBFjs.prototype = {
                                /*
                     Get screen resolution
                     */
                                getScreenResolution: function getScreenResolution() {
                                    var fixed_width = window.screen.width;
                                    var fixed_height = window.screen.height;
                                    var res =
                                        Math.round((fixed_width / fixed_height) * 100) / 100;
                                    return res;
                                },
                                // /*
                                // Get number of CPU cores
                                // Future async function TODO implement with core_estimator library
                                // */
                                // getCPUCores: function (done) {
                                //     if (!navigator.getHardwareConcurrency) {
                                //         return done(-1);
                                //     } else {
                                //         navigator.getHardwareConcurrency(done);
                                //         return;
                                //     }
                                // },

                                /*
                    Get number of CPU cores
                    */
                                getCPUCores: function getCPUCores() {
                                    return navigator.hardwareConcurrency;
                                },

                                /*
                     Get touch support
                     */
                                getTouchSupport: function getTouchSupport() {
                                    return (
                                        "ontouchstart" in window ||
                                        navigator.MaxTouchPoints > 0 ||
                                        navigator.msMaxTouchPoints > 0
                                    );
                                },

                                /*
                     [DISABLED - unsupported by IE] Audio card info
                    audioFingerPrinting: function () {
                        try {
                            var audioCtx = new (window.AudioContext || window.webkitAudioContext),
                                oscillator = audioCtx.createOscillator(),
                                analyser = audioCtx.createAnalyser(),
                                gainNode = audioCtx.createGain(),
                                scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1);
                            var destination = audioCtx.destination;
                            return (audioCtx.sampleRate).toString() + '_' + destination.maxChannelCount + "_" + destination.numberOfInputs + '_' + destination.numberOfOutputs + '_' + destination.channelCount + '_' + destination.channelCountMode + '_' + destination.channelInterpretation;
                        }
                        catch (e) {
                            return "not supported";
                        }
                    },
                        */

                                /*
                     Get color depth of the device's screen
                     */
                                getColorDepth: function getColorDepth() {
                                    return screen.colorDepth;
                                },

                                /*
                    Get timezone offset in minutes. Calculated as UTC - device's time zone
                     */
                                getTimezoneOffset: function getTimezoneOffset() {
                                    var currentDate = new Date();
                                    return currentDate.getTimezoneOffset();
                                },

                                /*
                     Get list of fonts
                     */
                                getFonts: function getFonts(done) {
                                    var handler = () => {
                                        var fontDetective = new Detector();
                                        var fonts = fontDetective.testAllFonts();
                                        done(fonts);
                                    };
                                    if (
                                        document.readyState === "complete" ||
                                        document.readyState === "loaded" ||
                                        document.readyState === "interactive"
                                    ) {
                                        handler();
                                    } else {
                                    }
                                    document.addEventListener(
                                        "DOMContentLoaded",
                                        function (event) {
                                            handler();
                                        }
                                    );
                                },

                                /*
                     Get OS
                     */
                                getOS: function getOS() {
                                    var uap = new UAParser();
                                    return uap.getOS().name;
                                },

                                /*
                     Get OS version
                     */
                                getOSVersion: function getOSVersion() {
                                    var uap = new UAParser();
                                    return uap.getOS().version;
                                },

                                /*
                     Detects if device is a mobile
                     */
                                isMobile: function isMobile() {
                                    // detectmobilebrowsers.com JavaScript Mobile Detection Script
                                    var uap = new UAParser();
                                    var browserData = uap.getResult();
                                    var dataString =
                                        browserData.ua || navigator.vendor || window.opera;
                                    return (
                                        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                                            dataString
                                        ) ||
                                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                                            dataString.substr(0, 4)
                                        )
                                    );
                                },

                                /*
                    Get CPU architecture
                     */
                                getCPUarchitecture: function getCPUarchitecture() {
                                    var uap = new UAParser();
                                    return uap.getCPU().architecture;
                                },
                                // /*
                                // Helper function to handle asynchronous call
                                //  */
                                generateAsyncHash: function generateAsyncHash(
                                    parameters,
                                    done
                                ) {
                                    // this.getCPUCores(function(cores) {
                                    //    parameters.push(cores);
                                    //    done(parameters);
                                    // });
                                    this.getFonts(function (fonts) {
                                        parameters.push(fonts);
                                        done(parameters);
                                    });
                                },

                                /*
                    Generate hash from all features
                     */
                                get: function get(done) {
                                    var parameters = [];
                                    parameters.push(this.getScreenResolution());
                                    parameters.push(this.getTouchSupport());
                                    parameters.push(this.getColorDepth());
                                    parameters.push(this.getTimezoneOffset()); // Removed from here as it is async function
                                    // parameters.push(this.getFonts());

                                    parameters.push(this.getOS());
                                    parameters.push(this.getOSVersion());
                                    parameters.push(this.isMobile());
                                    parameters.push(this.getCPUarchitecture()); // Disabled as it is not supported by IE
                                    //parameters.push(this.audioFingerPrinting());

                                    parameters.push(this.getCPUCores()); // Async version of generating hash

                                    this.generateAsyncHash(parameters, function (newParameters) {
                                        var hash = murmurHash3.x86.hash32(
                                            newParameters.join("~~~")
                                        );
                                        return done(hash, newParameters);
                                    }); // var hash = murmurHash3.x86.hash32((parameters).join("~~~"));
                                    // return done(hash, parameters);
                                },
                            };

                            if (
                                (false ? undefined : _typeof(module)) === "object" &&
                                typeof exports !== "undefined"
                            ) {
                                module.exports = CBFjs;
                            } else {
                                scope.CBFjs = CBFjs;
                            }
                        })(this);
                        /* WEBPACK VAR INJECTION */
                    }.call(
                        this,
                        __webpack_require__(
              /*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js"
                        )(module)
                    ));

                    /***/
                },

      /***/ "./src/vendors/font-detect/fontdetect.js":
        /*!***********************************************!*\
  !*** ./src/vendors/font-detect/fontdetect.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (module) {
                        function _typeof(obj) {
                            if (
                                typeof Symbol === "function" &&
                                typeof Symbol.iterator === "symbol"
                            ) {
                                _typeof = function _typeof(obj) {
                                    return typeof obj;
                                };
                            } else {
                                _typeof = function _typeof(obj) {
                                    return obj &&
                                        typeof Symbol === "function" &&
                                        obj.constructor === Symbol &&
                                        obj !== Symbol.prototype
                                        ? "symbol"
                                        : typeof obj;
                                };
                            }
                            return _typeof(obj);
                        }

                        /* Edited by Lukas Matta (Add module export) */

                        /**
                         * JavaScript code to detect available availability of a
                         * particular font in a browser using JavaScript and CSS.
                         *
                         * Author : Lalit Patel
                         * Website: http://www.lalit.org/lab/javascript-css-font-detect/
                         * License: Apache Software License 2.0
                         *          http://www.apache.org/licenses/LICENSE-2.0
                         * Version: 0.15 (21 Sep 2009)
                         *          Changed comparision font to default from sans-default-default,
                         *          as in FF3.0 font of child element didn't fallback
                         *          to parent element if the font is missing.
                         * Version: 0.2 (04 Mar 2012)
                         *          Comparing font against all the 3 generic font families ie,
                         *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
                         *          then that font is 100% not available in the system
                         * Version: 0.3 (24 Mar 2012)
                         *          Replaced sans with serif in the list of baseFonts
                         */

                        /**
                         * Usage: d = new Detector();
                         *        d.detect('font name');
                         */
                        (function (scope) {
                            "use strict";
                            /**
                             * JavaScript code to detect available availability of a
                             * particular font in a browser using JavaScript and CSS.
                             *
                             * Author : Lalit Patel
                             * Website: http://www.lalit.org/lab/javascript-css-font-detect/
                             * License: Apache Software License 2.0
                             *          http://www.apache.org/licenses/LICENSE-2.0
                             * Version: 0.15 (21 Sep 2009)
                             *          Changed comparision font to default from sans-default-default,
                             *          as in FF3.0 font of child element didn't fallback
                             *          to parent element if the font is missing.
                             * Version: 0.2 (04 Mar 2012)
                             *          Comparing font against all the 3 generic font families ie,
                             *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
                             *          then that font is 100% not available in the system
                             * Version: 0.3 (24 Mar 2012)
                             *          Replaced sans with serif in the list of baseFonts
                             */

                            /**
                             * Usage: d = new Detector();
                             *        d.detect('font name');
                             */

                            var Detector = function Detector() {
                                // a font will be compared against all the three default fonts.
                                // and if it doesn't match all 3 then that font is not available.
                                var baseFonts = ["monospace", "sans-serif", "serif"];
                                var fontList = [
                                    "Andale Mono",
                                    "Arial",
                                    "Arial Black",
                                    "Arial Hebrew",
                                    "Arial MT",
                                    "Arial Narrow",
                                    "Arial Unicode MS",
                                    "Bitstream Vera Sans Mono",
                                    "Book Antiqua",
                                    "Bookman Old Style",
                                    "Calibri",
                                    "Cambria",
                                    "Cambria Math",
                                    "Century",
                                    "Century Gothic",
                                    "Century Schoolbook",
                                    "Comic Sans",
                                    "Comic Sans MS",
                                    "Consolas",
                                    "Courier",
                                    "Courier New",
                                    "Garamond",
                                    "Geneva",
                                    "Georgia",
                                    "Helvetica",
                                    "Helvetica Neue",
                                    "Impact",
                                    "Lucida Bright",
                                    "Lucida Calligraphy",
                                    "Lucida Console",
                                    "Lucida Fax",
                                    "LUCIDA GRANDE",
                                    "Lucida Handwriting",
                                    "Lucida Sans",
                                    "Lucida Sans Typewriter",
                                    "Lucida Sans Unicode",
                                    "Microsoft Sans Serif",
                                    "Monaco",
                                    "Monotype Corsiva",
                                    "MS Gothic",
                                    "MS Outlook",
                                    "MS PGothic",
                                    "MS Reference Sans Serif",
                                    "MS Sans Serif",
                                    "MS Serif",
                                    "MYRIAD",
                                    "MYRIAD PRO",
                                    "Palatino",
                                    "Palatino Linotype",
                                    "Segoe Print",
                                    "Segoe Script",
                                    "Segoe UI",
                                    "Segoe UI Light",
                                    "Segoe UI Semibold",
                                    "Segoe UI Symbol",
                                    "Tahoma",
                                    "Times",
                                    "Times New Roman",
                                    "Times New Roman PS",
                                    "Trebuchet MS",
                                    "Verdana",
                                    "Wingdings",
                                    "Wingdings 2",
                                    "Wingdings 3",
                                ];
                                var moreFonts = [
                                    "Abadi MT Condensed Light",
                                    "Academy Engraved LET",
                                    "ADOBE CASLON PRO",
                                    "Adobe Garamond",
                                    "ADOBE GARAMOND PRO",
                                    "Agency FB",
                                    "Aharoni",
                                    "Albertus Extra Bold",
                                    "Albertus Medium",
                                    "Algerian",
                                    "Amazone BT",
                                    "American Typewriter",
                                    "American Typewriter Condensed",
                                    "AmerType Md BT",
                                    "Andalus",
                                    "Angsana New",
                                    "AngsanaUPC",
                                    "Antique Olive",
                                    "Aparajita",
                                    "Apple Chancery",
                                    "Apple Color Emoji",
                                    "Apple SD Gothic Neo",
                                    "Arabic Typesetting",
                                    "ARCHER",
                                    "ARNO PRO",
                                    "Arrus BT",
                                    "Aurora Cn BT",
                                    "AvantGarde Bk BT",
                                    "AvantGarde Md BT",
                                    "AVENIR",
                                    "Ayuthaya",
                                    "Bandy",
                                    "Bangla Sangam MN",
                                    "Bank Gothic",
                                    "BankGothic Md BT",
                                    "Baskerville",
                                    "Baskerville Old Face",
                                    "Batang",
                                    "BatangChe",
                                    "Bauer Bodoni",
                                    "Bauhaus 93",
                                    "Bazooka",
                                    "Bell MT",
                                    "Bembo",
                                    "Benguiat Bk BT",
                                    "Berlin Sans FB",
                                    "Berlin Sans FB Demi",
                                    "Bernard MT Condensed",
                                    "BernhardFashion BT",
                                    "BernhardMod BT",
                                    "Big Caslon",
                                    "BinnerD",
                                    "Blackadder ITC",
                                    "BlairMdITC TT",
                                    "Bodoni 72",
                                    "Bodoni 72 Oldstyle",
                                    "Bodoni 72 Smallcaps",
                                    "Bodoni MT",
                                    "Bodoni MT Black",
                                    "Bodoni MT Condensed",
                                    "Bodoni MT Poster Compressed",
                                    "Bookshelf Symbol 7",
                                    "Boulder",
                                    "Bradley Hand",
                                    "Bradley Hand ITC",
                                    "Bremen Bd BT",
                                    "Britannic Bold",
                                    "Broadway",
                                    "Browallia New",
                                    "BrowalliaUPC",
                                    "Brush Script MT",
                                    "Californian FB",
                                    "Calisto MT",
                                    "Calligrapher",
                                    "Candara",
                                    "CaslonOpnface BT",
                                    "Castellar",
                                    "Centaur",
                                    "Cezanne",
                                    "CG Omega",
                                    "CG Times",
                                    "Chalkboard",
                                    "Chalkboard SE",
                                    "Chalkduster",
                                    "Charlesworth",
                                    "Charter Bd BT",
                                    "Charter BT",
                                    "Chaucer",
                                    "ChelthmITC Bk BT",
                                    "Chiller",
                                    "Clarendon",
                                    "Clarendon Condensed",
                                    "CloisterBlack BT",
                                    "Cochin",
                                    "Colonna MT",
                                    "Constantia",
                                    "Cooper Black",
                                    "Copperplate",
                                    "Copperplate Gothic",
                                    "Copperplate Gothic Bold",
                                    "Copperplate Gothic Light",
                                    "CopperplGoth Bd BT",
                                    "Corbel",
                                    "Cordia New",
                                    "CordiaUPC",
                                    "Cornerstone",
                                    "Coronet",
                                    "Cuckoo",
                                    "Curlz MT",
                                    "DaunPenh",
                                    "Dauphin",
                                    "David",
                                    "DB LCD Temp",
                                    "DELICIOUS",
                                    "Denmark",
                                    "DFKai-SB",
                                    "Didot",
                                    "DilleniaUPC",
                                    "DIN",
                                    "DokChampa",
                                    "Dotum",
                                    "DotumChe",
                                    "Ebrima",
                                    "Edwardian Script ITC",
                                    "Elephant",
                                    "English 111 Vivace BT",
                                    "Engravers MT",
                                    "EngraversGothic BT",
                                    "Eras Bold ITC",
                                    "Eras Demi ITC",
                                    "Eras Light ITC",
                                    "Eras Medium ITC",
                                    "EucrosiaUPC",
                                    "Euphemia",
                                    "Euphemia UCAS",
                                    "EUROSTILE",
                                    "Exotc350 Bd BT",
                                    "FangSong",
                                    "Felix Titling",
                                    "Fixedsys",
                                    "FONTIN",
                                    "Footlight MT Light",
                                    "Forte",
                                    "FrankRuehl",
                                    "Fransiscan",
                                    "Freefrm721 Blk BT",
                                    "FreesiaUPC",
                                    "Freestyle Script",
                                    "French Script MT",
                                    "FrnkGothITC Bk BT",
                                    "Fruitger",
                                    "FRUTIGER",
                                    "Futura",
                                    "Futura Bk BT",
                                    "Futura Lt BT",
                                    "Futura Md BT",
                                    "Futura ZBlk BT",
                                    "FuturaBlack BT",
                                    "Gabriola",
                                    "Galliard BT",
                                    "Gautami",
                                    "Geeza Pro",
                                    "Geometr231 BT",
                                    "Geometr231 Hv BT",
                                    "Geometr231 Lt BT",
                                    "GeoSlab 703 Lt BT",
                                    "GeoSlab 703 XBd BT",
                                    "Gigi",
                                    "Gill Sans",
                                    "Gill Sans MT",
                                    "Gill Sans MT Condensed",
                                    "Gill Sans MT Ext Condensed Bold",
                                    "Gill Sans Ultra Bold",
                                    "Gill Sans Ultra Bold Condensed",
                                    "Gisha",
                                    "Gloucester MT Extra Condensed",
                                    "GOTHAM",
                                    "GOTHAM BOLD",
                                    "Goudy Old Style",
                                    "Goudy Stout",
                                    "GoudyHandtooled BT",
                                    "GoudyOLSt BT",
                                    "Gujarati Sangam MN",
                                    "Gulim",
                                    "GulimChe",
                                    "Gungsuh",
                                    "GungsuhChe",
                                    "Gurmukhi MN",
                                    "Haettenschweiler",
                                    "Harlow Solid Italic",
                                    "Harrington",
                                    "Heather",
                                    "Heiti SC",
                                    "Heiti TC",
                                    "HELV",
                                    "Herald",
                                    "High Tower Text",
                                    "Hiragino Kaku Gothic ProN",
                                    "Hiragino Mincho ProN",
                                    "Hoefler Text",
                                    "Humanst 521 Cn BT",
                                    "Humanst521 BT",
                                    "Humanst521 Lt BT",
                                    "Imprint MT Shadow",
                                    "Incised901 Bd BT",
                                    "Incised901 BT",
                                    "Incised901 Lt BT",
                                    "INCONSOLATA",
                                    "Informal Roman",
                                    "Informal011 BT",
                                    "INTERSTATE",
                                    "IrisUPC",
                                    "Iskoola Pota",
                                    "JasmineUPC",
                                    "Jazz LET",
                                    "Jenson",
                                    "Jester",
                                    "Jokerman",
                                    "Juice ITC",
                                    "Kabel Bk BT",
                                    "Kabel Ult BT",
                                    "Kailasa",
                                    "KaiTi",
                                    "Kalinga",
                                    "Kannada Sangam MN",
                                    "Kartika",
                                    "Kaufmann Bd BT",
                                    "Kaufmann BT",
                                    "Khmer UI",
                                    "KodchiangUPC",
                                    "Kokila",
                                    "Korinna BT",
                                    "Kristen ITC",
                                    "Krungthep",
                                    "Kunstler Script",
                                    "Lao UI",
                                    "Latha",
                                    "Leelawadee",
                                    "Letter Gothic",
                                    "Levenim MT",
                                    "LilyUPC",
                                    "Lithograph",
                                    "Lithograph Light",
                                    "Long Island",
                                    "Lydian BT",
                                    "Magneto",
                                    "Maiandra GD",
                                    "Malayalam Sangam MN",
                                    "Malgun Gothic",
                                    "Mangal",
                                    "Marigold",
                                    "Marion",
                                    "Marker Felt",
                                    "Market",
                                    "Marlett",
                                    "Matisse ITC",
                                    "Matura MT Script Capitals",
                                    "Meiryo",
                                    "Meiryo UI",
                                    "Microsoft Himalaya",
                                    "Microsoft JhengHei",
                                    "Microsoft New Tai Lue",
                                    "Microsoft PhagsPa",
                                    "Microsoft Tai Le",
                                    "Microsoft Uighur",
                                    "Microsoft YaHei",
                                    "Microsoft Yi Baiti",
                                    "MingLiU",
                                    "MingLiU_HKSCS",
                                    "MingLiU_HKSCS-ExtB",
                                    "MingLiU-ExtB",
                                    "Minion",
                                    "Minion Pro",
                                    "Miriam",
                                    "Miriam Fixed",
                                    "Mistral",
                                    "Modern",
                                    "Modern No. 20",
                                    "Mona Lisa Solid ITC TT",
                                    "Mongolian Baiti",
                                    "MONO",
                                    "MoolBoran",
                                    "Mrs Eaves",
                                    "MS LineDraw",
                                    "MS Mincho",
                                    "MS PMincho",
                                    "MS Reference Specialty",
                                    "MS UI Gothic",
                                    "MT Extra",
                                    "MUSEO",
                                    "MV Boli",
                                    "Nadeem",
                                    "Narkisim",
                                    "NEVIS",
                                    "News Gothic",
                                    "News GothicMT",
                                    "NewsGoth BT",
                                    "Niagara Engraved",
                                    "Niagara Solid",
                                    "Noteworthy",
                                    "NSimSun",
                                    "Nyala",
                                    "OCR A Extended",
                                    "Old Century",
                                    "Old English Text MT",
                                    "Onyx",
                                    "Onyx BT",
                                    "OPTIMA",
                                    "Oriya Sangam MN",
                                    "OSAKA",
                                    "OzHandicraft BT",
                                    "Palace Script MT",
                                    "Papyrus",
                                    "Parchment",
                                    "Party LET",
                                    "Pegasus",
                                    "Perpetua",
                                    "Perpetua Titling MT",
                                    "PetitaBold",
                                    "Pickwick",
                                    "Plantagenet Cherokee",
                                    "Playbill",
                                    "PMingLiU",
                                    "PMingLiU-ExtB",
                                    "Poor Richard",
                                    "Poster",
                                    "PosterBodoni BT",
                                    "PRINCETOWN LET",
                                    "Pristina",
                                    "PTBarnum BT",
                                    "Pythagoras",
                                    "Raavi",
                                    "Rage Italic",
                                    "Ravie",
                                    "Ribbon131 Bd BT",
                                    "Rockwell",
                                    "Rockwell Condensed",
                                    "Rockwell Extra Bold",
                                    "Rod",
                                    "Roman",
                                    "Sakkal Majalla",
                                    "Santa Fe LET",
                                    "Savoye LET",
                                    "Sceptre",
                                    "Script",
                                    "Script MT Bold",
                                    "SCRIPTINA",
                                    "Serifa",
                                    "Serifa BT",
                                    "Serifa Th BT",
                                    "ShelleyVolante BT",
                                    "Sherwood",
                                    "Shonar Bangla",
                                    "Showcard Gothic",
                                    "Shruti",
                                    "Signboard",
                                    "SILKSCREEN",
                                    "SimHei",
                                    "Simplified Arabic",
                                    "Simplified Arabic Fixed",
                                    "SimSun",
                                    "SimSun-ExtB",
                                    "Sinhala Sangam MN",
                                    "Sketch Rockwell",
                                    "Skia",
                                    "Small Fonts",
                                    "Snap ITC",
                                    "Snell Roundhand",
                                    "Socket",
                                    "Souvenir Lt BT",
                                    "Staccato222 BT",
                                    "Steamer",
                                    "Stencil",
                                    "Storybook",
                                    "Styllo",
                                    "Subway",
                                    "Swis721 BlkEx BT",
                                    "Swiss911 XCm BT",
                                    "Sylfaen",
                                    "Synchro LET",
                                    "System",
                                    "Tamil Sangam MN",
                                    "Technical",
                                    "Teletype",
                                    "Telugu Sangam MN",
                                    "Tempus Sans ITC",
                                    "Terminal",
                                    "Thonburi",
                                    "Traditional Arabic",
                                    "Trajan",
                                    "TRAJAN PRO",
                                    "Tristan",
                                    "Tubular",
                                    "Tunga",
                                    "Tw Cen MT",
                                    "Tw Cen MT Condensed",
                                    "Tw Cen MT Condensed Extra Bold",
                                    "TypoUpright BT",
                                    "Unicorn",
                                    "Univers",
                                    "Univers CE 55 Medium",
                                    "Univers Condensed",
                                    "Utsaah",
                                    "Vagabond",
                                    "Vani",
                                    "Vijaya",
                                    "Viner Hand ITC",
                                    "VisualUI",
                                    "Vivaldi",
                                    "Vladimir Script",
                                    "Vrinda",
                                    "Westminster",
                                    "WHITNEY",
                                    "Wide Latin",
                                    "ZapfEllipt BT",
                                    "ZapfHumnst BT",
                                    "ZapfHumnst Dm BT",
                                    "Zapfino",
                                    "Zurich BlkEx BT",
                                    "Zurich Ex BT",
                                    "ZWAdobeF",
                                ]; //we use m or w because these two characters take up the maximum width.
                                // And we use a LLi so that the same matching fonts can get separated

                                var testString = "mmmmmmmmmmlli"; //we test using 72px font size, we may use any size. I guess larger the better.

                                var testSize = "72px";
                                var h = document.getElementsByTagName("body")[0]; // create a SPAN in the document to get the width of the text we use to test

                                var s = document.createElement("span");
                                s.style.fontSize = testSize;
                                s.innerHTML = testString;
                                var defaultWidth = {};
                                var defaultHeight = {};

                                for (var index in baseFonts) {
                                    //get the default width for the three base fonts
                                    s.style.fontFamily = baseFonts[index];
                                    h.appendChild(s);
                                    defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font

                                    defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font

                                    h.removeChild(s);
                                }

                                this.testAllFonts = function () {
                                    var detected = [];

                                    for (var font in fontList) {
                                        if (this.detect(fontList[font]))
                                            detected.push(fontList[font]);
                                    } // for (var font in moreFonts) {
                                    //     if (this.detect(moreFonts[font]))
                                    //         detected.push(moreFonts[font]);
                                    // }

                                    return detected;
                                };

                                this.detect = function (font) {
                                    var detected = false;

                                    for (var index in baseFonts) {
                                        s.style.fontFamily = font + "," + baseFonts[index]; // name of the font along with the base font for fallback.

                                        h.appendChild(s);
                                        var matched =
                                            s.offsetWidth != defaultWidth[baseFonts[index]] ||
                                            s.offsetHeight != defaultHeight[baseFonts[index]];
                                        h.removeChild(s);
                                        detected = detected || matched;
                                    }

                                    return detected;
                                };
                            };

                            if (
                                (false ? undefined : _typeof(module)) === "object" &&
                                typeof exports !== "undefined"
                            ) {
                                module.exports = Detector;
                            } else {
                                scope.Detector = Detector;
                            }
                        })(window);
                        /* WEBPACK VAR INJECTION */
                    }.call(
                        this,
                        __webpack_require__(
              /*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js"
                        )(module)
                    ));

                    /***/
                },

      /***/ "./src/vendors/murmurhash3/murmurHash3.js":
        /*!************************************************!*\
  !*** ./src/vendors/murmurhash3/murmurHash3.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
                    // +----------------------------------------------------------------------+
                    // | murmurHash3.js v2.1.2 (http://github.com/karanlyons/murmurHash.js)   |
                    // | A javascript implementation of MurmurHash3's x86 hashing algorithms. |
                    // |----------------------------------------------------------------------|
                    // | Copyright (c) 2012 Karan Lyons                                       |
                    // | Freely distributable under the MIT license.                          |
                    // +----------------------------------------------------------------------+
                    (function (root, undefined) {
                        "use strict"; // Create a local object that'll be exported or referenced globally.

                        var library = {
                            version: "2.1.2",
                            x86: {},
                            x64: {},
                        }; // PRIVATE FUNCTIONS
                        // -----------------

                        function _x86Multiply(m, n) {
                            //
                            // Given two 32bit ints, returns the two multiplied together as a
                            // 32bit int.
                            //
                            return (m & 0xffff) * n + ((((m >>> 16) * n) & 0xffff) << 16);
                        }

                        function _x86Rotl(m, n) {
                            //
                            // Given a 32bit int and an int representing a number of bit positions,
                            // returns the 32bit int rotated left by that number of positions.
                            //
                            return (m << n) | (m >>> (32 - n));
                        }

                        function _x86Fmix(h) {
                            //
                            // Given a block, returns murmurHash3's final x86 mix of that block.
                            //
                            h ^= h >>> 16;
                            h = _x86Multiply(h, 0x85ebca6b);
                            h ^= h >>> 13;
                            h = _x86Multiply(h, 0xc2b2ae35);
                            h ^= h >>> 16;
                            return h;
                        }

                        function _x64Add(m, n) {
                            //
                            // Given two 64bit ints (as an array of two 32bit ints) returns the two
                            // added together as a 64bit int (as an array of two 32bit ints).
                            //
                            m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
                            n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
                            var o = [0, 0, 0, 0];
                            o[3] += m[3] + n[3];
                            o[2] += o[3] >>> 16;
                            o[3] &= 0xffff;
                            o[2] += m[2] + n[2];
                            o[1] += o[2] >>> 16;
                            o[2] &= 0xffff;
                            o[1] += m[1] + n[1];
                            o[0] += o[1] >>> 16;
                            o[1] &= 0xffff;
                            o[0] += m[0] + n[0];
                            o[0] &= 0xffff;
                            return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
                        }

                        function _x64Multiply(m, n) {
                            //
                            // Given two 64bit ints (as an array of two 32bit ints) returns the two
                            // multiplied together as a 64bit int (as an array of two 32bit ints).
                            //
                            m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
                            n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
                            var o = [0, 0, 0, 0];
                            o[3] += m[3] * n[3];
                            o[2] += o[3] >>> 16;
                            o[3] &= 0xffff;
                            o[2] += m[2] * n[3];
                            o[1] += o[2] >>> 16;
                            o[2] &= 0xffff;
                            o[2] += m[3] * n[2];
                            o[1] += o[2] >>> 16;
                            o[2] &= 0xffff;
                            o[1] += m[1] * n[3];
                            o[0] += o[1] >>> 16;
                            o[1] &= 0xffff;
                            o[1] += m[2] * n[2];
                            o[0] += o[1] >>> 16;
                            o[1] &= 0xffff;
                            o[1] += m[3] * n[1];
                            o[0] += o[1] >>> 16;
                            o[1] &= 0xffff;
                            o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
                            o[0] &= 0xffff;
                            return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
                        }

                        function _x64Rotl(m, n) {
                            //
                            // Given a 64bit int (as an array of two 32bit ints) and an int
                            // representing a number of bit positions, returns the 64bit int (as an
                            // array of two 32bit ints) rotated left by that number of positions.
                            //
                            n %= 64;

                            if (n === 32) {
                                return [m[1], m[0]];
                            } else if (n < 32) {
                                return [
                                    (m[0] << n) | (m[1] >>> (32 - n)),
                                    (m[1] << n) | (m[0] >>> (32 - n)),
                                ];
                            } else {
                                n -= 32;
                                return [
                                    (m[1] << n) | (m[0] >>> (32 - n)),
                                    (m[0] << n) | (m[1] >>> (32 - n)),
                                ];
                            }
                        }

                        function _x64LeftShift(m, n) {
                            //
                            // Given a 64bit int (as an array of two 32bit ints) and an int
                            // representing a number of bit positions, returns the 64bit int (as an
                            // array of two 32bit ints) shifted left by that number of positions.
                            //
                            n %= 64;

                            if (n === 0) {
                                return m;
                            } else if (n < 32) {
                                return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
                            } else {
                                return [m[1] << (n - 32), 0];
                            }
                        }

                        function _x64Xor(m, n) {
                            //
                            // Given two 64bit ints (as an array of two 32bit ints) returns the two
                            // xored together as a 64bit int (as an array of two 32bit ints).
                            //
                            return [m[0] ^ n[0], m[1] ^ n[1]];
                        }

                        function _x64Fmix(h) {
                            //
                            // Given a block, returns murmurHash3's final x64 mix of that block.
                            // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
                            // only place where we need to right shift 64bit ints.)
                            //
                            h = _x64Xor(h, [0, h[0] >>> 1]);
                            h = _x64Multiply(h, [0xff51afd7, 0xed558ccd]);
                            h = _x64Xor(h, [0, h[0] >>> 1]);
                            h = _x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
                            h = _x64Xor(h, [0, h[0] >>> 1]);
                            return h;
                        } // PUBLIC FUNCTIONS
                        // ----------------

                        library.x86.hash32 = function (key, seed) {
                            //
                            // Given a string and an optional seed as an int, returns a 32 bit hash
                            // using the x86 flavor of MurmurHash3, as an unsigned int.
                            //
                            key = key || "";
                            seed = seed || 0;
                            var remainder = key.length % 4;
                            var bytes = key.length - remainder;
                            var h1 = seed;
                            var k1 = 0;
                            var c1 = 0xcc9e2d51;
                            var c2 = 0x1b873593;

                            for (var i = 0; i < bytes; i = i + 4) {
                                k1 =
                                    (key.charCodeAt(i) & 0xff) |
                                    ((key.charCodeAt(i + 1) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 2) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 3) & 0xff) << 24);
                                k1 = _x86Multiply(k1, c1);
                                k1 = _x86Rotl(k1, 15);
                                k1 = _x86Multiply(k1, c2);
                                h1 ^= k1;
                                h1 = _x86Rotl(h1, 13);
                                h1 = _x86Multiply(h1, 5) + 0xe6546b64;
                            }

                            k1 = 0;

                            switch (remainder) {
                                case 3:
                                    k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;

                                case 2:
                                    k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;

                                case 1:
                                    k1 ^= key.charCodeAt(i) & 0xff;
                                    k1 = _x86Multiply(k1, c1);
                                    k1 = _x86Rotl(k1, 15);
                                    k1 = _x86Multiply(k1, c2);
                                    h1 ^= k1;
                            }

                            h1 ^= key.length;
                            h1 = _x86Fmix(h1);
                            return h1 >>> 0;
                        };

                        library.x86.hash128 = function (key, seed) {
                            //
                            // Given a string and an optional seed as an int, returns a 128 bit
                            // hash using the x86 flavor of MurmurHash3, as an unsigned hex.
                            //
                            key = key || "";
                            seed = seed || 0;
                            var remainder = key.length % 16;
                            var bytes = key.length - remainder;
                            var h1 = seed;
                            var h2 = seed;
                            var h3 = seed;
                            var h4 = seed;
                            var k1 = 0;
                            var k2 = 0;
                            var k3 = 0;
                            var k4 = 0;
                            var c1 = 0x239b961b;
                            var c2 = 0xab0e9789;
                            var c3 = 0x38b34ae5;
                            var c4 = 0xa1e38b93;

                            for (var i = 0; i < bytes; i = i + 16) {
                                k1 =
                                    (key.charCodeAt(i) & 0xff) |
                                    ((key.charCodeAt(i + 1) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 2) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 3) & 0xff) << 24);
                                k2 =
                                    (key.charCodeAt(i + 4) & 0xff) |
                                    ((key.charCodeAt(i + 5) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 6) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 7) & 0xff) << 24);
                                k3 =
                                    (key.charCodeAt(i + 8) & 0xff) |
                                    ((key.charCodeAt(i + 9) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 10) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 11) & 0xff) << 24);
                                k4 =
                                    (key.charCodeAt(i + 12) & 0xff) |
                                    ((key.charCodeAt(i + 13) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 14) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 15) & 0xff) << 24);
                                k1 = _x86Multiply(k1, c1);
                                k1 = _x86Rotl(k1, 15);
                                k1 = _x86Multiply(k1, c2);
                                h1 ^= k1;
                                h1 = _x86Rotl(h1, 19);
                                h1 += h2;
                                h1 = _x86Multiply(h1, 5) + 0x561ccd1b;
                                k2 = _x86Multiply(k2, c2);
                                k2 = _x86Rotl(k2, 16);
                                k2 = _x86Multiply(k2, c3);
                                h2 ^= k2;
                                h2 = _x86Rotl(h2, 17);
                                h2 += h3;
                                h2 = _x86Multiply(h2, 5) + 0x0bcaa747;
                                k3 = _x86Multiply(k3, c3);
                                k3 = _x86Rotl(k3, 17);
                                k3 = _x86Multiply(k3, c4);
                                h3 ^= k3;
                                h3 = _x86Rotl(h3, 15);
                                h3 += h4;
                                h3 = _x86Multiply(h3, 5) + 0x96cd1c35;
                                k4 = _x86Multiply(k4, c4);
                                k4 = _x86Rotl(k4, 18);
                                k4 = _x86Multiply(k4, c1);
                                h4 ^= k4;
                                h4 = _x86Rotl(h4, 13);
                                h4 += h1;
                                h4 = _x86Multiply(h4, 5) + 0x32ac3b17;
                            }

                            k1 = 0;
                            k2 = 0;
                            k3 = 0;
                            k4 = 0;

                            switch (remainder) {
                                case 15:
                                    k4 ^= key.charCodeAt(i + 14) << 16;

                                case 14:
                                    k4 ^= key.charCodeAt(i + 13) << 8;

                                case 13:
                                    k4 ^= key.charCodeAt(i + 12);
                                    k4 = _x86Multiply(k4, c4);
                                    k4 = _x86Rotl(k4, 18);
                                    k4 = _x86Multiply(k4, c1);
                                    h4 ^= k4;

                                case 12:
                                    k3 ^= key.charCodeAt(i + 11) << 24;

                                case 11:
                                    k3 ^= key.charCodeAt(i + 10) << 16;

                                case 10:
                                    k3 ^= key.charCodeAt(i + 9) << 8;

                                case 9:
                                    k3 ^= key.charCodeAt(i + 8);
                                    k3 = _x86Multiply(k3, c3);
                                    k3 = _x86Rotl(k3, 17);
                                    k3 = _x86Multiply(k3, c4);
                                    h3 ^= k3;

                                case 8:
                                    k2 ^= key.charCodeAt(i + 7) << 24;

                                case 7:
                                    k2 ^= key.charCodeAt(i + 6) << 16;

                                case 6:
                                    k2 ^= key.charCodeAt(i + 5) << 8;

                                case 5:
                                    k2 ^= key.charCodeAt(i + 4);
                                    k2 = _x86Multiply(k2, c2);
                                    k2 = _x86Rotl(k2, 16);
                                    k2 = _x86Multiply(k2, c3);
                                    h2 ^= k2;

                                case 4:
                                    k1 ^= key.charCodeAt(i + 3) << 24;

                                case 3:
                                    k1 ^= key.charCodeAt(i + 2) << 16;

                                case 2:
                                    k1 ^= key.charCodeAt(i + 1) << 8;

                                case 1:
                                    k1 ^= key.charCodeAt(i);
                                    k1 = _x86Multiply(k1, c1);
                                    k1 = _x86Rotl(k1, 15);
                                    k1 = _x86Multiply(k1, c2);
                                    h1 ^= k1;
                            }

                            h1 ^= key.length;
                            h2 ^= key.length;
                            h3 ^= key.length;
                            h4 ^= key.length;
                            h1 += h2;
                            h1 += h3;
                            h1 += h4;
                            h2 += h1;
                            h3 += h1;
                            h4 += h1;
                            h1 = _x86Fmix(h1);
                            h2 = _x86Fmix(h2);
                            h3 = _x86Fmix(h3);
                            h4 = _x86Fmix(h4);
                            h1 += h2;
                            h1 += h3;
                            h1 += h4;
                            h2 += h1;
                            h3 += h1;
                            h4 += h1;
                            return (
                                ("00000000" + (h1 >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (h2 >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (h3 >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (h4 >>> 0).toString(16)).slice(-8)
                            );
                        };

                        library.x64.hash128 = function (key, seed) {
                            //
                            // Given a string and an optional seed as an int, returns a 128 bit
                            // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
                            //
                            key = key || "";
                            seed = seed || 0;
                            var remainder = key.length % 16;
                            var bytes = key.length - remainder;
                            var h1 = [0, seed];
                            var h2 = [0, seed];
                            var k1 = [0, 0];
                            var k2 = [0, 0];
                            var c1 = [0x87c37b91, 0x114253d5];
                            var c2 = [0x4cf5ad43, 0x2745937f];

                            for (var i = 0; i < bytes; i = i + 16) {
                                k1 = [
                                    (key.charCodeAt(i + 4) & 0xff) |
                                    ((key.charCodeAt(i + 5) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 6) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 7) & 0xff) << 24),
                                    (key.charCodeAt(i) & 0xff) |
                                    ((key.charCodeAt(i + 1) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 2) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 3) & 0xff) << 24),
                                ];
                                k2 = [
                                    (key.charCodeAt(i + 12) & 0xff) |
                                    ((key.charCodeAt(i + 13) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 14) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 15) & 0xff) << 24),
                                    (key.charCodeAt(i + 8) & 0xff) |
                                    ((key.charCodeAt(i + 9) & 0xff) << 8) |
                                    ((key.charCodeAt(i + 10) & 0xff) << 16) |
                                    ((key.charCodeAt(i + 11) & 0xff) << 24),
                                ];
                                k1 = _x64Multiply(k1, c1);
                                k1 = _x64Rotl(k1, 31);
                                k1 = _x64Multiply(k1, c2);
                                h1 = _x64Xor(h1, k1);
                                h1 = _x64Rotl(h1, 27);
                                h1 = _x64Add(h1, h2);
                                h1 = _x64Add(_x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
                                k2 = _x64Multiply(k2, c2);
                                k2 = _x64Rotl(k2, 33);
                                k2 = _x64Multiply(k2, c1);
                                h2 = _x64Xor(h2, k2);
                                h2 = _x64Rotl(h2, 31);
                                h2 = _x64Add(h2, h1);
                                h2 = _x64Add(_x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
                            }

                            k1 = [0, 0];
                            k2 = [0, 0];

                            switch (remainder) {
                                case 15:
                                    k2 = _x64Xor(
                                        k2,
                                        _x64LeftShift([0, key.charCodeAt(i + 14)], 48)
                                    );

                                case 14:
                                    k2 = _x64Xor(
                                        k2,
                                        _x64LeftShift([0, key.charCodeAt(i + 13)], 40)
                                    );

                                case 13:
                                    k2 = _x64Xor(
                                        k2,
                                        _x64LeftShift([0, key.charCodeAt(i + 12)], 32)
                                    );

                                case 12:
                                    k2 = _x64Xor(
                                        k2,
                                        _x64LeftShift([0, key.charCodeAt(i + 11)], 24)
                                    );

                                case 11:
                                    k2 = _x64Xor(
                                        k2,
                                        _x64LeftShift([0, key.charCodeAt(i + 10)], 16)
                                    );

                                case 10:
                                    k2 = _x64Xor(
                                        k2,
                                        _x64LeftShift([0, key.charCodeAt(i + 9)], 8)
                                    );

                                case 9:
                                    k2 = _x64Xor(k2, [0, key.charCodeAt(i + 8)]);
                                    k2 = _x64Multiply(k2, c2);
                                    k2 = _x64Rotl(k2, 33);
                                    k2 = _x64Multiply(k2, c1);
                                    h2 = _x64Xor(h2, k2);

                                case 8:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 7)], 56)
                                    );

                                case 7:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 6)], 48)
                                    );

                                case 6:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 5)], 40)
                                    );

                                case 5:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 4)], 32)
                                    );

                                case 4:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 3)], 24)
                                    );

                                case 3:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 2)], 16)
                                    );

                                case 2:
                                    k1 = _x64Xor(
                                        k1,
                                        _x64LeftShift([0, key.charCodeAt(i + 1)], 8)
                                    );

                                case 1:
                                    k1 = _x64Xor(k1, [0, key.charCodeAt(i)]);
                                    k1 = _x64Multiply(k1, c1);
                                    k1 = _x64Rotl(k1, 31);
                                    k1 = _x64Multiply(k1, c2);
                                    h1 = _x64Xor(h1, k1);
                            }

                            h1 = _x64Xor(h1, [0, key.length]);
                            h2 = _x64Xor(h2, [0, key.length]);
                            h1 = _x64Add(h1, h2);
                            h2 = _x64Add(h2, h1);
                            h1 = _x64Fmix(h1);
                            h2 = _x64Fmix(h2);
                            h1 = _x64Add(h1, h2);
                            h2 = _x64Add(h2, h1);
                            return (
                                ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) +
                                ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8)
                            );
                        }; // INITIALIZATION
                        // --------------
                        // Export murmurHash3 for CommonJS, either as an AMD module or just as part
                        // of the global object.

                        if (true) {
                            if (typeof module !== "undefined" && module.exports) {
                                exports = module.exports = library;
                            }

                            exports.murmurHash3 = library;
                        } else {
                        }
                    })(this);

                    /***/
                },

      /***/ "./src/vendors/ua-parser/UAParser.js":
        /*!*******************************************!*\
  !*** ./src/vendors/ua-parser/UAParser.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (module) {
                        var __WEBPACK_AMD_DEFINE_RESULT__;
                        function _typeof(obj) {
                            if (
                                typeof Symbol === "function" &&
                                typeof Symbol.iterator === "symbol"
                            ) {
                                _typeof = function _typeof(obj) {
                                    return typeof obj;
                                };
                            } else {
                                _typeof = function _typeof(obj) {
                                    return obj &&
                                        typeof Symbol === "function" &&
                                        obj.constructor === Symbol &&
                                        obj !== Symbol.prototype
                                        ? "symbol"
                                        : typeof obj;
                                };
                            }
                            return _typeof(obj);
                        }

                        /*!
                         * UAParser.js v0.7.18
                         * Lightweight JavaScript-based User-Agent string parser
                         * https://github.com/faisalman/ua-parser-js
                         *
                         * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                         * Dual licensed under GPLv2 or MIT
                         */
                        (function (window, undefined) {
                            "use strict"; //////////////
                            // Constants
                            /////////////

                            var LIBVERSION = "0.7.18",
                                EMPTY = "",
                                UNKNOWN = "?",
                                FUNC_TYPE = "function",
                                UNDEF_TYPE = "undefined",
                                OBJ_TYPE = "object",
                                STR_TYPE = "string",
                                MAJOR = "major",
                                // deprecated
                                MODEL = "model",
                                NAME = "name",
                                TYPE = "type",
                                VENDOR = "vendor",
                                VERSION = "version",
                                ARCHITECTURE = "architecture",
                                CONSOLE = "console",
                                MOBILE = "mobile",
                                TABLET = "tablet",
                                SMARTTV = "smarttv",
                                WEARABLE = "wearable",
                                EMBEDDED = "embedded"; ///////////
                            // Helper
                            //////////

                            var util = {
                                extend: function extend(regexes, extensions) {
                                    var margedRegexes = {};

                                    for (var i in regexes) {
                                        if (extensions[i] && extensions[i].length % 2 === 0) {
                                            margedRegexes[i] = extensions[i].concat(regexes[i]);
                                        } else {
                                            margedRegexes[i] = regexes[i];
                                        }
                                    }

                                    return margedRegexes;
                                },
                                has: function has(str1, str2) {
                                    if (typeof str1 === "string") {
                                        return (
                                            str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1
                                        );
                                    } else {
                                        return false;
                                    }
                                },
                                lowerize: function lowerize(str) {
                                    return str.toLowerCase();
                                },
                                major: function major(version) {
                                    return _typeof(version) === STR_TYPE
                                        ? version.replace(/[^\d\.]/g, "").split(".")[0]
                                        : undefined;
                                },
                                trim: function trim(str) {
                                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                                },
                            }; ///////////////
                            // Map helper
                            //////////////

                            var mapper = {
                                rgx: function rgx(ua, arrays) {
                                    //var result = {},
                                    var i = 0,
                                        j,
                                        k,
                                        p,
                                        q,
                                        matches,
                                        match; //, args = arguments;

                                    /*// construct object barebones
                         for (p = 0; p < args[1].length; p++) {
                         q = args[1][p];
                         result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                         }*/
                                    // loop through all regexes maps

                                    while (i < arrays.length && !matches) {
                                        var regex = arrays[i],
                                            // even sequence (0,2,4,..)
                                            props = arrays[i + 1]; // odd sequence (1,3,5,..)

                                        j = k = 0; // try matching uastring with regexes

                                        while (j < regex.length && !matches) {
                                            matches = regex[j++].exec(ua);

                                            if (!!matches) {
                                                for (p = 0; p < props.length; p++) {
                                                    match = matches[++k];
                                                    q = props[p]; // check if given property is actually array

                                                    if (_typeof(q) === OBJ_TYPE && q.length > 0) {
                                                        if (q.length == 2) {
                                                            if (_typeof(q[1]) == FUNC_TYPE) {
                                                                // assign modified match
                                                                this[q[0]] = q[1].call(this, match);
                                                            } else {
                                                                // assign given value, ignore regex match
                                                                this[q[0]] = q[1];
                                                            }
                                                        } else if (q.length == 3) {
                                                            // check whether function or regex
                                                            if (
                                                                _typeof(q[1]) === FUNC_TYPE &&
                                                                !(q[1].exec && q[1].test)
                                                            ) {
                                                                // call function (usually string mapper)
                                                                this[q[0]] = match
                                                                    ? q[1].call(this, match, q[2])
                                                                    : undefined;
                                                            } else {
                                                                // sanitize match using given regex
                                                                this[q[0]] = match
                                                                    ? match.replace(q[1], q[2])
                                                                    : undefined;
                                                            }
                                                        } else if (q.length == 4) {
                                                            this[q[0]] = match
                                                                ? q[3].call(this, match.replace(q[1], q[2]))
                                                                : undefined;
                                                        }
                                                    } else {
                                                        this[q] = match ? match : undefined;
                                                    }
                                                }
                                            }
                                        }

                                        i += 2;
                                    } // console.log(this);
                                    //return this;
                                },
                                str: function str(_str, map) {
                                    for (var i in map) {
                                        // check if array
                                        if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                            for (var j = 0; j < map[i].length; j++) {
                                                if (util.has(map[i][j], _str)) {
                                                    return i === UNKNOWN ? undefined : i;
                                                }
                                            }
                                        } else if (util.has(map[i], _str)) {
                                            return i === UNKNOWN ? undefined : i;
                                        }
                                    }

                                    return _str;
                                },
                            }; ///////////////
                            // String map
                            //////////////

                            var maps = {
                                browser: {
                                    oldsafari: {
                                        version: {
                                            "1.0": "/8",
                                            1.2: "/1",
                                            1.3: "/3",
                                            "2.0": "/412",
                                            "2.0.2": "/416",
                                            "2.0.3": "/417",
                                            "2.0.4": "/419",
                                            "?": "/",
                                        },
                                    },
                                },
                                device: {
                                    amazon: {
                                        model: {
                                            "Fire Phone": ["SD", "KF"],
                                        },
                                    },
                                    sprint: {
                                        model: {
                                            "Evo Shift 4G": "7373KT",
                                        },
                                        vendor: {
                                            HTC: "APA",
                                            Sprint: "Sprint",
                                        },
                                    },
                                },
                                os: {
                                    windows: {
                                        version: {
                                            ME: "4.90",
                                            "NT 3.11": "NT3.51",
                                            "NT 4.0": "NT4.0",
                                            2000: "NT 5.0",
                                            XP: ["NT 5.1", "NT 5.2"],
                                            Vista: "NT 6.0",
                                            7: "NT 6.1",
                                            8: "NT 6.2",
                                            8.1: "NT 6.3",
                                            10: ["NT 6.4", "NT 10.0"],
                                            RT: "ARM",
                                        },
                                    },
                                },
                            }; //////////////
                            // Regex map
                            /////////////

                            var regexes = {
                                browser: [
                                    [
                                        // Presto based
                                        /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
                                        /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
                                        /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
                                        /(opera)[\/\s]+([\w\.]+)/i, // Opera < 9.80
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(opios)[\/\s]+([\w\.]+)/i, // Opera mini on iphone >= 8.0
                                    ],
                                    [[NAME, "Opera Mini"], VERSION],
                                    [
                                        /\s(opr)\/([\w\.]+)/i, // Opera Webkit
                                    ],
                                    [[NAME, "Opera"], VERSION],
                                    [
                                        // Mixed
                                        /(kindle)\/([\w\.]+)/i, // Kindle
                                        /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                                        // Trident based
                                        /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, // Avant/IEMobile/SlimBrowser/Baidu
                                        /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer
                                        // Webkit/KHTML based
                                        /(rekonq)\/([\w\.]*)/i, // Rekonq
                                        /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i, // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i, // IE11
                                    ],
                                    [[NAME, "IE"], VERSION],
                                    [
                                        /(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i, // Microsoft Edge
                                    ],
                                    [[NAME, "Edge"], VERSION],
                                    [
                                        /(yabrowser)\/([\w\.]+)/i, // Yandex
                                    ],
                                    [[NAME, "Yandex"], VERSION],
                                    [
                                        /(puffin)\/([\w\.]+)/i, // Puffin
                                    ],
                                    [[NAME, "Puffin"], VERSION],
                                    [
                                        /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i, // UCBrowser
                                    ],
                                    [[NAME, "UCBrowser"], VERSION],
                                    [
                                        /(comodo_dragon)\/([\w\.]+)/i, // Comodo Dragon
                                    ],
                                    [[NAME, /_/g, " "], VERSION],
                                    [
                                        /(micromessenger)\/([\w\.]+)/i, // WeChat
                                    ],
                                    [[NAME, "WeChat"], VERSION],
                                    [
                                        /(qqbrowserlite)\/([\w\.]+)/i, // QQBrowserLite
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(QQ)\/([\d\.]+)/i, // QQ, aka ShouQ
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /m?(qqbrowser)[\/\s]?([\w\.]+)/i, // QQBrowser
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(BIDUBrowser)[\/\s]?([\w\.]+)/i, // Baidu Browser
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(2345Explorer)[\/\s]?([\w\.]+)/i, // 2345 Browser
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(MetaSr)[\/\s]?([\w\.]+)/i, // SouGouBrowser
                                    ],
                                    [NAME],
                                    [
                                        /(LBBROWSER)/i, // LieBao Browser
                                    ],
                                    [NAME],
                                    [
                                        /xiaomi\/miuibrowser\/([\w\.]+)/i, // MIUI Browser
                                    ],
                                    [VERSION, [NAME, "MIUI Browser"]],
                                    [
                                        /;fbav\/([\w\.]+);/i, // Facebook App for iOS & Android
                                    ],
                                    [VERSION, [NAME, "Facebook"]],
                                    [
                                        /safari\s(line)\/([\w\.]+)/i, // Line App for iOS
                                        /android.+(line)\/([\w\.]+)\/iab/i, // Line App for Android
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /headlesschrome(?:\/([\w\.]+)|\s)/i, // Chrome Headless
                                    ],
                                    [VERSION, [NAME, "Chrome Headless"]],
                                    [
                                        /\swv\).+(chrome)\/([\w\.]+)/i, // Chrome WebView
                                    ],
                                    [[NAME, /(.+)/, "$1 WebView"], VERSION],
                                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                                    [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION],
                                    [
                                        // Oculus / Samsung Browser
                                        /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i, // Android Browser
                                    ],
                                    [VERSION, [NAME, "Android Browser"]],
                                    [
                                        /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, // Chrome/OmniWeb/Arora/Tizen/Nokia
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(dolfin)\/([\w\.]+)/i, // Dolphin
                                    ],
                                    [[NAME, "Dolphin"], VERSION],
                                    [
                                        /((?:android.+)crmo|crios)\/([\w\.]+)/i, // Chrome for Android/iOS
                                    ],
                                    [[NAME, "Chrome"], VERSION],
                                    [
                                        /(coast)\/([\w\.]+)/i, // Opera Coast
                                    ],
                                    [[NAME, "Opera Coast"], VERSION],
                                    [
                                        /fxios\/([\w\.-]+)/i, // Firefox for iOS
                                    ],
                                    [VERSION, [NAME, "Firefox"]],
                                    [
                                        /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i, // Mobile Safari
                                    ],
                                    [VERSION, [NAME, "Mobile Safari"]],
                                    [
                                        /version\/([\w\.]+).+?(mobile\s?safari|safari)/i, // Safari & Safari Mobile
                                    ],
                                    [VERSION, NAME],
                                    [
                                        /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i, // Google Search Appliance on iOS
                                    ],
                                    [[NAME, "GSA"], VERSION],
                                    [
                                        /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i, // Safari < 3.0
                                    ],
                                    [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
                                    [
                                        /(konqueror)\/([\w\.]+)/i, // Konqueror
                                        /(webkit|khtml)\/([\w\.]+)/i,
                                    ],
                                    [NAME, VERSION],
                                    [
                                        // Gecko based
                                        /(navigator|netscape)\/([\w\.-]+)/i, // Netscape
                                    ],
                                    [[NAME, "Netscape"], VERSION],
                                    [
                                        /(swiftfox)/i, // Swiftfox
                                        /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                                        /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                                        /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla
                                        // Other
                                        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                                        /(links)\s\(([\w\.]+)/i, // Links
                                        /(gobrowser)\/?([\w\.]*)/i, // GoBrowser
                                        /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
                                        /(mosaic)[\/\s]([\w\.]+)/i, // Mosaic
                                    ],
                                    [NAME, VERSION],
                                    /* /////////////////////
                       // Media players BEGIN
                       ////////////////////////
                         , [
                         /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                       /(coremedia) v((\d+)[\w\._]+)/i
                       ], [NAME, VERSION], [
                         /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                       ], [NAME, VERSION], [
                         /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                       ], [NAME, VERSION], [
                         /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                       // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                       // NSPlayer/PSP-InternetRadioPlayer/Videos
                       /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                       /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                       /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                       ], [NAME, VERSION], [
                       /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                       ], [NAME, VERSION], [
                         /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                       ], [[NAME, 'Flip Player'], VERSION], [
                         /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                       // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                       ], [NAME], [
                         /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                       // Gstreamer
                       ], [NAME, VERSION], [
                         /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                       /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                       // Java/urllib/requests/wget/cURL
                       /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                       ], [NAME, VERSION], [
                         /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                       ], [[NAME, /_/g, ' '], VERSION], [
                         /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                       // MPlayer SVN
                       ], [NAME, VERSION], [
                         /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                       ], [NAME, VERSION], [
                         /(mplayer)/i,                                                       // MPlayer (no other info)
                       /(yourmuze)/i,                                                      // YourMuze
                       /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                       ], [NAME], [
                         /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                       ], [NAME, VERSION], [
                         /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                       ], [NAME, VERSION], [
                         /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                       ], [NAME, VERSION], [
                         /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                       /(winamp)\s((\d+)[\w\.-]+)/i,
                       /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                       ], [NAME, VERSION], [
                         /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                       // inlight radio
                       ], [NAME], [
                         /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                       // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                       // SoundTap/Totem/Stagefright/Streamium
                       ], [NAME, VERSION], [
                         /(smp)((\d+)[\d\.]+)/i                                              // SMP
                       ], [NAME, VERSION], [
                         /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                       /(vlc)\/((\d+)[\w\.-]+)/i,
                       /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                       /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                       /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                       ], [NAME, VERSION], [
                         /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                       /(windows-media-player)\/((\d+)[\w\.-]+)/i
                       ], [[NAME, /-/g, ' '], VERSION], [
                         /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                       // Windows Media Server
                       ], [VERSION, [NAME, 'Windows']], [
                         /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                       ], [NAME, VERSION], [
                         /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                       /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                       ], [[NAME, 'rad.io'], VERSION]
                         //////////////////////
                       // Media players END
                       ////////////////////*/
                                ],
                                cpu: [
                                    [
                                        /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i, // AMD64
                                    ],
                                    [[ARCHITECTURE, "amd64"]],
                                    [
                                        /(ia32(?=;))/i, // IA32 (quicktime)
                                    ],
                                    [[ARCHITECTURE, util.lowerize]],
                                    [
                                        /((?:i[346]|x)86)[;\)]/i, // IA32
                                    ],
                                    [[ARCHITECTURE, "ia32"]],
                                    [
                                        // PocketPC mistakenly identified as PowerPC
                                        /windows\s(ce|mobile);\sppc;/i,
                                    ],
                                    [[ARCHITECTURE, "arm"]],
                                    [
                                        /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i, // PowerPC
                                    ],
                                    [[ARCHITECTURE, /ower/, "", util.lowerize]],
                                    [
                                        /(sun4\w)[;\)]/i, // SPARC
                                    ],
                                    [[ARCHITECTURE, "sparc"]],
                                    [
                                        /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i, // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                                    ],
                                    [[ARCHITECTURE, util.lowerize]],
                                ],
                                device: [
                                    [
                                        /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i, // iPad/PlayBook
                                    ],
                                    [MODEL, VENDOR, [TYPE, TABLET]],
                                    [
                                        /applecoremedia\/[\w\.]+ \((ipad)/, // iPad
                                    ],
                                    [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]],
                                    [
                                        /(apple\s{0,1}tv)/i, // Apple TV
                                    ],
                                    [
                                        [MODEL, "Apple TV"],
                                        [VENDOR, "Apple"],
                                    ],
                                    [
                                        /(archos)\s(gamepad2?)/i, // Archos
                                        /(hp).+(touchpad)/i, // HP TouchPad
                                        /(hp).+(tablet)/i, // HP Tablet
                                        /(kindle)\/([\w\.]+)/i, // Kindle
                                        /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
                                        /(dell)\s(strea[kpr\s\d]*[\dko])/i, // Dell Streak
                                    ],
                                    [VENDOR, MODEL, [TYPE, TABLET]],
                                    [
                                        /(kf[A-z]+)\sbuild\/.+silk\//i, // Kindle Fire HD
                                    ],
                                    [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
                                    [
                                        /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i, // Fire Phone
                                    ],
                                    [
                                        [MODEL, mapper.str, maps.device.amazon.model],
                                        [VENDOR, "Amazon"],
                                        [TYPE, MOBILE],
                                    ],
                                    [
                                        /android.+aft([bms])\sbuild/i, // Fire TV
                                    ],
                                    [MODEL, [VENDOR, "Amazon"], [TYPE, SMARTTV]],
                                    [
                                        /\((ip[honed|\s\w*]+);.+(apple)/i, // iPod/iPhone
                                    ],
                                    [MODEL, VENDOR, [TYPE, MOBILE]],
                                    [
                                        /\((ip[honed|\s\w*]+);/i, // iPod/iPhone
                                    ],
                                    [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]],
                                    [
                                        /(blackberry)[\s-]?(\w+)/i, // BlackBerry
                                        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                                        /(hp)\s([\w\s]+\w)/i, // HP iPAQ
                                        /(asus)-?(\w+)/i, // Asus
                                    ],
                                    [VENDOR, MODEL, [TYPE, MOBILE]],
                                    [
                                        /\(bb10;\s(\w+)/i, // BlackBerry 10
                                    ],
                                    [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]],
                                    [
                                        // Asus Tablets
                                        /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
                                    ],
                                    [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]],
                                    [
                                        /(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
                                        /(sony)?(?:sgp.+)\sbuild\//i,
                                    ],
                                    [
                                        [VENDOR, "Sony"],
                                        [MODEL, "Xperia Tablet"],
                                        [TYPE, TABLET],
                                    ],
                                    [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                                    [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]],
                                    [
                                        /\s(ouya)\s/i, // Ouya
                                        /(nintendo)\s([wids3u]+)/i, // Nintendo
                                    ],
                                    [VENDOR, MODEL, [TYPE, CONSOLE]],
                                    [
                                        /android.+;\s(shield)\sbuild/i, // Nvidia
                                    ],
                                    [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
                                    [
                                        /(playstation\s[34portablevi]+)/i, // Playstation
                                    ],
                                    [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]],
                                    [
                                        /(sprint\s(\w+))/i, // Sprint Phones
                                    ],
                                    [
                                        [VENDOR, mapper.str, maps.device.sprint.vendor],
                                        [MODEL, mapper.str, maps.device.sprint.model],
                                        [TYPE, MOBILE],
                                    ],
                                    [
                                        /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i, // Lenovo tablets
                                    ],
                                    [VENDOR, MODEL, [TYPE, TABLET]],
                                    [
                                        /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, // HTC
                                        /(zte)-(\w*)/i, // ZTE
                                        /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i, // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
                                    ],
                                    [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
                                    [
                                        /(nexus\s9)/i, // HTC Nexus 9
                                    ],
                                    [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
                                    [
                                        /d\/huawei([\w\s-]+)[;\)]/i,
                                        /(nexus\s6p)/i, // Huawei
                                    ],
                                    [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]],
                                    [
                                        /(microsoft);\s(lumia[\s\w]+)/i, // Microsoft Lumia
                                    ],
                                    [VENDOR, MODEL, [TYPE, MOBILE]],
                                    [
                                        /[\s\(;](xbox(?:\sone)?)[\s\);]/i, // Microsoft Xbox
                                    ],
                                    [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]],
                                    [
                                        /(kin\.[onetw]{3})/i, // Microsoft Kin
                                    ],
                                    [
                                        [MODEL, /\./g, " "],
                                        [VENDOR, "Microsoft"],
                                        [TYPE, MOBILE],
                                    ],
                                    [
                                        // Motorola
                                        /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                                        /mot[\s-]?(\w*)/i,
                                        /(XT\d{3,4}) build\//i,
                                        /(nexus\s6)/i,
                                    ],
                                    [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]],
                                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                    [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]],
                                    [
                                        /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i, // HbbTV devices
                                    ],
                                    [
                                        [VENDOR, util.trim],
                                        [MODEL, util.trim],
                                        [TYPE, SMARTTV],
                                    ],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [MODEL, /^/, "SmartTV"],
                                        [VENDOR, "Samsung"],
                                        [TYPE, SMARTTV],
                                    ],
                                    [
                                        /\(dtv[\);].+(aquos)/i, // Sharp
                                    ],
                                    [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]],
                                    [
                                        /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                                        /((SM-T\w+))/i,
                                    ],
                                    [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]],
                                    [
                                        // Samsung
                                        /smart-tv.+(samsung)/i,
                                    ],
                                    [VENDOR, [TYPE, SMARTTV], MODEL],
                                    [
                                        /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                                        /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                                        /sec-((sgh\w+))/i,
                                    ],
                                    [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]],
                                    [
                                        /sie-(\w*)/i, // Siemens
                                    ],
                                    [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
                                    [
                                        /(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
                                        /(nokia)[\s_-]?([\w-]*)/i,
                                    ],
                                    [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]],
                                    [
                                        /android\s3\.[\s\w;-]{10}(a\d{3})/i, // Acer
                                    ],
                                    [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
                                    [
                                        /android.+([vl]k\-?\d{3})\s+build/i, // LG Tablet
                                    ],
                                    [MODEL, [VENDOR, "LG"], [TYPE, TABLET]],
                                    [
                                        /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i, // LG Tablet
                                    ],
                                    [[VENDOR, "LG"], MODEL, [TYPE, TABLET]],
                                    [
                                        /(lg) netcast\.tv/i, // LG SmartTV
                                    ],
                                    [VENDOR, MODEL, [TYPE, SMARTTV]],
                                    [
                                        /(nexus\s[45])/i, // LG
                                        /lg[e;\s\/-]+(\w*)/i,
                                        /android.+lg(\-?[\d\w]+)\s+build/i,
                                    ],
                                    [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]],
                                    [
                                        /android.+(ideatab[a-z0-9\-\s]+)/i, // Lenovo
                                    ],
                                    [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
                                    [
                                        /linux;.+((jolla));/i, // Jolla
                                    ],
                                    [VENDOR, MODEL, [TYPE, MOBILE]],
                                    [
                                        /((pebble))app\/[\d\.]+\s/i, // Pebble
                                    ],
                                    [VENDOR, MODEL, [TYPE, WEARABLE]],
                                    [
                                        /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i, // OPPO
                                    ],
                                    [VENDOR, MODEL, [TYPE, MOBILE]],
                                    [
                                        /crkey/i, // Google Chromecast
                                    ],
                                    [
                                        [MODEL, "Chromecast"],
                                        [VENDOR, "Google"],
                                    ],
                                    [
                                        /android.+;\s(glass)\s\d/i, // Google Glass
                                    ],
                                    [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]],
                                    [
                                        /android.+;\s(pixel c)\s/i, // Google Pixel C
                                    ],
                                    [MODEL, [VENDOR, "Google"], [TYPE, TABLET]],
                                    [
                                        /android.+;\s(pixel [xl2]{1,2}|pixel)\s/i, // Google Pixel
                                    ],
                                    [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]],
                                    [
                                        /android.+;\s(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
                                        /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
                                        /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, // Xiaomi Mi
                                        /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i, // Redmi Phones
                                    ],
                                    [
                                        [MODEL, /_/g, " "],
                                        [VENDOR, "Xiaomi"],
                                        [TYPE, MOBILE],
                                    ],
                                    [
                                        /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i, // Mi Pad tablets
                                    ],
                                    [
                                        [MODEL, /_/g, " "],
                                        [VENDOR, "Xiaomi"],
                                        [TYPE, TABLET],
                                    ],
                                    [
                                        /android.+;\s(m[1-5]\snote)\sbuild/i, // Meizu Tablet
                                    ],
                                    [MODEL, [VENDOR, "Meizu"], [TYPE, TABLET]],
                                    [
                                        /android.+a000(1)\s+build/i, // OnePlus
                                        /android.+oneplus\s(a\d{4})\s+build/i,
                                    ],
                                    [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
                                    [
                                        /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i, // RCA Tablets
                                    ],
                                    [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i, // Dell Venue Tablets
                                    ],
                                    [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i, // Verizon Tablet
                                    ],
                                    [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i, // Barnes & Noble Tablet
                                    ],
                                    [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i, // Barnes & Noble Tablet
                                    ],
                                    [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
                                    [
                                        /android.+;\s(k88)\sbuild/i, // ZTE K Series Tablet
                                    ],
                                    [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i, // Swiss GEN Mobile
                                    ],
                                    [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
                                    [
                                        /android.+[;\/]\s*(zur\d{3})\s+build/i, // Swiss ZUR Tablet
                                    ],
                                    [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i, // Zeki Tablets
                                    ],
                                    [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
                                    [
                                        /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                                        /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i, // Dragon Touch Tablet
                                    ],
                                    [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i, // Insignia Tablets
                                    ],
                                    [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i, // NextBook Tablets
                                    ],
                                    [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
                                    ],
                                    [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
                                    [
                                        // Voice Xtreme Phones
                                        /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i, // LvTel Phones
                                    ],
                                    [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
                                    [
                                        /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i, // Envizen Tablets
                                    ],
                                    [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i, // Le Pan Tablets
                                    ],
                                    [VENDOR, MODEL, [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i, // MachSpeed Tablets
                                    ],
                                    [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i, // Trinity Tablets
                                    ],
                                    [VENDOR, MODEL, [TYPE, TABLET]],
                                    [
                                        /android.+[;\/]\s*TU_(1491)\s+build/i, // Rotor Tablets
                                    ],
                                    [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
                                    [
                                        /android.+(KS(.+))\s+build/i, // Amazon Kindle Tablets
                                    ],
                                    [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
                                    [
                                        /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i, // Gigaset Tablets
                                    ],
                                    [VENDOR, MODEL, [TYPE, TABLET]],
                                    [
                                        /\s(tablet|tab)[;\/]/i, // Unidentifiable Tablet
                                        /\s(mobile)(?:[;\/]|\ssafari)/i, // Unidentifiable Mobile
                                    ],
                                    [[TYPE, util.lowerize], VENDOR, MODEL],
                                    [
                                        /(android[\w\.\s\-]{0,9});.+build/i, // Generic Android Device
                                    ],
                                    [MODEL, [VENDOR, "Generic"]],
                                    /*//////////////////////////
                       // TODO: move to string map
                       ////////////////////////////
                         /(C6603)/i                                                          // Sony Xperia Z C6603
                       ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                       /(C6903)/i                                                          // Sony Xperia Z 1
                       ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                       ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                       /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                       ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                       /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                       ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                       /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                       ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                       /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                       ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                       /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                       ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                       /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                       ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                         /(T3C)/i                                                            // Advan Vandroid T3C
                       ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                       /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                       ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                       /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                       ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
                         /(V972M)/i                                                          // ZTE V972M
                       ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
                         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                       ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                       /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                       ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                       /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                       ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                       /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                       ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                       ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
                         /////////////
                       // END TODO
                       ///////////*/
                                ],
                                engine: [
                                    [
                                        /windows.+\sedge\/([\w\.]+)/i, // EdgeHTML
                                    ],
                                    [VERSION, [NAME, "EdgeHTML"]],
                                    [
                                        /(presto)\/([\w\.]+)/i, // Presto
                                        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
                                        /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
                                        /(icab)[\/\s]([23]\.[\d\.]+)/i, // iCab
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /rv\:([\w\.]{1,9}).+(gecko)/i, // Gecko
                                    ],
                                    [VERSION, NAME],
                                ],
                                os: [
                                    [
                                        // Windows based
                                        /microsoft\s(windows)\s(vista|xp)/i, // Windows (iTunes)
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
                                        /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, // Windows Phone
                                        /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                                    ],
                                    [NAME, [VERSION, mapper.str, maps.os.windows.version]],
                                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                    [
                                        [NAME, "Windows"],
                                        [VERSION, mapper.str, maps.os.windows.version],
                                    ],
                                    [
                                        // Mobile/Embedded OS
                                        /\((bb)(10);/i, // BlackBerry 10
                                    ],
                                    [[NAME, "BlackBerry"], VERSION],
                                    [
                                        /(blackberry)\w*\/?([\w\.]*)/i, // Blackberry
                                        /(tizen)[\/\s]([\w\.]+)/i, // Tizen
                                        /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                                        /linux;.+(sailfish);/i, // Sailfish OS
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i, // Symbian
                                    ],
                                    [[NAME, "Symbian"], VERSION],
                                    [
                                        /\((series40);/i, // Series 40
                                    ],
                                    [NAME],
                                    [
                                        /mozilla.+\(mobile;.+gecko.+firefox/i, // Firefox OS
                                    ],
                                    [[NAME, "Firefox OS"], VERSION],
                                    [
                                        // Console
                                        /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation
                                        // GNU/Linux based
                                        /(mint)[\/\s\(]?(\w*)/i, // Mint
                                        /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
                                        /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                        // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                                        /(hurd|linux)\s?([\w\.]*)/i, // Hurd/Linux
                                        /(gnu)\s?([\w\.]*)/i, // GNU
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(cros)\s[\w]+\s([\w\.]+\w)/i, // Chromium OS
                                    ],
                                    [[NAME, "Chromium OS"], VERSION],
                                    [
                                        // Solaris
                                        /(sunos)\s?([\w\.\d]*)/i, // Solaris
                                    ],
                                    [[NAME, "Solaris"], VERSION],
                                    [
                                        // BSD based
                                        /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /(haiku)\s(\w+)/i, // Haiku
                                    ],
                                    [NAME, VERSION],
                                    [
                                        /cfnetwork\/.+darwin/i,
                                        /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, // iOS
                                    ],
                                    [
                                        [VERSION, /_/g, "."],
                                        [NAME, "iOS"],
                                    ],
                                    [
                                        /(mac\sos\sx)\s?([\w\s\.]*)/i,
                                        /(macintosh|mac(?=_powerpc)\s)/i, // Mac OS
                                    ],
                                    [
                                        [NAME, "Mac OS"],
                                        [VERSION, /_/g, "."],
                                    ],
                                    [
                                        // Other
                                        /((?:open)?solaris)[\/\s-]?([\w\.]*)/i, // Solaris
                                        /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, // AIX
                                        /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                                        /(unix)\s?([\w\.]*)/i, // UNIX
                                    ],
                                    [NAME, VERSION],
                                ],
                            }; /////////////////
                            // Constructor
                            ////////////////

                            /*
                 var Browser = function (name, version) {
                 this[NAME] = name;
                 this[VERSION] = version;
                 };
                 var CPU = function (arch) {
                 this[ARCHITECTURE] = arch;
                 };
                 var Device = function (vendor, model, type) {
                 this[VENDOR] = vendor;
                 this[MODEL] = model;
                 this[TYPE] = type;
                 };
                 var Engine = Browser;
                 var OS = Browser;
                 */

                            var UAParser = function UAParser(uastring, extensions) {
                                if (_typeof(uastring) === "object") {
                                    extensions = uastring;
                                    uastring = undefined;
                                }

                                if (!(this instanceof UAParser)) {
                                    return new UAParser(uastring, extensions).getResult();
                                }

                                var ua =
                                    uastring ||
                                    (window && window.navigator && window.navigator.userAgent
                                        ? window.navigator.userAgent
                                        : EMPTY);
                                var rgxmap = extensions
                                    ? util.extend(regexes, extensions)
                                    : regexes; //var browser = new Browser();
                                //var cpu = new CPU();
                                //var device = new Device();
                                //var engine = new Engine();
                                //var os = new OS();

                                this.getBrowser = function () {
                                    var browser = {
                                        name: undefined,
                                        version: undefined,
                                    };
                                    mapper.rgx.call(browser, ua, rgxmap.browser);
                                    browser.major = util.major(browser.version); // deprecated

                                    return browser;
                                };

                                this.getCPU = function () {
                                    var cpu = {
                                        architecture: undefined,
                                    };
                                    mapper.rgx.call(cpu, ua, rgxmap.cpu);
                                    return cpu;
                                };

                                this.getDevice = function () {
                                    var device = {
                                        vendor: undefined,
                                        model: undefined,
                                        type: undefined,
                                    };
                                    mapper.rgx.call(device, ua, rgxmap.device);
                                    return device;
                                };

                                this.getEngine = function () {
                                    var engine = {
                                        name: undefined,
                                        version: undefined,
                                    };
                                    mapper.rgx.call(engine, ua, rgxmap.engine);
                                    return engine;
                                };

                                this.getOS = function () {
                                    var os = {
                                        name: undefined,
                                        version: undefined,
                                    };
                                    mapper.rgx.call(os, ua, rgxmap.os);
                                    return os;
                                };

                                this.getResult = function () {
                                    return {
                                        ua: this.getUA(),
                                        browser: this.getBrowser(),
                                        engine: this.getEngine(),
                                        os: this.getOS(),
                                        device: this.getDevice(),
                                        cpu: this.getCPU(),
                                    };
                                };

                                this.getUA = function () {
                                    return ua;
                                };

                                this.setUA = function (uastring) {
                                    ua = uastring; //browser = new Browser();
                                    //cpu = new CPU();
                                    //device = new Device();
                                    //engine = new Engine();
                                    //os = new OS();

                                    return this;
                                };

                                return this;
                            };

                            UAParser.VERSION = LIBVERSION;
                            UAParser.BROWSER = {
                                NAME: NAME,
                                MAJOR: MAJOR,
                                // deprecated
                                VERSION: VERSION,
                            };
                            UAParser.CPU = {
                                ARCHITECTURE: ARCHITECTURE,
                            };
                            UAParser.DEVICE = {
                                MODEL: MODEL,
                                VENDOR: VENDOR,
                                TYPE: TYPE,
                                CONSOLE: CONSOLE,
                                MOBILE: MOBILE,
                                SMARTTV: SMARTTV,
                                TABLET: TABLET,
                                WEARABLE: WEARABLE,
                                EMBEDDED: EMBEDDED,
                            };
                            UAParser.ENGINE = {
                                NAME: NAME,
                                VERSION: VERSION,
                            };
                            UAParser.OS = {
                                NAME: NAME,
                                VERSION: VERSION,
                            }; //UAParser.Utils = util;
                            ///////////
                            // Export
                            //////////
                            // check js environment

                            if ((false ? undefined : _typeof(exports)) !== UNDEF_TYPE) {
                                // nodejs env
                                if (
                                    (false ? undefined : _typeof(module)) !== UNDEF_TYPE &&
                                    module.exports
                                ) {
                                    exports = module.exports = UAParser;
                                } // TODO: test!!!!!!!!

                                /*
                     if (require && require.main === module && process) {
                     // cli
                     var jsonize = function (arr) {
                     var res = [];
                     for (var i in arr) {
                     res.push(new UAParser(arr[i]).getResult());
                     }
                     process.stdout.write(JSON.stringify(res, null, 2) + '\n');
                     };
                     if (process.stdin.isTTY) {
                     // via args
                     jsonize(process.argv.slice(2));
                     } else {
                     // via pipe
                     var str = '';
                     process.stdin.on('readable', function() {
                     var read = process.stdin.read();
                     if (read !== null) {
                     str += read;
                     }
                     });
                     process.stdin.on('end', function () {
                     jsonize(str.replace(/\n$/, '').split('\n'));
                     });
                     }
                     }
                     */

                                exports.UAParser = UAParser;
                            } else {
                                // requirejs env (optional)
                                if (
                                    (false
                                        ? undefined
                                        : _typeof(
                                            __webpack_require__(
                          /*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"
                                            )
                                        )) === FUNC_TYPE &&
                                    __webpack_require__(
                    /*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"
                                    )
                                ) {
                                    !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                        return UAParser;
                                    }.call(exports, __webpack_require__, exports, module)),
                                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                                        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                                } else if (window) {
                                    // browser env
                                    window.UAParser = UAParser;
                                }
                            } // jQuery/Zepto specific (optional)
                            // Note:
                            //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                            //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                            //   and we should catch that.

                            var $ = window && (window.jQuery || window.Zepto);

                            if (_typeof($) !== UNDEF_TYPE) {
                                var parser = new UAParser();
                                $.ua = parser.getResult();

                                $.ua.get = function () {
                                    return parser.getUA();
                                };

                                $.ua.set = function (uastring) {
                                    parser.setUA(uastring);
                                    var result = parser.getResult();

                                    for (var prop in result) {
                                        $.ua[prop] = result[prop];
                                    }
                                };
                            }
                        })(
                            (typeof window === "undefined"
                                ? "undefined"
                                : _typeof(window)) === "object"
                                ? window
                                : this
                        );
                        /* WEBPACK VAR INJECTION */
                    }.call(
                        this,
                        __webpack_require__(
              /*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js"
                        )(module)
                    ));

                    /***/
                },

            /******/
        }
    );
});

(() => {
    globalThis.ovoMultiplayerClient = {
        initMod() {
            (function () {
                // Get runtime
                let runtime = cr_getC2Runtime();
                const VERSION = "0.3";
                const THIS_PROMPT_ID = "beta-multiplayer-prompt";
                let myUniqueHash = "";

                let filterArrSpaces = [
                    "2 girls 1 cup",
                    "alabama hot pocket",
                    "alaskan pipeline",
                    "ass hole",
                    "auto erotic",
                    "baby batter",
                    "baby juice",
                    "ball gag",
                    "ball gravy",
                    "ball kicking",
                    "ball licking",
                    "ball sack",
                    "ball sucking",
                    "barely legal",
                    "beaver cleaver",
                    "beaver lips",
                    "big black",
                    "big breasts",
                    "big knockers",
                    "big tits",
                    "black cock",
                    "blonde action",
                    "blonde on blonde action",
                    "blow job",
                    "blow your load",
                    "blue waffle",
                    "booty call",
                    "brown showers",
                    "brunette action",
                    "bull shit",
                    "bullet vibe",
                    "bung hole",
                    "bunny fucker",
                    "butt fuck",
                    "butt plug",
                    "camel toe",
                    "carpet muncher",
                    "chocolate rosebuds",
                    "cleveland steamer",
                    "clover clamps",
                    "cock sucker",
                    "date rape",
                    "deep throat",
                    "dirty pillows",
                    "dirty sanchez",
                    "dog style",
                    "doggie style",
                    "doggy style",
                    "donkey punch",
                    "double dong",
                    "double penetration",
                    "dp action",
                    "dry hump",
                    "dumb ass",
                    "eat my ass",
                    "f u c k",
                    "f u c k e r",
                    "female squirting",
                    "foot fetish",
                    "fuck buttons",
                    "fuck off",
                    "fudge packer",
                    "gang bang",
                    "gay sex",
                    "giant cock",
                    "girl on",
                    "girl on top",
                    "girls gone wild",
                    "god damn",
                    "golden shower",
                    "goo girl",
                    "group sex",
                    "hand job",
                    "hard core",
                    "hard on",
                    "hot carl",
                    "hot chick",
                    "how to kill",
                    "how to murder",
                    "huge fat",
                    "jack Off",
                    "jail bait",
                    "jelly donut",
                    "jerk off",
                    "jungle bunny",
                    "leather restraint",
                    "leather straight jacket",
                    "lemon party",
                    "make me come",
                    "male squirting",
                    "menage a trois",
                    "missionary position",
                    "mother fucker",
                    "mound of venus",
                    "mr hands",
                    "muff diver",
                    "nig nog",
                    "nob jokey",
                    "nsfw images",
                    "nut sack",
                    "one cup two girls",
                    "one guy one jar",
                    "phone sex",
                    "piece of shit",
                    "piss pig",
                    "pissed off",
                    "pleasure chest",
                    "pole smoker",
                    "poop chute",
                    "porch monkey",
                    "prince albert piercing",
                    "raging boner",
                    "reverse cowgirl",
                    "rosy palm",
                    "rosy palm and her 5 sisters",
                    "rusty trombone",
                    "s hit",
                    "sand nigger",
                    "shaved beaver",
                    "shaved pussy",
                    "splooge moose",
                    "spread legs",
                    "strap on",
                    "strip club",
                    "style doggy",
                    "suicide girls",
                    "sultry women",
                    "tainted love",
                    "taste my",
                    "tea bagging",
                    "tied up",
                    "tight white",
                    "tongue in a",
                    "tub girl",
                    "two girls one cup",
                    "urethra play",
                    "venus mound",
                    "violet wand",
                    "wet dream",
                    "white power",
                    "wrapping men",
                    "wrinkled starfish",
                    "yellow showers",
                ];
                let filterArrNoSpaces = [
                    "2g1c",
                    "4r5e",
                    "5h1t",
                    "5hit",
                    "a_s_s",
                    "a55",
                    "a55hole",
                    "acrotomophilia",
                    "aeolus",
                    "ahole",
                    "anal",
                    "analprobe",
                    "anilingus",
                    "anus",
                    "apeshit",
                    "ar5e",
                    "areola",
                    "areole",
                    "arian",
                    "arrse",
                    "arse",
                    "arsehole",
                    "aryan",
                    "ass",
                    "assbag",
                    "assbandit",
                    "assbang",
                    "assbanged",
                    "assbanger",
                    "assbangs",
                    "assbite",
                    "assclown",
                    "asscock",
                    "asscracker",
                    "asses",
                    "assface",
                    "assfuck",
                    "assfucker",
                    "ass-fucker",
                    "assfukka",
                    "assgoblin",
                    "assh0le",
                    "asshat",
                    "ass-hat",
                    "asshead",
                    "assho1e",
                    "asshole",
                    "assholes",
                    "asshopper",
                    "ass-jabber",
                    "assjacker",
                    "asslick",
                    "asslicker",
                    "assmaster",
                    "assmonkey",
                    "assmunch",
                    "assmuncher",
                    "assnigger",
                    "asspirate",
                    "ass-pirate",
                    "assshit",
                    "assshole",
                    "asssucker",
                    "asswad",
                    "asswhole",
                    "asswipe",
                    "asswipes",
                    "autoerotic",
                    "axwound",
                    "azazel",
                    "azz",
                    "b!tch",
                    "b00bs",
                    "b17ch",
                    "b1tch",
                    "babe",
                    "babeland",
                    "babes",
                    "balls",
                    "ballbag",
                    "ballsack",
                    "bampot",
                    "bang",
                    "bangbros",
                    "banger",
                    "bareback",
                    "barenaked",
                    "barf",
                    "bastard",
                    "bastardo",
                    "bastards",
                    "bastinado",
                    "bawdy",
                    "bbw",
                    "bdsm",
                    "beaner",
                    "beaners",
                    "beardedclam",
                    "beastial",
                    "beastiality",
                    "beatch",
                    "beater",
                    "beeyotch",
                    "bellend",
                    "beotch",
                    "bestial",
                    "bestiality",
                    "bi+ch",
                    "biatch",
                    "bigtits",
                    "bimbo",
                    "bimbos",
                    "birdlock",
                    "bitch",
                    "bitchass",
                    "bitched",
                    "bitcher",
                    "bitchers",
                    "bitches",
                    "bitchin",
                    "bitching",
                    "bitchtits",
                    "bitchy",
                    "blowjob",
                    "blowjobs",
                    "blumpkin",
                    "bod",
                    "bodily",
                    "boink",
                    "boiolas",
                    "bollock",
                    "bollocks",
                    "bollok",
                    "bollox",
                    "bondage",
                    "boned",
                    "boner",
                    "boners",
                    "bong",
                    "boob",
                    "boobies",
                    "boobs",
                    "booby",
                    "booger",
                    "bookie",
                    "booobs",
                    "boooobs",
                    "booooobs",
                    "booooooobs",
                    "bootee",
                    "bootie",
                    "booty",
                    "booze",
                    "boozer",
                    "boozy",
                    "bosom",
                    "bosomy",
                    "bra",
                    "brassiere",
                    "breast",
                    "breasts",
                    "breeder",
                    "brotherfucker",
                    "buceta",
                    "bugger",
                    "bukkake",
                    "bulldyke",
                    "bullshit",
                    "bullshits",
                    "bullshitted",
                    "bullturds",
                    "bum",
                    "bumblefuck",
                    "bung",
                    "bunghole",
                    "busty",
                    "butt",
                    "buttcheeks",
                    "buttfuck",
                    "buttfucka",
                    "buttfucker",
                    "butthole",
                    "buttmuch",
                    "butt-pirate",
                    "buttplug",
                    "c.0.c.k",
                    "c.o.c.k.",
                    "c.u.n.t",
                    "c0ck",
                    "c-0-c-k",
                    "c0cksucker",
                    "caca",
                    "cahone",
                    "cameltoe",
                    "camgirl",
                    "camslut",
                    "camwhore",
                    "carpetmuncher",
                    "cawk",
                    "cervix",
                    "chesticle",
                    "chinc",
                    "chincs",
                    "chink",
                    "choad",
                    "chode",
                    "chodes",
                    "cipa",
                    "circlejerk",
                    "cl1t",
                    "climax",
                    "clit",
                    "clitface",
                    "clitfuck",
                    "clitoris",
                    "clitorus",
                    "clits",
                    "clitty",
                    "clusterfuck",
                    "cnut",
                    "cocain",
                    "cocaine",
                    "cock",
                    "c-o-c-k",
                    "cockass",
                    "cockbite",
                    "cockblock",
                    "cockburger",
                    "cockeye",
                    "cockface",
                    "cockfucker",
                    "cockhead",
                    "cockholster",
                    "cockjockey",
                    "cockknocker",
                    "cockknoker",
                    "cocklump",
                    "cockmaster",
                    "cockmongler",
                    "cockmongruel",
                    "cockmonkey",
                    "cockmunch",
                    "cockmuncher",
                    "cocknose",
                    "cocknugget",
                    "cocks",
                    "cockshit",
                    "cocksmith",
                    "cocksmoke",
                    "cocksmoker",
                    "cocksniffer",
                    "cocksuck",
                    "cocksucked",
                    "cocksucker",
                    "cock-sucker",
                    "cocksucking",
                    "cocksucks",
                    "cocksuka",
                    "cocksukka",
                    "cockwaffle",
                    "coital",
                    "cok",
                    "cokmuncher",
                    "coksucka",
                    "commie",
                    "condom",
                    "coochie",
                    "coochy",
                    "coon",
                    "coons",
                    "cooter",
                    "coprolagnia",
                    "coprophilia",
                    "corksucker",
                    "cornhole",
                    "cox",
                    "crabs",
                    "crack",
                    "crackwhore",
                    "crap",
                    "crappy",
                    "creampie",
                    "crotte",
                    "cum",
                    "cumbubble",
                    "cumdumpster",
                    "cumguzzler",
                    "cumjockey",
                    "cummer",
                    "cummin",
                    "cumming",
                    "cums",
                    "cumshot",
                    "cumshots",
                    "cumslut",
                    "cumstain",
                    "cumtart",
                    "cunilingus",
                    "cunillingus",
                    "cunnie",
                    "cunnilingus",
                    "cunny",
                    "cunt",
                    "c-u-n-t",
                    "cuntass",
                    "cuntface",
                    "cunthole",
                    "cunthunter",
                    "cuntlick",
                    "cuntlicker",
                    "cuntlicking",
                    "cuntrag",
                    "cunts",
                    "cuntslut",
                    "cyalis",
                    "cyberfuc",
                    "cyberfuck",
                    "cyberfucked",
                    "cyberfucker",
                    "cyberfuckers",
                    "cyberfucking",
                    "d0ng",
                    "d0uch3",
                    "d0uche",
                    "d1ck",
                    "d1ld0",
                    "d1ldo",
                    "dago",
                    "dagos",
                    "darkie",
                    "damn",
                    "damned",
                    "dammit",
                    "daterape",
                    "dawgie-style",
                    "deepthroat",
                    "deggo",
                    "dendrophilia",
                    "dick",
                    "dickbag",
                    "dickbeaters",
                    "dickdipper",
                    "dickface",
                    "dickflipper",
                    "dickfuck",
                    "dickfucker",
                    "dickhead",
                    "dickheads",
                    "dickhole",
                    "dickish",
                    "dick-ish",
                    "dickjuice",
                    "dickmilk ",
                    "dickmonger",
                    "dickripper",
                    "dicks",
                    "dicksipper",
                    "dickslap",
                    "dick-sneeze",
                    "dicksucker",
                    "dicksucking",
                    "dicktickler",
                    "dickwad",
                    "dickweasel",
                    "dickweed",
                    "dickwhipper",
                    "dickwod",
                    "dickzipper",
                    "diddle",
                    "dike",
                    "dildo",
                    "dildos",
                    "diligaf",
                    "dillweed",
                    "dimwit",
                    "dingle",
                    "dingleberries",
                    "dingleberry",
                    "dink",
                    "dinks",
                    "dipship",
                    "dipshit",
                    "dirsa",
                    "dlck",
                    "dog-fucker",
                    "doggiestyle",
                    "doggie-style",
                    "doggin",
                    "dogging",
                    "doggystyle",
                    "doggy-style",
                    "dolcett",
                    "domination",
                    "dominatrix",
                    "dommes",
                    "dong",
                    "donkeyribber",
                    "doochbag",
                    "doofus",
                    "dookie",
                    "doosh",
                    "dopey",
                    "doublelift",
                    "douch3",
                    "douche",
                    "douchebag",
                    "douchebags",
                    "douche-fag",
                    "douchewaffle",
                    "douchey",
                    "drunk",
                    "duche",
                    "dumass",
                    "dumbass",
                    "dumbasses",
                    "dumbcunt",
                    "dumbfuck",
                    "dumbshit",
                    "dummy",
                    "dumshit",
                    "dvda",
                    "dyke",
                    "dykes",
                    "ecchi",
                    "ejaculate",
                    "ejaculated",
                    "ejaculates",
                    "ejaculating",
                    "ejaculatings",
                    "ejaculation",
                    "ejakulate",
                    "enlargement",
                    "erect",
                    "erection",
                    "erotic",
                    "erotism",
                    "escort",
                    "essohbee",
                    "eunuch",
                    "extacy",
                    "extasy",
                    "f.u.c.k",
                    "f_u_c_k",
                    "f4nny",
                    "fack",
                    "fag",
                    "fagbag",
                    "fagfucker",
                    "fagg",
                    "fagged",
                    "fagging",
                    "faggit",
                    "faggitt",
                    "faggot",
                    "faggotcock",
                    "faggs",
                    "fagot",
                    "fagots",
                    "fags",
                    "fagtard",
                    "faig",
                    "faigt",
                    "fanny",
                    "fannybandit",
                    "fannyflaps",
                    "fannyfucker",
                    "fanyy",
                    "fartknocker",
                    "fatass",
                    "fcuk",
                    "fcuker",
                    "fcuking",
                    "fecal",
                    "feck",
                    "fecker",
                    "felch",
                    "felcher",
                    "felching",
                    "fellate",
                    "fellatio",
                    "feltch",
                    "feltcher",
                    "femdom",
                    "figging",
                    "fingerbang",
                    "fingerfuck",
                    "fingerfucked",
                    "fingerfucker",
                    "fingerfuckers",
                    "fingerfucking",
                    "fingerfucks",
                    "fingering",
                    "fisted",
                    "fistfuck",
                    "fistfucked",
                    "fistfucker",
                    "fistfuckers",
                    "fistfucking",
                    "fistfuckings",
                    "fistfucks",
                    "fisting",
                    "fisty",
                    "flamer",
                    "flange",
                    "floozy",
                    "foad",
                    "foah",
                    "fondle",
                    "foobar",
                    "fook",
                    "fooker",
                    "footjob",
                    "foreskin",
                    "freex",
                    "frigg",
                    "frigga",
                    "frotting",
                    "fubar",
                    "fuck",
                    "f-u-c-k",
                    "fucka",
                    "fuckass",
                    "fuckbag",
                    "fuckboy",
                    "fuckbrain",
                    "fuckbutt",
                    "fuckbutter",
                    "fucked",
                    "fucker",
                    "fuckers",
                    "fuckersucker",
                    "fuckface",
                    "fuckhead",
                    "fuckheads",
                    "fuckhole",
                    "fuckin",
                    "fucking",
                    "fuckings",
                    "fuckingshitmotherfucker",
                    "fuckme",
                    "fucknugget",
                    "fucknut",
                    "fucknutt",
                    "fuckoff",
                    "fucks",
                    "fuckstick",
                    "fucktard",
                    "fuck-tard",
                    "fucktards",
                    "fucktart",
                    "fucktwat",
                    "fuckup",
                    "fuckwad",
                    "fuckwhit",
                    "fuckwit",
                    "fuckwitt",
                    "fudgepacker",
                    "fuk",
                    "fuker",
                    "fukker",
                    "fukkin",
                    "fuks",
                    "fukwhit",
                    "fukwit",
                    "futanari",
                    "fux",
                    "fux0r",
                    "fvck",
                    "fxck",
                    "gae",
                    "gai",
                    "gangbang",
                    "gangbanged",
                    "gangbangs",
                    "ganja",
                    "gay",
                    "gayass",
                    "gaybob",
                    "gaydo",
                    "gayfuck",
                    "gayfuckist",
                    "gaylord",
                    "gays",
                    "gaysex",
                    "gaytard",
                    "gaywad",
                    "genitals",
                    "gey",
                    "gfy",
                    "ghay",
                    "ghey",
                    "gigolo",
                    "glans",
                    "goatcx",
                    "goatse",
                    "godamn",
                    "godamnit",
                    "goddam",
                    "god-dam",
                    "goddammit",
                    "goddamn",
                    "goddamned",
                    "god-damned",
                    "goddamnit",
                    "gokkun",
                    "goldenshower",
                    "gonad",
                    "gonads",
                    "gooch",
                    "goodpoop",
                    "gook",
                    "gooks",
                    "goregasm",
                    "gringo",
                    "grope",
                    "gspot",
                    "g-spot",
                    "gtfo",
                    "guido",
                    "guro",
                    "h0m0",
                    "h0mo",
                    "handjob",
                    "hardcore",
                    "hardcoresex",
                    "he11",
                    "heeb",
                    "hemp",
                    "hentai",
                    "heroin",
                    "herp",
                    "herpes",
                    "herpy",
                    "heshe",
                    "hitler",
                    "hiv",
                    "ho",
                    "hoar",
                    "hoare",
                    "hobag",
                    "hoe",
                    "hoer",
                    "hom0",
                    "homey",
                    "homo",
                    "homodumbshit",
                    "homoerotic",
                    "homoey",
                    "honkey",
                    "honky",
                    "hooch",
                    "hookah",
                    "hooker",
                    "hoor",
                    "hootch",
                    "hooter",
                    "hooters",
                    "hore",
                    "horniest",
                    "horny",
                    "hotsex",
                    "hump",
                    "humped",
                    "humping",
                    "hussy",
                    "hymen",
                    "inbred",
                    "incest",
                    "injun",
                    "intercourse",
                    "j3rk0ff",
                    "jackass",
                    "jackhole",
                    "jackoff",
                    "jack-off",
                    "jaggi",
                    "jagoff",
                    "jailbait",
                    "jap",
                    "japs",
                    "jerk",
                    "jerk0ff",
                    "jerkass",
                    "jerked",
                    "jerkoff",
                    "jerk-off",
                    "jigaboo",
                    "jiggaboo",
                    "jiggerboo",
                    "jism",
                    "jiz",
                    "jizm",
                    "jizz",
                    "jizzed",
                    "juggs",
                    "junglebunny",
                    "junkie",
                    "junky",
                    "kawk",
                    "kike",
                    "kikes",
                    "kinbaku",
                    "kinkster",
                    "kinky",
                    "kkk",
                    "knob",
                    "knobbing",
                    "knobead",
                    "knobed",
                    "knobend",
                    "knobhead",
                    "knobjocky",
                    "knobjokey",
                    "kock",
                    "kondum",
                    "kondums",
                    "kooch",
                    "kooches",
                    "kootch",
                    "kraut",
                    "kum",
                    "kummer",
                    "kumming",
                    "kums",
                    "kunilingus",
                    "kunja",
                    "kunt",
                    "kyke",
                    "l3i+ch",
                    "l3itch",
                    "labia",
                    "lameass",
                    "lardass",
                    "lech",
                    "leper",
                    "lesbian",
                    "lesbians",
                    "lesbo",
                    "lesbos",
                    "lez",
                    "lezbian",
                    "lezbians",
                    "lezbo",
                    "lezbos",
                    "lezzie",
                    "lezzies",
                    "lezzy",
                    "lmao",
                    "lmfao",
                    "loin",
                    "loins",
                    "lolita",
                    "lovemaking",
                    "lube",
                    "lust",
                    "lusting",
                    "lusty",
                    "m0f0",
                    "m0fo",
                    "m45terbate",
                    "ma5terb8",
                    "ma5terbate",
                    "mams",
                    "masochist",
                    "massa",
                    "masterb8",
                    "masterbat",
                    "masterbat3",
                    "masterbate",
                    "master-bate",
                    "masterbating",
                    "masterbation",
                    "masterbations",
                    "masturbate",
                    "masturbating",
                    "masturbation",
                    "maxi",
                    "mcfagget",
                    "menses",
                    "menstruate",
                    "menstruation",
                    "meth",
                    "m-fucking",
                    "mick",
                    "milf",
                    "minge",
                    "mof0",
                    "mofo",
                    "mo-fo",
                    "molest",
                    "moolie",
                    "moron",
                    "mothafuck",
                    "mothafucka",
                    "mothafuckas",
                    "mothafuckaz",
                    "mothafucked",
                    "mothafucker",
                    "mothafuckers",
                    "mothafuckin",
                    "mothafucking",
                    "mothafuckings",
                    "mothafucks",
                    "motherfuck",
                    "motherfucka",
                    "motherfucked",
                    "motherfucker",
                    "motherfuckers",
                    "motherfuckin",
                    "motherfucking",
                    "motherfuckings",
                    "motherfuckka",
                    "motherfucks",
                    "mtherfucker",
                    "mthrfucker",
                    "mthrfucking",
                    "muff",
                    "muffdiver",
                    "muffdiving",
                    "munging",
                    "murder",
                    "mutha",
                    "muthafecker",
                    "muthafuckaz",
                    "muthafucker",
                    "muthafuckker",
                    "muther",
                    "mutherfucker",
                    "mutherfucking",
                    "muthrfucking",
                    "n1gga",
                    "n1gger",
                    "nad",
                    "nads",
                    "naked",
                    "nambla",
                    "napalm",
                    "nappy",
                    "nawashi",
                    "nazi",
                    "nazism",
                    "negro",
                    "neonazi",
                    "nigaboo",
                    "nigg3r",
                    "nigg4h",
                    "nigga",
                    "niggah",
                    "niggas",
                    "niggaz",
                    "nigger",
                    "niggers",
                    "niggle",
                    "niglet",
                    "nimphomania",
                    "nimrod",
                    "ninny",
                    "nipple",
                    "nipples",
                    "nob",
                    "nobhead",
                    "nobjocky",
                    "nobjokey",
                    "nooky",
                    "nude",
                    "nudity",
                    "numbnuts",
                    "nutsack",
                    "nympho",
                    "nymphomania",
                    "octopussy",
                    "omorashi",
                    "opiate",
                    "opium",
                    "oral",
                    "orally",
                    "organ",
                    "orgasim",
                    "orgasims",
                    "orgasm",
                    "orgasmic",
                    "orgasms",
                    "orgies",
                    "orgy",
                    "ovary",
                    "ovum",
                    "ovums",
                    "p.u.s.s.y.",
                    "p0rn",
                    "paddy",
                    "paedophile",
                    "paki",
                    "panooch",
                    "pantie",
                    "panties",
                    "panty",
                    "pastie",
                    "pasty",
                    "pawn",
                    "pcp",
                    "pecker",
                    "peckerhead",
                    "pedo",
                    "pedobear",
                    "pedophile",
                    "pedophilia",
                    "pedophiliac",
                    "peepee",
                    "pegging",
                    "penetrate",
                    "penetration",
                    "penial",
                    "penile",
                    "penis",
                    "penisbanger",
                    "penisfucker",
                    "penispuffer",
                    "perversion",
                    "peyote",
                    "phalli",
                    "phallic",
                    "phonesex",
                    "phuck",
                    "phuk",
                    "phuked",
                    "phuking",
                    "phukked",
                    "phukking",
                    "phuks",
                    "phuq",
                    "pigfucker",
                    "pillowbiter",
                    "pimp",
                    "pimpis",
                    "pinko",
                    "pissed",
                    "pisser",
                    "pissers",
                    "pisses",
                    "pissflaps",
                    "pissin",
                    "pissing",
                    "pissoff",
                    "piss-off",
                    "pisspig",
                    "playboy",
                    "pms",
                    "polack",
                    "polesmoker",
                    "pollock",
                    "ponyplay",
                    "poof",
                    "poon",
                    "poonani",
                    "poonany",
                    "poontang",
                    "poop",
                    "poopchute",
                    "poopuncher",
                    "porchmonkey",
                    "porn",
                    "porno",
                    "pornography",
                    "pornos",
                    "potty",
                    "prick",
                    "pricks",
                    "prig",
                    "pron",
                    "prostitute",
                    "prude",
                    "pthc",
                    "pube",
                    "pubes",
                    "pubic",
                    "pubis",
                    "punanny",
                    "punany",
                    "punkass",
                    "punky",
                    "punta",
                    "puss",
                    "pusse",
                    "pussi",
                    "pussies",
                    "pussy",
                    "pussylicking",
                    "pussypounder",
                    "pussys",
                    "pust",
                    "puto",
                    "queaf",
                    "queef",
                    "queer",
                    "queerbait",
                    "queerhole",
                    "queero",
                    "queers",
                    "quicky",
                    "quim",
                    "racy",
                    "raghead",
                    "rape",
                    "raped",
                    "raper",
                    "raping",
                    "rapist",
                    "raunch",
                    "rectal",
                    "rectum",
                    "rectus",
                    "reefer",
                    "reetard",
                    "reich",
                    "renob",
                    "retard",
                    "retarded",
                    "revue",
                    "rimjaw",
                    "rimjob",
                    "rimming",
                    "ritard",
                    "rtard",
                    "r-tard",
                    "rump",
                    "rumprammer",
                    "ruski",
                    "s&m",
                    "s.h.i.t.",
                    "s.o.b.",
                    "s_h_i_t",
                    "s0b",
                    "sadism",
                    "sadist",
                    "sandler",
                    "sandnigger",
                    "sanger",
                    "santorum",
                    "scag",
                    "scantily",
                    "scat",
                    "schizo",
                    "schlong",
                    "scissoring",
                    "screw",
                    "screwed",
                    "screwing",
                    "scroat",
                    "scrog",
                    "scrot",
                    "scrote",
                    "scrotum",
                    "scrud",
                    "scum",
                    "seaman",
                    "seamen",
                    "seduce",
                    "seks",
                    "semen",
                    "sex",
                    "sexo",
                    "sexual",
                    "sexy",
                    "sh!+",
                    "sh!t",
                    "sh1t",
                    "s-h-1-t",
                    "shag",
                    "shagger",
                    "shaggin",
                    "shagging",
                    "shamedame",
                    "shemale",
                    "shi+",
                    "shibari",
                    "shit",
                    "s-h-i-t",
                    "shitass",
                    "shitbag",
                    "shitbagger",
                    "shitblimp",
                    "shitbrains",
                    "shitbreath",
                    "shitcanned",
                    "shitcunt",
                    "shitdick",
                    "shite",
                    "shiteater",
                    "shited",
                    "shitey",
                    "shitface",
                    "shitfaced",
                    "shitfuck",
                    "shitfull",
                    "shithead",
                    "shithole",
                    "shithouse",
                    "shiting",
                    "shitings",
                    "shits",
                    "shitspitter",
                    "shitstain",
                    "shitt",
                    "shitted",
                    "shitter",
                    "shitters",
                    "shittiest",
                    "shitting",
                    "shittings",
                    "shitty",
                    "shiz",
                    "shiznit",
                    "shota",
                    "shrimping",
                    "sissy",
                    "skag",
                    "skank",
                    "skeet",
                    "skullfuck",
                    "slag",
                    "slanteye",
                    "slave",
                    "sleaze",
                    "sleazy",
                    "slut",
                    "slutbag",
                    "slutdumper",
                    "slutkiss",
                    "sluts",
                    "smeg",
                    "smegma",
                    "smut",
                    "smutty",
                    "snatch",
                    "snowballing",
                    "snuff",
                    "s-o-b",
                    "sodom",
                    "sodomize",
                    "sodomy",
                    "son-of-a-bitch",
                    "souse",
                    "soused",
                    "spac",
                    "sperm",
                    "spic",
                    "spick",
                    "spik",
                    "spiks",
                    "splooge",
                    "spooge",
                    "spook",
                    "spunk",
                    "steamy",
                    "stfu",
                    "stiffy",
                    "stoned",
                    "strapon",
                    "strappado",
                    "strip",
                    "stroke",
                    "stupid",
                    "suck",
                    "suckass",
                    "sucked",
                    "sucking",
                    "sucks",
                    "sumofabiatch",
                    "swastika",
                    "swinger",
                    "t1t",
                    "t1tt1e5",
                    "t1tties",
                    "tampon",
                    "tard",
                    "tawdry",
                    "teabagging",
                    "teat",
                    "teets",
                    "teez",
                    "terd",
                    "teste",
                    "testee",
                    "testes",
                    "testical",
                    "testicle",
                    "testis",
                    "threesome",
                    "throating",
                    "thrust",
                    "thug",
                    "thundercunt",
                    "tinkle",
                    "tit",
                    "titfuck",
                    "titi",
                    "tits",
                    "titt",
                    "tittie5",
                    "tittiefucker",
                    "titties",
                    "titty",
                    "tittyfuck",
                    "tittyfucker",
                    "tittywank",
                    "titwank",
                    "toke",
                    "toots",
                    "topless",
                    "tosser",
                    "towelhead",
                    "tramp",
                    "tranny",
                    "transsexual",
                    "trashy",
                    "tribadism",
                    "tubgirl",
                    "turd",
                    "tush",
                    "tushy",
                    "tw4t",
                    "twat",
                    "twathead",
                    "twatlips",
                    "twats",
                    "twatty",
                    "twatwaffle",
                    "twink",
                    "twinkie",
                    "twunt",
                    "twunter",
                    "ugly",
                    "unclefucker",
                    "undies",
                    "undressing",
                    "unwed",
                    "upskirt",
                    "urinal",
                    "urine",
                    "urophilia",
                    "uterus",
                    "uzi",
                    "v14gra",
                    "v1gra",
                    "vag",
                    "vagina",
                    "vajayjay",
                    "va-j-j",
                    "valium",
                    "viagra",
                    "vibrator",
                    "virgin",
                    "vixen",
                    "vjayjay",
                    "vodka",
                    "vomit",
                    "vorarephilia",
                    "voyeur",
                    "vulgar",
                    "vulva",
                    "w00se",
                    "wad",
                    "wang",
                    "wank",
                    "wanker",
                    "wankjob",
                    "wanky",
                    "wazoo",
                    "wedgie",
                    "weed",
                    "weenie",
                    "weewee",
                    "weiner",
                    "weirdo",
                    "wench",
                    "wetback",
                    "wh0re",
                    "wh0reface",
                    "whitey",
                    "whiz",
                    "whoar",
                    "whoralicious",
                    "whore",
                    "whorealicious",
                    "whorebag",
                    "whored",
                    "whoreface",
                    "whorehopper",
                    "whorehouse",
                    "whores",
                    "whoring",
                    "wigger",
                    "willies",
                    "willy",
                    "womb",
                    "woody",
                    "wop",
                    "wtf",
                    "xrated",
                    "x-rated",
                    "xxx",
                    "yaoi",
                    "yeasty",
                    "yiffy",
                    "yobbo",
                    "zoophile",
                    "zoophilia",
                    "zubb",
                ];

                let skinsData = [];
                (async () => {
                    skinsData = await (await fetch("./skins.json")).json();
                })();

                let getSkinIconFromSkinName = (skinName = "") => {
                    let skin = skinsData.find((skin) => skin.skin === skinName);
                    if (skin) {
                        return "./" + skin.icon;
                    } else {
                        return "./default.png";
                    }
                };

                // Util stuff
                let notify = (title, text, image = "./speedrunner.png") => {
                    cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
                        runtime.types_by_index.find(
                            (type) => type.plugin instanceof cr.plugins_.sirg_notifications
                        ).instances[0],
                        title,
                        text,
                        image
                    );
                };

                let removeProfanity = (text, listWords, listSentences) => {
                    let newText = "";
                    text = text.toLowerCase();
                    if (!listWords) {
                        listWords = filterArrNoSpaces;
                    }
                    if (!listSentences) {
                        listSentences = filterArrSpaces;
                    }

                    // check if sentences from listSentences are in text

                    listSentences.forEach((sentence) => {
                        if (text.includes(sentence)) {
                            // replace letters with *
                            text = text.replace(sentence, sentence.replace(/[^\s]/g, "*"));
                        }
                    });
                    let words = text.split(" ");

                    for (let i = 0; i < words.length; i++) {
                        if (listWords.includes(words[i])) {
                            newText += "*".repeat(words[i].length) + " ";
                        } else {
                            newText += words[i] + (i == words.length - 1 ? "" : " ");
                        }
                    }
                    return newText;
                };

                let disableClick = () => {
                    // debugger;
                    let map = [];
                    let mapUI = [];
                    let types = runtime.types_by_index.filter((x) =>
                        x.behaviors.some(
                            (y) => y.behavior instanceof cr.behaviors.aekiro_button
                        )
                    );
                    types.forEach((type) => {
                        type.instances.forEach((inst) => {
                            let behavior = inst.behavior_insts.find(
                                (x) => x.behavior instanceof cr.behaviors.aekiro_button
                            );
                            map.push({
                                inst,
                                oldState: behavior.isEnabled,
                            });
                            behavior.isEnabled = 0;
                        });
                    });
                    let layer = runtime.running_layout.layers.find((x) => x.name == "UI");
                    if (layer) {
                        layer.instances.forEach((inst) => {
                            //save state to mapUI
                            mapUI.push({
                                inst,
                                oldState: {
                                    width: inst.width,
                                    height: inst.height,
                                },
                            });
                            // set size to 0
                            inst.width = 0;
                            inst.height = 0;
                            inst.set_bbox_changed();
                        });
                    }
                    return {
                        map,
                        mapUI,
                    };
                };

                let enableClick = ({ map, mapUI }) => {
                    map.forEach((x) => {
                        let inst = x.inst.behavior_insts.find(
                            (x) => x.behavior instanceof cr.behaviors.aekiro_button
                        );
                        inst.isEnabled = inst.isEnabled ? 1 : x.oldState;
                    });
                    mapUI.forEach((x) => {
                        x.inst.width = x.oldState.width;
                        x.inst.height = x.oldState.height;
                        x.inst.set_bbox_changed();
                    });
                };

                // get all query strings
                function getQueryString(url) {
                    var queryString = "";
                    let result = {};
                    // if url is given, get query string from url, else use location.search.substring(1);
                    if (url) {
                        queryString = url.indexOf("?") != -1 ? url.split("?")[1] : "";
                    } else {
                        queryString = location.search.substring(1);
                    }
                    let re = /([^&=]+)=([^&]*)/g;
                    let m;
                    while ((m = re.exec(queryString)) !== null) {
                        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                    }
                    return result;
                }

                function setQueryString(query) {
                    // set url to have query string
                    let url = new URL(window.location.href);
                    url.search = new URLSearchParams(query);
                    window.history.replaceState({}, "", url.href);
                }

                notiePending = [];
                function addNotie() {
                    // add notie stylesheet to head from unpkg
                    let link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = "https://unpkg.com/notie/dist/notie.min.css";
                    document.head.appendChild(link);

                    // add stylesheet tag to head
                    let style = document.createElement("style");
                    style.innerHTML = `
          /* override styles here */
            .notie-container {
              box-shadow: none;
              font-family: Retron2000;
              z-index: 9999999999 !important;
              font-size: 14pt;
            }
            .notie-background-info {
              background-color: black;
            }
            .notie-background-success {
              background-color: black;
              border: solid 4px limegreen;
            }
            .notie-background-error {
              background-color: black;
              border: solid 4px red;
            }
            `;
                    document.head.appendChild(style);

                    // add notie to bottom of body
                    let notieScript = document.createElement("script");
                    notieScript.src = "https://unpkg.com/notie";
                    document.body.appendChild(notieScript);
                    notieScript.onload = () => {
                        // call every pending functions
                        notiePending.forEach((func) => func());
                        notiePending = [];
                    };
                }
                addNotie();

                async function waitForNotie(fn) {
                    if (window.notie) fn();
                    else notiePending.push(fn);
                }

                async function getDialogPrompt({
                    type = "text",
                    text = "Enter your name",
                    submitText = "Ok",
                    cancelText = "Cancel",
                    position = "top",
                    value = "",
                } = {}) {
                    let response = new Promise((resolve, reject) => {
                        waitForNotie(() => {
                            let map = disableClick();
                            notie.input(
                                {
                                    type,
                                    text,
                                    submitText,
                                    cancelText,
                                    position,
                                    value,
                                },
                                (...args) => {
                                    enableClick(map);
                                    resolve(...args);
                                },
                                () => {
                                    enableClick(map);
                                    resolve(null);
                                }
                            );
                            // disable spellcheck from notie textbox
                            let textbox = document.querySelector(".notie-input-field");
                            textbox.setAttribute("spellcheck", "false");
                            textbox.onkeydown = (e) => {
                                // prevent default
                                e.stopPropagation();
                            };
                        });
                    });
                    return response;
                }

                async function getDialogAlert({
                    text = "",
                    type = "info",
                    position = "top",
                    buttonText = "Ok",
                } = {}) {
                    await new Promise((resolve, reject) => {
                        waitForNotie(() => {
                            let map = disableClick();
                            notie.force(
                                {
                                    text,
                                    type,
                                    position,
                                    buttonText,
                                },
                                (...args) => {
                                    enableClick(map);
                                    resolve(...args);
                                }
                            );
                        });
                    });
                    return;
                }

                async function getDialogConfirm({
                    text = "",
                    type = "info",
                    position = "top",
                    buttonText = "Ok",
                    cancelText = "Cancel",
                } = {}) {
                    let response = await new Promise((resolve, reject) => {
                        waitForNotie(() => {
                            let map = disableClick();
                            notie.confirm(
                                {
                                    text,
                                    type,
                                    position,
                                    buttonText,
                                    cancelText,
                                },
                                () => {
                                    enableClick(map);
                                    resolve(true);
                                },
                                () => {
                                    enableClick(map);
                                    resolve(false);
                                }
                            );
                        });
                    });
                    return response;
                }

                let playerType = runtime.types_by_index.find(
                    (x) =>
                        !!x.animations &&
                        x.animations[0].frames[0].texture_file.includes("collider")
                );

                let textType = runtime.types_by_index.find(
                    (x) =>
                        x.name === "TextAlign" ||
                        (x.plugin instanceof cr.plugins_.TextModded &&
                            x.vars_count === 8 &&
                            !x.is_family)
                );

                let ghostArrType = runtime.types_by_index.find(
                    (x) =>
                        x.plugin instanceof cr.plugins_.Arr &&
                        x.default_instance[5][1] === 6
                );

                let globalType = runtime.types_by_index.find(
                    (x) =>
                        x.plugin instanceof cr.plugins_.Globals &&
                        x.instvar_sids.length === 24
                );

                let getPlayer = () =>
                    playerType.instances.filter(
                        (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
                    )[0];

                let getFlag = () =>
                    runtime.types_by_index.find(
                        (x) =>
                            x.name === "EndFlag" ||
                            (x.plugin instanceof cr.plugins_.Sprite &&
                                x.all_frames &&
                                x.all_frames[0].texture_file.includes("endflag"))
                    ).instances[0];

                let addScript = (src, id, onload) => {
                    if (document.getElementById(id)) return;
                    let fjs = document.getElementsByTagName("script")[0];
                    let js = document.createElement("script");
                    js.id = id;
                    fjs.parentNode.insertBefore(js, fjs);
                    js.onload = onload;
                    js.src = src;
                };

                let getCurLayout = () => runtime.running_layout.name;
                let curLayout = runtime.running_layout.name;

                // Multiplayer methods

                const DATA_TYPES = {
                    PLAYER_DATA: "PLAYER_DATA",
                    HOST_DATA: "HOST_DATA",
                    CHAT: "CHAT",
                    PLAYER_JOIN: "PLAYER_JOIN",
                    PLAYER_LEAVE: "PLAYER_LEAVE",
                };

                const types = {
                    TitleLogo: runtime.types_by_index.find(
                        (x) =>
                            x.name === "TitleLogo" ||
                            (x.plugin instanceof cr.plugins_.Sprite &&
                                x.all_frames &&
                                x.all_frames[0].texture_file.includes("titlelogo"))
                    ),
                    Text: runtime.types_by_index.find(
                        (x) =>
                            x.name === "TextAlign" ||
                            (x.plugin instanceof cr.plugins_.TextModded &&
                                x.vars_count === 8 &&
                                !x.is_family)
                    ),
                    SpriteFont: runtime.types_by_index.find(
                        (x) =>
                            x.plugin instanceof cr.plugins_.SkymenSFPlusPLus &&
                            x.behaviors.some(
                                (y) => y.behavior instanceof cr.behaviors.SkymenPin
                            )
                    ),
                };

                globalThis.spawnTextOnTitleLogo = () => {
                    // spawna text on title logo
                    let titleLogo = types.TitleLogo.instances[0];
                    if (!titleLogo) return;
                    titleLogo.angle = 0;
                    titleLogo.update_bbox();
                    let inst = runtime.createInstance(
                        types.SpriteFont,
                        titleLogo.layer,
                        titleLogo.x,
                        titleLogo.y - 10
                    );
                    inst.text = "Online Beta " + VERSION;
                    inst.width = titleLogo.width / 2;
                    inst.height = titleLogo.height;
                    inst.hotspotX = titleLogo.hotspotX;
                    inst.hotspotY = titleLogo.hotspotY;
                    inst.halign = 0.5;
                    inst.valign = 0;
                    inst.characterScale = 1;
                    inst.update_bbox();
                    let pinToInst = (self, otherinst) => {
                        self.pinObject = otherinst;
                        self.pinAngle =
                            cr.angleTo(otherinst.x, otherinst.y, self.inst.x, self.inst.y) -
                            otherinst.angle;
                        self.pinDist = cr.distanceTo(
                            otherinst.x,
                            otherinst.y,
                            self.inst.x,
                            self.inst.y
                        );
                        self.myStartAngle = self.inst.angle;
                        self.lastKnownAngle = self.inst.angle;
                        self.theirStartAngle = otherinst.angle;
                        self.mode = 0;
                    };
                    pinToInst(
                        inst.behavior_insts.find(
                            (x) => x.behavior instanceof cr.behaviors.SkymenPin
                        ),
                        titleLogo
                    );
                };

                function convertBase(value, from_range, to_range) {
                    var from_base = BigInt(from_range.length);
                    var to_base = BigInt(to_range.length);

                    var dec_value = value
                        .split("")
                        .reverse()
                        .reduce(function (carry, digit, index) {
                            if (from_range.indexOf(digit) === -1)
                                throw new Error(
                                    "Invalid digit `" + digit + "` for base " + from_base + "."
                                );
                            return (carry +=
                                BigInt(from_range.indexOf(digit)) * from_base ** BigInt(index));
                        }, BigInt(0));

                    var new_value = "";
                    while (dec_value > 0n) {
                        new_value =
                            to_range[Number(dec_value % BigInt(to_base))] + new_value;
                        dec_value =
                            (dec_value - (dec_value % BigInt(to_base))) / BigInt(to_base);
                    }
                    return new_value || "0";
                }

                function hexToBase64(value) {
                    return convertBase(
                        value,
                        "0123456789abcdef",
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                    );
                }

                function base64ToHex(value) {
                    return convertBase(
                        value,
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                        "0123456789abcdef"
                    );
                }

                function bigHexToUuid(value) {
                    if (value.length !== 32) {
                        // if value is under 32 characters, pad it with zeroes
                        if (value.length < 32) {
                            value =
                                "00000000000000000000000000000000".slice(0, 32 - value.length) +
                                value;
                        } else {
                            throw new Error("Invalid value length.");
                        }
                    }
                    // get first 8 chars, then 4, then 4, then 4, then 12 and join them with -
                    return (
                        value.substring(0, 8) +
                        "-" +
                        value.substring(8, 12) +
                        "-" +
                        value.substring(12, 16) +
                        "-" +
                        value.substring(16, 20) +
                        "-" +
                        value.substring(20, 32)
                    );
                }

                function uuidToBase64(value) {
                    return hexToBase64(value.replace(/\-/g, ""));
                }

                function base64ToUuid(value) {
                    return bigHexToUuid(base64ToHex(value));
                }

                let multiplayer = {
                    init() {
                        // Init code
                        // notify("Mod loaded", "Multiplayer mod loaded");

                        this.username = "";
                        this.initialUsername = "";
                        this.notifyWhenChatIsHidden = true;
                        this.bannedUsers = [];
                        this.permaBannedUsers = [];
                        this.mutedUsers = [];
                        // get username from localstorage
                        this.loadPreferences();
                        this.usernameInsts = null;
                        this.connections = [];
                        this.initDomUI();
                        this.updateDomContainers();
                        this.updateDomUsername();
                        this.updateUserList();
                        this.chat = [];
                        this.initialised = true;
                        this.sendPlayerData = true;

                        runtime.tickMe(this);
                        // only send player data 30 times a second
                        this.tickMe = setInterval(() => {
                            this.sendPlayerData = true;
                        }, 1000 / 30);

                        //this.initWorker();

                        globalThis.ovoMultiplayerClient = this;

                        let thisPromptId = THIS_PROMPT_ID;
                        let lastPromptTime = localStorage.getItem("lastPromptTime");
                        let lastPromptId = localStorage.getItem("lastPromptId");

                        let afterPrompt = () => {
                            //click "ovo-multiplayer-toggle-button"
                            let button = document.getElementById(
                                "ovo-multiplayer-toggle-button"
                            );
                            if (button)
                                button.onclick(true).then(() => {
                                    // if query string has a roomCode, join it
                                    let queryStrings = getQueryString();
                                    if (queryStrings.roomCode) {
                                        this.joinRoom(queryStrings.roomCode);
                                    }
                                });
                        };

                        if (
                            !this.lastPromptId ||
                            this.lastPromptId !== thisPromptId ||
                            !this.lastPromptTime ||
                            Date.now() - parseInt(this.lastPromptTime) >
                            1000 * 60 * 60 * 24 * 7
                        ) {
                            getDialogAlert({
                                type: "success",
                                text: "OvO Online is currently in open beta.<br>We will do our best to fix any issue as quickly as we can.<br>Thank you for playing!",
                            }).then(() => {
                                this.lastPromptId = thisPromptId;
                                this.lastPromptTime = Date.now();
                                this.savePreferences();
                                afterPrompt();
                            });
                        } else {
                            afterPrompt();
                        }
                        // if layout is main menu, call spawnTextOnTitleLogo
                        if (getCurLayout() === "Main Menu") {
                            spawnTextOnTitleLogo();
                        }
                    },

                    loadPreferences() {
                        // Load preferences
                        let data = localStorage.getItem("ovoMultiplayerData");
                        if (data) {
                            try {
                                data = JSON.parse(data);
                                if (
                                    data.username &&
                                    data.username.length < 20 &&
                                    data.username.toLowerCase() === removeProfanity(data.username)
                                ) {
                                    this.username = data.username;
                                }
                                if (data.notifyWhenChatIsHidden) {
                                    this.notifyWhenChatIsHidden = data.notifyWhenChatIsHidden;
                                }
                                if (data.lastPromptTime) {
                                    this.lastPromptTime = data.lastPromptTime;
                                }
                                if (data.lastPromptId) {
                                    this.lastPromptId = data.lastPromptId;
                                }
                                if (data.permaBannedUsers) {
                                    this.permaBannedUsers = data.permaBannedUsers;
                                }
                            } catch (e) {
                                console.error(e);
                            }
                        }
                    },

                    canUserJoin(user) {
                        return this.userIsOnMyVersion(user) && !this.userIsBanned(user);
                    },

                    canIJoinHost() {
                        if (!this.connectedToRoom) {
                            return false;
                        }
                        if (this.isHost) {
                            return true;
                        }
                        // find host in connections
                        let host = this.connections.find((c) => c.data.isHost);
                        if (host) {
                            return host.data.version === VERSION;
                        }
                        return false;
                    },

                    userIsOnMyVersion(user) {
                        if (!user) {
                            return false;
                        }
                        return user.version === VERSION;
                    },

                    userIsBanned(user) {
                        if (!user) {
                            return false;
                        }
                        let bannedUser = this.bannedUsers.find((u) => u.UID === user.UID);
                        if (bannedUser) {
                            return true;
                        }
                        bannedUser = this.permaBannedUsers.find((u) => u.UID === user.UID);
                        if (bannedUser) {
                            return true;
                        }
                        return false;
                    },

                    savePreferences() {
                        // Save preferences
                        let data = {
                            username: this.username,
                            notifyWhenChatIsHidden: this.notifyWhenChatIsHidden,
                            lastPromptId: this.lastPromptId,
                            lastPromptTime: this.lastPromptTime,
                            permaBannedUsers: this.permaBannedUsers,
                        };
                        localStorage.setItem("ovoMultiplayerData", JSON.stringify(data));
                    },

                    initWorker() {
                        this.wakerWorker = new Worker(
                            "data:text/javascript;base64,77u/InVzZSBzdHJpY3QiOw0KDQp2YXIgdGltZXJfaWQgPSAtMTsNCnZhciB0aW1lcl9ydW5uaW5nID0gZmFsc2U7DQoNCmZ1bmN0aW9uIHN0YXJ0VGltZXIoKQ0Kew0KCWlmICh0aW1lcl9ydW5uaW5nKQ0KCQlyZXR1cm47DQoJDQoJdGltZXJfcnVubmluZyA9IHRydWU7DQoJdGltZXJfaWQgPSBzZXRJbnRlcnZhbCh0aWNrLCAxNik7DQp9Ow0KDQpmdW5jdGlvbiBzdG9wVGltZXIoKQ0Kew0KCWlmICghdGltZXJfcnVubmluZykNCgkJcmV0dXJuOw0KCQ0KCXRpbWVyX3J1bm5pbmcgPSBmYWxzZTsNCgljbGVhckludGVydmFsKHRpbWVyX2lkKTsNCgl0aW1lcl9pZCA9IC0xOw0KfTsNCg0KZnVuY3Rpb24gdGljaygpDQp7DQoJaWYgKCF0aW1lcl9ydW5uaW5nKQ0KCQlyZXR1cm47DQoJDQoJc2VsZi5wb3N0TWVzc2FnZSgidGljayIpOw0KfTsNCg0Kc2VsZi5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgZnVuY3Rpb24gKGUpDQp7DQoJdmFyIGNtZCA9IGUuZGF0YTsNCgkNCglpZiAoIWNtZCkNCgkJcmV0dXJuOw0KCQ0KCWlmIChjbWQgPT09ICJzdGFydCIpDQoJew0KCQlzdGFydFRpbWVyKCk7DQoJfQ0KCWVsc2UgaWYgKGNtZCA9PT0gInN0b3AiKQ0KCXsNCgkJc3RvcFRpbWVyKCk7DQoJfQ0KCQ0KfSwgZmFsc2UpOw=="
                        );

                        this.wakerWorker.addEventListener(
                            "message",
                            function (e) {
                                if (e.data === "tick" && runtime.isSuspended) {
                                    runtime.tick(true);
                                }
                            },
                            false
                        );

                        this.wakerWorker.postMessage("");

                        runtime.addSuspendCallback((s) => {
                            // Suspending and is currently host: use a web worker to keep the game alive
                            if (s) {
                                this.wakerWorker.postMessage("start");
                            }
                            // Resuming and is currently host: stop using web worker to keep running, will revert to rAF
                            else {
                                this.wakerWorker.postMessage("stop");
                            }
                        });
                    },

                    startOfLayout() {
                        if (!this.initialised) return;
                        this.usernameInsts = null;
                        this.connections.forEach((connection) => {
                            connection.player = null;
                        });
                        // remove all players instances from memory
                        if (!getFlag()) {
                            // not in a level, do nothing?
                        } else {
                            // in a level, create other players
                            this.connections.forEach((connection) => {
                                if (connection.data)
                                    connection.player = this.createGhostPlayer(connection.data);
                            });
                        }
                    },

                    updateDomUsername() {
                        let text = document.getElementById("ovo-multiplayer-username");
                        if (text) text.innerText = "Username: " + this.username;
                    },

                    initDomUI() {
                        // inject button css
                        let style = document.createElement("style");
                        style.type = "text/css";
                        style.innerHTML = `
              .ovo-multiplayer-toggle-button {
                background-color: transparent;
                position: absolute;
                top: 0;
                left: 0;
                color: white;
                border: none;
                font-family: "Retron2000";
                z-index: 9999999999999999;
                cursor: pointer;
                transition: opacity 0.23s;
                font-size: 10pt;
                padding: 2px;
                opacity: 0.5;
              }
              .ovo-multiplayer-toggle-button:hover {
                opacity: 1;
              }
              .ovo-multiplayer-toggle-button:active {
                opacity: 0.7;
              }
              .ovo-multiplayer-toggle-icon {
                width: 38px;
                height: 38px;
              }
              .ovo-multiplayer-button {
                background-color: black;
                color: white;
                border: none;
                margin-left: 2px;
                font-family: "Retron2000";
                z-index: 99998;
                cursor: pointer;
                transition: background-color 0.23s;
                font-size: 10pt;
                min-width: 50px;
                padding: 5px 10px;
              }
              .ovo-multiplayer-button:hover {
                background-color: rgba(40, 40, 40, 1);
              }
              .ovo-multiplayer-button:active {
                background-color: rgba(80, 80, 80, 1);
              }
              .ovo-multiplayer-button-holder {
                position: absolute;
                z-index: 99999;
                left: 0;
                bottom: 0;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: end;
                flex-wrap: nowrap;
              }
              .ovo-multiplayer-text-box {
                background-color: #d7d7d74d;
                border: solid;
                border-color: black;
                border-width: 6px;
                font-family: "Retron2000";
                position: absolute;
                z-index: 99998;
                transition: background-color 0.23s;
                scrollbar-color: #888 #f1f1f1;
                scrollbar-width: thin;
              }
              .ovo-multiplayer-text-box:hover {
                background-color: #ffffffd7;
              }
              .ovo-multiplayer-chat-input {
                background-color: white;
                border: none;
                font-family: "Retron2000";
                position: absolute;
                z-index: 99998;
                bottom: 30px;
                left: 0;
                width: 400px;
                height: 35px;
                resize: none;
                display: none;
              }
              .ovo-multiplayer-chat-element{
                display: flex;
                flex-direction: row;
                width: 100%;
                white-space: pre;
                background-color: rgba(255, 255, 255, 0.6);
                border: solid;
                border-color: rgba(0, 0, 0, 0.6);
                border-width: 0px 0px 2px;
                font-family: "Retron2000";
              }

              .ovo-multiplayer-chat-sub-element{
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 0px 6px 2px 2px;
              }

              .ovo-multiplayer-chat-sub-sub-element{
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: center;
                justify-content: space-between;
              }

              .ovo-multiplayer-chat-text{
                font-size: 10pt;
                width: 100%;
                margin-top: 2px;
                word-wrap: break-word;
                white-space: pre-wrap;
                word-break: break-word;
              }

              .ovo-multiplayer-chat-username{
                font-weight: bold;
                font-size: 11pt;
              }

              .ovo-multiplayer-chat-timestamp{
                font-size: 8pt;
                white-space: initial;
                margin-left: 6px;
                text-align: end;
              }

              .ovo-multiplayer-chat-icon{
                width: 32px;
                height: 32px;
                margin: 6px;
              }
              .ovo-multiplayer-user-element{
                display: flex;
                flex-direction: row;
                width: 100%;
                white-space: pre;
                background-color: rgba(255, 255, 255, 0.6);
                border: solid;
                border-color: rgba(0, 0, 0, 0.6);
                border-width: 0px 0px 2px;
                font-family: "Retron2000";
                align-items: center;
              }

              .ovo-multiplayer-user-sub-element{
                display: flex;
                flex-direction: row;
                width: 100%;
                margin: 0px 6px 2px 2px;
                justify-content: space-between;
                align-items: center;
              }

              .ovo-multiplayer-user-sub-sub-element{
                display: flex;
                flex-direction: column;
                width: 100%;
                align-items: center;
                justify-content: center;
                justify-content: space-between;
              }

              .ovo-multiplayer-user-buttons{
                font-size: 10pt;
                width: 100%;
                margin-top: 2px;
                display: flex;
                flex-direction: row;
                justify-content: center;
              }

              .ovo-multiplayer-user-button {
                background-color: white;
                border: solid;
                border-color: black;
                border-width: 2px;
                font-family: "Retron2000";
                margin-left: 6px;
                padding: 0px 2px;
                cursor: pointer;
                min-width: 50px;
                transition: background-color 0.23s;
              }

              .ovo-multiplayer-user-button:hover {
                background-color: rgba(230, 230, 230, 1);
              }

              .ovo-multiplayer-user-button:active {
                background-color: rgba(200, 200, 200, 1);
              }

              .ovo-multiplayer-user-username{
                font-weight: bold;
                font-size: 11pt;
              }

              .ovo-multiplayer-user-extra{
                font-size: 8pt;
                white-space: initial;
                margin-left: 6px;
                text-align: center;

              }

              .ovo-multiplayer-user-icon{
                width: 32px;
                height: 32px;
                margin: 6px;
              }

              .ovo-multiplayer-banlist-sub-sub-element{
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: center;
                justify-content: center;
                justify-content: space-between;
              }

              .ovo-multiplayer-banlist-buttons{
                font-size: 10pt;
                margin-top: 2px;
                display: flex;
                flex-direction: row;
                justify-content: center;
              }
              /* width */
              ::-webkit-scrollbar {
                width: 6px;
              }

              /* Track */
              ::-webkit-scrollbar-track {
                background: #22222222;
              }

              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: #eeeeeecc;
              }

              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: #eee;
              }
            `;
                        document.head.appendChild(style);

                        // user interface with create room button, join room button, set username button and chat box
                        let container = document.createElement("div");
                        container.id = "ovo-multiplayer-container";
                        container.style.position = "absolute";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.backgroundColor = "rgba(0,0,0,0)";
                        container.style.zIndex = "9999999999";

                        //first container, only visible when not in a room
                        let disconnectedContainer = document.createElement("div");
                        disconnectedContainer.id = "ovo-multiplayer-disconnected-container";
                        disconnectedContainer.style.position = "absolute";
                        disconnectedContainer.style.top = "0";
                        disconnectedContainer.style.left = "0";
                        disconnectedContainer.style.width = "100%";
                        disconnectedContainer.style.height = "100%";
                        disconnectedContainer.style.backgroundColor = "rgba(0,0,0,0)";
                        disconnectedContainer.style.zIndex = "9999999999";
                        container.appendChild(disconnectedContainer);
                        this.connectContainer = disconnectedContainer;

                        let buttonsHolder = document.createElement("div");
                        buttonsHolder.classList.add("ovo-multiplayer-button-holder");
                        disconnectedContainer.appendChild(buttonsHolder);

                        let createRoomButton = document.createElement("button");
                        createRoomButton.innerText = "Create Room";
                        //apply common style
                        createRoomButton.classList.add("ovo-multiplayer-button");
                        createRoomButton.onclick = () => {
                            this.createRoom();
                            //remove focus from button
                            createRoomButton.blur();
                        };
                        // stop immediate propagation
                        createRoomButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });

                        buttonsHolder.appendChild(createRoomButton);

                        let joinRoomButton = document.createElement("button");
                        joinRoomButton.innerText = "Join Room";
                        //apply common style
                        joinRoomButton.classList.add("ovo-multiplayer-button");
                        joinRoomButton.onclick = async () => {
                            //prompt for room code
                            let roomCode = await getDialogPrompt({ text: "Enter room code" });
                            if (roomCode) this.joinRoom(roomCode);

                            //remove focus from button
                            joinRoomButton.blur();
                        };
                        // stop immediate propagation
                        joinRoomButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });

                        buttonsHolder.appendChild(joinRoomButton);

                        let setUsernameButton = document.createElement("button");
                        setUsernameButton.innerText = "Change Username";
                        //apply common style
                        setUsernameButton.classList.add("ovo-multiplayer-button");
                        setUsernameButton.onclick = async () => {
                            //prompt user for username
                            await this.setUsernamePrompt();

                            //remove focus from button
                            setUsernameButton.blur();
                        };
                        // stop immediate propagation
                        setUsernameButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });
                        buttonsHolder.appendChild(setUsernameButton);

                        //text displaying current room id and user name at the bottom right corner
                        let text = document.createElement("p");
                        text.id = "ovo-multiplayer-username";
                        text.style.backgroundColor = "white";
                        text.style.zIndex = "9999999999";
                        text.style.fontSize = "14px";
                        text.style.color = "black";
                        text.style.textAlign = "left";
                        text.style.paddingLeft = "5px";
                        text.style.paddingBottom = "4px";
                        text.style.fontFamily = "Retron2000";
                        this.updateDomUsername();
                        buttonsHolder.appendChild(text);

                        // other container, only visible when connected to a room
                        let connectedContainer = document.createElement("div");
                        connectedContainer.id = "ovo-multiplayer-other-container";
                        connectedContainer.style.position = "absolute";
                        connectedContainer.style.top = "0";
                        connectedContainer.style.left = "0";
                        connectedContainer.style.width = "100%";
                        connectedContainer.style.height = "100%";
                        connectedContainer.style.backgroundColor = "rgba(0,0,0,0)";
                        connectedContainer.style.zIndex = "9999999999";
                        container.appendChild(connectedContainer);
                        this.connectedContainer = connectedContainer;

                        let buttonsHolder2 = document.createElement("div");
                        buttonsHolder2.classList.add("ovo-multiplayer-button-holder");
                        connectedContainer.appendChild(buttonsHolder2);

                        let leaveRoomButton = document.createElement("button");
                        leaveRoomButton.innerText = "Leave Room";
                        //apply common style
                        leaveRoomButton.classList.add("ovo-multiplayer-button");
                        leaveRoomButton.onclick = () => {
                            this.leaveRoom();

                            chatInput.value = "";
                            chatInput.blur();
                            container.style.backgroundColor = "rgba(0,0,0,0)";
                            chatInput.style.display = "none";
                            if (globalThis.ovoMultiplayerChatStateMap) {
                                enableClick(globalThis.ovoMultiplayerChatStateMap);
                                globalThis.ovoMultiplayerChatStateMap = null;
                            }
                            //remove focus from button
                            leaveRoomButton.blur();
                        };
                        // stop immediate propagation
                        leaveRoomButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });
                        buttonsHolder2.appendChild(leaveRoomButton);

                        //copy room code button
                        let copyRoomCodeButton = document.createElement("button");
                        copyRoomCodeButton.innerText = "Invite Friends";
                        //apply common style
                        copyRoomCodeButton.classList.add("ovo-multiplayer-button");
                        copyRoomCodeButton.onclick = () => {
                            this.copyRoomCode();

                            chatInput.value = "";
                            chatInput.blur();
                            container.style.backgroundColor = "rgba(0,0,0,0)";
                            chatInput.style.display = "none";
                            if (globalThis.ovoMultiplayerChatStateMap) {
                                enableClick(globalThis.ovoMultiplayerChatStateMap);
                                globalThis.ovoMultiplayerChatStateMap = null;
                            }

                            //remove focus from button
                            copyRoomCodeButton.blur();
                        };
                        // stop immediate propagation
                        copyRoomCodeButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });
                        buttonsHolder2.appendChild(copyRoomCodeButton);

                        // set username button
                        let setUsernameButton2 = document.createElement("button");
                        setUsernameButton2.innerText = "Change Username";
                        //apply common style
                        setUsernameButton2.classList.add("ovo-multiplayer-button");
                        setUsernameButton2.onclick = async () => {
                            chatInput.value = "";
                            chatInput.blur();
                            container.style.backgroundColor = "rgba(0,0,0,0)";
                            chatInput.style.display = "none";
                            if (globalThis.ovoMultiplayerChatStateMap) {
                                enableClick(globalThis.ovoMultiplayerChatStateMap);
                                globalThis.ovoMultiplayerChatStateMap = null;
                            }
                            //prompt user for username
                            await this.setUsernamePrompt();

                            //remove focus from button
                            setUsernameButton2.blur();
                        };
                        // stop immediate propagation
                        setUsernameButton2.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });
                        // buttonsHolder2.appendChild(setUsernameButton2);

                        let chatBox = document.createElement("div");
                        let chatInput = document.createElement("textarea");

                        // create 3 tabs
                        let tabContainer = document.createElement("div");
                        tabContainer.id = "ovo-multiplayer-tab-container";
                        tabContainer.style.position = "absolute";
                        tabContainer.style.bottom = "320px";
                        tabContainer.style.left = "0";
                        tabContainer.style.width = "388px";
                        tabContainer.style.height = "20px";
                        tabContainer.style.display = "flex";
                        tabContainer.style.flexDirection = "row";
                        tabContainer.style.justifyContent = "flex-start";
                        tabContainer.style.backgroundColor = "rgba(0,0,0,0)";
                        tabContainer.style.zIndex = "9999999999";
                        connectedContainer.appendChild(tabContainer);

                        let tabIndex = 0;
                        this.selectedTab = -1;
                        let tabs = [];
                        let tabContents = [];
                        let addTab = (name, content) => {
                            let thisIndex = tabIndex;
                            let tab = document.createElement("div");
                            tab.id = "ovo-multiplayer-tab-" + tabIndex;
                            tab.classList.add("ovo-multiplayer-tab");
                            tab.innerText = name;
                            tab.style.height = "20px";
                            tab.style.left = "0";
                            tab.style.top = "0";
                            tab.style.backgroundColor = "rgba(0,0,0,1)";
                            tab.style.color = "white";
                            tab.style.fontSize = "10pt";
                            tab.style.fontFamily = "Retron2000";
                            tab.style.cursor = "pointer";
                            tab.style.paddingLeft = "10px";
                            tab.style.paddingRight = "10px";
                            tab.style.paddingTop = "3px";
                            tab.style.paddingBottom = "3px";
                            tab.style.textAlign = "center";
                            tab.style.cursor = "pointer";
                            tab.style.zIndex = "9999999999";
                            tab.onclick = () => {
                                if (this.selectedTab === thisIndex) {
                                    return;
                                }
                                //hide all tabs
                                for (let i = 0; i < tabContents.length; i++) {
                                    tabContents[i].style.display = "none";
                                }
                                //show this tab
                                content.style.display = "block";
                                //change tab color
                                for (let i = 0; i < tabs.length; i++) {
                                    tabs[i].style.backgroundColor = "rgba(255,255,255,0.8)";
                                    tabs[i].style.color = "black";
                                }
                                tab.style.backgroundColor = "rgba(0,0,0,1)";
                                tab.style.color = "white";
                                this.selectedTab = thisIndex;

                                chatInput.value = "";
                                chatInput.blur();
                                container.style.backgroundColor = "rgba(0,0,0,0)";
                                chatInput.style.display = "none";
                                if (globalThis.ovoMultiplayerChatStateMap) {
                                    enableClick(globalThis.ovoMultiplayerChatStateMap);
                                    globalThis.ovoMultiplayerChatStateMap = null;
                                }

                                if (thisIndex === 0) {
                                    //scroll to bottom
                                    let chatBox = document.getElementById(
                                        "ovo-multiplayer-chat-box"
                                    );
                                    if (chatBox) {
                                        chatBox.scrollTop = chatBox.scrollHeight;
                                    }
                                }
                            };
                            tabContainer.appendChild(tab);
                            tabs.push(tab);
                            tabContents.push(content);
                            tabIndex++;
                        };

                        let selectTab = (index) => {
                            if (
                                index === this.selectedTab ||
                                index < 0 ||
                                index >= tabContents.length
                            ) {
                                return;
                            }
                            tabs[index].onclick();
                        };

                        // chat tab
                        let chatTab = document.createElement("div");
                        addTab("Chat", chatTab);
                        connectedContainer.appendChild(chatTab);

                        // user list tab
                        let userListTab = document.createElement("div");
                        addTab("User list", userListTab);
                        connectedContainer.appendChild(userListTab);

                        // settings tab
                        let settingsTab = document.createElement("div");
                        addTab("Ban list", settingsTab);
                        connectedContainer.appendChild(settingsTab);

                        let tipsTab = document.createElement("div");
                        addTab("Info", tipsTab);
                        connectedContainer.appendChild(tipsTab);

                        selectTab(0);

                        //show chat messages in a read only text area
                        chatBox.id = "ovo-multiplayer-chat-box";
                        //apply common style
                        chatBox.classList.add("ovo-multiplayer-text-box");
                        chatBox.style.border = "none";
                        chatBox.style.padding = "6px";
                        chatBox.style.bottom = "65px";
                        chatBox.style.color = "black";
                        chatBox.style.left = "0";
                        chatBox.style.width = "388px";
                        chatBox.style.height = "238px";
                        chatBox.style.resize = "none";
                        chatBox.style.display = "block";
                        chatBox.style.textShadow = "0 0 5px white";
                        chatBox.innerHTML = "No chat messages yet...";
                        chatBox.style.overflow = "auto scroll";
                        chatBox.style.textAlign = "left";

                        chatBox.addEventListener("wheel", (e) => {
                            e.stopImmediatePropagation();
                        });
                        chatTab.appendChild(chatBox);

                        chatInput.id = "ovo-multiplayer-chat-input";
                        //apply common style
                        chatInput.classList.add("ovo-multiplayer-chat-input");
                        chatInput.placeholder = "Type here...";
                        chatInput.onkeydown = (e) => {
                            if (e.key === "Enter") {
                                // if shift is pressed do nothing
                                e.stopImmediatePropagation();
                                if (e.shiftKey) return;
                                this.sendChat({
                                    message: chatInput.value.trim(),
                                });

                                //wait for a bit before clearing the input
                                setTimeout(() => {
                                    chatInput.value = "";
                                    // chatInput.blur();
                                    // container.style.backgroundColor = "rgba(0,0,0,0)";
                                    // chatInput.style.display = "none";
                                    // if (globalThis.ovoMultiplayerChatStateMap) {
                                    //   enableClick(globalThis.ovoMultiplayerChatStateMap);
                                    //   globalThis.ovoMultiplayerChatStateMap = null;
                                    // }
                                }, 100);
                            }
                            if (e.key === "Escape") {
                                chatInput.blur();
                                container.style.backgroundColor = "rgba(0,0,0,0)";
                                chatInput.style.display = "none";
                                if (globalThis.ovoMultiplayerChatStateMap) {
                                    enableClick(globalThis.ovoMultiplayerChatStateMap);
                                    globalThis.ovoMultiplayerChatStateMap = null;
                                }
                            }

                            e.stopPropagation();
                        };
                        chatTab.appendChild(chatInput);

                        //show user list in a read only text area
                        let userList = document.createElement("div");
                        userList.id = "ovo-multiplayer-user-list";
                        //apply common style
                        userList.classList.add("ovo-multiplayer-text-box");
                        userList.style.border = "none";
                        userList.style.padding = "6px";
                        userList.style.bottom = "50px";
                        userList.style.color = "black";
                        userList.style.left = "0";
                        userList.style.width = "388px";
                        userList.style.height = "252px";
                        userList.style.resize = "none";
                        userList.style.display = "block";
                        userList.style.textShadow = "0 0 5px white";
                        userList.style.overflow = "auto scroll";
                        userList.style.textAlign = "left";

                        userList.addEventListener("wheel", (e) => {
                            e.stopImmediatePropagation();
                        });
                        userListTab.appendChild(userList);

                        //show user list in a read only text area
                        let settings = document.createElement("div");
                        settings.id = "ovo-multiplayer-settings";
                        //apply common style
                        settings.classList.add("ovo-multiplayer-text-box");
                        settings.style.border = "none";
                        settings.style.padding = "6px";
                        settings.style.bottom = "50px";
                        settings.style.color = "black";
                        settings.style.left = "0";
                        settings.style.width = "388px";
                        settings.style.height = "252px";
                        settings.style.resize = "none";
                        settings.style.display = "block";
                        settings.style.textShadow = "0 0 5px white";
                        settings.style.overflow = "auto scroll";
                        settings.style.textAlign = "left";
                        settings.innerHTML = "No banned users (yet).";

                        settings.addEventListener("wheel", (e) => {
                            e.stopImmediatePropagation();
                        });
                        settingsTab.appendChild(settings);

                        //show user list in a read only text area
                        let tips = document.createElement("div");
                        tips.id = "ovo-multiplayer-tips";
                        //apply common style
                        tips.classList.add("ovo-multiplayer-text-box");
                        tips.style.border = "none";
                        tips.style.padding = "6px";
                        tips.style.bottom = "50px";
                        tips.style.color = "black";
                        tips.style.left = "0";
                        tips.style.width = "388px";
                        tips.style.height = "252px";
                        tips.style.resize = "none";
                        tips.style.display = "block";
                        tips.style.textShadow = "0 0 5px white";
                        tips.style.overflow = "auto scroll";
                        tips.style.textAlign = "left";
                        // display tips
                        tips.innerHTML = `
            <h3 style="padding-left: 14px;">Info & Tips</h3>
            <br>
            <p>
              <b>-</b> You can press "Enter" to open the chat, and "Escape" to close it
            </p>
            <br>
            <p>
              <b>-</b> Click the globe icon at the top left of the screen to toggle the multiplayer UI.
            </p>
            <br>
            <p>
              <b>-</b> You can change your username in a room in the user list.
            </p>
            <br>
            <p>
              <b>-</b> If you are the host, you can kick, ban and perma ban players from the game.
            </p>
            <br>
            <p>
              <b>-</b> Perma bans will persist accross rooms, but this is not the case for bans.
            </p>
            <br>
            <p>
              <b>-</b> If someone is spamming the chat, you can mute them from the user list.
            </p>
          `;

                        tips.addEventListener("wheel", (e) => {
                            e.stopImmediatePropagation();
                        });
                        tipsTab.appendChild(tips);

                        let chatButton = document.createElement("button");
                        chatButton.innerText = "Open Chat";
                        //apply common style
                        chatButton.classList.add("ovo-multiplayer-button");
                        let toggleChatBox = () => {
                            //do nothing if not connected to room
                            if (!this.connectedToRoom) return;

                            // if (chatInput.value) {
                            //   this.sendChat({
                            //     username: this.username,
                            //     message: chatInput.value,
                            //   });

                            //   //wait for a bit before clearing the input
                            //   setTimeout(() => {
                            //     chatInput.value = "";
                            //     chatInput.blur();
                            //     container.style.backgroundColor = "rgba(0,0,0,0)";
                            //     chatInput.style.display = "none";
                            //     if (globalThis.ovoMultiplayerChatStateMap) {
                            //       enableClick(globalThis.ovoMultiplayerChatStateMap);
                            //       globalThis.ovoMultiplayerChatStateMap = null;
                            //     }
                            //   }, 100);
                            // }

                            if (chatInput.style.display === "none") {
                                selectTab(0);
                                chatInput.style.display = "block";
                                container.style.backgroundColor = "rgba(0,0,0,0.5)";
                                globalThis.ovoMultiplayerChatStateMap = disableClick();
                                setTimeout(() => {
                                    chatInput.focus();
                                }, 100);
                            } else {
                                chatInput.style.display = "none";
                                chatInput.blur();
                                container.style.backgroundColor = "rgba(0,0,0,0)";
                                if (globalThis.ovoMultiplayerChatStateMap) {
                                    enableClick(globalThis.ovoMultiplayerChatStateMap);
                                    globalThis.ovoMultiplayerChatStateMap = null;
                                }
                            }
                        };
                        chatButton.onclick = () => {
                            toggleChatBox();
                            //remove focus from button
                            chatButton.blur();
                        };
                        // stop immediate propagation
                        chatButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });
                        // open chatbox on T key only if chatInput is not focused
                        document.addEventListener("keydown", (e) => {
                            if (e.key === "Enter" && chatInput.style.display === "none") {
                                toggleChatBox();
                            }
                        });
                        buttonsHolder2.appendChild(chatButton);

                        document.body.appendChild(container);

                        // a button at the top left corner that toggles the entire UI
                        let toggleButton = document.createElement("button");
                        toggleButton.id = "ovo-multiplayer-toggle-button";
                        toggleButton.innerText = "";
                        // little globe icon in the button
                        let globeIcon = document.createElement("img");
                        // use web icon from material design icons
                        globeIcon.src =
                            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE2LjM2LDE0QzE2LjQ0LDEzLjM0IDE2LjUsMTIuNjggMTYuNSwxMkMxNi41LDExLjMyIDE2LjQ0LDEwLjY2IDE2LjM2LDEwSDE5Ljc0QzE5LjksMTAuNjQgMjAsMTEuMzEgMjAsMTJDMjAsMTIuNjkgMTkuOSwxMy4zNiAxOS43NCwxNE0xNC41OSwxOS41NkMxNS4xOSwxOC40NSAxNS42NSwxNy4yNSAxNS45NywxNkgxOC45MkMxNy45NiwxNy42NSAxNi40MywxOC45MyAxNC41OSwxOS41Nk0xNC4zNCwxNEg5LjY2QzkuNTYsMTMuMzQgOS41LDEyLjY4IDkuNSwxMkM5LjUsMTEuMzIgOS41NiwxMC42NSA5LjY2LDEwSDE0LjM0QzE0LjQzLDEwLjY1IDE0LjUsMTEuMzIgMTQuNSwxMkMxNC41LDEyLjY4IDE0LjQzLDEzLjM0IDE0LjM0LDE0TTEyLDE5Ljk2QzExLjE3LDE4Ljc2IDEwLjUsMTcuNDMgMTAuMDksMTZIMTMuOTFDMTMuNSwxNy40MyAxMi44MywxOC43NiAxMiwxOS45Nk04LDhINS4wOEM2LjAzLDYuMzQgNy41Nyw1LjA2IDkuNCw0LjQ0QzguOCw1LjU1IDguMzUsNi43NSA4LDhNNS4wOCwxNkg4QzguMzUsMTcuMjUgOC44LDE4LjQ1IDkuNCwxOS41NkM3LjU3LDE4LjkzIDYuMDMsMTcuNjUgNS4wOCwxNk00LjI2LDE0QzQuMSwxMy4zNiA0LDEyLjY5IDQsMTJDNCwxMS4zMSA0LjEsMTAuNjQgNC4yNiwxMEg3LjY0QzcuNTYsMTAuNjYgNy41LDExLjMyIDcuNSwxMkM3LjUsMTIuNjggNy41NiwxMy4zNCA3LjY0LDE0TTEyLDQuMDNDMTIuODMsNS4yMyAxMy41LDYuNTcgMTMuOTEsOEgxMC4wOUMxMC41LDYuNTcgMTEuMTcsNS4yMyAxMiw0LjAzTTE4LjkyLDhIMTUuOTdDMTUuNjUsNi43NSAxNS4xOSw1LjU1IDE0LjU5LDQuNDRDMTYuNDMsNS4wNyAxNy45Niw2LjM0IDE4LjkyLDhNMTIsMkM2LjQ3LDIgMiw2LjUgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWiIgLz48L3N2Zz4=";
                        globeIcon.classList.add("ovo-multiplayer-toggle-icon");
                        toggleButton.appendChild(globeIcon);
                        //apply common style
                        toggleButton.classList.add("ovo-multiplayer-toggle-button");
                        toggleButton.onclick = async (mute = false) => {
                            // on first click, prompt for username
                            if (this.username === "") {
                                await this.setUsernamePrompt();
                            }
                            container.style.display =
                                container.style.display === "none" ? "block" : "none";
                            if (!mute) {
                                notify(
                                    "OvO Online",
                                    "OvO Online is now " +
                                    (container.style.display === "none" ? "hidden" : "visible")
                                );
                            }
                            //remove focus from button when clicked
                            toggleButton.blur();
                        };
                        // stop immediate propagation
                        toggleButton.addEventListener("click", (e) => {
                            e.stopImmediatePropagation();
                        });
                        // set containter style to none
                        container.style.display = "none";
                        document.body.appendChild(toggleButton);
                    },

                    updateUserList(force = false) {
                        if (!force && this.selectedTab !== 1) {
                            return;
                        }
                        // update user list
                        const userList = document.getElementById(
                            "ovo-multiplayer-user-list"
                        );

                        let createUserElement = () => {
                            let userElement = document.createElement("div");
                            userElement.className = "ovo-multiplayer-user-element";
                            let userSubElement = document.createElement("div");
                            userSubElement.className = "ovo-multiplayer-user-sub-element";
                            let userSubSubElement = document.createElement("div");
                            userSubSubElement.className =
                                "ovo-multiplayer-user-sub-sub-element";
                            let userButtonsDiv = document.createElement("div");
                            userButtonsDiv.className = "ovo-multiplayer-user-buttons";

                            // add kick, ban and perma ban buttons
                            let muteButton = document.createElement("button");
                            muteButton.className = "ovo-multiplayer-user-button";
                            muteButton.innerHTML = "Mute";
                            userButtonsDiv.appendChild(muteButton);

                            // add kick, ban and perma ban buttons
                            let kickButton = document.createElement("button");
                            kickButton.className = "ovo-multiplayer-user-button";
                            kickButton.innerHTML = "Kick";
                            kickButton.disabled = true;
                            userButtonsDiv.appendChild(kickButton);

                            let banButton = document.createElement("button");
                            banButton.className = "ovo-multiplayer-user-button";
                            banButton.innerHTML = "Ban";
                            banButton.disabled = true;
                            userButtonsDiv.appendChild(banButton);

                            let permaBanButton = document.createElement("button");
                            permaBanButton.className = "ovo-multiplayer-user-button";
                            permaBanButton.innerHTML = "Perma Ban";
                            permaBanButton.disabled = true;
                            userButtonsDiv.appendChild(permaBanButton);

                            let changeUsername = document.createElement("button");
                            changeUsername.className = "ovo-multiplayer-user-button";
                            changeUsername.innerHTML = "Change Username";
                            changeUsername.disabled = true;
                            userButtonsDiv.appendChild(changeUsername);

                            let userUsername = document.createElement("div");
                            userUsername.className = "ovo-multiplayer-user-username";
                            let userExtraData = document.createElement("div");
                            userExtraData.className = "ovo-multiplayer-user-extra";
                            let userIcon = document.createElement("img");
                            userIcon.className = "ovo-multiplayer-chat-icon";
                            userElement.appendChild(userIcon);
                            userElement.appendChild(userSubElement);
                            userSubElement.appendChild(userUsername);
                            userSubElement.appendChild(userSubSubElement);
                            userSubSubElement.appendChild(userExtraData);
                            userSubSubElement.appendChild(userButtonsDiv);
                            return {
                                elementDiv: userElement,
                                usernameDiv: userUsername,
                                extraDataDiv: userExtraData,
                                buttonsDiv: userButtonsDiv,
                                muteButton: muteButton,
                                kickButton: kickButton,
                                banButton: banButton,
                                permaBanButton: permaBanButton,
                                changeUsername: changeUsername,
                                iconElement: userIcon,
                            };
                        };

                        let updateUserElementData = (
                            userElement,
                            user,
                            isMe = false,
                            connection
                        ) => {
                            userElement.usernameDiv.innerHTML = user.username;
                            userElement.extraDataDiv.innerHTML =
                                (user.isHost ? "(host) - " : "") +
                                (user.username === user.initialUsername
                                    ? ""
                                    : "(" + user.initialUsername + ") - ") +
                                (isMe ? "You - " : (user.ping || "?") + "ms - ") +
                                user.UID;
                            userElement.iconElement.src = getSkinIconFromSkinName(user.skin);
                            if (!isMe) {
                                userElement.muteButton.innerHTML = this.userIsMuted(
                                    connection.id
                                )
                                    ? "Unmute"
                                    : "Mute";
                            }
                            // set buttons
                            if (this.isHost && !isMe) {
                                userElement.muteButton.style.display = "block";
                                userElement.muteButton.disabled = false;
                                userElement.kickButton.style.display = "block";
                                userElement.kickButton.disabled = false;
                                userElement.banButton.style.display = "block";
                                userElement.banButton.disabled = false;
                                userElement.permaBanButton.style.display = "block";
                                userElement.permaBanButton.disabled = false;
                                userElement.changeUsername.style.display = "none";
                                userElement.changeUsername.disabled = true;
                                // add click listeners
                                userElement.muteButton.onclick = () => {
                                    this.toggleMuteUser(connection.id);
                                };
                                userElement.kickButton.onclick = () => {
                                    this.kickUser(user, connection);
                                };
                                userElement.banButton.onclick = () => {
                                    this.banUser(user, connection);
                                };
                                userElement.permaBanButton.onclick = () => {
                                    this.permaBanUser(user, connection);
                                };
                                userElement.changeUsername.onclick = () => { };
                            } else if (!isMe) {
                                // only show mute button
                                userElement.muteButton.style.display = "block";
                                userElement.muteButton.disabled = false;
                                userElement.kickButton.style.display = "none";
                                userElement.kickButton.disabled = true;
                                userElement.banButton.style.display = "none";
                                userElement.banButton.disabled = true;
                                userElement.permaBanButton.style.display = "none";
                                userElement.permaBanButton.disabled = true;
                                userElement.changeUsername.style.display = "none";
                                userElement.changeUsername.disabled = true;
                                // add click listener
                                userElement.muteButton.onclick = () => {
                                    this.toggleMuteUser(connection.id);
                                };
                                userElement.kickButton.onclick = () => { };
                                userElement.banButton.onclick = () => { };
                                userElement.permaBanButton.onclick = () => { };
                                userElement.changeUsername.onclick = () => { };
                            } else {
                                // hide all buttons
                                userElement.muteButton.style.display = "none";
                                userElement.muteButton.disabled = true;
                                userElement.kickButton.style.display = "none";
                                userElement.kickButton.disabled = true;
                                userElement.banButton.style.display = "none";
                                userElement.banButton.disabled = true;
                                userElement.permaBanButton.style.display = "none";
                                userElement.permaBanButton.disabled = true;
                                userElement.changeUsername.style.display = "block";
                                userElement.changeUsername.disabled = false;
                                // add click listeners
                                userElement.muteButton.onclick = () => { };
                                userElement.kickButton.onclick = () => { };
                                userElement.banButton.onclick = () => { };
                                userElement.permaBanButton.onclick = () => { };
                                userElement.changeUsername.onclick = async () => {
                                    let chatInput = document.getElementById(
                                        "ovo-multiplayer-chat-input"
                                    );
                                    let container = document.getElementById(
                                        "ovo-multiplayer-container"
                                    );
                                    chatInput.value = "";
                                    chatInput.blur();
                                    container.style.backgroundColor = "rgba(0,0,0,0)";
                                    chatInput.style.display = "none";
                                    if (globalThis.ovoMultiplayerChatStateMap) {
                                        enableClick(globalThis.ovoMultiplayerChatStateMap);
                                        globalThis.ovoMultiplayerChatStateMap = null;
                                    }
                                    //prompt user for username
                                    await this.setUsernamePrompt();
                                    //update user element
                                    user.username = this.username;
                                    updateUserElementData(userElement, user, isMe, connection);

                                    //remove focus from button
                                    userElement.blur();
                                };
                            }
                        };

                        if (!this.roomUsers) {
                            this.roomUsers = [
                                {
                                    connection: null, // my user element
                                    userElement: createUserElement(),
                                },
                            ];
                        }
                        // add all connection users if they don't already exist in the list
                        for (let i = 0; i < this.connections.length; i++) {
                            let connection = this.connections[i];
                            let userExists = false;
                            for (let j = 0; j < this.roomUsers.length; j++) {
                                if (this.roomUsers[j].connection === connection) {
                                    userExists = true;
                                    break;
                                }
                            }
                            if (!userExists) {
                                this.roomUsers.push({
                                    connection: connection,
                                    userElement: createUserElement(),
                                });
                            }
                        }

                        // remove all users that don't have a connection
                        for (let i = 0; i < this.roomUsers.length; i++) {
                            let user = this.roomUsers[i];
                            if (user.connection) {
                                // if connection is in connections list, skip
                                let connectionExists = false;
                                for (let j = 0; j < this.connections.length; j++) {
                                    if (this.connections[j] === user.connection) {
                                        connectionExists = true;
                                        break;
                                    }
                                }
                                if (!connectionExists) {
                                    // remove userElement from parent
                                    if (user.userElement.elementDiv.parentNode) {
                                        user.userElement.elementDiv.parentNode.removeChild(
                                            user.userElement.elementDiv
                                        );
                                    }
                                    // remove user from list
                                    this.roomUsers.splice(i, 1);
                                    i--;
                                }
                            }
                        }

                        if (this.roomUsers && this.roomUsers.length > 0) {
                            this.roomUsers.forEach((user) => {
                                if (user.connection && !user.connection.data) return; // skip if no data
                                updateUserElementData(
                                    user.userElement,
                                    user.connection ? user.connection.data : this.getMyData(),
                                    !user.connection,
                                    user.connection
                                );
                                // append element if it's not already in the list
                                if (user.userElement.elementDiv.parentNode !== userList) {
                                    userList.appendChild(user.userElement.elementDiv);
                                }
                            });
                        }
                    },

                    updateBanlist() {
                        // update user list
                        const settings = document.getElementById(
                            "ovo-multiplayer-settings"
                        );
                        settings.innerHTML = "";

                        let createUserElement = () => {
                            let userElement = document.createElement("div");
                            userElement.className = "ovo-multiplayer-user-element";
                            let userSubElement = document.createElement("div");
                            userSubElement.className = "ovo-multiplayer-user-sub-element";
                            let userSubSubElement = document.createElement("div");
                            userSubSubElement.className =
                                "ovo-multiplayer-banlist-sub-sub-element";
                            let userButtonsDiv = document.createElement("div");
                            userButtonsDiv.className = "ovo-multiplayer-banlist-buttons";

                            // add kick, ban and perma ban buttons
                            let unbanButton = document.createElement("button");
                            unbanButton.className = "ovo-multiplayer-user-button";
                            unbanButton.innerHTML = "Unban";
                            userButtonsDiv.appendChild(unbanButton);

                            let userUsername = document.createElement("div");
                            userUsername.className = "ovo-multiplayer-user-username";
                            let userExtraData = document.createElement("div");
                            userExtraData.className = "ovo-multiplayer-user-extra";
                            let userIcon = document.createElement("img");
                            userIcon.className = "ovo-multiplayer-chat-icon";
                            userElement.appendChild(userIcon);
                            userElement.appendChild(userSubElement);
                            userSubElement.appendChild(userUsername);
                            userSubElement.appendChild(userSubSubElement);
                            userSubSubElement.appendChild(userButtonsDiv);
                            userSubSubElement.appendChild(userExtraData);
                            return {
                                elementDiv: userElement,
                                usernameDiv: userUsername,
                                extraDataDiv: userExtraData,
                                buttonsDiv: userButtonsDiv,
                                unbanButton: unbanButton,
                                iconElement: userIcon,
                            };
                        };

                        let updateUserElementData = (userElement, user, type) => {
                            userElement.usernameDiv.innerText = user.username;
                            userElement.extraDataDiv.innerText =
                                (user.username === user.initialUsername
                                    ? ""
                                    : "(" + user.initialUsername + ") - ") +
                                " Type: " +
                                (type === "ban" ? "Session Ban" : "Perma Ban");
                            userElement.iconElement.src = getSkinIconFromSkinName(user.skin);
                            userElement.unbanButton.onclick = () => {
                                this.unbanUser(user);
                            };
                        };

                        let banList = [
                            ...this.bannedUsers.map((user) => {
                                return {
                                    type: "ban",
                                    user: user,
                                };
                            }),
                            ...this.permaBannedUsers.map((user) => {
                                return {
                                    type: "permaBan",
                                    user: user,
                                };
                            }),
                        ];

                        if (banList && banList.length > 0) {
                            // create elements for each user
                            banList.forEach((ban) => {
                                let userElement = createUserElement();
                                updateUserElementData(userElement, ban.user, ban.type);
                                settings.appendChild(userElement.elementDiv);
                            });
                        } else {
                            settings.innerHTML = "No banned users (yet).";
                        }
                    },

                    toggleMuteUser(UID) {
                        if (this.mutedUsers.includes(UID)) {
                            this.mutedUsers.splice(this.mutedUsers.indexOf(UID), 1);
                        } else {
                            this.mutedUsers.push(UID);
                        }
                    },

                    userIsMuted(UID) {
                        return this.mutedUsers.includes(UID);
                    },

                    async kickUser(user, connection, force = false) {
                        if (!force) {
                            if (
                                await getDialogConfirm({
                                    text: `Are you sure you want to kick ${user.username}? This will remove them from the room.`,
                                    buttonText: "Yes",
                                    cancelText: "No",
                                })
                            ) {
                                this.kickUser(user, connection, true);
                            }
                        } else {
                            // force close connection
                            connection.conn.close();
                        }
                    },

                    async banUser(user, connection) {
                        if (
                            !(await getDialogConfirm({
                                text: `Are you sure you want to ban ${user.username}? This will ban them from this room.`,
                                buttonText: "Yes",
                                cancelText: "No",
                            }))
                        ) {
                            return;
                        }
                        // kick user and add it to banned list
                        this.kickUser(user, connection, true);
                        this.bannedUsers.push(JSON.parse(JSON.stringify(user)));
                        this.updateBanlist();
                    },

                    async permaBanUser(user, connection) {
                        if (
                            !(await getDialogConfirm({
                                text: `Are you sure you want to ban ${user.username}? This will also ban them from all future rooms you create.`,
                                buttonText: "Yes",
                                cancelText: "No",
                            }))
                        ) {
                            return;
                        }
                        // kick user and add it to banned list
                        this.kickUser(user, connection, true);
                        this.permaBannedUsers.push(JSON.parse(JSON.stringify(user)));
                        this.updateBanlist();
                        this.savePreferences();
                    },

                    async unbanUser(user) {
                        if (
                            !(await getDialogConfirm({
                                text: `Are you sure you want to unban ${user.username}?`,
                                buttonText: "Yes",
                                cancelText: "No",
                            }))
                        ) {
                            return;
                        }
                        // remove user from banned list
                        this.bannedUsers = this.bannedUsers.filter((bannedUser) => {
                            return bannedUser.UID !== user.UID;
                        });
                        this.permaBannedUsers = this.permaBannedUsers.filter(
                            (bannedUser) => {
                                return bannedUser.UID !== user.UID;
                            }
                        );
                        this.updateBanlist();
                        this.savePreferences();
                    },

                    getRoomCode() {
                        let roomCode;
                        if (!this.connectedToRoom) return;
                        if (this.isHost) {
                            roomCode = this.peer.id;
                        } else {
                            roomCode = this.conn.peer;
                        }
                        let base64RoomCode = uuidToBase64(roomCode);
                        if (base64ToUuid(base64RoomCode) !== roomCode) {
                            return roomCode;
                        } else {
                            return base64RoomCode;
                        }
                    },

                    copyRoomCode() {
                        let toCopy = this.getRoomCode();
                        if (
                            WebSdkWrapper.currentSdk &&
                            WebSdkWrapper.currentSdk.name === "CrazyGames"
                        ) {
                            toCopy = WebSdkWrapper.currentSdk.sdk.inviteLink({
                                roomCode: toCopy,
                            });
                        }
                        if (toCopy) {
                            let textArea = document.createElement("textarea");
                            textArea.value = toCopy;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand("copy");
                            textArea.remove();
                            notify("Room code copied to clipboard");
                        }
                    },

                    tick() {
                        if (!this.initialised) return;
                        let player = getPlayer();
                        if (player && getFlag()) {
                            if (!this.usernameInsts) {
                                this.usernameInsts = this.createUsernameInstances(
                                    player.layer,
                                    player.x,
                                    player.y,
                                    this.username
                                );
                            }

                            this.updateUsernamePosition(
                                this.usernameInsts,
                                player.x - 100,
                                player.y - 55,
                                this.username
                            );
                        }

                        if (this.connectedToRoom && this.sendPlayerData) {
                            this.sendPlayerData = false;
                            this.destroyNonPlayerGhosts();
                            this.connections.forEach((connection) => {
                                if (!connection.data) return;
                                if (!connection.player) {
                                    connection.player = this.createGhostPlayer(connection.data);
                                } else if (connection.data.layout !== getCurLayout()) {
                                    //destroy player
                                    this.destroyGhostPlayer(connection.player);
                                    connection.player = null;
                                } else {
                                    this.loadPlayerData(connection.player, connection.data);
                                }
                            });
                            if (this.isHost) {
                                let otherData = {};
                                this.connections.forEach((connection) => {
                                    otherData[connection.id] = connection.data;
                                });
                                //add my data with my id to other data
                                otherData[this.peer.id] = this.getMyData();

                                //send all player data you received
                                this.connections.forEach((connection) => {
                                    connection.conn.send({
                                        type: DATA_TYPES.HOST_DATA,
                                        payload: otherData,
                                    });
                                });
                            } else {
                                //send only your player data
                                this.conn.send({
                                    type: DATA_TYPES.PLAYER_DATA,
                                    payload: this.getMyData(),
                                });
                            }
                        }
                    },

                    updateUsernamePosition(usernames, x, y, username) {
                        usernames[0].x = x - 2;
                        usernames[0].y = y;
                        usernames[0].text = username;
                        usernames[0].updateFont();
                        usernames[0].set_bbox_changed();
                        usernames[1].x = x + 2;
                        usernames[1].y = y;
                        usernames[1].text = username;
                        usernames[1].updateFont();
                        usernames[1].set_bbox_changed();
                        usernames[2].x = x;
                        usernames[2].y = y - 2;
                        usernames[2].text = username;
                        usernames[2].updateFont();
                        usernames[2].set_bbox_changed();
                        usernames[3].x = x;
                        usernames[3].y = y + 2;
                        usernames[3].text = username;
                        usernames[3].updateFont();
                        usernames[3].set_bbox_changed();
                        usernames[4].x = x;
                        usernames[4].y = y;
                        usernames[4].text = username;
                        usernames[4].updateFont();
                        usernames[4].set_bbox_changed();
                    },

                    updateDomContainers() {
                        this.updateChatBox();
                        if (this.connectedToRoom) {
                            this.connectedContainer.style.display = "block";
                            this.connectContainer.style.display = "none";
                        } else {
                            this.connectedContainer.style.display = "none";
                            this.connectContainer.style.display = "block";
                        }
                    },

                    async setUsernamePrompt() {
                        let defaultName =
                            this.username === "" ? "OvO Player" : this.username;
                        let isDone = false;
                        while (!isDone) {
                            let username = await getDialogPrompt({
                                text: "Enter your username",
                                value: defaultName,
                            });
                            // if username is empty, or if username has profanity, show error message and try again
                            if (username === "") {
                                await getDialogAlert({
                                    type: "error",
                                    text: "Username cannot be empty",
                                });
                            } else if (username === null) {
                                //if user clicks cancel, check if this.username is empty
                                if (this.username === "") {
                                    await getDialogAlert({
                                        type: "error",
                                        text: "Username cannot be empty",
                                    });
                                } else {
                                    isDone = true;
                                }
                            } else if (username.length > 20) {
                                defaultName = username;
                                await getDialogAlert({
                                    type: "error",
                                    text: "Username cannot be longer than 20 characters",
                                });
                            } else if (username.toLowerCase() !== removeProfanity(username)) {
                                defaultName = username;
                                await getDialogAlert({
                                    type: "error",
                                    text: "Username cannot contain profanity",
                                });
                            } else {
                                isDone = true;
                                this.setUsername(username);
                            }
                        }
                    },

                    setUsername(name) {
                        this.username = name;
                        if (this.usernameInsts)
                            this.usernameInsts.forEach((inst) => {
                                inst.text = name;
                                inst.updateFont();
                            });
                        this.updateDomUsername();
                        this.savePreferences();
                        // save username to local storage
                    },

                    sendChat(data) {
                        if (!this.connectedToRoom || data.message.trim() === "") return;
                        this.pushChat(
                            {
                                username: this.username,
                                initialUsername: this.initialUsername,
                                message: data.message,
                                timestamp: Date.now(),
                                id: this.peer.id,
                                skin: globalType.instances[0].instance_vars[8],
                            },
                            true
                        );
                    },

                    updateChatBox() {
                        let chatBox = document.getElementById("ovo-multiplayer-chat-box");
                        chatBox.innerHTML = "";
                        let createChatElement = (chat) => {
                            let chatElement = document.createElement("div");
                            chatElement.className = "ovo-multiplayer-chat-element";
                            let chatSubElement = document.createElement("div");
                            chatSubElement.className = "ovo-multiplayer-chat-sub-element";
                            let chatSubSubElement = document.createElement("div");
                            chatSubSubElement.className =
                                "ovo-multiplayer-chat-sub-sub-element";
                            let chatText = document.createElement("div");
                            chatText.className = "ovo-multiplayer-chat-text";
                            chatText.innerHTML = chat.message;
                            let chatUsername = document.createElement("div");
                            chatUsername.className = "ovo-multiplayer-chat-username";
                            chatUsername.innerText = chat.username;
                            let chatTimestamp = document.createElement("div");
                            chatTimestamp.className = "ovo-multiplayer-chat-timestamp";
                            chatTimestamp.innerText =
                                (chat.username === chat.initialUsername
                                    ? ""
                                    : "(" + chat.initialUsername + ") - ") +
                                new Date(chat.timestamp).toLocaleTimeString();
                            let chatIcon = document.createElement("img");
                            chatIcon.className = "ovo-multiplayer-chat-icon";
                            chatIcon.src = getSkinIconFromSkinName(chat.skin);
                            chatElement.appendChild(chatIcon);
                            chatElement.appendChild(chatSubElement);
                            chatSubElement.appendChild(chatSubSubElement);
                            chatSubElement.appendChild(chatText);
                            chatSubSubElement.appendChild(chatUsername);
                            chatSubSubElement.appendChild(chatTimestamp);
                            return chatElement;
                        };
                        if (this.chat && this.chat.length > 0) {
                            this.chat.forEach((chat) => {
                                chatBox.appendChild(createChatElement(chat));
                            });
                        } else {
                            chatBox.innerHTML = "No chat messages yet...";
                        }
                        //scroll to bottom
                        chatBox.scrollTop = chatBox.scrollHeight;
                    },

                    pushChat(data, transmit = false) {
                        data.message = data.message.toString().replace(/<[^>]*>/g, "");
                        data.message = removeProfanity(data.message);
                        let chatData = {
                            username: data.username,
                            initialUsername: data.initialUsername,
                            message: data.message,
                            id: data.id,
                            skin: data.skin,
                            timestamp: data.timestamp,
                        };
                        // forward chat if host
                        if (this.isHost) {
                            if (!this.userIsMuted(data.id)) {
                                this.chat.push(chatData);
                                this.updateChatBox();
                                this.maybeNotifyChat(data);
                            }
                            this.connections.forEach((connection) => {
                                connection.conn.send({
                                    type: DATA_TYPES.CHAT,
                                    payload: data,
                                });
                            });
                        } else if (transmit) {
                            this.conn.send({
                                type: DATA_TYPES.CHAT,
                                payload: data,
                            });
                        } else {
                            // if user is muted, ignore
                            if (this.userIsMuted(data.id)) return;
                            this.chat.push(chatData);
                            this.updateChatBox();
                            this.maybeNotifyChat(data);
                        }
                    },

                    maybeNotifyChat(data) {
                        if (data.id === this.peer.id) return;
                        //Only notify if "ovo-multiplayer-container" is display none
                        if (
                            (this.notifyWhenChatIsHidden &&
                                document.getElementById("ovo-multiplayer-container").style
                                    .display === "none") ||
                            this.selectedTab !== 0
                        ) {
                            notify(
                                data.username + " sent:",
                                data.message,
                                getSkinIconFromSkinName(data.skin)
                            );
                        }
                    },

                    notifyPlayerUpdate(name, skin, hasJoined = true) {
                        let skinImage = getSkinIconFromSkinName(skin);
                        if (hasJoined) {
                            notify(name, "has joined the room", skinImage);
                        } else {
                            notify(name, "has left the room", skinImage);
                        }
                    },

                    createRoom() {
                        this.connectedToRoom = true;
                        this.isHost = true;
                        this.chat = [];
                        this.bannedUsers = [];
                        this.mutedUsers = [];
                        this.updateBanlist();
                        // this.peer = new Peer(undefined, {
                        //   host: "localhost",
                        //   port: 9000,
                        //   path: "/",
                        //   secure: false,
                        //   debug: 3,
                        // });
                        this.peer = new Peer();
                        this.peer.on("open", (id) => {
                            // Show the ID on screen and allow players to copy it;
                            this.copyRoomCode();
                            notify("Room created", "Room ID: " + this.getRoomCode());
                            this.updateDomContainers();
                            this.updateQueryStrings();
                            this.initialUsername = this.username;
                            this.updateUserList(true);
                        });
                        this.peer.on("connection", (conn) => {
                            let myConnObject = {
                                conn,
                                id: conn.peer,
                                data: null,
                                player: null,
                            };
                            this.connections.push(myConnObject);
                            let isBannedUser = false;
                            conn.on("open", () => {
                                // Receive messages
                                conn.on("data", (data) => {
                                    if (data.type === DATA_TYPES.CHAT) {
                                        this.pushChat(data.payload, true);
                                    } else if (data.type === DATA_TYPES.PLAYER_DATA) {
                                        if (myConnObject.data === null) {
                                            //check if user can join
                                            if (!this.canUserJoin(data.payload)) {
                                                isBannedUser = true;
                                                conn.close();
                                                return;
                                            }

                                            this.notifyPlayerUpdate(
                                                data.payload.username,
                                                data.payload.skin,
                                                true
                                            );
                                            // let every one else know they joined
                                            this.connections.forEach((connection) => {
                                                if (connection.conn !== conn) {
                                                    connection.conn.send({
                                                        type: DATA_TYPES.PLAYER_JOIN,
                                                        payload: {
                                                            username: data.payload.username,
                                                            skin: data.payload.skin,
                                                        },
                                                    });
                                                }
                                            });
                                        }
                                        myConnObject.data = data.payload;
                                        if (data.payload && data.payload.timestamp) {
                                            myConnObject.data.ping =
                                                Date.now() - data.payload.timestamp;
                                        }
                                        this.updateUserList();
                                        // create/delete/update player
                                    }
                                });
                                let closeConn = () => {
                                    if (!isBannedUser) {
                                        this.notifyPlayerUpdate(
                                            myConnObject?.data?.username ?? "Player",
                                            myConnObject?.data?.skin ?? "default",
                                            false
                                        );
                                    }
                                    this.destroyGhostPlayer(myConnObject.player);
                                    //remove connection from list
                                    this.connections.splice(
                                        this.connections.findIndex((x) => x.id === conn.peer),
                                        1
                                    );
                                    this.updateUserList();
                                    // let other connections know this one dropped
                                    this.connections.forEach((connection) => {
                                        connection.conn.send({
                                            type: DATA_TYPES.PLAYER_LEAVE,
                                            payload: {
                                                id: conn.peer,
                                            },
                                        });
                                    });
                                };
                                conn.on("close", closeConn);
                                conn.on("error", closeConn);
                            });
                        });
                    },

                    joinRoom(roomId) {
                        // check if roomid is url using regex
                        if (
                            roomId.match(
                                /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
                            )
                        ) {
                            roomId = getQueryString(roomId).roomCode;
                        }
                        if (!roomId) return;

                        var initRoomId = roomId;

                        if (roomId.length <= 22) {
                            roomId = base64ToUuid(roomId);
                        }

                        this.isHost = false;
                        // this.peer = new Peer(undefined, {
                        //   host: "localhost",
                        //   port: 9000,
                        //   path: "/",
                        //   secure: false,
                        //   debug: 3,
                        // });
                        this.peer = new Peer();
                        this.peer.on("open", (id) => {
                            this.conn = this.peer.connect(roomId);

                            this.conn.on("open", () => {
                                this.initialUsername = this.username;
                                this.connectedToRoom = true;
                                let firstData = true;
                                this.updateQueryStrings();
                                this.updateDomContainers();
                                notify("Joined room", "Connected to room " + roomId);
                                // Receive messages
                                this.conn.on("data", (data) => {
                                    if (data.type === DATA_TYPES.HOST_DATA) {
                                        //update other players besides me
                                        let otherData = data.payload;
                                        Object.keys(otherData).forEach((id) => {
                                            if (id === this.peer.id) return;
                                            let connection = this.connections.find(
                                                (connection) => connection.id === id
                                            );
                                            let playerData = otherData[id];
                                            playerData.ping = Date.now() - playerData.timestamp;

                                            // if (connection.data === null) {
                                            //   // user first joined, notify
                                            //   notify("Player joined", `${playerData.username} joined`);
                                            // }

                                            if (!connection) {
                                                connection = {
                                                    id: id,
                                                    data: playerData,
                                                    player: null,
                                                };
                                                this.connections.push(connection);
                                            } else {
                                                connection.data = playerData;
                                            }
                                            //create player if needed
                                            if (!connection.player) {
                                                connection.player = this.createGhostPlayer(playerData);
                                            } else if (playerData.layout !== getCurLayout()) {
                                                //destroy player
                                                this.destroyGhostPlayer(connection.player);
                                                connection.player = null;
                                            } else {
                                                this.loadPlayerData(connection.player, playerData);
                                            }
                                        });
                                        this.updateUserList();
                                        if (firstData) {
                                            firstData = false;
                                            if (!this.canIJoinHost()) {
                                                this.conn.close();
                                            }
                                        }
                                    } else if (data.type === DATA_TYPES.CHAT) {
                                        console.log(data);
                                        this.pushChat(data.payload, false);
                                    } else if (data.type === DATA_TYPES.PLAYER_JOIN) {
                                        this.notifyPlayerUpdate(
                                            data.payload.username,
                                            data.payload.skin,
                                            true
                                        );
                                    } else if (data.type === DATA_TYPES.PLAYER_LEAVE) {
                                        let connectionId = this.connections.findIndex(
                                            (connection) => connection.id === data.payload.id
                                        );
                                        let connection = this.connections[connectionId];

                                        this.notifyPlayerUpdate(
                                            connection.data.username,
                                            connection.data.skin,
                                            false
                                        );
                                        this.destroyGhostPlayer(connection.player);
                                        // remove connection from list
                                        this.connections.splice(connectionId, 1);
                                        this.updateUserList();
                                    }
                                });
                                let closeConn = () => {
                                    if (!this.connectedToRoom) return;
                                    notify(
                                        "Connection lost",
                                        "Host left the room, or you left the room"
                                    );
                                    this.leaveRoom();
                                };
                                this.conn.on("close", closeConn);
                            });
                        });

                        this.peer.on("error", (err) => {
                            notify(
                                "Connection error",
                                "Could not connect to room " + initRoomId
                            );
                            this.leaveRoom();
                        });
                    },

                    leaveRoom() {
                        if (!this.connectedToRoom) return;
                        this.isHost = false;
                        this.connectedToRoom = false;
                        this.updateQueryStrings();
                        this.peer.destroy();
                        this.peer = null;
                        this.conn = null;
                        this.connections.forEach((connection) => {
                            this.destroyGhostPlayer(connection.player);
                        });
                        this.connections = [];
                        this.updateDomContainers();
                        this.updateUserList();
                        notify("Left room");
                        if (
                            this.initialUsername &&
                            this.initialUsername !== this.username
                        ) {
                            this.username = this.initialUsername;
                        }
                    },

                    updateQueryStrings() {
                        let queryStrings = {};
                        if (this.connectedToRoom) {
                            queryStrings.roomCode = this.getRoomCode();
                        }
                        if (
                            WebSdkWrapper.currentSdk &&
                            WebSdkWrapper.currentSdk.name === "CrazyGames"
                        ) {
                            WebSdkWrapper.currentSdk.sdk.inviteLink(queryStrings);
                        } else {
                            setQueryString(queryStrings);
                        }
                    },

                    getMyData() {
                        let player = getPlayer();
                        if (!player)
                            return {
                                layout: getCurLayout(),
                                skin: globalType.instances[0].instance_vars[8],
                                username: this.username,
                                UID: myUniqueHash,
                                initialUsername: this.initialUsername,
                                isHost: this.isHost,
                                timestamp: Date.now(),
                                version: VERSION,
                            };
                        return {
                            x: player.x,
                            y: player.y,
                            angle: player.angle,
                            state: player.instance_vars[0],
                            layout: getCurLayout(),
                            layer: player.layer.name,
                            username: this.username,
                            UID: myUniqueHash,
                            initialUsername: this.initialUsername,
                            isHost: this.isHost,
                            timestamp: Date.now(),
                            version: VERSION,
                            side: player.instance_vars[2],
                            skin: player.instance_vars[12],
                            frame: player.cur_frame,
                        };
                    },

                    destroyGhostPlayer(player) {
                        if (!player) return;
                        if (player.instance) {
                            player.instance.siblings.forEach((sibling) => {
                                cr.behaviors.SkymenSkin.prototype.acts.UseDefault.call(
                                    sibling.behaviorSkins[0]
                                );
                            });
                            runtime.DestroyInstance(player.instance);
                        }
                        if (player.usernames)
                            player.usernames.forEach((username) => {
                                runtime.DestroyInstance(username);
                            });
                    },

                    destroyNonPlayerGhosts() {
                        if (!getFlag()) return;
                        let ghosts = playerType.instances.filter(
                            (x) => x.instance_vars[16] && x.instance_vars[17] !== ""
                        );
                        if (!ghosts) return;
                        ghosts.forEach((ghost) => {
                            runtime.DestroyInstance(ghost);
                            ghost.siblings.forEach((sibling) => {
                                cr.behaviors.SkymenSkin.prototype.acts.UseDefault.call(
                                    sibling.behaviorSkins[0]
                                );
                            });
                        });
                        let ghostArr = ghostArrType.instances[0];
                        ghostArr.setSize(0, ghostArr.cy, ghostArr.cz);
                        runtime.eventsheets.Player.events[2].subevents[2].subevents[1].actions.length = 0;
                    },

                    createGhostPlayer(data) {
                        if (!data || data.layout !== getCurLayout()) return null;
                        let layer = runtime.running_layout.layers.find(
                            (layer) => layer.name === data.layer
                        );
                        if (!layer) return null;
                        this.destroyNonPlayerGhosts();
                        let instance = runtime.createInstance(
                            playerType,
                            layer,
                            data.x,
                            data.y
                        );
                        instance.visible = false;
                        instance.instance_vars[16] = 1;
                        instance.instance_vars[17] = "";
                        instance.instance_vars[12] = data.skin;
                        setTimeout(() => {
                            if (!getFlag()) return;
                            instance.siblings.forEach((sibling) => {
                                if (data.skin === "") {
                                    cr.behaviors.SkymenSkin.prototype.acts.UseDefault.call(
                                        sibling.behaviorSkins[0]
                                    );
                                } else {
                                    cr.behaviors.SkymenSkin.prototype.acts.SetSkin.call(
                                        sibling.behaviorSkins[0],
                                        data.skin
                                    );
                                }
                            });
                        }, 200);

                        let usernames = this.createUsernameInstances(
                            layer,
                            data.x - 100,
                            data.y - 55,
                            data.username
                        );
                        return {
                            instance,
                            usernames,
                        };
                    },

                    createUsernameInstances(layer, x, y, username) {
                        let ret = [];

                        let inst = runtime.createInstance(textType, layer, x - 2, y);
                        inst.text = username;
                        inst.height = 25;
                        inst.width = 200;
                        inst.facename = "Retron2000";
                        inst.halign = 50;
                        inst.valign = 50;
                        inst.color = "rgb(0,0,0)";
                        inst.fontstyle = "bold";
                        inst.updateFont();
                        inst.set_bbox_changed();
                        ret.push(inst);

                        inst = runtime.createInstance(textType, layer, x + 2, y);
                        inst.text = username;
                        inst.height = 25;
                        inst.width = 200;
                        inst.facename = "Retron2000";
                        inst.halign = 50;
                        inst.valign = 50;
                        inst.color = "rgb(0,0,0)";
                        inst.fontstyle = "bold";
                        inst.updateFont();
                        inst.set_bbox_changed();
                        ret.push(inst);

                        inst = runtime.createInstance(textType, layer, x, y - 2);
                        inst.text = username;
                        inst.height = 25;
                        inst.width = 200;
                        inst.facename = "Retron2000";
                        inst.halign = 50;
                        inst.valign = 50;
                        inst.color = "rgb(0,0,0)";
                        inst.fontstyle = "bold";
                        inst.updateFont();
                        inst.set_bbox_changed();
                        ret.push(inst);

                        inst = runtime.createInstance(textType, layer, x, y + 2);
                        inst.text = username;
                        inst.height = 25;
                        inst.width = 200;
                        inst.facename = "Retron2000";
                        inst.halign = 50;
                        inst.valign = 50;
                        inst.color = "rgb(0,0,0)";
                        inst.fontstyle = "bold";
                        inst.updateFont();
                        inst.set_bbox_changed();
                        ret.push(inst);

                        inst = runtime.createInstance(textType, layer, x, y);
                        inst.text = username;
                        inst.height = 25;
                        inst.width = 200;
                        inst.facename = "Retron2000";
                        inst.halign = 50;
                        inst.valign = 50;
                        inst.color = "rgb(255,255,255)";
                        inst.fontstyle = "";
                        inst.updateFont();
                        inst.set_bbox_changed();
                        ret.push(inst);

                        return ret;
                    },

                    loadPlayerData(player, data) {
                        if (data.layout !== getCurLayout()) return;
                        this.updateUsernamePosition(
                            player.usernames,
                            data.x - 100,
                            data.y - 55,
                            data.username
                        );
                        player.instance.x = data.x;
                        player.instance.y = data.y;
                        player.instance.angle = data.angle;
                        player.instance.instance_vars[0] = data.state;
                        player.instance.instance_vars[2] = data.side;
                        if (data.side > 0) {
                            c2_callFunction("Player > Unmirror", [player.instance.uid]);
                        }
                        if (data.side < 0) {
                            c2_callFunction("Player > Mirror", [player.instance.uid]);
                        }
                        cr.plugins_.Sprite.prototype.acts.SetAnimFrame.call(
                            player.instance,
                            data.frame
                        );
                        player.instance.y = data.y;
                        player.instance.set_bbox_changed();
                    },
                };

                // Override layout code to instantiate distant players if any
                Object.values(runtime.layouts).forEach((layout) => {
                    let oldFn = layout.startRunning.bind(layout);
                    layout.startRunning = () => {
                        oldFn();
                        curLayout = layout.name;
                        multiplayer.startOfLayout();
                        if (globalThis.WebSdkWrapper && getFlag()) {
                            globalThis.WebSdkWrapper.interstitial();
                        }
                        spawnTextOnTitleLogo();
                    };
                });

                addScript(
                    "//unpkg.com/peerjs@1.3.2/dist/peerjs.min.js",
                    "peerJs",
                    () => {
                        new CBFjs().get(function (hash, components) {
                            console.log(hash);
                            myUniqueHash = hash;
                            multiplayer.init();
                        });
                    }
                );
            })();
        },
    };

    if (globalThis.cr_getC2Runtime) {
        let runtime = cr_getC2Runtime();
        if (runtime && runtime.loadingprogress) {
            globalThis.ovoMultiplayerClient.initMod();
        }
    }
})();