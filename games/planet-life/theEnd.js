
function goPlanetBack() {
	changeScene(
		"It's your old planet buddy!!</br>Remouladin must have brought him back after the explosion",
		"planet"
	);
	createGoButton("Yay!","talk",goPlanetBack2);
}

function goPlanetBack2() {
	changeScene(
		"You meet in a big planet hug.</br>Wow! It's really good to finally be reunited after that whole crazy journey",
		"planetAndBurgulon"
	);
	createGoButton("My old friend","talk",goParty1);
}

function goParty1() {
	playSound(soundEffect.beanie);
	changeScene(
		"Before you get a chance to catch up, Beanie shows up",
		"beanie"
	);
	createGoButton("Hey Beanie","drinks",goParty2);
}

function goParty2() {
	changeScene(
		"Hey guys, let's have a party!",
		"beanieSunglasses"
	);
	createGoButton("Ok!","talk",goParty3);
}

function goParty3() {
	changeScene(
		"OK!",
		"planetAndBurgulonSunglasses"
	);	
	setTimeout(function(){
		goParty4();
	},2000);
}

function goParty4() {
	playSound(soundEffect.party);
	changeScene(
		"Beanie hosts a big party in her imagination. Beans for everyone!",
		"beanieImaginationParty"
	);
	createGoButton("Party!","talk",goParty5);
}

function goParty5() {
	changeScene(
		"The stupid looking planet arrives really early, and just hangs around in a corner",
		"planetudParty"
	);
	createGoButton("...","talk",goParty6);
}

function goParty6() {
	changeScene(
		"But before long, some jerks show up with the coco penguin all dressed up and ready to party!",
		"cocoPenguinParty"
	);
	createGoButton("...","talk",goParty7);
}

function goParty7() {
	changeScene(
		"Space Ben sees an opportunity to profit, and starts to sell cheap health potions to everyone",
		"potionResearch"
	);
	createGoButton("Drink!","healthPotion",goParty8);
}

function goParty8() {
	playSound(soundEffect.techno);
	changeScene(
		"All the jerks get completely high on health potions, and starts to dance wildly to Jerk Techno",
		"jerkRave"
	);
	createGoButton("Woah","talk",goParty9);
}

function goParty9() {
	playSound(soundEffect.beating3);
	changeScene(
		"Derek starts yelling at them because they are breaking everything. They get a little scared, and start to giggle",
		"derek"
	);
	createGoButton("Ok then","talk",goParty10);
}

function goParty10() {
	changeScene(
		"The space potato seems a little shocked from Dereks yelling",
		"potato"
	);
	createGoButton("...","talk",goParty11);
}

function goParty11() {
	playSound(soundEffect.cry);
	changeScene(
		"He starts to cry!!",
		"potatoCrying"
	);
	createGoButton("Not again!","talk",goParty12);
}

function goParty12() {
	playSound(soundEffect.potion);
	changeScene(
		"Space Ben swoops in and offers him a drink",
		"spaceBenDrink"
	);
	createGoButton("...","talk",goParty13);
}

function goParty13() {
	changeScene(
		"You are not sure he could handle the strong health potion, but at least he stopped crying",
		"potatoDrunk"
	);
	createGoButton("...","talk",goParty14);
}

function goParty14() {
	playSound(soundEffect.cheer);
	changeScene(
		"There is a big cheer from the dance floor.</br>The Intergalactic Mailman has started to breakdance. The crowd goes wild!!",
		"intergalacticMailmanBreakdance"
	);	
	createGoButton("Those moves!","talk",goParty15);
}

function goParty15() {
	playSound(soundEffect.bentLords);
	changeScene(
		"The Moon Lords try to crash the party, and are being really rude to everyone..",
		"moonLords"
	);
	createGoButton("...","talk",goParty16);
}

function goParty16() {
	changeScene(
		"Then John shows up, and the Moon Lords run away in terror!",
		"johnParty"
	);
	createGoButton("...","talk",goParty17);
}

function goParty17() {
	changeScene(
		"Jerkinson Crusoe gets lost on his way to the party..",
		"jerkinsonCrusoe"
	);
	createGoButton("","talk",goParty18);
}

