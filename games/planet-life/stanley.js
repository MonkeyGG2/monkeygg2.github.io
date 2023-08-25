function goMeetStanley() {

	updateState('bStanley', true);
	changeScene(
		"There is a bright little star at the center of the solar system.</br>But upon closer inspection you discover that he is not so bright after all. His name is Stanley The Star and he is drooling while he tries to pronounce it. You become friends immediately!",
		"stanley"
	);
	createGoButton("Hey Stanley!","talk",goMeetStanley2);
}

function goMeetStanley2() {
	playSound(soundEffect.stanley);
	changeScene(
		"Stanley is smiling at you. Slowly he pronounces Staanleeeey. He hands you something..",
		"stanley"
	);
	createGoButton("What is it Stanley?","talk",goMeetStanley3);
}

function goMeetStanley3() {
	changeScene(
		"It's a fistful of fresh stardust! Thanks Stanley",
		"stardust"
	);
	createGoButton("Thank you Stanley!","talk",goMeetStanley4);
}

function goMeetStanley4() {
	updateState('bStardust', state.bStardust + 50);
	changeScene(
		"Stanley winks at you slowly. There's more where that came from.</br>Maybe you should check back with him later?",
		"stanley"
	);
	createGoButton("See you later Stanley","talk",goNewGalaxy);
}

function goStanley() {
	playSound(soundEffect.stanley);
	changeScene(
		"Stanley is getting a little dizzy seeing the whole solar system spinning around him. Then he giggles and everything is fine.</br>He has gathered <span style='color:#00fff7'>" + state.bStanleyStardust + " stardust</span> for you",
		"stanley",
		"goStanley"
	);
	createGoButton("Back","burgulon",goNewGalaxy);
	if (state.bStanleyStardust > 0) {
		createGoButton("Get " + state.bStanleyStardust + " stardust from Stanley","stardust",goStardustStanley);
	}
}

function goStardustStanley() {
	changeScene(
		"Stanley hands you <span style='color:#00fff7'>" + state.bStanleyStardust + " stardust.</span></br>He laughs with joy. Nothing makes him happier than helping out his friends",
		"stanley"
	);
	createGoButton("Thanks Stanley!","talk",goStanley);
	updateState('bStardust', state.bStardust + state.bStanleyStardust);
	updateState('bStanleyStardust', 0);
}