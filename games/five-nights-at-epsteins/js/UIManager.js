// UI Manager
class UIManager {
    constructor(game) {
        this.game = game;
        this.initElements();
    }

    initElements() {
        this.powerValue = document.getElementById('power-value');
        this.timeValue = document.getElementById('time-value');
        this.nightValue = document.getElementById('night-value');
        this.currentSceneImg = document.getElementById('current-scene');
    }

    update() {
        this.powerValue.textContent = Math.floor(this.game.state.oxygen);
        this.timeValue.textContent = `${this.game.state.currentTime === 0 ? 12 : this.game.state.currentTime} AM`;
        
        // Custom Night 显示为 "7" 或 "CUSTOM"
        if (this.game.state.customNight && this.game.state.currentNight === 7) {
            this.nightValue.textContent = '7';
        } else {
            this.nightValue.textContent = this.game.state.currentNight;
        }
        
        // Only update scene image when camera is not open
        if (!this.game.state.cameraOpen) {
            const sceneKey = 'office';
            if (this.game.assets.images[sceneKey]) {
                this.currentSceneImg.src = this.game.assets.images[sceneKey].src;
                this.currentSceneImg.style.display = 'block';
            }
        }
        
        // Flash warning when oxygen below 40%
        if (this.game.state.oxygen <= 40 && this.game.state.ventsClosed) {
            this.powerValue.classList.add('flicker');
        } else {
            this.powerValue.classList.remove('flicker');
        }
        
        // Update camera status
        this.updateCameraStatus();
    }

    createHotspots() {
        const hotspotsContainer = document.getElementById('hotspots');
        hotspotsContainer.innerHTML = '';
        
        // Create control panel button (special style)
        this.createControlPanelButton();
        
        // Create camera button (special style)
        this.createCameraButton();
        
        // Bind close camera button event
        this.bindCloseCameraButton();
    }

    createControlPanelButton() {
        const hotspotsContainer = document.getElementById('hotspots');
        
        const controlBtn = document.createElement('div');
        controlBtn.id = 'vents-btn';
        controlBtn.className = 'control-panel-button';
        controlBtn.style.position = 'absolute';
        controlBtn.style.left = '0';
        controlBtn.style.bottom = '0';
        controlBtn.style.width = '25vw';
        controlBtn.style.height = '10vh';
        controlBtn.style.background = 'rgba(0, 0, 0, 0.7)';
        controlBtn.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        controlBtn.style.borderLeft = 'none';
        controlBtn.style.borderBottom = 'none';
        controlBtn.style.display = 'flex';
        controlBtn.style.flexDirection = 'row';
        controlBtn.style.alignItems = 'center';
        controlBtn.style.justifyContent = 'space-between';
        controlBtn.style.cursor = 'pointer';
        controlBtn.style.opacity = '0';
        controlBtn.style.transition = 'opacity 0.3s, background 0.3s';
        controlBtn.style.padding = '0 1.5vw';
        controlBtn.style.pointerEvents = 'none';
        
        // Left arrows container
        const leftArrows = document.createElement('div');
        leftArrows.style.display = 'flex';
        leftArrows.style.gap = '0.8vw';
        leftArrows.className = 'control-arrows';
        leftArrows.style.flexShrink = '0';
        
        const arrowLeft1 = document.createElement('div');
        arrowLeft1.innerHTML = '▲';
        arrowLeft1.style.color = '#fff';
        arrowLeft1.style.fontSize = '2vw';
        arrowLeft1.style.lineHeight = '1';
        leftArrows.appendChild(arrowLeft1);
        
        const arrowLeft2 = document.createElement('div');
        arrowLeft2.innerHTML = '▲';
        arrowLeft2.style.color = '#fff';
        arrowLeft2.style.fontSize = '2vw';
        arrowLeft2.style.lineHeight = '1';
        leftArrows.appendChild(arrowLeft2);
        
        controlBtn.appendChild(leftArrows);
        
        // CONTROL PANEL text
        const text = document.createElement('div');
        text.textContent = 'CONTROL PANEL';
        text.style.color = '#fff';
        text.style.fontSize = '1.8vw';
        text.style.fontWeight = 'bold';
        text.style.fontFamily = 'Arial, sans-serif';
        text.style.letterSpacing = '0.15vw';
        text.style.whiteSpace = 'nowrap';
        text.style.flex = '1';
        text.style.textAlign = 'center';
        controlBtn.appendChild(text);
        
        // Right arrows container
        const rightArrows = document.createElement('div');
        rightArrows.style.display = 'flex';
        rightArrows.style.gap = '0.8vw';
        rightArrows.className = 'control-arrows';
        rightArrows.style.flexShrink = '0';
        
        const arrowRight1 = document.createElement('div');
        arrowRight1.innerHTML = '▲';
        arrowRight1.style.color = '#fff';
        arrowRight1.style.fontSize = '2vw';
        arrowRight1.style.lineHeight = '1';
        rightArrows.appendChild(arrowRight1);
        
        const arrowRight2 = document.createElement('div');
        arrowRight2.innerHTML = '▲';
        arrowRight2.style.color = '#fff';
        arrowRight2.style.fontSize = '2vw';
        arrowRight2.style.lineHeight = '1';
        rightArrows.appendChild(arrowRight2);
        
        controlBtn.appendChild(rightArrows);
        
        // Hover effect
        controlBtn.addEventListener('mouseenter', () => {
            controlBtn.style.background = 'rgba(0, 0, 0, 0.9)';
        });
        
        controlBtn.addEventListener('mouseleave', () => {
            controlBtn.style.background = 'rgba(0, 0, 0, 0.7)';
        });
        
        // Click event - open control panel popup
        controlBtn.addEventListener('click', () => {
            this.toggleControlPanel();
            setTimeout(() => this.updateControlPanelArrows(), 50);
        });
        
        hotspotsContainer.appendChild(controlBtn);
    }

