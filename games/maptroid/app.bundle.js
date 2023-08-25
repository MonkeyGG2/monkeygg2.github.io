/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game/GameExtensions/PhaserSprite.ts":
/*!*************************************************!*\
  !*** ./src/Game/GameExtensions/PhaserSprite.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PhaserSprite {
    constructor(sprite) {
        this.sprite = sprite;
    }
    setOrigin(x, y) {
        this.sprite.setOrigin(x, y);
    }
    setFrame(frameIndex) {
        this.sprite.setFrame(frameIndex);
    }
    setTexture(textureKey, frameIndex) {
        this.sprite.setTexture(textureKey, frameIndex);
    }
    setDepth(depth) {
        this.sprite.setDepth(depth);
    }
    setX(x) {
        this.sprite.setX(x);
    }
    setY(y) {
        this.sprite.setY(y);
    }
    setVisible(visible) {
        this.sprite.setVisible(visible);
    }
    animate(key) {
        this.sprite.anims.play(key, true);
    }
    destroy() {
        this.sprite.destroy();
    }
    isVisible() {
        return this.sprite.visible;
    }
    getSpriteKey() {
        return this.sprite.texture.key;
    }
    setInteractiveWithPointer() {
        this.sprite.setInteractive({ useHandCursor: true });
    }
}
exports.PhaserSprite = PhaserSprite;
/*
Sprite depth values:
<10 - background
10-20 sprites
100+ - hud
*/


/***/ }),

/***/ "./src/Game/GameMap/GameMap.ts":
/*!*************************************!*\
  !*** ./src/Game/GameMap/GameMap.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GameMapCell_1 = __webpack_require__(/*! ./GameMapCell */ "./src/Game/GameMap/GameMapCell.ts");
const MapCellResolver_1 = __webpack_require__(/*! ./MapCellResolver */ "./src/Game/GameMap/MapCellResolver.ts");
const Items_1 = __webpack_require__(/*! ../Items */ "./src/Game/Items/index.ts");
const DummySprite_1 = __webpack_require__(/*! ./Tests/Testability/DummySprite */ "./src/Game/GameMap/Tests/Testability/DummySprite.ts");
class GameMap {
    constructor(player) {
        this.secretMountainKeyboardEnabled = false;
        this.mapCells = new Map();
        this.player = player;
        player.moveOnGrid({ X: 49, Y: 49 });
        this.mapCellResolver = new MapCellResolver_1.MapCellResolver(player);
    }
    canPlayerTeleport() {
        return this.player.hasTeleport();
    }
    getCurrentBiome() {
        return this.getCell(this.player.getGridCoordinates()).getGameMapCellState();
    }
    addMapCell(mapCell, tileSprite, moveableTargetSprite) {
        const gridCoordinates = { X: mapCell.X, Y: mapCell.Y };
        if (this.hasCell(gridCoordinates)) {
            throw `Cell already exists in map at X:${mapCell.X} - Y:${mapCell.Y}`;
        }
        this.mapCells.set(`${gridCoordinates.X},${gridCoordinates.Y}`, new GameMapCell_1.GameMapCell(mapCell, tileSprite, moveableTargetSprite));
    }
    getCell(gridCoordinates) {
        if (this.hasCell(gridCoordinates)) {
            return this.mapCells.get(`${gridCoordinates.X},${gridCoordinates.Y}`);
        }
    }
    addItemToCell(gridCoordinates, item) {
        const cell = this.getCell(gridCoordinates);
        if (cell) {
            cell.addItemToCell(item);
        }
        else {
            throw new Error(`Failed to get cell ${gridCoordinates.X}:${gridCoordinates.Y} for item ${item} to add.`);
        }
    }
    onClick(gridCoordinates, callback) {
        if (this.secretMountainKeyboardEnabled) {
            if (gridCoordinates.X === 22 && gridCoordinates.Y === 12) {
                this.player.moveOnGrid({ X: 54, Y: 9 });
                this.onPlayerMoved(this.getCell({ X: 54, Y: 9 }));
                callback(68, new Items_1.Item(Items_1.ItemType.None, new DummySprite_1.DummySprite()));
                return;
            }
            if (gridCoordinates.X === 80 && gridCoordinates.Y === 23) {
                this.player.moveOnGrid({ X: 54, Y: 9 });
                this.onPlayerMoved(this.getCell({ X: 54, Y: 9 }));
                callback(68, new Items_1.Item(Items_1.ItemType.None, new DummySprite_1.DummySprite()));
                return;
            }
            if (gridCoordinates.X === 53 && gridCoordinates.Y === 9) {
                this.player.moveOnGrid({ X: 22, Y: 13 });
                this.onPlayerMoved(this.getCell({ X: 22, Y: 13 }));
                callback(68, new Items_1.Item(Items_1.ItemType.None, new DummySprite_1.DummySprite()));
                return;
            }
        }
        const playerCell = this.getCell(this.player.getGridCoordinates());
        const targetCell = this.getCell(gridCoordinates);
        if (targetCell) {
            if (this.mapCellResolver.canMove(playerCell, targetCell)) {
                this.player.moveOnGrid(gridCoordinates);
                this.onPlayerMoved(targetCell);
                targetCell.onPlayerEnter(this.player, (eventId, item) => {
                    this.raiseGameEvent(eventId, item, callback);
                });
            }
        }
    }
    enableKeyBoardTeleportForSecretMountain() {
        this.secretMountainKeyboardEnabled = true;
    }
    raiseGameEvent(eventId, item, callback) {
        switch (eventId) {
            case 1: // xray open up lab 31,40 to sprite 107
                const gateCell = this.getCell({ X: 31, Y: 40 });
                gateCell.changeTileSprite(107);
                break;
            case 51: // fuel found
                if (this.player.hasAllFuel()) {
                    callback(52, item);
                }
                break;
            case 100: // found left peak
                if (!this.player.FoundLeftPeak && !this.player.FoundRightPeak) {
                    callback(102, item); // first peak discovery
                }
                this.player.FoundLeftPeak = true;
                if (this.player.FoundLeftPeak && this.player.FoundRightPeak && !this.player.FoundBothPeaks) {
                    this.player.FoundBothPeaks = true;
                    callback(103, item); // second peak discovery
                }
                break;
            case 101: // found right peak
                if (!this.player.FoundLeftPeak && !this.player.FoundRightPeak) {
                    callback(102, item); // first peak discovery
                }
                this.player.FoundRightPeak = true;
                if (this.player.FoundLeftPeak && this.player.FoundRightPeak && !this.player.FoundBothPeaks) {
                    this.player.FoundBothPeaks = true;
                    callback(103, item); // second peak discovery
                }
                break;
            case 69: // home cell
                if (this.player.hasAllFuel()) {
                    callback(70, new Items_1.Item(Items_1.ItemType.None, new DummySprite_1.DummySprite()));
                }
                break;
            default:
                callback(eventId, item);
                break;
        }
    }
    getCellPercentage() {
        let discoveredCount = 0;
        this.mapCells.forEach((cell) => {
            if (cell.isDiscovered()) {
                discoveredCount++;
            }
        });
        if (discoveredCount === 788) {
            return 100;
        }
        return Math.floor((discoveredCount / 788) * 100);
    }
    useItem(itemType) {
        const playerCell = this.getCell(this.player.getGridCoordinates());
        let tileBroke;
        if (itemType === Items_1.ItemType.Shovel && this.player.hasShovel()) {
            tileBroke = this.mapCellResolver.digTile(playerCell);
        }
        if (itemType === Items_1.ItemType.Hammer && this.player.hasHammer()) {
            if (!this.mapCellResolver.mineTile(playerCell)) {
                return false;
            }
            tileBroke = true;
            const cellsToHammer = this.getNeighbourCells(playerCell, 1);
            cellsToHammer.forEach((cell) => {
                this.mapCellResolver.mineTile(cell);
            });
        }
        if (itemType === Items_1.ItemType.Recall && this.player.hasRecall()) {
            this.player.moveOnGrid({ X: 49, Y: 49 });
        }
        this.discoverNeighbourCells(playerCell);
        return tileBroke;
    }
    keyboardMove(moveOnX, moveOnY, callback) {
        const playerCoords = this.player.getGridCoordinates();
        this.onClick({ X: playerCoords.X + moveOnX, Y: playerCoords.Y + moveOnY }, callback);
    }
    getPlayerGridCoordinates() {
        return this.player.getGridCoordinates();
    }
    discoverCell(gridCoordinates) {
        let cell = this.getCell(gridCoordinates);
        cell.makeVisible();
    }
    onPlayerMoved(movedCell) {
        this.discoverNeighbourCells(movedCell);
    }
    discoverNeighbourCells(movedCell) {
        this.removeMoveableTargetsOnAllCells();
        const neighbourCells = this.getNeighbourCells(movedCell, this.player.getViewRange());
        neighbourCells.forEach((cell) => {
            if (this.mapCellResolver.canSee(movedCell, cell, this.player.getViewRange())) {
                cell.makeVisible();
                if (!this.player.hasTeleport()) {
                    this.addMoveableTarget(movedCell, cell);
                }
            }
        });
    }
    getNeighbourCells(gameMapCell, neighbourRange) {
        const cells = [];
        for (let i = -neighbourRange; i < neighbourRange + 1; i++) {
            for (let j = -neighbourRange; j < neighbourRange + 1; j++) {
                const neighbourCell = this.getCell({
                    X: i + gameMapCell.getGridCoordinates().X,
                    Y: j + gameMapCell.getGridCoordinates().Y,
                });
                if (neighbourCell) {
                    cells.push(neighbourCell);
                }
            }
        }
        return cells;
    }
    addMoveableTarget(movedCell, neighbourCell) {
        if (movedCell.getGridCoordinates().X === neighbourCell.getGridCoordinates().X &&
            movedCell.getGridCoordinates().Y === neighbourCell.getGridCoordinates().Y) {
            return;
        }
        if (this.mapCellResolver.canMove(movedCell, neighbourCell)) {
            neighbourCell.addMoveableTarget();
        }
    }
    removeMoveableTargetsOnAllCells() {
        this.mapCells.forEach((cell) => {
            cell.removeMoveableTarget();
        });
    }
    hasCell(gridCoordinates) {
        return this.mapCells.has(`${gridCoordinates.X},${gridCoordinates.Y}`);
    }
}
exports.GameMap = GameMap;


