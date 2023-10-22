(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

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

    let gyro = {
        init() {
            globalThis.ovoGyro = this;

            if (window.DeviceOrientationEvent) {
                window.addEventListener("deviceorientation", (event) => { this.updateGyro });
            } else {
                notify("Gyro", "This device does not support gyroscope");
            }
        },

        updateGyro(event) {
            let absolute = event.absolute;
            let alpha = event.alpha;
            let beta = event.beta;
            let gamma = event.gamma;
        }
    };

    gyro.init();
})();