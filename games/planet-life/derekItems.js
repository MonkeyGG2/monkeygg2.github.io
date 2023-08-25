//TODO Skriv Derek total item stats på den her skærm

function writeAllDerekStats() {
	var h = "Derek is finally wearing something! He gets all these advantages:</br><span style='color:#0088ff'>";
	var noStats = true;
	for (var key in allDerekStats) {
		if (allDerekStats[key] != 0) {
			if (allItemStats[findItemStatIndexByName(key)].valueType == "%") {
				h += allDerekStats[key] + "% " + key + "</br>";
			} else {
				h += "+" + allDerekStats[key] + " " + key + "</br>";
			}
			noStats = false;
		}
	}
	if (noStats) {
		h = "Derek is not wearing anything. How embarrassing!";
	}
	return h;
}

function findItemStatIndexByName(navn) {
	for (var i = 0; i < allItemStats.length; i++) {
		if (navn == allItemStats[i].navn) {
			return i;
		}
	}
}

function goDerekEquipment() {

	changeScene(
		writeAllDerekStats() + "</span>",
		"derek",
		"goDerekEquipment"
	);
	createGoButton("Back","derek",goDerekHub);
	createGoButton(
		"Head (" + countEquipmentType("head") + ") " + writeEquippedItem("head","text"),
		writeEquippedItem("head","image"),
		goCheckEquipment,
		"head"
	);
	createGoButton(
		"Hand (" + countEquipmentType("fist") + ") " + writeEquippedItem("fist","text"),
		writeEquippedItem("fist","image"),
		goCheckEquipment,
		"fist"
	);
	createGoButton(
		"Legs (" + countEquipmentType("legs") + ") " + writeEquippedItem("legs","text"),
		writeEquippedItem("legs","image"),
		goCheckEquipment,
		"legs"
	);
}

function writeEquippedItem(type,output) {
	var anything = false;
	for (var i = 0; i < state.derekItems.length; i++) {
		if (state.derekItems[i].clothesType == type && state.derekItems[i].equipped) {
			anything = true;
			if (output == "image") {
				return state.derekItems[i].itemImage;
			}
			if (output == "text") {
				return " " + writeItemName(i,state.derekItems,true);
			}
		}
	}
	if (!anything && output == "image") {
		if (type == "head") {
			return "equipmentHead";
		}
		if (type == "fist") {
			return "equipmentFist";
		}
		if (type == "legs") {
			return "equipmentLegs";
		}
	}
	if (!anything && output == "text") {
		return "";
		// return " (" + countEquipmentType(type) + ")";
	}
}

function goCheckEquipment(type) {
	var h = "Derek has nothing equipped here";
	var img = "derek";
	var item = state.derekItems;
	for (var i = 0; i < item.length; i++) {
		if (item[i].clothesType == type && item[i].equipped) {
			h = "Derek is wearing " + writeItemName(i,state.derekItems,false) + "</br><span style='color:#a1a1a1'>'" + item[i].text + "'</span></br>" + writeItemStats(i,state.derekItems);
			img = item[i].itemImage;
		}
	}
	changeScene(
		h,
		img
	);
	createGoButton("Back","derek",goDerekEquipment);
	if (type == "head" && countEquipmentType("head") > 0) {
		createGoButton(
			"Browse headgear (" + countEquipmentType("head") + ")",
			"equipmentHead",
			goBrowseEquipment,
			"head"
		);
	}
	if (type == "fist" && countEquipmentType("fist") > 0) {
		createGoButton(
			"Browse handheld (" + countEquipmentType("fist") + ")",
			"equipmentFist",
			goBrowseEquipment,
			"fist"
		);
	}
	if (type == "legs" && countEquipmentType("legs") > 0) {
		createGoButton(
			"Browse pants (" + countEquipmentType("legs") + ")",
			"equipmentLegs",
			goBrowseEquipment,
			"legs"
		);
	}
	if (h != "Derek has nothing equipped here") {
		createGoButton("Unequip",writeEquippedItem(type,"image"),goUnequipItem,type);
	}
}

function countEquipmentType(type) {
	var count = 0;
	for (var i = 0; i < state.derekItems.length; i++) {
		if (state.derekItems[i].clothesType == type && !state.derekItems[i].equipped) {
			count++;
		}
	}
	return count;
}

