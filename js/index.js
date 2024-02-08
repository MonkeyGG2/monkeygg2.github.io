let currentMenu = $('.homepage');

$('.column button .card').on('click', function () {
    let nextMenu = this.getAttribute('data');

    if (nextMenu === 'proxy') {
        if (!config['proxy']) {
            $('#disabled').showModal();
            return;
        }
        $('#everything-else').fadeOut(300, () => {
            $('#page-loader').fadeIn(200);
            $('#page-loader iframe').attr('src', config['proxyPath'] || '/proxy');
            $('#page-loader iframe')[0].focus();
        });
        currentMenu = $('#page-loader');
        inGame = !preferences.background; // if background is disabled (false) then inGame is set to to true turning off the background
        return;
    }

    currentMenu.fadeOut(300, () => {
        $('.' + nextMenu).fadeIn(200);
    });
    currentMenu = $('.' + nextMenu);
});

$('logo img').on('click', returnHome);
$('#gameButton').on('click', returnHome);
$('#refresh').on('click', refreshPage);

$('dialog').on('click', function (e) {
    if (!e.originalEvent.target.closest('div')) {
        e.originalEvent.target.close();
    }
});

// Function to calculate the
// Jaro Similarity of two strings
// from https://www.geeksforgeeks.org/jaro-and-jaro-winkler-similarity/
function jaro_distance(s1, s2) {
    // If the strings are equal
    if (s1 == s2) return 1.0;

    // Length of two strings
    let len1 = s1.length,
        len2 = s2.length;

    if (len1 == 0 || len2 == 0) return 0.0;

    // Maximum distance upto which matching
    // is allowed
    let max_dist = Math.floor(Math.max(len1, len2) / 2) - 1;

    // Count of matches
    let match = 0;

    // Hash for matches
    let hash_s1 = new Array(s1.length);
    hash_s1.fill(0);
    let hash_s2 = new Array(s2.length);
    hash_s2.fill(0);

    // Traverse through the first string
    for (let i = 0; i < len1; i++) {
        // Check if there is any matches
        for (let j = Math.max(0, i - max_dist); j < Math.min(len2, i + max_dist + 1); j++)
            // If there is a match
            if (s1[i] == s2[j] && hash_s2[j] == 0) {
                hash_s1[i] = 1;
                hash_s2[j] = 1;
                match++;
                break;
            }
    }

    // If there is no match
    if (match == 0) return 0.0;

    // Number of transpositions
    let t = 0;

    let point = 0;

    // Count number of occurrences
    // where two characters match but
    // there is a third matched character
    // in between the indices
    for (let i = 0; i < len1; i++)
        if (hash_s1[i] == 1) {
            // Find the next matched character
            // in second string
            while (hash_s2[point] == 0) point++;

            if (s1[i] != s2[point++]) t++;
        }
    t /= 2;

    // Return the Jaro Similarity
    return (match / len1 + match / len2 + (match - t) / match) / 3.0;
}

// Jaro Winkler Similarity
function jaroWinklerSimilarity(s1, s2) {
    let jaro_dist = jaro_distance(s1, s2);

    // If the jaro Similarity is above a threshold
    if (jaro_dist > 0.7) {
        // Find the length of common prefix
        let prefix = 0;

        for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
            // If the characters match
            if (s1[i] == s2[i]) prefix++;
            // Else break
            else break;
        }

        // Maximum of 4 characters are allowed in prefix
        prefix = Math.min(4, prefix);

        // Calculate jaro winkler Similarity
        jaro_dist += 0.1 * prefix * (1 - jaro_dist);
    }
    return jaro_dist.toFixed(6);
}

/**
 * Updates the list of games based on the current search filter and sort type.
 *
 * @return {void}
 */
