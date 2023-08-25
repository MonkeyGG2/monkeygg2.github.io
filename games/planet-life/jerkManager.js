
function jerk(navn,ID,image,actionCost,description,buttonDescription,rarity,attack,parameter,loaded,exhausted,removed) {
	this.navn = navn;
	this.ID = ID;
	this.image = image;
	this.description = description;
	this.rarity = rarity;
	this.attack = attack;
	this.parameter = parameter;
	this.loaded = loaded;
	this.exhausted = exhausted;
	this.removed = removed;
	this.buttonDescription = buttonDescription;
	this.actionCost = actionCost;
}

function newJerk(navn,image,actionCost,description,buttonDescription,rarity,attack,parameter) {
	var new_jerk = new jerk (navn,0,image,actionCost,description,buttonDescription,rarity,attack,parameter,false,false,false);
	allJerks.push(new_jerk);
}

function newSpecialJerk(navn,image,actionCost,description,buttonDescription,rarity,attack,parameter) {
	var new_jerk = new jerk (navn,0,image,actionCost,description,buttonDescription,rarity,attack,parameter,false,false,false);
	allSpecialJerks.push(new_jerk);
}

function newJerkToPile(navn) {
	for (var i = 0; i < allJerks.length; i++) {
		var j = allJerks[i];
		if (navn == j.navn) {
			var ID = state.jerkPile.length;
			var new_jerk = new jerk(j.navn,ID,j.image,j.actionCost,j.description,j.buttonDescription,j.rarity,j.attack,j.parameter,false,false,false);
			var newJerkPile = state.jerkPile;
			newJerkPile.push(new_jerk);
			updateState('jerkPile', newJerkPile);
		}
	}
}

// function newSpecialJerkToPile(navn) {
// 	for (var i = 0; i < allSpecialJerks.length; i++) {
// 		var j = allSpecialJerks[i];
// 		if (navn == j.navn) {
// 			var ID = state.jerkPile.length;
// 			var new_jerk = new jerk(j.navn,ID,j.image,j.actionCost,j.description,j.buttonDescription,j.rarity,j.attack,j.parameter,false,false,false);
// 			var newJerkPile = state.jerkPile;
// 			newJerkPile.push(new_jerk);
// 			updateState('jerkPile', newJerkPile);
// 		}
// 	}
// }

function pickJerkByRarity(lowerCap) {
	var jerkPoints = [];
	for (var i = 0; i < allJerks.length; i++) {
		var j = allJerks[i];
		if (j.rarity > lowerCap) {
			var jerkScore = (j.rarity/7) + (Math.random() * j.rarity);
			// var jerkScore = (j.rarity/4) + (Math.random() * j.rarity);
			jerkPoints.push(jerkScore);
		} else {
			jerkPoints.push(null);
		}
	}
	var magicNumber = 3;
	var highscore = 100;
	for (var i = 0; i < jerkPoints.length; i++) {
		if (jerkPoints[i] < highscore && jerkPoints[i] != null) {
			highscore = jerkPoints[i];
			console.log("i: " + allJerks[i].navn + " - HS: " + highscore);
			magicNumber = i;
		}
	}
	console.log("You got a: " + allJerks[magicNumber].navn);
	console.log(highscore);
	return magicNumber;
	// newJerkToPile(allJerks[magicNumber].navn);
	// upgradeAnimation("It's a brand new " + allJerks[magicNumber].navn,allJerks[magicNumber].image,goJerkClub);
}

newJerk(
	"Jerkinson Crusoe",
	"jerkinsonCrusoe",
	1,
	"Makes the enemy lose half its appetite for stardust",
	"Eww!",
	99,
	"disgusting",
	20
);

newJerk(
	"Regular Jerk",
	"jerkRegular",
	1,
	"Deals 10 damage (increased further by attack power)",
	"Fight!",
	1,
	"deal damage",
	10
);

newJerk(
	"Tiny Jerkomancer",
	"jerkomancer",
	1,
	"Draws 2 new jerks",
	"Summon!",
	3,
	"draw jerk",
	2
);

newJerk(
	"Jerkomancer",
	"jerkomancer",
	0,
	"Draws 2 new jerks",
	"Summon!",
	6,
	"draw jerk",
	2
);

