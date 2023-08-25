
/*maps= [[1, 15, 150, 1800, 15, 0, 0, 60*30, 2, [0, 1, 0], [0, 0, 0], [0, 0, 0]],
		[3, 45, 600, 8000, 15, 0, 0, 60*32, 3, [0, 2.71, .51], [0, .03, .02], [0, 0, 0]],
		[5, 100, 1000, 18000, 15, 0, 0, 60*34, 5, [0, 4, .61], [0, .06, .03], [0, 0.002, 0]],
		[8, 800, 1700, 35000, 10, 0, 0, 60*36, 2, [0, 2, 3], [0, .07, .1], [0, .0004, .0003]],
		[12, 1700, 2500, 60000, 15, 0, 0, 60*38, 6, [0, 5, 4], [0, .2, .12], [0, .0005, .0004]],
		[16, 2900, 3400, 90000, 10, 0, 0, 60*40, 4, [0, 8.5, 8], [0, .25, .25], [0, .0005, .0005]],
		[13, 2900, 5000, 100000, 10, 0, 0, 60*40, 3, [0, 12, 11], [0, 2, 2], [0,  .001, .001]]]*/

var maps = [];
var currentMapInfoNum = 0;

for(var level = 0; level < 50; level++) {
	if(level % 17 === 0) createMap(maps, level, 2,'start');
	if(level % 17 === 1) createMap(maps, level, 3, 'soldier');
	if(level % 17 === 2) createMap(maps, level, 5, 'soldier');
	if(level % 17 === 3) createMap(maps, level, 2, 'spear');
	if(level % 17 === 4) createMap(maps, level, 6, 'soldier');
	if(level % 17 === 5) createMap(maps, level, 4, 'both');
	if(level % 17 === 6) createMap(maps, level, 3, 'spear');
	if(level % 17 === 7) createMap(maps, level, 4, 'soldier');
	if(level % 17 === 8) createMap(maps, level, 2, 'both');
	if(level % 17 === 9) createMap(maps, level, 5, 'spear');
	if(level % 17 === 10) createMap(maps, level, 4, 'both');
	if(level % 17 === 11) createMap(maps, level, 2, 'spear');
	if(level % 17 === 12) createMap(maps, level, 3, 'soldier');
	if(level % 17 === 13) createMap(maps, level, 5, 'soldier');
	if(level % 17 === 14) createMap(maps, level, 3, 'both');
	if(level % 17 === 15) createMap(maps, level, 4, 'spear');
	if(level % 17 === 16) createMap(maps, level, 5, 'soldier');
}


//level is incrementing, the index. lanes is 2-6
function createMap(maps, level, lanes, type) {
	//var extraDifficulty = (((level+1)/2)|0)
	var theMap = [];
	theMap[0] = Math.floor(Math.pow(1.6, level+1)); 					//Base Gold
	theMap[1] = Math.floor(15*Math.pow(1.05, level)*(level*level*.5+1)+level*10);                               //Territory Gain (with Bonus)
	theMap[2] = Math.floor((150*Math.pow(1.06, level))*(level*2+1));                                 //Enemy Fence Health
	theMap[3] = Math.floor((1800*Math.pow(1.5, level)*(level+1)));                                 //Enemy Wall Health
	theMap[4] = (lanes===2&&type!=='start'?10:15);                                 //Spawn Timer
	theMap[5] = 0;                             	  //Tower Number TODO
	theMap[6] = 0;                              	  //Tower Damage TODO
	theMap[7] =  60*(10+level*2);                              	  //Cooldown on Bonus
	theMap[8] = lanes;                              	  //Lane Count

	if(type === 'start') {
		theMap[9] = [0, 1, 0];
		theMap[10] = [0, 0, 0];
	} else if(type === 'soldier') {
		theMap[9] = [0, 1.4*level+1, .6*level];
		theMap[10] = [0, .02*level, .008*(level+1)];
	} else if(type === 'spear') {
		theMap[9] = [0, .6*level+1, .9*level];
		theMap[10] = [0, .01*level, .016*(level+1)];
	} else if(type === 'both') {
		theMap[9] = [0, level+1, .75*level];
		theMap[10] = [0, .015*level, .012*(level+1)];
	}
	theMap[11] = [0, ((level>1) ? (level-1)*.0015 : 0), ((level>3) ? (level-3)*.0025 : 0)]; //Unit Growth Per Spawn Per Spawn [Boss, Soldier Spear]
	maps[level] = theMap;
}

