function newUnitDiv(unit) {
	commonBefore = "<div id='unit"+unit.id+"' class='unitContainer unitLine"+unit.line+"' style='z-index:"+(zIndex--)+"' onmouseover='hoverAUnit("+unit.id+")' onclick='clickAUnit("+unit.id+")'>" +
		"<div class='healthBarOuter'><div class='healthBarInner' id='healthBar"+unit.id+"' style='z-index:"+(zIndex--)+"'></div></div>";
	src = "pics/"+(unit.direction!="right"?"enemy":"")+unit.type+".png"
	different = "<img height='30' width='50' src='"+src+"'>"
	/*if(unit.direction === "right") {
		different = "<div id='body' class='"+unit.type+" unit' style=''> </div>" +
			"<div id='unitWeapon' class='weapon'><div class='weapon"+unit.type+"'></div> </div>";
	}
	else {
		different = "<div id='unitWeapon' class='weapon'><div class='weapon"+unit.type+"'></div> </div>" +
			"<div id='body' class='"+unit.type+" unitLeft' style=''> </div>";
	}*/
	commonAfter = "<div id='count"+unit.id+"' class='count hyperVisible count"+unit.type+"'>"+unit.unitCount+"</div></div>";
	elem = document.createElement("div");
	elem.innerHTML = commonBefore + different + commonAfter;
	document.getElementById('fightTime').appendChild(elem)
}

function updateUnitPos(y, x) {
	if(units[y][x] == null)
	console.log("updating null unit "+y+", "+x);
	if(document.getElementById("unit"+units[y][x].id) == null)
	console.log("sadf" +units[y][x].id);
	document.getElementById("unit"+units[y][x].id).style.left = (units[y][x].pos +7)*11.9 + "px";
}

function updateManaVisual() {
	document.getElementById("mana").innerHTML = intToString(curMana);
}


function updateSpawnTimers() {
	document.getElementById("enemySpawnTimer").innerHTML = roundtoFormat1(enemySpawnRate);
	document.getElementById("enemySoldierSpawnAmount").innerHTML = roundtoFormat1(enemySpawnAmounts[1])
	document.getElementById("enemySpearSpawnAmount").innerHTML = roundtoFormat1(enemySpawnAmounts[2])
	if(spawnAmounts[0] == 0) {
		document.getElementById("soldierContainer").style.display="none"
	} else {
		document.getElementById("soldierContainer").style.display="inline-block"
		document.getElementById("soldierSpawnTimer").innerHTML = roundtoFormat1(soldierSpawnRate);
		document.getElementById("soldierAutoSpawnAmount").innerHTML = roundtoFormat1(spawnAmounts[0])
	}
	if(spawnAmounts[1] == 0) {
		document.getElementById("spearContainer").style.display="none"
	}
	else {
		document.getElementById("spearContainer").style.display="inline-block"
		document.getElementById("spearSpawnTimer").innerHTML = roundtoFormat1(spearSpawnRate);
		document.getElementById("spearAutoSpawnAmount").innerHTML = roundtoFormat1(spawnAmounts[1])
	}
}

function updateGoldVisual() {
	document.getElementById("gold").innerHTML = intToStringRound(gold);
}

function updateTerritoryVisual() {
	document.getElementById("territory").innerHTML = intToStringRound(territory)
	document.getElementById("totalTerritoryPlaces").innerHTML = intToStringRound(territory)
}

