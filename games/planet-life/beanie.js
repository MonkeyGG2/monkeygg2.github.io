function goMeetBeanie() {
	changeScene(
		"There's a small nebula cloud out in the distance. Looks like there's something behind it",
		"nebula"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Blow the cloud away","nebula",goMeetBeanie2);
}

function goMeetBeanie2() {
	changeScene("Swuuush...","nebulaDissolve");
	setTimeout(function(){
		playSound(soundEffect.beanie);
		changeScene(
			"The cloud dissolves, and behind it you discover a little green planet",
			"beanie"
		);
		createGoButton("Hello","talk",goMeetBeanie3);
	},1000);

}

function goMeetBeanie3() {
	updateState('bBeanieProgress', 1);
	changeScene(
		"The planet breaks open in a warming smile. She is very happy that you got her out of that dense nebula mess. Also her name is Beanie, so that's cool",
		"beanie"
	);
	createGoButton("Hehe","talk",goBeanie);
}


// B BEANIE

function goBeanie() {
	if (state.bBeanieProgress < 7) {
		playSound(soundEffect.beanie);
		changeScene(
			"Beanie is spinning around herself in a very graceful way",
			"beanie",
			"goBeanie"
		);
		createGoButton("Back","burgulon",goNewGalaxy);
		if (state.bBeanieProgress == 1) {
			createSingleProduct("Give 20 coco as a present");
		}
		if (state.bBeanieProgress == 2) {
			createSingleProduct("Give 50 gold as a present");
		}
		// if (state.bBeanieProgress >= 3 && state.bBeanieProgress < 5) {
		// 	createGoButton("Talk to Beanie","beanie",goBeanieTalk);
		// }
		// if (state.bBeanieProgress == 6) {
		// 	createSingleProduct("Buy Tiny Bean (200 coco)");
		// }		
	}
	if (state.bBeanieProgress == 7) {
		changeScene(
			"Oh no! It looks like Beanie got her eyes burned out when you summoned that stupid new sun",
			"beanieBlind"
		);
		createGoButton("Oh no!","talk",goBeanieBlind);
	}
	if (state.bBeanieProgress == 8) {
		goBeanieImagination();
	}
}

function buyTinyBean() {
	var size = "Tiny";
	var colors = ["Purple","Blue","Orange"];
	var color = colors[Math.floor(Math.random() * colors.length)];
	var name = "Tiny " + color + " Bean";

	var image = "beanTiny" + color;
	var thisBean = new bean(size,color,image,name);
	var beanArray = state.bMyBeans;
	beanArray.push(thisBean);
	updateState('bMyBeans', beanArray);

	changeScene(
		"You got: " + name + "!",
		image,
		"boughtABean"
	);
	createGoButton("Cool bean!",image,goBeanie);
}

function goBeanieBlind() {
	changeScene(
		"Beanie doesn't seem to notice you. Maybe she is preoccupied elsewhere",
		"beanieBlind"
	);
	createGoButton("Poke","beanieBlind",goBeaniePoke);
}

function goBeaniePoke() {
	changeScene(
		"You poke Beanie, and..",
		"beanieBlind"
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
			"You have been transported into Beanies imagination. It smells nice in here",
			"beanieImagination"
		);
		createGoButton("Cool!","talk",goBeanieImaginationIntro);
	},2000);
}

function goBeanieImaginationIntro() {
	updateState('bBeanieProgress', 8);
	changeScene(
		"Beanie walks up to you. She's very proud of her imaginary world. Go take a look around! This place is much more awesome than reality",
		"beanieBean"
	);
	createGoButton("Sure!","beanieImagination",goBeanieImagination);
}


//I IMAGINATION

