function initAPI(version) {
  var ModAPI = {};
  ModAPI.events = {};
  ModAPI.events.types = ["event"];
  ModAPI.events.listeners = { "event": [] };
  ModAPI.globals = {};
  ModAPI.version = version;

  ModAPI.addEventListener = function AddEventListener(name, callback) {
    if (!callback) {
      throw new Error("Invalid callback!");
    }
    if (ModAPI.events.types.includes(name)) {
      if (!Array.isArray(ModAPI.events.listeners[name])) {
        ModAPI.events.listeners[name] = [];
      }
      ModAPI.events.listeners[name].push(callback);
      console.log("Added new event listener.");
    } else {
      throw new Error("This event does not exist!");
    }
  };

  ModAPI.removeEventListener = function removeEventListener(name, func, slow) {
    if (!func) {
      throw new Error("Invalid callback!");
    }
    if (!Array.isArray(ModAPI.events.listeners[name])) {
      ModAPI.events.listeners[name] = [];
    }
    var targetArr = ModAPI.events.listeners[name];
    if (!slow) {
      if (targetArr.indexOf(func) !== -1) {
        targetArr.splice(targetArr.indexOf(func), 1);
        console.log("Removed event listener.");
      }
    } else {
      var functionString = func.toString();
      targetArr.forEach((f, i) => {
        if (f.toString() === functionString) {
          targetArr.splice(i, 1);
          console.log("Removed event listener.");
        }
      });
    }
  };

  ModAPI.events.newEvent = function newEvent(name) {
    ModAPI.events.types.push(name);
  };

  ModAPI.events.callEvent = function callEvent(name, data) {
    if (
      !ModAPI.events.types.includes(name) ||
      !Array.isArray(ModAPI.events.listeners[name])
    ) {
      if (!Array.isArray(ModAPI.events.listeners[name])) {
        if (ModAPI.events.types.includes(name)) {
          ModAPI.events.listeners.event.forEach((func) => {
            func({ event: name, data: data });
          });
          return;
        }
        return;
      }
      console.error(
        "The ModAPI has been called with an invalid event name: " + name
      );
      console.error("Please report this bug to the repo.");
      return;
    }
    ModAPI.events.listeners[name].forEach((func) => {
      func(data);
    });
    ModAPI.events.listeners.event.forEach((func) => {
      func({ event: name, data: data });
    });

    ModAPI.globals._initUpdate();
  };

  ModAPI.updateComponent = function updateComponent(component) {
    if (
      typeof component !== "string" ||
      ModAPI[component] === null ||
      ModAPI[component] === undefined
    ) {
      return;
    }
    if (!ModAPI.globals || !ModAPI.globals.onGlobalsUpdate) {
      return;
    }
    if (!ModAPI.globals.toUpdate) {
      ModAPI.globals.toUpdate = [];
    }
    if (ModAPI.globals.toUpdate.indexOf(component) === -1) {
      ModAPI.globals.toUpdate.push(component);
    }
  };

  ModAPI.require = function require(component) {
    if (typeof component !== "string") {
      return;
    }
    if (!ModAPI.globals || !ModAPI.globals.onRequire) {
      return;
    }
    ModAPI.globals.onRequire(component);
  };

  ModAPI.globals._initUpdate = function _initUpdate() {
    if (!ModAPI.globals.toUpdate) {
      ModAPI.globals.toUpdate = [];
    }
    ModAPI.globals.toUpdate.forEach((id) => {
      ModAPI.globals.onGlobalsUpdate(id);
    });
    ModAPI.globals.toUpdate = [];
  };
  

  window.ModAPI = ModAPI;
}