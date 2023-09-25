let config;
let games;
let themes;

function changeLoadingTip() {
    const tips = ["Welcome to the land of Nothing!", "Here there is absolutely nothing for you.", "Just gotta wait for it to load", "Shouldn't take any longer", "Why are you here?", "Just one more minute", "Go read a book :)"];
    const element = document.getElementsByClassName("loading-tip")[0];

    element.textContent = "Loading... \n" + tips[Math.floor(Math.random() * tips.length)];
}

changeLoadingTip();
$("#everything-else, #page-loader, .games, .proxy, .settings, .cloaklaunch").hide();

let changeTip = setInterval(() => {
    changeLoadingTip();
}, 3000);

fetch("./config.jsonc").then((e) => e.text()).then((jsonc) => {
    // removing all the comments from the jsonc file
    let json = JSON.parse(jsonc.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m));
    games = json["games"];
    themes = json["themes"];
    config = json["config"];
    
    let gamesList = $("#gamesList");
    for (game in games) {
        gamesList.append(`<li url="games/${games[game]["path"]}" ${games[game]["aliases"] ? "aliases=\"" + games[game]["aliases"].join(',') + "\"" : ''}>${game}</li>`);
    }

    $("#gamesList li").on("click", function() {
        let url = $(this).attr("url");
        inGame = true;
        $("#everything-else").fadeOut();
        $("#page-loader").fadeIn();
        $("#page-loader iframe").attr("src", url);
        $("#page-loader iframe")[0].focus();
        currentMenu = $("#page-loader");
    });    
});

$(window).on("load", () => {
    $(".track").attr("stroke", "url(#grad2)");
    $(".worm1").hide();
    $(".worm2").hide();
    clearInterval(changeTip);

    $(".loading").fadeOut({
        duration: 300,
        complete: () => {
            setTimeout(() => {
                $("#everything-else").fadeIn({
                    duration: 500,
                    easing: "swing"
                }, 200);
            }, 100);
        }
    });
});

jQuery.fn.extend({showModal: function() {
    return this.each(function() {
       if(this.tagName=== "DIALOG"){
            this.showModal();
        }
    });
}});

(function () {
    let previousTime = Date.now();
    let frames = 0;
    let refreshRate = 1000;

    let fpsMeter = document.createElement("div");
    fpsMeter.id = "fpsMeter";
    document.body.appendChild(fpsMeter);

    requestAnimationFrame(function loop() {
        const TIME = Date.now();
        frames++;
        if (TIME > previousTime + refreshRate) {
            let fps = Math.round((frames * refreshRate) / (TIME - previousTime));
            previousTime = TIME;
            frames = 0;
            fpsMeter.innerHTML = "FPS: " + fps * (1000 / refreshRate);
        }
        requestAnimationFrame(loop);
    });

    fpsMeter.style.position = "fixed";
    fpsMeter.style.top = "2.5%";
    fpsMeter.style.right = "1%";
    fpsMeter.style.zIndex = "50";
    fpsMeter.style.background = "rgba(0, 0, 0, 0.5)";
    fpsMeter.style.opacity = "0.5";
    fpsMeter.style.padding = "10px";
    fpsMeter.style.color = "rgba(255, 255, 255, 0.75)";
    fpsMeter.style.fontFamily = "'Flexi IBM VGA True (437', monospace";
    fpsMeter.style.fontSize = "24px";
    fpsMeter.style.zIndex = "10000";
})();