/***/ }),

/***/ "./src/Game/GameMap/GameMapCell.ts":
/*!*****************************************!*\
  !*** ./src/Game/GameMap/GameMapCell.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Items_1 = __webpack_require__(/*! ../Items */ "./src/Game/Items/index.ts");
const GameMapCellState_1 = __webpack_require__(/*! ./GameMapCellState */ "./src/Game/GameMap/GameMapCellState.ts");
const MapCellResolver_1 = __webpack_require__(/*! ./MapCellResolver */ "./src/Game/GameMap/MapCellResolver.ts");
const DummySprite_1 = __webpack_require__(/*! ./Tests/Testability/DummySprite */ "./src/Game/GameMap/Tests/Testability/DummySprite.ts");
class GameMapCell {
    constructor(mapCell, tileSprite, moveableTargetSprite) {
        this.gridCoordinates = { X: mapCell.X, Y: mapCell.Y };
        this.x = mapCell.X;
        this.y = mapCell.Y;
        this.spriteIndex = mapCell.SpriteIndex;
        this.tileSprite = tileSprite;
        this.tileSprite.setTexture(mapCell.SpriteSheet, this.spriteIndex);
        this.tileSprite.setOrigin(0, 0);
        this.tileSprite.setX(this.x * 32);
        this.tileSprite.setY(this.y * 32);
        this.gameMapCellState = GameMapCellState_1.GameMapCellState.Blank;
        if (mapCell.SpriteSheet === 'blankmap_snow') {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.BlankSnow;
        }
        if (mapCell.SpriteSheet === 'blankmap_cavern') {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.BlankCavern;
        }
        if (mapCell.SpriteSheet === 'blankmap_gas') {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.BlankGas;
        }
        this.tileSprite.setVisible(false);
        if (mapCell.X === 49 && mapCell.Y === 49) {
            this.tileSprite.setVisible(true);
        }
        this.moveableTargetSprite = moveableTargetSprite;
    }
    isDiscovered() {
        switch (this.gameMapCellState) {
            case GameMapCellState_1.GameMapCellState.Discovered:
            case GameMapCellState_1.GameMapCellState.DiscoveredCavern:
            case GameMapCellState_1.GameMapCellState.DiscoveredSnow:
            case GameMapCellState_1.GameMapCellState.DiscoveredGas:
                return true;
        }
        return false;
    }
    getGridCoordinates() {
        return this.gridCoordinates;
    }
    addItemToCell(item) {
        this.item = item;
    }
    onPlayerEnter(player, callback) {
        var _a;
        if ((_a = this.item) === null || _a === void 0 ? void 0 : _a.canPickUp()) {
            player.foundItem(this.item);
            this.item.pickUp();
            if (this.item.ItemType === Items_1.ItemType.Xray) {
                callback(1, this.item);
            }
            callback(50, this.item);
            if (this.item.ItemType === Items_1.ItemType.fuel1 ||
                this.item.ItemType === Items_1.ItemType.fuel2 ||
                this.item.ItemType === Items_1.ItemType.fuel3 ||
                this.item.ItemType === Items_1.ItemType.fuel4) {
                callback(51, this.item);
            }
        }
        let nullItem = new Items_1.Item(Items_1.ItemType.None, new DummySprite_1.DummySprite());
        // left peak discovered
        if (this.gridCoordinates.X === 22 && this.gridCoordinates.Y === 13) {
            callback(100, nullItem);
        }
        // right peak discovered
        if (this.gridCoordinates.X === 80 && this.gridCoordinates.Y === 24) {
            callback(101, nullItem);
        }
        // made it home, nice
        if (this.gridCoordinates.X === 49 && this.gridCoordinates.Y === 49) {
            callback(69, nullItem);
        }
        if (this.gameMapCellState === GameMapCellState_1.GameMapCellState.Blank) {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.Discovered;
            this.tileSprite.setTexture('discoveredmap', this.spriteIndex);
        }
        if (this.gameMapCellState === GameMapCellState_1.GameMapCellState.BlankSnow) {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.DiscoveredSnow;
            this.tileSprite.setTexture('discoveredmap_snow', this.spriteIndex);
        }
        if (this.gameMapCellState === GameMapCellState_1.GameMapCellState.BlankCavern) {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.DiscoveredCavern;
            this.tileSprite.setTexture('discoveredmap_cavern', this.spriteIndex);
        }
        if (this.gameMapCellState === GameMapCellState_1.GameMapCellState.BlankGas) {
            this.gameMapCellState = GameMapCellState_1.GameMapCellState.DiscoveredGas;
            this.tileSprite.setTexture('discoveredmap_gas', this.spriteIndex);
        }
    }
    makeVisible() {
        this.tileSprite.setVisible(true);
        if (this.item) {
            this.item.makeVisible();
        }
    }
    isVisible() {
        return this.tileSprite.isVisible();
    }
    getCellWall() {
        return MapCellResolver_1.MapCellResolver.spriteIndexToCellWall(this.spriteIndex);
    }
    getGameMapCellState() {
        return this.gameMapCellState;
    }
    addMoveableTarget() {
        this.moveableTargetSprite.setVisible(true);
        this.moveableTargetSprite.setDepth(20);
        this.moveableTargetSprite.setOrigin(0, 0);
        this.moveableTargetSprite.setX(this.x * 32);
        this.moveableTargetSprite.setY(this.y * 32);
    }
    removeMoveableTarget() {
        this.moveableTargetSprite.setVisible(false);
    }
    getSpriteIndex() {
        return this.spriteIndex;
    }
    changeTileSprite(newSpriteIndex) {
        this.spriteIndex = newSpriteIndex;
        this.tileSprite.setFrame(newSpriteIndex);
    }
    digTile(newSpriteIndex) {
        if (newSpriteIndex !== this.spriteIndex) {
            this.spriteIndex = newSpriteIndex;
            this.tileSprite.setFrame(newSpriteIndex);
            return true;
        }
        return false;
    }
}
exports.GameMapCell = GameMapCell;


/***/ }),

/***/ "./src/Game/GameMap/GameMapCellState.ts":
/*!**********************************************!*\
  !*** ./src/Game/GameMap/GameMapCellState.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameMapCellState;
(function (GameMapCellState) {
    GameMapCellState[GameMapCellState["Blank"] = 0] = "Blank";
    GameMapCellState[GameMapCellState["Discovered"] = 1] = "Discovered";
    GameMapCellState[GameMapCellState["BlankSnow"] = 2] = "BlankSnow";
    GameMapCellState[GameMapCellState["DiscoveredSnow"] = 3] = "DiscoveredSnow";
    GameMapCellState[GameMapCellState["BlankCavern"] = 4] = "BlankCavern";
    GameMapCellState[GameMapCellState["DiscoveredCavern"] = 5] = "DiscoveredCavern";
    GameMapCellState[GameMapCellState["BlankGas"] = 6] = "BlankGas";
    GameMapCellState[GameMapCellState["DiscoveredGas"] = 7] = "DiscoveredGas";
})(GameMapCellState = exports.GameMapCellState || (exports.GameMapCellState = {}));


/***/ }),

/***/ "./src/Game/GameMap/GameMapCellWall.ts":
/*!*********************************************!*\
  !*** ./src/Game/GameMap/GameMapCellWall.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameMapCellWall;
(function (GameMapCellWall) {
    GameMapCellWall[GameMapCellWall["None"] = 0] = "None";
    GameMapCellWall[GameMapCellWall["Left"] = 1] = "Left";
    GameMapCellWall[GameMapCellWall["Up"] = 2] = "Up";
    GameMapCellWall[GameMapCellWall["Right"] = 4] = "Right";
    GameMapCellWall[GameMapCellWall["Down"] = 8] = "Down";
})(GameMapCellWall = exports.GameMapCellWall || (exports.GameMapCellWall = {}));


/***/ }),

/***/ "./src/Game/GameMap/MapCellResolver.ts":
/*!*********************************************!*\
  !*** ./src/Game/GameMap/MapCellResolver.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GameMapCellWall_1 = __webpack_require__(/*! ./GameMapCellWall */ "./src/Game/GameMap/GameMapCellWall.ts");