    updateControlPanelArrows() {
        const controlBtn = document.getElementById('vents-btn');
        if (!controlBtn) return;
        
        const arrows = controlBtn.querySelectorAll('.control-arrows div');
        const isOpen = document.getElementById('control-panel-popup') && 
                      !document.getElementById('control-panel-popup').classList.contains('hidden');
        
        // Before panel opens: arrows point up ▲
        // Before panel closes: arrows point down ▼
        arrows.forEach((arrow) => {
            arrow.innerHTML = isOpen ? '▼' : '▲';
        });
    }

    toggleControlPanel() {
        const panel = document.getElementById('control-panel-popup');
        if (panel) {
            const wasHidden = panel.classList.contains('hidden');
            
            // 如果要关闭面板，检查是否有操作正在进行
            if (!wasHidden && this.game.state.controlPanelBusy) {
                // console.log('Cannot close control panel: operation in progress');
                return; // 阻止关闭，不显示任何消息
            }
            
            panel.classList.toggle('hidden');
            
            // Control view rotation
            if (wasHidden) {
                // Open panel, stop rotation
                this.game.isRotatingLeft = false;
                this.game.isRotatingRight = false;
                this.game.state.controlPanelOpen = true;
            } else {
                // Close panel
                this.game.state.controlPanelOpen = false;
            }
        } else {
            this.createControlPanelPopup();
            this.game.isRotatingLeft = false;
            this.game.isRotatingRight = false;
            this.game.state.controlPanelOpen = true;
        }
    }

