function loadDefaults() {
	units = [[],[],[],[],[],[]];

	soldierSpawnRate = 0;
	spearSpawnRate = 0;
	spawnManualAmounts =[0,  2];
	initialSpawnAmounts=[0,  0];
	initialSpawnRate=   [9, 10];
	stage = 0;
	//TODO need to be cleaned up, enemy initial values are set elsewhere
	//[initial dmg, ticks between attacks, movespeed per tick, health, armor (not in use), range]
	unitValues =       [[1, 3, .6, 30, 0, 4.5], [0, 0, 0, 0, 0, 0], [8, 20, .4, 12, 0, 15], [0, 0, 0, 0, 0, 0]]
	unitValuesInitial = [[1, 3, .6, 30, 0, 4.5], [0, 0, 0, 0, 0, 0], [8, 20, .4, 12, 0, 15], [0, 0, 0, 0, 0, 0]]
	costSpawnRate =        [20, 0, 90, 0];
	unitCosts =            [8, 0, 30, 0];
	upgradePointsInitial=  [0, 0,  0, 0];
	unitPointValues=[[0, 0, 0, 0, 0],[],[0, 0, 0, 0, 0],[]]
	//Intended defaults:
	
		//gold = 0;
		//territory = 10;
	gold = 0
	territory = 10
	timer = 0
	higheststageUnlocked = 0;
	stop=0
	buttonsToClick = 0; //tutorial thing
	currentTab = 0;
	totalDead=[0, 0, 0, 0]
	enemyWallHealthInitial = 80000;
	enemyWallHealth = 80000;
	enemyFenceHealthInitial = 150;
	enemyFenceHealth = 150;
	wallHealthInitial = 1500
	wallHealth = 1500
	fenceHealthInitial = 100
	fenceHealth = 100
	curUnitScreen = -1
	deadUnitBonus = [1, 1, 1, 1]
	currentMapInfoNum = -1
	offset = 0
	curMana = 20
	maxMana = 30
	holdingSpell = -1
	spellCosts = [9, 14]
	spellExp = 0;
	spellLevel = 0;
	expNeededToLevel = 200;
	mapTimers = [];
	for(l = 0; l < maps.length; l++) {
		mapTimers[l] = 0;
	}
	manaGain = .06;
	buildingUpgradesCost = [[50], [70]]
	spawnList = []
	placeUnitTerritoryCost = [10, 20] //cost of barracks, lumber yard..
	placeUnitIncreaseRatio = [2, 5]
	upgradeConstructionRateCost = 100
	constructionRate=.5
	switchMainTab(2)
}

function saveIntoStorage() {
	//dynamic lists
	window.localStorage.spawnList1 = ""
	theCookie=""
	for(x = 0; x < spawnList.length; x++) {
		theCookie+=spawnList[x]+","
	}
	window.localStorage.spawnList1=theCookie.substring(0, theCookie.length-1)
	//static sizes
    window.localStorage.allVariables104 = "";
	theCookie=""
	for(x = 0; x < spawnManualAmounts.length; x++) {
		theCookie+=spawnManualAmounts[x]+","
		theCookie+=initialSpawnAmounts[x]+","
		theCookie+=initialSpawnRate[x]+","
	}
	theCookie+=stage+","
	for(x = 0; x < unitValues.length; x++) {
		for(y = 0; y < unitValues[x].length; y++) {
			theCookie+=unitValues[x][y]+","
		}
	}
	for(x = 0; x < costSpawnRate.length; x++) {
		theCookie+=costSpawnRate[x]+","
		theCookie+=unitCosts[x]+","
		theCookie+=upgradePointsInitial[x]+","
	}
	for(x = 0; x < unitPointValues.length; x++) {
		for(y = 0; y < unitPointValues[x].length; y++) {
			theCookie+=unitPointValues[x][y]+","
		}
	}
	theCookie+=gold+","
	theCookie+=territory+","
	theCookie+=higheststageUnlocked+","
	theCookie+=currentTab+","
	for(y = 0; y < totalDead.length; y++) {
		theCookie+=totalDead[y]+","
	}
	theCookie+=curMana+","
	theCookie+=maxMana+","
	for(y = 0; y < spellCosts.length; y++) {
		theCookie+=spellCosts[y]+","
	}
	theCookie+=spellExp+","
	theCookie+=spellLevel+","
	theCookie+=expNeededToLevel+","
	theCookie+=manaGain+","
	for(l = 0; l < maps.length; l++) {
		theCookie+=mapTimers[l]+","
	}
	theCookie+=wallHealthInitial+","
	theCookie+=fenceHealthInitial+","
	for(l = 0; l < buildingUpgradesCost.length; l++) {
		for(y = 0; y < buildingUpgradesCost[l].length; y++) {
			theCookie+=buildingUpgradesCost[l][y]+","
		}
	}
	theCookie+=upgradeConstructionRateCost+","
	theCookie+=constructionRate
	
    window.localStorage.allVariables104 = theCookie;
}

