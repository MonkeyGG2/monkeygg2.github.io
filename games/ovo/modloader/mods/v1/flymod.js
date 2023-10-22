(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

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

    let flyMod = {
        init() {
            this.movementKeys = [false, false, false, false];
            this.activatorKeyHeld = false;
            this.activated = false;
            this.speed = { x: 10, y: 10 };
            this.stored = [1500, true];
            this.override = false;

            document.addEventListener("keydown", (event) => { this.keyDown(event) });
            document.addEventListener("keyup", (event) => { this.keyUp(event) });

            runtime.tickMe(this);

            globalThis.ovoFlyMod = this;
        },

        keyDown(event) {
            let key = event.key.toLowerCase();

            if (key == "control" && !this.override) {
                this.activatorKeyHeld = true;
            } else if (event.keyCode >= 37 && event.keyCode <= 40 && this.activatorKeyHeld) {
                if (!this.activated) {
                    this.startActivation();
                    this.activated = true;
                }

                this.movementKeys[event.keyCode - 37] = true;
            }
        },

        keyUp(event) {
            let key = event.key.toLowerCase();

            if (key == "control" && this.activatorKeyHeld) {
                this.activatorKeyHeld = false;

                if (this.activated) {
                    this.movementKeys = [false, false, false, false];
                    this.activated = false;
                    this.endActivation();
                }
            } else if (event.keyCode >= 37 && event.keyCode <= 40 && this.activatorKeyHeld) {
                this.movementKeys[event.keyCode - 37] = false;
            }
        },

        startActivation() {
            let player = getPlayer();

            if (player) {
                this.stored = [player.behavior_insts[0].g, player.collisionsEnabled];
            } else {
                this.stored = [1500, true];
            }

            notify("Fly Mod", "Fly Enabled");
        },

        endActivation() {
            let player = getPlayer();

            if (player) {
                player.behavior_insts[0].g = this.stored[0];
                player.collisionsEnabled = this.stored[1];
            }

            notify("Fly Mod", "Fly Disabled");
        },

        speedX(speed) {
            this.speed.x = speed;
        },

        speedY(speed) {
            this.speed.y = speed;
        },

        setSpeed(speed) {
            this.speed.x = speed;
            this.speed.y = speed;
        },

        setOverride(value) {
            this.override = !!value;
        },

        tick() {
            if (this.activated) {
                let player = getPlayer();

                if (player) {
                    if (!!player.behavior_insts[0].g || player.collisionsEnabled) {
                        player.behavior_insts[0].g = 0;
                        player.collisionsEnabled = false
                    }

                    let moveX = this.movementKeys[2] - this.movementKeys[0];
                    let moveY = this.movementKeys[3] - this.movementKeys[1];
                    player.x += moveX * this.speed.x;
                    player.y += moveY * this.speed.y;
                }
            }
        }
    };

    flyMod.init();
})();