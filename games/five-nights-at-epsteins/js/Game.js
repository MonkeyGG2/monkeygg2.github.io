// Main game class
class Game {
    constructor() {
        this.state = new GameState();
        this.assets = new AssetManager();
        this.ui = new UIManager(this);
        this.camera = new CameraSystem(this);
        this.enemyAI = new EnemyAI(this);
        this.input = new InputHandler(this);

        // Initialize CameraSystem's EP config (from EnemyAI)
        this.camera.initEPConfig();

        this.timeInterval = null;
        this.powerInterval = null;
        this.viewPosition = 0.25;
        this.isRotatingLeft = false;
        this.isRotatingRight = false;
        this.rotationSpeed = 0.015;

        this.initElements();
        this.bindEvents();
    }

    initElements() {
        this.mainMenu = document.getElementById('main-menu');
        this.gameScreen = document.getElementById('game-screen');
        this.gameOverElement = document.getElementById('game-over');
        this.gameOverText = document.getElementById('game-over-text');
        this.tutorialOverlay = document.getElementById('tutorial-overlay');
        this.tutorialGotItBtn = document.getElementById('tutorial-got-it');

        this.startBtn = document.getElementById('start-game');
        this.continueBtn = document.getElementById('continue-game');
        this.specialNightBtn = document.getElementById('special-night-btn');
        this.customNightBtn = document.getElementById('custom-night-btn');
        this.starIcon = document.getElementById('star-icon');
        this.starIcon2 = document.getElementById('star-icon-2');
        this.starIcon3 = document.getElementById('star-icon-3');
        this.restartBtn = document.getElementById('restart');
        this.mainMenuBtn = document.getElementById('main-menu-btn');

        // 音量控制元素
        this.volumeBtn = document.getElementById('volume-btn');
        this.volumePanel = document.getElementById('volume-panel');
        this.closeVolumePanelBtn = document.getElementById('close-volume-panel');
        this.gameBgVolumeSlider = document.getElementById('game-bg-volume');
        this.menuMusicVolumeSlider = document.getElementById('menu-music-volume');
        this.jumpscareVolumeSlider = document.getElementById('jumpscare-volume');
        this.ventCrawlingVolumeSlider = document.getElementById('vent-crawling-volume');
        this.masterVolumeSlider = document.getElementById('master-volume');

        // 调试：检查元素是否找到
        if (!this.volumeBtn) console.error('Volume button not found!');
        if (!this.volumePanel) console.error('Volume panel not found!');

        // Custom Night 元素
        this.customNightMenu = document.getElementById('custom-night-menu');
        this.epsteinSlider = document.getElementById('epstein-slider');
        this.trumpSlider = document.getElementById('trump-slider');
        this.hawkingSlider = document.getElementById('hawking-slider');
        this.epsteinValue = document.getElementById('epstein-value');
        this.trumpValue = document.getElementById('trump-value');
        this.hawkingValue = document.getElementById('hawking-value');
        this.startCustomNightBtn = document.getElementById('start-custom-night');
        this.backToMenuBtn = document.getElementById('back-to-menu');

        // 初始化音量设置
        this.initVolumeSettings();
    }

    initVolumeSettings() {
        const volumes = this.assets.getAllVolumes();
        this.gameBgVolumeSlider.value = Math.round(volumes.gameBg * 100);
        this.menuMusicVolumeSlider.value = Math.round(volumes.menuMusic * 100);
        this.jumpscareVolumeSlider.value = Math.round(volumes.jumpscare * 100);
        this.ventCrawlingVolumeSlider.value = Math.round(volumes.ventCrawling * 100);
        this.masterVolumeSlider.value = Math.round(volumes.master * 100);

        // 更新百分比显示
        this.updateVolumePercents();
    }

