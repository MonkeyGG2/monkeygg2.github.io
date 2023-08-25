
var H_Asteroid = "You reach the huge potato-shaped chunk of asteroid. Nothing is there except for a small robot";

var H_Asteroid2 = "You reach the huge potato-shaped chunk of asteroid. Nothing is there.. at all";

var H_Asteroid3 = "You reach the huge potato-shaped chunk of asteroid. No wait. It's actually a giant Coco Pops!";

function goAsteroid() {
	if (!state.strawPrice[4]) {
		changeScene(H_Asteroid,"asteroid","asteroid_st");
	} else {
		changeScene(H_Asteroid,"asteroidWStraw","asteroid_st");
	}

	createGoButton("Back","planet",goRoot);

	if (!state.pickedRobot) {
		createGoButton("Talk to the robot","burger",goRobot);
		newHandling(H_Asteroid);
	} else if (state.cocoPopsAsteroid) {
		if (state.strawPrice[4]) {
			newHandling("You reach the huge potato-shaped chunk of asteroid. No wait. It's actually a giant Coco Pops!\n\
Your automatic wooden straw is sucking out delicious coco at a rate of <span style='color:#38b200'>" + state.strawCocoPS + " coco per second</span>. Delightful!");
		} else {
			newHandling(H_Asteroid3);
		}
	} else {
		newHandling(H_Asteroid2)
	}
	if (state.cocoPopsAsteroid && !state.strawPrice[4]) {
		createBuildButton("Automatic Swirly Straw","swirlyStraw","Sucks up 1 coco/sec",buildStraw,"strawBut","Build",state.strawPrice);
		if (!affordCheck(state.strawPrice)) {
			document.getElementById("strawBut").disabled = true;
		}
	} 
	if (state.strawNr < strawPrices.length && state.strawPrice[4]) {
		createBuildButton("Upgrade swirly straw","swirlyStraw","Will suck " + strawPrices[state.strawNr][4] + " coco/sec",upgradeStraw,"upgradeStrawBut","Upgrade",strawPrices[state.strawNr]);
	}
}

function upgradeStraw() {
	buy(strawPrices[state.strawNr]);
	updateState('cocoPS',state.cocoPS - state.strawCocoPS);
	updateState('strawCocoPS',strawPrices[state.strawNr][4]);
	updateState('cocoPS',state.cocoPS + state.strawCocoPS);
	if (strawPrices.length > state.strawNr) {
		updateState('strawNr', state.strawNr + 1);
	}
	upgradeAnimation("Suck that coco!","swirlyStraw",goAsteroid);
}

var H_Robot = "The robot seems happy to see you. It says that it was just enjoying the sunshine and that its name is Burger. It tells you that it can't remember much of anything since all of its memory was on a USB stick, and somehow it has gotten that USB stick misplaced. How unfortunate!"

function goRobot() {
	playSound(soundEffect.burger);
	changeScene(H_Robot,"burger","robot_asteroid_st");
	createGoButton("Take Burger with you","burger",bringBurger);
	createGoButton("Leave Burger on the asteroid","asteroid",goRoot);
}

if (hasBridge()) {
	var H_BringBurger = "Burger chirps happily as he softly lands on your surface.</br>He tells you to enjoy this first FREE part of the game - You are going to learn secrets about freezers, build a school, and even impress a real god.";
} else {
	var H_BringBurger = "Burger chirps happily as he softly lands on your surface.";
}

function bringBurger() {
	playSound(soundEffect.burger);
	changeScene(H_BringBurger,"burger","bring_robot_asteroid_st");
	updateState('pickedRobot', true);
	createGoButton("Ok!","burger",goRoot);
}

function goPlanetud() {
	changeScene("The rather stupid looking planet is avoiding eye contact with you. After the initial shyness it offers to trade. After all it's not every day you meet a fellow planet","planetud","planetud");
	updateState('planetudFound', true);
	createGoButton("Back","planet",goRoot);
	createGoButton("Talk","talk",goPlanetudTalk);
	createGoButton("Buy wood","wood",planetudTrade,0);
	createGoButton("Buy gold","gold",planetudTrade,1);
	createGoButton("Buy coco","coco",planetudTrade,2);
	if (state.monsterDungeonsCompleted) {
		createGoButton("Sell stardust","stardust",goPlanetudSellStardust);
	}
}

function goPlanetudSellStardust() {
	changeScene(
		"What do you want to buy for <span style='color:#00edff'>10</span> stardust?",
		"planetud",
		"goPlanetudSellStardust"
	);
	createGoButton("Back","planetud",goPlanetud);
	createSmallBuildButton(
		"Buy 1000 wood",
		"wood",
		"woodStardustBut",
		stardustTrade,
		0
	);
	createSmallBuildButton(
		"Buy 500 gold",
		"gold",
		"goldStardustBut",
		stardustTrade,
		1
	);
	createSmallBuildButton(
		"Buy 1000 coco",
		"coco",
		"cocoStardustBut",
		stardustTrade,
		2
	);
}

