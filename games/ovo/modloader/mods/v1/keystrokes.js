(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    //let runtime = cr_getC2Runtime()




    var editing = false;
    var startingMouseCoords = [];
    var elementMoving = null;
    var elementEditing = null;
    var mouseOverGui = false;
    var scale = 1;
    var customTextNum = 0;

    if (localStorage.getItem('guiSettings') !== null) {
        guiSettings = JSON.parse(localStorage.getItem('guiSettings'));
        for (const [key] of Object.entries(guiSettings)) {
            if (key.startsWith('text') && parseInt(key.substring(4)) > customTextNum) {
                customTextNum = parseInt(key.substring(4))
            }
        }
    }


    var currentMouseCoords = [];

    var keyColors = {
        "up": ["white", "black", "black", "white"],
        "down": ["white", "black", "black", "white"],
        "left": ["white", "black", "black", "white"],
        "right": ["white", "black", "black", "white"],
        "reset": ["white", "black", "black", "black"],
        "control": ["white", "black", "black", "black"]
    }
    var arrows = ["left", "up", "right", "down", "reset", "control"];

    var displayNone = [];

    document.addEventListener('mousemove', (event) => {
        //console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        currentMouseCoords = [event.clientX, event.clientY]
    });


    var guiPreSettings = {
        "pos": {
            "left": 5,
            "top": 5,
            "name": "Position",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "",
            "scale": 1,
            "color": "black",
            "onTextColor": "",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "fps": {
            "left": 5,
            "top": 40,
            "name": "FPS",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "",
            "scale": 1,
            "color": "black",
            "onTextColor": "",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "state": {
            "left": 85,
            "top": 4,
            "name": "State",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "",
            "scale": 1,
            "color": "black",
            "onTextColor": "",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "attempts": {
            "left": 5,
            "top": 75,
            "name": "Attempts",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "",
            "scale": 1,
            "color": "black",
            "onTextColor": "",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "up": {
            "left": 80,
            "top": 40,
            "name": "Up Key",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "black",
            "scale": 1,
            "color": "black",
            "onTextColor": "white",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "🠙",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "left": {
            "left": 50,
            "top": 75,
            "name": "Left Key",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "black",
            "scale": 1,
            "color": "black",
            "onTextColor": "white",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "🠘",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "down": {
            "left": 80,
            "top": 75,
            "name": "Down Key",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "black",
            "scale": 1,
            "color": "black",
            "onTextColor": "white",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "🠛",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "right": {
            "left": 106,
            "top": 75,
            "name": "Right Key",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "black",
            "scale": 1,
            "color": "black",
            "onTextColor": "white",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "🠚",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "speed": {
            "left": 52,
            "top": 40,
            "name": "Speed",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "",
            "scale": 1,
            "color": "black",
            "onTextColor": "",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "reset": {
            "left": 62,
            "top": 40,
            "name": "Reset",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "black",
            "scale": 1,
            "color": "black",
            "onTextColor": "white",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "R",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },
        "control": {
            "left": 300,
            "top": 300,
            "name": "CTRL",
            "border": "2px solid black",
            "backgroundColor": "white",
            "onBgColor": "black",
            "scale": 1,
            "color": "black",
            "onTextColor": "white",
            "opacity": 1,
            "fontFamily": "Retron2000",
            "innerHTML": "CTRL",
            "enabled": true,
            "display": "block",
            "width": 0,
            "height": 0
        },

    }




    let getPlayer = () => {
        return runtime.types_by_index
            .filter(
                (x) =>
                    !!x.animations &&
                    x.animations[0].frames[0].texture_file.includes("collider")
            )[0]
            .instances.filter(
                (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
            )[0];
    }

    let notify = (title, text, image = "./speedrunner.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };

    let isInLevel = () => {
        return runtime.running_layout.name.startsWith("Level")
    };

    let isPaused = () => {
        if (isInLevel()) return runtime.running_layout.layers.find(function (a) {
            return "Pause" === a.name
        }).visible
    };

    let styleMenuButton = (button, left, top) => {
        c = {
            backgroundColor: "#00d26a",
            border: "solid",
            borderColor: "black",
            borderWidth: "2px",
            position: "absolute",
            fontFamily: "Retron2000",
            color: "black",
            fontSize: "10pt",
            cursor: "pointer",
            left: left + "px",
            top: top + "px",
        };
        Object.keys(c).forEach(function (a) {
            button.style[a] = c[a];
        });

        button.innerHTML = "✅";
    }

    let styleMenuInput = (input, left, top, width) => {
        c = {
            backgroundColor: "white",
            border: "solid",
            borderColor: "black",
            borderWidth: "2px",
            position: "absolute",
            fontFamily: "Retron2000",
            color: "black",
            fontSize: "10pt",
            cursor: "text",
            width: width + "px",
            top: top + "px",
            left: left + "px",
        };
        Object.keys(c).forEach(function (a) {
            input.style[a] = c[a];
        });



    }

    let styleMenuText = (textDiv, left, top, text) => {
        c = {
            backgroundColor: "white",
            border: "none",
            fontFamily: "Retron2000",
            position: "absolute",
            top: top.toString() + "px",
            left: left.toString() + "px",
            //padding: "5px",
            color: "black",
            fontSize: "12pt",
            cursor: "default",
        };
        Object.keys(c).forEach(function (a) {
            textDiv.style[a] = c[a];
        });

        newContent = document.createTextNode(text);
        textDiv.appendChild(newContent);



    }

    let createGuiEditingMenu = () => {
        //Create background div
        b = document.createElement("div")
        c = {
            backgroundColor: "white",
            border: "solid",
            borderColor: "black",
            borderWidth: "2px",
            fontFamily: "Retron2000",
            position: "absolute",
            top: "17.5%",
            left: "32.5%",
            padding: "5px",
            color: "black",
            fontSize: "10pt",
            display: "block",
            width: "35%",
            height: "65%",
        };
        Object.keys(c).forEach(function (a) {
            b.style[a] = c[a];
        });
        b.id = "gui-editing-menu";

        //X button CSS
        xButton = document.createElement("button");
        c = {
            backgroundColor: "white",
            border: "none",
            position: "absolute",
            fontFamily: "Retron2000",
            color: "black",
            fontSize: "10pt",
            cursor: "pointer",
            right: "1px",
            top: "1px",
        };
        Object.keys(c).forEach(function (a) {
            xButton.style[a] = c[a];
        });

        xButton.innerHTML = "❌";

        xButton.onclick = function () {
            b.remove();
            elementEditing = null;
        }

        deleteElementButton = document.createElement("button");
        c = {
            backgroundColor: "red",
            borderRadius: "25px",
            border: "red",
            padding: "8px",
            position: "absolute",
            fontFamily: "Retron2000",
            color: "white",
            fontSize: "10pt",
            cursor: "pointer",
            left: "33%",
            bottom: "2%",

        };
        Object.keys(c).forEach(function (a) {
            deleteElementButton.style[a] = c[a];
        });

        deleteElementButton.innerHTML = "DELETE ELEMENT";

        deleteElementButton.onclick = function () {
            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings[elementEditing.id]["enabled"] = false;

            if (elementEditing.name === "Custom Text") {
                delete guiSettings[elementEditing.id];
            }
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));



            b.remove();
            elementEditing.remove();

            elementEditing = null;
        }


        titleText = document.createElement("div");

        c = {
            backgroundColor: "white",
            border: "none",
            fontFamily: "Retron2000",
            position: "absolute",
            top: "2%",
            left: "35%",
            //padding: "5px",
            color: "black",
            fontSize: "22pt",
            cursor: "default",
        };
        Object.keys(c).forEach(function (a) {
            titleText.style[a] = c[a];
        });

        newContent = document.createTextNode(elementEditing.name);
        titleText.appendChild(newContent);





        //X Position CSS
        leftButton = document.createElement("button");
        styleMenuButton(leftButton, 80, 55);
        leftInput = document.createElement("input");
        styleMenuInput(leftInput, 20, 55, 50);
        leftInput.value = parseInt(elementEditing.style.left);
        leftInput.setAttribute("type", "number");
        leftText = document.createElement("div")
        styleMenuText(leftText, 0, 55, "X:")
        leftRightMostText = document.createElement("div")
        styleMenuText(leftRightMostText, 110, 55, "Rightmost X: " + (parseInt(elementEditing.style.left) + elementEditing.offsetWidth));
        leftInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation()
            e.preventDefault()
            leftInput.focus()
        }
        leftInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };
        leftButton.onclick = function () {
            console.log(leftInput.value);
            elementEditing.style.left = leftInput.value + "px";
            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings[elementEditing.id]["left"] = parseInt(elementEditing.style.left);
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
        }




        //Y Position CSS
        topButton = document.createElement("button");
        styleMenuButton(topButton, 80, 85);
        topInput = document.createElement("input");
        styleMenuInput(topInput, 20, 85, 50);
        topInput.value = parseInt(elementEditing.style.top);
        topInput.setAttribute("type", "number");
        topText = document.createElement("div")
        styleMenuText(topText, 0, 85, "Y:")
        topBottomMostText = document.createElement("div")
        styleMenuText(topBottomMostText, 110, 85, "Bottommost X: " + (parseInt(elementEditing.style.top) + elementEditing.offsetHeight));
        topInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation()
            e.preventDefault()
            topInput.focus()
        }
        topInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };
        topButton.onclick = function () {
            console.log(topInput.value);
            elementEditing.style.top = topInput.value + "px";
            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings[elementEditing.id]["top"] = parseInt(elementEditing.style.top);
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
        }




        //Border Enabled CSS
        borderButton = document.createElement("button");
        styleMenuButton(borderButton, 80, 115);
        if (elementEditing.style.border === "none") {
            borderButton.style.backgroundColor = "white";
            borderButton.innerHTML = "⬜";
            elementEditing.style.border = "none";
        } else {
            borderButton.style.backgroundColor = "#00d26a";
            borderButton.innerHTML = "✅";
        }
        borderText = document.createElement("div")
        styleMenuText(borderText, 0, 115, "Border:")
        borderButton.onclick = function () {
            if (borderButton.style.backgroundColor === "white") {
                borderButton.style.backgroundColor = "#00d26a";
                borderButton.innerHTML = "✅";
                elementEditing.style.border = "2px solid black";

                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementEditing.id]["border"] = elementEditing.style.border;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
            } else {
                borderButton.style.backgroundColor = "white";
                borderButton.innerHTML = "⬜";
                elementEditing.style.border = "none";
                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementEditing.id]["border"] = elementEditing.style.border;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
            }

        }





        //BG/Off Color CSS
        bgColorButton = document.createElement("button");
        styleMenuButton(bgColorButton, 185, 145);
        bgColorInput = document.createElement("input");
        styleMenuInput(bgColorInput, 125, 145, 50);
        if (arrows.includes(elementEditing.id)) {
            bgColorInput.value = keyColors[elementEditing.id][0];
        } else {
            bgColorInput.value = elementEditing.style.backgroundColor;

        }
        bgColorText = document.createElement("div")
        styleMenuText(bgColorText, 0, 145, "BG/Off Color:")
        bgColorInfo = document.createElement("div")
        styleMenuText(bgColorInfo, 215, 147, "Accepts hex codes/CSS colors");
        bgColorInfo.style.color = 'DarkMagenta';
        bgColorInfo.style.fontSize = "10pt"

        bgColorButton.onclick = function () {
            if (CSS.supports('color', bgColorInput.value)) {
                elementEditing.style.backgroundColor = bgColorInput.value;
                if (arrows.includes(elementEditing.id)) {
                    keyColors[elementEditing.id][0] = bgColorInput.value;
                }
                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementEditing.id]["backgroundColor"] = elementEditing.style.backgroundColor;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));

                bgColorInfo.innerHTML = "Valid color!";
                bgColorInfo.style.color = "ForestGreen";
            } else {
                bgColorInfo.innerHTML = "INVALID COLOR! Hex's are #code";
                bgColorInfo.style.color = "red";
            }


        }
        bgColorInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            bgColorInput.focus()
        }
        bgColorInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };





        //On Color CSS
        onColorButton = document.createElement("button");
        styleMenuButton(onColorButton, 150, 175);
        onColorInput = document.createElement("input");
        styleMenuInput(onColorInput, 90, 175, 50);
        if (arrows.includes(elementEditing.id)) {
            onColorInput.value = keyColors[elementEditing.id][1];
        }
        onColorText = document.createElement("div")
        styleMenuText(onColorText, 0, 175, "On Color:")
        onColorInfo = document.createElement("div")
        styleMenuText(onColorInfo, 180, 177, "Only for keys");
        onColorInfo.style.color = 'DarkMagenta';
        onColorInfo.style.fontSize = "10pt"
        onColorButton.onclick = function () {
            if (CSS.supports('color', onColorInput.value)) {
                if (arrows.includes(elementEditing.id)) {
                    elementEditing.style.backgroundColor = onColorInput.value;
                    keyColors[elementEditing.id][1] = onColorInput.value;

                    guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                    guiSettings[elementEditing.id]["onBgColor"] = keyColors[elementEditing.id][1];
                    localStorage.setItem('guiSettings', JSON.stringify(guiSettings));


                    onColorInfo.innerHTML = "Valid color!";
                    onColorInfo.style.color = "ForestGreen";
                } else {
                    onColorInfo.innerHTML = "Error! Only for keys!";
                    onColorInfo.style.color = "red";
                }
            } else {
                onColorInfo.innerHTML = "INVALID COLOR! Hex's are #code";
                onColorInfo.style.color = "red";
            }

        }
        onColorInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            onColorInput.focus()
        }
        onColorInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopPropagation();
            e.stopImmediatePropagation()
        };




        //Scale CSS
        scaleButton = document.createElement("button");
        styleMenuButton(scaleButton, 120, 205);
        scaleInput = document.createElement("input");
        styleMenuInput(scaleInput, 60, 205, 50);
        scaleInput.setAttribute("type", "number");
        scaleInputVal = 1;
        if (elementEditing.style.transform !== "") {
            scaleInputVal = parseFloat(parseFloat(elementEditing.style.transform.substring(6, elementEditing.style.transform.length - 1)).toFixed(2));
        }
        scaleInput.value = scaleInputVal;
        scaleText = document.createElement("div")
        styleMenuText(scaleText, 0, 205, "Scale:")
        scaleInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation()
            e.preventDefault()
            scaleInput.focus()
        }
        scaleInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };
        scaleButton.onclick = function () {
            scale = Math.min(Math.max(0.7, parseFloat(scaleInput.value)), 5);
            elementEditing.style.transform = `scale(${scale})`;
            scaleInput.value = scale;
            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings[elementEditing.id]["scale"] = scale;
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));

        }



        //Text Color CSS
        textColorButton = document.createElement("button");
        styleMenuButton(textColorButton, 170, 235);
        textColorInput = document.createElement("input");
        styleMenuInput(textColorInput, 110, 235, 50);
        if (arrows.includes(elementEditing.id)) {
            textColorInput.value = keyColors[elementEditing.id][2];
        } else {
            textColorInput.value = elementEditing.style.color;
        }
        textColorInfo = document.createElement("div")
        styleMenuText(textColorInfo, 200, 237, "Accepts hex codes/CSS colors");
        textColorInfo.style.color = 'DarkMagenta';
        textColorInfo.style.fontSize = "10pt"
        textColorText = document.createElement("div")
        styleMenuText(textColorText, 0, 235, "Text Color:")
        textColorButton.onclick = function () {
            if (CSS.supports('color', textColorInput.value)) {
                elementEditing.style.color = textColorInput.value;
                if (arrows.includes(elementEditing.id)) {
                    keyColors[elementEditing.id][2] = textColorInput.value;
                }
                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementEditing.id]["color"] = elementEditing.style.color;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
                textColorInfo.innerHTML = "Valid color!";
                textColorInfo.style.color = "ForestGreen";
            } else {
                textColorInfo.innerHTML = "INVALID COLOR! Hex's are #code";
                textColorInfo.style.color = "red";
            }

        }
        textColorInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            textColorInput.focus()
        }
        textColorInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopPropagation();
            e.stopImmediatePropagation()
        };

        //On Text Color CSS
        onTextColorButton = document.createElement("button");
        styleMenuButton(onTextColorButton, 190, 265);
        onTextColorInput = document.createElement("input");
        styleMenuInput(onTextColorInput, 130, 265, 50);
        if (arrows.includes(elementEditing.id)) {
            onTextColorInput.value = keyColors[elementEditing.id][3];

        }
        onTextColorText = document.createElement("div")
        styleMenuText(onTextColorText, 0, 265, "On Text Color:")
        onTextInfo = document.createElement("div")
        styleMenuText(onTextInfo, 220, 267, "Only for keys");
        onTextInfo.style.color = 'DarkMagenta';
        onTextInfo.style.fontSize = "10pt"
        onTextColorButton.onclick = function () {
            if (CSS.supports('color', onTextColorInput.value)) {
                if (arrows.includes(elementEditing.id)) {
                    elementEditing.style.color = onTextColorInput.value;
                    keyColors[elementEditing.id][3] = onTextColorInput.value;

                    guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                    guiSettings[elementEditing.id]["onTextColor"] = keyColors[elementEditing.id][3];
                    localStorage.setItem('guiSettings', JSON.stringify(guiSettings));

                    onTextInfo.innerHTML = "Valid color!";
                    onTextInfo.style.color = "ForestGreen";
                } else {
                    onTextInfo.innerHTML = "Error! Only for keys!"
                    onTextInfo.style.color = "red";
                }
            } else {
                onTextInfo.innerHTML = "INVALID COLOR! Hex's are #code";
                onTextInfo.style.color = "red";
            }


        }
        onTextColorInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            onTextColorInput.focus()
        }
        onTextColorInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopPropagation();
            e.stopImmediatePropagation()
        };


        //Text Enabled CSS
        // textEnabledButton = document.createElement("button");
        // styleMenuButton(textEnabledButton, 120, 245);
        // if(elementEditing.innerHTML === "") {
        //     textEnabledButton.style.backgroundColor = "white";
        //     textEnabledButton.innerHTML = "⬜";
        // } else {
        //     textEnabledButton.style.backgroundColor = "#00d26a";
        //     textEnabledButton.innerHTML = "✅";
        // }
        // textEnabledText = document.createElement("div")
        // styleMenuText(textEnabledText, 0, 245, "Text Enabled:") 
        // textEnabledButton.onclick = function() {
        //     if(textEnabledButton.style.backgroundColor === "white") {
        //         textEnabledButton.style.backgroundColor = "#00d26a";
        //         textEnabledButton.innerHTML = "✅";
        //         elementEditing.innerHTML
        //     } else {
        //         textEnabledButton.style.backgroundColor = "white";
        //         textEnabledButton.innerHTML = "⬜";
        //     }

        // }


        //Opacity CSS
        opacityButton = document.createElement("button");
        styleMenuButton(opacityButton, 135, 295);
        opacityInput = document.createElement("input");
        styleMenuInput(opacityInput, 75, 295, 50);
        opacityInput.setAttribute("type", "number");
        opacity = 1;
        if (elementEditing.style.opacity !== "") {
            opacity = elementEditing.style.opacity;
        }
        opacityInput.value = opacity;
        opacityText = document.createElement("div")
        styleMenuText(opacityText, 0, 295, "Opacity:")
        opacityInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation()
            e.preventDefault()
            opacityInput.focus()
        }
        opacityInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };
        opacityButton.onclick = function () {
            console.log(typeof (elementEditing.style.opacity))
            opacity = Math.min(Math.max(0.1, parseFloat(opacityInput.value)), 1);
            elementEditing.style.opacity = opacity;
            opacityInput.value = opacity;

            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings[elementEditing.id]["opacity"] = elementEditing.style.opacity;
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
        }


        //Font CSS
        fontButton = document.createElement("button");
        styleMenuButton(fontButton, 150, 325);
        fontInput = document.createElement("input");
        styleMenuInput(fontInput, 50, 325, 90);
        fontInput.value = elementEditing.style.fontFamily;
        fontText = document.createElement("div")
        styleMenuText(fontText, 0, 325, "Font:")
        fontInfo = document.createElement("div")
        styleMenuText(fontInfo, 180, 327, "Accepts CSS fonts");
        fontInfo.style.color = 'DarkMagenta';
        fontInfo.style.fontSize = "10pt"

        fontButton.onclick = function () {
            if (CSS.supports('font-family', fontInput.value)) {
                elementEditing.style.fontFamily = fontInput.value;

                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementEditing.id]["fontFamily"] = elementEditing.style.fontFamily;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));

                fontInfo.innerHTML = "Valid font!";
                fontInfo.style.color = "ForestGreen";
            } else {
                fontInfo.innerHTML = "INVALID FONT";
                fontInfo.style.color = "red";
            }
        }
        fontInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            fontInput.focus()
        }
        fontInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };


        //Custom Text CSS
        customTextButton = document.createElement("button");
        styleMenuButton(customTextButton, 150, 355);
        customTextInput = document.createElement("input");
        styleMenuInput(customTextInput, 50, 355, 90);
        if (elementEditing.name === "Custom Text") {
            customTextInput.value = elementEditing.innerHTML;
        }
        customTextText = document.createElement("div")
        styleMenuText(customTextText, 0, 355, "Text:")
        customTextInfo = document.createElement("div")
        styleMenuText(customTextInfo, 180, 357, "Only for custom text");
        customTextInfo.style.color = 'DarkMagenta';
        customTextInfo.style.fontSize = "10pt"

        customTextButton.onclick = function () {
            if (elementEditing.name === "Custom Text") {
                elementEditing.innerHTML = customTextInput.value;

                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementEditing.id]["innerHTML"] = elementEditing.innerHTML;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
            } else {
                customTextInfo.innerHTML = "Error! Only for custom text!"
                customTextInfo.style.color = 'red';
            }
        }
        customTextInput.onclick = (e) => {
            console.log("please");
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            customTextInput.focus()
        }
        customTextInput.onkeydown = (e) => {
            console.log("pleasev2");
            e.stopImmediatePropagation()
            e.stopPropagation();
        };


        //Add all the elements to the div/document
        b.appendChild(leftInput);
        b.appendChild(leftButton);
        b.appendChild(leftText);
        b.appendChild(leftRightMostText);

        b.appendChild(topText);
        b.appendChild(topInput);
        b.appendChild(topButton);
        b.appendChild(topBottomMostText);

        b.appendChild(borderText);
        b.appendChild(borderButton);

        b.appendChild(bgColorText)
        b.appendChild(bgColorInput);
        b.appendChild(bgColorButton);
        b.appendChild(bgColorInfo);

        b.appendChild(onColorText)
        b.appendChild(onColorInput);
        b.appendChild(onColorButton);
        b.appendChild(onColorInfo);

        b.appendChild(scaleText)
        b.appendChild(scaleInput);
        b.appendChild(scaleButton);

        b.appendChild(textColorText)
        b.appendChild(textColorInput);
        b.appendChild(textColorButton);
        b.appendChild(textColorInfo);


        b.appendChild(onTextColorText)
        b.appendChild(onTextColorInput);
        b.appendChild(onTextColorButton);
        b.appendChild(onTextInfo);

        b.appendChild(opacityText);
        b.appendChild(opacityInput);
        b.appendChild(opacityButton);

        b.appendChild(fontText);
        b.appendChild(fontInput);
        b.appendChild(fontButton);
        b.appendChild(fontInfo);

        b.appendChild(customTextText);
        b.appendChild(customTextInput);
        b.appendChild(customTextButton);
        b.appendChild(customTextInfo);






        b.appendChild(xButton);
        b.appendChild(deleteElementButton);
        b.appendChild(titleText);

        document.body.appendChild(b);


    }


    let createGuiElement = (id1, top, left, name) => {
        b = document.createElement("div")
        c = {
            backgroundColor: "white",
            border: "2px solid black",
            fontFamily: "Retron2000",
            position: "absolute",
            top: top.toString() + "px",
            left: left.toString() + "px",
            padding: "5px",
            color: "black",
            fontSize: "10pt",
            display: "none",
            cursor: "pointer",
        };
        Object.keys(c).forEach(function (a) {
            b.style[a] = c[a];
        });
        b.id = id1;
        b.name = name;
        const newContent = document.createTextNode("N/A");

        // add the text node to the newly created div
        b.appendChild(newContent);

        document.body.appendChild(b);

        document.getElementById(b.id).className = 'gui';
        //document.getElementById(b.id).setAttribute("onmouseover", "guiHoverMove(this)");
        document.getElementById(b.id).addEventListener('mousedown', (event) => {
            //onsole.log(event.button)
            if (event.button === 0) {
                elementMoving = event.target;
                startingMouseCoords = [event.clientX, event.clientY]
            }
            if (event.button === 2) {
                oncontextmenu = (e) => {
                    e.preventDefault()
                }
            }

        });
        document.getElementById(b.id).addEventListener('mouseup', (event) => {
            if (event.button === 0) {
                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elementMoving.id]["left"] = parseInt(elementMoving.style.left);
                guiSettings[elementMoving.id]["top"] = parseInt(elementMoving.style.top);
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));

                elementMoving = null;
                startingMouseCoords = null;

            }
            if (event.button === 2) {
                if (elementEditing === null) {
                    elementEditing = event.target;

                    createGuiEditingMenu();

                } else {
                    document.getElementById("gui-editing-menu").remove();
                    elementEditing = event.target;

                    createGuiEditingMenu();
                }





            }

        });

        document.getElementById(b.id).onwheel = function (event) {
            event.preventDefault();
            console.log(event.deltaY);
            scale += event.deltaY * -0.00125;

            // Restrict scale
            scale = Math.min(Math.max(0.7, scale), 5);

            // Apply scale transform
            event.target.style.transform = `scale(${scale})`;
            console.log(scale)

            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings[event.target.id]["scale"] = scale;
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
        }


    };

    let createEnableElement = (elementButton, elementText, elID, elName, y, btnX, x = 5) => {
        styleMenuButton(elementButton, btnX, y);
        if (document.getElementById(elID) === null || document.getElementById(elID).style.display === "none") {
            elementButton.style.backgroundColor = "white";
            elementButton.innerHTML = "⬜";
        } else {
            elementButton.style.backgroundColor = "#00d26a";
            elementButton.innerHTML = "✅";
        }
        styleMenuText(elementText, x, y, elName + ":")
        elementButton.onclick = (e) => {
            console.log("bro")
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault();
            elementButton.focus();
            if (elementButton.style.backgroundColor === "white") {
                elementButton.style.backgroundColor = "#00d26a";
                elementButton.innerHTML = "✅";

                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))

                if (document.getElementById(elID) === null) {
                    createGuiElement(elID, guiPreSettings[elID]["top"], guiPreSettings[elID]["left"], elName);
                    if (arrows.includes(elID)) {
                        if (elID === "up") {
                            document.getElementById(elID).innerHTML = "🠙";
                        } else if (elID === "left") {
                            document.getElementById(elID).innerHTML = "🠘";
                        } else if (elID === "down") {
                            document.getElementById(elID).innerHTML = "🠛";
                        } else if (elID === "right") {
                            document.getElementById(elID).innerHTML = "🠚";
                        } else if (elID === "reset") {
                            document.getElementById(elID).innerHTML = "R";
                        } else if (elID === "control") {
                            document.getElementById(elID).innerHTML = "CTRL";
                        }
                    }
                    guiSettings[elID] = guiPreSettings[elID];
                }
                if (document.getElementById(elID).style.display === "none") {
                    document.getElementById(elID).style.display = "block";
                    displayNone = displayNone.filter(function (ele) {
                        ele != elID;
                    });
                    console.log(displayNone)
                    guiSettings[elID]["display"] = document.getElementById(elID).style.display;

                }


                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));
            } else {
                elementButton.style.backgroundColor = "white";
                elementButton.innerHTML = "⬜";
                document.getElementById(elID).style.display = "none";
                displayNone.push(elID);

                guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
                guiSettings[elID]["display"] = document.getElementById(elID).style.display;
                localStorage.setItem('guiSettings', JSON.stringify(guiSettings));

            }
        }



    }

    let createEnablingMenu = () => {
        //Create background div
        bg = document.createElement("div")
        c = {
            backgroundColor: "white",
            border: "solid",
            borderColor: "black",
            borderWidth: "2px",
            fontFamily: "Retron2000",
            position: "absolute",
            top: "22.5%",
            left: "35%",
            padding: "5px",
            color: "black",
            fontSize: "10pt",
            display: "block",
            width: "30%",
            height: "55%",
        };
        Object.keys(c).forEach(function (a) {
            bg.style[a] = c[a];
        });
        bg.id = "enabling-menu-bg";

        xButton = document.createElement("button");
        c = {
            backgroundColor: "white",
            border: "none",
            position: "absolute",
            fontFamily: "Retron2000",
            color: "black",
            fontSize: "10pt",
            cursor: "pointer",
            right: "1px",
            top: "1px",
        };
        Object.keys(c).forEach(function (a) {
            xButton.style[a] = c[a];
        });

        xButton.innerHTML = "❌";

        xButton.onclick = (e) => {
            console.log("hi?")
            e.stopImmediatePropagation()
            e.stopPropagation();
            e.preventDefault()
            bg.remove();
            console.log("hi v2")

        }


        titleText = document.createElement("div");

        c = {
            backgroundColor: "white",
            border: "none",
            fontFamily: "Retron2000",
            position: "absolute",
            top: "2%",
            left: "23%",
            //padding: "5px",
            color: "black",
            fontSize: "18pt",
            cursor: "default",
        };
        Object.keys(c).forEach(function (a) {
            titleText.style[a] = c[a];
        });

        newContent = document.createTextNode("Enable/Disable Gui");
        titleText.appendChild(newContent);


        //Border Enabled CSS
        posButton = document.createElement("button");
        posText = document.createElement("div")
        createEnableElement(posButton, posText, "pos", "Position", 50, 82);

        fpsButton = document.createElement("button");
        fpsText = document.createElement("div")
        createEnableElement(fpsButton, fpsText, "fps", "FPS", 80, 45);

        stateButton = document.createElement("button");
        stateText = document.createElement("div")
        createEnableElement(stateButton, stateText, "state", "State", 110, 62);

        attemptsButton = document.createElement("button");
        attemptsText = document.createElement("div")
        createEnableElement(attemptsButton, attemptsText, "attempts", "Attempts", 140, 95);

        upButton = document.createElement("button");
        upText = document.createElement("div")
        createEnableElement(upButton, upText, "up", "Up Key", 170, 71);

        leftButton = document.createElement("button");
        leftText = document.createElement("div")
        createEnableElement(leftButton, leftText, "left", "Left Key", 200, 89);

        downButton = document.createElement("button");
        downText = document.createElement("div")
        createEnableElement(downButton, downText, "down", "Down Key", 230, 95);

        rightButton = document.createElement("button");
        rightText = document.createElement("div")
        createEnableElement(rightButton, rightText, "right", "Right Key", 260, 95);

        speedButton = document.createElement("button");
        speedText = document.createElement("div")
        createEnableElement(speedButton, speedText, "speed", "Speed", 290, 95);

        resetButton = document.createElement("button");
        resetText = document.createElement("div")
        createEnableElement(resetButton, resetText, "reset", "Reset", 320, 95);

        controlButton = document.createElement("button");
        controlText = document.createElement("div")
        createEnableElement(controlButton, controlText, "control", "CTRL", 50, 245, 190);





        textButton = document.createElement("button");
        textText = document.createElement("div")
        styleMenuButton(textButton, 95, 350);

        textButton.style.backgroundColor = "#00d26a";
        textButton.innerHTML = "➕";

        styleMenuText(textText, 5, 350, "Add Text:")
        textButton.onclick = function () {
            customTextNum++;
            createGuiElement("text" + customTextNum, 300, 330, "Custom Text");

            guiSettings = JSON.parse(localStorage.getItem('guiSettings'))
            guiSettings["text" + customTextNum] = {
                "left": 300,
                "top": 300,
                "name": "Custom Text",
                "border": "2px solid black",
                "backgroundColor": "white",
                "onBgColor": "",
                "scale": 1,
                "color": "black",
                "onTextColor": "",
                "opacity": 1,
                "fontFamily": "Retron2000",
                "innerHTML": "N/A",
                "enabled": true,
                "display": "block",
                "width": 0,
                "height": 0
            }
            localStorage.setItem('guiSettings', JSON.stringify(guiSettings));


        }







        bg.appendChild(posText);
        bg.appendChild(posButton);

        bg.appendChild(fpsText);
        bg.appendChild(fpsButton);

        bg.appendChild(stateText);
        bg.appendChild(stateButton);

        bg.appendChild(attemptsText);
        bg.appendChild(attemptsButton);

        bg.appendChild(upText);
        bg.appendChild(upButton);

        bg.appendChild(leftText);
        bg.appendChild(leftButton);

        bg.appendChild(downText);
        bg.appendChild(downButton);

        bg.appendChild(rightText);
        bg.appendChild(rightButton);

        bg.appendChild(textText);
        bg.appendChild(textButton);

        bg.appendChild(speedText);
        bg.appendChild(speedButton);

        bg.appendChild(resetText);
        bg.appendChild(resetButton);

        bg.appendChild(controlText);
        bg.appendChild(controlButton);


        bg.appendChild(titleText);
        bg.appendChild(xButton);

        document.body.appendChild(bg);

    }





    let guiMod = {
        init() {
            this.movementKeys = []; //left, up, right, down
            this.arrows = ["left", "up", "right", "down", "reset", "control"];
            this.activatorKeyHeld = false;
            this.activated = false;
            this.speed = { x: 10, y: 10 };
            this.stored = [1500, true];
            this.override = false;
            this.previousPosLength = 7;
            this.attempts = 1;
            this.editing = false;






            document.addEventListener("keydown", (event) => {
                this.keyDown(event)

            });
            document.addEventListener("keyup", (event) => {
                this.keyUp(event)
            });

            function addStyle(styleString) {
                const style = document.createElement('style');
                style.textContent = styleString;
                document.head.append(style);
            }
            addStyle(`
            #ovo-multiplayer-disconnected-container {
                pointer-events: none;
            }
            #ovo-multiplayer-other-container {
                pointer-events: none;
            }
            #ovo-multiplayer-container {
                pointer-events: none;
            }
            #ovo-multiplayer-tab-container {
                pointer-events: all;
            }
            .ovo-multiplayer-button-holder {
                pointer-events: all;
            }
            .ovo-multiplayer-tab {
                pointer-events: all;
            }
            .ovo-multiplayer-button {
                pointer-events: all;
            }
            
            `);

            //localStorage.setItem('myCat', 'Tom');
            console.log(localStorage.getItem('guiSettings'));
            if (localStorage.getItem('guiSettings') === null) {
                localStorage.setItem('guiSettings', JSON.stringify(guiPreSettings));
            }

            //guiSettings = guiPreSettings;
            guiSettings = JSON.parse(localStorage.getItem('guiSettings'));
            for (const [key] of Object.entries(guiSettings)) {
                console.log(key)

                console.log(guiSettings[key]);
                if (guiSettings[key]["enabled"] === true) {
                    createGuiElement(key, guiSettings[key]["top"], guiSettings[key]["left"], guiSettings[key]["name"]);
                    element = document.getElementById(key);
                    element.style.border = guiSettings[key]["border"]
                    element.style.backgroundColor = guiSettings[key]["backgroundColor"];
                    element.style.transform = `scale(${guiSettings[key]["scale"]})`;
                    element.style.color = guiSettings[key]["color"];
                    element.style.opacity = guiSettings[key]["opacity"];
                    element.style.fontFamily = guiSettings[key]["fontFamily"];
                    element.style.display = guiSettings[key]["display"];
                    if (element.style.display === "none") {
                        displayNone.push(key);
                    }

                    if (arrows.includes(key)) {
                        keyColors[key][0] = guiSettings[key]["backgroundColor"];
                        keyColors[key][1] = guiSettings[key]["onBgColor"];
                        keyColors[key][2] = guiSettings[key]["color"];
                        keyColors[key][3] = guiSettings[key]["onTextColor"];
                        element.innerHTML = guiSettings[key]["innerHTML"];
                    }
                    if (element.name === "Custom Text") {
                        element.innerHTML = guiSettings[key]["innerHTML"];
                    }
                }






            }
            //createGuiElement("pos", 5, 5, "Position"); //create position element


            // createGuiElement("fps", 40, 5, "FPS"); //create fps element
            // //createGuiElement("dy", 40, 30); //create position element
            // //createGuiElement("dx", 40, 55); //create position element
            // createGuiElement("state", 5, 85, "State"); //create position element
            // createGuiElement("attempts", 75, 5, "Attempts"); //create attempts element


            // createGuiElement(this.arrows[1], 75, 70, "Up Key"); //create w key element
            // document.getElementById(this.arrows[1]).innerHTML = "🠙";
            // createGuiElement(this.arrows[0], 40, 96, "Left Key"); //create a key element
            // document.getElementById(this.arrows[0]).innerHTML = "🠘";
            // createGuiElement(this.arrows[3], 40, 70, "Down Key"); //create s key element
            // document.getElementById(this.arrows[3]).innerHTML = "🠛";
            // createGuiElement(this.arrows[2], 40, 40, "Right Key"); //create d key element
            // document.getElementById(this.arrows[2]).innerHTML = "🠚";





            const btn = document.createElement("button");
            btn.innerHTML = "Enable/Disable Elements";

            btn.style.position = "absolute";
            btn.style.bottom = "300px";
            btn.style.right = "50px";

            c = {
                backgroundColor: "white",
                border: "solid",
                borderColor: "black",
                borderWidth: "2px",
                fontFamily: "Retron2000",
                padding: "5px",
                color: "black",
                fontSize: "10pt",
                display: "none",
            };
            Object.keys(c).forEach(function (a) {
                btn.style[a] = c[a];
            });

            btn.onclick = function () {
                if (document.getElementById("enabling-menu-bg") === null) {
                    createEnablingMenu();
                }
            }
            btn.id = "toggle-elements-btn"

            document.body.appendChild(btn);





            // localforage.getItem("DedraOvO").then(function(value) {
            //     // This code runs once the value has been loaded
            //     // from the offline store.
            //     console.log(value);
            // }).catch(function(err) {
            //     // This code runs if there were any errors
            //     console.log(err);
            // });
            // localforage.keys().then(function(keys) {
            //     // An array of all the key names.
            //     console.log(keys);
            // }).catch(function(err) {
            //     // This code runs if there were any errors
            //     console.log(err);
            // });\

            let inputsObject = runtime.types_by_index.find(x => x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0];
            //inputsObject.instance_vars;
            console.log(inputsObject.instance_vars);
            this.movementKeys = (inputsObject.instance_vars).slice(0, 4).concat([82, 17]); //Left, Up, Right, Down, R
            //#this.movementKeys[4] = 82; //R
            console.log(this.movementKeys);







            runtime.tickMe(this);

            notify("Gui Mod Loaded", "by Awesomeguy", "https://cdn.iconscout.com/icon/free/png-256/keyboard-arrow-4712861-3906731.png");


        },



        keyDown(event) {

            //console.log(String.fromCharCode(event.keyCode));
            //console.log(cr.plugins_.Keyboard.prototype.cnds.OnKey() || cr.plugins_.Keyboard.prototype.cnds.OnKeyCode());
            //console.log(cr.plugins_.Keyboard.prototype.exps.StringFromKeyCode())
            //c2_callFunction("Controls > Buffer", ["Jump"]);
            if (this.movementKeys.includes(event.keyCode)) {

                // //console.log(event.key);
                console.log(this.movementKeys)
                console.log("key down" + event.keyCode)
                arrow = this.arrows[this.movementKeys.indexOf(event.keyCode)]

                document.getElementById(arrow).style.backgroundColor = keyColors[arrow][1];
                document.getElementById(arrow).style.color = keyColors[arrow][3];
            }


            // if(event.keyCode === 82 && event.target.id === "bg-color-input") {  
            //     //event.target.focus()
            //     event.preventDefault();
            //     //return false;
            //     console.log("hi")
            // }
        },

        keyUp(event) {
            if (this.movementKeys.includes(event.keyCode)) {
                arrow = this.arrows[this.movementKeys.indexOf(event.keyCode)]

                document.getElementById(arrow).style.backgroundColor = keyColors[arrow][0];
                document.getElementById(arrow).style.color = keyColors[arrow][2];

                //console.log(event.key);

            }
        },

        tick() {
            let playerInstances = runtime.types_by_index.filter((x) => !!x.animations && x.animations[0].frames[0].texture_file.includes("collider"))[0].instances.filter((x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled);
            let player = playerInstances[0];
            const elements = document.querySelectorAll('.gui');
            //console.log(this.attempts)
            //console.log(this.editing);

            try {





                if (elementMoving !== null) {


                    elementMoving.style.left = (currentMouseCoords[0] - startingMouseCoords[0] + parseInt(elementMoving.style.left)).toString() + 'px';
                    elementMoving.style.top = (currentMouseCoords[1] - startingMouseCoords[1] + parseInt(elementMoving.style.top)).toString() + 'px';
                    startingMouseCoords = currentMouseCoords;
                }

                if (isPaused() && document.getElementById("toggle-elements-btn").style.display === "none") {
                    document.getElementById("toggle-elements-btn").style.display = "block";
                } else if (!isPaused() && document.getElementById("toggle-elements-btn").style.display === "block") {
                    document.getElementById("toggle-elements-btn").style.display = "none";
                }



                //GUI ITSELF
                elements.forEach(element => {
                    element.style.display = "block";
                    displayNone.forEach(id2 => {
                        document.getElementById(id2).style.display = "none";
                    });
                });
                if (isInLevel() && runtime.running_layout.name !== "Level Menu") {
                    if (document.getElementById("fps") !== null) {
                        document.getElementById("fps").innerHTML = runtime.fps;
                    }
                    if (document.getElementById("speed") !== null) {
                        document.getElementById("speed").innerHTML = Math.round(Math.sqrt(Math.pow(player.behavior_insts[0].dx, 2) + Math.pow(player.behavior_insts[0].dy, 2)));
                    }
                    if (Object.keys(runtime.deathRow).length !== 0) {
                        this.attempts++;
                        console.log(this.attempts);
                        console.log("??");
                    }
                    //console.log(this.attempts);
                    if (document.getElementById("attempts") !== null) {
                        document.getElementById("attempts").innerHTML = this.attempts.toString();
                    }
                    if (document.getElementById("pos") !== null) {
                        document.getElementById("pos").innerHTML =
                            Math.round(player.x.toString()) +
                            ", " +
                            Math.round(player.y.toString());
                    }


                    // document.getElementById("dy").innerHTML = Math.round(player.behavior_insts[0].dy.toString())
                    // document.getElementById("dx").innerHTML = Math.round(player.behavior_insts[0].dx.toString())

                    //console.log(Math.round(player.behavior_insts[0].dy.toString()), Math.round(player.behavior_insts[0].dx.toString()))
                    if (document.getElementById("state") !== null) {
                        if (Math.abs(player.behavior_insts[0].dx) > 551) {
                            document.getElementById("state").innerHTML = "Rejump/1FSJ";
                        } else if (Math.abs(player.behavior_insts[0].dx) > 500) {
                            document.getElementById("state").innerHTML = "Sliding";
                        } else if (Math.abs(player.behavior_insts[0].dx) > 450) {
                            document.getElementById("state").innerHTML = "Diving";
                        } else if (player.behavior_insts[0].dy < 0) {
                            document.getElementById("state").innerHTML = "Jumping";
                        } else if (player.behavior_insts[0].dy > 0) {
                            document.getElementById("state").innerHTML = "Falling";
                        } else if (Math.abs(player.behavior_insts[0].dx) > 0) {
                            document.getElementById("state").innerHTML = "Running";
                        } else {
                            document.getElementById("state").innerHTML = "Resting";
                        }

                    }



                } else {
                    elements.forEach(element => {
                        element.style.display = "none";
                    });
                    if ((runtime.types_by_index.find(x => x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0]).instance_vars.slice(0, 4) !== this.movementKeys) {
                        this.movementKeys = (runtime.types_by_index.find(x => x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0]).instance_vars.slice(0, 4).concat([82, 17]);
                    }
                }





            } catch (err) { }
        }
    };

    guiMod.init();
})();