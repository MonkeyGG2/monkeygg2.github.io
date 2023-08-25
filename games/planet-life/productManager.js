function productElement(ID,place,butText,statePrice) {
	this.ID = ID;
	this.place = place;
	this.statePrice = statePrice;
	this.butText = butText
}

function productTier(ID,tierNr,navn,image,description,price,fnct,burgulon) {
	this.ID = ID;
	this.navn = navn;
	this.image = image;
	this.description = description;
	this.price = price;
	this.tierNr = tierNr;
	this.fnct = fnct;
	this.burgulon = burgulon;
}

var allProducts = [];
var allProductTiers = [];
var allProductStates = [];

function newProduct(ID,place,butText,statePrice) {
	var product = new productElement(ID,place,butText,statePrice);
	allProducts.push(product);
	//Pushing the initial tier to the state
	allProductStates.push(0);
}

function newProductTier(ID,tierNr,navn,image,description,price,fnct,burgulon) {
	var tier = new productTier(ID,tierNr,navn,image,description,price,fnct,burgulon);
	allProductTiers.push(tier);
}

//Use this for creating a button for the product
function createProduct(ID) {
	var buttonText;
	if (checkUpgradability(ID)) {
		if (allProducts[findProductIndex(ID)].butText == null) {
			buttonText = "upgrade";
		} else {
			buttonText = allProducts[findProductIndex(ID)].butText;
		}
	} else {
		buttonText = allProducts[findProductIndex(ID)].butText;
	}
	for (var i = 0; i < allProductTiers.length; i++) {
		if (ID == allProductTiers[i].ID && allProductTiers[i].tierNr == state.productStates[findProductIndex(ID)] + 1) {
			createBuildButton(
				allProductTiers[i].navn,
				allProductTiers[i].image,
				allProductTiers[i].description,
				useProduct,
				ID,
				buttonText,
				allProductTiers[i].price,
				ID
			);
		}
	}
}

function useProduct(ID) {
	for (var i = 0; i < allProductTiers.length; i++) {
		//Finding the next tier for that product
		if (ID == allProductTiers[i].ID && allProductTiers[i].tierNr == state.productStates[findProductIndex(ID)] + 1) {
			if (allProductTiers[i].burgulon) {
				buy(allProductTiers[i].price,true);
			} else {
				buy(allProductTiers[i].price);
			}
			for (var j = 0; j < allProducts.length; j++) {
				if (allProducts[j].ID == ID) {
					if (allProducts[j].statePrice != undefined) {
						var boughtProduct = allProductTiers[i].price;
						boughtProduct[4] = true;
						updateState(allProducts[j].statePrice,boughtProduct);
					}
				}				
			}
			updateArrayState('productStates',findProductIndex(ID),state.productStates[findProductIndex(ID)] + 1);
			allProductTiers[i].fnct();
			return;
		}
	}
}

function findProductIndex(ID) {
	var productIndex;
	//Important that the index of the product is always the same in allProducts and state.productStates
	for (var i = 0; i < allProducts.length; i++) {
		if (ID == allProducts[i].ID) {
			productIndex = i;
		}
	}
	return productIndex;
}

function checkUpgradability(ID) {
	var hits = 0;
	for (var i = 0; i < allProductTiers.length; i++) {
		if (ID == allProductTiers[i].ID) {
			hits++;
		}
	}
	if (hits > 1) {
		return true;
	} else {
		return false;
	}
}

function findCurProductTierIndexById(ID) {
	var productTierIndex;
	for (var i = 0; i < allProductTiers.length; i++) {
		if (allProductTiers[i].ID == ID) {
			if (allProductTiers[i].tierNr == state.productStates[findProductIndex(ID)]) {
				productTierIndex = i; 
			}
		}
	}
	return productTierIndex;
}

// CREATE NEW PRODUCTS AND TIERS DOWN HERE OK FINE //

//DEREK'S SKILLS//
for (var i = 0; i < allSkills.length; i++) {
	//Dereks skills gets created down here. They are just pulled from the newSkills and newSkillTiers created in derekSkills.js
	newProduct(allSkills[i].navn,"showSkill" + allSkills[i].navn);
}
for (var i = 0; i < allSkillTiers.length; i++) {
	newProductTier(
		allSkillTiers[i].owner,
		allSkillTiers[i].tierNr,
		allSkillTiers[i].navn,
		allSkills[findSkillIndexById(allSkillTiers[i].owner)].image,
		allSkillTiers[i].descr,
		allSkillTiers[i].price,
		allSkillTiers[i].fnct
	);
}

//DEREK'S DUNGEON SCHOOL//
newProduct("Derek's Dungeon School","workshop","build","ddsPrice");

