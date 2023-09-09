/**
 * @fileoverview BeginStage
 * @author Random | http://weibo.com/random
 * @date 2015-03-05
 */

define(function(require, exports, module) {
	"use strict";
	var addEvent = require("lib/addEvent");
	var CustEvent = require("lib/CustEvent");
	var util = require("lib/util");
	
	var custEvent = CustEvent();
	var level = 0;
	
	var EVENT_START = "start";
	
	function BeginStage(node){
		var btnStart = node.getElementsByClassName("button")[0];
		var txtLevel = node.getElementsByClassName("text")[0];
		var txtAr = document.getElementById("txtAr");
		
		function init(){
			addEvent(btnStart, "click", function(){
				custEvent.fire(EVENT_START, level);
			});

			if(util.isAndroid){
				txtAr.innerHTML = "GO";
			}else{
				txtAr.innerHTML ="▶";	
			}
		}
		
		var me = {
			show : function(){
				node.style.display = "";
			},
			
			hide : function(){
				node.style.display = "none";
			},
			
			level : function(lv){
				level = lv;
				txtLevel.innerHTML = "level " + lv;
			},
			
			on : function(type, handle){
				custEvent.add(type, handle);
			},
			
			off : function(type, handle){
				custEvent.remove(type, handle);
			}
		};
		
		init();
		
		return me;
	}
	
	module.exports = BeginStage;
});