function updateList() {
    const filter = $('#search').val().toLowerCase();
    const elems = Array.from(document.querySelectorAll('#gamesList li'));
    const sortType = $('#sort').val();

    // sort by selected sort type
    elems.sort(function (a, b) {
        if (sortType === 'alphabetical') {
            return a.textContent.localeCompare(b.textContent);
        } else if (sortType === 'reverse') {
            return b.textContent.localeCompare(a.textContent);
        }
    });

    // then filter items with the search input
    elems.forEach(function (item) {
        let similarity = jaroWinklerSimilarity(filter, item.innerHTML.toLowerCase().slice(0, filter.length - 1));
        if (item.getAttribute('aliases')) {
            for (alias in item.getAttribute('aliases').split(',')) {
                if (alias.length > 1) {
                    console.log('alias');
                    console.log(alias);
                    console.log(typeof alias);
                    console.log(alias.length);
                    similarity += jaroWinklerSimilarity(filter, alias.toLowerCase().slice(0, filter.length - 1));
                }
            }
        }

        if ((similarity >= 0.7 && item.innerHTML.length > 2) || item.innerHTML.toLowerCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

    // now sort by jaro winkler distance
    elems.sort(function (a, b) {
        let distanceA = jaroWinklerSimilarity(filter, a.textContent.toLowerCase());
        if (a.getAttribute('aliases')) {
            for (alias in a.getAttribute('aliases').split(',')) {
                distanceA += jaroWinklerSimilarity(filter, alias.toLowerCase());
            }
        }

        let distanceB = jaroWinklerSimilarity(filter, b.textContent.toLowerCase());
        if (b.getAttribute('aliases')) {
            for (alias in b.getAttribute('aliases').split(',')) {
                distanceB += jaroWinklerSimilarity(filter, alias.toLowerCase());
            }
        }
        return distanceA - distanceB;
    });

    // then fill it with the sorted and filtered list
    for (const item of elems) {
        document.getElementById('gamesList').appendChild(item);
        updateGameList();
    }
}
$('#search').on('input', updateList);
$('#sort').on('change', updateList);

dragElement(document.getElementById('gameButton'));
dragElement(document.getElementById('refresh'));

const sequences = [
    { keys: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'], action: () => alert('No easter egg here') },
    { keys: ['KeyL', 'KeyE', 'KeyT', 'Space', 'KeyI', 'KeyT', 'Space', 'KeyS', 'KeyN', 'KeyO', 'KeyW'], action: snow },
  ];
  
  let index = 0;
  
  document.addEventListener('keydown', (event) => {
    var failed = true;
    for (const sequence of sequences) {
      if (event.code === sequence.keys[index]) {
        failed = false;
        index++;
  
        if (index === sequence.keys.length) {
          sequence.action();
          index = 0;
        }
      }
      else if (event.code === sequence.keys[0]) {
          failed = false;
          index = 1;
      }
    }
    if (failed){
        index = 0;
    }
  });
  
  function snow() {
        function i() {
            this.D = function() {
                const t = h.atan(this.i / this.d);
                l.save(), l.translate(this.b, this.a), l.rotate(-t), l.scale(this.e, this.e * h.max(1, h.pow(this.j, .7) / 15)), l.drawImage(m, -v / 2, -v / 2), l.restore()
            }
        }
        window;
        const h = Math,
            r = h.random,
            a = document,
            o = Date.now;
        e = (t => {
            l.clearRect(0, 0, _, f), l.fill(), requestAnimationFrame(e);
            const i = .001 * y.et;
            y.r();
            const s = L.et * g;
            for (var n = 0; n < C.length; ++n) {
                const t = C[n];
                t.i = h.sin(s + t.g) * t.h, t.j = h.sqrt(t.i * t.i + t.f), t.a += t.d * i, t.b += t.i * i, t.a > w && (t.a = -u), t.b > b && (t.b = -u), t.b < -u && (t.b = b), t.D()
            }
        }), s = (t => {
            for (var e = 0; e < p; ++e) C[e].a = r() * (f + u), C[e].b = r() * _
        }), n = (t => {
            c.width = _ = innerWidth, c.height = f = innerHeight, w = f + u, b = _ + u, s()
        });
        class d {
            constructor(t, e = !0) {
                this._ts = o(), this._p = !0, this._pa = o(), this.d = t, e && this.s()
            }
            get et() {
                return this.ip ? this._pa - this._ts : o() - this._ts
            }
            get rt() {
                return h.max(0, this.d - this.et)
            }
            get ip() {
                return this._p
            }
            get ic() {
                return this.et >= this.d
            }
            s() {
                return this._ts = o() - this.et, this._p = !1, this
            }
            r() {
                return this._pa = this._ts = o(), this
            }
            p() {
                return this._p = !0, this._pa = o(), this
            }
            st() {
                return this._p = !0, this
            }
        }
        const c = a.createElement("canvas");
        H = c.style, H.position = "fixed", H.left = 0, H.top = 0, H.width = "100vw", H.height = "100vh", H.zIndex = "100000", H.pointerEvents = "none", a.body.insertBefore(c, a.body.children[0]);
        const l = c.getContext("2d"),
            p = 300,
            g = 5e-4,
            u = 20;
        let _ = c.width = innerWidth,
            f = c.height = innerHeight,
            w = f + u,
            b = _ + u;
        const v = 15.2,
            m = a.createElement("canvas"),
            E = m.getContext("2d"),
            x = E.createRadialGradient(7.6, 7.6, 0, 7.6, 7.6, 7.6);
        x.addColorStop(0, "hsla(255,255%,255%,1)"), x.addColorStop(1, "hsla(255,255%,255%,0)"), E.fillStyle = x, E.fillRect(0, 0, v, v);
        let y = new d(0, !0),
            C = [],
            L = new d(0, !0);
        for (var j = 0; j < p; ++j) {
            const t = new i;
            t.a = r() * (f + u), t.b = r() * _, t.c = 1 * (3 * r() + .8), t.d = .1 * h.pow(t.c, 2.5) * 50 * (2 * r() + 1), t.d = t.d < 65 ? 65 : t.d, t.e = t.c / 7.6, t.f = t.d * t.d, t.g = r() * h.PI / 1.3, t.h = 15 * t.c, t.i = 0, t.j = 0, C.push(t)
        }
        s(), EL = a.addEventListener, EL("visibilitychange", () => setTimeout(n, 100), !1), EL("resize", n, !1), e()
  }
  


/**
 * Adds drag functionality to an HTML element.
 *
 * @param {HTMLElement} elmnt - The element to be dragged.
 * @return {void}
 */
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        window.click = 1;
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;

        if (window.click == 1) {
            window.hold = true;
            window.click = 0;
        }
        setTimeout(function () {
            window.hold = false;
        }, 100);
    }
}

/**
 * Returns the user to the home page.
 *
 * @return {void}
 */
function returnHome() {
    currentMenu.fadeOut(300, () => {
        $('#everything-else').fadeIn(200);
        $('.games').hide();
        $('.homepage').fadeIn(200);
    });
    currentMenu = $('.homepage');
    inGame = !preferences.background; // if background is disabled (false) then inGame is set to to true turning off the background
}

/**
function toggleStar(event, star) {
    event.preventDefault();
    event.stopPropagation();
    star.classList.toggle('filled');
}
 * Refreshes the current page by reloading it.
 *
 * @return {void}
 */
function refreshPage() {
    const oldUrl = $('#page-loader iframe').attr('src');
    console.log(oldUrl);
    $('#page-loader iframe').attr('src', '');

    // delay is needed for some reason
    setTimeout(() => {
        $('#page-loader iframe').attr('src', oldUrl);
    }, 10);
}

/**
 * Generates a clone of the current window in an about:blank.
 *
 * @return {void}
 */
function makecloak(replaceUrl = preferences.cloakUrl) {
    if (window.top.location.href !== 'about:blank') {
        var url = window.location.href;
        const win = window.open();
        if (!win || win.closed || typeof win.closed == 'undefined') {
            return;
        }
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.referrerpolicy = 'no-referrer';
        iframe.allow = 'fullscreen';
        iframe.src = url.toString();
        win.document.body.appendChild(iframe);
        window.location.replace(replaceUrl);
    }
}

/**
 * Changes the browser tab's title and favicon
 *
 * @return {void}
 */
function mask(title = preferences.maskTitle, iconUrl = preferences.maskIconUrl) {
    const e = window.top.document;
    e.title = title;
    var link = e.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    e.getElementsByTagName('head')[0].appendChild(link);
}

function popupsAllowed() {
    var windowName = 'userConsole';
    var popUp = window.open(
        '/popup-page.php',
        windowName,
        'width=1000, height=700, left=24, top=24, scrollbars, resizable'
    );
    if (popUp == null || typeof popUp == 'undefined') {
        return false;
    } else {
        popUp.close();
        return true;
    }
}

// Function to mute or unmute all sounds
function toggleMute() {
    // cant find working code rn
  }

function getMainSave() {
    var mainSave = {};

    localStorageSave = Object.entries(localStorage);

    localStorageSave = btoa(JSON.stringify(localStorageSave));

    mainSave.localStorage = localStorageSave;

    cookiesSave = document.cookie;

    cookiesSave = btoa(cookiesSave);

    mainSave.cookies = cookiesSave;

    mainSave = btoa(JSON.stringify(mainSave));

    mainSave = CryptoJS.AES.encrypt(mainSave, 'save').toString();

    return mainSave;
}

function downloadMainSave() {
    var data = new Blob([getMainSave()]);
    var dataURL = URL.createObjectURL(data);

    var fakeElement = document.createElement('a');
    fakeElement.href = dataURL;
    fakeElement.download = 'monkey.data';
    fakeElement.click();
    URL.revokeObjectURL(dataURL);
}

function getMainSaveFromUpload(data) {
    data = CryptoJS.AES.decrypt(data, 'save').toString(CryptoJS.enc.Utf8);

    var mainSave = JSON.parse(atob(data));
    var mainLocalStorageSave = JSON.parse(atob(mainSave.localStorage));
    var cookiesSave = atob(mainSave.cookies);

    for (let item in mainLocalStorageSave) {
        localStorage.setItem(mainLocalStorageSave[item][0], mainLocalStorageSave[item][1]);
    }

    document.cookie = cookiesSave;
}

function uploadMainSave() {
    var hiddenUpload = document.createElement('input');
    hiddenUpload.type = 'file';
    hiddenUpload.accept = '.data';
    document.body.appendChild(hiddenUpload);
    hiddenUpload.click();

    hiddenUpload.addEventListener('change', function (e) {
        var files = e.target.files;
        var file = files[0];

        if (!file) {
            return;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
            getMainSaveFromUpload(e.target.result);

            var uploadResult = document.querySelector('.upload-result');
            uploadResult.innerText = 'Uploaded save!';
            setTimeout(function () {
                uploadResult.innerText = '';
            }, 3000);
        };

        reader.readAsText(file);

        document.body.removeChild(hiddenUpload);
    });
}

const keyConfig = JSON.parse(localStorage.getItem('keyConfig')) || {};
const keySlots = document.querySelectorAll('.keySlot');
const actions = document.querySelectorAll('.slot-action');

for (var slot in keyConfig) {
    if (keyConfig.hasOwnProperty(slot)) {
      for (var key in keyConfig[slot]) {
        if (keyConfig[slot].hasOwnProperty(key)) {
        var correctKey = keyConfig[slot][key];
        var slotDiv = document.getElementById(slot);
        if (slotDiv) {
            if (key.includes("keySlot")) {
                key = key.replace(/-/g, " ");
            }
            var keyElement = slotDiv.getElementsByClassName(key)[0];
            if (keyElement) {
                if (key != "slot-action"){
                    keyElement.textContent = correctKey;
                } else {
                    for (var i = 0; i < keyElement.options.length; i++) {
                        if (keyElement.options[i].value === correctKey) {
                          keyElement.selectedIndex = i;
                          break;
                        }
                      }
                    }
                }
            }
        }
      }
    }
  }
  

actions.forEach((action) => {
    action.addEventListener('change', () => {
        slot = action.parentNode.id;
        if (!keyConfig[slot]) {
            keyConfig[slot] = {};
        }
        keyConfig[slot]["slot-action"] = action.value;
        localStorage.setItem('keyConfig', JSON.stringify(keyConfig));
    });
});

keySlots.forEach((slot) => {
    slot.addEventListener('click', () => {
        slot.textContent = 'Press any key';

        // Add a one-time event listener to capture the key press
        const keyPressHandler = (event) => {
            slot.textContent = event.key;
            document.removeEventListener('keydown', keyPressHandler);
            parSlot = event.target.parentNode.id;
            if (!keyConfig[parSlot]) {
                keyConfig[parSlot] = {};
            }
            key = event.target.className.replace(/ /g, "-");
            keyConfig[parSlot ][key] = event.key;
            localStorage.setItem('keyConfig', JSON.stringify(keyConfig));
        };

        document.addEventListener('keydown', keyPressHandler);
    });
});

var pressedKeys = {};


function onKeyRelease(event) {
    var key = event.key.toLowerCase();
    pressedKeys[key] = false;
}

function onKeyPress(event) {
    var key = event.key.toLowerCase();
    pressedKeys[key] = true
    for (var slot in keyConfig) {
      if (keyConfig.hasOwnProperty(slot)) {
        // Check if the slot has configurations for key-1, key-2, and action
        if (
          keyConfig[slot]["keySlot-1"] &&
          keyConfig[slot]["keySlot-1"] &&
          keyConfig[slot]["slot-action"]
        ) {
          // Check if the pressed keys match the configured keys
          var keyPressed = event.key.toLowerCase();
          var key1Config = keyConfig[slot]["keySlot-1"].toLowerCase();
          var key2Config = keyConfig[slot]["keySlot-2"].toLowerCase();
          var key3Config = (keyConfig[slot]["keySlot-3"] || "").toLowerCase(); //  case where key-3 might not exist
          if (pressedKeys[key1Config] && pressedKeys[key2Config] && ((key3Config) ? pressedKeys[key3Config] : true)) {
            eval(keyConfig[slot]["slot-action"]);
          }
        }
      }
    }
  }
  
  
  document.addEventListener('keydown', onKeyPress);
  document.addEventListener('keyup', onKeyRelease);

const defaultColorSettings = {
    bg: '#202020',
    'block-color': '#2b2b2b',
    'button-color': '#373737',
    'games-color': '#373737a6',
    'hover-color': '#3c3c3c',
    'scrollbar-color': '#434343',
    'scroll-track-color': '#111',
    'font-color': '#dcddde',
};

const colorSettings = JSON.parse(localStorage.getItem('colorSettings')) || defaultColorSettings;

// Set input values
Object.keys(colorSettings).forEach((key) => {
    const inputElement = document.getElementById(key);
    if (inputElement) {
        inputElement.value = colorSettings[key];
    }
});

// Set CSS variables
Object.entries(colorSettings).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
});

