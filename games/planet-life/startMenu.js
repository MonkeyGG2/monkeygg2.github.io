function goStartMenu() {

	if (hasBridge() && state.tGamesCompleted < 1) {
		goFirstStartMenu();
	} else {
		goStartChapter1();
	}

}

function goFirstStartMenu() {
	var call = BridgeCommander.call("loadProducts");
	call.then(function(value) {
		var json = JSON.parse(value);

		var chapter2IAP = json.filter(p => p.identifier === "broccoliWorldUnlock")[0];
		var chapter3IAP = json.filter(p => p.identifier === "chapter3Unlock")[0];
		var chapter2and3IAP = json.filter(p => p.identifier === "unlockChapter2and3")[0];

		changeScene(
			"</br></br>Welcome to <span style='color:#16fa05'>PLANET LIFE!</span></br></br>Let's get started",
			"PlanetLifeTitle",
			"goStartMenu"
		);
		createMenuButton(
			"<span style='color:#16fa05'>Chapter 1</span>",
			"chapter1",
			"- More than 2 hours free of gameplay</br>- New friends to meet</br>- Dungeons to explore</br>- An endless dungeon",
			goStartChapter1,
			"planet1Button",
			"Play (free)"
		);

		createChapter2Button(chapter2IAP);
		createChapter3Button(chapter3IAP);
		createBothChaptersButton(chapter2and3IAP);
		createRestorePurchases(goFirstStartMenu);

		createGoButton("Tell me more about this game","bobBottle",goExplainGame);
	});
}

function createChapter2Button(chapter2IAP) {
	var buttonText = "Error";
	if (chapter2IAP) {
		buttonText = !state.purchasedChapter2 ? "Unlock (" + chapter2IAP.localPrice + ")" : "Play (Purchased)";
	}

	createMenuButton(
		"<span style='color:#ffea00'>Chapter 2</span>",
		"chapter2",
		"- More than 4 hours of new gameplay</br>- More dungeons</br>- More endless dungeons</br>- New friends and characters to meet</br>- A vicious quiz",
		buyChapter2,
		"planet2Button",
		buttonText
	);
}

function createChapter3Button(chapter3IAP) {
	var buttonText = "Error";
	if (chapter3IAP) {
		buttonText = !state.purchasedChapter3 ? "Unlock (" + chapter3IAP.localPrice + ")" : "Play (Purchased)";	
	}

	createMenuButton(
		"<span style='color:#00fff7'>Chapter 3</span>",
		"chapter3",
		"- More than 8 hours of new gameplay</br>- Deckbuilding!</br>- A new kind of dungeon</br>- A lot more friends</br>- New characters to meet</br>- Boss fights</br>- A proper ending to the space adventure",
		buyChapter3,
		"planet3Button",
		buttonText
	);
}

function createBothChaptersButton(chapter2and3IAP) {
	var buttonText = "Error";
	if (chapter2and3IAP) {
		if (state.purchasedChapter2 && state.purchasedChapter3) {
			buttonText = "Play (Purchased)"
		} else {
			buttonText = "Unlock (" + chapter2and3IAP.localPrice + ")";
		}	
	}

	createMenuButton(
		"Chapter <span style='color:#ffea00'>2</span> + <span style='color:#00fff7'>3</span>",
		"chapterAll",
		"- More than 12 hours of new gameplay</br>- Everything from chapter 2 & 3",
		buyBothChapters,
		"planetAllButton",
		buttonText
	);
}

function createRestorePurchases(onRestore) {
	createGoButton("Restore purchases","gold",function(){
		var call = BridgeCommander.call('restorePurchases');
		call.then(function(productIds) {
			var hasChapter2 = productIds.indexOf('broccoliWorldUnlock') !== -1;
			var hasChapter3 = productIds.indexOf('chapter3Unlock') !== -1;
			var hasBothChapters = productIds.indexOf('unlockChapter2and3') !== -1;
			updateState('purchasedChapter2', hasChapter2 || hasBothChapters);
			updateState('purchasedChapter3', hasChapter3 || hasBothChapters);
			onRestore();
		});
	});
}

function goExplainGame() {
	changeScene(
		"This is Bob the Bottle. You will meet him later in the game.</br></br>He explains to you that Planet Life is consisting of 3 chapters.</br> Chapter 1 is a <span style='color:#16fa05'>free demo.</span> After that you will have to pay to unlock the next two chapters.</br> But <span style='color:#ffea00'>Chapter 2</span> is even bigger than Chapter 1 and quite exciting. And then <span style='color:#00fff7'>Chapter 3</span> is the biggest of them all, and where things really starts to heat up",
		"bobBottle"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame2);
}

