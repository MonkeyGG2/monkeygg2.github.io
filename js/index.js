let currentMenu = $(".homepage");

$(".column button .card").on("click", function () {
    let nextMenu = this.getAttribute("data");
    if (nextMenu == "homepage") {
        $(".side-buttons").fadeOut(300);
    }

    currentMenu.fadeOut(300, () => {
        $("." + nextMenu).fadeIn(200);
    });
    currentMenu = $(nextMenu);

    if (currentMenu != $(".homepage")) {
        $(".side-buttons").fadeIn(200);
    }
});

// Function to calculate the
// Jaro Similarity of two strings
// from https://www.geeksforgeeks.org/jaro-and-jaro-winkler-similarity/
function jaro_distance(s1, s2) {
    // If the strings are equal
    if (s1 == s2)
        return 1.0;

    // Length of two strings
    let len1 = s1.length, len2 = s2.length;

    if (len1 == 0 || len2 == 0)
        return 0.0;

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
        for (let j = Math.max(0, i - max_dist);
            j < Math.min(len2, i + max_dist + 1); j++)

            // If there is a match
            if (s1[i] == s2[j] &&
                hash_s2[j] == 0) {
                hash_s1[i] = 1;
                hash_s2[j] = 1;
                match++;
                break;
            }
    }

    // If there is no match
    if (match == 0)
        return 0.0;

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
            while (hash_s2[point] == 0)
                point++;

            if (s1[i] != s2[point++])
                t++;
        }
    t /= 2;

    // Return the Jaro Similarity
    return ((match) / (len1)
        + (match) / (len2)
        + (match - t) / (match))
        / 3.0;
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
            if (s1[i] == s2[i])
                prefix++;

            // Else break
            else
                break;
        }

        // Maximum of 4 characters are allowed in prefix
        prefix = Math.min(4, prefix);

        // Calculate jaro winkler Similarity
        jaro_dist += 0.1 * prefix * (1 - jaro_dist);
    }
    return jaro_dist.toFixed(6);
}


function searchGamesList() {
    const input = $("#search");
    const filter = input.val().toLowerCase();
    const elems = Array.from(document.querySelectorAll("#gamesList li"));

    for (i = 0; i < elems.length; i++) {
        if (jaroWinklerSimilarity(filter, elems[i].innerHTML.toLowerCase().slice(0, filter.length - 1)) >= 0.9 && elems[i].innerHTML.length > 3 || elems[i].innerHTML.toLowerCase().indexOf(filter) > -1) {
            elems[i].style.display = "";
        } else {
            elems[i].style.display = "none";
        }
    }
}

function updateList() {
    const filter = $("#search").val().toLowerCase();
    const elems = Array.from(document.querySelectorAll("#gamesList li"));
    const sortType = $("#sort").val();

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
        if (jaroWinklerSimilarity(filter, item.innerHTML.toLowerCase().slice(0, filter.length - 1)) >= 0.9 && item.innerHTML.length > 3 || item.innerHTML.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });

    // now sort by jaro winkler distance
    elems.sort(function (a, b) {
        const distanceA = jaroWinklerSimilarity(filter, a.textContent.toLowerCase());
        const distanceB = jaroWinklerSimilarity(filter, b.textContent.toLowerCase());

        return distanceA - distanceB;
    })

    // then fill it with the sorted and filtered list
    for (const item of elems) {
        document.getElementById("gamesList").appendChild(item);
    }
}
$("#search").on("input", updateList);
$("#sort").on("change", updateList);

function makeclone() {
    if ((window.top.location.href != "about:blank")) {
        var url = window.location.href;
        win = window.open();
        if (!win || win.closed || typeof win.closed == 'undefined') {
            alert('Please allow Pop-Ups - By disabling popups, you allow this website to show up in your history.');
        } else {
            win.document.body.style.margin = "0";
            win.document.body.style.height = "100vh";
            var iframe = win.document.createElement("iframe");
            iframe.style.border = "none";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.margin = "0";
            iframe.referrerpolicy = "no-referrer";
            iframe.allow = "fullscreen";
            iframe.src = url.toString();
            win.document.body.appendChild(iframe);
            window.location.replace("https://classroom.google.com");
        }
    }
}