function goParty18() {
	changeScene(
		"He gets stranded on some Coco Pops asteroid far away in space. Maybe some planet will come by and pick him up eventually",
		"asteroid"
	);
	createGoButton("Not again!","talk",goParty19);
}

function goParty19() {
	changeScene(
		"The Monster of Loch Juice enters the party",
		"lochJuiceTongue"
	);
	createGoButton("Welcome!","talk",goParty20);
}

function goParty20() {
	playSound(soundEffect.vomit);
	changeScene(
		"And he starts to vomit out coco everywhere",
		"lochJuiceVomit"
	);
	createGoButton("Eww! Tasty!","talk",goParty21);
}

function goParty21() {
	playSound(soundEffect.hi);
	changeScene(
		"Bret goes wild and tries to mine the coco",
		"bret"
	);
	createGoButton("...","talk",goParty22);
}

function goParty22() {
	changeScene(
		"But he forgot he's crowbar somewhere",
		"crowbar"
	);
	createGoButton("...","talk",goParty23);
}

function goParty23() {
	playSound(soundEffect.techno);
	changeScene(
		"So he just starts dancing instead!",
		"bretDance"
	);
	createGoButton("Dance!","talk",goParty24);
}

function goParty24() {
	changeScene(
		"Kim Cumber casually enters the party. He is so cool!",
		"kimCumber"
	);
	createGoButton("OMG","talk",goParty25);
}

function goParty25() {
	if (state.bFriendBananaMan) {
		changeScene(
			"The Banana Man walks up to him and hands him a banana. They look into each others eyes for a while",
			"bananaMan"
		);
		createGoButton("...","talk",goParty26);		
	} else {
		goParty27();
	}
}

function goParty26() {
	playSound(soundEffect.shock);
	changeScene(
		"You get shocked to see Kim Cumber take off his face.</br>There's a jerk underneath. It's Banana Man's long lost brother, Cucumber Man. He was lost in a dungeon a long long time ago, and now they are finally reunited",
		"kimCumberJerk"
	);
	createGoButton("What a revelation!","talk",goParty27);
}

function goParty27() {
	playSound(soundEffect.thirsty);
	changeScene(
		"Benny and Bob the bottle are playing some obnoxious drinking game, that only bottles can play.</br>Before long they are rolling on the floor laughing",
		"bottleROFL"
	);
	createGoButton("Hehe","talk",goPartyGardenBoys);
}

function goPartyGardenBoys() {
	changeScene(
		"While nobody is watching, the Garden Boys sneak in and steal the Coco Penguin.</br>It's their greatest heist yet!",
		"cocoPenguinHeist"
	);
	createGoButton("Oh no you didn't!","talk",goParty28);
}

function goParty28() {
	if (state.bFriendBrokenRobot) {
		changeScene(
			"Shockingly enough, even WIFY made it to your party. She is talking to the broken robot.. Looks like she is laying the moves on him.",
			"wify"
		);
		createGoButton("Poor guy","talk",goParty29);
	} else {
		goParty29();
	}
}

function goParty29() {
	playSound(soundEffect.derek);
	changeScene(
		"Derek is finally taking a breather after a lifetime of fighting. And it looks like he has found a new vice - muffins!",
		"derekFat"
	);
	createGoButton("Oh Derek","talk",goParty30);
}

function goParty30() {
	changeScene(
		"Burgulon and the Planet spend most of the night talking about all the weird adventures they have been through. They enjoy seeing everybody they have met along the way, have a great time together. They agree that it doesn't really matter if you are a jerk or a derek. Deep down we are all the same",
		"planetAndBurgulon"
	);
	createGoButton("True","talk",goParty31);
}

function goParty31() {
	playSound(soundEffect.worm);
	changeScene(
		"While everybody is having a blast, Remouladin is sneaking outside and into reality",
		"appleWorm"
	);
	createGoButton("...","talk",goPartyCredits);
}

function goPartyCredits() {
	changeScene(
		"He almost forgot!</br>At this point he is supposed to show you the credits for the game",
		"appleWorm"
	);
	createGoButton("Let those credits roll","talk",goCredits2);
}

