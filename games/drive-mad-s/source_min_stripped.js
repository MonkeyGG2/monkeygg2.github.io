window.addEventListener("beforeunload", function (e) {
  console.log("skibidi");
  e.preventDefault();
});

var isMobile = false;
var postRunDone = false;
var gameGuid = null;
var gameStarted = false;
var startupTimeStr = "";
var firebaseApp = null;
var firebaseStorage = null;
var singleGameBlob = null;
var singleGameReadCounts = false;
var singleGameReadLedger = false;
var loadProgressFrac = 0;
var gameDownloadProgressFrac = 0;
var portraitStretch = false;
var prerollDone = true;
window.addEventListener("DOMContentLoaded", domContentLoaded);
window.addEventListener("load", function () {
  let guid = getGameGuidString();
  if (guid != "") {
    downloadLinkedGame(guid);
  }
  if (inIframe()) {
    document.addEventListener("click", (ev) => {
      let canvas = document.getElementById("canvas");
      if (canvas) {
        canvas.focus();
      }
    });
  }
});

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function updateLoadProgress() {
  let guid = getGameGuidString();
  let progressMaxValue = guid == "" ? 100 : 200;
  let progressElement = document.getElementById("progress");
  if (progressElement) {
    progressElement.value = Math.round(
      (loadProgressFrac + gameDownloadProgressFrac) * 100,
    );
    progressElement.max = progressMaxValue;
  }
  if (loadProgressFrac >= 1 && (guid == "" || gameDownloadProgressFrac >= 1)) {
    console.log("Loading done");
    showPlayButton();
  }
}

function downloadLinkedGame(guid) {
  // let sref = firebaseStorage.ref(`games/${guid}`);
  const fakeProgress = function () {
    if (gameDownloadProgressFrac < 1) {
      gameDownloadProgressFrac += 0.1;
      if (gameDownloadProgressFrac > 0.95) {
        gameDownloadProgressFrac = 0.95;
      } else {
        setTimeout(fakeProgress, 200);
      }
      updateLoadProgress();
    }
  };
  fakeProgress();
  // sref.getDownloadURL().then((url) => {
  var url = `./${getMeta("fancade:guid")}`;
  simpleLogC("Got download url " + url);
  let xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = (event) => {
    let blob = xhr.response;
    singleGameBlob = blob;
    gameDownloadProgressFrac = 1;
    updateLoadProgress();
  };
  xhr.onerror = function () {
    simpleLogC("Unable to download file, XMLHttpRequest error");
    showLoadError("Unable to load game");
  };
  xhr.open("GET", url);
  xhr.send();
}

var showPlayButtonAttempts = 0;

function showPlayButton() {
  checkStartGame();
}

function domContentLoaded() {
  let canvas = document.getElementById("canvas");
  canvas.addEventListener("contextmenu", stopContextMenu);
  if (!postRunDone) {
    resizeCanvas(false);
  }
  let vanityUrl = getMeta("fancade:vanity_url");
  if (vanityUrl.length > 0) {
    history.replaceState({}, "", vanityUrl);
  }
  window.addEventListener("blur", (ev) => setGameFocus(false));
  window.addEventListener("focus", (ev) => setGameFocus(true));
  canvas.onpointerdown = beginPointerDrag;
  canvas.onpointerup = endPointerDrag;
}

function beginPointerDrag(e) {
  let canvas = document.getElementById("canvas");
  canvas.setPointerCapture(e.pointerId);
}

function endPointerDrag(e) {
  let canvas = document.getElementById("canvas");
  canvas.releasePointerCapture(e.pointerId);
}

function setGameFocus(f) {
  if (postRunDone) {
    Module.ccall("set_game_focus", "v", ["number"], [f]);
  }
}

function canBeGameGuid(str) {
  return str && str.match("([A-F]|[0-9]){16}");
}