function updateConstructionVisual() {
	totalSoldierFound = 0
	totalSpearFound = 0
	tempTotal = constructionTotal
	for(j = 0; j < initialSpawnAmounts.length; j++) {
		spawnAmounts[j]=initialSpawnAmounts[j]
	}
	for(q = 0; q < spawnList.length; q++) {
		if(spawnList[q] == "soldier") constructionCost = round2(placeUnitTerritoryCost[0] + placeUnitIncreaseRatio[0]* totalSoldierFound++)
		if(spawnList[q] == "spear") constructionCost = round2(placeUnitTerritoryCost[1] + placeUnitIncreaseRatio[1] * totalSpearFound++)
		if(tempTotal >= constructionCost) {
			if(spawnList[q] == "soldier") spawnAmounts[0]++
			if(spawnList[q] == "spear") spawnAmounts[1]++
			tempTotal -= constructionCost
			document.getElementById("constructionGrey"+q).style.display="inline-block";
			document.getElementById("constructionRed"+q).style.display="none";
		} else if(tempTotal > 0){
			document.getElementById("constructionGrey"+q).style.display="none";
			document.getElementById("constructionRed"+q).style.display="inline-block";
			document.getElementById("constructionRed"+q).style.width = (tempTotal/constructionCost)*100+"%"
			tempTotal -= constructionCost
		} else {
			document.getElementById("constructionGrey"+q).style.display="none";
			document.getElementById("constructionRed"+q).style.display="none";
		}
	}
}

function showSpawnList() {
	spawnListBox = document.getElementById("spawnListBox")
	spawnListBox.innerHTML = ""
	spawnDiv=""
	totalSoldierFound = 0
	totalSpearFound = 0
	for(q = 0; q < spawnList.length; q++) {
		if(spawnList[q] == "soldier") spawnDivCost = round2(placeUnitTerritoryCost[0] + placeUnitIncreaseRatio[0]* totalSoldierFound++)
		if(spawnList[q] == "spear") spawnDivCost = round2(placeUnitTerritoryCost[1] + placeUnitIncreaseRatio[1] * totalSpearFound++)
		spawnDiv+=  "<div class='spawnDiv'>"+
			"<div class='constructionBar' id='constructionRed"+q+"' style='background-color:rgba(230, 69, 69, 0.82);'></div>"+
			"<div class='constructionBar' id='constructionGrey"+q+"'></div>"+
			"<img height='23' width='29' src='pics/"+spawnList[q]+".png' class='spawnListPic'>"+
			"<div style='position:absolute;left:70px;color:black;font-size:20px;'>"+spawnDivCost+"</div>"+
			((q>0&&spawnList[q-1]!=spawnList[q])?"<img height='21' width='21' onclick='shiftPlaceListUp(this)' src='pics/arrow.png' class='listPic'>":"")+
			((q<spawnList.length-1&&spawnList[q+1]!=spawnList[q])?"<img height='21' width='21' onclick='shiftPlaceListDown(this)' src='pics/Darrow.png' class='listPic' style='left:186px'>":"")+
			"<img height='21' width='21' onclick='removeFromPlaceList(this)' src='pics/x.png' class='listPic' style='left:230px'>"+
		"</div>"
	}
	spawnListBox.innerHTML=spawnDiv
	updateConstructionVisual()
}

function updatePlaceVisuals() {
	document.getElementById("soldierPlaceCost").innerHTML=round2(placeUnitTerritoryCost[0] + placeUnitIncreaseRatio[0] * findNumTypeInList("soldier"));
	document.getElementById("spearPlaceCost").innerHTML=round2(placeUnitTerritoryCost[1] + placeUnitIncreaseRatio[1] * findNumTypeInList("spear"));
}

function updateWallHealthVisuals() {
	document.getElementById("wallHealth").innerHTML = intToString(wallHealth)
	document.getElementById("enemyWallHealth").innerHTML = intToString(enemyWallHealth)
	document.getElementById("compete3").style.width = wallHealth / wallHealthInitial * 100 + "%";
	document.getElementById("compete4").style.width = (1-wallHealth / wallHealthInitial) * 100 + "%";
	document.getElementById("compete5").style.width = enemyWallHealth / enemyWallHealthInitial * 100 + "%";
	document.getElementById("compete6").style.width = (1-enemyWallHealth / enemyWallHealthInitial) * 100 + "%";
	document.getElementById("fenceHealth").innerHTML = intToString(fenceHealth);
	document.getElementById("enemyFenceHealth").innerHTML = intToString(enemyFenceHealth);
}