function goParty32() {
	changeScene(
		"That's enough gratitude for now.</br>Remouladin hopes you have enjoyed your time in this strange galaxy. Even though it can seem lonely in space, there are always friends to find in the weirdest places",
		"appleWorm"
	);
	createGoButton("Yeah","talk",goParty33);
}

function goParty33() {
	changeScene(
		"And even though there are plenty of jerks out there, remember that the biggest jerk of them all was Jack. Boy, was he a pain!",
		"appleWorm"
	);
	createGoButton("What a jerk","talk",goParty34);
}

function goParty34() {
	changeScene(
		"Whatever happened to Jack?</br>Should we go have a look?",
		"appleWorm"
	);
	createGoButton("Let's have a look","talk",goWormholeJack);
	createGoButton("Maybe later","talk",goEndParty);
}

function goEndParty() {
	changeScene(
		"As the sun starts to rise in Beanies imagination, the party slowly dies down.</br>All the jerks sleep in awkward positions in weird places.. Everybody else went to bed",
		"beanieImaginationParty"
	);
	createGoButton("...","talk",goEndParty2);
}

function goEndParty() {
	changeScene(
		"You slowly go back to your normal life.</br>There are still some rogue Derekulians in space that you could chase down. And all those resources won't gather themselves",
		"burgulon"
	);
	createGoButton("...","talk",goEndParty3);
}

function goEndParty3() {
	changeScene(
		"But you will always remember this awesome party, and all the adventures that you have had leading up to this.</br>Things will be a bit more chill from now on, but that's also fine",
		"burgulon"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
}


function goWormholeJack() {
	changeScene(
		"...",
		"apple"
	);
	setTimeout(function(){
		changeScene(
			"...",
			"appleToWormhole"
		);
	},1000);
	setTimeout(function(){
		changeScene(
			"...",
			"appleWormhole"
		);
		createGoButton("Enter Wormhole","appleWormhole",goLastWormhole);
	},1500);
}

function goLastWormhole() {
	playSound(soundEffect.wormHole);
	changeScene(
		"WOAAH!",
		"wormhole"
	);
	setTimeout(function(){
		changeScene(
			"Puha. We have arrived",
			"appleWorm"
		);
	},5000);
	setTimeout(function(){
		changeScene(
			"Ok, so in just a few moments, Jack should arrive here through the wormhole.</br>We should be at a safe distance",
			"appleWorm"
		);
		createGoButton("...","talk",goNewBeginning1);
	},7500);
}

function goNewBeginning1() {
	changeScene(
		"3..",
		"invisibleImg"
	);
	setTimeout(function(){
		changeScene(
			"2..",
			"invisibleImg"
		);
	},1000);
	setTimeout(function(){
		changeScene(
			"1..",
			"invisibleImg"
		);
	},2000);
	setTimeout(function(){
		changeScene(
			"...",
			"wormhole"
		);
	},3000);
	setTimeout(function(){
		changeScene(
			"...",
			"jackBloated"
		);
	},4000);
	setTimeout(function(){
		changeScene(
			"Watch out! Jack is gonna blow",
			"jackBloated"
		);
	},5000);
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene(
			"BANG!",
			"explosion"
		);
	},7500);
	setTimeout(function(){
		changeScene(
			"Hey, look! A beautiful planet appeared",
			"planet"
		);
	},9000);
	setTimeout(function(){
		changeScene(
			"Oh! This is weird.. I think I accidentally created some kind of time loop",
			"appleWorm"
		);
		createGoButton("Time loop?","talk",goNewNewBeginning2);
	},13000);
}

function goNewNewBeginning2() {
	changeScene(
		"Yes, now we are back to the beginning where the planet got created in that big explosion",
		"appleWorm"
	);
	createGoButton("Oh?","talk",goNewNewBeginning3);
}

function goNewNewBeginning3() {
	changeScene(
		"So it seems like that big explosion was Jack exploding, all along",
		"appleWorm"
	);
	createGoButton("Really?","talk",goNewNewBeginning4);
}

function goNewNewBeginning4() {
	changeScene(
		"Yeah!</br>Amazing how the ending of one really annoying life can create the foundation for something new and beautiful",
		"appleWorm"
	);
	createGoButton("Amazing","talk",goFindTerrarium);
}

