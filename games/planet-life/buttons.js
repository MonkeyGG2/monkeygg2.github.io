
var movedInButton = false;

function createIconButton(headline,image,thisID,buttonText,clr,disabled,buttonsDiv,fnct,parameter1,parameter2,parameter3) {
	var fullDiv = document.createElement('div');
	fullDiv.className = "fullWidth";
	if (document.getElementById("full" + thisID)) {
		// ATTENTION! This solution is highly irresponsible and might cause problems in the future!!!
		fullDiv.id = "full" + thisID + Math.random();
	} else {
		fullDiv.id = "full" + thisID;
	}
	if (buttonsDiv == "buttons") {
		fullDiv.style.display = "none"; 
	} else {
		fullDiv.id += "Settings";
	}
	curButtons.push(fullDiv.id);
	fullDiv.style.marginBottom = "10px";
	var head = document.createElement('h1');
	head.innerHTML = headline;
	head.style.color = clr;
	head.style.marginLeft = "15px";
	head.style.marginTop = "20px";
	head.style.marginRight = "10px";
	if (image) {
		var img = document.createElement('img');
		img.className = "buttonImg";
		img.src = image;
		img.id = "img" + thisID;
		img.style.marginRight = "20px";
		img.style.float = "left";
	}
	var backgroundDiv = document.createElement('div');
	var clicked = false;
	if (disabled) {
		backgroundDiv.className = "buildBackground";
	} else {
		backgroundDiv.className = "buttonBackground";
		// fullDiv.addEventListener("touchstart",down);
		// fullDiv.addEventListener("mousedown",down);
		// fullDiv.addEventListener("touchend",up);
		// fullDiv.addEventListener("mouseup",up);
		// fullDiv.addEventListener("touchmove",move);
		// fullDiv.addEventListener("mouseleave",move);
		fullDiv.addEventListener("click",up);
	}
	function down(e) {
		if (e.srcElement.innerText == "Sound (off)" || e.srcElement.innerText == "Sound (on)" || e.srcElement.innerText == "Music (off)" || e.srcElement.innerText == "Music (on)") {
			e.preventDefault();
		}
		backgroundDiv.className = "buttonBackgroundPressed";
		fullDiv.style.transform = "translateY(4px)";
		playSound(soundEffect.click);
		movedInButton = false;
		clicked = true;
	}
	function up(e) {
		//e.preventDefault();
		if (!movedInButton) {
			if (fnct != null) { fnct(parameter1,parameter2,parameter3); }
		}
		resetButton();
	}
	function move(e) {
		//e.preventDefault();
		movedInButton = true;
		if (clicked) {
			resetButton();
		}
	}
	function resetButton() {
		backgroundDiv.className = "buttonBackground";
		fullDiv.style.transform = "translateY(-1px)";
		clicked = false;
	}
	if (buttonsDiv == "buttons") {
		document.getElementById("buttons").appendChild(fullDiv);
	} else {
		document.getElementById("settingsButtons").appendChild(fullDiv);
	}
	if (image) {
		document.getElementById(fullDiv.id).appendChild(img);
	}
	document.getElementById(fullDiv.id).appendChild(head);
	document.getElementById(fullDiv.id).appendChild(backgroundDiv);
}

function createGoButton(headline,image,fnct,parameter,parameter2) {
	createIconButton(headline,"images/handling/" + image + ".gif",headline + "But","go here","#FFFFFF",false,"buttons",fnct,parameter,parameter2);
}

function createSettingsIconButton(headline,image,fnct,parameter) {
	var id = headline.split(' ').join('_') + 'But';
	createIconButton(headline,"images/handling/" + image + ".gif",id,"go here","#FFFFFF",false,"settingsButtons",fnct,parameter);
}

function createSettingsButton(text,fnct,parameter) {
	createSmallIconButton(text,"",text + "But",false,"settings",fnct,parameter);
}

