function changeLoadingTip() {
    const tips = ["Press CTRL+C to cloak your current tab", "Press CTRL+M to mask your current tab", "Press CTRL+B to go back to the home page", "Join our discord server!", "Make sure to enable popups for automatic cloak", "Why are you here?"]
    const element = document.getElementsByClassName("loading-tip")[0];

    element.textContent = "Loading... \n" + tips[Math.floor(Math.random() * tips.length)];
}

changeLoadingTip();
$("#everything-else").hide();

let changeTip = setInterval(() => {
    changeLoadingTip();
}, 3000);

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
    fpsMeter.style.padding = "10px";
    fpsMeter.style.color = "rgba(255, 255, 255, 0.75)";
    fpsMeter.style.fontFamily = "'Flexi IBM VGA True (437', monospace";
    fpsMeter.style.fontSize = "24px";
    fpsMeter.style.zIndex = "10000";
})();  