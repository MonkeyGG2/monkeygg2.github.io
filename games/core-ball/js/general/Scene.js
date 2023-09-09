/**
 * @fileoverview Scene
 * @author Random | http://weibo.com/random
 * @date 2015-02-11
 */

define(function(require, exports, module) {
	"use strict";
	
	var CustEvent = require("lib/CustEvent");
	var Core = require("general/Core");
	var Ball = require("general/Ball");
	var BallQueue = require("general/BallQueue");
	var Collide = require("general/Collide");
	var Levels = require("general/Levels");
	var util = require("lib/util");
	
	var EVENT_PASSED = "passed";
	var EVENT_FAILED = "failed";
	
	var custEvent = CustEvent();
	
	
	
	function Scene(container, canvas, stage, scale){
		var me;
		var state = "run";
		var level = 1;
		var ts;
		var core;
		var ballQueue;
		var roundHandle;
		var failedBall;
		
		function initStage(conf){
			var childs = conf.childs;
			var i = childs.length;
			
			roundHandle = conf.round();
			
			core && core.destroy();
			core = Core(canvas, stage, level, 50, scale);
			
			while(i--){
				core.addChild(childs[i], Ball(stage, null, "", null, scale));
			}
			
			ballQueue && ballQueue.destroy();
			ballQueue = BallQueue(conf.queueCount, canvas.width / 2, core.pos().y + core.rad() * 4, stage, scale);
			ballQueue.on("popup", function(ball){
				core.addChild(90 - core.angle(), ball);
				if(Collide.check(core, ball, scale)){
					failedBall = ball;
					fail();
				}else{
					!ballQueue.ballList.length && pass();
				}
			});
		}
		
		
		function stageUpdate(){
			if(roundHandle){
				core.angle(roundHandle());
				core.update();
				ballQueue.update();
			}
		}
		
		function updatePass(){
			var childs = core.childs();
			var i = childs.length;
			var angle;
			var v = 25;
			var dx;
			var dy;
			var pos;
			
			container.style.backgroundColor = me.bgColor;
			while(i--){
				angle = childs[i].angle + core.angle();
				dx = Math.cos(angle * Math.PI / 180) * v;
				dy = Math.sin(angle * Math.PI / 180) * v;
				
				pos = childs[i].ball.pos();
				childs[i].ball.pos(pos.x + dx, pos.y + dy);
			}
		}
		
		function updateFail(t){
			var rs = [25, 15, 20, 15];
			var l = rs.length;
			var tm = 200;
			var m = tm / l;
			var i;
			
			core.update();
			
			for(i=1; i<=l; i++){
				t > m * i && failedBall.rad(rs[i-1] * scale);
			}
		}
		
		function pass(){
			if(state !== "pass"){
				container.style.backgroundColor = "#1CB01A";
				state = "pass";
				ts = +(new Date);
			}
		}
		
		function fail(){
			if(stage !== "fail"){
				container.style.backgroundColor = "#B8111C";
				state = "fail";
				ts = +(new Date);
			}
		}
		
		function toBeContinued(){
			var text = "to be continued...";
			var w = util.getTextWidth(stage, 0, 0, text, 30 * scale);
			
			util.drawText(stage, (canvas.width - w) / 2, 200 * scale, text, 30 * scale, "yellow");
			
			
		}
		
		me = {
			enabled : false,
			
			run : function(lv){
				var conf = Levels[lv];
				level = lv;
				if(conf){
					me.enabled = true;
					initStage(conf);
					container.style.backgroundColor = "#000";
					state = "run";
					
				}else{
					toBeContinued();
				}
			},
			
			shot : function(){
				ballQueue && ballQueue.ballList.length && ballQueue.popup();
			},
			
			update : function(){
				var t;
				if(!me.enabled){
					return;
				}
				
				if(state === "run"){
					stageUpdate();
					
				}else if(state === "pass"){
					updatePass();
					if(+(new Date) - ts > 1000){
						state = "";
						custEvent.fire(EVENT_PASSED);
					}

				}else if(state === "fail"){
					t = +(new Date) - ts;
					updateFail(t);
					if(t > 1000){
						state = "";
						custEvent.fire(EVENT_FAILED);
					}
				}
			},
			
			render : function(){
				if(me.enabled){
					core.render();
					ballQueue.render();
				}
			},
			
			on : function(type, handle){
				custEvent.add(type, handle);
			},
			
			off : function(type, handle){
				custEvent.remove(type, handle);
			}
		};
		
		return me;
	}
	
	module.exports = Scene;
});