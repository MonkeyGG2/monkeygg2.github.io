function productElement(ID,place) {
	this.ID = ID;
	this.tiers = [];
	this.place = place;
	this.curTier = 0;
	this.upgradable = false;
}

function productTier(ID,tierNr,navn,image,description,price,fnct) {
	this.ID = ID;
	this.navn = navn;
	this.image = image;
	this.description = description;
	this.price = price;
	this.tierNr = tierNr;
	this.fnct = fnct;
}

var allProducts = [];
var allProductStates = [];

function createProduct(productID) {
	var headline, image, text, price;
	var numberOfTiers;
	var tierHit = false;
	var buttonText;
	for (var i = 0; i < allProducts.length; i++) {
		if (allProducts[i].ID == productID) {
			if (numberOfTiers > 2) {
				buttonText = "upgrade";
				allProducts[i].upgradable = true;
			} else {
				buttonText = "buy";
			}
			numberOfTiers = allProducts[i].tiers.length;
			for (var j = 0; j < allProducts[i].tiers.length; j++) {
				if (allProducts[i].tiers[j].tierNr == state.productStates[i] + 1) {
					console.log("tierHit");
					headline = allProducts[i].tiers[j].navn;
					image = allProducts[i].tiers[j].image;
					text = allProducts[i].tiers[j].description;
					price = allProducts[i].tiers[j].price;
					tierHit = true;
				}
			}
		}
	}
	if (tierHit) {
		createBuildButton(headline,image,text,useProduct,productID,buttonText,price,productID);
	}
}

function useProduct(productID) {
	for (var i = 0; i < allProducts.length; i++) {
		if (allProducts[i].ID == productID) {
			buy(allProducts[i].tiers[state.productStates[i] + 1].price);
			if (!allProducts[i].upgradable) {
				// console.log("CPÆA");
				// var newPrice = allProducts[i].tiers[state.productStates[i] + 1].price;
				// updateState(toString(allProducts[i].tiers[state.productStates[i] + 1].price),newPrice);
			}
			allProducts[i].tiers[state.productStates[i] + 1].fnct();
			allProducts[i].curTier++;
			var newProductStates = state.productStates;
			newProductStates[i] = newProductStates[i] + 1;
			updateState('productStates',state.productStates = newProductStates);
		}
	}
}

function newProduct(ID,place) {
	var product = new productElement(ID,place);
	var tierZero = new productTier(ID,0,ID,"hammer","",[0,0,0,0],fakeFunction);
	allProducts.push(product);
	for (var i = 0; i < allProducts.length; i++) {
		if (allProducts[i].ID == ID) {
			allProducts[i].tiers.push(tierZero);
		}
	}
	allProductStates.push(product.curTier);
}

function newProductTier(productID,tierNr,navn,image,description,price,fnct) {
	var tier = new productTier(productID,tierNr,navn,image,description,price,fnct);
	for (var i = 0; i < allProducts.length; i++) {
		if (allProducts[i].ID == productID) {
			allProducts[i].tiers.push(tier);
		}
	}
}

newProduct("MonkeyBeater","monkeyPlace");
newProductTier("MonkeyBeater",0,"Small Monkey Beater","hammer","Beat those disobedient little lice eaters",[10,0,0,0],monkeyBeaters1);
newProductTier("MonkeyBeater",1,"Evil Monkey Beater","hammer","This time they will suffer. MONKEYS!",[100,0,0,0],monkeyBeaters2);

function monkeyBeaters1() {
	updateState('woodPS', state.woodPS + 1);
	upgradeAnimation("Eat that MONKEYS!","hatchingHammer",talkBurger);
}

function monkeyBeaters2() {
	updateState('woodPS', state.woodPS + 2);
	upgradeAnimation("M M M M MONKEYS!","hatchingHammer",talkBurger);
}


//Dereks skills get created down here. They are just pulled from the newSkills and newSkillTiers created in derekSkills.js

for (var i = 0; i < allSkills.length; i++) {
	newProduct(allSkills[i].navn,"showSkill" + allSkills[i].navn);
	for (var j = 0; j < allSkills[i].tiers.length; j++) {
		newProductTier(allSkills[i].navn,allSkills[i].tiers[j].tierNr,allSkills[i].tiers[j].navn,allSkills[i].image,allSkills[i].tiers[j].descr,allSkills[i].tiers[j].price,allSkills[i].tiers[j].fnct);
	}
}

newProduct("Derek's Dungeon School","surface");
newProductTier("Derek's Dungeon School",1,"Derek's Dungeon School","hammer","Want your Derek to get any better. Education is the only way to go!",state.ddsPrice,goDDS);

function fakeFunction() {
	console.log("You shouldn't be here");
}