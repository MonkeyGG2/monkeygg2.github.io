//P POKER

function goPoker() {
	changeScene(
		"There's a dimly lit poker table. Around it sits two figures: <span style='color:#04c6c9'>Wild Sven</span> and <span style='color:#a6179c'>Empress Cocobar.</span> They are playing wooden poker. Wanna play a game?",
		"pokerTable",
		"goPoker"
	);
	createGoButton("Back","casino",goCasino);
	createGoButton("Are there rules?","talk",goPokerRules);
	createSingleProduct("Buy in for 1000 wood");
	createSingleProduct("Buy in for 2500 wood");
	createSingleProduct("Buy in for 5000 wood");
}

function goPokerRules() {
	changeScene(
		"Bret rushes to your side. He can barely breathe after running that short distance, but he seems eager to explain the rules of Wooden Poker to you. He really needs to do some cardio training once in a while",
		"bret",
		"goPokerRules"
	);
	createGoButton("Back","pokerTable",goPoker);
	createGoButton("The rules?","talk",goPokerRules2);
}

function goPokerRules2() {
	changeScene(
		"In Wooden Poker each player gets one card dealt. It has a number of trees on it, and a lucky symbol. The player with the most trees win.. If that player didn't fold of course",
		"pokerCardGoldfish"
	);
	createGoButton("Back","pokerTable",goPoker);
	createGoButton("Trees?","talk",goPokerRulesTrees);
	createGoButton("Lucky symbol?","talk",goPokerRulesSymbol);
	createGoButton("Betting?","talk",goPokerRulesBetting);
}

function goPokerRulesTrees() {
	changeScene(
		"Each card has a number of trees on them, from 0 to 99. But at the end of the game, you can end up getting even more trees, if the lucky symbol on your card is right",
		"pokerTrees"
	);
	createGoButton("OK!","bret",goPokerRules2);	
}

function goPokerRulesSymbol() {
	changeScene(
		"Each card has one of three lucky symbols: The <span style='color:#3eb03f'>broccoli</span>, <span style='color:#dd00ff'>ghost</span> or <span style='color:#ffc400'>goldfish.</span> After everyone has placed their bets, the dealer reveals what the lucky symbol of the round is. And be warned - it's not pretty!</br>If your card matches the symbol you get the reward for that symbol.</br><span style='color:#3eb03f'>The broccoli</span> will get you 40 extra tress.</br><span style='color:#dd00ff'>The ghost</span> will double your trees.</br>And <span style='color:#ffc400'>the goldfish</span> gives you 80 extra trees!",
		"luckySymbols"
	);
	createGoButton("OK!","bret",goPokerRules2);
}

function goPokerRulesBetting() {
	changeScene(
		"The two other players will make their bet. Be aware, they might be bluffing! You can choose to either call their bet, go all in, or fold.</br> If you fold too many times in a row, the other players will kick you out!</br> If you choose to call or go all in, then the players that have bet less than you need to decide if they dare to call your bet",
		"pokerLogs"
	);
	createGoButton("OK!","bret",goPokerRules2);
}

function initializePoker(amount) {
	playSound(soundEffect.buy);
	pokerBet = amount;
	yourPokerWood = amount;
	foldCount = 0;
	goDealHand();
}

function goDealHand() {
	console.log("--- new game of poker ---");
	svenCard = Math.round(Math.random() * 99);
	svenSymbol = Math.floor(Math.random() * 3);
	cocobarCard = Math.round(Math.random() * 99);
	cocobarSymbol = Math.floor(Math.random() * 3);
	yourCard = Math.round(Math.random() * 99);
	yourSymbol = Math.floor(Math.random() * 3);
	calculatePokerMove(svenCard,"sven");
	console.log("Sven starts the round with " + svenMove);
	calculatePokerMove(cocobarCard,"cocobar");
	console.log("Cocobar starts the round with " + cocobarMove);
	goPlayPoker();
}

