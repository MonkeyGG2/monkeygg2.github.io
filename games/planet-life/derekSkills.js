function skill(navn,image,description,fnct) {
	this.navn = navn;
	this.image = image;
	this.fnct = fnct;
	this.description = description;
	this.curUses = 0;
}

function skillTier(owner,navn,tierNr,chance,uses,price,descr,fnct) {
	this.owner = owner;
	this.navn = navn;
	this.tierNr = tierNr;
	this.chance = chance;
	this.uses = uses;
	this.price = price;
	this.descr = descr;
	this.fnct = fnct;
} 

var allSkills = [];
var allSkillTiers = [];
var allSkillStates = [];

function newSkill(navn,image,description,fnct) {
	var newSkill = new skill(navn,image,description,fnct);
	allSkills.push(newSkill);
	allSkillStates.push(0);
}

function newSkillTier(owner,tierNr,chance,uses,price,descr,fnct) {
	var tier = new skillTier(owner,owner + " " + tierNr,tierNr,chance,uses,price,descr,fnct);
	allSkillTiers.push(tier);
}

function findCurTierIndexBySkillIndex(skillIndex) {
	for (var i = 0; i < allSkillTiers.length; i++) {
		if (allSkills[skillIndex].navn == allSkillTiers[i].owner) {
			if (state.skillStates[skillIndex] == allSkillTiers[i].tierNr) {
				return i;
			}
		}
	}
}

function findNumberOfTiersBySkillIndex(skillIndex) {
	var hits = 0;
	for (var i = 0; i < allSkillTiers.length; i++) {
		if (allSkills[skillIndex].navn == allSkillTiers[i].owner) {
			hits++;
		}
	}
	return hits;
}

function findSkillIndexById(ID) {
	for (var i = 0; i < allSkills.length; i++) {
		if (allSkills[i].navn == ID) {
			return i;
		}
	}
}

newSkill("Bull Fart","bullFart","Derek ate something rotten. Bull farts have been known to clear the room on more than one occasion",skillBullFart);
newSkill("Thirsty","thirsty","Teach Derek to become so thirsty, that he will try to find health potions in desperation",skillThirsty);
newSkill(
	"Door of Regret",
	"doorOfRegret",
	"It's very embarrassing to enter the wrong door. Teach Derek to make a graceful exit, so he won't humiliate himself",
	skillDoorOfRegret
);
newSkill(
	"Full Heal",
	"fullHeal",
	"Derek uses his musky willpower to become super healthy!",
	skillFullHeal
);

for (var i = 1; i < 99; i++) {
	newSkillTier(
		"Full Heal",
		i,
		100,
		i,
		[(i * 2000),(i * 500),(i * 2000),(i * 5)],
		"Derek can heal himself completely " + i + " time(s) per dungeon",
		upgradeFullHeal
	);
}

for (var i = 1; i < 99; i++) {
	var fartChance = 100 - (i * 5);
	if (fartChance < 50) {
		fartChance = 50;
	}
	newSkillTier(
		"Bull Fart",
		i,
		fartChance,
		i,
		[0,((i + i) * 200),0,0],
		"Derek can fart " + i + " time(s) per dungeon",
		upgradeBullFart
	);
}

for (var i = 1; i < 99; i++) {
	var findChance = (i * 5) + 50;
	if (findChance >= 100) {
		findChance = 100;
	} 
	newSkillTier(
		"Thirsty",
		i,
		findChance,
		i,
		[0,(i * 50),(i * 300),0],
		"Derek can search for something healthy to drink " + i + " time(s) per dungeon. He has a " + findChance + "% chance of finding anything",
		upgradeThirsty
	);
}

for (var i = 1; i < 99; i++) {
	newSkillTier(
		"Door of Regret",
		i,
		100,
		i,
		[(i * 150),0,0,0],
		"Derek can totally regret entering a door " + i + " time(s) per dungeon",
		upgradeDoorOfRegret
	);
}

function skillBullFart() {
	var chance = 100;
	if (findCurTierIndexBySkillIndex(0)) {
		chance = allSkillTiers[findCurTierIndexBySkillIndex(0)].chance;
	}
	if (allSkills[0].curUses + allDerekStats["extra Bull Fart uses"] == 0) {
		outOfUses();
	} else {
		allSkills[0].curUses--;
		if ((Math.random() * 100) <= chance) {
			playSound(soundEffect.fart);
			changeScene("Derek farts. It stinks! All the jerks died instantly..",allSkills[0].image,"skillBullFart");
			createGoButton("Cool! But also smelly","dungeon",summary,false);
		} else {
			playSound(soundEffect.derek);
			changeScene(
				"Turns out Derek didn't have a fart coming.. That fart handling business can be tricky",
				"derek",
				"skillBullFart"
			);
			createGoButton("Bummer!",state.dungeons[dNr].image,goEnterDoor);
		}
	}
}

