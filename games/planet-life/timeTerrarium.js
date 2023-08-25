function goTimeTerrarium() {
	document.getElementById("resCounter").innerHTML = "<span style='color:#d0ba91'>" + state.tWood + "/" + state.tWoodCapacity + " wood</span></br><span style='color:#ffc800'>" + state.tGold + "/" + state.tGoldCapacity + " gold</span></br><span style='color:#8b5937'>" + state.tCoco + "/" + state.tCocoCapacity + " coco</span>";
	if (checkIfFullTerrarium()) {
		var terImg = "timeTerrariumFull";
	} else {
		var terImg = "timeTerrarium";
	}
	var completedH;
	if (state.tGamesCompleted > 1) {
		completedH = "So far you have been through <span style='color:#16fa05'>" + state.tGamesCompleted + " games of Planet Life.</span>";
	} else {
		completedH = "So far you have been through <span style='color:#16fa05'>" + state.tGamesCompleted + " game of Planet Life.</span>";
	}
	changeBackground('BG_TimeTerrarium');
	changeScene(
		"You look into your little Time Terrarium. Three magnificent plants are thriving while completely defying time.</br>" + completedH + "</br>You have <span style='color:#ff00bb'>" + state.wormCubes + " worm cube(s)</span>",
		terImg,
		"goTimeTerrarium"
	);	
	if (state.burgulonTime) {
		createGoButton("Back","burgulonSurface",goRemoveResCounterOnBack);
	} else if (completeGameTerrariumTime) {
		createGoButton("Back","appleWorm",goStartPlanetOverTT1);
	} else {
		createGoButton("Back","newSurface",goRemoveResCounterOnBack);	
	}
	createGoButton("Harvest all","harvestTerrarium",goHarvestTerrarium);
	createGoButton("Woodshroom","woodshroom",goWoodshroom);
	createGoButton("Gold Flower","goldFlower",goGoldflower);
	createGoButton("Coco Potato","cocoPotato",goCocoPotato);
	createGoButton("Time Closet","timeCloset",goTimeCloset);
	createGoButton("Time Club","timeClub",goTimeClub);
}

function goRemoveResCounterOnBack() {
	document.getElementById("resCounter").innerHTML = "";
	if (state.burgulonTime) {
		goBurgulonSurface();
	} else {
		checkWhat();
	}
}

function goHarvestTerrarium() {
	document.getElementById("resCounter").innerHTML = "";
	changeScene(
		"You empty all the buckets and gain</br><span style='color:#d0ba91'>" + state.tWood + " wood</span></br><span style='color:#ffc800'>" + state.tGold + " gold</span></br><span style='color:#8b5937'>" + state.tCoco + " coco</span>",
		"harvestTerrarium",
		"goHarvestTerrarium"
	);
	createGoButton("Satisfaction!","harvestTerrarium",goTimeTerrarium);
	if (state.burgulonTime) {
		updateState('bWood', state.bWood + state.tWood);
		updateState('tWood', 0);
		updateState('bCoco', state.bCoco + state.tCoco);
		updateState('tCoco', 0);
		updateState('bGold', state.bGold + state.tGold);
		updateState('tGold', 0);
	} else {
		updateState('wood', state.wood + state.tWood);
		updateState('tWood', 0);
		updateState('coco', state.coco + state.tCoco);
		updateState('tCoco', 0);
		updateState('gold', state.gold + state.tGold);
		updateState('tGold', 0);
	}
}

function checkIfFullTerrarium() {
	var full = 0;
	if (state.tWood == state.tWoodCapacity || state.tWoodPS == 0) {
		full++;
	}
	if (state.tGold == state.tGoldCapacity || state.tGoldPS == 0) {
		full++;
	}
	if (state.tCoco == state.tCocoCapacity || state.tCocoPS == 0) {
		full++;
	}
	if (full == 3) {
		return true;
	} else {
		return false;
	}
}

