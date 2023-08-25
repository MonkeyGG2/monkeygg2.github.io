function checkLastPaywall() {
	if (hasBridge()) {
		changeScene(
			"Wait.. Who's there?",
			"invisibleImg"
		);
		createGoButton("Who is it?","talk",goStoppedByBob2);
	} else {
		goNewBeginning();
	}
}

function goStoppedByBob2() {
	changeScene(
		"Hey, it's Bob the Bottle again!</br>Looks like you're all done with <span style='color:#ffea00'>Chapter 2.</span> Way to go!</br>Let's get you to the menu so you can get going on the last chapter!",
		"bobBottle"
	);
	createGoButton("Ok!","talk",goStartMenu3);
}

function goNewBeginning() {
	updateState('burgulonTime', true);
	updateState('bBurgulonUnlocked', true);
	changeScene("...","invisibleImg","");
	setTimeout(function(){
		changeScene("Hello?","invisibleImg","");
	},3000);
	setTimeout(function(){
		changeScene("Hello?","invisibleImg","");
		createGoButton("...","talk",goNewBeginning2);
	},5000);
}

function goNewBeginning2() {
	changeScene(
		"Is anybody here?",
		"invisibleImg"
	);
	setTimeout(function(){
		changeScene(
			"Is anybody here?",
			"invisibleImg"
		);
		createGoButton("...","talk",goNewBeginning3);
	},2000);
}

function goNewBeginning3() {
	// changeScene(
	// 	"That fake silence is not going to fool me!",
	// 	"invisibleImg"
	// );
	// setTimeout(function(){
	// 	changeScene(
	// 		"That fake silence is not going to fool me!",
	// 		"invisibleImg"
	// 	);
	// 	createGoButton("Chirp!","talk",goNewBeginning4);
	// },3000);
	playSound(soundEffect.burgulon);
	changeScene(
		"Oh hey there. You must be that new planet Burgulon",
		"burgulon"
	);
	createGoButton("Hi","talk",goNewBeginning4);
}

function goNewBeginning4() {
	// changeScene(
	// 	"Aha! I knew someone was here!",
	// 	"explosion"
	// );
	// setTimeout(function(){
	// 	changeScene(
	// 		"Aha! I knew someone was here!",
	// 		"burgulon"
	// 	);
	// 	createGoButton("Chirp..","talk",goNewBeginning5);
	// },500);
	playSound(soundEffect.burgulon);
	changeScene(
		"So you used to be a robot, but now you're a planet. Quite a transformation I must say",
		"burgulon"
	);
	createGoButton("...","talk",goNewBeginning5);
}

function goNewBeginning5() {
	// changeScene(
	// 	"So are you supposed to be some kind of planet?",
	// 	"burgulon"
	// );
	// createGoButton("Chirp chirp","talk",goNewBeginning6);
	playSound(soundEffect.burgulon);
	changeScene(
		"You seem a bit sad.. Do you miss your old planet friend? I'm sure he also misses you, but he is very far away from here",
		"burgulon"
	);
	createGoButton("...","talk",goNewBeginning6);
}

function goNewBeginning6() {
	// changeScene(
	// 	"Well.. That doesn't really tell me much. Aren't you supposed to be supervised by an adult or something?",
	// 	"burgulon"
	// );
	// createGoButton("Chiiirp","talk",goNewBeginning7);
	playSound(soundEffect.burgulon);
	changeScene(
		"But I wouldn't dwell too much on the past. You have a whole new exciting life ahead of you",
		"burgulon"
	);
	createGoButton("...","talk",goNewBeginning7);
}

function goNewBeginning7() {
	// changeScene(
	// 	"Alright alright. Stay put.. I'll go report you to the missing minor planet director",
	// 	"burgulon"
	// );
	// createGoButton("...","talk",goBlank);
	playSound(soundEffect.burgulon);
	changeScene(
		"You're a planet now! So go see what planet life is all about.</br>I'm sure there's a lot of new friends for you just around the corner",
		"burgulon"
	);
	createGoButton("OK!","talk",goNewGalaxy);
}

// function goBlank() {
// 	changeScene("...","burgulon");
// 	setTimeout(function() {
// 		goNewGalaxy();
// 	},2000);
// }

//SPACE

