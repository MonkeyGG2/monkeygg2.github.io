
function goJerkClub() {
	changeBackground("BG_JerkClub");
	if (state.bJerkStarted) {
		changeScene(
			"To be honest, it's not a nice smell in here. But spirits are high, and the jerks are having a blast",
			"jerkClub",
			"goJerkClub"
		);	
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Jerk Squad","jerkSquad",goJerkSquad);
		if (state.bDerekSummoningDevice) {
			createGoButton("Derek Summoning Device","derekSummoningDevice",goDerekSummoningDevice);
		}
		createGoButton("Buy jerk cans","jerkBartender",goBuyJerkCans);
		if (state.bBeanieImaginationUpgrade) {
			createGoButton("Talk to Beanie","beanieBean",goBeanieImagineJerks);
		}
		if (state.bDerekProgress == 1) {
			createGoButton("Derek","derek",goJerkDerek);
		}
		createGoButton("Backstage","jerkClubBackstage",goJerkBackstage);
		if (!state.bDerekSummoningDevice && state.bDerekShipStates[0] > 0) {
			createGoButton("Talk to Bartender","jerkBartender",goSellOven);
		}
		createProduct("Jerk Attack Power");
		createProduct("Jerk Muffin Power");

	} else {
		changeScene(
			"To be honest, it's not a nice smell in here. But spirits are high, and the jerks are having a blast. The bartender looks like he wants a word with you",
			"jerkClub"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		createGoButton("Talk to bartender","talk",goBartenderTalk);
	}
}

function goBuyJerkCans() {

	var squadFullText = "";
	if (countJerksInPile() >= 50) {
		squadFullText = "</br><span style='color:#ff0000'>There are 50 jerks in your squad. It's completely packed!! You need to remove some if you want to buy new jerks</span>";
	}

	changeScene(
		"The bartender is selling Canned Jerks.</br>You have <span style='color:#ffc800'>" + state.bSpaceRings + " space rings</span>" + squadFullText,
		"jerkBartender",
		"goBuyJerkCans"
	);
	createGoButton("Back","jerkClub",goJerkClub);

	if (countJerksInPile() < 50) {
		createSingleProduct("Standard Jerk Can (10 space rings)");
	} else {
		createIconButton(
			"Standard Jerk Can (10 space rings)",
			"images/handling/canOfJerksRegular.gif",
			"standardCanOfJerksBut",
			"",
			"#8c1d1d",
			true,
			"buttons",
			stardustExchange,
			0
		);	
	}
	if (state.bJerkCanCool) {
		if (countJerksInPile() < 50) {
			createSingleProduct("Cool Jerk Can (100 space rings)");
		} else {
			createIconButton(
				"Cool Jerk Can (100 space rings)",
				"images/handling/canOfJerksCool.gif",
				"coolCanOfJerksBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				0
			);
		}
	} else if (state.bSpaceBen) {
		createProduct("Cool Jerk Cans");
	}
	if (state.bJerkCanFantastic) {
		if (countJerksInPile() < 50) {
			createSingleProduct("Fantastic Jerk Can (800 space rings)");
		} else {
			createIconButton(
				"Fantastic Jerk Can (800 space rings)",
				"images/handling/canOfJerksFantastic.gif",
				"fantasticCanOfJerksBut",
				"",
				"#8c1d1d",
				true,
				"buttons",
				stardustExchange,
				0
			);
		}
	} else if (state.bBentProgress > 0) {
		createProduct("Fantastic Jerk Cans");
	}
}

function goBartenderTalk() {
	changeScene(
		"The bartender is acting like he is in an american movie or something. You get really distracted, and forget to listen to what he is saying.</br>Somehow you have ended up with a whole squad of jerks",
		"jerkBartender"
	);
	createGoButton("Wild","talk",goBartenderTalk2);
}

function goBartenderTalk2() {
	updateState('bJerkStarted', true);
	//Add starter jerk deck
	newJerkToPile("Regular Jerk");
	newJerkToPile("Regular Jerk");
	newJerkToPile("Regular Jerk");
	newJerkToPile("Regular Jerk");
	newJerkToPile("Regular Jerk");
	newJerkToPile("Regular Jerk");
	// newJerkToPile("Juggler Jerk");
	// newJerkToPile("Big Jerk");
	newJerkToPile("Jerk Baker");
	newJerkToPile("Jerk Baker");
	newJerkToPile("Jerk Baker");
	newJerkToPile("Jerk Baker");
	newJerkToPile("Jerk Baker");

	changeScene(
		"The bartender tells you that there is more where that came from, and points at a shelf tucked full with cans. It seems like they are selling canned jerks here.</br>And if you ever need advice on how to use your jerk squad for fighting, you should go talk to the bartender in the backstage room. He doesn't want everyone else to hear his secret jerk wisdom!",
		"canOfJerksRegular"
	);
	createGoButton("Crazy","talk",goBartenderTalk3);
}

function goBartenderTalk3() {
	updateState('bSpaceRings', state.bSpaceRings + 50);
	changeScene(
		"He winks at you.</br>Here's <span style='color:#ffc800'>50 space rings.</span> You need those to buy jerk cans for",
		"spaceRing"
	);
	createGoButton("Thanks!","talk",goJerkClub)
}

function goJerkSquad() {
	playSound(soundEffect.jerkSquad);
	var jp = state.jerkPile;
	changeScene(
		"These are the toughest jerks stardust can buy.</br>They'll protect your shining core from invaders. Or they'll try at least. These are jerks after all.</br>Your <span style='color:#00fff7'>" + countJerksInPile() + "</span> jerks have an <span style='color:#ff0000'>attack power of " + Math.round(state.bJerkAttackPower * 100) + "%</span> and a <span style='color:#fca903'>muffin power of " + Math.round(state.bJerkMuffinPower * 100) + "%</span>",
		"jerkSquad",
		"goJerkSquad"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	for (var i = 0; i < allJerks.length; i++) {
		var x = 0;
		for (var j = 0; j < jp.length; j++) {
			if (!jp[j].removed && allJerks[i].navn == jp[j].navn) {
				x++;
			}
		}
		if (x > 0) {
			createGoButton(x + "x " + allJerks[i].navn, allJerks[i].image, goCheckoutJerk, i);
		}
	}
}

function goCheckoutJerk(nr) {
	// changeScene(
	// 	describeJerk(allJerks[nr].attack,allJerks[nr].parameter),
	// 	allJerks[nr].image
	// );
	changeScene(
		allJerks[nr].description,
		allJerks[nr].image
	);
	createGoButton("Back","jerkSquad",goJerkSquad);
	createGoButton("Remove (1) " + allJerks[nr].navn + " (" + state.bRemoveJerkPrice + " stardust)","stardust",goRemoveJerk,nr);
}

function countJerksInPile() {
	var count = 0;
	for (var i = 0; i < state.jerkPile.length; i++) {
		if (!state.jerkPile[i].removed) {
			count++;
		}
	}
	return count;
}

function goRemoveJerk(nr) {
	if (countJerksInPile() > 10) {
		if (state.bStardust >= state.bRemoveJerkPrice) {
			changeScene(
				"Are you sure you want to remove poor " + allJerks[nr].navn + " from your squad?",
				allJerks[nr].image,
			);
			createGoButton("No","no",goJerkClub);
			createGoButton("Yes","yes",goRemoveJerkConfirmed,nr);
		} else {
			changeScene(
				"You <span style='color:#ff0000'>don't have enough stardust</span> to get rid of this jerk",
				allJerks[nr].image
			);
			createGoButton("Back","jerkSquad",goJerkSquad);
		}
	} else {
		changeScene(
			"You need to have <span style='color:#ff0000'>at least 10 jerks in your jerk squad,</span> or they will become terribly lonely",
			"jerkSquad"
		);
		createGoButton("Back","jerkSquad",goJerkSquad);
	}
}

function goRemoveJerkConfirmed(nr) {
	playSound(soundEffect.cry);
	updateState('bStardust', state.bStardust - state.bRemoveJerkPrice);
	if (state.bRemoveJerkPrice < 500) {
		updateState('bRemoveJerkPrice', state.bRemoveJerkPrice + 5);
	}
	var replies = [
		"Poor " + allJerks[nr].navn + " left crying. It's not easy being a jerk",
		allJerks[nr].navn + " realizes what a jerk he has been, and leaves the squad",
		allJerks[nr].navn + " rants about what a jerk you are for taking him off the squad. Ironic",
		allJerks[nr].navn + " apologizes for having been such a jerk. He leaves the squad",
		allJerks[nr].navn + " is relieved to be off the squad. It's super scary getting beaten all the time!"
	];
	changeScene(
		replies[Math.floor(Math.random() * replies.length)],
		allJerks[nr].image
	);
	var jp = state.jerkPile;
	var chosenOne;
	for (var i = 0; i < jp.length; i++) {
		if (!jp[i].removed && jp[i].navn == allJerks[nr].navn) {
			chosenOne = i;
		}
	}
	jp[chosenOne].removed = true;
	if (jp[chosenOne].navn == "Jerkinson Crusoe") {
		updateState('bJerkinsonRecruited', false);
	}
	console.log("removed " + jp[chosenOne].navn);
	updateState('jerkPile', jp);
	createGoButton("Sorry","talk",goJerkSquad);
}

function openCan(rarity) {
	playSound(soundEffect.canOpen);
	var openedJerks;
	pickTwoJerks();
	while (openedJerks[0].navn == openedJerks[1].navn) {
		pickTwoJerks();
	}
	function pickTwoJerks() {
		openedJerks = [allJerks[pickJerkByRarity(rarity)],allJerks[pickJerkByRarity(rarity)]];
	}
	//console.log(openedJerks[0].navn + " hej hej hej " + openedJerks[1].navn);
	changeScene(
		"Two jerks pop out:</br>A <span style='color:#2fde10'>" + openedJerks[0].navn + "</span></br>and a <span style='color:#2fde10'>" + openedJerks[1].navn + "</span></br>Which one do you want on your squad?",
		"jerkBartender"
	);
	createGoButton("I don't want any of these jerks!","no",goBuyJerkCans);
	createGoButton(openedJerks[0].navn + " <span style='color:#ffea00'>(" + openedJerks[0].actionCost + " actions)</span>" + "</br><span style='color:#8a8a8a'>" + openedJerks[0].description + "</span>",openedJerks[0].image,pickAJerk,openedJerks[0],false);
	createGoButton(openedJerks[1].navn + " <span style='color:#ffea00'>(" + openedJerks[1].actionCost + " actions)</span>" + "</br><span style='color:#8a8a8a'>" + openedJerks[1].description + "</span>",openedJerks[1].image,pickAJerk,openedJerks[1],false);
}	

function pickAJerk(jerk,beanie) {
	newJerkToPile(jerk.navn);
	changeScene(
		"You get a new " + jerk.navn + " on your squad!",
		jerk.image
	);
	if (beanie) {
		createGoButton("What a jerk!",jerk.image,goBeanieImagineJerks);
	} else {
		createGoButton("What a jerk!",jerk.image,goBuyJerkCans);
	}
}

function goJerkBackstage() {
	playSound(soundEffect.technoLow);
	changeScene(
		"It is very untidy back here!",
		"jerkClubBackstage"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	createGoButton("Chat with bartender","jerkBartender",goBartenderChat);
	if (state.bFriendBananaMan) {
		createGoButton("Banana Man","bananaMan",goVisitBananaman);
	}
	if (state.bFriendJerkWiseman) {
		createGoButton("Wise Man","jerkWiseMan",goVisitWiseman);
	}
	if (state.bFriendBrokenRobot) {
		createGoButton("Broken Robot","brokenRobot",goVisitBrokenRobot);
	}
}

function goBartenderChat() {
	var bartenderTalks = [
		"The bartender leans in and whispers some jerk wisdom to you. Your jerk squad is great for fighting Derekulians and other threats out in space",
		"Fighting happens in rounds. Every round you need to spend your <span style='color:#ffea00'>jerk actions</span> to use your jerks against the enemy",
		"Every round you draw 4 random jerks from your pile of jerks",
		"The <span style='color:#00fff7'>stardust in your core</span> is very important when fighting. Your enemies will try to suck it out of you every round, and when you are all out of stardust, you are done!",
		"But your enemies are easy to distract. If you make your jerks bake some <span style='color:#fca903'>muffins</span>, they will eat those before they touch your stardust",
		"When you defeat your enemies you should steal all the <span style='color:#ffc800'>space rings.</span> You can use those to buy new jerk cans",
		"Jerk cans have some way better jerks than those basics jerks in your squad, you should definitely buy some jerk cans!",
		"Also, remember to upgrade your jerks Attack Power and Muffin Power. That's a great way to make your squad more powerful!",
		"The bartender looks exhausted. That was a lot of wisdom in one go. He needs to take a rest"
	];
	changeScene(
		bartenderTalks[bartenderTalkCount],
		"jerkBartender"
	);
	createGoButton("Back","jerkClubBackstage",goJerkBackstage);
	if (bartenderTalkCount < bartenderTalks.length - 1) {
		bartenderTalkCount++;
		createGoButton("Tell me more","talk",goBartenderChat);
	} else {
		bartenderTalkCount = 0;
	}
}

function goVisitBananaman() {
	changeScene(
		"The Banana Man is taking a breather. He is eating a banana.</br>He promises to get back out there in a minute and make you the usual <span style='color:#ffc800'>1 gold/sec</span>",
		"bananaMan"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	createGoButton("Talk","talk",goTalkBananaman);
}

function goTalkBananaman() {
	var bananaTalks = [
		"Banana Man offers you a banana, but you are a planet",
		"You ask him if he has any super powers. He snaps his fingers and pulls out a banana from his costume. You wonder where he gets all his bananas from",
		"He shows you the banana dance. It must be incredibly hard to perform those moves while in a banana costume, but it seems like second nature to him. This guy has talent after all",
		"You ask him about his time with the Derekulians. He looks pale.</br>Apparently they would use him to throw at each other as a prank. Sounds pretty mean",
	];
	changeScene(
		bananaTalks[bananaTalkCount],
		"bananaMan"
	);
	createGoButton("Back","bananaMan",goVisitBananaman);
	if (bananaTalkCount < bananaTalks.length - 1) {
		bananaTalkCount++;
		createGoButton("Hang around","talk",goTalkBananaman);
	} else {
		bananaTalkCount = 0;
	}
}

function goVisitWiseman() {
	changeScene(
		"The wiseman is taking a dirt nap. Just to give you a picture, that means that he has fallen asleep in an ashtray, and that his snoring is creating little clouds of ash.</br>You have a little giggle. He is going to go back to earning you <span style='color:#8b5937'>3 coco/sec</span> in a little while",
		"jerkWiseMan"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	createGoButton("Talk","talk",goWisemanTalk);
}

function goWisemanTalk() {
	var wisemanTalks = [
		"He gets ready to dish out some wisdom: A turd in your pocket is better than two fingers in an electrical socket",
		"Here comes some more wisdom: When life gives you apples, you know it's a great day",
		"Ok, wisdom time: There is no such thing as free coco pops, unless you don't have to pay for them",
		"Had enough? Wisdom: Eat your vegetables or they might turn into galactic empires",
		"More wisdom: Never talk with your mouth full, or you will get kicked in the nuts by a bull",
	];
	changeScene(
		wisemanTalks[wisemanTalkCount],
		"jerkWiseMan"
	);
	createGoButton("Back","jerkWiseMan",goVisitWiseman);
	if (wisemanTalkCount < wisemanTalks.length - 1) {
		wisemanTalkCount++;
		createGoButton("Endure more wisdom","talk",goWisemanTalk);
	} else {
		wisemanTalkCount = 0;
	}
}

function goVisitBrokenRobot() {
	changeScene(
		"The robot is trying to look happy. It makes you <span style='color:#d0ba91'>6 wood/sec</span> from all the dust and dirt in the club",
		"brokenRobot"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	createGoButton("Talk","talk",goBrokenRobotTalk);
}

function goBrokenRobotTalk() {
	var brokenRobotTalks = [
		"You ask the broken robot where it comes from. It looks sad, and says the Derekulians abused most of its memory space for storing funny fart videos. Now there are only vague memories of a life on another planet",
		"It shows you some pictures of a very tall city. It tells you that it is the capital city on its home planet",
		"It tells you that it was created in a place where there were other robots. There was a very friendly AI, that ran the place. Those were good times",
		"It asks you how you became a robot planet. You explain that it's quite a long story",
		"It tells you that it is happy to live here. It's nice to have a fellow robot in this crazy universe"
	];
	changeScene(
		brokenRobotTalks[brokenRobotTalkCount],
		"brokenRobot"
	);
	createGoButton("Back","brokenRobot",goVisitBrokenRobot);
	if (brokenRobotTalkCount < brokenRobotTalks.length - 1) {
		brokenRobotTalkCount++;
		createGoButton("Talk some more","talk",goBrokenRobotTalk);
	} else {
		brokenRobotTalkCount = 0;
	}
}

function goJerkDerek() {
	changeScene(
		"Derek is not being comfortable around all those jerks. The jerks are also keeping their distance.. What's going on here?</br>Some of the jerks bake Derek some muffins. It helps on the overall situation",
		"derek"
	);
	createGoButton("What's the plan Derek?","talk",goJerkDerek2);
}

//D DEREK

function goJerkDerek2() {
	changeScene(
		"Derek yells. He hands you a paper, and explains to you that it's from your old planet friend.</br>The paper has a secret formula for special coco infused stardust. It's supposed to be highly explosive when combined with certain elements found inside of a sun",
		"cocoStardustFormula",
		"goDerekFormula"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	createGoButton("How's the planet doing?","talk",goDerekTalkPlanet);
	createProduct("Coco Infused Stardust");
}

function goDerekTalkPlanet() {
	changeScene(
		"Derek yells out the warmest regards from the planet. He misses you though!</br>If only you could see each other again",
		"derek"
	);
	createGoButton("*Sigh*","talk",goJerkDerek2);
}


//D DEREK SUMMONING DEVICE

function goDerekSummoningDevice() {
	bossBattle = "randomDerek";
	changeScene(
		"The oven/summoning device is ready to go. Pay the technician/baker some gold to get going.</br>Here's a little tip the amount of muffins you bake equals the level of Derek you summon",
		"derekSummoningDevice",
		"goDerekSummoningDevice"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	for (var i = 0; i < muffinValues.length; i++) {
		createSingleProduct("Bake " + muffinValues[i] + " muffins (" + muffinValues[i] + " gold)");
	}
}

function bakeADerek(nr) {
	var derekNr = Math.floor(Math.random() * allDereks.length);
	pickADerek(allDereks[derekNr].navn,muffinValues[nr]);
}

function goSellOven() {
	changeScene(
		"The Bartender pulls you over. He hears that you have started fighting the Derekulians, and he is pretty excited about that. In fact he would like to help you out.</br>You know that Dereks like muffins.. He has come up with a device to summon Dereks for you to train your jerks against. He just needs a bit of funding to complete the project",
		"jerkBartender",
		"goSellOven"
	);
	createGoButton("Back","jerkClub",goJerkClub);
	createProduct("Derek Summoning Device");
}