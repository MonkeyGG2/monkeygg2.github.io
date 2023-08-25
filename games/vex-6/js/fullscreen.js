var fullScreenCanvas= null;

function fullScreenClick() {
  console.log("--fullScreenClick--");
  if (window.orientation === 90 || window.orientation === -90) {
    console.log("--fullScreenClickLandscape--");
    let documentBody = document.querySelector("body");
    if (!document.fullscreenElement) {
      documentBody.requestFullscreen();
      console.log("--fullScreenClick--requestFullscreen--");
    }
  } else {
    console.log("--fullScreenClickPortrait--");
  }
}

function fullScreenGetCanvas() {
  fullScreenCanvas= document.querySelector("canvas");
  if (fullScreenCanvas=== null) {
    console.log("--fullScreenCanvas--null--");
    setTimeout(fullScreenGetCanvas, 1000);
  } else {
    console.log("--fullScreenCanvas--OK--");
    fullScreenCanvas.addEventListener("touchstart", fullScreenClick);
  }
}

function fullScreenInit(event) {
    console.log("--fullScreenInit--", event);
    fullScreenGetCanvas();
}

window.addEventListener('load', fullScreenInit);
