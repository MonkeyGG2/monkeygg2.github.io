// Camera system management
class CameraSystem {
    constructor(game) {
        this.game = game;
        this.cameraPanel = document.getElementById('camera-panel');
        this.currentCamLabel = document.getElementById('current-cam-label');
        this.cameraErrorLabel = document.getElementById('camera-error-label');
        this.playSoundBtn = document.getElementById('play-sound-btn');
        this.shockHawkingBtn = document.getElementById('shock-hawking-btn');
        this.currentSoundToggle = false;
        this.staticVideo = document.getElementById('camera-static-video');

        // 播放声音按钮状态
        this.soundButtonCooldown = false;
        this.soundButtonUseCount = 0;
        this.maxSoundUses = 5; // 连续使用5次后摄像头故障
        this.cooldownTime = 8000; // 8秒冷却
        this.cooldownInterval = null; // 冷却动画定时器

        // 每个位置的连续吸引计数
        this.locationAttractCount = {}; // { 'cam11': 2, 'cam8': 1, ... }
        this.maxLocationAttractCount = 2; // 同一位置最多连续吸引2次
        this.lastEpLocation = null; // 记录EP的上一个位置，用于检测移动

        // EP 角色配置 - 直接引用 EnemyAI 的配置（游戏初始化后会设置）
        this.characterImages = null;
        this.characterPositions = null;
        this.characterBrightness = null;
        this.characterRotation = null;

        this.bindEvents();
    }

    // Initialize EP config (from EnemyAI)
    initEPConfig() {
        if (this.game.enemyAI) {
            this.characterImages = this.game.enemyAI.characterImages;
            this.characterPositions = this.game.enemyAI.characterPositions;
            this.characterBrightness = this.game.enemyAI.characterBrightness;
            this.characterRotation = this.game.enemyAI.characterRotation;
            console.log('EP config initialized from EnemyAI');
        }
    }

    bindEvents() {
        if (this.playSoundBtn) {
            this.playSoundBtn.addEventListener('click', () => this.playAmbientSound());
        }
        if (this.shockHawkingBtn) {
            this.shockHawkingBtn.addEventListener('click', () => this.shockHawking());
        }
    }

