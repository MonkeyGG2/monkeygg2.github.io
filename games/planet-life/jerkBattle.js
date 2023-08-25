var jerkRefreshCost = 0;
var jerkActions = 3;
var left_over_cards = 0;
var refresh_pile = false;
var muffins = 0;
var muffinMultiplier = 1;
var ringMultiplier = 1;
var strengthMultiplier = 1;
var allJerks = [];
var extraActions = 0;
var bossBattle = "";
var derekArray = allDereks;
var curDerekShip;

function drawJerksFromPile(amount) {
	playSound(soundEffect.jerkSquad);
	var j = state.jerkPile;
	//check if there will be enough available cards in the jerk pile
	var enough_cards = false;
	if (availableJerksInPile(j) >= amount) {
		console.log("enough jerks in pile");
		enough_cards = true;
	}
	if (!enough_cards) {
		//TODO: Se om det her kan være rigtigt
		console.log("not enough cards");
		var new_amount = availableJerksInPile(j);
		left_over_cards = amount - new_amount;
		amount = new_amount;
	}
	var i = 0;
	while (i < amount) {
		var magicNumber = Math.floor(Math.random() * state.jerkPile.length);
		if (!j[magicNumber].loaded && !j[magicNumber].exhausted && !j[magicNumber].removed) {
			console.log(j[magicNumber].navn);
			j[magicNumber].loaded = true;
			i++;
		} else {
			magicNumber = Math.floor(Math.random() * state.jerkPile.length);
		}
	}
	updateState("jerkPile", j);
	//TODO: if not enough cards, do a reload scene and keep track of left_over_cards to do another drawJerksFromPile()
	//Is this done?
	if (!enough_cards) {
		refresh_pile = true;
	}

}

function goRefreshJerks() {
	playSound(soundEffect.heal);
	// updateState('bCoco', state.bCoco - jerkRefreshCost);
	refresh_pile = false;
	var j = state.jerkPile;
	var amount_loaded = 0;
	for (var i = 0; i < j.length; i++) {
		if (!j[i].exhausted && !j[i].removed) {
			console.log("IT'S loaded");
			j[i].loaded = true;
			amount_loaded++;
		}
	}
	console.log("amount loaded: " + amount_loaded);
	for (var i = 0; i < j.length; i++) {
		j[i].exhausted = false;
	}
	updateState('jerkPile', j);
	var left_to_load = state.bJerksPerTurn - amount_loaded;
	console.log("left to load: " + left_to_load);
	drawJerksFromPile(left_to_load);
	goChooseJerk();
}

function beatenJerksInPile(pile) {
	var available_cards = 0;
	for (var i = 0; i < pile.length; i++) {
		if (pile[i].exhausted && !pile[i].removed) {
			available_cards++;
		}
	}
	return available_cards;
}

function availableJerksInPile(pile) {
	var available_cards = 0;
	for (var i = 0; i < pile.length; i++) {
		if (!pile[i].loaded && !pile[i].exhausted && !pile[i].removed) {
			available_cards++;
		}
	}
	return available_cards;
}

function loadedJerks(pile) {
	var loaded_jerks = 0;
	for (var i = 0; i < pile.length; i++) {
		if (pile[i].loaded) {
			loaded_jerks++;
		}
	}
	return loaded_jerks;
}

function unloadAllJerks() {
	var j = state.jerkPile;
	for (var i = 0; i < j.length; i++) {
		if (j[i].loaded) {
			j[i].loaded = false;
			//If you want jerks not to exhaust after having been loaded, disable this
			j[i].exhausted = true;
		}
	}
	updateState('jerkPile', j);
}

//Use this to set a jerks removed, exhausted and loaded
function manipulateJerk(array,loaded,exhausted,removed) {
	var j = state.jerkPile;
	for (var a = 0; a < array.length; a++) {
		for (var i = 0; i < j.length; i++) {
			if (array[a] == j[i].ID) {
				if (loaded) {
					if (j[i].loaded) {
						j[i].loaded = false;
					} else {
						j[i].loaded = true;
					}
				}
				if (exhausted) {
					if (j[i].exhausted) {
						j[i].exhausted = false;
					} else {
						j[i].exhausted = true;
					}
				}
				if (removed) {
					if (j[i].removed) {
						j[i].removed = false;
					} else {
						j[i].removed = true;
					}
				}
			}
		}
	}
	updateState('jerkPile', j);
}

