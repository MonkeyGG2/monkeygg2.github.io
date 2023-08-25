
function buildSlotMachine() {
	build(state.slotmachinePrice);
	slotMachine();
}

function buildStraw() {
	build(state.strawPrice);
	updateState("cocoPS", state.cocoPS + 1);
	upgradeAnimation("Suck that coco!","swirlyStraw",goAsteroid);
}

function buildWorkshop() {
	build(state.workshopPrice);
	goWorkshop();
}

function upgradeAxe() {
	buy(axes[state.axeNr]);
	if (state.burgerDoing == "wood") {
		updateState("woodPS", state.woodPS - state.burgerWoodPS);
	}
	updateState("burgerWoodPS", axes[state.axeNr][4]);
	if (state.burgerDoing == "wood") {
		updateState("woodPS", state.woodPS + state.burgerWoodPS);
	}
	if (axes.length > state.axeNr) {
		updateState("axeNr", state.axeNr + 1);
	}
	upgradeAnimation("Axe upgraded!","axe",goWorkshop);
}

function upgradeDrill() {
	buy(drills[state.drillNr]);
	updateState("burgerGoldPS", drills[state.drillNr][4]);
	updateState("goldChance", drills[state.drillNr][5]);
	if (drills.length > state.drillNr) {
		updateState("drillNr", state.drillNr + 1);
	}
	upgradeAnimation("Gold drill upgraded!","drill",goWorkshop);
}

function buyHealthPotion() {
	if (state.healthPotions < state.healthPotionCapacity) {
		buy(healthPotionPrice);
		updateState("healthPotions", state.healthPotions + 1);
		changeArt("healthPotion");
		newHandling("Hehehehe. Now you have <span style='color:#ff0000'>" + state.healthPotions + "/" + state.healthPotionCapacity + " potions</span>");
		setTimeout(function() {
			newHandling("Can I help you? Can I?");
			changeArt("space_ben");
		},1000);
		document.getElementById("buyHealthPotionBut-buildButtonDescription").innerHTML = "it heals like 50 health.. You have " + state.healthPotions + "/" + state.healthPotionCapacity + " potions";
	} else {
		newHandling("Sorry, you only have space for " + state.healthPotionCapacity + " health potions");
	}
}

function buyStarmap() {
	buy(state.shopPrices[4][state.starmapNr]);
	useStarmap();
}

function buildFriendHouse() {
	buy(state.friendHousePrice);
	var newFriendHousePrice = state.friendHousePrice;
	newFriendHousePrice[4] = true;
	updateState("friendHousePrice", newFriendHousePrice);
	goFriendHouse();
}

function buyRedUSB() {
	buy(redUsbPrice);
	var newShopPrices = state.shopPrices;
	newShopPrices[1][5] = false;
	updateState("shopPrices",newShopPrices);
	var newFriends = state.friends;
	newFriends[0].found = true;
	updateState("friends",newFriends);
	findFriend(state.friends[0]);
}

function buyGreenUSB() {
	buy(greenUsbPrice);
	var newShopPrices = state.shopPrices;
	newShopPrices[2][5] = false;
	updateState("shopPrices",newShopPrices);
	var newFriends = state.friends;
	newFriends[1].found = true;
	updateState("friends",newFriends);
	findFriend(state.friends[1]);
}

function buyOrangeUSB() {
	buy(orangeUsbPrice);
	var newShopPrices = state.shopPrices;
	newShopPrices[3][5] = false;
	updateState("shopPrices",newShopPrices);
	var newFriends = state.friends;
	newFriends[2].found = true;
	updateState("friends",newFriends);
	findFriend(state.friends[2]);
}


var H_wonNothing1 = "Nothing.. Wonder if this machine even works.";
var H_wonNothing2 = "We didn't win anything. How unfortunate!";
var H_wonNothing3 = "Shoot! So close";
var H_wonNothing4 = "Nada.. Lame!";
var H_wond1000Gold = "What the!? What are the odds? 1000 gold!. Otherworldly!";

