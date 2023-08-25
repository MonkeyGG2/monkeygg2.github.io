
var H_Handling1 =
"You are a beautiful little planet, hanging out in a cosy little solar system";

var curHandling = H_Handling1;
document.getElementById("handling").innerHTML = curHandling;

var curArt = "planet";

var curSystem = "Startolar";

var place = "system_St"

var settingsToggled = false;
var aboutToggled = false;
var donateToggle = false;
var resIconsToggled = true;
var resInfoToggled = true;
var lastBackground = "BG_universe";

var transition = false;
var skipAllowed = true;

var donateFromEnd = false;

//Handling print out
var cutHandling = "";
var cutCount = 0;
var delay;

var handlingUncut = "";

//Buttons print out
var curButtons = [];
var curButtonCount = 0;
var buttonDelay;

if (state.impatientMode) {
	delay = 1;
	buttonDelay = 10;
} else {
	delay = 10;
	buttonDelay = 40;
}

//Workshop upgrades
var axe01 = [10,0,0,0,2];
var axe02 = [100,0,0,0,3];
var axe03 = [400,30,0,0,4];
var axe04 = [1000,100,0,0,5];
var axe05 = [2000,500,0,0,6];
var axes = [axe01,axe02,axe03,axe04,axe05];

var drill01 = [50,5,0,0,1,0.5];
var drill02 = [300,20,100,0,1,0.6];
var drill03 = [1000,50,1000,0,1,1];
var drills = [drill01,drill02,drill03];

//Slotmachine
var relativeChance = 0.8;
var playSmallPrice = [0,5,0,0];
var playMediumPrice = [0,60,0,0];
var playBigPrice = [0,120,0,0];

//Shop
var healthPotionPrice = [0,10,100,0,"buyHealthPotionBut",false];
var starmapPrice = [100,10,0,0,"buyStarmapBut",true];
var starmapPrice2 = [500,50,0,0,"buyStarmapBut",true];
var starmapPrice3 = [0,0,0,10,"buyStarmapBut",true];
var redUsbPrice = [0,100,1000,0,"buyRedUsbBut",true];
var greenUsbPrice = [1000,0,3000,5,"buyGreenUsbBut",true];
var orangeUsbPrice = [0,0,0,60,"buyOrangeUsbBut",true];

//Locations
var locations = [];

//Dungeon
var currentLevel = 0;
var jerkCount = 0;
var giftChance = 0.75;
var burgerAdviceNr = 0;

//Asteroid upgrades
var strawPrice1 = [300,30,0,0,2];
var strawPrice2 = [1500,50,0,0,3];
var strawPrice3 = [3000,100,0,0,4];
var strawPrices = [strawPrice1,strawPrice2,strawPrice3];

//Planetud trade
var pIncr = 25;
var pBuyAmount = 100;
var pBuying = 0;
var pLowerLimit = 25;

//Chatting
var svenTalkCount = 0;
var cocobarTalkCount = 0;
var creatureTalkCount = 0;
var planetudTalkCount = 0;
var derekTalkCount = 0;
var wifyTalkCount = 0;
var bretTalkCount = 0;
var remouladinTalkCount = 0;

var friendTalkCount = 0;

var jerkinsonTalkCount = 0;
var slopnaxTalkCount = 0;
var beanieTalkCount = 0;
var lemonadaTalkCount = 0;
var sweatsonTalkCount = 0;
var ancientDerekTalkCount = 0;
var bananaTalkCount = 0;
var wisemanTalkCount = 0;
var brokenRobotTalkCount = 0;
var babyTalkCount = 0;
var bartenderTalkCount = 0;

//Ghost trade
var ghostTradeTick = 0;
var ghostBuffer = 0;
var realSellPrice;

//WIFY QUIZ
var questionNr = 1;

//ONE EYED DEREKULIAN ROULETTE
var rouletteBet = 0;