function goPlayPoker() {
	var highestBet;
	var symbols = [
		"<span style='color:#3eb03f'>broccoli</span>",
		"<span style='color:#dd00ff'>ghost</span>",
		"<span style='color:#ffc400'>goldfish</span>"
	];
	if (svenBet >= cocobarBet) {
		highestBet = svenBet;
	} else {
		highestBet = cocobarBet;
	}
	if (svenMove == "folds" && cocobarMove == "folds") {
		changeScene(
			"The game has started. You have <span style='color:#d0ba91'>" + yourPokerWood + " wood.</span> You draw a card with <span style='color:#0398fc'>" + yourCard + " trees</span> and a " + symbols[yourSymbol] + " symbol. The two others look at their cards with a sad look. <span style='color:#ff0000'>They both fold</span>",
			cardImages[yourSymbol]
		);
		createGoButton("Ok","talk",goContinuePoker);
	} else {
		changeScene(
			"The game has started. You have <span style='color:#d0ba91'>" + yourPokerWood + " wood.</span> You draw a card with <span style='color:#0398fc'>" + yourCard + " trees</span> and a " + symbols[yourSymbol] + " symbol. The two others look at their cards, trying really hard to look cool.</br><span style='color:#04c6c9'>Sven " + svenMove + "</span> and <span style='color:#a6179c'>Cocobar " + cocobarMove + ".</span></br>What's your move?",
			cardImages[yourSymbol],
			"goPlayPoker"
		);
		createGoButton("Fold","no",goPokerFold);
		if (highestBet != yourPokerWood) {
			createGoButton("Call (" + highestBet + " wood)","wood",goPokerCall,highestBet);
		}
		createGoButton("All in! (" + yourPokerWood + " wood)","wood",goPokerAllIn);		
	}
}

function calculatePokerMove(card,person) {
	var bet;
	var move;
	if (Math.random() <= 0.15 || card >= 90) {
		//All in
		bet = pokerBet;
		move = "is all in with " + bet + " wood";
	} else {
		if (card < 50) {
			if (Math.random() <= 0.5) {
				//Fold
				bet = 0;
				move = "folds";
			} else {
				//Small bet
				bet = pokerBet / 4;
				move = "bets " + bet + " wood";
			}
		} else {
			if (Math.random() <= 0.5) {
				//Normal bet
				bet = pokerBet / 2;
				move = "bets " + bet + " wood";
			} else {
				//Big bet
				bet = pokerBet * 0.8;
				move = "bets " + bet + " wood";
			}
		}
	}
	if (person == "sven") {
		svenBet = bet;
		svenMove = move;
	} else {
		cocobarBet = bet;
		cocobarMove = move;
	}
}

function goPokerCall(highestBet) {
	if (highestBet > yourPokerWood) {
		changeScene(
			"You try to call, but the others look sceptically at you. You don't have enough wood, you cheater!",
			"pokerTable"
		);
		createGoButton("Hehe","talk",goPlayPoker);
	} else {
		yourBet = highestBet;
		foldCount = 0;
		var oldSvenMove = svenMove;
		var oldCocobarMove = cocobarMove;
		if (!foldCheck(svenMove)) {
			calculateCall("Sven",svenBet,svenCard,svenMove);
		}
		console.log("After calling Sven " + svenMove);
		if (!foldCheck(cocobarMove)) {
			calculateCall("Cocobar",cocobarBet,cocobarCard,cocobarMove);
		}
		console.log("After calling Cocobar " + cocobarMove);
		var svenH = "";
		var cocobarH = "";
		if (svenMove != oldSvenMove) {
			svenH = " <span style='color:#04c6c9'>Sven " + svenMove + ".</span></br>";
		}
		if (cocobarMove != oldCocobarMove) {
			cocobarH = " <span style='color:#a6179c'>Cocobar " + cocobarMove + ".</span></br>";
		}
		changeScene(
			"You throw <span style='color:#d0ba91'>" + highestBet + " wooden logs</span> on the table. It's a complete mess!</br>" + svenH + cocobarH + "Let's see who has the highest card!",
			"pokerTableLogs"
		);
		createGoButton("Let's do this!","talk",showSymbol);
	}
}