function loadFromStorage() {
	document.getElementById("mainBox").style.display="inline-block";
	loadDefaults();
	//if (you haven't loaded the game before) {
    if(!!window.localStorage && window.localStorage.allVariables104) {
		//stop=0 //actually starts the game, here to wait for everything to load
		//dynamic lists
        spawnList = (window.localStorage.spawnList1).split(',');
		if(spawnList[0] == "") spawnList =[];
		
		//static sizes
        expandedCookie = (','+window.localStorage.allVariables104).split(',');
		//TODO: fix this next time when changing versions
        x = 1;
		for(y = 0; y < spawnManualAmounts.length; y++) {
			spawnManualAmounts[y]=parseFloat(expandedCookie[x++]);
			initialSpawnAmounts[y]=parseFloat(expandedCookie[x++]);
			initialSpawnRate[y]=parseFloat(expandedCookie[x++]);
		}
		
		stage=parseFloat(expandedCookie[x++]);
		for(z = 0; z < unitValues.length; z++) {
			for(y = 0; y < unitValues[z].length; y++) {
				unitValues[z][y]=parseFloat(expandedCookie[x++]);
			}
		}
		for(y = 0; y < costSpawnRate.length; y++) {
			costSpawnRate[y]=parseFloat(expandedCookie[x++]);
			unitCosts[y]=parseFloat(expandedCookie[x++]);
			upgradePointsInitial[y]=parseFloat(expandedCookie[x++]);
		}
		for(z = 0; z < unitPointValues.length; z++) {
			for(y = 0; y < unitPointValues[z].length; y++) {
				unitPointValues[z][y]=parseFloat(expandedCookie[x++]);
			}
		}
		gold=parseFloat(expandedCookie[x++]);
		territory=parseFloat(expandedCookie[x++]);
		higheststageUnlocked=parseFloat(expandedCookie[x++]);
		currentTab=parseFloat(expandedCookie[x++]);
		for(y = 0; y < totalDead.length; y++) {
			totalDead[y]=parseFloat(expandedCookie[x++]);
		}
		curMana=parseFloat(expandedCookie[x++]);
		maxMana=parseFloat(expandedCookie[x++]);
		for(y = 0; y < spellCosts.length; y++) {
			spellCosts[y]=parseFloat(expandedCookie[x++]);
		}
		spellExp=parseFloat(expandedCookie[x++]);
		spellLevel=parseFloat(expandedCookie[x++]);
		expNeededToLevel=parseFloat(expandedCookie[x++]);
		manaGain=parseFloat(expandedCookie[x++]);
		for(l = 0; l < maps.length; l++) {
			mapTimers[l]=parseFloat(expandedCookie[x++]);
		}
		wallHealthInitial=parseFloat(expandedCookie[x++]);
		fenceHealthInitial=parseFloat(expandedCookie[x++]);
		for(l = 0; l < buildingUpgradesCost.length; l++) {
			for(y = 0; y < buildingUpgradesCost[l].length; y++) {
				buildingUpgradesCost[l][y]=parseFloat(expandedCookie[x++]);
			}
		}
		upgradeConstructionRateCost=parseFloat(expandedCookie[x++]);
		constructionRate=parseFloat(expandedCookie[x++]);
		//Add new values only at the end
    }
	
	//
	startANewstage()
	updateTerritoryVisual()
	updateGoldVisual()
	//updateProgressVisual()
	updateWallHealthVisuals()
	updatePlaceVisuals()
	changeUnitScreen("clear")
	createMapSpace()
	switchMainTab(currentTab)
	calculateUsedPlaceTerritory()
	showSpawnList()
	updateMapTimers()
	updateConstructionWorkers()

	document.getElementById("mainColumn").style.display="inline-block";
}

function clearStorage() {
	startANewstage()
    window.localStorage.allVariables104="";
	window.localStorage.spawnList1="";
	loadFromStorage()
}

loadFromStorage()