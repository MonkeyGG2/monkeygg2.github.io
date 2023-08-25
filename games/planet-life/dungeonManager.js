function dungeonType(navn,depth,difficulty,image,levels,place,imageFighting) {
	this.navn = navn;
	this.depth = depth;
	this.difficulty = difficulty;
	this.image = image;
	this.imageFighting = imageFighting;
	this.levels = levels;
	this.curLevel = 1;
	this.completed = false;
	this.place = place;
}

//PLANET DUNGEONS
var juicyDungeon = new dungeonType("Juicy Dungeon","(shallow)",0.5,"dungeon",10,"planet","dungeonBeating");
var scaryDungeon = new dungeonType("Scary Dungeon","(deep)",1,"dungeon",20,"planet","dungeonBeating");
var coolDungeon = new dungeonType("Cool Dungeon","(abyssal)",1.5,"dungeon",30,"planet","dungeonBeating");

//COCO DUNGEONS
var cocoDungeon1 = new dungeonType("Sweet Coco Dungeon","(shallow)",3,"cocoDungeon",10,"cocoCastle","cocoDungeonBeating");
var cocoDungeon2 = new dungeonType("Slippery Coco Dungeon","(deep)",3.5,"cocoDungeon",20,"cocoCastle","cocoDungeonBeating");
var cocoDungeon3 = new dungeonType("Melting Coco Dungeon","(abyssal)",4,"cocoDungeon",30,"cocoCastle","cocoDungeonBeating");

//MONSTER DUNGEONS
var monsterDungeon1 = new dungeonType(
	"Juicy Monster Dungeon",
	"(shallow)",
	5,
	"monsterDungeon",
	10,
	"lochJuice",
	"monsterDungeonBeating"
);
var monsterDungeon2 = new dungeonType(
	"Stinky Monster Dungeon",
	"(deep)",
	5.5,
	"monsterDungeon",
	20,
	"lochJuice",
	"monsterDungeonBeating"
);
var monsterDungeon3 = new dungeonType(
	"Repulsive Monster Dungeon",
	"(abyssal)",
	6,
	"monsterDungeon",
	30,
	"lochJuice",
	"monsterDungeonBeating"
);

//DEREKULUS X
var derekulusX = new dungeonType(
	"Derekulus X",
	"(ENDLESS)",
	15,
	"spaceDungeon",
	99,
	"space",
	"spaceDungeonBeating"
);

var yourDungeons = [juicyDungeon,scaryDungeon,coolDungeon,cocoDungeon1,cocoDungeon2,cocoDungeon3,monsterDungeon1,monsterDungeon2,monsterDungeon3,derekulusX];

function doorType(navn,image,jerkCount,giftType,giftCount,rewardResource) {
	this.navn = navn;
	this.image = image;
	this.jerkCount = jerkCount;
	this.giftType = giftType;
	this.giftCount = giftCount;
	this.rewardResource = rewardResource;
}

//Door chances 1 - 10. 10 is high chance, 1 is low chance.
//Er door chances overhovedet med mere?

//The function of the door is triggered by detecting its name further down this script

var smallPresentDoor = new doorType("Small present door","doorSmallPresent",15,1,1,[0,0,0,0]);
var mediumPresentDoor = new doorType("Medium present door","doorMediumPresent",25,2,1,[0,0,0,0]);
var bigPresentDoor = new doorType("Big present door","doorBigPresent",40,3,1,[0,0,0,0]);
var shortcutDoor = new doorType("Shortcut door","doorShortcut",0,0,0,[0,0,0,0]);
var boringDoor = new doorType("Boring door","doorBoring",5,0,0,[0,0,0,0]);
var mysteryDoor = new doorType("Mystery door","doorMystery",0,0,0,[0,0,0,0]);
var woodDoor = new doorType("Wood door","doorWood",15,0,0,[1,0,0,0]);
var cocoDoor = new doorType("Coco door","doorCoco",15,0,0,[0,0,1,0]);
var goldDoor = new doorType("Gold door","doorGold",25,0,0,[0,1,0,0]);
var stardustDoor = new doorType("Stardust door","doorStardust",50,0,0,[0,0,0,1]);
var chestDoor = new doorType("Chest door","doorChest",35,0,0,[0,0,0,0]);

var allDoorKinds = [smallPresentDoor,mediumPresentDoor,bigPresentDoor,shortcutDoor,boringDoor,mysteryDoor,woodDoor,cocoDoor,goldDoor,stardustDoor,chestDoor];

var doorTypes = [];
//var doorTypes = [smallPresentDoor,mediumPresentDoor,bigPresentDoor,shortcutDoor,boringDoor,mysteryDoor];

var doorTypes0 = [
	boringDoor,boringDoor,boringDoor,boringDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,woodDoor,
	cocoDoor,cocoDoor,cocoDoor,
	goldDoor,
	chestDoor
	];
var doorTypes5 = [
	boringDoor,boringDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,
	cocoDoor,cocoDoor,
	goldDoor,goldDoor,
	chestDoor
	];
var doorTypes10 = [
	boringDoor,boringDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,mysteryDoor,
	woodDoor,woodDoor,
	cocoDoor,cocoDoor,
	goldDoor,goldDoor,goldDoor,
	stardustDoor,
	chestDoor
	];
var doorTypes15 = [
	boringDoor,boringDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,mysteryDoor,
	woodDoor,
	cocoDoor,
	goldDoor,goldDoor,goldDoor,
	stardustDoor,stardustDoor,
	chestDoor
	];