function goBrowseEquipment(type) {
	changeScene(
		"Some of this equipment is smelling weird",
		"derek"
	);
	createGoButton("Back","derek"	,goCheckEquipment,type);
	if (getPriceOfAllUnequippedOfType(type) > 0) {
		createGoButton(
			"Sell all (" + getPriceOfAllUnequippedOfType(type) + " gold)",
			"gold",
			sellAllUnequippedOfType,
			type
		);
	}
	var items = state.derekItems
	for (var i = 0; i < items.length; i++) {
		if (items[i].clothesType == type && !items[i].equipped) {
			createGoButton(writeItemName(i,state.derekItems,false),items[i].itemImage,goInspectItem,type,i);
		}
	}
}

function getPriceOfAllUnequippedOfType(type) {
	var total = 0;
	for (var i = 0; i < state.derekItems.length; i++) {
		if (state.derekItems[i].clothesType == type && !state.derekItems[i].equipped) {
			total += calculateItemPrice(i);	
		}
	}
	return total;
}

function sellAllUnequippedOfType(type) {
	var price = getPriceOfAllUnequippedOfType(type);
	updateState('gold', state.gold + price);
	var newDerekItems = state.derekItems;
	remove = []; 
	for (var i = 0; i < state.derekItems.length; i++) {
		if (state.derekItems[i].clothesType == type && !state.derekItems[i].equipped) {
			console.log("Should be removing " + state.derekItems[i].navn);
			remove.push(i);
		}
	}
	for (var i = remove.length -1; i >= 0; i--) 
	    newDerekItems.splice(remove[i], 1); 

	updateState('derekItems', newDerekItems);
	upgradeAnimation("Space Ben bought all those stinky things for " + price + " gold</span>","space_ben",goBrowseEquipment,type);
}

function goInspectItem(type,index) {
	console.log("The type here is " + type);
	var items = state.derekItems;
	var currentlyEquipped = "";
	for (var i = 0; i < items.length; i++) {
		if (items[i].clothesType == type && items[i].equipped) {
			currentlyEquipped = "</br>Derek is wearing " + writeItemName(i,state.derekItems,false) + "</br>" + writeItemStats(i,state.derekItems);
		}
	}
	changeScene(
		"Look! It's " + writeItemName(index,state.derekItems,false) + "</br>" + writeItemStats(index,state.derekItems) + currentlyEquipped,
		items[index].itemImage
	);
	createGoButton("Back","derek",goBrowseEquipment,type);
	createGoButton("Equip",items[index].itemImage,goEquipItem,type,index);
	createGoButton("Sell (" + calculateItemPrice(index) + " gold)","gold",goSellItem,index,calculateItemPrice(index));
}

function calculateItemPrice(index) {
	var rarityTypes = ["Scruffy","Decent","Excellent","Crazy"];
	var goldRates = [30,100,800,2000];
	for (var i = 0; i < rarityTypes.length; i++) {
		if (state.derekItems[index].rarityType == rarityTypes[i]) {
			var price = Math.round(goldRates[i] * (state.derekItems[index].rarity / 4));
			return price;
		}
	}	
}

function goSellItem(index,price) {
	updateState('gold', state.gold + price);
	var type = state.derekItems[index].clothesType;
	var newDerekItems = state.derekItems;
	newDerekItems.splice(index,1);
	updateState('derekItems', newDerekItems);
	upgradeAnimation("Space Ben bought that stinky thing for " + price + " gold</span>","space_ben",goBrowseEquipment,type);
}

function goEquipItem(type,index) {
	var items = state.derekItems;
	for (var i = 0; i < items.length; i++) {
		if (items[i].clothesType == type && items[i].equipped) {
			items[i].equipped = false;
		}
	}	
	items[index].equipped = true;
	updateState('derekItems', items);
	calculateDerekStats();
	upgradeAnimation("Fits perfectly!","derek",goBrowseEquipment,type);
}

function goUnequipItem(type) {
	var items = state.derekItems;
	for (var i = 0; i < items.length; i++) {
		if (items[i].clothesType == type && items[i].equipped) {
			items[i].equipped = false;
		}
	}
	calculateDerekStats();
	updateState('derekItems', items);
	upgradeAnimation("Ah, what a relief","derek",goCheckEquipment,type);
}

