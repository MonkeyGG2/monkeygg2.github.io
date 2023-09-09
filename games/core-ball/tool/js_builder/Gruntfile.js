/**
 * @fileoverview 
 * @author Random | http://weibo.com/random
 * @created 2014-07-15
 */

var fs = require("fs");
var amdjsBuild = require("amdjs-build");

var TRANS_DIR = './_transport/';
var COMBI_DIR = './_combi/';
var AMDJS_BUILD_DIR = './_amdjs_build/';
var DEST_DIR = './built/';
var SRC_DIR = "../../js/";

module.exports = function(grunt) {
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    
		clean : {
			before : [TRANS_DIR, COMBI_DIR, AMDJS_BUILD_DIR, DEST_DIR],
			after: [TRANS_DIR, COMBI_DIR, AMDJS_BUILD_DIR]
		},
	    
	    transport: {
			options: {
				paths: [SRC_DIR],
				alias: {
					"jquery": "conf/jquery"
				},
				debug: false
			},
			target: {
				files: [{
					cwd: SRC_DIR,
					expand: true,
					src: [
						//srcFile,
						'**/*.js',
						'!conf/requireConf.js',
						'!lib/require.js'
					], 
					dest: TRANS_DIR
				}]
			}
		},
		
		
		combi: {
			target: {
				options: {
					modulesPath : TRANS_DIR,
					seajsUse : "",
					complete : combiComplete
				},
				files: [{
					cwd: TRANS_DIR,
					expand: true,
					src: "page/*.js",
					dest: COMBI_DIR
				}]
			}
		},
		
		
		uglify: {
			options: {
				report: 'min'
			},
			target: {
				files: [{
					cwd: AMDJS_BUILD_DIR,
					expand: true,
					src: "*.js",
					dest: DEST_DIR
				}]
			}
		}
	});
	
	
	function combiComplete(fileList){
		if(!fs.existsSync(AMDJS_BUILD_DIR)){
			fs.mkdirSync(AMDJS_BUILD_DIR);
		}
		
		fileList.forEach(function(file){
			var fileName;
			var arr;
			
			if(file.indexOf("/") > -1){
				arr = file.split("/");
				fileName = arr.pop();
			}else{
				fileName = file;
			}
			
			amdjsBuild(file, AMDJS_BUILD_DIR + fileName.replace(/\.js$/, ".min.js"), "$AJB");
		});
	}
  
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-combi');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  

	grunt.registerTask('default', '默认任务', function() {
		console.log("grunt build: 将项目目录js/page/下的js文件分别合并压缩到当前built目录");
	});
  
	grunt.registerTask('build', ['clean:before', 'transport','combi', 'uglify', 'clean:after']);
	//grunt.registerTask('build', ['clean:before', 'transport', 'combi']);
};