function skillThirsty(byEquipment,nr) {
	console.log("THIRSTY!");
	var chance = 100;
	if (findCurTierIndexBySkillIndex(1)) {
		chance = allSkillTiers[findCurTierIndexBySkillIndex(1)].chance;
	}
	playSound(soundEffect.thirsty);
	if (allSkills[1].curUses + allDerekStats["extra Thirsty uses"] <= 0 && !byEquipment) {
		outOfUses();
	} else {
		if (!byEquipment) {
			allSkills[1].curUses--;
		}
		if ((Math.random() * 100) <= chance || byEquipment) {
			var s = state.skillStates[1];
			if (byEquipment && state.skillStates[1] < 1) {
				s = 1;
			}
			var healValues = [(5 * s),(10 * s),(25 * s),(50 * s),(75 * s),(80 * s),(100 * s)];
			var poolSizes = ["tiny","small","reasonable sized","slightly big","large","enormous","gigantic"];
			var roll = Math.floor(Math.random() * healValues.length);
			if (byEquipment) {
				changeScene("<span style='color:#0088ff'>Chance of Thirsty</span> was succesful and Derek found a " + poolSizes[roll] + " pool of healing fluids and healed <span style='color:#ff0000'>" + healValues[roll] + "</span> health. Drinking from the ground.. ewww. But he seems to feel better, so that's good","fullHeal","skillThirsty");
			} else {
				changeScene("It seems like Derek found a " + poolSizes[roll] + " pool of healing fluids and healed <span style='color:#ff0000'>" + healValues[roll] + "</span> health. Drinking from the ground.. ewww. But he seems to feel better, so that's good","fullHeal","skillThirsty");	
			}
			updateState("derekHealth",state.derekHealth + healValues[roll]);
			if (state.derekHealth > state.derekMaxHealth) {
				updateState('derekHealth', state.derekMaxHealth);
			}
			if (byEquipment) {
				createGoButton("Hooray!","dungeon",goCheckDoor,nr);
			} else {
				createGoButton("Hooray!","dungeon",goEnterDoor);
			}
		} else {
			changeScene("Despite Dereks huge thirst, he didn't find anything tasty to drink. A dry mouth can be fatal!","thirsty","skillThirsty");
			createGoButton("Scary news",state.dungeons[dNr].image,goEnterDoor);
		}
	}
}

function skillDoorOfRegret() {
	playSound(soundEffect.doorOfRegret);
	if (allSkills[2].curUses + allDerekStats["extra Door of Regret uses"] == 0) {
		outOfUses();
	} else {
		allSkills[2].curUses--;
		changeScene("Derek really didn't like what was behind that door. The regret is so thick you could cut through it. But you probably don't want to. You want to pick another door instead",allSkills[2].image,"skillDoorOfRegret");
		createGoButton("Sure",allSkills[2].image,goPickDoor,true);
	}
}

function skillFullHeal() {
	playSound(soundEffect.heal);
	if (allSkills[3].curUses + allDerekStats["extra Full Heal uses"] == 0) {
		outOfUses();
	} else {
		allSkills[3].curUses--;
		changeScene(
			"Derek pulls himself together. Now he has full health.<br/>You know that's not really how things work, but you are just happy that Derek is fine",
			"fullHeal",
			"skillFullHeal"
		);
		updateState('derekHealth', state.derekMaxHealth);
		createGoButton("Sure sure",allSkills[3].image,goEnterDoor);
	}
}

function outOfUses() {
	changeScene("You can just forget about it. That skill is straight out of juice","derek","outOfUses");
	createGoButton("Chill","dungeon",goEnterDoor);
}

function upgradeBullFart() {
	upgradeSkill("Bull Fart");
}

function upgradeThirsty() {
	upgradeSkill("Thirsty");
}

function upgradeDoorOfRegret() {
	upgradeSkill("Door of Regret");
}

function upgradeFullHeal() {
	upgradeSkill("Full Heal");
}

function upgradeStrength() {
	updateState('derekToughness', allProductTiers[findCurProductTierIndexById("Upgrade strength")].price[4]);
	upgradeAnimation("Derek is STRONG!","derekStrength",goGym);
}

function upgradeBelt() {
	updateState('healthPotionCapacity', allProductTiers[findCurProductTierIndexById("Upgrade potion belt")].price[4]);
	upgradeAnimation("Space for more potions!","derekBelt",goGym);
}

function upgradeHealth() {
	updateState('derekMaxHealth', allProductTiers[findCurProductTierIndexById("Upgrade health")].price[4]);
	updateState('derekHealth', state.derekMaxHealth);
	upgradeAnimation("Check out all that new health!","derekHealth",goGym);
}

function upgradeSkill(navn) {
	for (var i = 0; i < allSkills.length; i++) {
		if (navn == allSkills[i].navn) {
			var newSkillStates = state.skillStates;
			newSkillStates[i]++;
			allSkills[i].curTier++;
			updateState("skillStates",newSkillStates);
			skillUpgraded(i);
			return;
		}
	}
}

