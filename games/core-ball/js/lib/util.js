/**
 * @fileoverview util
 * @author Random | http://weibo.com/random
 * @date 2015-02-05
 */

define(function(require, exports, module) {
	"use strict";
	
	module.exports = {
		drawCircle : function(ctx, x, y, r, c){
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.fillStyle = c || "red";
            ctx.fill();
        },
        
        drawLine : function(ctx, x1, y1, x2, y2, c, w){
            ctx.strokeStyle = c || "red";
            ctx.lineWidth = w || 1
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        },
        
        drawText : function(ctx, x, y, text, size, c){
            ctx.font = size + "px Verdana";
            ctx.fillStyle = c || "red";
            ctx.fillText(text, x, y);
        },
        
        getTextWidth : function(ctx, x, y, text, size, c){
            ctx.font = size + "px Verdana";
            ctx.fillStyle = c || "red";
            return ctx.measureText(text).width;
        },
        
        getPointDistance : function(p1, p2){
            return Math.floor(Math.sqrt(Math.floor(Math.pow(p1.x - p2.x, 2)) + Math.floor(Math.pow(p1.y - p2.y, 2))));
        },
        
        isMobile : (/(mobile|iphone|ipod|ipad|ios|android|windows phone)/i).test(navigator.userAgent),
        
        isAndroid : (/android/i).test(navigator.userAgent),
        
        isWeixin : (/MicroMessenger/i).test(navigator.userAgent)
        
	};
});