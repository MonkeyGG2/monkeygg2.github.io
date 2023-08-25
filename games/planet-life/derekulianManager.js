function derekulian(navn,image,clr,description,health) {
	this.navn = navn;
	this.image = image;
	this.description = description;
	this.health = health;
	this.clr = clr;
	this.stardustHunger = health / 1.5;
}

function newDerek(navn,image,clr,description,health) {
	var new_derek = new derekulian(navn,image,clr,description,health);
	allDereks.push(new_derek);
}

function newBossDerek(array,navn,image,clr,description,health) {
	var new_derek = new derekulian(navn,image,clr,description,health);
	array.push(new_derek);
}

function loadDerek(index,health) {
	console.log("Goes here " + index);
	curDerekIndex = index;
	// derekulianHealth = derekArray[index].health;
	derekulianHealth = health;
	curDerekulianHealth = derekulianHealth;
	//curDerekHunger = Math.floor(derekArray[index].stardustHunger / 6); 
	curDerekBaseHunger = Math.floor(health / 7); 
	calculateDerekHunger();
}


//OLD PICKADEREK CIRKUS

// function pickADerek(stardust) {
// 	var mostHunger = 0;
// 	var luckyNumber;
// 	if (bossBattle == "") {
// 		derekArray = allDereks;
// 	} else if (bossBattle == "bent") {
// 		derekArray = bentArray;
// 	} else if (bossBattle == "slopnax") {
// 		derekArray = slopnaxArray;
// 	} else if (bossBattle == "mayonada") {
// 		derekArray = mayonadaArray;
// 	} else if (bossBattle == "jack") {
// 		derekArray  = jackArray;
// 	}
// 	for (var i = 0; i < derekArray.length; i++) {
// 		if (derekArray[i].stardustHunger <= stardust) {
// 			var thisHunger = derekArray[i].stardustHunger + (Math.random() * 100);
// 			console.log("The hunger is " + thisHunger);
// 			if (thisHunger > mostHunger) {
// 				console.log("picked a new Derek: " + i);
// 				mostHunger = thisHunger;
// 				luckyNumber = i;
// 			}
// 		}
// 	}
// 	if (mostHunger == 0) {
// 		console.log("NADA!");
// 		goNotEvenANibble();
// 	} else {
// 		console.log("The lucky Derek is: " + derekArray[luckyNumber]);
// 		loadDerek(luckyNumber);
// 		if (bossBattle == "") {
// 			derekIntro();	
// 		} else {
// 			derekIntro2();
// 		}
// 	}
// }

function pickADerek(name,health) {

	playBattleMusic();

	var luckyNumber;
	if (bossBattle == "") {
		derekArray = allDereks;
	} else if (bossBattle == "bent") {
		derekArray = bentArray;
	} else if (bossBattle == "slopnax") {
		derekArray = slopnaxArray;
	} else if (bossBattle == "mayonada") {
		derekArray = mayonadaArray;
	} else if (bossBattle == "derek") {
		derekArray  = ogDerekArray;
	} else if (bossBattle == "jack") {
		playSound(soundEffect.jack);
		derekArray = jackArray;
	} else if (bossBattle == "randomDerek") {
		derekArray = allDereks;
	} else if (bossBattle == 0) {
		derekArray = allDereks;
		playSound(soundEffect.house);
	} else if (bossBattle == 1) {
		derekArray = allDereks;
		playSound(soundEffect.techno);
	} else if (bossBattle == 2) {
		derekArray = allDereks;
		playSound(soundEffect.heavy);
	} else if (bossBattle == 3) {
		derekArray = allDereks;
		playSound(soundEffect.jazz);
	}
	for (var i = 0; i < derekArray.length; i++) {
		console.log("Here's the guy! " + derekArray);
		if (derekArray[i].navn == name) {
			console.log("It's a " + name);
			luckyNumber = i;
		}
	}
	loadDerek(luckyNumber,health);
	if (bossBattle == "") {
		derekIntro();	
	} else {
		derekIntro2();
	}
}

function derekIntro() {
	playSound(soundEffect.explosion);
	changeScene(
		"SLAM!",
		"explosion"
	);
	setTimeout(function(){
		changeScene(
			"It seems like the Derekulians have caught the scent of your sweet stardust. A Derekulian drop pod slams hard into your surface!",
			"dropPod"
		);
		createGoButton("Who goes there?","dropPod",derekIntro2);
	},500);
}