function loadDerekEquipmentImages() {
	var items = state.derekItems;
	var headEquipped = false;
	var fistEquipped = false;
	var legsEquipped = false;
	for (var i = 0; i < items.length; i++) {
		if (items[i].clothesType == "head" && items[i].equipped) {
			document.getElementById('headImg').src = "images/handling/invisibleImg.gif";
			document.getElementById('headImg').src = "images/items/" + items[i].derekImage + ".gif";
			headEquipped = true;
		} 
		if (items[i].clothesType == "fist" && items[i].equipped) {
			document.getElementById('fistImg').src = "images/handling/invisibleImg.gif";
			document.getElementById('fistImg').src = "images/items/" + items[i].derekImage + ".gif";
			fistEquipped = true;
		}
		if (items[i].clothesType == "legs" && items[i].equipped) {
			document.getElementById('legsImg').src = "images/handling/invisibleImg.gif";
			document.getElementById('legsImg').src = "images/items/" + items[i].derekImage + ".gif";
			legsEquipped = true;
		}
	}
	if (!headEquipped) {
		document.getElementById('headImg').src = "images/handling/invisibleImg.gif";
	} 
	if (!fistEquipped) {
		document.getElementById('fistImg').src = "images/handling/invisibleImg.gif";
	}
	if (!legsEquipped) {
		document.getElementById('legsImg').src = "images/handling/invisibleImg.gif";
	}
	document.getElementById('derekBlackImg').src = "images/handling/invisibleImg.gif";
	document.getElementById('derekBlackImg').src = "images/handling/derekBlack.gif";
}

function calculateDerekStats() {

	for (var key in allDerekStats) {
		allDerekStats[key] = 0;
	} 
	var items = state.derekItems;
	for (var i = 0; i < items.length; i++) {
		if (items[i].equipped) {
			for (var j = 0; j < items[i].stats.length; j++) {
				allDerekStats[items[i].stats[j][0]] = allDerekStats[items[i].stats[j][0]] + items[i].stats[j][1];
			}
		}
	}

}

function writeItemName(index,array,capsuled) {
	var h;
	var item = array;
	if (item[index].rarityType == "Scruffy") {
		h = "<span style='color:#8a8a8a'>Scruffy " + item[index].navn + "</span>";
		if (capsuled) {
			h = "<span style='color:#8a8a8a'>(Scruffy " + item[index].navn + ")</span>";
		}
	}
	if (item[index].rarityType == "Decent") {
		h = "<span style='color:#0066ff'>Decent " + item[index].navn + "</span>";
		if (capsuled) {
			h = "<span style='color:#0066ff'>(Decent " + item[index].navn + ")</span>";
		}
	}
	if (item[index].rarityType == "Excellent") {
		h = "<span style='color:#ffa200'>Excellent " + item[index].navn + "</span>";
		if (capsuled) {
			h = "<span style='color:#ffa200'>(Excellent " + item[index].navn + ")</span>";
		}
	}
	if (item[index].rarityType == "Crazy") {
		h = "<span style='color:#ff29ff'>Crazy " + item[index].navn + "</span>";
		if (capsuled) {
			h = "<span style='color:#ff29ff'>(Crazy " + item[index].navn + ")</span>";
		}
	}
	return h;
}

function writeItemStats(index,array) {
	var h;
	var stat1 = "", stat2 = "", stat3 = "", stat4 = "";
	var item = array;
	stat1 = writeSingleStat(index,0,array);
	if (item[index].stats[1]) {
		stat2 = writeSingleStat(index,1,array);
	}
	if (item[index].stats[2]) {
		stat3 = writeSingleStat(index,2,array);
	}
	if (item[index].stats[3]) {
		stat4 = writeSingleStat(index,3,array);
	}
	return "<span style='color:#0088ff'>" + stat1 + stat2 + stat3 + stat4 + "</span>";
}

function writeSingleStat(index,statNr,array) {
	var item = array;
	if (item[index].stats[statNr][2] == "%") {

		return "+" + item[index].stats[statNr][1] + "% " + item[index].stats[statNr][0] + "</br>";
	} else {
		return "+" + item[index].stats[statNr][1] + " " + item[index].stats[statNr][0] + "</br>";
	}
}


//STATS

var allItemStats = [];
var allDerekStats = [];

