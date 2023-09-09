/**
 * @fileoverview stopEvent
 * @author Random | http://weibo.com/random
 * @date 2015-03-11
 */

define(function(require, exports, module) {
	"use strict";
	
	module.exports = function(evt){
		if(evt){
			if(evt.preventDefault) {
				evt.preventDefault();
				evt.stopPropagation();
			}else{
				evt.returnValue = false;
				evt.cancelBubble = true;
			}
		}
	};
});