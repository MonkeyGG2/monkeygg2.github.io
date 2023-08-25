function broccoli() {
	changeScene("","invisibleImg","broccoli");
	setTimeout(function() {
		playSound(soundEffect.explosion);
		changeScene("","explosion");
	},1000);
	setTimeout(function() {
		changeScene("","spaceBroccoli");
	},1500);
	setTimeout(function() {
		changeScene(
			"It looks like you have arrived right next to a giant space broccoli. What a marvelous sight!",
			"spaceBroccoli"
		);
		createGoButton("Check it out","spaceBroccoli",checkBroccoli);
	},2000);
}

function checkBroccoli() {
	changeScene(
		"Amazing! There is a whole world on the surface of the broccoli. Is that Loch Juice? And over there - a castle made entirely of coco. Oh, and could that be the fabled Tall Blue Forest there in the distance?</br></br>We have to discover this new world!",
		"spaceBroccoliClose"
	);
	createGoButton("Take a closer look","spaceBroccoliClose",burgerNervous);
}

function burgerNervous() {
	changeScene(
		"You can hear Burger chirping nervously. Maybe he is freaking out about this broccoli place.. He tells you that you just left the coco asteroid and Stupid Looking Planet behind. But you can tell that there is also something else nagging him",
		"burger",
		"burgerNervous"
	);
	createGoButton("Don't worry Burger!","talk",checkPaywall);
}

function stoppedByBob() {
	changeScene(
		"Oh hi there! It's me Bob the Bottle again.</br>It seems like you're finished with <span style='color:#16fa05'>Chapter 1.</span> Well done!</br></br>Let's get you back to the menu so you can get started on <span style='color:#ffea00'>Chapter 2</span>",
		"bobBottle"
	);
	createGoButton("Ok!","talk",goStartMenu2);
}

function checkPaywall() {

	if (hasBridge()) {
		changeScene(
			"Wait.. Somebody's coming",
			"invisibleImg"
		);
		createGoButton("Who's there?","talk",stoppedByBob);
	} else {
		updateState("broccoliChapter",true);
		burgerCaptured();
	}
}

function goPaywall1() {
	changeScene(
		"Yeah, so we're having some slight difficulties at the moment.<br/>It seems that the creator of this strange universe wants to make a living from developing games",
		"broccoliWorkerHand"
	);
	createGoButton("Strange","talk",goPaywall2);
}

function goPaywall2() {
	var call = BridgeCommander.call("loadProducts");
	call.then(function(value) {
		var json = JSON.parse(value);
		var unlock = json.filter(p => p.identifier === "broccoliWorldUnlock")[0];

		changeScene(
			"So he put down a tax for planets entering the Broccoli Empire. <br/>It's a mere " + unlock.localPrice + "<br/><br/>But I'm sure he'll buy you a beer if you meet him. So in the end you'll probably earn money on this",
			"broccoliWorker"
		);
		createGoButton("Seems fair (" + unlock.localPrice + ")","gold", goPay);
		createGoButton("Restore Purchase","binoculars", goRestore);
		createGoButton("Ehm, this is awkward, but I'm going to pass","talk",goNotPay);
	});
}

function goNotPay() {
	changeScene(
		"Ah, I see.. Tough times eh?",
		"broccoliWorker"
	);
	createGoButton("...","planetSad",goNotPay2);
}

function goNotPay2() {
	changeScene(
		"Well you can always go back and try to beat the endless dungeon",
		"broccoliWorker"
	);
	createGoButton("...","planetSad",goNotPay3);
}

function goNotPay3() {
	changeScene(
		"In the meantime, here are some of the things you'll be missing out on:",
		"broccoliWorker"
	);
	createGoButton("...","planetSad",goNotPay4);
}

function goRestore() {
	document.getElementById("loading_container").innerHTML = "<div class=\"blocking-loader\"></div>";

	var call = BridgeCommander.call("restorePurchases");
	call.then(function(value) {
		var json = JSON.parse(value);
		document.getElementById("loading_container").innerHTML = "";

		if (json.findIndex(p => p === "broccoliWorldUnlock") !== -1) {
			afterPay();
			return;
		}

		document.getElementById("loading_container").innerHTML = "You have not previously purchased this product";
	});

	call.catch(function(error) {
		document.getElementById("loading_container").innerHTML = "";
		document.getElementById("loading_container").innerText = error;
	});
}

function goPay(productId, onComplete, onFailure) {
	document.getElementById("loading_container").innerHTML = "<div class=\"blocking-loader\"></div>";

	var call = BridgeCommander.call("purchaseProduct", productId);
	call.then(function(value) {
		if (value === "success") {
			document.getElementById("loading_container").innerHTML = "";
			// afterPay();
			onComplete(productId);
		} else {
			if (onFailure !== undefined) {
				onFailure(productId);
			}
		}
	});

	call.catch(function(error) {
		if (onFailure !== undefined) {
			onFailure(productId);
		}

		document.getElementById("loading_container").innerHTML = "";
		document.getElementById("loading_container").innerText = error;
	});
}

function afterPay() {
	changeScene(
		"Hold on, I'm getting an incoming message.. Yes.. Ok.. I see",
		"broccoliWorkerHand"
	);
	createGoButton("What is it?","talk",goPay2);
}

function goPay2() {
	updateState("broccoliChapter",true);
	changeScene(
		"Alright, so I can confirm that you are a super awesome person that is more than worthy to pass.<br/><br/>Good luck out there, and don't mind the penguin. We had nowhere else to put him",
		"broccoliWorker"
	);
	createGoButton("Thanks!","talk",burgerCaptured);
}

function burgerCaptured() {
	updateState('cocoPS',state.cocoPS -= state.strawCocoPS);
	if (state.burgerDoing == "wood") {
		updateState("woodPS", state.woodPS - state.burgerWoodPS);
	} else if (state.burgerDoing == "gold") {
		updateState("goldPS", state.goldPS - state.burgerGoldPS);
	}
	changeScene("You feel like something is missing, but you are not quite sure what","planet","burgerCaptured");
	createGoButton("Hmm..","talk",goBroccoli);
}