var doorTypes20 = [
	boringDoor,boringDoor,
	shortcutDoor,
	mysteryDoor,mysteryDoor,mysteryDoor,
	woodDoor,
	cocoDoor,
	goldDoor,goldDoor,
	stardustDoor,stardustDoor,stardustDoor,
	chestDoor
	];

function insertPresentDoors(level,difficulty,doorCount) {
	for (var i = 0; i < doorCount; i++) {
		var chosenDoor;
		var chance = Math.random() * ((difficulty * 3) + level);
		if (chance <= 5) {
			chosenDoor = smallPresentDoor;
		} else if (chance > 5 && chance <= 10) {
			chosenDoor = mediumPresentDoor;
		} else if (chance > 10) {
			chosenDoor = bigPresentDoor;
		}
		doorTypes.push(chosenDoor);
	}
}

var dNr = 0;
var doors = [];
var doorNr;
var jerkCount;
var chanceDoorsRolled = 0;
var jerksStrengthed = 0;
var jerkDam = 0;
var jerksArmored = 0;
var thirstyHappened = false;

function goPickDungeon() {
	changeBackground("BG_Planet");
	updateState('dungeonFound', true);
	if (state.derekDefrosted) {
		changeScene("Derek can't wait to go see what's down those dungeons. You better choose a dungeon soon. Derek is breathing heavily.","dungeonDerek","goPickDungeon");
		createGoButton("Back","newSurface",checkWhat);
		// createGoButton("DEREK!","derek",goDerekHub);
		if (state.derekHealth < state.derekMaxHealth) {
			createSmallBuildButton("Heal Derek (" + (state.derekMaxHealth - state.derekHealth) + " coco)","coco","healDerekBut",cocoHealDerek);
		}
		if (!state.broccoliChapter) {
			createGoButton("Burger advice","burger",goBurgerAdvice);
		}
		for (var i = 0; i < state.dungeons.length; i++) {
			if (!state.dungeons[i].completed && state.dungeons[i].place == "planet") {
				createGoButton(state.dungeons[i].navn + " " + state.dungeons[i].depth,state.dungeons[i].image,goThisDungeon,i);
			}
		}
		var anyDungeons = false;
		var anyCocoDungeons = false;
		var anyMonsterDungeons = false;
		var anySpaceDungeons = false;
		for (var i = 0; i < state.dungeons.length; i++) {
			// if (!state.dungeons[i].completed && state.dungeons[i].place == "planet") {
			// 	anyDungeons = true;
			// }
			if (!state.dungeons[i].completed && state.dungeons[i].place == "cocoCastle" && state.cocoDungeonsFound) {
				anyCocoDungeons = true;
			}
			if (!state.dungeons[i].completed && state.dungeons[i].place == "lochJuice" && state.monsterDungeons) {
				anyMonsterDungeons = true;
			}
			if (!state.dungeons[i].completed && state.dungeons[i].place == "space" && state.derekulusX) {
				anySpaceDungeons = true;
			}
		}
		if (anySpaceDungeons) {
			createGoButton("Derekulus X","spaceDungeon",goSpaceDungeon);
		}
		if (anyMonsterDungeons) {
			createGoButton("Monster Dungeons","monsterDungeon",goMonsterDungeon);
		}
		if (anyCocoDungeons) {
			createGoButton("Coco Dungeons","cocoDungeon",goCocoDungeons);
		}
		if (anyDungeons) {
			createGoButton("Dungeons","dungeon",goPickDungeon);
		}
	} else {
		changeScene("It's a valley full of dungeons. Leading into.. you? You'll need somebody to go down there, because you obviously can't","dungeon","goPickDungeon");
		createGoButton("Back","newSurface",checkWhat);
	}
	if (state.derekDead) {
		derekDead();
	}
}

function fillPotionBelt() {
	updateState('gold', state.gold - (calculateEmptyPotionSlots() * 25));
	updateState('healthPotions', state.healthPotionCapacity);
	upgradeAnimation("So many potions in that belt!","derekBelt",goDerekHub);
}

function calculateEmptyPotionSlots() {
	return state.healthPotionCapacity - state.healthPotions;
}

function goDungeonMaster() {
	changeScene(
		"The floating face of the mighty DM is hanging in the air. Let's come up with some new dungeons for this campaign!",
		"dungeonMaster",
		"goDungeonMaster"
	);
	createGoButton("Back","newSurface",checkWhat);
	if (state.dungeonsCompleted) {
		createProduct("Endless Dungeon");
	}
	if (state.cocoDungeonsCompleted) {
		createProduct("Endless Coco Dungeon");
	}
	if (state.monsterDungeonsCompleted) {
		createProduct("Endless Monster Dungeon");
	}
}

function cocoHealDerek(where) {
	var price = (state.derekMaxHealth - state.derekHealth);
	if (state.coco >= price) {
		playSound(soundEffect.heal);
		playSound(soundEffect.derek);
		updateState('derekHealth', state.derekMaxHealth);
		updateState('coco',state.coco - price);
		if (where == "Coco dungeons") {
			goCocoDungeons();
		} else if (where == "Monster dungeons") {
			goMonsterDungeon();
		} else if (where == "Space dungeons") {
			goSpaceDungeon();
		} else {
			goPickDungeon();
		}
	}
}

