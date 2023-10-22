windowOpened= false;
function canvasClick() {
  console.log("--canvasClick--");
  if (windowOpened) {
    console.log("--canvasClick--opened--");
    return;
  }
  wopen=window.open("https://ads.games235.com/");
  windowOpened=true;
  console.log("--canvasClick--wopen--", wopen);
}
document.getElementById("openfl-content").addEventListener("click", canvasClick);
