function UnityProgress(gameInstance, progress) 
{
    if (!gameInstance.Module) {
         return;
	  } else if (progress === "complete") {
		document.getElementById("loading").style.display = "none";
		document.getElementById("percent").style.display = "none";
		return;
	  } else if (progress == 1) {
		//document.getElementById("percent").innerHTML = "just a sec...";
	  } else if (progress > 0) {
		document.getElementById("percent").innerHTML = Math.round(progress * 100) + "%";
	  }
}
