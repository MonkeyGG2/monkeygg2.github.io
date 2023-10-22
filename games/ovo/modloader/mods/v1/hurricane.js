(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    let counter = 0;

    let wind = {
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
                counter++;
                switch (Math.floor((counter % 2000) / 500)) {
                    case 0:
                        player.x = player.x - 1;
                        break;
                    case 1:
                        player.x = player.x + 1;
                        break;
                    case 2:
                        player.y = player.y - 3;
                        break;
                    case 3:
                        player.y = player.y + 3;
                        break;
                }
            } catch (err) { }
        },
    };

    g = globalThis.ovoExplorer = {
        init: function () {
            runtime.tickMe(wind);
        },
    };
    g.init();
})();