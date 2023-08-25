
var environment1 = "On your surface there are beautiful lush forests, and vast oceans. ";

var H_Burger = "Burger is chirping through the forests ";
var robotInh = "";

var inhabitants_none = "Unfortunately there is no life to enjoy the paradise ";

var H_None = "";

var curEnvironment = environment1;
var curInhabitants = inhabitants_none;

function checkWhat() {

	burgerCheatCount = 0;

	changeBackground("BG_Planet");
	place = "surface";
	clearButtons();
	curArt = "newSurface";
	changeArt(curArt);

	if (state.pickedRobot) {
		robotInh = H_Burger;
	}
	if (!state.pickedRobot) {
		newHandling(curEnvironment + curInhabitants);
	} else {
		newHandling(curEnvironment + robotInh);
	}
	createGoButton("Space","planet",goRoot);
	if (state.tTerrariumFound) {
		createGoButton("Time Terrarium","timeTerrarium",goTimeTerrarium);
	}
	if (state.derekDefrosted) {
		createGoButton("Derek","derek",goDerekHub);
	}
	if (state.dungeonFound) {
		createGoButton("Dungeons","dungeon",goPickDungeon);
	}
	if (state.ddsPrice[4]) {
		createGoButton("Derek's Dungeon School","dungeonSchool",goDDS);
	}
	if (state.pickedRobot) {
		createGoButton("Talk to Burger","burger",talkBurger);
	}
	if (!state.workshopPrice[4]) {
		if (state.pickedRobot) {
			createBuildButton("Workshop","workshop","Shack you need to build before you can build everything else",buildWorkshop,"workshopBut","Build",state.workshopPrice)
			if (!affordCheck(state.slotmachinePrice)) {
				document.getElementById("workshopBut").disabled = true;
			}		
		}
	} else {
		if (!state.workshopDemolished) {
			createGoButton("Workshop","workshop",goWorkshop);
		}
	}
	if (state.slotmachinePrice[4]) {
		createGoButton("Slot machine","slotmachine",slotMachine);
	}
	if (state.dungeonMasterSummoned) {
		createGoButton("Dungeon Master","dungeonMaster",goDungeonMaster);
	}
	if (state.friendHousePrice[4]) {
		createGoButton("Friend house","crawlerHouse",goFriendHouse);
	}

	//createProduct("Stor fed lol");

}

function checkWhere() {
	checkSysStartolar();
}

function goContinue() {
	checkAncientState();
	if (hasBridge()) {
		document.getElementById('bWrapper').style.minHeight = "110vh";
	}
	if (state.didPlayOriginal) {
		changeScene("","burger","continue");
		createButton("Continue",() => {
			audioSettings.meiThresholdComplete = true;
			welcomeBack();
		});
	} else if (state.burgulonTime) {
		changeScene("","burgulon","continue");
		createButton("Continue",() => {
			audioSettings.meiThresholdComplete = true;
			goNewGalaxy()
		});
	} else {
		changeScene("","planet","continue");
		createButton("Continue",() => {
			audioSettings.meiThresholdComplete = true;
			goRoot()
		});
	}

	//Impatient mode

	if (state.impatientMode) {
		delay = 1;
		buttonDelay = 10;
	} else {
		delay = 10;
		buttonDelay = 40;
	}

	//Merging to chapter 3
	if (state.productStates.length < allProductStates.length) {
		console.log("state.productStates was old and short. Now it's going to get fixed");
		var oldProductStates = state.productStates;
		var newProductStates = allProductStates;
		for (var i = 0; i < oldProductStates.length; i++) {
			newProductStates[i] = oldProductStates[i];
		}
		updateState('productStates', newProductStates);
	}
	if (state.bDerekShipStates.length < derekShipStates.length) {
		console.log("Filling up the derekShipStates array");
		state.bDerekShipStates = derekShipStates;
	}

	//Remove used jerks and beans
	removeUsedBeans();
	// cleanUpRemovedJerks();

	// Derek items
	calculateDerekStats();

}

function removeUsedBeans() {
	// Check for used beans
	var mb = state.bMyBeans;
	for (var i = 0; i < mb.length; i++) {
		if (mb[i].used) {
			console.log("Removed bean " + i);
			mb.splice(i,1);
			i--;
		}
	}
	updateState('bMyBeans', mb);
}

