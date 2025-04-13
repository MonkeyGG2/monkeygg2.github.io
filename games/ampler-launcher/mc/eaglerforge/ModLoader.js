function loadLoader() {
  window.ModLoader = function ModLoader(ModsArr) {
    if (!window.eaglerMLoaderMainRun) {
      var searchParams = new URLSearchParams(location.search);
      searchParams.getAll("Mod").forEach((ModToAdd) => {
        console.log(
          "EaglerML: Adding Mod to loadlist from search params: " + ModToAdd
        );
        ModsArr.push(ModToAdd);
      });
      if (
        !!eaglercraftXOpts &&
        !!eaglercraftXOpts.Mods &&
        Array.isArray(eaglercraftXOpts.Mods)
      ) {
        eaglercraftXOpts.Mods.forEach((ModToAdd) => {
          console.log(
            "EaglerML: Adding Mod to loadlist from eaglercraftXOpts: " +
              ModToAdd
          );
          ModsArr.push(ModToAdd);
        });
      }
      window.eaglerMLoaderMainRun = true;
    }
    if (window.noLoadMods === true) {
      ModsArr.splice(0, ModsArr.length);
    }
    function checkModsLoaded(totalLoaded, identifier) {
      console.log(
        "EaglerML: Checking if Mods are finished :: " +
          totalLoaded +
          "/" +
          ModsArr.length
      );
      if (totalLoaded >= ModsArr.length) {
        clearInterval(identifier);
        window.ModGracePeriod = false;
        if (
          window.eaglerMLoaderMainRun &&
          ModAPI &&
          ModAPI.events &&
          ModAPI.events.callEvent
        ) {
          ModAPI.events.callEvent("load", {});
        }
        console.log(
          "EaglerML: Checking if Mods are finished :: All Mods loaded! Grace period off."
        );
      }
    }
    function methodB(currentMod) {
      try {
        console.log("EaglerML: Loading " + currentMod + " via method B.");
        var script = document.createElement("script");
        script.src = currentMod;
        script.setAttribute("data-Mod", currentMod);
        script.setAttribute("data-isMod", true);
        script.onerror = () => {
          console.log(
            "EaglerML: Failed to load " + currentMod + " via method B!"
          );
          script.remove();
          totalLoaded++;
        };
        script.onload = () => {
          console.log(
            "EaglerML: Successfully loaded " + currentMod + " via method B."
          );
          totalLoaded++;
        };
        document.body.appendChild(script);
      } catch (error) {
        console.log(
          "EaglerML: Oh no! The Mod " + currentMod + " failed to load!"
        );
        totalLoaded++;
      }
    }
    window.ModGracePeriod = true;
    var totalLoaded = 0;
    var loaderCheckInterval = null;
    ModsArr.forEach((c) => {
      let currentMod = c;
      console.log("EaglerML: Starting " + currentMod);
      try {
        var req = new XMLHttpRequest();
        req.open("GET", currentMod);
        req.onload = function xhrLoadHandler() {
          console.log("EaglerML: Loading " + currentMod + " via method A.");
          var script = document.createElement("script");
          try {
            script.src =
              "data:text/javascript," + encodeURIComponent(req.responseText);
          } catch (error) {
            methodB(currentMod);
            return;
          }
          script.setAttribute("data-Mod", currentMod);
          script.setAttribute("data-isMod", true);
          script.onerror = () => {
            console.log(
              "EaglerML: Failed to load " + currentMod + " via method A!"
            );
            script.remove();
            totalLoaded++;
          };
          script.onload = () => {
            console.log(
              "EaglerML: Successfully loaded " + currentMod + " via method A."
            );
            totalLoaded++;
          };
          document.body.appendChild(script);
        };
        req.onerror = function xhrErrorHandler() {
          methodB(currentMod);
        };
        req.send();
      } catch (error) {
        methodB(currentMod);
      }
    });
    loaderCheckInterval = setInterval(() => {
      checkModsLoaded(totalLoaded, loaderCheckInterval);
    }, 500);
    console.log(
      "EaglerML: Starting to load " + ModsArr.length + " Mods..."
    );
    window.returntotalloadedmods = function returntotalloadedmods(){
      return totalLoaded
    }
  };
}