const GameMapCellState_1 = __webpack_require__(/*! ./GameMapCellState */ "./src/Game/GameMap/GameMapCellState.ts");
class MapCellResolver {
    constructor(player) {
        this.player = player;
    }
    canMove(originCell, targetCell) {
        if (this.player.hasTeleport() && targetCell.isVisible()) {
            return true;
        }
        if (this.isWallBetween(originCell, targetCell)) {
            return false;
        }
        if (!this.canMoveInBiome(targetCell)) {
            return false;
        }
        return this.canBasicMove(originCell.getGridCoordinates(), targetCell.getGridCoordinates());
    }
    canSee(originCell, neighbourCell, playerViewRange) {
        const absX = this.getAbsoluteNumber(originCell.getGridCoordinates().X, neighbourCell.getGridCoordinates().X);
        const absY = this.getAbsoluteNumber(originCell.getGridCoordinates().Y, neighbourCell.getGridCoordinates().Y);
        if ((absX <= playerViewRange && absY === 0) || (absY <= playerViewRange && absX === 0)) {
            if (!this.isWallBetween(originCell, neighbourCell) || this.player.hasXray()) {
                return true;
            }
        }
    }
    digTile(gameMapCell) {
        return gameMapCell.digTile(MapCellResolver.diggableSpriteIndexToPlainSpriteIndex(gameMapCell.getSpriteIndex()));
    }
    mineTile(gameMapCell) {
        return gameMapCell.digTile(MapCellResolver.mineableSpriteIndexToPlainSpriteIndex(gameMapCell.getSpriteIndex()));
    }
    canBasicMove(originCoordinates, targetCoordinates) {
        const absX = this.getAbsoluteNumber(originCoordinates.X, targetCoordinates.X);
        const absY = this.getAbsoluteNumber(originCoordinates.Y, targetCoordinates.Y);
        const playerMaxX = this.player.getMaxMovementX();
        let playerMaxY = this.player.getMaxMovementYDown();
        if (originCoordinates.Y - targetCoordinates.Y > 0) {
            playerMaxY = this.player.getMaxMovementYUp();
        }
        return (absX <= playerMaxX && absY === 0) || (absY <= playerMaxY && absX === 0);
    }
    getAbsoluteNumber(x, y) {
        return Math.abs(x - y);
    }
    canMoveInBiome(targetCell) {
        if (targetCell.getGameMapCellState() === GameMapCellState_1.GameMapCellState.BlankSnow || targetCell.getGameMapCellState() === GameMapCellState_1.GameMapCellState.DiscoveredSnow) {
            if (this.player.canMoveInSnow()) {
                return true;
            }
            return false;
        }
        if (targetCell.getGameMapCellState() === GameMapCellState_1.GameMapCellState.BlankCavern || targetCell.getGameMapCellState() === GameMapCellState_1.GameMapCellState.DiscoveredCavern) {
            if (this.player.canMoveInCavern()) {
                return true;
            }
            return false;
        }
        if (targetCell.getGameMapCellState() === GameMapCellState_1.GameMapCellState.BlankGas || targetCell.getGameMapCellState() === GameMapCellState_1.GameMapCellState.DiscoveredGas) {
            if (this.player.canMoveInGas()) {
                return true;
            }
            return false;
        }
        return true;
    }
    isWallBetween(originCell, targetCell) {
        let direction;
        if (targetCell.getGridCoordinates().X > originCell.getGridCoordinates().X) {
            direction = GameMapCellWall_1.GameMapCellWall.Right;
        }
        if (targetCell.getGridCoordinates().X < originCell.getGridCoordinates().X) {
            direction = GameMapCellWall_1.GameMapCellWall.Left;
        }
        if (targetCell.getGridCoordinates().Y > originCell.getGridCoordinates().Y) {
            direction = GameMapCellWall_1.GameMapCellWall.Down;
        }
        if (targetCell.getGridCoordinates().Y < originCell.getGridCoordinates().Y) {
            direction = GameMapCellWall_1.GameMapCellWall.Up;
        }
        return (originCell.getCellWall() & direction) > 0;
    }
    static diggableSpriteIndexToPlainSpriteIndex(spriteIndex) {
        let plainSpriteIndex = spriteIndex;
        switch (spriteIndex) {
            case 120:
                plainSpriteIndex = 47;
                break;
            case 121:
                plainSpriteIndex = 62;
                break;
            case 122:
                plainSpriteIndex = 5;
                break;
        }
        return plainSpriteIndex;
    }
    static mineableSpriteIndexToPlainSpriteIndex(spriteIndex) {
        let plainSpriteIndex = spriteIndex;
        switch (spriteIndex) {
            case 123:
                plainSpriteIndex = 6;
                break;
            case 124:
                plainSpriteIndex = 6;
                break;
            case 125:
                plainSpriteIndex = 15;
                break;
        }
        return plainSpriteIndex;
    }
    static spriteIndexToCellWall(spriteIndex) {
        switch (spriteIndex) {
            case 1:
            case 46:
            case 47:
            case 48:
                return GameMapCellWall_1.GameMapCellWall.Up;
            case 17:
            case 64:
            case 79:
            case 94:
                return GameMapCellWall_1.GameMapCellWall.Right;
            case 31:
            case 106:
            case 107:
            case 108:
            case 121:
                return GameMapCellWall_1.GameMapCellWall.Down;
            case 15:
            case 60:
            case 75:
            case 90:
                return GameMapCellWall_1.GameMapCellWall.Left;
            case 2:
            case 49:
                return GameMapCellWall_1.GameMapCellWall.Up | GameMapCellWall_1.GameMapCellWall.Right;
            case 6:
            case 120:
                return GameMapCellWall_1.GameMapCellWall.Up | GameMapCellWall_1.GameMapCellWall.Down;
            case 0:
            case 45:
                return GameMapCellWall_1.GameMapCellWall.Up | GameMapCellWall_1.GameMapCellWall.Left;
            case 32:
            case 109:
                return GameMapCellWall_1.GameMapCellWall.Right | GameMapCellWall_1.GameMapCellWall.Down;
            case 5:
            case 125:
                return GameMapCellWall_1.GameMapCellWall.Right | GameMapCellWall_1.GameMapCellWall.Left;
            case 30:
            case 105:
                return GameMapCellWall_1.GameMapCellWall.Down | GameMapCellWall_1.GameMapCellWall.Left;
            // all but down
            case 3:
                return GameMapCellWall_1.GameMapCellWall.Up | GameMapCellWall_1.GameMapCellWall.Right | GameMapCellWall_1.GameMapCellWall.Left;
            // all but left
            case 4:
            case 123:
                return GameMapCellWall_1.GameMapCellWall.Up | GameMapCellWall_1.GameMapCellWall.Right | GameMapCellWall_1.GameMapCellWall.Down;
            // all but up
            case 18:
            case 122:
                return GameMapCellWall_1.GameMapCellWall.Right | GameMapCellWall_1.GameMapCellWall.Left | GameMapCellWall_1.GameMapCellWall.Down;
            // all but right
            case 19:
            case 124:
                return GameMapCellWall_1.GameMapCellWall.Up | GameMapCellWall_1.GameMapCellWall.Down | GameMapCellWall_1.GameMapCellWall.Left;
        }
    }
}
exports.MapCellResolver = MapCellResolver;


/***/ }),

/***/ "./src/Game/GameMap/MapObjectApplier.ts":
/*!**********************************************!*\
  !*** ./src/Game/GameMap/MapObjectApplier.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhaserSprite_1 = __webpack_require__(/*! ../GameExtensions/PhaserSprite */ "./src/Game/GameExtensions/PhaserSprite.ts");
const Items_1 = __webpack_require__(/*! ../Items */ "./src/Game/Items/index.ts");
class MapObjectApplier {
    applyMapObjects(gameScene, gameMap, mapObjects) {
        mapObjects.forEach((mapObject) => {
            const gridCoordinateX = Number(mapObject.properties.find((p) => p.name === 'GridCoordinateX').value);
            const gridCoordinateY = Number(mapObject.properties.find((p) => p.name === 'GridCoordinateY').value);
            const spriteKey = mapObject.properties.find((p) => p.name === 'SpriteKey').value;
            if (isNaN(gridCoordinateX) || isNaN(gridCoordinateY)) {
                throw new Error(`Loading map object ${mapObject.name} coordinates failed.`);
            }
            if (!(mapObject.name in Items_1.ItemType)) {
                throw new Error('// todo');
            }
            const itemType = mapObject.name;
            const item = new Items_1.Item(itemType, new PhaserSprite_1.PhaserSprite(gameScene.add.sprite(gridCoordinateX * 32 + 16, gridCoordinateY * 32 + 16, spriteKey)));
            gameMap.addItemToCell({ X: gridCoordinateX, Y: gridCoordinateY }, item);
        });
    }
}
exports.MapObjectApplier = MapObjectApplier;


/***/ }),

/***/ "./src/Game/GameMap/Tests/Testability/DummySprite.ts":
/*!***********************************************************!*\
  !*** ./src/Game/GameMap/Tests/Testability/DummySprite.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DummySprite {
    setOrigin(x, y) { }
    setFrame(frameIndex) { }
    setTexture(textureKey, frameIndex) { }
    setDepth(depth) { }
    setX(x) { }
    setY(y) { }
    setVisible(visible) { }
    animate(key) { }
    destroy() { }
    isVisible() {
        return true;
    }
    getSpriteKey() {
        return '';
    }
    setInteractiveWithPointer() { }
}
exports.DummySprite = DummySprite;


/***/ }),

/***/ "./src/Game/Items/Inventory.ts":
/*!*************************************!*\
  !*** ./src/Game/Items/Inventory.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
}
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/Game/Items/Item.ts":
/*!********************************!*\
  !*** ./src/Game/Items/Item.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(itemType, sprite) {
        this.sprite = sprite;
        this.sprite.setDepth(10);
        this.sprite.setVisible(false);
        this.ItemType = itemType;
    }
    destroy() {
        this.sprite.destroy();
    }
    makeVisible() {
        this.sprite.setVisible(true);
    }
    canPickUp() {
        return !this.pickedUp;
    }
    pickUp() {
        this.pickedUp = true;
        this.sprite.setTexture('tiles', 4);
    }
    getSpriteKey() {
        return this.sprite.getSpriteKey();
    }
}
exports.Item = Item;


/***/ }),

