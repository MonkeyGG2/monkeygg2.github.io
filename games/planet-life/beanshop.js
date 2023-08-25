function bean(size,color,image,name) {
	this.size = size;
	this.color = color;
	this.image = image;
	this.name = name;
	this.used = false;
}

var smallBeans = ["Tiny Bean (100 coco)","Tiny Bean (100 wood)","Tiny Bean (20 gold)"];
var mediumBeans = ["Average Bean (500 coco)","Average Bean (500 wood)","Average Bean (150 gold)"];
var bigBeans = ["Huge Bean (1000 coco)","Huge Bean (1000 wood)","Huge Bean (300 gold)"];
var beanPacks = ["20 random beans (20000 wood)","20 random beans (20000 coco)","20 random beans (8000 gold)"];

var tinyBeanPrice;
var averageBeanPrice;
var hugeBeanPrice;
var packBeanPrice;

calculateBeanPrice("Tiny");
calculateBeanPrice("Average");
calculateBeanPrice("Huge");
calculateBeanPrice("Pack");

function calculateBeanPrice(size) {
	if (size == "Tiny") {
		tinyBeanPrice = smallBeans[Math.floor(Math.random() * smallBeans.length)];
	}
	if (size == "Average") {
		averageBeanPrice = mediumBeans[Math.floor(Math.random() * mediumBeans.length)];
	}
	if (size == "Huge") {
		hugeBeanPrice = bigBeans[Math.floor(Math.random() * bigBeans.length)];
	}
	if (size == "Pack") {
		packBeanPrice = beanPacks[Math.floor(Math.random() * beanPacks.length)];
	}
}

function goBeanShop() {
	playSound(soundEffect.beanie);
	changeScene(
		"Wanna buy some beans?",
		"beanShop",
		"goBeanShop"
	);
	createGoButton("Back",state.bCoreState,goCore);
	createSingleProduct("Reroll Bean Prices (5 stardust)");
	createSingleProduct(tinyBeanPrice);
	createSingleProduct(averageBeanPrice);
	createSingleProduct(hugeBeanPrice);
	createSingleProduct(packBeanPrice);
}

function buyBean(size) {
	playSound(soundEffect.buy);
	var colors = ["Purple","Blue","Orange"];
	var color = colors[Math.floor(Math.random() * colors.length)];
	var name = size + " " + color + " Bean";

	var image = "bean" + size + color;
	console.log(size + " + " + color + " + " + image + " + " + name);
	var thisBean = new bean(size,color,image,name);
	var beanArray = state.bMyBeans;
	beanArray.push(thisBean);
	updateState('bMyBeans', beanArray);

	calculateBeanPrice(size);

	changeScene(
		"You got: " + name + "!",
		image,
		"boughtABean"
	);
	createGoButton("Cool bean!",image,goBeanShop);
}

function anyBeans() {
	var beans = false;
	for (var i = 0; i < state.bMyBeans.length; i++) {
		if (!state.bMyBeans[i].used) {
			beans = true;
		}
	}
	return beans;
}

function buyBeanPack() {
	var newBeans = [];
	var beanTexts = [];
	var h = "";
	for (var i = 0; i < 20; i++) {
		var colors = ["Purple","Blue","Orange"];
		var color = colors[Math.floor(Math.random() * colors.length)];
		var sizes = ["Tiny","Average","Huge"];
		var size = sizes[Math.floor(Math.random() * sizes.length)];
		var name = size + " " + color + " Bean";

		var image = "bean" + size + color;
		console.log(size + " + " + color + " + " + image + " + " + name);
		var thisBean = new bean(size,color,image,name);
		var beanArray = state.bMyBeans;
		newBeans.push(thisBean);
		beanArray.push(thisBean);
		updateState('bMyBeans', beanArray);
	}

	for (var i = 0; i < newBeans.length; i++) {
		var clr = "";
		if (newBeans[i].color == "Blue") {
			clr = "00bdff";
		} 
		if (newBeans[i].color == "Orange") {
			clr = "ff9800";
		} 
		if (newBeans[i].color == "Purple") {
			clr = "c400ff";
		} 
		// if (newBeans[i].size == "Tiny") {
		// 	if (newBeans[i].)
		// }
		h += "<span style='color:#" + clr + "'>" + newBeans[i].name + "</span></br>";
	}

	calculateBeanPrice("Pack");

	changeScene(
		"All those beans! You got:</br>" + h,
		"beanRandom"
	);
	createGoButton("Cool beans!","beanRandom",goBeanShop);
}

function rerollBeanPrices() {
	calculateBeanPrice("Tiny");
	calculateBeanPrice("Average");
	calculateBeanPrice("Huge");
	calculateBeanPrice("Pack");
	upgradeAnimation("Maybe you can afford it now?","beanHuge",goBeanShop);
}

function goIntroduceBeanShop() {
	changeScene(
		"Beanie is happy to see that you finally lit the little sun within you. With that she of course means your core, that you threw an apple into",
		"beanie"
	);
	createGoButton("Hehe","talk",goIntroduceBeanShop2);
}

function goIntroduceBeanShop2() {
	updateState('bBeanShop', true);
	changeScene(
		"Anyways. If your core runs low on stardust, you'll need to refuel it.</br>Beanie explains that she has set up a special shop in your core, where you can buy something to light your fire",
		"beanie"
	);
	createGoButton("Cool!","beanShop",goBeanShop);
}