function createSettingsImportButton(headline,image,fnct,parameter) {
	var id = headline.split(' ').join('_') + 'But';
	createIconButton(headline,"images/handling/" + image + ".gif",id,"go here","#FFFFFF",false,"settingsButtons",() => { fileSelector.click(); },parameter);
	
	var fileSelector = document.createElement('input');
	fileSelector.setAttribute('type', 'file');
	fileSelector.setAttribute('accept', '.planet');
	fileSelector.onchange = fnct;
}

function createBuildButton(headline,image,text,fnct,thisID,buttonText,price,parameter1) {
	var fullDiv = document.createElement('div');
	fullDiv.className = "fullWidth";
	fullDiv.id = "full" + thisID;
	fullDiv.style.display = "none";
	curButtons.push(fullDiv.id);
	fullDiv.style.marginBottom = "10px";
	var img = document.createElement('img');
	img.src = "images/handling/" + image + ".gif";
	img.className = "buildButtonImage";
	img.style.marginRight = "20px";
	var head = document.createElement('h1');
	head.innerHTML = headline;
	head.className = "buildButtonHeadline";
	var iconDiv = document.createElement('div');
	iconDiv.className = "resIconDiv";
	iconDiv.style.display = "inline-block";
	iconDiv.id = "icon" + thisID;
	iconDiv.style.marginLeft = "10px";
	iconDiv.style.width = "100%";
	var fullDiv2 = document.createElement('div');
	fullDiv2.className = "fullWidth";
	fullDiv2.id =  "full2" + thisID;
	fullDiv2.style.marginLeft = "10px";
	var description = document.createElement('p');
	description.className = "buildButtonText";
	description.id = thisID + "-buildButtonDescription";
	description.innerHTML = text;
	description.style.marginRight = "20px";
	var but = document.createElement('button');
	but.id = thisID;
	but.className = "buildButton";
	but.innerHTML = buttonText;
	but.disabled = true;
	var clicked = false;
	// fullDiv.addEventListener("touchstart",down);
	// fullDiv.addEventListener("mousedown",down);
	// fullDiv.addEventListener("touchend",up);
	// fullDiv.addEventListener("mouseup",up);
	// fullDiv.addEventListener("touchmove",move);
	// fullDiv.addEventListener("mouseleave",move);
	fullDiv.addEventListener("click",up);
	function down(e) {
		//e.preventDefault();
		if (!but.disabled) {
			but.className = "buildButtonActive";
			clicked = true;
		} 
		playSound(soundEffect.click);
	 	movedInButton = false;
	}
	function up(e) {
		e.preventDefault();
		if (!movedInButton) {
			if (!but.disabled) {
				fnct(parameter1);	
			}	
		}
		resetButton();
	}
	function move(e) {
		//e.preventDefault();
		movedInButton = true;
		if (clicked) {
			resetButton();
		}
	}
	function resetButton() {
		if (!but.disabled) {
			but.className = "buildButton";
			clicked = false;
		}
	}
	
	function showResource(name, amount) {
		var img = document.createElement('img');
		img.src = "images/icons/" + name + ".png";
		img.className = "resIcon";
		img.style.display = (amount == 0 ? "none" : "inline-block");
		
		var p = document.createElement('p');
		p.className = "buildButtonText";
		p.style.display = (amount == 0 ? "none" : "inline-block");
		
		p.innerHTML = amount.toLocaleString();
		
		document.getElementById("icon" + thisID).appendChild(img);
		document.getElementById("icon" + thisID).appendChild(p);
	}
	
	var backgroundDiv = document.createElement('div');
	backgroundDiv.className = "buildBackground";
	var br = document.createElement("br");
	var br2 = document.createElement("br");
	document.getElementById("buttons").appendChild(fullDiv);
	document.getElementById("full" + thisID).appendChild(img);
	document.getElementById("full" + thisID).appendChild(head);
	document.getElementById("full" + thisID).appendChild(iconDiv);
	document.getElementById("full" + thisID).appendChild(fullDiv2);
	document.getElementById("full" + thisID).appendChild(backgroundDiv);
	document.getElementById("full2" + thisID).appendChild(description);
	document.getElementById("icon" + thisID).appendChild(but);
	
	showResource("wood", price[0]);
	showResource("gold", price[1]);
	showResource("coco", price[2]);
	showResource("stardust", price[3]);
	
	document.getElementById("buttons").appendChild(br);
	document.getElementById("buttons").appendChild(br2);
}