function goNewGalaxy() {
	audioSettings.shouldPlayMusic = true;
	changeBackground("BG_Universe");
	playMusic();
	changeScene(
		"You are a shiny little mechanical planet, hanging out in a remote solar system",
		"burgulon",
		"goNewGalaxy"
	);
	createGoButton("Your Surface","burgulonSurface",goBurgulonSurface);
	if (!state.bBret) {
		createGoButton("Explore","binoculars",goSpaceJerk);
	}
	if (state.bBeanieProgress == 0 && state.bCocoPS > 0) {
		createGoButton("Explore","binoculars",goMeetBeanie);
	}
	if (state.bBeanieProgress > 0 && state.bBeanieProgress < 7) {
		createGoButton("Beanie","beanie",goBeanie);
	}
	if (state.bBeanieProgress >= 7) {
		createGoButton("Beanie","beanieBlind",goBeanie);
	}
	// if (state.bBeanieProgress >= 8 && state.bWarshipProgress == 0) {
	// 	createGoButton("Explore","binoculars",goWarship);
	// }
	// if (state.bWarshipProgress > 0) {
	// 	createGoButton("Strange Spaceship","derekulianWarship",goWarship);
	// }
	if (state.bBeanieProgress >= 6 && state.bAppleProgress == 0) {
		createGoButton("Look for meaning","binoculars",goGetApple);
	}
	if (!state.bStanley && state.bBeanieProgress >= 2) {
		createGoButton("Explore","binoculars",goMeetStanley);
	}
	if (state.bStanley && state.bBentProgress == 0) {
		createGoButton("Stanley The Star","stanley",goStanley);
	}
	if (!state.bAncientPlanet && state.bStardust >= 25) {
		createGoButton("Explore","binoculars",goMeetAncientPlanet);
	}
	if (state.bAncientPlanet) {
		createGoButton("Ancient Planet","ancientPlanet",goAncientPlanet);
	}
	// if (state.bBeanieProgress >= 4 && !state.bSpaceBar) {
	// 	createGoButton("Explore","binoculars",goMeetSpaceBar);
	// }
	if (state.bSpaceBar) {
		createGoButton("Space Bar","spaceBar",goSpaceBar);
	}
	if (state.bSpaceBen) {
		createGoButton("Space Ben","space_ben",goBurgSpaceBen);
	}
	if (state.bBeanieProgress >= 7 && !state.bPlanetBack) {
		createGoButton("Jack","jack",goInspectJack);
	}
	if (state.bPlanetBack) {
		createGoButton("Planet","planet",goPlanetBack);
	}
}

//W WARSHIP

function goWarship() {
	// if (state.bWarshipProgress == 0) {
	// 	updateState('bWarshipProgress', 1);
	// 	changeScene(
	// 		"A strange spaceship is flying around in nearby space. It doesn't look too friendly, but don't judge a book by its cover!",
	// 		"derekulianWarship",
	// 		"goWarship"
	// 	);
	// 	createGoButton("Back","burgulon",goNewGalaxy);
	// } else if (state.jerkPile.length == 0) {
	// 	changeScene(
	// 		"The spaceship is just blasting around casually. You don't feel like messing with them",
	// 		"derekulianWarship",
	// 		"goWarship"
	// 	);
	// 	createGoButton("Back","burgulon",goNewGalaxy);
	// } else if (state.jerkPile.length > 0) {
	// 	changeScene(
	// 		"The spaceship is just blasting around casually. Maybe you should mess with them?",
	// 		"derekulianWarship",
	// 		"goWarship"
	// 	);
	// 	createGoButton("Back","burgulon",goNewGalaxy);
	// 	createGoButton("Throw asteroid pebble","asteroid",throwPebble);
	// }

}

function throwPebble() {
	bossBattle = "";
	changeScene(
		"You throw a small asteroid at the warship..",
		"derekulianWarship"
	);
	createGoButton("And?","talk",pickADerek,state.bCoreStardust);
}

function goNotEvenANibble() {
	changeScene(
		"They are a bit annoyed at you, but you don't smell of delicious stardust, so they let you be for now",
		"derekulianWarship"
	);
	createGoButton("Suckers","talk",goNewGalaxy);
}