newProductTier(
	"Derek's Dungeon School",
	1,
	"Derek's Dungeon School",
	"dungeonSchool",
	"Want your Derek to get any better. Education is the only way to go!",
	state.ddsPrice,
	goDDS
);

//DEREK STRENGTH//
newProduct("Upgrade strength","checkDerek");

for (var i = 1; i < 399; i++) {
	var newStrength = ((i + 1) * 40);
	newProductTier(
		"Upgrade strength",
		i,
		"Make Derek STRONGER!",
		"derekStrength",
		"Upgrade Derek's strength to <span style='color:#ff0000'>" + newStrength + "</span>. He can throttle more jerks to their doom without getting hurt",
		[(i * 200),0,(i * 200),0,newStrength],
		upgradeStrength
	);
}

//DEREK BELT//
newProduct("Upgrade potion belt","checkDerek");

for (var i = 1; i < 399; i++) {
	newProductTier(
		"Upgrade potion belt",
		i,
		"More spacious potion belt",
		"derekBelt",
		"Upgrade Derek's potion belt capacity, so he can carry <span style='color:#ff0000'>" + (i + 1) + "</span> potions. He is gonna need all that juice",
		[(i * 200),(i * 30),0,0,(i + 1)],
		upgradeBelt
	);
}

//DEREK HEALTH//
newProduct("Upgrade health","checkDerek");

for (var i = 1; i < 399; i++) {
	var newHealth = ((i + 1) * 50);
	newProductTier(
		"Upgrade health",
		i,
		"Pump Derek's health",
		"derekHealth",
		"Upgrade Derek's health to <span style='color:#ff0000'>" + newHealth + "</span>. A healthy Derek is a Derek that's still alive. You should know this by now",
		[0,0,(i * 500),0,newHealth],
		upgradeHealth
	);
}

//COCO PENGUIN//
newProduct("Automatic Swirly Straw","goCocoPenguin");

for (var i = 1; i < 99; i++) {
	var purchaseTitle;
	if (i < 1) {
		purchaseTitle = "Upgrade";
	} else {
		purchaseTitle = "Build";
	}
	newProductTier(
		"Automatic Swirly Straw",
		i,
		purchaseTitle + " Automatic Swirly Straw",
		"swirlyStraw",
		"The Automatic Swirly Straw will suck <span style='color:#ff0000'>" + i + "</span> coco/sec out of that penguin",
		[(i * 200),(i * 30),0,0,i],
		upgradePenguin
	);
}

//SVEN UPGRADES//
newProduct("Sven Upgrade","goSven");

newProductTier(
	"Sven Upgrade",
	1,
	"Performance Enhancing Oil",
	"sven",
	"Sven will cut <span style='color:#ff0000'>1</span> wood/sec",
	[0,200,0,0,1],
	upgradeSven
);
newProductTier(
	"Sven Upgrade",
	2,
	"Perfectly Greased Chain",
	"sven",
	"Sven will cut <span style='color:#ff0000'>2</span> wood/sec",
	[0,400,0,0,2],
	upgradeSven
);
newProductTier(
	"Sven Upgrade",
	3,
	"Agressive Saw Teeth",
	"sven",
	"Sven will cut <span style='color:#ff0000'>3</span> wood/sec",
	[0,800,0,0,3],
	upgradeSven
);
newProductTier(
	"Sven Upgrade",
	4,
	"Super Chop Setting",
	"sven",
	"Sven will cut <span style='color:#ff0000'>4</span> wood/sec",
	[0,1000,0,0,4],
	upgradeSven
);
newProductTier(
	"Sven Upgrade",
	5,
	"Decreased Feeling of Mercy",
	"sven",
	"Sven will cut <span style='color:#ff0000'>5</span> wood/sec",
	[0,1200,0,0,5],
	upgradeSven
);

for (var i = 6; i < 99; i++) {
	newProductTier(
		"Sven Upgrade",
		i,
		"Ultimate Chainsaw Spirit Mk " + (i - 5),
		"sven",
		"Sven will cut <span style='color:#ff0000'>" + i + "</span> wood/sec",
		[0,(i * 200),0,0,i],
		upgradeSven
	);
}


//GOLD FISH UPGRADES//
newProduct("Fish Upgrade","goCreatureTalk");

for (var i = 1; i < 99; i++) {
	var newFishPurity = (i * 5) + 10; 
	newProductTier(
		"Fish Upgrade",
		i,
		"Increase Gold Fish Purity",
		"goldFish",
		"<span style='color:#ff0000'>" + newFishPurity + "</span> gold per click",
		[0,0,((i * 5) * 100),0,newFishPurity],
		upgradeFish
	);
}

//VILLA KEY
newProduct("Villa Key","goDungeonMaster","buy");