function changeBuildingScreen(buildingType) {
	start = ""
	if(buildingType == "wall") {
		start = "<img src ='pics/smallwall.png' height='50' width='50' /><br>"
		start += addBuildingButton("wall", "Wall Health", 0)
	}
	if(buildingType == "fence") {
		start = "<img src ='pics/smallfence.png' height='50' width='25' /><br>"
		start += addBuildingButton("fence", "Fence Stacks", 0)
	}
	start += ""
	document.getElementById("buildingUpgradesBox").innerHTML = start
	clickBuildingBuyButton(-1, buildingType)
}
function addBuildingButton(type, name, num) {
	return "<div class='buyButton' onclick='clickBuildingBuyButton("+num+" , \""+type+"\")'"+"  id='buyBuildingButton"+num+"' style='width:80%;border:2px solid;' >"+
		"<div class='buyName'>"+name+"</div>"+
		"<div class='buyVal' id='buyBuilding"+num+"'>3</div>"+
		"<div class='costBox'><div class='goldIcon'></div><div id='costBuilding"+num+"' class='number'>400</div></div>"+
	"</div>"
}

function changeUnitScreen(unit) {
	type = "error"
	if(typeof unit.id == 'undefined') {
		if(unit == "soldier") {
			type = "soldier"
		}
		if(unit == "spear") {
			type = "spear"
		}
	} else {
		type = unit.type
	}
	if(type==="error") {
		document.getElementById("unitUpgradesBox").innerHTML="";
		return
	}
	typeNum = convertTypeToNum(type, "right");
	commonStart = "<div class='unitContainer nohover' style='cursor:auto;display:block;position:initial;margin-left:auto;margin-right:auto;margin-top:5px;height:30px;'>";
	next = "<img src='pics/"+type+".png' img height='30' width='50'></div></div>";
	next2 =  "<div class='buySpawnRate' style='margin-bottom:8px;' onclick='buyUpgradePoint(\""+type+"\")'>"+
			"<div class='icon'>"+addIcon(7)+"</div>"+
			"<div class='costBox'><div class='goldIcon'></div><div id='cost' class='number'>400</div></div>"+
			"<div class='buyName' >Buy an <div style='color:teal;'>Upgrade Point</div></div>"+
			"<div class='buyVal' id='buy'>3</div>"+
		"</div>"
	next25 = "<div id='slider'></div>";
	next3 = "<div style='width:40%;height:40px;vertical-align:top;'>"
	button1 = addButton(type, "Damage", 1)
	next4 = "</div><div style='width:40%;height:40px;vertical-align:top;'>"
	button4 = addButton(type, "Max Health", 4)
	next5= "</div><div style='font-size:14px;margin-bottom:14px;margin-right:60px;'>Total dead: <div id='totalDead"+typeNum+"' style='color:black'>5f</div></div>"+
		"<div style='font-size:14px;margin-bottom:14px;'>Bonus from dead units: x<div id='deadUnitBonus"+typeNum+"' style='color:black'>5f</div></div>"+
		"<div id='spawnRateContainer' class='buySpawnRate' onclick='clickBuySpawnRate(\""+type+"\")'>"+
		"<div class='icon'>"+addIcon(0)+"</div>"+
		"<div class='costBox'><div class='goldIcon'></div><div id='costSpawn' class='number'>400</div></div>"+
		"<div class='buyName'>Spawn Rate</div>"+
		"<div class='buyIncreaseAmount' id='"+type+"Increase0'>5% faster</div>"+
		"<div class='buyVal' style='color:rgb(102, 102, 102);'>Spawn units of this type every <div id='buy02' style='color:black;'></div> seconds.</div>"+
	"</div>"

	next6="<div style='width:40%;height:110px;vertical-align:top;'>"
	button2 = addButton(type, "Attack Speed", 2)
	button3 = addButton(type, "Move Speed", 3)
	next7="</div><div style='width:40%;height:110px;vertical-align:top;'>"
	button5 = addButton(type, "Armor", 5)
	button6 = addButton(type, "Range", 6)
	finish ="</div>"

	curUnitScreen = typeNum
	document.getElementById("unitUpgradesBox").innerHTML = commonStart+next+next2+next25+next3+button1+next4+button4+next5+next6+button2+button3+next7+button5+button6+finish;
	if(upgradePointsInitial[typeNum] > 0)
		slider('slider');
	//document.getElementById("unitUpgradesBox").style.display="block"
	//document.getElementById("defaultScreen").style.display="none"
	updateSpawnRate2(type)
	updateStatusUpgrades(unit, type)
	updateDeadUnitBonus()
	if(buttonsToClick) {
		clickedOKButton()
	}
}