function goBurgerAdvice() {
	var h = "You can tell that Burger knows a great deal about dungeons.<br/>";
	var h2 = "<br/>Honestly you get quite tired of listening after a while";
	var tips = [
		" Through chirps and beeps, he convinces you that it's best to start with the shallow dungeon. He talks a great deal about learning curves and Derek Safety Regulations.",
		" Burger carefully chirps a warning. It is important to have Derek properly educated before going into the dungeon. The poor bull might die, and it is said that only stardust will bring him back to life again.",
		" Especially about doors in dungeons. He tells you that jerks typically like to hide behind doors of extra cool treasure. Like presents. He talks to lengths about jerk gravitational physics and treasure logic.",
		" He chirps out some wisdom - The deeper you are in the dungeon, the more jerks you are going to see. He writes some simple, but mind boggling functions.",
		" He looks out in the distance. His slow chirps tell you that there must be more dungeons out in the universe. Much harder than these dungeons on your surface. You try to get Burger to tell you more, but something seems to be wrong with his memory parts again.",
		" But he tells you that <span style='color:#ff00bb'>@3DCrede</span> on twitter knows even more, and is just as eager to talk about dungeons."
	];
	h += tips[burgerAdviceNr];
	var tipImages = ["burger","dungeonSchool","doorBigPresent","classroom","universe","item_GlassesOfThirsty"];
	changeScene(h + h2,tipImages[burgerAdviceNr],"goBurgerAdvice");
	burgerAdviceNr++
	if (burgerAdviceNr == tips.length) {
		burgerAdviceNr = 0;
	}
	createGoButton("Back","dungeon",goPickDungeon);
	createGoButton("More advice","burger",goBurgerAdvice);
	if (state.dungeonsCompleted) {
		changeScene(
			"Burger congratulates you with beating all three dungeons. He gives you a friendly chirp on the back, and suggests that you go see what's up in the workshop",
			"burger",
			"goBurgerAdvice"
		);
		createGoButton("What's up?","workshop",goWorkshop);
	}

}

function goThisDungeon(nr) {
	changeBackground("BG_Dungeon");

	playBattleMusic();

	dNr = nr;
	if (state.dungeons[dNr].image == "cocoDungeon") {
		changeBackground("BG_CocoDungeon");
	}
	if (state.dungeons[dNr].image == "monsterDungeon") {
		changeBackground("BG_MonsterDungeon");
	}
	if (state.dungeons[dNr].image == "spaceDungeon") {
		changeBackground("BG_DerekulusX");
	}
	//Resets all the uses on skills
	var statNames = ["extra Bull Fart uses","extra Thirsty uses","extra Door of Regret uses","extra Full Heal uses"];
	for (var i = 0; i < allSkills.length; i++) {
		if (state.skillStates[i] > 0) {
			allSkills[i].curUses = allSkillTiers[findCurTierIndexBySkillIndex(i)].uses;
		} else if (allDerekStats[statNames[i]] > 0) {
			allSkills[i].curUses = 0;
		}
	}
	//Resets level on dungeon
	state.dungeons[dNr].curLevel = 1;
	doorTypes = [];
	changeScene("You enter the " + state.dungeons[dNr].navn,state.dungeons[dNr].image,"goThisDungeon");
	createGoButton("Let's go!",state.dungeons[dNr].image,goPickDoor,true);
}

function goPickDoor(chooseDoor) {

	chanceDoorsRolled = 0;
	thirstyHappened = false;

	var derekHealed = "";

	if (allDerekStats["health regeneration per dungeon level"] > 0 && state.derekHealth < state.derekMaxHealth) {
		var health = state.derekHealth;
		health += allDerekStats["health regeneration per dungeon level"];
		if (health > state.derekMaxHealth) {
			health = state.derekMaxHealth;
		}
		updateState('derekHealth', health);
		derekHealed = "</br><span style='color:#16fa05'>Derek healed " + allDerekStats["health regeneration per dungeon level"] + " health from his equipment.</span>"
	} 

	var h = "Derek is on <span style='color:#38b200'>level " + state.dungeons[dNr].curLevel + "/" + state.dungeons[dNr].levels + "</span> of this dungeon. Derek's health is like <span style='color:#ff0000'>" + (state.derekHealth + allDerekStats["health"]) + "/" + (state.derekMaxHealth + allDerekStats["health"]) + "</span>. There are two doors. Which one will Derek enter?" + derekHealed;

	if (chooseDoor) {
		if (state.dungeons[dNr].curLevel == 5) {
			doorTypes = doorTypes5.slice();
			insertPresentDoors(5,state.dungeons[dNr].difficulty,3);
		} else if (state.dungeons[dNr].curLevel == 10) {
			doorTypes = doorTypes10.slice();
			insertPresentDoors(10,state.dungeons[dNr].difficulty,3);
		} else if (state.dungeons[dNr].curLevel == 15) {
			doorTypes = doorTypes15.slice();
			insertPresentDoors(15,state.dungeons[dNr].difficulty,3);
		} else if (state.dungeons[dNr].curLevel == 20) {
			doorTypes = doorTypes20.slice();
			insertPresentDoors(20,state.dungeons[dNr].difficulty,3);
		} else if (state.dungeons[dNr].curLevel == 1) {
			doorTypes = doorTypes0.slice();
			insertPresentDoors(0,state.dungeons[dNr].difficulty,3);
		}
		for (var i = 0; i < 2; i++) {
			var thisRandomDoor = Math.floor(Math.random() * doorTypes.length);
			doors[i] = doorTypes[thisRandomDoor];
			console.log("OG Door was " + doorTypes[thisRandomDoor].navn);
			if (chanceDoorsRolled < 1) {
				console.log("chance doors rolled " + chanceDoorsRolled);
				h += rollChanceOfDoor(i);
			}
		}
		while (doors[1] == doors[0]) {
			console.log("rerolling doors because they are the same");
			doors[1] = doorTypes[Math.floor(Math.random() * doorTypes.length)];
			if (chanceDoorsRolled < 1) {
				console.log("chance doors rolled " + chanceDoorsRolled);
				h += rollChanceOfDoor(1);
			}
		}
		console.log("---- FLOOR LOADED -----");
	}

	changeScene(
		h,
		state.dungeons[dNr].image,
		"goPickDoor"
	);
	if (state.dungeons[dNr].place == "planet") {
		createGoButton("Leave this dungeon!","newSurface",exitDungeonSure);
	}
	if (state.dungeons[dNr].place == "cocoCastle") {
		createGoButton("Leave this dungeon!","cocoDungeon",exitDungeonSure);
	}
	if (state.dungeons[dNr].place == "lochJuice") {
		createGoButton("Leave this dungeon!","monsterDungeon",exitDungeonSure);
	}
	if (state.dungeons[dNr].place == "space") {
		createGoButton("Leave this dungeon!","planet",exitDungeonSure);
	}
	for (var i = 0; i < doors.length; i++) {
		createGoButton(doors[i].navn,doors[i].image,goCheckDoor,i);
	}
	if (state.dungeons[dNr].curLevel >= state.dungeons[dNr].levels) {
		goDungeonDone();
	}
}