function itemStat(navn,valueType,rarity,scruffyValues,decentValues,excellentValues,crazyValues) {
	this.navn = navn;
	this.scruffyValues = scruffyValues;
	this.decentValues = decentValues;
	this.excellentValues = excellentValues;
	this.crazyValues = crazyValues;
	this.valueType = valueType;
	this.rarity = rarity;
}

function derekStat(navn) {
	this.navn = navn;
	this.value;
}

function newItemStat(navn,valueType,rarity,scruffyValues,decentValues,excellentValues,crazyValues) {
	var newItemStat = new itemStat(navn,valueType,rarity,scruffyValues,decentValues,excellentValues,crazyValues);
	// var newDerekStat = new derekStat(navn);
	allItemStats.push(newItemStat);	
	allDerekStats[navn] = 0;
	// allDerekStats.push(newDerekStat);
}

function rollStat(rarityType,navn) {
	if (navn) {
		console.log("It has a name");
		for (var i = 0; i < allItemStats.length; i++) {
			if (allItemStats[i].navn == navn) {
				console.log("And it did return " + allItemStats.navn);
				return [
					allItemStats[i].navn,
					rollStatValue(rarityType,i),
					allItemStats[i].valueType,
				];
			}
		}
	} else {

		var rollModifier = 0;
		if (rarityType == "Scruffy") {
			rollModifier = 2.5;
		}
		if (rarityType == "Decent") {
			rollModifier = 5;
		}
		if (rarityType == "Excellent") {
			rollModifier = 7.5;
		}
		if (rarityType == "Crazy") {
			rollModifier = 10;
		}

		var roll = (Math.random() * (rollModifier));
		console.log("Stat roll: " + roll); 
		if (Math.random() < 0.1) {
			roll += (8 + (Math.random() * 4)) - rollModifier / 2;
			console.log("Lucky roll!!!: " + roll);
		}


		var statPointDifference = [];
		for (var i = 0; i < allItemStats.length; i++) {
			var stat = allItemStats[i];
			var statScore = allItemStats[i].rarity - Math.random();
			var difference = Math.abs(statScore - roll);
			statPointDifference.push(difference);
		}
		var magicNumber = 0;
		var lowestDifference = 99;
		for (var i = 0; i < statPointDifference.length; i++) {
			if (statPointDifference[i] < lowestDifference) {
				magicNumber = i;
				lowestDifference = statPointDifference[i];
			}
		}
		console.log("You rolled stat: " + allItemStats[magicNumber].navn);

		return [
			allItemStats[magicNumber].navn,
			rollStatValue(rarityType,magicNumber),
			allItemStats[magicNumber].valueType,
		];

	}
}

function rollStatValue(rarityType,index) {
	var min;
	var max;
	if (rarityType == "Scruffy") {
		min = allItemStats[index].scruffyValues[0];
		max = allItemStats[index].scruffyValues[1];
	}
	if (rarityType == "Decent") {
		min = allItemStats[index].decentValues[0];
		max = allItemStats[index].decentValues[1];
	} 
	if (rarityType == "Excellent") {
		min = allItemStats[index].excellentValues[0];
		max = allItemStats[index].excellentValues[1];
	}
	if (rarityType == "Crazy") {
		min = allItemStats[index].crazyValues[0];
		max = allItemStats[index].crazyValues[1];	
	}
	var statValue = Math.round(Math.random() * (max - min) + min);
	console.log("statValue is " + statValue);
	return statValue;
}

newItemStat(
	"chance of Bull Fart",
	"%",
	6,
	[1,2],
	[3,5],
	[6,10],
	[11,20]
);

newItemStat(
	"chance of Thirsty",
	"%",
	4,
	[1,3],
	[3,6],
	[7,12],
	[15,25]
);

newItemStat(
	"strength",
	"+",
	2,
	[5,50],
	[20,150],
	[70,300],
	[110,600]
);

newItemStat(
	"health",
	"+",
	2,
	[5,50],
	[20,150],
	[70,300],
	[110,600]
);

newItemStat(
	"potion healing",
	"+",
	2,
	[5,30],
	[10,50],
	[30,150],
	[100,300]
);

newItemStat(
	"chance of stardust door",
	"%",
	6,
	[1,2],
	[2,4],
	[4,8],
	[8,15]
);