function cleanUpRemovedJerks() {
	// Check for removed jerks
	var mb = state.jerkPile;
	for (var i = 0; i < mb.length; i++) {
		if (mb[i].removed) {
			console.log("Removed jerk " + i);
			mb.splice(i,1);
			i--;
		}
	}
	updateState('jerkPile', mb);
}


function goRoot() {
	audioSettings.shouldPlayMusic = true;
	playMusic();
	changeBackground("BG_Universe");
	changeScene(H_Handling1,"planet","root");
	if (!state.broccoliChapter) {
		createGoButton("Your surface","newSurface",checkWhat);
		if (state.shopFound) {
			createGoButton("Shop","space_ben",goSpaceBen);
		}
		if (state.planetudFound) {
			createGoButton("Stupid looking planet","planetud",goPlanetud);
		}
		if (state.wormFound) {
			if (state.wormOut) {
				createGoButton("Worm god","appleWorm",goAppleWorm);
			} else {
				createGoButton("Apple","apple",apple2);
			}
		}
		if (!state.pickedRobot) {
			createGoButton("Explore","binoculars",exploreAsteroid);
		} else {
			createGoButton("Asteroid","asteroid",goAsteroid);
		}
		if (state.workshopPrice[4] && !state.shopFound) {
			createGoButton("Explore","binoculars",findShop);
		}
	} else {
		createGoButton("Your surface","newSurface",checkWhat);
		createGoButton("Broccoli Empire","spaceBroccoli",goBroccoli);
		if (state.cocoDungeonsFound) {
			createGoButton("Space Ben","space_ben",goSpaceBen);
		}
		if (state.ghostTradeFound) {
			createGoButton("Intergalactic Ghost Exchange","ghostTrade",goGhostTrade);
		}
		if (state.planetudFoundAgain) {
			createGoButton("Stupid looking planet","planetud",goPlanetud);
		}
		if (state.remouladinFound) {
			createGoButton("Remouladin","apple",goRemouladin);
		}
		if (state.spaceDungeon) {
			if (!state.derekulusX) {
				createGoButton("Strange Planet","spaceDungeon",goSpaceDungeon);
			} else {
				createGoButton("Derekulus X","spaceDungeon",goSpaceDungeon);
			}
		}
	}
	if (state.burgulonTime) {
		goBurgulonSurface();
	}
	// if (!state.imgaOver) {
	// 	goNominated();
	// }
}


function talkBurger() {
	playSound(soundEffect.burger);
	var h = "Burger is happy to see you. It tells you that it can in fact be quite productive.\n\ What do you want burger to do?";
	if (state.burgerDoing == "wood") {
		h += "<br/>Right now Burger is chopping <span style='color:#ff0000'>" + state.burgerWoodPS + " wood/sec</span>"
	}
	if (state.burgerDoing == "gold") {
		var gChance = state.goldChance * 100;
		h += "<br/>Right now Burger has a <span style='color:#ff0000'>" + gChance + "% chance</span> of mining <span style='color:#ff0000'>" + state.burgerGoldPS + " gold/sec</span>"
	}
	changeScene(
		h,
		"burger",
		"talk_burger"
	);
	createGoButton("Back","newSurface",checkWhat);
	if (!state.cocoPopsAsteroid) {
		createGoButton("Hear secret","talk",burgerSecret);
	}
	if (state.workshopPrice[4] && !state.dungeonFound) {
		createGoButton("Hear news","talk",burgerNews);
	}
	if (state.dungeonFound && !state.burgerGift) {
		createGoButton("Hear good news","talk",burgerGift);
	}
	if (state.burgerDoing != "wood") {
		createGoButton("Chop wood </br>(" + state.burgerWoodPS + " wood/sec)","axe",burgerDoWood);
	}
	if (state.burgerDoing != "gold") {
		createGoButton("Dig for gold </br>(" + (state.goldChance * 100) + "% chance/sec)","drill",burgerDoGold);
	}
	if (hasBridge() && state.dungeons[0].completed && !state.burgerReview) {
		createGoButton("Hear request","talk",burgerReview);
	}
	if (state.burgerLost) {
		changeScene(
			"Burg3r is happy to see you. But you don't care about that. You just want your Burger back! Maybe he is somewhere on that giant broccoli",
			"burg3r",
			"talkBurger"
		);
		createGoButton("Back","newSurface",checkWhat);
	}
	if (state.broccoliChapter && !state.burgerLost) {
		changeScene("Burg3r is happy to see you.. Wait what? This is not Burger! <br/>Where could he be? You have a very bad feeling about this, and that feeling eventually gives you a planetary headache","burg3r","goBurger");
		updateState('burgerLost',true);
		createGoButton("Back","newSurface",checkWhat);
	}
}