newJerk(
	"Tiny Cheating Jerk",
	"jerkCheating",
	0,
	"Gets you 1 more action this turn",
	"Cheat!",
	3,
	"change actions",
	1
);

newJerk(
	"Cheating Jerk",
	"jerkCheating",
	0,
	"Gets you 2 more actions this turn",
	"Cheat!",
	6,
	"change actions",
	2
);

newJerk(
	"Big Jerk",
	"jerkBig",
	2,
	"Deals 25 damage (increased further by attack power)",
	"Smash!",
	3,
	"deal damage",
	25
);

newJerk(
	"Giant Jerk",
	"jerkGiant",
	3,
	"Deals 40 damage (increased further by attack power)",
	"Eliminate!",
	5,
	"deal damage",
	40
);

newJerk(
	"Jerk Baker",
	"jerkBaker",
	1,
	"Bakes 8 muffins (increased further by muffin power)",
	"Bake!",
	1,
	"bake muffins",
	8
);

newJerk(
	"Big Jerk Baker",
	"jerkBakerBig",
	2,
	"Bakes 20 muffins (increased further by muffin power)",
	"Bake!",
	3,
	"bake muffins",
	20
);

newJerk(
	"Giant Jerk Baker",
	"jerkBakerGiant",
	3,
	"Bakes 40 muffins (increased further by muffin power)",
	"Bake!",
	5,
	"bake muffins",
	40
);

newJerk(
	"Jerk Manager",
	"jerkManager",
	1,
	"Increases muffin productivity",
	"Manage!",
	4,
	"increase muffin multiplier",
	0.8
);

newJerk(
	"Annoying Jerk Manager",
	"jerkAnnoyingManager",
	2,
	"Increases muffin productivity a lot",
	"Manage!",
	6,
	"increase muffin multiplier",
	2.0
);

newJerk(
	"Jerk Accountant",
	"jerkAccountant",
	1,
	"Makes the enemy drop 20% more rings",
	"Massage!",
	3,
	"increase ring multiplier",
	0.2
);

newJerk(
	"Jerk Coach",
	"jerkCoach",
	1,
	"Makes your jerks 50% stronger!",
	"Train!",
	3,
	"increase strength multiplier",
	0.5
);

newJerk(
	"Intense Jerk Coach",
	"jerkIntenseCoach",
	2,
	"Makes your jerks 100% stronger!",
	"TRAIN!",
	6,
	"increase strength multiplier",
	1.0
);

newJerk(
	"Mean Jerk",
	"jerkMean",
	2,
	"Deals 20 damage (increased further by attack power). Does double damage when the enemy is below 50% health",
	"Fight!",
	4,
	"double damage",
	20
);

newJerk(
	"Pack Leader Jerk",
	"jerkPackLeader",
	3,
	"Deals 2 damage for each jerk in your pile (increased further by attack power)",
	"Fight!",
	3,
	"damage pr jerk",
	2
);

newJerk(
	"Angry Fat Kid Jerk",
	"jerkFatKid",
	3,
	"Deals damage equal to muffins baked (increased further by attack power)",
	"Fat!",
	4,
	"damage pr muffin",
	1
);

newJerk(
	"Muffin Jerk",
	"jerkMuffin",
	1,
	"Doubles your muffins",
	"Muffins!",
	4,
	"double muffins",
	1
);

newJerk(
	"Juggler Jerk",
	"jerkJuggler",
	0,
	"Gets you 1 extra action and draws 1 jerk",
	"Juggle!",
	3,
	"juggle",
	1
);

newJerk(
	"Time Jerk",
	"jerkTime",
	3,
	"Increases your actions per turn by 1",
	"Warp time!",
	6,
	"extra action pr turn",
	1
);

newJerk(
	"Ninja Jerk",
	"jerkNinja",
	1,
	"Deals 15 damage (increased further by attack power)",
	"Fight!",
	3,
	"deal damage",
	15
);

newJerk(
	"Vengeful Jerk",
	"jerkVengeful",
	2,
	"Deals 3 damage per beaten up jerk (increased further by attack power)",
	"Fight!",
	4,
	"deals damage pr beaten jerk",
	3
);

newJerk(
	"Jerk Thrower",
	"jerkThrower",
	1,
	"Throws all your ready jerks at enemy and deals 8 damage for each jerk (increased further by attack power)",
	"Throw!",
	1,
	"throw jerks",
	8
);