    toggle() {
        // console.log('📷 Camera toggle called, current state:', this.game.state.cameraOpen);
        if (this.game.state.cameraOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        // console.log('📷 Opening camera...');
        // console.log('📷 Camera panel element:', this.cameraPanel);
        // console.log('📷 Camera panel classes before:', this.cameraPanel.className);

        this.game.state.cameraOpen = true;
        this.cameraPanel.classList.remove('hidden');
        this.cameraPanel.classList.add('show');

        // console.log('📷 Camera panel classes after:', this.cameraPanel.className);
        // console.log('📷 Camera panel display:', window.getComputedStyle(this.cameraPanel).display);
        // console.log('📷 Camera panel opacity:', window.getComputedStyle(this.cameraPanel).opacity);
        // console.log('📷 Camera panel transform:', window.getComputedStyle(this.cameraPanel).transform);

        this.game.assets.playSound('crank1');

        // Start looping low volume static sound
        this.game.assets.playSound('staticLoop', true, 0.3);

        this.createCameraGrid();

        // 更新电击按钮显示
        this.updateShockButtonVisibility();

        // 更新霍金警告位置（从风扇左边移到地图上）
        if (this.game.enemyAI && this.game.enemyAI.hawking.active) {
            this.game.enemyAI.updateHawkingWarningDisplay();
        }

        // If camera failed, show failure effect
        if (this.game.state.cameraFailed) {
            console.log('📷 Camera is failed, showing failure effect');
            this.showCameraFailure();
        } else {
            console.log('📷 Camera is normal, showing normal view');
            // Normal state, ensure all failure effects removed
            this.cameraPanel.classList.remove('transitioning');

            // Hide ERR label
            if (this.cameraErrorLabel) {
                this.cameraErrorLabel.classList.remove('active');
            }

            // Stop static
            this.stopStatic();

            // Show map
            const cameraGrid = document.getElementById('camera-grid');
            if (cameraGrid) {
                cameraGrid.style.display = 'block';
            }

            // Update view
            this.updateView();
        }

        // Stop view rotation
        this.game.isRotatingLeft = false;
        this.game.isRotatingRight = false;
    }

    // Show camera failure effect
    showCameraFailure() {
        console.log('Showing camera failure effect...');

        // Night 5: 30% 概率触发 Golden 霍金彩蛋
        if (this.game.state.currentNight === 5 && Math.random() < 0.3) {
            this.game.showGoldenStephen();
        }

        // Hide background image and characters
        this.cameraPanel.classList.add('transitioning');

        // Hide map
        const cameraGrid = document.getElementById('camera-grid');
        if (cameraGrid) {
            cameraGrid.style.display = 'none';
            console.log('Camera grid hidden');
        }

        // Show ERR label
        if (this.cameraErrorLabel) {
            this.cameraErrorLabel.classList.add('active');
            console.log('ERR label shown');
        }

        // Show and play static video
        if (this.staticVideo) {
            console.log('Starting static video...');
            this.staticVideo.classList.add('active');
            this.staticVideo.currentTime = 0; // Play from beginning
            this.staticVideo.play().catch(e => console.log('Video playback failed:', e));
        } else {
            console.error('Static video element not found!');
        }
    }

    // Stop static effect
    stopStatic() {
        if (this.staticVideo) {
            this.staticVideo.classList.remove('active');
            this.staticVideo.pause();
            this.staticVideo.currentTime = 0;
        }
    }

    // Start static effect (for switching cameras)
    startStatic() {
        if (this.staticVideo) {
            this.staticVideo.classList.add('active');
            this.staticVideo.play().catch(e => console.log('Video playback failed:', e));
        }
    }

    // Restore camera normal display
    restoreCameraView() {
        console.log('Restoring camera view...');

        // Stop static
        this.stopStatic();
        console.log('Static video stopped');

        // Remove failure state
        this.cameraPanel.classList.remove('transitioning');
        console.log('Removed transitioning class');

        // Hide ERR label
        if (this.cameraErrorLabel) {
            this.cameraErrorLabel.classList.remove('active');
            console.log('ERR label hidden');
        }

        // Show map
        const cameraGrid = document.getElementById('camera-grid');
        if (cameraGrid) {
            cameraGrid.style.display = 'block';
            console.log('Camera grid shown');
        }

        // Update view
        this.updateView();
        console.log('View updated');
    }

    // Fix camera
    restartCamera() {
        // 如果控制面板正忙，不允许操作
        if (this.game.state.controlPanelBusy) {
            console.log('Control panel is busy, cannot restart camera');
            return;
        }

        console.log('Restarting camera system...');
        this.game.state.cameraRestarting = true;
        this.game.state.controlPanelBusy = true; // 锁定控制面板

        // 播放心电图音效
        this.game.assets.playSound('ekg', false, 0.8);

        // Restore after 4 seconds
        setTimeout(() => {
            // 无论之前是否故障，重启后都恢复正常
            this.game.state.cameraFailed = false;
            this.game.state.cameraRestarting = false;
            this.game.state.controlPanelBusy = false; // 解锁控制面板

            // Stop static noise (如果有的话)
            this.game.assets.stopSound('static');

            // Reset sound button count (恢复5次使用次数)
            this.resetSoundButtonCount();

            console.log('Camera system restored!');

            // If camera is open, immediately restore display
            if (this.game.state.cameraOpen) {
                console.log('Camera is open, restoring view...');
                this.restoreCameraView();
            }
        }, 4000);
    }

    close() {
        this.game.state.cameraOpen = false;
        this.cameraPanel.classList.add('closing');
        this.cameraPanel.classList.remove('show');

        // Stop looping static sound
        this.game.assets.stopSound('staticLoop');

        // Clear character display
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.innerHTML = '';
            console.log('Character overlay cleared');
        }

        // 更新霍金警告位置（从地图移到风扇左边）
        if (this.game.enemyAI && this.game.enemyAI.hawking.active) {
            this.game.enemyAI.updateHawkingWarningDisplay();
        }

        setTimeout(() => {
            this.cameraPanel.classList.add('hidden');
            this.cameraPanel.classList.remove('closing');
        }, 400);

        this.game.assets.playSound('crank2');
    }

    switchCamera(camNum) {
        // If camera failed, cannot switch
        if (this.game.state.cameraFailed) {
            console.log('Camera system is offline! Cannot switch cameras.');
            return;
        }

        // Add transition state, hide background image
        this.cameraPanel.classList.add('transitioning');

        // Hide map
        const cameraGrid = document.getElementById('camera-grid');
        if (cameraGrid) {
            cameraGrid.style.display = 'none';
        }

        // 隐藏角色
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.style.display = 'none';
        }

        // 暂时降低循环静态音的音量
        this.game.assets.setSoundVolume('staticLoop', 0.1);

        // 播放正常音量的静态音效
        this.game.assets.playSound('static', false, 1.0);

