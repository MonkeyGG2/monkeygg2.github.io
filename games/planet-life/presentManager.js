
function present(navn,ID,image) {
	this.navn = navn;
	this.ID = ID;
	this.image = image;
	this.enabled = true;
}

var yourPresents = [];

function newPresent(navn,image) {
	var hits = 0;
	for (var i = 0; i < yourPresents.length; i++) {
		if (yourPresents[i].navn == navn) {
			hits++;
		}
	}
	var newPresent = new present(navn,navn + hits,image);
	yourPresents.push(newPresent);
}

//newPresent("small soft present","smallSoftPresent");
//newPresent("medium hard present","mediumHardPresent");
//newPresent("big massive present","bigMassivePresent");

function goOpenPresent(arrayNr) {
	yourPresents[arrayNr].enabled = false;
	var giftDelays = [];
	if (state.impatientMode) {
		giftDelays = [50,100];
	} else {
		giftDelays = [1500,2000];
	}
	changeScene("Let's open this bad boy",yourPresents[arrayNr].image);
	setTimeout(function() {
		playSound(soundEffect.explosion);
		changeScene("GIFT EXPLOSION!!!","explosion");
	},giftDelays[0]);
	setTimeout(function() {
		var prize = pickPrize(yourPresents[arrayNr]);
		changeScene("You get " + prize.navn + "!! Yay",prize.img);
		if (place == "newPresent") {
			createButton("Well well",slotMachine);
		} else if (place == "dungeonSummary") {
			createGoButton("Well well","talk",backFromPresent,true);
		} else {
			createButton("Well well","talk",backFromGift);
		}
		
	},giftDelays[1]);
}

var prizes = [];

function prize(navn,image,availability,rarity,resource,amount) {
	this.navn = navn;
	this.img = image;
	this.availability = availability;
	this.rarity = rarity;
	this.resource = resource;
	this.amount = amount;
}

function newPrize(navn,image,availability,rarity,resource,amount) {
	var newPrize = new prize(navn,image,availability,rarity,resource,amount);
	prizes.push(newPrize);
}

function pickPrize(present) {
	var presentAvailability = 0;
	if (present.navn == "small soft present") {
		availability = 3;
	} else if (present.navn == "medium hard present") {
		availability = 2;
	} else if (present.navn == "big massive present") {
		availability = 1;
	}
	var presentScores = [];
	for (var i = 0; i < prizes.length; i++) {
		if (prizes[i].availability <= availability) {
			var score = prizes[i].rarity * Math.random();
			presentScores.push(score);
		} else {
			presentScores.push(0);
		}
	}
	var highscore = 0;
	var magicNumber = 0;
	for (var i = 0; i < prizes.length; i++) {
		if (presentScores[i] > highscore) {
			highscore = presentScores[i];
			magicNumber = i;
		}
	}

	if (prizes[magicNumber].resource == "wood") {
		updateState('wood', state.wood + prizes[magicNumber].amount);
	} else if (prizes[magicNumber].resource == "coco") {
		updateState('coco', state.coco + prizes[magicNumber].amount);
	} else if (prizes[magicNumber].resource == "gold") {
		updateState('gold', state.gold + prizes[magicNumber].amount);
	} else if (prizes[magicNumber].resource == "stardust") {
		updateState('stardust', state.stardust + prizes[magicNumber].amount);
	}

	return prizes[magicNumber];

}

newPrize("150 wood","wood",3,10,"wood",150);
newPrize("300 wood","wood",3,8,"wood",300);
newPrize("1000 wood","wood",2,6,"wood",1000);
newPrize("150 coco","coco",3,10,"coco",150);
newPrize("300 coco","coco",3,8,"coco",300);
newPrize("1000 coco","coco",2,6,"coco",1000);
newPrize("50 gold","gold",3,8,"gold",50);
newPrize("100 gold","gold",2,6,"gold",100);
newPrize("500 gold","gold",1,3,"gold",500);
newPrize("1000 gold","gold",1,1,"gold",1000);
newPrize("1 stardust","stardust",3,8,"stardust",1);
newPrize("1 stardust","stardust",3,8,"stardust",1);
newPrize("3 stardust","stardust",2,5,"stardust",3);
newPrize("10 stardust","stardust",1,3,"stardust",10);
newPrize("30 stardust","stardust",1,1,"stardust",30);