function goFindTerrarium() {
	changeScene(
		"Well, now that we are here, what do you want to do?</br>You could choose to start over again as this new planet, that is probably going to experience all the same things that has already happened",
		"appleWorm"
	);
	createGoButton("Oh","talk",goNewNewBeginning5);
}

function goNewNewBeginning5() {
	if (state.tGamesCompleted > 0) {
		changeScene(
			"If you choose to start over, I will grant you these <span style='color:#ff00bb'>3 Worm Cubes.</span></br>You can of course just go back and continue being an awesome robot planet",
			"appleWorm"
		);
	} else {
		changeScene(
			"If you choose to start over, I will grant you these <span style='color:#ff00bb'>3 Worm Cubes.</span></br>You will need them in your next life, because I sent a brand new <span style='color:#00fff7'>Time Terrarium</span> with you into the future. It's gonna follow you through all your playthroughs of this game, from now till all of eternity. If you choose to become this new planet that is.</br>You can of course just go back and continue being an awesome robot planet",
			"appleWorm"
		);		
	}
	createGoButton("Let's go back","burgulon",goBackToTheBurgulon);
	createGoButton("Let's start over","planet",goStartOverPlanet);
}

function goStartOverPlanet() {
	changeScene(
		"Are you absolutely sure about this? You will forget all that has happened, and start over as this new fresh planet",
		"appleWorm"
	);
	createGoButton("No, let's go back","burgulon",goBackToTheBurgulon);
	createGoButton("Yes, let's start over","planet",goStartOverPlanet2);
}

function goBackToTheBurgulon() {
	changeScene(
		"Let's go back.. We've seen all this before anyways",
		"appleWorm"
	);
	setTimeout(function(){
		changeScene(
			"",
			"wormToApple",
		);
	},3000);
	setTimeout(function(){
		changeScene(
			"",
			"apple",
		);
	},3500);
	setTimeout(function(){
		changeScene(
			"",
			"appleToWormhole",
		);
	},4000);
	setTimeout(function(){
		changeScene(
			"",
			"appleWormhole",
		);
		createGoButton("Let's go","appleWormhole",goBackToBurgulon2);
	},4500);
}

function goBackToBurgulon2() {
	playSound(soundEffect.wormHole);
	changeScene(
		"WOAAH!",
		"wormhole"
	);
	setTimeout(function(){
		changeScene(
			"Welcome home",
			"appleWorm"
		);
		createGoButton("Thanks","talk",goNewGalaxy);
	},5000);
}

function goStartOverPlanet2() {
	changeScene(
		"Good luck out there. Here are your <span style='color:#ff00bb'>3 Worm Cubes</span>",
		"appleWorm"
	);
	createGoButton("Thanks! See you","talk",goStartPlanetOverTT1);
}

function goStartPlanetOverTT1() {
	completeGameTerrariumTime = true;

	changeScene(
		"Oh, and before you go. Let's say you wanted to keep one of Dereks items and one Jerk.</br>Which would you choose?",
		"appleWorm"
	);
	var donePicking = 0;
	if (state.tClosetSlots > getUsedSlots(state.tClosetSlots,state.tClosetArray) && state.derekItems.length > 0) {
		createGoButton("Choose item","derek",goCheckStoreDerekItems);
	} else {
		donePicking++;
	}
	if (state.tClubSlots > getUsedSlots(state.tClubSlots,state.tClubArray) && state.jerkPile.length > 0) {
		createGoButton("Choose jerk","jerkSquad",goCheckStoreJerk);
	} else {
		donePicking++;
	}
	if (donePicking == 2) {
		goStartPlanetOverTT2();
	}

	// if (state.tGamesCompleted == 0) {
	// 	changeScene(
	// 		"Oh, and before you go. Let's say you wanted to keep one of Dereks items and one Jerk.</br>Which would you choose?",
	// 		"appleWorm"
	// 	);
	// 	if (!state.chosenTTItem) {
	// 		createGoButton("Choose item","derek",goCheckStoreDerekItems);
	// 	}
	// 	if (!state.chosenTTJerk) {
	// 		createGoButton("Choose jerk","jerkSquad",goCheckStoreJerk);
	// 	} 
	// 	if (state.chosenTTItem && state.chosenTTJerk) {
	// 		goStartPlanetOverTT2();
	// 	}
	// } else {
	// 	changeScene(
	// 		"Oh, and before you go. Do you want to store some of Derek's items in the Time Terrarium? Or perhaps some jerks?",
	// 		"appleWorm",
	// 	);
	// 	createGoButton("Time Terrarium","timeTerrarium",goTimeTerrarium);
	// 	createGoButton("I'm ready to go!","planet",goStartPlanetOverTT2);
	// }	
}