function goChooseJerk() {
	var beatupText = "";
	if (calculateDefeatedJerks() > 0) {
		beatupText = "<span style='color:#bf0000'>" + calculateDefeatedJerks() + " jerk(s) are totally beat up.</span></br>";
	}
	var availableText = "";
	if (availableJerksInPile(state.jerkPile) > 0) {
		availableText = "<span style='color:#0a8f00'>There are " + availableJerksInPile(state.jerkPile) + " healthy jerk(s) in your pile.</span></br>";
	}
	var onStage = "<span style='color:#16fa05'>" + loadedJerks(state.jerkPile) + " jerk(s) step up to fight!</span></br>";
	changeScene(
		"<span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span> is pumped. He has <span style='color:#ff0000'>" + curDerekulianHealth + "/" + derekulianHealth + " health.</span><br/>He is super hungry and intends to eat <span style='color:#00fff7'>" + curDerekHunger + " stardust</span> from your core <span style='color:#00fff7'>(" + state.bCoreStardust + "/" + state.bCoreCapacity + " stardust in core)</span></br>You have baked <span style='color:#fca903'>" + muffins + " muffins.</span></br>" + availableText + onStage + beatupText + "Which jerk do you want to pit against him?<br/>You have <span style='color:#ffea00'>" + jerkActions + " jerk actions</span> left",
		derekArray[curDerekIndex].image,
		"goChooseJerk"
	);
	createGoButton("End round",derekArray[curDerekIndex].image,goDerekEat);
	createGoButton("Run away","jerkSquad",goRunAwaySure);
	var j = state.jerkPile;
	for (var i = 0; i < j.length; i++) {
		if (j[i].loaded) {
			createTextButton(
				j[i].navn + " <span style='color:#ffd500'>(" + j[i].actionCost + ")</span>",
				j[i].image,
				describeJerk(j[i].attack,j[i].parameter),
				attackDerek,
				j[i].navn + j[i].ID + "but",
				j[i].buttonDescription,
				j[i].ID
			);
			if (j[i].actionCost > jerkActions) {
				document.getElementById(j[i].navn + j[i].ID + "but").disabled = true;
			}
		}
	}

	if (loadedJerks(state.jerkPile) == 0) {
		changeScene("You have no jerks left!","doorOfRegret");
		createGoButton("Yikes!","bullFart",goDerekEat);
	}
	if (refresh_pile) {
		jerkRefreshCost = Math.floor(state.bCoco * 0.20);
		changeScene(
			"Your whole jerk pile has been beaten up!</br>But <span style='color:#16fa05'>these jerks never give up!</span> In a flash they are ready to fight for you again!",
			"jerkSquad"
		);
		createGoButton("Go go jerks!","jerkSquad",goRefreshJerks);
	}

}

function goDerekEat() {
	// playSound(soundEffect.thirsty);
	if (muffins > 0) {
		if (muffins >= curDerekHunger) {
			//Eats all the muffins, and not appetite for stardust
			changeScene(
				"<span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span> frothingly eats <span style='color:#fca903'>" + muffins + " muffins.</span> He is super full so he leaves your stardust alone.. for now",
				"muffin"
			);
		} else {
			//Eats all the muffins but has a remaining appetite for stardust
			var leftover_hunger = curDerekHunger - muffins;
			changeScene(
				"<span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span> frothingly eats <span style='color:#fca903'>" + muffins + " muffins.</span> But he is still super hungry, so he also eats <span style='color:#ff0000'>" + leftover_hunger + " stardust</span>",
				"muffin"
			);
			updateState('bCoreStardust', state.bCoreStardust - leftover_hunger);
		}
	} else {
		//Eats the stardust
		//"<span style='color:#" + allDereks[curDerekIndex].clr + "'>" + allDereks[curDerekIndex].navn + "</span> frothingly eats <span style='color:#ff0000>" + curDerekHunger + " stardust</span>"
		changeScene(
			"<span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span> frothingly eats <span style='color:#ff0000'>" + curDerekHunger + " stardust</span>",
			"stardust"
		);
		updateState('bCoreStardust', state.bCoreStardust - curDerekHunger);
	}
	createGoButton("OK!","talk",loadBurgulonDungeonLevel);

	if (state.bCoreStardust <= 0) {
			//Derek wins
			playMusic();
			drainCore();
			var j = state.jerkPile;
			for (var i = 0; i < j.length; i++) {
				j[i].loaded = false;
				j[i].exhausted = false;
			}
			updateState('jerkPile', j);
			if (bossBattle == "bent") {
				goBentWins();
			} else if (bossBattle == "slopnax") {
				goSlopnaxWins();
			} else if (bossBattle == "mayonada") {
				goMayonadaWins();
			} else if (bossBattle == "derek") {
				goDerekWins();
			} else if (bossBattle == "jack") {
				if (state.bDerekProgress == 2) {
					goJackExplodes();
				} else {
					goJackWins();
				}
			} else {
				changeScene(
					"<span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span> sucks the remaining stardust out of your core. He returns to his home planet Derekulus X, victorious!",
					"blackHole"
				);
				createGoButton("Bummer","bullFart",goNewGalaxy);
			}
		}
		
}