/***/ "./src/Game/Items/ItemType.ts":
/*!************************************!*\
  !*** ./src/Game/Items/ItemType.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemType;
(function (ItemType) {
    ItemType["None"] = "None";
    ItemType["Shovel"] = "Shovel";
    ItemType["Hammer"] = "Hammer";
    ItemType["Recall"] = "Recall";
    ItemType["GrapplingHook"] = "GrapplingHook";
    ItemType["Torch"] = "Torch";
    ItemType["MountainGear"] = "MountainGear";
    ItemType["GasMask"] = "GasMask";
    ItemType["Xray"] = "Xray";
    ItemType["Teleport"] = "Teleport";
    ItemType["fuel1"] = "fuel1";
    ItemType["fuel2"] = "fuel2";
    ItemType["fuel3"] = "fuel3";
    ItemType["fuel4"] = "fuel4";
    ItemType["note1"] = "note1";
    ItemType["note2"] = "note2";
    ItemType["note3"] = "note3";
    ItemType["note4"] = "note4";
    ItemType["note5"] = "note5";
    ItemType["note6"] = "note6";
    ItemType["note7"] = "note7";
    ItemType["note8"] = "note8";
    ItemType["note9"] = "note9";
    ItemType["note10"] = "note10";
})(ItemType = exports.ItemType || (exports.ItemType = {}));


/***/ }),

/***/ "./src/Game/Items/index.ts":
/*!*********************************!*\
  !*** ./src/Game/Items/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Inventory */ "./src/Game/Items/Inventory.ts"));
__export(__webpack_require__(/*! ./Item */ "./src/Game/Items/Item.ts"));
__export(__webpack_require__(/*! ./ItemType */ "./src/Game/Items/ItemType.ts"));


/***/ }),

/***/ "./src/Game/Player.ts":
/*!****************************!*\
  !*** ./src/Game/Player.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ItemType_1 = __webpack_require__(/*! ./Items/ItemType */ "./src/Game/Items/ItemType.ts");
class Player {
    constructor(sprite, itemCollection) {
        this.sprite = sprite;
        this.sprite.setDepth(10);
        this.inventory = itemCollection;
    }
    moveOnGrid(coordinates) {
        this.x = coordinates.X;
        this.y = coordinates.Y;
        this.sprite.setX(coordinates.X * 32 + 16);
        this.sprite.setY(coordinates.Y * 32 + 16);
    }
    getGridCoordinates() {
        return { X: this.x, Y: this.y };
    }
    getMaxMovementX() {
        return 1;
    }
    getMaxMovementYUp() {
        if (this.inventory.GrapplingHook) {
            return 1;
        }
        return 0;
    }
    getMaxMovementYDown() {
        return 1;
    }
    getViewRange() {
        return 1;
    }
    foundItem(item) {
        switch (item.ItemType) {
            case ItemType_1.ItemType.GrapplingHook:
                this.inventory.GrapplingHook = true;
                break;
            case ItemType_1.ItemType.MountainGear:
                this.inventory.MountainGear = true;
                break;
            case ItemType_1.ItemType.Shovel:
                this.inventory.Shovel = true;
                break;
            case ItemType_1.ItemType.Hammer:
                this.inventory.Hammer = true;
                break;
            case ItemType_1.ItemType.Torch:
                this.inventory.Torch = true;
                break;
            case ItemType_1.ItemType.Recall:
                this.inventory.Recall = true;
                break;
            case ItemType_1.ItemType.Teleport:
                this.inventory.Teleport = true;
                break;
            case ItemType_1.ItemType.GasMask:
                this.inventory.GasMask = true;
                break;
            case ItemType_1.ItemType.Xray:
                this.inventory.Xray = true;
                break;
            case ItemType_1.ItemType.fuel1:
                this.inventory.fuel1 = true;
                break;
            case ItemType_1.ItemType.fuel2:
                this.inventory.fuel2 = true;
                break;
            case ItemType_1.ItemType.fuel3:
                this.inventory.fuel3 = true;
                break;
            case ItemType_1.ItemType.fuel4:
                this.inventory.fuel4 = true;
                break;
        }
    }
    hasShovel() {
        return this.inventory.Shovel;
    }
    hasHammer() {
        return this.inventory.Hammer;
    }
    hasRecall() {
        return this.inventory.Recall;
    }
    hasXray() {
        return this.inventory.Xray;
    }
    hasTeleport() {
        return this.inventory.Teleport;
    }
    canMoveInSnow() {
        return this.inventory.MountainGear;
    }
    canMoveInCavern() {
        return this.inventory.Torch;
    }
    canMoveInGas() {
        return this.inventory.GasMask;
    }
    hasAllFuel() {
        return this.inventory.fuel1 && this.inventory.fuel2 && this.inventory.fuel3 && this.inventory.fuel4;
    }
    animate() {
        this.sprite.animate('player');
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/Game/Scenes/BadDomainScene.ts":
/*!*******************************************!*\
  !*** ./src/Game/Scenes/BadDomainScene.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'BadDomain',
};
class BadDomainScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    preload() {
    }
    create() {
        this.add.text(50, 300, "This game can only be played on coolmathgames.com and coolmath-games.com");
    }
}
exports.BadDomainScene = BadDomainScene;


/***/ }),

/***/ "./src/Game/Scenes/ControlsScene.ts":
/*!******************************************!*\
  !*** ./src/Game/Scenes/ControlsScene.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Controls',
};
class ControlsScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    create(data) {
        const backgroundTile = this.add.tileSprite(0, 0, 3200, 3200, 'tiles', 0);
        backgroundTile.setOrigin(0, 0);
        let controlstext = this.add.text(50, 50, '', { color: '#ffffff' });
        controlstext.setScale(1.2, 1.2);
        let allControls = [];
        allControls.push('Mouse Controls');
        allControls.push('');
        allControls.push('Simply point and click to move your character.');
        allControls.push('Click and drag to move the map, mouse wheel to zoom.');
        allControls.push('Click on tools to use them, hover over items for more details.');
        allControls.push('');
        allControls.push('');
        allControls.push('Keyboard Controls');
        allControls.push('');
        allControls.push('Press WASD or the arrow keys to move.');
        allControls.push('Press IJKL to move the map and QEUO to zoom in and out.');
        allControls.push('Press the number keys to use tools youâ€™ve found.');
        allControls.push('');
        allControls.push('(Click or any key to return.)');
        controlstext.setText(allControls);
        this.input.keyboard.on('keydown', () => {
            this.scene.resume(data.callingScene);
            this.scene.stop();
        }, this);
        this.input.on('pointerdown', () => {
            this.scene.resume(data.callingScene);
            this.scene.stop();
        }, this);
    }
}
exports.ControlsScene = ControlsScene;


/***/ }),

/***/ "./src/Game/Scenes/CreditsScene.ts":
/*!*****************************************!*\
  !*** ./src/Game/Scenes/CreditsScene.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Credits',
};
class CreditsScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    create(data) {
        const backgroundTile = this.add.tileSprite(0, 0, 3200, 3200, 'tiles', 0);
        backgroundTile.setOrigin(0, 0);
        let controlstext = this.add.text(50, 50, '', { color: '#ffffff' });
        controlstext.setScale(1.2, 1.2);
        let allControls = [];
        allControls.push('Thanks to:');
        allControls.push('');
        allControls.push('Aaron and Dave: Testing and moral support.');
        allControls.push('Caz and Zoe: Always encouraging me to go on.');
        allControls.push('');
        allControls.push('Phaser Discord Community');
        allControls.push('Without their help and support, ');
        allControls.push('I would not have learned as much as I did.');
        allControls.push('');
        allControls.push('Tileset for corner biome pictures:');
        allControls.push('Karliszabers Metroidvania Tileset on itch.io');
        allControls.push('');
        allControls.push('All other "art" & programming: me');
        allControls.push('');
        controlstext.setText(allControls);
        this.input.keyboard.on('keydown', () => {
            this.scene.resume(data.callingScene);
            this.scene.stop();
        }, this);
        this.input.on('pointerdown', () => {
            this.scene.resume(data.callingScene);
            this.scene.stop();
        }, this);
    }
}
exports.CreditsScene = CreditsScene;


/***/ }),

/***/ "./src/Game/Scenes/EndScene.ts":
/*!*************************************!*\
  !*** ./src/Game/Scenes/EndScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'End',
};
class EndScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    create(data) {
        const backgroundTile = this.add.tileSprite(0, 0, 3200, 3200, 'tiles', 0);
        backgroundTile.setOrigin(0, 0);
        let totalSeconds = data.finishTime / 60;
        const totalFinishSeconds = totalSeconds;
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds -= hours * 3600;
        const minutes = Math.floor(totalSeconds / 60);
        totalSeconds -= minutes * 60;
        const seconds = Math.floor(totalSeconds);
        const padHours = hours < 10 ? '0' : '';
        const padMinutes = minutes < 10 ? '0' : '';
        const padSeconds = seconds < 10 ? '0' : '';
        const winText = this.add.text(50, 50, '', { color: '#ffffff' });
        winText.setScale(1.2, 1.2);
        let timedMessage = 'You make it home in time for dinner.';
        if (data.finishTime > 36000) {
            timedMessage = 'You spent so long out there you missed dinner.';
        }
        const allControls = [];
        allControls.push('You are win.');
        allControls.push('');
        allControls.push(`Item Rate: ${data.itemPercentage}%`);
        allControls.push(`Map discovered: ${data.mapPercentage}%`);
        allControls.push(`Finish Time: ${padHours}${hours}:${padMinutes}${minutes}:${padSeconds}${seconds}`);
        allControls.push('');
        allControls.push('');
        allControls.push(timedMessage);
        allControls.push('Maybe one day you will explore another deserted planet');
        allControls.push('but have to find all those tools again for no apparent reason.');
        allControls.push('');
        allControls.push('See you next time!');
        winText.setText(allControls);
    }
}
exports.EndScene = EndScene;


/***/ }),