// Save changes button event listener
function saveColorChanges() {
    const inputs = document.querySelectorAll('input[type="color"]');
    const newColorSettings = {};

    inputs.forEach((input) => {
        newColorSettings[input.id] = input.value;
    });

    // Save to local storage
    localStorage.setItem('colorSettings', JSON.stringify(newColorSettings));
    alert('Colors saved! Changes will take place upon reload');
}

// Restore defaults button event listener
function restoreColorChanges() {
    // Reset to default values
    localStorage.removeItem('colorSettings');
    alert('Defaults Restored! Changes will take place upon reload');
}

function randomGame() {
    const gameLinks = document.querySelectorAll('#gamesList li');
    const randomIndex = Math.floor(Math.random() * gameLinks.length);
    const randomGameLink = gameLinks[randomIndex];
    // window.location.href = randomGameLink.getAttribute('url');
    const url = randomGameLink.getAttribute('url');
    inGame = true;
    $('#everything-else').fadeOut();
    $('#page-loader').fadeIn();
    $('#page-loader iframe').attr('src', url);
    $('#page-loader iframe')[0].focus();
    currentMenu = $('#page-loader');
}

const preferencesDefaults = {
    cloak: true,
    cloakUrl: 'https://classroom.google.com',
    mask: true,
    maskTitle: 'Home',
    maskIconUrl: 'https://ssl.gstatic.com/classroom/ic_product_classroom_32.png',
    background: true,
};