function rollChanceOfDoor(i) {
	var stardustDoorChance = Math.random() * 100;
	var shortcutDoorChance = Math.random() * 100;
	var chestDoorChance = Math.random() * 100;
	var stardustDoorPoints = 0, shortcutDoorPoints = 0, chestDoorPoints = 0;
	if (stardustDoorChance <= allDerekStats["chance of stardust door"]) {
		stardustDoorPoints = allDerekStats["chance of stardust door"] - stardustDoorChance;
	}
	if (shortcutDoorChance <= allDerekStats["chance of shortcut door"]) {
		shortcutDoorPoints = allDerekStats["chance of shortcut door"] - shortcutDoorChance;
	}
	if (chestDoorChance <= allDerekStats["chance of chest door"]) {
		chestDoorPoints = allDerekStats["chance of chest door"] - chestDoorChance;
	}
	console.log("stardustDoorPoints: " + stardustDoorPoints);
	console.log("shortcutDoorPoints: " + shortcutDoorPoints);
	console.log("chestDoorPoints: " + chestDoorPoints);
	if (stardustDoorPoints > shortcutDoorPoints && stardustDoorPoints > chestDoorPoints) {
		console.log("Set door to Stardust Door");
		chanceDoorsRolled++;
		doors[i] = allDoorKinds[9];
		// doors[i].navn += "<span style='color:#0088ff'> (found by equipment)</span>";
		return "<span style='color:#0088ff'></br>Derek found a Stardust Door with his equipment.</span>";
	} else if (shortcutDoorPoints > stardustDoorPoints && shortcutDoorPoints > chestDoorPoints) {
		console.log("Set door to Shortcut Door");
		chanceDoorsRolled++;
		doors[i] = allDoorKinds[3];
		// doors[i].navn += "<span style='color:#0088ff'> (found by equipment)</span>";
		return "<span style='color:#0088ff'></br>Derek found a Shortcut Door with his equipment.</span>";
	} else if (chestDoorPoints > stardustDoorPoints && chestDoorPoints > shortcutDoorPoints) {
// Lav det til chestDoor når den feature er lavet
		console.log("Set door to Chest Door");
		chanceDoorsRolled++;
		doors[i] = allDoorKinds[10];
		// doors[i].navn += "<span style='color:#0088ff'> (found by equipment)</span>";
		return "<span style='color:#0088ff'></br>Derek found a Chest Door with his equipment.</span>";	
	} else {
		return "";
	}
}

function generateJerks() {
	jerkCount = Math.round((doors[doorNr].jerkCount + (state.dungeons[dNr].curLevel * 1.5) + (Math.random() * state.dungeons[dNr].curLevel)) * state.dungeons[dNr].difficulty);
}

function goCheckDoor(nr) {
	if ((Math.random() * 100) < allDerekStats["chance of Thirsty"] && !thirstyHappened) {
		thirstyHappened = true;
		skillThirsty(true,nr);
	} else {
		doorNr = nr;
		if (doors[doorNr].navn == "Shortcut door") {
			goShortcutDoor();
		} else if (doors[doorNr].navn == "Mystery door") {
			goMysteryDoor();
		} else {
			generateJerks();
			goEnterDoor();
		}
	}
}

function goMysteryDoor() {
	while (doors[doorNr].navn == "Mystery door") {
		doors[doorNr] = allDoorKinds[Math.floor(Math.random() * allDoorKinds.length)];
	}
	generateJerks();
	if (doors[doorNr].navn != "Mystery door") {
		changeScene("The mystery door turns out to be a <span style='color:#38b200'>" + doors[doorNr].navn + "</span>. How mysterious!",doors[doorNr].image,"goMysteryDoor");
		if (doors[doorNr].navn == "Shortcut door") {
			createGoButton("Let's a go go!",doors[doorNr].image,goShortcutDoor);
		} else {
			createGoButton("Let's a go!",doors[doorNr].image,goEnterDoor);
		}
	}
}

function goShortcutDoor() {
	upgradeAnimation("Shortcut!","doorShortcut",goPickDoor,true);
	state.dungeons[dNr].curLevel++;
}

