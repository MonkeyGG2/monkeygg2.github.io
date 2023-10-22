(function () {
    // Get runtime
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

    // Util stuff
    let clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    let notify = (title, text, image = "./speedrunner.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };

    let addScript = (src, id, onload) => {
        if (document.getElementById(id)) return;
        let fjs = document.getElementsByTagName("script")[0];
        let js = document.createElement("script");
        js.id = id;
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = onload;
        js.src = src;
    };

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
    };

    let getFlag = () => {
        return runtime.types_by_index.find(
            (x) =>
                x.name === "EndFlag" ||
                (x.plugin instanceof cr.plugins_.Sprite &&
                    x.all_frames &&
                    x.all_frames[0].texture_file.includes("endflag"))
        ).instances[0];
    };

    let ai = {
        init() {
            this.network_config = { hiddenLayers: [3, 4, 5] };
            this.train_config = { log: false };
            this.enabled = false;
            this.threshold = 0.5;
            this.prevInputs = { up: Math.random(), down: Math.random(), left: Math.random(), right: Math.random() };
            this.prevDistance = Infinity;
            this.failRandomness = 0.2;
            this.correctRandomness = 0.1;
            this.frameLimit = 500;
            this.frame = 0;

            runtime.tickMe(this);
            globalThis.ovoAi = this;
        },
        resetLevel() {
            c2_callFunction("Menu > Replay");
        },
        playInputs(inputs) {
            if (inputs.up > this.threshold) c2_callFunction("Controls > Buffer", ["Jump"]);
            if (inputs.down > this.threshold) c2_callFunction("Controls > Down");
            if (inputs.left > this.threshold) c2_callFunction("Controls > Left In");
            else if (inputs.left <= this.threshold) c2_callFunction("Controls > Left Out");
            if (inputs.right > this.threshold) c2_callFunction("Controls > Right In");
            else if (inputs.right <= this.threshold) c2_callFunction("Controls > Right Out");
        },

        start() {
            this.network = new brain.NeuralNetwork(this.network_config);
            this.network.train([{ input: {}, output: { up: Math.random(), down: Math.random(), left: Math.random(), right: Math.random() } }], this.train_config); // figure out what data to send, possible position, solid, flag, spike
            this.enabled = true;
        },

        stop() {
            this.prevInputs = { up: Math.random(), down: Math.random(), left: Math.random(), right: Math.random() };
            this.prevDistance = Infinity;
            this.frame = 0;
            delete this.beginDistance;
            delete this.endDistance;
            delete this.network;
            this.enabled = false;
        },

        addRandom(json) {
            newJson = {}

            Object.entries(json).forEach((item) => {
                newJson[item[0]] = clamp(item[1] + ((Math.random() - 0.5) * this.failRandomness * 2), 0, 1);
            });

            return newJson;
        },

        tick() {
            let player = getPlayer();
            let flag = getFlag();
            let layout = runtime.running_layout;

            if (this.enabled && player && flag && this.frame < 1) {
                this.beginDistance = Math.sqrt((flag.x - player.x) ** 2, (flag.y - player.y) ** 2);
            }

            if (this.enabled && player && flag && this.frame <= this.frameLimit) {
                let pos = { playerx: player.x / layout.width, playery: player.y / layout.height, flagx: flag.x / layout.width, flagy: flag.y / layout.height };
                let inputs = this.network.run({ ...this.prevInputs, ...pos });
                this.playInputs(inputs);
                this.prevInputs = inputs;
                this.frame++;
            } else if (this.enabled && player && flag && this.frame > this.frameLimit) {
                let pos = { playerx: player.x / layout.width, playery: player.y / layout.height, flagx: flag.x / layout.width, flagy: flag.y / layout.height };
                let endDistance = Math.sqrt((flag.x - player.x) ** 2, (flag.y - player.y) ** 2);

                if (endDistance < this.beginDistance && endDistance <= this.prevDistance) {
                    let inputs = this.network.run({ ...this.prevInputs, ...pos });
                    this.network.train([{ input: { ...this.prevInputs, ...pos }, output: { ...this.addRandom(inputs) } }]);
                } else if (endDistance <= this.prevDistance) {
                    this.prevDistance = endDistance;
                }

                this.resetLevel();
                this.frame = 0;
            }
        }
    };

    addScript("https://unpkg.com/brain.js@latest/dist/brain-browser.min.js", "brainJs", ai.init.bind(ai));
})();