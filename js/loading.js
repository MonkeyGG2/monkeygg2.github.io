function changeLoadingTip() {
    const tips = ["Press CTRL+C to cloak your current tab","Press CTRL+M to mask your current tab", "Press CTRL+B to go back to the home page", "Join our discord server!", "Make sure to enable popups for automatic cloak", "Why are you here?"]
    const element = document.getElementsByClassName("loading-tip")[0];

    element.textContent =  "Loading... \n" + tips[Math.floor(Math.random() * tips.length)];
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
