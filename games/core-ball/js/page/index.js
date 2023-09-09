/**
 * @fileoverview index
 * @author Random | http://weibo.com/random
 * @date 2015-02-05
 */

define("page/index", function(require, exports, module) {
	"use strict";
	
	var Game = require("general/Game"); 
	
	Game.start();
});

require(["page/index"]);