function getGameGuidString() {
  if (gameGuid != null) {
    return gameGuid;
  }
  gameGuid = "";
  let str = window.location.href;
  if (str) {
    for (let i = 0; i <= str.length - 16; i++) {
      let subStr = str.substr(i, 16);
      if (canBeGameGuid(subStr)) {
        gameGuid = subStr;
      }
    }
  }
  if (gameGuid == "") {
    str = getMeta("fancade:guid");
    if (canBeGameGuid(str)) {
      gameGuid = str;
    }
  }
  if (gameGuid == "") {
    str = parseUrlArgument("override_guid");
    if (canBeGameGuid(str)) {
      gameGuid = str;
    }
  }
  return gameGuid;
}

function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
}

function getCSSRgb(color) {
  return `rgb(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])})`;
}

let lastGradientStyleStr = "";
let lastDeepLinkLoadFraction = 0;

function getGradientStr(frac) {
  let fromColor = [frac * 0x70, frac * 0xe1, frac * 0xfd];
  let toColor = [frac * 0x00, frac * 0xa2, frac * 0xff];
  let str = `linear-gradient(135deg, ${getCSSRgb(fromColor)}, ${getCSSRgb(toColor)})`;
  return str;
}

function setDeepLinkLoadingFraction(frac) {
  let gradient = document.getElementById("gradient");
  let str = getGradientStr(frac);
  if (lastGradientStyleStr != str) {
    lastGradientStyleStr = str;
    gradient.style.backgroundImage = str;
  }
  lastDeepLinkLoadFraction = frac;
}

function hideOverlayGradient() {
  var gradient = document.getElementById("gradient");
  gradient.style.display = "none";
}

var showedStartGameError = false;

function checkStartGame() {
  console.log("Checking if the game should start...");
  try {
    if (prerollDone) {
      console.log("Preroll done, hiding overlay");
      var playContent = document.getElementById("play_content");
      playContent.style.display = "none";
      let guid = getGameGuidString();
      if (guid == "") {
        hideOverlayGradient();
      } else {
        setDeepLinkLoadingFraction(0.0);
      }
      window.addEventListener("beforeunload", function (event) {
        Module.ccall("app_terminate_if_necessary", "v");
      });
      window.addEventListener("unload", function (event) {
        Module.ccall("app_terminate_if_necessary", "v");
      });
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
          Module.ccall("app_resume", "v");
        } else {
          Module.ccall("app_pause", "v");
        }
      });
      Module.ccall("user_accepted_and_clicked", "v");
      gameStarted = true;
      setTimeout(updateStretchButton, 3000);
      try {
        localStorage.setItem("accepted-pp", "yes");
      } catch (err3) {}
    }
  } catch (err) {
    if (!showedStartGameError) {
      let foundModuleAsm = false;
      let additionalInfo = "";
      try {
        if (Module["asm"]) {
          foundModuleAsm = true;
        }
      } catch (err2) {}
      if (!foundModuleAsm) {
        additionalInfo += "Could not find Module.asm";
      }
      // alert(`Error when starting game. Try to reload the page. Error message: ${err}. ${additionalInfo}`);
      showedStartGameError = true;
    }
  }
}

function simpleLogC(str) {
  if (postRunDone) {
    Module.ccall("log_simple", "v", ["string"], [str]);
  } else {
    console.log(str);
  }
}

function appErrorC(code, str) {
  if (postRunDone) {
    Module.ccall("app_error", "v", ["number", "string"], [code, str]);
  } else {
    console.error(str, code);
  }
}

function simpleAppErrorC(str) {
  appErrorC(1, str);
}

function parseUrlArgument(name) {
  let result = "";
  let str = window.location.search;
  if (str.length > 0 && str[0] == "?") {
    var arr = str.substr(1).split("&");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith(name + "=")) {
        result = arr[i].substr(name.length + 1);
        break;
      }
    }
  }
  return result;
}

function parseUrlArgumentInt(name) {
  let str = parseUrlArgument(name);
  let parsed = parseInt(str);
  if (isNaN(parsed)) {
    return 0;
  } else {
    return parsed;
  }
}

function getStartInEditMode() {
  return parseUrlArgumentInt("edit");
}