newProductTier(
	"Villa Key",
	1,
	"Villa Key",
	"villaKey",
	"Exists with the single purpose of opening doors to villas",
	[9000,0,9000,0,0],
	buyVillaKey
);

function buyVillaKey() {
	updateState("villaKey", true);
	upgradeAnimation("The key is yours!","villaKey",goSpaceBen);
}

//DUNGEON MASTER
newProduct("Dungeon Master","workshop","Summon");

newProductTier(
	"Dungeon Master",
	1,
	"Dungeon Master",
	"dungeonMaster",
	"Summons a powerful DM that can help you come up with endless jerk-riddled dungeons",
	[0,0,1000,0],
	summonDungeonMaster
);

function summonDungeonMaster() {
	updateState('dungeonMasterSummoned', true);
	upgradeAnimation("Let's play some Dungeons & Dereks!","dungeonMaster",goDungeonMaster);
}

//ENDLESS DUNGEON
newProduct("Endless Dungeon","goDungeonMaster","Buy");

newProductTier(
	"Endless Dungeon",
	1,
	"Endless Dungeon",
	"dungeon",
	"Creates the longest dungeon ever",
	[1000,0,0,0],
	createEndlessDungeon
);

function createEndlessDungeon() {
	var endlessDungeon = new dungeonType (
		"Endless Dungeon",
		"",
		1,
		"dungeon",
		99,
		"planet",
		"dungeonBeating"
	);
	yourDungeons.push(endlessDungeon);
	var newDungeons = state.dungeons;
	newDungeons.push(endlessDungeon);
	updateState('dungeons', newDungeons);
	upgradeAnimation("It's endless!!","dungeon",goPickDungeon);
}

//ENDLESS COCO DUNGEON
newProduct("Endless Coco Dungeon","goDungeonMaster","Buy");

newProductTier(
	"Endless Coco Dungeon",
	1,
	"Endless Coco Dungeon",
	"cocoDungeon",
	"Creates the longest coco dungeon ever",
	[0,0,1000,0],
	createEndlessCocoDungeon
);

function createEndlessCocoDungeon() {
	var endlessCocoDungeon = new dungeonType (
		"Endless Coco Dungeon",
		"",
		3,
		"cocoDungeon",
		99,
		"cocoCastle",
		"cocoDungeonBeating"
	);
	yourDungeons.push(endlessCocoDungeon);
	var newDungeons = state.dungeons;
	newDungeons.push(endlessCocoDungeon);
	updateState('dungeons', newDungeons);
	upgradeAnimation("It's endless!!","cocoDungeon",goCocoDungeons);
}

//ENDLESS DUNGEON
newProduct("Endless Monster Dungeon","goDungeonMaster","Buy");

newProductTier(
	"Endless Monster Dungeon",
	1,
	"Endless Monster Dungeon",
	"monsterDungeon",
	"Creates the longest monster dungeon ever",
	[0,1000,0,0],
	createEndlessMonsterDungeon
);

function createEndlessMonsterDungeon() {
	var endlessMonsterDungeon = new dungeonType (
		"Endless Monster Dungeon",
		"",
		5,
		"monsterDungeon",
		99,
		"lochJuice",
		"monsterDungeonBeating"
	);
	yourDungeons.push(endlessMonsterDungeon);
	var newDungeons = state.dungeons;
	newDungeons.push(endlessMonsterDungeon);
	updateState('dungeons', newDungeons);
	upgradeAnimation("It's endless!!","monsterDungeon",goMonsterDungeon);
}

//POTION RESEARCH
newProduct("Potion Research","spaceBen");

for (var i = 1; i < 99; i++) {
	var healingValue = 50 + (i * 10);
	newProductTier(
		"Potion Research",
		i,
		"Experimental Potion Research",
		"potionResearch",
		"Space Ben will conduct some research into making stronger health potion. For a reasonable price your potions will heal <span style='color:#ff0000'>" + healingValue + " health</span>",
		[(i * 450),0,0,0],
		potionResearch
	);
}

function potionResearch() {
	updateState('healthPotionHeal',state.healthPotionHeal + 10);
	upgradeAnimation("Research SUCCESSFUL!","potionResearch",goSpaceBen);
}

//VILLA PORTAL
newProduct("Villa Portal","spaceBen","Buy");

newProductTier(
	"Villa Portal",
	1,
	"Villa Portal",
	"villaPortal",
	"Creates a portal that will take you to the villa. Getting tired of clicking tons of buttons? You better invest in this!",
	[500,500,500,0],
	createVillaPortal
);

function createVillaPortal() {
	updateState('villaPortal', true);
	upgradeAnimation("Let's go to the Villa! And back again! Quicker!","villaPortal",goSpaceBen);
}

//BRET'S CROWBAR
newProduct("Crowbar Upgrade","goBret","Upgrade");