function goWoodshroom() {
	document.getElementById("resCounter").innerHTML = "There is <span style='color:#d0ba91'>" + state.tWood + "/" + state.tWoodCapacity + " wood</span> in the bucket";
	changeScene(
		"The Woodshroom is producing <span style='color:#d0ba91'>" + state.tWoodPS + " wood/sec</span></br>You have <span style='color:#ff00bb'>" + state.wormCubes + " worm cube(s)</span>",
		"woodshroom",
		"goWoodshroom"
	);
	createGoButton("Back","timeTerrarium",goTimeTerrarium);
	createTimeUpgradeButton(
		"Nurture Woodshroom",
		"woodshroom",
		"The woodshroom will produce <span style='color:#d0ba91'>" + (state.tWoodPS + 1) + " wood/sec</span>",
		[1],
		"woodshroom" 
	);
	createTimeUpgradeButton(
		"Deepen Wood Bucket",
		"bucketWood",
		"The wood bucket will be able to carry <span style='color:#d0ba91'>" + (state.tWoodCapacity + 500) + " wood</span>",
		[1],
		"woodBucket" 
	);
}

function goGoldflower() {
	document.getElementById("resCounter").innerHTML = "There is <span style='color:#ffc800'>" + state.tGold + "/" + state.tGoldCapacity + " gold</span> in the bucket";
	changeScene(
		"The Gold Flower is producing <span style='color:#ffc800'>" + state.tGoldPS + " gold/sec</span></br>You have <span style='color:#ff00bb'>" + state.wormCubes + " worm cube(s)</span>",
		"goldFlower",
		"goGoldFlower"
	);
	createGoButton("Back","timeTerrarium",goTimeTerrarium);
	createTimeUpgradeButton(
		"Nurture Gold Flower",
		"goldFlower",
		"The gold flower will produce <span style='color:#ffc800'>" + (state.tGoldPS + 1) + " gold/sec</span>",
		[2],
		"goldFlower" 
	);
	createTimeUpgradeButton(
		"Deepen Gold Bucket",
		"bucketGold",
		"The gold bucket will be able to carry <span style='color:#ffc800'>" + (state.tGoldCapacity + 200) + " gold</span>",
		[1],
		"goldBucket" 
	);
}

function goCocoPotato() {
	document.getElementById("resCounter").innerHTML = "There is <span style='color:#8b5937'>" + state.tCoco + "/" + state.tCocoCapacity + " coco</span> in the bucket";
	changeScene(
		"The Coco Potato is producing <span style='color:#8b5937'>" + state.tCocoPS + " coco/sec</span></br>You have <span style='color:#ff00bb'>" + state.wormCubes + " worm cube(s)</span>",
		"cocoPotato",
		"goCocoPotato"
	);
	createGoButton("Back","timeTerrarium",goTimeTerrarium);
	createTimeUpgradeButton(
		"Nurture Coco Potato",
		"cocoPotato",
		"The coco potato will produce <span style='color:#8b5937'>" + (state.tCocoPS + 1) + " coco/sec</span>",
		[1],
		"cocoPotato" 
	);
	createTimeUpgradeButton(
		"Deepen Coco Bucket",
		"bucketCoco",
		"The coco bucket will be able to carry <span style='color:#8b5937'>" + (state.tCocoCapacity + 500) + " coco</span>",
		[1],
		"cocoBucket" 
	);
}

function createTimeUpgradeButton(title,image,description,price,location) {
	createTimeBuildButton(
		title,
		image,
		description,
		upgradeTimeRes,
		title + "But",
		"Upgrade",
		price,
		price,
		location,
	);
}

