function initAipPreroll() {
	if(typeof aipPlayer != "undefined") {
		adplayer = new aipPlayer({
			AD_WIDTH: 960,
			AD_HEIGHT: 540,
			AD_FULLSCREEN: true,
			AD_CENTERPLAYER: false,
			LOADING_TEXT: 'loading advertisement',
			PREROLL_ELEM: document.getElementById('preroll'),
			AIP_COMPLETE: function ()  {
				/*******************
				 ***** WARNING *****
				 *******************
				 Please do not remove the PREROLL_ELEM
				 from the page, it will be hidden automaticly.
				 If you do want to remove it use the AIP_REMOVE callback below
				*/
				//alert("Ad Completed");
			},
			AIP_REMOVE: function ()  {
				// Here it's save to remove the PREROLL_ELEM from the page
				// But it's not necessary
			}
		});
	} else {
		// Failed to load the adslib ads are probably blocked
		// don't call the startPreRoll function.
		// it will result in an error.
	}
}

function getScript (src, callback) {
	var headElm = document.head || document.getElementsByTagName('head')[0];
	var script = document.createElement("script");
	var once = true;
	script.async = "async";
	script.type = "text/javascript";
	script.charset = "UTF-8";
	script.src = src;
	script.onload = script.onreadystatechange = function () {
		if (once && (!script.readyState || /loaded|complete/.test(script.readyState))) {
			once = false;
			callback();
			script.onload = script.onreadystatechange = null;
		}
	};

	headElm.appendChild(script);
}

getScript('//api.adinplay.com/player/v2/GNS/gons.io/player.min.js', initAipPreroll);

function playAd()
{
	adplayer.startPreRoll();
	
}
