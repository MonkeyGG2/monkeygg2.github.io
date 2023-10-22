// new features: onLevelLoad
// onbboxchanged
// speed 
// Math.round(Math.sqrt(Math.pow(player.behavior_insts[0].dx, 2) + Math.pow(player.behavior_insts[0].dy, 2)));

(function () {
    const modapi = {
        init() {
            this.game.init();
            this.ui.init();
            this.keybind.init();

            globalThis.ovoModAPI = this;
        },

        game: {
            init() {
                this.runtime = cr_getC2Runtime();
            },

            tick(functionToTick) {
                const tick = {
                    tick() {
                        functionToTick();
                    }
                }

                this.runtime.tickMe(tick);
            },

            getGameValues() {
                return {
                    tickCount: this.runtime.tickcount,
                    fps: this.runtime.fps,
                    frameCount: this.runtime.framecount,
                    deltaTime: this.runtime.dt,
                    width: this.runtime.width,
                    height: this.runtime.height,
                };
            },

            notify(title, text, image = "./speedrunner.png") {
                cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
                    this.runtime.types_by_index.find(
                        (type) => type.plugin instanceof cr.plugins_.sirg_notifications
                    ).instances[0],
                    title,
                    text,
                    image
                );
            },

            getPlayer() {
                return this.runtime.types_by_index
                    .filter(
                        (x) =>
                            !!x.animations &&
                            x.animations[0].frames[0].texture_file.includes("collider")
                    )[0]
                    .instances.filter(
                        (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
                    )[0];
            },

            getFlag() {
                return this.runtime.types_by_index.find(
                    (x) =>
                        x.name === "EndFlag" ||
                        (x.plugin instanceof cr.plugins_.Sprite &&
                            x.all_frames &&
                            x.all_frames[0].texture_file.includes("endflag"))
                ).instances[0];
            },

            getCoin() {
                return this.runtime.types_by_index.find(
                    (x) =>
                        x.name === "Coin" ||
                        (x.plugin instanceof cr.plugins_.Sprite &&
                            x.all_frames &&
                            x.all_frames[0].texture_file.includes("coin"))
                ).instances[0];
            },

            getLayout(layoutName) {
                return this.runtime.layouts[layoutName] || this.runtime.running_layout;
            },

            setLayout(layout) {
                this.runtime.changelayout = layout;
            },

            getLayer(layerName = "Layer 0") {
                return this.runtime.running_layout.layers.find(x => x.name === layerName)
            },

            layerScale(layer, scale) {
                layer.scale = scale;
                return layer;
            },

            //platformScale(platform, scale) {
            //    platform.behavior.my_types[0].all_frames.forEach((frame) => {
            //        frame.height /= scale;
            //        frame.width /= scale;
            //    });
            //  
            //    platform.inst.height *= scale;
            //    platform.inst.width *= scale;
            //  
            //    return platform;
            //},

            moveInstance(instance, x, y) {
                instance.x = x;
                instance.y = y;
                instance.set_bbox_changed();
                return instance;
            },

            rotateInstance(instance, angle) {
                instance.angle = modapi.math.degreeToRadian(angle);
                instance.set_bbox_changed();
                return instance;
            },

            resizeInstance(instance, width, height) {
                instance.width = width;
                instance.height = height;
                instance.set_bbox_changed();
                return instance;
            },

            instanceOpacity(instance, opacity) {
                instance.opacity = opacity;
                return instance;
            },

            destroyInstance(instance) {
                this.runtime.DestroyInstance(instance);
            },

            createSolid(x, y, width, height, angle, layer) {
                const solidType = this.runtime.types_by_index.find(x => x.plugin instanceof cr.plugins_.TiledBg && x.texture_file && x.texture_file.includes("/solid.png") && x.behs_count === 2);

                const solid = this.runtime.createInstance(solidType, layer, x, y);
                solid.width = width || solid.width;
                solid.height = height || solid.height;;
                solid.angle = angle || solid.angle;
                solid.set_bbox_changed();
                return solid;
            },

            createSprite(x, y, width, height, angle, spriteName, layer) {
                const spriteType = this.runtime.types_by_index.find(x => x.plugin instanceof cr.plugins_.Sprite && x.all_frames && x.all_frames[0].texture_file.includes(spriteName));

                const sprite = this.runtime.createInstance(spriteType, layer, x, y);
                sprite.width = width || sprite.width;
                sprite.height = height || sprite.height;;
                sprite.angle = angle || sprite.angle;
                sprite.set_bbox_changed();
                return sprite;
            },

            isInLevel() {
                return this.runtime.running_layout.name.startsWith("Level")
            },

            isPaused() {
                if (this.isInLevel()) return this.runtime.running_layout.layers.find(function (a) {
                    return "Pause" === a.name
                }).visible
            },
        },

        ui: {
            init() {

            }
        },

        keybind: {
            init() {
                this.events = [];

                document.addEventListener("keydown", (event) => {
                    this.events.forEach((keybind) => {
                        if (event.key.toLowerCase() == keybind.key.toLowerCase() && !event.isComposing && (!!keybind.modifiers.alt == event.altKey && !!keybind.modifiers.ctrl == event.ctrlKey && !!keybind.modifiers.meta == event.metaKey && !!keybind.modifiers.shift == event.shiftKey)) {
                            keybind.callback(event);
                        }
                    });
                });
            }
        }
    };

    modapi.init();
})();