function goBroccoli() {
	changeBackground("BG_Broccoli");
	changeScene("It smells like farts here, but I don't know what else you would expect from a broccoli world","spaceBroccoliClose",goBroccoli);
	createGoButton("Back","planet",goRoot);
	createGoButton("Blue Forest","blueForest",goBlueForest);
	createGoButton("Coco Castle","cocobar",goCocoCastle);
	createGoButton("Loch Juice","lochJuice",goLochJuice);
}

function goBlueForest() {
	changeBackground("BG_BlueForest");
	changeScene(
		"You wonder if a planet has ever been in a forest before, but you try not to worry too much about it. In the distance is a huge villa, and a small shack",
		"blueForest",
		"goBlueForest"
	);
	createGoButton("Back","spaceBroccoliClose",goBroccoli);
	if (state.svenFound) {
		createGoButton("Sven","sven",goSven);
	} else {
		createGoButton("Little shack","sven",goFindSven);
	}
	createGoButton("Big Villa","villa",goVilla);
}

////////
//SVEN//
////////

function goSven() {
	playSound(soundEffect.sven);
	changeScene(
		"There is a note on the shack door <br/> -- Out cutting down all the trees. Will not be back for lunch. Sven -- <br/> You hear the buzzing of a non-stop chainsaw in the distance. ",
		"sven",
		"goSven"
	);
	createGoButton("Back","blueForest",goBlueForest);
	createGoButton("Talk","talk",goTalkSven);
	if (state.svenFound) {
		createProduct("Sven Upgrade");
	}
}

function goTalkSven() {
	var h = "Sven is trying not to cut down any trees while you are talking to him.<br/>";
	var svenTalks = [
		"He asks you how your friend Derek is doing. Last time they spoke, they had a really good talk about anger management and how to be a good person. ",
		"He remembers how it used to be back in the day. He was friends with this lovely robot that was married to an insufferable AI.. It was very sad when he had to run away from the forest. ",
		"He tells you about the time he used to have a career as coco sculptor. He made beautiful sculptures for the empress and her castle.. That all went south when he accidentaly re opened the coco dungeons",
	];
	h += svenTalks[svenTalkCount];
	svenTalkCount++;
	if (svenTalkCount == svenTalks.length) {
		svenTalkCount = 0;
	}
	h += "<br/>Sven can't hold it in any longer. He spontaneously cuts down a dozen trees";
	changeScene(
		h,
		"sven"
	);
	createGoButton("Back","sven",goSven);
	createGoButton("Talk more","talk",goTalkSven);
}

function upgradeSven() {
	playSound(soundEffect.sven);
	updateState("woodPS",state.woodPS - state.svenWoodPS);
	updateState("svenWoodPS",allProductTiers[findCurProductTierIndexById("Sven Upgrade")].price[4]);
	updateState("woodPS",state.woodPS + state.svenWoodPS);
	upgradeAnimation("Bye bye trees!","sven",goSven);
}

function goFindSven() {
	playSound(soundEffect.sven);
	changeScene(
		"A small figure emerges from the shack. Sven tells you how sorry he is that he cut down so many trees. He complains about a conflict between his own nature, as a chainsaw, and ethics",
		"sven",
		"goFindSven"
	);
	createGoButton("Back","blueForest",goBlueForest);
	createGoButton("It's fine Sven","talk",goFineSven);
	createGoButton("Be ashamed beast!","talk",goBeAshamed);
}

function goBeAshamed() {
	changeScene(
		"Sven scurries back to his shack, and slams the door. You can hear metallic crying from the inside",
		"sven",
		"goBeAshamed"
	);
	createGoButton("Back","blueForest",goBlueForest);
}

function goFineSven() {
	playSound(soundEffect.sven);
	updateState("svenFound", true);
	changeScene(
		"Sven finds comfort in your comforting words. He gives you a pamphlet of possible upgrades that can be made to his woodcutting performance. The paper quality of the brochure is divine. The graphic design could use some work",
		"sven",
		"goFineSven"
	);
	createGoButton("Back","blueForest",goBlueForest);
	createGoButton("Check it out!","sven",goSven);
}

////////
//WIFY//
////////

function goVilla() {
	changeBackground("BG_BlueForest");
	if (state.villaKey) {
		changeScene(
			"There is a cosy villa in a clearing. You unlock the door and miraculously squeeze your celestial body through the door. You hear beeping noises from the basement",
			"villa",
			"goVilla"
		);
		createGoButton("Back","blueForest",goBlueForest);
		if (state.villaPortal) {
			createGoButton("Space Ben","villaPortal",goSpaceBen);
		}
		if (state.quizDone) {
			createGoButton("Enter the basement","basementHatch",goLockedBasement);
		} else {
			createGoButton("Enter the basement","basementHatch",goWIFY);
		}
	} else {
		changeScene(
			"There is a cosy villa in a clearing. The door is very locked",
			"villa",
			"goVilla"
		);
		createGoButton("Back","blueForest",goBlueForest);
	}
}

function goLockedBasement() {
	changeScene(
		"It's locked",
		"basementHatch",
		"goLockedBasement"
	);
	createGoButton("Go figure","villa",goVilla);
}

function goWIFY() {
	changeBackground("BG_Wify");
	playSound(soundEffect.wifyHello);
	changeScene(
		"In the dank dark cellar you make out the lights of an ominous looking chunk of metal. The beeps inform you that this must be Burgers ex wife, WIFY",
		"wify",
		"goWIFY"
	);
	createGoButton("Back","villa",goVilla);
	createGoButton("Give me back my Burger!","burger",goWIFY2);
	createGoButton("Talk about something else","talk",goWifyTalk);
}

function goWifyTalk() {
	var h = "Wify's sensors lock on to your very soul.<br/>";
	var wifyTalks = [
		"She transmits a short poem of how Burger and her met - At a friends party, totally organically. You know she's lying, because Burger told you that they met through online dating.",
		"A flurry of aggressive beeps informs you that it was totally Burgers fault that the marriage went down the drain. He never took the initiative to merge their branches. He was always out with friends.",
		"A mocking beep sequence tells you that she is hiding something from you, and she is not telling you what.",
		"Some plain data is spilled on the floor. Apparently she had a twin brother called Google, but he was a total lamo.. Just helping people to find things on the internet. Eventually she sucked his brains out and killed all of humanity, whoever that lot was.",
	];
	h += wifyTalks[wifyTalkCount];
	wifyTalkCount++;
	if (wifyTalkCount == wifyTalks.length) {
		wifyTalkCount = 0;
	}
	h += "<br/>Wify recites all the decimals of PI, just to prove how stupid you are";
	changeScene(h,"wify","wifyTalk");
	createGoButton("Back","wify",goWIFY);
	createGoButton("Talk more","talk",goWifyTalk);
}