var H_Burger3 = "Burger is chirping happily as it is getting to work";

function burgerDoWood() {
	playSound(soundEffect.burger);
	changeScene(H_Burger3,"burger","talk_burger_wood");
	if (state.burgerDoing == "gold") {
		updateState('goldPS', state.goldPS - state.burgerGoldPS);
	}
	updateState('woodPS', state.woodPS + state.burgerWoodPS);
	updateState('burgerDoing', "wood");
	createGoButton("Ok!","burger",talkBurger);
	burgerCheckCheat();
}

function burgerDoGold() {
	playSound(soundEffect.burger);
	changeScene(H_Burger3,"burger","talk_burger_gold");
	if (state.burgerDoing == "wood") {
		updateState('woodPS', state.woodPS - state.burgerWoodPS);
	}
	updateState('goldPS', state.goldPS + state.burgerGoldPS);
	updateState('burgerDoing', "gold");
	createGoButton("Ok!","burger",talkBurger);
	if (state.tGamesCompleted < 1) {
		burgerCheckCheat();
	}
}

function burgerCheckCheat() {
	burgerCheatCount++;
	if (burgerCheatCount == 6 && state.tGamesCompleted < 1) {
		burgerCheat = true;
		changeScene("Burger is chirping something about The Fartening, and The Settings Menu","burg3r","burgerCheckCheat");
		setTimeout(function() {
			changeScene("Burger is chirping something about The Fartening, and The Settings Menu","burger","burgerCheckCheat");
			createGoButton("Yes?","spaceBroccoli",talkBurger);
		},200);
	}
}

function burgerSecret() {
	playSound(soundEffect.burger);
	var H_Burger4 = "Psst! Burger is telling you a secret.\n\
 The asteroid is actually a giant Coco Pops. What a revelation!";
	changeScene(H_Burger4,"burger","talk_burger_secret");
	updateState('cocoPopsAsteroid', true);
	createGoButton("Ok!","asteroid",checkWhat);
}

function burgerNews() {
	playSound(soundEffect.burger);
	changeScene("Burger tells you that it has found a strange valley while working. It seems to be riddled with ancient dungeon entrances.. ","burger","talk_burger_dungeon");
	createGoButton("Show me","dungeon",goPickDungeon);
}

function burgerGift() {
	changeScene("Burger seems in a particularly good mood today. It shows you a handfuld of some glittery stuff.</br>It's STARDUST!</br>Burger tells you that it won it on the slot machine. You should give it a try!","burger","burger");
	createGoButton("Get the stardust!","stardust",burgerGetStardust);
}

function burgerGetStardust() {
	changeScene("Ka-ching!","stardust","burger");
	updateState('stardust',state.stardust + 5);
	updateState('burgerGift',true);
	setTimeout(function() {
		talkBurger();
	},1000);
}

function burgerReview() {
	changeScene(
		"Burger is beating around the bush. You tell him to stop beating your bushes, and get to the point instead",
		"burger",
		"burgerReview"
	);
	createGoButton("What's up Burger?","talk",burgerReview2);
}

function burgerReview2() {
	changeScene(
		"Burger finally gets to the point.</br>He notices that you had a great time beating up those jerks in the dungeon before, and he asks you if you could spare a moment to give the game a rating.</br>Maybe even leave a review if you feel super special today",
		"burger"
	);
	createGoButton("For sure!","planet",burgerGoReview);
	createGoButton("Maybe later","burger",talkBurger);
	createGoButton("Nope","talk",burgerDontReview);
}

function burgerDontReview() {
	updateState('burgerReview', true);
	talkBurger();
}

function burgerGoReview() {
	updateState('burgerReview', true);
	goReviewGame();
}