function slider(id) {
    $("#" + id).slider({
        value: 1,
        min: 0,
        max: upgradePointsInitial[typeNum],
        step: 1,
        slide: function(event, ui) {
			unitPointValues[typeNum][0] = upgradePointsInitial[typeNum] - ui.value;
			unitPointValues[typeNum][3] = ui.value;
			handleBuyAmounts(typeNum, 0)
			handleBuyAmounts(typeNum, 3)
			updateStatusUpgrades("", type)
        }
    });
}

function updateSpawnRate2(type) {
	if(type == "soldier") numToUpdate = 0
	if(type == "spear") numToUpdate = 1
	document.getElementById("buy02").innerHTML = round2(spawnRate[numToUpdate])
}

function updateSpawnRate() {
	unit = getUnitById(curClickedUnit)
	if(document.getElementById("buy0")) {
		document.getElementById("buy02").innerHTML = round2(spawnRate[unit.typeNum/2])
	}
}

function updateConstructionWorkers() {
	document.getElementById("costructionRateCost").innerHTML = upgradeConstructionRateCost
}

function updateStatusUpgrades(unit, type) {
	typeNum = convertTypeToNum(type, "right")
	document.getElementById("buy").innerHTML=upgradePointsInitial[typeNum];
	document.getElementById("cost").innerHTML=ceil(unitCosts[typeNum]);
	document.getElementById("costSpawn").innerHTML=ceil(costSpawnRate[typeNum]);
	if(upgradePointsInitial[typeNum] && document.getElementById("slider").children.length == 0)
		slider('slider');
	if(upgradePointsInitial[typeNum])
		$("#slider").slider('value', unitPointValues[typeNum][3]);
	for(e = 1; e < unitValues[typeNum].length+1; e++) {
		if(document.getElementById("points"+e)) document.getElementById("points"+e).innerHTML=unitPointValues[typeNum][e-1]
		document.getElementById("buy"+e).innerHTML=(e==1||e==4)?round2(unitValues[typeNum][e-1]*deadUnitBonus[typeNum]):unitValues[typeNum][e-1]
	}
	updateSpawnRate2(type)
}

function convertTypeToNum(type, direction) {
	if(type == "soldier" && direction == "right") return 0;
	if(type == "soldier" && direction != "right") return 1;
	if(type == "spear" && direction == "right") return 2;
	if(type == "spear" && direction != "right") return 3;
	return -1;
}

function addButton(type, name, num) {
	return "<div class='buyButton "+(num == 1 || num == 4 ? "' onclick='clickBuyButton("+num+" , \""+type+"\")'" : "nohover'")+"  id='buyButton"+num+"'>"+
		"<div class='icon'>"+addIcon(num)+"</div>"+
		"<div class='buyName'>"+name+"</div>"+
		"<div class='buyVal' id='buy"+num+"'>3</div>"+
		(num == 1 || num == 4 ? "<div class='upgradePoints' id='points"+num+"'>3</div>" : "") +
	"</div>"
}

