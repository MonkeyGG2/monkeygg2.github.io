(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    targetY = null;
    let prevY = 0;
    let prevSm = 0;
    let prevS = 0;
    let xprevY = 0;
    let xprevSm = 0;
    let xprevS = 0;
    let sex = new Date();
    let sexs = sex.getMilliseconds();
    let timescale = 1;
    let rounder = 5;
    let showPosition = {
        tick() {
            if (
                !cr_getC2Runtime().running_layout.layers.find(function (a) {
                    return "Pause" === a.name;
                }).visible
            ) {
                cr_getC2Runtime().timescale = timescale;
                try {
                    if (timescale > 0) {
                        deeznuts();
                    }
                } catch (err) { }
            }
        },
    };

    function deeznuts() {
        let baka = timescale == 0 ? 1 : timescale
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
        let sex = new Date();
        let sexsincelast = sex.getMilliseconds() - sexs;

        document.getElementById("69").innerText =
            "Timescale: " +
            timescale +
            "\n" +
            "\n" +
            "x: " +
            balls(player.x, rounder).toString() +
            "\n" +
            "y: " +
            balls(player.y, rounder).toString() +
            "\n" +
            "\n" +
            "Vertical Speed: " +
            "\n" +
            "p/ms: " +
            balls((player.y - prevY) / sexsincelast / baka, rounder).toString() +
            "\n" +
            "A/ms: " +
            balls(
                prevS - (player.y - prevY) / sexsincelast / baka,
                rounder
            ).toString() +
            "\n" +
            "p/f: " +
            balls((player.y - prevY) / baka, rounder).toString() +
            "\n" +
            "A/f: " +
            balls(prevSm - (player.y - prevY) / baka, rounder).toString() +
            "\n" +
            "\n" +
            //Owa oaw------------------------------------------
            "Horizontal Speed: " +
            "\n" +
            "p/ms: " +
            balls(
                (player.x - xprevY) / sexsincelast / baka,
                rounder
            ).toString() +
            "\n" +
            "A/ms: " +
            balls(
                xprevS - (player.x - xprevY) / sexsincelast / baka,
                rounder
            ).toString() +
            "\n" +
            "p/f: " +
            balls((player.x - xprevY) / baka, rounder).toString() +
            "\n" +
            "A/f: " +
            balls(xprevSm - (player.x - xprevY) / baka, rounder).toString() +
            "\n" +
            "\n" +
            "PPms: " +
            balls(player.x + xprevS, rounder).toString() +
            ", " +
            balls(player.y + prevS, rounder).toString() +
            "\n" +
            "PPf: " +
            balls(player.x + xprevSm, rounder).toString() +
            ", " +
            balls(player.y + prevSm, rounder).toString() +
            "\n" +
            "\n" +
            "ms/f:" +
            sexsincelast.toString() +
            "\n" +
            "A ms/f:" +
            sexsincelast.toString() * baka;

        prevSm = (player.y - prevY) / baka;
        prevS = (player.y - prevY) / sexsincelast / baka;
        prevY = player.y;

        xprevS = (player.x - xprevY) / sexsincelast / baka;
        xprevSm = (player.x - xprevY) / baka;
        xprevY = player.x;

        sexs = sex.getMilliseconds();
    }

    function balls(b, af) {
        return Math.round(b * 10 ** af) / 10 ** af;
    }
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
            backgroundColor: "rgba(150,10,1,0.7)",
            width: "500px",
            height: "600px",
            position: "absolute",
            top: "100px",
            left: "100px",
            fontSize: "x-large",
        };
    Object.keys(c).forEach(function (a) {
        b.style[a] = c[a];
    });
    b.id = 69;
    const newContent = document.createTextNode("poggers");

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
        step: function () {
            var a = cr_getC2Runtime().timescale;
            cr_getC2Runtime().timescale = 1;
            cr_getC2Runtime().tick(!0, null, null);
            cr_getC2Runtime().timescale = a;
            deeznuts();
        },
        suspend: function () {
            cr_getC2Runtime().timescale = 0;
            timescale = 0;
        },
        updateTimescale: function (a) {
            timescale = a;
            cr_getC2Runtime().timescale = a;
        },
        setRoundDigits: function (a) {
            rounder = a;
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