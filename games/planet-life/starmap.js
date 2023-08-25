function loc(navn,state,gotoFunction,gotoText,gotoImage) {
	this.navn = navn;
	this.state = state;
	this.gotoFunction = gotoFunction;
	this.gotoText = gotoText;
	this.gotoImage = gotoImage;
}

var loc1 = new loc("derek","hidden",goFreezer,"You found a freezer floating in space!","freezer");
var loc3 = new loc("wormhole","hidden",goApple,"There's a red dot in the distance","tinyApple");
var loc2 = new loc("planetud","discoverable",goPlanetud,"You found something very stupid looking","planetud");

locations.push(loc1,loc2,loc3);

function useStarmap() {
	changeScene("You bought a very mystical starmap. Attempt to read it?","starmap","starmap");
	createButton("Oh yeah!",discoverNewPlace);
}

function discoverNewPlace() {
	var nr = state.starmapNr;
	changeScene(locations[nr].gotoText,locations[nr].gotoImage,"transitioning");
	createGoButton("Check it out",locations[nr].gotoImage,locations[nr].gotoFunction);
	updateState("starmapNr", state.starmapNr + 1);
}
