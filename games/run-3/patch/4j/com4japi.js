window.MGEvent = window.MGEvent || function() {
    function MGEvent(type) {
        this.data = null;
        this.type = type
    }
    MGEvent.REWARD_AD = "REWARD_AD";
    MGEvent.LOAD_START = "LOAD_START";
    MGEvent.LOAD_PROGRESS = "LOAD_PROGRESS";
    MGEvent.LOAD_COMPLETE = "LOAD_COMPLETE";
    MGEvent.LOAD_ERROR = "LOAD_ERROR";
    MGEvent.START_GAME = "START_GAME";
    MGEvent.PAUSE_GAME = "PAUSE_GAME";
    MGEvent.WIN_GAME = "WIN_GAME";
    MGEvent.LOSE_GAME = "LOSE_GAME";
    MGEvent.ENTER_GAME = "ENTER_GAME";
    MGEvent.ADDED_TO_STAGE = "ADDED_TO_STAGE";
    MGEvent.FRAMEWORK_INFO_REQUEST = "FRAMEWORK_INFO_REQUEST";
    MGEvent.FRAMEWORK_INFO_RESPONSE = "FRAMEWORK_INFO_RESPONSE";
    MGEvent.CLICK_MORE = "CLICK_MORE";
    MGEvent.CLICK_MINILOGO = "CLICK_MINILOGO";
    MGEvent.OPEN_URL = "OPEN_URL";
    MGEvent.OPEN_EMAIL = "OPEN_EMAIL";
    MGEvent.SHARE = "SHARE";
    MGEvent.CLICK_CREDITS = "CLICK_CREDITS";
    MGEvent.SHOW_WIN = "SHOW_WIN";
    MGEvent.SHOW_LOSE = "SHOW_LOSE";
    MGEvent.LEVEL_FAIL = "LEVEL_FAIL";
    MGEvent.LEVEL_WIN = "LEVEL_WIN";
    MGEvent.SCREENSHOT = "SCREENSHOT";
    MGEvent.DOWNLOAD_APP = "DOWNLOAD_APP";
    MGEvent.CONTINUE_GAME = "CONTINUE_GAME";
    MGEvent.CHANGE_SCENE = "CHANGE_SCENE";
    MGEvent.FULLSCREEN = "FULLSCREEN";
    MGEvent.GAME_STARTUP = "GAME_STARTUP";
    MGEvent.S2C_PAUSE_GAME = "S2C_PAUSE_GAME";
    MGEvent.S2C_RESUME_GAME = "S2C_RESUME_GAME";
    MGEvent.S2C_SYSTEM_CHANGE = "S2C_SYSTEM_CHANGE";
    MGEvent.C2S_START_GAME = "C2S_START_GAME";
    MGEvent.C2S_RESTART_GAME = "C2S_RESTART_GAME";
    return MGEvent
}();
window.MGDelegate = window.MGDelegate || function() {
    function MGDelegate() {}
    MGDelegate.getListenerIndex = function(type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return -1
        }
        for (var i = 0; i < MGDelegate._eventMap[type].length; i++) {
            var itm = MGDelegate._eventMap[type][i];
            if (itm[0] == listener && itm[1] == thisObject) {
                return i
            }
        }
        return -1
    }
    ;
    MGDelegate.hasListener = function(type) {
        if (!MGDelegate._eventMap[type]) {
            return false
        }
        return true
    }
    ;
    MGDelegate.addEventListener = function(type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            MGDelegate._eventMap[type] = []
        }
        if (MGDelegate.getListenerIndex(type, listener, thisObject) == -1) {
            MGDelegate._eventMap[type].push([listener, thisObject])
        }
    }
    ;
    MGDelegate.removeEventListener = function(type, listener, thisObject) {
        if (!MGDelegate._eventMap[type]) {
            return
        }
        var index = MGDelegate.getListenerIndex(type, listener, thisObject);
        if (index != -1) {
            MGDelegate._eventMap[type].splice(index, 1)
        }
        if (MGDelegate._eventMap[type].length == 0) {
            delete MGDelegate._eventMap[type]
        }
    }
    ;
    MGDelegate.dispatcherEvent = function(event) {
        var type = event["type"];
        if (!MGDelegate._eventMap[type]) {
            return
        }
        var jobs = MGDelegate._eventMap[type];
        for (var i = 0; i < jobs.length; i++) {
            var itm = jobs[i];
            var func = itm[0];
            var thisObj = itm[1];
            func.call(thisObj, event)
        }
    }
    ;
    MGDelegate._eventMap = {};
    return MGDelegate
}();
var com4j = {
    VERSION: "2.3.8",
    initCallbackObj: null,
    _isFullscreen: false,
    get fullscreenEnabled() {
        var enabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        return !!enabled
    },
    fullscreen: function(fullScreenElement) {
        if (!com4j.fullscreenEnabled) {
            com4j.debug("Can not fullscreen, please check and set iframe allowfullscreen = 'allowfullscreen'");
            return
        }
        if (!fullScreenElement) {
            fullScreenElement = document.documentElement
        }
        if (fullScreenElement.requestFullscreen) {
            fullScreenElement.requestFullscreen()
        } else if (fullScreenElement.msRequestFullscreen) {
            fullScreenElement.msRequestFullscreen()
        } else if (fullScreenElement.mozRequestFullScreen) {
            fullScreenElement.mozRequestFullScreen()
        } else if (fullScreenElement.webkitRequestFullScreen) {
            fullScreenElement.webkitRequestFullScreen()
        }
    },
    exitFullscreen: function() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    },
    onFullscreenChanged: function(event) {
        com4j._isFullscreen = !com4j._isFullscreen
    }
};
com4j.sys = {
    fireSystemChange: function(props) {
        if (!props) {
            throw new Error("must contain props.")
        }
        var evt = new MGEvent(MGEvent.S2C_SYSTEM_CHANGE);
        MGDelegate.dispatcherEvent(evt)
    }
};
com4j.utils = {
    isNil: function(value) {
        if (value === null || value === void 0) {
            return true
        }
        return false
    }
};
com4j.config = {
    _isReady: false,
    parameters: {},
    getParam: function(key) {
        if (this.parameters.hasOwnProperty(key)) {
            if (this.parameters[key] === undefined || this.parameters[key] === null) {
                return true
            } else {
                return this.parameters[key]
            }
        } else {
            return undefined
        }
    },
    get isReady() {
        return this._isReady
    },
    set isReady(v) {
        this._isReady = v;
        if (v && com4j.game.isReady) {
            com4j.game.start()
        }
    },
    engineType: "unknow",
    canvasName: "gameCanvas",
    canvasId: "#gameCanvas",
    host: "//h5.4j.com/",
    ForJoyH5_pubid: "default",
    ForJoyH5_Fullscreen: true,
    ForJoyH5_ShowPreGameAd: true,
    ForJoyH5_PreGameAdType: "0,1",
    ForJoyH5_InGameAdInterval: 30,
    ForJoyH5_InGameAdType: "0,1",
    ForJoyH5_ShowCreditsButton: true,
    get ForJoy_gameid() {
        return window.hasOwnProperty("ForJoy_gameid") ? ForJoy_gameid : 293
    },
    ForJoyH5_DefaultBigLogo: "/patch/images/games235-banner.png",
    _ForJoyH5_BigLogo: "/patch/images/games235-banner.png",
    get ForJoyH5_BigLogo() {
        if (this.ForJoyH5_stats === false) {
            return this.ForJoyH5_DefaultBigLogo
        }
        return this._ForJoyH5_BigLogo
    },
    set ForJoyH5_BigLogo(v) {
        this._ForJoyH5_BigLogo = v
    },
    ForJoyH5_DefaultSmallLogo: "/patch/images/games235-null.png",
    _ForJoyH5_SmallLogo: "/patch/images/games235-null.png",
    get ForJoyH5_SmallLogo() {
        if (this.ForJoyH5_stats === false) {
            return this.ForJoyH5_DefaultSmallLogo
        }
        return this._ForJoyH5_SmallLogo
    },
    set ForJoyH5_SmallLogo(v) {
        this._ForJoyH5_SmallLogo = v
    },
    ForJoyH5_ShowMoreGamesDivWhenClickLogo: true,
    ForJoyH5_AdChannel: 7376568015,
    ForJoyH5_stats: true,
    ForJoyH5_ShowAd: true,
    ForJoyH5_ShowMoreGamesButton: true,
    _ForJoyH5_DefaultBgColor: "#008BCC",
    _ForJoyH5_BgColor: "#008BCC",
    get ForJoyH5_BgColor() {
        if (this.ForJoyH5_stats === false) {
            return this._ForJoyH5_DefaultBgColor
        }
        return this._ForJoyH5_BgColor
    },
    set ForJoyH5_BgColor(v) {
        this._ForJoyH5_BgColor = v
    },
    ForJoyH5_ShowCopyright: true,
    ForJoyH5_ShowAppLink: true,
    ForJoyH5_MoreGamesUrl: "no",
    ForJoyH5_ShowMoreGamesDivWhenGameOver: true,
    _ForJoyH5_Default_Website: "https://www.4j.com",
    _ForJoyH5_Website: "https://www.4j.com",
    get ForJoyH5_Website() {
        if (this.ForJoyH5_stats === false) {
            return this._ForJoyH5_Default_Website
        }
        return this._ForJoyH5_Website
    },
    set ForJoyH5_Website(v) {
        this._ForJoyH5_Website = v
    },
    ForJoyH5_mid: 19,
    NameID: "allgames",
    v: "",
    debug: false,
    devMode: false,
    showmsgs: [],
    sharemsgs: [],
    language: "en",
    HasScreenshot: false,
    touchEnabled: "ontouchstart"in window,
    init: function() {
        var path = window.location.pathname;
        var reg = /(test\/|games\/|games-test\/)?([^/]+)/g;
        var items = reg.exec(path);
        if (items && items[1] != undefined) {
            com4j.config.NameID = items[2]
        }
        var reg = /(\s*)(.+)(\s*)/g;
        if (document.cookie.length > 0) {
            var cookieObj = {};
            var arr = document.cookie.split(";");
            for (var i = 0; i < arr.length; i++) {
                var kv = arr[i].split("=");
                var key = kv[0].replace(reg, "$2");
                var value = decodeURIComponent(kv[1]);
                cookieObj[key] = value
            }
        }
        $(document.body).css("background", com4j.config.ForJoyH5_BgColor);
        var hostname = window.location.hostname;
        var targetHostname = "douyougame.com";
        var thatHostname = hostname.substr(hostname.indexOf(targetHostname), hostname.length);
        if (targetHostname == thatHostname) {
            com4j.config.host = window.location.origin + "/"
        }
    }
};
com4j.loadScript = function(src, callback, context) {
    var script = document.createElement("script")
      , body = document.body;
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.src = src;
    if (script.addEventListener) {
        script.addEventListener("load", function() {
            callback && callback.apply(context, [context])
        }, false)
    } else if (script.attachEvent) {
        script.attachEvent("onreadystatechange", function() {
            var target = window.event.srcElement;
            if (target.readyState == "loaded") {
                callback && callback.apply(context, [context])
            }
        })
    }
    document.body.appendChild(script)
}
;
com4j.resize = {
    _timerID: null,
    _queue: [],
    get sw() {
        return $(window).width()
    },
    get sh() {
        return $(window).height()
    },
    indexOf: function(callback, context) {
        var i = 0
          , len = this._queue.length;
        for (i = 0; i < len; i++) {
            var node = this._queue[i];
            if (node.callback == callback && node.context == context) {
                return i
            }
        }
        return -1
    },
    add: function(callback, context, params) {
        var index = this.indexOf(callback, context);
        if (index == -1) {
            if (params && params.constructor != Array) {
                params = [params]
            }
            this._queue.push({
                callback: callback,
                context: context,
                params: params
            })
        } else {
            com4j.debug("has event")
        }
    },
    remove: function(callbackOrIndex, context) {
        var index = -1;
        if (callbackOrIndex.constructor == Number) {
            index = callbackOrIndex
        } else {
            index = this.indexOf(callbackOrIndex, context)
        }
        if (index > -1) {
            delete this._queue[index];
            this._queue.splice(index, 1)
        } else {
            com4j.debug("has event")
        }
    },
    handler: function(event) {
        if (com4j.resize._timerID) {
            clearTimeout(com4j.resize._timerID)
        }
        com4j.resize._timerID = setTimeout(com4j.resize._onHandler, 50)
    },
    _onHandler: function(event) {
        var i = 0
          , len = com4j.resize._queue.length;
        for (i = 0; i < len; i++) {
            var node = com4j.resize._queue[i];
            try {
                var func = node.callback;
                var context = node.context;
                var params = node.params;
                func.apply(context, params)
            } catch (e) {
                this.remove();
                com4j.debug("Can not execute, maybe deleted.")
            }
        }
    }
};
com4j.moregames = {
    hasData: false,
    moreData: null,
    MoreInterval: 60,
    _lastTime: -1,
    get showable() {
        if (this._lastTime === -1) {
            return true
        }
        var now = (new Date).getTime();
        var interval = now - this._lastTime;
        if (interval >= this.MoreInterval * 1e3) {
            return true
        } else {
            var least = Math.ceil(this.MoreInterval - interval / 1e3);
            com4j.debug("Please call com4j.more.show() later, wait " + least + "s");
            return false
        }
    },
    updateLastTime: function() {
        var now = (new Date).getTime();
        this._lastTime = now
    },
    init: function() {
        var container = $(".new_ui_box-content");
        var uiList = $(".new_ui_games-list");
        var now = Math.floor((new Date).getTime() / 432e6);
        var url = "patch/4j/moregames.json?"+com4j.config.host + "moregames/" + com4j.config.NameID + ".json?v=" + now;
        $.get(url, function(data, status, xhr) {
            if (status == "success") {
                com4j.moregames.moreData = data;
                com4j.moregames.hasData = true;
                com4j.moregames.randomInit()
            }
        }).fail(function() {
            com4j.moregames.hasData = false
        });
        function resizeHandler() {
            var left = ($(window).height() - container.height()) / 2;
            if (left < 0) {
                left = 0
            }
            var top = ($(window).width() - container.width()) / 2;
            if (top < 0) {
                top = 0
            }
            container.css("margin-top", left + "px");
            container.css("margin-left", top + "px");
            uiList.css("height", container.height() - 60 + "px")
        }
        com4j.resize.add(resizeHandler, com4j.moregames);
        com4j.resize.handler();
        var evtStr = com4j.config.touchEnabled ? "touchstart touchend" : "mouseup";
        $("#closeMoreBtn").bind(evtStr, function(event) {
            if ($("#moregames").css("visibility") === "hidden") {
                return
            }
            com4j.moregames.close();
            event.stopPropagation();
            event.preventDefault()
        })
    },
    randomInit: function() {
        if (!com4j.moregames.moreData) {
            return
        }
        var data = com4j.moregames.moreData.concat();
        $(".new_ui_games-list").empty();
        var strVar = "";
        while (data.length > 0) {
            var index = Math.floor(Math.random() * data.length);
            var obj = data[index];
            data.splice(index, 1);
            if (!com4j.config.ForJoyH5_ShowCopyright && obj.hasOwnProperty("copyright") && obj["copyright"] == true) {
                continue
            }
            var href = com4j.config.host + obj.nameid + "/index.php?pubid=" + com4j.config.ForJoyH5_pubid;
            strVar += "<a href='" + href + "'>";
            strVar += "<div class='new_ui_big-button-menu new_ui_single-game-row'>";
            var imgUrl = com4j.config.host + "thumb/" + obj.nameid + ".jpg";
            strVar += "<img class='new_ui_img-icon' src='" + imgUrl + "'>";
            strVar += "<p class='new_ui_game-info'>";
            strVar += "<span class='new_ui_game-name'>" + obj.name + "</span>";
            strVar += "<span class='new_ui_stars-container'>";
            for (var s = 1; s <= 5; s++) {
                if (s < obj.rating5) {
                    strVar += "<span class='new_ui_sprite new_ui_star-yellow'></span>"
                } else if (s > Math.floor(obj.rating5) && s <= Math.ceil(obj.rating5)) {
                    strVar += "<span class='new_ui_sprite new_ui_star-yellow-grey'></span>"
                } else {
                    strVar += "<span class='new_ui_sprite new_ui_star-grey'></span>"
                }
            }
            strVar += "</span>";
            strVar += "</p>";
            strVar += "<span class='new_ui_sprite new_ui_button-next new_ui_icon-right-big-button'></span>";
            strVar += "</div>";
            strVar += "</a>"
        }
        $(".new_ui_games-list").append(strVar)
    },
    show: function(force) {
        console.log("show moregames....");
        if (com4j.moregames.hasData == false) {
            com4j.debug("get moregames data error.");
            return
        }
        if (force) {
            com4j.moregames.randomInit();
            $("#moregames").css("visibility", "visible");
            com4j.modal.show();
            return
        }
        if (this.showable) {
            this.updateLastTime();
            com4j.moregames.randomInit();
            $("#moregames").css("visibility", "visible");
            com4j.modal.show()
        }
    },
    close: function() {
        if (com4j.moregames.hasData == false) {
            return
        }
        $("#moregames").css("visibility", "hidden");
        com4j.modal.hide()
    }
};
com4j.ad = {
    _callbackObj: null,
    intervalID: -1,
    _lastInGameAdTime: -1,
    _loaded: false,
    _requesting: false,
    _imaContainer: null,
    _videoContent: null,
    _adsManager: null,
    _adsLoader: null,
    _adsRequest: null,
    _finishedPre: false,
    get finishedPre() {
        return this._finishedPre
    },
    set finishedPre(value) {
        this._finishedPre = value
    },
    get adType() {
        var typeSrc = com4j.config.ForJoyH5_PreGameAdType;
        if (com4j.ad.finishedPre) {
            typeSrc = com4j.config.ForJoyH5_InGameAdType
        }
        switch (typeSrc) {
        case 0:
            return "all";
            break;
        case 1:
            return "onlyskipable";
            break;
        case 2:
            return "no";
            break
        }
    },
    get adTagUrl() {
        var tagConfig = ["QLM5PELA", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-QLM5P-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "L6S7VA54", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-L6S7V-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "G79AAXBQ", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-G79AA-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "BHENV9JB", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-BHENV-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "XQ1YEFJK", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-XQ1YE-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "V317OKHL", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-V317O-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "HZR1V11J", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-HZR1V-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "V5I4Y9IP", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-V5I4Y-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "TB6YOFG0", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-TB6YO-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "3WH6RAN1", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-3WH6R-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "11R0X8N3", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-11R0X-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "RQ5CPXUP", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-RQ5CP-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "FPDUYNZV", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-FPDUY-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "9DJ3DN5T", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-9DJ3D-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "3AQ7RHML", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-3AQ7R-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "CNQMOKB2", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-CNQMO-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "1QX6OAWG", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-1QX6O-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "6132O7S1", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-6132O-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "0PF3ESXY", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-0PF3E-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "IAPWEHWR", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-IAPWE-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "VRVKIH0G", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-VRVKI-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "6L6S5U1Y", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-6L6S5-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "M6K396AG", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-M6K39-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "WQ9VBG0K", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-WQ9VB-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "KH18EFNR", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-KH18E-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "TAFT5MCB", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-TAFT5-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "CTYI767E", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-CTYI7-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "KTXFSWAP", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-KTXFS-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "3GVJQA2U", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-3GVJQ-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "EG48RJLQ", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-EG48R-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "S35FXAUS", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-S35FX-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "651DSYO5", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-651DS-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "HCF64VEI", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-HCF64-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "38WO9BN1", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-38WO9-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "0QCY2HTA", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-0QCY2-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "QVHI15BE", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-QVHI1-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "5US4LOMK", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-5US4L-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "X40A2KO4", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-X40A2-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "NQARB6EN", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-NQARB-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "3Z2M59L2", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-3Z2M5-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "J3HSP5OF", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-J3HSP-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "629QHF3J", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-629QH-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "YFSIE811", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-YFSIE-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "HDE3HHPY", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-HDE3H-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "73KGUZ55", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-73KGU-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "FLA1UWYX", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-FLA1U-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "1I8PDX10", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-1I8PD-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "DE0BEIAP", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-DE0BE-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "Q8F420NS", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-Q8F42-01-h5-bwg&ad_type=video_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "5HOYVN2L", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-5HOYV-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "YDZLCV2H", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-YDZLC-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "EPA9CD12", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-EPA9C-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "NA8HAWH7", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-NA8HA-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "SIW0GRJD", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-SIW0G-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "USLAAKKS", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-USLAA-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "A7LCKVVZ", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-A7LCK-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "9CMMFNVF", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-9CMMF-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "PUBGUSJ3", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-PUBGU-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "NUS8IM5Q", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-NUS8I-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "ZAYO0ZE5", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-ZAYO0-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "6PGOEAE1", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-6PGOE-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "GSZK3LY3", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-GSZK3-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "0RSQJPUE", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-0RSQJ-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "XIHG1K6L", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-XIHG1-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "ODX6DXEM", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-ODX6D-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "HZW071NG", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-HZW07-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "46W8HX7L", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-46W8H-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "A41R4S53", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-A41R4-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "G578VSAI", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-G578V-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "20ATUYCC", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-20ATU-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "RJUMWF49", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-RJUMW-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "R27NN2ZV", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-R27NN-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "KASTQ1U8", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-KASTQ-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "0WX1K64P", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-0WX1K-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "RGEH9Y6S", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-RGEH9-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "VFQS0W06", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-VFQS0-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "WJ6YJRVE", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-WJ6YJ-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "9SWMI7FD", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-9SWMI-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "N1VRWZL9", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-N1VRW-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "JV2WS2IH", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-JV2WS-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "UIKWEJUU", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-UIKWE-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "WS9LL83G", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-WS9LL-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "MIWM8Z1M", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-MIWM8-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fwww.douyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "64D2WKEI", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-64D2W-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0\t\t", "6CB4LUTU", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-6CB4L-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "8GAKIYS1", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-8GAKI-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0\t\t", "CH6B1UEF", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-CH6B1-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "CQSVLL72", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-CQSVL-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "CS1RC5IA", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-CS1RC-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "GRJZNQOJ", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-GRJZN-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "MN1FC980", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-MN1FC-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "OX3WTW1K", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-OX3WT-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0", "PJNCU9G5", "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-3330455067300419&slotname=game-PJNCU-01-h5-bwg&ad_type=video_text_image&description_url=http%3A%2F%2Fdouyougame.com&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0"];
        for (var i = 0, len = tagConfig.length / 2; i < len; i++) {
            var gid = tagConfig[i * 2];
            var gtag = tagConfig[i * 2 + 1];
            if (com4j.config.ForJoyH5_pubid === gid) {
                return gtag
            }
        }
        if (window.navigator.appVersion.indexOf("Chrome/67") != -1 && window != window.parent) {
            var _url = null;
            try {
                _url = window.top.location.host
            } catch (e) {
                _url = document.referrer
            }
            if (_url.indexOf("https://h5.4j.com") == -1) {
                console.log("return adscene ad");
                var adsenseTagUrl = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=text_image&client=ca-games-pub-7677430104552677&channel=2819809747&videoad_start_delay=0&hl=en&max_ad_duration=30000";
                return adsenseTagUrl
            }
        }
        var cust = "game=" + com4j.config.ForJoy_gameid + "&pubid=" + com4j.config.ForJoyH5_pubid + "&video=" + com4j.ad.adType + "&uid=" + com4j.config.ForJoyH5_pubid + "_" + com4j.config.ForJoy_gameid + "&mid=" + com4j.config.ForJoyH5_mid;
        cust = encodeURIComponent(cust);
        var _adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?" + "sz=640x480" + "&iu=/324879675/pregame_h5.4j.com_parnter" + "&cust_params=" + cust + "&impl=s" + "&gdfp_req=1" + "&env=vp" + "&output=vast" + "&unviewed_position_start=1" + "";
        return _adTagUrl
    },
    check: function() {
      return true;
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            com4j.config.debug = true;
            return true
        }
        if (typeof google == "undefined" || typeof google.ima == "undefined") {
            com4j.loading.hideLoadingGif();
            setTimeout(function() {
                $("#blocktip").css("visibility", "visible")
            }, 100);
            return false
        }
        return true
    },
    _init: function() {
        if (com4j.ad.intervalID == -1) {
            com4j.ad.intervalID = setTimeout(com4j.ad.onAdClose, 300)
        }
        com4j.ad._imaContainer = $("#imaContainer")[0];
        com4j.ad._videoContent = $("#imaVideo")[0];
        var adDisplayContainer = new google.ima.AdDisplayContainer(com4j.ad._imaContainer,com4j.ad._videoContent);
        adDisplayContainer.initialize();
        com4j.ad._adsLoader = new google.ima.AdsLoader(adDisplayContainer);
        com4j.ad._adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, com4j.ad.onAdsManagerLoaded, false);
        com4j.ad._adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, com4j.ad.onAdError, false);
        com4j.ad._videoContent.onended = com4j.ad.contentEndedListener;
        com4j.ad._adsRequest = new google.ima.AdsRequest;
        com4j.ad._adsRequest.adTagUrl = com4j.ad.adTagUrl;
        com4j.ad._adsRequest.linearAdSlotWidth = $(window).width();
        com4j.ad._adsRequest.linearAdSlotHeight = $(window).height();
        com4j.ad._adsRequest.nonLinearAdSlotWidth = $(window).width();
        com4j.ad._adsRequest.nonLinearAdSlotHeight = $(window).height();
        com4j.ad._adsRequest.forceNonLinearFullSlot = true;
        com4j.resize.add(com4j.ad.resizeAd, com4j.ad)
    },
    init: function() {
        var refer = document.referrer;
        refer = refer.substr(refer.indexOf("://") + 1);
        if ((com4j.config.ForJoyH5_ShowPreGameAd || refer.indexOf(com4j.config.host) == 0) && com4j.config.ForJoyH5_stats) {
            com4j.ad.show()
        } else {
            com4j.ad.onAdClose()
        }
    },
    onAdsManagerLoaded: function(adsManagerLoadedEvent) {
        com4j.ad._adsManager = adsManagerLoadedEvent.getAdsManager(com4j.ad._videoContent);
        com4j.ad._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, com4j.ad.onAdError);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, com4j.ad.onAllAdsCompleted);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, com4j.ad.onUserClose);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, com4j.ad.onAdComplete);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, com4j.ad.onAdLoaded);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, com4j.ad.onContentResumeRequested);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.LOG, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, com4j.ad.onTypeTest);
        com4j.ad._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, com4j.ad.onTypeTest);
        com4j.ad._adsManager.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.FULLSCREEN);
        com4j.ad._adsManager.start()
    },
    onContentResumeRequested: function(event) {
        com4j.ad.onAdClose()
    },
    onTypeTest: function(event) {
        console.log(event)
    },
    onAdLoaded: function(event) {
        clearTimeout(com4j.ad.intervalID);
        $(com4j.ad._imaContainer).css("visibility", "visible");
        $(com4j.ad._imaContainer).children(":first").css("visibility", "visible");
        com4j.ad._loaded = true;
        var contentType = com4j.ad._adsManager.getCurrentAd().getContentType();
        var type = 0;
        if (contentType == "text") {
            type = 0
        } else if (contentType == "image/png") {
            type = 1
        } else {
            type = 2
        }
        var evt = new MGEvent("CMD_AD_TYPE_LOG");
        evt.data = {
            ad_type: type
        };
        MGDelegate.dispatcherEvent(evt)
    },
    contentEndedListener: function() {
        com4j.ad._adsLoader.contentComplete()
    },
    onAdError: function(adErrorEvent) {
        console.warn(adErrorEvent.getError());
        com4j.ad.onAdClose()
    },
    onAdComplete: function(event) {},
    onAllAdsCompleted: function(event) {
        com4j.ad.onAdClose()
    },
    onAdClose: function() {
        var type = "AD_CLOSE";
        if (com4j.ad.finishedPre == false) {
            type = type + "_PRE";
            com4j.ad.finishedPre = true
        }
        com4j.ad.close();
        MGDelegate.dispatcherEvent(new MGEvent(type))
    },
    onUserClose: function(event) {
        com4j.ad.onAdClose()
    },
    resizeAd: function() {
        if (com4j.ad._adsManager) {
            com4j.ad._adsManager.resize($(window).width(), $(window).height(), google.ima.ViewMode.FULLSCREEN)
        }
    },
    _onFinishedAd: function() {
        com4j.modal.hide();
        var showedRAD = com4j.ad._onExecRAD();
        if (!showedRAD) {
            com4j.ad._onExecIAD()
        }
        com4j.ad._callbackObj = null;
        com4j.game.fireResumeGame()
    },
    _onExecIAD: function() {
        var obj = com4j.ad._callbackObj;
        if (!obj) {
            return false
        }
        var callback = obj.callback;
        if (com4j.utils.isNil(callback)) {
            return false
        }
        var thisObj = obj.thisObj;
        var args = obj.args;
        callback.apply(thisObj, args);
        return true
    },
    _onExecRAD: function() {
        var obj = com4j.ad._callbackObj;
        if (!obj) {
            return false
        }
        var callback = obj.successCallback;
        if (com4j.utils.isNil(callback)) {
            return false
        }
        var thisObj = obj.successThis;
        var args = obj.successArgs;
        callback.apply(thisObj, args);
        return true
    },
    getShowable: function(force) {
        if (com4j.ad._lastInGameAdTime === -1 || force) {
            return true
        }
        var now = (new Date).getTime();
        var interval = now - com4j.ad._lastInGameAdTime;
        if (interval >= com4j.config.ForJoyH5_InGameAdInterval * 1e3) {
            return true
        } else {
            var least = Math.ceil(com4j.config.ForJoyH5_InGameAdInterval - interval / 1e3);
            com4j.debug("Please call com4j.ad.show() later, wait " + least + "s");
            return false
        }
    },
    updateLastInGameAdTime: function() {
        var now = (new Date).getTime();
        com4j.ad._lastInGameAdTime = now
    },
    show: function(callbackObj, force) {
      // com4j.ad._onFinishedAd();
      // return true;
        if (!com4j.config.ForJoyH5_ShowAd) {
            if (callbackObj) {
                com4j.ad._callbackObj = callbackObj;
                com4j.ad._onFinishedAd()
            }
            return
        }
        if (!com4j.ad.check()) {
            return
        }
        var canShow = com4j.ad.getShowable(force);
        com4j.ad._callbackObj = callbackObj;
        if (!canShow && callbackObj) {
            com4j.ad._onFinishedAd();
            return
        }
        if (!com4j.ad._adsRequest) {
            com4j.ad._init()
        }
        if (!com4j.config.ForJoyH5_stats && !force) {
            com4j.ad._onFinishedAd();
            return
        }
        if (com4j.ad._requesting) {
            com4j.debug("Is requesting Ad....");
            return
        }
        if (canShow || force) {
            com4j.ad._requesting = true;
            clearTimeout(com4j.ad.intervalID);
            com4j.ad.intervalID = setTimeout(com4j.ad.onAdClose, 300);
            $(com4j.ad._imaContainer).css("display", "");
            com4j.loading.showLoadingGif();
            setTimeout(function() {
                com4j.ad._adsLoader.requestAds(com4j.ad._adsRequest);
                com4j.ad.resizeAd()
            }, 500);
            com4j.game.firePauseGame();
            console.log("ad.show() - success")
        } else {
            com4j.ad._onFinishedAd()
        }
    },
    close: function() {
        if (com4j.ad._loaded == true) {
            com4j.ad.updateLastInGameAdTime()
        }
        com4j.ad._requesting = false;
        com4j.loading.hideLoadingGif();
        com4j.ad._loaded = false;
        clearTimeout(com4j.ad.intervalID);
        com4j.ad._adsManager && com4j.ad._adsManager.destroy();
        $(com4j.ad._imaContainer).css("display", "none");
        com4j.ad._onFinishedAd();
        MGDelegate.dispatcherEvent(new MGEvent("CMD_AD_CLOSE"));
        com4j.modal.hide()
    }
};
com4j.game = {
    _isReady: false,
    get isReady() {
        return this._isReady
    },
    set isReady(v) {
        this._isReady = v;
        if (v && com4j.config.isReady) {
            com4j.game.start()
        }
    },
    game_url: "",
    inited: false,
    _enterGameEnabled: false,
    _lastLeft: NaN,
    _lastTop: NaN,
    set enterGameEnabled(value) {
        this._enterGameEnabled = value;
        if (value) {
            this.enterGame()
        }
    },
    get enterGameEnabled() {
        return this._enterGameEnabled
    },
    firePauseGame: function() {
        var evt = new MGEvent(MGEvent.S2C_PAUSE_GAME);
        MGDelegate.dispatcherEvent(evt)
    },
    fireResumeGame: function() {
        var evt = new MGEvent(MGEvent.S2C_RESUME_GAME);
        MGDelegate.dispatcherEvent(evt)
    },
    c2Ready: function(element) {
        com4j.config.engineType = "c2";
        $(com4j.config.canvasId).css("position", "absolute");
        $(element).attr("onload", com4j.game.c2GameLoaded)
    },
    c2GameLoaded: function() {
        com4j.game.isReady = true
    },
    c2GameStart: function() {
        cr_createRuntime(com4j.config.canvasName);
        cr.runtime.prototype._progress = 0;
        window["cr_getC2Runtime"] = function() {
            var canvas = document.getElementById("gameCanvas");
            if (canvas)
                return canvas["c2runtime"];
            else if (window["c2runtime"])
                return window["c2runtime"];
            else
                return null
        }
        ;
        Object.defineProperty(cr.runtime.prototype, "progress", {
            get: function() {
                return cr.runtime.prototype._progress
            },
            set: function(value) {
                if (value < 1) {
                    var evt = new MGEvent(MGEvent.LOAD_PROGRESS);
                    evt.data = {
                        percent: value * 100
                    };
                    MGDelegate.dispatcherEvent(evt)
                } else {
                    MGDelegate.dispatcherEvent(new MGEvent(MGEvent.LOAD_COMPLETE))
                }
                cr.runtime.prototype._progress = value
            }
        });
        function onVisibilityChanged() {
            if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
                cr_setSuspended(true)
            } else {
                cr_setSuspended(false)
            }
        }
        document.addEventListener("visibilitychange", onVisibilityChanged, false);
        document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
        document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
        document.addEventListener("msvisibilitychange", onVisibilityChanged, false)
    },
    cocosReady: function(element) {
        com4j.config.engineType = "cocos";
        $(element).attr("onload", com4j.game.cocosEngineLoaded);
        element = $("script[src='game.js']")[0];
        $(element).attr("onload", com4j.game.cocosGameLoaded)
    },
    cocosEngineLoaded: function() {
        $(com4j.config.canvasId).css("position", "")
    },
    cocosGameLoaded: function(element) {
        com4j.game.isReady = true
    },
    cocosStart: function() {
        if (MGDelegate.hasListener(MGEvent.GAME_STARTUP)) {
            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.GAME_STARTUP))
        } else {
            try {
                cc.game.run()
            } catch (e) {
                com4j.debug("cc.game.run() not found")
            }
        }
    },
    createJsReady: function(element) {
        com4j.config.engineType = "createjs"
    },
    createJsStart: function() {},
    preInit: function() {
        com4j.game._listenEvents();
        MGDelegate.addEventListener("AD_CLOSE_PRE", function(event) {
            if (com4j.game.inited == true) {
                com4j.game.init()
            } else {
                com4j.game.inited = true
            }
        }, this);
        if ($("script[data-load]").data("load")) {
            com4j.config.engineType = "cocos";
            $(com4j.config.canvasId).css("position", "");
            $vers = $("script[data-load]").data("load").split(",");
            com4j.loading.totalStep = $vers.length;
            var loadCount = 0;
            for (var i = 0; i < $vers.length - 1; i++) {
                com4j.loadScript($vers[i], function() {
                    loadCount++;
                    if (loadCount == $vers.length - 1) {
                        if (com4j.game.inited == true) {
                            com4j.game.init()
                        } else {
                            com4j.game.inited = true
                        }
                    }
                }, com4j.game)
            }
            this.game_url = $vers[$vers.length - 1]
        }
    },
    _listenEvents: function() {
        var eventHandler = function(event) {
            com4j.debug(event.type);
            switch (event.type) {
            case MGEvent.CLICK_CREDITS:
                com4j.ga.sendEvent("GAME", event.type);
                com4j.credits.show();
                break;
            case MGEvent.CLICK_MINILOGO:
                com4j.ga.sendEvent("GAME", event.type);
                if (com4j.config.ForJoyH5_stats === false) {
                    window.open(com4j.config.ForJoyH5_Website, "_blank")
                } else {
                    if (com4j.config.ForJoyH5_MoreGamesUrl !== "no") {
                        window.open(com4j.config.ForJoyH5_MoreGamesUrl, "_blank")
                    } else {
                        if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenClickLogo) {
                            com4j.moregames.show(true)
                        }
                    }
                }
                break;
            case MGEvent.CLICK_MORE:
                com4j.ga.sendEvent("GAME", event.type);
                if (com4j.config.ForJoyH5_stats === false) {
                    window.open(com4j.config.ForJoyH5_Website, "_blank")
                } else {
                    if (com4j.config.ForJoyH5_MoreGamesUrl !== "no") {
                        window.open(com4j.config.ForJoyH5_MoreGamesUrl, "_blank")
                    } else {
                        com4j.moregames.show(true)
                    }
                }
                break;
            case MGEvent.DOWNLOAD_APP:
                var platform = event.data.platform;
                com4j.ga.sendEvent("GAME", event.type, platform);
                break;
            case MGEvent.FRAMEWORK_INFO_REQUEST:
                var evt = new MGEvent(MGEvent.FRAMEWORK_INFO_RESPONSE);
                evt.data = {
                    debug: com4j.config.debug,
                    gamename: com4j.config.NameID,
                    nameid: com4j.config.NameID,
                    miniLogoUrl: com4j.config.ForJoyH5_SmallLogo,
                    showmsgs: com4j.config.showmsgs,
                    sharemsgs: com4j.config.sharemsgs,
                    language: com4j.config.language,
                    HasScreenshot: com4j.config.HasScreenshot,
                    showCredits: com4j.config.ForJoyH5_ShowCreditsButton,
                    showMoreGamesButton: com4j.config.ForJoyH5_ShowMoreGamesButton,
                    fullscreenEnabled: com4j.config.ForJoyH5_Fullscreen
                };
                MGDelegate.dispatcherEvent(evt);
                break;
            case MGEvent.LOAD_COMPLETE:
                break;
            case MGEvent.PAUSE_GAME:
                com4j.ga.sendEvent("GAME", event.type);
                break;
            case MGEvent.SCREENSHOT:
                com4j.ga.sendEvent("GAME", event.type);
                break;
            case MGEvent.SHARE:
                com4j.ga.sendEvent("GAME", event.type);
                break;
            case MGEvent.SHOW_LOSE:
                com4j.ga.sendEvent("GAME", event.type);
                if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                    com4j.moregames.show(false)
                }
                com4j.ad.show();
                break;
            case MGEvent.SHOW_WIN:
                com4j.ga.sendEvent("GAME", event.type);
                if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                    com4j.moregames.show(false)
                }
                com4j.ad.show();
                break;
            case MGEvent.LEVEL_FAIL:
                var level = event.data.level;
                com4j.ga.sendEvent("GAME", event.type, level);
                if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                    com4j.moregames.show(false)
                }
                com4j.ad.show();
                break;
            case MGEvent.LEVEL_WIN:
                var level = event.data.level;
                com4j.ga.sendEvent("GAME", event.type, level);
                if (com4j.config.ForJoyH5_ShowMoreGamesDivWhenGameOver) {
                    com4j.moregames.show()
                }
                break;
            case MGEvent.START_GAME:
                com4j.ga.sendEvent("GAME", event.type);
                break;
            case MGEvent.CONTINUE_GAME:
                com4j.ga.sendEvent("GAME", event.type);
                break;
            case MGEvent.ADDED_TO_STAGE:
                com4j.ga.sendEvent("GAME", event.type);
                break;
            case MGEvent.CHANGE_SCENE:
                com4j.ad.show(event.data);
                break;
            case MGEvent.FULLSCREEN:
                if (!com4j.config.ForJoyH5_Fullscreen) {
                    break
                }
                com4j.ga.sendEvent("GAME", event.type, !com4j._isFullscreen);
                if (com4j._isFullscreen) {
                    com4j.exitFullscreen()
                } else {
                    com4j.fullscreen()
                }
                break;
            case MGEvent.REWARD_AD:
                com4j.ad.show(event.data, true);
                break;
            case MGEvent.C2S_START_GAME:
                com4j.ad.show(event.data);
                break;
            case MGEvent.C2S_RESTART_GAME:
                com4j.ad.show(event.data);
                break;
            default:
                break
            }
        };
        var events = [MGEvent.CLICK_CREDITS, MGEvent.CLICK_MINILOGO, MGEvent.CLICK_MORE, MGEvent.DOWNLOAD_APP, MGEvent.FRAMEWORK_INFO_REQUEST, MGEvent.LOAD_COMPLETE, MGEvent.PAUSE_GAME, MGEvent.SCREENSHOT, MGEvent.SHARE, MGEvent.SHOW_LOSE, MGEvent.SHOW_WIN, MGEvent.LEVEL_FAIL, MGEvent.LEVEL_WIN, MGEvent.START_GAME, MGEvent.CONTINUE_GAME, MGEvent.ADDED_TO_STAGE, MGEvent.CHANGE_SCENE, MGEvent.FULLSCREEN, MGEvent.REWARD_AD, MGEvent.C2S_START_GAME, MGEvent.C2S_RESTART_GAME];
        for (var i = 0, len = events.length; i < len; i++) {
            MGDelegate.addEventListener(events[i], eventHandler, this)
        }
        MGDelegate.addEventListener(MGEvent.LOAD_START, this.onLoadStart, this);
        MGDelegate.addEventListener(MGEvent.LOAD_PROGRESS, this.onLoadProgress, this);
        MGDelegate.addEventListener(MGEvent.LOAD_COMPLETE, this.onLoadComplete, this)
    },
    init: function() {
        com4j.loadScript(com4j.game.game_url, function() {
            setTimeout(function() {
                com4j.game.start()
            }, 100)
        }, com4j.game);
        com4j.loading.hideLoadingGif()
    },
    onLoadStart: function(event) {},
    onLoadProgress: function(event) {
        var percent = event.data["percent"];
        com4j.loading.setProgress(percent)
    },
    onLoadComplete: function(event) {
        var percent = 100;
        com4j.loading.setProgress(percent);
        var interval = (new Date).getTime() - com4j.ga._loadStart;
        com4j.ga.sendTiming("LOAD_TIME", interval);
        var showEffect = function() {
            $("#preloaded").animate({
                opacity: 1,
                marginTop: 0,
                height: 80,
                width: 80
            }, 200, "linear")
        };
        var hideEffect = function() {
            $("#preloaded").animate({
                opacity: 1,
                marginTop: 4,
                height: 72,
                width: 72
            }, 100, "linear", showEffect)
        };
        $("#hourglass").animate({
            opacity: 0
        }, 200);
        $("#preloadingB").animate({
            opacity: 0
        }, 200, function() {
            $("#hourglass").remove();
            $("#preloaded").animate({
                opacity: 1,
                marginTop: 0,
                height: 80,
                width: 80
            }, 300, "linear", function() {
                hideEffect();
                console.log("--fx--hideEffect--");
                com4j.game.enterGameEnabled = true;
                $("#preloaded").remove();
                $("#preloaded").on("click", function() {
                    if (com4j.ad.getShowable()) {
                        var obj = {
                            callback: function() {
                                com4j.game.enterGameEnabled = true
                            }
                        };
                        com4j.ad.show(obj, true)
                    } else {
                        com4j.game.enterGameEnabled = true
                    }
                    $("#preloaded").remove()
                })
            })
        });
        setInterval(function() {
            com4j.game.resizeGame()
        }, 100);
        com4j.resize.handler()
    },
    enterGame: function() {
        setTimeout(function() {
            MGDelegate.dispatcherEvent(new MGEvent(MGEvent.ENTER_GAME));
            com4j.loading.destroy()
        }, 50)
    },
    resizeGame: function() {
        var w = $(com4j.config.canvasId).width();
        var h = $(com4j.config.canvasId).height();
        var left = Math.floor((com4j.resize.sw - w) / 2);
        var top = Math.floor((com4j.resize.sh - h) / 2);
        if (com4j.game._lastLeft != left || com4j.game._lastTop != top) {
            $(com4j.config.canvasId).css("left", left + "px");
            $(com4j.config.canvasId).css("top", top + "px")
        }
    },
    start: function() {
        if (com4j.config.engineType == "cocos") {
            this.cocosStart()
        } else if (com4j.config.engineType == "c2") {
            this.c2GameStart()
        }
    }
};
com4j.ga = {
    _loadStart: (new Date).getTime(),
    send: function() {
        var args = ["send"].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        if (typeof window.ga !== "function") {
            com4j.debug("'ga' can not found!");
            return
        } else {
            com4j.debug("ga", args)
        }
        window.ga.apply(window, args)
    },
    sendEvent: function(eventCategory, evebtAction, eventLabel, eventValue, fieldsObject) {
        var args = ["event", com4j.config.NameID].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    },
    sendTiming: function(timingCategory, timingVar, timingValue, timingLabel, fieldsObject) {
        var args = ["timing", com4j.config.NameID].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    },
    sendSocial: function(socialNetwork, socialAction, socialTarget, fieldsObject) {
        var args = ["social", com4j.config.NameID].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    },
    sendException: function(exDescription, exFatal) {
        var args = ["exception"].concat(arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
        this.send.apply(window, args)
    }
};
com4j.share = {
    config: null,
    init: function() {
        com4j.share.config = {
            qq: com4j.share._toQQ,
            weibo: com4j.share._toWeibo,
            weixin: com4j.share._toWeixin,
            twitter: com4j.share._toTwitter,
            facebook: com4j.share._toFacebook
        }
    },
    to: function(platform, NameID, Title, Content, pubid) {
        platform = platform.toLowerCase();
        var func = com4j.share.config[platform];
        if (func) {
            NameID = encodeURIComponent(NameID);
            Title = encodeURIComponent(Title);
            Content = encodeURIComponent(Content);
            pubid = encodeURIComponent(pubid);
            func.apply(this, [NameID, Title, Content, pubid])
        }
    },
    _toWeixin: function(NameID, Title, Content, pubid) {
        try {
            if (typeof wxInfo == "undefined") {} else {
                wxInfo["desc"] = Content;
                UpdateWeiXin()
            }
        } catch (e) {}
    },
    _getTopHref: function() {
        try {
            return top.location.href
        } catch (e) {
            return false
        }
    },
    _toQQ: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + openURL + "&title=" + Title + " &pics=" + com4j.config.host + "thumb/" + NameID + ".jpg&summary=" + Content;
        window.open(url)
    },
    _toWeibo: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://service.weibo.com/share/share.php?url=" + openURL + "&title=" + Content + "&searchPic=true&pic=" + com4j.config.host + "thumb/" + NameID + ".jpg";
        window.open(url)
    },
    _toFacebook: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://www.facebook.com/dialog/feed?app_id= 1692226401062334&display=popup&caption=" + Content + "&link=" + openURL + "&redirect_uri=" + openURL + "&picture=" + com4j.config.host + "thumb/" + NameID + ".jpg";
        window.open(url)
    },
    _toTwitter: function(NameID, Title, Content, pubid) {
        var openURL = com4j.share._getTopHref() || com4j.config.host + NameID + "/index.php?pubid=" + pubid;
        openURL = encodeURIComponent(openURL);
        var url = "https://twitter.com/share?text=" + Content + "&url=" + openURL;
        window.open(url)
    }
};
com4j.credits = {
    init: function() {
        var evtStr = com4j.config.touchEnabled ? "touchstart touchend" : "mouseup";
        $("#closeCreditsBtn").bind(evtStr, function(event) {
            if ($("#credtis").css("visibility") === "hidden") {
                return
            }
            com4j.credits.close();
            event.stopPropagation();
            event.preventDefault()
        })
    },
    show: function() {
        $("#credits").css("visibility", "visible");
        com4j.modal.show()
    },
    close: function() {
        $("#credits").css("visibility", "hidden");
        com4j.modal.hide()
    }
};
com4j.modal = {
    intervalID: -1,
    init: function() {
        function onClickHandler(event) {
            if ($(this).css("visibility") === "hidden") {
                return
            }
            if (event.target == event.currentTarget) {
                event.stopPropagation();
                event.preventDefault()
            }
        }
        $("#modal").bind("touchstart touchend touchmove mousedown mouseup mousemove", onClickHandler)
    },
    show: function(bgAlpha) {
        $("#modal").css("visibility", "visible");
        bgAlpha = typeof bgAlpha === "undefined" ? 0 : bgAlpha;
        $("#modal").css("background", "rgba(0,0,0," + bgAlpha + ")")
    },
    checkAllHide: function() {},
    hide: function() {
        var allHide = true;
        $("body > div").each(function(index, element) {
            if ($(this)[0] != $("#modal")[0]) {
                if ($(this)[0].id == "moregames" && $(this)[0].id == "credits" && $(this)[0].id == "imaContainer") {
                    if ($(this).css("display") == "none" || $(this).css("visibility") == "hidden") {} else {
                        allHide = false
                    }
                }
            }
        });
        if (allHide) {
            if (com4j.modal.intervalID) {
                clearTimeout(com4j.modal.intervalID)
            }
            com4j.modal.intervalID = setTimeout(function() {
                $("#modal").css("visibility", "hidden")
            }, 100)
        }
    }
};
com4j.loading = {
    currentStep: 0,
    totalStep: 1,
    init: function() {
        $("#preloadingRoot").css("background", com4j.config.ForJoyH5_BgColor);
        $("#logoImg").attr("src", com4j.config.ForJoyH5_BigLogo);
        $("#logoImg").load(function() {
            com4j.loading.resizeLogo();
            $("#preloadingContainer").css("visibility", "visible")
        });
        com4j.resize.add(com4j.loading.resizeLogo, this)
    },
    resizeLogo: function() {
        $("#preloadingContainer").css("left", (com4j.resize.sw - $("#preloadingContainer").width()) / 2 + "px");
        $("#preloadingContainer").css("top", (com4j.resize.sh - $("#preloadingContainer").height()) / 2 + "px")
    },
    setProgress: function(percent) {
        $("#preloadingF").css("width", percent + "%")
    },
    showLoadingGif: function() {
        $("#loadingGif").css("display", "");
        com4j.modal.show()
    },
    hideLoadingGif: function() {
        $("#loadingGif").css("display", "none");
        com4j.modal.hide()
    },
    show: function() {
        com4j.loading.resizeLogo();
        $("#preloadingRoot").css("visibility", "visible")
    },
    hide: function() {
        com4j.loading.resizeLogo();
        $("#preloadingRoot").css("visibility", "hidden");
        com4j.modal.hide()
    },
    destroy: function() {
        $("#preloadingRoot").remove();
        com4j.modal.hide()
    }
};
com4j.debug = function() {
    var log = function() {
        console.group();
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        for (var i = 0, len = args.length; i < len; i++) {
            var arg = args[i];
            if (typeof arg === "string") {
                var styleStr = "color:yellow;background:green;";
                var fmt = "%c%s";
                if (com4j.config.devMode) {
                    console.trace(fmt, styleStr, arg)
                } else {
                    console.log(fmt, styleStr, arg)
                }
            } else {
                if (com4j.config.devMode) {
                    console.trace(arg)
                } else {
                    console.log(arg)
                }
            }
        }
        console.groupEnd()
    };
    if (com4j.config.debug) {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        log.apply(null, args)
    }
}
;
com4j.ready = function() {
    function onClickHandler(event) {
        if ($(this).css("visibility") === "hidden") {
            return
        }
        if (event.target == event.currentTarget) {
            event.stopPropagation();
            event.preventDefault()
        }
    }
    $("body > div").bind("touchstart touchend mousedown mouseup", onClickHandler);
    $("script[src]").each(function(index, element) {
        if ($(element).attr("src").indexOf("c2runtime.js") != -1) {
            com4j.game.c2Ready(element)
        } else if ($(element).attr("src").indexOf("cocos") != -1) {
            com4j.game.cocosReady(element)
        } else if ($(element).attr("src").indexOf("createjs") != -1) {
            com4j.game.createJsReady(element)
        }
    })
}
;
com4j.init = function() {
    var styleStr = "color:yellow;background:green;";
    var fmt = "%c%s";
    console.log(fmt, styleStr, "Com4jAPI VERSION " + this.VERSION);
    window.addEventListener("resize", com4j.resize.handler);
    window.onorientationchange = com4j.resize.handler;
    document.addEventListener("fullscreenchange", com4j.onFullscreenChanged, false);
    document.addEventListener("mozfullscreenchange", com4j.onFullscreenChanged, false);
    document.addEventListener("webkitfullscreenchange", com4j.onFullscreenChanged, false);
    document.addEventListener("msfullscreenchange", com4j.onFullscreenChanged, false);
    com4j.config.init();
    com4j.game.preInit();
    if ($("#gameCanvas").length == 0) {
        $(document.body).append('<canvas id="gameCanvas" oncontextmenu="event.preventDefault()" style="position: absolute;" width="0" height="0"></canvas>')
    }
    var strVar = "" + '<div id="modal"></div>' + '<div id="preloadingRoot">' + '<div id="preloadingContainer">' + '<img id="logoImg">' + '<div id="preloadingB" style="overflow: auto;">' + '<div id="preloadingF"></div>' + "</div>" + '<div id="hourglass"></div>' + '<div id="preloaded"></div>' + "</div>" + "</div>" + '<div id="loadingGif">' + '<div class="new_ui_loading-gif"></div>' + "</div>" + '<div id="moregames" class="more_container">' + '<div class="new_ui_box-content">' + '<p id="closeMoreBtn" class="new_ui_sprite new_ui_button-close"></p>' + '<div class="new_ui_games-list">' + "</div>" + "</div>" + "</div>" + '<div id="imaContainer">' + '<video id="imaVideo"></video>' + "</div>" + '<div id="credits">' + '<p id="closeCreditsBtn" class="new_ui_sprite new_ui_button-close"></p>' + '<a href="https://w.4j.com/html5games" target="_blank">' + '<img src="' + com4j.config.ForJoyH5_BigLogo + '">' + "<p>" + "Developed By 4J.Com" + "<br>" + "Free HTML5 Games For Your Site" + "</p>" + "</a>" + "</div>" + '<div id="blocktip">' + "<p>Please disable the ad blocker, and then refresh the page to enjoy the game, for free! </p>" + "<br>" + "<p>Thank you for your support.</p>" + "<br>" + '<a href="//help.stan.com.au/hc/en-us/articles/204778087-How-do-I-disable-AdBlock-" target="_blank">How to disable it?</a>' + "</div> ";
    $(document.body).append(strVar);
    com4j.modal.init();
    var pubid = "default";
    var v = "";
    if (window.location.search != "") {
        var parameters = window.location.search.substring(1).split(/&/).reduce(function(parameters, element) {
            var keyValuePair = element.split(/=/);
            parameters[keyValuePair[0]] = keyValuePair[1];
            return parameters
        }, {});
        pubid = parameters["pubid"] || "default";
        v = parameters["v"] || "";
        if (parameters.hasOwnProperty("debug") || parameters.hasOwnProperty("_ijt")) {
            com4j.config.debug = true
        }
        if (parameters.hasOwnProperty("dev") && com4j.config.debug) {
            com4j.config.devMode = true
        }
        com4j.config.parameters = parameters
    }
    var isRelease = true;
    if (window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1" || window.location.hostname == "office.miagame.com") {
        isRelease = false;
        com4j.config.debug = true
    }
    com4j.config.ForJoyH5_pubid = pubid;
    com4j.config.v = v;
    var url = "patch/4j/setting.json?"+ com4j.config.host + "setting/" + pubid + ".json?" + v;
    $.get(url, function(data, status, xhr) {
        if (status == "success") {
            for (var i in data) {
                var key = "ForJoyH5_" + i;
                if (com4j.config.hasOwnProperty(key)) {
                    var value = data[i];
                    if (typeof value == "string") {
                        value = decodeURIComponent(value)
                    }
                    com4j.config[key] = value
                }
            }
            com4j.config.ForJoyH5_Fullscreen = com4j.fullscreenEnabled && com4j.config.ForJoyH5_Fullscreen
        }
    }).fail(function() {}).always(function() {
        if (com4j.config.ForJoyH5_ShowAd && !com4j.ad.check()) {
            com4j.ga.sendException("The ad is blocked.", false);
            $.get("patch/json/null.json?https://geoip-db.com/json/", function(data) {
                var blockClientInfo = data["country_code"] + "/" + data["country_name"] + "/" + data["region_code"] + "/" + data["region_name"] + "/" + data["city"];
                com4j.ga.sendEvent("ADVERTISING", "BLOCKED", blockClientInfo)
            });
            return
        }
        com4j.credits.init();
        com4j.moregames.init();
        com4j.ad.init();
        com4j.loading.init();
        com4j.share.init();
        com4j.config.isReady = true;
        if (isRelease) {
            var url = "/ajax_addgameplay.php?" + "pubid=" + com4j.config.ForJoyH5_pubid + "&mid=" + com4j.config.ForJoyH5_mid + "&game=" + com4j.config.ForJoy_gameid + "";
            // $.get(url)
        }
        $(document.body).css("background", com4j.config.ForJoyH5_BgColor);
        $(document.documentElement).css("background", com4j.config.ForJoyH5_BgColor);
        com4j.resize.handler();
        if (com4j.initCallbackObj) {
            var callback = com4j.initCallbackObj.callback;
            var context = com4j.initCallbackObj.context;
            var params = com4j.initCallbackObj.params;
            callback.apply(context, params)
        }
    })
}
;
window.com4j = com4j;
$(document).ready(function() {
    com4j.init();
    com4j.ready()
});