//WOODEN POKER
var pokerBet = 0;
var svenCard = 0;
var svenBet = 0;
var svenMove = "";
var svenSymbol = 0;
var cocobarCard = 0;
var cocobarBet = 0;
var cocobarSymbol = 0;
var yourCard = 0;
var yourBet = 0;
var yourMove = "";
var yourSymbol = 0;
var yourPokerWood = 0;
var foldCount = 0;
var luckySymbol = 0;
var cardImages = ["pokerCardBroccoli","pokerCardGhost","pokerCardGoldfish"];

//Stanley
var stanleyTick = 0;

//Spacebar
var spaceBarTick = 0;

//Mouladin
var mouladinTalkNr = 0;

var lolliGoals = [
	0,
	100,
	500,
	800,
	1200
];

//Time Terrarium checkout at end
var completeGameTerrariumTime = false;
// var chosenTTItem = false;
// var chosenTTJerk = false;

//COMPLETE GAME & ASCEND
var savedVars;

//Cheat
var burgerCheatCount = 0;
var burgerCheat = false;
var boostCheatCount = 0;
var derekCheatCount = 0;
var derekCheatSequence = [2,2,2,0,1,2,0,1,2,0,0,0];
var derekAntiCheatCount = 0;
var derekAntiCheatSequence = [0,0,0,2,1,0,2];
var sweatsonCheatCount = 0;

