/**
 * @fileoverview Game
 * @author Random | http://weibo.com/random
 * @date 2015-03-04
 */

define(function(require, exports, module) {
	"use strict";
	
	var Scene = require("general/Scene");
	var Switcher = require("general/Switcher");
	var BeginStage = require("general/BeginStage");
	var addEvent = require("lib/addEvent");
	var Storage = require("lib/Storage");
	var util = require("lib/util");
	var stopEvent = require("lib/stopEvent");
	//var LevelCode = require("general/LevelCode");
	
    var canvas = document.getElementById("stage");
    var bsNode = document.getElementById("begin");
    var tip = document.getElementById("tip");
    var btnFW = document.getElementById("btnFW");
    var btnReset = document.getElementById("btnReset");
    var wxArrow = document.getElementById("wxArrow");
    var stage = canvas.getContext("2d");
    
    var FPS = 60;
    var BASE_HEIGHT = 560;
    var STORAGE_KEY = "core-ball-level";
    var WX_SHARE_TEXT = "Core Ball(酷啵)-练手活的HTML5游戏，我已玩到第#{level}关了，你也来试试吧!";
    var SHARE_HREF = "sinaweibo://share?content=Core Ball(酷啵) - 练手活的HTML5小游戏，我已玩到第#{level}关了，你也来试试吧！ http://coreball.sinaapp.com";
    
    var scene;
    var beginStage = BeginStage(bsNode);
    var switcher;
    var level = +Storage.getValue(STORAGE_KEY) || 1;
    var scale;
    var isResetting = false
    var tid = 0;
	
    function adaptScreen(){
		var width = document.body.scrollWidth || document.documentElement.scrollWidth;
		var height = document.body.scrollHeight || document.documentElement.scrollHeight;

        canvas.width = width;
        canvas.height = height;
       
        switcher = Switcher(stage, width, height);
        bsNode.style.backgroundColor = switcher.color;
        bsNode.style.width = width + "px";
        bsNode.style.height = height + "px";
        
        scale = height / 560;
	}
	
	function updateSharedHref(){
		btnFW.href = SHARE_HREF.replace(/#\{level\}/, level);
	}
	
	function initForward(){
		if(util.isWeixin){
			addEvent(btnFW, "mousedown", function(){
				wxArrow.style.display = "";
			});
			
		}else if(util.isMobile){
			updateSharedHref();
			
		}else{
			//http://service.weibo.com/share/share.php?url=http://ra.ndom.me/core-ball/index.html&type=button&language=zh_cn&appkey=2hwszt&searchPic=true&style=number
		}
	}
	
	function updateLevel(lv){
		level = +lv;
		Storage.setValue(STORAGE_KEY, level);
		document.title = WX_SHARE_TEXT.replace(/\#\{level\}/, level);
		beginStage.level(level);
		!util.isWeixin && util.isMobile && updateSharedHref();
	}

    
    function initEvent(){
		addEvent(document.body, "mousedown", function(evt){
			var i;
			
			if(evt && evt.changedTouches){
				i = evt.changedTouches.length;
				while(i--){
					scene.shot();
				}
			}else{
				scene.shot();
			}
			
			evt.target.getAttribute("data-capture")!="1" && stopEvent(evt);
		});
		
		addEvent(wxArrow, "mousedown", function(){
			wxArrow.style.display = "none";
		});
		
		addEvent(btnReset, "mousedown", function(){
			if(!isResetting){
				isResetting = true;
				tip.style.display = "";
				updateLevel(1);
				setTimeout(function(){
					tip.style.display = "none";
					isResetting = false;
				}, 1000);
			}
		});
		
		
		scene.on("passed", function(){
			switcher.switchStage(0, function(){
				scene.enabled = false;
				updateLevel(level + 1);
				canvas.style.display = "none";
				beginStage.show();
			});
		});
		
		scene.on("failed", function(){
			switcher.switchStage(0, function(){
				scene.enabled = false;
				canvas.style.display = "none";
				beginStage.level(level);
				beginStage.show();
			});
		});
		
		beginStage.on("start", function(){
			canvas.style.display = "";
			beginStage.hide();
			switcher.switchStage(1, function(){
				scene.run(level);
			});
		});
    }
    
    function timerHandle(){
		window.clearTimeout(tid);
		scene.update();
		scene.render();
		
		switcher.update();
		switcher.render();
		tid = window.setTimeout(timerHandle, 1000 / FPS);
    }
    
    
	function init(){
		adaptScreen();
		scene = Scene(document.body, canvas, stage, scale);
		initEvent();
		initForward();
		beginStage.level(level);
		beginStage.show();
		
		timerHandle();
	}
	
	var Game = {
		start : init
	};
	
	
	
	module.exports = Game;
});