function goStartPlanetOverTT2() {
	completeGameTerrariumTime = false;
	changeScene(
		"Ok, let's go!",
		"appleWorm"
	);
	setTimeout(function(){
		goStartOverPlanet3();
	},2000);
}

function goStartOverPlanet3() {
	updateState('wormCubes', state.wormCubes + 3);
	updateState('tGamesCompleted', state.tGamesCompleted + 1);
	setTimeout(function(){
		console.log("starting game over");
		resetState(true);
	},300);
}


//C CREDITS

function goCredits2() {
	playSound(soundEffect.cheer);
	changeScene(
		"The game is based loosely on an idea that <span style='color:#00fff7'>Christian Laumark</span> came up with one night, while coding with a friend. Then he developed and evolved it over the course of a couple of years.</br>He did all the strange art, and programmed all the features.. But he received help from some amazing people along the way",
		"planet"
	);
	createGoButton("...","talk",goCredits3);
}

function goCredits3() {
	playSound(soundEffect.burger);
	changeScene(
		"<span style='color:#ffea00'>Kristian Andersen</span> helped out with some of the more technical stuff, like making sure the game could save, and making it work on mobile. This game would have just been a silly web game without him",
		"burger"
	);
	createGoButton("...","talk",goCredits4);
}

function goCredits4() {
	playSound(soundEffect.beating);
	changeScene(
		"Without <span style='color:#37ff00'>Michael Flarup</span> and his amazing company <span style='color:#0091ff'>Northplay</span>, this game would never have been published in the first place. Thanks to him, the UI looks slightly better.</br>And he is the original voice of Derek",
		"derek"
	);
	createGoButton("...","talk",goCredits45);
}

function goCredits45() {
	playSound(soundEffect.cheer);
	changeScene(
		"If you are hearing those sweet space tunes, you have to thank <span style='color:#ff00bb'>Frederik Boye.</span> Without his tireless work on those crispy beats, space would have been the boring void you would have expected it to be",
		"derekDJ"
	);
	createGoButton("...","talk",goCredits5);
}

function goCredits5() {
	changeScene(
		"We thought it would be impossible to port the game for Android, but then <span style='color:#ffae00'>Ulrik Damm</span> took one look at it, and poof! The game worked on Android. Thanks Ulrik!",
		"potionResearch"
	);
	createGoButton("...","talk",goCredits6);
}

function goCredits6() {
	changeScene(
		"This game had really wonky buttons, until <span style='color:#00ff99'>Kevin</span> came along and applied his Javascript magic. Also if you read any proper English along the way, it's only thanks to him",
		"broccoliWorkerKevin"
	);
	createGoButton("...","talk",goCredits7);
}

function goCredits7() {
	changeScene(
		"And here's a shoutout to the amazing testers!</br></br><span style='color:#0077ff'>Julian Abela</span></br><span style='color:#04ff00'>Sebastian Ebert</span></br><span style='color:#ffb300'>Lucas Bunk</span></br><span style='color:#ff00bb'>Chry</span></br><span style='color:#ff0000'>SNP</span></br></br>Who knows what kind of game this would have been without them",
		"beanieSunglasses"
	);
	createGoButton("...","talk",goCredits8);
}

function goCredits8() {
	changeScene(
		"And a big hug to all the supporters on Discord.</br>It's been super motivating to have you around. And thanks for the fan art",
		"derekHealth"
	);
	//createGoButton("Fan art!?","burg3r",goFanArt);
	createGoButton("...","talk",goParty32);
}