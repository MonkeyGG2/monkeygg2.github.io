function goSummonJack() {
	updateState('bBentProgress', 1);
	updateState('bBeanieProgress', 7);
	updateState('bCelestialSummonerCharged', false);
	changeBackground("BG_Universe");
	playSound(soundEffect.explosion);
	changeScene(
		"A violent explosion blasts you back! You are totally blinded",
		"explosion"
	);
	createGoButton("Uf!","explosion",goSummonJack2);
}

function goSummonJack2() {
	changeScene(
		"When you finally regain your sight, you see a huge light in the center of the solar system.</br>It looks like a giant new sun has appeared right where Stanley used to be. Does this mean that Stanley is gone?",
		"emptySun"
	);
	createGoButton("STANLEY!?","talk",goStanleyNo);
}

function goStanleyNo() {
	changeScene(
		"There is no sign of Stanley anywhere. You can't even hear his happy giggling anymore.</br>Who is this new sun!?",
		"emptySun"
	);
	createGoButton("Who is this stupid sun!?","talk",goHiJack);
	//createGoButton("Who is this stupid sun!?","talk",goInspectJack);
	//createGoButton("Who is that stupid sun!?","talk",goSummonJack3);
}

function goHiJack() {
	playSound(soundEffect.jack);
	changeScene(
		"It looks like a giant sun with sunglasses on. Why would it wear sunglasses?</br>He yells out into the solar system that his name is jack, and that he is the new star around here. So deal with it",
		"jack"
	);
	createGoButton("Listen here steakhead!","talk",goHiJack2);
}

function goHiJack2() {
	changeScene(
		"You yell out, but he is too far away to hear you.. You supress your anger",
		"burgulon"
	);
	createGoButton("Grrr!","talk",goNewGalaxy);
}

function goSummonJack3() {
	changeScene(
		"You try to approach the new sun, but as you get closer, you see that the sun has brought a whole solar system with it.</br>In your path, there is a moon blocking you from getting closer to the sun",
		"bent"
	);
	createGoButton("Hello?","talk",goTalkMoon);
}

//M MOON LORDS

function goTalkMoon() {
	changeScene(
		"Wuuuh!",
		"bentLordsEmerging"
	);
	setTimeout(function(){
		playSound(soundEffect.bentLords);
		changeScene(
			"When you address the moon, three figures emerge from its surface",
			"bentLords"
		);
		createGoButton("Back","burgulon",goNewGalaxy);
		createGoButton("Talk","talk",goTalkTalkMoon);
	},1000);

}