function calculateCall(person,bet,card,move) {
	var newMove;
	if (bet < yourBet) {
		if (Math.round(Math.random() < 0.15) || card > 50) {
			bet = yourBet;
			//newMove = "calls the " + bet + " wood.</br>";
			newMove = "calls the " + bet + " wood";
		} else {
			// newMove = "folds.</br>";
			newMove = "folds";
		}
	} else {
		newMove = move;
	}
	if (person == "Sven") {
		svenBet = bet;
		svenMove = newMove;
	} else {
		cocobarBet = bet;
		cocobarMove = newMove;
	}
}

function goPokerAllIn() {
	foldCount = 0;
	yourBet = yourPokerWood
	changeScene(
		"You throw all your <span style='color:#d0ba91'>" + yourPokerWood + " wood</span> on the table. The two others look impressed at you",
		"pokerTableLogs"
	);
	createGoButton("So what's it gonna be?","talk",goPokerAllIn2);
}

function goPokerAllIn2() {
	if (svenMove != "folds") {
		calculateAllIn("sven",svenMove,svenCard,svenBet);
		console.log("After going all in Sven " + svenMove);
	} else {
		svenMove = "already folded";
	}
	if (cocobarMove != "folds") {
		calculateAllIn("cocobar",cocobarMove,cocobarCard,cocobarBet);
		console.log("After going all in Cocobar " + cocobarMove);
	} else {
		cocobarMove = "already folded";
	}
	if (svenMove == "continue" && cocobarMove == "continue") {
		changeScene(
			"They both look at you with newfound respect. What baller you are",
			"pokerTable"
		);
		createGoButton("Let's do this!","talk",showSymbol);
	} else {
		var svenH;
		if (svenMove == "all in") {
			svenBet = yourBet;
			svenH = "<span style='color:#04c6c9'>Sven calls your " + yourBet + ".</span></br>";
		} else if (svenMove == "folds") {
			svenH = "<span style='color:#04c6c9'>Sven folds.</span></br>";
		} else if (svenMove == "continue" || svenMove == "already folded") {
			svenH = "";
		}
		var cocobarH;
		if (cocobarMove == "all in") {
			cocobarBet = yourBet;
			cocobarH = "<span style='color:#a6179c'>Cocobar calls your " + yourBet + ".</span>";
 		} else if (cocobarMove == "folds") {
			cocobarH = "<span style='color:#a6179c'>Cocobar folds.</span>";
		} else if (cocobarMove == "continue" || cocobarMove == "already folded") {
			cocobarH = "";
		}
		changeScene(
			svenH + cocobarH,
			"pokerTableLogs"
		);
		createGoButton("Let's do this!","talk",showSymbol);
	}
}

function calculateAllIn(person,move,card,bet) {
	var newMove;
	if (bet == pokerBet || bet > yourBet) {
		newMove = "continue";
	} else if (card >= 70) {
		newMove = "all in";
	} else if (yourBet / 2 < bet) {
		newMove = "all in";
	} else {
		if (Math.random() < 0.25) {
			newMove = "all in";
		} else {
			newMove = "folds";
		}
	}
	if (person == "sven") {
		svenMove = newMove;
	} else {
		cocobarMove = newMove;
	}	
}

function goPokerFold() {
	foldCount++;
	changeScene(
		"You decide that your card was stupid. Better not bet your precious wood on it",
		cardImages[yourSymbol]
	);
	createGoButton("Stupid card","talk",goPokerFold2);
}

function goPokerFold2() {
	if (foldCount == 1) {
		changeScene(
			"Sven glances at you. Folding is apparently not cool around here",
			"pokerTable"
		);
		createGoButton("Hehe","talk",goContinuePoker);
	}
	if (foldCount == 2) {
		changeScene(
			"Cocobar stares you down. Are you here to play or what?",
			"pokerTable"
		);
		createGoButton("Hehe","talk",goContinuePoker);
	}
	if (foldCount == 3) {
		changeScene(
			"Cocobar and Sven fold their arms simultaneously. If you are just going to sit there and fold all the time, you might as well do it somewhere else. You sense it's time for you to leave",
			"pokerTable"
		);
		createGoButton("Leave with " + yourPokerWood + " wood","wood",goLeavePoker);
	}
}