//Friends
var friendMeltyface = {
	name: "Meltyface",
 	image: "meltyFace",
 	found: false,
 	text: "Meltyface is melting his face off, while producing <span style='color:#38b200'>1 wood/sec</span> for you",
 	foundBy: "burger",
 	meetText: "You plug the USB stick into burger. He beeps and chirps as he remembers: As a young robot he used to work at an ice cream store, with this melty fellow",
 	buttonText: "Meet Meltyface",
 	findText: "You meet Meltyface.. He is dripping all over the place. He would make a great friend!",
 	effectRes: 'woodPS',
 	effectRes2: 0,
 	effectValue: 1
};
var friendSweatson = {
	name: "Sweatson",
	image: "sweatson",
	found: false,
	foundBy: "burger",
	text: "Sweatson is sweating his ears off, but still finds time to dig <span style='color:#38b200'>1 gold/sec</span> for you",
	meetText: "You plug the USB stick into burgers face. He jolts and bobs with sweet memories: He used to own a big villa in a neighbouring galaxy. He had wife, kids and even a dog",
	buttonText: "Meet the dog",
	findText: "You meet burgers old dog. It's very sweaty. Burger tells you that they used to be best friends",
	effectRes: 'goldPS',
	effectRes2: 1,
	effectValue: 1
};
var friendJohn = {
	name: "John",
	image: "john",
	found: false,
	foundBy: "burger",
	text: "John is haunting your dreams. He also gives you <span style='color:#38b200'>1 gold/sec</span>",
	meetText: "Burger swallows the USB stick whole, and jumps around with his hands in the air. His lost memories spill like beans: When he got divorced, he hitched a ride with this creepy fellow, John",
	buttonText: "Meet John",
	findText: "You meet John. He will haunt your dreams.. But besides from that he will probably make a great friend",
	effectRes: 'goldPS',
	effectRes2: 1,
	effectValue: 1

};
var friendJuicosaurus = {
	name: "Juicosaurus",
	image: "juicosaurus",
	found: false,
	foundBy: "derek",
	text: "Juicosaurus is spewing juice all over the place. That somehow gives you <span style='color:#38b200'>1 coco/sec</span>",
	meetText: "Hey boss! There's this weird dino kind of thing down here",
	buttonText: "Meet dino thing",
	findText: "It's an ancient juicosaurus. It must have gotten stuck down here while all the dinos were busy getting extinct. He will make a great friend!",
	effectRes: 'cocoPS',
	effectRes2: 2,
	effectValue: 1
};
var friendCocoGhost = {
	name: "Coco ghost",
	image: "cocoGhost",
	found: false,
	foundBy: "derek",
	text: "Coco ghost is floating around in a coco haze. That produces <span style='color:#38b200'>1 coco/sec</span>",
	meetText: "HOLY SMOKES! I just saw a real ghost!",
	buttonText: "Meet the ghost",
	findText: "It's super creepy, but you think you can become friends with this ghost. Besides, it smells of sweet coco",
	effectRes: 'cocoPS',
	effectRes2: 2,
	effectValue: 1
};
var friendKimCumber = {
	name: "Kim Cumber",
	image: "kimCumber",
	found: false,
	foundBy: "derek",
	text: "Kim cumber is cool as a cucumber. His words turn into <span style='color:#38b200'>1 coco/sec</span>",
	meetText: "Hey! I found some sort of jerk. But I don't think it's a real jerk though",
	buttonText: "Meet fake jerk",
	findText: "It's Kim Cumber! The legendary dungeon crawler. You can't believe that he will be your friend",
	effectRes: 'cocoPS',
	effectRes2: 2,
	effectValue: 1
};
var friendBobBottle = {
	name: "Bob the Bottle",
	image: "bobBottle",
	found: false,
	foundBy: "derek",
	text: "Bob the Bottle is just standing there and somehow gaining you <span style='color:#38b200'>5 gold/sec</span> with his classic street performance",
	meetText: "Bwah! An empty bottle almost killed me with my own clumsiness!",
	buttonText: "Derek please",
	findText: "It turns out to be a stranded bottle. He tells you about a failed expedition to the depths of The Loch Juice Monster, and how it ultimately ended in the brutal sacrifice of his brother Balthazar the Bottle. It was the only way to send for help he cries",
	effectRes: 'goldPS',
	effectRes2: 1,
	effectValue: 5
};
var friendCountCandy = {
	name: "Count Candy",
	image: "countCandy",
	found: false,
	foundBy: "derek",
	text: "You know very well what Count Candy is doing. He is using his counthood to gain you <span style='color:#38b200'>10 coco/sec</span>",
	meetText: "Oh, wait a second. This is not real candy",
	buttonText: "Well what is it then?",
	findText: "It's Count Candy! He is Cocobars lesser known cousin.. He ran into some financial issues after trying to sell the empire for a few ghosts. The story doesn't account for his appearance in the stomach of a monster",
	effectRes: 'cocoPS',
	effectRes2: 2,
	effectValue: 10
}
var friendBroccula = {
	name: "Broccula",
	image: "broccoliWorkerKevin",
	found: false,
	foundBy: "derek",
	text: "Broccula is lobbying <span style='color:#38b200'>10 wood/sec</span> for your planetary enterprise. She is wearing a T-shirt that says 'Kevin Rocks!'. You wonder who Kevin is, but is utterly convinced that he actually rocks",
	meetText: "Oh, sorry... Yeah I know.. Of course.. I shouldn't be trying to eat people I just met",
	buttonText: "Who are you talking to?",
	findText: "It turns out to be a Brocculian administrator. She has gotten lost down here under the construction of the Broccoli Empire, due to some arbitrary bureaucratic error with some donations",
	effectRes: 'woodPS',
	effectRes2: 0,
	effectValue: 10
}

function resetState(gameCompleted) {
	ignoreStateSaves = true;
	
	if (gameCompleted) {
		savedVars = saveInitVars();
	}

	if (hasBridge()) {
		BridgeCommander.call('resetState');
	} else if (hasLocalStorage()) {
		localStorage.removeItem('state');
	}
	
	if (gameCompleted) {
		// location.reload();
		startGame(true);
	} else {
		location.reload();
	}
}