function upgradeTimeRes(price,location) {
	if (location == "woodshroom") {
		updateState('wormCubes', state.wormCubes - 1);
		updateState('tWoodPS', state.tWoodPS + 1);
		upgradeAnimation("Wood is timeless","wood",goWoodshroom);
	}
	if (location == "woodBucket") {
		updateState('wormCubes', state.wormCubes - 1);
		updateState('tWoodCapacity', state.tWoodCapacity + 500);
		upgradeAnimation("That bucket is deeper now","bucketWood",goWoodshroom);
	}
	if (location == "goldFlower") {
		updateState('wormCubes', state.wormCubes - 2);
		updateState('tGoldPS', state.tGoldPS + 1);
		upgradeAnimation("Roses are for jerks. This is pure gold baby!","gold",goGoldflower);
	}
	if (location == "goldBucket") {
		updateState('wormCubes', state.wormCubes - 1);
		updateState('tGoldCapacity', state.tGoldCapacity + 200);
		upgradeAnimation("That bucket is deeper now","bucketGold",goGoldflower);
	}
	if (location == "cocoPotato") {
		updateState('wormCubes', state.wormCubes - 1);
		updateState('tCocoPS', state.tCocoPS + 1);
		upgradeAnimation("Always coco! All the time!","coco",goCocoPotato);
	}
	if (location == "cocoBucket") {
		updateState('wormCubes', state.wormCubes - 1);
		updateState('tCocoCapacity', state.tCocoCapacity + 500);
		upgradeAnimation("That bucket is deeper now","bucketCoco",goCocoPotato);
	}
	if (location == "goTimeClub") {
		updateState('wormCubes', state.wormCubes - state.tClubSlots);
		updateState('tClubSlots', state.tClubSlots + 1);
		upgradeAnimation("Room for more jerks!","jerkSquad",goTimeClub);
	}
	if (location == "goTimeCloset") {
		updateState('wormCubes', state.wormCubes - (state.tClosetSlots * 4));
		updateState('tClosetSlots', state.tClosetSlots + 1);
		upgradeAnimation("Room for more items!","timeCloset",goTimeCloset);
	}	
}

function goCheckWormCubes(remuPlace) {
	changeScene(
		"Remouladin takes a while to count all your <span style='color:#ff00bb'>" + state.wormCubes + " Worm Cube(s)</span>",
		"wormCube"
	);
	if (remuPlace == "startolar") {
		createGoButton("Back","appleWorm",goAppleWorm);
	}
	if (remuPlace == "broccoli") {
		createGoButton("Back","appleWorm",goRemouladin);
	}
	if (remuPlace == "burgulon") {
		createGoButton("Back","appleWorm",goMouladin);
	}
}

function goTimeCloset() {
	document.getElementById("resCounter").innerHTML = "";
	var slotColor = "<span style='color:#ff0000'>";
	if (getUsedSlots(state.tClosetSlots,state.tClosetArray) < state.tClosetSlots) {
		slotColor = "<span style='color:#16fa05'>";
	}
	changeScene(
		"There's a strange smell in here.</br>There's also " + slotColor + getUsedSlots(state.tClosetSlots,state.tClosetArray) + "/" + state.tClosetSlots + "</span> items in here.</br>You have <span style='color:#ff00bb'>" + state.wormCubes + " worm cube(s)</span>",
		"timeCloset",
		"goTimeCloset"
	);
	createGoButton("Back","timeTerrarium",goTimeTerrarium);
	for (var i = 0; i < state.tClosetSlots; i++) {
		if (state.tClosetArray[i] != undefined) {
			createGoButton(
				writeItemName(i,state.tClosetArray,true),
				state.tClosetArray[i].itemImage,
				goCheckClosetSlot,
				i
			);
		}
	}
	if (getUsedSlots(state.tClosetSlots,state.tClosetArray) < state.tClosetSlots) {
		createGoButton("Store item","timeCloset",goCheckClosetSlot,getEmptySlot(state.tClosetSlots,state.tClosetArray));
	}
	if (state.tClosetSlots < 3) {
		createTimeUpgradeButton(
			"Additional Item Slot",
			"timeCloset",
			"The Time Closet can hold one more of Dereks items for eternity",
			[(state.tClosetSlots * 4)],
			"goTimeCloset" 
		);	
	}
}

function getUsedSlots(slot,array) {
	var slots = 0;
	for (var i = 0; i < slot; i++) {
		if (array[i] != undefined) {
			slots++;
		}
	}
	return slots;
}

function getEmptySlot(slot,array) {
	for (var i = 0; i < slot; i++) {
		if (array[i] == undefined) {
			return i;
		}
	}
}
 