function goBeanieImagination() {
	changeBackground("BG_BeanieImagination");
	changeScene(
		"This is all inside Beanies head. Amazing! There's even a Casino here",
		"beanieImagination",
		"goBeanieImagination"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	// if (state.bAppleProgress == 0) {
	// 	createGoButton("Apple","smallApple",goGetSmallApple);
	// }
	//createGoButton("Beanies Beanshop","beanieBean",goBeanShop);
	createGoButton("Casino Camp","casino",goCasino);
	if (state.bMouladinProgress == 0) {
		createGoButton("Forest","forest",goMeetMouladin);
	} else {
		if (state.bMouladinProgress < 5) {
			createGoButton("Mouladin","mouladin",goMouladin);
		} else {
			createGoButton("Remouladin","appleWorm",goMouladin);
		}
	}
	if (state.bMouladinProgress > 1) {
		createGoButton("Beanie","beanieBean",goBeanieBean);
	}
	if (state.bFriendJerkinson) {
		createGoButton("Jerkinson Crusoe","jerkinsonCrusoe",goJerkinson);
	}
	if (state.bFriendSweatson) {
		createGoButton("Sweatson","sweatson",goSweatson);
	}
	if (state.bFriendAncientDerek) {
		createGoButton("Ancient Derek","ancientDerek",goAncientDerek);
	}
	if (state.bPotato) {
		createGoButton("Space Potato","potato",goPotato);
	}
	if (state.bSlopnax) {
		createGoButton("Slopnax","slopnax",goSlopnaxFriend)
	}
	if (state.bLemonada) {
		createGoButton("Lemonada","lemonada",goLemonada);
	}
	//TODO: Sweatson
}

function goBeanieBean() {
	playSound(soundEffect.beanie);
	changeScene(
		"Hey it's Beanie! She was out for a long walk in her imagination, but now she is back",
		"beanieBean"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	if (!state.bBeanieImaginationUpgrade) {
		createGoButton("What can you do with your imagination?","talk",goBeanieBuyJerkUpgrade);		
	}
	createGoButton("Talk","talk",goBeanieBeanTalk);
}

function goBeanieBuyJerkUpgrade() {
	changeScene(
		"Beanie tells you that her imagination could become much more powerful. If she digested enough stardust she might even be able to imagine <span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> jerks for you",
		"beanieBean",
		"goBeanieUpgradeJerks"
	);
	createGoButton("Back","beanieBean",goBeanieBean);
	createProduct("Upgrade Beanies Imagination");
}

function goBeanieImagineJerks() {
	var squadFullText = "";
	if (countJerksInPile() >= 50) {
		squadFullText = "</br><span style='color:#ff0000'>There are 50 jerks in your squad. It's completely packed!! You need to remove some if you want to buy new jerks</span>";
	}
	changeScene(
		"Beanie tells you that she could try to imagine some <span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> jerks for you.</br>She will need some space rings to fuel her imagination.</br>You have <span style='color:#ffc800'>" + state.bSpaceRings + " space rings</span>" + squadFullText,
		"beanieBean",
		"legendaryJerks"
	);
	createGoButton("Back","jerkClub",goJerkClub);

	if (countJerksInPile() < 50) {
		createSingleProduct("Imagine <span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> jerks (25000 space rings)");
	} else {
		createIconButton(
			"Imagine <span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> jerks (25000 space rings)",
			"images/handling/spaceRing.gif",
			"legendaryJerksBut",
			"",
			"#8c1d1d",
			true,
			"buttons",
			goBeanieImagineJerks,
			0
		);	
	}
}

function goImagineLegendaryJerks() {

		var rarity = 10;
		playSound(soundEffect.cheer);
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
			"Two <span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> jerks pop out:</br>A <span style='color:#2fde10'>" + openedJerks[0].navn + "</span></br>and a <span style='color:#2fde10'>" + openedJerks[1].navn + "</span></br>Which one do you want on your squad?",
			"beanieBean"
		);
		createGoButton("I don't want any of these jerks!","no",goBeanieImagineJerks);
		createGoButton(openedJerks[0].navn + " <span style='color:#ffea00'>(" + openedJerks[0].actionCost + " actions)</span>" + "</br><span style='color:#8a8a8a'>" + openedJerks[0].description + "</span>",openedJerks[0].image,pickAJerk,openedJerks[0],true);
		createGoButton(openedJerks[1].navn + " <span style='color:#ffea00'>(" + openedJerks[1].actionCost + " actions)</span>" + "</br><span style='color:#8a8a8a'>" + openedJerks[1].description + "</span>",openedJerks[1].image,pickAJerk,openedJerks[1],true);

}

function goBeanieBeanTalk() {
	var beanieTalks = [
		"Beanie is excited that you are visiting her in her imagination. She actually likes this place better than reality",
		"She says it's fine if you bring some friends in here. It can be a little lonely with only made up people",
		"She found some vague old memories of a weird lumberjack, and a snobbish empress. She turned them into some mean poker players",
		"The One Eyed Derekulian? She actually has no idea how she came up with that. But she hopes you like the taste of coffee",
		"You ask her about Mouladin, and she seems confused. She didn't come up with anyone like that.. She starts to question your sanity",
		"Beanie is working on imagining her imagination a little bigger. She is thinking of expanding with a few more lakes, and maybe even a city if she has got time",
		"She hopes you like the beans. They are home grown in her imagination",
	];
	changeScene(
		beanieTalks[beanieTalkCount],
		"beanieBean"
	);
	createGoButton("Back","beanieBean",goBeanieBean);
	createGoButton("Stay a little while longer","talk",goBeanieBeanTalk);
	if (beanieTalkCount < beanieTalks.length - 1) {
		beanieTalkCount++;
	} else {
		beanieTalkCount = 0;
	}
}

// function goGetSmallApple() {
// 	changeScene(
// 		"There is a small apple on the ground here. It feels significant",
// 		"smallApple"
// 	);
// 	createGoButton("Back","beanieImagination",goBeanieImagination);
// 	createGoButton("Pick up apple","smallApple",goPickSmallApple);
// }

// function goPickSmallApple() {
// 	updateState('bAppleProgress', 1);
// 	changeScene(
// 		"You pick up the apple. This could be the solution to all your problems!",
// 		"smallApple"
// 	);
// 	createGoButton("Yes!","smallApple",goBeanieImagination);
// }

function goGiveBeanieCoco() {
	updateState('bCoco', state.bCoco + 20);
	changeScene(
		"Beanie is flattered and amused that you would want to gift her coco. She doesn't even like coco.<br/>You have a witty little conversation about how adorable Bret is",
		"beanie",
		"goGiveBeanieCoco"
	);
	createGoButton("Hehe","talk",goGiveBeanieCoco2);
}

function goGiveBeanieCoco2() {
	updateState('bBeanieProgress', 2);
	updateState('bEggProgess', 1);
	changeScene(
		"After your conversation you find an egg on your surface. You didn't even notice Beanie putting it there",
		"egg"
	);	
	createGoButton("Aww sweet","talk",goNewGalaxy);
}

function goGiveBeanieGold() {
	updateState('bGold', state.bGold + 50);
	changeScene(
		"Beanie shakes her head. You know you shouldn't have. Why would a beautiful planet like her even need gold. You are too shy to say anything worthwile, but Beanie doesn't seem to mind",
		"beanie",
		"goGiveBeanieGold"
	);
	createGoButton("Hehe","talk",goGiveBeanieGold2);
}

function goGiveBeanieGold2() {
	updateState('bBeanieProgress', 3);
	changeScene(
		"Beanie whispers an ancient secret to Bret, and he is like totally. You should talk to him and hear what's up",
		"bret"
	);	
	createGoButton("Right","talk",goNewGalaxy);
}

//C CASINO

function goCasino() {
	changeBackground("BG_CasinoCamp");
	changeScene(
		"There's a little camp near the forest. It's apparently a cosy little casino.</br>Maybe you can win something here",
		"casino"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	createGoButton("One Eyed Derekulian Roulette","rouletteTent",goRoulette);
	createGoButton("Wooden Poker","pokerTable",goPoker);
}

//R ROULETTE

function goRoulette() {
	changeScene(
		"You enter a stuffy tent. Inside sits an old one eyed Derekulian, staring you down with his lonely eye. Wanna play a game!?",
		"derekulianRoulette",
		"goRoulette"
	);
	createGoButton("Back","casino",goCasino);
	createGoButton("Are there rules?","talk",goRouletteRules);
	createSingleProduct("Bet 50 gold");
	createSingleProduct("Bet 500 gold");
	createSingleProduct("Bet 1000 gold");
}

function goRouletteRules() {
	changeScene(
		"The old Derekulian laughs like a car that won't start. If you find the eye, you lose the gold. If you don't you get richer. Try not to get greedy, hehehehe!",
		"derekulianRoulette",
		"goRouletteRules"
	);
	createGoButton("Sounds simple","talk",goRoulette);
}

function goPlayRoulette(amount) {
	//


	(soundEffect.buy);
	rouletteBet = amount;
	changeScene(
		"You put your <span style='color:#fcba03'>" + amount + " gold</span> on the table. Before you know it, 3 cups of coffee appear on the table. You clearly have to drink one of them. Which do you choose?",
		"derekulianRouletteCups",
		"goPlayRoulette"
	);
	createGoButton("First cup","coffeeCup",goDrinkCoffee,1);
	createGoButton("Second cup","coffeeCup",goDrinkCoffee,2);
	createGoButton("Third cup","coffeeCup",goDrinkCoffee,3);
}

function goDrinkCoffee(cup) {
	playSound(soundEffect.thirsty);
	changeScene(
		"You carefully chuck down the boiling hot coffee, afraid what you might find in the depths. As you drink you discover..",
		"coffeeCup"
	);
	createGoButton("Enough with the suspense!","talk",goFinishCup,cup);
}

function goFinishCup(cup) {
	var eyeCup = Math.round(Math.random() * 3);
	if (eyeCup == cup) {
		playSound(soundEffect.shock);
		rouletteBet = 0;
		changeScene(
			"..There's <span style='color:#ff1500'>A DISGUSTING EYE</span> at the bottom of the cup! You almost swallowed it. How gross!</br>Oh and you lost all the gold you bet. How unfortunate!",
			"coffeeCupEye"
		);
		createGoButton("Terrible coffee!","coffeeCup",goRoulette);
	} else {
		playSound(soundEffect.heal);
		rouletteBet = Math.round(rouletteBet + (rouletteBet / 2));
		changeScene(
			"..There's <span style='color:#00ff11'>NO DISGUSTING EYE</span> in your cup! Just how you like your coffee. And hey, you won more gold!",
			"coffeeCupEmpty"
		);
		createGoButton("Great coffee!","coffeeCup",goEvaluateGamblingHabits);
	}
}

function goEvaluateGamblingHabits() {
	changeScene(
		"You now have <span style='color:#fcba03'>" + rouletteBet + " gold</span>. Can you control your gambling, or are you going to be a raging ludomaniac?",
		"gold"
	);
	if (rouletteBet >= 100000 && !state.bRouletteCubeFound) {
		createGoButton("Claim special reward","wormCube",goFindRouletteCube);
	}
	createGoButton("Leave with <span style='color:#fcba03'>" + rouletteBet + " gold</span>","gold",goLeaveRoulette);
	createGoButton("I'm not done here. More coffee!","coffeeCup",goPlayRoulette,rouletteBet);
}

function goLeaveRoulette() {
	playSound(soundEffect.buy);
	updateState('bGold', state.bGold + rouletteBet);
	var lolliCount = Math.ceil(rouletteBet/100);
	changeScene(
		"You get <span style='color:#fcba03'>" + rouletteBet + " gold.</span></br>And then the bull hands you <span style='color:#ff0000'>" + lolliCount + " lollipops</span> as a thanks for spending time with him.</br>You leave the tent, completely high on caffeine",
		"rouletteTent"
	);
	rouletteBet = 0;
	updateState('bLollipops', state.bLollipops + lolliCount);
	createGoButton("Phew!","talk",goCasino);
}

function goFindRouletteCube() {
	updateState('bRouletteCubeFound', true);
	updateState('wormCubes', state.wormCubes + 1);
	if (state.tTerrariumFound) {
		changeScene(
			"Ok wow! Your special reward was <span style='color:#ff00bb'>a Worm Cube</span></br>Let's put it in the Time Terrarium",
			"wormCube"
		);
	} else {
		changeScene(
			"Ok wow! Your special reward was <span style='color:#ff00bb'>a Worm Cube</span></br>You don't know what it is, but you have a feeling that you will need it in another life. Better keep it safe",
			"wormCube"
		);
	}
	createGoButton("Fantastic!","wormCube",goEvaluateGamblingHabits);
}


//M MOULADIN

function goMeetMouladin() {
	changeScene(
		"In the forest there is a small clearing",
		"forest"
	);
	createGoButton("Enter clearing","forest",goMeetMouladin2);
}

function goMeetMouladin2() {
	playSound(soundEffect.mouladin);
	changeScene(
		"In the clearing there's a wormlike thing sitting on a rock, meditating",
		"mouladin"
	);
	createGoButton("Hello?","talk",goMeetMouladin3);
}

function goMeetMouladin3() {
	changeScene(
		"The worm doesn't open his eyes as he speaks to you. His name is Mouladin, and he is busy gathering mental power. He has travelled from the past to be born in the future, and he has chosen Beanie's imagination as his womb. Whatever that means",
		"mouladin"
	);
	createGoButton("Can I help?","talk",goMeetMouladin4);
}

function goMeetMouladin4() {
	updateState('bMouladinProgress', 1);
	changeScene(
		"The worm smiles. If you could get him some lollipops, that would be great.</br>You wonder what lollipops are going to do for him",
		"mouladin"
	);
	createGoButton("Sure sure","talk",goBeanieImagination);
}

var mouladinImages = [
	"invisibleImg",
	"mouladin",
	"mouladin2",
	"mouladin3",
	"mouladin4",
	"appleWorm"
];

function goMouladin() {
	var moderateLollipopAmount;
	var lolliesLeftToGive = lolliGoals[state.bMouladinProgress] - state.bMouladinLollipops;
	if (state.bLollipops > lolliesLeftToGive) {
		moderateLollipopAmount = lolliesLeftToGive;
	} else {
		moderateLollipopAmount = state.bLollipops;
	}
	if (state.bMouladinProgress < 5) {
		playSound(soundEffect.mouladin);
		changeScene(
			"Mouladin has been expecting you. He has <span style='color:#ff0000'>" + state.bMouladinLollipops + "/" + lolliGoals[state.bMouladinProgress] + " lollipops,</span> but that is not enough!</br>Bring him some more",
			mouladinImages[state.bMouladinProgress]
		);
	} else {
		playSound(soundEffect.worm);
		changeScene(
			"Remouladin is floating around in his apple.</br>His appetite for lollipops have been filled. But he is willing to trade you some stardust for them",
			mouladinImages[state.bMouladinProgress]
		);
	}
	createGoButton("Back","beanieImagination",goBeanieImagination);
	if (state.bMouladinProgress >= 5) {
		if (state.wormCubes > 0) {
			createGoButton("How many Worm Cubes do I have?","wormCube",goCheckWormCubes,"burgulon");
		}
		createGoButton("Trade <span style='color:#ff0000'>" + state.bLollipops + " lollipops</span> for <span style='color:#00fff7'>" + (state.bLollipops * 10) + " stardust</span>","stardust",goTradeLollies);	
	} 
	if (state.bMouladinUpgradePoints > 0) {
		createGoButton("Feel a strange sensation","burgulon",goMouladinUpgrade,true);
	} else if (checkMouladinUpgrades() > 0){
		createGoButton("Feel your powers","burgulon",goMouladinUpgrade,false);
	}
	if (state.bLollipops > 0 && state.bMouladinProgress < 5) {
		createGoButton("Give " + moderateLollipopAmount + " lollipops","Lollipop",goGiveLollipops,moderateLollipopAmount);
	}
	createGoButton("Talk","talk",goMouladinTalk);
}

function goTradeLollies() {
	changeScene(
		"You hand Remouladin all your <span style='color:#ff0000'>" + state.bLollipops + " lollipops</span> and get <span style='color:#00fff7'>" + (state.bLollipops * 10) + " stardust</span> in exchange",
		"stardust"
	);
	createGoButton("Thanks!","talk",goMouladin);
	updateState('bStardust', state.bStardust + (state.bLollipops * 10));
	updateState('bLollipops', 0);
}

function checkMouladinUpgrades() {
	var mouladinUpgradeCount = 0;
	for (var i = 0; i < state.bMouladinUpgrades.length; i++) {
		if (state.bMouladinUpgrades[i]) {
			mouladinUpgradeCount++;
		}
	}
	return mouladinUpgradeCount;
}

function goGiveLollipops(amount) {
	changeScene(
		"You give Mouladin your <span style='color:#ff0000'>" + amount + " lollipops.</span></br>He smiles slightly with a soft hum",
		"Lollipop" 
	);
	updateState('bMouladinLollipops', state.bMouladinLollipops + amount);
	updateState('bLollipops', state.bLollipops - amount);
	if (state.bMouladinLollipops >= lolliGoals[state.bMouladinProgress]) {
		createGoButton("You are welcome","talk",goEvolveMouladin);	
	} else {
		createGoButton("You are welcome","talk",goMouladin);	
	}
}

function goEvolveMouladin() {
	var mTexts = [
		"",
		"",
		"Mouladin starts to float around in the air. You seem to have largely underestimated the power of lollipops!",
		"You can feel the energy in the air around Mouladin. You wonder what he will be able to with those powers, except for making lollipops float around him",
		"Mouladin opens his eyes. His immense wisdom is beaming out! It looks pretty funny",
		"",
	];

	changeScene(
		"What? Mouladin is evolving after eating all the <span style='color:#ff0000'>lollipops!</span>",
		mouladinImages[state.bMouladinProgress]
	);
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene(
			"",
			"explosion"
		);
		updateState('bMouladinProgress', state.bMouladinProgress + 1);
	},4000);
	setTimeout(function(){
		updateState('bMouladinLollipops', 0);
		updateState('bMouladinUpgradePoints', state.bMouladinUpgradePoints + 1);
		if (state.bMouladinProgress < 5) {
			changeScene(
				mTexts[state.bMouladinProgress],
				mouladinImages[state.bMouladinProgress]
			);
			createGoButton("Cool!","talk",goMouladin);
		} else {
			changeScene(
				"...",
				"apple"
			);
			setTimeout(function(){
				changeScene(
					"...",
					"appleToWorm"
				);
			},1500);
			setTimeout(function(){
				changeScene(
					"...",
					"appleWorm"
				);
				createGoButton("Hello?","talk",goWelcomeRemouladin);
			},2000);			
		}
	},4500);
}