newJerk(
	"Loud Jerk",
	"jerkLoud",
	2,
	"Deals 10 damage and summons 1 jerk (increased further by attack power)",
	"FIGHT!",
	2,
	"yell",
	10
);

newJerk(
	"Buffet Jerk",
	"jerkBuffet",
	3,
	"Bakes 1 muffins for each jerk in your pile (increased further by muffin power)",
	"Bake!",
	5,
	"buffet",
	1
);

newJerk(
	"Frankenstein's Baker Jerk",
	"jerkFrankenstein",
	2,
	"Bakes 2 muffins for each beaten up jerk (increased further by muffin power)",
	"Bake!",
	6,
	"frankenstein",
	2
);

newJerk(
	"Cannibal Jerk",
	"jerkCannibal",
	1,
	"Bakes all your ready jerks into 3 muffins each (increased further by muffin power)",
	"Bake!",
	2,
	"cannibal",
	3
);

newJerk(
	"Angry Jerk Baker",
	"jerkBakerAngry",
	3,
	"Bakes 15 muffins and deals 15 damage (increased further by attack and muffin power)",
	"Shake and bake!",
	2,
	"shake and bake",
	15
);

newJerk(
	"Snappy Jerk Baker",
	"jerkBakerSnappy",
	0,
	"Bakes 8 muffins (increased further by muffin power)",
	"Bake!",
	5,
	"bake muffins",
	8
);

//LEGENDARY JERKS

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Time Jerk",
	"jerkTimeLEGENDARY",
	3,
	"Increases your actions per turn by 3",
	"Warp time!",
	15,
	"extra action pr turn",
	3
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Juggler Jerk",
	"jerkJugglerLEGENDARY",
	0,
	"Gets you 3 extra action and draws 3 jerk",
	"Juggle!",
	15,
	"legendaryJuggle",
	3
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Jerk Coach",
	"jerkCoachLEGENDARY",
	2,
	"Makes your jerks 300% stronger!",
	"TRAIN!",
	15,
	"increase strength multiplier",
	3.0
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Jerk Manager",
	"jerkManagerLEGENDARY",
	1,
	"Increases muffin productivity",
	"Manage!",
	15,
	"increase muffin multiplier",
	6.0
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Jerk Baker",
	"jerkBakerGiantLEGENDARY",
	3,
	"Bakes 120 muffins (increased further by muffin power)",
	"Bake!",
	15,
	"bake muffins",
	120
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Jerk",
	"jerkGiantLEGENDARY",
	3,
	"Deals 120 damage (increased further by attack power)",
	"Eliminate!",
	15,
	"deal damage",
	120
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Jerkomancer",
	"jerkomancerLEGENDARY",
	0,
	"Draws 6 new jerks",
	"Summon!",
	15,
	"draw jerk",
	6
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Cheating Jerk",
	"jerkCheatingLEGENDARY",
	0,
	"Gets you 6 more actions this turn",
	"Cheat!",
	15,
	"change actions",
	6
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Vengeful Jerk",
	"jerkVengefulLEGENDARY",
	2,
	"Deals 10 damage per beaten up jerk (increased further by attack power)",
	"Fight!",
	15,
	"deals damage pr beaten jerk",
	10
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Cannibal Jerk",
	"jerkCannibalLEGENDARY",
	1,
	"Bakes all your ready jerks into 9 muffins each (increased further by muffin power)",
	"Bake!",
	15,
	"cannibal",
	9
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Jerk Thrower",
	"jerkThrowerLEGENDARY",
	1,
	"Throws all your ready jerks at enemy and deals 30 damage for each jerk (increased further by attack power)",
	"Throw!",
	15,
	"throw jerks",
	30
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Pack Leader Jerk",
	"jerkPackLeaderLEGENDARY",
	3,
	"Deals 6 damage for each jerk in your pile (increased further by attack power)",
	"Fight!",
	15,
	"damage pr jerk",
	6
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Angry Fat Kid Jerk",
	"jerkFatKidLEGENDARY",
	3,
	"Deals 3 damage for each muffin baked (increased further by attack power)",
	"Fat!",
	14,
	"damage pr muffin",
	3
);