        // 1000ms 后停止静态音效
        setTimeout(() => {
            this.game.assets.stopSound('static');
        }, 1000);

        // Show static effect
        this.startStatic();

        // Switch camera after 500ms
        setTimeout(() => {
            // If camera already failed, stop switch animation, show failure effect
            if (this.game.state.cameraFailed) {
                console.log('Camera failed during switch, showing failure effect');
                this.showCameraFailure();
                return;
            }

            this.game.state.currentCam = `cam${camNum}`;
            this.updateView();
            this.createCameraGrid();

            // After another 500ms fade out static, restore background
            setTimeout(() => {
                // Check again if failed
                if (this.game.state.cameraFailed) {
                    console.log('Camera failed during switch, showing failure effect');
                    this.showCameraFailure();
                    return;
                }

                this.stopStatic();
                this.cameraPanel.classList.remove('transitioning');

                // 显示地图
                if (cameraGrid) {
                    cameraGrid.style.display = 'block';
                }

                // 显示角色
                if (characterOverlay) {
                    characterOverlay.style.display = 'block';
                }

                // 更新电击按钮显示（根据当前摄像头）
                this.updateShockButtonVisibility();

                // 恢复循环静态音的音量
                this.game.assets.setSoundVolume('staticLoop', 0.3);
            }, 500);
        }, 500);
    }

    updateView() {
        // If camera failed, don't update view
        if (this.game.state.cameraFailed) {
            return;
        }

        // Update camera panel background image
        if (this.game.assets.images[this.game.state.currentCam]) {
            this.cameraPanel.style.backgroundImage = `url('${this.game.assets.images[this.game.state.currentCam].src}')`;
        }

        // 更新摄像头标签
        const camNum = this.game.state.currentCam.replace('cam', '');
        this.currentCamLabel.textContent = `CAM ${camNum}`;

        // 更新角色显示
        this.updateCharacterDisplay();

        // 更新电击按钮显示
        this.updateShockButtonVisibility();
    }

    // 更新角色显示（支持多个敌人）
    updateCharacterDisplay() {
        const currentCam = this.game.state.currentCam;
        const epLocation = this.game.enemyAI.getCurrentLocation();
        const trumpLocation = this.game.enemyAI.getTrumpCurrentLocation();
        const hawkingActive = this.game.enemyAI.hawking.active;

        console.log(`updateCharacterDisplay - Current Cam: ${currentCam}, EP: ${epLocation}, Trump: ${trumpLocation}, Hawking: ${hawkingActive}, Night: ${this.game.state.currentNight}`);

        // 打印所有相关元素的z-index
        console.log('🔍 Z-Index Debug:');
        console.log('  - cameraPanel:', window.getComputedStyle(this.cameraPanel).zIndex);
        const staticVideo = document.getElementById('camera-static-video');
        if (staticVideo) {
            console.log('  - staticVideo:', window.getComputedStyle(staticVideo).zIndex);
        }
        const existingOverlay = document.getElementById('character-overlay');
        if (existingOverlay) {
            console.log('  - characterOverlay:', window.getComputedStyle(existingOverlay).zIndex);
            console.log('  - characterOverlay display:', window.getComputedStyle(existingOverlay).display);
            console.log('  - characterOverlay children count:', existingOverlay.children.length);
        }

        // 获取或创建角色容器
        let characterOverlay = document.getElementById('character-overlay');
        if (!characterOverlay) {
            characterOverlay = document.createElement('div');
            characterOverlay.id = 'character-overlay';
            characterOverlay.style.position = 'absolute';
            characterOverlay.style.top = '0';
            characterOverlay.style.left = '0';
            characterOverlay.style.width = '100%';
            characterOverlay.style.height = '100%';
            characterOverlay.style.pointerEvents = 'none';
            characterOverlay.style.zIndex = '5';
            characterOverlay.style.overflow = 'hidden';
            this.cameraPanel.appendChild(characterOverlay);
        }

        // 清空之前的角色
        characterOverlay.innerHTML = '';

        console.log('🔍 Character overlay cleared, checking EP display conditions...');
        console.log('🔍 EP hasSpawned:', this.game.enemyAI.epstein.hasSpawned);
        console.log('🔍 EP location matches current cam:', epLocation === currentCam);
        console.log('🔍 Has characterImages:', !!this.characterImages);
        console.log('🔍 Has image for current cam:', this.characterImages ? !!this.characterImages[currentCam] : 'N/A');

        // 显示霍金（如果激活且在cam6）
        if (hawkingActive && currentCam === 'cam6') {
            const hawkingImg = document.createElement('img');
            hawkingImg.src = 'assets/images/mrstephen.png';
            hawkingImg.style.position = 'absolute';
            hawkingImg.className = 'visible hawking-character';
            hawkingImg.style.zIndex = '3'; // Hawking 在最上层
            hawkingImg.style.left = '59.6%';
            hawkingImg.style.bottom = '0.9%';
            hawkingImg.style.width = '37%';
            hawkingImg.style.transform = 'translateX(-50%) rotate(-5deg)';
            hawkingImg.style.filter = 'brightness(0.33) contrast(1) saturate(1)';

            characterOverlay.appendChild(hawkingImg);
            console.log(`✓ Displaying Hawking at cam6`);
        }

        // 显示 EP（如果已出场且在当前摄像头）
        // console.log('🔍 EP Display Check:', {
        //     hasSpawned: this.game.enemyAI.epstein.hasSpawned,
        //     epLocation: epLocation,
        //     currentCam: currentCam,
        //     match: epLocation === currentCam,
        //     hasImage: !!this.characterImages,
        //     imageForCam: this.characterImages ? !!this.characterImages[currentCam] : 'N/A'
        // });

        if (this.game.enemyAI.epstein.hasSpawned && epLocation === currentCam && this.characterImages && this.characterImages[currentCam]) {
            // 创建EP容器（用于包含EP图片和电眼）
            const epContainer = document.createElement('div');
            epContainer.className = 'ep-container';
            epContainer.style.position = 'absolute';
            epContainer.style.zIndex = '1';

            const pos = this.characterPositions[currentCam];
            if (pos) {
                if (pos.left) {
                    epContainer.style.left = pos.left;
                    epContainer.style.right = 'auto';
                } else if (pos.right) {
                    epContainer.style.right = pos.right;
                    epContainer.style.left = 'auto';
                }

                epContainer.style.bottom = pos.bottom;
                epContainer.style.width = pos.width;
                epContainer.style.transform = pos.transform || 'none';
            }

            // EP图片
            const epImg = document.createElement('img');
            epImg.src = this.characterImages[currentCam];
            epImg.style.position = 'relative';
            epImg.style.width = '100%';
            epImg.style.height = 'auto';
            epImg.style.display = 'block';
            epImg.className = 'visible ep-character';

            // 应用明暗度
            const brightness = this.characterBrightness[currentCam] || 100;
            epImg.style.filter = `brightness(${brightness}%)`;

            epContainer.appendChild(epImg);
            characterOverlay.appendChild(epContainer);
            console.log(`✓ Displaying EP at ${currentCam}`);

            // Night 6: 渲染电眼特效（作为EP容器的子元素）
            if (this.game.state.currentNight === 6) {
                this.renderLightningEyes(epContainer, currentCam);
            }
        }

        // 显示 Trump（如果已出场且在当前摄像头，且不在爬行状态，且当前夜晚有Trump配置）
        if (this.game.enemyAI.trump.hasSpawned && !this.game.enemyAI.trump.isCrawling && trumpLocation === currentCam && this.game.enemyAI.currentTrumpConfig) {
            const trumpImages = this.game.enemyAI.trumpImages;
            const trumpPositions = this.game.enemyAI.trumpPositions;
            const trumpBrightness = this.game.enemyAI.trumpBrightness;

            if (trumpImages[currentCam]) {
                const trumpImg = document.createElement('img');
                trumpImg.src = trumpImages[currentCam];
                trumpImg.style.position = 'absolute';
                trumpImg.className = 'visible trump-character';
                trumpImg.style.zIndex = '2'; // Trump 在上层

                const pos = trumpPositions[currentCam];
                if (pos) {
                    if (pos.left) {
                        trumpImg.style.left = pos.left;
                        trumpImg.style.right = 'auto';
                    } else if (pos.right) {
                        trumpImg.style.right = pos.right;
                        trumpImg.style.left = 'auto';
                    }

                    trumpImg.style.bottom = pos.bottom;
                    trumpImg.style.width = pos.width;
                    trumpImg.style.transform = pos.transform || 'none';
                }

                const brightness = trumpBrightness[currentCam] || 100;
                trumpImg.style.filter = `brightness(${brightness}%)`;

                characterOverlay.appendChild(trumpImg);
                console.log(`✓ Displaying Trump at ${currentCam}`);
            }
        }

        if (characterOverlay.children.length === 0) {
            console.log(`✗ No characters at current camera (viewing ${currentCam})`);
        }
    }

    createCameraGrid() {
        const grid = document.getElementById('camera-grid');
        grid.innerHTML = '';

        // 创建地图容器
        const mapContainer = document.createElement('div');
        mapContainer.style.position = 'relative';
        mapContainer.style.width = '100%';
        mapContainer.style.height = '100%';

        // 添加地图图片
        const mapImg = document.createElement('img');
        mapImg.src = 'assets/images/FNAE-Map-layout.png';
        mapImg.style.width = '100%';
        mapImg.style.height = 'auto';
        mapImg.style.display = 'block';
        mapContainer.appendChild(mapImg);

        // 添加 YOU 标记（玩家位置）
        const youMarker = document.createElement('div');
        youMarker.style.position = 'absolute';
        youMarker.style.left = '7.0%';
        youMarker.style.top = '82.6%';
        youMarker.style.width = '13.0%';
        youMarker.style.height = '8.0%';
        youMarker.style.display = 'flex';
        youMarker.style.alignItems = 'center';
        youMarker.style.justifyContent = 'center';
        youMarker.style.fontSize = '0.7vw';
        youMarker.style.fontWeight = 'bold';
        youMarker.style.color = '#fff';
        youMarker.style.textShadow = '1px 1px 2px #000';
        youMarker.style.fontFamily = 'Arial, sans-serif';
        youMarker.style.background = 'rgba(0, 0, 0, 0.5)';
        youMarker.style.borderRadius = '4px';
        youMarker.textContent = 'YOU';
        mapContainer.appendChild(youMarker);

        // 定义每个摄像头在地图上的位置（百分比）
        const cameraPositions = [
            { cam: 1, x: 25.7, y: 84.3, width: 13.0, height: 8.0 },
            { cam: 2, x: 35.0, y: 56.6, width: 13.0, height: 8.0 },
            { cam: 3, x: 51.5, y: 77.6, width: 13.0, height: 8.0 },
            { cam: 4, x: 57.7, y: 44.9, width: 12.9, height: 8.0 },
            { cam: 5, x: 75.4, y: 60.3, width: 12.9, height: 8.0 },
            { cam: 6, x: 77.2, y: 82.2, width: 13.0, height: 8.0 },
            { cam: 7, x: 52.0, y: 27.9, width: 12.9, height: 8.0 },
            { cam: 8, x: 80.2, y: 21.9, width: 12.8, height: 8.0 },
            { cam: 9, x: 24.4, y: 20.6, width: 12.9, height: 8.0 },
            { cam: 10, x: 7.9, y: 39.1, width: 12.8, height: 8.0 },
            { cam: 11, x: 72.9, y: 4.6, width: 13.0, height: 8.0 },
        ];

        // 为每个摄像头创建可点击热区
        cameraPositions.forEach(pos => {
            const hotspot = document.createElement('div');
            hotspot.className = 'camera-hotspot';
            hotspot.style.position = 'absolute';
            hotspot.style.left = pos.x + '%';
            hotspot.style.top = pos.y + '%';
            hotspot.style.width = pos.width + '%';
            hotspot.style.height = pos.height + '%';
            hotspot.style.cursor = 'pointer';
            hotspot.style.transition = 'all 0.2s';
            hotspot.style.display = 'flex';
            hotspot.style.alignItems = 'center';
            hotspot.style.justifyContent = 'center';
            hotspot.style.fontSize = '0.7vw';
            hotspot.style.fontWeight = 'bold';
            hotspot.style.color = '#fff';
            hotspot.style.textShadow = '1px 1px 2px #000';
            hotspot.style.fontFamily = 'Arial, sans-serif';
            hotspot.style.whiteSpace = 'nowrap';
            hotspot.style.borderRadius = '4px';
            hotspot.style.letterSpacing = '0.5px';

            // 添加CAM文本
            hotspot.textContent = `CAM ${pos.cam}`;

            // 当前选中的摄像头绿色闪烁
            if (this.game.state.currentCam === `cam${pos.cam}`) {
                hotspot.classList.add('camera-selected');
                hotspot.style.border = 'none';
            } else {
                hotspot.style.border = 'none';
                hotspot.style.background = 'transparent';
            }

            // 悬浮效果
            hotspot.addEventListener('mouseenter', () => {
                if (this.game.state.currentCam !== `cam${pos.cam}`) {
                    hotspot.style.background = 'rgba(255, 255, 255, 0.2)';
                }
            });

            hotspot.addEventListener('mouseleave', () => {
                if (this.game.state.currentCam !== `cam${pos.cam}`) {
                    hotspot.style.background = 'transparent';
                }
            });

            // 点击切换摄像头
            hotspot.addEventListener('click', () => this.switchCamera(pos.cam));

            mapContainer.appendChild(hotspot);
        });

        grid.appendChild(mapContainer);
    }

    playAmbientSound() {
        // 如果在冷却中，不能使用
        if (this.soundButtonCooldown) {
            console.log('Sound button on cooldown');
            return;
        }

        const currentCam = this.game.state.currentCam;

        // 检查EP是否移动了，如果移动了则重置所有位置的计数
        const currentEpLocation = this.game.enemyAI.getCurrentLocation();
        if (this.lastEpLocation !== currentEpLocation) {
            console.log(`EP moved from ${this.lastEpLocation} to ${currentEpLocation}, resetting all location counts`);
            this.locationAttractCount = {}; // 重置所有位置计数
            this.lastEpLocation = currentEpLocation;
        }

        // 交替播放 1.ogg 和 2.ogg
        const soundFile = this.currentSoundToggle ? '2.ogg' : '1.ogg';
        this.currentSoundToggle = !this.currentSoundToggle;

        // 创建并播放音频
        const audio = new Audio(`assets/sounds/${soundFile}`);
        audio.play().catch(e => console.log('音频播放失败:', e));

        // 检查当前位置是否已经用完2次
        let canAttract = true;
        if (this.locationAttractCount[currentCam] >= this.maxLocationAttractCount) {
            console.log(`Location ${currentCam} already used ${this.maxLocationAttractCount} times - wasting player's attempt`);
            canAttract = false;
        }

        // 尝试吸引EP到当前摄像头位置（如果位置可用）
        let attracted = false;
        if (canAttract) {
            attracted = this.game.enemyAI.attractToSound(currentCam);

            if (attracted) {
                // 吸引成功，播放过场动画
                this.playAttractionTransition();

                // 增加该位置的计数
                this.locationAttractCount[currentCam] = (this.locationAttractCount[currentCam] || 0) + 1;
                console.log(`Epstein attracted to ${currentCam}! Count: ${this.locationAttractCount[currentCam]}/${this.maxLocationAttractCount}`);

                // 更新EP位置记录
                this.lastEpLocation = currentCam;
            } else {
                // 吸引失败（不邻近或其他原因），不给用户提示
                console.log('Attraction failed');
            }
        } else {
            // 位置已用完2次，浪费玩家的尝试
            console.log('Location maxed out - player wasted an attempt');
        }

        // 增加使用次数（无论是否成功）
        this.soundButtonUseCount++;
        console.log(`Sound button used: ${this.soundButtonUseCount}/${this.maxSoundUses}`);

        // 检查是否达到最大使用次数
        if (this.soundButtonUseCount >= this.maxSoundUses) {
            console.log('Sound button overused! Camera failure!');
            this.soundButtonUseCount = 0; // 重置计数

            // 如果正在播放吸引动画，立即停止
            if (this.cameraPanel.classList.contains('transitioning')) {
                this.stopStatic();
                this.cameraPanel.classList.remove('transitioning');
            }

            // 触发摄像头故障
            this.game.enemyAI.triggerCameraFailure();
        }

        // 开始冷却
        this.soundButtonCooldown = true;
        this.playSoundBtn.style.opacity = '0.5';
        this.playSoundBtn.style.cursor = 'not-allowed';

        // 添加加载动画
        this.startCooldownAnimation();

        // 8秒后解除冷却
        setTimeout(() => {
            this.soundButtonCooldown = false;
            this.playSoundBtn.style.opacity = '1';
            this.playSoundBtn.style.cursor = 'pointer';
            this.stopCooldownAnimation();
        }, this.cooldownTime);
    }

    // 开始冷却动画
    startCooldownAnimation() {
        let dotCount = 0;
        this.cooldownInterval = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            const dots = '.'.repeat(dotCount);
            this.playSoundBtn.textContent = `PLAY SOUND${dots}`;
        }, 500);
    }

    // 停止冷却动画
    stopCooldownAnimation() {
        if (this.cooldownInterval) {
            clearInterval(this.cooldownInterval);
            this.cooldownInterval = null;
        }
        this.playSoundBtn.textContent = 'PLAY SOUND';
    }

    // 吸引成功的过场动画
    playAttractionTransition() {
        console.log('Playing attraction transition...');

        // 添加过场状态，隐藏背景图片和地图
        this.cameraPanel.classList.add('transitioning');

        // 隐藏地图
        const cameraGrid = document.getElementById('camera-grid');
        if (cameraGrid) {
            cameraGrid.style.display = 'none';
        }

        // 隐藏角色
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.style.display = 'none';
        }

        // 暂时降低循环静态音的音量
        this.game.assets.setSoundVolume('staticLoop', 0.1);

        // 播放正常音量的静态音效
        this.game.assets.playSound('static', false, 1.0);

        // 1000ms 后停止静态音效
        setTimeout(() => {
            this.game.assets.stopSound('static');
        }, 1000);

        // 显示雪花效果
        this.startStatic();

        // 500ms 后更新显示
        setTimeout(() => {
            // 如果摄像头已经故障，停止动画并显示故障效果
            if (this.game.state.cameraFailed) {
                console.log('Camera failed during attraction transition, showing failure effect');
                this.showCameraFailure();
                return;
            }

            this.updateCharacterDisplay();

            // 再过 500ms 淡出雪花，恢复背景
            setTimeout(() => {
                // 如果摄像头已经故障，停止动画并显示故障效果
                if (this.game.state.cameraFailed) {
                    console.log('Camera failed during attraction transition, showing failure effect');
                    this.showCameraFailure();
                    return;
                }

                this.stopStatic();
                this.cameraPanel.classList.remove('transitioning');

                // 显示地图
                if (cameraGrid) {
                    cameraGrid.style.display = 'block';
                }

                // 显示角色
                if (characterOverlay) {
                    characterOverlay.style.display = 'block';
                }

                // 恢复循环静态音的音量
                this.game.assets.setSoundVolume('staticLoop', 0.3);
            }, 500);
        }, 500);
    }

    // 重置声音按钮计数（摄像头重启后调用）
    resetSoundButtonCount() {
        this.soundButtonUseCount = 0;
    }

    // EP移动时的过场动画
    playMovementTransition() {
        console.log('Playing movement transition...');

        // 如果摄像头已经故障，不播放动画
        if (this.game.state.cameraFailed) {
            console.log('Camera already failed, skipping movement transition');
            return;
        }

        // 添加过场状态
        this.cameraPanel.classList.add('transitioning');

        // 隐藏地图
        const cameraGrid = document.getElementById('camera-grid');
        if (cameraGrid) {
            cameraGrid.style.display = 'none';
        }

        // 隐藏角色
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.style.display = 'none';
        }

        // 暂时降低循环静态音的音量
        this.game.assets.setSoundVolume('staticLoop', 0.1);

        // 播放正常音量的静态音效
        this.game.assets.playSound('static', false, 1.0);

        // 1000ms 后停止静态音效
        setTimeout(() => {
            this.game.assets.stopSound('static');
        }, 1000);

        // 显示雪花效果
        this.startStatic();

        // 500ms 后更新显示
        setTimeout(() => {
            // 如果摄像头已经故障，停止动画并显示故障效果
            if (this.game.state.cameraFailed) {
                console.log('Camera failed during movement transition, showing failure effect');
                this.showCameraFailure();
                return;
            }

            this.updateCharacterDisplay();

            // 再过 500ms 淡出雪花，恢复背景
            setTimeout(() => {
                // 如果摄像头已经故障，停止动画并显示故障效果
                if (this.game.state.cameraFailed) {
                    console.log('Camera failed during movement transition, showing failure effect');
                    this.showCameraFailure();
                    return;
                }

                this.stopStatic();
                this.cameraPanel.classList.remove('transitioning');

                // 显示地图
                if (cameraGrid) {
                    cameraGrid.style.display = 'block';
                }

                // 显示角色
                if (characterOverlay) {
                    characterOverlay.style.display = 'block';
                }

                // 恢复循环静态音的音量
                this.game.assets.setSoundVolume('staticLoop', 0.3);
            }, 500);
        }, 500);
    }

    // 电击霍金
    shockHawking() {
        // 立即播放音效
        this.game.assets.playSound('hawking_shock', false, 1.0);

        // 显示雪花过场动画
        this.cameraPanel.classList.add('transitioning');

        // 播放雪花视频
        if (this.staticVideo) {
            this.staticVideo.classList.add('active');
            this.staticVideo.currentTime = 0;
            this.staticVideo.play().catch(e => console.log('Video playback failed:', e));
        }

        // 1秒后执行电击并恢复画面
        setTimeout(() => {
            if (this.game.enemyAI && this.game.enemyAI.shockHawking()) {
                console.log('Hawking shocked successfully!');
            }

            // 停止雪花视频
            if (this.staticVideo) {
                this.staticVideo.classList.remove('active');
                this.staticVideo.pause();
            }

            // 恢复摄像头画面
            this.cameraPanel.classList.remove('transitioning');
            this.updateView();
        }, 1000);
    }

    // 更新电击按钮显示（Night 3-5 和 Custom Night 中 Hawking 激活时显示）
    updateShockButtonVisibility() {
        if (this.shockHawkingBtn) {
            const currentCam = this.game.state.currentCam;
            const night = this.game.state.currentNight;

            // Night 3-5 显示
            const isNormalNight = night >= 3 && night <= 5;

            // Custom Night 且 Hawking AI > 0 时显示
            const isCustomNightWithHawking = this.game.state.customNight &&
                                            night === 7 &&
                                            this.game.state.customAILevels.hawking > 0;

            if ((isNormalNight || isCustomNightWithHawking) && this.game.state.cameraOpen && currentCam === 'cam6') {
                this.shockHawkingBtn.style.display = 'block';
            } else {
                this.shockHawkingBtn.style.display = 'none';
            }
        }
    }

    // 渲染电眼特效（Night 6）- 作为EP容器的子元素
    renderLightningEyes(epContainer, currentCam) {
        const eyesConfig = this.game.enemyAI.lightningEyesConfig[currentCam];
        if (!eyesConfig) return;

        // 创建两只眼睛（相对于EP图片定位）
        [eyesConfig.eye1, eyesConfig.eye2].forEach((eyeConfig, index) => {
            // 眼睛容器
            const eyeContainer = document.createElement('div');
            eyeContainer.className = 'lightning-eye-container';
            eyeContainer.style.position = 'absolute';
            eyeContainer.style.left = eyeConfig.left;
            eyeContainer.style.top = eyeConfig.top;
            eyeContainer.style.width = eyeConfig.width;
            eyeContainer.style.height = eyeConfig.height;
            eyeContainer.style.transform = 'translate(-50%, -50%)';
            eyeContainer.style.transformOrigin = 'center center';
            eyeContainer.style.zIndex = '10';
            eyeContainer.style.pointerEvents = 'none';

            // 核心发光点
            const core = document.createElement('div');
            core.className = 'lightning-eye-core';
            core.style.position = 'absolute';
            core.style.top = '50%';
            core.style.left = '50%';
            core.style.width = '60%';
            core.style.height = '60%';
            core.style.transform = 'translate(-50%, -50%)';
            core.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 255, 255, 1) 40%, rgba(0, 200, 255, 0.6) 70%, transparent 100%)';
            core.style.borderRadius = '50%';
            core.style.filter = 'brightness(2)';
            core.style.animation = 'lightning-pulse 0.15s infinite';

            // 外层光晕
            const glow = document.createElement('div');
            glow.className = 'lightning-eye-glow';
            glow.style.position = 'absolute';
            glow.style.top = '50%';
            glow.style.left = '50%';
            glow.style.width = '100%';
            glow.style.height = '100%';
            glow.style.transform = 'translate(-50%, -50%)';
            glow.style.background = 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0.4) 30%, rgba(0, 200, 255, 0.2) 60%, transparent 100%)';
            glow.style.borderRadius = '50%';
            glow.style.boxShadow = `
                0 0 20px rgba(0, 255, 255, 1),
                0 0 40px rgba(0, 255, 255, 0.8),
                0 0 60px rgba(0, 255, 255, 0.6)
            `;
            glow.style.animation = 'lightning-flicker 0.1s infinite';

            // 雷电效果（多条随机闪电）
            for (let i = 0; i < 3; i++) {
                const lightning = document.createElement('div');
                lightning.className = 'lightning-bolt';
                lightning.style.position = 'absolute';
                lightning.style.top = '50%';
                lightning.style.left = '50%';
                lightning.style.width = '2px';
                lightning.style.height = `${30 + Math.random() * 40}%`;
                lightning.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 255, 255, 0.8), transparent)';
                lightning.style.transformOrigin = 'top center';
                lightning.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
                lightning.style.boxShadow = '0 0 5px rgba(0, 255, 255, 1), 0 0 10px rgba(0, 255, 255, 0.8)';
                lightning.style.animation = `lightning-bolt ${0.1 + Math.random() * 0.1}s infinite`;
                lightning.style.animationDelay = `${Math.random() * 0.1}s`;
                lightning.style.opacity = '0.8';
                eyeContainer.appendChild(lightning);
            }

            eyeContainer.appendChild(glow);
            eyeContainer.appendChild(core);
            epContainer.appendChild(eyeContainer);
        });

        console.log(`⚡ Rendered lightning eyes with electric effects at ${currentCam}`);
    }
}