function goTalkTalkMoon() {
	var h;
	if (state.bCoreStardust > 0) {
		h = "They look you up and down and sniff you. You see three shades of greed show in their eyes. Hungrily they tell you that they are the Moon Lords of Bent";
	} else {
		h = "They look you up and down and sniff you, and they obviously don't care for what they smell. Arrogantly they tell you that they are the Moon Lords of Bent";
	}
	changeScene(
		h,
		"bentLords"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Who's Bent?","talk",goTalkMoonBent);
	createGoButton("Can I pass?","talk",goTalkMoonPass);
}

function goTalkMoonBent() {
	changeScene(
		"They roll their eyes, and tell you that the moon is Bent of course",
		"bentLords"
	);
	createGoButton("Oh","talk",goTalkTalkMoon);
}

function goTalkMoonPass() {
	if (state.bCoreStardust >= 200) {
		changeScene(
			"They don't seem to care for your request. All they want is your stardust",
			"bentLords"
		);
		createGoButton("Back","talk",goTalkTalkMoon);
		//A picture of the jerk squad
		createGoButton("Come and get it then","jerkSquad",goFightMoon1);
	} else {
		if (state.bCoreStardust > 0) {
			changeScene(
				"They sniff your core. There doesn't seem to be enough stardust there for them consider you. That means you need to have <span style='color:#00fff7'>200 stardust</span> in your core.</br>And besides, Jack doesn't have time for loser planets. They ask you if you are even a real planet?",
				"bentLords"
			);
		} else {
			changeScene(
				"They tell you no, no and no. And besides, Jack doesn't have time for loser planets. They ask you if you are even a real planet?",
				"bentLords"
			);
		}
		createGoButton("Back","bentLords",goTalkTalkMoon);
		createGoButton("Who's Jack?","talk",goTalkMoonJack);
		createGoButton("I'm a real planet","talk",goTalkMoonPlanet);
		createGoButton("I'm not a real planet","talk",goTalkMoonPlanet);
	}
}

function goTalkMoonPlanet() {
	changeScene(
		"They laugh at you with three versions of strained laughter",
		"bentLords"
	);
	createGoButton("Rude","talk",goTalkMoonPass);
}

function goTalkMoonJack() {
	changeScene(
		"They give you a judgy look. Jack is the sun of course!",
		"bentLords"
	);
	createGoButton("Oh","talk",goTalkMoonPass);
}

function goFightMoon1() {
	playSound(soundEffect.bentLords);
	changeScene(
		"The Moon lords do a catchy summoning ritual - </br>Bent of Bents</br>Wake your giant crust</br>So we can get our STARDUST!",
		"bentLords"
	);
	createGoButton("Huh?","talk",goFightMoon2);
}

function goFightMoon2() {
	playSound(soundEffect.explosion);
	changeScene(
		"Weee!",
		"explosion"
	);
	setTimeout(function() {
		bossBattle = "bent";
		changeScene(
			"It's Bent. The moon itself. It seems intend on sucking out all your stardust!",
			"bentBoss"
		);
		createGoButton("Let's dance!","bentBoss",pickADerek,"Bent",400);
	},500);
}

function goDefeatBent() {
	changeScene(
		"You beat Bent! That moon is toast now.</br>You see the moon lords run away. They scream like little girls",
		"bentBossDead"
	);
	createGoButton("Hehe","talk",goDefeatBent2);
}

function goDefeatBent2() {
	changeScene(
		"In the rubble of the moon you find some old space rings. That's great!",
		"bentBossDead"
	);
	createGoButton("Yoinks!","spaceRing",goDefeatBent3);
}

function goDefeatBent3() {
	updateState('bSpaceRings', state.bSpaceRings + 600);
	changeScene(
		"<span style='color:#ffc800'>600 space rings!</span>",
		"spaceRing"
	);
	setTimeout(function(){
		updateState('bMinionsKilled', 1);
		goMeetPotato();
	},2000);
}

function goMeetPotato() {
	changeScene(
		"Oh wait.. Someone is crying",
		"bentBossDead"
	);
	createGoButton("Who's there?","bentBossDead",goMeetPotato2);
}

function goMeetPotato2() {
	changeScene(
		"It's a space potato!</br>The poor guy must have been stuck on the moon, when you destroyed it",
		"potatoCrying"
	);
	createGoButton("There there potato","talk",goMeetPotato3);
}

function goMeetPotato3() {
	changeScene(
		"The potato stops crying. But he still looks a bit shook by the whole thing",
		"potato"
	);
	createGoButton("It's going to be fine","talk",goMeetPotato4);
}

function goMeetPotato4() {
	updateState('bPotato', true);
	updateState('bGoldPS', state.bGoldPS + 1);
	changeScene(
		"You feel like reality is not really suited for this guy.</br>So you send him into Beanies imagination. It's such a nice place anyways",
		"potato"
	);
	createGoButton("Problem solved","beanieImagination",goBeanieImagination);
}

//S SLOPNAX

function goMeetSlopnax1() {
	changeScene(
		"You try to approach the sun, but suddenly something gets in the way",
		"sunEmptySilhoutte"
	);
	createGoButton("What is it now?","sunEmptySilhoutte",goMeetSlopnax2)
}

function goMeetSlopnax2() {
	changeScene(
		"It turns out to be a Pirate Asteroid! You were really hoping for an asteroid made of Coco Pops for some reason",
		"pirateAsteroid"
	);
	createGoButton("Who's there?","talk",goMeetSlopnax3);
}

function goMeetSlopnax3() {
	updateState('bSlopnaxProgress', 1);
	changeScene(
		"Suddenly a random screen on your surface starts to make noises. It turns out to be the captain of the asteroid, trying to get in touch with you",
		"talk"
	);
	createGoButton("Yes, hello?","talk",goSlopnax);
}

function goSlopnax() {
	playSound(soundEffect.slopnax);
	changeScene(
		"The captain is yelling a lot of nonsense. But you can make out that his name is Slopnax, and that they are after your stardust. Typical!",
		"slopnax"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Let me pass!","talk",goSlopnaxPass);
	createGoButton("Who are you?","talk",goSlopnaxTalk);
}

function goSlopnaxPass() {
	playSound(soundEffect.slopnax);
	if (state.bCoreStardust >= 600) {
		changeScene(
			"Slopnax starts to laugh. Then he almost chokes.</br>Then he decides to shut up, and just go for your stardust instead",
			"slopnax"
		);
		createGoButton("Come and get it then","talk",goSlopnaxAttack);
	} else {
		changeScene(
			"When Slopnax hears your request, he really starts getting into yelling. It takes a while before he runs out of air..</br>You take it as a no.</br>That means you need to have <span style='color:#00fff7'>600 stardust</span> in your core",
			"slopnax"
		);
		createGoButton("Ok","talk",goSlopnax);
	}
}

function goSlopnaxAttack() {
	playSound(soundEffect.slopnax);
	playSound(soundEffect.explosion);
	changeScene(
		"Yaaaarh!",
		"explosion"
	);
	setTimeout(function(){
		bossBattle = "slopnax";
		changeScene(
			"Slopnax and his crew of Asteroid Pirates are coming for your stardust!",
			"pirateAsteroid"
		);
		createGoButton("Let's dance!","pirateAsteroid",pickADerek,"Slopnax",800);
	},500);
}

function goDefeatSlopnax() {
	changeScene(
		"Slopnax gets kicked right in the face by one of your jerks, and falls off the ship.</br>All of his crew start to cry and go home. Victory is yours!",
		"slopnaxDead"
	);
	createGoButton("Yes!","slopnaxDead",goDefeatSlopnax2);
}

function goDefeatSlopnax2() {
	updateState('bSpaceRings', state.bSpaceRings + 1200);
	updateState('bMinionsKilled', 2);
	changeScene(
		"Slopnax dropped his wallet. There is <span style='color:#ffc800'>1200 space rings</span> inside!",
		"spaceRing"
	);
	createGoButton("Thank you Slopnax!","spaceRing",goDefeatSlopnax3);
}

function goDefeatSlopnax3() {
	changeScene(
		"Slopnax tells you that you are welcome.</br>It seems like that you have beaten him to his senses. Now he is actually a tolerable guy",
		"slopnaxDead"
	);
	createGoButton("There there Slopnax","talk",goDefeatSlopnax4);
}

function goDefeatSlopnax4() {
	updateState("bSlopnax", true);
	updateState("bWoodPS", state.bWoodPS + 3);
	changeScene(
		"You decide to give Slopnax a second chance.</br>But to keep him away from bad company you should probably stow him away somewhere safe",
		"slopnax"
	);
	createGoButton("Beanies Imagination!","beanieImagination",goBeanieImagination);
}

function goSlopnaxTalk() {
	changeScene(
		"Slopnax is wrestling with a mouthful of Coco Pops, while talking. You can barely make out what he is saying.</br>It sounds like him and his crew have been hired by Jack the star. They are out to collect all the stardust in the solar system, so Jack can become more powerful",
		"slopnax"
	);
	createGoButton("Back","slopnax",goSlopnax);
}


//M MAYONARDUK

function goMeetMayonada1() {
	changeScene(
		"You try to approach the sun..",
		"emptySun"
	);
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene(
			"",
			"explosion"
		);
	},2000);
	setTimeout(function(){
		changeScene(
			".. But suddenly it dissapears out of sight!",
			"invisibleImg"
		);
		createGoButton("What?","talk",goMeetMayonada2);
	},2500);
}