function derekIntro2() {
	playSound(soundEffect.explosion);
	changeScene(
		"PUF!",
		"explosion"
	);
	setTimeout(function() {
		playRandomDerekSound();
		changeScene(
			"Out comes <span style='color:#" + derekArray[curDerekIndex].clr + "'>" + derekArray[curDerekIndex].navn + "!</span></br>" + derekArray[curDerekIndex].description,
			derekArray[curDerekIndex].image
		);
		createGoButton("Attack!","jerkSquad",startDungeon);
	},500);
}

var allDereks = [];
var curDerekIndex = 0;
// var derekulianHealth = allDereks[curDerekIndex];
// var curDerekulianHealth = derekulianHealth;
var derekulianHealth;
var curDerekulianHealth;
var curDerekHunger = 0;
var curDerekBaseHunger = 0;

var bentArray = [];
var slopnaxArray = [];
var mayonadaArray = [];
var ogDerekArray = [];
var jackArray = [];

//BOSSES

newBossDerek(
	bentArray,
	"Bent",
	"bentBoss",
	"ccfff0",
	"It's the whole moon of Bent, coming down to suck your stardust! Better let your jerks handle this",
	400
);

newBossDerek(
	slopnaxArray,
	"Slopnax",
	"pirateAsteroid",
	"fff980",
	"You can see all the pirates readying for an attack. Slopnax is doing his battle dance",
	800
);

newBossDerek(
	mayonadaArray,
	"Mayonada",
	"mayonada",
	'ffe600',
	"Mayonada is drawing power from his Lemon. Get your jerks ready!",
	1600
);

newBossDerek(
	ogDerekArray,
	"Derek",
	"derekHypnotized",
	'ff4e00',
	"It's the original Derek. It's the strongest Derek of them all!",
	2500
);

newBossDerek(
	jackArray,
	"Jack",
	"jack",
	'ffb700',
	"Oh no! Jack is giant! There is no way you can defeat him",
	99999
);

//DEREKS

newDerek(
	"Sleepy Derek",
	"derekSleepy",
	"00ffea",
	"This Derek is almost falling asleep. Your jerks should be able to get him pretty quickly",
	40
);

newDerek(
	"Tiny Derek",
	"derekTiny",
	"fff980",
	"This Derek is really small",
	50
);

if (censoredWords) {
	newDerek(
		"Homeless Derek",
		"derekHomeless",
		"8f8983",
		"Poor Homeless Derek. Better kick his butt and steal his space rings",
		60
	);
} else {
	newDerek(
		"Homeless Derek",
		"derekHomeless",
		"8f8983",
		"Poor Homeless Derek. Better kick his ass and steal his space rings",
		60
	);	
}


newDerek(
	"Gnomerek",
	"derekGnome",
	"025c01",
	"This Derek is a gnome. Get his gold!!",
	70
);

newDerek(
	"Upside Downrek",
	"derekUpsideDown",
	"7b8a4c",
	"Somebody flipped this Derek, and he never found his way back around again",
	80
);

newDerek(
	"Green Derek",
	"derekGreen",
	"00ff37",
	"Pretty lazy concept. This is just a green Derek",
	100
);

newDerek(
	"Paper Derek",
	"derekPaper",
	"e3e0c1",
	"Somebody printed this Derek on a piece of paper",
	120
);

newDerek(
	"Doreka",
	"derekDoreka",
	"ff00f7",
	"Doreka is fighting for her rights as a female Derekulian warrior temptress. This is clearly just a Derek dressed as a woman",
	150
);

newDerek(
	"Football Derek",
	"derekFootball",
	"24baff",
	"This Derek was really popular in school. Look where that got him",
	180
);

newDerek(
	"Derek Four Eyes",
	"derekFourEyes",
	"91fffa",
	"Wait.. Wasn't this Derek supposed to be wearing glasses?",
	220
);

newDerek(
	"Coco Derek",
	"derekCoco",
	"8f6235",
	"A coco Derek. Really? Somebody clearly ran out of Derek concepts",
	250
);

newDerek(
	"Jerek",
	"derekJerek",
	"5eff00",
	"This Derek seems legit",
	300
);

newDerek(
	"Dogrek",
	"derekDog",
	"b692de",
	"Who's a good boy? DOGREK IS!",
	330
);

newDerek(
	"Gamedevrek",
	"derekGamedev",
	"339cff",
	"This Derek can't stop talking about the video game he is working on: Derek Life 3",
	350
);

newDerek(
	"DJ Derek",
	"derekDJ",
	"f700ff",
	"This Derek is really into house music. And beating up jerks of course",
	370
);