function createMapSpace() {
	var theString="<div id='mapInfo' class='mapInfo'>"+
	"<div class='mapInfoField'>Base Gold: <div id='baseGoldInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Territory Gain: <div id='territoryGainInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Fence Health <div id='fenceHealthInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Wall Health: <div id='wallHealthInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Spawn Timer: <div id='spawnTimerInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Lane Count: <div id='laneCountInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Total Units Spawning: <div id='totalUnitsSpawningInfo' class='infoNum'>4f</div></div>"+
	"<div class='mapInfoField'>Total Unit <br>Growth: <div id='totalUnitGrowthInfo' class='infoNum'>4f</div></div>"+
	"<button style='margin-left:43px' onclick='clickedStartMap()'>Start!</button>"+
	"</div>";
    for(var stageNum = 0; stageNum < (higheststageUnlocked+1) && stageNum < 50; stageNum++) {
        var xVal = 155+(stageNum%5)*201;
        var yVal = 105+(((stageNum)/5)|0)*130;

        theString += "<div id='map"+stageNum+"' class='mapSpace' onmouseover='updateMapInfo("+stageNum+")'"+
            " style='left:"+xVal+"px;top:"+yVal+"px'"+
            ">"+(stageNum+1)+"</div>";

        theString += "<div id='timer"+stageNum+"' class='timerContainer'"+
            " style='left:"+xVal+"px;top:"+(yVal+47)+"px'"+
            "></div>";
    }

    document.getElementById("mapSpace").innerHTML = theString
}

function updateMapInfo(num) {
	currentMapInfoNum = num;
	document.getElementById('mapInfo').style.display="inline-block"
	document.getElementById('mapInfo').style.left=212+201*(num%5)+'px';
	document.getElementById('mapInfo').style.top=20+130*(Math.floor(num/5))+'px';

	document.getElementById('territoryGainInfo').style.color=mapTimers[num]===0?'yellow':'black';

	document.getElementById('baseGoldInfo').innerHTML = intToStringRound(maps[num][0])
	document.getElementById('territoryGainInfo').innerHTML = mapTimers[num]===0?intToStringRound(maps[num][1]):intToStringRound(maps[num][1]/5)
	document.getElementById('fenceHealthInfo').innerHTML = intToStringRound(maps[num][2])
	document.getElementById('wallHealthInfo').innerHTML = intToStringRound(maps[num][3])
	document.getElementById('spawnTimerInfo').innerHTML = maps[num][4]
	document.getElementById('laneCountInfo').innerHTML = maps[num][8]
	document.getElementById('totalUnitsSpawningInfo').innerHTML = round2(maps[num][9][0] + maps[num][9][1] + maps[num][9][2])
	document.getElementById('totalUnitGrowthInfo').innerHTML = round2(maps[num][10][0] + maps[num][10][1] + maps[num][10][2])
}

function updateMapTimers() {
	if(currentMapInfoNum != -1) {
		document.getElementById('territoryGainInfo').style.color=mapTimers[currentMapInfoNum]===0?'yellow':'black';
		document.getElementById('territoryGainInfo').innerHTML = mapTimers[currentMapInfoNum]===0?intToStringRound(maps[currentMapInfoNum][1]):intToStringRound(maps[currentMapInfoNum][1]/5)

	}
	document.getElementById("territoryGain").innerHTML = mapTimers[stage]>0?maps[stage][1]/5:maps[stage][1]

	for(m = 0; m < (higheststageUnlocked+1) && m < 50; m++) {
		if(mapTimers[m]===0) {
			document.getElementById("timer"+m).innerHTML = "<div class='timerReady'>Bonus Ready!</div>"
		}
		else {
			mapTimers[m]--;
			document.getElementById("timer"+m).innerHTML = "<div class='timer'>"+convertSecToMin(mapTimers[m])+"</div></div>"
		}
	}
}
//http://imgur.com/Dc5yJOl
function clickedStartMap() {
	stage = currentMapInfoNum
	startANewstage()
	switchMainTab(0)
}
