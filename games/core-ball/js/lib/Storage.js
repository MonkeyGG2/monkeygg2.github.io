/**
 * @fileoverview Storage
 * @author Random | http://weibo.com/random
 * @date 2015-03-11
 */

define(function(require, exports, module) {
	"use strict";
	
	var Storage = {
		setValue : function(key, value){
			try{
				window.localStorage && (window.localStorage[key] = value);
			}catch(ex){}
		},
		
		getValue : function(key){
			if(window.localStorage){
				try{
				return window.localStorage[key];
				}catch(ex){}
			}
		}
	};
	
	module.exports = Storage;
});