newItemStat(
	"chance of shortcut door",
	"%",
	9,
	[1,2],
	[2,3],
	[4,5],
	[5,10]
);

newItemStat(
	"chance of chest door",
	"%",
	7,
	[1,2],
	[2,3],
	[4,5],
	[5,10]
);

newItemStat(
	"extra gold from gold doors",
	"%",
	4,
	[5,30],
	[10,50],
	[30,100],
	[70,300]
);

newItemStat(
	"extra wood from wood doors",
	"%",
	1,
	[5,30],
	[10,50],
	[30,100],
	[70,300]
);

newItemStat(
	"extra coco from coco doors",
	"%",
	1,
	[5,30],
	[10,50],
	[30,100],
	[70,300]
);

newItemStat(
	"extra stardust from stardust doors",
	"%",
	4,
	[5,30],
	[10,50],
	[30,100],
	[70,300]
);

newItemStat(
	"extra Thirsty uses",
	"+",
	6,
	[1,1],
	[2,3],
	[3,5],
	[5,10]
);

newItemStat(
	"extra Bull Fart uses",
	"+",
	8,
	[1,1],
	[2,3],
	[3,5],
	[5,10]
);

newItemStat(
	"extra Door of Regret uses",
	"+",
	4,
	[1,1],
	[2,4],
	[4,7],
	[8,15]
);

newItemStat(
	"extra Full Heal uses",
	"+",
	10,
	[1,1],
	[2,2],
	[3,3],
	[4,4]
);

newItemStat(
	"health regeneration per dungeon level",
	"+",
	6,
	[1,15],
	[5,40],
	[30,120],
	[100,300]
);

newItemStat(
	"armor",
	"+",
	5,
	[5,15],
	[10,50],
	[40,200],
	[100,600]
);

//ITEMS

var allItems = [];

function derekItem(navn,text,ID,clothesType,itemImage,derekImage,starterStat,rarity) {
	this.ID = ID;
	this.navn = navn;
	this.clothesType = clothesType;
	this.text = text;
	this.rarityType = "";
	this.itemImage = itemImage;
	this.derekImage = derekImage;
	this.rarity = rarity;
	this.stats = [];
	this.equipped = false;
	this.starterStat = starterStat;
}

function newItem(navn,text,clothesType,itemImage,derekImage,starterStat,rarity) {
	var newItem = new derekItem(navn,text,0,clothesType,itemImage,derekImage,starterStat,rarity);
	allItems.push(newItem);
}