function goExplainGame2() {
	playSound(soundEffect.worm);
	changeScene(
		"In Planet Life you are on an journey through the universe, experiencing all sorts of crazy adventures",
		"appleWormhole"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame3);
}

function goExplainGame3() {
	playSound(soundEffect.hi);
	changeScene(
		"You will get a lot of new friends along the way",
		"bananaMan"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame4);
}

function goExplainGame4() {
	playSound(soundEffect.stanley);
	changeScene(
		"Even meet the stars of the universe",
		"stanley"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame5);
}

function goExplainGame5() {
	changeScene(
		"You will need to gather a lot of resources to become a better planet",
		"woodSynthesizer"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame6);
}

function goExplainGame6() {
	playSound(soundEffect.beating);
	changeScene(
		"And you need to be the best planet you can be, if you ever hope to beat all of the jerks infesting the dungeons inside yourself",
		"dungeonBeating"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame7);
}

function goExplainGame7() {
	changeScene(
		"The universe is a crazy place, full of unexptected things",
		"universe"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame8);
}

function goExplainGame8() {
	changeScene(
		"Like this broccoli..",
		"spaceBroccoli"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame9);
}

function goExplainGame9() {
	changeScene(
		"With a whole world on it!",
		"spaceBroccoliClose"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame10);
}

function goExplainGame10() {
	changeScene(
		"Or this intergalactic mailman..",
		"intergalacticMailman"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame11);
}

function goExplainGame11() {
	playSound(soundEffect.cheer);
	changeScene(
		"Breakdancing!",
		"intergalacticMailmanBreakdance"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame12);
}

function goExplainGame12() {
	changeScene(
		"There are other planets to befriend",
		"beanie"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame13);
}

function goExplainGame13() {
	changeScene(
		"And even this cup of coffee..",
		"coffeeCup"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame14);
}

