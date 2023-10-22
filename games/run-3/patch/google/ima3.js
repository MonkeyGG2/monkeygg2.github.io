AdDisplay= function() {
  this.initialize= function() {
    
  }
}

AdDisplayContainer= function() {
  this.initialize= function() {
    
  }
}

AdsLoader= function() {
  this.addEventListener= function() {
  
  }
  this.requestAds= function() {
   console.trace("--fx--AdsLoader--requestAds--", arguments); 
  }
}

AdsRequest= function() {
  
}

AdErrorEvent= {
  "Type": {
    "AD_ERROR": -1
  }
}

AdsManagerLoadedEvent= {
  "Type": {
    "ADS_MANAGER_LOADED": 1,
  }
}

google= {
  "ima": {
    "AdDisplay": AdDisplay,
    "AdDisplayContainer": AdDisplayContainer,
    "AdsLoader": AdsLoader,
    "AdsManagerLoadedEvent": AdsManagerLoadedEvent,
    "AdErrorEvent": AdErrorEvent,
    "AdsRequest": AdsRequest,
  },
}