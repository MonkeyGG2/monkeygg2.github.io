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

;// CONCATENATED MODULE: ./src/common.ts

class CheckboxOption {
    constructor(checkbox, label) {
        this.checkbox = checkbox;
        this.label = label;
    }
    get input() {
        return this.checkbox;
    }
    get value() {
        return this.checkbox.checked;
    }
    set value(value) {
        this.checkbox.checked = value;
    }
}
class NumberOption {
    constructor(numberInput, label) {
        this.numberInput = numberInput;
        this.label = label;
        this.numberInput.addEventListener("input", () => {
            this.numberInput.reportValidity();
        });
    }
    get input() {
        return this.numberInput;
    }
    get value() {
        const ni = this.numberInput;
        const num = ni.valueAsNumber;
        if (Number.isNaN(num)) {
            return null;
        }
        if (ni.min) {
            const min = Number(ni.min);
            if (min > num) {
                return min;
            }
        }
        if (ni.max) {
            const max = Number(ni.max);
            if (num > max) {
                return max;
            }
        }
        return num;
    }
    set value(value) {
        var _a;
        this.numberInput.value = (_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : "";
    }
}
class SelectOption {
    constructor(select, label) {
        this.select = select;
        this.label = label;
        // Localize each `option`, if relevant.
        Array.prototype.forEach.call(select.options, (option) => {
            if (option.hasAttribute("id")) {
                const message = i18n.getMessage(`settings_${option.id}`);
                if (message) {
                    option.textContent = message;
                }
            }
        });
    }
    get input() {
        return this.select;
    }
    get value() {
        const index = this.select.selectedIndex;
        const option = this.select.options[index];
        // Convert the empty string to `null`.
        return option.value || null;
    }
    set value(value) {
        // Convert `null` to the empty string.
        value !== null && value !== void 0 ? value : (value = "");
        const options = Array.from(this.select.options);
        const index = options.findIndex((option) => option.value === value);
        this.select.selectedIndex = index;
    }
}
function getElement(option) {
    const label = option.getElementsByTagName("label")[0];
    const [input] = option.getElementsByTagName("input");
    if (input) {
        if (input.type === "checkbox") {
            return new CheckboxOption(input, label);
        }
        if (input.type === "number") {
            return new NumberOption(input, label);
        }
    }
    const [select] = option.getElementsByTagName("select");
    if (select) {
        return new SelectOption(select, label);
    }
    throw new Error("Unknown option element");
}
function findOptionElements() {
    const camelize = (s) => s.replace(/[^a-z\d](.)/gi, (_, char) => char.toUpperCase());
    const elements = new Map();
    for (const option of document.getElementsByClassName("option")) {
        const element = getElement(option);
        const key = camelize(element.input.id);
        elements.set(key, element);
    }
    return elements;
}
async function bindOptions(onChange) {
    const elements = findOptionElements();
    const options = await getOptions();
    for (const [key, element] of elements.entries()) {
        // Bind initial value.
        element.value = options[key];
        // Prevent transition on load.
        // Method from https://stackoverflow.com/questions/11131875.
        element.label.classList.add("notransition");
        element.label.offsetHeight; // Trigger a reflow, flushing the CSS changes.
        element.label.classList.remove("notransition");
        // Localize label.
        const message = i18n.getMessage(`settings_${element.input.id}`);
        if (message) {
            element.label.textContent = message;
        }
        // Listen for user input.
        element.input.addEventListener("change", () => {
            const value = element.value;
            options[key] = value;
            storage.sync.set({ [key]: value });
        });
    }
    // Listen for future changes.
    storage.onChanged.addListener((changes, namespace) => {
        if (namespace !== "sync") {
            return;
        }
        for (const [key, option] of Object.entries(changes)) {
            const element = elements.get(key);
            if (!element) {
                continue;
            }
            element.value = option.newValue;
            options[key] = option.newValue;
        }
        if (onChange) {
            onChange(options);
        }
    });
    if (onChange) {
        onChange(options);
    }
}
async function resetOptions() {
    storage.sync.clear();
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

;// CONCATENATED MODULE: ./src/options.ts



window.addEventListener("DOMContentLoaded", () => {
    document.title = i18n.getMessage("settings_page");
    {
        const vt = document.getElementById("version-text");
        vt.textContent = buildInfo.versionName;
    }
    {
        const ao = document.getElementById("advanced-options");
        ao.textContent = i18n.getMessage("settings_advanced_options");
    }
    {
        const rs = document.getElementById("reset-settings");
        rs.textContent = i18n.getMessage("settings_reset");
        rs.addEventListener("click", async () => {
            if (confirm(i18n.getMessage("settings_reset_confirm"))) {
                await resetOptions();
                window.location.reload();
            }
        });
    }
    bindOptions();
});

/******/ })()
;