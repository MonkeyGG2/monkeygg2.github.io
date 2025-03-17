/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../core/dist/flash-identifiers.js
const FLASH_MIMETYPE = "application/x-shockwave-flash";
const FUTURESPLASH_MIMETYPE = "application/futuresplash";
const FLASH7_AND_8_MIMETYPE = "application/x-shockwave-flash2-preview";
const FLASH_MOVIE_MIMETYPE = "application/vnd.adobe.flash.movie";
const FLASH_ACTIVEX_CLASSID = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";

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

;// CONCATENATED MODULE: ./src/plugin-polyfill.ts
// This file is compiled and then injected into content.ts's compiled form.

installPlugin(FLASH_PLUGIN);

/******/ })()
;