function updateHover(id) {
	unitToDisplay = getUnitById(id)
	if(!unitToDisplay) return

	document.getElementById("curDamageDone").innerHTML = round2(unitToDisplay.totalDamageDone);
	document.getElementById("curKills").innerHTML = unitToDisplay.kills;
	document.getElementById("curHealth").innerHTML = round1(unitToDisplay.curHealth);
	document.getElementById("curUnitCount").innerHTML = unitToDisplay.unitCount;
	document.getElementById("curTimeAlive").innerHTML = round((totalTicks - unitToDisplay.timeAlive)/20)+"s";
	document.getElementById("curActualHealth").innerHTML = round1(unitToDisplay.actualMaxHealth);
	document.getElementById("totalHealth").innerHTML = round1((unitToDisplay.unitCount-1)*unitToDisplay.actualMaxHealth+unitToDisplay.curHealth);
	document.getElementById("curDamage").innerHTML = round2(unitToDisplay.damage);
	document.getElementById("totalDamage").innerHTML = round2(unitToDisplay.damage*unitToDisplay.unitCount);
}

function addIcon(num) {
	if(num == 0) {
		return "<img src='pics/camp.png' height='100%' width='100%'>"
	}
	if(num == 1) {
		return "<img src='pics/sword.png' height='100%' width='100%'>"
	}
	if(num == 2) {
		return "<img src='pics/fast.png' height='100%' width='100%'>"
	}
	if(num == 3) {
		return "<img src='pics/foot.png' height='100%' width='100%'>"
	}
	if(num == 4) {
		return "<img src='pics/heart.png' height='100%' width='100%'>"
	}
	if(num == 5) {
		return "<img src='pics/shield.png' height='100%' width='100%'>"
	}
	if(num == 6) {
		return "<img src='pics/range.png' height='100%' width='100%'>"
	}
	if(num == 7) {
		return "<img src='pics/arrow.png' height='100%' width='100%'>"
	}
	return "";
}

function handleLineAmounts(lineCount) {
	if(lineCount == 1) offset = 120;
	if(lineCount == 2) offset = 105;
	if(lineCount == 3) offset = 70;
	if(lineCount == 4) offset = 55;
	if(lineCount == 5) offset = 30;
	if(lineCount == 6) offset = 0;
	offset+=37;
	document.getElementById("fightTime").style.marginTop = offset+"px";
	for(m = 1; m < 7; m++)
		document.getElementById("line"+m).style.display="none";
	document.getElementById("line"+lineCount).style.display="inline-block";
	if(lineCount == 1) {
	}
	if(lineCount == 2) {
	}
	if(lineCount == 3) {
	}
	if(lineCount == 4) {
	}
	if(lineCount == 5) {
	}
	if(lineCount == 6) {
	}
}


//TODO: change the hardcoded values to relative based on canvas width

//Methods to set up the data for canvas drawing
function drawSpearLineToWall(unit1) {
	storedArrowVisuals.push({x1:(unit1.pos+7)*11.9+22, y1:(unit1.line)*54+60+offset, x2:(unit1.pos+7)*11.9+151, y2:(unit1.line)*54+60+offset, curCount:4, count:4});
}

function drawLightning(unit1, unit2) {
	storedLightningVisuals.push({x1:(unit1.pos+7)*11.9+15, y1:(unit1.line)*54+60+offset, x2:(unit2.pos+7)*11.9+15, y2:(unit2.line)*54+60+offset, curCount:16});
}

//TODO: change map values to use this type of arrays
function drawSpearLine(unit1, unit2) {
	storedArrowVisuals.push({x1:(unit1.pos+7)*11.9+22, y1:(unit1.line)*54+60+offset, x2:(unit2.pos+7)*11.9+11, y2:(unit2.line)*54+60+offset, curCount:4, count:4});
}