newDerek(
	"Crazy Derek",
	"derekCrazy",
	"fff700",
	"You wonder why this Derek is after your stardust, but you already know the answer: BECAUSE HE'S CRAAAAAZY!!!!",
	400
);

newDerek(
	"Broccoli Derek",
	"derekBroccoli",
	"19bd00",
	"This Derek smells of farts",
	420
);

if (censoredWords) {
	newDerek(
		"Chefrek",
		"derekChef",
		"ff7d7d",
		"Did somebody order jerkbeef? This Derek is here to cook some butt!",
		460
	);
} else {
	newDerek(
		"Chefrek",
		"derekChef",
		"ff7d7d",
		"Did somebody order jerkbeef? This Derek is here to cook some ass!",
		460
	);	
}


newDerek(
	"Cleaning Derek",
	"derekCleaning",
	"c5fcf3",
	"This Derek is here to clean up your dirty jerks. Get ready to fight",
	500
);

newDerek(
	"King Derek",
	"derekKing",
	"ffd000",
	"Watch out. Here's a high and mighty Derek coming up!",
	550
);

newDerek(
	"DEREK OF DOOM",
	"derekDoom",
	"e62200",
	"RELAX WITH THE ALL CAPS DEREK!",
	600
);

function derekShip(name,image,description,levels,baseHunger,hungerIncrement,dereks,randomDereks,reward) {
	this.name = name;
	this.image = image;
	this.description = description;
	this.levels = levels;
	this.baseHunger = baseHunger;
	this.hungerIncrement = hungerIncrement;
	this.dereks = dereks;
	this.randomDereks = randomDereks;
	this.reward = reward;
}

function newDerekShip(name,image,description,levels,baseHunger,hungerIncrement,dereks,randomDereks,reward) {
	var thisDerekShip = new derekShip(name,image,description,levels,baseHunger,hungerIncrement,dereks,randomDereks,reward);
	allDerekShips.push(thisDerekShip);
	derekShipStates.push(0);
}

function loadDerekShip(nr) {
	bossBattle = nr;
	var health = allDerekShips[nr].baseHunger + (state.bDerekShipStates[nr] * allDerekShips[nr].hungerIncrement);
	curDerekShip = nr;
	changeScene(
		allDerekShips[nr].description + "</br>You have beaten <span style='color:#ff0000'>" + state.bDerekShipStates[curDerekShip] + "/" + allDerekShips[curDerekShip].levels + " Derekulians</span> on this ship.</br>There is <span style='color:#00fff7'>" + state.bCoreStardust + "/" + state.bCoreCapacity + " stardust in your core</span>",
		allDerekShips[nr].image
	);
	createGoButton("Back","spaceRadio",goSpaceRadio);
	createGoButton("Turn up the radio","derekStrength",pickADerek,allDerekShips[nr].dereks[state.bDerekShipStates[nr]],health);
}

function finishDerek() {
	updateArrayState('bDerekShipStates', curDerekShip, state.bDerekShipStates[curDerekShip] + 1);
	if (state.bDerekShipStates[curDerekShip] < allDerekShips[curDerekShip].levels) {
		changeScene(
			"Your jerks are victorious!</br>The Derekulians send you angry radio messages, that can't be translated into words.</br>You have beaten <span style='color:#ff0000'>" + state.bDerekShipStates[curDerekShip] + "/" + allDerekShips[curDerekShip].levels + " Derekulians</span> on the ship",
			allDerekShips[curDerekShip].image
		);
		createGoButton("Stay away from my stardust!","talk",goSpaceRadio);
	} else {
		allDerekShips[curDerekShip].reward();
	}
}

function goStartRadio(nr) {
	if (nr == 0) {
		playSound(soundEffect.house);
		changeScene(
			"You toss several hundred coins into the radio. It takes forever!</br>Then it starts to play some catchy Friend House Music. It really gets you into a good mood",
			"crawlerHouse"
		);
		createGoButton("Oh yeah!","talk",goSummonSaucer);
	}
	if (nr == 1) {
		playSound(soundEffect.techno);
		changeScene(
			"You meticulously stuff the radio with gold coins. You almost forget what you were doing by the time you finish.</br>But you get rewarded by some stupid Jerk Techno. It's really dumb, but you are able to just enjoy it for what it is",
			"bret"
		);
		createGoButton("Oh yeah!","talk",goSummonToaster);
	}
	if (nr == 2) {
		playSound(soundEffect.heavy);
		changeScene(
			"You get quite bored while you stuff several thousand coins into the radio. What kind of ridiculous radio takes coins anyway.</br>But you soon forget it, as you bang your head to some awesome Gnomish Heavy Metal, performed by The Garden Boys themselves!",
			"tipToesTyler"
		);
		createGoButton("Oh yeah!","talk",goSummonMotherCow);
	}
	if (nr == 3) {
		playSound(soundEffect.jazz);
		changeScene(
			"It takes you several decades to feed the radio enough coins. But when it finally turns on, it's actually quite annoying. It turns out to be some of Beanie's Improv Jazz.. You figure that everybody has to have a bad side to them somehow",
			"beanieBean"
		);
		createGoButton("Oh well","talk",goSummonDerekulusX);
	}
}

