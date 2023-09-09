/**
 * @fileoverview Collide
 * @author Random | http://weibo.com/random
 * @date 2015-02-05
 */

define(function(require, exports, module) {
	"use strict";
	
	var util = require("lib/util");
	
	var Collide = {
		check : function(core, ball, scale){
			var childs = core.childs();
			var i = childs.length;
			var d = Math.ceil(2 * ball.rad());
			
			scale = scale || 1;
			while(i--){
				if(ball !== childs[i].ball && util.getPointDistance(ball.pos(), childs[i].ball.pos()) <= d + Math.ceil(2 * scale)){
					return true;
				}
			}
			
			return false;
		}
	};
	
	module.exports = Collide;
});