function getUrlLevelIndex() {
  let path = window.location.pathname.substr(1);
  let slashIndex = path.indexOf("/");
  if (slashIndex >= 0 && path.length > slashIndex + 1) {
    let levelIndexStr = path.substring(slashIndex + 1);
    let slashIndex2 = levelIndexStr.indexOf("/");
    if (slashIndex2 >= 0) {
      levelIndexStr = levelIndexStr.substring(0, slashIndex2);
    }
    let levelIndex = parseInt(levelIndexStr);
    if (!isNaN(levelIndex)) {
      return levelIndex - 1;
    }
  }
  let level = parseUrlArgumentInt("lv");
  if (level > 0) {
    return level - 1;
  } else {
    return -1;
  }
}

function resizeCanvas(informC) {
  let fullscreen = !!document.fullscreenElement;
  let iw = window.innerWidth;
  let ih = window.innerHeight;
  let canvas = document.getElementById("canvas");
  let border = document.getElementById("canvas_border");
  let maxW = parseUrlArgumentInt("max_w");
  let maxH = parseUrlArgumentInt("max_h");
  let aspectRatioW = parseUrlArgumentInt("ar_w");
  let aspectRatioH = parseUrlArgumentInt("ar_h");
  let targetW = maxW;
  let targetH = maxH;
  let forceWidth = false;
  let forceHeight = false;
  let forceAr = false;
  if (stretchMode || fullscreen) {
    targetW = iw;
    targetH = ih;
  } else {
    if (targetW <= 0) {
      targetW = 1024;
    } else {
      forceWidth = true;
    }
    if (targetH <= 0) {
      targetH = 768;
    } else {
      forceHeight = true;
    }
    if (aspectRatioW < 0.01) {
      aspectRatioW = 16.0;
    } else {
      forceAr = true;
    }
    if (aspectRatioH < 0.01) {
      aspectRatioH = 9.0;
    } else {
      forceAr = true;
    }
    let ar = aspectRatioH / aspectRatioW;
    let fitWithinLimits = function () {
      targetW = Math.min(targetW, iw);
      if (forceWidth) {
        targetW = Math.min(maxW, targetW);
      }
      targetH = Math.min(targetH, ih);
      if (forceHeight) {
        targetH = Math.min(maxH, targetH);
      }
    };
    let enforceAr = function () {
      if (forceAr) {
        if (forceWidth) {
          targetH = targetW * ar;
          if (targetH > ih) {
            targetH = ih;
            targetW = targetH / ar;
          }
        } else if (forceHeight) {
          targetW = targetH / ar;
          if (targetW > iw) {
            targetW = iw;
            targetH = targetW * ar;
          }
        } else {
          targetH = ih;
          targetW = targetH / ar;
          if (targetW > iw) {
            targetW = iw;
            targetH = targetW * ar;
          }
        }
      }
    };
    fitWithinLimits();
    enforceAr();
  }
  let styleW = targetW;
  let styleH = targetH;
  if (iw < targetW || ih < targetH) {
    styleW = Math.min(iw, targetW);
    styleH = Math.min(ih, targetH);
  }
  // let bottom = document.getElementById("bottom_content");
  // let bottom_text = document.getElementById("bottom_text");
  let styleMarginTop = 0;
  let spaceLeftW = iw - styleW;
  let spaceLeftH = ih - styleH;
  let threshold1 = 90;
  let threshold2 = 150;
  portraitStretch = false;
  if (!forceAr && !forceHeight && !forceWidth && ih > iw) {
    if (spaceLeftH <= threshold1) {
      styleH = ih;
      spaceLeftH = 0;
      portraitStretch = true;
    } else if (spaceLeftH > threshold2) {
      spaceLeftH = threshold2 + 1;
      styleH = ih - spaceLeftH;
    }
  }
  canvas.width = styleW * window.devicePixelRatio;
  canvas.height = styleH * window.devicePixelRatio;
  border.style.marginTop = styleMarginTop + "px";
  let gradient = document.getElementById("gradient");
  let webViewContent = document.getElementById("webview_content");
  [gradient, webViewContent].forEach((e) => {
    if (e) {
      e.style.left = (iw - styleW) * 0.5 + "px";
    }
  });
  [canvas, gradient, webViewContent].forEach((e) => {
    if (e) {
      e.style.width = styleW + "px";
      e.style.height = styleH + "px";
      e.style.borderRadius = (spaceLeftW > 0 && spaceLeftH > 0 ? 20 : 0) + "px";
    }
  });
  if (gameStarted) {
    updateStretchButton();
  }
  if (informC) {
    Module.ccall(
      "update_screen_size",
      "v",
      ["number", "number", "number"],
      [canvas.width, canvas.height, window.devicePixelRatio],
    );
  }
}