function goSpaceJerk() {
	changeScene(
		"The only thing you can see around here is a small interstellar bus stop.<br/>There's a lonely jerk sitting there.. After some chit chat he reveals that his name is Bret, and he works as a mechanic on an evil spaceship close by",
		"busStop",
		"goSpaceJerk"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Wanna hang?","talk",goRecruitJerk);
}

function goRecruitJerk() {
	playSound(soundEffect.hi);
	updateState('bBret', true);
	changeScene(
		"Bret looks at his cool wrist watch. The bus won't come in the next couple of years, so he has time to spare",
		"bret",
		"goRecruitJerk"
	);
	createGoButton("Great timing!","talk",goBurgulonSurface);
}

//OLD SPACE BAR

// function goMeetSpaceBar() {
// 	playSound(soundEffect.party);
// 	changeScene(
// 		"You smell the stale smell of spilled beer and wasted lives. In the distance you can see a bar floating around in space. It seems to be attracted to the coco smell",
// 		"spaceBar",
// 		"goMeetSpaceBar"
// 	);
// 	createGoButton("Hello?","talk",goMeetSpaceBar2);
// }

// function goMeetSpaceBar2() {
// 	updateState('bSpaceBar', true);
// 	changeScene(
// 		"Oh hi. We're running low on coco.. The party's growing kinda dull. Are you selling man?",
// 		"spaceBar"
// 	);
// 	createGoButton("I got Coco","coco",goSpaceBar);
// }

// function goSpaceBar() {
// 	changeScene(
// 		"There's an ancient party going on in there.. You are unsure if anybody even enjoys it anymore.<br/>But you are here to sell your coco, so stop worrying about that",
// 		"spaceBar",
// 		"goSpaceBar"
// 	);
// 	createGoButton("Back","burgulon",goNewGalaxy);
// 	createSmallBuildButton(
// 		"Sell " + state.bBarCocoSell + " coco for " + state.bBarCocoPrice + " gold",
// 		"gold",
// 		"barCocoSellBut",
// 		barSellCoco
// 	);
// 	createProduct("Bar Upgrade");
// }

// function barSellCoco() {
// 	playSound(soundEffect.cheer);
// 	updateState('bCoco', state.bCoco - state.bBarCocoSell);
// 	updateState('bGold', state.bGold + state.bBarCocoPrice);
// 	changeScene("It's a deal!","gold","barSellCoco");
// 	setTimeout(function(){
// 		goSpaceBar();
// 	},300);
// }

//S SURFACE

function goBurgulonSurface() {
	//playSound(soundEffect.burgulon);
	changeBackground("BG_Burgulon");
	changeScene(
		"Your fragmented mechanical surface is creaking and clonking. Deep chirps come from within your robot core",
		"burgulonSurface",
		"goBurgulonSurface"
	);
	createGoButton("Space","burgulon",goNewGalaxy);
	// if (state.bBeanieProgress >= 8 && !state.bSpaceRadio) {
	// 	createGoButton("Check your surface","binoculars",goMeetSpaceRadio);
	// }
	if (state.tTerrariumFound) {
		createGoButton("Time Terrarium","timeTerrarium",goTimeTerrarium);
	}
	if (state.bAppleProgress >= 2 && !state.bSpaceRadio && state.bJerkStarted) {
		createGoButton("Check your surface","binoculars",goMeetSpaceRadio);
	}
	if (state.bBentProgress > 0 && state.bJackLetters == 0) {
		createGoButton("Receive Mail","intergalacticMailman",goFirstLetter);
	}
	if (state.bMinionsKilled == 1 && state.bJackLetters == 1) {
		createGoButton("Receive Mail","intergalacticMailman",goSecondLetter);
	}
	if (state.bMinionsKilled == 2 && state.bJackLetters == 2) {
		createGoButton("Receive Mail","intergalacticMailman",goThirdLetter);
	}
	if (state.bMinionsKilled == 3 && state.bJackLetters == 3) {
		createGoButton("Receive Mail","intergalacticMailman",goFourthLetter);
	}
	if (state.bBeanieProgress >= 4 && state.bAppleProgress < 2) {
		createGoButton("Your Core","blackHole",goCore);
	} else if (state.bAppleProgress >= 2) {
		createGoButton("Your Core",state.bCoreState,goCore);
	}
	if (state.bSpaceRadio) {
		createGoButton("Space Radio","spaceRadio",goSpaceRadio);		
	}
	if (state.bJerkClub) {
		createGoButton("Jerk Club","jerkClub",goJerkClub);
	}
	if (state.bBret) {
		createGoButton("Bret","bret",goBret);
	}
	if (state.bEggProgess > 0 && state.bEggProgess < 10) {
		createGoButton("Egg","egg",goVisitEgg);	
	}
	if (state.bEggProgess == 10 && state.bBeanieProgress < 6) {
		createGoButton("Baby Engineer","engineerBaby",goVisitBaby);
	}
	if (state.bWoodSynthesizer) {
		createGoButton("Wood Synthesizer","woodSynthesizer",goWoodSynthesizer);
	}
	if (state.bWoodSynthesizer) {
		createProduct("Celestial Summoner");
	}
	if (state.bCelestialSummoner && state.bBentProgress < 1) {
		createGoButton("Celestial Summoner","celestialSummoner",goCelestialSummoner);
	}
}

function goFindCore() {
	changeScene(
		"The baby stops crying for no reason at all, and crawls down through your cracks",
		"engineerBaby"
	);
	createGoButton("Follow baby","engineerBaby",goFindCore2);
}

function goFindCore2() {
	updateState('bBeanieProgress', 6);
	changeScene(
		"It seems like the baby has found the core of your body. There is a bubbling black hole in the center, where your core should be. This would be great stuff for a therapist",
		"blackHole"
	);
	createGoButton("Back","burgulonSurface",goBurgulonSurface);
}

function goVisitEgg() {
	if (state.bEggProgess == 1) {
		changeScene(
			"The little egg is smooth to the touch. You wonder what's going on in there. Maybe you can hatch it if keep coming back to visit it?",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	} else if (state.bEggProgess == 2) {
		changeScene(
			"You can hear somebody doing algebra from the inside of the egg",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	} else if (state.bEggProgess == 3) {
		changeScene(
			"You can hear hammering noises from the inside",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	} else if (state.bEggProgess == 4) {
		changeScene(
			"There is somebody drooling from the inside of the egg",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	} else if (state.bEggProgess == 5) {
		changeScene(
			"Wait! Can you hear the egg shell cracking?",
			"egg",
			"goVisitEgg"
		);
		setTimeout(function(){
			changeScene(
				"Oh, it was just the sound of Bret trying to hide a fart",
				"bret"
			);
			createGoButton("Back","burgulonSurface",goBurgulonSurface);
			createGoButton("Wait a little while","egg",goVisitEgg);
			updateState('bEggProgess', state.bEggProgess + 1);
		},2500);
	} else if (state.bEggProgess == 7) {
		changeScene(
			"Somebody is using a laser cutter to undermine the weak points in the egg shell",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	} else if (state.bEggProgess == 8) {
		changeScene(
			"Somebody is crying from the inside of the egg",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	} else if (state.bEggProgess == 9) {
		changeScene(
			"You can hear very determined hammering from the inside of the egg",
			"egg",
			"goVisitEgg"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	}
	if (!state.bEggProgess == 5) {
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Wait a little while","egg",goVisitEgg);
	}
	if (state.bEggProgess == 9) {
		changeScene("Wait! Can you hear the egg shell cracking?","egg");
		setTimeout(function(){
			changeScene("...","eggHatch");
		},2500);
		setTimeout(function(){
			playSound(soundEffect.baby);
			changeScene("WOW! It's a baby engineer! What a rare sight","engineerBaby");
		},6000);
		setTimeout(function(){
			updateState('bEggProgess', state.bEggProgess + 1);
			changeScene("He is drooling at a floor plan of your giant mechanical body","engineerBaby");
			createGoButton("Rad","burgulonSurface",goBurgulonSurface);
		},8000);
	} else {
		updateState('bEggProgess', state.bEggProgess + 1);
	}
}

//B Bret

function goBret() {
	playSound(soundEffect.hi);
	if (!state.bBretDoingCoco) {
		changeScene(
			"Bret is playing the air guitar on your surface.<br/>He tells you that you actually have a pretty high coco yield for a robot planet",
			"bret",
			"goBret"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Extraction time!","coco",goBretCoco);
	} else {
		changeScene(
			"Bret is hard at work prying <span style='color:#ff0000'>" + (state.productStates[18] + 1) + " coco/sec</span> out of your cracks. He occasionally samples the goods",
			"bret",
			"goBret"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		if (state.bBeanieProgress >= 3 && !state.bWoodSynthesizer) {
			createGoButton("What's up?","talk",goBretAncientSecret);
		}
		createGoButton("Talk","talk",goBretTalk);
		if (state.bAppleProgress >= 2 && !state.bJerkClub) {
			createGoButton("Hear proposition","talk",goHearBusinessPlan);
		}
		createProduct("Crowbar Upgrade");
	}
}

function goHearBusinessPlan() {
	changeScene(
		"Bret awkwardly stumbles through a business plan. What if we start a Jerk Club!? Bret has plenty of Jerk friends out in the galaxy who would be willing to join",
		"bret",
		"createJerkClub"
	);
	createGoButton("Maybe later","talk",goBret);
	createProduct("Jerk Club");
}

function goBretAncientSecret() {
	changeScene(
		"Bret is super psyched about this new idea that he claims he came up with himself. Do you want to fund 'his' project?",
		"bret",
		"bretAncientSecret"
	);
	createGoButton("Back","bret",goBret);
	createProduct("Wood Synthesizer");
}

function goBretTalk() {
	playSound(soundEffect.hi);
	var h = "Bret is doing some poses.<br/>";
	var bretTalks = [
		"He brags that he used to work in a dungeon. But he got tired of seeing his friends get beaten to death by wild Derekulians, so he quit and found another job. You wonder if this really counts as bragging.",
		"He tells you about his favourite bands, but he has terrible taste in music, so the conversation doesn't last long.",
		"He brags about the time that his jerk team managed to defeat a Derekulian. It was super awesome until the Derekulian was revived by some stardust, and then just beat them all up.",
		"He tries to hide a fart, but fails. He pretends like it was just the creaking of the floor.",
		// "He tells you that he has always dreamt of being trained like the Derekulians are, and be able to delve into dungeons. But he knows that the galactic laws state that jerks are not allowed to be trained.",
	];
	h += bretTalks[bretTalkCount];
	h += "<br/>His butt crack is showing while he picks up the crowbar that he dropped";
	bretTalkCount++;
	if (bretTalkCount == bretTalks.length) {
		bretTalkCount = 0;
	}
	changeScene(h,"bret","goBretTalk");
	createGoButton("Back","bret",goBret);
	createGoButton("Talk more","talk",goBretTalk);
}

function goBretCoco() {
	updateState('bCocoPS', 1);
	updateState('bBretDoingCoco', true);
	changeScene(
		"Bret yanks a crowbar out of his pants and starts to pry coco out of your surface. It hurts and tickles at the same time",
		"coco",
		"goBretCoco"
	);
	createGoButton("Hehe.. auch!","talk",goBurgulonSurface);
}

//C CElESTIAL SUMMONER

function goWoodSynthesizer() {
	changeScene(
		"The beautiful machine is popping out <span style='color:#ff0000'>" + (state.productStates[21] + 1) + " wood/sec</span>. You can't help but make a happy little chirp",
		"woodSynthesizer",
		"goWoodSynthesizer"
	);
	createGoButton("Back","burgulonSurface",goBurgulonSurface);
	createProduct("Upgrade Wood Synthesizer");
}

function goCelestialSummoner() {
	changeScene(
		"The impossibly complex summoning device is charged and ready. You're giggling with anticipation!",
		"celestialSummoner",
		"goCelestialSummoner"
	);
	createGoButton("Back","burgulonSurface",goBurgulonSurface);
	if (!state.bCelestialSummonerCharged && state.bSpaceBar) {
		createProduct("Recharge Celestial Summoner");
	}
	if (!state.bSpaceBar) {
		createGoButton("Activate!","celestialSummoner",goSummonSpaceBar);
	}
	if (state.bCelestialSummonerCharged && !state.bSpaceBen) {
		createGoButton("Activate!","celestialSummoner",goSummonSpaceBen);
	} else if (state.bCelestialSummonerCharged && state.bSpaceBen) {
		createGoButton("Activate!","celestialSummoner",goSummonJack);
	}
	// if (state.bCelestialSummonerCharged && state.bBentProgress == 0) {
	// 	createGoButton("Activate!","celestialSummoner",goSummonJack);
	// } else if (state.bCelestialSummonerCharged && state.bBentProgress >= 1) {
	// 	createGoButton("Activate!","celestialSummoner",goSummonSpaceBen);
	// }
}

//S SPACE BAR

function goSummonSpaceBar() {
	changeScene(
		"You press the button..",
		"celestialSummoner"
	);
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene(
			"PUF!",
			"explosion"
		);
	},1500);
	setTimeout(function(){
		changeScene(
			"..It's an old space bar.</br>Not quite what you were expecting, but still. Try not to act dissapointed",
			"spaceBar"
		);
		createGoButton("Ok","talk",goMeetSpaceBar);
	},2000);	
}

function goMeetSpaceBar() {
	playSound(soundEffect.party);
	changeScene(
		"You smell the stale smell of spilled beer and wasted lives. In the distance you can see the bar floating around in space. It seems to be attracted to the coco smell",
		"spaceBar",
		"goMeetSpaceBar"
	);
	createGoButton("Hello?","talk",goMeetSpaceBar2);
}

function goMeetSpaceBar2() {
	updateState('bSpaceBar', true);
	updateState('bCelestialSummonerCharged', false);
	changeScene(
		"Oh hi. We're running low on coco.. The party's growing kinda dull. Are you selling man?",
		"spaceBar"
	);
	createGoButton("I got Coco","coco",goSpaceBar);
}

function goSpaceBar() {
	playSound(soundEffect.party);
	changeScene(
		"There's an ancient party going on in there.. You are unsure if anybody even enjoys it anymore.<br/>But you are here to sell your coco, so stop worrying about that.</br>You have left around <span style='color:#8b5937'>" + state.bSpaceBarCoco + " coco</span> at the bar. They earn <span style='color:#ffc800'>" + calculateSpaceBarGold() + " gold</span> every 10 seconds!",
		"spaceBar",
		"goSpaceBar"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("How does this work?","talk",goSpaceBarTalk);
	createGoButton("Deposit coco","coco",goBarDepositCoco);
	if (state.bSpaceBarGold > 0) {
		createGoButton("Get the gold (more than " + state.bSpaceBarGold + " gold)","gold",goSpaceBarGold);
	}
	createProduct("Bar Upgrade");
}

function goSpaceBarGold() {
	changeScene(
		"You pick up <span style='color:#ffc800'>" + state.bSpaceBarGold + " gold</span> from the dealers. You casually threaten them, so they can keep up their excellent work",
		"gold"
	);
	createGoButton("Better not be skimmin' on me boys!","talk",goSpaceBar);
	updateState('bGold', state.bGold + state.bSpaceBarGold);
	updateState('bSpaceBarGold', 0);
}

function goBarDepositCoco() {
	changeScene(
		"You've deposited <span style='color:#8b5937'>" + state.bSpaceBarCoco + " coco</span> at the bar. The dealers are hard at work, converting it to gold for you. Just don't ask any questions",
		"coco"
	);
	if (state.bCoco >= 100) {
		createGoButton("Back","spaceBar",goSpaceBar);
		createGoButton("Deposit 100 coco","coco",goDepositCoco,100);
	} else {
		createGoButton("I don't have enough coco","coco",goSpaceBar);
	}
	if (state.bCoco >= 250) {
		createGoButton("Deposit 250 coco","coco",goDepositCoco,250);
	}
	if (state.bCoco >= 500) {
		createGoButton("Deposit 500 coco","coco",goDepositCoco,500);
	}
	if (state.bCoco >= 1000) {
		createGoButton("Deposit 1000 coco","coco",goDepositCoco,1000);
	}
	if (state.bCoco >= 5000) {
		createGoButton("Deposit 5000 coco","coco",goDepositCoco,5000);
	}
	if (state.bCoco >= 10000) {
		createGoButton("Deposit 10000 coco","coco",goDepositCoco,10000);
	}
}

function calculateSpaceBarGold() {
	if (state.bSpaceBarCoco > 0) {
		return (Math.round(state.bSpaceBarRate * (state.bSpaceBarCoco / 500)) + 1);
	} else {
		return 0;
	}
}

function goDepositCoco(amount) {
	updateState('bSpaceBarCoco', state.bSpaceBarCoco + amount);
	updateState('bCoco', state.bCoco - amount);
	upgradeAnimation("Let's deal some coco!","coco",goBarDepositCoco);
}

function goSpaceBarTalk() {
	changeScene(
		"Hey don't worry about it. These guys got you covered.</br>If you just leave your coco here, they will turn it around in no time. That means gold!</br>The more coco deposited, the quicker it will be flipped",
		"spaceBar"
	);
	createGoButton("Sounds legit","talk",goSpaceBar);
}

//S SPACE BEN

function goSummonSpaceBen() {
	playSound(soundEffect.explosion);
	changeScene(
		"!!!",
		"explosion"
	);
	setTimeout(function(){
		updateState('bCelestialSummonerCharged', false);
		updateState('bSpaceBen', true);
		changeScene(
			"What is this? Some gnome guy in a spaceship... Oh it's Space Ben.</br>He tells you that he has pivoted into the stardust business. He says it without parting his teeth at all. Fascinating",
			"space_ben"
		);
		createGoButton("Hello?","talk",goBurgSpaceBen);
	},500);
}

function goBurgSpaceBen() {
	changeScene(
		"Space Ben is sitting in his space shop.. Looking at you. Do you want to buy something? Do you?</br>He will sell anything for stardust",
		"space_ben",
		"newSpaceBen"
	);
	createGoButton("Back","burgulon",goNewGalaxy);

	if (state.bSpaceBenUpgraded) {

		if (state.bStardust >= state.bSpaceBenPrices[0]) {
			createGoButton("Buy 10000 wood (" + state.bSpaceBenPrices[0] + " stardust)","wood",stardustExchange,0);
		} else {
			createIconButton(
				"Buy 10000 wood (" + state.bSpaceBenPrices[0] + " stardust)",
				"images/handling/wood.gif",
				"fullWoodBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				0
			);		
		}
		if (state.bStardust >= state.bSpaceBenPrices[1]) {
			createGoButton("Buy 3000 gold (" + state.bSpaceBenPrices[1] + " stardust)","gold",stardustExchange,1);
		} else {
			createIconButton(
				"Buy 3000 gold (" + state.bSpaceBenPrices[1] + " stardust)",
				"images/handling/gold.gif",
				"fullGoldBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				1
			);			
		}
		if (state.bStardust >= state.bSpaceBenPrices[2]) {
			createGoButton("Buy 10000 coco (" + state.bSpaceBenPrices[2] + " stardust)","coco",stardustExchange,2);
		} else {
			createIconButton(
				"Buy 10000 coco (" + state.bSpaceBenPrices[2] + " stardust)",
				"images/handling/coco.gif",
				"fullCocoBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				2
			);			
		}
		createSingleProduct("300 Space Rings (1000 stardust)");

	} else {

		if (state.bStardust >= state.bSpaceBenPrices[0]) {
			createGoButton("Buy 1000 wood (" + state.bSpaceBenPrices[0] + " stardust)","wood",stardustExchange,0);
		} else {
			createIconButton(
				"Buy 1000 wood (" + state.bSpaceBenPrices[0] + " stardust)",
				"images/handling/wood.gif",
				"fullWoodBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				0
			);		
		}
		if (state.bStardust >= state.bSpaceBenPrices[1]) {
			createGoButton("Buy 300 gold (" + state.bSpaceBenPrices[1] + " stardust)","gold",stardustExchange,1);
		} else {
			createIconButton(
				"Buy 300 gold (" + state.bSpaceBenPrices[1] + " stardust)",
				"images/handling/gold.gif",
				"fullGoldBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				1
			);			
		}
		if (state.bStardust >= state.bSpaceBenPrices[2]) {
			createGoButton("Buy 1000 coco (" + state.bSpaceBenPrices[2] + " stardust)","coco",stardustExchange,2);
		} else {
			createIconButton(
				"Buy 1000 coco (" + state.bSpaceBenPrices[2] + " stardust)",
				"images/handling/coco.gif",
				"fullCocoBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				2
			);			
		}
		createSingleProduct("30 Space Rings (100 stardust)");
		
	}

	createProduct("Upgrade Shop");

}

function stardustExchange(res) {
	playSound(soundEffect.buy);
	var thePrices;
	if (state.bSpaceBenUpgraded) {
		thePrices = [10000,3000,10000];
	} else {
		thePrices = [1000,300,1000];
	}
	var resImages = [
		"wood",
		"gold",
		"coco"
	];
	changeScene(
		"Here you go sir",
		resImages[res]
	);
	if (res == 0) {
		updateState('bWood', state.bWood + thePrices[0]);
	}
	if (res == 1) {
		updateState('bGold', state.bGold + thePrices[1]);
	}
	if (res == 2) {
		updateState('bCoco', state.bCoco + thePrices[2]);
	}
	updateState('bStardust', state.bStardust - state.bSpaceBenPrices[res])
	var newArray = state.bSpaceBenPrices;
	if (state.bSpaceBenUpgraded) {

		for (var i = 0; i < newArray.length; i++) {
			if (res != i) {
				if (state.bSpaceBenPrices[i] > 100) {
					newArray[i] -= 10;					
				}
			}
		}
		if (state.bSpaceBenPrices[res] < 750) {
			newArray[res] += 20;		
		}

	} else {

		for (var i = 0; i < newArray.length; i++) {
			if (res != i) {
				if (state.bSpaceBenPrices[i] > 10) {
					newArray[i] -= 1;					
				}
			}
		}
		if (state.bSpaceBenPrices[res] < 75) {
			newArray[res] += 2;		
		}

	}
	updateState('bSpaceBenPrices', newArray);
	setTimeout(function(){
		goBurgSpaceBen();
	},200);
}


//S SPACE RADIO

function goSpaceRadio() {
	changeScene(
		"The space radio is very ready to play some music!",
		"spaceRadio",
		"goSpaceRadio"
	);
	createGoButton("Back","burgulonSurface",goBurgulonSurface);
	if (state.bShipsSummoned[0] && state.bDerekShipStates[0] < allDerekShips[0].levels) {
		createGoButton("Flying Saucer","flyingSaucer",loadDerekShip,0);
	} else if (state.bDerekShipStates[0] < allDerekShips[0].levels) {
		createSingleProduct("Friend House Music (200 gold)");
	}
	if (state.bShipsSummoned[1] && state.bDerekShipStates[1] < allDerekShips[1].levels) {
		createGoButton("Evil Toaster","evilToaster",loadDerekShip,1);
	} else if (state.bDerekShipStates[1] < allDerekShips[1].levels && state.bDerekShipStates[0] == allDerekShips[0].levels) {
		createSingleProduct("Jerk Techno (800 gold)");
	}
	if (state.bShipsSummoned[2] && state.bDerekShipStates[2] < allDerekShips[2].levels) {
		createGoButton("The Mother Cow","derekulianWarship",loadDerekShip,2);
	} else if (state.bDerekShipStates[2] < allDerekShips[2].levels && state.bDerekShipStates[1] == allDerekShips[1].levels) {
		createSingleProduct("Gnomish Heavy Metal (2000 gold)");
	}
	if (state.bShipsSummoned[3] && state.bDerekShipStates[3] < allDerekShips[3].levels) {
		createGoButton("Derekulus X","spaceDungeon",loadDerekShip,3);
	} else if (state.bDerekShipStates[3] < allDerekShips[3].levels && state.bDerekShipStates[2] == allDerekShips[2].levels) {
		createSingleProduct("Beanie's Improv Jazz (10000 gold)");
	}		
}

function goMeetSpaceRadio() {
	updateState('bSpaceRadio', true);
	changeScene(
		"It looks like an old Derekulian space radio has landed on your surface.</br>They must have gotten tired of the noise, and thrown it into space",
		"spaceRadio"
	);
	createGoButton("Groovy!","spaceRadio",goSpaceRadio);
}

//A APPLE
function goGetApple() {
	changeScene(
		"You take a dedicated look around the emptiness of the universe. There's not a lot of anything here.. Especially not meaning",
		"invisibleImg"
	);
	createGoButton("Typical!","talk",goGetApple2);
}

function goGetApple2() {
	changeScene(
		"Wait a minute.. Isn't that something over there?",
		"tinyApple"
	);
	createGoButton("Where?","talk",goGetApple3);
}

function goGetApple3() {
	playSound(soundEffect.wormHole);
	changeScene(
		"Wow! Look at those colors. Is it a wormhole?",
		"wormhole"
	);
	createGoButton("Woooow","talk",goGetApple4);
}

function goGetApple4() {
	playSound(soundEffect.explosion);
	changeScene(
		"!!!",
		"explosion"
	);
	setTimeout(function(){
		updateState('bAppleProgress', 1);
		changeScene(
			"An apple came out of the wormhole! What does this even mean? This apple is probably super important.. It feels like it's the missing piece somehow. Maybe it's what you need to light your fire. Get in the groove. Get your inner light blazing.. </br></br>Anyways, that's enough hints for now. Just take the apple",
			"smallApple"
		);
		createGoButton("Hehe","talk",goNewGalaxy);
	},500);
}

//CHEATS
function burgerIsARobot() {
	updateState('bWood', state.bWood + 1000);
	updateState('bGold', state.bGold + 1000);
	updateState('bCoco', state.bCoco + 1000);
	//updateState('bStardust', state.bStardust + 1000);
	console.log(".. or is he burger?"); 
}

function readyForJerk() {
	updateState('bBeanieProgress', 8);
	updateState('bBret', true);
	updateState('bEggProgess', 10);
	updateState('bAncientPlanet', true);
	updateState('bJerkClub', true);
	updateState('bAppleProgress', 2);
	updateState('bSpaceBar', true);
	updateState('bCoco', state.bCoco + 1000);
	updateState('bGold', state.bGold + 200);
	updateState('bWood', state.bWood + 600);
	console.log(".. It's time for the jerkening");
}

function hungryForStardust() {
	updateState('bStardust', state.bStardust + 500);
	console.log("Oh, that sweet taste");
}

function willYouMarryMe() {
	updateState('bSpaceRings', state.bSpaceRings + 200);
	console.log("No but here are your stupid space rings!");
}

function youCompleteMe() {
	updateState('bCoreStardust', state.bCoreCapacity);
	console.log("No you complete ME!");
}


// LEGACY!!!
// function goCelestialSummoner() {
// 	changeScene(
// 		"This is it. If this device works as intended you'll get your old buddy back",
// 		"celestialSummoner",
// 		"goCelestialSummoner"
// 	);
// 	createGoButton("Activate!","celestialSummoner",activateCelestialSummoner);
// }

// function activateCelestialSummoner() {
// 	changeScene(
// 		"You are channeling power to the Celestial Summoner. It starts humming..",
// 		"celestialSummoner"
// 	);
// 	createGoButton("And?","celestialSummoner",goSummonSpacePotato);
// }

// function goSummonSpacePotato() {
// 	playSound(soundEffect.potion);
// 	changeScene(
// 		"FLOP!",
// 		"explosion"
// 	);
// 	setTimeout(function(){
// 		changeScene(
// 			"...",
// 			"potato"
// 		);
// 		createGoButton("What's this!?","potato",goMeetSpacePotato);
// 	},500);
// }

// function goMeetSpacePotato() {
// 	changeScene(
// 		"This is not your old planet buddy.<br/>This is just a space potato. He looks apologetically at you",
// 		"potato"
// 	);
// 	createGoButton("Spill it, potato man!","talk",goQuestionSpacePotato);
// }

// function goQuestionSpacePotato() {
// 	changeScene(
// 		"With his tiny voice he starts doing the explaining.<br/>It seems there is nothing wrong with your device.. It is simply that you are in the wrong time",
// 		"potato"
// 	);
// 	createGoButton("Wrong time?","talk",goQuestionSpacePotato2);
// }

// function goQuestionSpacePotato2() {
// 	changeScene(
// 		"The potato explains that the content that was supposed to be here, simply hasn't been developed yet. But in the right time it will be made",
// 		"potato"
// 	);
// 	createGoButton("Ridiculous!","talk",goQuestionSpacePotato3);
// }

// function goQuestionSpacePotato3() {
// 	changeScene(
// 		"The potato is almost crying, but still managing to hold it together slightly.<br/><br/>His tiny voice tells you that the developer will be working hard on making the next chapter, so you can finally be reunited with your old planet buddy",
// 		"potato"
// 	);
// 	createGoButton("I see","talk",goQuestionSpacePotato4);
// }

// function goQuestionSpacePotato4() {
// 	if (mobile) {
// 		changeScene(
// 			"With an even tinier voice he tells you that you can even go donate from the settings menu.<br/>That might speed up the process a bit",
// 			"potato"
// 		);
// 	} else {
// 		changeScene(
// 			"With an even tinier voice he tells you that you can even donate some money. That might speed up the process a bit",
// 			"potato"
// 		);		
// 	}
// 	createGoButton("...","potato",goQuestionSpacePotato4_1);
// }

// function goQuestionSpacePotato4_1() {
// 	playSound(soundEffect.cry);
// 	changeScene(
// 		"Then he burst out in tears",
// 		"potatoCrying"
// 	);
// 	createGoButton("There there space potato","talk",goQuestionSpacePotato5);
// }

// function goQuestionSpacePotato5() {
// 	changeScene(
// 		"He stops crying, and with a tiny sobbing voice he asks you if you want to continue playing as Burgulon, or you rather want to go back to play as the planet again?",
// 		"potato"
// 	);
// 	createGoButton("Burgulon","burgulon",goPlayBurgulon);
// 	createGoButton("Planet","planet",goPlayPlanet);
// }

// function goPlayBurgulon() {
// 	changeScene(
// 		"You know it's pretty futile, but you choose to stay as poor Burgulon for a little while longer",
// 		"burgulon"
// 	);
// 	createGoButton("Yes","burgulon",goNewGalaxy);
// }

// function goPlayPlanet() {
// 	updateState('burgulonTime', false);
// 	changeScene(
// 		"You decide to go back to the eventful life of being a planet. There's still plenty of jerks that needs beating",
// 		"planet"
// 	);
// 	createGoButton("Yes","planet",goRoot);
// }