if (localStorage.getItem('preferences') == null) {
    localStorage.setItem('preferences', JSON.stringify(preferencesDefaults));
}
const preferences = JSON.parse(localStorage.getItem('preferences'));
const cloakCheckbox = document.getElementById('cloakCheckboxInput');
const backgroundCheckbox = document.getElementById('backgroundCheckboxInput');
const cloakUrl = document.getElementById('cloakUrlInput');
const maskCheckbox = document.getElementById('maskCheckboxInput');
const maskTitle = document.getElementById('maskTitleInput');
const maskIcon = document.getElementById('maskIconInput');
cloakCheckbox.checked = preferences.cloak;
cloakUrl.value = preferences.cloakUrl;
maskCheckbox.checked = preferences.mask;
maskTitle.value = preferences.maskTitle;
maskIcon.value = preferences.maskIconUrl;
backgroundCheckbox.checked = preferences.background;

const presets = {
    classroom: {
        url: 'https://classroom.google.com/',
        title: 'Home',
        icon: 'https://ssl.gstatic.com/classroom/ic_product_classroom_32.png',
    },
    drive: {
        url: 'https://drive.google.com/',
        title: 'My Drive - Google Drive',
        icon: 'https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png',
    },
    mail: {
        url: 'https://mail.google.com/',
        title: 'Inbox (12) - Google Mail',
        icon: 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_512dp.png',
    },
    canvas: {
        url: 'https://www.instructure.com/',
        title: 'Dashboard',
        icon: 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico',
    },
};

