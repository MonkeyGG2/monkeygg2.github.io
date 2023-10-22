(function () {
    const imagePosition = {
        x: 0,
        y: 0
    };
    const pixelSize = 5;
    const collisionsEnabled = false;
    const advancedCollisions = true;
    const enableAlpha = true;
    const layerName = "Layer 0";

    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/webp, image/png, image/jpeg";
    inputElement.addEventListener("change", handleFiles, false);

    function handleFiles() {
        const fileList = this.files;
        if (fileList.length > 0) {
            const file = fileList[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext("2d");

                    const newWidth = 120;
                    const newHeight = Math.round(img.height * 120 / img.width);
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    const data = ctx.getImageData(0, 0, newWidth, newHeight).data;

                    const layer = ovoModAPI.game.getLayer(layerName);

                    if (!enableAlpha) {
                        const solidType = cr_getC2Runtime().types_by_index.find(x => x.texture_file && x.texture_file.includes("solid2"));
                        const whiteSolid = cr_getC2Runtime().createInstance(solidType, layer, 0, 0);
                        ovoModAPI.game.resizeInstance(whiteSolid, newWidth * pixelSize + imagePosition.x, newHeight * pixelSize + imagePosition.y);
                        whiteSolid.collisionsEnabled = collisionsEnabled;
                    }

                    for (let x = 0; x < newWidth; x++) {
                        for (let y = 0; y < newHeight; y++) {
                            const position = (y * newWidth + x) * 4;
                            const average = (data[position] + data[position + 1] + data[position + 2]) / 3;

                            if (average === 255) continue;

                            const inst = ovoModAPI.game.createSolid(x * pixelSize + imagePosition.x, y * pixelSize + imagePosition.y, pixelSize, pixelSize, 0, layer);

                            if (advancedCollisions && average < 127) {
                                inst.collisionsEnabled = true;
                            } else {
                                inst.collisionsEnabled = false;
                            }

                            inst.opacity = 1 - average / 255;
                        }
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    const button = document.createElement("button");
    button.innerText = "Open file picker";
    button.style.position = "absolute";
    button.style.top = "0";
    button.style.left = "0";
    button.style.zIndex = "99999";
    button.addEventListener("click", () => inputElement.click());
    document.body.appendChild(button);
})();