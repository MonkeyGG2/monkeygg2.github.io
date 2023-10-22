// Backlinks Go Here!
const backlinksList= [{
  link: "https://slopegame.gitlab.io/tunnel-games.html",
  text: "TUNNEL",
}, {
  link: "https://slopegame.gitlab.io/jump-games.html",
  text: "JUMP",
}, {
  link: "https://slopegame.gitlab.io/run-games.html",
  text: "RUN",
}, {
  link: "https://ubg89.github.io/Run2/",
  text: "Run 2",
}, {
  link: "https://ubg98.github.io/Run3Space/",
  text: "Run 3 Space",
},];

function inFrame () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

function botBrowser() {
try {
  return navigator.webdriver
} catch (e) {
    return true;
}
}

function closeBacklinks() {
document.getElementById("backlinksPlace").style.display= "none";
return false;
}

function insertBacklinks() {
if (inFrame()) {
  return false;
}
let backlinksHTML= "";
backlinksHTML= "<ul style=\"color: #ffffff; padding: 0px; margin: 0px; font-size:18px;\">";
backlinksHTML+= "<li style=\"padding: 10px; display: inline-block; float: left;\">"+
    "<a style=\"padding: 5px;color: #ffffff; text-decoration: none; \" onMouseOver=\"this.style.backgroundColor='#0C1E40';\" onMouseOut=\"this.style.backgroundColor='';\" href= \"//slopegame.gitlab.io\">"+ decodeURIComponent(escape("\xF0\x9F\x8F\xA0")) +" SlopeGame</a>"+
    "</li>";
  
for (let i=0; i< backlinksList.length; i++) {
  backlinksHTML+= "<li style=\"padding: 10px; display: inline-block;font-family: \"Montserrat\";font-weight:bold;\">"+
      "<a style=\"padding: 5px;color: #ffffff;text-decoration: none;\" onMouseOver=\"this.style.color='#ffffaa';this.style.textDecoration='none';this.style.backgroundColor='#18bc9c';\" onMouseOut=\"this.style.color='#ffffff';this.style.textDecoration='none';this.style.backgroundColor='';\" href=\""+
      backlinksList[i].link+ "\">"+
      backlinksList[i].text+
      "</a>"+
      "</li>";

  // onMouseOver="this.style.color='#0F0'"
   // onMouseOut="this.style.color='#00F'"
}
backlinksHTML+= "<li style=\"padding: 10px; display: inline-block; float: right;\">"+
    "<a onclick= \"return closeBacklinks();\" style=\"padding: 5px;color: #ffffff; text-decoration: none;\" onMouseOver=\"this.style.backgroundColor='#ff6666';\" onMouseOut=\"this.style.backgroundColor='';\" href=\"#\">"+ decodeURIComponent(escape("\xE2\x9D\x8C")) +"</a>"+
    "</li>";
backlinksHTML+= "</ul>";
  
const backlinksPlace = document.createElement("div");
backlinksPlace.setAttribute("id", "backlinksPlace");
backlinksPlace.style.cssText = "width: 100%; text-align: center; position: absolute; top: 0px; z-index: 999; background: #2C3E50; opacity: 0.9;";
backlinksPlace.innerHTML= backlinksHTML;
window.document.body.insertBefore(backlinksPlace, window.document.body.firstChild);
}

addEventListener("load", insertBacklinks);
setTimeout(closeBacklinks, 5* 60* 1000);