function goExplainGame14() {
	playSound(soundEffect.shock);
	changeScene(
		"With somebody's eye in it!",
		"coffeeCupEye"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("Tell me more","talk",goExplainGame15);
}

function goExplainGame15() {
	changeScene(
		"Now go play the game!",
		"bobBottle"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu);
	createGoButton("OK!","talk",goStartMenu);
}

function goStartChapter1() {
	if (state.impatientMode) {
		delay = 1;
	} else {
		delay = 10;
	}
	skipAllowed = true;
	toggleResIcons();
	goRoot();
}

function goStartMenu2() {
	var call = BridgeCommander.call("loadProducts");
	call.then(function(value) {
		var json = JSON.parse(value);

		var chapter2IAP = json.filter(p => p.identifier === "broccoliWorldUnlock")[0];
		var chapter3IAP = json.filter(p => p.identifier === "chapter3Unlock")[0];
		var chapter2and3IAP = json.filter(p => p.identifier === "unlockChapter2and3")[0];

		changeScene(
			"",
			"PlanetLifeTitle",
			"goStartMenu"
		);

		createIconButton(
			"Chapter 1 (completed)",
			"images/handling/planet.gif",
			"chapter23but",
			"",
			"#9e9e9e",
			true,
			"buttons",
			stardustExchange,
			0
		);

		createChapter2Button(chapter2IAP);
		createChapter3Button(chapter3IAP);
		createBothChaptersButton(chapter2and3IAP);
		createRestorePurchases(goStartMenu2);

		createGoButton("What do I get for my money?","talk",goTeaseGame);
		createGoButton("Go back to free solar system","planet",goRoot);
	});
}

function goTeaseGame() {
	changeScene(
		"Bob the Bottle is ready to show you what is in store for you",
		"bobBottle"
	);
	createGoButton("Back","PlanetLifeTitle",goStartMenu2);
	createGoButton("Show me Bob","talk",goTeaseGame2);
}

function goTeaseGame2() {
	changeScene(
		"Here are some things you will see in <span style='color:#ffea00'>Chapter 2</span>",
		"bobBottle"
	);
	createGoButton("Oh yeah?","talk",goNotPay4);
}

function goNotPay4() {
	playSound(soundEffect.vomit);
	changeScene(
		"A vomitting purple monster",
		"lochJuiceVomit"
	);
	createGoButton("Really?","talk",goNotPay5);
}

function goNotPay5() {
	playSound(soundEffect.burger);
	changeScene(
		"Something crazy happening to Burger",
		"burger"
	);
	setTimeout(function() {
		changeScene(
			"Something crazy happening to Burger",
			"burg3r"
		);
	},1300);
	setTimeout(function() {
		changeScene(
			"Something crazy happening to Burger",
			"burger"
		);
		createGoButton("But what is it!?","talk",goTeaseDungeons);
	},1500);
}

function goTeaseDungeons() {
	playSound(soundEffect.beating);
	changeScene(
		"More dungeons!",
		"cocoDungeonBeating"
	);
	createGoButton("!","talk",goTeaseDungeons2);
}

function goTeaseDungeons2() {
	playSound(soundEffect.ghost);
	changeScene(
		"GHOSTS!",
		"ghost"
	);
	createGoButton("!!!","talk",goNotPay6);
}

function goNotPay6() {
	changeScene(
		"And...",
		"invisibleImg"
	);
	createGoButton("And?","talk",goNotPay7);
}

function goNotPay7() {
	changeScene(
		"THIS PENGUIN!!!",
		"cocoPenguin"
	);
	createGoButton("What, REALLY!?","talk",goTeaseLastChapter);
}

function goTeaseLastChapter() {
	changeScene(
		"And that's just a few of the things you'll see in <span style='color:#ffea00'>Chapter 2.</span>",
		"bobBottle"
	);
	createGoButton("What about Chapter 3?","talk",goTeaseLastChapter2);
}

function goTeaseLastChapter2() {
	changeScene(
		"<span style='color:#00fff7'>Chapter 3</span> is huge!",
		"bobBottle"
	);
	createGoButton("Oh yeah?","talk",goTeaseLastChapter3);
}

function goTeaseLastChapter3() {
	changeScene(
		"You'll get to sneak through dungeons",
		"catPawsCalvin"
	);
	createGoButton("Uuh","talk",goTeaseLastChapter4);
}

function goTeaseLastChapter4() {
	changeScene(
		"Meet strange new Dereks",
		"derekFootball"
	);
	createGoButton("New Dereks?","talk",goTeaseLastChapter5);
}

function goTeaseLastChapter5() {
	changeScene(
		"Fight gigantic bosses!",
		"bentBoss"
	);
	createGoButton("Is that a moon?","talk",goTeaseLastChapter6);
}

function goTeaseLastChapter6() {
	changeScene(
		"Buy canned jerks from this fine fellow",
		"jerkBartender"
	);
	createGoButton("Jerks?","talk",goTeaseLastChapter7);
}

function goTeaseLastChapter7() {
	changeScene(
		"Go to the casino",
		"casino"
	);
	createGoButton("Gambling!","talk",goTeaseLastChapter8);
}

function goTeaseLastChapter8() {
	changeScene(
		"And even enter somebody's imagination",
		"beanieImagination"
	);
	createGoButton("Really?","talk",goTeaseLastChapter9);
}

function goTeaseLastChapter9() {
	changeScene(
		"And that's only just a few of the things that are going to happen.</br>But I recommend that you go check it out yourself",
		"bobBottle"
	);
	if (state.broccoliChapter) {
		createGoButton("Wow","talk",goStartMenu3);
	} else {
		createGoButton("Wow","talk",goStartMenu2);
	}
}


function goStartMenu3() {
	var call = BridgeCommander.call("loadProducts");
	call.then(function(value) {
		var json = JSON.parse(value);

		var chapter3IAP = json.filter(p => p.identifier === "chapter3Unlock")[0];

		changeScene(
			"",
			"PlanetLifeTitle",
			"goStartMenu"
		);
		createIconButton(
			"Chapter 1 (completed)",
			"images/handling/planet.gif",
			"chapter23but",
			"",
			"#9e9e9e",
			true,
			"buttons",
			stardustExchange,
			0
		);
		createIconButton(
			"Chapter 2 (completed)",
			"images/handling/spaceBroccoli.gif",
			"chapter23242but",
			"",
			"#9e9e9e",
			true,
			"buttons",
			stardustExchange,
			0
		);

		createChapter3Button(chapter3IAP);
		createRestorePurchases(goStartMenu3);

		createGoButton("What do I get for my money?","talk",goTeaseLastChapter2);
		createGoButton("Go back to the Broccoli Empire","spaceBroccoli",goRoot);
	});
}


function goThanksForPaying(nextFunction) {
	changeScene(
		"Wow!</br>Thanks a bunch for your support.</br>You are an amazing person, and everyone is happy to have you around. Especially Derek. He wouldn't have a clue what to do without you really",
		"bobBottle"
	);
	createGoButton("Yay!","talk",nextFunction);
}

function goProblemPaying() {
	changeScene(
		"Oh no!</br>Looks like there was a problem with paying for the chapter.</br>Get in touch with christian@northplay.co for help",
		"bobBottle"
	);
	if (state.burgulonCreated) {
		createGoButton("Oh no","talk",goStartMenu3);
	} else {
		createGoButton("Oh no","talk",goStartMenu2);
	}

}