    createControlPanelPopup() {
        const popup = document.createElement('div');
        popup.id = 'control-panel-popup';
        popup.style.position = 'fixed';
        popup.style.top = '10vh';
        popup.style.left = '10vw';
        popup.style.width = '70vw';
        popup.style.minHeight = '60vh';
        popup.style.background = '#000';
        popup.style.border = '4px solid #0f0';
        popup.style.padding = '4vh 4vw';
        popup.style.zIndex = '100';
        popup.style.fontFamily = "'Courier New', monospace";
        popup.style.color = '#0f0';
        
        // Title
        const title = document.createElement('div');
        title.textContent = '/// Control Panel';
        title.style.fontSize = '2.5vw';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '5vh';
        popup.appendChild(title);
        
        // Options container
        const optionsContainer = document.createElement('div');
        optionsContainer.id = 'control-options';
        
        // Option 1: Air Vents
        const option1 = document.createElement('div');
        option1.id = 'option-vents';
        option1.style.fontSize = '2.5vw';
        option1.style.marginBottom = '4vh';
        option1.style.cursor = 'pointer';
        option1.style.padding = '1.5vh 0';
        option1.style.display = 'flex';
        option1.style.alignItems = 'center';
        option1.style.direction = 'ltr'; // 强制从左到右
        option1.innerHTML = this.game.state.ventsClosed ? 
            '<span class="option-arrow" style="color: #0f0; margin-right: 1.5vw; width: 2vw;">&gt;</span><span>Open Air Vents</span><span id="vents-dots" style="margin-left: 1vw; direction: ltr; font-family: \'Courier New\', monospace;"></span>' :
            '<span class="option-arrow" style="color: #0f0; margin-right: 1.5vw; width: 2vw;">&gt;</span><span>Close Air Vents</span><span id="vents-dots" style="margin-left: 1vw; direction: ltr; font-family: \'Courier New\', monospace;"></span>';
        option1.addEventListener('click', () => {
            this.game.toggleVents();
            // 不在这里立即更新，等toggleVents完成后会自动调用updateControlPanelOptions
        });
        optionsContainer.appendChild(option1);
        
        // Option 2: Restart Cameras
        const option2 = document.createElement('div');
        option2.id = 'option-cameras';
        option2.style.fontSize = '2.5vw';
        option2.style.cursor = 'pointer';
        option2.style.padding = '1.5vh 0';
        option2.style.display = 'flex';
        option2.style.alignItems = 'center';
        option2.style.direction = 'ltr'; // 强制从左到右
        option2.innerHTML = '<span class="option-arrow" style="color: transparent; margin-right: 1.5vw; width: 2vw;">&gt;</span><span>Restart Cameras</span><span id="camera-dots" style="margin-left: 1vw; direction: ltr; font-family: \'Courier New\', monospace;"></span><span id="camera-status" style="margin-left: auto; padding-right: 2vw; direction: ltr;"></span>';
        option2.addEventListener('click', () => {
            this.selectControlOption('cameras');
            this.handleRestartCamera();
        });
        optionsContainer.appendChild(option2);
        
        popup.appendChild(optionsContainer);
        
        // Click outside to close (only if no operation in progress)
        document.addEventListener('click', (e) => {
            if (!popup.contains(e.target) && e.target.id !== 'vents-btn' && !e.target.closest('#vents-btn')) {
                // 检查是否有操作正在进行
                if (this.game.state.controlPanelBusy) {
                    // console.log('Cannot close control panel: operation in progress');
                    return; // 阻止关闭，不显示任何消息
                }
                
                popup.classList.add('hidden');
                this.game.state.controlPanelOpen = false;
                this.updateControlPanelArrows();
            }
        });
        
        document.body.appendChild(popup);
    }

    selectControlOption(option) {
        const option1 = document.getElementById('option-vents');
        const option2 = document.getElementById('option-cameras');
        
        if (option === 'vents') {
            const arrow1 = option1.querySelector('.option-arrow');
            const arrow2 = option2.querySelector('.option-arrow');
            if (arrow1) arrow1.style.color = '#0f0';
            if (arrow2) arrow2.style.color = 'transparent';
            
            // 更新通风口文本（不包括dots span）
            const text1 = option1.querySelector('span:nth-child(2)');
            if (text1) {
                text1.textContent = this.game.state.ventsClosed ? 'Open Air Vents' : 'Close Air Vents';
            }
        } else {
            const arrow1 = option1.querySelector('.option-arrow');
            const arrow2 = option2.querySelector('.option-arrow');
            if (arrow1) arrow1.style.color = 'transparent';
            if (arrow2) arrow2.style.color = '#0f0';
        }
    }

    updateControlPanelOptions() {
        this.selectControlOption('vents');
        this.updateCameraStatus();
        this.updateVentsStatus(); // 添加通风口状态更新
    }
    
    // Update vents status display (dots animation)
    updateVentsStatus() {
        const dotsSpan = document.getElementById('vents-dots');
        if (!dotsSpan) return;
        
        if (this.game.state.ventsToggling) {
            // 正在切换，显示点动画
            dotsSpan.style.color = '#0f0'; // Green dots
            if (!dotsSpan.dataset.animating) {
                dotsSpan.dataset.animating = 'true';
                this.animateLoadingDots(dotsSpan);
            }
        } else {
            // 不在切换中，清空点
            dotsSpan.textContent = '';
            delete dotsSpan.dataset.animating;
        }
    }
    