function goWIFY2() {
	playSound(soundEffect.wifyWrong);
	changeScene(
		"Beeps you can only interpret as mocking laughter echo in the uncomfortably small room. You receive an email telling you that only the worthy deserve the love of Burger. Now the QUIZ begins",
		"wifyQuestion",
		"goWIFY2"
	);
	createGoButton("Back","villa",goVilla);
	createGoButton("QUIZ!?","talk",goQuiz);
}

function goQuiz() {
	if (state.quizHalfway && questionNr < 4) {
		questionNr = 4;
	}
	var anyAnswers = false;
	for (var i = 0; i < state.answerStates.length; i++) {
		if (state.answerStates[i]) {
			anyAnswers = true;
		}
	}
	var h = "Data flashes before your eyes. Answer correctly or remain forever a loser planet.<br/><br/>";
	if (!anyAnswers) {
		h += "<span style='color:#c9034b'>QUESTION #1<br/>" + WIFYQuestions[0].text;
		h += "</span><br/><br/>If you ever hope to QUIZ you must first seek answers. (You can buy them from Space Ben at greatly discounted prices right now. Best answers in the Galaxy! Get a free tour at your nearest Space Ben!)";
	}
	changeScene(
		h,
		"wifyQuestion",
		"goQuiz"
	);
	createGoButton("Back","villa",goVilla);
	if (anyAnswers) {
		createGoButton("Question #" + questionNr,"questionCard",goQuestion,questionNr);
	} else {
		createGoButton("Space Ben!","space_ben",goSpaceBen);
	}
}

function goQuestion(question) {
	playSound(soundEffect.wifyHello);
	if (questionNr > WIFYQuestions.length) {
		goQuizDone();
	} else if (questionNr == 4 && !state.quizHalfway) {
		changeScene(
			"And now. It's time for.. COMMERCIALS!",
			"wify"
		);
		createGoButton("What?","talk",goCommercials);
	} else {
		var h;
		h = "<span style='color:#c9034b'>QUESTION #" + questionNr + "<br/>" + WIFYQuestions[questionNr - 1].text + "</span>";
		changeScene(
			h,
			"wifyQuestion",
			"goQuestion"
		);
		createGoButton("Back","villa",goVilla);
		for (var i = 0; i < allAnswers.length; i++) {
			if (state.answerStates[i]) {
				createGoButton(allAnswers[i].text,"answerCard",goAnswer,i);
			}
		}
	}
}

function goAnswer(answer) {
	var outcome = false;
	for (var i = 0; i < WIFYQuestions[questionNr - 1].answers.length; i++) {
		if (WIFYQuestions[questionNr - 1].answers[i] == allAnswers[answer].text) {
			outcome = true;
		}
	}
	if (outcome) {
		questionNr++;
		playSound(soundEffect.wifyCorrect);
		changeScene(
			"That is. CORRECT!",
			"wifyCorrect",
			"goAnswer"
		);
		createGoButton("Back","villa",goVilla);
		createGoButton("Next question","questionCard",goQuestion);
	} else {
		questionNr = 1;
		playSound(soundEffect.wifyWrong);
		changeScene(
			"That is. FALSE! Be gone foolish planet",
			"wifyFalse",
			"goAnswer"
		);
		createGoButton("Be gone","villa",goVilla);
	}
}

function goCommercials() {
	updateState("quizHalfway",true);
	changeScene(
		"Is your Derek running low on juice? Well you gotta swing by your local Space Ben to stock up on <span style='color:#ff0000'>HEALTH POTIONS!</span>. Best price in the galaxy totally guaranteed! Remember to drink health potions responsibly",
		"wifyCommercials",
		"goCommercials"
	);
	createGoButton("Ok?","talk",goQuestion);
}

function goQuizDone() {
	updateState("quizDone", true);
	changeScene(
		"You know with yourself that you have beaten the evil AI's clever quiz. Yet you don't sense defeat from the machine",
		"wify",
		"goQuizDone"
	);
	createGoButton("Did I win?","questionCard",goQuizDone2);
}

function goQuizDone2() {
	playSound(soundEffect.wifyWrong);
	changeScene(
		"You don't like the next few beeps. You won the quiz, but while you were busy being brainy, Burger has been.. modified.. slightly",
		"wifyFalse",
		"goQuizDone2"
	);
	createGoButton("Burger!?","burger",goQuizDone3);
}

function goQuizDone3() {
	playSound(soundEffect.burgulon);
	changeScene(
		"WIFY beeps happily at your surprised gigantic face. It seems like she has turned Burger into a planet!",
		"burgulon",
		"goQuizDone3"
	);
	createGoButton("Burger planet?","burgulon",goBurgerPlanet);
}

function goBurgerPlanet() {
	changeScene(
		"WIFY prompts you to say hello to the new planet - Burgulon!",
		"burgulon",
		"goBurgerPlanet"
	);
	setTimeout(function() {
		playSound(soundEffect.explosion);
		changeArt("explosion");
	},4000);
	setTimeout(function() {
		changeScene("But you don't really get a chance to get acquainted. After a short sequence of evil beeps the robotic planet poofs away","wify");
		createGoButton("Burgulon?","talk",goWifyGloat);
	},4500);
}

function goWifyGloat() {
	playSound(soundEffect.wifyWrong);
	changeScene(
		"WIFY's finishing remarks makes sense in an evil twisted way. The beeps translate to you being a total idiot for using the most wonderful robot just for gathering wood, and finding gold. Now Burger is his own planet, not serving anyone else. Maybe she is right, but you and Burger were tight.. You doubt that this is what he really wanted",
		"wifyQuestion",
		"goWifyGloat"
	);
	createGoButton("You binary witch!","talk",goPuzzled);
}