function createTimeBuildButton(headline,image,text,fnct,thisID,buttonText,price,parameter1,parameter2) {
	var fullDiv = document.createElement('div');
	fullDiv.className = "fullWidth";
	fullDiv.id = "full" + thisID;
	fullDiv.style.display = "none";
	curButtons.push(fullDiv.id);
	fullDiv.style.marginBottom = "10px";
	var img = document.createElement('img');
	img.src = "images/handling/" + image + ".gif";
	img.className = "buildButtonImage";
	img.style.marginRight = "20px";
	var head = document.createElement('h1');
	head.innerHTML = headline;
	head.className = "buildButtonHeadline";
	var iconDiv = document.createElement('div');
	iconDiv.className = "resIconDiv";
	iconDiv.style.display = "inline-block";
	iconDiv.id = "icon" + thisID;
	iconDiv.style.marginLeft = "10px";
	iconDiv.style.width = "100%";
	var fullDiv2 = document.createElement('div');
	fullDiv2.className = "fullWidth";
	fullDiv2.id =  "full2" + thisID;
	fullDiv2.style.marginLeft = "10px";
	var description = document.createElement('p');
	description.className = "buildButtonText";
	description.id = thisID + "-buildButtonDescription";
	description.innerHTML = text;
	description.style.marginRight = "20px";
	var but = document.createElement('button');
	but.id = thisID;
	but.className = "buildButton";
	but.innerHTML = buttonText;
	but.disabled = true;
	var clicked = false;
	// fullDiv.addEventListener("touchstart",down);
	// fullDiv.addEventListener("mousedown",down);
	// fullDiv.addEventListener("touchend",up);
	// fullDiv.addEventListener("mouseup",up);
	// fullDiv.addEventListener("touchmove",move);
	// fullDiv.addEventListener("mouseleave",move);
	fullDiv.addEventListener("click",up);
	function down(e) {
		//e.preventDefault();
		if (!but.disabled) {
			but.className = "buildButtonActive";
			clicked = true;
		} 
		playSound(soundEffect.click);
	 	movedInButton = false;
	}
	function up(e) {
		e.preventDefault();
		if (!movedInButton) {
			if (!but.disabled) {
				fnct(parameter1,parameter2);	
			}	
		}
		resetButton();
	}
	function move(e) {
		//e.preventDefault();
		movedInButton = true;
		if (clicked) {
			resetButton();
		}
	}
	function resetButton() {
		if (!but.disabled) {
			but.className = "buildButton";
			clicked = false;
		}
	}
	
	function showResource(name, amount) {
		var img = document.createElement('img');
		img.src = "images/icons/" + name + ".gif";
		img.className = "resIcon";
		img.style.display = (amount == 0 ? "none" : "inline-block");
		
		var p = document.createElement('p');
		p.className = "buildButtonText";
		p.style.display = (amount == 0 ? "none" : "inline-block");
		
		p.innerHTML = amount.toLocaleString();
		
		document.getElementById("icon" + thisID).appendChild(img);
		document.getElementById("icon" + thisID).appendChild(p);
	}
	
	var backgroundDiv = document.createElement('div');
	backgroundDiv.className = "buildBackground";
	var br = document.createElement("br");
	var br2 = document.createElement("br");
	document.getElementById("buttons").appendChild(fullDiv);
	document.getElementById("full" + thisID).appendChild(img);
	document.getElementById("full" + thisID).appendChild(head);
	document.getElementById("full" + thisID).appendChild(iconDiv);
	document.getElementById("full" + thisID).appendChild(fullDiv2);
	document.getElementById("full" + thisID).appendChild(backgroundDiv);
	document.getElementById("full2" + thisID).appendChild(description);
	document.getElementById("icon" + thisID).appendChild(but);
	
	showResource("wormCube", price[0]);
	
	document.getElementById("buttons").appendChild(br);
	document.getElementById("buttons").appendChild(br2);
}