/***/ "./src/Game/Scenes/HudScene.ts":
/*!*************************************!*\
  !*** ./src/Game/Scenes/HudScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ItemType_1 = __webpack_require__(/*! ../Items/ItemType */ "./src/Game/Items/ItemType.ts");
const PhaserSprite_1 = __webpack_require__(/*! ../GameExtensions/PhaserSprite */ "./src/Game/GameExtensions/PhaserSprite.ts");
const GameMapCellState_1 = __webpack_require__(/*! ../GameMap/GameMapCellState */ "./src/Game/GameMap/GameMapCellState.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Hud',
};
class HudScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
        this.itemFoundCount = 0;
        this.totalItems = 23;
    }
    create() {
        this.createDefaultRectangle(0, 0, 800, 90, 0x000000);
        this.biomeImage = this.add.image(620, 0, 'biomemap').setOrigin(0, 0).setDepth(255);
        this.mapPercentText = this.add.text(10, 10, 'Map: 0%', { color: '#ffffff' });
        this.mapPercentText.setOrigin(0, 0);
        this.mapPercentText.setDepth(255);
        this.itemPercentText = this.add.text(10, 30, 'Items: 0%', { color: '#ffffff' });
        this.itemPercentText.setOrigin(0, 0);
        this.itemPercentText.setDepth(255);
        let controlsButton = this.add.image(120, 7, 'controlsbutton');
        controlsButton.setOrigin(0, 0);
        controlsButton.setDepth(255);
        controlsButton.setInteractive({ useHandCursor: true });
        controlsButton.on('pointerdown', () => {
            controlsButton.setTint(0x0ff00);
            this.time.delayedCall(100, () => {
                controlsButton.clearTint();
            });
            this.scene.pause('Map');
            this.scene.launch('Controls', { callingScene: 'Map' });
        }, this);
        this.scene.get('Map').events.on('itemFound', this.onItemFound, this);
        this.scene.get('Map').events.on('mapPercentUpdate', this.onMapPercentUpdate, this);
        this.scene.get('Map').events.on('mapBiomeMove', this.onMapBiomeMove, this);
    }
    onMapBiomeMove(cellState) {
        switch (cellState) {
            case GameMapCellState_1.GameMapCellState.Blank:
            case GameMapCellState_1.GameMapCellState.Discovered:
                this.biomeImage.setTexture('biomemap');
                break;
            case GameMapCellState_1.GameMapCellState.BlankCavern:
            case GameMapCellState_1.GameMapCellState.DiscoveredCavern:
                this.biomeImage.setTexture('biomecavern');
                break;
            case GameMapCellState_1.GameMapCellState.BlankSnow:
            case GameMapCellState_1.GameMapCellState.DiscoveredSnow:
                this.biomeImage.setTexture('biomesnow');
                break;
            case GameMapCellState_1.GameMapCellState.BlankGas:
            case GameMapCellState_1.GameMapCellState.DiscoveredGas:
                this.biomeImage.setTexture('biomegas');
                break;
        }
    }
    updateItemFoundCount() {
        this.itemFoundCount++;
        let itemPercent = Math.floor((this.itemFoundCount / this.totalItems) * 100);
        if (this.itemFoundCount === this.totalItems) {
            itemPercent = 100;
        }
        this.itemPercentText.setText(`Items: ${itemPercent}%`);
        this.events.emit('itemPercentageUpdated', itemPercent);
    }
    onMapPercentUpdate(percent) {
        this.mapPercentText.setText(`Map: ${percent}%`);
    }
    onItemFound(item) {
        switch (item.ItemType) {
            case ItemType_1.ItemType.Shovel:
                this.enableHudItem(10, 45, 'shovel', 'shoveltooltip', item.ItemType);
                break;
            case ItemType_1.ItemType.Hammer:
                this.enableHudItem(48, 45, 'hammer', 'hammertooltip', item.ItemType);
                break;
            case ItemType_1.ItemType.Recall:
                this.enableHudItem(86, 45, 'recall', 'recalltooltip', item.ItemType);
                break;
            case ItemType_1.ItemType.GrapplingHook:
                this.enableHudItem(239, 7, 'grapplinghook', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.Torch:
                this.enableHudItem(277, 7, 'torch', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.MountainGear:
                this.enableHudItem(315, 7, 'mountaingear', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.GasMask:
                this.enableHudItem(353, 7, 'gasmask', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.Xray:
                this.enableHudItem(391, 7, 'xray', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.Teleport:
                this.enableHudItem(429, 7, 'teleport', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.fuel1:
                this.enableHudItem(467, 7, 'fuel1', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.fuel2:
                this.enableHudItem(505, 7, 'fuel2', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.fuel3:
                this.enableHudItem(543, 7, 'fuel3', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.fuel4:
                this.enableHudItem(581, 7, 'fuel4', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note1:
                this.enableHudItem(239, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note2:
                this.enableHudItem(277, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note3:
                this.enableHudItem(315, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note4:
                this.enableHudItem(353, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note5:
                this.enableHudItem(391, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note6:
                this.enableHudItem(429, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note7:
                this.enableHudItem(467, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note8:
                this.enableHudItem(505, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note9:
                this.enableHudItem(543, 45, 'note', 'untitled', item.ItemType);
                break;
            case ItemType_1.ItemType.note10:
                this.enableHudItem(581, 45, 'note', 'untitled', item.ItemType);
                break;
        }
        this.updateItemFoundCount();
    }
    tryUseHudItem(itemType, sprite) {
        this.events.emit('hudToolUsed', itemType);
        switch (itemType) {
            case ItemType_1.ItemType.Shovel:
            case ItemType_1.ItemType.Hammer:
            case ItemType_1.ItemType.Recall:
                sprite.setTint(0x00ff00);
                break;
        }
        this.time.delayedCall(100, () => {
            sprite.clearTint();
        });
    }
    enableHudItem(x, y, spriteKey, toolTipSpriteKey, itemType) {
        const sprite = this.add
            .sprite(x, y, spriteKey)
            .setDepth(255)
            .setOrigin(0, 0)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.showHudItem(itemType), this)
            .on('pointerout', this.hideHudItem, this)
            .on('pointerdown', () => {
            this.tryUseHudItem(itemType, sprite);
        }, this);
        switch (itemType) {
            case ItemType_1.ItemType.Shovel:
                this.input.keyboard.on('keyup-ONE', () => this.tryUseHudItem(itemType, sprite), this);
                this.input.keyboard.on('keyup-NUMPAD_ONE', () => this.tryUseHudItem(itemType, sprite), this);
                break;
            case ItemType_1.ItemType.Hammer:
                this.input.keyboard.on('keyup-TWO', () => this.tryUseHudItem(itemType, sprite), this);
                this.input.keyboard.on('keyup-NUMPAD_TWO', () => this.tryUseHudItem(itemType, sprite), this);
                break;
            case ItemType_1.ItemType.Recall:
                this.input.keyboard.on('keyup-THREE', () => this.tryUseHudItem(itemType, sprite), this);
                this.input.keyboard.on('keyup-NUMPAD_THREE', () => this.tryUseHudItem(itemType, sprite), this);
                break;
        }
    }
    showHudItem(itemType) {
        this.toolTipSprite = new PhaserSprite_1.PhaserSprite(this.add.sprite(0, 0, itemType.toLowerCase() + 'tooltip'));
        this.toolTipSprite.setDepth(255);
        this.toolTipSprite.setX(400);
        this.toolTipSprite.setY(150);
    }
    hideHudItem() {
        this.toolTipSprite.destroy();
    }
    addLogText(logText) {
        this.logText.setText(logText);
    }
    createDefaultRectangle(x, y, width, height, color) {
        const rectangle = this.add.rectangle(x, y, width, height, color).setOrigin(0, 0).setDepth(250);
        return rectangle;
    }
}
exports.HudScene = HudScene;


/***/ }),

/***/ "./src/Game/Scenes/LoadScene.ts":
/*!**************************************!*\
  !*** ./src/Game/Scenes/LoadScene.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Load',
};
class LoadScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    preload() {
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        const progressText = this.add.text(240, 240, 'Loading: 0%', { color: '#ffffff' });
        const fileText = this.add.text(240, 330, 'loading file: ', { color: '#ffffff' });
        progressBox.fillStyle(0x948953, 0.8);
        progressBox.fillRect(240, 270, 320, 50);
        this.load.on('progress', (value) => {
            const percent = value * 100;
            progressBar.clear();
            progressBar.fillStyle(0x555943, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
            progressText.setText(`Loading: ${Math.floor(percent)}%`);
        }, this);
        this.load.on('fileprogress', (file) => {
            fileText.setText(`loading file: ${file.key}`);
        });
        this.load.on('complete', () => {
            progressBox.destroy();
            progressBar.destroy();
            progressText.destroy();
            fileText.destroy();
            this.scene.start('Menu');
        }, this);
        this.loadAssets();
    }
    create() {
        let graphics = this.add.graphics();
        graphics.fillStyle(0xffffff, 1);
        graphics.fillCircle(4, 4, 4);
        graphics.generateTexture('mapDot', 8, 8);
        graphics.destroy();
        graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffffff, 1);
        graphics.strokeCircle(4, 4, 4);
        graphics.generateTexture('mapCircle', 8, 8);
        graphics.destroy();
    }
    loadAssets() {
        const options = { frameWidth: 32, frameHeight: 32, spacing: 1 };
        const basepath = `assets`;
        this.load.spritesheet('tiles', `${basepath}/tiles.png`, options);
        this.load.image('biomemap', `${basepath}/biomes/biomemap.png`);
        this.load.image('biomecavern', `${basepath}/biomes/biomecavern.png`);
        this.load.image('biomesnow', `${basepath}/biomes/biomesnow.png`);
        this.load.image('biomegas', `${basepath}/biomes/biomegas.png`);
        this.load.image('mainmenu', `${basepath}/maps/mainmenu.png`);
        this.load.image('controlsbutton', `${basepath}/controlsbutton.png`);
        this.load.image('shovel', `${basepath}/equipment/shovel.png`);
        this.load.image('hammer', `${basepath}/equipment/hammer.png`);
        this.load.image('recall', `${basepath}/equipment/recall.png`);
        this.load.image('grapplinghook', `${basepath}/equipment/grapplinghook.png`);
        this.load.image('torch', `${basepath}/equipment/torch.png`);
        this.load.image('mountaingear', `${basepath}/equipment/mountaingear.png`);
        this.load.image('gasmask', `${basepath}/equipment/gasmask.png`);
        this.load.image('xray', `${basepath}/equipment/xray.png`);
        this.load.image('teleport', `${basepath}/equipment/teleport.png`);
        this.load.image('fuel1', `${basepath}/equipment/fuel1.png`);
        this.load.image('fuel2', `${basepath}/equipment/fuel2.png`);
        this.load.image('fuel3', `${basepath}/equipment/fuel3.png`);
        this.load.image('fuel4', `${basepath}/equipment/fuel4.png`);
        this.load.image('note', `${basepath}/equipment/note.png`);
        this.load.image('shovelmap', `${basepath}/equipment/shovelmap.png`);
        this.load.image('hammermap', `${basepath}/equipment/hammermap.png`);
        this.load.image('recallmap', `${basepath}/equipment/recallmap.png`);
        this.load.image('grapplinghookmap', `${basepath}/equipment/grapplinghookmap.png`);
        this.load.image('torchmap', `${basepath}/equipment/torchmap.png`);
        this.load.image('mountaingearmap', `${basepath}/equipment/mountaingearmap.png`);
        this.load.image('gasmaskmap', `${basepath}/equipment/gasmaskmap.png`);
        this.load.image('xraymap', `${basepath}/equipment/xraymap.png`);
        this.load.image('teleportmap', `${basepath}/equipment/teleportmap.png`);
        this.load.image('fuel1map', `${basepath}/equipment/fuel1map.png`);
        this.load.image('fuel2map', `${basepath}/equipment/fuel2map.png`);
        this.load.image('fuel3map', `${basepath}/equipment/fuel3map.png`);
        this.load.image('fuel4map', `${basepath}/equipment/fuel4map.png`);
        this.load.image('notemap', `${basepath}/equipment/notemap.png`);
        this.load.image('startmodal', `${basepath}/tooltips/startmodal.png`);
        this.load.image('endmodal', `${basepath}/tooltips/endmodal.png`);
        this.load.image('vp1modal', `${basepath}/tooltips/vp1modal.png`);
        this.load.image('vp2modal', `${basepath}/tooltips/vp2modal.png`);
        this.load.image('shovelmodal', `${basepath}/tooltips/shovelmodal.png`);
        this.load.image('hammermodal', `${basepath}/tooltips/hammermodal.png`);
        this.load.image('recallmodal', `${basepath}/tooltips/recallmodal.png`);
        this.load.image('grapplinghookmodal', `${basepath}/tooltips/grapplinghookmodal.png`);
        this.load.image('torchmodal', `${basepath}/tooltips/torchmodal.png`);
        this.load.image('mountaingearmodal', `${basepath}/tooltips/mountaingearmodal.png`);
        this.load.image('gasmaskmodal', `${basepath}/tooltips/gasmaskmodal.png`);
        this.load.image('xraymodal', `${basepath}/tooltips/xraymodal.png`);
        this.load.image('teleportmodal', `${basepath}/tooltips/teleportmodal.png`);
        this.load.image('note1modal', `${basepath}/tooltips/note1modal.png`);
        this.load.image('note2modal', `${basepath}/tooltips/note2modal.png`);
        this.load.image('note3modal', `${basepath}/tooltips/note3modal.png`);
        this.load.image('note4modal', `${basepath}/tooltips/note4modal.png`);
        this.load.image('note5modal', `${basepath}/tooltips/note5modal.png`);
        this.load.image('note6modal', `${basepath}/tooltips/note6modal.png`);
        this.load.image('note7modal', `${basepath}/tooltips/note7modal.png`);
        this.load.image('note8modal', `${basepath}/tooltips/note8modal.png`);
        this.load.image('note9modal', `${basepath}/tooltips/note9modal.png`);
        this.load.image('note10modal', `${basepath}/tooltips/note10modal.png`);
        this.load.image('fuel1modal', `${basepath}/tooltips/fuel1modal.png`);
        this.load.image('fuel2modal', `${basepath}/tooltips/fuel2modal.png`);
        this.load.image('fuel3modal', `${basepath}/tooltips/fuel3modal.png`);
        this.load.image('fuel4modal', `${basepath}/tooltips/fuel4modal.png`);
        this.load.image('allfuelmodal', `${basepath}/tooltips/allfuelmodal.png`);
        this.load.image('shoveltooltip', `${basepath}/tooltips/shoveltooltip.png`);
        this.load.image('hammertooltip', `${basepath}/tooltips/hammertooltip.png`);
        this.load.image('recalltooltip', `${basepath}/tooltips/recalltooltip.png`);
        this.load.image('grapplinghooktooltip', `${basepath}/tooltips/grapplinghooktooltip.png`);
        this.load.image('torchtooltip', `${basepath}/tooltips/torchtooltip.png`);
        this.load.image('mountaingeartooltip', `${basepath}/tooltips/mountaingeartooltip.png`);
        this.load.image('gasmasktooltip', `${basepath}/tooltips/gasmasktooltip.png`);
        this.load.image('xraytooltip', `${basepath}/tooltips/xraytooltip.png`);
        this.load.image('teleporttooltip', `${basepath}/tooltips/teleporttooltip.png`);
        this.load.image('grapplinghooktooltip', `${basepath}/tooltips/grapplinghooktooltip.png`);
        this.load.image('note1tooltip', `${basepath}/tooltips/note1tooltip.png`);
        this.load.image('note2tooltip', `${basepath}/tooltips/note2tooltip.png`);
        this.load.image('note3tooltip', `${basepath}/tooltips/note3tooltip.png`);
        this.load.image('note4tooltip', `${basepath}/tooltips/note4tooltip.png`);
        this.load.image('note5tooltip', `${basepath}/tooltips/note5tooltip.png`);
        this.load.image('note6tooltip', `${basepath}/tooltips/note6tooltip.png`);
        this.load.image('note7tooltip', `${basepath}/tooltips/note7tooltip.png`);
        this.load.image('note8tooltip', `${basepath}/tooltips/note8tooltip.png`);
        this.load.image('note9tooltip', `${basepath}/tooltips/note9tooltip.png`);
        this.load.image('note10tooltip', `${basepath}/tooltips/note10tooltip.png`);
        this.load.image('fuel1tooltip', `${basepath}/tooltips/fuel1tooltip.png`);
        this.load.image('fuel2tooltip', `${basepath}/tooltips/fuel2tooltip.png`);
        this.load.image('fuel3tooltip', `${basepath}/tooltips/fuel3tooltip.png`);
        this.load.image('fuel4tooltip', `${basepath}/tooltips/fuel4tooltip.png`);
        this.load.spritesheet('blankmap', `${basepath}/maps/blankmap.png`, options);
        this.load.spritesheet('discoveredmap', `${basepath}/maps/discoveredmap.png`, options);
        this.load.spritesheet('blankmap_snow', `${basepath}/maps/blankmap_snow.png`, options);
        this.load.spritesheet('discoveredmap_snow', `${basepath}/maps/discoveredmap_snow.png`, options);
        this.load.spritesheet('blankmap_gas', `${basepath}/maps/blankmap_gas.png`, options);
        this.load.spritesheet('discoveredmap_gas', `${basepath}/maps/discoveredmap_gas.png`, options);
        this.load.spritesheet('blankmap_cavern', `${basepath}/maps/blankmap_cavern.png`, options);
        this.load.spritesheet('discoveredmap_cavern', `${basepath}/maps/discoveredmap_cavern.png`, options);
        this.load.json('100json', `${basepath}/maps/100.json`);
    }
}
exports.LoadScene = LoadScene;


/***/ }),

/***/ "./src/Game/Scenes/MapScene.ts":
/*!*************************************!*\
  !*** ./src/Game/Scenes/MapScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GameMap_1 = __webpack_require__(/*! ../GameMap/GameMap */ "./src/Game/GameMap/GameMap.ts");
const MapImporter_1 = __webpack_require__(/*! ../../MapImporter/MapImporter */ "./src/MapImporter/MapImporter.ts");
const JsonMap_1 = __webpack_require__(/*! ../../MapImporter/JsonMap */ "./src/MapImporter/JsonMap.ts");
const Player_1 = __webpack_require__(/*! ../Player */ "./src/Game/Player.ts");
const PhaserSprite_1 = __webpack_require__(/*! ../GameExtensions/PhaserSprite */ "./src/Game/GameExtensions/PhaserSprite.ts");
const Inventory_1 = __webpack_require__(/*! ../Items/Inventory */ "./src/Game/Items/Inventory.ts");
const MapObjectApplier_1 = __webpack_require__(/*! ../GameMap/MapObjectApplier */ "./src/Game/GameMap/MapObjectApplier.ts");
const phaser_1 = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
const ItemType_1 = __webpack_require__(/*! ../Items/ItemType */ "./src/Game/Items/ItemType.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Map',
};
class MapScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
        this.updateTicks = 0;
        this.fuelModalShownDelay = 0;
        this.shipFlyOff = false;
    }
    create() {
        this.events.on('pause', this.input.keyboard.resetKeys, this.input.keyboard);
        this.events.on('sleep', this.input.keyboard.resetKeys, this.input.keyboard);
        this.setupMap();
        this.setupCamera();
        this.input.on('pointerdown', () => {
            this.mapClick();
        });
        this.scene.launch('Hud');
        this.input.on('wheel', this.onMouseWheel, this);
        this.game.canvas.onwheel = (e) => e.preventDefault();
        this.scene.get('Hud').events.on('hudToolUsed', this.onToolUse, this);
        this.scene.get('Hud').events.on('itemPercentageUpdated', this.onItemPercentageUpdate, this);
        this.shipSprite = this.add.sprite(49 * 32 + 16, 49 * 32 + 16, 'tiles', 5);
    }
    setupMap() {
        const backgroundTile = this.add.tileSprite(0, 0, 3200, 3200, 'tiles', 0);
        backgroundTile.setOrigin(0, 0);
        const rawJson = this.cache.json.get('100json');
        const jsonMap = JsonMap_1.JsonMap.JsonToMap(rawJson);
        const mapImporter = new MapImporter_1.MapImporter();
        const mapCells = mapImporter.importJsonMapCells(jsonMap);
        const mapObjects = mapImporter.importJsonMapObjects(jsonMap);
        this.gameMap = new GameMap_1.GameMap(this.createDefaultPlayer());
        mapCells.forEach((cell) => {
            this.gameMap.addMapCell(cell, new PhaserSprite_1.PhaserSprite(this.add.sprite(0, 0, 'blankmap')), new PhaserSprite_1.PhaserSprite(this.add.sprite(0, 0, 'tiles', 3)));
        });
        this.gameMap.onClick({ X: 49, Y: 49 }, () => { });
        new MapObjectApplier_1.MapObjectApplier().applyMapObjects(this, this.gameMap, mapObjects);
        this.showModalWindow('start');
    }
    setupCamera() {
        const camera = this.cameras.main;
        camera
            .setBounds(0, 0, 3200, 3200)
            .setViewport(0, 90, 800, 600 - 90)
            .centerOn(1600, 1600);
        this.input.on('pointermove', (pointer) => {
            if (!pointer.isDown)
                return;
            camera.scrollX -= (pointer.x - pointer.prevPosition.x) / camera.zoom;
            camera.scrollY -= (pointer.y - pointer.prevPosition.y) / camera.zoom;
        });
    }
    update() {
        const { keyboard } = this.input;
        if (this.checkKeysDown(keyboard, 'ESC') || this.checkKeysDown(keyboard, 'P')) {
            this.scene.launch('Controls', { callingScene: 'Map' });
            this.scene.pause();
        }
        if (this.checkKeysDown(keyboard, 'W') || this.checkKeysDown(keyboard, 'UP')) {
            this.tryMove(0, -1);
        }
        if (this.checkKeysDown(keyboard, 'A') || this.checkKeysDown(keyboard, 'LEFT')) {
            this.tryMove(-1, 0);
        }
        if (this.checkKeysDown(keyboard, 'S') || this.checkKeysDown(keyboard, 'DOWN')) {
            this.tryMove(0, 1);
        }
        if (this.checkKeysDown(keyboard, 'D') || this.checkKeysDown(keyboard, 'RIGHT')) {
            this.tryMove(1, 0);
        }
        if (this.mapPercentage !== this.gameMap.getCellPercentage()) {
            this.mapPercentage = this.gameMap.getCellPercentage();
            this.events.emit('mapPercentUpdate', this.mapPercentage);
        }
        if (this.shipSprite.y > 1560 && !this.shipGoDown) {
            this.shipSprite.y -= 0.05;
        }
        if (this.shipSprite.y < 1600 && this.shipGoDown) {
            this.shipSprite.y += 0.05;
        }
        if (this.shipSprite.y > 1587) {
            this.shipGoDown = false;
        }
        if (this.shipSprite.y < 1583) {
            this.shipGoDown = true;
        }
        if (this.shipFlyOff) {
            this.shipSprite.y -= 2;
        }
        const camera = this.cameras.main;
        if (this.checkKeysDown(keyboard, 'I')) {
            camera.scrollY -= 60;
        }
        if (this.checkKeysDown(keyboard, 'J')) {
            camera.scrollX -= 60;
        }
        if (this.checkKeysDown(keyboard, 'K')) {
            camera.scrollY += 60;
        }
        if (this.checkKeysDown(keyboard, 'L')) {
            camera.scrollX += 60;
        }
        if (this.checkKeysDown(keyboard, 'Q') || this.checkKeysDown(keyboard, 'U')) {
            this.zoomCamera(100);
        }
        if (this.checkKeysDown(keyboard, 'E') || this.checkKeysDown(keyboard, 'O')) {
            this.zoomCamera(-100);
        }
        if (this.allFuelFound && this.fuelModalShownDelay === 30) {
            this.showModalWindow('allfuel');
            this.fuelModalShownDelay++;
        }
        if (this.allFuelFound && this.fuelModalShownDelay < 30) {
            this.fuelModalShownDelay++;
        }
        if (this.canMoveToMountainsKeyboard) {
            this.enableMoveToMountainsKeyboard();
        }
        this.updateTicks++;
    }
    onItemPercentageUpdate(percent) {
        this.itemPercentage = percent;
    }
    checkKeysDown(keyboard, character) {
        return keyboard.checkDown(keyboard.addKey(character), 200);
    }
    tryMove(xDirection, yDirection) {
        this.checkCamera(this.gameMap.getPlayerGridCoordinates());
        this.gameMap.keyboardMove(xDirection, yDirection, (eventId, item) => {
            this.raiseGameEvent(eventId, item);
        });
        let cellType = this.gameMap.getCurrentBiome();
        this.events.emit('mapBiomeMove', cellType);
    }
    checkCamera(gridCoordinates) {
        const [playerX, playerY] = [gridCoordinates.X * 32, gridCoordinates.Y * 32];
        const camera = this.cameras.main;
        const x = camera.worldView.x + 200;
        const y = camera.worldView.y + 150;
        const width = camera.worldView.width - 400;
        const height = camera.worldView.height - 300;
        const cameraViewEdge = new phaser_1.Geom.Rectangle(x, y, width, height);
        if (!cameraViewEdge.contains(playerX, playerY)) {
            camera.pan(playerX, playerY);
        }
    }
    onToolUse(itemType) {
        let tileBroke = this.gameMap.useItem(itemType);
        if (tileBroke) {
            this.cameras.main.shake(500, 0.01);
        }
        if (itemType === ItemType_1.ItemType.Recall) {
            this.checkCamera(this.gameMap.getPlayerGridCoordinates());
        }
    }
    onMouseWheel(pointer, gameObject, deltaX, deltaY, deltaZ, eventData) {
        this.zoomCamera(deltaY);
    }
    zoomCamera(delta) {
        const camera = this.cameras.main;
        camera.zoom -= delta / 1000;
        if (camera.zoom < 0.5) {
            camera.zoom = 0.5;
        }
        if (camera.zoom > 2) {
            camera.zoom = 2;
        }
    }
    mapClick() {
        const { worldX, worldY } = this.input.activePointer;
        const gridX = Math.floor(worldX / 32);
        const gridY = Math.floor(worldY / 32);
        this.gameMap.onClick({ X: gridX, Y: gridY }, (eventId, item) => {
            this.raiseGameEvent(eventId, item);
        });
        let cellType = this.gameMap.getCurrentBiome();
        this.events.emit('mapBiomeMove', cellType);
    }
    raiseGameEvent(eventId, item) {
        switch (eventId) {
            case 50:
                this.showModalWindow(item.ItemType.toLowerCase());
                this.events.emit('itemFound', item);
                break;
            case 52: // all fuel found
                this.allFuelFound = true;
                break;
            case 68: // repan camera
                this.checkCamera(this.gameMap.getPlayerGridCoordinates());
                break;
            case 70: // end game
                this.shipFlyOff = true;
                this.showModalWindow('end');
                this.cameras.main.zoomTo(0.75, 300);
                this.cameras.main.pan(49 * 32, 49 * 32);
                this.cameras.main.shake(1500, 0.05);
                this.time.delayedCall(3000, () => {
                    this.cameras.main.fadeOut(1500);
                    this.time.delayedCall(1500, () => {
                        this.scene.start('End', { finishTime: this.updateTicks, mapPercentage: this.mapPercentage, itemPercentage: this.itemPercentage });
                    }, null, this);
                }, null, this);
                break;
            case 102: // one peak
                this.showModalWindow('vp1');
                break;
            case 103: // two peaks
                this.showModalWindow('vp2');
                this.gameMap.discoverCell({ X: 54, Y: 9 });
                this.canMoveToMountainsKeyboard = true;
                break;
        }
    }
    enableMoveToMountainsKeyboard() {
        if (this.gameMap.canPlayerTeleport()) {
            this.add.sprite(22 * 32 + 16, 12 * 32 + 16, 'tiles', 3).setDepth(255);
            this.add.sprite(80 * 32 + 16, 23 * 32 + 16, 'tiles', 3).setDepth(255);
            this.add.sprite(53 * 32 + 16, 9 * 32 + 16, 'tiles', 3).setDepth(255);
            this.gameMap.enableKeyBoardTeleportForSecretMountain();
            this.canMoveToMountainsKeyboard = false;
        }
    }
    createDefaultPlayer() {
        const player = new Player_1.Player(new PhaserSprite_1.PhaserSprite(this.add.sprite(0, 0, 'tiles', 1)), new Inventory_1.Inventory());
        this.anims.create({ key: 'player', frames: this.anims.generateFrameNumbers('tiles', { start: 1, end: 2 }), frameRate: 1, repeat: -1 });
        player.animate();
        return player;
    }
    showModalWindow(spriteKey) {
        this.scene.launch('Modal', { spriteKey: spriteKey });
        this.scene.pause();
    }
}
exports.MapScene = MapScene;
class ModalScene extends Phaser.Scene {
    constructor() {
        super('Modal');
    }
    init(data) {
        let sprite = this.add.sprite(this.cameras.main.worldView.x + 400, this.cameras.main.worldView.y + 300, data.spriteKey + 'modal');
        sprite.setDepth(255);
        sprite.setInteractive();
        this.scene.bringToTop();
        this.time.delayedCall(1500, () => {
            this.input.keyboard.on('keydown', () => {
                sprite.destroy();
                this.scene.resume('Map');
                this.scene.stop();
            }, this);
            this.input.on('pointerdown', () => {
                sprite.destroy();
                this.scene.resume('Map');
                this.scene.stop();
            }, this);
        });
    }
}
exports.ModalScene = ModalScene;


/***/ }),

/***/ "./src/Game/Scenes/MenuScene.ts":
/*!**************************************!*\
  !*** ./src/Game/Scenes/MenuScene.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Menu',
};
class MenuScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
        this.menuIndex = 0;
    }
    create() {
        let background = this.add.image(0, 0, 'mainmenu');
        background.setOrigin(0, 0);
        this.menuSprite = this.add.sprite(250, 315, 'tiles', 5);
        let startButton = this.add.text(290, 300, 'Start Game', { color: '#ffffff' });
        startButton.setScale(2, 2);
        startButton.setInteractive({ useHandCursor: true });
        startButton.on('pointerdown', () => {
            this.scene.start('Map');
        });
        let controlsButton = this.add.text(290, 375, 'Controls', { color: '#ffffff' });
        controlsButton.setScale(2, 2);
        controlsButton.setInteractive({ useHandCursor: true });
        controlsButton.on('pointerdown', () => {
            this.scene.launch('Controls', { callingScene: 'Menu' });
            this.scene.pause();
        });
        let creditsButton = this.add.text(290, 450, 'Credits', { color: '#ffffff' });
        creditsButton.setScale(2, 2);
        creditsButton.setInteractive({ useHandCursor: true });
        creditsButton.on('pointerdown', () => {
            this.scene.launch('Credits', { callingScene: 'Menu' });
            this.scene.pause();
        });
        this.input.keyboard.on('keyup-UP', () => {
            this.changeMenu(-1);
        }, this);
        this.input.keyboard.on('keyup-W', () => {
            this.changeMenu(-1);
        }, this);
        this.input.keyboard.on('keyup-DOWN', () => {
            this.changeMenu(1);
        }, this);
        this.input.keyboard.on('keyup-S', () => {
            this.changeMenu(1);
        }, this);
        this.input.keyboard.on('keydown-SPACE', () => {
            this.enterMenu();
        }, this);
        this.input.keyboard.on('keydown-ENTER', () => {
            this.enterMenu();
        }, this);
        this.input.keyboard.on('keydown-Z', () => {
            this.enterMenu();
        }, this);
        this.input.keyboard.addCapture('UP');
        this.input.keyboard.addCapture('DOWN');
        this.input.keyboard.addCapture('LEFT');
        this.input.keyboard.addCapture('RIGHT');
        this.input.keyboard.addCapture('SPACE');
    }
    enterMenu() {
        switch (this.menuIndex) {
            case 0:
                this.scene.start('Map');
                break;
            case 1:
                this.scene.launch('Controls', { callingScene: 'Menu' });
                this.scene.pause();
                break;
            case 2:
                this.scene.launch('Credits', { callingScene: 'Menu' });
                this.scene.pause();
                break;
        }
    }
    changeMenu(index) {
        this.menuIndex = this.menuIndex + index;
        if (this.menuIndex < 0) {
            this.menuIndex = 0;
        }
        if (this.menuIndex > 2) {
            this.menuIndex = 2;
        }
        switch (this.menuIndex) {
            case 0:
                this.menuSprite.setY(315);
                break;
            case 1:
                this.menuSprite.setY(390);
                break;
            case 2:
                this.menuSprite.setY(465);
                break;
        }
    }
}
exports.MenuScene = MenuScene;


/***/ }),

/***/ "./src/Game/Scenes/SplashScene.ts":
/*!****************************************!*\
  !*** ./src/Game/Scenes/SplashScene.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const domainName_1 = __webpack_require__(/*! ../../domainName */ "./src/domainName.js");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Splash',
};
class SplashScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    preload() {
        const basepath = `assets`;
    }
    create() {
      this.scene.start('Load');
    }
}
exports.SplashScene = SplashScene;


/***/ }),