function goMouladinTalk() {
	var mouladinTalks = [
		"You realize that Mouladin has a strange relationship with time.",
		"Apparently he has already lived a thousand years, but at the same time he was just born quite recently",
		"You have a strong urge to help him on his quest to become a space god. But you are still unclear on what lollipops have to do with that.",
		"You get a feeling that he can help you get more powerful.",
		"You now know that the goal is to think about absolutely nothing. It's actually quite difficult.",
		"You feel that Mouladin is related to many beings throughout the universe. You don't even wonder how",
	];
	changeScene(
		"Mouladin is looking peaceful.</br>" + mouladinTalks[mouladinTalkNr],
		mouladinImages[state.bMouladinProgress]
	);
	createGoButton("Back",mouladinImages[state.bMouladinProgress],goMouladin);
	createGoButton("Interesting","talk",goMouladinTalk);
	mouladinTalkNr++;
	if (mouladinTalkNr == mouladinTalks.length) {
		mouladinTalkNr = 0;
	}
}

function goMouladinUpgrade(upgrade) {

	var mentalPowers = [
		"An extra jerk action every turn",
		"Draw an extra jerk every turn",
		"Beans are twice as powerful",
		"Gnomes are twice as sneaky"
	];

	var mentalPowersImages = [
		"jerkRegular",
		"jerkomancer",
		"beanHuge",
		"tipToesTyler"
	];

	if (upgrade) {

		changeScene(
			"Mouladin wants to share his newly gained mental powers with you. He shows you a menu card of things he can do for you. Which one do you choose?",
			mouladinImages[state.bMouladinProgress]
		);
		createGoButton("Back",mouladinImages[state.bMouladinProgress],goMouladin);
		
		for (var i = 0; i < mentalPowers.length; i++) {
			if (state.bMouladinUpgrades[i] == false) {
				createGoButton(mentalPowers[i],mentalPowersImages[i],goMentalPower,i);
			} else {
				createIconButton(
					mentalPowers[i],
					"images/handling/" + mentalPowersImages[i] + ".gif",
					"full" + mentalPowers[i] + "But",
					"",
					"#278227",
					true,
					"buttons",
					goMentalPower,
					i
				);
			}
		}

	} else {

		changeScene(
			"You feel calm in the presence of Mouladin. You reflect upon your powers",
			"burgulon"
		);
		createGoButton("Back",mouladinImages[state.bMouladinProgress],goMouladin);
		
		for (var i = 0; i < mentalPowers.length; i++) {
			if (state.bMouladinUpgrades[i] == true) {
				createGoButton(mentalPowers[i],mentalPowersImages[i],goReviewMentalPower,i);
			} else {
				// createIconButton(
				// 	mentalPowers[i],
				// 	"images/handling/" + mentalPowersImages[i] + ".gif",
				// 	"full" + mentalPowers[i] + "But",
				// 	"",
				// 	"#8c1d1d",
				// 	true,
				// 	"buttons",
				// 	goMentalPower,
				// 	i
				// );
			}
		}
	}

	var mentalDescriptions = [
		"When you fight against Dereks, you get to an extra jerk action every turn.",
		"When you fight against Dereks, you get to draw an extra jerk every turn.",
		"When you fuel your core with beans, they give you twice as much stardust.",
		"When you go into the Ancient Dungeon, your gnome is twice as sneaky."
	];

	function goMentalPower(nr) {
		changeScene(
			mentalDescriptions[nr] + "</br></br>Do you want Mouladin to grant you this power?",
			mentalPowersImages[nr]
		);
		createGoButton("No","no",goMouladinUpgrade);
		createGoButton("Yes","yes",goMouladinUpgradeConfirm,nr);
	}

	function goMouladinUpgradeConfirm(nr) {
		updateArrayState('bMouladinUpgrades', nr, true);
		updateState('bMouladinUpgradePoints', state.bMouladinUpgradePoints - 1);
		upgradeAnimation("UNLIMITED, POWEEER!",mentalPowersImages[nr],goMouladin);
		if (nr == 0) {
			updateState('bJerkActions', 4);
		}
		if (nr == 1) {
			updateState('bJerksPerTurn', state.bJerksPerTurn + 1);
		}
	}

	function goReviewMentalPower(nr) {
		changeScene(
			mentalDescriptions[nr],
			mentalPowersImages[nr]
		);
		createGoButton("Back","burgulon",goMouladinUpgrade,false);
	}

}