function createMenuButton(headline,image,text,fnct,thisID,buttonText,parameter1) {
	var fullDiv = document.createElement('div');
	fullDiv.className = "fullWidth";
	fullDiv.id = "full" + thisID;
	fullDiv.style.display = "none";
	curButtons.push(fullDiv.id);
	fullDiv.style.marginBottom = "10px";
	var img = document.createElement('img');
	img.src = "images/handling/" + image + ".gif";
	img.className = "buildButtonImageFull";
	// img.style.marginRight = "5px";
	var head = document.createElement('h1');
	head.innerHTML = headline;
	head.className = "menuButtonHeadline";
	var iconDiv = document.createElement('div');
	iconDiv.className = "resIconDiv";
	iconDiv.style.display = "inline-block";
	iconDiv.id = "icon" + thisID;
	iconDiv.style.marginLeft = "10px";
	iconDiv.style.width = "100%";
	var fullDiv2 = document.createElement('div');
	fullDiv2.className = "fullWidth";
	fullDiv2.id =  "full2" + thisID;
	fullDiv2.style.marginLeft = "10px";
	var description = document.createElement('p');
	description.className = "buildButtonText";
	description.id = thisID + "-buildButtonDescription";
	description.innerHTML = text;
	description.style.marginRight = "20px";
	var but = document.createElement('button');
	but.id = thisID;
	but.className = "buildButton";
	but.innerHTML = buttonText;
	// but.disabled = true;
	var clicked = false;
	// fullDiv.addEventListener("touchstart",down);
	// fullDiv.addEventListener("mousedown",down);
	// fullDiv.addEventListener("touchend",up);
	// fullDiv.addEventListener("mouseup",up);
	// fullDiv.addEventListener("touchmove",move);
	// fullDiv.addEventListener("mouseleave",move);
	fullDiv.addEventListener("click",up);
	function down(e) {
		//e.preventDefault();
			but.className = "buildButtonActive";
			clicked = true;
		playSound(soundEffect.click);
	 	movedInButton = false;
	}
	function up(e) {
		e.preventDefault();
		if (!movedInButton) {
				fnct(parameter1);	
		}
		resetButton();
	}
	function move(e) {
		//e.preventDefault();
		movedInButton = true;
		if (clicked) {
			resetButton();
		}
	}
	function resetButton() {
			but.className = "buildButton";
			clicked = false;
	}
	
	// function showResource(name, amount) {
	// 	var img = document.createElement('img');
	// 	img.src = "images/icons/" + name + ".png";
	// 	img.className = "resIcon";
	// 	img.style.display = (amount == 0 ? "none" : "inline-block");
		
	// 	var p = document.createElement('p');
	// 	p.className = "buildButtonText";
	// 	p.style.display = (amount == 0 ? "none" : "inline-block");
		
	// 	p.innerHTML = amount.toLocaleString();
		
	// 	document.getElementById("icon" + thisID).appendChild(img);
	// 	document.getElementById("icon" + thisID).appendChild(p);
	// }
	
	var backgroundDiv = document.createElement('div');
	backgroundDiv.className = "buildBackground";
	var br = document.createElement("br");
	var br2 = document.createElement("br");
	document.getElementById("buttons").appendChild(fullDiv);
	document.getElementById("full" + thisID).appendChild(head);
	document.getElementById("full" + thisID).appendChild(img);
	document.getElementById("full" + thisID).appendChild(iconDiv);
	document.getElementById("full" + thisID).appendChild(fullDiv2);
	document.getElementById("full" + thisID).appendChild(backgroundDiv);
	document.getElementById("full2" + thisID).appendChild(description);
	document.getElementById("icon" + thisID).appendChild(but);
	
	// showResource("wood", price[0]);
	// showResource("gold", price[1]);
	// showResource("coco", price[2]);
	// showResource("stardust", price[3]);
	
	document.getElementById("buttons").appendChild(br);
	document.getElementById("buttons").appendChild(br2);
}