function goEnterDoor() {
	changeScene("So dude, this is <span style='color:#38b200'>level " + state.dungeons[dNr].curLevel + "/" + state.dungeons[dNr].levels + "</span>. There's around <span style='color:#38b200'>" + jerkCount + " jerks</span> in this room. I'm totally gonna wreck them by the way. Also my health is like <span style='color:#ff0000'>" + (state.derekHealth + allDerekStats["health"]) + "/" + (state.derekMaxHealth + allDerekStats["health"]) + "</span> right now, but I'm cool",doors[doorNr].image);
	if (state.dungeons[dNr].place == "planet") {
		createGoButton("Leave this dungeon!","newSurface",exitDungeonSure,true);
	}
	if (state.dungeons[dNr].place == "cocoCastle") {
		createGoButton("Leave this dungeon!","cocoDungeon",exitDungeonSure,true);
	}
	if (state.dungeons[dNr].place == "lochJuice") {
		createGoButton("Leave this dungeon!","monsterDungeon",exitDungeonSure,true);
	}
	if (state.dungeons[dNr].place == "space") {
		createGoButton("Leave this dungeon!","planet",exitDungeonSure,true);
	}
	createGoButton("Fight them!","derek",goFight);
	if (state.healthPotions > 0 && state.derekHealth < state.derekMaxHealth) {
		createGoButton("Drink a health potion (" + state.healthPotions + "/" + state.healthPotionCapacity + ") <span style='color:#ff0000'>+" + (state.healthPotionHeal + allDerekStats["potion healing"]) + " health</span>","healthPotion",drinkPotion);
	}
	var statNames = ["extra Bull Fart uses","extra Thirsty uses","extra Door of Regret uses","extra Full Heal uses"];
	for (var i = 0; i < allSkills.length; i++) {
		if (state.skillStates[i] > 0) {
			createGoButton("Use " + allSkills[i].navn + " (" + (allSkills[i].curUses + allDerekStats[statNames[i]]) + "/" + (allSkillTiers[findCurTierIndexBySkillIndex(i)].uses + allDerekStats[statNames[i]]) + ")",allSkills[i].image,allSkills[i].fnct);
		} else if (allDerekStats[statNames[i]] > 0){
			createGoButton("Use " + allSkills[i].navn + " (" + (allSkills[i].curUses + allDerekStats[statNames[i]]) + "/" + allDerekStats[statNames[i]] + ")",allSkills[i].image,allSkills[i].fnct);
		}
	}
	createGoButton("Check Derek's equipment","derek",goCheckDerekStats);
}

function goCheckDerekStats() {
	changeScene(
		writeAllDerekStats() + "</span>",
		"derek"
	);
	createGoButton("Back",doors[doorNr].image,goEnterDoor);
}

function goFight() {
	skipAllowed = false;
	if ((Math.random() * 100) <= allDerekStats["chance of Bull Fart"]) {
		changeScene(
			"<span style='color:#0088ff'>Chance of Bull Fart</span> made Derek rip a big old smelly bull fart. All the jerks cleared out",
			"bullFart"
		);
		createGoButton("Well done Derek!","bullFart",levelSummary);
	} else {
		checkOutcome();
		if (state.impatientMode) {
			// if (doors[doorNr].navn != 'boringDoor') {
			// 	levelSummary();
			// } else {

			// }
			levelSummary();
		} else {

			var beatingSounds = [soundEffect.beating,soundEffect.beating2,soundEffect.beating3,soundEffect.beating4,soundEffect.beating5];
			var randomSound = Math.floor(Math.random() * beatingSounds.length);
			playSound(beatingSounds[randomSound]);
			changeScene("AV!",state.dungeons[dNr].imageFighting);
			setTimeout(function() {
				playSound(soundEffect.punch1);
				newHandling("UF!");
			},100);
			if (!mobile) {
				setTimeout(function() {
					playSound(soundEffect.punch2);
					newHandling("%#!*@");
				},200);				
			}
			setTimeout(function() {
				playSound(soundEffect.punch4);
				newHandling("HELP!");
			},300);
			if (!mobile) {
				setTimeout(function() {
					playSound(soundEffect.punch3);
					newHandling("!!!");
				},400);				
			}
			setTimeout(function() {
				playSound(soundEffect.punch2);
				newHandling("WHAT!?");
			},500);
			if (!mobile) {
				setTimeout(function() {
					playSound(soundEffect.punch1);
					newHandling("OH NO!");
				},600);				
			}
			setTimeout(function() {
				playSound(soundEffect.punch4);
				newHandling("URGH!");
			},700);
			if (!mobile) {
				setTimeout(function() {
					playSound(soundEffect.punch3);
					changeScene("...",state.dungeons[dNr].image);
				},800);				
			}
			setTimeout(function() {
				changeScene("...",state.dungeons[dNr].image);
				createGoButton("Derek?","derek",levelSummary);
				skipAllowed = true;
			},1300);

		}
	}

}


function checkOutcome() {
	jerkDam = 0;
	jerksStrengthed = 0;
	jerksArmored = 0;
	for (var i = 0; i < jerkCount; i++) {
		var strengthRoll = (Math.random() * (state.derekToughness + allDerekStats["strength"]));
		if (strengthRoll < jerkCount) {
			if (strengthRoll + allDerekStats["armor"] < jerkCount) {
				jerkDam += Math.floor((Math.random() * 4) + 1);
			} else {
				jerksArmored++;
			}
		} else {
			jerksStrengthed++;
		}
	}
	updateState('derekHealth', state.derekHealth - jerkDam);
	// for (var i = 0; i < jerkCount; i++) {
	// 	if ((Math.random() * state.derekToughness) < jerkCount) {
	// 		updateState('derekHealth', state.derekHealth - Math.floor((Math.random() * 4) + 1));
	// 	}
	// }
}

function levelSummary() {
	if (state.derekHealth + allDerekStats["health"] > 0) {
		playSound(soundEffect.derek);
		summary();
	} else {
		changeScene("...",state.dungeons[dNr].image);
		createButton("DEREK!?",derekDead)
	}
}

