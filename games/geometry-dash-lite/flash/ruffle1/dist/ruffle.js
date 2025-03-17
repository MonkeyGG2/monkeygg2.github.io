/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ruffle_web-wasm_extensions_bg.wasm";

/***/ }),

/***/ 797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ruffle_web_bg.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ruffle-extension:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			101: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkruffle_extension"] = self["webpackChunkruffle_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../core/dist/version.js
/**
 * A representation of a semver 2 compliant version string
 */
class Version {
    /**
     * Construct a Version from specific components.
     *
     * If you wish to parse a string into a Version then please use [[fromSemver]].
     *
     * @param major The major version component.
     * @param minor The minor version component.
     * @param patch The patch version component.
     * @param prIdent A list of pre-release identifiers, if any
     * @param buildIdent A list of build identifiers, if any
     */
    constructor(major, minor, patch, prIdent, buildIdent) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.prIdent = prIdent;
        this.buildIdent = buildIdent;
    }
    /**
     * Construct a version from a semver 2 compliant string.
     *
     * This function is intended for use with semver 2 compliant strings.
     * Malformed strings may still parse correctly, but this result is not
     * guaranteed.
     *
     * @param versionString A semver 2.0.0 compliant version string
     * @returns A version object
     */
    static fromSemver(versionString) {
        const buildSplit = versionString.split("+"), prSplit = buildSplit[0].split("-"), versionSplit = prSplit[0].split(".");
        const major = parseInt(versionSplit[0], 10);
        let minor = 0;
        let patch = 0;
        let prIdent = null;
        let buildIdent = null;
        if (versionSplit[1] !== undefined) {
            minor = parseInt(versionSplit[1], 10);
        }
        if (versionSplit[2] !== undefined) {
            patch = parseInt(versionSplit[2], 10);
        }
        if (prSplit[1] !== undefined) {
            prIdent = prSplit[1].split(".");
        }
        if (buildSplit[1] !== undefined) {
            buildIdent = buildSplit[1].split(".");
        }
        return new Version(major, minor, patch, prIdent, buildIdent);
    }
    /**
     * Returns true if a given version is compatible with this one.
     *
     * Compatibility is defined as having the same nonzero major version
     * number, or if both major versions are zero, the same nonzero minor
     * version number, or if both minor versions are zero, the same nonzero
     * patch version number.
     *
     * This implements the ^ operator in npm's semver package, with the
     * exception of the prerelease exclusion rule.
     *
     * @param other The other version to test against
     * @returns True if compatible
     */
    isCompatibleWith(other) {
        return ((this.major !== 0 && this.major === other.major) ||
            (this.major === 0 &&
                other.major === 0 &&
                this.minor !== 0 &&
                this.minor === other.minor) ||
            (this.major === 0 &&
                other.major === 0 &&
                this.minor === 0 &&
                other.minor === 0 &&
                this.patch !== 0 &&
                this.patch === other.patch));
    }
    /**
     * Returns true if this version has precedence over (is newer than) another
     * version.
     *
     * Precedence is defined as in the Semver 2 spec. This implements the >
     * operator in npm's semver package, with the exception of the prerelease
     * exclusion rule.
     *
     * @param other The other version to test against
     * @returns True if this version has precedence over the other one
     */
    hasPrecedenceOver(other) {
        if (this.major > other.major) {
            return true;
        }
        else if (this.major < other.major) {
            return false;
        }
        if (this.minor > other.minor) {
            return true;
        }
        else if (this.minor < other.minor) {
            return false;
        }
        if (this.patch > other.patch) {
            return true;
        }
        else if (this.patch < other.patch) {
            return false;
        }
        if (this.prIdent === null && other.prIdent !== null) {
            return true;
        }
        else if (this.prIdent !== null && other.prIdent === null) {
            return false;
        }
        else if (this.prIdent !== null && other.prIdent !== null) {
            const isNumeric = /^[0-9]*$/;
            for (let i = 0; i < this.prIdent.length && i < other.prIdent.length; i += 1) {
                const numericThis = isNumeric.test(other.prIdent[i]);
                const numericOther = isNumeric.test(this.prIdent[i]);
                if (!numericOther && numericThis) {
                    return true;
                }
                else if (numericOther && numericThis) {
                    const intThis = parseInt(this.prIdent[i], 10);
                    const intOther = parseInt(other.prIdent[i], 10);
                    if (intThis > intOther) {
                        return true;
                    }
                    else if (intThis < intOther) {
                        return false;
                    }
                }
                else if (numericOther && !numericThis) {
                    return false;
                }
                else if (!numericOther && !numericThis) {
                    if (this.prIdent[i] > other.prIdent[i]) {
                        return true;
                    }
                    else if (this.prIdent[i] < other.prIdent[i]) {
                        return false;
                    }
                }
            }
            if (this.prIdent.length > other.prIdent.length) {
                return true;
            }
            else if (this.prIdent.length < other.prIdent.length) {
                return false;
            }
        }
        // Unlike prerelease, we prefer to have a build ident than to not
        if (this.buildIdent !== null && other.buildIdent === null) {
            return true;
        }
        else if (this.buildIdent === null && other.buildIdent !== null) {
            return false;
        }
        else if (this.buildIdent !== null && other.buildIdent !== null) {
            const isNumeric = /^[0-9]*$/;
            for (let i = 0; i < this.buildIdent.length && i < other.buildIdent.length; i += 1) {
                const numricThis = isNumeric.test(this.buildIdent[i]);
                const numericOther = isNumeric.test(other.buildIdent[i]);
                if (!numricThis && numericOther) {
                    return true;
                }
                else if (numricThis && numericOther) {
                    const intThis = parseInt(this.buildIdent[i], 10);
                    const intOther = parseInt(other.buildIdent[i], 10);
                    if (intThis > intOther) {
                        return true;
                    }
                    else if (intThis < intOther) {
                        return false;
                    }
                }
                else if (numricThis && !numericOther) {
                    return false;
                }
                else if (!numricThis && !numericOther) {
                    if (this.buildIdent[i] > other.buildIdent[i]) {
                        return true;
                    }
                    else if (this.buildIdent[i] < other.buildIdent[i]) {
                        return false;
                    }
                }
            }
            return this.buildIdent.length > other.buildIdent.length;
        }
        return false;
    }
    /**
     * Tests if a given version is equivalent to this one.
     *
     * Build and prerelease tags are ignored.
     *
     * @param other The other version to test against
     * @returns True if the given version is equivalent
     */
    isEqual(other) {
        return (this.major === other.major &&
            this.minor === other.minor &&
            this.patch === other.patch);
    }
    /**
     * Tests if a given version is stable or a compatible prerelease for this
     * version.
     *
     * This implements the prerelease exclusion rule of NPM semver: a
     * prerelease version can only pass this check if the major/minor/patch
     * components of both versions are the same. Otherwise, the prerelease
     * version always fails.
     *
     * @param other The other version to test against
     * @returns True if the given version is either stable, or a
     * prerelease in the same series as this one.
     */
    isStableOrCompatiblePrerelease(other) {
        if (other.prIdent === null) {
            return true;
        }
        else {
            return (this.major === other.major &&
                this.minor === other.minor &&
                this.patch === other.patch);
        }
    }
}

;// CONCATENATED MODULE: ../core/dist/version-range.js

/**
 * Represents a set of version requirements.
 */
class VersionRange {
    /**
     * Constructs a range of versions as specified by the given requirements.
     *
     * If you wish to construct this object from a string representation,
     * then use [[fromRequirementString]].
     *
     * @param requirements Requirements to set this range by
     */
    constructor(requirements) {
        this.requirements = requirements;
    }
    /**
     * Determine if a given version satisfies this range.
     *
     * @param fver A version object to test against.
     * @returns Whether or not the given version matches this range
     */
    satisfiedBy(fver) {
        for (const requirement of this.requirements) {
            let matches = true;
            for (const { comparator, version } of requirement) {
                matches =
                    matches && version.isStableOrCompatiblePrerelease(fver);
                if (comparator === "" || comparator === "=") {
                    matches = matches && version.isEqual(fver);
                }
                else if (comparator === ">") {
                    matches = matches && fver.hasPrecedenceOver(version);
                }
                else if (comparator === ">=") {
                    matches =
                        matches &&
                            (fver.hasPrecedenceOver(version) ||
                                version.isEqual(fver));
                }
                else if (comparator === "<") {
                    matches = matches && version.hasPrecedenceOver(fver);
                }
                else if (comparator === "<=") {
                    matches =
                        matches &&
                            (version.hasPrecedenceOver(fver) ||
                                version.isEqual(fver));
                }
                else if (comparator === "^") {
                    matches = matches && version.isCompatibleWith(fver);
                }
            }
            if (matches) {
                return true;
            }
        }
        return false;
    }
    /**
     * Parse a requirement string into a version range.
     *
     * @param requirement The version requirements, consisting of a
     * series of space-separated strings, each one being a semver version
     * optionally prefixed by a comparator or a separator.
     *
     * Valid comparators are:
     * - `""` or `"="`: Precisely this version
     * - `">`": A version newer than this one
     * - `">`=": A version newer or equal to this one
     * - `"<"`: A version older than this one
     * - `"<="`: A version older or equal to this one
     * - `"^"`: A version that is compatible with this one
     *
     * A separator is `"||`" which splits the requirement string into
     * left OR right.
     * @returns A version range object.
     */
    static fromRequirementString(requirement) {
        const components = requirement.split(" ");
        let set = [];
        const requirements = [];
        for (const component of components) {
            if (component === "||") {
                if (set.length > 0) {
                    requirements.push(set);
                    set = [];
                }
            }
            else if (component.length > 0) {
                const match = /[0-9]/.exec(component);
                if (match) {
                    const comparator = component.slice(0, match.index).trim();
                    const version = Version.fromSemver(component.slice(match.index).trim());
                    set.push({ comparator, version });
                }
            }
        }
        if (set.length > 0) {
            requirements.push(set);
        }
        return new VersionRange(requirements);
    }
}