function slotMachine() {
	var H_SlotMachine = "Try your luck on the slot machine. You might win some gold. You might even win some stardust";
	changeScene(H_SlotMachine,"slotmachine","slotmachine");
	createGoButton("Back","newSurface",checkWhat);
	createSmallBuildButton("Play the slots</br>(" + playSmallPrice[1] + " gold)","smallSoftPresent","playSmallBut",playSlots,0);
	createSmallBuildButton("Play the slots</br>(" + playMediumPrice[1] + " gold)","mediumHardPresent","playMediumBut",playSlots,1);
	createSmallBuildButton("Play the slots</br>(" + playBigPrice[1] + " gold)","bigMassivePresent","playBigBut",playSlots,2);
}

function nitte() {
	setTimeout(function() {
		slotMachine();
	},1100);
}

function goWorkshop() {
	var H_Workshop = "In this workshop you can build anything! As long as it's one of the few options below";
	changeBackground("BG_Workshop");
	changeScene(H_Workshop,"workshop","workshop");
	createGoButton("Back","newSurface",checkWhat);
	var worthless = true;
	if (!state.broccoliChapter) {
		worthless = false;
		var H_AxeH01 = "Nimble axe";
		var H_AxeH02 = "Average axe";
		var H_AxeH03 = "Slightly luxurious axe";
		var H_AxeH04 = "Very luxurious axe";
		var H_AxeH05 = "Axe of all trades";
		var H_AxeT01 = "Burger will chop " + axe01[4] + " wood/sec";
		var H_AxeT02 = "Burger will chop " + axe02[4] + " wood/sec";
		var H_AxeT03 = "Burger will chop " + axe03[4] + " wood/sec";
		var H_AxeT04 = "Burger will chop " + axe04[4] + " wood/sec";
		var H_AxeT05 = "Burger will chop " + axe05[4] + " wood/sec";
		var H_AxeHeadlines = [H_AxeH01,H_AxeH02,H_AxeH03,H_AxeH04,H_AxeH05];
		var H_AxeTexts = [H_AxeT01,H_AxeT02,H_AxeT03,H_AxeT04,H_AxeT05];
		if (state.axeNr < axes.length) {
			createBuildButton(H_AxeHeadlines[state.axeNr],"axe",H_AxeTexts[state.axeNr],upgradeAxe,"upgradeAxeBut","Upgrade",axes[state.axeNr]);
		}
		var H_DrillH01 = "Fragile gold drill";
		var H_DrillH02 = "Good enough gold drill";
		var H_DrillH03 = "Pompous gold drill";
		var H_DrillT01 = "Burger will have a " + (drill01[5] * 100) + "% chance of mining 1 gold/sec";
		var H_DrillT02 = "Burger will have a " + (drill02[5] * 100) + "% chance of mining 1 gold/sec";
		var H_DrillT03 = "Burger will have a " + (drill03[5] * 100) + "% chance of mining 1 gold/sec";
		var H_DrillHeadlines = [H_DrillH01,H_DrillH02,H_DrillH03];
		var H_DrillTexts = [H_DrillT01,H_DrillT02,H_DrillT03];
		if (state.drillNr < drills.length) {
			createBuildButton(H_DrillHeadlines[state.drillNr],"drill",H_DrillTexts[state.drillNr],upgradeDrill,"upgradeDrillBut","Upgrade",drills[state.drillNr]);
		}
	}
	if (!state.slotmachinePrice[4]) {
		worthless = false;
		createBuildButton("Slot machine","slotmachine","Don't know what to use your gold for? Now you can use your gold to win even more gold! If you are lucky you might even win some stardust",buildSlotMachine,"slotmachineBut","Build",state.slotmachinePrice);
	}
	if (!state.ddsPrice[4] && state.derekDefrosted) {
		worthless = false;
		createProduct("Derek's Dungeon School");
	}
	if (!state.friendHousePrice[4]) {
		worthless = false;
		createBuildButton("House for friends","crawlerHouse","If you want anybody living on you, they need some place to live",buildFriendHouse,"buildFriendHouseBut","Build",state.friendHousePrice);
	}
	if (state.dungeonsCompleted) {
		createProduct("Dungeon Master");
	}
	if (!state.dungeonMasterSummoned) {
		worthless = false;
	}
	if (worthless) {
		createGoButton("Worthless workshop?","talk",goUselessWorkshop);
	}
}

