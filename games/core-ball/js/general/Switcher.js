/**
 * @fileoverview Switcher
 * @author Random | http://weibo.com/random
 * @date 2015-03-04
 */

define(function(require, exports, module) {
	"use strict";
	
	function Switcher(stage, width, height){
		var color;
		var callBack = null;
		var type;
		var isEnd = false;

		var me = {
			point : [0, 0],
			
			enabled : false,
			
			color : "#c8c8c8",
			
			update : function(){
				var p = me.point;
				var v = 30;

				if(me.enabled){
					if(type === 0){
						color = me.color;
						if(p[0] < width / 2){
							p[0] = Math.min(p[0] + v, width / 2);
							me.point = p;
						}else{
							me.point = p;
							isEnd = true;
						}
						
					}else if(type === 1){
						color = "#000";
						if(p[0] > width / 2){
							p[0] = Math.max(p[0] - v, width / 2);
							me.point = p;
						}else{
							me.point = p;
							isEnd = true;
						}
					}
				}
			},
			
			render : function(){
				var p = me.point;
				
				if(me.enabled){
					stage.fillStyle = color;
					stage.fillRect(p[0] - width / 2, p[1] - height / 2, width, height);
					if(isEnd){
						me.enabled = false
						callBack && callBack();
					}
				}
			},
			
			switchStage : function(tp, cb){
				if(tp === 0){
					me.point = [-width / 2, height /2];
				}else if(tp === 1){
					stage.fillStyle = me.color;
					stage.fillRect(0, 0, width, height);
					me.point = [width + width / 2, height /2];
				}
				
				me.enabled = true;
				isEnd = false;
				type = tp;
				callBack = cb;
			}
		};
		
		return me;
	} 
	
	module.exports = Switcher;
});