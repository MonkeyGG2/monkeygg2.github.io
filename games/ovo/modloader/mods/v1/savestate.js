(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    targetY = null;
    let showPosition = {
        tick() {
            let playerInstances = runtime.types_by_index
                .filter(
                    (x) =>
                        !!x.animations &&
                        x.animations[0].frames[0].texture_file.includes("collider")
                )[0]
                .instances.filter(
                    (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
                );
            let player = playerInstances[0];
            try {
                document.getElementById("pos").innerHTML =
                    Math.round(player.x.toString()) +
                    ", " +
                    Math.round(player.y.toString());
            } catch (err) { }
        },
    };

    let fly = {
        tick() {
            let playerInstances = runtime.types_by_index
                .filter(
                    (x) =>
                        !!x.animations &&
                        x.animations[0].frames[0].texture_file.includes("collider")
                )[0]
                .instances.filter(
                    (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
                );
            let player = playerInstances[0];
            try {
                player.y = targetY;
            } catch (err) { }
        },
    };

    var b = document.createElement("div"),
        c = {
            backgroundColor: "white",
            border: "solid",
            borderColor: "black",
            borderWidth: "6px",
            fontFamily: "Retron2000",
            position: "absolute",
            top: "115px",
            left: "86px",
            padding: "10px",
            color: "black",
            fontSize: "20pt",
        };
    Object.keys(c).forEach(function (a) {
        b.style[a] = c[a];
    });
    b.id = "pos";
    const newContent = document.createTextNode("N/A");

    // add the text node to the newly created div
    b.appendChild(newContent);

    document.body.appendChild(b);

    g = globalThis.ovoExplorer = {
        init: function () {
            runtime.tickMe(showPosition);
        },

        trackOvO: function (a) {
            a ? runtime.tickMe(showPosition) : runtime.untickMe(showPosition);
        },

        warp: function (x, y) {
            targetY = y;
            let playerInstances = runtime.types_by_index
                .filter(
                    (x) =>
                        !!x.animations &&
                        x.animations[0].frames[0].texture_file.includes("collider")
                )[0]
                .instances.filter(
                    (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
                );
            let player = playerInstances[0];
            player.x = x;
            player.y = y;
        },

        levitate: function (a) {
            let playerInstances = runtime.types_by_index
                .filter(
                    (x) =>
                        !!x.animations &&
                        x.animations[0].frames[0].texture_file.includes("collider")
                )[0]
                .instances.filter(
                    (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
                );
            let player = playerInstances[0];
            targetY = player.y;
            a ? runtime.tickMe(fly) : runtime.untickMe(fly);
        },
    };
    g.init();
})();

(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

    //Get all valid players on the layout
    // Ghosts don't count as valid players, and replays don't count either

    let notify = (text, title = "Save state", image = "./speedrunner.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };

    notify(
        "Save state with Shift+S, load with S, reset with R, reset sate with Shift+R, skip level with Shift+N, go back in level with Shift+B",
        "Mod loaded"
    );

    let getPlayer = () =>
        runtime.types_by_index
            .filter(
                (x) =>
                    !!x.animations &&
                    x.animations[0].frames[0].texture_file.includes("collider")
            )[0]
            .instances.filter(
                (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
            )[0];
    let getFlag = () =>
        runtime.types_by_index.find(
            (x) =>
                x.name === "EndFlag" ||
                (x.plugin instanceof cr.plugins_.Sprite &&
                    x.all_frames &&
                    x.all_frames[0].texture_file.includes("endflag"))
        ).instances[0];
    let getCoin = () =>
        runtime.types_by_index.find(
            (x) =>
                x.name === "Coin" ||
                (x.plugin instanceof cr.plugins_.Sprite &&
                    x.all_frames &&
                    x.all_frames[0].texture_file.includes("coin"))
        ).instances[0];
    let curState = null;
    let curLayout = null;
    let saveState = () => {
        notify("Saved player state", "State Saved");
        let state = runtime.saveInstanceToJSON(getPlayer(), true);
        return state;
    };
    let loadState = (state) => {
        let player = getPlayer();
        player.y -= 10;
        player.set_bbox_changed();
        player.behavior_insts[0].lastFloorObject = null;
        notify("Loaded player state", "State Loaded");
        runtime.loadInstanceFromJSON(player, state, true);
    };
    document.addEventListener("keydown", (event) => {
        if (!getFlag()) {
            return;
        }
        if (event.code === "KeyS") {
            if (event.shiftKey) {
                curState = saveState();
            } else if (curState != null) {
                loadState(curState);
            }
        }
        if (event.code === "KeyR" && event.shiftKey) {
            curState = null;
            runtime.changeLayout = runtime.runningLayout;
            notify("State reset by soft level reset (Shift + R)", "State Reset");
        }
        if (event.code === "KeyN") {
            if (event.shiftKey) {
                runtime.changelayout = runtime.layouts["Level " + String(parseInt(runtime.running_layout.name.split(' ')[1]) + 1)]
                setTimeout(() => {
                    notify("Going to next level bypass (Shift + N)", "Next Level");
                }, 300);
            }
        }
        if (event.code === "KeyM") {
            if (event.shiftKey) {
                let player = getPlayer();
                let flag = getFlag();
                player.x = flag.x;
                player.y = flag.y;
                player.set_bbox_changed();
                setTimeout(() => {
                    notify("Going to next level (Shift + M)", "Next Level");
                }, 300);
            }
        }
        if (event.code === "KeyB") {
            if (event.shiftKey) {
                runtime.changelayout = runtime.layouts["Level " + String(parseInt(runtime.running_layout.name.split(' ')[1]) - 1)]
                setTimeout(() => {
                    notify("Going to next level (Shift + N)", "Next Level");
                }, 300);
            }
        }
        if (event.code === "KeyC") {
            if (event.shiftKey) {
                let player = getPlayer();
                let flag = getCoin();
                player.x = flag.x;
                player.y = flag.y;
                player.set_bbox_changed();
                setTimeout(() => {
                    notify("Going to coin (Shift + C)", "Coin");
                }, 300);
            }
        }
    });

    Object.values(runtime.layouts).forEach((layout) => {
        let oldFn = layout.startRunning.bind(layout);
        layout.startRunning = () => {
            oldFn();
            if (!getFlag()) {
                curLayout = layout.name;
                curState = null;
            } else {
                if (curState && curLayout === layout.name) loadState(curState);
                else curState = null;
                curLayout = layout.name;
            }
        };
    });
})();