function createSmallBuildButton(text,image,thisID,fnct,parameter,parameter2) {
	var but = document.createElement('button');
	but.id = thisID;
	curButtons.push(but.id);
	but.style.display = "none";
	but.className = "buildButton";
	but.style.width = '100%';
	but.style.padding = '0px';
	but.style.marginBottom = '10px';
	but.disabled = true;
	if (image) {
		var img = document.createElement('img');
		img.src = "images/handling/" + image + ".gif";
		img.className = "smallBuildButtonImage";
	}
	var txt = document.createElement('p');
	txt.innerHTML = text;
	txt.className = 'smallBuildButtonText';
	var clicked = false;
	// but.addEventListener("touchstart",down);
	// but.addEventListener("mousedown",down);
	// but.addEventListener("touchend",up);
	// but.addEventListener("mouseup",up);
	// but.addEventListener("touchmove",move);
	// but.addEventListener("mouseleave",move);
	but.addEventListener("click",up);
	function down(e) {
		//e.preventDefault();
		if (!but.disabled) {
			but.className = "buildButtonActive";
			playSound(soundEffect.click);
		 	movedInButton = false;
		 	clicked = true;
		}
	}
	function up(e) {
		//e.preventDefault();
		if (!but.disabled) {
			if (!movedInButton) {
				fnct(parameter,parameter2);
			}
			resetButton();
		}
	}
	function move(e) {
		//e.preventDefault();
		if (!but.disabled) {
			movedInButton = true;
			if (clicked) {
				resetButton();
			}
		}
	}
	function resetButton() {
		if (!but.disabled) {
			but.className = "buildButton";
			clicked = false;
		}
	}
	document.getElementById("buttons").appendChild(but);
	document.getElementById(thisID).appendChild(img);
	document.getElementById(thisID).appendChild(txt);
}

function createSmallIconButton(headline,image,thisID,disabled,buttonsDiv,fnct,parameter) {
	var fullDiv = document.createElement('div');
	fullDiv.className = "fullWidth";
	fullDiv.id = "full" + thisID;
	if (buttonsDiv != "settings") {
		fullDiv.style.display = "none";
	}
	curButtons.push(fullDiv.id);
	fullDiv.style.marginBottom = "15px";
	var head = document.createElement('h2');
	head.innerHTML = headline;
	head.style.color = "#FFFFFF";
	head.style.marginLeft = "20px";
	head.style.marginTop = "15px";
	head.style.marginRight = "10px";
	if (image) {
		var img = document.createElement('img');
		img.className = "buttonImg";
		img.src = image;
		img.id = "img" + thisID;
		img.style.marginBottom = "5px";
		img.style.marginRight = "20px";
		img.style.float = "left";
	}
	var btn = document.createElement('button');
	btn.id = "button" + thisID;
	if (disabled) {
		btn.disabled = true;
	}
	var clicked = false;
	// fullDiv.addEventListener("touchstart",down);
	// fullDiv.addEventListener("mousedown",down);
	// fullDiv.addEventListener("touchend",up);
	// fullDiv.addEventListener("mouseup",up);
	// fullDiv.addEventListener("touchmove",move);
	// fullDiv.addEventListener("mouseleave",move);
	fullDiv.addEventListener("click",up);
	function down(e) {
		//e.preventDefault();
		backgroundDiv.className = "buttonBackgroundPressed";
		fullDiv.style.transform = "translateY(3px)";
		movedInButton = false;
		clicked = true;
	}
	function up(e) {
		//e.preventDefault();
		playSound(soundEffect.click);
		if (!movedInButton) {
			fnct(parameter);
		}
		resetButton();
	}
	function move(e) {
		//e.preventDefault();
		movedInButton = true;
		if (clicked) {
			resetButton();
		}
	}
	function resetButton() {
		backgroundDiv.className = "buttonBackground";
		fullDiv.style.transform = "translateY(-3px)";	
		clicked = false;	
	}
	var backgroundDiv = document.createElement('div');
	backgroundDiv.className = "buttonBackground";
	if (buttonsDiv == "buttons") {
		document.getElementById("buttons").appendChild(fullDiv);
	} else {
		document.getElementById("settingsButtons").appendChild(fullDiv);
	}
	if (image) {
		document.getElementById("full" + thisID).appendChild(img);
	}
	document.getElementById("full" + thisID).appendChild(head);
	document.getElementById("full" + thisID).appendChild(backgroundDiv);
}