function goSummonSaucer() {
	updateArrayState('bShipsSummoned', 0, true);
	changeScene(
		"Out of nowhere pops a flying saucer!</br>Apparently they don't like house music!",
		"flyingSaucer"
	);
	createGoButton("OK!","talk",loadDerekShip,0);
}

function goSummonToaster() {
	updateArrayState('bShipsSummoned', 1, true);
	changeScene(
		"Out of nowhere pops a giant space toaster!</br>Apparently they hate Jerk Techno!",
		"evilToaster"
	);
	createGoButton("What are you gonna do about it!?","talk",loadDerekShip,1);
}

function goSummonMotherCow() {
	updateArrayState('bShipsSummoned', 2, true);
	changeScene(
		"Out of nowhere pops a huge space ship. It looks like the Derekulian mother ship - The Mother Cow!</br>They seem angered by your loud metal music.</br>You start to wonder if Derekulians like any kind of music at all",
		"derekulianWarship"
	);
	createGoButton("Take a chill pill","talk",loadDerekShip,2);
}

function goSummonDerekulusX() {
	updateArrayState('bShipsSummoned', 3, true);
	changeScene(
		"Out of nowhere pops a giant planet! It must be the Derekulian home world - Derekulus X!</br>Looks like they came here to stop that horrible jazz, and steal your stardust",
		"spaceDungeon"
	);
	createGoButton("I don't blame you","talk",loadDerekShip,3);
}

var allDerekShips = [];
//convert to bDerekShipStates on initialize in globalVars.js
var derekShipStates = [];

newDerekShip(
	"Flying Saucer",
	"flyingSaucer",
	"This flying saucer doesn't look like it's carrying regular aliens. These are either vikings or Derekulians!",
	7,
	40,
	40,
	["Sleepy Derek","Tiny Derek","Homeless Derek","Gnomerek","Upside Downrek","Paper Derek","Doreka"],
	false,
	goDefeatFlyingSaucer
);

newDerekShip(
	"Evil Toaster",
	"evilToaster",
	"Are these Derek's flying around in a toaster? They must be some pretty lowly Dereks.",
	7,
	300,
	100,
	["Derek Four Eyes","Coco Derek","Jerek","Dogrek","Green Derek","DJ Derek","Crazy Derek"],
	false,
	goDefeatEvilToaster
);

newDerekShip(
	"The Mother Cow",
	"derekulianWarship",
	"Oh my! It's The Mother Cow! It's the Derekulian flagsship. Look like they are getting serious about getting that stardust from you now.",
	7,
	1200,
	200,
	["Football Derek","Gamedevrek","Broccoli Derek","Chefrek","Cleaning Derek","King Derek","DEREK OF DOOM"],
	false,
	goDefeatMotherCow
);

newDerekShip(
	"Derekulus X",
	"spaceDungeon",
	"What's this!? It looks like it's the home planet of the Dereks - Derekulus X!",
	21,
	3000,
	500,
	[
		"Sleepy Derek","Tiny Derek","Homeless Derek","Gnomerek","Upside Downrek","Paper Derek","Doreka",
		"Derek Four Eyes","Coco Derek","Jerek","Dogrek","Green Derek","DJ Derek","Crazy Derek",
		"Football Derek","Gamedevrek","Broccoli Derek","Chefrek","Cleaning Derek","King Derek","DEREK OF DOOM"
	],
	false,
	goDefeatDerekulusX
);

function goDefeatFlyingSaucer() {
	changeScene(
		"All the Dereks are done for. You get a distress signal from the ship</br>It's a banana crying for help",
		"flyingSaucer"
	);
	createGoButton("Send help","flyingSaucer",goDefeatFlyingSaucer2);
}

function goDefeatFlyingSaucer2() {
	changeScene(
		"It's a jerk dressed as a banana. It's Banana Man!</br>He is extremely happy to see you, and offers to work for you if you promise him that he never has to smell another bull fart",
		"bananaMan"
	);
	createGoButton("Come here you","talk",goDefeatFlyingSaucer3);
}

