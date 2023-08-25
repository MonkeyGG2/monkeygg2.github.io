function goFriendHouse() {
	changeBackground("BG_FriendHouse");
	
	if (hasAnyFriends()) {
		var friendsText;
		if (state.friendsLost) {
			friendsText = "Remouladin stole all your friends. He must have had a bad childhood or something like that";
		} else {
			friendsText = "You don't have any friends yet.. Sad. Very sad";
		}
		changeScene(friendsText,"crawlerHouse","friendHouse");			
		createGoButton("Back","newSurface",checkWhat);
	} else {
		changeScene("You have some friends!","crawlerHouse","friendHouse");	
		createGoButton("Back","newSurface",checkWhat);
		for (var i = 0; i < state.friends.length; i++) {
			if (state.friends[i].found) {
				createGoButton(state.friends[i].name,state.friends[i].image,goFriend,state.friends[i]);
			}
		}
	}
}

function hasAnyFriends() {
	for (var i = 0; i < state.friends.length; i++) {
		if (state.friends[i].found == true) {
			return false;
		}
	}
	return true;
}

function goFriend(friend) {

	changeScene(friend.text,friend.image,"goFriend");
	createGoButton("Back","crawlerHouse",goFriendHouse);
	createGoButton("Talk","talk",goFriendTalk,friend);

	//Go back to Burgulon
	if (friend == state.friends[1] && state.bBurgulonUnlocked) {
		createGoButton("Remember Burgulon","burgulon",goRememberBurgulon);
	}

	//Sweatson cheat
	if (friend == state.friends[1]) {
		if (state.tGamesCompleted < 1) {
			sweatsonCheatCount++;
		}
	} else {
		sweatsonCheatCount = 0;
	}
	if (sweatsonCheatCount >= 5 && state.tGamesCompleted < 1) {
		changeScene(
			"Sweatson is sweating bullets. He asks you if you really want to just skip a lot of this epic story to reach the last chapter?</br>I would do it if I was you",
			"sweatson"
		);
		createGoButton("No way!","talk",goFriendHouse);
		createGoButton("I would do it too","burgulon",goSweatsonCheatCheck);
		sweatsonCheatCount = 0;
	}

}

function goSweatsonCheatCheck() {
	changeScene(
		"It's cool that you are eager to go meet Burgulon, but you should be aware that you can't go back to the planet for a while",
		"sweatson"
	);
	createGoButton("I'll stay here","talk",goFriendHouse);
	createGoButton("That's fine. Let's go!","burgulon",goEnterWormholeAgain)
}

function goRememberBurgulon() {
	changeScene(
		"Sweatson reminds how crazy it was being a robot planet. He can take you back there for a while if you want?",
		"sweatson"
	);
	createGoButton("Maybe later","planet",goFriend,state.friends[1]);
	createGoButton("That would be nice","burgulon",goBackToBurgulon);
}

function goBackToBurgulon() {
	changeBackground("BG_BeanieImagination");
	updateState('burgulonTime', true);
	goSweatson();
}

function findFriend(friend) {
	if (friend.foundBy == "derek") {
		document.getElementById("dungeonLevel").innerHTML = "";
		changeScene(friend.meetText,"derek","meetFriendDungeon");
	} else {
		changeScene(friend.meetText,"burger","meetFriendBurger");
	}
	createGoButton(friend.buttonText,friend.image,meetFriend,friend);
}

function meetFriend(friend) {
	changeScene(friend.findText,friend.image,"meetFriend");
	createButton("Get new friend",getNewFriend,friend);
}

function getNewFriend(friend) {
	updateState(friend.effectRes,findResourcePS(friend.effectRes2) + friend.effectValue);
	if (state.friendHousePrice[4]) {
		changeScene(friend.name + " went to your friend house. Go see what he is working on",friend.image,"");
	} else {
		changeScene(friend.name + " is now your friend. But you don't have a friend house, so he is just roaming around on your surface, until you build one",friend.image,"");
	}
	if (friend.foundBy == "derek") {
		createButton("Ok",goDungeonDebrief);
	} else {
		createButton("Ok",goRoot);
	}
}

