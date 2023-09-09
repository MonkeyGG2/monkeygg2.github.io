/**
 * @fileoverview Tween
 * @author Random | http://weibo.com/random
 * @date 2015-03-09
 */

define(function(require, exports, module) {
	"use strict";
	
	var Tween = {
		simple : function(sv, ev, st, d){
			var v = (ev - sv) / d;
			var t = +(new Date);
			
			if(t - st < d){
				Tween.isEnd = false;
				return sv + (t - st) * v;
			}else {
				Tween.isEnd = true;
				return ev;
			}
		},
		
		isEnd : true
	};
	
	module.exports = Tween;
});