function loadBurgulonDungeonLevel() {
	console.log("loadBurgulonDungeonLevel");
	//curBurgulonLevel++;
	muffins = 0;
	curDerekBaseHunger += derekulianHealth / 40;
	calculateDerekHunger();
	//curDerekHunger += Math.floor(curDerekHunger * 0.2);
	jerkActions = state.bJerkActions + extraActions;
	unloadAllJerks();
	drawJerksFromPile(state.bJerksPerTurn);
	goChooseJerk();
}

function calculateDerekHunger() {
	curDerekHunger = Math.floor(Math.random() * curDerekBaseHunger) + Math.floor(curDerekBaseHunger / 10);
}

//Do this before entering the dungeon

function startDungeon() {
	console.log("startDungeon");
	//curBurgulonLevel = 0;
	var j = state.jerkPile;
	for (var i = 0; i < j.length; i++) {
		// if (!j[i].removed) {
		// 	j[i].loaded = false;
		// 	j[i].exhausted = false;
		// }
		j[i].loaded = false;
		j[i].exhausted = false;
	}
	updateState('jerkPile', j);
	jerkActions = state.bJerkActions;
	muffinMultiplier = 1;
	ringMultiplier = 1;
	strengthMultiplier = 1;
	muffins = 0;
	extraActions = 0;
	drawJerksFromPile(state.bJerksPerTurn);
	goChooseJerk();
}

function goDerekDead() {
	// if (bossBattle == "") {
	// 	changeScene(derekArray[curDerekIndex].navn + " has been defeated! Your jerks swarm over to loot all his precious space rings","thirsty");
	// 	createGoButton("Go get 'em!","spaceRing",goLootRings);
	// } else if (bossBattle == "bent") {
	// 	goDefeatBent();
	// } else if (bossBattle == "slopnax") {
	// 	goDefeatSlopnax();
	// } else if (bossBattle == "mayonada") {
	// 	goDefeatMayonada();
	// } else if (bossBattle == "derek") {
	// 	goDefeatOgDerek();
	// }
	changeScene(
		derekArray[curDerekIndex].navn + " has been defeated! Your jerks swarm over to loot all his precious space rings",
		"jerkSquadCelebrating"
	);
	createGoButton("Go get 'em!","spaceRing",goLootRings);
}

function goLootRings() {
	var lootedRings = Math.round(derekulianHealth * ringMultiplier);
	updateState('bSpaceRings', state.bSpaceRings + lootedRings);
	changeScene(
		"You collect <span style='color:#ffd500'>" + lootedRings + " space rings</span> from the defeated enemy",
		"spaceRing"
	);
	if (state.bDoubleRings) {
		createGoButton("Check socks","bullSocks",goCheckSocks,lootedRings);
	}
	createGoButton("Oh yeah!","talk",goLootRes,lootedRings);
}