function saveInitVars() {
	var initVars = [];
	initVars['tTerrariumFound'] = state.tTerrariumFound;
	initVars['tWoodPS'] = state.tWoodPS;
	initVars['tWood'] = state.tWood;
	initVars['tWoodCapacity'] = state.tWoodCapacity;
	initVars['tCocoPS'] = state.tCocoPS;
	initVars['tCoco'] = state.tCoco;
	initVars['tCocoCapacity'] = state.tCocoCapacity;
	initVars['tGamesCompleted'] = state.tGamesCompleted;
	initVars['tGoldPS'] = state.tGoldPS;
	initVars['tGold'] = state.tGold;
	initVars['tGoldCapacity'] = state.tGoldCapacity;
	initVars['wormCubes'] = state.wormCubes;
	initVars['tClosetArray'] = state.tClosetArray;
	initVars['tClosetSlots'] = state.tClosetSlots;
	initVars['tClubArray'] = state.tClubArray;
	initVars['tClubSlots'] = state.tClubSlots;
	return initVars;
}

function fillArrays() {
	if (!state.stateInitialized) {
		state.friends = [friendMeltyface,friendSweatson,friendJohn,friendJuicosaurus,friendCocoGhost,friendKimCumber,friendBobBottle,friendCountCandy,friendBroccula];
		state.shopPrices = [healthPotionPrice,redUsbPrice,greenUsbPrice,orangeUsbPrice,[starmapPrice,starmapPrice2,starmapPrice3]];
		state.planetudPrices = [[100,25,100,"wood"],[400,100,400,"gold"],[100,25,100,"coco"]];
		state.productStates = allProductStates;
		state.skillStates = allSkillStates;
		state.dungeons = yourDungeons;
		state.answerStates = allAnswerStates;
		state.bDerekShipStates = derekShipStates;
		state.stateInitialized = true;
	}
}

fillArrays();

function checkAncientState() {
	//For people with ancient states
	if (state.productStates.length === 0) {
		updateState('productStates', allProductStates);
	}
	if (state.skillStates.length === 0) {
		updateState('skillStates', allSkillStates);
	}
	if (state.dungeons.length === 0) {
		updateState('dungeons', yourDungeons);
	}
	if (state.answerStates.length === 0) {
		updateState('answerStates', allAnswerStates);
	}

	var isBobThere = false;
	for (var i = 0; i < state.friends.length; i++) {
		if (state.friends[i].name == "Bob the Bottle") {
			isBobThere = true;
		}
	}

	if (!isBobThere) {
		//Set resources PS straight
		updateState('burgerDoing', '');
		updateState('woodPS', 0);
		updateState('goldPS', 0);
		updateState('cocoPS', state.strawNr);
		updateState('strawCocoPS', state.strawNr);
		updateState('burgerWoodPS', state.axeNr + 1);
		var tempFriends = state.friends;
		var modernFriends = [friendMeltyface,friendSweatson,friendJohn,friendJuicosaurus,friendCocoGhost,friendKimCumber,friendBobBottle,friendCountCandy,friendBroccula];
		for (var i = 0; i < tempFriends.length; i++) {
			var found = false;
			if (tempFriends[i].found) {
				found = true;
			}
			if (found) {
				modernFriends[i].found = true;
				updateState(modernFriends[i].effectRes,findResourcePS(modernFriends[i].effectRes2) + modernFriends[i].effectValue);
			}
		}
		updateState('friends', modernFriends);
	}

	if (state.productStates[5] === 0 && state.derekToughness > 50) {
		var newUpgradeNr = state.derekToughness / 50;
		updateArrayState('productStates', 5, newUpgradeNr);
		var newStrength = 50 + (newUpgradeNr * 40);
		updateState('derekToughness', newStrength);
	}

	if (state.productStates[6] === 0 && state.healthPotionCapacity > 1) {
		var newUpgradeNr = state.healthPotionCapacity - 1;
		updateArrayState('productStates', 6, newUpgradeNr);
	}

	if (state.productStates[7] === 0 && state.derekMaxHealth > 50) {
		var newUpgradeNr = state.derekMaxHealth / 50;
		updateArrayState('productStates', 7, newUpgradeNr);
	}
}