    // Update camera status display
    updateCameraStatus() {
        const statusSpan = document.getElementById('camera-status');
        const dotsSpan = document.getElementById('camera-dots');
        if (!statusSpan) return;
        
        if (this.game.state.cameraRestarting) {
            // Restarting, show dots after button
            if (dotsSpan) {
                dotsSpan.style.color = '#0f0'; // Green dots
                if (!dotsSpan.dataset.animating) {
                    dotsSpan.dataset.animating = 'true';
                    this.animateLoadingDots(dotsSpan);
                }
            }
            // 只有在摄像头确实故障时才显示ERR
            if (this.game.state.cameraFailed) {
                statusSpan.style.color = '#f00';
                statusSpan.textContent = 'ERR';
            } else {
                // 没有故障时，重启期间不显示ERR
                statusSpan.textContent = '';
            }
        } else if (this.game.state.cameraFailed) {
            // Failed, show ERR on right, no dots
            if (dotsSpan) {
                dotsSpan.textContent = '';
                delete dotsSpan.dataset.animating;
            }
            statusSpan.style.color = '#f00';
            statusSpan.textContent = 'ERR';
        } else {
            // Normal, don't show anything
            if (dotsSpan) {
                dotsSpan.textContent = '';
                delete dotsSpan.dataset.animating;
            }
            statusSpan.textContent = '';
        }
    }
    
    // Animate loading dots (green dots after button)
    animateLoadingDots(element) {
        const states = ['.', '..', '...'];
        let index = 0;
        
        const animate = () => {
            if (!element.dataset.animating) return;
            
            element.textContent = states[index];
            // console.log('Dots animation:', states[index]); // 调试输出
            index = (index + 1) % states.length;
            
            setTimeout(animate, 500); // Switch every 0.5s
        };
        
        animate();
    }
    
    // Animate display (dots after button, ERR on right) - 不再使用
    animateLoadingDotsWithERR(element) {
        // 已废弃，使用 animateLoadingDots 代替
    }
    
    // Handle restart camera
    handleRestartCamera() {
        // 允许在摄像头没有故障时也能重启（作为策略使用）
        if (!this.game.state.cameraRestarting && !this.game.state.controlPanelBusy) {
            // console.log('Restarting cameras...');
            this.game.camera.restartCamera();
            
            // Immediately update status display (show loading animation, but ERR doesn't disappear)
            this.updateCameraStatus();
            
            // Update status display every 100ms
            const updateInterval = setInterval(() => {
                this.updateCameraStatus();
                if (!this.game.state.cameraRestarting) {
                    clearInterval(updateInterval);
                }
            }, 100);
        }
    }

    createCameraButton() {
        const hotspotsContainer = document.getElementById('hotspots');
        
        const cameraBtn = document.createElement('div');
        cameraBtn.id = 'camera-btn';
        cameraBtn.className = 'camera-button';
        cameraBtn.style.position = 'absolute';
        cameraBtn.style.right = '0';
        cameraBtn.style.top = '25%';
        cameraBtn.style.width = '6vw';
        cameraBtn.style.height = '45vh';
        cameraBtn.style.background = 'rgba(0, 0, 0, 0.7)';
        cameraBtn.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        cameraBtn.style.borderRight = 'none';
        cameraBtn.style.display = 'flex';
        cameraBtn.style.flexDirection = 'column';
        cameraBtn.style.alignItems = 'center';
        cameraBtn.style.justifyContent = 'space-between';
        cameraBtn.style.cursor = 'pointer';
        cameraBtn.style.opacity = '0';
        cameraBtn.style.transition = 'opacity 0.3s, background 0.3s';
        cameraBtn.style.padding = '2vh 0';
        cameraBtn.style.pointerEvents = 'none';
        
        // Top arrows container
        const topArrows = document.createElement('div');
        topArrows.style.display = 'flex';
        topArrows.style.flexDirection = 'column';
        topArrows.style.gap = '0.5vh';
        
        // Top arrow (points left when closed)
        const arrowTop = document.createElement('div');
        arrowTop.innerHTML = '◄';
        arrowTop.className = 'camera-arrow';
        arrowTop.style.color = '#fff';
        arrowTop.style.fontSize = '1.8vw';
        arrowTop.style.transform = 'rotate(0deg)';
        arrowTop.style.lineHeight = '1';
        topArrows.appendChild(arrowTop);
        
        // Second arrow
        const arrowTop2 = document.createElement('div');
        arrowTop2.innerHTML = '◄';
        arrowTop2.className = 'camera-arrow';
        arrowTop2.style.color = '#fff';
        arrowTop2.style.fontSize = '1.8vw';
        arrowTop2.style.transform = 'rotate(0deg)';
        arrowTop2.style.lineHeight = '1';
        topArrows.appendChild(arrowTop2);
        
        cameraBtn.appendChild(topArrows);
        
        // CAMERA text (horizontal text rotated 90 degrees counterclockwise)
        const text = document.createElement('div');
        text.textContent = 'CAMERA';
        text.style.color = '#fff';
        text.style.fontSize = '1.3vw';
        text.style.fontWeight = 'bold';
        text.style.fontFamily = 'Arial, sans-serif';
        text.style.transform = 'rotate(-90deg)';
        text.style.letterSpacing = '0.2vw';
        text.style.whiteSpace = 'nowrap';
        cameraBtn.appendChild(text);
        
        // Bottom arrows container
        const bottomArrows = document.createElement('div');
        bottomArrows.style.display = 'flex';
        bottomArrows.style.flexDirection = 'column';
        bottomArrows.style.gap = '0.5vh';
        
        // Bottom arrow
        const arrowBottom = document.createElement('div');
        arrowBottom.innerHTML = '◄';
        arrowBottom.className = 'camera-arrow';
        arrowBottom.style.color = '#fff';
        arrowBottom.style.fontSize = '1.8vw';
        arrowBottom.style.transform = 'rotate(0deg)';
        arrowBottom.style.lineHeight = '1';
        bottomArrows.appendChild(arrowBottom);
        
        // Second bottom arrow
        const arrowBottom2 = document.createElement('div');
        arrowBottom2.innerHTML = '◄';
        arrowBottom2.className = 'camera-arrow';
        arrowBottom2.style.color = '#fff';
        arrowBottom2.style.fontSize = '1.8vw';
        arrowBottom2.style.transform = 'rotate(0deg)';
        arrowBottom2.style.lineHeight = '1';
        bottomArrows.appendChild(arrowBottom2);
        
        cameraBtn.appendChild(bottomArrows);
        
        // Hover effect
        cameraBtn.addEventListener('mouseenter', () => {
            cameraBtn.style.background = 'rgba(0, 0, 0, 0.9)';
        });
        
        cameraBtn.addEventListener('mouseleave', () => {
            cameraBtn.style.background = 'rgba(0, 0, 0, 0.7)';
        });
        
        // Click event
        cameraBtn.addEventListener('click', () => {
            // console.log('📷 Camera button clicked!');
            this.game.toggleCamera();
            // Delay arrow update, wait for state change
            setTimeout(() => this.updateCameraButtonArrows(), 50);
        });
        
        hotspotsContainer.appendChild(cameraBtn);
    }

