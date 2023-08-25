// H2Fixed

/*<script>*/
window.famobi_env = window.famobi_env || "gp";

var _fgq = [];

(function (d, url, fgJS, firstJS) {
	fgJS = d.createElement('script');
	firstJS = d.getElementsByTagName('script')[0];
	fgJS.src = url;
	fgJS.onload = function() {
		if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
			return;
		}

		famobi = new fg_api(
			{
				"features": {
					"highscores": 0,
					"menu": 1,
					"standalone": false,
					"rotation": 0,
					"tracking": 1,
					"skip_title": false,
					"skip_tutorial": false,
					"credits": 1,
					"login": 1,
					"auto_quality": false,
					"external_start": false,
					"external_pause": false,
					"external_mute": false,
					"external_leaderboard": false,
					"external_achievements": false,
					"multiplayer_local": true,
					"firebase": true,
					"leaderboard": 0,
					"multiplayer": 0,
					"fullscreen": 0,
					"screenshot": 0,
					"payment": 0,
					"ads": 0,
				},
				"game_i18n": {
					"default": {
						"credits.png": "fg_i18n/en/images/credits-sheet0.png",
						"creditsURL": "https://famobi.com",
						"api.back": "&laquo; Back",
						"api.more": "&raquo; More Games",
						"api.fullscreen": "[+] Fullscreen mode",
						"api.continue": "Continue",
						"api.play_now": "Play now",
						"api.ad_modal_header": "Advertisement closes in&hellip;",
						"api.ad_modal_header2": "Advertisement&hellip;",
						"api.ad_modal_header3": "Loading&hellip;",
						"api.ad_modal_header_blocked": "Not available due to policy reasons",
						"api.teaser_modal_header": "Continue with the next episode&hellip;",
						"api.no_abo": "No Subscription!",
						"api.secure_payment": "Secure Payment!",
						"api.paymentmethod_cc": "Credit Card",
						"api.paymentmethod_paypal": "PayPal",
						"api.paymentmethod_sms": "SMS",
						"api.payment_cta": "Next",
						"api.install_app_text_2": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?",
						"api.install_app_cta_2": "Install Full Game Now",
						"api.install_app_text_3": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?",
						"api.install_app_cta_3": "Install Full Game Now",
						"api.install_app_text": "Free full version",
						"api.install_app_cta": "Get the App",
						"api.privacy_info": "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
						"api.privacy_link": "<p><a href=\"vendors/?game_i18n/default\" target=\"_blank\" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href=\"privacy/\" target=\"_blank\" data-famobi-href>Privacy Policy</a></p>",
						"api.people_also_like_headline": "People also like:",
						"more_games_image_prefix": "assets",
						"more_games_image": "/more-games-button.png",
						"more_games_url": "http://html5games.com",
						"preload_image": "/html5games/gameapi/v1/invisPreloadImage.png",
						"test_preload_image": "/html5games/gameapi/v1/testPreloadImage.png"
					},
					"A-O7SKJ.default": {
						"creditsURL": "none"
					},
					"en": {
						"api.back": "&laquo; Back",
						"api.more": "&raquo; More Games",
						"api.fullscreen": "[+] Fullscreen mode",
						"api.continue": "Continue",
						"api.play_now": "Play now",
						"api.ad_modal_header": "Advertisement closes in&hellip;",
						"api.ad_modal_header2": "Advertisement&hellip;",
						"api.ad_modal_header3": "Loading&hellip;",
						"api.ad_modal_header_blocked": "Not available due to policy reasons",
						"api.teaser_modal_header": "Continue with the next episode&hellip;",
						"api.no_abo": "No Subscription!",
						"api.secure_payment": "Secure Payment!",
						"api.paymentmethod_cc": "Credit Card",
						"api.paymentmethod_paypal": "PayPal",
						"api.paymentmethod_sms": "SMS",
						"api.payment_cta": "Next",
						"api.install_app_text_2": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?",
						"api.install_app_cta_2": "Install Full Game Now",
						"api.install_app_text_3": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?",
						"api.install_app_cta_3": "Install Full Game Now",
						"api.install_app_text": "Free full version",
						"api.install_app_cta": "Get the App",
						"api.privacy_info": "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
						"api.privacy_link": "<p><a href=\"vendors/?game_i18n/en\" target=\"_blank\" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href=\"privacy/\" target=\"_blank\" data-famobi-href>Privacy Policy</a></p>",
						"api.people_also_like_headline": "People also like:"
					},
				},
				"gameParams": {
					"languages_available": [
						"en"
					],
					"flags": {
						"exclusive": 1
					},
					"aspectRatio": 1.778,
					"highscores_enabled": 1,
					"fullscreen_enabled": 1,
					"affiliate_urls": {
						"A-DENDAAPP": "https://games.cdn.famobi.com/partners/subscription/denda/onet-connect-classic/5204e737/",
						"A-HUAWEIAPP": "https://games.cdn.famobi.com/partners/subscription/huawei/onet-connect-classic/f7a582a2/"
					},
					"header_image": "OnetConnectClassicHeader.jpg"
				},
				"urlRoot": "https://play.famobi.com",
				"assetsPath": "assets",
				"ts": 1632022229000,
				"short_url": "https://play.famobi.com/onet-connect-classic",
				"uuid": "d6173a60-1b41-4b34-b4c3-aa4c5fc9ce35",
				"pid": "4638e320-4444-4514-81c4-d80a8c662371",
				"aid": "A1000-1",
				"name": "\"HTML5 Games\"",
				"package_id": "\"onet-connect-classic\"",
				"languages": [
					"en",
				],
				"cmp": "default",
				"ads": {
					"min_s_between": 90,
					"min_s_before": 10,
					"show_initial": true,
					"show_video": true,
					"npa": false,
					"description_url": "https://play.famobi.com/sda/description/onet-connect-classic?hl=en",
					"provider": "dfp",
					"dfp_available": false,
					"domains": [
						"http://html5games.com",
						"html5games.com"
					],
					"vast_url": ""
				},
				"i18n": {
					"default": {
						"api.back": "&laquo; Back",
						"api.more": "&raquo; More Games",
						"api.fullscreen": "[+] Fullscreen mode",
						"api.continue": "Continue",
						"api.play_now": "Play now",
						"api.ad_modal_header": "Advertisement closes in&hellip;",
						"api.ad_modal_header2": "Advertisement&hellip;",
						"api.ad_modal_header3": "Loading&hellip;",
						"api.ad_modal_header_blocked": "Not available due to policy reasons",
						"api.teaser_modal_header": "Continue with the next episode&hellip;",
						"api.no_abo": "No Subscription!",
						"api.secure_payment": "Secure Payment!",
						"api.paymentmethod_cc": "Credit Card",
						"api.paymentmethod_paypal": "PayPal",
						"api.paymentmethod_sms": "SMS",
						"api.payment_cta": "Next",
						"api.install_app_text_2": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?",
						"api.install_app_cta_2": "Install Full Game Now",
						"api.install_app_text_3": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?",
						"api.install_app_cta_3": "Install Full Game Now",
						"api.install_app_text": "Free full version",
						"api.install_app_cta": "Get the App",
						"api.privacy_info": "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
						"api.privacy_link": "<p><a href=\"vendors/\" target=\"_blank\" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href=\"privacy/\" target=\"_blank\" data-famobi-href>Privacy Policy</a></p>",
						"api.people_also_like_headline": "People also like:"
					},
					"en": {
						"api.back": "&laquo; Back",
						"api.more": "&raquo; More Games",
						"api.fullscreen": "[+] Fullscreen mode",
						"api.continue": "Continue",
						"api.play_now": "Play now",
						"api.ad_modal_header": "Advertisement closes in&hellip;",
						"api.ad_modal_header2": "Advertisement&hellip;",
						"api.ad_modal_header3": "Loading&hellip;",
						"api.ad_modal_header_blocked": "Not available due to policy reasons",
						"api.teaser_modal_header": "Continue with the next episode&hellip;",
						"api.no_abo": "No Subscription!",
						"api.secure_payment": "Secure Payment!",
						"api.paymentmethod_cc": "Credit Card",
						"api.paymentmethod_paypal": "PayPal",
						"api.paymentmethod_sms": "SMS",
						"api.payment_cta": "Next",
						"api.install_app_text_2": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Low signal?",
						"api.install_app_cta_2": "Install Full Game Now",
						"api.install_app_text_3": "🚙&nbsp;&nbsp;🚌&nbsp;&nbsp;⛱&nbsp;&nbsp;Long journeys?",
						"api.install_app_cta_3": "Install Full Game Now",
						"api.install_app_text": "Free full version",
						"api.install_app_cta": "Get the App",
						"api.privacy_info": "<p><strong>Data Privacy Information:</strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
						"api.privacy_link": "<p><a href=\"vendors/\" target=\"_blank\" data-famobi-href>Ad Vendors</a>&nbsp;<span>&</span>&nbsp;<a href=\"privacy/\" target=\"_blank\" data-famobi-href>Privacy Policy</a></p>",
						"api.people_also_like_headline": "People also like:"
					},
				},
				"branding": {
					"more_games_image_prefix": "assets",
					"more_games_image": "/more-games-button.png",
					"more_games_url": "http://html5games.com",
					"preload_image": "PreloadImage.png",
					"test_preload_image": "PreloadImageTest.png"
				},
				"thumb": "Teaser.jpg",
				"blurred_thumb": "Teaser_blurred.jpg",
				"favicon_32": "Teaser_32.jpg",
				"favicon_64": "Teaser_64.jpg",
				"favicon_96": "Teaser_96.jpg",
				"favicon_192": "Teaser_192.jpg",
				"type": "html5",
				"tracking_date": "2021-09-17",
				"video": {
					"sources": []
				},
				"style": "\t<style type=\"text/css\">\n\t\t#fg-root #fg-overlay { display: none; }\n\t</style>",
				"headerHtml": "<header id=\"fg-header\"><div class=\"fg-clip\" id=\"fg-clip\"><div class=\"fg-clip-btn\"><span></span></div></div></header>",
				"menuHtml": "<ul class=\"fa-menu-buttons\"><li data-famobi-href=\"back\"><a href=\"javascript:void(0);\" class=\"fa-menu-button-back\" tabindex=\"-1\"><svg style=\"display: none;\" version=\"1.1\" xmlns:svg=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" xml:space=\"preserve\"><g transform=\"translate(0,-952.36218)\"><path d=\"M49.9,963.6c-0.5,0-1,0.2-1.5,0.5l-47.5,37.5c-1.1,0.9-1.2,2.5-0.4,3.6c0.8,1,2.5,1.2,3.6,0.4L50,969.3l45.9,36.2 c1,0.8,2.7,0.6,3.5-0.4c0.8-1,0.7-2.7-0.4-3.6l-20.3-16.1v-22h-10v14.1l-17.2-13.6C51,963.8,50.5,963.6,49.9,963.6z M50,973.6 l-33.8,26.2v41.3H40v-15c0-5.5,4.5-10,10-10s10,4.5,10,10v15h23.8v-41.3C83.8,999.9,50,973.6,50,973.6z\"/></g></svg></a></li><li data-famobi-fullscreen><a href=\"javascript:void(0);\" class=\"fa-menu-button-fullscreen fa-fullscreen-disabled\" tabindex=\"-1\"><svg style=\"display: none;\" class=\"fa-fullscreen-icon-disabled\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 90 90\" xml:space=\"preserve\"><g><path d=\"M64.1,34.4l10.6-10.6l-8.5-8.5L55.6,25.9L64.1,34.4L64.1,34.4z M34.4,25.9L23.8,15.3l-8.5,8.5l10.6,10.6L34.4,25.9 L34.4,25.9z M25.9,55.6L15.3,66.2l8.5,8.5l10.6-10.6L25.9,55.6L25.9,55.6z M55.6,64.1l10.6,10.6l8.5-8.5L64.1,55.6L55.6,64.1 L55.6,64.1z M30.1,9H9v21.1L30.1,9L30.1,9z M59.9,9H81v21.1L59.9,9L59.9,9z M81,59.9V81H59.9L81,59.9L81,59.9z M30.1,81H9V59.9 L30.1,81L30.1,81z\"/></g></svg><svg style=\"display: none;\" class=\"fa-fullscreen-icon-enabled\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 90 90\"><g><path d=\"M72.5,9L61.9,19.6l8.5,8.5L81,17.5L72.5,9L72.5,9z M9,17.5l10.6,10.6l8.5-8.5L17.5,9L9,17.5L9,17.5z M17.5,81l10.6-10.6 l-8.5-8.5L9,72.5L17.5,81L17.5,81z M81,72.5L70.4,61.9l-8.5,8.5L72.5,81L81,72.5L81,72.5z M13.3,34.4h21.1V13.3L13.3,34.4 L13.3,34.4z M76.7,34.4H55.6V13.3L76.7,34.4L76.7,34.4z M55.6,76.7V55.6h21.1L55.6,76.7L55.6,76.7z M13.3,55.6h21.1v21.1L13.3,55.6 L13.3,55.6z\"/></g></svg></a></li></ul><ul class=\"fg-related-games\"><li>    <a href=\"https://famobi.com\" target=\"_blank\" tabindex=\"-1\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgOSAxNzkuOCA3MiI+PHN0eWxlPi5he2ZpbGw6IzAwOTJDMzt9LmJ7ZmlsbDojRjA4MTE5O30uY3tmaWxsOiMzMzM7fTwvc3R5bGU+PHJlY3QgeD0iMjUuOCIgeT0iMTIuOSIgd2lkdGg9IjIwLjUiIGhlaWdodD0iMjAuNSIgY2xhc3M9ImEiLz48cmVjdCB4PSIzLjciIHk9IjEyLjkiIHdpZHRoPSIyMC41IiBoZWlnaHQ9IjIwLjUiIGNsYXNzPSJhIi8+PHJlY3QgeD0iMy43IiB5PSIzNSIgd2lkdGg9IjIwLjUiIGhlaWdodD0iMjAuNSIgY2xhc3M9ImIiLz48cmVjdCB4PSIzLjciIHk9IjU3LjEiIHdpZHRoPSIyMC41IiBoZWlnaHQ9IjIwLjUiIGNsYXNzPSJjIi8+PHBvbHlnb24gcG9pbnRzPSIyNS44IDM1LjEgMjUuOCA1NS41IDM4LjcgNDUuMyAiIGNsYXNzPSJiIi8+PHBhdGggZD0iTTY1LjcgNjUuNEg1OHYxMi4yaC00Ljd2LTI3aDE1LjR2NC4xSDU4djYuNWg3LjdWNjUuNHoiIGNsYXNzPSJjIi8+PHBhdGggZD0iTTgyIDc3LjZMODEuNyA3NWgtMC4yYy0wLjcgMC45LTEuNyAxLjctMyAyLjIgLTEuMyAwLjYtMi42IDAuOC0zLjkgMC44IC0xLjcgMC0zLjEtMC41LTQtMS41IC0xLTEtMS41LTIuMy0xLjUtMy45IDAtMS4xIDAuMi0yLjEgMC43LTMgMC41LTAuOSAxLjItMS42IDIuMS0yLjIgMC45LTAuNiAyLTEuMSAzLjItMS40IDEuMy0wLjMgMi43LTAuNSA0LjItMC41aDEuOHYtMC42YzAtMS4xLTAuMy0xLjgtMS0yLjMgLTAuNy0wLjUtMS44LTAuNy0zLjMtMC43IC0yIDAtMy44IDAuNC01LjQgMS4zbC0wLjktMy40YzEuOC0xLjEgNC0xLjYgNi42LTEuNiAyLjcgMCA0LjggMC42IDYuMiAxLjcgMC43IDAuNSAxLjIgMS4yIDEuNiAyIDAuNCAwLjggMC42IDEuOCAwLjYgMi45djEyLjhIODJ6TTc2LjQgNzQuNWMwLjkgMCAxLjctMC4yIDIuNi0wLjYgMC45LTAuNCAxLjYtMSAyLjEtMS43di0zLjdoLTAuOGMtMi4yIDAtMy45IDAuMy00LjkgMC45IC0xIDAuNi0xLjUgMS41LTEuNSAyLjdDNzQgNzMuNyA3NC44IDc0LjUgNzYuNCA3NC41eiIgY2xhc3M9ImMiLz48cGF0aCBkPSJNMTAzLjIgNzcuNlY2NS4yYzAtMi4yLTAuOS0zLjMtMi43LTMuMyAtMC40IDAtMC45IDAuMS0xLjQgMC4yIC0wLjUgMC4yLTEgMC40LTEuNSAwLjcgLTAuNSAwLjMtMC45IDAuNy0xLjMgMS4yIC0wLjQgMC41LTAuNyAxLTAuOCAxLjZ2MTJoLTQuNVY1OC44aDMuNWwwLjIgMi44aDAuMmMwLjUtMS4xIDEuNC0yIDIuNi0yLjYgMS4yLTAuNiAyLjQtMC44IDMuOC0wLjggMS4zIDAgMi40IDAuMyAzLjUgMC44IDEgMC41IDEuOCAxLjQgMi4zIDIuNiAwLjUtMS4xIDEuNC0yIDIuNi0yLjUgMS4yLTAuNiAyLjQtMC44IDMuOC0wLjggMC45IDAgMS43IDAuMSAyLjUgMC4zIDAuOCAwLjIgMS41IDAuNiAyIDEuMSAwLjYgMC41IDEgMS4yIDEuNCAyIDAuMyAwLjggMC41IDEuOSAwLjUgMy4xdjEyLjhoLTQuNVY2NS4yYzAtMi4yLTAuOS0zLjMtMi43LTMuMyAtMC40IDAtMC45IDAuMS0xLjQgMC4yIC0wLjUgMC4yLTEgMC40LTEuNSAwLjcgLTAuNSAwLjMtMC45IDAuNy0xLjMgMS4yIC0wLjQgMC41LTAuNyAxLTAuOCAxLjZ2MTJIMTAzLjJ6IiBjbGFzcz0iYyIvPjxwYXRoIGQ9Ik0xMzMuNSA1OC4yYzEuNyAwIDMuMSAwLjMgNC4zIDAuOCAxLjIgMC42IDIuMiAxLjMgMyAyLjIgMC44IDAuOSAxLjMgMiAxLjcgMy4yIDAuNCAxLjIgMC42IDIuNSAwLjYgMy44IDAgMS4zLTAuMiAyLjYtMC42IDMuOCAtMC40IDEuMi0wLjkgMi4yLTEuNyAzLjEgLTAuOCAwLjktMS44IDEuNi0yLjkgMi4xIC0xLjIgMC41LTIuNiAwLjgtNC4yIDAuOCAtMS43IDAtMy4xLTAuMy00LjMtMC44IC0xLjItMC41LTIuMi0xLjMtMy0yLjIgLTAuOC0wLjktMS40LTItMS44LTMuMiAtMC40LTEuMi0wLjYtMi41LTAuNi0zLjggMC0xLjMgMC4yLTIuNiAwLjYtMy44IDAuNC0xLjIgMS0yLjIgMS43LTMuMiAwLjgtMC45IDEuOC0xLjYgMy0yLjJDMTMwLjUgNTguNSAxMzEuOSA1OC4yIDEzMy41IDU4LjJ6TTEzMy42IDc0LjdjMC44IDAgMS41LTAuMiAyLjEtMC41IDAuNi0wLjMgMS4xLTAuOCAxLjUtMS40IDAuNC0wLjYgMC43LTEuMyAwLjgtMiAwLjItMC44IDAuMy0xLjYgMC4zLTIuNCAwLTAuOS0wLjEtMS43LTAuMy0yLjUgLTAuMi0wLjgtMC41LTEuNS0wLjktMi4xIC0wLjQtMC42LTAuOS0xLjEtMS41LTEuNSAtMC42LTAuNC0xLjMtMC42LTIuMi0wLjYgLTAuOCAwLTEuNSAwLjItMiAwLjUgLTAuNiAwLjMtMSAwLjgtMS40IDEuNCAtMC40IDAuNi0wLjYgMS4yLTAuOCAyIC0wLjIgMC44LTAuMyAxLjYtMC4zIDIuNCAwIDAuOSAwLjEgMS43IDAuMyAyLjUgMC4yIDAuOCAwLjUgMS41IDAuOSAyLjEgMC40IDAuNiAwLjkgMS4xIDEuNSAxLjVDMTMyLjEgNzQuNSAxMzIuOCA3NC43IDEzMy42IDc0Ljd6IiBjbGFzcz0iYyIvPjxwYXRoIGQ9Ik0xNTcuOSA3OC4xYy0xLjUgMC0yLjctMC4zLTMuNy0wLjkgLTEtMC42LTEuOC0xLjMtMi42LTIuMmgtMC4ybC0wLjMgMi42aC0zLjZWNDcuNGg0LjV2MTMuM2MwLjYtMC44IDEuNS0xLjQgMi41LTEuOCAxLTAuNCAyLjItMC43IDMuNS0wLjcgMS40IDAgMi43IDAuMyAzLjcgMC44IDEuMSAwLjUgMS45IDEuMyAyLjcgMi4yIDAuNyAwLjkgMS4yIDEuOSAxLjYgMy4xIDAuMyAxLjIgMC41IDIuNCAwLjUgMy43IDAgMS40LTAuMiAyLjgtMC42IDQgLTAuNCAxLjItMSAyLjMtMS43IDMuMiAtMC43IDAuOS0xLjcgMS42LTIuNyAyLjFDMTYwLjQgNzcuOCAxNTkuMiA3OC4xIDE1Ny45IDc4LjF6TTE1Ny4zIDc0LjdjMC44IDAgMS41LTAuMiAyLjEtMC42IDAuNi0wLjQgMS4xLTAuOSAxLjUtMS41IDAuNC0wLjYgMC43LTEuMyAwLjktMi4xIDAuMi0wLjggMC4zLTEuNiAwLjMtMi40IDAtMC44LTAuMS0xLjctMC4zLTIuNCAtMC4yLTAuOC0wLjUtMS41LTAuOS0yLjEgLTAuNC0wLjYtMS0xLjEtMS42LTEuNCAtMC42LTAuMy0xLjQtMC41LTIuMi0wLjUgLTAuOCAwLTEuNiAwLjItMi40IDAuNiAtMC44IDAuNC0xLjcgMS4xLTIuNSAyLjF2Ny44YzAuMyAwLjQgMC43IDAuOCAxLjEgMS4xczAuOSAwLjYgMS40IDAuOGMwLjUgMC4yIDEgMC40IDEuNSAwLjVTMTU2LjkgNzQuNyAxNTcuMyA3NC43eiIgY2xhc3M9ImMiLz48cGF0aCBkPSJNMTcwLjQgNTIuOGMwLTAuNCAwLjEtMC43IDAuMi0xLjEgMC4xLTAuNCAwLjQtMC43IDAuNi0xIDAuMy0wLjMgMC42LTAuNSAwLjktMC43IDAuMy0wLjIgMC43LTAuMiAxLjEtMC4yIDAuNCAwIDAuNyAwLjEgMS4xIDAuMiAwLjQgMC4yIDAuNyAwLjQgMSAwLjcgMC4zIDAuMyAwLjUgMC42IDAuNyAxIDAuMiAwLjQgMC4yIDAuNyAwLjIgMS4xIDAgMC40LTAuMSAwLjgtMC4yIDEuMSAtMC4yIDAuMy0wLjQgMC42LTAuNyAwLjkgLTAuMyAwLjMtMC42IDAuNS0xIDAuNiAtMC40IDAuMS0wLjcgMC4yLTEuMSAwLjIgLTAuOCAwLTEuNS0wLjMtMi0wLjlDMTcwLjYgNTQuMyAxNzAuNCA1My42IDE3MC40IDUyLjh6TTE3NS41IDc3LjZIMTcxVjU4LjhoNC41Vjc3LjZ6IiBjbGFzcz0iYyIvPjwvc3ZnPg==\" alt=\"Famobi\" style=\"padding-top: 16px;\"></a></li></ul><ul class=\"fg-langs\"><li class=\"fg-lang\" data-switch-lang=\"de\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_de.png\" alt=\"de\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"en\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_en.png\" alt=\"en\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"es\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_es.png\" alt=\"es\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"fr\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_fr.png\" alt=\"fr\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"it\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_it.png\" alt=\"it\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"nl\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_nl.png\" alt=\"nl\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"pl\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_pl.png\" alt=\"pl\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"pt\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_pt.png\" alt=\"pt\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"ru\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_ru.png\" alt=\"ru\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li><li class=\"fg-lang\" data-switch-lang=\"tr\"><a href=\"javascript:void(0);\" tabindex=\"-1\"><img class=\"fg-flag\" src=\"flags/flag_tr.png\" alt=\"tr\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 841.9 459\" xml:space=\"preserve\"><path d=\"M630.7,227.3\"/><path d=\"M21.5,17.9c-3.9,0-7.4,2.3-8.9,6c-1.6,3.7-0.6,7.8,2.1,10.5l399.7,399.7c1.9,1.9,4.5,2.9,6.8,2.9c2.3,0,5.1-1,6.8-2.9 L827.4,34.7c2.7-2.5,3.7-6.8,2.1-10.7c-1.6-3.7-5.1-6-8.9-6H21.5z\"/></svg></a></li></ul>",
				"adsVastXML": "<VAST xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"vast.xsd\" version=\"3.0\">\n",
				"adTagXML": "\t<Ad id=\"[index]\">\n\t\t<Wrapper>\n\t\t\t<AdSystem>AdSense/AdX</AdSystem>\n\t\t\t<VASTAdTagURI>\n\t\t\t\t<![CDATA[\n\t\t\t\t\t[vast_ad_tag_url]\n\t\t\t\t]]>\n\t\t\t</VASTAdTagURI>\n\t\t\t<Creatives/>\n\t\t\t<Extensions>\n\t\t\t\t<Extension fallback_index=\"[fallback_index]\" type=\"waterfall\"/>\n\t\t\t</Extensions>\n\t\t</Wrapper>\n\t</Ad>",
				"appOverlayHtml": "<div class=\"fg-app-overlay\">\n\t<div class=\"fg-app-teaser\">\n\t\t<div class=\"fg-app-teaser-inner\">\n\t\t\t<a href=\"https://play.famobi.com/onet-connect-classic.app/A1000-1\" target=\"_blank\" class=\"fg-app-link fg-app-teaser-icon\" tabindex=\"-1\"><img src=\"Teaser.jpg\" alt=\"\"></a>\n\t\t\t<div class=\"fg-app-teaser-meta\">\n\t\t\t\t<div class=\"titleHolder\">\n\t\t\t\t\t<p><a href=\"https://play.famobi.com/onet-connect-classic.app/A1000-1\" target=\"_blank\" class=\"fg-app-link\" data-i18n=\"api.install_app_text\" tabindex=\"-1\"></a></p>\n\n\t\t\t\t\t<ul class=\"fg-app-teaser-rating\"><li></li><li></li><li></li><li></li></ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ctaHolder\">\n\t\t\t\t\t<div class=\"cta\">\n\t\t\t\t\t\t<a href=\"https://play.famobi.com/onet-connect-classic.app/A1000-1\" class=\"fg-app-link\" target=\"_blank\" tabindex=\"-1\"><em class=\"fg-app-teaser-storeIcon\"></em><span data-i18n=\"api.install_app_cta\"></span></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"fg-app-teaser-close\" tabindex=\"-1\"></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"
			}
			, _fgq, '');
	};
	firstJS.parentNode.insertBefore(fgJS, firstJS);
})(document, 'js/gameapi.js');
