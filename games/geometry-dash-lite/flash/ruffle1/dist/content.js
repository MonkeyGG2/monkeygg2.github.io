/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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

;// CONCATENATED MODULE: ./src/utils.ts

const DEFAULT_OPTIONS = Object.assign(Object.assign({}, DEFAULT_CONFIG), { ruffleEnable: true, ignoreOptout: false, autostart: false });
let i18n;
let scripting;
let storage;
let tabs;
let runtime;
let openOptionsPage;
let openPlayerPage;
function promisify(func) {
    return new Promise((resolve, reject) => {
        func((result) => {
            const error = chrome.runtime.lastError;
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}
function promisifyStorageArea(storage) {
    return {
        clear: () => promisify((cb) => storage.clear(cb)),
        get: (keys) => promisify((cb) => storage.get(keys || null, cb)),
        remove: (keys) => promisify((cb) => storage.remove(keys, cb)),
        set: (items) => promisify((cb) => storage.set(items, cb)),
    };
}
if (typeof chrome !== "undefined") {
    i18n = chrome.i18n;
    scripting = chrome.scripting;
    storage = {
        local: promisifyStorageArea(chrome.storage.local),
        sync: promisifyStorageArea(chrome.storage.sync),
        onChanged: {
            addListener: (listener) => chrome.storage.onChanged.addListener(listener),
        },
    };
    tabs = {
        reload: (tabId) => promisify((cb) => chrome.tabs.reload(tabId, undefined, cb)),
        query: (query) => promisify((cb) => chrome.tabs.query(query, cb)),
        sendMessage: (tabId, message, options) => promisify((cb) => chrome.tabs.sendMessage(tabId, message, options || {}, cb)),
    };
    runtime = chrome.runtime;
    openOptionsPage = () => promisify((cb) => chrome.tabs.create({ url: "/options.html" }, cb));
    openPlayerPage = () => promisify((cb) => chrome.tabs.create({ url: "/player.html" }, cb));
}
else if (typeof browser !== "undefined") {
    i18n = browser.i18n;
    scripting = browser.scripting;
    storage = browser.storage;
    tabs = browser.tabs;
    runtime = browser.runtime;
    openOptionsPage = () => browser.runtime.openOptionsPage();
    openPlayerPage = () => promisify((cb) => browser.tabs.create({ url: "/player.html" }).then(cb));
}
else {
    throw new Error("Extension API not found.");
}
async function getOptions() {
    const options = await storage.sync.get();
    // Copy over default options if they don't exist yet.
    return Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
}
/**
 * Gets the options that are explicitly different from the defaults.
 *
 * In the future we should just not store options we don't want to set.
 */
async function getExplicitOptions() {
    const options = await getOptions();
    const defaultOptions = DEFAULT_OPTIONS;
    for (const key in defaultOptions) {
        // @ts-expect-error: Element implicitly has an any type
        if (key in options && defaultOptions[key] === options[key]) {
            // @ts-expect-error: Element implicitly has an any type
            delete options[key];
        }
    }
    return options;
}

;// CONCATENATED MODULE: ./src/messages.ts
function isMessage(object) {
    return object.type !== undefined;
}

;// CONCATENATED MODULE: ./src/content.ts
/**
 * Pierce the extension sandbox by copying our code into main world.
 *
 * The isolation extension content scripts get is neat, but it causes problems
 * based on what browser you use:
 *
 * 1. On Chrome, you are explicitly banned from registering custom elements.
 * 2. On Firefox, you can register custom elements but they can't expose any
 *    useful API surface, and can't even see their own methods.
 *
 * This code exists to pierce the extension sandbox, while maintaining:
 *
 * 1. The isolation of not interfering with the page's execution environment
 *    unintentionally.
 * 2. The ability to load extension resources such as .wasm files.
 *
 * We also provide a content script message listener that proxies messages
 * into/from the main world.
 */


const pendingMessages = [];
const ID = Math.floor(Math.random() * 100000000000);
/**
 * Send a message to the main world, where Ruffle runs.
 * @param {*} data - JSON-serializable data to send to main world.
 * @returns {Promise<*>} JSON-serializable response from main world.
 */
function sendMessageToPage(data) {
    const message = {
        to: `ruffle_page${ID}`,
        index: pendingMessages.length,
        data,
    };
    window.postMessage(message, "*");
    return new Promise((resolve, reject) => {
        pendingMessages.push({ resolve, reject });
    });
}
/**
 * Inject a raw script to the main world.
 * @param {string} src - Script to inject.
 */
function injectScriptRaw(src) {
    const script = document.createElement("script");
    script.textContent = src;
    (document.head || document.documentElement).append(script);
    script.remove();
}
/**
 * Inject a script by URL to the main world.
 * @param {string} url - Script URL to inject.
 */
function injectScriptURL(url) {
    const script = document.createElement("script");
    const promise = new Promise((resolve, reject) => {
        script.addEventListener("load", function () {
            resolve();
            this.remove();
        });
        script.addEventListener("error", (e) => reject(e));
    });
    script.charset = "utf-8";
    script.src = url;
    (document.head || document.documentElement).append(script);
    return promise;
}
/**
 * Check whether the current page (or one of its ancestors) is configured
 * to opt-out from Ruffle.
 * @returns {boolean} Whether the current page opts-out or not.
 */
function checkPageOptout() {
    if (document.documentElement.hasAttribute("data-ruffle-optout")) {
        return true;
    }
    try {
        if (window.top &&
            window.top.document &&
            window.top.document.documentElement &&
            window.top.document.documentElement.hasAttribute("data-ruffle-optout")) {
            // In case the opting-out page uses iframes.
            return true;
        }
    }
    catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        console.warn(`Unable to check top-level optout: ${message}`);
    }
    return false;
}
/**
 * @returns {boolean} Whether the current page is an XML document or not.
 */
function isXMLDocument() {
    // Based on https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlVersion
    return document.createElement("foo").tagName !== "FOO";
}
(async () => {
    var _a;
    const options = await getOptions();
    const explicitOptions = await getExplicitOptions();
    const pageOptout = checkPageOptout();
    const shouldLoad = !isXMLDocument() &&
        options.ruffleEnable &&
        (options.ignoreOptout || !pageOptout);
    runtime.onMessage.addListener((message, _sender, sendResponse) => {
        if (shouldLoad) {
            sendMessageToPage(message).then((response) => {
                sendResponse({
                    loaded: true,
                    tabOptions: options,
                    optout: pageOptout,
                    data: response,
                });
            });
            return true;
        }
        else {
            sendResponse({
                loaded: false,
                tabOptions: options,
                optout: pageOptout,
            });
            return false;
        }
    });
    if (!shouldLoad) {
        return;
    }
    // We must run the plugin polyfill before any flash detection scripts.
    // Unfortunately, this might still be too late for some websites (issue #969).
    // NOTE: The script code injected here is the compiled form of
    // plugin-polyfill.ts. It is injected by tools/inject_plugin_polyfill.ts
    // which just search-and-replaces for this particular string.
    // On browsers which support ExecutionWorld MAIN this will be done earlier.
    if (navigator.wrappedJSObject &&
        ((_a = navigator.wrappedJSObject.plugins.namedItem("Shockwave Flash")) === null || _a === void 0 ? void 0 : _a.filename) !== "ruffle.js") {
        injectScriptRaw("/******/ (() => { // webpackBootstrap\n/******/ 	\"use strict\";\nvar __webpack_exports__ = {};\n\n;// CONCATENATED MODULE: ../core/dist/flash-identifiers.js\nconst FLASH_MIMETYPE = \"application/x-shockwave-flash\";\nconst FUTURESPLASH_MIMETYPE = \"application/futuresplash\";\nconst FLASH7_AND_8_MIMETYPE = \"application/x-shockwave-flash2-preview\";\nconst FLASH_MOVIE_MIMETYPE = \"application/vnd.adobe.flash.movie\";\nconst FLASH_ACTIVEX_CLASSID = \"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\";\n\n;// CONCATENATED MODULE: ../core/dist/plugin-polyfill.js\n\n/**\n * Replacement object for `MimeTypeArray` that lets us install new fake mime\n * types.\n *\n * Unlike plugins we can at least enumerate mime types in Firefox, so we don't\n * lose data.\n *\n * We also expose a method called `install` which adds a new plugin. This is\n * used to falsify Flash detection. If the existing `navigator.mimeTypes` has an\n * `install` method, you should not use `RuffleMimeTypeArray` as some other\n * plugin emulator is already present.\n */\nclass RuffleMimeTypeArray {\n    constructor(mimeTypes) {\n        this.__mimeTypes = [];\n        this.__namedMimeTypes = {};\n        if (mimeTypes) {\n            for (let i = 0; i < mimeTypes.length; i++) {\n                this.install(mimeTypes[i]);\n            }\n        }\n    }\n    /**\n     * Install a MIME Type into the array.\n     *\n     * @param mimeType The mime type to install\n     */\n    install(mimeType) {\n        const index = this.__mimeTypes.length;\n        this.__mimeTypes.push(mimeType);\n        this.__namedMimeTypes[mimeType.type] = mimeType;\n        this[mimeType.type] = mimeType;\n        this[index] = mimeType;\n    }\n    item(index) {\n        // This behavior is done to emulate a 32-bit uint,\n        // which browsers use.\n        return this.__mimeTypes[index >>> 0];\n    }\n    namedItem(name) {\n        return this.__namedMimeTypes[name];\n    }\n    get length() {\n        return this.__mimeTypes.length;\n    }\n    [Symbol.iterator]() {\n        return this.__mimeTypes[Symbol.iterator]();\n    }\n}\n/**\n * Equivalent object to `Plugin` that allows us to falsify plugins.\n */\nclass RufflePlugin extends RuffleMimeTypeArray {\n    constructor(name, description, filename) {\n        super();\n        this.name = name;\n        this.description = description;\n        this.filename = filename;\n    }\n}\n/**\n * Replacement object for `PluginArray` that lets us install new fake plugins.\n *\n * This object needs to wrap the native plugin array, since the user might have\n * actual plugins installed. Firefox doesn't let us enumerate the array, though,\n * which has some consequences. Namely, we can't actually perfectly wrap the\n * native plugin array, at least unless there's some secret \"unresolved object\n * property name handler\" that I've never known before in JS...\n *\n * We can still wrap `namedItem` perfectly at least.\n *\n * We also expose a method called `install` which adds a new plugin. This is\n * used to falsify Flash detection. If the existing `navigator.plugins` has an\n * `install` method, you should not use `RufflePluginArray` as some other plugin\n * emulator is already present.\n */\nclass RufflePluginArray {\n    constructor(plugins) {\n        this.__plugins = [];\n        this.__namedPlugins = {};\n        for (let i = 0; i < plugins.length; i++) {\n            this.install(plugins[i]);\n        }\n    }\n    install(plugin) {\n        const index = this.__plugins.length;\n        this.__plugins.push(plugin);\n        this.__namedPlugins[plugin.name] = plugin;\n        this[plugin.name] = plugin;\n        this[index] = plugin;\n    }\n    item(index) {\n        // This behavior is done to emulate a 32-bit uint,\n        // which browsers use. Cloudflare's anti-bot\n        // checks rely on this.\n        return this.__plugins[index >>> 0];\n    }\n    namedItem(name) {\n        return this.__namedPlugins[name];\n    }\n    refresh() {\n        // Nothing to do, we just need to define the method.\n    }\n    [Symbol.iterator]() {\n        return this.__plugins[Symbol.iterator]();\n    }\n    get length() {\n        return this.__plugins.length;\n    }\n}\n/**\n * A fake plugin designed to trigger Flash detection scripts.\n */\nconst FLASH_PLUGIN = new RufflePlugin(\"Shockwave Flash\", \"Shockwave Flash 32.0 r0\", \"ruffle.js\");\nFLASH_PLUGIN.install({\n    type: FUTURESPLASH_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"spl\",\n    enabledPlugin: FLASH_PLUGIN,\n});\nFLASH_PLUGIN.install({\n    type: FLASH_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"swf\",\n    enabledPlugin: FLASH_PLUGIN,\n});\nFLASH_PLUGIN.install({\n    type: FLASH7_AND_8_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"swf\",\n    enabledPlugin: FLASH_PLUGIN,\n});\nFLASH_PLUGIN.install({\n    type: FLASH_MOVIE_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"swf\",\n    enabledPlugin: FLASH_PLUGIN,\n});\n/**\n * Install a fake plugin such that detectors will see it in `navigator.plugins`.\n *\n * This function takes care to check if the existing implementation of\n * `navigator.plugins` already accepts fake plugin entries. If so, it will use\n * that version of the plugin array. This allows the plugin polyfill to compose\n * across multiple plugin emulators with the first emulator's polyfill winning.\n *\n * @param plugin The plugin to install\n */\nfunction installPlugin(plugin) {\n    if (!(\"install\" in navigator.plugins) || !navigator.plugins[\"install\"]) {\n        Object.defineProperty(navigator, \"plugins\", {\n            value: new RufflePluginArray(navigator.plugins),\n            writable: false,\n        });\n    }\n    const plugins = navigator.plugins;\n    plugins.install(plugin);\n    if (plugin.length > 0 &&\n        (!(\"install\" in navigator.mimeTypes) || !navigator.mimeTypes[\"install\"])) {\n        Object.defineProperty(navigator, \"mimeTypes\", {\n            value: new RuffleMimeTypeArray(navigator.mimeTypes),\n            writable: false,\n        });\n    }\n    const mimeTypes = navigator.mimeTypes;\n    for (let i = 0; i < plugin.length; i += 1) {\n        mimeTypes.install(plugin[i]);\n    }\n}\n\n;// CONCATENATED MODULE: ./src/plugin-polyfill.ts\n// This file is compiled and then injected into content.ts's compiled form.\n\ninstallPlugin(FLASH_PLUGIN);\n\n/******/ })()\n;");
    }
    await injectScriptURL(runtime.getURL(`dist/ruffle.js?id=${ID}`));
    window.addEventListener("message", (event) => {
        // We only accept messages from ourselves.
        if (event.source !== window || !event.data) {
            return;
        }
        const { to, index, data } = event.data;
        if (to === `ruffle_content${ID}`) {
            const request = index !== null ? pendingMessages[index] : null;
            if (request) {
                pendingMessages[index] = null;
                request.resolve(data);
            }
            else if (isMessage(data)) {
                switch (data.type) {
                    case "open_url_in_player":
                        chrome.runtime.sendMessage({
                            type: "open_url_in_player",
                            url: data.url,
                        });
                        break;
                    default:
                    // Ignore unknown messages.
                }
            }
        }
    });
    await sendMessageToPage({
        type: "load",
        config: Object.assign(Object.assign({}, explicitOptions), { autoplay: options.autostart ? "on" : "auto", unmuteOverlay: options.autostart ? "hidden" : "visible", splashScreen: !options.autostart }),
    });
})();

/******/ })()
;