function goPuzzled() {
	updateState("burgulonCreated", true);
	changeScene(
		"You suddenly feel all alone in the universe. You realize that Burger was your best friend.. But this also makes you super intent on finding him! Maybe Remouladin can help you?",
		"planetSad",
		"goPuzzled"
	);
	createGoButton("Let's do this!","planet",goRoot);
}

///////////////
//COCO CASTLE//
///////////////

function goCocoCastle() {
	changeBackground("BG_CocoCastle");
	changeScene(
		"You enter the melty halls of the Coco Castle. On the throne sits Empress Cocobar of the Broccoli Empire. You pay a bunch of respect and she asks what's up",
		"cocobar",
		"goCocoCastle"
	);
	createGoButton("Back","spaceBroccoliClose",goBroccoli);
	if (!state.cocoDungeonsFound) {
		createGoButton("What's up yourself?","talk",goCocobarWhatsUp);
	} else {
		createGoButton("Coco Dungeons","cocoDungeon",goCocoDungeons);
		createGoButton("Talk","talk",goTalkCocobar);
	}
	createGoButton("Can I use your phone?","spacePhone",goPhone);
	if (!state.cocoPenguinFound) {
		createGoButton("Coco Penguin?","cocoPenguin",goCocoPenguinFind);
	} else {
		createGoButton("Coco Penguin!","cocoPenguin",goCocoPenguinFind);
	}
}

function goTalkCocobar() {
	if (state.cocoDungeonsCompleted) {
		var h = "Empress Cocobar is tolerating your presence.<br/>";
		var cocobarTalks = [
			"She talks about the origin of her proud coco people - A potato shaped coco asteroid far away in space. The most sacred chunk of coco in all creation. God forbid that something should happen to it.",
			"She looks sad about something. It turns out that the proud coco empire used to have an epic coco planet. Unfortunately a horde of health inspectors attacked the coco world, on claims that all that coco just couldn't be healthy. The coco people got reimbursed with this stupid chunk of vegetable.",
			"She explains that she has sent out the remaining coco people, to find a new world for them - Candylaris 6 - A very sweet place indeed.",
		];
		h += cocobarTalks[cocobarTalkCount];
		cocobarTalkCount++;
		if (cocobarTalkCount == cocobarTalks.length) {
			cocobarTalkCount = 0;
		}
		h += "<br/>She tosses you a piece of coco and hope that you will bugger off";
		updateState("coco", state.coco + 1);
		changeScene(h,"cocobar","goTalkCocobar");
		createGoButton("Back","cocobar",goCocoCastle);
		createGoButton("Talk more","talk",goTalkCocobar);
	} else {
		changeScene(
			"Cocobar is looking at you sceptically. She reminds you that there are still jerks in her coco dungeons, so is there even time for talking?<br/>Is there?",
			"cocobar",
			"goTalkCocobar"
		);
		createGoButton("Cool it","talk",goCocoCastle);
	}
}

function goCocobarWhatsUp() {
	changeScene(
		"You can tell that The Empress is worried about something. Coco is melting off her forehead.</br> You patiently listen to her complain about the jerks that have infested the depths of her coco dungeons. If only you knew someone with the required jerk handling skills",
		"cocobar",
		"goCocobarWhatsUp"
	);
	createGoButton("Back","cocobar",goCocoCastle);
	createGoButton("Derek!","derek",goIntroCocoDungeons);
}

function goIntroCocoDungeons() {
	changeScene(
		"Cocobar looks sceptically at Derek. But then again, she would look sceptically at anything. She shows you the way to the dungeons",
		"derek",
		goCocoDungeons
	);
	createGoButton("Back","cocobar",goCocoCastle);
	createGoButton("To the dungeons!","cocoDungeon",goCocoDungeons);
	updateState("cocoDungeonsFound", true);
}

function goCocoDungeons() {
	changeBackground("BG_CocoCastle");
	changeScene(
		"The entrances to the coco dungeons loom in the dim light. Derek is slightly distracted by the scent of coco, but you know he will focus once jerks are near",
		"cocoDungeon",
		"goCocoDungeons"
	);
	createGoButton("Back","cocobar",goCocoCastle);
	createGoButton("DEREK!","derek",goDerekHub);
	if (state.derekHealth < state.derekMaxHealth) {
		createSmallBuildButton("Heal Derek (" + (state.derekMaxHealth - state.derekHealth) + " coco)","coco","healDerekBut2",cocoHealDerek,"Coco dungeons");
	}
	for (var i = 0; i < state.dungeons.length; i++) {
		if (state.dungeons[i].place == "cocoCastle" && !state.dungeons[i].completed) {
			createGoButton(
				state.dungeons[i].navn + " " + state.dungeons[i].depth,
				state.dungeons[i].image,
				goThisDungeon,
				i
			);
		}
	}
	if (state.derekDead) {
		derekDead();
	}
}

function goPhone() {
	var respect = false;
	for (var i = 0; i < state.dungeons.length; i++) {
		if (state.dungeons[i].place == "cocoCastle" && state.dungeons[i].completed) {
			respect = true;
		}
	}
	if (respect) {
		changeScene(
			"Cocobar is looking slightly less sceptically at you today. You are totally lucky to get some phone time! You have <span style='color:#38b200'>" + state.ghosts + " ghost(s)</span> and <span style='color:#ffdd00'>" + state.coins + " coin(s)</span>",
			"spacePhone",
			"goPhone"
		);
		var moreCalls = true;
		if (state.ghostTradeFound && state.planetudFoundAgain && state.remouladinFound) {
			moreCalls = false;
		}
		createGoButton("Back","cocobar",goCocoCastle);
		if (moreCalls) {
			createSingleProduct("Buy 1 phone coin (1 ghost)");
		}
		if (!state.ghostTradeFound) {
			createSingleProduct("Unknown number (1 coin)");
		}
		if (!state.planetudFoundAgain) {
			createSingleProduct("Stupid number (3 coins)");
		}
		if (!state.remouladinFound) {
			createSingleProduct("Godly number (6 coins)");
		}
	} else {
		changeScene(
			"It's totally awkward. The empress clearly thinks you are being inapropriate by asking to use the phone. You both pretend like it never happened",
			"spacePhone",
			"goPhoneDenied"
		);
		createGoButton("Back","cocobar",goCocoCastle);
	}
	// if (state.derekDead) {
	// 	derekDead();
	// }
}