function goDefeatFlyingSaucer3() {
	updateState('bFriendBananaMan', true);
	updateState('bGoldPS', state.bGoldPS + 1);
	changeScene(
		"You take him to the jerk club, where all the other guys compliment his banana outfit.</br>He tells you that he will go back to being an entertainer, and make some gold for you",
		"jerkClub"
	);
	createGoButton("Cool!","talk",goJerkBackstage);
}

function goDefeatEvilToaster() {
	changeScene(
		"Hurray! You showed those Dereks who's boss.</br>You notice that they left something behind",
		"evilToaster"
	);	
	createGoButton("What is it?","talk",goDefeatEvilToaster2);
}

if (censoredWords) {
	function goDefeatEvilToaster2() {
		changeScene(
			"It's a jerk wise man, floating in space. You quickly get him to safety.</br>Turns out he was a prisoner of the Derekulians. They were trying to get some wisdom on how to battle jerks from him. It turns out he was just being a know it all, and they never got anything useful out of him. They were probably happy to finally get rid of him",
			"jerkWiseMan"
		);
		createGoButton("You're safe now","talk",goDefeatEvilToaster3);
	}
} else {
	function goDefeatEvilToaster2() {
		changeScene(
			"It's a jerk wise man, floating in space. You quickly get him to safety.</br>Turns out he was a prisoner of the Derekulians. They were trying to get some wisdom on how to battle jerks from him. It turns out he was just being a wise ass, and they never got anything useful out of him. They were probably happy to finally get rid of him",
			"jerkWiseMan"
		);
		createGoButton("You're safe now","talk",goDefeatEvilToaster3);
	}	
}

function goDefeatEvilToaster3() {
	updateState('bFriendJerkWiseman', true);
	updateState('bCocoPS', state.bCocoPS + 3);
	changeScene(
		"You bring him to the jerk club. Everybody is ecstatic to see the legendary wiseman, and ask him all sorts of ridiculous questions. The answers they get are even more stupid.</br>Somehow the wiseman is able to trick a lot of coco from your jerks, which he gives to you. He has no desire to be sent back in to space",
		"jerkClub"
	);
	createGoButton("Great","talk",goJerkBackstage);
}

function goDefeatMotherCow() {
	changeScene(
		"Oh my, those bulls didn't stand a chance. Their silly spaceship leaves in embarrassment.</br>It seems like they jettisoned something",
		"evilToaster"
	);
	createGoButton("What is it?","talk",goDefeatMotherCow2);
}

function goDefeatMotherCow2() {
	changeScene(
		"It's a broken robot. Maybe it was being a bother or something?",
		"brokenRobot"
	);
	createGoButton("Come here pal","talk",goDefeatMotherCow3);
}

function goDefeatMotherCow3() {
	updateState('bFriendBrokenRobot', true);
	updateState('bWoodPS', state.bWoodPS + 6);
	changeScene(
		"You bring the robot to the jerk club. They clearly don't like having a robot around, but you tell them to stop being robofobic, and try to get along!</br>The robot looks sad, but starts to collect all the dust and dirt from the jerk club, and assemble it into wood logs",
		"jerkClub"
	);
	createGoButton("Take care","talk",goJerkBackstage);
}

function goDefeatDerekulusX() {
	changeScene(
		"You did it!</br>You defeated the last of the Dereks!",
		"ancientDerek"
	);
	createGoButton("I'm the best!","talk",goDefeatDerekulusX2);
}

function goDefeatDerekulusX2() {
	// changeScene(
	// 	"The only issue is that there is nothing here yet.</br>Now that you have gone through all this trouble to get here, what do you think would be a fitting reward? Send me an email on <span style='color:#00fff7'>christianlaumark@gmail.com</span> to let me know",
	// 	"ancientDerek"
	// );
	// setTimeout(function(){
	// 	changeScene(
	// 		"The only issue is that there is nothing here yet.</br>Now that you have gone through all this trouble to get here, what do you think would be a fitting reward? Send me an email on <span style='color:#00fff7'>christianlaumark@gmail.com</span> to let me know",
	// 		"ancientDerek"
	// 	);
	// 	createGoButton("I see","talk",goNewGalaxy);
	// },3000);
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
	createGoButton("Fantastic!","wormCube",goNewGalaxy);	
}


function goFindMillionDerekCube() {
	updateState('bMillionDerekCubeFound', true);
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
	createGoButton("Fantastic!","wormCube",goNewGalaxy);	
}