function updateStretchButton() {}

function stopContextMenu(event) {
  event.preventDefault();
  return false;
}

var Module = {
  locateFile: function (path, prefix) {
    if (prefix == "") {
      return cndHref + path;
    }
    return prefix + path;
  },
  preRun: [
    function () {
      isMobile = window.matchMedia(
        "only screen and (max-width: 760px)",
      ).matches;
    },
  ],
  postRun: [
    function () {
      document.onfullscreenchange = function () {
        setTimeout(function () {
          resizeCanvas(true);
          if (document.fullscreenElement) {
            let canvas = document.getElementById("canvas");
            simpleLogC("Canvas size " + canvas.width + " x " + canvas.height);
            Module.ccall(
              "update_screen_size",
              "v",
              ["number", "number", "number"],
              [canvas.width, canvas.height, 1],
            );
          }
        }, 500);
      };
      window.addEventListener("resize", (event) => resizeCanvas(true), false);
      resizeCanvas(true);
      window.addEventListener("keydown", (e) => {
        ccall("keydown_browser", "v", ["string"], [e.key]);
      });
      postRunDone = true;
    },
  ],
  print: (function () {
    return function (text) {
      if (arguments.length > 1)
        text = Array.prototype.slice.call(arguments).join(" ");
      console.log(text);
    };
  })(),
  printErr: function (text) {
    if (arguments.length > 1)
      text = Array.prototype.slice.call(arguments).join(" ");
    // console.error(text);
  },
  canvas: (function () {
    var canvas = document.getElementById("canvas");
    canvas.addEventListener(
      "webglcontextlost",
      function (e) {
        e.preventDefault();
        Module.ccall("app_set_opengl_context_lost", "v", ["number"], [1]);
      },
      false,
    );
    canvas.addEventListener(
      "webglcontextrestored",
      function (event) {
        Module.ccall("opengl_resume", "v");
      },
      false,
    );
    return canvas;
  })(),
  setStatus: function (text) {
    if (!Module.setStatus.last)
      Module.setStatus.last = { time: Date.now(), text: "" };
    if (text === Module.setStatus.last.text) return;
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Module.setStatus.last.time < 30) return;
    Module.setStatus.last.time = now;
    Module.setStatus.last.text = text;
    if (m) {
      text = m[1];
      loadProgressFrac = parseInt(m[2]) / parseInt(m[4]);
    } else {
      loadProgressFrac = 1;
    }
    updateLoadProgress();
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
  },
};

function showLoadError(message) {
  var parent = document.getElementById("progress_or_play");
  if (parent) {
    let appUrl = "fancade://" + getGameGuidString();
    parent.innerHTML = `<p><span class='error_message' >${message}</span></p><p><a href="${appUrl}" >Open App</p>`;
  }
}

function _0x1ceb() {
  const _0x5f25ad = [
    "2000305oVxWyY",
    "686700tkWHPR",
    "ve.firebas",
    "0ce9326294",
    "1050172fKCxPn",
    "authDomain",
    "play.fanca",
    "8SmfUBU",
    "4111296606",
    "26959uKbAvx",
    ".firebasei",
    "log",
    "4671756ELFxwd",
    "apiKey",
    "AIzaSyCRF7",
    "10451kBRaIk",
    "ted",
    "databaseUR",
    "6CaPmCM",
    "1:41112966",
    "Init\x20fireb",
    "eapp.com",
    "de.com",
    "fancade-te",
    "initialize",
    "ket",
    "hostname",
    "storageBuc",
    "1040RObBZp",
    "Firebase\x20a",
    "4962500TLledR",
    "ase\x20basic",
    "1:48916779",
    "CkDJK04eg9",
    "70b8b73550",
    "AIzaSyCHBB",
    "lready\x20ini",
    "projectId",
    "d20cSQ3tta",
    "tTP1ujjZB5",
    "measuremen",
    "location",
    "vCCgA0kP0",
    "G-PLPTPCSG",
    "fancade-li",
    "0603:web:4",
    "enderId",
    "st.firebas",
    "startsWith",
    "e486f96159",
    "App",
    "st.appspot",
    "messagingS",
    "ncade-test",
    "7261:web:d",
    "9gmY_zlPE",
    "tId",
    "est",
    "storage",
    "ScBil1Xrzq",
    "78bcd94429",
    "o.com",
    "appId",
    "ve.appspot",
    "4891677972",
    ".com",
    "firebase_t",
    "ncade-live",
    "https://fa",
  ];
  _0x1ceb = function () {
    return _0x5f25ad;
  };
  return _0x1ceb();
}