newJerk(
	"<span style='color:#ea00ff'>LE</span><span style='color:#ffd900'>GE</span><span style='color:#00ff08'>ND</span><span style='color:#00d9ff'>ARY</span> Mean Jerk",
	"jerkMeanLEGENDARY",
	2,
	"Deals 60 damage (increased further by attack power). Does double damage when the enemy is below 50% health",
	"Fight!",
	15,
	"double damage",
	60
);

function attackDerek(ID) {
	var j = state.jerkPile;
	var attack;
	var amount;
	var attack_description;
	var image;
	var actionCost;
	var h = "hej";

	for (var i = 0; i < j.length; i++) {
		if (ID == j[i].ID) {
			attack = j[i].attack;
			amount = j[i].parameter;
			attack_description = j[i].attack_description;
			image = j[i].image;
			actionCost = j[i].actionCost;
		}
	}

	if (attack == "deal damage") {
		playRandomPunchSound();
		amount = J_CalculateDamage(amount);
		h = "Your jerk deals <span style='color:#ff0000'>" + amount + " damage.</span>";
		J_DealDamage(amount);
	}
	if (attack == "draw jerk") {
		h = amount + " more jerks join the fight!";
		drawJerksFromPile(amount);
	}
	if (attack == "change actions") {
		h = "The Jerk shows you how to cheat. You get <span style='color:#ffea00'>" + amount + " more jerk action(s).</span>";
		jerkActions += amount;
	}
	if (attack == "bake muffins") {
		playSound(soundEffect.ding);
		amount = amount * state.bJerkMuffinPower;
		amount = Math.round(amount * muffinMultiplier);
		h = "The jerk baker pops <span style='color:#fca903'>" + amount + " muffins</span> out of the oven.";
		muffins += amount;
	}
	if (attack == "increase muffin multiplier") {
		muffinMultiplier = Math.round(muffinMultiplier += amount);
		h = "The jerk manager pitches some inspirational nonsense to your bakers. They become disillusioned to think they are productive. Your <span style='color:#fca903'>muffin productivity increases to " + muffinMultiplier + ".</span>"; 
	}
	if (attack == "increase ring multiplier") {
		ringMultiplier += amount;
		h = "The jerk accountant starts massaging the enemy. Hopefully this will make him drop more rings when you defeat him.";
	}
	if (attack == "increase strength multiplier") {
		strengthMultiplier += amount;
		h = "The jerk coach yells a lot of nonsense at your poor jerks.";
	}
	if (attack == "double damage") {
		if (curDerekulianHealth < (derekulianHealth / 2)) {
			amount = J_CalculateDamage(amount) * 2;
			h = "The mean jerk is really in the mood today. He deals <span style='color:#ff0000'>" + amount + " damage.</span>";
		} else {
			amount = J_CalculateDamage(amount);
			h = "The mean jerk deals a mere <span style='color:#ff0000'>" + amount + " damage.</span> He didn't quite feel the bloodlust today.";
		}
		J_DealDamage(amount);
	}
	if (attack == "damage pr jerk") {
		amount = Math.round(((availableJerksInPile(state.jerkPile) * amount) * strengthMultiplier) * state.bJerkAttackPower);
		h = "The jerk howls like a wolf and deals <span style='color:#ff0000'>" + amount + " damage.</span>";
		J_DealDamage(amount);
	}
	if (attack == "damage pr muffin") {
		amount = amount * (Math.round((muffins * strengthMultiplier) * state.bJerkAttackPower));
		h = "The little jerk is so angry that none of the muffins are for him. He deals <span style='color:#ff0000'>" + amount + " damage.</span>";
		J_DealDamage(amount);
	}
	if (attack == "double muffins") {
		muffins = muffins * 2;
		h = "What? Now there are <span style='color:#fca903'>" + muffins + " muffins.</span>";
	}
	if (attack == "juggle") {
		drawJerksFromPile(amount);
		jerkActions += amount;
		h = "Before you know it theres a new jerk ready to fight, and you got another jerk action. Amazing juggler.";
	}
	if (attack == "legendaryJuggle") {
		drawJerksFromPile(amount);
		jerkActions += amount;
		h = "Before you know it theres 3 new jerks ready to fight, and you got 3 more jerk actions. Amazing LEGENDARY juggler.";
	}
	if (attack == "extra action pr turn") {
		extraActions += amount;
		h = "Time is warped and that's pretty good apparently. You now have " + amount + " extra action every turn";
	}
	if (attack == "deals damage pr beaten jerk") {
		amount = Math.round(((beatenJerksInPile(state.jerkPile) * amount) * strengthMultiplier) * state.bJerkAttackPower);
		h = "The jerk remembers all the poor buddies that got lost to the enemy, and deals <span style='color:#ff0000'>" + amount + " damage.</span>";
		J_DealDamage(amount);
	}
	if (attack == "throw jerks") {
		amount = Math.round((((loadedJerks(state.jerkPile) - 1) * amount) * strengthMultiplier) * state.bJerkAttackPower);
		h = "The jerk throws your other jerks right into the face of the enemy and deals <span style='color:#ff0000'>" + amount + " damage.</span>";
		J_DealDamage(amount);
		unloadAllJerks();
		//Don't know why I need to do this, but if I don't the jerk is neither unloaded or exhausted
		manipulateJerk([ID],true,true,false);
	}
	if (attack == "yell") {
		amount = J_CalculateDamage(amount);
		h = "The jerk screams while dealing <span style='color:#ff0000'>" + amount + " damage</span> to the enemy. He wakes up another jerk, that is totally ready to fight now.";
		J_DealDamage(amount);
		drawJerksFromPile(1);
	}
	if (attack == "buffet") {
		amount = Math.round(((availableJerksInPile(state.jerkPile) * amount) * state.bJerkMuffinPower) * muffinMultiplier);
		h = "The jerk is setting up a delicious buffet of <span style='color:#fca903'>" + amount + " muffins.</span>";
		muffins += amount;
	}
	if (attack == "frankenstein") {
		amount = Math.round(((beatenJerksInPile(state.jerkPile) * amount) * state.bJerkMuffinPower) * muffinMultiplier);
		h = "The jerk is utilizing the poor beaten up jerks to bake <span style='color:#fca903'>" + amount + " foul muffins.</span>";
		muffins += amount;
	}
	if (attack == "cannibal") {
		amount = Math.round((((loadedJerks(state.jerkPile) - 1) * amount) * state.bJerkMuffinPower) * muffinMultiplier);
		h = "The jerk is baking <span style='color:#fca903'>" + amount + " muffins</span> out of your jerks. How terrible!";
		unloadAllJerks();
		manipulateJerk([ID],true,true,false);
		muffins += amount;
	}
	if (attack == "shake and bake") {
		amount = J_CalculateDamage(amount);
		h = "The jerk bakes <span style='color:#fca903'>" + J_CalculateMuffins(8) + " muffins</span>, and is really unhappy with the result. He let's out his anger by dealing <span style='color:#ff0000'>" + amount + " damage</span> to the enemy.";
		muffins += J_CalculateMuffins(8);
		J_DealDamage(amount);
	}
	if (attack == "disgusting") {
		curDerekHunger = Math.ceil(curDerekHunger / 2);
		h = "Jerkinson hasn't attended to his personal hygiene at all. Everyone loses their appetite! Now <span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span> can only eat <span style='color:#00fff7'>" + curDerekHunger + " stardust</span>" 
	}

	manipulateJerk([ID],true,true,false);

	jerkActions -= actionCost;

	if (state.impatientMode) {
		beatUpJerk();
	} else {
		changeScene(
			h,
			image
		);	
		createGoButton("OK!","derekStrength",beatUpJerk,ID);	
	}

}

