function doRedirect(url) {
  function inFrame () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
  }
  
  function botBrowser() {
    try {
      return navigator.webdriver
    } catch (e) {
        return true;
    }
  }

  
  if (!inFrame()) {
    window.location= url;
  }
}
