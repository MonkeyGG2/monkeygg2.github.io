// 资源管理器
class AssetManager {
    constructor() {
        this.images = {};
        this.sounds = {};
        this.loaded = false;

        // 分类音量设置
        this.volumeSettings = this.loadVolumeSettings();
    }

    // 从 localStorage 加载音量设置
    loadVolumeSettings() {
        const saved = localStorage.getItem('fnae_volume_settings');
        if (saved) {
            return JSON.parse(saved);
        }
        // 默认音量设置
        return {
            master: 0.7,
            gameBg: 0.7,
            menuMusic: 0.7,
            jumpscare: 0.7,
            ventCrawling: 0.7
        };
    }

    // 保存音量设置
    saveVolumeSettings() {
        localStorage.setItem('fnae_volume_settings', JSON.stringify(this.volumeSettings));
    }

    // 设置特定类型的音量
    setVolume(type, volume) {
        this.volumeSettings[type] = Math.max(0, Math.min(1, volume));
        this.saveVolumeSettings();
    }

    // 获取特定类型的音量
    getVolume(type) {
        return this.volumeSettings[type] || 0.7;
    }

    // 获取所有音量设置
    getAllVolumes() {
        return this.volumeSettings;
    }

    async loadAssets() {
        // 获取当前脚本的基础路径
        const basePath = './';

        // 从 Unity 提取的资源
        const imagePaths = {
            office: `${basePath}assets/images/original.png`,
            cam1: `${basePath}assets/images/Cam1.png`,
            cam2: `${basePath}assets/images/Cam2.png`,
            cam3: `${basePath}assets/images/Cam3.png`,
            cam4: `${basePath}assets/images/Cam4.png`,
            cam5: `${basePath}assets/images/Cam5.png`,
            cam6: `${basePath}assets/images/Cam6.png`,
            cam7: `${basePath}assets/images/Cam7.png`,
            cam8: `${basePath}assets/images/Cam8.png`,
            cam9: `${basePath}assets/images/Cam9.png`,
            cam10: `${basePath}assets/images/Cam10.png`,
            cam11: `${basePath}assets/images/Cam11.png`,
            jumpscare: `${basePath}assets/images/jump.png`, // EP跳杀图片
            trumpJumpscare: `${basePath}assets/images/jumptrump.png`, // Trump跳杀图片
            hawkingJumpscare: `${basePath}assets/images/scaryhawking.png`, // Hawking跳杀图片
        };

        const soundPaths = {
            ambient: `${basePath}assets/sounds/music.ogg`,
            static: `${basePath}assets/sounds/Static_sound.ogg`,
            staticLoop: `${basePath}assets/sounds/Static_sound.ogg`,
            vents: `${basePath}assets/sounds/vents.ogg`,
            ventCrawling: `${basePath}assets/sounds/vent-crawling.mp3`,
            jumpscare: `${basePath}assets/sounds/jumpcare.ogg`,
            hawkingJumpscare: `${basePath}assets/sounds/stephenjumpscare.ogg`, // Hawking跳杀音效
            blip: `${basePath}assets/sounds/Blip.ogg`,
            win: `${basePath}assets/sounds/winmusic.ogg`,
            chimes: `${basePath}assets/sounds/chimes.ogg`,
            crank1: `${basePath}assets/sounds/Crank1.ogg`,
            crank2: `${basePath}assets/sounds/Crank2.ogg`,
            ekg: `${basePath}assets/sounds/ekg.wav`,
            hawking_shock: `${basePath}assets/sounds/hawking_shock.wav`,
            goldenstephenscare: `${basePath}assets/sounds/goldenstephenscare.ogg`, // Golden 霍金音效
        };

        // 加载图片
        for (const [key, path] of Object.entries(imagePaths)) {
            try {
                this.images[key] = await this.loadImage(path);
            } catch (e) {
                console.warn(`Failed to load image: ${path}`);
            }
        }

        // 加载音频
        for (const [key, path] of Object.entries(soundPaths)) {
            try {
                this.sounds[key] = new Audio(path);
            } catch (e) {
                console.warn(`Failed to load sound: ${path}`);
            }
        }

        this.loaded = true;
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    playSound(key, loop = false, volume = 1.0) {
        if (this.sounds[key]) {
            this.sounds[key].loop = loop;

            // 根据音效类型应用对应的音量
            let categoryVolume = this.volumeSettings.master;

            if (key === 'music' || key === 'music3') {
                categoryVolume *= this.volumeSettings.menuMusic;
            } else if (key === 'jumpscare' || key === 'hawkingJumpscare' || key === 'trumpJumpscare') {
                categoryVolume *= this.volumeSettings.jumpscare;
            } else if (key === 'ventCrawling') {
                categoryVolume *= this.volumeSettings.ventCrawling;
            } else if (key === 'vents' || key === 'ambience' || key === 'staticLoop' || key === 'static' || key === 'blip' || key === 'Blip') {
                // 游戏背景音乐：包括通风口声音、静态噪声、摄像机切换声等
                categoryVolume *= this.volumeSettings.gameBg;
            }

            this.sounds[key].volume = Math.min(1, volume * categoryVolume);
            this.sounds[key].play();
        }
    }

    stopSound(key) {
        if (this.sounds[key]) {
            this.sounds[key].pause();
            this.sounds[key].currentTime = 0;
        }
    }

    setSoundVolume(key, volume) {
        if (this.sounds[key]) {
            // 根据音效类型应用对应的音量
            let categoryVolume = this.volumeSettings.master;

            if (key === 'music' || key === 'music3') {
                categoryVolume *= this.volumeSettings.menuMusic;
            } else if (key === 'jumpscare' || key === 'hawkingJumpscare' || key === 'trumpJumpscare') {
                categoryVolume *= this.volumeSettings.jumpscare;
            } else if (key === 'ventCrawling') {
                categoryVolume *= this.volumeSettings.ventCrawling;
            } else if (key === 'vents' || key === 'ambience' || key === 'staticLoop' || key === 'static' || key === 'blip' || key === 'Blip') {
                // 游戏背景音乐：包括通风口声音、静态噪声、摄像机切换声等
                categoryVolume *= this.volumeSettings.gameBg;
            }

            this.sounds[key].volume = Math.min(1, volume * categoryVolume);
        }
    }
}