function goCheckSocks(lootedRings) {
	var sockRings = 5 + Math.ceil(Math.random() * lootedRings);
	updateState('bSpaceRings', state.bSpaceRings + sockRings);
	changeScene(
		"You shake the stinking socks, and <span style='color:#ffc800'>" + sockRings + " space rings</span> fall out of the socks",
		"bullSocks"
	);
	setTimeout(function(){
		changeScene(
			"You shake the stinking socks, and <span style='color:#ffc800'>" + sockRings + " space rings</span> fall out of the socks",
			"spaceRing"
		);
		createGoButton("Score!","spaceRing",goLootRes,lootedRings);
	},1000);
}

function goLootRes(rings) {
	var resTypes = [
		"Wood",
		"Gold",
		"Coco",
		"Stardust"
	];
	var resImages = [
		"wood",
		"gold",
		"coco",
		"stardust"
	];
	var resAmounts = [
		30,
		10,
		30,
		3
	];
	var chosenRes = Math.floor(Math.random() * 4);
	var amount = resAmounts[chosenRes] * rings;
	if (chosenRes == 0) {
		updateState('bWood', state.bWood + amount);
	} else if (chosenRes == 1) {
		updateState('bGold', state.bGold + amount);
	} else if (chosenRes == 2) {
		updateState('bCoco', state.bCoco + amount);
	} else if (chosenRes == 3) {
		updateState('bStardust', state.bStardust + amount);
	}
	changeScene(
		"You also find " + amount + " " + resTypes[chosenRes] + " in his wallet",
		resImages[chosenRes]
	);
	createGoButton("Sweet",resImages[chosenRes],goLootLollies,rings);
}

function goLootLollies(rings) {
	playMusic();
	var lolliAmount = Math.round(rings/15);
	updateState('bLollipops', state.bLollipops + lolliAmount);
	changeScene(
		"Look! Your jerks give you <span style='color:#ff0000'>" + lolliAmount + " lollipops</span>, for being so nice to them.</br>Do they really like getting beaten up like this all the time?",
		"Lollipop"
	);
	if (bossBattle == "" || bossBattle == 1 || bossBattle == 2 || bossBattle == 3 || bossBattle == 0) {
		// if (state.bDoubleRings) {
		// 	createGoButton("Check socks","bullSocks",goCheckSocks,rings);
		// }
		createGoButton("Alright!","talk",finishDerek);
		//createGoButton("Oh yeah!","talk",goLootRes,lootedRings);
	} else if (bossBattle == "bent") {
		createGoButton("Alright!","talk",goDefeatBent);
		//goDefeatBent();
	} else if (bossBattle == "slopnax") {
		createGoButton("Alright!","talk",goDefeatSlopnax);
		//goDefeatSlopnax();
	} else if (bossBattle == "mayonada") {
		createGoButton("Alright!","talk",goDefeatMayonada);
		//goDefeatMayonada();
	} else if (bossBattle == "derek") {
		createGoButton("Alright!","talk",goDefeatOgDerek);
		//goDefeatOgDerek();
	} else if (bossBattle == "randomDerek") {
		if (derekulianHealth == 1000000 && !state.bMillionDerekCubeFound) {
			createGoButton("Alright!","talk",goFindMillionDerekCube);
		} else {
			createGoButton("Alright!","talk",goDerekSummoningDevice);
		}
	} else if (bossBattle == "jack") {
		createGoButton("Alright!!","talk",goDefeatJack);
	}
	//createGoButton("Alright!","talk",finishDerek);
}

function calculateDefeatedJerks() {
	//return (state.jerkPile.length - availableJerksInPile(state.jerkPile)) - ;
	var beaten = 0;
	var j = state.jerkPile;
	for (var i = 0; i < j.length; i++) {
		if (!j[i].removed && !j[i].loaded && j[i].exhausted) {
			beaten++;
		}
	}
	return beaten;
}

function goRunAwaySure() {
	changeScene(
		"Are you sure you want to run away from this epic battle?",
		"burgulon"
	);
	createGoButton("No","no",goChooseJerk);
	createGoButton("Yes","yes",goRunAway);
}

function goRunAway() {
	playMusic();
	changeScene(
		"You take all your jerks and get out of there!</br>Better not risk losing more stardust",
		"jerkSquad"
	);
	createGoButton("Phew","talk",goNewGalaxy);
}