function beatUpJerk() {

	playRandomPunchSound();

	var thisDerek = "<span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "</span>";

	var jerkDeathDescriptions = [
		thisDerek + " stomps really hard on his toes",
		thisDerek + " throws him straight into a wall",
		thisDerek + " punches him right in the kisser",
		thisDerek + " elbows him hard in the nuts",
		thisDerek + " folds him into a macabre jerk origami thing",
		thisDerek + " hits him with a casual round house kick",
		thisDerek + " wipes the floor with him",
		thisDerek + " eats all his hair and flushes him out the toilet",
		thisDerek + " kicks him into orbit",
		thisDerek + " refurnishes his face with a well placed fist",
		thisDerek + " takes him to town with a mean judo chop",
		thisDerek + " knocks him cold with a horrific warcry",
		thisDerek + " makes jerk pie out of the poor guy",
		thisDerek + " charges him into the air",
		thisDerek + " lands hard on him"
	];

	if (curDerekulianHealth <= 0) {
		goDerekDead(); 
	} else {
		if (state.impatientMode) {
			goChooseJerk();
		} else {
			changeScene(
				"Slam!",
				"derekStrength"
			);
			setTimeout(function() {
				changeScene(
					jerkDeathDescriptions[Math.floor(Math.random() * jerkDeathDescriptions.length)],
					derekArray[curDerekIndex].image
				);
				createGoButton("Auch!",derekArray[curDerekIndex].image,goChooseJerk);
			},500);	
		}

	}

}