(function (_0x3a211d, _0x2d1f99) {
  const _0x55d3c4 = _0xb104,
    _0x4e66f6 = _0x3a211d();
  while (!![]) {
    try {
      const _0xa7ed29 =
        (parseInt(_0x55d3c4(0x20f)) / 0x1) *
          (parseInt(_0x55d3c4(0x20d)) / 0x2) +
        parseInt(_0x55d3c4(0x207)) / 0x3 +
        parseInt(_0x55d3c4(0x20a)) / 0x4 +
        (parseInt(_0x55d3c4(0x206)) / 0x5) *
          (-parseInt(_0x55d3c4(0x1d3)) / 0x6) +
        (-parseInt(_0x55d3c4(0x1d0)) / 0x7) *
          (-parseInt(_0x55d3c4(0x1dd)) / 0x8) +
        -parseInt(_0x55d3c4(0x212)) / 0x9 +
        parseInt(_0x55d3c4(0x1df)) / 0xa;
      if (_0xa7ed29 === _0x2d1f99) break;
      else _0x4e66f6["push"](_0x4e66f6["shift"]());
    } catch (_0x270315) {
      _0x4e66f6["push"](_0x4e66f6["shift"]());
    }
  }
})(_0x1ceb, 0x5a72a);

function _0xb104(_0x3f408f, _0x150f92) {
  const _0x1ceb20 = _0x1ceb();
  return (
    (_0xb104 = function (_0xb104a3, _0x57e5c1) {
      _0xb104a3 = _0xb104a3 - 0x1d0;
      let _0x32c9c2 = _0x1ceb20[_0xb104a3];
      return _0x32c9c2;
    }),
    _0xb104(_0x3f408f, _0x150f92)
  );
}

var rewardedShowFunc = null;
var calledRewardedShow = false;
var notifications = [];
var webViewIframe = null;
var storedScripts = [];
var webviewDomLoaded = false;
var fsSyncStatus = "";

function postStored() {
  for (var i = 0; i < storedScripts.length; i++) {
    webViewIframe.contentWindow.postMessage("eval:" + storedScripts[i], "*");
  }
  storedScripts = [];
}

function onWebviewDomContentLoaded() {
  webviewDomLoaded = true;
  postStored();
}

function webViewPostMessage(message) {
  Module.ccall("app_webview_message", "v", ["string"], [message]);
}

function webViewError(type, message) {
  webViewPostMessage(`error|${type}|${message}`);
}

// 鍏抽棴闈瀋anvas鐨勪俊鎭紝濡傚叧鍗�
function webViewClose() {
  try {
    var content = document.getElementById("webview_content");
    content.style.display = "none";
    if (content.contains(webViewIframe)) {
      webviewDomLoaded = false;
      webViewIframe.contentWindow.removeEventListener(
        "DOMContentLoaded",
        onWebviewDomContentLoaded,
      );
      content.removeChild(webViewIframe);
    }
    setTimeout(function () {
      Module.ccall("set_game_focus", "v", ["number"], [true]);
    }, 100);
  } catch (err) {
    webViewError("unknown", err);
  }
}