function goWelcomeRemouladin() {
	playSound(soundEffect.worm);
	changeScene(
		"You can tell that, this is not really Mouladin anymore.. There is something new and godly about this worm in an apple.</br>You decide to call him Remouladin. You have a vague feeling like you have met him before, but that can't be. He just got born out of eating all those lollipops",
		"appleWorm",
	);
	createGoButton("You are Remouladin","talk",goNameRemouladin);
}

function goNameRemouladin() {
	changeScene(
		"Remouladin nods in approval. He also hands you a new pair of fashionable planetary sunglasses. You are going to need those if you ever hope to take on the self absorbed sun",
		"appleWorm"
	);
	createGoButton("Thanks!","talk",goMouladin);
}


//F FRIENDS

function goPotato() {
	changeScene(
		"The potato is sitting in the grass. He is imagining <span style='color:#ffc800'>1 gold</span> per second for you. He is almost crying",
		"potato"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	createGoButton("What's the matter?","talk",goPotatoAsk);
}

function goPotatoAsk() {
	changeScene(
		"It seems to be a touchy subject for him. He starts wailing again",
		"potatoCrying"
	);
	createGoButton("There there","talk",goPotato);
}

function goSlopnaxFriend() {
	changeScene(
		"Slopnax is trying to meditate. But somehow wooden logs keep popping out of his ears.</br>He is probably doing it wrong, but you are getting <span style='color:#d0ba91'>3 wood</span> per second",
		"slopnax"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	createGoButton("Talk","talk",goSlopnaxFriendTalk);
}

function goSlopnaxFriendTalk() {
	if (slopnaxTalkCount == 2 && state.bCoco >= 50) {
		updateState('bCoco', state.bCoco - 50);
	} else if (slopnaxTalkCount == 2) {
		slopnaxTalkCount++;
	}
	var slopnaxTalks = [
		"He tells you that he is very happy to finally get a vacation from that stressful pirate life",
		"He is complaining about meditating. Why is it so hard to think of nothing. Thoughts of loot and coco keeps popping into his mind",
		"Slopnax <span style='color:#8b5937'>eats 50 of your coco pops.</span> It is true what they say about pirates. They have no manners!",
		"Slopnax is munching on some coco pops. He shouts WHAT over his unbearable crunching sounds",
		"Slopnax starts to rant and yell about Jack. Apparently he was a terrible boss, and his parties sucked",
		"You try to act like you are Jack, making your voice all deep and silly. Slopnax almost gets a heart attack from the scare you gave him. But then he realizes that it was just you and laughs a roaring laughter",
	];
	changeScene(
		slopnaxTalks[slopnaxTalkCount],
		"slopnax"
	);
	createGoButton("Back","slopnax",goSlopnaxFriend);
	if (slopnaxTalkCount < slopnaxTalks.length - 1) {
		slopnaxTalkCount++;
		createGoButton("Talk some more","talk",goSlopnaxFriendTalk);
	} else {
		slopnaxTalkCount = 0;
	}
}

function goLemonada() {
	changeScene(
		"Lemonada is rolling around in the soft grass. With a relaxed smile he performs a rain dance that makes <span style='color:#8b5937'>6 coco</span> fall from the sky per second",
		"lemonada"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	createGoButton("Talk","talk",goLemonadaTalk);
}

function goLemonadaTalk() {
	var lemonadaTalks = [
		"Lemonada smiles at you. Maybe he is not used to talking. He did spend quite a while with a worm in his mouth after all",
		"Lemonada smiles. He shows you some photos from his past",
		"It turns out that he used to be a lemon shaped planet. He had it all going on for him",
		"He used to hang around near that big space broccoli. It seemed a pretty decent place in the universe",
		"But then it turned out that the broccoli had a major jerk infestation going on, and he caught some of it too",
		"It took several years for some Derekulian mercenaries to clear out the jerks from his lemon dungeons",
		"Then that foul Mayonada trapped him with her evil godly powers. He spent a few millenia serving as a home for her",
	];
	changeScene(
		lemonadaTalks[lemonadaTalkCount],
		"lemonada"
	);
	createGoButton("Back","lemonada",goLemonada);
	if (lemonadaTalkCount < lemonadaTalks.length - 1) {
		lemonadaTalkCount++;
		createGoButton("Stick around","talk",goLemonadaTalk);
	} else {
		lemonadaTalkCount = 0;
	}
}

function goJerkinson() {
	changeScene(
		"Jerkinson is happy to be back in civilization again. He has no clue that he is inside someones imagination",
		"jerkinsonCrusoe"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	if (!state.bJerkinsonRecruited) {
		createGoButton("Ask favor","talk",goRecruitJerkinson);
	}
	createGoButton("Talk","talk",goTalkJerkinson);
}

function goTalkJerkinson() {
	var jerkinsonTalks = [
		"Jerkinson Crusoe is happy to be back in civilization. He doesn't appear to get that he is in somebody elses imagination. There's a casino here after all",
		"He starts to cry. Apparently he lost all his gold to the Derekulian Roulette. Then he starts to shake.. You don't know if it's the memory of the eye in the coffee cup or just too much coffee",
		"Jerkinson finds a <span style='color:#ff0000'>sticky lollipop</span> stuck in his beard. Here, you can have it!",
		"Jerkinson laughs embarrassed when you ask him to explain his sunburn",
		"He shouts at you in a hoarse voice. It must be the trauma from being stuck in a dungeon for too long",
		"Jerkinson tells you that he used to play on a jerk volleyball team",
	];
	changeScene(
		jerkinsonTalks[jerkinsonTalkCount],
		"jerkinsonCrusoe"
	);
	createGoButton("Back","jerkinsonCrusoe",goJerkinson);
	if (jerkinsonTalkCount == 2) {
		updateState('bLollipops', state.bLollipops + 1);
	}
	if (jerkinsonTalkCount < jerkinsonTalks.length - 1) {
		jerkinsonTalkCount++;
		createGoButton("Talk more","talk",goTalkJerkinson);
		if (jerkinsonTalkCount == 2) {
			if (Math.random() > 0.25) {
				jerkinsonTalkCount++;
			}
		}
	} else {
		jerkinsonTalkCount = 0;
	}
}

function goRecruitJerkinson() {
	updateState('bJerkinsonRecruited', true);
	newJerkToPile("Jerkinson Crusoe");
	changeScene(
		"Jerkinson stops you mid sentence. He knows you want him on your team.</br>It doesn't seem like you have a say in the matter. Jerkinson Crusoe joins your jerk squad",
		"jerkinsonCrusoe"
	);
	createGoButton("Well ok","talk",goJerkinson);
}

function goSweatson() {
	if (!state.bPlanetBack) {
		changeScene(
			"Sweatson is making your floor all wet. Good boy!</br>He reminds you of your old planet buddy, and you feel a little sad",
			"sweatson"
		);
	} else {
		changeScene(
			"Sweatson is making your floor all wet. Good boy!</br>He reminds you of your planet buddy, and you feel happy that he is close by again",
			"sweatson"
		);
	}
	createGoButton("Back","beanieImagination",goBeanieImagination);
	createGoButton("Talk","talk",goSweatsonTalk);
	createGoButton("Try to remember","planet",goSweatsonPlanet);
}

function goSweatsonPlanet() {
	changeScene(
		"Sweatson reminds you of how fun it was being a planet. He can take you back there for a while if you want?",
		"sweatson"
	);
	createGoButton("Maybe later","burgulon",goSweatson);
	createGoButton("That would be nice","planet",goBackToPlanet);
}

function goBackToPlanet() {
	changeBackground("BG_FriendHouse");
	updateState('burgulonTime', false);
	goFriend(state.friends[1]);
}

function goSweatsonTalk() {
	var sweatsonTalks = [
		"Sweatson is creating a new lake in Beanies imagination from all his sweat",
		"Sweatson thinks it's funny that you are training jerks to fight Dereks. You remember back when you were a robot and helped train Derek to fight jerks",
		"Sweatson asked why WIFY made you into a planet. And if that was supposed to be a bad thing.. You are still trying to figure out how you feel about this",
		"Sweatson is trying to comfort you. He pretends that you are just as fine as a planet as when you were a robot. You appreciate him lying to make you feel better. It's just not the same being a planet",
		"You throw a ball into orbit. Sweatson gets all sweaty just from thinking about fetching it"
	];
	changeScene(
		sweatsonTalks[sweatsonTalkCount],
		"sweatson"
	);
	createGoButton("Back","sweatson",goSweatson);
	if (sweatsonTalkCount < sweatsonTalks.length - 1) {
		sweatsonTalkCount++;
		createGoButton("Good boy!","talk",goSweatsonTalk);
	} else {
		sweatsonTalkCount = 0;
	}
}

function goAncientDerek() {
	changeScene(
		"The ancient Derek is enjoying the sunshine. He seems to enjoy this last chapter of his life",
		"ancientDerek"
	);
	createGoButton("Back","beanieImagination",goBeanieImagination);
	if (!state.bDoubleRings) {
		createGoButton("Hear secret","talk",goAncientDerekSecret);
	}
	createGoButton("Listen","talk",goAncientDerekTalk);
}

function goAncientDerekSecret() {
	updateState('bDoubleRings', true);
	changeScene(
		"You lean in and hear an ancient Derekulian secret: Dereks keep extra space rings in their socks. Keep that in mind next time you fight a Derek!",
		"ancientDerek"
	);
	createGoButton("Hey thanks!","talk",goAncientDerek);
}

function goAncientDerekTalk() {
	var ancientDerekTalks = [
		"The ancient derek uses a full minute to clear his throat. It's annoying beyond words",
		"He tells you that Derekulians are also just fine with being called Dereks. But back when he was a kid, you had to say Derekulians or people would just think you are talking about THE Derek. But that's a long time ago now",
		"The original Derek was the one that brought the Derekulians to power. There would be no Derekulus X without him",
		"You try to tell him that you know Derek, but he seems to have lost his ability to hear",
		"You ask what happened to Derek since he ended up in a freezer. He just smiles at you and says, yes he would like a Breezer. He prefers the orange taste"
	];
	changeScene(
		ancientDerekTalks[ancientDerekTalkCount],
		"ancientDerek"
	);
	createGoButton("Back","ancientDerek",goAncientDerek);
	if (ancientDerekTalkCount < ancientDerekTalks.length - 1) {
		ancientDerekTalkCount++;
		createGoButton("Stay a while, and listen","talk",goAncientDerekTalk);
	} else {
		ancientDerekTalkCount = 0;
	}
}