function goMeetMayonada2() {
	changeScene(
		"...",
		"invisibleImg"
	);
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene(
			"",
			"explosion"
		);
	},2000);
	setTimeout(function(){
		playSound(soundEffect.mayonada);
		changeScene(
			"!!!",
			"mayonada"
		);
		createGoButton("Who's there?","mayonada",goMeetMayonada3);
	},2500);
}

function goMeetMayonada3() {
	updateState("bMayonadaProgress", 1);
	changeScene(
		"It's the evil worm god, Mayonada!",
		"mayonada"
	);
	createGoButton("Oh no!","talk",goMayonada);
}

function goMayonada() {
	playSound(soundEffect.mayonada);
	changeScene(
		"Mayonada hisses at you. He is really scary, but he does smell good though",
		"mayonada"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Go away!","mayonada",goMayonadaPass);
	createGoButton("Who are you?","talk",goMayonadaTalk);
}

function goMayonadaPass() {
	if (state.bCoreStardust >= 900) {
		changeScene(
			"Mayonada get's really excited. You finally have enough stardust in you, for him to actually care about you. But not like care about you in a good way though",
			"mayonada"
		);	
		createGoButton("Come and get it then","talk",goMayonadaAttack);
	} else {
		changeScene(
			"Mayonada slithers around his lemon house. He is dancing an evil dance.. He wants your stardust, and he is just waiting around for you to get enough. That means you need to have <span style='color:#00fff7'>900 stardust</span> in your core",
			"mayonada"
		);	
		createGoButton("Back","mayonada",goMayonada);
	}
}

function goMayonadaTalk() {
	changeScene(
		"Mayonada shows you one of his tattoos.</br></br>It says - When life give you lemons, take the lemons and kick life in the crotch.</br></br>He doesn't seem like a very friendly worm",
		"mayonada"
	);
	createGoButton("Yikes","talk",goMayonada);
}

function goMayonadaAttack() {
	playSound(soundEffect.mayonada);
	playSound(soundEffect.explosion);
	changeScene(
		"Hisss!",
		"explosion"
	);
	setTimeout(function(){
		bossBattle = "mayonada";
		changeScene(
			"Mayonada is charging up all his godly power. He wants your stardust!",
			"mayonada"
		);
		createGoButton("Let's dance!","mayonada",pickADerek,"Mayonada",1600);
	},500);
}

function goDefeatMayonada() {
	changeScene(
		"Your jerks deliver the final blow to the evil Mayonada. He screams as he turns into a cloud of nasty looking smoke",
		"mayonadaDead"
	);
	createGoButton("Haha!","mayonadaDead",goDefeatMayonada2);
}

function goDefeatMayonada2() {
	updateState('bLollipops', state.bLollipops + 400);
	updateState('bMinionsKilled', 3);
	changeScene(
		"In the husk of Mayonadas space lemon, you find <span style='color:#ff0000'>400 lollipops.</span> You are so happy that you don't even wonder how they got there",
		"Lollipop"
	);
	createGoButton("Sweet!","Lollipop",goMeetLemonada);
}

function goMeetLemonada() {
	changeScene(
		"Suddenly the space lemon starts to smile",
		"lemonada"
	);
	createGoButton("Hello?","talk",goMeetLemonada2);
}

function goMeetLemonada2() {
	changeScene(
		"His name is Lemonada. He is happy to be free of that annoying worm god. It gave him terrible breath",
		"lemonada"
	);
	createGoButton("Good riddance","talk",goMeetLemonada3);
}

function goMeetLemonada3() {
	updateState('bLemonada', true);
	updateState('bCocoPS', state.bCocoPS + 6);
	changeScene(
		"You offer Lemonada to stay for free in Beanies Imagination together with your other friends.</br>You take that lazy smile as a yes",
		"lemonada"
	);
	createGoButton("Welcome","talk",goBeanieImagination);
}


//J JACK

function goCantMeetJack() {
	changeScene(
		"You go towards the sun. It's getting quite hot, and you can't see a thing with all that sunlight.</br>If only you had some way of protecting your eyes from the sun",
		"emptySun"
	);
	createGoButton("Turn back","burgulon",goNewGalaxy);
}

//Sunglasses burg
function goMeetJack() {
	changeScene(
		"You put on your gigantic sunglasses. Finally you can get to meet this enourmous bully that has destroyed Stanley, and been an all round nuisance to you",
		"burgulonSunglasses"
	);
	createGoButton("Finally","emptySun",goMeetJack2);
}

function goMeetJack2() {
	changeScene(
		"You half expect some stupid mini boss to show up.. But nothing gets in your way now",
		"emptySun"
	);
	createGoButton("Phew","talk",goMeetJack3);
}

function goMeetJack3() {
	playSound(soundEffect.explosion);
	changeScene(
		"",
		"explosion"
	);
	setTimeout(function(){
		changeScene(
			"You finally reach the giant sun.</br>What? He's wearing the same sunglasses as you!",
			"jack"
		);
		createGoButton("Samesies!","talk",goMeetJack4);
	},500);
}

if (censoredWords) {
	function goMeetJack4() {
		updateState('bJackProgress', 1);
		changeScene(
			"You both have a small laugh. But it only lasts a second.. This guy is the final boss. You have plenty of reasons to kick his butt, and your jerks are itching for a fight",
			"jack"
		);
		createGoButton("Die!","talk",goJack);
	}
} else {
	function goMeetJack4() {
		updateState('bJackProgress', 1);
		changeScene(
			"You both have a small laugh. But it only lasts a second.. This guy is the final boss. You have plenty of reasons to kick his ass, and your jerks are itching for a fight",
			"jack"
		);
		createGoButton("Die!","talk",goJack);
	}	
}


function goJack() {	
	playSound(soundEffect.jack);
	changeScene(
		"Jack is being a pain!",
		"jack"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	createGoButton("Talk","talk",goJackTalk);
	createGoButton("Prepare to die!","talk",goJackFight);
}

function goJackTalk() {
	changeScene(
		"Hehe.. It's kind of awkward trying to get a conversation going with him. You decide that you didn't really want to know anything about this jerk anyways",
		"jack"
	);
	createGoButton("Back","jack",goJack);
}

function goJackFight() {
	if (state.bCoreStardust >= 1200) {
		bossBattle = "derek";
		changeScene(
			"You get ready to fight the sun, but he just laughs.</br>He has a surprise for you",
			"jack"
		);
		createGoButton("A surprise?","talk",goJackFight2);
	} else {
		changeScene(
			"Jack laughs at you. Why should he fight you?</br>He won't see you as a worthy opponent before you have way more stardust in you. That means you need to have <span style='color:#00fff7'>1200 stardust</span> in your core",
			"jack"
		);
		createGoButton("Just you wait!","talk",goJack);
	}
}

function goJackFight2() {
	changeScene("!!!","explosion");
	playSound(soundEffect.explosion);
	setTimeout(function(){
		playRandomDerekSound();
		changeScene(
			"It's the original Derek!!</br>But something is wrong with him. It looks like Jack has hypnotized the mighty bull of bulls!",
			"derekHypnotized"
		);
		createGoButton("Fight!","derekHypnotized",pickADerek,"Derek",2500);
	},500);
}

function goDefeatOgDerek() {
	changeScene(
		"You bested Derek! He looks a little confused",
		"derekHypnotized"
	);
	createGoButton("Slap him","derekHypnotized",goDefeatOgDerek2);
}

function goDefeatOgDerek2() {
	playRandomPunchSound();
	playSound(soundEffect.explosion);
	changeScene(
		"Slap!",
		"explosion"
	);
	setTimeout(function(){
		changeScene(
			"Looks like it just took a little slap to get Derek to snap out of his hypnosis!",
			"derek"
		);
		createGoButton("Hey Derek!","talk",goDefeatOgDerek3);
	},500);
}

function goDefeatOgDerek3() {
	changeScene(
		"Derek grunts. He seems quite exhausted..</br>You don't know why, but you have a feeling you should send him to your Jerk Club",
		"derek"
	);
	createGoButton("Ehm, Derek. You are not going to like this","talk",goDefeatOgDerek4);
}

function goDefeatOgDerek4() {
	updateState('bDerekProgress', 1);
	changeScene(
		"This doesn't make any sense. Derek is too tired to object.. He goes to your Jerk Club. What's going to happen?",
		"jerkClub"
	);
	createGoButton("Hmm..","talk",goJerkClub);
}

// function goDefeatJack() {
// 	changeScene(
// 		"The End",
// 		"universe"
// 	);
// 	createGoButton("Ok","burgulon",goNewGalaxy);
// }


//L LETTERS

function goFirstLetter() {
	changeScene(
		"The Intergalactic Mailman is knocking on your surface. It seems like there's some mail for you",
		"intergalacticMailman"
	);
	createGoButton("Read Letter","jackLetter",goFirstLetter2);
}

function goFirstLetter2() {
	updateState('bJackLetters', 1);
	changeScene(
		"It's a letter from Jack. That new jackass sun, that just arrived in the middle of your solar system.</br>He informs you that this is now his solar system, and that he is the star around here now. He is also notifying you that your stardust taxes were due yesterday.</br>This is ridiculous!",
		"jackLetter"
	);
	createGoButton("Jackass sun","talk",goBurgulonSurface);
}

function goSecondLetter() {
	changeScene(
		"The Intergalactic Mailman is back. Looks like there's another letter from Jack",
		"intergalacticMailman"
	);
	createGoButton("Read Letter","jackLetter",goSecondLetter2);	
}

function goSecondLetter2() {
	updateState('bJackLetters', 2);
	changeScene(
		"You open the letter. There's some pretty angry hand writing here. It looks like Jack isn't too happy that you destroyed his little moon minion. And you haven't paid your stardust taxes yet. I mean, what did he expect?</br>Oh and further down there are several threats, that he will come and take the stardust himself if he has to. You would like to see him try",
		"jackLetter"
	);
	createGoButton("What a big bad sun","talk",goBurgulonSurface);
}

function goThirdLetter() {
	changeScene(
		"Your trusty Intergalactic Mailman is back again. You small talk a little.</br>It looks like he brought another letter from that unbearable sun",
		"intergalacticMailman"
	);
	createGoButton("Read Letter","jackLetter",goThirdLetter2);	
}

function goThirdLetter2() {
	updateState('bJackLetters', 3);
	changeScene(
		"The letter starts out nicely. Apparently he didn't mind getting rid of Slopnax, and those annyoing pirates. Also you are apparently obligated to call him a star, and NOT a sun. He stresses that several times in the letter",
		"jackLetter"
	);
	createGoButton("Whatever sunshine","talk",goBurgulonSurface);
}

function goFourthLetter() {
	changeScene(
		"Your Intergalactic Mailman is back. You have a cup of tea together and have a long chat about envelope sizes. He leaves a letter from Jack",
		"intergalacticMailman"
	);
	createGoButton("Read Letter","jackLetter",goFourthLetter2);	
}

function goFourthLetter2() {
	updateState('bJackLetters', 4);
	changeScene(
		"Ok, so Jack is not happy about that whole Mayonada incident. Apparently that evil god education was very expensive, and guess who had to pay for it.</br>Also you now owe Jack 1 trillion stardust. That's according to him of course",
		"jackLetter"
	);
	createGoButton("You wish sunnyboy","talk",goBurgulonSurface);
}


//I INSPECT JACK

function goInspectJack() {
	playSound(soundEffect.jack);
	var h = "";
	if (state.bMinionsKilled == 0 && state.bBentProgress == 1) {
		h = "There is a moon and some annoying moon lords blocking the way to the sun";
	} else if (state.bMinionsKilled == 1 && state.bSlopnaxProgress > 0) {
		h = "Some obnoxious Asteroid Pirates are blocking the way to the sun";
	} else if (state.bMinionsKilled == 2 && state.bMayonadaProgress > 0) {
		h = "There is an evil worm god blocking your way to the sun";
	} else if (state.bMinionsKilled == 3) {
		h = "You've got a clear shot to the sun! Are your jerks ready to take him on?";
	}
	changeScene(
		"Jack is burning hot in the center of the solar system. You really don't like this guy!</br>" + h,
		"jack"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	if (state.bBentProgress == 0) {
		createGoButton("Strange Moon","bent",goSummonJack3);
	}
	if (state.bBentProgress == 1 && state.bMinionsKilled == 0) {
		createGoButton("Bent","bent",goTalkMoon);
	}
	if (state.bMinionsKilled == 1) {
		if (state.bSlopnaxProgress == 0) {
			createGoButton("Talk to Jack","talk",goMeetSlopnax1);
		} else if (state.bSlopnaxProgress == 1) {
			createGoButton("Asteroid Pirate","pirateAsteroid",goSlopnax);
		}
	}
	if (state.bMinionsKilled == 2) {
		if (state.bMayonadaProgress == 0) {
			createGoButton("Talk to Jack","talk",goMeetMayonada1);
		} else if (state.bMayonadaProgress == 1) {
			createGoButton("Mayonada","mayonada",goMayonada);
		}
	}
	if (state.bMinionsKilled == 3) {
		if (state.bMouladinProgress < 5) {
			createGoButton("Talk to Jack","talk",goCantMeetJack);
		} else {
			if (state.bJackProgress == 0) {
				createGoButton("Talk to Jack","talk",goMeetJack);
			} else if (state.bJackProgress == 1 && state.bDerekProgress < 1) {
				createGoButton("Jack","jack",goJack);
			}
		}
	}
	if (state.bDerekProgress >= 1) {
		createGoButton("Let's end this!","talk",goFinallyFightJack);
	}
}

function goFinallyFightJack() {
	changeScene(
		"It looks like jack doesn't have any more distractions up his sleeve. He is totally ready to fight you!",
		"jack"
	);
	createGoButton("Back","jack",goInspectJack);
	if (state.bCoreStardust > 0) {
		bossBattle = "jack";
		createGoButton("Fight!","jerkSquad",pickADerek,"Jack",99999);
	}
}

//BOSS WIN TEXTS

function goBentWins() {
	playSound(soundEffect.bentLords);
	changeScene(
		"Oh no! Bent got all your stardust.</br>You feel empty inside",
		"bent"
	);
	createGoButton("Auch",state.bCoreState,goNewGalaxy);
}

function goSlopnaxWins() {
	playSound(soundEffect.slopnax);
	changeScene(
		"The stupid pirates looted every last fleck of stardust from your core.</br>You feel empty inside",
		"slopnax"
	);
	createGoButton("Auch",state.bCoreState,goNewGalaxy);
}

function goMayonadaWins() {
	playSound(soundEffect.mayonada);
	changeScene(
		"Mayonada sucked out all of your stardust.</br>You feel empty inside",
		"mayonada"
	);
	createGoButton("Auch",state.bCoreState,goNewGalaxy);
}

//TODODODO Insert Derek hypnotized
function goDerekWins() {
	playRandomDerekSound();
	changeScene(
		"Derek ate all your stardust. Surely it wasn't on purpose.</br>You feel empty inside",
		"derekHypnotized"
	);
	createGoButton("Auch",state.bCoreState,goNewGalaxy);
}

function goJackWins() {
	playSound(soundEffect.jack);
	changeScene(
		"Jack easily sucked out all your stardust.</br>You didn't stand a chance",
		"jack"
	);
	createGoButton("Auch",state.bCoreState,goNewGalaxy);
}

//JACK EXPLODES

//IF you actually manage to defeat jack
function goDefeatJack() {
	updateState('bCoreState', 'coreOrange');
	changeScene(
		"Against all odds it looks like you defeated Jack!",
		"jack"
	);	
	createGoButton("Insane!","talk",goDefeatJack2);
}

function goDefeatJack2() {
	updateState('bSpaceRings', state.bSpaceRings + 900000);
	changeScene(
		"Look!</br>Jack dropped <span style='color:#ffc800'>900000 space rings!</span></br>That's a lot of space rings!",
		"spaceRing"
	);
	createGoButton("Oh yeah!","spaceRing",goDefeatJack3);
}

function goDefeatJack3() {
	changeScene(
		"It looks like he is not handling his defeat so well. He is blowing up to giant proportions",
		"jackBloated"
	);
	createGoButton("Oh no!","talk",goJackExplodes3);
}

//If you defeat jack by coco infused stardust

function goJackExplodes() {
	updateState('bCoreState', 'coreOrange');
	changeScene(
		"Jack easily sucked out all your stardust.</br>But wait, something is happening!",
		"jack"
	);
	createGoButton("Uuh!","talk",goJackExplodes2);
}

function goJackExplodes2() {
	changeScene(
		"Oh! It looks like Jack is having a bad reaction to your coco infused stardust!",
		"jackBloated"
	);
	createGoButton("Oh yeah!","talk",goJackExplodes3);
}

function goJackExplodes3() {
	changeScene(
		"Oh oh! He is growing bigger and bigger!</br>Looks like he is going to explode in 10..",
		"jackBloated"
	);
	setTimeout(function(){
		changeScene(
			"9..",
			"jackBloated"
		);
	},5000);
	setTimeout(function(){
		changeScene(
			"8..",
			"jackBloated"
		);
	},6000);
	setTimeout(function(){
		changeScene(
			"7..",
			"jackBloated"
		);
	},7000);
	setTimeout(function(){
		changeScene(
			"6..",
			"jackBloated"
		);
	},8000);
	setTimeout(function(){
		changeScene(
			"5..",
			"jackBloated"
		);
	},9000);
	setTimeout(function(){
		changeScene(
			"4..",
			"jackBloated"
		);
	},10000);
	setTimeout(function(){
		changeScene(
			"3..",
			"jackBloated"
		);
	},11000);
	setTimeout(function(){
		changeScene(
			"2..",
			"jackBloated"
		);
	},12000);
	setTimeout(function(){
		changeScene(
			"1..",
			"jackBloated"
		);
	},13000);
	setTimeout(function(){
		changeScene(
			".. Hold on",
			"invisibleImg"
		);
		createGoButton("Huh?","talk",goRemouladinJack);
	},14000);
}

function goRemouladinJack() {
	changeScene(
		"Nobody wants to see this stupid sun explode. It's going to blow up the entire system with everyone we care about",
		"appleWorm"
	);
	createGoButton("...","talk",goRemouladinJack2);
}

function goRemouladinJack2() {
	changeScene(
		"I'm going to interfere here, and wormhole this disaster somewhere far away!",
		"appleWormhole"
	);
	createGoButton("...","talk",goRemouladinJack3);
}

function goRemouladinJack3() {
	changeScene(
		"...",
		"jackBloated"
	);
	setTimeout(function(){
		changeScene(
			"Swuuurp!",
			"wormhole"
		);
	},1500);
	setTimeout(function(){
		changeScene(
			"Flomp!",
			"invisibleImg"
		);
	},3500);
	setTimeout(function(){
		changeScene(
			"There! All better now",
			"appleWorm"
		);
		createGoButton("...","talk",goRemouladinJack4);
	},4500);
}

function goRemouladinJack4() {
	changeScene(
		"And I know.. Why didn't I just wormhole Jack away before he started to explode.</br>Well, there's a reason for everything, and maybe this whole space adventure couldn't have happened if it wasn't for what I just did there, at exactly the right moment.. Confusing? I'm sure you'll figure it all out later",
		"appleWorm"
	);
	createGoButton("...","talk",goRemouladinJack5);
}

function goRemouladinJack5() {
	changeScene(
		"Oh, by the way! I took the liberty to bring an old friend back.</br>See ya!",
		"appleWorm"
	);
	createGoButton("???","talk",goRemouladinJack6);
}

function goRemouladinJack6() {
	playSound(soundEffect.explosion);
	changeScene(
		"Puf!",
		"explosion"
	);
	setTimeout(function(){
		updateState('bPlanetBack', true);
		// updateState('bCoreState', 'coreOrange');
		changeScene(
			"Remouladin left",
			"invisibleImg"
		);
		createGoButton("Back","burgulon",goNewGalaxy);
	},500);
}