function rollNewItem(difficulty,level) {

	// PICK RANDOM ITEM

	// var roll = (Math.random() * (difficulty/2)) + (Math.random() * (difficulty/2));
	var roll = (difficulty / 4) + ((Math.random() * (difficulty + 3))) + (Math.random() * (level / 10));
	console.log("Roll is: " + roll); 
	if (Math.random() < 0.1) {
		roll += Math.random() * 8;
		// roll += (8 + (Math.random() * 4)) - difficulty / 2;
		console.log("Lucky roll!!!: " + roll);
	}

	var itemPointDifference = [];

	for (var i = 0; i < allItems.length; i++) {
		var item = allItems[i];
		var itemScore = item.rarity - Math.random();
		var difference = Math.abs(itemScore - roll);
		itemPointDifference.push(difference);
	}

	var magicNumber = 0;
	var lowestDifference = 99;

	for (var i = 0; i < allItems.length; i++) {
		if (itemPointDifference[i] < lowestDifference) {
			console.log(allItems[i].navn + " has lower difference of " + itemPointDifference[i]);
			magicNumber = i;
			lowestDifference = itemPointDifference[i];
		}
	}

	console.log("You got a: " + allItems[magicNumber].navn);
	console.log("Lowest difference: " + lowestDifference);
	// return magicNumber;

	var mag = allItems[magicNumber];
	var ID = state.derekItems.length;
	var chosenItem = new derekItem(
		mag.navn,
		mag.text,
		ID,
		mag.clothesType,
		mag.itemImage,
		mag.derekImage,
		mag.starterStat,
		mag.rarity
	);

	// var chosenItem = allItems[magicNumber];



	// CREATE STATS

	var rarityTypeRoll = difficulty + (Math.random() * 6) + (level / 10);
	console.log("Rarity type roll is " + rarityTypeRoll);
	if (Math.random() < 0.1) {
		var extraBonusTimez = Math.random() * 5;
		rarityTypeRoll += extraBonusTimez;
		console.log("Lucky roll for rarity type! + " + extraBonusTimez);
	}

	if (rarityTypeRoll < 7) {
		chosenItem.rarityType = "Scruffy";
		chosenItem.stats[0] = rollStat(chosenItem.rarityType,chosenItem.starterStat);
	} else if (rarityTypeRoll < 12) {
		chosenItem.rarityType = "Decent";
		chosenItem.stats[0] = rollStat(chosenItem.rarityType,chosenItem.starterStat);
		chosenItem.stats[1] = rollStat(chosenItem.rarityType);
		while (!checkIfStatIsUnique(chosenItem.stats,1)) {
			chosenItem.stats[1] = rollStat(chosenItem.rarityType);				
		}
		// while (chosenItem.stats[1][0] == chosenItem.stats[0][0]) {
		// 	chosenItem.stats[1] = rollStat(chosenItem.rarityType);	
		// }
		
	} else if (rarityTypeRoll < 20) {
		chosenItem.rarityType = "Excellent";
		chosenItem.stats[0] = rollStat(chosenItem.rarityType,chosenItem.starterStat);
		chosenItem.stats[1] = rollStat(chosenItem.rarityType);
		while (!checkIfStatIsUnique(chosenItem.stats,1)) {
			chosenItem.stats[1] = rollStat(chosenItem.rarityType);				
		}
		// chosenItem.stats[2] = rollStat(chosenItem.rarityType);
	} else {
		chosenItem.rarityType = "Crazy";
		chosenItem.stats[0] = rollStat(chosenItem.rarityType,chosenItem.starterStat);
		chosenItem.stats[1] = rollStat(chosenItem.rarityType);
		chosenItem.stats[2] = rollStat(chosenItem.rarityType);
		while (!checkIfStatIsUnique(chosenItem.stats,1)) {
			chosenItem.stats[1] = rollStat(chosenItem.rarityType);				
		}
		while (!checkIfStatIsUnique(chosenItem.stats,2)) {
			chosenItem.stats[2] = rollStat(chosenItem.rarityType);				
		}
		// chosenItem.stats[3] = rollStat(chosenItem.rarityType);
	}

	console.log("This is the item " + chosenItem.navn + " -- " + chosenItem.rarityType);

	// chosenItem.ID = state.derekItems.length + 1;
	var newDerekItems = state.derekItems;
	newDerekItems.push(chosenItem);
	updateState('derekItems', newDerekItems);

	// var newID = state.derekItems.length;
	// chosenItem.ID = newID;
	// updateArrayState('derekItems', state.derekItems.length, chosenItem);

}

function checkIfStatIsUnique(chosenItemStats,statNr) {
	for (var i = 0; i < chosenItemStats.length; i++) {
		if (chosenItemStats[i][0] == chosenItemStats[statNr][0] && i != statNr) {
			console.log("This is NOT UNIQUE in any way!");
			return false;
		}
	}
	return true;
}


////////-----
// HEADGEAR
////////-----

newItem(
	"Melon Glasses",
	"These were very cheap",
	"head",
	"item_MelonGlasses",
	"melonGlasses",
	"chance of Thirsty",
	3
);

newItem(
	"Third Horn",
	"Is it the devil? No, it's just Derek",
	"head",
	"item_ThirdHorn",
	"thirdHorn",
	"strength",
	6
);

newItem(
	"Level 3 Helmet",
	"Nobody can headshot Derek now",
	"head",
	"item_Level3Helmet",
	"level3Helmet",
	"armor",
	7
);

newItem(
	"Sørens Man Bun",
	"Makes Derek look like a hipster",
	"head",
	"item_SorensManBun",
	"sorensManBun",
	"extra Bull Fart uses",
	16
);

newItem(
	"Glasses of Chrysitis",
	"Can Derek see through pure gold?",
	"head",
	"item_GlassesOfChrysitis",
	"glassesOfChrysitis",
	"extra gold from gold doors",
	10
);

newItem(
	"Green Jerk Hair",
	"It's surprisingly solid",
	"head",
	"item_GreenJerkHair",
	"greenJerkHair",
	"armor",
	2
);