function goUselessWorkshop() {
	if (censoredWords) {
		changeScene(
			"The wonderful workshop that once brought so much joy to your life, now feels old and empty. This was where your journey started, and all your dreams came true.. Now it's just a worthless pile of garbage.<br/><br/>Do you want to demolish it?",
			"workshop",
			"goUselessWorkshop"
		);
	} else {
		changeScene(
			"The wonderful workshop that once brought so much joy to your life, now feels old and empty. This was where your journey started, and all your dreams came true.. Now it's just a worthless pile of crap.<br/><br/>Do you want to demolish it?",
			"workshop",
			"goUselessWorkshop"
		);		
	}
	createGoButton("No","workshop",goWorkshop);
	createGoButton("Demolish workshop","explosion",goDemolishWorkshop);
}

function goDemolishWorkshop() {
	changeScene(
		"You summon a minor local earthquake, and the workshop explodes violently!",
		"workshop",
		"goDemolishWorkshop"
	);
	setTimeout(function() {
		playSound(soundEffect.explosion);
		changeScene(
			"Kapow!!",
			"explosion",
			"goDemolishWorkshop"
		);
	},5000);
	setTimeout(function() {
		updateState('ghosts', state.ghosts + 1);
		updateState('workshopDemolished', true);
		changeScene(
			"WHOA! The soul of the workshop oozes in your face. A free ghost!",
			"ghost",
			"goDemolishWorkshop"
		);
		createGoButton("Rest in peace!!!","ghost",goRoot);
	},5500);
}

function goSpaceBen() {
	var h = "Space Ben is sitting in his space shop.. Looking at you. Do you want to buy something? Do you?";
	if (state.ghosts > 0) {
		h += " You have <span style='color:#38b200'>" + state.ghosts + "</span> ghosts";
	}
	changeBackground("BG_Universe");
	changeScene(h,"space_ben","spaceBen");
	createGoButton("Back","planet",goRoot);
	// if (state.derekDefrosted) {
	// 	createGoButton("DEREK!","derek",goDerekHub);
	// }
	if (state.villaPortal) {
		createGoButton("Villa","villaPortal",goVilla);
	}
	if (state.derekDefrosted) {
		state.shopPrices[0][5] = true;
	}
	if (state.shopPrices[0][5]) {
		createBuildButton("Health potion","healthPotion","It heals like <span style='color:#ff0000'>" + state.healthPotionHeal + " health</span>.. You have <span style='color:#ff0000'>" + state.healthPotions + "/" + state.healthPotionCapacity + " potions</span>",buyHealthPotion,"buyHealthPotionBut","Buy",state.shopPrices[0]);
	}
	if (state.derekDefrosted) {
		createGoButton("Buy Chests","chest",goBuyChests);
	}
	if (state.derekDefrosted) {
		createProduct("Potion Research");
	}
	if (state.starmapNr < 3) {
		createBuildButton("Starmap","starmap","Somebody drew with space ink on this old piece of paper.. It's supposed to show the way to someplace cool",buyStarmap,"buyStarmapBut","Buy",state.shopPrices[4][state.starmapNr]);
	}
	if (state.shopPrices[1][5]) {
		createBuildButton("Red USB stick","USB_red","Perhaps it's full of secrets",buyRedUSB,"buyRedUsbBut","Buy",state.shopPrices[1]);
	}
	if (state.shopPrices[2][5]) {
		createBuildButton("Green USB stick","USB_green","Perhaps it's full of secrets",buyGreenUSB,"buyGreenUsbBut","Buy",state.shopPrices[2]);
	}
	if (state.shopPrices[3][5]) {
		createBuildButton("Orange USB stick","USB_orange","Perhaps it's full of secrets",buyOrangeUSB,"buyOrangeUsbBut","Buy",state.shopPrices[3]);
	}
	if (state.broccoliChapter) {
		if (state.villaKey && !state.villaPortal) {
			createProduct("Villa Portal");
		}
		if (state.curGhostID < allGhostIDs.length + 1) {
			createSingleProduct(allGhostIDs[state.curGhostID]);
		}
		var allAnswersBought = true;
		for (var i = 0; i < allAnswers.length; i++) {
			if (state.answerStates[i] == false) {
				allAnswersBought = false;
			}
		}
		if (state.villaKey && !allAnswersBought) {
			createGoButton("Buy answers","answerCard",goSpaceBenAnswers);
		}
	}
}