function goDDS() {
	changeBackground("BG_SchoolOfDerek");
	derekCheatCount = 0;
	changeScene("Welcome to the School of Derek! That bull might look primitive, but you can teach him a few odd tricks","dungeonSchool","DDS");
	createGoButton("Back","newSurface",checkWhat);
	// createGoButton("DEREK!","derek",goDerekHub);
	createGoButton("Classroom","classroom",goClassroom);
	createGoButton("Gym","gym",goGym);
}

function goClassroom() {
	changeScene("Welcome to the School of Derek! That bull might look primitive, but you can teach him a few odd tricks","classroom","DDS");
	createGoButton("Back","dungeonSchool",goDDS);
	for (var i = 0; i < allSkills.length; i++) {
		if (allSkills[i].navn == "Full Heal" && state.unlockedFullHeal) {
			createGoButton(allSkills[i].navn,allSkills[i].image,showSkill,i);
		} else if (allSkills[i].navn != "Full Heal") {
			createGoButton(allSkills[i].navn,allSkills[i].image,showSkill,i);	
		}
	}
}

function goGym() {
	playSound(soundEffect.derek);
	var strengthH = "";
	if (allDerekStats["strength"] > 0) {
		strengthH = " + " + allDerekStats["strength"];
	}
	var healthH = "";
	if (allDerekStats["health"] > 0) {
		healthH = " + " + allDerekStats["health"];
	}
	var h = "Hey man! Am I pumped or what!?</br>My health is like <span style='color:#ff0000'>" + state.derekMaxHealth + healthH + "</span></br> And I'm pretty tough! I have <span style='color:#ff0000'>" + state.derekToughness + strengthH + "</span> strength </br>";
	if (state.healthPotions > 0) {
		h += "Look! I'm carrying <span style='color:#ff0000'>" + state.healthPotions + "/" + state.healthPotionCapacity + " health potions!</span>";
	} else {
		h += "My very empty belt has space for <span style='color:#ff0000'>" + state.healthPotionCapacity + "</span> ";
		if (state.healthPotionCapacity > 1) {
			h += "potions";
		} else {
			h += "potion";
		}
	}
	changeScene(h,"gym","checkDerek");
	createGoButton("Back","dungeonSchool",goDDS);
	createProduct("Upgrade strength");
	createProduct("Upgrade potion belt");
	createProduct("Upgrade health");
}

function showSkill(skillIndex) {
	var h;
	if (state.skillStates[skillIndex] == 0) {
		h = allSkills[skillIndex].navn + "</br></br>" + allSkills[skillIndex].description + "</br></br>Derek does not yet know how to do this. You better teach him by buying this skill!";
	} else {
		h = allSkills[skillIndex].navn + " " + state.skillStates[skillIndex] + "</br></br>" + allSkills[skillIndex].description + "</br></br>Uses: " + allSkillTiers[findCurTierIndexBySkillIndex(skillIndex)].uses + "</br>Chance: " + allSkillTiers[findCurTierIndexBySkillIndex(skillIndex)].chance;
	}
	var thisPlace;
	if (state.skillStates[skillIndex] < findNumberOfTiersBySkillIndex(skillIndex)) {
		thisPlace = "showSkill" + allSkills[skillIndex].navn;
	} else {
		thisPlace = "showSkill";
	}
	changeScene(h,allSkills[skillIndex].image,thisPlace);
	createGoButton("Back","classroom",goClassroom);
	for (var i = 0; i < allProductTiers.length; i++) {
		if (allProductTiers[i].ID == allSkills[skillIndex].navn && allProductTiers[i].tierNr == state.productStates[findProductIndex(allProductTiers[i].ID)] + 1) {
			createProduct(allProductTiers[i].ID);
		}
	}
	if (skillIndex === derekCheatSequence[derekCheatCount]) {
		derekCheatCount++;
		if (derekCheatCount === derekCheatSequence.length && state.tGamesCompleted < 1) {
			goDerekCheckCheat();
			derekCheatCount = 0;
		}
	} else {
		derekCheatCount = 0;
	}
	if (skillIndex === derekAntiCheatSequence[derekAntiCheatCount]) {
		derekAntiCheatCount++;
		if (derekAntiCheatCount === derekAntiCheatSequence.length) {
			goDerekCheckAntiCheat();
			derekAntiCheatCount = 0;
		}
	} else {
		derekAntiCheatCount = 0;
	}
}

function skillUpgraded(skillIndex) {
	if (state.impatientMode) {
		showSkill(skillIndex);
	} else {
		changeScene("Skill upgraded!","explosion","skillUpgraded");
		setTimeout(function() {
			changeScene("Skill upgraded!",allSkills[skillIndex].image,"skillUpgraded");
			createGoButton("Cool!",allSkills[skillIndex].image,showSkill,skillIndex);
		},500);
	}
}