function setPreset(object) {
    preferences.cloakUrl = object.url;
    preferences.maskTitle = object.title;
    preferences.maskIconUrl = object.icon;
    localStorage.setItem('preferences', JSON.stringify(preferences));
    alert('Preset will take place upon next opening!');
}

function updatePreset() {
    setPreset(presets[document.getElementById('presets').value]);
}

if (preferences.cloak && window.location.href == window.top.location.href) {
    if (popupsAllowed()) {
        makecloak();
    } else {
        currentMenu.fadeOut(300, () => {
            $('.cloaklaunch').fadeIn(200);
        });
        currentMenu = $('.cloaklaunch');
        document.addEventListener('click', (event) => {
            event.preventDefault();
            makecloak();
        });
    }
}

maskCheckbox.addEventListener('change', function () {
    preferences.mask = maskCheckbox.checked;
    localStorage.setItem('preferences', JSON.stringify(preferences));
});

cloakCheckbox.addEventListener('change', function () {
    preferences.cloak = cloakCheckbox.checked;
    localStorage.setItem('preferences', JSON.stringify(preferences));
});

backgroundCheckbox.addEventListener('change', function () {
    preferences.background = backgroundCheckbox.checked;
    localStorage.setItem('preferences', JSON.stringify(preferences));
    inGame = !preferences.background;
});

