/**
 * @fileoverview LevelCode
 * @author Random | http://weibo.com/random
 * @date 2015-03-13
 */

define(function(require, exports, module) {
	"use strict";
	
	var md5 = require("lib/md5");
	var SALT = "Handsome";
	var map = {};
	var l = 60;
	var i;
	
	for(i=1; i<=l; i++){
		map[md5(i + SALT)] = i;
	}
	
	module.exports = {
		encode : function(n){
			var k;
			
			for(k in map){
				if(map[k] == n){
					return k;
				}
			}
		},
		
		decode : function(code){
			return map[code];
		}
	};
});