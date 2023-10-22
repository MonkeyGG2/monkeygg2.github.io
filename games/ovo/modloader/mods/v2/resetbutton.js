(function() {
    let runtime = c3_runtimeInterface._GetLocalRuntime();
    let notify = () => {};

    let resetButton = {
        init() {
            document.addEventListener("keydown", (event) => {this.keydown(event)})
          
            globalThis.ovoResetButton = this;
            notify("Mod Loaded", "Reset Button Mod Loaded");
        },
      
        keydown(event) {
            if (event.key.toLowerCase() == "r") {
                runtime._layoutManager._pendingChangeLayout = runtime._layoutManager._mainRunningLayout;
            }
        }
    };
    resetButton.init();
})();