for (var i = 1; i < 99; i++) {
	newProductTier(
		"Crowbar Upgrade",
		i,
		"Crowbar Upgrade",
		"crowbar",
		"Galvanizes the crowbar to get <span style='color:#ff0000'>" + (i + 1) + " coco/sec</span>",
		[Math.floor((i*50) * (1 + (i/8))),0,0,0,(i + 1)],
		upgradeCrowbar,
		true
	);	
}

function upgradeCrowbar() {
	updateState('bCocoPS', state.bCocoPS + 1);
	upgradeAnimation("Go go go!","crowbar",goBret);
}

//OLD BAR UPGRADE
// newProduct("Bar Upgrade","goSpaceBar");

// for (var i = 1; i < 10; i++) {
// 	newProductTier(
// 		"Bar Upgrade",
// 		i,
// 		"Buy a round of drinks",
// 		"drinks",
// 		"You estimate that this will make the drunkards pay <span style='color:#ff0000'>" + ((i * 10) + 10) + " gold</span> for a batch of coco. But they'll propably want even more coco",
// 		[0,(i * 50),0,0],
// 		upgradeBar,
// 		true
// 	);
// }

// function upgradeBar() {
// 	updateState('bBarCocoPrice', state.bBarCocoPrice + 10);
// 	updateState('bBarCocoSell', state.bBarCocoSell + 10);
// 	upgradeAnimation("Drinks for everyone!!","drinks",goSpaceBar);
// }

//BAR UPGRADE
newProduct("Bar Upgrade","goSpaceBar","Upgrade");

for (var i = 1; i < 10; i++) {
	newProductTier(
		"Bar Upgrade",
		i,
		"Buy a round of drinks",
		"drinks",
		"It's easier to sell to happy customers. Will give you more gold every 10 seconds",
		[0,Math.floor((i*50) * (1 + (i/4))),0,0],
		upgradeBar,
		true
	);
}

function upgradeBar() {
	//updateState('bBarCocoPrice', state.bBarCocoPrice + 10);
	//updateState('bBarCocoSell', state.bBarCocoSell + 10);
	updateState('bSpaceBarRate', state.bSpaceBarRate + 0.5);
	upgradeAnimation("Drinks for everyone!!","drinks",goSpaceBar);
}

//WOOD SYNTHESIZER
newProduct("Wood Synthesizer","bretAncientSecret","Build");

newProductTier(
	"Wood Synthesizer",
	1,
	"Wood Synthesizer",
	"woodSynthesizer",
	"Your calculations show that this machine will be able to synthesize near perfect wood",
	[0,100,0,0],
	buildWoodSynthesizer,
	true
);

function buildWoodSynthesizer() {
	updateState('bWoodSynthesizer', true);
	updateState('bWoodPS', 1);
	upgradeAnimation("Time to make some wood!","woodSynthesizer",goWoodSynthesizer);
}

newProduct("Upgrade Wood Synthesizer","goWoodSynthesizer","Upgrade");

for (var i = 1; i < 99; i++) {
	newProductTier(
		"Upgrade Wood Synthesizer",
		i,
		"Better Science",
		"woodSynthesizer",
		"Better science means <span style='color:#ff0000'>" + (i + 1) + " wood/sec</span>",
		[0,Math.floor((i * 20) * (1 + (i/8))),((i * 200) * (1 + (i/8))),0],
		upgradeWoodSynthesizer,
		true
	);
}

function upgradeWoodSynthesizer() {
	updateState('bWoodPS', state.bWoodPS + 1);
	upgradeAnimation("MORE SCIENCE!","woodSynthesizer",goWoodSynthesizer);
}

//CELESTIAL SUMMONER
newProduct("Celestial Summoner","goBurgulonSurface","Build");

newProductTier(
	"Celestial Summoner",
	1,
	"Celestial Summoner",
	"celestialSummoner",
	"Is there life out there? Maybe a special celestial buddy just for you. This device can help you summon just that!",
	[800,100,800,0],
	buildCelestialSummoner,
	true
);

function buildCelestialSummoner() {
	updateState('bCelestialSummoner', true);
	upgradeAnimation("What a beauty!","celestialSummoner",goCelestialSummoner);
}

newProduct("Recharge Celestial Summoner","goCelestialSummoner","Recharge");

newProductTier(
	"Recharge Celestial Summoner",
	1,
	"Recharge Celestial Summoner",
	"celestialSummoner",
	"Maybe next time you'll find something more interesting than an old bar",
	[1000,200,1000,0],
	rechargeCelestialSummoner,
	true
);

newProductTier(
	"Recharge Celestial Summoner",
	2,
	"Recharge Celestial Summoner Again",
	"celestialSummoner",
	"Hopefully this won't blow up in your face again. Or everyone elses face",
	[1200,300,1200,0],
	rechargeCelestialSummoner,
	true
);