;// CONCATENATED MODULE: ../../node_modules/wasm-feature-detect/dist/esm/index.js
const bigInt=()=>(async e=>{try{return(await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0))===BigInt(0)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,98,0,0,10,6,1,4,0,32,0,11])),bulkMemory=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),exceptions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),extendedConst=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,0,1,11,9,1,0,65,1,65,2,106,11,0])),gc=()=>(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))(),jspi=()=>(async()=>"Suspender"in WebAssembly)(),memory64=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1])),multiMemory=()=>(async()=>{try{return new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,5,5,2,0,0,0,0])),!0}catch(e){return!1}})(),multiValue=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,0,2,127,127,3,2,1,0,10,8,1,6,0,65,0,65,0,11])),mutableGlobals=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,2,8,1,1,97,1,98,3,127,1,6,6,1,127,1,65,0,11,7,5,1,1,97,3,1])),referenceTypes=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),relaxedSimd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),saturatedFloatToInt=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),signExtensions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),streamingCompilation=()=>(async()=>"compileStreaming"in WebAssembly)(),tailCall=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,6,1,4,0,18,0,11])),threads=()=>(async e=>{try{return"undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),typeReflection=()=>(async()=>"Function"in WebAssembly)();

;// CONCATENATED MODULE: ../core/dist/js-polyfills.js
/**
 * Polyfills the `Array.prototype.reduce` method.
 *
 * Production steps of ECMA-262, Edition 5, 15.4.4.21
 * Reference: https://es5.github.io/#x15.4.4.21
 * https://tc39.github.io/ecma262/#sec-array.prototype.reduce
 */
function polyfillArrayPrototypeReduce() {
    Object.defineProperty(Array.prototype, "reduce", {
        value(...args) {
            if (args.length === 0 &&
                window.Prototype &&
                window.Prototype.Version &&
                window.Prototype.Version < "1.6.1") {
                // Off-spec: compatibility with prototype.js
                return this.length > 1 ? this : this[0];
            }
            const callback = args[0];
            if (this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (typeof callback !== "function") {
                throw new TypeError(`${callback} is not a function`);
            }
            const o = Object(this);
            const len = o.length >>> 0;
            let k = 0;
            let value;
            if (args.length >= 2) {
                value = args[1];
            }
            else {
                while (k < len && !(k in o)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                value = o[k++];
            }
            while (k < len) {
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }
                k++;
            }
            return value;
        },
    });
}
/**
 * Polyfills the `Window` function.
 */
function polyfillWindow() {
    if (typeof window.constructor !== "function" ||
        !isNativeFunction(window.constructor)) {
        // Don't polyfill `Window` if `window.constructor` has been overridden.
        return;
    }
    // @ts-expect-error: `Function not assignable to { new (): Window; prototype: Window; }`
    window.Window = window.constructor;
}
/**
 * Polyfills the `Reflect` object and members.
 *
 * This is a partial implementation, just enough to match our needs.
 */
function tryPolyfillReflect() {
    if (window.Reflect === undefined || window.Reflect === null) {
        // @ts-expect-error: {} indeed doesn't implement Reflect's interface.
        window.Reflect = {};
    }
    if (typeof Reflect.get !== "function") {
        Object.defineProperty(Reflect, "get", {
            value(target, key) {
                return target[key];
            },
        });
    }
    if (typeof Reflect.set !== "function") {
        Object.defineProperty(Reflect, "set", {
            value(target, key, value) {
                target[key] = value;
            },
        });
    }
    if (typeof Reflect.has !== "function") {
        Object.defineProperty(Reflect, "has", {
            value(target, key) {
                // @ts-expect-error: Type 'T' is not assignable to type 'object'.
                return key in target;
            },
        });
    }
    if (typeof Reflect.ownKeys !== "function") {
        Object.defineProperty(Reflect, "ownKeys", {
            value(target) {
                return [
                    ...Object.getOwnPropertyNames(target),
                    ...Object.getOwnPropertySymbols(target),
                ];
            },
        });
    }
}
/**
 * Determines whether a function is native or not.
 *
 * @param func The function to test.
 * @returns True if the function hasn't been overridden.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFunction(func) {
    const val = typeof Function.prototype.toString === "function"
        ? Function.prototype.toString()
        : null;
    if (typeof val === "string" && val.indexOf("[native code]") >= 0) {
        return (Function.prototype.toString.call(func).indexOf("[native code]") >= 0);
    }
    return false;
}
/**
 * Checks and applies the polyfills to the current window, if needed.
 */
function setPolyfillsOnLoad() {
    if (typeof Array.prototype.reduce !== "function" ||
        !isNativeFunction(Array.prototype.reduce)) {
        // Some external libraries override the `Array.prototype.reduce` method in a way
        // that causes Webpack to crash (#1507, #1865), so we need to override it again.
        polyfillArrayPrototypeReduce();
    }
    if (typeof Window !== "function" || !isNativeFunction(Window)) {
        // Overriding the native `Window` function causes issues in wasm-bindgen, as a
        // code like `window instanceof Window` will no longer work.
        polyfillWindow();
    }
    // Some pages override the native `Reflect` object, which causes various issues:
    // 1- wasm-bindgen's stdlib may crash (#3173).
    // 2- FlashVars may be ignored (#8537).
    tryPolyfillReflect();
}

;// CONCATENATED MODULE: ../core/dist/current-script.js
// This must be in global scope because `document.currentScript`
// works only while the script is initially being processed.
let currentScriptURL = null;
let isExtension = false;
try {
    if (document.currentScript !== undefined &&
        document.currentScript !== null &&
        "src" in document.currentScript &&
        document.currentScript.src !== "") {
        let src = document.currentScript.src;
        // CDNs allow omitting the filename. If it's omitted, append a slash to
        // prevent the last component from being dropped.
        if (!src.endsWith(".js") && !src.endsWith("/")) {
            src += "/";
        }
        currentScriptURL = new URL(".", src);
        isExtension = currentScriptURL.protocol.includes("extension");
    }
}
catch (e) {
    console.warn("Unable to get currentScript URL");
}

;// CONCATENATED MODULE: ../core/dist/public-path.js

/**
 * Attempt to discover the public path of the current Ruffle source. This can
 * be used to configure Webpack.
 *
 * A global public path can be specified for all sources using the RufflePlayer
 * config:
 *
 * ```js
 * window.RufflePlayer.config.publicPath = "/dist/";
 * ```
 *
 * If no such config is specified, then the parent path of where this script is
 * hosted is assumed, which should be the correct default in most cases.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @returns The public path for the given source.
 */
function publicPath(config) {
    var _a;
    // Default to the directory where this script resides.
    let path = (_a = currentScriptURL === null || currentScriptURL === void 0 ? void 0 : currentScriptURL.href) !== null && _a !== void 0 ? _a : "";
    if (!isExtension &&
        "publicPath" in config &&
        config.publicPath !== null &&
        config.publicPath !== undefined) {
        path = config.publicPath;
    }
    // Webpack expects the paths to end with a slash.
    if (path !== "" && !path.endsWith("/")) {
        path += "/";
    }
    return path;
}

;// CONCATENATED MODULE: ../core/dist/load-ruffle.js
/**
 * Conditional ruffle loader
 */



/**
 * Load ruffle from an automatically-detected location.
 *
 * This function returns a new instance of Ruffle and downloads it every time.
 * You should not use it directly; this module will memoize the resource
 * download.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @param progressCallback The callback that will be run with Ruffle's download progress.
 * @returns A ruffle-builder constructor that may be used to create new RuffleInstanceBuilder
 * instances.
 */
async function fetchRuffle(config, progressCallback) {
    var _a;
    // Apply some pure JavaScript polyfills to prevent conflicts with external
    // libraries, if needed.
    setPolyfillsOnLoad();
    // NOTE: Keep this list in sync with $RUSTFLAGS in the CI build config!
    const extensionsSupported = (await Promise.all([
        bulkMemory(),
        simd(),
        saturatedFloatToInt(),
        signExtensions(),
        referenceTypes(),
    ])).every(Boolean);
    if (!extensionsSupported) {
        console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module");
    }
    try {
        __webpack_require__.p = publicPath(config);
    }
    catch (_) {
        // Must not be using webpack... ignore this option, it's not applicable
    }
    // Note: The argument passed to import() has to be a simple string literal,
    // otherwise some bundler will get confused and won't include the module?
    const { default: init, RuffleInstanceBuilder, ZipWriter, } = await (extensionsSupported
        ? __webpack_require__.e(/* import() */ 69).then(__webpack_require__.bind(__webpack_require__, 69))
        : __webpack_require__.e(/* import() */ 655).then(__webpack_require__.bind(__webpack_require__, 655)));
    let response;
    const wasmUrl = extensionsSupported
        ? new URL(/* asset import */ __webpack_require__(791), __webpack_require__.b)
        : new URL(/* asset import */ __webpack_require__(797), __webpack_require__.b);
    const wasmResponse = await fetch(wasmUrl);
    // The Pale Moon browser lacks full support for ReadableStream.
    // However, ReadableStream itself is defined.
    const readableStreamProperlyDefined = typeof ReadableStreamDefaultController === "function";
    if (progressCallback && readableStreamProperlyDefined) {
        const contentLength = ((_a = wasmResponse === null || wasmResponse === void 0 ? void 0 : wasmResponse.headers) === null || _a === void 0 ? void 0 : _a.get("content-length")) || "";
        let bytesLoaded = 0;
        // Use parseInt rather than Number so the empty string is coerced to NaN instead of 0
        const bytesTotal = parseInt(contentLength);
        response = new Response(new ReadableStream({
            async start(controller) {
                var _a;
                const reader = (_a = wasmResponse.body) === null || _a === void 0 ? void 0 : _a.getReader();
                if (!reader) {
                    throw "Response had no body";
                }
                progressCallback(bytesLoaded, bytesTotal);
                for (;;) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }
                    if (value === null || value === void 0 ? void 0 : value.byteLength) {
                        bytesLoaded += value === null || value === void 0 ? void 0 : value.byteLength;
                    }
                    controller.enqueue(value);
                    progressCallback(bytesLoaded, bytesTotal);
                }
                controller.close();
            },
        }), wasmResponse);
    }
    else {
        response = wasmResponse;
    }
    await init(response);
    return [RuffleInstanceBuilder, ZipWriter];
}
let nativeConstructors = null;
/**
 * Obtain an instance of `Ruffle`.
 *
 * This function returns a promise which yields a new `RuffleInstanceBuilder` asynchronously.
 *
 * @param config The `window.RufflePlayer.config` object.
 * @param progressCallback The callback that will be run with Ruffle's download progress.
 * @returns A ruffle instance builder.
 */
async function createRuffleBuilder(config, progressCallback) {
    if (nativeConstructors === null) {
        nativeConstructors = fetchRuffle(config, progressCallback);
    }
    const constructors = await nativeConstructors;
    return [new constructors[0](), () => new constructors[1]()];
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/types.js
/**
 * The `FluentType` class is the base of Fluent's type system.
 *
 * Fluent types wrap JavaScript values and store additional configuration for
 * them, which can then be used in the `toString` method together with a proper
 * `Intl` formatter.
 */
class FluentType {
    /**
     * Create a `FluentType` instance.
     *
     * @param value The JavaScript value to wrap.
     */
    constructor(value) {
        this.value = value;
    }
    /**
     * Unwrap the raw value stored by this `FluentType`.
     */
    valueOf() {
        return this.value;
    }
}
/**
 * A `FluentType` representing no correct value.
 */
class FluentNone extends FluentType {
    /**
     * Create an instance of `FluentNone` with an optional fallback value.
     * @param value The fallback value of this `FluentNone`.
     */
    constructor(value = "???") {
        super(value);
    }
    /**
     * Format this `FluentNone` to the fallback string.
     */
    toString(scope) {
        return `{${this.value}}`;
    }
}
/**
 * A `FluentType` representing a number.
 *
 * A `FluentNumber` instance stores the number value of the number it
 * represents. It may also store an option bag of options which will be passed
 * to `Intl.NumerFormat` when the `FluentNumber` is formatted to a string.
 */
class FluentNumber extends FluentType {
    /**
     * Create an instance of `FluentNumber` with options to the
     * `Intl.NumberFormat` constructor.
     *
     * @param value The number value of this `FluentNumber`.
     * @param opts Options which will be passed to `Intl.NumberFormat`.
     */
    constructor(value, opts = {}) {
        super(value);
        this.opts = opts;
    }
    /**
     * Format this `FluentNumber` to a string.
     */
    toString(scope) {
        try {
            const nf = scope.memoizeIntlObject(Intl.NumberFormat, this.opts);
            return nf.format(this.value);
        }
        catch (err) {
            scope.reportError(err);
            return this.value.toString(10);
        }
    }
}
/**
 * A `FluentType` representing a date and time.
 *
 * A `FluentDateTime` instance stores the number value of the date it
 * represents, as a numerical timestamp in milliseconds. It may also store an
 * option bag of options which will be passed to `Intl.DateTimeFormat` when the
 * `FluentDateTime` is formatted to a string.
 */
class FluentDateTime extends FluentType {
    /**
     * Create an instance of `FluentDateTime` with options to the
     * `Intl.DateTimeFormat` constructor.
     *
     * @param value The number value of this `FluentDateTime`, in milliseconds.
     * @param opts Options which will be passed to `Intl.DateTimeFormat`.
     */
    constructor(value, opts = {}) {
        super(value);
        this.opts = opts;
    }
    /**
     * Format this `FluentDateTime` to a string.
     */
    toString(scope) {
        try {
            const dtf = scope.memoizeIntlObject(Intl.DateTimeFormat, this.opts);
            return dtf.format(this.value);
        }
        catch (err) {
            scope.reportError(err);
            return new Date(this.value).toISOString();
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/resolver.js
/* global Intl */
/**
 * @overview
 *
 * The role of the Fluent resolver is to format a `Pattern` to an instance of
 * `FluentValue`. For performance reasons, primitive strings are considered
 * such instances, too.
 *
 * Translations can contain references to other messages or variables,
 * conditional logic in form of select expressions, traits which describe their
 * grammatical features, and can use Fluent builtins which make use of the
 * `Intl` formatters to format numbers and dates into the bundle's languages.
 * See the documentation of the Fluent syntax for more information.
 *
 * In case of errors the resolver will try to salvage as much of the
 * translation as possible. In rare situations where the resolver didn't know
 * how to recover from an error it will return an instance of `FluentNone`.
 *
 * All expressions resolve to an instance of `FluentValue`. The caller should
 * use the `toString` method to convert the instance to a native value.
 *
 * Functions in this file pass around an instance of the `Scope` class, which
 * stores the data required for successful resolution and error recovery.
 */

/**
 * The maximum number of placeables which can be expanded in a single call to
 * `formatPattern`. The limit protects against the Billion Laughs and Quadratic
 * Blowup attacks. See https://msdn.microsoft.com/en-us/magazine/ee335713.aspx.
 */
const MAX_PLACEABLES = 100;
/** Unicode bidi isolation characters. */
const FSI = "\u2068";
const PDI = "\u2069";
/** Helper: match a variant key to the given selector. */
function match(scope, selector, key) {
    if (key === selector) {
        // Both are strings.
        return true;
    }
    // XXX Consider comparing options too, e.g. minimumFractionDigits.
    if (key instanceof FluentNumber &&
        selector instanceof FluentNumber &&
        key.value === selector.value) {
        return true;
    }
    if (selector instanceof FluentNumber && typeof key === "string") {
        let category = scope
            .memoizeIntlObject(Intl.PluralRules, selector.opts)
            .select(selector.value);
        if (key === category) {
            return true;
        }
    }
    return false;
}
/** Helper: resolve the default variant from a list of variants. */
function getDefault(scope, variants, star) {
    if (variants[star]) {
        return resolvePattern(scope, variants[star].value);
    }
    scope.reportError(new RangeError("No default"));
    return new FluentNone();
}
/** Helper: resolve arguments to a call expression. */
function getArguments(scope, args) {
    const positional = [];
    const named = Object.create(null);
    for (const arg of args) {
        if (arg.type === "narg") {
            named[arg.name] = resolveExpression(scope, arg.value);
        }
        else {
            positional.push(resolveExpression(scope, arg));
        }
    }
    return { positional, named };
}
/** Resolve an expression to a Fluent type. */
function resolveExpression(scope, expr) {
    switch (expr.type) {
        case "str":
            return expr.value;
        case "num":
            return new FluentNumber(expr.value, {
                minimumFractionDigits: expr.precision,
            });
        case "var":
            return resolveVariableReference(scope, expr);
        case "mesg":
            return resolveMessageReference(scope, expr);
        case "term":
            return resolveTermReference(scope, expr);
        case "func":
            return resolveFunctionReference(scope, expr);
        case "select":
            return resolveSelectExpression(scope, expr);
        default:
            return new FluentNone();
    }
}
/** Resolve a reference to a variable. */
function resolveVariableReference(scope, { name }) {
    let arg;
    if (scope.params) {
        // We're inside a TermReference. It's OK to reference undefined parameters.
        if (Object.prototype.hasOwnProperty.call(scope.params, name)) {
            arg = scope.params[name];
        }
        else {
            return new FluentNone(`$${name}`);
        }
    }
    else if (scope.args &&
        Object.prototype.hasOwnProperty.call(scope.args, name)) {
        // We're in the top-level Pattern or inside a MessageReference. Missing
        // variables references produce ReferenceErrors.
        arg = scope.args[name];
    }
    else {
        scope.reportError(new ReferenceError(`Unknown variable: $${name}`));
        return new FluentNone(`$${name}`);
    }
    // Return early if the argument already is an instance of FluentType.
    if (arg instanceof FluentType) {
        return arg;
    }
    // Convert the argument to a Fluent type.
    switch (typeof arg) {
        case "string":
            return arg;
        case "number":
            return new FluentNumber(arg);
        case "object":
            if (arg instanceof Date) {
                return new FluentDateTime(arg.getTime());
            }
        // eslint-disable-next-line no-fallthrough
        default:
            scope.reportError(new TypeError(`Variable type not supported: $${name}, ${typeof arg}`));
            return new FluentNone(`$${name}`);
    }
}
/** Resolve a reference to another message. */
function resolveMessageReference(scope, { name, attr }) {
    const message = scope.bundle._messages.get(name);
    if (!message) {
        scope.reportError(new ReferenceError(`Unknown message: ${name}`));
        return new FluentNone(name);
    }
    if (attr) {
        const attribute = message.attributes[attr];
        if (attribute) {
            return resolvePattern(scope, attribute);
        }
        scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
        return new FluentNone(`${name}.${attr}`);
    }
    if (message.value) {
        return resolvePattern(scope, message.value);
    }
    scope.reportError(new ReferenceError(`No value: ${name}`));
    return new FluentNone(name);
}
/** Resolve a call to a Term with key-value arguments. */
function resolveTermReference(scope, { name, attr, args }) {
    const id = `-${name}`;
    const term = scope.bundle._terms.get(id);
    if (!term) {
        scope.reportError(new ReferenceError(`Unknown term: ${id}`));
        return new FluentNone(id);
    }
    if (attr) {
        const attribute = term.attributes[attr];
        if (attribute) {
            // Every TermReference has its own variables.
            scope.params = getArguments(scope, args).named;
            const resolved = resolvePattern(scope, attribute);
            scope.params = null;
            return resolved;
        }
        scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
        return new FluentNone(`${id}.${attr}`);
    }
    scope.params = getArguments(scope, args).named;
    const resolved = resolvePattern(scope, term.value);
    scope.params = null;
    return resolved;
}
/** Resolve a call to a Function with positional and key-value arguments. */
function resolveFunctionReference(scope, { name, args }) {
    // Some functions are built-in. Others may be provided by the runtime via
    // the `FluentBundle` constructor.
    let func = scope.bundle._functions[name];
    if (!func) {
        scope.reportError(new ReferenceError(`Unknown function: ${name}()`));
        return new FluentNone(`${name}()`);
    }
    if (typeof func !== "function") {
        scope.reportError(new TypeError(`Function ${name}() is not callable`));
        return new FluentNone(`${name}()`);
    }
    try {
        let resolved = getArguments(scope, args);
        return func(resolved.positional, resolved.named);
    }
    catch (err) {
        scope.reportError(err);
        return new FluentNone(`${name}()`);
    }
}
/** Resolve a select expression to the member object. */
function resolveSelectExpression(scope, { selector, variants, star }) {
    let sel = resolveExpression(scope, selector);
    if (sel instanceof FluentNone) {
        return getDefault(scope, variants, star);
    }
    // Match the selector against keys of each variant, in order.
    for (const variant of variants) {
        const key = resolveExpression(scope, variant.key);
        if (match(scope, sel, key)) {
            return resolvePattern(scope, variant.value);
        }
    }
    return getDefault(scope, variants, star);
}
/** Resolve a pattern (a complex string with placeables). */
function resolveComplexPattern(scope, ptn) {
    if (scope.dirty.has(ptn)) {
        scope.reportError(new RangeError("Cyclic reference"));
        return new FluentNone();
    }
    // Tag the pattern as dirty for the purpose of the current resolution.
    scope.dirty.add(ptn);
    const result = [];
    // Wrap interpolations with Directional Isolate Formatting characters
    // only when the pattern has more than one element.
    const useIsolating = scope.bundle._useIsolating && ptn.length > 1;
    for (const elem of ptn) {
        if (typeof elem === "string") {
            result.push(scope.bundle._transform(elem));
            continue;
        }
        scope.placeables++;
        if (scope.placeables > MAX_PLACEABLES) {
            scope.dirty.delete(ptn);
            // This is a fatal error which causes the resolver to instantly bail out
            // on this pattern. The length check protects against excessive memory
            // usage, and throwing protects against eating up the CPU when long
            // placeables are deeply nested.
            throw new RangeError(`Too many placeables expanded: ${scope.placeables}, ` +
                `max allowed is ${MAX_PLACEABLES}`);
        }
        if (useIsolating) {
            result.push(FSI);
        }
        result.push(resolveExpression(scope, elem).toString(scope));
        if (useIsolating) {
            result.push(PDI);
        }
    }
    scope.dirty.delete(ptn);
    return result.join("");
}
/**
 * Resolve a simple or a complex Pattern to a FluentString
 * (which is really the string primitive).
 */
function resolvePattern(scope, value) {
    // Resolve a simple pattern.
    if (typeof value === "string") {
        return scope.bundle._transform(value);
    }
    return resolveComplexPattern(scope, value);
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/scope.js
class Scope {
    constructor(bundle, errors, args) {
        /**
         * The Set of patterns already encountered during this resolution.
         * Used to detect and prevent cyclic resolutions.
         * @ignore
         */
        this.dirty = new WeakSet();
        /** A dict of parameters passed to a TermReference. */
        this.params = null;
        /**
         * The running count of placeables resolved so far.
         * Used to detect the Billion Laughs and Quadratic Blowup attacks.
         * @ignore
         */
        this.placeables = 0;
        this.bundle = bundle;
        this.errors = errors;
        this.args = args;
    }
    reportError(error) {
        if (!this.errors || !(error instanceof Error)) {
            throw error;
        }
        this.errors.push(error);
    }
    memoizeIntlObject(ctor, opts) {
        let cache = this.bundle._intls.get(ctor);
        if (!cache) {
            cache = {};
            this.bundle._intls.set(ctor, cache);
        }
        let id = JSON.stringify(opts);
        if (!cache[id]) {
            cache[id] = new ctor(this.bundle.locales, opts);
        }
        return cache[id];
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/builtins.js
/**
 * @overview
 *
 * The FTL resolver ships with a number of functions built-in.
 *
 * Each function take two arguments:
 *   - args - an array of positional args
 *   - opts - an object of key-value args
 *
 * Arguments to functions are guaranteed to already be instances of
 * `FluentValue`.  Functions must return `FluentValues` as well.
 */

function values(opts, allowed) {
    const unwrapped = Object.create(null);
    for (const [name, opt] of Object.entries(opts)) {
        if (allowed.includes(name)) {
            unwrapped[name] = opt.valueOf();
        }
    }
    return unwrapped;
}
const NUMBER_ALLOWED = [
    "unitDisplay",
    "currencyDisplay",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
];
/**
 * The implementation of the `NUMBER()` builtin available to translations.
 *
 * Translations may call the `NUMBER()` builtin in order to specify formatting
 * options of a number. For example:
 *
 *     pi = The value of π is {NUMBER($pi, maximumFractionDigits: 2)}.
 *
 * The implementation expects an array of `FluentValues` representing the
 * positional arguments, and an object of named `FluentValues` representing the
 * named parameters.
 *
 * The following options are recognized:
 *
 *     unitDisplay
 *     currencyDisplay
 *     useGrouping
 *     minimumIntegerDigits
 *     minimumFractionDigits
 *     maximumFractionDigits
 *     minimumSignificantDigits
 *     maximumSignificantDigits
 *
 * Other options are ignored.
 *
 * @param args The positional arguments passed to this `NUMBER()`.
 * @param opts The named argments passed to this `NUMBER()`.
 */
function NUMBER(args, opts) {
    let arg = args[0];
    if (arg instanceof FluentNone) {
        return new FluentNone(`NUMBER(${arg.valueOf()})`);
    }
    if (arg instanceof FluentNumber) {
        return new FluentNumber(arg.valueOf(), {
            ...arg.opts,
            ...values(opts, NUMBER_ALLOWED),
        });
    }
    if (arg instanceof FluentDateTime) {
        return new FluentNumber(arg.valueOf(), {
            ...values(opts, NUMBER_ALLOWED),
        });
    }
    throw new TypeError("Invalid argument to NUMBER");
}
const DATETIME_ALLOWED = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "dayPeriod",
    "hour12",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
];
/**
 * The implementation of the `DATETIME()` builtin available to translations.
 *
 * Translations may call the `DATETIME()` builtin in order to specify
 * formatting options of a number. For example:
 *
 *     now = It's {DATETIME($today, month: "long")}.
 *
 * The implementation expects an array of `FluentValues` representing the
 * positional arguments, and an object of named `FluentValues` representing the
 * named parameters.
 *
 * The following options are recognized:
 *
 *     dateStyle
 *     timeStyle
 *     fractionalSecondDigits
 *     dayPeriod
 *     hour12
 *     weekday
 *     era
 *     year
 *     month
 *     day
 *     hour
 *     minute
 *     second
 *     timeZoneName
 *
 * Other options are ignored.
 *
 * @param args The positional arguments passed to this `DATETIME()`.
 * @param opts The named argments passed to this `DATETIME()`.
 */
function DATETIME(args, opts) {
    let arg = args[0];
    if (arg instanceof FluentNone) {
        return new FluentNone(`DATETIME(${arg.valueOf()})`);
    }
    if (arg instanceof FluentDateTime) {
        return new FluentDateTime(arg.valueOf(), {
            ...arg.opts,
            ...values(opts, DATETIME_ALLOWED),
        });
    }
    if (arg instanceof FluentNumber) {
        return new FluentDateTime(arg.valueOf(), {
            ...values(opts, DATETIME_ALLOWED),
        });
    }
    throw new TypeError("Invalid argument to DATETIME");
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/memoizer.js
const cache = new Map();
function getMemoizerForLocale(locales) {
    const stringLocale = Array.isArray(locales) ? locales.join(" ") : locales;
    let memoizer = cache.get(stringLocale);
    if (memoizer === undefined) {
        memoizer = new Map();
        cache.set(stringLocale, memoizer);
    }
    return memoizer;
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/bundle.js





/**
 * Message bundles are single-language stores of translation resources. They are
 * responsible for formatting message values and attributes to strings.
 */
class FluentBundle {
    /**
     * Create an instance of `FluentBundle`.
     *
     * @example
     * ```js
     * let bundle = new FluentBundle(["en-US", "en"]);
     *
     * let bundle = new FluentBundle(locales, {useIsolating: false});
     *
     * let bundle = new FluentBundle(locales, {
     *   useIsolating: true,
     *   functions: {
     *     NODE_ENV: () => process.env.NODE_ENV
     *   }
     * });
     * ```
     *
     * @param locales - Used to instantiate `Intl` formatters used by translations.
     * @param options - Optional configuration for the bundle.
     */
    constructor(locales, { functions, useIsolating = true, transform = (v) => v, } = {}) {
        /** @ignore */
        this._terms = new Map();
        /** @ignore */
        this._messages = new Map();
        this.locales = Array.isArray(locales) ? locales : [locales];
        this._functions = {
            NUMBER: NUMBER,
            DATETIME: DATETIME,
            ...functions,
        };
        this._useIsolating = useIsolating;
        this._transform = transform;
        this._intls = getMemoizerForLocale(locales);
    }
    /**
     * Check if a message is present in the bundle.
     *
     * @param id - The identifier of the message to check.
     */
    hasMessage(id) {
        return this._messages.has(id);
    }
    /**
     * Return a raw unformatted message object from the bundle.
     *
     * Raw messages are `{value, attributes}` shapes containing translation units
     * called `Patterns`. `Patterns` are implementation-specific; they should be
     * treated as black boxes and formatted with `FluentBundle.formatPattern`.
     *
     * @param id - The identifier of the message to check.
     */
    getMessage(id) {
        return this._messages.get(id);
    }
    /**
     * Add a translation resource to the bundle.
     *
     * @example
     * ```js
     * let res = new FluentResource("foo = Foo");
     * bundle.addResource(res);
     * bundle.getMessage("foo");
     * // → {value: .., attributes: {..}}
     * ```
     *
     * @param res
     * @param options
     */
    addResource(res, { allowOverrides = false, } = {}) {
        const errors = [];
        for (let i = 0; i < res.body.length; i++) {
            let entry = res.body[i];
            if (entry.id.startsWith("-")) {
                // Identifiers starting with a dash (-) define terms. Terms are private
                // and cannot be retrieved from FluentBundle.
                if (allowOverrides === false && this._terms.has(entry.id)) {
                    errors.push(new Error(`Attempt to override an existing term: "${entry.id}"`));
                    continue;
                }
                this._terms.set(entry.id, entry);
            }
            else {
                if (allowOverrides === false && this._messages.has(entry.id)) {
                    errors.push(new Error(`Attempt to override an existing message: "${entry.id}"`));
                    continue;
                }
                this._messages.set(entry.id, entry);
            }
        }
        return errors;
    }
    /**
     * Format a `Pattern` to a string.
     *
     * Format a raw `Pattern` into a string. `args` will be used to resolve
     * references to variables passed as arguments to the translation.
     *
     * In case of errors `formatPattern` will try to salvage as much of the
     * translation as possible and will still return a string. For performance
     * reasons, the encountered errors are not returned but instead are appended
     * to the `errors` array passed as the third argument.
     *
     * If `errors` is omitted, the first encountered error will be thrown.
     *
     * @example
     * ```js
     * let errors = [];
     * bundle.addResource(
     *     new FluentResource("hello = Hello, {$name}!"));
     *
     * let hello = bundle.getMessage("hello");
     * if (hello.value) {
     *     bundle.formatPattern(hello.value, {name: "Jane"}, errors);
     *     // Returns "Hello, Jane!" and `errors` is empty.
     *
     *     bundle.formatPattern(hello.value, undefined, errors);
     *     // Returns "Hello, {$name}!" and `errors` is now:
     *     // [<ReferenceError: Unknown variable: name>]
     * }
     * ```
     */
    formatPattern(pattern, args = null, errors = null) {
        // Resolve a simple pattern without creating a scope. No error handling is
        // required; by definition simple patterns don't have placeables.
        if (typeof pattern === "string") {
            return this._transform(pattern);
        }
        // Resolve a complex pattern.
        let scope = new Scope(this, errors, args);
        try {
            let value = resolveComplexPattern(scope, pattern);
            return value.toString(scope);
        }
        catch (err) {
            if (scope.errors && err instanceof Error) {
                scope.errors.push(err);
                return new FluentNone().toString(scope);
            }
            throw err;
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/resource.js
// This regex is used to iterate through the beginnings of messages and terms.
// With the /m flag, the ^ matches at the beginning of every line.
const RE_MESSAGE_START = /^(-?[a-zA-Z][\w-]*) *= */gm;
// Both Attributes and Variants are parsed in while loops. These regexes are
// used to break out of them.
const RE_ATTRIBUTE_START = /\.([a-zA-Z][\w-]*) *= */y;
const RE_VARIANT_START = /\*?\[/y;
const RE_NUMBER_LITERAL = /(-?[0-9]+(?:\.([0-9]+))?)/y;
const RE_IDENTIFIER = /([a-zA-Z][\w-]*)/y;
const RE_REFERENCE = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y;
const RE_FUNCTION_NAME = /^[A-Z][A-Z0-9_-]*$/;
// A "run" is a sequence of text or string literal characters which don't
// require any special handling. For TextElements such special characters are: {
// (starts a placeable), and line breaks which require additional logic to check
// if the next line is indented. For StringLiterals they are: \ (starts an
// escape sequence), " (ends the literal), and line breaks which are not allowed
// in StringLiterals. Note that string runs may be empty; text runs may not.
const RE_TEXT_RUN = /([^{}\n\r]+)/y;
const RE_STRING_RUN = /([^\\"\n\r]*)/y;
// Escape sequences.
const RE_STRING_ESCAPE = /\\([\\"])/y;
const RE_UNICODE_ESCAPE = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y;
// Used for trimming TextElements and indents.
const RE_LEADING_NEWLINES = /^\n+/;
const RE_TRAILING_SPACES = / +$/;
// Used in makeIndent to strip spaces from blank lines and normalize CRLF to LF.
const RE_BLANK_LINES = / *\r?\n/g;
// Used in makeIndent to measure the indentation.
const RE_INDENT = /( *)$/;
// Common tokens.
const TOKEN_BRACE_OPEN = /{\s*/y;
const TOKEN_BRACE_CLOSE = /\s*}/y;
const TOKEN_BRACKET_OPEN = /\[\s*/y;
const TOKEN_BRACKET_CLOSE = /\s*] */y;
const TOKEN_PAREN_OPEN = /\s*\(\s*/y;
const TOKEN_ARROW = /\s*->\s*/y;
const TOKEN_COLON = /\s*:\s*/y;
// Note the optional comma. As a deviation from the Fluent EBNF, the parser
// doesn't enforce commas between call arguments.
const TOKEN_COMMA = /\s*,?\s*/y;
const TOKEN_BLANK = /\s+/y;
/**
 * Fluent Resource is a structure storing parsed localization entries.
 */
class FluentResource {
    constructor(source) {
        this.body = [];
        RE_MESSAGE_START.lastIndex = 0;
        let cursor = 0;
        // Iterate over the beginnings of messages and terms to efficiently skip
        // comments and recover from errors.
        while (true) {
            let next = RE_MESSAGE_START.exec(source);
            if (next === null) {
                break;
            }
            cursor = RE_MESSAGE_START.lastIndex;
            try {
                this.body.push(parseMessage(next[1]));
            }
            catch (err) {
                if (err instanceof SyntaxError) {
                    // Don't report any Fluent syntax errors. Skip directly to the
                    // beginning of the next message or term.
                    continue;
                }
                throw err;
            }
        }
        // The parser implementation is inlined below for performance reasons,
        // as well as for convenience of accessing `source` and `cursor`.
        // The parser focuses on minimizing the number of false negatives at the
        // expense of increasing the risk of false positives. In other words, it
        // aims at parsing valid Fluent messages with a success rate of 100%, but it
        // may also parse a few invalid messages which the reference parser would
        // reject. The parser doesn't perform any validation and may produce entries
        // which wouldn't make sense in the real world. For best results users are
        // advised to validate translations with the fluent-syntax parser
        // pre-runtime.
        // The parser makes an extensive use of sticky regexes which can be anchored
        // to any offset of the source string without slicing it. Errors are thrown
        // to bail out of parsing of ill-formed messages.
        function test(re) {
            re.lastIndex = cursor;
            return re.test(source);
        }
        // Advance the cursor by the char if it matches. May be used as a predicate
        // (was the match found?) or, if errorClass is passed, as an assertion.
        function consumeChar(char, errorClass) {
            if (source[cursor] === char) {
                cursor++;
                return true;
            }
            if (errorClass) {
                throw new errorClass(`Expected ${char}`);
            }
            return false;
        }
        // Advance the cursor by the token if it matches. May be used as a predicate
        // (was the match found?) or, if errorClass is passed, as an assertion.
        function consumeToken(re, errorClass) {
            if (test(re)) {
                cursor = re.lastIndex;
                return true;
            }
            if (errorClass) {
                throw new errorClass(`Expected ${re.toString()}`);
            }
            return false;
        }
        // Execute a regex, advance the cursor, and return all capture groups.
        function match(re) {
            re.lastIndex = cursor;
            let result = re.exec(source);
            if (result === null) {
                throw new SyntaxError(`Expected ${re.toString()}`);
            }
            cursor = re.lastIndex;
            return result;
        }
        // Execute a regex, advance the cursor, and return the capture group.
        function match1(re) {
            return match(re)[1];
        }
        function parseMessage(id) {
            let value = parsePattern();
            let attributes = parseAttributes();
            if (value === null && Object.keys(attributes).length === 0) {
                throw new SyntaxError("Expected message value or attributes");
            }
            return { id, value, attributes };
        }
        function parseAttributes() {
            let attrs = Object.create(null);
            while (test(RE_ATTRIBUTE_START)) {
                let name = match1(RE_ATTRIBUTE_START);
                let value = parsePattern();
                if (value === null) {
                    throw new SyntaxError("Expected attribute value");
                }
                attrs[name] = value;
            }
            return attrs;
        }
        function parsePattern() {
            let first;
            // First try to parse any simple text on the same line as the id.
            if (test(RE_TEXT_RUN)) {
                first = match1(RE_TEXT_RUN);
            }
            // If there's a placeable on the first line, parse a complex pattern.
            if (source[cursor] === "{" || source[cursor] === "}") {
                // Re-use the text parsed above, if possible.
                return parsePatternElements(first ? [first] : [], Infinity);
            }
            // RE_TEXT_VALUE stops at newlines. Only continue parsing the pattern if
            // what comes after the newline is indented.
            let indent = parseIndent();
            if (indent) {
                if (first) {
                    // If there's text on the first line, the blank block is part of the
                    // translation content in its entirety.
                    return parsePatternElements([first, indent], indent.length);
                }
                // Otherwise, we're dealing with a block pattern, i.e. a pattern which
                // starts on a new line. Discrad the leading newlines but keep the
                // inline indent; it will be used by the dedentation logic.
                indent.value = trim(indent.value, RE_LEADING_NEWLINES);
                return parsePatternElements([indent], indent.length);
            }
            if (first) {
                // It was just a simple inline text after all.
                return trim(first, RE_TRAILING_SPACES);
            }
            return null;
        }
        // Parse a complex pattern as an array of elements.
        function parsePatternElements(elements = [], commonIndent) {
            while (true) {
                if (test(RE_TEXT_RUN)) {
                    elements.push(match1(RE_TEXT_RUN));
                    continue;
                }
                if (source[cursor] === "{") {
                    elements.push(parsePlaceable());
                    continue;
                }
                if (source[cursor] === "}") {
                    throw new SyntaxError("Unbalanced closing brace");
                }
                let indent = parseIndent();
                if (indent) {
                    elements.push(indent);
                    commonIndent = Math.min(commonIndent, indent.length);
                    continue;
                }
                break;
            }
            let lastIndex = elements.length - 1;
            let lastElement = elements[lastIndex];
            // Trim the trailing spaces in the last element if it's a TextElement.
            if (typeof lastElement === "string") {
                elements[lastIndex] = trim(lastElement, RE_TRAILING_SPACES);
            }
            let baked = [];
            for (let element of elements) {
                if (element instanceof Indent) {
                    // Dedent indented lines by the maximum common indent.
                    element = element.value.slice(0, element.value.length - commonIndent);
                }
                if (element) {
                    baked.push(element);
                }
            }
            return baked;
        }
        function parsePlaceable() {
            consumeToken(TOKEN_BRACE_OPEN, SyntaxError);
            let selector = parseInlineExpression();
            if (consumeToken(TOKEN_BRACE_CLOSE)) {
                return selector;
            }
            if (consumeToken(TOKEN_ARROW)) {
                let variants = parseVariants();
                consumeToken(TOKEN_BRACE_CLOSE, SyntaxError);
                return {
                    type: "select",
                    selector,
                    ...variants,
                };
            }
            throw new SyntaxError("Unclosed placeable");
        }
        function parseInlineExpression() {
            if (source[cursor] === "{") {
                // It's a nested placeable.
                return parsePlaceable();
            }
            if (test(RE_REFERENCE)) {
                let [, sigil, name, attr = null] = match(RE_REFERENCE);
                if (sigil === "$") {
                    return { type: "var", name };
                }
                if (consumeToken(TOKEN_PAREN_OPEN)) {
                    let args = parseArguments();
                    if (sigil === "-") {
                        // A parameterized term: -term(...).
                        return { type: "term", name, attr, args };
                    }
                    if (RE_FUNCTION_NAME.test(name)) {
                        return { type: "func", name, args };
                    }
                    throw new SyntaxError("Function names must be all upper-case");
                }
                if (sigil === "-") {
                    // A non-parameterized term: -term.
                    return {
                        type: "term",
                        name,
                        attr,
                        args: [],
                    };
                }
                return { type: "mesg", name, attr };
            }
            return parseLiteral();
        }
        function parseArguments() {
            let args = [];
            while (true) {
                switch (source[cursor]) {
                    case ")": // End of the argument list.
                        cursor++;
                        return args;
                    case undefined: // EOF
                        throw new SyntaxError("Unclosed argument list");
                }
                args.push(parseArgument());
                // Commas between arguments are treated as whitespace.
                consumeToken(TOKEN_COMMA);
            }
        }
        function parseArgument() {
            let expr = parseInlineExpression();
            if (expr.type !== "mesg") {
                return expr;
            }
            if (consumeToken(TOKEN_COLON)) {
                // The reference is the beginning of a named argument.
                return {
                    type: "narg",
                    name: expr.name,
                    value: parseLiteral(),
                };
            }
            // It's a regular message reference.
            return expr;
        }
        function parseVariants() {
            let variants = [];
            let count = 0;
            let star;
            while (test(RE_VARIANT_START)) {
                if (consumeChar("*")) {
                    star = count;
                }
                let key = parseVariantKey();
                let value = parsePattern();
                if (value === null) {
                    throw new SyntaxError("Expected variant value");
                }
                variants[count++] = { key, value };
            }
            if (count === 0) {
                return null;
            }
            if (star === undefined) {
                throw new SyntaxError("Expected default variant");
            }
            return { variants, star };
        }
        function parseVariantKey() {
            consumeToken(TOKEN_BRACKET_OPEN, SyntaxError);
            let key;
            if (test(RE_NUMBER_LITERAL)) {
                key = parseNumberLiteral();
            }
            else {
                key = {
                    type: "str",
                    value: match1(RE_IDENTIFIER),
                };
            }
            consumeToken(TOKEN_BRACKET_CLOSE, SyntaxError);
            return key;
        }
        function parseLiteral() {
            if (test(RE_NUMBER_LITERAL)) {
                return parseNumberLiteral();
            }
            if (source[cursor] === '"') {
                return parseStringLiteral();
            }
            throw new SyntaxError("Invalid expression");
        }
        function parseNumberLiteral() {
            let [, value, fraction = ""] = match(RE_NUMBER_LITERAL);
            let precision = fraction.length;
            return {
                type: "num",
                value: parseFloat(value),
                precision,
            };
        }
        function parseStringLiteral() {
            consumeChar('"', SyntaxError);
            let value = "";
            while (true) {
                value += match1(RE_STRING_RUN);
                if (source[cursor] === "\\") {
                    value += parseEscapeSequence();
                    continue;
                }
                if (consumeChar('"')) {
                    return { type: "str", value };
                }
                // We've reached an EOL of EOF.
                throw new SyntaxError("Unclosed string literal");
            }
        }
        // Unescape known escape sequences.
        function parseEscapeSequence() {
            if (test(RE_STRING_ESCAPE)) {
                return match1(RE_STRING_ESCAPE);
            }
            if (test(RE_UNICODE_ESCAPE)) {
                let [, codepoint4, codepoint6] = match(RE_UNICODE_ESCAPE);
                let codepoint = parseInt(codepoint4 || codepoint6, 16);
                return codepoint <= 0xd7ff || 0xe000 <= codepoint
                    ? // It's a Unicode scalar value.
                        String.fromCodePoint(codepoint)
                    : // Lonely surrogates can cause trouble when the parsing result is
                        // saved using UTF-8. Use U+FFFD REPLACEMENT CHARACTER instead.
                        "�";
            }
            throw new SyntaxError("Unknown escape sequence");
        }
        // Parse blank space. Return it if it looks like indent before a pattern
        // line. Skip it othwerwise.
        function parseIndent() {
            let start = cursor;
            consumeToken(TOKEN_BLANK);
            // Check the first non-blank character after the indent.
            switch (source[cursor]) {
                case ".":
                case "[":
                case "*":
                case "}":
                case undefined: // EOF
                    // A special character. End the Pattern.
                    return false;
                case "{":
                    // Placeables don't require indentation (in EBNF: block-placeable).
                    // Continue the Pattern.
                    return makeIndent(source.slice(start, cursor));
            }
            // If the first character on the line is not one of the special characters
            // listed above, it's a regular text character. Check if there's at least
            // one space of indent before it.
            if (source[cursor - 1] === " ") {
                // It's an indented text character (in EBNF: indented-char). Continue
                // the Pattern.
                return makeIndent(source.slice(start, cursor));
            }
            // A not-indented text character is likely the identifier of the next
            // message. End the Pattern.
            return false;
        }
        // Trim blanks in text according to the given regex.
        function trim(text, re) {
            return text.replace(re, "");
        }
        // Normalize a blank block and extract the indent details.
        function makeIndent(blank) {
            let value = blank.replace(RE_BLANK_LINES, "\n");
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            let length = RE_INDENT.exec(blank)[1].length;
            return new Indent(value, length);
        }
    }
}
class Indent {
    constructor(value, length) {
        this.value = value;
        this.length = length;
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/bundle/esm/index.js
/**
 * @module fluent
 * @overview
 *
 * `fluent` is a JavaScript implementation of Project Fluent, a localization
 * framework designed to unleash the expressive power of the natural language.
 *
 */




;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/locale.js
/* eslint no-magic-numbers: 0 */
const languageCodeRe = "([a-z]{2,3}|\\*)";
const scriptCodeRe = "(?:-([a-z]{4}|\\*))";
const regionCodeRe = "(?:-([a-z]{2}|\\*))";
const variantCodeRe = "(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))";
/**
 * Regular expression splitting locale id into four pieces:
 *
 * Example: `en-Latn-US-macos`
 *
 * language: en
 * script:   Latn
 * region:   US
 * variant:  macos
 *
 * It can also accept a range `*` character on any position.
 */
const localeRe = new RegExp(`^${languageCodeRe}${scriptCodeRe}?${regionCodeRe}?${variantCodeRe}?$`, "i");
class Locale {
    /**
     * Parses a locale id using the localeRe into an array with four elements.
     *
     * If the second argument `range` is set to true, it places range `*` char
     * in place of any missing piece.
     *
     * It also allows skipping the script section of the id, so `en-US` is
     * properly parsed as `en-*-US-*`.
     */
    constructor(locale) {
        const result = localeRe.exec(locale.replace(/_/g, "-"));
        if (!result) {
            this.isWellFormed = false;
            return;
        }
        let [, language, script, region, variant] = result;
        if (language) {
            this.language = language.toLowerCase();
        }
        if (script) {
            this.script = script[0].toUpperCase() + script.slice(1);
        }
        if (region) {
            this.region = region.toUpperCase();
        }
        this.variant = variant;
        this.isWellFormed = true;
    }
    isEqual(other) {
        return (this.language === other.language &&
            this.script === other.script &&
            this.region === other.region &&
            this.variant === other.variant);
    }
    matches(other, thisRange = false, otherRange = false) {
        return ((this.language === other.language ||
            (thisRange && this.language === undefined) ||
            (otherRange && other.language === undefined)) &&
            (this.script === other.script ||
                (thisRange && this.script === undefined) ||
                (otherRange && other.script === undefined)) &&
            (this.region === other.region ||
                (thisRange && this.region === undefined) ||
                (otherRange && other.region === undefined)) &&
            (this.variant === other.variant ||
                (thisRange && this.variant === undefined) ||
                (otherRange && other.variant === undefined)));
    }
    toString() {
        return [this.language, this.script, this.region, this.variant]
            .filter(part => part !== undefined)
            .join("-");
    }
    clearVariants() {
        this.variant = undefined;
    }
    clearRegion() {
        this.region = undefined;
    }
    addLikelySubtags() {
        const newLocale = getLikelySubtagsMin(this.toString().toLowerCase());
        if (newLocale) {
            this.language = newLocale.language;
            this.script = newLocale.script;
            this.region = newLocale.region;
            this.variant = newLocale.variant;
            return true;
        }
        return false;
    }
}
/**
 * Below is a manually a list of likely subtags corresponding to Unicode
 * CLDR likelySubtags list.
 * This list is curated by the maintainers of Project Fluent and is
 * intended to be used in place of the full likelySubtags list in use cases
 * where full list cannot be (for example, due to the size).
 *
 * This version of the list is based on CLDR 30.0.3.
 */
const likelySubtagsMin = {
    ar: "ar-arab-eg",
    "az-arab": "az-arab-ir",
    "az-ir": "az-arab-ir",
    be: "be-cyrl-by",
    da: "da-latn-dk",
    el: "el-grek-gr",
    en: "en-latn-us",
    fa: "fa-arab-ir",
    ja: "ja-jpan-jp",
    ko: "ko-kore-kr",
    pt: "pt-latn-br",
    sr: "sr-cyrl-rs",
    "sr-ru": "sr-latn-ru",
    sv: "sv-latn-se",
    ta: "ta-taml-in",
    uk: "uk-cyrl-ua",
    zh: "zh-hans-cn",
    "zh-hant": "zh-hant-tw",
    "zh-hk": "zh-hant-hk",
    "zh-mo": "zh-hant-mo",
    "zh-tw": "zh-hant-tw",
    "zh-gb": "zh-hant-gb",
    "zh-us": "zh-hant-us",
};
const regionMatchingLangs = [
    "az",
    "bg",
    "cs",
    "de",
    "es",
    "fi",
    "fr",
    "hu",
    "it",
    "lt",
    "lv",
    "nl",
    "pl",
    "ro",
    "ru",
];
function getLikelySubtagsMin(loc) {
    if (Object.prototype.hasOwnProperty.call(likelySubtagsMin, loc)) {
        return new Locale(likelySubtagsMin[loc]);
    }
    const locale = new Locale(loc);
    if (locale.language && regionMatchingLangs.includes(locale.language)) {
        locale.region = locale.language.toUpperCase();
        return locale;
    }
    return null;
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/matches.js
/* eslint no-magic-numbers: 0 */

/**
 * Negotiates the languages between the list of requested locales against
 * a list of available locales.
 *
 * The algorithm is based on the BCP4647 3.3.2 Extended Filtering algorithm,
 * with several modifications:
 *
 *  1) available locales are treated as ranges
 *
 *    This change allows us to match a more specific request against
 *    more generic available locale.
 *
 *    For example, if the available locale list provides locale `en`,
 *    and the requested locale is `en-US`, we treat the available locale as
 *    a locale that matches all possible english requests.
 *
 *    This means that we expect available locale ID to be as precize as
 *    the matches they want to cover.
 *
 *    For example, if there is only `sr` available, it's ok to list
 *    it in available locales. But once the available locales has both,
 *    Cyrl and Latn variants, the locale IDs should be `sr-Cyrl` and `sr-Latn`
 *    to avoid any `sr-*` request to match against whole `sr` range.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['en-US'] * ['en'] = ['en']
 *
 *  2) likely subtags from LDML 4.3 Likely Subtags has been added
 *
 *    The most obvious likely subtag that can be computed is a duplication
 *    of the language field onto region field (`fr` => `fr-FR`).
 *
 *    On top of that, likely subtags may use a list of mappings, that
 *    allow the algorithm to handle non-obvious matches.
 *    For example, making sure that we match `en` to `en-US` or `sr` to
 *    `sr-Cyrl`, while `sr-RU` to `sr-Latn-RU`.
 *
 *    This list can be taken directly from CLDR Supplemental Data.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['fr'] * ['fr-FR'] = ['fr-FR']
 *    ['en'] * ['en-US'] = ['en-US']
 *    ['sr'] * ['sr-Latn', 'sr-Cyrl'] = ['sr-Cyrl']
 *
 *  3) variant/region range check has been added
 *
 *    Lastly, the last form of check is against the requested locale ID
 *    but with the variant/region field replaced with a `*` range.
 *
 *    The rationale here laid out in LDML 4.4 Language Matching:
 *      "(...) normally the fall-off between the user's languages is
 *      substantially greated than regional variants."
 *
 *    In other words, if we can't match for the given region, maybe
 *    we can match for the same language/script but other region, and
 *    it will in most cases be preferred over falling back on the next
 *    language.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['en-AU'] * ['en-US'] = ['en-US']
 *    ['sr-RU'] * ['sr-Latn-RO'] = ['sr-Latn-RO'] // sr-RU -> sr-Latn-RU
 *
 *    It works similarly to getParentLocales algo, except that we stop
 *    after matching against variant/region ranges and don't try to match
 *    ignoring script ranges. That means that `sr-Cyrl` will never match
 *    against `sr-Latn`.
 */
function filterMatches(requestedLocales, availableLocales, strategy) {
    const supportedLocales = new Set();
    const availableLocalesMap = new Map();
    for (let locale of availableLocales) {
        let newLocale = new Locale(locale);
        if (newLocale.isWellFormed) {
            availableLocalesMap.set(locale, new Locale(locale));
        }
    }
    outer: for (const reqLocStr of requestedLocales) {
        const reqLocStrLC = reqLocStr.toLowerCase();
        const requestedLocale = new Locale(reqLocStrLC);
        if (requestedLocale.language === undefined) {
            continue;
        }
        // 1) Attempt to make an exact match
        // Example: `en-US` === `en-US`
        for (const key of availableLocalesMap.keys()) {
            if (reqLocStrLC === key.toLowerCase()) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
        // 2) Attempt to match against the available range
        // This turns `en` into `en-*-*-*` and `en-US` into `en-*-US-*`
        // Example: ['en-US'] * ['en'] = ['en']
        for (const [key, availableLocale] of availableLocalesMap.entries()) {
            if (availableLocale.matches(requestedLocale, true, false)) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
        // 3) Attempt to retrieve a maximal version of the requested locale ID
        // If data is available, it'll expand `en` into `en-Latn-US` and
        // `zh` into `zh-Hans-CN`.
        // Example: ['en'] * ['en-GB', 'en-US'] = ['en-US']
        if (requestedLocale.addLikelySubtags()) {
            for (const [key, availableLocale] of availableLocalesMap.entries()) {
                if (availableLocale.matches(requestedLocale, true, false)) {
                    supportedLocales.add(key);
                    availableLocalesMap.delete(key);
                    if (strategy === "lookup") {
                        return Array.from(supportedLocales);
                    }
                    else if (strategy === "filtering") {
                        continue;
                    }
                    else {
                        continue outer;
                    }
                }
            }
        }
        // 4) Attempt to look up for a different variant for the same locale ID
        // Example: ['en-US-mac'] * ['en-US-win'] = ['en-US-win']
        requestedLocale.clearVariants();
        for (const [key, availableLocale] of availableLocalesMap.entries()) {
            if (availableLocale.matches(requestedLocale, true, true)) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
        // 5) Attempt to match against the likely subtag without region
        // In the example below, addLikelySubtags will turn
        // `zh-Hant` into `zh-Hant-TW` giving `zh-TW` priority match
        // over `zh-CN`.
        //
        // Example: ['zh-Hant-HK'] * ['zh-TW', 'zh-CN'] = ['zh-TW']
        requestedLocale.clearRegion();
        if (requestedLocale.addLikelySubtags()) {
            for (const [key, availableLocale] of availableLocalesMap.entries()) {
                if (availableLocale.matches(requestedLocale, true, false)) {
                    supportedLocales.add(key);
                    availableLocalesMap.delete(key);
                    if (strategy === "lookup") {
                        return Array.from(supportedLocales);
                    }
                    else if (strategy === "filtering") {
                        continue;
                    }
                    else {
                        continue outer;
                    }
                }
            }
        }
        // 6) Attempt to look up for a different region for the same locale ID
        // Example: ['en-US'] * ['en-AU'] = ['en-AU']
        requestedLocale.clearRegion();
        for (const [key, availableLocale] of availableLocalesMap.entries()) {
            if (availableLocale.matches(requestedLocale, true, true)) {
                supportedLocales.add(key);
                availableLocalesMap.delete(key);
                if (strategy === "lookup") {
                    return Array.from(supportedLocales);
                }
                else if (strategy === "filtering") {
                    continue;
                }
                else {
                    continue outer;
                }
            }
        }
    }
    return Array.from(supportedLocales);
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/negotiate_languages.js

/**
 * Negotiates the languages between the list of requested locales against
 * a list of available locales.
 *
 * It accepts three arguments:
 *
 *   requestedLocales:
 *     an Array of strings with BCP47 locale IDs sorted
 *     according to user preferences.
 *
 *   availableLocales:
 *     an Array of strings with BCP47 locale IDs of locale for which
 *     resources are available. Unsorted.
 *
 *   options:
 *     An object with the following, optional keys:
 *
 *       strategy: 'filtering' (default) | 'matching' | 'lookup'
 *
 *       defaultLocale:
 *         a string with BCP47 locale ID to be used
 *         as a last resort locale.
 *
 *
 * It returns an Array of strings with BCP47 locale IDs sorted according to the
 * user preferences.
 *
 * The exact list will be selected differently depending on the strategy:
 *
 *   'filtering': (default)
 *     In the filtering strategy, the algorithm will attempt to match
 *     as many keys in the available locales in order of the requested locales.
 *
 *   'matching':
 *     In the matching strategy, the algorithm will attempt to find the
 *     best possible match for each element of the requestedLocales list.
 *
 *   'lookup':
 *     In the lookup strategy, the algorithm will attempt to find a single
 *     best available locale based on the requested locales list.
 *
 *     This strategy requires defaultLocale option to be set.
 */
function negotiateLanguages(requestedLocales, availableLocales, { strategy = "filtering", defaultLocale } = {}) {
    const supportedLocales = filterMatches(Array.from(requestedLocales !== null && requestedLocales !== void 0 ? requestedLocales : []).map(String), Array.from(availableLocales !== null && availableLocales !== void 0 ? availableLocales : []).map(String), strategy);
    if (strategy === "lookup") {
        if (defaultLocale === undefined) {
            throw new Error("defaultLocale cannot be undefined for strategy `lookup`");
        }
        if (supportedLocales.length === 0) {
            supportedLocales.push(defaultLocale);
        }
    }
    else if (defaultLocale && !supportedLocales.includes(defaultLocale)) {
        supportedLocales.push(defaultLocale);
    }
    return supportedLocales;
}

;// CONCATENATED MODULE: ../../node_modules/@fluent/langneg/esm/index.js
/*
 * @module fluent-langneg
 * @overview
 *
 * `fluent-langneg` provides language negotiation API that fits into
 * Project Fluent localization composition and fallbacking strategy.
 *
 */




;// CONCATENATED MODULE: ../core/dist/i18n.js


// This is automatically populated by `tools/bundle_texts.js` via a postbuild script
const BUNDLED_TEXTS = {
  "ar-SA": {
    "context_menu.ftl": "context-menu-download-swf = تحميل .swf\ncontext-menu-copy-debug-info = نسخ معلومات التصحيح\ncontext-menu-open-save-manager = فتح مدير الحفظ\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] حول ملحق Ruffle ({ $version })\n       *[other] حول Ruffle ({ $version })\n    }\ncontext-menu-hide = إخفاء هذه القائمة\ncontext-menu-exit-fullscreen = الخروج من وضعية الشاشة الكاملة\ncontext-menu-enter-fullscreen = تفعيل وضعية الشاشة الكاملة\ncontext-menu-volume-controls = التحكم بالصوت\n",
    "messages.ftl": "message-cant-embed =\n    لم يكن Ruffle قادر على تشغيل الفلاش المضمنة في هذه الصفحة.\n    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.\npanic-title = لقد حدث خطأ ما :(\nmore-info = معلومات أكثر\nrun-anyway = التشغيل على أي حال\ncontinue = الاستمرار\nreport-bug = إبلاغ عن خلل\nupdate-ruffle = تحديث رفل\nruffle-demo = ويب التجريبي\nruffle-desktop = برنامج سطح المكتب\nruffle-wiki = عرض ويكي Ruffle\nenable-hardware-acceleration = يبدو أن تسارع الأجهزة غير مفعل. بينما قد يعمل Ruffle، قد يكون بطيئاً بشكل غير معقول. يمكنك معرفة كيفية تمكين تسارع الأجهزة من خلال متابعة هذا الرابط.\nview-error-details = عرض تفاصيل الخطأ\nopen-in-new-tab = فتح في علامة تبويب جديدة\nclick-to-unmute = انقر لإلغاء الكتم\nerror-file-protocol =\n    يبدو أنك تقوم بتشغيل Ruffle على بروتوكول \"الملف:\".\n    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.\n    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو استخدام عرض الويب أو تطبيق سطح المكتب.\nerror-javascript-config =\n    تعرض Ruffle إلى مشكلة كبيرة بسبب الإعدادات الخاطئة للجافا سكريبت.\n    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.\n    يمكنك أيضا الرجوع إلى ويكي Ruffle للحصول على المساعدة.\nerror-wasm-not-found =\n    فشل Ruffle في تحميل مكون الملف \".wasm\" المطلوب.\n    إذا كنت مسؤول الخادم، يرجى التأكد من أن الملف قد تم تحميله بشكل صحيح.\n    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعدادات \"المسار العام\": الرجاء مراجعة ويكي Ruffle للحصول على المساعدة.\nerror-wasm-mime-type =\n    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.\n    خادم الويب هذا لا يخدم ملفات \". wasm\" مع نوع MIME الصحيح.\n    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.\nerror-invalid-swf =\n    لا يمكن لـ Ruffle تحليل الملف المطلوب.\n    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحا.\nerror-swf-fetch =\n    فشل Ruffle في تحميل ملف فلاش SWF.\n    السبب الأكثر احتمالاً هو أن الملف لم يعد موجود، لذلك لا يوجد شيء ليحمله رفل.\n    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.\nerror-swf-cors =\n    فشل Ruffle في تحميل ملف فلاش SWF.\n    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.\n    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.\nerror-wasm-cors =\n    فشل Ruffle في تحميل مكون ملف \".wasm\" المطلوب.\n    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.\n    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.\nerror-wasm-invalid =\n    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.\n    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل Ruffle.\n    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.\nerror-wasm-download =\n    واجه Ruffle مشكلة كبيرة أثناء محاولتها التهيئة.\n    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.\n    وإلا يرجى الاتصال بمدير الموقع.\nerror-wasm-disabled-on-edge =\n    فشل Ruffle في تحميل مكون الملف \".wasm\" المطلوب.\n    لإصلاح هذه المشكلة، حاول فتح إعدادات المتصفح الخاص بك، انقر فوق \"الخصوصية، البحث، الخدمات\"، والتمرير لأسفل، وإيقاف \"تعزيز أمانك على الويب\".\n    هذا سيسمح للمتصفح الخاص بك بتحميل الملفات \".wasm\" المطلوبة.\n    إذا استمرت المشكلة، قد تحتاج إلى استخدام متصفح أخر.\nerror-javascript-conflict =\n    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.\n    يبدو أن هذه الصفحة تستخدم كود JavaScript الذي يتعارض مع Ruffle.\n    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.\nerror-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).\nerror-csp-conflict =\n    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.\n    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون \".wasm\" المطلوب.\n    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.\nerror-unknown =\n    واجه Ruffle مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.\n    { $outdated ->\n        [true] إذا كنت مسؤول الخادم، الرجاء محاولة تحميل إصدار أحدث من Ruffle (النسخة الحالية قديمة: { $buildDate }).\n       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا قمت بالتبليغ عن الخطأ!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟\nsave-reload-prompt =\n    الطريقة الوحيدة لـ { $action ->\n        [delete] حذف\n       *[replace] استبدال\n    } هذا الملف الحفظ دون تعارض محتمل هي لإعادة تحميل هذا المحتوى. هل ترغب في المتابعة على أي حال؟\nsave-download = تحميل\nsave-replace = استبدال\nsave-delete = حذف\nsave-backup-all = تحميل جميع ملفات الحفظ\n",
    "volume-controls.ftl": "volume-controls = التحكم بالصوت\nvolume-controls-mute = كتم\nvolume-controls-volume = مستوى الصوت\n"
  },
  "ca-ES": {
    "context_menu.ftl": "context-menu-download-swf = Baixa el fitxer .swf\ncontext-menu-copy-debug-info = Copia la informació de depuració\ncontext-menu-open-save-manager = Obre el gestor d'emmagatzematge\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Quant a l'extensió de Ruffle ({ $version })\n       *[other] Quant a Ruffle ({ $version })\n    }\ncontext-menu-hide = Amaga aquest menú\ncontext-menu-exit-fullscreen = Surt de la pantalla completa\ncontext-menu-enter-fullscreen = Pantalla completa\ncontext-menu-volume-controls = Controls de volum\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.\n    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.\npanic-title = Alguna cosa ha fallat :(\nmore-info = Més informació\nrun-anyway = Reprodueix igualment\ncontinue = Continua\nreport-bug = Informa d'un error\nupdate-ruffle = Actualitza Ruffle\nruffle-demo = Demostració web\nruffle-desktop = Aplicació d'escriptori\nruffle-wiki = Obre la wiki de Ruffle\nenable-hardware-acceleration = Sembla que l'acceleració per maquinari no està activada. Tot i que Ruffle podria funcionar, és probable que ho faci molt lentament. Pots trobar informació sobre com activar l'acceleració per maquinari al següent enllaç.\nview-error-details = Mostra detalls de l'error\nopen-in-new-tab = Obre en una pestanya nova\nclick-to-unmute = Feu clic per activar el so\nerror-file-protocol =\n    Sembla que esteu executant Ruffle al protocol \"file:\".\n    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.\nerror-javascript-config =\n    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.\n    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.\n    També podeu consultar la wiki del Ruffle per obtenir ajuda.\nerror-wasm-not-found =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.\n    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre \"publicPath\": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-wasm-mime-type =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Aquest servidor no està servint els fitxers \".wasm\" amb el tipus MIME adequat.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-invalid-swf =\n    Ruffle no ha pogut llegir el fitxer sol·licitat.\n    La raó més probable és que no sigui un fitxer SWF vàlid.\nerror-swf-fetch =\n    Ruffle no ha pogut carregar el fitxer SWF Flash.\n    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.\n    Proveu de contactar a l'administrador del lloc per obtenir ajuda.\nerror-swf-cors =\n    Ruffle no ha pogut carregar el fitxer SWF Flash.\n    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.\nerror-wasm-cors =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.\nerror-wasm-invalid =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-wasm-download =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.\n    En cas contrari, us preguem que contacteu l'administrador del lloc.\nerror-wasm-disabled-on-edge =\n    Ruffle no ha pogut carregar el component de fitxer \".wasm\" necessari.\n    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre \"Privadesa, cerca i serveis\", i desactiveu \"Prevenció de seguiment\".\n    Això permetrà que el vostre navegador carregui els fitxers \".wasm\" necessaris.\n    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.\nerror-javascript-conflict =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.\n    La política de seguretat del contingut (CSP) no permet l'execució del component \".wasm\" necessari.\n    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.\nerror-unknown =\n    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.\n    { $outdated ->\n        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).\n       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Segur que vols esborrar aquest fitxer desat?\nsave-reload-prompt =\n    L'única forma d{ $action ->\n        [delete] 'eliminar\n       *[replace] e substituir\n    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?\nsave-download = Baixa\nsave-replace = Substitueix\nsave-delete = Elimina\nsave-backup-all = Baixa tots els fitxers desats\n",
    "volume-controls.ftl": "volume-controls = Controls de volum\nvolume-controls-mute = Silenci\nvolume-controls-volume = Volum\n"
  },
  "cs-CZ": {
    "context_menu.ftl": "context-menu-download-swf = Stáhnout .swf\ncontext-menu-copy-debug-info = Zkopírovat debug info\ncontext-menu-open-save-manager = Otevřít správce uložení\ncontext-menu-about-ruffle =\n    { $flavor ->\n         [extension] O Ruffle rozšíření ({ $version })\n        *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Skrýt menu\ncontext-menu-exit-fullscreen = Ukončit režim celé obrazovky\ncontext-menu-enter-fullscreen = Přejít do režimu celé obrazovky\ncontext-menu-volume-controls = Ovládání hlasitosti\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nemohl spustit Flash vložený na této stránce.\n    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.\npanic-title = Něco se pokazilo :(\nmore-info = Další informace\nrun-anyway = Přesto spustit\ncontinue = Pokračovat\nreport-bug = Nahlásit chybu\nupdate-ruffle = Aktualizovat Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktopová aplikace\nruffle-wiki = Zobrazit Ruffle Wiki\nenable-hardware-acceleration = Zdá se, že hardwarová akcelerace není povolena. I když Ruffle funguje správně, může být nepřiměřeně pomalý. Jak povolit hardwarovou akceleraci zjistíte na tomto odkazu.\nview-error-details = Zobrazit podrobnosti o chybě\nopen-in-new-tab = Otevřít na nové kartě\nclick-to-unmute = Kliknutím zrušíte ztlumení\nerror-file-protocol =\n    Zdá se, že používáte Ruffle na protokolu \"file:\".\n    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.\n    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.\nerror-javascript-config =\n    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.\n    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.\n    Pomoc můžete získat také na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.\n    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.\n    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-invalid-swf =\n    Ruffle nemůže zpracovat požadovaný soubor.\n    Nejpravděpodobnějším důvodem je, že požadovaný soubor není platným souborem SWF.\nerror-swf-fetch =\n    Ruffle se nepodařilo načíst SWF soubor Flash.\n    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.\n    Zkuste požádat o pomoc správce webu.\nerror-swf-cors =\n    Ruffle se nepodařilo načíst SWF soubor Flash.\n    Přístup k načítání byl pravděpodobně zablokován politikou CORS.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.\n    Přístup k načítání byl pravděpodobně zablokován politikou CORS.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.\n    V opačném případě kontaktujte administrátora stránky.\nerror-wasm-disabled-on-edge =\n    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.\n    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.\n    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.\n    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.\nerror-javascript-conflict =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.\n    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.\nerror-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.\n    { $outdated ->\n          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).\n         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?\nsave-reload-prompt =\n    Jediný způsob, jak { $action ->\n          [delete] vymazat\n         *[replace] nahradit\n    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?\nsave-download = Stáhnout\nsave-replace = Nahradit\nsave-delete = Vymazat\nsave-backup-all = Stáhnout všechny soubory s uloženými pozicemi\n",
    "volume-controls.ftl": "volume-controls = Ovládání hlasitosti\nvolume-controls-mute = Ztlumit\nvolume-controls-volume = Hlasitost\n"
  },
  "de-DE": {
    "context_menu.ftl": "context-menu-download-swf = .swf herunterladen\ncontext-menu-copy-debug-info = Debug-Info kopieren\ncontext-menu-open-save-manager = Dateimanager öffnen\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Über Ruffle Erweiterung ({ $version })\n       *[other] Über Ruffle ({ $version })\n    }\ncontext-menu-hide = Menü ausblenden\ncontext-menu-exit-fullscreen = Vollbild verlassen\ncontext-menu-enter-fullscreen = Vollbildmodus aktivieren\ncontext-menu-volume-controls = Lautstärke einstellen\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle konnte den Flash in dieser Seite nicht ausführen.\n    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.\npanic-title = Etwas ist schief gelaufen\nmore-info = Weitere Informationen\nrun-anyway = Trotzdem ausführen\ncontinue = Fortfahren\nreport-bug = Fehler melden\nupdate-ruffle = Ruffle aktuallisieren\nruffle-demo = Web-Demo\nruffle-desktop = Desktop-Anwendung\nruffle-wiki = Ruffle-Wiki anzeigen\nenable-hardware-acceleration = Es scheint, als wäre die Hardwarebeschleunigung nicht aktiv. Zwar wird Ruffle funktionieren, jedoch unnötig langsam. Über den Link kannst du erfahren, wie man die Hardwarebeschleunigung aktiviert.\nview-error-details = Fehlerdetails anzeigen\nopen-in-new-tab = In einem neuen Tab öffnen\nclick-to-unmute = Klicke zum Entmuten\nerror-file-protocol =\n    Es scheint, dass Sie Ruffle auf dem \"file:\"-Protokoll ausführen.\n    Jedoch werden aus Sicherheitsgründen viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.\n    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.\nerror-javascript-config =\n    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gestoßen.\n    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.\n    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.\nerror-wasm-not-found =\n    Ruffle konnte die erforderliche \".wasm\"-Datei-Komponente nicht laden.\n    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.\n    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die \"publicPath\"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.\nerror-wasm-mime-type =\n    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.\n    Dieser Webserver dient nicht \". asm\"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-invalid-swf =\n    Ruffle konnte die angegebene Datei nicht lesen.\n    Am wahrscheinlichsten ist die angegebene Datei keine gültige SWF.\nerror-swf-fetch =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.\n    Kontaktieren Sie den Website-Administrator für Hilfe.\nerror-swf-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-wasm-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-wasm-invalid =\n    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.\n    Dieser Webserver dient nicht \". asm\"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-wasm-download =\n    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.\n    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.\n    Andernfalls kontaktieren Sie bitte den Website-Administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle konnte die erforderliche \".wasm\"-Datei-Komponente nicht laden.\n    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf \"Privatsphäre, Suche und Dienste\", scrollen nach unten und schalte \"Verbessere deine Sicherheit im Web\" aus.\n    Dies erlaubt Ihrem Browser die erforderlichen \".wasm\"-Dateien zu laden.\n    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.\nerror-javascript-conflict =\n    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.\n    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.\n    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.\nerror-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.\n    Dieser Webserver dient nicht \". asm\"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-unknown =\n    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.\n    { $outdated ->\n        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).\n       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?\nsave-reload-prompt =\n    Der einzige Weg zu { $action ->\n        [delete] löschen\n       *[replace] ersetzen\n    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?\nsave-download = Herunterladen\nsave-replace = Ersetzen\nsave-delete = Löschen\nsave-backup-all = Alle gespeicherten Dateien herunterladen\n",
    "volume-controls.ftl": "volume-controls = Lautstärkeeinstellungen\nvolume-controls-mute = Stummschalten\nvolume-controls-volume = Lautstärke\n"
  },
  "en-US": {
    "context_menu.ftl": "context-menu-download-swf = Download .swf\ncontext-menu-copy-debug-info = Copy debug info\ncontext-menu-open-save-manager = Open Save Manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] About Ruffle Extension ({$version})\n        *[other] About Ruffle ({$version})\n    }\ncontext-menu-hide = Hide this menu\ncontext-menu-exit-fullscreen = Exit fullscreen\ncontext-menu-enter-fullscreen = Enter fullscreen\ncontext-menu-volume-controls = Volume controls\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle wasn't able to run the Flash embedded in this page.\n    You can try to open the file in a separate tab, to sidestep this issue.\npanic-title = Something went wrong :(\nmore-info = More info\nrun-anyway = Run anyway\ncontinue = Continue\nreport-bug = Report Bug\nupdate-ruffle = Update Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktop Application\nruffle-wiki = View Ruffle Wiki\nenable-hardware-acceleration = It looks like hardware acceleration is not enabled. While Ruffle may work, it could be unreasonably slow. You can find out how to enable hardware acceleration by following this link.\nview-error-details = View Error Details\nopen-in-new-tab = Open in a new tab\nclick-to-unmute = Click to unmute\nerror-file-protocol =\n    It appears you are running Ruffle on the \"file:\" protocol.\n    This doesn't work as browsers block many features from working for security reasons.\n    Instead, we invite you to setup a local server or either use the web demo or the desktop application.\nerror-javascript-config =\n    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.\n    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.\n    You can also consult the Ruffle wiki for help.\nerror-wasm-not-found =\n    Ruffle failed to load the required \".wasm\" file component.\n    If you are the server administrator, please ensure the file has correctly been uploaded.\n    If the issue persists, you may need to use the \"publicPath\" setting: please consult the Ruffle wiki for help.\nerror-wasm-mime-type =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server is not serving \".wasm\" files with the correct MIME type.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-invalid-swf =\n    Ruffle cannot parse the requested file.\n    The most likely reason is that the requested file is not a valid SWF.\nerror-swf-fetch =\n    Ruffle failed to load the Flash SWF file.\n    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.\n    Try contacting the website administrator for help.\nerror-swf-cors =\n    Ruffle failed to load the Flash SWF file.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-cors =\n    Ruffle failed to load the required \".wasm\" file component.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-invalid =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page has missing or invalid files for running Ruffle.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-download =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This can often resolve itself, so you can try reloading the page.\n    Otherwise, please contact the website administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle failed to load the required \".wasm\" file component.\n    To fix this, try opening your browser's settings, clicking \"Privacy, search, and services\", scrolling down, and turning off \"Enhance your security on the web\".\n    This will allow your browser to load the required \".wasm\" files.\n    If the issue persists, you might have to use a different browser.\nerror-javascript-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page uses JavaScript code that conflicts with Ruffle.\n    If you are the server administrator, we invite you to try loading the file on a blank page.\nerror-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).\nerror-csp-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server's Content Security Policy does not allow the required \".wasm\" component to run.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-unknown =\n    Ruffle has encountered a major issue whilst trying to display this Flash content.\n    {$outdated ->\n        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).\n        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Are you sure you want to delete this save file?\nsave-reload-prompt =\n    The only way to {$action ->\n    [delete] delete\n    *[replace] replace\n    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?\nsave-download = Download\nsave-replace = Replace\nsave-delete = Delete\nsave-backup-all = Download all save files",
    "volume-controls.ftl": "volume-controls = Volume controls\nvolume-controls-mute = Mute\nvolume-controls-volume = Volume\n"
  },
  "es-ES": {
    "context_menu.ftl": "context-menu-download-swf = Descargar .swf\ncontext-menu-copy-debug-info = Copiar Información de depuración\ncontext-menu-open-save-manager = Abrir gestor de guardado\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre la extensión de Ruffle ({ $version })\n       *[other] Sobre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ocultar este menú\ncontext-menu-exit-fullscreen = Salir de pantalla completa\ncontext-menu-enter-fullscreen = Entrar a pantalla completa\ncontext-menu-volume-controls = Controles de volumen\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle no pudo ejecutar el Flash incrustado en esta página.\n    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.\npanic-title = Algo salió mal :(\nmore-info = Más info\nrun-anyway = Ejecutar de todos modos\ncontinue = Continuar\nreport-bug = Reportar un Error\nupdate-ruffle = Actualizar Ruffle\nruffle-demo = Demostración de web\nruffle-desktop = Aplicación de Desktop\nruffle-wiki = Ver la página wiki\nenable-hardware-acceleration = Al parecer, la aceleración de hardware no esta habilitada. Puede que Ruffle funcione, pero será extremadamente lento. Puedes averiguar como habilitar la aceleración de hardware al entrar al enlace.\nview-error-details = Ver los detalles del error\nopen-in-new-tab = Abrir en una pestaña nueva\nclick-to-unmute = Haz clic para dejar de silenciar\nerror-file-protocol =\n    Parece que está ejecutando Ruffle en el protocolo \"archivo:\".\n    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.\n    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.\nerror-javascript-config =\n    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.\n    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.\n    También puedes consultar la wiki de Ruffle para obtener ayuda.\nerror-wasm-not-found =\n    Ruffle no pudo cargar el componente de archivo \".wasm\" requerido.\n    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.\n    Si el problema persiste, puede que necesite usar la configuración \"publicPath\": por favor consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-mime-type =\n    Ruffle ha encontrado un problema crítico al intentar inicializar.\n    Este servidor web no está sirviendo archivos wasm\" con el tipo MIME correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-invalid-swf = Ruffle no puede analizar el archivo solicitado. La razón más probable es que no es un archivo válido SWF.\nerror-swf-fetch =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.\n    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.\nerror-swf-cors =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-cors =\n    Ruffle no pudo cargar el archivo \".wasm.\"\n    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-invalid =\n    Ruffle ha encontrado un problema crítico al intentar inicializar.\n    Este servidor web no está sirviendo archivos wasm\" con el tipo Mime correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-download =\n    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.\n    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.\n    De lo contrario, póngase en contacto con el administrador del sitio web.\nerror-wasm-disabled-on-edge =\n    Ruffle no pudo cargar el componente de archivo \".wasm\" requerido.\n    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en \"Privacidad, búsqueda y servicios\", desplazándote y apagando \"Mejore su seguridad en la web\".\n    Esto permitirá a su navegador cargar los archivos \".wasm\" necesarios.\n    Si el problema persiste, puede que tenga que utilizar un navegador diferente.\nerror-javascript-conflict =\n    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.\n    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.\n    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.\nerror-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontró un problema al intentar inicializarse.\n    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido \".wasm\". \n    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.\nerror-unknown =\n    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.\n    { $outdated ->\n        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).\n       *[false] Esto no deberia suceder! apreciariamos que reportes el error!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?\nsave-reload-prompt =\n    La única forma de { $action ->\n        [delete] eliminar\n       *[replace] sobreescribir\n    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?\nsave-download = Descargar\nsave-replace = Sobreescribir\nsave-delete = Borrar\nsave-backup-all = Borrar todos los archivos de guardado\n",
    "volume-controls.ftl": "volume-controls = Controles de volumen\nvolume-controls-mute = Silenciar\nvolume-controls-volume = Volumen\n"
  },
  "fr-FR": {
    "context_menu.ftl": "context-menu-download-swf = Télécharger en tant que .swf\ncontext-menu-copy-debug-info = Copier les infos de débogage\ncontext-menu-open-save-manager = Ouvrir le gestionnaire de stockage\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] À propos de l'Extension Ruffle ({ $version })\n       *[other] À propos de Ruffle ({ $version })\n    }\ncontext-menu-hide = Masquer ce menu\ncontext-menu-exit-fullscreen = Sortir du mode plein écran\ncontext-menu-enter-fullscreen = Afficher en plein écran\ncontext-menu-volume-controls = Contrôles du volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.\n    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.\npanic-title = Une erreur est survenue :(\nmore-info = Plus d'infos\nrun-anyway = Exécuter quand même\ncontinue = Continuer\nreport-bug = Signaler le bug\nupdate-ruffle = Mettre à jour Ruffle\nruffle-demo = Démo en ligne\nruffle-desktop = Application de bureau\nruffle-wiki = Wiki de Ruffle\nenable-hardware-acceleration = Il semblerait que l'accélération matérielle ne soit pas activée. Cela n'empêche généralement pas Ruffle de fonctionner, mais il peut être beaucoup plus lent. Vous pouvez trouver comment activer l'accélération matérielle en suivant ce lien.\nview-error-details = Détails de l'erreur\nopen-in-new-tab = Ouvrir dans un nouvel onglet\nclick-to-unmute = Cliquez pour activer le son\nerror-file-protocol =\n    Il semblerait que vous exécutiez Ruffle sur le protocole \"file:\".\n    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.\n    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.\nerror-javascript-config =\n    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.\n    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.\n    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-not-found =\n    Ruffle n'a pas réussi à charger son fichier \".wasm\".\n    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.\n    Si le problème persiste, il vous faudra peut-être utiliser le paramètre \"publicPath\" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-mime-type =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers \".wasm\".\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-invalid-swf =\n    Ruffle n'a pas été en mesure de lire le fichier demandé.\n    La raison la plus probable est que ce fichier n'est pas un SWF valide.\nerror-swf-fetch =\n    Ruffle n'a pas réussi à charger le fichier Flash.\n    La raison la plus probable est que le fichier n'existe pas ou plus.\n    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.\nerror-swf-cors =\n    Ruffle n'a pas réussi à charger le fichier Flash.\n    La requête a probablement été rejetée en raison de la configuration du CORS.\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-cors =\n    Ruffle n'a pas réussi à charger son fichier \".wasm\".\n    La requête a probablement été rejetée en raison de la configuration du CORS.\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-invalid =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-download =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.\n    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.\nerror-wasm-disabled-on-edge =\n    Ruffle n'a pas réussi à charger son fichier \".wasm\".\n    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur \"Confidentialité, recherche et services\". Puis, vers le bas de la page, désactivez l'option \"Améliorez votre sécurité sur le web\".\n    Cela permettra à votre navigateur de charger les fichiers \".wasm\".\n    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.\nerror-javascript-conflict =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.\n    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.\nerror-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).\nerror-csp-conflict =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers \".wasm\".\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-unknown =\n    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.\n    { $outdated ->\n        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).\n       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?\nsave-reload-prompt =\n    La seule façon de { $action ->\n        [delete] supprimer\n       *[replace] remplacer\n    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?\nsave-download = Télécharger\nsave-replace = Remplacer\nsave-delete = Supprimer\nsave-backup-all = Télécharger tous les fichiers de sauvegarde\n",
    "volume-controls.ftl": "volume-controls = Contrôles du volume\nvolume-controls-mute = Muet\nvolume-controls-volume = Volume\n"
  },
  "he-IL": {
    "context_menu.ftl": "context-menu-download-swf = הורדת קובץ הswf.\ncontext-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות\ncontext-menu-open-save-manager = פתח את מנהל השמירות\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] אודות התוסף Ruffle ({ $version })\n       *[other] אודות Ruffle ({ $version })\n    }\ncontext-menu-hide = הסתר תפריט זה\ncontext-menu-exit-fullscreen = יציאה ממסך מלא\ncontext-menu-enter-fullscreen = מסך מלא\ncontext-menu-volume-controls = בקרת עוצמת קול\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.\n    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.\npanic-title = משהו השתבש :(\nmore-info = מידע נוסף\nrun-anyway = הפעל בכל זאת\ncontinue = המשך\nreport-bug = דווח על תקלה\nupdate-ruffle = עדכן את Ruffle\nruffle-demo = הדגמה\nruffle-desktop = אפליקציית שולחן עבודה\nruffle-wiki = ראה את Ruffle wiki\nenable-hardware-acceleration = נראה שהאצת החומרה שלך לא מופעלת. בעוד שראפל עשוי לעבוד, הוא יכול להיות איטי. תוכל לראות כיצד להפעיל תכונה זו בלחיצה על הלינק הזה.\nview-error-details = ראה פרטי שגיאה\nopen-in-new-tab = פתח בכרטיסייה חדשה\nclick-to-unmute = לחץ על מנת לבטל השתקה\nerror-file-protocol =\n    נדמה שאתה מריץ את Ruffle תחת פרוטוקול \"file:\".\n    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.\n    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.\nerror-javascript-config =\n    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.\n    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.\n    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-not-found =\n    Ruffle נכשל לטעון את קובץ ה\"wasm.\" הדרוש.\n    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.\n    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת \"publicPath\": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-mime-type =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    שרתו של אתר זה לא משייך קבצי \".wasm\" עם סוג הMIME הנכון.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-invalid-swf =\n    Ruffle לא יכול לנתח את הקובץ המבוקש.\n    הסיבה הסבירה ביותר לבעיה זו היא בגלל שהקובץ המבוקש אינו SWF חוקי.\nerror-swf-fetch =\n    Ruffle נכשל לטעון את קובץ הפלאש/swf. .\n    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.\n    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.\nerror-swf-cors =\n    Ruffle נכשל לטעון את קובץ הפלאש/swf. .\n    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-cors =\n    Ruffle נכשל לטעון את קובץ ה\".wasm\" הדרוש.\n    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-invalid =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-download =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.\n    אם לא, אנא פנה למנהל האתר.\nerror-wasm-disabled-on-edge =\n    Ruffle נכשל לטעון את קובץ ה\".wasm\" הדרוש.\n    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על \"אבטחה, חיפוש ושירות\",\n    גלול מטה, וכבה את \"הגבר את האבטחה שלך ברשת\".\n    זה יאפשר לדפדפן שלך לטעון את קובץ ה\".wasm\" הדרוש.\n    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.\nerror-javascript-conflict =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.\n    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.\nerror-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).\nerror-csp-conflict =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה\"wasm.\" הדרוש לפעול.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-unknown =\n    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.\n    { $outdated ->\n        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).\n       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?\nsave-reload-prompt =\n    הדרך היחידה { $action ->\n        [delete] למחוק\n       *[replace] להחליף\n    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?\nsave-download = הורדה\nsave-replace = החלפה\nsave-delete = מחיקה\nsave-backup-all = הורדת כל קבצי השמירה\n",
    "volume-controls.ftl": "volume-controls = בקרת עוצמת קול\nvolume-controls-mute = השתק\nvolume-controls-volume = עוצמת קול\n"
  },
  "hu-HU": {
    "context_menu.ftl": "context-menu-download-swf = .swf fájl letöltése\ncontext-menu-copy-debug-info = Hibakeresési információk másolása\ncontext-menu-open-save-manager = Mentéskezelő megnyitása\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] A Ruffle kiegészítő ({ $version }) névjegye\n       *[other] A Ruffle ({ $version }) névjegye\n    }\ncontext-menu-hide = Ezen menü elrejtése\ncontext-menu-exit-fullscreen = Kilépés a teljes képernyőből\ncontext-menu-enter-fullscreen = Váltás teljes képernyőre\ncontext-menu-volume-controls = Hangerőszabályzó\n",
    "messages.ftl": "message-cant-embed =\n    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.\n    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.\npanic-title = Valami baj történt :(\nmore-info = További információ\nrun-anyway = Futtatás mégis\ncontinue = Folytatás\nreport-bug = Hiba jelentése\nupdate-ruffle = Ruffle frissítése\nruffle-demo = Webes demó\nruffle-desktop = Asztali alkalmazás\nruffle-wiki = Ruffle Wiki megnyitása\nenable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás nincs engedélyezve. Bár a Ruffle működhet, nagyon lassú lehet. Ezt a hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást.\nview-error-details = Hiba részletei\nopen-in-new-tab = Megnyitás új lapon\nclick-to-unmute = Kattints a némítás feloldásához\nerror-file-protocol =\n    Úgy tűnik, a Ruffle-t a \"file:\" protokollon futtatod.\n    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.\n    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.\nerror-javascript-config =\n    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.\n    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.\n    A Ruffle wikiben is találhatsz ehhez segítséget.\nerror-wasm-not-found =\n    A Ruffle nem tudta betölteni a szükséges \".wasm\" összetevőt.\n    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.\n    Ha a probléma továbbra is fennáll, előfordulhat, hogy a \"publicPath\" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.\nerror-wasm-mime-type =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Ez a webszerver a \".wasm\" fájlokat nem a megfelelő MIME-típussal szolgálja ki.\n    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.\nerror-invalid-swf =\n    A Ruffle nem tudta értelmezni a kért fájlt.\n    Ennek a legvalószínűbb oka az, hogy a kért fájl nem érvényes SWF.\nerror-swf-fetch =\n    A Ruffle nem tudta betölteni a Flash SWF fájlt.\n    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.\n    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.\nerror-swf-cors =\n    A Ruffle nem tudta betölteni a Flash SWF fájlt.\n    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.\n    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.\nerror-wasm-cors =\n    A Ruffle nem tudta betölteni a szükséges \".wasm\" összetevőt.\n    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.\n    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.\nerror-wasm-invalid =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.\n    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.\nerror-wasm-download =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.\n    Ellenkező esetben fordulj a webhely rendszergazdájához.\nerror-wasm-disabled-on-edge =\n    A Ruffle nem tudta betölteni a szükséges \".wasm\" összetevőt.\n    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.\n    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges \".wasm\" fájlokat.\n    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.\nerror-javascript-conflict =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.\n    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.\nerror-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).\nerror-csp-conflict =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.\n    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.\nerror-unknown =\n    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.\n    { $outdated ->\n        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).\n       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Biztosan törölni akarod ezt a mentést?\nsave-reload-prompt =\n    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->\n        [delete] törléséhez\n       *[replace] cseréjéhez\n    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?\nsave-download = Letöltés\nsave-replace = Csere\nsave-delete = Törlés\nsave-backup-all = Az összes fájl letöltése\n",
    "volume-controls.ftl": "volume-controls = Hangerőszabályzó\nvolume-controls-mute = Némítás\nvolume-controls-volume = Hangerő\n"
  },
  "id-ID": {
    "context_menu.ftl": "context-menu-download-swf = Unduh .swf\ncontext-menu-copy-debug-info = Salin info debug\ncontext-menu-open-save-manager = Buka Manager Save\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Tentang Ekstensi Ruffle ({ $version })\n       *[other] Tentang Ruffle ({ $version })\n    }\ncontext-menu-hide = Sembunyikan Menu ini\ncontext-menu-exit-fullscreen = Keluar dari layar penuh\ncontext-menu-enter-fullscreen = Masuk mode layar penuh\ncontext-menu-volume-controls = Pengaturan Volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.\n    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.\npanic-title = Terjadi kesalahan :(\nmore-info = Info lebih lanjut\nrun-anyway = Jalankan\ncontinue = Lanjutkan\nreport-bug = Laporkan Bug\nupdate-ruffle = Perbarui Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplikasi Desktop\nruffle-wiki = Kunjungi Wiki Ruffle\nenable-hardware-acceleration = Sepertinya akselerasi perangkat keras tidak aktif. Ruffle tetap akan bekerja, Namun dapat bekerja dengan sangat lambat. Anda dapat mengaktifkan akselerasi perangkat keras dengan menggunakan link berikut.\nview-error-details = Tunjukan Detail Error\nopen-in-new-tab = Buka di Tab Baru\nclick-to-unmute = Tekan untuk menyalakan suara\nerror-file-protocol =\n    Sepertinya anda menjalankan Ruffle di protokol \"file:\". \n    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.\n    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.\nerror-javascript-config =\n    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.\n    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-not-found =\n    Ruffle gagal memuat komponen file \".wasm\" yang diperlukan.\n    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.\n    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan \"publicPath\": silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-mime-type =\n    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.\n    Server web ini tidak melayani file \".wasm\" dengan tipe MIME yang benar.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-swf-fetch =\n    Ruffle gagal memuat file SWF Flash.\n    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.\n    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.\nerror-swf-cors =\n    Ruffle gagal memuat file SWF Flash.\n    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-cors =\n    Ruffle gagal memuat komponen file \".wasm\" yang diperlukan.\n    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-invalid =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-download =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.\n    Jika tidak, silakan hubungi administrator situs web ini.\nerror-wasm-disabled-on-edge =\n    Ruffle gagal memuat komponen file \".wasm\" yang diperlukan.\n    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik \"Privasi, pencarian, dan layanan\", turun ke bawah, dan matikan \"Tingkatkan keamanan Anda di web\".\n    Ini akan memungkinkan browser Anda memuat file \".wasm\" yang diperlukan.\n    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.\nerror-javascript-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.\nerror-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).\nerror-csp-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen \".wasm\" yang diperlukan untuk dijalankan.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-unknown =\n    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.\n    { $outdated ->\n        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).\n       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Anda yakin ingin menghapus berkas ini?\nsave-reload-prompt =\n    Satu-satunya cara untuk { $action ->\n        [delete] menghapus\n       *[replace] mengganti\n    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?\nsave-download = Unduh\nsave-replace = Ganti\nsave-delete = Hapus\nsave-backup-all = Unduh semua berkas penyimpanan\n",
    "volume-controls.ftl": "volume-controls = Pengaturan Volume\nvolume-controls-mute = Bisukan\nvolume-controls-volume = Volume\n"
  },
  "it-IT": {
    "context_menu.ftl": "context-menu-download-swf = Scarica .swf\ncontext-menu-copy-debug-info = Copia informazioni di debug\ncontext-menu-open-save-manager = Apri Gestione salvataggi\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Informazioni su Ruffle Extension ({ $version })\n       *[other] Informazioni su Ruffle ({ $version })\n    }\ncontext-menu-hide = Nascondi questo menu\ncontext-menu-exit-fullscreen = Esci dallo schermo intero\ncontext-menu-enter-fullscreen = Entra a schermo intero\ncontext-menu-volume-controls = Controlli volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.\n    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.\npanic-title = Qualcosa è andato storto :(\nmore-info = Maggiori informazioni\nrun-anyway = Esegui comunque\ncontinue = Continua\nreport-bug = Segnala Un Bug\nupdate-ruffle = Aggiorna Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Applicazione Desktop\nruffle-wiki = Visualizza Ruffle Wiki\nenable-hardware-acceleration = Sembra che l'accelerazione hardware non sia abilitata. Sebbene Ruffle possa funzionare, potrebbe essere irragionevolmente lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo questo collegamento.\nview-error-details = Visualizza Dettagli Errore\nopen-in-new-tab = Apri in una nuova scheda\nclick-to-unmute = Clicca per riattivare l'audio\nerror-file-protocol =\n    Sembra che tu stia eseguendo Ruffle sul protocollo \"file:\".\n    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.\n    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.\nerror-javascript-config =\n    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.\n    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.\n    Puoi anche consultare il wiki Ruffle per aiuto.\nerror-wasm-not-found =\n    Ruffle non è riuscito a caricare il componente di file \".wasm\".\n    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.\n    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione \"publicPath\": si prega di consultare il wiki Ruffle per aiuto.\nerror-wasm-mime-type =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo server web non serve \". asm\" file con il tipo MIME corretto.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.\nerror-swf-fetch =\n    Ruffle non è riuscito a caricare il file Flash SWF.\n    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.\n    Prova a contattare l'amministratore del sito web per aiuto.\nerror-swf-cors =\n    Ruffle non è riuscito a caricare il file SWF Flash.\n    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-cors =\n    Ruffle non è riuscito a caricare il componente di file \".wasm\".\n    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-invalid =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-download =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.\n    Altrimenti, contatta l'amministratore del sito.\nerror-wasm-disabled-on-edge =\n    Ruffle non ha caricato il componente di file \".wasm\" richiesto.\n    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su \"Privacy, search, and services\", scorrendo verso il basso e disattivando \"Migliora la tua sicurezza sul web\".\n    Questo permetterà al tuo browser di caricare i file \".wasm\" richiesti.\n    Se il problema persiste, potresti dover usare un browser diverso.\nerror-javascript-conflict =\n    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.\n    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.\nerror-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.\n    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta\". asm\" componente da eseguire.\n    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.\nerror-unknown =\n    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.\n    { $outdated ->\n        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).\n       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?\nsave-reload-prompt =\n    L'unico modo per { $action ->\n        [delete] delete\n       *[replace] replace\n    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?\nsave-download = Scarica\nsave-replace = Sostituisci\nsave-delete = Elimina\nsave-backup-all = Scarica tutti i file di salvataggio\n",
    "volume-controls.ftl": "volume-controls = Controlli volume\nvolume-controls-mute = Silenzia\nvolume-controls-volume = Volume\n"
  },
  "ja-JP": {
    "context_menu.ftl": "context-menu-download-swf = .swfをダウンロード\ncontext-menu-copy-debug-info = デバッグ情報をコピー\ncontext-menu-open-save-manager = セーブマネージャーを開く\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle拡張機能について ({ $version })\n       *[other] Ruffleについて ({ $version })\n    }\ncontext-menu-hide = メニューを隠す\ncontext-menu-exit-fullscreen = フルスクリーンを終了\ncontext-menu-enter-fullscreen = フルスクリーンにする\ncontext-menu-volume-controls = 音量\n",
    "messages.ftl": "message-cant-embed =\n    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。\n    別のタブでファイルを開くことで、この問題を解決できるかもしれません。\npanic-title = エラーが発生しました :(\nmore-info = 詳細情報\nrun-anyway = とにかく実行する\ncontinue = 続行\nreport-bug = バグを報告\nupdate-ruffle = Ruffleを更新\nruffle-demo = Webデモ\nruffle-desktop = デスクトップアプリケーション\nruffle-wiki = Ruffle Wikiを表示\nenable-hardware-acceleration = ハードウェアアクセラレーションが有効になっていないようです。Ruffleが動作しないか、動作が遅くなる可能性があります。 ハードウェアアクセラレーションを有効にする方法については、こちらのリンクを参照してください。\nview-error-details = エラーの詳細を表示\nopen-in-new-tab = 新しいタブで開く\nclick-to-unmute = クリックでミュートを解除\nerror-file-protocol =\n    Ruffleを\"file:\"プロトコルで使用しているようです。\n    ブラウザはセキュリティ上の理由から殆どの機能を制限しているため、正しく動作しません。\n    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。\nerror-javascript-config =\n    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。\n    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。\n    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。\nerror-wasm-not-found =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このWebサーバーのコンテンツセキュリティポリシーが、実行に必要となる「.wasm」コンポーネントの実行を許可していません。サーバーの管理者の場合は、ファイルが正しくアップロードされているか確認をしてください。この問題が解決しない場合は、「publicPath」の設定を使用する必要があります。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-wasm-mime-type =\n    Ruffleの初期化に失敗する大きな問題が発生しました。\n    このWebサーバーは正しいMIMEタイプの「.wasm」ファイルを提供していません。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-invalid-swf =\n    Ruffle は要求されたファイルを解析できません。\n    最も考えられる原因は、要求されたファイルが有効な SWF でないことです。\nerror-swf-fetch =\n    RuffleがFlash SWFファイルの読み込みに失敗しました。\n    最も考えられる原因は、SWFファイルが既に存在しない事でRuffleが読み込みに失敗するという問題です。\n    Webサイトの管理者にお問い合わせください。\nerror-swf-cors =\n    RuffleはSWFファイルの読み込みに失敗しました。\n    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。\n    サーバー管理者の方は、Ruffleのwikiを参照してください。\nerror-wasm-cors =\n    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。\n    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。\n    サーバーの管理者は、Ruffle wikiを参照してください。\nerror-wasm-invalid =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-wasm-download =\n    Ruffleの初期化時に重大な問題が発生しました。\n    この問題はページを再読み込みする事で大抵は解決するはずなので行なってみてください。\n    もしも解決しない場合は、Webサイトの管理者にお問い合わせください。\nerror-wasm-disabled-on-edge =\n    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。\n    この問題を解決するにはブラウザーの設定を開き、「プライバシー、検索、サービス」をクリックし、下にスクロールで「Web上のセキュリティを強化する」をオフにしてみてください。\n    これで必要となる「.wasm」ファイルが読み込まれるようになります。\n    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。\nerror-javascript-conflict =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。\n    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。\nerror-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })\nerror-csp-conflict =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-unknown =\n    Flashコンテンツを表示する際にRuffleで問題が発生しました。\n    { $outdated ->\n        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。\n       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = このセーブファイルを削除してもよろしいですか?\nsave-reload-prompt =\n    セーブファイルを競合の可能性なく { $action ->\n        [delete] 削除する\n       *[replace] 置き換える\n    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？\nsave-download = ダウンロード\nsave-replace = 置き換え\nsave-delete = 削除\nsave-backup-all = すべてのセーブファイルをダウンロード\n",
    "volume-controls.ftl": "volume-controls = 音量\nvolume-controls-mute = 消音\nvolume-controls-volume = 音量\n"
  },
  "ko-KR": {
    "context_menu.ftl": "context-menu-download-swf = .swf 다운로드\ncontext-menu-copy-debug-info = 디버그 정보 복사\ncontext-menu-open-save-manager = 저장 관리자 열기\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle 확장 프로그램 정보 ({ $version })\n       *[other] Ruffle 정보 ({ $version })\n    }\ncontext-menu-hide = 이 메뉴 숨기기\ncontext-menu-exit-fullscreen = 전체화면 나가기\ncontext-menu-enter-fullscreen = 전체화면으로 열기\ncontext-menu-volume-controls = 음량 조절\n",
    "messages.ftl": "message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.\npanic-title = 문제가 발생했습니다 :(\nmore-info = 추가 정보\nrun-anyway = 그래도 실행하기\ncontinue = 계속하기\nreport-bug = 버그 제보\nupdate-ruffle = Ruffle 업데이트\nruffle-demo = 웹 데모\nruffle-desktop = 데스크톱 애플리케이션\nruffle-wiki = Ruffle 위키 보기\nenable-hardware-acceleration = 하드웨어 가속이 활성화되지 않은 것 같습니다. Ruffle은 계속 작동하지만 실행 속도가 매우 느릴 수 있습니다. 하드웨어 가속을 활성화하는 방법을 알아보려면 다음 링크를 참고해보세요.\nview-error-details = 오류 세부 정보 보기\nopen-in-new-tab = 새 탭에서 열기\nclick-to-unmute = 클릭하여 음소거 해제\nerror-file-protocol =\n    Ruffle을 \"file:\" 프로토콜에서 실행하고 있는 것으로 보입니다.\n    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.\n    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.\nerror-javascript-config =\n    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.\n    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.\n    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.\nerror-wasm-not-found =\n    Ruffle이 \".wasm\" 필수 파일 구성요소를 로드하지 못했습니다.\n    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.\n    문제가 지속된다면 \"publicPath\" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.\nerror-wasm-mime-type =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 웹 서버는 올바른 MIME 유형의 \".wasm\" 파일을 제공하지 않습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.\nerror-invalid-swf =\n    Ruffle이 요청한 파일을 분석하지 못했습니다.\n    요청한 파일이 유효한 SWF 파일이 아닐 가능성이 높습니다.\nerror-swf-fetch =\n    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.\n    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.\n    웹사이트 관리자에게 문의하여 도움을 받아보세요.\nerror-swf-cors =\n    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.\n    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-wasm-cors =\n    Ruffle이 \".wasm\" 필수 파일 구성요소를 로드하지 못했습니다.\n    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-wasm-invalid =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-wasm-download =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.\n    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.\nerror-wasm-disabled-on-edge =\n    Ruffle이 \".wasm\" 필수 파일 구성요소를 로드하지 못했습니다.\n    이를 해결하려면 브라우저 설정에서 \"개인 정보, 검색 및 서비스\"를 클릭한 후, 하단으로 스크롤하여 \"웹에서 보안 강화\" 기능을 꺼야 합니다.\n    이는 필요한 \".wasm\" 파일을 브라우저에서 로드할 수 있도록 허용합니다.\n    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.\nerror-javascript-conflict =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.\n    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.\nerror-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).\nerror-csp-conflict =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 웹 서버의 CSP(Content Security Policy) 정책이 \".wasm\" 필수 구성요소를 실행하는 것을 허용하지 않습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-unknown =\n    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.\n    { $outdated ->\n        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).\n       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?\nsave-reload-prompt =\n    \b이 파일을 잠재적인 충돌 없이 { $action ->\n        [delete] 삭제\n       *[replace] 교체\n    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?\nsave-download = 다운로드\nsave-replace = 교체\nsave-delete = 삭제\nsave-backup-all = 모든 저장 파일 다운로드\n",
    "volume-controls.ftl": "volume-controls = 음량 조절\nvolume-controls-mute = 음소거\nvolume-controls-volume = 음량\n"
  },
  "nl-NL": {
    "context_menu.ftl": "context-menu-download-swf = .swf downloaden\ncontext-menu-copy-debug-info = Kopieer debuginformatie\ncontext-menu-open-save-manager = Open opgeslagen-data-manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Over Ruffle Uitbreiding ({ $version })\n       *[other] Over Ruffle ({ $version })\n    }\ncontext-menu-hide = Verberg dit menu\ncontext-menu-exit-fullscreen = Verlaat volledig scherm\ncontext-menu-enter-fullscreen = Naar volledig scherm\ncontext-menu-volume-controls = Geluidsniveaus\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle kon de Flash-inhoud op de pagina niet draaien.\n    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.\npanic-title = Er ging iets mis :(\nmore-info = Meer informatie\nrun-anyway = Toch starten\ncontinue = Doorgaan\nreport-bug = Bug rapporteren\nupdate-ruffle = Ruffle updaten\nruffle-demo = Web Demo\nruffle-desktop = Desktopapplicatie\nruffle-wiki = Bekijk de Ruffle Wiki\nenable-hardware-acceleration = Het lijkt erop dat hardwareversnelling niet beschikbaar is. Ruffle zal werken, maar gaat waarschijnlijk erg traag zijn. Je kan lezen hoe hardwareversnelling in te schakelen is door deze link te volgen.\nview-error-details = Foutdetails tonen\nopen-in-new-tab = Openen in een nieuw tabblad\nclick-to-unmute = Klik om te ontdempen\nerror-file-protocol =\n    Het lijkt erop dat je Ruffle gebruikt met het \"file\" protocol.\n    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.\n    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.\nerror-javascript-config =\n    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.\n    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.\n    Je kan ook in de Ruffle wiki kijken voor hulp.\nerror-wasm-not-found =\n    Ruffle kon het vereiste \".wasm\" bestandscomponent niet laden.\n    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.\n    Mocht het probleem blijven voordoen, moet je misschien de \"publicPath\" instelling gebruiken: zie ook de Ruffle wiki voor hulp.\nerror-wasm-mime-type =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Deze webserver serveert \".wasm\" bestanden niet met het juiste MIME type.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-invalid-swf =\n    Ruffle kon het gevraagde bestand niet verwerken.\n    Waarschijnlijk is het geen geldig SWF bestand.\nerror-swf-fetch =\n    Ruffle kon het Flash SWF bestand niet inladen.\n    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.\n    Probeer contact op te nemen met de websitebeheerder voor hulp.\nerror-swf-cors =\n    Ruffle kon het Flash SWD bestand niet inladen.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-cors =\n    Ruffle kon het vereiste \".wasm\" bestandscomponent niet laden.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-invalid =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-download =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.\n    Zo niet, neem dan contact op met de websitebeheerder.\nerror-wasm-disabled-on-edge =\n    Ruffle kon het vereiste \".wasm\" bestandscomponent niet laden.\n    Om dit op te lossen, ga naar je browserinstellingen, klik op \"Privacy, zoeken en diensten\", scroll omlaag, en schakel \"Verbeter je veiligheid op he web\" uit.\n    Dan kan je browser wel de vereiste \".wasm\" bestanden inladen.\n    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.\nerror-javascript-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.\n    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.\nerror-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).\nerror-csp-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het CSP-beleid staat niet toe dat het vereiste \".wasm\" component kan draaien.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-unknown =\n    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.\n    { $outdated ->\n        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).\n       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?\nsave-reload-prompt =\n    De enige manier om deze opgeslagen data te { $action ->\n        [delete] verwijderen\n       *[replace] vervangen\n    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?\nsave-download = Downloaden\nsave-replace = Vervangen\nsave-delete = Verwijderen\nsave-backup-all = Download alle opgeslagen data\n",
    "volume-controls.ftl": "volume-controls = Geluidsniveaus\nvolume-controls-mute = Dempen\nvolume-controls-volume = Volume\n"
  },
  "pl-PL": {
    "context_menu.ftl": "context-menu-download-swf = Pobierz .swf\ncontext-menu-copy-debug-info = Kopiuj informacje debugowania\ncontext-menu-open-save-manager = Otwórz Menadżer Zapisów\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Rozszerzeniu Ruffle ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Ukryj to menu\ncontext-menu-exit-fullscreen = Zamknij pełny ekran\ncontext-menu-enter-fullscreen = Pełny ekran\ncontext-menu-volume-controls = Sterowanie głośnością\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.\n    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.\npanic-title = Coś poszło nie tak :(\nmore-info = Więcej informacji\nrun-anyway = Uruchom mimo tego\ncontinue = Kontynuuj\nreport-bug = Zgłoś błąd\nupdate-ruffle = Zaktualizuj Ruffle\nruffle-desktop = Aplikacja na komputer\nruffle-wiki = Zobacz Wiki Ruffle\nenable-hardware-acceleration = Wygląda na to, że akceleracja sprzętowa nie jest włączona. Chociaż Ruffle może działać, może być nieproporcjonalnie wolna. Możesz dowiedzieć się, jak włączyć akcelerację sprzętową, podążając za tym linkiem.\nview-error-details = Zobacz szczegóły błędu\nopen-in-new-tab = Otwórz w nowej karcie\nclick-to-unmute = Kliknij aby wyłączyć wyciszenie\nerror-file-protocol =\n    Wygląda na to, że używasz Ruffle w protokole \"plik:\".\n    To nie działa ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.\n    Zamiast tego zapraszamy do konfiguracji serwera lokalnego lub użycia aplikacji demo lub desktopowej.\nerror-javascript-config =\n    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.\n    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.\n    Możesz również zapoznać się z wiki Ruffle po pomoc.\nerror-wasm-not-found =\n    Ruffle nie udało się załadować wymaganego komponentu pliku \".wasm\".\n    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.\n    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia \"publicPath\": zapoznaj się z wiki Ruffle aby uzyskać pomoc.\nerror-wasm-mime-type =\n    Ruffle napotkał poważny problem podczas próby zainicjowania.\n    Ten serwer internetowy nie obsługuje \". asm\" pliki z poprawnym typem MIME.\n    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle aby uzyskać pomoc.\nerror-invalid-swf =\n    Ruffle nie może przetworzyć żądanego pliku.\n    Prawdopodobnie to nie jest poprawny plik SWF.\nerror-swf-fetch =\n    Ruffle nie udało się załadować pliku Flash SWF.\n    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma nic do załadowania.\n    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.\nerror-swf-cors =\n    Ruffle nie udało się załadować pliku Flash SWF.\n    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.\n    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.\nerror-wasm-cors =\n    Ruffle nie udało się załadować wymaganego komponentu pliku \".wasm\".\n    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.\n    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.\nerror-wasm-invalid =\n    Ruffle napotkał poważny problem podczas próby zainicjowania.\n    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki do uruchomienia Ruffle.\n    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.\nerror-wasm-download =\n    Ruffle napotkał poważny problem podczas próby zainicjowania.\n    Może to często rozwiązać siebie, więc możesz spróbować odświeżyć stronę.\n    W przeciwnym razie skontaktuj się z administratorem witryny.\nerror-wasm-disabled-on-edge =\n    Ruffle nie udało się załadować wymaganego komponentu pliku \".wasm\".\n    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając \"Prywatność, wyszukiwanie i usługi\", przewijając w dół i wyłączając \"Zwiększ bezpieczeństwo w sieci\".\n    Pozwoli to przeglądarce załadować wymagane pliki \".wasm\".\n    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.\nerror-javascript-conflict =\n    Ruffle napotkał poważny problem podczas próby zainicjowania.\n    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.\n    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.\nerror-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).\nerror-csp-conflict =\n    Ruffle napotkał poważny problem podczas próby zainicjowania.\n    Polityka bezpieczeństwa zawartości tego serwera nie zezwala na wymagany \". wasm\" komponent do uruchomienia.\n    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle po pomoc.\nerror-unknown =\n    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.\n    { $outdated ->\n        [true] Jeśli jesteś administratorem serwera, spróbuj przesłać nowszą wersję Ruffle (obecna wersja jest przestarzała: { $buildDate }).\n       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś mógł zgłosić błąd!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?\nsave-reload-prompt =\n    Jedyną opcją, aby { $action ->\n        [delete] usunąć\n       *[replace] zamienić\n    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?\nsave-download = Pobierz\nsave-replace = Zamień\nsave-delete = Usuń\nsave-backup-all = Pobierz wszystkie pliki zapisu\n",
    "volume-controls.ftl": "volume-controls = Sterowanie głośnością\nvolume-controls-mute = Wycisz\nvolume-controls-volume = Głośność\n"
  },
  "pt-BR": {
    "context_menu.ftl": "context-menu-download-swf = Baixar .swf\ncontext-menu-copy-debug-info = Copiar informação de depuração\ncontext-menu-open-save-manager = Abrir o Gerenciador de Salvamento\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extensão do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Sair da tela cheia\ncontext-menu-enter-fullscreen = Entrar em tela cheia\ncontext-menu-volume-controls = Controles de volume\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle não conseguiu executar o Flash incorporado nesta página.\n    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.\npanic-title = Algo deu errado :(\nmore-info = Mais informação\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar Bug\nupdate-ruffle = Atualizar Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplicativo de Desktop\nruffle-wiki = Ver Wiki do Ruffle\nenable-hardware-acceleration = Parece que a aceleração de hardware não está habilitada. Embora o Ruffle possa funcionar, pode ser excessivamente lento. Você pode descobrir como ativar a aceleração de hardware seguindo este link.\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir em uma nova guia\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que você está executando o Ruffle no protocolo \"file:\".\n    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.\n    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.\nerror-javascript-config =\n    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.\n    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.\n    Você também pode consultar o wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    Ruffle falhou ao carregar o componente de arquivo \".wasm\" necessário.\n    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.\n    Se o problema persistir, você pode precisar usar a configuração \"publicPath\": por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Este servidor de web não está servindo \".wasm\" arquivos com o tipo MIME correto.\n    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-invalid-swf =\n    Ruffle não pode analisar o arquivo solicitado.\n    O motivo provável é que o arquivo solicitado não seja um SWF válido.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.\n    Tente contatar o administrador do site para obter ajuda.\nerror-swf-cors =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    O acesso para fetch provavelmente foi bloqueado pela política CORS.\n    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    Ruffle falhou ao carregar o componente de arquivo \".wasm\" necessário.\n    O acesso para fetch foi provavelmente bloqueado pela política CORS.\n    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.\n    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um grande problema ao tentar inicializar.\n    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.\n    Caso contrário, contate o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de arquivo \".wasm\" necessário.\n    Para corrigir isso, tente abrir configurações do seu navegador, clicando em \"Privacidade, pesquisa e serviços\", rolando para baixo e desativando \"Melhore sua segurança na web\".\n    Isso permitirá que seu navegador carregue os arquivos \".wasm\" necessários.\n    Se o problema persistir, talvez seja necessário usar um navegador diferente.\nerror-javascript-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.\n    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.\nerror-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    A política de segurança de conteúdo deste servidor da web não permite a execução do componente \".wasm\" necessário.\n    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.\n    { $outdated ->\n        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).\n       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?\nsave-reload-prompt =\n    A única maneira de { $action ->\n        [delete] excluir\n       *[replace] substituir\n    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?\nsave-download = Baixar\nsave-replace = Substituir\nsave-delete = Excluir\nsave-backup-all = Baixar todos os arquivos de salvamento\n",
    "volume-controls.ftl": "volume-controls = Controles de volume\nvolume-controls-mute = Silenciar\nvolume-controls-volume = Volume\n"
  },
  "pt-PT": {
    "context_menu.ftl": "context-menu-download-swf = Descarga.swf\ncontext-menu-copy-debug-info = Copiar informações de depuração\ncontext-menu-open-save-manager = Abrir Gestor de Gravações\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extensão do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Fechar Ecrã Inteiro\ncontext-menu-enter-fullscreen = Abrir Ecrã Inteiro\ncontext-menu-volume-controls = Controlos de volume\n",
    "messages.ftl": "message-cant-embed =\n    O Ruffle não conseguiu abrir o Flash integrado nesta página.\n    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.\npanic-title = Algo correu mal :(\nmore-info = Mais informações\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar falha\nupdate-ruffle = Atualizar o Ruffle\nruffle-demo = Demonstração na Web\nruffle-desktop = Aplicação para Desktop\nruffle-wiki = Ver a Wiki do Ruffle\nenable-hardware-acceleration = Parece que a aceleração de hardware não está ativada. Mesmo que o Ruffle funcione, pode estar excessivamente lento. Descubra como ativar a aceleração de hardware seguindo este link.\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir num novo separador\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que executa o Ruffle no protocolo \"file:\".\n    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.\n    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.\nerror-javascript-config =\n    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.\n    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.\n    Pode ainda consultar a wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    O Ruffle falhou ao carregar o componente de ficheiro \".wasm\" necessário.\n    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.\n    Se o problema persistir, poderá querer usar a configuração \"publicPath\": consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Este servidor de web não suporta ficheiros \".wasm\" com o tipo MIME correto.\n    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo SWF do Flash\n    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.\n    Tente contactar o administrador do site para obter ajuda.\nerror-swf-cors =\n    O Ruffle falhou ao carregar o ficheiro Flash SWF.\n    Acesso a buscar foi provavelmente bloqueado pela política de CORS.\n    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    O Ruffle falhou ao carregar o componente de ficheiro \".wasm\" necessário.\n    O acesso a buscar foi provavelmente bloqueado pela política CORS.\n    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.\n    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.\n    Caso contrário, por favor contacte o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de ficheiro \".wasm\" necessário.\n    Para corrigir isso, tente abrir as opções do seu navegador, clicando em \"Privacidade, pesquisa e serviços\", rolando para baixo e desativando \"Melhore a sua segurança na web\".\n    Isto permitirá ao seu navegador carregar os ficheiros \".wasm\" necessários.\n    Se o problema persistir, talvez seja necessário usar um navegador diferente.\nerror-javascript-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.\n    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.\nerror-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).\nerror-csp-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    A Política de Segurança de Conteúdo deste servidor não permite que o componente \".wasm\" necessário seja executado.\n    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.\n    { $outdated ->\n        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).\n       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Tem a certeza de que quer apagar esta gravação?\nsave-reload-prompt =\n    A única forma de { $action ->\n        [delete] apagar\n       *[replace] substituir\n    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?\nsave-download = Descarregar\nsave-replace = Substituir\nsave-delete = Apagar\nsave-backup-all = Descarregar todas as gravações\n",
    "volume-controls.ftl": "volume-controls = Controlos de volume\nvolume-controls-mute = Silenciar\nvolume-controls-volume = Volume\n"
  },
  "ro-RO": {
    "context_menu.ftl": "context-menu-download-swf = Descarcă .swf\ncontext-menu-copy-debug-info = Copiază informațiile de depanare\ncontext-menu-open-save-manager = Deschide managerul de salvări\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Despre extensia Ruffle ({ $version })\n       *[other] Despre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ascunde acest meniu\ncontext-menu-exit-fullscreen = Ieși din ecranul complet\ncontext-menu-enter-fullscreen = Intră în ecran complet\ncontext-menu-volume-controls = Comenzi pentru volum\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nu a putut să ruleze Flash încorporat în această pagină.\n    Poți încerca să deschizi fișierul într-o filă separată, pentru a evita această problemă.\npanic-title = Ceva a mers prost :(\nmore-info = Mai multe informații\nrun-anyway = Rulează oricum\ncontinue = Continuă\nreport-bug = Raportează un bug\nupdate-ruffle = Actualizează Ruffle\nruffle-demo = Demo web\nruffle-desktop = Aplicație desktop\nruffle-wiki = Vezi wikiul Ruffle\nview-error-details = Vezi detaliile erorii\nopen-in-new-tab = Deschide într-o filă nouă\nclick-to-unmute = Dă click pentru a dezmuți\nerror-file-protocol =\n    Se pare că rulezi Ruffle pe protocolul „file:”.\n    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.\n    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.\nerror-javascript-config =\n    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.\n    Dacă ești administratorul serverului, te invităm să verifici detaliile erorii pentru a afla care parametru este defect.\n    De asemenea, poți consulta wikiul Ruffle pentru ajutor.\nerror-wasm-not-found =\n    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.\n    Dacă ești administratorul serverului, te rugăm să te asiguri că fișierul a fost încărcat corect.\n    Dacă problema persistă, poate fi necesar să folosești setarea „publicPath”: te rugăm să consulți wikiul Ruffle pentru ajutor.\nerror-wasm-mime-type =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.\n    Acest server web nu servește fișiere „.wasm” cu tipul MIME corect.\n    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.\nerror-swf-fetch =\n    Ruffle a eșuat la încărcarea fișierului SWF.\n    Motivul cel mai probabil este că fișierul nu mai există, deci Ruffle nu mai are ce să încarce.\n    Încearcă să contactezi administratorul site-ului web pentru ajutor.\nerror-swf-cors =\n    Ruffle a eșuat la încărcarea fișierului SWF.\n    Accesul de preluare a fost probabil blocat de politica CORS.\n    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.\nerror-wasm-cors =\n    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.\n    Accesul de preluare a fost probabil blocat de politica CORS.\n    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.\nerror-wasm-invalid =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.\n    Se pare că această pagină are fișiere lipsă sau nevalide pentru a rula Ruffle.\n    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.\nerror-wasm-download =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.\n    Acest lucru se poate rezolva adesea de la sine, așa că poți încerca să reîncarci pagina.\n    În caz contrar, te rugăm să contactezi administratorul site-ului web.\nerror-wasm-disabled-on-edge =\n    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.\n    Pentru a remedia acest lucru, încearcă să deschizi setările browserului, să faci clic pe „Confidențialitate, căutare și servicii”, să derulezi în jos și să dezactivezi „Îmbunătățiți-vă securitatea pe web”.\n    Acest lucru va permite browserului să încarce fișierele „.wasm” necesare.\n    Dacă problema persistă, este posibil să trebuiască să folosești un alt browser.\nerror-javascript-conflict =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.\n    Se pare că această pagină folosește cod JavaScript care intră în conflict cu Ruffle.\n    Dacă ești administratorul serverului, te invităm să încerci încărcarea fișierului pe o pagină goală.\nerror-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care ar putea ocoli problema (versiunea actuală este învechită: { $buildDate }).\nerror-csp-conflict =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.\n    Politica de securitate a conținutului a acestui server web nu permite rularea componentei „.wasm” necesare.\n    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.\nerror-unknown =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.\n    { $outdated ->\n        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este învechită: { $buildDate }).\n       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?\nsave-reload-prompt =\n    Singura cale de a { $action ->\n        [delete] șterge\n       *[replace] înlocui\n    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?\nsave-download = Descarcă\nsave-replace = Înlocuiește\nsave-delete = Șterge\n",
    "volume-controls.ftl": "volume-controls = Comenzi pentru volum\nvolume-controls-volume = Volum\n"
  },
  "ru-RU": {
    "context_menu.ftl": "context-menu-download-swf = Скачать .swf\ncontext-menu-copy-debug-info = Копировать отладочную информацию\ncontext-menu-open-save-manager = Менеджер сохранений\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] О расширении Ruffle ({ $version })\n       *[other] О Ruffle ({ $version })\n    }\ncontext-menu-hide = Скрыть это меню\ncontext-menu-exit-fullscreen = Оконный режим\ncontext-menu-enter-fullscreen = Полноэкранный режим\ncontext-menu-volume-controls = Громкость\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle не смог запустить Flash, используемый на этой странице.\n    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.\npanic-title = Что-то пошло не так :(\nmore-info = Подробнее\nrun-anyway = Всё равно запустить\ncontinue = Продолжить\nreport-bug = Сообщить об ошибке\nupdate-ruffle = Обновить Ruffle\nruffle-demo = Веб-демо\nruffle-desktop = Настольное приложение\nruffle-wiki = Открыть вики Ruffle\nenable-hardware-acceleration = Похоже, что аппаратное ускорение не включено. Хоть Ruffle и будет работать, он может быть неоправданно медленным. О том, как включить аппаратное ускорение, можно узнать, перейдя по ссылке.\nview-error-details = Сведения об ошибке\nopen-in-new-tab = Открыть в новой вкладке\nclick-to-unmute = Включить звук\nerror-file-protocol =\n    Похоже, что вы запускаете Ruffle по протоколу \"file:\".\n    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.\n    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.\nerror-javascript-config =\n    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.\n    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.\n    Вы также можете обратиться за помощью к вики Ruffle.\nerror-wasm-not-found =\n    Ruffle не удалось запустить необходимый компонент файла \".wasm\".\n    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.\n    Если проблема не устраняется, вам может потребоваться использовать настройку \"publicPath\": обратитесь к вики Ruffle.\nerror-wasm-mime-type =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Этот веб-сервер не предоставляет файлы \".wasm\" с правильным типом MIME.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-invalid-swf =\n    Ruffle не удалось обработать запрашиваемый файл.\n    Вероятнее всего, данный SWF повреждён или не является таковым.\nerror-swf-fetch =\n    Ruffle не удалось запустить SWF-файл Flash.\n    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.\n    Попробуйте связаться с администратором сайта для получения помощи.\nerror-swf-cors =\n    Ruffle не удалось запустить SWF-файл Flash.\n    Скорее всего, доступ к файлу был заблокирован политикой CORS.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-wasm-cors =\n    Ruffle не удалось загрузить необходимый компонент файла \".wasm\".\n    Скорее всего, доступ к файлу был заблокирован политикой CORS.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-wasm-invalid =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-wasm-download =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.\n    Если ошибка продолжает появляться, свяжитесь с администратором сайта.\nerror-wasm-disabled-on-edge =\n    Ruffle не удалось загрузить необходимый компонент файла \".wasm\".\n    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.\n    Если проблема осталась, вам может потребоваться другой браузер.\nerror-javascript-conflict =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.\n    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.\nerror-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).\nerror-csp-conflict =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска \".wasm\".\n    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.\nerror-unknown =\n    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.\n    { $outdated ->\n        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).\n       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Удалить этот файл сохранения?\nsave-reload-prompt =\n    Единственный способ { $action ->\n        [delete] удалить\n       *[replace] заменить\n    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?\nsave-download = Скачать\nsave-replace = Заменить\nsave-delete = Удалить\nsave-backup-all = Скачать все сохранения\n",
    "volume-controls.ftl": "volume-controls = Регулировка громкости\nvolume-controls-mute = Без звука\nvolume-controls-volume = Громкость\n"
  },
  "sk-SK": {
    "context_menu.ftl": "context-menu-download-swf = Stiahnuť .swf\ncontext-menu-copy-debug-info = Skopírovať debug info\ncontext-menu-open-save-manager = Otvoriť správcu uložení\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Ruffle rozšírení ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Skryť menu\ncontext-menu-exit-fullscreen = Ukončiť režim celej obrazovky\ncontext-menu-enter-fullscreen = Prejsť do režimu celej obrazovky\ncontext-menu-volume-controls = Ovládanie hlasitosti\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle nemohol spustiť Flash vložený na tejto stránke.\n    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.\npanic-title = Niečo sa pokazilo :(\nmore-info = Viac informácií\nrun-anyway = Spustiť aj tak\ncontinue = Pokračovať\nreport-bug = Nahlásiť chybu\nupdate-ruffle = Aktualizovať Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktopová aplikácia\nruffle-wiki = Zobraziť Ruffle Wiki\nenable-hardware-acceleration = Zdá sa, že hardvérová akcelerácia nie je povolená. Aj keď Ruffle funguje správne, môže byť neprimerane pomalý. Ako povoliť hardvérovú akceleráciu zistíte na tomto odkaze.\nview-error-details = Zobraziť podrobnosti o chybe\nopen-in-new-tab = Otvoriť na novej karte\nclick-to-unmute = Kliknutím zapnete zvuk\nerror-file-protocol =\n    Zdá sa, že používate Ruffle na protokole \"file:\".\n    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.\n    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.\nerror-javascript-config =\n    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.\n    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.\n    Pomoc môžete získať aj na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.\n    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.\n    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-invalid-swf =\n    Ruffle nemôže spracovať požadovaný súbor.\n    Najpravdepodobnejším dôvodom je, že požadovaný súbor nie je platným súborom SWF.\nerror-swf-fetch =\n    Ruffle sa nepodarilo načítať SWF súbor Flash.\n    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.\n    Skúste požiadať o pomoc správcu webovej lokality.\nerror-swf-cors =\n    Ruffle sa nepodarilo načítať SWF súbor Flash.\n    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.\n    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.\n    V opačnom prípade kontaktujte administrátora stránky.\nerror-wasm-disabled-on-edge =\n    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.\n    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.\n    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.\n    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.\nerror-javascript-conflict =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.\n    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.\nerror-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.\n    { $outdated ->\n         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).\n        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?\nsave-reload-prompt =\n    Jediný spôsob, ako { $action ->\n         [delete] vymazať\n        *[replace] nahradiť\n    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?\nsave-download = Stiahnuť\nsave-replace = Nahradiť\nsave-delete = Vymazať\nsave-backup-all = Stiahnuť všetky súbory s uloženými pozíciami\n",
    "volume-controls.ftl": "volume-controls = Ovládanie hlasitosti\nvolume-controls-mute = Stlmiť\nvolume-controls-volume = Hlasitosť\n"
  },
  "sv-SE": {
    "context_menu.ftl": "context-menu-download-swf = Ladda ner .swf\ncontext-menu-copy-debug-info = Kopiera felsökningsinfo\ncontext-menu-open-save-manager = Öppna Sparhanteraren\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Om Ruffle-tillägget ({ $version })\n       *[other] Om Ruffle ({ $version })\n    }\ncontext-menu-hide = Dölj denna meny\ncontext-menu-exit-fullscreen = Avsluta helskärm\ncontext-menu-enter-fullscreen = Helskärm\ncontext-menu-volume-controls = Ljudkontroller\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.\n    Du kan försöka öppna filen i en separat flik för att kringgå problemet.\npanic-title = Något gick fel :(\nmore-info = Mer info\nrun-anyway = Kör ändå\ncontinue = Fortsätt\nreport-bug = Rapportera Bugg\nupdate-ruffle = Uppdatera Ruffle\nruffle-demo = Webbdemo\nruffle-desktop = Skrivbordsprogram\nruffle-wiki = Se Ruffle-wiki\nenable-hardware-acceleration = Det verkar som att hårdvaruacceleration inte är på. Ruffle kan fortfarande fungera men kan vara orimligt långsam. Du kan ta reda på hur man sätter på hårdvaruacceleration genom att följa denna länk.\nview-error-details = Visa Felinformation\nopen-in-new-tab = Öppna i en ny flik\nclick-to-unmute = Klicka för ljud\nerror-file-protocol =\n    Det verkar som att du kör Ruffle på \"fil:\"-protokollet.\n    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.\n    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.\nerror-javascript-config =\n    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.\n    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.\n    Du kan också konsultera Ruffle-wikin för hjälp.\nerror-wasm-not-found =\n    Ruffle misslyckades ladda \".wasm\"-filkomponenten.\n    Om du är serveradministratören se till att filen har laddats upp korrekt.\n    Om problemet kvarstår kan du behöva använda inställningen \"publicPath\": konsultera vänligen Ruffle-wikin för hjälp.\nerror-wasm-mime-type =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Denna webbserver serverar inte \".wasm\"-filer med korrekt MIME-typ.\n    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.\nerror-invalid-swf =\n    Ruffle kan inte läsa den begärda filen.\n    Det mest sannolika skälet är att den begärda filen inte är en giltig SWF.\nerror-swf-fetch =\n    Ruffle misslyckades ladda SWF-filen.\n    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.\n    Försök att kontakta webbplatsadministratören för hjälp.\nerror-swf-cors =\n    Ruffle misslyckades ladda SWF-filen.\n    Åtkomst att hämta har sannolikt blockerats av CORS-policy.\n    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.\nerror-wasm-cors =\n    Ruffle misslyckades ladda \".wasm\"-filkomponenten.\n    Åtkomst att hämta har sannolikt blockerats av CORS-policy.\n    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.\nerror-wasm-invalid =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.\n    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.\nerror-wasm-download =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.\n    Kontakta annars vänligen webbplatsens administratör.\nerror-wasm-disabled-on-edge =\n    Ruffle misslyckades ladda \".wasm\"-filkomponenten.\n    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på \"Sekretess, sökning och tjänster\", bläddra ner och stäng av \"Förbättra säkerheten på webben\".\n    Detta tillåter din webbläsare att ladda \".wasm\"-filerna.\n    Om problemet kvarstår kan du behöva använda en annan webbläsare.\nerror-javascript-conflict =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.\n    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.\nerror-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).\nerror-csp-conflict =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Webbserverns Content Security Policy tillåter inte \".wasm\"-komponenten att köra.\n    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.\nerror-unknown =\n    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.\n    { $outdated ->\n        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).\n       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Är du säker på att du vill radera sparfilen?\nsave-reload-prompt =\n    Det enda sättet att { $action ->\n        [delete] radera\n       *[replace] ersätta\n    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?\nsave-download = Ladda ner\nsave-replace = Ersätt\nsave-delete = Radera\nsave-backup-all = Ladda ner alla sparfiler\n",
    "volume-controls.ftl": "volume-controls = Ljudkontroller\nvolume-controls-mute = Stäng av ljud\nvolume-controls-volume = Volym\n"
  },
  "tr-TR": {
    "context_menu.ftl": "context-menu-download-swf = İndir .swf\ncontext-menu-copy-debug-info = Hata ayıklama bilgisini kopyala\ncontext-menu-open-save-manager = Kayıt Yöneticisini Aç\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle Uzantısı Hakkında ({ $version })\n       *[other] Ruffle Hakkında ({ $version })\n    }\ncontext-menu-hide = Bu menüyü gizle\ncontext-menu-exit-fullscreen = Tam ekrandan çık\ncontext-menu-enter-fullscreen = Tam ekran yap\ncontext-menu-volume-controls = Ses kontrolleri\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.\n    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.\npanic-title = Bir şeyler yanlış gitti :(\nmore-info = Daha fazla bilgi\nrun-anyway = Yine de çalıştır\ncontinue = Devam et\nreport-bug = Hata Bildir\nupdate-ruffle = Ruffle'ı Güncelle\nruffle-demo = Ağ Demosu\nruffle-desktop = Masaüstü Uygulaması\nruffle-wiki = Ruffle Wiki'yi Görüntüle\nenable-hardware-acceleration = Görünüşe göre donanım hızlandırma etkin değil. Ruffle çalışabilir ancak fazlasıyla yavaş olabilir. Donanım hızlandırmayı nasıl etkinleştirebiliceğiniz hakkında bu linkten bilgi edinebilirsiniz.\nview-error-details = Hata Ayrıntılarını Görüntüle\nopen-in-new-tab = Yeni sekmede aç\nclick-to-unmute = Sesi açmak için tıklayın\nerror-file-protocol =\n    Görünüşe göre Ruffle'ı \"dosya:\" protokolünde çalıştırıyorsunuz.\n    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.\n    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.\nerror-javascript-config =\n    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.\n    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.\n    Yardım için Ruffle wiki'sine de başvurabilirsiniz.\nerror-wasm-not-found =\n    Ruffle gerekli \".wasm\" dosya bileşenini yükleyemedi.\n    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.\n    Sorun devam ederse, \"publicPath\" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.\nerror-wasm-mime-type =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Bu web sunucusu, doğru MIME tipinde \".wasm\" dosyaları sunmuyor.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.\nerror-invalid-swf =\n    Ruffle istenen dosyayı ayrıştıramıyor.\n    Bunun en olası nedeni, istenen dosyanın geçerli bir SWF olmamasıdır.\nerror-swf-fetch =\n    Ruffle, Flash SWF dosyasını yükleyemedi.\n    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.\n    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.\nerror-swf-cors =\n    Ruffle, Flash SWF dosyasını yükleyemedi.\n    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.\nerror-wasm-cors =\n    Ruffle gerekli \".wasm\" dosya bileşenini yükleyemedi.\n    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.\nerror-wasm-invalid =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.\nerror-wasm-download =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.\n    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.\nerror-wasm-disabled-on-edge =\n    Ruffle gerekli \".wasm\" dosya bileşenini yükleyemedi.\n    Bunu düzeltmek için tarayıcınızın ayarlarını açın, \"Gizlilik, arama ve hizmetler\"i tıklayın, aşağı kaydırın ve \"Web'de güvenliğinizi artırın\"ı kapatmayı deneyin.\n    Bu, tarayıcınızın gerekli \".wasm\" dosyalarını yüklemesine izin verecektir.\n    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.\nerror-javascript-conflict =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.\n    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.\nerror-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).\nerror-csp-conflict =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli \".wasm\" bileşeninin çalışmasına izin vermiyor.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.\nerror-unknown =\n    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.\n    { $outdated ->\n        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).\n       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?\nsave-reload-prompt =\n    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->\n        [delete] silmenin\n       *[replace] değiştirmenin\n    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?\nsave-download = İndir\nsave-replace = Değiştir\nsave-delete = Sil\nsave-backup-all = Tüm kayıt dosyalarını indir\n",
    "volume-controls.ftl": "volume-controls = Ses kontrolleri\nvolume-controls-mute = Sustur\nvolume-controls-volume = Ses\n"
  },
  "zh-CN": {
    "context_menu.ftl": "context-menu-download-swf = 下载 .swf\ncontext-menu-copy-debug-info = 复制调试信息\ncontext-menu-open-save-manager = 打开存档管理器\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] 关于 Ruffle 扩展 ({ $version })\n       *[other] 关于 Ruffle ({ $version })\n    }\ncontext-menu-hide = 隐藏此菜单\ncontext-menu-exit-fullscreen = 退出全屏\ncontext-menu-enter-fullscreen = 进入全屏\ncontext-menu-volume-controls = 音量控制\n",
    "messages.ftl": "message-cant-embed =\n    Ruffle 无法运行嵌入在此页面中的 Flash。\n    您可以尝试在单独的标签页中打开该文件，以回避此问题。\npanic-title = 出了些问题 :(\nmore-info = 更多信息\nrun-anyway = 仍然运行\ncontinue = 继续\nreport-bug = 反馈问题\nupdate-ruffle = 更新 Ruffle\nruffle-demo = 网页演示\nruffle-desktop = 桌面应用程序\nruffle-wiki = 查看 Ruffle Wiki\nenable-hardware-acceleration = 看起来硬件加速未启用。虽然 Ruffle 可能运行，但可能会非常慢。您可以通过此链接了解启用硬件加速的方法。\nview-error-details = 查看错误详情\nopen-in-new-tab = 在新标签页中打开\nclick-to-unmute = 点击取消静音\nerror-file-protocol =\n    看来您正在 \"file:\" 协议上使用 Ruffle。\n    由于浏览器以安全原因阻止许多功能，因此这不起作用。\n    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。\nerror-javascript-config =\n    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。\n    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。\n    您也可以查阅 Ruffle 的 Wiki 获取帮助。\nerror-wasm-not-found =\n    Ruffle 无法加载所需的 “.wasm” 文件组件。\n    如果您是服务器管理员，请确保文件已正确上传。\n    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。\nerror-wasm-mime-type =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    该网站服务器没有提供 \".asm” 文件正确的 MIME 类型。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-invalid-swf =\n    Ruffle无法解析请求的文件。\n    最有可能的原因是该请求文件不是一个合法的SWF文件。\nerror-swf-fetch =\n    Ruffle 无法加载 Flash SWF 文件。\n    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。\n    请尝试联系网站管理员寻求帮助。\nerror-swf-cors =\n    Ruffle 无法加载 Flash SWF 文件。\n    获取权限可能被 CORS 策略阻止。\n    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。\nerror-wasm-cors =\n    Ruffle 无法加载所需的“.wasm”文件组件。\n    获取权限可能被 CORS 策略阻止。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-wasm-invalid =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    这个页面似乎缺少文件来运行 Curl。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-wasm-download =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    这通常可以自行解决，因此您可以尝试重新加载页面。\n    否则请联系网站管理员。\nerror-wasm-disabled-on-edge =\n    Ruffle 无法加载所需的 “.wasm” 文件组件。\n    要解决这个问题，请尝试打开您的浏览器设置，单击\"隐私、搜索和服务\"，向下滚动并关闭\"增强 Web 安全性\"。\n    这将允许您的浏览器加载所需的 “.wasm” 文件。\n    如果问题仍然存在，您可能必须使用不同的浏览器。\nerror-javascript-conflict =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。\n    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。\nerror-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。\nerror-csp-conflict =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-unknown =\n    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。\n    { $outdated ->\n        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).\n       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！\n    }\n",
    "save-manager.ftl": "save-delete-prompt = 确定要删除此存档吗？\nsave-reload-prompt =\n    为了避免潜在的冲突，{ $action ->\n        [delete] 删除\n       *[replace] 替换\n    } 此存档文件需要重新加载当前内容。是否仍然继续？\nsave-download = 下载\nsave-replace = 替换\nsave-delete = 删除\nsave-backup-all = 下载所有存档文件\n",
    "volume-controls.ftl": "volume-controls = 音量控制\nvolume-controls-mute = 静音\nvolume-controls-volume = 音量\n"
  },
  "zh-TW": {
    "context_menu.ftl": "context-menu-download-swf = 下載SWF檔案\ncontext-menu-copy-debug-info = 複製除錯資訊\ncontext-menu-open-save-manager = 開啟存檔管理器\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] 關於Ruffle擴充功能 ({ $version })\n       *[other] 關於Ruffle ({ $version })\n    }\ncontext-menu-hide = 隱藏菜單\ncontext-menu-exit-fullscreen = 退出全螢幕\ncontext-menu-enter-fullscreen = 進入全螢幕\ncontext-menu-volume-controls = 音量控制\n",
    "messages.ftl": "message-cant-embed =\n    目前Ruffle沒辦法執行嵌入式Flash。\n    你可以在新分頁中開啟來解決這個問題。\npanic-title = 完蛋，出問題了 :(\nmore-info = 更多資訊\nrun-anyway = 直接執行\ncontinue = 繼續\nreport-bug = 回報BUG\nupdate-ruffle = 更新Ruffle\nruffle-demo = 網頁展示\nruffle-desktop = 桌面應用程式\nruffle-wiki = 查看Ruffle Wiki\nenable-hardware-acceleration =\n    看起來你的硬體加速沒有開啟，雖然Ruffle還可以執行，但是你會感覺到會很慢。\n    你可以在下方連結找到如何開啟硬體加速。\nview-error-details = 檢視錯誤詳細資料\nopen-in-new-tab = 開啟新增分頁\nclick-to-unmute = 點擊以取消靜音\nerror-file-protocol =\n    看起來你想要用Ruffle來執行\"file:\"的協議。\n    因為瀏覽器禁了很多功能以資安的理由來講。\n    我們建議你建立本地伺服器或著直接使用網頁展示或桌面應用程式。\nerror-javascript-config =\n    目前Ruffle遇到不正確的JavaScript配置。\n    如果你是伺服器管理員，我們建議你檢查哪個環節出錯。\n    或著你可以查詢Ruffle wiki得到需求幫助。\nerror-wasm-not-found =\n    目前Ruffle找不到\".wasm\"檔案。\n    如果你是伺服器管理員，確保檔案是否放對位置。\n    如果還是有問題的話，你要用\"publicPath\"來設定: 或著查詢Ruffle wiki得到需求幫助。\nerror-wasm-mime-type =\n    目前Ruffle初始化時遇到重大問題。\n    這網頁伺服器並沒有服務\".wasm\"檔案或正確的網際網路媒體類型。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-invalid-swf =\n    目前Ruffle無法讀取Flash的SWF檔案。\n    很有可能要讀取的檔案並一個不是有效的SWF。\nerror-swf-fetch =\n    目前Ruffle無法讀取Flash的SWF檔案。\n    很有可能要讀取的檔案不存在，所以Ruffle讀不到東西。\n    請嘗試溝通伺服器管理員得到需求幫助。\nerror-swf-cors =\n    目前Ruffle無法讀取Flash的SWF檔案。\n    看起來是使用權被跨來源資源共用機制被擋到了。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-wasm-cors =\n    目前Ruffle無法讀取\".wasm\"檔案。\n    看起來是使用權被跨來源資源共用機制被擋到了。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-wasm-invalid =\n    目前Ruffle初始化時遇到重大問題。\n    看起來這網頁有缺失檔案導致Ruffle無法運行。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-wasm-download =\n    目前Ruffle初始化時遇到重大問題。\n    這可以你自己解決，你只要重新整理就好了。\n    否則，請嘗試溝通伺服器管理員得到需求幫助。\nerror-wasm-disabled-on-edge =\n    目前Ruffle無法讀取\".wasm\"檔案。\n    要修正的話，打開你的瀏覽器設定，點選\"隱私權、搜尋與服務\"，把\"防止追蹤\"給關掉。\n    這樣一來你的瀏覽器會讀取需要的\".wasm\"檔案。\n    如果問題一直還在的話，你必須要換瀏覽器了。\nerror-javascript-conflict =\n    目前Ruffle初始化時遇到重大問題。\n    看起來這網頁使用的JavaScript會跟Ruffle起衝突。\n    如果你是伺服器管理員，我們建議你開個空白頁來測試。\nerror-javascript-conflict-outdated = 你也可以上傳最新版的Ruffle，說不定你要說的的問題已經不見了(現在使用的版本已經過時: { $buildDate })。\nerror-csp-conflict =\n    目前Ruffle初始化時遇到重大問題。\n    這網頁伺服器被跨來源資源共用機制禁止讀取\".wasm\"檔案。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-unknown =\n    目前Ruffle初始化要讀取Flash內容時遇到重大問題\n    { $outdated ->\n        [true] 如果你是伺服器管理員， 請上傳最新版的Ruffle(現在使用的版本已經過時: { $buildDate }).\n       *[false] 這不應該發生的，我們也很高興你告知bug!\n    }\n",
    "save-manager.ftl": "save-delete-prompt = 你確定要刪除這個存檔嗎？\nsave-reload-prompt =\n    唯一方法只有 { $action ->\n        [delete] 刪除\n       *[replace] 取代\n    } 這個存檔不會完全取代直到重新啟動. 你需要繼續嗎?\nsave-download = 下載\nsave-replace = 取代\nsave-delete = 刪除\nsave-backup-all = 下載所有存檔檔案。\n",
    "volume-controls.ftl": "volume-controls = 音量控制\nvolume-controls-mute = 靜音\nvolume-controls-volume = 音量\n"
  }
};
const bundles = {};
for (const [locale, files] of Object.entries(BUNDLED_TEXTS)) {
    const bundle = new FluentBundle(locale);
    if (files) {
        for (const [filename, text] of Object.entries(files)) {
            if (text) {
                for (const error of bundle.addResource(new FluentResource(text))) {
                    console.error(`Error in text for ${locale} ${filename}: ${error}`);
                }
            }
        }
    }
    bundles[locale] = bundle;
}
/**
 * Gets the localised text for the given locale and text ID.
 *
 * If the locale does not contain a text for this ID, it will return null.
 *
 * @param locale Locale to prefer when retrieving text, ie "en-US"
 * @param id ID of the text to retrieve
 * @param args Any arguments to use when creating the localised text
 * @returns Localised text or null if not found
 */
function tryText(locale, id, args) {
    const bundle = bundles[locale];
    if (bundle !== undefined) {
        const message = bundle.getMessage(id);
        if (message !== undefined && message.value) {
            return bundle.formatPattern(message.value, args);
        }
    }
    return null;
}
/**
 * Gets the localised text for the given text ID.
 *
 * The users preferred locales are used, in priority order, to find the given text.
 *
 * If no text is found for any preferred locale, en-US will be used.
 * If en-US does not contain a text for this ID, an error will be logged and the ID itself will be returned.
 *
 * @param id ID of the text to retrieve
 * @param args Any arguments to use when creating the localised text
 * @returns Localised text
 */
function i18n_text(id, args) {
    const locales = negotiateLanguages(navigator.languages, Object.keys(bundles), { defaultLocale: "en-US" });
    for (const i in locales) {
        const result = tryText(locales[i], id, args);
        if (result) {
            return result;
        }
    }
    console.error(`Unknown text key '${id}'`);
    return id;
}
/**
 * Gets the localised text for the given text ID, as <p>paragraphs</p> and HTML entities safely encoded.
 *
 * The users preferred locales are used, in priority order, to find the given text.
 *
 * If no text is found for any preferred locale, en-US will be used.
 * If en-US does not contain a text for this ID, an error will be logged and the ID itself will be returned.
 *
 * @param id ID of the text to retrieve
 * @param args Any arguments to use when creating the localised text
 * @returns Localised text with each line in a Paragraph element
 */
function textAsParagraphs(id, args) {
    const result = document.createElement("div");
    i18n_text(id, args)
        .split("\n")
        .forEach((line) => {
        const p = document.createElement("p");
        p.innerText = line;
        result.appendChild(p);
    });
    return result;
}

;// CONCATENATED MODULE: ../core/dist/shadow-template.js

/**
 * Insert all rules from array in the style sheet.
 *
 * @param sheet The style sheet to which to apply the rules.
 * @param rules An array of rules to be applied.
 */
function insertRules(sheet, rules) {
    for (const rule of rules) {
        try {
            sheet.insertRule(rule);
        }
        catch (err) {
            // Ignore unsupported rules
        }
    }
}
/**
 * The default styles to apply to the shadow template.
 * This function must be run after the shadow template is added to the page.
 *
 * @param styleElement The static style element to which to add the rules
 */
function applyStaticStyles(styleElement) {
    if (!styleElement.sheet) {
        return;
    }
    const rules = [
        `:host {
            all: initial;
            pointer-events: inherit;

            --ruffle-blue: #37528c;
            --ruffle-orange: #ffad33;

            display: inline-block;
            position: relative;
            /* Default width/height; this will get overridden by user styles/attributes. */
            width: 550px;
            height: 400px;
            font-family: Arial, sans-serif;
            letter-spacing: 0.4px;
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }`,
        /* Ruffle's width/height CSS interferes with Safari's fullscreen CSS. */
        /* Ensure that Safari's fullscreen mode actually fills the screen. */
        `:host(:-webkit-full-screen) {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }`,
        `.hidden {
            display: none !important;
        }`,
        /* All of these use the dimensions specified by the embed. */
        `#container,
        #play-button,
        #unmute-overlay,
        #unmute-overlay .background,
        #panic,
        #splash-screen,
        #message-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }`,
        `#container {
            overflow: hidden;
        }`,
        `#container canvas {
            width: 100%;
            height: 100%;
        }`,
        `#play-button,
        #unmute-overlay {
            cursor: pointer;
            display: none;
        }`,
        `#unmute-overlay .background {
            background: black;
            opacity: 0.7;
        }`,
        `#play-button .icon,
        #unmute-overlay .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            max-width: 384px;
            max-height: 384px;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }`,
        `#play-button:hover .icon,
        #unmute-overlay:hover .icon {
            opacity: 1;
        }`,
        /* Includes inverted colors from play button! */
        `#panic {
            font-size: 20px;
            text-align: center;
            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);
            color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
        }`,
        `#panic a {
            color: var(--ruffle-blue);
            font-weight: bold;
        }`,
        `#panic-title {
            font-size: xxx-large;
            font-weight: bold;
        }`,
        `#panic-body.details {
            flex: 0.9;
            margin: 0 10px;
        }`,
        `#panic-body textarea {
            width: 100%;
            height: 100%;
            resize: none;
        }`,
        `#panic ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
        }`,
        `#message-overlay {
            position: absolute;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            opacity: 1;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }`,
        `#message-overlay .message {
            text-align: center;
            max-height: 100%;
            max-width: 100%;
            padding: 5%;
            font-size: 20px;
        }`,
        `#message-overlay p {
            margin: 0.5em 0;
        }`,
        `#message-overlay .message div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1em;
        }`,
        `#message-overlay a, #message-overlay button {
            cursor: pointer;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            border: 2px solid var(--ruffle-orange);
            font-weight: bold;
            font-size: 1.25em;
            border-radius: 0.6em;
            padding: 10px;
            text-decoration: none;
            margin: 2% 0;
        }`,
        `#message-overlay a:hover, #message-overlay button:hover {
            background: #ffffff4c;
        }`,
        `#continue-btn {
             cursor: pointer;
             background: var(--ruffle-blue);
             color: var(--ruffle-orange);
             border: 2px solid var(--ruffle-orange);
             font-weight: bold;
             font-size: 20px;
             border-radius: 20px;
             padding: 10px;
        }`,
        `#continue-btn:hover {
            background: #ffffff4c;
        }`,
        `#context-menu-overlay {
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
        }`,
        `#context-menu {
            color: black;
            background: #fafafa;
            border: 1px solid gray;
            box-shadow: 0px 5px 10px -5px black;
            position: absolute;
            font-size: 14px;
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }`,
        `#context-menu .menu-item {
            padding: 5px 10px;
            cursor: pointer;
            color: black;
        }`,
        `#context-menu .menu-item.disabled {
            cursor: default;
            color: gray;
        }`,
        `#context-menu .menu-item:not(.disabled):hover {
            background: lightgray;
        }`,
        `#context-menu .menu-separator hr {
            border: none;
            border-bottom: 1px solid lightgray;
            margin: 2px;
        }`,
        `#splash-screen {
            display: flex;
            flex-direction: column;
            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
            align-items: center;
            justify-content: center;
        }`,
        `.loadbar {
            width: 100%;
            max-width: 316px;
            max-height: 10px;
            height: 20%;
            background: #253559;
        }`,
        `.loadbar-inner {
            width: 0px;
            max-width: 100%;
            height: 100%;
            background: var(--ruffle-orange);
        }`,
        `.logo {
            display: var(--logo-display, block);
            max-width: 380px;
            max-height: 150px;
        }`,
        `.loading-animation {
            max-width: 28px;
            max-height: 28px;
            margin-bottom: 2%;
            width: 10%;
            aspect-ratio: 1;
        }`,
        `.spinner {
            stroke-dasharray: 180;
            stroke-dashoffset: 135;
            stroke: var(--ruffle-orange);
            transform-origin: 50% 50%;
            animation: rotate 1.5s linear infinite;
        }`,
        `@keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }`,
        `#virtual-keyboard {
            position: absolute;
            opacity: 0;
            top: -100px;
            width: 1px;
            height: 1px;
        }`,
        `.modal {
            height: inherit;
            user-select: text;
        }`,
        `.modal-area {
            position: sticky;
            background: white;
            width: fit-content;
            padding: 16px 28px 16px 16px;
            border: 3px solid black;
            margin: auto;
        }`,
        `#modal-area {
            height: 500px;
            max-height: calc(100% - 38px);
            min-height: 80px;
        }`,
        `#restore-save {
            display: none;
        }`,
        `.replace-save {
            display: none;
        }`,
        `.save-option {
            display: inline-block;
            padding: 3px 10px;
            margin: 5px 2px;
            cursor: pointer;
            border-radius: 50px;
            background-color: var(--ruffle-blue);
            color: white;
        }`,
        `.close-modal {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: x-large;
        }`,
        `.general-save-options {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #888;
        }`,
        `#local-saves {
            border-collapse: collapse;
            overflow-y: auto;
            display: block;
            padding-right: 16px;
            height: calc(100% - 45px);
            min-height: 30px;
        }`,
        `#local-saves td {
            border-bottom: 1px solid #bbb;
            height: 30px;
        }`,
        `#local-saves tr td:nth-child(1) {
            padding-right: 1em;
            word-break: break-all;
        }`,
        `#local-saves tr:nth-child(even) {
            background-color: #f2f2f2;
        }`,
        `#video-holder {
            padding-top: 20px;
        }`,
        `#video-holder video {
            max-width: 100%;
            height: calc(100% - 58px);
        }`,
        `.slider-container {
            margin-top: 10px;
            display: flex;
            align-items: center;
        }`,
        `#volume-slider {
            margin-left: 10px;
            margin-right: 10px;
        }`,
        `#volume-slider-text {
            text-align: right;
            width: 28px;
        }`,
        `.acceleration-link {
            color: var(--ruffle-blue);
            text-decoration: none;
        }`,
        `.acceleration-link:hover {
            text-decoration: underline;
        }`,
    ];
    insertRules(styleElement.sheet, rules);
}
/**
 * Create and return a new HTML Element with the given arguments.
 *
 * @param tag The HTML tag name of the new element.
 * @param id The id of the new element.
 * @param className The class name of the new element.
 * @param attributes A hash of attributes for the new element.
 * @param ns The namespace of the new element.
 *
 * @returns The newly created Element
 */
function createElement(tag, id, className, attributes, ns) {
    const element = ns
        ? document.createElementNS(ns, tag)
        : document.createElement(tag);
    if (id) {
        element.id = id;
    }
    if (className && ns) {
        element.classList.add(className);
    }
    else if (className) {
        element.className = className;
    }
    if (attributes) {
        for (const [key, attr] of Object.entries(attributes)) {
            element.setAttribute(key, attr);
        }
    }
    return element;
}
/**
 * Create and return a new HTMLInputElement with the given arguments.
 *
 * @param htmlType The type of input element.
 * @param id The id of the input element.
 * @param min The min of the input element.
 * @param max The max of the input element.
 * @param step The step of the input element.
 *
 * @returns The newly created HTMLInputElement
 */
function createInputElement(htmlType, id, min, max, step) {
    const element = createElement("input", id);
    element.type = htmlType;
    if (min) {
        element.min = min;
    }
    if (max) {
        element.max = max;
    }
    if (step) {
        element.step = step;
    }
    return element;
}
/**
 * Create and return a new HTMLLabelElement with the given arguments.
 *
 * @param id The id of the label element.
 * @param htmlFor The for of the label element.
 *
 * @returns The newly created HTMLLabelElement
 */
function createLabelElement(id, htmlFor) {
    const element = createElement("label", id);
    element.htmlFor = htmlFor;
    return element;
}
/**
 *
 * @param parentElement The node to which to append a child element.
 * @param childElement The node to be appended to the parent element.
 */
function appendElement(parentElement, childElement) {
    parentElement.appendChild(childElement);
}
/**
 * The shadow template which is used to fill the actual Ruffle player element
 * on the page.
 *
 */
const ruffleShadowTemplate = document.createElement("template");
const svgns = "http://www.w3.org/2000/svg";
const staticStyles = createElement("style", "static-styles");
const dynamicStyles = createElement("style", "dynamic-styles");
const container = createElement("div", "container");
// Play button elements
const playButton = createElement("div", "play-button");
const playIcon = createElement("div", undefined, "icon");
const playSvg = createElement("svg", undefined, undefined, {
    xmlns: svgns,
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 250 250",
    width: "100%",
    height: "100%",
}, svgns);
const playDefs = createElement("defs", undefined, undefined, undefined, svgns);
const playLinearGradient = createElement("linearGradient", "a", undefined, {
    gradientUnits: "userSpaceOnUse",
    x1: "125",
    y1: "0",
    x2: "125",
    y2: "250",
    spreadMethod: "pad",
}, svgns);
const playStop0 = createElement("stop", undefined, undefined, {
    offset: "0%",
    "stop-color": "#FDA138",
}, svgns);
const playStop100 = createElement("stop", undefined, undefined, {
    offset: "100%",
    "stop-color": "#FD3A40",
}, svgns);
const playG = createElement("g", "b", undefined, undefined, svgns);
const playPath1 = createElement("path", undefined, undefined, {
    fill: "url(#a)",
    d: "M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z",
}, svgns);
const playPath2 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    d: "M87 55v140l100-70L87 55z",
}, svgns);
const playUse = document.createElementNS(svgns, "use");
playUse.href.baseVal = "#b";
// Unmute overlay elements
const unmuteOverlay = createElement("div", "unmute-overlay");
const background = createElement("div", undefined, "background");
const unmuteIcon = createElement("div", undefined, "icon");
const unmuteSvg = createElement("svg", "unmute-overlay-svg", undefined, {
    xmlns: svgns,
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 512 584",
    width: "100%",
    height: "100%",
    scale: "0.8",
}, svgns);
const unmutePath1 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    stroke: "#FFF",
    d: "m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z",
}, svgns);
const unmutePath2 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    stroke: "#FFF",
    d: "m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z",
}, svgns);
const unmutePath3 = createElement("path", undefined, undefined, {
    fill: "#FFF",
    stroke: "#FFF",
    d: "m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z",
}, svgns);
const unmuteText = createElement("text", "unmute-text", undefined, {
    x: "256",
    y: "560",
    "text-anchor": "middle",
    "font-size": "60px",
    fill: "#FFF",
    stroke: "#FFF",
}, svgns);
// Virtual keyboard element
const virtualKeyboard = createElement("input", "virtual-keyboard", undefined, {
    type: "text",
    autocapitalize: "off",
    autocomplete: "off",
    autocorrect: "off",
});
// Splash screen elements
const splashScreen = createElement("div", "splash-screen", "hidden");
const splashScreenSvg = createElement("svg", undefined, "logo", {
    xmlns: svgns,
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 380 150",
}, svgns);
const splashScreenG = createElement("g", undefined, undefined, undefined, svgns);
const splashScreenPath1 = createElement("path", undefined, undefined, {
    fill: "#966214",
    d: "M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z",
}, svgns);
const splashScreenPath2 = createElement("path", undefined, undefined, {
    fill: "var(--ruffle-orange)",
    d: "M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z",
}, svgns);
const loadingAnimation = createElement("svg", undefined, "loading-animation", {
    xmlns: svgns,
    viewBox: "0 0 66 66",
}, svgns);
const spinner = createElement("circle", undefined, "spinner", {
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30",
}, svgns);
const loadbar = createElement("div", undefined, "loadbar");
const loadbarInner = createElement("div", undefined, "loadbar-inner");
// Save manager elements
const saveManager = createElement("div", "save-manager", "modal hidden");
const saveModalArea = createElement("div", "modal-area", "modal-area");
const saveModalClose = createElement("span", undefined, "close-modal");
saveModalClose.textContent = "\u00D7";
const generalSaveOptions = createElement("div", undefined, "general-save-options");
const backupSaves = createElement("span", "backup-saves", "save-option");
const localSaves = createElement("table", "local-saves");
// Volume control elements
const volumeControlsModal = createElement("div", "volume-controls-modal", "modal hidden");
const volumeModalArea = createElement("div", undefined, "modal-area");
const volumeModalClose = createElement("span", undefined, "close-modal");
volumeModalClose.textContent = "\u00D7";
const volumeControls = createElement("div", "volume-controls");
const volumeControlsHeading = createElement("h2", "volume-controls-heading");
const muteCheckboxLabel = createLabelElement("mute-checkbox-label", "mute-checkbox");
const muteCheckbox = createInputElement("checkbox", "mute-checkbox");
const sliderContainer = createElement("div", undefined, "slider-container");
const volumeSliderLabel = createLabelElement("volume-slider-label", "volume-slider");
const volumeSlider = createInputElement("range", "volume-slider", "0", "100", "1");
const volumeSliderText = createElement("span", "volume-slider-text");
// Video modal elements
const videoModal = createElement("div", "video-modal", "modal hidden");
const videoModalArea = createElement("div", undefined, "modal-area");
const videoModalClose = createElement("span", undefined, "close-modal");
videoModalClose.textContent = "\u00D7";
const videoHolder = createElement("div", "video-holder");
// Hardware acceleration modal elements
const hardwareModal = createElement("div", "hardware-acceleration-modal", "modal hidden");
const hardwareModalArea = createElement("div", undefined, "modal-area");
const hardwareModalClose = createElement("span", undefined, "close-modal");
hardwareModalClose.textContent = "\u00D7";
const hardwareModalLink = document.createElement("a");
hardwareModalLink.href =
    "https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration";
hardwareModalLink.target = "_blank";
hardwareModalLink.className = "acceleration-link";
hardwareModalLink.textContent = i18n_text("enable-hardware-acceleration");
// Context menu overlay elements
const contextMenuOverlay = createElement("div", "context-menu-overlay", "hidden");
const contextMenu = createElement("ul", "context-menu");
appendElement(ruffleShadowTemplate.content, staticStyles);
appendElement(ruffleShadowTemplate.content, dynamicStyles);
appendElement(ruffleShadowTemplate.content, container);
// Play button append
appendElement(container, playButton);
appendElement(playButton, playIcon);
appendElement(playIcon, playSvg);
appendElement(playSvg, playDefs);
appendElement(playDefs, playLinearGradient);
appendElement(playLinearGradient, playStop0);
appendElement(playLinearGradient, playStop100);
appendElement(playDefs, playG);
appendElement(playG, playPath1);
appendElement(playG, playPath2);
appendElement(playSvg, playUse);
// Unmute overlay append
appendElement(container, unmuteOverlay);
appendElement(unmuteOverlay, background);
appendElement(unmuteOverlay, unmuteIcon);
appendElement(unmuteIcon, unmuteSvg);
appendElement(unmuteSvg, unmutePath1);
appendElement(unmuteSvg, unmutePath2);
appendElement(unmuteSvg, unmutePath3);
appendElement(unmuteSvg, unmuteText);
// Virtual keyboard append
appendElement(container, virtualKeyboard);
// Splash screen append
appendElement(ruffleShadowTemplate.content, splashScreen);
appendElement(splashScreen, splashScreenSvg);
appendElement(splashScreenSvg, splashScreenG);
appendElement(splashScreenG, splashScreenPath1);
appendElement(splashScreenG, splashScreenPath2);
appendElement(splashScreen, loadingAnimation);
appendElement(loadingAnimation, spinner);
appendElement(splashScreen, loadbar);
appendElement(loadbar, loadbarInner);
// Save manager append
appendElement(ruffleShadowTemplate.content, saveManager);
appendElement(saveManager, saveModalArea);
appendElement(saveModalArea, saveModalClose);
appendElement(saveModalArea, generalSaveOptions);
appendElement(generalSaveOptions, backupSaves);
appendElement(saveModalArea, localSaves);
// Volume control append
appendElement(ruffleShadowTemplate.content, volumeControlsModal);
appendElement(volumeControlsModal, volumeModalArea);
appendElement(volumeModalArea, volumeModalClose);
appendElement(volumeModalArea, volumeControls);
appendElement(volumeControls, volumeControlsHeading);
appendElement(volumeControls, muteCheckboxLabel);
appendElement(volumeControls, muteCheckbox);
appendElement(volumeControls, sliderContainer);
appendElement(sliderContainer, volumeSliderLabel);
appendElement(sliderContainer, volumeSlider);
appendElement(sliderContainer, volumeSliderText);
// Video modal append
appendElement(ruffleShadowTemplate.content, videoModal);
appendElement(videoModal, videoModalArea);
appendElement(videoModalArea, videoModalClose);
appendElement(videoModalArea, videoHolder);
// Hardware acceleration modal append
appendElement(ruffleShadowTemplate.content, hardwareModal);
appendElement(hardwareModal, hardwareModalArea);
appendElement(hardwareModalArea, hardwareModalClose);
appendElement(hardwareModalArea, hardwareModalLink);
// Context menu overlay append
appendElement(ruffleShadowTemplate.content, contextMenuOverlay);
appendElement(contextMenuOverlay, contextMenu);

;// CONCATENATED MODULE: ../core/dist/register-element.js
/**
 * Number of times to try defining a custom element.
 */
const MAX_TRIES = 999;
/**
 * A mapping between internal element IDs and DOM element IDs.
 */
const privateRegistry = {};
/**
 * Lookup a previously registered custom element.
 *
 * The returned object will have `name`, `class`, and `internal_name`
 * properties listing the external name, implementing class, and internal name
 * respectively.
 *
 * @param elementName The internal element name, previously used to
 * register the element with the private registry.
 * @returns The element data in the registry, or null if there is
 * no such element name registered.
 */
function lookupElement(elementName) {
    const data = privateRegistry[elementName];
    if (data !== undefined) {
        return {
            internalName: elementName,
            name: data.name,
            class: data.class,
        };
    }
    else {
        return null;
    }
}
/**
 * Register a custom element.
 *
 * This function is designed to be tolerant of naming conflicts. If
 * registration fails, we modify the name, and try again. As a result, this
 * function returns the real element name to use.
 *
 * Calling this function multiple times will *not* register multiple elements.
 * We store a private registry mapping internal element names to DOM names.
 * Thus, the proper way to use this function is to call it every time you are
 * about to work with custom element names.
 *
 * @param elementName The internal name of the element.
 * @param elementClass The class of the element.
 *
 * You must call this function with the same class every time.
 * @returns The actual element name.
 * @throws Throws an error if two different elements were registered with the
 * same internal name.
 */
function registerElement(elementName, elementClass) {
    const registration = privateRegistry[elementName];
    if (registration !== undefined) {
        if (registration.class !== elementClass) {
            throw new Error("Internal naming conflict on " + elementName);
        }
        else {
            return registration.name;
        }
    }
    let tries = 0;
    if (window.customElements !== undefined) {
        while (tries < MAX_TRIES) {
            let externalName = elementName;
            if (tries > 0) {
                externalName = externalName + "-" + tries;
            }
            if (window.customElements.get(externalName) !== undefined) {
                tries += 1;
                continue;
            }
            else {
                window.customElements.define(externalName, elementClass);
            }
            privateRegistry[elementName] = {
                class: elementClass,
                name: externalName,
                internalName: elementName,
            };
            return externalName;
        }
    }
    throw new Error("Failed to assign custom element " + elementName);
}

;// CONCATENATED MODULE: ../core/dist/load-options.js
/**
 * Represents the various types of auto-play behaviours that are supported.
 */
var AutoPlay;
(function (AutoPlay) {
    /**
     * The player should automatically play the movie as soon as it is loaded.
     *
     * If the browser does not support automatic audio, the movie will begin
     * muted.
     */
    AutoPlay["On"] = "on";
    /**
     * The player should not attempt to automatically play the movie.
     *
     * This will leave it to the user or API to actually play when appropriate.
     */
    AutoPlay["Off"] = "off";
    /**
     * The player should automatically play the movie as soon as it is deemed
     * "appropriate" to do so.
     *
     * The exact behaviour depends on the browser, but commonly requires some
     * form of user interaction on the page in order to allow auto playing videos
     * with sound.
     */
    AutoPlay["Auto"] = "auto";
})(AutoPlay || (AutoPlay = {}));
/**
 * Controls whether the content is letterboxed or pillarboxed when the
 * player's aspect ratio does not match the movie's aspect ratio.
 *
 * When letterboxed, black bars will be rendered around the exterior
 * margins of the content.
 */
var Letterbox;
(function (Letterbox) {
    /**
     * The content will never be letterboxed.
     */
    Letterbox["Off"] = "off";
    /**
     * The content will only be letterboxed if the content is running fullscreen.
     */
    Letterbox["Fullscreen"] = "fullscreen";
    /**
     * The content will always be letterboxed.
     */
    Letterbox["On"] = "on";
})(Letterbox || (Letterbox = {}));
/**
 * When the player is muted, this controls whether or not Ruffle will show a
 * "click to unmute" overlay on top of the movie.
 */
var UnmuteOverlay;
(function (UnmuteOverlay) {
    /**
     * Show an overlay explaining that the movie is muted.
     */
    UnmuteOverlay["Visible"] = "visible";
    /**
     * Don't show an overlay and pretend that everything is fine.
     */
    UnmuteOverlay["Hidden"] = "hidden";
})(UnmuteOverlay || (UnmuteOverlay = {}));
/**
 * Console logging level.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "error";
    LogLevel["Warn"] = "warn";
    LogLevel["Info"] = "info";
    LogLevel["Debug"] = "debug";
    LogLevel["Trace"] = "trace";
})(LogLevel || (LogLevel = {}));
/**
 * The window mode of a Ruffle player.
 */
var WindowMode;
(function (WindowMode) {
    /**
     * The Flash content is rendered in its own window and layering is done with the browser's
     * default behavior.
     *
     * In Ruffle, this mode functions like `WindowMode::Opaque` and will layer the Flash content
     * together with other HTML elements.
     */
    WindowMode["Window"] = "window";
    /**
     * The Flash content is layered together with other HTML elements, and the stage color is
     * opaque. Content can render above or below Ruffle based on CSS rendering order.
     */
    WindowMode["Opaque"] = "opaque";
    /**
     * The Flash content is layered together with other HTML elements, and the SWF stage color is
     * transparent. Content beneath Ruffle will be visible through transparent areas.
     */
    WindowMode["Transparent"] = "transparent";
    /**
     * Request compositing with hardware acceleration when possible.
     * This mode has no effect in Ruffle and will function like `WindowMode.Opaque`.
     */
    WindowMode["Direct"] = "direct";
    /**
     * Request a direct rendering path, bypassing browser compositing when possible.
     * This mode has no effect in Ruffle and will function like `WindowMode::Opaque`.
     */
    WindowMode["Gpu"] = "gpu";
})(WindowMode || (WindowMode = {}));
/**
 * The render backend of a Ruffle player.
 *
 * The available backends may change in future releases.
 */
var RenderBackend;
(function (RenderBackend) {
    /**
     * An [in-development API](https://caniuse.com/webgpu) that will be preferred if available in the future.
     * Should behave the same as wgpu-webgl, except with lower overhead and thus better performance.
     */
    RenderBackend["WebGpu"] = "webgpu";
    /**
     * The most featureful and currently preferred backend.
     * Rendering is done the same way as in the desktop app, then translated to WebGL on-the-fly.
     */
    RenderBackend["WgpuWebgl"] = "wgpu-webgl";
    /**
     * A vanilla WebGL backend. Was the default backend until the start of 2023,
     * but is now used as a fallback for devices that do not support WebGL 2.
     * Supports fewer features and has a faster initialization time;
     * may be useful for content that does not need advanced features like bitmap drawing or blend modes.
     */
    RenderBackend["Webgl"] = "webgl";
    /**
     * The slowest and most basic backend, used as a fallback when all else fails.
     * However, this is currently the only backend that accurately scales hairline strokes.
     * If you notice excessively thick strokes in specific content,
     * you may want to use the canvas renderer for that content until the issue is resolved.
     */
    RenderBackend["Canvas"] = "canvas";
})(RenderBackend || (RenderBackend = {}));
/**
 * Represents the various context menu options that are supported.
 */
var ContextMenu;
(function (ContextMenu) {
    /**
     * The context menu should appear when right-clicking or long-pressing
     * the Ruffle instance.
     */
    ContextMenu["On"] = "on";
    /**
     * The context menu should only appear when right-clicking
     * the Ruffle instance.
     */
    ContextMenu["RightClickOnly"] = "rightClickOnly";
    /**
     * The context menu should not appear when right-clicking or long-pressing
     * the Ruffle instance.
     */
    ContextMenu["Off"] = "off";
})(ContextMenu || (ContextMenu = {}));
/**
 * Represents the player runtime to emulate.
 */
var PlayerRuntime;
(function (PlayerRuntime) {
    /**
     * Emulate Adobe AIR.
     */
    PlayerRuntime["AIR"] = "air";
    /**
     * Emulate Adobe Flash Player.
     */
    PlayerRuntime["FlashPlayer"] = "flashPlayer";
})(PlayerRuntime || (PlayerRuntime = {}));
/**
 * The handling mode of links opening a new website.
 */
var OpenURLMode;
(function (OpenURLMode) {
    /**
     * Allow all links to open a new website.
     */
    OpenURLMode["Allow"] = "allow";
    /**
     * A confirmation dialog opens with every link trying to open a new website.
     */
    OpenURLMode["Confirm"] = "confirm";
    /**
     * Deny all links to open a new website.
     */
    OpenURLMode["Deny"] = "deny";
})(OpenURLMode || (OpenURLMode = {}));
/**
 * The networking API access mode of the Ruffle player.
 */
var NetworkingAccessMode;
(function (NetworkingAccessMode) {
    /**
     * All networking APIs are permitted in the SWF file.
     */
    NetworkingAccessMode["All"] = "all";
    /**
     * The SWF file may not call browser navigation or browser interaction APIs.
     *
     * The APIs navigateToURL(), fscommand() and ExternalInterface.call() are
     * prevented in this mode.
     */
    NetworkingAccessMode["Internal"] = "internal";
    /**
     * The SWF file may not call browser navigation or browser interaction APIs
     * and it cannot use any SWF-to-SWF communication APIs.
     *
     * Additionally to the ones in internal mode, the APIs sendToURL(),
     * FileReference.download(), FileReference.upload(), Loader.load(),
     * LocalConnection.connect(), LocalConnection.send(), NetConnection.connect(),
     * NetStream.play(), Security.loadPolicyFile(), SharedObject.getLocal(),
     * SharedObject.getRemote(), Socket.connect(), Sound.load(), URLLoader.load(),
     * URLStream.load() and XMLSocket.connect() are prevented in this mode.
     *
     * This mode is not implemented yet.
     */
    NetworkingAccessMode["None"] = "none";
})(NetworkingAccessMode || (NetworkingAccessMode = {}));

;// CONCATENATED MODULE: ../core/dist/config.js

const DEFAULT_CONFIG = {
    allowScriptAccess: false,
    parameters: {},
    autoplay: AutoPlay.Auto,
    backgroundColor: null,
    letterbox: Letterbox.Fullscreen,
    unmuteOverlay: UnmuteOverlay.Visible,
    upgradeToHttps: true,
    compatibilityRules: true,
    favorFlash: true,
    warnOnUnsupportedContent: true,
    logLevel: LogLevel.Error,
    showSwfDownload: false,
    contextMenu: ContextMenu.On,
    // Backwards-compatibility option
    preloader: true,
    splashScreen: true,
    maxExecutionDuration: 15,
    base: null,
    menu: true,
    allowFullscreen: false,
    salign: "",
    forceAlign: false,
    quality: "high",
    scale: "showAll",
    forceScale: false,
    frameRate: null,
    wmode: WindowMode.Window,
    publicPath: null,
    polyfills: true,
    playerVersion: null,
    preferredRenderer: null,
    openUrlMode: OpenURLMode.Allow,
    allowNetworking: NetworkingAccessMode.All,
    openInNewTab: null,
    socketProxy: [],
    fontSources: [],
    defaultFonts: {},
    credentialAllowList: [],
    playerRuntime: PlayerRuntime.FlashPlayer,
};

;// CONCATENATED MODULE: ../core/dist/flash-identifiers.js
const FLASH_MIMETYPE = "application/x-shockwave-flash";
const FUTURESPLASH_MIMETYPE = "application/futuresplash";
const FLASH7_AND_8_MIMETYPE = "application/x-shockwave-flash2-preview";
const FLASH_MOVIE_MIMETYPE = "application/vnd.adobe.flash.movie";
const FLASH_ACTIVEX_CLASSID = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";

;// CONCATENATED MODULE: ../core/dist/swf-utils.js

/**
 * Returns whether the given filename ends in a known Flash extension.
 *
 * @param filename The filename to test.
 * @returns True if the filename is a Flash movie (swf or spl).
 */
function isSwfFilename(filename) {
    let pathname = "";
    try {
        // A base URL is required if `filename` is a relative URL, but we don't need to detect the real URL origin.
        pathname = new URL(filename, "https://example.com").pathname;
    }
    catch (err) {
        // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
    }
    if (pathname && pathname.length >= 4) {
        const extension = pathname.slice(-4).toLowerCase();
        if (extension === ".swf" || extension === ".spl") {
            return true;
        }
    }
    return false;
}
/**
 * Returns whether the given MIME type is a known Flash type.
 *
 * @param mimeType The MIME type to test.
 * @param allowExtraMimes Whether extra MIME types, non-Flash related, are allowed.
 * @returns True if the MIME type is a Flash MIME type.
 */
function isSwfMimeType(mimeType, allowExtraMimes) {
    mimeType = mimeType.toLowerCase();
    switch (mimeType) {
        case FLASH_MIMETYPE.toLowerCase():
        case FUTURESPLASH_MIMETYPE.toLowerCase():
        case FLASH7_AND_8_MIMETYPE.toLowerCase():
        case FLASH_MOVIE_MIMETYPE.toLowerCase():
            return true;
        default:
            if (allowExtraMimes) {
                // Allow extra MIME types to improve detection of Flash content.
                // Extension: Some sites (e.g. swfchan.net) might (wrongly?) serve files with octet-stream.
                // Polyfill: Other sites (e.g. #11050) might use octet-stream when defining an <embed> tag.
                switch (mimeType) {
                    case "application/octet-stream":
                    case "binary/octet-stream":
                        return true;
                }
            }
    }
    return false;
}
/**
 * Returns whether the given filename and MIME type resolve as a Flash content.
 *
 * @param filename The filename to test.
 * @param mimeType The MIME type to test.
 * @returns True if the given arguments resolve as a Flash content.
 */
function isSwf(filename, mimeType) {
    const isSwfExtension = isSwfFilename(filename);
    if (!mimeType) {
        // If no MIME type is specified (null or empty string), returns whether the movie ends in a known Flash extension.
        return isSwfExtension;
    }
    else {
        return isSwfMimeType(mimeType, isSwfExtension);
    }
}
/**
 * Create a filename to save a downloaded SWF into.
 *
 * @param swfUrl The URL of the SWF file.
 * @returns The filename the SWF file can be saved at.
 */
function swfFileName(swfUrl) {
    const pathName = swfUrl.pathname;
    const name = pathName.substring(pathName.lastIndexOf("/") + 1);
    return name;
}

;// CONCATENATED MODULE: ../core/dist/build-info.js
/**
 * Stores build information. The string literals are replaces at compile time by `set_version.js`.
 */
const buildInfo = {
    versionNumber: "0.1.0",
    versionName: "nightly 2024-06-18",
    versionChannel: "nightly",
    buildDate: "2024-06-18T00:05:59.325Z",
    commitHash: "c8fdc59bfc537a7b89f903f1bffb1150fd22e7d2",
};

;// CONCATENATED MODULE: ../core/dist/internal/builder.js
/**
 * Checks if the given value is explicitly `T` (not null, not undefined)
 *
 * @param value The value to test
 * @returns true if the value isn't null or undefined
 */
function isExplicit(value) {
    return value !== null && value !== undefined;
}
/**
 * Configures the given RuffleInstanceBuilder for the general options provided.
 *
 * This is the translation layer between what we allow users to provide through e.g. `window.RufflePlayer.config`,
 * which is quite relaxed and may evolve over time,
 * and the actual values we accept inside Rust (which is quite strict).
 *
 * This allows us to change the rust side at will, and without needing to worry about backwards compatibility, parsing, etc.
 *
 * @param builder The builder to set the options on
 * @param config The options to apply
 */
function configureBuilder(builder, config) {
    // Guard things for being explicitly set, so that we don't need to specify defaults in yet another place...
    if (isExplicit(config.allowScriptAccess)) {
        builder.setAllowScriptAccess(config.allowScriptAccess);
    }
    if (isExplicit(config.backgroundColor)) {
        builder.setBackgroundColor(parseColor(config.backgroundColor));
    }
    if (isExplicit(config.upgradeToHttps)) {
        builder.setUpgradeToHttps(config.upgradeToHttps);
    }
    if (isExplicit(config.compatibilityRules)) {
        builder.setCompatibilityRules(config.compatibilityRules);
    }
    if (isExplicit(config.letterbox)) {
        builder.setLetterbox(config.letterbox.toLowerCase());
    }
    if (isExplicit(config.base)) {
        builder.setBaseUrl(config.base);
    }
    if (isExplicit(config.menu)) {
        builder.setShowMenu(config.menu);
    }
    if (isExplicit(config.allowFullscreen)) {
        builder.setAllowFullscreen(config.allowFullscreen);
    }
    if (isExplicit(config.salign)) {
        builder.setStageAlign(config.salign.toLowerCase());
    }
    if (isExplicit(config.forceAlign)) {
        builder.setForceAlign(config.forceAlign);
    }
    if (isExplicit(config.quality)) {
        builder.setQuality(config.quality.toLowerCase());
    }
    else if (isMobileOrTablet()) {
        console.log("Running on a mobile device; defaulting to low quality");
        builder.setQuality("low");
    }
    if (isExplicit(config.scale)) {
        builder.setScale(config.scale.toLowerCase());
    }
    if (isExplicit(config.forceScale)) {
        builder.setForceScale(config.forceScale);
    }
    if (isExplicit(config.frameRate)) {
        builder.setFrameRate(config.frameRate);
    }
    if (isExplicit(config.wmode)) {
        builder.setWmode(config.wmode);
    }
    if (isExplicit(config.logLevel)) {
        builder.setLogLevel(config.logLevel);
    }
    if (isExplicit(config.maxExecutionDuration)) {
        builder.setMaxExecutionDuration(parseDuration(config.maxExecutionDuration));
    }
    if (isExplicit(config.playerVersion)) {
        builder.setPlayerVersion(config.playerVersion);
    }
    if (isExplicit(config.preferredRenderer)) {
        builder.setPreferredRenderer(config.preferredRenderer);
    }
    if (isExplicit(config.openUrlMode)) {
        builder.setOpenUrlMode(config.openUrlMode.toLowerCase());
    }
    if (isExplicit(config.allowNetworking)) {
        builder.setAllowNetworking(config.allowNetworking.toLowerCase());
    }
    if (isExplicit(config.credentialAllowList)) {
        builder.setCredentialAllowList(config.credentialAllowList);
    }
    if (isExplicit(config.playerRuntime)) {
        builder.setPlayerRuntime(config.playerRuntime);
    }
    if (isExplicit(config.socketProxy)) {
        for (const proxy of config.socketProxy) {
            builder.addSocketProxy(proxy.host, proxy.port, proxy.proxyUrl);
        }
    }
}
/**
 * Parses a color into an RGB value.
 *
 * @param color The color string to parse
 * @returns A valid RGB number, or undefined if invalid
 */
function parseColor(color) {
    if (color.startsWith("#")) {
        color = color.substring(1);
    }
    if (color.length < 6) {
        return undefined;
    }
    let result = 0;
    for (let i = 0; i < 6; i++) {
        const digit = parseInt(color[i], 16);
        if (!isNaN(digit)) {
            result = (result << 4) | digit;
        }
        else {
            result = result << 4;
        }
    }
    return result;
}
/**
 * Parses a duration into number of seconds.
 *
 * @param value The duration to parse
 * @returns A valid number of seconds
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function parseDuration(value) {
    if (typeof value === "number") {
        return value;
    }
    return value.secs;
}
/**
 * Very bad way to guess if we're running on a tablet/mobile.
 *
 * @returns True if we believe this may be a mobile or tablet device
 */
function isMobileOrTablet() {
    // noinspection JSDeprecatedSymbols
    return typeof window.orientation !== "undefined";
}

;// CONCATENATED MODULE: ../core/dist/ruffle-player.js










const RUFFLE_ORIGIN = "https://ruffle.rs";
const DIMENSION_REGEX = /^\s*(\d+(\.\d+)?(%)?)/;
let isAudioContextUnmuted = false;
var PanicError;
(function (PanicError) {
    PanicError[PanicError["Unknown"] = 0] = "Unknown";
    PanicError[PanicError["CSPConflict"] = 1] = "CSPConflict";
    PanicError[PanicError["FileProtocol"] = 2] = "FileProtocol";
    PanicError[PanicError["InvalidWasm"] = 3] = "InvalidWasm";
    PanicError[PanicError["JavascriptConfiguration"] = 4] = "JavascriptConfiguration";
    PanicError[PanicError["JavascriptConflict"] = 5] = "JavascriptConflict";
    PanicError[PanicError["WasmCors"] = 6] = "WasmCors";
    PanicError[PanicError["WasmDownload"] = 7] = "WasmDownload";
    PanicError[PanicError["WasmMimeType"] = 8] = "WasmMimeType";
    PanicError[PanicError["WasmNotFound"] = 9] = "WasmNotFound";
    PanicError[PanicError["WasmDisabledMicrosoftEdge"] = 10] = "WasmDisabledMicrosoftEdge";
    PanicError[PanicError["InvalidSwf"] = 11] = "InvalidSwf";
    PanicError[PanicError["SwfFetchError"] = 12] = "SwfFetchError";
    PanicError[PanicError["SwfCors"] = 13] = "SwfCors";
})(PanicError || (PanicError = {}));
/**
 * Converts arbitrary input to an easy to use record object.
 *
 * @param parameters Parameters to sanitize
 * @returns A sanitized map of param name to param value
 */
function sanitizeParameters(parameters) {
    if (parameters === null || parameters === undefined) {
        return {};
    }
    if (!(parameters instanceof URLSearchParams)) {
        parameters = new URLSearchParams(parameters);
    }
    const output = {};
    for (const [key, value] of parameters) {
        // Every value must be type of string
        output[key] = value.toString();
    }
    return output;
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distanceTo(other) {
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
class PanicLinkInfo {
    constructor(url = "#", label = i18n_text("view-error-details")) {
        this.url = url;
        this.label = label;
    }
}
/**
 * The ruffle player element that should be inserted onto the page.
 *
 * This element will represent the rendered and intractable flash movie.
 */
class RufflePlayer extends HTMLElement {
    /**
     * Indicates the readiness of the playing movie.
     *
     * @returns The `ReadyState` of the player.
     */
    get readyState() {
        return this._readyState;
    }
    /**
     * The metadata of the playing movie (such as movie width and height).
     * These are inherent properties stored in the SWF file and are not affected by runtime changes.
     * For example, `metadata.width` is the width of the SWF file, and not the width of the Ruffle player.
     *
     * @returns The metadata of the movie, or `null` if the movie metadata has not yet loaded.
     */
    get metadata() {
        return this._metadata;
    }
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     */
    constructor() {
        super();
        // Allows the user to permanently disable the context menu.
        this.contextMenuForceDisabled = false;
        // Whether the most recent pointer event was from a touch (or pen).
        this.isTouch = false;
        // Whether this device sends contextmenu events.
        // Set to true when a contextmenu event is seen.
        this.contextMenuSupported = false;
        this.panicked = false;
        this.rendererDebugInfo = "";
        this.longPressTimer = null;
        this.pointerDownPosition = null;
        this.pointerMoveMaxDistance = 0;
        /**
         * Any configuration that should apply to this specific player.
         * This will be defaulted with any global configuration.
         */
        this.config = {};
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(ruffleShadowTemplate.content.cloneNode(true));
        this.dynamicStyles = (this.shadow.getElementById("dynamic-styles"));
        this.staticStyles = (this.shadow.getElementById("static-styles"));
        this.container = this.shadow.getElementById("container");
        this.playButton = this.shadow.getElementById("play-button");
        this.playButton.addEventListener("click", () => this.play());
        this.unmuteOverlay = this.shadow.getElementById("unmute-overlay");
        this.splashScreen = this.shadow.getElementById("splash-screen");
        this.virtualKeyboard = (this.shadow.getElementById("virtual-keyboard"));
        this.virtualKeyboard.addEventListener("input", this.virtualKeyboardInput.bind(this));
        this.saveManager = (this.shadow.getElementById("save-manager"));
        this.videoModal = (this.shadow.getElementById("video-modal"));
        this.hardwareAccelerationModal = (this.shadow.getElementById("hardware-acceleration-modal"));
        this.volumeControls = (this.shadow.getElementById("volume-controls-modal"));
        this.addModalJavaScript(this.saveManager);
        this.addModalJavaScript(this.volumeControls);
        this.addModalJavaScript(this.videoModal);
        this.addModalJavaScript(this.hardwareAccelerationModal);
        this.volumeSettings = new VolumeControls(false, 100);
        this.addVolumeControlsJavaScript(this.volumeControls);
        const backupSaves = (this.saveManager.querySelector("#backup-saves"));
        if (backupSaves) {
            backupSaves.addEventListener("click", this.backupSaves.bind(this));
            backupSaves.innerText = i18n_text("save-backup-all");
        }
        const unmuteSvg = (this.unmuteOverlay.querySelector("#unmute-overlay-svg"));
        if (unmuteSvg) {
            const unmuteText = (unmuteSvg.querySelector("#unmute-text"));
            unmuteText.textContent = i18n_text("click-to-unmute");
        }
        this.contextMenuOverlay = this.shadow.getElementById("context-menu-overlay");
        this.contextMenuElement = this.shadow.getElementById("context-menu");
        document.documentElement.addEventListener("pointerdown", this.checkIfTouch.bind(this));
        this.addEventListener("contextmenu", this.showContextMenu.bind(this));
        this.container.addEventListener("pointerdown", this.pointerDown.bind(this));
        this.container.addEventListener("pointermove", this.checkLongPressMovement.bind(this));
        this.container.addEventListener("pointerup", this.checkLongPress.bind(this));
        this.container.addEventListener("pointercancel", this.clearLongPressTimer.bind(this));
        this.addEventListener("fullscreenchange", this.fullScreenChange.bind(this));
        this.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this));
        this.instance = null;
        this.newZipWriter = null;
        this.onFSCommand = null;
        this._readyState = ReadyState.HaveNothing;
        this._metadata = null;
        this.lastActivePlayingState = false;
        this.setupPauseOnTabHidden();
    }
    /**
     * Add functions to open and close a modal.
     *
     * @param modalElement The element containing the modal.
     */
    addModalJavaScript(modalElement) {
        const videoHolder = modalElement.querySelector("#video-holder");
        this.container.addEventListener("click", () => {
            modalElement.classList.add("hidden");
            if (videoHolder) {
                videoHolder.textContent = "";
            }
        });
        const modalArea = modalElement.querySelector(".modal-area");
        if (modalArea) {
            modalArea.addEventListener("click", (event) => event.stopPropagation());
        }
        const closeModal = modalElement.querySelector(".close-modal");
        if (closeModal) {
            closeModal.addEventListener("click", () => {
                modalElement.classList.add("hidden");
                if (videoHolder) {
                    videoHolder.textContent = "";
                }
            });
        }
    }
    /**
     * Add the volume control texts, set the controls to the current settings and
     * add event listeners to update the settings and controls when being changed.
     *
     * @param volumeControlsModal The element containing the volume controls modal.
     */
    addVolumeControlsJavaScript(volumeControlsModal) {
        const muteCheckbox = volumeControlsModal.querySelector("#mute-checkbox");
        const volumeSlider = volumeControlsModal.querySelector("#volume-slider");
        const volumeSliderText = volumeControlsModal.querySelector("#volume-slider-text");
        const heading = volumeControlsModal.querySelector("#volume-controls-heading");
        const muteCheckboxLabel = volumeControlsModal.querySelector("#mute-checkbox-label");
        const volumeSliderLabel = volumeControlsModal.querySelector("#volume-slider-label");
        // Add the texts.
        heading.textContent = i18n_text("volume-controls");
        muteCheckboxLabel.textContent = i18n_text("volume-controls-mute");
        volumeSliderLabel.textContent = i18n_text("volume-controls-volume");
        // Set the controls to the current settings.
        muteCheckbox.checked = this.volumeSettings.isMuted;
        volumeSlider.disabled = muteCheckbox.checked;
        volumeSlider.valueAsNumber = this.volumeSettings.volume;
        volumeSliderLabel.style.color = muteCheckbox.checked ? "grey" : "black";
        volumeSliderText.style.color = muteCheckbox.checked ? "grey" : "black";
        volumeSliderText.textContent = String(this.volumeSettings.volume);
        // Add event listeners to update the settings and controls.
        muteCheckbox.addEventListener("change", () => {
            var _a;
            volumeSlider.disabled = muteCheckbox.checked;
            volumeSliderLabel.style.color = muteCheckbox.checked
                ? "grey"
                : "black";
            volumeSliderText.style.color = muteCheckbox.checked
                ? "grey"
                : "black";
            this.volumeSettings.isMuted = muteCheckbox.checked;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_volume(this.volumeSettings.get_volume());
        });
        volumeSlider.addEventListener("input", () => {
            var _a;
            volumeSliderText.textContent = volumeSlider.value;
            this.volumeSettings.volume = volumeSlider.valueAsNumber;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_volume(this.volumeSettings.get_volume());
        });
    }
    /**
     * Setup event listener to detect when tab is not active to pause instance playback.
     * this.instance.play() is called when the tab becomes visible only if the
     * the instance was not paused before tab became hidden.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
     * @ignore
     * @internal
     */
    setupPauseOnTabHidden() {
        document.addEventListener("visibilitychange", () => {
            if (!this.instance) {
                return;
            }
            // Tab just changed to be inactive. Record whether instance was playing.
            if (document.hidden) {
                this.lastActivePlayingState = this.instance.is_playing();
                this.instance.pause();
            }
            // Play only if instance was playing originally.
            if (!document.hidden && this.lastActivePlayingState === true) {
                this.instance.play();
            }
        }, false);
    }
    /**
     * Polyfill of height getter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    get height() {
        return this.getAttribute("height") || "";
    }
    /**
     * Polyfill of height setter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    set height(height) {
        this.setAttribute("height", height);
    }
    /**
     * Polyfill of width getter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    get width() {
        return this.getAttribute("width") || "";
    }
    /**
     * Polyfill of width setter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    set width(widthVal) {
        this.setAttribute("width", widthVal);
    }
    /**
     * Polyfill of type getter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    get type() {
        return this.getAttribute("type") || "";
    }
    /**
     * Polyfill of type setter for HTMLEmbedElement and HTMLObjectElement
     *
     * @ignore
     * @internal
     */
    set type(typeVal) {
        this.setAttribute("type", typeVal);
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        this.updateStyles();
        applyStaticStyles(this.staticStyles);
    }
    /**
     * @ignore
     * @internal
     */
    static get observedAttributes() {
        return ["width", "height"];
    }
    /**
     * @ignore
     * @internal
     */
    attributeChangedCallback(name, _oldValue, _newValue) {
        if (name === "width" || name === "height") {
            this.updateStyles();
        }
    }
    /**
     * @ignore
     * @internal
     */
    disconnectedCallback() {
        this.destroy();
    }
    /**
     * Updates the internal shadow DOM to reflect any set attributes from
     * this element.
     */
    updateStyles() {
        if (this.dynamicStyles.sheet) {
            if (this.dynamicStyles.sheet.cssRules) {
                for (let i = this.dynamicStyles.sheet.cssRules.length - 1; i >= 0; i--) {
                    this.dynamicStyles.sheet.deleteRule(i);
                }
            }
            const widthAttr = this.attributes.getNamedItem("width");
            if (widthAttr !== undefined && widthAttr !== null) {
                const width = RufflePlayer.htmlDimensionToCssDimension(widthAttr.value);
                if (width !== null) {
                    this.dynamicStyles.sheet.insertRule(`:host { width: ${width}; }`);
                }
            }
            const heightAttr = this.attributes.getNamedItem("height");
            if (heightAttr !== undefined && heightAttr !== null) {
                const height = RufflePlayer.htmlDimensionToCssDimension(heightAttr.value);
                if (height !== null) {
                    this.dynamicStyles.sheet.insertRule(`:host { height: ${height}; }`);
                }
            }
        }
    }
    /**
     * Determine if this element is the fallback content of another Ruffle
     * player.
     *
     * This heuristic assumes Ruffle objects will never use their fallback
     * content. If this changes, then this code also needs to change.
     *
     * @private
     */
    isUnusedFallbackObject() {
        const element = lookupElement("ruffle-object");
        if (element !== null) {
            let parent = this.parentNode;
            while (parent !== document && parent !== null) {
                if (parent.nodeName === element.name) {
                    return true;
                }
                parent = parent.parentNode;
            }
        }
        return false;
    }
    /**
     * Ensure a fresh Ruffle instance is ready on this player before continuing.
     *
     * @throws Any exceptions generated by loading Ruffle Core will be logged
     * and passed on.
     *
     * @private
     */
    async ensureFreshInstance() {
        var _a, _b, _c;
        this.destroy();
        if (this.loadedConfig &&
            this.loadedConfig.splashScreen !== false &&
            this.loadedConfig.preloader !== false) {
            this.showSplashScreen();
        }
        if (this.loadedConfig && this.loadedConfig.preloader === false) {
            console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration.");
        }
        if (this.loadedConfig &&
            this.loadedConfig.maxExecutionDuration &&
            typeof this.loadedConfig.maxExecutionDuration !== "number") {
            console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, " +
                "please use a single number indicating seconds instead. For instance '15' instead of " +
                "'{secs: 15, nanos: 0}'.");
        }
        if (this.loadedConfig &&
            typeof this.loadedConfig.contextMenu === "boolean") {
            console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');
        }
        const [builder, zipWriterClass] = await createRuffleBuilder(this.loadedConfig || {}, this.onRuffleDownloadProgress.bind(this)).catch((e) => {
            console.error(`Serious error loading Ruffle: ${e}`);
            // Serious duck typing. In error conditions, let's not make assumptions.
            if (window.location.protocol === "file:") {
                e.ruffleIndexError = PanicError.FileProtocol;
            }
            else {
                e.ruffleIndexError = PanicError.WasmNotFound;
                const message = String(e.message).toLowerCase();
                if (message.includes("mime")) {
                    e.ruffleIndexError = PanicError.WasmMimeType;
                }
                else if (message.includes("networkerror") ||
                    message.includes("failed to fetch")) {
                    e.ruffleIndexError = PanicError.WasmCors;
                }
                else if (message.includes("disallowed by embedder")) {
                    e.ruffleIndexError = PanicError.CSPConflict;
                }
                else if (e.name === "CompileError") {
                    e.ruffleIndexError = PanicError.InvalidWasm;
                }
                else if (message.includes("could not download wasm module") &&
                    e.name === "TypeError") {
                    e.ruffleIndexError = PanicError.WasmDownload;
                }
                else if (e.name === "TypeError") {
                    e.ruffleIndexError = PanicError.JavascriptConflict;
                }
                else if (navigator.userAgent.includes("Edg") &&
                    message.includes("webassembly is not defined")) {
                    // Microsoft Edge detection.
                    e.ruffleIndexError = PanicError.WasmDisabledMicrosoftEdge;
                }
            }
            this.panic(e);
            throw e;
        });
        this.newZipWriter = zipWriterClass;
        configureBuilder(builder, this.loadedConfig || {});
        builder.setVolume(this.volumeSettings.get_volume());
        if ((_a = this.loadedConfig) === null || _a === void 0 ? void 0 : _a.fontSources) {
            for (const url of this.loadedConfig.fontSources) {
                try {
                    const response = await fetch(url);
                    builder.addFont(url, new Uint8Array(await response.arrayBuffer()));
                }
                catch (error) {
                    console.warn(`Couldn't download font source from ${url}`, error);
                }
            }
        }
        for (const key in (_b = this.loadedConfig) === null || _b === void 0 ? void 0 : _b.defaultFonts) {
            const names = this.loadedConfig.defaultFonts[key];
            if (names) {
                builder.setDefaultFont(key, names);
            }
        }
        this.instance = await builder.build(this.container, this).catch((e) => {
            console.error(`Serious error loading Ruffle: ${e}`);
            this.panic(e);
            throw e;
        });
        this.rendererDebugInfo = this.instance.renderer_debug_info();
        if (this.rendererDebugInfo.includes("Adapter Device Type: Cpu")) {
            this.container.addEventListener("mouseover", this.openHardwareAccelerationModal.bind(this), {
                once: true,
            });
        }
        const actuallyUsedRendererName = this.instance.renderer_name();
        const constructor = this.instance.constructor;
        console.log("%c" +
            "New Ruffle instance created (Version: " +
            buildInfo.versionName +
            " | WebAssembly extensions: " +
            (constructor.is_wasm_simd_used() ? "ON" : "OFF") +
            " | Used renderer: " +
            (actuallyUsedRendererName !== null && actuallyUsedRendererName !== void 0 ? actuallyUsedRendererName : "") +
            ")", "background: #37528C; color: #FFAD33");
        // In Firefox, AudioContext.state is always "suspended" when the object has just been created.
        // It may change by itself to "running" some milliseconds later. So we need to wait a little
        // bit before checking if autoplay is supported and applying the instance config.
        if (this.audioState() !== "running") {
            this.container.style.visibility = "hidden";
            await new Promise((resolve) => {
                window.setTimeout(() => {
                    resolve();
                }, 200);
            });
            this.container.style.visibility = "";
        }
        this.unmuteAudioContext();
        // On Android, the virtual keyboard needs to be dismissed as otherwise it re-focuses when clicking elsewhere
        if (navigator.userAgent.toLowerCase().includes("android")) {
            this.container.addEventListener("click", () => this.virtualKeyboard.blur());
        }
        // Treat invalid values as `AutoPlay.Auto`.
        if (!this.loadedConfig ||
            this.loadedConfig.autoplay === AutoPlay.On ||
            (this.loadedConfig.autoplay !== AutoPlay.Off &&
                this.audioState() === "running")) {
            this.play();
            if (this.audioState() !== "running") {
                // Treat invalid values as `UnmuteOverlay.Visible`.
                if (!this.loadedConfig ||
                    this.loadedConfig.unmuteOverlay !== UnmuteOverlay.Hidden) {
                    this.unmuteOverlay.style.display = "block";
                }
                this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                    once: true,
                });
                const audioContext = (_c = this.instance) === null || _c === void 0 ? void 0 : _c.audio_context();
                if (audioContext) {
                    audioContext.onstatechange = () => {
                        if (audioContext.state === "running") {
                            this.unmuteOverlayClicked();
                        }
                        audioContext.onstatechange = null;
                    };
                }
            }
        }
        else {
            this.playButton.style.display = "block";
        }
    }
    /**
     * Uploads the splash screen progress bar.
     *
     * @param bytesLoaded The size of the Ruffle WebAssembly file downloaded so far.
     * @param bytesTotal The total size of the Ruffle WebAssembly file.
     */
    onRuffleDownloadProgress(bytesLoaded, bytesTotal) {
        const loadBar = (this.splashScreen.querySelector(".loadbar-inner"));
        const outerLoadbar = (this.splashScreen.querySelector(".loadbar"));
        if (Number.isNaN(bytesTotal)) {
            if (outerLoadbar) {
                outerLoadbar.style.display = "none";
            }
        }
        else {
            loadBar.style.width = `${100.0 * (bytesLoaded / bytesTotal)}%`;
        }
    }
    /**
     * Destroys the currently running instance of Ruffle.
     */
    destroy() {
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
            this._metadata = null;
            this._readyState = ReadyState.HaveNothing;
            console.log("Ruffle instance destroyed.");
        }
    }
    checkOptions(options) {
        if (typeof options === "string") {
            return { url: options };
        }
        const check = (condition, message) => {
            if (!condition) {
                const error = new TypeError(message);
                error.ruffleIndexError = PanicError.JavascriptConfiguration;
                this.panic(error);
                throw error;
            }
        };
        check(options !== null && typeof options === "object", "Argument 0 must be a string or object");
        check("url" in options || "data" in options, "Argument 0 must contain a `url` or `data` key");
        check(!("url" in options) || typeof options.url === "string", "`url` must be a string");
        return options;
    }
    /**
     * Reloads the player, as if you called {@link RufflePlayer.load} with the same config as the last time it was called.
     *
     * If this player has never been loaded, this method will return an error.
     */
    async reload() {
        if (this.loadedConfig) {
            await this.load(this.loadedConfig);
        }
        else {
            throw new Error("Cannot reload if load wasn't first called");
        }
    }
    /**
     * Loads a specified movie into this player.
     *
     * This will replace any existing movie that may be playing.
     *
     * @param options One of the following:
     * - A URL, passed as a string, which will load a URL with default options.
     * - A [[URLLoadOptions]] object, to load a URL with options.
     * - A [[DataLoadOptions]] object, to load data with options.
     * The options, if provided, must only contain values provided for this specific movie.
     * They must not contain any default values, since those would overwrite other configuration
     * settings with a lower priority (e.g. the general RufflePlayer config).
     * @param isPolyfillElement Whether the element is a polyfilled Flash element or not.
     * This is used to determine a default value of the configuration.
     *
     * The options will be defaulted by the [[config]] field, which itself
     * is defaulted by a global `window.RufflePlayer.config`.
     */
    async load(options, isPolyfillElement = false) {
        var _a, _b;
        options = this.checkOptions(options);
        if (!this.isConnected || this.isUnusedFallbackObject()) {
            console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");
            return;
        }
        if (isFallbackElement(this)) {
            // Silently fail on attempt to play a Ruffle element inside a specific node.
            return;
        }
        try {
            this.loadedConfig = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, DEFAULT_CONFIG), (isPolyfillElement && "url" in options
                ? {
                    allowScriptAccess: parseAllowScriptAccess("samedomain", options.url),
                }
                : {})), ((_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {})), this.config), options);
            // Pre-emptively set background color of container while Ruffle/SWF loads.
            if (this.loadedConfig.backgroundColor &&
                this.loadedConfig.wmode !== WindowMode.Transparent) {
                this.container.style.backgroundColor =
                    this.loadedConfig.backgroundColor;
            }
            await this.ensureFreshInstance();
            if ("url" in options) {
                console.log(`Loading SWF file ${options.url}`);
                this.swfUrl = new URL(options.url, document.baseURI);
                this.instance.stream_from(this.swfUrl.href, sanitizeParameters(options.parameters));
            }
            else if ("data" in options) {
                console.log("Loading SWF data");
                delete this.swfUrl;
                this.instance.load_data(new Uint8Array(options.data), sanitizeParameters(options.parameters), options.swfFileName || "movie.swf");
            }
        }
        catch (e) {
            console.error(`Serious error occurred loading SWF file: ${e}`);
            const err = new Error(e);
            if (err.message.includes("Error parsing config")) {
                err.ruffleIndexError = PanicError.JavascriptConfiguration;
            }
            this.panic(err);
            throw err;
        }
    }
    /**
     * Plays or resumes the movie.
     */
    play() {
        if (this.instance) {
            this.instance.play();
            this.playButton.style.display = "none";
        }
    }
    /**
     * Whether this player is currently playing.
     *
     * @returns True if this player is playing, false if it's paused or hasn't started yet.
     */
    get isPlaying() {
        if (this.instance) {
            return this.instance.is_playing();
        }
        return false;
    }
    /**
     * Returns the master volume of the player.
     *
     * The volume is linear and not adapted for logarithmic hearing.
     *
     * @returns The volume. 1.0 is 100% volume.
     */
    get volume() {
        if (this.instance) {
            return this.instance.volume();
        }
        return 1.0;
    }
    /**
     * Sets the master volume of the player.
     *
     * The volume should be linear and not adapted for logarithmic hearing.
     *
     * @param value The volume. 1.0 is 100% volume.
     */
    set volume(value) {
        if (this.instance) {
            this.instance.set_volume(value);
        }
    }
    /**
     * Checks if this player is allowed to be fullscreen by the browser.
     *
     * @returns True if you may call [[enterFullscreen]].
     */
    get fullscreenEnabled() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }
    /**
     * Checks if this player is currently fullscreen inside the browser.
     *
     * @returns True if it is fullscreen.
     */
    get isFullscreen() {
        return ((document.fullscreenElement || document.webkitFullscreenElement) ===
            this);
    }
    /**
     * Exported function that requests the browser to change the fullscreen state if
     * it is allowed.
     *
     * @param isFull Whether to set to fullscreen or return to normal.
     */
    setFullscreen(isFull) {
        if (this.fullscreenEnabled && isFull !== this.isFullscreen) {
            if (isFull) {
                this.enterFullscreen();
            }
            else {
                this.exitFullscreen();
            }
        }
    }
    /**
     * Requests the browser to make this player fullscreen.
     *
     * This is not guaranteed to succeed, please check [[fullscreenEnabled]] first.
     */
    enterFullscreen() {
        const options = {
            navigationUI: "hide",
        };
        if (this.requestFullscreen) {
            this.requestFullscreen(options);
        }
        else if (this.webkitRequestFullscreen) {
            this.webkitRequestFullscreen(options);
        }
        else if (this.webkitRequestFullScreen) {
            this.webkitRequestFullScreen(options);
        }
    }
    /**
     * Requests the browser to no longer make this player fullscreen.
     */
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    /**
     * Called when entering / leaving fullscreen.
     */
    fullScreenChange() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_fullscreen(this.isFullscreen);
    }
    /**
     * Prompt the user to download a file.
     *
     * @param blob The content to download.
     * @param name The name to give the file.
     */
    saveFile(blob, name) {
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobURL;
        link.download = name;
        link.click();
        URL.revokeObjectURL(blobURL);
    }
    checkIfTouch(event) {
        this.isTouch =
            event.pointerType === "touch" || event.pointerType === "pen";
    }
    base64ToArray(bytesBase64) {
        const byteString = atob(bytesBase64);
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return ia;
    }
    base64ToBlob(bytesBase64, mimeString) {
        const ab = this.base64ToArray(bytesBase64);
        const blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    /**
     * @returns If the string represent a base-64 encoded SOL file
     * Check if string is a base-64 encoded SOL file
     * @param solData The base-64 encoded SOL string
     */
    isB64SOL(solData) {
        try {
            const decodedData = atob(solData);
            return decodedData.slice(6, 10) === "TCSO";
        }
        catch (e) {
            return false;
        }
    }
    confirmReloadSave(solKey, b64SolData, replace) {
        if (this.isB64SOL(b64SolData)) {
            if (localStorage[solKey]) {
                if (!replace) {
                    const confirmDelete = confirm(i18n_text("save-delete-prompt"));
                    if (!confirmDelete) {
                        return;
                    }
                }
                const swfPath = this.swfUrl ? this.swfUrl.pathname : "";
                const swfHost = this.swfUrl
                    ? this.swfUrl.hostname
                    : document.location.hostname;
                const savePath = solKey.split("/").slice(1, -1).join("/");
                if (swfPath.includes(savePath) && solKey.startsWith(swfHost)) {
                    const confirmReload = confirm(i18n_text("save-reload-prompt", {
                        action: replace ? "replace" : "delete",
                    }));
                    if (confirmReload && this.loadedConfig) {
                        this.destroy();
                        replace
                            ? localStorage.setItem(solKey, b64SolData)
                            : localStorage.removeItem(solKey);
                        this.reload();
                        this.populateSaves();
                        this.saveManager.classList.add("hidden");
                    }
                    return;
                }
                replace
                    ? localStorage.setItem(solKey, b64SolData)
                    : localStorage.removeItem(solKey);
                this.populateSaves();
                this.saveManager.classList.add("hidden");
            }
        }
    }
    /**
     * Replace save from SOL file.
     *
     * @param event The change event fired
     * @param solKey The localStorage save file key
     */
    replaceSOL(event, solKey) {
        const fileInput = event.target;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            if (reader.result && typeof reader.result === "string") {
                const b64Regex = new RegExp("data:.*;base64,");
                const b64SolData = reader.result.replace(b64Regex, "");
                this.confirmReloadSave(solKey, b64SolData, true);
            }
        });
        if (fileInput &&
            fileInput.files &&
            fileInput.files.length > 0 &&
            fileInput.files[0]) {
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
    /**
     * Delete local save.
     *
     * @param key The key to remove from local storage
     */
    deleteSave(key) {
        const b64SolData = localStorage.getItem(key);
        if (b64SolData) {
            this.confirmReloadSave(key, b64SolData, false);
        }
    }
    /**
     * Puts the local save SOL file keys in a table.
     */
    populateSaves() {
        const saveTable = this.saveManager.querySelector("#local-saves");
        if (!saveTable) {
            return;
        }
        try {
            if (localStorage === null) {
                return;
            }
        }
        catch (e) {
            return;
        }
        saveTable.textContent = "";
        Object.keys(localStorage).forEach((key) => {
            const solName = key.split("/").pop();
            const solData = localStorage.getItem(key);
            if (solName && solData && this.isB64SOL(solData)) {
                const row = document.createElement("TR");
                const keyCol = document.createElement("TD");
                keyCol.textContent = solName;
                keyCol.title = key;
                const downloadCol = document.createElement("TD");
                const downloadSpan = document.createElement("SPAN");
                downloadSpan.textContent = i18n_text("save-download");
                downloadSpan.className = "save-option";
                downloadSpan.addEventListener("click", () => {
                    const blob = this.base64ToBlob(solData, "application/octet-stream");
                    this.saveFile(blob, solName + ".sol");
                });
                downloadCol.appendChild(downloadSpan);
                const replaceCol = document.createElement("TD");
                const replaceInput = (document.createElement("INPUT"));
                replaceInput.type = "file";
                replaceInput.accept = ".sol";
                replaceInput.className = "replace-save";
                replaceInput.id = "replace-save-" + key;
                const replaceLabel = (document.createElement("LABEL"));
                replaceLabel.htmlFor = "replace-save-" + key;
                replaceLabel.textContent = i18n_text("save-replace");
                replaceLabel.className = "save-option";
                replaceInput.addEventListener("change", (event) => this.replaceSOL(event, key));
                replaceCol.appendChild(replaceInput);
                replaceCol.appendChild(replaceLabel);
                const deleteCol = document.createElement("TD");
                const deleteSpan = document.createElement("SPAN");
                deleteSpan.textContent = i18n_text("save-delete");
                deleteSpan.className = "save-option";
                deleteSpan.addEventListener("click", () => this.deleteSave(key));
                deleteCol.appendChild(deleteSpan);
                row.appendChild(keyCol);
                row.appendChild(downloadCol);
                row.appendChild(replaceCol);
                row.appendChild(deleteCol);
                saveTable.appendChild(row);
            }
        });
    }
    /**
     * Gets the local save information as SOL files and downloads them as a single ZIP file.
     */
    async backupSaves() {
        const zip = this.newZipWriter();
        const duplicateNames = [];
        Object.keys(localStorage).forEach((key) => {
            let solName = String(key.split("/").pop());
            const solData = localStorage.getItem(key);
            if (solData && this.isB64SOL(solData)) {
                const array = this.base64ToArray(solData);
                const duplicate = duplicateNames.filter((value) => value === solName).length;
                duplicateNames.push(solName);
                if (duplicate > 0) {
                    solName += ` (${duplicate + 1})`;
                }
                zip.addFile(solName + ".sol", array);
            }
        });
        const blob = new Blob([zip.save()], { type: "application/zip" });
        this.saveFile(blob, "saves.zip");
    }
    /**
     * Opens the hardware acceleration info modal.
     */
    openHardwareAccelerationModal() {
        this.hardwareAccelerationModal.classList.remove("hidden");
    }
    /**
     * Opens the save manager.
     */
    openSaveManager() {
        this.saveManager.classList.remove("hidden");
    }
    /**
     * Opens the volume controls.
     */
    openVolumeControls() {
        this.volumeControls.classList.remove("hidden");
    }
    /**
     * Fetches the loaded SWF and downloads it.
     */
    async downloadSwf() {
        try {
            if (this.swfUrl) {
                console.log("Downloading SWF: " + this.swfUrl);
                const response = await fetch(this.swfUrl.href);
                if (!response.ok) {
                    console.error("SWF download failed");
                    return;
                }
                const blob = await response.blob();
                this.saveFile(blob, swfFileName(this.swfUrl));
            }
            else {
                console.error("SWF download failed");
            }
        }
        catch (err) {
            console.error("SWF download failed");
        }
    }
    virtualKeyboardInput() {
        const input = this.virtualKeyboard;
        const string = input.value;
        for (const char of string) {
            for (const eventType of ["keydown", "keyup"]) {
                this.dispatchEvent(new KeyboardEvent(eventType, {
                    key: char,
                    bubbles: true,
                }));
            }
        }
        input.value = "";
    }
    openVirtualKeyboard() {
        // On Android, the Rust code that opens the virtual keyboard triggers
        // before the TypeScript code that closes it, so delay opening it
        if (navigator.userAgent.toLowerCase().includes("android")) {
            setTimeout(() => {
                this.virtualKeyboard.focus({ preventScroll: true });
            }, 100);
        }
        else {
            this.virtualKeyboard.focus({ preventScroll: true });
        }
    }
    isVirtualKeyboardFocused() {
        return this.shadow.activeElement === this.virtualKeyboard;
    }
    contextMenuItems() {
        const CHECKMARK = String.fromCharCode(0x2713);
        const items = [];
        const addSeparator = () => {
            // Don't start with or duplicate separators.
            if (items.length > 0 && items[items.length - 1] !== null) {
                items.push(null);
            }
        };
        if (this.instance && this.isPlaying) {
            const customItems = this.instance.prepare_context_menu();
            customItems.forEach((item, index) => {
                if (item.separatorBefore) {
                    addSeparator();
                }
                items.push({
                    // TODO: better checkboxes
                    text: item.caption + (item.checked ? ` (${CHECKMARK})` : ``),
                    onClick: () => { var _a; return (_a = this.instance) === null || _a === void 0 ? void 0 : _a.run_context_menu_callback(index); },
                    enabled: item.enabled,
                });
            });
            addSeparator();
        }
        if (this.fullscreenEnabled) {
            if (this.isFullscreen) {
                items.push({
                    text: i18n_text("context-menu-exit-fullscreen"),
                    onClick: () => this.setFullscreen(false),
                });
            }
            else {
                items.push({
                    text: i18n_text("context-menu-enter-fullscreen"),
                    onClick: () => this.setFullscreen(true),
                });
            }
        }
        items.push({
            text: i18n_text("context-menu-volume-controls"),
            onClick: () => {
                this.openVolumeControls();
            },
        });
        if (this.instance &&
            this.swfUrl &&
            this.loadedConfig &&
            this.loadedConfig.showSwfDownload === true) {
            addSeparator();
            items.push({
                text: i18n_text("context-menu-download-swf"),
                onClick: this.downloadSwf.bind(this),
            });
        }
        if (navigator.clipboard && window.isSecureContext) {
            items.push({
                text: i18n_text("context-menu-copy-debug-info"),
                onClick: () => navigator.clipboard.writeText(this.getPanicData()),
            });
        }
        this.populateSaves();
        const localSaveTable = this.saveManager.querySelector("#local-saves");
        if (localSaveTable && localSaveTable.textContent !== "") {
            items.push({
                text: i18n_text("context-menu-open-save-manager"),
                onClick: this.openSaveManager.bind(this),
            });
        }
        addSeparator();
        items.push({
            text: i18n_text("context-menu-about-ruffle", {
                flavor: isExtension ? "extension" : "",
                version: buildInfo.versionName,
            }),
            onClick() {
                window.open(RUFFLE_ORIGIN, "_blank");
            },
        });
        // Give option to disable context menu when touch support is being used
        // to avoid a long press triggering the context menu. (#1972)
        if (this.isTouch) {
            addSeparator();
            items.push({
                text: i18n_text("context-menu-hide"),
                onClick: () => (this.contextMenuForceDisabled = true),
            });
        }
        return items;
    }
    pointerDown(event) {
        this.pointerDownPosition = new Point(event.pageX, event.pageY);
        this.pointerMoveMaxDistance = 0;
        this.startLongPressTimer();
    }
    clearLongPressTimer() {
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
    }
    startLongPressTimer() {
        const longPressTimeout = 800;
        this.clearLongPressTimer();
        this.longPressTimer = setTimeout(() => this.clearLongPressTimer(), longPressTimeout);
    }
    checkLongPressMovement(event) {
        if (this.pointerDownPosition !== null) {
            const currentPosition = new Point(event.pageX, event.pageY);
            const distance = this.pointerDownPosition.distanceTo(currentPosition);
            if (distance > this.pointerMoveMaxDistance) {
                this.pointerMoveMaxDistance = distance;
            }
        }
    }
    checkLongPress(event) {
        const maxAllowedDistance = 15;
        if (this.longPressTimer) {
            this.clearLongPressTimer();
            // The pointerType condition is to ensure right-click does not trigger
            // a context menu the wrong way the first time you right-click,
            // before contextMenuSupported is set.
        }
        else if (!this.contextMenuSupported &&
            event.pointerType !== "mouse" &&
            this.pointerMoveMaxDistance < maxAllowedDistance) {
            this.showContextMenu(event);
        }
    }
    showContextMenu(event) {
        var _a, _b, _c;
        const modalOpen = Array.from(this.shadow.querySelectorAll(".modal")).some((modal) => !modal.classList.contains("hidden"));
        if (this.panicked || modalOpen) {
            return;
        }
        event.preventDefault();
        if (event.type === "contextmenu") {
            this.contextMenuSupported = true;
            document.documentElement.addEventListener("click", this.hideContextMenu.bind(this), {
                once: true,
            });
        }
        else {
            document.documentElement.addEventListener("pointerup", this.hideContextMenu.bind(this), { once: true });
            event.stopPropagation();
        }
        if ([false, ContextMenu.Off].includes((_b = (_a = this.loadedConfig) === null || _a === void 0 ? void 0 : _a.contextMenu) !== null && _b !== void 0 ? _b : ContextMenu.On) ||
            (this.isTouch &&
                ((_c = this.loadedConfig) === null || _c === void 0 ? void 0 : _c.contextMenu) ===
                    ContextMenu.RightClickOnly) ||
            this.contextMenuForceDisabled) {
            return;
        }
        // Clear all context menu items.
        while (this.contextMenuElement.firstChild) {
            this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
        }
        // Populate context menu items.
        for (const item of this.contextMenuItems()) {
            if (item === null) {
                const menuSeparator = document.createElement("li");
                menuSeparator.className = "menu-separator";
                const hr = document.createElement("hr");
                menuSeparator.appendChild(hr);
                this.contextMenuElement.appendChild(menuSeparator);
            }
            else {
                const { text, onClick, enabled } = item;
                const menuItem = document.createElement("li");
                menuItem.className = "menu-item";
                menuItem.textContent = text;
                this.contextMenuElement.appendChild(menuItem);
                if (enabled !== false) {
                    menuItem.addEventListener(this.contextMenuSupported ? "click" : "pointerup", onClick);
                }
                else {
                    menuItem.classList.add("disabled");
                }
            }
        }
        // Place a context menu in the top-left corner, so
        // its `clientWidth` and `clientHeight` are not clamped.
        this.contextMenuElement.style.left = "0";
        this.contextMenuElement.style.top = "0";
        this.contextMenuOverlay.classList.remove("hidden");
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.x;
        const y = event.clientY - rect.y;
        const maxX = rect.width - this.contextMenuElement.clientWidth - 1;
        const maxY = rect.height - this.contextMenuElement.clientHeight - 1;
        this.contextMenuElement.style.left =
            Math.floor(Math.min(x, maxX)) + "px";
        this.contextMenuElement.style.top =
            Math.floor(Math.min(y, maxY)) + "px";
    }
    hideContextMenu() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.clear_custom_menu_items();
        this.contextMenuOverlay.classList.add("hidden");
    }
    /**
     * Pauses this player.
     *
     * No more frames, scripts or sounds will be executed.
     * This movie will be considered inactive and will not wake up until resumed.
     */
    pause() {
        if (this.instance) {
            this.instance.pause();
            this.playButton.style.display = "block";
        }
    }
    audioState() {
        if (this.instance) {
            const audioContext = this.instance.audio_context();
            return (audioContext && audioContext.state) || "running";
        }
        return "suspended";
    }
    unmuteOverlayClicked() {
        if (this.instance) {
            if (this.audioState() !== "running") {
                const audioContext = this.instance.audio_context();
                if (audioContext) {
                    audioContext.resume();
                }
            }
            this.unmuteOverlay.style.display = "none";
        }
    }
    /**
     * Plays a silent sound based on the AudioContext's sample rate.
     *
     * This is used to unmute audio on iOS and iPadOS when silent mode is enabled on the device (issue 1552).
     */
    unmuteAudioContext() {
        // No need to play the dummy sound again once audio is unmuted.
        if (isAudioContextUnmuted) {
            return;
        }
        // TODO: Use `navigator.userAgentData` to detect the platform when support improves?
        if (navigator.maxTouchPoints < 1) {
            isAudioContextUnmuted = true;
            return;
        }
        this.container.addEventListener("click", () => {
            var _a;
            if (isAudioContextUnmuted) {
                return;
            }
            const audioContext = (_a = this.instance) === null || _a === void 0 ? void 0 : _a.audio_context();
            if (!audioContext) {
                return;
            }
            const audio = new Audio();
            audio.src = (() => {
                // Returns a seven samples long 8 bit mono WAVE file.
                // This is required to prevent the AudioContext from desyncing and crashing.
                const arrayBuffer = new ArrayBuffer(10);
                const dataView = new DataView(arrayBuffer);
                const sampleRate = audioContext.sampleRate;
                dataView.setUint32(0, sampleRate, true);
                dataView.setUint32(4, sampleRate, true);
                dataView.setUint16(8, 1, true);
                const missingCharacters = window
                    .btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
                    .slice(0, 13);
                return `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${missingCharacters}AgAZGF0YQcAAACAgICAgICAAAA=`;
            })();
            audio.load();
            audio
                .play()
                .then(() => {
                isAudioContextUnmuted = true;
            })
                .catch((err) => {
                console.warn(`Failed to play dummy sound: ${err}`);
            });
        }, { once: true });
    }
    /**
     * Copies attributes and children from another element to this player element.
     * Used by the polyfill elements, RuffleObject and RuffleEmbed.
     *
     * @param element The element to copy all attributes from.
     */
    copyElement(element) {
        if (element) {
            for (const attribute of element.attributes) {
                if (attribute.specified) {
                    // Issue 468: Chrome "Click to Active Flash" box stomps on title attribute
                    if (attribute.name === "title" &&
                        attribute.value === "Adobe Flash Player") {
                        continue;
                    }
                    try {
                        this.setAttribute(attribute.name, attribute.value);
                    }
                    catch (err) {
                        // The embed may have invalid attributes, so handle these gracefully.
                        console.warn(`Unable to set attribute ${attribute.name} on Ruffle instance`);
                    }
                }
            }
            for (const node of Array.from(element.children)) {
                this.appendChild(node);
            }
        }
    }
    /**
     * Converts a dimension attribute on an HTML embed/object element to a valid CSS dimension.
     * HTML element dimensions are unitless, but can also be percentages.
     * Add a 'px' unit unless the value is a percentage.
     * Returns null if this is not a valid dimension.
     *
     * @param attribute The attribute to convert
     *
     * @private
     */
    static htmlDimensionToCssDimension(attribute) {
        if (attribute) {
            const match = attribute.match(DIMENSION_REGEX);
            if (match) {
                let out = match[1];
                if (!match[3]) {
                    // Unitless -- add px for CSS.
                    out += "px";
                }
                return out;
            }
        }
        return null;
    }
    /**
     * When a movie presents a new callback through `ExternalInterface.addCallback`,
     * we are informed so that we can expose the method on any relevant DOM element.
     *
     * This should only be called by Ruffle itself and not by users.
     *
     * @param name The name of the callback that is now available.
     *
     * @internal
     * @ignore
     */
    onCallbackAvailable(name) {
        const instance = this.instance;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this[name] = (...args) => {
            return instance === null || instance === void 0 ? void 0 : instance.call_exposed_callback(name, args);
        };
    }
    getObjectId() {
        return this.getAttribute("name");
    }
    /**
     * Sets a trace observer on this flash player.
     *
     * The observer will be called, as a function, for each message that the playing movie will "trace" (output).
     *
     * @param observer The observer that will be called for each trace.
     */
    set traceObserver(observer) {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.set_trace_observer(observer);
    }
    /**
     * Get data included in any panic of this ruffle-player
     *
     * @returns A string containing all the data included in the panic.
     */
    getPanicData() {
        let result = "\n# Player Info\n";
        result += `Allows script access: ${this.loadedConfig ? this.loadedConfig.allowScriptAccess : false}\n`;
        result += `${this.rendererDebugInfo}\n`;
        result += this.debugPlayerInfo();
        result += "\n# Page Info\n";
        result += `Page URL: ${document.location.href}\n`;
        if (this.swfUrl) {
            result += `SWF URL: ${this.swfUrl}\n`;
        }
        result += "\n# Browser Info\n";
        result += `User Agent: ${window.navigator.userAgent}\n`;
        result += `Platform: ${window.navigator.platform}\n`;
        result += `Has touch support: ${window.navigator.maxTouchPoints > 0}\n`;
        result += "\n# Ruffle Info\n";
        result += `Version: ${buildInfo.versionNumber}\n`;
        result += `Name: ${buildInfo.versionName}\n`;
        result += `Channel: ${buildInfo.versionChannel}\n`;
        result += `Built: ${buildInfo.buildDate}\n`;
        result += `Commit: ${buildInfo.commitHash}\n`;
        result += `Is extension: ${isExtension}\n`;
        result += "\n# Metadata\n";
        if (this.metadata) {
            for (const [key, value] of Object.entries(this.metadata)) {
                result += `${key}: ${value}\n`;
            }
        }
        return result;
    }
    /**
     * @param footerInfo An array of PanicLinkInfo objects.
     *
     * @returns The <ul> element to be used as the error footer
     */
    createErrorFooter(footerInfo) {
        const errorFooter = document.createElement("ul");
        for (const linkInfo of footerInfo) {
            const footerItem = document.createElement("li");
            const footerLink = document.createElement("a");
            footerLink.href = linkInfo.url;
            footerLink.textContent = linkInfo.label;
            if (linkInfo.url === "#") {
                footerLink.id = "panic-view-details";
            }
            else {
                footerLink.target = "_top";
            }
            footerItem.appendChild(footerLink);
            errorFooter.appendChild(footerItem);
        }
        return errorFooter;
    }
    /**
     * Panics this specific player, forcefully destroying all resources and displays an error message to the user.
     *
     * This should be called when something went absolutely, incredibly and disastrously wrong and there is no chance
     * of recovery.
     *
     * Ruffle will attempt to isolate all damage to this specific player instance, but no guarantees can be made if there
     * was a core issue which triggered the panic. If Ruffle is unable to isolate the cause to a specific player, then
     * all players will panic and Ruffle will become "poisoned" - no more players will run on this page until it is
     * reloaded fresh.
     *
     * @param error The error, if any, that triggered this panic.
     */
    panic(error) {
        var _a;
        if (this.panicked) {
            // Only show the first major error, not any repeats - they aren't as important
            return;
        }
        this.panicked = true;
        this.hideSplashScreen();
        if (error instanceof Error &&
            (error.name === "AbortError" ||
                error.message.includes("AbortError"))) {
            // Firefox: Don't display the panic screen if the user leaves the page while something is still loading
            return;
        }
        const errorIndex = (_a = error === null || error === void 0 ? void 0 : error.ruffleIndexError) !== null && _a !== void 0 ? _a : PanicError.Unknown;
        const errorArray = Object.assign([], {
            stackIndex: -1,
            avmStackIndex: -1,
        });
        errorArray.push("# Error Info\n");
        if (error instanceof Error) {
            errorArray.push(`Error name: ${error.name}\n`);
            errorArray.push(`Error message: ${error.message}\n`);
            if (error.stack) {
                const stackIndex = errorArray.push(`Error stack:\n\`\`\`\n${error.stack}\n\`\`\`\n`) - 1;
                if (error.avmStack) {
                    const avmStackIndex = errorArray.push(`AVM2 stack:\n\`\`\`\n    ${error.avmStack
                        .trim()
                        .replace(/\t/g, "    ")}\n\`\`\`\n`) - 1;
                    errorArray.avmStackIndex = avmStackIndex;
                }
                errorArray.stackIndex = stackIndex;
            }
        }
        else {
            errorArray.push(`Error: ${error}\n`);
        }
        errorArray.push(this.getPanicData());
        const errorText = errorArray.join("");
        const buildDate = new Date(buildInfo.buildDate);
        const monthsPrior = new Date();
        monthsPrior.setMonth(monthsPrior.getMonth() - 6); // 6 months prior
        const isBuildOutdated = monthsPrior > buildDate;
        // Create a link to GitHub with all of the error data, if the build is not outdated.
        // Otherwise, create a link to the downloads section on the Ruffle website.
        let actionLink;
        if (!isBuildOutdated) {
            let url;
            if (document.location.protocol.includes("extension") &&
                this.swfUrl) {
                url = this.swfUrl.href;
            }
            else {
                url = document.location.href;
            }
            // Remove query params for the issue title.
            url = url.split(/[?#]/, 1)[0];
            const issueTitle = `Error on ${url}`;
            let issueLink = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(issueTitle)}&template=error_report.md&labels=error-report&body=`;
            let issueBody = encodeURIComponent(errorText);
            if (errorArray.stackIndex > -1 &&
                String(issueLink + issueBody).length > 8195) {
                // Strip the stack error from the array when the produced URL is way too long.
                // This should prevent "414 Request-URI Too Large" errors on GitHub.
                errorArray[errorArray.stackIndex] = null;
                if (errorArray.avmStackIndex > -1) {
                    errorArray[errorArray.avmStackIndex] = null;
                }
                issueBody = encodeURIComponent(errorArray.join(""));
            }
            issueLink += issueBody;
            actionLink = new PanicLinkInfo(issueLink, i18n_text("report-bug"));
        }
        else {
            actionLink = new PanicLinkInfo(RUFFLE_ORIGIN + "/downloads#desktop-app", i18n_text("update-ruffle"));
        }
        // Clears out any existing content (ie play button or canvas) and replaces it with the error screen
        let errorBody, errorFooter;
        switch (errorIndex) {
            case PanicError.FileProtocol:
                // General error: Running on the `file:` protocol
                errorBody = textAsParagraphs("error-file-protocol");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo(RUFFLE_ORIGIN + "/demo", i18n_text("ruffle-demo")),
                    new PanicLinkInfo(RUFFLE_ORIGIN + "/downloads#desktop-app", i18n_text("ruffle-desktop")),
                ]);
                break;
            case PanicError.JavascriptConfiguration:
                // General error: Incorrect JavaScript configuration
                errorBody = textAsParagraphs("error-javascript-config");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmNotFound:
                // Self hosted: Cannot load `.wasm` file - file not found
                errorBody = textAsParagraphs("error-wasm-not-found");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmMimeType:
                // Self hosted: Cannot load `.wasm` file - incorrect MIME type
                errorBody = textAsParagraphs("error-wasm-mime-type");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.InvalidSwf:
                errorBody = textAsParagraphs("error-invalid-swf");
                errorFooter = this.createErrorFooter([new PanicLinkInfo()]);
                break;
            case PanicError.SwfFetchError:
                errorBody = textAsParagraphs("error-swf-fetch");
                errorFooter = this.createErrorFooter([new PanicLinkInfo()]);
                break;
            case PanicError.SwfCors:
                // Self hosted: Cannot load SWF file - CORS issues
                errorBody = textAsParagraphs("error-swf-cors");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmCors:
                // Self hosted: Cannot load `.wasm` file - CORS issues
                errorBody = textAsParagraphs("error-wasm-cors");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.InvalidWasm:
                // Self hosted: Cannot load `.wasm` file - incorrect configuration or missing files
                errorBody = textAsParagraphs("error-wasm-invalid");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.WasmDownload:
                // Usually a transient network error or botched deployment
                errorBody = textAsParagraphs("error-wasm-download");
                errorFooter = this.createErrorFooter([new PanicLinkInfo()]);
                break;
            case PanicError.WasmDisabledMicrosoftEdge:
                // Self hosted: User has disabled WebAssembly in Microsoft Edge through the
                // "Enhance your Security on the web" setting.
                errorBody = textAsParagraphs("error-wasm-disabled-on-edge");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error", i18n_text("more-info")),
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.JavascriptConflict:
                // Self hosted: Cannot load `.wasm` file - a native object / function is overridden
                errorBody = textAsParagraphs("error-javascript-conflict");
                if (isBuildOutdated) {
                    errorBody.appendChild(textAsParagraphs("error-javascript-conflict-outdated", {
                        buildDate: buildInfo.buildDate,
                    }));
                }
                errorFooter = this.createErrorFooter([
                    actionLink,
                    new PanicLinkInfo(),
                ]);
                break;
            case PanicError.CSPConflict:
                // General error: Cannot load `.wasm` file - a native object / function is overridden
                errorBody = textAsParagraphs("error-csp-conflict");
                errorFooter = this.createErrorFooter([
                    new PanicLinkInfo("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp", i18n_text("ruffle-wiki")),
                    new PanicLinkInfo(),
                ]);
                break;
            default:
                // Unknown error
                errorBody = textAsParagraphs("error-unknown", {
                    buildDate: buildInfo.buildDate,
                    outdated: String(isBuildOutdated),
                });
                errorFooter = this.createErrorFooter([
                    actionLink,
                    new PanicLinkInfo(),
                ]);
                break;
        }
        const panicDiv = document.createElement("div");
        panicDiv.id = "panic";
        const panicTitle = document.createElement("div");
        panicTitle.id = "panic-title";
        panicTitle.textContent = i18n_text("panic-title");
        panicDiv.appendChild(panicTitle);
        const panicBody = document.createElement("div");
        panicBody.id = "panic-body";
        panicBody.appendChild(errorBody);
        panicDiv.appendChild(panicBody);
        const panicFooter = document.createElement("div");
        panicFooter.id = "panic-footer";
        panicFooter.appendChild(errorFooter);
        panicDiv.appendChild(panicFooter);
        this.container.textContent = "";
        this.container.appendChild(panicDiv);
        const viewDetails = (this.container.querySelector("#panic-view-details"));
        if (viewDetails) {
            viewDetails.onclick = () => {
                const panicBody = (this.container.querySelector("#panic-body"));
                panicBody.classList.add("details");
                const panicText = document.createElement("textarea");
                panicText.readOnly = true;
                panicText.value = errorText;
                panicBody.replaceChildren(panicText);
                return false;
            };
        }
        // Do this last, just in case it causes any cascading issues.
        this.destroy();
    }
    displayRootMovieDownloadFailedMessage(invalidSwf) {
        var _a, _b, _c, _d;
        const openInNewTab = (_a = this.loadedConfig) === null || _a === void 0 ? void 0 : _a.openInNewTab;
        if (openInNewTab &&
            this.swfUrl &&
            window.location.origin !== this.swfUrl.origin) {
            const url = new URL(this.swfUrl);
            if ((_b = this.loadedConfig) === null || _b === void 0 ? void 0 : _b.parameters) {
                const parameters = sanitizeParameters((_c = this.loadedConfig) === null || _c === void 0 ? void 0 : _c.parameters);
                Object.entries(parameters).forEach(([key, value]) => {
                    url.searchParams.set(key, value);
                });
            }
            this.hideSplashScreen();
            const div = document.createElement("div");
            div.id = "message-overlay";
            const innerDiv = document.createElement("div");
            innerDiv.className = "message";
            innerDiv.appendChild(textAsParagraphs("message-cant-embed"));
            const buttonDiv = document.createElement("div");
            const link = document.createElement("a");
            link.innerText = i18n_text("open-in-new-tab");
            link.onclick = () => openInNewTab(url);
            buttonDiv.appendChild(link);
            innerDiv.appendChild(buttonDiv);
            div.appendChild(innerDiv);
            this.container.prepend(div);
        }
        else {
            const error = new Error("Failed to fetch: " + this.swfUrl);
            if (this.swfUrl && !this.swfUrl.protocol.includes("http")) {
                error.ruffleIndexError = PanicError.FileProtocol;
            }
            else if (invalidSwf) {
                error.ruffleIndexError = PanicError.InvalidSwf;
            }
            else if (window.location.origin === ((_d = this.swfUrl) === null || _d === void 0 ? void 0 : _d.origin) ||
                // The extension's internal player page is not restricted by CORS
                window.location.protocol.includes("extension")) {
                error.ruffleIndexError = PanicError.SwfFetchError;
            }
            else {
                // This is a selfhosted build of Ruffle that tried to make a cross-origin request
                error.ruffleIndexError = PanicError.SwfCors;
            }
            this.panic(error);
        }
    }
    /**
     * Show a dismissible message in front of the player.
     *
     * @param message The message shown to the user.
     */
    displayMessage(message) {
        const div = document.createElement("div");
        div.id = "message-overlay";
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        const messageP = document.createElement("p");
        messageP.textContent = message;
        messageDiv.appendChild(messageP);
        const buttonDiv = document.createElement("div");
        const continueButton = document.createElement("button");
        continueButton.id = "continue-btn";
        continueButton.textContent = i18n_text("continue");
        buttonDiv.appendChild(continueButton);
        messageDiv.appendChild(buttonDiv);
        div.appendChild(messageDiv);
        this.container.prepend(div);
        (this.container.querySelector("#continue-btn")).onclick = () => {
            div.parentNode.removeChild(div);
        };
    }
    /**
     * Show a video that uses an unsupported codec in a pop up.
     *
     * @param url The url of the video to be shown over the canvas.
     */
    displayUnsupportedVideo(url) {
        const videoHolder = this.videoModal.querySelector("#video-holder");
        if (videoHolder) {
            const video = document.createElement("video");
            video.addEventListener("contextmenu", (event) => event.stopPropagation());
            video.src = url;
            video.autoplay = true;
            video.controls = true;
            videoHolder.textContent = "";
            videoHolder.appendChild(video);
            this.videoModal.classList.remove("hidden");
        }
    }
    debugPlayerInfo() {
        return "";
    }
    hideSplashScreen() {
        this.splashScreen.classList.add("hidden");
        this.container.classList.remove("hidden");
    }
    showSplashScreen() {
        this.splashScreen.classList.remove("hidden");
        this.container.classList.add("hidden");
    }
    setMetadata(metadata) {
        this._metadata = metadata;
        // TODO: Switch this to ReadyState.Loading when we have streaming support.
        this._readyState = ReadyState.Loaded;
        this.hideSplashScreen();
        this.dispatchEvent(new CustomEvent(RufflePlayer.LOADED_METADATA));
        // TODO: Move this to whatever function changes the ReadyState to Loaded when we have streaming support.
        this.dispatchEvent(new CustomEvent(RufflePlayer.LOADED_DATA));
    }
    /** @ignore */
    PercentLoaded() {
        // [NA] This is a stub - we need to research how this is actually implemented (is it just base swf loadedBytes?)
        if (this._readyState === ReadyState.Loaded) {
            return 100;
        }
        else {
            return 0;
        }
    }
}
/**
 * Triggered when a movie metadata has been loaded (such as movie width and height).
 *
 * @event RufflePlayer#loadedmetadata
 */
RufflePlayer.LOADED_METADATA = "loadedmetadata";
/**
 * Triggered when a movie is fully loaded.
 *
 * @event RufflePlayer#loadeddata
 */
RufflePlayer.LOADED_DATA = "loadeddata";
/**
 * Describes the loading state of an SWF movie.
 */
var ReadyState;
(function (ReadyState) {
    /**
     * No movie is loaded, or no information is yet available about the movie.
     */
    ReadyState[ReadyState["HaveNothing"] = 0] = "HaveNothing";
    /**
     * The movie is still loading, but it has started playback, and metadata is available.
     */
    ReadyState[ReadyState["Loading"] = 1] = "Loading";
    /**
     * The movie has completely loaded.
     */
    ReadyState[ReadyState["Loaded"] = 2] = "Loaded";
})(ReadyState || (ReadyState = {}));
/**
 * Parses a given string or null value to a boolean or null and returns it.
 *
 * @param value The string or null value that should be parsed to a boolean or null.
 * @returns The string as a boolean, if it exists and contains a boolean, otherwise null.
 */
function parseBoolean(value) {
    switch (value === null || value === void 0 ? void 0 : value.toLowerCase()) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return null;
    }
}
/**
 * Parses a string with script access options or null and returns whether the script
 * access options allow the SWF file with the given URL to call JavaScript code in
 * the surrounding HTML file if they exist correctly, otherwise null.
 *
 * @param access The string with the script access options or null.
 * @param url The URL of the SWF file.
 * @returns Whether the script access options allow the SWF file with the given URL to
 * call JavaScript code in the surrounding HTML file if they exist correctly, otherwise null.
 */
function parseAllowScriptAccess(access, url) {
    switch (access === null || access === void 0 ? void 0 : access.toLowerCase()) {
        case "always":
            return true;
        case "never":
            return false;
        case "samedomain":
            try {
                return (new URL(window.location.href).origin ===
                    new URL(url, window.location.href).origin);
            }
            catch (_a) {
                return false;
            }
        default:
            return null;
    }
}
/**
 * Returns the URLLoadOptions that have been provided for a specific movie.
 *
 * The function getOptionString is given as an argument and used to get values of configuration
 * options that have been overwritten for this specific movie.
 *
 * The returned URLLoadOptions interface only contains values for the configuration options
 * that have been overwritten for the movie and no default values.
 * This is necessary because any default values would overwrite other configuration
 * settings with a lower priority (e.g. the general RufflePlayer config).
 *
 * @param url The url of the movie.
 * @param getOptionString A function that takes the name of a configuration option.
 * If that configuration option has been overwritten for this specific movie, it returns that value.
 * Otherwise, it returns null.
 * @returns The URLLoadOptions for the movie.
 */
function getPolyfillOptions(url, getOptionString) {
    const options = { url };
    const allowNetworking = getOptionString("allowNetworking");
    if (allowNetworking !== null) {
        options.allowNetworking = allowNetworking;
    }
    const allowScriptAccess = parseAllowScriptAccess(getOptionString("allowScriptAccess"), url);
    if (allowScriptAccess !== null) {
        options.allowScriptAccess = allowScriptAccess;
    }
    const backgroundColor = getOptionString("bgcolor");
    if (backgroundColor !== null) {
        options.backgroundColor = backgroundColor;
    }
    const base = getOptionString("base");
    if (base !== null) {
        // "." tells Flash Player to load relative URLs from the SWF's directory
        // All other base values are evaluated relative to the page URL
        if (base === ".") {
            const swfUrl = new URL(url, document.baseURI);
            options.base = new URL(base, swfUrl).href;
        }
        else {
            options.base = base;
        }
    }
    const menu = parseBoolean(getOptionString("menu"));
    if (menu !== null) {
        options.menu = menu;
    }
    const allowFullscreen = parseBoolean(getOptionString("allowFullScreen"));
    if (allowFullscreen !== null) {
        options.allowFullscreen = allowFullscreen;
    }
    const parameters = getOptionString("flashvars");
    if (parameters !== null) {
        options.parameters = parameters;
    }
    const quality = getOptionString("quality");
    if (quality !== null) {
        options.quality = quality;
    }
    const salign = getOptionString("salign");
    if (salign !== null) {
        options.salign = salign;
    }
    const scale = getOptionString("scale");
    if (scale !== null) {
        options.scale = scale;
    }
    const wmode = getOptionString("wmode");
    if (wmode !== null) {
        options.wmode = wmode;
    }
    return options;
}
/**
 * Returns whether the given filename is a Youtube Flash source.
 *
 * @param filename The filename to test.
 * @returns True if the filename is a Youtube Flash source.
 */
function isYoutubeFlashSource(filename) {
    if (filename) {
        let pathname = "";
        let hostname = "";
        try {
            // A base URL is required if `filename` is a relative URL, but we don't need to detect the real URL origin.
            const url = new URL(filename, RUFFLE_ORIGIN);
            pathname = url.pathname;
            hostname = url.hostname;
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
        // See https://wiki.mozilla.org/QA/Youtube_Embedded_Rewrite
        if (pathname.startsWith("/v/") &&
            /^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(hostname)) {
            return true;
        }
    }
    return false;
}
/**
 * Workaround Youtube mixed content if upgradeToHttps is true.
 *
 * @param elem The element to change.
 * @param attr The attribute to adjust.
 */
function workaroundYoutubeMixedContent(elem, attr) {
    var _a, _b;
    const value = elem.getAttribute(attr);
    const config = (_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {};
    if (value) {
        try {
            const url = new URL(value);
            if (url.protocol === "http:" &&
                window.location.protocol === "https:" &&
                (!("upgradeToHttps" in config) ||
                    config.upgradeToHttps !== false)) {
                url.protocol = "https:";
                elem.setAttribute(attr, url.toString());
            }
        }
        catch (err) {
            // Some invalid filenames, like `///`, could raise a TypeError. Let's fail silently in this situation.
        }
    }
}
/**
 * Determine if an element is a child of a node that was not supported
 * in non-HTML5 compliant browsers. If so, the element was meant to be
 * used as a fallback content.
 *
 * @param elem The element to test.
 * @returns True if the element is inside an <audio> or <video> node.
 */
function isFallbackElement(elem) {
    let parent = elem.parentElement;
    while (parent !== null) {
        switch (parent.tagName) {
            case "AUDIO":
            case "VIDEO":
                return true;
        }
        parent = parent.parentElement;
    }
    return false;
}
/**
 * The volume controls of the Ruffle web GUI.
 */
class VolumeControls {
    constructor(isMuted, volume) {
        this.isMuted = isMuted;
        this.volume = volume;
    }
    /**
     * Returns the volume between 0 and 1 (calculated out of the
     * checkbox and the slider).
     *
     * @returns The volume between 0 and 1.
     */
    get_volume() {
        return !this.isMuted ? this.volume / 100 : 0;
    }
}

;// CONCATENATED MODULE: ../core/dist/ruffle-embed.js



/**
 * A polyfill html element.
 *
 * This specific class tries to polyfill existing `<embed>` tags,
 * and should not be used. Prefer [[RufflePlayer]] instead.
 *
 * @internal
 */
class RuffleEmbed extends RufflePlayer {
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     *
     * This specific class tries to polyfill existing `<embed>` tags,
     * and should not be used. Prefer [[RufflePlayer]] instead.
     */
    constructor() {
        super();
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        const src = this.attributes.getNamedItem("src");
        if (src) {
            // Get the configuration options that have been overwritten for this movie.
            const getOptionString = (optionName) => { var _a, _b; return (_b = (_a = this.attributes.getNamedItem(optionName)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null; };
            const options = getPolyfillOptions(src.value, getOptionString);
            // Kick off the SWF download.
            this.load(options, true);
        }
    }
    /**
     * Polyfill of HTMLEmbedElement.
     *
     * @ignore
     * @internal
     */
    get nodeName() {
        return "EMBED";
    }
    /**
     * Polyfill of HTMLEmbedElement.
     *
     * @ignore
     * @internal
     */
    get src() {
        var _a;
        return (_a = this.attributes.getNamedItem("src")) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Polyfill of HTMLEmbedElement.
     *
     * @ignore
     * @internal
     */
    set src(srcval) {
        if (srcval) {
            const attr = document.createAttribute("src");
            attr.value = srcval;
            this.attributes.setNamedItem(attr);
        }
        else {
            this.attributes.removeNamedItem("src");
        }
    }
    /**
     * @ignore
     * @internal
     */
    static get observedAttributes() {
        return ["src", "width", "height"];
    }
    /**
     * @ignore
     * @internal
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (this.isConnected && name === "src") {
            const src = this.attributes.getNamedItem("src");
            if (src) {
                const getOptionString = (optionName) => { var _a, _b; return (_b = (_a = this.attributes.getNamedItem(optionName)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null; };
                const options = getPolyfillOptions(src.value, getOptionString);
                this.load(options, true);
            }
        }
    }
    /**
     * Checks if the given element may be polyfilled with this one.
     *
     * @param elem Element to check.
     * @returns True if the element looks like a Flash embed.
     */
    static isInterdictable(elem) {
        const src = elem.getAttribute("src");
        const type = elem.getAttribute("type");
        // Don't polyfill when no file is specified.
        if (!src) {
            return false;
        }
        // Don't polyfill if the element is inside a specific node.
        if (isFallbackElement(elem)) {
            return false;
        }
        // Don't polyfill when the file is a YouTube Flash source.
        if (isYoutubeFlashSource(src)) {
            // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well.
            workaroundYoutubeMixedContent(elem, "src");
            return false;
        }
        return isSwf(src, type);
    }
    /**
     * Creates a RuffleEmbed that will polyfill and replace the given element.
     *
     * @param elem Element to replace.
     * @returns Created RuffleEmbed.
     */
    static fromNativeEmbedElement(elem) {
        const externalName = registerElement("ruffle-embed", RuffleEmbed);
        const ruffleObj = document.createElement(externalName);
        ruffleObj.copyElement(elem);
        return ruffleObj;
    }
}

;// CONCATENATED MODULE: ../core/dist/ruffle-object.js





/**
 * Find and return the first value in obj with the given key.
 * Many Flash params were case insensitive, so we use this when checking for them.
 *
 * @param obj Object to check
 * @param key Key to find
 * @param defaultValue Value if not found
 * @returns Value if found, else [[defaultValue]]
 */
function findCaseInsensitive(obj, key, defaultValue) {
    key = key.toLowerCase();
    for (const [k, value] of Object.entries(obj)) {
        if (k.toLowerCase() === key) {
            return value;
        }
    }
    return defaultValue;
}
/**
 * Returns all flash params ([[HTMLParamElement]]) that are for the given object.
 *
 * @param elem Element to check.
 * @returns A record of every parameter.
 */
function paramsOf(elem) {
    var _a, _b;
    const params = {};
    for (const param of elem.children) {
        if (param instanceof HTMLParamElement) {
            const key = (_a = param.attributes.getNamedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
            const value = (_b = param.attributes.getNamedItem("value")) === null || _b === void 0 ? void 0 : _b.value;
            if (key && value) {
                params[key] = value;
            }
        }
    }
    return params;
}
/**
 * A polyfill html element.
 *
 * This specific class tries to polyfill existing `<object>` tags,
 * and should not be used. Prefer [[RufflePlayer]] instead.
 *
 * @internal
 */
class RuffleObject extends RufflePlayer {
    /**
     * Constructs a new Ruffle flash player for insertion onto the page.
     *
     * This specific class tries to polyfill existing `<object>` tags,
     * and should not be used. Prefer [[RufflePlayer]] instead.
     */
    constructor() {
        super();
        this.params = {};
    }
    /**
     * @ignore
     * @internal
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.params = paramsOf(this);
        let url = null;
        if (this.attributes.getNamedItem("data")) {
            url = (_a = this.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value;
        }
        else if (this.params["movie"]) {
            url = this.params["movie"];
        }
        if (url) {
            // Get the configuration options that have been overwritten for this movie.
            const attributeCheckOptions = [
                "allowNetworking",
                "base",
                "bgcolor",
                "flashvars",
            ];
            const getOptionString = (optionName) => findCaseInsensitive(this.params, optionName, attributeCheckOptions.includes(optionName)
                ? this.getAttribute(optionName)
                : null);
            const options = getPolyfillOptions(url, getOptionString);
            // Kick off the SWF download.
            this.load(options, true);
        }
    }
    debugPlayerInfo() {
        var _a;
        let result = "Player type: Object\n";
        let url = null;
        if (this.attributes.getNamedItem("data")) {
            url = (_a = this.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value;
        }
        else if (this.params["movie"]) {
            url = this.params["movie"];
        }
        result += `SWF URL: ${url}\n`;
        Object.keys(this.params).forEach((key) => {
            result += `Param ${key}: ${this.params[key]}\n`;
        });
        Object.keys(this.attributes).forEach((key) => {
            var _a;
            result += `Attribute ${key}: ${(_a = this.attributes.getNamedItem(key)) === null || _a === void 0 ? void 0 : _a.value}\n`;
        });
        return result;
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    get nodeName() {
        return "OBJECT";
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    get data() {
        return this.getAttribute("data");
    }
    /**
     * Polyfill of HTMLObjectElement.
     *
     * @ignore
     * @internal
     */
    set data(href) {
        if (href) {
            const attr = document.createAttribute("data");
            attr.value = href;
            this.attributes.setNamedItem(attr);
        }
        else {
            this.attributes.removeNamedItem("data");
        }
    }
    /**
     * Checks if the given element may be polyfilled with this one.
     *
     * @param elem Element to check.
     * @returns True if the element looks like a Flash object.
     */
    static isInterdictable(elem) {
        var _a, _b, _c, _d;
        // Don't polyfill if the element is inside a specific node.
        if (isFallbackElement(elem)) {
            return false;
        }
        // Don't polyfill if there's already a <ruffle-object> or a <ruffle-embed> inside the <object>.
        if (elem.getElementsByTagName("ruffle-object").length > 0 ||
            elem.getElementsByTagName("ruffle-embed").length > 0) {
            return false;
        }
        const data = (_a = elem.attributes.getNamedItem("data")) === null || _a === void 0 ? void 0 : _a.value.toLowerCase();
        const type = (_c = (_b = elem.attributes.getNamedItem("type")) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : null;
        const params = paramsOf(elem);
        // Check for SWF file.
        let filename;
        if (data) {
            // Don't polyfill when the file is a YouTube Flash source.
            if (isYoutubeFlashSource(data)) {
                // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well.
                workaroundYoutubeMixedContent(elem, "data");
                return false;
            }
            filename = data;
        }
        else if (params && params["movie"]) {
            // Don't polyfill when the file is a YouTube Flash source.
            if (isYoutubeFlashSource(params["movie"])) {
                // Workaround YouTube mixed content; this isn't what browsers do automatically, but while we're here, we may as well.
                const movieElem = elem.querySelector("param[name='movie']");
                if (movieElem) {
                    workaroundYoutubeMixedContent(movieElem, "value");
                    // The data attribute needs to be set for the re-fetch to happen.
                    // It also needs to be set on Firefox for the YouTube object rewrite to work, regardless of mixed content.
                    const movieSrc = movieElem.getAttribute("value");
                    if (movieSrc) {
                        elem.setAttribute("data", movieSrc);
                    }
                }
                return false;
            }
            filename = params["movie"];
        }
        else {
            // Don't polyfill when no file is specified.
            return false;
        }
        // Check ActiveX class ID.
        const classid = (_d = elem.attributes
            .getNamedItem("classid")) === null || _d === void 0 ? void 0 : _d.value.toLowerCase();
        if (classid === FLASH_ACTIVEX_CLASSID.toLowerCase()) {
            // classid is an old-IE style embed that would not work on modern browsers.
            // Often there will be an <embed> inside the <object> that would take precedence.
            // Only polyfill this <object> if it doesn't contain a polyfillable <embed> or
            // another <object> that would be supported on modern browsers.
            return (!Array.from(elem.getElementsByTagName("object")).some(RuffleObject.isInterdictable) &&
                !Array.from(elem.getElementsByTagName("embed")).some(RuffleEmbed.isInterdictable));
        }
        else if (classid) {
            // Non-Flash classid.
            return false;
        }
        return isSwf(filename, type);
    }
    /**
     * Creates a RuffleObject that will polyfill and replace the given element.
     *
     * @param elem Element to replace.
     * @returns Created RuffleObject.
     */
    static fromNativeObjectElement(elem) {
        const externalName = registerElement("ruffle-object", RuffleObject);
        const ruffleObj = (document.createElement(externalName));
        // Avoid copying embeds-inside-objects to avoid double polyfilling.
        for (const embedElem of Array.from(elem.getElementsByTagName("embed"))) {
            if (RuffleEmbed.isInterdictable(embedElem)) {
                embedElem.remove();
            }
        }
        // Avoid copying objects-inside-objects to avoid double polyfilling.
        // This may happen when Internet Explorer's conditional comments are used.
        for (const objectElem of Array.from(elem.getElementsByTagName("object"))) {
            if (RuffleObject.isInterdictable(objectElem)) {
                objectElem.remove();
            }
        }
        ruffleObj.copyElement(elem);
        return ruffleObj;
    }
}

;// CONCATENATED MODULE: ../core/dist/plugin-polyfill.js

/**
 * Replacement object for `MimeTypeArray` that lets us install new fake mime
 * types.
 *
 * Unlike plugins we can at least enumerate mime types in Firefox, so we don't
 * lose data.
 *
 * We also expose a method called `install` which adds a new plugin. This is
 * used to falsify Flash detection. If the existing `navigator.mimeTypes` has an
 * `install` method, you should not use `RuffleMimeTypeArray` as some other
 * plugin emulator is already present.
 */
class RuffleMimeTypeArray {
    constructor(mimeTypes) {
        this.__mimeTypes = [];
        this.__namedMimeTypes = {};
        if (mimeTypes) {
            for (let i = 0; i < mimeTypes.length; i++) {
                this.install(mimeTypes[i]);
            }
        }
    }
    /**
     * Install a MIME Type into the array.
     *
     * @param mimeType The mime type to install
     */
    install(mimeType) {
        const index = this.__mimeTypes.length;
        this.__mimeTypes.push(mimeType);
        this.__namedMimeTypes[mimeType.type] = mimeType;
        this[mimeType.type] = mimeType;
        this[index] = mimeType;
    }
    item(index) {
        // This behavior is done to emulate a 32-bit uint,
        // which browsers use.
        return this.__mimeTypes[index >>> 0];
    }
    namedItem(name) {
        return this.__namedMimeTypes[name];
    }
    get length() {
        return this.__mimeTypes.length;
    }
    [Symbol.iterator]() {
        return this.__mimeTypes[Symbol.iterator]();
    }
}
/**
 * Equivalent object to `Plugin` that allows us to falsify plugins.
 */
class RufflePlugin extends RuffleMimeTypeArray {
    constructor(name, description, filename) {
        super();
        this.name = name;
        this.description = description;
        this.filename = filename;
    }
}
/**
 * Replacement object for `PluginArray` that lets us install new fake plugins.
 *
 * This object needs to wrap the native plugin array, since the user might have
 * actual plugins installed. Firefox doesn't let us enumerate the array, though,
 * which has some consequences. Namely, we can't actually perfectly wrap the
 * native plugin array, at least unless there's some secret "unresolved object
 * property name handler" that I've never known before in JS...
 *
 * We can still wrap `namedItem` perfectly at least.
 *
 * We also expose a method called `install` which adds a new plugin. This is
 * used to falsify Flash detection. If the existing `navigator.plugins` has an
 * `install` method, you should not use `RufflePluginArray` as some other plugin
 * emulator is already present.
 */
class RufflePluginArray {
    constructor(plugins) {
        this.__plugins = [];
        this.__namedPlugins = {};
        for (let i = 0; i < plugins.length; i++) {
            this.install(plugins[i]);
        }
    }
    install(plugin) {
        const index = this.__plugins.length;
        this.__plugins.push(plugin);
        this.__namedPlugins[plugin.name] = plugin;
        this[plugin.name] = plugin;
        this[index] = plugin;
    }
    item(index) {
        // This behavior is done to emulate a 32-bit uint,
        // which browsers use. Cloudflare's anti-bot
        // checks rely on this.
        return this.__plugins[index >>> 0];
    }
    namedItem(name) {
        return this.__namedPlugins[name];
    }
    refresh() {
        // Nothing to do, we just need to define the method.
    }
    [Symbol.iterator]() {
        return this.__plugins[Symbol.iterator]();
    }
    get length() {
        return this.__plugins.length;
    }
}
/**
 * A fake plugin designed to trigger Flash detection scripts.
 */
const FLASH_PLUGIN = new RufflePlugin("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js");
FLASH_PLUGIN.install({
    type: FUTURESPLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "spl",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH7_AND_8_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
FLASH_PLUGIN.install({
    type: FLASH_MOVIE_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN,
});
/**
 * Install a fake plugin such that detectors will see it in `navigator.plugins`.
 *
 * This function takes care to check if the existing implementation of
 * `navigator.plugins` already accepts fake plugin entries. If so, it will use
 * that version of the plugin array. This allows the plugin polyfill to compose
 * across multiple plugin emulators with the first emulator's polyfill winning.
 *
 * @param plugin The plugin to install
 */
function installPlugin(plugin) {
    if (!("install" in navigator.plugins) || !navigator.plugins["install"]) {
        Object.defineProperty(navigator, "plugins", {
            value: new RufflePluginArray(navigator.plugins),
            writable: false,
        });
    }
    const plugins = navigator.plugins;
    plugins.install(plugin);
    if (plugin.length > 0 &&
        (!("install" in navigator.mimeTypes) || !navigator.mimeTypes["install"])) {
        Object.defineProperty(navigator, "mimeTypes", {
            value: new RuffleMimeTypeArray(navigator.mimeTypes),
            writable: false,
        });
    }
    const mimeTypes = navigator.mimeTypes;
    for (let i = 0; i < plugin.length; i += 1) {
        mimeTypes.install(plugin[i]);
    }
}

;// CONCATENATED MODULE: ../core/dist/polyfills.js
var _a, _b;





const globalConfig = (_b = (_a = window.RufflePlayer) === null || _a === void 0 ? void 0 : _a.config) !== null && _b !== void 0 ? _b : {};
const jsScriptUrl = publicPath(globalConfig) + "ruffle.js";
/**
 * Polyfill native Flash elements with Ruffle equivalents.
 *
 * This polyfill isn't fool-proof: If there's a chance site JavaScript has
 * access to a pre-polyfill element, then this will break horribly. We can
 * keep native objects out of the DOM, and thus out of JavaScript's grubby
 * little hands, but only if we load first.
 */
let objects;
let polyfills_embeds;
/**
 * Check if this browser has pre-existing Flash support.
 *
 * @returns Whether this browser has a plugin indicating pre-existing Flash support.
 */
function isFlashEnabledBrowser() {
    var _a, _b;
    // If the user sets a configuration value not to favor Flash, pretend the browser does not support Flash so Ruffle takes effect.
    if ("favorFlash" in globalConfig && globalConfig["favorFlash"] === false) {
        return false;
    }
    // Otherwise, check for pre-existing Flash support.
    return (((_b = (_a = navigator.plugins.namedItem("Shockwave Flash")) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : "ruffle.js") !== "ruffle.js");
}
/**
 *
 */
function polyfillFlashInstances() {
    try {
        // Create live collections to track embed tags.
        objects = objects !== null && objects !== void 0 ? objects : document.getElementsByTagName("object");
        polyfills_embeds = polyfills_embeds !== null && polyfills_embeds !== void 0 ? polyfills_embeds : document.getElementsByTagName("embed");
        // Replace <object> first, because <object> often wraps <embed>.
        for (const elem of Array.from(objects)) {
            if (RuffleObject.isInterdictable(elem)) {
                const ruffleObject = RuffleObject.fromNativeObjectElement(elem);
                elem.replaceWith(ruffleObject);
            }
        }
        for (const elem of Array.from(polyfills_embeds)) {
            if (RuffleEmbed.isInterdictable(elem)) {
                const ruffleEmbed = RuffleEmbed.fromNativeEmbedElement(elem);
                elem.replaceWith(ruffleEmbed);
            }
        }
    }
    catch (err) {
        console.error(`Serious error encountered when polyfilling native Flash elements: ${err}`);
    }
}
/**
 * Inject Ruffle into <iframe> and <frame> elements.
 *
 * This polyfill isn't fool-proof either: On self-hosted builds, it may
 * not work due to browsers CORS policy or be loaded too late for some
 * libraries like SWFObject. These should be less of a problem on the
 * web extension. This polyfill should, however, do the trick in most
 * cases, but users should be aware of its natural limits.
 */
let iframes;
let polyfills_frames;
/**
 *
 */
function polyfillFrames() {
    // Create live collections to track embed tags.
    iframes = iframes !== null && iframes !== void 0 ? iframes : document.getElementsByTagName("iframe");
    polyfills_frames = polyfills_frames !== null && polyfills_frames !== void 0 ? polyfills_frames : document.getElementsByTagName("frame");
    [iframes, polyfills_frames].forEach((elements) => {
        for (const element of elements) {
            if (element.dataset["rufflePolyfilled"] !== undefined) {
                // Don't re-polyfill elements with the "data-ruffle-polyfilled" attribute.
                continue;
            }
            element.dataset["rufflePolyfilled"] = "";
            const elementWindow = element.contentWindow;
            // Cross origin requests may reach an exception, so let's prepare for this eventuality.
            const errorMessage = `Couldn't load Ruffle into ${element.tagName}[${element.src}]: `;
            try {
                if (elementWindow.document.readyState === "complete") {
                    injectRuffle(elementWindow, errorMessage);
                }
            }
            catch (err) {
                if (!isExtension) {
                    // The web extension should be able to load Ruffle into cross origin frames
                    // because it has "all_frames" set to true in its manifest.json: RufflePlayer
                    // config won't be injected but it's not worth showing an error.
                    console.warn(errorMessage + err);
                }
            }
            // Attach listener to the element to handle frame navigation.
            element.addEventListener("load", () => {
                injectRuffle(elementWindow, errorMessage);
            }, false);
        }
    });
}
/**
 * @param elementWindow The (i)frame's window object.
 * @param errorMessage The message to log when Ruffle cannot access the (i)frame's document.
 */
async function injectRuffle(elementWindow, errorMessage) {
    var _a;
    // The document is supposed to be completely loaded when this function is run.
    // As Chrome may be unable to access the document properties, we have to delay the execution a little bit.
    await new Promise((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, 100);
    });
    let elementDocument;
    try {
        elementDocument = elementWindow.document;
        if (!elementDocument) {
            // Don't polyfill if the window has no document: the element may have been removed from the parent window.
            return;
        }
    }
    catch (err) {
        if (!isExtension) {
            console.warn(errorMessage + err);
        }
        return;
    }
    if (!isExtension &&
        elementDocument.documentElement.dataset["ruffleOptout"] !== undefined) {
        // Don't polyfill elements with the "data-ruffle-optout" attribute.
        return;
    }
    if (!isExtension) {
        if (!elementWindow.RufflePlayer) {
            const script = elementDocument.createElement("script");
            script.setAttribute("src", jsScriptUrl);
            script.onload = () => {
                // Inject parent configuration once the script is loaded, preventing it from being ignored.
                elementWindow.RufflePlayer = {};
                elementWindow.RufflePlayer.config = globalConfig;
            };
            elementDocument.head.appendChild(script);
        }
    }
    else {
        if (!elementWindow.RufflePlayer) {
            elementWindow.RufflePlayer = {};
        }
        // Merge parent window and frame configurations, will likely be applied too late though.
        elementWindow.RufflePlayer.config = Object.assign(Object.assign({}, globalConfig), ((_a = elementWindow.RufflePlayer.config) !== null && _a !== void 0 ? _a : {}));
    }
}
/**
 * Listen for changes to the DOM.
 */
function initMutationObserver() {
    const observer = new MutationObserver(function (mutationsList) {
        // If any embed or object nodes were added, re-run the polyfill to detect any new instances.
        const embedOrObjectAdded = mutationsList.some((mutation) => Array.from(mutation.addedNodes).some((node) => ["EMBED", "OBJECT"].includes(node.nodeName) ||
            (node instanceof Element &&
                node.querySelector("embed, object") !==
                    null)));
        if (embedOrObjectAdded) {
            polyfillFlashInstances();
            polyfillFrames();
        }
    });
    observer.observe(document, { childList: true, subtree: true });
}
/**
 * Polyfills the detection of Flash plugins in the browser.
 */
function pluginPolyfill() {
    if (!isFlashEnabledBrowser()) {
        installPlugin(FLASH_PLUGIN);
    }
}
/**
 * Polyfills legacy Flash content on the page.
 */
function polyfill() {
    if (!isFlashEnabledBrowser()) {
        polyfillFlashInstances();
        polyfillFrames();
        initMutationObserver();
    }
}

;// CONCATENATED MODULE: ../core/dist/source-api.js




/**
 * Represents this particular version of Ruffle.
 *
 * Multiple APIs can be instantiated from different sources; e.g. an "extension"
 * version, versus a "local" version. This expresses to the Public API
 * negotiator (see [[PublicAPI]]) what this particular version of Ruffle is and
 * how to control it.
 */
const SourceAPI = {
    /**
     * The version of this particular API, as a string in a semver compatible format.
     */
    version: buildInfo.versionNumber + "+" + buildInfo.buildDate.substring(0, 10),
    /**
     * Start up the polyfills.
     *
     * Do not run polyfills for more than one Ruffle source at a time.
     */
    polyfill() {
        polyfill();
    },
    /**
     * Polyfill the plugin detection.
     *
     * This needs to run before any plugin detection script does.
     */
    pluginPolyfill() {
        pluginPolyfill();
    },
    /**
     * Create a Ruffle player element using this particular version of Ruffle.
     *
     * @returns The player element. This is a DOM element that may be inserted
     * into the current page as you wish.
     */
    createPlayer() {
        const name = registerElement("ruffle-player", RufflePlayer);
        return document.createElement(name);
    },
};

;// CONCATENATED MODULE: ../core/dist/public-api.js



/**
 * Represents the Ruffle public API.
 *
 * The public API exists primarily to allow multiple installs of Ruffle on a
 * page (e.g. an extension install and a local one) to cooperate. In an ideal
 * situation, all Ruffle sources on the page install themselves into a single
 * public API, and then the public API picks the newest version by default.
 *
 * This API *is* versioned, in case we need to upgrade it. However, it must be
 * backwards- and forwards-compatible with all known sources.
 */
class PublicAPI {
    /**
     * Construct the Ruffle public API.
     *
     * Do not use this function to negotiate a public API. Instead, use
     * `public_api` to register your Ruffle source with an existing public API
     * if it exists.
     *
     * Constructing a Public API will also trigger it to initialize Ruffle once
     * the page loads, if the API has not already been superseded.
     *
     * @param prev What used to be in the public API slot.
     *
     * This is used to upgrade from a prior version of the public API, or from
     * a user-defined configuration object placed in the public API slot.
     */
    constructor(prev) {
        var _a;
        this.sources = (prev === null || prev === void 0 ? void 0 : prev.sources) || {};
        this.config = (prev === null || prev === void 0 ? void 0 : prev.config) || {};
        this.invoked = (prev === null || prev === void 0 ? void 0 : prev.invoked) || false;
        this.newestName = (prev === null || prev === void 0 ? void 0 : prev.newestName) || null;
        (_a = prev === null || prev === void 0 ? void 0 : prev.superseded) === null || _a === void 0 ? void 0 : _a.call(prev);
        if (document.readyState === "loading") {
            // Cloudflare Rocket Loader interferes with the DOMContentLoaded event,
            // so we listen for readystatechange instead
            document.addEventListener("readystatechange", this.init.bind(this));
        }
        else {
            window.setTimeout(this.init.bind(this), 0);
        }
    }
    /**
     * The version of the public API.
     *
     * This is *not* the version of Ruffle itself.
     *
     * This allows a page with an old version of the Public API to be upgraded
     * to a new version of the API. The public API is intended to be changed
     * very infrequently, if at all, but this provides an escape mechanism for
     * newer Ruffle sources to upgrade older installations.
     *
     * @returns The version of this public API.
     */
    get version() {
        return "0.1.0";
    }
    /**
     * Register a given source with the Ruffle Public API.
     *
     * @param name The name of the source.
     */
    registerSource(name) {
        this.sources[name] = SourceAPI;
    }
    /**
     * Determine the name of the newest registered source in the Public API.
     *
     * @returns The name of the source, or `null` if no source
     * has yet to be registered.
     */
    newestSourceName() {
        let newestName = null, newestVersion = Version.fromSemver("0.0.0");
        for (const k in this.sources) {
            if (Object.prototype.hasOwnProperty.call(this.sources, k)) {
                const kVersion = Version.fromSemver(this.sources[k].version);
                if (kVersion.hasPrecedenceOver(newestVersion)) {
                    newestName = k;
                    newestVersion = kVersion;
                }
            }
        }
        return newestName;
    }
    /**
     * Negotiate and start Ruffle.
     *
     * This function reads the config parameter to determine which polyfills
     * should be enabled. If the configuration parameter is missing, then we
     * use a built-in set of defaults sufficient to fool sites with static
     * content and weak plugin detection.
     */
    init() {
        if (!this.invoked) {
            this.invoked = true;
            this.newestName = this.newestSourceName();
            if (this.newestName === null) {
                throw new Error("No registered Ruffle source!");
            }
            const polyfills = "polyfills" in this.config ? this.config.polyfills : true;
            if (polyfills !== false) {
                this.sources[this.newestName].polyfill();
            }
        }
    }
    /**
     * Look up the newest Ruffle source and return it's API.
     *
     * @returns An instance of the Source API.
     */
    newest() {
        const name = this.newestSourceName();
        return name !== null ? this.sources[name] : null;
    }
    /**
     * Look up a specific Ruffle version (or any version satisfying a given set
     * of requirements) and return it's API.
     *
     * @param requirementString A set of semantic version requirement
     * strings that the player version must satisfy.
     * @returns An instance of the Source API, if one or more
     * sources satisfied the requirement.
     */
    satisfying(requirementString) {
        const requirement = VersionRange.fromRequirementString(requirementString);
        let valid = null;
        for (const k in this.sources) {
            if (Object.prototype.hasOwnProperty.call(this.sources, k)) {
                const version = Version.fromSemver(this.sources[k].version);
                if (requirement.satisfiedBy(version)) {
                    valid = this.sources[k];
                }
            }
        }
        return valid;
    }
    /**
     * Look up the newest Ruffle version compatible with the `local` source, if
     * it's installed. Otherwise, use the latest version.
     *
     * @returns An instance of the Source API
     */
    localCompatible() {
        if (this.sources["local"] !== undefined) {
            return this.satisfying("^" + this.sources["local"].version);
        }
        else {
            return this.newest();
        }
    }
    /**
     * Look up the newest Ruffle version with the exact same version as the
     * `local` source, if it's installed. Otherwise, use the latest version.
     *
     * @returns An instance of the Source API
     */
    local() {
        if (this.sources["local"] !== undefined) {
            return this.satisfying("=" + this.sources["local"].version);
        }
        else {
            return this.newest();
        }
    }
    /**
     * Indicates that this version of the public API has been superseded by a
     * newer version.
     *
     * This should only be called by a newer version of the Public API.
     * Identical versions of the Public API should not supersede older versions
     * of that same API.
     *
     * Unfortunately, we can't disable polyfills after-the-fact, so this
     * only lets you disable the init event...
     */
    superseded() {
        this.invoked = true;
    }
    /**
     * Join a source into the public API, if it doesn't already exist.
     *
     * @param prevRuffle The previous iteration of the Ruffle API.
     *
     * The `prevRuffle` param lists the previous object in the RufflePlayer
     * slot. We perform some checks to see if this is a Ruffle public API or a
     * conflicting object. If this is conflicting, then a new public API will
     * be constructed (see the constructor information for what happens to
     * `prevRuffle`).
     *
     * Note that Public API upgrades are deliberately not enabled in this
     * version of Ruffle, since there is no Public API to upgrade from.
     * @param sourceName The name of this particular
     * Ruffle source.
     *
     * If both parameters are provided they will be used to define a new Ruffle
     * source to register with the public API.
     * @returns The Ruffle Public API.
     */
    static negotiate(prevRuffle, sourceName) {
        let publicAPI;
        if (prevRuffle instanceof PublicAPI) {
            publicAPI = prevRuffle;
        }
        else {
            publicAPI = new PublicAPI(prevRuffle);
        }
        if (sourceName !== undefined) {
            publicAPI.registerSource(sourceName);
            // Install the faux plugin detection immediately.
            // This is necessary because scripts such as SWFObject check for the
            // Flash Player immediately when they load.
            // TODO: Maybe there's a better place for this.
            const polyfills = "polyfills" in publicAPI.config
                ? publicAPI.config.polyfills
                : true;
            if (polyfills !== false) {
                SourceAPI.pluginPolyfill();
            }
        }
        return publicAPI;
    }
}

;// CONCATENATED MODULE: ./src/ruffle.ts

function handleMessage(message) {
    var _a;
    switch (message.type) {
        case "load": {
            const api = (_a = window.RufflePlayer) !== null && _a !== void 0 ? _a : {};
            api.config = Object.assign(Object.assign(Object.assign({}, message.config), api.config), { openInNewTab });
            window.RufflePlayer = PublicAPI.negotiate(api, "extension");
            return {};
        }
        case "ping":
            // Ping back.
            return {};
        default:
            // Ignore unknown messages.
            return null;
    }
}
let ID = null;
if (document.currentScript !== undefined &&
    document.currentScript !== null &&
    "src" in document.currentScript &&
    document.currentScript.src !== "") {
    try {
        ID = new URL(document.currentScript.src).searchParams.get("id");
    }
    catch (_) {
        // ID remains null.
    }
}
function openInNewTab(swf) {
    const message = {
        to: `ruffle_content${ID}`,
        index: null,
        data: {
            type: "open_url_in_player",
            url: swf.toString(),
        },
    };
    window.postMessage(message, "*");
}
if (ID) {
    window.addEventListener("message", (event) => {
        // We only accept messages from ourselves.
        if (event.source !== window || !event.data) {
            return;
        }
        const { to, index, data } = event.data;
        if (to === `ruffle_page${ID}`) {
            const response = handleMessage(data);
            if (response) {
                const message = {
                    to: `ruffle_content${ID}`,
                    index,
                    data: response,
                };
                window.postMessage(message, "*");
            }
        }
    });
}

/******/ })()
;