newItem(
	"Daves Pot",
	"Only a crazy person would use this as a hat",
	"head",
	"item_DavesPot",
	"davesPot",
	"potion healing",
	4
);

newItem(
	"Leather Cap",
	"Smelly and out of style",
	"head",
	"item_LeatherCap",
	"leatherCap",
	"extra wood from wood doors",
	1
);

newItem(
	"Thirsty Glasses",
	"These glasses are desperately looking for something to drink",
	"head",
	"item_GlassesOfThirsty",
	"glassesOfThirsty",
	"extra Thirsty uses",
	5
);

newItem(
	"Ancient Jerk Hat",
	"Worn by the primitive jerks of the past",
	"head",
	"item_AncientJerkHat",
	"ancientJerkHat",
	"armor",
	8
);

newItem(
	"Eyes Of Burger",
	"The eyes are chirping happily as they softly land on Dereks head",
	"head",
	"item_EyesOfBurger",
	"eyesOfBurger",
	"extra Full Heal uses",
	18
);

newItem(
	"Sunglasses",
	"Cool!",
	"head",
	"item_sunglasses",
	"sunglasses",
	"extra stardust from stardust doors",
	14
);

newItem(
	"Eyes Of The Worm God",
	"Whooooah!",
	"head",
	"item_EyesOfRemouladin",
	"eyesOfRemouladin",
	"chance of shortcut door",
	22
);

newItem(
	"Purple Jerk Hair",
	"It's surprisingly solid",
	"head",
	"item_PurpleJerkHair",
	"purpleJerkHair",
	"armor",
	4
);

newItem(
	"Blue Jerk Hair",
	"It's surprisingly solid",
	"head",
	"item_BlueJerkHair",
	"blueJerkHair",
	"armor",
	8
);

newItem(
	"Yellow Jerk Hair",
	"It's surprisingly solid",
	"head",
	"item_YellowJerkHair",
	"yellowJerkHair",
	"armor",
	16
);

newItem(
	"Hat of Stardust",
	"Derek, you're a star!",
	"head",
	"item_HatOfStardust",
	"hatOfStardust",
	"chance of stardust door",
	10
);

newItem(
	"Eyes of Regret",
	"The eyes you wear when you enter the wrong room",
	"head",
	"item_EyesOfRegret",
	"eyesOfRegret",
	1
);

////////-----
// GLOVES
////////-----

newItem(
	"Soft Pillow",
	"Spares Derek's knuckles from much pain",
	"fist",
	"item_SoftPillow",
	"softPillow",
	"armor",
	4
);

newItem(
	"Green Glove",
	"Just a single green glove",
	"fist",
	"item_GreenGlove",
	"greenGlove",
	"health",
	2
);

newItem(
	"Broccoli Hands",
	"Fart infused fists",
	"fist",
	"item_BroccoliHands",
	"broccoliHands",
	"chance of Bull Fart",
	5
);

newItem(
	"Confusing Map",
	"Derek can't read maps! They are very confusing",
	"fist",
	"item_ConfusingMap",
	"confusingMap",
	"chance of chest door",
	12
);

newItem(
	"Golden Glove",
	"This golden fist looks like it was worn by an ancient hero without arms and legs",
	"fist",
	"item_GoldenGlove",
	"goldenGlove",
	"extra gold from gold doors",
	5
);

newItem(
	"Axe",
	"This guy is eager to chop some wood",
	"fist",
	"item_Axe",
	"axe",
	"extra wood from wood doors",
	3
);

newItem(
	"Light Weight",
	"Might as well do some light exercise while punching jerks",
	"fist",
	"item_LightWeight",
	"lightWeight",
	"strength",
	4
);

newItem(
	"Dry Biscuit Glove",
	"Just looking at it makes Dereks mouth really dry",
	"fist",
	"item_DryBiscuitGlove",
	"dryBiscuitGlove",
	"chance of Thirsty",
	10
);

newItem(
	"Ancient Jerk Glove",
	"Worn by the primitive jerks of the past",
	"fist",
	"item_AncientJerkGlove",
	"ancientJerkGlove",
	"armor",
	8
);

newItem(
	"Claw Of Burger",
	"It gives a friendly handshake",
	"fist",
	"item_ClawOfBurger",
	"clawOfBurger",
	"extra Full Heal uses",
	18
);