function goCheckClosetSlot(index) {
	if (state.tClosetArray[index] != undefined) {
		var h = "Here's a ";
		h += writeItemName(index,state.tClosetArray,false) + "</br>";
		h += writeItemStats(index,state.tClosetArray);
		changeScene(
			h,
			state.tClosetArray[index].itemImage,
			"goCheckClosetSlot"
		);
		createGoButton("Back","timeCloset",goTimeCloset);
		if (state.derekDefrosted) {
			createGoButton("Give to Derek","derek",itemToDerek,index);
		}		
	} else {
		changeScene(
			"There's nothing here",
			"timeCloset",
			"goCheckClosetSlot"
		);
		createGoButton("Back","timeCloset",goTimeCloset);
		createGoButton("Store Item","derek",goCheckStoreDerekItems);
	}
}

function itemToDerek(index) {
	var newDerekItems = state.derekItems;
	newDerekItems.push(state.tClosetArray[index]);
	updateState('derekItems', newDerekItems);
	var newCloset = state.tClosetArray;
	newCloset.splice(index,1);
	updateState('tClosetArray', newCloset);
	upgradeAnimation("Here you go Derek","derek",goTimeCloset);
}

function goCheckStoreDerekItems() {
	if (state.derekItems.length > 0) {
		changeScene(
			"Which one of these items do you want to store in the Time Closet?",
			"timeCloset",
			"goCheckStoreDerekItems"
		);
		if (completeGameTerrariumTime) {
			createGoButton("Back","appleWorm",goStartPlanetOverTT1);
		} else {
			createGoButton("Back","timeCloset",goTimeCloset);			
		}
		for (var i = 0; i < state.derekItems.length; i++) {
			createGoButton(writeItemName(i,state.derekItems,false),state.derekItems[i].itemImage,goInspectStoreItem,i);
		}
	} else {
		changeScene(
			"Derek doesn't have any clothes for you to take. How sad",
			"derek",
			"goCheckStoreDerekItems"
		);
		if (completeGameTerrariumTime) {
			createGoButton("Back","appleWorm",goStartPlanetOverTT1);
		} else {
			createGoButton("Back","timeCloset",goTimeCloset);			
		}
	}
}

function goInspectStoreItem(index) {
	var items = state.derekItems;
	changeScene(
		"Look! It's " + writeItemName(index,state.derekItems,false) + "</br>" + writeItemStats(index,state.derekItems),
		items[index].itemImage
	);
	createGoButton("Back","derek",goCheckStoreDerekItems);
	createGoButton("Store",items[index].itemImage,goStoreItem,index);
}

function goStoreItem(index) {
	var newCloset = state.tClosetArray;
	var items = state.derekItems;
	items[index].equipped = false;
	newCloset.push(items[index]);
	updateState('tClosetArray', newCloset);
	var items = state.derekItems;	
	items.splice(index,1);
	updateState('derekItems', items);
	calculateDerekStats();
	var exitPlace = goTimeCloset;
	if (completeGameTerrariumTime) {
		updateState('chosenTTItem', true);
		exitPlace = goStartPlanetOverTT1;
	}
	upgradeAnimation("Stored for eternity!","derek",exitPlace);
}

function goTimeClub() {
	document.getElementById("resCounter").innerHTML = "";
	var slotColor = "<span style='color:#ff0000'>";
	if (getUsedSlots(state.tClubSlots,state.tClubArray) < state.tClubSlots) {
		slotColor = "<span style='color:#16fa05'>";
	}
	changeScene(
		"It's a really nice hangout spot. If you are a jerk.</br>There are " + slotColor + getUsedSlots(state.tClubSlots,state.tClubArray) + "/" + state.tClubSlots + "</span> jerks in here.</br>You have <span style='color:#ff00bb'>" + state.wormCubes + " worm cube(s)</span>",
		"timeClub",
		"goTimeClub"
	);
	createGoButton("Back","timeTerrarium",goTimeTerrarium);
	for (var i = 0; i < state.tClubSlots; i++) {
		if (state.tClubArray[i] != undefined) {
			createGoButton(
				state.tClubArray[i].navn,
				state.tClubArray[i].image,
				goCheckClubSlot,
				i
			);
		}
	}
	if (getUsedSlots(state.tClubSlots,state.tClubArray) < state.tClubSlots) {
		createGoButton("Store jerk","timeClub",goCheckClubSlot,getEmptySlot(state.tClubSlots,state.tClubArray));
	}
	if (state.tClubSlots < 6) {
		createTimeUpgradeButton(
			"Additional Jerk Slot",
			"timeClub",
			"The Time Club can hold one more jerk for eternity",
			[state.tClubSlots],
			"goTimeClub" 
		);	
	}
}