function J_DealDamage(amount) {
	console.log("deal " + amount + " damage");
	curDerekulianHealth -= amount;
}

function J_CalculateDamage(amount) {
	return Math.round((amount * state.bJerkAttackPower) * strengthMultiplier);
}

function J_CalculateMuffins(amount) {
	return Math.round((amount * state.bJerkMuffinPower) * muffinMultiplier);
}

function describeJerk(type,amount) {
	if (type == "deal damage") {
		return "Deals " + J_CalculateDamage(amount) + " damage";
	}
	if (type == "draw jerk") {
		return "Draw " + amount + " more jerk(s)";
	}
	if (type == "change actions") {
		return "Get " + amount + " more jerk actions";
	}
	if (type == "bake muffins") {
		return "Bake " + J_CalculateMuffins(amount) + " muffins";
	}
	if (type == "increase muffin multiplier") {
		return "Increase muffin productivity by " + amount;
	}
	if (type == "increase ring multiplier") {
		return "Get more rings from this enemy";
	}
	if (type == "increase strength multiplier") {
		return "Makes your jerks deal more damage";
	}
	if (type == "double damage") {
		if (curDerekulianHealth < (derekulianHealth / 2)) {
			return "Deals " + (J_CalculateDamage(amount) * 2) + " damage because the enemy health is below 50%";
		} else {
			return "Deals " + J_CalculateDamage(amount) + " damage. Would deal double damage if enemy is below 50% health";
		}
	}
	if (type == "damage pr jerk") {
		return "Deals " + Math.round(((availableJerksInPile(state.jerkPile) * amount) * strengthMultiplier) * state.bJerkAttackPower) + " damage (3 for each jerk in your pile)";
	}
	if (type == "damage pr muffin") {
		return "Deals " + amount * (Math.round((muffins * strengthMultiplier) * state.bJerkAttackPower)) + " damage (more for each muffin baked)";
	}
	if (type == "double muffins") {
		return "Doubles your muffins";
	}
	if (type == "juggle") {
		return "Get 1 extra action and draw 1 jerk";
	}
	if (type == "legendaryJuggle") {
		return "Get 3 extra actions and draw 3 jerks";
	}
	if (type == "extra action pr turn") {
		return "Increases your actions per turn by " + amount;
	}
	if (type == "deals damage pr beaten jerk") {
		return "Deals " + Math.round(((beatenJerksInPile(state.jerkPile) * amount) * strengthMultiplier) * state.bJerkAttackPower) + " damage (3 for each beaten up jerk)";
	}
	if (type == "throw jerks") {
		return "Throws all your ready jerks at the enemy and deals " + Math.round((((loadedJerks(state.jerkPile) - 1) * amount) * strengthMultiplier) * state.bJerkAttackPower) + " damage";
	}
	if (type == "yell") {
		return "Deals " + J_CalculateDamage(amount) + " damage and summons 1 jerk";
	}
	if (type == "buffet") {
		return "Bakes " + Math.round(((availableJerksInPile(state.jerkPile) * amount) * state.bJerkMuffinPower) * muffinMultiplier) + " muffins. More for each jerk in your pile";  
	}
	if (type == "frankenstein") {
		return "Bakes " + Math.round(((beatenJerksInPile(state.jerkPile) * amount) * state.bJerkMuffinPower) * muffinMultiplier) + " muffins. More for each beaten up jerk";
	}
	if (type == "cannibal") {
		return "Bakes " + Math.round((((loadedJerks(state.jerkPile) - 1) * amount) * state.bJerkMuffinPower) * muffinMultiplier) + " muffins out of all your ready jerks";
	}
	if (type == "shake and bake") {
		return "Bakes " + J_CalculateMuffins(8) + " muffins and deals " + J_CalculateDamage(amount) + " damage";
	}
	if (type == "disgusting") {
		return "Makes the enemy lose half its appetite for stardust";
	}
}