function goMeetAncientPlanet() {
	updateState('bAncientPlanet', true);
	goAncientPlanet();
}

function goAncientPlanet() {
	changeBackground("BG_AncientPlanet");
	changeScene(
		"There's an ancient planet floating about. It's been dead for a long time now.</br>On its surface there is a small fenced garden, and the entrance to a dungeon",
		"ancientPlanet",
		"goAncientPlanet"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	if (state.bBeanieProgress >= 8 && !state.bBobMessage) {
		createGoButton("Bottle","bennyBottle",goBobMessage);
	}
	if (!state.bGardenBoys) {
		createGoButton("The Garden","gardenBoys",goMeetTheGarden);
	} else {
		createGoButton("The Garden Boys","gardenBoys",goGardenBoys);
	}
	createGoButton("Examine Dungeon","stardustDungeon",goExamineDungeon);
}

function goExamineDungeon() {
	changeScene(
		"You take a peek down the dungeon. Dungeons like these used to be filled with jerks, but a dead planet can't sustain any jerks. Now all you can hear from the depths are the bored howls of old Derekulians.</br>There could still be treasure down there.. If only you had somebody who could sneak down there, without getting noticed by the bored bulls",
		"stardustDungeon"
	);
	createGoButton("Back","ancientPlanet",goAncientPlanet);
}

function goMeetTheGarden() {
	changeScene(
		"There's a small fenced garden with a little pond in the middle, surrounded by some garden gnomes. You see a mailbox with a sign saying: 'The Garden Boys'",
		"gardenBoys"
	);
	createGoButton("Anybody home?","talk",goAnybodyHome);
}

function goAnybodyHome() {
	changeScene(
		"Nobody answers. You wonder who The Garden Boys are",
		"gardenBoys",
		"goAnybodyHome"
	);
	createGoButton("Back","ancientPlanet",goAncientPlanet);
	createSingleProduct("Put stardust in the mailbox (5 stardust)");
}

function wakeGardenBoys() {
	updateState('bGardenBoys', true);
	changeScene(
		"One of the garden gnomes whispers a thanks to you. Another one shushes him loudly",
		"lilGnomey"
	);
	createGoButton("Are you The Garden Boys?","talk",goWakeGardenBoys2);
}

function goWakeGardenBoys2() {
	changeScene(
		"The gnomes remain inanimate in the hope that you will leave eventually, but you are not going anywhere",
		"gardenBoys"
	);
	createGoButton("Hello?","talk",goWakeGardenBoys3);
}

function goWakeGardenBoys3() {
	changeScene(
		"Finally one of them breaks the silence. He reveals that they are actually an infamous band of thieves in hiding after a stardust heist that went south.</br>They are laying low in this garden for a while",
		"tipToesTyler"
	);
	createGoButton("Will you work for stardust?","talk",goWakeGardenBoys4);
}

function goWakeGardenBoys4() {
	changeScene(
		"They look at you with greed in their bearded little faces. Anything for stardust!</br>You can now hire The Garden Boys to sneak down the dungeon to find treasure for you",
		"gardenBoys"
	);
	createGoButton("Cool!","talk",goGardenBoys);
}

function goGardenBoys() {

	var gr1 = "";
	var gr2 = "";
	var gr3 = "";

	if (state.bGnomeRecords[0] > 0) {
		gr1 = "Lil' Gnomey's brags about having reached <span style='color:#38b200'>level " + state.bGnomeRecords[0] + "</span></br></br>";
	}
	if (state.bGnomeRecords[1] > 0) {
		gr2 = "Cat Paws Calvin hasn't gotten further down than <span style='color:#38b200'>level " + state.bGnomeRecords[1] + "</span></br></br>";
	}
	if (state.bGnomeRecords[2] > 0) {
		gr3 = "Tip Toe Tyler all time low is <span style='color:#38b200'>level " + state.bGnomeRecords[2] + "</span></br></br>";
	}

	changeScene(
		"The Garden Boys are trying to look innocent. Do you want to hire one of them for a some sneaky spelunking?</br></br>" + gr1 + gr2 + gr3,
		"gardenBoys",
		"goGardenBoys"
	);
	createGoButton("Back","ancientPlanet",goAncientPlanet);
	createSingleProduct("Hire Lil' Gnomey (10 stardust)");
	createSingleProduct("Hire Cat Paws Calvin (50 stardust)");
	createSingleProduct("Hire Tip Toe Tyler (300 stardust)");
}

function goHireGnome(stealth) {
	if (stealth == 15) {
		currentGnome = "lilGnomey";
	}
	if (stealth == 30) {
		currentGnome = "catPawsCalvin";
	}
	if (stealth == 60) {
		currentGnome = "tipToesTyler";
	}
	changeScene(
		"The gnome puts on his sneaky shoes. The dungeon awaits.</br>Don't wake up any Derekulians!",
		"stardustDungeon"
	);
	createGoButton("Let's go!",currentGnome,initializeGnomeDungeon,stealth);
}

var gnomeDoors = [];
var gnomeDoorTypes = [];
var gnomeLevel = 20;
var gnomeStealth = 0;
var gnomeStealthModifier = 0;
var currentGnome = "hammer";
var gnomeDoor1;
var gnomeDoor2;
var detectionRisk1;
var detectionRisk2;

function gnomeDoor(navn,image,rarity) {
	this.navn = navn;
	this.image = image;
	this.rarity = rarity;
}

// function newGnomeDoor(navn,image,rarity) {
// 	var newDoor = new gnomeDoor(navn,image,rarity);
// 	gnomeDoors.push(newDoor);
// }

var woodDoor = new gnomeDoor(
	"Wood Door",
	"doorWood",
	20
);

var cocoDoor = new gnomeDoor(
	"Coco Door",
	"doorCoco",
	20
);

var mysteryDoor = new gnomeDoor(
	"Mystery Door",
	"doorMystery",
	25
);

var goldDoor = new gnomeDoor(
	"Gold Door",
	"doorGold",
	30
);

var stardustDoor = new gnomeDoor(
	"Stardust Door",
	"doorStardust",
	35
);

var shortcutDoor = new gnomeDoor(
	"Shortcut Door",
	"doorShortcut",
	-100
);

var shhhDoor = new gnomeDoor(
	"Shhh! Door",
	"doorShhh",
	-100
);

var allGnomeDoors = [
	shhhDoor,woodDoor,cocoDoor,goldDoor,stardustDoor,mysteryDoor,shortcutDoor
];

var gnomeDoorTypes0 = [
	shhhDoor,
	shortcutDoor,shortcutDoor,
	mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,woodDoor,woodDoor,
	cocoDoor,cocoDoor,cocoDoor,cocoDoor,
	goldDoor
	];

var gnomeDoorTypes5 = [
	shhhDoor,
	shortcutDoor,shortcutDoor,
	mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,
	cocoDoor,cocoDoor,
	goldDoor,
	];

var gnomeDoorTypes10 = [
	shhhDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,
	cocoDoor,cocoDoor,
	goldDoor,goldDoor
	];

var gnomeDoorTypes20 = [
	shhhDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,
	cocoDoor,cocoDoor,
	goldDoor,goldDoor,goldDoor,
	stardustDoor,
	];

var gnomeDoorTypes30 = [
	shhhDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,mysteryDoor,
	woodDoor,
	cocoDoor,
	goldDoor,goldDoor,
	stardustDoor,
	];

function initializeGnomeDungeon(stealth) {
	changeBackground("BG_AncientDungeon");
	gnomeLevel = 0;
	gnomeStealth = stealth;
	if (state.bMouladinUpgrades[3]) {
		gnomeStealth = gnomeStealth * 2;
	}
	newGnomeDungeonLevel();
}

function newGnomeDungeonLevel() {
	gnomeLevel++;
	if (gnomeLevel == 30 && state.bBobMessage && !state.bFriendJerkinson) {
		goFindFriendJerkinson();
	} else if (gnomeLevel == 50 && state.bBobMessage && !state.bFriendSweatson) {
		goFindFriendSweatson();
	} else if (gnomeLevel == 80 && state.bBobMessage && !state.bFriendAncientDerek) {
		goFindFriendAncientDerek();
	} else if (gnomeLevel == 100 && !state.bAncientCubeFound) {
		goFindAncientDungeonCube();
	} else {
		getGnomeDoor(gnomeDoor1);
		getGnomeDoor(gnomeDoor2);	
		goGnomeDungeon();
	}
}

function goFindAncientDungeonCube() {
	updateState('wormCubes', state.wormCubes + 1);
	updateState('bAncientCubeFound', true);
	if (state.tTerrariumFound) {
		changeScene(
			"Ok wow! There was <span style='color:#ff00bb'>a Worm Cube</span> stowed away in the corner of this level.</br>Let's put it in the Time Terrarium",
			"wormCube"
		);
	} else {
		changeScene(
			"Ok wow! There was <span style='color:#ff00bb'>a Worm Cube</span> stowed away in the corner of this level.</br>You don't know what it is, but you have a feeling that you will need it in another life. Better keep it safe",
			"wormCube"
		);
	}
	createGoButton("Fantastic! But let's keep going","wormCube",newGnomeDungeonLevel);
}

function goGnomeDungeon() {
	changeScene(
		"Your gnome is on <span style='color:#38b200'>level " + gnomeLevel + "</span> of the dungeon.</br>There are two doors. Which one should the gnome enter?",
		currentGnome
	);
	createGoButton(gnomeDoor1.navn + " (" + detectionRisk1 + "% risk of detection)",gnomeDoor1.image,gnomeDoorFunctions,1);
	createGoButton(gnomeDoor2.navn + " (" + detectionRisk2 + "% risk of detection)",gnomeDoor2.image,gnomeDoorFunctions,2);
}

function getGnomeDoor(doorNr) {
	var gnomeDoorTypes;
	if (gnomeLevel < 5) {
		gnomeDoorTypes = gnomeDoorTypes0;
	}
	if (gnomeLevel >= 5 && gnomeLevel < 10) {
		gnomeDoorTypes = gnomeDoorTypes5;
	}
	if (gnomeLevel >= 10 && gnomeLevel < 20) {
		gnomeDoorTypes = gnomeDoorTypes10;
	}
	if (gnomeLevel >= 20 && gnomeLevel < 30) {
		gnomeDoorTypes = gnomeDoorTypes20;
	}
	if (gnomeLevel >= 30) {
		gnomeDoorTypes = gnomeDoorTypes20;
	}
	if (doorNr == gnomeDoor1) {
		gnomeDoor1 = gnomeDoorTypes[Math.floor(Math.random() * gnomeDoorTypes.length)];
		detectionRisk1 = (gnomeDoor1.rarity + (gnomeLevel * 2)) - (gnomeStealth + gnomeStealthModifier);
		detectionRisk1 = Math.max(0,detectionRisk1);
		detectionRisk1 = Math.min(100,detectionRisk1);
	}
	if (doorNr == gnomeDoor2) {
		gnomeDoor2 = gnomeDoorTypes[Math.floor(Math.random() * gnomeDoorTypes.length)];
		while (gnomeDoor2 == gnomeDoor1) {
			console.log("Rolls a new door because they were the same");
			gnomeDoor2 = gnomeDoorTypes[Math.floor(Math.random() * gnomeDoorTypes.length)];
		}
		detectionRisk2 = (gnomeDoor2.rarity + (gnomeLevel * 2)) - (gnomeStealth + gnomeStealthModifier);
		detectionRisk2 = Math.max(0,detectionRisk2);
		detectionRisk2 = Math.min(100,detectionRisk2);
	}
}

function gnomeDoorFunctions(nr) {

	console.log("door nr: " + nr);
	var detectedGnome = false;
	// var risk = 1 + (((Math.random() * 100) + (Math.random() * 100)) / 2);
	var risk = 1 + (Math.random() * 100);
	console.log("risk level: " + risk);

	if (nr == 1) {
		door = gnomeDoor1;
		if (risk < detectionRisk1) {
			detectedGnome = true;
		}
	}
	if (nr == 2) {
		door = gnomeDoor2;
		if (risk < detectionRisk2) {
			detectedGnome = true;
		}
	}
	//Mystery Door
	if (nr == 3) {
		door = allGnomeDoors[Math.floor(Math.random() * allGnomeDoors.length)];
		while (door.navn == "Mystery Door") {
			door = allGnomeDoors[Math.floor(Math.random() * allGnomeDoors.length)];
		}
	}
	
	if (detectedGnome) {
		var thisD = allDereks[Math.floor(Math.random() * allDereks.length)];
		gnomeStealthModifier = 0;
		var newRecord = "";
		if (currentGnome == "lilGnomey") {
			if (state.bGnomeRecords[0] < gnomeLevel) {
				updateArrayState('bGnomeRecords', 0, gnomeLevel);
				newRecord = "</br></br>It's a new gnome record!!</span>";
			}
		} else if (currentGnome == "catPawsCalvin") {
			if (state.bGnomeRecords[1] < gnomeLevel) {
				updateArrayState('bGnomeRecords', 1, gnomeLevel);
				newRecord = "</br></br>It's a new gnome record!!</span>";
			}
		} else if (currentGnome == "tipToesTyler") {
			if (state.bGnomeRecords[2] < gnomeLevel) {
				updateArrayState('bGnomeRecords', 2, gnomeLevel);
				newRecord = "</br></br>It's a new gnome record!!</span>";
			}
		}
		changeScene(
			"Oh no! <span style='color:#" + thisD.clr + "'>" + thisD.navn + "</span> found your gnome. His manic bull roars can be heard all the way into space. You reached <span style='color:#38b200'>level " + gnomeLevel + "</span> of the dungeon. Better luck next time<span style='color:#38b200'>" + newRecord,
			thisD.image 
		);
		createGoButton("Pokkers!",thisD.image,dungeonLollies,gnomeLevel);
	} else {

		var h;

		if (door.navn == "Wood Door") {
			var amount = 30 * gnomeLevel;
			updateState('bWood', state.bWood + amount);
			h = "You found " + amount + " wood!";
		}
		if (door.navn == "Coco Door") {
			var amount = 30 * gnomeLevel;
			updateState('bCoco', state.bCoco + amount);
			h = "You found " + amount + " coco!";
		}
		if (door.navn == "Gold Door") {
			var amount = 15 * gnomeLevel;
			updateState('bGold', state.bGold + amount);
			h = "You found " + amount + " gold!";		
		}
		if (door.navn == "Stardust Door") {
			var amount = Math.round(0.6 * gnomeLevel);
			updateState('bStardust', state.bStardust + amount);
			h = "You found " + amount + " stardust!";		
		}
		if (door.navn == "Mystery Door") {
			h = "Uuuh! It's a mystery door. There could be anything behind here";
		}
		if (door.navn == "Shortcut Door") {
			h = "Hey! It's a shortcut to the next level";
		}
		if (door.navn == "Shhh! Door") {
			gnomeStealthModifier += (2 + Math.round(Math.random() * 3));
			h = "SHHHHH! Don't make so much noise gnome. Your gnome really takes that to heart, and starts moving more quietly";
		}

		changeScene(
			h,
			door.image
		);
		if (door.navn == "Mystery Door") {
			createGoButton("Mysterious!",door.image,gnomeDoorFunctions,3);
		} else {
			createGoButton("Cool",currentGnome,newGnomeDungeonLevel);
		}

	}

}

function dungeonLollies(level) {
	var lollipopAmount = Math.round(level / 2);
	updateState('bLollipops', state.bLollipops + lollipopAmount);
	changeScene(
		"The gnome hands you <span style='color:#ff0000'>" + lollipopAmount + " lollipop(s).</span> He doesn't say why",
		"Lollipop"
	);
	createGoButton("Nice!","Lollipop",goAncientPlanet);
}


//GOOD RARITY PICK CODE

// function getGnomeDoor() {
// 	var levelScore = Math.random() * gnomeLevel;
// 	console.log("levelScore: " + levelScore);
// 	var lowScore = 9999;
// 	var bestDoorIndex;
// 	for (var i = 0; i < gnomeDoors.length; i++) {
// 		var doorScore = Math.random() * gnomeDoors[i].rarity;
// 		console.log("doorScore: " + doorScore);
// 		var distanceToLevelScore = Math.abs(doorScore - levelScore);
// 		//Math.abs(distanceToLevelScore);
// 		if (distanceToLevelScore < lowScore) {
// 			console.log("new low score!");
// 			console.log("distanceToLevelScore: " + distanceToLevelScore);
// 			lowScore = distanceToLevelScore;
// 			bestDoorIndex = i;
// 		}
// 	}
// 	console.log("The best door was " + gnomeDoors[bestDoorIndex].navn);
// }

function goFindFriendJerkinson() {
	changeScene(
		"Your gnome jumps in the air. Has he been spotted by a derek!?",
		currentGnome	
	);
	createGoButton("What is it?","talk",goFindFriendJerkinson2);
}

function goFindFriendJerkinson2() {
	changeScene(
		"It's Jerkinson Crusoe!</br>He has been stranded in this deserted dungeon, and finally somebody found him!</br>You should put him somewhere safe. How about Beanie's imagination?",
		"jerkinsonCrusoe"
	);
	createGoButton("You're safe now","jerkinsonCrusoe",goFindFriendJerkinson3);
}

function goFindFriendJerkinson3() {
	updateState("bFriendJerkinson", true);
	changeScene(
		"Jerkinson is safe now. But your gnome is eager to continue!",
		currentGnome
	);
	createGoButton("Psst! Let's go","talk",newGnomeDungeonLevel);
}

//-----

function goFindFriendSweatson() {
	changeScene(
		"Your gnome trips in a puddle of sweat!",
		currentGnome
	);
	createGoButton("Sweat!?","talk",goFindFriendSweatson2);
}

function goFindFriendSweatson2() {
	changeScene(
		"It's Sweatson! Your old buddy.</br>You have no idea how he got here, but you also don't really care. You are just happy to have your old trusty Sweatson back",
		"sweatson"
	);
	createGoButton("Sweatson!","sweatson",goFindFriendSweatson3);
}

function goFindFriendSweatson3() {
	updateState('bFriendSweatson', true);
	changeScene(
		"You decide to send Sweatson to Beanie's imagination, while you continue your stealthy adventure",
		currentGnome
	);
	createGoButton("Psst! Let's go","talk",newGnomeDungeonLevel);
}

//-----

function goFindFriendAncientDerek() {
	changeScene(
		"Oh no! Your gnome got spotted by a Derekulian!",
		currentGnome
	);
	createGoButton("Oh no!","talk",goFindFriendAncientDerek2);
}

function goFindFriendAncientDerek2() {
	changeScene(
		"Wait a minute. This is an old Derek.</br>Apparently he has grown tired of fighting his way through life. All he ever wanted was to be loved",
		"ancientDerek"
	);
	createGoButton("I love you","talk",goFindFriendAncientDerek3);
}

function goFindFriendAncientDerek3() {
	updateState('bFriendAncientDerek', true);
	changeScene(
		"You send the ancient Derek to Beanie's imagination. You can think of no better place to spend the last days of your life.</br>You better get on with your little dungeon heist",
		currentGnome
	);
	createGoButton("Psst! Let's go","talk",newGnomeDungeonLevel);
}

function goBobMessage() {
	changeScene(
		"There's a nervous bottle standing outside the dungeon.</br>His name is Benny, and he won't shut up about his family of loyal bottle messengers",
		"bennyBottle"
	);
	createGoButton("Get to the point","talk",goBobMessage2);
}

function goBobMessage2() {
	updateState('bBobMessage', true);
	changeScene(
		"Oh, right. He formally reads aloud the message:</br>Heeeeelp! I'm stuck, oh no! I can't find my way up! Oh NO! Hugs and kisses from Jerkinson Crusoe</br></br>Benny eats the message, and looks at you with an unaltered look of intensity.</br></br>It seems like Jerkinson Crusoe is stuck down in the dungeon. It could be cool if you could find him",
		"bennyBottle"
	);
	createGoButton("Thank you Benny","talk",goAncientPlanet);
}