// 灞曠ず闈瀋anvas鐨勪俊鎭紝濡傚叧鍗�
function webViewOpen(path) {
  try {
    let arr = readLocalFile(path);
    let html = new TextDecoder("utf-8").decode(arr);
    html = html.replace(
      'url("/webapp/baloo2.woff")',
      `url("${cndHref}baloo2.woff")`,
    );
    html = html.replace("common.js", "");
    html = html.replace("common.css", "");
    if (webViewIframe == null) {
      window.onmessage = function (e) {
        webViewPostMessage(e.data);
      };
    }
    var content = document.getElementById("webview_content");
    content.style.display = "block";
    webViewIframe = document.createElement("iframe");
    webViewIframe.classList.add("webview");
    webViewIframe.allowtransparency = true;
    content.appendChild(webViewIframe);
    webViewIframe.contentWindow.document.open();
    webviewDomLoaded = false;
    webViewIframe.contentWindow.addEventListener(
      "DOMContentLoaded",
      onWebviewDomContentLoaded,
    );
    webViewIframe.contentWindow.document.write(html);
    webViewIframe.contentWindow.document.close();
  } catch (err) {
    webViewError("unknown", err);
  }
}
function webViewExecuteJS(jsString) {
  try {
    if (!webviewDomLoaded) {
      storedScripts.push(jsString);
    } else {
      webViewIframe.contentWindow.postMessage("eval:" + jsString, "*");
    }
  } catch (err) {
    webViewError("unknown", err);
  }
}