    updateVolumePercents() {
        const sliders = [
            this.gameBgVolumeSlider,
            this.menuMusicVolumeSlider,
            this.jumpscareVolumeSlider,
            this.ventCrawlingVolumeSlider,
            this.masterVolumeSlider
        ];

        sliders.forEach(slider => {
            const percent = slider.parentElement.querySelector('.volume-percent');
            if (percent) {
                percent.textContent = slider.value + '%';
            }
        });
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.continueBtn.addEventListener('click', () => this.continueGame());
        this.specialNightBtn.addEventListener('click', () => this.startSpecialNight());
        this.customNightBtn.addEventListener('click', () => this.showCustomNightMenu());
        this.restartBtn.addEventListener('click', () => this.restartGame());

        // 音量面板事件
        this.volumeBtn.addEventListener('click', () => {
            this.volumePanel.classList.toggle('hidden');
        });

        this.closeVolumePanelBtn.addEventListener('click', () => {
            this.volumePanel.classList.add('hidden');
        });

        // 音量滑块事件
        this.gameBgVolumeSlider.addEventListener('input', (e) => {
            this.assets.setVolume('gameBg', parseInt(e.target.value) / 100);
            this.updateVolumePercents();
            // 立即更新游戏中的背景音效
            if (this.state.isGameRunning) {
                const ventsSound = this.assets.sounds['vents'];
                if (ventsSound && !ventsSound.paused) {
                    const volumes = this.assets.getAllVolumes();
                    ventsSound.volume = volumes.gameBg * volumes.master;
                }
            }
        });

        this.menuMusicVolumeSlider.addEventListener('input', (e) => {
            this.assets.setVolume('menuMusic', parseInt(e.target.value) / 100);
            this.updateVolumePercents();
            // 立即更新主菜单音乐音量
            const menuMusic = document.getElementById('menu-music');
            if (menuMusic && !menuMusic.paused) {
                const volumes = this.assets.getAllVolumes();
                menuMusic.volume = volumes.menuMusic * volumes.master;
            }
        });

        this.jumpscareVolumeSlider.addEventListener('input', (e) => {
            this.assets.setVolume('jumpscare', parseInt(e.target.value) / 100);
            this.updateVolumePercents();
        });

        this.ventCrawlingVolumeSlider.addEventListener('input', (e) => {
            this.assets.setVolume('ventCrawling', parseInt(e.target.value) / 100);
            this.updateVolumePercents();
        });

        this.masterVolumeSlider.addEventListener('input', (e) => {
            this.assets.setVolume('master', parseInt(e.target.value) / 100);
            this.updateVolumePercents();
            // 立即更新所有正在播放的音效
            const menuMusic = document.getElementById('menu-music');
            if (menuMusic && !menuMusic.paused) {
                const volumes = this.assets.getAllVolumes();
                menuMusic.volume = volumes.menuMusic * volumes.master;
            }
            if (this.state.isGameRunning) {
                const ventsSound = this.assets.sounds['vents'];
                if (ventsSound && !ventsSound.paused) {
                    const volumes = this.assets.getAllVolumes();
                    ventsSound.volume = volumes.gameBg * volumes.master;
                }
            }
        });
        this.mainMenuBtn.addEventListener('click', () => this.showMainMenu());
        this.tutorialGotItBtn.addEventListener('click', () => this.closeTutorial());

        // Custom Night 事件
        this.startCustomNightBtn.addEventListener('click', () => this.startCustomNight());
        this.backToMenuBtn.addEventListener('click', () => this.hideCustomNightMenu());

        // AI滑块事件
        this.epsteinSlider.addEventListener('input', (e) => {
            this.epsteinValue.textContent = e.target.value;
        });
        this.trumpSlider.addEventListener('input', (e) => {
            this.trumpValue.textContent = e.target.value;
        });
        this.hawkingSlider.addEventListener('input', (e) => {
            this.hawkingValue.textContent = e.target.value;
        });

        // +/- 按钮事件
        document.querySelectorAll('.ai-btn-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const aiName = btn.dataset.ai;
                const slider = document.getElementById(`${aiName}-slider`);
                const value = Math.max(0, parseInt(slider.value) - 1);
                slider.value = value;
                document.getElementById(`${aiName}-value`).textContent = value;
            });
        });

        document.querySelectorAll('.ai-btn-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const aiName = btn.dataset.ai;
                const slider = document.getElementById(`${aiName}-slider`);
                const value = Math.min(20, parseInt(slider.value) + 1);
                slider.value = value;
                document.getElementById(`${aiName}-value`).textContent = value;
            });
        });
    }

    // 加载保存的进度
    loadProgress() {
        const savedNight = localStorage.getItem('fnae_current_night');
        if (savedNight) {
            const night = parseInt(savedNight);
            if (night > 1 && night <= this.state.maxNights) {
                this.state.currentNight = night;
                return true;
            }
        }
        return false;
    }

    // 保存进度
    saveProgress() {
        if (this.state.currentNight > 1) {
            localStorage.setItem('fnae_current_night', this.state.currentNight.toString());
        }
    }

    // 清除进度
    clearProgress() {
        localStorage.removeItem('fnae_current_night');
    }

    // 更新Continue按钮显示
    updateContinueButton() {
        if (this.loadProgress()) {
            this.continueBtn.classList.remove('hidden');
            this.continueBtn.textContent = `CONTINUE (NIGHT ${this.state.currentNight})`;
        } else {
            this.continueBtn.classList.add('hidden');
        }

        // 检查是否解锁特殊夜晚
        const night6Unlocked = localStorage.getItem('night6Unlocked');
        if (night6Unlocked === 'true') {
            this.specialNightBtn.classList.remove('hidden');
            this.starIcon.classList.remove('hidden');
        } else {
            this.specialNightBtn.classList.add('hidden');
            this.starIcon.classList.add('hidden');
        }

        // 检查是否通关Night 6
        const night6Completed = localStorage.getItem('night6Completed');
        if (night6Completed === 'true') {
            this.starIcon2.classList.remove('hidden');
            this.customNightBtn.classList.remove('hidden'); // 通关Night 6后解锁Custom Night
        } else {
            this.starIcon2.classList.add('hidden');
            this.customNightBtn.classList.add('hidden');
        }

        // 检查是否通关20/20/20 Custom Night
        const customNight202020 = localStorage.getItem('customNight202020');
        if (customNight202020 === 'true') {
            this.starIcon3.classList.remove('hidden');
        } else {
            this.starIcon3.classList.add('hidden');
        }

        // 恢复到Night 1（不影响按钮显示）
        this.state.currentNight = 1;
    }

    // 显示Custom Night菜单
    showCustomNightMenu() {
        this.mainMenu.classList.add('hidden');
        this.customNightMenu.classList.remove('hidden');
    }

    // 隐藏Custom Night菜单
    hideCustomNightMenu() {
        this.customNightMenu.classList.add('hidden');
        this.mainMenu.classList.remove('hidden');
    }

    // 开始Custom Night
    async startCustomNight() {
        const epsteinLevel = parseInt(this.epsteinSlider.value);
        const trumpLevel = parseInt(this.trumpSlider.value);
        const hawkingLevel = parseInt(this.hawkingSlider.value);

        // 保存自定义AI等级到state
        this.state.customNight = true;
        this.state.currentNight = 7; // Custom Night = Night 7
        this.state.customAILevels = {
            epstein: epsteinLevel,
            trump: trumpLevel,
            hawking: hawkingLevel
        };

        console.log('Starting Custom Night with AI levels:', this.state.customAILevels);

        this.customNightMenu.classList.add('hidden');

        // 隐藏音量按钮和面板
        if (this.volumeBtn) {
            this.volumeBtn.classList.add('hidden');
        }
        if (this.volumePanel) {
            this.volumePanel.classList.add('hidden');
        }

        const menuMusic = document.getElementById('menu-music');
        if (menuMusic) {
            menuMusic.pause();
            menuMusic.currentTime = 0;
            menuMusic.loop = false;
        }

        // 重置敌人AI状态
        this.enemyAI.reset();

        // 直接开始游戏
        await this.initGame();
    }

    // Continue游戏（从保存的关卡开始）
    async continueGame() {
        if (this.loadProgress()) {
            this.mainMenu.classList.add('hidden');

            // 隐藏音量按钮和面板
            if (this.volumeBtn) {
                this.volumeBtn.classList.add('hidden');
            }
            if (this.volumePanel) {
                this.volumePanel.classList.add('hidden');
            }

            const menuMusic = document.getElementById('menu-music');
            if (menuMusic) {
                menuMusic.pause();
                menuMusic.currentTime = 0;
                menuMusic.loop = false;
            }

            // 重置敌人AI状态
            this.enemyAI.reset();

            // 直接开始游戏，不播放过场动画
            await this.initGame();
        }
    }

    // 开始特殊夜晚（Night 6）
    async startSpecialNight() {
        this.state.currentNight = 6; // 设置为Night 6
        this.clearProgress(); // 清除普通进度

        this.mainMenu.classList.add('hidden');

        // 隐藏音量按钮和面板
        if (this.volumeBtn) {
            this.volumeBtn.classList.add('hidden');
        }
        if (this.volumePanel) {
            this.volumePanel.classList.add('hidden');
        }

        const menuMusic = document.getElementById('menu-music');
        if (menuMusic) {
            menuMusic.pause();
            menuMusic.currentTime = 0;
            menuMusic.loop = false;
        }

        // 重置敌人AI状态
        this.enemyAI.reset();

        // 直接开始游戏，不播放过场动画
        await this.initGame();
    }

    async startGame() {
        // NEW GAME总是从Night 1开始
        this.state.currentNight = 1;
        this.clearProgress(); // 清除之前的进度

        this.mainMenu.classList.add('hidden');

        // 隐藏音量按钮和面板
        if (this.volumeBtn) {
            this.volumeBtn.classList.add('hidden');
        }
        if (this.volumePanel) {
            this.volumePanel.classList.add('hidden');
        }

        const menuMusic = document.getElementById('menu-music');
        if (menuMusic) {
            menuMusic.pause();
            menuMusic.currentTime = 0;
            menuMusic.loop = false;
        }

        // 重置敌人AI状态
        this.enemyAI.reset();

        const cutscene = document.getElementById('cutscene');
        cutscene.classList.remove('hidden');

        // 触发淡入效果
        setTimeout(() => {
            cutscene.classList.add('fade-in');
        }, 50);

        let cutsceneEnded = false;

        const endCutscene = () => {
            if (cutsceneEnded) return;
            cutsceneEnded = true;

            // 淡出效果
            cutscene.classList.remove('fade-in');
            cutscene.classList.add('fade-out');

            // 等待淡出完成后隐藏并开始游戏
            setTimeout(() => {
                cutscene.classList.add('hidden');
                cutscene.classList.remove('fade-out');
                // 不在这里显示游戏画面，让initGame处理
                this.initGame();
            }, 3000);

            cutscene.removeEventListener('click', endCutscene);
            if (autoEndTimeout) clearTimeout(autoEndTimeout);
        };

        // 点击跳过
        cutscene.addEventListener('click', endCutscene);

        // 3秒后自动开始淡出（总共6秒：3秒淡入 + 3秒淡出）
        const autoEndTimeout = setTimeout(() => {
            endCutscene();
        }, 3000);
    }

    async initGame() {
        // console.log('🎮 initGame called, currentNight:', this.state.currentNight);

        if (!this.assets.loaded) {
            await this.assets.loadAssets();
        }

        this.state.reset();

        // console.log('🎮 After state.reset(), currentNight:', this.state.currentNight);

        // 重置摄像头系统的sound按钮计数
        this.camera.resetSoundButtonCount();

        // 恢复摄像头面板的display（之前可能被强制隐藏）
        const cameraPanel = document.getElementById('camera-panel');
        if (cameraPanel) {
            cameraPanel.style.display = ''; // 恢复默认
            // console.log('🎮 Camera panel display restored');
        }

        // 显示每晚开始场景（在显示游戏画面之前）
        await this.showNightIntro();

        // console.log('🎮 After showNightIntro(), currentNight:', this.state.currentNight);

        // 进场动画结束后才显示游戏画面
        this.gameScreen.classList.add('active');

        this.ui.currentSceneImg.src = this.assets.images.office.src;
        this.ui.currentSceneImg.style.display = 'block';
        this.viewPosition = 0.25;
        this.ui.updateViewPosition(this.viewPosition);

        this.ui.update();
        this.ui.createHotspots();

        // 初始化风扇状态（通风口默认打开，风扇快速旋转）
        this.initVentFanAnimation();

        this.startGameLoop();
        this.startViewRotation();

        // 前3个夜晚：等待指南关闭后再启动敌人 AI
        // Night 4+：直接启动敌人 AI
        if (this.state.currentNight > 3) {
            this.enemyAI.start();
        }

        this.assets.playSound('vents', true);

        // Show tutorial
        if (this.state.currentNight === 1) {
            this.showTutorial('night1');
        } else if (this.state.currentNight === 2) {
            this.showTutorial('night2');
        } else if (this.state.currentNight === 3) {
            this.showTutorial('night3');
        }

        // console.log('🎮 Before Golden check, currentNight:', this.state.currentNight);

        // Night 5: 必定触发 Golden 霍金彩蛋（放在最后，确保游戏已完全初始化）
        if (this.state.currentNight === 5) {
            // console.log('🌟 Night 5 detected, triggering Golden Stephen...');
            setTimeout(() => {
                this.showGoldenStephen();
            }, 1000); // 进入游戏1秒后触发
        } // else {
            // console.log('❌ Not Night 5, currentNight is:', this.state.currentNight);
        // }
    }

    // 初始化风扇动画状态
    initVentFanAnimation() {
        const ventIcon = document.querySelector('.vent-icon');
        if (ventIcon) {
            if (this.state.ventsClosed) {
                // 通风口关闭，风扇停止
                ventIcon.classList.add('stopped');
                ventIcon.style.animation = 'none';
            } else {
                // 通风口打开，风扇快速旋转
                ventIcon.classList.remove('stopped', 'slowing', 'speeding-up');
                ventIcon.style.animation = 'spin-fast 0.333s linear infinite';
            }
        }
    }

    showTutorial(type = 'night1') {
        const tutorialContent = document.getElementById('tutorial-content');
        if (!tutorialContent) return;

        if (type === 'night2') {
            // Night 2 教程：Trump
            tutorialContent.innerHTML = `
                <h2>DEFEND YOURSELF AGAINST TRUMP</h2>
                <p>
                    TRUMP WILL TRY TO ATTACK YOU THROUGH THE VENTS IN CAM 1 AND CAM 2, SO IF YOU HEAR BANGING IN THE VENTS HEAD OVER TO THE CONTROL PANEL AND CLOSE THEM.
                    AFTER CLOSING THEM YOU WILL HEAR BANGING AGAIN AFTER A FEW SECONDS WHICH MEANS HE LEFT THE VENTS. YOU MUST OPEN THE VENTS OTHERWISE YOU WILL DIE FROM LACK OF OXYGEN.
                    TRUMP CAN BE LURED WITH THE AUDIOS BUT YOUR MAIN PRIORITY WITH THE AUDIO LURES SHOULD BE EPSTEIN.
                </p>
                <button id="tutorial-got-it">GOT IT</button>
            `;
            // 重新绑定按钮事件
            const gotItBtn = document.getElementById('tutorial-got-it');
            if (gotItBtn) {
                gotItBtn.addEventListener('click', () => this.closeTutorial());
            }
        } else if (type === 'night3') {
            // Night 3 教程：霍金
            tutorialContent.innerHTML = `
                <h2>DEFEND YOURSELF AGAINST STEPHEN HAWKING</h2>
                <p>
                    STEPHEN HAWKING ALWAYS STAYS AT CAM 6 AND HE IS NOT AFFECTED BY THE AUDIO LURES.
                    ELECTROCUTE STEPHEN HAWKING EVERY ONCE IN A WHILE TO PREVENT HIM FROM LEAVING CAM 6.
                </p>
                <button id="tutorial-got-it">GOT IT</button>
            `;
            // 重新绑定按钮事件
            const gotItBtn = document.getElementById('tutorial-got-it');
            if (gotItBtn) {
                gotItBtn.addEventListener('click', () => this.closeTutorial());
            }
        } else {
            // Night 1 教程：EP
            tutorialContent.innerHTML = `
                <h2>DEFEND YOURSELF AGAINST EPSTEIN</h2>
                <p>
                    EPSTEIN ALWAYS STARTS AT CAM 11. USE THE CAMERA'S AUDIO LURE TO KEEP EPSTEIN FAR AWAY FROM YOU.
                    MAKE SURE THE CAMERA YOU'RE PLAYING THE SOUND IN IS NEXT TO THE CAMERA WHERE EPSTEIN IS.
                    PLAYING SOUND IN ONLY ONE SPOT WILL NOT WORK IF YOU DO IT TWICE OR MORE IN A ROW.
                    USING THE AUDIO LURE TOO MUCH WILL LEAD TO THE CAMERAS BREAKING.
                    TO FIX THEM HEAD TO THE CONTROL PANEL AND RESTART THE CAMERAS LIKE YOU JUST DID.
                    EPSTEIN DOES NOT ATTACK THROUGH THE VENTS SO DON'T BOTHER CLOSING THEM FOR THIS NIGHT.
                </p>
                <button id="tutorial-got-it">GOT IT</button>
            `;
            // 重新绑定按钮事件
            const gotItBtn = document.getElementById('tutorial-got-it');
            if (gotItBtn) {
                gotItBtn.addEventListener('click', () => this.closeTutorial());
            }
        }

        this.tutorialOverlay.classList.remove('hidden');
        // Mark tutorial as active (but don't pause game, allow view rotation)
        this.state.tutorialActive = true;
    }

    closeTutorial() {
        this.tutorialOverlay.classList.add('hidden');
        // Close tutorial
        this.state.tutorialActive = false;

        // 前3个夜晚：关闭指南后启动敌人 AI
        if (this.state.currentNight <= 3) {
            console.log('🎮 Tutorial closed, starting enemy AI...');
            this.enemyAI.start();
        }
    }

    // Golden 霍金彩蛋效果
    showGoldenStephen() {
        console.log('🌟 Golden Stephen Hawking appears!');

        // 创建全屏金色霍金图层
        const goldenOverlay = document.createElement('div');
        goldenOverlay.id = 'golden-stephen-overlay';
        goldenOverlay.style.position = 'fixed';
        goldenOverlay.style.top = '0';
        goldenOverlay.style.left = '0';
        goldenOverlay.style.width = '100%';
        goldenOverlay.style.height = '100%';
        goldenOverlay.style.zIndex = '9999';
        goldenOverlay.style.pointerEvents = 'none';
        goldenOverlay.style.background = 'rgba(0, 0, 0, 0.3)';

        // 创建金色霍金图片
        const goldenImg = document.createElement('img');
        goldenImg.src = 'assets/images/goldenstephen.png';
        goldenImg.style.position = 'absolute';
        goldenImg.style.top = '50%';
        goldenImg.style.left = '50%';
        goldenImg.style.transform = 'translate(-50%, -50%)';
        goldenImg.style.width = '80%';
        goldenImg.style.height = '80%';
        goldenImg.style.objectFit = 'contain';
        goldenImg.style.opacity = '0';
        goldenImg.style.animation = 'golden-flicker 2s ease-in-out';

        goldenOverlay.appendChild(goldenImg);
        document.body.appendChild(goldenOverlay);

        // 播放音效
        this.assets.playSound('goldenstephenscare', false, 1.0);

        // 2秒后移除
        setTimeout(() => {
            goldenOverlay.remove();
        }, 2000);
    }

    showNightIntro() {
        return new Promise((resolve) => {
            const nightIntro = document.getElementById('night-intro');
            const nightIntroText = document.getElementById('night-intro-text');

            // Update night number text
            if (this.state.customNight && this.state.currentNight === 7) {
                nightIntroText.textContent = 'CUSTOM NIGHT';
            } else {
                nightIntroText.textContent = `NIGHT ${this.state.currentNight}`;
            }

            // Show scene
            nightIntro.classList.remove('hidden');

            // Fade in effect (1.5s)
            setTimeout(() => {
                nightIntro.classList.add('fade-in');
            }, 50);

            // 1.5s fade in + 2s display then start fade out
            setTimeout(() => {
                nightIntro.classList.remove('fade-in');
                nightIntro.classList.add('fade-out');

                // After 1.5s fade out complete, hide and continue game
                setTimeout(() => {
                    nightIntro.classList.add('hidden');
                    nightIntro.classList.remove('fade-out');
                    resolve();
                }, 1500);
            }, 3500); // 1500ms fade in + 2000ms display
        });
    }


    startViewRotation() {
        const rotationLoop = () => {
            if (!this.state.isGameRunning) return;

            // If control panel or camera is open, disable rotation
            if (!this.state.controlPanelOpen && !this.state.cameraOpen) {
                if (this.isRotatingLeft && this.viewPosition > 0) {
                    this.viewPosition -= this.rotationSpeed;
                    this.viewPosition = Math.max(0, this.viewPosition);
                    this.ui.updateViewPosition(this.viewPosition);
                }

                if (this.isRotatingRight && this.viewPosition < 1) {
                    this.viewPosition += this.rotationSpeed;
                    this.viewPosition = Math.min(1, this.viewPosition);
                    this.ui.updateViewPosition(this.viewPosition);
                }
            }

            requestAnimationFrame(rotationLoop);
        };

        rotationLoop();
    }

    startGameLoop() {
        this.timeInterval = setInterval(() => {
            // 前3个夜晚：如果指南打开，暂停时间
            if (this.state.currentNight <= 3 && this.state.tutorialActive) {
                return; // 跳过时间更新
            }

            this.state.currentTime += 1;
            this.ui.update();

            if (this.state.currentTime >= 6) {
                this.winNight();
            }
        }, 60000);

        this.powerInterval = setInterval(() => {
            this.updatePower();
        }, 1000);
    }

    updatePower() {
        // 前3个夜晚：如果指南打开，暂停氧气消耗
        if (this.state.currentNight <= 3 && this.state.tutorialActive) {
            return; // 跳过氧气更新
        }

        if (this.state.ventsClosed) {
            // When vents closed, oxygen decreases (faster speed)
            this.state.oxygen -= 1.5;
        } else {
            // When vents open, oxygen quickly recovers to 100%
            if (this.state.oxygen < 100) {
                this.state.oxygen += 2;
            }
        }

        this.state.oxygen = Math.max(0, Math.min(100, this.state.oxygen));

        if (this.state.oxygen <= 0) {
            this.oxygenOut();
        }

        this.ui.update();
    }

    toggleVents() {
        console.log('toggleVents called, controlPanelBusy:', this.state.controlPanelBusy);

        // 如果控制面板正忙，不允许操作
        if (this.state.controlPanelBusy) {
            console.log('Control panel is busy, please wait...');
            return;
        }

        // 标记控制面板为忙碌状态
        this.state.controlPanelBusy = true;
        this.state.ventsToggling = true;
        console.log('Starting vent toggle animation...');

        // 播放心电图音效
        this.assets.playSound('ekg', false, 0.8);

        // 获取风扇图标
        const ventIcon = document.querySelector('.vent-icon');

        if (this.state.ventsClosed) {
            // 当前关闭，要打开 -> 风扇从停止加速到快速
            console.log('Opening vents: fan speeding up');
            if (ventIcon) {
                ventIcon.classList.remove('stopped', 'slowing');
                ventIcon.classList.add('speeding-up');

                // 逐步加速动画
                setTimeout(() => {
                    ventIcon.style.animation = 'spin-slow 2s linear infinite';
                }, 0);
                setTimeout(() => {
                    ventIcon.style.animation = 'spin-slow 1.5s linear infinite';
                }, 1000);
                setTimeout(() => {
                    ventIcon.style.animation = 'spin-fast 0.333s linear infinite';
                    ventIcon.classList.remove('speeding-up');
                }, 2000);
            }
        } else {
            // 当前打开，要关闭 -> 风扇从快速减速到停止
            console.log('Closing vents: fan slowing down');
            if (ventIcon) {
                ventIcon.classList.remove('speeding-up');
                ventIcon.classList.add('slowing');

                // 逐步减速动画
                setTimeout(() => {
                    ventIcon.style.animation = 'spin-slow 1.5s linear infinite';
                }, 0);
                setTimeout(() => {
                    ventIcon.style.animation = 'spin-slow 2s linear infinite';
                }, 1000);
                setTimeout(() => {
                    ventIcon.style.animation = 'spin-slow 3s linear infinite';
                }, 2000);
                setTimeout(() => {
                    ventIcon.style.animation = 'none';
                    ventIcon.classList.remove('slowing');
                    ventIcon.classList.add('stopped');
                }, 3000);
            }
        }

        // 更新UI显示点动画
        this.ui.updateVentsStatus();

        // 启动定时更新（每100ms更新一次UI）
        const updateInterval = setInterval(() => {
            this.ui.updateVentsStatus();
            if (!this.state.ventsToggling) {
                clearInterval(updateInterval);
            }
        }, 100);

        // 4秒后完成切换
        setTimeout(() => {
            this.state.ventsClosed = !this.state.ventsClosed;
            console.log('Vents:', this.state.ventsClosed ? 'closed' : 'open');

            // 通知 EnemyAI 通风口状态变化
            this.enemyAI.onVentsChanged(this.state.ventsClosed);

            // 解除锁定
            this.state.ventsToggling = false;
            this.state.controlPanelBusy = false;
            console.log('Vent toggle completed');

            // 更新UI和控制面板选项文本
            this.ui.update();
            this.ui.updateVentsStatus();
            this.ui.updateControlPanelOptions();
        }, 4000);
    }

    toggleCamera() {
        // console.log('🎮 Game.toggleCamera() called');
        // console.log('🎮 Current state - cameraOpen:', this.state.cameraOpen, 'tutorialActive:', this.state.tutorialActive);
        this.camera.toggle();
    }

    oxygenOut() {
        this.stopGame();
        this.assets.stopSound('ambient');
        // Oxygen depleted triggers jumpscare
        this.enemyAI.triggerJumpscare();
    }

    gameOver(message) {
        this.stopGame();
        this.assets.stopSound('ambient');

        // 立即隐藏游戏画面
        this.gameScreen.classList.remove('active');

        // 关闭摄像头面板
        if (this.state.cameraOpen) {
            this.camera.close();
        }

        // 隐藏摄像头面板
        const cameraPanel = document.getElementById('camera-panel');
        if (cameraPanel) {
            cameraPanel.classList.add('hidden');
            cameraPanel.classList.remove('show');
        }

        // 清理角色图层
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.innerHTML = '';
        }

        // 隐藏控制面板
        const controlPanel = document.getElementById('control-panel');
        if (controlPanel) {
            controlPanel.classList.add('hidden');
        }

        this.gameOverScreen(message);
    }

    winNight() {
        this.stopGame();
        this.assets.stopSound('ambient');

        // 关闭摄像头（如果打开）
        if (this.state.cameraOpen) {
            this.camera.close();
        }

        // 强制隐藏摄像头面板，防止闪现
        const cameraPanel = document.getElementById('camera-panel');
        if (cameraPanel) {
            cameraPanel.classList.add('hidden');
            cameraPanel.classList.remove('show', 'closing');
            cameraPanel.style.display = 'none'; // 强制隐藏
        }

        // 立即隐藏游戏画面，防止闪烁
        this.gameScreen.classList.remove('active');

        // 检查是否通关20/20/20 Custom Night
        if (this.state.customNight && this.state.currentNight === 7) {
            const levels = this.state.customAILevels;
            if (levels.epstein === 20 && levels.trump === 20 && levels.hawking === 20) {
                console.log('🌟 20/20/20 Custom Night completed!');
                localStorage.setItem('customNight202020', 'true');
            }
        }

        // 如果是 Night 6，播放特殊的胜利动画并标记完成
        if (this.state.currentNight === 6) {
            localStorage.setItem('night6Completed', 'true');
            this.playNight6VictoryAnimation();
        } else if (this.state.currentNight === 5) {
            // Night 5，播放特殊的胜利动画
            this.playNight5VictoryAnimation();
        } else {
            // 其他关卡播放普通的夜晚结束动画
            this.playNightEndAnimation();
        }
    }

    // Night 5 特殊胜利动画
    playNight5VictoryAnimation() {
        // 创建全屏动画容器
        const animationContainer = document.createElement('div');
        animationContainer.style.position = 'fixed';
        animationContainer.style.top = '0';
        animationContainer.style.left = '0';
        animationContainer.style.width = '100%';
        animationContainer.style.height = '100%';
        animationContainer.style.backgroundColor = '#000';
        animationContainer.style.display = 'flex';
        animationContainer.style.alignItems = 'center';
        animationContainer.style.justifyContent = 'center';
        animationContainer.style.zIndex = '10000';
        animationContainer.style.opacity = '0';
        animationContainer.style.transition = 'opacity 0.5s';

        // 创建时间显示
        const timeDisplay = document.createElement('div');
        timeDisplay.style.fontSize = '10vw';
        timeDisplay.style.fontWeight = 'bold';
        timeDisplay.style.color = '#fff';
        timeDisplay.style.fontFamily = 'Arial, sans-serif';
        timeDisplay.textContent = '5:59 AM';

        animationContainer.appendChild(timeDisplay);
        document.body.appendChild(animationContainer);

        // 淡入
        setTimeout(() => {
            animationContainer.style.opacity = '1';
        }, 50);

        // 1秒后变为 6:00 AM 并播放钟声
        setTimeout(() => {
            timeDisplay.textContent = '6:00 AM';
            this.assets.playSound('chimes', false, 1.0);
        }, 1000);

        // 3秒后淡出时间
        setTimeout(() => {
            timeDisplay.style.transition = 'opacity 0.5s';
            timeDisplay.style.opacity = '0';

            setTimeout(() => {
                // 移除时间显示
                animationContainer.removeChild(timeDisplay);

                // 创建 "RESCUE ARRIVE" 文字
                const rescueText = document.createElement('div');
                rescueText.style.fontSize = '8vw';
                rescueText.style.fontWeight = 'bold';
                rescueText.style.color = '#0f0'; // 绿色，表示救援
                rescueText.style.fontFamily = 'Arial, sans-serif';
                rescueText.style.textAlign = 'center';
                rescueText.style.opacity = '0';
                rescueText.style.transition = 'opacity 1s';
                rescueText.textContent = 'RESCUE ARRIVE';

                animationContainer.appendChild(rescueText);

                // 淡入 "RESCUE ARRIVE"
                setTimeout(() => {
                    rescueText.style.opacity = '1';
                }, 50);

                // 2秒后淡出 "RESCUE ARRIVE"，显示胜利画面
                setTimeout(() => {
                    rescueText.style.opacity = '0';

                    setTimeout(() => {
                        // 移除 "RESCUE ARRIVE" 文字
                        animationContainer.removeChild(rescueText);

                        // 创建胜利画面
                        const winScreen = document.createElement('img');
                        winScreen.src = 'assets/images/winscreen.png';
                        winScreen.style.width = '100%';
                        winScreen.style.height = '100%';
                        winScreen.style.objectFit = 'contain';
                        winScreen.style.opacity = '0';
                        winScreen.style.transition = 'opacity 1s';

                        animationContainer.appendChild(winScreen);

                        // 播放胜利音乐
                        this.assets.playSound('win', false, 1.0);

                        // 淡入胜利画面
                        setTimeout(() => {
                            winScreen.style.opacity = '1';
                        }, 50);

                        // 5秒后淡出并返回主菜单
                        setTimeout(() => {
                            animationContainer.style.opacity = '0';

                            setTimeout(() => {
                                document.body.removeChild(animationContainer);

                                // Night 5 通关后，解锁 Night 6（Special Night）
                                localStorage.setItem('night6Unlocked', 'true');

                                // 返回主菜单
                                this.clearProgress();
                                this.showMainMenu();
                            }, 500);
                        }, 5000); // 显示5秒
                    }, 1000); // "RESCUE ARRIVE" 淡出1秒
                }, 2000); // 显示 "RESCUE ARRIVE" 2秒
            }, 500); // 时间淡出0.5秒
        }, 3000); // 显示 "6:00 AM" 2秒
    }

    // Night 6 特殊胜利动画
    playNight6VictoryAnimation() {
        // 创建全屏动画容器
        const animationContainer = document.createElement('div');
        animationContainer.style.position = 'fixed';
        animationContainer.style.top = '0';
        animationContainer.style.left = '0';
        animationContainer.style.width = '100%';
        animationContainer.style.height = '100%';
        animationContainer.style.backgroundColor = '#000';
        animationContainer.style.display = 'flex';
        animationContainer.style.alignItems = 'center';
        animationContainer.style.justifyContent = 'center';
        animationContainer.style.zIndex = '10000';
        animationContainer.style.opacity = '0';
        animationContainer.style.transition = 'opacity 0.5s';

        // 创建时间显示
        const timeDisplay = document.createElement('div');
        timeDisplay.style.fontSize = '10vw';
        timeDisplay.style.fontWeight = 'bold';
        timeDisplay.style.color = '#fff';
        timeDisplay.style.fontFamily = 'Arial, sans-serif';
        timeDisplay.textContent = '5:59 AM';

        animationContainer.appendChild(timeDisplay);
        document.body.appendChild(animationContainer);

        // 淡入
        setTimeout(() => {
            animationContainer.style.opacity = '1';
        }, 50);

        // 1秒后变为 6:00 AM 并播放钟声
        setTimeout(() => {
            timeDisplay.textContent = '6:00 AM';
            this.assets.playSound('chimes', false, 1.0);
        }, 1000);

        // 3秒后淡出时间，显示night6.png图片
        setTimeout(() => {
            timeDisplay.style.transition = 'opacity 0.5s';
            timeDisplay.style.opacity = '0';

            setTimeout(() => {
                // 移除时间显示
                animationContainer.removeChild(timeDisplay);

                // 创建night6.png图片
                const night6Image = document.createElement('img');
                night6Image.src = 'assets/images/night6.png';
                night6Image.style.width = '100%';
                night6Image.style.height = '100%';
                night6Image.style.objectFit = 'contain';
                night6Image.style.opacity = '0';
                night6Image.style.transition = 'opacity 1s';

                animationContainer.appendChild(night6Image);

                // 播放goldenstephenscare.ogg音乐
                this.assets.playSound('goldenstephenscare', false, 1.0);

                // 淡入图片
                setTimeout(() => {
                    night6Image.style.opacity = '1';
                }, 50);

                // 5秒后淡出并返回主菜单
                setTimeout(() => {
                    animationContainer.style.opacity = '0';

                    setTimeout(() => {
                        document.body.removeChild(animationContainer);

                        // 返回主菜单
                        this.showMainMenu();
                    }, 500);
                }, 5000);
            }, 500);
        }, 3000);
    }

    // Night end animation: 5:59AM -> 6:00AM -> Days until rescue
    playNightEndAnimation() {
        // Create fullscreen animation container
        const animationContainer = document.createElement('div');
        animationContainer.style.position = 'fixed';
        animationContainer.style.top = '0';
        animationContainer.style.left = '0';
        animationContainer.style.width = '100%';
        animationContainer.style.height = '100%';
        animationContainer.style.backgroundColor = '#000';
        animationContainer.style.display = 'flex';
        animationContainer.style.alignItems = 'center';
        animationContainer.style.justifyContent = 'center';
        animationContainer.style.zIndex = '10000';
        animationContainer.style.opacity = '0';
        animationContainer.style.transition = 'opacity 0.5s';

        // 创建时间显示
        const timeDisplay = document.createElement('div');
        timeDisplay.style.fontSize = '10vw';
        timeDisplay.style.fontWeight = 'bold';
        timeDisplay.style.color = '#fff';
        timeDisplay.style.fontFamily = 'Arial, sans-serif';
        timeDisplay.textContent = '5:59 AM';

        animationContainer.appendChild(timeDisplay);
        document.body.appendChild(animationContainer);

        // Fade in
        setTimeout(() => {
            animationContainer.style.opacity = '1';
        }, 50);

        // After 1s change to 6:00AM and play sound effect
        setTimeout(() => {
            timeDisplay.textContent = '6:00 AM';
            this.assets.playSound('chimes', false, 1.0);
        }, 1000);

        // After 2s more, show message
        setTimeout(() => {
            // 淡出时间（不改变容器透明度，保持黑色背景）
            timeDisplay.style.transition = 'opacity 0.5s';
            timeDisplay.style.opacity = '0';

            setTimeout(() => {
                // Custom Night 通关显示
                if (this.state.customNight && this.state.currentNight === 7) {
                    timeDisplay.textContent = 'CUSTOM NIGHT COMPLETE';
                    timeDisplay.style.fontSize = '5vw';
                    timeDisplay.style.color = '#0f0'; // 绿色表示完成
                }
                // 如果还有下一关，显示剩余天数（故事设定是5晚，所以总是显示5-当前关卡）
                else if (this.state.currentNight < this.state.maxNights) {
                    const daysRemaining = 5 - this.state.currentNight; // 固定按5晚计算
                    timeDisplay.textContent = `${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} until rescue`;
                    timeDisplay.style.fontSize = '5vw';
                    timeDisplay.style.color = '#fff';
                } else {
                    // 所有关卡完成，显示TO BE CONTINUED
                    timeDisplay.innerHTML = 'TO BE CONTINUED...<br><span style="font-size: 3vw; color: #f00;">Web version port in progress</span>';
                    timeDisplay.style.fontSize = '5vw';
                    timeDisplay.style.color = '#fff';
                }
                timeDisplay.style.opacity = '1';
            }, 500);

            // 再过3秒后淡出
            setTimeout(() => {
                animationContainer.style.opacity = '0';

                setTimeout(() => {
                    document.body.removeChild(animationContainer);

                    // Custom Night 通关后返回主菜单
                    if (this.state.customNight && this.state.currentNight === 7) {
                        this.showMainMenu();
                    }
                    // 如果还有下一关，直接进入下一关
                    else if (this.state.currentNight < this.state.maxNights) {
                        this.state.currentNight++;
                        this.continueToNextNight();
                    } else {
                        // 所有关卡完成，清除进度并返回主菜单
                        this.clearProgress();
                        this.showMainMenu();
                    }
                }, 500);
            }, 3000); // 改为3秒，让玩家有时间看消息
        }, 3000);
    }

    gameOverScreen(message, win = false) {
        this.gameOverText.textContent = message;
        const subtitle = document.getElementById('game-over-subtitle');
        const gameOverStatic = document.getElementById('game-over-static');
        const restartBtn = document.getElementById('restart');
        const mainMenuBtn = document.getElementById('main-menu-btn');

        // 隐藏按钮
        if (restartBtn) restartBtn.style.display = 'none';
        if (mainMenuBtn) mainMenuBtn.style.display = 'none';

        // Play static video
        if (gameOverStatic) {
            gameOverStatic.currentTime = 0;
            gameOverStatic.play().catch(e => console.log('Failed to play game over static:', e));
        }

        if (win) {
            // Only increase night number if not at max level
            if (this.state.currentNight < this.state.maxNights) {
                this.state.currentNight++;
                // Hide subtitle, will continue to next night
                subtitle.classList.add('hidden');

                // Show game over screen
                this.gameOverElement.classList.remove('hidden');

                // Auto continue to next night after 3 seconds
                setTimeout(() => {
                    // 隐藏游戏结束画面
                    this.gameOverElement.classList.add('hidden');
                    this.gameScreen.classList.remove('active');

                    // 停止静态视频
                    if (gameOverStatic) {
                        gameOverStatic.pause();
                        gameOverStatic.currentTime = 0;
                    }

                    this.continueToNextNight();
                }, 3000);
            } else {
                // All available levels completed, show "to be continued" message
                subtitle.textContent = 'TO BE CONTINUED... (Web version port in progress)';
                subtitle.classList.remove('hidden');
                this.gameOverElement.classList.remove('hidden');

                // 3秒后自动返回主菜单
                setTimeout(() => {
                    this.gameOverElement.classList.add('hidden');
                    this.showMainMenu();
                }, 3000);
            }
        } else {
            // On failure hide subtitle
            subtitle.classList.add('hidden');
            this.gameOverElement.classList.remove('hidden');

            // 保存进度（如果在Night 2或更高关卡死亡）
            this.saveProgress();

            // 3秒后自动返回主菜单
            setTimeout(() => {
                this.gameOverElement.classList.add('hidden');
                this.showMainMenu();
            }, 3000);
        }
    }

    // Continue to next night (without cutscene)
    async continueToNextNight() {
        if (!this.assets.loaded) {
            await this.assets.loadAssets();
        }

        this.state.reset();
        this.enemyAI.reset(); // 重置敌人AI状态

        // 重置摄像头系统的sound按钮计数
        this.camera.resetSoundButtonCount();

        // 恢复摄像头面板的display（之前被强制隐藏）
        const cameraPanel = document.getElementById('camera-panel');
        if (cameraPanel) {
            cameraPanel.style.display = ''; // 恢复默认
        }

        // 显示每晚开始场景
        await this.showNightIntro();

        // 进场动画结束后才显示游戏画面
        this.gameScreen.classList.add('active');

        this.ui.currentSceneImg.src = this.assets.images.office.src;
        this.ui.currentSceneImg.style.display = 'block';
        this.viewPosition = 0.25;
        this.ui.updateViewPosition(this.viewPosition);

        this.ui.update();
        this.ui.createHotspots();

        // 初始化风扇状态
        this.initVentFanAnimation();

        this.startGameLoop();
        this.startViewRotation();

        // 前3个夜晚：等待指南关闭后再启动敌人 AI
        // Night 4+：直接启动敌人 AI
        if (this.state.currentNight > 3) {
            this.enemyAI.start();
        }

        this.assets.playSound('vents', true);

        // Show tutorial for specific nights
        if (this.state.currentNight === 2) {
            this.showTutorial('night2');
        } else if (this.state.currentNight === 3) {
            this.showTutorial('night3');
        }

        // Night 5: 必定触发 Golden 霍金彩蛋
        if (this.state.currentNight === 5) {
            console.log('🌟 Night 5 detected (continueToNextNight), triggering Golden Stephen...');
            setTimeout(() => {
                this.showGoldenStephen();
            }, 1000);
        }
    }

    stopGame() {
        this.state.isGameRunning = false;
        clearInterval(this.timeInterval);
        clearInterval(this.powerInterval);
        this.enemyAI.stop();
    }

    restartGame() {
        this.gameOverElement.classList.add('hidden');
        // Hide game screen, prepare to restart
        this.gameScreen.classList.remove('active');

        // 如果是Custom Night，重新开始Custom Night
        if (this.state.customNight && this.state.currentNight === 7) {
            this.startCustomNight();
        } else {
            this.startGame();
        }
    }

    showMainMenu() {
        this.gameOverElement.classList.add('hidden');
        this.gameScreen.classList.remove('active');

        // 显示音量按钮
        if (this.volumeBtn) {
            this.volumeBtn.classList.remove('hidden');
        }

        // 关闭摄像头面板
        if (this.state.cameraOpen) {
            this.camera.close();
        }

        // 隐藏摄像头面板
        const cameraPanel = document.getElementById('camera-panel');
        if (cameraPanel) {
            cameraPanel.classList.add('hidden');
            cameraPanel.classList.remove('show');
        }

        // 清理角色图层
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.innerHTML = '';
        }

        // 隐藏控制面板
        const controlPanel = document.getElementById('control-panel');
        if (controlPanel) {
            controlPanel.classList.add('hidden');
        }

        this.mainMenu.classList.remove('hidden');
        this.stopGame();

        // 更新Continue按钮显示
        this.updateContinueButton();

        this.assets.stopSound('vents');
        this.assets.stopSound('static');
        this.assets.stopSound('staticLoop');
        this.assets.stopSound('ventCrawling');

        const menuMusic = document.getElementById('menu-music');
        if (menuMusic) {
            menuMusic.loop = true;
            menuMusic.currentTime = 0;
            menuMusic.play().catch(e => console.log('Menu music playback failed:', e));
        }
    }
}