function playSlots(stake) {
	console.log(relativeChance);
	playSound(soundEffect.slotMachine);
	var smallChance = playSmallPrice[1];
	var mediumChance = playMediumPrice[1];
	var bigChance = playBigPrice[1];
	var chances = [smallChance,mediumChance,bigChance];
	if (state.gold >= chances[stake]) {
		updateState("gold", state.gold - chances[stake]);
		if (Math.random() <= relativeChance) {
			relativeChance = 0.1;
			playSound(soundEffect.win);
			if (stake == 2) {
				changeScene("You are the luckiest planet in the universe! You won a big massive present!","bigMassivePresent","newPresent");
				newPresent("big massive present","bigMassivePresent");
				if (censoredWords) {
					createButton("Open it now!",goOpenPresent,yourPresents.length - 1);
				} else {
					createButton("Open it damnit!",goOpenPresent,yourPresents.length - 1);
				}
			} else if (stake == 1) {
				changeScene("Score! A medium hard present for you","mediumHardPresent","newPresent");
				newPresent("medium hard present","mediumHardPresent");
				createButton("Open it!",goOpenPresent,yourPresents.length - 1);
			} else if (stake == 0) {
				changeScene("Look at this. You won a small soft present","smallSoftPresent","newPresent");
				newPresent("small soft present","smallSoftPresent");
				createButton("Open",goOpenPresent,yourPresents.length - 1);
			}
		} else {
			relativeChance += 0.03;
			playSound(soundEffect.loose);
			var ran_H = Math.random() * 10;
			var h = "";
			if (ran_H > 9) {
				h = H_wonNothing1;
			} else if (ran_H > 6) {
				h = H_wonNothing2;
			} else if (ran_H > 3) {
				h = H_wonNothing3;
			} else if (ran_H > 1) {
				h = H_wonNothing4;
			}
			changeScene(h,"nitte","nitte");
			nitte();
		}
	} else {
		newHandling("You can't afford it. Stop trying already!");
	}
}

function planetTradeCoco() {
	buy(state.planetUdTrade);
	updateState("gold", state.gold + 5);
	goPlanetud();
	if (!state.firstCocoTrade) {
		updateState("firstCocoTrade", true);
	}
}

function build(list) {
	playSound(soundEffect.buy);
	var afford = true;
	if (list[0] > state.wood) {
		afford = false;
	}
	if (list[1] > state.gold) {
		afford = false;
	}
	if (list[2] > state.coco) {
		afford = false;
	}
	if (list[3] > state.stardust) {
		afford = false;
	}
	if (afford) {
		updateState("wood", state.wood - list[0]);
		updateState("gold", state.gold - list[1]);
		updateState("coco", state.coco - list[2]);
		updateState("stardust", state.stardust - list[3]);
		list[4] = true;
		// var updatedList = list;
		// updatedList[4] = true;
		// updateState(list, updatedList);
	}
}

function buy(list,burgulon) {
	playSound(soundEffect.buy);
	var afford = true;
	if (burgulon) {
		if (list[0] > state.bWood) {
			afford = false;
		}
		if (list[1] > state.bGold) {
			afford = false;
		}
		if (list[2] > state.bCoco) {
			afford = false;
		}
		if (list[3] > state.bStardust) {
			afford = false;
		}
		if (afford) {
			updateState("bWood", state.bWood - list[0]);
			updateState("bGold", state.bGold - list[1]);
			updateState("bCoco", state.bCoco - list[2]);
			updateState("bStardust", state.bStardust - list[3]);
		} else {
			console.log("can't afford that");
		}
	} else {
		if (list[0] > state.wood) {
			afford = false;
		}
		if (list[1] > state.gold) {
			afford = false;
		}
		if (list[2] > state.coco) {
			afford = false;
		}
		if (list[3] > state.stardust) {
			afford = false;
		}
		if (afford) {
			updateState("wood", state.wood - list[0]);
			updateState("gold", state.gold - list[1]);
			updateState("coco", state.coco - list[2]);
			updateState("stardust", state.stardust - list[3]);
		} else {
			console.log("can't afford that");
		}
	}

}

function upgradeAnimation(text,image,fnct,parameter) {
	changeScene("BAM!","explosion","upgradeAnimation");
	playSound(soundEffect.explosion);
	if (state.impatientMode) {
		setTimeout(function() {
			changeArt(image);
			newHandling(text);
		},50);
		setTimeout(function() {
			fnct(parameter);
		},100);
	} else {
		setTimeout(function() {
			changeArt(image);
			newHandling(text);
		},500);
		setTimeout(function() {
			fnct(parameter);
		},2000);
	}

}