function rechargeCelestialSummoner() {
	updateState('bCelestialSummonerCharged', true);
	upgradeAnimation("Here we go again!","celestialSummoner",goCelestialSummoner);
}

//JERK CLUB
newProduct("Jerk Club","createJerkClub","Build");

newProductTier(
	"Jerk Club",
	1,
	"Jerk Club",
	"jerkClub",
	"A jammed little club for jerks to gather and be cool together in their own way",
	[500,0,0,0],
	buildJerkClub,
	true
);

function buildJerkClub() {
	updateState('bJerkClub', true);
	upgradeAnimation("Come hither jerks from around the universe!","jerkClub",goJerkClub);
}

//JERK UPGRADES
newProduct("Jerk Attack Power","goJerkClub","Upgrade");

for (var i = 1; i < 99; i++) {
	newProductTier(
		"Jerk Attack Power",
		i,
		"Jerk Attack Power",
		"derekStrength",
		"Teaches your jerks how to punch really hard (Increases you attack power to " + ((i * 10) + 100) + "%)",
		[Math.floor((i*200) * (1 + (i/4))),0,0,0],
		upgradeAttackPower,
		true
	);
}

function upgradeAttackPower() {
	playSound(soundEffect.punch1);
	updateState('bJerkAttackPower', (state.bJerkAttackPower + 0.1));
	upgradeAnimation("Punch those dereks!","derekStrength",goJerkClub);
}

newProduct("Jerk Muffin Power","goJerkClub","Upgrade");

for (var i = 1; i < 99; i++) {
	newProductTier(
		"Jerk Muffin Power",
		i,
		"Jerk Muffin Power",
		"muffin",
		"Teaches your jerks how to bake real muffins!</br>(Increase your muffin production to " + ((i * 10) + 100) + "%)",
		[0,0,Math.floor((i*200) * (1 + (i/4))),0],
		upgradeMuffinPower,
		true
	);
}

function upgradeMuffinPower() {
	playSound(soundEffect.ding);
	updateState('bJerkMuffinPower', (state.bJerkMuffinPower + 0.1));
	upgradeAnimation("Muffin power!","muffin",goJerkClub);
}

//CORE UPGRADES
newProduct("Bean Appetite","goVisitBaby","Upgrade");

for (var i = 1; i < 3; i++) {
	newProductTier(
		"Bean Appetite",
		i,
		"Bean Appetite",
		"beanHuge",
		"Gets more stardust out of each bean you throw in there",
		[0,Math.floor((i*10000) * (1 + (i/4))),Math.floor(i * 500),0,0],
		upgradeCoreAppetite,
		true
	);
}

function upgradeCoreAppetite() {
	updateState('bCoreLevel',state.bCoreLevel + 1);
	upgradeAnimation("Hungry for beans?","beanHuge",goVisitBaby);
}

newProduct("Stardust Capacity","goVisitBaby","Upgrade");

for (var i = 1; i < 30; i++) {
	newProductTier(
		"Stardust Capacity",
		i,
		"Stardust Capacity",
		"stardust",
		"Increases the stardust capacity of your core to " + ((i * 100) + 50),
		[Math.floor((i*500) * (1 + (i/8))),0,Math.floor(i * 100),0],
		upgradeCoreCapacity,
		true
	);
}

function upgradeCoreCapacity() {
	updateState('bCoreCapacity', state.bCoreCapacity + 100);
	//removeJerkPrice = state.bCoreCapacity / 10;
	upgradeAnimation("You're a star!","stardust",goVisitBaby);
}

//JERK CANS

newProduct("Cool Jerk Cans","goJerkClub","Invent");

newProductTier(
	"Cool Jerk Cans",
	1,
	"Cool Jerk Cans",
	"canOfJerksCool",
	"Invent cool jerk cans. Has even better jerks!",
	[0,300,1000,0],
	inventCoolJerkCans,
	true
);

function inventCoolJerkCans() {
	updateState('bJerkCanCool', true);
	upgradeAnimation("Cool!","canOfJerksCool",goJerkClub);
}

newProduct("Fantastic Jerk Cans","goJerkClub","Invent");

newProductTier(
	"Fantastic Jerk Cans",
	1,
	"Fantastic Jerk Cans",
	"canOfJerksFantastic",
	"Invent fantastic jerk cans. Has the most fantastic jerks!",
	[0,5000,10000,0],
	inventFantasticJerkCans,
	true
);

function inventFantasticJerkCans() {
	updateState('bJerkCanFantastic', true);
	upgradeAnimation("Fantastic!","canOfJerksFantastic",goJerkClub);
}


//COCO INFUSED STARDUST

newProduct("Coco Infused Stardust","goDerekFormula","Infuse");

