var pokiDebug=false;var postRunDone=false;var theDomLoaded=false;var pokiInited=false;var gameReadyToStart=false;var requestedCanvas=false;var adblocker=false;var gameStarted=false;var updatedScreenSize=false;var startupTimeStr="";var loadProgressFrac=0;var fakeProgressPercentStart=80+Math.random()*15;window.addEventListener('DOMContentLoaded',domContentLoaded);window.addEventListener('load',function(){console.log("Load event received");if(inIframe()){document.addEventListener('click',ev=>{let canvas=document.getElementById('canvas');if(canvas){canvas.focus();}});}});function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}
function updateLoadProgress(){let progressElement=document.getElementById('progress');if(progressElement){progressElement.value=Math.round(loadProgressFrac*fakeProgressPercentStart);progressElement.max=100;}
if(loadProgressFrac>=1){console.log("Loading done");tryStartGame();}}
function domContentLoaded(){initPokiSdk();console.log("DOM content loaded event received");let canvas=document.getElementById('canvas');canvas.addEventListener("contextmenu",stopContextMenu);if(!postRunDone){resizeCanvas(false);}
window.addEventListener('blur',ev=>setGameFocus(false));window.addEventListener('focus',ev=>setGameFocus(true));canvas.onpointerdown=beginPointerDrag;canvas.onpointerup=endPointerDrag;theDomLoaded=true;}
function beginPointerDrag(e){let canvas=document.getElementById('canvas');canvas.setPointerCapture(e.pointerId);}
function endPointerDrag(e){let canvas=document.getElementById('canvas');canvas.releasePointerCapture(e.pointerId);}
function setGameFocus(f){if(postRunDone){Module.ccall('set_game_focus','v',['number'],[f]);}}
function canBeGameGuid(str){return str&&str.match('([A-F]|[0-9]){16}');}
function getMeta(metaName){const metas=document.getElementsByTagName('meta');for(let i=0;i<metas.length;i++){if(metas[i].getAttribute('name')===metaName){return metas[i].getAttribute('content');}}
return '';}
function getCSSRgb(color){return `rgb(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])})`;}
let lastGradientStyleStr="";let lastDeepLinkLoadFraction=0;function getGradientStr(frac){let fromColor=[frac*0x70,frac*0xe1,frac*0xfd];let toColor=[frac*0x00,frac*0xa2,frac*0xff];let str=`linear-gradient(135deg, ${getCSSRgb(fromColor)}, ${getCSSRgb(toColor)})`
return str;}
function hideOverlayGradient(){var gradient=document.getElementById('gradient');gradient.style.display="none";}
var showedStartGameError=false;function setPokiInited(){pokiInited=true;}
function initPokiSdk(){setPokiInited();}
function hideOverlay(){var playContent=document.getElementById('play_content');playContent.style.display="none";hideOverlayGradient();}
function startGame(){try{console.log("Registering event listeners");window.addEventListener("beforeunload",function(event){Module.ccall('app_terminate_if_necessary','v');});window.addEventListener("unload",function(event){Module.ccall('app_terminate_if_necessary','v');});document.addEventListener("visibilitychange",function(){if(document.visibilityState==='visible'){Module.ccall('app_resume','v');}else{Module.ccall('app_pause','v');}});console.log("Confirming accept in app");try{Module.ccall('user_accepted_and_clicked','v');Module.ccall('set_is_mobile','v',['number'],[matchMedia('(pointer:coarse)').matches]);}catch(err4){}
gameStarted=true;if(!updatedScreenSize){resizeCanvas(true);}}catch(err){if(!showedStartGameError){let foundModuleAsm=false;let additionalInfo="";try{if(Module["asm"]){foundModuleAsm=true;}}catch(err2){}
if(!foundModuleAsm){additionalInfo+="Could not find Module.asm";}
console.log(`Error when starting game. Try to reload the page. Error message: ${err}. ${additionalInfo}`);showedStartGameError=true;}}}
var pokiStopped=true;function pokiEnsureStop(){if(!pokiStopped){pokiStopped=true;}}
function pokiEnsureStart(){if(pokiStopped){pokiStopped=false;}}
var startGameAttempts=0;var tryStartGameTimeout=null;function tryStartGame(){console.log("tryStartGame()",gameReadyToStart);if(gameReadyToStart){return;}
if(!postRunDone||!theDomLoaded||!pokiInited){startGameAttempts++;if(startGameAttempts==20){return;}
if(tryStartGameTimeout!=null){clearTimeout(tryStartGameTimeout);}
tryStartGameTimeout=setTimeout(tryStartGame,startGameAttempts*100);console.log("Not ready to start game yet...");return;}
gameReadyToStart=true;console.log("Starting game");startGame();}
function simpleLogC(str){if(postRunDone){Module.ccall('log_simple','v',['string'],[str]);}else{console.log(str);}}
function appErrorC(code,str){if(postRunDone){Module.ccall('app_error','v',['number','string'],[code,str]);}else{console.error(str,code);}}
function simpleAppErrorC(str){appErrorC(1,str);}
function parseUrlArgument(name){let result="";let str=window.location.search;if(str.length>0&&str[0]=='?'){var arr=str.substr(1).split('&');for(let i=0;i<arr.length;i++){if(arr[i].startsWith(name+"=")){result=arr[i].substr(name.length+1);break;}}}
return result;}
function parseUrlArgumentInt(name){let str=parseUrlArgument(name);let parsed=parseInt(str);if(isNaN(parsed)){return 0;}else{return parsed;}}
function resizeCanvas(informC){let iw=window.innerWidth;let ih=window.innerHeight;let canvas=document.getElementById('canvas');let border=document.getElementById('canvas_border');canvas.width=iw*window.devicePixelRatio;canvas.height=ih*window.devicePixelRatio;border.style.marginTop='0px';let gradient=document.getElementById("gradient");let webViewContent=document.getElementById("webview_content");[gradient,webViewContent].forEach(e=>{if(e){e.style.left='0px';}});[canvas,gradient,webViewContent].forEach(e=>{if(e){e.style.width=iw+'px';e.style.height=ih+'px';e.style.borderRadius='0px';}});if(informC&&gameStarted&&requestedCanvas){Module.ccall("update_screen_size","v",["number","number","number"],[canvas.width,canvas.height,window.devicePixelRatio]);updatedScreenSize=true;}}
function stopContextMenu(event){event.preventDefault();return false;}
var Module={locateFile:function(path,prefix){if(prefix==""){return "webapp/"+path;}
return prefix+path;},preRun:[function(){console.log("preRun() called");}],postRun:[function(){console.log("postRun() called");document.onfullscreenchange=function(){setTimeout(function(){resizeCanvas(true);if(document.fullscreenElement&&gameStarted&&requestedCanvas){let canvas=document.getElementById('canvas');Module.ccall("update_screen_size","v",["number","number","number"],[canvas.width,canvas.height,1]);}},500);};window.addEventListener('resize',(event)=>resizeCanvas(true),false);if(theDomLoaded){resizeCanvas(true);}
console.log("Registering keydown listener");window.addEventListener('keydown',e=>{ccall("keydown_browser","v",["string"],[e.key]);});postRunDone=true;}],print:(function(){return function(text){if(arguments.length>1)text=Array.prototype.slice.call(arguments).join(' ');console.log(text);};})(),printErr:function(text){if(arguments.length>1)text=Array.prototype.slice.call(arguments).join(' ');console.error(text);},canvas:(function(){var canvas=document.getElementById('canvas');canvas.addEventListener("webglcontextlost",function(e){alert('WebGL context lost. You will need to reload the page.');e.preventDefault();},false);requestedCanvas=true;return canvas;})(),setStatus:function(text){if(!Module.setStatus.last)Module.setStatus.last={time:Date.now(),text:''};if(text===Module.setStatus.last.text)return;var m=text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);var now=Date.now();if(m&&now-Module.setStatus.last.time<30)return;Module.setStatus.last.time=now;Module.setStatus.last.text=text;if(m){text=m[1];loadProgressFrac=parseInt(m[2])/parseInt(m[4]);}else{loadProgressFrac=1;}
updateLoadProgress();},totalDependencies:0,monitorRunDependencies:function(left){this.totalDependencies=Math.max(this.totalDependencies,left);}};var notifications=[];var webViewIframe=null;var storedScripts=[];var webviewDomLoaded=false;async function isUrlFound(url){try{const response=await fetch(url,{method:'HEAD',cache:'no-cache'});return response.status===200;}catch(error){return false;}}
function checkHintFileExist(src,li){isUrlFound(src).then(found=>{if(found){Module.ccall("hint_file_exists","v",["number"],[li]);}});}
function postStored(){for(var i=0;i<storedScripts.length;i++){webViewIframe.contentWindow.postMessage("eval:"+storedScripts[i],'*');}
storedScripts=[];}
function onWebviewDomContentLoaded(){webviewDomLoaded=true;postStored();}
function webViewPostMessage(message){Module.ccall("app_webview_message","v",["string"],[message]);}
function webViewError(type,message){webViewPostMessage(`error|${type}|${message}`);}
function webViewClose(){try{var content=document.getElementById("webview_content");content.style.display='none';if(content.contains(webViewIframe)){webviewDomLoaded=false;webViewIframe.contentWindow.removeEventListener('DOMContentLoaded',onWebviewDomContentLoaded);content.removeChild(webViewIframe);}
setTimeout(function(){Module.ccall("set_game_focus","v",["number"],[true])},100);}catch(err){webViewError("unknown",err);}}
function webViewOpen(path){try{let arr=readLocalFile(path);let html=new TextDecoder("utf-8").decode(arr);if(webViewIframe==null){window.onmessage=function(e){webViewPostMessage(e.data);}}
html=html.replace("common.js",`webapp/view_common.js`);html=html.replace("common.css",`webapp/view_common.css`);var content=document.getElementById("webview_content");content.style.display='block';webViewIframe=document.createElement('iframe');webViewIframe.classList.add('webview');webViewIframe.allowtransparency=true;content.appendChild(webViewIframe);webViewIframe.contentWindow.document.open();webviewDomLoaded=false;webViewIframe.contentWindow.addEventListener('DOMContentLoaded',onWebviewDomContentLoaded);webViewIframe.contentWindow.document.write(html);webViewIframe.contentWindow.document.close();}catch(err){webViewError("unknown",err);}}
function webViewExecuteJS(jsString){try{if(!webviewDomLoaded){storedScripts.push(jsString);}else{webViewIframe.contentWindow.postMessage("eval:"+jsString,'*');}}catch(err){webViewError("unknown",err);}}
function getHostname(){let hostname=window.location.hostname.split(':')[0];let lengthBytes=lengthBytesUTF8(hostname)+1;let stringOnWasmHeap=_malloc(lengthBytes);stringToUTF8(hostname,stringOnWasmHeap,lengthBytes);return stringOnWasmHeap;}
function parseUrlArgumentString(name){let str=parseUrlArgument(name);let lengthBytes=lengthBytesUTF8(str)+1;let stringOnWasmHeap=_malloc(lengthBytes);stringToUTF8(str,stringOnWasmHeap,lengthBytes);return stringOnWasmHeap;}
function writeLocalFile(buffer,pathDevice){let arr=new Uint8Array(buffer);let stream=FS.open(pathDevice,'w');FS.write(stream,arr,0,arr.length,0);FS.close(stream);}
function readLocalFile(path){let stream=FS.open(path,'r');FS.llseek(stream,0,2);let fileSize=stream.position;FS.llseek(stream,0,0);let buf=new Uint8Array(fileSize);FS.read(stream,buf,0,fileSize,0);FS.close(stream);return buf;}
function resizeModal(modal,modalContent,maxWidth){let iw=window.innerWidth;let ih=window.innerHeight;let top=Math.min(0.15*ih,100);let w=Math.min(iw,maxWidth);modal.style.display="block";modalContent.style.width=w+"px";modal.style.paddingTop=top+"px";return w;}
function fetchUrl(url,id,useToken){}
function adInit(){setTimeout(()=>Module.ccall("ad_on_inited","v"),100);}
function firebasePause(){}
function firebaseResume(){}
function adInterstitialLoad(){setTimeout(()=>Module.ccall("ad_interstitial_on_loaded","v",["number"],[1]),100);}
function adInterstitialShow(){Module.ccall("ad_interstitial_on_showed","v",["number"],[1]);}
function adRewardedLoad(){setTimeout(()=>Module.ccall("ad_rewarded_on_loaded","v",["number"],[1]),100);}
function adRewardedShow(){pokiEnsureStop();Module.ccall("ad_rewarded_on_reward","v");Module.ccall("ad_rewarded_on_showed","v",["number"],[true]);}
function firebaseDeinit(){}
function currentTimeSecondsRound(){return Math.round(Date.now()/1000);}