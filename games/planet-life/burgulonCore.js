//C CORE

function goCore() {
	changeBackground("BG_BurgulonCore");
	playSound(soundEffect.core);
	if (state.bAppleProgress < 2) {
		changeScene(
			"In the center of your body, there's a huge black hole bubbling with nothingness",
			"blackHole"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		if (state.bAppleProgress == 1) {
			createGoButton("Throw apple","smallApple",goAppleCore);
		}
	} else {
		changeScene(
			"Your core is warm and glowing. There is <span style='color:#00fff7'>" + state.bCoreStardust + "/" + state.bCoreCapacity + " stardust</span> flowing in there",
			state.bCoreState,
			"goCore"
		);
		createGoButton("Back","burgulonSurface",goBurgulonSurface);
		if (state.bCoreStardust > 0 && state.bCoreState != "coreBrown") {
			createGoButton("Harvest core <span style='color:#00fff7'>(gain " + state.bCoreStardust + " stardust)</span>","stardust",goHarvestCore);
		}
		if (state.bAppleProgress >= 2 && !state.bBeanShop && state.bCoreStardust < state.bCoreCapacity) {
			createGoButton("Talk to Beanie","beanie",goIntroduceBeanShop);
		}
		if (anyBeans()) {
			createGoButton("Fuel core with beans",state.bCoreState,goFuelCore);
		}
		if (state.bBeanShop) {
			createGoButton("Beanies Beanshop","beanShop",goBeanShop);
		}
		createGoButton("Baby engineer","engineerBaby",goVisitBaby);
	}
}

function goFuelCore() {
	var h;
	if (anyBeans()) {
		h = "There is <span style='color:#00fff7'>" + state.bCoreStardust + "/" + state.bCoreCapacity + " stardust</span> in your core. Wanna throw some beans in there?";
	} else {
		h = "You don't have beans. Maybe Beanie can help you out!";
	}
	changeScene(
		h,
		state.bCoreState,
		"goFuelCore"
	);
	createGoButton("Back",state.bCoreState,goCore);
	var allBeans = [
		"Tiny Purple Bean","Tiny Blue Bean","Tiny Orange Bean",
		"Average Purple Bean","Average Blue Bean","Average Orange Bean",
		"Huge Purple Bean","Huge Blue Bean","Huge Orange Bean"
	];
	var b = state.bMyBeans;
	for (var i = 0; i < allBeans.length; i++) {
		var x = 0;
		var image;
		var beanNr;
		for (var j = 0; j < b.length; j++) {
			if (!b[j].used && allBeans[i] == b[j].name) {
				x++;
				image = b[j].image;
				beanNr = j;
			}
		}
		if (x > 0) {
			createGoButton("(" + x + ") " + allBeans[i],image,goUseBean,beanNr);
		}
	}
}

function goUseBean(bean) {
	var beanModifier = 1;
	if (state.bMouladinUpgrades[2]) {
		beanModifier = 2;
	}
	var stardustGenerated = 0;
	if (state.bMyBeans[bean].size == "Tiny") {
		stardustGenerated += (3 * state.bCoreLevel) * beanModifier;
	}
	if (state.bMyBeans[bean].size == "Average") {
		stardustGenerated += (12 * state.bCoreLevel) * beanModifier;
	}
	if (state.bMyBeans[bean].size == "Huge") {
		stardustGenerated += (24 * state.bCoreLevel) * beanModifier;
	}
	var coreColor;
	if (state.bCoreState == "coreBlue") {
		coreColor = "Blue";
	}
	if (state.bCoreState == "corePurple") {
		coreColor = "Purple";
	}
	if (state.bCoreState == "coreOrange") {
		coreColor = "Orange";
	}
	if (state.bMyBeans[bean].color == coreColor) {
		stardustGenerated = stardustGenerated * 2;
	}
	var atCapacity = false;
	var h = "";
	if (stardustGenerated + state.bCoreStardust >= state.bCoreCapacity) {
		atCapacity = true;
		stardustGenerated = state.bCoreCapacity - state.bCoreStardust;
		h = "It seems like your <span style='color:#ff0000'>core is filled to the limit</span> with stardust";
	}
	updateState('bCoreStardust',state.bCoreStardust + stardustGenerated);
	var newBeans = state.bMyBeans;
	newBeans.splice(bean,1);
	// newBeans[bean].used = true;
	updateState('bMyBeans',newBeans);
	changeScene(
		"You throw a bean into your core.</br>Your core grows even brighter as it generates <span style='color:#00fff7'>" + stardustGenerated + " stardust!</span></br>" + h,
		state.bCoreState,
		"goUseBean"
	);
	var newPlace = goFuelCore;
	if (Math.random() <= 0.25 || state.bCoreState == "blackHole") {
		if (state.bCoreState != "coreBrown") {
			console.log("changing color");
			newPlace = changeCoreColor
		}
	}
	if (state.impatientMode) {
		newPlace();
	} else {
		createGoButton("Cool!",state.bCoreState,newPlace);
	}
	
}

function changeCoreColor() {
	var colors = ["purple","blue","orange"];
	var coreNames = ["corePurple","coreBlue","coreOrange"];
	var colorNr = 0;
	newCoreColorNr();
	while (state.bCoreState == coreNames[colorNr]) {
		newCoreColorNr();
	}
	updateState('bCoreState',coreNames[colorNr]);
	changeScene(
		"For some reason your core turns " + colors[colorNr],
		state.bCoreState
	);
	createGoButton("Wow!",state.bCoreState,goFuelCore);
	function newCoreColorNr() {
		colorNr = Math.floor(Math.random() * 3);
	}
}

function goHarvestCore() {
	changeScene(
		"There is <span style='color:#00fff7'>" + state.bCoreStardust + "/" + state.bCoreCapacity + " stardust</span> in your core. Do you want to take it out and just put it in your wallet somehow?",
		"stardust"
	);
	createGoButton("No","no",goCore);
	createGoButton("Yes","yes",goHarvestCoreConfirmed);
}

function goHarvestCoreConfirmed() {
	upgradeAnimation(
		"You pulled out <span style='color:#00fff7'>" + state.bCoreStardust + " stardust</span>!",
		"stardust",
		goCore
	);
	updateState('bStardust', state.bStardust + state.bCoreStardust);
	drainCore();
}

function drainCore() {
	updateState('bCoreStardustIncrement', 1);
	updateState('bCoreState', 'blackHole');
	updateState('bCoreStardust', 0);
}

function goAppleCore() {
	changeScene(
		"You gently toss the apple into the black hole...",
		"smallApple"
	);
	setTimeout(function(){
		playSound(soundEffect.explosion);
		changeScene(
			"!!!",
			"explosion"
		);
	},2000);
	setTimeout(function(){
		updateState('bAppleProgress', 2);
		//updateState('bBeanieProgress', 6);
		changeScene(
			"The black hole sucked up the apple. And now it seems like a small sun appeared in its place.<br/>It's nice and warm",
			"coreBlue"
		);
		createGoButton("Examine core","coreBlue",goCore);
	},3000);
}

//B BABY

function goVisitBaby() {
	changeScene(
		"The baby drools on a floor plan of your innards. It suddenly starts crying",
		"engineerBaby"
	);
	createGoButton("Back","burgulonSurface",goBurgulonSurface);
	if (state.bBeanieProgress == 3) {
		playSound(soundEffect.babyCry);
		createGoButton("Comfort baby","engineerBaby",goFindCore);
	}
	if (state.bBeanieProgress >= 6) {
		playSound(soundEffect.baby);
		changeScene(
			"The baby drools on a floor plan of your innards. It points to some upgrades it can make to your inner dungeon",
			"engineerBaby",
			"goVisitBaby"
		);
		createGoButton("Back",state.bCoreState,goCore);
		createGoButton("Talk","talk",goTalkBaby);
		if (anyBeans()) {
			createProduct("Bean Appetite");
		}
		createProduct("Stardust Capacity");
	}
}

function goTalkBaby() {
	playSound(soundEffect.baby);
	var babyTalks = [
		"In very simple language, the baby explains that you can pull out all the stardust from your core, if you ever need some stardust to spend",
		"The baby gurgles",
		"The baby shows you some sketches of how your core works. If you feed it beans that are the same color as the core it will generate more stardust",
		"The baby starts to cry"
	];
	changeScene(
		babyTalks[babyTalkCount],
		"engineerBaby"
	);
	createGoButton("Back","engineerBaby",goVisitBaby);
	if (babyTalkCount < babyTalks.length - 1) {
		createGoButton("Interesting","talk",goTalkBaby);
		babyTalkCount++;
	} else {
		babyTalkCount = 0;
	}
}