newProductTier(
	"Coco Infused Stardust",
	1,
	"Coco Infused Stardust",
	"cocoStardust",
	"Infuses the stardust in your core with coco",
	[0,0,50000,0],
	infuseStardust,
	true
);

function infuseStardust() {
	updateState('bDerekProgress', 2);
	updateState('bCoreState', 'coreBrown');
	upgradeAnimation("Stardust infused!","cocoStardust",goStardustInfused);
}

function goStardustInfused() {
	changeScene(
		"Your core is sizzling with coco. This new stardust in you is dangerous!</br>Jack won't know what's coming for him",
		"coreBrown"
	);
	createGoButton("Here we go!","talk",goCore);
}

//DEREK SUMMONING DEVICE

newProduct("Derek Summoning Device","goSellOven","Invest");

newProductTier(
	"Derek Summoning Device",
	1,
	"Derek Summoning Device",
	"derekSummoningDevice",
	"Is this just an oven for baking muffins?",
	[0,1000,0,0],
	inventDerekSummoningDevice,
	true
);

function inventDerekSummoningDevice() {
	updateState('bDerekSummoningDevice', true);
	changeScene(
		"Who wouldn't get summoned by this devine smell?",
		"derekSummoningDevice"
	);
	createGoButton("Mmmmh!","derekSummoningDevice",goDerekSummoningDevice);
}

//SPACE BEN MEGA UPGRADE

newProduct("Upgrade Shop","newSpaceBen","Upgrade");

newProductTier(
	"Upgrade Shop",
	1,
	"Upgrade Shop",
	"space_ben",
	"Space Ben can sell you resources in much bigger quantities. It's going to be great!",
	[0,0,0,3000],
	upgradeSpaceBen,
	true
);

function upgradeSpaceBen() {
	updateState('bSpaceBenUpgraded', true);
	var newSpaceBenPrices = [250,250,250,0];
	updateState('bSpaceBenPrices', newSpaceBenPrices);
	upgradeAnimation("Now we're talking!","space_ben",goBurgSpaceBen);
}

///////////////////
//SINGLE PRODUCTS//
///////////////////

function fakeFunction() {
	console.log("You shouldn't be here");
}

function singleProduct(ID,image,currency,price,place,fnct,parameter) {
	this.ID = ID;
	this.image = image;
	this.currency = currency;
	this.price = price;
	this.place = place;
	this.fnct = fnct;
	this.parameter = parameter;
}

function newSingleProduct(ID,image,currency,price,place,fnct,parameter) {
	var product = new singleProduct(ID,image,currency,price,place,fnct,parameter);
	allSingleProducts.push(product);
}

function createSingleProduct(ID) {
	for (var i = 0; i < allSingleProducts.length; i++) {
		if (allSingleProducts[i].ID == ID && !allSingleProducts[i].bought) {
			createSmallBuildButton(
				allSingleProducts[i].ID,
				allSingleProducts[i].image,
				allSingleProducts[i].ID,
				useSingleProduct,
				ID
			);
		}
	}
}