/***/ "./src/Game/Scenes/index.ts":
/*!**********************************!*\
  !*** ./src/Game/Scenes/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./HudScene */ "./src/Game/Scenes/HudScene.ts"));
__export(__webpack_require__(/*! ./LoadScene */ "./src/Game/Scenes/LoadScene.ts"));
__export(__webpack_require__(/*! ./MapScene */ "./src/Game/Scenes/MapScene.ts"));
__export(__webpack_require__(/*! ./MenuScene */ "./src/Game/Scenes/MenuScene.ts"));
__export(__webpack_require__(/*! ./ControlsScene */ "./src/Game/Scenes/ControlsScene.ts"));
__export(__webpack_require__(/*! ./CreditsScene */ "./src/Game/Scenes/CreditsScene.ts"));
__export(__webpack_require__(/*! ./EndScene */ "./src/Game/Scenes/EndScene.ts"));
__export(__webpack_require__(/*! ./SplashScene */ "./src/Game/Scenes/SplashScene.ts"));
__export(__webpack_require__(/*! ./BadDomainScene */ "./src/Game/Scenes/BadDomainScene.ts"));


/***/ }),

/***/ "./src/MapImporter/JsonMap.ts":
/*!************************************!*\
  !*** ./src/MapImporter/JsonMap.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class JsonMap {
    static JsonToMap(rawJson) {
        const jsonMap = new JsonMap();
        jsonMap.width = rawJson.width;
        jsonMap.height = rawJson.height;
        jsonMap.layers = rawJson.layers;
        return jsonMap;
    }
}
exports.JsonMap = JsonMap;


/***/ }),