function showSymbol() {
	luckySymbol = Math.floor(Math.random() * 3);
	var symbols = [
		"a <span style='color:#3eb03f'>crisp broccoli</span> slams down hard on the table. It smells of farts",
		"a <span style='color:#dd00ff'>super scary ghost</span> appears out of thin air. This is really scary!",
		"a <span style='color:#ffc400'>little goldfish</span> torpedoes the table. You wonder if it survived"
	];
	var symbolImages = ["broccoli","pokerGhost","pokerGoldFish"];
	if (foldCheck(svenMove) && foldCheck(cocobarMove)) {
		changeScene(
			"<span style='color:#ff0000'>Everyone else folded.</span> The dealer shrugs",
			"pokerTableLogs"
		);
		createGoButton("Did I win?","talk",goWinPoker);	
	} else {
		changeScene(
			"The dealer claps his hands. And " + symbols[luckySymbol],
			symbolImages[luckySymbol]
		);
		createGoButton("Interesting","talk",goYourCards);	
	}
}

function foldCheck(move) {
	if (move == "folds" || move == "already folded") {
		console.log(move + " passes foldCheck");
		return true;
	} else {
		return false;
	}
}

function symbolCalculator(symbol) {
	var luckyH = "Unfortunately the lucky symbol didn't match the card";
	if (luckySymbol == symbol) {
		if (luckySymbol == 0) {
			luckyH = "The symbols are matching! <span style='color:#3eb03f'>The broccoli adds 40 trees to the card.</span></br>";
		}
		if (luckySymbol == 1) {
			luckyH = "The symbols are matching! <span style='color:#dd00ff'>The ghost doubles the trees.</span></br>";
		}
		if (luckySymbol == 2) {
			luckyH = "The symbols are matching! <span style='color:#ffc400'>The goldfish adds 80 trees to the card.</span></br>";
		}
	}
	return luckyH;
}

function totalLogCalculator(logs,symbol) {
	var total = 0;
	if (symbol == luckySymbol) {
		if (luckySymbol == 0) {
			total = logs += 40;
		}
		if (luckySymbol == 1) {
			total = logs + logs;
		}
		if (luckySymbol == 2) {
			total = logs += 80;
		}		
	} else {
		total = logs;
	}
	return total;
}

function goYourCards() {
	var luckyH = "";
	var grandTotal = "";
	if (luckySymbol == yourSymbol) {
		luckyH = symbolCalculator(yourSymbol);
		grandTotal = "You now have a total of <span style='color:#0398fc'>" + totalLogCalculator(yourCard,yourSymbol) + " trees</span>";
	}
	changeScene(
		"You reveal your card. There are <span style='color:#0398fc'></br>" + yourCard + " trees.</span></br>" + luckyH + grandTotal,
		cardImages[yourSymbol]
	);
	createGoButton("Ok","talk",goSvenCards);
}

function goSvenCards() {
	console.log("At the end of the turn, Svens move is " + svenMove);
	var luckyH = "";
	var grandTotal = "";
	var svenH = "<span style='color:#04c6c9'>Sven has " + svenCard + " trees</span> on his card.";
	if (foldCheck(svenMove)) {
		svenH = "<span style='color:#04c6c9'>Sven folded.</span> Nothing to see, move along";
	} else {
		if (luckySymbol == svenSymbol) {
			luckyH = symbolCalculator(svenSymbol);
			grandTotal = "Sven now has a total of <span style='color:#04c6c9'>" + totalLogCalculator(svenCard,svenSymbol) + " trees</span></br>";
		}
	}
	changeScene(
		svenH + "</br>" + luckyH + grandTotal,
		cardImages[svenSymbol]
	);
	createGoButton("Ok","talk",goCocobarCards);
}

function goCocobarCards() {
	console.log("At the end of the turn, Cocobars move is " + cocobarMove);
	var luckyH = "";
	var grandTotal = "";
	var cocobarH = "<span style='color:#a6179c'>Cocobar has " + cocobarCard + " trees</span> on her card.";
	if (foldCheck(cocobarMove)) {
		cocobarH = "<span style='color:#a6179c'>Cocobar folded.</span>";
	} else {
		if (luckySymbol == cocobarSymbol) {
			luckyH = symbolCalculator(cocobarSymbol);
			grandTotal = "Cocobar now has a total of <span style='color:#a6179c'>" + totalLogCalculator(cocobarCard,cocobarSymbol) + " trees</span></br>";
		}
	}
	changeScene(
		cocobarH + "</br>" + luckyH + grandTotal,
		cardImages[cocobarSymbol]
	);
	createGoButton("Ok","talk",goPokerTally);
}