/* if it is wanted to save on input change wather than submission
document.querySelector('.text-field').addEventListener('change', function () {
    preferences.maskTitle = maskTitle.value;
    localStorage.setItem('preferences', JSON.stringify(preferences));
});
*/

document.getElementById('cloakUrlSubmit').addEventListener('click', function () {
    preferences.cloakUrl = cloakUrl.value;
    localStorage.setItem('preferences', JSON.stringify(preferences));
    alert('Submitted! Change will take place upon refresh');
});

document.getElementById('maskTitleSubmit').addEventListener('click', function () {
    preferences.maskTitle = maskTitle.value;
    localStorage.setItem('preferences', JSON.stringify(preferences));
    alert('Submitted! Change will take place upon refresh');
});

document.getElementById('maskIconSubmit').addEventListener('click', function () {
    preferences.maskIconUrl = maskIcon.value;
    localStorage.setItem('preferences', JSON.stringify(preferences));
    alert('Submitted! Change will take place upon refresh');
});

document.getElementById('download').addEventListener('click', function () {
    downloadMainSave();
});

document.getElementById('upload').addEventListener('click', function () {
    uploadMainSave();
});

/* if (preferences.cloak && !localStorage.getItem("cloakTabOpened")){
    if (window.top.location.href !== "about:blank"){
        localStorage.setItem("cloakTabOpened", "true");
        document.addEventListener("click", (event) => {event.preventDefault(); makecloak()});
    }
    makecloak();

    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("cloakTabOpened");
    });
} */

if (preferences.mask) {
    mask();
}