function summary(backFromPresent) {
	var h = "";
	var p = "";
	var a = "";
	var js = "";
	var jd = "";
	if (jerkDam > 0) {
		jd = "</br>The remaining jerks only dealt <span style='color:#ff0000'>" + jerkDam + " damage</span> to me";
	}
	if (jerksStrengthed > 0) {
		js = "</br>I fended off <span style='color:#ff4d00'>" + jerksStrengthed + " jerk(s) with my strength</span>";
	}
	if (jerksArmored > 0) {
		a = "</br>I blocked off <span style='color:#0088ff'>" + jerksArmored + " jerk(s) with my armor</span>";
	}
	if (backFromPresent) {
		h = "Enough of that childish present opening business. More dungeon!";
	} else {
		state.dungeons[dNr].curLevel++;
		h = "I'm so pumped! I beat up <span style='color:#38b200'>" + jerkCount + " jerks</span>" + js + a + jd + "</br>My health is like <span style='color:#ff0000'>" + (state.derekHealth + allDerekStats["health"]) + "/" + (state.derekMaxHealth + allDerekStats["health"]) + "</span> right now, but I'm cool. ";
		if (doors[doorNr].giftCount > 0) {
			p = "</br>Ok, wow! It looks there is a present for you down here";
		}
	}
	var resource = 99;
	for (var i = 0; i < doors[doorNr].rewardResource.length; i++) {
		if (doors[doorNr].rewardResource[i] > 0) {
			resource = i;
		}
	}
	changeScene(h + p,state.dungeons[dNr].image,"dungeonSummary");
	if (doors[doorNr].giftCount > 0 && !backFromPresent) {
		var giftImages = ["","smallSoftPresent","mediumHardPresent","bigMassivePresent"];
		var giftNames = ["","small soft present","medium hard present","big massive present"];
		for (var i = 0; i < doors[doorNr].giftCount; i++) {
			newPresent(giftNames[doors[doorNr].giftType],giftImages[doors[doorNr].giftType]);
		}
		createGoButton("Open present",giftImages[doors[doorNr].giftType],goOpenPresent,yourPresents.length - 1);
	} else if (resource != 99) {
		var imgs = ["wood","gold","coco","stardust"];
		createGoButton("Loot!",imgs[resource],goLoot,resource);
	} else if (doors[doorNr].navn == "Chest door") {
		createGoButton("Open Chest","chest",goOpenChest)
	} else {
		createGoButton("Go deeper!",state.dungeons[dNr].image,goPickDoor,true);
		if (backFromPresent) {
			goPickDoor(true);
		}
	}
	jerkDam = 0;
	jerksStrengthed = 0;
	jerksArmored = 0;
}

function goOpenChest() {
	var chestDelay;
	var explosionDelay;
	if (state.impatientMode) {
		chestDelay = 50;
		explosionDelay = 5;
	} else {
		chestDelay = 1500;
		explosionDelay = 1000;
	}
	setTimeout(function(){
		playSound(soundEffect.explosion);
	},explosionDelay);
	changeScene(
		"What fantastic treasure could be inside?",
		"chestOpen"
	);
	setTimeout(function(){
		rollNewItem(state.dungeons[dNr].difficulty,state.dungeons[dNr].curLevel);
		var h = "It's ";
		var item = state.derekItems.length - 1;
		h += writeItemName(item,state.derekItems,false) + "</br><span style='color:#a1a1a1'>'" + state.derekItems[item].text + "'</span></br>" + writeItemStats(item,state.derekItems);
		changeScene(
			h,
			state.derekItems[item].itemImage
		);
		createGoButton("Cool",state.derekItems[item].itemImage,goPickDoor,true);
	},chestDelay);
}

function goLoot(resource) {
	var extraLoot = "";
	var extraLootAmount = 0;
	var resources = ["wood","gold","coco","stardust"];
	var lootAmount = Math.round((state.dungeons[dNr].curLevel * 5) * (state.dungeons[dNr].difficulty * 4));
	if (resource == 0) {
		if (allDerekStats["extra wood from wood doors"] > 0) {
			extraLootAmount = Math.round(lootAmount * (allDerekStats["extra wood from wood doors"]/100));
			extraLoot = " + " + extraLootAmount; 
			console.log("Extra loot = " + extraLootAmount);
		}
		updateState('wood', state.wood + (lootAmount + extraLootAmount));
	}
	if (resource == 1) {
		lootAmount = Math.round(lootAmount/3);
		if (allDerekStats["extra gold from gold doors"] > 0) {
			extraLootAmount = Math.round(lootAmount * (allDerekStats["extra gold from gold doors"]/100));
			extraLoot = " + " + extraLootAmount; 
			console.log("Extra loot = " + extraLootAmount);
		}
		updateState('gold', state.gold + (lootAmount + extraLootAmount));
	}
	if (resource == 2) {
		if (allDerekStats["extra coco from coco doors"] > 0) {
			extraLootAmount = Math.round(lootAmount * (allDerekStats["extra coco from coco doors"]/100));
			extraLoot = " + " + extraLootAmount; 
			console.log("Extra loot = " + extraLootAmount);
		}
		updateState('coco', state.coco + (lootAmount + extraLootAmount));
	}
	if (resource == 3) {
		lootAmount = Math.round(lootAmount/60);
		if (lootAmount <= 4) {
			lootAmount = 4;
		}
		if (allDerekStats["extra stardust from stardust doors"] > 0) {
			extraLootAmount = Math.round(lootAmount * (allDerekStats["extra stardust from stardust doors"]/100));
			if (extraLootAmount < 1) {
				extraLootAmount = 1;
			}
			extraLoot = " + " + extraLootAmount; 
			console.log("Extra loot = " + extraLootAmount);
		}
		updateState('stardust', state.stardust + (lootAmount + extraLootAmount));
	}
	changeScene(
		"There's <span style='color:#38b200'>" + lootAmount + extraLoot + " " + resources[resource] + "</span> lying around in the corner of the room. Derek frantically gathers it for you",
		resources[resource],
		"goLoot"
	);
	createGoButton("Good job Derek!",resources[resource],goPickDoor,true);
}

