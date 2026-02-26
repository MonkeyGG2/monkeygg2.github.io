// 恐怖脸闪烁效果
const basePath = './';
const normalBackground = `${basePath}assets/images/menubackground.png`;
const scaryBackgrounds = [
    `${basePath}assets/images/scaryhawk.png`,
    `${basePath}assets/images/scaryep.png`,
    `${basePath}assets/images/scarytrump.png`
];

let scaryFaceInterval = null;
const preloadedImages = {};

// 预加载所有背景图片
function preloadBackgrounds() {
    const normalImg = new Image();
    normalImg.src = normalBackground;
    preloadedImages['normal'] = normalImg;

    scaryBackgrounds.forEach((bg, index) => {
        const img = new Image();
        img.src = bg;
        preloadedImages[`scary-${index}`] = img;
    });
}

function startScaryFaceFlicker() {
    if (scaryFaceInterval) {
        stopScaryFaceFlicker();
    }

    const mainMenu = document.getElementById('main-menu');
    if (!mainMenu) return;

    scaryFaceInterval = setInterval(() => {
        if (Math.random() < 0.1) {
            const bgIndex = Math.floor(Math.random() * 3);
            const scaryBg = scaryBackgrounds[bgIndex];

            mainMenu.style.backgroundImage = `url('${scaryBg}')`;

            const hideDelay = 50 + Math.random() * 150;
            setTimeout(() => {
                mainMenu.style.backgroundImage = `url('${normalBackground}')`;
            }, hideDelay);
        }
    }, 100);
}

function stopScaryFaceFlicker() {
    if (scaryFaceInterval) {
        clearInterval(scaryFaceInterval);
        scaryFaceInterval = null;

        const mainMenu = document.getElementById('main-menu');
        if (mainMenu) {
            mainMenu.style.backgroundImage = `url('${normalBackground}')`;
        }
    }
}
