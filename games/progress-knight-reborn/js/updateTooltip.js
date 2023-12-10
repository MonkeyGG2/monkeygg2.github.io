function updateTooltip(eventObject) {
    //eventObject.currentTarget.id = the button's building id, like "woodenHut"
    // So tooltip ID is merely a template string `tooltip-${eventObject.currentTarget.id}
    let tooltipId = `tooltip-${eventObject.currentTarget.id}`;
    //console.log("Print all function args: " + arguments[0] + arguments[1]);
    //console.log("Tooltip ID: " + tooltipId);
    var tooltipElement = document.querySelector("#" + tooltipId);

    //console.log("Grabbed the tooltip element whose text we're updating!");
    //console.log(tooltipElement);

    //console.log("Here's the text content: ");
    //console.log(tooltipElement.textContent);
    //console.log("Typeof text content: " + typeof tooltipElement.textContent);
    let originalText = tooltipElement.textContent;

    //hard code new cost for wooden hut, for now
    //in future, will grab building cost based off of tooltipId
    //let newBuildingCost = o_townBuildingsContainer.o_woodenHut.costOfNextBuilding;
    let newBuildingCost = o_townBuildingsContainer[`o_${eventObject.currentTarget.id}`].costOfNextBuilding;
    

    /* TEST getNested function from townFunctions.js */
    /* const test = o_townBuildingsContainer;
    console.log("***** testing getNested() *******");
    console.log(getNested(test, 'o_woodenHut', 'id'));
    console.log(test[`o_${eventObject.currentTarget.id}`]); */

    //console.log(`New building cost: ${newBuildingCost}`);
    //console.log(`Searching ${tooltipId} for the span that wraps building cost...`);
    let buildingID = tooltipId.replace('tooltip-', '');
    let coinSpanId = `#coins-${buildingID}`;
    //console.log(`Coin span id: ${coinSpanId}`);
    let coinSpan = document.querySelector(coinSpanId);
    //console.log(`Coin span element: ${coinSpan}`);
    //console.log(`Coin span text content: ${coinSpan.textContent}`);
    //console.log("Replacing coin value with formatted building cost...");
    formatCoins(newBuildingCost, coinSpan);

}