function goBuyChests() {
	changeScene(
		"Where did Space Ben get all these chests from? You probably shouldn't ask",
		"chest",
		"goBuyChests"
	);
	createGoButton("Back","space_ben",goSpaceBen);
	createSingleProduct("<span style='color:#8a8a8a'>Scruffy Chest</span> (10 stardust)");
	createSingleProduct("<span style='color:#0066ff'>Decent Chest</span> (80 stardust)");
	createSingleProduct("<span style='color:#ffa200'>Excellent Chest</span> (200 stardust)");
	createSingleProduct("<span style='color:#ff29ff'>Crazy Chest</span> (800 stardust)");	
}

function goSpaceBenAnswers() {
	changeScene(
		"Space Ben has the answers you seek. So buy them! <br/>An answer costs <span style='color:#ff0000'>" + state.answerPrice + "</span> ghost(s). You have <span style='color:#38b200'>" + state.ghosts + "</span> ghost(s).",
		"space_ben",
		"goSpaceBenAnswers"
	);
	createGoButton("Back","space_ben",goSpaceBen);
	for (var i = 0; i < allAnswers.length; i++) {
		for (var j = 0; j < allSingleProducts.length; j++) {
			if (allAnswers[i].text == allSingleProducts[j].ID) {
				allSingleProducts[j].price = state.answerPrice;
			}
		}
		if (!state.answerStates[i]) {
			createSingleProduct(allAnswers[i].text);
		}
	}
}

function findShop() {
	changeScene("You see a small object in the distance. Is it a flying saucer? With a tiny gnome-like guy sitting in it? Smiling?","space_ben");
	createGoButton("Check it out","space_ben",goSpaceBen);
	updateState('shopFound', true);
}


function goApple() {
	changeScene("It seems to be an apple.. There's something special about it. There's also a hole in it","apple","apple");
	updateState('wormFound',true);
	createGoButton("Back","planet",goRoot);
	createGoButton("Knock on the apple","apple",apple2);
}

function apple2() {
	changeScene("Go away mortal! I'm not interested in meeting you. Not unless you are popular","apple","apple");
	if (getNumberOfFriends() >= 3) {
		createGoButton("I'm pretty popular (" + getNumberOfFriends() + " friends)","crawlerHouse",goRevealWorm);
	} else {
		createGoButton("I'm not that popular (" + getNumberOfFriends() + " friends)","planetSad",goAppleAway);
	}
}

function goAppleAway() {
	changeScene("Well then, be gone unworthy mortal","apple","apple");
	createGoButton("Ok","planet",goRoot);
}

function goRevealWorm() {
	updateState('wormOut',true);
	changeScene("","appleToWorm","apple");
	setTimeout(function() {
		playSound(soundEffect.worm);
		changeScene("Oh, a planet. What a pleasant surprise","appleWorm","apple");
		createGoButton("Nice to meet you","talk",goRevealWorm2);
	},1000);
}

function goRevealWorm2() {
	changeScene("Likewise. I am Remouladin the almighty Worm God. I see you are already moderately populated - well on your way to becoming a decent planet","appleWorm","apple");
	createGoButton("Thank you Remouladin","appleWorm",goRevealWorm3);
}

function goRevealWorm3() {
	changeScene("So, planet. I think we might be able to work out a deal.. If you get 6 friends to live on you, then I will help you on your quest","appleWorm","apple");
	if (getNumberOfFriends() >= 6) {
		createGoButton("I have plenty of friends","crawlerHouse",bePopular);
	} else {
		createGoButton("I'll be back!","planet",goRoot);
	}
}

function goAppleWorm() {
	playSound(soundEffect.worm);
	changeScene("Aah, planet. How's the socializing going? Did you get 6 friends yet?","appleWorm","apple");
	if (state.wormCubes > 0) {
		createGoButton("How many Worm Cubes do I have?","wormCube",goCheckWormCubes,"startolar");
	}
	if (getNumberOfFriends() >= 6) {
		createGoButton("I have 6 friends!","crawlerHouse",bePopular);
	} else {
		createGoButton("Not yet (" + getNumberOfFriends() + " friends)","talk",goRoot);
	}
}