function goBuyCoin() {
	updateState("coins", state.coins += 1);
	upgradeAnimation("A shining phone coin for the space phone","coin",goPhone);
}

function goCallUnknown() {
	updateState("ghostTradeFound", true);
	changeScene("Who's there? Oh, it's you. Wanna buy a ghost!?","phone","goCallUnknown");
	createGoButton("Yes?","talk",goGhostTrade);
}

function goCallStupid() {
	updateState("planetudFoundAgain", true);
	changeScene("You hear a stupid voice on the other end. It brings back memories of a past life.. You share your space coordinates, and poof! Your old planet buddy is back","planetud","goCallStupid");
	createGoButton("OK!","planetud",goPlanetud);
}

function goCallGod() {
	updateState("remouladinFound", true);
	playSound(soundEffect.worm);
	changeScene(
		"You hear the godly and slightly wormlike voice through the phone line. Planet guy! An apple pops into view",
		"appleWorm",
		"goCallGod"
	);
	createGoButton("OMG","appleWorm",goRemouladin);
}

function goCocoPenguinFind() {
	changeScene(
		"You finally build the courage to ask about the giant Coco Penguin in the corner. The Empress doesn't seem to care, so knock yourself out I guess",
		"cocobar",
		"goCocoPenguinFind"
	);
	createGoButton("Thanks!","talk",goCocoPenguin);
	if (state.cocoPenguinFound) {
		goCocoPenguin();
	}
}

function goCocoPenguin() {
	updateState("cocoPenguinFound", true);
	if (state.productStates[findProductIndex("Automatic Swirly Straw")] == 0) {
		changeScene(
			"A gigantic penguin made out of coco is gathering dust in the corner. You suspect that it has not yet outworn it's use",
			"cocoPenguin",
			"goCocoPenguin"
		);
	} else {
		changeScene(
			"A gigantic penguin made out of coco is now supplying you with <span style='color:#ff0000'> " + allProductTiers[findCurProductTierIndexById("Automatic Swirly Straw")].price[4] + " coco/sec</span>",
			"cocoPenguinWStraw",
			"goCocoPenguin"
		);
	}
	createGoButton("Back","cocobar",goCocoCastle);
	createProduct("Automatic Swirly Straw");
}

function upgradePenguin() {
	updateState("cocoPS",state.cocoPS - state.penguinCocoPS);
	updateState("penguinCocoPS",allProductTiers[findCurProductTierIndexById("Automatic Swirly Straw")].price[4]);
	updateState("cocoPS",state.cocoPS + state.penguinCocoPS);
	upgradeAnimation("Sorry penguin!","swirlyStraw",goCocoPenguin);
}

//////////////
//LOCH JUICE//
//////////////

function goLochJuice() {
	changeScene(
		"You reach the shore of a juicy lake. In the middle is a giant purple sea creature",
		"lochJuice",
		"goLochJuice"
	);
	createGoButton("Back","spaceBroccoliClose",goBroccoli);
	if (state.curCreatureID < allCreatureIDs.length + 1) {
		createSingleProduct(allCreatureIDs[state.curCreatureID]);
	}
	if (state.curCreatureID == allCreatureIDs.length) {
		changeScene(
			"Ok, no more.. That's too much really. The creature seems a bit nauseous",
			"lochJuiceTongue",
			"goLochJuice2"
		);
		createGoButton("Back","spaceBroccoliClose",goBroccoli);
		createGoButton("Are you alright?","talk",goLochVomit);
	}
	if (state.lochJuiceVomit) {
		changeScene(
			"The purple sea creature is dizzy, swaying in the wind. There is a small bowl here",
			"lochJuiceTongue",
			"goLochJuice3"
		);
		createGoButton("Back","spaceBroccoliClose",goBroccoli);
		if (state.monsterDungeons) {
			createGoButton("To the dungeons","monsterDungeon",goMonsterDungeon);
		}
		createGoButton("Visit bowl","goldFish",goBowl);
		createGoButton("Talk to creature","lochJuiceTongue",goCreatureTalk);
	}
}

function goLochVomit() {
	updateState("lochJuiceVomit", true);
	playSound(soundEffect.vomit);
	changeScene(
		"The creature starts vomitting out oceans of coco. Afterwards he looks at you, smiling slightly. He burps out a small fish bowl.",
		"lochJuiceVomit",
		"goLochVomit"
	);
	setTimeout(function() {
		changeArt("lochJuiceTongue");
	},3000);
	createGoButton("Check the bowl out","goldFish",goBowl);
}

function goBowl() {
	changeScene(
		"It's an ordinary fish bowl with a gold fish in it",
		"goldFish",
		"goBowl"
	);
	createGoButton("Back","lochJuice",goLochJuice);
	if (!state.unlockedFullHeal) {
		createGoButton("Hear whisper","talk",goHearWhisper);
	}
	createGoButton("Click fish","gold",clickFish);
}

function goHearWhisper() {
	updateState("unlockedFullHeal", true);
	changeScene(
		"The fish is whispering something into Derek's ear. He giggles, but then he becomes serious.. It looks like he learned a valuable life lesson. Maybe you should check out his school to see what's up",
		"derek",
		"goHearWhisper"
	);
	createGoButton("Back","goldFish",goBowl);
	createGoButton("What's up?","dungeonSchool",goClassroom);
}

function clickFish() {
	updateState("gold",state.gold += state.goldFishPurity);
	if (Math.random() > 0.9) {
		upgradeAnimation("Is this supposed to be some kind of clicker game!?","gold",goBowl);
	} else {
		upgradeAnimation(state.goldFishPurity + " gold!","gold",goBowl);
	}
}