function getAllTheFriends() {
	var allTheFriends = [friendMeltyface,friendSweatson,friendJohn,friendJuicosaurus,friendCocoGhost,friendKimCumber];
	for (var i = 0; i < allTheFriends.length; i++) {
		getNewFriend(allTheFriends[i]);
	}
	var newFriends = state.friends;
	for (var i = 0; i < newFriends.length; i++) {
		newFriends[i].found = true;
	}
	updateState('friends',newFriends);	
	updateState('wormFound',true);
}

function getNumberOfFriends() {
	var number = 0;
	for (var i = 0; i < state.friends.length; i++) {
		if (state.friends[i].found) {
			number++;
		}
	}
	return number;
}

var meltyface = {
	name: "Meltyface",
	image: "meltyFace",
	introText: "Meltyface is dripping on you.<br/>",
	talks: [
		"You slip in the melted ice cream on the floor.",
		"You try to talk to Meltyface, but you can't hear anything over the constant dripping.",
		"He tells you about the other night where Derek tried to eat his face off. But Derek slipped and fell."
	],
	outroText: "<br/>Meltyface doesn't seem to notice that he is melting"
}

var sweatson = {
	name: "Sweatson",
	image: "sweatson",
	introText: "Sweatson is sweating bullets.<br/>",
	talks: [
		"You remember something about that dogs can't sweat, and that's why they make that insanse panting noise. Somehow you don't believe that anymore.",
		"He tries to fetch something for you, but is too exhausted, and takes a shower instead.",
		"You realize that he's a talking dog, but he talks in a language that you don't understand. Typically!",
		"He says: Jeg har det simpelthen bare så varmt. Kan du ikke hente en klud til mig? You don't get a word of it.",
		"He says: Jeg spiste engang en hel skål slik. Det smagte af pandekager. You pet him and pretend you understand.",
		"He says: Hey skipper! Stikker du mig ikke en kold bajer? Jeg kunne dælme også godt spise en is nu hvor du er i gang. You wonder if he is a talking dog, or he is just making strange noises?",
		"He says: Lort i lommen er bedre end ost med kommen. You are sure that those were wise words.",
		"He says: Årh, jeg glæder mig til at komme i byen i aften. You have an urge to ask him why, but you don't want to start an argument."
	],
	outroText: "<br/>He attempts to bark, but accidentally swallows some sweat"
}

var john = {
	name: "John",
	image: "john",
	introText: "You try not to stare directly at John.</br>",
	talks: [
		"Through a scary vision he shows you a flash from his past. He used to work as a travelling salesman.. He used to be pretty good at that.",
		"He went to school with this Stupid Looking Planet, who was quite shy. They hung out quite a bit then, but lost touch after school.",
		"He tells you that he used to work in this co-working space, but got thrown out because he was on the phone constantly. He knows that the real reason why, is that he was haunting everybody's dreams.",
	],
	outroText: "<br/>You are too unnerved to continue the conversation"
}

var juicosaurus = {
	name: "Juicosaurus",
	image: "juicosaurus",
	introText: "Juicosaurus is making a gurgling roar.<br/>",
	talks: [
		"He tells you about his fellow juicosauruses. It's amazing that they managed to get extinct so quickly after their world was created.",
		"He fends off a wild crowd of archaeologists.",
		"This is the story of how he stumbled on a dungeon, and fell down in it. The jerks down there took care of him and raised him as their own.. In a jerkly fashion of course.",
		"He explains that jerks aren't actually that bad. Derek punches him hard in the face before he can finish the sentence."
	],
	outroText: "<br/>There's juice everywhere"		
}

var cocoGhost = {
	name: "Coco ghost",
	image: "cocoGhost",
	introText: "You are feeling a cold chill in Coco ghosts presence.<br/>",
	talks: [
		"He makes you a warm cup of coffee.",
		"Actually he was sent here to haunt you, but he seems to have forgotten why, so now you are getting along just fine.",
		"You play a game of Crazy Eights, while eating some biscuits.",
		"He tells you about life in the dungeons.. It was great! But his holiday visa ran out, so he had to leave."
	],
	outroText: "<br/>He passes through a wall just to make a point"
}

var kimCumber = {
	name: "Kim Cumber",
	image: "kimCumber",
	introText: "You are afraid of making a fool of yourself in front of Kim.<br/>",
	talks: [
		"He tells you something amazing about himself, without even bragging. He's so cool!",
		"OMG OMG OMG!",
		"You make a fool of yourself.",
		"He shows you a bruise he got from a fight. He tells you that the other guy also got a bruise.. A way bigger bruise.",
		"He tells you that you need to follow @3DCrede on twitter if you want to be as cool as him.",
	],
	outroText: "<br/>Kim peels some skin off for his G&T"
}