function stardustTrade(nr) {
	playSound(soundEffect.buy);
	var resources = ["wood","gold","coco"];
	changeScene(
		"It's a deal!",
		resources[nr],
		"stardustTrade"
	);	
	var value;
	if (nr == 0) {
		updateState('wood', state.wood + 1000);
	} else if (nr == 1) {
		updateState('gold', state.gold + 500);
	} else if (nr == 2) {
		updateState('coco', state.coco + 1000);
	}
	updateState('stardust', state.stardust - 10);
	setTimeout(function() {
		goPlanetudSellStardust();
	},500);
}

function goPlanetudTalk() {
	var h = "The planet looks stupidly around in confusion for a bit.<br/>";
	var planetudTalks = [
		"He is too shy to talk.",
		"He tells you that his real name actually is Planetud. But the developer thought it sounded too stupid, so now he's just called Stupid Looking Planet.",
		"He tries to say something but the words come out in the wrong order. You wonder if he even knew what he was going to say.",
		"He tells you that he went to business college not far from here, and learned how to overprice things. He seems proud.",
		"He chokes on a piece of continental crust.",
		"He tells you that he actually met Burger first, but they didn't really hit it off."
	];
	h += planetudTalks[planetudTalkCount];
	planetudTalkCount++;
	if (planetudTalkCount == planetudTalks.length) {
		planetudTalkCount = 0;
	}
	h += "<br/>He tries with a smile, but quickly regrets it";
	changeScene(h,"planetud","planetudTalk");
	createGoButton("Back","planetud",goPlanetud);
	createGoButton("More talk","talk",goPlanetudTalk);
}

function planetudTrade(buy) {
	var h = "What do you want to give in exchange for " + pBuyAmount + " " + state.planetudPrices[buy][3] + "?";
	changeScene(h,state.planetudPrices[buy][3],"planetudTrade");
	pBuying = buy;
	function createButtons() {
		clearButtons();
		createGoButton("Back","planetud",goPlanetud);
		for (var i = 0; i < state.planetudPrices.length; i++) {
			if (i == buy) {
				if (buy != 0) {
					createSmallBuildButton("Exchange for " + state.planetudPrices[i][0] + " wood","wood","exchangeWoodBut",doTrade,0);
				}
				if (buy != 1) {
					createSmallBuildButton("Exchange for " + state.planetudPrices[i][1] + " gold","gold","exchangeGoldBut",doTrade,1);
				}
				if (buy != 2) {
					createSmallBuildButton("Exchange for " + state.planetudPrices[i][2] + " coco","coco","exchangeCocoBut",doTrade,2);
				}
			}
		}
	}
	createButtons();
	function doTrade(sell) {
		updateState(state.planetudPrices[buy][3], findResource(buy) + pBuyAmount);
		updateState(state.planetudPrices[sell][3], findResource(sell) - state.planetudPrices[buy][sell]);
		if (buy == 0) {
			var newPlanetudPrices1 = state.planetudPrices;
			newPlanetudPrices1[1][0] -= pIncr;
			newPlanetudPrices1[2][0] -= pIncr;
			updateState('planetudPrices',newPlanetudPrices1);
		} 
		if (buy == 1) {
			var newPlanetudPrices2 = state.planetudPrices;
			newPlanetudPrices2[0][1] -= pIncr;
			newPlanetudPrices2[2][1] -= pIncr;
			updateState('planetudPrices',newPlanetudPrices2);
		}
		if (buy == 2) {
			var newPlanetudPrices3 = state.planetudPrices;
			newPlanetudPrices3[1][2] -= pIncr;
			newPlanetudPrices3[0][2] -= pIncr;
			updateState('planetudPrices',newPlanetudPrices3);
		}
		for (var i = 0; i < state.planetudPrices.length; i++) {
			for (var j = 0; j < 3; j++) {
				if (state.planetudPrices[i][j] < pLowerLimit) {
					var newPlanetudPrices4 = state.planetudPrices;
					state.planetudPrices[i][j] = pLowerLimit;
					updateState('planetudPrices',newPlanetudPrices4);
				}
			}
		}
		var newPlanetudPrices = state.planetudPrices;
		newPlanetudPrices[buy][sell] += pIncr;
		updateState('planetudPrices',newPlanetudPrices);
		changeArt("explosion");
		playSound(soundEffect.buy);
		newHandling("Pleasure doing business!");
		createButtons();
		setTimeout(function() {
			newHandling(h);
			changeArt(state.planetudPrices[buy][3]);
		},500);
	}
}

function goFreezer() {
	changeScene("Are you sure you want to open the freezer? Really?","freezer","freezer");
	createGoButton("Yes!","freezer",goDerek);
}

function goDerek() {
	changeScene("OH BOY!","explosion","freezerExplosion");
	playSound(soundEffect.explosion);
	setTimeout(function() {
		playSound(soundEffect.derek);
		changeScene("It's a furious bullman. Somebody clearly wanted this guy to cool it! He screams that his name is Derek, and that he is really cold and really pissed. However, he joins your space quest","derek","snatchedDerek");
		createGoButton("Ok!","derek",goRoot);
		updateState('derekDefrosted', true);
	},500);
}