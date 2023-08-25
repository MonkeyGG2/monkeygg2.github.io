var original = Runner.prototype.gameOver;
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === '1') {
        if (Runner.prototype.gameOver != original) {
            Runner.prototype.gameOver = original;
            alert("You are no longer immune");
        } else {
            Runner.prototype.gameOver = function() {};
            alert("You are now immune!");
        }
    }
    else if (e.key.toLowerCase() === '2') {
        Runner.instance_.setSpeed(parseInt(prompt("What speed do you want?\nPlease input an integer")));
    }
    else if (e.key.toLowerCase() === '3') {
        Runner.instance_.tRex.setJumpVelocity(parseInt(prompt("What jump height do you want?\n\nPlease input an integer")));
    }
    else if (e.key.toLowerCase() === '4') {
        Runner.instance_.tRex.config.GRAVITY = parseInt(prompt("How much do you want the gravity to be?\n\nPlease input an integer"));
    }
    else if (e.key.toLowerCase() === '5') {
        Runner.instance_.distanceRan = (parseInt(prompt("How much do you want your score to be"))) / Runner.instance_.distanceMeter.config.COEFFICIENT;
    }
    else if (e.key.toLowerCase() === '6') {
        var e = (Runner.instance_.playingIntro); Runner.instance_.playingIntro = !(e); alert(`Set Intro to ${!e}`)
    }
    else if (e.key.toLowerCase() === '7') {
        Runner.instance_.tRex.config.HEIGHT = parseInt(prompt("How tall do you want the dino to be?\n\nPlease input an integer"));
    }
    else if (e.key.toLowerCase() === 'p') {
        alert("Paused - Press OK to unpause");
    }
});