function goPokerTally() {
	var svenH = "<span style='color:#04c6c9'>Sven got " + totalLogCalculator(svenCard,svenSymbol) + " tress.</span></br>";
	var cocobarH = "<span style='color:#a6179c'>Cocobar got " + totalLogCalculator(cocobarCard,cocobarSymbol) + " trees.</span></br>";;
	if (foldCheck(svenMove)) {
		svenH = "<span style='color:#04c6c9'>Sven folded.</span></br>";
	}
	if (foldCheck(cocobarMove)) {
		cocobarH = "<span style='color:#a6179c'>Cocobar folded.</span></br>";
	}
	changeScene(
		"The dealer counts the trees:</br>" + svenH + cocobarH + "<span style='color:#0398fc'>You got " + totalLogCalculator(yourCard,yourSymbol) + " trees</span>",
		"pokerTableLogs",
	);
	if (didYouWinPoker()) {
		playSound(soundEffect.win);
		createGoButton("Did I win?","talk",goWinPoker);
	} else {
		playSound(soundEffect.loose);
		createGoButton("Did I lose?","talk",goLosePoker);
	}
}

function didYouWinPoker() {
	var win = true;
	if (!foldCheck(svenMove)) {
		if (totalLogCalculator(yourCard,yourSymbol) < totalLogCalculator(svenCard,svenSymbol)) {
			win = false;
		}
	}
	if (!foldCheck(cocobarMove)) {
		if (totalLogCalculator(yourCard,yourSymbol) < totalLogCalculator(cocobarCard,cocobarSymbol)) {
			win = false;
		}
	}
	return win;
}

function goWinPoker() {
	var totalWinnings = cocobarBet + svenBet;
	yourPokerWood += totalWinnings;
	var lolliCount = Math.round(totalWinnings / 200);
	updateState("bLollipops", state.bLollipops + lolliCount);
	changeScene(
		"You happily empty the huge pile of <span style='color:#d0ba91'>" + totalWinnings + " wood</span> from the table into your pockets. The two others scowl at you.</br>The dealer winks and hands you <span style='color:#ff0000'>" + lolliCount + " lollipops.</span>",
		"pokerTableLogs"
	);
	createGoButton("Yay!","talk",goContinuePoker);
} 

function goLosePoker() {
	yourPokerWood -= yourBet;
	changeScene(
		"It's hard not to cry, when you see your hard earned wood getting loaded of the table into the pockets of the lucky winner",
		"pokerTable"
	);
	createGoButton("Bummer!","talk",goContinuePoker);
}

function goContinuePoker() {
	if (yourPokerWood > 0) {
		changeScene(
			"You have <span style='color:#d0ba91'>" + yourPokerWood + " wood</span> in your pockets. Do you want to keep on playing?",
			"pokerTable"
		);
		if (yourPokerWood >= 100000 && !state.bPokerCubeFound) {
			createGoButton("Claim special reward","wormCube",goFindPokerCube);
		}
		createGoButton("Leave with <span style='color:#d0ba91'>" + yourPokerWood + " wood</span>","pokerLogs",goLeavePoker);
		createGoButton("Play another hand","pokerTable",goDealHand);
	} else {
		changeScene(
			"It looks like you are all out of wood. That's kind of a loser move.. You leave the table",
			"pokerTable"
		);
		createGoButton("Leave","beanieImagination",goCasino);
	}
}

function goLeavePoker() {
	// var lolliCount = Math.round(yourPokerWood / 200);
	// updateState("bLollipops", state.bLollipops + lolliCount);
	changeScene(
		"You leave with <span style='color:#d0ba91'>" + yourPokerWood + " wood</span>",
		"wood"
	);
	createGoButton("Oh yeah!","beanieImagination",goCasino);
	updateState('bWood', state.bWood + yourPokerWood);
}

function goFindPokerCube() {
	updateState('bPokerCubeFound', true);
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
	createGoButton("Fantastic!","wormCube",goContinuePoker);
}