var bobBottle = {
	name: "Bob the Bottle",
	image: "bobBottle",
	introText: "Bob the Bottle is trying not to peel his face label off.</br>",
	talks: [
		"He tries to teach you how to juggle with knifes, but you can't really get the hang of it.",
		"He cries a little about the loss of his brother.. Their parents always warned them not to end up as a message in a bottle.",
		"You blow his cap off and it makes that funny sound that bottles make when you blow on them.",
		"He tells you that he was once a wonderful lager beer. Once he had served his duty, him and his brother decided to become adventurers.",
		"He tells you about all the cool places him and Balthazar visited.. They were looking for the ultimate Endless Dungeon, but they sadly never got that far.",
		"He always knew that he was going to settle down as an entertainer. But he always thought that he would be doing it together with his brother."
	],
	outroText: "<br/>Bob rolls away"
}

var countCandy = {
	name: "Count Candy",
	image: "countCandy",
	introText: "Count Candy is using complex courtesies to confuse you.<br/>",
	talks: [
		"He gives you some advice on how trade ghosts. Sell when it's high, and buy when it's low.. Or was it the other way around?",
		"He wants to help you with your tax papers, but it's all just a scam. He tries to steal your ghosts, but fails.",
		"He shows you a picture of his old mansion. You can tell that he used to be quite well connected.",
		"Derek tries to eat him, but you shoo him off with an old newspaper.",
		"He tells you about his plan to find the Endless Dungeon, and convert it into a theme park for Derekulians. But he never found it, and instead got lost in the monster dungeons."
	],
	outroText: "<br/>Count Candy fiddles with his wrapping"	
}

var broccula = {
	name: "Broccula",
	image: "broccoliWorkerKevin",
	introText: "Broccula is working her lips constantly, even when not talking.<br/>",
	talks: [
		"She tells you that this huge space broccoli is her home world. All her friends moved out in space, but she chose to stay here and become a bureaucrat.",
		"She corrects her glasses, then remembers that she doesn't wear glasses.",
		"She tells you about the construction of the Broccoli world, and how it dragged out. Apparently new dungeons regulations, and construction systems had to be in place, before the construction could go on.",
		"She tries to tell a bureaucratic joke, but nobody laughs.",
		"She tells you about the button crisis before the opening of the Broccoli world. Apparently Kevin swooped in and fixed the ancient problem with two lines of code. You look at her T-shirt, and conclude that she's obviously a big fan.",
		"She looks at the time, but immediately looks away again.",
		"She tells you about all the state issues that haunted the debugging progress.. It led to a flood of false bug reports. She stares grimly in to space, recalling the horrors.",
		"She shows you an ugly picture of the game you're playing. She tells you that it used to look pretty shabby, but Michael had some unrealistic standards of beauty that he helped push on the project.",
		"She's fixing her hair, but gives up when she realizes that it's broccoli and not hair.",
		"She shows you a photograph of an exhausted man. She tells you that this game never would have made it to your device if it wasn't for Kristian.",
		"She hands you a pile of papers. It's full of great reviews and heart warming comments. You suddenly understand that the only reason you exist is because if them, and you get a little confused by the metaness of it all."
	],
	outroText: "<br/>Broccula drops a lot of important papers on the ground"
}

var friendTalk = [meltyface,sweatson,john,juicosaurus,cocoGhost,kimCumber,bobBottle,countCandy,broccula];

function findFriendTalk(name) {
	for (var i = 0; i < friendTalk.length; i++) {
		if (name == friendTalk[i].name) {
			return i;
		}
	}
}

function goFriendTalk(friend) {
	var f = findFriendTalk(friend.name);
	if (friendTalkCount >= friendTalk[f].talks.length) {
		friendTalkCount = 0;
	}
	var h =  friendTalk[f].introText;
	h += friendTalk[f].talks[friendTalkCount];
	h += friendTalk[f].outroText;
	friendTalkCount++;
	changeScene(h,friendTalk[f].image,"goFriendTalk");
	createGoButton("Back",friendTalk[f].image,goFriend,friend);
	createGoButton("Talk more","talk",goFriendTalk,friend);
}