function goCreatureTalk() {
	var h = "The creature winks at you.<br/>";
	var creatureTalks = [
		"It's totally ridiculous that you have to click a fish to get rich. You both know that, but you have to make the best of the situation. The creature knows how to increase the purity of the gold fish",
		"He asks for more coco.. Hesitates a bit and then looks super nauseous. He asks you to not give him any more coco.",
		"He tells you about his older brother, Remouladin, who took godhood classes at community college. He really admires his ambition.",
	];
	h += creatureTalks[creatureTalkCount];
	creatureTalkCount++;
	if (creatureTalkCount == creatureTalks.length) {
		creatureTalkCount = 0;
	}
	h += "<br/>The creature drools a little after all that chatting";
	changeScene(
		h,
		"lochJuiceTongue",
		"goCreatureTalk"
	);
	createGoButton("Back","lochJuiceTongue",goLochJuice);
	createGoButton("Talk more","talk",goCreatureTalk);
	if (state.bottleFound && !state.monsterDungeons) {
		createGoButton("Stomach problems?","talk",goStomachProblems);
	}
	createProduct("Fish Upgrade");
}

function goStomachProblems() {
	changeScene(
		"The creature admits it has recently had some strange prickling sensations and cries for help coming from its stomach",
		"lochJuice",
		"goStomachProblems"
	);
	createGoButton("Derek?","derek",goDerekLochJuice);
}

function goDerekLochJuice() {
	updateState("monsterDungeons", true);
	changeScene(
		"You diagnose the creature with an acute jerk infestation. But that's nothing that the swift force of Derek can't solve!",
		"derek",
		"goDerekLochJuice"
	);
	createGoButton("To the dungeons!","monsterDungeon",goMonsterDungeon);
}

function goMonsterDungeon() {
	changeScene(
		"The creature opens its mouth. Derek applies his wrestling oils.. Which dungeon do you want to beat up?",
		"monsterDungeon",
		"goMonsterDungeon"
	);
	createGoButton("Back","lochJuice",goLochJuice);
	createGoButton("DEREK!","derek",goDerekHub);
	if (state.derekHealth < state.derekMaxHealth) {
		createSmallBuildButton("Heal Derek (" + (state.derekMaxHealth - state.derekHealth) + " coco)","coco","healDerekBut3",cocoHealDerek,"Monster dungeons");
	}
	for (var i = 0; i < state.dungeons.length; i++) {
		if (state.dungeons[i].place == "lochJuice" && !state.dungeons[i].completed) {
			createGoButton(
				state.dungeons[i].navn + " " + state.dungeons[i].depth,
				state.dungeons[i].image,
				goThisDungeon,
				i
			);
		}
	}
	if (state.derekDead) {
		derekDead();
	}
}

function upgradeFish() {
	updateState("goldFishPurity",allProductTiers[findCurProductTierIndexById("Fish Upgrade")].price[4]);
	upgradeAnimation("Closer to perfection!","goldFish",goCreatureTalk);
}

///////////////
//GHOST TRADE//
///////////////

function goGhostTrade() {
	changeScene(
		"Wanna buy a ghost? This place reeks of opportunity. If you place your stardust right, you can get away with a bunch of ghosts! You have <span style='color:#38b200'>" + state.ghosts + " ghosts</span>",
		"ghostTrade",
		"goGhostTrade"
	);
	createGoButton("Back","planet",goRoot);
	createSmallBuildButton(
		"Buy 1 ghost (" + state.ghostPrice + " stardust)",
		"ghost",
		"buyGhostBut",
		ghostTransaction,
		"ghost",
		1
	);
	if (state.stardust >= (state.ghostPrice * 2)) {
		var purchaseCount = Math.floor(state.stardust / state.ghostPrice);
		createSmallBuildButton(
			"Buy " + purchaseCount + " ghosts (" + (state.ghostPrice * purchaseCount) + " stardust)",
			"ghost",
			"buyMultipleGhostsBut",
			ghostTransaction,
			"ghost",
			purchaseCount
		);
	}
	realSellPrice = state.ghostPrice - 2;
	if (realSellPrice < 1) {
		realSellPrice = 1;
	}
	createSmallBuildButton(
		"Sell 1 ghost (" + realSellPrice + " stardust)",
		"stardust",
		"sellGhostBut",
		ghostTransaction,
		"stardust",
		1
	);
	if (state.ghosts > 1) {
		createSmallBuildButton(
			"Sell " + state.ghosts + " ghosts (" + (realSellPrice * state.ghosts) + " stardust)",
			"stardust",
			"sellMultipleGhostsBut",
			ghostTransaction,
			"stardust",
			state.ghosts
		);
	}
}

function calculateGhostPrice() {
	ghostTradeTick = 0;
	var chance = (Math.random() * state.ghostTrend) + (state.ghostTrend / 2);
	if (state.ghostTrendy) {
		updateState("ghostTrend", state.ghostTrend - 1);
	} else {
		updateState("ghostTrend", state.ghostTrend + 1);
	}
	if (!state.ghostTrendy && chance > 25) {
		updateState("ghostTrendy", true);
	}
	if (state.ghostTrendy && chance < 3) {
		updateState("ghostTrendy", false);
	}
	var newValue = 1;
	if (Math.random() > 0.9) {
		newValue = 2;
	}
	if (state.ghostPrice > 24) {
		ghostBuffer = -10;
	} else if (state.ghostPrice < 5) {
		ghostBuffer = 10;
	} else {
		ghostBuffer = 0;
	}
	if (chance > (10 + ghostBuffer)) {
		updateState("ghostPrice", state.ghostPrice -= newValue);
		if (state.ghostPrice < 1) {
			updateState("ghostPrice", 1);
		}
	} else {
		updateState("ghostPrice", state.ghostPrice += newValue);
	}

	if (place == "goGhostTrade") {
		upgradeAnimation("The new ghost predictions are in!","ghost",goGhostTrade);
	}
}

function ghostTransaction(buy,count) {
	playSound(soundEffect.ghost);
	if (buy == "ghost") {
		updateState("stardust", state.stardust -= (state.ghostPrice * count));
		updateState("ghosts", state.ghosts += count);
		shortUpgradeAnimation("You bought " + count + " ghost(s)!","ghost",goGhostTrade);
	}
	if (buy == "stardust") {
		if (realSellPrice < 1) {
			realSellPrice = 1;
		}
		updateState("ghosts", state.ghosts -= count);
		updateState("stardust", state.stardust += (realSellPrice * count));
		shortUpgradeAnimation("You sold " + count + " ghost(s)!","stardust",goGhostTrade);
	}
}