function goCheckClubSlot(index) {
	if (state.tClubArray[index] != undefined) {
		var h = "Here's a ";
		h += state.tClubArray[index].navn + "</br>";
		h += "- " + state.tClubArray[index].description;
		changeScene(
			h,
			state.tClubArray[index].image,
			"goCheckClubSlot"
		);
		createGoButton("Back","timeClub",goTimeClub);
		if (state.bJerkStarted) {
			createGoButton("Send to your Jerk Squad","jerkSquad",timeJerkToSquad,index);
		}		
	} else {
		changeScene(
			"There's nothing here",
			"timeClub",
			"goCheckClubSlot"
		);
		createGoButton("Back","timeClub",goTimeClub);
		createGoButton("Store Jerk","jerkSquad",goCheckStoreJerk);
	}
}

function timeJerkToSquad(index) {
	// var newJerkPile = state.jerkPile;
	// newJerkPile.push(state.tClubArray[index]);
	// updateState('jerkPile', newJerkPile);
	var navn = state.tClubArray[index];
	console.log(state.tClubArray[index].navn);

	newJerkToPile(state.tClubArray[index].navn);

	var newClub = state.tClubArray;
	newClub.splice(index,1);
	updateState('tClubArray', newClub);
	upgradeAnimation("Welcome to the squad jerk!","jerkSquadCelebrating",goTimeClub);
}

function goCheckStoreJerk() {
	if (state.jerkPile.length > 0 && countJerksInPile() != 10) {
		changeScene(
			"Which one of these jerks do you want to bring to your Time Club?",
			"jerkSquad",
			"goCheckStoreJerk"
		);
		if (completeGameTerrariumTime) {
			createGoButton("Back","appleWorm",goStartPlanetOverTT1);
		} else {
			createGoButton("Back","timeClub",goTimeClub);
		}
		var jp = state.jerkPile;
		for (var i = 0; i < allJerks.length; i++) {
			var x = 0;
			var ji = 0;
			for (var j = 0; j < jp.length; j++) {
				if (!jp[j].removed && allJerks[i].navn == jp[j].navn) {
					x++;
					ji = j;
				}
			}
			if (x > 0) {
				createGoButton(x + "x " + allJerks[i].navn, allJerks[i].image, goInspectStoreJerk, ji);
			}
		}
	} else if (countJerksInPile() == 10) {
		changeScene(
			"You only have 10 jerks in your jerk squad. <span style='color:#ff0000'>That's the bare minimum!</span></br>None of them are willing to go to your Time Club",
			"jerkSquad",
			"goCheckStoreJerk"
		);
		createGoButton("Back","timeClub",goTimeClub);
	} else {
		changeScene(
			"You don't have any jerks yet. Maybe that's for the best",
			"timeClub",
			"goCheckStoreJerk"
		);
		createGoButton("Back","timeClub",goTimeClub);		
	}
}

function goInspectStoreJerk(index) {
	var jerkPile = state.jerkPile;
	changeScene(
		"Look! It's " + jerkPile[index].navn + "</br>- " + jerkPile[index].description,
		jerkPile[index].image
	);
	createGoButton("Back","jerkSquad",goCheckStoreJerk);
	createGoButton("Store",jerkPile[index].image,goStoreJerk,index);
}

function goStoreJerk(index) {
	var newClub = state.tClubArray;
	var jerkPile = state.jerkPile;
	newClub.push(jerkPile[index]);
	updateState('tClubArray', newClub);	
	var image = jerkPile[index].image;
	jerkPile.splice(index,1);
	updateState('jerkPile', jerkPile);
	var exitPlace = goTimeClub;
	if (completeGameTerrariumTime) {
		updateState('chosenTTJerk', true);
		exitPlace = goStartPlanetOverTT1;
	}
	upgradeAnimation("Stored for eternity!",image,exitPlace);
}
