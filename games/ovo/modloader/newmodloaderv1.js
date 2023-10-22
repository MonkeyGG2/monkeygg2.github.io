(function () {
    const modDirectory = "/mods/";
    const versionFolder = "v1";

    class ModLoader {
        constructor(runtime) {
            window.ovoModLoader = this;

            this.runtime = runtime;
            this.initialised = false;
            this.mods = {};
            this.loadedMods = [];

            this.#init();
        }

        async #init() {
            this.mods = await fetch(this.getModDirectory() + "v1.json").then(res => res.json());
            this.loadModURL("modapi.js", true, false);

            window.addEventListener("keydown", (event) => {
                if (event.code === "KeyL") {
                    if (event.shiftKey) {
                        this.promptMod();
                    }
                }
            });
            this.#initDomUI();

            this.initialised = true;
        }

        async #initDomUI() {
            const style = document.createElement("style");
            style.innerHTML = `
            .ovo-modloader-button {
                background-color: white;
                border: solid;
                border-color: black;
                border-width: 6px;
                font-family: "Retron2000";
                position: absolute;
                z-index: 999999;
                cursor: pointer;
            }

            .ovo-modloader-button:hover {
                background-color: rgba(200, 200, 200, 1);
            }
            `
            document.head.appendChild(style);

            const toggleButton = document.createElement("button");
            toggleButton.id = "ovo-modloader-toggle-button";
            toggleButton.innerText = "";

            const loadIcon = document.createElement("img");
            loadIcon.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPg0KPGc+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTExLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSI+PHBhdGggZD0iTTQ4ODIuOSw0NzQ5LjRjLTEwNy4zLTMyLjYtMjE2LjQtMTQzLjYtMjQ1LjItMjUwLjljLTE1LjMtNDkuOC0yMS4xLTExMDctMjEuMS0zMzc2LjZWLTIxODJMMzUwMi0xMDY3LjNDMjg4Ny4yLTQ1Ni4zLDIzNTYuNyw2MC44LDIzMjAuMyw3OGMtMTAxLjUsNTEuNy0yODMuNSwzMi42LTM3NS40LTM2LjRjLTEzNC4xLTEwMy40LTE4NS44LTI0OS0xNDMuNi00MDkuOWMyMy04NC4zLDEzMi4yLTE5Ny4zLDE0OTItMTU2MC45Yzk4Ni40LTk4OC4zLDE0OTItMTQ4Mi40LDE1NDUuNi0xNTA3LjNjOTEuOS00NiwyMTIuNi00OS44LDMxMC4zLTkuNmM5MiwzOC4zLDI5NTUuMywyODk0LDMwMTYuNiwzMDA3YzEyMC43LDIyNy45LTI0LjksNTE3LjEtMjcyLDU0MmMtMjE2LjQsMjEuMS0xMzIuMSw5MS45LTEzNzUuMi0xMTUxLjFMNTM4Mi44LTIxODJ2MzMwMy44YzAsMjI2OS42LTUuNywzMzI2LjgtMjEuMSwzMzc2LjZjLTMwLjcsMTExLjEtMTM3LjksMjE4LjMtMjUyLjgsMjUyLjhTNDk5Niw0Nzg1LjgsNDg4Mi45LDQ3NDkuNHoiLz48cGF0aCBkPSJNNDMxLjgtMTgzNy4yYy05LjYtMy44LTQyLjEtMTEuNS03Mi44LTE3LjJjLTc4LjUtMTcuMi0xOTkuMi0xMzYtMjM1LjYtMjMzLjdjLTU5LjQtMTU3LTEuOS01OTcuNiwxMjQuNS05NDQuMmMyNzkuNi03NjQuMiw5NjUuMy0xMzM0LjksMTc5Mi43LTE0OTJjMTU3LjEtMzAuNiw0MDkuOS0zMi42LDI5NTkuMS0zMi42YzI1NTYuOSwwLDI4MDAuMSwxLjksMjk2MSwzMi42YzEwNzQuNSwyMDQuOSwxODU3LjgsMTA4MC4yLDE5MzQuNCwyMTY2LjJjMTUuMywyMDYuOC0zLjgsMjg5LjItOTMuOCwzODguOGMtMTM3LjksMTU5LTM1Ni4zLDE3OC4xLTUxNS4yLDQ0Yy05Ny43LTc4LjUtMTMwLjItMTYyLjgtMTQ5LjQtMzk4LjRjLTExLjUtMTEzLTM2LjQtMjY2LjItNTkuNC0zMzljLTEzNi00NDQuMy00NDguMi04MDIuNS04NjUuNy05OTRjLTMxNC4xLTE0NS41LTU3LjUtMTM0LjEtMzIxMS45LTEzNC4xYy0yNjg1LjIsMC0yODMwLjgsMS45LTI5NDkuNSwzNC41Yy00OTYuMSwxNDEuNy04OTQuNCw0OTQuMS0xMDc4LjMsOTU1LjdjLTY3LDE2NC43LTEwOS4yLDM0Ni43LTEwOS4yLDQ2OS4zYzAsMTgzLjgtMzQuNSwyOTEuMS0xMjIuNiwzNzkuMkM2NTIuMS0xODY0LjEsNTA4LjUtMTgxMC40LDQzMS44LTE4MzcuMnoiLz48L2c+PC9nPg0KPC9zdmc+"
            loadIcon.style.width = "38px";
            loadIcon.style.height = "38px";

            toggleButton.appendChild(loadIcon);
            toggleButton.classList.add("ovo-modloader-button");
            toggleButton.style.top = "50%";
            toggleButton.style.right = "0%";
            toggleButton.style.transform = "translateY(-50%)";
            toggleButton.style.width = "50px";
            toggleButton.style.height = "50px";
            toggleButton.onclick = this.promptMod.bind(this);
            document.body.appendChild(toggleButton);
        }

        notify(title, text, image = "./speedrunner.png") {
            cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
                this.runtime.types_by_index.find(
                    (type) => type.plugin instanceof cr.plugins_.sirg_notifications
                ).instances[0],
                title,
                text,
                image
            );
        }

        getModDirectory() {
            return this.getScriptDir() + modDirectory;
        }

        getScriptPath() {
            return decodeURI(new Error().stack.match(/([^ \n\(@])*([a-z]*:\/\/\/?)*?[a-z0-9\/\\]*\.js/ig)[0]);
        }

        getScriptDir() {
            return this.getScriptPath().split("/").slice(0, -1).join("/") + "/";
        }

        getURLName(url) {
            return url.split("/").pop().split(".").slice(0, -1).join(".");
        }

        getIsScriptLoaded(name) {
            return this.loadedMods.includes(name);
        }

        getIsValidURL(str) {
            const pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i');
            return pattern.test(str);
        }

        #createScript(src, key, name, notify = true) {
            const js = document.createElement("script");
            js.type = "application/javascript";
            js.src = src;

            js.onload = () => {
                this.loadedMods.push(key);
                if (notify) {
                    this.notify("Mod loaded", name);
                }
            }

            js.onerror = () => {
                if (notify) {
                    this.notify("Error loading mod", name);
                }
            }

            document.head.appendChild(js);
        }

        loadModURL(url, local = false, notify = true) {
            if (local) {
                url = this.getModDirectory() + "v1/" + url;
            }

            const name = this.getURLName(url);

            if (this.getIsScriptLoaded(name)) {
                if (notify) {
                    this.notify("Mod already loaded", name);
                }
                return;
            }

            this.#createScript(url, name, name, notify);
        }

        loadModJSON(key, json, notify = true) {
            const url = this.getModDirectory() + "v1/" + json.url;
            const name = json.name;

            if (this.getIsScriptLoaded(key)) {
                if (notify) {
                    this.notify("Mod already loaded", name);
                }
                return;
            }

            this.#createScript(url, key, name, notify);
        }

        loadModJS(modJS, notify = true) {
            setTimeout(modJS, 0);

            if (notify) {
                this.notify("Mod loaded", "Loaded JS code");
            }
        }

        promptMod() {
            const input = prompt("Enter mod URL, ID, or JS code");
            const key = input.toLocaleLowerCase();

            if (!input) return;

            if (this.mods[key]) {
                this.loadModJSON(key, this.mods[key], true);
            } else {
                if (this.getIsValidURL(input)) {
                    this.loadModURL(input, false, true);
                } else {
                    this.loadModJS(input, true);
                }
            }
        }
    }

    if (typeof window.ovoModLoader === "undefined") {
        if (typeof window.cr_getC2Runtime !== "undefined" && typeof window.cr_getC2Runtime() !== "undefined" && window.cr_getC2Runtime().isloading === false) {
            new ModLoader(cr_getC2Runtime());
        } else {
            const createCommand = window.cr_createRuntime;
            const hookCommand = (canvasId) => {
                new ModLoader(createCommand(canvasId));
            }
            window.cr_createRuntime = hookCommand;
        }
    }
})();