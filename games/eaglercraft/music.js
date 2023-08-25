window.music = (function () {
	let audio = new Audio();
	let songs = [ "CW6CMFPAsF4", "gz1xq2qJnHs", "RUEWIG8zoa0", "n02zTn2d3rY", "FoFqBB0r9OI", "Ugb7GUtiyZ0", "3UFyc7zN9KY", "V6N_rL4fh6I", "iBZS6ad3Tlk", "Mnb2RhXL-nM", "lidx_2d4YOA", "ETQJZHYlc3g", "kRpRoTaNni0", "ACy5tHoNUoA", "OKoA2ppQMkw", "-jcOtAuGZC4", "-cJFVNZC4h8", "yLFX_7SH2tY", "oP6wOte3wZU", "MT7ssDlcN_c", "dOu3APclRkU", "CElWZz_oCsA", "8wr8eqro_OI", "OlLUtndzw7A", "HBYS5mBHie4", "5HxGK3DTUBQ", "_9qUu8IeabE", "QaRbalghKl4", "PtjgNhXWr2U", "OqJi_n3AcV4", "WFFF-jMyFaQ", "FD56t_0B9ig", "x6EATApss4k", "vLv3r1jtnmc", "VLbMXG8lvjI", "-5h9Q5PMHkw", "M0opHPn2bSQ", "XbuqB3uB6DI", "ZCJo8CDyqlQ", "A1-fM0s1Yt0", "zfKvnd-f4fA", "zsLT3JqfTn0", "YZlclPLX1Hw", "AYdyRPIo4ZA", "loeGmoYr3s4", "0qhoqXTUQlY", "7KtwWWJqDrM", "uIk_jGypR24", "G9z_DmhSKjM", "IFWYSOsAuL8", "DhUieLpc16A", "b9W22zhQdkA", "lpm7-aEXD7I", "YIp1S0VfJVI", "BSC6d81pvwE", "aZlOBCXgIVg", "sG2yDNSSwaY", "RiVZCDq--m4", "-NXEcmszXzQ", "N2SW_MWBa6w", "2k5dqgNT37g", "T0cGZD15UaA", "6qTBIAkd8ns", "2_GUQC4nCl8", "9LlH78J_3bc", "9Ty-qFZZPZk", "6EDS01Ipaow", "R3rzdj_aP3U", "3Ax6jTZlu_g", "8GW6sLrK40k", "mfegGiVUk58", "mLmFpLivDRE", "GOQEOkPsdcM", "a4LZg9vIGT0", "720HcvEvEC8", "2GBsmmzm2j0", "YbdcrJZBtu8", "x0qKH1hJePs", "Ub7y69hg4do", "hFal0LKZwnM", "PzJtShkAkwA", "rYHNB_lPSNc", "Mr-wV17WFZU", "sVnRScxzPlA", "MATIBHTbLkw", "8DrtpB5Me6s", "EdFyQOngYJs", "3RyqONKuRzk", "jBPqr_IsWvY", "f6dnBVhH8AY", "dAalyaoVGfE", "DYRvdzUJMr0", "qFjaDnnPbA4", "RM9O1HO4FLE", "NrlhbIzjO04", "F6NNMAoBMS4", "UqVW7-q7fTA", "eDBAdAzCqr4", "EPT3dIWBbDA", "FuMtDXkuxVw", "PkmKM_OXNZM", "KbC46oJmLh4", "8HW9fyQdib4", "mRJSIYmHuNI", "GmLsIivtcIM", "rDBbaGCCIhk", "EyicJOlYOm4", "BDIG46sPKCs", "Ig5v4jhLLWI", "XZcG2esvW7I", "TTJBevUIp0s", "agIayif-oi0", "plm3DVsX7Jg", "yP7dvyK5OiY", "HA0Mk5BXX44", "HbtwR1REaFk", "-tUJJXWXdXk", "h-b8Xs7sNI0", "eyp-YuzhTN4", "xrawoRF4lN0", "6xVHpgJbuc8", "IdeMjEYeH_M", "mLFfI13jfeE", "fYSUV33ZPfw", "qnSHJlRJ2cM", "Ytt1_ErIV34", "_DBfb0-A6T0", "05TnpE0x4wI", "px-UnYP1smo", "dRAKbbYlTcI", "MYC5k-EvYyI", "GCkyGVsIcF0", "Qg83cniiYEY", "F7gwcgmoREg", "3I-WJ6UgmOA", "RakcYpzOI8A", "Tx0dUDrh_hE", "uRdnCC5kACY", "phrpiLpaiLs", "sLwHrqW-x4w", "wf93JAZR3gU", "7tBQFpFyZiI", "zz3F5j8qWNw", "Q7miO-Q-4bU", "j5FcOo48HpE", "CQLvggJFxuM", "_Ci0Kgdpgsw", "XYXUi4bn1pQ", "iBjZshhpipg", "-yXzE7undI4", "zEf46ulVSL0", "UBIsi3xWa64", "GWYkh1IX4PE", "n1hChZS9Hew", "YYjDFXJ6Wdo", "qOVxQ_yEYks", "9zibDnOOj3w", "rQMd3b1BF50", "xeM40-FkRLI", "wVOFnTrSOOA", "msUarvc4Sx8", "GB9kBLre96M", "p_wcC1l1cLk", "zKavYMyPveI", "YZ3no2EK58Y", "SLFMiEAjSoA", "K5F-RLzLH6Q", "A09BhpgfGKQ", "ziAK1OLeeEE", "7Vj-xVb0DWI", "33zGN7vENog", "zD8TxUBkjGA", "m0zPkt5BZ9I", "xktxgo7b8HQ", "jMSiM6iZpwk", "zeTIG5lwDyM", "CUHYQ-FN3P8", "GLGjqtgCKY8", "bLagC2wX3Ak", "fW128GHFJIE", "B5L0AMO2HA8", "oFFFzMkGNrk", "1RQQLwnaw80", "byUipqLQ_Hc", "_Rjh6zVEPH4", "R9z5CoO7Qxo", "neEq14x7mTU", "pkkIqT9LpDY", "BLRk8D7ovDY", "gMGEyl5TRa4" ];
	let insturl = "https://invidious.zapashcanon.fr";
	let loading = false;
	let usealt = 0;

	function shuffle (array) {
		for (let i = 0; i < array.length; i++) {
			let j = Math.floor(Math.random() * (array.length-i)) + i;
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function fixfard (url) {
		if (!url) return insturl;
		return url.endsWith("/") ? url.slice(0, url.length - 1) : url;
	}

	const updinsturl = async () => {
		try {
			const json = await (await fetch("https://api.invidious.io/instances.json?sort_by=health")).json();
			const out = shuffle(json).map(entry => {
				const healthKnown = !!entry[1].monitor
				return {
					name: entry[0],
					details: entry[1],
					health: +(healthKnown ? entry[1].monitor.dailyRatios[0].ratio : 95),
					healthKnown
				}
			}).filter(entry => {
				return entry.details.type === "https" && entry.health > 0
			}).sort((a, b) => {
				return b.health - a.health
			});
			insturl = fixfard(out.find(e => e.details.cors).details.uri);
		} catch (e) { aud.onerror(); }
	};
	const updint = setInterval(updinsturl, 3600000);
	updinsturl();

	audio.onended = function (e) {
		loading = true;
		start();
	};

	audio.oncanplay = function (e) {
		if (loading) audio.play();
	};

	audio.onplay = function (e) {
		loading = false;
		if (usealt == 1) usealt = 0;
	};

	audio.onerror = function (e) {
		if (usealt == 3) {
			audio = null;
			return;
		}

		if (usealt == 0 || usealt == 1) {
			usealt++;
		} else if (usealt == 2) {
			loading = true;
			usealt = 3;
		}
		stop();
		if (usealt == 1) {
			updinsturl();
		} else {
			clearInterval(updint);
		}
		if (usealt == 1 || usealt == 2) start();
	};

	const playing = function () {
		return usealt == 3 || (!audio.paused) || loading;
	};

	const start = function() {
		loading = true;
		let url = "";
		if (usealt == 0 || usealt == 1) {
			songs = shuffle(songs);
			url = insturl + "/latest_version?id=" + songs[0] + "&itag=251";
		} else if (usealt == 2) {
			url = "https://nightride.fm/stream/chillsynth.m4a";
		} else if (usealt == 3) {
			return;
		}
		audio.src = url;
		audio.currentTime = 0;
	};

	const stop = function() {
		if (usealt == 3) return;
		audio.pause();
		loading = false;
	};
	
	const volume = function(vol) {
		audio.volume = vol;
	};

	return {
		start: start,
		stop: stop,
		playing: playing,
		volume: volume
	};
})();

window.addEventListener("eagTitleMusic", function(e) {
	if (e.detail.playing) {
		if (!window.music.playing()) window.music.start();
	} else {
		if (window.music.playing()) window.music.stop();
	}
	window.music.volume(e.detail.volume);
});