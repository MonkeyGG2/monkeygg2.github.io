(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

    let stored = [1500, true];
    let go = false;
    let held = [false, false, false, false];
    let xSpeed = 10;
    let ySpeed = 10;
    let getPlayer = () => {
        return runtime.types_by_index
            .filter(
                (x) =>
                    !!x.animations &&
                    x.animations[0].frames[0].texture_file.includes("collider")
            )[0]
            .instances.filter(
                (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
            )[0];
    }
    let ba = {
        tick() {
            try {
                let player = getPlayer();
                if (go) {
                    moveX = held[2] - held[0];
                    moveY = held[3] - held[1];
                    player.behavior_insts[0].dx = 0;
                    player.behavior_insts[0].dy = 0;
                    player.behavior_insts[0].g = 0;
                    player.collisionsEnabled = false
                    player.x += moveX * xSpeed;
                    player.y += moveY * ySpeed;
                } else { }
            } catch (err) { }
        },
    };

    g = globalThis.FlyMod = {
        xSpeed: function (a) {
            xSpeed = a;
        },

        ySpeed: function (a) {
            ySpeed = a;
        },
    }

    runtime.tickMe(ba);


    document.addEventListener("keydown", function (event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            held[event.keyCode - 37] = true;
        }
        if (event.keyCode == 16) {
            let player = getPlayer();
            if (player) {
                stored = [player.behavior_insts[0].g, player.collisionsEnabled];
            }
            go = true;
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            held[event.keyCode - 37] = false;
        }
        if (event.keyCode == 16) {
            go = false;
            let player = getPlayer();
            if (player) {
                player.behavior_insts[0].g = stored[0];
                player.collisionsEnabled = stored[1];
            }
        }
    });
})();