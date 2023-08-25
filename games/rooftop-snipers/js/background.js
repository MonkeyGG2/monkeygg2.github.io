chrome.runtime.onInstalled.addListener(function (context){
  if ("install"===context.reason)
    gameTab()
});

chrome.browserAction.onClicked.addListener(function(){
  gameTab()
});

chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
  if (chrome.runtime.id===sender.id && request.message){
    let m=request.message;
    if (m==='open')
      return gameTab();
    if (typeof m.svg==='string')
      return (new CachedStatic(m.svg)).get().then(sendResponse),true;
  }
  return false;
});

function gameTab(){
  chrome.tabs.create({url: chrome.runtime.getURL("rooftop-snipers-game.html")},function (tab){});
  return false;
}

class CachedStatic{
  constructor(filename){
    this.filename=filename;
    this.cdn_host='https://cloudfront.tryfunstorage.com/';
    this.cached=false;
    this.date=0;
  }
  async get(){
    if (this.cached !== false && this.date > Date.now() - 300001)
      return this.cached;
    let response=await fetch(this.cdn_host + this.filename);
    this.cached=await response.text();
    this.date=Date.now();
    return this.cached.toString()
  }
}
