var audioSettings = {
	meiThresholdComplete: false,
	isMusicMuted: false,
	isSFXMuted: false,
	shouldPlayMusic: false,
	isBattleMusic: false,
	sfxPlayers: null,
	musicPlayer: null,
	battlePlayer: null,
};

// map sounds to files (filename minus directory and .mp3)
var soundEffect = {
	slotMachine: "InsertCoin",
	win: "Win",
	loose: "Lose",
	buy: "Purchase",
	explosion: "Explosion",
	click: "pop-low",
	cheer: "Cheer",
	cry: "Cry",
	derek: "Derek",
	beating: "Arrr",
	beating2: "Arrr2",
	beating3: "Arrr3",
	beating4: "Arrr4",
	beating5: "Arrr5",
	punch1: "Punch1",
	punch2: "Punch2",
	punch3: "Punch3",
	punch4: "Punch1",
	text: "5",
	burger: "Burger",
	worm: "Worm",
	wormHole: "Wormhole",
	sven: "Sven",
	burgulon: "Burgulon",
	wifyHello: "WifyHello",
	wifyWrong: "WifyWrong",
	wifyCorrect: "WifyCorrect",
	fart: "Fart",
	ghost: "Ghost",
	heal: "Heal",
	potion: "Potion",
	thirsty: "Thirsty",
	vomit: "Vomit",
	doorOfRegret: "DoorOfRegret",
	party: "Party",
	hi: "Hi",
	baby: "Baby",
	babyCry: "BabyCry",
	ding: "Ding",
	heavy: "Heavy",
	house: "House",
	jack: "Jack",
	jazz: "Jazz",
	jerkSquad: "JerkSquad",
	shock: "Shock",
	stanley: "Stanley",
	tadaa: "Tadaa",
	techno: "Techno",
	canOpen: "CanOpen",
	core: "Core",
	beanie: "Beanie",
	mouladin: "Mouladin",
	slopnax: "Slopnax",
	bentLords: "BentLords",
	technoLow: "TechnoLow",
	mayonada: "Mayonada",
};

function loadAudioState() {
	audioSettings.isSFXMuted = state.soundMuted;
	audioSettings.isMusicMuted = state.musicMuted;
}

function playSound(filename) {
	if (audioSettings.isSFXMuted) { return; }
	// First interaction with DOM has not yet happened
	if (!audioSettings.meiThresholdComplete) { return; }

	if (audioSettings.sfxPlayers === null) {
		audioSettings.sfxPlayers = {};
		for (var key in soundEffect) {
			if (soundEffect.hasOwnProperty(key)) {
				let value = soundEffect[key];
				audioSettings.sfxPlayers[value] = new Audio("audio/" + value + ".mp3");
			}
		}
	}

	audioSettings.sfxPlayers[filename].play();
}

function playBattleMusic() {
	if (audioSettings.isMusicMuted) { return; }
	if (!audioSettings.shouldPlayMusic) { return; }
	// First interaction with DOM has not yet happened
	if (!audioSettings.meiThresholdComplete) { return; }

	audioSettings.isBattleMusic = true;

	if (audioSettings.battlePlayer === null) {
		audioSettings.battlePlayer = new Audio("audio/Honk_DereksTheme.mp3");

		audioSettings.battlePlayer.addEventListener("ended", function () {
			if (audioSettings.isMusicMuted || !audioSettings.isBattleMusic) { return; }
			audioSettings.battlePlayer.currentTime = 0;
			audioSettings.battlePlayer.play();
		});

	}

	if (audioSettings.musicPlayer !== null) {
		audioSettings.musicPlayer.pause();
	}

	if (audioSettings.battlePlayer !== null) {
		audioSettings.battlePlayer.play();
	}
}

function playMusic() {
	if (audioSettings.isMusicMuted) { return; }
	if (!audioSettings.shouldPlayMusic) { return; }
	// First interaction with DOM has not yet happened
	if (!audioSettings.meiThresholdComplete) { return; }

	audioSettings.isBattleMusic = false;

	if (audioSettings.musicPlayer === null) {
		audioSettings.musicPlayer = new Audio("audio/rumsang_v2.mp3");;

		audioSettings.musicPlayer.addEventListener("ended", function () {
			if (audioSettings.isMusicMuted || audioSettings.isBattleMusic) { return; }
			audioSettings.musicPlayer.currentTime = 0;
			audioSettings.musicPlayer.play();
		});
		audioSettings.musicPlayer.play();
	}

	if (audioSettings.battlePlayer !== null) {
		audioSettings.battlePlayer.pause();
	}

	if (audioSettings.musicPlayer !== null) {
		audioSettings.musicPlayer.play();
	}
}

function resetMusic() {
	if (audioSettings.isMusicMuted) { return; }

	if (audioSettings.musicPlayer !== null) {
		audioSettings.musicPlayer.pause();
		audioSettings.musicPlayer.currentTime = 0;
	}

	if (audioSettings.battlePlayer !== null) {
		audioSettings.battlePlayer.pause();
		audioSettings.battlePlayer.currentTime = 0;
	}
}

function muteSound() {
	audioSettings.isSFXMuted = true;
	updateState("soundMuted", true);

	for (var key in audioSettings.sfxPlayers) {
		if (audioSettings.sfxPlayers.hasOwnProperty(key)) {
			audioSettings.sfxPlayers[key].pause();
		}
	}
}

function unMuteSound() {
	audioSettings.isSFXMuted = false;
	updateState("soundMuted", false);
}

function muteMusic() {
	audioSettings.isMusicMuted = true;
	updateState("musicMuted", true);

	if (audioSettings.musicPlayer !== null) {
		audioSettings.musicPlayer.pause();
	}

	if (audioSettings.battlePlayer !== null) {
		audioSettings.battlePlayer.pause();
	}
}

function unMuteMusic() {
	audioSettings.isMusicMuted = false;
	updateState("musicMuted", false);

	playMusic();
}

function playRandomPunchSound() {
	var punches = [soundEffect.punch1,soundEffect.punch2,soundEffect.punch3];
	var chosenPunch = Math.floor(Math.random() * punches.length);
	playSound(punches[chosenPunch]);
}

function playRandomDerekSound() {
	var punches = [soundEffect.beating,soundEffect.beating2,soundEffect.beating3,soundEffect.beating4,soundEffect.beating5];
	var chosenPunch = Math.floor(Math.random() * punches.length);
	playSound(punches[chosenPunch]);
}