function useSingleProduct(ID) {
	for (var i = 0; i < allSingleProducts.length; i++) {
		if (allSingleProducts[i].ID == ID) {
			if (allSingleProducts[i].currency == "ghosts") {
				updateState("ghosts",state.ghosts -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "coins") {
				updateState("coins",state.coins -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "gold") {
				updateState("gold",state.gold -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "stardust") {
				updateState("stardust",state.stardust -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "coco") {
				updateState("coco",state.coco -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "bCoco") {
				updateState("bCoco",state.bCoco -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "bGold") {
				updateState("bGold",state.bGold -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "bStardust") {
				updateState("bStardust",state.bStardust -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "bWood") {
				updateState("bWood",state.bWood -= allSingleProducts[i].price);
			}
			if (allSingleProducts[i].currency == "bSpaceRings") {
				updateState("bSpaceRings",state.bSpaceRings -= allSingleProducts[i].price);
			}
			allSingleProducts[i].fnct(allSingleProducts[i].parameter);
		}
	}
}

var allSingleProducts = [];


//SINGLE PRODUCTS//

//Space phone
newSingleProduct("Unknown number (1 coin)","phone","coins",1,"goPhone",goCallUnknown);
newSingleProduct("Stupid number (3 coins)","phone","coins",3,"goPhone",goCallStupid);
newSingleProduct("Godly number (6 coins)","phone","coins",6,"goPhone",goCallGod);

//Space phone coins
newSingleProduct("Buy 1 phone coin (1 ghost)","coin","ghosts",1,"goPhone",goBuyCoin);

//Ben Ghost Trade
newSingleProduct("Buy a ghost (10 gold)","ghost","gold",10,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (50 gold)","ghost","gold",50,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (100 gold)","ghost","gold",100,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (200 gold)","ghost","gold",200,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (400 gold)","ghost","gold",400,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (800 gold)","ghost","gold",800,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (1600 gold)","ghost","gold",1600,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (3200 gold)","ghost","gold",3200,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (6400 gold)","ghost","gold",6400,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (12800 gold)","ghost","gold",12800,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (25600 gold)","ghost","gold",25600,"spaceBen",goBuyGhostBen);
newSingleProduct("Buy a ghost (51200 gold)","ghost","gold",51200,"spaceBen",goBuyGhostBen);

var allGhostIDs = [
	"Buy a ghost (10 gold)","Buy a ghost (50 gold)","Buy a ghost (100 gold)",
	"Buy a ghost (200 gold)","Buy a ghost (400 gold)","Buy a ghost (800 gold)",
	"Buy a ghost (1600 gold)","Buy a ghost (3200 gold)","Buy a ghost (6400 gold)",
	"Buy a ghost (12800 gold)","Buy a ghost (25600 gold)","Buy a ghost (51200 gold)"
];

function goBuyGhostBen() {
	updateState('ghosts', state.ghosts += 1);
	updateState('curGhostID', state.curGhostID += 1);
	upgradeAnimation("Scary!!","ghost",goSpaceBen);
}

//Loch juice coco feed
newSingleProduct("Feed creature 400 coco","coco","coco",400,"goLochJuice",goFeedCreature);
newSingleProduct("Feed creature 800 coco","coco","coco",800,"goLochJuice",goFeedCreature);
newSingleProduct("Feed creature 1600 coco","coco","coco",1600,"goLochJuice",goFeedCreature);
newSingleProduct("Feed creature 2300 coco","coco","coco",2300,"goLochJuice",goFeedCreature);
newSingleProduct("Feed creature 5000 coco","coco","coco",5000,"goLochJuice",goFeedCreature);

var allCreatureIDs = [
	"Feed creature 400 coco","Feed creature 800 coco","Feed creature 1600 coco",
	"Feed creature 2300 coco","Feed creature 5000 coco"
];

function goFeedCreature() {
	updateState('curCreatureID', state.curCreatureID += 1);
	upgradeAnimation('Yummy! You got more?',"lochJuiceTongue",goLochJuice);
}

//ANSWERS
for (var i = 0; i < allAnswers.length; i++) {
	newSingleProduct(allAnswers[i].text,"answerCard","ghosts",state.answerPrice,"goSpaceBenAnswers",goBuyAnswer,i);
}

function goBuyAnswer(nr) {
	updateState('answerPrice', state.answerPrice += 1);
	updateArrayState('answerStates', nr, true);
	upgradeAnimation("Now you have the answer. But for what question?","answerCard",goSpaceBenAnswers);
}

newSingleProduct("Give 20 coco as a present","coco","bCoco",20,"goBeanie",goGiveBeanieCoco);
newSingleProduct("Give 50 gold as a present","gold","bGold",50,"goBeanie",goGiveBeanieGold);

//CANNED JERKS
newSingleProduct("Standard Jerk Can (10 space rings)","canOfJerksRegular","bSpaceRings",10,"goJerkClub",goBuyJerk,0);
newSingleProduct("Cool Jerk Can (100 space rings)","canOfJerksCool","bSpaceRings",100,"goJerkClub",goBuyJerk,1);
newSingleProduct("Fantastic Jerk Can (800 space rings)","canOfJerksFantastic","bSpaceRings",800,"goJerkClub",goBuyJerk,2);

function goBuyJerk(tier) {
	var images = ["canOfJerksRegular","canOfJerksCool","canOfJerksFantastic"];
	var descriptions = [
		"Just a regular old can of jerks",
		"Cool jerks!",
		"This can of jerks is FAN-TASTIC!"
	];
	var lowerRarityCaps = [0,2,4];
	changeScene(descriptions[tier],images[tier],"boughtAJerk");
	// createGoButton("Open",images[tier],pickJerkByRarity,lowerRarityCaps[tier]);
	createGoButton("Open",images[tier],openCan,lowerRarityCaps[tier]);
}

// newSingleProduct("Fuel with wood (200)","wood","bWood",200,"goCore",goFuelWood);

// function goFuelWood() {
// 	if (state.bCoreStardust < 100) {
// 		var newInc = Math.floor(state.bCoreStardustIncrement + state.bCoreStardustIncrement);
// 		updateState('bCoreStardustIncrement', newInc);
// 	} else {
// 		var newInc = Math.floor(state.bCoreStardustIncrement - (state.bCoreStardustIncrement / 4));
// 		updateState('bCoreStardustIncrement', newInc);
// 	}

// 	console.log("more stardust " + state.bCoreStardustIncrement);
// 	updateState('bCoreStardust', state.bCoreStardust + state.bCoreStardustIncrement);
// 	//shortUpgradeAnimation("You bought a ghost!","ghost",goGhostTrade);
// 	playSound(soundEffect.explosion);
// 	shortUpgradeAnimation("Bye bye wood!","explosion",goCore);
// }

//ONE EYED DEREKULIAN ROULETTE
newSingleProduct("Bet 50 gold","gold","bGold",50,"goRoulette",goPlayRoulette,50);
newSingleProduct("Bet 500 gold","gold","bGold",500,"goRoulette",goPlayRoulette,500);
newSingleProduct("Bet 1000 gold","gold","bGold",1000,"goRoulette",goPlayRoulette,1000);

//WOODEN POKER
newSingleProduct("Buy in for 1000 wood","wood","bWood",1000,"goPoker",initializePoker,1000);
newSingleProduct("Buy in for 2500 wood","wood","bWood",2500,"goPoker",initializePoker,2500);
newSingleProduct("Buy in for 5000 wood","wood","bWood",5000,"goPoker",initializePoker,5000);

//BEANS
newSingleProduct("Tiny Bean (100 coco)","beanTiny","bCoco",100,"goBeanShop",buyBean,"Tiny");
newSingleProduct("Tiny Bean (100 wood)","beanTiny","bWood",100,"goBeanShop",buyBean,"Tiny");
newSingleProduct("Tiny Bean (20 gold)","beanTiny","bGold",20,"goBeanShop",buyBean,"Tiny");
newSingleProduct("Average Bean (500 coco)","beanAverage","bCoco",500,"goBeanShop",buyBean,"Average");
newSingleProduct("Average Bean (500 wood)","beanAverage","bWood",500,"goBeanShop",buyBean,"Average");
newSingleProduct("Average Bean (150 gold)","beanAverage","bGold",150,"goBeanShop",buyBean,"Average");
newSingleProduct("Huge Bean (1000 coco)","beanHuge","bCoco",1000,"goBeanShop",buyBean,"Huge");
newSingleProduct("Huge Bean (1000 wood)","beanHuge","bWood",1000,"goBeanShop",buyBean,"Huge");
newSingleProduct("Huge Bean (300 gold)","beanHuge","bGold",300,"goBeanShop",buyBean,"Huge");

newSingleProduct("Reroll Bean Prices (5 stardust)","stardust","bStardust",5,"goBeanShop",rerollBeanPrices);

//newSingleProduct("Buy Tiny Bean (200 coco)","beanTiny","bCoco",200,"goBeanie",buyTinyBean);



//GARDEN BOYS
newSingleProduct("Put stardust in the mailbox (5 stardust)","stardust","bStardust",5,"goAnybodyHome",wakeGardenBoys);

newSingleProduct("Hire Lil' Gnomey (10 stardust)","stardust","bStardust",10,"goGardenBoys",goHireGnome,15);
newSingleProduct("Hire Cat Paws Calvin (50 stardust)","stardust","bStardust",50,"goGardenBoys",goHireGnome,30);
newSingleProduct("Hire Tip Toe Tyler (300 stardust)","stardust","bStardust",300,"goGardenBoys",goHireGnome,60);


//SPACE RADIO
newSingleProduct("Friend House Music (200 gold)","crawlerHouse","bGold",200,"goSpaceRadio",goStartRadio,0);
newSingleProduct("Jerk Techno (800 gold)","bret","bGold",800,"goSpaceRadio",goStartRadio,1);
newSingleProduct("Gnomish Heavy Metal (2000 gold)","lilGnomey","bGold",2000,"goSpaceRadio",goStartRadio,2);
newSingleProduct("Beanie's Impro Jazz (10000 gold)","beanieBean","bGold",10000,"goSpaceRadio",goStartRadio,3);


//DEREK SUMMONING DEVICE
var muffinValues = [50,100,150,200,250,300,350,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2500];

for (var i = 0; i < muffinValues.length; i++) {
	newSingleProduct(
		"Bake " + muffinValues[i] + " muffins (" + muffinValues[i] + " gold)",
		"muffin",
		"bGold",
		muffinValues[i],
		"goDerekSummoningDevice",
		bakeADerek,
		i
	);
}

newSingleProduct("30 Space Rings (100 stardust)","spaceRing","bStardust",100,"newSpaceBen",goBuySpaceRings,30);
newSingleProduct("300 Space Rings (1000 stardust)","spaceRing","bStardust",1000,"newSpaceBen",goBuySpaceRings,300);

function goBuySpaceRings(amount) {
	updateState('bSpaceRings', state.bSpaceRings + amount);
	changeScene(
		"A bunch of used space rings",
		"spaceRing"
	);
	setTimeout(function(){
		goBurgSpaceBen();
	},800);
}