function bePopular() {
	changeScene("Well done planet. You have proven yourself worthy... Are you ready to witness the true power of Remouladin?","appleWorm","apple");
	createGoButton("Yes","talk",goWormhole);
	createGoButton("No","talk",goRoot);
}

function goWormhole() {
	changeScene("Behold! The power of Remouladin","appleWorm","apple");
	setTimeout(function() {
		playSound(soundEffect.worm);
		changeScene("","wormToApple");
	},2000);
	setTimeout(function() {
		changeScene("","apple");
	},3000);
	setTimeout(function() {
		changeScene("","appleToWormhole");
	},4000);
	setTimeout(function() {
		changeScene("Now, enter the wormhole planet","appleWormhole");
		createGoButton("Enter wormhole","wormhole",enterWormhole);
	},5000);
}

function enterWormhole() {
	playSound(soundEffect.wormHole);
	changeScene("WOAAH!","wormhole","wormhole");
	setTimeout(function() {
		if (state.tGamesCompleted < 1) {
			broccoli();
		} else {
			goFindBroccoliCube();
		}
	},5000);
}

function goFindBroccoliCube() {
	updateState('wormCubes', state.wormCubes + 1);
	changeScene(
		"Ok wow! There was <span style='color:#ff00bb'>a Worm Cube</span> at the end of the wormhole.</br>Let's put it in the Time Terrarium",
		"wormCube"
	);
	createGoButton("Fantastic!","wormCube",broccoli);
}


//THE DARK TIMELINE//

// function goStealFriends() {
// 	changeScene("Oh, and also. I'm kidnapping all your friends. It get's pretty lonely living in an apple in outer space, you know. SEE YA!","appleWorm");
// 	createGoButton("What?","talk",enterWormhole);
// }

// function enterWormhole() {
// 	updateState('woodPS',0);
// 	updateState('goldPS',0);
// 	updateState('cocoPS',0);
// 	updateState('friendsLost',true);
// 	updateState('friends',[]);
// 	updateState('planetudFound',false);
// 	updateState('shopFound',false);
// 	updateState('wormFound',false);
// 	updateState('broccoliChapter',true);
// 	playSound(soundEffect.wormHole);
// 	changeScene("WOAAH!","wormhole","wormhole");
// 	setTimeout(function() {
// 		broccoli();
// 	},5000);
// }


//DONATE PLZ//

// function goBroccula() {
// 	changeScene("Hold it right there planet","broccoliWorkerHand");
// 	createGoButton("What?","talk",goBroccula2);
// }

// function goBroccula2() {
// 	changeScene("Broccoli empire is off limits! You see, it hasn't actually been built yet. This is just a preview of how it is going to look.","broccoliWorker");
// 	createGoButton("Really?","talk",goBroccula3);
// }

// function goBroccula3() {
// 	changeScene("Yes, I'm afraid so. The game developer wants to build it, but it takes time and money to do so.. And god knows that they have plenty of other projects to finish","broccoliWorker");
// 	createGoButton("I can imagine","talk",goBroccula4);
// }

	// function goBroccula4() {
// 	changeScene("Of course they will be more likely to spend time on it, if somebody would show their appreciation for this strange little game, by donating some money","broccoliWorker");
// 	createGoButton("That makes sense","talk",goNotDonate);
// }

// function goNotDonate() {
// 	changeScene("Oh and also I was supposed to tell you: Well done on completing this game! I think that was the most awesome thing you did today","broccoliWorker");
// 	createGoButton("Play it again","newSurface",resetProgress,false);
// 	createGoButton("Say goodbye to Burger","burger",burgerBye);
// 	createGoButton("Go back","wormhole",goRoot);
// }

// function burgerBye() {
// 	playSound(soundEffect.burger);
// 	changeScene("Burger says bye bye. Find him on #planetlife","burger");
// 	createGoButton("Play it again","newSurface",resetProgress,false);
// 	createGoButton("Go back","wormhole",goRoot);
// }

function afterDonate() {
	playSound(soundEffect.burger);
	changeScene("Burger chirps happily as you become the star of his solar system. Leave a review on the app store, or write the developer: christian@northplay.co.</br> We would love to hear what you think!","burger","thanksForDonating");
	createGoButton("Cool!","burger",goContinue);
}

// function goCheckDonate() {
// 	donateFromEnd = true;
// 	toggleSettings();
// 	goDonate();
// }