function backFromPresent() {
	summary(true);
}

function drinkPotion() {
	updateState('derekHealth', state.derekHealth + (state.healthPotionHeal + allDerekStats["potion healing"]));
	if (state.derekHealth > state.derekMaxHealth) {
		updateState('derekHealth', state.derekMaxHealth);
	}
	updateState('healthPotions', state.healthPotions - 1);
	playSound(soundEffect.potion);
	changeScene("REFRESHING!! Now my health is more like <span style='color:#ff0000'>" + (state.derekHealth + allDerekStats["health"]) + "/" + (state.derekMaxHealth + allDerekStats["health"]) + "</span>","healthPotion","dungeon");
	createButton("Much better!",goEnterDoor);
	if (state.impatientMode) {
		goEnterDoor();
	}
}

function goDungeonDone() {
	playMusic();
	state.dungeons[dNr].completed = true;
	var newPrice = state.revivePrice[3] + 1;
	var newRevivePrice = [0,0,0,newPrice];
	updateState('revivePrice', newRevivePrice);
	if (state.dungeons[dNr].navn == "Juicy Dungeon") {
		changeScene("WHAO! Who's there!?","dungeon");
		var newFriends = state.friends;
		newFriends[3].found = true;
		updateState('friends',newFriends);
		createButton("What is it Derek?",findFriend,state.friends[3]);
	} else if (state.dungeons[dNr].navn == "Scary Dungeon") {
		changeScene("Boss! Something scary is down here","dungeon");
		var newFriends = state.friends;
		newFriends[4].found = true;
		updateState('friends',newFriends);
		createButton("Pull yourself together!",findFriend,state.friends[4]);
	} else if (state.dungeons[dNr].navn == "Cool Dungeon") {
		updateState('dungeonsCompleted', true);
		changeScene("Uuuf! I feel a cool chill","dungeon");
		var newFriends = state.friends;
		newFriends[5].found = true;
		updateState('friends',newFriends);
		createButton("Get a grip and tell me what's going on",findFriend,state.friends[5]);
	} else if (state.dungeons[dNr].navn == "Slippery Coco Dungeon") {
		changeScene(
			"Ehm, planet. I think I swallowed something",
			"derek"
		);
		updateState('villaKey', true);
		createGoButton("Cough it up!","derek",goCoughItUp);
	} else if (state.dungeons[dNr].navn == "Sweet Coco Dungeon") {
		changeScene(
			"You get a sweet sensation as you beat the last level of this dungeon. It's the feeling of Cocobars everlasting respect. Maybe she will let you use her precious Space Phone now",
			"cocobar"
		);
		createGoButton("Nice!","planet",goPhone);
	} else if (state.dungeons[dNr].navn == "Melting Coco Dungeon") {
		updateState('cocoDungeonsCompleted', true);
		changeScene(
			"Hey what's that? In a puddle of juice is a message in a bottle",
			"balthazar"
		);
		createGoButton("What does it say?","balthazar",goReadMessage);
	} else if (state.dungeons[dNr].navn == "Juicy Monster Dungeon") {
		changeScene("WHAAA! I'm rolling on something!","derek");
		var newFriends = state.friends;
		newFriends[6].found = true;
		updateState('friends',newFriends);
		createButton("Stop rolling!",findFriend,state.friends[6]);
	} else if (state.dungeons[dNr].navn == "Stinky Monster Dungeon") {
		changeScene("YAY! Candy!!","derek");
		var newFriends = state.friends;
		newFriends[7].found = true;
		updateState('friends',newFriends);
		createButton("Can I have some?",findFriend,state.friends[7]);
	} else if (state.dungeons[dNr].navn == "Repulsive Monster Dungeon") {
		updateState('monsterDungeonsCompleted', true);
		changeScene("EW! This tastes terrible!","derek");
		var newFriends = state.friends;
		newFriends[8].found = true;
		updateState('friends',newFriends);
		createButton("Then don't eat it?",findFriend,state.friends[8]);
	} else if (state.dungeons[dNr].navn == "Endless Dungeon" || state.dungeons[dNr].navn == "Endless Coco Dungeon") {
		changeScene(
			"Wait a minute. This dungeon isn't endless!! It was all a scam after all.. Oh, but there's a note here. It tells you that this was just a mini endless dungeon. A true Derek should seek the depths of the toughest endless dungeon to prove his worth.<br/><br/>Derek is eager for more endless dungeons",
			"derek"
		);
		createGoButton("Better keep a positive attitude about this","planet",goFindEndlessDungeonCube);
	} else if (state.dungeons[dNr].navn == "Endless Monster Dungeon") {
		updateState('spaceDungeon', true);
		if (censoredWords) {
			changeScene(
				"You can't believe it. Derek just beat the hardest dungeon in the whole game. He is the toughest fighter you will ever know! From the deep depths of the dungeon you can hear him do an insanely loud bull howl that can probably be heard several thousand light years away.<br/><br/>He's just such an epic bull!",
				"derek"
			);
		} else {
			changeScene(
				"You can't believe it. Derek just beat the living crap out of the hardest dungeon in the whole game. He is the toughest son of a bitch you will ever know! From the deep depths of the dungeon you can hear him do an insanely loud bull howl that can probably be heard several thousand light years away.<br/><br/>He's just such an epic bull!",
				"derek"
			);			
		}

		createGoButton("I'm so proud of you Derek!","derekHealth",goFindEndlessDungeonCube);
	} else if (state.dungeons[dNr].navn == "Derekulus X") {
		changeScene(
			"Welcome home Derek. You are a real bullman now!<br/><br/>Take a picture of this and send it to burgertherobot@gmail.com<br/><br/>You have earned a reward you crazy crazy person.<br/><br/>Also there is a door here. It turns out to be a Hall of Fame for the first 100 champions to reach this place",
			"derek"
		);
		//createGoButton("HAhahahaha! I'm crazy!!!","planet",goRoot);
		if (!state.derekulusXCubeFound) {
			createGoButton("Loot the room","wormCube",goFindDerekulusXCube);
		} else {
			createGoButton("Leave dungeon","planet",goRoot);
		}
		createGoButton("Enter door","doorDerek",goHallOfDerek);
	} else {
		goDungeonDebrief();
	}
}

