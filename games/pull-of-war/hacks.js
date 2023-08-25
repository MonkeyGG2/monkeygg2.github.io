document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === '3') {
        gold = (parseInt(prompt("How much gold do you want?\nPlease input an integer")));
    }
    else if (e.key.toLowerCase() === '4') {
        territory = (parseInt(prompt("How much territory do you want?\nPlease input an integer")));
    }
    else if (e.key.toLowerCase() === '5') {
        var wall = (parseInt(prompt("What do you want the wall health to be?\nPlease input an integer")));
        wallHealthInitial = wall;
        wallHealth = wall;
    }
    else if (e.key.toLowerCase() === '6') {
        var fence = (parseInt(prompt("What do you want the fence health to be?\nPlease input an integer")));
        fenceHealthInitial = fence;
        fenceHealth = fence;
    }
    else if (e.key.toLowerCase() === '7') {
        manaGain = (parseInt(prompt("How much mana gain do you want\nPlease input an integer")));
    }
    else if (e.key.toLowerCase() === '8') {
        spellCosts = [0, 0];
        alert("Spell Cost made 0!");
    }
});