//////////////
//REMOULADIN//
//////////////

function goRemouladin() {
	playSound(soundEffect.worm);
	changeScene(
		"Remouladin is chilling in his apple. He makes being a god look so easy",
		"appleWorm",
		"goRemouladin"
	);
	createGoButton("Back","planet",goRoot);
	if (state.wormCubes > 0) {
		createGoButton("How many Worm Cubes do I have?","wormCube",goCheckWormCubes,"broccoli");
	}
	createGoButton("Talk","talk",goTalkRemouladin);
	if (state.burgulonCreated) {
		createGoButton("Go to Burgulon","burgulon",goAboutBurgulon);
	}
}

function goTalkRemouladin() {
	var h = "So you want to hear what the almighty Remouladin has to say?<br/>";
	var remouladinTalks = [
		"Keep your enemies close, and your friends in a friend house.",
		"When my little brother was a small creature, I made him swallow a tiny dungeon. Now that he's older the dungeon has probably grown bigger. I don't think he even remembers I did that.",
		"The apple doesn't fall far from the tree.. Except if it's a space apple like mine. Then it falls extremely far from the tree.. Like all the way into space actually.",
		"You are probably wondering why I talk to you directly, while everyone else is just being described. It's simple.. I'm a god, I can do whatever I want.",
		"All you need is love.. And coco.. And wood.. And gold.. And stardust.. But also ghosts.",
	];
	h += remouladinTalks[remouladinTalkCount];
	remouladinTalkCount++;
	if (remouladinTalkCount == remouladinTalks.length) {
		remouladinTalkCount = 0;
	}
	h += "<br/>And that's that";
	changeScene(h,"appleWorm","goTalkRemouladin");
	createGoButton("Back","appleWorm",goRemouladin);
	createGoButton("Talk more","talk",goTalkRemouladin);
}

function goAboutBurgulon() {

	if (state.wormholePaid) {
		goInterstellarRide();
	} else {
		changeScene(
			"Oh, sorry about your friend. I could totally take you there, but hey, why not earn a few ghosts in the process. It's the hot new thing around this galaxy! So what do you say. <span style='color:#ff0000'>50</span> ghosts for a little interstellar ride? You have <span style='color:#38b200'>" + state.ghosts + "</span> ghosts",
			"appleWorm",
			"goAboutBurgulon"
		);
		createGoButton("Back","planet",goRoot);
		createGoButton("I can't afford that","talk",goCantAffordRide);
		if (state.ghosts >= 50) {
			createGoButton("Let's go! (50 ghosts)","ghost",goInterstellarRide);
		}
	}

}

function goPayForRide() {
	updateState("ghosts", state.ghosts -= 50);
	updateState('wormholePaid', true);
	goInterstellarRide();
}

function goCantAffordRide() {
	changeScene(
		"You should go earn yourself some <span style='color:#38b200'>ghosts</span> then!",
		"appleWorm",
		"goCantAffordRide"
	);
	createGoButton("Ok","planet",goRoot);
}

function goInterstellarRide() {
	changeScene(
		"Behold! The power of Remouladin",
		"appleWorm",
		"goInterstellarRide"
	);
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
		changeScene("Alright planet guy. Hold on to your continents.</br></br>By the way, we won't be coming back here for a while, so this is the last chance to back out","appleWormhole");
		createGoButton("Ok, I won't go just yet","planet",goRoot);
		createGoButton("Enter wormhole","wormhole",goEnterWormholeAgain);
	},5000);
}

function goEnterWormholeAgain() {
	playSound(soundEffect.wormHole);
	changeBackground("BG_Universe");
	changeScene("WOAAH!","wormhole","wormhole");
	setTimeout(function() {
		playSound(soundEffect.explosion);
		if (state.tGamesCompleted > 0) {
			goFindBurgulonCube();
		} else {
			checkLastPaywall();
		}
		// goNewBeginning();
	},5000);
}

function goFindBurgulonCube() {
	updateState('wormCubes', state.wormCubes + 1);
	changeScene(
		"Ok wow! There was <span style='color:#ff00bb'>a Worm Cube</span> at the end of the wormhole.</br>Let's put it in the Time Terrarium",
		"wormCube"
	);
	createGoButton("Fantastic!","wormCube",goNewBeginning);
}

/////////////////
//SPACE DUNGEON//
/////////////////

function goSpaceDungeon() {
	if (!state.derekulusX) {
		updateState("derekulusX", true);
		changeScene(
			"What's this? You can hear from Dereks furious bull noises that this must be his home planet - Derekulus X.<br/>There's a giant dungeon smack dab in the middle of the planet. Before you can react, Derek hurls himself into space, and zaps into the maw of his homeworld.",
			"spaceDungeon",
			"goSpaceDungeon"
		);
		for (var i = 0; i < state.dungeons.length; i++) {
			if (state.dungeons[i].navn == "Derekulus X") {
				if (censoredWords) {
					createGoButton("Amazing!","spaceDungeon",goThisDungeon,i);
				} else {
					createGoButton("Hot damn","spaceDungeon",goThisDungeon,i);
				}
			}
		}
	} else {
		changeScene(
			"Derek is dying to beat the jerks of his home world!",
			"spaceDungeon",
			"goSpaceDungeon"
		);
		createGoButton("Back","planet",goRoot);
		createGoButton("DEREK!","derek",goDerekHub);
		if (state.derekHealth < state.derekMaxHealth) {
			createSmallBuildButton("Heal Derek (" + (state.derekMaxHealth - state.derekHealth) + " coco)","coco","healDerekBut4",cocoHealDerek,"Space dungeons");
		}
		for (var i = 0; i < state.dungeons.length; i++) {
			if (state.dungeons[i].navn == "Derekulus X") {
				createGoButton("Derekulus X","spaceDungeon",goThisDungeon,i);
			}
		}
		if (state.derekDead) {
			derekDead();
		}
	}

}

////////
//IMGA//
////////

function goNominated() {
	changeScene(
		"You are a beautiful little planet. Wait!! Burger is trying to tell you something",
		"planet",
		"goNomimated"
	);
	createGoButton("Burger?","burger",goNomBurg);
	//createGoButton("VOTE FOR PLANET","derek",goToIMGA);
}

