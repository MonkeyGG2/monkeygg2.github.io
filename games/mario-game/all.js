function applyNewJs() {
    document.body.addEventListener("keydown", (function(e) {
        32 !== e.keyCode && 38 !== e.keyCode && 40 !== e.keyCode || e.target !== document.body || e.preventDefault()
    }), !1), document.getElementById("paused") && document.getElementById("paused").remove(), document.getElementById("mobile-controls") && document.getElementById("mobile-controls").remove();
    var e = createElement("div", {
            id: "paused"
        }),
        t = createElement("span");
    t.innerText = "CLICK TO UNPAUSE", e.appendChild(t), body.appendChild(e);
    var n = createElement("div", {
            id: "mobile-controls"
        }),
        x = createElement("div", {
            id: "move-left",
            className: "move"
        }),
        r = createElement("div", {
            id: "move-top",
            className: "move"
        }),
        i = createElement("div", {
            id: "move-right",
            className: "move"
        }),
        a = createElement("div", {
            id: "move-bottom",
            className: "move"
        }),
        o = createElement("div", {
            id: "move-fire",
            className: "move"
        }),
        l = createElement("span"),
        s = createElement("span"),
        d = createElement("span"),
        u = createElement("span"),
        p = createElement("span");
    x.appendChild(l), r.appendChild(s), i.appendChild(d), a.appendChild(u), o.appendChild(p), n.appendChild(x), n.appendChild(r), n.appendChild(i), n.appendChild(a), n.appendChild(o), body.appendChild(n);
    var c = document.getElementById("move-right"),
        m = document.getElementById("move-left"),
        h = document.getElementById("move-top"),
        f = document.getElementById("move-bottom"),
        g = document.getElementById("move-fire");
    c.addEventListener("touchstart", (function(e) {
        var t = new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 68
        });
        document.body.dispatchEvent(t)
    })), c.addEventListener("touchend", (function(e) {
        var t = new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 68
        });
        document.body.dispatchEvent(t)
    })), m.addEventListener("touchstart", (function(e) {
        var t = new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 65
        });
        document.body.dispatchEvent(t)
    })), m.addEventListener("touchend", (function(e) {
        var t = new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 65
        });
        document.body.dispatchEvent(t)
    })), h.addEventListener("touchstart", (function(e) {
        var t = new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 87
        });
        document.body.dispatchEvent(t)
    })), h.addEventListener("touchend", (function(e) {
        var t = new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 87
        });
        document.body.dispatchEvent(t)
    })), f.addEventListener("touchstart", (function(e) {
        var t = new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 83
        });
        document.body.dispatchEvent(t)
    })), f.addEventListener("touchend", (function(e) {
        var t = new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 83
        });
        document.body.dispatchEvent(t)
    })), g.addEventListener("touchstart", (function(e) {
        var t = new KeyboardEvent("keydown", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 17
        });
        document.body.dispatchEvent(t)
    })), g.addEventListener("touchend", (function(e) {
        var t = new KeyboardEvent("keyup", {
            bubbles: !0,
            cancelable: !0,
            keyCode: 17
        });
        document.body.dispatchEvent(t)
    })), document.getElementById("data_display").style = "width:100%;font-size:13px"
}

function resetData() {
    var e;
    (e = document.getElementById("data_display")) && body.removeChild(e), window.data || (window.data = new Data)
}

function Data() {
    this.playerpower = 1, this.traveled = this.traveledold = 0, this.scorelevs = [100, 200, 400, 500, 800, 1e3, 2e3, 4e3, 5e3, 8e3], this.score = new DataObject(0, 6, "SCORE"), this.time = new DataObject(350, 3, "TIME"), this.world = new DataObject(0, 0, "WORLD"), this.coins = new DataObject(0, 0, "COINS"), this.lives = new DataObject(3, 1, "LIVES"), this.time.dir = -1, this.scoreold = 0
}

function DataObject(e, t, n) {
    this.amount = e, this.length = t, this.name = n, this.element = createElement("td", {
        className: "indisplay"
    })
}

function setDataDisplay() {
    var e = createElement("table", {
            id: "data_display",
            className: "display",
            style: {
                width: gamescreen.right + 14 + "px"
            }
        }),
        t = ["score", "coins", "world", "time", "lives"];
    for (var n in body.appendChild(e), data.display = e, t) e.appendChild(data[t[n]].element), updateDataElement(data[t[n]]);
    body.appendChild(data.display), is_mobile && applyNewJs()
}

function clearDataDisplay() {
    body.removeChild(data_display)
}

function toggleLuigi() {
    window.luigi = !window.luigi, localStorage.luigi = window.luigi, window.player.title = window.luigi ? "Luigi" : "Mario", setThingSprite(window.player)
}

function startDataTime() {
    TimeHandler.addEventInterval(updateDataTime, 25, 1 / 0, data.time)
}

function updateDataTime(e) {
    1 != e.dir && (100 == e.amount ? playCurrentThemeHurry() : e.amount <= 0 && killPlayer(player, !0)), notime || (map.time = e.amount += e.dir, updateDataElement(e))
}

function updateDataElement(e) {
    var t = e.name + "<br />" + ("Infinity" == e.amount ? "Inf" : e.amount);
    e.element.innerHTML = t, e.element.style.width = ""
}

function score(e, t, n) {
    if (!(t <= 0)) {
        if (1 == arguments.length) return score(player, e);
        if (localStorage.highscore = max(localStorage.highscore, data.score.amount += t), n) {
            var x = addText(t, e.left, e.top);
            x.yvel = -unitsized4, TimeHandler.addEvent(killScore, 49, x)
        }
        for (; data.score > 1e4;) gainLife(), data.score.amount = data.score.amount % 1e4;
        updateDataElement(data.score)
    }
}

function killScore(e) {
    body.contains(e) && body.removeChild(e), killNormal(e), deleteThing(e, texts, texts.indexOf(e))
}

function findScore(e) {
    return e < data.scorelevs.length ? data.scorelevs[e] : (gainLife(), -1)
}

function gainLife(e, t) {
    data.lives.amount += "number" == typeof e ? e : 1, t || AudioPlayer.play("Gain Life"), updateDataElement(data.lives)
}

function setLives(e) {
    data.lives.amount = Number(e), updateDataElement(data.lives)
}

function storePlayerStats() {
    data.playerpower = player.power
}

function clearPlayerStats() {
    data.playerpower = player.power = 1
}

function loadEditor(e) {
    editorClose(), e || (window.canedit = !0, setMap(["Special", "Blank"]), window.canedit = !1), setEditorLibrary(), setEditorHTML(), setEditorControls(), setEditorTriggers(), setEditorLocalRetrieval(), classAdd(body, "editor"), classAdd(editor.sidebar, "expanded"), TimeHandler.addEvent(classRemove, 35, editor.sidebar, "expanded"), map.shifting = !1, window.editing = !0
}

function setEditorLibrary() {
    window.editor = {
        xloc: 0,
        yloc: 0,
        playing: !1,
        canplace: !0,
        offset: {
            x: unitsizet2
        },
        settings: {
            night: !1,
            setting: "Overworld",
            alt: !1
        },
        defaults: {
            width: 8,
            height: 8,
            widthoff: 0,
            heightoff: 0,
            minimum: 1,
            followerUpdate: editorFollowerUpdateStandard,
            prefunc: pushPreThing,
            outerok: !0
        },
        placed: [],
        characters: {
            Goomba: {},
            Koopa: {
                height: 12,
                arguments: {
                    smart: Boolean,
                    movement: ["moveSimple", "moveJumping", "moveFloating"]
                },
                followerUpdate: function(e, t) {
                    var n = "True" == t.smart,
                        x = t.movement,
                        r = "moveJumping" == x;
                    return "moveFloating" == x && (r = [8, 72]), [n, r]
                },
                onadds: {
                    nocollide: !1
                }
            },
            Beetle: {
                width: 8.5,
                height: 8.5
            },
            HammerBro: {
                height: 12
            },
            CheepCheep: {
                arguments: {
                    smart: Boolean
                },
                attributes: {
                    nofall: !0
                }
            },
            Lakitu: {
                height: 12
            },
            Podoboo: {
                width: 7
            },
            Blooper: {
                height: 12,
                onadds: {
                    nofall: !0
                }
            },
            Bowser: {
                width: 16,
                height: 16
            }
        },
        solids: {
            Floor: {
                arguments: {
                    width: 8
                },
                mydefaults: {
                    width: 8
                },
                prefunc_custom: function(e, t, n, x) {
                    var r = "Floor, " + e.xloc + ", " + e.yloc;
                    return x[1] && (r += ", " + x[1]), r
                }
            },
            Brick: {
                arguments: {
                    contents: ["false", "Coins", "Star"]
                },
                followerUpdate: function(e, t) {
                    var n = [];
                    t.contents;
                    return n.push(window[t.contents]), n
                },
                prefunc_custom: function(e, t, n, x) {
                    var r = "Brick, ";
                    return r += e.xloc + ", " + e.yloc, t.contents && (r += ", " + t.contents[0].name), r
                }
            },
            Block: {
                arguments: {
                    contents: ["Coin", "Mushroom", "Star", "1Up Mushroom"],
                    hidden: Boolean
                },
                followerUpdate: function(e, t) {
                    var n = [];
                    return "1Up Mushroom" == t.contents ? n.push([Mushroom, 1]) : n.push(window[t.contents]), "True" == t.hidden && (TimeHandler.addEvent((function() {
                        editor.follower.hidden = !0
                    })), n.push(1)), n
                },
                prefunc_custom: function(e, t, n, x) {
                    var r = "Block, ",
                        i = t.contents,
                        a = i[0].name;
                    return r += e.xloc + ", " + e.yloc, "Coin" != a ? ("Mushroom" == a && i[1] ? r += ", [Mushroom, " + String(i[1]) + "]" : r += ", " + a, t.hidden && (r += ", true")) : t.hidden && (r += ", false, true"), r
                }
            },
            Cannon: {
                arguments: {
                    height: 8
                },
                sprite_source: "top"
            },
            Pipe: {
                width: 16,
                prefunc: pushPrePipe,
                prefunc_solo: !0,
                arguments: {
                    height: 8,
                    Pirhana: Boolean
                },
                followerUpdate: function(e, t) {
                    var n = [];
                    return n.push(Number(t.height)), n.push(Boolean(t.Pirhana)), n
                },
                sprite_source: "top"
            },
            Stone: {
                arguments: {
                    width: 8,
                    height: 8
                },
                prefunc_custom: function(e, t, n, x) {
                    var r = "Stone, " + e.xloc + ", " + e.yloc;
                    return r += ", " + x[1] + ", " + x[2]
                }
            },
            Coral: {
                arguments: {
                    height: 8
                }
            },
            CastleBlock: {
                arguments: {
                    fireballs: 2,
                    direction: ["CW", "CCW"],
                    hidden: Boolean
                },
                followerUpdate: function(e, t) {
                    return [
                        [Number(t.fireballs), "CW" == t.direction], "True" == t.hidden
                    ]
                }
            },
            Springboard: {
                height: 14.5,
                heightoff: 1.5
            }
        },
        scenery: {
            Bush1: {
                width: 16
            },
            Bush2: {
                width: 24
            },
            Bush3: {
                width: 32
            },
            Cloud1: {
                width: 16,
                height: 12
            },
            Cloud2: {
                width: 24,
                height: 12
            },
            Cloud3: {
                width: 32,
                height: 12
            },
            HillSmall: {
                width: 24,
                height: 9.5,
                heightoff: -1.5
            },
            HillLarge: {
                width: 40,
                height: 17.5,
                heightoff: -1.5
            },
            PlantSmall: {
                width: 7,
                height: 15,
                heightoff: 1
            },
            PlantLarge: {
                height: 23,
                heightoff: 1
            },
            Fence: {},
            Water: {
                width: 4,
                height: 4,
                prefunc: fillPreWater,
                prefunc_solo: !0,
                prefunc_custom: function(e, t, n, x) {
                    return e.xloc + ", " + e.yloc
                }
            }
        }
    };
    var e, t, n, x;
    editor.defaults;
    for (n in editor)
        for (x in e = editor[n], editor[n]) t = e[x], proliferate(t, editor.defaults, !0);
    for (n in e = editor.scenery) t = e[n], proliferate(t, {
        createfunc: function(e) {
            return ThingCreate(Sprite, e.spritename)
        },
        spritename: n,
        prefunc_custom: function(e, t, n, x) {
            return "'" + n.spritename + "', " + e.xloc + ", " + (e.yloc - n.height)
        }
    }, !0), t.prefunc == pushPreThing && (t.prefunc = pushPreScenery)
}

function setEditorHTML() {
    createEditorGuideLines(), createEditorSidebar(), createEditorBottomBar(), createEditorScrollers(), editor.sectionselect.onchange()
}

function createEditorSidebar() {
    var e, t = ["Solids", "Characters", "Scenery", "Settings"],
        n = editor.sidebar = createElement("div", {
            id: "sidebar"
        }),
        x = editor.category = createElement("div", {
            id: "category",
            className: "group first"
        }),
        r = editor.sectionselect = createElement("select", {
            id: "sectionselect",
            className: "options big",
            onchange: editorSelectSection
        }),
        i = editor.options = createElement("div", {
            id: "options",
            className: "options big"
        });
    for (e in n.appendChild(x), x.appendChild(r), t) r.appendChild(createElement("option", {
        innerText: t[e]
    }));
    n.appendChild(i), body.appendChild(window.sidebar = n)
}

function createEditorBottomBar() {
    var e = editor.bottombar = createElement("div", {
        id: "bottombar",
        things: {}
    });
    sidebar.appendChild(e)
}

function createEditorScrollers() {
    var e, t, n, x = ["right", "left"],
        r = {};
    for (t = createElement("div", {
            id: "scrollers",
            style: {
                zIndex: 7,
                width: innerWidth - 32 + "px"
            }
        }), settings = {
            className: "scroller",
            style: {
                zIndex: 7,
                marginTop: innerHeight / 2 + "px"
            },
            onmouseover: editorFollowerHide,
            onmouseout: editorFollowerShow,
            onmousedown: editorScrollingStart,
            onmouseup: editorScrollingStop
        }, e = x.length - 1; e >= 0; --e) x[e], n = r[x[e]] = createElement("div", settings), t.appendChild(n);
    proliferate(r.left, {
        id: "left",
        className: "scroller flipped off",
        dx: -7
    }), proliferate(r.right, {
        id: "right",
        style: {
            right: "21px"
        },
        dx: 7
    }), editor.scrollers = r, body.appendChild(t)
}

function editorFollowerHide() {
    var e = editor.follower;
    e.hiddenOld = e.hidden, e.hidden = !0
}

function editorFollowerShow() {
    var e = editor.follower;
    e.hidden = e.hiddenOld
}

function editorScrollingStart(e) {
    var t = e.target.dx;
    editorPreventClicks(), editor.scrolling = TimeHandler.addEventInterval(editorScrolling, 1, 1 / 0, -t), classRemove(editor.scrollers.left, "off")
}

function editorScrollingStop() {
    TimeHandler.addEvent(editorClickOff, 3), TimeHandler.clearEvent(editor.scrolling)
}

function editorScrolling(e) {
    if (scrollEditor(e), editor.xloc >= 0) return scrollEditor(-editor.xloc), editorScrollingStop(), classAdd(editor.scrollers.left, "off"), !0
}

function createEditorGuideLines() {
    var e, t, n, x = {
            floor: 0,
            ceiling: ceillev,
            jumplev1: jumplev1,
            jumplev2: jumplev2
        },
        r = 16 * unitsize + "px",
        i = map.floor;
    for (e in window.maplines = t = document.createElement("div"), t.style.marginLeft = r, t.id = "maplines", x) n = createElement("div", {
        innerText: e,
        className: "mapline",
        id: e + "_line",
        style: {
            marginTop: (i - x[e]) * unitsize + "px",
            marginLeft: "-" + r,
            paddingLeft: r
        }
    }), t.appendChild(n);
    body.appendChild(t)
}

function setEditorControls(e) {
    e = e || ["load", "save", "reset", "undo"];
    var t, n, x, r = document.getElementById("controls"),
        i = createElement("div", {
            id: "controls"
        }),
        a = editor.controls = {
            container: i
        };
    for (x in r && (r.innerHTML = ""), e) t = e[x], n = createElement("div", {
        id: t,
        alt: t,
        className: "control",
        style: {
            backgroundImage: "url(Theme/" + t + ".gif)"
        },
        innerHTML: "<div class='controltext'>" + t + "</div>",
        onclick: editorClickControl
    }), i.appendChild(n), a[t] = n;
    sidebar.appendChild(i)
}

function setEditorTriggers() {
    var e, t = [maplines, canvas];
    for (e = t.length - 1; e >= 0; --e) t[e].onclick = editorMouseClick;
    document.onmousemove = editorFollowerFollowsCursor
}

function editorMouseClick(e) {
    if (window.editing && !editor.clicking) {
        if (editorPreventClicks(), editor.erasing) return editorPlaceEraser(e);
        if (!editor.in_settings && editor.canplace) {
            var t = editor.section_name,
                n = (window[t], editor.current_selected, editor.follower);
            editor.placed.push(n), editor.follower = !1, editorSetCurrentThingFromName(null, !0), paused && refillCanvas(), n.was_follower = !0, delete n.onclick, editor.playing && (thingRetrieveVelocity(n), proliferate(n, n.reference.attributes))
        }
    }
}

function editorSelectSection() {
    var e = (this || editor.sectionselect).value.toLowerCase();
    (editor.in_settings = "settings" == e) ? (editorSetSection(e, !0), editorSetSectionSettings()) : editorSetSection(e)
}

function editorSetSection(e, t) {
    var n, x, r = editor.section = editor[e],
        i = editor.bottombar,
        a = 0;
    if (editor.section_name = e, i.innerHTML = "", !t)
        for (e in r) ++a, x = editorAddBottomPreview(i, e, r[e]), n || (n = x);
    a ? (i.style.visibility = "visible", editorSetCurrentThingFromCanvas(n)) : i.style.visibility = "hidden"
}

function editorAddBottomPreview(e, t, n) {
    var x, r = n.width,
        i = n.height,
        a = window[t],
        o = a ? ThingCreate(a, n.previewargs) : new Thing(Sprite, t),
        l = createElement("div", {
            width: r * unitsize + "px",
            height: i * unitsize + "px",
            name: t,
            className: "holder " + t,
            onclick: editorSetCurrentThing
        }),
        s = proliferate(getCanvas(r * unitsizet2, i * unitsizet2), {
            name: t,
            reference: n,
            style: {
                marginLeft: -roundDigit(r / 2, scale) + "px"
            },
            onclick: editorSetCurrentThing
        }),
        d = (e.things, r * unitsizet2),
        u = i * unitsizet2,
        p = s.getContext("2d");
    return canvasDisableSmoothing(s), editor.bottombar.things[t] = s.thing = o, addClass(o, "editor"), x = o.canvas, o.canvases && (x = o.canvases[n.sprite_source || "middle"].canvas), n.previewsize ? (p.fillStyle = p.createPattern(x, "repeat"), p.fillRect(0, 0, d, u)) : p.drawImage(x, 0, 0, d, u), l.appendChild(l.canvas = s), e.appendChild(l), e[t] = l, s
}

function editorSetSectionSettings() {
    var e, t = editor.settings,
        n = "<table>";
    n += "<h3 class='title'>Settings</h3>", n += addArgumentOption("night", Boolean, t.night), n += addArgumentOption("setting", ["Overworld", "Underworld", "Underwater", "Castle", "Sky"], t.setting), n += addArgumentOption("alt", Boolean, t.alt), n += "</table>", options.innerHTML = n, ensureOptionsAboveZero(editorUpdateSettingsOption), e = editor.sidebar.getElementsByTagName("table")[0].rows, editor.settings.night_elem = e[0].cells[1].firstChild, editor.settings.setting_elem = e[1].cells[1].firstChild, editor.settings.alt_elem = e[2].cells[1].firstChild, editor.follower && killNormal(editor.follower), editor.follower = !1
}

function editorUpdateSettingsOption(e) {
    var t = editor.settings,
        n = t.night = "True" == t.night_elem.value,
        x = t.alt = "True" == t.alt_elem.value,
        r = (t.setting = t.setting_elem.value) + (n ? " Night" : "") + (x ? " " + x : "");
    setAreaSetting(area, r, r != area.setting)
}

function editorSetCurrentThing(e, t) {
    var n = e.target,
        x = editor.current_thing_name = n.name,
        r = editor.current_thing = editor.section[x];
    t || updateCurrentArguments(x, r), editorUpdateFollower()
}

function editorSetCurrentThingFromCanvas(e, t) {
    editorSetCurrentThing({
        target: e
    }, t)
}

function editorSetCurrentThingFromName(e, t) {
    editorSetCurrentThing({
        target: {
            name: e || editor.current_thing_name
        }
    }, t)
}

function updateCurrentArguments(e, t) {
    t = t || {};
    var n, x = editor.options,
        r = "<table>",
        i = t.mydefaults || {},
        a = t.arguments || {};
    for (n in r += "<h3 class='title'>" + e + "</h3>", a.width || (r += addStaticOption("width", t.width)), a.height || (r += addStaticOption("height", t.height)), a) r += addArgumentOption(n.replace("_", "-"), a[n], null, i);
    r += "</table>", x.innerHTML = r, ensureOptionsAboveZero()
}

function addStaticOption(e, t) {
    return t == 1 / 0 && (t = "Inf."), "<tr id='option_" + e + "' class='auto'><td>" + e + ": </td><td class='auto'>" + t + "</td></tr>"
}

function addArgumentOption(e, t, n, x) {
    x = x || {};
    var r = "<tr name='" + e + "' id='option_" + e + "'><td>" + e + ": </td><td>";
    switch (t) {
        case 1 / 0:
            r += "Inf";
            break;
        case Boolean:
            r += "<select name='" + e + "' value='" + (t ? "true" : "false") + "'><option>False</option><option>True</select>";
            break;
        case Number:
            r += "<input name='" + e + "' value='" + String(t || 0) + "' type='Number'>";
            break;
        default:
            switch (typeof t) {
                case "number":
                    r += "<span class='optspan'>" + t + "x</span><input name='" + e + "' type='Number' class='text' value='" + (x[e] || 1) + "'>";
                    break;
                case "string":
                    r += "<input name='" + e + "' type='text' class='text wide' value='" + t + "'>";
                    break;
                case "object":
                    for (i in r += "<select name='" + e + "'>", t) r += "<option>" + t[i] + "</option>";
                    r += "<select>"
            }
    }
    return r + "</td></tr>"
}

function ensureOptionsAboveZero(e) {
    e = e || editorUpdateFollower;
    var t, n = editor.options.getElementsByTagName("input");
    for (i = n.length - 1; i >= 0; --i)(t = n[i]).onchange = t.onclick = t.onkeypress = editorInputEnsureAboveZero;
    for (n = options.getElementsByTagName("select"), i = n.length - 1; i >= 0; --i)(t = n[i]).onchange = t.onclick = t.onkeypress = editorUpdateFollower
}

function editorInputEnsureAboveZero(e) {
    editorUpdateFollower(e)
}

function editorUpdateFollower(e) {
    if (editor.in_settings) return editorUpdateSettingsOption(e);
    var t, n = editor.current_thing;
    (t = editor.follower) && (t.id = "", killNormal(t)), t = n.createfunc ? n.createfunc(editor.current_thing, editorGetArguments()) : ThingCreate(window[editor.current_thing_name], n.followerUpdate(editor.current_thing, editorGetArguments())), editor.follower = t, proliferate(t, {
        id: "follower",
        libtype: editor.section_name,
        lookleft: !0,
        nocollide: !0,
        reference: n,
        onclick: editorMouseClick
    }, !0), addThing(t), addClass(t, "editor"), thingRetrieveVelocity(t), thingStoreVelocity(t), editorSetFollowerPosition(t), editor.erasing && (t.hidden = !0)
}

function editorGetArguments() {
    var e = arrayMake(editor.options.getElementsByTagName("input")),
        t = arrayMake(editor.options.getElementsByTagName("select")),
        n = e.concat(t);
    return pairs = generateInputNameValuePairs(n), pairs
}

function generateInputNameValuePairs(e) {
    var t, n = {};
    for (t in e) n[e[t].name] = e[t].value;
    return n
}

function editorFollowerFollowsCursor(e) {
    var t = editor.follower;
    t && editorSetFollowerPosition(t, roundFollowerDigit(e.x) + (editor.current_thing.widthoff - editor.offset.x) * unitsize, roundFollowerDigit(e.y) + editor.current_thing.heightoff * unitsize)
}

function editorSetFollowerPosition(e, t, n) {
    t = t || editor.xloc_old || 0, n = n || editor.yloc_old || 0, setLeft(e, t), setTop(e, n), editor.xloc_old = t, editor.yloc_old = n
}

function roundFollowerDigit(e) {
    var t = "solids" == editor.section_name ? 8 : 4;
    return unitsize * t * round(e / (unitsize * t))
}

function roundFollowerPosition(e, t) {
    editorSetFollowerPosition(e, roundFollowerDigit(e.left), roundFollowerDigit(e.top))
}

function editorFollowerUpdateStandard(e, t) {
    "True" == t.hidden && TimeHandler.addEvent((function() {
        editor.follower.hidden = !0
    }));
    var n = [];
    return t.width && n.push(Number(t.width)), t.height && n.push(Number(t.height)), n
}

function editorClickControl(e) {
    editorPreventClicks();
    var t = e.target;
    t.id || (t = t.parentNode), window["editorControl" + capitalizeFirst(t.id)](), e.preventDefault()
}

function editorPreventClicks() {
    editor.clicking = !0, TimeHandler.addEvent(editorClickOff, 3)
}

function editorClickOff() {
    window.editor && (editor.clicking = !1)
}

function editorControlUndo() {
    var e = editor.placed.pop();
    e && !e.player && killNormal(e)
}

function editorControlReset() {
    var e = editor.placed.length,
        t = roundDigit(35 / e, 21);
    TimeHandler.addEventInterval(editorControlUndo, t, e)
}

function editorControlSave() {
    var e = editor.rawfunc = editorGetRawFunc();
    editorCreateInputWindow("<span style='font-size:1.4em;'>Hit Submit below to start playing!</span><br><p style='font-size:.7em;line-height:140%'>This map will be resumed automatically the next time you use the editor on this computer.<br>Alternately, you may copy this text to work on again later using Load (the button next to Save). </p>", e, editorSubmitGameFuncPlay);
    return e
}

function editorControlCancel() {
    loadEditor()
}

function editorGetRawFunc() {
    var e, t = editor.placed,
        n = t.length - 1,
        x = new Array(e),
        r = "  var map = arguments[0] || new Map();\n";
    for (r += "\n  map.time = " + data.time.amount + ";", r += "\n  map.locs = [ new Location(0, true) ];", r += "\n  map.areas = [", r += "\n    new Area('" + area.setting + "', function() {", r += "\n      setLocationGeneration(0);\n\n", e = n; e >= 0; --e) x[e] = new editorPreStatement(t[e]);
    for (x.sort(prethingsorter), e = n; e >= 0; --e) x[e] = "      " + x[e].statement;
    return r += (x = removeDuplicates(x)).join("\n"), r += "\n    })", r += "\n  ];", r += "\n  return map;"
}

function editorPreStatement(e) {
    this.placer = e, this.xloc = (gamescreen.left + e.left) / unitsize, this.yloc = map.floor - e.top / unitsize, this.statement = editorGetStatement(this, e, e.reference, e.args)
}

function editorGetStatement(e, t, n, x) {
    if (!n && !(n = editor[t.libtype][t.title])) return "";
    var r, i, a = (n.prefunc || pushPreThing).name,
        o = x.length;
    if (n.prefunc_custom) a += "(" + n.prefunc_custom(e, t, n, x) + ");";
    else {
        r = [], n.prefunc_solo || r.push(t.title), r.push(String(e.xloc)), r.push(String(e.yloc));
        for (var l = 1; l < o; ++l) {
            switch (typeof(i = x[l])) {
                case "undefined":
                    break;
                case "number":
                    i = String(round(i));
                    break;
                default:
                    i = String(i)
            }
            void 0 !== i && r.push(i)
        }
        a += "(" + r.join(", ") + ");"
    }
    return a
}

function editorControlErase() {
    editor.erasing ? editorControlEraseOff() : editorControlEraseOn()
}

function editorControlEraseOn() {
    editor.erasing = editor.follower.hidden = !0, classAdd(body, "erasing"), classAdd(editor.controls.erase, "enabled")
}

function editorControlEraseOff() {
    editor.erasing = editor.follower.hidden = !1, classRemove(body, "erasing"), classRemove(editor.controls.erase, "enabled")
}

function editorPlaceEraser(e) {
    addThing(Eraser, e.x, e.y)
}

function Eraser(e) {
    e.width = e.height = 2, e.nocollide = e.nofall = !0, e.movement = eraserErases, setCharacter(e, "eraser")
}

function eraserErases(e) {
    if (window.editor) {
        var t, n, x = editor.placed,
            r = x.concat(solids).concat(characters).concat(scenery);
        for (n = r.length - 1; n >= 0; --n)
            if (!(t = r[n]).player && t != editor.follower && objectsTouch(e, t)) {
                killNormal(t), x.splice(x.indexOf(t), 1);
                break
            }
        killNormal(e)
    }
}

function editorControlLoad() {
    editorCreateInputWindow("Paste your work in progress here, and click Submit to continue it.", "", editorSubmitLoad)
}

function addThingsToPlaced() {
    var e = editor.placed;
    for (editor.placed = (editor.placed || []).concat(characters).concat(solids).concat(scenery), e.sort(prethingsorter), e.splice(e.indexOf(player), 1), i = e.length - 1; i >= 0; --i) placer = e[i], placer.reference = editor[placer.libtype][placer.title]
}

function editorCreateInputWindow(e, t, n) {
    var x = gamescreen.unitwidth,
        r = editor.input_window = createElement("div", {
            id: "input_window",
            innerHTML: e || "",
            style: {
                width: x + "px"
            }
        }),
        i = r.input = editor.window_input = createElement("textarea", {
            id: "window_input",
            value: t || "",
            style: {
                width: x - 49 + "px"
            }
        }),
        a = r.submit = createElement("div", {
            id: "window_submit",
            className: "window_button",
            innerText: "Submit",
            onclick: n
        }),
        o = r.cancel = createElement("div", {
            id: "window_cancel",
            className: "window_button",
            innerText: "Cancel",
            onclick: editorCloseInputWindow
        });
    return r.appendChild(i), r.appendChild(a), r.appendChild(o), body.appendChild(r), killNormal(editor.follower = !1), editor.follower = !1, r
}

function editorCloseInputWindow(e) {
    editorPreventClicks(), removeChildSafe(window.input_window, body), e || (editorSetCurrentThingFromName(), window.editing = !0), editorUpdateFollower()
}

function editorClose(e) {
    if (window.editor) {
        classRemove(body, "editor"), classRemove(body, "erasing"), killNormal(editor.follower), editor.follower = !1, delete window.editor;
        var t, n = ["maplines", "sidebar", "bottombar", "scrollers"];
        for (t in n) removeChildSafe(document.getElementById(n[t]), body);
        document.onmousemove = null, window.editing = !1, e && window.map && (map.shifting = !1)
    }
}

function scrollEditor(e, t) {
    window.editor && (editor.follower && (e = e || 0, t = t || 0, shiftAll(scenery, e, t), shiftAll(solids, e, t), shiftAll(characters, e, t), editor.xloc += e, editor.yloc += t))
}

function editorStoreLocally() {
    localStorage.editorLastFunc = editor.rawfunc
}

function setEditorLocalRetrieval() {
    localStorage.editorLastFunc && (editor.rawfunc = round, editorSubmitGameFunc())
}

function editorSubmitGameFunc() {
    if (!window.editor || !editor.rawfunc) return loadEditor();
    editor.rawfunc;
    var e = window.custommapfunc = new Function(editor.rawfunc);
    mapfuncs.Custom = {
        Map: e
    }, window.canedit = !0, setMap(["Custom", "Map"]), window.canedit = editor.playing = !1, entryBlank(player), addThingsToPlaced(), editorStoreLocally(), editorCloseInputWindow()
}

function editorSubmitGameFuncPlay() {
    editorPreventClicks(), editorSubmitGameFunc(), editorStartPlaying()
}

function editorSubmitLoad() {
    if (window.editor && editor.window_input) {
        editorPreventClicks();
        var e = editor.window_input.value;
        loadEditor(), editor.rawfunc = e, editorSubmitGameFunc()
    }
}

function editorStartPlaying() {
    editorPreventClicks(), editor.playing = !0, placePlayer(), entryPlain(player), nokeys = !1;
    var e, t, n, x = editor.placed;
    for (n in x) thingRetrieveVelocity(e = x[n]), (t = editor[e.libtype][e.title]) && proliferate(e, t.onadds);
    setEditorControls(["Cancel"])
}

function setEditorLocalRetrieval() {
    var e = localStorage.editorLastFunc;
    if (e) {
        editor.rawfunc = e, editorSubmitGameFunc(), editorStoreLocally();
        var t, n = editor.placed;
        for (t in n) thingStoreVelocity(n[t])
    }
}

function resetSeed() {
    window.seeder = 1777771 / (window.seed = round(1e7 * random())), window.seedlast = .007, window.getSeed = function() {
        return seedlast = "0." + String(seeder / seedlast).substring(4).replace(".", "")
    }
}

function pushRandomSectionOverworld(e) {
    var t = max(randTrue(117), 1),
        n = 0;
    if (++map.num_random_sections, pushPreFuncCollider(e, zoneDisableCheeps), map.had_floor = !1, map.needs_floor || t >= 14 || t < 3 || randTrue() ? (pushPreFloor(e, 0, t), map.had_floor = !0) : pushPreThing(Stone, e, n = 0, t), window.randcount_powerup = 3, t <= 3 && map.had_floor) {
        if (randTrue()) switch (randTrue(3)) {
            case 0:
                if (t > 3) {
                    pushPreScenery("HillSmall", e, 0);
                    break
                }
            case 1:
                if (t > 2) {
                    pushPreScenery("Bush1", e + 8 * max(0, randTrue(t - 2)), n);
                    break
                }
            case 2:
                pushPreScenery("PlantLarge", e + 8 * max(0, randTrue(t - 2)), n);
                break;
            case 3:
                pushPreScenery("PlantSmall", e + 8 * max(0, randTrue(t - 2)), n)
        }
    } else
        for (var x = t - 2, r = 0, i = 0, a = randTrue(2); a < x; a += 3) randTrue(7) && (randTrue(2) ? (map.hadObstacle = !1, (i % 3 == 0 || randTrue()) && (pushRandomChunkEnemy(e, a), ++i), map.had_floor && pushRandomGroundScenery(e + 8 * a, a, t)) : pushRandomObstacle(e, a), !r && randTrue() ? (pushRandomSkyScenery(e + 8 * a), r = !0) : r = !1);
    prepareNextGeneratorStandard(e, t, pushRandomSectionOverworld)
}

function startRandomSectionBridge(e) {
    pushPreFuncCollider(e - 24, zoneDisableCheeps), pushPreFuncCollider(e, zoneEnableCheeps);
    var t = 5 + randTrue(4),
        n = t - 4;
    map.needs_bridge = !0, map.treelev = map.treeheight = 0, pushPreTree(e, 0, t + 1), pushPreThing(Stone, e + 16, 8, 1, 1), pushPreThing(Stone, e + 24, 16, 1, 2), pushPreThing(Stone, e + 32, 24, n, 3), pushRandomSectionBridge(e + 8 * (t - 1), 24, !0), spawnMap(), map.had_floor = !1
}

function pushRandomSectionBridge(e, t, n) {
    var x = !1;
    if (t = t || 24 + 16 * randTrue() - 8, randTrue() || map.needs_bridge) switch (randTrue(3)) {
        case 0:
            switch (randTrue()) {
                case 0:
                    var r = randTrue(3) + 1,
                        i = 4 * r;
                    x = !0;
                    for (var a = 1; a <= 2 * r; a += 2) pushPreBridge(e + 16 * a, t, 3);
                    break;
                case 1:
                    i = randTrue(7) + 7;
                    var o = DtB(t, 8);
                    n || pushPreThing(Stone, e, t, 1, o), pushPreBridge(e + 8, t, i - 1), pushPreThing(Stone, e + 8 * i, t, 1, o)
            }
            break;
        default:
            map.needs_bridge = map.treeheight = 0;
            o = DtB(t, 8);
            i = 17 * (randTrue(3) + 3);
            for (a = 0; a < i; a += 17)
                if (!a && n || pushPreThing(Stone, e + 8 * a, t, 1, o), pushPreBridge(e + 8 * (a + 1), t, 16), randTrue() && pushRandomSmallEnemy(e + 8 * (a + 8), t), randTrue(2)) {
                    randTrue();
                    var l = 3 + randTrue(2);
                    pushRandomCoinRow(e + 8 * (a + 8), t + 32, l), pushRandomCoinRow(e + 8 * (a + 8), t + 40, getNextCoinRowSize(l))
                } else pushPreThing(Block, e + 8 * (a + 8), t + jumplev1, Mushroom);
            pushPreThing(Stone, e + 8 * i, t, 1, o)
    } else i = 10, pushPreTree(e + 16, 8 * randTrue(), i);
    prepareNextGeneratorStandard(e, i + 2, randTrue() ? pushRandomSectionBridge : pushRandomSectionOverworld, !1, x)
}

function pushRandomSectionPreCastle(e, t) {
    var n, x, r = randTrue(35) + 35,
        i = r - 3,
        a = !1;
    for (t = t || 0, pushPreFloor(e, 0, r), hadcloud = !1, x = randTrue(3); x < i; x += n || 3) {
        switch (randTrue(3)) {
            case 0:
                switch (n = 3, randTrue(2)) {
                    case 0:
                        var o = randTrue(2) + 1;
                        pushPreThing(Cannon, e + 8 * (x + randTrue(2)), 8 * o, o);
                        break;
                    case 1:
                        for (var l = 0; l < n; ++l) randTrue() || pushPreThing(Stone, e + 8 * (x + l), 8 * (o = randTrue(3) + 1), 1, o);
                        break;
                    case 2:
                        pushPrePipe(e + 8 * (x + randTrue()), 0, 8 * (2 + randTrue(2)), !0)
                }
                break;
            case 1:
                switch (n = 7, a = !0, randTrue(2)) {
                    case 0:
                        pushPreThing(Koopa, e + 8 * (x + randTrue(7)), 12 + 8 * randTrue(3), randTrue(), !0);
                        break;
                    case 1:
                        randTrue() && pushPreThing(HammerBro, e + 8 * (x + randTrue(7)), 12 + 2 * randTrue(3));
                        break;
                    case 2:
                        n = 10, a = !1;
                        for (l = 1; l < 8; ++l)
                            for (var s = jumplev1; s <= jumplev2; s += 32) pushPreThing(Brick, e + 8 * (x + l), s, getRandomBrickItem(!1, randTrue()));
                        var d = randTrue() ? jumplev1 : jumplev2;
                        height2 = o == jumplev1 ? jumplev2 : jumplev1, randTrue(2) && pushPreThing(HammerBro, e + 8 * (x + randTrue(3)), d + 12), randTrue(2) && pushPreThing(HammerBro, e + 8 * (x + 4 + randTrue(3)), height2 + 12)
                }
        }
        a && n >= 7 && (pushPreScenery("CastleWall", e + 8 * (x + randTrue()), 0, n - randTrue(2)), randTrue() && pushPreThing(Brick, e + 8 * (x + randTrue(n)), jumplev1, randTrue() ? Mushroom : getRandomBrickItem(!1, randTrue())));
        for (s = 0; s < n; s += 3) randTrue(2) && pushRandomGroundScenery(e + 8 * (x + s), 0), !hadcloud && randTrue() ? (pushRandomSkyScenery(e + 8 * (x + s)), hadcloud = !0) : hadcloud = !1
    }
    pushPreFloor(e + 8 * r, 0, x + 3 - r);
    var u = 4 + randTrue(3);
    t >= 3 ? endCastleOutsideRandom(e + 8 * (r + u + 1), !0) : pushRandomSectionPreCastle(e + 8 * (r + u), t + 1), spawnMap()
}

function endCastleOutsideRandom(e) {
    var t, n;
    switch (randTrue()) {
        case 0:
            for (n = 1 + randTrue(); n < 9; n += 2) pushPreThing(Stone, e + 8 * n, 8 * (n - randTrue()), 1, 1 + randTrue());
            pushPreThing(Stone, e + 72, 64, 2), t = 12;
            break;
        case 1:
            for (pushPreFloor(e, 0, 11), n = 1, hadlast = !1; n < 9; ++n) !hadlast || randTrue(2) || 8 == n ? (pushPreThing(Stone, e + 8 * n, 8 * n, 1, n), hadlast = !0) : (hadlast = !1, pushPrePipe(e + 8 * n, 0, 8 * max(n - randTrue(2), 2), !0), ++n);
            pushPreThing(Stone, e + 72, 72, 2, 9), t = 7
    }
    pushPreFloor(e + 88, 0, round(gamescreen.width / 8)), endCastleOutside(e + 8 * (9 + t) + 4, 0, !0, round(gamescreen.width / 8))
}

function startRandomSectionCastle(e) {
    e += 32;
    var t = randTrue(7) + 3,
        n = randTrue(4) + 3;
    randTrue(4);
    pushPreFloor(e, 24, t), pushPreThing(Stone, e, 88, t, 3), fillPreWater(e + 8 * t, 0, 2 * n), pushPreThing(Podoboo, e + 8 * t + max(0, 8 * randTrue(n - 3)), -32), pushRandomSectionCastle(e + 8 * (t + n), 0), spawnMap()
}

function pushRandomSectionCastle(e, t) {
    var n, x;
    switch (randTrue(3)) {
        case 0:
            x = 64 * (n = 1 + randTrue(2)) - 8;
            for (var r = 0; r < n; ++r) randTrue() ? (makeCeilingCastle(e + 64 * r, 8), fillPreWater(e + 64 * r, 0, 16), pushPreThing(Platform, e + 64 * r + 8 + 8 * randTrue(2), 8 + 8 * randTrue(max(r + 2, 4)), 4, moveFalling)) : (pushPreFloor(e + 64 * r - 8, 8, 1), pushPrePlatformGenerator(e + 64 * r + 24, 4, 1.75), pushPreFloor(e + 64 * r + 64, 8, 1));
            break;
        case 1:
            var i, a, o;
            x = 64 * (n = 2 * (1 + randTrue())) - 8, makeCeilingCastle(e, 8 * n), fillPreWater(e, 0, 16 * n);
            for (r = 0; r < n; ++r) {
                switch (i = e + 64 * r, a = 8 * randTrue(max(r + 1, 2 + randTrue(2))), o = 2 + randTrue(3), randTrue(2)) {
                    case 0:
                        pushPreFloor(i + 8 * randTrue(3), a, o);
                        break;
                    case 1:
                        pushPreThing(Stone, i + 8 * randTrue(3), a, o);
                        break;
                    case 2:
                        pushPreThing(Platform, i += 8 + 8 * randTrue(), 8 * randTrue(3), 4, [moveSliding, i, i + 56 + 8 * randTrue(2), 2])
                }
                randTrue(2) || o % 2 != 1 || pushPreThing(Block, i + 4 * o - 8, a + 40, Mushroom), o <= 4 && pushPreThing(Podoboo, i + 8 * (o + 1), -32)
            }
            break;
        case 2:
            var l;
            switch (x = 8 * (n = 14 + randTrue(21)) - 8, p = 1, pushPreFloor(e, 0, n), randTrue()) {
                case 0:
                    makeCeilingCastle(e, n, p = 3);
                    for (r = 1 + randTrue(); r < n - 6; ++r) l = min(7, n - r), pushPreThing(Stone, e + 8 * r, jumplev1, l), randTrue() && pushPreThing(CastleBlock, e + 8 * (r + l - 4), 0, [6, randTrue()], !0), pushPreThing(CastleBlock, e + 8 * (r + l), jumplev1, 6, randTrue()), randTrue() && pushPreThing(CastleBlock, e + 8 * (r + l + 4), jumplev2 + 8, [6, randTrue()], !0), r += l;
                    break;
                case 1:
                    makeCeilingCastle(e, n, p);
                    var s = randTrue(),
                        d = randTrue();
                    pushPreThing(Stone, e, 8 * s, n, s);
                    for (r = randTrue(2); r < n - 3; r += 4) pushPreThing(Stone, e + 8 * (r + d), 16 + 8 * s, 3, 2), pushPreThing(CastleBlock, e + 8 * (r + d + 1), 24 + 8 * s, randTrue(2) ? 6 : 0, randSign()), pushPreThing(Stone, e + 8 * (r + d), 80, 3, 2), r < n - 5 && pushPreThing(CastleBlock, e + 8 * (r + d + 1), 64, randTrue(2) ? 6 : 0, randSign()), r += 1 + randTrue(3)
            }
            break;
        case 3:
            x = 8 * (n = 21 + randTrue(21)) - 8;
            var u = 1 + randTrue(3),
                p = 11 - u - 4;
            pushPreFloor(e, 8 * u, n), makeCeilingCastle(e, n, p);
            for (r = 0; r < n; r += 8) randTrue() && (pushRandomEnemy(e + 8 * r, 8 * u, 0), randTrue() && (pushRandomEnemy(e + 8 * r + 12, 8 * u, 0), randTrue() && pushRandomEnemy(e + 8 * r + 24, 8 * u, 0)))
    }
    pushPreThing(GenerationStarter, e + x, ceilmax + 20, t <= 280 ? pushRandomSectionCastle : endCastleInsideRandom, t + x / 8), spawnMap()
}

function endCastleInsideRandom(e) {
    var t = 2 + randTrue(2),
        n = 8 * randTrue(),
        x = n + 24 + 8 * randTrue();
    pushPreFloor(e, n, 5 * t);
    for (var r = 0; r < t; ++r) pushPreFloor(e + 5 * (r + 1) * 8, x, max(2, randTrue(3)));
    var i = e + 5 * t * 8,
        a = 8 * randTrue(7);
    fillPreWater(i, 0, a), endCastleInsideRandomFinal(i + a), spawnMap()
}

function endCastleInsideRandomFinal(e) {
    fillPreWater(e, 0, 16), pushPreFloor(e + 24, 24, 3), endCastleInside(e + 48, 2), randTrue() && pushPreThing(Podoboo, e + 72 + 8 * randTrue(3), -32), randTrue() && fillPreThing(Brick, e + 56 + 8 * randTrue(3), 64, 3 + randTrue(3), 1, 8), randTrue() && pushPreThing(CastleBlock, e + 56 + 8 * randTrue(2), 24, [6, randSign()], !0), spawnMap()
}

function placeRandomCastleNPC(e) {
    pushPreThing(Toad, e + 194, 12).object.text = [pushPreText({
        innerHTML: "THANK YOU " + window.player.title.toUpperCase() + "!"
    }, e + 160, 66).object, pushPreText({
        innerHTML: "LOL YOU THOUGHT THERE WOULD BE SOMETHING HERE DIDN'T YOU!"
    }, e + 148, 50).object]
}

function pushRandomCoinRow(e, t, n) {
    if (n) {
        var x;
        if (3 == n && (e += 8), randTrue(2)) switch (n) {
            case 3:
                x = [1, 0, 1];
                break;
            case 4:
                switch (randTrue()) {
                    case 0:
                        x = [1, 0, 0, 1];
                        break;
                    case 1:
                        x = [0, 1, 1, 0]
                }
                break;
            case 5:
                switch (randTrue()) {
                    case 0:
                        x = [1, 0, 1, 0, 1];
                        break;
                    case 1:
                        x = [0, 1, 0, 1, 0]
                }
        } else x = arrayOf(!0, n);
        for (var r = 0; r < n; ++r) x[r] && pushPreThing(Coin, e + 8 * r, t)
    }
}

function getNextCoinRowSize(e) {
    switch (e) {
        case 3:
            return 5;
        case 5:
            return 3;
        default:
            return e
    }
}

function pushRandomSectionTrees(e) {
    var t, n, x;
    switch (randTrue(7)) {
        case 0:
            var r, i;
            t = randTrue(14) + 7, n = randTrue(3), map.treefunc(e, 8 * n, t);
            for (var a = randTrue(2); a < t - 2; a += r - 1) randTrue(2) && pushRandomSmallEnemy(e + 8 * a, 8 * n), randTrue(2) && (r = 3 + (randTrue(3) ? 0 : randTrue(4)), i = 8 * min(9, n + randTrue(7) + 3), map.treefunc(e + 8 * a, i, r), randTrue() && pushRandomSmallEnemy(e + 8 * a, 8 * i), pushRandomSmallEnemy(e + 8 * (a += r - 1), 8 * n));
            break;
        case 1:
            t = 14, n = 7, randTrue(), t = 4 + randTrue(2), pushPrePlatformGenerator(e + 8 * (randTrue() + 1), t, -1), t += randTrue(3) + 3;
            break;
        default:
            t = 4 + randSign() + randTrue(), n = min(randTrue(2) + 4 + randSign(2), map.treelev + 4);
            var o = e - 8 * randTrue();
            if (n == map.treelev && (n += randSign()), map.treefunc(o, 8 * n, t), t > 3 || randTrue())
                if (randTrue(3)) pushRandomSmallEnemy(o + 8 * (randTrue() + 1), 8 * n);
                else if (randTrue(2))
                for (a = 1; a < t - 1; ++a) pushPreThing(Coin, o + 1 + 8 * a, 8 * (n + 1) - 1)
    }++map.sincechange > 7 && randTrue() ? (x = map.randtype, map.sincechange = 0) : x = pushRandomSectionTrees, pushPreThing(GenerationStarter, e + 8 * (t + randSign()), ceilmax + 20, x), spawnMap(), map.treelev = n
}

function pushRandomSmallEnemy(e, t, n) {
    switch (randTrue(7)) {
        case 1:
        case 2:
        case 3:
            pushPreThing(Koopa, e, t + 12, !0, n);
            break;
        case 7:
            pushPreThing(Beetle, e, t + 8.5);
            break;
        default:
            pushPreThing(Goomba, e, t + 8)
    }
}

function pushRandomSectionUnderworld(e) {
    var t, n, x = max(randTrue(117), 1),
        r = 14,
        i = x - x % r;
    floor(x / r);
    if (pushPreFloor(e, 0, x), window.randcount_powerup = 3, x < r) switch (randTrue()) {
        case 0:
            for (t = 0; t < x - 2; t += 3) pushRandomChunkEnemy(e + 8 * t, 0, t);
            break;
        case 1:
            for (t = 0; t < x - 2; t += 3) randTrue(2) ? t % 3 == 0 && pushRandomChunkEnemy(e, t) : pushRandomObstacle(e, t)
    } else
        for (t = 1; t < i; t += r) switch (randTrue(5)) {
            case 0:
                pushRandomUnderworldSquigglies(e + 8 * t, r), makeCeiling(e + 8 * t, r);
                break;
            case 1:
                var a = 1 + randTrue(),
                    o = 4 + randTrue(7);
                for (t += a, n = 0; n < r; n += 1 + randTrue() / 2) randTrue() && pushRandomSmallEnemy(e + 8 * (t + n), 0);
                fillPreThing(Brick, e + 8 * t, 8 * o, 13, 12 - o, 8, 8), t -= a;
                break;
            case 2:
                createTunnel(e + 8 * (t + 2), 10, Brick);
                break;
            case 3:
                pushUnderworldPipes(e + 8 * (t + 2), 12), makeCeiling(e + 8 * (t + 1), r);
                break;
            case 4:
                pushUnderworldStones(e + 8 * (t + 2), 12), makeCeiling(e + 8 * (t + 1), r);
                break;
            case 5:
                for (n = 0; n < 10; n += 3) pushRandomChunkEnemy(e + 8 * (t + n), n);
                break;
            case 6:
                for (n = 0; n < x - 2; n += 3) randTrue(2) ? (t % 3 == 0 || randTrue()) && (pushRandomChunkEnemy(e + 8 * (t + n), n), ++numenemychunks) : pushRandomObstacle(e + 8 * (t + n), n)
        }
    prepareNextGeneratorStandard(e, x, pushRandomSectionUnderworld, !0), spawnMap()
}

function pushRandomUnderworldSquigglies(e, t, n, x) {
    n = n || 1 / 0;
    for (var r = 3 + randTrue(2), i = min(n, r + 1 + randTrue(4)), a = 1 == r ? i : randTrue(2) ? r : i, o = 1 + i - r, l = !1, s = i + 16, d = 0; d < t; ++d) {
        if (randTrue()) {
            for (var u = 0; u < 3; ++u) pushPreThing(Brick, e + 8 * (d + u), 8 * a, randTrue() ? null : getRandomBrickItem());
            !x && randTrue(2) && fillPreThing(Coin, e + 1 + 8 * d, 8 * min(s, a + randTrue(4) + 1) - 1, 3 + randTrue(), 1, 8), l || (randTrue() ? pushPreThing(Block, e + 8 * (d + 3), 8 * a, getRandomBlockItem()) : pushPreThing(Brick, e + 8 * (d + 3), 8 * a), l = !0), d += 3
        } else fillPreThing(Brick, e + 8 * d, 8 * r, 1, o, 8, 8), a = a == i ? r : i, l = !1;
        (d % 3 == 1 || randTrue() && d < t - 3) && pushRandomSmallEnemy(e + 8 * d, 0, !1)
    }
}

function pushUnderworldPipes(e, t) {
    var n, x, r, i = t - 4,
        a = !1;
    for (r = 0; r < i; r += 4) switch (randTrue()) {
        case 0:
            addPipeRandom(e + 8 * (r + (n = randTrue())), 0, 8 * (2 + randTrue(2))), r += 1 - n, a = !0;
            break;
        case 1:
            n = randTrue() || !a, x = 4 + randTrue(4), n && pushPreThing(Brick, e + 8 * r, 8 * max(x - 4, 3 + randTrue()), getRandomBrickItem(!1)), addPipeRandom(e + 8 * (r + n), 0, 8 * x), a = !1
    }
    for (; r < t - 1; ++r) randTrue() && pushRandomChunkEnemy(e + 8 * r, 0)
}

function pushUnderworldStones(e, t) {
    var n, x, r, i = t - 4,
        a = !1;
    for (r = 0; r < i; r += 2) switch (randTrue()) {
        case 0:
            pushPreThing(Stone, e + 8 * (r + (n = randTrue())), 8 * (x = 2 + randTrue(2)), 1, x), r += 1 - n, a = !0;
            break;
        case 1:
            n = randTrue() || !a, x = 4 + randTrue(4), n && pushPreThing(Brick, e + 8 * r, 8 * max(x - 4, 3 + randTrue()), getRandomBrickItem(!1)), pushPreThing(Stone, e + 8 * (r + n), 8 * x, 1, x), a = !1
    }
    for (; r < t - 1; r += 3) randTrue() && pushRandomChunkEnemy(e + 8 * r, 0)
}

function pushRandomSectionUnderwater(e) {
    var t = max(randTrue(117), 7);
    pushPreFloor(e, 0, t -= t % 3), pushPreScenery("Water", e, ceilmax - 21, 8 * t / 3, 1), pushPreThing(WaterBlock, e, ceilmax, 8 * t), window.randcount_powerup = 3;
    for (var n = 0; n < t; n += 4) {
        switch (randTrue(21)) {
            case 0:
                if (n < t - 2) {
                    pushRandomObstacle(e, n);
                    break
                }
            case 1:
                pushRandomEnemy(e, 0, n, !0);
                break;
            default:
                switch (randTrue(7)) {
                    case 0:
                        var x = randTrue() + 2,
                            r = randTrue() + 2;
                        pushPreThing(Stone, e + 8 * n, 8 * r, randTrue(3) + 1, r), pushPreThing(Stone, e + 8 * n, ceillev, randTrue(3) + 1, x);
                        break;
                    case 1:
                        randTrue() && pushPreThing(Stone, e + 8 * n, jumplev1, 4), randTrue() && pushPreThing(Stone, e + 8 * n, jumplev2, 4);
                        break;
                    case 2:
                        fillPreThing(Coin, e + 8 * (n + randTrue()) + 1, 8 * (randTrue(8) + 1) - 1, 3, 1, 8);
                        break;
                    default:
                        if (map.had_coral) {
                            map.had_coral = !1;
                            break
                        }
                        map.had_coral = !0;
                        var i, a = randTrue(3) + 2,
                            o = jumplev1 * (1 + randTrue(2)),
                            l = e + 8 * n;
                        if (o == 3 * jumplev1) {
                            var s = !0;
                            o -= 8
                        }
                        pushPreThing(Stone, e + 8 * n, o, a), i = !s && (randTrue(3) || a <= 3) ? o + 24 : o - 8, randTrue() && pushPreThing(Coral, l, i, 3), randTrue() && a > 3 && o < 64 && pushPreThing(Coral, l + 8 * (a - 1), i, 3), a >= 3 && (n += a - 3)
                }
        }
        map.countCheep > 1 && (pushPreThing(CheepCheep, e + 8 * n, randTrue(80) + 8, randTrue()), map.countCheep = 0), map.countBlooper > 7 && (pushPreThing(Blooper, e + 8 * n, randTrue(80) + 8), map.countBlooper = 0), randTrue(7) && ++map.countCheep, randTrue(3) && ++map.countBlooper
    }
    if (++map.sincechange < 3) {
        var d = prepareNextGeneratorStandard(e, t, pushRandomSectionUnderwater, !1, !0);
        pushPreScenery("Water", e + 8 * t, ceilmax - 21, 8 * (d + 1) / 3, 1), pushPreThing(WaterBlock, e + 8 * t, ceilmax, 8 * (d + 1))
    } else endRandomSectionUnderwater(e + 8 * t)
}

function endRandomSectionUnderwater(e) {
    pushPreFloor(e, 0, 19), pushPreScenery("Water", e, ceilmax - 21, 28, 1), pushPreThing(WaterBlock, e, ceilmax, 157.5), pushPreThing(Stone, e, 8, 5, 1), pushPreThing(Stone, e + 8, 16, 4, 1), pushPreThing(Stone, e + 16, 24, 3, 1), pushPreThing(Stone, e + 24, 32, 2, 1), pushPreThing(Stone, e + 24, 88, 2, 4), pushPreThing(PipeSide, e + 32, 48, ["Random", randTrue() ? "Overworld" : "Underworld", "Up"]), pushPreThing(Stone, e + 40, 88, 14, 11), map.scrollblockerok = !0, pushPreThing(ScrollBlocker, e + 56, 80, !0), spawnMap()
}

function startRandomSectionSky(e) {
    pushPreThing(Stone, e, 0, 78), pushPreThing(Platform, e + 88, 24, 6, [collideTransport]), pushRandomSectionSky(e + 80, 1), spawnMap()
}

function pushRandomSectionSky(e, t) {
    if (t++ > 7) return fillPreThing(Coin, e + 8, 8, 3, 1, 8), spawnMap();
    var n = 0;
    if (t % 2) fillPreThing(Coin, e + 1, 71, 3, 1, 8), n = 32;
    else switch (randTrue(t)) {
        case 3:
            pushPreThing(Stone, e + 8, 48, 1, 2), fillPreThing(Coin, e + 25, 63, 7, 1, 8), pushPreThing(Stone, e + 88, 48, 1, 2), n = 104;
            break;
        case 4:
        case 5:
        case 6:
            pushPreThing(Stone, e + 8, 56, 2);
            for (var x = 0; x <= 7; x += 2) pushPreThing(Stone, e + 8 * (x + 5), 56), fillPreThing(Coin, e + 8 * (x + 5) + 1, 63, 2, 1, 8);
            n = 104;
            break;
        default:
            fillPreThing(Coin, e + 1, 55 + 8 * randTrue(), 16, 1, 8), n = 128
    }
    pushPreThing(GenerationStarter, e + n, ceilmax + 20, pushRandomSectionSky, t), spawnMap()
}

function prepareNextGeneratorStandard(e, t, n, x, r) {
    var i = 0,
        a = 0;
    if (r) i = 1;
    else switch (randTrue(7)) {
        case 0:
            t > 7 && map.underwater && !randTrue(7) ? (i = randTrue(3) + 7, pushPreThing(Springboard, e + 8 * (t - 1), 14.5)) : a = !0;
            break;
        case 1:
            var o = max(1, randTrue(7));
            i = o + randTrue(3), pushPreFloor(e + 8 * t, 0, o);
            for (var l = 1; l <= o; ++l) pushPreThing(Stone, e + 8 * (t + l - 1), 8 * l, 1, l);
            if (randTrue()) {
                pushPreFloor(e + 8 * (t + i + (o = max(1, randTrue(o))) - 1), 0, o);
                for (var s = 0; s < o; ++s) pushPreThing(Stone, e + 8 * (t + i + o + s - 1), 8 * (o - s), 1, o - s);
                i += o + o - 2
            }
            break;
        default:
            x && randTrue() ? pushPrePlatformGenerator(e + 8 * (t + 1.5), 2 * ((i = randTrue(1) + 4) - 2), randSign()) : a = !0
    }
    return (a || !i || i < 1) && (i = randTrue(3) + 1), n == pushRandomSectionOverworld && map.num_random_sections >= 3 + randTrue(7) && (n = pushRandomSectionPreCastle), !r && ++map.sincechange > 3 && (n = getRandomNextSection(), map.sincechange = 0, pushPreFuncCollider(e, zoneDisableCheeps)), pushPreThing(GenerationStarter, e + 8 * (t + i), ceilmax + 20, n), spawnMap(), i
}

function getRandomNextSection() {
    switch (randTrue()) {
        case 0:
            return map.treeheight = 0, pushRandomSectionTrees;
        case 1:
            return startRandomSectionBridge
    }
}

function pushRandomChunkEnemy(e, t, n) {
    pushRandomEnemy(e, 0, t, n), randTrue(2) && (pushRandomSolidRow(e + 8 * t, jumplev1, randTrue(2) + 1), randTrue() && pushRandomEnemy(e, jumplev1, t + 1, !0), randTrue() && (pushRandomSolidRow(e + 8 * t, jumplev2, randTrue(2) + 1), randTrue() && pushRandomEnemy(e, jumplev2, t + 1, !0)))
}

function pushRandomEnemy(e, t, n, x) {
    switch (randTrue(14)) {
        case 0:
        case 1:
            fillPreThing(Beetle, e + 8 * n, t + 8.5, randTrue(2), 1, 12);
            break;
        case 3:
            if (!x) {
                switch (randTrue(4)) {
                    case 0:
                        pushPreThing(HammerBro, e + 8 * n, t + 12), randTrue() && pushPreThing(HammerBro, e + 8 * n + 16, t + 40);
                        break;
                    case 1:
                        if ("Underworld" != map.randname) {
                            pushPreThing(Lakitu, e + 8 * n, t + 80, !0);
                            break
                        }
                    case 2:
                        pushPreThing(Blooper, e + 8 * n, t + 40)
                }
                break
            }
            break;
        default:
            if (!randTrue(3)) return;
            switch (randTrue(3)) {
                case 1:
                    fillPreThing(Koopa, e + 8 * n, t + 12, randTrue(2), 1, 12, 0, randTrue() || map.onlysmartkoopas, randTrue());
                    break;
                default:
                    fillPreThing(Goomba, e + 8 * n, t + 8, randTrue(2), 1, 12)
            }
    }
}

function addPipeRandom(e, t, n) {
    var x;
    x = !(n <= 24 || randTrue(2)) && getRandomTransport(), pushPrePipe(e, t, n, randTrue(7), x)
}

function getRandomTransport() {
    var e, t = [
        ["Overworld", "Up"],
        ["Underworld", "Down"],
        ["Underwater", "Up"]
    ];
    return t[e = randTrue(t.length - 1)][0] == map.randname && (e = (e + randTrue(t.length - 2) + 1) % t.length), ["Random", t[e][0], t[e][1]]
}

function getAfterSkyTransport() {
    switch (randTrue(3)) {
        case 0:
            return ["Random", "Underworld", "Down"];
        default:
            return ["Random", "Overworld" + (body.className.indexOf(!0) ? " Night" : ""), "Down"]
    }
}

function pushRandomObstacle(e, t) {
    var n = randTrue(3);
    switch (n > 1 && (map.hadPipe = !1), n) {
        case 0:
        case 1:
            if (t > 1) {
                addPipeRandom(e + 8 * t, 0, 8 * (randTrue(2 + (1 == map.hadObstacle && 0 == map.hadPipe && t > 7)) + 2)), map.hadObstacle = map.hadPipe = !0;
                break
            }
        case 2:
            for (var x = 0; x < 2; ++x) randTrue() || t < 1 || pushPreThing(Stone, e + 8 * (t + x), 8 * (r = randTrue(2) + 2), 1, r);
            break;
        default:
            x = randTrue(2);
            switch (randTrue(7)) {
                case 0:
                    var r;
                    if (pushPreThing(Cannon, e + 8 * (t + x), 8 * (r = randTrue(2) + 1), r), 1 == r && randTrue(2) && 2 != x) {
                        var i = randTrue() + 2;
                        pushPreThing(Cannon, e + 8 * (t + x), 8 * r + 8 * i, i)
                    }
                    map.hadObstacle = !0;
                    break;
                case 1:
                    if (!map.underwater) {
                        randTrue() && (!map.underwater && randTrue(2) && pushPreThing(Brick, e + 8 * t, jumplev1), pushPreThing(Block, e + 8 * (t + 1), jumplev1, [Mushroom, 1], !0), !map.underwater && randTrue(2) && pushPreThing(Brick, e + 8 * (t + 2), jumplev1), map.hadObstacle = !0);
                        break
                    }
                case 2:
                    if (!map.underwater) {
                        var a = randTrue();
                        a || pushPreThing(Brick, e + 8 * t, jumplev1, getRandomBrickItem()), pushPreThing(Stone, e + 8 * (t + a), jumplev1, 2), addPipeRandom(e + 8 * (t + a), jumplev1, 24 + 8 * randTrue()), a && pushPreThing(Brick, e + 8 * t, jumplev1, getRandomBrickItem());
                        break
                    }
            }
    }
}

function pushRandomSolidRow(e, t, n) {
    for (var x = 0; x < n; ++x) randTrue(2) ? pushPreThing(Brick, e + 8 * x, t, getRandomBrickItem("Overworld" == map.randname && t == jumplev2)) : pushPreThing(Block, e + 8 * x, t, getRandomBlockItem())
}

function getRandomBrickItem(e, t) {
    return e && !randTrue(14) ? [Vine, ["Random", "Sky", "Vine"]] : !(!t && randTrue(7)) && (randTrue(3) ? Coin : Star)
}

function getRandomBlockItem() {
    return ++randcount_powerup, !(randcount_powerup <= 7) && (!randTrue(7) && Mushroom)
}

function pushRandomGroundScenery(e, t, n) {
    switch (randTrue(7)) {
        case 2:
            if (n - t > 4) {
                pushPreScenery("Bush3", e, 0);
                break
            }
        case 1:
            if (n - t > 2) {
                pushPreScenery("Bush2", e, 0);
                break
            }
        case 0:
            pushPreScenery("Bush1", e, 0);
            break;
        case 3:
            if (n - t > 4) {
                pushPreScenery("HillLarge", e, 0);
                break
            }
        case 4:
            pushPreScenery("HillSmall", e, 0);
            break;
        case 5:
            pushPreScenery("PlantLarge", e, 0);
            break;
        case 6:
            pushPreScenery("PlantSmall", e, 0);
            break;
        case 7:
            pushPreScenery("Fence", e, 0, randTrue(2) + 1)
    }
}

function pushRandomSkyScenery(e) {
    switch (randTrue(2)) {
        case 0:
            pushPreScenery("Cloud1", e, 8 * (randTrue(5) + 5));
            break;
        case 1:
            pushPreScenery("Cloud2", e, 8 * (randTrue(4) + 6));
            break;
        case 2:
            pushPreScenery("Cloud3", e, 8 * (randTrue(3) + 7))
    }
}

function addDistanceCounter() {
    counter = createElement("div", {
        className: "indisplay counter randomdisplay",
        innerText: data.traveledold + " blocks traveled"
    }), body.appendChild(counter), TimeHandler.addEventInterval((function(e) {
        data.traveled = max(0, Math.round((player.right + gamescreen.left) / unitsizet8) - 3), e.innerText = data.traveledold + data.traveled + " blocks traveled"
    }), 3, 1 / 0, counter)
}

function addSeedDisplay() {}

function createTunnel(e, t, n) {
    for (var x = randTrue(2) + 3, r = randTrue(2) + 2, i = !1, a = 0; a < t; ++a) fillPreThing(n, e + 8 * a, 8, 1, r, 8, 8), randTrue(3) || i ? i = !1 : pushRandomSmallEnemy(e + 8 * a, 8 * r), fillPreThing(n, e + 8 * a, 96 - 8 * x, 1, x, 8, 8)
}

function removeRandomDisplays() {
    var e, t = body.getElementsByClassName("randomdisplay");
    for (e = t.length - 1; e >= 0; --e) body.removeChild(t[e])
}

function resetLibrary() {
    window.palette = [
        [0, 0, 0, 0],
        [255, 255, 255, 255],
        [0, 0, 0, 255],
        [188, 188, 188, 255],
        [116, 116, 116, 255],
        [252, 216, 168, 255],
        [252, 152, 56, 255],
        [252, 116, 180, 255],
        [216, 40, 0, 255],
        [200, 76, 12, 255],
        [136, 112, 0, 255],
        [124, 7, 0, 255],
        [168, 250, 188, 255],
        [128, 208, 16, 255],
        [0, 168, 0, 255],
        [24, 60, 92, 255],
        [0, 128, 136, 255],
        [32, 56, 236, 255],
        [156, 252, 240, 255],
        [60, 188, 252, 255],
        [92, 148, 252, 255],
        [0, 130, 0, 255]
    ], window.digitsize = getDigitSize(palette), window.filters = {
        Underworld: ["palette", {
            "05": "18",
            "09": "16"
        }],
        Castle: ["palette", {
            "02": "04",
            "05": "01",
            "09": "03"
        }],
        Alt: ["palette", {
            11: "01"
        }],
        Alt2: ["palette", {
            "02": "04",
            "05": "01",
            "09": "03",
            13: "01",
            19: "08"
        }],
        star: {
            one: ["palette", {}],
            two: ["palette", {
                "06": "02",
                "08": "05",
                10: "09"
            }],
            three: ["palette", {
                "06": "01",
                "08": "06",
                10: "08"
            }],
            four: ["palette", {
                "06": "01",
                "08": "06",
                10: "14"
            }]
        },
        smart: ["palette", {
            14: "08"
        }]
    }, window.library = {
        rawsprites: {
            characters: {
                Eraser: "p[7,7,7,7]x06,3333x011,x36,x09,x38,x07,x310,x05,311x36,11300033321333312333003332x16,23330333321233212x38,22233222x320,03333x26,3333x05,x28,x06,11x28,x05,x15,x25,110000x16,222111x05,x15,001110000",
                Beetle: {
                    normal: {
                        normal: "p[0,2,5,8]x022,1111x010,x18,x07,x110,x05,x17,33111000x18,32311000x19,3311003333x111,001133x110,001113x110,011213x110,011113x110,011113x110,0011233x15,x35,00222331133322200222203333002222",
                        two: "p[0,2,5,8]x07,111x010,x18,x07,x110,x05,x17,33111000x18,32311000x19,3311003333x111,001133x110,001113x110,011213x110,011113x110,011113x110,0011233x15,x35,00022331133322x05,22233330222x06,22x05,22000"
                    },
                    Underworld: {
                        normal: "p[0,15,16,18]x022,1111x010,x18,x07,x110,x05,x17,22111000x18,23211000x19,2211002222x111,001122x110,001112x110,011312x110,011112x110,011112x110,0011322x15,x25,00333221122233300333302222003333",
                        two: "p[0,15,16,18]x07,111x010,x18,x07,x110,x05,x17,22111000x18,23211000x19,2211002222x111,001122x110,001112x110,011312x110,011112x110,011112x110,0011322x15,x25,00033221122233x05,33322220333x06,33x05,33000"
                    },
                    Castle: {
                        normal: "p[0,1,3,4]x022,3333x010,x38,x07,x310,x05,x37,22333000x38,21233000x39,2233002222x311,003322x310,003332x310,033132x310,033332x310,033332x310,0033122x35,x25,00111223322211100111102222001111",
                        two: "p[0,1,3,4]x07,333x010,x38,x07,x310,x05,x37,22333000x38,21233000x39,2233002222x311,003322x310,003332x310,033132x310,033332x310,033332x310,0033122x35,x25,00011223322211x05,11122220111x06,11x05,11000"
                    }
                },
                BeetleShell: {
                    normal: "p[0,2,5,8]x06,1111x010,x18,x07,1111331111x05,1111322311110000x15,33x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x35,x16,x35,000033311333x010,3333x06,",
                    Underworld: "p[0,15,16,18]x06,1111x010,x18,x07,1111221111x05,1111233211110000x15,22x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x25,x16,x25,000022211222x010,2222x06,",
                    Castle: "p[0,1,3,4]x06,3333x010,x38,x07,3333223333x05,3333211233330000x35,22x35,0000x312,000x314,00x314,00x314,00x314,00x314,00x314,0x25,x36,x25,000022233222x010,2222x06,"
                },
                Blooper: {
                    normal: {
                        normal: "p[0,2,5,9]x06,2332x011,232232x09,23222232x07,2232222322x05,223x26,3220002223x26,322202223x28,32220003x28,3x06,x210,x06,2x18,2x06,1221111221x06,2112112112x06,2112112112x05,212211112212000022332222332200003x210,30000220x26,022000032032002302300002202200220220000320320023023x05,2022002202x06,2032002302x06,2002002002x09,2002x06,",
                        squeeze: "p[0,2,5,9]x06,2332x011,232232x09,23222232x07,2232222322x05,223x26,3220002223x26,322202223x28,32220003x28,3x06,2x18,200003x25,11x25,30x216,32223x26,322232222022002202222032203200230223000222020020222x05,2202002022000"
                    },
                    Underwater: {
                        normal: "p[0,1,2,3]x06,1331x011,131131x09,13111131x07,1131111311x05,113x16,3110001113x16,311101113x18,31110003x18,3x06,x110,x06,1x28,1x06,2112222112x06,1221221221x06,1221221221x05,121122221121000011331111331100003x110,30000110x16,011000031031001301300001101100110110000310310013013x05,1011001101x06,1031001301x06,1001001001x09,1001x06,",
                        squeeze: "p[0,1,2,3]x06,1331x011,131131x09,13111131x07,1131111311x05,113x16,3110001113x16,311101113x18,31110003x18,3x06,1x28,100003x15,22x15,30x116,31113x16,311131111011001101111031103100130113000111010010111x05,1101001011000"
                    }
                },
                Bowser: {
                    normal: {
                        normal: "p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,122233221323333113331x012,1022223332333311331123x010,10113133123333113111223111x09,10003223331113312233112x013,12233111x39,2231x011,2233111x313,1x09,122233111x36,111x35,x010,220033x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,111x36,x019,x35,11113333x019,2x36,x17,x017,1122332222x15,x016,111x210,11x021,1122112222x021,1112111x25,0",
                        two: "p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,122233221323333113331x012,1022223332333311331123x010,10113133123333113111223111x09,10003223331113312233112x013,12233111x39,2231x011,2233111x313,1x09,122233111x36,111x35,x010,220033x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,11x37,x019,x35,11113333x020,x36,x17,x019,22332222x15,x018,2222112211211x018,112211121112222x016,111x27,x06,"
                    },
                    firing: {
                        normal: "p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,112233221323333113331x012,1022223322333311331123x010,101030322x35,113111223111x06,x29,33331113312233112x07,x27,3333111x39,2231x07,x38,111x313,1x010,x35,111x36,111x35,x014,33x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,111x36,x019,x35,11113333x019,2x36,x17,x017,1122332222x15,x016,111x210,11x021,1122112222x021,1112111x25,0",
                        two: "p[0,1,6,14]x012,111x025,331112x025,3331122x023,113333223x019,200311x37,x018,2023311x38,x017,2221113332x35,x017,222213332223333x017,112233221323333113331x012,1022223322333311331123x010,101030322x35,113111223111x06,x29,33331113312233112x07,x27,3333111x39,2231x07,x38,111x313,1x010,x35,111x36,111x35,x014,33x16,33112333111x015,33222113322333112x011,222001022211x37,22x010,2210222012231x39,1x09,220022220033133311133321x08,210x26,1331133112333x010,200x25,333311333223311x010,10x25,333311x37,111x011,12220x35,1333311322x017,x35,1133323323x018,x35,11x37,x019,x35,11113333x020,x36,x17,x019,22332222x15,x018,2222112211211x018,112211121112222x016,111x27,x06,"
                    }
                },
                BowserFire: "p[0,1,6,8]x010,x36,003x010,x316,x06,x35,22332222332222x315,x25,111133x05,3333x213,13000x313,2223333x05,x39,0x36,x09,3300333033003x06,",
                BrickShard: {
                    normal: "p[0,2,9]0021200002221200212121202212221222212221022212220021212000022200",
                    Underworld: ["filter", ["characters", "BrickShard", "Overworld"], filters.Underworld],
                    Castle: ["filter", ["characters", "BrickShard", "Overworld"], filters.Castle]
                },
                BulletBill: "p[0,2,5,8]110x17,x06,2201x25,1110000113x16,2111000112x19,2100113x19,22101131133x15,2121113132212111121111313x26,x17,3111x25,x17,31111222x15,0113x111,00113x110,000110x19,0000110x17,x06,",
                Bubble: "p[0,1]0110100110010110",
                CastleFireBall: ["same", ["characters", "FireBall"]],
                CheepCheep: {
                    normal: {
                        normal: "p[0,1,3,6]0003333x013,x35,011x07,x26,11110000121122221111000x16,222111100012121122x15,0001212112211110000x16,221112x05,1211x27,0000333x210,0000233x29,00300233x28,3330023311x26,333033331112222333000x18,20333x05,x15,0000300",
                        two: "p[0,1,3,6]0003333x013,x35,x010,x26,3x07,1211x25,x06,x16,x25,111001212112222x15,0121211222x16,0x16,22x16,0001211222x16,00333x210,0300233x29,33000233x28,3300023311x26,300033331112222330000x18,203x07,x15,x07,"
                    },
                    red: {
                        normal: "p[0,1,6,8]0002222x013,x25,x010,x36,2x07,1311x35,x06,x16,x35,111001313113333x15,0131311333x16,0x16,33x16,0001311333x16,00222x310,0200322x39,22000322x38,2200032211x36,200022221113333220000x18,302x07,x15,x07,",
                        two: "p[0,1,6,8]0002222x013,x25,011x07,x36,11110000131133331111000x16,333111100013131133x15,0001313113311110000x16,331113x05,1311x37,0000222x310,0000322x39,00200322x38,2220032211x36,222022221113333222000x18,30222x05,x15,0000200"
                    }
                },
                Coin: {
                    normal: {
                        normal: {
                            normal: "p[0,2,6,8]00222211000x26,11002233221102232212211223221221122322122112232212211223221221122322122112232212211223221221102211221100x26,1100022221100",
                            two: "p[0,2,8]00222211000x26,1100x26,110x25,12211x25,12211x25,12211x25,12211x25,12211x25,12211x25,12211x25,1221102211221100x26,1100022221100",
                            three: "p[0,2,9,11]00333311000x36,11003322331103323313311332331331133233133113323313311332331331133233133113323313311332331331103311331100x36,1100033331100"
                        },
                        Underworld: {
                            normal: "p[0,6,9,16]00111133000x16,33001122113301121131133112113113311211311331121131133112113113311211311331121131133112113113301133113300x16,3300011113300",
                            two: "p[0,9,16]00111122000x16,2200x16,220x15,21122x15,21122x15,21122x15,21122x15,21122x15,21122x15,21122x15,2112201122112200x16,2200011112200",
                            three: "p[0,9,11,16]00222233000x26,33002211223302212232233221223223322122322332212232233221223223322122322332212232233221223223302233223300x26,3300022223300"
                        }
                    },
                    anim: {
                        normal: "p[0,1,7]000012x08,12x07,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x06,1112x07,12x08,120000",
                        anim2: "p[0,1,6,7]000022x07,2222x05,x26,000022132200022122322002212232200221223220022122322002212232200221223220002213220000x26,x05,2222x07,220000",
                        anim3: "p[0,1,6,7]000023x08,23x07,2333x06,2333x06,2333x06,2333x06,1333x06,1333x06,2333x06,2333x06,2333x06,2333x07,23x08,230000",
                        anim4: "p[0,1,6]x05,2x09,2x09,2x09,2x09,2x09,2x09,1x09,1x09,2x09,2x09,2x09,2x09,2x09,20000"
                    }
                },
                FireBall: {
                    normal: "p[0,1,6,8]0303330000303330300032330033322303322123032212330332233000333300",
                    two: "p[0,1,6,8]x05,3000333000333233030322230033212x36,2122330332233000333300",
                    three: "p[0,1,6,8]0033330003322330332122303212233032233300332300030333030000333030",
                    four: "p[0,1,6,8]0033330003322330332212x36,2123300322230303323330003330003x05,"
                },
                FireFlower: {
                    normal: {
                        normal: "p[0,1,6,8,14]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",
                        two: "p[0,2,5,9,14]0000x28,x06,x212,000222x38,222022333x16,3332222333x16,333220222x38,222000x212,x06,x28,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",
                        three: "p[0,6,8,10,14]0000x18,x06,x112,000111x38,111011333x26,3331111333x26,333110111x38,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",
                        four: "p[0,1,6,14]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,33x07,333000033000033303330003300033300333300330033330003333033033330000333303303333x05,x310,x09,3333x06,"
                    },
                    Underworld: {
                        normal: "p[0,1,6,8,16]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",
                        two: "p[0,15,16,18]0000x38,x06,x312,000333x28,333033222x16,2223333222x16,222330333x28,333000x312,x06,x38,x011,22x07,222000022000022202220002200022200222200220022220002222022022220000222202202222x05,x210,x09,2222x06,",
                        three: "p[0,6,8,10,16]0000x18,x06,x112,000111x38,111011333x26,3331111333x26,333110111x38,111000x112,x06,x18,x011,44x07,444000044000044404440004400044400444400440044440004444044044440000444404404444x05,x410,x09,4444x06,",
                        four: "p[0,5,9,16]0000x18,x06,x112,000111x28,111011222x36,2221111222x36,222110111x28,111000x112,x06,x18,x011,33x07,333000033000033303330003300033300333300330033330003333033033330000333303303333x05,x310,x09,3333x06,"
                    }
                },
                Firework: ["same", ["solids", "Firework"]],
                Goomba: {
                    normal: "p[0,2,5,9]x06,3333x011,x36,x09,x38,x07,x310,x05,311x36,11300033321333312333003332x16,23330333321233212x38,22233222x320,03333x26,3333x05,x28,x06,11x28,x05,x15,x25,110000x16,222111x05,x15,001110000",
                    Underworld: "p[0,15,16,18]x06,2222x011,x26,x09,x28,x07,x210,x05,211x26,11200022231222213222002223x16,32220222231322313x28,33322333x220,02222x36,2222x05,x38,x06,11x38,x05,x15,x35,110000x16,333111x05,x15,001110000",
                    Castle: ["filter", ["characters", "Goomba", "Overworld"], filters.Castle]
                },
                Hammer: {
                    normal: "p[0,2,5,8]x08,2x014,12101x010,111101x09,1122232x09,1211131x08,x16,31x08,10011131x09,x15,01x012,2x015,2x015,2x015,2x015,2x015,2x015,2x015,2x07,",
                    two: "p[0,2,5,8]x073,11x013,10111x011,101211x010,11112110x28,11112122x08,1111211x010,3333x011,1111211x065,",
                    three: "p[0,2,5,8]x07,2x015,2x015,2x015,2x015,2x015,2x015,2x015,2x012,10x15,x09,13111001x08,13x16,x08,1311121x09,2322211x09,101111x010,10121x014,2x08,",
                    four: "p[0,2,5,8]x065,1121111x011,3333x010,1121111x08,22121111x28,01121111x010,112101x011,11101x013,11x073,"
                },
                HammerBro: {
                    normal: {
                        normal: "p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,12113333x06,21231x36,00022210311133313x06,3322113231x06,3222212331x06,x25,1323130000x25,1133233000x25,1133332200x25,313333233x06,33123323330000223311223333000022233111133x05,222x35,11110000222233x26,x05,222033x25,x06,2200002222x013,222",
                        two: "p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,1211333300002221231x36,x06,10311133313x06,3322113231x06,3222212331x06,3x25,32313x05,33x25,3233x05,33312222322x06,3313333233x06,3312333233x06,3311223333x07,33111133x08,x35,1111x07,23322233x08,x27,x010,x25,x012,2222000"
                    },
                    throwing: {
                        normal: "p[0,1,6,14]00003333x011,333313x09,3113331x010,31133332x07,231133322x06,x25,12322x06,x25,12222x06,x25,1122233x05,2221x25,333x07,1322223313x06,3322223231x06,33x25,331x06,33322132313x05,33311133233x05,3331x35,22x06,3313333233x06,33123323330000223311223333000022233111133x05,222x35,11110000222233x26,x05,222033x25,x06,2200002222x013,222",
                        two: "p[0,1,6,14]00003333x011,333313x09,3113331x010,31133332x07,231133322x06,x25,12322x06,x25,12222x06,x25,1122233x05,2221x25,333x07,1322223313x06,3322223231x06,33x25,331x06,33322132313x05,33311133233x05,3331x35,22x06,3313333233x06,3312333233x06,3311223333x07,33111133x08,x35,1111x07,23322233x08,x27,x010,x25,x012,2222000"
                    },
                    thrown: {
                        normal: "p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,12113333x06,21231x36,00022210311133313x06,3322113231x06,3222212331x06,x25,1323130000x25,1133233000x25,1133332200x25,313333233x06,33123323330000223311223333000022233111133x05,222x35,11110000222233x26,x05,222033x25,x06,2200002222x013,222",
                        two: "p[0,1,6,14]003333x011,31x35,x08,31113313x09,31133313x08,311x35,x07,221221233x07,x25,122133x05,x25,12113333x06,21231x36,00022210311133313x06,3322113231x06,3222212331x06,x25,1323130000x25,1133233000x25,113333220022223313333233x06,3312333233x06,3311223333x07,33111133x08,x35,1111x07,23322233x08,x27,x010,x25,x012,2222000"
                    }
                },
                Koopa: {
                    normal: {
                        normal: {
                            flying: {
                                normal: "p[0,1,6,14]x019,1x09,11000111x07,1111001112x05,x15,0231122000x15,0023112200112110002311220012111100211122011211110222122201211110023x25,012111010x26,0012x15,022202203312111002200220331113330220221333232333002022133233323200002212x36,23000221132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000221112331110000x25,x15,22200x25,x06,2222",
                                two: "p[0,1,6,14]00001x014,111x012,2111x012,23112x010,223112x010,223112x010,2211120011100002322122011211000x27,0121111002220022012x15,022000213x17,x05,22133x17,00022133331131110222213332323311002221232333232000021132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000021112331112x05,222x15,222x06,2220000222x07,2220022200"
                            },
                            normal: {
                                normal: {
                                    normal: "p[0,1,6,14]x019,1x014,111x013,1112x011,231122x010,231122x010,231122x010,211122x09,2221222x09,23x25,x09,x26,00x35,0002220220323332300220022033232333022022133332311300202213332323130000221232333232000221132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000221112331110000x25,x15,22200x25,x06,2222",
                                    two: "p[0,1,6,14]00001x014,111x012,2111x012,23112x010,223112x010,223112x010,221112x09,2322122x09,x27,x09,22200220x35,00022000213233323x06,2213323233x05,22133332311300222213332323130002221232333232000021132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000021112331112x05,222x15,222x06,2220000222x07,2220022200"
                                },
                                Underworld: {
                                    normal: "p[0,5,9,16]x019,1x014,111x013,1112x011,231122x010,231122x010,231122x010,211122x09,2221222x09,23x25,x09,x26,00x35,0002220220323332300220022033232333022022133332311300202213332323130000221232333232000221132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000221112331110000x25,x15,22200x25,x06,2222",
                                    two: "p[0,5,9,16]00001x014,111x012,2111x012,23112x010,223112x010,223112x010,221112x09,2322122x09,x27,x09,22200220x35,00022000213233323x06,2213323233x05,22133332311300222213332323130002221232333232000021132x35,2300002132323332320000212333232333x05,1x35,23333x05,113332323111000021112331112x05,222x15,222x06,2220000222x07,2220022200"
                                }
                            }
                        },
                        smart: ["filter", ["characters", "Koopa", "normal", "normal"], filters.smart]
                    },
                    Castle: ["filter", ["characters", "Koopa", "normal"], filters.Castle]
                },
                Lakitu: {
                    normal: "p[0,1,6,14]x05,x25,x010,x27,x08,333233322x06,3111311132x06,3x17,323x05,3113131132330000311313113233x05,3332x37,x05,222333322233000x25,33x25,3003x25,11x25,30031222111122213003x112,303x114,33x15,3113x15,33x15,3113x15,33x15,3113x15,33x114,3313x110,3130311131111311130031111333311113003x112,3000311113311113x05,3333003333000",
                    hiding: "p[0,1,6,14]x0131,2220000222x05,x25,33x25,0000x25,11x25,00003222111122230003x112,303x114,33x15,3113x15,33x15,3113x15,33x15,3113x15,33x114,3313x110,3130311131111311130031111333311113003x112,3000311113311113x05,3333003333000"
                },
                Mario: {
                    dead: "p[0,6,8,10]x05,x25,x07,11x27,1100111131311313x16,3313113133x15,33311113331100x35,113333x05,331333313x06,33x16,3x05,222211112220003332233332233003333223322333003333212212333003333x26,333000333x26,3300",
                    normal: {
                        normal: {
                            normal: "p[0,6,8,10]0000x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,3332333x08,333323323330000x35,2222333300011132122123110001111x26,111000111x28,11x05,222202222x06,333300033330000x35,000x35,00",
                            hopping: ["same", ["characters", "Mario", "normal", "normal", "running", "normal", "two"]],
                            jumping: "p[0,6,8,10]x013,111x06,x26,0111x05,x29,11x05,33311311333000031311131133300003133111311130000331111x36,x06,x17,33000x35,2333233000x37,2333220311x36,x26,0311112232212212330113x210,3300333x29,330333x28,x05,330x25,x07,",
                            running: {
                                skidding: "p[0,6,8,10]x05,x26,x08,x28,33x07,131x37,0000x16,3113111001133113311311100033x16,3111x05,1123332222x05,3332231112220000x36,1113220000x36,112222x05,3333x26,x07,222233322x07,222x35,x09,2333223333x09,2x36,x010,x35,00",
                                normal: {
                                    normal: "p[0,6,8,10]x05,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x05,x35,2233x05,1113333222333x17,3332122233x15,0x28,0330000x210,33000x211,330033322200222233003333x013,3333x010,",
                                    two: "p[0,6,8,10]x020,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x08,333322333x07,3332212211x06,3333x26,x06,2331112222x07,23112222x09,2223333x09,x38,0000",
                                    three: "p[0,6,8,10]x021,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,x35,2311x06,11x36,11100001112x35,11x05,333x27,x06,33x28,x05,333x27,x06,330003333x012,x35,x05,"
                                }
                            },
                            paddling: {
                                normal: {
                                    normal: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x06,33x27,x07,33x26,x08,332222x010,30033x014,3x027,",
                                    paddle1: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x05,33x28,x06,33x27,x07,33x25,x09,330333x013,33x026,",
                                    paddle2: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x05,33x25,33111000033x27,111000033x26,00110000330333x013,33x026,",
                                    paddle3: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x07,33x25,x09,330333x013,33x026,"
                                },
                                swim2: {
                                    normal: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x07,3x27,x07,33x26,x010,3322x011,333x013,33x028,",
                                    paddle1: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x06,3x28,x06,33x27,x09,33222x010,3333x012,333x027,",
                                    paddle2: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x06,3x25,33111000033x27,111x06,3322220011x05,3333x012,333x027,",
                                    paddle3: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x09,332222x09,3333x012,333x027,"
                                }
                            },
                            climbing: {
                                normal: "p[0,6,8,10]0000x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x09,222x35,x08,222x36,11100002222x35,111100x26,3333111100x211,33300x211,330000x29,x08,x26,x06,",
                                two: "p[0,6,8,10]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x08,22x35,111x05,22x36,1111000222x36,1111000x25,122x08,x28,00033000x210,3330000x29,333x05,x28,333x016,"
                            }
                        },
                        large: {
                            normal: "p[0,6,8,10]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,",
                            jumping: "p[0,6,8,10]x012,111x012,11311x06,x25,113310000x27,x15,000x28,x35,000x211,33000333113111333300311311331111330031133x18,30031133111311113033x15,x37,0033331111333313000033x18,33x05,2222332333300x36,223233300x38,23323300x38,2232300033113333223320003111133222231000x15,32221222000x15,x28,0001011x29,003011x210,033000x29,33330003x28,x37,233x26,x37,222332222x37,x25,0022x37,x25,x08,3332222x09,33x014,3x015,",
                            hopping: ["same", ["characters", "Mario", "normal", "large", "running", "normal", "two"]],
                            crouching: "p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000331113111311110033x15,x36,000223x15,x35,0033323x19,0033323331113323033332x38,23033332x37,22x36,21x35,22x37,x28,x39,x26,x38,1112222111333231111222211113221111x26,1111202113x06,311200033330000333300x36,0000x36,",
                            running: {
                                skidding: "p[0,6,8,10]000x27,x09,11x27,33x06,1x27,333000x26,31133110022113113113111100013311311311110x16,3111213x16,3x15,22313111133331133223110333311113332x05,x15,x35,220003322233111332000333222x15,32000333233x15,3200x37,x15,0000x37,113122200x38,11222200x37,x27,00x36,x27,0000333x25,333x05,x25,x35,x06,x25,x38,0000222333311113x06,233x16,3x07,3112222x010,x27,003x07,222230033x07,22x37,x08,x37,x09,x36,x011,3333x012,3330000",
                                normal: {
                                    normal: "p[0,6,8,10]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x08,33311x010,222233200010000333322332011100x36,223231110x37,223321110x37,223323130x36,222332330x36,22212313003333x29,000x15,x28,000x15,x28,0031111x29,0330111x27,x35,00023x26,x35,003223x25,x38,22233222x39,2222000x310,2x011,333x013,333x014,333x011,",
                                    two: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,30003333x27,322003333x25,3322200333322223222200033332220022220003333x05,333300033x07,33330003x08,x36,x010,x36,x017,",
                                    three: "p[0,6,8,10]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x05,33x18,x07,222211x09,32332233x07,323333223x07,3233332233x06,3233332223x06,32x35,113x06,3233331111x06,22333311112x05,22233311112200002222331112220000x26,332222x05,x25,33322x07,222x36,x07,22x36,x09,223333x010,3222333x09,3333033x08,x35,x011,x37,x011,x35,x05,"
                                }
                            },
                            paddling: {
                                normal: {
                                    normal: "p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",
                                    paddle1: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",
                                    paddle2: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",
                                    paddle3: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,"
                                },
                                swim2: {
                                    normal: "p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",
                                    paddle1: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,",
                                    paddle2: "p[0,6,8,10]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x028,",
                                    paddle3: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,"
                                }
                            },
                            climbing: {
                                normal: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x29,30330000x27,x35,x05,x26,x35,x07,22223333x011,x35,x013,33x015,3x018,",
                                two: "p[0,6,8,10]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,3x06,x210,033000x29,33330000x28,33330000x28,3333x05,x27,3333x064,"
                            }
                        },
                        fiery: {
                            normal: "p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x07,1x25,3x09,31333313x07,3313333133x05,3331333313330003333133331333300333113333113330333311333311x38,x18,x38,1211112133332222x18,x28,x18,22220222x18,2220022x110,22000x112,000x16,00x16,00x15,0000x15,00x15,0000x15,000333300003333000033330000333300x36,0000x312,0000x36,",
                            jumping: "p[0,5,6,8]x012,222x012,22322x06,x15,223320000x17,x25,000x18,x35,000x111,33000333223222333300322322332222330032233x28,30032233222322223033x25,x37,0033332222333323000033x28,33x05,1111331333300x36,113133300x38,13313300x38,1131300033223333113310003222233111132000x25,31112111000x25,x18,0002222x19,003022x110,033000x19,33330003x18,x37,133x16,x37,111331111x37,x15,0011x37,x15,x08,3331111x09,33x014,3x015,",
                            hopping: ["same", ["characters", "Mario", "normal", "fiery", "running", "normal", "three"]],
                            crouching: "p[0,5,6,8]x07,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000332223222322220033x25,x36,000113x25,x35,0033313x29,0033313332223313033331x38,13033331x37,11x36,12x35,11x37,x18,x39,x16,x38,2221111222333132222111122223112222x16,2222101223x06,322100033330000333300x36,0000x36,",
                            firing: ["same", ["characters", "Mario", "normal", "fiery", "running", "normal", "two"]],
                            running: {
                                skidding: "p[0,5,6,8]000x17,x09,22x17,33x06,2x17,333000x16,32233220011223223223222200023322322322220x26,3222123x26,3x25,11323222233332233113220333322223331x05,x25,x35,110003311133222331000333111x25,31000333133x25,3100x37,x25,0000x37,223211100x38,22111100x37,x17,00x36,x17,0000333x15,333x05,x15,x35,x06,x15,x38,0000111333322223x06,133x26,3x07,3221111x010,x17,003x07,111130033x07,11x37,x08,x37,x09,x36,x011,3333x012,3330000",
                                normal: {
                                    normal: "p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x08,33322x010,111133100020000333311331022200x36,113132220x37,113312220x37,113313230x36,111331330x36,11121323003333x19,000x25,x18,000x25,x18,0032222x19,0330222x17,x35,00013x16,x35,003113x15,x38,11133111x39,1111000x310,1x011,333x013,333x014,333x011,",
                                    two: "p[0,5,6,8]x039,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,30003333x17,311003333x15,3311100333311113111100033331110011110003333x05,333300033x07,33330003x08,x36,x010,x36,0",
                                    three: "p[0,5,6,8,10]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000044x25,x35,x05,33x28,x07,111122x09,31331133x07,313333113x07,3133331133x06,3133331113x06,31x35,223x06,3133332222x06,11333322221x05,11133322221100001111332221110000x16,331111x05,x15,33311x07,111x36,x07,11x36,x09,113333x010,3111333x09,3333033x08,x35,x011,x37,x011,x35,x05,"
                                }
                            },
                            paddling: {
                                normal: {
                                    normal: "p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",
                                    paddle1: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x05,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",
                                    paddle2: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",
                                    paddle3: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,"
                                },
                                swim2: {
                                    normal: "p[0,6,8,10]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",
                                    paddle1: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,",
                                    paddle2: "p[0,5,6,8]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x028,",
                                    paddle3: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,"
                                }
                            },
                            climbing: {
                                normal: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x19,30330000x17,x35,x05,x16,x35,x07,11113333x011,x35,x013,33x015,3x018,",
                                two: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,3x06,x110,033000x19,33330000x18,33330000x18,3333x05,x17,3333x064,"
                            }
                        },
                        shrooming: {
                            normal: "p[0,6,8,10]x0261,x25,x010,x29,x07,3331131x08,3131113111x06,31331113111x05,3311113333x08,x17,x08,332333x09,3332332333x05,33332222333300001132122123110000111x26,111000011x28,11x06,22200222x07,3330000333x05,33330000333300",
                            shrooming2: "p[0,6,8,10]x0134,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,33323333233300033332333323333011002122221200x15,0x28,0x16,x210,11101022220022220100022220000222200003333000033330000333300003333000x35,0000x35,0",
                            shrooming3: "p[0,6,8,10]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,"
                        }
                    },
                    star: {
                        normal: ["filter", ["characters", "Mario", "normal"], filters.star.one],
                        star2: ["filter", ["characters", "Mario", "normal"], filters.star.two],
                        star3: ["filter", ["characters", "Mario", "normal"], filters.star.three],
                        star4: ["filter", ["characters", "Mario", "normal"], filters.star.four]
                    }
                },
                Luigi: {
                    dead: "p[0,6,1,21]x05,x25,x07,11x27,1100111131311313x16,3313113133x15,33311113331100x35,113333x05,331333313x06,33x16,3x05,222211112220003332233332233003333223322333003333212212333003333x26,333000333x26,3300",
                    normal: {
                        normal: {
                            normal: "p[0,6,1,21]0000x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,3332333x08,333323323330000x35,2222333300011132122123110001111x26,111000111x28,11x05,222202222x06,333300033330000x35,000x35,00",
                            hopping: ["same", ["characters", "Luigi", "normal", "normal", "running", "normal", "two"]],
                            jumping: "p[0,6,1,21]x013,111x06,x26,0111x05,x29,11x05,33311311333000031311131133300003133111311130000331111x36,x06,x17,33000x35,2333233000x37,2333220311x36,x26,0311112232212212330113x210,3300333x29,330333x28,x05,330x25,x07,",
                            running: {
                                skidding: "p[0,6,1,21]x05,x26,x08,x28,33x07,131x37,0000x16,3113111001133113311311100033x16,3111x05,1123332222x05,3332231112220000x36,1113220000x36,112222x05,3333x26,x07,222233322x07,222x35,x09,2333223333x09,2x36,x010,x35,00",
                                normal: {
                                    normal: "p[0,6,1,21]x05,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x05,x35,2233x05,1113333222333x17,3332122233x15,0x28,0330000x210,33000x211,330033322200222233003333x013,3333x010,",
                                    two: "p[0,6,1,21]x020,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x08,333322333x07,3332212211x06,3333x26,x06,2331112222x07,23112222x09,2223333x09,x38,0000",
                                    three: "p[0,6,1,21]x021,x26,x09,x210,x06,33331131x07,33131113111x05,331331113111000033311113333x07,x18,x07,x35,2311x06,11x36,11100001112x35,11x05,333x27,x06,33x28,x05,333x27,x06,330003333x012,x35,x05,"
                                }
                            },
                            paddling: {
                                normal: {
                                    normal: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x06,33x27,x07,33x26,x08,332222x010,30033x014,3x027,",
                                    paddle1: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x05,33x28,x06,33x27,x07,33x25,x09,330333x013,33x026,",
                                    paddle2: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x05,33x25,33111000033x27,111000033x26,00110000330333x013,33x026,",
                                    paddle3: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x07,33x25,x09,330333x013,33x026,"
                                },
                                swim2: {
                                    normal: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,111x06,2x36,11x06,22233332x07,3x27,x07,33x26,x010,3322x011,333x013,33x028,",
                                    paddle1: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,32x35,1111x05,2x36,111x05,222333322x06,3x28,x06,33x27,x09,33222x010,3333x012,333x027,",
                                    paddle2: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3233322x09,2x36,x08,222333311x06,3x25,33111000033x27,111x06,3322220011x05,3333x012,333x027,",
                                    paddle3: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3332333x08,33332333x06,1333322333x05,1113322122x07,33x27,x09,332222x09,3333x012,333x027,"
                                }
                            },
                            climbing: {
                                normal: "p[0,6,1,21]0000x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x07,3323333x09,222x35,x08,222x36,11100002222x35,111100x26,3333111100x211,33300x211,330000x29,x08,x26,x06,",
                                two: "p[0,6,1,21]x05,x26,x09,x210,x06,33311311x07,31311131111x05,3133111311110000331111x35,x07,x18,x08,22x35,111x05,22x36,1111000222x36,1111000x25,122x08,x28,00033000x210,3330000x29,333x05,x28,333x016,"
                            }
                        },
                        large: {
                            normal: "p[0,6,1,21]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,",
                            jumping: "p[0,6,1,21]x012,111x012,11311x06,x25,113310000x27,x15,000x28,x35,000x211,33000333113111333300311311331111330031133x18,30031133111311113033x15,x37,0033331111333313000033x18,33x05,2222332333300x36,223233300x38,23323300x38,2232300033113333223320003111133222231000x15,32221222000x15,x28,0001011x29,003011x210,033000x29,33330003x28,x37,233x26,x37,222332222x37,x25,0022x37,x25,x08,3332222x09,33x014,3x015,",
                            hopping: ["same", ["characters", "Luigi", "normal", "large", "running", "normal", "two"]],
                            crouching: "p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000331113111311110033x15,x36,000223x15,x35,0033323x19,0033323331113323033332x38,23033332x37,22x36,21x35,22x37,x28,x39,x26,x38,1112222111333231111222211113221111x26,1111202113x06,311200033330000333300x36,0000x36,",
                            running: {
                                skidding: "p[0,6,1,21]000x27,x09,11x27,33x06,1x27,333000x26,31133110022113113113111100013311311311110x16,3111213x16,3x15,22313111133331133223110333311113332x05,x15,x35,220003322233111332000333222x15,32000333233x15,3200x37,x15,0000x37,113122200x38,11222200x37,x27,00x36,x27,0000333x25,333x05,x25,x35,x06,x25,x38,0000222333311113x06,233x16,3x07,3112222x010,x27,003x07,222230033x07,22x37,x08,x37,x09,x36,x011,3333x012,3330000",
                                normal: {
                                    normal: "p[0,6,1,21]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x08,33311x010,222233200010000333322332011100x36,223231110x37,223321110x37,223323130x36,222332330x36,22212313003333x29,000x15,x28,000x15,x28,0031111x29,0330111x27,x35,00023x26,x35,003223x25,x38,22233222x39,2222000x310,2x011,333x013,333x014,333x011,",
                                    two: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,30003333x27,322003333x25,3322200333322223222200033332220022220003333x05,333300033x07,33330003x08,x36,x010,x36,x017,",
                                    three: "p[0,6,1,21]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x05,33x18,x07,222211x09,32332233x07,323333223x07,3233332233x06,3233332223x06,32x35,113x06,3233331111x06,22333311112x05,22233311112200002222331112220000x26,332222x05,x25,33322x07,222x36,x07,22x36,x09,223333x010,3222333x09,3333033x08,x35,x011,x37,x011,x35,x05,"
                                }
                            },
                            paddling: {
                                normal: {
                                    normal: "p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",
                                    paddle1: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",
                                    paddle2: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,",
                                    paddle3: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x06,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x042,"
                                },
                                swim2: {
                                    normal: "p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",
                                    paddle1: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,",
                                    paddle2: "p[0,6,1,21]x022,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,2x07,322x36,2x06,3222x36,11x05,222x36,11100002222x35,1111000x26,3331111000x210,011000x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x028,",
                                    paddle3: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x08,x36,233x07,x36,223x06,x36,22233x05,x35,x25,3000011333222122200001113x28,0001111x29,000111x29,x07,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x027,"
                                }
                            },
                            climbing: {
                                normal: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x29,30330000x27,x35,x05,x26,x35,x07,22223333x011,x35,x013,33x015,3x018,",
                                two: "p[0,6,1,21]x023,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,x35,x06,3x18,x06,3222111x08,3233323x09,32333323x07,332x35,22110000322x37,1111003222x36,1111000222x37,1110002222x36,111000x26,3332x06,x210,x06,x29,3x06,x210,033000x29,33330000x28,33330000x28,3333x05,x27,3333x064,"
                            }
                        },
                        fiery: {
                            normal: "p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x07,1x25,3x09,31333313x07,3313333133x05,3331333313330003333133331333300333113333113330333311333311x38,x18,x38,1211112133332222x18,x28,x18,22220222x18,2220022x110,22000x112,000x16,00x16,00x15,0000x15,00x15,0000x15,000333300003333000033330000333300x36,0000x312,0000x36,",
                            jumping: "p[0,5,6,8]x012,222x012,22322x06,x15,223320000x17,x25,000x18,x35,000x111,33000333223222333300322322332222330032233x28,30032233222322223033x25,x37,0033332222333323000033x28,33x05,1111331333300x36,113133300x38,13313300x38,1131300033223333113310003222233111132000x25,31112111000x25,x18,0002222x19,003022x110,033000x19,33330003x18,x37,133x16,x37,111331111x37,x15,0011x37,x15,x08,3331111x09,33x014,3x015,",
                            hopping: ["same", ["characters", "Luigi", "normal", "fiery", "running", "normal", "three"]],
                            crouching: "p[0,5,6,8]x07,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000332223222322220033x25,x36,000113x25,x35,0033313x29,0033313332223313033331x38,13033331x37,11x36,12x35,11x37,x18,x39,x16,x38,2221111222333132222111122223112222x16,2222101223x06,322100033330000333300x36,0000x36,",
                            firing: ["same", ["characters", "Luigi", "normal", "fiery", "running", "normal", "two"]],
                            running: {
                                skidding: "p[0,5,6,8]000x17,x09,22x17,33x06,2x17,333000x16,32233220011223223223222200023322322322220x26,3222123x26,3x25,11323222233332233113220333322223331x05,x25,x35,110003311133222331000333111x25,31000333133x25,3100x37,x25,0000x37,223211100x38,22111100x37,x17,00x36,x17,0000333x15,333x05,x15,x35,x06,x15,x38,0000111333322223x06,133x26,3x07,3221111x010,x17,003x07,111130033x07,11x37,x08,x37,x09,x36,x011,3333x012,3330000",
                                normal: {
                                    normal: "p[0,5,6,8]x06,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000333x25,x35,x05,33x28,x08,33322x010,111133100020000333311331022200x36,113132220x37,113312220x37,113313230x36,111331330x36,11121323003333x19,000x25,x18,000x25,x18,0032222x19,0330222x17,x35,00013x16,x35,003113x15,x38,11133111x39,1111000x310,1x011,333x013,333x014,333x011,",
                                    two: "p[0,5,6,8]x039,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,30003333x17,311003333x15,3311100333311113111100033331110011110003333x05,333300033x07,33330003x08,x36,x010,x36,0",
                                    three: "p[0,5,6,8,10]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000044x25,x35,x05,33x28,x07,111122x09,31331133x07,313333113x07,3133331133x06,3133331113x06,31x35,223x06,3133332222x06,11333322221x05,11133322221100001111332221110000x16,331111x05,x15,33311x07,111x36,x07,11x36,x09,113333x010,3111333x09,3333033x08,x35,x011,x37,x011,x35,x05,"
                                }
                            },
                            paddling: {
                                normal: {
                                    normal: "p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x05,33x28,00003333x27,x05,3333x25,x07,33332223x08,3333033x09,3300033x09,300003x058,",
                                    paddle1: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x05,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",
                                    paddle2: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,",
                                    paddle3: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x06,33x18,00003333x17,x05,3333x15,x07,33331113x08,3333033x09,3300033x09,300003x042,"
                                },
                                swim2: {
                                    normal: "p[0,6,1,21]x07,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000033x15,331111x05,3113331111x05,322x35,11x05,322x36,1x06,32x36,x08,32x35,23x07,323333223x08,223322233x07,x28,3x07,x25,1222x06,x210,x06,x210,x06,x210,x06,x29,x07,x28,x08,3x25,x09,333222x010,x35,x011,3333x012,333x014,33x043,",
                                    paddle1: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,",
                                    paddle2: "p[0,5,6,8]x022,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,1x07,311x36,1x06,3111x36,22x05,111x36,22200001111x35,2222000x16,3332222000x110,022000x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x028,",
                                    paddle3: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x08,x36,133x07,x36,113x06,x36,11133x05,x35,x15,3000022333111211100002223x18,0002222x19,000222x19,x07,x19,x07,x18,x08,3x15,x09,333111x010,x35,x011,3333x012,333x014,33x027,"
                                }
                            },
                            climbing: {
                                normal: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,332222x05,3223332222x05,311x35,22x05,311x36,2x06,31x36,x08,31x35,13x07,313333113x08,113311133x07,x18,3x07,x15,2111x06,x110,x06,x110,x06,x110,x06,x19,x07,x19,30330000x17,x35,x05,x16,x35,x07,11113333x011,x35,x013,33x015,3x018,",
                                two: "p[0,5,6,8]x023,x15,x09,x16,2x08,x16,22x08,x111,x05,333223222x06,322322332222000032233x28,00332233222322220033x25,x36,000033x25,x35,x06,3x28,x06,3111222x08,3133313x09,31333313x07,331x35,11220000311x37,2222003111x36,2222000111x37,2220001111x36,222000x16,3331x06,x110,x06,x19,3x06,x110,033000x19,33330000x18,33330000x18,3333x05,x17,3333x064,"
                            }
                        },
                        shrooming: {
                            normal: "p[0,6,1,21]x0261,x25,x010,x29,x07,3331131x08,3131113111x06,31331113111x05,3311113333x08,x17,x08,332333x09,3332332333x05,33332222333300001132122123110000111x26,111000011x28,11x06,22200222x07,3330000333x05,33330000333300",
                            shrooming2: "p[0,6,1,21]x0134,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,33323333233300033332333323333011002122221200x15,0x28,0x16,x210,11101022220022220100022220000222200003333000033330000333300003333000x35,0000x35,0",
                            shrooming3: "p[0,6,1,21]x06,x25,x09,x26,1x08,x26,11x08,x211,x05,333113111x06,311311331111000031133x18,00331133111311110033x15,x36,000333x15,x35,x05,33x18,x07,2x15,3x09,32333323x07,3323333233x05,3332333323330003333233332333300333223333223330333322333322x38,x28,x38,2122221233331111x28,x18,x28,11110111x28,1110011x210,11000x212,000x26,00x26,00x25,0000x25,00x25,0000x25,000333300003333000033330000333300x36,0000x312,0000x36,"
                        }
                    },
                    star: {
                        normal: ["filter", ["characters", "Luigi", "normal"], filters.star.one],
                        star2: ["filter", ["characters", "Luigi", "normal"], filters.star.two],
                        star3: ["filter", ["characters", "Luigi", "normal"], filters.star.three],
                        star4: ["filter", ["characters", "Luigi", "normal"], filters.star.four]
                    }
                },
                Mushroom: {
                    normal: "p[0,1,6,8]x06,2222x011,332222x09,33332222x07,x35,x25,x05,22333x27,000x29,3332200x28,x35,202233x25,x35,222333x25,x35,22233x27,333x219,02333x16,3332x05,x18,x08,12x16,x08,12x16,x09,121111x05,",
                    gainlife: "p[0,1,6,14]x06,2222x011,332222x09,33332222x07,x35,x25,x05,22333x27,000x29,3332200x28,x35,202233x25,x35,222333x25,x35,22233x27,333x219,02333x16,3332x05,x18,x08,12x16,x08,12x16,x09,121111x05,",
                    deathly: "p[0,5,9,16]x06,2222x011,332222x09,33332222x07,x35,x25,x05,22333x27,000x29,3332200x28,x35,202233x25,x35,222333x25,x35,22233x27,333x219,02333x16,3332x05,x18,x08,12x16,x08,12x16,x09,121111x05,"
                },
                Pirhana: {
                    normal: {
                        normal: "p[0,6,14]x022,2002x011,210012x09,22200222x08,12200221x07,2221001222x06,2222002222x05,1212200221210000x25,00x25,0000222120021222000021222002221200002222100122220000212220022212x05,2212002122x06,2222002222x07,12100121x010,2002x06,11x05,11x05,11121100011000112101211001100112100112110110112110001121011012110000111211112111x05,x110,000",
                        two: "p[0,1,6,14]x034,3x010,30003211x06,112300331x08,1330023311000011332033321x06,12333233331100113333233233100001332x37,x06,x36,23333100133332x35,23100132333302x35,00x35,20033233300333233000333320023333x05,32x36,23x08,323323x05,22x05,22x05,22232200022000223202322002200223200223220220223220002232022023220000222322223222x05,x210,000"
                    },
                    Underworld: {
                        normal: "p[0,9,16]x022,2002x011,210012x09,22200222x08,12200221x07,2221001222x06,2222002222x05,1212200221210000x25,00x25,0000222120021222000021222002221200002222100122220000212220022212x05,2212002122x06,2222002222x07,12100121x010,2002x06,11x05,11x05,11121100011000112101211001100112100112110110112110001121011012110000111211112111x05,x110,000",
                        two: "p[0,5,9,16]x034,3x010,30003211x06,112300331x08,1330023311000011332033321x06,12333233331100113333233233100001332x37,x06,x36,23333100133332x35,23100132333302x35,00x35,20033233300333233000333320023333x05,32x36,23x08,323323x05,22x05,22x05,22232200022000223202322002200223200223220220223220002232022023220000222322223222x05,x210,000"
                    },
                    Castle: ["same", ["characters", "Pirhana", "Underworld"]]
                },
                Podoboo: "p[0,1,6,8]0000x36,x07,x38,x05,3332222333000333x26,33300332221122233033322111122x35,22x16,22333322x16,22333322x16,223333222111122233332222112222x35,232222323330x35,22x35,00x35,22x35,0003303333033x05,30033003000",
                Shell: {
                    normal: {
                        normal: {
                            normal: "p[0,1,6,14]x05,233332x09,33222233x07,3323333233x06,32x36,23x05,32x38,230000232x36,2320002333233332333200x35,2222x35,01113323333233x17,2x36,2111100011x36,11x07,11333311x09,x16,x011,1111x06,",
                            peeking: "p[0,1,6,14]x05,233332x09,33222233x07,3323333233x06,32x36,23x05,32x38,230000232x36,2320002333233332333200x35,2222x35,01113323333233x17,2x36,2111100211x36,11200022211333311222002220x16,02220022000111100022002x012,20"
                        },
                        smart: ["filter", ["characters", "Shell", "normal", "normal"], filters.smart]
                    },
                    Underworld: {
                        normal: "p[0,5,9,16]x05,233332x09,33222233x07,3323333233x06,32x36,23x05,32x38,230000232x36,2320002333233332333200x35,2222x35,01113323333233x17,2x36,2111100011x36,11x07,11333311x09,x16,x011,1111x06,",
                        peeking: "p[0,5,6,9,16]x05,344443x09,44333344x07,4434444344x06,43x46,34x05,43x48,340000343x46,3430003444344443444300x45,3333x45,01114434444344x17,3x46,3111100211x46,11200022211444411222002220x16,02220022000111100022002x012,20"
                    },
                    Castle: ["same", ["characters", "Shell", "normal", "normal"]]
                },
                ShellBeetle: {
                    normal: "p[0,2,5,9]x06,1111x010,x18,x07,1111331111x05,1111322311110000x15,33x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x35,x16,x35,000033311333x010,3333x06,",
                    Underworld: "p[0,15,16,18]x06,1111x010,x18,x07,1111221111x05,1111233211110000x15,22x15,0000x112,000x114,00x114,00x114,00x114,00x114,00x114,00x114,0x25,x16,x25,000022211222x010,2222x06,",
                    Castle: "p[0,1,3,4]x06,3333x010,x38,x07,3333223333x05,3333211233330000x35,22x35,0000x312,000x314,00x314,00x314,00x314,00x314,00x314,0x25,x36,x25,000022233222x010,2222x06,"
                },
                Spiny: {
                    normal: "p[0,1,6,8]x024,1x015,1x014,122x08,10000122000010001200122220012000122012222012200012223222312220001122x35,1222003322331123322301113331122233330033133x25,x36,133133222333111333321x35,111x05,222x16,2220002222x06,2222",
                    two: "p[0,1,6,8]x08,1x015,1x014,122x08,10000122000010001200122220012000122012222012200012223222312220001122x35,1222003322331123322301113331122233330033133x25,x36,133133222333111333321x35,111x05,222x16,22x06,222000222x08,22000220000"
                },
                SpinyEgg: {
                    normal: "p[0,1,6,8]x06,22x09,22322322x06,2x36,2x05,x310,00022311x35,22002311x37,200331x39,022x310,2222x310,220x39,133002x37,11320022x35,11322000x310,x05,2x36,2x06,22322322x09,22x06,",
                    two: "p[0,1,6,8]0000220022x08,233332x05,22x38,2200233311x35,20003311x36,0022331x37,2222x310,220x312,00x312,022x310,2222x37,1332200x36,11330002x35,1133320022x38,22x05,233332x08,2200220000"
                },
                Star: {
                    normal: "p[0,6,8]x06,11x012,11x011,1111x010,1111x09,x16,0000x119,2112x15,01111211211110001112112111x05,x18,x06,x18,x05,x110,0000x110,00001111001111000111x06,1110011x08,110",
                    two: "p[0,2,9]x06,22x012,22x011,2222x010,2222x09,x26,0000x219,1221x25,02222122122220002221221222x05,x28,x06,x28,x05,x210,0000x210,00002222002222000222x06,2220022x08,220",
                    three: "p[0,5,8]x06,22x012,22x011,2222x010,2222x09,x26,0000x219,1221x25,02222122122220002221221222x05,x28,x06,x28,x05,x210,0000x210,00002222002222000222x06,2220022x08,220",
                    four: "p[0,6,14]x06,11x012,11x011,1111x010,1111x09,x16,0000x119,2112x15,01111211211110001112112111x05,x18,x06,x18,x05,x110,0000x110,00001111001111000111x06,1110011x08,110"
                },
                Vine: ["multiple", "vertical", {
                    top: "p[0,6,14]00222x010,x25,x08,2211122x07,x25,12x09,222022x012,22x012,22x012,22x012,22x012,220022x08,2202222x07,2221112x07,x26,12x06,220x25,",
                    middle: "p[0,6,14]x06,22x012,22x012,22x08,220022x07,2222022x07,2111222x06,21x26,x06,x25,022x012,22x012,22x012,22x012,220022x08,2202222x07,2221112x07,x26,12x06,220x25,"
                }]
            },
            solids: {
                Axe: {
                    normal: "p[0,2,4,6,9]003x010,3000323300420033130032333322333313032x35,42x35,1332x35,42x35,1332x35,42x35,1332x35,42x35,1332x35,42x35,130323333423333130002330042000313000300002200003x09,42x014,22x014,42x014,22x014,42x07,",
                    two: "p[0,2,4,9]003x010,3000323300320033130032333322333313032x36,2x35,1332x36,2x35,1332x36,2x35,1332x36,2x35,1332x36,2x35,13032x35,23333130002330032000313000300002200003x09,32x014,22x014,32x014,22x014,32x07,",
                    three: "p[0,2,4,9,11]004x010,4000424400320044140042444422444414042x45,32x45,1442x45,32x45,1442x45,32x45,1442x45,32x45,1442x45,32x45,140424444324444140002440032000414000400002200004x09,32x014,22x014,32x014,22x014,32x07,"
                },
                Block: {
                    normal: {
                        normal: "p[0,2,9]0x114,01x214,1121x210,1211x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,1121x210,1211x214,10x114,0",
                        unused: {
                            normal: "p[0,2,6,9]0x314,03x214,1321x210,12132222x35,x25,132223311133222213222331223312221322233122331222132222112333122213x26,3311122213x26,331x25,13x27,11x25,13x26,33x26,13x26,331x25,1321x25,112221213x214,x117,",
                            two: "p[0,2,9]0x214,0x215,1221x210,121x215,1x26,111x26,1x26,1222212221x26,1222212221x25,11222212221x29,1112221x29,1x25,1x28,11x25,1x215,1x29,1x25,1221x25,11222121x215,x117,",
                            three: "p[0,2,9,11]0x214,02x314,1231x310,13123333x25,x35,123332211122333312333221332213331233322133221333123333113222133312x36,2211133312x36,221x35,12x37,11x35,12x36,22x36,12x36,221x35,1231x35,113331312x314,x117,"
                        }
                    },
                    Underworld: {
                        normal: "p[0,9,16]0x214,02x114,2212x110,2122x114,22x114,22x114,22x114,22x114,22x114,22x114,22x114,22x114,22x114,2212x110,2122x114,20x214,0",
                        unused: {
                            normal: "p[0,6,9,16]0x214,02x114,3213x110,31321111x25,x15,321112233322111132111223112231113211122311223111321111331222311132x16,2233311132x16,223x15,32x17,33x15,32x16,22x16,32x16,223x15,3213x15,331113132x114,x317,",
                            two: "p[0,9,16]0x114,0x115,2112x110,212x115,2x16,222x16,2x16,2111121112x16,2111121112x15,22111121112x19,2221112x19,2x15,2x18,22x15,2x115,2x19,2x15,2112x15,22111212x115,x217,",
                            three: "p[0,9,11,16]0x114,01x214,3123x210,32312222x15,x25,312221133311222231222113221132223122211322113222312222332111322231x26,1133322231x26,113x25,31x27,33x25,31x26,11x26,31x26,113x25,3123x25,332223231x214,x317,"
                        }
                    },
                    Castle: ["same", ["solids", "Block", "Underworld"]]
                },
                Brick: {
                    normal: {
                        normal: "p[2,5,9]x116,x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,x27,0x27,0x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,",
                        used: ["same", ["solids", "Block", "Overworld", "used"]]
                    },
                    Underworld: {
                        normal: "p[2,16]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,",
                        used: ["same", ["solids", "Block", "Overworld", "used"]]
                    },
                    Castle: ["filter", ["solids", "Brick", "Overworld"], filters.Castle],
                    Alt2: ["filter", ["solids", "Brick", "Overworld"], filters.Alt2]
                },
                BridgeBase: "p[0,2,5,8]111000112221012222x35,222x35,222x35,222x35,22221012211100011",
                Cannon: ["multiple", "vertical", {
                    top: "p[0,2,5,9]222x010,2222111x210,11222x110,x26,1x213,111x210,112x112,2112x112,2112x112,2112x15,22221112112111121111311211211121122113121121112121131312112111212113131211211121133113221122212x16,3122221102x16,302110002x18,3x06,2x18,3x05,2x110,300002x110,3000211x38,1130021333222233313021133x26,3313021133232232331132113233223323113211323322332311321132332233231132113x28,3113211333233233311321133322223331132111x38,11132x114,3",
                    middle: "p[2,5,9]1x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,21x014,2"
                }],
                CastleAxe: "p[0,2,4,6,8]003x010,3000323300420033130032333322333313032x35,42x35,1332x35,42x35,1332x35,42x35,1332x35,42x35,1332x35,42x35,130323333423333130002330042000313000300002200003x09,42x014,22x014,42x014,22x014,42x07,",
                CastleBlock: "p[0,4,9]0x114,01x214,1121x210,1211x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,11x214,1121x210,1211x214,10x114,0",
                CastleBridge: "p[1,2,4,8]10001000100010001000100010001000122212223222322232223222322232223222322232223222322232221222122213331333133313331333133313331333",
                CastleChain: "p[0,1,3]x014,1x013,1x014,22x011,12x013,22x011,12x012,102x012,22x011,12x012,102x012,22x011,12x013,22x011,12x012,102x012,22x013,",
                CastleStone: {
                    normal: "p[1,2,3,4]0031x06,31000022310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,3102223331x37,13333x116,x06,31x06,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,31x37,1x37,x117,",
                    Underwater: "p[2,12,14,20]1103x16,03111122031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,0312220003x07,30000x316,x16,03x16,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,03x07,3x07,x317,"
                },
                Cloud: "p[0,1,2]000x210,x05,2x110,20002x112,2002x112,2002x112,202x114,22x15,2112x15,22x15,2112x15,22x15,2112x15,22x114,2212x110,2120211121111211120021111222211112002x112,2000211112211112x05,2222002222000",
                Coral: "p[0,7,8]0000100012x05,110001000120000121001000112000120110100012000020001010011211112000101001x26,100021100120000221000221112x06,2x05,22120001x05,1000012001x06,1011012001000100101001120122010001100012120022000021001122000020000211112x011,22212x06,",
                DeadGoomba: {
                    normal: "p[0,5,9,15]x06,2222x09,x210,000022333222233322022111133331111x218,000x110,x07,x18,x05,x35,0000x35,0",
                    Underworld: "p[0,15,16,18]x06,2222x09,x210,000022111222211122022333311113333x218,000x310,x07,x38,x05,x15,0000x15,0",
                    Castle: ["filter", ["solids", "DeadGoomba", "normal"], filters.Castle]
                },
                Firework: {
                    normal: "p[0,6,8]x070,2002x010,20222202x09,221122x09,22111122x08,22111122x09,221122x09,20222202x010,2002x070,",
                    n2: "p[0,1,6,8]x020,3x06,3x09,303303x09,x38,x06,303232232303x05,3321221233x06,3221111223x05,3332111123330000333211112333x05,3221111223x06,3321221233x05,303232232303x06,x38,x09,303303x09,3x06,3x020,",
                    n3: "p[0,1,6,8]00030033330030000300x38,003000x35,22x35,00303323233232330300323x26,32300033321211212333033232x16,232x35,22x16,22x36,22x16,22x35,232x16,23233033321211212333000323x26,32300303323233232330300x35,22x35,000300x38,00300003003333003000"
                },
                Flag: {
                    normal: "p[0,1,14]x116,0x18,x25,1100x16,22121221000x15,211211210000111121222121x05,11122212221x06,11x27,1x07,111222111x08,x18,x09,x17,x010,x16,x011,x15,x012,1111x013,111x014,11x015,1",
                    Alt: "p[0,5,16]x116,0x18,x25,1100x16,22121221000x15,211211210000111121222121x05,11122212221x06,11x27,1x07,111222111x08,x18,x09,x17,x010,x16,x011,x15,x012,1111x013,111x014,11x015,1",
                    Alt2: ["same", ["solids", "Flag", "Alt"]]
                },
                FlagPole: {
                    normal: "p[13]x0288,",
                    Alt: "p[1]x0288,",
                    Alt2: ["same", ["solids", "FlagPole", "Alt"]]
                },
                FlagTop: {
                    normal: "p[0,2,13,14]001111000123331012x35,112x35,11x36,11x36,10133331000111100",
                    Alt: "p[0,1,3,4]002222000213332021x35,221x35,22x36,22x36,20233332000222200",
                    Alt2: ["same", ["solids", "Flag", "Alt"]]
                },
                Floor: {
                    normal: "p[2,5,9]2x18,02111121x28,01222201x28,01222201x28,01222201x28,01022201x28,02000021x28,0x15,01x28,01222201x28,01222201x28,012222000x26,01x25,01100222201x25,0121100001x26,0122211101x26,01x26,01x25,002x06,21x06,2",
                    Underworld: "p[2,16,18]1x28,01222212x18,02111102x18,02111102x18,02111102x18,02011102x18,01000012x18,0x25,02x18,02111102x18,02111102x18,021111000x16,02x15,02200111102x15,0212200002x16,0211122202x16,02x16,02x15,001x06,12x06,1",
                    Underwater: "p[2,12,14]22x112,0221111x29,0011122111222211100122x15,2212221202112222011x25,0211222201x26,021x26,0x25,0221x26,0022201201x26,0000101011112222000100101222122220012011x25,02200122011x25,0200012001x25,001111220012220000122220022x06,2x07,2",
                    Castle: ["same", ["solids", "Stone", "Castle"]],
                    Alt2: ["filter", ["solids", "Floor", "Overworld"], filters.Alt2]
                },
                Peach: "p[0,1,2,6,8]x019,303303x010,x36,x09,x48,x07,x410,x07,4443234444x07,433233434x06,x37,434x07,x38,44x05,3444x35,44x05,34433334444x06,x36,4444x06,4413341444x05,44133111144x05,431111331440000x39,144x05,x37,1444x07,44111144x07,x110,x05,x112,0000x112,0001111x46,111100x414,00x45,1111x45,0",
                Pipe: {
                    normal: ["multiple", "vertical", {
                        top: "p[0,2,13,14]x133,x230,11x35,x26,x319,1122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,232322x133,00x128,00",
                        middle: "p[0,2,13,14]00122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,2322100"
                    }],
                    Castle: {
                        normal: ["multiple", "vertical", {
                            top: "p[0,1,3,4]x333,x130,33x25,x16,x219,3311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,1212113311122x16,211x211,121113311122x16,211x210,121211x333,00x328,00",
                            middle: "p[0,1,3,4]00311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,121130000311122x15,211x28,1211130000311122x15,211x29,1211300"
                        }],
                        Underwater: ["multiple", "vertical", {
                            top: "p[0,5,9,17]x133,x230,11x35,x26,x319,1122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,2323221122233x26,322x311,232221122233x26,322x310,232322x133,00x128,00",
                            middle: "p[5,9,17,20]33011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,121103333011122x15,211x28,1211103333011122x15,211x29,1211033"
                        }]
                    },
                    Alt: ["same", ["solids", "Pipe", "Castle"]],
                    Alt2: ["same", ["solids", "Pipe", "Castle"]]
                },
                PipeSide: {
                    normal: "p[0,2,13,14]x115,x024,1x213,x122,0001x213,11x220,1001x213,11x220,1001x213,11x220,1001x313,11x221,101x313,11x321,101x213,11x321,101x213,11x221,101x213,11x221,101x213,11x222,11x213,11x222,11x313,11x222,11x213,11x322,11x213,11x222,11x213,11x222,11x213,11x322,11x313,11x322,11x313,11x322,11x313,11x322,11x313,11x322,11x313,11x322,11x313,11x321,101x313,11x321,101x313,11x321,101x313,11323232323232323232323101323232323232311232323232323232323232101232323232323211323232323232323232321001323232323232311x220,1001x213,11x220,1001x213,x122,000x115,x024,",
                    small: "p[0,2,13,14]x115,01x213,111x213,111x213,111x213,111x313,111x313,111x213,111x213,111x213,111x213,111x213,111x313,111x213,111x213,111x213,111x213,111x313,111x313,111x313,111x313,111x313,111x313,111x313,111x313,111x313,111323232323232311123232323232321113232323232323111x213,111x213,x117,0"
                },
                PipeVertical: {
                    normal: "p[0,2,13,14]012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210012232x310,223x25,332222100122232x39,223x25,33222210",
                    Castle: {
                        normal: "p[0,1,3,4]00211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,131120000211133x15,311x38,1311120000211133x15,311x39,1311200",
                        Underwater: "p[0,7,8,17]00122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,232210000122233x25,322x38,2322210000122233x25,322x39,2322100"
                    }
                },
                Platform: {
                    normal: "p[0,1,6,9]x18,x38,220000222x05,322x05,32223333x210,x38,",
                    Sky: "p[0,1,6]001111000x15,2012x15,212x15,212211112112211220111122000222200"
                },
                Scale: {
                    normal: ["multiple", "horizontal", {
                        left: "p[0,2,5,9]000x27,00x28,0222333000022x35,00223331333022331113302233313330220x35,00220033300022x08,",
                        middle: "p[0,5]x120,x080,",
                        right: "p[0,2,5,9]x27,000x28,x05,333222000x35,22003331333220331113322033313332200x35,0220003330022x08,22"
                    }],
                    Alt: ["multiple", "horizontal", {
                        left: "p[0,1,2,9]000x17,00x18,0111333000011x35,00113332333011332223301133323330110x35,00110033300011x08,",
                        middle: "p[0,1]x120,x080,",
                        right: "p[0,1,2,9]x17,000x18,x05,333111000x35,11003332333110332223311033323331100x35,0110003330011x08,11"
                    }]
                },
                Springboard: {
                    normal: ["multiple", "vertical", {
                        top: "p[8]x032,",
                        topheight: 2,
                        middle: "p[0,1,6]x05,110011x010,210012x010,200002x010,200002x09,2x06,2x08,2x06,2x08,2x06,2x07,2x08,2x05,12x08,21000011x08,11000011x08,11000012x08,21x05,2x08,2x07,2x06,2x08,2x06,2x08,2x06,2x09,200002x010,200002x010,210012x010,110011x05,",
                        bottom: "p[2,8,9]x132,x27,0x27,0x27,0x27,x017,2220x27,0x27,0x27,0x27,0x27,02222x016,",
                        bottomheight: 9
                    }],
                    alt: ["multiple", "vertical", {
                        top: "p[8]x032,",
                        topheight: 2,
                        middle: "p[0,1,6]x05,110011x010,210012x010,200002x010,200002x09,2x06,2x08,2x06,2x08,2x06,2x07,2x08,2x05,12x08,21000011x08,11000011x08,11000012x08,21x05,2x08,2x07,2x06,2x08,2x06,2x08,2x06,2x09,200002x010,200002x010,210012x010,110011x05,",
                        bottom: "p[3,4,8]x232,x07,1x07,1x07,1x07,x117,0001x07,1x07,1x07,1x07,1x07,10000x116,",
                        bottomheight: 9
                    }]
                },
                Stone: {
                    normal: "p[2,5,9]2x114,012x112,00112x110,0001112x18,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,00001111x28,0000111x09,200011x011,2001x013,2x016,2",
                    Underwater: ["same", ["solids", "Floor", "Underwater"]],
                    Underworld: ["filter", ["solids", "Stone", "Overworld"], filters.Underworld],
                    Castle: {
                        normal: "p[1,2,3,4]0031x06,31000022310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,3102223331x37,13333x116,x06,31x06,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,310x25,31x37,1x37,x117,",
                        Underwater: "p[2,3,14,20]1103x16,03111122031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,0312220003x07,30000x316,x16,03x16,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,031x25,03x07,3x07,x317,"
                    },
                    Sky: "p[0,1,2]000x210,x05,2x110,20002x112,2002x112,2002x112,202x114,22x15,2112x15,22x15,2112x15,22x15,2112x15,22x114,2212x110,2120211121111211120021111222211112002x112,2000211112211112x05,2222002222000"
                },
                Toad: "p[0,1,2,6,8]x06,1111x010,x18,x06,144411114441000114441441444110011441444414411044111144441111x45,1114444111x46,1111441111x46,x110,x45,1133233233114401143323323341100300x38,00303330333223330x37,443333443333003x410,300004444333344440000444x36,4440000444x36,444x05,x110,x05,x112,000444x18,444041444x16,4441x47,1111x412,1111x46,",
                ShroomTop: ["multiple", "horizontal", {
                    left: "p[0,2,6,8]000x113,001x36,x27,01x37,x27,01x37,x27,1x38,x27,1x37,x28,1x37,222333221x36,222x35,21x35,222x37,1x28,x37,1x28,x37,1x29,x35,21x210,333221x215,011x213,000x113,",
                    middle: "p[2,6,8]x016,1x28,x18,x28,x19,x26,x132,x25,x110,x27,x19,x27,x18,x29,x17,x29,x17,x29,x17,x29,x18,x27,x19,x27,x110,x25,111x016,",
                    right: "p[0,2,6,8]x113,000x38,x25,100x38,x26,10x38,x26,10x38,222333212x36,222x35,1223333222x36,1x29,x36,1x29,x36,1x210,x35,1x211,33321x215,1x215,1x215,1x214,x117,0"
                }],
                TreeTop: {
                    normal: ["multiple", "horizontal", {
                        left: "p[0,2,13]00x114,011x213,01x214,11x214,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x26,1x27,1012222101x25,10001111000x15,00",
                        middle: "p[2,8,13]x016,x2199,0x27,00x25,010x25,011x05,111x05,11",
                        right: "p[0,2,13]x114,00x213,110x214,10x214,11x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,1x215,11x27,1x26,101x25,10122221000x15,000111100"
                    }],
                    Alt: ["multiple", "horizontal", {
                        left: "p[0,1,4]00x214,022x113,02x114,22x114,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x16,2x17,2021111202x15,20002222000x25,00",
                        middle: "p[1,3,4]x216,x0199,2x07,22x05,212x05,211x25,111x25,11",
                        right: "p[0,1,4]x213,000x113,200x114,20x114,20x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,2x115,22x17,2x16,202x15,20211112000x25,000222200"
                    }],
                    Alt2: ["same", ["solids", "TreeTop", "Alt"]]
                },
                WaterBlock: "20"
            },
            scenery: {
                BrickHalf: {
                    normal: "p[2,9]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,",
                    Alt2: ["filter", ["scenery", "BrickHalf", "normal"], filters.Alt2]
                },
                BrickPlain: {
                    normal: "p[2,9]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x17,0x17,0",
                    Alt2: ["filter", ["scenery", "BrickPlain", "normal"], filters.Alt2]
                },
                BridgeBase: "p[0,2,5,9]111000112221012222x35,222x35,222x35,222x35,22221012211100011",
                Bush1: "p[0,2,13,14]x014,1111x027,122221x024,11x26,1x022,1x28,101x020,1x29,121x019,1x26,3x25,1x017,122233222322221x016,12223x210,1x013,111x216,1001x08,1x219,10121x06,1x221,1221x06,x225,1010011x226,1211x230,11x230,101x228,10",
                Bush2: "p[0,2,13,14]x014,1111x012,1111x027,122221x010,122221x024,11x26,1x07,11x26,1x022,1x28,10100001x28,101x020,1x29,1210001x29,121x019,1x26,3x25,1001x26,3x25,1x017,1222332223222210122233222322221x016,12223x210,112223x210,1x013,111x232,1001x08,1x235,10121x06,1x237,1221x06,x241,1010011x242,1211x246,11x246,101x244,10",
                Bush3: "p[0,2,13,14]x014,1111x012,1111x012,1111x027,122221x010,122221x010,122221x024,11x26,1x07,11x26,1x07,11x26,1x022,1x28,10100001x28,10100001x28,101x020,1x29,1210001x29,1210001x29,121x019,1x26,3x25,1001x26,3x25,1001x26,3x25,1x017,12223322232222101222332223222210122233222322221x016,12223x210,112223x210,112223x210,1x013,111x248,1001x08,1x251,10121x06,1x253,1221x06,x257,1010011x258,1211x262,11x262,101x260,10",
                CastleBridge: "p[1,2,4,9]10001000100010001000100010001000122212223222322232223222322232223222322232223222322232221222122213331333133313331333133313331333",
                CastleChain: "p[0,1,3]x014,1x013,1x014,22x011,12x013,22x011,12x012,102x012,22x011,12x012,102x012,22x011,12x013,22x011,12x012,102x012,22x013,",
                CastleDoor: {
                    normal: "p[2,9]x17,0x17,0x17,0x17,0x17,0x17,x017,1110x17,0x17,0x17,0x17,0x17,01111x016,x15,x06,11110111x010,11011x012,1x017,1x014,11x014,1x0416,",
                    Alt2: ["filter", ["scenery", "CastleDoor", "normal"], filters.Alt2]
                },
                CastleRailing: {
                    normal: "p[0,2,5,9]2222x07,x25,3332x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,23333111x29,1111",
                    Alt2: ["filter", ["scenery", "CastleRailing", "normal"], filters.Alt2]
                },
                CastleRailingFilled: {
                    normal: "p[2,5,9]11112220222x15,222122202221x27,122202221x27,1x07,1x27,1x27,1x27,1x27,1x27,1x27,12222000x19,0000",
                    Alt2: ["filter", ["scenery", "CastleRailingFilled", "normal"], filters.Alt2]
                },
                CastleTop: {
                    normal: "p[2,9]x17,0x17,0x17,0x17,0x17,0x17,0x17,0x17,0x17,x025,1110x17,0x17,0x17,0x17,0x17,0x17,0x17,0x17,01111x024,x17,x09,x17,0x17,x09,x17,0x17,x09,x17,x025,11101111x08,1110x17,01111x08,1110x17,01111x08,11101111x024,x17,x09,x17,0x17,x09,x17,0x17,x09,x17,x025,11101111x08,1110x17,01111x08,1110x17,01111x08,11101111x024,",
                    Alt2: ["filter", ["scenery", "CastleTop", "normal"], filters.Alt2]
                },
                CastleWall: {
                    normal: "p[0,2,5,9]2222x07,x25,3332x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,2x37,2x07,23333111x29,1111x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,x37,1x37,1x37,1x37,1x37,1x37,x117,3331x37,1x37,1x37,1x37,1x37,13333x116,",
                    Alt2: ["filter", ["scenery", "CastleRailingFilled", "normal"], filters.Alt2]
                },
                Cloud1: {
                    normal: "p[0,1,2,19]x014,2222x027,211112x024,22x16,2x022,2x18,202x020,2x19,212x019,2x16,3x15,2x017,211133111311112x016,21113x110,2x013,222x116,2002x08,2x119,20212x06,2x121,2112x06,x125,2020022x126,2122x130,22x130,202x128,20002113x111,3x111,2x05,2113113x16,3x113,2x05,2113333111333311113x18,200002x15,x36,1x35,x19,x06,2221111331111333x18,22x09,2x16,2x18,21122x012,221112022111122022x016,22200002222x010,",
                    Alt2: ["filter", ["scenery", "Cloud1", "normal"], filters.Alt2]
                },
                Cloud2: {
                    normal: "p[0,1,2,19]x014,2222x012,2222x027,211112x010,211112x024,22x16,2x07,22x16,2x022,2x18,20200002x18,202x020,2x19,2120002x19,212x019,2x16,3x15,2002x16,3x15,2x017,2111331113111120211133111311112x016,21113x110,221113x110,2x013,222x132,2002x08,2x135,20212x06,2x137,2112x06,x141,2020022x142,2122x146,22x146,202x144,20002113x111,3x115,3x111,2x05,2113113x16,3x18,3x16,3x113,2x05,21133331113333111131333111333311113x18,200002x15,x36,1x35,1111x36,1x35,x19,x06,2221111331111333x17,331111333x18,22x09,2x16,2x18,2x16,2x18,21122x012,2211120221111220221112022111122022x016,22200002222x05,22200002222x010,",
                    Alt2: ["filter", ["scenery", "Cloud2", "normal"], filters.Alt2]
                },
                Cloud3: {
                    normal: "p[0,1,2,19]x014,2222x012,2222x012,2222x027,211112x010,211112x010,211112x024,22x16,2x07,22x16,2x07,22x16,2x022,2x18,20200002x18,20200002x18,202x020,2x19,2120002x19,2120002x19,212x019,2x16,3x15,2002x16,3x15,2002x16,3x15,2x017,21113311131111202111331113111120211133111311112x016,21113x110,221113x110,221113x110,2x013,222x148,2002x08,2x151,20212x06,2x153,2112x06,x157,2020022x158,2122x162,22x162,202x160,20002113x111,3x115,3x115,3x111,2x05,2113113x16,3x18,3x16,3x18,3x16,3x113,2x05,211333311133331111313331113333111131333111333311113x18,200002x15,x36,1x35,1111x36,1x35,1111x36,1x35,x19,x06,2221111331111333x17,331111333x17,331111333x18,22x09,2x16,2x18,2x16,2x18,2x16,2x18,21122x012,22111202211112202211120221111220221112022111122022x016,22200002222x05,22200002222x05,22200002222x010,",
                    Alt2: ["filter", ["scenery", "Cloud3", "normal"], filters.Alt2]
                },
                Fence: "p[0,2,5,9]000023222331x08,2322333100003322232233312222333323223331333311112322333x15,000023223331x08,23223331x08,23232331x08,23232331x08,2323233100003322232323312222333323232331333311112322233x15,000023222331x08,23222331x08,232223310000",
                HillLarge: "p[0,2,14]x037,x16,x071,111x26,111x066,11x212,11x063,1x213,1221x061,1x213,111221x059,1x214,1112221x057,1x215,11122221x055,1x213,112111x25,1x053,1x214,11221x27,1x051,1x215,11x211,1x049,1x216,11x212,1x047,1x232,1x045,1x234,1x043,1x236,1x041,1x238,1x039,1x240,1x037,1x242,1x035,1x244,1x033,1x246,1x031,1x213,1x223,1x210,1x029,1x213,111x221,111x210,1x027,1x214,111x221,111x211,1x025,1x215,111x221,111x212,1x023,1x213,112111x218,112111x213,1x021,1x214,11221x219,11221x215,1x019,1x215,11x222,11x219,1x017,1x216,11x222,11x220,1x015,1x264,1x013,1x266,1x011,1x268,1x09,1x270,1x07,1x272,1x05,1x274,10001x276,101x278,1",
                HillSmall: "p[0,2,14]x021,x16,x039,111x26,111x034,11x212,11x031,1x213,1221x029,1x213,111221x027,1x214,1112221x025,1x215,11122221x023,1x213,112111x25,1x021,1x214,11221x27,1x019,1x215,11x211,1x017,1x216,11x212,1x015,1x232,1x013,1x234,1x011,1x236,1x09,1x238,1x07,1x240,1x05,1x242,10001x244,101x246,1",
                Pirhana: ["same", ["characters", "Pirhana"]],
                pirhana: ["same", ["characters", "Pirhana"]],
                PlantLarge: {
                    normal: "p[0,2,5,13]x06,1111x010,11333311x07,1x38,1x05,1x310,10001x312,1001x312,101x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,11x314,101x312,1001x312,1001x312,10001x310,1000011x38,11x05,1113333111x07,x18,x09,x17,x08,1x26,1x08,12222121x08,12222121x08,12222121x08,12222121x08,11222211x09,121121x09,12122121x08,1x26,1x08,12222121x08,12222121x08,12222121x08,12222121x08,11222211x09,121121x09,121221210000",
                    Alt: "p[0,1,2,3,5]x06,3333x010,33111133x07,3x18,3x05,3x110,30003x112,3003x112,303x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,33x114,303x112,3003x112,3003x112,30003x110,3000033x18,33x05,3331111333x07,x38,x09,x37,x08,2x46,2x08,24444242x08,24444242x08,24444242x08,24444242x08,22444422x09,242242x09,24244242x08,2x46,2x08,24444242x08,24444242x08,24444242x08,24444242x08,22444422x09,242242x09,242442420000",
                    Alt2: ["same", ["solids", "PlantLarge", "Alt"]]
                },
                PlantSmall: {
                    normal: "p[0,2,5,13]x05,1111x08,11333311x05,1x38,10001x310,101x312,11x312,11x312,11x312,11x312,101x310,10011x38,110001113333111x05,x18,x07,x17,x06,1x26,1x06,12222121x06,12222121x06,12222121x06,12222121x06,11222211x07,121121x07,12122121x06,1x26,1x06,12222121x06,12222121x06,12222121x06,12222121x06,11222211x07,121121x07,12122121000",
                    Alt: "p[0,1,2,3,5]x05,3333x08,33111133x05,3x18,30003x110,303x112,33x112,33x112,33x112,33x112,303x110,30033x18,330003331111333x05,x38,x07,x37,x06,2x46,2x06,24444242x06,24444242x06,24444242x06,24444242x06,22444422x07,242242x07,24244242x06,2x46,2x06,24444242x06,24444242x06,24444242x06,24444242x06,22444422x07,242242x07,24244242000",
                    Alt2: ["same", ["solids", "PlantSmall", "Alt"]]
                },
                Railing: {
                    normal: "p[0,2,13]2x06,221x05,12010001220100012200111022x06,22x06,22x06,2",
                    Night: "p[0,1,3]1x06,112x05,21020002110200021100222011x06,11x06,11x06,1"
                },
                ShroomTrunk: ["multiple", "vertical", {
                    top: "p[2,5,9]0x114,00x114,00x114,00x114,00x114,00111121111211110021121211212112001221112211122100x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,0",
                    middle: "p[2,5]0x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,00x114,0"
                }],
                String: "x056,",
                TreeTrunk: {
                    normal: "p[2,9]x120,0x17,0x17,0x17,0x17,0x17,0x16,0x17,0x17,0x17,0x17,0x17,0x140,0x17,0x17,0x17,0x17,0x17,0x16,0x17,0x17,0x17,0x17,0x17,0x120,",
                    Underworld: ["filter", ["scenery", "TreeTrunk", "normal"], filters.Underworld],
                    Alt2: ["filter", ["scenery", "TreeTrunk", "normal"], filters.Alt2]
                },
                Water: {
                    normal: "p[0,1,17]x028,1x06,121000012210011222100x26,1121x26,1212222122122112",
                    Underwater: "p[1,17,20]x212,0x26,010222201102200111022x16,0010x16,010111101101100x19,",
                    Night: "p[2,1,19]x028,1x06,121000012210011222100x26,1121x26,1212222122122112",
                    Castle: {
                        normal: "p[0,1,8]x028,1x06,121000012210011222100x26,1121x26,1212222122122112",
                        Underwater: "p[1,17,20]x212,0x26,010222201102200111022x16,0010x16,010111101101100x19,"
                    }
                },
                WaterFill: {
                    normal: {
                        normal: "p[17]x088,",
                        Night: "p[19]x088,"
                    },
                    Castle: "p[8]x088,"
                }
            }
        },
        cache: {},
        posts: []
    }, library.filters = filters, delete window.filters, library.sprites = libraryParse(library.rawsprites), libraryPosts()
}

function libraryParse(e) {
    var t, n, x = {};
    for (n in e) switch ((t = e[n]).constructor) {
        case String:
            x[n] = spriteGetArray(spriteExpand(spriteUnravel(t)));
            break;
        case Array:
            library.posts.push({
                caller: x,
                name: n,
                command: e[n]
            });
            break;
        case Object:
            x[n] = libraryParse(t)
    }
    return x
}

function libraryPosts() {
    var e, t, n, x, r, i = library.posts;
    for (r in i) t = (e = i[r]).caller, n = e.name, x = e.command, t[n] = evaluatePost(t, x, r)
}

function evaluatePost(e, t, n) {
    switch (t[0]) {
        case "same":
            return followPath(library.sprites, t[1], 0);
        case "filter":
            return applyLibraryFilter(followPath(library.rawsprites, t[1], 0), t[2], n);
        case "multiple":
            return evaluatePostMultiple(t)
    }
}

function applyLibraryFilter(e, t) {
    switch (t[0]) {
        case "palette":
            return e.constructor == String ? spriteGetArray(spriteExpand(applyPaletteFilter(spriteUnravel(e), t[1]))) : applyPaletteFilterRecursive(e, t[1])
    }
}

function applyPaletteFilterRecursive(e, t) {
    var n, x, r = {};
    for (x in e) switch ((n = e[x]).constructor) {
        case String:
            r[x] = spriteGetArray(spriteExpand(applyPaletteFilter(spriteUnravel(n), t)));
            break;
        case Object:
            r[x] = applyPaletteFilterRecursive(n, t)
    }
    return r
}

function applyPaletteFilter(e, t) {
    var n, x, r, i = "";
    for (x = 0, r = e.length; x < r; x += digitsize) i += t[n = e.substr(x, digitsize)] || n;
    return i
}

function evaluatePostMultiple(e) {
    var t, n, x = e[1],
        r = e[2],
        i = new SpriteMultiple(x);
    for (n in r) t = r[n], i[n] = "string" == typeof t ? spriteGetArray(spriteExpand(spriteUnravel(t))) : t;
    return i
}

function SpriteMultiple(e) {
    this.type = e, this.multiple = !0
}

function getDigitSize(e) {
    return Number(String(e.length).length)
}

function startLoadingMaps() {
    "file:" != window.location.protocol && passivelyLoadMap([1, 2], new XMLHttpRequest)
}

function passivelyLoadMap(e, t) {
    if (!(!e || e[0] > 8 || e[1] <= 0)) {
        var n = "Maps/World" + e[0] + e[1] + ".js";
        t.open("GET", n, !0), mlog("Maps", "Requesting:", n), t.send(), t.onreadystatechange = function() {
            if (4 == t.readyState) {
                if (200 == t.status) mapfuncs[e[0]][e[1]] = Function(t.responseText), window.parentwindow && parentwindow.onMapLoad && (parentwindow.onMapLoad(e[0], e[1]), setTimeout((function() {
                    parentwindow.onMapLoad(e[0], e[1])
                }), 2100)), mlog("Maps", " Loaded: Maps/World" + e[0] + e[1] + ".js");
                else if (404 != t.status) return;
                setTimeout((function() {
                    passivelyLoadMap(setNextLevelArr(e), t)
                }), 7)
            }
        }
    }
}

function setNextLevelArr(e) {
    return 4 == e[1]++ && (++e[0], e[1] = 1), e
}

function resetMaps() {
    var e;
    window.currentmap = [1, 1], window.defaultsetting = {
        setting: "Overworld"
    }, window.mapfuncs = new Array(9);
    for (var t, n = 1; n <= 9; ++n)
        for (t = (e = mapfuncs[n] = [0, 0, 0, 0, 0]).length; t >= 0; --t) e[t] = window["World" + n + t];
    mapfuncs.Random = {
        Overworld: WorldRandomOverworld,
        Underworld: WorldRandomUnderworld,
        Underwater: WorldRandomUnderwater,
        Bridge: WorldRandomBridge,
        Sky: WorldRandomSky,
        Castle: WorldRandomCastle
    }, mapfuncs.Special = {
        Blank: BlankMap
    }, startLoadingMaps()
}

function Map() {
    this.underwater = this.current_character = this.current_solid = this.current_scenery = this.xloc = 0, this.canscroll = !0, this.floor = 104, this.time = 400, this.curloc = -1, this.gravity = gravity, this.maxyvel = 1.75 * unitsize, this.maxyvelinv = -2.1 * this.maxyvel
}

function Area(e, t) {
    this.creation = t || function() {}, this.precharacters = [], this.presolids = [], this.prescenery = [], this.floor = 140, this.width = 0, this.underwater = !1, setAreaSetting(this, e || "")
}

function setAreaSetting(e, t, n) {
    map.shifting = !0, 1 == arguments.length && (t = arguments[0] || "Overworld", e = map.area), e.setting = e.background = t, e.theme = t.split(" ")[0], e.fillStyle = getAreaFillStyle(e.setting), -1 != e.fillStyle.indexOf("Underwater") ? goUnderWater() : goOntoLand(), n && AudioPlayer.playTheme(), gameon && clearAllSprites(), map.shifting = !1
}

function Location(e, t, n) {
    this.area = e, this.xloc = n || 0, this.yloc = this.floor = 0, this.entry = 1 == t ? entryPlain : t || entryNormal
}

function PreThing(e, t, n) {
    this.xloc = e, this.yloc = t, this.type = n;
    var x = arrayMake(arguments),
        r = new Thing;
    x[2] = n, x = x.splice(2), Thing.apply(r, x), this.object = r
}

function setMap(e, t) {
    if (gameon) {
        !window.canedit && window.editing && editorClose(!0), removeRandomDisplays(), e instanceof Array && (t = e[1], e = e[0]);
        var n = e ? [e, t] : window.currentmap,
            x = new Map,
            r = mapfuncs[n[0]];
        r ? (n.func = r = r[n[1]], r ? (window.map = x, window.currentmap = n, r(x), x.areanum = x.curloc = 0, window.area = x.area = x.areas[0], window.player && player.power && storePlayerStats(), window.data && (data.scoreold = data.score.amount), shiftToLocation(0)) : log("No such map exists (yet?):", r)) : log("No such map section exists (yet?):", r)
    }
}

function setMapRandom(e) {
    gameon && (resetSeed(), "string" == typeof e ? e = ["Random", e] : e || (e = ["Random", "Overworld"]), setMap(e[0], e[1]), data.traveledold = data.traveled, map.sincechange = map.num_random_sections = 0, map.entrancetype = e[2], map.random = !0, "Sky" == map.randname && (map.exitloc = ["Random", "Overworld", "Down"]))
}

function shiftToLocation(e) {
    if (map.random && "number" != typeof e) return setMapRandom(e);
    "number" == typeof e && (e = map.locs[e]), pause(), resetGameState(), resetGameScreenPosition(), resetQuadrants(), map.areanum = e.area, window.area = map.area = map.areas[map.areanum], setAreaPreCreation(area), area.creation(), setAreaPostCreation(area), spawnMap(), player = placePlayer(), scrollPlayer(e.xloc * unitsize), locMovePreparations(player), unpause(), e.entry(player, e.entrything), TimeHandler.addEvent(AudioPlayer.playTheme, 2), TimeHandler.addEventInterval(checkTexts, 117, 1 / 0)
}

function setAreaPreCreation(e) {
    window.events = [], TimeHandler.clearAllEvents(), window.characters = [], window.solids = [], window.scenery = [], clearTexts(), e.precharacters = [], e.presolids = [], e.prescenery = [], map.current_solid = map.current_character = map.current_scenery = map.shifting = 0, map.canscroll = !0, data.time.amount = map.time, data.world.amount = currentmap[0] + "-" + currentmap[1], setDataDisplay(), startDataTime(), map.random && (data.world.amount = "Random Map", data.world.element.innerHTML = "WORLD<br>Random Map")
}

function clearTexts() {
    if (window.texts)
        for (var e = texts.length - 1; e >= 0; --e) texts[e] && removeChildSafe(texts[e], body);
    window.texts = []
}

function setAreaPostCreation() {
    if (map.current_character = map.current_solid = map.current_scenery = 0, area.width = max(area.width, gamescreen.width), map.underwater = map.area.underwater, map.jumpmod = 1.056 + 3.5 * map.underwater, map.has_lakitu = !1, TimeHandler.addEvent(setMapGravity, 1), area.underwater && (area.presolids.push(new PreThing(0, 0, WaterBlock, area.width)), map.random || area.presolids.push(new PreThing(0, 16, Sprite, "Water", [area.width / 3, 1]))), area.presolids.sort(prethingsorter), area.precharacters.sort(prethingsorter), area.prescenery.sort(prethingsorter), area.sections && area.sections[0]) setBStretch(), area.sections.current = 0, area.sections[0](area.sections.start);
    else if (!map.random && "Sky" != area.setting) {
        var e = new PreThing(area.width, 0, ScrollBlocker);
        area.presolids.push(e)
    }
    area.fillStyle = getAreaFillStyle(area.setting)
}

function getAreaFillStyle(e) {
    return stringHas(e, "Underworld") || stringHas(e, "Castle") || stringHas(e, "Night") ? stringHas(e, "Underwater") ? "#2038ec" : "black" : stringHas(e, "Underwater") ? "#2038ec" : "#5c94fc"
}

function prethingsorter(e, t) {
    return e.xloc == t.xloc ? t.yloc - e.yloc : e.xloc - t.xloc
}

function setLocationGeneration(e) {
    map.curloc = e, map.refx = map.locs[map.curloc].xloc, map.refy = map.locs[map.curloc].yloc + map.floor, map.areanum = map.locs[map.curloc].area
}

function spawnMap() {
    var e, t, n, x, r, i = map.area,
        a = QuadsKeeper.getOutDifference(),
        o = gamescreen.right + a,
        l = o + (2 * QuadsKeeper.getQuadWidth() + a);
    for (t = (e = i.precharacters).length, r = map.current_character; t > r && o >= (n = e[r]).xloc * unitsize;) addThing(x = n.object, n.xloc * unitsize - gamescreen.left, n.yloc * unitsize), x.placenum = r, ++r;
    for (map.current_character = r, t = (e = i.presolids).length, r = map.current_solid; t > r && l >= (n = e[r]).xloc * unitsize;) addThing(x = n.object, n.xloc * unitsize - gamescreen.left, n.yloc * unitsize), x.placenum = r, ++r;
    for (map.current_solid = r, t = (e = i.prescenery).length, r = map.current_scenery; t > r && l >= (n = e[r]).xloc * unitsize;) addThing(x = n.object, n.xloc * unitsize - gamescreen.left, n.yloc * unitsize), x.placenum = r, ++r;
    map.current_scenery = r
}

function goToTransport(e) {
    e instanceof Array ? (map.ending = !0, storePlayerStats(), pause(), map.random ? setMapRandom(e) : setMap(e)) : shiftToLocation(map.locs[e]), is_mobile && applyNewJs()
}

function entryPlain(e) {
    setLeft(e, unitsizet16), setBottom(e, map.floor * unitsize), e.nocollide = e.piping = !1, e.placed = !0
}

function entryNormal(e) {
    setLeft(e, unitsizet16), setTop(e, unitsizet16), e.nocollide = e.piping = !1, e.placed = !0
}

function entryBlank(e) {
    setLeft(e, unitsizet16), setBottom(e, map.floor * unitsize), e.nocollide = e.piping = e.movement = !1, e.placed = e.nofall = e.nocollide = notime = nokeys = !0, thingStoreVelocity(e), clearDataDisplay()
}

function entryRandom(e) {
    switch (data.time.amount = 0, data.time.dir = 1, updateDataElement(data.time), map.startwidth ? map.nofloor || pushPreFloor(0, 0, map.startwidth) : map.startwidth = 0, map.firstRandomThings(map), map.randtype(8 * (map.startwidth + 1)), entryPlain(e), addDistanceCounter(), addSeedDisplay(), map.entrancetype) {
        case "Down":
            entryNormal(player);
            break;
        case "Up":
            locMovePreparations(player), exitPipeVert(player, addThing(new Thing(Pipe, 32), unitsizet8, (map.floor - 32) * unitsize));
            break;
        case "Vine":
            locMovePreparations(player), TimeHandler.addEvent((function() {
                enterCloudWorld(player, !0)
            }), 1), player.nofall = !0, spawnMap();
            break;
        case "Castle":
            startCastle(player)
    }
}

function enterCloudWorld(e) {
    map.random && (map.exitloc = getAfterSkyTransport());
    var t = 140 * unitsize,
        n = 72 * unitsize;
    e.placed = e.nofall = !0, setTop(e, t), setLeft(e, 30 * unitsize), removeClass(e, "jumping"), addClasses(e, ["climbing", "animated"]), e.climbing = TimeHandler.addSpriteCycle(e, ["one", "two"], "climbing"), e.attached = new Thing(Vine, -1), addThing(e.attached, unitsizet32, t - unitsizet8);
    var x = setInterval((function() {
        if (e.attached.top <= n) {
            clearInterval(x), setTop(e.attached, n, !0), e.attached.movement = !1;
            var t = e.attached.top + unitsizet16;
            x = setInterval((function() {
                shiftVert(e, -1 * unitsized4, !0), e.top <= t && (removeClass(e, "animated"), clearInterval(x), setTop(e, t, !0), clearInterval(x), setTimeout((function() {
                    setLeft(e, 36 * unitsize, !0), addClass(e, "flipped"), setTimeout((function() {
                        playerHopsOff(e, e.attached, !0), TimeHandler.clearClassCycle(e, "climbing"), e.running = TimeHandler.addSpriteCycle(e, ["one", "two", "three", "two"], "running", setPlayerRunningCycler)
                    }), 28 * timer)
                }), 14 * timer))
            }), timer)
        }
    }), timer)
}

function walkToPipe() {
    player = placePlayer(), startWalking(player), map.canscroll = !1;
    var e = setInterval((function() {
        player.piping && (AudioPlayer.pauseTheme(), clearInterval(e), player.maxspeed = player.maxspeedsave)
    }), timer);
    unpause()
}

function startWalking(e) {
    e.movement = movePlayer, e.maxspeed = e.walkspeed, nokeys = notime = e.keys.run = !0, e.nofall = e.nocollide = !1
}

function intoPipeVert(e, t, n) {
    if (!(!t.transport || !e.resting || e.right + unitsizet2 > t.right || e.left - unitsizet2 < t.left)) {
        pipePreparations(e), switchContainers(e, characters, scenery), unpause();
        var x = setInterval((function() {
            shiftVert(e, unitsized4, !0), e.top >= t.top && (clearInterval(x), setTimeout((function() {
                goToTransport(n)
            }), 700))
        }), timer)
    }
}

function intoPipeHoriz(e, t, n) {
    pipePreparations(e), switchContainers(e, characters, scenery), unpause();
    var x = setInterval((function() {
        shiftHoriz(e, unitsized4, !0), e.left >= t.left && (clearInterval(x), setTimeout((function() {
            goToTransport(n)
        }), 700))
    }), timer)
}

function pipePreparations(e) {
    AudioPlayer.pauseTheme(), AudioPlayer.play("Pipe"), locMovePreparations(e), e.nofall = e.nocollide = nokeys = notime = !0, e.movement = e.xvel = e.yvel = 0
}

function locMovePreparations(e) {
    e.keys = new Keys, e.nocollide = e.piping = 1, e.placed = !1, removeCrouch(), removeClass(e, "running"), removeClass(e, "jumping"), removeClass(e, "flipped")
}

function startCastle(e) {
    (e = e || window.player) && (setBottom(e, 56 * unitsize), setLeft(e, unitsizet2), e.nocollide = e.piping = !1, e.placed = !0)
}

function exitPipeVert(e, t) {
    switchContainers(e, characters, scenery), e.nofall = nokeys = notime = !0, AudioPlayer.play("Pipe"), setTop(e, t.top), setMidXObj(e, t, !0);
    var n = unitsize / -4,
        x = setInterval((function() {
            shiftVert(e, n, !0), e.bottom <= t.top && (switchContainers(e, scenery, characters), clearInterval(x), e.nocollide = e.piping = e.nofall = nokeys = notime = !1, e.placed = !0)
        }), timer)
}

function endLevel() {
    map.ending || (map.ending = !0, map.random ? setMapRandom(["Random", "Castle"]) : setNextLevelArr(currentmap), storePlayerStats(), pause(), setMap())
}

function setExitLoc(e) {
    map.exitloc = e
}

function pushPreThing(e, t, n, x, r) {
    var i = new PreThing(map.refx + t, map.refy - n, e, x, r),
        a = i.object;
    return !a.solid && !a.character || a.nostretch || (map.area.width = max(map.area.width, i.xloc + a.width)), a.solid && !a.spawn_as_char ? map.area.presolids.push(i) : map.area.precharacters.push(i), i
}

function pushPreScenery(e, t, n, x, r) {
    x = round(x || 1), r = round(r || 1);
    var i = new PreThing(map.refx + t, map.refy - n, Sprite, e, [x, r]);
    return i.yloc -= i.object.height, map.area.prescenery.push(i), i
}

function pushPreScenerySolid(e, t, n, x, r) {
    x = x || 1, r = r || 1;
    var i = new PreThing(map.refx + t, map.refy - n, Sprite, e, [x, r]);
    return i.yloc -= i.object.height, map.area.presolids.push(i), i
}

function pushPreText(e, t, n) {
    var x = new PreThing(map.refx + t, map.refy - n, FuncSpawner, spawnText, e);
    return map.area.presolids.push(x), x
}

function fillPreThing(e, t, n, x, r, i, a, o, l) {
    for (var s, d, u = t, p = 0; p < x; ++p) {
        for (s = n, d = 0; d < r; ++d) pushPreThing(e, u, s, o, l), s += a;
        u += i
    }
}

function pushPreFloor(e, t, n) {
    pushPreThing(Floor, e, t || 0, n || 1, DtB(t, 8))
}

function makeCeiling(e, t) {
    t = t || 1;
    for (var n = 0; n < t; ++n) pushPreThing(Brick, e + 8 * n, ceillev)
}

function makeCeilingCastle(e, t, n) {
    pushPreThing(Stone, e, ceillev, t || 1, n || 1)
}

function pushPreBridge(e, t, n, x) {
    pushPreScenery("Railing", e, t, 2 * n), pushPreThing(BridgeBase, e, t, n), x instanceof Array && (x[0] && pushPreThing(Stone, e - 8, t, 1, 64), x[1] && pushPreThing(Stone, e + 8 * n, t, 1, 64))
}

function fillPreWater(e, t, n) {
    var x = DtB(t),
        r = ceil(x / 5.5),
        i = 5 * r;
    pushPreScenery("Water", e, t - 5.5, 4 * n / 3), pushPreScenery("WaterFill", e, t - i - 15.5, 4 * n / 3, r + 2)
}

function pushPrePlatformGenerator(e, t, n) {
    pushPreThing(PlatformGenerator, e, ceilmax + 16, t, n)
}

function pushPreScale(e, t, n, x) {
    var r = x[0],
        i = 2 * r,
        a = x[1] + 1.5,
        o = x[2] + 1.5,
        l = pushPreThing(Scale, e, t, n).object;
    platleft = pushPreThing(Platform, e - i, t - 4 * a, r, moveFallingScale).object, platright = pushPreThing(Platform, e + 4 * n - r - 6, t - 4 * o, r, moveFallingScale).object, platleft.parent = l, platright.parent = l, platleft.partner = platright, platright.partner = platleft, platleft.tension = a * unitsizet4 - 10 * unitsize, platright.tension = o * unitsizet4 - 10 * unitsize, l.tensionleft = a * unitsize, l.tensionright = o * unitsize, platleft.string = pushPreScenery("String", e, t - 4 * a, 1, 4 * (a - .5)).object, platright.string = pushPreScenery("String", e + 4 * n - 1, t - 4 * o, 1, 4 * (o - .5)).object
}

function pushPreWarpWorld(e, t, n, x, r) {
    1 == n.length && (n = [-1, n[0], -1]);
    var i, a, o = (x || 0) + e + 10,
        l = n.length;
    warp = pushPreThing(WarpWorld, e, t + ceilmax).object;
    var s = pushPreText({
        innerText: "WELCOME TO WARP ZONE!",
        style: {
            visibility: "hidden"
        }
    }, o, 58);
    for (warp.texts.push(s.object), a = 0; a < l; ++a) - 1 != n[a] && (warp.pipes.push(i = pushPrePipe(o, t, 24, !0, n[a]).object), warp.pirhanas.push(i.pirhana), n[a] instanceof Array && warp.texts.push(pushPreText({
        innerText: n[a][0],
        style: {
            visibility: "hidden"
        }
    }, o + 4, 38).object)), o += 32;
    r && (window.block = pushPreThing(ScrollBlocker, e, ceilmax), pushPreThing(ScrollBlocker, o + 16, ceilmax))
}

function goUnderWater() {
    window.map && (map.area && (window.player && !map.shifting && setAreaSetting(String(map.area.setting || "") + " Underwater"), map.area.underwater = !0), setMapGravity(), TimeHandler.clearEvent(map.bubbling), map.bubbling = TimeHandler.addEventInterval(playerBubbles, 96, 1 / 0), map.underwater = !0)
}

function goOntoLand() {
    map && (map.area && (window.player && !map.shifting && setAreaSetting(map.area.setting.replace("Underwater", "") || "Overworld"), map.area.underwater = !1), setMapGravity(), TimeHandler.clearEvent(map.bubbling), map.underwater = !1)
}

function setMapGravity() {
    window.player && (map.underwater ? player.gravity = gravity / 2.8 : player.gravity = gravity)
}

function setBStretch() {
    window.bstretch = gamescreen.width / 8 - 2
}

function endCastleOutside(e, t, n, x, r) {
    e = e || 0, t = t || 0, n && (n = castlev), r = r || 20;
    var i = pushPreThing(FlagDetector, e + 7, t + 108).object,
        a = pushPreThing(CastleDoorDetector, e + 60 + 8 * (0 == castlev), 8).object;
    i.flag = pushPreThing(Flag, e + .5, t + 79.5).object, i.stone = pushPreThing(Stone, e + 4, t + 8).object, i.top = pushPreThing(FlagTop, e + 6.5, 84).object, i.pole = pushPreThing(FlagPole, e + 8, 80).object, x && pushPreScenery("CastleWall", e + r + 72, t, x), 0 == n && shiftHoriz(a, unitsizet8), pushPreCastle(e + r + 16, t, n)
}

function startCastleInside() {
    pushPreThing(Stone, 0, 88, 5, 3), pushPreThing(Stone, 0, 48, 3, DtB(48, 8)), pushPreThing(Stone, 24, 40, 1, DtB(40, 8)), pushPreThing(Stone, 32, 32, 1, DtB(32, 8))
}

function endCastleInside(e, t, n) {
    var x = pushPreThing(FuncCollider, e + 104, 48, CastleAxeFalls, [16, 24]).object.axe = pushPreThing(CastleAxe, e + 104, 40).object;
    x.bridge = pushPreThing(CastleBridge, e, 24, 13).object, x.chain = pushPreThing(CastleChain, e + 96.5, 32).object, x.bowser = pushPreThing(Bowser, e + 69, 42, n).object, pushPreThing(ScrollBlocker, e + 112, ceilmax), pushPreThing(Stone, e, 88, 32), fillPreWater(e, 0, 26), pushPreFloor(e + 104, 32, 3), pushPreFloor(e + 104, 0, 19), pushPreThing(Stone, e + 112, 80, 2, 3), pushPreThing(ScrollBlocker, e + 256, ceilmax), endCastleInsideFinal(e, t)
}

function endCastleInsideFinal(e, t) {
    var n = pushPreFuncCollider(e + 180, collideCastleNPC).object,
        x = {
            visibility: "hidden"
        };
    t ? (pushPreThing(Peach, e + 194, 13).object, n.text = [pushPreText({
        innerHTML: "<span class='span'>THANK YOU " + window.player.title.toUpperCase() + "!</span>",
        style: x
    }, e + 160, 66).object, pushPreText({
        innerHTML: "<span class='span'>YOUR QUEST IS OVER.<BR>WE PRESENT YOU A NEW QUEST.</span>",
        style: x
    }, e + 148, 50).object, pushPreText({
        innerHTML: "<span class='span'>PRESS BUTTON B<BR>TO SELECT A WORLD.</span>",
        style: x
    }, e + 148, 26).object]) : (pushPreThing(Toad, e + 194, 12).object, n.text = [pushPreText({
        innerHTML: "<span class='span'>THANK YOU " + window.player.title.toUpperCase() + "!</span>",
        style: x
    }, e + 160, 66).object, pushPreText({
        innerHTML: "<span class='span'>BUT OUR PRINCESS IS IN<BR>ANOTHER CASTLE!</span>",
        style: x
    }, e + 148, 50).object])
}

function pushPreSectionPass(e, t, n, x, r) {
    var i = pushPreThing(Collider, e, t, [n, x], [sectionPass, sectionColliderInit]).object,
        a = (r = map.area.sections.current || 0, map.area.sections[r]);
    a.numpass ? ++a.numpass : a.numpass = 1, a.colliders ? a.colliders.push(i) : a.colliders = [i]
}

function pushPreSectionFail(e, t, n, x, r) {
    var i = pushPreThing(Collider, e, t, [n, x], [sectionFail, sectionColliderInit]).object,
        a = (r = map.area.sections.current || 0, map.area.sections[r]);
    a.colliders ? a.colliders.push(i) : a.colliders = [i]
}

function pushCastleDecider(e, t) {
    pushPreThing(castleDecider, e, ceilmax, e, t)
}

function sectionColliderInit(e) {
    e.sections = map.area.sections, e.parent = e.sections[e.sections.current], e.movement = !1
}

function sectionPass(e, t) {
    if ("player" != e.type) return !1;
    t.nocollide = !0, --t.parent.numpass || activateSection(t.parent, !0)
}

function sectionFail(e, t) {
    if ("player" != e.type) return !1;
    t.nocollide = !0, activateSection(t.parent, !1)
}

function activateSection(e, t) {
    for (var n = e.colliders, x = n.length - 1; x >= 0; --x) killNormal(n[x]);
    e.activated = !0, e.passed = t
}

function pushPreTree(e, t, n) {
    pushPreThing(TreeTop, e, t, n);
    var x = DtB(t);
    pushPreScenerySolid("TreeTrunk", e + 8, t - x - 8, n - 2, x / 8)
}

function pushPreShroom(e, t, n) {
    pushPreThing(ShroomTop, e, t, n);
    var x = DtB(t - 4);
    pushPreScenery("ShroomTrunk", e + 4 * n - 4, t - x - 8, 1, x / 8)
}

function pushPrePipe(e, t, n, x, r, i) {
    isFinite(n) || (n = gamescreen.height, t -= gamescreen.height);
    var a = pushPreThing(Pipe, e, t + n, n / 8, r),
        o = a.object;
    return x && (o.pirhana = pushPreThing(Pirhana, e + 4, t + n + 12).object), i && (map.locs[i].entrything = o, map.locs[i].xloc = e), a
}

function pushPreCastle(e, t, n) {
    e = e || 0, t = t || 0, n ? pushPreCastleBig(e, t) : pushPreCastleSmall(e, t)
}

function pushPreCastleBig(e, t) {
    var n, x;
    for (pushPreCastleSmall(e + 16, t + 48), n = 0; n < 3; ++n)
        for (x = 0; x < 2; ++x) pushPreScenerySolid("BrickPlain", e + 16 + 16 * n, t + 24 + 8 * x);
    for (n = 0; n < 2; ++n) pushPreScenerySolid("CastleDoor", e + 24 + 16 * n, t + 24);
    for (n = 0; n < 5; ++n) {
        if (2 == n) continue;
        pushPreScenerySolid("BrickHalf", e + 16 + 8 * n, t + 48)
    }
    for (n = 0; n < 2; ++n) pushPreScenerySolid("CastleRailing", e + 8 * n, t + 44);
    for (n = 0; n < 5; ++n) pushPreScenerySolid("CastleRailingFilled", e + 16 + 8 * n, t + 44);
    for (n = 5; n < 7; ++n) pushPreScenerySolid("CastleRailing", e + 16 + 8 * n, t + 44);
    for (n = 0; n < 2; ++n)
        for (x = 0; x < 3; ++x) pushPreScenerySolid("BrickPlain", e + 24 + 16 * n, t + 8 * x);
    for (n = 0; n < 3; ++n) pushPreScenerySolid("CastleDoor", e + 16 + 16 * n, t);
    for (n = 0; n < 2; ++n) {
        for (x = 0; x < 5; ++x) pushPreScenerySolid("BrickPlain", e + 8 * n, t + 8 * x);
        pushPreScenerySolid("BrickHalf", e + 8 * n, t + 40)
    }
    for (n = 0; n < 2; ++n) {
        for (x = 0; x < 5; ++x) pushPreScenerySolid("BrickPlain", e + 56 + 8 * n, t + 8 * x);
        pushPreScenerySolid("BrickHalf", e + 56 + 8 * n, t + 40)
    }
    for (n = 0; n < 3; ++n)
        for (x = 0; x < 2; ++x) pushPreScenerySolid("BrickHalf", e + 16 + 16 * n, t + 20 + 20 * x)
}

function pushPreCastleSmall(e, t) {
    var n, x;
    for (n = 0; n < 3; ++n) pushPreScenerySolid("CastleRailing", e + 8 + 8 * n, t + 36);
    for (n = 0; n < 2; ++n) pushPreScenerySolid("CastleTop", e + 8 + 12 * n, t + 24);
    for (pushPreScenerySolid("CastleRailing", e, t + 20), n = 1; n <= 3; ++n) pushPreScenerySolid("CastleRailingFilled", e + 8 * n, t + 20);
    for (pushPreScenerySolid("CastleRailing", e + 32, t + 20), n = 0; n < 2; ++n)
        for (pushPreScenerySolid("BrickHalf", e + 8 * n, t), x = 0; x < 2; ++x) pushPreScenerySolid("BrickPlain", e + 8 * n, t + 4 + 8 * x);
    for (n = 0; n < 2; ++n)
        for (pushPreScenerySolid("BrickHalf", e + 24 + 8 * n, t), x = 0; x < 2; ++x) pushPreScenerySolid("BrickPlain", e + 24 + 8 * n, t + 4 + 8 * x);
    pushPreScenerySolid("CastleDoor", e + 16, t)
}

function pushPreFuncCollider(e, t) {
    return e instanceof Array ? (console.log("position", e), pushPreThing(FuncCollider, e[0], e[1], t, [e[2], e[3]])) : pushPreThing(FuncCollider, e, ceilmax + 40, t)
}

function pushPreFuncSpawner(e, t) {
    return pushPreThing(FuncSpawner, e, jumplev1, t)
}

function zoneEnableLakitu() {
    map.zone_lakitu = !0, enterLakitu()
}

function zoneDisableLakitu() {
    if (map.has_lakitu) {
        var e = map.has_lakitu;
        map.zone_lakitu = map.has_lakitu = !1, e.lookleft || (e.lookleft = !0, removeClass(e, "flipped")), e.movement = function(e) {
            e.xvel = max(e.xvel - unitsized32, -1 * unitsize)
        }
    }
}

function zoneStartCheeps(e) {
    pushPreFuncCollider(e, zoneEnableCheeps)
}

function zoneStopCheeps(e) {
    pushPreFuncCollider(e, zoneDisableCheeps)
}

function zoneEnableCheeps(e) {
    !map.zone_cheeps && e.player && startCheepSpawn()
}

function zoneDisableCheeps(e) {
    e.player && (map.zone_cheeps = !1)
}

function pushPrePattern(e, t, n, x) {
    var r, i, a, o = t,
        l = Scenery.patterns[e];
    for (i = 0; i < x; ++i) {
        for (a in l)(r = l[a]) instanceof Array && pushPreScenery(r[0], o + r[1], n + r[2], r[3], r[4]);
        o += l.width
    }
}

function DtB(e, t) {
    return (e + botmax) / (t || 1)
}

function BlankMap(e) {
    e.locs = [new Location(0, entryBlank)], e.areas = [new Area("Overworld", (function() {
        setTimeout(refillCanvas, timer + 2)
    }))]
}

function World11(e) {
    e.locs = [new Location(0, !0), new Location(0, exitPipeVert), new Location(1)], e.areas = [new Area("Overworld", (function() {
        setLocationGeneration(0);
        pushPreText("<div style='width:350px;max-height:189px;background-color:#d64d00;border-radius:7px;box-shadow:3px 3px #efb28b inset, -3px -3px black inset;background-image: url(\"Theme/Greeting.gif\"), url(\"Theme/Greeting.gif\"), url(\"Theme/Greeting.gif\"), url(\"Theme/Greeting.gif\");background-repeat: no-repeat;background-position: 7px 7px, 336px 7px, 7px 168px, 336px 168px'>  <p style='text-align:left;padding:7px 0 11px 11px;color:#ffcccc;font-family: Super Plumber Bros;font-size:77px;text-shadow:3px 8px black'>    <span style='font-size:84px'>super</span>    <br><br>    <span style='font-size:81px;line-height:96px'>MARIO BROS.</span>  </p></div><div id='boo' style='text-align:right;color:#ffcccc;margin-top:-7px;width:350px;height:35px;'>&copy;1985 NINTENDO</div><p id='explanation' style='text-align:center;\x3c!--/*text-shadow:2px 2px 1px black;*/--\x3emargin-left:7px;'>  Move: Arrows/WASD  <br>  Fire/Sprint: Shift/CTRL  <br>  Pause/Mute: P/M </p>", 20, 91), pushPrePattern("backreg", 0, 0, 5), pushPreFloor(0, 0, 69), pushPreThing(Block, 128, jumplev1), pushPreThing(Brick, 160, jumplev1), pushPreThing(Block, 168, jumplev1, Mushroom), pushPreThing(Goomba, 176, 8), pushPreThing(Brick, 176, jumplev1), pushPreThing(Block, 176, jumplev2), pushPreThing(Block, 184, jumplev1), pushPreThing(Brick, 192, jumplev1), pushPrePipe(224, 0, 16, !1), pushPrePipe(304, 0, 24), pushPrePipe(368, 0, 32), pushPreThing(Goomba, 340, 8), pushPrePipe(368, 0, 32), pushPreThing(Goomba, 412, 8), pushPreThing(Goomba, 422, 8), pushPrePipe(456, 0, 32, !1, 2), pushPreThing(Block, 512, 40, [Mushroom, 1], !0), pushPreFloor(568, 0, 15), pushPreThing(Brick, 618, jumplev1), pushPreThing(Block, 626, jumplev1, Mushroom), pushPreThing(Brick, 634, jumplev1), pushPreThing(Brick, 640, jumplev2), pushPreThing(Goomba, 640, jumplev2 + 8), pushPreThing(Brick, 648, jumplev2), pushPreThing(Brick, 656, jumplev2), pushPreThing(Goomba, 656, jumplev2 + 8), pushPreThing(Brick, 664, jumplev2), pushPreThing(Brick, 672, jumplev2), pushPreThing(Brick, 680, jumplev2), pushPreThing(Brick, 688, jumplev2), pushPreThing(Brick, 696, jumplev2), pushPreFloor(712, 0, 64), pushPreThing(Brick, 728, jumplev2), pushPreThing(Brick, 736, jumplev2), pushPreThing(Brick, 744, jumplev2), pushPreThing(Brick, 752, jumplev1, Coin), pushPreThing(Block, 752, jumplev2), pushPreThing(Goomba, 776, 8), pushPreThing(Goomba, 788, 8), pushPreThing(Brick, 800, jumplev1), pushPreThing(Brick, 808, jumplev1, Star), pushPreThing(Block, 848, jumplev1), pushPreThing(Koopa, 856, 12), pushPreThing(Block, 872, jumplev1), pushPreThing(Block, 872, jumplev2, Mushroom), pushPreThing(Block, 896, jumplev1), pushPreThing(Goomba, 912, 8), pushPreThing(Goomba, 924, 8), pushPreThing(Brick, 944, jumplev1), pushPreThing(Brick, 968, jumplev2), pushPreThing(Brick, 976, jumplev2), pushPreThing(Brick, 984, jumplev2), pushPreThing(Goomba, 992, 8), pushPreThing(Goomba, 1004, 8), pushPreThing(Goomba, 1024, 8), pushPreThing(Goomba, 1036, 8), pushPreThing(Brick, 1024, jumplev2), pushPreThing(Brick, 1032, jumplev1), pushPreThing(Block, 1032, jumplev2), pushPreThing(Brick, 1040, jumplev1), pushPreThing(Block, 1040, jumplev2), pushPreThing(Brick, 1048, jumplev2), pushPreThing(Stone, 1072, 8), pushPreThing(Stone, 1080, 16, 1, 2), pushPreThing(Stone, 1088, 24, 1, 3), pushPreThing(Stone, 1096, 32, 1, 4), pushPreThing(Stone, 1120, 32, 1, 4), pushPreThing(Stone, 1128, 24, 1, 3), pushPreThing(Stone, 1136, 16, 1, 2), pushPreThing(Stone, 1144, 8), pushPreThing(Stone, 1184, 8), pushPreThing(Stone, 1192, 16, 1, 2), pushPreThing(Stone, 1200, 24, 1, 3), pushPreThing(Stone, 1208, 32, 1, 4), pushPreThing(Stone, 1216, 32, 1, 4), pushPreFloor(1240, 0, 69), pushPreThing(Stone, 1240, 32, 1, 4), pushPreThing(Stone, 1248, 24, 1, 3), pushPreThing(Stone, 1256, 16, 1, 2), pushPreThing(Stone, 1264, 8, 1, 1), pushPrePipe(1304, 0, 16, !1, !1, 1), pushPreThing(Brick, 1344, jumplev1), pushPreThing(Brick, 1352, jumplev1), pushPreThing(Block, 1360, jumplev1), pushPreThing(Brick, 1368, jumplev1), pushPreThing(Goomba, 1392, 8), pushPreThing(Goomba, 1404, 8), pushPrePipe(1432, 0, 16), pushPreThing(Stone, 1448, 8), pushPreThing(Stone, 1456, 16, 1, 2), pushPreThing(Stone, 1464, 24, 1, 3), pushPreThing(Stone, 1472, 32, 1, 4), pushPreThing(Stone, 1480, 40, 1, 5), pushPreThing(Stone, 1488, 48, 1, 6), pushPreThing(Stone, 1496, 56, 1, 7), pushPreThing(Stone, 1504, 64, 2, 8), endCastleOutside(1580, 0, 1)
    })), new Area("Underworld", (function() {
        setLocationGeneration(2), makeCeiling(32, 7), pushPreFloor(0, 0, 17), fillPreThing(Brick, 0, 8, 1, 11, 8, 8), fillPreThing(Brick, 32, 8, 7, 3, 8, 8), fillPreThing(Coin, 33, 31, 7, 2, 8, 16), fillPreThing(Coin, 41, 63, 5, 1, 8, 8), pushPreThing(PipeSide, 104, 16, 1), pushPreThing(PipeVertical, 120, 88, 88)
    }))]
}

function randMapType(e) {
    e.locs = [new Location(0, entryRandom)], e.areas = [new Area(e.areatype, (function() {
        setLocationGeneration(0), "Underwater" == e.randname && (goUnderWater(), pushPreScenery("Water", 0, ceilmax - 21, 8 * (e.startwidth + 1) / 3, 1), pushPreThing(WaterBlock, 0, ceilmax, 8 * (e.startwidth + 1)))
    }))], e.treefunc = randTrue(3) ? pushPreTree : pushPreShroom, e.treeheight = e.treelev = e.sincechange = 0
}

function randDayNight() {
    return randTrue(3) ? "" : " Night"
}

function WorldRandomOverworld(e) {
    e.random = !0, e.randtype = pushRandomSectionOverworld, e.randname = "Overworld", e.areatype = "Overworld" + randDayNight(), e.firstRandomThings = function(e) {
        for (var t = 0; t < 10; ++t) randTrue() && pushRandomGroundScenery(8 * t)
    }, e.startwidth = 14, e.onlysmartkoopas = !1, randMapType(e)
}

function WorldRandomTrees(e) {
    e.random = !0, e.randtype = pushRandomSectionTrees, e.randname = "Overworld", e.areatype = "Overworld" + randDayNight(), e.firstRandomThings = function(e) {
        e.treefunc(100, 8 * (e.treelev = randTrue() + 2), randTrue() + 4), e.startwidth += 7
    }, e.startwidth = 11, e.onlysmartkoopas = randTrue(), randMapType(e)
}

function WorldRandomUnderworld(e) {
    e.random = !0, e.randtype = pushRandomSectionUnderworld, e.randname = e.areatype = "Underworld", e.firstRandomThings = function(e) {
        fillPreThing(Brick, 0, 8, 1, 11, 8, 8)
    }, e.startwidth = randTrue(3) + 7, e.onlysmartkoopas = !0, e.respawndist = 42, e.entrancetype = "Up", randMapType(e)
}

function WorldRandomUnderwater(e) {
    e.random = !0, e.randtype = pushRandomSectionUnderwater, e.randname = "Underwater", e.areatype = "Underwater" + randDayNight(), e.firstRandomThings = function(e) {}, e.startwidth = randTrue(3) + 7, e.entrancetype = "Up", e.countCheep = e.countBlooper = 0, e.respawndist = 42, e.onlysmartkoopas = !0, randMapType(e)
}

function WorldRandomBridge(e) {
    e.random = !0, e.randtype = startRandomSectionBridge, e.randname = "Overworld", e.areatype = "Overworld" + randDayNight(), e.firstRandomThings = function(e) {}, e.startwidth = 14, randMapType(e)
}

function WorldRandomSky(e) {
    e.random = !0, e.randtype = startRandomSectionSky, e.randname = "Sky", e.areatype = "Sky" + randDayNight(), e.entrancetype = "Vine", e.firstRandomThings = function(e) {
        pushPreThing(Stone, 0, 0, 4)
    }, e.startwidth = 4, e.nofloor = !0, randMapType(e)
}

function WorldRandomCastle(e) {
    e.random = !0, e.randtype = startRandomSectionCastle, e.randname = e.areatype = e.entrancetype = "Castle", e.firstRandomThings = function(e) {
        startCastleInside(), startCastle()
    }, e.respawndist = 35, randMapType(e)
}

function FullScreenMario() {
    var e = Date.now();
    ensureLocalStorage(), TonedJS(!0), window.body = document.body, window.bodystyle = body.style, window.verbosity = {
        Maps: !1,
        Sounds: !1
    }, window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        setTimeout(e, timer)
    }, window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.Uint8ClampedArray = window.Uint8ClampedArray || window.Uint8Array || Array, resetMeasurements(), resetLibrary(), resetEvents(), resetCanvas(), resetMaps(), resetScenery(), resetTriggers(), resetSeed(), resetSounds(), window.luigi = localStorage && "true" == localStorage.luigi, window.gameon = !0, setMap(1, 1), log("It took " + (Date.now() - e) + " milliseconds to start.")
}

function ensureLocalStorage() {
    var e = !1;
    try {
        window.hasOwnProperty("localStorage") || (window.localStorage = {
            crappy: !0
        }), window.localStorage && (e = !0)
    } catch (t) {
        e = !1
    }
    if (!e) throw document.body.innerText = "It seems your browser does not allow localStorage!"
}

function resetMeasurements() {
    resetUnitsize(4), resetTimer(1e3 / 60), window.jumplev1 = 32, window.jumplev2 = 64, window.ceillev = 88, window.ceilmax = 104, window.castlev = -48, window.paused = !0, resetGameScreen(), window.parentwindow || (window.parentwindow = !1)
}

function resetUnitsize(e) {
    window.unitsize = e;
    for (var t = 2; t <= 64; ++t) window["unitsizet" + t] = unitsize * t, window["unitsized" + t] = unitsize / t;
    window.scale = unitsized2, window.gravity = round(12 * unitsize) / 100
}

function resetTimer(e) {
    e = roundDigit(e, .001), window.timer = window.timernorm = e, window.timert2 = 2 * e, window.timerd2 = e / 2, window.fps = window.fps_target = roundDigit(1e3 / e, .001), window.time_prev = Date.now()
}

function resetGameScreen() {
    window.gamescreen = new getGameScreen
}

function getGameScreen() {
    resetGameScreenPosition(this), this.middlex = (this.left + this.right) / 2, window.botmax = this.height - ceilmax, botmax < unitsize && (body.innerHTML = "<div><br>Your screen isn't high enough. Make it taller, then refresh.</div>"), this.deathheight = this.bottom + 48
}

function resetGameScreenPosition(e) {
    (e = e || window.gamescreen).left = e.top = 0, e.bottom = innerHeight, e.right = innerWidth, e.height = innerHeight / unitsize, e.width = innerWidth / unitsize, e.unitheight = innerHeight, e.unitwidth = innerWidth
}

function resetEvents() {
    window.TimeHandler = new TimeHandlr({
        onSpriteCycleStart: "onadding",
        doSpriteCycleStart: "placed",
        cycleCheckValidity: "alive",
        timingDefault: 9
    })
}

function resetSounds() {
    window.sounds = {}, window.theme = !1, window.muted = localStorage && "true" == localStorage.muted, window.AudioPlayer = new AudioPlayr({
        directory: "Sounds",
        getVolumeLocal: function() {
            return .49
        },
        getThemeDefault: function() {
            return area.theme
        },
        library: {
            Sounds: ["Bowser Falls", "Bowser Fires", "Break Block", "Bump", "Coin", "Ending", "Fireball", "Firework", "Flagpole", "Gain Life", "Game Over 2", "Game Over", "Hurry", "Into the Tunnel", "Jump Small", "Jump Super", "Kick", "Level Complete", "Player Dies", "Pause", "Pipe", "Power Down", "Powerup Appears", "Powerup", "Stage Clear", "Vine Emerging", "World Clear", "You Dead"],
            Themes: ["Castle", "Overworld", "Underwater", "Underworld", "Star", "Sky", "Hurry Castle", "Hurry Overworld", "Hurry Underwater", "Hurry Underworld", "Hurry Star", "Hurry Sky"]
        }
    })
}

function resetQuadrants() {
    window.QuadsKeeper = new QuadsKeepr({
        num_rows: 5,
        num_cols: 6,
        screen_width: window.innerWidth,
        screen_height: window.innerHeight,
        tolerance: unitsized2,
        onUpdate: spawnMap,
        onCollide: !1
    })
}

function resetGameState(e) {
    clearAllTimeouts(), resetData(), window.nokeys = window.spawning = window.spawnon = window.notime = window.editing = window.qcount = window.lastscroll = 0, window.paused = window.gameon = window.speed = 1, e || (window.gamecount = 0), resetQuadrants(), window.gamehistory = [], AudioPlayer.pause()
}

function scrollWindow(e, t) {
    var n = -(e = e || 0),
        x = -(t = t || 0);
    gamescreen.left += e, gamescreen.right += e, gamescreen.top += t, gamescreen.bottom += t, shiftAll(characters, n, x), shiftAll(solids, n, x), shiftAll(scenery, n, x), shiftAll(QuadsKeeper.getQuadrants(), n, x), shiftElements(texts, n, x), QuadsKeeper.updateQuadrants(n), window.playediting && scrollEditor(e, t)
}

function shiftAll(e, t, n) {
    for (var x = e.length - 1; x >= 0; --x) shiftBoth(e[x], t, n)
}

function shiftElements(e, t, n) {
    for (var x, r = e.length - 1; r >= 0; --r) x = e[r], elementShiftLeft(x, t), elementShiftTop(x, n)
}

function scrollPlayer(e, t, n) {
    var x = player.left,
        r = player.top;
    scrollWindow(e, t = t || 0), setLeft(player, x, n), setTop(player, r + t * unitsize, n), QuadsKeeper.updateQuadrants()
}

function mlog(e) {
    verbosity[e] && log.apply(console, arguments)
}

function resetCanvas() {
    window.canvas = getCanvas(innerWidth, innerHeight, !0), window.context = canvas.getContext("2d"), body.appendChild(canvas)
}

function spriteUnravel(e) {
    for (var t, n, x, r = getPaletteReferenceStarting(window.palette), i = window.digitsize, a = e.length, o = "", l = 0; l < a;) switch (e[l]) {
        case "x":
            for (x = e.indexOf(",", ++l), t = makeDigit(r[e.slice(l, l += i)], window.digitsize), n = Number(e.slice(l, x)); n--;) o += t;
            l = x + 1;
            break;
        case "p":
            "[" == e[++l] ? (x = e.indexOf("]"), r = getPaletteReference(e.slice(l + 1, x).split(",")), l = x + 1, i = 1) : (r = getPaletteReference(window.palette), i = window.digitsize);
            break;
        default:
            o += makeDigit(r[e.slice(l, l += i)], window.digitsize)
    }
    return o
}

function spriteExpand(e) {
    for (var t, n, x = "", r = e.length, i = 0; i < r;)
        for (t = e.slice(i, i += digitsize), n = 0; n < scale; ++n) x += t;
    return x
}

function spriteGetArray(e) {
    var t, n, x, r, i = e.length / digitsize,
        a = e.match(new RegExp(".{1," + digitsize + "}", "g")),
        o = new Uint8ClampedArray(4 * i);
    for (n = 0, x = 0; n < i; ++n) {
        for (t = palette[Number(a[n])], r = 0; r < 4; ++r) o[x + r] = t[r];
        x += 4
    }
    return o
}

function setThingSprite(e) {
    if (!e.hidden && e.title) {
        var t, n = library.cache,
            x = e.spritewidth,
            r = e.spriteheight;
        n[e.title + " " + e.className.split(/\s+/g).slice(1).sort()];
        (t = getSpriteFromLibrary(e)) ? t.multiple ? (expandObtainedSpriteMultiple(t, e, x, r), e.sprite_type = t.type) : (expandObtainedSprite(t, e, x, r), e.sprite_type = "normal"): log("Could not get sprite from library on " + e.title)
    }
}

function getSpriteFromLibrary(e) {
    var t, n, x, r, i = library.cache,
        a = e.title,
        o = e.libtype,
        l = e.className.split(/\s+/g).slice(1).sort(),
        s = (map.area || window.defaultsetting).setting.split(" ");
    for (r in s) l.unshift(s[r]);
    if (n = i[t = a + " " + l]) x = n.raw;
    else {
        if (!(x = library.sprites[o][a]) || !x.constructor) return console.log("Error in checking for sprite of " + a + "."), void console.log("Title " + a, "\nLibtype " + o, "\n", e, "\n");
        x.constructor != Uint8ClampedArray && (x = findSpriteInLibrary(e, x, l)), n = i[t] = {
            raw: x
        }
    }
    switch (String(Number(l.indexOf("flipped") >= 0)) + String(Number(l.indexOf("flip-vert") >= 0))) {
        case "11":
            x = n.flipboth ? n.flipboth : n.flipboth = flipSpriteArrayBoth(x);
            break;
        case "10":
            x = n.fliphoriz ? n.fliphoriz : n.fliphoriz = flipSpriteArrayHoriz(x, e);
            break;
        case "01":
            x = n.flipvert ? n.flipvert : n.flipvert = flipSpriteArrayVert(x, e);
            break;
        default:
            x = n.raw
    }
    return x
}

function expandObtainedSprite(e, t, n, x, r) {
    var i, a, o = new Uint8ClampedArray(e.length * scale),
        l = n * unitsizet4,
        s = x * scale,
        d = 0,
        u = 0;
    for (i = 0; i < s; ++i) {
        for (a = 0; a < scale; ++a) memcpyU8(e, o, d, u, l), u += l;
        d += l
    }
    return r || (t.num_sprites = 1, t.sprite = o, refillThingCanvas(t)), o
}

function expandObtainedSpriteMultiple(e, t, n, x) {
    var r, i, a = {};
    for (i in t.num_sprites = 0, e)(r = e[i]).constructor == Uint8ClampedArray ? (++t.num_sprites, a[i] = expandObtainedSprite(r, t, n, x, !0)) : a[i] = "number" == typeof r ? r * scale : r;
    t.sprite = a.middle, t.sprites = a, refillThingCanvases(t, a)
}

function findSpriteInLibrary(e, t, n) {
    var x, r, i, a = t;
    if (t.multiple) return t;
    for (var o = 0; x = !0;) {
        for (i in ++o > 49 && (alert(e.title), console.log(e.title, n, t)), n)
            if (r = t[n[i]]) {
                t = r, n.splice(i, 1), x = !1;
                break
            }
        if (x)
            if (r = t.normal) switch (x = !1, r.constructor) {
                case Uint8ClampedArray:
                case SpriteMultiple:
                    return r;
                case Object:
                    t = r;
                    break;
                default:
                    t = t[r]
            } else x = !0;
        if (x || !t) return console.log("\nSprite not found! Title: " + e.title), console.log("Classname:", e.className), console.log("Remaining", n), console.log("Current", t), console.log("Prev", a), new Uint8ClampedArray(e.spritewidth * e.spriteheight);
        switch (t.constructor) {
            case Uint8ClampedArray:
            case SpriteMultiple:
                return t;
            case "Object":
                continue
        }
    }
}

function refillThingCanvas(e) {
    var t = e.canvas,
        n = e.context,
        x = n.getImageData(0, 0, t.width, t.height);
    memcpyU8(e.sprite, x.data), n.putImageData(x, 0, 0)
}

function refillThingCanvases(e, t) {
    var n, x, r, i, a, o = e.canvases = {},
        l = e.spritewidthpixels,
        s = e.spriteheightpixels;
    for (a in e.num_sprites = 1, t)(n = t[a]) instanceof Uint8ClampedArray ? (++e.num_sprites, o[a] = r = {
        canvas: getCanvas(l, s)
    }, r.context = i = r.canvas.getContext("2d"), memcpyU8(n, (x = i.getImageData(0, 0, l, s)).data), i.putImageData(x, 0, 0)) : o[a] = n;
    r = o.middle, e.canvas = r.canvas, e.context = r.context
}

function refillCanvas() {
    var e, t = window.canvas,
        n = window.context;
    for (n.fillStyle = area.fillStyle, n.fillRect(0, 0, t.width, t.height), e = scenery.length - 1; e >= 0; --e) drawThingOnCanvas(n, scenery[e]);
    for (e = solids.length - 1; e >= 0; --e) drawThingOnCanvas(n, solids[e]);
    for (e = characters.length - 1; e >= 0; --e) drawThingOnCanvas(n, characters[e])
}

function drawThingOnCanvas(e, t) {
    if (!t.hidden) {
        var n = t.left,
            x = t.top;
        n > innerWidth || (1 == t.num_sprites ? drawThingOnCanvasSingle(e, t.canvas, t, n, x) : drawThingOnCanvasMultiple(e, t.canvases, t.canvas, t, n, x))
    }
}

function drawThingOnCanvasSingle(e, t, n, x, r) {
    n.repeat ? drawPatternOnCanvas(e, t, x, r, n.unitwidth, n.unitheight) : e.drawImage(t, x, r)
}

function drawThingOnCanvasMultiple(e, t, n, x, r, i) {
    var a, o, l = i,
        s = r,
        d = x.right,
        u = x.bottom,
        p = x.unitwidth,
        c = x.unitheight,
        m = x.spritewidthpixels,
        h = x.spriteheightpixels;
    "v" == x.sprite_type[0] ? ((o = t.bottom) && (a = t.bottomheight || x.spriteheightpixels, drawPatternOnCanvas(e, o.canvas, s, u - a, m, min(c, h)), u -= a, c -= a), (o = t.top) && (a = t.topheight || x.spriteheightpixels, drawPatternOnCanvas(e, o.canvas, s, l, m, min(c, h)), l += a, c -= a)) : "h" == x.sprite_type[0] && ((o = t.left) && (a = t.leftwidth || x.spritewidthpixels, drawPatternOnCanvas(e, o.canvas, s, l, min(p, m), h), s += a, p -= a), (o = t.right) && (a = t.rightwidth || x.spritewidthpixels, drawPatternOnCanvas(e, o.canvas, d - a, l, min(p, m), h), d -= a, p -= a)), l < u && s < d && drawPatternOnCanvas(e, n, s, l, p, c)
}

function getPaletteReferenceStarting(e) {
    for (var t = {}, n = 0; n < e.length; ++n) t[makeDigit(n, digitsize)] = makeDigit(n, digitsize);
    return t
}

function getPaletteReference(e) {
    for (var t = {}, n = getDigitSize(e), x = 0; x < e.length; ++x) t[makeDigit(x, n)] = makeDigit(e[x], n);
    return t
}

function flipSpriteArrayHoriz(e, t) {
    var n, x, r, i, a, o = e.length,
        l = t.spritewidth,
        s = (t.spriteheight, new Uint8ClampedArray(o)),
        d = l * unitsizet4;
    for (r = 0; r < o; r += d)
        for (n = r, x = r + d - 4, i = 0; i < d; i += 4) {
            for (a = 0; a < 4; ++a) s[n + a] = e[x + a];
            n += 4, x -= 4
        }
    return s
}

function flipSpriteArrayVert(e, t) {
    for (var n, x, r = e.length, i = t.spritewidth, a = (t.spriteheight, new Uint8ClampedArray(r)), o = i * unitsizet4, l = 0, s = r - o; l < r;) {
        for (n = 0; n < o; n += 4)
            for (x = 0; x < 4; ++x) a[l + n + x] = e[s + n + x];
        l += o, s -= o
    }
    return a
}

function flipSpriteArrayBoth(e) {
    for (var t, n = e.length, x = new Uint8ClampedArray(n), r = e.length - 4, i = 0; i < n;) {
        for (t = 0; t < 4; ++t) x[i + t] = e[r + t];
        i += 4, r -= 4
    }
    return x
}

function drawPatternOnCanvas(e, t, n, x, r, i) {
    e.translate(n, x), e.fillStyle = e.createPattern(t, "repeat"), e.fillRect(0, 0, r, i), e.translate(-n, -x)
}

function clearAllSprites(e) {
    var t, n, x = [window.solids, window.characters, window.scenery];
    for (t in x)
        for (n in t = x[t]) setThingSprite(t[n]);
    e && (library.cache = {})
}

function memcpyU8(e, t, n, x, r) {
    if (!(!e || !t || n < 0 || x < 0 || r <= 0 || n >= e.length || x >= t.length)) {
        null == n && (n = 0), null == x && (x = 0), null == r && (r = max(0, min(e.length, t.length)));
        for (var i = r + 0, a = x + 0, o = n + 0; i--;) t[a++] = e[o++]
    }
}

function canvasDisableSmoothing(e, t) {
    (t = t || e.getContext("2d")).webkitImageSmoothingEnabled = !1, t.mozImageSmoothingEnabled = !1, t.imageSmoothingEnabled = !1
}

function Thing(e) {
    if (0 != arguments.length && e) {
        var t = this === window ? new Thing : this,
            n = t.args = arrayMake(arguments);
        n[0] = t, e.apply(t, n), t.alive = !0, t.placed = this.outerok = 0, t.xvel = this.xvel || 0, t.yvel = this.yvel || 0, null == t.tolx && (t.tolx = 0), null == t.toly && (t.toly = unitsized8), t.collide = t.collide || function() {}, t.death = t.death || killNormal, t.animate = t.animate || emergeUp;
        var x, r = 4;
        (x = floor(t.width * unitsize / QuadsKeeper.getQuadWidth())) > 0 && (r += (x + 1) * r / 2), (x = floor(t.height * unitsize / QuadsKeeper.getQuadHeight())) > 0 && (r += (x + 1) * r / 2), t.maxquads = r, t.quadrants = new Array(t.maxquads), t.overlaps = [], t.title = t.title || e.name, t.spritewidth = t.spritewidth || t.width, t.spriteheight = t.spriteheight || t.height, t.sprite = "";
        try {
            setContextStuff(t, t.spritewidth, t.spriteheight)
        } catch (e) {
            log("Thing context fail", e, t.title, t), setTimeout((function() {
                setContextStuff(t, t.spritewidth, t.spriteheight)
            }), 1)
        }
        return t
    }
}

function setContextStuff(e, t, n) {
    e.spritewidthpixels = e.spritewidth * unitsize, e.spriteheightpixels = e.spriteheight * unitsize, e.canvas = getCanvas(e.spritewidthpixels, e.spriteheightpixels), e.context = e.canvas.getContext("2d"), e.imageData = e.context.getImageData(0, 0, e.spritewidthpixels, e.spriteheightpixels), e.sprite_type = e.sprite_type || "neither", canvasDisableSmoothing(e, e.context)
}

function ThingCreate(e, t) {
    var n = new Thing;
    return Thing.apply(n, [e].concat(t)), n
}

function setCharacter(e, t) {
    e.type = t.split(" ")[0], e.resting = e.under = e.undermid = !1, e.alive = e.character = !0, e.libtype = "characters", setClassInitial(e, "character " + t)
}

function setSolid(e, t) {
    e.type = "solid", e.name = t, e.solid = e.alive = !0, e.speed = e.speed || 0, e.collide = e.collide || characterTouchedSolid, e.bottomBump = e.bottomBump || function() {}, e.action = e.action || function() {}, e.jump = e.jump || function() {}, e.spritewidth = e.spritewidth || 8, e.spriteheight = e.spriteheight || 8, e.libtype = "solids", setClassInitial(e, "solid " + t)
}

function setScenery(e, t) {
    setSolid(e, t), e.libtype = "scenery"
}

function addThing(e, t, n) {
    return e instanceof Function && (e = new Thing(e)), placeThing(e, t, n), window[e.libtype].push(e), e.placed = !0, e.onadding && e.onadding(), setThingSprite(e), window["last_" + (e.title || e.group || "unknown")] = e, e
}

function placeThing(e, t, n) {
    return setLeft(e, t), setTop(e, n), updateSize(e), e
}

function addText(e, t, n) {
    var x = createElement("div", {
        innerHTML: e,
        className: "text",
        left: t,
        top: n,
        onclick: body.onclick || canvas.onclick,
        style: {
            marginLeft: t + "px",
            marginTop: n + "px"
        }
    });
    return body.appendChild(x), texts.push(x), x
}

function spawnText(e, t) {
    var n = e.element = addText("", e.left, e.top);
    "object" == typeof t ? proliferate(n, t) : n.innerHTML = t, e.movement = !1
}

function checkTexts() {
    var e, t, n, x = QuadsKeeper.getDelX();
    for (n = texts.length - 1; n >= 0; --n) t = texts[n], e = texts[n].element || t, t.right = t.left + e.clientWidth, t.right < x && (body.removeChild(e), killNormal(t), deleteThing(e, texts, n))
}

function Mushroom(e, t) {
    e.group = "item", e.width = e.height = 8, e.speed = .42 * unitsize, e.animate = emergeUp, e.movement = moveSimple, e.collide = collideFriendly, e.jump = mushroomJump, e.death = killNormal, e.nofire = !0;
    var n = "mushroom";
    switch (t) {
        case 1:
            e.action = gainLife, n += " gainlife";
            break;
        case -1:
            e.action = killPlayer, n += " death";
            break;
        default:
            e.action = playerShroom, n += " regular"
    }
    setCharacter(e, n)
}

function mushroomJump(e) {
    e.yvel -= 1.4 * unitsize, e.top -= unitsize, e.bottom -= unitsize, updatePosition(e)
}

function FireFlower(e) {
    e.group = "item", e.width = e.height = 8, e.animate = emergeUp, e.collide = collideFriendly, e.action = playerShroom, e.nofall = e.nofire = !0, e.movement = !1, setCharacter(e, "fireflower"), TimeHandler.addSpriteCycle(e, ["one", "two", "three", "four"])
}

function FireBall(e, t) {
    e.group = "item", e.width = e.height = 4, e.speed = 1.75 * unitsize, e.gravity = 1.56 * gravity, e.jumpheight = 1.56 * unitsize, e.nofire = e.nostar = e.collide_primary = !0, e.moveleft = t, e.animate = emergeFire, e.movement = moveJumping, e.collide = fireEnemy, e.death = fireExplodes, setCharacter(e, "fireball"), TimeHandler.addSpriteCycle(e, ["one", "two", "three", "four"], 4)
}

function fireEnemy(e, t) {
    if (!(!t.alive || t.emerging || e.height <= unitsize)) {
        if (e.nofire) return e.nofire > 1 ? t.death(t) : void 0;
        e.solid ? AudioPlayer.playLocal("Bump", t.right) : (AudioPlayer.playLocal("Kick", t.right), e.death(e, 2), scoreEnemyFire(e)), t.death(t)
    }
}

function fireDeleted() {
    --player.numballs
}

function fireExplodes(e) {
    var t = new Thing(Firework);
    addThing(t, e.left - t.width / 2, e.top - t.height / 2), t.animate(), killNormal(e)
}

function Star(e) {
    e.group = "item", e.width = 7, e.height = 8, e.speed = .56 * unitsize, e.jumpheight = 1.17 * unitsize, e.gravity = gravity / 2.8, e.animate = emergeUp, e.movement = moveJumping, e.collide = collideFriendly, e.action = playerStar, e.death = killNormal, e.nofire = !0, setCharacter(e, "star item"), TimeHandler.addSpriteCycle(e, ["one", "two", "three", "four"], 0, 7)
}

function Shell(e, t) {
    e.width = 8, e.height = 7, e.group = "item", e.speed = unitsizet2, e.collide_primary = !0, e.moveleft = e.xvel = e.move = e.hitcount = e.peeking = e.counting = e.landing = e.enemyhitcount = 0, e.smart = t, e.movement = moveShell, e.collide = hitShell, e.death = killFlip, e.spawntype = Koopa, setCharacter(e, "shell" + (t ? " smart" : " dumb"))
}

function hitShell(e, t) {
    if ("shell" == e.type && t.type != e.type) return hitShell(t, e);
    switch (e.type) {
        case "solid":
            t.right < e.right ? (AudioPlayer.playLocal("Bump", e.left), setRight(t, e.left), t.xvel = -t.speed, t.moveleft = !0) : (AudioPlayer.playLocal("Bump", e.right), setLeft(t, e.right), t.xvel = t.speed, t.moveleft = !1);
            break;
        case "player":
            var n = objectToLeft(t, e),
                x = e.yvel > 0 && e.bottom <= t.top + unitsizet2;
            if (e.star) return scorePlayerShell(e, t), t.death(t, 2);
            if (t.landing) return void(t.shelltoleft == n ? (++t.landing, 1 == t.landing && scorePlayerShell(e, t), TimeHandler.addEvent((function(e) {
                --e.landing
            }), 2, t)) : player.death(player));
            0 == t.xvel || x ? (t.counting = 0, scorePlayerShell(e, t), t.peeking && (t.peeking = !1, removeClass(t, "peeking"), t.height -= unitsized8, updateSize(t)), 0 == t.xvel ? (n ? (t.moveleft = !0, t.xvel = -t.speed) : (t.moveleft = !1, t.xvel = t.speed), ++t.hitcount, TimeHandler.addEvent((function(e) {
                --e.hitcount
            }), 2, t)) : t.xvel = 0, x && (AudioPlayer.play("Kick"), t.xvel ? scorePlayerShell(e, t) : (jumpEnemy(e, t), e.yvel *= 2, scorePlayerShell(e, t), setBottom(e, t.top - unitsize, !0)), ++t.landing, t.shelltoleft = n, TimeHandler.addEvent((function(e) {
                --e.landing
            }), 2, t))) : !t.hitcount && (n && t.xvel < 0 || !n && t.xvel > 0) && e.death(e);
            break;
        case "shell":
            if (0 != e.xvel)
                if (0 != t.xvel) {
                    var r = e.xvel;
                    shiftHoriz(e, e.xvel = t.xvel), shiftHoriz(t, t.xvel = r)
                } else score(t, 500), t.death(t);
            else 0 != t.xvel && (score(e, 500), e.death(e));
            break;
        default:
            switch (e.group) {
                case "enemy":
                    if (t.xvel) {
                        if ("koopa" == e.type.split(" ")[0]) {
                            var i = new Thing(Shell, e.smart);
                            addThing(i, e.left, e.bottom - i.height * unitsize), killFlip(i), killNormal(e)
                        } else killFlip(e);
                        AudioPlayer.play("Kick"), score(e, findScore(t.enemyhitcount), !0), ++t.enemyhitcount
                    } else e.moveleft = objectToLeft(e, t);
                    break;
                case "item":
                    if ("shell" != e.type) return;
                    t.xvel && killFlip(e), e.xvel && killFlip(t)
            }
    }
}

function moveShell(e) {
    if (0 == e.xvel)
        if (350 == ++e.counting) addClass(e, "peeking"), e.peeking = !0, e.height += unitsized8, updateSize(e);
        else if (490 == e.counting) {
        var t = new Thing(e.spawntype, e.smart);
        addThing(t, e.left, e.bottom - t.height * unitsize), killNormal(e)
    }
}

function collideFriendly(e, t) {
    "player" == e.type && (t.action && t.action(e), t.death(t))
}

function jumpEnemy(e, t) {
    e.keys.up ? e.yvel = -1.4 * unitsize : e.yvel = -.7 * unitsize, e.xvel *= .91, AudioPlayer.play("Kick"), "item" == t.group && "shell" != t.type || score(t, findScore(e.jumpcount++ + e.jumpers), !0), ++e.jumpers, TimeHandler.addEvent((function(e) {
        --e.jumpers
    }), 1, e)
}

function Goomba(e) {
    e.width = e.height = 8, e.speed = .21 * unitsize, e.toly = unitsize, e.moveleft = e.noflip = !0, e.smart = !1, e.group = "enemy", e.movement = moveSimple, e.collide = collideEnemy, e.death = killGoomba, setCharacter(e, "goomba"), TimeHandler.addSpriteCycleSynched(e, [unflipHoriz, flipHoriz])
}

function killGoomba(e, t) {
    if (e.alive)
        if (t) killFlip(e);
        else {
            var n = new Thing(DeadGoomba);
            addThing(n, e.left, e.bottom - n.height * unitsize), TimeHandler.addEvent(killNormal, 21, n), killNormal(e)
        }
}

function DeadGoomba(e) {
    e.width = 8, e.height = 4, e.movement = !1, e.nocollide = e.nocollide = !0, e.death = killNormal, setSolid(e, "deadGoomba")
}

function Koopa(e, t, n) {
    e.width = 8, e.height = 12, e.speed = e.xvel = .21 * unitsize, e.moveleft = e.skipoverlaps = !0, e.group = "enemy", e.smart = t;
    var x = "koopa";
    x += e.smart ? " smart" : " dumb", e.smart && (x += " smart"), n ? (x += " flying", e.winged = !0, 1 == n ? (e.movement = moveJumping, e.jumpheight = 1.17 * unitsize, e.gravity = gravity / 2.8) : (e.movement = moveFloating, e.ytop = e.begin = n[0] * unitsize, e.ybot = e.end = n[1] * unitsize, e.nofall = e.fly = !0, e.changing = e.xvel = 0, e.yvel = e.maxvel = unitsized4)) : (x += " regular", e.smart ? e.movement = moveSmart : e.movement = moveSimple), e.collide = collideEnemy, e.death = killKoopa, setCharacter(e, x), TimeHandler.addSpriteCycleSynched(e, ["one", "two"]), e.toly = unitsizet2
}

function killKoopa(e, t) {
    if (e.alive) {
        var n;
        if (n = t && 2 != t || e.winged ? new Thing(Koopa, e.smart) : new Thing(Shell, e.smart), TimeHandler.addEvent((function(e, t) {
                addThing(e, t.left, t.bottom - e.height * unitsize), e.moveleft = t.moveleft
            }), 0, n, e), killNormal(e), 2 != t) return n;
        killFlip(n)
    }
}

function Pirhana(e, t) {
    e.width = 8, e.height = 12, e.counter = 0, e.countermax = e.height * unitsize, e.dir = unitsized8, e.toly = unitsizet8, e.nofall = e.deadly = e.nocollidesolid = e.repeat = !0, e.group = "enemy", e.collide = collideEnemy, e.death = killNormal, e.movement = movePirhanaInit, e.death = killPirhana, setCharacter(e, "pirhana")
}

function movePirhanaInit(e) {
    e.hidden = !0;
    var t = e.visual_scenery = new Thing(Sprite, "Pirhana");
    addThing(t, e.left, e.top), TimeHandler.addSpriteCycle(t, ["one", "two"]), e.movement = movePirhanaNew, movePirhanaNew(e, e.height * unitsize)
}

function movePirhanaNew(e, t) {
    t = t || e.dir, e.counter += t, shiftVert(e, t), shiftVert(e.visual_scenery, t), (e.counter <= 0 || e.counter >= e.countermax) && (e.movement = !1, e.dir *= -1, TimeHandler.addEvent(movePirhanaRestart, 35, e))
}

function movePirhanaRestart(e) {
    var t = getMidX(player);
    e.counter >= e.countermax && t > e.left - unitsizet8 && t < e.right + unitsizet8 ? setTimeout(movePirhanaRestart, 7, e) : e.movement = movePirhanaNew
}

function killPirhana(e) {
    (e || (e = this)) && (killNormal(e), killNormal(e.visual_scenery))
}

function playerAboveEnemy(e, t) {
    return e.bottom < t.top + t.toly
}

function collideEnemy(e, t) {
    if (characterIsAlive(e) && characterIsAlive(t) && !(e.nocollidechar && !t.player || t.nocollidechar && !e.player)) {
        if ("item" == e.group) return e.collide_primary ? e.collide(t, e) : void 0;
        if (!map.underwater && e.player && (e.star && !t.nostar || !t.deadly && objectOnTop(e, t))) {
            if (playerAboveEnemy(e, t)) return;
            e.player && !e.star ? TimeHandler.addEvent((function(e, t) {
                jumpEnemy(e, t)
            }), 0, e, t) : t.nocollide = !0;
            t.death(t, 2 * e.star);
            e.star ? scoreEnemyStar(t) : (scoreEnemyStomp(t), setBottom(e, min(e.bottom, t.top + unitsize))), addClass(e, "hopping"), removeClasses(e, "running skidding jumping one two three"), e.hopping = !0, 1 == player.power && setPlayerSizeSmall(e)
        } else e.player ? playerAboveEnemy(e, t) || e.death(e) : t.moveleft = !(e.moveleft = objectToLeft(e, t))
    }
}

function Podoboo(e, t) {
    e.width = 7, e.height = 8, e.deadly = e.nofall = e.nocollidesolid = e.nofire = !0, e.gravity = map.gravity / 2.1, e.jumpheight = (t || 64) * unitsize, e.speed = -map.maxyvel, e.movement = movePodobooInit, e.collide = collideEnemy, e.betweentime = 70, setCharacter(e, "podoboo")
}

function movePodobooInit(e) {
    characterIsAlive(e) && (e.hidden = !0, e.heightnorm = e.top, e.heightfall = e.top - e.jumpheight, TimeHandler.addEvent(podobooJump, e.betweentime, e), e.movement = !1)
}

function podobooJump(e) {
    characterIsAlive(e) && (unflipVert(e), e.yvel = e.speed + e.gravity, e.movement = movePodobooUp, e.hidden = !1, setThingSprite(e))
}

function movePodobooUp(e) {
    shiftVert(e, e.speed, !0), e.top - gamescreen.top > e.heightfall || (e.nofall = !1, e.movement = movePodobooSwitch)
}

function movePodobooSwitch(e) {
    e.yvel <= 0 || (flipVert(e), e.movement = movePodobooDown)
}

function movePodobooDown(e) {
    e.top < e.heightnorm || (setTop(e, e.heightnorm, !0), e.movement = !1, e.nofall = e.hidden = !0, e.heightfall = e.top - e.jumpheight, TimeHandler.addEvent(podobooJump, e.betweentime, e))
}

function HammerBro(e) {
    e.width = 8, e.height = 12, e.group = "enemy", e.collide = collideEnemy, e.statex = e.counter = e.statey = e.counterx = e.countery = e.level = e.throwcount = 0, e.death = killFlip, e.movement = moveHammerBro, setCharacter(e, "hammerbro"), e.gravity = gravity / 2, TimeHandler.addSpriteCycle(e, ["one", "two"]), TimeHandler.addEvent(throwHammer, 35, e, 7), TimeHandler.addEventInterval(jumpHammerBro, 140, 1 / 0, e)
}

function moveHammerBro(e) {
    e.xvel = Math.sin(Math.PI * (e.counter += .007)) / 2.1, lookTowardPlayer(e), e.nocollidesolid = e.yvel < 0 || e.falling
}

function throwHammer(e, t) {
    !characterIsAlive(e) || e.nothrow || e.right < -unitsizet32 || (3 != t && switchClass(e, "thrown", "throwing"), TimeHandler.addEvent((function(e) {
        if (3 != t) {
            if (!characterIsAlive(e)) return;
            switchClass(e, "throwing", "thrown"), addThing(new Thing(Hammer, e.lookleft), e.left - unitsizet2, e.top - unitsizet2)
        }
        t > 0 ? TimeHandler.addEvent(throwHammer, 7, e, --t) : (TimeHandler.addEvent(throwHammer, 70, e, 7), removeClass(e, "thrown"))
    }), 14, e))
}

function jumpHammerBro(e) {
    if (!characterIsAlive(e)) return !0;
    e.resting && (map.floor - e.bottom / unitsize >= jumplev1 - 2 && "floor" != e.resting.name && Math.floor(2 * Math.random()) ? (e.yvel = -.7 * unitsize, e.falling = !0, TimeHandler.addEvent((function(e) {
        e.falling = !1
    }), 42, e)) : e.yvel = -2.1 * unitsize, e.resting = !1)
}

function Hammer(e, t) {
    e.width = e.height = 8, e.nocollidesolid = e.nocollidechar = e.deadly = e.nofire = !0, e.collide = collideEnemy, e.yvel = 1.4 * -unitsize, e.xvel = unitsize / 1.4, t && (e.xvel *= -1), e.gravity = gravity / 2.1, setCharacter(e, "hammer"), TimeHandler.addSpriteCycle(e, ["one", "two", "three", "four"], 3)
}

function Cannon(e, t, n) {
    e.width = 8, e.height = 8 * (t || 1), e.spriteheight = 16, n || (e.movement = moveCannonInit), e.timer = 117, e.repeat = !0, setSolid(e, "cannon")
}

function moveCannonInit(e) {
    TimeHandler.addEventInterval((function(e) {
        if (!(player.right > e.left - unitsizet8 && player.left < e.right + unitsizet8)) {
            var t = new Thing(BulletBill);
            objectToLeft(player, e) ? (addThing(t, e.left, e.top), t.direction = t.moveleft = !0, t.xvel *= -1, flipHoriz(t)) : addThing(t, e.left + e.width, e.top), AudioPlayer.playLocal("Bump", e.right)
        }
    }), 270, 1 / 0, e), e.movement = !1
}

function BulletBill(e) {
    e.width = 8, e.height = 7, e.group = "enemy", e.nofall = e.nofire = e.nocollidesolid = e.nocollidechar = !0, e.speed = e.xvel = unitsized2, e.movement = moveSimple, e.collide = collideEnemy, e.death = killFlip, setCharacter(e, "bulletbill")
}

function Bowser(e, t) {
    e.width = e.height = 16, e.speed = .28 * unitsize, e.gravity = gravity / 2.8, e.deadly = e.dx = e.lookleft = e.nokillend = e.skipoverlaps = !0, e.moveleft = e.smart = e.movecount = e.jumpcount = e.firecount = e.deathcount = 0, e.killonend = freezeBowser, e.counter = -.7, e.group = "enemy", e.movement = moveBowserInit, e.collide = collideEnemy, e.death = killBowser, setCharacter(e, "bowser"), TimeHandler.addSpriteCycle(e, ["one", "two"]), t && TimeHandler.addEvent(throwHammer, 35, e, 7)
}

function moveBowserInit(e) {
    TimeHandler.addEventInterval(bowserJumps, 117, 1 / 0, e), TimeHandler.addEventInterval(bowserFires, 280, 1 / 0, e), TimeHandler.addEventInterval(bowserFires, 350, 1 / 0, e), TimeHandler.addEventInterval(bowserFires, 490, 1 / 0, e), e.movement = moveBowser
}

function moveBowser(e) {
    characterIsAlive(player) && (lookTowardPlayer(e), e.lookleft ? e.xvel = Math.sin(Math.PI * (e.counter += .007)) / 1.4 : e.xvel = min(e.xvel + .07, .84))
}

function bowserJumps(e) {
    if (!characterIsAlive(e)) return !0;
    e.resting && e.lookleft && (e.yvel = -1.4 * unitsize, e.resting = !1, e.nocollidesolid = !0, TimeHandler.addEventInterval((function(e) {
        if (e.yvel > unitsize) return e.nocollidesolid = !1, !0
    }), 3, 1 / 0, e))
}

function bowserFires(e) {
    if (!characterIsAlive(e) || !characterIsAlive(player)) return !0;
    e.lookleft && (addClass(e, "firing"), AudioPlayer.playLocal("Bowser Fires", e.left), TimeHandler.addEvent((function(e) {
        var t = e.top + unitsizet4,
            n = new Thing(BowserFire, roundDigit(player.bottom, unitsizet8));
        removeClass(e, "firing"), addThing(n, e.left - unitsizet8, t), AudioPlayer.play("Bowser Fires")
    }), 14, e))
}

function killBowser(e, t) {
    if (t) return e.nofall = !1, killFlip(e);
    5 == ++e.deathcount && (e.yvel = e.speed = e.movement = 0, killFlip(e, 350), score(e, 5e3))
}

function freezeBowser(e) {
    e.movement = !1, thingStoreVelocity(e)
}

function BowserFire(e, t) {
    e.width = 12, e.height = 4, e.xvel = -.63 * unitsize, e.deadly = e.nofall = e.nocollidesolid = e.nofire = !0, e.collide = collideEnemy, t && (e.ylev = t, e.movement = moveFlying), setCharacter(e, "bowserfire"), TimeHandler.addSpriteCycle(e, [unflipVert, flipVert])
}

function moveFlying(e) {
    round(e.bottom) != round(e.ylev) ? shiftVert(e, min(max(0, e.ylev - e.bottom), unitsize)) : e.movement = !1
}

function WaterBlock(e, t) {
    e.height = 16, e.width = t, e.spritewidth = e.spriteheight = 1 / scale, e.repeat = !0, setSolid(e, "water-block")
}

function Blooper(e) {
    e.width = 8, e.height = 12, e.nocollidesolid = e.nofall = e.moveleft = 1, e.squeeze = e.counter = 0, e.speed = unitsized2, e.xvel = e.speedinv = -unitsized4, e.movement = moveBlooper, e.collide = collideEnemy, e.death = killFlip, setCharacter(e, "blooper")
}

function moveBlooper(e) {
    switch (e.counter) {
        case 56:
            e.squeeze = !0, ++e.counter;
            break;
        case 63:
            squeezeBlooper(e);
            break;
        default:
            ++e.counter
    }
    e.top < unitsizet16 + 10 && squeezeBlooper(e), e.squeeze ? e.yvel = max(e.yvel + .021, .7) : e.yvel = min(e.yvel - .035, -.7), shiftVert(e, e.yvel, !0), e.squeeze || (player.left > e.right + unitsizet8 ? e.xvel = min(e.speed, e.xvel + unitsized32) : player.right < e.left - unitsizet8 && (e.xvel = max(e.speedinv, e.xvel - unitsized32)))
}

function squeezeBlooper(e) {
    2 != e.squeeze && addClass(e, "squeeze"), e.squeeze = 2, e.xvel /= 1.17, setHeight(e, 10, !0, !0), (e.top > player.bottom || e.bottom > 360) && unsqueezeBlooper(e)
}

function unsqueezeBlooper(e) {
    e.squeeze = !1, removeClass(e, "squeeze"), e.counter = 0, setHeight(e, 12, !0, !0)
}

function CheepCheep(e, t, n) {
    e.width = e.height = 8, e.group = "enemy";
    var x = "cheepcheep " + (t ? "red" : "");
    e.red = t, setCheepVelocities(e), n ? (x += " jumping", e.jumping = !0, e.movement = moveCheepJumping) : e.movement = moveCheepInit, e.nofall = e.nocollidesolid = e.nocollidechar = !0, e.death = killFlip, e.collide = collideEnemy, setCharacter(e, x), TimeHandler.addSpriteCycle(e, ["one", "two"])
}

function setCheepVelocities(e) {
    e.red ? (e.xvel = -unitsized4, e.yvel = unitsize / -24) : (e.xvel = unitsize / -6, e.yvel = -unitsized32)
}

function moveCheepInit(e) {
    setCheepVelocities(e), e.top < player.top && (e.yvel *= -1), moveCheep(e), e.movement = moveCheep
}

function moveCheep(e) {
    shiftVert(e, e.yvel)
}

function moveCheepJumping(e) {
    shiftVert(e, e.yvel += unitsize / 14)
}

function startCheepSpawn() {
    return map.zone_cheeps = TimeHandler.addEventInterval((function() {
        if (!map.zone_cheeps) return !0;
        var e = new Thing(CheepCheep, !0, !0);
        addThing(e, Math.random() * player.left * player.maxspeed / unitsized2, gamescreen.height * unitsize), e.xvel = Math.random() * player.maxspeed, e.yvel = -2.33 * unitsize, flipHoriz(e), e.movement = function(e) {
            e.top < ceilmax ? e.movement = moveCheepJumping : shiftVert(e, e.yvel)
        }
    }), 21, 1 / 0)
}

function Bubble(e) {
    e.width = e.height = 2, e.nofall = e.nocollide = !0, e.movement = function(e) {
        e.top < unitsizet16 ? killNormal(e) : shiftVert(e, e.yvel)
    }, e.yvel = -unitsized4, setCharacter(e, "bubble")
}

function Lakitu(e, t) {
    e.width = 8, e.height = 12, e.nofall = e.noshiftx = e.nocollidesolid = !0, e.playerdiff = e.counter = 0, e.dir = -1, e.norepeat = t, e.playerdiff = unitsizet16, e.group = "enemy", e.collide = collideEnemy, e.movement = moveLakituInit, e.death = killLakitu, setCharacter(e, "lakitu out"), map.has_lakitu = e
}

function moveLakituInit(e) {
    if (map.has_lakitu && e.norepeat) return killNormal(e);
    TimeHandler.addEventInterval((function(e) {
        if (!e.alive) return !0;
        throwSpiny(e)
    }), 140, 1 / 0, e), e.movement = moveLakituInit2, moveLakituInit2(e), map.has_lakitu = e
}

function moveLakituInit2(e) {
    if (e.right < player.left) return moveLakitu(e), e.movement = moveLakitu, map.lakitu = e, !0;
    shiftHoriz(e, -unitsize)
}

function moveLakitu(e) {
    player.xvel > unitsized8 && player.left > gamescreen.width * unitsized2 ? e.left < player.right + unitsizet16 && (slideToXLoc(e, player.right + unitsizet32 + player.xvel, 1.4 * player.maxspeed), e.counter = 0) : (e.counter += .007, slideToXLoc(e, player.left + player.xvel + 117 * Math.sin(Math.PI * e.counter), .7 * player.maxspeed))
}

function throwSpiny(e) {
    if (!characterIsAlive(e)) return !1;
    switchClass(e, "out", "hiding"), TimeHandler.addEvent((function(e) {
        if (e.dead) return !1;
        var t = new Thing(SpinyEgg);
        addThing(t, e.left, e.top), t.yvel = -2.1 * unitsize, switchClass(e, "hiding", "out")
    }), 21, e)
}

function killLakitu(e) {
    delete e.noscroll, killFlip(e)
}

function Spiny(e) {
    e.width = e.height = 8, e.group = "enemy", e.speed = .21 * unitsize, e.deadly = e.moveleft = !0, e.smart = !1, e.death = killFlip, e.collide = collideEnemy, e.movement = moveSimple, setCharacter(e, "spiny"), TimeHandler.addSpriteCycle(e, ["one", "two"])
}

function SpinyEgg(e) {
    e.height = 8, e.width = 7, e.group = "enemy", e.deadly = !0, e.movement = moveSpinyEgg, e.spawntype = Spiny, e.spawner = e.death = createSpiny, e.collide = collideEnemy, setCharacter(e, "spinyegg"), TimeHandler.addSpriteCycle(e, ["one", "two"])
}

function moveSpinyEgg(e) {
    e.resting && createSpiny(e)
}

function createSpiny(e) {
    var t = new Thing(Spiny);
    addThing(t, e.left, e.top), t.moveleft = objectToLeft(player, t), killNormal(e)
}

function Beetle(e) {
    e.width = e.height = 8, e.group = "enemy", e.speed = e.xvel = .21 * unitsize, e.nofire = 2, e.moveleft = !0, e.smart = !1, e.collide = collideEnemy, e.movement = moveSmart, e.death = killBeetle, setCharacter(e, "beetle"), TimeHandler.addSpriteCycleSynched(e, ["one", "two"])
}

function killBeetle(e, t) {
    if (e.alive) {
        var n;
        if (n = new Thing(t && 2 != t ? Koopa : BeetleShell, e.smart), TimeHandler.addEvent((function(e, t) {
                addThing(e, t.left, t.bottom - e.height * unitsize), e.moveleft = t.moveleft
            }), 0, n, e), killNormal(e), 2 != t) return n;
        killFlip(n)
    }
}

function BeetleShell(e) {
    e.width = e.height = 8, e.nofire = !0, e.group = "item", e.speed = unitsizet2, e.moveleft = e.xvel = e.move = e.hitcount = e.peeking = e.counting = e.landing = e.enemyhitcount = 0, e.movement = moveShell, e.collide = hitShell, e.death = killFlip, e.spawntype = Beetle, setCharacter(e, "shell beetle")
}

function Coin(e, t) {
    e.group = "coin", e.width = 5, e.height = 7, e.nofall = e.coin = e.nofire = e.nocollidechar = e.nokillend = e.onlyupsolids = e.skipoverlaps = !0, e.tolx = 0, e.toly = unitsized2, e.collide = hitCoin, e.animate = coinEmerge, e.death = killNormal, setCharacter(e, "coin one"), TimeHandler.addSpriteCycleSynched(e, ["one", "two", "three", "two", "one"]), t && (e.movement = coinBecomesSolid)
}

function coinBecomesSolid(e) {
    switchContainers(e, characters, solids), e.movement = !1
}

function hitCoin(e, t) {
    e.player && (AudioPlayer.play("Coin"), score(e, 200, !1), gainCoin(), killNormal(t))
}

function gainCoin() {
    ++data.coins.amount >= 100 && (data.coins.amount = 0, gainLife()), updateDataElement(data.coins)
}

function coinEmerge(e, t) {
    AudioPlayer.play("Coin"), removeClass(e, "still"), switchContainers(e, characters, scenery), score(e, 200, !1), gainCoin(), e.nocollide = e.alive = e.nofall = e.emerging = !0, e.blockparent ? e.movement = coinEmergeMoveParent : e.movement = coinEmergeMove, e.yvel = -unitsize, TimeHandler.addEvent((function(e) {
        e.yvel *= -1
    }), 25, e), TimeHandler.addEvent((function(e) {
        killNormal(e), deleteThing(e, scenery, scenery.indexOf(e))
    }), 49, e), TimeHandler.addEventInterval(coinEmergeMovement, 1, 1 / 0, e, t), TimeHandler.clearClassCycle(e, 0), addClass(e, "anim"), TimeHandler.addSpriteCycle(e, ["anim1", "anim2", "anim3", "anim4", "anim3", "anim2"], 0, 5)
}

function coinEmergeMovement(e, t) {
    if (!e.alive) return !0;
    shiftVert(e, e.yvel)
}

function coinEmergeMove(e) {
    shiftVert(e, e.yvel, !0)
}

function coinEmergeMoveParent(e) {
    e.bottom >= e.blockparent.bottom ? killNormal(e) : shiftVert(e, e.yvel, !0)
}

function Player(e) {
    setPlayerSizeSmall(e), e.walkspeed = unitsized2, e.canjump = e.nofiredeath = e.nofire = e.player = e.nokillend = 1, e.numballs = e.moveleft = e.skidding = e.star = e.dying = e.nofall = e.maxvel = e.paddling = e.jumpers = e.landing = 0, e.running = "", e.power = data.playerpower, e.maxspeed = e.maxspeedsave = 1.35 * unitsize, e.scrollspeed = 1.75 * unitsize, e.keys = new Keys, e.fire = playerFires, e.movement = movePlayer, e.death = killPlayer, setCharacter(e, "player normal small still"), e.tolx = unitsizet2, e.toly = 0, e.gravity = map.gravity, map.underwater && (e.swimming = !0, TimeHandler.addSpriteCycle(e, ["swim1", "swim2"], "swimming", 5))
}

function placePlayer(e, t) {
    clearOldPlayer(), window.player = new Thing(Player), window.luigi ? window.player.title = "Luigi" : window.player.title = "Mario";
    var n = addThing(player, e || unitsizet16, t || (map.floor - player.height) * unitsize);
    return data.playerpower >= 2 && (playerGetsBig(player, !0), 3 == data.playerpower && playerGetsFire(player, !0)), n
}

function clearOldPlayer() {
    window.player && (player.alive = !1, player.dead = !0)
}

function Keys() {
    this.run = this.crouch = this.jump = this.jumplev = this.sprint = 0
}

function thingStoreVelocity(e, t) {
    e.xvelOld = e.xvel || 0, e.yvelOld = e.yvel || 0, e.nofallOld = e.nofall || !1, e.nocollideOld = e.nocollide || !1, e.movementOld = e.movement || e.movementOld, e.nofall = e.nocollide = !0, e.xvel = e.yvel = !1, t || (e.movement = !1)
}

function thingRetrieveVelocity(e, t) {
    t || (e.xvel = e.xvelOld || 0, e.yvel = e.yvelOld || 0), e.movement = e.movementOld || e.movement, e.nofall = e.nofallOld || !1, e.nocollide = e.nocollideOld || !1
}

function removeCrouch() {
    player.crouching = !1, player.toly = player.tolyold || 0, 1 != player.power && (removeClass(player, "crouching"), player.height = 16, updateBottom(player, 0), updateSize(player))
}

function playerShroom(e) {
    e.shrooming || (AudioPlayer.play("Powerup"), score(e, 1e3, !0), 3 != e.power && (e.shrooming = !0, (2 == ++e.power ? playerGetsBig : playerGetsFire)(e), storePlayerStats()))
}

function playerGetsBig(e, t) {
    if (setPlayerSizeLarge(e), e.keys.down = 0, removeClasses(player, "crouching small"), updateBottom(e, 0), updateSize(e), t) addClass(e, "large");
    else {
        addClass(player, "shrooming");
        for (var n = [1, 2, 1, 2, 3, 2, 3], x = n.length - 1; x >= 0; --x) n[x] = "shrooming" + n[x];
        thingStoreVelocity(player), n.push((function(e, t) {
            return e.shrooming = t.length = 0, addClass(e, "large"), removeClasses(e, "shrooming shrooming3"), thingRetrieveVelocity(player), !0
        })), TimeHandler.addSpriteCycle(e, n, "shrooming", 6)
    }
}

function playerGetsSmall(e) {
    var t = player.bottom;
    e.keys.down = 0, thingStoreVelocity(e), addClass(e, "small"), flicker(e), removeClasses(player, "running skidding jumping fiery"), addClass(player, "paddling"), TimeHandler.addEvent((function(e) {
        removeClass(e, "large"), setPlayerSizeSmall(e), setBottom(e, t - unitsize)
    }), 21, player), TimeHandler.addEvent((function(e) {
        thingRetrieveVelocity(e, !1), e.nocollidechar = !0, removeClass(e, "paddling"), (e.running || e.xvel) && addClass(e, "running"), TimeHandler.addEvent(setThingSprite, 1, e)
    }), 42, player), TimeHandler.addEvent((function(e) {
        e.nocollidechar = !1
    }), 70, player)
}

function playerGetsFire(e) {
    removeClass(e, "intofiery"), addClass(e, "fiery"), player.shrooming = !1
}

function setPlayerSizeSmall(e) {
    setSize(e, 8, 8, !0), updateSize(e)
}

function setPlayerSizeLarge(e) {
    setSize(e, 8, 16, !0), updateSize(e)
}

function movePlayer(e) {
    if (e.keys.up) {
        if (e.keys.jump > 0 && (e.yvel <= 0 || map.underwater) && (map.underwater && playerPaddles(e), e.resting ? (e.resting.xvel && (e.xvel += e.resting.xvel), e.resting = !1) : (e.jumping || map.underwater || switchClass(e, "running skidding", "jumping"), e.jumping = !0), !map.underwater)) {
            var t = unitsize / pow(++e.keys.jumplev, map.jumpmod - .0014 * e.xvel);
            e.yvel = max(e.yvel - t, map.maxyvelinv)
        }
    } else e.keys.jump = 0;
    e.keys.crouch && !e.crouching && e.resting && (1 != e.power && (e.crouching = !0, addClass(e, "crouching"), e.height = 11, e.tolyold = e.toly, e.toly = unitsizet4, updateBottom(e, 0), updateSize(e)), e.resting.actionTop && e.resting.actionTop(e, e.resting, e.resting.transport));
    var n = 0;
    if (0 == e.keys.run || e.crouching) e.xvel *= .98, n = .035;
    else {
        var x = e.keys.run * (.098 * ((e.keys.sprint && !map.underwater || 0) + 1));
        e.xvel += x || 0, e.xvel *= .98, n = 7e-4, signBool(e.keys.run) == e.moveleft ? e.skidding || (addClass(e, "skidding"), e.skidding = !0) : e.skidding && (removeClass(e, "skidding"), e.skidding = !1)
    }
    e.xvel > n ? e.xvel -= n : e.xvel < -n ? e.xvel += n : 0 != e.xvel && (e.xvel = 0, window.nokeys || 0 != e.keys.run || (e.keys.left_down ? e.keys.run = -1 : e.keys.right_down && (e.keys.run = 1))), Math.abs(e.xvel) < .14 ? e.running && (e.running = !1, 1 == player.power && setPlayerSizeSmall(e), removeClasses(e, "running skidding one two three"), addClass(e, "still"), TimeHandler.clearClassCycle(e, "running")) : e.running || (e.running = !0, switchClass(e, "still", "running"), playerStartRunningCycle(e), 1 == e.power && setPlayerSizeSmall(e)), e.xvel > 0 ? (e.xvel = min(e.xvel, e.maxspeed), e.moveleft && (e.resting || map.underwater) && (unflipHoriz(e), e.moveleft = !1)) : e.xvel < 0 && (e.xvel = max(e.xvel, -1 * e.maxspeed), e.moveleft || !e.resting && !map.underwater || (flipHoriz(e), e.moveleft = !0)), e.resting && (e.hopping && (removeClass(e, "hopping"), e.xvel && addClass(e, "running"), e.hopping = !1), e.keys.jumplev = e.yvel = e.jumpcount = 0, e.jumping && (e.jumping = !1, removeClass(e, "jumping"), 1 == e.power && setPlayerSizeSmall(e), addClass(e, abs(e.xvel) < .14 ? "still" : "running")), e.paddling && (e.paddling = e.swimming = !1, removeClasses(e, "paddling swim1 swim2"), TimeHandler.clearClassCycle(e, "paddling"), addClass(e, "running"))), isNaN(e.xvel)
}

function playerStartRunningCycle(e) {
    e.running = TimeHandler.addSpriteCycle(e, ["one", "two", "three", "two"], "running", setPlayerRunningCycler)
}

function setPlayerRunningCycler(e) {
    e.timeout = 5 + ceil(player.maxspeedsave - abs(player.xvel))
}

function playerPaddles(e) {
    e.paddling || (removeClasses(e, "skidding paddle1 paddle2 paddle3 paddle4 paddle5"), addClass(e, "paddling"), TimeHandler.clearClassCycle(e, "paddling_cycle"), TimeHandler.addSpriteCycle(e, ["paddle1", "paddle2", "paddle3", "paddle3", "paddle2", "paddle1", function() {
        return e.paddling = !1
    }], "paddling_cycle", 5)), e.paddling = e.swimming = !0, e.yvel = -.84 * unitsize
}

function playerBubbles() {
    addThing(new Thing(Bubble), player.right, player.top)
}

function movePlayerVine(e) {
    var t = e.attached;
    if (e.bottom < t.top) return unattachPlayer(e);
    if (e.keys.run == e.attachoff) {
        for (; objectsTouch(e, t);) shiftHoriz(e, e.keys.run, !0);
        return unattachPlayer(e)
    }
    if (e.keys.up) e.animatednow = !0, shiftVert(e, -1 * unitsized4, !0);
    else if (e.keys.crouch) {
        if (e.animatednow = !0, shiftVert(e, unitsized2, !0), e.bottom > t.bottom - unitsizet4) return unattachPlayer(e)
    } else e.animatednow = !1;
    e.animatednow && !e.animated ? addClass(e, "animated") : !e.animatednow && e.animated && removeClass(e, "animated"), e.animated = e.animatednow, e.bottom < -16 && (locMovePreparations(e), !t.locnum && map.random ? goToTransport(["Random", "Sky", "Vine"]) : shiftToLocation(t.locnum))
}

function unattachPlayer(e) {
    e.movement = movePlayer, removeClasses(e, "climbing", "animated"), TimeHandler.clearClassCycle(e, "climbing"), e.yvel = e.skipoverlaps = e.attachoff = e.nofall = e.climbing = e.attached = e.attached.attached = !1, e.xvel = e.keys.run
}

function playerHopsOff(e, t, n) {
    removeClasses(e, "climbing running"), addClass(e, "jumping"), e.piping = e.nocollide = e.nofall = e.climbing = !1, e.gravity = gravity / 4, e.xvel = 3.5, e.yvel = -3.5, TimeHandler.addEvent((function(e) {
        unflipHoriz(e), e.gravity = gravity, e.movement = movePlayer, e.attached = !1, n && (addClass(e, "running"), playerStartRunningCycle(e))
    }), 21, e)
}

function playerFires() {
    if (!(player.numballs >= 2)) {
        ++player.numballs, addClass(player, "firing");
        var e = new Thing(FireBall, player.moveleft, !0);
        e.yvel = unitsize, addThing(e, player.right + unitsized4, player.top + unitsizet8), player.moveleft && setRight(e, player.left - unitsized4, !0), e.animate(e), e.ondelete = fireDeleted, TimeHandler.addEvent((function(e) {
            removeClass(e, "firing")
        }), 7, player)
    }
}

function emergeFire(e) {
    AudioPlayer.play("Fireball")
}

function playerStar(e) {
    e.star || (++e.star, AudioPlayer.play("Powerup"), AudioPlayer.playTheme("Star", !0), TimeHandler.addEvent(playerRemoveStar, 560, e), switchClass(e, "normal", "star"), TimeHandler.addSpriteCycle(e, ["star1", "star2", "star3", "star4"], "star", 5))
}

function playerRemoveStar(e) {
    e.star && (--e.star, removeClasses(e, "star star1 star2 star3 star4"), TimeHandler.clearClassCycle(e, "star"), addClass(e, "normal"), AudioPlayer.playTheme())
}

function killPlayer(e, t) {
    if (e.alive && !e.flickering && !e.dying) {
        if (2 == t) notime = !0, e.dead = e.dying = !0;
        else {
            if (!t && e.power > 1) return AudioPlayer.play("Power Down"), e.power = 1, storePlayerStats(), playerGetsSmall(e);
            2 != t && (TimeHandler.clearAllCycles(e), setSize(e, 7.5, 7, !0), updateSize(e), setClass(e, "character player dead"), nokeys = notime = e.dying = !0, thingStoreVelocity(e), containerForefront(e, characters), TimeHandler.addEvent((function(e) {
                thingRetrieveVelocity(e, !0), e.nocollide = !0, e.movement = e.resting = !1, e.gravity = gravity / 2.1, e.yvel = -1.4 * unitsize
            }), 7, e))
        }
        AudioPlayer.pause(), window.editing || AudioPlayer.play("Player Dies"), e.nocollide = e.nomove = nokeys = 1, --data.lives.amount, map.random || (data.score.amount = data.scoreold), window.editing ? setTimeout((function() {
            editorSubmitGameFuncPlay(), editor.playing = editor.playediting = !0
        }), 35 * timer) : !map.random || data.lives.amount <= 0 ? window.reset = setTimeout(data.lives.amount ? setMap : gameOver, 280 * timer) : (nokeys = notime = !1, updateDataElement(data.score), updateDataElement(data.lives), TimeHandler.addEvent((function() {
            playerDropsIn(), AudioPlayer.playTheme()
        }), 117))
    }
}

function playerDropsIn() {
    clearOldPlayer(), placePlayer(unitsizet16, -1 * unitsizet8 + map.underwater * unitsize * 24), flicker(player), map.underwater ? player.gravity = gravity / 2.8 : (player.nocollide = !0, TimeHandler.addEvent((function() {
        player.nocollide = !1, addThing(new Thing(RestingStone), player.left, player.bottom + player.yvel)
    }), map.respawndist || 17))
}

function gameOver() {
    gameon = !1, pause(), AudioPlayer.pauseTheme(), AudioPlayer.play("Game Over");
    var e = "<div style='font-size:49px;padding-top: " + (innerHeight / 2 - 28) + "px'>GAME OVER</div>";
    e += "</p>", body.className = "Night", body.innerHTML = e, window.gamecount = 1 / 0, clearPlayerStats(), setTimeout(gameRestart, 7e3)
}

function gameRestart() {
    seedlast = .007, body.style.visibility = "hidden", body.innerHTML = body.style.paddingTop = body.style.fontSize = "", body.appendChild(canvas), gameon = !0, map.random ? setMapRandom() : setMap(1, 1), TimeHandler.addEvent((function() {
        body.style.visibility = ""
    })), setLives(3)
}

function Floor(e, t, n) {
    e.width = 8 * (t || 1), e.height = 8 * n || unitsizet32, e.spritewidth = 8, e.spriteheight = 8, e.repeat = !0, setSolid(e, "floor")
}

function Clouds(e, t) {
    e.width = 8 * t, e.height = 8, setSolid(e, "clouds")
}

function Brick(e, t) {
    if (e.width = e.height = 8, e.used = !1, e.bottomBump = brickBump, t)
        if (t instanceof Array)
            for (e.contents = t; e.contents.length < 3;) e.contents.push(!1);
        else e.contents = [t, !1, !1];
    else e.contents = !1;
    e.death = killNormal, setSolid(e, "brick unused"), e.tolx = 1
}

function brickBump(e, t) {
    if (!e.up && "player" == t.type && (AudioPlayer.play("Bump"), !e.used)) {
        if (e.up = t, t.power > 1 && !e.contents) return TimeHandler.addEvent(brickBreak, 2, e, t);
        blockBumpMovement(e), e.contents && (player.power > 1 && e.contents[0] == Mushroom && !e.contents[1] && (e.contents[0] = FireFlower), TimeHandler.addEvent((function(e) {
            var t = e.contents,
                n = new Thing(t[0], t[1], t[2]);
            addThing(n, e.left, e.top), setMidXObj(n, e, !0), n.blockparent = e, n.animate(n, e), e.contents[0] == Coin ? (e.lastcoin && makeUsedBlock(e), TimeHandler.addEvent((function(e) {
                e.lastcoin = !0
            }), 245, e)) : makeUsedBlock(e)
        }), 7, e))
    }
}

function makeUsedBlock(e) {
    e.used = !0, switchClass(e, "unused", "used")
}

function brickBreak(e, t) {
    AudioPlayer.play("Break Block"), score(e, 50), e.up = t, TimeHandler.addEvent(placeShards, 1, e), killNormal(e)
}

function placeShards(e) {
    for (var t, n = 0; n < 4; ++n) addThing(t = new Thing(BrickShard), e.left + (n < 2) * e.width * unitsize - unitsizet2, e.top + n % 2 * e.height * unitsize - unitsizet2), t.xvel = unitsized2 - unitsize * (n > 1), t.yvel = -1.4 * unitsize + n % 2, TimeHandler.addEvent(killNormal, 350, t)
}

function BrickShard(e) {
    e.width = e.height = 4, e.nocollide = !0, e.death = killNormal, setCharacter(e, "brickshard"), TimeHandler.addSpriteCycle(e, [unflipHoriz, flipHoriz])
}

function attachEmerge(e, t) {
    e.animate = setInterval((function() {
        setBottom(e, t.top, !0), t.up || (clearInterval(e.animate), e.animate = !1)
    }), timer)
}

function Block(e, t, n) {
    if (e.width = e.height = 8, e.used = !1, e.bottomBump = blockBump, t)
        if (t instanceof Array)
            for (e.contents = t; e.contents.length < 3;) e.contents.push(!1);
        else e.contents = [t, !1, !1];
    else e.contents = [Coin];
    e.death = killNormal, setSolid(e, "Block unused"), e.hidden = !!n && (e.hidden = e.skipoverlaps = !0), e.tolx = 1, TimeHandler.addSpriteCycleSynched(e, ["one", "two", "three", "two", "one"])
}

function blockBump(e, t) {
    "player" == t.type && (e.used ? AudioPlayer.play("Bump") : (e.used = 1, e.hidden = e.hidden = e.skipoverlaps = !1, e.up = t, blockBumpMovement(e), removeClass(e, "hidden"), switchClass(e, "unused", "used"), player.power > 1 && e.contents[0] == Mushroom && !e.contents[1] && (e.contents[0] = FireFlower), TimeHandler.addEvent(blockContentsEmerge, 7, e)))
}

function blockContentsEmerge(e) {
    var t = new Thing(e.contents[0], e.contents[1], e.contents[2]);
    addThing(t, e.left, e.top), setMidXObj(t, e, !0), t.blockparent = e, t.animate(t, e)
}

function Pipe(e, t, n) {
    e.width = e.spritewidth = 16, e.height = 8 * (t || 1), !1 !== n && (e.actionTop = intoPipeVert, e.transport = n), setSolid(e, "pipe")
}

function PipeSide(e, t, n) {
    e.width = e.spritewidth = n ? 8 : 19.5, e.height = e.spriteheight = 16, t && (e.actionLeft = intoPipeHoriz, e.transport = t), setSolid(e, "pipe side " + (n ? "small" : ""))
}

function PipeVertical(e, t) {
    e.spritewidth = e.width = 16, e.spriteheight = e.repeat = 1, e.height = t, setSolid(e, "pipe vertical")
}

function Vine(e, t) {
    e.width = e.spriteheight = 7, e.height = 0, e.locnum = t, e.nocollide = e.nofall = e.repeat = !0, e.animate = vineEmerge, e.movement = vineMovement, setCharacter(e, "vine")
}

function vineEmerge(e, t) {
    AudioPlayer.play("Vine Emerging"), setHeight(e, 0), e.movement = vineMovement, TimeHandler.addEvent(vineEnable, 14, e), TimeHandler.addEventInterval(vineStay, 1, 14, e, t)
}

function vineStay(e, t) {
    setBottom(e, t.top)
}

function vineEnable(e) {
    e.nocollide = !1, e.collide = touchVine
}

function vineMovement(e) {
    increaseHeightTop(e, unitsized4), e.attached && shiftVert(e.attached, -unitsized4, !0)
}

function touchVine(e, t) {
    !e.player || e.attached || e.climbing || e.bottom > t.bottom + unitsizet2 || (t.attached = e, e.attached = t, e.nofall = e.skipoverlaps = !0, e.xvel = e.yvel = e.resting = e.jumping = e.jumpcount = e.running = 0, e.attachleft = !objectToLeft(e, t), e.attachoff = 2 * e.attachleft - 1, e.movementsave = e.movement, e.movement = movePlayerVine, e.keys = new Keys, TimeHandler.clearClassCycle(e, "running"), removeClass(e, "running skidding"), unflipHoriz(e), e.attachleft && flipHoriz(e), addClass(e, "climbing"), e.climbing = TimeHandler.addSpriteCycle(e, ["one", "two"], "climbing"), lookTowardThing(e, t), e.attachleft ? setLeft(e, t.right - unitsizet4) : setRight(e, t.left + unitsizet4))
}

function Springboard(e) {
    e.width = 8, e.height = e.heightnorm = 14.5, e.tension = e.tensionsave = 0, e.dir = 1, e.collide = collideSpring, setSolid(e, "springboard")
}

function collideSpring(e, t) {
    return e.yvel >= 0 && e.player && !t.tension && characterOnSolid(e, t) ? springPlayerInit(t, e) : characterTouchedSolid(e, t)
}

function springPlayerInit(e, t) {
    e.tension = e.tensionsave = max(.77 * t.yvel, unitsize), t.movement = movePlayerSpringDown, t.spring = e, t.xvel /= 2.8
}

function movePlayerSpringDown(e) {
    return objectsTouch(e, e.spring) ? e.spring.height < 2.5 * unitsize || e.spring.tension < unitsized32 ? (e.movement = movePlayerSpringUp, void(e.spring.movement = moveSpringUp)) : ((e.left < e.spring.left + unitsizet2 || e.right > e.spring.right - unitsizet2) && (e.xvel /= 1.4), reduceSpringHeight(e.spring, e.spring.tension), setBottom(e, e.spring.top, !0), e.spring.tension /= 2, void updateSize(e.spring)) : (e.movement = movePlayer, e.spring.movement = moveSpringUp, void(e.spring = !1))
}

function movePlayerSpringUp(e) {
    if (!e.spring || !objectsTouch(e, e.spring)) return e.spring = !1, void(e.movement = movePlayer)
}

function moveSpringUp(e) {
    reduceSpringHeight(e, -e.tension), e.tension *= 2, e == player.spring && setBottom(player, e.top, !0), e.height > e.heightnorm && (e == player.spring && (player.yvel = max(-unitsizet2, -.98 * e.tensionsave), player.resting = player.spring = !1), reduceSpringHeight(e, (e.height - e.heightnorm) * unitsize), e.tension = e.tensionsave = e.movement = !1)
}

function reduceSpringHeight(e, t) {
    reduceHeight(e, t, !0)
}

function Stone(e, t, n) {
    e.width = 8 * t || 8, e.height = 8 * n || 8, e.repeat = !0, setSolid(e, "Stone")
}

function GenericStone(e, t, n) {
    return Stone(e, t, n)
}

function RestingStone(e) {
    e.width = e.height = 8, e.used = !1, e.movement = RestingStoneUnused, setSolid(e, "Stone hidden"), e.title = "Stone"
}

function RestingStoneUnused(e) {
    if (player.resting) {
        if (player.resting != e) return killNormal(e);
        e.movement = RestingStoneUsed, removeClass(e, "hidden"), setThingSprite(player)
    }
}

function RestingStoneUsed(e) {
    if (!player.resting) return killNormal(e)
}

function CastleBlock(e, t, n) {
    e.width = e.height = 8;
    var x, r, i = !1;
    t instanceof Array ? (x = t[0], r = t[1], i = n) : (x = t, r = n), setSolid(e, i ? "castleblockinvis" : "castleblock"), x && (e.balls = new Array(x), e.dt = .07 * (r ? 1 : -1), e.timeout = round(7 / (abs(r) || 1)), e.movement = castleBlockSpawn, e.timer = e.counter = 0, e.angle = .25, e.spawn_as_char = !0)
}

function castleBlockSpawn(e) {
    for (var t = 0; t < e.balls.length; ++t) {
        spawn = new Thing(CastleFireBall, 4 * t);
        var n = e.width * unitsized4,
            x = e.left + n,
            r = e.top + n;
        e.balls[t] = addThing(spawn, x + t * unitsize * 3, r + t * unitsize * 3)
    }
    e.movement = !1;
    abs(e.dt);
    TimeHandler.addEventInterval(castleBlockEvent, e.timeout, 1 / 0, e)
}

function castleBlockEvent(e) {
    e.midx = e.left, e.midy = e.top, e.counter = 0, e.angle += e.dt;
    for (var t = 1; t < e.balls.length; ++t) setMidX(e.balls[t], e.midx + t * unitsizet4 * Math.cos(e.angle * Math.PI), !0), setMidY(e.balls[t], e.midy + t * unitsizet4 * Math.sin(e.angle * Math.PI), !0)
}

function CastleFireBall(e, t) {
    e.width = e.height = 4, e.deadly = e.nofire = e.nocollidechar = e.nocollidesolid = e.nofall = e.nostar = e.outerok = e.skipoverlaps = !0, e.movement = !1, e.collide = collideEnemy, setCharacter(e, "fireball castle"), TimeHandler.addSpriteCycle(e, ["one", "two", "three", "four"], 4)
}

function CastleBridge(e, t) {
    e.height = 8, e.width = 8 * t || 4, e.spritewidth = 4, e.repeat = !0, setSolid(e, "CastleBridge")
}

function CastleChain(e) {
    e.height = 8, e.width = e.spritewidth = 7.5, e.nocollide = !0, setSolid(e, "castlechain")
}

function CastleAxe(e) {
    e.width = e.height = 8, e.spritewidth = e.spriteheight = 8, e.nocollide = !0, setSolid(e, "castleaxe"), TimeHandler.addSpriteCycle(e, ["one", "two", "three", "two"])
}

function CastleAxeFalls(e, t) {
    var n = t.axe;
    !e.player || e.right < n.left + unitsize || e.bottom > n.bottom - unitsize || (killNormal(n), killNormal(t), notime = nokeys = !0, thingStoreVelocity(e), killOtherCharacters(), TimeHandler.addEvent(killNormal, 7, n.chain), TimeHandler.addEvent(CastleAxeKillsBridge, 14, n.bridge, n), AudioPlayer.pauseTheme(), AudioPlayer.playTheme("World Clear", !1, !1))
}

function CastleAxeKillsBridge(e, t) {
    e.width -= 2, e.right -= unitsizet2, e.width > 0 ? TimeHandler.addEvent(CastleAxeKillsBridge, 1, e, t) : (e.width = 0, TimeHandler.addEvent(CastleAxeKillsBowser, 1, t.bowser)), setWidth(e, e.width)
}

function CastleAxeKillsBowser(e) {
    e.nofall = !1, e.nothrow = !0, ++player.star, TimeHandler.addEvent(CastleAxeContinues, 35, player)
}

function CastleAxeContinues(e) {
    map.canscroll = !0, startWalking(e)
}

function Toad(e) {
    e.width = 16, e.height = e.spriteheight = 12, e.group = "toad", setSolid(e, "toad npc")
}

function Peach(e) {
    e.width = 16, e.height = e.spriteheight = 12, e.group = "peach", setSolid(e, "peach npc")
}

function collideCastleNPC(e, t) {
    killNormal(t), e.keys.run = 0, TimeHandler.addEvent((function(e) {
        var t;
        for (t = 0; t < e.length; ++t) TimeHandler.addEvent(proliferate, 70 * t, e[t].element, {
            style: {
                visibility: "visible"
            }
        });
        TimeHandler.addEvent(endLevel, 70 * (t + 3))
    }), 21, t.text)
}

function TreeTop(e, t) {
    e.width = 8 * t, e.height = 8, e.repeat = !0, setSolid(e, "treetop")
}

function ShroomTop(e, t) {
    e.width = 8 * t, e.height = 8, e.repeat = !0, setSolid(e, "shroomtop")
}

function Platform(e, t, n) {
    e.width = 4 * (t || 4), e.height = 4, e.spritewidth = 4, e.moving = 0, e.repeat = e.killonend = !0, "function" == typeof n && (n = [n]), n instanceof Array && (e.movement = n[0], e.begin = n[1] * unitsize, e.end = n[2] * unitsize, e.maxvel = (n[3] || 1.5) * unitsized4, e.movement == moveFloating || e.movement == movePlatformSpawn ? e.yvel = e.maxvel : e.xvel = e.maxvel, e.changing = 0), e.movement == collideTransport && (e.movement = !1, e.collide = collideTransport), setSolid(e, "platform")
}

function PlatformGenerator(e, t, n) {
    e.width = 4 * t, e.interval = 35, e.height = 6 * e.interval, e.dir = n, e.nocollide = e.hidden = !0, e.movement = PlatformGeneratorInit, setSolid(e, "platformgenerator")
}

function PlatformGeneratorInit(e) {
    for (var t = 0, n = e.interval, x = e.height; t < x; t += n) e.platlast = new Thing(Platform, e.width / 4, [movePlatformSpawn, 0, 0, 1.5]), e.platlast.yvel *= e.dir, 1 == e.dir ? addThing(e.platlast, e.left, e.top + t * unitsize) : addThing(e.platlast, e.left, e.bottom - t * unitsize), e.platlast.parent = e, t += e.interval;
    e.movement = !1
}

function movePlatformSpawn(e) {
    e.bottom < e.parent.top ? (setBottom(e, e.parent.bottom), detachPlayer(e)) : e.top > e.parent.bottom ? (setTop(e, e.parent.top), detachPlayer(e)) : movePlatformNorm(e)
}

function movePlatformNorm(e) {
    shiftHoriz(e, e.xvel), shiftVert(e, e.yvel), e == player.resting && e.alive && (setBottom(player, e.top), shiftHoriz(player, e.xvel), player.right > innerWidth && setRight(player, innerWidth))
}

function detachPlayer(e) {
    player.resting == e && (player.resting = !1)
}

function Scale(e, t, n) {
    e.height = 5, e.width = 4 * t, e.spritewidth = e.spriteheight = 5, e.repeat = e.nocollide = !0, setSolid(e, "scale")
}

function Flag(e) {
    e.width = e.height = 8, e.nocollide = !0, setSolid(e, "flag")
}

function FlagPole(e) {
    e.width = 1, e.height = 72, e.nocollide = e.repeat = !0, setSolid(e, "flagpole")
}

function FlagTop(e) {
    e.spritewidth = e.spriteheight = e.width = e.height = 4, e.nocollide = !0, setSolid(e, "flagtop")
}

function FlagDetector(e) {
    e.width = 2, e.height = 100, e.collide = FlagCollision, setSolid(e, "flagdetector"), e.hidden = !0
}

function CastleDoorDetector(e) {
    e.width = e.height = 4, e.collide = endLevelPoints, setSolid(e, "castledoor"), e.hidden = !0
}

function FlagCollision(e, t) {
    if (!e || !e.player) return killNormal(e);
    window.detector = t, AudioPlayer.pause(), AudioPlayer.play("Flagpole"), killOtherCharacters(), nokeys = notime = player.nofall = 1, player.xvel = player.yvel = player.keys.up = player.keys.jump = map.canscroll = map.ending = player.movement = 0, player.nocollidechar = !0, setRight(e, t.pole.left, !0), removeClasses(e, "running jumping skidding"), addClass(e, "climbing animated"), updateSize(e), TimeHandler.addSpriteCycle(e, ["one", "two"], "climbing"), playerRemoveStar(player);
    var n = !1,
        x = !1,
        r = (t.stone.top - e.bottom) / unitsize,
        i = setInterval((function() {
            n || (e.bottom >= t.stone.top ? (scorePlayerFlag(r, t.stone), n = !0, setBottom(e, t.stone.top, !0), removeClass(player, "animated"), TimeHandler.clearClassCycle(player, "climbing")) : shiftVert(e, unitsize, !0)), x || (t.flag.bottom >= t.stone.top ? (x = !0, setBottom(t.flag, t.stone.top, !0)) : shiftVert(t.flag, unitsize, !0)), n && x && (setBottom(e, t.stone.top, !0), clearInterval(i), setTimeout((function() {
                FlagOff(e, t.pole)
            }), 21 * timer)), refillCanvas()
        }), timer)
}

function scorePlayerFlag(e, t) {
    var n;
    n = e < 28 ? e < 8 ? 100 : 400 : e < 40 ? 800 : e < 62 ? 2e3 : 5e3, score(player, n, !0)
}

function FlagOff(e, t) {
    player.keys.run = notime = nokeys = 1, player.maxspeed = player.walkspeed, flipHoriz(e), TimeHandler.clearClassCycle(e, "climbing"), setLeft(e, t.right, !0), setTimeout((function() {
        AudioPlayer.play("Stage Clear"), playerHopsOff(e, t, !0)
    }), 14 * timer)
}

function endLevelPoints(e, t) {
    if (e && e.player) {
        notime = nokeys = !0, killNormal(t), killNormal(e);
        var n = parseInt(getLast(String(data.time.amount)));
        1 != n && 3 != n && 6 != n && (n = 0);
        var x = setInterval((function() {
            --data.time.amount, data.score.amount += 50, updateDataElement(data.score), updateDataElement(data.time), AudioPlayer.play("Coin"), data.time.amount <= 0 && (clearInterval(x), setTimeout((function() {
                endLevelFireworks(e, n, t)
            }), 49 * timer))
        }), timer)
    }
}

function endLevelFireworks(e, t, n) {
    var x, r, i = 0;
    if (t) {
        for (var a = n.left + 32 * unitsized2; i < t;) explodeFirework(++i, a);
        x = timer * (i + 2) * 42
    } else x = 0;
    r = function() {
        setTimeout((function() {
            endLevel()
        }), x)
    }, AudioPlayer.addEventImmediate("Stage Clear", "ended", (function() {
        TimeHandler.addEvent(r, 35)
    }))
}

function explodeFirework(e, t) {
    setTimeout((function() {
        var n = new Thing(Firework, e);
        addThing(n, t + n.locs[0] - 6 * unitsize, unitsizet16 + n.locs[1]), n.animate()
    }), timer * e * 42)
}

function Firework(e, t) {
    if (e.width = e.height = 8, e.nocollide = e.nofire = e.nofall = !0, t) switch (t) {
        case 1:
            e.locs = [unitsizet16, unitsizet16];
            break;
        case 2:
            e.locs = [-unitsizet16, unitsizet16];
            break;
        case 3:
            e.locs = [2 * unitsizet16, 2 * unitsizet16];
            break;
        case 4:
            e.locs = [-2 * unitsizet16, 2 * unitsizet16];
            break;
        case 5:
            e.locs = [0, 1.5 * unitsizet16];
            break;
        default:
            e.locs = [0, 0]
    }
    e.animate = function() {
        var t = e.className + " n";
        e.locs && AudioPlayer.play("Firework"), TimeHandler.addEvent((function(e) {
            setClass(e, t + 1)
        }), 0, e), TimeHandler.addEvent((function(e) {
            setClass(e, t + 2)
        }), 7, e), TimeHandler.addEvent((function(e) {
            setClass(e, t + 3)
        }), 14, e), TimeHandler.addEvent((function(e) {
            killNormal(e)
        }), 21, e)
    }, setCharacter(e, "firework"), score(e, 500)
}

function Coral(e, t) {
    e.width = 8, e.height = 8 * t, e.repeat = !0, setSolid(e, "coral")
}

function BridgeBase(e, t) {
    e.height = 4, e.spritewidth = 4, e.width = 8 * t, e.repeat = !0, setSolid(e, "bridge-base")
}

function WarpWorld(e) {
    e.width = 106, e.height = 88, e.movement = setWarpWorldInit, e.collide = enableWarpWorldText, e.pirhanas = [], e.pipes = [], e.texts = [], e.hidden = !0, setSolid(e, "warpworld")
}

function setWarpWorldInit(e) {
    shiftHoriz(e, e.width * unitsized2), e.width /= 2, updateSize(e), e.movement = !1
}

function enableWarpWorldText(e, t) {
    var n, x = t.pirhanas,
        r = t.texts;
    for (n in x) x[n].death();
    for (n in r) r[n].element.style.visibility = "";
    killNormal(t)
}

function resetScenery() {
    window.Scenery = {
        sprites: {
            BrickHalf: [8, 4],
            BrickPlain: [8, 8],
            Bush1: [16, 8],
            Bush2: [24, 8],
            Bush3: [32, 8],
            Castle: [75, 88],
            CastleDoor: [8, 20],
            CastleRailing: [8, 4],
            CastleRailingFilled: [8, 4],
            CastleTop: [12, 12],
            CastleWall: [8, 48],
            Cloud1: [16, 12],
            Cloud2: [24, 12],
            Cloud3: [32, 12],
            HillSmall: [24, 9.5],
            HillLarge: [40, 17.5],
            Fence: [8, 8],
            Pirhana: [8, 12],
            pirhana: [8, 12],
            PlantSmall: [7, 15],
            PlantLarge: [8, 23],
            Railing: [4, 4],
            ShroomTrunk: [8, 8],
            String: [1, 1],
            TreeTrunk: [8, 8],
            Water: {
                0: 4,
                1: 5,
                spriteCycle: ["one", "two", "three", "four"]
            },
            WaterFill: [4, 5]
        },
        patterns: {
            backreg: [
                ["HillLarge", 0, 0],
                ["Cloud1", 68, 68],
                ["Bush3", 92, 0],
                ["HillSmall", 128, 0],
                ["Cloud1", 156, 76],
                ["Bush1", 188, 0],
                ["Cloud3", 220, 68],
                ["Cloud2", 292, 76],
                ["Bush2", 332, 0],
                ["Blank", 384]
            ],
            backcloud: [
                ["Cloud2", 28, 64],
                ["Cloud1", 76, 32],
                ["Cloud2", 148, 72],
                ["Cloud1", 228, 0],
                ["Cloud1", 284, 32],
                ["Cloud1", 308, 40],
                ["Cloud1", 372, 0],
                ["Blank", 384]
            ],
            backcloudmin: [
                ["Cloud1", 68, 68],
                ["Cloud1", 156, 76],
                ["Cloud3", 220, 68],
                ["Cloud2", 292, 76],
                ["Blank", 384]
            ],
            backfence: [
                ["PlantSmall", 88, 0],
                ["PlantLarge", 104, 0],
                ["Fence", 112, 0, 4],
                ["Cloud1", 148, 68],
                ["PlantLarge", 168, 0],
                ["PlantSmall", 184, 0],
                ["PlantSmall", 192, 0],
                ["Cloud1", 220, 76],
                ["Cloud2", 244, 68],
                ["Fence", 304, 0, 2],
                ["PlantSmall", 320, 0],
                ["Fence", 328, 0],
                ["PlantLarge", 344, 0],
                ["Cloud1", 364, 76],
                ["Cloud2", 388, 68],
                ["Blank", 384]
            ],
            backfencemin: [
                ["PlantLarge", 104, 0],
                ["Fence", 112, 0, 4],
                ["Cloud1", 148, 68],
                ["PlantLarge", 168, 0],
                ["PlantSmall", 184, 0],
                ["PlantSmall", 192, 0],
                ["Cloud1", 220, 76],
                ["Cloud2", 244, 68],
                ["Fence", 304, 0, 2],
                ["PlantSmall", 320, 0],
                ["Fence", 328, 0],
                ["Cloud1", 364, 76],
                ["Cloud2", 388, 68],
                ["Blank", 384]
            ],
            backfencemin2: [
                ["Cloud2", 4, 68],
                ["PlantSmall", 88, 0],
                ["PlantLarge", 104, 0],
                ["Fence", 112, 0, 1],
                ["Fence", 128, 0, 2],
                ["Cloud1", 148, 68],
                ["PlantSmall", 184, 0],
                ["PlantSmall", 192, 0],
                ["Cloud1", 220, 76],
                ["Cloud2", 244, 68],
                ["Fence", 304, 0, 2],
                ["PlantSmall", 320, 0],
                ["Fence", 328, 0],
                ["PlantLarge", 344, 0],
                ["Cloud1", 364, 76],
                ["Cloud2", 388, 68],
                ["Blank", 384]
            ],
            backfencemin3: [
                ["Cloud2", 4, 68],
                ["PlantSmall", 88, 0],
                ["PlantLarge", 104, 0],
                ["Fence", 112, 0, 4],
                ["Cloud1", 148, 68],
                ["PlantSmall", 184, 0],
                ["PlantSmall", 192, 0],
                ["Cloud1", 220, 76],
                ["Cloud2", 244, 68],
                ["Cloud1", 364, 76],
                ["Cloud2", 388, 68],
                ["Blank", 384]
            ]
        }
    }, processSceneryPatterns(Scenery.patterns)
}

function processSceneryPatterns(e) {
    var t, n;
    for (n in e)(t = e[n]).length && (t.width = t[t.length - 1][1], t.pop())
}

function SceneryBlocker(e, t, n) {
    e.width = t || 8, e.height = n || 8, e.nocollide = e.hidden = !0, setSolid(e, "sceneryblocker")
}

function Sprite(e, t, n) {
    n || (n = [1, 1]);
    var x = e.template = Scenery.sprites[t];
    x ? (e.width = (e.spritewidth = x[0]) * (n[0] || 1), e.height = (e.spriteheight = x[1]) * (n[1] || 1), e.unitwidth = e.spritewidth * unitsize, e.unitheight = e.spriteheight * unitsize, e.nocollide = e.maxquads = 1, e.repeat = !0, setScenery(e, "scenery " + t), e.title = t, x.spriteCycleTimer && TimeHandler.addSpriteCycle(e, spriteCycleTimer, spriteCycleTimer || void 0)) : log("No sprite template found for", t)
}

function LocationShifter(e, t, n) {
    e.loc = t, e.width = n[0], e.height = n[1], e.collide = collideLocationShifter, e.hidden = !0, setSolid(e, "blue")
}

function collideLocationShifter(e, t) {
    e.player && (t.nocollide = player.piping = !0, TimeHandler.addEvent((function(e) {
        shiftToLocation(t.loc), map.random && entryRandom(e)
    }), 1, e))
}

function ScrollBlocker(e, t) {
    e.width = 40, e.height = 140, e.nocollide = e.hidden = !0, e.big = t, e.movement = function() {
        e.left - player.xvel <= gamescreen.right - gamescreen.left && (map.canscroll = e.movement = !1, map.noscroll = e.big)
    }, setSolid(e, "scrollblocker")
}

function ScrollEnabler(e) {
    e.width = 40, e.height = 140, e.hidden = !0, e.collide = function() {
        e.left - player.xvel <= gamescreen.right - gamescreen.left && (map.canscroll = e.nocollide = !0)
    }, setSolid(e, "scrollenabler")
}

function zoneToggler(e, t) {
    e.width = 40, e.height = 140, e.func = t, e.hidden = !0, e.collide = function(e, t) {
        t.func(), t.nocollide = !0
    }, setSolid(e, "zonetoggler " + t.name)
}

function GenerationStarter(e, t, n) {
    e.width = 8, e.height = gamescreen.height + 20, e.func = t, e.arg = n, e.collide = function(e, t) {
        if ("player" != e.type) return !1;
        spawnMap(), killNormal(t)
    }, e.movement = function(e) {
        e.movement = !1, addClass(e, "used"), e.func((gamescreen.left + e.right) / unitsize, e.arg)
    }, setSolid(e, "generationstarter"), e.hidden = !0
}

function castleDecider(e, t, n) {
    e.height = ceilmax, e.width = 10, e.nocollide = !0, e.xloc = t, e.section = map.area.sections[n], e.next = map.area.sections[n + 1], e.movement = function(e) {
        if (!(e.left > gamescreen.right - gamescreen.left) && e.section.activated) {
            var t = e.section;
            t.numpass = t.colliders.length = 0, t.passed ? (++map.area.sections.current, e.next(e.xloc)) : t(e.xloc), t.activated = t.passed = !1, spawnMap(), killNormal(e)
        }
    }, setSolid(e, "decider blue " + n), e.hidden = !0
}

function FuncCollider(e, t, n) {
    n ? (e.width = n[0], e.height = n[1]) : (e.width = 8, e.height = ceilmax + 40), e.collide = t, e.hidden = !0, setSolid(e, "funccollider blue " + t.name)
}

function FuncSpawner(e, t, n) {
    e.width = 8, e.height = 8, e.movement = function() {
        t(e, n)
    }, e.argument = n, e.nocollide = e.hidden = !0, setSolid(e, "funccollider blue " + t.name)
}

function Collider(e, t, n) {
    e.width = t[0], e.height = t[1], n instanceof Array ? (e.func = n[0] || function() {}, e.movement = n[1] || function() {}) : (e.func = n || function() {}, e.movement = !1), e.collide = function(e, t) {
        if (!e.player) return !1;
        t.func(e, t)
    }, setSolid(e, "collider blue " + e.func.name), e.hidden = !0
}

function TonedJS(e) {
    var t = {
        giveSup: function(e, t) {
            for (var n in t = t || {}, e) t[n] = e[n];
            return t
        },
        giveSub: function(e, t) {
            for (var n in t = t || {}, e) t.hasOwnProperty(n) || (t[n] = e[n]);
            return t
        },
        proliferate: function(e, t, n) {
            var x, r;
            for (r in t) n && e.hasOwnProperty(r) || ("object" == typeof(x = t[r]) && null != x ? (e.hasOwnProperty(r) || (e[r] = x instanceof Array ? [] : {}), proliferate(e[r], x, n)) : e[r] = x);
            return e
        },
        getFirst: function(e, t) {
            for (var n in e) return t ? n : e[n]
        },
        getLast: function(e, t) {
            for (var n in e);
            return t ? n : e[n]
        },
        followPath: function(e, t, n) {
            return null != t[n] && null != e[t[n]] ? followPath(e[t[n]], t, ++n) : e
        },
        createElement: function(e) {
            for (var t = document.createElement(e || "div"), n = arguments.length; --n > 0;) proliferate(t, arguments[n]);
            return t
        },
        classAdd: function(e, t) {
            e.className += " " + t
        },
        classRemove: function(e, t) {
            e.className = e.className.replace(new RegExp(" " + t, "gm"), "")
        },
        elementSetPosition: function(e, t, n) {
            null == t && (t = e.left), null == n && (n = e.top), proliferate(e, {
                left: t,
                top: n,
                style: {
                    marginLeft: t + "px",
                    marginTop: n + "px"
                }
            })
        },
        elementShiftLeft: function(e, t) {
            e.left || (e.left = Number(e.style.marginLeft.replace("px", ""))), e.style.marginLeft = round(e.left += t) + "px"
        },
        elementShiftTop: function(e, t) {
            e.top || (e.top = Number(e.style.marginLeft.replace("px", ""))), e.style.marginTop = round(e.top += t) + "px"
        },
        removeChildSafe: function(e, t) {
            e && (t = t || document.body).contains(e) && t.removeChild(e)
        },
        findParentOfType: function(e, t) {
            var n = e.parentElement;
            return n && n.nodeName != t ? findParentType(n, t) : n
        },
        clearAllTimeouts: function() {
            for (var e = setTimeout((function() {})); e--;) clearTimeout(e)
        },
        stringTrim: function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        stringOf: function(e, t) {
            return 0 == t ? "" : new Array(1 + (t || 1)).join(e)
        },
        stringHas: function(e, t) {
            return -1 != e.indexOf(t)
        },
        stringHasI: function(e, t) {
            return -1 != e.toLowerCase().indexOf(t.toLowerCase())
        },
        capitalizeFirst: function(e, t) {
            return t = t || 1, e.substr(0, t).toUpperCase() + e.substr(t).toLowerCase()
        },
        ArrayD: function(e) {
            if (1 == arguments.length) return new Array(e);
            var t, n = arrayMake(arguments),
                x = new Array(e);
            for (n.shift(), t = e - 1; t >= 0; --t) x[t] = ArrayD.apply(this, n);
            return x
        },
        arrayOf: function(e, t) {
            t = t || 1;
            for (var n = new Array(t); t--;) n[t] = e;
            return n
        },
        arrayMake: function(e) {
            return Array.prototype.slice.call(e)
        },
        arrayRange: function(e, t) {
            for (var n = 1 + t - e, x = new Array(n), r = e, i = 0; i < n;) x[i++] = r++;
            return x
        },
        arrayShuffle: function(e, t, n) {
            t = t || 0, n = n || e.length;
            for (var x, r, i = t; i <= n; ++i) r = randInt(i + 1), x = e[i], e[i] = e[r], e[r] = x;
            return e
        },
        removeDuplicates: function(e) {
            var t, n, x, r, i, a = [];
            for (r = 0, x = e.length; r < x; ++r) {
                for (t = e[r], n = !1, i = 0; i < r; ++i)
                    if (e[i] == t) {
                        n = !0;
                        break
                    }
                n || a.push(t)
            }
            return a
        },
        makeDigit: function(e, t, n) {
            return e = String(e), stringOf(n || 0, max(0, t - e.length)) + e
        },
        roundDigit: function(e, t) {
            return Number(t ? ~~(.5 + e / t) * t : round(e))
        },
        sign: function(e) {
            return e ? e < 0 ? -1 : 1 : 0
        },
        round: function(e) {
            return ~~(.5 + e)
        },
        max: Math.max,
        min: Math.min,
        abs: Math.abs,
        pow: Math.pow,
        ceil: Math.ceil,
        floor: Math.floor,
        random: Math.random,
        randInt: function(e) {
            return floor(Math.random() * (e || 1))
        },
        signBool: function(e) {
            return e > 0
        },
        log: console.log.bind(console),
        now: Date.now
    };
    return e && t.giveSub(t, window), t
}

function resetTriggers() {
    window.controls = new Controls({
        left: [37, 65, "AXIS_LEFT", "DPAD_LEFT"],
        right: [39, 68, "AXIS_RIGHT", "DPAD_RIGHT"],
        up: [38, 87, 32, "FACE_1", "DPAD_UP", "LEFT_BOTTOM_SHOULDER"],
        down: [40, 83, "AXIS_DOWN", "DPAD_DOWN"],
        sprint: [16, 17, "FACE_1"],
        pause: [80, "START_FORWARD"],
        mute: [77],
        q: [81],
        l: [76]
    }), window.gamepad = new Gamepad, gamepad.bind(Gamepad.Event.BUTTON_DOWN, ControlsPipe("keydown", !0)), gamepad.bind(Gamepad.Event.BUTTON_UP, ControlsPipe("keyup", !1)), gamepad.bind(Gamepad.Event.AXIS_CHANGED, (function(e) {
        var t = e.value,
            n = abs(t);
        if (!(n < .1)) switch (e.axis) {
            case "LEFT_STICK_Y":
            case "RIGHT_STICK_Y":
                n > .5 ? keydown(t > 0 ? "DPAD_DOWN" : "DPAD_UP") : (keyup("DPAD_UP"), keyup("DPAD_DOWN"));
                break;
            case "LEFT_STICK_X":
            case "RIGHT_STICK_X":
                n > .5 ? keydown(t < 0 ? "DPAD_LEFT" : "DPAD_RIGHT") : (keyup("DPAD_UP"), keyup("DPAD_DOWN"))
        }
    })), gamepad.init(), proliferate(body, {
        onkeydown: ControlsPipe("keydown", !0),
        onkeyup: ControlsPipe("keyup", !1),
        oncontextmenu: contextmenu,
        onmousedown: mousedown
    }), setMessageTriggers()
}

function Controls(e, t) {
    this.pipes = e;
    var n, x, r, i, a = this.keydown = {
            left: function(e) {
                e.run = -1, e.left_down = !0
            },
            right: function(e) {
                e.run = 1, e.right_down = !0
            },
            up: function(e) {
                e.up = !0, player.canjump && (player.resting || map.underwater) && (e.jump = 1, player.canjump = e.jumplev = 0, AudioPlayer.play(player.power > 1 ? "Jump Super" : "Jump Small"), map.underwater && setTimeout((function() {
                    player.jumping = e.jump = !1
                }), 14 * timer))
            },
            down: function(e) {
                e.crouch = !0
            },
            sprint: function(e) {
                3 != player.power || 0 != e.sprint || e.crouch || player.fire(), e.sprint = 1
            },
            pause: function(e) {
                paused || window.editing && !editor.playing || setTimeout((function() {
                    pause(!0)
                }), 140)
            },
            mute: function(e) {
                AudioPlayer.toggleMute()
            },
            q: function(e) {
                switch (++qcount > 28 && maxlulz(), qcount) {
                    case 7:
                        lulz();
                        break;
                    case 14:
                        superlulz();
                        break;
                    case 21:
                        hyperlulz()
                }
            },
            l: function(e) {
                toggleLuigi()
            }
        },
        o = this.keyup = {
            left: function(e) {
                e.run = 0, e.left_down = !1
            },
            right: function(e) {
                e.run = 0, e.right_down = !1
            },
            up: function(e) {
                map.underwater || (e.jump = e.up = 0), player.canjump = !0
            },
            down: function(e) {
                e.crouch = 0, removeCrouch()
            },
            sprint: function(e) {
                e.sprint = 0
            },
            pause: function(e) {
                unpause(!0)
            }
        };
    for (n in e)
        for (i in x = e[n]) a[r = x[i]] = a[n], o[r] = o[n]
}

function ControlsPipe(e, t) {
    var n = controls[e];
    return function(x) {
        t && (player && player.dead || window.paused) || window.nokeys || (("number" != typeof x || x.which || x.control) && (x = x.which || x.control), n[x] ? n[x](player.keys) : mlog(e, "Could not", e, x), window.gamehistory[gamecount] = [keydown, x])
    }
}

function keydown(e) {
    if (!(player && player.dead || window.paused || window.nokeys)) {
        var t = controls.keydown;
        ("object" == typeof e || e.which) && (e = e.which), t[e] && t[e](player.keys), window.gamehistory[gamecount] = [keydown, e]
    }
}

function keyup(e) {
    if (!window.nokeys) {
        var t = controls.keyup;
        ("object" == typeof e || e.which) && (e = e.which), t[e] && t[e](player.keys), window.gamehistory[gamecount] = [keyup, e]
    }
}

function contextmenu(e) {
    e.preventDefault && e.preventDefault()
}

function mousedown(e) {
    3 == e.which && (paused ? unpause() : window.editor && (editing || editor.playing) || pause(!0), e.preventDefault && e.preventDefault())
}

function scriptKeys(e) {
    var t, n;
    for (t in e) n = e[t], TimeHandler.addEvent(n[0], t, n[1]), TimeHandler.addEvent((function() {
        alert(n[0].name + ", " + n[1])
    }), t)
}

function lulz(e, t) {
    player.star = !0, e = e || [Goomba], t = t || 7, TimeHandler.addEventInterval((function() {
        if (!(characters.length > 210)) {
            var t = new Thing(e[randInt(e.length)], randBoolJS(), randBoolJS());
            t.yvel = random() * -unitsizet4, t.xvel = t.speed = random() * unitsizet2 * randSign(), addThing(t, (32 * random() + 128) * unitsize, 88 * random() * unitsize)
        }
    }), t, 1 / 0)
}

function superlulz() {
    lulz([Goomba, Koopa, Beetle, HammerBro, Lakitu, Podoboo, Blooper])
}

function hyperlulz() {
    lulz([Bowser], 21)
}

function maxlulz() {
    TimeHandler.addEventInterval((function(e) {
        setAreaSetting(e[randInt(e.length)])
    }), 7, 1 / 0, ["Overworld", "Underworld", "Underwater", "Sky", "Castle"])
}

function mapKeyToControl(e, t) {
    if (-1 == window.controls.pipes[e].indexOf(t)) {
        window.controls.pipes[e].push(t);
        var n = window.controls.pipes;
        window.controls = new Controls(n), proliferate(body, {
            onkeydown: ControlsPipe("keydown", !0),
            onkeyup: ControlsPipe("keyup", !1),
            oncontextmenu: contextmenu,
            onmousedown: mousedown
        })
    }
}

function setMessageTriggers() {
    var e = {
        setMap: triggerSetMap,
        startEditor: function() {
            loadEditor()
        },
        toggleOption: function(e) {
            var t = "toggle" + e.option;
            console.log(t, window[t]), window[t] ? window[t]() : log("Could not toggle", t)
        },
        setKey: function(e) {
            mapKeyToControl(e.action, e.keyCode)
        }
    };
    window.addEventListener("message", (function(t) {
        var n = t.data,
            x = n.type;
        e[x] ? e[x](n) : console.log("Unknown event type received:", x, ".\n", n)
    }))
}

function triggerSetMap(e) {
    clearPlayerStats(), setMap.apply(this, e.map || []), setLives(3)
}

function upkeep() {
    if (!window.paused) {
        window.nextupk = setTimeout(upkeep, timer);
        for (var e = window.speed; e > 0; --e) adjustFPS(), QuadsKeeper.determineAllQuadrants(solids), maintainSolids(), maintainCharacters(), maintainPlayer(), texts.length && maintainTexts(), TimeHandler.handleEvents(), refillCanvas()
    }
}

function adjustFPS() {
    window.time_now = now();
    var e = time_now - time_prev,
        t = roundDigit(1e3 / e, .001);
    window.fps = roundDigit(.7 * fps + .3 * t, .01), window.realtime = fps_target / fps, window.time_prev = time_now
}

function pause(e) {
    paused && !window.nextupk || (cancelAnimationFrame(nextupk), AudioPlayer.pause(), paused = !0, e && AudioPlayer.play("Pause"))
}

function unpause() {
    paused && (window.nextupk = requestAnimationFrame(upkeep), paused = !1, AudioPlayer.resume())
}

function maintainSolids(e) {
    for (var t, n = 0; n < solids.length; ++n)(t = solids[n]).alive && t.movement && t.movement(t), (!t.alive || t.right < QuadsKeeper.getDelX()) && deleteThing(t, solids, n)
}

function maintainCharacters(e) {
    var t, n, x = gamescreen.right + QuadsKeeper.getOutDifference();
    for (n = 0; n < characters.length; ++n)(t = characters[n]).resting ? t.yvel = 0 : (t.nofall || (t.yvel += t.gravity || map.gravity), t.yvel = min(t.yvel, map.maxyvel)), updatePosition(t), QuadsKeeper.determineThingQuadrants(t), t.under = t.undermid = !1, determineThingCollisions(t), t.resting && (characterOnResting(t, t.resting) ? (t.yvel = !1, setBottom(t, t.resting.top)) : t.resting = !1), t.alive ? "player" == t.type || map.shifting || !(0 == t.numquads || t.left > x) || t.outerok ? !t.nomove && t.movement && t.movement(t) : deleteThing(t, characters, n) : map.shifting || deleteThing(t, characters, n)
}

function maintainPlayer(e) {
    if (player.alive) {
        if (player.yvel > 0 && (map.underwater || (player.keys.jump = 0), player.jumping || (map.underwater ? player.paddling || (switchClass(player, "paddling", "paddling"), player.padding = !0) : (addClass(player, "jumping"), player.jumping = !0)), !player.piping && !player.dying && player.top > gamescreen.deathheight)) {
            if (map.exitloc) return map.random ? (goToTransport(["Random", "Overworld", "Down"]), void playerDropsIn()) : shiftToLocation(map.exitloc);
            clearPlayerStats(), killPlayer(player, 2)
        }
        player.xvel > 0 ? player.right > gamescreen.middlex && player.right > gamescreen.right - gamescreen.left && (player.xvel = min(0, player.xvel)) : player.left < 0 && (player.xvel = max(0, player.xvel)), player.under && (player.jumpcount = 0), window.scrolloffset = map.canscroll * (player.right - gamescreen.middlex), scrolloffset > 0 && !map.shifting ? scrollWindow(lastscroll = round(min(player.scrollspeed, scrolloffset))) : lastscroll = 0
    }
}

function maintainTexts() {
    var e, t, n;
    for (n = texts.length - 1; n >= 0; --n) e = (t = texts[n]).element || t, t.xvel && elementShiftLeft(e, t.xvel), t.yvel && elementShiftTop(e, t.yvel)
}

function followPath(e, t, n) {
    return null != t[n] && null != e[t[n]] ? followPath(e[t[n]], t, ++n) : e
}

function clearAllTimeouts() {
    for (var e = setTimeout((function() {})); e--;) clearTimeout(e)
}

function getCanvas(e, t, n) {
    var x = createElement("canvas", {
        width: e,
        height: t
    });
    return n && (n = n || unitsize, proliferate(x.style, {
        width: e * n + "px",
        height: t * n + "px"
    })), x.getContext("2d").webkitImageSmoothingEnabled = !1, x
}

function step(e) {
    unpause(), upkeep(), pause(), e > 0 && step(e - 1)
}

function fastforward(e) {
    window.speed = max(0, parseInt(e || 0)) + 1
}

function toggleFastFWD(e) {
    window.fastforwarding ? (fastforward(0), window.fastforwarding = !1) : (fastforward(2), window.fastforwarding = !0)
}

function specifyTimer(e) {
    timer = e, requestAnimationFrame = function(e) {
        window.setTimeout(e, timer)
    }
}

function changeUnitsize(e) {
    function t(e) {
        for (i in e) updateSize(e[i]), updatePosition(e[i])
    }
    e && (resetUnitsize(e), t(solids), t(characters))
}

function randTrue(e) {
    return floor(getSeed() * ((e || 1) + 1))
}

function randSign(e) {
    return 2 * randTrue(e) - 1
}

function randBoolJS(e) {
    return floor(2 * random())
}

function updatePosition(e) {
    e.nomove || shiftHoriz(e, e.xvel), e.nofall || shiftVert(e, e.yvel)
}

function updateSize(e) {
    var t;
    e.unitwidth = e.width * unitsize, e.unitheight = e.height * unitsize, e.spritewidthpixels = e.spritewidth * unitsize, e.spriteheightpixels = e.spriteheight * unitsize, (t = e.canvas) && (t.width = e.spritewidthpixels, t.height = e.spriteheightpixels, refillThingCanvas(e))
}

function reduceHeight(e, t, n) {
    e.top += t, e.height -= t / unitsize, n && updateSize(e)
}

function shiftBoth(e, t, n) {
    e.noshiftx || shiftHoriz(e, t), e.noshifty || shiftVert(e, n)
}

function shiftHoriz(e, t) {
    e.left += t, e.right += t
}

function shiftVert(e, t) {
    e.top += t, e.bottom += t
}

function setLeft(e, t) {
    e.left = t, e.right = e.left + e.width * unitsize
}

function setRight(e, t) {
    e.right = t, e.left = e.right - e.width * unitsize
}

function setTop(e, t) {
    e.top = t, e.bottom = e.top + e.height * unitsize
}

function setBottom(e, t) {
    e.bottom = t, e.top = e.bottom - e.height * unitsize
}

function setWidth(e, t, n, x) {
    e.width = t, e.unitwidth = t * unitsize, n && (e.spritewidth = t, e.spritewidthpixels = t * unitsize), x && (updateSize(e), setThingSprite(e))
}

function setHeight(e, t, n, x) {
    e.height = t, e.unitheight = t * unitsize, n && (e.spriteheight = t, e.spriteheightpixels = t * unitsize), x && (updateSize(e), setThingSprite(e))
}

function setSize(e, t, n, x, r) {
    t && setWidth(e, t, x), n && setHeight(e, n, x), r && (updateSize(e), setThingSprite(e))
}

function setMidX(e, t, n) {
    setLeft(e, t + e.width * unitsized2, n)
}

function getMidX(e) {
    return e.left + e.width * unitsized2
}

function setMidY(e, t, n) {
    setTop(e, t + e.height * unitsized2, n)
}

function setMidXObj(e, t, n) {
    setLeft(e, t.left + t.width * unitsized2 - e.width * unitsized2, n)
}

function slideToXLoc(e, t, n, x) {
    n = n || 1 / 0;
    var r = getMidX(e);
    shiftHoriz(e, r < t ? min(n, t - r) : max(-n, t - r), x)
}

function updateLeft(e, t) {
    e.left += t, e.right = e.left + e.width * unitsize
}

function updateRight(e, t) {
    e.right += t, e.left = e.right - e.width * unitsize
}

function updateTop(e, t) {
    e.top += t, e.bottom = e.top + e.height * unitsize
}

function updateBottom(e, t) {
    e.bottom += t, e.top = e.bottom - e.height * unitsize
}

function increaseHeightTop(e, t, n) {
    e.top -= t, e.height += t / unitsize, e.unitheight = e.height * unitsize
}

function determineThingCollisions(e) {
    if (!e.nocollide) {
        var t, n, x, r, i, a, o;
        for (e.resting && 0 != e.resting.yvel || (e.resting = !1), e.skipoverlaps || checkOverlap(e), r = 0, a = e.numquads; r < a; ++r)
            for (n = (t = e.quadrants[r]).things, i = 0, o = t.numthings; i < o && e != (x = n[i]); ++i) !x.alive || x.scenery || x.nocollide || !objectsTouch(e, x) || !e.player && x.hidden && x.visual_scenery && x.visual_scenery.hidden && !solidOnCharacter(x, e) || (x.character ? objectsCollided(e, x) : e.nocollidesolid || (objectsCollided(e, x), e.skipoverlaps || x.skipoverlaps || !characterOverlapsSolid(e, x) || e.overlaps.push(x)));
        e.undermid ? e.undermid.bottomBump(e.undermid, e) : e.under instanceof Thing && e.under.bottomBump(e.under, e)
    }
}

function checkOverlap(e) {
    if (e.overlapdir) e.overlapdir < 0 && e.right <= e.ocheck.left + unitsizet2 || e.left >= e.ocheck.right - unitsizet2 ? (e.overlapdir = 0, e.overlaps = []) : shiftHoriz(e, e.overlapdir, !0);
    else if (e.overlaps.length > 0) {
        var t, n, x = e.overlaps,
            r = {
                right: -1 / 0
            },
            i = {
                left: 1 / 0
            },
            a = 0;
        for (n in e.overlapfix = !0, x) a += getMidX(t = x[n]), t.right > r.right && (r = t), t.left < i.left && (i = t);
        a /= x.length, getMidX(e) >= a - unitsized16 ? (e.overlapdir = unitsize, e.ocheck = r) : (e.overlapdir = -unitsize, e.ocheck = i)
    }
}

function characterOverlapsSolid(e, t) {
    return e.top <= t.top && e.bottom > t.bottom
}

function objectsTouch(e, t) {
    return e.right - unitsize > t.left && e.left + unitsize < t.right && e.bottom >= t.top && e.top <= t.bottom
}

function charactersTouch(e, t) {
    return !(e.bottom <= t.top + unitsizet2 || e.top + unitsizet2 >= t.bottom)
}

function objectInQuadrant(e, t) {
    return e.right + unitsize >= t.left && e.left - unitsize <= t.right && e.bottom + unitsize >= t.top && e.top - unitsize <= t.bottom
}

function objectsCollided(e, t) {
    return e.solid && !t.solid ? objectsCollided(t, e) : t.up && e != t.up ? characterTouchesUp(e, t) : void(t.solid || e.player ? t.collide(e, t) : e.collide(t, e))
}

function objectToLeft(e, t) {
    return (e.left + e.right) / 2 < (t.left + t.right) / 2
}

function objectOnTop(e, t) {
    return !("solid" == e.type && t.yvel > 0) && (!(e.yvel < t.yvel && "solid" != t.type) && (!!(e.player && e.bottom < t.bottom && "enemy" == t.group) || e.left + unitsize < t.right && e.right - unitsize > t.left && (e.bottom - t.yvel <= t.top + t.toly || e.bottom <= t.top + t.toly + abs(e.yvel - t.yvel))))
}

function objectOnSolid(e, t) {
    return e.left + unitsize < t.right && e.right - unitsize > t.left && (e.bottom - e.yvel <= t.top + t.toly || e.bottom <= t.top + t.toly + abs(e.yvel - t.yvel))
}

function solidOnCharacter(e, t) {
    return !(t.yvel >= 0) && (t.midx = getMidX(t), t.midx > e.left && t.midx < e.right && e.bottom - e.yvel <= t.top + t.toly - t.yvel)
}

function characterOnSolid(e, t) {
    return e.resting == t || objectOnSolid(e, t) && e.yvel >= 0 && e.left + e.xvel + unitsize != t.right && e.right - e.xvel - unitsize != t.left
}

function characterOnResting(e, t) {
    return objectOnSolid(e, t) && e.left + e.xvel + unitsize != t.right && e.right - e.xvel - unitsize != t.left
}

function characterTouchedSolid(e, t) {
    if (t.up != e) {
        if (characterOnSolid(e, t)) {
            if (t.hidden) return;
            e.resting = t, e.player && map.underwater && removeClass(e, "paddling")
        } else if (solidOnCharacter(t, e)) {
            var n = e.left + e.width * unitsize / 2;
            if (n > t.left && n < t.right) e.undermid = t;
            else if (t.hidden) return;
            e.under ? e.under.push(t) : e.under = [t], e.player && setTop(e, t.bottom - e.toly + t.yvel, !0), e.yvel = t.yvel, e.player && (e.keys.jump = 0)
        }
        t.hidden || characterNotBumping(e, t) || objectOnTop(e, t) || objectOnTop(t, e) || e.under || e == t.up || (e.right <= t.right ? (e.xvel = min(e.xvel, 0), shiftHoriz(e, max(t.left + unitsize - e.right, -unitsized2), !0)) : e.left >= t.left && (e.xvel = max(e.xvel, 0), shiftHoriz(e, min(t.right - unitsize - e.left, unitsized2), !0)), e.player ? t.actionLeft && t.actionLeft(e, t, t.transport) : (e.moveleft = !e.moveleft, "item" == e.group && e.collide(t, e)))
    }
}

function characterNotBumping(e, t) {
    return e.top + e.toly + abs(e.yvel) > t.bottom
}

function characterTouchesUp(e, t) {
    switch (e.group) {
        case "item":
            e.moveleft = getMidX(e) <= getMidX(t) + unitsized2, characterHops(e);
            break;
        case "coin":
            e.animate(e);
            break;
        default:
            e.death(e, 2), scoreEnemyBelow(e)
    }
}

function characterHops(e) {
    e.yvel = -1.4 * unitsize, e.resting = !1
}

function characterIsAlive(e) {
    return !(!e || e.dead || !e.alive)
}

function scorePlayerShell(e, t) {
    return e.star ? score(t, 200, !0) : t.resting ? t.peeking ? score(t, 1e3, !0) : score(t, 100, !0) : score(t, 8e3, !0)
}

function scoreEnemyStomp(e) {
    switch (e.type.split(" ")[0]) {
        case "koopa":
            e.fly ? 400 : 100;
            break;
        case "bulletbill":
        case "cheepcheep":
            200;
            break;
        case "hammerbro":
            1e3;
            break;
        case "lakitu":
            800;
            break;
        default:
            100
    }
}

function scoreEnemyFire(e) {
    var t = 200;
    switch (e.type.split(" ")[0]) {
        case "goomba":
            t = 100;
            break;
        case "hammerbro":
            t = 1e3;
            break;
        case "bowser":
            t = 5e3;
            break;
        default:
            t = 200
    }
    scoreEnemyFin(e, t)
}

function scoreEnemyStar(e) {
    var t = 200;
    switch (e.type.split(" ")[0]) {
        case "goomba":
            t = 100;
            break;
        case "hammerbro":
            t = 1e3;
            break;
        default:
            t = 200
    }
    scoreEnemyFin(e, t), AudioPlayer.play("Kick")
}

function scoreEnemyBelow(e) {
    var t = 100;
    switch (e.type.split(" ")[0]) {
        case "hammerbro":
            t = 1e3;
            break;
        default:
            t = 100
    }
    scoreEnemyFin(e, t)
}

function scoreEnemyFin(e, t) {
    score(e, t, !0)
}

function moveSimple(e) {
    e.direction != e.moveleft && (e.moveleft ? (e.xvel = -e.speed, e.noflip || unflipHoriz(e)) : (e.noflip || flipHoriz(e), e.xvel = e.speed), e.direction = e.moveleft)
}

function moveSmart(e) {
    moveSimple(e), 0 != e.yvel || e.resting && !offResting(e) || (e.moveleft ? shiftHoriz(e, unitsize, !0) : shiftHoriz(e, -unitsize, !0), e.moveleft = !e.moveleft)
}

function offResting(e) {
    return e.moveleft ? e.right - unitsize < e.resting.left : e.left + unitsize > e.resting.right
}

function moveJumping(e) {
    moveSimple(e), e.resting && (e.yvel = -abs(e.jumpheight), e.resting = !1)
}

function moveFloating(e) {
    setPlatformEndpoints(e), e.begin = map.floor * unitsize - e.begin, e.end = map.floor * unitsize - e.end, (e.movement = moveFloatingReal)(e)
}

function moveFloatingReal(e) {
    e.top < e.end ? e.yvel = min(e.yvel + unitsized32, e.maxvel) : e.bottom > e.begin && (e.yvel = max(e.yvel - unitsized32, -e.maxvel)), movePlatformNorm(e)
}

function moveSliding(e) {
    setPlatformEndpoints(e), (e.movement = moveSlidingReal)(e)
}

function moveSlidingReal(e) {
    gamescreen.left + e.left < e.begin ? e.xvel = min(e.xvel + unitsized32, e.maxvel) : gamescreen.left + e.right > e.end && (e.xvel = max(e.xvel - unitsized32, -e.maxvel)), movePlatformNorm(e)
}

function setPlatformEndpoints(e) {
    if (e.begin > e.end) {
        var t = e.begin;
        e.begin = e.end, e.end = t
    }
}

function collideTransport(e, t) {
    characterTouchedSolid(e, t), t == e.resting && (t.movement = movePlatformNorm, t.collide = characterTouchedSolid, t.xvel = unitsized2)
}

function moveFalling(e) {
    if (e != player.resting) return e.yvel = 0;
    shiftVert(e, e.yvel += unitsized8), setBottom(player, e.top), e.yvel >= 2.8 * unitsize && (e.freefall = !0, e.movement = moveFreeFalling)
}

function moveFallingScale(e) {
    player.resting == e ? (shiftScaleStringVert(e, e.string, e.yvel += unitsized16), shiftScaleStringVert(e.partner, e.partner.string, -e.yvel), e.tension += e.yvel, e.partner.tension -= e.yvel) : e.yvel > 0 && (shiftScaleStringVert(e, e.string, e.yvel -= unitsized32), shiftScaleStringVert(e.partner, e.partner.string, -e.yvel), e.tension -= e.yvel, e.partner.tension += e.yvel), e.partner.tension <= 0 && (e.collide = e.partner.collide = characterTouchedSolid, e.movement = e.partner.movement = moveFreeFalling)
}

function moveFreeFalling(e) {
    shiftVert(e, e.yvel += unitsized16), e.yvel > unitsizet2 && (e.movement = function(e) {
        shiftVert(e, e.yvel)
    })
}

function shiftScaleStringVert(e, t, n) {
    shiftVert(e, n), t.bottom = e.top, t.height = (t.bottom - t.top) / unitsize, updateSize(t)
}

function setClass(e, t) {
    e.className = t, setThingSprite(e)
}

function setClassInitial(e, t) {
    e.className = t
}

function addClass(e, t) {
    e.className += " " + t, setThingSprite(e)
}

function removeClass(e, t) {
    e.className = e.className.replace(new RegExp(" " + t, "gm"), ""), setThingSprite(e)
}

function switchClass(e, t, n) {
    removeClass(e, t), addClass(e, n)
}

function removeClasses(e) {
    var t, n, x;
    for (n = 1; n < arguments.length; ++n)
        for ((t = arguments[n]) instanceof Array || (t = t.split(" ")), x = t.length - 1; x >= 0; --x) removeClass(e, t[x])
}

function addClasses(e, t) {
    for (var n = t instanceof Array ? t : t.split(" "), x = n.length - 1; x >= 0; --x) addClass(e, n[x])
}

function addElementClass(e, t) {
    e.className += " " + t
}

function removeElementClass(e, t) {
    e.className = e.className.replace(new RegExp(" " + t, "gm"), "")
}

function flipHoriz(e) {
    addClass(e, "flipped")
}

function flipVert(e) {
    addClass(e, "flip-vert")
}

function unflipHoriz(e) {
    removeClass(e, "flipped")
}

function unflipVert(e) {
    removeClass(e, "flip-vert")
}

function deleteThing(e, t, n) {
    t.splice(n, 1), e.ondelete && e.ondelete()
}

function switchContainers(e, t, n) {
    t.splice(t.indexOf(e), 1), n.push(e)
}

function containerForefront(e, t) {
    t.splice(t.indexOf(e), 1), t.unshift(e)
}

function killNormal(e) {
    e && (e.hidden = e.dead = !0, e.alive = e.resting = e.movement = !1, TimeHandler.clearAllCycles(e))
}

function killFlip(e, t) {
    flipVert(e), e.bottomBump = function() {}, e.nocollide = e.dead = !0, e.resting = e.movement = e.speed = e.xvel = e.nofall = !1, e.yvel = -unitsize, TimeHandler.addEvent((function(e) {
        killNormal(e)
    }), 70 + (t || 0))
}

function generalMovement(e, t, n, x) {
    var r = setInterval((function() {
        shiftVert(e, n), shiftHoriz(e, t)
    }), timer);
    setTimeout((function() {
        clearInterval(r)
    }), x)
}

function blockBumpMovement(e) {
    var t = -3,
        n = setInterval((function() {
            shiftVert(e, t), 3.5 == (t += .5) && (clearInterval(n), e.up = !1), determineThingCollisions(e)
        }), timer)
}

function emergeUp(e, t) {
    AudioPlayer.play("Powerup Appears"), flipHoriz(e), e.nomove = e.nocollide = e.alive = e.nofall = e.emerging = !0, switchContainers(e, characters, scenery);
    var n = setInterval((function() {
        shiftVert(e, -unitsized8), e.bottom <= t.top && (clearInterval(n), switchContainers(e, scenery, characters), e.nocollide = e.nomove = e.moveleft = e.nofall = e.emerging = !1, e.emergeOut && e.emergeOut(e, t), e.movement && (e.movementsave = e.movement, e.movement = moveSimple, e.moving = TimeHandler.addEventInterval((function(e, t) {
            if (e.resting != t) return TimeHandler.addEvent((function(e) {
                e.movement = e.movementsave
            }), 1, e), !0
        }), 1, 1 / 0, e, t)))
    }), timer)
}

function flicker(e, t, n) {
    t = round(t) || 49, n = round(n) || 3;
    e.flickering = !0, TimeHandler.addEventInterval((function(e) {
        e.hidden = !e.hidden
    }), n, t, e), TimeHandler.addEvent((function(e) {
        e.flickering = e.hidden = !1
    }), t * n + 1, e)
}

function killOtherCharacters() {
    var e, t;
    if (window.characters)
        for (t = characters.length - 1; t >= 0; --t)(e = characters[t]).nokillend ? e.killonend && e.killonend(e) : deleteThing(e, characters, t);
    if (window.solids)
        for (t = solids.length - 1; t >= 0; --t) solids[t].killonend && deleteThing(solids[t], solids, t)
}

function lookTowardPlayer(e, t) {
    player.right <= e.left ? e.lookleft && !t || (e.lookleft = !0, e.moveleft = !1, unflipHoriz(e)) : player.left >= e.right && (e.lookleft || t) && (e.lookleft = !1, e.moveleft = !0, flipHoriz(e))
}

function lookTowardThing(e, t) {
    t.right <= e.left ? (e.lookleft = !0, e.moveleft = !1, unflipHoriz(e)) : t.left >= e.right && (e.lookleft = !1, e.moveleft = !0, flipHoriz(e))
}

function playCurrentThemeHurry(e) {
    AudioPlayer.playTheme("Hurry " + (e || area.theme))
}! function(e) {
    "use strict";
    var t = function() {},
        n = {
            getType: function() {
                return "null"
            },
            isSupported: function() {
                return !1
            },
            update: t
        },
        x = function(e) {
            var n = this,
                x = window;
            this.update = t, this.requestAnimationFrame = e || x.requestAnimationFrame || x.webkitRequestAnimationFrame || x.mozRequestAnimationFrame, this.tickFunction = function() {
                n.update(), n.startTicker()
            }, this.startTicker = function() {
                n.requestAnimationFrame.apply(x, [n.tickFunction])
            }
        };
    x.prototype.start = function(e) {
        this.update = e || t, this.startTicker()
    };
    var r = function() {};
    r.prototype.update = t, r.prototype.start = function(e) {
        this.update = e || t
    };
    var i = function(e, t) {
        this.listener = e, this.gamepadGetter = t, this.knownGamepads = []
    };
    i.factory = function(e) {
        var t = n,
            x = window && window.navigator;
        return x && (void 0 !== x.webkitGamepads ? t = new i(e, (function() {
            return x.webkitGamepads
        })) : void 0 !== x.webkitGetGamepads && (t = new i(e, (function() {
            return x.webkitGetGamepads()
        })))), t
    }, i.getType = function() {
        return "WebKit"
    }, i.prototype.getType = function() {
        return i.getType()
    }, i.prototype.isSupported = function() {
        return !0
    }, i.prototype.update = function() {
        var e, t, n = this,
            x = Array.prototype.slice.call(this.gamepadGetter(), 0);
        for (t = this.knownGamepads.length - 1; t >= 0; t--) e = this.knownGamepads[t], x.indexOf(e) < 0 && (this.knownGamepads.splice(t, 1), this.listener._disconnect(e));
        for (t = 0; t < x.length; t++)(e = x[t]) && n.knownGamepads.indexOf(e) < 0 && (n.knownGamepads.push(e), n.listener._connect(e))
    };
    var a = function(e) {
        this.listener = e, window.addEventListener("gamepadconnected", (function(t) {
            e._connect(t.gamepad)
        })), window.addEventListener("gamepaddisconnected", (function(t) {
            e._disconnect(t.gamepad)
        }))
    };
    a.factory = function(e) {
        var t = n;
        return window && void 0 !== window.addEventListener && (t = new a(e)), t
    }, a.getType = function() {
        return "Firefox"
    }, a.prototype.getType = function() {
        return a.getType()
    }, a.prototype.isSupported = function() {
        return !0
    }, a.prototype.update = t;
    var o = function(e) {
        this.updateStrategy = e || new x, this.gamepads = [], this.listeners = {}, this.platform = n, this.deadzone = .03, this.maximizeThreshold = .97
    };
    o.UpdateStrategies = {
        AnimFrameUpdateStrategy: x,
        ManualUpdateStrategy: r
    }, o.PlatformFactories = [i.factory, a.factory], o.Type = {
        PLAYSTATION: "playstation",
        LOGITECH: "logitech",
        XBOX: "xbox",
        UNKNOWN: "unknown"
    }, o.Event = {
        CONNECTED: "connected",
        UNSUPPORTED: "unsupported",
        DISCONNECTED: "disconnected",
        TICK: "tick",
        BUTTON_DOWN: "button-down",
        BUTTON_UP: "button-up",
        AXIS_CHANGED: "axis-changed"
    }, o.StandardButtons = ["FACE_1", "FACE_2", "FACE_3", "FACE_4", "LEFT_TOP_SHOULDER", "RIGHT_TOP_SHOULDER", "LEFT_BOTTOM_SHOULDER", "RIGHT_BOTTOM_SHOULDER", "SELECT_BACK", "START_FORWARD", "LEFT_STICK", "RIGHT_STICK", "DPAD_UP", "DPAD_DOWN", "DPAD_LEFT", "DPAD_RIGHT", "HOME"], o.StandardAxes = ["LEFT_STICK_X", "LEFT_STICK_Y", "RIGHT_STICK_X", "RIGHT_STICK_Y"];
    var l, s = function(e, t, n) {
        return t < e.length ? e[t] : n + (t - e.length + 1)
    };
    o.StandardMapping = {
        env: {},
        buttons: {
            byButton: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        },
        axes: {
            byAxis: [0, 1, 2, 3]
        }
    }, o.Mappings = [{
        env: {
            platform: a.getType(),
            type: o.Type.PLAYSTATION
        },
        buttons: {
            byButton: [14, 13, 15, 12, 10, 11, 8, 9, 0, 3, 1, 2, 4, 6, 7, 5, 16]
        },
        axes: {
            byAxis: [0, 1, 2, 3]
        }
    }, {
        env: {
            platform: i.getType(),
            type: o.Type.LOGITECH
        },
        buttons: {
            byButton: [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 10]
        },
        axes: {
            byAxis: [0, 1, 2, 3]
        }
    }, {
        env: {
            platform: a.getType(),
            type: o.Type.LOGITECH
        },
        buttons: {
            byButton: [0, 1, 2, 3, 4, 5, -1, -1, 6, 7, 8, 9, 11, 12, 13, 14, 10],
            byAxis: [-1, -1, -1, -1, -1, -1, [2, 0, 1],
                [2, 0, -1]
            ]
        },
        axes: {
            byAxis: [0, 1, 3, 4]
        }
    }], o.prototype.init = function() {
        var e = o.resolvePlatform(this),
            t = this;
        return this.platform = e, this.updateStrategy.start((function() {
            t._update()
        })), e.isSupported()
    }, o.prototype.bind = function(e, t) {
        return void 0 === this.listeners[e] && (this.listeners[e] = []), this.listeners[e].push(t), this
    }, o.prototype.unbind = function(e, t) {
        if (void 0 !== e) {
            if (void 0 !== t) {
                if (void 0 === this.listeners[e]) return !1;
                for (var n = 0; n < this.listeners[e].length; n++)
                    if (this.listeners[e][n] === t) return this.listeners[e].splice(n, 1), !0;
                return !1
            }
            this.listeners[e] = []
        } else this.listeners = {}
    }, o.prototype.count = function() {
        return this.gamepads.length
    }, o.prototype._fire = function(e, t) {
        if (void 0 !== this.listeners[e])
            for (var n = 0; n < this.listeners[e].length; n++) this.listeners[e][n].apply(this.listeners[e][n], [t])
    }, o.getNullPlatform = function() {
        return Object.create(n)
    }, o.resolvePlatform = function(e) {
        var t, x = n;
        for (t = 0; !x.isSupported() && t < o.PlatformFactories.length; t++) x = o.PlatformFactories[t](e);
        return x
    }, o.prototype._connect = function(e) {
        var t, n, x = this._resolveMapping(e);
        for (e.state = {}, e.lastState = {}, e.updater = [], t = x.buttons.byButton.length, n = 0; n < t; n++) this._addButtonUpdater(e, x, n);
        for (t = x.axes.byAxis.length, n = 0; n < t; n++) this._addAxisUpdater(e, x, n);
        this.gamepads[e.index] = e, this._fire(o.Event.CONNECTED, e)
    }, o.prototype._addButtonUpdater = function(e, t, n) {
        var x, r = s(o.StandardButtons, n, "EXTRA_BUTTON_"),
            i = this._createButtonGetter(e, t.buttons, n),
            a = this,
            l = {
                gamepad: e,
                control: r
            };
        e.state[r] = 0, e.lastState[r] = 0, x = function() {
            var t = i(),
                n = e.lastState[r],
                x = t > .5,
                s = n > .5;
            e.state[r] = t, x && !s ? a._fire(o.Event.BUTTON_DOWN, Object.create(l)) : !x && s && a._fire(o.Event.BUTTON_UP, Object.create(l)), 0 !== t && 1 !== t && t !== n && a._fireAxisChangedEvent(e, r, t), e.lastState[r] = t
        }, e.updater.push(x)
    }, o.prototype._addAxisUpdater = function(e, t, n) {
        var x, r = s(o.StandardAxes, n, "EXTRA_AXIS_"),
            i = this._createAxisGetter(e, t.axes, n),
            a = this;
        e.state[r] = 0, e.lastState[r] = 0, x = function() {
            var t = i(),
                n = e.lastState[r];
            e.state[r] = t, t !== n && a._fireAxisChangedEvent(e, r, t), e.lastState[r] = t
        }, e.updater.push(x)
    }, o.prototype._fireAxisChangedEvent = function(e, t, n) {
        var x = {
            gamepad: e,
            axis: t,
            value: n
        };
        this._fire(o.Event.AXIS_CHANGED, x)
    }, o.prototype._createButtonGetter = (l = function() {
        return 0
    }, function(e, t, n) {
        var x, r, i = l,
            a = this;
        return -1 !== (x = t.byButton[n]) ? "number" == typeof x && x < e.buttons.length && (i = function() {
            return e.buttons[x]
        }) : t.byAxis && n < t.byAxis.length && (x = t.byAxis[n], r = x, "[object Array]" === Object.prototype.toString.call(r) && 3 == x.length && x[0] < e.axes.length && (i = function(e, t, n) {
            var x = l;
            return t < n ? x = function() {
                var x = n - t,
                    r = e();
                return (r = (r - t) / x) < 0 ? 0 : r
            } : n < t && (x = function() {
                var x = t - n,
                    r = e();
                return (r = (r - n) / x) > 1 ? 0 : 1 - r
            }), x
        }(i = function() {
            var t = e.axes[x[0]];
            return a._applyDeadzoneMaximize(t)
        }, x[1], x[2]))), i
    }), o.prototype._createAxisGetter = function() {
        var e = function() {
            return 0
        };
        return function(t, n, x) {
            var r, i = e,
                a = this;
            return -1 !== (r = n.byAxis[x]) && "number" == typeof r && r < t.axes.length && (i = function() {
                var e = t.axes[r];
                return a._applyDeadzoneMaximize(e)
            }), i
        }
    }(), o.prototype._disconnect = function(e) {
        var t, n = [];
        for (void 0 !== this.gamepads[e.index] && delete this.gamepads[e.index], t = 0; t < this.gamepads.length; t++) void 0 !== this.gamepads[t] && (n[t] = this.gamepads[t]);
        this.gamepads = n, this._fire(o.Event.DISCONNECTED, e)
    }, o.prototype._resolveControllerType = function(e) {
        return -1 !== (e = e.toLowerCase()).indexOf("playstation") ? o.Type.PLAYSTATION : -1 !== e.indexOf("logitech") || -1 !== e.indexOf("wireless gamepad") ? o.Type.LOGITECH : -1 !== e.indexOf("xbox") || -1 !== e.indexOf("360") ? o.Type.XBOX : o.Type.UNKNOWN
    }, o.prototype._resolveMapping = function(e) {
        var t, n, x = o.Mappings,
            r = null,
            i = {
                platform: this.platform.getType(),
                type: this._resolveControllerType(e.id)
            };
        for (t = 0; !r && t < x.length; t++) n = x[t], o.envMatchesFilter(n.env, i) && (r = n);
        return r || o.StandardMapping
    }, o.envMatchesFilter = function(e, t) {
        var n, x = !0;
        for (n in e) e[n] !== t[n] && (x = !1);
        return x
    }, o.prototype._update = function() {
        this.platform.update(), this.gamepads.forEach((function(e) {
            e && e.updater.forEach((function(e) {
                e()
            }))
        })), this.gamepads.length > 0 && this._fire(o.Event.TICK, this.gamepads)
    }, o.prototype._applyDeadzoneMaximize = function(e, t, n) {
        return t = void 0 !== t ? t : this.deadzone, n = void 0 !== n ? n : this.maximizeThreshold, e >= 0 ? e < t ? e = 0 : e > n && (e = 1) : e > -t ? e = 0 : e < -n && (e = -1), e
    }, e.Gamepad = o
}("undefined" != typeof module && module.exports || window);
var customMute = !0;

function AudioPlayr(e) {
    "use strict";
    var t, n, x, r, i, a, o, l, s, d, u = this.play = function(e) {
        var n = x[e];
        if (!n) {
            if (!(n = t[e])) return console.log("Unknown sound: '" + e + "'"), n;
            x[e] = n
        }
        return n.name_raw = e, c(n), n.volume = !i, customMute || n.play(), n.used++ || n.addEventListener("ended", (function() {
            ! function(e, t) {
                x[t] && delete x[t]
            }(0, e)
        })), n
    };

    function p(e) {
        customMute || e.play()
    }

    function c(e) {
        e && e.pause && (e.pause(), e.readyState && (e.currentTime = 0))
    }

    function m(e, t) {
        var x, r, i = document.createElement("Audio");
        for (r in h(i, d), n) x = n[r], i.appendChild(h(document.createElement("Source"), {
            type: "audio/" + x,
            src: a + "/" + t + "/" + x + "/" + e + "." + x
        }));
        return customMute || i.play(), i
    }

    function h(e, t) {
        var n, x;
        for (x in t) "object" == typeof(n = t[x]) ? (e[x] || (e[x] = {}), h(e[x], n)) : e[x] = n;
        return e
    }
    this.playLocal = function(e, t) {
            var n, x = u(e);
            if (!x) return x;
            switch (l.constructor) {
                case Function:
                    n = l(t);
                    break;
                case Number:
                    n = l;
                    break;
                default:
                    n = Number(n) || 1
            }
            return x.volume = x.volume_real = n = 0, x
        }, this.playTheme = function(e, t, n) {
            if (n = void 0 === n || n, !e) switch (s.constructor) {
                case Function:
                    e = s();
                    break;
                case String:
                    e = s
            }(i = r) && (c(i), r = void 0, delete x[i.name_raw]);
            var i = r = u(e);
            return i.loop = n, t || (i.used = !1), 1 == i.used && i.addEventListener("ended", this.playTheme), i
        }, this.addEventListener = function(e, t, n) {
            var r = x[e];
            r && r.addEventListenever(t, n)
        }, this.addEventImmediate = function(e, t, n) {
            var r = x[e];
            r && !r.paused ? r.addEventListener(t, n) : n()
        }, this.toggleMute = function() {
            for (var e in i = !i, x) x[e].volume = i ? 0 : x[e].volume_real || 1;
            o && (localStorage[o] = i)
        }, this.pause = function() {
            for (var e in x) x[e] && x[e].pause()
        }, this.resume = function() {
            for (var e in x) x[e] && !customMute && p(x[e])
        }, this.pauseTheme = function() {
            r && r.pause()
        }, this.resumeTheme = function() {
            r && r.play()
        }, this.clear = function() {
            this.pause(), x = {}, this.theme = void 0
        }, this.getLibrary = function() {
            return t
        }, this.getSounds = function() {
            return x
        },
        function(e) {
            t = e.library || {}, n = e.filetypes || ["mp3", "ogg"], i = e.muted || !1, a = e.directory || "", o = e.localStorageMuted || "", l = e.getVolumeLocal || 1, s = e.getThemeDefault || "Theme";
            var r = e.soundSettings || {};
            d = e.soundSettings || {
                    preload: r.preload || "auto",
                    used: 0,
                    volume: 0
                }, x = {}, o && (i = localStorage[o]),
                function() {
                    var e, n, x, r;
                    for (x in t)
                        for (r in e = t[x]) n = e[r], t[n] = m(n, x)
                }()
        }(e || {})
}

function TimeHandlr(e) {
    "use strict";
    var t, n, x, r, i, a, o, l, s;
    this.getTime = function() {
        return t
    }, this.getEvents = function() {
        return n
    };
    var d = this.addEvent = function(e, n) {
            if (!(e instanceof Function)) return console.warn("Attempting to add an event that isn't a function."), console.log(arguments), !1;
            n = n || 1;
            var x = g(arguments);
            x.splice(0, 2);
            var r = {
                func: e,
                time_exec: t + n,
                time_repeat: n,
                args: x,
                repeat: 1
            };
            return c(r, r.time_exec), r
        },
        u = this.addEventInterval = function(e, n, x) {
            if (!(e instanceof Function)) return console.warn("Attempting to add an event that isn't a function."), console.log(arguments), !1;
            n = n || 1, x = x || 1;
            var r = g(arguments);
            r.splice(0, 3);
            var i = {
                func: e,
                time_exec: t + n,
                time_repeat: n,
                args: r,
                repeat: x
            };
            return e.event = i, c(i, i.time_exec), i
        },
        p = this.addEventIntervalSynched = function(e, n, x, r, i) {
            var a = n * i.length,
                o = w(t / a) * a,
                l = this,
                s = function(e, n, x) {
                    return x.startcount = t, u.apply(e, n)
                };
            if (n = n || 1, x = x || 1, o == t) return s(l, arguments, r);
            var p = o - t;
            d(s, p, l, arguments, r)
        };

    function c(e, t) {
        return n[t] ? (n[t].push(e), n[t]) : n[t] = [e]
    }
    this.clearEvent = function(e) {
        e && (e.repeat = 0)
    }, this.clearAllEvents = function() {
        n = {}
    };
    var m = this.clearClassCycle = function(e, t) {
        if (e[x] && e[x][t]) {
            var n = e[x][t];
            n[0] = !1, n.length = !1, delete e[x][t]
        }
    };
    this.clearAllCycles = function(e) {
        var t, n, x = e[x];
        for (t in x)(n = x[t])[0] = !1, n.length = 1, delete x[t]
    }, this.addSpriteCycle = function(e, t, n, r) {
        e[x] || (e[x] = {}), m(e, n);
        var i = "function" == typeof r;
        n = n || 0;
        var a = e[x][n] = h(e, t, i ? 0 : r);
        return a.event && i && (a.event.count_changer = r), f(e, t), a
    }, this.addSpriteCycleSynched = function(e, t, n, r) {
        e[x] || (e[x] = {}), m(e, n), n = n || 0;
        var i = e[x][n] = h(e, t, r, !0);
        return f(e, t), i
    };

    function h(e, t, n, x) {
        t.loc = t.oldclass = -1;
        var a = x ? p : u;
        return e[r] = function() {
            a(f, n || o, 1 / 0, e, t)
        }, e[i] && e[r](), t
    }

    function f(e, t) {
        if (!e || !t || !t.length) return !0;
        if (null != a && !e[a]) return !0; - 1 != t.oldclass && "" !== t.oldclass && s(e, t.oldclass), t.loc = ++t.loc % t.length;
        var n = t[t.loc];
        if (n) {
            var x = n instanceof Function ? n(e, t) : n;
            return "string" == typeof x ? (t.oldclass = x, l(e, x), !1) : !1 === x
        }
        return !1 === n
    }

    function g(e) {
        return Array.prototype.slice.call(e)
    }

    function v(e, t) {
        e.className += " " + t
    }

    function y(e, t) {
        e.className = e.className.replace(new RegExp(" " + t, "gm"), "")
    }
    this.handleEvents = function() {
        ++t;
        var e = n[t];
        if (e) {
            var x, r, i;
            for (i = 0, r = e.length; i < r; ++i)(x = e[i]).repeat > 0 && !x.func.apply(this, x.args) && (x.count_changer && x.count_changer(x), x.repeat instanceof Function ? x.repeat.bind(x)() && (x.count += x.time_repeat, c(x, x.time_exec)) : --x.repeat > 0 && (x.time_exec += x.time_repeat, c(x, x.time_exec)));
            delete n[t]
        }
    };
    var w = Math.ceil;
    ! function(e) {
        t = e.time || 0, n = e.events || {}, x = e.cycles || "cycles", e.className || "className", r = e.onSpriteCycleStart || "onSpriteCycleStart", i = e.doSpriteCycleStart || "doSpriteCycleStart", a = e.cycleCheckValidity, o = e.timingDefault || 7, l = e.addClass || window.addClass || v, s = e.removeClass || window.removeClass || y
    }(e || {})
}

function QuadsKeepr(e) {
    "use strict";
    var t, n, x, r, i, a, o, l, s, d, u, p, c, m, h, f, g, v, y, w, T, S;
    this.getQuadrants = function() {
        return t
    }, this.getNumQuads = function() {
        return x
    }, this.getNumRows = function() {
        return r
    }, this.getNumCols = function() {
        return i
    }, this.getQuadWidth = function() {
        return l
    }, this.getQuadHeight = function() {
        return s
    }, this.getDelX = function() {
        return u
    }, this.getOutDifference = function() {
        return p
    };
    var P = this.resetQuadrants = function() {
        t.length = 0, n.length = 0;
        for (var e = 0; e < i; ++e) C((e - 2) * l);
        c = t[0]
    };

    function b(e, t) {
        this.left = t, this.top = (e - 1) * s, this.right = this.left + l, this.bottom = this.top + s, this.things = [], this.numobjects = this.tolx = this.toly = 0
    }

    function C(e) {
        for (var x = [], i = 0; i < r; ++i) m = new b(i, e), x.push(m), t.push(m);
        n.push(x)
    }

    function k() {
        n.shift();
        for (var e = 0; e < r; ++e) t.shift();
        c = t[0], p = l
    }

    function z(e) {
        for (var t = 0, n = e.length; t < n; ++t) E(e[t])
    }
    this.updateQuadrants = function(e) {
        for (p += e = e || 0; c.left <= u;) k(), C(m.right), S && S()
    }, this.determineAllQuadrants = function() {
        var e, n;
        for (e = 0; e < x; ++e) t[e].numthings = 0;
        for (e = 0, n = arguments.length; e < n; ++e) z(arguments[e])
    };
    var E = this.determineThingQuadrants = function(e) {
        e[y] = 0;
        for (var n = 0; n < x; ++n)
            if (A(e, t[n]) && (B(e, t[n], n), e[y] > e[w])) return
    };

    function B(e, t, n) {
        e[T][e[y]] = t, ++e[y], t.things[t.numthings] = e, ++t.numthings
    }

    function A(e, t) {
        return e[g] + d >= t.left && e[h] - d <= t.right && e[v] + d >= t.top && e[f] - d <= t.bottom
    }! function(e) {
        t = [], n = [], x = e.num_quads, r = e.num_rows, i = e.num_cols, x ? (r && (i = x / r), i && (r = x / i)) : (r || (r = 2), i || (i = 2), x = r * i), a = e.screen_width || 640, o = e.screen_height || 480, l = a / (i - 3), s = o / (r - 2), d = e.tolerance || 0, u = e.delx || -2 * l, p = l, h = e.thing_left || "left", g = e.thing_right || "right", f = e.thing_top || "top", v = e.thing_bottom || "bottom", y = e.thing_num_quads || "numquads", w = e.thing_max_quads || "maxquads", T = e.thing_quadrants || "quadrants", S = e.onUpdate, e.onCollide, P()
    }(e || {})
}