//Draws the lines that move around a lot
function redrawStoredLines(onTick){
	ctx.clearRect(0,0,c.width,c.height);
	// redraw each stored line
	for(i=storedArrowVisuals.length - 1; i>=0; i--){
		if(onTick) {
			if(storedArrowVisuals[i].curCount <= 0) {
				storedArrowVisuals.splice(i, 1);
				continue;
			}
			storedArrowVisuals[i].curCount--;
		}
		ctx.strokeStyle="#000000"
		ctx.beginPath();
		x3 = storedArrowVisuals[i].x1+((storedArrowVisuals[i].x2-storedArrowVisuals[i].x1)/storedArrowVisuals[i].count*(storedArrowVisuals[i].count - storedArrowVisuals[i].curCount)) - 4
		y3 = storedArrowVisuals[i].y1+((storedArrowVisuals[i].y2-storedArrowVisuals[i].y1)/storedArrowVisuals[i].count*(storedArrowVisuals[i].count - storedArrowVisuals[i].curCount))
		//console.log(storedArrowVisuals[i].x1+", "+storedArrowVisuals[i].y1+", "+storedArrowVisuals[i].x2+", "+storedArrowVisuals[i].y2+", " + storedArrowVisuals[i].curCount+", "+x3+", "+y3)
		ctx.moveTo(x3,y3);
		ctx.lineTo(x3+8,y3);
		ctx.lineWidth = 3;
		ctx.stroke();
	}
	for(i=storedLightningVisuals.length-1; i>=0; i--) {
		if(onTick) {
			if(storedLightningVisuals[i].curCount <= 0) {
				storedLightningVisuals.splice(i, 1);
				continue;
			}
			storedLightningVisuals[i].curCount--;
		}
		ctx.strokeStyle="rgba(161, 255, 251, "+storedLightningVisuals[i].curCount/16+")"
		ctx.lineWidth=8
		ctx.beginPath();
		ctx.moveTo(storedLightningVisuals[i].x1, storedLightningVisuals[i].y1)
		ctx.lineTo(storedLightningVisuals[i].x2, storedLightningVisuals[i].y2)
		ctx.stroke();
	}
}


function switchMainTab(switchTo) {
	currentTab = switchTo
	hideAllInfo()
	switch(switchTo) {
		case 0: //war
			document.getElementById("warSpace").style.display = "inline-block";
			document.getElementById("manaSpace").style.display = "inline-block";
			document.getElementById("warTab").style.backgroundColor="rgb(142, 212, 142)";
		break;
		case 1: //map
			document.getElementById("mapSpace").style.display = "inline-block";
			document.getElementById("mapTab").style.backgroundColor="rgb(142, 212, 142)";
		break;
		case 2: //places
			document.getElementById("placesSpace").style.display = "inline-block";
			document.getElementById("territoryTab").style.backgroundColor="rgb(142, 212, 142)";
		break;
		case 3: //units
			document.getElementById("unitsSpace").style.display = "inline-block";
			document.getElementById("unitTab").style.backgroundColor="rgb(142, 212, 142)";
		break;
		case 4: //buildings
			document.getElementById("buildingsSpace").style.display = "inline-block";
			document.getElementById("buildingsTab").style.backgroundColor="rgb(142, 212, 142)";
		break;
		case 5: //spells
			document.getElementById("manaTab").style.backgroundColor="rgb(142, 212, 142)";
			document.getElementById("manaSpace").style.display = "inline-block";
			document.getElementById("spellUpgradeSpace").style.display = "inline-block";
		break;
		case 6: //mana
			document.getElementById("optionsTab").style.backgroundColor="rgb(142, 212, 142)";
			document.getElementById("optionsPage").style.display = "inline-block";
		break;
	}
}

function hideAllInfo() {
	document.getElementById("warSpace").style.display = "none";
	document.getElementById("mapSpace").style.display = "none";
	document.getElementById("manaSpace").style.display = "none";
	document.getElementById("spellUpgradeSpace").style.display = "none";
	document.getElementById("unitsSpace").style.display = "none";
	document.getElementById("buildingsSpace").style.display = "none";
	document.getElementById("placesSpace").style.display = "none";
	document.getElementById("optionsPage").style.display = "none";

	document.getElementById("warTab").style.backgroundColor="white";
	document.getElementById("mapTab").style.backgroundColor="white";
	document.getElementById("territoryTab").style.backgroundColor="white";
	document.getElementById("unitTab").style.backgroundColor="white";
	document.getElementById("buildingsTab").style.backgroundColor="white";
	document.getElementById("manaTab").style.backgroundColor="white";
	document.getElementById("optionsTab").style.backgroundColor="white";
}


var c = document.getElementById("damageLines");
var ctx = c.getContext("2d");
