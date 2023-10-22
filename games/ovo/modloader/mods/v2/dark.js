(function() {
    // create a div element
    const div = document.createElement("div");
    
    // set styles for the div element
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.mixBlendMode = "difference";
    div.style.backgroundColor = "white";
    div.style.zIndex = "99999"; // set an extremely high z-index value
    div.style.pointerEvents = "none"; // make the div pass events to the items below it
    
    // add the div element to the body of the webpage
    document.body.appendChild(div);
})();