/***/ "./src/MapImporter/MapCell.ts":
/*!************************************!*\
  !*** ./src/MapImporter/MapCell.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MapCell {
    constructor(x, y, spriteIndex, spriteSheet) {
        this.X = x;
        this.Y = y;
        this.SpriteIndex = spriteIndex;
        this.SpriteSheet = spriteSheet;
    }
}
exports.MapCell = MapCell;


/***/ }),

/***/ "./src/MapImporter/MapImporter.ts":
/*!****************************************!*\
  !*** ./src/MapImporter/MapImporter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const MapCell_1 = __webpack_require__(/*! ./MapCell */ "./src/MapImporter/MapCell.ts");
class MapImporter {
    importJsonMapCells(jsonMap) {
        const blankData = jsonMap.layers.find((l) => l.name === 'MapLayer').data;
        const width = jsonMap.width;
        const height = jsonMap.height;
        const cells = [];
        let index = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const indexData = blankData[index];
                if (indexData > 0) {
                    cells.push(new MapCell_1.MapCell(x, y, indexData - 1, 'blankmap'));
                }
                index++;
            }
        }
        const snowData = jsonMap.layers.find((l) => l.name === 'SnowLayer').data;
        index = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const indexData = snowData[index] - 289;
                if (indexData > 0) {
                    cells.push(new MapCell_1.MapCell(x, y, indexData - 1, 'blankmap_snow'));
                }
                index++;
            }
        }
        const cavernData = jsonMap.layers.find((l) => l.name === 'CavernLayer').data;
        index = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const indexData = cavernData[index] - 514;
                if (indexData > 0) {
                    cells.push(new MapCell_1.MapCell(x, y, indexData - 1, 'blankmap_cavern'));
                }
                index++;
            }
        }
        const gasData = jsonMap.layers.find((l) => l.name === 'GasLayer').data;
        index = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const indexData = gasData[index] - 739;
                if (indexData > 0) {
                    cells.push(new MapCell_1.MapCell(x, y, indexData - 1, 'blankmap_gas'));
                }
                index++;
            }
        }
        return cells;
    }
    importJsonMapObjects(jsonMap) {
        return jsonMap.layers.find((l) => l.name === 'Objects').objects;
    }
}
exports.MapImporter = MapImporter;


/***/ }),

/***/ "./src/domainName.js":
/*!***************************!*\
  !*** ./src/domainName.js ***!
  \***************************/
/*! exports provided: getDomainName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomainName", function() { return getDomainName; });
function getDomainName(){
  return window.location.hostname;
}

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Phaser = __importStar(__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js"));
const Scenes_1 = __webpack_require__(/*! ./Game/Scenes */ "./src/Game/Scenes/index.ts");
const gameConfig = {
    title: 'Maptroid',
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 600,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    render: {
        pixelArt: true,
    },
    scene: [Scenes_1.SplashScene, Scenes_1.LoadScene, Scenes_1.MenuScene, Scenes_1.MapScene, Scenes_1.HudScene, Scenes_1.ModalScene, Scenes_1.ControlsScene, Scenes_1.CreditsScene, Scenes_1.EndScene, Scenes_1.BadDomainScene],
    parent: 'game',
    backgroundColor: '#000000',
    audio: { noAudio: true },
};
exports.game = new Phaser.Game(gameConfig);


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map
