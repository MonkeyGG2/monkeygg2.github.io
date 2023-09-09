/**
 * @fileoverview Core
 * @author Random | http://weibo.com/random
 * @date 2015-02-05
 */

define(function(require, exports, module) {
	"use strict";
	
	var util = require("lib/util");
	var Ball = require("general/Ball");
	
	function Core(canvas, stage, num, fontSize, scale){
		var angle = 0;
		var color = "#ffffff";
		var childs = [];
		var r = 50;
		var x = canvas.width / 2;
		var y = 4 * r * scale;
		var ball;
		var me;
		
		scale = scale || 1;
		ball = Ball(stage, r, num, fontSize, scale);
		ball.pos(x, y);

		function updateChilds(){
			var i = childs.length;
			var cx;
			var cy;
			var dx;
			var dy;

			while(i--){
				cx = Math.cos((childs[i].angle + me.angle()) * Math.PI / 180) * 3 * r * scale + x;
				cy = Math.sin((childs[i].angle + me.angle()) * Math.PI / 180) * 3 * r * scale + y;
				dx = cx / Math.abs(cx);
				dy = cy / Math.abs(cy);

				childs[i].ball.pos(cx, cy);
			}
		}

		me = {

			pos : ball.pos,

			scale : ball.scale,

			rad : ball.rad,
              
			angle : function(ag){
				typeof ag !== "undefined" && (angle = ag);
				return angle;
			},
              
			addChild : function(angle, ball){
				childs.push({
					angle :angle,
					ball : ball
				});
			},

			clear : function(){
				childs = [];  
			},
              
			childs : function(){
				return childs; 
			},

			update : function(){
				updateChilds();
			},
              
			render : function(){
				var l = childs.length;
				var i;
				var w = canvas.width;
				var h = canvas.height;
                  
				stage.clearRect(0, 0, w, h);
				for(i=0; i<l; i++){
					util.drawLine(stage, x, y, childs[i].ball.pos().x, childs[i].ball.pos().y, "#ffffff", 1.5 * scale);
					childs[i].ball.render();
				}
				ball.render();
			},
			
			destroy : function(){
				me.clear();
				ball = null;
				me = null;
			}
		};

		return me;
	}
	
	module.exports = Core;
});