/**
 * @fileoverview BallQueue
 * @author Random | http://weibo.com/random
 * @date 2015-02-05
 */

define(function(require, exports, module) {
	"use strict";
	
	var CustEvent = require("lib/CustEvent");
	var Ball = require("general/Ball");
	var Tween = require("general/Tween");
	
	var EVENT_POPUP = "popup";
	
	function BallQueue(n, x, y, stage, scale){
		var me;
		var ballList = [];
		var popList = [];
		var custEvent = CustEvent();
		
		scale = scale || 1;

		function init(){
			var numList = numToArr(n);
			var l = numList.length;
			var i;
			var ball;
			
			for(i=0; i<l; i++){
				ball = Ball(stage, null, numList[i], null, scale);
				ball.pos(x, y + ball.rad() * 3 * i );
				ballList.push(ball);
			}
		}
		
		function numToArr(n){
			var i = n;
			var ret = [];
			
			while(i--){
				ret.push(i + 1);
			}
			
			return ret;
		}

		me = {
			
			ballList : ballList,
			
			add : function(ball){

			},

			remove : function(idx){
				var ret = ballList[idx];
				ballList.splice(idx, 1);
				return ret;
			},


			clear : function(){
				popList = [];
				ballList = [];
			},
			
			popup : function(){
				var popBall = ballList.shift();
				
				popBall.st = +(new Date);
				popBall.sv = popBall.pos().y;
				popList.push(popBall);
			},
			
			update : function(){
				var ev;
				var i = popList.length;
				var r;
				var j = ballList.length;
				var py;
				
				if(i){
					r = popList[0].rad();
					ev = y - 3 * r;
					while(i--){
						popList[i].pos(x, Tween.simple(popList[i].sv, ev, popList[i].st, 50));
						py = popList[popList.length - 1].pos().y;
						if(popList[i].pos().y === ev){
							custEvent.fire(EVENT_POPUP, popList[i]);
							popList.splice(i, 1);
						}
					}
					
					while(j--){
						ballList[j].pos(x, py + 3 * r * (j + 1));
					}
				}
			},
						
			render : function(){
				var i = ballList.length;
				var j = popList.length;

				while(i--){
					ballList[i].render();
				}
				
				while(j--){
					popList[j].render();
				}
			},
			
			on : function(type, handle){
				custEvent.add(type, handle);
			},
			
			off : function(type, handle){
				custEvent.remove(type, handle);
			},
			
			destroy : function(){
				var i = ballList.length;
				
				while(i--){
					ballList[i].destroy();
				}
				
				custEvent.destroy();
			}
		};

		init();

		return me;
	}
	
	module.exports = BallQueue;
});