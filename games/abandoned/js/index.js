! function(t) {
    function e(t, e, i) {
        this.onClick = new _, this.onDown = new _, this.onUp = new _, this.onOut = new _, e && (e = e.bind(i || this), this.onClick.add(e)), this.disposed = !1, this.isDown = !1, this.isOver = !1, this.name = "TintButton", this.upTint = 16777215, this.overTint = 15658734, this.downTint = 14540253, this.disableTint = 8947848, this.tint = this.upTint, PIXI.Sprite.call(this, t), this.mousedown = this.touchstart = this._mouseDown, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp, this.mouseover = this._mouseOver, this.mouseout = this._mouseOut, this.click = this.tap = this._clickTap, this.interactive = !0, this.buttonMode = !0, this.anchor.set(.5, .5), this._cacheAnchorY = null
    }

    function i(t, e, i) {
        this.name = t, this.level = e, PIXI.Container.call(this), this._saves = new w(Qi.storage.getJson(this.name)), i && this.setBg(i), this.up = null, this.right = null, this.down = null, this.left = null, this.fadeA = null, this.fadeB = null, this.fadeC = null, this.fadeD = null, this.fadeUp = null, this.fadeRight = null, this.fadeDown = null, this.fadeLeft = null, this.upHitArea = null, this.rightHitArea = null, this.downHitArea = null, this.leftHitArea = null, this.saveStayingHere = !0
    }

    function s(t, e, s, n) {
        i.call(this, e, t, s), this._doorLeftSaves = this.getActorSaves(o.DoorWtLeft), this.num = n;
        var a = this,
            r = new _e;
        r.x = 120, r.y = 345, r.portalClickCallback = function() {
            t.moveLeft()
        }, r.scale.y = 1.08, r.isEnableToOpen = function() {
            return Qi.playState.signs.isWtEnableOpenDoor(a.num)
        }, this._doorLeftSaves.opened ? r.open() : r.on(k.EVENT_DOOR_OPEN, this._onDoorLeftOpen, this), this.addChild(r), this._doorLeft = r
    }

    function o(t, e, i, s) {
        PIXI.Container.call(this), this.name = t, this._clickTap = this._clickTap.bind(this), void 0 != e && (this.sprMain = Qi.assets.getSprite(e, i, s), this.addChild(this.sprMain))
    }

    function n(t) {
        PIXI.Container.call(this), this.name = t, this._locations = new u("Locations"), this.currLocation = null, this.prevLocationName = null, this.startLocation = null, this.musicName = null, this.distanceBetweenLocations = 40, this.transitionDuration = .3, this.transitionDurationPortal = .75, this._overlay = Qi.playState.levelMng.overlay, this.sndMove = Qi.assets.getSound("sndMove"), this.sndFade = Qi.assets.getSound("sndFade")
    }

    function a(t, e, i) {
        PIXI.Container.call(this), this.name = t, this._clickTap = this._clickTap.bind(this), void 0 != e && (this.sprScr = Qi.assets.getSprite(e, "atlasItems", !0), this.sprScr.buttonMode = this.sprScr.interactive = !0, this.sprScr.click = this.sprScr.tap = this._clickTap, this.sprScr.name = "scr", this.addChild(this.sprScr)), this.sprInv = Qi.assets.getSprite(i, "atlasItems", !0), this.sprInv.visible = null == this.sprScr, this.sprInv.click = this.sprInv.tap = this._clickTap, this.sprInv.name = "inv", this.addChild(this.sprInv), this.single = !0, this.removeable = !0, this.setScrMode()
    }

    function r() {
        PIXI.Container.call(this), this.offsetX = -28, this.offsetY = 0, this.signs = [null, null, null, null], this._saves = Qi.saveData.getOrCreateObject("Signs");
        for (var t = 1; t <= 4; t++) this.createSign(t, this.isSignOn(t))
    }

    function h() {
        PIXI.Container.call(this);
        var t = new PIXI.TextStyle({
                fontFamily: "RoughDraft",
                fontSize: 42,
                fill: "white",
                align: "center",
                padding: 100
            }),
            e = new PIXI.Graphics;
        e.beginFill(0), e.drawRect(0, 0, Qi.gameWidth0, Qi.gameHeight0), e.endFill(), this.addChild(e), this._txtLoading = new PIXI.Text("Loading", t), this._txtLoading.scale.set(.5, .5), this._txtLoading.anchor.set(.5, .5), this._txtLoading.x = Qi.gameWidth0 / 2, this._txtLoading.y = Qi.gameHeight0 / 2 - 10, this.addChild(this._txtLoading)
    }

    function c() {
        PIXI.Container.call(this);
        const t = Qi.assets.getSprite("splash");
        t.anchor.set(.5, .5), t.x = Qi.gameWidth0 / 2, t.y = Qi.gameHeight0 / 2, this.addChild(t)
    }

    function l(t) {
        this.app = t
    }

    function d() {
        EventTarget.call(this), this._event = {}, this._event.type = "", this._event.orientation = "", this._event.originalEvent = null, this._onVisibilityChange = this._onVisibilityChange.bind(this), this._onWebkitVisibilityChange = this._onWebkitVisibilityChange.bind(this), this._onPageShow = this._onPageShow.bind(this), this._onPageHide = this._onPageHide.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onResize = this._onResize.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), document.addEventListener("visibilitychange", this._onVisibilityChange, !1), document.addEventListener("webkitvisibilitychange", this._onWebkitVisibilityChange, !1), document.addEventListener("pageshow", this._onPageHide, !1), document.addEventListener("pagehide", this._onPageShow, !1), t.onfocus = this._onFocus, t.onblur = this._onBlur, this.orientation = this._getOrientation(), this._event.orientation = this.orientation, t.addEventListener("resize", this._onResize, !1), t.addEventListener("orientationchange", this._onOrientationChange, !1)
    }

    function p(t, e, i, s, o) {
        this.up = t, this.over = e, this.down = i, this.onClick = new _, this.onDown = new _, this.onUp = new _, this.onOut = new _, s && (s = s.bind(o || this), this.onClick.add(s)), this.name = "Button", this.disposed = !1, this.isDown = !1, this.isOver = !1, PIXI.Sprite.call(this, t), this.mousedown = this.touchstart = this._mouseDown, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp, this.mouseover = this._mouseOver, this.mouseout = this._mouseOut, this.click = this.tap = this._clickTap, this.interactive = !0, this.anchor.set(.5, .5), this._cacheAnchorY = null
    }

    function u(t) {
        this.name = t || "Collection#" + ++u.__id, this._arr = [], this.throwIfIn = !1, this.throwIfNotIn = !1, this.throwIfOut = !1
    }

    function _() {
        this.count = 0, this._callbacks = [], this._doItAfter = [], this._blocked = !1, this.disposed = !1
    }

    function y(t) {
        this.stage = t, this.mouse = new PIXI.InteractionData, this.touchs = {}, this.interactInvisible = !1, this.tempPoint = new PIXI.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0
    }
    e.prototype = Object.create(PIXI.Sprite.prototype), e.prototype.constructor = e, e.prototype.destroy = function() {
        this.disposed || (this.disposed = !0, this.parent && this.parent.removeChild(this), this.onClick.dispose(), this.onClick = null, this.onDown.dispose(), this.onDown = null, this.onUp.dispose(), this.onUp = null, this.onOut.dispose(), this.onOut = null, this._label && (this._label.destroy(), this._label = null), this.mousedown = this.touchstart = null, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null, this.mouseover = null, this.mouseout = null, this.click = null, this.interactive = !1, this._cacheAnchorY = null)
    }, e.prototype.setOpenURL = function(e) {
        this.disposed || this.onClick.add(function(i) {
            t.open(e, "_blank")
        })
    }, e.prototype.setIcon = function(t, e, i, s, o) {
        if (!this.disposed) {
            var n;
            if (i = i || 0, s = s || 0, o = o || 1, "string" == typeof t) n = this.app.assets.getTexture(t, e);
            else if (t instanceof PIXI.Texture) n = t;
            else if (t instanceof PIXI.Sprite) this.icon = t;
            else if (null == t && this.icon) return this.removeChild(this.icon), void(this.icon = null);
            n && (this.icon ? this.icon.setTexture(n) : this.icon = new PIXI.Sprite(n)), this.icon.anchor.set(.5, .5), this.icon.x = i, this.icon.y = s, this.icon.scale.set(o, o), this.addChild(this.icon)
        }
    }, e.prototype.setLabel = function(t, e, i, s) {
        t = t || "", i = i || 0, s = s || 0, this._label || (this._label = new PIXI.Text(t, e), this.addChild(this._label)), this._label.text = t, e && (this._label.style = e), this._label.x = this.width / 2 - this._label.width / 2 + i, this._label.y = this.height / 2 - this._label.height / 2 + s
    }, e.prototype._mouseOver = function(t) {
        this.disposed || (this.isOver = !0, this.isDown || (this.tint = this.overTint))
    }, e.prototype._mouseOut = function(t) {
        this.disposed || (this.isOver = !1, this.onOut.call(t), this.isDown || (this.tint = this.upTint))
    }, e.prototype._mouseDown = function(t) {
        this.disposed || (this.isDown = !0, this.tint = this.downTint, this.onDown.call(t))
    }, e.prototype._mouseUp = function(t) {
        this.disposed || (this.isDown = !1, this.isOver ? this.tint = this.overTint : this.tint = this.upTint, this.onUp.call(t))
    }, e.prototype._clickTap = function(t) {
        this.disposed || this.onClick.call(t)
    }, Object.defineProperty(e.prototype, "enable", {
        get: function() {
            return this.interactive
        },
        set: function(t) {
            this.disposed || (this.interactive = t, this.buttonMode = t, !1 === t ? (this.isOver = !1, this._mouseUp(), this.tint = this.disableTint) : this.tint = this.upTint)
        }
    }), e.generateButton = function(t, i, s, o) {
        return new e(Qi.assets.getTexture(t, i), s, o)
    }, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.prototype.setBg = function(t) {
        null != this.bg && this.bg.name == t || (null == this.bg ? (this.bg = Qi.assets.getSprite(t), this.addChildAt(this.bg, 0)) : this.bg.texture = Qi.assets.getTexture(t), this.bg.name = t)
    }, i.prototype.activate = function() {
        this.visible = !0, this.validate()
    }, i.prototype.deactivate = function() {
        this.visible = !1
    }, i.prototype.validate = function() {
        this.upHitArea && (this.upHitArea.interactive = Boolean(this.upHitArea.drawing) || this.isWayToUpOpened() || this.isWayToFadeUpOpened()), this.rightHitArea && (this.rightHitArea.interactive = Boolean(this.rightHitArea.drawing) || this.isWayToRightOpened() || this.isWayToFadeRightOpened()), this.downHitArea && (this.downHitArea.interactive = Boolean(this.downHitArea.drawing) || this.isWayToDownOpened() || this.isWayToFadeDownOpened()), this.leftHitArea && (this.leftHitArea.interactive = Boolean(this.leftHitArea.drawing) || this.isWayToLeftOpened() || this.isWayToFadeLeftOpened())
    }, i.prototype.isGoUpByClickZone = function() {
        return null == this.upHitArea
    }, i.prototype.isGoRightByClickZone = function() {
        return null == this.rightHitArea
    }, i.prototype.isGoDownByClickZone = function() {
        return null == this.downHitArea
    }, i.prototype.isGoLeftByClickZone = function() {
        return null == this.leftHitArea
    }, i.prototype.isWayToUpOpened = function() {
        return null != this.up
    }, i.prototype.isWayToRightOpened = function() {
        return null != this.right
    }, i.prototype.isWayToDownOpened = function() {
        return null != this.down
    }, i.prototype.isWayToLeftOpened = function() {
        return null != this.left
    }, i.prototype.isWayToFadeUpOpened = function() {
        return null != this.fadeUp
    }, i.prototype.isWayToFadeRightOpened = function() {
        return null != this.fadeRight
    }, i.prototype.isWayToFadeDownOpened = function() {
        return null != this.fadeDown
    }, i.prototype.isWayToFadeLeftOpened = function() {
        return null != this.fadeLeft
    }, i.prototype.setHitAreaUp = function() {
        var t = this;
        null == this.upHitArea && (this.upHitArea = new PIXI.Container);
        var e = 0 == arguments.length || 1 == arguments.length && !0 === Boolean(arguments[0]),
            s = arguments.length >= 2 ? Array.prototype.slice.call(arguments, i.prototype.setHitAreaLeft.length) : null;
        this._setHitArea(this.upHitArea, e, s, function() {
            t.level.changeUp()
        })
    }, i.prototype.setHitAreaRight = function() {
        var t = this;
        null == this.rightHitArea && (this.rightHitArea = new PIXI.Container);
        var e = 0 == arguments.length || 1 == arguments.length && !0 === Boolean(arguments[0]),
            s = arguments.length >= 2 ? Array.prototype.slice.call(arguments, i.prototype.setHitAreaLeft.length) : null;
        this._setHitArea(this.rightHitArea, e, s, function() {
            t.level.changeRight()
        })
    }, i.prototype.setHitAreaDown = function() {
        var t = this;
        null == this.downHitArea && (this.downHitArea = new PIXI.Container);
        var e = 0 == arguments.length || 1 == arguments.length && !0 === Boolean(arguments[0]),
            s = arguments.length >= 2 ? Array.prototype.slice.call(arguments, i.prototype.setHitAreaLeft.length) : null;
        this._setHitArea(this.downHitArea, e, s, function() {
            t.level.changeDown()
        })
    }, i.prototype.setHitAreaLeft = function() {
        var t = this;
        null == this.leftHitArea && (this.leftHitArea = new PIXI.Container);
        var e = 0 == arguments.length || 1 == arguments.length && !0 === Boolean(arguments[0]),
            s = arguments.length >= 2 ? Array.prototype.slice.call(arguments, i.prototype.setHitAreaLeft.length) : null;
        this._setHitArea(this.leftHitArea, e, s, function() {
            t.level.changeLeft()
        })
    }, i.prototype._setHitArea = function(t, e, i, s) {
        if (t.interactive = t.buttonMode = !0, this.addChild(t), e) {
            var o = new PIXI.Graphics;
            o.beginFill(65280, .3), o.drawRect(0, 0, 800, 600), t.addChild(o), t.drawing = !0, t.click = t.tap = function(e) {
                b.drawClickPointOnDO(t, e.data.global)
            }
        } else null != i && (t.hitArea = new PIXI.Polygon(i), t.click = t.tap = s, Qi.showHitAreas && b.showHitArea(t))
    }, i.prototype.dispatchChanges = function() {
        Qi.playState.emit(dt.EVENT_LOCATION_CHANGED, this.level), this.validate()
    }, i.prototype.forceSaveData = function() {
        Qi.forceSaveData()
    }, i.prototype.getActorSavesAnotherLocation = function(t, e) {
        return Qi.saveData.getOrCreateObject(t, o.Actors, e)
    }, i.prototype.getActorSaves = function(t) {
        return this.getActorSavesAnotherLocation(this.name, t)
    }, i.prototype.getItemSavesAnotherLocation = function(t, e) {
        return Qi.saveData.getOrCreateObject(t, a.Items, e)
    }, i.prototype.getItemSaves = function(t) {
        return this.getItemSavesAnotherLocation(this.name, t)
    }, i.prototype.isItemPickedUp = function(t) {
        return Boolean(this.getItemSaves(t).pickedUp)
    }, i.prototype.isItemPickedUpAnotherLocation = function(t, e) {
        return Boolean(this.getItemSavesAnotherLocation(t, e).pickedUp)
    }, i.prototype._onItemClick = function(t) {
        this.getItemSaves(t.name).pickedUp = !0, this.forceSaveData()
    }, s.prototype = Object.create(i.prototype), s.prototype.constructor = s, s.prototype._onDoorLeftOpen = function() {
        this._doorLeftSaves.opened = !0, this.forceSaveData()
    }, s.prototype.isGoLeftByClickZone = function() {
        return !1
    }, s.prototype.isWayToLeftOpened = function() {
        return this._doorLeft.opened
    }, o.prototype = Object.create(PIXI.Container.prototype), o.prototype.constructor = o, o.prototype.showHitArea = function() {
        if (Qi.showHitAreas && null != this.hitArea) {
            var t = this.hitArea,
                e = this._hitAreaG || new PIXI.Graphics;
            e.clear(), e.beginFill(16711680, .3), t instanceof PIXI.Rectangle ? e.drawRect(t.x, t.y, t.width, t.height) : t instanceof PIXI.Polygon && e.drawPolygon(t.points), this.addChild(e), this._hitAreaG = e
        }
    }, o.prototype.setHitAreaSize = function(t, e, i, s) {
        i = i || 0, s = s || 0, this.hitArea = new PIXI.Rectangle(.5 * -t + i, .5 * -e + s, t, e)
    }, o.prototype.setHitAreaPolygon = function() {
        this.hitArea = new PIXI.Polygon(Array.prototype.slice.call(arguments, o.prototype.setHitAreaPolygon.length))
    }, o.prototype._clickTap = function(t) {}, o.prototype.isInventoryHasSelected = function() {
        return null != Qi.playState.inventory.selected
    }, o.prototype.isInventorySelected = function(t) {
        return null != Qi.playState.inventory.selected && Qi.playState.inventory.selected.name == t
    }, o.prototype.getInventorySelected = function() {
        return null == Qi.playState.inventory.selected ? null : Qi.playState.inventory.selected
    }, o.prototype.removeSelectedFromInventory = function() {
        null != Qi.playState.inventory.selected && Qi.playState.inventory.remove(Qi.playState.inventory.selected)
    }, o.Actors = "Actors", o.DoorHandle = "DoorHandle", o.DoorPortal = "DoorPortal", o.DoorTbt6 = "DoorTbt6", o.DoorTbt8 = "DoorTbt8", o.DoorWt = "DoorWt", o.DoorUc = "DoorUc", o.StoneUc = "StoneUc", o.DiaryWt = "DiaryWt", o.DoorWtLeft = "DoorWtLeft", o.GongTibet = "GongTibet", o.StairsTbt = "StairsTbt", o.StairTbt = "StairTbt", o.TruckMn = "TruckMn", o.TruckMnRide = "TruckMnRide", o.DoorMn = "DoorMn", o.BrickDoorMn = "BrickDoorMn", o.LeverMn = "LeverMn", o.BarricadeMn = "BarricadeMn", o.HatchMn = "HatchMn", o.ButtonMn = "ButtonMn", o.OilTankMn = "OilTankMn", o.LockMnSmall = "LockMnSmall", o.LockMnBig = "LockMnBig", o.LockMnBigSlot = "LockMnBigSlot", o.LampGrateMn = "LampGrateMn", o.SecretSign3Cover = "SecretSign3Cover", o.LadderMn = "LadderMn", o.FlyingStone = "FlyingStone", o.LightSignBnk = "LightSignBnk", o.LampUc = "LampUc", o.CubeUc = "CubeUc", o.CubePr = "CubePr", o.LeverUc = "LeverUc", o.GrateUc = "GrateUc", o.GrateUcScrew = "GrateUcScrew", o.ButtonBnk = "ButtonBnk", o.ClickArea = "ClickArea", o.DoorCb = "DoorCb", o.DoorPr = "DoorPr", o.LotosStonePr = "LotosStonePr", o.ButtonCb = "ButtonCb", o.Sign = "Sign", o.ControlVnt = "ControlVnt", o.BigControlVnt = "BigControlVnt", o.RotatorVnt = "RotatorVnt", o.CoverVnt = "CoverVnt", o.PassVnt = "PassVnt", o.CloseSecretVnt = "CloseSecretVnt", o.TrainDoorSbw = "TrainDoorSbw", o.ButtonSbw = "ButtonSbw", o.TrolleySbw = "TrolleySbw", o.TrolleyStopper = "TrolleyStopper", o.TrolleyHandle = "TrolleyHandle", o.RailsSbw = "RailsSbw", o.TorchLw = "TorchLw", o.DoorLw = "DoorLw", o.LeverLw = "LeverLw", o.CubeLw = "CubeLw", n.LOCATION_NAME_FIELD = "LocationName", n.prototype = Object.create(PIXI.Container.prototype), n.prototype.constructor = n, n.prototype.activate = function(t, e) {
        var i;
        e = void 0 === e || e, this.prevLocationName = this.currLocation ? this.currLocation.name : null, i = void 0 === t ? this.startLocation : this.getLocationByName(t), e ? this.setLocation(i) : this.currLocation = i, null != this.musicName && Qi.music.setMusicAndPlay(this.musicName), Qi.playState.on(dt.EVENT_ZONE_CLICK, this._onZoneClick, this), parent.cmgGameEvent && parent.cmgGameEvent("start", this.name)
    }, n.prototype.deactivate = function() {
        this.hideLocations(), Qi.playState.off(dt.EVENT_ZONE_CLICK, this._onZoneClick, this)
    }, n.prototype.addLocation = function(t) {
        if (t instanceof i) {
            if (this._locations.has(t)) return;
            t.visible = !1, this._locations.add(t), this.addChild(t)
        }
    }, n.prototype.dispatchLocationChanged = function() {
        Qi.playState.emit(dt.EVENT_LOCATION_CHANGED, this)
    }, n.prototype.getLocationByName = function(t) {
        if (null == t) return null;
        for (var e = this._locations.total(), i = 0; i < e; i++) {
            var s = this._locations.at(i);
            if (s.name == t) return s
        }
        return null
    }, n.prototype.hideLocations = function() {
        for (var t = this._locations.total(), e = 0; e < t; e++) this._locations.at(e).visible = !1
    }, n.prototype.setLocation = function(t) {
        if (t instanceof i) {
            for (var e = this._locations.total(), s = 0; s < e; s++) {
                var o = this._locations.at(s);
                o.visible = t == o
            }
            t.activate(), t.position.set(0, 0), this.prevLocationName = this.currLocation ? this.currLocation.name : null, this.currLocation = t, this.dispatchLocationChanged()
        }
    }, n.prototype.setLocationByName = function(t) {
        var e = this.getLocationByName(t);
        e && this.setLocation(e)
    }, n.prototype._onZoneClick = function(t, e) {
        if (0 != Qi.playState.interactiveChildren) {
            e = Boolean(e);
            var i = 0;
            switch (t) {
                case "up":
                    i = this.changeUp(e);
                    break;
                case "right":
                    i = this.changeRight(e);
                    break;
                case "down":
                    i = this.changeDown(e);
                    break;
                case "left":
                    i = this.changeLeft(e)
            }
            Qi.playState.disableInteractiveFor(i)
        }
    }, n.prototype._convertLevelChangeData = function(t) {
        var e = Qi.playState.levelMng.get(t.levelName);
        return e.activate(t.locationName, !1), e.getLocationByName(t.locationName)
    }, n.prototype._move = function(t, e, i, s) {
        this.prevLocationName = this.currLocation ? this.currLocation.name : null;
        var o = t.level === s.level;
        return o && (this.currLocation = s), s.activate(), TweenMax.to(t, this.transitionDuration, {
            x: e,
            y: i,
            ease: Power2.easeInOut
        }), TweenMax.to(s, this.transitionDuration, {
            x: 0,
            y: 0,
            ease: Power2.easeInOut,
            onCompleteScope: this,
            onComplete: function() {
                o ? t.deactivate() : t.level.deactivate()
            }
        }), Qi.soundOn && this.sndMove.play(), o ? this.dispatchLocationChanged() : s.level.dispatchLocationChanged(), this.transitionDuration
    }, n.prototype.moveUp = function() {
        if (null == this.currLocation) return 0;
        if (!this.isCanUp()) return 0;
        var t = this.currLocation,
            e = this.currLocation.up;
        e instanceof rt && (e = this._convertLevelChangeData(e)), e.x = 0, e.y = t.y - Qi.gameHeight0 - this.distanceBetweenLocations;
        var i = t.y + Qi.gameHeight0 + this.distanceBetweenLocations;
        return this._move(t, 0, i, e)
    }, n.prototype.moveRight = function() {
        if (null == this.currLocation) return 0;
        if (!this.isCanRight()) return 0;
        var t = this.currLocation,
            e = this.currLocation.right;
        e instanceof rt && (e = this._convertLevelChangeData(e)), e.x = t.x + Qi.gameWidth0 + this.distanceBetweenLocations, e.y = 0;
        var i = t.x - Qi.gameWidth0 - this.distanceBetweenLocations;
        return this._move(t, i, 0, e)
    }, n.prototype.moveDown = function() {
        if (null == this.currLocation) return 0;
        if (!this.isCanDown()) return 0;
        var t = this.currLocation,
            e = this.currLocation.down;
        e instanceof rt && (e = this._convertLevelChangeData(e)), e.x = 0, e.y = t.y + Qi.gameHeight0 + this.distanceBetweenLocations;
        var i = t.y - Qi.gameHeight0 - this.distanceBetweenLocations;
        return this._move(t, 0, i, e)
    }, n.prototype.moveLeft = function() {
        if (null == this.currLocation) return 0;
        if (!this.isCanLeft()) return 0;
        var t = this.currLocation,
            e = this.currLocation.left;
        e instanceof rt && (e = this._convertLevelChangeData(e)), e.x = t.x - Qi.gameWidth0 - this.distanceBetweenLocations, e.y = 0;
        var i = t.x + Qi.gameWidth0 + this.distanceBetweenLocations;
        return this._move(t, i, 0, e)
    }, n.prototype.isCanUp = function() {
        return null != this.currLocation && (this.currLocation.isWayToUpOpened() || this.currLocation.isWayToFadeUpOpened())
    }, n.prototype.isCanRight = function() {
        return null != this.currLocation && (this.currLocation.isWayToRightOpened() || this.currLocation.isWayToFadeRightOpened())
    }, n.prototype.isCanDown = function() {
        return null != this.currLocation && (this.currLocation.isWayToDownOpened() || this.currLocation.isWayToFadeDownOpened())
    }, n.prototype.isCanLeft = function() {
        return null != this.currLocation && (this.currLocation.isWayToLeftOpened() || this.currLocation.isWayToFadeLeftOpened())
    }, n.prototype._fade = function(t, e, i, s) {
        var o = i ? this.transitionDurationPortal : this.transitionDuration;
        s = void 0 == s || s, e instanceof rt && (e = this._convertLevelChangeData(e)), this.prevLocationName = this.currLocation ? this.currLocation.name : null;
        var n = t.level === e.level;
        n && (this.currLocation = e), this._overlay.alpha = 0, this._overlay.visible = !0;
        var a = new TimelineMax({
            onCompleteScope: this,
            onComplete: function() {
                this._overlay.visible = !1
            }
        });
        return a.to(this._overlay, .5 * o, {
            alpha: 1
        }), a.call(function() {
            e.position.set(0, 0), e.activate(), n ? t.deactivate() : t.level.deactivate()
        }), i && a.add(function() {}, "+=0.5"), a.add(TweenLite.to(this._overlay, .5 * o, {
            alpha: 0
        })), s && Qi.soundOn && this.sndFade.play(), n ? this.dispatchLocationChanged() : e.level.dispatchLocationChanged(), o
    }, n.prototype.fadeA = function(t, e) {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeA ? 0 : this._fade(this.currLocation, this.currLocation.fadeA, t, e)
    }, n.prototype.fadeB = function(t, e) {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeB ? 0 : this._fade(this.currLocation, this.currLocation.fadeB, t, e)
    }, n.prototype.fadeC = function(t, e) {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeC ? 0 : this._fade(this.currLocation, this.currLocation.fadeC, t, e)
    }, n.prototype.fadeD = function(t, e) {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeD ? 0 : this._fade(this.currLocation, this.currLocation.fadeD, t, e)
    }, n.prototype.fadeUp = function() {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeUp ? 0 : this.currLocation.isWayToFadeUpOpened() ? this._fade(this.currLocation, this.currLocation.fadeUp) : 0
    }, n.prototype.fadeRight = function() {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeRight ? 0 : this.currLocation.isWayToFadeRightOpened() ? this._fade(this.currLocation, this.currLocation.fadeRight) : 0
    }, n.prototype.fadeDown = function() {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeDown ? 0 : this.currLocation.isWayToFadeDownOpened() ? this._fade(this.currLocation, this.currLocation.fadeDown) : 0
    }, n.prototype.fadeLeft = function() {
        return null == this.currLocation ? 0 : null == this.currLocation.fadeLeft ? 0 : this.currLocation.isWayToFadeLeftOpened() ? this._fade(this.currLocation, this.currLocation.fadeLeft) : 0
    }, n.prototype.changeUp = function(t) {
        return null == this.currLocation ? 0 : this.currLocation.isWayToUpOpened() ? this.moveUp() : this.currLocation.isWayToFadeUpOpened() && !t ? this.fadeUp() : 0
    }, n.prototype.changeRight = function(t) {
        return null == this.currLocation ? 0 : this.currLocation.isWayToRightOpened() ? this.moveRight() : this.currLocation.isWayToFadeRightOpened() && !t ? this.fadeRight() : 0
    }, n.prototype.changeDown = function(t) {
        return null == this.currLocation ? 0 : this.currLocation.isWayToDownOpened() ? this.moveDown() : this.currLocation.isWayToFadeDownOpened() && !t ? this.fadeDown() : 0
    }, n.prototype.changeLeft = function(t) {
        return null == this.currLocation ? 0 : this.currLocation.isWayToLeftOpened() ? this.moveLeft() : this.currLocation.isWayToFadeLeftOpened() && !t ? this.fadeLeft() : 0
    }, a.EVENT_CLICK_SCR = "clickScr", a.EVENT_CLICK_INV = "clickInv", a.prototype = Object.create(PIXI.Container.prototype), a.prototype.constructor = a, a.prototype._clickTap = function(t) {
        switch (t.target.name) {
            case "scr":
                this.setInvMode(), Qi.playState.inventory.add(this, !0), this.emit(a.EVENT_CLICK_SCR, this);
                break;
            case "inv":
                this.emit(a.EVENT_CLICK_INV, this)
        }
    }, a.prototype.showSprScrHitArea = function() {
        if (Qi.showHitAreas && null != this.sprScr) {
            var t = this._hitAreaG || new PIXI.Graphics;
            this._hitAreaG = t, t.clear(), t.beginFill(16711680, .3);
            var e = this.sprScr.width / this.sprScr.scale.x,
                i = this.sprScr.height / this.sprScr.scale.y,
                s = .5 * -e,
                o = .5 * -i;
            if (null != this.sprScr.hitArea) {
                var n = this.sprScr.hitArea;
                s = n.x, o = n.y, e = n.width, i = n.height
            }
            t.drawRect(s, o, e, i), this.sprScr.addChild(t)
        }
    }, a.prototype.scaleSprScrHitArea = function(t, e) {
        if (null != this.sprScr) {
            t = void 0 == t ? 1 : t, e = void 0 == e ? 1 : e;
            var i = this.sprScr.width * t,
                s = this.sprScr.height * e;
            i /= this.sprScr.scale.x, s /= this.sprScr.scale.y, this.sprScr.hitArea = new PIXI.Rectangle(.5 * -i, .5 * -s, i, s)
        }
    }, a.prototype.setEnableSprScr = function(t) {
        this.sprScr.buttonMode = this.sprScr.interactive = t
    }, a.prototype.setEnableSprInv = function(t) {
        this.sprInv.buttonMode = this.sprInv.interactive = t
    }, a.prototype.setScrMode = function() {
        null != this.sprScr && (this.sprScr.visible = !0, this.sprInv.visible = !1)
    }, a.prototype.setInvMode = function() {
        null != this.sprScr && (this.sprScr.visible = !1, this.sprInv.visible = !0)
    }, a.prototype.isScrMode = function() {
        return null != this.sprScr && (this.sprScr.visible && !this.sprInv.visible)
    }, a.prototype.isInvMode = function() {
        return null == this.sprScr || !this.sprScr.visible && this.sprInv.visible
    }, a.prototype.moveTo = function(t, e, i, s) {
        TweenMax.to(this, .1, {
            x: t,
            y: e,
            onComplete: i,
            onCompleteScope: s
        })
    }, a.combine = function(t, e) {
        if (t.isInvMode() && e.isInvMode()) {
            if (a.isItemInstancesOf(t, e, W, H)) {
                Qi.playState.inventory.remove(t, !1), Qi.playState.inventory.remove(e, !1);
                var i = new B;
                return i.setInvMode(), Qi.playState.inventory.add(i), !0
            }
            return !1
        }
    }, a.isItemInstancesOf = function(t, e, i, s) {
        return t instanceof i && e instanceof s || t instanceof s && e instanceof i
    }, a.Items = "Items", a.Notes = "Notes", a.DoorKey = "DoorKey", a.DoorHandleItem = "DoorHandleItem", a.Cube = "Cube", a.Gear = "Gear", a.LightBulb = "LightBulb", a.Hammer = "Hammer", a.Knob = "Knob", a.Stick = "Stick", a.Oiler = "Oiler", a.OilerFilled = "OilerFilled", a.Wheel = "Wheel", a.Pickaxe = "Pickaxe", a.Lighter = "Lighter", a.BunkerKey = "BunkerKey", a.Binoculars = "Binoculars", a.Stone = "Stone", a.Screwdriver = "Screwdriver", a.createItem = function(t) {
        switch (t) {
            case a.DoorKey:
                return new P;
            case a.LightBulb:
                return new R;
            case a.Hammer:
                return new B;
            case a.Knob:
                return new H;
            case a.Notes:
                return new U;
            case a.Stick:
                return new W;
            case a.Oiler:
                return new F;
            case a.OilerFilled:
                return new X;
            case a.Wheel:
                return new z;
            case a.Pickaxe:
                return new G;
            case a.Lighter:
                return new V;
            case a.BunkerKey:
                return new x;
            case a.Binoculars:
                return new A;
            case a.Cube:
                return new M;
            case a.Gear:
                return new D;
            case a.DoorHandleItem:
                return new N;
            case a.Stone:
                return new K;
            case a.Screwdriver:
                return new j
        }
        return null
    }, r.prototype = Object.create(PIXI.Container.prototype), r.prototype.constructor = r, r.prototype.createSign = function(t, e) {
        var i = "sign" + t + "_ui";
        (e = Boolean(e)) && (i += "_on");
        var s = Qi.assets.getSprite(i, "atlasItems");
        s.anchor.set(.5, .5), s.scale.set(.3), s.x = (t - 1) * this.offsetX, s.y = (t - 1) * this.offsetY, this.addChild(s), this.signs[t - 1] = s
    }, r.prototype.isSignOn = function(t) {
        return Boolean(this._saves["isSign" + t + "On"])
    }, r.prototype.setSignOn = function(t) {
        this._saves["isSign" + t + "On"] || (this._saves["isSign" + t + "On"] = !0, Qi.forceSaveData(), this.signs[t - 1].texture = Qi.assets.getTexture("sign" + t + "_ui_on", "atlasItems"))
    }, r.prototype.isWtEnableOpenDoor = function(t) {
        for (var e = 0, i = 1; i <= 4; i++) this.isSignOn(i) && e++;
        return t <= e
    }, h.prototype = Object.create(PIXI.Container.prototype), h.prototype.constructor = h, h.prototype.setPercent = function(t) {
        this._txtLoading.text = "Loading " + t
    }, c.prototype = Object.create(PIXI.Container.prototype), c.prototype.constructor = c, c.prototype.runAfter = function(t, e) {
        e = void 0 != e ? e : 1e3, setTimeout(t, e)
    }, l.prototype.constructor = l, l.prototype.hasTexture = function(t, e) {
        return e ? PIXI.loader.resources.hasOwnProperty(e) && PIXI.loader.resources.hasOwnProperty[e].textures.hasOwnProperty(t) : PIXI.utils.TextureCache.hasOwnProperty(t)
    }, l.prototype.getTexture = function(t, e) {
        return e ? PIXI.loader.resources[e].textures[t] : PIXI.utils.TextureCache[t]
    }, l.prototype.addTexture = function(t, e) {
        if (void 0 != PIXI.utils.TextureCache[t]) throw new Error("Already has texture with key " + t);
        PIXI.utils.TextureCache[t] = e
    }, l.prototype.getTextures = function(t, e) {
        var i;
        i = e ? PIXI.loader.resources[e].textures : PIXI.utils.TextureCache;
        for (var s = [], o = 0; o < t.length; o++) s.push(i[t[o]]);
        return s
    }, l.prototype.getSprite = function(t, e, i) {
        var s = new PIXI.Sprite(this.getTexture(t, e));
        return i && s.anchor.set(.5, .5), s
    }, l.prototype.getSound = function(t) {
        return 0 == Qi.audioEnabled ? null : PIXI.loader.resources[t].sound
    }, l.prototype.getParsedJSON = function(t) {
        return PIXI.loader.resources[t].data
    }, d.prototype.constructor = d, d.prototype._onVisibilityChange = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = !1 === document.hidden ? "onPageShow" : "onPageHide", this.emit(this._event)
    }, d.prototype._onWebkitVisibilityChange = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = !1 === document.webkitHidden ? "onPageShow" : "onPageHide", this.emit(this._event)
    }, d.prototype._onPageShow = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onPageShow", this.emit(this._event)
    }, d.prototype._onPageHide = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onPageHide", this.emit(this._event)
    }, d.prototype._onFocus = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onFocusGet", this.emit(this._event)
    }, d.prototype._onBlur = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onFocusLost", this.emit(this._event)
    }, d.prototype._onResize = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onResize", this.emit(this._event);
        var e = this._getOrientation();
        this.orientation !== e && (this._event.orientation = this.orientation = e, this._onOrientationChange(t))
    }, d.prototype._onOrientationChange = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onOrientationChange", this._event.orientation = this.orientation = this._getOrientation(), this.emit(this._event)
    }, d.prototype._getOrientation = function() {
        return t.innerWidth > t.innerHeight ? "landscape" : "portrait"
    }, EventTarget = function() {
        var t = {};
        this.addEventListener = this.on = function(e, i) {
            void 0 === t[e] && (t[e] = []), -1 === t[e].indexOf(i) && t[e].push(i)
        }, this.dispatchEvent = this.emit = function(e) {
            if (t[e.type] && t[e.type].length)
                for (var i = 0, s = t[e.type].length; i < s; i++) t[e.type][i](e)
        }, this.removeEventListener = this.off = function(e, i) {
            var s = t[e].indexOf(i); - 1 !== s && t[e].splice(s, 1)
        }, this.removeAllEventListeners = function(e) {
            var i = t[e];
            i && (i.length = 0)
        }
    }, p.prototype = Object.create(PIXI.Sprite.prototype), p.prototype.constructor = p, p.prototype.destroy = function() {
        this.disposed || (this.disposed = !0, this.parent && this.parent.removeChild(this), this.onClick.dispose(), this.onClick = null, this.onDown.dispose(), this.onDown = null, this.onUp.dispose(), this.onUp = null, this.onOut.dispose(), this.onOut = null, this.up = null, this.over = null, this.down = null, this.mousedown = this.touchstart = null, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null, this.mouseover = null, this.mouseout = null, this.click = null, this.interactive = !1, this._cacheAnchorY = null)
    }, p.prototype.setOpenURL = function(e) {
        this.disposed || this.onClick.add(function(i) {
            t.open(e, "_blank")
        })
    }, p.prototype._mouseOver = function(t) {
        this.disposed || (this.isOver = !0, this.isDown || (this.over ? this.texture = this.over : (this._cacheAnchorY = this.anchor.y, this.anchor.y -= .01)))
    }, p.prototype._mouseOut = function(t) {
        this.disposed || (this.isOver = !1, this.onOut.call(t), this.isDown || (this.texture = this.up, this._cacheAnchorY && (this.anchor.y = this._cacheAnchorY, this._cacheAnchorY = null)))
    }, p.prototype._mouseDown = function(t) {
        this.disposed || (this.isDown = !0, this.down && (this.texture = this.down), this.onDown.call(t))
    }, p.prototype._mouseUp = function(t) {
        this.disposed || (this.isDown = !1, this.isOver ? this.over ? this.texture = this.over : this.anchor.y = this._cacheAnchorY - .01 : (this.texture = this.up, this._cacheAnchorY && (this.anchor.y = this._cacheAnchorY, this._cacheAnchorY = null)), this.onUp.call(t))
    }, p.prototype._clickTap = function(t) {
        this.disposed || this.onClick.call(t)
    }, Object.defineProperty(p.prototype, "enable", {
        get: function() {
            return this.interactive
        },
        set: function(t) {
            this.disposed || (this.interactive = t, !1 === t && (this.isOver = !1, this._mouseUp()))
        }
    }), p.generateButton = function(t, e, i, s) {
        var o, n, a;
        o = Qi.assets.getTexture(t + "up", e);
        try {
            n = Qi.assets.getTexture(t + "over", e)
        } catch (t) {}
        try {
            a = Qi.assets.getTexture(t + "down", e)
        } catch (t) {}
        return new p(o, n, a, i, s)
    }, u.__id = 0, u.prototype.copyArray = function(t) {
        if (void 0 != t)
            for (var e = 0; e < t.length; e++) this.add(t[e])
    }, u.prototype.toArray = function() {
        return this._arr.slice()
    }, u.prototype.add = function(t) {
        this._arr.indexOf(t) >= 0 ? this.throwIfIn && new Error("Item already in collection. [" + this.name + "].") : this._arr[this._arr.length] = t
    }, u.prototype.remove = function(t) {
        var e = this._arr.indexOf(t);
        e < 0 ? this.throwIfNotIn && new Error("There is not item in collection. [" + this.name + "].") : this._arr.splice(e, 1)
    }, u.prototype.at = function(t) {
        return t < 0 ? (this.throwIfOut && new Error("Index is lower than zero. [" + this.name + "]."), t = 0) : t >= this._arr.length && (this.throwIfOut && new Error("Index is higher than total. [" + this.name + "]."), t = this._arr.length - 1), this._arr[t]
    }, u.prototype.first = function() {
        return this._arr[0]
    }, u.prototype.last = function() {
        return this._arr[this._arr.length - 1]
    }, u.prototype.getByProperty = function(t, e) {
        if (null == t || null == e) return null;
        for (var i = this.total(), s = 0; s < i; s++) {
            var o = this._arr[s];
            if (o[t] && o[t] == e) return o
        }
        return null
    }, u.prototype.has = function(t) {
        return this._arr.indexOf(t) >= 0
    }, u.prototype.hasFieldKeyValue = function(t, e) {
        return void 0 != this.getFieldKeyValue(t, e)
    }, u.prototype.getFieldKeyValue = function(t, e) {
        for (var i = this._arr.length, s = 0; s < i; s++) {
            var o = this._arr[s];
            if (void 0 != o[t] && o[t] == e) return o
        }
    }, u.prototype.clear = function() {
        this._arr.splice(0, this._arr.length)
    }, u.prototype.total = function() {
        return this._arr.length
    }, Device = function() {
        this.patchAndroidClearRectBug = !1, this.desktop = !1, this.iOS = !1, this.cocoonJS = !1, this.ejecta = !1, this.android = !1, this.chromeOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.canvas = !1, this.file = !1, this.fileSystem = !1, this.localStorage = !1, this.webGL = !1, this.worker = !1, this.touch = !1, this.mspointer = !1, this.css3D = !1, this.pointerLock = !1, this.typedArray = !1, this.vibration = !1, this.quirksMode = !1, this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.mobileSafari = !1, this.midori = !1, this.opera = !1, this.safari = !1, this.webApp = !1, this.silk = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.pixelRatio = 0, this.littleEndian = !1, this._checkAudio(), this._checkBrowser(), this._checkCSS3D(), this._checkDevice(), this._checkFeatures(), this._checkOS()
    }, Device.prototype = {
        _checkOS: function() {
            var t = navigator.userAgent;
            /Android/.test(t) ? this.android = !0 : /CrOS/.test(t) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? this.iOS = !0 : /Linux/.test(t) ? this.linux = !0 : /Mac OS/.test(t) ? this.macOS = !0 : /Windows/.test(t) && (this.windows = !0), (this.windows || this.macOS || this.linux && !1 === this.silk) && (this.desktop = !0)
        },
        _checkFeatures: function() {
            this.canvas = !!t.CanvasRenderingContext2D;
            try {
                this.localStorage = !!localStorage.getItem
            } catch (t) {
                this.localStorage = !1
            }
            this.file = !!(t.File && t.FileReader && t.FileList && t.Blob), this.fileSystem = !!t.requestFileSystem, this.webGL = function() {
                try {
                    var e = document.createElement("canvas");
                    return !!t.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (t) {
                    return !1
                }
            }(), null === this.webGL || !1 === this.webGL ? this.webGL = !1 : this.webGL = !0, this.worker = !!t.Worker, ("ontouchstart" in document.documentElement || t.navigator.maxTouchPoints && t.navigator.maxTouchPoints > 1) && (this.touch = !0), (t.navigator.msPointerEnabled || t.navigator.pointerEnabled) && (this.mspointer = !0), this.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document, this.quirksMode = "CSS1Compat" !== document.compatMode
        },
        _checkBrowser: function() {
            var e = navigator.userAgent;
            /Arora/.test(e) ? this.arora = !0 : /Chrome/.test(e) ? this.chrome = !0 : /Epiphany/.test(e) ? this.epiphany = !0 : /Firefox/.test(e) ? this.firefox = !0 : /Mobile Safari/.test(e) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(e) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(e) ? this.midori = !0 : /Opera/.test(e) ? this.opera = !0 : /Safari/.test(e) ? this.safari = !0 : /Silk/.test(e) ? this.silk = !0 : /Trident\/(\d+\.\d+);/.test(e) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10)), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0), void 0 !== t.ejecta && (this.ejecta = !0)
        },
        _checkAudio: function() {
            this.audioData = !!t.Audio, this.webAudio = !(!t.webkitAudioContext && !t.AudioContext);
            var e = document.createElement("audio");
            try {
                !!e.canPlayType && (e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") && (this.opus = !0), e.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0), e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (this.webm = !0))
            } catch (t) {}
        },
        _checkDevice: function() {
            this.pixelRatio = t.devicePixelRatio || 1, this.iPhone = -1 != navigator.userAgent.toLowerCase().indexOf("iphone"), this.iPhone4 = 2 == this.pixelRatio && this.iPhone, this.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad"), "undefined" != typeof Int8Array ? (this.littleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0, this.typedArray = !0) : (this.littleEndian = !1, this.typedArray = !1), navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, navigator.vibrate && (this.vibration = !0)
        },
        _checkCSS3D: function() {
            var e, i = document.createElement("p"),
                s = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            for (var o in document.body.insertBefore(i, null), s) void 0 !== i.style[o] && (i.style[o] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(s[o]));
            document.body.removeChild(i), this.css3D = void 0 !== e && e.length > 0 && "none" !== e
        },
        canPlayAudio: function(t) {
            return !("mp3" != t || !this.mp3) || (!("ogg" != t || !this.ogg && !this.opus) || (!("m4a" != t || !this.m4a) || (!("wav" != t || !this.wav) || !("webm" != t || !this.webm))))
        },
        isConsoleOpen: function() {
            return !(!t.console || !t.console.firebug) || !!t.console && (console.profile(), console.profileEnd(), console.clear && console.clear(), console.profiles.length > 0)
        }
    }, Device.prototype.constructor = Device, _.prototype.dispose = function() {
        this.disposed || (this.disposed = !0, this.count = 0, this._callbacks = null, this._doItAfter = null)
    }, _.prototype.has = function(t, e) {
        if (!this.disposed) return this._callbacks.indexOf(t) >= 0
    }, _.prototype.add = function(t) {
        if (!this.disposed && !this.has(t)) {
            var e = this,
                i = function() {
                    e._callbacks[e.count] = t, e.count++
                };
            this._blocked ? this._doItAfter[this._doItAfter.length] = i : i()
        }
    }, _.prototype.remove = function(t) {
        if (!(this.disposed || this._callbacks.indexOf(t) < 0)) {
            var e = this,
                i = function() {
                    var i = e._callbacks.indexOf(t);
                    e._callbacks.splice(i, 1), e.count--
                };
            this._blocked ? this._doItAfter[this._doItAfter.length] = i : i()
        }
    }, _.prototype.call = function() {
        if (!this.disposed && this._callbacks.length > 0) {
            var t;
            for (this._blocked = !0, t = this._callbacks.length - 1; t >= 0; t--) this._callbacks[t].apply(null, arguments.length > 0 ? Array.prototype.slice.call(arguments) : null);
            if (this._blocked = !1, this.disposed) return;
            if (this._doItAfter.length > 0) {
                for (t = this._doItAfter.length - 1; t >= 0; t--) this._doItAfter[t]();
                this._doItAfter.splice(0, this._doItAfter.length)
            }
        }
    }, y.prototype.constructor = y;
    var v = "";
    y.prototype.collectInteractiveSprite = function(t, e) {
        for (var i = t.children, s = i.length, o = 0; o < s; o++) {
            var n = i[o];
            !1 === n.visible && !1 === this.interactInvisible || (n.interactive ? (console.log(v, n.name), n.__iParent = e, this.interactiveItems.push(n), n.children.length > 0 && (v += "\t", this.collectInteractiveSprite(n, n))) : (n.__iParent = null, n.children.length > 0 && this.collectInteractiveSprite(n, e)))
        }
        v = ""
    }, y.prototype.setTarget = function(t) {
        this.target = t, null === this.interactionDOMElement && this.setTargetDomElement(t.view), document.body.addEventListener("mouseup", this.onMouseUp, !0)
    }, y.prototype.setTargetDomElement = function(e) {
        null !== this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0)), t.navigator.msPointerEnabled && (e.style["-ms-content-zooming"] = "none", e.style["-ms-touch-action"] = "none"), this.interactionDOMElement = e, e.addEventListener("mousemove", this.onMouseMove, !0), e.addEventListener("mousedown", this.onMouseDown, !0), e.addEventListener("mouseout", this.onMouseOut, !0), e.addEventListener("touchstart", this.onTouchStart, !0), e.addEventListener("touchend", this.onTouchEnd, !0), e.addEventListener("touchmove", this.onTouchMove, !0)
    }, y.prototype.update = function() {
        if (this.target) {
            var t = Date.now(),
                e = t - this.last;
            if (!((e = 30 * e / 1e3) < 1)) {
                this.last = t;
                var i = 0;
                this.dirty && (this.dirty = !1, this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage));
                this.interactionDOMElement.style.cursor = "inherit";
                var s = this.interactiveItems.length;
                for (i = s - 1; i >= 0; i--) {
                    var o = this.interactiveItems[i];
                    if (o.mouseover || o.mouseout || o.buttonMode) {
                        if (o.__iParent && o.__iParent.__target) continue;
                        o.__hit = null != o.__target || this.hitTest(o, this.mouse), o.__hit ? (o.buttonMode && (this.interactionDOMElement.style.cursor = o.defaultCursor), o.__iParent && (o.__iParent.__target = o), o.__target ? this.mouse.target = o.__target : this.mouse.target = o, o.__isOver || (o.mouseover && o.mouseover(this.mouse), o.__isOver = !0)) : o.__isOver && (o.mouseout && o.mouseout(this.mouse), o.__isOver = !1)
                    }
                }
                for (i = s - 1; i >= 0; i--)(o = this.interactiveItems[i]).__target = null
            }
        }
    }, y.prototype.onMouseMove = function(e) {
        this.mouse.originalEvent = e || t.event;
        var i = this.interactionDOMElement.getBoundingClientRect();
        this.mouse.global.x = (e.clientX - i.left) * (this.target.width / i.width), this.mouse.global.y = (e.clientY - i.top) * (this.target.height / i.height);
        for (var s = this.interactiveItems.length, o = 0; o < s; o++) {
            var n = this.interactiveItems[o];
            n.mousemove && n.mousemove(this.mouse)
        }
    }, y.prototype.onMouseDown = function(e) {
        this.mouse.originalEvent = e || t.event;
        for (var i = this.interactiveItems.length, s = function(t, e) {
                return t === e || !!t.__target && s(t.__target, e)
            }, o = null, n = 0, a = i - 1; a >= 0; a--) {
            var r = this.interactiveItems[a];
            if (r.mousedown || r.click) {
                if (r != o && o && 0 == s(r, o)) continue;
                r.__hit = r.__target || this.hitTest(r, this.mouse), n++, r.__hit && (o || (o = r), r.__iParent && (r.__iParent.__target = r.__target || r), this.mouse.target = r.__target || r, r.mousedown && r.mousedown(this.mouse), r.__isDown = !0)
            } else r.__iParent.__target = r.__target
        }
        for (console.log(n, i), a = i - 1; a >= 0; a--)(r = this.interactiveItems[a]).__target = null
    }, y.prototype.onMouseOut = function() {
        var t = this.interactiveItems.length;
        this.interactionDOMElement.style.cursor = "inherit";
        for (var e = 0; e < t; e++) {
            var i = this.interactiveItems[e];
            i.__isOver && (this.mouse.target = i, i.mouseout && i.mouseout(this.mouse), i.__isOver = !1)
        }
    }, y.prototype.onMouseUp = function(e) {
        this.mouse.originalEvent = e || t.event;
        for (var i = this.interactiveItems.length, s = !1, o = 0; o < i; o++) {
            var n = this.interactiveItems[o];
            n.__hit = this.hitTest(n, this.mouse), n.__hit && !s ? (n.mouseup && n.mouseup(this.mouse), n.__isDown && n.click && n.click(this.mouse), n.interactiveChildren || (s = !0)) : n.__isDown && n.mouseupoutside && n.mouseupoutside(this.mouse), n.__isDown = !1
        }
    }, y.prototype.hitTest = function(t, e) {
        var i = e.global;
        if (!t.worldVisible) return !1;
        var s = t instanceof PIXI.Sprite,
            o = t.worldTransform,
            n = o[0],
            a = o[1],
            r = o[2],
            h = o[3],
            c = o[4],
            l = o[5],
            d = 1 / (n * c + a * -h),
            p = c * d * i.x + -a * d * i.y + (l * a - r * c) * d,
            u = n * d * i.y + -h * d * i.x + (-l * n + r * h) * d;
        if (t.hitArea && t.hitArea.contains) return !!t.hitArea.contains(p, u) && (e.target = t, !0);
        if (s) {
            var _, y = t.texture.frame.width,
                v = t.texture.frame.height,
                f = -y * t.anchor.x;
            if (p > f && p < f + y && u > (_ = -v * t.anchor.y) && u < _ + v) return e.target = t, !0
        }
        for (var g = t.children.length, m = 0; m < g; m++) {
            var w = t.children[m];
            if (this.hitTest(w, e)) return e.target = w, e.currentTarget = t, !0
        }
        return !1
    }, y.prototype.onTouchMove = function(e) {
        var i, s = this.interactionDOMElement.getBoundingClientRect(),
            o = e.changedTouches,
            n = 0;
        for (n = 0; n < o.length; n++) {
            var a = o[n];
            (i = this.touchs[a.identifier]).originalEvent = e || t.event, i.global.x = (a.clientX - s.left) * (this.target.width / s.width), i.global.y = (a.clientY - s.top) * (this.target.height / s.height), navigator.isCocoonJS && (i.global.x = a.clientX, i.global.y = a.clientY)
        }
        var r = this.interactiveItems.length;
        for (n = 0; n < r; n++) {
            var h = this.interactiveItems[n];
            h.touchmove && h.touchmove(i)
        }
    }, y.prototype.onTouchStart = function(e) {
        for (var i = this.interactionDOMElement.getBoundingClientRect(), s = e.changedTouches, o = 0; o < s.length; o++) {
            var n = s[o],
                a = this.pool.pop();
            a || (a = new PIXI.InteractionData), a.originalEvent = e || t.event, this.touchs[n.identifier] = a, a.global.x = (n.clientX - i.left) * (this.target.width / i.width), a.global.y = (n.clientY - i.top) * (this.target.height / i.height), navigator.isCocoonJS && (a.global.x = n.clientX, a.global.y = n.clientY);
            for (var r = this.interactiveItems.length, h = 0; h < r; h++) {
                var c = this.interactiveItems[h];
                if ((c.touchstart || c.tap) && (c.__hit = this.hitTest(c, a), c.__hit && (c.touchstart && c.touchstart(a), c.__isDown = !0, c.__touchData = a, !c.interactiveChildren))) break
            }
        }
    }, y.prototype.onTouchEnd = function(e) {
        for (var i = this.interactionDOMElement.getBoundingClientRect(), s = e.changedTouches, o = 0; o < s.length; o++) {
            var n = s[o],
                a = this.touchs[n.identifier],
                r = !1;
            a.global.x = (n.clientX - i.left) * (this.target.width / i.width), a.global.y = (n.clientY - i.top) * (this.target.height / i.height), navigator.isCocoonJS && (a.global.x = n.clientX, a.global.y = n.clientY);
            for (var h = this.interactiveItems.length, c = 0; c < h; c++) {
                var l = this.interactiveItems[c],
                    d = l.__touchData;
                l.__hit = this.hitTest(l, a), d === a && (a.originalEvent = e || t.event, (l.touchend || l.tap) && (l.__hit && !r ? (l.touchend && l.touchend(a), l.__isDown && l.tap && l.tap(a), l.interactiveChildren || (r = !0)) : l.__isDown && l.touchendoutside && l.touchendoutside(a), l.__isDown = !1), l.__touchData = null)
            }
            this.pool.push(a), this.touchs[n.identifier] = null
        }
    }, y.InteractionData = function() {
        this.global = new PIXI.Point, this.local = new PIXI.Point, this.currentTarget = null, this.target = null, this.originalEvent = null
    }, y.InteractionData.prototype.getLocalPosition = function(t) {
        var e = t.worldTransform,
            i = this.global,
            s = e[0],
            o = e[1],
            n = e[2],
            a = e[3],
            r = e[4],
            h = e[5],
            c = 1 / (s * r + o * -a);
        return new PIXI.Point(r * c * i.x + -o * c * i.y + (h * o - n * r) * c, s * c * i.y + -a * c * i.x + (-h * s + n * a) * c)
    }, y.InteractionData.prototype.constructor = y.InteractionData;
    var g = {};

    function m() {
        Qi.audioEnabled && (this._music = null, this.volumeDuration = 1, this.volume = .3)
    }

    function w(t) {
        if (void 0 != t)
            for (var e in t) this[e] = t[e]
    }

    function S() {
        this.localStorageEnable = !1;
        try {
            this.localStorageEnable = "localStorage" in t && null !== t.localStorage
        } catch (t) {}
    }
    g.distance1 = function(t, e, i, s) {
        var o = i - t,
            n = s - e;
        return Math.sqrt(o * o + n * n)
    }, g.distance2 = function(t, e) {
        var i = e.x - t.x,
            s = e.y - t.y;
        return Math.sqrt(i * i + s * s)
    }, g.angleRad1 = function(t, e, i, s) {
        return Math.atan2(s - e, i - t)
    }, g.angleDeg1 = function(t, e, i, s) {
        return Math.atan2(s - e, i - t) / Math.PI * 180
    }, g.angleRad2 = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x)
    }, g.angleDeg2 = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x) / Math.PI * 180
    }, g.vectorVelocityRad = function(t, e) {
        return {
            x: Math.cos(t) * e,
            y: Math.sin(t) * e
        }
    }, g.vectorVelocityDeg = function(t, e) {
        var i = t * Math.PI / 180;
        return {
            x: Math.cos(i) * e,
            y: Math.sin(i) * e
        }
    }, g.equal = function(t, e, i) {
        return i = i || 1e-5, Math.abs(t - e) <= i
    }, g.toDegrees = function(t) {
        return 180 * t / Math.PI
    }, g.toRadians = function(t) {
        return t * Math.PI / 180
    }, g.normAngleDeg = function(t, e) {
        return t = ((t %= 360) + 360) % 360, e && t > 180 && (t -= 360), t
    }, g.randomIntFromInterval = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }, g.randomFromInterval = function(t, e) {
        return Math.random() * (e - t + 1) + t
    }, g.pointLength = function(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }, g.pointNormalize = function(t, e) {
        var i = g.pointLength(t);
        return 0 == i ? t : (t.x /= i, t.y /= i, e && (t.x *= e, t.y *= e), t)
    }, g.intersection = function(t, e, i, s, o, n, a, r, h) {
        if (t === o && e === n) return null != h && (h.x = t, h.y = e), !0;
        if (t == a && e == r) return null != h && (h.x = t, h.y = e), !0;
        if (i == o && s == n) return null != h && (h.x = i, h.y = s), !0;
        if (i == a && s == r) return null != h && (h.x = i, h.y = s), !0;
        var c = i - t,
            l = s - e,
            d = a - o,
            p = -l,
            u = -(p * t + c * e),
            _ = -(r - n),
            y = -(_ * o + d * n),
            v = _ * t + d * e + y,
            g = _ * i + d * s + y;
        if (v * g >= 0 || (p * o + c * n + u) * (p * a + c * r + u) >= 0) return !1;
        var m = v / (v - g);
        c *= m, l *= m;
        return null != h && (h.x = f.x, h.y = f.y), !0
    }, g.intersection = function(t, e, i, s, o) {
        if (t.x == i.x && t.y == i.y) return null != o && o.set(t), !0;
        if (t.x == s.x && t.y == s.y) return null != o && o.set(t), !0;
        if (e.x == i.x && e.y == i.y) return null != o && o.set(e), !0;
        if (e.x == s.x && e.y == s.y) return null != o && o.set(e), !0;
        var n = e.sub(t),
            a = s.sub(i),
            r = -n.y,
            h = n.x,
            c = -(r * t.x + h * t.y),
            l = -a.y,
            d = a.x,
            p = -(l * i.x + d * i.y),
            u = l * t.x + d * t.y + p,
            _ = l * e.x + d * e.y + p,
            y = r * i.x + h * i.y + c,
            v = r * s.x + h * s.y + c;
        if (u * _ >= 0 || y * v >= 0) return !1;
        var f = u / (u - _);
        n.x *= f, n.y *= f;
        var g = t.add(n);
        return null != o && (o.x = g.x), null != o && (o.y = g.y), !0
    }, m.prototype.setMusicAndPlay = function(t) {
        if (!Qi.audioEnabled) return;
        if (null != this._music && this._music.name == t) return;
        const e = this._music;
        null != e && e.isPlaying && TweenLite.to(e, 2, {
            volume: 0,
            ease: Power2.easeIn,
            onComplete: function() {
                e.stop()
            }
        }), this._music = Qi.assets.getSound(t), this._music.name = t, this._music.loop = !0, this._music.volume = 0, Qi.musicOn && (this._music.play(), TweenLite.to(this._music, 2, {
            volume: this.volume,
            ease: Power2.easeIn
        }))
    }, m.prototype.play = function(t) {
        Qi.audioEnabled && null != this._music && (t = void 0 == t || t, this._music.play(), t ? (TweenLite.killTweensOf(this._music), TweenLite.to(this._music, this.volumeDuration, {
            volume: this.volume
        })) : this._music.volume = this.volume)
    }, m.prototype.stop = function(t) {
        Qi.audioEnabled && null != this._music && ((t = void 0 == t || t) ? (TweenLite.killTweensOf(this._music), TweenLite.to(this._music, this.volumeDuration, {
            volume: 0,
            onCompleteScope: this._music,
            onComplete: this._music.stop
        })) : this._music.stop())
    }, m.prototype.resume = function(t) {
        Qi.audioEnabled && null != this._music && (t = void 0 == t || t, this._music.resume(), t ? (TweenLite.killTweensOf(this._music), TweenLite.to(this._music, this.volumeDuration, {
            volume: this.volume
        })) : this._music.volume = this.volume)
    }, m.prototype.pause = function(t) {
        Qi.audioEnabled && null != this._music && ((t = void 0 == t || t) ? (TweenLite.killTweensOf(this._music), TweenLite.to(this._music, this.volumeDuration, {
            volume: 0,
            onCompleteScope: this._music,
            onComplete: this._music.pause
        })) : this._music.pause())
    }, Object.defineProperty(m.prototype, "isPlaying", {
        get: function() {
            return !!this._music && this._music.isPlaying
        }
    }), w.prototype.get = function() {
        if (0 != arguments.length) {
            for (var t = this[arguments[0]], e = 1; e < arguments.length; e++) {
                if (void 0 == t) return;
                t = t[arguments[e]]
            }
            return t
        }
    }, w.prototype.getOrCreateObject = function() {
        var t = Array.prototype.slice.call(arguments, w.prototype.getOrCreateObject.length),
            e = this.get.apply(this, t);
        return void 0 != e ? e : (t.unshift({}), this.set.apply(this, t))
    }, w.prototype.set = function(t) {
        var e = Array.prototype.slice.call(arguments, w.prototype.set.length);
        if (0 != e.length) {
            for (var i = e.length, s = this, o = 0; o < i - 1; o++) {
                var n = e[o];
                void 0 == s[n] && o < i - 1 && (s[n] = {}), s = s[n]
            }
            return s[e[e.length - 1]] = t, t
        }
    }, S.prototype.get = function(t) {
        try {
            if (Qi.encode) {
                var e = localStorage[t];
                return void 0 != e ? atob(e) : void 0
            }
            return localStorage[t]
        } catch (t) {
            return
        }
    }, S.prototype.getJson = function(t) {
        try {
            var e = this.get(t);
            return null != e ? JSON.parse(e) : null
        } catch (t) {
            return
        }
    }, S.prototype.set = function(t, e) {
        try {
            this.localStorageEnable && localStorage.setItem(t, Qi.encode ? btoa(e.toString()) : e.toString())
        } catch (t) {}
    }, S.prototype.setJson = function(t, e) {
        try {
            e = JSON.stringify(e), this.set(t, e)
        } catch (t) {}
    }, S.prototype.clear = function() {
        localStorage.clear()
    };
    var b = {};

    function C(t) {
        void 0 === t && (t = []), this.c = 1, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.sow(t)
    }

    function O(t) {
        if (o.call(this, o.ClickArea), this.showClickCanvas = t, this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, t) {
            var e = new PIXI.Graphics;
            e.beginFill(0, .4), e.drawRect(-2e3, -2e3, 4e3, 4e3), this.addChild(e)
        }
        this.clickCallbackScope = this, this.clickCallback = function() {
            trace("click area")
        }
    }

    function k(t, e, i) {
        i = i || 6, o.call(this, t, e, "atlasDoors", !0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap;
        var s = b.generateFrameNames(e, 1, i, "", 1),
            n = Qi.assets.getTextures(s, "atlasDoors");
        this._defaultAnimSpeed = .4, this._doorAnim = new PIXI.extras.AnimatedSprite(n), this._doorAnim.anchor.set(.5, .5), this._doorAnim.animationSpeed = this._defaultAnimSpeed, this._doorAnim.loop = !1, this._doorAnim.visible = !1, this.addChildAt(this._doorAnim, 0), this.opened = void 0, this.invItemNameToOpen = null, this.portalClickCallbackScope = this, this.portalClickCallback = function() {
            trace("portal")
        }, this.setSound("sndDoorOpen")
    }

    function T() {
        o.call(this, o.DoorHandle, "door_handle", "atlasItems", !0), this.sprMain.anchor.set(.1, .5), this.sndDoorHandleLock = Qi.assets.getSound("sndDoorHandleLock"), this.sndDoorHandleOpen = Qi.assets.getSound("sndDoorHandleOpen")
    }

    function I() {
        o.call(this, o.DoorPortal);
        var t = b.generateFrameNames("portal_", 10, 20, "", 2),
            e = Qi.assets.getTextures(t, "atlasPortal");
        this.anim = new PIXI.extras.AnimatedSprite(e), this.anim.anchor.set(.5, .5), this.anim.animationSpeed = .5, this.anim.loop = !0, this.addChildAt(this.anim, 0), this.sndTeleport = Qi.assets.getSound("sndTeleport")
    }

    function L(t) {
        o.call(this, o.BarricadeMn, t, "atlasItems", this)
    }

    function E(t, e) {
        var i = Qi.playState.signs.isSignOn(t);
        this.index = t, this._texName = "sign" + t + "_" + e.toLowerCase(), this._texNameOn = "sign" + t + "_" + e.toLowerCase() + "_on", o.call(this, o.Sign, i ? this._texNameOn : this._texName, "atlasItems", !0), this.interactive = !i, this.buttonMode = !i, this.click = this.tap = i ? null : this._clickTap, this.sndCollectSign = Qi.assets.getSound("sndCollectSign")
    }

    function A() {
        a.call(this, a.Binoculars, "binoculars", "binoculars_inv"), this.sprScr.scale.set(.7, .7), this.sprInv.scale.set(.7, .7), this.scaleSprScrHitArea(1.2, 1.2), this.showSprScrHitArea()
    }

    function x() {
        a.call(this, a.BunkerKey, "bunker_key", "bunker_key_inv"), this.sprScr.scale.set(.7, .7), this.sprInv.scale.set(.7, .7), this.scaleSprScrHitArea(1.6, 1.3), this.showSprScrHitArea()
    }

    function M() {
        a.call(this, a.Cube, "cube", "cube_inv"), this.sprScr.scale.set(.7, .7), this.sprInv.scale.set(.7, .7)
    }

    function N() {
        a.call(this, a.DoorHandleItem, "door_handle_2", "door_handle_2_inv"), this.sprScr.scale.set(.7, .7), this.sprInv.scale.set(.5, .5)
    }

    function P() {
        a.call(this, a.DoorKey, "door_key", "door_key_inv"), this.sprInv.scale.set(.7, .7)
    }

    function D() {
        a.call(this, a.Gear, "gear", "gear_inv"), this.sprScr.scale.set(.7, .7), this.sprInv.scale.set(.7, .7)
    }

    function B() {
        a.call(this, a.Hammer, "hammer", "hammer_inv")
    }

    function H() {
        a.call(this, a.Knob, "knob", "knob_inv"), this.sprScr.scale.set(.8, .8), this.sprInv.scale.set(.7, .7), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.4, 1.2), this.showSprScrHitArea()
    }

    function R(t) {
        t = void 0 == t ? "bulb" : t, a.call(this, a.LightBulb, t, "bulb_inv"), this.sprInv.scale.set(.5, .5), this.scaleSprScrHitArea(2, 1.5), this.single = !1
    }

    function V() {
        a.call(this, a.Lighter, "lighter", "lighter_inv"), this.sprScr.scale.set(.8, .8), this.sprInv.scale.set(.7, .7), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.8, 1.8), this.showSprScrHitArea()
    }

    function U(t) {
        a.call(this, a.Notes, "notes", "notes_inv"), this.messageId = "message." + t, this.sprScr.scale.set(.4, .4), this.sprInv.scale.set(.3, .3)
    }

    function F() {
        a.call(this, a.Oiler, "oiler", "oiler_inv"), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.4, 1.2), this.showSprScrHitArea()
    }

    function X() {
        a.call(this, a.OilerFilled, null, "oiler_inv"), this._sprDrop = Qi.assets.getSprite("oil_drop", "atlasItems", !0), this._sprDrop.x = -23, this._sprDrop.y = 25, this.sprInv.addChild(this._sprDrop), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.4, 1.2), this.showSprScrHitArea(), this.sndOilDropMn01 = Qi.assets.getSound("sndOilDropMn01")
    }

    function G() {
        a.call(this, a.Pickaxe, "pick", "pick_inv"), this.removeable = !1, this.sprScr.scale.set(.8, .8), this.sprInv.scale.set(.7, .7), this.showSprScrHitArea()
    }

    function j() {
        a.call(this, a.Screwdriver, "screwdriver", "screwdriver_inv"), this.sprScr.scale.set(.6, .6), this.sprInv.scale.set(.6, .6), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.2, 1.3), this.showSprScrHitArea()
    }

    function W() {
        a.call(this, a.Stick, "stick", "stick_inv"), this.sprScr.scale.set(.9, .75), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(4, 1), this.showSprScrHitArea()
    }

    function K() {
        a.call(this, a.Stone, "stone", "stone_inv"), this.sprScr.scale.set(.8, .8), this.sprInv.scale.set(.7, .7), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.2, 1.2), this.showSprScrHitArea()
    }

    function z() {
        a.call(this, a.Wheel, "wheel", "wheel_inv"), Qi.device.desktop && Qi.runRelease || this.scaleSprScrHitArea(1.4, 1.2), this.showSprScrHitArea()
    }

    function Y() {
        n.call(this, Y._name);
        const t = new ye(this, Y._01),
            e = new ve(this, Y._02),
            i = new ve(this, Y._03),
            s = new fe(this, Y._04),
            o = new ge(this, Y._05),
            a = new me(this, Y._06),
            r = new we(this, Y._07),
            h = new Se(this, Y._08),
            c = new be(this, Y._09);
        t.right = e, t.up = new rt(q._name, q._03), e.left = t, e.right = i, i.left = e, i.right = s, s.left = i, s.right = o, o.left = s, o.right = a, a.left = o, a.right = r, r.left = a, r.right = h, h.left = r, h.right = c, c.left = h, c.down = new rt(it._name, it._01), this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.addLocation(c), this.startLocation = t, this.musicName = "sndNightmareMusic"
    }

    function Z() {
        n.call(this, Z._name);
        const t = new Ce(this, 1),
            e = new Ce(this, 2),
            i = new Ce(this, 3),
            s = new Ce(this, 4),
            o = new Ce(this, 5),
            a = new Ce(this, 6),
            r = new Ce(this, 7),
            h = new Ce(this, 8);
        t.right = e, t.down = i, t.fadeA = o, e.left = t, e.down = s, e.fadeA = a, i.fadeDown = new rt($._name, $._02), i.right = s, i.up = t, i.fadeA = r, s.up = e, s.left = i, s.fadeA = h, o.right = a, o.down = r, o.fadeDown = t, a.left = o, a.down = h, a.fadeDown = e, r.right = h, r.up = o, r.fadeDown = i, h.left = r, h.up = a, h.fadeDown = s, t.createDoors(), e.createDoors(), i.createDoors(), s.createDoors(), o.createDoors(), a.createDoors(), r.createDoors(), h.createDoors(), this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.startLocation = t, this.musicName = "sndOtherworldMusic"
    }

    function J() {
        n.call(this, J._name);
        const t = new Oe(this, J._01),
            e = new ke(this, J._02),
            i = new Te(this, J._03),
            s = new Ie(this, J._04),
            o = new Le(this, J._05),
            a = new ke(this, J._06),
            r = new Te(this, J._07),
            h = new Ie(this, J._08),
            c = new Ee(this, J._09),
            l = new Ae(this, J._10),
            d = new xe(this, J._11),
            p = new Me(this, J._12);
        t.up = e, t.left = new rt(Q._name, Q._16), e.up = i, e.down = t, i.up = s, i.down = e, s.up = o, s.down = i, o.up = a, o.down = s, a.up = r, a.down = o, r.up = h, r.down = a, h.up = c, h.down = r, c.up = l, c.down = h, l.up = d, l.down = c, l.left = p, d.up = null, d.down = l, p.right = l, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.addLocation(c), this.addLocation(l), this.addLocation(d), this.addLocation(p), this.startLocation = t, this.musicName = "sndMystMusic"
    }

    function q() {
        n.call(this, q._name);
        const t = new Ne(this, q._01),
            e = new Pe(this, q._01a),
            i = new De(this, q._02),
            s = new Be(this, q._02a),
            o = new He(this, q._03),
            a = new Re(this, q._04),
            r = new Ve(this, q._05),
            h = new Ue(this, q._06),
            c = new Fe(this, q._07),
            l = new Xe(this, q._08),
            d = new Ge(this, q._09),
            p = new je(this, q._09a);
        t.right = i, t.up = h, t.fadeA = e, t.fadeB = new rt(tt._name, tt._06), e.fadeDown = t, i.left = t, i.right = o, i.fadeA = s, s.fadeDown = i, o.left = i, o.right = a, o.down = new rt(Y._name, Y._01), a.left = o, a.right = r, r.left = a, r.right = new rt(et._name, et._01), h.down = t, h.up = c, c.down = h, c.up = l, l.down = c, l.up = d, d.fadeB = new rt(st._name, st._05), d.down = l, d.fadeA = p, p.fadeDown = d, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.addLocation(c), this.addLocation(l), this.addLocation(d), this.addLocation(p), this.startLocation = t, this.musicName = "sndSacramentMusic"
    }

    function $() {
        n.call(this, $._name);
        const t = new We(this, $._01),
            e = new Ke(this, $._02),
            i = new ze(this, $._02a);
        t.left = new rt(et._name, et._23), t.right = e, e.left = t, e.fadeA = new rt(Z._name, "Cb_03"), e.fadeB = i, i.fadeDown = e, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.startLocation = t, this.musicName = "sndOtherworldMusic"
    }

    function Q() {
        n.call(this, Q._name);
        const t = new Ye(this, Q._00),
            e = new Ze(this, Q._01),
            i = new Je(this, Q._02),
            s = new qe(this, Q._03),
            o = new $e(this, Q._04),
            a = new Qe(this, Q._05),
            r = new ti(this, Q._06),
            h = new ei(this, Q._07),
            c = new ii(this, .1, Q._08),
            l = new ii(this, .25, Q._09),
            d = new ii(this, .5, Q._10),
            p = new ii(this, .7, Q._11),
            u = new ii(this, .7, Q._12),
            _ = new ii(this, .5, Q._13),
            y = new ii(this, .25, Q._14),
            v = new ii(this, .1, Q._15),
            f = new si(this, Q._16);
        t.fadeA = h, t.fadeB = f, e.left = null, e.right = i, i.left = e, i.right = s, s.left = i, s.right = o, s.up = new rt(it._name, it._15), o.left = s, o.right = a, a.left = o, a.right = r, r.left = a, r.right = h, h.left = r, h.right = c, h.fadeA = t, c.left = h, c.right = l, l.left = c, l.right = d, d.left = l, d.right = p, p.left = d, p.right = null, u.left = null, u.right = _, _.left = u, _.right = y, y.left = _, y.right = v, v.left = y, v.right = f, f.left = v, f.right = new rt(J._name, J._01), f.fadeA = t, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.addLocation(c), this.addLocation(l), this.addLocation(d), this.addLocation(p), this.addLocation(u), this.addLocation(_), this.addLocation(y), this.addLocation(v), this.addLocation(f), this.startLocation = e, this.musicName = "sndNightmareMusic"
    }

    function tt() {
        n.call(this, tt._name);
        const t = new oi(this, tt._01),
            e = new ni(this, tt._02),
            i = new ai(this, tt._03),
            s = new ri(this, tt._04),
            o = new hi(this, tt._05),
            a = new ci(this, tt._06),
            r = new li(this, tt._07),
            h = new di(this, tt._08);
        t.right = e, e.up = s, e.left = t, e.right = i, i.left = e, s.up = o, s.down = e, o.up = r, o.down = s, a.right = r, a.fadeA = new rt(q._name, q._01), r.down = o, r.left = a, r.right = h, h.left = r, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.startLocation = e, this.musicName = "sndTibetMusic"
    }

    function et() {
        n.call(this, et._name);
        const t = new pi(this, et._01),
            e = new ui(this, et._02),
            i = new _i(this, et._03),
            s = new yi(this, et._04),
            o = new vi(this, et._05),
            a = new fi(this, et._06),
            r = new gi(this, et._06a),
            h = new mi(this, et._07),
            c = new wi(this, et._08),
            l = new Si(this, et._09),
            d = new bi(this, et._10),
            p = new Ci(this, et._11),
            u = new Oi(this, et._12),
            _ = new ki(this, et._13),
            y = new ki(this, et._14),
            v = new Ti(this, et._15),
            f = new ki(this, et._16),
            g = new Ii(this, et._17),
            m = new Li(this, et._18),
            w = new Ei(this, et._19),
            S = new Ai(this, et._20),
            b = new xi(this, et._20a),
            C = new Mi(this, et._21),
            O = new Mi(this, et._22),
            k = new Ni(this, et._23);
        t.up = null, t.down = null, t.left = new rt(q._name, q._05), t.right = e, e.up = null, e.down = null, e.left = t, e.right = i, i.up = null, i.down = null, i.left = e, i.right = s, s.up = _, s.down = null, s.left = i, s.right = o, o.up = null, o.down = null, o.left = s, o.right = a, a.up = null, a.down = null, a.left = o, a.right = h, a.fadeA = r, r.fadeDown = a, h.up = null, h.down = c, h.left = a, h.right = null, c.up = h, c.down = l, c.left = null, c.right = null, l.up = c, l.down = d, l.left = null, l.right = null, d.up = l, d.down = null, d.left = new rt(it._name, it._02), d.right = p, p.up = null, p.down = u, p.left = d, p.right = null, u.up = p, u.down = null, u.left = new rt(it._name, it._08), u.right = null, _.up = y, _.down = s, _.left = null, _.right = null, y.up = v, y.down = _, y.left = null, y.right = null, v.up = f, v.down = y, v.left = C, v.right = O, f.up = m, f.down = v, f.left = null, f.right = null, g.up = null, g.down = null, g.left = null, g.right = m, m.up = null, m.down = f, m.left = g, m.right = w, w.up = null, w.down = null, w.left = m, w.right = null, S.up = null, S.down = null, S.left = null, S.right = C, S.fadeA = b, b.up = null, b.fadeDown = S, b.left = null, b.right = null, C.up = null, C.down = null, C.left = S, C.right = v, O.up = null, O.down = null, O.left = v, O.right = k, k.up = null, k.down = null, k.left = O, k.right = new rt($._name, $._01), this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(r), this.addLocation(a), this.addLocation(h), this.addLocation(c), this.addLocation(l), this.addLocation(d), this.addLocation(p), this.addLocation(u), this.addLocation(_), this.addLocation(y), this.addLocation(v), this.addLocation(f), this.addLocation(g), this.addLocation(m), this.addLocation(w), this.addLocation(S), this.addLocation(b), this.addLocation(C), this.addLocation(O), this.addLocation(k), this.startLocation = t, this.musicName = "sndSacramentMusic"
    }

    function it() {
        n.call(this, it._name);
        const t = new Pi(this, it._01),
            e = new Di(this, it._01a),
            i = new Bi(this, it._02),
            s = new Hi(this, it._03),
            o = new Ri(this, it._04),
            a = new Vi(this, it._05),
            r = new Ui(this, it._06),
            h = new Fi(this, it._07),
            c = new Xi(this, it._08),
            l = new Ri(this, it._09),
            d = new Gi(this, it._10),
            p = new ji(this, it._11),
            u = new Wi(this, it._11a),
            _ = new Ri(this, it._12),
            y = new Ki(this, it._13),
            v = new zi(this, it._14),
            f = new Yi(this, it._15);
        t.up = new rt(Y._name, Y._09), t.down = i, t.left = e, t.right = null, e.up = null, e.down = null, e.left = null, e.right = t, i.up = t, i.down = s, i.left = l, i.right = new rt(et._name, et._10), s.up = i, s.down = null, s.left = o, s.right = c, o.up = null, o.down = null, o.left = a, o.right = s, a.up = null, a.down = r, a.left = h, a.right = o, r.up = a, r.down = null, r.left = null, r.right = null, h.up = null, h.down = null, h.left = null, h.right = a, c.up = null, c.down = null, c.left = s, c.right = new rt(et._name, et._12), l.up = null, l.down = null, l.left = d, l.right = i, d.up = p, d.down = null, d.left = _, d.right = l, p.up = null, p.down = d, p.left = null, p.right = null, p.fadeA = u, u.up = null, u.fadeDown = p, u.left = null, u.right = null, _.up = null, _.down = null, _.left = y, _.right = d, y.up = null, y.down = v, y.left = null, y.right = _, v.up = y, v.down = f, v.left = null, v.right = null, f.up = v, f.down = new rt(Q._name, Q._03), f.left = null, f.right = null, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.addLocation(r), this.addLocation(h), this.addLocation(c), this.addLocation(l), this.addLocation(d), this.addLocation(p), this.addLocation(u), this.addLocation(_), this.addLocation(y), this.addLocation(v), this.addLocation(f), this.startLocation = t, this.musicName = "sndNightmareMusic"
    }

    function st() {
        n.call(this, st._name);
        const t = new Zi(this, 4, st._01),
            e = new Ji(this, st._02, 4, 3),
            i = new Ji(this, st._03, 3, 2),
            s = new Ji(this, st._04, 2, 1),
            o = new qi(this, 1, st._05),
            a = new $i(this, st._06);
        t.left = null, t.right = e, e.left = t, e.right = i, i.left = e, i.right = s, s.left = i, s.right = o, o.left = s, o.right = a, o.fadeA = new rt(q._name, q._09), a.left = o, a.right = null, this.addLocation(t), this.addLocation(e), this.addLocation(i), this.addLocation(s), this.addLocation(o), this.addLocation(a), this.startLocation = t, this.musicName = "sndSecret2Music"
    }

    function ot(t) {
        this._data = t
    }

    function nt() {
        PIXI.Container.call(this);
        var t = new PIXI.Graphics;
        Qi.showClickZones ? t.beginFill(65280, .3) : t.beginFill(0, 0), t.drawRect(0, 0, 2, 2), t.endFill();
        var i = Qi.pixi.renderer.generateTexture(t);
        if (this._btnLeft = new e(i, this._onBtnsClick, this), this._btnLeft.name = "Left", this._btnLeft.anchor.set(0, 0), this.addChild(this._btnLeft), this._btnRight = new e(i, this._onBtnsClick, this), this._btnRight.name = "Right", this._btnRight.anchor.set(0, 0), this.addChild(this._btnRight), this._btnUp = new e(i, this._onBtnsClick, this), this._btnUp.name = "Up", this._btnUp.anchor.set(0, 0), this.addChild(this._btnUp), this._btnDown = new e(i, this._onBtnsClick, this), this._btnDown.name = "Down", this._btnDown.anchor.set(0, 0), this.addChild(this._btnDown), this.go = this.go.bind(this), Qi.device.desktop) {
            var s = function(t) {
                Qi.playState.emit(dt.EVENT_ZONE_CLICK, t, !0)
            };
            key("w", function() {
                s("up")
            }), key("up", function() {
                s("up")
            }), key("s", function() {
                s("down")
            }), key("down", function() {
                s("down")
            }), key("d", function() {
                s("right")
            }), key("right", function() {
                s("right")
            }), key("a", function() {
                s("left")
            }), key("left", function() {
                s("left")
            })
        }
        Qi.playState.on(dt.EVENT_LOCATION_CHANGED, this._onLocationChanged, this), Qi.playState.on(dt.EVENT_INVENTORY_OPEN, this.updateSizes, this), Qi.playState.on(dt.EVENT_INVENTORY_CLOSE, this.updateSizes, this)
    }

    function at() {
        PIXI.Container.call(this), this.overlay = new PIXI.Graphics, this.overlay.beginFill(0), this.overlay.drawRect(0, 0, Qi.gameWidth0, Qi.gameHeight0), this.overlay.visible = !1, this.addChild(this.overlay)
    }

    function rt(t, e) {
        this.levelName = t, this.locationName = e
    }

    function ht() {
        PIXI.Container.call(this), Qi.pixi.stage.addChild(this);
        var t = new PIXI.Graphics;
        t.beginFill(0), t.drawRect(0, 0, Qi.gameWidth0, Qi.gameHeight0), t.endFill(), this.addChild(t), this.running = !1
    }

    function ct() {
        if (Qi.introState) throw new Error("MenuState singelton!");
        Qi.introState = this, PIXI.Container.call(this), Qi.pixi.stage.addChildAt(this, 0), this._currCount = 1, this._maxCount = 4;
        const t = 2 * Qi.gameWidth0 * .7;
        var i = new PIXI.Graphics;
        i.beginFill(1184274), i.drawRect(0, 0, Qi.gameWidth0, Qi.gameHeight0), this.addChild(i), this._btnNext = e.generateButton("btnNext", "atlasUI", this._onBtnsClick, this), this._btnNext.name = "Next", this._btnNext.anchor.set(1, 1), this._btnNext.scale.set(.4, .4), this._btnNext.x = .5 * Qi.gameWidth0 + .25 * t - 5, this._btnNext.y = Qi.gameHeight0 - 30, this.addChild(this._btnNext), this._btnPrev = e.generateButton("btnPrev", "atlasUI", this._onBtnsClick, this), this._btnPrev.name = "Prev", this._btnPrev.anchor.set(0, 1), this._btnPrev.scale.set(.4, .4), this._btnPrev.x = .5 * Qi.gameWidth0 - .25 * t + 5, this._btnPrev.y = this._btnNext.y, this.addChild(this._btnPrev), this._btnStop = e.generateButton("btnStop", "atlasUI", this._onBtnsClick, this), this._btnStop.name = "Stop", this._btnStop.width = this._btnStop.height = this._btnNext.height - 2, this._btnStop.anchor.set(1, .5), this._btnStop.x = this._btnNext.x - this._btnNext.width - this._btnStop.width - 20, this._btnStop.y = this._btnNext.y - .5 * this._btnNext.height, this.addChild(this._btnStop), this._style = new PIXI.TextStyle({
            fontFamily: "RoughDraft",
            fontSize: 42,
            wordWrap: !0,
            wordWrapWidth: t,
            fill: "#FFFFFF",
            align: "justify",
            lineHeight: 42,
            padding: 100
        }), this._currText = this.createText(this._currCount), this._btnPrev.visible = this._currCount > 1, Qi.music.setMusicAndPlay("sndMenuMusic"), this.sndButton = Qi.assets.getSound("sndButton")
    }

    function lt() {
        if (Qi.menuState) throw new Error("MenuState singelton!");
        Qi.menuState = this, PIXI.Container.call(this), Qi.pixi.stage.addChildAt(this, 0);
        const t = Qi.assets.getSprite("menu_bg", "atlasUI");
        this.addChild(t);
        const i = Qi.assets.getSprite("game_name", "atlasUI");
        i.anchor.set(.5, .5), i.x = .5 * Qi.gameWidth0, i.y = 100, this.addChild(i), this._main = new PIXI.Container, this.addChild(this._main);
        let s = e.generateButton("btnPlay", "atlasUI", this._onBtnsClick, this);
        if (s.name = "Play", s.anchor.set(.5, .5), s.x = i.x, s.y = i.y + .5 * i.height + .5 * s.height + 50, this._main.addChild(s), !Qi.device.desktop && screenfull.enabled) {
            let t = e.generateButton("btnFullscreen", "atlasUI", this._onBtnsClick, this);
            t.name = "Fullscreen", t.scale.set(.5, .5), t.anchor.set(1, 0), t.x = Qi.gameWidth0 - 5, t.y = 5, this.addChild(t)
        }
        let o = new PIXI.TextStyle({
                fontFamily: "RoughDraft",
                fontSize: 60,
                fill: "#FFFFFF",
                padding: 100
            }),
            n = b.generateTextureFromText("CREDITS", o, "btnCredits"),
            a = new e(n, this._onBtnsClick, this);
        a.name = "Credits", a.anchor.set(.5, .5), a.scale.set(.5, .5), a.x = s.x, a.y = s.y + .5 * s.height + .5 * a.height + 20, this._main.addChild(a);
        let r = new e(n = b.generateTextureFromText("DELETE SAVES", o, "btnDeleteSaves"), this._onBtnsClick, this);
        r.name = "Delete", r.anchor.set(.5, .5), r.scale.set(.5, .5), r.x = s.x, r.y = a.y + .5 * a.height + .5 * r.height + 20;
        let h = new PIXI.TextStyle({
            fontFamily: "RoughDraft",
            fontSize: 30,
            fill: "#FFFFFF",
            padding: 100
        });
        this._text = new PIXI.Text(Qi.version, h), this._text.scale.set(.5, .5), this._text.x = 5, this._text.y = Qi.gameHeight0 - this._text.height - 5, this.addChild(this._text), Qi.audioEnabled && (this._btnMusicSoundOn = e.generateButton("btnSoundOn", "atlasUI", this._onBtnsClick, this), this._btnMusicSoundOn.name = "MusicSoundOn", this._btnMusicSoundOn.anchor.set(1, 1), this._btnMusicSoundOn.x = Qi.gameWidth0 - 5, this._btnMusicSoundOn.y = Qi.gameHeight0 - 5, this._btnMusicSoundOn.visible = Qi.musicOn, this.addChild(this._btnMusicSoundOn), this._btnMusicSoundOff = e.generateButton("btnSoundOff", "atlasUI", this._onBtnsClick, this), this._btnMusicSoundOff.name = "MusicSoundOff", this._btnMusicSoundOff.anchor.set(1, 1), this._btnMusicSoundOff.x = this._btnMusicSoundOn.x, this._btnMusicSoundOff.y = this._btnMusicSoundOn.y, this._btnMusicSoundOff.visible = !Qi.musicOn, this.addChild(this._btnMusicSoundOff)), Qi.music.setMusicAndPlay("sndMenuMusic"), this.sndButton = Qi.assets.getSound("sndButton")
    }

    function dt() {
        if (Qi.playState) throw new Error("PlayState singelton!");
        Qi.playState = this, PIXI.Container.call(this), Qi.pixi.stage.addChildAt(this, 0), this.clickZone = new nt, TweenLite.delayedCall(.1, this.clickZone.updateSizes, null, this.clickZone), this.addChild(this.clickZone), this.signs = new r, this.signs.x = Qi.gameWidth0 - (Qi.audioEnabled ? 70 : 20), this.signs.y = 30, this.addChild(this.signs), this.inventory = new ut, this.inventory.open(), this.addChild(this.inventory), this.levelMng = new at, this.levelMng.init(), this.addChildAt(this.levelMng, 0), this.clickZone.updateSizes();
        var t = e.generateButton("btnPause", "atlasUI", this._onBtnsClick, this);
        t.name = "Pause", t.anchor.set(.5, .5), t.x = .5 * t.width + 5, t.y = .5 * t.height + 5, this.addChild(t), Qi.audioEnabled && (Qi.musicAndSoundTogether ? (this._btnMusicSoundOn = e.generateButton("btnSoundOn", "atlasUI", this._onBtnsClick, this), this._btnMusicSoundOn.name = "MusicSoundOn", this._btnMusicSoundOn.anchor.set(1, 0), this._btnMusicSoundOn.x = Qi.gameWidth0 - 5, this._btnMusicSoundOn.y = 1.5, this._btnMusicSoundOn.visible = Qi.musicOn, this.addChild(this._btnMusicSoundOn), this._btnMusicSoundOff = e.generateButton("btnSoundOff", "atlasUI", this._onBtnsClick, this), this._btnMusicSoundOff.name = "MusicSoundOff", this._btnMusicSoundOff.anchor.set(1, 0), this._btnMusicSoundOff.x = this._btnMusicSoundOn.x, this._btnMusicSoundOff.y = this._btnMusicSoundOn.y, this._btnMusicSoundOff.visible = !Qi.musicOn, this.addChild(this._btnMusicSoundOff)) : (this._btnMusicOn = e.generateButton("btnSoundOn", "atlasUI", this._onBtnsClick, this), this._btnMusicOn.name = "MusicOn", this._btnMusicOn.anchor.set(.5, .5), this._btnMusicOn.x = t.x, this._btnMusicOn.y = t.y + .5 * t.height + .5 * this._btnMusicOn.height + 5, this._btnMusicOn.visible = Qi.musicOn, this.addChild(this._btnMusicOn), this._btnMusicOff = e.generateButton("btnSoundOff", "atlasUI", this._onBtnsClick, this), this._btnMusicOff.name = "MusicOff", this._btnMusicOff.anchor.set(.5, .5), this._btnMusicOff.x = this._btnMusicOn.x, this._btnMusicOff.y = this._btnMusicOn.y, this._btnMusicOff.visible = !Qi.musicOn, this.addChild(this._btnMusicOff), this._btnSoundOn = e.generateButton("btnSoundOn", "atlasUI", this._onBtnsClick, this), this._btnSoundOn.name = "SoundOn", this._btnSoundOn.anchor.set(1, 0), this._btnSoundOn.x = Qi.gameWidth0 - 5, this._btnSoundOn.y = 5, this._btnSoundOn.visible = Qi.soundOn, this.addChild(this._btnSoundOn), this._btnSoundOff = e.generateButton("btnSoundOff", "atlasUI", this._onBtnsClick, this), this._btnSoundOff.name = "SoundOff", this._btnSoundOff.anchor.set(1, 0), this._btnSoundOff.x = this._btnSoundOn.x, this._btnSoundOff.y = this._btnSoundOn.y, this._btnSoundOff.visible = !Qi.soundOn, this.addChild(this._btnSoundOff))), this.sndButton = Qi.assets.getSound("sndButton")
    }

    function pt(t) {
        PIXI.Container.call(this);
        const i = 2 * Qi.gameWidth0 * .7;
        this.interactive = !0, this._diaryNum = t;
        const s = new PIXI.Graphics;
        s.beginFill(0, .8), s.drawRect(.5 * -Qi.gameWidth0, .5 * -Qi.gameHeight0, Qi.gameWidth0, Qi.gameHeight0), s.endFill(), this.addChild(s);
        const o = e.generateButton("btnClose", "atlasUI", this._onBtnsClick, this);
        o.name = "Close", o.anchor.set(1, 0), o.scale.set(.7, .7), o.x = 320, o.y = -195, this.addChild(o), this._style = new PIXI.TextStyle({
            fontFamily: "RoughDraft",
            fontSize: 42,
            wordWrap: !0,
            wordWrapWidth: i,
            fill: "#FFFFFF",
            align: "justify",
            lineHeight: 42,
            padding: 100
        }), this.createText(this._currCount), this.sndInvOpenNote = Qi.assets.getSound("sndInvOpenNote"), this.sndInvCloseNote = Qi.assets.getSound("sndInvCloseNote"), Qi.soundOn && this.sndInvOpenNote.play()
    }

    function ut() {
        PIXI.Container.call(this), this.itemWidth = 60, this.paddingLeft = 10, this._saves = Qi.saveData.getOrCreateObject(ut.STORAGE_KEY), this._items = new u("Items"), this._noteIds = new u("Notes"), this.selected = null, this.bar = Qi.assets.getSprite("inventory_bg", "atlasUI"), this.bar.anchor.set(0, 1), this.bar.y = Qi.gameHeight0, this.addChild(this.bar), this._itemsContainer = this.bar, this.btnArrow = e.generateButton("inventory_arrow", "atlasUI", this._onBtnsClick, this), this.btnArrow.name = "Arrow", this.btnArrow.anchor.set(.5, .5), this.btnArrow.x = Qi.gameWidth0 - .5 * this.btnArrow.width - 5, this.btnArrow.y = -this.bar.height - .5 * this.btnArrow.height - 2, this.bar.addChild(this.btnArrow), this._noteIds.copyArray(this._saves.noteIds), this.notes = new U("start"), this.notes.setInvMode(), this.add(this.notes);
        var t = this._saves.itemNames;
        if (null != t) {
            this._saves.itemNames = [];
            for (var i = 0; i < t.length; i++) {
                var s = a.createItem(t[i]);
                s.setInvMode(), this.add(s)
            }
        } else this._saves.itemNames = [];
        if (!this._saves.isNotStart) {
            this._saves.isNotStart = !0;
            var o = new P;
            o.setInvMode(), this.add(o)
        }
        Qi.runRelease, this.sndInvAdd = Qi.assets.getSound("sndInvAdd"), this.sndInvSelect = Qi.assets.getSound("sndInvSelect"), this.sndInvDeselect = Qi.assets.getSound("sndInvDeselect"), this.sndInvCombine = Qi.assets.getSound("sndInvCombine"), this.sndInvOpenNote = Qi.assets.getSound("sndInvOpenNote"), this.sndInvOpen = Qi.assets.getSound("sndInvOpen"), this.sndInvClose = Qi.assets.getSound("sndInvClose")
    }

    function _t(t) {
        PIXI.Container.call(this);
        const i = 2 * Qi.gameWidth0 * .7;
        this.interactive = !0, this._messageIds = t, this._currCount = this._maxCount = this._messageIds.length;
        var s = new PIXI.Graphics;
        s.beginFill(0, .6), s.drawRect(.5 * -Qi.gameWidth0, .5 * -Qi.gameHeight0, Qi.gameWidth0, Qi.gameHeight0), s.endFill(), this.addChild(s);
        var o = new PIXI.Graphics;
        o.beginFill(0, .8), o.drawRect(-350, -225, 700, 450), o.endFill();
        var n = e.generateButton("btnClose", "atlasUI", this._onBtnsClick, this);
        n.name = "Close", n.anchor.set(1, 0), n.scale.set(.7, .7), n.x = 320, n.y = -195, this.addChild(n), this._btnNext = e.generateButton("btnNext", "atlasUI", this._onBtnsClick, this), this._btnNext.name = "Next", this._btnNext.anchor.set(1, 1), this._btnNext.scale.set(.4, .4), this._btnNext.x = .25 * i - 5, this._btnNext.y = 195, this.addChild(this._btnNext), this._btnPrev = e.generateButton("btnPrev", "atlasUI", this._onBtnsClick, this), this._btnPrev.name = "Prev", this._btnPrev.anchor.set(0, 1), this._btnPrev.scale.set(.4, .4), this._btnPrev.x = .25 * -i + 5, this._btnPrev.y = 195, this.addChild(this._btnPrev), this._style = new PIXI.TextStyle({
            fontFamily: "RoughDraft",
            fontSize: 42,
            wordWrap: !0,
            wordWrapWidth: i,
            fill: "#FFFFFF",
            align: "left",
            lineHeight: 42,
            padding: 1e3
        }), this._currText = this.createText(this._currCount), this._btnNext.visible = this._currCount < this._maxCount, this._btnPrev.visible = this._currCount > 1, this.sndInvPage = Qi.assets.getSound("sndInvPage"), this.sndInvCloseNote = Qi.assets.getSound("sndInvCloseNote")
    }

    function yt() {
        PIXI.Container.call(this);
        const t = 2 * Qi.gameWidth0 * .7;
        this.interactive = !0;
        var e = new PIXI.Graphics;
        e.beginFill(0, 1), e.drawRect(.5 * -Qi.gameWidth0, .5 * -Qi.gameHeight0, Qi.gameWidth0, Qi.gameHeight0), e.endFill(), this.addChild(e);
        var i = new PIXI.TextStyle({
                fontFamily: "RoughDraft",
                fontSize: 42,
                wordWrap: !0,
                wordWrapWidth: t,
                fill: "#FFFFFF",
                align: "justify",
                lineHeight: 42,
                padding: 100
            }),
            s = new PIXI.Text(Qi.loc.getText("outro"), i);
        s.anchor.set(.5, .5), s.scale.set(.5, .5), s.y = -80, this.addChild(s);
        new PIXI.TextStyle({
            fontFamily: "RoughDraft",
            fontSize: 42,
            fill: "#FFFFFF",
            align: "center",
            padding: 100
        });
        var o = new PIXI.Text("CLICK ON THE SCREEN TO END THE GAME", i);
        o.anchor.set(.5, .5), o.scale.set(.5, .5), o.y = s.y + .5 * s.height + .5 * o.height + 30, this.addChild(o), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = function() {
            Qi.playState.goToMenu()
        }, this.sndButton = Qi.assets.getSound("sndButton")
    }

    function vt() {
        o.call(this, o.ButtonBnk, "btn_bnk_off", "atlasItems", !0), this._pressed = Qi.assets.getSprite("btn_bnk_on", "atlasItems", !0), this._pressed.visible = !1, this.addChild(this._pressed), this.state = 0, this.sndButtonMn = Qi.assets.getSound("sndButtonMn"), this.sndButtonBnkOnOff = Qi.assets.getSound("sndButtonBnkOnOff")
    }

    function ft(t) {
        o.call(this, o.LightSignBnk, "bnk_light_" + t, "atlasItems"), this.sprMain.anchor.set(.5, 0);
        var e = Qi.assets.getSprite("bnk_sign_" + t, "atlasItems", !0);
        e.y = 490, this.addChild(e), this.hitArea = new PIXI.Rectangle
    }

    function gt() {
        o.call(this, o.ButtonCb, "button_cb_off", "atlasItems", !0), this._sprOn = Qi.assets.getSprite("button_cb_on", "atlasItems", !0), this._sprOn.visible = !1, this.addChild(this._sprOn), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaSize(50, 50), this.sndButtonCb = Qi.assets.getSound("sndButtonCb")
    }

    function mt(t) {
        var e = "door_cb_" + t;
        o.call(this, o.DoorCb, e, "atlasItems", !0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap;
        var i = new PIXI.Container;
        this.addChild(i);
        var s = new PIXI.Graphics;
        s.beginFill(0, .5), "left" == t ? (this._up = Qi.assets.getSprite(e + "_up", "atlasItems"), this._up.anchor.set(.5, 1), this._up.x = 5, i.addChild(this._up), this._down = Qi.assets.getSprite(e + "_down", "atlasItems"), this._down.anchor.set(.5, 0), this._down.x = 8, this._down.y = -5, i.addChild(this._down), s.drawPolygon(-24.11, -115.01, 35.64, -96.28, 36.53, 69.61, -22.33, 109.74)) : "right" == t ? (this._up = Qi.assets.getSprite(e + "_up", "atlasItems"), this._up.anchor.set(.5, 1), this._up.x = -7, i.addChild(this._up), this._down = Qi.assets.getSprite(e + "_down", "atlasItems"), this._down.anchor.set(.5, 0), this._down.x = -8, this._down.y = -5, i.addChild(this._down), s.drawPolygon(-33.86, -98.85, 23.22, -114.9, 21.44, 109.85, -36.53, 67.93)) : "front" == t ? (this._up = Qi.assets.getSprite(e + "_up", "atlasItems"), this._up.scale.set(1, 1.05), this._up.anchor.set(.5, .95), i.addChild(this._up), this._down = Qi.assets.getSprite(e + "_down", "atlasItems"), this._down.scale.set(1, 1.05), this._down.anchor.set(.5, .05), this._down.y = 4, i.addChild(this._down), s.drawPolygon(-70.01, -73.71, 71.79, -72.82, 73.58, 74.34, -71.79, 76.12)) : "up" == t ? (this._left = Qi.assets.getSprite(e + "_left", "atlasItems"), this._left.anchor.set(1, .5), this._left.y = 8, i.addChild(this._left), this._right = Qi.assets.getSprite(e + "_right", "atlasItems"), this._right.anchor.set(0, .5), this._right.y = 8, i.addChild(this._right), s.drawPolygon(-108.36, -13, 106.58, -13.9, 80.71, 30.7, -82.5, 31.59)) : "down" == t && (this._left = Qi.assets.getSprite(e + "_left", "atlasItems"), this._left.anchor.set(1, .5), this._left.y = -6, i.addChild(this._left), this._right = Qi.assets.getSprite(e + "_right", "atlasItems"), this._right.anchor.set(0, .5), this._right.x = 2, this._right.y = -7, i.addChild(this._right), s.drawPolygon(-83.71, -43.26, 83.06, -44.15, 112.5, 28.09, -111.36, 28.98)), i.mask = s, i.addChild(s), this.clickCallbackScope = this, this.clickCallback = function() {
            trace("go")
        }, this._opened = !1, this.sndDoorCbOpen = Qi.assets.getSound("sndDoorCbOpen")
    }

    function wt() {
        o.call(this, o.CubeLw, "cube_lw_normal", "atlasItems", !0), this._liquid = Qi.assets.getSprite("cube_lw_liquid", "atlasItems", !0), this._liquid.y = 90, this.addChild(this._liquid), this.interactive = !0, this.click = this.tap = this._clickTap, this.setHitAreaPolygon(-82.55, 95.12, -59.36, 51.42, 22.69, 47.85, 69.96, 72.82, 94.93, 128.12, -29.93, 130.79), this.showHitArea(), this.state = -1, this.sndInvUse = Qi.assets.getSound("sndInvUse")
    }

    function St() {
        k.call(this, o.DoorLw, "door_lw", 16), this.scale.set(1.15), this.setSound("sndDoorLwOpen"), this.onFrameChange = this.onFrameChange.bind(this), this._doorAnim.onFrameChange = this.onFrameChange, this._valve = Qi.assets.getSprite("door_lw_valve", "atlasDoors", !0), this._valve.x = 13, this._valve.y = -7, this.addChild(this._valve)
    }

    function bt() {
        o.call(this, o.LeverLw), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap;
        var t = b.generateFrameNames("lotos_lever", 1, 10, "", 4),
            e = Qi.assets.getTextures(t, "atlasItems");
        this._defaultAnimSpeed = .5, this._leverAnim = new PIXI.extras.AnimatedSprite(e), this._leverAnim.anchor.set(.5, .5), this._leverAnim.loop = !1, this.addChildAt(this._leverAnim, 0), this.click = this.tap = this._clickTap, this.setHitAreaSize(80, 100), this.showHitArea(), this.sndLeverLwOnOff = Qi.assets.getSound("sndLeverMnOnOff"), this.sndSunRays = Qi.assets.getSound("sndSunRays"), this.isDoorClosed = !1, this.isCubePlaced = !1
    }

    function Ct(t) {
        o.call(this, o.TorchLw);
        var e = b.generateFrameNames("torch_", 0, 10, "", 1),
            i = Qi.assets.getTextures(e, "atlasTorch");
        this._anim = new PIXI.extras.AnimatedSprite(i), this._anim.anchor.set(.5, 1), this._anim.animationSpeed = .6, this._anim.loop = !0, this.addChild(this._anim), t && (this.interactive = !0, this.click = this.tap = this._clickTap, this.setHitAreaPolygon(-10.22, 33.61, -24.49, 15.77, -11.12, -3.85, -14.68, -43.98, -28.95, -43.98, -28.95, -64.49, 23.67, -65.39, 20.99, -44.87, 9.4, -40.41, 11.18, -10.98, 12.96, 19.34, 11.18, 35.39)), this.sndTorchFire = Qi.assets.getSound("sndTorchFire")
    }

    function Ot() {
        o.call(this, o.BarricadeMn, "barricade", "atlasItems"), this.sprMain.anchor.set(1, 1), Qi.playState.on(dt.EVENT_TRUCK_MN_LAUNCHED, this._onTruckRan, this)
    }

    function kt() {
        o.call(this, o.BrickDoorMn, "brick_door", "atlasItems", !0), this.interactive = !0, this.click = this.tap = this._clickTap, this._sprBroken = Qi.assets.getSprite("brick_door_broken", "atlasItems", !0), this._sprBroken.visible = !1, this.addChild(this._sprBroken), this.setHitAreaSize(160, 240), this.showHitArea(), this.broken = !1, this.sndBrickDoorBrakeMn = Qi.assets.getSound("sndBrickDoorBrakeMn")
    }

    function Tt() {
        o.call(this, o.ButtonMn, "button_mine_unpressed", "atlasItems", !0), this._pressed = Qi.assets.getSprite("button_mine_pressed", "atlasItems", !0), this._pressed.visible = !1, this.addChild(this._pressed), this.pressed = !1, this.sndButtonMn = Qi.assets.getSound("sndButtonMn")
    }

    function It() {
        k.call(this, o.DoorMn, "door_mine");
        var t = Qi.assets.getSprite("door_mine_frame", "atlasDoors", !0);
        this.addChildAt(t, 0), this.createPortal(), this._portal.width = t.width - 60, this._portal.height = t.height - 70, this._portal.y = -10, this.addChildAt(this._portal, 0), this.setHitAreaSize(this._portal.width, this._portal.height, 0, this._portal.y)
    }

    function Lt() {
        o.call(this, o.HatchMn), this.interactive = !0, this.click = this.tap = this._clickTap, this._hatch = Qi.assets.getSprite("hatch", "atlasItems", !0), this.addChild(this._hatch);
        var t = Qi.assets.getSprite("hatch_lock", "atlasItems", !0);
        t.x = -75, t.y = -3, this.addChild(t), this._hatchStickOpen = Qi.assets.getSprite("hatch_stick_open", "atlasItems", !0), this._hatchStickOpen.scale.set(.5, .5), this._hatchStickOpen.x = -62, this._hatchStickOpen.y = -22, this._hatchStickOpen.visible = !1, this.addChild(this._hatchStickOpen), this._hatchStickClose = Qi.assets.getSprite("hatch_stick_close", "atlasItems", !0), this._hatchStickClose.scale.set(.5, .5), this._hatchStickClose.x = -62, this._hatchStickClose.y = -22, this.addChild(this._hatchStickClose), this.setHitAreaSize(180, 50, -14), this.showHitArea(), this.opened = !1, this.sndHatchMnOpening = Qi.assets.getSound("sndHatchMnOpening"), this.sndHatchMnTryOpen = Qi.assets.getSound("sndHatchMnTryOpen"), this.sndHatchMnUnlock = Qi.assets.getSound("sndHatchMnUnlock"), this.clickOpenedCallback = function() {
            trace("go to bunker")
        }
    }

    function Et() {
        o.call(this, o.LadderMn, "ladder", "atlasItems"), this.sprMain.anchor.set(.5, 1), this.click = this.tap = this._clickTap, this.setHitAreaSize(90, 120, 0, 60), this.showHitArea(), Qi.playState.on(dt.EVENT_BUTTON_MN_PRESSED, this.liftDown, this), this.sndLadderMnDown = Qi.assets.getSound("sndLadderMnDown")
    }

    function At() {
        o.call(this, o.LampGrateMn, "lamp_grate_mn", "atlasItems", !0), this.interactive = !0, this.click = this.tap = this._clickTap, this._screw = Qi.assets.getSprite("lamp_grate_mn_screw", "atlasItems", !0), this._screw.y = -30, this.addChild(this._screw), this.setHitAreaSize(60, 60, 0, -30), this.showHitArea(), this.sndScrewUnscrew = Qi.assets.getSound("sndScrewUnscrew")
    }

    function xt() {
        o.call(this, o.LeverMn), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap;
        var t = b.generateFrameNames("lever_mine", 1, 8, "", 4),
            e = Qi.assets.getTextures(t, "atlasItems");
        this._defaultAnimSpeed = .5, this._leverAnim = new PIXI.extras.AnimatedSprite(e), this._leverAnim.anchor.set(.5, .5), this._leverAnim.loop = !1, this.addChildAt(this._leverAnim, 0), this.click = this.tap = this._clickTap, this.setHitAreaSize(80, 100), this.showHitArea(), this.sndLeverMnOn = Qi.assets.getSound("sndLeverMnOn"), this.sndLeverMnOnOff = Qi.assets.getSound("sndLeverMnOnOff"), this.sndTruckMnStuck = Qi.assets.getSound("sndTruckMnStuck"), this.isTruckOiled = !1, this.isTruckFixed = !1, Qi.playState.on(dt.EVENT_TRUCK_MN_OILED, this._onTruckMnOiled, this), Qi.playState.on(dt.EVENT_TRUCK_MN_FIXED, this._onTruckMnFixed, this)
    }

    function Mt(t) {
        o.call(this, o.LockMnBig), this._saves = t, this.interactiveChildren = !0, this._slotsContainer = new PIXI.Container, this.addChild(this._slotsContainer);
        var e = new PIXI.Graphics;
        e.beginFill(0), e.drawRect(2, 2, 308, 165), this._slotsContainer.mask = e, this._slotsContainer.addChild(e);
        var i = new PIXI.Graphics;
        i.lineStyle(3, 1905682), i.drawRect(2, 2, 308, 165), this.addChild(i), this._slots = [];
        const s = [10, 8, 6, 3];
        for (var n = 0; n < 4; n++) {
            var a = new Nt(n + 1, s[n]);
            a.x = n * a.width, a.setCount(this._saves["slotCount" + (n + 1)], !1), a.on(Nt.EVENT_CHANGE, this._onSlotChanged, this), this._slotsContainer.addChild(a), this._slots.push(a)
        }
        this._lightGreen = Qi.assets.getSprite("lock_mn_light_green_big", "atlasItems", !0), this._lightGreen.visible = !1, this._lightGreen.x = 386.5, this._lightGreen.y = 88.5, this.addChild(this._lightGreen), this._lightRed = Qi.assets.getSprite("lock_mn_light_red_big", "atlasItems", !0), this._lightRed.visible = !0, this._lightRed.x = this._lightGreen.x, this._lightRed.y = this._lightGreen.y, this.addChild(this._lightRed), this._lightGreen.visible = !(this._lightRed.visible = !this.isAllValid()), this.sndLockSlotOpen = Qi.assets.getSound("sndLockSlotOpen")
    }

    function Nt(t, e) {
        o.call(this, o.LockMnBigSlot, "lock_mn_slots", "atlasItems"), this.sprMain.width += 10, this.sprMain.height += 410, this.click = this.tap = this._clickTap, this.sndButtonMn = Qi.assets.getSound("sndButtonMn"), this._step = 151, this.working = !1, this.index = t, this._validCount = e, this.count = -1, this.setCount(1, !1), this.sndRotateSlots = Qi.assets.getSound("sndRotateSlots")
    }

    function Pt() {
        o.call(this, o.LockMnSmall, "lock_mn_small", "atlasItems", !0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this._lightGreen = Qi.assets.getSprite("lock_mn_light_green_small", "atlasItems", !0), this._lightGreen.visible = !1, this._lightGreen.x = 26.5, this._lightGreen.y = -2, this.addChild(this._lightGreen), this._lightRed = Qi.assets.getSprite("lock_mn_light_red_small", "atlasItems", !0), this._lightRed.visible = !0, this._lightRed.x = this._lightGreen.x, this._lightRed.y = this._lightGreen.y, this.addChild(this._lightRed), this.setHitAreaSize(70, 70), this.showHitArea(), this.sndButtonMn = Qi.assets.getSound("sndButtonMn")
    }

    function Dt() {
        o.call(this, o.BarricadeMn, "oil_button", "atlasItems", !0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this._buttonContainer = new PIXI.Container, this._buttonContainer.x = 16, this._buttonContainer.addChild(this.sprMain), this.addChild(this._buttonContainer);
        var t = new PIXI.Graphics;
        t.beginFill(0), t.drawRect(.5 * -this.sprMain.width, .5 * -this.sprMain.height, this.sprMain.width, this.sprMain.height), this._buttonContainer.mask = t, this._buttonContainer.addChild(t), this.setHitAreaSize(70, 60, 0, -20), this.showHitArea(), this._sprDrop = Qi.assets.getSprite("oil_drop", "atlasItems", !0), this._sprDrop.scale.set(.7, .7), this._sprDrop.y = this._sprDropStartY = 18, this._sprDrop.visible = !1, this.addChild(this._sprDrop), this.working = !1, this.sndOilDropMn = Qi.assets.getSound("sndOilDropMn")
    }

    function Bt() {
        o.call(this, o.SecretSign3Cover, "sign1_mn_08_covered", "atlasItems", !0), this.sprMain.visible = !1, this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaSize(60, 60), this.sndBrakeSign1Cover = Qi.assets.getSound("sndBrakeSign1Cover")
    }

    function Ht() {
        o.call(this, o.TruckMn, "truck", "atlasItems", !0), this.buttonMode = !1, this.sprMain.click = this.sprMain.tap = this._clickTap, this._sprFixed = Qi.assets.getSprite("truck_fixed", "atlasItems", !0), this._sprFixed.y = 8, this._sprFixed.visible = !1, this._sprFixed.click = this._sprFixed.tap = this._clickTap, this.addChild(this._sprFixed), this.sndInvUse = Qi.assets.getSound("sndInvUse"), this.fixed = this._sprFixed.visible, this.oiled = !1, this.working = !1;
        var t = new O;
        t.buttonMode = !1, t.clickCallback = this._clickTapWheel, t.clickCallbackScope = this, this.addChild(t), this._clickArea = t, Qi.playState.on(dt.EVENT_TRUCK_MN_LAUNCHED, this._onTruckRan, this)
    }

    function Rt() {
        o.call(this, o.TruckMnRide, null);
        var t = b.generateFrameNames("truck_ride_", 1, 14, "", 2),
            e = Qi.assets.getTextures(t, "atlasTruckMnRide");
        this._anim = new PIXI.extras.AnimatedSprite(e), this._anim.anchor.set(.5, .5), this._anim.animationSpeed = .6, this._anim.loop = !1, this._anim.visible = !1, this.addChildAt(this._anim, 0), Qi.playState.on(dt.EVENT_LEVER_MN_ON, this._onLeverPulled, this), this.sndTruckMnRide = Qi.assets.getSound("sndTruckMnRide"), this.ran = !1
    }

    function Vt() {
        o.call(this, o.CubePr), this.interactive = !1, this.buttonMode = !1;
        var t = b.generateFrameNames("cube_pr_", 1, 25, "", 2),
            e = Qi.assets.getTextures(t, "atlasItems");
        this._anim = new PIXI.extras.AnimatedSprite(e), this._anim.anchor.set(.5, .5), this._anim.animationSpeed = .1, this._anim.loop = !0, this._anim.visible = !0, this._anim.play(), this.addChild(this._anim), this.alpha = .6
    }

    function Ut() {
        o.call(this, o.DoorPr), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap;
        var t = new PIXI.Container;
        this.addChild(t);
        var e = new PIXI.Graphics;
        e.beginFill(0, .5), e.drawPolygon(-99.14, -102.25, 101.53, -100.47, 98.85, 101.98, -100.04, 107.34), t.mask = e, t.addChild(e), this._up = Qi.assets.getSprite("door_pr_up", "atlasItems"), this._up.scale.set(1.08, 1.1), this._up.anchor.set(.5, 1), this._up.y = 2, t.addChild(this._up), this._down = Qi.assets.getSprite("door_pr_down", "atlasItems"), this._down.scale.set(1.08, 1.1), this._down.anchor.set(.5, 0), this._down.y = -2, t.addChild(this._down), this.clickCallbackScope = this, this.clickCallback = function() {
            trace("go")
        }, this._opened = !1, this.sndDoorPrOpen = Qi.assets.getSound("sndDoorPrOpen")
    }

    function Ft() {
        o.call(this, o.LotosStonePr, "lotos_stone_inserted", "atlasItems", !0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.sprMain.scale.set(.72), this._removed = Qi.assets.getSprite("lotos_stone_removed", "atlasItems", !0), this._removed.x = -120, this._removed.y = 160, this.addChild(this._removed), this.sndLotusStoneRemoved = Qi.assets.getSound("sndLotusStoneRemoved")
    }

    function Xt() {
        o.call(this, o.ButtonSbw, "btn_subway_off", "atlasItems", !0), this._sprOn = Qi.assets.getSprite("btn_subway_on", "atlasItems", !0), this._sprOn.visible = !1, this.addChild(this._sprOn), this.interactive = !1, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaSize(50, 50), this.state = 0, this.sndButtonMn = Qi.assets.getSound("sndButtonMn")
    }

    function Gt() {
        o.call(this, o.RailsSbw);
        var t = b.generateFrameNames("rails_", 1, 7, "", 1),
            e = Qi.assets.getTextures(t, "atlasRails");
        this._defaultAnimSpeed = .7, this._anim = new PIXI.extras.AnimatedSprite(e), this._anim.anchor.set(.5, .5), this._anim.loop = !0, this.addChildAt(this._anim, 0)
    }

    function jt() {
        o.call(this, o.TrainDoorSbw), this._leftDoor = Qi.assets.getSprite("train_doorL", "atlasItems", !0), this._leftDoor.anchor.set(.98, .5), this._leftDoor.scale.set(1.14, 1.1), this.addChild(this._leftDoor), this._rightDoor = Qi.assets.getSprite("train_doorR", "atlasItems", !0), this._rightDoor.anchor.set(.02, .5), this._rightDoor.scale.set(1.14, 1.1), this.addChild(this._rightDoor), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.isOpen = !1, this.sndCoverOpen = Qi.assets.getSound("sndCoverOpen");
        var t = new PIXI.Graphics;
        t.beginFill(16711680, .5), t.drawPolygon(-74.05, -120.82, -64.68, -122.7, 73.96, -122.7, 78.95, -120.82, 79.58, -113.95, 81.45, 107.12, 78.95, 118.36, 74.58, 122.74, -70.93, 124.61, -75.3, 120.86, -76.55, 114.62, -76.55, -110.21), this.addChild(t), this.mask = t
    }

    function Wt(t) {
        o.call(this, o.TrolleyHandle, "trolley_handle", "atlasItems"), this.sprMain.anchor.set(.25, 1.142), this._rot = g.toRadians(-45), t && (this._rot = g.toRadians(45)), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaPolygon(-11.62, -21.29, -12.51, -155.07, 20.49, -156.85, 20.49, -116.72, 8.9, -105.12, 7.11, -21.29), this.sndHandleSbw = Qi.assets.getSound("sndHandleSbw")
    }

    function Kt() {
        o.call(this, o.TrolleySbw, "trolley", "atlasItems", !0), this._wheel1 = Qi.assets.getSprite("trolley_wheel", "atlasItems", !0), this._wheel1.x = -95, this._wheel1.y = 40, this.addChild(this._wheel1), this._wheel2 = Qi.assets.getSprite("trolley_wheel", "atlasItems", !0), this._wheel2.x = 80, this._wheel2.y = 40, this.addChild(this._wheel2)
    }

    function zt() {
        o.call(this, o.TrolleySbw, "trolley_stopper", "atlasItems"), this.sprMain.anchor.set(.5, .98);
        var t = new PIXI.Graphics;
        t.beginFill(16711680, .3), t.drawPolygon(-101.21, .98, -99.96, -13.37, 99.26, -13.99, 101.13, .36), this.addChild(t), this.mask = t
    }

    function Yt() {
        k.call(this, o.DoorTbt6, "door_tibet"), this.createPortal(), this.createHandle(), this.invItemNameToOpen = a.DoorKey
    }

    function Zt() {
        k.call(this, o.DoorTbt8, "door_tibet"), this.createPortal(), this.buttonMode = !1, this.sndInvUse = Qi.assets.getSound("sndInvUse")
    }

    function Jt() {
        o.call(this, o.GongTibet, "gong_stand", "atlasItems", !0);
        var t = Qi.assets.getSprite("gong", "atlasItems", !0);
        t.y = -68, this.addChild(t), t.interactive = !0, t.click = t.tap = this._clickTap, this._gong = t, this.sndGongTibet = Qi.assets.getSound("sndGongTibet")
    }

    function qt(t, e, i) {
        o.call(this, o.StairsTbt);
        var s = b.generateFrameNames("stair", t, e + (i ? 4 : 0), "", 2);
        this._stairs = [];
        for (var n = 0; n < s.length; n++) {
            var a = !!i && (n < 2 || n >= s.length - 2),
                r = new $t(s[n], a);
            r.x = n % 2 == 0 ? 30 : -30, r.y = 38 * n, this.addChild(r), this._stairs.push(r)
        }
        this.interactive = !1, this.click = this.tap = this._clickTap, this.sndStairsTibet = Qi.assets.getSound("sndStairsTibet")
    }

    function $t(t, e) {
        if (o.call(this, o.StairTbt, t, "atlasItems", !0), !(e = e || !1)) {
            var i = .56 * this.width,
                s = .56 * this.height,
                n = new PIXI.Graphics;
            n.beginFill(7305339), n.drawRect(.5 * -i, .5 * -s, i, s), this.addChild(n), this._cover = n
        }
    }

    function Qt(t, e) {
        o.call(this, o.CubeUc, "cube_uc", "atlasItems", !0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaPolygon(-2.96, -64.09, 49.66, -42.69, 53.23, 32.23, .61, 59.88, -52.9, 38.47, -52.01, -37.34), this.showHitArea(), this._leverSavesLeft = t, this._leverSavesRight = e, this.opened = !1, this.shakingCount = -1, this._shakingParams = [{
            strength: 2,
            x: 1,
            y: 0
        }, {
            strength: 5,
            x: 1,
            y: 0
        }, {
            strength: 2,
            x: 0,
            y: 1
        }, {
            strength: 5,
            x: 0,
            y: 1
        }, {
            strength: 5,
            x: 1,
            y: 1
        }];
        var i = b.generateFrameNames("cube_uc_opening_", 1, 12, "", 2),
            s = Qi.assets.getTextures(i, "atlasCubeUcOpening");
        this._anim = new PIXI.extras.AnimatedSprite(s), this._anim.anchor.set(.5, .5), this._anim.x = 3, this._anim.y = 22, this._anim.animationSpeed = .6, this._anim.loop = !1, this._anim.visible = !1, this.addChildAt(this._anim, 0), this.sndCubeUcOpen = Qi.assets.getSound("sndCubeUcOpen"), this.sndCubeUcSwitch = Qi.assets.getSound("sndCubeUcSwitch")
    }

    function te() {
        o.call(this, o.DoorUc, "pyramide_door", "atlasDoors", !0), this.click = this.tap = this._clickTap;
        var t = b.generateFrameNames("pyramide_door", 1, 10, "", 4),
            e = Qi.assets.getTextures(t, "atlasDoors");
        this._doorAnim = new PIXI.extras.AnimatedSprite(e), this._doorAnim.scale.set(.75), this._doorAnim.anchor.set(.5, .5), this._doorAnim.animationSpeed = .7, this._doorAnim.loop = !1, this._doorAnim.visible = !1, this._doorAnim.x = 65, this._doorAnim.y = 18, this.addChild(this._doorAnim), this.opened = !1, this.setHitAreaPolygon(-43.72, -99.17, 45.46, -129.49, -44.62, 129.15), this.clickCallbackScope = this, this.clickCallback = function() {
            trace("click")
        }, this.sndStairsTibet = Qi.assets.getSound("sndStairsTibet")
    }

    function ee(t) {
        o.call(this, o.GrateUc, "grate_uc", "atlasItems", !0), this.sndOpenGrate = Qi.assets.getSound("sndOpenGrate"), this.sndOpenGrate && (this.sndOpenGrate.volume = .3), (t = Boolean(t)) && (this._openAnimation = new TimelineMax({
            paused: !0
        }), this._openAnimation.to(this, .3, {
            x: "+=20",
            y: "-=20"
        }), this._openAnimation.add([TweenLite.to(this, .3, {
            x: "-=80",
            y: "+=200",
            rotation: g.toRadians(-8)
        }), TweenLite.to(this.scale, .3, {
            x: "+=0.2",
            y: "+=0.2"
        })]))
    }

    function ie(t) {
        o.call(this, o.GrateUcScrew, "grate_uc_screw", "atlasItems"), this.sprMain.anchor.set(.7, .5);
        var e = new PIXI.Container;
        e.addChild(this.sprMain), this.addChild(e);
        var i = new PIXI.Graphics;
        i.beginFill(0, .5), i.drawRect(0, -10, 150, 20), e.mask = i, e.addChild(i), this.interactive = !0, this.buttonMode = !1, this.click = this.tap = this._clickTap, this.setHitAreaSize(40, 30), this.index = t, this.sndScrewUnscrew = Qi.assets.getSound("sndScrewUnscrew")
    }

    function se() {
        o.call(this, o.LampUc, "lamp_uc_grate", "atlasItems", !0), this._lampOn = Qi.assets.getSprite("lamp_uc_on"), this._lampOn.anchor.set(.5, 0), this._lampOn.x = -3, this._lampOn.y = -70, this._lampOn.visible = !1, this.addChildAt(this._lampOn, 0), this._lampOff = Qi.assets.getSprite("lamp_uc_off"), this._lampOff.anchor.set(.5, 0), this._lampOff.x = this._lampOn.x, this._lampOff.y = this._lampOn.y, this._lampOff.visible = !1, this.addChildAt(this._lampOff, 0), this.interactive = !0, this.buttonMode = !1, this.click = this.tap = this._clickTap, this.state = 0, this.setHitAreaSize(70, 80), this.sndTurnInLamp = Qi.assets.getSound("sndTurnInLamp")
    }

    function oe() {
        o.call(this, o.LeverUc, "lever_uc_handle_1", "atlasItems", !0), this._handle = Qi.assets.getSprite("lever_uc_handle_2", "atlasItems", !0), this._handle.anchor.y = 2, this.addChildAt(this._handle, 0), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaSize(70, 120, 0, 30), this.showHitArea(), this.isOn = !1, this.validShaking = -1, this.shakingCountCube = -1, this.shakingCount = -1, this._shakingParams = [{
            strength: 1,
            x: 1,
            y: 0
        }, {
            strength: 3,
            x: 1,
            y: 0
        }, {
            strength: 1,
            x: 0,
            y: 1
        }, {
            strength: 3,
            x: 0,
            y: 1
        }];
        var t = b.generateFrameNames("lever_uc_handle_anim_", 1, 10, "", 2),
            e = Qi.assets.getTextures(t, "atlasItems");
        this._defaultAnimSpeed = .6, this._anim = new PIXI.extras.AnimatedSprite(e), this._anim.anchor.set(.5, .5), this._anim.scale.set(.5, .5), this._anim.y = -2, this._anim.animationSpeed = this._defaultAnimSpeed, this._anim.loop = !1, this._anim.visible = !1, this.addChildAt(this._anim, 0), this.sndOn = Qi.assets.getSound("sndLeverMnOn"), this.sndOnOff = Qi.assets.getSound("sndLeverMnOnOff")
    }

    function ne() {
        o.call(this, o.StoneUc), this.interactive = !0, this.buttonMode = !1, this.click = this.tap = this._clickTap;
        var t = b.generateFrameNames("pyramide_stone", 1, 52, "", 4),
            e = Qi.assets.getTextures(t, "atlasItems");
        this._anim = new PIXI.extras.AnimatedSprite(e), this._anim.anchor.set(.5, .5), this._anim.animationSpeed = 1, this._anim.loop = !1, this._anim.visible = !1, this.addChild(this._anim), this.opened = !1, this.setHitAreaPolygon(-13.62, -48.99, 23.84, -44.53, -2.92, 33.07, -41.27, 25.04), this.showHitArea()
    }

    function ae() {
        o.call(this, o.BigControlVnt), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap;
        var t = b.generateFrameNames("control_handle_to_on", 1, 11, "", 4),
            e = Qi.assets.getTextures(t, "atlasItems");
        this._defaultAnimSpeed = .5, this._anim = new PIXI.extras.AnimatedSprite(e), this._anim.scale.set(.55), this._anim.anchor.set(.5, .5), this._anim.loop = !1, this.addChildAt(this._anim, 0), this.isOn = !1, this.setHitAreaSize(100, 100), this.showHitArea(), this.sndBigControlVnt = Qi.assets.getSound("sndBigControlVnt")
    }

    function re() {
        o.call(this, o.CloseSecretVnt, "vnt_close_secret", "atlasItems", !0), this.sprMain.scale.set(1.08, .93), this.interactive = !0, this.click = this.tap = this._clickTap;
        var t = new PIXI.Graphics;
        t.beginFill(0), t.drawPolygon(-259, -145.68, -34.25, -143.9, -32.47, 139.71, -264.35, 142.39), this.addChild(t), this._cover = t, this.setHitAreaPolygon(-18.2, -128.74, 25.5, -105.55, 24.61, 102.25, -19.98, 128.12), this.sndOpenGrate = Qi.assets.getSound("sndOpenGrate")
    }

    function he(t, e) {
        o.call(this, o.ControlVnt, "control_handle", "atlasItems", !0), this.num = t, this.validIndex = e, this._pos = [{
            x: 0,
            y: 0
        }, {
            x: 7,
            y: 30
        }, {
            x: 14,
            y: 60
        }], this.posIndex = 0, this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaPolygon(-16.33, -8.22, 5.08, -10.01, 22.91, 75.61, 4.19, 78.29), this.showHitArea(), this.sndControlVnt = Qi.assets.getSound("sndControlVnt")
    }

    function ce() {
        o.call(this, o.CoverVnt, "vnt_cover", "atlasItems"), this.sprMain.scale.set(1.1), this.sprMain.anchor.set(.06, .92), this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.isOpen = !1, this._openRotation = g.toRadians(30), this.sndCoverOpen = Qi.assets.getSound("sndCoverOpen")
    }

    function le(t) {
        o.call(this, o.PassVnt, le.texNames[t], "atlasItems", !0), t == le.TYPE_LEFT ? (this.sprMain.rotation = g.toRadians(90), this.sprMain.scale.set(1, -1)) : t == le.TYPE_DOWN && (this.sprMain.rotation = g.toRadians(180))
    }

    function de() {
        o.call(this, o.RotatorVnt, "vnt_rotator", "atlasItems", !0), this.sprMain.interactive = !0, this.sprMain.buttonMode = !0, this.sprMain.click = this.sprMain.tap = this._clickTap, b.setHitAreaPolygon(this.sprMain, .85, -95.63, 72.2, -62.63, 93.61, 1.58, 65.07, 66.69, -.93, 94.34, -67.82, 65.8, -95.47, 1.58, -61.58, -73.33), this._gear1 = Qi.assets.getSprite("vnt_gear_1", "atlasItems", !0), this._gear1.x = 122, this._gear1.y = 75, this._gear1.visible = !1, this.addChild(this._gear1), this._gear2 = Qi.assets.getSprite("vnt_gear_2", "atlasItems", !0), this._gear2.x = 100, this._gear2.y = 120, this.addChild(this._gear2), this.rotIndex = 0, this._rot = [0, g.toRadians(90)], this.isGearSet = !1;
        var t = new O;
        t.setHitAreaPolygon(89.15, 88.99, 108.77, 49.74, 151.58, 52.42, 135.52, 108.61), t.buttonMode = !1, t.clickCallbackScope = this, t.clickCallback = function() {
            this.isInventorySelected(a.Gear) && (this.removeSelectedFromInventory(), this.setGear(!0), Qi.soundOn && this.sndSetGear.play(), this.emit(de.EVENT_CHANGE, this))
        }, this._clickArea = t, this.addChild(t), this.sndRotatorRotate = Qi.assets.getSound("sndRotatorRotate"), this.sndSetGear = Qi.assets.getSound("sndInvUse"), this.sndNoGear = Qi.assets.getSound("sndTruckMnStuck"), this.sndNoGear && (this.sndNoGear.volume = .2)
    }

    function pe(t) {
        o.call(this, o.DiaryWt);
        var e = new O;
        e.clickCallbackScope = this, e.clickCallback = function() {
            var e = new pt(t);
            e.x = 400, e.y = 300, Qi.playState.addChild(e)
        }, e.setHitAreaPolygon(369.23, 205.02, 434.34, 204.12, 436.12, 295.99, 365.66, 294.2), e.showHitArea(), this.addChild(e)
    }

    function ue() {
        k.call(this, o.DoorWt, "white_room_door");
        var t = Qi.assets.getSprite("white_room_door", "atlasDoors", !0);
        this.createPortal(), this._portal.width = t.width - 50, this._portal.height = t.height - 60, this._portal.y = -10, this.addChildAt(this._portal, 0), this.setHitAreaSize(this._portal.width, this._portal.height, 0, this._portal.y)
    }

    function _e() {
        k.call(this, o.DoorWt, "white_room_door_left", 10)
    }

    function ye(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaUp(300.56, 79.26, 346.04, 51.62, 414.72, 47.16, 487.85, 69.45, 494.98, 87.29, 478.93, 100.67, 418.28, 114.05, 369.23, 111.37, 320.18, 97.99)
    }

    function ve(t, e) {
        i.call(this, e, t, "bnk_02_03")
    }

    function fe(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function ge(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._lampSaves = this.getActorSavesAnotherLocation(et._02, o.LampUc);
        var s = new vt;
        s.x = 431.5, s.y = 282, s.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && s.on(vt.EVENT_PRESSED, this._onButtonPressed, this), this.addChild(s), this._button = s;
        var n = new ft(1);
        n.x = 444, n.y = 0, n.visible = this._lampSaves.state == se.STATE_LAMP_ON, this.addChild(n), this._lightSign = n, this.setHitAreaLeft(0, 280.82, 4.46, 245.15, 21.4, 188.96, 49.05, 162.21, 73.13, 157.75, 103.46, 162.21, 124.86, 206.8, 136.45, 263.88, 129.32, 328.99, 109.7, 368.23, 87.4, 381.61, 43.7, 376.25, 11.59, 355.74, 0, 310.26)
    }

    function me(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._lampSaves = this.getActorSavesAnotherLocation(et._03, o.LampUc);
        var s = new vt;
        s.x = 433, s.y = 285.5, s.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && s.on(vt.EVENT_PRESSED, this._onButtonPressed, this), this.addChild(s), this._button = s;
        var n = new ft(2);
        n.x = 435, n.y = 0, n.visible = this._lampSaves.state == se.STATE_LAMP_ON, this.addChild(n), this._lightSign = n
    }

    function we(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._lampSaves = this.getActorSavesAnotherLocation(et._04, o.LampUc);
        var s = new vt;
        s.x = 433, s.y = 280.5, s.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && s.on(vt.EVENT_PRESSED, this._onButtonPressed, this), this.addChild(s), this._button = s;
        var n = new ft(3);
        n.x = 422, n.y = 0, n.visible = this._lampSaves.state == se.STATE_LAMP_ON, this.addChild(n), this._lightSign = n
    }

    function Se(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._lampSaves = this.getActorSavesAnotherLocation(et._05, o.LampUc);
        var s = new vt;
        s.x = 431, s.y = 282, s.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && s.on(vt.EVENT_PRESSED, this._onButtonPressed, this), this.addChild(s), this._button = s;
        var n = new ft(4);
        n.x = 435, n.y = 0, n.visible = this._lampSaves.state == se.STATE_LAMP_ON, this.addChild(n), this._lightSign = n
    }

    function be(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaDown(281.83, 564.44, 322.85, 460.98, 482.5, 460.09, 534.23, 564.44)
    }

    function Ce(t, e) {
        i.call(this, "Cb_0" + e, t, "cb_01"), this._saves = this.getActorSaves("Cb_0" + e), this.validColorIndex = e, this.colorIndex = void 0 == this._saves.colorIndex ? 0 : this._saves.colorIndex, this._colorRect = new PIXI.Graphics, this.addChildAt(this._colorRect, 0), this.setColor(this.colorIndex)
    }

    function Oe(t, e) {
        i.call(this, e, t), this._torchSaves = this.getActorSaves(o.TorchLw);
        var s = Boolean(this._torchSaves.isOn);
        this.setBg(s ? "lw_01a" : "lw_01");
        var n = new Ct(!0);
        n.x = 243, n.y = 183, n.setOn(s), s || n.on(Ct.EVENT_ON, this._onTorchOn, this), this.addChild(n), this.setHitAreaLeft(172.13, 233.56, 265.77, 234.45, 274.69, 354.85, 251.51, 418.17, 242.59, 458.31, 214.05, 465.44, 172.13, 478.82)
    }

    function ke(t, e) {
        i.call(this, e, t, "lw_02_06");
        var s = new Ct(!0);
        s.x = 243, s.y = 275, s.setOn(!0), this.addChild(s);
        var o = new L("lw_stone_1");
        o.position.set(211.37, 314.72), o.playMinusX(1), this.addChild(o), (o = new L("lw_stone_2")).position.set(272.02, 307.58), o.playMinusX(1), this.addChild(o)
    }

    function Te(t, e) {
        i.call(this, e, t, "lw_03_07");
        var s = new Ct(!0);
        s.x = 243, s.y = 273, s.setOn(!0), this.addChild(s);
        var o = new L("lw_stone_1");
        o.position.set(224.75, 339.69), o.playMinusX(1), this.addChild(o), (o = new L("lw_stone_2")).position.set(264.88, 321.85), o.playMinusX(1), this.addChild(o)
    }

    function Ie(t, e) {
        i.call(this, e, t, "lw_04_08");
        var s = new Ct(!0);
        s.x = 243, s.y = 273, s.setOn(!0), this.addChild(s);
        var o = new L("lw_stone_1");
        o.position.set(213.15, 295.99), o.playMinusX(1), this.addChild(o), (o = new L("lw_stone_2")).position.set(274.69, 292.42), o.playMinusX(1), this.addChild(o)
    }

    function Le(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new Ct(!0);
        if (s.x = 243, s.y = 273, s.setOn(!0), this.addChild(s), !this.isItemPickedUp(a.Notes)) {
            var o = new U(this.name.toLowerCase());
            o.sprScr.rotation = g.toRadians(-6), o.x = 530, o.y = 230, o.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(o)
        }
        var n = new L("lw_stone_1");
        n.position.set(256.86, 337.9), n.playMinusX(1), this.addChild(n), (n = new L("lw_stone_2")).position.set(218.51, 328.09), n.playMinusX(1), this.addChild(n)
    }

    function Ee(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaUp(133.78, 57.86, 144.48, 45.37, 236.34, 18.62, 344.26, 11.48, 476.25, 11.48, 598.44, 25.75, 666.22, 40.91, 684.06, 61.43, 664.44, 72.13, 519.96, 98.89, 345.15, 101.56, 196.21, 83.72, 142.7, 67.67)
    }

    function Ae(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._doorSaves = this.getActorSaves(o.DoorLw), void 0 == this._doorSaves.opened && (this._doorSaves.opened = !1, this.forceSaveData());
        var s = new St;
        s.x = 130, s.y = 280, this._doorSaves.opened ? s.open() : s.close(), s.on(k.EVENT_CHANGE, this._onDoorChange, this), this.addChild(s);
        var n = new O;
        n.setHitAreaPolygon(52.62, 451.17, 52.62, 116.72, 99.89, 116.72, 99.89, 467.22), n.showHitArea(), n.interactive = this._doorSaves.opened, n.clickCallback = function() {
            t.moveLeft()
        }, this.addChild(n), this._clickArea = n, this.setHitAreaUp(255.96, 3.46, 559.2, 1.67, 560.98, 53.4, 395.99, 64.1, 256.86, 58.75), this.setHitAreaDown(156.08, 466.33, 288.07, 443.14, 422.74, 437.79, 572.58, 447.6, 668, 469.9, 680.49, 493.09, 654.63, 507.36, 519.06, 530.55, 356.74, 533.22, 243.48, 523.41, 149.83, 502.9, 133.78, 484.17)
    }

    function xe(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._doorSaves = this.getActorSavesAnotherLocation(J._10, o.DoorLw), this._cubeSaves = this.getActorSavesAnotherLocation(J._12, o.CubeLw), this._leverSaves = this.getActorSaves(o.LeverLw);
        var s = new bt;
        s.x = 403, s.y = 300, s.on(bt.EVENT_MELT, this._onLeverMelt, this), this.addChild(s), this._lever = s, this.setHitAreaDown(244.37, 509.14, 545.82, 504.68, 548.49, 595.65, 240.8, 593.87)
    }

    function Me(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._cubeSaves = this.getActorSaves(o.CubeLw), this._leverSaves = this.getActorSavesAnotherLocation(J._11, o.LeverLw);
        var s = new wt;
        if (s.x = 450, s.y = 340, s.setState(this._cubeSaves.state), s.on(wt.EVENT_CHANGE, this._onCubeChanged, this), this.addChild(s), this._cube = s, !this.isItemPickedUp(a.LightBulb)) {
            var n = new R("bulb_inv");
            n.x = 450, n.y = 340, n.sprScr.scale.set(.5, .5), n.scaleSprScrHitArea(1.2, 1.2), n.showSprScrHitArea(), n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), n.visible = 2 == this._cubeSaves.state, this.addChild(n), this._bulb = n
        }
        this.setHitAreaRight(650.17, 154.18, 771.46, 123.86, 772.35, 497.55, 642.14, 444.93)
    }

    function Ne(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._buttonSaves = this.getActorSaves(o.ButtonMn), this._truckSaves = this.getActorSaves(o.TruckMn);
        var s = this.getActorSavesAnotherLocation(q._02, o.LeverMn),
            n = new Et;
        n.x = 440, n.y = 0, this._buttonSaves.pressed && n.liftDown(!1), n.on(Et.EVENT_CLICK, this._clickOnLadder, this), this.addChild(n);
        var a = new Tt;
        if (a.x = 627, a.y = 330, a.setPressed(this._buttonSaves.pressed), a.visible = s.on, this.addChild(a), this._buttonSaves.pressed || Qi.playState.on(dt.EVENT_BUTTON_MN_PRESSED, this._onButtonPressed, this), !s.on) {
            var r = new Ht;
            r.x = 540, r.y = 410, r.on(Ht.EVENT_CLICK_TO_CHANGE_LOCATION, this._clickOnTruck, this), r.setFixed(this._truckSaves.fixed), r.setOiled(this._truckSaves.oiled), this.addChild(r), Qi.playState.on(dt.EVENT_TRUCK_MN_FIXED, this._onTruckMnFixed, this), Qi.playState.on(dt.EVENT_TRUCK_MN_OILED, this._onTruckMnOiled, this)
        }
        var h = new It;
        h.x = 260, h.y = 280, h.portalClickCallback = function() {
            t.fadeB(!0)
        }, this.addChild(h)
    }

    function Pe(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !this.isItemPickedUp(a.Oiler)) {
            var s = new F;
            s.x = 390, s.y = 405, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
    }

    function De(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._brickDoorSaves = this.getActorSaves(o.BrickDoorMn), this._leverSaves = this.getActorSaves(o.LeverMn);
        var s = this.getActorSavesAnotherLocation(q._01, o.TruckMn),
            n = new kt;
        n.x = 515, n.y = 290, n.setBroken(this._brickDoorSaves.broken), this._brickDoorSaves.broken || n.on(kt.EVENT_DOOR_HAS_BEEN_BROKEN, this._onBrickDoorBroken, this), n.on(kt.EVENT_CLICK_TO_CHANGE_LOCATION, this._onClickBrokenDoor, this), this.addChild(n);
        var a = new xt;
        if (a.x = 220, a.y = 295, a.isTruckFixed = s.fixed, a.isTruckOiled = s.oiled, a.setOn(this._leverSaves.on), this._leverSaves.on || Qi.playState.on(dt.EVENT_LEVER_MN_ON, this._onLeverOn, this), this.addChild(a), !this._leverSaves.on) {
            var r = new Rt;
            r.x = 400, r.y = 407, this.addChild(r)
        }
    }

    function Be(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), this._grateSaves = this.getActorSaves(o.LampGrateMn), !this.isItemPickedUp(a.Wheel)) {
            var s = new z;
            s.x = 550, s.y = 400, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        if (!this.isItemPickedUp(a.LightBulb)) {
            var n = new R;
            n.setEnableSprScr(this._grateSaves.unscrewed), n.x = 600, n.y = 250, n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(n), this._bulb = n
        }
        var r = Qi.assets.getSprite("lamp_grate_holder", "atlasItems", !0);
        if (r.hitArea = new PIXI.Rectangle(0, 0, 0, 0), r.interactive = !1, r.x = 620, r.y = 240, this.addChild(r), !this._grateSaves.unscrewed && null != n) {
            var h = new At;
            h.x = n.x, h.y = n.y + 6, h.on(At.EVENT_UNSCREW, this._onGrateUnscrewed, this), h.on(At.EVENT_UNSCREW_COMPLETE, this._onGrateUnscrewedComplete, this), this.addChild(h)
        }
    }

    function He(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._hatchSaves = this.getActorSaves(o.HatchMn);
        var s = new Lt;
        s.x = 410, s.y = 475, s.setOpened(this._hatchSaves.opened), this._hatchSaves.opened || s.on(Lt.EVENT_OPEN, this._onHatchOpen, this), s.clickOpenedCallback = function() {
            t.moveDown()
        }, this.addChild(s);
        var n = new L("mn_stone_1");
        n.position.set(592.2, 425), n.playMinusX(1), this.addChild(n)
    }

    function Re(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !this.isItemPickedUp(a.Pickaxe)) {
            var s = new G;
            s.x = 250, s.y = 230, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        var o = new Dt;
        o.x = 333, o.y = 295, this.addChild(o)
    }

    function Ve(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), this._leverSaves = this.getActorSavesAnotherLocation(q._02, o.LeverMn), !this._leverSaves.on) {
            var s = new Ot;
            s.x = Qi.gameWidth0, s.y = Qi.gameHeight0, this.addChild(s)
        }
        if (!this.isItemPickedUp(a.Notes)) {
            var n = new U(this.name.toLowerCase());
            n.sprScr.rotation = g.toRadians(-6), n.x = 130, n.y = 200, n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(n)
        }
        var r = new L("mn_stone_3");
        r.position.set(380.82, 410.79), r.playMinusX(1), this.addChild(r);
        var h = new L("mn_stone_2");
        h.position.set(406.69, 394.79), h.playMinusX(1), this.addChild(h);
        var c = new L("mn_stone_4");
        c.position.set(435.23, 418.17), c.playPlusX(1), this.addChild(c)
    }

    function Ue(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function Fe(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function Xe(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._coverSaves = this.getActorSaves(o.SecretSign3Cover);
        var s = new Bt;
        s.x = 675, s.y = 175, s.setBroken(this._coverSaves.broken), this._coverSaves.broken || s.on(Bt.EVENT_BRAKE, this._onCoverBrake, this), this.addChild(s);
        var n = new E(1, this.name);
        n.x = s.x, n.y = s.y, n.visible = this._coverSaves.broken, this.addChild(n), this._sign = n
    }

    function Ge(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), this._lockBigSaves = this.getActorSavesAnotherLocation(q._09a, o.LockMnBig), !this.isItemPickedUp(a.Notes)) {
            var s = new U(this.name.toLowerCase());
            s.sprScr.rotation = g.toRadians(10), s.x = 525, s.y = 240, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        if (!this.isItemPickedUp(a.Lighter)) {
            var n = new V;
            n.x = 50, n.y = 325, n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(n)
        }
        var r = new It;
        r.x = 408, r.y = 335, r.portalClickCallback = function() {
            t.fadeB(!0)
        }, this.addChild(r), this._door = r;
        var h = new Pt;
        h.x = 312, h.y = 300, h.on(Pt.EVENT_CLICK_ON, this._onLockClick, this), this.addChild(h), this._lock = h, this.setHitAreaDown(372.8, 483.28, 494.98, 482.39, 548.49, 571.57, 337.12, 572.46)
    }

    function je(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._lockSaves = this.getActorSaves(o.LockMnBig);
        const s = new Mt(this._lockSaves);
        s.x = 216, s.y = 210, this.addChild(s), this._lock = s
    }

    function We(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = this.isAllCbValid();
        if (!s) {
            var o = new Vt;
            o.x = 450, o.y = 240, this.addChild(o), this._cube = o
        }
        if (!this.isItemPickedUp(a.LightBulb)) {
            var n = new R("bulb_inv");
            n.x = 450, n.y = 240, n.sprScr.scale.set(.5, .5), n.scaleSprScrHitArea(1.2, 1.2), n.showSprScrHitArea(), n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), n.visible = s, this.addChild(n), this._bulb = n
        }
    }

    function Ke(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesStone = this.getActorSaves(o.LotosStonePr);
        var s = new Ut;
        if (s.x = 356, s.y = 260, s.clickCallback = function() {
                t.fadeA()
            }, this.isItemPickedUp(a.Gear) && s.open(), this.addChild(s), this._door = s, !this.isItemPickedUp(a.Gear)) {
            var n = new D;
            n.x = 584, n.y = 314, n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(n)
        }
        var r = new Ft;
        r.x = 780, r.y = 318, r.setRemoved(this._savesStone.removed), this._savesStone.removed || r.on(Ft.EVENT_REMOVED, this._onStoneRemoved, this), this.addChild(r);
        var h = new O;
        h.clickCallback = function() {
            t.fadeB()
        }, h.setHitAreaPolygon(713.49, 250.5, 797.32, 258.53, 796.43, 373.58, 712.6, 336.12), h.visible = this._savesStone.removed, h.showHitArea(), this.addChild(h), this._clickArea = h
    }

    function ze(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new E(4, this.name);
        s.x = 560, s.y = 300, this.addChild(s)
    }

    function Ye(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.saveStayingHere = !1;
        var s = new Gt;
        s.x = 400, s.y = 490, this.addChild(s), this._rails = s;
        var o = new Kt;
        o.x = 420, o.y = 460, this.addChild(o), this._trolley = o;
        var n = new PIXI.Graphics;
        n.beginFill(0), n.drawRect(-10, -10, 820, 620), this.addChild(n), this._black = n, this.sndTrolleyMoving = Qi.assets.getSound("sndTrolleyMoving")
    }

    function Ze(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), this._savesBigControl = this.getActorSavesAnotherLocation(it._11, o.BigControlVnt), !this.isItemPickedUp(a.Notes)) {
            var s = new U(this.name.toLowerCase());
            s.sprScr.rotation = g.toRadians(-6), s.x = 430, s.y = 200, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
    }

    function Je(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), this._savesBigControl = this.getActorSavesAnotherLocation(it._11, o.BigControlVnt), this._savesDoor = this.getActorSaves(o.TrainDoorSbw), !this.isItemPickedUp(a.Binoculars)) {
            var s = new A;
            s.x = 360, s.y = 370, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        var n = new jt;
        n.x = 381, n.y = 275, n.setOpen(this._savesDoor.isOpen), this._savesDoor.isOpen || n.on(jt.EVENT_CHANGE, this._onDoorChanged, this), this.addChild(n)
    }

    function qe(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesBigControl = this.getActorSavesAnotherLocation(it._11, o.BigControlVnt), this.setHitAreaUp(243.48, 17.73, 511.04, 15.94, 463.77, 61.43, 293.42, 64.99)
    }

    function $e(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function Qe(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesBigControl = this.getActorSavesAnotherLocation(it._11, o.BigControlVnt)
    }

    function ti(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesBigControl = this.getActorSavesAnotherLocation(it._11, o.BigControlVnt), this._savesButton = this.getActorSaves(o.ButtonSbw);
        var s = new Xt;
        s.x = 620, s.y = 270, s.on(Xt.EVENT_CHANGE, this._onButtonChange, this), this.addChild(s), this._btn = s
    }

    function ei(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesButton = this.getActorSavesAnotherLocation(Q._06, o.ButtonSbw);
        var s = new Kt;
        s.x = 420, s.y = 460, this.addChild(s);
        var n = new zt;
        n.x = 450, n.y = 520, this.addChild(n), this._stopper = n;
        var a = new Wt(!0);
        a.x = 627, a.y = 468, a.on(Wt.EVENT_ON, this._onTrolleyHandleOn, this), this.addChild(a), this._handle = a
    }

    function ii(t, e, s) {
        i.call(this, s, t, "sbw_08_15");
        const o = new PIXI.Graphics;
        o.beginFill(0, e), o.drawRect(0, 0, Qi.gameWidth0, Qi.gameHeight0), o.endFill(), this.addChild(o)
    }

    function si(t, e) {
        i.call(this, e, t), this._torchSaves = this.getActorSavesAnotherLocation(J._01, o.TorchLw);
        var s = new Kt;
        s.x = 370, s.y = 462, this.addChild(s);
        var n = new zt;
        n.x = 330, n.y = 524, this.addChild(n), this._stopper = n;
        var a = new Wt(!1);
        a.x = 176, a.y = 472, a.on(Wt.EVENT_ON, this._onTrolleyHandleOn, this), this.addChild(a), this._handle = a, this.setHitAreaRight(629.65, 228.21, 737.57, 215.72, 745.6, 535.01, 627.87, 503.79)
    }

    function oi(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !this.isItemPickedUp(a.Knob)) {
            const t = new H;
            t.x = 570, t.y = 490, t.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(t)
        }
    }

    function ni(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !Qi.saveData.get("doNotShowIntro")) {
            var s = function(t, e) {
                t.currLocation.name != tt._02 && (Qi.playState.off(dt.EVENT_LOCATION_CHANGED, s), Qi.saveData.set(!0, "doNotShowIntro"), Qi.forceSaveData())
            };
            Qi.playState.on(dt.EVENT_LOCATION_CHANGED, s)
        }
        if (!this.isItemPickedUp(a.Stick)) {
            var n = new W;
            n.x = 540, n.y = 410, n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(n)
        }
        this._stairsSaves = this.getActorSaves(o.StairsTbt);
        var r = new qt(1, 10, !1);
        r.x = 420, r.y = 47, this._stairsSaves.showed ? r.show() : (r.visible = !1, r.on(qt.EVENT_STAIRS_SHOW, this._onStairsShow, this), Qi.playState.on(dt.EVENT_GONG_BANG, this.onGongBang, this)), this._stairsSaves.opened ? r.open(0) : r.on(qt.EVENT_STAIRS_OPEN, this._onStairsOpen, this), this.addChild(r), this._stairs = r
    }

    function ai(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new Jt;
        s.x = 400, s.y = 350, this.addChild(s)
    }

    function ri(t, e) {
        i.call(this, e, t, "tbt_04_05"), this._stairsSaves = this.getActorSaves(o.StairsTbt);
        let s = new qt(11, 20, !0);
        s.x = 420, s.y = 27, s.show(), this._stairsSaves.opened ? s.open(0) : s.on(qt.EVENT_STAIRS_OPEN, this._onStairsOpen, this), this.addChild(s)
    }

    function hi(t, e) {
        i.call(this, e, t, "tbt_04_05"), this._stairsSaves = this.getActorSaves(o.StairsTbt);
        let s = new qt(11, 20, !0);
        s.x = 420, s.y = 27, s.show(), this._stairsSaves.opened ? s.open(0) : s.on(qt.EVENT_STAIRS_OPEN, this._onStairsOpen, this), this.addChild(s), this._stairs = s, Qi.playState.on(dt.EVENT_STAIRS_OPEN, this._onStairsOpen, this)
    }

    function ci(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._doorSaves = this.getActorSaves(o.DoorTbt6);
        var s = new Yt;
        s.x = .5 * Qi.gameWidth0 + 10, s.y = Qi.gameHeight0 - .5 * s.height - 40, this._doorSaves.opened ? s.open() : s.close(), s.portalClickCallback = function() {
            t.fadeA(!0)
        }, s.on(k.EVENT_DOOR_OPEN, this._onDoorOpen, this), this.addChild(s)
    }

    function li(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function di(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._doorSaves = this.getActorSaves(o.DoorTbt8);
        var s = new Zt;
        s.x = .5 * Qi.gameWidth0 + 10, s.y = Qi.gameHeight0 - .5 * s.height - 40, this._doorSaves.opened ? s.open() : s.close(), s.portalClickCallbackScope = this, s.portalClickCallback = this._openOutro, this._doorSaves.opened || s.on(k.EVENT_DOOR_OPEN, this._onDoorOpen, this), this._doorSaves.handle ? s.createHandle() : s.on(k.EVENT_HANDLE_CREATED, this._onHandleCreated, this), this.addChild(s)
    }

    function pi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaLeft(280.04, 169.34, 314.83, 303.12, 277.37, 318.28, 285.4, 417.28, 243.48, 427.09, 210.48, 405.69, 145.37, 337.9, 148.05, 271.01, 131.1, 211.26, 133.78, 183.61)
    }

    function ui(t, e) {
        i.call(this, e, t, "uc_02_03_05"), this._lampSaves = this.getActorSaves(o.LampUc);
        var s = new se;
        s.x = 405, s.y = 370, s.setState(this._lampSaves.state), s.on(se.EVENT_STATE_CHANGE, this._onLampStateChanged, this), this.addChild(s), this._lamp = s;
        var n = new L("uc_stone_1");
        n.position.set(315.72, 367.34), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_3")).position.set(345.15, 336.12), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_2")).position.set(323.75, 305.8), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_6")).position.set(470.01, 299.55), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_10")).position.set(473.58, 354.85), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_12")).position.set(456.63, 412.82), n.playPlusX(1), this.addChild(n)
    }

    function _i(t, e) {
        i.call(this, e, t, "uc_02_03_05"), this._lampSaves = this.getActorSaves(o.LampUc);
        var s = new se;
        s.x = 405, s.y = 370, s.setState(this._lampSaves.state), s.on(se.EVENT_STATE_CHANGE, this._onLampStateChanged, this), this.addChild(s), this._lamp = s;
        var n = new L("uc_stone_11");
        n.position.set(341.58, 303.12), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_3")).position.set(303.23, 333.44), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_4")).position.set(347.83, 378.93), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_5")).position.set(446.82, 403.9), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_8")).position.set(509.25, 375.36), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_9")).position.set(470.9, 325.42), n.playPlusX(1), this.addChild(n)
    }

    function yi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._lampSaves = this.getActorSaves(o.LampUc);
        var s = new se;
        s.x = 395, s.y = 365, s.setState(this._lampSaves.state), s.on(se.EVENT_STATE_CHANGE, this._onLampStateChanged, this), this.addChild(s), this._lamp = s;
        var n = new L("uc_stone_2");
        n.position.set(336.23, 328.99), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_7")).position.set(301.45, 347.71), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_1")).position.set(340.69, 400.33), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_4")).position.set(472.69, 312.04), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_8")).position.set(456.63, 338.8), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_12")).position.set(436.12, 384.28), n.playPlusX(1), this.addChild(n)
    }

    function vi(t, e) {
        i.call(this, e, t, "uc_02_03_05"), this._lampSaves = this.getActorSaves(o.LampUc);
        var s = new se;
        s.x = 405, s.y = 370, s.setState(this._lampSaves.state), s.on(se.EVENT_STATE_CHANGE, this._onLampStateChanged, this), this.addChild(s), this._lamp = s;
        var n = new L("uc_stone_6");
        n.position.set(476.25, 394.09), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_3")).position.set(453.07, 367.34), n.playMinusX(1), this.addChild(n), (n = new L("uc_stone_1")).position.set(493.2, 332.55), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_12")).position.set(369.23, 400.33), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_11")).position.set(358.53, 376.25), n.playPlusX(1), this.addChild(n), (n = new L("uc_stone_10")).position.set(309.48, 364.66), n.playPlusX(1), this.addChild(n)
    }

    function fi(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new O;
        s.buttonMode = !1, s.clickCallback = function() {
            t.fadeA()
        }, s.setHitAreaPolygon(354.96, 292.42, 452.17, 287.96, 453.07, 326.31, 441.47, 330.77, 435.23, 347.71, 405.8, 354.85, 368.34, 348.61, 363.88, 335.23, 353.18, 330.77), s.showHitArea(), this.addChild(s)
    }

    function gi(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new E(3, this.name);
        s.scale.set(1.1), s.x = 400, s.y = 301.5, this.addChild(s)
    }

    function mi(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function wi(t, e) {
        if (i.call(this, e, t, "uc_08_09"), !this.isItemPickedUp(a.Notes)) {
            var s = new U(this.name.toLowerCase());
            s.sprScr.rotation = g.toRadians(-8), s.x = 130, s.y = 200, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
    }

    function Si(t, e) {
        i.call(this, e, t, "uc_08_09")
    }

    function bi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._rotatorSaves = this.getActorSavesAnotherLocation(it._07, o.RotatorVnt);
        var s = new ee;
        s.x = 275, s.y = 285, s.visible = !0, s.on(ee.EVENT_OPENED, this._onGrateOpened, this), this.addChild(s), this._grate = s;
        var n = new O;
        n.clickCallback = function() {
            t.moveLeft()
        }, n.setHitAreaPolygon(234.56, 163.1, 309.48, 167.56, 308.58, 361.98, 235.45, 404.79), n.showHitArea(), this.addChild(n), this._clickArea = n
    }

    function Ci(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function Oi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._grateSaves = this.getActorSaves(o.GrateUc);
        var s = new ee(!0);
        s.x = 270, s.y = 285, s.on(ee.EVENT_OPENED, this._onGrateOpened, this), s.setAsInteractive(this._grateSaves), s.setOpen(this._grateSaves.opened), this.addChild(s);
        const n = [{
            x: -29,
            y: -116.5
        }, {
            x: 36,
            y: -112
        }, {
            x: -31,
            y: 104
        }, {
            x: 36,
            y: 68
        }];
        for (var a = 0; a < n.length; a++)
            if (!this._grateSaves["unscrewed" + a]) {
                var r = n[a],
                    h = new ie(a);
                h.x = s.x + r.x, h.y = s.y + r.y, h.on(ie.EVENT_UNSCREW, this._onScrewUncrew, this), this.addChild(h)
            }
        var c = new O;
        c.clickCallback = function() {
            t.moveLeft()
        }, c.setHitAreaPolygon(234.56, 163.1, 309.48, 167.56, 308.58, 361.98, 235.45, 404.79), c.showHitArea(), c.visible = this._grateSaves.opened, this.addChild(c), this._clickArea = c
    }

    function ki(t, e) {
        i.call(this, e, t, "uc_13_14_16")
    }

    function Ti(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function Ii(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._leverSaves = this.getActorSaves(o.LeverUc), this._cubeSaves = this.getActorSavesAnotherLocation(et._18, o.CubeUc);
        var s = new oe;
        s.x = 411, s.y = 191, s.validShaking = 0, s.setOn(this._leverSaves.isOn), s.setShaking(s.validShaking), this._leverSaves.isOn || s.on(oe.EVENT_ON, this._onLeverOn, this), this.addChild(s), this._lever = s
    }

    function Li(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesCube = this.getActorSaves(o.CubeUc), this._leverLeftSaves = this.getActorSavesAnotherLocation(et._17, o.LeverUc), this._leverRightSaves = this.getActorSavesAnotherLocation(et._19, o.LeverUc);
        var s = new Qt(this._leverLeftSaves, this._leverRightSaves);
        if (s.x = 415, s.y = 270, s.setOpened(this._savesCube.opened), s.setShaking(this._savesCube.shakingCount), this._savesCube.opened || (Qi.playState.on(dt.EVENT_CUBE_UC_SHAKING_CHANGE, this._onCubeShakingChanged, this), s.on(Qt.EVENT_OPENED, this._onCubeOpened, this)), this._cube = s, this.addChild(s), !this.isItemPickedUp(a.Cube)) {
            var n = new M;
            n.x = s.x, n.y = s.y, n.visible = this._savesCube.opened, n.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(n), this._cubeInv = n
        }
    }

    function Ei(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._leverSaves = this.getActorSaves(o.LeverUc), this._cubeSaves = this.getActorSavesAnotherLocation(et._18, o.CubeUc);
        var s = new oe;
        s.x = 390, s.y = 191, s.validShaking = 3, s.setOn(this._leverSaves.isOn), s.setShaking(s.validShaking), this._leverSaves.isOn || s.on(oe.EVENT_ON, this._onLeverOn, this), this.addChild(s), this._lever = s
    }

    function Ai(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._saves = this.getActorSaves("Binoculars");
        var s = new O;
        s.buttonMode = !1, s.clickCallbackScope = this, s.clickCallback = this._onClickArea, s.setHitAreaPolygon(338.91, 233.56, 410.26, 231.77, 407.58, 281.72, 391.53, 291.53, 395.99, 318.28, 363.88, 320.96, 365.66, 295.09, 346.04, 278.15), s.showHitArea(), this.addChild(s), this._clickArea = s, this._saves.put && (this._setBinoculars(new A), this._clickArea.buttonMode = !0)
    }

    function xi(t, e) {
        i.call(this, e, t, e.toLowerCase())
    }

    function Mi(t, e) {
        i.call(this, e, t, "uc_21_22")
    }

    function Ni(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !this.isItemPickedUp(a.BunkerKey)) {
            var s = new x;
            s.x = 535, s.y = 280, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        this._stoneSaves = this.getActorSaves(o.StoneUc);
        var n = new te;
        n.x = 660, n.y = 215, n.setOpen(this._stoneSaves.isPut), n.clickCallback = function() {
            t.moveRight()
        }, this.addChild(n), this._door = n;
        var r = new ne;
        r.x = 695, r.y = 320, r.buttonMode = !1, r.setPut(this._stoneSaves.isPut), r.on(ne.EVENT_OPENED, this._onStonePut, this), this.addChild(r)
    }

    function Pi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._rotatorSaves = this.getActorSavesAnotherLocation(it._07, o.RotatorVnt), this._closeSaves = this.getActorSaves(o.CloseSecretVnt);
        var s = new le(le.TYPE_DOWN);
        if (s.x = 394, s.y = 560, this.addChild(s), this._passDown = s, !this._closeSaves.broken) {
            var n = new re;
            n.x = 292, n.y = 307, n.on(re.EVENT_BRAKE, this._onCloseBrake, this), this.addChild(n)
        }
        this.setHitAreaUp(323.75, 80.16, 268.45, 28.43, 272.02, 2.56, 544.04, .78, 535.12, 35.56, 476.25, 81.94), this.setHitAreaLeft(47.27, 181.83, 122.19, 202.34, 125.75, 414.6, 44.59, 437.79, 0, 441.36, 0, 174.69), this.setHitAreaDown(265.77, 546.6, 318.39, 490.41, 474.47, 493.09, 534.23, 549.28, 531.55, 599.22, 268.45, 594.76)
    }

    function Di(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new E(2, this.name);
        s.x = 380, s.y = 300, this.addChild(s), this.setHitAreaRight(660.87, 164.88, 771.46, 146.15, 767.89, 427.09, 664.44, 360.2)
    }

    function Bi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._rotatorSaves = this.getActorSavesAnotherLocation(it._07, o.RotatorVnt);
        var s = new le(le.TYPE_LEFT);
        s.x = 35, s.y = 289, this.addChild(s), this._passLeft = s;
        var n = new le(le.TYPE_DOWN);
        n.x = 394, n.y = 560, this.addChild(n), this._passDown = n;
        var a = new le(le.TYPE_UP);
        a.x = 394, a.y = 30, this.addChild(a), this._passUp = a;
        var r = new le(le.TYPE_EXIT_OPEN);
        r.x = 710, r.y = 284, this.addChild(r), this._passExitOpen = r, this.setHitAreaUp(269.34, 2.56, 266.67, 17.73, 317.5, 89.07, 477.15, 86.4, 530.66, 21.29, 531.55, 2.56), this.setHitAreaDown(316.61, 480.6, 474.47, 479.71, 530.66, 553.73, 527.98, 597.44, 261.32, 599.22, 261.32, 543.92), this.setHitAreaRight(798.22, 154.18, 774.14, 152.4, 684.06, 212.15, 686.73, 363.77, 760.76, 419.96, 797.32, 418.17), this.setHitAreaLeft(2.68, 152.4, 52.62, 153.29, 97.21, 210.37, 99.89, 366.44, 49.05, 417.28, 1.78, 417.28)
    }

    function Hi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._rotatorSaves = this.getActorSavesAnotherLocation(it._07, o.RotatorVnt);
        var s = new le(le.TYPE_UP);
        s.x = 394, s.y = 30, this.addChild(s), this._passUp = s, this.setHitAreaLeft(.89, 153.29, 71.35, 206.8, 73.13, 361.98, 1.78, 419.96), this.setHitAreaRight(799.11, 152.4, 775.92, 151.51, 707.25, 206.8, 709.92, 358.42, 772.35, 412.82, 796.43, 414.6), this.setHitAreaUp(268.45, 8.81, 269.34, 1.67, 532.44, 2.56, 533.33, 17.73, 482.5, 89.07, 326.42, 88.18)
    }

    function Ri(t, e) {
        i.call(this, e, t, "vnt_04_09_12"), this.setHitAreaLeft(2.68, 155.07, 93.65, 210.37, 93.65, 367.34, 3.57, 417.28), this.setHitAreaRight(793.76, 155.96, 707.25, 211.26, 705.46, 365.55, 798.22, 419.96)
    }

    function Vi(t, e) {
        i.call(this, e, t, e.toLowerCase());
        var s = new le(le.TYPE_EXIT_DOWN);
        s.x = 412, s.y = 476, s.scale.set(1.09), this.addChild(s), this._passDown = s, this.setHitAreaDown(266.67, 555.52, 321.07, 484.17, 481.61, 479.71, 530.66, 552.84, 530.66, 596.54, 259.53, 594.76), this.setHitAreaLeft(121.29, 203.23, 24.08, 157.75, 0, 154.18, .89, 427.98, 25.86, 419.96, 121.29, 364.66), this.setHitAreaRight(794.65, 157.75, 730.43, 206.8, 725.08, 363.77, 797.32, 421.74)
    }

    function Ui(t, e) {
        if (i.call(this, e, t), this.setBg(this.isItemPickedUp(a.LightBulb) ? "vnt_06a" : "vnt_06b"), !this.isItemPickedUp(a.Stone)) {
            var s = new K;
            s.x = 722, s.y = 198, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        if (!this.isItemPickedUp(a.LightBulb)) {
            var o = new R("lamp_vnt");
            o.x = 124, o.y = 272, o.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(o)
        }
        this.setHitAreaUp(258.64, 19.51, 544.93, 17.73, 502.12, 70.35, 312.15, 71.24)
    }

    function Fi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._rotatorSaves = this.getActorSaves(o.RotatorVnt), this._coverSaves = this.getActorSaves(o.CoverVnt);
        var s = new de;
        s.x = 355, s.y = 240, s.setGear(this._rotatorSaves.isGearSet), s.setRotate(this._rotatorSaves.rotIndex), s.on(de.EVENT_CHANGE, this._onRotatorChange, this), this.addChild(s);
        var n = new ce;
        n.x = 365, n.y = 395, n.setOpen(this._coverSaves.isOpen), n.on(ce.EVENT_CHANGE, this._onCoverChange, this), this.addChild(n), this.setHitAreaRight(773.24, 145.26, 658.19, 167.56, 655.52, 361.09, 771.46, 432.44)
    }

    function Xi(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !this.isItemPickedUp(a.Screwdriver)) {
            var s = new j;
            s.x = 450, s.y = 400, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        this._grateSaves = this.getActorSavesAnotherLocation(et._12, o.GrateUc);
        var n = new le(le.TYPE_EXIT_CLOSE);
        n.x = 710, n.y = 287, n.scale.y = 1.1, this.addChild(n), this._passExitClose = n, this.setHitAreaRight(796.43, 155.07, 725.98, 208.58, 721.52, 365.55, 798.22, 416.39), this.setHitAreaLeft(3.57, 157.75, 89.19, 207.69, 90.97, 365.55, 0, 419.06)
    }

    function Gi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaLeft(1.78, 148.83, 75.81, 205.91, 74.02, 360.2, .89, 416.39), this.setHitAreaRight(797.32, 150.61, 726.87, 206.8, 724.19, 362.88, 795.54, 417.28), this.setHitAreaUp(321.07, 85.51, 271.13, 20.4, 268.45, 2.56, 539.58, 1.67, 532.44, 19.51, 476.25, 87.29)
    }

    function ji(t, e) {
        i.call(this, e, t, e.toLowerCase()), this._savesControl = this.getActorSaves(o.ControlVnt), this._savesBigControl = this.getActorSaves(o.BigControlVnt);
        var s = new O;
        s.clickCallback = function() {
            t.moveLeft()
        }, s.setHitAreaPolygon(294.31, 95.32, 441.47, 96.21, 468.23, 183.61, 319.29, 188.96), s.showHitArea(), s.clickCallback = function() {
            t.fadeA()
        }, this.addChild(s);
        var n = new he(1, 0);
        n.x = 63, n.y = 108, n.on(he.EVENT_CHANGE, this._onControlChanged, this), n.setPos(this._savesControl.pos1), this.addChild(n);
        var a = new he(2, 1);
        a.x = 118, a.y = 108, a.on(he.EVENT_CHANGE, this._onControlChanged, this), a.setPos(this._savesControl.pos2), this.addChild(a);
        var r = new he(3, 2);
        r.x = 168, r.y = 108, r.on(he.EVENT_CHANGE, this._onControlChanged, this), r.setPos(this._savesControl.pos3), this.addChild(r);
        var h = new he(4, 1);
        h.x = 218, h.y = 108, h.on(he.EVENT_CHANGE, this._onControlChanged, this), h.setPos(this._savesControl.pos4), this.addChild(h);
        var c = new ae;
        c.x = 325, c.y = 210, c.setOn(this._savesBigControl.isOn), c.on(ae.EVENT_CHANGE, this._onBigControlChanged, this), this.addChild(c), this.setHitAreaDown(229.21, 534.11, 464.66, 489.52, 607.36, 582.27, 523.52, 598.33, 304.12, 598.33)
    }

    function Wi(t, e) {
        if (i.call(this, e, t), this._savesBigControl = this.getActorSavesAnotherLocation(it._11, o.BigControlVnt), this._showEffect = !1, this.setHitAreaDown(0, 0, 800, 0, 800, 600, 0, 600), this._showEffect) {
            this.setBg(this._savesBigControl.isLightOn ? "sbw_03a" : "sbw_03");
            var s = new PIXI.Graphics;
            s.beginFill(9232791, .35), s.drawRect(0, 0, 800, 600), this.addChild(s), this._filter = new PIXI.filters.CRTFilter({
                sepia: 0,
                noise: .2,
                noiseSize: 1,
                scratch: .5,
                scratchDensity: .3,
                scratchWidth: 2,
                vignetting: .4,
                vignettingAlpha: 1,
                vignettingBlur: .3,
                lineContrast: .8
            }, 100), this.filters = [this._filter]
        } else this.setBg(this._savesBigControl.isLightOn ? "vnt_11a" : "vnt_11b")
    }

    function Ki(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaDown(324.64, 486.85, 484.28, 485.06, 534.23, 547.49, 533.33, 594.76, 270.23, 594.76, 267.56, 548.38), this.setHitAreaRight(796.43, 158.64, 730.43, 210.37, 728.65, 364.66, 798.22, 419.06)
    }

    function zi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaDown(324.64, 486.85, 484.28, 485.06, 534.23, 547.49, 533.33, 594.76, 270.23, 594.76, 267.56, 548.38), this.setHitAreaUp(325.53, 76.59, 265.77, 23.08, 269.34, 1.67, 535.12, 1.67, 532.44, 43.59, 480.71, 75.7)
    }

    function Yi(t, e) {
        i.call(this, e, t, e.toLowerCase()), this.setHitAreaDown(324.64, 486.85, 484.28, 485.06, 534.23, 547.49, 533.33, 594.76, 270.23, 594.76, 267.56, 548.38), this.setHitAreaUp(321.96, 77.48, 269.34, 29.32, 269.34, 3.46, 535.12, .78, 534.23, 40.02, 479.82, 79.26)
    }

    function Zi(t, e, s) {
        i.call(this, s, t, s.toLowerCase()), this.addChild(new pe(e)), this.setHitAreaRight(684.95, 158.64, 758.97, 130.99, 760.76, 543.03, 740.25, 549.28, 680.49, 503.79)
    }

    function Ji(t, e, i, o) {
        s.call(this, t, e, "wt_02_03_04", i), this.addChild(new pe(o)), this.setHitAreaRight(681.38, 151.51, 765.22, 123.86, 759.87, 545.71, 736.68, 548.38, 680.49, 505.57)
    }

    function qi(t, e, i) {
        s.call(this, t, i, i.toLowerCase(), e), this._doorSaves = this.getActorSaves(o.DoorWt);
        var n = new ue;
        n.x = .5 * Qi.gameWidth0 + 60, n.y = Qi.gameHeight0 - .5 * n.height - 90, n.open(), n.portalClickCallback = function() {
            t.fadeA(!0)
        }, n.on(k.EVENT_DOOR_OPEN, this._onDoorOpen, this), this.addChild(n), this._doorLeft.x = 130, this._doorLeft.y = 332, this._doorLeft.scale.y = 1.1
    }

    function $i(t, e) {
        if (i.call(this, e, t, e.toLowerCase()), !this.isItemPickedUp(a.DoorHandleItem)) {
            var s = new N;
            s.x = 500, s.y = 500, s.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(s)
        }
        if (!this.isItemPickedUp(a.Notes)) {
            var o = new U(this.name.toLowerCase());
            o.sprScr.rotation = g.toRadians(-6), o.x = 550, o.y = 200, o.on(a.EVENT_CLICK_SCR, this._onItemClick, this), this.addChild(o)
        }
    }
    b.generateFrameNames = function(t, e, i, s, o) {
        void 0 === s && (s = "");
        var n, a = [],
            r = "";
        if (e < i)
            for (n = e; n <= i; n++) r = t + (r = "number" == typeof o ? b.pad(n.toString(), o, "0", 1) : n.toString()) + s, a.push(r);
        else
            for (n = e; n >= i; n--) r = t + (r = "number" == typeof o ? b.pad(n.toString(), o, "0", 1) : n.toString()) + s, a.push(r);
        return a
    }, b.pad = function(t, e, i, s) {
        void 0 === e && (e = 0), void 0 === i && (i = " "), void 0 === s && (s = 3);
        var o = 0;
        if (e + 1 >= t.length) switch (s) {
            case 1:
                t = Array(e + 1 - t.length).join(i) + t;
                break;
            case 3:
                var n = Math.ceil((o = e - t.length) / 2);
                t = Array(o - n + 1).join(i) + t + Array(n + 1).join(i);
                break;
            default:
                t += Array(e + 1 - t.length).join(i)
        }
        return t
    }, b.atHome = function(e) {
        return true
    }, b.addBackground = function(t, e) {
        PIXI.loader.add(t + "_" + e, "images/levels/" + t + "/" + e + ".png")
    }, b.drawClickPointOnDO = function(t, e) {
        null == t.__points && (t.__points = []);
        var i = t.toLocal(e),
            s = new PIXI.Graphics;
        s.beginFill(16711680), s.drawCircle(i.x, i.y, 3), s.endFill(), t.addChild(s), t.__points.push(i);
        for (var o = "", n = 0; n < t.__points.length; n++) o += (i = t.__points[n]).x.toFixed(2) + ", " + i.y.toFixed(2) + (n < t.__points.length - 1 ? ", " : "");
        trace(o)
    }, b.setHitAreaSize = function(t, e, i, s, o) {
        s = s || 0, o = o || 0, t.hitArea = new PIXI.Rectangle(.5 * -e + s, .5 * -i + o, e, i)
    }, b.setHitAreaPolygon = function(t) {
        t.hitArea = new PIXI.Polygon(Array.prototype.slice.call(arguments, b.setHitAreaPolygon.length))
    }, b.showHitArea = function(t) {
        if (null != t.hitArea) {
            var e = t.hitArea,
                i = t._hitAreaG || new PIXI.Graphics;
            i.clear(), i.beginFill(16711680, .3), e instanceof PIXI.Rectangle ? i.drawRect(e.x, e.y, e.width, e.height) : e instanceof PIXI.Polygon && i.drawPolygon(e.points), t.addChild(i), t._hitAreaG = i
        }
    }, b.generateTextureFromText = function(t, e, i) {
        var s;
        if (void 0 != i && (s = Qi.assets.getTexture(i)), void 0 == s) {
            var o = new PIXI.Text(t, e);
            o.updateText(), s = o.texture, void 0 != i && Qi.assets.addTexture(i, s)
        }
        return s
    }, b.scaleToWindow = function(e) {
        const i = t.innerWidth,
            s = t.innerHeight,
            o = e.offsetWidth,
            n = e.offsetHeight,
            a = Math.min(i / o, s / n),
            r = Math.ceil(o * a),
            h = Math.ceil(n * a);
        let c;
        if (e.style.transformOrigin = "0 0", e.style.transform = "scale(" + a + ")", "horizontally" === (c = o > n ? r < i ? "horizontally" : "vertically" : h < s ? "vertically" : "horizontally")) {
            const t = .5 * (i - r);
            e.style.marginTop = "0px", e.style.marginBottom = "0px", e.style.marginLeft = t + "px", e.style.marginRight = t + "px"
        }
        if ("vertically" === c) {
            const t = .5 * (s - h);
            e.style.marginTop = t + "px", e.style.marginBottom = t + "px", e.style.marginLeft = "0px", e.style.marginRight = "0px"
        }
        return e.style.paddingLeft = "0px", e.style.paddingRight = "0px", e.style.paddingTop = "0px", e.style.paddingBottom = "0px", e.style.display = "block", a
    }, C.prototype = {
        rnd: function() {
            var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            return this.c = 0 | t, this.s0 = this.s1, this.s1 = this.s2, this.s2 = t - this.c, this.s2
        },
        sow: function(t) {
            var e;
            void 0 === t && (t = []), this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1;
            for (var i = 0; e = t[i++];) this.s0 -= this.hash(e), this.s0 += ~~(this.s0 < 0), this.s1 -= this.hash(e), this.s1 += ~~(this.s1 < 0), this.s2 -= this.hash(e), this.s2 += ~~(this.s2 < 0)
        },
        hash: function(t) {
            var e, i, s;
            for (s = 4022871197, t = t.toString(), i = 0; i < t.length; i++) e = .02519603282416938 * (s += t.charCodeAt(i)), e -= s = e >>> 0, s = (e *= s) >>> 0, s += 4294967296 * (e -= s);
            return 2.3283064365386963e-10 * (s >>> 0)
        },
        integer: function() {
            return 4294967296 * this.rnd.apply(this)
        },
        frac: function() {
            return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
        },
        real: function() {
            return this.integer() + this.frac()
        },
        integerInRange: function(t, e) {
            return Math.round(this.realInRange(t, e))
        },
        realInRange: function(t, e) {
            return this.frac() * (e - t) + t
        },
        normal: function() {
            return 1 - 2 * this.frac()
        },
        uuid: function() {
            var t = "",
                e = "";
            for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
            return e
        },
        pick: function(t) {
            return t[this.integerInRange(0, t.length - 1)]
        },
        weightedPick: function(t) {
            return t[~~(Math.pow(this.frac(), 2) * t.length)]
        },
        timestamp: function(t, e) {
            return this.realInRange(t || 9466848e5, e || 1577862e6)
        }
    }, O.prototype = Object.create(o.prototype), O.prototype.constructor = O, O.prototype._clickTap = function(t) {
        this.showClickCanvas ? b.drawClickPointOnDO(this, t.data.global) : this.clickCallback.call(this.clickCallbackScope)
    }, k.prototype = Object.create(o.prototype), k.prototype.constructor = k, k.EVENT_DOOR_OPEN = "DoorOpen", k.EVENT_HANDLE_CREATED = "handle_created", k.EVENT_CHANGE = "change", k.prototype.setSound = function(t) {
        this.sndDoorOpen = Qi.assets.getSound(t)
    }, k.prototype.createPortal = function() {
        this._portal = new I, this._portal.width = this.sprMain.width - 60, this._portal.height = this.sprMain.height - 95, this._portal.y = -20, this._portal.visible = !1, this.addChildAt(this._portal, 0)
    }, k.prototype.createHandle = function() {
        if (!this._handle) {
            var t = new T;
            t.x -= 59, t.y -= 19, t.visible = !this.opened, this.addChild(t), this._handle = t, this.emit(k.EVENT_HANDLE_CREATED, this)
        }
    }, k.prototype.open = function() {
        !0 !== this.opened && (this.opened = !0, this._portal && this._portal.play(), this._handle && (this._handle.visible = !1), this.sprMain.visible = !1, this._doorAnim.visible = !0, this._doorAnim.gotoAndStop(this._doorAnim.totalFrames - 1))
    }, k.prototype.openAnim = function() {
        !0 !== this.opened && (this.opened = !0, this._portal && this._portal.play(), this._handle ? this._handle.open(function() {
            this._handle.visible = !1, this.sprMain.visible = !1, this._doorAnim.visible = !0, this._doorAnim.animationSpeed = this._defaultAnimSpeed, this._doorAnim.onComplete = null, this._doorAnim.play()
        }, this) : (this._doorAnim.animationSpeed = this._defaultAnimSpeed, this._doorAnim.onComplete = null, this.sprMain.visible = !1, this._doorAnim.visible = !0, this._doorAnim.play()), this.emit(k.EVENT_DOOR_OPEN, this), this.emit(k.EVENT_CHANGE, this), Qi.soundOn && this.sndDoorOpen.play())
    }, k.prototype.close = function() {
        !1 !== this.opened && (this.opened = !1, this._portal && this._portal.stop(), this._handle && (this._handle.visible = !0), this.sprMain.visible = !0, this._doorAnim.visible = !1, this._doorAnim.gotoAndStop(0))
    }, k.prototype.closeAnim = function() {
        if (!1 !== this.opened) {
            this.opened = !1, this._portal && this._portal.stop();
            var t = this;
            this._doorAnim.animationSpeed = -this._defaultAnimSpeed, this._doorAnim.onComplete = function() {
                this._handle && (this._handle.visible = !0), t.sprMain.visible = !0, t._doorAnim.visible = !1
            }, this._doorAnim.play(), Qi.soundOn && this.sndDoorOpen.play(), this.emit(k.EVENT_CHANGE, this)
        }
    }, k.prototype.isEnableToOpen = function() {
        return null == this.invItemNameToOpen
    }, k.prototype._clickTap = function(t) {
        var e = Qi.playState.inventory;
        this.opened ? (this.portalClickCallback.call(this.portalClickCallbackScope), this._portal && this._portal.interact()) : null != this.invItemNameToOpen && null != e.selected && e.selected.name == this.invItemNameToOpen ? (e.remove(e.selected), this.openAnim()) : this.isEnableToOpen() ? this.openAnim() : this._handle && this._handle.lockAnimation()
    }, T.prototype = Object.create(o.prototype), T.prototype.constructor = T, T.prototype.lockAnimation = function() {
        if (!this.working) {
            this.working = !0;
            var t = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.working = !1
                }
            });
            t.to(this, .2, {
                rotation: g.toRadians(45)
            }), t.to(this, .2, {
                rotation: g.toRadians(0),
                ease: Back.easeOut.config(2)
            }), Qi.soundOn && this.sndDoorHandleLock.play()
        }
    }, T.prototype.open = function(t, e) {
        this.working || (this.working = !0, TweenMax.to(this, .5, {
            rotation: g.toRadians(45),
            onComplete: t,
            onCompleteScope: e
        }), Qi.soundOn && this.sndDoorHandleOpen.play())
    }, I.prototype = Object.create(o.prototype), I.prototype.constructor = I, I.prototype.play = function() {
        this.visible = !0, this.anim.play()
    }, I.prototype.stop = function() {
        this.visible = !1, this.anim.stop()
    }, I.prototype.interact = function() {
        Qi.soundOn && this.sndTeleport.play()
    }, L.prototype = Object.create(o.prototype), L.prototype.constructor = L, L.prototype.playMinusX = function(t) {
        t = t || 1, this._play(-t, 0)
    }, L.prototype.playPlusX = function(t) {
        t = t || 1, this._play(t, 0)
    }, L.prototype.playMinusY = function(t) {
        t = t || 1, this._play(0, -t)
    }, L.prototype.playPlusY = function(t) {
        t = t || 1, this._play(0, t)
    }, L.prototype._play = function(t, e) {
        TweenMax.fromTo(this.sprMain, .05, {
            x: t,
            y: e
        }, {
            delay: .2 * Math.random(),
            x: -t,
            y: -e,
            repeat: -1,
            ease: Power0.easeNone,
            yoyo: !0
        })
    }, L.prototype.destroy = function(t) {
        TweenMax.killTweensOf(this.sprMain), PIXI.Container.prototype.destroy.call(this, t)
    }, E.prototype = Object.create(o.prototype), E.prototype.constructor = E, E.prototype.setOn = function(t) {
        this.interactive = !t, this.buttonMode = !t, this.sprMain.texture = Qi.assets.getTexture(t ? this._texNameOn : this._texName, "atlasItems")
    }, E.prototype._clickTap = function() {
        this.setOn(!0), Qi.playState.signs.setSignOn(this.index), Qi.soundOn && this.sndCollectSign.play()
    }, A.prototype = Object.create(a.prototype), A.prototype.constructor = A, x.prototype = Object.create(a.prototype), x.prototype.constructor = x, M.prototype = Object.create(a.prototype), M.prototype.constructor = M, N.prototype = Object.create(a.prototype), N.prototype.constructor = N, P.prototype = Object.create(a.prototype), P.prototype.constructor = P, D.prototype = Object.create(a.prototype), D.prototype.constructor = D, B.prototype = Object.create(a.prototype), B.prototype.constructor = B, B.prototype.bang = function(t) {
        Qi.playState.setEnableInteractive(!1), this.sprScr.interactive = !1, this.sprScr.anchor.set(.5, .85), this.rotation = g.toRadians(-20), TweenMax.to(this, 2, {
            rotation: g.toRadians(-45)
        });
        var e = new TimelineMax;
        e.to(this, 1.5, {
            rotation: g.toRadians(-45)
        }), e.to(this, .05, {
            rotation: g.toRadians(15),
            ease: Power2.easeOut
        }), e.call(t.bang, null, t), e.call(Qi.playState.setEnableInteractive, [!0], Qi.playState), e.add(function() {}, "+=1"), e.call(function() {
            this.visible = !1
        }, null, this)
    }, H.prototype = Object.create(a.prototype), H.prototype.constructor = H, R.prototype = Object.create(a.prototype), R.prototype.constructor = R, V.prototype = Object.create(a.prototype), V.prototype.constructor = V, U.prototype = Object.create(a.prototype), U.prototype.constructor = U, F.prototype = Object.create(a.prototype), F.prototype.constructor = F, X.prototype = Object.create(a.prototype), X.prototype.constructor = X, X.prototype.playShowDropAnimation = function() {
        this._sprDrop.alpha = 0, TweenLite.to(this._sprDrop, .5, {
            alpha: 1
        })
    }, X.prototype.playOilingAnimation = function(t) {
        var e = this;
        t.to(this.sprInv, .3, {
            rotation: g.toRadians(45)
        });
        for (var i = [], s = 0; s < 3; s++) {
            var o = Qi.assets.getSprite("oil_drop", "atlasItems", !0);
            o.scale.set(.7, .7), o.x = 62, o.y = 22, o.visible = !1, e.addChild(o), i.push(TweenLite.to(o, .3, {
                delay: .1 * s,
                y: "+=40",
                ease: Power1.easeIn,
                onStartScope: o,
                onStart: function() {
                    Qi.soundOn && e.sndOilDropMn01.play(), this.visible = !0
                }
            })), i.push(TweenLite.to(o, .3, {
                delay: .1 * s + .3,
                alpha: 0
            }))
        }
        t.add(i), t.to(e, .3, {
            alpha: 0,
            onComplete: function() {
                e.visible = !1
            }
        })
    }, G.prototype = Object.create(a.prototype), G.prototype.constructor = G, j.prototype = Object.create(a.prototype), j.prototype.constructor = j, W.prototype = Object.create(a.prototype), W.prototype.constructor = W, K.prototype = Object.create(a.prototype), K.prototype.constructor = K, z.prototype = Object.create(a.prototype), z.prototype.constructor = z, Y.prototype = Object.create(n.prototype), Y.prototype.constructor = Y, Y._name = "LevelBnk", Y._01 = "Bnk_01", Y._02 = "Bnk_02", Y._03 = "Bnk_03", Y._04 = "Bnk_04", Y._05 = "Bnk_05", Y._06 = "Bnk_06", Y._07 = "Bnk_07", Y._08 = "Bnk_08", Y._09 = "Bnk_09", Z.prototype = Object.create(n.prototype), Z.prototype.constructor = Z, Z._name = "LevelCb", J.prototype = Object.create(n.prototype), J.prototype.constructor = J, J._name = "LevelLw", J._01 = "Lw_01", J._02 = "Lw_02", J._03 = "Lw_03", J._04 = "Lw_04", J._05 = "Lw_05", J._06 = "Lw_06", J._07 = "Lw_07", J._08 = "Lw_08", J._09 = "Lw_09", J._10 = "Lw_10", J._11 = "Lw_11", J._12 = "Lw_12", q.prototype = Object.create(n.prototype), q.prototype.constructor = q, q._name = "LevelMn", q._01 = "Mn_01", q._01a = "Mn_01a", q._02 = "Mn_02", q._02a = "Mn_02a", q._03 = "Mn_03", q._04 = "Mn_04", q._05 = "Mn_05", q._06 = "Mn_06", q._07 = "Mn_07", q._08 = "Mn_08", q._09 = "Mn_09", q._09a = "Mn_09a", $.prototype = Object.create(n.prototype), $.prototype.constructor = $, $._name = "LevelPr", $._01 = "Pr_01", $._02 = "Pr_02", $._02a = "Pr_02a", Q.prototype = Object.create(n.prototype), Q.prototype.constructor = Q, Q._name = "LevelSbw", Q._00 = "Sbw_00", Q._01 = "Sbw_01", Q._02 = "Sbw_02", Q._03 = "Sbw_03", Q._04 = "Sbw_04", Q._05 = "Sbw_05", Q._06 = "Sbw_06", Q._07 = "Sbw_07", Q._08 = "Sbw_08", Q._09 = "Sbw_09", Q._10 = "Sbw_10", Q._11 = "Sbw_11", Q._12 = "Sbw_12", Q._13 = "Sbw_13", Q._14 = "Sbw_14", Q._15 = "Sbw_15", Q._16 = "Sbw_16", tt.prototype = Object.create(n.prototype), tt.prototype.constructor = tt, tt._name = "LevelTbt", tt._01 = "Tbt_01", tt._02 = "Tbt_02", tt._03 = "Tbt_03", tt._04 = "Tbt_04", tt._05 = "Tbt_05", tt._06 = "Tbt_06", tt._07 = "Tbt_07", tt._08 = "Tbt_08", et.prototype = Object.create(n.prototype), et.prototype.constructor = et, et._name = "LevelUc", et._01 = "Uc_01", et._02 = "Uc_02", et._03 = "Uc_03", et._04 = "Uc_04", et._05 = "Uc_05", et._06 = "Uc_06", et._06a = "Uc_06a", et._07 = "Uc_07", et._08 = "Uc_08", et._09 = "Uc_09", et._10 = "Uc_10", et._11 = "Uc_11", et._12 = "Uc_12", et._13 = "Uc_13", et._14 = "Uc_14", et._15 = "Uc_15", et._16 = "Uc_16", et._17 = "Uc_17", et._18 = "Uc_18", et._19 = "Uc_19", et._20 = "Uc_20", et._20a = "Uc_20a", et._21 = "Uc_21", et._22 = "Uc_22", et._23 = "Uc_23", it.prototype = Object.create(n.prototype), it.prototype.constructor = it, it._name = "LevelVnt", it._01 = "Vnt_01", it._01a = "Vnt_01a", it._02 = "Vnt_02", it._03 = "Vnt_03", it._04 = "Vnt_04", it._05 = "Vnt_05", it._06 = "Vnt_06", it._07 = "Vnt_07", it._08 = "Vnt_08", it._09 = "Vnt_09", it._10 = "Vnt_10", it._11 = "Vnt_11", it._11a = "Vnt_11a", it._12 = "Vnt_12", it._13 = "Vnt_13", it._14 = "Vnt_14", it._15 = "Vnt_15", st.prototype = Object.create(n.prototype), st.prototype.constructor = st, st._name = "LevelWt", st._01 = "Wt_01", st._02 = "Wt_02", st._03 = "Wt_03", st._04 = "Wt_04", st._05 = "Wt_05", st._06 = "Wt_06", ot.prototype.constructor = ot, ot.prototype.getText = function(t) {
        return this._data.hasOwnProperty(t) ? this._data[t] : "<key: " + t + " not found>"
    }, nt.prototype = Object.create(PIXI.Container.prototype), nt.prototype.constructor = nt, nt.prototype.destroy = function() {
        PIXI.Container.prototype.destroy.call(this), key.unbind("w"), key.unbind("a"), key.unbind("s"), key.unbind("d"), key.unbind("up"), key.unbind("down"), key.unbind("right"), key.unbind("left")
    }, nt.prototype.go = function(t, e) {
        Qi.playState.emit(dt.EVENT_ZONE_CLICK, t, e)
    }, nt.prototype._onBtnsClick = function(t) {
        this.go(t.target.name.toLowerCase(), !1)
    }, nt.prototype._onLocationChanged = function(t) {
        this._btnUp.enable = this._btnUp.visible = t.isCanUp() && t.currLocation.isGoUpByClickZone(), this._btnRight.enable = this._btnRight.visible = t.isCanRight() && t.currLocation.isGoRightByClickZone(), this._btnDown.enable = this._btnDown.visible = t.isCanDown() && t.currLocation.isGoDownByClickZone(), this._btnLeft.enable = this._btnLeft.visible = t.isCanLeft() && t.currLocation.isGoLeftByClickZone()
    }, nt.prototype.updateSizes = function() {
        var t = Qi.playState.inventory.bar,
            e = Qi.playState.inventory.btnArrow,
            i = t.toGlobal(e);
        i = this.toLocal(i), this._btnLeft.y = 2, this._btnLeft.width = 90, this._btnLeft.height = t.y - t.height - 4, this._btnRight.x = Qi.gameWidth0 - 90, this._btnRight.y = 2, this._btnRight.width = 90, this._btnRight.height = i.y - .5 * e.height - 4, this._btnUp.x = 92, this._btnUp.width = Qi.gameWidth0 - 180 - 4, this._btnUp.height = 60;
        var s = this._btnRight.x - 90 - 4,
            o = i.x - .5 * e.width - 90 - 4;
        this._btnDown.width = s < o ? s : o, this._btnDown.height = 60, this._btnDown.x = 92, this._btnDown.y = t.y - t.height - this._btnDown.height
    }, at.prototype = Object.create(PIXI.Container.prototype), at.prototype.constructor = at, at.prototype.init = function() {
        let t;
        if (this._saves = Qi.saveData.getOrCreateObject("LevelMng"), this._createdLevels = new u("Levels"), Qi.playState.on(dt.EVENT_LOCATION_CHANGED, this._onLocationChanged, this), Qi.runRelease) {
            const e = this._saves.levelName;
            (t = void 0 != e ? this.create(e) : this.create(tt._name)).activate(this._saves.locationName)
        } else(t = this.create(q._name)).activate(q._01)
    }, at.prototype.create = function(t) {
        let e = this._createdLevels.getFieldKeyValue("name", t);
        if (e) return e;
        switch (t) {
            case tt._name:
                e = new tt;
                break;
            case q._name:
                e = new q;
                break;
            case Y._name:
                e = new Y;
                break;
            case et._name:
                e = new et;
                break;
            case it._name:
                e = new it;
                break;
            case $._name:
                e = new $;
                break;
            case J._name:
                e = new J;
                break;
            case Q._name:
                e = new Q;
                break;
            case Z._name:
                e = new Z;
                break;
            case st._name:
                e = new st
        }
        return e ? (this._createdLevels.add(e), this.addChildAt(e, 0), e) : null
    }, at.prototype.get = function(t) {
        return this.create(t)
    }, at.prototype._onLocationChanged = function(t) {
        t.currLocation.saveStayingHere && (this._saves.levelName = t.name, this._saves.locationName = t.currLocation.name, Qi.forceSaveData())
    }, rt.prototype.constructor = rt, ht.prototype = Object.create(PIXI.Container.prototype), ht.prototype.constructor = ht, ht.prototype.run = function(t, e) {
        if (!this.running) {
            this.running = !0, t && this.once("onMiddle", t, e || this);
            var i = this;
            this.show(function() {
                TweenMax.delayedCall(.1, function() {
                    i.emit("onMiddle"), TweenMax.delayedCall(.1, function() {
                        i.hide(function() {
                            i.running = !1
                        })
                    }, this)
                }, null, this)
            }, this)
        }
    }, ht.prototype.show = function(t, e) {
        t && this.once("showComplete", t, e || this);
        var i = this;
        TweenMax.to(this, .4, {
            alpha: 1,
            onComplete: function() {
                i.emit("showComplete")
            }
        })
    }, ht.prototype.hide = function(t, e) {
        t && this.once("hideComplete", t, e || this);
        var i = this;
        TweenMax.to(this, .4, {
            alpha: 0,
            onComplete: function() {
                i.emit("hideComplete")
            }
        })
    }, ct.prototype = Object.create(PIXI.Container.prototype), ct.prototype.constructor = ct, ct.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "Next":
                this._currCount++, this._currCount > this._maxCount ? (Qi.shutter.run(function() {
                    this.destroy({
                        children: !0
                    }), Qi.introState = null, new dt
                }, this), this._currCount = this._maxCount) : this.validate();
                break;
            case "Prev":
                this._currCount--, this._currCount < 1 ? (Qi.shutter.run(function() {
                    this.destroy({
                        children: !0
                    }), Qi.introState = null, new lt
                }, this), this._currCount = 1) : this.validate();
                break;
            case "Stop":
                Qi.shutter.run(function() {
                    this.destroy({
                        children: !0
                    }), Qi.introState = null, new dt
                }, this)
        }
        Qi.soundOn && this.sndButton.play()
    }, ct.prototype.validate = function() {
        if (this._btnPrev.visible = this._currCount > 1, this.working) return;
        if (this.working = !0, this.interactiveChildren = !1, this._currCount == this._currText.textCount) return;
        var t = this._currText,
            e = this.createText(this._currCount);
        TweenLite.to(t, .5, {
            alpha: 0,
            onComplete: function() {
                t.destroy(!0)
            }
        }), e.alpha = 0, this._currText = e, TweenLite.to(e, .5, {
            delay: .5,
            alpha: 1,
            onCompleteScope: this,
            onComplete: function() {
                this.working = !1, this.interactiveChildren = !0
            }
        })
    }, ct.prototype.createText = function(t) {
        var e = new PIXI.Text(Qi.loc.getText("intro_" + t), this._style);
        return e.textCount = t, e.x = .5 * Qi.gameWidth0, e.y = .5 * Qi.gameHeight0, e.anchor.set(.5, .5), e.scale.set(.5, .5), this.addChild(e), e
    }, lt.prototype = Object.create(PIXI.Container.prototype), lt.prototype.constructor = lt, lt.prototype.showMain = function() {
        this._main.visible = !0, TweenLite.to(this._main, .5, {
            alpha: 1
        })
    }, lt.prototype.hideMain = function() {
        TweenLite.to(this._main, .2, {
            alpha: 0,
            onCompleteScope: this,
            onComplete: function() {
                this._main.visible = !1
            }
        })
    }, lt.prototype.showCredits = function() {
        if (null == this._credits) {
            this._credits = new PIXI.Container, this.addChild(this._credits);
            const t = 2,
                i = 15,
                s = 50;
            let o = new PIXI.TextStyle({
                    fontFamily: "RoughDraft",
                    fontSize: 60,
                    fill: "#FFFFFF",
                    padding: 100
                }),
                n = new PIXI.Text("THE GAME BY IGOR KRUTOV", o);
            n.scale.set(.5, .5), n.anchor.set(.5, .5), n.y = .5 * n.height, this._credits.addChild(n);
            let a = new PIXI.TextStyle({
                    fontFamily: "RoughDraft",
                    fontSize: 36,
                    fill: "#FFFFFF",
                    padding: 100
                }),
                r = new PIXI.Text("IGOR KRUTOV", a);
            r.scale.set(.5, .5), r.anchor.set(.5, .5), r.y = n.y + .5 * n.height + .5 * r.height + i, this._credits.addChild(r);
            let h = new PIXI.Text("GAME DESIGN, ANIMATIONS", a);
            h.scale.set(.5, .5), h.anchor.set(.5, .5), h.y = r.y + .5 * r.height + .5 * h.height + t, this._credits.addChild(h);
            let c = new PIXI.Text("OLEG KUZYK", a);
            c.scale.set(.5, .5), c.anchor.set(.5, .5), c.y = h.y + .5 * h.height + .5 * c.height + i, this._credits.addChild(c);
            let l = new PIXI.Text("CODE", a);
            l.scale.set(.5, .5), l.anchor.set(.5, .5), l.y = c.y + .5 * c.height + .5 * l.height + t, this._credits.addChild(l);
            let d = new PIXI.Text("YEVGENY SMOLKIN", a);
            d.scale.set(.5, .5), d.anchor.set(.5, .5), d.y = l.y + .5 * l.height + .5 * d.height + i, this._credits.addChild(d);
            let p = new PIXI.Text("ART", a);
            p.scale.set(.5, .5), p.anchor.set(.5, .5), p.y = d.y + .5 * d.height + .5 * p.height + t, this._credits.addChild(p);
            let u = new PIXI.Text("ALEXANDR ZHELANOV", a);
            u.scale.set(.5, .5), u.anchor.set(.5, .5), u.y = p.y + .5 * p.height + .5 * u.height + i, this._credits.addChild(u);
            let _ = new PIXI.Text("MUSIC AND SFX", a);
            _.scale.set(.5, .5), _.anchor.set(.5, .5), _.y = u.y + .5 * u.height + .5 * _.height + t, this._credits.addChild(_);
            let y = new e(b.generateTextureFromText("BACK", o, "btnCreditsBack"), this._onBtnsClick, this);
            y.name = "CreditsBack", y.anchor.set(.5, .5), y.scale.set(.5, .5), y.y = _.y + .5 * _.height + .5 * y.height + s, this._credits.addChild(y), this._credits.x = 400, this._credits.y = 300 - .5 * this._credits.height + 40
        }
        this._credits.visible = !0, this._credits.alpha = 0, TweenLite.to(this._credits, .5, {
            alpha: 1
        })
    }, lt.prototype.hideCredits = function() {
        null != this._credits && TweenLite.to(this._credits, .2, {
            alpha: 0,
            onCompleteScope: this,
            onComplete: function() {
                this._credits.visible = !1
            }
        })
    }, lt.prototype.showDeleteSaves = function() {
        if (null == this._deleteSaves) {
            this._deleteSaves = new PIXI.Container, this.addChild(this._deleteSaves);
            const t = 20;
            let i = new PIXI.TextStyle({
                    fontFamily: "RoughDraft",
                    fontSize: 90,
                    fill: "#FFFFFF",
                    padding: 100
                }),
                s = new PIXI.Text("DELETE SAVES?", i);
            s.scale.set(.5, .5), s.anchor.set(.5, .5), s.y = .5 * s.height, this._deleteSaves.addChild(s);
            let o = b.generateTextureFromText("YES", i, "btnMenuYes"),
                n = new e(o, this._onBtnsClick, this);
            n.name = "Yes", n.anchor.set(1, .5), n.scale.set(.5, .5), n.x = -20, n.y = s.y + .5 * s.height + .5 * n.height + t, this._deleteSaves.addChild(n);
            let a = new e(o = b.generateTextureFromText("NO", i, "btnMenuNo"), this._onBtnsClick, this);
            a.name = "No", a.anchor.set(0, .5), a.scale.set(.5, .5), a.x = 20, a.y = s.y + .5 * s.height + .5 * a.height + t, this._deleteSaves.addChild(a), this._deleteSaves.x = 400, this._deleteSaves.y = 300 - .5 * this._deleteSaves.height + 40
        }
        this._deleteSaves.visible = !0, this._deleteSaves.alpha = 0, TweenLite.to(this._deleteSaves, .5, {
            alpha: 1
        })
    }, lt.prototype.hideDeleteSaves = function() {
        null != this._deleteSaves && TweenLite.to(this._deleteSaves, .2, {
            alpha: 0,
            onCompleteScope: this,
            onComplete: function() {
                this._deleteSaves.visible = !1
            }
        })
    }, lt.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "Play":
                parent.cmgGameEvent && parent.cmgGameEvent("start");
                let e = Qi.saveData.get("doNotShowIntro");
                Qi.shutter.run(function() {
                    this.destroy({
                        children: !0
                    }), Qi.menuState = null, e ? new dt : new ct
                }, this);
                break;
            case "Fullscreen":
                screenfull.enabled && screenfull.toggle();
                break;
            case "Credits":
                this.showCredits(), this.hideMain();
                break;
            case "CreditsBack":
                this.hideCredits(), this.showMain();
                break;
            case "Delete":
                this.hideMain(), this.showDeleteSaves();
                break;
            case "Yes":
                this.hideDeleteSaves(), this.showMain(), Qi.clearSaveData();
                break;
            case "No":
                this.hideDeleteSaves(), this.showMain();
                break;
            case "MusicSoundOn":
                this._btnMusicSoundOn.visible = !(this._btnMusicSoundOff.visible = !0), Qi.switchMusicEnable(), Qi.switchSoundEnable();
                break;
            case "MusicSoundOff":
                this._btnMusicSoundOff.visible = !(this._btnMusicSoundOn.visible = !0), Qi.switchMusicEnable(), Qi.switchSoundEnable()
        }
        Qi.soundOn && this.sndButton.play()
    }, dt.EVENT_LOCATION_CHANGED = "location_changed", dt.EVENT_ZONE_CLICK = "zone_click", dt.EVENT_INVENTORY_OPEN = "inventory_open", dt.EVENT_INVENTORY_CLOSE = "inventory_close", dt.EVENT_GONG_BANG = "gong_bang", dt.EVENT_BUTTON_MN_PRESSED = "button_mn_pressed", dt.EVENT_TRUCK_MN_OILED = "truck_mn_oiled", dt.EVENT_TRUCK_MN_FIXED = "truck_mn_fixed", dt.EVENT_TRUCK_MN_LAUNCHED = "truck_mn_laucnhed", dt.EVENT_LEVER_MN_ON = "lever_mn_on", dt.EVENT_CUBE_UC_SHAKING_CHANGE = "cube_uc_shaking_change", dt.EVENT_CUBE_UC_OPENED = "cube_uc_opened", dt.EVENT_CB_COLOR_SWITCH = "cb_color_switch", dt.prototype = Object.create(PIXI.Container.prototype), dt.prototype.constructor = dt, dt.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "Pause":
                this.goToMenu();
                break;
            case "MusicSoundOn":
                this._btnMusicSoundOn.visible = !(this._btnMusicSoundOff.visible = !0), Qi.switchMusicEnable(), Qi.switchSoundEnable();
                break;
            case "MusicSoundOff":
                this._btnMusicSoundOff.visible = !(this._btnMusicSoundOn.visible = !0), Qi.switchMusicEnable(), Qi.switchSoundEnable();
                break;
            case "MusicOn":
                this._btnMusicOn.visible = !(this._btnMusicOff.visible = !0), Qi.switchMusicEnable();
                break;
            case "MusicOff":
                this._btnMusicOff.visible = !(this._btnMusicOn.visible = !0), Qi.switchMusicEnable();
                break;
            case "SoundOn":
                this._btnSoundOn.visible = !(this._btnSoundOff.visible = !0), Qi.switchSoundEnable();
                break;
            case "SoundOff":
                this._btnSoundOff.visible = !(this._btnSoundOn.visible = !0), Qi.switchSoundEnable()
        }
        Qi.soundOn && this.sndButton.play()
    }, dt.prototype.goToMenu = function() {
        Qi.shutter.run(function() {
            this.destroy({
                children: !0
            }), Qi.playState = null, new lt
        }, this)
    }, dt.prototype.setEnableInteractive = function(t) {
        this.interactive = t, this.interactiveChildren = t
    }, dt.prototype.disableInteractiveFor = function(t) {
        this.setEnableInteractive(!1), TweenMax.delayedCall(t, this.setEnableInteractive, [!0], this)
    }, pt.prototype = Object.create(PIXI.Container.prototype), pt.prototype.constructor = pt, pt.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "Close":
                this.parent.removeChild(this), Qi.soundOn && this.sndInvCloseNote.play()
        }
    }, pt.prototype.createText = function(t) {
        const e = Qi.loc.getText("diary" + this._diaryNum),
            i = new PIXI.Text(e, this._style);
        return i.textCount = t, i.anchor.set(.5, .5), i.scale.set(.5, .5), this.addChild(i), i
    }, ut.STORAGE_KEY = "Inventory", ut.prototype = Object.create(PIXI.Container.prototype), ut.prototype.constructor = ut, ut.prototype.open = function(t) {
        if (this.opened = !0, t = void 0 != t && t) {
            const t = .1;
            TweenMax.to(this.btnArrow, t, {
                rotation: Math.PI
            }), TweenMax.to(this.bar, t, {
                y: Qi.gameHeight0,
                onComplete: function() {
                    Qi.playState.emit(dt.EVENT_INVENTORY_OPEN)
                }
            }), Qi.soundOn && this.sndInvOpen.play()
        } else this.btnArrow.rotation = Math.PI, this.bar.y = Qi.gameHeight0, Qi.playState.emit(dt.EVENT_INVENTORY_OPEN)
    }, ut.prototype.close = function(t) {
        if (this.opened = !1, t = void 0 != t && t, this.deselectItem(), t) {
            const t = .1;
            TweenMax.to(this.btnArrow, t, {
                rotation: 0
            }), TweenMax.to(this.bar, t, {
                y: Qi.gameHeight0 + this.bar.height,
                onComplete: function() {
                    Qi.playState.emit(dt.EVENT_INVENTORY_CLOSE)
                }
            }), Qi.soundOn && this.sndInvClose.play()
        } else this.btnArrow.rotation = 0, this.bar.y = Qi.gameHeight0 + this.bar.height, Qi.playState.emit(dt.EVENT_INVENTORY_CLOSE)
    }, ut.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "Arrow":
                this.opened ? this.close(!0) : this.open(!0)
        }
    }, ut.prototype.getItemByName = function(t) {
        for (var e = this._items.total(), i = 0; i < e; i++) {
            var s = this._items.at(i);
            if (s.name == t) return s
        }
        return null
    }, ut.prototype.add = function(t, e, i, s) {
        if (!this._items.has(t)) {
            var o = t.single ? this.getItemByName(t.name) : null;
            s = void 0 == s || s, this.deselectItem();
            var n = null == o ? this.getPositionForNext() : o.position,
                r = t.sprInv;
            if (t instanceof U && !this._noteIds.has(t.messageId) && (this._noteIds.add(t.messageId), this._saves.noteIds = this._noteIds.toArray(), Qi.forceSaveData()), !o || e) {
                if (e) {
                    if (i) r.width = this.itemWidth, r.scale.y = r.scale.x;
                    else {
                        var h = r.scale.x,
                            c = r.scale.y;
                        r.width = this.itemWidth, r.scale.y = r.scale.x;
                        var l = r.scale.x,
                            d = r.scale.y;
                        r.scale.set(h, c), TweenMax.to(r.scale, .3, {
                            x: l,
                            y: d
                        })
                    }
                    null != t.parent && t.parent.toGlobal(t, t.position), this._itemsContainer.toLocal(t, null, t.position), TweenMax.to(t, .3, {
                        x: n.x,
                        y: n.y,
                        onCompleteScope: this,
                        onComplete: function() {
                            null == o ? (t.setEnableSprInv(!0), t.on(a.EVENT_CLICK_INV, this._onItemClick, this)) : this._itemsContainer.removeChild(t)
                        }
                    }), s && Qi.soundOn && this.sndInvAdd.play()
                } else t.x = n.x, t.y = n.y, r.width = this.itemWidth, r.scale.y = r.scale.x, t.setEnableSprInv(!0), t.on(a.EVENT_CLICK_INV, this._onItemClick, this);
                this._itemsContainer.addChild(t), null == o && (this._items.add(t), t != this.notes && (this._saves.itemNames.push(t.name), Qi.forceSaveData()))
            }
        }
    }, ut.prototype.remove = function(t, e) {
        if (t.removeable) {
            e ? TweenMax.to(t, .1, {
                alpha: 0,
                onCompleteScope: this,
                onComplete: function() {
                    t.parent == this._itemsContainer && this._itemsContainer.removeChild(t)
                }
            }) : t.parent == this._itemsContainer && this._itemsContainer.removeChild(t), this._items.remove(t), this.selected == t && this.deselectItem();
            var i = this._saves.itemNames.indexOf(t.name);
            i >= 0 && (this._saves.itemNames.splice(i, 1), Qi.forceSaveData());
            for (var s = 0; s < this._items.total(); s++) {
                t = this._items.at(s);
                var o = this.getPositionForIndex(s);
                t.x = o.x, t.y = o.y
            }
        } else this.deselectItem()
    }, ut.prototype.getPositionForNext = function() {
        return this.getPositionForIndex(this._items.total())
    }, ut.prototype.getPositionForIndex = function(t) {
        return {
            x: t * this.itemWidth + .5 * this.itemWidth + this.paddingLeft,
            y: .5 * -this._itemsContainer.height
        }
    }, ut.prototype._onItemClick = function(t) {
        if (t == this.notes) {
            this.notes.width = this.itemWidth;
            var e = this.notes.scale.y = this.notes.scale.x;
            TweenMax.to(this.notes.scale, .1, {
                x: .9 * e,
                y: .9 * e,
                repeat: 1,
                yoyo: !0
            }), Qi.soundOn && this.sndInvOpenNote.play();
            var i = new _t(this._noteIds.toArray());
            i.x = .5 * Qi.gameWidth0, i.y = .5 * Qi.gameHeight0, Qi.playState.addChild(i)
        } else this.selectItem(t)
    }, ut.prototype.selectItem = function(t) {
        if (this.selected == t) this.deselectItem();
        else {
            var e = !1;
            null != this.selected && (e = a.combine(this.selected, t)) && (this.selected = null, Qi.soundOn && this.sndInvCombine.play()), e || (this.deselectItem(), TweenMax.to(t.scale, .1, {
                x: 1.35,
                y: 1.35
            }), this.selected = t)
        }
        null != this.selected && Qi.soundOn && this.sndInvSelect.play()
    }, ut.prototype.deselectItem = function() {
        null != this.selected && (TweenMax.to(this.selected.scale, .1, {
            x: 1,
            y: 1
        }), this.selected = null, Qi.soundOn && this.sndInvDeselect.play())
    }, _t.prototype = Object.create(PIXI.Container.prototype), _t.prototype.constructor = _t, _t.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "Next":
                this._currCount++, this._currCount > this._maxCount && (this._currCount = this._maxCount), this.validate();
                break;
            case "Prev":
                this._currCount--, this._currCount < 1 && (this._currCount = 1), this.validate();
                break;
            case "Close":
                this.parent.removeChild(this), Qi.soundOn && this.sndInvCloseNote.play()
        }
    }, _t.prototype.validate = function() {
        if (this._btnNext.visible = this._currCount < this._maxCount, this._btnPrev.visible = this._currCount > 1, this.working) return;
        if (this.working = !0, this.interactiveChildren = !1, this._currCount == this._currText.textCount) return;
        var t = this._currText,
            e = this.createText(this._currCount);
        TweenLite.to(t, .5, {
            alpha: 0,
            onComplete: function() {
                t.destroy(!0)
            }
        }), e.alpha = 0, this._currText = e, TweenLite.to(e, .5, {
            delay: .5,
            alpha: 1,
            onCompleteScope: this,
            onComplete: function() {
                this.working = !1, this.interactiveChildren = !0
            }
        }), Qi.soundOn && this.sndInvPage.play()
    }, _t.prototype.createText = function(t) {
        var e = Qi.loc.getText(this._messageIds[t - 1]),
            i = new PIXI.Text(e, this._style);
        return i.textCount = t, i.anchor.set(.5, .5), i.scale.set(.5, .5), this.addChild(i), i
    }, yt.prototype = Object.create(PIXI.Container.prototype), yt.prototype.constructor = yt, yt.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
            case "EndTheGame":
                Qi.playState.goToMenu();
                break;
            case "UC":
                this.interactive = !1, this.interactiveChildren = !1, TweenLite.to(this, .5, {
                    alpha: 0,
                    onCompleteScope: this,
                    onComplete: function() {
                        this.emit("destroy"), this.destroy({
                            children: !0
                        })
                    }
                })
        }
        Qi.soundOn && this.sndButton.play()
    }, vt.prototype = Object.create(o.prototype), vt.prototype.constructor = vt, vt.EVENT_PRESSED = "pressed", vt.prototype._onTruckRan = function() {
        this.visible = !0
    }, vt.prototype.setState = function(t) {
        t = void 0 == t ? 0 : t, this.state = t, this.sprMain.visible = t <= 1, this._pressed.visible = 2 == t, this.interactive = this.buttonMode = t <= 1, this.interactive && (this.click = this.tap = this._clickTap, this.setHitAreaSize(50, 50), this.showHitArea())
    }, vt.prototype._clickTap = function(t) {
        0 == this.state ? (this.sprMain.visible = !(this._pressed.visible = !0), Qi.soundOn && this.sndButtonBnkOnOff.play(), TweenLite.delayedCall(.3, function() {
            this.sprMain.visible = !(this._pressed.visible = !1)
        }, null, this)) : 1 == this.state && (this.setState(2), Qi.soundOn && this.sndButtonMn.play(), this.emit(vt.EVENT_PRESSED, this))
    }, ft.prototype = Object.create(o.prototype), ft.prototype.constructor = Ht, gt.prototype = Object.create(o.prototype), gt.prototype.constructor = gt, gt.EVENT_CLICK = "ev_click", gt.prototype._clickTap = function() {
        this.sprMain.visible = !(this._sprOn.visible = !0), TweenLite.delayedCall(.1, function() {
            this.sprMain.visible = !(this._sprOn.visible = !1), this.emit(gt.EVENT_CLICK, this), Qi.soundOn && this.sndButtonCb.play()
        }, null, this)
    }, mt.prototype = Object.create(o.prototype), mt.prototype.constructor = mt, mt.prototype._clickTap = function(t) {
        this.opened ? this.clickCallback.call(this.clickCallbackScope) : (this.opened = !0, this.tweenHalfDoor(this._left, 2.1, .5), this.tweenHalfDoor(this._right, -1.1, .5), this.tweenHalfDoor(this._down, .5, -1.1), this.tweenHalfDoor(this._up, .5, 2.1), Qi.soundOn && this.sndDoorCbOpen.play())
    }, mt.prototype.tweenHalfDoor = function(t, e, i) {
        void 0 != t && TweenLite.to(t.anchor, .3, {
            x: e,
            y: i
        })
    }, wt.prototype = Object.create(o.prototype), wt.prototype.constructor = Ct, wt.EVENT_CHANGE = "change", wt.prototype.setState = function(t) {
        void 0 == t && (t = 0), this.state = t, this.interactive = 0 == t, this.sprMain.visible = 1 == t, this._liquid.visible = 2 == t, this.emit(wt.EVENT_CHANGE, this)
    }, wt.prototype._clickTap = function(t) {
        this.isInventorySelected(a.Cube) && (this.removeSelectedFromInventory(), this.setState(1), Qi.soundOn && this.sndInvUse.play())
    }, St.prototype = Object.create(k.prototype), St.prototype.constructor = St, St.prototype.onFrameChange = function(t) {
        this._valve.visible = t <= 10, t <= 1 && this._doorAnim.animationSpeed > 0 && !this.working && this._rotateValve(Math.PI), 10 == t && this._doorAnim.animationSpeed < 0 && !this.working && this._rotateValve(0)
    }, St.prototype._rotateValve = function(t) {
        this.working = !0, TweenLite.to(this._valve, .5, {
            rotation: t,
            onCompleteScope: this,
            onComplete: function() {
                this.working = !1
            }
        })
    }, St.prototype._clickTap = function(t) {
        this.opened ? this.closeAnim() : this.openAnim()
    }, bt.prototype = Object.create(o.prototype), bt.prototype.constructor = bt, bt.EVENT_MELT = "e_melt", bt.prototype.setOn = function(t) {
        this.interactive = !t, t && this._leverAnim.gotoAndStop(this._leverAnim.totalFrames - 1)
    }, bt.prototype.setDoorClosed = function(t) {
        this.isDoorClosed = t
    }, bt.prototype.setCubePlaced = function(t) {
        this.isCubePlaced = t
    }, bt.prototype._clickTap = function(t) {
        if (!this.working) {
            this.working = !0, this.interactive = !1;
            var e = this;
            this._leverAnim.onComplete = function() {
                e._leverAnim.onComplete = function() {
                    e.working = !1, e.interactive = !0
                }, e._leverAnim.animationSpeed = -e._defaultAnimSpeed, e.isDoorClosed ? (e.isCubePlaced && e.emit(bt.EVENT_MELT, e), TweenLite.fromTo(Qi.pixi.stage, 3, {
                    x: -1
                }, {
                    delay: .2,
                    x: 1,
                    ease: RoughEase.ease.config({
                        template: Power2.easeOut,
                        taper: "out",
                        strength: 18,
                        points: 50,
                        randomize: !1
                    }),
                    clearProps: "x"
                }), Qi.soundOn && e.sndSunRays.play(), TweenLite.delayedCall(.5, function() {
                    e._leverAnim.play()
                })) : e._leverAnim.play()
            }, this._leverAnim.animationSpeed = this._defaultAnimSpeed, this._leverAnim.play(), Qi.soundOn && this.sndLeverLwOnOff.play()
        }
    }, Ct.prototype = Object.create(o.prototype), Ct.prototype.constructor = Ct, Ct.EVENT_ON = "e_on", Ct.prototype.setOn = function(t) {
        this.interactive = !t, this._anim.visible = t, t ? this._anim.play() : this._anim.stop()
    }, Ct.prototype._clickTap = function(t) {
        this.isInventorySelected(a.Lighter) && (this.removeSelectedFromInventory(), this.setOn(!0), Qi.soundOn && this.sndTorchFire.play(), this.emit(Ct.EVENT_ON, this))
    }, Ot.prototype = Object.create(o.prototype), Ot.prototype.constructor = Ot, Ot.prototype._onTruckRan = function() {
        this.visible = !1
    }, kt.EVENT_CLICK_TO_CHANGE_LOCATION = "click_to_change_location", kt.EVENT_DOOR_HAS_BEEN_BROKEN = "door_has_been_broken", kt.prototype = Object.create(o.prototype), kt.prototype.constructor = Ht, kt.prototype.setBroken = function(t) {
        this.buttonMode = t, this.broken = t, this._sprBroken.visible = this.broken, this.sprMain.visible = !this.broken
    }, kt.prototype._clickTap = function(t) {
        this.broken ? this.emit(kt.EVENT_CLICK_TO_CHANGE_LOCATION, this) : this.isInventorySelected(a.Pickaxe) && (this.removeSelectedFromInventory(), this.setBroken(!0), Qi.soundOn && this.sndBrickDoorBrakeMn.play(), this.emit(kt.EVENT_DOOR_HAS_BEEN_BROKEN, this))
    }, Tt.prototype = Object.create(o.prototype), Tt.prototype.constructor = Tt, Tt.prototype._onTruckRan = function() {
        this.visible = !0
    }, Tt.prototype.setPressed = function(t) {
        t = Boolean(t), this.pressed = t, this.sprMain.visible = !this.pressed, this._pressed.visible = this.pressed, this.interactive = !this.pressed, this.buttonMode = !this.pressed, this.pressed || (this.click = this.tap = this._clickTap, this.setHitAreaSize(60, 60), this.showHitArea()), this.pressed || Qi.playState.on(dt.EVENT_TRUCK_MN_LAUNCHED, this._onTruckRan, this)
    }, Tt.prototype._clickTap = function(t) {
        this.pressed || (this.setPressed(!0), Qi.soundOn && this.sndButtonMn.play(), Qi.playState.emit(dt.EVENT_BUTTON_MN_PRESSED, this))
    }, It.prototype = Object.create(k.prototype), It.prototype.constructor = It, Lt.prototype = Object.create(o.prototype), Lt.prototype.constructor = Lt, Lt.EVENT_OPEN = "open", Lt.prototype.setOpened = function(t) {
        this.opened = t, this.buttonMode = t, this._hatchStickClose.visible = !t, this._hatchStickOpen.visible = t, this._hatch.x = t ? 1.1 * this._hatch.width : 0
    }, Lt.prototype._clickTap = function(t) {
        this.opened ? this.clickOpenedCallback() : this.isInventorySelected(a.BunkerKey) ? (this.removeSelectedFromInventory(), this.opened = !0, this.buttonMode = !0, this._hatchStickClose.visible = !1, this._hatchStickOpen.visible = !0, Qi.soundOn && this.sndHatchMnUnlock.play(), Qi.playState.disableInteractiveFor(1), TweenLite.to(this._hatch, 1, {
            x: 1.1 * this._hatch.width,
            delay: .3,
            onStartScope: this,
            onStart: function() {
                Qi.soundOn && this.sndHatchMnOpening.play()
            }
        }), this.emit(Lt.EVENT_OPEN, this)) : (TweenLite.fromTo(this._hatch, .3, {
            x: "-=2"
        }, {
            x: "+=2",
            ease: RoughEase.ease.config({
                strength: 8,
                points: 20,
                template: Linear.easeNone,
                randomize: !1
            }),
            clearProps: "x"
        }), Qi.soundOn && this.sndHatchMnTryOpen.play())
    }, Et.EVENT_CLICK = "event_click", Et.prototype = Object.create(o.prototype), Et.prototype.constructor = Et, Et.prototype.liftDown = function(t) {
        t = void 0 == t || t, this.interactive = !0, this.buttonMode = !0, t ? (TweenLite.to(this.sprMain.anchor, .5, {
            y: 0,
            ease: Power2.easeOut
        }), Qi.soundOn && this.sndLadderMnDown.play()) : this.sprMain.anchor.y = 0
    }, Et.prototype._clickTap = function() {
        this.emit(Et.EVENT_CLICK, this)
    }, At.prototype = Object.create(o.prototype), At.prototype.constructor = At, At.EVENT_UNSCREW = "unscrew", At.EVENT_UNSCREW_COMPLETE = "unscrew_complete", At.prototype._clickTap = function() {
        if (this.isInventorySelected(a.Screwdriver)) {
            this.interactive = !1;
            var t = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.visible = !1, this.emit(At.EVENT_UNSCREW_COMPLETE, this)
                }
            });
            const e = .7;
            t.add([TweenLite.to(this._screw, 1, {
                rotation: g.toRadians(360)
            }), TweenLite.to(this._screw.scale, 1, {
                x: 1.4,
                y: 1.4
            })]), t.add([TweenLite.to(this._screw, e, {
                y: "+=250",
                alpha: 0,
                ease: Power1.easeIn
            }), TweenLite.to(this.sprMain, e, {
                delay: .2,
                y: "+=250",
                alpha: 0,
                ease: Power1.easeIn
            })]), Qi.soundOn && this.sndScrewUnscrew.play(), Qi.playState.disableInteractiveFor(t.totalDuration()), this.emit(At.EVENT_UNSCREW, this)
        }
    }, xt.prototype = Object.create(o.prototype), xt.prototype.constructor = xt, xt.prototype.setOn = function(t) {
        this.interactive = !t, t && this._leverAnim.gotoAndStop(this._leverAnim.totalFrames - 1)
    }, xt.prototype._onTruckMnOiled = function(t) {
        this.isTruckOiled = !0
    }, xt.prototype._onTruckMnFixed = function(t) {
        this.isTruckFixed = !0
    }, xt.prototype._clickTap = function(t) {
        if (this.isTruckOiled) this.interactive = !1, this._leverAnim.animationSpeed = this._defaultAnimSpeed, this._leverAnim.play(), this._leverAnim.onComplete = function() {
            Qi.playState.emit(dt.EVENT_LEVER_MN_ON, this)
        }, Qi.soundOn && this.sndLeverMnOn.play();
        else {
            var e = this;
            this._leverAnim.onComplete = function() {
                e._leverAnim.onComplete = null, e._leverAnim.animationSpeed = -e._defaultAnimSpeed, e._leverAnim.play(), e.isTruckFixed && Qi.soundOn && e.sndTruckMnStuck.play()
            }, this._leverAnim.animationSpeed = this._defaultAnimSpeed, this._leverAnim.play(), Qi.soundOn && this.sndLeverMnOnOff.play()
        }
    }, Mt.EVENT_CLICK_ON = "click_on", Mt.prototype = Object.create(o.prototype), Mt.prototype.constructor = Mt, Mt.prototype.setSlotsEnable = function(t) {
        const e = this.isAllValid();
        for (let i = 0; i < 4; i++) this._slots[i].setEnable(!e && t[i])
    }, Mt.prototype.isAllValid = function() {
        let t = !0;
        for (let e = 1; e <= 4; e++)
            if (!1 === Boolean(this._saves["isSlotValid" + e])) {
                t = !1;
                break
            }
        return t
    }, Mt.prototype._onSlotChanged = function(t) {
        this._saves["slotCount" + t.index] = t.count, this._saves["isSlotValid" + t.index] = t.isValid();
        var e = this.isAllValid();
        this._saves.isAllValid = e, this._lightGreen.visible = !(this._lightRed.visible = !e), e && this.setSlotsEnable([!1, !1, !1, !1]), e && Qi.soundOn && this.sndLockSlotOpen.play(), Qi.forceSaveData()
    }, Nt.EVENT_CHANGE = "change", Nt.prototype = Object.create(o.prototype), Nt.prototype.constructor = Nt, Nt.prototype.setEnable = function(t) {
        this.interactive = t, this.buttonMode = t
    }, Nt.prototype.isValid = function() {
        return this.count == this._validCount
    }, Nt.prototype._clickTap = function(t) {
        this.count + 1 == 11 ? this.setCount(1) : this.setCount(this.count + 1), Qi.soundOn && this.sndRotateSlots.play()
    }, Nt.prototype.setCount = function(t, e) {
        if (void 0 == t && (t = 1), this.count == t) return;
        e = void 0 == e || e, t > 10 ? t = 10 : t < 1 && (t = 1), this.count = t, t--;
        const i = -this._step * t;
        e ? (TweenMax.killTweensOf(this), TweenMax.to(this, .2, {
            y: i,
            onCompleteScope: this,
            onComplete: function() {
                this.emit(Nt.EVENT_CHANGE, this)
            }
        })) : (this.y = i, this.emit(Nt.EVENT_CHANGE, this))
    }, Pt.EVENT_CLICK_ON = "click_on", Pt.prototype = Object.create(o.prototype), Pt.prototype.constructor = Pt, Pt.prototype.setOn = function(t) {
        t = Boolean(t), this._lightGreen.visible = !(this._lightRed.visible = !t)
    }, Pt.prototype._clickTap = function(t) {
        this.emit(Pt.EVENT_CLICK_ON, this)
    }, Dt.prototype = Object.create(o.prototype), Dt.prototype.constructor = Dt, Dt.prototype.playFillOilerAnimation = function() {
        var t, e = Qi.playState.inventory,
            i = e.selected;
        i.scale.set(1), e.selected = null;
        var s = i.parent.toGlobal(i.position);
        this.toLocal(s, null, s), i.position.set(s.x, s.y), this.addChild(i);
        var o = this,
            n = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.working = !1
                }
            });
        n.add([TweenLite.to(i, .5, {
            x: 0,
            y: 70
        }), TweenLite.to(i.sprInv.scale, .5, {
            x: "+=0.4",
            y: "+=0.4"
        })]), n.to(this.sprMain, .2, {
            x: -5
        });
        for (var a = [], r = 0; r < 3; r++) {
            var h = Qi.assets.getSprite("oil_drop", "atlasItems", !0);
            h.scale.set(.7, .7), h.y = this._sprDropStartY, h.visible = !1, o.addChildAt(h, 0), a.push(TweenLite.to(h, .3, {
                delay: .1 * r,
                y: "+=30",
                ease: Power1.easeIn,
                onStartScope: h,
                onStart: function() {
                    Qi.soundOn && o.sndOilDropMn.play(), this.visible = !0
                },
                onCompleteScope: h,
                onComplete: function() {
                    this.visible = !1
                }
            }))
        }
        a.push(TweenLite.to(this.sprMain, .2, {
            x: 0
        })), n.add(a), n.add(function() {
            (t = new X).sprInv.scale.set(i.sprInv.scale.x, i.sprInv.scale.y), t.x = i.x, t.y = i.y, t.playShowDropAnimation(), o.addChild(t), i.parent.removeChild(i), e.remove(i)
        }, "+=0.1"), n.add(function() {
            e.add(t, !0, !1, !1)
        }, "+=0.2"), Qi.playState.disableInteractiveFor(n.totalDuration())
    }, Dt.prototype.playNoOilerAnimation = function() {
        if (!this.working) {
            this.working = !0, this._sprDrop.y = this._sprDropStartY, this._sprDrop.alpha = 1;
            var t = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.working = !1
                }
            });
            t.to(this.sprMain, .2, {
                x: -5
            }), t.add([TweenLite.to(this._sprDrop, .5, {
                y: "+=80",
                alpha: 0,
                ease: Power1.easeIn,
                onStartScope: this,
                onStart: function() {
                    this._sprDrop.visible = !0, Qi.soundOn && this.sndOilDropMn.play()
                },
                onCompleteScope: this,
                onComplete: function() {
                    this._sprDrop.visible = !1
                }
            }), TweenLite.to(this.sprMain, .2, {
                x: 0
            })]), Qi.playState.disableInteractiveFor(t.totalDuration())
        }
    }, Dt.prototype._clickTap = function(t) {
        this.isInventorySelected(a.Oiler) ? this.playFillOilerAnimation() : this.playNoOilerAnimation()
    }, Bt.prototype = Object.create(o.prototype), Bt.prototype.constructor = Bt, Bt.EVENT_BRAKE = "brake", Bt.prototype.setBroken = function(t) {
        this.sprMain.visible = t, this.interactive = !t
    }, Bt.prototype._clickTap = function() {
        this.isInventorySelected(a.Pickaxe) && (this.setBroken(!0), Qi.soundOn && this.sndBrakeSign1Cover.play(), this.emit(Bt.EVENT_BRAKE, this))
    }, Ht.EVENT_CLICK_TO_CHANGE_LOCATION = "click_to_change_location", Ht.prototype = Object.create(o.prototype), Ht.prototype.constructor = Ht, Ht.prototype.setFixed = function(t) {
        t = Boolean(t), this.fixed = t, this._sprFixed.visible = this.fixed, this.sprMain.visible = !this.fixed, this.fixed ? (b.setHitAreaPolygon(this._sprFixed, -105.66, -80.64, 110.17, -80.12, 155.65, -46.23, -83.37, -33.75), this._clickArea.setHitAreaPolygon(-54.83, 42.06, -67.31, 62.58, -59.29, 94.68, -28.07, 100.03, -7.56, 83.98, -6.67, 52.76, -31.64, 42.06)) : (b.setHitAreaPolygon(this.sprMain, -120.82, -61.39, 87.87, -101.53, 162.79, -47.12, -87.83, -4.31), this._clickArea.setHitAreaPolygon(-45.91, 88.44, -21.83, 67.03, 5.82, 76.85, 7.6, 107.17, -20.94, 122.33, -41.45, 108.95))
    }, Ht.prototype.setOiled = function(t) {
        t = Boolean(t), this.oiled = t, this.interactive = !this.oiled, this.sprMain.interactive = !this.oiled, this.sprMain.buttonMode = !this.oiled, this._sprFixed.interactive = !this.oiled, this._sprFixed.buttonMode = !this.oiled
    }, Ht.prototype._onTruckRan = function() {
        this.visible = !1
    }, Ht.prototype.playOilingAnimation = function() {
        if (!this.working) {
            this.working = !0;
            var t = Qi.playState.inventory,
                e = t.selected;
            e.scale.set(1), t.selected = null;
            var i = e.parent.toGlobal(e.position);
            this.toLocal(i, null, i), e.position.set(i.x, i.y), this.addChild(e);
            var s = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.working = !1
                }
            });
            s.add([TweenLite.to(e, .5, {
                x: -95,
                y: -20
            }), TweenLite.to(e.sprInv.scale, .5, {
                x: "+=0.4",
                y: "+=0.4"
            })]), s.add(function() {
                t.remove(e)
            }), e.playOilingAnimation(s), Qi.playState.disableInteractiveFor(s.totalDuration()), this.setOiled(!0), Qi.playState.emit(dt.EVENT_TRUCK_MN_OILED, this)
        }
    }, Ht.prototype._clickTap = function(t) {
        this.oiled || this.emit(Ht.EVENT_CLICK_TO_CHANGE_LOCATION, this)
    }, Ht.prototype._clickTapWheel = function(t) {
        this.isInventorySelected(a.Wheel) ? (this.removeSelectedFromInventory(), this.setFixed(!0), Qi.soundOn && this.sndInvUse.play(), Qi.playState.emit(dt.EVENT_TRUCK_MN_FIXED, this)) : this.fixed && this.isInventorySelected(a.OilerFilled) && this.playOilingAnimation()
    }, Rt.prototype = Object.create(o.prototype), Rt.prototype.constructor = Rt, Rt.prototype._onLeverPulled = function() {
        if (!this.ran) {
            this.ran = !0;
            var t = this;
            Qi.soundOn && this.sndTruckMnRide.play(), Qi.playState.setEnableInteractive(!1), Qi.playState.emit(dt.EVENT_TRUCK_MN_LAUNCHED, this), TweenMax.delayedCall(.75, function() {
                this._anim.visible = !0, this._anim.play(), this._anim.onComplete = function() {
                    t._anim.visible = !1, TweenLite.fromTo(Qi.pixi.stage, 5.5, {
                        x: -1
                    }, {
                        delay: 3.1,
                        x: 1,
                        ease: RoughEase.ease.config({
                            template: Power2.easeOut,
                            taper: "out",
                            strength: 18,
                            points: 80,
                            randomize: !1
                        }),
                        clearProps: "x",
                        onComplete: function() {
                            Qi.playState.setEnableInteractive(!0)
                        }
                    })
                }
            }, null, this)
        }
    }, Vt.prototype = Object.create(o.prototype), Vt.prototype.constructor = Vt, Ut.prototype = Object.create(o.prototype), Ut.prototype.constructor = Ut, Ut.prototype._clickTap = function(t) {
        this.opened && this.clickCallback.call(this.clickCallbackScope)
    }, Ut.prototype.open = function(t) {
        this.opened || (t = Boolean(t), this.opened = !0, t ? (this.tweenHalfDoor(this._down, .5, -1.1), this.tweenHalfDoor(this._up, .5, 2.1), Qi.soundOn && this.sndDoorPrOpen.play()) : (this._down.anchor.set(.5, -1.1), this._up.anchor.set(.5, 2.1)))
    }, Ut.prototype.tweenHalfDoor = function(t, e, i) {
        void 0 != t && TweenLite.to(t.anchor, .7, {
            x: e,
            y: i,
            ease: Power4.easeIn
        })
    }, Ft.EVENT_REMOVED = "removed", Ft.prototype = Object.create(o.prototype), Ft.prototype.constructor = Ft, Ft.prototype.setRemoved = function(t) {
        this.interactive = !t, this.sprMain.visible = !t, this._removed.visible = t
    }, Ft.prototype._clickTap = function(t) {
        this.setRemoved(!0), Qi.soundOn && this.sndLotusStoneRemoved.play(), this.emit(Ft.EVENT_REMOVED, this)
    }, Xt.prototype = Object.create(o.prototype), Xt.prototype.constructor = Xt, Xt.EVENT_CHANGE = "change", Xt.prototype.setState = function(t) {
        this.state = t, this.interactive = 1 == t, this.sprMain.visible = t <= 1, this._sprOn.visible = 2 == t
    }, Xt.prototype._clickTap = function() {
        this.setState(2), this.emit(Xt.EVENT_CHANGE, this), Qi.soundOn && this.sndButtonMn.play()
    }, Gt.prototype = Object.create(o.prototype), Gt.prototype.constructor = Gt, Gt.prototype.play = function(t) {
        t = Boolean(t), this._anim.animationSpeed = (t ? 1 : -1) * this._defaultAnimSpeed, this._anim.gotoAndPlay(0)
    }, Gt.prototype.stop = function() {
        this._anim.stop()
    }, jt.EVENT_CHANGE = "change", jt.prototype = Object.create(o.prototype), jt.prototype.constructor = jt, jt.prototype.setOpen = function(t, e) {
        t = Boolean(t), e = void 0 != e && e, this.isOpen = t, this.interactive = !t, this.hitArea = t ? new PIXI.Rectangle : null;
        var i = t ? 1.6 : .98;
        e ? (TweenLite.to(this._leftDoor.anchor, .25, {
            x: i,
            ease: Back.easeOut
        }), Qi.soundOn && this.sndCoverOpen.play()) : this._leftDoor.anchor.x = i
    }, jt.prototype._clickTap = function(t) {
        this.setOpen(!0, !0), this.emit(jt.EVENT_CHANGE, this)
    }, Wt.prototype = Object.create(o.prototype), Wt.prototype.constructor = Wt, Wt.EVENT_ON = "e_on", Wt.prototype.setEnable = function(t) {
        this.interactive = t, t && (this.rotation = 0)
    }, Wt.prototype._clickTap = function(t) {
        this.interactive = !1, Qi.soundOn && this.sndHandleSbw.play(), TweenLite.to(this, .3, {
            rotation: this._rot,
            onCompleteScope: this,
            onComplete: function() {
                this.emit(Wt.EVENT_ON, this)
            }
        })
    }, Kt.prototype = Object.create(o.prototype), Kt.prototype.constructor = Kt, Kt.prototype.play = function(t) {
        t = Boolean(t), TweenMax.to(this._wheel1, 1, {
            rotation: (t ? 1 : -1) * Math.PI * 2,
            repeat: -1,
            ease: Power0.easeNone
        }), TweenMax.to(this._wheel2, 1, {
            rotation: (t ? 1 : -1) * Math.PI * 2,
            repeat: -1,
            ease: Power0.easeNone
        })
    }, Kt.prototype.stop = function() {
        this._wheel1.rotation = 0, this._wheel2.rotation = 0, TweenMax.killTweensOf(this._wheel1), TweenMax.killTweensOf(this._wheel2)
    }, zt.prototype = Object.create(o.prototype), zt.prototype.constructor = zt, zt.prototype.setUp = function() {
        this.sprMain.anchor.set(.5, .98)
    }, zt.prototype.animateDown = function(t, e) {
        TweenLite.to(this.sprMain.anchor, .3, {
            y: 0,
            onComplete: t,
            onCompleteScope: e
        })
    }, Yt.prototype = Object.create(k.prototype), Yt.prototype.constructor = Yt, Zt.prototype = Object.create(k.prototype), Zt.prototype.constructor = Zt, Zt.prototype.createHandle = function() {
        k.prototype.createHandle.call(this), this.buttonMode = !0
    }, Zt.prototype._clickTap = function(t) {
        this.opened ? (this.portalClickCallback.call(this.portalClickCallbackScope), this._portal && this._portal.interact()) : null == this._handle && this.isInventorySelected(a.DoorHandleItem) ? (this.removeSelectedFromInventory(), this.createHandle(), Qi.soundOn && this.sndInvUse.play()) : this._handle && this.openAnim()
    }, Jt.prototype = Object.create(o.prototype), Jt.prototype.constructor = Jt, Jt.prototype._clickTap = function(t) {
        if (this.isInventorySelected(a.Hammer)) {
            var e = Qi.playState.inventory.selected;
            this.removeSelectedFromInventory(), e.setScrMode(), e.x = this._gong.x - 35, e.y = this._gong.y + 70, this.addChild(e), e.bang(this), Qi.playState.emit(dt.EVENT_GONG_BANG)
        }
    }, Jt.prototype.bang = function() {
        TweenMax.to(this._gong.scale, .1, {
            x: .9
        });
        var t = this._gong.scale,
            e = new TimelineMax({}),
            i = function(i, s, o) {
                for (var n = 0; n < o; n++) e.to(t, i, {
                    x: 1 - s,
                    y: 1 + s
                }), e.to(t, i, {
                    x: 1 + s,
                    y: 1 - s
                })
            };
        i(.05, .025, 2), i(.04, .02, 2), i(.03, .01, 2), i(.02, .005, 4), e.to(t, .01, {
            x: 1,
            y: 1
        }), Qi.soundOn && this.sndGongTibet.play()
    }, qt.prototype = Object.create(o.prototype), qt.prototype.constructor = qt, qt.EVENT_STAIRS_SHOW = "stairs_show", qt.EVENT_STAIRS_OPEN = "stairs_open", qt.prototype.show = function() {
        this.visible = !0, this.interactive = this.buttonMode = !0, this.emit(qt.EVENT_STAIRS_SHOW, this)
    }, qt.prototype._clickTap = function(t) {
        this.open(), Qi.soundOn && this.sndStairsTibet.play()
    }, qt.prototype.open = function(t) {
        this.interactive = this.buttonMode = !1;
        for (var e = 0; e < this._stairs.length; e++) this._stairs[e].open(t);
        this.emit(qt.EVENT_STAIRS_OPEN, this)
    }, $t.prototype = Object.create(o.prototype), $t.prototype.constructor = $t, $t.prototype.open = function(t) {
        null != this._cover && (t = void 0 != t ? t : .2, TweenMax.to(this._cover.scale, t, {
            x: 0,
            y: 0
        }))
    }, Qt.EVENT_OPENED = "opened", Qt.prototype = Object.create(o.prototype), Qt.prototype.constructor = Qt, Qt.prototype.destroy = function(t) {
        TweenMax.killTweensOf(this.sprMain), PIXI.Container.prototype.destroy.call(this, t)
    }, Qt.prototype.setOpened = function(t, e) {
        void 0 != t && (e = void 0 != e && e, TweenMax.killTweensOf(this), this.opened = !0, this.interactive = !t, this.sprMain.visible = !t, this._anim.visible = t, t && (e ? this._anim.play() : this._anim.gotoAndStop(this._anim.totalFrames - 1)))
    }, Qt.prototype.setShaking = function(t) {
        if (!this.opened && void 0 != t)
            if (t = Math.abs(t) % 5, this.shakingCount = t, TweenMax.killTweensOf(this.sprMain), t < 4) {
                var e = this._shakingParams[t];
                TweenMax.fromTo(this.sprMain, .05, {
                    x: -e.strength * e.x,
                    y: -e.strength * e.y
                }, {
                    x: e.strength * e.x,
                    y: e.strength * e.y,
                    ease: Power0.easeNone,
                    repeat: -1,
                    yoyo: !0
                })
            } else {
                const t = 5,
                    e = 20,
                    i = 500;
                TweenMax.fromTo(this.sprMain, t, {
                    x: -1
                }, {
                    x: 1,
                    repeat: -1,
                    ease: RoughEase.ease.config({
                        strength: e,
                        points: i,
                        randomize: !0
                    })
                }), TweenMax.fromTo(this.sprMain, t, {
                    y: 1
                }, {
                    y: -1,
                    repeat: -1,
                    delay: .1,
                    ease: RoughEase.ease.config({
                        strength: e,
                        points: i,
                        randomize: !0
                    })
                })
            }
    }, Qt.prototype._clickTap = function(t) {
        this._leverSavesLeft.isOn && this._leverSavesRight.isOn ? (this.setOpened(!0, !0), Qi.soundOn && this.sndCubeUcOpen.play(), this.emit(Qt.EVENT_OPENED, this)) : (++this.shakingCount, this.shakingCount > 3 && (this.shakingCount = 0), this.setShaking(this.shakingCount), Qi.soundOn && this.sndCubeUcSwitch.play(), Qi.playState.emit(dt.EVENT_CUBE_UC_SHAKING_CHANGE, this))
    }, te.prototype = Object.create(o.prototype), te.prototype.constructor = te, te.EVENT_OPENED = "put", te.prototype.setOpen = function(t, e) {
        e = void 0 != e && e, this.opened = t, this.sprMain.visible = !t, this._doorAnim.visible = t, this.interactive = t, this.buttonMode = t, this.opened && (e ? (Qi.soundOn && this.sndStairsTibet.play(), this._doorAnim.play(), TweenLite.from(this._doorAnim, .2, {
            alpha: 0
        })) : this._doorAnim.gotoAndStop(this._doorAnim.totalFrames - 1))
    }, te.prototype._clickTap = function(t) {
        this.opened && this.clickCallback.call(this.clickCallbackScope)
    }, ee.prototype = Object.create(o.prototype), ee.prototype.constructor = ee, ee.EVENT_OPENED = "opened", ee.prototype.setOpen = function(t) {
        null != this._openAnimation && (this.interactive = !t, this._openAnimation.seek(t ? this._openAnimation.totalDuration() : 0))
    }, ee.prototype.setAsInteractive = function(t) {
        this._saves = t, this.interactive = !0, this.buttonMode = !0, this.click = this.tap = this._clickTap, this.setHitAreaPolygon(-44.36, -99.6, 52.85, -98.71, 51.96, 49.34, -43.47, 84.12), this.showHitArea()
    }, ee.prototype._clickTap = function(t) {
        for (var e = !0, i = 0; i < 4; i++) this._saves["unscrewed" + i] || (e = !1);
        e && (this.interactive = !1, this._openAnimation.play(), Qi.soundOn && this.sndOpenGrate.play(), this.emit(ee.EVENT_OPENED, this))
    }, ie.prototype = Object.create(o.prototype), ie.prototype.constructor = ie, ie.EVENT_UNSCREW = "unscrew", ie.prototype._clickTap = function(t) {
        if (this.isInventorySelected(a.Screwdriver)) {
            var e = new TimelineMax({
                onCompleteScope: this,
                onComplete: function() {
                    this.visible = !1
                }
            });
            e.to(this.sprMain.anchor, .4, {
                x: "-=0.1"
            }), e.add(function() {}, "+=0.1"), e.to(this.sprMain.anchor, .4, {
                x: "-=0.1"
            }), e.add(function() {}, "+=0.2"), e.to(this.sprMain.anchor, .2, {
                x: "-=1"
            }), e.to(this.sprMain, .4, {
                alpha: 0
            }), this.interactive = !1, this.emit(ie.EVENT_UNSCREW, this), Qi.soundOn && this.sndScrewUnscrew.play()
        }
    }, se.prototype = Object.create(o.prototype), se.prototype.constructor = se, se.EVENT_STATE_CHANGE = "state_change", se.STATE_NO_LAMP = 0, se.STATE_LAMP_IN = 1, se.STATE_LAMP_ON = 2, se.prototype.setState = function(t) {
        void 0 == t && (t = 0), t = Math.abs(t) % 3, this.state != t && (this.state = t, this.interactive = 0 == t, this._lampOff.visible = 1 == t, this._lampOn.visible = 2 == t, this.emit(se.EVENT_STATE_CHANGE, this))
    }, se.prototype._clickTap = function() {
        this.isInventorySelected(a.LightBulb) && (this.removeSelectedFromInventory(), this.interactive = !1, this.setState(1), Qi.soundOn && this.sndTurnInLamp.play())
    }, oe.prototype = Object.create(o.prototype), oe.prototype.constructor = oe, oe.EVENT_ON = "event_on", oe.prototype.destroy = function(t) {
        TweenMax.killTweensOf(this.sprMain), TweenMax.killTweensOf(this), TweenMax.killTweensOf(this._handle), PIXI.Container.prototype.destroy.call(this, t)
    }, oe.prototype.setOn = function(t, e) {
        e = void 0 != e && e, TweenMax.killTweensOf(this), this.isOn = t, this.interactive = !t, this.sprMain.visible = !t, this._handle.visible = !t, this._anim.visible = t, this.isOn && (this._anim.animationSpeed = this._defaultAnimSpeed, e ? this._anim.play() : this._anim.gotoAndStop(this._anim.totalFrames - 1))
    }, oe.prototype.setShaking = function(t) {
        if (!this.isOn && void 0 != t) {
            t = Math.abs(t) % 4, this.shakingCount = t, TweenMax.killTweensOf(this.sprMain);
            var e = this._shakingParams[t];
            TweenMax.fromTo(this._handle, .05, {
                x: -e.strength * e.x,
                y: -e.strength * e.y
            }, {
                x: e.strength * e.x,
                y: e.strength * e.y,
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: !0
            })
        }
    }, oe.prototype._clickTap = function(t) {
        if (!this.working)
            if (this.shakingCountCube == this.validShaking) this.setOn(!0, !0), this.emit(oe.EVENT_ON, this), Qi.soundOn && this.sndOn.play();
            else {
                this.working = !0;
                var e = this;
                this.sprMain.visible = !1, this._handle.visible = !1, this._anim.visible = !0, this._anim.onComplete = function() {
                    e._anim.onComplete = function() {
                        e.sprMain.visible = e._handle.visible = !0, e._anim.visible = !1, e._anim.onComplete = null, e.working = !1
                    }, e._anim.animationSpeed = -e._defaultAnimSpeed, e._anim.play()
                }, this._anim.animationSpeed = this._defaultAnimSpeed, this._anim.play(), Qi.soundOn && this.sndOnOff.play()
            }
    }, ne.prototype = Object.create(o.prototype), ne.prototype.constructor = te, ne.EVENT_OPENED = "put", ne.prototype.setPut = function(t, e) {
        if (e = void 0 != e && e, this.opened = t, this._anim.visible = t, this.interactive = !t, this.opened)
            if (e) {
                var i = this;
                this._anim.onComplete = function() {
                    i._anim.onComplete = null, i.emit(ne.EVENT_OPENED, i)
                }, this._anim.play(), TweenLite.from(this._anim, .2, {
                    alpha: 0
                })
            } else this._anim.gotoAndStop(this._anim.totalFrames - 1)
    }, ne.prototype._clickTap = function(t) {
        this.isInventorySelected(a.Stone) && (this.removeSelectedFromInventory(), this.setPut(!0, !0))
    }, ae.EVENT_CHANGE = "change", ae.prototype = Object.create(o.prototype), ae.prototype.constructor = ae, ae.prototype.setOn = function(t, e) {
        void 0 != t && (e = void 0 != e && e, this.isOn = t, e ? (this._anim.animationSpeed = this._defaultAnimSpeed * t ? 1 : -1, this._anim.play(), Qi.soundOn && this.sndBigControlVnt.play()) : this._anim.gotoAndStop(t ? this._anim.totalFrames - 1 : 0))
    }, ae.prototype._clickTap = function(t) {
        this.setOn(!this.isOn, !0), this.emit(ae.EVENT_CHANGE, this)
    }, re.EVENT_BRAKE = "brake", re.prototype = Object.create(o.prototype), re.prototype.constructor = re, re.prototype._clickTap = function(t) {
        this.isInventorySelected(a.Pickaxe) && (this.visible = !1, Qi.soundOn && this.sndOpenGrate.play(), this.emit(re.EVENT_BRAKE, this))
    }, he.EVENT_CHANGE = "change", he.prototype = Object.create(o.prototype), he.prototype.constructor = he, he.prototype.setPos = function(t, e) {
        void 0 == t && (t = 0), e = void 0 != e && e, t = Math.abs(t) % 3, this.posIndex = t;
        var i = this._pos[t];
        e ? (TweenLite.to(this.sprMain, .2, {
            x: i.x,
            y: i.y
        }), Qi.soundOn && this.sndControlVnt.play()) : (this.sprMain.x = i.x, this.sprMain.y = i.y), this.emit(he.EVENT_CHANGE, this)
    }, he.prototype._clickTap = function(t) {
        this.setPos(++this.posIndex, !0)
    }, ce.EVENT_CHANGE = "change", ce.prototype = Object.create(o.prototype), ce.prototype.constructor = ce, ce.prototype.setOpen = function(t, e) {
        t = Boolean(t), e = void 0 != e && e, this.isOpen = t, this.interactive = !this.isOpen;
        var i = t ? this._openRotation : 0;
        e ? (TweenLite.to(this.sprMain, .25, {
            rotation: i,
            ease: Back.easeOut
        }), Qi.soundOn && this.sndCoverOpen.play()) : this.sprMain.rotation = i
    }, ce.prototype._clickTap = function(t) {
        this.setOpen(!this.isOpen, !0), this.emit(ce.EVENT_CHANGE, this)
    }, le.texNames = ["vnt_pass_grate", "vnt_pass_grate", "vnt_pass_grate", "vnt_pass_grate", "vnt_pass_exit_open", "vnt_pass_exit_close", "vnt_pass_exit_down"], le.TYPE_LEFT = 0, le.TYPE_RIGHT = 1, le.TYPE_UP = 2, le.TYPE_DOWN = 3, le.TYPE_EXIT_OPEN = 4, le.TYPE_EXIT_CLOSE = 5, le.TYPE_EXIT_DOWN = 6, le.prototype = Object.create(o.prototype), le.prototype.constructor = le, de.EVENT_CHANGE = "change", de.prototype = Object.create(o.prototype), de.prototype.constructor = de, de.prototype.setGear = function(t) {
        t = Boolean(t), this.isGearSet = t, this._gear1.visible = t, this._clickArea.interactive = !t
    }, de.prototype.setRotate = function(t, e) {
        void 0 == t && (t = 0), e = void 0 != e && e, t = Math.abs(t) % 2, this.rotIndex = t;
        var i = this._rot[t];
        e ? (TweenLite.to(this.sprMain, .9, {
            rotation: i,
            ease: Power2.easeIn
        }), TweenLite.to(this._gear1, .9, {
            rotation: i,
            ease: Power2.easeIn
        }), TweenLite.to(this._gear2, .9, {
            rotation: i,
            ease: Power2.easeIn
        }), Qi.soundOn && this.sndRotatorRotate.play()) : (this.sprMain.rotation = i, this._gear1.rotation = i, this._gear2.rotation = i)
    }, de.prototype._clickTap = function(t) {
        if (this.isGearSet) Qi.playState.disableInteractiveFor(1), this.setRotate(++this.rotIndex, !0), this.emit(de.EVENT_CHANGE, this);
        else {
            var e = g.toRadians(5);
            Qi.playState.disableInteractiveFor(.27), TweenMax.to(this.sprMain, .27, {
                rotation: e,
                repeat: 1,
                yoyo: !0
            }), TweenMax.to(this._gear2, .27, {
                rotation: e,
                repeat: 1,
                yoyo: !0
            }), Qi.soundOn && this.sndNoGear.play()
        }
    }, pe.prototype = Object.create(o.prototype), pe.prototype.constructor = pe, ue.prototype = Object.create(k.prototype), ue.prototype.constructor = ue, _e.prototype = Object.create(k.prototype), _e.prototype.constructor = _e, ye.prototype = Object.create(i.prototype), ye.prototype.constructor = ye, ve.prototype = Object.create(i.prototype), ve.prototype.constructor = ve, fe.prototype = Object.create(i.prototype), fe.prototype.constructor = fe, ge.prototype = Object.create(i.prototype), ge.prototype.constructor = ge, ge.prototype._onButtonPressed = function() {
        this._lightSign.visible = !0, this._lampSaves.state = se.STATE_LAMP_ON, this.forceSaveData()
    }, ge.prototype.activate = function() {
        i.prototype.activate.call(this), this._button.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && this._button.on(vt.EVENT_PRESSED, this._onButtonPressed, this)
    }, me.prototype = Object.create(i.prototype), me.prototype.constructor = me, me.prototype._onButtonPressed = function() {
        this._lightSign.visible = !0, this._lampSaves.state = se.STATE_LAMP_ON, this.forceSaveData()
    }, me.prototype.activate = function() {
        i.prototype.activate.call(this), this._button.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && this._button.on(vt.EVENT_PRESSED, this._onButtonPressed, this)
    }, we.prototype = Object.create(i.prototype), we.prototype.constructor = we, we.prototype._onButtonPressed = function() {
        this._lightSign.visible = !0, this._lampSaves.state = se.STATE_LAMP_ON, this.forceSaveData()
    }, we.prototype.activate = function() {
        i.prototype.activate.call(this), this._button.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && this._button.on(vt.EVENT_PRESSED, this._onButtonPressed, this)
    }, Se.prototype = Object.create(i.prototype), Se.prototype.constructor = Se, Se.prototype._onButtonPressed = function() {
        this._lightSign.visible = !0, this._lampSaves.state = se.STATE_LAMP_ON, this.forceSaveData()
    }, Se.prototype.activate = function() {
        i.prototype.activate.call(this), this._button.setState(this._lampSaves.state), this._lampSaves.state == se.STATE_LAMP_IN && this._button.on(vt.EVENT_PRESSED, this._onButtonPressed, this)
    }, be.prototype = Object.create(i.prototype), be.prototype.constructor = be, Ce.prototype = Object.create(i.prototype), Ce.prototype.constructor = Ce, Ce.prototype.createDoors = function() {
        if (this.fadeA) {
            var t = new mt("front");
            t.x = 400, t.y = 260, t.clickCallbackScope = this, t.clickCallback = function() {
                this.level.fadeA()
            }, this.addChild(t)
        }
        if (this.fadeDown) {
            var e = Qi.assets.getSprite("door_cb_arrow_back", "atlasItems", !0);
            e.x = 405, e.y = 530, e.interactive = !0, e.buttonMode = !0, b.setHitAreaSize(e, 100, 100), e.on("click", function() {
                this.level.fadeDown()
            }, this), e.on("tap", function() {
                this.level.fadeDown()
            }, this), this.addChild(e)
        }
        if (this.left) {
            var i = new mt("left");
            i.x = 190, i.y = 279, i.clickCallbackScope = this, i.clickCallback = function() {
                this.level.moveLeft()
            }, this.addChild(i), this._doorLeft = i
        }
        if (this.right) {
            var s = new mt("right");
            s.x = 610, s.y = 278, s.clickCallbackScope = this, s.clickCallback = function() {
                this.level.moveRight()
            }, this.addChild(s), this._doorRight = s
        }
        if (this.up) {
            var o = new mt("up");
            o.x = 400, o.y = 65, o.clickCallbackScope = this, o.clickCallback = function() {
                this.level.moveUp()
            }, this.addChild(o), this._doorUp = o
        }
        if (this.down) {
            var n = new mt("down");
            n.x = 403, n.y = 465, n.clickCallbackScope = this, n.clickCallback = function() {
                this.level.moveDown()
            }, this.addChild(n), this._doorDown = n
        }
        var a = new gt;
        a.x = 510, a.y = 260, a.on(gt.EVENT_CLICK, this._onBtnClick, this), this.addChild(a)
    }, Ce.prototype._onBtnClick = function() {
        this.colorIndex++, this.colorIndex >= Ce.colors.length && (this.colorIndex = 1), Qi.runRelease || (this.colorIndex = this.validColorIndex), this.setColor(this.colorIndex), this._saves.colorIndex = this.colorIndex, this._saves.valid = this.validColorIndex == this.colorIndex, this.forceSaveData(), Qi.playState.emit(dt.EVENT_CB_COLOR_SWITCH, this)
    }, Ce.prototype.setColor = function(t) {
        t = Math.abs(t) % 9, this._colorRect.clear(), this._colorRect.beginFill(Ce.colors[t]), this._colorRect.drawRect(110, 0, 580, 590), this._colorRect.endFill()
    }, Ce.colors = [14214131, 5657010, 15942201, 5032909, 11131708, 9324448, 15827254, 4294937506, 4294949934], Ce.prototype.isGoUpByClickZone = function() {
        return !1
    }, Ce.prototype.isGoRightByClickZone = function() {
        return !1
    }, Ce.prototype.isGoDownByClickZone = function() {
        return !1
    }, Ce.prototype.isGoLeftByClickZone = function() {
        return !1
    }, Ce.prototype.isWayToUpOpened = function() {
        return this._doorUp && this._doorUp.opened
    }, Ce.prototype.isWayToRightOpened = function() {
        return this._doorRight && this._doorRight.opened
    }, Ce.prototype.isWayToDownOpened = function() {
        return this._doorDown && this._doorDown.opened
    }, Ce.prototype.isWayToLeftOpened = function() {
        return this._doorLeft && this._doorLeft.opened
    }, Oe.prototype = Object.create(i.prototype), Oe.prototype.constructor = Oe, Oe.prototype._onTorchOn = function() {
        this._torchSaves.isOn = !0, this.forceSaveData(), this.setBg(this._torchSaves.isOn ? "lw_01a" : "lw_01"), this.dispatchChanges()
    }, Oe.prototype.isWayToUpOpened = function() {
        return Boolean(this._torchSaves.isOn)
    }, ke.prototype = Object.create(i.prototype), ke.prototype.constructor = ke, Te.prototype = Object.create(i.prototype), Te.prototype.constructor = Te, Ie.prototype = Object.create(i.prototype), Ie.prototype.constructor = Ie, Le.prototype = Object.create(i.prototype), Le.prototype.constructor = Le, Ee.prototype = Object.create(i.prototype), Ee.prototype.constructor = Ee, Ae.prototype = Object.create(i.prototype), Ae.prototype.constructor = Ae, Ae.prototype._onDoorChange = function(t) {
        this._clickArea.interactive = t.opened, this._doorSaves.opened = t.opened, this.forceSaveData()
    }, Ae.prototype.isGoLeftByClickZone = function() {
        return !1
    }, Ae.prototype.isWayToLeftOpened = function() {
        return this._doorSaves.opened
    }, xe.prototype = Object.create(i.prototype), xe.prototype.constructor = xe, xe.prototype._onLeverMelt = function() {
        this._leverSaves.melt = !0, this.forceSaveData()
    }, xe.prototype.activate = function() {
        i.prototype.activate.call(this), this._lever.setCubePlaced(1 === this._cubeSaves.state), this._lever.setDoorClosed(0 == this._doorSaves.opened)
    }, Me.prototype = Object.create(i.prototype), Me.prototype.constructor = Me, Me.prototype._onCubeChanged = function(t) {
        this._cubeSaves.state = t.state, this.forceSaveData()
    }, Me.prototype.activate = function() {
        i.prototype.activate.call(this), this._leverSaves.melt && (this._cube.setState(2), this._bulb && (this._bulb.visible = !0))
    }, Ne.prototype = Object.create(i.prototype), Ne.prototype.constructor = Ne, Ne.prototype._clickOnTruck = function() {
        this.level.fadeA()
    }, Ne.prototype._onTruckMnFixed = function() {
        this._truckSaves.fixed = !0, this.forceSaveData()
    }, Ne.prototype._onTruckMnOiled = function() {
        this._truckSaves.oiled = !0, this.forceSaveData()
    }, Ne.prototype._clickOnLadder = function() {
        this.level.changeUp()
    }, Ne.prototype._onButtonPressed = function() {
        this.up.isOpened = !0, this._buttonSaves.pressed = !0, this.forceSaveData(), this.dispatchChanges()
    }, Ne.prototype.isWayToUpOpened = function() {
        return this._buttonSaves.pressed
    }, Pe.prototype = Object.create(i.prototype), Pe.prototype.constructor = Pe, De.prototype = Object.create(i.prototype), De.prototype.constructor = De, De.prototype._onClickBrokenDoor = function(t) {
        this.level.fadeA()
    }, De.prototype._onBrickDoorBroken = function(t) {
        this._brickDoorSaves.broken = !0, this.forceSaveData()
    }, De.prototype._onLeverOn = function(t) {
        this._leverSaves.on = !0, this.forceSaveData()
    }, Be.prototype = Object.create(i.prototype), Be.prototype.constructor = Be, Be.prototype._onGrateUnscrewed = function() {
        this._grateSaves.unscrewed = !0, this.forceSaveData()
    }, Be.prototype._onGrateUnscrewedComplete = function() {
        this._bulb.setEnableSprScr(!0)
    }, He.prototype = Object.create(i.prototype), He.prototype.constructor = He, He.prototype._onHatchOpen = function() {
        this._hatchSaves.opened = !0, this.forceSaveData(), this.dispatchChanges()
    }, He.prototype.isGoDownByClickZone = function() {
        return !1
    }, He.prototype.isWayToDownOpened = function() {
        return this._hatchSaves.opened
    }, Re.prototype = Object.create(i.prototype), Re.prototype.constructor = Re, Ve.prototype = Object.create(i.prototype), Ve.prototype.constructor = Ve, Ve.prototype.isWayToRightOpened = function() {
        return this._leverSaves.on
    }, Ue.prototype = Object.create(i.prototype), Ue.prototype.constructor = Ue, Fe.prototype = Object.create(i.prototype), Fe.prototype.constructor = Fe, Xe.prototype = Object.create(i.prototype), Xe.prototype.constructor = Xe, Xe.prototype._onCoverBrake = function() {
        this._sign.visible = !0, this._coverSaves.broken = !0, this.forceSaveData()
    }, Ge.prototype = Object.create(i.prototype), Ge.prototype.constructor = Ge, Ge.prototype._onLockClick = function() {
        this.level.fadeA()
    }, Ge.prototype.activate = function() {
        i.prototype.activate.call(this), this._door.interactive = this._lockBigSaves.isAllValid, this._lockBigSaves.isAllValid ? this._door.open() : this._door.close(), this._lock.setOn(this._lockBigSaves.isAllValid)
    }, je.prototype = Object.create(i.prototype), je.prototype.constructor = je, je.prototype.activate = function() {
        i.prototype.activate.call(this);
        const t = this.getActorSavesAnotherLocation(et._02, o.LampUc).state === se.STATE_LAMP_ON,
            e = this.getActorSavesAnotherLocation(et._03, o.LampUc).state === se.STATE_LAMP_ON,
            s = this.getActorSavesAnotherLocation(et._04, o.LampUc).state === se.STATE_LAMP_ON,
            n = this.getActorSavesAnotherLocation(et._05, o.LampUc).state === se.STATE_LAMP_ON;
        this._lock.setSlotsEnable([t, e, s, n])
    }, We.prototype = Object.create(i.prototype), We.prototype.constructor = We, We.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this.isAllCbValid();
        this._cube && (this._cube.visible = !t), this._bulb && (this._bulb.visible = t)
    }, We.prototype.isAllCbValid = function() {
        for (var t = 1; t <= 8; t++) {
            if (0 == Boolean(this.getActorSavesAnotherLocation("Cb_0" + t, "Cb_0" + t).valid)) return !1
        }
        return !0
    }, Ke.prototype = Object.create(i.prototype), Ke.prototype.constructor = Ke, Ke.prototype._onStoneRemoved = function() {
        this._clickArea.visible = !0, this._savesStone.removed = !0, this.forceSaveData()
    }, Ke.prototype._onItemClick = function(t) {
        i.prototype._onItemClick.call(this, t), t.name == a.Gear && this._door.open(!0)
    }, ze.prototype = Object.create(i.prototype), ze.prototype.constructor = ze, Ye.prototype = Object.create(i.prototype), Ye.prototype.constructor = Ye, Ye.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this.level.prevLocationName == Q._07;
        this._rails.play(t), this._trolley.play(t);
        this._black.alpha = 1, TweenLite.to(this._black, 1, {
            alpha: 0,
            ease: Power0.easeNone
        }), TweenLite.to(this._black, 1, {
            delay: 2,
            alpha: 1,
            ease: Power0.easeNone
        });
        var e = 0,
            s = 800 - this.bg.width;
        t || (e = 800 - this.bg.width, s = 0), this.bg.x = e, TweenLite.to(this.bg, 4, {
            x: s,
            ease: Power0.easeNone,
            onCompleteScope: this,
            onComplete: function() {
                t ? this.level.fadeB(!0, !1) : this.level.fadeA(!0, !1)
            }
        }), Qi.soundOn && this.sndTrolleyMoving.play()
    }, Ye.prototype.deactivate = function() {
        i.prototype.deactivate.call(this), this.bg.x = 0, this._rails.stop(), this._trolley.stop(), this.sndTrolleyMoving.stop()
    }, Ze.prototype = Object.create(i.prototype), Ze.prototype.constructor = Ze, Ze.prototype.activate = function() {
        i.prototype.activate.call(this), this.setBg(this._savesBigControl.isLightOn ? "sbw_01a" : "sbw_01")
    }, Je.prototype = Object.create(i.prototype), Je.prototype.constructor = Je, Je.prototype._onDoorChanged = function() {
        this._savesDoor.isOpen = !0, this.forceSaveData()
    }, Je.prototype.activate = function() {
        i.prototype.activate.call(this), this.setBg(this._savesBigControl.isLightOn ? "sbw_02a" : "sbw_02")
    }, qe.prototype = Object.create(i.prototype), qe.prototype.constructor = qe, qe.prototype.activate = function() {
        i.prototype.activate.call(this), this.setBg(this._savesBigControl.isLightOn ? "sbw_03a" : "sbw_03")
    }, $e.prototype = Object.create(i.prototype), $e.prototype.constructor = $e, Qe.prototype = Object.create(i.prototype), Qe.prototype.constructor = Qe, Qe.prototype.activate = function() {
        i.prototype.activate.call(this), this.setBg(this._savesBigControl.isLightOn ? "sbw_05a" : "sbw_05")
    }, ti.prototype = Object.create(i.prototype), ti.prototype.constructor = ti, ti.prototype._onButtonChange = function(t) {
        this._savesButton.state = t.state, this.forceSaveData()
    }, ti.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this._savesBigControl.isLightOn;
        (this.setBg(t ? "sbw_06a" : "sbw_06"), t) ? 2 == this._savesButton.state ? this._btn.setState(2) : this._btn.setState(1): this._btn.setState(0)
    }, ei.prototype = Object.create(i.prototype), ei.prototype.constructor = ei, ei.prototype._onTrolleyHandleOn = function() {
        Qi.playState.setEnableInteractive(!1), this._stopper.animateDown(function() {
            TweenLite.delayedCall(.5, function() {
                this.level.fadeA(!0, !1)
            }, null, this)
        }, this)
    }, ei.prototype.activate = function() {
        i.prototype.activate.call(this), this._handle.setEnable(2 == this._savesButton.state), this._stopper.setUp(), Qi.playState.setEnableInteractive(!0)
    }, ii.prototype = Object.create(i.prototype), ii.prototype.constructor = ii, si.prototype = Object.create(i.prototype), si.prototype.constructor = si, si.prototype._onTrolleyHandleOn = function() {
        Qi.playState.setEnableInteractive(!1), this._stopper.animateDown(function() {
            TweenLite.delayedCall(.5, function() {
                this.level.fadeA(!0, !1)
            }, null, this)
        }, this)
    }, si.prototype.activate = function() {
        i.prototype.activate.call(this), this.setBg(Boolean(this._torchSaves.isOn) ? "sbw_16a" : "sbw_16"), this._handle.setEnable(!0), this._stopper.setUp(), Qi.playState.setEnableInteractive(!0)
    }, oi.prototype = Object.create(i.prototype), oi.prototype.constructor = oi, ni.prototype = Object.create(i.prototype), ni.prototype.constructor = ni, ni.prototype.onGongBang = function() {
        this._stairs.show()
    }, ni.prototype._onStairsShow = function(t) {
        this._stairsSaves.showed = !0, this.forceSaveData()
    }, ni.prototype._onStairsOpen = function(t) {
        this._stairsSaves.opened = !0, this.forceSaveData(), this.dispatchChanges()
    }, ni.prototype.isWayToUpOpened = function() {
        return this._stairsSaves.opened
    }, ai.prototype = Object.create(i.prototype), ai.prototype.constructor = ai, ri.prototype = Object.create(i.prototype), ri.prototype.constructor = ri, ri.prototype._onStairsOpen = function(t) {
        this._stairsSaves.opened = !0, this.forceSaveData(), this.dispatchChanges()
    }, ri.prototype.isWayToUpOpened = function() {
        return this._stairsSaves.opened
    }, hi.prototype = Object.create(i.prototype), hi.prototype.constructor = hi, hi.prototype._onStairsOpen = function(t) {
        this._stairsSaves.opened = !0, this.forceSaveData(), this.dispatchChanges()
    }, hi.prototype.isWayToUpOpened = function() {
        return this._stairsSaves.opened
    }, ci.prototype = Object.create(i.prototype), ci.prototype.constructor = ci, ci.prototype._onDoorOpen = function() {
        this._doorSaves.opened = !0, this.forceSaveData()
    }, li.prototype = Object.create(i.prototype), li.prototype.constructor = li, di.prototype = Object.create(i.prototype), di.prototype.constructor = di, di.prototype._onHandleCreated = function() {
        this._doorSaves.handle = !0, this.forceSaveData()
    }, di.prototype._onDoorOpen = function() {
        this._doorSaves.opened = !0, this.forceSaveData()
    }, di.prototype._openOutro = function() {
        if (!this._outro) {
            var t = new yt;
            t.x = 400, t.y = 300, t.alpha = 0, t.on("destroy", function() {
                this._outro = null
            }, this), TweenLite.to(t, 1, {
                alpha: 1
            }), Qi.playState.addChild(t), this._outro = t
        }
    }, pi.prototype = Object.create(i.prototype), pi.prototype.constructor = pi, pi.prototype.isGoLeftByClickZone = function() {
        return !1
    }, ui.prototype = Object.create(i.prototype), ui.prototype.constructor = ui, ui.prototype._onLampStateChanged = function(t) {
        this._lampSaves.state = t.state, this.forceSaveData()
    }, ui.prototype.activate = function() {
        i.prototype.activate.call(this), this._lamp.setState(this._lampSaves.state)
    }, _i.prototype = Object.create(i.prototype), _i.prototype.constructor = _i, _i.prototype._onLampStateChanged = function(t) {
        this._lampSaves.state = t.state, this.forceSaveData()
    }, _i.prototype.activate = function() {
        i.prototype.activate.call(this), this._lamp.setState(this._lampSaves.state)
    }, yi.prototype = Object.create(i.prototype), yi.prototype.constructor = yi, yi.prototype._onLampStateChanged = function(t) {
        this._lampSaves.state = t.state, this.forceSaveData()
    }, yi.prototype.activate = function() {
        i.prototype.activate.call(this), this._lamp.setState(this._lampSaves.state)
    }, vi.prototype = Object.create(i.prototype), vi.prototype.constructor = vi, vi.prototype._onLampStateChanged = function(t) {
        this._lampSaves.state = t.state, this.forceSaveData()
    }, vi.prototype.activate = function() {
        i.prototype.activate.call(this), this._lamp.setState(this._lampSaves.state)
    }, fi.prototype = Object.create(i.prototype), fi.prototype.constructor = fi, gi.prototype = Object.create(i.prototype), gi.prototype.constructor = gi, mi.prototype = Object.create(i.prototype), mi.prototype.constructor = mi, wi.prototype = Object.create(i.prototype), wi.prototype.constructor = wi, Si.prototype = Object.create(i.prototype), Si.prototype.constructor = Si, bi.prototype = Object.create(i.prototype), bi.prototype.constructor = bi, bi.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this.isRotatorVertical();
        this._grate.visible = t, this._clickArea.visible = !t
    }, bi.prototype.isRotatorVertical = function() {
        var t = this._rotatorSaves.rotIndex;
        return 0 == (void 0 == t ? 0 : t)
    }, bi.prototype.isGoLeftByClickZone = function() {
        return !1
    }, bi.prototype.isWayToLeftOpened = function() {
        return !this.isRotatorVertical()
    }, Ci.prototype = Object.create(i.prototype), Ci.prototype.constructor = Ci, Oi.prototype = Object.create(i.prototype), Oi.prototype.constructor = Oi, Oi.prototype._onGrateOpened = function() {
        this._clickArea.visible = !0, this._grateSaves.opened = !0, this.forceSaveData()
    }, Oi.prototype._onScrewUncrew = function(t) {
        this._grateSaves["unscrewed" + t.index] = !0, this.forceSaveData()
    }, Oi.prototype.isGoLeftByClickZone = function() {
        return !1
    }, ki.prototype = Object.create(i.prototype), ki.prototype.constructor = ki, Ti.prototype = Object.create(i.prototype), Ti.prototype.constructor = Ti, Ii.prototype = Object.create(i.prototype), Ii.prototype.constructor = Ii, Ii.prototype._onLeverOn = function() {
        this._leverSaves.isOn = !0, this.forceSaveData()
    }, Ii.prototype.activate = function() {
        i.prototype.activate.call(this), this._lever.shakingCountCube = this._cubeSaves.shakingCount
    }, Li.prototype = Object.create(i.prototype), Li.prototype.constructor = Li, Li.prototype._onCubeShakingChanged = function(t) {
        this._savesCube.shakingCount = t.shakingCount, this.forceSaveData()
    }, Li.prototype._onCubeOpened = function(t) {
        null != this._cubeInv && (this._cubeInv.visible = !0), this._savesCube.opened = !0, this.forceSaveData()
    }, Li.prototype.activate = function() {
        i.prototype.activate.call(this), this._leverLeftSaves.isOn && this._leverRightSaves.isOn && this._cube.setShaking(4)
    }, Ei.prototype = Object.create(i.prototype), Ei.prototype.constructor = Ei;
    Ei.prototype._onLeverOn = function() {
        this._leverSaves.isOn = !0, this.forceSaveData()
    }, Ei.prototype.activate = function() {
        i.prototype.activate.call(this), this._lever.shakingCountCube = this._cubeSaves.shakingCount
    }, Ai.prototype = Object.create(i.prototype), Ai.prototype.constructor = Ai, Ai.prototype._onClickArea = function() {
        if (this._saves.put) this.level.fadeA();
        else if (this._clickArea.isInventorySelected(a.Binoculars)) {
            var t = this._clickArea.getInventorySelected();
            this._clickArea.removeSelectedFromInventory(), this._setBinoculars(t), this._clickArea.buttonMode = !0, this._saves.put = !0, this.forceSaveData()
        }
    }, Ai.prototype._setBinoculars = function(t) {
        t.x = 375, t.y = 240, t.scaleSprScrHitArea(0, 0), t.sprScr.scale.set(1), t.setScrMode(), t.setEnableSprScr(!1), this.addChild(t)
    }, xi.prototype = Object.create(i.prototype), xi.prototype.constructor = xi, Mi.prototype = Object.create(i.prototype), Mi.prototype.constructor = Mi, Ni.prototype = Object.create(i.prototype), Ni.prototype.constructor = Ni, Ni.prototype._onStonePut = function() {
        this._door.setOpen(!0, !0), this._stoneSaves.isPut = !0, this.forceSaveData()
    }, Ni.prototype.isGoRightByClickZone = function() {
        return !1
    }, Ni.prototype.isWayToRightOpened = function() {
        return this._stoneSaves.isPut
    }, Pi.prototype = Object.create(i.prototype), Pi.prototype.constructor = Pi, Pi.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this.isRotatorVertical();
        this._passDown.visible = !t
    }, Pi.prototype.isRotatorVertical = function() {
        var t = this._rotatorSaves.rotIndex;
        return 0 == (void 0 == t ? 0 : t)
    }, Pi.prototype._onCloseBrake = function() {
        this._closeSaves.broken = !0, this.forceSaveData(), this.dispatchChanges()
    }, Pi.prototype.isWayToDownOpened = function() {
        return this.isRotatorVertical()
    }, Pi.prototype.isWayToLeftOpened = function() {
        return this._closeSaves.broken
    }, Di.prototype = Object.create(i.prototype), Di.prototype.constructor = Di, Bi.prototype = Object.create(i.prototype), Bi.prototype.constructor = Bi, Bi.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this.isRotatorVertical();
        this._passLeft.visible = t, this._passDown.visible = !t, this._passUp.visible = !t, this._passExitOpen.visible = !t
    }, Bi.prototype.isRotatorVertical = function() {
        var t = this._rotatorSaves.rotIndex;
        return 0 == (void 0 == t ? 0 : t)
    }, Bi.prototype.isWayToUpOpened = function() {
        return this.isRotatorVertical()
    }, Bi.prototype.isWayToRightOpened = function() {
        return !this.isRotatorVertical()
    }, Bi.prototype.isWayToDownOpened = function() {
        return this.isRotatorVertical()
    }, Bi.prototype.isWayToLeftOpened = function() {
        return !this.isRotatorVertical()
    }, Hi.prototype = Object.create(i.prototype), Hi.prototype.constructor = Hi, Hi.prototype.activate = function() {
        i.prototype.activate.call(this);
        var t = this.isRotatorVertical();
        this._passUp.visible = !t
    }, Hi.prototype.isRotatorVertical = function() {
        var t = this._rotatorSaves.rotIndex;
        return 0 == (void 0 == t ? 0 : t)
    }, Hi.prototype.isWayToUpOpened = function() {
        return this.isRotatorVertical()
    }, Ri.prototype = Object.create(i.prototype), Ri.prototype.constructor = Ri, Vi.prototype = Object.create(i.prototype), Vi.prototype.constructor = Vi, Vi.prototype.activate = function() {
        i.prototype.activate.call(this), this._passDown.visible = this.isItemPickedUpAnotherLocation(it._06, a.LightBulb)
    }, Ui.prototype = Object.create(i.prototype), Ui.prototype.constructor = Ui, Ui.prototype._onItemClick = function(t) {
        i.prototype._onItemClick.call(this, t), t.name == a.LightBulb && this.setBg("vnt_06a")
    }, Fi.prototype = Object.create(i.prototype), Fi.prototype.constructor = Fi, Fi.prototype._onRotatorChange = function(t) {
        this._rotatorSaves.isGearSet = t.isGearSet, this._rotatorSaves.rotIndex = t.rotIndex, this.forceSaveData()
    }, Fi.prototype._onCoverChange = function(t) {
        this._coverSaves.isOpen = t.isOpen, this.forceSaveData()
    }, Xi.prototype = Object.create(i.prototype), Xi.prototype.constructor = Xi, Xi.prototype.activate = function() {
        i.prototype.activate.call(this), this._passExitClose.visible = !this.isGrateOpened()
    }, Xi.prototype.isGrateOpened = function() {
        return Boolean(this._grateSaves.opened)
    }, Xi.prototype.isWayToRightOpened = function() {
        return this.isGrateOpened()
    }, Gi.prototype = Object.create(i.prototype), Gi.prototype.constructor = Gi, ji.prototype = Object.create(i.prototype), ji.prototype.constructor = ji, ji.prototype.isAllControlValid = function() {
        for (var t = 1; t <= 4; t++)
            if (!this._savesControl["isValid" + t]) return !1;
        return !0
    }, ji.prototype._onBigControlChanged = function(t) {
        this._savesBigControl.isOn = t.isOn, this._savesBigControl.isLightOn = t.isOn && this.isAllControlValid(), this.forceSaveData()
    }, ji.prototype._onControlChanged = function(t) {
        this._savesControl["pos" + t.num] = t.posIndex, this._savesControl["isValid" + t.num] = t.posIndex == t.validIndex, this.forceSaveData()
    }, Wi.prototype = Object.create(i.prototype), Wi.prototype.constructor = Wi, Wi.prototype.update = function() {
        this._filter.seed = Math.random(), this._filter.time += .2
    }, Wi.prototype.activate = function() {
        i.prototype.activate.call(this), this._showEffect ? (this.setBg(this._savesBigControl.isLightOn ? "sbw_03a" : "sbw_03"), Qi.pixi.ticker.add(this.update, this)) : this.setBg(this._savesBigControl.isLightOn ? "vnt_11a" : "vnt_11b")
    }, Wi.prototype.deactivate = function() {
        i.prototype.deactivate.call(this), this._showEffect && Qi.pixi.ticker.remove(this.update, this)
    }, Ki.prototype = Object.create(i.prototype), Ki.prototype.constructor = Ki, zi.prototype = Object.create(i.prototype), zi.prototype.constructor = zi, Yi.prototype = Object.create(i.prototype), Yi.prototype.constructor = Yi, Zi.prototype = Object.create(i.prototype), Zi.prototype.constructor = Zi, Ji.prototype = Object.create(s.prototype), Ji.prototype.constructor = Ji, qi.prototype = Object.create(s.prototype), qi.prototype.constructor = qi, qi.prototype._onDoorOpen = function() {
        this._doorSaves.opened = !0, this.forceSaveData()
    }, $i.prototype = Object.create(i.prototype), $i.prototype.constructor = $i;
    const Qi = {
        encode: !0,
        verbose: !1,
        verboseLoading: !1,
        runRelease: !0,
        runPreloader: !0,
        runState: 1,
        musicAndSoundTogether: !0,
        showHitAreas: !1,
        showClickZones: !1,
        version: "1.05",
        loc: null,
        time: 0,
        pixi: null,
        soundMng: null,
        assets: null,
        inited: !1,
        audioEnabled: !1,
        musicOn: !0,
        soundOn: !0,
        music: null,
        menuState: null,
        playState: null,
        introState: null,
        shutter: null,
        SAVE_KEY_SOUND: "cp_saveSound",
        storage: null,
        saveData: null,
        browserEvents: null,
        gameWidth0: 800,
        gameHeight0: 600,
        scale: 1,
        rnd: null,
        device: null,
        fps: null
    };

    function ts() {
        Qi.storage.setJson("appSaveData", Qi.saveData)
    }

    function es() {
        Qi.inited ? b.scaleToWindow(Qi.pixi.renderer.view) : function() {
            if (Qi.device = new Device, Qi.audioEnabled = !Qi.device.ie && Qi.device.canPlayAudio("mp3"), Qi.device.android && !Qi.device.chrome) {
                var e = document.createElement("p"),
                    i = document.createTextNode("This game doesn't work correctly in default Android browser. Please install Chrome on your device.");
                return e.appendChild(i), void document.getElementById("msg").appendChild(e)
            }
            var s = document.getElementById("msg");
            s.parentNode.removeChild(s);
            Qi.device.safari && Qi.device.iOS && setInterval(function() {
                t.scrollTo(0, -1)
            }, 500);
            Qi.pixi = new PIXI.Application(Qi.gameWidth0, Qi.gameHeight0, {
                antialias: !0,
                forceCanvas: Qi.device.ie
            }), Qi.pixi.renderer.backgroundColor = 0, document.body.appendChild(Qi.pixi.view), b.scaleToWindow(Qi.pixi.renderer.view), document.ontouchstart = function(t) {
                t.preventDefault()
            }, document.body.addEventListener("selectstart", function(t) {
                t.preventDefault()
            }, !1), Qi.browserEvents = new d, Qi.browserEvents.on("onResize", es), Qi.browserEvents.on("onOrientationChange", es), Qi.storage = new S, Qi.saveData = new w(Qi.storage.getJson("appSaveData")), Qi.assets = new l(Qi), Qi.rnd = new C([(Date.now() * Math.random()).toString()]);
            try {
                Qi.fps = new FPSMeter(document.body)
            } catch (t) {}
            Qi.shutter = new ht, Qi.runPreloader && Qi.pixi.stage.addChild(Qi.preloader = new h);
            if (PIXI.loader.baseUrl = "assets", PIXI.loader.add("splash", "images/splash.png").add("loc_en", "loc/en.json").add("atlasItems", "images/atlasItems.json").add("atlasUI", "images/atlasUI.json").add("atlasPortal", "images/atlasPortal.json").add("atlasTruckMnRide", "images/atlasTruckMnRide.json").add("atlasCubeUcOpening", "images/atlasCubeUcOpening.json").add("atlasDoors", "images/atlasDoors.json").add("atlasRails", "images/atlasRails.json").add("atlasTorch", "images/atlasTorch.json"), b.addBackground("tbt", "01"), b.addBackground("tbt", "02"), b.addBackground("tbt", "03"), b.addBackground("tbt", "04_05"), b.addBackground("tbt", "06"), b.addBackground("tbt", "07"), b.addBackground("tbt", "08"), b.addBackground("mn", "01"), b.addBackground("mn", "01a"), b.addBackground("mn", "02"), b.addBackground("mn", "02a"), b.addBackground("mn", "03"), b.addBackground("mn", "04"), b.addBackground("mn", "05"), b.addBackground("mn", "06"), b.addBackground("mn", "07"), b.addBackground("mn", "08"), b.addBackground("mn", "09"), b.addBackground("mn", "09a"), b.addBackground("bnk", "01"), b.addBackground("bnk", "02_03"), b.addBackground("bnk", "04"), b.addBackground("bnk", "05"), b.addBackground("bnk", "06"), b.addBackground("bnk", "07"), b.addBackground("bnk", "08"), b.addBackground("bnk", "09"), b.addBackground("uc", "01"), b.addBackground("uc", "02_03_05"), b.addBackground("uc", "04"), b.addBackground("uc", "06"), b.addBackground("uc", "06a"), b.addBackground("uc", "07"), b.addBackground("uc", "08_09"), b.addBackground("uc", "10"), b.addBackground("uc", "11"), b.addBackground("uc", "12"), b.addBackground("uc", "13_14_16"), b.addBackground("uc", "15"), b.addBackground("uc", "17"), b.addBackground("uc", "18"), b.addBackground("uc", "19"), b.addBackground("uc", "20"), b.addBackground("uc", "20a"), b.addBackground("uc", "21_22"), b.addBackground("uc", "23"), b.addBackground("vnt", "01"), b.addBackground("vnt", "01a"), b.addBackground("vnt", "02"), b.addBackground("vnt", "03"), b.addBackground("vnt", "04_09_12"), b.addBackground("vnt", "05"), b.addBackground("vnt", "06a"), b.addBackground("vnt", "06b"), b.addBackground("vnt", "07"), b.addBackground("vnt", "08"), b.addBackground("vnt", "10"), b.addBackground("vnt", "11"), b.addBackground("vnt", "11a"), b.addBackground("vnt", "11b"), b.addBackground("vnt", "13"), b.addBackground("vnt", "14"), b.addBackground("vnt", "15"), b.addBackground("pr", "01"), b.addBackground("pr", "02"), b.addBackground("pr", "02a"), b.addBackground("lw", "01"), b.addBackground("lw", "01a"), b.addBackground("lw", "02_06"), b.addBackground("lw", "03_07"), b.addBackground("lw", "04_08"), b.addBackground("lw", "05"), b.addBackground("lw", "09"), b.addBackground("lw", "10"), b.addBackground("lw", "11"), b.addBackground("lw", "12"), b.addBackground("sbw", "00"), b.addBackground("sbw", "01"), b.addBackground("sbw", "01a"), b.addBackground("sbw", "02"), b.addBackground("sbw", "02a"), b.addBackground("sbw", "03"), b.addBackground("sbw", "03a"), b.addBackground("sbw", "04"), b.addBackground("sbw", "05"), b.addBackground("sbw", "05a"), b.addBackground("sbw", "06"), b.addBackground("sbw", "06a"), b.addBackground("sbw", "07"), b.addBackground("sbw", "08_15"), b.addBackground("sbw", "16"), b.addBackground("sbw", "16a"), b.addBackground("wt", "01"), b.addBackground("wt", "02_03_04"), b.addBackground("wt", "05"), b.addBackground("wt", "06"), b.addBackground("cb", "01"), Qi.audioEnabled) {
                PIXI.loader.add("sndButton", "audio/sounds/button.mp3").add("sndMove", "audio/sounds/move.mp3").add("sndFade", "audio/sounds/moveto.mp3").add("sndStairsTibet", "audio/sounds/tbt01_stonestair.mp3").add("sndGongTibet", "audio/sounds/tbt03_gong.mp3").add("sndDoorHandleLock", "audio/sounds/tbt06_handle_try.mp3").add("sndDoorHandleOpen", "audio/sounds/tbt06_unlock_door.mp3").add("sndDoorOpen", "audio/sounds/open_door.mp3").add("sndTeleport", "audio/sounds/teleport.mp3").add("sndInvAdd", "audio/sounds/inv_collect.mp3").add("sndInvSelect", "audio/sounds/inv_choose.mp3").add("sndInvDeselect", "audio/sounds/inv_unchoose.mp3").add("sndInvCombine", "audio/sounds/inv_combine.mp3").add("sndInvClick", "audio/sounds/inv_choose.mp3").add("sndInvUse", "audio/sounds/inv_use.mp3").add("sndInvOpenNote", "audio/sounds/inv_enter_note.mp3").add("sndInvCloseNote", "audio/sounds/inv_exit_note.mp3").add("sndInvPage", "audio/sounds/inv_page.mp3").add("sndInvOpen", "audio/sounds/inv_open.mp3").add("sndInvClose", "audio/sounds/inv_close.mp3").add("sndLeverMnOn", "audio/sounds/mn02_lever_on.mp3").add("sndLeverMnOnOff", "audio/sounds/mn02_lever_on_off.mp3").add("sndButtonMn", "audio/sounds/mn01_button.mp3").add("sndBrickDoorBrakeMn", "audio/sounds/mn02_brake_wall.mp3").add("sndOilDropMn", "audio/sounds/mn04_drop.mp3").add("sndOilDropMn01", "audio/sounds/mn01_oil_drop.mp3").add("sndTruckMnRide", "audio/sounds/mn02_truck_going.mp3").add("sndTruckMnStuck", "audio/sounds/mn02_truck_stuck.mp3").add("sndHatchMnOpening", "audio/sounds/mn03_hatch_opening.mp3").add("sndHatchMnTryOpen", "audio/sounds/mn03_try_to_open.mp3").add("sndHatchMnUnlock", "audio/sounds/mn03_unlock_hatch.mp3").add("sndRotateSlots", "audio/sounds/mn09a_rotate_slots.mp3").add("sndLadderMnDown", "audio/sounds/mn01_stairs_down.mp3").add("sndDoorCbOpen", "audio/sounds/cb_cube_door_opening.mp3").add("sndButtonCb", "audio/sounds/cb_cube_btn.mp3").add("sndDoorPrOpen", "audio/sounds/pr02_open_cube_door.mp3").add("sndLotusStoneRemoved", "audio/sounds/pr02_remove_lotus_stone.mp3").add("sndCollectSign", "audio/sounds/collect_sign.mp3").add("sndLeverUcDown", "audio/sounds/uc17-uc19_lever_down.mp3").add("sndCubeUcOpen", "audio/sounds/uc18_open_metal_cube.mp3").add("sndCubeUcSwitch", "audio/sounds/uc18_switch_metal_cube.mp3").add("sndTurnInLamp", "audio/sounds/uc02-05_turn_in_lamp.mp3").add("sndButtonBnkOnOff", "audio/sounds/bnk_try_to_press_bunker_btn.mp3").add("sndControlVnt", "audio/sounds/vnt11_press_pult_handle.mp3").add("sndBigControlVnt", "audio/sounds/vnt11_press_pult_big_handle.mp3").add("sndRotatorRotate", "audio/sounds/vnt07_rotate_rotator.mp3").add("sndCoverOpen", "audio/sounds/vnt07_open_rotator_cover.mp3").add("sndScrewUnscrew", "audio/sounds/uc12_unscrew.mp3").add("sndOpenGrate", "audio/sounds/vnt01_open_secret_room_vent.mp3").add("sndTrolleyMoving", "audio/sounds/trolley_moving.mp3").add("sndTorchFire", "audio/sounds/lw01_torch_fire.mp3").add("sndDoorLwOpen", "audio/sounds/lw10_open_lotus_door.mp3").add("sndSunRays", "audio/sounds/lw11_sun_rays.mp3").add("sndLockSlotOpen", "audio/sounds/mn09a_open_mine_door_lock.mp3").add("sndBrakeSign1Cover", "audio/sounds/brake_sign1_cover.mp3").add("sndHandleSbw", "audio/sounds/handle_subway.mp3").add("sndMenuMusic", "audio/music/Abandoned.mp3").add("sndTibetMusic", "audio/music/Tibet.mp3").add("sndSacramentMusic", "audio/music/Sacrament.mp3").add("sndNightmareMusic", "audio/music/Nightmare.mp3").add("sndOtherworldMusic", "audio/music/Otherworld.mp3").add("sndMystMusic", "audio/music/Myst.mp3").add("sndSecret2Music", "audio/music/Secret2.mp3")
            }
            PIXI.loader.on("progress", is).load(ss), Qi.inited = !0
        }(), Qi.resizeHandler && Qi.resizeHandler.call()
    }

    function is(t, e) {
        if (Qi.verboseLoading && console.log("Loading", "|", e.name, "|", e.url, "|", t.progress), es(), Qi.preloader) {
            var i = Math.round(t.progress);
            Qi.preloader.setPercent(i)
        }
    }

    function ss() {
        Qi.preloader ? (Qi.preloader.setPercent(100), TweenLite.delayedCall(.5, os)) : ns()
    }

    function os() {
        Qi.splash = new c, Qi.splash.runAfter(ns), Qi.pixi.stage.addChild(Qi.splash)
    }

    function ns() {
        Qi.preloader && (Qi.preloader.destroy(), Qi.preloader = null), es(), Qi.splash && (Qi.splash.destroy(), Qi.splash = null), b.atHome(["www.coolmath-games.com", "www.coolmathgames.com", "coolmath-games.com", "coolmathgames.com", "www.edit.coolmath-games.com", "www.edit.coolmathgames.com", "edit.coolmath-games.com", "edit.coolmathgames.com", "www.stage.coolmath-games.com", "www.stage.coolmathgames.com", "stage.coolmath-games.com", "stage.coolmathgames.com", "www.edit-stage.coolmath-games.com", "www.edit-stage.coolmathgames.com", "edit-stage.coolmath-games.com", "edit-stage.coolmathgames.com", "www.dev.coolmath-games.com", "www.dev.coolmathgames.com", "dev.coolmath-games.com", "dev.coolmathgames.com", "www.m.coolmath-games.com", "www.m.coolmathgames.com", "m.coolmath-games.com", "m.coolmathgames.com", "www.ab1.bitballoon.com", "ab1.bitballoon.com", "krutovig.com", "localhost"]) ? (Qi._checkAudio(), Qi.pixi.ticker.add(function() {
            Qi.time += .001 * Qi.pixi.ticker.elapsedMS
        }), Qi.loc = new ot(Qi.assets.getParsedJSON("loc_en")), 1 == Qi.runState ? new lt : 2 == Qi.runState ? new dt : 3 == Qi.runState && new ct, Qi.shutter.hide()) : console.log("!" + t.location.hostname)
    }
    Qi.forceSaveData = function() {
        null != Qi._delaySaveInventory && Qi._delaySaveInventory.kill(), Qi._delaySaveInventory = TweenLite.delayedCall(.1, ts)
    }, Qi.clearSaveData = function() {
        Qi.storage.clear(), Qi.saveData = new w
    }, t.App = Qi, Qi.verbose ? t.trace = t.print = console.log : t.trace = t.print = function() {}, es(), Qi._checkAudio = function() {
        Qi.music = new m, Qi.audioEnabled ? (void 0 != Qi.saveData.get("musicOn") && (Qi.musicOn = Qi.saveData.get("musicOn")), void 0 != Qi.saveData.get("soundOn") && (Qi.soundOn = Qi.saveData.get("soundOn")), Qi.browserEvents.on("onPageShow", function(t) {
            PIXI.sound.resumeAll()
        }), Qi.browserEvents.on("onPageHide", function(t) {
            PIXI.sound.pauseAll()
        }), Qi.browserEvents.on("onFocusGet", function(t) {
            PIXI.sound.resumeAll()
        }), Qi.browserEvents.on("onFocusLost", function(t) {
            PIXI.sound.pauseAll()
        })) : (Qi.musicOn = !1, Qi.soundOn = !1)
    }, Qi.setMusicEnable = function(t) {
        !1 !== Qi.audioEnabled && (Qi.musicOn = t, Qi.musicOn ? Qi.music.isPlaying || (Qi.music.resume(), Qi.music.isPlaying || Qi.music.play()) : Qi.music.isPlaying && Qi.music.pause(), Qi.saveData.set(Qi.musicOn, "musicOn"), Qi.forceSaveData())
    }, Qi.switchMusicEnable = function() {
        Qi.setMusicEnable(!Qi.musicOn)
    }, Qi.setSoundEnable = function(t) {
        !1 !== Qi.audioEnabled && (Qi.soundOn = t, Qi.saveData.set(Qi.soundOn, "soundOn"), Qi.forceSaveData())
    }, Qi.switchSoundEnable = function() {
        Qi.setSoundEnable(!Qi.soundOn)
    }, t.unlockAllLevels = function() {
        Qi.levelMng && Qi.levelMng.unlockAllLevels(), Qi.menuState && Qi.menuState._levelsDialog.refresh()
    }, parent.unlockAllLevels = t.unlockAllLevels
}(window);