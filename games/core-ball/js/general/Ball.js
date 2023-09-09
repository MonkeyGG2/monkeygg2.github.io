/**
 * @fileoverview Ball
 * @author Random | http://weibo.com/random
 * @date 2015-02-05
 */

define(function(require, exports, module) {
	"use strict";
	
	var util = require("lib/util");
	
	function Ball(stage, rad, num, fontSize, scale){
		var x = 0;
		var y = 0;
		var me;
		
		scale = scale || 1;
		rad = (rad || 12) * scale;
		fontSize = (fontSize || 15) * scale;
		
		function renderNumber(n){
			var w = util.getTextWidth(stage, 0, 0, num, fontSize);
			util.drawText(stage, x - w / 2, y + fontSize / 2, num, fontSize, "black");
		}

		me = {
			pos : function(bx, by){
				typeof bx !== "undefined" && (x = bx);
				typeof by !== "undefined" && (y = by);
				return {
					x : x,
					y : y
				};
			},
			
			//n :num,
			
			scale : function(sc){
                  typeof sc !== "undefined" && (scale = sc);
                  return scale;
            },

			rad : function(r){
				typeof r !== "undefined" && (rad = r);
				return rad;
			},
			
			render : function(n){
				util.drawCircle(stage, x, y, rad, "#ffffff");

				if(typeof num !== "undefined"){
					renderNumber(num);
				}else if(typeof n !== "undefined"){
					renderNumber(n);
				}
			},
			
			destroy : function(){
				me = null;
			}
		};
		
		return me;
	}
	
	module.exports = Ball;
});