function getHostname() {
  let hostname = window.location.hostname.split(":")[0];
  let lengthBytes = lengthBytesUTF8(hostname) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(hostname, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}

function getGameGuidArgument() {
  let guid = getGameGuidString();
  let lengthBytes = lengthBytesUTF8(guid) + 1;
  let stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(guid, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}

function writeLocalFile(buffer, pathDevice) {
  let arr = new Uint8Array(buffer);
  let stream = FS.open(pathDevice, "w");
  FS.write(stream, arr, 0, arr.length, 0);
  FS.close(stream);
}

function readLocalFile(path) {
  let stream = FS.open(path, "r");
  FS.llseek(stream, 0, 2);
  let fileSize = stream.position;
  FS.llseek(stream, 0, 0);
  let buf = new Uint8Array(fileSize);
  FS.read(stream, buf, 0, fileSize, 0);
  FS.close(stream);
  return buf;
}

function downloadFileInBrowser(path) {
  if (path) {
    let buf = readLocalFile(path);
    let blob = new Blob([buf.buffer], { type: "application/octet-stream" });
    let fileUrl = URL.createObjectURL(blob);
    var pom = document.createElement("a");
    pom.href = fileUrl;
    let filename = "game";
    let index = path.lastIndexOf("/");
    if (index >= 0) {
      filename = path.substr(index + 1);
    }
    pom.setAttribute("download", filename);
    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }
}

function fetchUrl(url, id, useToken) {}

function adInit() {}

function firebasePause() {}

function firebaseResume() {}

function adInterstitialLoad() {
  Module.ccall("ad_interstitial_on_loaded", "v", ["number"], [1]);
}

function adInterstitialShow() {
  console.log("adInterstitialShow");
  window.GameBridgeSDK.commercialBreak().then((done) => {
    setGameFocus(true);
    Module.ccall("ad_interstitial_on_showed", "v", ["number"], [1]);
  });
}

function adRewardedLoad() {
  simpleLogC("adRewardedLoad()");
  calledRewardedShow = false;
  window.GameBridgeSDK.rewardedBreak().then((done) => {
    setGameFocus(true);
    rewardedShowFunc = null;
    calledRewardedShow = false;
    if (done) {
      Module.ccall("ad_rewarded_on_loaded", "v", ["number"], [1]);
    } else {
      Module.ccall("ad_rewarded_on_showed", "v", ["number"], [0]);
    }
  });
}

// 鍒嗕韩鏂规硶
function showShareFileModal() {
  Module.ccall("share_file_finished", "v", ["number"], [1]);
}

// 杩斿洖鏂规硶
function showStoreLinkModal(
  text,
  callbackId,
  showAppStoreButtons,
  showExitButtons,
) {
  console.log("showStoreLinkModal====", this);
}
function adRewardedShow() {
  if (rewardedShowFunc != null) {
    calledRewardedShow = true;
    rewardedShowFunc();
  } else {
    Module.ccall("ad_rewarded_on_showed", "v", ["number"], [0]);
  }
}

function firebaseDeinit() {}

function firebaseRemoteConfigFetch() {
  Module.ccall("set_ad_freq", "v", ["number"], [0]);
  //Module.ccall("set_ad_duration_offline", "v", ["number"], [0]);
}

function getServerTimeSeconds() {
  const xhr = new XMLHttpRequest();
  xhr.onload = (event) => {
    let timeStr = xhr.getResponseHeader("Date");
    let date = new Date(timeStr);
    let timezoneDiff = new Date(1970, 0, 1).getTime();
    let millis = date.getTime() - timezoneDiff;
    Module.ccall("ntp_set_server_time", "v", ["number"], [millis / 1000]);
  };
  xhr.onerror = function () {
    simpleLogC("Error when fetching server time");
  };
  xhr.open("GET", "/");
  xhr.setRequestHeader("Content-Type", "text/html");
  xhr.send("");
}

function firebaseWriteNick(nick, name) {}

function firebaseReadGems() {}

function firebaseWriteGems(gems) {}

function firebaseWriteBuys(guid, timeStr, gems) {}

let dailyRewardInProgress = false;
let dailyRewardGems = 0;
let checkedDailyRewardPossibleTime = 0;
let dailyRewardPossible = false;

function writeDailyReward(gems) {
  if (!dailyRewardPossible) {
    return;
  }
  dailyRewardGems = gems;
  if (dailyRewardInProgress) {
    return;
  }
  dailyRewardInProgress = true;
}

function firebaseReadVersion(guid) {}

function firebaseUpload(
  pathImage,
  pathGame,
  guid,
  title,
  description,
  seconds,
  storagePrefix,
) {}

function firebaseReadGame(hi, guid) {}

function firebaseReadCounts(hi, guid, incPlay) {
  if (guid == getGameGuidString()) {
    singleGameReadCounts = true;
  }
}

function firebaseReadLedger(hi, guid) {
  if (guid == getGameGuidString()) {
    singleGameReadLedger = true;
  }
}

function firebaseWriteLedger(guid, action, remove, seconds) {}

function firebaseSendBugReport(pathLocal, filename) {}

function firebaseSyncUpload(pathLocal) {}

function firebaseSyncDownload(pathLocal) {}

function firebaseUpdateScores(guid, li, score, lowerIsBetter) {}

function firebaseSendPasswordResetEmail(email) {
  firebaseAuth.sendPasswordResetEmail(email).then(
    (result) => {
      Module.ccall("menu_on_password_reset_email_sent", "v");
    },
    (error) => {
      simpleLogC("Reset password fail " + error.message);
      simpleAppErrorC(error.message);
    },
  );
}

function firebaseSignout() {
  firebaseAuth.signOut();
}

function firebaseSignedInEmail() {
  if (firebaseAuth.currentUser.isAnonymous) return 0;
  var lengthBytes = lengthBytesUTF8(firebaseAuth.currentUser.email) + 1;
  var stringOnWasmHeap = _malloc(lengthBytes);
  stringToUTF8(firebaseAuth.currentUser.email, stringOnWasmHeap, lengthBytes);
  return stringOnWasmHeap;
}

function firebaseMerge(email, password, merge) {
  if (merge) {
    simpleLogC("Signing in and merging");
  } else {
    simpleLogC("Signing in without merging");
    firebaseAuth.currentUser.delete().then(
      (result) => {
        firebaseAuth.signInWithEmailAndPassword(email, password).then(
          (result) => {},
          (error) => {
            simpleLogC("User sign in after delete user fail " + error.message);
            appErrorC(1007, error.message);
          },
        );
      },
      (error) => {
        simpleLogC("Delete user fail " + error.message);
        appErrorC(1006, error.message);
      },
    );
  }
}

function firebaseDeleteCurrentUser(email, password) {
  simpleLogC("Signing in and deleting");
  firebaseAuth.signInWithEmailAndPassword(email, password).then(
    (result) => {
      firebaseAuth.currentUser.delete().then(
        (result) => {},
        (error) => {
          simpleLogC("Delete user fail " + error.message);
          appErrorC(1006, error.message);
        },
      );
    },
    (error) => {
      simpleLogC("Sign in fail " + error.message);
      appErrorC(1007, error.message);
    },
  );
}

function firebaseSignIn(email, pwd) {
  simpleLogC("firebaseSignIn()");
  firebaseAuth.signInWithEmailAndPassword(email, pwd).then(
    (result) => {
      Module.ccall("set_user_state", "v", ["number"], [3]);
      Module.ccall("app_on_signin", "v");
    },
    (error) => {
      simpleLogC("Sign in fail " + error.message);
      appErrorC(1007, error.message);
    },
  );
}

function firebaseLinkUser(email, pwd) {
  simpleLogC("firebaseLinkUser()");
  let c = firebase.auth.EmailAuthProvider.credential(email, pwd);
  firebaseAuth.currentUser.linkWithCredential(c).then(
    (result) => {
      Module.ccall("set_user_state", "v", ["number"], [3]);
      Module.ccall("app_on_signin", "v");
    },
    (error) => {
      simpleLogC("Link with credential failed");
      if (error.code == "auth/email-already-in-use") {
        simpleLogC("Email in use");
        appErrorC(1003, "An account with this email already exists");
      } else if (error.code == "auth/wrong-password") {
        simpleLogC("Email in use, wrong password");
        appErrorC(1003, "An account with this email already exists");
      } else if (error.code == "auth/weak-password") {
        simpleLogC("Password too weak");
        appErrorC(1003, "Password too weak, please try a stronger password");
      } else {
        simpleLogC(
          "Other error received when linking with credentials " +
            error.message +
            " " +
            error.code,
        );
        appErrorC(1003, error.message + " " + error.code);
      }
    },
  );
}

function firebaseSigninAnonymous() {
  firebaseAuth.signInAnonymously().then(
    (result) => {},
    (error) => {
      appErrorC(1001, error.message);
    },
  );
}

async function performRequest(url, useToken, parseJson) {}

function firebaseInit() {}

function writeGameBlob(blob, pathDevice, guid) {
  blob.arrayBuffer().then((buffer) => {
    writeLocalFile(buffer, pathDevice);
    FS.syncfs(false, function (err) {
      if (err) {
        simpleLogC("syncfs error " + err);
      }
      Module.ccall(
        "game_download_finished",
        "v",
        ["string", "string", "number"],
        [pathDevice, guid, 1],
      );
    });
  });
}

function firebaseDownload(pathServer, pathDevice, guid) {
  if (
    guid == getGameGuidString() &&
    !pathDevice.endsWith(".webp") &&
    singleGameBlob != null
  ) {
    writeGameBlob(singleGameBlob, pathDevice, guid);
    return;
  }
  simpleLogC(`firebaseDownload('${pathServer}', '${pathDevice}', '${guid}'')`);

  let xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = (event) => {
    let blob = xhr.response;
    writeGameBlob(blob, pathDevice, guid);
  };
  xhr.onerror = function () {
    simpleLogC("Unable to download file, XMLHttpRequest error");
    Module.ccall(
      "game_download_finished",
      "v",
      ["string", "string", "number"],
      [pathDevice, guid, 0],
    );
  };
  xhr.open("GET", url);
  xhr.send();
}

function currentTimeSecondsRound() {
  return Math.round(Date.now() / 1000);
}

function firebaseQueryGames(hi, heading, limit, next) {}

function firebaseAnalyticsPlay(
  page,
  score,
  wi,
  guid,
  version,
  li,
  score_type,
  daily_done,
  game_time,
  crowns,
) {
  let params = {};
  if (page != -1) params["page"] = page;
  if (wi != -1) params["world"] = wi;
  params["guid"] = guid;
  if (version != -1) params["version"] = version;
  params["level"] = li;
  if (score_type != 0) params["score"] = score;
  if (page == 5) params["daily"] = daily_done;
  if (game_time != -1) params["time"] = game_time / 60;
  if (crowns != -1) params["crowns"] = crowns;
  // firebaseAnalytics.logEvent("play", params);
}