function goFindEndlessDungeonCube() {
	updateState('wormCubes', state.wormCubes + 1);
	if (state.tTerrariumFound) {
		changeScene(
			"Ok wow! There was <span style='color:#ff00bb'>a Worm Cube</span> at the end of this endless dungeon.</br>Let's put it in the Time Terrarium",
			"wormCube"
		);
	} else {
		changeScene(
			"Ok wow! There was <span style='color:#ff00bb'>a Worm Cube</span> at the end of this endless dungeon.</br>You don't know what it is, but you have a feeling that you will need it in another life. Better keep it safe",
			"wormCube"
		);
	}
	createGoButton("Fantastic!","wormCube",goDungeonDebrief);
}

function goFindDerekulusXCube() {
	updateState('derekulusXCubeFound', true);
	updateState('wormCubes', state.wormCubes + 3);
	if (state.tTerrariumFound) {
		changeScene(
			"Ok wow! There are <span style='color:#ff00bb'>3 Worm Cubes</span> here!</br>Let's put them in the Time Terrarium",
			"wormCube"
		);
	} else {
		changeScene(
			"Ok wow! There are <span style='color:#ff00bb'>3 Worm Cubes</span> here!</br>You don't know what they are, but you have a feeling that you will need them in another life. Better keep them safe",
			"wormCube"
		);
	}
	createGoButton("Fantastic!","wormCube",goDungeonDone);
}

function goHallOfDerek() {
	openExternalUrl('http://christianlaumark.dk/HallOfDerek/');
}

function goReadMessage() {
	updateState('bottleFound', true);
	changeScene(
		"It's a hastily scribbled note: Help us! We have been lost in the depths of the terrible Loch Juice Monster! Please don't let Balthazars sacrifice be in vain.",
		"balthazar"
	);
	createGoButton("Balthazar who?","balthazar",goDungeonDebrief);
}

function goCoughItUp() {
	changeScene(
		"Derek coughs up a small key. You stop to wonder how he swallowed it, and start thinking about this key instead. You can clearly see that it's a key for a villa, but everything else about it is quite mysterious",
		"villaKey"
	);
	createGoButton("Mysterious!","villaKey",goDungeonDebrief);
}

function exitDungeonSure(inRoom) {
	changeScene(
		"Are you sure you want to leave this dungeon? You'll have to start on level 1 next time you dive in",
		"derek",
		"exitDungeonSure"
	);
	if (inRoom) {
		createGoButton("No","talk",goEnterDoor);
	} else {
		createGoButton("No","talk",goPickDoor,false);
	}
	createGoButton("Yes","talk",exitDungeon);
}

function exitDungeon() {
	playMusic();
	if (state.dungeons[dNr].place == "planet") {
		goPickDungeon();
	}
	if (state.dungeons[dNr].place == "cocoCastle") {
		goCocoDungeons();
	}
	if (state.dungeons[dNr].place == "lochJuice") {
		goMonsterDungeon();
	}
	if (state.dungeons[dNr].place == "space") {
		goRoot();
	}
}

function goDungeonDebrief() {
	changeScene("Derek is shouting at you from the bottom of the dungeon. He is trying to tell you that there are no more levels of this dungeon..",state.dungeons[dNr].image,"goDungeonDebrief");
	createGoButton("Stop shouting Derek!","talk",exitDungeon);
}

function derekDead() {
	playMusic();
	//document.getElementById("dungeonLevel").innerHTML = "";
	changeScene("Looks like the Jerks got Derek. Use <span style='color:#00e9ff'>" + state.revivePrice[3] + " stardust</span> to revive him?",state.dungeons[dNr].image,"dungeon");
	updateState('derekHealth', state.derekMaxHealth);
	updateState('derekDead', true);
	if (state.stardust >= state.revivePrice[3]) {
		createButton("Save Derek!",reviveDerek);
		createButton("No",checkWhat);
	} else {
		createButton("I can't afford it",checkWhat);
	}
}

function reviveDerek() {
	updateState('derekDead', false);
	changeScene("There there Derek..","dungeonDerek");
	updateState('derekHealth', state.derekMaxHealth);
	console.log("reviving Derek to " + state.derekHealth + " health");
	buy(state.revivePrice);
	setTimeout(function() {
		goRoot();
		//goPickDungeon();
	},2000);
}

