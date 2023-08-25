function questionElement(text,answers) {
	this.text = text;
	this.answers = answers;
}

function answerElement(text) {
	this.text = text;
	this.owned = false;
}

var WIFYQuestions = [];
var allAnswers = [];
var allAnswerStates = [];

function newQuestion(text,answers,array) {
	var question = new questionElement(text,answers);
	array.push(question);
}

function newAnswer(text) {
	var answer = new answerElement(text) 
	allAnswers.push(answer);
	allAnswerStates.push(false);
}

//ANSWERS

newAnswer("127");
newAnswer("Sven");
newAnswer("Ghosts");
newAnswer("5");
newAnswer("Jerks");
newAnswer("42");
newAnswer("Burger");
newAnswer("Coco");
newAnswer("Stardust");
newAnswer("Remouladin");
newAnswer("Derek");
newAnswer("Planet");
newAnswer("12");
newAnswer("Broccoli");

// WIFY QUESTIONS

newQuestion(
	"Knock knock. Who's there?",
	["Derek","Jerks"],
	WIFYQuestions
);

newQuestion(
	"What makes the world go round?",
	["Ghosts","Jerks","Remouladin"],
	WIFYQuestions
);

newQuestion(
	"What are true friends made of?",
	["Coco","Stardust"],
	WIFYQuestions
);

newQuestion(
	"How many fingers am I holding up?",
	["127"],
	WIFYQuestions
);

newQuestion(
	"What's for dinner?",
	["Broccoli","Burger"],
	WIFYQuestions
);

newQuestion(
	"How many Pan Galactic Gargle Blasters do you need to drink to understand the meaning of life?",
	["42"],
	WIFYQuestions
);

newQuestion(
	"What came first. The jerks or the planet?",
	["Jerks","Planet"],
	WIFYQuestions
);

newQuestion(
	"Who is the reason for this quiz?",
	["Burger"],
	WIFYQuestions
);