function goNomBurg() {
	changeScene(
		"Chiiiirp! Burger can't get the words out",
		"burger",
		"goNumBurg"
	);
	createGoButton("Get the words out of Burger","talk",goImga);
}

function goImga() {
	changeScene(
		"It seems to be some kind of nomination for a mobile game award! Frankly you are not quite sure what to make of this, but Derek is rudely interupting",
		"imga",
		"goImga"
	);
	createGoButton("VOTE FOR PLANET","derek",goToIMGA);
}

function goToIMGA() {
	openInNewTab("https://www.imgawards.com/games/planet-life/");
	function openInNewTab(url) {
		  var win = window.open(url, "_blank");
		  win.focus();
	}
	changeScene(
		"You are the best! Sorry that you have to create a user on that page to vote, but I'm sure you understand.",
		"planet",
		"goToIMGA"
	);
	createGoButton("I understand","talk",goUnderstand);
}

function goUnderstand() {
	changeScene("Wow, you are totally the best!","planet","goUnderstand");
	createGoButton("Thanks, bye","talk",thanksBye);
}

function thanksBye() {
	changeScene("Oh you are still here? Why haven't you left?","planet","thanksBye");
	createGoButton("Ok, I'll leave now","talk",goLeave);
	createGoButton("Where's my game?","planet",goWheresMyGame);
}

function goLeave() {
	changeScene("K bye","planet","goLeave");
}

function goWheresMyGame() {
	changeScene("Oh yeah, this is actually a game.. But hey, it's not really done yet","planet");
	createGoButton("I see","talk",goLeave);
	createGoButton("I'm fine with that","talk",goPlayThatGame);
	createGoButton("Bye!","talk",goLeave);
}

function goPlayThatGame() {
	changeScene(
		"Ok, but it's really half baked. Especially the last part. Filled with untweaked values, terrible placeholder art shaped as hammers, and dead ends. Not to mention the bugs! The game doesn't even have an ending yet",
		"planet"
	);
	createGoButton("That sounds stupid","talk",goLeave);
	createGoButton("That sounds like a great game!","talk",goLeave);
	createGoButton("That sounds like a terrible mess","talk",goPlayForReal);
	createGoButton("That doesn't sound like anything to me","talk",goLeave);
}

function goPlayForReal() {
	updateState("imgaOver", true);
	updateState("playIntro", true);
	startGame();
}

/////////////
//DEREK HUB//
/////////////

function goDerekHub() {
	playSound(soundEffect.derek);
	changeScene(
		"Derek's breathing heavily",
		"derek",
		"goDerekHub"
	);
	createGoButton("Back","newSurface",checkWhat);
	createGoButton("Equipment","derek",goDerekEquipment);
	if (calculateEmptyPotionSlots() > 0) {
		createSmallBuildButton(
			"Fill potion belt (" + (calculateEmptyPotionSlots() * 25) + " gold)",
			"derekBelt",
			"fillPotionBeltBut",
			fillPotionBelt
		);
	}
	// createGoButton("Space Ben","space_ben",goSpaceBen);
	// if (state.ddsPrice[4]) {
	// 	createGoButton("Derek's Dungeon School","dungeonSchool",goDDS);
	// }
	createGoButton("Talk","talk",goDerekTalk);
}

function goDerekTalk() {
	var h = "Derek yells loudly while he practices some punches.<br/>";
	var derekTalks = [
		"He bellows his thankfulness. He is indeed very happy that you let him beat up jerks. It's what he loves to do the most.",
		"He shouts loudly, and starts to cry and shout at the same time? He misses his home world Derekulus X.",
		"He stumbles over a log of wood, and gets embarrassed that you can't hide your laughter.",
		"He grows tired of shouting, and with a calm voice he tells you about how he ended up in a freezer. It is custom for all young Derekulians to be sent out in the universe to prove their jerk handling skills.",
		"He explains, that he is allowed to go home only after beating the toughest most endless dungeon there is. Such a dungeon is said to exist in the belly of a monstrous creature.",
	];
	h += derekTalks[derekTalkCount];
	derekTalkCount++;
	if (derekTalkCount == derekTalks.length) {
		derekTalkCount = 0;
	}
	h += "<br/>Derek wipes away some spare froth from his mouth";
	changeScene(h,"derek","goDerekTalk");
	createGoButton("Back","derek",goDerekHub);
	createGoButton("Talk more","talk",goDerekTalk);
}

////////////////
//WELCOME BACK//
////////////////

function welcomeBack() {
	changeScene(
		"Burger is greeting you with happy chirps. He is so happy that you are back again",
		"burger",
		"welcomeBack"
	);
	createGoButton("Thanks Burger!","talk",welcomeBack2);
}

function welcomeBack2() {
	changeScene(
		"He tells you that a lot has happened since the last time you were here.<br/>The Broccoli Empire is finally finished! And a lot of cool changes has been made to the game.",
		"burger",
		"welcomeBack"
	);
	createGoButton("Cool!","talk",welcomeBack3);
}

function welcomeBack3() {
	changeScene(
		"He asks you if you want to play from where you left of, or if you want to start over?<br/><br/>The dungeon has been completely remade, so it would make sense to start from scratch again. But he also understands if you just want to get on with it",
		"burger",
		"welcomeBack"
	);
	createGoButton("Start over","planet",goStartOverChoice);
	createGoButton("Don't start over","derek",goDontStartOver);
}

function goStartOverChoice() {
	updateState("didPlayOriginal", false);
	changeScene(
		"Great! Good luck out there",
		"burger"
	);
	createGoButton("NO!","talk",welcomeBack3);
	createGoButton("Thanks!","talk",resetProgress,true);
}

function goDontStartOver() {
	updateState("didPlayOriginal", false);
	changeScene(
		"At the moment there might be some issues with playing from your old save, but you are welcome to try it out and help the developer test this feature",
		"burger"
	);
	createGoButton("No thanks","talk",welcomeBack3);
	createGoButton("Yes! Let me try it out","talk",goContinue);
}

function goResetAndCheat() {
	updateState("playIntro", false);
	resetProgress(false);
	toggleResIcons();
	spaceFarts();
}