function createButton(text,fnct,parameter) {
	createSmallIconButton(text,"",text + "But",false,"buttons",fnct,parameter);
}

function createTextButton(headline,image,text,fnct,thisID,buttonText,parameter1) {
	var fullDiv = document.createElement('div');
	fullDiv.className = "fullWidth";
	fullDiv.id = "full" + thisID;
	fullDiv.style.display = "none";
	curButtons.push(fullDiv.id);
	fullDiv.style.marginBottom = "10px";
	var img = document.createElement('img');
	img.src = "images/handling/" + image + ".gif";
	img.className = "buildButtonImage";
	img.style.marginRight = "20px";
	var head = document.createElement('h1');
	head.innerHTML = headline;
	head.className = "buildButtonHeadline";
	var iconDiv = document.createElement('div');
	iconDiv.className = "resIconDiv";
	iconDiv.style.display = "inline-block";
	iconDiv.id = "icon" + thisID;
	iconDiv.style.marginLeft = "10px";
	iconDiv.style.width = "100%";
	var fullDiv2 = document.createElement('div');
	fullDiv2.className = "fullWidth";
	fullDiv2.id =  "full2" + thisID;
	fullDiv2.style.marginLeft = "10px";
	var description = document.createElement('p');
	description.className = "buildButtonText";
	description.id = thisID + "-buildButtonDescription";
	description.innerHTML = text;
	description.style.marginRight = "20px";
	var but = document.createElement('button');
	but.id = thisID;
	but.className = "buildButton";
	but.innerHTML = buttonText;
	var clicked = false;
	// fullDiv.addEventListener("touchstart",down);
	// fullDiv.addEventListener("mousedown",down);
	// fullDiv.addEventListener("touchend",up);
	// fullDiv.addEventListener("mouseup",up);
	// fullDiv.addEventListener("touchmove",move);
	// fullDiv.addEventListener("mouseleave",move);
	fullDiv.addEventListener("click",up);
	function down(e) {
		//e.preventDefault();
		if (!but.disabled) {
			but.className = "buildButtonActive";
			clicked = true;
		} 
		playSound(soundEffect.click);
	 	movedInButton = false;
	}
	function up(e) {
		e.preventDefault();
		if (!movedInButton) {
			if (!but.disabled) {
				fnct(parameter1);	
			}	
		}
		resetButton();
	}
	function move(e) {
		//e.preventDefault();
		movedInButton = true;
		if (clicked) {
			resetButton();
		}
	}
	function resetButton() {
		if (!but.disabled) {
			but.className = "buildButton";
			clicked = false;
		}
	}
	var backgroundDiv = document.createElement('div');
	backgroundDiv.className = "buildBackground";
	var br = document.createElement("br");
	var br2 = document.createElement("br");
	document.getElementById("buttons").appendChild(fullDiv);
	document.getElementById("full" + thisID).appendChild(img);
	document.getElementById("full" + thisID).appendChild(head);
	document.getElementById("full" + thisID).appendChild(iconDiv);
	document.getElementById("full" + thisID).appendChild(fullDiv2);
	document.getElementById("full" + thisID).appendChild(backgroundDiv);
	document.getElementById("full2" + thisID).appendChild(description);
	document.getElementById("icon" + thisID).appendChild(but);
	document.getElementById("buttons").appendChild(br);
	document.getElementById("buttons").appendChild(br2);
}