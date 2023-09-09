/**
 * @fileoverview 自定义事件
 * @author Random | http://weibo.com/random
 * @date 2013-05-21
 */

define(function(require, exports, module){
	
	module.exports = function(target){
		var events={};
		
		!target && (target={});
		
		function getType(obj){
			return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
		}
		
		return {
			add:function(type,handle){
				if (getType(handle) !== "function") {
					return;
				}
				
				var evts=events;
				type=type.toLowerCase();
				
				!evts[type] && (evts[type]=[]);
				evts[type].push(handle);
			},
			
			
			remove:function(type,handle){
				var evts=events[type];
				var i;
				
				type=type.toLowerCase();
				
				if (getType(handle) !== "function" || !evts || !evts.length) {
					return;
				}
				for(i=evts.length-1;i>=0;i--){
					evts[i]===handle && evts.splice(i,1);
				}
			},
			
			
			fire:function(type){
				var evts;
				var args;
				var i;
				var l;
				
				type=type.toLowerCase();
				evts=events[type];
				
				if (!evts || !evts.length) {
					return;
				}
	
				args=Array.prototype.slice.call(arguments,1);
				l=evts.length;
				for(i=0;i<l;i++){
					evts[i].apply(target,args);
				}
			},
			
			destroy : function(){
				var i;
				var l=events.length-1;
				
				for(i=l;i>=0;i--){
					evts.splice(i,1);
				}
			}
		};
	};
}); 