newItem(
	"Cowbar",
	"Somebody etched the name Bret into the side of it",
	"fist",
	"item_Cowbar",
	"cowbar",
	"extra coco from coco doors",
	6
);

newItem(
	"Worn Glove",
	"What uncomfortable hand could have worn this glove out",
	"fist",
	"item_WornGlove",
	"wornGlove",
	"strength",
	1
);

newItem(
	"Fist Of The Worm God",
	"Whooooah!",
	"fist",
	"item_FistOfRemouladin",
	"fistOfRemouladin",
	"chance of shortcut door",
	22
);

newItem(
	"Muffin",
	"It's surprisingly healthy",
	"fist",
	"item_Muffin",
	"muffin",
	"health regeneration per dungeon level",
	13
);

newItem(
	"Lollipop Wand",
	"It's divine",
	"fist",
	"Item_LollipopWand",
	"lollipopWand",
	"extra stardust from stardust doors",
	14
);

newItem(
	"Mega Hand",
	"What giant did this hand belong to?",
	"fist",
	"item_MegaHand",
	"megaHand",
	"health",
	10
);

////////-----
// PANTS
////////-----

newItem(
	"Leather Pants",
	"These were originally worn by SNP the cat",
	"legs",
	"item_LeatherPants",
	"leatherPants",
	"strength",
	2
);

newItem(
	"Itchy Pants",
	"These pants are number 1!",
	"legs",
	"item_ItchyPants",
	"itchyPants",
	"chance of Bull Fart",
	6
);

newItem(
	"Blue Jeans of Karen",
	"They fit perfectly",
	"legs",
	"item_BlueJeansOfKaren",
	"blueJeansOfKaren",
	"health",
	15
);

newItem(
	"Cat Pants of Ulababula",
	"They have nice cats on them",
	"legs",
	"item_CatPantsOfUlababula",
	"catPantsOfUlababula",
	"health regeneration per dungeon level",
	15
);

newItem(
	"Golden Pants",
	"Derek can barely walk in these stiff gold pants",
	"legs",
	"item_GoldenPants",
	"goldenPants",
	"extra gold from gold doors",
	7
);

newItem(
	"Jerk Pants",
	"Derek hates them with a fury. But they have a camouflage pattern",
	"legs",
	"item_JerkPants",
	"jerkPants",
	"extra Door of Regret uses",
	3
);

newItem(
	"Coco Stained Pants",
	"Mmmh.. Coco!",
	"legs",
	"item_CocoStainedPants",
	"cocoStainedPants",
	"extra coco from coco doors",
	1
);

newItem(
	"Svens Lost Pants",
	"They have pockets full of sawdust",
	"legs",
	"item_SvensLostPants",
	"svensLostPants",
	"extra wood from wood doors",
	4
);

newItem(
	"Ancient Jerk Pants",
	"Worn by the primitive jerks of the past",
	"legs",
	"item_AncientJerkPants",
	"ancientJerkPants",
	"armor",
	8
);

newItem(
	"Pants Of Burger",
	"Burger has a peculiar taste in pants",
	"legs",
	"item_PantsOfBurger",
	"pantsOfBurger",
	"extra Full Heal uses",
	18
);

newItem(
	"Pants Of The Worm God",
	"Whooooah!",
	"legs",
	"item_PantsOfRemouladin",
	"pantsOfRemouladin",
	"chance of shortcut door",
	22
);

newItem(
	"Green Pants",
	"Just some green pants",
	"legs",
	"item_GreenPants",
	"greenPants",
	"health",
	4
);

newItem(
	"Bull Diaper",
	"Let's not talk about this",
	"legs",
	"item_BullDiaper",
	"bullDiaper",
	"extra Thirsty uses",
	7
);

newItem(
	"Wet Pants",
	"These pants are dripping",
	"legs",
	"item_WetPants",
	"wetPants",
	"chance of Thirsty",
	12
);

newItem(
	"Worn Pants",
	"Somebody wore these pants the wrong way",
	"legs",
	"item_WornPants",
	"wornPants",
	"strength",
	1
);

newItem(
	"Glittering Skirt",
	"This skirt is mega shiny",
	"legs",
	"item_GlitteringSkirt",
	"glitteringSkirt",
	"extra stardust from stardust doors",
	14
);