    bindCloseCameraButton() {
        // Close button removed - camera button is now always accessible
    }

    updateCameraButtonArrows() {
        const cameraBtn = document.getElementById('camera-btn');
        if (!cameraBtn) return;
        
        const arrows = cameraBtn.querySelectorAll('.camera-arrow');
        const isOpen = this.game.state.cameraOpen;
        
        // Update arrow direction
        // Before opening (closed state): arrows point left (0deg)
        // Before closing (open state): arrows point right (180deg)
        arrows.forEach((arrow) => {
            arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    updateHotspotVisibility(viewPosition) {
        const ventsBtn = document.getElementById('vents-btn');
        const cameraBtn = document.getElementById('camera-btn');
        
        // console.log('🔍 updateHotspotVisibility - viewPosition:', viewPosition);
        
        // Show control panel when view is at far left (viewPosition = 0)
        if (ventsBtn) {
            ventsBtn.style.opacity = viewPosition < 0.15 ? '1' : '0';
            ventsBtn.style.pointerEvents = viewPosition < 0.15 ? 'auto' : 'none';
        }
        
        // Show camera button when view is at far right (viewPosition = 1)
        if (cameraBtn) {
            const isVisible = viewPosition > 0.85;
            cameraBtn.style.opacity = isVisible ? '1' : '0';
            cameraBtn.style.pointerEvents = isVisible ? 'auto' : 'none';
            // console.log('📷 Camera button - opacity:', cameraBtn.style.opacity, 'pointerEvents:', cameraBtn.style.pointerEvents);
        }
    }

    showTooltip(event, text) {
        let tooltip = document.getElementById('game-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'game-tooltip';
            tooltip.style.position = 'fixed';
            tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '8px 12px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '14px';
            tooltip.style.pointerEvents = 'none';
            tooltip.style.zIndex = '10000';
            tooltip.style.whiteSpace = 'nowrap';
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = text;
        tooltip.style.display = 'block';
        tooltip.style.left = event.clientX + 10 + 'px';
        tooltip.style.top = event.clientY + 10 + 'px';
    }

    hideTooltip() {
        const tooltip = document.getElementById('game-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }

    updateViewPosition(viewPosition) {
        const offset = -viewPosition * 50;
        this.currentSceneImg.style.left = `${offset}%`;
        this.updateHotspotVisibility(viewPosition);
    }
}
