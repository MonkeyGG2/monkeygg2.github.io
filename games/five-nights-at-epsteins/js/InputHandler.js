// Input handler
class InputHandler {
    constructor(game) {
        this.game = game;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.isTouching = false;
        this.bindEvents();
    }

    bindEvents() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Mouse movement view control - edge trigger
        const gameScreen = document.getElementById('game-screen');
        gameScreen.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Touch controls for mobile
        gameScreen.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
        gameScreen.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        gameScreen.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: false });
    }

    handleKeyPress(e) {
        // ==================== 作弊键（生产环境请注释掉） ====================
        
        /* // F6 作弊键：立即触发特朗普进入管道（测试音效用）
        if (e.key === 'F6') {
            e.preventDefault();
            if (this.game.state.isGameRunning && this.game.enemyAI.trump.hasSpawned) {
                console.log('🎮 CHEAT: Forcing Trump to crawl into vents...');
                this.showCheatNotification('Trump entering vents NOW!');
                
                // 强制特朗普从 cam1 开始爬行
                this.game.enemyAI.trump.currentLocation = 'cam1';
                
                // 立即播放音效（不等待延迟）- 音量改为1.0（最大值）
                console.log('Playing crawling sound immediately...');
                this.game.assets.playSound('ventCrawling', true, 1.0);
                
                // 10秒后停止音效
                setTimeout(() => {
                    console.log('Stopping crawling sound...');
                    this.game.assets.stopSound('ventCrawling');
                }, 10000);
            } else if (this.game.state.isGameRunning) {
                this.showCheatNotification('Trump not spawned yet!');
            }
            return;
        }
        
        // F9 作弊键：跳过当前夜晚（调试用）
        if (e.key === 'F9') {
            e.preventDefault();
            if (this.game.state.isGameRunning) {
                console.log('🎮 CHEAT: Skipping current night...');
                
                // 显示作弊提示
                this.showCheatNotification('Skipping Night ' + this.game.state.currentNight);
                
                // 延迟执行，让玩家看到提示
                setTimeout(() => {
                    this.game.winNight();
                }, 500);
            }
            return;
        }
        
        // F10 作弊键：解锁特殊夜晚（调试用）
        if (e.key === 'F10') {
            e.preventDefault();
            console.log('🎮 CHEAT: Unlocking Special Night...');
            localStorage.setItem('night6Unlocked', 'true');
            this.showCheatNotification('Special Night Unlocked!');
            
            // 如果在主菜单，立即更新按钮显示
            if (this.game.mainMenu && !this.game.mainMenu.classList.contains('hidden')) {
                this.game.updateContinueButton();
            }
            return;
        }
        
        // F8 作弊键：解锁Custom Night（调试用）
        if (e.key === 'F8') {
            e.preventDefault();
            console.log('🎮 CHEAT: Unlocking Custom Night...');
            localStorage.setItem('night6Completed', 'true');
            this.showCheatNotification('Custom Night Unlocked!');
            
            // 如果在主菜单，立即更新按钮显示
            if (this.game.mainMenu && !this.game.mainMenu.classList.contains('hidden')) {
                this.game.updateContinueButton();
            }
            return;
        }
        
        // F7 作弊键：时间加速（测试用）
        if (e.key === 'F7') {
            e.preventDefault();
            if (this.game.state.isGameRunning) {
                this.game.state.currentTime += 1;
                this.game.ui.update();
                this.showCheatNotification(`Time: ${this.game.state.currentTime} AM`);
                
                if (this.game.state.currentTime >= 6) {
                    this.game.winNight();
                }
            }
            return;
        }
        
        // 数字键1-6：快速跳到对应关卡（测试用，仅在主菜单有效）
        if (e.key >= '1' && e.key <= '6') {
            if (this.game.mainMenu && !this.game.mainMenu.classList.contains('hidden')) {
                e.preventDefault();
                const night = parseInt(e.key);
                console.log(`🎮 CHEAT: Jumping to Night ${night}...`);
                this.game.state.currentNight = night;
                this.showCheatNotification(`Starting Night ${night}`);
                
                // 如果是Night 6，需要先解锁
                if (night === 6) {
                    localStorage.setItem('night6Unlocked', 'true');
                    setTimeout(() => this.game.startSpecialNight(), 500);
                } else {
                    setTimeout(() => this.game.initGame(), 500);
                }
                
                this.game.mainMenu.classList.add('hidden');
                const menuMusic = document.getElementById('menu-music');
                if (menuMusic) {
                    menuMusic.pause();
                    menuMusic.currentTime = 0;
                }
            }
            return;
        } */
        
        // ==================== 作弊键结束 ====================
        
        if (!this.game.state.isGameRunning) return;
        
        switch(e.key.toLowerCase()) {
            case 'v': 
                this.game.toggleVents(); 
                break;
            case ' ': 
                e.preventDefault();
                this.game.toggleCamera();
                break;
        }
    }
    
    // 作弊通知
    showCheatNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '10px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.background = 'rgba(255, 215, 0, 0.9)';
        notification.style.color = '#000';
        notification.style.padding = '10px 20px';
        notification.style.fontSize = '20px';
        notification.style.fontWeight = 'bold';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '99999';
        notification.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        notification.textContent = '🎮 CHEAT: ' + message;
        
        document.body.appendChild(notification);
        
        // 1秒后移除
        setTimeout(() => {
            notification.remove();
        }, 1000);
    }

    handleMouseMove(e) {
        if (!this.game.state.isGameRunning || this.game.state.cameraOpen) return;
        
        const edgeThreshold = 100;
        const mouseX = e.clientX;
        const screenWidth = window.innerWidth;
        
        // Check if at left edge
        if (mouseX < edgeThreshold) {
            this.game.isRotatingLeft = true;
            this.game.isRotatingRight = false;
        }
        // Check if at right edge
        else if (mouseX > screenWidth - edgeThreshold) {
            this.game.isRotatingRight = true;
            this.game.isRotatingLeft = false;
        }
        // In middle area, stop rotation
        else {
            this.game.isRotatingLeft = false;
            this.game.isRotatingRight = false;
        }
    }
    
    handleTouchStart(e) {
        if (!this.game.state.isGameRunning || this.game.state.cameraOpen) return;
        
        // Don't prevent default if touching UI elements
        const target = e.target;
        if (target.closest('.hotspot') || target.closest('.control-panel-button') || 
            target.closest('.camera-button') || target.closest('#control-panel-popup')) {
            return;
        }
        
        e.preventDefault();
        
        const touch = e.touches[0];
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        this.isTouching = true;
    }
    
    handleTouchMove(e) {
        if (!this.game.state.isGameRunning || this.game.state.cameraOpen || !this.isTouching) return;
        
        // Don't prevent default if touching UI elements
        const target = e.target;
        if (target.closest('.hotspot') || target.closest('.control-panel-button') || 
            target.closest('.camera-button') || target.closest('#control-panel-popup')) {
            return;
        }
        
        e.preventDefault();
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - this.touchStartX;
        const deltaY = Math.abs(touch.clientY - this.touchStartY);
        
        // Only rotate if horizontal swipe (not vertical)
        if (deltaY < 50) {
            const sensitivity = 0.002;
            // Reverse the direction: swipe right = view right, swipe left = view left
            const movement = -deltaX * sensitivity;
            
            // Update view position directly
            this.game.viewPosition += movement;
            this.game.viewPosition = Math.max(0, Math.min(1, this.game.viewPosition));
            this.game.ui.updateViewPosition(this.game.viewPosition);
            
            // Update touch start position for smooth continuous movement
            this.touchStartX = touch.clientX;
            this.touchStartY = touch.clientY;
        }
    }
    
    handleTouchEnd(e) {
        if (!this.game.state.isGameRunning) return;
        
        this.isTouching = false;
        this.game.isRotatingLeft = false;
        this.game.isRotatingRight = false;
    }
}
